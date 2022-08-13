<script>
	import Icon from '@iconify/svelte';
	import resume_items from './resume2.js';
	console.log(`🚀 ~ file: index.svelte ~ line 4 ~ resume_items`, resume_items);
	const icons = {
		fire1: 'wi:fire',
		fire2: 'vaadin:fire',
		fire3: 'mdi:fire',
		fire4: 'fa:fire',
		fire5: 'fa5:fire',
		fire6: 'fa5:fire-alt',
		fire7: 'el:fire',
		fire8: 'eva:fire',
		arrowCircle1: 'bi:arrow-down-circle-fill',
		arrowCircle2: 'eva:arrow-circle-down-fill',
		arrowCircleLeft2: 'eva:arrow-circle-left-fill',
		arrowLeft: 'akar-icons:arrow-left',
		home: 'bx:bxs-home-heart',
		home2: 'charm:home',
		print: 'cil:print',
		print2: 'gridicons:print',
		print3: 'fluent:print-20-filled',
		link: 'akar-icons:link-chain',
		open1: 'fluent:open-folder-16-filled',
		open2: 'majesticons:open',
		location: 'fa6-solid:location-dot',
		phone: 'fa:phone',
		email: 'fa:envelope',
		github: 'fa:github'
	};

	const tech_skills = [
		{ name: 'GitHub', level: 7 },
		{ name: 'DOM manipulation', level: 7 },
		{ name: 'Text parsing', level: 7 },
		{ name: 'SVG', level: 7 },
		{ name: 'CSS', level: 7 },
		{ name: 'SCSS', level: 7 }
	];

	function printFunction() {
		console.log(`print function `);
		let resume = document.querySelector('.resume-items-list');
		console.log(`🚀 ~ file: index.svelte ~ line 40 ~ print ~ resume`, resume);
		window.print();
	}

	// create a function to print contents of .resume-items-list
</script>

<div
	class="flex flex-col w-full items-center justify-center relative z-0 print bg-warmGray-200 text-gray-900"
>
	<div class="flex flex-col w-full items-center text-center justify-center relative ">
		<div
			class="flex w-full justify-between items-center pl-8 bg-warmGray-200 w-full h-24 text-warmGray-400 "
		>
			<a href="/" class="print:hidden flex items-center  ">
				<!-- <Icon
					icon={icons.arrowLeft}
					class=" w-8 h-8   transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
				/> -->
				<Icon
					icon={icons.home2}
					class=" w-10 h-10  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
				/>
			</a>
			<div class="flex w-full items-center justify-center relative text-center ">
				<h1 class="text-4xl font-cairo font-bold font-regular self-center mx-6 text-warmGray-900">
					Michael Peiman
				</h1>
			</div>
			<a
				href=""
				class="print:hidden  w-10 h-10 mr-8 m-2 transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
				on:click={() => printFunction()}
			>
				<Icon
					icon={icons.print}
					class="ml-4 w-10 h-10  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
				/>
			</a>
		</div>
		<div class="flex">
			<div
				class="flex flex-col items-start font-cairo justify-around h-30 pr-6 p-2 bg-gray-900  mr-2 text-warmGray-200 "
			>
				<div class="icon-group flex mb-2">
					<Icon
						icon={icons.location}
						class="ml-4 w-4 h-4 mr-2  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
					/>
					<div class="flex text-sm">Kitchener, ON, Canada</div>
				</div>
				<div class="icon-group flex mb-2">
					<Icon
						icon={icons.email}
						class="ml-4 w-4 h-4 mr-2  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
					/>
					<div class="flex text-sm">hello@mikepeiman.dev</div>
				</div>
				<div class="icon-group flex mb-2">
					<Icon
						icon={icons.phone}
						class="ml-4 w-4 h-4 mr-2  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
					/>
					<div class="flex text-sm">1-604-698-7104</div>
				</div>
				<div class="icon-group flex mb-2s">
					<Icon
						icon={icons.github}
						class="ml-4 w-4 h-4 mr-2  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
					/>
					<div class="flex text-sm">https://github.com/mikepeiman</div>
				</div>
			</div>
			<div class="flex flex-col">
				<div class="flex flex-col w-full items-center justify-center relative text-left ">
					<h2
						class="text-xl text-bold text-warmGray-200 bg-gradient-to-r from-winterblues-700 to-fuchsia-800 to-yellow-600  w-full px-6 py-3 justify-center items-center align-middle self-baseline font-poppins font-regular "
					>
						Frontend/Fullstack Developer
					</h2>
				</div>
				<div class="text-gray-750 flex text-left pl-6 pt-4">
					<!-- <p>My resume is comprised of projects; because the best way to show my skills is my work. As I am just entering the job market, I do not have relevant employment history to include.</p> -->
					<p>
						Presenting several projects which demonstrate my proficiency in JavaScript, HTML,
						(S)CSS, Svelte/Kit, APIs; and with web design & development in general.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="subhead-item flex items-center justify-start self-start pl-10 pt-10">
		<h3>Summary</h3>
		<p>I am just entering the job market seriously after many years working on my own projects and doing small freelance jobs, therefore I am sharing the variety of projects I have worked on to show the wide breadth and progression of my skills.</p>
	</div>
	{#if resume_items.length}
		<ul class="flex flex-col resume-items-list px-6 py-2 w-auto relative pt-10">
			<!-- <h2 class="text-2xl m-4 font-montserrat absolute top-[50%] -rotate-45 text-[12rem] z-99 text-orange-500 text-opacity-40">
            <p>W.I.P. / DRAFT</p>
        </h2> -->
			{#each resume_items as project}
				<div class=" flex flex-col ">
					<div class="flex flex-col text-sm flex-wrap">
						<!-- <div class="tech-list flex flex-wrap my-2 text-warmGray-200">
							{#each project.technologies_used as tech}
								<div class="mr-2 mb-2 px-2 bg-blue-900 rounded-sm bg-opacity-80">{tech}</div>
							{/each}
							{#each project.skills_applied as skill}
								<div class="px-2 mr-2 mb-2 bg-limegreen-800 bg-opacity-60 rounded-sm">{skill}</div>
							{/each}
						</div> -->
					</div>
					<li class="min-h-auto project  border-gray-700  my-2 px-4 pt-4">
						<div class="project font-montserrat text-xl flex items-end ">
							<div class="project-heading">
								<div class="flex">
									<h3 class="font-bold border-b-[1px] border-winterblues-400 w-auto">{project.name}</h3>
									<div class="text-cyan-700 text-base">{project.description.stub}</div>
								</div>
						
							{#if project.additional_links.length}
							{#each project.additional_links as link}
								<a href={link.url} target="_blank" class="group">
									<Icon
										icon={icons.link}
										class="ml-2 self-center text-winterblues-400 group-hover:hidden group-hover:text-winterblues-100"
									/>
									<Icon
										icon={icons.open1}
										class="rotate-90 hidden group-hover:flex ml-2 scale-125 self-center text-winterblues-100 hover:cursor-pointer hover:text-winterblues-100"
									/>
								</a>
							{/each}
							{/if}
						</div>
							<!-- <div class="italic border-b-2 border-opacity-100 border-orange-500">summary:</div> -->
						</div>
						<div class="text-base my-2">{project.description.stub} </div>
						<div class="text-base my-2">{project.description.brief}</div>
					</li>
					<!-- <div class="flex flex-col justify-center">
					<div class="flex">{project.LOC ? project.LOC : 'n/a'}</div>
					<div class="flex">{project.completion_MVP ? project.completion_MVP : 'n/a'}</div>
					<div class="flex">{project.completion_total ? project.completion_total : 'n/a'}</div>
				</div> -->
				</div>
			{/each}
		</ul>
	{/if}
</div>

<style lang="scss">
	// .resume-items-list {
	// 	display: grid;
	// 	flex-direction: column;
	// 	grid-template-columns: 1fr 1fr;
	// 	column-gap: 4vw;
	// 	row-gap: 2rem;
	// 	grid-template-rows: 1fr;
	// }
	.subhead-item {
		color: var(--color-gray-800);
		& h3 {
			font-size: 1.5rem;
			height: 100%;
			padding:  0 1rem;
			justify-self: center;
			align-self: center;
			text-align: center;
			
			// border-bottom: 3px solid var(--color-winterblues-800);
			border-left: 3px solid var(--color-winterblues-800);
			border-right: 3px solid var(--color-winterblues-800);
		}
		& p {
			padding-left: 1rem;
			// font-style: italic;
		}
	}
	.project-grid {
		grid-template-columns: 20% 80%;
		break-inside: avoid;
	}
	.project-heading {
display: grid;
grid-template-columns: 1fr 8rem;
	}

	li {
		position: relative;
		min-height: 100%;
		// margin: 1.5rem 0;
		font-family: 'Montserrat', sans-serif;
		width: auto;
		// border-bottom: 1px solid var(--color-winterblues-600);
	}

	@media print {
		@page {
			size: auto;
			margin: 0mm;
		}
		.project {
			break-inside: avoid;
			// break-before: always;
		}
		@page :header {
			display: none;
		}
		@page :footer {
			display: none;
		}
		.no-print {
			display: none !important;
		}
		.print {
			display: inline;
		}
	}
</style>
