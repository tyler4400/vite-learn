<template>
<p>sorry, not found</p>
  <HelloWorld />
  {{ aaa }}
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<script setup>
import HelloWorld from './HelloWorld';
const aaa = '2'
</script>

<style scoped>

</style>
