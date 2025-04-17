const album = [{
    title: 'Pandi S.P.A',
    cover: 'image.jpg',
    audio: 'track1.mp3'
},
{
    title: 'Baby',
    cover: 'image.jpg',
    audio: 'track2.mp3'
},
{
    title: 'Jericho',
    cover: 'image.jpg',
    audio: 'track3.mp3'
},
{
    title: 'Contagiosa',
    cover: 'image.jpg',
    audio: 'track4.mp3'
},
{
    title: 'Mayday',
    cover: 'image.jpg',
    audio: 'track5.mp3'
},
{
    title: 'CLP Freestyle',
    cover: 'image.jpg',
    audio: 'track6.mp3'
},
{
    title: 'Demone',
    cover: 'image.jpg',
    audio: 'track7.mp3'
},
{
    title: 'Barrio',
    cover: 'image.jpg',
    audio: 'track8.mp3'
},
{
    title: 'IMessage',
    cover: 'image.jpg',
    audio: 'track9.mp3'
},
{
    title: 'Più ricco di prima',
    cover: 'image.jpg',
    audio: 'track10.mp3'
},
{
    title: 'Bingo 1h REC',
    cover: 'image.jpg',
    audio: 'track11.mp3'
},
{
    title: 'Bonus Track - Requiem',
    cover: 'image.jpg',
    audio: 'track12.mp3'
}
];

let currentAudio = null;

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user === 'pandilleros' && pass === '1234') {
        document.getElementById("login").style.display = "none";
        document.getElementById("playlist").style.display = "block";
        loadPlaylist();
        typeWriterEffect("ecco a te l'anteprima dell'album");
    } else {
        document.getElementById("credentials").innerHTML= "credenziali non valide."
        // alert("Credenziali non valide.");
    }
}

function loadPlaylist() {
    const container = document.getElementById("tracks");
    album.forEach(track => {
        const div = document.createElement("div");
        div.className = "track";
        div.innerHTML = `
          <img src="${track.cover}" alt="cover">
          <strong>${track.title}</strong>
          <div class="buttons">
            <button onclick="playAudio('${track.audio}', this)">Ascolta</button>
            <a href="${track.audio}" download><button>Download</button></a>
          </div>
        `;
        container.appendChild(div);
    });
}

function playAudio(file, button) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(file);
    currentAudio.play();
}

function typeWriterEffect(text) {
    const target = document.getElementById("typewriter");
    let index = 0;
    target.textContent = "";
    const interval = setInterval(() => {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 70);
}