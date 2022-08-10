(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'org.jmol.viewer.Viewer','org.jmol.util.Logger','javajs.util.AU','javax.sound.sampled.AudioSystem',['javax.sound.sampled.Line','.Info'],'javax.sound.sampled.Clip','sun.audio.AudioDataStream','sun.audio.AudioData']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JmolAudio", null, null, ['javax.sound.sampled.LineListener', 'org.jmol.api.JmolAudioPlayer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['autoClose'],'S',['fileName','id'],'O',['params','java.util.Map','myClip','javax.sound.sampled.Clip','vwr','org.jmol.viewer.Viewer']]
,['I',['idCount']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'playAudio$org_jmol_viewer_Viewer$java_util_Map', function (vwr, htParams) {
try {
this.id=htParams.get$O("id");
if (this.id == null  || this.id.length$() == 0 ) {
this.autoClose=true;
htParams.put$O$O("id", this.id="audio" + ++C$.idCount);
}this.vwr=vwr;
this.params=htParams;
this.params.put$O$O("audioPlayer", this);
this.fileName=htParams.get$O("audioFile");
vwr.sm.registerAudio$S$java_util_Map(this.id, htParams);
var applet=vwr.html5Applet;
var jmol=$I$(1).jmolObject;
if (jmol == null ) p$1.getClip.apply(this, []);
 else jmol.playAudio(applet, htParams);
if (this.myClip == null ) return;
if (htParams.containsKey$O("action")) this.action$S(htParams.get$O("action"));
 else if (htParams.containsKey$O("loop")) {
this.action$S("loop");
} else {
this.autoClose=true;
this.action$S("start");
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(2).info$S("File " + this.fileName + " could not be opened as an audio file" );
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getClip', function () {
var data=this.vwr.fm.getFileAsBytes$S$javajs_util_OC(this.fileName, null);
if (!$I$(3).isAB$O(data)) {
$I$(2).info$S("File " + this.fileName + " " + data );
return;
}this.myClip=$I$(4,"getLine$javax_sound_sampled_Line_Info",[Clazz.new_([Clazz.getClass($I$(6),['getFrameLength$','getMicrosecondLength$','loop$I','open$javax_sound_sampled_AudioInputStream','open$javax_sound_sampled_AudioFormat$BA$I$I','setFramePosition$I','setLoopPoints$I$I','setMicrosecondPosition$J'])],$I$(5,1).c$$Class)]);
this.myClip.addLineListener$javax_sound_sampled_LineListener(this);
var ais=$I$(4,"getAudioInputStream$java_io_InputStream",[Clazz.new_([Clazz.new_($I$(8,1).c$$BA,[data])],$I$(7,1).c$$sun_audio_AudioData)]);
this.myClip.open$javax_sound_sampled_AudioInputStream(ais);
}, p$1);

Clazz.newMeth(C$, 'update$javax_sound_sampled_LineEvent', function (le) {
this.processUpdate$S(le.getType$().toString());
});

Clazz.newMeth(C$, 'processUpdate$S', function (type) {
$I$(2).info$S("audio id " + this.id + " " + this.fileName + " " + type );
if (type === "open"  || type === "Open"  ) {
this.params.put$O$O("status", "open");
} else if (type === "play"  || type === "Start"  ) {
this.params.put$O$O("status", "play");
} else if (type === "pause"  || type === "Stop"  ) {
this.params.put$O$O("status", "pause");
if (this.autoClose) {
this.myClip.close$();
}} else if (type === "ended"  || type === "Close"  ) {
this.params.put$O$O("status", "ended");
} else {
this.params.put$O$O("status", type);
}this.vwr.sm.notifyAudioStatus$java_util_Map(this.params);
});

Clazz.newMeth(C$, 'action$S', function (action) {
if (this.myClip == null ) {
if (action === "kill" ) return;
this.params.put$O$O("status", "ended");
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
