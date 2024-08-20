let favoriteNumber = 3;
let baseURL = 'http://numbersapi.com';
let singleData;

const div = document.createElement('div');

const createSingleParagraph = (data) => {
    const single = document.createElement('p');
    single.innerText = data.text;
    div.appendChild(single);
}

const createMultipleParagraphs = (data) => {
    Object.values(data).map(text => {
        const single = document.createElement('p');
        single.innerText = text;
        div.appendChild(single);
    });
}

const callFetch = (customFunc) => {
    fetch(`${baseURL}/${favoriteNumber}?json`)
        .then(res => res.json())
        .then(data => customFunc(data))
        .catch(err => console.log(err))
}

callFetch(createSingleParagraph);

favoriteNumber = [2, 5, 9];

callFetch(createMultipleParagraphs);

document.body.appendChild(div);

const promises = [];

favoriteNumber = 7;

for (let i = 1; i < 5; i++)
    promises.push(fetch(`${baseURL}/${favoriteNumber}?json`).then(response => response.json()));

Promise.all(promises)
    .then(responses => {
        responses.map(data => createSingleParagraph(data));
    })
