const projects = [
    {
        name: 'Mikepeiman.dev',
        type: 'website',
        genre: 'professional',
        purpose: 'professional identity and presentation',
        description: {
            stub: 'My developer portfolio, resume and blog.',
            brief: 'Fully hand-coded in Sveltekit with TailwindCSS, using Hygraph as CMS.',
            full: 'Coded from scratch in Sveltekit with TailwindCSS, using GraphCMS cloud (now Hygraph) as CMS.'
        },
        achievements: [
            { name: 'Fetch content from cloud CMS using "module" context and props', description: '', url: '' },
            { name: 'Custom generated color palettes added to TailwindCSS', description: '', url: '' },
            { name: 'Learned how to design & format for print media (resume) & .pdf download', description: '', url: '' },
        ],
        technologies_used: ['Sveltekit', 'TailwindCSS', 'Vercel', 'HyGraph', 'GraphQL'],
        skills_applied: ['Design',],
        date_begun: '',
        date_completed: '',
        date_single: 'Jan 2022',
        deployment_url: 'https://www.mikepeiman.dev',
        short_url: 'mikepeiman.dev',
        additional_links: [
            {
                name: 'Inspired by Crinkles.io',
                url: 'https://www.crinkles.io',
                notes:
                    'With great thanks to Kevin Pennekamp for the visual inspiration, I followed his example by eye and coded my own site from scratch.'
            }
        ],
        completion_MVP: 100,
        completion_total: 40,
        LOC: 100,
    },
    {
        name: 'Super-tic-tac-toe',
        type: 'application',
        genre: 'game',
        purpose: 'learning & fun',
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
        type: 'application',
        genre: 'education & learning',
        purpose: 'to facilitate elementary math learning, especially homeschooling',
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
        date_single: 'Feb 2022',
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
        type: 'application',
        genre: 'game',
        purpose: 'learning & fun, possible commercialization in future',
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
        technologies_used: ['Sveltekit', 'SVG',],
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
        name: 'Discord clone',
        type: 'application',
        genre: 'interactive mockup',
        purpose: 'Learning TailwindCSS specifically, and refactoring from React to Svelte',
        description: {
            stub: 'A pixel-perfect clone of the Discord client, refactored from React to Sveltekit.',
            brief: 'From an Egghead tutorial using React for a pixel-perfect replication of Discord UI; I adapted it to use the SvelteKit framework.',
            full: ''
        },
        achievements: [
            { name: 'Generating a hex-based grid, with all coordinates mapped and edges drawn', description: '', url: '' },
            { name: 'Implemented animated ship orbits, ship generation, and travel between stars', description: '', url: '' },
            { name: 'Intuitive UI with left click, left drag, and right click operations', description: '', url: '' },
        ],
        technologies_used: ['Sveltekit', 'Iconify',],
        skills_applied: ['Stores', 'Mock data generation', 'localStorage'],
        date_begun: '',
        date_completed: '',
        date_single: 'Jan 2022',
        deployment_url: 'https://www.mikepeiman.dev/egghead-discord',
        short_url: 'mikepeiman.dev/egghead-discord',
        additional_links: [
            {
                name: 'Craft Scalable, Custom-Made Interfaces with Tailwind CSS',
                url: 'https://egghead.io/courses/craft-scalable-custom-made-interfaces-with-tailwind-css-8dfee898',
                description: 'Egghead.io course'
            }
        ],
        completion_MVP: 100,
        completion_total: 100,
        LOC: 500,
    },
    {
        name: 'TW2002 redux',
        type: 'application',
        genre: 'game',
        purpose: 'learning & fun',
        description: {
            stub: "A remake of the classic game TW2002.",
            brief: "An original remake inspired by the classic 1990's text-based MUD, TradeWars 2002. Early stages WIP. Using SvelteKit, DOM manipulation to create a hybrid text + graphical user interface.",
            full: ''
        },
        achievements: [
            { name: "Fantasy Name Generator (Markov chain)", description: "Integrated 'Fantasy Generator' name-generation library", url: 'https://github.com/alxgiraud/fantasygen' },
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
        ],
        technologies_used: ['Svelte', 'Sapper'],
        skills_applied: ['Stores', 'Mock data generation', 'localStorage'],
        date_begun: '',
        date_completed: '',
        date_single: 'Oct 2019',
        deployment_url: 'https://www.mikepeiman.dev/egghead-discord',
        short_url: 'mikepeiman.dev/egghead-discord',
        additional_links: [
            {
                name: 'Craft Scalable, Custom-Made Interfaces with Tailwind CSS',
                url: 'https://egghead.io/courses/craft-scalable-custom-made-interfaces-with-tailwind-css-8dfee898',
                description: 'Egghead.io course'
            }
        ],
        completion_MVP: 100,
        completion_total: 100,
        LOC: 500,
        constructive_review: {date: "Aug 2022", comments: ["Having just reinstalled this repo locally, sadly some features which were working three years ago no longer are. The UI still shows up, but interactivity is lacking.",
        "Looking into the codebase, I am both impressed and distressed with what I find - a good amount of complexity, and the skeleton for some real interactivity. However, the codebase is poorly organized, lacking structure, and with a monolithic route-component which is very difficult to understand.","This app is a very clear case in point for why we need to develop thoughtful, well-organized and well-commented code - future maintainability is crucial.",]},
    },
    {
        name: 'DOTA2 Hero Stats viewer',
        type: 'application',
        genre: 'game',
        purpose: 'learning & fun',
        description: {
            stub: "A UI for sorting, filtering, and viewing DOTA2 hero stats.",
            brief: "An original app relying on web scraping to gather data on DOTA2 heroes. Uses Vue.js.",
            full: ''
        },
        achievements: [
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
        ],
        technologies_used: ['Vue', 'SCSS', 'Cheerio'],
        skills_applied: ['Frontend Design', 'Forms & calculations'],
        date_begun: '',
        date_completed: '',
        date_single: 'Oct 2018',
        deployment_url: 'https://www.mikepeiman.dev/egghead-discord',
        short_url: 'mikepeiman.dev/egghead-discord',
        additional_links: [
            {
                name: 'Craft Scalable, Custom-Made Interfaces with Tailwind CSS',
                url: 'https://egghead.io/courses/craft-scalable-custom-made-interfaces-with-tailwind-css-8dfee898',
                description: 'Egghead.io course'
            }
        ],
        completion_MVP: 100,
        completion_total: 50,
        LOC: 500,
    },
    {
        name: '5-3-1 Strength & Conditioning',
        type: 'application',
        genre: 'fitness',
        purpose: 'Learning & utility to calculate loads and plan out workout programs.',
        description: {
            stub: "An app inspired by Jim Wendler's 5-3-1 strength & conditioning program.",
            brief: "Inspired by Jim Wendler's 5-3-1 strength & conditioning program. Based on my expertise as a CrossFit coach and personal trainer, this app goes beyond his original program with a number of innovative exercise progressions, allowing users to calculate loads and plan out functional fitness programs.",
            full: ''
        },
        achievements: [
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
        ],
        technologies_used: ['Vue', 'SCSS', 'Cheerio'],
        skills_applied: ['Frontend Design', 'Forms & calculations'],
        date_begun: '',
        date_completed: '',
        date_single: 'Sept 2017',
        deployment_url: '',
        short_url: '',
        additional_links: [
            {
                name: '5-3-1 book',
                url: 'https://www.jimwendler.com/collections/books-programs/products/5-3-1-second-edition-hard-copy',
                description: 'To learn the original 5-3-1 program, check out Jim Wendler\'s original book'
            }
        ],
        completion_MVP: 100,
        completion_total: 50,
        LOC: 500,
    },
    {
        name: 'Screeps: GCL 4',
        type: 'algorithms',
        genre: 'gamified coding',
        purpose: 'Learning; a fun way to improve my coding skills',
        description: {
            stub: "Achieved Global Control Level 4 in the vanilla javascript coding game Screeps.",
            brief: "I achieved Global Control Level 4 in the vanilla javascript coding game Screeps, using 95% code I wrote myself (rather than reusing others' as is common in that game). NOTE: I am not currently active in the game, I only played it actively for several weeks.",
            full: 'I achieved Global Control Level 4 in the vanilla javascript coding game Screeps, using 95% code I wrote myself (rather than reusing others\' as is common in that game). NOTE: I am not currently active in the game, I only played it actively for several weeks.'
        },
        achievements: [
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
        ],
        technologies_used: ['JavaScript'],
        skills_applied: ['Algorithms', 'Refactoring', 'Conditional logic'],
        date_begun: '',
        date_completed: '',
        date_single: 'July 2021',
        deployment_url: 'https://screeps.com/',
        short_url: 'screeps.com',
        additional_links: [
            {
                name: 'Profile page',
                url: 'https://screeps.com/a/#!/profile/snowtigr',
                description: 'My profile, showing the level attained.'
            }
        ],
        completion_MVP: 100,
        completion_total: 50,
        LOC: 500,
    },
    {
        name: 'Quotes App',
        type: 'application',
        genre: 'education',
        purpose: 'Learning project, and as a way to take a large text file of notes and transform them into discrete database items.',
        description: {
            stub: "An app to parse a text file of quotes and save them to a database.",
            brief: "",
            full: 'This is a simple app presenting a curated list of quotes, which allows the user to filter results - the purpose and main achievement here was extensive text parsing from a file to take my personal quotes collection and render each quote as a separate item with metadata properly presented.'
        },
        achievements: [
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
        ],
        technologies_used: ['Sveltekit', 'GraphQL', 'DGraph'],
        skills_applied: ['Text parsing', 'File reading'],
        date_begun: 'October 2021',
        date_completed: '',
        date_single: 'July 2021',
        deployment_url: 'https://quotes.curriculumfor.life/',
        short_url: 'quotes.curriculumfor.life',
        additional_links: [
            { type: "", description: '', url: '' }
        ],
        completion_MVP: 90,
        completion_total: 40,
        LOC: 500,
    },
    {
        name: 'Palette Generator',
        type: 'application',
        genre: 'design',
        purpose: 'Learning focused on SCSS, as well as useful to my web design work.',
        description: {
            stub: "A palette generator with options to include images, and a preview of the generated palette.",
            brief: "",
            full: 'This is a simple app presenting a curated list of quotes, which allows the user to filter results - the purpose and main achievement here was extensive text parsing from a file to take my personal quotes collection and render each quote as a separate item with metadata properly presented.'
        },
        achievements: [
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
        ],
        technologies_used: ['JavaScript', 'SCSS', 'Svelte', 'Sapper'],
        skills_applied: ['Color', 'Image loading'],
        date_begun: 'September 2019',
        date_completed: '',
        date_single: 'Sept 2019',
        deployment_url: '',
        short_url: '',
        additional_links: [
            { type: "", description: '', url: '' }
        ],
        completion_MVP: 100,
        completion_total: 40,
        LOC: 500,
    },
    {
        name: 'DevWorkbench',
        type: 'application',
        genre: 'development tooling',
        purpose: 'Learning & utility: learning in desktop app creation using Sciter, and utility to organize my own local development projects.',
        description: {
            stub: "A desktop app using Sciter to organize local development projects.",
            brief: "",
            full: "I wanted a dashboard-style app that would reduce cognitive overhead and save time in managing and accessing my local projects, in order to help me be more productive.",
        },
        achievements: [
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
        ],
        technologies_used: ['JavaScript', 'Sciter', 'Node', 'Svelte'],
        skills_applied: ['Filesystem access', 'Application launching'],
        date_begun: 'Oct 2020',
        date_completed: 'Nov 2020',
        date_single: 'Nov 2020',
        deployment_url: '',
        short_url: '',
        additional_links: [
            { type: "", description: '', url: '' }
        ],
        completion_MVP: 50,
        completion_total: 20,
        LOC: 500,
    },
    {
        name: 'Creative Coding',
        type: 'exercises',
        genre: 'generative art',
        purpose: 'Learning to create generative art',
        description: {
            stub: "Completed an excellent little course on Creative Coding.",
            brief: "",
            full: "This was an excellent course which I thoroughly enjoyed, and despite the brief and concise presentation of the lessons, I spent many dozens of hours immersed in the exploration of creating generative art."
        },
        achievements: [
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
        ],
        technologies_used: ['JavaScript', 'HTML Canvas', 'Canvas-Sketch', 'Sveltekit'],
        skills_applied: ['Animation', 'Image output', 'Generative art'],
        date_begun: 'Oct 2021',
        date_completed: 'Nov 2021',
        date_single: 'Nov 2021',
        deployment_url: 'https://www.domestika.org/en/projects/1340433-my-project-in-creative-coding-making-visuals-with-javascript-course',
        short_url: 'domestika.org/en/projects/1340433-my-project-in-creative-coding-making-visuals-with-javascript-course',
        additional_links: [
            { type: "Course link", description: 'Creative Coding with Bruno Imbrizi', url: 'https://www.domestika.org/en/courses/2729-creative-coding-making-visuals-with-javascript/course' }
        ],
        completion_MVP: 100,
        completion_total: 100,
        LOC: 500,
    },
    {
        name: 'YouTube Comments Saver',
        type: 'platform API project',
        genre: 'social media',
        purpose: 'Saving YouTube comments to a database; potentially saving them from loss to censorship.',
        description: {
            stub: "App capable of fetching channel IDs, video IDs, fetching and displaying all comments",
            brief: "",
            full: "I was devastated to see excellent YouTube channels being censored, and I wanted to save their comments to a database in case they were lost. This app is capable of fetching channel IDs, video IDs, fetching and displaying all comments - but one of my favorite channels was deleted entirely before I could save the comments, and I lost motivation and have let the project languish."
        },
        achievements: [
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
            { name: "", description: '', url: '' },
        ],
        technologies_used: ['JavaScript', 'YouTube API', 'Python', 'Sveltekit'],
        skills_applied: ['API access', 'Python interop'],
        date_begun: 'Jan 2022',
        date_completed: 'Feb 2022',
        date_single: 'Jan 2022',
        deployment_url: '',
        short_url: '',
        additional_links: [
            { type: "", description: 'C', url: '' }
        ],
        completion_MVP: 80,
        completion_total: 80,
        status: 'abandoned',
        LOC: 500,
    },
]

export default projects