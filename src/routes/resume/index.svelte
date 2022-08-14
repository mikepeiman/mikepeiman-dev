<script>
	import Icon from '@iconify/svelte';
	import ContactInfo from './ContactInfo.svelte';
import Education from './Education.svelte';
import Projects from './Projects.svelte';
import AboutMike from './AboutMike.svelte';
	import resume_items from './resume2.js';
import ResumeHeader from './ResumeHeader.svelte';
	import Skills from './Skills.svelte';
	import SubTitle from './SubTitle.svelte';
	import Summary from './Summary.svelte';
	console.log(`🚀 ~ file: index.svelte ~ line 4 ~ resume_items`, resume_items);
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

	// create a function to print contents of .resume-items-list
</script>

<div class="wrapper bg-warmGray-400">
	<div class="resume bg-warmGray-200 w-full h-full text-black font-poppins">
		<div class="resume-header ">
				<ResumeHeader />
			<div class="resume-subheader w-full">
				<ContactInfo />
				<SubTitle />
			</div>
		</div>

		<div class="resume-main">
			<div class="resume-left bg-warmGray-200 flex flex-col justify-start items-start w-full">
				<Skills />
				<Education />
				<AboutMike />
			</div>
			<div class="resume-right bg-white">
				<Summary />
				<Projects />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.resume {
		display: grid;
		max-width: 8.5in;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			'header'
			'main';
	}
	.resume-header {
		grid-area: header;
	}
	.resume-subheader {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 2fr 5fr;
	}
	.resume-main {
		grid-area: main;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 2fr 5fr;
		grid-template-areas: 'left right';
	}
	.resume-left {
		grid-area: left;
	}
	.resume-right {
		grid-area: right;
	}

	.project-grid {
		grid-template-columns: 20% 80%;
		break-inside: avoid;
	}

	li {
		position: relative;
		min-height: 100%;
		// margin: 1.5rem 0;
		font-family: 'Montserrat', sans-serif;
		width: auto;
		// border-bottom: 1px solid var(--color-winterblues-600);
	}

	@media print {
		@page {
			size: auto;
			margin: 0;
		}
		.project {
			break-inside: avoid;
			// break-before: always;
		}
		@page :header {
			display: none;
		}
		@page :footer {
			display: none;
		}
		.no-print {
			display: none !important;
		}
		.print {
			display: inline;
		}
	}
</style>
