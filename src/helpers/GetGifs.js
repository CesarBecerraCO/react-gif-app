  export const getGifList = async(category) =>{
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=HJAJqYBURp1BG4u0dy9QjVETMNiVb6BT`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifList = data.map(gif => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url,
      }
    });
    return(gifList);
  };