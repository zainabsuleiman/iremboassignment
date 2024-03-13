const mutations = {
    mutateUserProfile: (state, payload) => {
        state.auth.userProfile = payload
    },
    mutateCredentials: (state, payload) => {
        state.auth.credentials = payload
    },
    mutateToken:(state, payload)=>{
        state.auth.token = payload
    },
    mutateUserBranch:(state, payload)=>{
        state.staffUser.branchName = payload
    },
    mutateUserRole:(state, payload)=>{
        state.auth.role = payload
    }
}

export {mutations}