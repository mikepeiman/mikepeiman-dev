<script>
	import Icon from '@iconify/svelte';
const icons = {
		fire1: 'wi:fire',
		fire2: 'vaadin:fire',
		fire3: 'mdi:fire',
		fire4: 'fa:fire',
		fire5: 'fa5:fire',
		fire6: 'fa5:fire-alt',
		fire7: 'el:fire',
		fire8: 'eva:fire',
		arrowCircle1: 'bi:arrow-down-circle-fill',
		arrowCircle2: 'eva:arrow-circle-down-fill',
		arrowCircleLeft2: 'eva:arrow-circle-left-fill',
		arrowLeft: 'akar-icons:arrow-left',
		home: 'bx:bxs-home-heart',
		home2: 'charm:home',
		print: 'cil:print',
		print2: 'gridicons:print',
		download: 'akar-icons:download',
		print3: 'fluent:print-20-filled',
		link: 'akar-icons:link-chain',
		open1: 'fluent:open-folder-16-filled',
		open2: 'majesticons:open',
		location: 'fa6-solid:location-dot',
		phone: 'fa:phone',
		email: 'fa:envelope',
		github: 'fa:github',
		website: 'clarity:world-line',
		linkedin: 'fa:linkedin'
	};
</script>

<div
class="flex w-full justify-between items-center pl-4 bg-warmGray-200 w-full h-24 text-warmGray-400 "
>
<a href="/" class="print:hidden flex items-center  ">
    <Icon
        icon={icons.home2}
        class=" w-10 h-10  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
    />
</a>
<div class="flex w-full items-center justify-center relative text-center ">
    <h1
        class="text-4xl font-montserrat  font-bold font-regular self-center mx-6 text-warmGray-900"
    >
        Michael Peiman
    </h1>
</div>
<a
    href=""
    class="print:hidden  w-10 h-10 m-2 transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
    on:click={() => download()}
>
    <Icon
        icon={icons.download}
        class="ml-4 w-10 h-10  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
    />
</a>
<a
    href=""
    class="print:hidden  w-10 h-10 mr-8 m-2 transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
    on:click={() => printFunction()}
>
    <Icon
        icon={icons.print}
        class="ml-4 w-10 h-10  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
    />
</a>
</div>