const img = document.querySelector('img');
const btn = document.querySelector('button');
const searchBox = document.querySelector('input');

// Converted async code from a regular promise syntax to async/await
const getNewGif = async (query) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=12PiUjNAbWGBbK6bsVjQGYvITaSunyqR&s=${query}`, {mode: 'cors'});
    const gifData = await response.json();

    try {
        img.src = gifData.data.images.original.url;
        searchBox.value = '';
    } catch (err) {
        alert(`We can't find GIFs with that name!`);
        searchBox.value = '';
    }
};

getNewGif('cat');

btn.addEventListener('click', () => {
    if (searchBox.value === '') return;

    getNewGif(searchBox.value);
});