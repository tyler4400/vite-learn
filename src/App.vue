<template>
    <router-view></router-view>
    <div>
        <button @click="goto('/home')">home</button>
        <button @click="goto('/AnotherPage')">AnotherPage</button>
        <button @click="goto('/LazyLoadPage')">LazyLoadPage</button>
        <router-link to="/not-foundddddddd/dddd" custom v-slot="{navigate}">
          <span @click="navigate">NotFound</span>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup(){ // 测试
      const router = useRouter();
      const goto = (url: string) => {
          router.push(url)
      }
      return {
          goto
      }
    }
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
