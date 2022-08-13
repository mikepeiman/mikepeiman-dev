import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { join } from "path"

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		project: './src/layouts/project.svelte',
	},
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
