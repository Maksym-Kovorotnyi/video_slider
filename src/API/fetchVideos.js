export default async function getVideos() {
  try {
    const response = await fetch("https://api.vimeo.com/videos/824804225", {
      headers: {
        authorization: `Bearer f766bc111d281f84c70944a80e16c927`,
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
