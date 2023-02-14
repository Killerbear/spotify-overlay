import { client_id } from "./keys";

class SpotifyService {
	private scope = "user-read-currently-playing";
	public token: string;

	public async getSong() {
		const response = await fetch("/song", {
			method: "GET",
		});
		return await response.json();
	}

	// public async getToken() {
	// 	const queryString = window.location.hash.substring(1);
	// 	const urlParams = new URLSearchParams(queryString);
	// 	this.token = urlParams.get("access_token");
	//
	// 	if (!this.token) {
	// 		window.location.href =
	// 			"https://accounts.spotify.com/authorize?" +
	// 			new URLSearchParams({
	// 				response_type: "token",
	// 				client_id: client_id,
	// 				redirect_uri: this.redirect_uri,
	// 				scope: this.scope,
	// 			});
	// 	}
	// }
}

export { SpotifyService };

// TODO: https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
