import { client_id, redirect_uri } from "./keys";

class SpotifyService {
	private scope = "user-read-currently-playing";
	public token: string;

	public async getSong() {
		const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: "Bearer " + this.token,
			},
		});
		return await response.json();
	}

	public async getToken() {
		const queryString = window.location.hash.substring(1);
		const urlParams = new URLSearchParams(queryString);
		this.token = urlParams.get("access_token");

		if (!this.token) {
			window.location.href =
				"https://accounts.spotify.com/authorize?" +
				new URLSearchParams({
					response_type: "token",
					client_id: client_id,
					redirect_uri: redirect_uri,
					scope: this.scope,
				});
		}
	}
}

export { SpotifyService };

// TODO: https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
