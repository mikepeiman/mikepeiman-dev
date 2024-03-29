<script>
	export let hidePanel = true
	import CanvasSketchEditor from '$components/CanvasSketchEditor.svelte';
	import Slider from '$components/Slider.svelte';
	import ColorInput from '$components/ColorInput.svelte';
	import OptionSelect from '$components/OptionSelect.svelte';
	import Checkbox from '$components/Checkbox.svelte';
	import { onMount } from 'svelte';
	import random from 'canvas-sketch-util/random.js';
	import { parseHSLA } from '$utils/parseColor';

	const data = {
		TITLE: 'Sketch02',
		itemHeight: 25,
		itemWidth: 25,
		itemScaleX: 1,
		itemScaleY: 1,
		width: 1000,
		height: 1000,
		gap: 15,
		itemsPerColumn: 25,
		itemsPerRow: 25,
		originX: 0,
		originY: 0,
		totalItems: false,
		remainingWidth: 1080,
		remainingHeight: 1080,
		margin: 100,
		offset: 0,
		randomFactor: 0.5,
		opacityMedian: 0.5,
		opacityVariance: 0.25,
		randomStroke: true,
		randomFill: true,
		fill: 'hsla(180,50%,50%,0.5)',
		fillHSLA: 'hsla(180,50%,50%,0.5)',
		fillOpacity: '.25',
		stroke: '#ffffffaa',
		strokeHSLA: 'hsla(60,50%,50%,0.5)',
		strokeOpacity: '.25',
		strokeRandom: '#0033cff',
		strokeRandomHSLA: 'hsla(320,50%,50%,0.5)',
		strokeRandomOpacity: '.25',
		background: '00000000',
		outline: true,
		fitToCanvas: true,
		shapes: [
			{ value: 'square', label: 'square' },
			{ value: 'circle', label: 'circle' }
		],
		shape: 'square',
		startAngle: 0,
		endAngle: 7,
		arclen: 0.5,
		angle: 0,
		radius: 0.33,
		lineWidth: 2,
		lineWidthRandom: 5
	};

	let width = 1080;
	let height = 1080;
	let canvas = {};
	canvas['width'] = width;
	canvas['height'] = height;
	let fill, stroke;
	let mounted = false;

	// $: data.width = canvas.width
	$: data.totalItems = data.itemsPerColumn * data.itemsPerRow;

	$: if (mounted) {
		let totalGapX = data.itemsPerRow * data.gap;
		data.remainingWidth = data.width - totalGapX - data.margin;
		let totalGapY = data.itemsPerColumn * data.gap;
		data.remainingHeight = data.height - totalGapY - data.margin;
		data.itemWidth = data.remainingWidth / data.itemsPerRow;
		data.itemHeight = data.remainingHeight / data.itemsPerColumn;
	}

	const settings = {
		scaleToView: true,
		dimensions: [1280, 1280]
	};

	onMount(() => {
		mounted = true;
		let canvas = document.getElementsByTagName('canvas')[0];
		width = canvas.width;
		height = canvas.height;
	});

	const sketch = ({ context, width, height }) => {
		data.width = width;
		data.height = height;
		data.remainingWidth = width - data.itemsPerRow * data.gap;
		data.remainingHeight = height - data.itemsPerColumn * data.gap;
		data.itemWidth = data.remainingWidth / data.itemsPerRow;
		data.itemHeight = data.remainingHeight / data.itemsPerColumn;

		return ({ context, width, height }) => {
			context.clearRect(0, 0, width, height);
			context.fillStyle = data.background;
			context.fillRect(0, 0, width, height);
			drawGrid(context, width, height);
		};
	};

	function drawGrid(context, width, height) {
		// console.log(data);
		for (let j = 0; j < data.itemsPerColumn; j++) {
			for (let i = 0; i < data.itemsPerRow; i++) {
				let x = (data.itemWidth + data.gap) * i;
				let y = (data.itemHeight + data.gap) * j;
				stroke = data.strokeHSLA;
				if (data.shape == 'square') {
					drawRect(
						context,
						x + data.margin / 2 + data.gap / 2,
						y + data.margin / 2 + data.gap / 2,
						data.itemWidth,
						data.itemHeight,
						data.fillHSLA,
						stroke,
						data.lineWidth
					);
				} else {
					drawArc(
						context,
						x + data.margin / 2 + data.gap / 2,
						y + data.margin / 2 + data.gap / 2,
						Math.abs(data.itemWidth),
						data.startAngle,
						data.endAngle,
						data.fillHSLA,
						stroke,
						data.lineWidth
					);
				}

				if (Math.random() < data.randomFactor) {
					// conditional if random squares are offset, so they don't get cut off by canvas edge
					// if (i < data.itemsPerRow - 2 && j < data.itemsPerColumn - 2) {

					data.randomStroke
						? (stroke = `hsla(${setItemColor(
								i,
								j,
								data.totalItems * 0.3
						  )}, 90%, 50%, ${random.range(
								data.opacityMedian - data.opacityVariance,
								data.opacityMedian + data.opacityVariance
						  )})`)
						: (stroke = data.strokeRandomHSLA);

					data.randomFill
						? (fill = `hsla(${setItemColor(i, j, data.totalItems * 0.3)}, 90%, 50%, ${random.range(
								data.opacityMedian - data.opacityVariance,
								data.opacityMedian + data.opacityVariance
						  )})`)
						: (fill = data.fillRandomHSLA);

					if (data.shape == 'square') {
						drawRect(
							context,
							x + data.margin / 2 + data.gap / 2 + data.offset,
							y + data.margin / 2 + data.gap / 2 + data.offset,
							data.itemWidth,
							data.itemHeight,
							fill,
							stroke,
							data.lineWidthRandom
						);
					} else {
						drawArc(
							context,
							x + data.margin / 2 + data.gap / 2 + data.offset,
							y + data.margin / 2 + data.gap / 2 + data.offset,
							Math.abs(data.itemWidth),
							data.startAngle,
							data.endAngle,
							fill,
							stroke,
							data.lineWidthRandom
						);
					}
				}
				// end offset conditional
				// }
			}
		}
	}
	const drawRect = (context, originX, originY, width, height, fill, stroke, lineWidth) => {
		context.strokeStyle = stroke;
		context.beginPath();
		context.rect(originX, originY, width * data.itemScaleX, height * data.itemScaleY);
		context.lineWidth = lineWidth;
		context.stroke();
		context.fillStyle = fill;
		context.fill();
	};

	const drawArc = (
		context,
		originX,
		originY,
		radius,
		startAngle,
		endAngle,
		fill,
		stroke,
		lineWidth
	) => {
		context.strokeStyle = stroke;
		context.beginPath();
		context.arc(originX, originY, radius, startAngle, endAngle);
		// console.log(`🚀 ~ file: sketch02.svelte ~ line 212 ~ originX, originY, radius, startAngle, endAngle`, originX, originY, radius, startAngle, endAngle)
		context.lineWidth = lineWidth;
		context.stroke();
		context.fillStyle = fill;
		context.fill();
	};

	const setItemColor = (i, j, totalItems) => {
		let hueOffset = 30;
		let hueInterval = 360 / totalItems;
		let variance = Math.random() * 5;
		let currentFactor = (i + variance) * (j - variance) * (variance * totalItems);
		let hue = currentFactor + hueOffset;
		return hue;
		// let color = `hsla(${currentFactor + hueOffset}, 90%, 50%, 1)`;
		// return color;
	};

	function adjustColor(color, opacity) {
		console.log(
			`🚀 ~ file: sketch02.svelte ~ line 235 ~ adjustColor ~ color, opacity`,
			color,
			opacity
		);

		let adjusted = parseHSLA(color, opacity);
        console.log(`🚀 ~ file: sketch02.svelte ~ line 242 ~ adjustColor ~ adjusted`, adjusted)
		// let adjustedColor = `hsla(${adjusted[0]},${adjusted[1]}%,${adjusted[2]}%,${adjusted[3]})`;
		// console.log(`🚀 ~ file: sketch02.svelte ~ line 169 ~ adjustColor ~ adjusted`, adjusted);
		// console.log(
		// 	`🚀 ~ file: sketch02.svelte ~ line 170 ~ adjustColor ~ adjustedColor`,
		// 	adjustedColor
		// );
		return adjusted;
	}
</script>



<CanvasSketchEditor {sketch} {settings} {data} {hidePanel}>
</CanvasSketchEditor>

<style>
	.input-group-wrapper {
		@apply flex flex-col items-start justify-center m-0 bg-sky-200 p-3 my-1 rounded-lg;
	}
</style>
