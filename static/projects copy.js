const projects = [
    {
        name: 'Mikepeiman.dev',
        summary:
            'Coded from scratch in Sveltekit with TailwindCSS, using GraphCMS cloud (now Hygraph) as CMS.',
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
            'Custom-built in Sapper; my most ambitious project thus far in terms of number of LOC (approx. 9,500), features and UI. Dec 2019 - Jan 2020',
        technologies_used: ['Svelte', 'Sapper', 'GraphCMS/HyGraph'],
        skills_applied: ['Forms and calculations', 'Text parsing', 'API access'],
        libraries: ['RolloverJS'],
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
        links: [{ name: 'Discord clone', url: 'https://www.mikepeiman.dev/egghead-discord' }]
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
        links: [{ description: '3rd-party reference', url: 'https://barbend.com/5-3-1-program/' }],
        completion_MVP: 100,
        completion_total: 80
    },
    {
        name: 'MathApp',
        summary:
            'An app made primarily to help with homeschooling my daughter, specifically to generate math problem worksheets of random problems to user-specified criteria in a nice printable format.',
        technologies_used: ['Sveltekit', 'Supabase', 'User auth'],
        skills_applied: ['Icon menus', 'Forms & calculations', 'Custom layouts'],
        date_begun: 'Feb 2022',
        date_completed: '',
        date_single: '',
        inspiration: [
            {
                verb: 'Inspired by',
                name: "My daughter 😍",
                canonincal: '',
                url: ''
            }
        ],
        links: [{ type: 'Deployment', description: 'If social login does not work it is due to limitations of the free tier on Supabase hosting. Send me a message and I can get it active for 7 days.', url: 'https://math.curriculumfor.life/' }],
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
            { type: 'primary', description: 'Canonical reference', url: 'https://screeps.com/' },
            { description: 'Profile', url: 'https://screeps.com/a/#!/profile/snowtigr' }
        ],
        completion_MVP: 100,
        completion_total: 40
    },
    {
        name: 'Quotes App',
        summary:
            "This is a simple app presenting a curated list of quotes, which allows the user to filter results - the purpose and main achievement here was extensive text parsing from a file to take my personal quotes collection and render each quote as a separate item with metadata properly presented.",
        description:
    "This is a simple app with basic functionality for the user to filter results - the purpose and main achievement here was extensive text parsing from a file to take my personal quotes collection and render each quote as a separate item with metadata properly presented.",
        technologies_used: ['JavaScript'],
        skills_applied: ['Text parsing', 'File reading', 'Icon menus'],
        date_begun: 'October 2021',
        date_completed: '',
        date_single: '',
        // inspiration: [{verb: "Inspired by", name: "Jim Wendler's 5-3-1 Strength program", canonincal: "", url: ""}],
        links: [
            { type: 'primary', description: 'Canonical reference', url: 'https://quotes.curriculumfor.life/' }
        ],
        completion_MVP: 90,
        completion_total: 40
    },
    {
        name: 'Palette Generator',
        summary:
            "This app was inspired by several excellent palette generators, and I took the opportunity to learn more SCSS.",
        description:
    "",
        technologies_used: ['JavaScript', 'SCSS', 'Svelte', 'Sapper'],
        skills_applied: ['Color', 'Image loading'],
        date_begun: 'October 2021',
        date_completed: '',
        date_single: '',
        // inspiration: [{verb: "Inspired by", name: "Jim Wendler's 5-3-1 Strength program", canonincal: "", url: ""}],
        links: [
            { type: 'primary', description: 'Canonical reference', url: 'https://quotes.curriculumfor.life/' }
        ],
        completion_MVP: 90,
        completion_total: 40,
        LOC: 100,
    },
]

export default projects