<template></template>

<script lang="ts" setup>
import { defineComponent, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import useWebGL from '@/composables/useWebGL'
import useRAF from '@/composables/useRAF'
import { vertexShader } from '@/three/shaders/cube/vertex'
import { fragmentShader } from '@/three/shaders/cube/fragment'

const geometry = new THREE.BoxGeometry(1)
const material = new THREE.RawShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
})
const cube = new THREE.Mesh(geometry, material)
onMounted(() => {
  const { scene } = useWebGL()
  cube.name = 'Cube'
  cube.rotation.y = 10
  scene.add(cube)
  const onUpdate = () => {
    cube.rotation.y += 0.01
  }
  const raf = useRAF()
  raf.subscribe('Cube', onUpdate)
})
onUnmounted(() => {
  const { scene } = useWebGL()
  scene.remove(cube)
})
</script>