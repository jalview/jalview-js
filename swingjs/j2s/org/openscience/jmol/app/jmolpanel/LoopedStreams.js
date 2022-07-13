(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,'java.io.PipedOutputStream','java.io.ByteArrayOutputStream','java.io.PipedInputStream','Thread']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LoopedStreams");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pipedOS=Clazz.new_($I$(1,1));
this.keepRunning=true;
this.byteArrayOS=((P$.LoopedStreams$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LoopedStreams$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.ByteArrayOutputStream'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'close$', function () {
this.b$['org.openscience.jmol.app.jmolpanel.LoopedStreams'].keepRunning=false;
try {
C$.superclazz.prototype.close$.apply(this, []);
this.b$['org.openscience.jmol.app.jmolpanel.LoopedStreams'].pipedOS.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.exit$I(1);
} else {
throw e;
}
}
});
})()
), Clazz.new_($I$(2,1),[this, null],P$.LoopedStreams$1));
this.pipedIS=((P$.LoopedStreams$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LoopedStreams$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.PipedInputStream'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'close$', function () {
this.b$['org.openscience.jmol.app.jmolpanel.LoopedStreams'].keepRunning=false;
try {
C$.superclazz.prototype.close$.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.exit$I(1);
} else {
throw e;
}
}
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.LoopedStreams$2));
},1);

C$.$fields$=[['Z',['keepRunning'],'O',['pipedOS','java.io.PipedOutputStream','byteArrayOS','java.io.ByteArrayOutputStream','pipedIS','java.io.PipedInputStream']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.pipedOS.connect$java_io_PipedInputStream(this.pipedIS);
p$1.startByteArrayReaderThread.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getInputStream$', function () {
return this.pipedIS;
});

Clazz.newMeth(C$, 'getOutputStream$', function () {
return this.byteArrayOS;
});

Clazz.newMeth(C$, 'startByteArrayReaderThread', function () {
Clazz.new_([((P$.LoopedStreams$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LoopedStreams$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
while (this.b$['org.openscience.jmol.app.jmolpanel.LoopedStreams'].keepRunning){
if (this.b$['org.openscience.jmol.app.jmolpanel.LoopedStreams'].byteArrayOS.size$() > 0) {
var buffer=null;
{
buffer=this.b$['org.openscience.jmol.app.jmolpanel.LoopedStreams'].byteArrayOS.toByteArray$();
this.b$['org.openscience.jmol.app.jmolpanel.LoopedStreams'].byteArrayOS.reset$();
}try {
this.b$['org.openscience.jmol.app.jmolpanel.LoopedStreams'].pipedOS.write$BA$I$I(buffer, 0, buffer.length);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.exit$I(1);
} else {
throw e;
}
}
} else {
try {
$I$(4).sleep$J(1000);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}}
});
})()
), Clazz.new_(P$.LoopedStreams$3.$init$,[this, null]))],$I$(4,1).c$$Runnable).start$();
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
