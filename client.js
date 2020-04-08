const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '50.64.116.162',
    port: 50541
  });
  // print if connection was successful
  conn.on('connect', () => {
    console.log('Connected successfully!')
  });
  // sends name to server
  conn.on('connect', () => {
    conn.write("Name: P-T")
  });
  /*
  conn.on('connect', () => {
    conn.write("Move: up")
  });

  conn.on('connect', () => {
    setInterval(() => {
      conn.write("Move: left")}, 1000)
  });
  */
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data);
  }) 

  return conn;
}

module.exports = connect;