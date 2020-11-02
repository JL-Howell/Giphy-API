const key = 'mxLg4cJOB3GUGv7e8h3LdT06cerh9b7p'

const trendingUrl = 'https://api.giphy.com/v1/gifs/trending';
let url1;

const searchForm = document.getElementById('search-form')
const searchText = document.getElementById('search-text')
const gifResults = document.getElementById('giphyResults')

document.body.onload = fetchTrending;

function fetchTrending(e) { 
    e.preventDefault();
    url1 = `${trendingUrl}?api_key=${key}&limit=8&rating=pg`;
    console.log(url1);

    fetch(url1) 
        .then(function(response) {
        return response.json();
    })
    .then(function (gifjson) {
        console.log(gifjson.data[0].images.fixed_height.url);
        let result = '';
        gifjson.data.forEach(function(object) {
            console.log(object)
            const url = object.images.fixed_height.url
            result += `<img src="${url}">`
        })
        gifResults.innerHTML = result;
    });
}

const searchUrl = 'https://api.giphy.com/v1/gifs/search'; 
let url2; 

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) { 
    e.preventDefault();
    url2 = `${searchUrl}?api_key=${key}&q=${searchText.value}&limit=20&rating=pg`;
    console.log(url2);

    fetch(url2) 
        .then(function(response) {
        return response.json();
    })
    .then(function (gifjson) {
        console.log(gifjson.data[0].images.fixed_height.url);
        let result = '';
        gifjson.data.forEach(function(object) {
            console.log(object)
            const url = object.images.fixed_height.url
            result += `<img src="${url}">`
        })
        gifResults.innerHTML = result;
    });
}

