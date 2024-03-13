// import { router } from "../router";
import { store } from "../store";

const guards = {
  is_logged_in: () => {
    if (store.getters.getToken !== null) return true;
    return false;
  },
  is_super_admin: () => {
    if (store.getters.getUserProfile !==null && store.getters.getUserProfile.is_superuser) {
      return true;
    }
    return false;
  },
  is_staff: () => { 
    if (store.getters.getUserProfile !==null && store.getters.getUserProfile.is_staff) {
      return true;
    }
    return false;
  },
  is_finance: () =>{
    if (store.getters.getUserRole !==null && store.getters.getUserRole === 'Finance') {
      return true;
    }
    return false;
  },
  is_frontDesk:()=>{
    if (store.getters.getUserRole !==null && store.getters.getUserRole === 'Front-Desk') {
      return true;
    }
    return false;
  },
  is_staffAdmin:()=>{
    if (store.getters.getUserRole !==null && store.getters.getUserRole === 'Admin') {
      return true;
    }
    return false;
  }
};

export { guards };
