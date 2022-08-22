<script>
	import Icon from '@iconify/svelte';
	import ProjectAchievements from './ProjectAchievements.svelte';
	import ProjectLinks from './ProjectLinks.svelte';
	import ProjectSkills from './ProjectSkills.svelte';
	import resume_items from './resume-page-1.js';
	const icons = {
		link: 'akar-icons:link-chain',
		open1: 'fluent:open-folder-16-filled',
		open2: 'majesticons:open'
	};
</script>

<div class="flex flex-col text-left mt-0">
	<div class="flex h-full border-b-2 border-winterblues-700 mx-4 ">
		<h3 class=" text-gray-800 p-0 mt-4 pl-2 text-lg">Projects</h3>
	</div>
	{#if resume_items.length}
		<ul class="flex flex-col resume-items-list px-6 py-2 w-auto relative break-inside-avoid break-inside-avoid-column break-inside-avoid-page">
			{#each resume_items as project}
				<div class="flex flex-col">
     
					<li class="min-h-auto border-gray-700 mb-2 px-0 ">
						<div class="font-montserrat text-base font-semibold flex  items-center justify-between">
                            <h3 class="">
                                {project.name}
                            </h3>
                            <div class="flex">
                                <ProjectLinks {project} />
                            </div>
                            </div>
							<div class="w-full "> <!-- grid grid-cols-10 to place the skills to the right -->
								<div class="flex flex-col col-span-8 items-start">
									<div class="text-xs">
										{project.description.stub}
										{project.description.brief}
									</div>
                                    <ProjectAchievements {project} />
								</div>
								<div class="col-span-2">
                                    <ProjectSkills {project} />
                                </div>
							<!-- </div> -->
							<!-- <div class="italic border-b-2 border-opacity-100 border-orange-500">summary:</div> -->
						</div>
					</li>
					<!-- <div class="flex flex-col justify-center">
                <div class="flex">{project.LOC ? project.LOC : 'n/a'}</div>
                <div class="flex">{project.completion_MVP ? project.completion_MVP : 'n/a'}</div>
                <div class="flex">{project.completion_total ? project.completion_total : 'n/a'}</div>
            </div> -->
				</div>
			{/each}
		</ul>
	{/if}
</div>
