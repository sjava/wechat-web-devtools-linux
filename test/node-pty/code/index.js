console.log("index.js")
var os = require('os');
var pty = require('node-pty');

console.info(process.versions)
var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

var ptyProcess = pty.spawn(shell, [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});

ptyProcess.onData(function(data) {
  process.stdout.write(data);
});

ptyProcess.write('ls\r');
ptyProcess.resize(100, 40);
ptyProcess.write('ls\r');