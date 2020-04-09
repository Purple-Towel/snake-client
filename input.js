/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const constants = require('./constants');

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === '1') {
    connection.write(`Say: ${constants.MSGONE}`);
  }
  if (key === '2') {
    connection.write(`Say: ${constants.MSGTWO}`);
  }
  if (key === '3') {
    connection.write(`Say: ${constants.MSGTHREE}`);
  }
  if (key === '4') {
    connection.write(`Say: ${constants.MSGFOUR}`);
  }
}
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

module.exports = {setupInput, }