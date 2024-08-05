const body = document.querySelector('body');
const giphyForm = document.querySelector('#giphyform');
const imageDiv = document.querySelector('#imageDiv');
const removeImages = document.querySelector('#removeimages');

function addGif(data) {
    const numberOfRecords = data.length;
    if (numberOfRecords) {
        let index = Math.floor(Math.random() * numberOfRecords);
        const imgUrl = data[index].images.original.url;
        const image = document.createElement('img');
        image.src = imgUrl;
        imageDiv.appendChild(image);
    }
}

giphyForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const searchInput = document.querySelector('#search');
    const searchText = searchInput.value;
    searchInput.value = '';

    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchText,
            api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    });

    addGif(response.data.data);
});


removeImages.addEventListener('click', evt => {
    let childElement = imageDiv.lastElementChild;
    while (childElement) {
        imageDiv.removeChild(childElement);
        childElement = imageDiv.lastElementChild;
    }
});
