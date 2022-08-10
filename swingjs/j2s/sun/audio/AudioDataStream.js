(function(){var P$=Clazz.newPackage("sun.audio"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AudioDataStream", null, 'java.io.ByteArrayInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ad','sun.audio.AudioData']]]

Clazz.newMeth(C$, 'c$$sun_audio_AudioData',  function (data) {
;C$.superclazz.c$$BA.apply(this,[data.buffer]);C$.$init$.apply(this);
this.ad=data;
}, 1);

Clazz.newMeth(C$, 'getAudioData$',  function () {
return this.ad;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:02 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
