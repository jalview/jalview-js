(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jsonkiosk"),p$1={},I$=[[0,'org.jmol.util.Logger','Thread','java.util.ArrayList','org.jmol.script.SV','javajs.util.SB','javajs.util.PT','org.jmol.util.Escape','naga.packetreader.AsciiLinePacketReader','naga.packetwriter.RawPacketWriter',['org.openscience.jmol.app.jsonkiosk.JsonNioService','.JsonNioThread'],['org.openscience.jmol.app.jsonkiosk.JsonNioService','.JSONObject'],'naga.SocketObserverAdapter','naga.ServerSocketObserverAdapter',['org.openscience.jmol.app.jsonkiosk.JsonNioService','.JsonNioServerThread'],'java.io.File','java.io.BufferedReader','java.io.InputStreamReader','java.io.FileInputStream','javajs.util.P3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JsonNioService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'naga.NIOService', 'org.openscience.jmol.app.jsonkiosk.JsonNioServer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.myName=null;
this.halt=false;
this.isPaused=false;
this.latestMoveTime=0;
this.port=0;
this.thread=null;
this.serverThread=null;
this.inSocket=null;
this.outSocket=null;
this.serverSocket=null;
this.vwr=null;
this.client=null;
this.wasSpinOn=false;
this.contentPath=null;
this.terminatorMessage=null;
this.resetMessage=null;
this.version=0;
this.nFast=0;
this.swipeCutoff=0;
this.swipeCount=0;
this.swipeDelayMs=0;
this.previousMoveTime=0;
this.swipeStartTime=0;
this.swipeFactor=0;
this.motionDisabled=false;
this.contentDisabled=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.contentPath="./%ID%.json";
this.terminatorMessage="NEXT_SCRIPT";
this.resetMessage="RESET_SCRIPT";
this.version=1;
this.swipeCutoff=100;
this.swipeCount=2;
this.swipeDelayMs=3000;
this.swipeFactor=30;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'scriptCallback$S', function (msg) {
if (msg == null ) return;
if (msg.startsWith$S("banner:")) {
p$1.setBanner$S$Z.apply(this, [msg.substring$I(7).trim$(), false]);
} else if (msg.equals$O(this.terminatorMessage)) {
p$1.sendMessage$org_openscience_jmol_app_jsonkiosk_JsonNioService_JSONObject$S$naga_NIOSocket.apply(this, [null, "!script_terminated!", null]);
} else if (this.contentDisabled && msg.equals$O(this.resetMessage) ) {
this.client.nioRunContent$org_openscience_jmol_app_jsonkiosk_JsonNioServer(null);
}});

Clazz.newMeth(C$, 'getPort$', function () {
return this.port;
});

Clazz.newMeth(C$, 'send$I$S', function (port, msg) {
try {
if (port != this.port) {
if (this.inSocket != null ) {
this.inSocket.close$();
if (this.outSocket != null ) this.outSocket.close$();
}if (this.thread != null ) {
this.thread.interrupt$();
this.thread=null;
}this.startService$I$org_openscience_jmol_app_jsonkiosk_JsonNioClient$org_jmol_viewer_Viewer$S$I(port, this.client, this.vwr, this.myName, 1);
}if (msg.startsWith$S("Mouse:")) msg="{\"type\":\"sync\", \"sync\":\"" + msg.substring$I(6) + "\"}" ;
p$1.sendMessage$org_openscience_jmol_app_jsonkiosk_JsonNioService_JSONObject$S$naga_NIOSocket.apply(this, [null, msg, null]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'startService$I$org_openscience_jmol_app_jsonkiosk_JsonNioClient$org_jmol_viewer_Viewer$S$I', function (port, client, jmolViewer, name, version) {
this.version=version;
this.port=Math.abs(port);
this.client=client;
this.vwr=jmolViewer;
this.myName=(name == null  ? "" : name);
if (port < 0) {
p$1.startServerService.apply(this, []);
return;
}if (name != null ) {
var s=C$.getJmolValueAsString$org_jmol_viewer_Viewer$S(jmolViewer, "NIOcontentPath");
if (s != "") this.contentPath=s;
s=C$.getJmolValueAsString$org_jmol_viewer_Viewer$S(jmolViewer, "NIOterminatorMessage");
if (s != "") this.terminatorMessage=s;
s=C$.getJmolValueAsString$org_jmol_viewer_Viewer$S(jmolViewer, "NIOresetMessage");
if (s != "") this.resetMessage=s;
p$1.setEnabled.apply(this, []);
$I$(1).info$S("NIOcontentPath=" + this.contentPath);
$I$(1).info$S("NIOterminatorMessage=" + this.terminatorMessage);
$I$(1).info$S("NIOresetMessage=" + this.resetMessage);
$I$(1).info$S("NIOcontentDisabled=" + this.contentDisabled);
$I$(1).info$S("NIOmotionDisabled=" + this.motionDisabled);
}$I$(1).info$S("JsonNioService" + this.myName + " using port " + port );
if (port != 0) {
this.inSocket=this.openSocket$S$I("127.0.0.1", port);
this.inSocket.setPacketReader$naga_PacketReader(Clazz.new_($I$(8)));
this.inSocket.setPacketWriter$naga_PacketWriter($I$(9).INSTANCE);
this.inSocket.listen$naga_SocketObserver(((P$.JsonNioService$1||
(function(){var C$=Clazz.newClass(P$, "JsonNioService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'naga.SocketObserver', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'connectionOpened$naga_NIOSocket', function (nioSocket) {
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].initialize$S$naga_NIOSocket.apply(this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'], ["out", nioSocket]);
});

Clazz.newMeth(C$, 'packetReceived$naga_NIOSocket$BA', function (socket, packet) {
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].processMessage$BA$naga_NIOSocket.apply(this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'], [packet, null]);
});

Clazz.newMeth(C$, 'connectionBroken$naga_NIOSocket$Exception', function (nioSocket, exception) {
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].halt=true;
$I$(1).info$S($I$(2).currentThread$().getName$() + " inSocket connectionBroken");
});

Clazz.newMeth(C$, 'packetSent$naga_NIOSocket$O', function (arg0, arg1) {
});
})()
), Clazz.new_(P$.JsonNioService$1.$init$, [this, null])));
if (version == 1) {
this.outSocket=this.openSocket$S$I("127.0.0.1", port);
this.outSocket.setPacketReader$naga_PacketReader(Clazz.new_($I$(8)));
this.outSocket.setPacketWriter$naga_PacketWriter($I$(9).INSTANCE);
this.outSocket.listen$naga_SocketObserver(((P$.JsonNioService$2||
(function(){var C$=Clazz.newClass(P$, "JsonNioService$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'naga.SocketObserver', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'connectionOpened$naga_NIOSocket', function (nioSocket) {
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].initialize$S$naga_NIOSocket.apply(this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'], ["in", nioSocket]);
});

Clazz.newMeth(C$, 'packetReceived$naga_NIOSocket$BA', function (nioSocket, packet) {
$I$(1).info$S("outpacketreceived");
});

Clazz.newMeth(C$, 'connectionBroken$naga_NIOSocket$Exception', function (nioSocket, exception) {
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].halt=true;
$I$(1).info$S($I$(2).currentThread$().getName$() + " outSocket connectionBroken");
});

Clazz.newMeth(C$, 'packetSent$naga_NIOSocket$O', function (arg0, arg1) {
});
})()
), Clazz.new_(P$.JsonNioService$2.$init$, [this, null])));
}}if (port != 0) {
this.thread=Clazz.new_($I$(2).c$$Runnable$S,[Clazz.new_($I$(10), [this, null]), "JsonNiosThread" + this.myName]);
this.thread.start$();
}if (port == 0 && this.contentDisabled ) client.nioRunContent$org_openscience_jmol_app_jsonkiosk_JsonNioServer(this);
});

Clazz.newMeth(C$, 'setEnabled', function () {
this.contentDisabled=(C$.getJmolValueAsString$org_jmol_viewer_Viewer$S(this.vwr, "NIOcontentDisabled").equals$O("true"));
this.motionDisabled=(C$.getJmolValueAsString$org_jmol_viewer_Viewer$S(this.vwr, "NIOmotionDisabled").equals$O("true"));
}, p$1);

Clazz.newMeth(C$, 'getJmolValueAsString$org_jmol_viewer_Viewer$S', function (vwr, $var) {
return (vwr == null  ? "" : "" + vwr.getP$S($var));
}, 1);

Clazz.newMeth(C$, 'close$', function () {
$I$(1).info$S("JsonNioService" + this.myName + " close" );
try {
this.halt=true;
C$.superclazz.prototype.close$.apply(this, []);
if (this.thread != null ) {
this.thread.interrupt$();
this.thread=null;
}if (this.serverThread != null ) {
this.serverThread.interrupt$();
this.serverThread=null;
}if (this.inSocket != null ) this.inSocket.close$();
if (this.outSocket != null ) this.outSocket.close$();
} catch (e) {
e.printStackTrace$();
}
if (this.client != null ) this.client.nioClosed$org_openscience_jmol_app_jsonkiosk_JsonNioServer(this);
});

Clazz.newMeth(C$, 'initialize$S$naga_NIOSocket', function (role, nioSocket) {
$I$(1).info$S("JsonNioService" + this.myName + " initialize " + role );
var json=Clazz.new_($I$(11), [this, null]);
if (this.version == 1) {
json.put$TK$TV("magic", "JmolApp");
json.put$TK$TV("role", role);
} else {
json.put$TK$TV("source", "Jmol");
json.put$TK$TV("type", "login");
}p$1.sendMessage$org_openscience_jmol_app_jsonkiosk_JsonNioService_JSONObject$S$naga_NIOSocket.apply(this, [json, null, nioSocket]);
});

Clazz.newMeth(C$, 'startServerService', function () {
try {
this.serverSocket=this.openServerSocket$I(this.port);
this.serverSocket.listen$naga_ServerSocketObserver(((P$.JsonNioService$3||
(function(){var C$=Clazz.newClass(P$, "JsonNioService$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('naga.ServerSocketObserverAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'newConnection$naga_NIOSocket', function (nioSocket) {
$I$(1).info$S($I$(2).currentThread$().getName$() + " Received connection: " + nioSocket );
nioSocket.setPacketReader$naga_PacketReader(Clazz.new_($I$(8)));
nioSocket.setPacketWriter$naga_PacketWriter($I$(9).INSTANCE);
nioSocket.listen$naga_SocketObserver(((P$.JsonNioService$3$1||
(function(){var C$=Clazz.newClass(P$, "JsonNioService$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('naga.SocketObserverAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'packetReceived$naga_NIOSocket$BA', function (socket, packet) {
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].processMessage$BA$naga_NIOSocket.apply(this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'], [packet, socket]);
});

Clazz.newMeth(C$, 'connectionOpened$naga_NIOSocket', function (arg0) {
});

Clazz.newMeth(C$, 'connectionBroken$naga_NIOSocket$Exception', function (socket, arg1) {
$I$(1).info$S("JsonNioService" + this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].myName + " server connection broken" );
if (socket === this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].outSocket ) this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].outSocket=null;
});
})()
), Clazz.new_($I$(12), [this, null],P$.JsonNioService$3$1)));
});
})()
), Clazz.new_($I$(13), [this, null],P$.JsonNioService$3)));
this.serverSocket.setConnectionAcceptor$naga_ConnectionAcceptor(((P$.JsonNioService$4||
(function(){var C$=Clazz.newClass(P$, "JsonNioService$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'naga.ConnectionAcceptor', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['acceptConnection$java_net_InetSocketAddress','acceptConnection$'], function (arg0) {
var isOK=arg0.getAddress$().isLoopbackAddress$();
return isOK;
});
})()
), Clazz.new_(P$.JsonNioService$4.$init$, [this, null])));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
if (this.serverThread != null ) this.serverThread.interrupt$();
this.serverThread=Clazz.new_($I$(2).c$$Runnable$S,[Clazz.new_($I$(14), [this, null]), "JsonNioServerThread" + this.myName]);
this.serverThread.start$();
}, p$1);

Clazz.newMeth(C$, 'processMessage$BA$naga_NIOSocket', function (packet, socket) {
try {
var msg= String.instantialize(packet);
$I$(1).info$S("JNIOS received " + msg);
if (this.vwr == null ) {
return;
}var json=Clazz.new_($I$(11).c$$S, [this, null, msg]);
if (this.version == 1) {
if (socket != null  && json.has$S("magic")  && json.getString$S("magic").equals$O("JmolApp")  && json.getString$S("role").equals$O("out") ) this.outSocket=socket;
} else {
this.outSocket=this.inSocket;
}if (!json.has$S("type")) return;
p$1.processJSON$org_openscience_jmol_app_jsonkiosk_JsonNioService_JSONObject$S.apply(this, [json, msg]);
} catch (e) {
e.printStackTrace$();
}
});

Clazz.newMeth(C$, 'processJSON$org_openscience_jmol_app_jsonkiosk_JsonNioService_JSONObject$S', function (json, msg) {
if (json == null ) json=Clazz.new_($I$(11).c$$S, [this, null, msg]);
var pt=("banner....command...content...move......quit......sync......touch.....").indexOf$S(json.getString$S("type"));
p$1.setEnabled.apply(this, []);
switch (pt) {
case 0:
if (this.contentDisabled) break;
p$1.setBanner$S$Z.apply(this, [(json.has$S("text") ? json.getString$S("text") : json.getString$S("visibility").equalsIgnoreCase$S("off") ? null : ""), false]);
break;
case 10:
if (this.contentDisabled) break;
if (json.containsKey$O("var") && json.containsKey$O("data") ) this.vwr.g.setUserVariable$S$org_jmol_script_SV(json.get$S("var").toString(), $I$(4).getVariable$O(json.get$S("data")));
p$1.sendScript$S.apply(this, [json.getString$S("command")]);
break;
case 20:
if (this.contentDisabled) {
this.client.nioRunContent$org_openscience_jmol_app_jsonkiosk_JsonNioServer(this);
break;
}var id=json.getString$S("id");
var path=$I$(6).rep$S$S$S(this.contentPath, "%ID%", id).replace$C$C("\\", "/");
var f=Clazz.new_($I$(15).c$$S,[path]);
$I$(1).info$S("JsonNiosService Setting path to " + f.getAbsolutePath$());
pt=path.lastIndexOf$I("/");
if (pt >= 0) path=path.substring$I$I(0, pt);
 else path=".";
var contentJSON=null;
try {
var br=Clazz.new_($I$(16).c$$java_io_Reader,[Clazz.new_($I$(17).c$$java_io_InputStream$S,[Clazz.new_($I$(18).c$$java_io_File,[f]), "UTF-8"])]);
var sb=$I$(5).newN$I(8192);
var line;
while ((line=br.readLine$()) != null )sb.append$S(line).appendC$C("\n");

br.close$();
contentJSON=Clazz.new_($I$(11).c$$S, [this, null, sb.toString()]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
} else {
throw e;
}
}
var script=null;
if (contentJSON.has$S("scripts")) {
var scripts=contentJSON.getJSONArray$S("scripts");
for (var i=scripts.size$(); --i >= 0; ) {
var scriptInfo=scripts.get$I(i);
if (scriptInfo.getString$S("startup").equals$O("yes")) {
script=scriptInfo.getString$S("filename");
break;
}}
if (script == null ) throw Clazz.new_(Clazz.load('Exception').c$$S,["scripts startup:yes not found"]);
} else {
script=contentJSON.getString$S("startup_script");
}$I$(1).info$S("JsonNiosService startup_script=" + script);
p$1.setBanner$S$Z.apply(this, ["", false]);
p$1.sendScript$S.apply(this, ["exit"]);
p$1.sendScript$S.apply(this, ["zap;cd \"" + path + "\";script " + script ]);
p$1.setBanner$S$Z.apply(this, [contentJSON.getString$S("banner").equals$O("off") ? null : contentJSON.getString$S("banner_text"), true]);
break;
case 30:
pt=("rotate....translate.zoom......").indexOf$S(json.getString$S("style"));
if (this.motionDisabled) break;
if (pt != 0 && !this.isPaused ) this.pauseScript$Z(true);
var now=this.latestMoveTime=System.currentTimeMillis$();
switch (pt) {
case 0:
var dx=json.getDouble$S("x");
var dy=json.getDouble$S("y");
var dxdy=dx * dx + dy * dy;
var isFast=(dxdy > this.swipeCutoff );
var disallowSpinGesture=this.vwr.getBooleanProperty$S("isNavigating") || !this.vwr.getBooleanProperty$S("allowGestures") ;
if (disallowSpinGesture || isFast || now - this.swipeStartTime > this.swipeDelayMs   ) {
msg=null;
if (disallowSpinGesture) {
} else if (isFast) {
if (++this.nFast > this.swipeCount) {
this.swipeStartTime=now;
msg="Mouse: spinXYBy " + (dx|0) + " " + (dy|0) + " " + new Double((Math.sqrt(dxdy) * this.swipeFactor / (now - this.previousMoveTime))).toString() ;
}} else if (this.nFast > 0) {
this.nFast=0;
msg="Mouse: spinXYBy 0 0 0";
}if (msg == null ) msg="Mouse: rotateXYBy " + new Float(dx).toString() + " " + new Float(dy).toString() ;
p$1.syncScript$S.apply(this, [msg]);
}this.previousMoveTime=now;
break;
case 10:
this.vwr.syncScript$S$S$I("Mouse: translateXYBy " + json.getString$S("x") + " " + json.getString$S("y") , "=", 0);
break;
case 20:
var zoomFactor=(json.getDouble$S("scale") / (this.vwr.tm.zmPct / 100.0));
p$1.syncScript$S.apply(this, ["Mouse: zoomByFactor " + new Float(zoomFactor).toString()]);
break;
}
break;
case 40:
this.halt=true;
$I$(1).info$S("JsonNiosService quitting");
break;
case 50:
if (this.motionDisabled) break;
p$1.syncScript$S.apply(this, ["Mouse: " + json.getString$S("sync")]);
break;
case 60:
if (this.motionDisabled) break;
this.vwr.acm.processMultitouchEvent$I$I$I$I$javajs_util_P3$J(0, json.getInt$S("eventType"), json.getInt$S("touchID"), json.getInt$S("iData"), $I$(19).new3$F$F$F(json.getDouble$S("x"), json.getDouble$S("y"), json.getDouble$S("z")), json.getLong$S("time"));
break;
}
}, p$1);

Clazz.newMeth(C$, 'sendScript$S', function (script) {
$I$(1).info$S("JsonNiosService sendScript " + script);
this.vwr.evalStringQuiet$S(script);
}, p$1);

Clazz.newMeth(C$, 'syncScript$S', function (script) {
$I$(1).info$S("JsonNiosService syncScript " + script);
this.vwr.syncScript$S$S$I(script, "=", 0);
}, p$1);

Clazz.newMeth(C$, 'setBanner$S$Z', function (bannerText, andCenter) {
if (bannerText == null ) {
this.client.setBannerLabel$S(null);
} else {
if (andCenter) bannerText="<center>" + bannerText + "</center>" ;
this.client.setBannerLabel$S("<html>" + bannerText + "</html>" );
}}, p$1);

Clazz.newMeth(C$, 'pauseScript$Z', function (isPause) {
var script;
if (isPause) {
this.wasSpinOn=this.vwr.getBooleanProperty$S("spinOn");
script="pause; save orientation \'JsonNios-save\'; spin off";
this.isPaused=true;
} else {
script="restore orientation 'JsonNios-save' 1; resume; spin " + this.wasSpinOn;
this.wasSpinOn=false;
}this.isPaused=isPause;
p$1.sendScript$S.apply(this, [script]);
});

Clazz.newMeth(C$, 'sendMessage$org_openscience_jmol_app_jsonkiosk_JsonNioService_JSONObject$S$naga_NIOSocket', function (json, msg, socket) {
if (socket == null  && (socket=this.outSocket) == null  ) return;
try {
if (json != null ) {
msg=json.toString();
} else if (msg != null  && msg.indexOf$S("{") != 0 ) {
json=Clazz.new_($I$(11), [this, null]);
if (msg.equalsIgnoreCase$S("!script_terminated!")) {
json.put$TK$TV("type", "script");
json.put$TK$TV("event", "done");
} else {
json.put$TK$TV("type", "command");
json.put$TK$TV("command", msg);
}msg=json.toString();
}msg += "\r\n";
$I$(1).info$S($I$(2).currentThread$().getName$() + " sending " + msg + " to " + socket );
socket.write$BA(msg.getBytes$S("UTF-8"));
} catch (e) {
e.printStackTrace$();
}
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.JsonNioService, "JsonNioThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(1).info$S($I$(2).currentThread$().getName$() + " JsonNioSocket on " + this.this$0.port );
try {
while (!this.this$0.halt){
this.b$['naga.NIOService'].selectNonBlocking$.apply(this.b$['naga.NIOService'], []);
var now=System.currentTimeMillis$();
if (this.this$0.isPaused && now - this.this$0.latestMoveTime > 5000 ) this.this$0.pauseScript$Z.apply(this.this$0, [false]);
$I$(2).sleep$J(50);
}
} catch (e) {
e.printStackTrace$();
}
this.this$0.close$.apply(this.this$0, []);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JsonNioService, "JsonNioServerThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(1).info$S($I$(2).currentThread$().getName$() + " JsonNioServerSocket on " + this.this$0.port );
try {
while (!this.this$0.halt)this.b$['naga.NIOService'].selectBlocking$.apply(this.b$['naga.NIOService'], []);

} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
this.this$0.close$.apply(this.this$0, []);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JsonNioService, "JSONObject", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.Hashtable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (msg) {
Clazz.super_(C$, this,1);
var o=this.this$0.vwr.evaluateExpressionAsVariable$O(msg);
if (!(Clazz.instanceOf(o.value, "java.util.Map"))) throw Clazz.new_(Clazz.load('Exception').c$$S,["invalid JSON: " + msg]);
this.putAll$java_util_Map(o.value);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (map) {
Clazz.super_(C$, this,1);
this.putAll$java_util_Map(map);
}, 1);

Clazz.newMeth(C$, 'has$S', function (key) {
return this.containsKey$O(key);
});

Clazz.newMeth(C$, 'getString$S', function (key) {
return this.containsKey$O(key) ? this.get$S(key).toString() : null;
});

Clazz.newMeth(C$, 'getJSONArray$S', function (key) {
if (!this.has$S(key)) throw Clazz.new_(Clazz.load('Exception').c$$S,["JSON key not found:" + key]);
var list=Clazz.new_($I$(3));
var svlist=(this.get$S(key)).getList$();
for (var i=0; i < svlist.size$(); i++) list.add$TE(Clazz.new_(C$.c$$java_util_Map, [this, null, (svlist.get$I(i).value)]));

return list;
});

Clazz.newMeth(C$, 'get$S', function (key) {
var o=C$.superclazz.prototype.get$O.apply(this, [key]);
return (Clazz.instanceOf(o, "org.jmol.script.SV") ? $I$(4).oValue$O(o) : o);
});

Clazz.newMeth(C$, 'getLong$S', function (key) {
if (!this.has$S(key)) throw Clazz.new_(Clazz.load('Exception').c$$S,["JSON key not found:" + key]);
return Long.parseLong$S(this.get$S(key).toString());
});

Clazz.newMeth(C$, 'getInt$S', function (key) {
if (!this.has$S(key)) throw Clazz.new_(Clazz.load('Exception').c$$S,["JSON key not found:" + key]);
return Integer.parseInt$S(this.get$S(key).toString());
});

Clazz.newMeth(C$, 'getDouble$S', function (key) {
if (!this.has$S(key)) throw Clazz.new_(Clazz.load('Exception').c$$S,["JSON key not found:" + key]);
return Double.parseDouble$S(this.get$S(key).toString());
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(5));
sb.append$S("{");
var sep="";
for (var e, $e = this.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
sb.append$S(sep).append$S($I$(6).esc$S(e.getKey$())).append$S(":").append$S($I$(7).e$O(e.getValue$()));
sep=",";
}
return sb.append$S("}").toString();
});
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 07:20:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
