(function(){var P$=Clazz.newPackage("sun.audio"),I$=[[0,'swingjs.JSToolkit']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AudioPlayer", null, 'javajs.util.JSThread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['player','sun.audio.AudioPlayer']]]

Clazz.newMeth(C$, 'getAudioPlayer$', function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'myInit$', function () {
return false;
});

Clazz.newMeth(C$, 'isLooping$', function () {
return false;
});

Clazz.newMeth(C$, 'myLoop$', function () {
return false;
});

Clazz.newMeth(C$, 'whenDone$', function () {
});

Clazz.newMeth(C$, 'getDelayMillis$', function () {
return 0;
});

Clazz.newMeth(C$, 'onException$Exception', function (e) {
});

Clazz.newMeth(C$, 'doFinally$', function () {
});

Clazz.newMeth(C$, 'start$java_io_InputStream', function (is) {
var ads=is;
try {
$I$(1,"playAudio$BA$javax_sound_sampled_AudioFormat",[ads.getAudioData$().buffer, ads.getAudioData$().format]);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.sound.sampled.UnsupportedAudioFileException")){
e.printStackTrace$();
} else {
throw e;
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.player=C$.getAudioPlayer$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 08:14:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
