<template>
	<div id="canvas" ref="canvas"></div>
</template>

<style lang="less">
#canvas {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
	box-sizing: border-box;
}
</style>

<script lang="ts" setup>
import { defineComponent, ref, onMounted } from 'vue'
import useWebGL from '@/composables/useWebGL'
const canvas: { value: HTMLElement | null } = ref(null)
onMounted(() => {
  console.log('SCENE MOUNTED')
  const { renderer } = useWebGL()
  if (canvas.value) canvas.value.appendChild(renderer.domElement)
})
</script>