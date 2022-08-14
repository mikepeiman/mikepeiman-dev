<script>
	export let project;
</script>

<div class="flex flex-col text-xs flex-wrap">
	<div class="tech-list flex flex-wrap mt-1 text-warmGray-200">
		{#each project.technologies_used as tech}
			<div class="mr-1 mb-1 px-[3px] py-[1px] bg-winterblues-700 rounded-sm">{tech}</div>
		{/each}
		{#each project.skills_applied as skill}
			<div class="mr-1 mb-1 px-[3px] py-[1px] bg-fuchsia-800  rounded-sm">
				{skill}
			</div>
		{/each}
	</div>
</div>
