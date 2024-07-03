<script lang="ts">
	import XrayCol from '$lib/XrayCol.svelte';
	import { topcis } from '../../../store';
	import type { Topic } from '../../../types';
	import type { PageLoad } from './$types';

	export let data: PageLoad;

	let xray: Topic;
	topcis.subscribe((topicList) => {
		topicList.map((topic) => {
			if (topic.id == data.id) {
				xray = topic;
			}
		});
	});
</script>

<!-- <h1>{data.id}</h1> -->
<div class="flex flex-col h-screen">
	<h1>{xray.title}</h1>
	<div class="flex flex-grow w-full">
		<XrayCol>
			<h1 slot="title">Commitment</h1>
		</XrayCol>
		<XrayCol>
			<h1 slot="title">Doing / not doing instead</h1>
		</XrayCol>
		<XrayCol>
			<h1 slot="title">Hidden competing commitment</h1>
		</XrayCol>
		<XrayCol>
			<h1 slot="title">Big assumptions</h1>
		</XrayCol>
	</div>
</div>
