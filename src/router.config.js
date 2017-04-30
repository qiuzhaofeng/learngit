import Dialogs from './components/Dialogs.vue'
import Others from './components/Others.vue'

export default {
	routes:[
		{path:'/dialogs',component:Dialogs},
		{path:'/others',component:Others},
		// {path:'*',component:Dialog}
	]
}