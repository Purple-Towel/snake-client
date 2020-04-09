/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;

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
    connection.write('Say: Bzz... Test');
  }
  if (key === '2') {
    connection.write('Say: 1-2-3-GO!');
  }
  if (key === '3') {
    connection.write('Say: Another one...');
  }
  if (key === '4') {
    connection.write('Say: bites the dust!');
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