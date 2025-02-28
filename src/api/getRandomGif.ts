/**
 * Fetch a random GIF from Giphy API.
 * @param search - The search query to find a GIF.
 * @returns The URL of the GIF if successful, otherwise null.
 */
export async function getRandomGif(search?: string): Promise<string | null> {
	try {
		const tag = search ? '&' + new URLSearchParams(`tag=${search}`).toString() : ''; // `tag=funny+cat+gif` for example

		const response = await fetch(
			`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_TOKEN}${tag}&rating=g`,
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data.data.images.original.url; // URL of the GIF
	} catch (error) {
		console.error('Error fetching GIF:', error);
		return null; // Return null if there's an error
	}
}
