(function(){var P$=Clazz.newPackage("org.jmol.scriptext"),p$1={},I$=[[0,'Boolean','org.jmol.script.T','javajs.util.P3','javajs.util.Lst','javajs.util.AU','org.jmol.api.Interface','org.jmol.script.SV','org.jmol.util.Escape','javajs.util.Quat','org.jmol.viewer.JC','org.jmol.adapter.readers.quantum.GenNBOReader','org.jmol.util.Logger','javajs.util.BS','javajs.util.SB','javajs.util.M4','org.jmol.util.BSUtil','javajs.util.PT','org.jmol.util.Parser','org.jmol.util.C','javajs.util.V3','org.jmol.script.ScriptInterruption','org.jmol.atomdata.RadiusData',['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.c.VDW','org.jmol.util.TempArray','org.jmol.util.BoxInfo','org.jmol.script.ScriptEval','org.jmol.util.Triangulator']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IsoExt", null, 'org.jmol.scriptext.ScriptExt');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'dispatch$I$Z$org_jmol_script_TA', function (iTok, b, st) {
this.chk=this.e.chk;
this.slen=this.e.slen;
this.st=st;
switch (iTok) {
case 23:
p$1.cgo.apply(this, []);
break;
case 25:
p$1.contact.apply(this, []);
break;
case 17:
p$1.dipole.apply(this, []);
break;
case 22:
p$1.draw.apply(this, []);
break;
case 24:
case 30:
case 29:
p$1.isosurface$I.apply(this, [iTok]);
break;
case 26:
p$1.lcaoCartoon.apply(this, []);
break;
case 27:
case 28:
p$1.mo$Z$I.apply(this, [b, iTok]);
break;
}
return null;
});

Clazz.newMeth(C$, 'dipole', function () {
var eval=this.e;
var propertyName=null;
var propertyValue=null;
var iHaveAtoms=false;
var iHaveCoord=false;
var idSeen=false;
var getCharges=false;
var bsSelected=null;
eval.sm.loadShape$I(17);
if (this.tokAt$I(1) == 1073742001 && p$1.listIsosurface$I.apply(this, [17]) ) return;
this.setShapeProperty$I$S$O(17, "init", null);
if (this.slen == 1) {
this.setShapeProperty$I$S$O(17, "thisID", null);
return;
}for (var i=1; i < this.slen; ++i) {
propertyName=null;
propertyValue=null;
switch (this.getToken$I(i).tok) {
case 1073742327:
propertyName="all";
getCharges=true;
break;
case 1073742335:
propertyName="on";
break;
case 1073742334:
propertyName="off";
break;
case 12291:
propertyName="delete";
break;
case 2:
case 3:
propertyName="value";
propertyValue=Float.valueOf$F(this.floatParameter$I(i));
break;
case 10:
if (this.tokAt$I(i + 1) == 10) {
this.setShapeProperty$I$S$O(17, "startSet", this.atomExpressionAt$I(i++));
} else {
propertyName="atomBitset";
}case 1073742325:
if (propertyName == null ) propertyName=(iHaveAtoms || iHaveCoord  ? "endSet" : "startSet");
propertyValue=bsSelected=this.atomExpressionAt$I(i);
i=eval.iToken;
if (this.tokAt$I(i + 1) == 0 && propertyName == "startSet" ) propertyName="atomBitset";
iHaveAtoms=true;
getCharges=true;
break;
case 1073742332:
case 8:
var pt=this.getPoint3f$I$Z(i, true);
i=eval.iToken;
propertyName=(iHaveAtoms || iHaveCoord  ? "endCoord" : "startCoord");
propertyValue=pt;
iHaveCoord=true;
break;
case 1677721602:
propertyName="bonds";
getCharges=true;
break;
case 4102:
getCharges=true;
propertyName="calculate";
if (eval.isAtomExpression$I(i + 1)) {
propertyValue=bsSelected=this.atomExpressionAt$I(++i);
i=eval.iToken;
}break;
case 1073741974:
this.setShapeId$I$I$Z(17, ++i, idSeen);
i=eval.iToken;
break;
case 1275069442:
propertyName="cross";
propertyValue=$I$(1).TRUE;
break;
case 1073742040:
propertyName="cross";
propertyValue=$I$(1).FALSE;
break;
case 1073742066:
if (this.isFloatParameter$I(i + 1)) {
var v=this.floatParameter$I(++i);
if (eval.theTok == 2) {
propertyName="offsetPercent";
propertyValue=Integer.valueOf$I((v|0));
} else {
propertyName="offset";
propertyValue=Float.valueOf$F(v);
}} else {
propertyName="offsetPt";
propertyValue=this.centerParameter$I(++i);
i=eval.iToken;
}break;
case 1073742068:
propertyName="offsetSide";
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
break;
case 1073742188:
propertyName="value";
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
break;
case 1073742196:
propertyName="width";
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
break;
default:
if (eval.theTok == 268435633 || $I$(2).tokAttr$I$I(eval.theTok, 1073741824) ) {
this.setShapeId$I$I$Z(17, i, idSeen);
i=eval.iToken;
break;
}this.invArg$();
}
idSeen=(eval.theTok != 12291 && eval.theTok != 4102 );
if (getCharges) {
if (!this.chk) eval.getPartialCharges$javajs_util_BS(bsSelected);
getCharges=false;
}if (propertyName != null ) this.setShapeProperty$I$S$O(17, propertyName, propertyValue);
}
if (iHaveCoord || iHaveAtoms ) this.setShapeProperty$I$S$O(17, "set", null);
}, p$1);

Clazz.newMeth(C$, 'draw', function () {
var eval=this.e;
eval.sm.loadShape$I(22);
switch (this.tokAt$I(1)) {
case 1073742001:
if (p$1.listIsosurface$I.apply(this, [22])) return;
break;
case 136314895:
case 134221850:
case 4138:
this.e.getCmdExt$().dispatch$I$Z$org_jmol_script_TA(4133, false, this.st);
return;
}
var havePoints=false;
var isInitialized=false;
var isSavedState=false;
var isIntersect=false;
var isFrame=false;
var plane;
var tokIntersect=0;
var translucentLevel=3.4028235E38;
var colorArgb=Clazz.array(Integer.TYPE, -1, [-2147483648]);
var intScale=0;
var swidth="";
var iptDisplayProperty=0;
var center=null;
var thisId=p$1.initIsosurface$I.apply(this, [22]);
var idSeen=(thisId != null );
var isWild=(idSeen && this.getShapeProperty$I$S(22, "ID") == null  );
var connections=null;
var iConnect=0;
var iArray=-1;
var uc=null;
for (var i=eval.iToken; i < this.slen; ++i) {
var propertyName=null;
var propertyValue=null;
var tok=this.getToken$I(i).tok;
switch (tok) {
case 134217762:
var pts=(eval.isArrayParameter$I(++i) ? eval.getPointArray$I$I$Z(i, -1, false) : null);
if (pts != null ) {
i=eval.iToken + 1;
if (this.tokAt$I(i) == 12289) {
center=eval.centerParameter$I$OA(++i, null);
i=eval.iToken + 1;
}}var type;
switch (this.tokAt$I(i)) {
case 1073742138:
type="";
break;
case 1111490563:
type="Cs";
break;
case 1073742330:
var data=Clazz.array(java.lang.Object, -1, [eval.objectNameParameter$I(++i), null]);
if (this.chk) return;
this.vwr.shm.getShapePropertyData$I$S$OA(21, "points", data);
pts=data[1];
if (pts == null ) this.invArg$();
type="";
break;
case 1275203608:
type=":poly";
break;
case 134217764:
if (center == null ) center=Clazz.new_($I$(3,1));
var crpts=this.vwr.ms.generateCrystalClass$I$javajs_util_P3(this.vwr.bsA$().nextSetBit$I(0), $I$(3).new3$F$F$F(NaN, NaN, NaN));
if (pts != null ) this.invArg$();
pts=Clazz.array($I$(3), [crpts.size$()]);
for (var j=crpts.size$(); --j >= 0; ) pts[j]=crpts.get$I(j);

i++;
type="";
break;
default:
type=eval.optParameterAsString$I(i);
break;
}
var scale=1;
var index=0;
if (type.length$() > 0) {
++i;
if (this.isFloatParameter$I(i + 1)) index=this.intParameter$I(i++);
}if (this.tokAt$I(i) == 1073742138) scale=this.floatParameter$I(++i);
if (!this.chk) eval.runScript$S(this.vwr.ms.getPointGroupAsString$javajs_util_BS$S$I$F$javajs_util_P3A$javajs_util_P3$S(this.vwr.bsA$(), type, index, scale, pts, center, thisId == null  ? "" : thisId));
return;
case 1814695966:
case 1678381065:
if (this.chk) break;
if (tok == 1678381065 && this.tokAt$I(i + 1) == 1073741864 ) {
tok=1814695966;
}if (tok == 1814695966) {
if (eval.isArrayParameter$I(i + 1)) {
var oabc=eval.getPointArray$I$I$Z(i + 1, -1, false);
uc=this.vwr.getSymTemp$().getUnitCell$javajs_util_T3A$Z$S(oabc, false, null);
i=eval.iToken;
} else if (this.tokAt$I(i + 1) == 1073741864) {
i++;
uc=this.vwr.getSymTemp$().getUnitCell$javajs_util_T3A$Z$S(this.vwr.getOrientationText$I$S$javajs_util_BS(1814695966, "array", null), false, null);
} else {
uc=this.vwr.getCurrentUnitCell$();
}if (uc == null ) this.invArg$();
}var vp=p$1.getPlaneIntersection$I$javajs_util_P4$org_jmol_api_SymmetryInterface$F$I.apply(this, [tok, null, uc, intScale / 100.0, 0]);
intScale=0;
propertyName="polygon";
propertyValue=vp;
havePoints=true;
break;
case 4106:
connections=Clazz.array(Integer.TYPE, [4]);
iConnect=4;
var farray=eval.floatParameterSet$I$I$I(++i, 4, 4);
i=eval.iToken;
for (var j=0; j < 4; j++) connections[j]=(farray[j]|0);

havePoints=true;
break;
case 1677721602:
case 1140850689:
if (connections == null  || iConnect > (eval.theTok == 1228931587 ? 2 : 3) ) {
iConnect=0;
connections=Clazz.array(Integer.TYPE, -1, [-1, -1, -1, -1]);
}connections[iConnect++]=this.atomExpressionAt$I(++i).nextSetBit$I(0);
i=eval.iToken;
connections[iConnect++]=(eval.theTok == 1677721602 ? this.atomExpressionAt$I(++i).nextSetBit$I(0) : -1);
i=eval.iToken;
havePoints=true;
break;
case 554176565:
switch (this.getToken$I(++i).tok) {
case 1073742330:
propertyName="slab";
propertyValue=eval.objectNameParameter$I(++i);
i=eval.iToken;
havePoints=true;
break;
default:
this.invArg$();
}
break;
case 134217763:
switch (this.getToken$I(i + 1).tok) {
case 1814695966:
case 1678381065:
tokIntersect=eval.theTok;
isIntersect=true;
continue;
case 1073742330:
propertyName="intersect";
propertyValue=eval.objectNameParameter$I(++i);
i=eval.iToken;
isIntersect=true;
havePoints=true;
break;
default:
this.invArg$();
}
break;
case 1275203608:
case 134217751:
case 1073742106:
tok=eval.theTok;
var isPoints=(tok == 134217751);
propertyName="polygon";
havePoints=true;
var v=Clazz.new_($I$(4,1));
var nVertices=0;
var nTriangles=0;
var points=null;
var vpolygons=null;
var polygons=null;
if (eval.isArrayParameter$I(++i)) {
points=eval.getPointArray$I$I$Z(i, -1, true);
if (points.length > 0 && points[0] == null  ) {
var faces;
if (tok == 1275203608) {
faces=this.getIntArray2$I(i);
} else {
faces=$I$(5).newInt2$I(1);
faces[0]=eval.expandFloatArray$FA$I(eval.floatParameterSet$I$I$I(i, -1, 2147483647), -1);
}points=this.getAllPoints$I(this.e.iToken + 1);
try {
polygons=($I$(6).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.util.MeshCapper", this.vwr, "script")).set$org_jmol_util_MeshSlicer(null).triangulateFaces$IAA$javajs_util_P3A$IAA(faces, points, null);
} catch (e) {
this.invArg$();
}
}nVertices=points.length;
}if (tok == 1275203608) {
nVertices=points.length;
}if (points == null ) {
nVertices=Math.max(0, this.intParameter$I(i));
points=Clazz.array($I$(3), [nVertices]);
for (var j=0; j < nVertices; j++) points[j]=this.centerParameter$I(++eval.iToken);

}i=eval.iToken;
switch (this.tokAt$I(i + 1)) {
case 11:
case 12:
vpolygons=(function(a,f){return f.apply(null,a)})([this.getToken$I(++i)],$I$(7).newT$org_jmol_script_T).toArray$().getList$();
nTriangles=vpolygons.size$();
break;
case 7:
vpolygons=(this.getToken$I(++i)).getList$();
nTriangles=vpolygons.size$();
break;
case 2:
nTriangles=this.intParameter$I(++i);
if (nTriangles < 0) isPoints=true;
break;
default:
if (polygons == null  && !isPoints  && !this.chk ) polygons=($I$(6).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.util.MeshCapper", this.vwr, "script")).set$org_jmol_util_MeshSlicer(null).triangulatePolygon$javajs_util_P3A$I(points, -1);
}
if (polygons == null  && !isPoints ) {
polygons=$I$(5).newInt2$I(nTriangles);
for (var j=0; j < nTriangles; j++) {
var f=(vpolygons == null  ? eval.floatParameterSet$I$I$I(++eval.iToken, 3, 4) : (function(a,f){return f.apply(null,a)})([vpolygons.get$I(j), 0],$I$(7).flistValue$org_jmol_script_T$I));
if (f.length < 3 || f.length > 4 ) this.invArg$();
polygons[j]=Clazz.array(Integer.TYPE, -1, [(f[0]|0), (f[1]|0), (f[2]|0), (f.length == 3 ? 7 : (f[3]|0))]);
}
}if (nVertices > 0) {
v.addLast$O(points);
v.addLast$O(polygons);
} else {
v=null;
}propertyValue=v;
i=eval.iToken;
break;
case 134217764:
case 1296041986:
var xyz=null;
var iSym=2147483647;
plane=null;
var target=null;
var bsAtoms=null;
var options=0;
if (tok == 1296041986) {
iSym=0;
switch (this.tokAt$I(++i)) {
case 4:
xyz=this.stringParameter$I(i);
break;
case 12:
xyz=(function(a,f){return f.apply(null,a)})([this.getToken$I(i)],$I$(7).sValue$org_jmol_script_T);
break;
case 2:
default:
if (!eval.isCenterParameter$I(i)) iSym=this.intParameter$I(i++);
var ret=Clazz.array(java.lang.Object, -1, [null, this.vwr.getFrameAtoms$()]);
if (eval.isCenterParameter$I(i)) center=eval.centerParameter$I$OA(i, ret);
if (eval.isCenterParameter$I(eval.iToken + 1)) target=eval.centerParameter$I$OA(++eval.iToken, ret);
if (this.chk) return;
i=eval.iToken;
}
}if (center == null  && i + 1 < this.slen ) {
center=this.centerParameter$I(++i);
bsAtoms=(eval.isAtomExpression$I(i) ? this.atomExpressionAt$I(i) : null);
i=eval.iToken;
}var nth=(target != null  && this.tokAt$I(i + 1) == 2  ? eval.getToken$I(++i).intValue : -1);
if (this.tokAt$I(i + 1) == 1814695966) {
target=Clazz.new_($I$(3,1));
options=1073742066;
i++;
eval.iToken=i;
} else if (this.tokAt$I(i + 1) == 1073742066) {
i++;
target=this.getPoint3f$I$Z(i + 1, false);
options=1073742066;
i=eval.iToken;
}eval.checkLast$I(eval.iToken);
if (!this.chk) {
var s="";
if (bsAtoms == null  && this.vwr.am.cmi >= 0 ) bsAtoms=this.vwr.getModelUndeletedAtomsBitSet$I(this.vwr.am.cmi);
if (bsAtoms != null ) {
s=null;
var iatom=bsAtoms.nextSetBit$I(0);
if (options != 0) {
var o=this.vwr.getSymmetryInfo$I$S$I$javajs_util_P3$javajs_util_P3$I$S$F$I$I(iatom, xyz, iSym, center, target, 134217751, null, intScale / 100.0, nth, options);
if (Clazz.instanceOf(o, "javajs.util.P3")) target=o;
 else s="";
}if (thisId == null ) thisId="sym";
if (s == null ) s=this.vwr.getSymmetryInfo$I$S$I$javajs_util_P3$javajs_util_P3$I$S$F$I$I(iatom, xyz, iSym, center, target, 135176, thisId, intScale / 100.0, nth, options);
}eval.runBufferedSafely$S$javajs_util_SB(s.length$() > 0 ? s : "draw ID \"" + thisId + "_*\" delete" , eval.outputBuffer);
}return;
case 4115:
isFrame=true;
continue;
case 1073742332:
case 9:
case 8:
if (eval.theTok == 9 || !eval.isPoint3f$I(i) ) {
propertyValue=eval.getPoint4f$I(i);
if (isFrame) {
eval.checkLast$I(eval.iToken);
if (!this.chk) eval.runScript$S((function(a,f){return f.apply(null,a)})([$I$(9).newP4$javajs_util_P4(propertyValue), (thisId == null  ? "frame" : thisId), " " + swidth, (center == null  ? Clazz.new_($I$(3,1)) : center), intScale / 100.0],$I$(8).drawQuat$javajs_util_Quat$S$S$javajs_util_P3$F));
return;
}propertyName="planedef";
} else {
propertyValue=center=this.getPoint3f$I$Z(i, true);
propertyName="coord";
}i=eval.iToken;
havePoints=true;
break;
case 134219265:
case 134217750:
if (!havePoints && !isIntersect && tokIntersect == 0  ) {
if (eval.theTok == 134219265) {
havePoints=true;
this.setShapeProperty$I$S$O(22, "plane", null);
plane=eval.hklParameter$I(++i);
i=eval.iToken;
propertyName="coords";
var list=Clazz.new_($I$(4,1));
list.addLast$O($I$(3).newP$javajs_util_T3(eval.pt1));
list.addLast$O($I$(3).newP$javajs_util_T3(eval.pt2));
list.addLast$O($I$(3).newP$javajs_util_T3(eval.pt3));
propertyValue=list;
} else {
propertyName="plane";
iArray=i + 1;
}break;
}if (eval.theTok == 134217750) {
plane=eval.planeParameter$I(i);
} else {
plane=eval.hklParameter$I(++i);
}i=eval.iToken;
if (tokIntersect != 0) {
if (this.chk) break;
var vpc=p$1.getPlaneIntersection$I$javajs_util_P4$org_jmol_api_SymmetryInterface$F$I.apply(this, [tokIntersect, plane, uc, intScale / 100.0, 0]);
intScale=0;
propertyName="polygon";
propertyValue=vpc;
} else {
propertyValue=plane;
propertyName="planedef";
}havePoints=true;
break;
case 1073742000:
propertyName="lineData";
propertyValue=eval.floatParameterSet$I$I$I(++i, 0, 2147483647);
i=eval.iToken;
havePoints=true;
break;
case 12290:
case 10:
case 1073742325:
propertyName="atomSet";
propertyValue=this.atomExpressionAt$I(i);
if (isFrame) center=this.centerParameter$I(i);
i=eval.iToken;
havePoints=true;
break;
case 7:
havePoints=true;
propertyName=(iArray == i ? "coords" : "modelBasedPoints");
propertyValue=eval.theToken.value;
break;
case 1073742195:
case 268435504:
break;
case 268435520:
propertyValue=eval.xypParameter$I(i);
if (propertyValue != null ) {
i=eval.iToken;
propertyName="coord";
havePoints=true;
break;
}if (isSavedState) this.invArg$();
isSavedState=true;
break;
case 268435521:
if (!isSavedState) this.invArg$();
isSavedState=false;
break;
case 1140850693:
propertyName="reverse";
break;
case 4:
propertyValue=this.stringParameter$I(i);
propertyName="title";
break;
case 135198:
propertyName="vector";
break;
case 1140850691:
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
propertyName="length";
break;
case 3:
propertyValue=Float.valueOf$F(this.floatParameter$I(i));
propertyName="length";
break;
case 1094713359:
propertyName="modelIndex";
propertyValue=Integer.valueOf$I(this.intParameter$I(++i));
break;
case 2:
if (isSavedState) {
propertyName="modelIndex";
propertyValue=Integer.valueOf$I(this.intParameter$I(i));
} else {
intScale=this.intParameter$I(i);
}break;
case 1073742138:
intScale=Math.round(this.floatParameter$I(++i) * (this.getToken$I(i).tok == 2 ? 1 : 100));
continue;
case 1073741974:
thisId=this.setShapeId$I$I$Z(22, ++i, idSeen);
isWild=(this.getShapeProperty$I$S(22, "ID") == null );
i=eval.iToken;
break;
case 1073742027:
propertyName="fixed";
propertyValue=$I$(1).FALSE;
break;
case 12293:
propertyName="fixed";
propertyValue=$I$(1).TRUE;
break;
case 1073742066:
var pt=this.getPoint3f$I$Z(++i, true);
i=eval.iToken;
propertyName="offset";
propertyValue=pt;
break;
case 1073741906:
propertyName="crossed";
break;
case 1073742196:
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
propertyName="width";
swidth=propertyName + " " + propertyValue ;
break;
case 1073741998:
propertyName="line";
propertyValue=$I$(1).TRUE;
iArray=i + 1;
break;
case 1073741908:
propertyName="curve";
iArray=i + 1;
break;
case 1073741840:
propertyName="arc";
iArray=i + 1;
break;
case 1073741846:
propertyName="arrow";
iArray=i + 1;
break;
case 1073742194:
propertyName="vertices";
iArray=i + 1;
break;
case 1073741880:
propertyName="circle";
break;
case 1073741912:
propertyName="cylinder";
break;
case 1073742048:
propertyName="nohead";
break;
case 1073741860:
propertyName="isbarb";
break;
case 1073742130:
propertyName="rotate45";
break;
case 1073742092:
propertyName="perp";
break;
case 1665140738:
case 1073741917:
var isRadius=(eval.theTok == 1665140738);
var f=this.floatParameter$I(++i);
if (isRadius) f *= 2;
propertyValue=Float.valueOf$F(f);
propertyName=(isRadius || this.tokAt$I(i) == 3  ? "width" : "diameter");
swidth=propertyName + (this.tokAt$I(i) == 3 ? " " + new Float(f).toString() : " " + ((f|0)));
break;
case 1073742330:
if ((this.tokAt$I(i + 2) == 268435520 || isFrame )) {
var pto=center=this.centerParameter$I(i);
i=eval.iToken;
propertyName="coord";
propertyValue=pto;
havePoints=true;
break;
}propertyValue=eval.objectNameParameter$I(++i);
propertyName="identifier";
havePoints=true;
break;
case 1765808134:
case 603979967:
case 1073742074:
idSeen=true;
translucentLevel=this.getColorTrans$org_jmol_script_ScriptEval$I$Z$IA(eval, i, false, colorArgb);
i=eval.iToken;
continue;
default:
if (!eval.setMeshDisplayProperty$I$I$I(22, 0, eval.theTok)) {
if (eval.theTok == 268435633 || $I$(2).tokAttr$I$I(eval.theTok, 1073741824) ) {
thisId=this.setShapeId$I$I$Z(22, i, idSeen);
i=eval.iToken;
break;
}this.invArg$();
}if (iptDisplayProperty == 0) iptDisplayProperty=i;
i=eval.iToken;
continue;
}
idSeen=(eval.theTok != 12291);
if (havePoints && !isInitialized && !isFrame  ) {
this.setShapeProperty$I$S$O(22, "points", Integer.valueOf$I(intScale));
isInitialized=true;
intScale=0;
}if (havePoints && isWild ) this.invArg$();
if (propertyName != null ) this.setShapeProperty$I$S$O(22, propertyName, propertyValue);
}
this.finalizeObject$I$I$F$I$Z$O$I$javajs_util_BS(22, colorArgb[0], translucentLevel, intScale, havePoints, connections, iptDisplayProperty, null);
}, p$1);

Clazz.newMeth(C$, 'mo$Z$I', function (isInitOnly, iShape) {
var eval=this.e;
var offset=2147483647;
var isNegOffset=false;
var nboType=null;
var bsModels=this.vwr.getVisibleFramesBitSet$();
var propertyList=Clazz.new_($I$(4,1));
var isBeta=false;
var isNBO=(this.tokAt$I(0) == 1073877011);
var i0=1;
if (isNBO) {
var isViewOnly=this.e.optParameterAsString$I(1).equals$O("view");
if (this.e.slen == 1 || isViewOnly  || this.e.optParameterAsString$I(1).equals$O("options") ) {
if (!this.chk) {
var options=(isViewOnly ? "VIEW" : this.e.optParameterAsString$I(2));
this.vwr.startNBO$S(options);
}return;
}}if (this.tokAt$I(1) == 1094717454 || this.tokAt$I(1) == 4115 ) {
i0=eval.modelNumberParameter$I(2);
if (i0 < 0) this.invArg$();
bsModels.clearAll$();
bsModels.set$I(i0);
i0=3;
}eval.sm.loadShape$I(iShape);
for (var iModel=bsModels.nextSetBit$I(0); iModel >= 0; iModel=bsModels.nextSetBit$I(iModel + 1)) {
var i=i0;
if (this.tokAt$I(i) == 1073742001 && p$1.listIsosurface$I.apply(this, [iShape]) ) return;
this.setShapeProperty$I$S$O(iShape, "init", Integer.valueOf$I(iModel));
if (isInitOnly) return;
var title=null;
var moNumber=(this.getShapeProperty$I$S(iShape, "moNumber")).intValue$();
var linearCombination=this.getShapeProperty$I$S(iShape, "moLinearCombination");
var squared=this.getShapeProperty$I$S(iShape, "moSquareData");
var linearSquared=(linearCombination == null  ? null : this.getShapeProperty$I$S(iShape, "moSquareLinear"));
if (moNumber == 0) moNumber=2147483647;
var propertyName=null;
var propertyValue=null;
var ignoreSquared=false;
switch (this.getToken$I(i).tok) {
case 1140850696:
if (iShape == 1073877010) {
p$1.mo$Z$I.apply(this, [isInitOnly, 28]);
return;
}nboType=this.paramAsStr$I(++i).toUpperCase$();
break;
case 1073741875:
case 554176565:
propertyName=eval.theToken.value;
propertyValue=p$1.getCapSlabObject$I$Z.apply(this, [i, false]);
i=eval.iToken;
break;
case 1073741914:
linearSquared=$I$(1).TRUE;
linearCombination=Clazz.array(Float.TYPE, -1, [1]);
offset=moNumber=0;
break;
case 2:
moNumber=this.intParameter$I(i);
if (this.tokAt$I(i + 1) == 1073741865) {
isBeta=true;
i++;
}linearCombination=p$1.moCombo$javajs_util_Lst.apply(this, [propertyList]);
if (linearCombination == null  && moNumber < 0 ) linearCombination=Clazz.array(Float.TYPE, -1, [-100, -moNumber]);
ignoreSquared=true;
break;
case 268435616:
switch (this.tokAt$I(++i)) {
case 1073741973:
case 1073742008:
break;
default:
this.invArg$();
}
isNegOffset=true;
case 1073741973:
case 1073742008:
if ((offset=p$1.moOffset$I.apply(this, [i])) == 2147483647) this.invArg$();
moNumber=0;
linearCombination=p$1.moCombo$javajs_util_Lst.apply(this, [propertyList]);
ignoreSquared=true;
break;
case 1073742037:
moNumber=1073742037;
isBeta=false;
linearCombination=p$1.moCombo$javajs_util_Lst.apply(this, [propertyList]);
ignoreSquared=true;
break;
case 1073742108:
moNumber=1073742108;
isBeta=false;
linearCombination=p$1.moCombo$javajs_util_Lst.apply(this, [propertyList]);
ignoreSquared=true;
break;
case 1765808134:
p$1.setColorOptions$javajs_util_SB$I$I$I.apply(this, [null, i + 1, iShape, 2]);
break;
case 134217750:
propertyName="plane";
propertyValue=(this.tokAt$I(this.e.iToken=++i) == 1073742333 ? null : eval.planeParameter$I(i));
break;
case 134217751:
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "randomSeed", this.tokAt$I(i + 2) == 2 ? Integer.valueOf$I(this.intParameter$I(i + 2)) : null]);
propertyName="monteCarloCount";
propertyValue=Integer.valueOf$I(this.intParameter$I(i + 1));
break;
case 1073742138:
propertyName="scale";
propertyValue=Float.valueOf$F(this.floatParameter$I(i + 1));
break;
case 1073741910:
if (this.tokAt$I(i + 1) == 268435617) {
propertyName="cutoffPositive";
propertyValue=Float.valueOf$F(this.floatParameter$I(i + 2));
} else {
propertyName="cutoff";
propertyValue=Float.valueOf$F(this.floatParameter$I(i + 1));
}break;
case 536870916:
propertyName="debug";
break;
case 1073742054:
propertyName="plane";
break;
case 1073742104:
case 1073742122:
propertyName="resolution";
propertyValue=Float.valueOf$F(this.floatParameter$I(i + 1));
break;
case 1073742156:
if (linearCombination == null ) squared=$I$(1).TRUE;
 else linearSquared=$I$(1).TRUE;
ignoreSquared=false;
break;
case 1073742168:
if (i + 1 < this.slen && this.tokAt$I(i + 1) == 4 ) {
propertyName="titleFormat";
propertyValue=this.paramAsStr$I(i + 1);
}break;
case 1073741824:
this.invArg$();
break;
default:
if (eval.isArrayParameter$I(i)) {
linearCombination=eval.floatParameterSet$I$I$I(i, 1, 2147483647);
if (this.tokAt$I(eval.iToken + 1) == 1073742156) {
ignoreSquared=false;
linearSquared=$I$(1).TRUE;
eval.iToken++;
}break;
}var ipt=eval.iToken;
if (!eval.setMeshDisplayProperty$I$I$I(iShape, 0, eval.theTok)) this.invArg$();
this.setShapeProperty$I$S$O(iShape, "setProperties", propertyList);
eval.setMeshDisplayProperty$I$I$I(iShape, ipt, this.tokAt$I(ipt));
return;
}
if (propertyName != null ) p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, propertyName, propertyValue]);
var haveMO=(moNumber != 2147483647 || linearCombination != null  );
if (this.chk) return;
if (nboType != null  || haveMO ) {
if (haveMO && this.tokAt$I(eval.iToken + 1) == 4 ) title=this.paramAsStr$I(++eval.iToken);
eval.setCursorWait$Z(true);
p$1.setMoData$javajs_util_Lst$I$FA$I$Z$I$S$S$Z.apply(this, [propertyList, moNumber, linearCombination, offset, isNegOffset, iModel, title, nboType, isBeta]);
if (haveMO) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "finalize", null]);
}}if (!ignoreSquared) {
this.setShapeProperty$I$S$O(iShape, "squareLinear", linearSquared);
this.setShapeProperty$I$S$O(iShape, "squareData", squared);
}if (propertyList.size$() > 0) this.setShapeProperty$I$S$O(iShape, "setProperties", propertyList);
if (haveMO && !eval.tQuiet ) {
var moLabel="";
if (isNBO) {
moLabel=this.getShapeProperty$I$S(iShape, "moLabel");
} else {
moNumber=(this.getShapeProperty$I$S(iShape, "moNumber")).intValue$();
moLabel="" + moNumber;
}this.showString$S((function(a,f){return f.apply(null,a)})([this.tokAt$I(0)],$I$(2).nameOf$I) + " " + moLabel + " " + (isBeta ? "beta " : "") + this.getShapeProperty$I$S(iShape, "message") );
}propertyList.clear$();
}
}, p$1);

Clazz.newMeth(C$, 'setNBOType$java_util_Map$S', function (moData, type) {
var ext=$I$(10).getNBOTypeFromName$S(type);
if (ext < 0) this.invArg$();
if (!moData.containsKey$O("nboLabels")) this.error$I(27);
if (this.chk) return;
if (!$I$(11).readNBOCoefficients$java_util_Map$S$org_jmol_viewer_Viewer(moData, type, this.vwr)) this.error$I(27);
}, p$1);

Clazz.newMeth(C$, 'moCombo$javajs_util_Lst', function (propertyList) {
if (this.tokAt$I(this.e.iToken + 1) != 1073742156) return null;
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "squareLinear", $I$(1).TRUE]);
this.e.iToken++;
return Clazz.array(Float.TYPE, [0]);
}, p$1);

Clazz.newMeth(C$, 'moOffset$I', function (index) {
var isHomo=(this.getToken$I(index).tok == 1073741973);
var offset=(isHomo ? 0 : 1);
var tok=this.tokAt$I(++index);
if (tok == 2 && (this.e.st[index].value).charAt$I(0) == "-" ) offset+=this.intParameter$I(index);
 else if (tok == 268435617) offset+=this.intParameter$I(++index);
 else if (tok == 268435616) offset-=this.intParameter$I(++index);
return offset;
}, p$1);

Clazz.newMeth(C$, 'setMoData$javajs_util_Lst$I$FA$I$Z$I$S$S$Z', function (propertyList, moNumber, lc, offset, isNegOffset, modelIndex, title, nboType, isBeta) {
var eval=this.e;
if (modelIndex < 0) {
modelIndex=this.vwr.am.cmi;
if (modelIndex < 0) eval.errorStr$I$S(30, "MO isosurfaces");
}var moData=this.vwr.ms.getInfo$I$S(modelIndex, "moData");
if (moData == null ) this.error$I(27);
this.vwr.checkMenuUpdate$();
if (nboType != null ) {
p$1.setNBOType$java_util_Map$S.apply(this, [moData, nboType]);
if (lc == null  && moNumber == 2147483647 ) return;
}var mos=null;
var mo;
var nOrb=0;
var f=null;
if (lc == null  || lc.length < 2 ) {
if (lc != null  && lc.length == 1 ) offset=0;
 else if (isBeta && moData.containsKey$O("firstBeta") ) offset=(moData.get$O("firstBeta")).intValue$();
var lastMoNumber=(moData.containsKey$O("lastMoNumber") ? (moData.get$O("lastMoNumber")).intValue$() : 0);
var lastMoCount=(moData.containsKey$O("lastMoCount") ? (moData.get$O("lastMoCount")).intValue$() : 1);
if (moNumber == 1073742108) moNumber=lastMoNumber - 1;
 else if (moNumber == 1073742037) moNumber=lastMoNumber + lastMoCount;
mos=(moData.get$O("mos"));
nOrb=(mos == null  ? 0 : mos.size$());
if (nOrb == 0) this.error$I(25);
if (nOrb == 1 && moNumber > 1 ) this.error$I(29);
if (offset != 2147483647) {
if (isBeta) {
} else if (moData.containsKey$O("HOMO")) {
moNumber=(moData.get$O("HOMO")).intValue$() + offset;
offset=0;
} else {
moNumber=nOrb;
for (var i=0; i < nOrb; i++) {
mo=mos.get$I(i);
if ((f=mo.get$O("occupancy")) != null ) {
if (f.floatValue$() < 0.5 ) {
moNumber=i;
break;
}continue;
} else if ((f=mo.get$O("energy")) != null ) {
if (f.floatValue$() > 0 ) {
moNumber=i;
break;
}continue;
}break;
}
if (f == null ) this.error$I(28);
}moNumber+=offset;
if (!this.chk) $I$(12).info$S("MO " + moNumber);
}if (moNumber < 1 || moNumber > nOrb ) eval.errorStr$I$S(26, "" + nOrb);
}moNumber=Math.abs(moNumber);
moData.put$O$O("lastMoNumber", Integer.valueOf$I(moNumber));
moData.put$O$O("lastMoCount", Integer.valueOf$I(1));
if (isNegOffset && lc == null  ) lc=Clazz.array(Float.TYPE, -1, [-100, moNumber]);
if (lc != null  && lc.length < 2 ) {
mo=mos.get$I(moNumber - 1);
if ((f=mo.get$O("energy")) == null ) {
lc=Clazz.array(Float.TYPE, -1, [100, moNumber]);
} else {
var energy=f.floatValue$();
var bs=$I$(13).newN$I(nOrb);
var n=0;
var isAllElectrons=(lc.length == 1 && lc[0] == 1  );
for (var i=0; i < nOrb; i++) {
if ((f=mos.get$I(i).get$O("energy")) == null ) continue;
var e=f.floatValue$();
if (isAllElectrons ? e <= energy  : e == energy ) {
bs.set$I(i + 1);
n+=2;
}}
lc=Clazz.array(Float.TYPE, [n]);
for (var i=0, pt=0; i < n; i+=2) {
lc[i]=1;
lc[i + 1]=(pt=bs.nextSetBit$I(pt + 1));
}
moData.put$O$O("lastMoNumber", Integer.valueOf$I(bs.nextSetBit$I(0)));
moData.put$O$O("lastMoCount", Integer.valueOf$I((n/2|0)));
}p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "squareLinear", $I$(1).TRUE]);
}p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "moData", moData]);
if (title != null ) p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "title", title]);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "molecularOrbital", lc != null  ? lc : Integer.valueOf$I(Math.abs(moNumber))]);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "clear", null]);
}, p$1);

Clazz.newMeth(C$, 'isosurface$I', function (iShape) {
var eval=this.e;
eval.sm.loadShape$I(iShape);
if (this.tokAt$I(1) == 1073742001 && p$1.listIsosurface$I.apply(this, [iShape]) ) return;
var iptDisplayProperty=0;
var isDisplay=false;
var isIsosurface=(iShape == 24);
var isPmesh=(iShape == 29);
var isPlot3d=(iShape == 30);
var isLcaoCartoon=(iShape == 26);
var isSilent=(isLcaoCartoon || this.tokAt$I(1) == 12291  || eval.isStateScript );
var surfaceObjectSeen=false;
var planeSeen=false;
var isMapped=false;
var isBicolor=false;
var isPhased=false;
var doCalcArea=false;
var doCalcVolume=false;
var isBeta=false;
var isCavity=false;
var haveRadius=false;
var toCache=false;
var isFxy=false;
var haveSlab=false;
var haveIntersection=false;
var isFrontOnly=false;
var nbotype=null;
var data=null;
var cmd=null;
var thisSetNumber=-2147483648;
var nFiles=0;
var nX;
var nY;
var nZ;
var ptX;
var ptY;
var sigma=NaN;
var cutoff=NaN;
var ptWithin=0;
var smoothing=null;
var smoothingPower=2147483647;
var bs=null;
var bsSelect=null;
var bsIgnore=null;
var sbCommand=Clazz.new_($I$(14,1));
var pt;
var plane=null;
var lattice=null;
var fixLattice=false;
var pts=null;
var color=0;
var str=null;
var modelIndex=(this.chk ? 0 : -2147483648);
eval.setCursorWait$Z(true);
var idSeen=(p$1.initIsosurface$I.apply(this, [iShape]) != null );
var isWild=(idSeen && this.getShapeProperty$I$S(iShape, "ID") == null  );
var isColorSchemeTranslucent=false;
var isInline=false;
var isSign=false;
var onlyOneModel=null;
var filesData=null;
var translucency=null;
var colorScheme=null;
var mepOrMlp=null;
var symops=null;
var discreteColixes=null;
var propertyList=Clazz.new_($I$(4,1));
var defaultMesh=false;
if (isPmesh || isPlot3d ) p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "fileType", "Pmesh"]);
for (var i=eval.iToken; i < this.slen; ++i) {
var propertyName=null;
var propertyValue=null;
this.getToken$I(i);
if (eval.theTok == 1073741824) str=this.paramAsStr$I(i);
switch (eval.theTok) {
case 1073742148:
isSilent=true;
sbCommand.append$S(" silent");
propertyName="silent";
break;
case 603979868:
smoothing=(this.getToken$I(++i).tok == 1073742335 ? $I$(1).TRUE : eval.theTok == 1073742334 ? $I$(1).FALSE : null);
if (smoothing == null ) this.invArg$();
continue;
case 553648148:
smoothingPower=this.intParameter$I(++i);
continue;
case 4128:
propertyName="moveIsosurface";
if (this.tokAt$I(++i) != 12) this.invArg$();
propertyValue=this.getToken$I(i++).value;
break;
case 1296041986:
var ff=p$1.floatArraySet$I$I$I.apply(this, [i + 2, this.intParameter$I(i + 1), 16]);
symops=Clazz.array($I$(15), [ff.length]);
for (var j=symops.length; --j >= 0; ) symops[j]=$I$(15).newA16$FA(ff[j]);

i=eval.iToken;
break;
case 1088421903:
if (modelIndex < 0) modelIndex=Math.min(this.vwr.am.cmi, 0);
var needIgnore=(bsIgnore == null );
if (bsSelect == null ) bsSelect=(function(a,f){return f.apply(null,a)})([this.vwr.bsA$()],$I$(16).copy$javajs_util_BS);
bsSelect.and$javajs_util_BS(this.vwr.ms.getAtoms$I$O(1296041986, Integer.valueOf$I(1)));
if (!needIgnore) bsSelect.andNot$javajs_util_BS(bsIgnore);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "select", bsSelect]);
if (needIgnore) {
bsIgnore=$I$(16).copy$javajs_util_BS(bsSelect);
$I$(16).invertInPlace$javajs_util_BS$I(bsIgnore, this.vwr.ms.ac);
isFrontOnly=true;
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "ignore", bsIgnore]);
sbCommand.append$S(" ignore ").append$S($I$(8).eBS$javajs_util_BS(bsIgnore));
}sbCommand.append$S(" symmetry");
if (color == 0) p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "colorRGB", Integer.valueOf$I(1296041986)]);
symops=this.vwr.ms.getSymMatrices$I(modelIndex);
break;
case 1073742066:
propertyName="offset";
propertyValue=this.centerParameter$I(++i);
i=eval.iToken;
break;
case 528432:
propertyName="rotate";
propertyValue=(this.tokAt$I(eval.iToken=++i) == 1073742333 ? null : eval.getPoint4f$I(i));
i=eval.iToken;
break;
case 1610612740:
propertyName="scale3d";
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
break;
case 1073742090:
sbCommand.append$S(" periodic");
propertyName="periodic";
break;
case 1073742078:
case 266298:
case 134217751:
propertyName=eval.theToken.value.toString();
sbCommand.append$S(" ").appendO$O(eval.theToken.value);
propertyValue=this.centerParameter$I(++i);
sbCommand.append$S(" ").append$S($I$(8).eP$javajs_util_T3(propertyValue));
i=eval.iToken;
break;
case 1678381065:
if (eval.fullCommand.indexOf$S("# BBOX=") >= 0) {
var bbox=(function(a,f){return f.apply(null,a)})([$I$(17).getQuotedAttribute$S$S(eval.fullCommand, "# BBOX"), ","],$I$(17).split$S$S);
pts=Clazz.array($I$(3), -1, [$I$(8).uP$S(bbox[0]), $I$(8).uP$S(bbox[1])]);
} else if (eval.isCenterParameter$I(i + 1)) {
pts=Clazz.array($I$(3), -1, [this.getPoint3f$I$Z(i + 1, true), this.getPoint3f$I$Z(eval.iToken + 1, true)]);
i=eval.iToken;
} else {
pts=this.vwr.ms.getBBoxVertices$();
}sbCommand.append$S(" boundBox " + $I$(8).eP$javajs_util_T3(pts[0]) + " " + $I$(8).eP$javajs_util_T3(pts[pts.length - 1]) );
propertyName="boundingBox";
propertyValue=pts;
break;
case 135188:
isPmesh=true;
sbCommand.append$S(" pmesh");
propertyName="fileType";
propertyValue="Pmesh";
break;
case 134217763:
bsSelect=this.atomExpressionAt$I(++i);
if (this.chk) {
bs=Clazz.new_($I$(13,1));
} else if (this.tokAt$I(eval.iToken + 1) == 1073742325 || this.tokAt$I(eval.iToken + 1) == 10 ) {
bs=this.atomExpressionAt$I(++eval.iToken);
bs.and$javajs_util_BS(this.vwr.ms.getAtomsWithinRadius$F$javajs_util_BS$Z$org_jmol_atomdata_RadiusData(5.0, bsSelect, false, null));
} else {
bs=this.vwr.ms.getAtomsWithinRadius$F$javajs_util_BS$Z$org_jmol_atomdata_RadiusData(5.0, bsSelect, true, null);
bs.andNot$javajs_util_BS(this.vwr.ms.getAtoms$I$O(1094713360, bsSelect));
}bs.andNot$javajs_util_BS(bsSelect);
sbCommand.append$S(" intersection ").append$S($I$(8).eBS$javajs_util_BS(bsSelect)).append$S(" ").append$S($I$(8).eBS$javajs_util_BS(bs));
i=eval.iToken;
if (this.tokAt$I(i + 1) == 134320141) {
i++;
var f=this.getToken$I(++i).value;
sbCommand.append$S(" function ").append$S($I$(17).esc$S(f));
if (!this.chk) p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "func", (f.equals$O("a+b") || f.equals$O("a-b")  ? f : p$1.createFunction$S$S$S.apply(this, ["__iso__", "a,b", f]))]);
} else {
haveIntersection=true;
}propertyName="intersection";
propertyValue=Clazz.array($I$(13), -1, [bsSelect, bs]);
break;
case 1610625028:
case 134217759:
isDisplay=(eval.theTok == 1610625028);
if (isDisplay) {
sbCommand.append$S(" display");
iptDisplayProperty=i;
var tok=this.tokAt$I(i + 1);
if (tok == 0) continue;
i++;
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "token", Integer.valueOf$I(1073742335)]);
if (tok == 10 || tok == 1073742327 ) {
propertyName="bsDisplay";
if (tok == 1073742327) {
sbCommand.append$S(" all");
} else {
propertyValue=this.st[i].value;
sbCommand.append$S(" ").append$S($I$(8).eBS$javajs_util_BS(propertyValue));
}eval.checkLast$I(i);
break;
} else if (tok != 134217759) {
eval.iToken=i;
this.invArg$();
}} else {
ptWithin=i;
}var distance;
var ptc=null;
bs=null;
var ret=Clazz.array(java.lang.Object, [1]);
if (this.tokAt$I(i + 1) == 1073742325) {
distance=this.floatParameter$I(i + 3);
if (eval.isPoint3f$I(i + 4)) {
ptc=eval.centerParameter$I$OA(i + 4, null);
eval.iToken+=2;
} else if (eval.isPoint3f$I(i + 5)) {
ptc=eval.centerParameter$I$OA(i + 5, null);
eval.iToken+=2;
} else {
bs=eval.atomExpression$org_jmol_script_TA$I$I$Z$Z$OA$Z(this.st, i + 5, this.slen, true, false, ret, true);
if (bs == null ) this.invArg$();
}} else {
distance=this.floatParameter$I(++i);
ptc=eval.centerParameter$I$OA(++i, ret);
bs=(Clazz.instanceOf(ret[0], "javajs.util.BS") ? ret[0] : null);
}if (isDisplay) eval.checkLast$I(eval.iToken);
i=eval.iToken;
if (eval.fullCommand.indexOf$S("# WITHIN=") >= 0) bs=(function(a,f){return f.apply(null,a)})([$I$(17).getQuotedAttribute$S$S(eval.fullCommand, "# WITHIN")],$I$(13).unescape$S);
if (!this.chk) {
if (bs != null  && modelIndex >= 0 ) {
bs.and$javajs_util_BS(this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex));
}if (ptc == null ) ptc=(bs == null  ? Clazz.new_($I$(3,1)) : this.vwr.ms.getAtomSetCenter$javajs_util_BS(bs));
pts=p$1.getWithinDistanceVector$javajs_util_Lst$F$javajs_util_P3$javajs_util_BS$Z.apply(this, [propertyList, distance, ptc, bs, isDisplay]);
sbCommand.append$S(" within ").appendF$F(distance).append$S(" ").append$S(bs == null  ? $I$(8).eP$javajs_util_T3(ptc) : $I$(8).eBS$javajs_util_BS(bs));
}continue;
case 1073742083:
propertyName="parameters";
var fparams=eval.floatParameterSet$I$I$I(++i, 1, 10);
i=eval.iToken;
propertyValue=fparams;
sbCommand.append$S(" parameters ").append$S($I$(8).eAF$FA(fparams));
break;
case 1715472409:
case 1073742190:
onlyOneModel=eval.theToken.value;
var isVariable=(eval.theTok == 1073742190);
var tokProperty=this.tokAt$I(i + 1);
if (mepOrMlp == null ) {
if (!surfaceObjectSeen && !isMapped && !planeSeen  ) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "sasurface", Float.valueOf$F(0)]);
sbCommand.append$S(" vdw");
surfaceObjectSeen=true;
}propertyName="property";
if (smoothing == null ) {
var allowSmoothing=$I$(2).tokAttr$I$I(tokProperty, 1111490560);
smoothing=(allowSmoothing && this.vwr.getIsosurfacePropertySmoothing$Z(false) == 1  ? $I$(1).TRUE : $I$(1).FALSE);
}p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "propertySmoothing", smoothing]);
sbCommand.append$S(" isosurfacePropertySmoothing " + smoothing);
if (smoothing === $I$(1).TRUE ) {
if (smoothingPower == 2147483647) smoothingPower=this.vwr.getIsosurfacePropertySmoothing$Z(true);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "propertySmoothingPower", Integer.valueOf$I(smoothingPower)]);
sbCommand.append$S(" isosurfacePropertySmoothingPower " + smoothingPower);
}if (this.vwr.g.rangeSelected) p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "rangeSelected", $I$(1).TRUE]);
} else {
propertyName=mepOrMlp;
}str=this.paramAsStr$I(i);
sbCommand.append$S(" ").append$S(str);
if (str.toLowerCase$().indexOf$S("property_") == 0) {
data=Clazz.array(Float.TYPE, [this.vwr.ms.ac]);
if (this.chk) continue;
data=this.vwr.getDataObj$S$javajs_util_BS$I(str, null, 1);
if (data == null ) this.invArg$();
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, propertyName, data]);
continue;
}var ac=this.vwr.ms.ac;
data=Clazz.array(Float.TYPE, [ac]);
if (isVariable) {
var vname=this.paramAsStr$I(++i);
if (vname.length$() == 0) {
data=eval.floatParameterSet$I$I$I(i, ac, ac);
} else {
data=Clazz.array(Float.TYPE, [ac]);
if (!this.chk) (function(a,f){return f.apply(null,a)})(["" + eval.getParameter$S$I$Z(vname, 4, true), null, data],$I$(18).parseStringInfestedFloatArray$S$javajs_util_BS$FA);
}if (!this.chk) sbCommand.append$S(" \"\" ").append$S($I$(8).eAF$FA(data));
} else {
this.getToken$I(++i);
if (!this.chk) {
sbCommand.append$S(" " + eval.theToken.value);
var atoms=this.vwr.ms.at;
this.vwr.autoCalculate$I$S(tokProperty, null);
if (tokProperty != 1765808134) {
pt=Clazz.new_($I$(3,1));
for (var iAtom=ac; --iAtom >= 0; ) data[iAtom]=atoms[iAtom].atomPropertyFloat$org_jmol_viewer_Viewer$I$javajs_util_P3(this.vwr, tokProperty, pt);

}}if (tokProperty == 1765808134) colorScheme="inherit";
if (this.tokAt$I(i + 1) == 134217759) {
var d=this.floatParameter$I(i=i + 2);
sbCommand.append$S(" within " + new Float(d).toString());
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "propertyDistanceMax", Float.valueOf$F(d)]);
}}propertyValue=data;
break;
case 1094713359:
case 1094717454:
if (surfaceObjectSeen) this.invArg$();
modelIndex=(eval.theTok == 1094713359 ? this.intParameter$I(++i) : eval.modelNumberParameter$I(++i));
sbCommand.append$S(" modelIndex " + modelIndex);
if (modelIndex < 0) {
propertyName="fixed";
propertyValue=$I$(1).TRUE;
break;
}propertyName="modelIndex";
propertyValue=Integer.valueOf$I(modelIndex);
break;
case 1275082245:
propertyName="select";
var bs1=this.atomExpressionAt$I(++i);
propertyValue=bs1;
i=eval.iToken;
var isOnly=(this.tokAt$I(i + 1) == 1073742072);
if (isOnly) {
i++;
bsIgnore=$I$(16).copy$javajs_util_BS(bs1);
$I$(16).invertInPlace$javajs_util_BS$I(bsIgnore, this.vwr.ms.ac);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "ignore", bsIgnore]);
sbCommand.append$S(" ignore ").append$S($I$(8).eBS$javajs_util_BS(bsIgnore));
isFrontOnly=true;
}if (surfaceObjectSeen || isMapped ) {
sbCommand.append$S(" select " + $I$(8).eBS$javajs_util_BS(bs1));
} else {
bsSelect=propertyValue;
if (modelIndex < 0 && bsSelect.nextSetBit$I(0) >= 0 ) modelIndex=this.vwr.ms.at[bsSelect.nextSetBit$I(0)].mi;
}break;
case 36867:
thisSetNumber=this.intParameter$I(++i);
break;
case 12289:
propertyName="center";
propertyValue=this.centerParameter$I(++i);
sbCommand.append$S(" center " + $I$(8).eP$javajs_util_T3(propertyValue));
i=eval.iToken;
break;
case 1073742147:
case 1765808134:
idSeen=true;
if (eval.theTok == 1073742147) {
isSign=true;
sbCommand.append$S(" sign");
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "sign", $I$(1).TRUE]);
} else {
if (this.tokAt$I(i + 1) == 1073741914) {
i++;
propertyName="colorDensity";
sbCommand.append$S(" color density");
if (this.isFloatParameter$I(i + 1)) {
var ptSize=this.floatParameter$I(++i);
sbCommand.append$S(" " + new Float(ptSize).toString());
propertyValue=Float.valueOf$F(ptSize);
}break;
}if (this.getToken$I(i + 1).tok == 4) {
colorScheme=this.paramAsStr$I(++i);
if (colorScheme.indexOf$S(" ") > 0) {
discreteColixes=$I$(19).getColixArray$S(colorScheme);
if (discreteColixes == null ) this.error$I(4);
}} else if (eval.theTok == 1073742018) {
i++;
sbCommand.append$S(" color mesh");
color=eval.getArgbParam$I(++i);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "meshcolor", Integer.valueOf$I(color)]);
sbCommand.append$S(" ").append$S($I$(8).escapeColor$I(color));
i=eval.iToken;
continue;
}if ((eval.theTok=this.tokAt$I(i + 1)) == 603979967 || eval.theTok == 1073742074 ) {
sbCommand.append$S(" color");
translucency=p$1.setColorOptions$javajs_util_SB$I$I$I.apply(this, [sbCommand, i + 1, 24, -2]);
i=eval.iToken;
continue;
}switch (this.tokAt$I(i + 1)) {
case 1073741826:
case 1073742114:
this.getToken$I(++i);
sbCommand.append$S(" color range");
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "rangeAll", null]);
if (this.tokAt$I(i + 1) == 1073742327) {
i++;
sbCommand.append$S(" all");
continue;
}var min=this.floatParameter$I(++i);
var max=this.floatParameter$I(++i);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "red", Float.valueOf$F(min)]);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "blue", Float.valueOf$F(max)]);
sbCommand.append$S(" ").appendF$F(min).append$S(" ").appendF$F(max);
continue;
}
if (eval.isColorParam$I(i + 1)) {
color=eval.getArgbParam$I(i + 1);
if (this.tokAt$I(i + 2) == 1073742170) {
colorScheme=eval.getColorRange$I(i + 1);
i=eval.iToken;
break;
}}sbCommand.append$S(" color");
}if (eval.isColorParam$I(i + 1)) {
color=eval.getArgbParam$I(++i);
sbCommand.append$S(" ").append$S($I$(8).escapeColor$I(color));
i=eval.iToken;
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "colorRGB", Integer.valueOf$I(color)]);
idSeen=true;
if (eval.isColorParam$I(i + 1)) {
color=eval.getArgbParam$I(++i);
i=eval.iToken;
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "colorRGB", Integer.valueOf$I(color)]);
sbCommand.append$S(" ").append$S($I$(8).escapeColor$I(color));
isBicolor=true;
} else if (isSign) {
this.invPO$();
}} else if (!isSign && discreteColixes == null   && colorScheme == null  ) {
this.invPO$();
}continue;
case 134221829:
if (!isIsosurface) this.invArg$();
toCache=!this.chk;
continue;
case 1228935687:
if (this.tokAt$I(i + 1) != 4) this.invPO$();
continue;
case 1111492618:
case 1648363544:
sbCommand.append$S(" ").appendO$O(eval.theToken.value);
var rd=eval.encodeRadiusParameter$I$Z$Z(i, false, true);
if (rd == null ) return;
sbCommand.append$S(" ").appendO$O(rd);
if (Float.isNaN$F(rd.value)) rd.value=100;
propertyValue=rd;
propertyName="radius";
haveRadius=true;
if (isMapped) surfaceObjectSeen=false;
i=eval.iToken;
break;
case 134217750:
planeSeen=true;
propertyName="plane";
propertyValue=eval.planeParameter$I(i);
i=eval.iToken;
sbCommand.append$S(" plane ").append$S($I$(8).eP4$javajs_util_P4(propertyValue));
break;
case 1073742138:
propertyName="scale";
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
sbCommand.append$S(" scale ").appendO$O(propertyValue);
break;
case 1073742327:
if (idSeen) this.invArg$();
propertyName="thisID";
break;
case 1112150020:
surfaceObjectSeen=true;
++i;
propertyValue=eval.getPoint4f$I(i);
propertyName="ellipsoid";
i=eval.iToken;
sbCommand.append$S(" ellipsoid ").append$S($I$(8).eP4$javajs_util_P4(propertyValue));
break;
case 134219265:
planeSeen=true;
propertyName="plane";
propertyValue=eval.hklParameter$I(++i);
i=eval.iToken;
sbCommand.append$S(" plane ").append$S($I$(8).eP4$javajs_util_P4(propertyValue));
break;
case 135182:
surfaceObjectSeen=true;
var lcaoType=this.paramAsStr$I(++i);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "lcaoType", lcaoType]);
sbCommand.append$S(" lcaocartoon ").append$S($I$(17).esc$S(lcaoType));
switch (this.getToken$I(++i).tok) {
case 12290:
case 10:
case 1073742325:
propertyName="lcaoCartoon";
bs=this.atomExpressionAt$I(i);
i=eval.iToken;
if (this.chk) continue;
var atomIndex=bs.nextSetBit$I(0);
if (atomIndex < 0) this.error$I(14);
sbCommand.append$S(" ({").appendI$I(atomIndex).append$S("})");
modelIndex=this.vwr.ms.at[atomIndex].mi;
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "modelIndex", Integer.valueOf$I(modelIndex)]);
var axes=Clazz.array($I$(20), -1, [Clazz.new_($I$(20,1)), Clazz.new_($I$(20,1)), $I$(20).newV$javajs_util_T3(this.vwr.ms.at[atomIndex]), Clazz.new_($I$(20,1))]);
if (!lcaoType.equalsIgnoreCase$S("s") && this.vwr.getHybridizationAndAxes$I$javajs_util_V3$javajs_util_V3$S(atomIndex, axes[0], axes[1], lcaoType) == null  ) return;
propertyValue=axes;
break;
default:
this.error$I(14);
}
break;
case 1073877011:
nbotype=this.paramAsStr$I(++i).toUpperCase$();
sbCommand.append$S(" nbo ").append$S(nbotype).append$S(" ");
case 1073877010:
if (nbotype == null ) sbCommand.append$S(" mo ");
var moNumber=2147483647;
var offset=2147483647;
var isNegOffset=(this.tokAt$I(i + 1) == 268435616);
if (isNegOffset) i++;
var linearCombination=null;
switch (this.tokAt$I(++i)) {
case 0:
eval.bad$();
break;
case 1073741914:
sbCommand.append$S("[1] squared ");
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "squareLinear", $I$(1).TRUE]);
linearCombination=Clazz.array(Float.TYPE, -1, [1]);
offset=moNumber=0;
i++;
break;
case 1073741973:
case 1073742008:
offset=p$1.moOffset$I.apply(this, [i]);
moNumber=0;
i=eval.iToken;
sbCommand.append$S((isNegOffset ? "-" : "") + "HOMO ");
if (offset > 0) sbCommand.append$S("+");
if (offset != 0) sbCommand.appendI$I(offset);
break;
case 2:
moNumber=this.intParameter$I(i);
sbCommand.appendI$I(moNumber);
if (this.tokAt$I(i + 1) == 1073741865) {
isBeta=true;
i++;
}break;
default:
if (eval.isArrayParameter$I(i)) {
linearCombination=eval.floatParameterSet$I$I$I(i, 1, 2147483647);
i=eval.iToken;
}}
var squared=(this.tokAt$I(i + 1) == 1073742156);
if (squared) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "squareLinear", $I$(1).TRUE]);
sbCommand.append$S(" squared");
if (linearCombination == null ) linearCombination=Clazz.array(Float.TYPE, [0]);
} else if (this.tokAt$I(i + 1) == 134217751) {
++i;
var monteCarloCount=this.intParameter$I(++i);
var seed=(this.tokAt$I(i + 1) == 2 ? this.intParameter$I(++i) : ((-System.currentTimeMillis$()|0)) % 10000);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "monteCarloCount", Integer.valueOf$I(monteCarloCount)]);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "randomSeed", Integer.valueOf$I(seed)]);
sbCommand.append$S(" points ").appendI$I(monteCarloCount).appendC$C(" ").appendI$I(seed);
}p$1.setMoData$javajs_util_Lst$I$FA$I$Z$I$S$S$Z.apply(this, [propertyList, moNumber, linearCombination, offset, isNegOffset, modelIndex, null, nbotype, isBeta]);
surfaceObjectSeen=true;
continue;
case 1073742036:
propertyName="nci";
sbCommand.append$S(" " + propertyName);
var tok=this.tokAt$I(i + 1);
var isPromolecular=(tok != 1228935687 && tok != 4  && tok != 1073742032 );
propertyValue=$I$(1).valueOf$Z(isPromolecular);
if (isPromolecular) surfaceObjectSeen=true;
break;
case 1073742016:
case 1073742022:
var isMep=(eval.theTok == 1073742016);
propertyName=(isMep ? "mep" : "mlp");
sbCommand.append$S(" " + propertyName);
var fname=null;
var calcType=-1;
surfaceObjectSeen=true;
if (this.tokAt$I(i + 1) == 2) {
calcType=this.intParameter$I(++i);
sbCommand.append$S(" " + calcType);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "mepCalcType", Integer.valueOf$I(calcType)]);
}if (this.tokAt$I(i + 1) == 4) {
fname=this.stringParameter$I(++i);
sbCommand.append$S(" /*file*/" + $I$(17).esc$S(fname));
} else if (this.tokAt$I(i + 1) == 1715472409) {
mepOrMlp=propertyName;
continue;
}if (!this.chk) try {
data=(fname == null  && isMep  ? this.vwr.getOrCalcPartialCharges$javajs_util_BS$javajs_util_BS(bsSelect, bsIgnore) : p$1.getAtomicPotentials$javajs_util_BS$javajs_util_BS$S.apply(this, [bsSelect, bsIgnore, fname]));
} catch (e1) {
if (Clazz.exceptionOf(e1,"org.jmol.viewer.JmolAsyncException")){
throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this.e, "partialcharge", 1]);
} else {
throw e1;
}
}
if (!this.chk && data == null  ) this.error$I(32);
propertyValue=data;
break;
case 1312817669:
doCalcVolume=!this.chk;
sbCommand.append$S(" volume");
break;
case 1073741974:
this.setShapeId$I$I$Z(iShape, ++i, idSeen);
isWild=(this.getShapeProperty$I$S(iShape, "ID") == null );
i=eval.iToken;
break;
case 1073741888:
if (this.tokAt$I(i + 1) == 603979967) {
isColorSchemeTranslucent=true;
i++;
}colorScheme=this.paramAsStr$I(++i).toLowerCase$();
if (colorScheme.equals$O("sets")) {
sbCommand.append$S(" colorScheme \"sets\"");
} else if (eval.isColorParam$I(i)) {
colorScheme=eval.getColorRange$I(i);
i=eval.iToken;
}break;
case 1073741828:
propertyName="addHydrogens";
propertyValue=$I$(1).TRUE;
sbCommand.append$S(" addHydrogens");
break;
case 1073741836:
propertyName="angstroms";
sbCommand.append$S(" angstroms");
break;
case 1073741837:
propertyName="anisotropy";
propertyValue=this.getPoint3f$I$Z(++i, false);
sbCommand.append$S(" anisotropy").append$S($I$(8).eP$javajs_util_T3(propertyValue));
i=eval.iToken;
break;
case 1073741842:
doCalcArea=!this.chk;
sbCommand.append$S(" area");
break;
case 1073741850:
case 1073742076:
surfaceObjectSeen=true;
if (isBicolor && !isPhased ) {
sbCommand.append$S(" phase \"_orb\"");
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "phase", "_orb"]);
}var nlmZprs=Clazz.array(Float.TYPE, [7]);
nlmZprs[0]=this.intParameter$I(++i);
nlmZprs[1]=this.intParameter$I(++i);
nlmZprs[2]=this.intParameter$I(++i);
nlmZprs[3]=(this.isFloatParameter$I(i + 1) ? this.floatParameter$I(++i) : 6.0);
sbCommand.append$S(" atomicOrbital ").appendI$I((nlmZprs[0]|0)).append$S(" ").appendI$I((nlmZprs[1]|0)).append$S(" ").appendI$I((nlmZprs[2]|0)).append$S(" ").appendF$F(nlmZprs[3]);
if (this.tokAt$I(i + 1) == 134217751) {
i+=2;
nlmZprs[4]=this.intParameter$I(i);
nlmZprs[5]=(this.tokAt$I(i + 1) == 3 ? this.floatParameter$I(++i) : 0);
nlmZprs[6]=(this.tokAt$I(i + 1) == 2 ? this.intParameter$I(++i) : ((-System.currentTimeMillis$()|0)) % 10000);
sbCommand.append$S(" points ").appendI$I((nlmZprs[4]|0)).appendC$C(" ").appendF$F(nlmZprs[5]).appendC$C(" ").appendI$I((nlmZprs[6]|0));
}propertyName="hydrogenOrbital";
propertyValue=nlmZprs;
break;
case 1073741866:
sbCommand.append$S(" binary");
continue;
case 1073741868:
sbCommand.append$S(" blockData");
propertyName="blockData";
propertyValue=$I$(1).TRUE;
break;
case 1073741875:
case 554176565:
haveSlab=true;
propertyName=eval.theToken.value;
propertyValue=p$1.getCapSlabObject$I$Z.apply(this, [i, false]);
i=eval.iToken;
break;
case 1073741876:
if (!isIsosurface) this.invArg$();
isCavity=true;
var cavityRadius=(this.isFloatParameter$I(i + 1) ? this.floatParameter$I(++i) : 1.2);
var envelopeRadius=(this.isFloatParameter$I(i + 1) ? this.floatParameter$I(++i) : 10.0);
if (this.chk) continue;
if (envelopeRadius > 10.0 ) {
eval.integerOutOfRange$I$I(0, 10);
return;
}sbCommand.append$S(" cavity ").appendF$F(cavityRadius).append$S(" ").appendF$F(envelopeRadius);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "envelopeRadius", Float.valueOf$F(envelopeRadius)]);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "cavityRadius", Float.valueOf$F(cavityRadius)]);
propertyName="cavity";
break;
case 1073741896:
case 1073741900:
propertyName="contour";
sbCommand.append$S(" contour");
switch (this.tokAt$I(i + 1)) {
case 1073741920:
propertyValue=eval.floatParameterSet$I$I$I(i + 2, 1, 2147483647);
sbCommand.append$S(" discrete ").append$S($I$(8).eAF$FA(propertyValue));
i=eval.iToken;
break;
case 1073741981:
pt=this.getPoint3f$I$Z(i + 2, false);
if (pt.z <= 0  || pt.y < pt.x  ) this.invArg$();
if (pt.z == (pt.z|0)  && pt.z > (pt.y - pt.x)  ) pt.z=(pt.y - pt.x) / pt.z;
propertyValue=pt;
i=eval.iToken;
sbCommand.append$S(" increment ").append$S($I$(8).eP$javajs_util_T3(pt));
break;
default:
propertyValue=Integer.valueOf$I(this.tokAt$I(i + 1) == 2 ? this.intParameter$I(++i) : 0);
sbCommand.append$S(" ").appendO$O(propertyValue);
if (this.tokAt$I(i + 1) == 2) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, propertyName, propertyValue]);
propertyValue=Integer.valueOf$I(-Math.abs(this.intParameter$I(++i)));
sbCommand.append$S(" ").appendO$O(propertyValue);
}}
break;
case 1073741910:
sbCommand.append$S(" cutoff ");
if (this.tokAt$I(++i) == 268435617) {
propertyName="cutoffPositive";
propertyValue=Float.valueOf$F(cutoff=this.floatParameter$I(++i));
sbCommand.append$S("+").appendO$O(propertyValue);
} else if (this.isFloatParameter$I(i)) {
propertyName="cutoff";
propertyValue=Float.valueOf$F(cutoff=this.floatParameter$I(i));
sbCommand.appendO$O(propertyValue);
} else {
propertyName="cutoffRange";
propertyValue=eval.floatParameterSet$I$I$I(i, 2, 2);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "cutoff", Float.valueOf$F(0)]);
sbCommand.append$S($I$(8).eAF$FA(propertyValue));
i=eval.iToken;
}break;
case 1073741928:
propertyName="downsample";
propertyValue=Integer.valueOf$I(this.intParameter$I(++i));
sbCommand.append$S(" downsample ").appendO$O(propertyValue);
break;
case 1073741931:
propertyName="eccentricity";
propertyValue=eval.getPoint4f$I(++i);
sbCommand.append$S(" eccentricity ").append$S($I$(8).eP4$javajs_util_P4(propertyValue));
i=eval.iToken;
break;
case 1073741932:
sbCommand.append$S(" ed");
p$1.setMoData$javajs_util_Lst$I$FA$I$Z$I$S$S$Z.apply(this, [propertyList, -1, null, 0, false, modelIndex, null, null, false]);
surfaceObjectSeen=true;
continue;
case 536870916:
case 1073742041:
sbCommand.append$S(" ").appendO$O(eval.theToken.value);
propertyName="debug";
propertyValue=(eval.theTok == 536870916 ? $I$(1).TRUE : $I$(1).FALSE);
break;
case 12293:
sbCommand.append$S(" fixed");
propertyName="fixed";
propertyValue=$I$(1).TRUE;
break;
case 1073741962:
sbCommand.append$S(" fullPlane");
propertyName="fullPlane";
propertyValue=$I$(1).TRUE;
break;
case 1073741966:
case 1073741968:
var isFxyz=(eval.theTok == 1073741968);
propertyName="" + eval.theToken.value;
var vxy=Clazz.new_($I$(4,1));
propertyValue=vxy;
isFxy=surfaceObjectSeen=true;
sbCommand.append$S(" ").append$S(propertyName);
var name=this.paramAsStr$I(++i);
if (name.equals$O("=")) {
sbCommand.append$S(" =");
name=this.paramAsStr$I(++i);
sbCommand.append$S(" ").append$S($I$(17).esc$S(name));
vxy.addLast$O(name);
if (!this.chk) p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "func", p$1.createFunction$S$S$S.apply(this, ["__iso__", "x,y,z", name])]);
break;
}var dName=(function(a,f){return f.apply(null,a)})([eval.fullCommand, "# DATA" + (isFxy ? "2" : "")],$I$(17).getQuotedAttribute$S$S);
if (dName == null ) dName="inline";
 else name=dName;
var isXYZ=(name.indexOf$S("data2d_") == 0);
var isXYZV=(name.indexOf$S("data3d_") == 0);
isInline=name.equals$O("inline");
sbCommand.append$S(" inline");
vxy.addLast$O(name);
var pt3=this.getPoint3f$I$Z(++i, false);
sbCommand.append$S(" ").append$S($I$(8).eP$javajs_util_T3(pt3));
vxy.addLast$O(pt3);
var pt4;
ptX=++eval.iToken;
vxy.addLast$O(pt4=eval.getPoint4f$I(ptX));
sbCommand.append$S(" ").append$S($I$(8).eP4$javajs_util_P4(pt4));
nX=(pt4.x|0);
ptY=++eval.iToken;
vxy.addLast$O(pt4=eval.getPoint4f$I(ptY));
sbCommand.append$S(" ").append$S($I$(8).eP4$javajs_util_P4(pt4));
nY=(pt4.x|0);
vxy.addLast$O(pt4=eval.getPoint4f$I(++eval.iToken));
sbCommand.append$S(" ").append$S($I$(8).eP4$javajs_util_P4(pt4));
nZ=(pt4.x|0);
if (nX == 0 || nY == 0  || nZ == 0 ) this.invArg$();
if (!this.chk) {
var fdata=null;
var xyzdata=null;
if (isFxyz) {
if (isInline) {
nX=Math.abs(nX);
nY=Math.abs(nY);
nZ=Math.abs(nZ);
xyzdata=p$1.floatArraySetXYZ$I$I$I$I.apply(this, [++eval.iToken, nX, nY, nZ]);
} else if (isXYZV) {
xyzdata=this.vwr.getDataObj$S$javajs_util_BS$I(name, null, 3);
} else {
xyzdata=this.vwr.functionXYZ$S$I$I$I(name, nX, nY, nZ);
}nX=Math.abs(nX);
nY=Math.abs(nY);
nZ=Math.abs(nZ);
if (xyzdata == null ) {
eval.iToken=ptX;
eval.errorStr$I$S(53, "xyzdata is null.");
}if (xyzdata.length != nX || xyzdata[0].length != nY  || xyzdata[0][0].length != nZ ) {
eval.iToken=ptX;
eval.errorStr$I$S(53, "xyzdata[" + xyzdata.length + "][" + xyzdata[0].length + "][" + xyzdata[0][0].length + "] is not of size [" + nX + "][" + nY + "][" + nZ + "]" );
}vxy.addLast$O(xyzdata);
sbCommand.append$S(" ").append$S($I$(8).e$O(xyzdata));
} else {
if (isInline) {
nX=Math.abs(nX);
nY=Math.abs(nY);
fdata=p$1.floatArraySet$I$I$I.apply(this, [++eval.iToken, nX, nY]);
} else if (isXYZ) {
fdata=this.vwr.getDataObj$S$javajs_util_BS$I(name, null, 2);
nX=(fdata == null  ? 0 : fdata.length);
nY=3;
} else {
fdata=this.vwr.functionXY$S$I$I(name, nX, nY);
nX=Math.abs(nX);
nY=Math.abs(nY);
}if (fdata == null ) {
eval.iToken=ptX;
eval.errorStr$I$S(53, "fdata is null.");
}if (fdata.length != nX && !isXYZ ) {
eval.iToken=ptX;
eval.errorStr$I$S(53, "fdata length is not correct: " + fdata.length + " " + nX + "." );
}for (var j=0; j < nX; j++) {
if (fdata[j] == null ) {
eval.iToken=ptY;
eval.errorStr$I$S(53, "fdata[" + j + "] is null." );
}if (fdata[j].length != nY) {
eval.iToken=ptY;
eval.errorStr$I$S(53, "fdata[" + j + "] is not the right length: " + fdata[j].length + " " + nY + "." );
}}
vxy.addLast$O(fdata);
sbCommand.append$S(" ").append$S($I$(8).e$O(fdata));
}}i=eval.iToken;
break;
case 1073741970:
propertyName="gridPoints";
sbCommand.append$S(" gridPoints");
break;
case 1073741976:
propertyName="ignore";
propertyValue=bsIgnore=this.atomExpressionAt$I(++i);
sbCommand.append$S(" ignore ").append$S($I$(8).eBS$javajs_util_BS(bsIgnore));
i=eval.iToken;
break;
case 1073741985:
propertyName="insideOut";
sbCommand.append$S(" insideout");
break;
case 1073741988:
case 1073741986:
case 1073742100:
sbCommand.append$S(" ").appendO$O(eval.theToken.value);
propertyName="pocket";
propertyValue=(eval.theTok == 1073742100 ? $I$(1).TRUE : $I$(1).FALSE);
break;
case 1073742002:
propertyName="lobe";
propertyValue=eval.getPoint4f$I(++i);
i=eval.iToken;
sbCommand.append$S(" lobe ").append$S($I$(8).eP4$javajs_util_P4(propertyValue));
surfaceObjectSeen=true;
break;
case 1073742004:
case 1073742006:
propertyName="lp";
propertyValue=eval.getPoint4f$I(++i);
i=eval.iToken;
sbCommand.append$S(" lp ").append$S($I$(8).eP4$javajs_util_P4(propertyValue));
surfaceObjectSeen=true;
break;
case 4125:
if (isMapped || this.slen == i + 1 ) this.invArg$();
isMapped=true;
if ((isCavity || haveRadius || haveIntersection  ) && !surfaceObjectSeen ) {
surfaceObjectSeen=true;
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "bsSolvent", (haveRadius || haveIntersection  ? Clazz.new_($I$(13,1)) : eval.lookupIdentifierValue$S("solvent"))]);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "sasurface", Float.valueOf$F(0)]);
}if (sbCommand.length$() == 0) {
plane=this.getShapeProperty$I$S(24, "plane");
if (plane == null ) {
if (this.getShapeProperty$I$S(24, "contours") != null ) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "nocontour", null]);
}} else {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "plane", plane]);
sbCommand.append$S("plane ").append$S($I$(8).eP4$javajs_util_P4(plane));
planeSeen=true;
plane=null;
}} else if (!surfaceObjectSeen && !planeSeen ) {
this.invArg$();
}sbCommand.append$S("; isosurface map");
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "map", (surfaceObjectSeen ? $I$(1).TRUE : $I$(1).FALSE)]);
break;
case 1073742014:
propertyName="maxset";
propertyValue=Integer.valueOf$I(this.intParameter$I(++i));
sbCommand.append$S(" maxSet ").appendO$O(propertyValue);
break;
case 1073742020:
propertyName="minset";
propertyValue=Integer.valueOf$I(this.intParameter$I(++i));
sbCommand.append$S(" minSet ").appendO$O(propertyValue);
break;
case 1073742112:
surfaceObjectSeen=true;
propertyName="rad";
propertyValue=eval.getPoint4f$I(++i);
i=eval.iToken;
sbCommand.append$S(" radical ").append$S($I$(8).eP4$javajs_util_P4(propertyValue));
break;
case 1073742027:
propertyName="fixed";
propertyValue=$I$(1).FALSE;
sbCommand.append$S(" modelBased");
break;
case 1073742028:
case 1073742135:
case 1612709912:
onlyOneModel=eval.theToken.value;
var radius;
if (eval.theTok == 1073742028) {
propertyName="molecular";
sbCommand.append$S(" molecular");
radius=(this.isFloatParameter$I(i + 1) ? this.floatParameter$I(++i) : 1.4);
} else {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "bsSolvent", eval.lookupIdentifierValue$S("solvent")]);
propertyName=(eval.theTok == 1073742135 ? "sasurface" : "solvent");
sbCommand.append$S(" ").appendO$O(eval.theToken.value);
radius=(this.isFloatParameter$I(i + 1) ? this.floatParameter$I(++i) : this.vwr.getFloat$I(570425394));
}sbCommand.append$S(" ").appendF$F(radius);
propertyValue=Float.valueOf$F(radius);
if (this.tokAt$I(i + 1) == 1073741961) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "doFullMolecular", null]);
sbCommand.append$S(" full");
i++;
}surfaceObjectSeen=true;
break;
case 1073742032:
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "fileType", "Mrc"]);
sbCommand.append$S(" mrc");
continue;
case 1073742064:
case 1073742062:
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "fileType", "Obj"]);
sbCommand.append$S(" obj");
continue;
case 1073742033:
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "fileType", "Msms"]);
sbCommand.append$S(" msms");
continue;
case 1073742094:
if (surfaceObjectSeen) this.invArg$();
propertyName="phase";
isPhased=true;
propertyValue=(this.tokAt$I(i + 1) == 4 ? this.stringParameter$I(++i) : "_orb");
sbCommand.append$S(" phase ").append$S($I$(17).esc$S(propertyValue));
break;
case 1073742104:
case 1073742122:
propertyName="resolution";
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
sbCommand.append$S(" resolution ").appendO$O(propertyValue);
break;
case 1073742124:
propertyName="reverseColor";
propertyValue=$I$(1).TRUE;
sbCommand.append$S(" reversecolor");
break;
case 1073742127:
case 1073742146:
propertyName="sigma";
propertyValue=Float.valueOf$F(sigma=this.floatParameter$I(++i));
sbCommand.append$S(" sigma ").appendO$O(propertyValue);
break;
case 1112150021:
propertyName="geodesic";
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
sbCommand.append$S(" geosurface ").appendO$O(propertyValue);
surfaceObjectSeen=true;
break;
case 1073742154:
propertyName="sphere";
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
sbCommand.append$S(" sphere ").appendO$O(propertyValue);
surfaceObjectSeen=true;
break;
case 1073742156:
propertyName="squareData";
propertyValue=$I$(1).TRUE;
sbCommand.append$S(" squared");
break;
case 1073741984:
propertyName=(!surfaceObjectSeen && !planeSeen && !isMapped   ? "readFile" : "mapColor");
str=this.stringParameter$I(++i);
if (str == null ) this.invArg$();
if (isPmesh) str=$I$(17).replaceWithCharacter$S$S$C(str, "{,}|", " ");
if (eval.debugHigh) $I$(12).debug$S("pmesh inline data:\n" + str);
propertyValue=(this.chk ? null : str);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "fileName", ""]);
sbCommand.append$S(" INLINE ").append$S($I$(17).esc$S(str));
surfaceObjectSeen=true;
break;
case 268435520:
case 1073742195:
case 7:
if (filesData != null  || isWild ) this.invArg$();
var list=eval.listParameter4$I$I$I$Z(i, 2, 2147483647, true);
i=eval.iToken;
var n=(list.size$()/2|0);
if (n == 0 || n * 2 != list.size$() ) this.invArg$();
var files=Clazz.array(String, [n]);
var factors=Clazz.array(Float.TYPE, [n]);
sbCommand.append$S("[");
try {
for (var j=0, ptf=0; j < n; j++) {
factors[j]=(list.get$I(ptf++)).floatValue$();
files[j]=this.e.checkFileExists$S$Z$S$I$Z("ISOSURFACE_" + j + "_" , false, list.get$I(ptf++), i, false);
sbCommand.appendF$F(factors[j]);
sbCommand.append$S(" /*file*/").append$S($I$(17).esc$S(files[j]));
}
sbCommand.append$S("]");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.invArg$();
} else {
throw e;
}
}
filesData=Clazz.array(java.lang.Object, -1, [files, factors]);
propertyName=(!surfaceObjectSeen && !planeSeen && !isMapped   ? "readFile" : "mapColor");
surfaceObjectSeen=true;
if (this.chk) break;
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "filesData", filesData]);
break;
case 545259556:
case 545259557:
case 4:
var firstPass=(!surfaceObjectSeen && !planeSeen );
var filename;
propertyName=(firstPass && !isMapped  ? "readFile" : "mapColor");
if (eval.theTok == 4) {
filename=this.paramAsStr$I(i);
} else {
var pdbID=this.vwr.getPdbID$();
if (pdbID == null ) eval.errorStr$I$S(22, "no PDBID available");
filename="*" + (eval.theTok == 545259557 ? "*" : "") + pdbID ;
}var checkWithin=false;
var isUppsala=false;
if (filename.startsWith$S("http://eds.bmc.uu.se/eds/dfs/cb/") && filename.endsWith$S(".omap") ) {
filename=(filename.indexOf$S("_diff") >= 0 ? "*" : "") + "*" + filename.substring$I$I(32, 36) ;
}if (filename.startsWith$S("*") || (isUppsala=filename.startsWith$S("=")) && filename.length$() > 1  ) {
if (isUppsala) filename=filename.replace$C$C("=", "*");
var isFull=(filename.indexOf$S("/full") >= 0);
if (filename.indexOf$S("/diff") >= 0) filename="*" + filename.substring$I$I(0, filename.indexOf$S("/diff"));
if (filename.startsWith$S("**")) {
if (Float.isNaN$F(sigma)) p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "sigma", Float.valueOf$F(sigma=3)]);
if (!isSign) {
isSign=true;
sbCommand.append$S(" sign");
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "sign", $I$(1).TRUE]);
}}if (!Float.isNaN$F(sigma)) this.showString$S("using cutoff = " + new Float(sigma).toString() + " sigma" );
filename=this.vwr.setLoadFormat$S$C$Z(filename, (isFull || pts == null   ? "_" : "-"), false);
checkWithin=!isFull;
}if (checkWithin) {
if (pts == null  && ptWithin == 0 ) {
onlyOneModel=filename;
if (modelIndex < 0) modelIndex=this.vwr.am.cmi;
bs=this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
if (bs.nextSetBit$I(0) >= 0) {
pts=p$1.getWithinDistanceVector$javajs_util_Lst$F$javajs_util_P3$javajs_util_BS$Z.apply(this, [propertyList, 2.0, null, bs, false]);
sbCommand.append$S(" within 2.0 ").append$S($I$(8).eBS$javajs_util_BS(bs));
}}if (pts != null  && filename.indexOf$S("/0,0,0/0,0,0?") >= 0 ) {
filename=filename.replace$CharSequence$CharSequence("0,0,0/0,0,0", new Float(pts[0].x).toString() + "," + new Float(pts[0].y).toString() + "," + new Float(pts[0].z).toString() + "/" + new Float(pts[pts.length - 1].x).toString() + "," + new Float(pts[pts.length - 1].y).toString() + "," + new Float(pts[pts.length - 1].z).toString() );
}if (firstPass) defaultMesh=true;
}if (firstPass && this.vwr.getP$S("_fileType").equals$O("Pdb") && Float.isNaN$F(sigma) && Float.isNaN$F(cutoff)  ) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "sigma", Float.valueOf$F(-1)]);
sbCommand.append$S(" sigma -1.0");
}if (filename.length$() == 0) {
if (modelIndex < 0) modelIndex=this.vwr.am.cmi;
filename=eval.getFullPathName$();
propertyValue=this.vwr.ms.getInfo$I$S(modelIndex, "jmolSurfaceInfo");
}var fileIndex=-1;
if (propertyValue == null  && this.tokAt$I(i + 1) == 2 ) p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "fileIndex", Integer.valueOf$I(fileIndex=this.intParameter$I(++i))]);
var stype=(this.tokAt$I(i + 1) == 4 ? this.stringParameter$I(++i) : null);
surfaceObjectSeen=true;
if (this.chk) {
break;
}var fullPathNameOrError;
var localName=null;
if (propertyValue == null ) {
if (eval.fullCommand.indexOf$S("# FILE" + nFiles + "=" ) >= 0) {
filename=$I$(17).getQuotedAttribute$S$S(eval.fullCommand, "# FILE" + nFiles);
if (this.tokAt$I(i + 1) == 1073741848) i+=2;
} else if (this.tokAt$I(i + 1) == 1073741848) {
localName=this.vwr.fm.getFilePath$S$Z$Z(this.stringParameter$I(eval.iToken=(i=i + 2)), false, false);
fullPathNameOrError=this.vwr.getFullPathNameOrError$S(localName);
localName=fullPathNameOrError[0];
if (this.vwr.fm.getPathForAllFiles$() != "") {
filename=localName;
localName=null;
} else {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "localName", localName]);
}}}if (stype == null ) {
filename=this.e.checkFileExists$S$Z$S$I$Z("ISOSURFACE_" + (isMapped ? "MAP_" : ""), false, filename, i, false);
}this.showString$S("reading isosurface data from " + filename);
if (stype != null ) {
propertyValue=this.vwr.fm.cacheGet$S$Z(filename, false);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "calculationType", stype]);
}if (propertyValue == null ) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "fileName", filename]);
if (localName != null ) filename=localName;
if (fileIndex >= 0) sbCommand.append$S(" ").appendI$I(fileIndex);
}sbCommand.append$S(" /*file*/").append$S($I$(17).esc$S(filename));
if (stype != null ) sbCommand.append$S(" ").append$S($I$(17).esc$S(stype));
break;
case 4106:
propertyName="connections";
switch (this.tokAt$I(++i)) {
case 12290:
case 10:
case 1073742325:
propertyValue=Clazz.array(Integer.TYPE, -1, [this.atomExpressionAt$I(i).nextSetBit$I(0)]);
break;
default:
propertyValue=Clazz.array(Integer.TYPE, -1, [(eval.floatParameterSet$I$I$I(i, 1, 1)[0]|0)]);
break;
}
i=eval.iToken;
break;
case 1094713347:
propertyName="atomIndex";
propertyValue=Integer.valueOf$I(this.intParameter$I(++i));
break;
case 1073741999:
propertyName="link";
sbCommand.append$S(" link");
break;
case 1814695966:
if (iShape != 24) this.invArg$();
if (this.tokAt$I(i + 1) == 268435617) i++;
propertyName="extendGrid";
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
sbCommand.append$S(" unitcell " + propertyValue);
break;
case 1073741994:
if (iShape != 24) this.invArg$();
pt=this.getPoint3f$I$Z(++i, false);
i=eval.iToken;
if (pt.x <= 0  || pt.y <= 0   || pt.z <= 0  ) break;
pt.x=(pt.x|0);
pt.y=(pt.y|0);
pt.z=(pt.z|0);
sbCommand.append$S(" lattice ").append$S($I$(8).eP$javajs_util_T3(pt));
if (isMapped) {
propertyName="mapLattice";
propertyValue=pt;
} else {
lattice=pt;
if (this.tokAt$I(i + 1) == 12293) {
sbCommand.append$S(" fixed");
fixLattice=true;
i++;
}}break;
default:
if (eval.theTok == 1073741824) {
propertyName="thisID";
propertyValue=str;
}if (!eval.setMeshDisplayProperty$I$I$I(iShape, 0, eval.theTok)) {
if ($I$(2).tokAttr$I$I(eval.theTok, 1073741824) && !idSeen ) {
this.setShapeId$I$I$Z(iShape, i, idSeen);
i=eval.iToken;
break;
}this.invArg$();
}if (iptDisplayProperty == 0) iptDisplayProperty=i;
i=this.slen - 1;
break;
}
idSeen=(eval.theTok != 12291);
if (isWild && surfaceObjectSeen ) this.invArg$();
if (propertyName != null ) p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, propertyName, propertyValue]);
}
if (!this.chk) {
if ((isCavity || haveRadius ) && !surfaceObjectSeen ) {
surfaceObjectSeen=true;
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "bsSolvent", (haveRadius ? Clazz.new_($I$(13,1)) : eval.lookupIdentifierValue$S("solvent"))]);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "sasurface", Float.valueOf$F(0)]);
}if (planeSeen && !surfaceObjectSeen && !isMapped  ) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "nomap", Float.valueOf$F(0)]);
surfaceObjectSeen=true;
}if (thisSetNumber >= -1) p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "getSurfaceSets", Integer.valueOf$I(thisSetNumber - 1)]);
if (discreteColixes != null ) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "colorDiscrete", discreteColixes]);
} else if ("sets".equals$O(colorScheme)) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "setColorScheme", null]);
} else if (colorScheme != null ) {
var ce=this.vwr.cm.getColorEncoder$S(colorScheme);
if (ce != null ) {
ce.isTranslucent=isColorSchemeTranslucent;
ce.hi=3.4028235E38;
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "remapColor", ce]);
}}if (surfaceObjectSeen && !isLcaoCartoon && sbCommand.indexOf$S(";") != 0  ) {
propertyList.add$I$O(0, Clazz.array(java.lang.Object, -1, ["newObject", null]));
var needSelect=(bsSelect == null );
if (needSelect) bsSelect=(function(a,f){return f.apply(null,a)})([this.vwr.bsA$()],$I$(16).copy$javajs_util_BS);
if (modelIndex < 0) modelIndex=this.vwr.am.cmi;
bsSelect.and$javajs_util_BS(this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex));
if (onlyOneModel != null ) {
var bsModels=this.vwr.ms.getModelBS$javajs_util_BS$Z(bsSelect, false);
if (bsModels.cardinality$() > 1) eval.errorStr$I$S(30, "ISOSURFACE " + onlyOneModel);
if (needSelect) {
propertyList.add$I$O(0, Clazz.array(java.lang.Object, -1, ["select", bsSelect]));
if (sbCommand.indexOf$S("; isosurface map") == 0) {
sbCommand=Clazz.new_($I$(14,1)).append$S("; isosurface map select ").append$S($I$(8).eBS$javajs_util_BS(bsSelect)).append$S(sbCommand.substring$I(16));
}}}}if (haveIntersection && !haveSlab ) {
if (!surfaceObjectSeen) p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "sasurface", Float.valueOf$F(0)]);
if (!isMapped) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "map", $I$(1).TRUE]);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "select", bs]);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "sasurface", Float.valueOf$F(0)]);
}p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "slab", p$1.getCapSlabObject$I$Z.apply(this, [-100, false])]);
}var timeMsg=(surfaceObjectSeen && this.vwr.getBoolean$I(603979934) );
if (timeMsg) $I$(12).startTimer$S("isosurface");
this.setShapeProperty$I$S$O(iShape, "setProperties", propertyList);
if (timeMsg) this.showString$S($I$(12).getTimerMsg$S$I("isosurface", 0));
if (defaultMesh) {
this.setShapeProperty$I$S$O(iShape, "token", Integer.valueOf$I(1073742018));
this.setShapeProperty$I$S$O(iShape, "token", Integer.valueOf$I(1073742046));
isFrontOnly=true;
sbCommand.append$S(" mesh nofill frontOnly");
}}if (lattice != null ) {
this.setShapeProperty$I$S$O(iShape, "lattice", lattice);
if (fixLattice) this.setShapeProperty$I$S$O(iShape, "fixLattice", $I$(1).TRUE);
}if (symops != null ) this.setShapeProperty$I$S$O(iShape, "symops", symops);
if (isFrontOnly) this.setShapeProperty$I$S$O(iShape, "token", Integer.valueOf$I(1073741960));
if (iptDisplayProperty > 0) {
if (!eval.setMeshDisplayProperty$I$I$I(iShape, iptDisplayProperty, 0)) this.invArg$();
}if (this.chk) return;
var area=null;
var volume=null;
if (doCalcArea) {
area=this.getShapeProperty$I$S(iShape, "area");
if (Clazz.instanceOf(area, "java.lang.Float")) this.vwr.setFloatProperty$S$F("isosurfaceArea", (area).floatValue$());
 else this.vwr.g.setUserVariable$S$org_jmol_script_SV("isosurfaceArea", $I$(7).getVariableAD$DA(area));
}if (doCalcVolume) {
volume=(doCalcVolume ? this.getShapeProperty$I$S(iShape, "volume") : null);
if (Clazz.instanceOf(volume, "java.lang.Float")) this.vwr.setFloatProperty$S$F("isosurfaceVolume", (volume).floatValue$());
 else this.vwr.g.setUserVariable$S$org_jmol_script_SV("isosurfaceVolume", $I$(7).getVariableAD$DA(volume));
}if (!isLcaoCartoon) {
var s=null;
if (isMapped && !surfaceObjectSeen ) {
this.setShapeProperty$I$S$O(iShape, "finalize", sbCommand.toString());
} else if (surfaceObjectSeen) {
cmd=sbCommand.toString();
this.setShapeProperty$I$S$O(iShape, "finalize", (cmd.indexOf$S("; isosurface map") == 0 ? "" : " select " + $I$(8).eBS$javajs_util_BS(bsSelect) + " " ) + cmd);
s=this.getShapeProperty$I$S(iShape, "ID");
if (s != null  && !eval.tQuiet  && !isSilent ) {
cutoff=(this.getShapeProperty$I$S(iShape, "cutoff")).floatValue$();
if (Float.isNaN$F(cutoff) && !Float.isNaN$F(sigma) ) $I$(12).error$S("sigma not supported");
s += " created " + this.getShapeProperty$I$S(iShape, "message");
}}var sarea;
var svol;
if (doCalcArea || doCalcVolume ) {
sarea=(doCalcArea ? "isosurfaceArea = " + (Clazz.instanceOf(area, "java.lang.Float") ? "" + area : $I$(8).eAD$DA(area)) : null);
svol=(doCalcVolume ? "isosurfaceVolume = " + (Clazz.instanceOf(volume, "java.lang.Float") ? "" + volume : $I$(8).eAD$DA(volume)) : null);
if (s == null ) {
if (doCalcArea) this.showString$S(sarea);
if (doCalcVolume) this.showString$S(svol);
} else {
if (doCalcArea) s += "\n" + sarea;
if (doCalcVolume) s += "\n" + svol;
}}if (s != null  && !isSilent ) this.showString$S(s);
}if (translucency != null ) this.setShapeProperty$I$S$O(iShape, "translucency", translucency);
this.setShapeProperty$I$S$O(iShape, "clear", null);
if (toCache) this.setShapeProperty$I$S$O(iShape, "cache", null);
if (!isSilent && !isDisplay && !haveSlab && eval.theTok != 12291  ) p$1.listIsosurface$I.apply(this, [iShape]);
}, p$1);

Clazz.newMeth(C$, 'lcaoCartoon', function () {
var eval=this.e;
eval.sm.loadShape$I(26);
if (eval.tokAt$I(1) == 1073742001 && p$1.listIsosurface$I.apply(this, [26]) ) return;
this.setShapeProperty$I$S$O(26, "init", eval.fullCommand);
if (this.slen == 1) {
this.setShapeProperty$I$S$O(26, "lcaoID", null);
return;
}var idSeen=false;
var translucency=null;
for (var i=1; i < this.slen; i++) {
var propertyName=null;
var propertyValue=null;
switch (this.getToken$I(i).tok) {
case 1073741875:
case 554176565:
propertyName=eval.theToken.value;
if (this.tokAt$I(i + 1) == 1073742334) eval.iToken=i + 1;
propertyValue=p$1.getCapSlabObject$I$Z.apply(this, [i, true]);
i=eval.iToken;
break;
case 12289:
p$1.isosurface$I.apply(this, [26]);
return;
case 528432:
var degx=0;
var degy=0;
var degz=0;
switch (this.getToken$I(++i).tok) {
case 1111492629:
degx=this.floatParameter$I(++i) * 0.017453292;
break;
case 1111492630:
degy=this.floatParameter$I(++i) * 0.017453292;
break;
case 1111492631:
degz=this.floatParameter$I(++i) * 0.017453292;
break;
default:
this.invArg$();
}
propertyName="rotationAxis";
propertyValue=$I$(20).new3$F$F$F(degx, degy, degz);
break;
case 1073742335:
case 1610625028:
case 2097192:
propertyName="on";
break;
case 1073742334:
case 12294:
case 2097194:
propertyName="off";
break;
case 12291:
propertyName="delete";
break;
case 12290:
case 10:
case 1073742325:
propertyName="select";
propertyValue=this.atomExpressionAt$I(i);
i=eval.iToken;
break;
case 1765808134:
translucency=p$1.setColorOptions$javajs_util_SB$I$I$I.apply(this, [null, i + 1, 26, -2]);
if (translucency != null ) this.setShapeProperty$I$S$O(26, "settranslucency", translucency);
i=eval.iToken;
idSeen=true;
continue;
case 603979967:
case 1073742074:
eval.setMeshDisplayProperty$I$I$I(26, i, eval.theTok);
i=eval.iToken;
idSeen=true;
continue;
case 1112152075:
case 4:
propertyValue=this.paramAsStr$I(i).toLowerCase$();
if (propertyValue.equals$O("spacefill")) propertyValue="cpk";
propertyName="create";
if (eval.optParameterAsString$I(i + 1).equalsIgnoreCase$S("molecular")) {
i++;
propertyName="molecular";
}break;
case 1275082245:
if (eval.isAtomExpression$I(i + 1)) {
propertyName="select";
propertyValue=this.atomExpressionAt$I(i + 1);
i=eval.iToken;
} else {
propertyName="selectType";
propertyValue=this.paramAsStr$I(++i);
if (propertyValue.equals$O("spacefill")) propertyValue="cpk";
}break;
case 1073742138:
propertyName="scale";
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
break;
case 1073742004:
case 1073742006:
propertyName="lonePair";
break;
case 1073742112:
case 1073742111:
propertyName="radical";
break;
case 1073742028:
propertyName="molecular";
break;
case 1073741904:
propertyValue=this.paramAsStr$I(++i);
propertyName="create";
if (eval.optParameterAsString$I(i + 1).equalsIgnoreCase$S("molecular")) {
i++;
propertyName="molecular";
}break;
case 1073741974:
propertyValue=eval.setShapeNameParameter$I(++i);
i=eval.iToken;
if (idSeen) this.invArg$();
propertyName="lcaoID";
break;
default:
if (eval.theTok == 268435633 || $I$(2).tokAttr$I$I(eval.theTok, 1073741824) ) {
if (eval.theTok != 268435633) propertyValue=this.paramAsStr$I(i);
if (idSeen) this.invArg$();
propertyName="lcaoID";
break;
}break;
}
if (eval.theTok != 12291) idSeen=true;
if (propertyName == null ) this.invArg$();
this.setShapeProperty$I$S$O(26, propertyName, propertyValue);
}
this.setShapeProperty$I$S$O(26, "clear", null);
}, p$1);

Clazz.newMeth(C$, 'contact', function () {
var eval=this.e;
eval.sm.loadShape$I(25);
if (this.tokAt$I(1) == 1073742001 && p$1.listIsosurface$I.apply(this, [25]) ) return false;
var iptDisplayProperty=0;
eval.iToken=1;
var thisId=p$1.initIsosurface$I.apply(this, [25]);
var idSeen=(thisId != null );
var isWild=(idSeen && this.getShapeProperty$I$S(25, "ID") == null  );
var bsA=null;
var bsB=null;
var bs=null;
var rd=null;
var params=null;
var colorDensity=false;
var sbCommand=Clazz.new_($I$(14,1));
var minSet=2147483647;
var displayType=134217750;
var contactType=0;
var distance=NaN;
var saProbeRadius=NaN;
var localOnly=true;
var intramolecular=null;
var userSlabObject=null;
var colorpt=0;
var colorByType=false;
var tok;
var modelIndex=-2147483648;
var okNoAtoms=(eval.iToken > 1);
for (var i=eval.iToken; i < this.slen; ++i) {
switch (tok=this.getToken$I(i).tok) {
default:
okNoAtoms=true;
if (!eval.setMeshDisplayProperty$I$I$I(25, 0, eval.theTok)) {
if (eval.theTok != 268435633 && !$I$(2).tokAttr$I$I(eval.theTok, 1073741824) ) this.invArg$();
thisId=this.setShapeId$I$I$Z(25, i, idSeen);
i=eval.iToken;
break;
}if (iptDisplayProperty == 0) iptDisplayProperty=i;
i=eval.iToken;
continue;
case 1073741974:
okNoAtoms=true;
this.setShapeId$I$I$Z(25, ++i, idSeen);
isWild=(this.getShapeProperty$I$S(25, "ID") == null );
i=eval.iToken;
break;
case 1765808134:
switch (this.tokAt$I(i + 1)) {
case 1073741914:
tok=0;
colorDensity=true;
sbCommand.append$S(" color density");
i++;
break;
case 1140850696:
tok=0;
colorByType=true;
sbCommand.append$S(" color type");
i++;
break;
}
if (tok == 0) break;
case 603979967:
case 1073742074:
okNoAtoms=true;
if (colorpt == 0) colorpt=i;
eval.setMeshDisplayProperty$I$I$I(25, i, eval.theTok);
i=eval.iToken;
break;
case 554176565:
okNoAtoms=true;
userSlabObject=p$1.getCapSlabObject$I$Z.apply(this, [i, false]);
this.setShapeProperty$I$S$O(25, "slab", userSlabObject);
i=eval.iToken;
break;
case 1073741914:
colorDensity=true;
sbCommand.append$S(" density");
if (this.isFloatParameter$I(i + 1)) {
if (params == null ) params=Clazz.array(Float.TYPE, [1]);
params[0]=-Math.abs(this.floatParameter$I(++i));
sbCommand.append$S(" " + new Float(-params[0]).toString());
}break;
case 1073742122:
var resolution=this.floatParameter$I(++i);
if (resolution > 0 ) {
sbCommand.append$S(" resolution ").appendF$F(resolution);
this.setShapeProperty$I$S$O(25, "resolution", Float.valueOf$F(resolution));
}break;
case 1094717454:
case 1094713359:
modelIndex=(eval.theTok == 1094713359 ? this.intParameter$I(++i) : eval.modelNumberParameter$I(++i));
sbCommand.append$S(" modelIndex " + modelIndex);
break;
case 134217759:
case 1275069443:
distance=this.floatParameter$I(++i);
sbCommand.append$S(" within ").appendF$F(distance);
break;
case 268435617:
case 2:
case 3:
rd=eval.encodeRadiusParameter$I$Z$Z(i, false, false);
if (rd == null ) return false;
sbCommand.append$S(" ").appendO$O(rd);
i=eval.iToken;
break;
case 1073741990:
case 1073741989:
intramolecular=(tok == 1073741989 ? $I$(1).TRUE : $I$(1).FALSE);
sbCommand.append$S(" ").appendO$O(eval.theToken.value);
break;
case 1073742020:
minSet=this.intParameter$I(++i);
break;
case 1613238294:
case 1073741881:
case 1648363544:
contactType=tok;
sbCommand.append$S(" ").appendO$O(eval.theToken.value);
break;
case 1073742135:
if (this.isFloatParameter$I(i + 1)) saProbeRadius=this.floatParameter$I(++i);
case 1073741875:
case 1073742036:
case 2097180:
localOnly=false;
case 1275068932:
case 1073741961:
case 134217750:
case 4106:
displayType=tok;
sbCommand.append$S(" ").appendO$O(eval.theToken.value);
if (tok == 1073742135) sbCommand.append$S(" ").appendF$F(saProbeRadius);
break;
case 1073742083:
params=eval.floatParameterSet$I$I$I(++i, 1, 10);
i=eval.iToken;
break;
case 12290:
case 10:
case 1073742325:
if (isWild || bsB != null  ) this.invArg$();
bs=(function(a,f){return f.apply(null,a)})([this.atomExpressionAt$I(i)],$I$(16).copy$javajs_util_BS);
i=eval.iToken;
if (bsA == null ) bsA=bs;
 else bsB=bs;
sbCommand.append$S(" ").append$S($I$(8).eBS$javajs_util_BS(bs));
break;
}
idSeen=(eval.theTok != 12291);
}
if (!okNoAtoms && bsA == null  ) this.error$I(13);
if (this.chk) return false;
if (bsA != null ) {
if (contactType == 1648363544 && rd == null  ) rd=Clazz.new_([null, 0, $I$(23).OFFSET, $I$(24).AUTO],$I$(22,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW);
var rd1=(rd == null  ? Clazz.new_([null, 0.26, $I$(23).OFFSET, $I$(24).AUTO],$I$(22,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW) : rd);
if (displayType == 1073742036 && bsB == null   && intramolecular != null   && intramolecular.booleanValue$() ) bsB=bsA;
 else bsB=eval.getMathExt$().setContactBitSets$javajs_util_BS$javajs_util_BS$Z$F$org_jmol_atomdata_RadiusData$Z(bsA, bsB, localOnly, distance, rd1, true);
switch (displayType) {
case 1073741875:
case 1073742135:
var bsSolvent=eval.lookupIdentifierValue$S("solvent");
bsA.andNot$javajs_util_BS(bsSolvent);
bsB.andNot$javajs_util_BS(bsSolvent);
bsB.andNot$javajs_util_BS(bsA);
break;
case 2097180:
bsB.andNot$javajs_util_BS(bsA);
break;
case 1073742036:
if (minSet == 2147483647) minSet=100;
this.setShapeProperty$I$S$O(25, "minset", Integer.valueOf$I(minSet));
sbCommand.append$S(" minSet ").appendI$I(minSet);
if (params == null ) params=Clazz.array(Float.TYPE, -1, [0.5, 2]);
}
if (intramolecular != null ) {
params=(params == null  ? Clazz.array(Float.TYPE, [2]) : $I$(5).ensureLengthA$FA$I(params, 2));
params[1]=(intramolecular.booleanValue$() ? 1 : 2);
}if (params != null ) sbCommand.append$S(" parameters ").append$S($I$(8).eAF$FA(params));
this.setShapeProperty$I$S$O(25, "set", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(contactType), Integer.valueOf$I(displayType), $I$(1).valueOf$Z(colorDensity), $I$(1).valueOf$Z(colorByType), bsA, bsB, rd, Float.valueOf$F(saProbeRadius), params, Integer.valueOf$I(modelIndex), sbCommand.toString()]));
if (colorpt > 0) eval.setMeshDisplayProperty$I$I$I(25, colorpt, 0);
}if (iptDisplayProperty > 0) {
if (!eval.setMeshDisplayProperty$I$I$I(25, iptDisplayProperty, 0)) this.invArg$();
}if (userSlabObject != null  && bsA != null  ) this.setShapeProperty$I$S$O(25, "slab", userSlabObject);
if (bsA != null  && (displayType == 1073742036 || localOnly ) ) {
var volume=this.getShapeProperty$I$S(25, "volume");
var v;
var isFull=(displayType == 1073741961);
if ($I$(5).isAD$O(volume)) {
var vs=volume;
v=0;
for (var i=0; i < vs.length; i++) v += (isFull ? vs[i] : Math.abs(vs[i]));

} else {
v=(volume).floatValue$();
}v=(Math.round(v * 1000) / 1000.0);
if (colorDensity || displayType != 1275068932 ) {
var nsets=(this.getShapeProperty$I$S(25, "nSets")).intValue$();
var s="Contacts: " + (nsets < 0 ? (-nsets/2|0) : nsets);
if (v != 0 ) s += ", with " + (isFull ? "approx " : "net ") + "volume " + new Double(v).toString() + " A^3" ;
this.showString$S(s);
}}return true;
}, p$1);

Clazz.newMeth(C$, 'cgo', function () {
var eval=this.e;
eval.sm.loadShape$I(23);
if (this.tokAt$I(1) == 1073742001 && p$1.listIsosurface$I.apply(this, [23]) ) return false;
var iptDisplayProperty=0;
var thisId=p$1.initIsosurface$I.apply(this, [23]);
var idSeen=(thisId != null );
var isWild=(idSeen && this.getShapeProperty$I$S(23, "ID") == null  );
var isInitialized=false;
var modelIndex=-1;
var data=null;
var translucentLevel=3.4028235E38;
var colorArgb=Clazz.array(Integer.TYPE, -1, [-2147483648]);
var intScale=0;
for (var i=eval.iToken; i < this.slen; ++i) {
var propertyName=null;
var propertyValue=null;
var tok=this.getToken$I(i).tok;
switch (tok) {
case 268435520:
case 1073742195:
case 7:
if (data != null  || isWild ) this.invArg$();
data=Clazz.new_($I$(4,1));
var ai=Clazz.array(Integer.TYPE, -1, [i, this.slen]);
if (!eval.getShapePropertyData$I$S$OA(23, "data", Clazz.array(java.lang.Object, -1, [this.st, ai, data, this.vwr]))) this.invArg$();
i=ai[0];
continue;
case 1073742138:
if (++i >= this.slen) this.error$I(34);
switch (this.getToken$I(i).tok) {
case 2:
intScale=this.intParameter$I(i);
continue;
case 3:
intScale=Math.round(this.floatParameter$I(i) * 100);
continue;
}
this.error$I(34);
break;
case 12293:
propertyName="modelIndex";
propertyValue=Integer.valueOf$I(-1);
break;
case 1094713359:
case 1094717454:
modelIndex=(eval.theTok == 1094713359 ? this.intParameter$I(++i) : eval.modelNumberParameter$I(++i));
propertyName="modelIndex";
propertyValue=Integer.valueOf$I(modelIndex);
break;
case 1765808134:
case 603979967:
case 1073742074:
translucentLevel=this.getColorTrans$org_jmol_script_ScriptEval$I$Z$IA(eval, i, false, colorArgb);
i=eval.iToken;
idSeen=true;
continue;
case 1073741974:
thisId=this.setShapeId$I$I$Z(23, ++i, idSeen);
isWild=(this.getShapeProperty$I$S(23, "ID") == null );
i=eval.iToken;
break;
default:
if (!eval.setMeshDisplayProperty$I$I$I(23, 0, eval.theTok)) {
if (eval.theTok == 268435633 || $I$(2).tokAttr$I$I(eval.theTok, 1073741824) ) {
thisId=this.setShapeId$I$I$Z(23, i, idSeen);
i=eval.iToken;
break;
}this.invArg$();
}if (iptDisplayProperty == 0) iptDisplayProperty=i;
i=eval.iToken;
continue;
}
idSeen=(eval.theTok != 12291);
if (data != null  && !isInitialized ) {
propertyName="points";
propertyValue=Integer.valueOf$I(intScale);
isInitialized=true;
intScale=0;
}if (propertyName != null ) this.setShapeProperty$I$S$O(23, propertyName, propertyValue);
}
this.finalizeObject$I$I$F$I$Z$O$I$javajs_util_BS(23, colorArgb[0], translucentLevel, intScale, data != null , data, iptDisplayProperty, null);
return true;
}, p$1);

Clazz.newMeth(C$, 'getAtomicPotentials$javajs_util_BS$javajs_util_BS$S', function (bsSelected, bsIgnore, fileName) {
var potentials=Clazz.array(Float.TYPE, [this.vwr.ms.ac]);
var m=$I$(6).getOption$S$org_jmol_viewer_Viewer$S("quantum.MlpCalculation", this.vwr, "script");
m.set$org_jmol_viewer_Viewer(this.vwr);
var data=(fileName == null  ? null : this.vwr.getFileAsString3$S$Z$S(fileName, false, null));
try {
m.assignPotentials$org_jmol_modelset_AtomA$FA$javajs_util_BS$javajs_util_BS$javajs_util_BS$S(this.vwr.ms.at, potentials, this.vwr.getSmartsMatch$S$javajs_util_BS("a", bsSelected), this.vwr.getSmartsMatch$S$javajs_util_BS("/noAromatic/[$(C=O),$(O=C),$(NC=O)]", bsSelected), bsIgnore, data);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return potentials;
}, p$1);

Clazz.newMeth(C$, 'getCapSlabObject$I$Z', function (i, isLcaoCartoon) {
if (i < 0) {
return $I$(25).getSlabWithinRange$F$F(i, 0);
}var eval=this.e;
var data=null;
var tok0=this.tokAt$I(i);
var isSlab=(tok0 == 554176565);
var tok=this.tokAt$I(i + 1);
var plane=null;
var pts=null;
var d;
var d2;
var bs=null;
var slabColix=null;
var slabMeshType=null;
if (tok == 603979967) {
var slabTranslucency=(this.isFloatParameter$I(++i + 1) ? this.floatParameter$I(++i) : 0.5);
if (eval.isColorParam$I(i + 1)) {
slabColix=Short.valueOf$H((function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([eval.getArgbParam$I(i + 1)],$I$(19).getColix$I), slabTranslucency != 0 , slabTranslucency],$I$(19).getColixTranslucent3$H$Z$F));
i=eval.iToken;
} else {
slabColix=Short.valueOf$H((function(a,f){return f.apply(null,a)})([1, slabTranslucency != 0 , slabTranslucency],$I$(19).getColixTranslucent3$H$Z$F));
}switch (tok=this.tokAt$I(i + 1)) {
case 1073742018:
case 1073741938:
slabMeshType=Integer.valueOf$I(tok);
tok=this.tokAt$I(++i + 1);
break;
default:
slabMeshType=Integer.valueOf$I(1073741938);
break;
}
}switch (tok) {
case 1073742334:
eval.iToken=i + 1;
return Integer.valueOf$I(-2147483648);
case 1073742333:
eval.iToken=i + 1;
break;
case 1073742330:
i++;
data=Clazz.array(java.lang.Object, -1, [Float.valueOf$F(1), this.paramAsStr$I(++i)]);
tok=1073742018;
break;
case 134217759:
i++;
if (this.tokAt$I(++i) == 1073742114) {
d=this.floatParameter$I(++i);
d2=this.floatParameter$I(++i);
data=Clazz.array(java.lang.Object, -1, [Float.valueOf$F(d), Float.valueOf$F(d2)]);
tok=1073742114;
} else if (this.isFloatParameter$I(i)) {
d=this.floatParameter$I(i);
if (eval.isCenterParameter$I(++i)) {
var ret=Clazz.array(java.lang.Object, [1]);
var pt=eval.centerParameter$I$OA(i, ret);
if (this.chk || !(Clazz.instanceOf(ret[0], "javajs.util.BS")) ) {
pts=Clazz.array($I$(3), -1, [pt]);
} else {
var atoms=this.vwr.ms.at;
bs=ret[0];
pts=Clazz.array($I$(3), [bs.cardinality$()]);
for (var k=0, j=bs.nextSetBit$I(0); j >= 0; j=bs.nextSetBit$I(j + 1), k++) pts[k]=atoms[j];

}} else {
pts=eval.getPointArray$I$I$Z(i, -1, false);
}if (pts.length == 0) {
eval.iToken=i;
this.invArg$();
}data=Clazz.array(java.lang.Object, -1, [Float.valueOf$F(d), pts, bs]);
} else {
data=eval.getPointArray$I$I$Z(i, 4, false);
tok=1678381065;
}break;
case 1678381065:
eval.iToken=i + 1;
data=(function(a,f){return f.apply(null,a)})([this.vwr.ms.getBBoxVertices$(), null],$I$(26).toOABC$javajs_util_P3A$javajs_util_T3);
break;
case 1073741872:
case 1814695966:
eval.iToken=i + 1;
var unitCell=this.vwr.getCurrentUnitCell$();
if (unitCell == null ) {
if (tok == 1814695966) this.invArg$();
} else {
pts=(function(a,f){return f.apply(null,a)})([unitCell.getUnitCellVerticesNoOffset$(), unitCell.getCartesianOffset$()],$I$(26).toOABC$javajs_util_P3A$javajs_util_T3);
var iType=(unitCell.getUnitCellInfoType$I(6)|0);
var v1=null;
var v2=null;
switch (iType) {
case 3:
break;
case 1:
v2=$I$(20).newVsub$javajs_util_T3$javajs_util_T3(pts[2], pts[0]);
v2.scale$F(1000.0);
case 2:
v1=$I$(20).newVsub$javajs_util_T3$javajs_util_T3(pts[1], pts[0]);
v1.scale$F(1000.0);
pts[0].sub$javajs_util_T3(v1);
pts[1].scale$F(2000.0);
if (iType == 1) {
pts[0].sub$javajs_util_T3(v2);
pts[2].scale$F(2000.0);
}break;
}
data=pts;
}break;
case 12290:
case 10:
case 1073742325:
data=this.atomExpressionAt$I(i + 1);
tok=3;
if (!eval.isCenterParameter$I(++eval.iToken)) {
isSlab=true;
break;
}data=null;
default:
if (!isLcaoCartoon && isSlab && this.isFloatParameter$I(i + 1)  ) {
d=this.floatParameter$I(++i);
if (!this.isFloatParameter$I(i + 1)) return Integer.valueOf$I((d|0));
d2=this.floatParameter$I(++i);
data=Clazz.array(java.lang.Object, -1, [Float.valueOf$F(d), Float.valueOf$F(d2)]);
tok=1073742114;
break;
}plane=eval.planeParameter$I(++i);
var off=(this.isFloatParameter$I(eval.iToken + 1) ? this.floatParameter$I(++eval.iToken) : NaN);
if (!Float.isNaN$F(off)) plane.w -= off;
data=plane;
tok=134217750;
}
var colorData=(slabMeshType == null  ? null : Clazz.array(java.lang.Object, -1, [slabMeshType, slabColix]));
return $I$(25).getSlabObjectType$I$O$Z$O(tok, data, !isSlab, colorData);
}, p$1);

Clazz.newMeth(C$, 'setColorOptions$javajs_util_SB$I$I$I', function (sb, index, iShape, nAllowed) {
var eval=this.e;
this.getToken$I(index);
var translucency="opaque";
if (eval.theTok == 603979967) {
translucency="translucent";
if (nAllowed < 0) {
var value=(this.isFloatParameter$I(index + 1) ? this.floatParameter$I(++index) : 3.4028235E38);
eval.setShapeTranslucency$I$S$S$F$javajs_util_BS(iShape, null, "translucent", value, null);
if (sb != null ) {
sb.append$S(" translucent");
if (value != 3.4028235E38 ) sb.append$S(" ").appendF$F(value);
}} else {
eval.setMeshDisplayProperty$I$I$I(iShape, index, eval.theTok);
}} else if (eval.theTok == 1073742074) {
if (nAllowed >= 0) eval.setMeshDisplayProperty$I$I$I(iShape, index, eval.theTok);
} else {
eval.iToken--;
}nAllowed=Math.abs(nAllowed);
for (var i=0; i < nAllowed; i++) {
if (eval.isColorParam$I(eval.iToken + 1)) {
var color=eval.getArgbParam$I(++eval.iToken);
this.setShapeProperty$I$S$O(iShape, "colorRGB", Integer.valueOf$I(color));
if (sb != null ) sb.append$S(" ").append$S($I$(8).escapeColor$I(color));
} else if (eval.iToken < index) {
this.invArg$();
} else {
break;
}}
return translucency;
}, p$1);

Clazz.newMeth(C$, 'createFunction$S$S$S', function (fname, xyz, ret) {
var e=(Clazz.new_($I$(27,1))).setViewer$org_jmol_viewer_Viewer(this.vwr);
try {
e.compileScript$S$S$Z(null, "function " + fname + "(" + xyz + ") { return " + ret + "}" , false);
var params=Clazz.new_($I$(4,1));
for (var i=0; i < xyz.length$(); i+=2) params.addLast$O($I$(7).newF$F(0).setName$S(xyz.substring$I$I(i, i + 1)));

return Clazz.array(java.lang.Object, -1, [e.aatoken[0][1].value, params]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return null;
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'getWithinDistanceVector$javajs_util_Lst$F$javajs_util_P3$javajs_util_BS$Z', function (propertyList, distance, ptc, bs, isShow) {
var v=Clazz.new_($I$(4,1));
var pts=Clazz.array($I$(3), [2]);
if (bs == null ) {
var pt1=$I$(3).new3$F$F$F(distance, distance, distance);
var pt0=$I$(3).newP$javajs_util_T3(ptc);
pt0.sub$javajs_util_T3(pt1);
pt1.add$javajs_util_T3(ptc);
pts[0]=pt0;
pts[1]=pt1;
v.addLast$O(ptc);
} else {
var bbox=this.vwr.ms.getBoxInfo$javajs_util_BS$F(bs, -Math.abs(distance * 2));
pts[0]=bbox.getBoundBoxVertices$()[0];
pts[1]=bbox.getBoundBoxVertices$()[7];
if (bs.cardinality$() == 1) v.addLast$O(this.vwr.ms.at[bs.nextSetBit$I(0)]);
}if (v.size$() == 1 && !isShow ) {
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "withinDistance", Float.valueOf$F(distance)]);
p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, "withinPoint", v.get$I(0)]);
}p$1.addShapeProperty$javajs_util_Lst$S$O.apply(this, [propertyList, (isShow ? "displayWithin" : "withinPoints"), Clazz.array(java.lang.Object, -1, [Float.valueOf$F(distance), pts, bs, v])]);
return pts;
}, p$1);

Clazz.newMeth(C$, 'addShapeProperty$javajs_util_Lst$S$O', function (propertyList, key, value) {
if (this.chk) return;
propertyList.addLast$O(Clazz.array(java.lang.Object, -1, [key, value]));
}, p$1);

Clazz.newMeth(C$, 'floatArraySetXYZ$I$I$I$I', function (i, nX, nY, nZ) {
var eval=this.e;
var tok=this.tokAt$I(i++);
if (tok == 1073742195) tok=this.tokAt$I(i++);
if (tok != 268435520 || nX <= 0 ) this.invArg$();
var fparams=$I$(5).newFloat3$I$I(nX, -1);
var n=0;
while (tok != 268435521){
tok=this.getToken$I(i).tok;
switch (tok) {
case 1073742195:
case 268435521:
continue;
case 268435504:
i++;
break;
case 268435520:
fparams[n++]=p$1.floatArraySet$I$I$I.apply(this, [i, nY, nZ]);
i=++eval.iToken;
tok=0;
if (n == nX && this.tokAt$I(i) != 268435521 ) this.invArg$();
break;
default:
this.invArg$();
}
}
return fparams;
}, p$1);

Clazz.newMeth(C$, 'floatArraySet$I$I$I', function (i, nX, nY) {
var tok=this.tokAt$I(i++);
if (tok == 1073742195) tok=this.tokAt$I(i++);
if (tok != 268435520) this.invArg$();
var fparams=$I$(5).newFloat2$I(nX);
var n=0;
while (tok != 268435521){
tok=this.getToken$I(i).tok;
switch (tok) {
case 1073742195:
case 268435521:
continue;
case 268435504:
i++;
break;
case 268435520:
i++;
var f=Clazz.array(Float.TYPE, [nY]);
fparams[n++]=f;
for (var j=0; j < nY; j++) {
f[j]=this.floatParameter$I(i++);
if (this.tokAt$I(i) == 268435504) i++;
}
if (this.tokAt$I(i++) != 268435521) this.invArg$();
tok=0;
if (n == nX && this.tokAt$I(i) != 268435521 ) this.invArg$();
break;
default:
this.invArg$();
}
}
return fparams;
}, p$1);

Clazz.newMeth(C$, 'initIsosurface$I', function (iShape) {
var eval=this.e;
this.setShapeProperty$I$S$O(iShape, "init", eval.fullCommand);
eval.iToken=0;
var tok1=this.tokAt$I(1);
var tok2=this.tokAt$I(2);
if (tok1 == 12291 || tok2 == 12291 && this.tokAt$I(++eval.iToken) == 1073742327  ) {
this.setShapeProperty$I$S$O(iShape, "delete", null);
eval.iToken+=2;
if (this.slen > eval.iToken) {
this.setShapeProperty$I$S$O(iShape, "init", eval.fullCommand);
this.setShapeProperty$I$S$O(iShape, "thisID", "+PREVIOUS_MESH+");
}return null;
}eval.iToken=1;
if (!eval.setMeshDisplayProperty$I$I$I(iShape, 0, tok1)) {
this.setShapeProperty$I$S$O(iShape, "thisID", "+PREVIOUS_MESH+");
if (iShape != 22) this.setShapeProperty$I$S$O(iShape, "title", Clazz.array(String, -1, [eval.thisCommand]));
if (tok1 != 1073741974 && (tok2 == 268435633 || tok1 == 268435633 && eval.setMeshDisplayProperty$I$I$I(iShape, 0, tok2)  ) ) {
var id=this.setShapeId$I$I$Z(iShape, 1, false);
eval.iToken++;
return id;
}}return null;
}, p$1);

Clazz.newMeth(C$, 'listIsosurface$I', function (iShape) {
var s=(this.slen > 3 ? "0" : this.tokAt$I(2) == 0 ? "" : " " + this.getToken$I(2).value);
if (!this.chk) this.showString$S(this.getShapeProperty$I$S(iShape, "list" + s));
return true;
}, p$1);

Clazz.newMeth(C$, 'getPlaneIntersection$I$javajs_util_P4$org_jmol_api_SymmetryInterface$F$I', function (type, plane, uc, scale, flags) {
var pts=null;
switch (type) {
case 1814695966:
if (uc == null ) return null;
pts=uc.getCanonicalCopy$F$Z(scale, true);
break;
case 1678381065:
pts=(function(a,f){return f.apply(null,a)})([this.vwr.ms.getBoxInfo$().getBoundBoxVertices$(), scale],$I$(26).getCanonicalCopy$javajs_util_P3A$F);
break;
}
var t=this.vwr.getTriangulator$();
if (plane != null ) return t.intersectPlane$javajs_util_P4$javajs_util_T3A$I(plane, pts, flags);
var v=Clazz.new_($I$(4,1));
v.addLast$O(pts);
v.addLast$O($I$(28).fullCubePolygon);
return v;
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
