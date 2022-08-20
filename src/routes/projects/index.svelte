<script>
	import MetabrainCanvas from '$components/MetabrainCanvas.svelte';
	import projects from '$static/projects.js';
	import Icon from '@iconify/svelte';

	const icons = {
		arrowCircleLeft2: 'eva:arrow-circle-left-fill',
		home: 'bx:bxs-home-heart'
	};
</script>

<div class="projects w-[80vw]  flex flex-col w-screen h-full relative align-center justify-center ">
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
		<h1 class="text-6xl text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-display">Projects</h1>
		<div
			class="flex flex-col py-8 my-4 w-full bg-black bg-opacity-25 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-montserrat"
		>
			{#each projects as project}
				<div class="project relative p-8 my-6 border-l-8 border-cyan-600 rounded-r-md bg-warmGray-900 grid grid-cols-12 items-start">
					<div class="flex col-span-12 mb-2 items-start justify-start text-left flex-wrap w-full">
						<div class="flex metadata text-sm mr-4  text-gray-300 rounded-sm px-2 py-0">Type: <div class="bg-yellow-700 bg-opacity-40 text-gray-300 rounded-sm px-2 ml-1 py-0">{project.type}</div></div>
						<div class="flex metadata text-sm mr-4  text-gray-300 rounded-sm px-2 py-0">Genre: <div class="bg-yellow-600 bg-opacity-40 text-gray-300 rounded-sm px-2 ml-1 py-0">{project.genre}</div></div>
						<div class="flex metadata text-sm mr-4  text-gray-300 rounded-sm px-2 py-0">Purpose: <div class="bg-yellow-500 bg-opacity-40 text-gray-300 rounded-sm px-1 ml-2 py-0">{project.purpose}</div></div>
					</div>
					<div class="flex flex-col col-span-7 text-left w-full">
						<h2 class=" w-full border-b-2 border-cyan-300 mb-6 pb-0 h-fit">{project.name}</h2>
						<div class="flex text-sm font-sans">{project.description.full.length ? project.description.full : project.description.stub + ' ' + project.description.brief}</div>
					</div>
					<div class="flex flex-col col-span-5 w-full h-auto items-end justify-start border-r-4 border-cyan-600 bg-opacity-40">
						<div class="flex metadata text-sm  text-gray-300 rounded-sm "><div class=" text-gray-300 rounded-sm p-1">{project.date_single}</div></div>
						<div class="flex metadata text-sm  text-gray-300 rounded-sm "><div class=" text-cyan-400 rounded-sm px-1  py-0">{project.short_url}</div></div>
						<div class="flex metadata text-sm  text-gray-300 rounded-sm ">{#each project.technologies_used as tech}<div class="bg-fuchsia-500 bg-opacity-30 m-1 text-gray-300 rounded-sm px-1  py-0">{tech}</div>{/each}</div>
						<div class="flex metadata text-sm  text-gray-300 rounded-sm ">{#each project.skills_applied as skill}<div class="bg-yellow-500 bg-opacity-30 m-1 text-gray-300 rounded-sm px-1  py-0">{skill}</div>{/each}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

</div>

<style lang="scss">
.projects {
	// max-width: 60rem;
}
</style>