<script>
	import MetabrainCanvas from '$components/MetabrainCanvas.svelte';
	import projects from '$static/projects.js';
	import Icon from '@iconify/svelte';

	const icons = {
		arrowCircleLeft2: 'eva:arrow-circle-left-fill',
		home: 'bx:bxs-home-heart'
	};
</script>

<div class="flex flex-col w-screen h-full relative align-center justify-center ">
	<div class="icon-nav w-full px-20 group">
		<a
			href="/"
			class="text-winterblues-700 rounded-xl self-start justify-self-start place-self-start"
		>
			<div
				class="group relative cursor-pointer transition-all duration-400 bg-gradient-to-r hover:bg-gradient-to-r from-winterblues-400/[0] via-amber-400/[0] to-fuchsia-600/[0] hover:from-winterblues-400/[0] hover:via-rose-400/[.25] hover:to-fuchsia-600/[0.5] h-12 px-8 my-8 rounded-lg hover:transition-colors"
			>
				<Icon
					icon={icons.home}
					class="absolute top-0 left-0 w-12 h-12 -ml-2 mb-2 transition:all duration-200 group-hover:scale-0 group-hover:text-winterblues-300 group-hover:opacity-0"
				/>
				<Icon
					icon={icons.arrowCircleLeft2}
					class="absolute top-0 left-0 w-12 h-12 -ml-2 mb-2 transition:all duration-200 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 text-amber-500 group-hover:text-winterblues-300 translate-x-8 group-hover:translate-x-0"
				/>
				<h1
					class="w-full flex items-center justify-center h-12 text-3xl font-newsreader font-bold text-winterblues-700 group-hover:opacity-0 group-hover:h-0"
				/>
				<h1
					class="w-full flex items-center justify-center text-left h-12 text-3xl font-newsreader font-bold text-winterblues-400 opacity-0 h-0 group-hover:opacity-100 group-hover:h-12 "
				>
					Home
				</h1>
			</div>
		</a>
	</div>
	<div class="flex flex-col w-full h-full align-center justify-center text-center">
		<h1 class="text-6xl md:text-[5rem] lg:text-[7rem] xl:text-[10rem] font-display">Projects</h1>
		<div
			class="flex flex-col py-8 my-4 w-full bg-black bg-opacity-25 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-montserrat"
		>
			{#each projects as project}
				<div class="project p-4 m-4 w-full h-24 bg-warmGray-900 flex items-start">
					<div class="flex w-full">
						<h2>{project.name}</h2>
						<div class="flex  w-full h-auto items-end justify-end">
							<div class="flex flex-col flex-wrap w-[24ch]">
								<div class="flex metadata text-sm items-center bg-yellow-400 text-gray-750 rounded-md px-2 py-0">Type: {project.type}</div>
								<div class="flex metadata text-sm items-center bg-yellow-500 text-gray-750 rounded-md px-2 py-0">Genre: {project.genre}</div>
								<div class="flex metadata text-sm items-center bg-yellow-600 text-gray-750 rounded-md px-2 py-0 flex-wrap">Purpose: {project.purpose}</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<!-- <div class="absolute w-screen h-screen top-0 left-0 z-0">
		<MetabrainCanvas />
	</div> -->
</div>

<style lang="scss">

</style>