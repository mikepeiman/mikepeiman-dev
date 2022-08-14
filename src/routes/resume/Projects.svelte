<script>
	import Icon from '@iconify/svelte';
	import resume_items from './resume2.js';
	const icons = {
		link: 'akar-icons:link-chain',
		open1: 'fluent:open-folder-16-filled',
		open2: 'majesticons:open'
	};
</script>

{#if resume_items.length}
	<ul class="flex flex-col resume-items-list px-6 py-2 w-auto relative pt-10">
		{#each resume_items as project}
			<div class=" flex flex-col ">
				<div class="flex flex-col text-sm flex-wrap">
					<div class="tech-list flex flex-wrap my-2 text-warmGray-200">
						{#each project.technologies_used as tech}
							<div class="mr-2 mb-2 px-2 bg-blue-900 rounded-sm bg-opacity-80">{tech}</div>
						{/each}
						{#each project.skills_applied as skill}
							<div class="px-2 mr-2 mb-2 bg-limegreen-800 bg-opacity-60 rounded-sm">
								{skill}
							</div>
						{/each}
					</div>
				</div>
				<li class="min-h-auto project  border-gray-700  my-2 px-4 pt-4">
					<div class="project font-montserrat text-xl flex items-end ">
						<div class="project-heading grid grid-cols-9 w-full">
							<div class="flex items-center col-span-7">
								<h3 class="font-bold border-b-[1px] border-winterblues-400 w-auto">
									{project.name}
								</h3>
								<div class="ml-6 text-cyan-700 text-base">{project.description.stub}</div>
							</div>

							{#if project.additional_links.length}
								{#each project.additional_links as link}
									<a
										href={link.url}
										target="_blank"
										class="group col-span-2 p-2 bg-warmGray-500 rounded-lg"
									>
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
						</div>
						<!-- <div class="italic border-b-2 border-opacity-100 border-orange-500">summary:</div> -->
					</div>
					<div class="text-base my-2">{project.description.brief}</div>
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
