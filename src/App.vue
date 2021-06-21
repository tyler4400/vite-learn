<template>
    <router-view></router-view>
    <button @click="goto('/home')">home</button>
    <button @click="goto('/AnotherPage')">AnotherPage</button>
    <button @click="goto('/LazyLoadPage')">LazyLoadPage</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
    methods: {
      goto(url: string){
          this.$router.push(url)
      }
    }
    // setup(){
    //   const router = useRouter();
    //   const goto = (url: string) => {
    //       router.push(url)
    //   }
    // }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
