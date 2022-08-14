<script>
	const contact_info = [
		{ name: 'Email', value: 'hello@mikepeiman.dev' },
		{ name: 'Phone', value: '+1 (604) 698 7104' },
		{ name: 'Location', value: 'Kitchener, ON, Canada' },
		{ name: 'Website', value: 'mikepeiman.dev' },
		{ name: 'GitHub', value: 'github.com/mikepeiman' },
		{ name: 'LinkedIn', value: 'linkedin.com/in/mikepeiman' }
	];

    import Icon from '@iconify/svelte';
    const icons = {
		location: 'fa6-solid:location-dot',
		phone: 'fa:phone',
		email: 'fa:envelope',
		github: 'fa:github',
		website: 'clarity:world-line',
		linkedin: 'fa:linkedin'
	};
</script>

<div
class=" flex flex-col items-start text-[0.65rem] justify-around h-30 pr-0 py-2 -ml-2  bg-gray-700  text-warmGray-200 w-full"
>
{#each contact_info as contact}
    <div class="icon-group flex mb-1 items-center">
        <Icon
            icon={icons[contact.name.toLowerCase()]}
            class="ml-4 w-4 h-4 mx-2 transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
        />
        <div class="flex items-center">{contact.value}</div>
    </div>
{/each}
</div>