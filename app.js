const musicContainer = document.querySelector('.musicContainer');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container ');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const body = document.querySelector('#body')


// Song titles 

const songs = ['jason-mraz-im-yours', 'bruno-mars-count-on','Pilgrim - Some-Were-at- Sea', 'Ed Sheeran - Shivers']

// keep track of the songs

let songIndex = 3

// initialy load song into the DOM

loadSong(songs[songIndex])

// update song details 

function loadSong(song){
    title.innerText = `${song}`
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    body.style.background = 'linear-gradient(to top, #41295a, #2f0743)'
    body.style.background = 'linear-gradient(to top, #f09819, #edde5d)'
 
    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    body.style.background = 'linear-gradient( to top, #2c5364,#203a43, #0f2027)'
    // body.style.background = 'linear-gradient(to top, #f09819, #edde5d)'
    audio.pause()


     
}


function prevSong(){
    songIndex--
    if(songIndex < 0){
        songIndex =songs.length -1
    }
    

    loadSong(songs[songIndex])
    playSong()
    body.style.background = 'linear-gradient(to top, #232526, #414345)'
    
}

function nextSong(){
    songIndex++
    if(songIndex > songs.length -1){
        songIndex =0
    }

    loadSong(songs[songIndex])
    playSong()
    body.style.background = 'linear-gradient(to top, #ffb75e, #ed8f03)'

}
function updateprogress(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = ( currentTime / duration)*100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e){
  const width = this.clientWidth
  const clickX = e.offsetX 
  const duration = audio.duration 

  audio.currentTime= (clickX/width)*duration
}
// event listeners 

playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }else {
        playSong()
    }
})

// change song events 

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateprogress)

progressContainer.addEventListener('click', setProgress)


audio.addEventListener('ended', nextSong)