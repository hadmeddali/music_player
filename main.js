const previous = document.querySelector("#previous")
const next = document.getElementById("next")
const listAudio=[new Audio('assets/forest-lullaby-110624.mp3'),new Audio('assets/lost-in-city-lights-145038.mp3')]

let sound = listAudio[1]
let playState=false

const play=document.querySelector('#play').addEventListener('click', pause)  

previous.addEventListener('click',()=>{
    back(0)
})
next.addEventListener('click',()=>{
    back(1)
})

console.log(sound.duration)


function pause(){
    console.log(sound)
    if(playState===false){
        sound.play()
        playState=true
    }else{
        sound.pause()
        playState=false
    }
}

function back(position){
    sound.pause()
    sound = listAudio[position]
    sound.remove()
    sound.load()
    sound.play()
}

// let playI=document.querySelector('#play')
// let progress=document.querySelector('#progress')
// listAudio[0].onloadedmetadata=function(){
//     progress.max=listAudio[0].duration
//     progress.value=listAudio[0].currentTime
// }
// function play(){
//     if(playI.classList.contains('pause')){
//         listAudio.pause()
//         playI.classList.add('pause')
//         playI.classList.remove('play')
//     }
//     else{
//         listAudio.play()
//         playI.classList.add('pause')
//         playI.classList.remove('play')
//     }
// }