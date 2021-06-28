<template>
  <p :class="$style['big-text']">hello, this is a template project.-- {{title}}</p>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const title = import.meta.env.VITE_APP_TITLE
    return {
      title,
    }
  },
})
</script>

<style scoped module>
.big-text{
    font-size: 20px;
}
</style>
