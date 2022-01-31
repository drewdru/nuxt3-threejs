<template>
<div id="home">
  <h2 class="welcome">Welcome 👋</h2>
  <h2 class="description">A boilerplate with Next3 & Threejs (WIP)</h2>
  <ThreejsCube />
</div>
</template>

<style lang="less">
#home {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  .welcome {
    font-size: xx-large;
    color: white;
  }
  .description {
    font-size: x-large;
    color: white;
  }
}
</style>

<script lang="ts">
import { onMounted } from 'vue'
export default {
  head: {
    title: 'Home title'
  }
}
</script>

<script lang="ts" setup>
useMeta({
  meta: [
    { name: 'description', content: 'Home description' }
  ],
})
onMounted(() => {
  const { camera } = useWebGL()
  camera.position.z = 5
})
</script>