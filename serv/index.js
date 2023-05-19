const express = require('express')
const app = express()
const PORT = 5000
const http = require('http').Server(app)

const whatsAppClient = require('@green-api/whatsapp-api-client')
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

let restAPI = whatsAppClient.restAPI(({
    idInstance: "1101822443",
    apiTokenInstance: "dec4dce63ce04483b03be900646acb00c01379f0218b4ea98e"
}))

// let restAPI = null


const socketIO = require('socket.io') (http, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let msgs = []
let sendNumber = ""


app.get('api', (res, req) => {
    res.json({
        message: "Hello"
    })
})


socketIO.on('connection', (socket) => {
    console.log(`user connected ${socket.id}`)    

    socket.on('loginData', (data) => {
        console.log('user ins', data.idInstance)

    })

    socket.on('showMessages', (data) => {
        
        console.log(`ShowMSG from SERV ${data.socketID}`)

        restAPI.webhookService.startReceivingNotifications() 
        restAPI.webhookService.onReceivingMessageText((body) => {
            msgs.filter((msg) => {
                if(body.idMessage === msg.idMessage) {
                    msgs.splice(msgs.indexOf(msg), 1)
                    console.log(msg)
                }                
            })
            
            console.log("EMIIIIIIIIIIIIT" , body)
            msgs.push(body)
            socketIO.emit('msgResponse', msgs)
        })
               
        //restAPI.webhookService.deleteNotification(body.receiptId)
        //restAPI.webhookService.stopReceivingNotifications();
        //console.log("Notifications is about to stop in 20 sec if no messages will be queued...")
        
    })

    socket.on('setSendNumber', (data) => {
        console.log("SENDUSERRRRRR", data.sendNumber)
        sendNumber = data.sendNumber

        socketIO.emit('sendNumberSeted')
    } )

    socket.on('sendMsg', (text) => {

        console.log("MESG", text)
        restAPI.message.sendMessage(`${sendNumber}@c.us`, null, text)
        .then((data) => {
            console.log('responsemsg', text,  data);
        })
        .catch(e => {
            console.error('error from send msg', e)
        });



        socketIO.emit('sendMsgEv')

    })


    socket.on('userLogout', (data) => {
        console.log("logout", data)
    })


    socket.on('disconnect', () => {
        console.log(`user disconnected ${socket.id}`)        
    })
})


http.listen(PORT, () => {
    console.log(`Started. App listening on port 5000!`)
});
