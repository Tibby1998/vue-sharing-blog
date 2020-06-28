<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view></router-view>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  data(){
    return {
      
    }
  },
  components:{
    Header,
    Footer
  }  
}
</script>

<style lang="scss">
@import './assets/common.scss';

#app {
  display: flex;
  flex-direction: column;
  #header,#footer{
    text-align: center;
  }
  #main{
    flex: 1;
  }
}

@media (max-width: 768px) {
  #app{
    #header, #footer {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  
}
</style>
