/**
 * Task 1: Games
 */
let games = [
    {
        name: 'Elden Ring',
        genre: ['Action', 'RPG'],
        score: 95
    },
    {
        name: 'Dying Light 2',
        genre: ['FPS'],
        score: 76
    },
    {
        name: 'Horizon: Forbidden West',
        genre: ['RPG'],
        score: 88
    },
    {
        name: 'Metal: Hellsinger',
        genre: ['FPS'],
        score: 78
    },
    {
        name: 'Circus Electrique',
        genre: ['Strategy'],
        score: 74
    },
    {
        name: 'Babylon\'s Fall',
        genre: ['RPG'],
        score: 43
    },
    {
        name: 'The Last of Us Part I',
        genre: ['Action', 'Post-Apocalyptic'],
        score: 88
    },
    {
        name: 'The Quarry',
        genre: ['Action', 'Adventure', 'Horror'],
        score: 79
    },
    {
        name: 'Ghostwire: Tokyo',
        genre: ['Action', 'Horror'],
        score: 77
    },
    {
        name: 'Rogue Legacy 2',
        genre: ['Metroidvania', 'Platformer'],
        score: 90
    },
    {
        name: 'Escape Academy',
        genre: ['Adventure', 'Puzzle'],
        score: 81
    },
    {
        name: 'Stray',
        genre: ['Adventure', 'Platformer'],
        score: 84
    }
]

/**
 * Task 1: Array
 */
// 1.1
const gamesArray = games.filter(e => e.score < 50 || e.score > 85);

// 1.2 
function threePlusWordsNames(array) {
    return array.filter(e => e.name.split(' ').length >= 3);
}

// 1.3
const gameGenres = games.flatMap(e => e.genre);

// 1.4
function sortByGenreNum(array) {
    return array.sort((lhs, rhs) => {return rhs.genre.length - lhs.genre.length});
}

// 1.5
function highestRatedGame(array) {
    return array.reduce((undecidedMax, game) => {
        return (game.score > undecidedMax.score ? game : undecidedMax)
    }, array[0]);
}

console.log(
    gamesArray,
    threePlusWordsNames(games),
    gameGenres,
    sortByGenreNum(games),
    highestRatedGame(games)
);

/**
 * Task 2: Rectangles
 */
function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

document.addEventListener('click', (event) => {
    console.log(`Click position: ${event.clientX}, ${event.clientY}`);
});


// 2. --- DOM
const buttons = document.getElementsByTagName('button');
const containerDiv = document.querySelector('#container');

function createSquares(num, color) {
    for (let index = 0; index < num; index++) {
        const element = document.createElement('div');
        element.classList.add('rectangle',color);
        element.addEventListener('click', (event) => {
            alert(color == 'white' ? 'fehér' : 'fekete');
        });

        containerDiv.prepend(element);
    }
}

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (event) => {
        createSquares(2, button.className);
        if (button.className == 'black') 
            event.stopPropagation();
    })
});


console.log(buttons);
