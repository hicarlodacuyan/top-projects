const img = document.querySelector('img');
const btn = document.querySelector('button');
const searchBox = document.querySelector('input');

const getNewGif = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=12PiUjNAbWGBbK6bsVjQGYvITaSunyqR&s=${query}`, {
        mode: 'cors'
    })
        .then(response => {
            return response.json();
        })
        .then(response => {
            img.src = response.data.images.original.url;
            searchBox.value = '';
        })
        .catch(err => {
            alert(`We can't find any gifs with the query you've provided. Please try again!`);
        });
};

getNewGif('cat');

btn.addEventListener('click', () => {
    if (searchBox.value === '') return;

    getNewGif(searchBox.value);
});
