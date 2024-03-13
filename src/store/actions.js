import axios from "axios";
import { alert } from "../utils/alertUtils";
import { router } from "../router";

const actions = {
  login: (context, payload) => {
    const info = {
      username: payload.username,
      password: payload.password,
    };
    const url = `${process.env.VUE_APP_BACKEND_URL}/login`;
    axios({
      method: "POST",
      url: url,
      data: info,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        router.push({
          name: "Loading",
          params: { message: "Signing you in ..." },
        });
        context.commit("mutateToken", res.data.token);
        context.dispatch("get_user_profile", res.data.token);
      })
      .catch((err) => {
        console.error(err.response.data);
        alert.error(err.response.data);
      });
  },
  logout: (context) => {
    context.commit("mutateUserProfile", null);
    context.commit("mutateToken", null);
    context.commit("mutateUserBranch", null);

    router.push("/");
  },
  saveUserBranch: (context, branch)=>{
    context.commit("mutateUserBranch", branch);
  },
  get_user_profile: (context, token) => {
    axios
      .get(`${process.env.VUE_APP_BACKEND_URL}/users/profile/`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        context.commit("mutateUserProfile", res.data.user);
        context.commit("mutateUserRole", res.data.user.role)
        if (res.data.user.is_default_password) {
          router.push({ name: "Set Password" });
          
        } else {
          // store the user profile
          if (res.data.user.referenceName === "Institution") {
            router.push({
              name: "Institution Detail",
              params: { id: res.data.user.referenceId },
            });
          }else if(res.data.user.role === "Front-Desk"){
            router.push({
              name: "Branch Switch",
              params: { id: res.data.user.id },
            });
          }
          else {
            router.push("/dashboard");
          }
        }
      })
      .catch((err) => {
        console.error(err.response);
        alert.error(err.response.data.error_description || err.response || err);
      });
  },
};

export { actions };
