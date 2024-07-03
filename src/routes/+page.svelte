<script lang="ts">
	import { topcis } from "../store";

    
</script>

<div class="flex flex-col w-4/5 m-auto space-y-1">
    {#each $topcis as item}
        <a href={"/xray/"+item.id} class="p-2 border rounded-xl">
            <p>{item.title}</p>
        </a>
    {/each}
</div>