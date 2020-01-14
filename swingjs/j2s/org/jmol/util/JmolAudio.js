(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'org.jmol.util.Logger','javajs.util.AU','javax.sound.sampled.AudioSystem',['javax.sound.sampled.Line','.Info'],'javax.sound.sampled.Clip','sun.audio.AudioDataStream','sun.audio.AudioData']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolAudio", null, null, ['javax.sound.sampled.LineListener', 'org.jmol.api.JmolAudioPlayer']);
C$.idCount=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.params=null;
this.myClip=null;
this.fileName=null;
this.vwr=null;
this.id=null;
this.autoClose=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'playAudio$org_jmol_viewer_Viewer$java_util_Map', function (vwr, htParams) {
try {
this.id=htParams.get$O("id");
if (this.id == null  || this.id.length$() == 0 ) {
this.autoClose=true;
htParams.put$TK$TV("id", this.id="audio" + ++C$.idCount);
}this.vwr=vwr;
this.params=htParams;
this.params.put$TK$TV("audioPlayer", this);
this.fileName=htParams.get$O("audioFile");
vwr.sm.registerAudio$S$java_util_Map(this.id, htParams);
var applet=vwr.html5Applet;
var jmol=vwr.jmolObject;
{

}
if (jmol != null ) jmol.playAudio(applet, htParams);
if (this.myClip == null ) return;
if (htParams.containsKey$O("action")) this.action$S(htParams.get$O("action"));
 else if (htParams.containsKey$O("loop")) {
this.action$S("loop");
} else {
this.autoClose=true;
this.action$S("start");
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1).info$S("File " + this.fileName + " could not be opened as an audio file" );
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getClip', function () {
var data=this.vwr.fm.getFileAsBytes$S$javajs_util_OC(this.fileName, null);
if (!$I$(2).isAB$O(data)) {
$I$(1).info$S("File " + this.fileName + " " + data );
return;
}this.myClip=$I$(3).getLine$javax_sound_sampled_Line_Info(Clazz.new_($I$(4).c$$Class,[Clazz.getClass($I$(5),['getFrameLength$','getMicrosecondLength$','loop$I','open$javax_sound_sampled_AudioInputStream','open$javax_sound_sampled_AudioFormat$BA$I$I','setFramePosition$I','setLoopPoints$I$I','setMicrosecondPosition$J'])]));
this.myClip.addLineListener$javax_sound_sampled_LineListener(this);
var ais=$I$(3).getAudioInputStream$java_io_InputStream(Clazz.new_($I$(6).c$$sun_audio_AudioData,[Clazz.new_($I$(7).c$$BA,[data])]));
this.myClip.open$javax_sound_sampled_AudioInputStream(ais);
}, p$1);

Clazz.newMeth(C$, ['update$javax_sound_sampled_LineEvent','update$'], function (le) {
this.processUpdate$S(le.getType$().toString());
});

Clazz.newMeth(C$, 'processUpdate$S', function (type) {
$I$(1).info$S("audio id " + this.id + " " + this.fileName + " " + type );
if (type == "open" || type == "Open" ) {
this.params.put$TK$TV("status", "open");
} else if (type == "play" || type == "Start" ) {
this.params.put$TK$TV("status", "play");
} else if (type == "pause" || type == "Stop" ) {
this.params.put$TK$TV("status", "pause");
if (this.autoClose) {
this.myClip.close$();
}} else if (type == "ended" || type == "Close" ) {
this.params.put$TK$TV("status", "ended");
} else {
this.params.put$TK$TV("status", type);
}this.vwr.sm.notifyAudioStatus$java_util_Map(this.params);
});

Clazz.newMeth(C$, ['action$S','action$'], function (action) {
if (this.myClip == null ) {
if (action == "kill") return;
this.params.put$TK$TV("status", "ended");
this.vwr.sm.notifyAudioStatus$java_util_Map(this.params);
return;
}try {
if ("start".equals$O(action)) {
this.myClip.setMicrosecondPosition$J(0);
this.myClip.loop$I(0);
this.myClip.start$();
} else if ("loop".equals$O(action)) {
this.myClip.setMicrosecondPosition$J(0);
this.myClip.loop$I(10);
this.myClip.start$();
} else if ("pause".equals$O(action)) {
if (this.myClip != null ) this.myClip.stop$();
} else if ("play".equals$O(action)) {
this.myClip.stop$();
this.myClip.start$();
} else if ("close".equals$O(action)) {
this.myClip.close$();
}} catch (t) {
}
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
