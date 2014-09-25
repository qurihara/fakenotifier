//var username = 'ma10-aitalk';
//var password = 'NtJ6gP7I&text';
function play(txt) {
//    txt = txt.replace('、','<{&Pau MSEC=500&}>');
//    var speed = 0.85;
//    var pitch = 0.9;
    var urls = 'http://tts.exaitalk.net/webtts/tts/ttsget.php?username=' + username 
        + '&password=' + password 
        + '&speed=' + speed
        + '&pitch=' + pitch
        + '&text='+txt;
    if (txt)
        {
        soundManager.setup({
          //url: './swf/',
          onready: function() {
            var mySound = soundManager.createSound({
              id: 'mySound',
              url: urls
            });
            mySound.play();
          },
          ontimeout: function() {
            // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
          }
        });
    }
};

//jQuery(document).ready( function() {
$( function() {
    $("#btn_txt").click(function(){
        play($("#txt").val());
    });
    $("#btn_go").click(function(){
        play($(this).val());
    });
    
});
