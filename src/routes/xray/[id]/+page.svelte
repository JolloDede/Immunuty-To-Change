<script lang="ts">
	import XrayCol from '$lib/XrayCol.svelte';
	import { topcis } from '../../../store';
	import type { Topic } from '../../../types';
	import type { PageLoad } from './$types';

	export let data: PageLoad;

	let titleEditing = false;
	let xray: Topic;
	topcis.subscribe((topicList) => {
		topicList.map((topic) => {
			if (topic.id == data.id) {
				xray = topic;
			}
		});
	});

	function handleTitleDblClick() {
		titleEditing = true;
	}

	function handleKeyPress(e: KeyboardEvent) {
		if (e.key === "Enter")
			titleEditing = false;
	}
</script>

<div class="flex flex-col h-screen">
	{#if titleEditing}
		<input type="text" bind:value={xray.title} on:keypress={handleKeyPress} />
	{:else}
		<h1 on:dblclick={handleTitleDblClick}>{xray.title}</h1>
	{/if}

	<div class="flex flex-grow w-full">
		<XrayCol bind:content={xray.goalList}>
			<h1 slot="title">Commitment</h1>
		</XrayCol>
		<XrayCol bind:content={xray.insteadList}>
			<h1 slot="title">Doing / not doing instead</h1>
		</XrayCol>
		<XrayCol bind:content={xray.competingList}>
			<h1 slot="title">Hidden competing commitment</h1>
		</XrayCol>
		<XrayCol bind:content={xray.assumtionList}>
			<h1 slot="title">Big assumptions</h1>
		</XrayCol>
	</div>
</div>
