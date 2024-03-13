import {createStore} from 'vuex'
import {mutations} from './mutations'
// import App from '../App.vue'
// import {createApp} from 'vue'
import {actions} from './actions'
import {getters} from './getters'
import { plugins } from './plugins'

const store = createStore({
    state:{
        auth:{
            credentials: null,
            userProfile: null,
            userPermissions: [],
            token:null,
            role:null,        
        },
        staffUser:{
            branchName:''
        }
    },
    mutations:{
        ...mutations
    },
    actions:{
        ...actions
    },
    getters:{
        ...getters
    },
    plugins:[
        ...plugins
    ]

})

// const app = createApp(App)

// // Install the store instance as a plugin
// app.use(store)

export {store}