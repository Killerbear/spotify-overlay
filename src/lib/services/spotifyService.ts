import { TOKEN } from "./keys";

class SpotifyService {
	private token = TOKEN;

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

	// const client_id = "4646bc101b3345f59a834a3c180e57eb";
	// const client_secret = "d331fc124b9b43809fbfa974499fee30";
	// const redirect_uri = "http://localhost:8888/callback";
	// const scopes = "user-read-currently-playing";

	// const encode = (data) => {
	// 	return Object.keys(data)
	// 		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
	// 		.join("&");
	// };
	//
	// const generateRandomString = function (length) {
	// 	let text = "";
	// 	let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	//
	// 	for (let i = 0; i < length; i++) {
	// 		text += possible.charAt(Math.floor(Math.random() * possible.length));
	// 	}
	// 	return text;
	// };
	//
	// const getAuthorization = async () => {
	// 	let state = generateRandomString(16);
	// };
	//
	// const getAuthToken = (async () => {
	// 	const response = await fetch("https://accounts.spotify.com/api/token", {
	// 		method: "POST",
	// 		headers: {
	// 			Accept: "application/json",
	// 			"Content-Type": "application/x-www-form-urlencoded",
	// 			Authorization: "Basic " + btoa(client_id + ":" + client_secret),
	// 		},
	// 		body: encode({ grant_type: "client_credentials" }),
	// 	});
	// 	return await response.json();
	// })();
}

export { SpotifyService };

// TODO: https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
