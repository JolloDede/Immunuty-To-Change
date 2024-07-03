<script lang="ts">
	export let content: string;
</script>

<div class="flex flex-col border h-full w-1/4 overflow-y-auto">
	<div class="border-b font-bold text-xl">
		<slot name="title">
			<h1>Title</h1>
		</slot>
	</div>
	<textarea bind:value={content} class="flex-grow"></textarea>
</div>
