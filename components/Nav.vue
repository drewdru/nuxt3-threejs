<template>
	<header>
		<nav>
			<ul>
				<li>
					<NuxtLink to="/">Home Page</NuxtLink>
				</li>
				<li>
					<NuxtLink to="about">About Page</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="less">
header {
	position: fixed;
	top: 0;
	padding: 1rem;
	width: 100%;
	z-index: 999;
	box-sizing: border-box;
	ul {
		color: white;
		display: flex;
		justify-content: flex-end;
		list-style: none;
		li {
			margin-left: 1rem;
		}
	}
}
</style>