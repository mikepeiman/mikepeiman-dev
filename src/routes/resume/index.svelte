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
			description: "Coded from scratch in Sveltekit w TailwindCSS, using GraphCMS cloud (now Hygraph) as CMS.",

			technologies_used: ['Svelte', 'TailwindCSS', 'GitHub', 'GraphCMS/HyGraph'],
			skills_applied: ['Frontend Design', 'Version control', 'Text parsing', 'API access'],
            date_begun: "",
            date_completed: "",
            date_single: "Jan 2022",
            inspired_by: [{name: "Crinkle.dev", url: "https://www.crinkle.dev" },]
		},
		{
			name: 'Super-tic-tac-toe',
			description:
				'Custom-built in Sapper; my most ambitious project thus far in terms of number of LOC (approx. 9,500) and features and UI. Dec 2019 - Jan 2020',
			technologies_used: ['Svelte', 'TailwindCSS', 'GitHub', 'GraphCMS/HyGraph'],
			skills_applied: ['Frontend Design', 'Version control', 'Text parsing', 'API access'],
            date_begun: "",
            date_completed: "",
            date_single: "Jan 2022",
            inspired_by: [{name: "Crinkle.dev", url: "https://www.crinkle.dev" },]
		},
		{
			name: 'Discord clone',
			description: 'From an Egghead tutorial using React, I adapted it to SvelteKit framework.',
			technologies_used: ['Svelte', 'TailwindCSS', 'GitHub', 'GraphCMS/HyGraph'],
			skills_applied: ['Frontend Design', 'Version control', 'Text parsing', 'API access'],
            date_begun: "",
            date_completed: "",
            date_single: "Jan 2022",
            inspired_by: [{name: "Crinkle.dev", url: "https://www.crinkle.dev" },]
		},
		{
			name: 'Pax Galaxia redux',
			description:
				'A Pax Galaxia (older desktop game) clone, early stages WIP. Using SvelteKit, HTML5 Canvas.',
			technologies_used: ['Svelte', 'TailwindCSS', 'GitHub', 'GraphCMS/HyGraph'],
			skills_applied: ['Frontend Design', 'Version control', 'Text parsing', 'API access'],
            date_begun: "",
            date_completed: "",
            date_single: "Jan 2022",
            inspired_by: [{name: "Crinkle.dev", url: "https://www.crinkle.dev" },]
		},
		{
			name: 'TW2002 redux',
			description:
				"A remake of a classic 1990's text-based MUD. Early stages WIP. Using SvelteKit, DOM manipulation",
			technologies_used: ['Svelte', 'TailwindCSS', ],
			skills_applied: ['Frontend Design', 'Version control', 'Text parsing', 'API access'],
            date_begun: "",
            date_completed: "",
            date_single: "Jan 2022",
            inspired_by: [{name: "Crinkle.dev", url: "https://www.crinkle.dev" },]
		}
	];

    const tech_skills = [
        {name: "GitHub", level: 7},
        {name: "DOM manipulation", level: 7},
        {name: "Text parsing", level: 7},
        {name: "SVG", level: 7},
        {name: "CSS", level: 7},
        {name: "SCSS", level: 7},
    ]
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

	<h3 class="text-xl m-2 font-montserrat border-b-2 border-winterblues-700">
		Items worth including:
	</h3>

	<ul class="resume-items-list px-6 py-2 w-auto">
		{#each resume_items as item}
			<h3>{item.name}</h3>
			<li>
				<div class="content-item description font-montserrat text-xl flex items-end ">
                    <div class="italic border-b-2 border-opacity-100 border-orange-500">Description:</div>
                    <div class="text-base ml-4">{item.description}</div>
                </div>
                <div class="content-item tech-list flex">
                {#each item.technologies_used as tech}

				<div class="mr-2 px-2 bg-slate-500 rounded-sm">{tech}</div>
                {/each}
            </div>
				<div class="content-item skills-list flex">
                    {#each item.skills_applied as skill}
                    <div class="px-2 mr-2 bg-cyan-800 rounded-sm">{skill}</div>
                    {/each}
</div>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.resume-items-list {
		margin: 0 2rem 0 2rem;
		& h3 {
			position: absolute;
			padding: 0.25rem 1rem;
			margin: -1px 0 0 0;
			background: var(--color-winterblues-700);

			// background: linear-gradient(
			// 			90deg,
			// 			rgba(0, 0, 0, 0.5) 0%,
			// 			rgba(0, 0, 0, 0.75) 15%,
			// 			rgba(0, 0, 0, 0.75) 85%,
			// 			rgba(0, 0, 0, 0.5) 100%
			// 		)
			// 		padding-box,
			// 	linear-gradient(
			// 		120deg,
			// 		var(--color-emerald-500) 10%,
			// 		var(--color-amber-500) 25%,
			// 		var(--color-rose-500) 50%,
			// 		var(--color-fuchsia-500) 75%,
			// 		var(--color-winterblues-400) 90%
			// 	);
			display: flex;
			font-size: 1.25rem;
			font-weight: bold;
			border: 1px solid var(--color-winterblues-600);
			// margin-bottom: 1rem;
		}
	}
	li {
		position: relative;
		// list-style-type: disc;
		margin: 0;
		font-family: 'Montserrat', sans-serif;
		width: auto;
		border-bottom: 1px solid var(--color-winterblues-600);
	}

	.content-item {
		padding: 0.5rem 1.5rem;
        &.description {

        }
	}

	.content-item:first-of-type {
		padding: 3.5rem 0.5rem 0.5rem 1.5rem;
	}

	.content-item:last-of-type {
		padding: 0.5rem 0.5rem 2.5rem 1.5rem;
	}

	/* h3 {
    font-size: 1.25rem;
    font-weight: bold;
    border-bottom: 2px solid var(--color-winterblues-600);
    margin-bottom: 1rem;
} */
</style>
