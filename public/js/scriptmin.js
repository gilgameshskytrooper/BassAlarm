function submitalarm1sound(){document.getElementById("alarm1sound").submit()}function submitalarm1vibration(){document.getElementById("alarm1vibration").submit()}function submitalarm2sound(){document.getElementById("alarm2sound").submit()}function submitalarm2vibration(){document.getElementById("alarm2vibration").submit()}function submitalarm3sound(){document.getElementById("alarm3sound").submit()}function submitalarm3vibration(){document.getElementById("alarm3vibration").submit()}function submitalarm4sound(){document.getElementById("alarm4sound").submit()}function submitalarm4vibration(){document.getElementById("alarm4vibration").submit()}$.getJSON("/json/alarm1.json",function(a){var b=a[0].time,c=a[0].sound,d=a[0].vibration;document.getElementById("tit1").innerHTML="<h1>"+b+"</h1>","on"==c?$("#alarmsound1").append('<input id="sound1" name="sound1" type="checkbox" value="on" checked><div class="slider round"></div>'):$("#alarmsound1").append('<input id="sound1" name="sound1" type="checkbox" value="off"><div class="slider round"></div>'),"on"==d?$("#alarmvibration1").append('<input id="vibration1" name="vibration1" type="checkbox" value="on" checked><div class="slider round"></div>'):$("#alarmvibration1").append('<input id="vibration1" name="vibration1" type="checkbox" value="off"><div class="slider round"></div>')}),$.getJSON("/json/alarm2.json",function(a){var b=a[0].time,c=a[0].sound,d=a[0].vibration;document.getElementById("tit2").innerHTML="<h1>"+b+"</h1>","on"==c?$("#alarmsound2").append('<input id="sound2" name="sound2" type="checkbox" value="on" checked><div class="slider round"></div>'):$("#alarmsound2").append('<input id="sound2" name="sound2" type="checkbox" value="off"><div class="slider round"></div>'),"on"==d?$("#alarmvibration2").append('<input id="vibration2" name="vibration2" type="checkbox" value="on" checked><div class="slider round"></div>'):$("#alarmvibration2").append('<input id="vibration2" name="vibration2" type="checkbox" value="off"><div class="slider round"></div>')}),$.getJSON("/json/alarm3.json",function(a){var b=a[0].time,c=a[0].sound,d=a[0].vibration;document.getElementById("tit3").innerHTML="<h1>"+b+"</h1>","on"==c?$("#alarmsound3").append('<input id="sound3" name="sound3" type="checkbox" value="on" checked><div class="slider round"></div>'):$("#alarmsound3").append('<input id="sound3" name="sound3" type="checkbox" value="off"><div class="slider round"></div>'),"on"==d?$("#alarmvibration3").append('<input id="vibration3" name="vibration3" type="checkbox" value="on" checked><div class="slider round"></div>'):$("#alarmvibration3").append('<input id="vibration3" name="vibration3" type="checkbox" value="off"><div class="slider round"></div>')}),$.getJSON("/json/alarm4.json",function(a){var b=a[0].time,c=a[0].sound,d=a[0].vibration;document.getElementById("tit4").innerHTML="<h1>"+b+"</h1>","on"==c?$("#alarmsound4").append('<input id="sound4" name="sound4" type="checkbox" value="on" checked><div class="slider round"></div>'):$("#alarmsound4").append('<input id="sound4" name="sound4" type="checkbox" value="off"><div class="slider round"></div>'),"on"==d?$("#alarmvibration4").append('<input id="vibration4" name="vibration4" type="checkbox" value="on" checked><div class="slider round"></div>'):$("#alarmvibration4").append('<input id="vibration4" name="vibration4" type="checkbox" value="off"><div class="slider round"></div>')}),$(document).ready(function(){document.getElementById("sound1").setAttribute("onClick","submitalarm1sound()"),document.getElementById("vibration1").setAttribute("onClick","submitalarm1vibration()"),document.getElementById("sound2").setAttribute("onClick","submitalarm2sound()"),document.getElementById("vibration2").setAttribute("onClick","submitalarm2vibration()"),document.getElementById("sound3").setAttribute("onClick","submitalarm3sound()"),document.getElementById("vibration3").setAttribute("onClick","submitalarm3vibration()"),document.getElementById("sound4").setAttribute("onClick","submitalarm4sound()"),document.getElementById("vibration4").setAttribute("onClick","submitalarm4vibration()")});