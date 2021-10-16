

//Add all page elements with ids that are needed to collect and submit values
const searchInput = document.getElementById('search');
const searchForm = document.querySelector('#searchForm');
const removeBtn = document.getElementById('delete');
const gifContainer = document.getElementById('gif-container')


searchForm.addEventListener('submit', async function(e){
    e.preventDefault();
    await fetchGif();
    searchInput.value = " ";
});

removeBtn.addEventListener('click', function(e){
    $('img').remove();
});

async function fetchGif(){
        const inputData = searchInput.value;
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?&q=${inputData}&api_key=I9k7dN8ybyxlyER5yc30YYTvNskJ2HAm`);
        const data = res.data.data;
        const index = Math.floor(Math.random() * data.length)
        const url = data[index].images.downsized.url;
        createGif(url);
   
}

function createGif(url){
    const createImg = document.createElement('img');
    createImg.src = url;
    gifContainer.appendChild(createImg);
};

got rid of error handlers and fixed index Math function order
