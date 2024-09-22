const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw-ipyIc9gUWunmswPRYVAA&part=snippet%2Cid&order=date&maxResults=9';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a387fbc9a5mshbf718866c3d362ap195422jsnb80aecae65f6',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};


const content = null || document.getElementById('content');

async function fetchData(url) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
    
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
    <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-200">
                <span aria-hidden="true" class="absolute inset-0"></span>
                <strong>${video.snippet.title}</strong>
                </h3>
            </div>
            </div>
        </a>
                `).slice(0,4).join('')}
        
        `;
        content.innerHTML =view;
        
    } catch (error){

        console.log(error);
    }
})();