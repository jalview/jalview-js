(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javax.sound.sampled.AudioFormat','sun.audio.AudioPlayer','sun.audio.AudioDataStream','sun.audio.AudioData',['javax.sound.sampled.DataLine','.Info'],'javax.sound.sampled.SourceDataLine','javax.sound.sampled.AudioSystem']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSAudioThread", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javajs.util.JSThread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.owner=null;
this.done=false;
this.myBufferLength=0;
this.line=null;
this.rate=0;
this.nChannels=0;
this.bitsPerSample=0;
this.audioByteBuffer=null;
this.audioBufferByteLength=0;
this.audioFormat=null;
this.myBufferOffset=0;
this.playCount=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javajs_util_JSAudioThread_Owner$javax_sound_sampled_AudioFormat$BA', function (owner, audioFormat, audioByteBuffer) {
Clazz.super_(C$, this,1);
this.owner=owner;
this.setFormat$javax_sound_sampled_AudioFormat(audioFormat);
this.setBuffer$BA(audioByteBuffer);
}, 1);

Clazz.newMeth(C$, 'c$$javajs_util_JSAudioThread_Owner$I$I$I$BA', function (owner, rate, bitsPerSample, nChannels, audioByteBuffer) {
Clazz.super_(C$, this,1);
this.owner=owner;
this.setFormat$javax_sound_sampled_AudioFormat(Clazz.new_($I$(1).c$$F$I$I$Z$Z,[rate, bitsPerSample, nChannels, true, false]));
this.setBuffer$BA(audioByteBuffer);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$javax_sound_sampled_AudioFormat', function (audioFormat) {
Clazz.super_(C$, this,1);
this.setFormat$javax_sound_sampled_AudioFormat(audioFormat);
}, 1);

Clazz.newMeth(C$, 'playULawData$BA', function (data) {
$I$(2).player.start$java_io_InputStream(Clazz.new_($I$(3).c$$sun_audio_AudioData,[Clazz.new_($I$(4).c$$BA,[data])]));
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
var info=Clazz.new_($I$(5).c$$Class$javax_sound_sampled_AudioFormat,[Clazz.getClass($I$(6),['open$javax_sound_sampled_AudioFormat$I','open$javax_sound_sampled_AudioFormat','write$BA$I$I']), this.audioFormat]);
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
(function(){var C$=Clazz.newInterface(P$.JSAudioThread, "Owner", function(){
});
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
