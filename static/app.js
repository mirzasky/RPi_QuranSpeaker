
$(document).ready(function() {
         
    // sending a connect request to the server.
    // var socket = io.connect('http://localhost:5000');
    var socket = io.connect('http://192.168.43.66:5000');
  
    // An event handler for submit button & get input value 
    $('#playsurah').on('click', function(event) {
        socket.emit('playsurah', {
            surah: $('.surah option:selected').text(),
            surahval: $('.surah').val(),
            awal: $('.awal').val(),
            akhir: $('.akhir').val()
        });
        return false;
    });

    $('#playjuz').on('click', function(event) {
        socket.emit('playjuz', {
            juz: $('.juz option:selected').text(),
            juzval: $('.juz').val(),
        });
        return false;
    });
    
    // event 'after connect'   
    socket.on('after connect', function(msg) {
        console.log('After connect', msg);
    });
  
    // event 'update value'
    socket.on('update surah', function(msg) {
        console.log('Value updated');
        $('#textoutput').text(msg.surah);
        $('#now').text(msg.surah);
    });

    socket.on('update juz', function(msg) {
        console.log('Value updated');
        $('#textoutput').text(msg.juz);
        $('#now').text(msg.juz);
    });

    // stop
    $('#stopsurah').on('click', function(event) {
        socket.emit('stop', {
            stop: 'stop',
        });
        return false;
    });

    $('#stopjuz').on('click', function(event) {
        socket.emit('stop', {
            stop: 'stop',
        });
        return false;
    });

});