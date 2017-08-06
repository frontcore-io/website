
console.log('———————————————————————— SHIP');
console.log('———————————————————————— SHIP — GET CONFIG...');

const CONFIG = require('../../config/superpowerme-production.json');




console.log('———————————————————————— SHIP — CONNECTING...');

const fs = require('fs');
const path = require('path');
const node_ssh = require('node-ssh')
const ssh = new node_ssh()

// TODO: Check availability of the dist map

// TODO: Create release map (based upon package.json version number)

// TODO: Create ship-previous

ssh.connect({
	host: CONFIG.host,
	port: CONFIG.port,
	username: CONFIG.username,
	privateKey: CONFIG.privateKeyPath,
	passphrase: CONFIG.passphrase
})
.then((ssh) => {

	console.log('———————————————————————— SHIP — CONNECTED');

	return ssh.putDirectory(
		'./dist',
		CONFIG.location
	)
	.then((status) => {
		console.log('———————————————————————— SHIP — DONE');

		return ssh;
	})
	.catch((error) => {
		console.log('———————————————————————— SHIP — ERROR');
		console.log(error);
	});
})
.catch((error) => {
	console.log('———————————————————————— SHIP — CONNECTION ERROR');
	console.log(error);
});
