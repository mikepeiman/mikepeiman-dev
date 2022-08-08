<script>
	import Icon from '@iconify/svelte';
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
		home: 'bx:bxs-home-heart'
	};

	const resume_items = [
		{
			name: 'Mikepeiman.dev',
			summary:
				'Coded from scratch in Sveltekit w TailwindCSS, using GraphCMS cloud (now Hygraph) as CMS.',
			technologies_used: ['Sveltekit', 'TailwindCSS', 'GitHub', 'GraphCMS/HyGraph'],
			skills_applied: ['Frontend Design', 'Text parsing', 'API access'],
			date_begun: '',
			date_completed: '',
			date_single: 'Jan 2022',
			links: [
				{
					name: 'Inspired by Crinkles.io',
					url: 'https://www.crinkles.io',
					notes:
						'With great thanks to Kevin Pennekamp for the visual inspiration, I followed his example by eye and coded my own site from scratch.'
				}
			]
		},
		{
			name: 'Super-tic-tac-toe',
			summary:
				'Custom-built in Sapper; my most ambitious project thus far in terms of number of LOC (approx. 9,500) and features and UI. Dec 2019 - Jan 2020',
			technologies_used: ['Svelte', 'TailwindCSS', 'GitHub', 'GraphCMS/HyGraph'],
			skills_applied: ['Frontend Design', 'Text parsing', 'API access'],
			date_begun: 'Dec 2019',
			date_completed: 'Feb 2020',
			date_single: '',
			links: [{ name: 'Crinkle.dev', url: 'https://www.crinkle.dev' }]
		},
		{
			name: 'Discord clone',
			summary:
				'From an Egghead tutorial using React for a pixel-perfect replication of Discord UI; I adapted it to use the SvelteKit framework.',
			technologies_used: ['Svelte', 'TailwindCSS', 'GitHub', 'GraphCMS/HyGraph'],
			skills_applied: ['Frontend Design', 'Text parsing', 'API access'],
			date_begun: '',
			date_completed: '',
			date_single: 'Jan 2022',
			links: [{ name: 'Crinkle.dev', url: 'https://www.crinkle.dev' }]
		},
		{
			name: 'Pax Galaxia redux',
			summary:
				'A Pax Galaxia (older desktop game) clone, early stages WIP. Using SvelteKit, HTML5 Canvas.',
			technologies_used: ['Svelte', 'TailwindCSS', 'GitHub', 'GraphCMS/HyGraph'],
			skills_applied: ['Frontend Design', 'Text parsing', 'API access'],
			date_begun: '',
			date_completed: '',
			date_single: 'Feb 2022',
			links: [{ name: 'Crinkle.dev', url: 'https://www.crinkle.dev' }]
		},
		{
			name: 'TW2002 redux',
			summary:
				"A remake of a classic 1990's text-based MUD. Early stages WIP. Using SvelteKit, DOM manipulation",
			technologies_used: ['Svelte', 'TailwindCSS'],
			skills_applied: ['Frontend Design', 'Text parsing', 'API access'],
			date_begun: '',
			date_completed: '',
			date_single: 'Jan 2022',
			links: [{ name: 'Crinkle.dev', url: 'https://www.crinkle.dev' }]
		},

		{
			name: 'DOTA2 Hero Stats viewer',
			summary:
				'An app to sort and filter DOTA heroes by stats, allowing the user to see, for example, total attribute gain per level. Data scraped from a public DOTA2 website.',
			technologies_used: ['Vue', 'SCSS', 'Cheerio'],
			skills_applied: ['Frontend Design', 'Forms & calculations'],
			date_begun: '',
			date_completed: '',
			date_single: 'Oct 2018',
			links: [{ name: 'Crinkle.dev', url: 'https://www.crinkle.dev' }],
			completion_MVP: 100,
			completion_total: 80
		},
		{
			name: '5-3-1 Strength & Conditioning',
			summary:
				'An app for the user to easily develop their own custom strength & conditioning workout program automatically based on several basic criteria.',
			technologies_used: ['Vue', 'SCSS'],
			skills_applied: ['Frontend Design', 'Web scraping'],
			date_begun: '',
			date_completed: '',
			date_single: 'Oct 2018',
			inspiration: [
				{
					verb: 'Inspired by',
					name: "Jim Wendler's 5-3-1 Strength program",
					canonincal: '',
					url: ''
				}
			],
			links: [{ type: '3rd-party reference', url: 'https://barbend.com/5-3-1-program/' }],
			completion_MVP: 100,
			completion_total: 80
		},
		{
			name: 'MathApp',
			summary:
				'An app made primarily to help with homeschooling my daughter, specifically to generate math problem worksheets of random problems to user-specified criteria in a nice printable format.',
			technologies_used: ['Sveltekit', 'Supabase', 'User auth'],
			skills_applied: ['Frontend Design', 'Forms & calculations', 'Custom layouts'],
			date_begun: 'Feb 2022',
			date_completed: '',
			date_single: '',
			inspiration: [
				{
					verb: 'Inspired by',
					name: "Jim Wendler's 5-3-1 Strength program",
					canonincal: '',
					url: ''
				}
			],
			links: [{ type: '3rd-party reference', url: 'https://barbend.com/5-3-1-program/' }],
			completion_MVP: 80,
			completion_total: 50
		},
		{
			name: 'Screeps: GCL 4',
			summary:
				"I achieved Global Control Level 4 in the vanilla javascript coding game Screeps, using 95% code I wrote myself (rather than reusing others' as is common in that game). ",
			description:
				'NOTE: I am not currently active in the game, I only played it actively for several weeks.',
			technologies_used: ['JavaScript'],
			skills_applied: ['Algorithms', 'Refactoring', 'Conditional logic'],
			date_begun: 'June 2021',
			date_completed: 'July 2021',
			date_single: '',
			// inspiration: [{verb: "Inspired by", name: "Jim Wendler's 5-3-1 Strength program", canonincal: "", url: ""}],
			links: [
				{ type: 'Canonical reference', url: 'https://screeps.com/' },
				{ type: 'Profile', url: 'https://screeps.com/a/#!/profile/snowtigr' }
			],
			completion_MVP: 100,
			completion_total: 40
		}
	];

	const tech_skills = [
		{ name: 'GitHub', level: 7 },
		{ name: 'DOM manipulation', level: 7 },
		{ name: 'Text parsing', level: 7 },
		{ name: 'SVG', level: 7 },
		{ name: 'CSS', level: 7 },
		{ name: 'SCSS', level: 7 }
	];
</script>

<div class="flex flex-col w-full items-center">
	<div class="icon-nav w-[80%] border-b-[1px] border-amber-400/[0.5] mb-8">
		<!-- <div class="border-b-[1px] border-amber-400/[0.5] h-[1px] w-full p-1"> -->
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
					class="w-full flex items-center justify-center h-12 text-3xl font-newsreader font-bold text-winterblues-400 group-hover:opacity-0 group-hover:h-0"
				>
					Michael Peiman
				</h1>
				<h1
					class="w-full flex items-center justify-center h-12 text-3xl font-newsreader font-bold text-winterblues-400 opacity-0 h-0 group-hover:opacity-100 group-hover:h-12 "
				>
					Home
				</h1>
			</div>
		</a>
	</div>

	<h2 class="text-2xl m-4 font-montserrat">
		This is my resume - rough draft. Needs a bit of work.
	</h2>



	<ul class="resume-items-list px-6 py-2 w-auto">
		{#each resume_items as item}
			<li class="border-l-8 border-gray-700 border-b-2 my-2 px-4 bg-slate-500 bg-opacity-20 pt-4">
				<div class="content-item summary font-montserrat text-xl flex items-end ">
					<h3 class="font-bold border-b-[1px] border-winterblues-400">{item.name}</h3>
					<!-- <div class="italic border-b-2 border-opacity-100 border-orange-500">summary:</div> -->
				</div>
                <div class="text-base my-2">{item.summary}</div>
                <div class="flex flex-col text-sm">
                    <div class="tech-list flex my-2">
                        {#each item.technologies_used as tech}
                        <div class="mr-2 px-2 bg-blue-900 rounded-sm bg-opacity-80" >{tech}</div>
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
