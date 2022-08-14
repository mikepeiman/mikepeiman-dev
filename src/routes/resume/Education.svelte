<script>
const courses = [
    {name: 'DesignLab', description: '', url: '',},
    {name: 'Udemy', description: '', url: '',},
    {name: 'Domestika', description: '', url: 'https://www.domestika.org/en/projects/1340433-my-project-in-creative-coding-making-visuals-with-javascript-course',},
    {name: 'RMOTR', description: 'Python for data science', url: '',},
    {name: '', description: '', url: '',},
]

const subjects = [
    {name: 'Python', provider: 'RMOTR', description: '', url: '',},
    {name: 'JavaScript', provider: '', description: '', url: '',},
    {name: 'React', provider: '', description: '', url: '',},
    {name: 'Svelte', provider: '', description: '', url: '',},
    {name: 'UX Design', provider: 'DesignLab', description: '', url: '',},
    {name: 'Creative Coding', provider: 'Domestika', description: '', url: 'https://www.domestika.org/en/projects/1340433-my-project-in-creative-coding-making-visuals-with-javascript-course',},
]
</script>
<div class=" flex flex-col items-start text-xs justify-around m-2 w-full">
    <div class="flex h-auto w-full border-b-2 border-winterblues-700  ">
        <h3 class=" text-gray-800 p-1 pl-2 text-lg">Education</h3>
    </div>
    <div class="flex flex-wrap my-2">
        No formal degree; I have a passion for learning and problem solving. I've studied a broad range of relevant subjects, including:
    </div>
    <ul>
        {#each subjects as subject}
            <li>{subject.name}</li>
        {/each}
    </ul>
</div>