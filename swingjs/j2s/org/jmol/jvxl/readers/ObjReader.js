(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'javajs.util.P3','java.util.Hashtable','javajs.util.BS','javajs.util.CU','javajs.util.PT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ObjReader", null, 'org.jmol.jvxl.readers.PmeshReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2PR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.type="obj";
this.setHeader$();
});

Clazz.newMeth(C$, 'readVertices$', function () {
this.pmeshError="pmesh ERROR: invalid vertex/face list";
var pt=Clazz.new_($I$(1,1));
var color=0;
var ia;
var ib;
var ic;
var id=0;
var i=0;
var nPts=0;
var htPymol=Clazz.new_($I$(2,1));
var ipt=null;
var spt=null;
var pymolMap=Clazz.array(Integer.TYPE, [3]);
var bsOK=Clazz.new_($I$(3,1));
while (this.rd$() != null ){
if (this.line.length$() < 2 || this.line.charAt$I(1) != " " ) {
if (this.params.readAllData && this.line.startsWith$S("usemtl") ) color=(function(a,f){return f.apply(null,a)})(["[x" + this.line.substring$I(8) + "]" ],$I$(4).getArgbFromString$S);
continue;
}switch ((this.line.charCodeAt$I(0))) {
case 118:
this.next[0]=2;
pt.set$F$F$F($I$(5).parseFloatNext$S$IA(this.line, this.next), $I$(5).parseFloatNext$S$IA(this.line, this.next), $I$(5).parseFloatNext$S$IA(this.line, this.next));
var addHt=false;
if (htPymol == null ) {
i=this.nVertices;
} else if ((ipt=htPymol.get$O(spt="" + pt)) == null ) {
addHt=true;
i=this.nVertices;
} else {
i=ipt.intValue$();
}var j=i;
if (i == this.nVertices) {
if (this.isAnisotropic) this.setVertexAnisotropy$javajs_util_T3(pt);
j=this.addVertexCopy$javajs_util_T3$F$I$Z(pt, 0, this.nVertices++, true);
if (j >= 0) bsOK.set$I(i);
}pymolMap[nPts % 3]=j;
if (addHt) htPymol.put$O$O(spt, Integer.valueOf$I(i));
nPts++;
if (htPymol != null  && nPts > 3 ) htPymol=null;
break;
case 102:
if (nPts == 3 && this.line.indexOf$S("//") < 0 ) htPymol=null;
nPts=0;
this.nPolygons++;
var tokens=$I$(5).getTokens$S(this.line);
var vertexCount=tokens.length - 1;
if (vertexCount == 4) htPymol=null;
if (htPymol == null ) {
ia=$I$(5).parseInt$S(tokens[1]) - 1;
ib=$I$(5).parseInt$S(tokens[2]) - 1;
ic=$I$(5).parseInt$S(tokens[3]) - 1;
this.pmeshError=" " + ia + " " + ib + " " + ic + " " + this.line ;
if (!bsOK.get$I(ia) || !bsOK.get$I(ib) || !bsOK.get$I(ic)  ) continue;
if (vertexCount == 4) {
id=$I$(5).parseInt$S(tokens[4]) - 1;
var isOK=(bsOK.get$I(id));
this.nTriangles=this.addTriangleCheck$I$I$I$I$I$Z$I(ia, ib, ic, (isOK ? 3 : 7), 0, false, color);
if (isOK) this.nTriangles=this.addTriangleCheck$I$I$I$I$I$Z$I(ia, ic, id, 6, 0, false, color);
continue;
}} else {
ia=pymolMap[0];
ib=pymolMap[1];
ic=pymolMap[2];
if (ia < 0 || ib < 0  || ic < 0 ) continue;
}this.nTriangles=this.addTriangleCheck$I$I$I$I$I$Z$I(ia, ib, ic, 7, 0, false, color);
break;
case 103:
htPymol=null;
if (this.params.readAllData) try {
color=(function(a,f){return f.apply(null,a)})([this.line.substring$I(3), 16],$I$(5).parseIntRadix$S$I);
} catch (e) {
color=0;
}
break;
}
}
this.pmeshError=null;
return true;
});

Clazz.newMeth(C$, 'readPolygons$', function () {
return true;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
