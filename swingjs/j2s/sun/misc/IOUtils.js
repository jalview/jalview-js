(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IOUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'readFully$java_io_InputStream$I$Z', function (is, length, readAll) {
var output=Clazz.array(Byte.TYPE, -1, []);
if (length == -1) length=2147483647;
var pos=0;
while (pos < length){
var bytesToRead;
if (pos >= output.length) {
bytesToRead=Math.min(length - pos, output.length + 1024);
if (output.length < pos + bytesToRead) {
output=$I$(1).copyOf$BA$I(output, pos + bytesToRead);
}} else {
bytesToRead=output.length - pos;
}var cc=is.read$BA$I$I(output, pos, bytesToRead);
if (cc < 0) {
if (readAll && length != 2147483647 ) {
throw Clazz.new_(Clazz.load('java.io.EOFException').c$$S,["Detect premature EOF"]);
} else {
if (output.length != pos) {
output=$I$(1).copyOf$BA$I(output, pos);
}break;
}}pos+=cc;
}
return output;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
