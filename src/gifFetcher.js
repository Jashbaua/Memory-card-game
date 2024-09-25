export default async function fetchGifData() {
    let data=await fetch('https://api.giphy.com/v1/gifs/search?api_key=kdyUEVailcdKwypBlT84XMIIeC3roYG0&limit=12&q=cartoon-network', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      return response.data;
    });
    return data.map((gif,index) => {
        return { id: index,url:gif.images.original.url}
    })
}