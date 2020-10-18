const getGifs = async (category) =>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=P5wttDbHgIBvWzWdoq50pr8jtsyvx6YV&q=${encodeURI(category)}&limit=10`;

    const res = await fetch(url);
    const {data} = await res.json();
    
    const gifs = data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    })
    console.log(gifs);
    return gifs;
}

export default getGifs;