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

	function print() {
		console.log(`print function `)
	}
</script>

<div class="flex flex-col w-full items-center relative z-0">
	<div class="flex">
		<Icon
			icon={icons.home2}
			class="top-0 left-0 w-12 h-12 -ml-2 m-2 transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
		/>
		<Icon
			icon={icons.arrowCircleLeft2}
			class="top-0 left-0 w-12 h-12 -ml-2 m-2 transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
		/>
		<a href="" on:click="{() => print()}">
			<Icon
				icon={icons.print}
				class="top-0 left-0 w-12 h-12 -ml-2 m-2 transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
			/>
		</a>

	</div>

	{#if resume_items.length}
		<ul class="resume-items-list px-6 py-2 w-auto relative">
			<!-- <h2 class="text-2xl m-4 font-montserrat absolute top-[50%] -rotate-45 text-[12rem] z-99 text-orange-500 text-opacity-40">
            <p>W.I.P. / DRAFT</p>
        </h2> -->
			{#each resume_items as item}
				<li class="border-l-8 border-gray-700 border-b-4 my-2 px-4 bg-slate-500 bg-opacity-20 pt-4">
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
					<div class="flex flex-col text-sm">
						<div class="tech-list flex my-2">
							{#each item.technologies_used as tech}
								<div class="mr-2 px-2 bg-blue-900 rounded-sm bg-opacity-80">{tech}</div>
							{/each}
						</div>
						<div class=" skills-list flex">
							{#each item.skills_applied as skill}
								<div class="px-2 mr-2 bg-limegreen-800 bg-opacity-60 rounded-sm">{skill}</div>
							{/each}
						</div>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="scss">
	.resume-items-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 4vw;
		row-gap: 2rem;
		grid-template-rows: 1fr;
	}
	li {
		position: relative;
		min-height: 100%;
		// margin: 1.5rem 0;
		font-family: 'Montserrat', sans-serif;
		width: auto;
		// border-bottom: 1px solid var(--color-winterblues-600);
	}
</style>
