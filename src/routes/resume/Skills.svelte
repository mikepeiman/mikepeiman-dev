<script>
    	const tech_skills = [
		{ name: 'GitHub', level: 7 },
		{ name: 'DOM manipulation', level: 7 },
		{ name: 'Text parsing', level: 7 },
		{ name: 'SVG', level: 7 },
		{ name: 'CSS', level: 7 },
		{ name: 'SCSS', level: 7 }
	];
</script>
<div class=" flex flex-col items-start text-xs justify-around h-30  m-2">
    <div class="flex h-full w-full border-b-2 border-winterblues-700  ">
        <h3 class=" text-gray-800 p-1 pl-2 text-lg">Skills</h3>
    </div>
    <div class="flex flex-wrap my-2">
        {#each tech_skills as skill}
            <!-- <Icon
            icon={icons[contact.name.toLowerCase()]}
            class="ml-4 w-4 h-4 mr-2  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
        /> -->
            <div class="bg-winterblues-700 text-[.75rem] text-warmGray-200 px-1 py-1 rounded-sm m-[2px] ">{skill.name}</div>
        {/each}
    </div>
</div>