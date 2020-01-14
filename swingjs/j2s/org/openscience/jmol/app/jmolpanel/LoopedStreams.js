(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,'java.io.PipedOutputStream','java.io.ByteArrayOutputStream','java.io.PipedInputStream','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LoopedStreams");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pipedOS=null;
this.keepRunning=false;
this.byteArrayOS=null;
this.pipedIS=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.pipedOS=Clazz.new_($I$(1));
this.keepRunning=true;
this.byteArrayOS=((P$.LoopedStreams$1||
(function(){var C$=Clazz.newClass(P$, "LoopedStreams$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.ByteArrayOutputStream'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
), Clazz.new_($I$(2), [this, null],P$.LoopedStreams$1));
this.pipedIS=((P$.LoopedStreams$2||
(function(){var C$=Clazz.newClass(P$, "LoopedStreams$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.PipedInputStream'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
), Clazz.new_($I$(3), [this, null],P$.LoopedStreams$2));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
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
Clazz.new_($I$(4).c$$Runnable,[((P$.LoopedStreams$3||
(function(){var C$=Clazz.newClass(P$, "LoopedStreams$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
), Clazz.new_(P$.LoopedStreams$3.$init$, [this, null]))]).start$();
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
