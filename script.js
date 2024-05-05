const container = document.querySelector('.container');

const games = [
    {
        name: 'ANIME match',
        img: './assets/anime-match-bg.jpg',
        description: 'A classic memory game experience with all your favorite anime characters',
        href: 'https://memory-game-roan-six.vercel.app/'
    },
    {
        name: 'Tic Tac Toe',
        img: './assets/tic-tac-toe-bg.jpg',
        description: 'Bored? Play the perfect boredom game with your duo!',
        href: 'https://homeofhives.github.io/Tic-Tac-Toe/'
    },
    {
        name: 'Poke Run',
        img: './assets/poke-run-bg.jpg',
        description: "If you don't like pikachu you sure will after playing this adventure packed run/obstacle game!",
        href: 'https://atom545.github.io/Poke-Run/'
    },
    {
        name: 'PING PONG',
        img: './assets/ping-pong-bg.jpg',
        description: 'A test of speed & reflexes....Try defeating the impossible and become a ping-pong master!!',
        href: 'https://mann-19.github.io/Ping-Pong/'
    },
    {
        name: 'Snake Game',
        img: './assets/snake-game-bg.jpg',
        description: 'A retro gaming fan? How can you forget the classic snake game!',
        href: 'https://atom545.github.io/Snake_Game/'
    },
    {
        name: 'Minesweeper',
        img: './assets/mine-bg.jpg',
        description: 'Watch Your Step! Might be a bomb there. The classic OG minesweeper',
        href: 'https://homeofhives.github.io/Mine-Sweeper/'
    },
    {
        name: 'Hand Cricket',
        img: './assets/hand-cricket-bg.jpg',
        description: 'Play this nostalgic game again and refresh those old time memories back!',
        href: 'https://pawanesh20.github.io/Hand-Cricket/'
    },
    {
        name: "Coming Soon...",
        img: './assets/Skittles.svg',
        description: 'Coming Soon...',
        href: ''
    }
];

games.forEach(game => {
    // Card
    const card = document.createElement('div');
    card.classList.add('card');

    // Image
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = game.img;

    // Overlay 1 - Default
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const gameHeading = document.createElement('h2');
    gameHeading.classList.add('heading');
    gameHeading.textContent = game.name;

    // Overlay 2
    const overlay2 = document.createElement('div');
    overlay2.classList.add('overlay-2');

    const description = document.createElement('h3');
    description.textContent = game.description;
    description.classList.add('heading');

    const playBtn = document.createElement('a');
    playBtn.textContent = 'Play Now';
    playBtn.href = game.href;
    playBtn.classList.add('play-link');

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('material-icons');
    iconSpan.innerHTML = 'open_in_new';

    // Appends
    overlay2.appendChild(description);
    overlay2.appendChild(playBtn);
    playBtn.appendChild(iconSpan);
    // 
    overlay.appendChild(gameHeading);
    // 
    card.appendChild(image);
    card.appendChild(overlay);
    card.appendChild(overlay2);
    // 
    container.appendChild(card);
});