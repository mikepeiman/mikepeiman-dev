<script>
	export let project;
    console.log(`🚀 ~ file: ProjectLinks.svelte ~ line 3 ~ project`, project)

	import Icon from '@iconify/svelte';
	const icons = {
		link: 'akar-icons:link-chain',
		open1: 'fluent:open-folder-16-filled',
	};
</script>



		<div class="group text-xs">
			<a href={project.deployment_url} target="_blank" class=" flex  text-winterblues-800  group-hover:text-winterblues-500">
				<Icon
					icon={icons.link}
					class="mx-2 self-center text-winterblues-800 group-hover:hidden group-hover:text-winterblues-500"
				/>
				<Icon
					icon={icons.open1}
					class="rotate-90 hidden group-hover:flex mx-2 scale-125 self-center text-winterblues-100 hover:cursor-pointer group-hover:text-winterblues-500"
				/>
				{project.short_url}
			</a>
		</div>

<!-- 
{#if project.additional_links.length}
	{#each project.additional_links as link}
		<div class="group text-xs">
			<a href={link.url} target="_blank" class=" flex  text-winterblues-800  group-hover:text-winterblues-500">
				<Icon
					icon={icons.link}
					class="mx-2 self-center text-winterblues-800 group-hover:hidden group-hover:text-winterblues-500"
				/>
				<Icon
					icon={icons.open1}
					class="rotate-90 hidden group-hover:flex mx-2 scale-125 self-center text-winterblues-100 hover:cursor-pointer group-hover:text-winterblues-500"
				/>
				{link.url}
			</a>
		</div>
	{/each}
{/if} -->
