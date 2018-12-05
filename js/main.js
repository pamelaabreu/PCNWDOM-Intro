const playlist = {
  name: 'United States Top 10',
  description: 'The top songs in the US right now.',
  songs: [{
      name: 'thank u, next',
      artists: ['Ariana Grande'],
      image: 'https://i.scdn.co/image/3492042deca1ed9a02e6d46ebe58807bbf8d2a51'
    },
    {
      name: 'Mo Bamba',
      artists: ['Sheck Wes'],
      image: 'https://i.scdn.co/image/099e0b63f08bea5b5616b2e6fb06c342da7071ad'
    },
    {
      name: 'SICKO MODE',
      artists: ['Travis Scott', 'Drake'],
      image: 'https://i.scdn.co/image/092f661e5290a05410f1696e608cb140461b7ebf'
    },
    {
      name: 'ZEZE (feat. Travis Scott & Offset)',
      artists: ['Kodak Black', 'Offset', 'Travis Scott'],
      image: 'https://i.scdn.co/image/817da8e0c3bcd24e19a02c2485f91c29699c1d8f'
    },
    {
      name: 'Drip Too Hard',
      artists: ['Lil Baby', 'Gunna'],
      image: 'https://i.scdn.co/image/d6ad16e502fb15fcc76bc050df10c6fd1cda6968'
    },
    {
      name: 'Without Me',
      artists: ['Halsey'],
      image: 'https://i.scdn.co/image/51f8ddb6e9f08b8d42a27f7894f68a9106a3df5f'
    },
    {
      name: 'Sunflower - Spider-Man: Intro',
      artists: ['Post Malone', 'Swae Lee'],
      image: 'https://i.scdn.co/image/923b854eefa3fe67c5089c45fb9efea4fbc5c7af'
    },
    {
      name: 'BAD!',
      artists: ['XXXTENTACION'],
      image: 'https://i.scdn.co/image/eba497599a8754e8458fc18e7feadb30aaa6eb0d'
    },
    {
      name: 'Lucid Dreams',
      artists: ['Juice WRLD'],
      image: 'https://i.scdn.co/image/e351fde0fb77b8f64ed8883c429cada24306600d'
    },
    {
      name: 'Wake Up in the Sky',
      artists: ['Gucci Mane', 'Bruno Mars', 'Kodak Black'],
      image: 'https://i.scdn.co/image/6695a36b5929353cdb7d2e3807c600f73796e1aa'
    },
    {
      name: 'Armed And Dangerous',
      artists: ['Juice WRLD'],
      image: 'https://i.scdn.co/image/e351fde0fb77b8f64ed8883c429cada24306600d'
    },
    {
      name: 'when the party\'s over',
      artists: ['Billie Eilish'],
      image: 'https://i.scdn.co/image/40aefbf33d89b6292973941739940b900a95e607'
    },
    {
      name: 'All I Want for Christmas Is You',
      artists: ['Mariah Carey'],
      image: 'https://i.scdn.co/image/770180da03a8e23ac5ff7847496e9538cf73ce85'
    },
  ]
};

//HELPER FUNCTIONS
const objectToHTML = (song) => {
  return `<div class='row mb-2'>
  <div class='col-1'>
    <img src="${song.image}" class="rounded" style='width: 50px; height: 50px;'>
  </div>
  <div class='col-11'>
    <p class='mb-0 mt-1 song-name'>${song.name}</p>
    <p class='my-0 song-artists'>${song.artists}</p>
  </div>
</div>`;
}

let search = (searchVal) => {
  let results = [];

  for (let i = 0; i < playlist.songs.length; i++) {

    let song = playlist.songs[i];

    if (song.name.toLowerCase().includes(searchVal.toLowerCase())) {
      results.push(song)
    };
  }

  render(results);
}

//RENDER FUNCTION
const render = (songObj) => {

  const title = document.querySelector('h1');
  title.innerText = playlist.name;

  const desc = document.querySelector('.lead');
  desc.innerText = playlist.description;

  const song_list = document.querySelector('.song-list');

  let combinedHTML = '';

  for (let i = 0; i < songObj.length; i++) {
    combinedHTML += objectToHTML(songObj[i]);
  }

  song_list.innerHTML = combinedHTML;
}

render(playlist.songs);

//GLOBAL HTML OBJECTS
const input = document.querySelector('.js-input');

//EVENT 
input.addEventListener('input', function (e) {
  let searchVal = e.target.value;
  // console.log(searchVal);
  search(searchVal);
})



/*
STEPS
1. Get value from search
2. Loop through songs array
3. Loop through the name
4. Access each chracter of the string
5. Compare value to string to show results
*/