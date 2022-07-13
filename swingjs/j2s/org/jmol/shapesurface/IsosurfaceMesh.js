(function(){var P$=Clazz.newPackage("org.jmol.shapesurface"),I$=[[0,'org.jmol.jvxl.data.JvxlData','org.jmol.viewer.Viewer','java.util.Hashtable','org.jmol.util.C','org.jmol.shape.Mesh','javajs.util.V3','javajs.util.P3','org.jmol.jvxl.data.JvxlCoder','javajs.util.Lst','org.jmol.util.Logger','org.jmol.api.Interface','javajs.util.BS','javajs.util.SB','javajs.util.CU','javajs.util.PT','org.jmol.script.T','org.jmol.util.ColorEncoder','javajs.util.AU','javajs.util.P3i','org.jmol.util.SimpleUnitCell','javajs.util.M4']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IsosurfaceMesh", null, 'org.jmol.shape.Mesh');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vertexIncrement=1;
this.firstRealVertex=-1;
},1);

C$.$fields$=[['Z',['hasGridPoints','colorPhased'],'I',['vertexIncrement','firstRealVertex','dataType','mergeAssociatedNormalCount'],'O',['jvxlData','org.jmol.jvxl.data.JvxlData','calculatedArea','java.lang.Object','+calculatedVolume','+info','assocGridPointMap','java.util.Map','+assocGridPointNormals','centers','javajs.util.P3[]','contourValues','float[]','contourColixes','short[]','colorEncoder','org.jmol.util.ColorEncoder','bsVdw','javajs.util.BS']]]

Clazz.newMeth(C$, 'getResolution$', function () {
return 1 / this.jvxlData.pointsPerAngstrom;
});

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$S$H$I', function (vwr, thisID, colix, index) {
Clazz.super_(C$, this);
this.mesh1$org_jmol_viewer_Viewer$S$H$I(vwr, thisID, colix, index);
this.jvxlData=Clazz.new_($I$(1,1));
this.checkByteCount=2;
this.jvxlData.version=$I$(2).getJmolVersion$();
}, 1);

Clazz.newMeth(C$, 'clearType$S$Z', function (meshType, iAddGridPoints) {
this.clear$S(meshType);
this.jvxlData.clear$();
this.assocGridPointMap=null;
this.assocGridPointNormals=null;
this.bsVdw=null;
this.calculatedVolume=null;
this.calculatedArea=null;
this.centers=null;
this.colorEncoder=null;
this.colorPhased=false;
this.colorsExplicit=false;
this.firstRealVertex=-1;
this.hasGridPoints=iAddGridPoints;
this.isColorSolid=true;
this.mergeAssociatedNormalCount=0;
this.nSets=0;
this.pcs=null;
this.showPoints=iAddGridPoints;
this.surfaceSet=null;
this.vcs=null;
this.vertexColorMap=null;
this.vertexIncrement=1;
this.vertexSets=null;
this.vvs=null;
});

Clazz.newMeth(C$, 'allocVertexColixes$', function () {
if (this.vcs == null ) {
this.vcs=Clazz.array(Short.TYPE, [this.vc]);
for (var i=this.vc; --i >= 0; ) this.vcs[i]=this.colix;

}this.isColorSolid=false;
});

Clazz.newMeth(C$, 'addVertexCopy$javajs_util_T3$F$I$Z$Z', function (vertex, value, assocVertex, associateNormals, asCopy) {
var vPt=this.addVCVal$javajs_util_T3$F$Z(vertex, value, asCopy);
switch (assocVertex) {
case -1:
if (this.firstRealVertex < 0) this.firstRealVertex=vPt;
break;
case -2:
this.hasGridPoints=true;
break;
case -3:
this.vertexIncrement=3;
break;
default:
if (this.firstRealVertex < 0) this.firstRealVertex=vPt;
if (associateNormals) {
if (this.assocGridPointMap == null ) this.assocGridPointMap=Clazz.new_($I$(3,1));
this.assocGridPointMap.put$O$O(Integer.valueOf$I(vPt), Integer.valueOf$I(assocVertex + this.mergeAssociatedNormalCount));
}}
return vPt;
});

Clazz.newMeth(C$, 'setTranslucent$Z$F', function (isTranslucent, iLevel) {
this.colix=$I$(4).getColixTranslucent3$H$Z$F(this.colix, isTranslucent, iLevel);
if (this.vcs != null ) for (var i=this.vc; --i >= 0; ) this.vcs[i]=$I$(4).getColixTranslucent3$H$Z$F(this.vcs[i], isTranslucent, iLevel);

});

Clazz.newMeth(C$, 'setMerged$Z', function (TF) {
this.isMerged=TF;
this.mergePolygonCount0=(TF ? this.pc : 0);
this.mergeVertexCount0=(TF ? this.vc : 0);
if (TF) {
this.mergeAssociatedNormalCount+=this.jvxlData.nPointsX * this.jvxlData.nPointsY * this.jvxlData.nPointsZ ;
this.assocGridPointNormals=null;
}});

Clazz.newMeth(C$, 'sumVertexNormals$javajs_util_T3A$javajs_util_V3A', function (vertices, vectorSums) {
$I$(5).sumVertexNormals2$org_jmol_shape_Mesh$javajs_util_T3A$javajs_util_V3A(this, vertices, vectorSums);
if (this.assocGridPointMap != null  && vectorSums.length > 0  && !this.isMerged ) {
if (this.assocGridPointNormals == null ) this.assocGridPointNormals=Clazz.new_($I$(3,1));
for (var entry, $entry = this.assocGridPointMap.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var gridPoint=entry.getValue$();
if (!this.assocGridPointNormals.containsKey$O(gridPoint)) this.assocGridPointNormals.put$O$O(gridPoint, $I$(6).new3$F$F$F(0, 0, 0));
this.assocGridPointNormals.get$O(gridPoint).add$javajs_util_T3(vectorSums[entry.getKey$().intValue$()]);
}
for (var entry, $entry = this.assocGridPointMap.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) vectorSums[entry.getKey$().intValue$()]=this.assocGridPointNormals.get$O(entry.getValue$());

}});

Clazz.newMeth(C$, 'getCenters$', function () {
if (this.centers != null ) return this.centers;
this.centers=Clazz.array($I$(7), [this.pc]);
for (var i=0; i < this.pc; i++) {
var p=this.pis[i];
if (p == null ) continue;
var pt=this.centers[i]=$I$(7).newP$javajs_util_T3(this.vs[p[0]]);
pt.add$javajs_util_T3(this.vs[p[1]]);
pt.add$javajs_util_T3(this.vs[p[2]]);
pt.scale$F(0.33333334);
}
return this.centers;
});

Clazz.newMeth(C$, 'getContours$', function () {
var n=this.jvxlData.nContours;
if (n == 0 || this.pis == null  ) return null;
this.havePlanarContours=(this.jvxlData.jvxlPlane != null );
if (this.havePlanarContours) return null;
if (n < 0) n=-1 - n;
var vContours=this.jvxlData.vContours;
if (vContours != null ) {
for (var i=0; i < n; i++) {
if (vContours[i].size$() > 6) return this.jvxlData.vContours;
$I$(8).set3dContourVector$javajs_util_Lst$IAA$javajs_util_T3A(vContours[i], this.pis, this.vs);
}
return this.jvxlData.vContours;
}vContours=Clazz.array($I$(9), [n]);
for (var i=0; i < n; i++) {
vContours[i]=Clazz.new_($I$(9,1));
}
if (this.jvxlData.contourValuesUsed == null ) {
var dv=(this.jvxlData.valueMappedToBlue - this.jvxlData.valueMappedToRed) / (n + 1);
for (var i=0; i < n; i++) {
var value=this.jvxlData.valueMappedToRed + (i + 1) * dv;
C$.get3dContour$org_jmol_shapesurface_IsosurfaceMesh$javajs_util_Lst$F$H(this, vContours[i], value, this.jvxlData.contourColixes[i]);
}
$I$(10,"info$S",[n + " contour lines; separation = " + new Float(dv).toString() ]);
} else {
for (var i=0; i < n; i++) {
var value=this.jvxlData.contourValuesUsed[i];
C$.get3dContour$org_jmol_shapesurface_IsosurfaceMesh$javajs_util_Lst$F$H(this, vContours[i], value, this.jvxlData.contourColixes[i]);
}
}this.jvxlData.contourColixes=Clazz.array(Short.TYPE, [n]);
this.jvxlData.contourValues=Clazz.array(Float.TYPE, [n]);
for (var i=0; i < n; i++) {
this.jvxlData.contourValues[i]=(vContours[i].get$I(2)).floatValue$();
this.jvxlData.contourColixes[i]=(vContours[i].get$I(3))[0];
}
return this.jvxlData.vContours=vContours;
});

Clazz.newMeth(C$, 'getPmeshData$Z', function (isBinary) {
var mw=$I$(11).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.shapesurface.PMeshWriter", this.vwr, "script");
return mw.write$org_jmol_shapesurface_IsosurfaceMesh$Z(this, isBinary);
});

Clazz.newMeth(C$, 'get3dContour$org_jmol_shapesurface_IsosurfaceMesh$javajs_util_Lst$F$H', function (m, v, value, colix) {
var bsContour=$I$(12).newN$I(m.pc);
var fData=Clazz.new_($I$(13,1));
var color=$I$(4).getArgb$H(colix);
C$.setContourVector$javajs_util_Lst$I$javajs_util_BS$F$H$I$javajs_util_SB(v, m.pc, bsContour, value, colix, color, fData);
for (var i=0; i < m.pc; i++) if (m.setABC$I(i) != null ) C$.addContourPoints$javajs_util_Lst$javajs_util_BS$I$javajs_util_SB$javajs_util_T3A$FA$I$I$I$F(v, bsContour, i, fData, m.vs, m.vvs, m.iA, m.iB, m.iC, value);

}, 1);

Clazz.newMeth(C$, 'setContourVector$javajs_util_Lst$I$javajs_util_BS$F$H$I$javajs_util_SB', function (v, nPolygons, bsContour, value, colix, color, fData) {
v.add$I$O(0, Integer.valueOf$I(nPolygons));
v.add$I$O(1, bsContour);
v.add$I$O(2, Float.valueOf$F(value));
v.add$I$O(3, Clazz.array(Short.TYPE, -1, [colix]));
v.add$I$O(4, Clazz.array(Integer.TYPE, -1, [color]));
v.add$I$O(5, fData);
}, 1);

Clazz.newMeth(C$, 'addContourPoints$javajs_util_Lst$javajs_util_BS$I$javajs_util_SB$javajs_util_T3A$FA$I$I$I$F', function (v, bsContour, i, fData, vertices, vertexValues, iA, iB, iC, value) {
var pt1=null;
var pt2=null;
var type=0;
var f1=C$.checkPt$FA$I$I$F(vertexValues, iA, iB, value);
if (!Float.isNaN$F(f1)) {
pt1=C$.getContourPoint$javajs_util_T3A$I$I$F(vertices, iA, iB, f1);
type|=1;
}var f2=(f1 == 1  ? NaN : C$.checkPt$FA$I$I$F(vertexValues, iB, iC, value));
if (!Float.isNaN$F(f2)) {
pt2=C$.getContourPoint$javajs_util_T3A$I$I$F(vertices, iB, iC, f2);
if (type == 0) {
pt1=pt2;
f1=f2;
}type|=2;
}switch (type) {
case 0:
return;
case 1:
if (f1 == 0 ) return;
case 2:
f2=(f2 == 1  ? NaN : C$.checkPt$FA$I$I$F(vertexValues, iC, iA, value));
if (!Float.isNaN$F(f2)) {
pt2=C$.getContourPoint$javajs_util_T3A$I$I$F(vertices, iC, iA, f2);
type|=4;
}break;
}
switch (type) {
case 3:
case 5:
case 6:
break;
default:
return;
}
bsContour.set$I(i);
$I$(8).appendContourTriangleIntersection$I$F$F$javajs_util_SB(type, f1, f2, fData);
v.addLast$O(pt1);
v.addLast$O(pt2);
}, 1);

Clazz.newMeth(C$, 'checkPt$FA$I$I$F', function (vertexValues, i, j, v) {
var v1;
var v2;
return (v == (v1=vertexValues[i])  ? 0 : v == (v2=vertexValues[j])  ? 1 : (v1 < v ) == (v < v2 )  ? (v - v1) / (v2 - v1) : NaN);
}, 1);

Clazz.newMeth(C$, 'getContourPoint$javajs_util_T3A$I$I$F', function (vertices, i, j, f) {
var pt=Clazz.new_($I$(7,1));
pt.sub2$javajs_util_T3$javajs_util_T3(vertices[j], vertices[i]);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(f, pt, vertices[i]);
return pt;
}, 1);

Clazz.newMeth(C$, 'setDiscreteColixes$FA$HA', function (values, colixes) {
if (values != null ) this.jvxlData.contourValues=values;
if (values == null  || values.length == 0 ) values=this.jvxlData.contourValues=this.jvxlData.contourValuesUsed;
if (colixes == null  && this.jvxlData.contourColixes != null  ) {
colixes=this.jvxlData.contourColixes;
} else {
this.jvxlData.contourColixes=colixes;
this.jvxlData.contourColors=$I$(4).getHexCodes$HA(colixes);
}if (this.vs == null  || this.vvs == null   || values == null  ) return;
var n=values.length;
var vMax=values[n - 1];
this.colorCommand=null;
var haveColixes=(colixes != null  && colixes.length > 0 );
this.isColorSolid=(haveColixes && this.jvxlData.jvxlPlane != null  );
if (this.jvxlData.vContours != null ) {
if (haveColixes) for (var i=0; i < this.jvxlData.vContours.length; i++) {
var colix=colixes[i % colixes.length];
(this.jvxlData.vContours[i].get$I(3))[0]=colix;
(this.jvxlData.vContours[i].get$I(4))[0]=$I$(4).getArgb$H(colix);
}
return;
}var defaultColix=($s$[0] = 0, $s$[0]);
this.pcs=Clazz.array(Short.TYPE, [this.pc]);
this.colorsExplicit=false;
for (var i=0; i < this.pc; i++) {
var p=this.pis[i];
if (p == null ) continue;
this.pcs[i]=defaultColix;
var v=(this.vvs[p[0]] + this.vvs[p[1]] + this.vvs[p[2]] ) / 3;
for (var j=n; --j >= 0; ) {
if (v >= values[j]  && v < vMax  ) {
this.pcs[i]=(haveColixes ? colixes[j % colixes.length] : (0|0));
break;
}}
}
});

Clazz.newMeth(C$, 'getContourList$org_jmol_viewer_Viewer', function (vwr) {
var ht=Clazz.new_($I$(3,1));
ht.put$O$O("values", (this.jvxlData.contourValuesUsed == null  ? this.jvxlData.contourValues : this.jvxlData.contourValuesUsed));
var colors=Clazz.new_($I$(9,1));
if (this.jvxlData.contourColixes != null ) {
for (var i=0; i < this.jvxlData.contourColixes.length; i++) {
colors.addLast$O($I$(14,"colorPtFromInt$I$javajs_util_P3",[$I$(4).getArgb$H(this.jvxlData.contourColixes[i]), null]));
}
ht.put$O$O("colors", colors);
}return ht;
});

Clazz.newMeth(C$, 'deleteContours$', function () {
this.jvxlData.contourValuesUsed=null;
this.jvxlData.contourValues=null;
this.jvxlData.contourColixes=null;
this.jvxlData.vContours=null;
});

Clazz.newMeth(C$, 'setVertexColorMap$', function () {
this.vertexColorMap=Clazz.new_($I$(3,1));
var lastColix=($s$[0] = -999, $s$[0]);
var bs=null;
for (var i=this.vc; --i >= 0; ) {
var c=this.vcs[i];
if (c != lastColix) {
var color=$I$(4,"getHexCode$H",[lastColix=c]);
bs=this.vertexColorMap.get$O(color);
if (bs == null ) this.vertexColorMap.put$O$O(color, bs=Clazz.new_($I$(12,1)));
}bs.set$I(i);
}
});

Clazz.newMeth(C$, 'setVertexColixesForAtoms$org_jmol_viewer_Viewer$HA$IA$javajs_util_BS', function (vwr, colixes, atomMap, bs) {
this.jvxlData.vertexDataOnly=true;
this.jvxlData.vertexColors=Clazz.array(Integer.TYPE, [this.vc]);
this.jvxlData.nVertexColors=this.vc;
var atoms=vwr.ms.at;
var gdata=vwr.gdata;
for (var i=this.mergeVertexCount0; i < this.vc; i++) {
var iAtom=this.vertexSource[i];
if (iAtom < 0 || !bs.get$I(iAtom) ) continue;
this.jvxlData.vertexColors[i]=gdata.getColorArgbOrGray$H(this.vcs[i]=$I$(4).copyColixTranslucency$H$H(this.colix, atoms[iAtom].colixAtom));
var colix=(colixes == null  ? 0 : colixes[atomMap[iAtom]]);
if (colix == 0) colix=atoms[iAtom].colixAtom;
this.vcs[i]=$I$(4).copyColixTranslucency$H$H(this.colix, colix);
}
});

Clazz.newMeth(C$, 'colorVertices$H$javajs_util_BS$Z', function (colix, bs, isAtoms) {
if (this.vertexSource == null ) return;
colix=$I$(4).copyColixTranslucency$H$H(this.colix, colix);
var bsVertices=(isAtoms ? Clazz.new_($I$(12,1)) : bs);
this.checkAllocColixes$();
if (isAtoms) for (var i=0; i < this.vc; i++) {
var pt=this.vertexSource[i];
if (pt >= 0 && bs.get$I(pt) ) {
this.vcs[i]=colix;
if (bsVertices != null ) bsVertices.set$I(i);
}}
 else for (var i=0; i < this.vc; i++) if (bsVertices.get$I(i)) this.vcs[i]=colix;

if (!isAtoms) {
return;
}var color=$I$(4).getHexCode$H(colix);
if (this.vertexColorMap == null ) this.vertexColorMap=Clazz.new_($I$(3,1));
C$.addColorToMap$java_util_Map$S$javajs_util_BS(this.vertexColorMap, color, bs);
});

Clazz.newMeth(C$, 'checkAllocColixes$', function () {
if (this.vcs == null  || this.vertexColorMap == null  && this.isColorSolid  ) this.allocVertexColixes$();
this.isColorSolid=false;
});

Clazz.newMeth(C$, 'addColorToMap$java_util_Map$S$javajs_util_BS', function (colorMap, color, bs) {
var bsMap=null;
for (var entry, $entry = colorMap.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) if (entry.getKey$() == color) {
bsMap=entry.getValue$();
bsMap.or$javajs_util_BS(bs);
} else {
entry.getValue$().andNot$javajs_util_BS(bs);
}
if (bsMap == null ) colorMap.put$O$O(color, bs);
}, 1);

Clazz.newMeth(C$, 'setJvxlColorMap$Z', function (isAll) {
this.jvxlData.diameter=this.diameter;
this.jvxlData.color=$I$(4).getHexCode$H(this.colix);
this.jvxlData.meshColor=(this.meshColix == 0 ? null : $I$(4).getHexCode$H(this.meshColix));
this.jvxlData.translucency=((this.colix & 30720) == 30720 ? -1 : $I$(4).getColixTranslucencyFractional$H(this.colix));
this.jvxlData.rendering=this.getRendering$().substring$I(1);
this.jvxlData.colorScheme=(this.colorEncoder == null  ? null : this.colorEncoder.getColorScheme$());
if (this.jvxlData.vertexColors == null ) this.jvxlData.nVertexColors=(this.vertexColorMap == null  ? 0 : this.vertexColorMap.size$());
if (this.vertexColorMap == null  || this.vertexSource == null   || !isAll ) return;
if (this.jvxlData.vertexColorMap == null ) this.jvxlData.vertexColorMap=Clazz.new_($I$(3,1));
for (var entry, $entry = this.vertexColorMap.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var bsMap=entry.getValue$();
if (bsMap.isEmpty$()) continue;
var color=entry.getKey$();
var bs=Clazz.new_($I$(12,1));
for (var i=0; i < this.vc; i++) if (bsMap.get$I(this.vertexSource[i])) bs.set$I(i);

C$.addColorToMap$java_util_Map$S$javajs_util_BS(this.jvxlData.vertexColorMap, color, bs);
}
this.jvxlData.nVertexColors=this.jvxlData.vertexColorMap.size$();
if (this.jvxlData.vertexColorMap.size$() == 0) this.jvxlData.vertexColorMap=null;
});

Clazz.newMeth(C$, 'setColorCommand$', function () {
if (this.colorEncoder == null  || (this.colorCommand=this.colorEncoder.getColorScheme$()) == null  ) return;
if (this.colorCommand.equals$O("inherit")) {
this.colorCommand="#inherit;";
return;
}this.colorCommand="color $" + $I$(15).esc$S(this.thisID) + $I$(15).esc$S(this.colorCommand) + " range " + (this.jvxlData.isColorReversed ? new Float(this.jvxlData.valueMappedToBlue).toString() + " " + new Float(this.jvxlData.valueMappedToRed).toString()  : new Float(this.jvxlData.valueMappedToRed).toString() + " " + new Float(this.jvxlData.valueMappedToBlue).toString() ) ;
});

Clazz.newMeth(C$, 'setColorsFromJvxlData$I', function (colorRgb) {
this.diameter=this.jvxlData.diameter;
if (colorRgb == -1) {
} else if (colorRgb != -2147483648 && colorRgb != 2147483647 ) {
this.colix=$I$(4).getColix$I(colorRgb);
} else if (this.jvxlData.color != null ) {
this.colix=$I$(4).getColixS$S(this.jvxlData.color);
}if (this.colix == 0) this.colix=5;
this.colix=$I$(4,"getColixTranslucent3$H$Z$F",[this.colix, this.jvxlData.translucency != 0 , this.jvxlData.translucency]);
var translucencyLevel=(this.jvxlData.translucency == 0  ? NaN : this.jvxlData.translucency);
if (this.jvxlData.meshColor != null ) this.meshColix=$I$(4).getColixS$S(this.jvxlData.meshColor);
this.setJvxlDataRendering$();
this.isColorSolid=!this.jvxlData.isBicolorMap && this.jvxlData.vertexColors == null   && this.jvxlData.vertexColorMap == null  ;
if (this.colorEncoder == null ) return false;
if (this.jvxlData.vertexColorMap == null ) {
if (this.jvxlData.colorScheme != null ) {
var colorScheme=this.jvxlData.colorScheme;
var isTranslucent=colorScheme.startsWith$S("translucent ");
if (isTranslucent) {
colorScheme=colorScheme.substring$I(12);
translucencyLevel=NaN;
}this.colorEncoder.setColorScheme$S$Z(colorScheme, isTranslucent);
this.remapColors$org_jmol_viewer_Viewer$org_jmol_util_ColorEncoder$F(null, null, translucencyLevel);
}} else {
if (this.jvxlData.baseColor != null ) {
for (var i=this.vc; --i >= 0; ) this.vcs[i]=this.colix;

}for (var entry, $entry = this.jvxlData.vertexColorMap.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var bsMap=entry.getValue$();
var colix=$I$(4,"copyColixTranslucency$H$H",[this.colix, $I$(4,"getColixS$S",[entry.getKey$()])]);
for (var i=bsMap.nextSetBit$I(0); i >= 0; i=bsMap.nextSetBit$I(i + 1)) this.vcs[i]=colix;

}
}return true;
});

Clazz.newMeth(C$, 'setJvxlDataRendering$', function () {
if (this.jvxlData.rendering != null ) {
var tokens=$I$(15).getTokens$S(this.jvxlData.rendering);
for (var i=0; i < tokens.length; i++) this.setTokenProperty$I$Z($I$(16).getTokFromName$S(tokens[i]), true);

}});

Clazz.newMeth(C$, 'remapColors$org_jmol_viewer_Viewer$org_jmol_util_ColorEncoder$F', function (vwr, ce, translucentLevel) {
if (ce == null ) ce=this.colorEncoder;
if (ce == null ) ce=this.colorEncoder=Clazz.new_($I$(17,1).c$$org_jmol_util_ColorEncoder$org_jmol_viewer_Viewer,[null, vwr]);
this.colorEncoder=ce;
this.setColorCommand$();
if (Float.isNaN$F(translucentLevel)) {
translucentLevel=$I$(4).getColixTranslucencyLevel$H(this.colix);
} else {
this.colix=$I$(4).getColixTranslucent3$H$Z$F(this.colix, true, translucentLevel);
}var min=ce.lo;
var max=ce.hi;
var inherit=(this.vertexSource != null  && ce.currentPalette == 15 );
this.vertexColorMap=null;
this.pcs=null;
this.colorsExplicit=false;
this.jvxlData.baseColor=null;
this.jvxlData.vertexCount=this.vc;
if (this.vvs == null  || this.jvxlData.vertexCount == 0 ) return;
if (this.vcs == null  || this.vcs.length != this.vc ) this.allocVertexColixes$();
if (inherit) {
this.jvxlData.vertexDataOnly=true;
this.jvxlData.vertexColors=Clazz.array(Integer.TYPE, [this.vc]);
this.jvxlData.nVertexColors=this.vc;
var atoms=vwr.ms.at;
var gdata=vwr.gdata;
for (var i=this.mergeVertexCount0; i < this.vc; i++) {
var pt=this.vertexSource[i];
if (pt >= 0 && pt < atoms.length ) this.jvxlData.vertexColors[i]=gdata.getColorArgbOrGray$H(this.vcs[i]=$I$(4).copyColixTranslucency$H$H(this.colix, atoms[pt].colixAtom));
}
return;
}this.jvxlData.vertexColors=null;
this.jvxlData.vertexColorMap=null;
if (this.jvxlData.isBicolorMap) {
for (var i=this.mergeVertexCount0; i < this.vc; i++) this.vcs[i]=$I$(4).copyColixTranslucency$H$H(this.colix, this.vvs[i] < 0  ? this.jvxlData.minColorIndex : this.jvxlData.maxColorIndex);

return;
}this.jvxlData.isColorReversed=ce.isReversed;
if (max != 3.4028235E38 ) {
this.jvxlData.valueMappedToRed=min;
this.jvxlData.valueMappedToBlue=max;
}ce.setRange$F$F$Z(this.jvxlData.valueMappedToRed, this.jvxlData.valueMappedToBlue, this.jvxlData.isColorReversed);
var isTranslucent=$I$(4).isColixTranslucent$H(this.colix);
if (ce.isTranslucent) {
if (!isTranslucent) this.colix=$I$(4).getColixTranslucent3$H$Z$F(this.colix, true, 0.5);
isTranslucent=false;
}this.vcs=$I$(18).ensureLengthShort$HA$I(this.vcs, this.vc);
for (var i=this.vc; --i >= this.mergeVertexCount0; ) this.vcs[i]=ce.getColorIndex$F(this.vvs[i]);

this.setTranslucent$Z$F(isTranslucent, translucentLevel);
this.colorEncoder=ce;
var contours=this.getContours$();
if (contours != null ) {
for (var i=contours.length; --i >= 0; ) {
var value=(contours[i].get$I(2)).floatValue$();
var colix=(contours[i].get$I(3));
colix[0]=ce.getColorIndex$F(value);
var color=(contours[i].get$I(4));
color[0]=$I$(4).getArgb$H(colix[0]);
}
}if (this.contourValues != null ) {
this.contourColixes=Clazz.array(Short.TYPE, [this.contourValues.length]);
for (var i=0; i < this.contourValues.length; i++) this.contourColixes[i]=ce.getColorIndex$F(this.contourValues[i]);

this.setDiscreteColixes$FA$HA(null, null);
}this.jvxlData.isJvxlPrecisionColor=true;
$I$(8).jvxlCreateColorData$org_jmol_jvxl_data_JvxlData$FA(this.jvxlData, this.vvs);
this.setColorCommand$();
this.isColorSolid=false;
});

Clazz.newMeth(C$, 'reinitializeLightingAndColor$org_jmol_viewer_Viewer', function (vwr) {
this.initialize$I$javajs_util_T3A$javajs_util_P4(this.lighting, null, null);
if (this.colorEncoder != null  || this.jvxlData.isBicolorMap ) {
this.vcs=null;
this.remapColors$org_jmol_viewer_Viewer$org_jmol_util_ColorEncoder$F(vwr, null, NaN);
}});

Clazz.newMeth(C$, 'getBoundingBox$', function () {
return this.jvxlData.boundingBox;
});

Clazz.newMeth(C$, 'setBoundingBox$javajs_util_P3A', function (pts) {
this.jvxlData.boundingBox=pts;
});

Clazz.newMeth(C$, 'merge$org_jmol_jvxl_data_MeshData', function (m) {
var nV=this.vc + (m == null  ? 0 : m.vc);
if (this.pis == null ) this.pis=Clazz.array(Integer.TYPE, [0, 0]);
if (m != null  && m.pis == null  ) m.pis=Clazz.array(Integer.TYPE, [0, 0]);
var nP=(this.bsSlabDisplay == null  || this.pc == 0  ? this.pc : this.bsSlabDisplay.cardinality$()) + (m == null  || m.pc == 0  ? 0 : m.bsSlabDisplay == null  ? m.pc : m.bsSlabDisplay.cardinality$());
if (this.vs == null ) this.vs=Clazz.array($I$(7), [0]);
this.vs=$I$(18).ensureLength$O$I(this.vs, nV);
this.vvs=$I$(18).ensureLengthA$FA$I(this.vvs, nV);
var haveSources=(this.vertexSource != null  && (m == null  || m.vertexSource != null  ) );
this.vertexSource=$I$(18).ensureLengthI$IA$I(this.vertexSource, nV);
var newPolygons=$I$(18).newInt2$I(nP);
var ipt=C$.mergePolygons$org_jmol_util_MeshSurface$I$I$IAA(this, 0, 0, newPolygons);
if (m != null ) {
ipt=C$.mergePolygons$org_jmol_util_MeshSurface$I$I$IAA(m, ipt, this.vc, newPolygons);
for (var i=0; i < m.vc; i++, this.vc++) {
this.vs[this.vc]=m.vs[i];
this.vvs[this.vc]=m.vvs[i];
if (haveSources) this.vertexSource[this.vc]=m.vertexSource[i];
}
}this.pc=this.polygonCount0=nP;
this.vc=this.vertexCount0=nV;
if (nP > 0) this.resetSlab$();
this.pis=newPolygons;
});

Clazz.newMeth(C$, 'mergePolygons$org_jmol_util_MeshSurface$I$I$IAA', function (m, ipt, vertexCount, newPolygons) {
var p;
for (var i=0; i < m.pc; i++) {
if ((p=m.pis[i]) == null  || m.bsSlabDisplay != null  && !m.bsSlabDisplay.get$I(i)  ) continue;
newPolygons[ipt++]=m.pis[i];
if (vertexCount > 0) for (var j=0; j < 3; j++) p[j]+=vertexCount;

}
return ipt;
}, 1);

Clazz.newMeth(C$, 'getUnitCell$', function () {
return (this.unitCell != null  || (this.unitCell=this.vwr.ms.am[this.modelIndex].biosymmetry) != null   || (this.unitCell=this.vwr.ms.getUnitCell$I(this.modelIndex)) != null   || this.oabc != null  && (this.unitCell=$I$(11).getSymmetry$org_jmol_viewer_Viewer$S(this.vwr, "symmetry").getUnitCell$javajs_util_T3A$Z$S(this.oabc, true, null)) != null    ? this.unitCell : null);
});

Clazz.newMeth(C$, 'fixLattice$', function () {
if (this.getUnitCell$() == null ) return;
var minXYZ=Clazz.new_($I$(19,1));
var maxXYZ=$I$(19,"new3$I$I$I",[(this.lattice.x|0), (this.lattice.y|0), (this.lattice.z|0)]);
this.jvxlData.fixedLattice=this.lattice;
this.lattice=null;
$I$(20,"setMinMaxLatticeParameters$I$javajs_util_P3i$javajs_util_P3i$I",[(this.unitCell.getUnitCellInfoType$I(6)|0), minXYZ, maxXYZ, 0]);
var nCells=(maxXYZ.x - minXYZ.x) * (maxXYZ.y - minXYZ.y) * (maxXYZ.z - minXYZ.z) ;
var latticeOffset=Clazz.new_($I$(7,1));
var vc0=this.vc;
var vcNew=nCells * this.vc;
this.vs=$I$(18).arrayCopyPt$javajs_util_T3A$I(this.vs, vcNew);
this.vvs=(this.vvs == null  ? null : $I$(18).ensureLengthA$FA$I(this.vvs, vcNew));
var pc0=this.pc;
var pcNew=nCells * this.pc;
this.pis=$I$(18).arrayCopyII$IAA$I(this.pis, pcNew);
var off=0;
this.normixes=$I$(18).arrayCopyShort$HA$I(this.normixes, vcNew);
for (var tx=minXYZ.x; tx < maxXYZ.x; tx++) for (var ty=minXYZ.y; ty < maxXYZ.y; ty++) for (var tz=minXYZ.z; tz < maxXYZ.z; tz++) {
if (tx == 0 && ty == 0  && tz == 0 ) continue;
latticeOffset.set$F$F$F(tx, ty, tz);
this.unitCell.toCartesian$javajs_util_T3$Z(latticeOffset, false);
for (var i=0; i < vc0; i++) {
this.normixes[this.vc]=this.normixes[i];
var v=$I$(7).newP$javajs_util_T3(this.vs[i]);
v.add$javajs_util_T3(latticeOffset);
this.addVCVal$javajs_util_T3$F$Z(v, this.vvs[i], false);
}
off+=vc0;
for (var i=0; i < pc0; i++) {
var p=$I$(18).arrayCopyI$IA$I(this.pis[i], -1);
p[0]+=off;
p[1]+=off;
p[2]+=off;
this.addPolygon$IA$javajs_util_BS(p, null);
}
}


var xyzMin=Clazz.new_($I$(7,1));
var xyzMax=Clazz.new_($I$(7,1));
this.setBox$javajs_util_P3$javajs_util_P3(xyzMin, xyzMax);
this.jvxlData.boundingBox=Clazz.array($I$(7), -1, [xyzMin, xyzMax]);
});

Clazz.newMeth(C$, 'getMinDistance2ForVertexGrouping$', function () {
if (this.jvxlData.boundingBox != null  && this.jvxlData.boundingBox[0] != null  ) {
var d2=this.jvxlData.boundingBox[1].distanceSquared$javajs_util_T3(this.jvxlData.boundingBox[0]);
if (d2 < 5 ) return 1.0E-10;
}return 1.0E-8;
});

Clazz.newMeth(C$, 'getVisibleVertexBitSet$', function () {
var bs=this.getVisibleVBS$();
if (this.jvxlData.thisSet >= 0) for (var i=0; i < this.vc; i++) if (this.vertexSets[i] != this.jvxlData.thisSet) bs.clear$I(i);

return bs;
});

Clazz.newMeth(C$, 'updateCoordinates$javajs_util_M4$javajs_util_BS', function (m, bs) {
var doUpdate=(bs == null  || this.isModelConnected );
if (!doUpdate) for (var i=0; i < this.connectedAtoms.length; i++) if (this.connectedAtoms[i] >= 0 && bs.get$I(this.connectedAtoms[i]) ) {
doUpdate=true;
break;
}
if (!doUpdate) return;
if (this.isModelConnected) {
this.mat4=this.vwr.ms.am[this.modelIndex].mat4;
} else {
if (this.mat4 == null ) this.mat4=$I$(21).newM4$javajs_util_M4(null);
this.mat4.mul2$javajs_util_M4$javajs_util_M4(m, this.mat4);
}this.recalcAltVertices=true;
});

Clazz.newMeth(C$, 'getDataMinMax$', function () {
var min=3.4028235E38;
var max=1.4E-45;
for (var i=this.vvs.length; --i >= 0; ) {
var v=this.vvs[i];
if (v < min ) min=v;
if (v > max ) max=v;
}
return Clazz.array(Float.TYPE, -1, [min, max]);
});

Clazz.newMeth(C$, 'getDataRange$', function () {
return (this.jvxlData.jvxlPlane != null  && this.colorEncoder == null   ? null : Clazz.array(Float.TYPE, -1, [this.jvxlData.mappedDataMin, this.jvxlData.mappedDataMax, (this.jvxlData.isColorReversed ? this.jvxlData.valueMappedToBlue : this.jvxlData.valueMappedToRed), (this.jvxlData.isColorReversed ? this.jvxlData.valueMappedToRed : this.jvxlData.valueMappedToBlue)]));
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
