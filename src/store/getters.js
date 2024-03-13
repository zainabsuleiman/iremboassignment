const getters = {
    getUsername: state => {
        return state.auth.userProfile.username
    },
    getUserPermissions: state => {
        return state.auth.userProfile.allperms
    },
    getToken: state => {
        return state.auth.token
    },
    getNames: state => {
        return `${state.auth.userProfile.firstName} ${state.auth.userProfile.lastName}`
    },
    getFirstName: state => {
        return state.auth.userProfile.firstName
    },
    getUserProfile: state => {
        return state.auth.userProfile
    },
    getUserId: state => {
        return state.auth.userProfile.id
    },

    isLoggedIn: state => {
        return state.auth.userProfile ? true : false
    },
    getBranchName: state => {
        return state.staffUser.branchName ? state.staffUser.branchName : ''
    },
    getUserRole: state => {
        return state.auth.role
    }
}

export { getters }