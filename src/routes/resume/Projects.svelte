<script>
	import Icon from '@iconify/svelte';
import ProjectAchievements from './ProjectAchievements.svelte';
	import ProjectLinks from './ProjectLinks.svelte';
	import ProjectSkills from './ProjectSkills.svelte';
	import resume_items from './resume2.js';
	const icons = {
		link: 'akar-icons:link-chain',
		open1: 'fluent:open-folder-16-filled',
		open2: 'majesticons:open'
	};
</script>

<div class="flex flex-col text-left mt-6">
	<div class="flex h-full border-b-2 border-winterblues-700 mx-4 ">
		<h3 class=" text-gray-800 p-2 pl-2 text-xl">Projects</h3>
	</div>
	{#if resume_items.length}
		<ul class="flex flex-col resume-items-list px-6 py-2 w-auto relative ">
			{#each resume_items as project}
				<div class="flex flex-col">
					<li class="min-h-auto border-gray-700 my-2 px-0 ">
						<div class="font-montserrat text-lg flex items-end">
							<div class="project-heading flex flex-col w-full">
								<div class="flex flex-col items-start">
									<h3 class="">
										{project.name}
									</h3>
									<div class="text-xs">
										{project.description.stub}
										{project.description.brief}
									</div>
								</div>
                                <ProjectAchievements project={project} />
								<ProjectSkills {project} />
								<ProjectLinks {project} />
							</div>
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
