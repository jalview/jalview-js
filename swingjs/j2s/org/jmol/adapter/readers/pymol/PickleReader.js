(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.pymol"),p$1={},I$=[[0,'javajs.util.Lst','java.util.Hashtable','org.jmol.util.Logger','javajs.util.AU']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PickleReader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stack=Clazz.new_($I$(1,1));
this.marks=Clazz.new_($I$(1,1));
this.build=Clazz.new_($I$(1,1));
this.memo=Clazz.new_($I$(2,1));
this.ipt=0;
this.aTemp=Clazz.array(Byte.TYPE, [16]);
},1);

C$.$fields$=[['Z',['logging','inMovie','inNames'],'I',['id','markCount','filePt','emptyListPt','lastMark','retrieveCount','ipt'],'S',['thisName'],'O',['vwr','org.jmol.viewer.Viewer','binaryDoc','javajs.api.GenericBinaryDocument','stack','javajs.util.Lst','+marks','+build','memo','java.util.Map','thisSection','java.lang.Object','aTemp','byte[]']]]

Clazz.newMeth(C$, 'c$$javajs_api_GenericBinaryDocument$org_jmol_viewer_Viewer', function (doc, vwr) {
;C$.$init$.apply(this);
this.binaryDoc=doc;
this.vwr=vwr;
this.stack.ensureCapacity$I(1000);
}, 1);

Clazz.newMeth(C$, 'log$S', function (s) {
this.vwr.log$S(s + "\u0000");
}, p$1);

Clazz.newMeth(C$, 'getMap$Z', function (logging) {
this.logging=logging;
var b;
var i;
var mark;
var d;
var o;
var a;
var map;
var l;
this.ipt=0;
var going=true;
while (going){
b=this.binaryDoc.readByte$();
this.ipt++;
switch (b) {
case 125:
p$1.push$O.apply(this, [Clazz.new_($I$(2,1))]);
break;
case 97:
o=p$1.pop.apply(this, []);
(p$1.peek.apply(this, [])).addLast$O(o);
break;
case 101:
l=p$1.getObjects$I.apply(this, [p$1.getMark.apply(this, [])]);
if (this.inNames && this.markCount == 2 ) {
var pt=(this.binaryDoc.getPosition$()|0);
var l2=Clazz.new_($I$(1,1));
l2.addLast$O(Integer.valueOf$I(this.filePt));
l2.addLast$O(Integer.valueOf$I(pt - this.filePt));
l.addLast$O(l2);
}(p$1.peek.apply(this, [])).addAll$java_util_Collection(l);
break;
case 71:
d=this.binaryDoc.readDouble$();
p$1.push$O.apply(this, [Double.valueOf$D(d)]);
break;
case 74:
i=this.binaryDoc.readIntLE$();
p$1.push$O.apply(this, [Integer.valueOf$I(i)]);
break;
case 75:
i=this.binaryDoc.readByte$() & 255;
p$1.push$O.apply(this, [Integer.valueOf$I(i)]);
break;
case 77:
i=(this.binaryDoc.readByte$() & 255 | ((this.binaryDoc.readByte$() & 255) << 8)) & 65535;
p$1.push$O.apply(this, [Integer.valueOf$I(i)]);
break;
case 113:
i=this.binaryDoc.readByte$();
p$1.putMemo$I$Z.apply(this, [i, false]);
break;
case 114:
i=this.binaryDoc.readIntLE$();
p$1.putMemo$I$Z.apply(this, [i, true]);
break;
case 104:
i=this.binaryDoc.readByte$();
o=p$1.getMemo$I.apply(this, [i]);
p$1.push$O.apply(this, [o == null  ? "BINGET" + (++this.id) : o]);
break;
case 106:
i=this.binaryDoc.readIntLE$();
o=p$1.getMemo$I.apply(this, [i]);
p$1.push$O.apply(this, [o == null  ? "LONG_BINGET" + (++this.id) : o]);
break;
case 85:
i=this.binaryDoc.readByte$() & 255;
a=Clazz.array(Byte.TYPE, [i]);
this.binaryDoc.readByteArray$BA$I$I(a, 0, i);
if (this.inNames && this.markCount == 3  && this.lastMark == this.stack.size$() ) {
this.thisName=p$1.bytesToString$O.apply(this, [a]);
this.filePt=this.emptyListPt;
}p$1.push$O.apply(this, [a]);
break;
case 84:
i=this.binaryDoc.readIntLE$();
a=Clazz.array(Byte.TYPE, [i]);
this.binaryDoc.readByteArray$BA$I$I(a, 0, i);
p$1.push$O.apply(this, [a]);
break;
case 88:
i=this.binaryDoc.readIntLE$();
a=Clazz.array(Byte.TYPE, [i]);
this.binaryDoc.readByteArray$BA$I$I(a, 0, i);
p$1.push$O.apply(this, [a]);
break;
case 93:
this.emptyListPt=(this.binaryDoc.getPosition$()|0) - 1;
p$1.push$O.apply(this, [Clazz.new_($I$(1,1))]);
break;
case 99:
l=Clazz.new_($I$(1,1));
l.addLast$O("global");
l.addLast$O(p$1.readStringAsBytes.apply(this, []));
l.addLast$O(p$1.readStringAsBytes.apply(this, []));
p$1.push$O.apply(this, [l]);
break;
case 98:
o=p$1.pop.apply(this, []);
this.build.addLast$O(o);
break;
case 40:
p$1.putMark$I.apply(this, [this.stack.size$()]);
break;
case 78:
p$1.push$O.apply(this, [null]);
break;
case 111:
p$1.push$O.apply(this, [p$1.getObjects$I.apply(this, [p$1.getMark.apply(this, [])])]);
break;
case 115:
o=p$1.pop.apply(this, []);
var s=p$1.bytesToString$O.apply(this, [p$1.pop.apply(this, [])]);
(p$1.peek.apply(this, [])).put$O$O(s, o);
break;
case 117:
mark=p$1.getMark.apply(this, []);
l=p$1.getObjects$I.apply(this, [mark]);
o=p$1.peek.apply(this, []);
if (Clazz.instanceOf(o, "javajs.util.Lst")) {
for (i=0; i < l.size$(); i++) {
var oo=l.get$I(i);
(o).addLast$O(oo);
}
} else {
map=o;
for (i=l.size$(); --i >= 0; ) {
o=l.get$I(i);
var key=p$1.bytesToString$O.apply(this, [l.get$I(--i)]);
map.put$O$O(key, o);
}
}break;
case 46:
going=false;
break;
case 116:
p$1.push$O.apply(this, [p$1.getObjects$I.apply(this, [p$1.getMark.apply(this, [])])]);
break;
case 76:
var val= String.instantialize(p$1.readStringAsBytes.apply(this, []));
if (val != null  && val.endsWith$S("L") ) {
val=val.substring$I$I(0, val.length$() - 1);
}p$1.push$O.apply(this, [Long.valueOf$S(val)]);
break;
case 82:
p$1.pop.apply(this, []);
break;
case 73:
s=p$1.bytesToString$O.apply(this, [p$1.readStringAsBytes.apply(this, [])]);
try {
p$1.push$O.apply(this, [Integer.valueOf$I(Integer.parseInt$S(s))]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var ll=Long.parseLong$S(s);
p$1.push$O.apply(this, [Integer.valueOf$I(((ll & -1)|0))]);
} else {
throw e;
}
}
break;
case 41:
p$1.push$O.apply(this, [Clazz.new_($I$(1,1))]);
break;
default:
(function(a,f){return f.apply(null,a)})(["Pickle reader error: " + b + " " + this.binaryDoc.getPosition$() ],$I$(3).error$S);
}
}
if (logging) p$1.log$S.apply(this, [""]);
(function(a,f){return f.apply(null,a)})(["PyMOL Pickle reader cached " + this.memo.size$() + " tokens; retrieved " + this.retrieveCount ],$I$(3).info$S);
map=this.stack.removeItemAt$I(0);
if (map.size$() == 0) for (i=this.stack.size$(); --i >= 0; ) {
o=this.stack.get$I(i--);
a=this.stack.get$I(i);
map.put$O$O(p$1.bytesToString$O.apply(this, [a]), o);
}
this.memo=null;
return map;
});

Clazz.newMeth(C$, 'bytesToString$O', function (o) {
try {
return ($I$(4).isAB$O(o) ?  String.instantialize(o, "UTF-8") : o.toString());
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
return "";
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'putMemo$I$Z', function (i, doCheck) {
var o=p$1.peek.apply(this, []);
if ($I$(4).isAB$O(o)) o=p$1.bytesToString$O.apply(this, [o]);
if (Clazz.instanceOf(o, "java.lang.String")) {
this.memo.put$O$O(Integer.valueOf$I(i), o);
}}, p$1);

Clazz.newMeth(C$, 'getMemo$I', function (i) {
var o=this.memo.get$O(Integer.valueOf$I(i));
if (o == null ) return o;
this.retrieveCount++;
return o;
}, p$1);

Clazz.newMeth(C$, 'getObjects$I', function (mark) {
var n=this.stack.size$() - mark;
var args=Clazz.new_($I$(1,1));
args.ensureCapacity$I(n);
for (var i=mark; i < this.stack.size$(); ++i) {
var oo=this.stack.get$I(i);
args.addLast$O(oo);
}
for (var i=this.stack.size$(); --i >= mark; ) this.stack.removeItemAt$I(i);

return args;
}, p$1);

Clazz.newMeth(C$, 'readStringAsBytes', function () {
var n=0;
var a=this.aTemp;
while (true){
var b=this.binaryDoc.readByte$();
if (b == 10) break;
if (n >= a.length) a=this.aTemp=$I$(4).arrayCopyByte$BA$I(a, a.length * 2);
a[n++]=b;
}
return $I$(4).arrayCopyByte$BA$I(a, n);
}, p$1);

Clazz.newMeth(C$, 'putMark$I', function (i) {
if (this.logging) p$1.log$S.apply(this, ["\n " + Integer.toHexString$I((this.binaryDoc.getPosition$()|0)) + " [" ]);
this.marks.addLast$O(Integer.valueOf$I(this.lastMark=i));
this.markCount++;
switch (this.markCount) {
case 2:
var o=this.stack.get$I(i - 2);
if ($I$(4).isAB$O(o)) {
this.thisSection=p$1.bytesToString$O.apply(this, [o]);
this.inMovie="movie".equals$O(this.thisSection);
this.inNames="names".equals$O(this.thisSection);
}break;
default:
break;
}
}, p$1);

Clazz.newMeth(C$, 'getMark', function () {
return this.marks.removeItemAt$I(--this.markCount).intValue$();
}, p$1);

Clazz.newMeth(C$, 'push$O', function (o) {
if (this.logging && (Clazz.instanceOf(o, "java.lang.String") || Clazz.instanceOf(o, "java.lang.Double") || Clazz.instanceOf(o, "java.lang.Integer")  ) ) p$1.log$S.apply(this, [(Clazz.instanceOf(o, "java.lang.String") ? "'" + o + "'"  : o) + ", "]);
this.stack.addLast$O(o);
}, p$1);

Clazz.newMeth(C$, 'peek', function () {
return this.stack.get$I(this.stack.size$() - 1);
}, p$1);

Clazz.newMeth(C$, 'pop', function () {
return this.stack.removeItemAt$I(this.stack.size$() - 1);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
