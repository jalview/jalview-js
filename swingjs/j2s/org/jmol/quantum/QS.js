(function(){var P$=Clazz.newPackage("org.jmol.quantum"),I$=[[0,'javajs.util.SB','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "QS");
C$.MAX_TYPE_SUPPORTED=0;
C$.idSpherical=null;
C$.tags=null;
C$.tags2=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.MAX_TYPE_SUPPORTED=6;
C$.idSpherical=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 3, 5, 5, 7, 7, 9, 9, 11, 11]);
C$.tags=Clazz.array(String, -1, ["S", "P", "SP", "5D", "D", "7F", "F", "9G", "G", "11H", "H", "13I", "I"]);
C$.tags2=Clazz.array(String, -1, ["S", "X", "SP", "5D", "XX", "7F", "XXX", "9G", "XXXX", "11H", "XXXXX", "13I", "XXXXXX"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isQuantumBasisSupported$C', function (ch) {
return ("SPLDF".indexOf$I(Character.toUpperCase$C(ch)) >= 0);
}, 1);

Clazz.newMeth(C$, 'getNewDfCoefMap$', function () {
return Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, [1]), Clazz.array(Integer.TYPE, [3]), Clazz.array(Integer.TYPE, [4]), Clazz.array(Integer.TYPE, [5]), Clazz.array(Integer.TYPE, [6]), Clazz.array(Integer.TYPE, [7]), Clazz.array(Integer.TYPE, [10]), Clazz.array(Integer.TYPE, [9]), Clazz.array(Integer.TYPE, [15]), Clazz.array(Integer.TYPE, [11]), Clazz.array(Integer.TYPE, [21]), Clazz.array(Integer.TYPE, [13]), Clazz.array(Integer.TYPE, [28])]);
}, 1);

Clazz.newMeth(C$, 'getItem$I', function (i) {
return (i >= 0 && i < 13  ? i : -1);
}, 1);

Clazz.newMeth(C$, 'getQuantumShellTagID$S', function (tag) {
return (tag.equals$O("L") ? 2 : C$.getQuantumShell$S(tag));
}, 1);

Clazz.newMeth(C$, 'getQuantumShell$S', function (tag) {
for (var i=0; i < 13; i++) if (C$.tags[i].equals$O(tag) || C$.tags2[i].equals$O(tag) ) return i;

return -1;
}, 1);

Clazz.newMeth(C$, 'getQuantumShellTagIDSpherical$S', function (tag) {
if (tag.equals$O("L")) return 2;
var id=C$.getQuantumShell$S(tag);
return (id < 0 ? id : C$.idSpherical[id]);
}, 1);

Clazz.newMeth(C$, 'getQuantumShellTag$I', function (id) {
return (id >= 0 && id < 13  ? C$.tags[id] : "" + id);
}, 1);

Clazz.newMeth(C$, 'getMOString$FA', function (lc) {
var sb=Clazz.new_($I$(1));
if (lc.length == 2) return "" + ((lc[0] < 0  ? -lc[1] : lc[1])|0);
sb.appendC$C("[");
for (var i=0; i < lc.length; i+=2) {
if (i > 0) sb.append$S(", ");
sb.appendF$F(lc[i]).append$S(" ").appendI$I((lc[i + 1]|0));
}
sb.appendC$C("]");
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'createDFMap$IA$S$S$I', function (map, fileList, jmolList, minLength) {
var tokens=$I$(2).getTokens$S(fileList);
var isOK=true;
for (var i=0; i < map.length; i++) {
var key=tokens[i];
if (key.length$() >= minLength) {
var pt=jmolList.indexOf$S(key);
if (pt >= 0) {
pt=(pt/(6)|0);
map[pt]=i - pt;
continue;
}}isOK=false;
break;
}
if (!isOK) map[0]=-2147483648;
return isOK;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
