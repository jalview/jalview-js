(function(){var P$=Clazz.newPackage("sun.audio"),I$=[[0,'javax.sound.sampled.AudioFormat',['javax.sound.sampled.AudioFormat','.Encoding'],'javax.sound.sampled.AudioSystem','java.io.ByteArrayInputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AudioData");
C$.DEFAULT_FORMAT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DEFAULT_FORMAT=Clazz.new_($I$(1).c$$javax_sound_sampled_AudioFormat_Encoding$F$I$I$I$F$Z,[$I$(2).ULAW, 8000, 8, 1, 1, 8000, true]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.format=null;
this.buffer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (buffer) {
C$.$init$.apply(this);
this.buffer=buffer;
this.format=C$.DEFAULT_FORMAT;
try {
var ais=$I$(3).getAudioInputStream$java_io_ByteArrayInputStream(Clazz.new_($I$(4).c$$BA,[buffer]));
this.format=ais.getFormat$();
ais.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"javax.sound.sampled.UnsupportedAudioFileException")){
var e1 = e$$;
{
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$javax_sound_sampled_AudioFormat$BA', function (format, buffer) {
C$.$init$.apply(this);
this.format=format;
this.buffer=buffer;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
