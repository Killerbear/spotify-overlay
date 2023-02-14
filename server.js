import express from "express";
import { client_id } from "./src/lib/services/keys.js";
import * as querystring from "querystring";

const redirect_uri = "http://localhost:8080/callback";

const app = express();
app.use(express.static("dist"));
app.use(express.json());

app.get("/song", function (req, res) {
	console.log(req);
});

app.get("/login", function (req, res) {
	const scope = "user-read-currently-playing";

	res.redirect(
		"https://accounts.spotify.com/authorize?" +
			querystring.stringify({
				response_type: "token",
				client_id: client_id,
				redirect_uri: redirect_uri,
				scope: scope,
			})
	);
});

app.get("/callback", function (req, res) {
	const code = req.query.code || null;
	console.log(req);
	res.redirect("/");
});

app.listen(8080, () => {
	console.log(`App is running on port 8080`);
});

function getToken() {
	const queryString = window.location.hash.substring(1);
	const urlParams = new URLSearchParams(queryString);
	this.token = urlParams.get("access_token");

	if (!this.token) {
		window.location.href =
			"https://accounts.spotify.com/authorize?" +
			new URLSearchParams({
				response_type: "token",
				client_id: client_id,
				redirect_uri: this.redirect_uri,
				scope: this.scope,
			});
	}
}
