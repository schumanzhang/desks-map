import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8000')
function onMapChanged(cb){
    socket.on('mapChanged', ()=> {
        console.log("map changed")
        cb()
    })
}

export {onMapChanged}