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


const socketIO = require('socket.io') (http, {
    cors: {
        origin: "http://localhost:3000"
    }
})

const msgs = []


app.get('api', (res, req) => {
    res.json({
        message: "Hello"
    })
})


socketIO.on('connection', (socket) => {
    console.log(`user connected ${socket.id}`)
    

    

    socket.on('showMessages', (data) => {
        
        console.log(`ShowMSG from SERV ${data.socketID}`)
               
        restAPI.webhookService.startReceivingNotifications() 
        restAPI.webhookService.onReceivingMessageText((body) => {
        msgs.push(body)
        console.log("EMIIIIIIIIIIIIT" , body)

        //restAPI.webhookService.deleteNotification(body.receiptId)

        // msgs.filter(msg => {
        //     if(msg.idMessage === body.idMessage) {
        //         msgs.splice(msgs.indexOf(msg), 1)
        //     }
        // })
        // console.log("SSSSSSS", msgs)
        //restAPI.webhookService.stopReceivingNotifications();
        //console.log("Notifications is about to stop in 20 sec if no messages will be queued...")
        })

        // restAPI.webhookService.receiveNotification((body) => {
        //     console.log("MSGGGGGG" , body)          
        // })

        socketIO.emit('response', msgs)
    })


    socket.on('disconnect', () => {
        console.log(`user disconnected ${socket.id}`)
                
    })
})





http.listen(PORT, () => {
    console.log(`Started. App listening on port 5000!`)
});





// const webHookAPI = whatsAppClient.webhookAPI(http, {
//     cors: {
//         origin: "http://localhost:3000"
//     }
// })

// const webHookAPI = whatsAppClient.webhookAPI(app, {
//     cors: {
//         origin: "http://localhost:3000"
//     }
// })

// webHookAPI.onIncomingMessageText((data, idInstance, idMessage, sender, typeMessage, textMessage) => {
//     console.log(`Incoming Notification data ${JSON.stringify(data)}`)
// })
