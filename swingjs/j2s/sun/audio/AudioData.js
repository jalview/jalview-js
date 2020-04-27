(function(){var P$=Clazz.newPackage("sun.audio"),I$=[[0,'javax.sound.sampled.AudioFormat',['javax.sound.sampled.AudioFormat','.Encoding'],'javax.sound.sampled.AudioSystem','java.io.ByteArrayInputStream']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AudioData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['+format','buffer','byte[]']]
,['O',['DEFAULT_FORMAT','javax.sound.sampled.AudioFormat']]]

Clazz.newMeth(C$, 'c$$BA', function (buffer) {
;C$.$init$.apply(this);
this.buffer=buffer;
this.format=C$.DEFAULT_FORMAT;
try {
var ais=$I$(3,"getAudioInputStream$java_io_ByteArrayInputStream",[Clazz.new_($I$(4,1).c$$BA,[buffer])]);
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
;C$.$init$.apply(this);
this.format=format;
this.buffer=buffer;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_FORMAT=Clazz.new_([$I$(2).ULAW, 8000, 8, 1, 1, 8000, true],$I$(1,1).c$$javax_sound_sampled_AudioFormat_Encoding$F$I$I$I$F$Z);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
