<script>
	export let project;
</script>

<div class="flex flex-col text-xs flex-wrap">
	<div class="tech-list flex flex-wrap my-2 text-warmGray-200">
		{#each project.technologies_used as tech}
			<div class="mr-1 mb-1 p-1 bg-blue-900 rounded-sm bg-opacity-80">{tech}</div>
		{/each}
		{#each project.skills_applied as skill}
			<div class="mr-1 mb-1 p-1 bg-limegreen-800 bg-opacity-60 rounded-sm">
				{skill}
			</div>
		{/each}
	</div>
</div>
