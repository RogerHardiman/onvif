/**
 * Created by Andrew D.Laptev<a.d.laptev@gmail.com> on 1/21/15.
 */

var CAMERA_HOST = '192.168.68.111',
	USERNAME = 'admin',
	PASSWORD = '9999';

var http = require('http'),
	Cam = require('./lib/onvif').Cam;

new Cam({
	hostname: CAMERA_HOST,
	username: USERNAME,
	password: PASSWORD
}, function(err) {
	if (err) {
		console.log('Connection Failed for ' + CAMERA_HOST + ' Username: ' + USERNAME + ' Password: ' + PASSWORD);
		return;
	}
	this.absoluteMove({
		x: 1
		, y: 1
		, zoom: 1
	});
	this.getStreamUri({protocol:'RTSP'}, function(err, stream) {
		http.createServer(function (req, res) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(
				'<html><body>' +
				'<embed type="application/x-vlc-plugin" target="' + stream.uri + '"></embed>' +
				'</boby></html>');
		}).listen(3030);
	});
});