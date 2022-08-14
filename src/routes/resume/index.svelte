<script>
	import Icon from '@iconify/svelte';
	import ContactInfo from './ContactInfo.svelte';
	import Education from './Education.svelte';
	import Projects from './Projects.svelte';
	import AboutMike from './AboutMike.svelte';
	import ResumeHeader from './ResumeHeader.svelte';
	import Skills from './Skills.svelte';
	import SubTitle from './SubTitle.svelte';
	import Objectives from './Objectives.svelte';

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
				<Objectives />
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
