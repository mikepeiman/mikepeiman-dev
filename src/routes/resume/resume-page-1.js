const resume_items = [
    // {
    //     name: 'Mikepeiman.dev',
    //     description: {
    //         stub: 'My developer portfolio, resume and blog.',
    //         brief: 'Fully hand-coded in Sveltekit with TailwindCSS, using Hygraph as CMS.',
    //         full: 'Coded from scratch in Sveltekit with TailwindCSS, using GraphCMS cloud (now Hygraph) as CMS.'
    //     },
    //     achievements: [
    //         { name: 'Fetch content from cloud CMS using "module" context and props', description: '', url: '' },
    //         { name: 'Custom generated color palettes added to TailwindCSS', description: '', url: '' },
    //         { name: 'Learned how to design & format for print media (resume) & .pdf download', description: '', url: '' },
    //     ],
    //     technologies_used: ['Sveltekit', 'TailwindCSS', 'Vercel', 'HyGraph', 'GraphQL'],
    //     skills_applied: ['Design',],
    //     date_begun: '',
    //     date_completed: '',
    //     date_single: 'Jan 2022',
    //     deployment_url: 'https://www.mikepeiman.dev',
    //     short_url: 'mikepeiman.dev',
    //     additional_links: [
    //         {
    //             name: 'Inspired by Crinkles.io',
    //             url: 'https://www.crinkles.io',
    //             notes:
    //                 'With great thanks to Kevin Pennekamp for the visual inspiration, I followed his example by eye and coded my own site from scratch.'
    //         }
    //     ],
    //     completion_MVP: 100,
    //     completion_total: 40,
    //     LOC: 100,
    // },
    {
        name: 'Super-tic-tac-toe',
        description: {
            stub: 'A complex version of Tic-Tac-Toe with many options.',
            brief: 'Custom-built in Sapper; my most ambitious project thus far in terms of number of LOC (approx. 9,500), features and UI.',
            full: ''
        },
        achievements: [
            { name: 'Ambitious solo project of approx. 9,500 LOC, for up to 8 players', description: '', url: '' },
            { name: 'Complex scoring - tallying 4 directions with variables & bonuses', description: '', url: '' },
            { name: 'A unique game settings menu using natural language flow, and realtime calculation of viable board sizes & options based on user selections', description: '', url: '' },
        ],
        technologies_used: ['Svelte', 'Sapper', 'Netlify', 'localStorage'],
        skills_applied: ['Custom styles', 'CSS variables'],
        date_begun: 'Dec 2019',
        date_completed: 'Feb 2020',
        date_single: 'Dec 2019 - Feb 2020',
        deployment_url: 'https://super-tic-tac-toe.netlify.app/',
        short_url: 'super-tic-tac-toe.netlify.app',
        additional_links: [
            {
                name: '',
                url: '',
                description: ''
            }
        ],
        completion_MVP: 100,
        completion_total: 40,
        LOC: 500,
    },
    {
        name: 'MathSheets',
        description: {
            stub: 'An app for generating elementary math worksheets to user specifications.',
            brief: 'Created as a learning exercise for myself, and as an aid to homeschooling my daughter, specifically to generate printable, randomized and customized math problem worksheets.',
            full: ''
        },
        achievements: [
            { name: 'Developed complete user auth flow using Supabase', description: '', url: '' },
            { name: 'Implemented full CRUD functionality for worksheets', description: '', url: '' },
            { name: 'Solved some tough UI layout challenges with user-generated worksheets and options for variable number of problems, columns etc', description: '', url: '' },
        ],
        technologies_used: ['Supabase', 'Sveltekit'],
        skills_applied: ['Forms', 'Calculations', 'User Auth'],
        date_begun: '',
        date_completed: '',
        date_single: '',
        deployment_url: 'https://math.curriculumfor.life/',
        short_url: 'math.curriculumfor.life',
        additional_links: [
            {
                name: '',
                url: '',
                description: ''
            }
        ],
        completion_MVP: 100,
        completion_total: 40,
        LOC: 500,
    },
    {
        name: 'StarBattle',
        description: {
            stub: 'An early prototype WIP cloning a game called Pax Galaxia.',
            brief: 'This is a little-known game that I fell in love with in 2007, which ceased development shortly thereafter, which I always wanted to re-create in a modern way.',
            full: ''
        },
        achievements: [
            { name: 'Generating a hex-based grid, with all coordinates mapped and edges drawn', description: '', url: '' },
            { name: 'Implemented animated ship orbits, ship generation, and travel between stars', description: '', url: '' },
            { name: 'Intuitive UI with left click, left drag, and right click operations', description: '', url: '' },
        ],
        technologies_used: ['Sveltekit', 'SVG', ],
        skills_applied: ['Trigonometry', 'Hex grid generation', 'OOP'],
        date_begun: '',
        date_completed: '',
        date_single: '',
        deployment_url: 'https://starbattle.mikepeiman.dev/',
        short_url: 'starbattle.mikepeiman.dev',
        additional_links: [
            {
                name: '',
                url: '',
                description: ''
            }
        ],
        completion_MVP: 100,
        completion_total: 40,
        LOC: 500,
    },
    {
        name: 'More...',
        description: {
            stub: 'I have another dozen projects from the past few years available to demonstrate my skills and creativity.',
            brief: 'Please see project link for more details.',
            full: ''
        },
        achievements: [
        ],
        technologies_used: [],
        skills_applied: [],
        date_begun: '',
        date_completed: '',
        date_single: '',
        deployment_url: '',
        short_url: 'More projects here',
        additional_links: [
            {
                name: '',
                url: '',
                description: ''
            }
        ],
        completion_MVP: 100,
        completion_total: 40,
        LOC: 500,
    },
]

export default resume_items