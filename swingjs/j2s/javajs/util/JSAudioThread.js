(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javax.sound.sampled.AudioFormat','sun.audio.AudioPlayer','sun.audio.AudioDataStream','sun.audio.AudioData',['javax.sound.sampled.DataLine','.Info'],'javax.sound.sampled.SourceDataLine','javax.sound.sampled.AudioSystem']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSAudioThread", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javajs.util.JSThread');
C$.$classes$=[['Owner',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['done'],'I',['myBufferLength','rate','nChannels','bitsPerSample','audioBufferByteLength','myBufferOffset','playCount'],'O',['owner','javajs.util.JSAudioThread.Owner','line','javax.sound.sampled.SourceDataLine','audioByteBuffer','byte[]','audioFormat','javax.sound.sampled.AudioFormat']]]

Clazz.newMeth(C$, 'c$$javajs_util_JSAudioThread_Owner$javax_sound_sampled_AudioFormat$BA', function (owner, audioFormat, audioByteBuffer) {
Clazz.super_(C$, this);
this.owner=owner;
this.setFormat$javax_sound_sampled_AudioFormat(audioFormat);
this.setBuffer$BA(audioByteBuffer);
}, 1);

Clazz.newMeth(C$, 'c$$javajs_util_JSAudioThread_Owner$I$I$I$BA', function (owner, rate, bitsPerSample, nChannels, audioByteBuffer) {
Clazz.super_(C$, this);
this.owner=owner;
this.setFormat$javax_sound_sampled_AudioFormat(Clazz.new_($I$(1,1).c$$F$I$I$Z$Z,[rate, bitsPerSample, nChannels, true, false]));
this.setBuffer$BA(audioByteBuffer);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_sound_sampled_AudioFormat', function (audioFormat) {
Clazz.super_(C$, this);
this.setFormat$javax_sound_sampled_AudioFormat(audioFormat);
}, 1);

Clazz.newMeth(C$, 'playULawData$BA', function (data) {
$I$(2).player.start$java_io_InputStream(Clazz.new_([Clazz.new_($I$(4,1).c$$BA,[data])],$I$(3,1).c$$sun_audio_AudioData));
});

Clazz.newMeth(C$, 'playOnce$BA$I$I', function (data, offset, length) {
this.setBuffer$BA(data);
this.myBufferOffset=offset;
this.myBufferLength=length;
this.playCount=1;
this.start$();
});

Clazz.newMeth(C$, 'setBuffer$BA', function (audioByteBuffer) {
this.audioByteBuffer=audioByteBuffer;
this.audioBufferByteLength=audioByteBuffer.length;
});

Clazz.newMeth(C$, 'getLine$', function () {
return this.line;
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.audioFormat;
});

Clazz.newMeth(C$, 'setFormat$javax_sound_sampled_AudioFormat', function (audioFormat) {
this.audioFormat=audioFormat;
this.rate=(audioFormat.getSampleRate$()|0);
this.bitsPerSample=audioFormat.getSampleSizeInBits$();
this.nChannels=audioFormat.getChannels$();
});

Clazz.newMeth(C$, 'resetAudio$', function () {
if (this.line == null ) return;
this.line.flush$();
this.line.close$();
this.line=null;
});

Clazz.newMeth(C$, 'myInit$', function () {
try {
var info=Clazz.new_([Clazz.getClass($I$(6),['open$javax_sound_sampled_AudioFormat$I','open$javax_sound_sampled_AudioFormat','write$BA$I$I']), this.audioFormat],$I$(5,1).c$$Class$javax_sound_sampled_AudioFormat);
if (this.line != null ) this.line.close$();
this.line=$I$(7).getLine$javax_sound_sampled_Line_Info(info);
this.line.open$javax_sound_sampled_AudioFormat$I(this.audioFormat, this.audioBufferByteLength);
this.line.start$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
return false;
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$, 'isLooping$', function () {
return !this.done && (--this.playCount >= 0 || this.owner != null  && this.owner.checkSoundStatus$()  ) ;
});

Clazz.newMeth(C$, 'myLoop$', function () {
if (!this.done) {
if ((this.myBufferLength=(this.owner == null  ? this.myBufferLength : this.owner.fillAudioBuffer$())) <= 0) return !(this.done=true);
try {
if (this.line == null ) this.myInit$();
this.line.write$BA$I$I(this.audioByteBuffer, this.myBufferOffset, this.myBufferLength);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
this.done=true;
} else {
throw e;
}
}
}return !this.done;
});

Clazz.newMeth(C$, 'whenDone$', function () {
this.done=true;
});

Clazz.newMeth(C$, 'getDelayMillis$', function () {
return (((1000 * ((this.myBufferLength * 8/this.bitsPerSample|0))/this.rate|0)/this.nChannels|0)/4|0);
});

Clazz.newMeth(C$, 'onException$Exception', function (e) {
e.printStackTrace$();
});

Clazz.newMeth(C$, 'doFinally$', function () {
if (this.owner != null ) this.owner.audioThreadExiting$();
});
;
(function(){/*i*/var C$=Clazz.newInterface(P$.JSAudioThread, "Owner", function(){
});
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
