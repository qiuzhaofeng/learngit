<template>
  <div id="app">
    <dialogs :h='h3' :m='detail'></dialogs>  
    <ul>
      <li><router-link  to='/dialogs'>模态框</router-link></li>
      <li><router-link  to='/others'>其他</router-link></li>
    </ul>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Dialogs from './components/Dialogs.vue'
export default {
  name: 'app',
  components:{
      Dialogs
  },
  data() {
    return {
      h3: "中国人组团赴日买别墅 长期空置成'幽灵小镇'",
      detail:"asdf adfdsa fdafd asdf afd saf dsa fds af dsa f dsa f dsaf dsa fds a f ds a f  dsscfgfdsg asdf adfdsa fdafd asdf afd saf dsa fds af dsa f dsa f dsaf dsa fds a f ds a f  dsscfgfdsg asdf adfdsa fdafd asdf afd saf dsa fds af ds"
    }
  }
}
</script>

<style scoped lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
