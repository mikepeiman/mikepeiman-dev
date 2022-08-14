<script>
const courses = [
    {name: 'DesignLab', description: '', url: '',},
    {name: 'Udemy', description: '', url: '',},
    {name: 'Domestika', description: '', url: 'https://www.domestika.org/en/projects/1340433-my-project-in-creative-coding-making-visuals-with-javascript-course',},
    {name: 'RMOTR', description: 'Python for data science', url: '',},
    {name: '', description: '', url: '',},
]

const subjects = [
    {name: 'JavaScript', provider: '', description: '', url: '',},
    {name: 'Svelte', provider: '', description: '', url: '',},
    {name: 'React', provider: '', description: '', url: '',},
    {name: 'Python', provider: 'RMOTR', description: '', url: '',},
    {name: 'GraphQL', provider: '', description: '', url: '',},
    {name: 'UX Design', provider: 'DesignLab', description: '', url: '',},
    {name: 'Creative Coding', provider: 'Domestika', description: '', url: 'https://www.domestika.org/en/projects/1340433-my-project-in-creative-coding-making-visuals-with-javascript-course',},
]
</script>
<div class=" flex flex-col items-start text-xs justify-around mx-2 w-full">
    <div class="flex h-auto w-full border-b-2 border-winterblues-700  ">
        <h3 class=" text-gray-800 p-0 pl-2 text-lg">Education</h3>
    </div>
    <div class="flex flex-wrap my-2">
        I have a gifted intellect, but am undegreed. I've completed various courses & tutorials in a broad range of relevant subjects.
    </div>

    <!-- , including:
    <ul class="flex flex-col items-start w-full ml-10 font-semibold">
        {#each subjects as subject}
            <li>{subject.name}</li>
        {/each}
    </ul> -->
</div>