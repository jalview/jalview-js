(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'javajs.util.PT','javajs.util.AU','javajs.util.SB','org.jmol.script.SV','javajs.util.BS','javajs.util.P3','javajs.util.P4','javajs.util.M3','javajs.util.M4','javajs.util.Lst','javajs.util.V3','javajs.util.T3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Escape");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'escapeColor$I', function (argb) {
return (argb == 0 ? null : "[x" + C$.getHexColorFromRGB$I(argb) + "]" );
}, 1);

Clazz.newMeth(C$, 'getHexColorFromRGB$I', function (argb) {
if (argb == 0) return null;
var r="00" + Integer.toHexString$I((argb >> 16) & 255);
r=r.substring$I(r.length$() - 2);
var g="00" + Integer.toHexString$I((argb >> 8) & 255);
g=g.substring$I(g.length$() - 2);
var b="00" + Integer.toHexString$I(argb & 255);
b=b.substring$I(b.length$() - 2);
return r + g + b ;
}, 1);

Clazz.newMeth(C$, 'eP$javajs_util_T3', function (xyz) {
if (xyz == null ) return "null";
return "{" + new Float(xyz.x).toString() + " " + new Float(xyz.y).toString() + " " + new Float(xyz.z).toString() + "}" ;
}, 1);

Clazz.newMeth(C$, 'matrixToScript$O', function (m) {
return (function(a,f){return f.apply(null,a)})([m.toString(), "\n\r ", ""],$I$(1).replaceAllCharacters$S$S$S).replace$C$C("\t", " ");
}, 1);

Clazz.newMeth(C$, 'eP4$javajs_util_P4', function (x) {
return "{" + new Float(x.x).toString() + " " + new Float(x.y).toString() + " " + new Float(x.z).toString() + " " + new Float(x.w).toString() + "}" ;
}, 1);

Clazz.newMeth(C$, 'drawQuat$javajs_util_Quat$S$S$javajs_util_P3$F', function (q, prefix, id, ptCenter, scale) {
var strV=" VECTOR " + C$.eP$javajs_util_T3(ptCenter) + " " ;
if (scale == 0 ) scale=1.0;
return "draw " + prefix + "x" + id + strV + C$.eP$javajs_util_T3(q.getVectorScaled$I$F(0, scale)) + " color red\n" + "draw " + prefix + "y" + id + strV + C$.eP$javajs_util_T3(q.getVectorScaled$I$F(1, scale)) + " color green\n" + "draw " + prefix + "z" + id + strV + C$.eP$javajs_util_T3(q.getVectorScaled$I$F(2, scale)) + " color blue\n" ;
}, 1);

Clazz.newMeth(C$, 'e$O', function (x) {
if (x == null ) return "null";
if ($I$(1).isNonStringPrimitive$O(x)) return x.toString();
if (Clazz.instanceOf(x, "java.lang.String")) return $I$(1).esc$S(x);
if (Clazz.instanceOf(x, "javajs.util.Lst")) return C$.eV$javajs_util_Lst(x);
if (Clazz.instanceOf(x, "java.util.Map")) return C$.escapeMap$java_util_Map(x);
if (Clazz.instanceOf(x, "javajs.util.BS")) return C$.eBS$javajs_util_BS(x);
if (Clazz.instanceOf(x, "javajs.util.P4")) return C$.eP4$javajs_util_P4(x);
if (Clazz.instanceOf(x, "javajs.util.T3")) return C$.eP$javajs_util_T3(x);
if ($I$(2).isAP$O(x)) return C$.eAP$javajs_util_T3A(x);
if ($I$(2).isAS$O(x)) return C$.eAS$SA$Z(x, true);
if (Clazz.instanceOf(x, "javajs.util.M34")) return (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([x.toString(), "[\n  ", "["],$I$(1).rep$S$S$S), "] ]", "]]"],$I$(1).rep$S$S$S);
if (Clazz.instanceOf(x, "javajs.util.A4")) {
var a=x;
return "{" + new Float(a.x).toString() + " " + new Float(a.y).toString() + " " + new Float(a.z).toString() + " " + new Float((a.angle * 180.0 / 3.141592653589793)).toString() + "}" ;
}if (Clazz.instanceOf(x, "javajs.util.Quat")) return (x).toString();
var s=$I$(1).nonArrayString$O(x);
return (s == null  ? $I$(1).toJSON$S$O(null, x) : s);
}, 1);

Clazz.newMeth(C$, 'eV$javajs_util_Lst', function (list) {
if (list == null ) return $I$(1).esc$S("");
var s=Clazz.new_($I$(3,1));
s.append$S("[");
for (var i=0; i < list.size$(); i++) {
if (i > 0) s.append$S(", ");
s.append$S(C$.escapeNice$S(list.get$I(i).asString$()));
}
s.append$S("]");
return s.toString();
}, 1);

Clazz.newMeth(C$, 'escapeMap$java_util_Map', function (ht) {
var sb=Clazz.new_($I$(3,1));
sb.append$S("{ ");
var sep="";
for (var entry, $entry = ht.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
sb.append$S(sep).append$S($I$(1).esc$S(key)).appendC$C(":");
var val=entry.getValue$();
if (!(Clazz.instanceOf(val, "org.jmol.script.SV"))) val=$I$(4).getVariable$O(val);
sb.append$S((val).escape$());
sep=",";
}
sb.append$S(" }");
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'escapeFloatA$FA$Z', function (f, asArray) {
if (asArray) return $I$(1).toJSON$S$O(null, f);
var sb=Clazz.new_($I$(3,1));
for (var i=0; i < f.length; i++) {
if (i > 0) sb.appendC$C("\n");
sb.appendF$F(f[i]);
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'escapeFloatAA$FAA$Z', function (f, addSemi) {
var sb=Clazz.new_($I$(3,1));
var eol=(addSemi ? ";\n" : "\n");
for (var i=0; i < f.length; i++) if (f[i] != null ) {
if (i > 0) sb.append$S(eol);
for (var j=0; j < f[i].length; j++) sb.appendF$F(f[i][j]).appendC$C("\t");

}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'escapeFloatAAA$FAAA$Z', function (f, addSemi) {
var sb=Clazz.new_($I$(3,1));
var eol=(addSemi ? ";\n" : "\n");
if (f[0] == null  || f[0][0] == null  ) return "0 0 0" + eol;
sb.appendI$I(f.length).append$S(" ").appendI$I(f[0].length).append$S(" ").appendI$I(f[0][0].length);
for (var i=0; i < f.length; i++) if (f[i] != null ) {
sb.append$S(eol);
for (var j=0; j < f[i].length; j++) if (f[i][j] != null ) {
sb.append$S(eol);
for (var k=0; k < f[i][j].length; k++) sb.appendF$F(f[i][j][k]).appendC$C("\t");

}
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'eAS$SA$Z', function (list, nicely) {
if (list == null ) return $I$(1).esc$S("");
var s=Clazz.new_($I$(3,1));
s.append$S("[");
for (var i=0; i < list.length; i++) {
if (i > 0) s.append$S(", ");
s.append$S(nicely ? C$.escapeNice$S(list[i]) : $I$(1).esc$S(list[i]));
}
s.append$S("]");
return s.toString();
}, 1);

Clazz.newMeth(C$, 'eAI$IA', function (ilist) {
if (ilist == null ) return $I$(1).esc$S("");
var s=Clazz.new_($I$(3,1));
s.append$S("[");
for (var i=0; i < ilist.length; i++) {
if (i > 0) s.append$S(", ");
s.appendI$I(ilist[i]);
}
return s.append$S("]").toString();
}, 1);

Clazz.newMeth(C$, 'eAD$DA', function (dlist) {
if (dlist == null ) return $I$(1).esc$S("");
var s=Clazz.new_($I$(3,1));
s.append$S("[");
for (var i=0; i < dlist.length; i++) {
if (i > 0) s.append$S(", ");
s.appendD$D(dlist[i]);
}
return s.append$S("]").toString();
}, 1);

Clazz.newMeth(C$, 'eAF$FA', function (flist) {
if (flist == null ) return $I$(1).esc$S("");
var s=Clazz.new_($I$(3,1));
s.append$S("[");
for (var i=0; i < flist.length; i++) {
if (i > 0) s.append$S(", ");
s.appendF$F(flist[i]);
}
return s.append$S("]").toString();
}, 1);

Clazz.newMeth(C$, 'eAP$javajs_util_T3A', function (plist) {
if (plist == null ) return $I$(1).esc$S("");
var s=Clazz.new_($I$(3,1));
s.append$S("[");
for (var i=0; i < plist.length; i++) {
if (i > 0) s.append$S(", ");
s.append$S(C$.eP$javajs_util_T3(plist[i]));
}
return s.append$S("]").toString();
}, 1);

Clazz.newMeth(C$, 'escapeNice$S', function (s) {
if (s == null ) return "null";
var f=$I$(1).parseFloatStrict$S(s);
return (Float.isNaN$F(f) ? $I$(1).esc$S(s) : s);
}, 1);

Clazz.newMeth(C$, 'uABsM$S', function (s) {
if (s.charAt$I(0) == "{") return C$.uP$S(s);
if ((C$.isStringArray$S(s) || s.startsWith$S("[{") && s.indexOf$S("[{") == s.lastIndexOf$S("[{")  ) && s.indexOf$I(",") < 0  && s.indexOf$I(".") < 0  && s.indexOf$I("-") < 0 ) return $I$(5).unescape$S(s);
if (s.startsWith$S("[[")) return C$.unescapeMatrix$S(s);
return s;
}, 1);

Clazz.newMeth(C$, 'isStringArray$S', function (s) {
return s.startsWith$S("({") && s.lastIndexOf$S("({") == 0  && s.indexOf$S("})") == s.length$() - 2 ;
}, 1);

Clazz.newMeth(C$, 'uP$S', function (strPoint) {
if (strPoint == null  || strPoint.length$() == 0 ) return strPoint;
var str=strPoint.replace$C$C("\n", " ").trim$();
if (str.charAt$I(0) != "{" || str.charAt$I(str.length$() - 1) != "}" ) return strPoint;
var points=Clazz.array(Float.TYPE, [5]);
var nPoints=0;
str=str.substring$I$I(1, str.length$() - 1);
var next=Clazz.array(Integer.TYPE, [1]);
for (; nPoints < 5; nPoints++) {
points[nPoints]=$I$(1).parseFloatNext$S$IA(str, next);
if (Float.isNaN$F(points[nPoints])) {
if (next[0] >= str.length$() || str.charAt$I(next[0]) != "," ) break;
next[0]++;
nPoints--;
}}
if (nPoints == 3) return $I$(6).new3$F$F$F(points[0], points[1], points[2]);
if (nPoints == 4) return $I$(7).new4$F$F$F$F(points[0], points[1], points[2], points[3]);
return strPoint;
}, 1);

Clazz.newMeth(C$, 'unescapeMatrix$S', function (strMatrix) {
if (strMatrix == null  || strMatrix.length$() == 0 ) return strMatrix;
var str=strMatrix.replace$C$C("\n", " ").trim$();
if (str.lastIndexOf$S("[[") != 0 || str.indexOf$S("]]") != str.length$() - 2 ) return strMatrix;
var points=Clazz.array(Float.TYPE, [16]);
str=str.substring$I$I(2, str.length$() - 2).replace$C$C("[", " ").replace$C$C("]", " ").replace$C$C(",", " ");
var next=Clazz.array(Integer.TYPE, [1]);
var nPoints=0;
for (; nPoints < 16; nPoints++) {
points[nPoints]=$I$(1).parseFloatNext$S$IA(str, next);
if (Float.isNaN$F(points[nPoints])) {
break;
}}
if (!Float.isNaN$F($I$(1).parseFloatNext$S$IA(str, next))) return strMatrix;
if (nPoints == 9) return $I$(8).newA9$FA(points);
if (nPoints == 16) return $I$(9).newA16$FA(points);
return strMatrix;
}, 1);

Clazz.newMeth(C$, 'eBS$javajs_util_BS', function (bs) {
return (function(a,f){return f.apply(null,a)})([bs, "(", ")"],$I$(5).escape$javajs_util_BS$C$C);
}, 1);

Clazz.newMeth(C$, 'eBond$javajs_util_BS', function (bs) {
return $I$(5).escape$javajs_util_BS$C$C(bs, "[", "]");
}, 1);

Clazz.newMeth(C$, 'toReadable$S$O', function (name, info) {
var sb=Clazz.new_($I$(3,1));
var sep="";
if (info == null ) return "null";
if ($I$(1).isNonStringPrimitive$O(info)) return C$.packageReadable$S$S$S(name, null, info.toString());
if (Clazz.instanceOf(info, "java.lang.String")) return C$.packageReadable$S$S$S(name, null, $I$(1).esc$S(info));
if (Clazz.instanceOf(info, "org.jmol.script.SV")) return C$.packageReadable$S$S$S(name, null, (info).escape$());
if ($I$(2).isAS$O(info)) {
sb.append$S("[");
var imax=(info).length;
for (var i=0; i < imax; i++) {
sb.append$S(sep).append$S((function(a,f){return f.apply(null,a)})([(info)[i]],$I$(1).esc$S));
sep=",";
}
sb.append$S("]");
return C$.packageReadableSb$S$S$javajs_util_SB(name, "String[" + imax + "]" , sb);
}if ($I$(2).isAI$O(info)) {
sb.append$S("[");
var imax=(info).length;
for (var i=0; i < imax; i++) {
sb.append$S(sep).appendI$I((info)[i]);
sep=",";
}
sb.append$S("]");
return C$.packageReadableSb$S$S$javajs_util_SB(name, "int[" + imax + "]" , sb);
}if ($I$(2).isAF$O(info)) {
sb.append$S("[");
var imax=(info).length;
for (var i=0; i < imax; i++) {
sb.append$S(sep).appendF$F((info)[i]);
sep=",";
}
sb.append$S("]");
return C$.packageReadableSb$S$S$javajs_util_SB(name, "float[" + imax + "]" , sb);
}if ($I$(2).isAD$O(info)) {
sb.append$S("[");
var imax=(info).length;
for (var i=0; i < imax; i++) {
sb.append$S(sep).appendD$D((info)[i]);
sep=",";
}
sb.append$S("]");
return C$.packageReadableSb$S$S$javajs_util_SB(name, "double[" + imax + "]" , sb);
}if ($I$(2).isAP$O(info)) {
sb.append$S("[");
var imax=(info).length;
for (var i=0; i < imax; i++) {
sb.append$S(sep).append$S(C$.eP$javajs_util_T3((info)[i]));
sep=",";
}
sb.append$S("]");
return C$.packageReadableSb$S$S$javajs_util_SB(name, "point3f[" + imax + "]" , sb);
}if ($I$(2).isASS$O(info)) {
sb.append$S("[");
var imax=(info).length;
for (var i=0; i < imax; i++) {
sb.append$S(sep).append$S(C$.toReadable$S$O(null, (info)[i]));
sep=",\n";
}
sb.append$S("]");
return C$.packageReadableSb$S$S$javajs_util_SB(name, "String[" + imax + "][]" , sb);
}if ($I$(2).isAII$O(info)) {
sb.append$S("[");
var imax=(info).length;
for (var i=0; i < imax; i++) {
sb.append$S(sep).append$S(C$.toReadable$S$O(null, (info)[i]));
sep=",";
}
sb.append$S("]");
return C$.packageReadableSb$S$S$javajs_util_SB(name, "int[" + imax + "][]" , sb);
}if ($I$(2).isAFF$O(info)) {
sb.append$S("[\n");
var imax=(info).length;
for (var i=0; i < imax; i++) {
sb.append$S(sep).append$S(C$.toReadable$S$O(null, (info)[i]));
sep=",\n";
}
sb.append$S("]");
return C$.packageReadableSb$S$S$javajs_util_SB(name, "float[][]", sb);
}if ($I$(2).isADD$O(info)) {
sb.append$S("[\n");
var imax=(info).length;
for (var i=0; i < imax; i++) {
sb.append$S(sep).append$S(C$.toReadable$S$O(null, (info)[i]));
sep=",\n";
}
sb.append$S("]");
return C$.packageReadableSb$S$S$javajs_util_SB(name, "double[][]", sb);
}if (Clazz.instanceOf(info, "javajs.util.Lst")) {
var imax=(info).size$();
for (var i=0; i < imax; i++) {
sb.append$S(C$.toReadable$S$O(name + "[" + (i + 1) + "]" , (info).get$I(i)));
}
return C$.packageReadableSb$S$S$javajs_util_SB(name, "List[" + imax + "]" , sb);
}if (Clazz.instanceOf(info, "javajs.util.M34") || Clazz.instanceOf(info, "javajs.util.T3") || Clazz.instanceOf(info, "javajs.util.P4") || Clazz.instanceOf(info, "javajs.util.A4")  ) {
sb.append$S(C$.e$O(info));
return C$.packageReadableSb$S$S$javajs_util_SB(name, null, sb);
}if (Clazz.instanceOf(info, "java.util.Map")) {
var e=(info).keySet$().iterator$();
while (e.hasNext$()){
var key=e.next$();
sb.append$S(C$.toReadable$S$O((name == null  ? "" : name + ".") + key, (info).get$O(key)));
}
return sb.toString();
}return C$.packageReadable$S$S$S(name, null, $I$(1).toJSON$S$O(null, info));
}, 1);

Clazz.newMeth(C$, 'packageReadableSb$S$S$javajs_util_SB', function (infoName, infoType, sb) {
return C$.packageReadable$S$S$S(infoName, infoType, sb.toString());
}, 1);

Clazz.newMeth(C$, 'packageReadable$S$S$S', function (infoName, infoType, info) {
var s=(infoType == null  ? "" : infoType + "\t");
if (infoName == null ) return s + info;
return "\n" + infoName + "\t" + (infoType == null  ? "" : "*" + infoType + "\t" ) + info ;
}, 1);

Clazz.newMeth(C$, 'escapeModelFileNumber$I', function (iv) {
return "" + ((iv/1000000|0)) + "." + (iv % 1000000) ;
}, 1);

Clazz.newMeth(C$, 'encapsulateData$S$O$I', function (name, data, depth) {
var s;
switch (depth) {
case 1:
s=C$.escapeFloatA$FA$Z(data, false) + ";\n";
break;
case 2:
s=C$.escapeFloatAA$FAA$Z(data, true) + ";\n";
break;
case 3:
s=C$.escapeFloatAAA$FAAA$Z(data, true) + ";\n";
break;
default:
s=data.toString();
break;
}
return "  DATA \"" + name + "\"\n" + s + "    END \"" + name + "\";\n" ;
}, 1);

Clazz.newMeth(C$, 'unescapeUnicode$S', function (s) {
var ichMax=s.length$();
var sb=$I$(3).newN$I(ichMax);
var ich=0;
while (ich < ichMax){
var ch=s.charAt$I(ich++);
if (ch == "\\" && ich < ichMax ) {
ch=s.charAt$I(ich++);
switch (ch.$c()) {
case 117:
if (ich < ichMax) {
var unicode=0;
for (var k=4; --k >= 0 && ich < ichMax ; ) {
var chT=s.charAt$I(ich);
var hexit=C$.getHexitValue$C(chT);
if (hexit < 0) break;
unicode<<=4;
unicode+=hexit;
++ich;
}
ch=String.fromCharCode(unicode);
}}
}sb.appendC$C(ch);
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getHexitValue$C', function (ch) {
if (ch.$c() >= 48  && ch.$c() <= 57  ) return ch.$c() - 48;
 else if (ch.$c() >= 97  && ch.$c() <= 102  ) return 10 + ch.$c() - 97;
 else if (ch.$c() >= 65  && ch.$c() <= 70  ) return 10 + ch.$c() - 65;
 else return -1;
}, 1);

Clazz.newMeth(C$, 'unescapeStringArray$S', function (data) {
if (data == null  || !data.startsWith$S("[")  || !data.endsWith$S("]") ) return null;
var v=Clazz.new_($I$(10,1));
var next=Clazz.array(Integer.TYPE, [1]);
next[0]=1;
while (next[0] < data.length$()){
var s=$I$(1).getQuotedStringNext$S$IA(data, next);
if (s == null ) return null;
v.addLast$O($I$(1).rep$S$S$S(s, "\\\"", "\""));
while (next[0] < data.length$() && data.charAt$I(next[0]) != "\"" )next[0]++;

}
return v.toArray$OA(Clazz.array(String, [v.size$()]));
}, 1);

Clazz.newMeth(C$, 'escapeHelical$S$I$javajs_util_P3$javajs_util_P3$javajs_util_T3A', function (id, tokType, a, b, pts) {
switch (tokType) {
case 134217751:
return (pts == null  ? Clazz.new_($I$(6,1)) : pts[0]);
case 1073741854:
case 1665140738:
return (pts == null  ? Clazz.new_($I$(11,1)) : pts[tokType == 1073741854 ? 1 : 2]);
case 134217729:
return Float.valueOf$F(pts == null  ? NaN : pts[3].x);
case 135176:
return (pts == null  ? "" : "draw ID \"" + id + "\" VECTOR " + C$.eP$javajs_util_T3(pts[0]) + " " + C$.eP$javajs_util_T3(pts[1]) + " color " + (pts[3].x < 0  ? "{255.0 200.0 0.0}" : "{255.0 0.0 128.0}") );
case 1745489939:
return (pts == null  ? "" : "measure " + C$.eP$javajs_util_T3(a) + C$.eP$javajs_util_T3(pts[0]) + C$.eP$javajs_util_T3(pts[4]) ) + C$.eP$javajs_util_T3(b);
default:
return (pts == null  ? Clazz.array($I$(12), [0]) : pts);
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
