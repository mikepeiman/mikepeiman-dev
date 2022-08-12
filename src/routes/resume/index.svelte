<script>
	import Icon from '@iconify/svelte';
	import resume_items from './resume.js';
	console.log(`🚀 ~ file: index.svelte ~ line 4 ~ resume_items`, resume_items);
	import { Lilangeni } from 'faker/lib/locales/en/finance/currency';
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
		open2: 'majesticons:open'
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

<div class="flex flex-col w-full items-center justify-center relative z-0 print ">
	<div class="flex flex-col w-full items-center text-center justify-center relative ">

		<div class="flex w-full justify-between items-center pl-8 bg-warmGray-900 w-full h-24">
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
			<div class="flex flex-col w-full items-center justify-center relative text-center ">
				<h1 class="text-4xl font-montserrat font-bold font-regular self-center mx-6 ">Mike Peiman</h1>
			</div>
			<a href="" class="print:hidden  w-10 h-10 mr-8 m-2 transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer" on:click={() => printFunction()}>
				<Icon
				icon={icons.print}
				class="ml-4 w-10 h-10  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
				/>
			</a>
		</div>
		<div class="flex flex-col w-full items-center justify-center relative text-center ">
			<h2 class="text-xl text-bold text-white bg-gradient-to-r from-winterblues-700 to-emerald-700  w-full p-6 justify-center items-center align-middle self-baseline font-montserrat font-regular self-center">Developer: Frontend, fullstack, design, UX</h2>
		</div>
		<div class="subhead-item flex items-center">
			<h3>Summary</h3>
			<!-- <p>My resume is comprised of projects; because the best way to show my skills is my work. As I am just entering the job market, I do not have relevant employment history to include.</p> -->
			<p>I am just entering the job market, therefore my resume is comprised of my own projects.</p>
		</div>

	</div>

	{#if resume_items.length}
		<ul class="flex flex-col resume-items-list px-6 py-2 w-auto relative pt-20">
			<!-- <h2 class="text-2xl m-4 font-montserrat absolute top-[50%] -rotate-45 text-[12rem] z-99 text-orange-500 text-opacity-40">
            <p>W.I.P. / DRAFT</p>
        </h2> -->
			{#each resume_items as item}
			<div class="project-grid grid">
				<div class="flex flex-col text-sm flex-wrap">
					<div class="tech-list flex flex-wrap my-2">
						{#each item.technologies_used as tech}
							<div class="mr-2 mb-2 px-2 bg-blue-900 rounded-sm bg-opacity-80">{tech}</div>
						{/each}
						{#each item.skills_applied as skill}
						<div class="px-2 mr-2 mb-2 bg-limegreen-800 bg-opacity-60 rounded-sm">{skill}</div>
					{/each}
					</div>
				</div>
				<li class="min-h-auto py-4 project border-l-8 border-gray-700 border-b-4 my-2 px-4 bg-slate-500 bg-opacity-20 pt-4">
					<div class="content-item summary font-montserrat text-xl flex items-end ">
						<h3 class="font-bold border-b-[1px] border-winterblues-400">{item.name}</h3>
						{#each item.links as link}
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
						<!-- <div class="italic border-b-2 border-opacity-100 border-orange-500">summary:</div> -->
					</div>
					<div class="text-base my-2">{item.summary}</div>

				</li>
				<div class="flex flex-col justify-center">
					<div class="flex">{item.LOC ? item.LOC : 'n/a'}</div>
					<div class="flex">{item.completion_MVP ? item.completion_MVP : 'n/a'}</div>
					<div class="flex">{item.completion_total ? item.completion_total : 'n/a'}</div>
				</div>
			</div>
			{/each}
		</ul>
	{/if}
</div>

<style lang="scss">
	// .resume-items-list {
	// 	display: flex;
	// 	flex-direction: column;
	// 	grid-template-columns: 1fr 1fr;
	// 	column-gap: 4vw;
	// 	row-gap: 2rem;
	// 	grid-template-rows: 1fr;
	// }
	.subhead-item {
		& h3 {
			font-size: 1.5rem;
			padding: 1rem 0;
			border-bottom: 3px solid var(--color-winterblues-600);
		}
		& p {
			padding-left: 1rem;
			font-style: italic;
		}
	}
	.project-grid {
		grid-template-columns: 20% 60% 20%;
		break-inside: avoid;
	}
	.project {
		// break-inside: avoid;
		// break-before: always;
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
		@page { size: auto;  margin: 0mm; }
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
