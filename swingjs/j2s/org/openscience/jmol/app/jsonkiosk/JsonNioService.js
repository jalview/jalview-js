(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jsonkiosk"),p$1={},I$=[[0,'org.jmol.util.Logger','Thread','naga.packetreader.AsciiLinePacketReader','naga.packetwriter.RawPacketWriter',['org.openscience.jmol.app.jsonkiosk.JsonNioService','.JsonNioClientThread'],'javax.swing.SwingUtilities','java.util.LinkedHashMap','java.util.HashMap','naga.SocketObserverAdapter','naga.ServerSocketObserverAdapter',['org.openscience.jmol.app.jsonkiosk.JsonNioService','.JsonNioServerThread'],'java.io.ByteArrayOutputStream','org.jmol.util.JSONWriter','javajs.util.JSJSONParser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonNioService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'naga.NIOService', 'org.openscience.jmol.app.jsonkiosk.JsonNioServer');
C$.$classes$=[['JsonNioServerThread',4],['JsonNioClientThread',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.version=2;
},1);

C$.$fields$=[['Z',['halt'],'I',['port','version'],'S',['myName'],'O',['clientThread','Thread','+serverThread','inSocket','naga.NIOSocket','+outSocket','serverSocket','naga.NIOServerSocket','vwr','org.jmol.viewer.Viewer','client','org.openscience.jmol.app.jsonkiosk.JsonNioClient']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPort$', function () {
return this.port;
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
}$I$(1).info$S("JsonNioService" + this.myName + " using port " + port );
if (port != 0) {
this.inSocket=this.openSocket$S$I("127.0.0.1", port);
this.inSocket.setPacketReader$naga_PacketReader(Clazz.new_($I$(3,1)));
this.inSocket.setPacketWriter$naga_PacketWriter($I$(4).INSTANCE);
this.inSocket.listen$naga_SocketObserver(((P$.JsonNioService$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JsonNioService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'naga.SocketObserver', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'connectionOpened$naga_NIOSocket', function (nioSocket) {
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].initialize$S$naga_NIOSocket.apply(this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'], ["out", nioSocket]);
});

Clazz.newMeth(C$, 'packetReceived$naga_NIOSocket$BA', function (socket, packet) {
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].processMessage$BA$naga_NIOSocket.apply(this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'], [packet, socket]);
});

Clazz.newMeth(C$, 'connectionBroken$naga_NIOSocket$Exception', function (nioSocket, exception) {
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].halt=true;
$I$(1,"info$S",[$I$(2).currentThread$().getName$() + " inSocket connectionBroken"]);
});

Clazz.newMeth(C$, 'packetSent$naga_NIOSocket$O', function (arg0, arg1) {
});
})()
), Clazz.new_(P$.JsonNioService$1.$init$,[this, null])));
this.outSocket=this.inSocket;
}if (port != 0) {
this.clientThread=Clazz.new_([Clazz.new_($I$(5,1),[this, null]), "JsonNiosThread" + this.myName],$I$(2,1).c$$Runnable$S);
this.clientThread.start$();
}});

Clazz.newMeth(C$, 'hasOuputSocket$', function () {
return (this.outSocket != null );
});

Clazz.newMeth(C$, 'sendToJmol$I$S', function (port, msg) {
try {
if (port == 2) {
return;
}if (port != this.port) {
if (this.inSocket != null  && this.inSocket !== this.outSocket  ) {
this.inSocket.close$();
}if (this.outSocket != null ) this.outSocket.close$();
if (this.clientThread != null ) {
this.clientThread.interrupt$();
this.clientThread=null;
}this.startService$I$org_openscience_jmol_app_jsonkiosk_JsonNioClient$org_jmol_viewer_Viewer$S$I(port, this.client, this.vwr, this.myName + ".", 1);
}this.sendMessage$java_util_Map$S$naga_NIOSocket(null, msg, this.outSocket);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'processMessage$BA$naga_NIOSocket', function (packet, socket) {
try {
$I$(1,"info$S",["JNIOS received " + packet.length + " bytes from socket " + socket.getPort$() ]);
if (packet.length < 100) {
var json=C$.toMap$BA(packet);
if ("JmolApp".equals$O(json.get$O("magic"))) {
switch (C$.getString$java_util_Map$S(json, "role")) {
case "out":
this.outSocket=socket;
if (this.inSocket == null ) this.inSocket=this.outSocket;
this.reply$I$O(2, "OK");
break;
case "in":
this.inSocket=socket;
if (this.outSocket == null ) this.outSocket=this.inSocket;
this.reply$I$O(2, "OK");
break;
}
} else {
switch (C$.getString$java_util_Map$S(json, "type")) {
case "quit":
this.halt=true;
this.reply$I$O(2, "JsonNioService" + this.myName + " closing" );
$I$(1).info$S("JsonNiosService quitting");
$I$(6,"invokeLater$Runnable",[((P$.JsonNioService$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JsonNioService$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
System.exit$I(0);
});
})()
), Clazz.new_(P$.JsonNioService$2.$init$,[this, null]))]);
break;
}
}}this.client.processNioMessage$BA(packet);
} catch (e) {
e.printStackTrace$();
}
});

Clazz.newMeth(C$, 'sendMessage$java_util_Map$S$naga_NIOSocket', function (map, msg, socket) {
if (socket == null  && (socket=this.outSocket) == null   || map == null  && msg == null   ) return;
var out;
try {
if (map != null ) {
out=C$.toJSONBytes$java_util_Map(map);
} else if (msg.indexOf$S("{") == 0) {
if (!msg.endsWith$S("\n")) msg += "\n";
out=p$1.clean$BA.apply(this, [msg.getBytes$S("UTF-8")]);
} else {
map=Clazz.new_($I$(7,1));
map.put$O$O("type", "command");
map.put$O$O("command", msg);
out=C$.toJSONBytes$java_util_Map(map);
}p$1.sendBytes$BA$naga_NIOSocket.apply(this, [out, socket]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'reply$I$O', function (port, data) {
if (port != 2 || this.outSocket == null  ) return;
$I$(6,"invokeLater$Runnable",[((P$.JsonNioService$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "JsonNioService$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var map=Clazz.new_($I$(8,1));
map.put$O$O("type", "reply");
map.put$O$O("reply", this.$finals$.data);
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].sendMessage$java_util_Map$S$naga_NIOSocket.apply(this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'], [map, null, this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].outSocket]);
});
})()
), Clazz.new_(P$.JsonNioService$3.$init$,[this, {data:data}]))]);
});

Clazz.newMeth(C$, 'sendBytes$BA$naga_NIOSocket', function (bytes, socket) {
if (socket == null  && (socket=this.outSocket) == null   || bytes == null  ) return;
$I$(1,"info$S",["JsonNioService sending " + bytes.length + " bytes to port " + socket.getPort$() ]);
if ($I$(1).debugging) $I$(1,"debug$S",[ String.instantialize(bytes)]);
try {
socket.write$BA(bytes);
} catch (e) {
e.printStackTrace$();
}
}, p$1);

Clazz.newMeth(C$, 'clean$BA', function (out) {
var pt=-1;
var n=out.length;
for (var i=n; --i >= 0; ) {
if (out[i] == 10 ) {
if (pt < 0) pt=i;
out[i]=(" ".$c()|0);
}}
if (out[n - 1] > 32 ) {
if (pt >= 0) {
for (var i=pt; ++i < n; ) {
out[i - 1]=out[i];
}
} else {
var buf=Clazz.array(Byte.TYPE, [n + 1]);
System.arraycopy$O$I$O$I$I(out, 0, buf, 0, n);
out=buf;
}}out[n - 1]=("\n".$c()|0);
return out;
}, p$1);

Clazz.newMeth(C$, 'close$', function () {
$I$(1).info$S("JsonNioService" + this.myName + " close" );
try {
this.halt=true;
C$.superclazz.prototype.close$.apply(this, []);
if (this.clientThread != null ) {
this.clientThread.interrupt$();
this.clientThread=null;
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
var json=Clazz.new_($I$(7,1));
json.put$O$O("magic", "JmolApp");
json.put$O$O("role", role);
json.put$O$O("from", this.hashCode$() + this.myName);
this.sendMessage$java_util_Map$S$naga_NIOSocket(json, null, nioSocket);
});

Clazz.newMeth(C$, 'startServerService', function () {
try {
this.serverSocket=this.openServerSocket$I(this.port);
this.serverSocket.listen$naga_ServerSocketObserver(((P$.JsonNioService$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "JsonNioService$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('naga.ServerSocketObserverAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newConnection$naga_NIOSocket', function (nioSocket) {
$I$(1,"info$S",[$I$(2).currentThread$().getName$() + " Received connection: " + nioSocket ]);
nioSocket.setPacketReader$naga_PacketReader(Clazz.new_($I$(3,1)));
nioSocket.setPacketWriter$naga_PacketWriter($I$(4).INSTANCE);
nioSocket.listen$naga_SocketObserver(((P$.JsonNioService$4$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JsonNioService$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('naga.SocketObserverAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

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
), Clazz.new_($I$(9,1),[this, null],P$.JsonNioService$4$1)));
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.JsonNioService$4)));
this.serverSocket.setConnectionAcceptor$naga_ConnectionAcceptor(((P$.JsonNioService$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "JsonNioService$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'naga.ConnectionAcceptor', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'acceptConnection$java_net_InetSocketAddress', function (arg0) {
var isOK=arg0.getAddress$().isLoopbackAddress$();
return isOK;
});
})()
), Clazz.new_(P$.JsonNioService$5.$init$,[this, null])));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
if (this.serverThread != null ) this.serverThread.interrupt$();
this.serverThread=Clazz.new_([Clazz.new_($I$(11,1),[this, null]), "JsonNioServerThread" + this.myName],$I$(2,1).c$$Runnable$S);
this.serverThread.start$();
}, p$1);

Clazz.newMeth(C$, 'toJSONBytes$java_util_Map', function (map) {
var stream=Clazz.new_($I$(12,1));
var writer=Clazz.new_($I$(13,1));
writer.setWhiteSpace$Z(false);
writer.setStream$java_io_OutputStream(stream);
writer.writeObject$O(map);
writer.closeStream$();
return stream.toByteArray$();
}, 1);

Clazz.newMeth(C$, 'toMap$BA', function (packet) {
return Clazz.new_($I$(14,1)).parseMap$S$Z( String.instantialize(packet), false);
}, 1);

Clazz.newMeth(C$, 'getString$java_util_Map$S', function (map, key) {
var val=map.get$O(key);
return (val == null  ? "" : val.toString());
}, 1);

Clazz.newMeth(C$, 'getLong$java_util_Map$S', function (map, key) {
if (!map.containsKey$O(key)) throw Clazz.new_(Clazz.load('Exception').c$$S,["JSON key not found:" + key]);
return Long.parseLong$S(map.get$O(key).toString());
}, 1);

Clazz.newMeth(C$, 'getInt$java_util_Map$S', function (map, key) {
if (!map.containsKey$O(key)) throw Clazz.new_(Clazz.load('Exception').c$$S,["JSON key not found:" + key]);
return Integer.parseInt$S(map.get$O(key).toString());
}, 1);

Clazz.newMeth(C$, 'getDouble$java_util_Map$S', function (map, key) {
if (!map.containsKey$O(key)) throw Clazz.new_(Clazz.load('Exception').c$$S,["JSON key not found:" + key]);
return Double.parseDouble$S(map.get$O(key).toString());
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonNioService, "JsonNioServerThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
try {
while (!this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].halt){
this.b$['naga.NIOService'].selectBlocking$.apply(this.b$['naga.NIOService'], []);
$I$(1,"info$S",[$I$(2).currentThread$().getName$() + " JsonNioServerSocket on " + this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].port ]);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].close$.apply(this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonNioService, "JsonNioClientThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
$I$(1,"info$S",[$I$(2).currentThread$().getName$() + " JsonNioSocket on " + this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].port ]);
try {
while (!this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].halt){
this.b$['naga.NIOService'].selectNonBlocking$.apply(this.b$['naga.NIOService'], []);
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].client.serverCycle$();
$I$(2).sleep$J(50);
}
} catch (e) {
e.printStackTrace$();
}
this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'].close$.apply(this.b$['org.openscience.jmol.app.jsonkiosk.JsonNioService'], []);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-04 08:03:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
