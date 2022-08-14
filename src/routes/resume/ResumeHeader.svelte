<script>
	import Icon from '@iconify/svelte';
	const icons = {
		home2: 'charm:home',
		print: 'cil:print',
		download: 'akar-icons:download'
	};

    function printFunction() {
		console.log(`print function `);
		let resume = document.querySelector('.resume-items-list');
		console.log(`🚀 ~ file: index.svelte ~ line 40 ~ print ~ resume`, resume);
		window.print();
	}
	function download() {
		console.log(`print function `);
		let resume = document.querySelector('.resume-items-list');
		console.log(`🚀 ~ file: index.svelte ~ line 40 ~ print ~ resume`, resume);
	}
</script>

<div
	class="flex w-full justify-between items-center pl-4 bg-warmGray-200 w-full my-2 text-warmGray-400"
>
	<a href="/" class="print:hidden flex items-center  ">
		<Icon
			icon={icons.home2}
			class=" w-8 h-8  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
		/>
	</a>
	<div class="flex w-full items-center justify-center relative text-center">
		<h1 class="text-4xl font-montserrat  font-bold font-regular self-center mx-6 text-warmGray-900">
			Michael Peiman
		</h1>
	</div>
	<a
		href=""
		class="print:hidden  w-8 h-8 m-2 transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
		on:click={() => download()}
	>
		<Icon
			icon={icons.download}
			class="ml-4 w-8 h-8  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
		/>
	</a>
	<a
		href=""
		class="print:hidden  w-8 h-8 mr-8 m-2 transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
		on:click={() => printFunction()}
	>
		<Icon
			icon={icons.print}
			class="ml-4 w-8 h-8  transition:all duration-200  hover:text-winterblues-500 hover:cursor-pointer"
		/>
	</a>
</div>
