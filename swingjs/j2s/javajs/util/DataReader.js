(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'java.io.StringReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DataReader", null, 'java.io.BufferedReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ptMark=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_io_Reader.apply(this, [Clazz.new_($I$(1).c$$S,[""])]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader', function ($in) {
C$.superclazz.c$$java_io_Reader.apply(this, [$in]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getBufferedReader$', function () {
return this;
});

Clazz.newMeth(C$, 'readBuf$CA$I$I', function (buf, off, len) {
var nRead=0;
var line=this.readLine$();
if (line == null ) return 0;
var linept=0;
var linelen=line.length$();
for (var i=off; i < len && linelen >= 0 ; i++) {
if (linept >= linelen) {
linept=0;
buf[i]="\n";
line=this.readLine$();
linelen=(line == null  ? -1 : line.length$());
} else {
buf[i]=line.charAt$I(linept++);
}nRead++;
}
return nRead;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
