var onvif = require('./lib/onvif');
onvif.Discovery.on('device', function(cam){
    // function would be called as soon as NVT responses 
    console.log('--------------------------------------------');
    console.log('received discovery message');
    console.log('Hostname ' + cam.hostname);
    console.log('Port     ' + cam.port);
    console.log('Path     ' + cam.path);
    console.log('--------------------------------------------');
})
onvif.Discovery.probe();

