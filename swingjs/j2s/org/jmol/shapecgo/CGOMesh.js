(function(){var P$=Clazz.newPackage("org.jmol.shapecgo"),p$1={},I$=[[0,'javajs.util.Lst','java.util.Hashtable','javajs.util.PT','org.jmol.util.Logger','javajs.util.BS','org.jmol.util.C','javajs.util.CU','org.jmol.util.Normix']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CGOMesh", null, 'org.jmol.shapespecial.DrawMesh');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nList=Clazz.new_($I$(1,1));
this.cList=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['cmds','javajs.util.Lst','+nList','+cList']]
,['O',['sizes','int[]','+sizes2D','keyMap','java.util.Map']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$S$H$I', function (vwr, thisID, colix, index) {
;C$.superclazz.c$$org_jmol_viewer_Viewer$S$H$I.apply(this,[vwr, thisID, colix, index]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSize$I$Z', function (i, is2D) {
switch (i) {
case -103:
return 13;
case -102:
return 15;
case -108:
case -109:
case -110:
return 2;
case -101:
case -100:
case -107:
return 1;
case -105:
case -106:
case -111:
case -104:
return 0;
default:
return (i >= 0 && i < C$.sizes.length  ? (is2D ? C$.sizes2D : C$.sizes)[i] : -1);
}
}, 1);

Clazz.newMeth(C$, 'getKeyMap$', function () {
var keyMap=Clazz.new_($I$(2,1));
var tokens=$I$(3).getTokens$S("BEGIN:2 END:3 STOP:0 POINT:0 POINTS:0 LINES:1 LINE_LOOP:2 LINE_STRIP:3 TRIANGLES:4 TRIANGLE_STRIP:5 TRIANGLE_FAN:6 LINE:1 VERTEX:4 NORMAL:5 COLOR:6 LINEWIDTH:10 SAUSAGE:14 DIAMETER:-100 SCREEN:-101 UVMAP:-102 PS:-103 NEWPATH:-104 CLOSEPATH:-105 STROKE:-106 SETLINEWIDTH:-107 SCALE:-108 MOVETO:-109 LINETO:-110 SHOWPAGE:-111");
for (var i=tokens.length; --i >= 0; ) {
var pt=tokens[i].indexOf$S(":");
keyMap.put$O$O(tokens[i].substring$I$I(0, pt), Integer.valueOf$I(Integer.parseInt$S(tokens[i].substring$I(pt + 1))));
}
return keyMap;
}, 1);

Clazz.newMeth(C$, 'getData$OA', function (d) {
if (C$.keyMap == null ) C$.keyMap=C$.getKeyMap$();
var st=d[0];
var ai=d[1];
var data=d[2];
var vwr=d[3];
var i=ai[0];
var slen=ai[1];
var tok=st[i].tok;
i=(tok == 268435520 ? i + 1 : i + 2);
if (i >= slen) return false;
var s=st[i].value.toString().toUpperCase$();
var type=";PS;BEGIN;SCREEN;UVMAP;".indexOf$S(";" + s + ";" );
i=C$.addItems$I$org_jmol_script_TA$I$javajs_util_Lst$org_jmol_viewer_Viewer(i, st, slen, data, vwr);
if (type == 0) {
if (i + 5 >= slen || st[i + 1].tok != 134221834 ) return false;
if (!C$.parseEPSData$S$javajs_util_Lst(st[i + 3].value.toString(), data)) return false;
i+=5;
}ai[0]=i;
return true;
}, 1);

Clazz.newMeth(C$, 'parseEPSData$S$javajs_util_Lst', function (eps, data) {
var pt=eps.indexOf$S("%%BoundingBox:");
if (pt < 0) return false;
var stack=Clazz.new_($I$(1,1));
var next=Clazz.array(Integer.TYPE, -1, [pt + 14]);
for (var i=0; i < 4; i++) data.addLast$O(Float.valueOf$F($I$(3).parseFloatNext$S$IA(eps, next)));

pt=eps.indexOf$S("%%EndProlog");
if (pt < 0) return false;
next[0]=pt + 11;
var len=eps.length$();
while (true){
var f=$I$(3).parseFloatChecked$S$I$IA$Z(eps, len, next, false);
if (next[0] >= len) break;
if (Float.isNaN$F(f)) {
var s=$I$(3).parseTokenChecked$S$I$IA(eps, len, next);
if (s.startsWith$S("%%")) continue;
if (!C$.addKey$javajs_util_Lst$S(data, s)) return false;
if (stack.size$() > 0) {
for (var k=0, n=stack.size$(); k < n; k++) data.addLast$O(stack.get$I(k));

stack.clear$();
}} else {
stack.addLast$O(Float.valueOf$F(f));
}}
return true;
}, 1);

Clazz.newMeth(C$, 'addItems$I$org_jmol_script_TA$I$javajs_util_Lst$org_jmol_viewer_Viewer', function (i, st, slen, data, vwr) {
var tok;
var t;
for (var j=i; j < slen; j++) {
switch (tok=(t=st[j]).tok) {
case 268435521:
i=j;
j=slen;
continue;
case 2:
data.addLast$O(Float.valueOf$F(t.intValue));
break;
case 3:
data.addLast$O(t.value);
break;
case 8:
case 10:
var pt=(tok == 8 ? t.value : vwr.ms.getAtomSetCenter$javajs_util_BS(t.value));
data.addLast$O(Float.valueOf$F(pt.x));
data.addLast$O(Float.valueOf$F(pt.y));
data.addLast$O(Float.valueOf$F(pt.z));
break;
default:
if (!C$.addKey$javajs_util_Lst$S(data, st[j].value.toString())) {
$I$(4).error$S("CGO unknown: " + st[j].value);
i=j=slen;
break;
}break;
}
}
return i;
}, 1);

Clazz.newMeth(C$, 'addKey$javajs_util_Lst$S', function (data, key) {
key=key.toUpperCase$();
var ii=C$.keyMap.get$O(key.toUpperCase$());
if (ii == null ) return false;
data.addLast$O(ii);
return true;
}, 1);

Clazz.newMeth(C$, 'clear$S', function (meshType) {
C$.superclazz.prototype.clear$S.apply(this, [meshType]);
this.useColix=false;
});

Clazz.newMeth(C$, 'set$javajs_util_Lst', function (list) {
this.width=200;
this.diameter=0;
this.useColix=true;
this.bsTemp=Clazz.new_($I$(5,1));
try {
if (Clazz.instanceOf(list.get$I(0), "java.lang.Number")) {
this.cmds=list;
} else {
this.cmds=list.get$I(1);
if (this.cmds == null ) this.cmds=list.get$I(0);
this.cmds=this.cmds.get$I(1);
}var n=this.cmds.size$();
var is2D=false;
for (var i=0; i < n; i++) {
var type=(this.cmds.get$I(i)).intValue$();
var len=C$.getSize$I$Z(type, is2D);
if (len < 0) {
$I$(4).error$S("CGO unknown type: " + type);
return false;
}switch (type) {
case -101:
case -102:
is2D=true;
break;
case 1:
break;
case 0:
return true;
case 5:
p$1.addNormix$I.apply(this, [i + 1]);
break;
case 6:
p$1.addColix$I.apply(this, [i + 1]);
this.useColix=false;
break;
case 14:
p$1.addColix$I.apply(this, [i + 8]);
p$1.addColix$I.apply(this, [i + 11]);
break;
case 8:
p$1.addNormix$I.apply(this, [i + 10]);
p$1.addNormix$I.apply(this, [i + 13]);
p$1.addNormix$I.apply(this, [i + 16]);
p$1.addColix$I.apply(this, [i + 19]);
p$1.addColix$I.apply(this, [i + 22]);
p$1.addColix$I.apply(this, [i + 25]);
break;
}
i+=len;
}
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(4).error$S("CGOMesh error: " + e);
this.cmds=null;
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'addColix$I', function (i) {
this.getPoint$I$javajs_util_T3(i, this.vTemp);
this.cList.addLast$O(Short.valueOf$H((function(a,f){return f.apply(null,a)})([$I$(7).colorPtToFFRGB$javajs_util_T3(this.vTemp)],$I$(6).getColix$I)));
}, p$1);

Clazz.newMeth(C$, 'addNormix$I', function (i) {
this.getPoint$I$javajs_util_T3(i, this.vTemp);
this.nList.addLast$O(Short.valueOf$H($I$(8).get2SidedNormix$javajs_util_V3$javajs_util_BS(this.vTemp, this.bsTemp)));
}, p$1);

Clazz.newMeth(C$, 'getPoint$I$javajs_util_T3', function (i, pt) {
pt.set$F$F$F(this.getFloat$I(i++), this.getFloat$I(i++), this.getFloat$I(i));
});

Clazz.newMeth(C$, 'getInt$I', function (i) {
return (this.cmds.get$I(i)).intValue$();
});

Clazz.newMeth(C$, 'getFloat$I', function (i) {
return (this.cmds.get$I(i)).floatValue$();
});

C$.$static$=function(){C$.$static$=0;
C$.sizes=Clazz.array(Integer.TYPE, -1, [0, 8, 1, 0, 3, 3, 3, 4, 27, 13, 1, 1, 1, 1, 13, 15, 1, 35, 13, 3, 2, 3, 9, 1, 2, 1, 14, 16, 1, 2]);
C$.sizes2D=Clazz.array(Integer.TYPE, -1, [0, 6, 1, 0, 2, 3, 3, 4, 24, 13, 1, 1, 1, 1, 11, 15, 1, 35, 13, 3, 2, 3, 9, 1, 2, 1, 14, 16, 1, 2]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
