(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'java.io.StringReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataReader", null, 'java.io.BufferedReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['ptMark']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_io_Reader.apply(this,[Clazz.new_($I$(1,1).c$$S,[""])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader',  function ($in) {
;C$.superclazz.c$$java_io_Reader.apply(this,[$in]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getBufferedReader$',  function () {
return this;
});

Clazz.newMeth(C$, 'readBuf$CA$I$I',  function (buf, off, len) {
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
}++nRead;
}
return nRead;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:25 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
