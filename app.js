const express = require('express');
const app = express();
const socket = require('socket.io');
const cors = require('cors');
const CoinbasePro = require('coinbase-pro');

app.use(cors());
const server  = app.listen(5000,()=>{
    console.log("Listening in 5000");
});

const io = socket(server);
io.sockets.on('connection',( socket=>{
        console.log('client connected!');
       const websocket = new CoinbasePro.WebsocketClient(
            ['BTC-USD'],
            'wss://ws-feed.pro.coinbase.com',
            null,
            {
                channels : ["ticker"]
            }
        );        
        websocket.on('message', data => {
            if(data.type==='ticker'){
                const {time, price} = data;
                socket.emit('data', {time,price});
            }
        });
        socket.on('disconnect', function () {
            console.log('client disconnect...', socket.id);
            socket.disconnect()
        });        
    })
)
