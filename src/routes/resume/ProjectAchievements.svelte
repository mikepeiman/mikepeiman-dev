<script>
	export let project;
</script>


{#each project.achievements as achievement}
{#if achievement.name.length}
	<ul class="flex flex-col items-start pt-1 italic font-light">
		<li class="text-xs w-auto">
			{achievement.name}
			{#if achievement.description}
			: {achievement.description}
			{/if}
			{#if achievement.url}
			<a href={achievement.url} target="_blank" class="text-cyan-400 underline">{achievement.url}</a>
			{/if}
		</li>
	</ul>
	{/if}
{/each}

<style lang="scss">
	ul li {
		list-style-type: disc;
		padding: 0;
		margin-left: 1rem;
	}
</style>
