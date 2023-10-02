const net = require ('ret');
const readline = requiere('readline - sync');
const servidor={
    port:_3000,
    host: 'localhost'

}
const client = net.creatteConnection (servido);
client.on("Connect",() =>{
    console.log('conecion satisfsctoia')
    sendLine()
})

client.on('data',(data)=>{
console.log ('El servidor dice '+ data)
sendLine()
})

client.on('error',(err)=>{
console.log(err.mensage)
})

function sendLine(){
    var line = readline.question('\n ingresa un mensaje \n')
    if (line == 0){
    client.end()
    }else{
        client.write(line)
    }
}