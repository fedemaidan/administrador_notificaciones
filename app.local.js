var cron = require('node-cron');

const app = require('./app')
var refrescarToken = require('./utils/refrescarToken')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


cron.schedule('* * * * *', function(){
  refrescarToken()
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
