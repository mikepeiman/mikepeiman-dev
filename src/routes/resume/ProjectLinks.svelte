<script>
	export let project;

	import Icon from '@iconify/svelte';
	const icons = {
		link: 'akar-icons:link-chain',
		open1: 'fluent:open-folder-16-filled',
	};
</script>

{#if project.additional_links.length}
	{#each project.additional_links as link}
		<a href={link.url} target="_blank" class="group col-span-2">
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
