// [
//     {
//         name: 'taco', tag: 'entree'
//     },
//     {
//         name: 'burrito', tag: 'entree'
//     },
//     {
//         name: 'apples', tag: 'fruit'
//     },
//     {
//         name: 'chocolate', tag: 'dessert'
//     }
// ]


const foods = fetch("foods.json").then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
    console.log(data);
    if (response.ok) {
        return data;
    }
}).catch((err) => {
    console.log(err);
});

console.log(foods);



function getJson(url) {
    return fetch(url).then((response) => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('not ok');
            console.log('will not run');
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

getJson("foods.json").then((data) => {
    console.log(data);
    return data;
});




function longProcess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(42);
            } else {
                reject('it didn\'t work');
            }
            
        }, 200);
    })
}


longProcess().then((response) => {
    const total = 100 + response;
    console.log("total: " + total);
}, (err) => {
    console.log(err); 
})

// const total = 100 + longProcess();
// console.log("total: " + total);

const baseUrl = 'https://pokeapi.co/api/v2/'; 

getJson(baseUrl + 'pokemon').then((data) => {
    buildList(data.results);
}); 




function buildList(pokemon) {
    const element = document.getElementById('listElement');

    element.innerHTML = pokemon.map((item) => {
        return `<li><a href="${item.url}">${item.name}</a></li>`;
    }).join('');
} 