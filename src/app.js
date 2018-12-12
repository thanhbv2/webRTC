const Pear = require('simple-peer');
const $ = require('jquery');
/**
 * trickle: option có sư dụng server bên ngoài hay không
 */

const openStream = require('./openStream');
// openStream(); 

const p = new Pear({ initiator: location.hash === '#1', trickle: false })

p.on('signal', token => {
  $('#my_signal').val(JSON.stringify(token));
})


$('#connect_to').click(() => {
  const friendSignal = JSON.parse($('#my_friend_token').val())
  p.signal(friendSignal);
})

p.on('data', data => console.log('===============>', data))

p.on('connect', () => {
  console.log('===============>connected', );
  setInterval(p.send(Math.random()), 2000)
})