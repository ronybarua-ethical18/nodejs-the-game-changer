const cluster = require('node:cluster')
const http = require('http')
const os = require('os')


const totalCPUs = os.cpus().length

if(cluster.isPrimary){
    console.log(`Service running with pid:${process.pid}`)

    for (let index = 0; index < totalCPUs; index++) {
        cluster.fork()
        
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
      });
}else{
const server = http.createServer((req, res) =>{
    res.end('hello world\n');
})

server.listen(8000, () =>{
    console.log('server connected to 8000 port')
})
}