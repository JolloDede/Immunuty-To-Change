<script lang="ts">
    let list = [{id: 1, title: "test"}, {id: 2, title: "test"}]
</script>

<div class="flex flex-col w-4/5 m-auto space-y-1">
    {#each list as item}
        <a href={"/xray/"+item.id} class="p-2 border rounded-xl">
            <p>{item.title}</p>
        </a>
    {/each}
</div>