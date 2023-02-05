<script lang="ts">
	import { onMount } from "svelte";
	import { SpotifyService } from "./lib/services/spotifyService";

	let item;

	onMount(async () => {
		let spotifyService = new SpotifyService();
		const data = await spotifyService.getSong();
		item = data.item;
	});
</script>

<main>
	{#if item?.album}
		<img src={item.album.images[0].url} alt="cover" />
		<div class="info">
			<div class="artist">{item?.artists[0]?.name}</div>
			<div class="title">{item?.name}</div>
		</div>
	{/if}
</main>

<style>
	main {
		display: flex;
	}

	img {
		width: 112px;
		margin: 32px;
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 32px 0;
	}

	.artist {
		font-size: 28px;
		font-weight: 500;
		line-height: 32px;
		color: #fff;
	}

	.title {
		font-size: 22px;
		font-weight: 400;
		line-height: 32px;
		color: #b3b3b3;
	}
</style>
