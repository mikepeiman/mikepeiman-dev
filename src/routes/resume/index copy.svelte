<script>
	import Icon from '@iconify/svelte';

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
		download: 'akar-icons:download',
		print3: 'fluent:print-20-filled',
		link: 'akar-icons:link-chain',
		open1: 'fluent:open-folder-16-filled',
		open2: 'majesticons:open',
		location: 'fa6-solid:location-dot',
		phone: 'fa:phone',
		email: 'fa:envelope',
		github: 'fa:github',
		website: 'clarity:world-line',
		linkedin: 'fa:linkedin'
	};

	const tech_skills = [
		{ name: 'GitHub', level: 7 },
		{ name: 'DOM manipulation', level: 7 },
		{ name: 'Text parsing', level: 7 },
		{ name: 'SVG', level: 7 },
		{ name: 'CSS', level: 7 },
		{ name: 'SCSS', level: 7 }
	];

	const contact_info = [
		{ name: 'Email', value: 'hello@mikepeiman.dev' },
		{ name: 'Phone', value: '+1 (604) 698 7104' },
		{ name: 'Location', value: 'Kitchener, ON, Canada' },
		{ name: 'Website', value: 'mikepeiman.dev' },
		{ name: 'GitHub', value: 'github.com/mikepeiman' },
		{ name: 'LinkedIn', value: 'linkedin.com/in/mikepeiman' }
	];

	function printFunction() {
		console.log(`print function `);
		let resume = document.querySelector('.resume-items-list');
		console.log(`🚀 ~ file: index.svelte ~ line 40 ~ print ~ resume`, resume);
		window.print();
	}
	function download() {
		console.log(`print function `);
		let resume = document.querySelector('.resume-items-list');
		console.log(`🚀 ~ file: index.svelte ~ line 40 ~ print ~ resume`, resume);
	}

	// create a function to print contents of .resume-items-list
</script>

<div
	class="resume flex flex-col w-full items-center justify-center relative z-0 print bg-warmGray-200 text-gray-900 font-poppins"
>
	<div class="flex flex-col w-full items-center text-center justify-center relative ">
		<div
			class="flex w-full justify-between items-center pl-4 bg-warmGray-200 w-full h-24 text-warmGray-400 "
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
				<h1
					class="text-4xl font-montserrat  font-bold font-regular self-center mx-6 text-warmGray-900"
				>
					Michael Peiman
				</h1>
			</div>
			<a
				href=""
				class="print:hidden  w-10 h-10 m-2 transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
				on:click={() => download()}
			>
				<Icon
					icon={icons.download}
					class="ml-4 w-10 h-10  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
				/>
			</a>
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
		<div class="grid grid-cols-7 w-full">
			<div
				class="col-span-2 flex flex-col items-start text-xs justify-around h-30 pr-6 p-2 bg-gray-900  mr-2 text-warmGray-200 "
			>
				{#each contact_info as contact}
					<div class="icon-group flex mb-2">
						<Icon
							icon={icons[contact.name.toLowerCase()]}
							class="ml-4 w-4 h-4 mr-2  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
						/>
						<div class="flex ">{contact.value}</div>
					</div>
				{/each}
			</div>
			<div class="col-span-5 flex flex-col">
				<div class="flex flex-col w-full items-center justify-center relative text-left ">
					<h2
						class="text-xl text-bold text-warmGray-200 bg-gradient-to-r from-winterblues-700 to-fuchsia-800   w-full px-6 py-3 justify-center items-center align-middle self-baseline font-regular font-montserrat"
					>
						Frontend/Fullstack Developer
					</h2>
				</div>
				<div class="text-gray-750 flex text-left pl-6 pt-4 ">
					<!-- <p>My resume is comprised of projects; because the best way to show my skills is my work. As I am just entering the job market, I do not have relevant employment history to include.</p> -->
					<p>
						JavaScript, HTML, (S)CSS, Svelte/Kit, APIs.<br />Strong sense for CX, UX & UI.<br />
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="w-full">
		<!-- <div class="col-span-2"></div> -->
		<div
			class="flex flex-col h-24 w-full subhead-item flex items-start justify-start self-start pt-10"
		>
			<div
				class="flex items-center justify-center col-span-2 h-full border-b-4 border-winterblues-700  "
			>
				<h3 class=" text-gray-800  text-2xl">Summary</h3>
			</div>
			<p class="col-span-5 pl-6">
				I am just entering the job market seriously after many years working on my own projects and
				doing small freelance jobs, therefore I am sharing the variety of projects I have worked on
				to show the wide breadth and progression of my skills.
			</p>
		</div>
	</div>
	<div class="grid grid-cols-7 w-full pt-10">
		<div class="col-span-2 bg-gray-800 text-warmGray-200 w-full h-auto " />
		<div class="col-span-5  mr-4 ">
			{#if resume_items.length}
				<ul class="flex flex-col resume-items-list px-6 py-2 w-auto relative pt-10">
					<!-- <h2 class="text-2xl m-4 font-montserrat absolute top-[50%] -rotate-45 text-[12rem] z-99 text-orange-500 text-opacity-40">
            <p>W.I.P. / DRAFT</p>
        </h2> -->
					{#each resume_items as project}
						<div class=" flex flex-col ">
							<div class="flex flex-col text-sm flex-wrap">
								<div class="tech-list flex flex-wrap my-2 text-warmGray-200">
									{#each project.technologies_used as tech}
										<div class="mr-2 mb-2 px-2 bg-blue-900 rounded-sm bg-opacity-80">{tech}</div>
									{/each}
									{#each project.skills_applied as skill}
										<div class="px-2 mr-2 mb-2 bg-limegreen-800 bg-opacity-60 rounded-sm">
											{skill}
										</div>
									{/each}
								</div>
							</div>
							<li class="min-h-auto project  border-gray-700  my-2 px-4 pt-4">
								<div class="project font-montserrat text-xl flex items-end ">
									<div class="project-heading grid grid-cols-9 w-full">
										<div class="flex items-center col-span-7">
											<h3 class="font-bold border-b-[1px] border-winterblues-400 w-auto">
												{project.name}
											</h3>
											<div class="ml-6 text-cyan-700 text-base">{project.description.stub}</div>
										</div>

										{#if project.additional_links.length}
											{#each project.additional_links as link}
												<a
													href={link.url}
													target="_blank"
													class="group col-span-2 p-2 bg-warmGray-500 rounded-lg"
												>
													<Icon
														icon={icons.link}
														class="ml-2 self-center text-winterblues-400 group-hover:hidden group-hover:text-winterblues-700"
													/>
													<Icon
														icon={icons.open1}
														class="rotate-90 hidden group-hover:flex ml-2 scale-125 self-center text-winterblues-100 hover:cursor-pointer hover:text-winterblues-700"
													/>
												</a>
											{/each}
										{/if}
									</div>
									<!-- <div class="italic border-b-2 border-opacity-100 border-orange-500">summary:</div> -->
								</div>
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
	</div>
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
	// .subhead-item {
	// 	color: var(--color-gray-800);
	// 	display: grid;
	// 	grid-template-columns: repeat(7, 1fr);

	// 	& h3 {
	// 		font-size: 1.5rem;
	// 		grid-column: span 2;
	// 		height: 100%;
	// 		padding:  0 1rem;
	// 		justify-self: center;
	// 		align-self: center;
	// 		text-align: center;

	// 		// border-bottom: 3px solid var(--color-winterblues-800);
	// 		border-left: 3px solid var(--color-winterblues-800);
	// 		border-right: 3px solid var(--color-winterblues-800);
	// 	}
	// 	& p {
	// 		// padding-left: 1rem;
	// 		grid-column: span 5;
	// 		// font-style: italic;
	// 	}
	// }
	.project-grid {
		grid-template-columns: 20% 80%;
		break-inside: avoid;
	}
	// 	.project-heading {
	// display: grid;
	// grid-template-columns: 1fr 8rem;
	// 	}

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
			margin: 2cm;
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
