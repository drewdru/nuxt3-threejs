<template>
	<div class="layout">
		<Nav />
		<ThreejsScene />
		<main id="main" class="page">
			<slot />
		</main>
	</div>
</template>

<script lang="ts" setup>
useMeta({
  bodyAttrs: {
    class: 'body'
  },
})
</script>


<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>