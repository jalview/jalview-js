(function(){var P$=Clazz.newPackage("org.jmol.shapespecial"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.V3','javajs.util.AU','org.jmol.shapespecial.Polyhedron','javajs.util.BS','Boolean','org.jmol.util.BSUtil','org.jmol.util.C','javajs.util.PT','javajs.util.Lst','javajs.util.P4','javajs.util.Measure','org.jmol.c.PAL','java.util.Arrays','org.jmol.util.Logger','org.jmol.api.Interface','org.jmol.util.Normix','java.util.Hashtable','javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Polyhedra", null, 'org.jmol.shape.AtomShape', 'java.util.Comparator');
C$.randomPoint=null;
C$.MAX_DISTANCE_TO_PLANE=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.randomPoint=$I$(1).new3$F$F$F(3141.0, 2718.0, 1414.0);
C$.MAX_DISTANCE_TO_PLANE=0.1;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.otherAtoms=null;
this.normalsT=null;
this.planesT=null;
this.polyhedronCount=0;
this.polyhedrons=null;
this.drawEdges=0;
this.radius=0;
this.radiusMin=0;
this.pointScale=0;
this.nVertices=0;
this.faceCenterOffset=0;
this.isCollapsed=false;
this.isFull=false;
this.iHaveCenterBitSet=false;
this.bondedOnly=false;
this.haveBitSetVertices=false;
this.centers=null;
this.thisID=null;
this.center=null;
this.bsVertices=null;
this.bsVertexCount=null;
this.useUnitCell=false;
this.nPoints=0;
this.planarParam=0;
this.info=null;
this.distanceRef=0;
this.modelIndex=0;
this.isAuto=false;
this.explicitFaces=null;
this.bsPolys=null;
this.vAB=null;
this.vAC=null;
this.vBC=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.otherAtoms=Clazz.array($I$(1), [498]);
this.normalsT=Clazz.array($I$(2), [251]);
this.planesT=$I$(3).newInt2$I(250);
this.polyhedrons=Clazz.array($I$(4), [32]);
this.bsPolys=Clazz.new_($I$(5));
this.vAB=Clazz.new_($I$(2));
this.vAC=Clazz.new_($I$(2));
this.vBC=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, ['compare$OA$OA','compare$','compare$TT$TT'], function (a, b) {
var da=(a[0] == null  ? 3.4028235E38 : (a[0]).floatValue$());
var db=(b[0] == null  ? 3.4028235E38 : (b[0]).floatValue$());
return (da < db  ? -1 : da > db  ? 1 : 0);
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if (this.thisID != null ) bs=Clazz.new_($I$(5));
if ("init" == propertyName) {
this.faceCenterOffset=0.25;
this.planarParam=NaN;
this.radius=this.radiusMin=this.pointScale=0.0;
this.nVertices=this.nPoints=0;
this.modelIndex=-1;
this.bsVertices=null;
this.thisID=null;
this.center=null;
this.centers=null;
this.info=null;
this.bsVertexCount=Clazz.new_($I$(5));
this.bondedOnly=this.isCollapsed=this.isFull=this.iHaveCenterBitSet=this.useUnitCell=this.isAuto=this.haveBitSetVertices=false;
if ($I$(6).TRUE === value ) this.drawEdges=0;
return;
}if ("definedFaces" == propertyName) {
p$1.setDefinedFaces$javajs_util_P3A$IAA.apply(this, [(value)[1], (value)[0]]);
return;
}if ("generate" == propertyName) {
if (!this.iHaveCenterBitSet && bs != null   && !bs.isEmpty$() ) {
this.centers=bs;
this.iHaveCenterBitSet=true;
}p$1.deletePolyhedra.apply(this, []);
p$1.buildPolyhedra.apply(this, []);
return;
}if ("thisID" == propertyName) {
this.thisID=value;
return;
}if ("center" == propertyName) {
this.center=value;
return;
}if ("offset" == propertyName) {
if (this.thisID != null ) p$1.offsetPolyhedra$javajs_util_P3.apply(this, [value]);
return;
}if ("scale" == propertyName) {
if (this.thisID != null ) p$1.scalePolyhedra$F.apply(this, [(value).floatValue$()]);
return;
}if ("model" == propertyName) {
this.modelIndex=(value).intValue$();
return;
}if ("collapsed" == propertyName) {
this.isCollapsed=true;
return;
}if ("full" == propertyName) {
this.isFull=true;
return;
}if ("nVertices" == propertyName) {
var n=(value).intValue$();
if (n < 0) {
if (-n >= this.nVertices) {
this.bsVertexCount.setBits$I$I(this.nVertices, 1 - n);
this.nVertices=-n;
}} else {
this.bsVertexCount.set$I(this.nVertices=n);
}return;
}if ("centers" == propertyName) {
this.centers=value;
this.iHaveCenterBitSet=true;
return;
}if ("unitCell" == propertyName) {
this.useUnitCell=true;
return;
}if ("to" == propertyName) {
this.bsVertices=value;
return;
}if ("toBitSet" == propertyName) {
this.bsVertices=value;
this.haveBitSetVertices=true;
return;
}if ("toVertices" == propertyName) {
var points=value;
this.nPoints=Math.min(points.length, 250);
for (var i=this.nPoints; --i >= 0; ) this.otherAtoms[i]=points[i];

return;
}if ("faceCenterOffset" == propertyName) {
this.faceCenterOffset=(value).floatValue$();
return;
}if ("distanceFactor" == propertyName) {
return;
}if ("planarParam" == propertyName) {
this.planarParam=(value).floatValue$();
return;
}if ("bonds" == propertyName) {
this.bondedOnly=true;
return;
}if ("info" == propertyName) {
this.info=value;
this.centers=(this.info.containsKey$O("center") ? null : $I$(7).newAndSetBit$I((this.info.get$O("atomIndex")).intValue));
this.iHaveCenterBitSet=(this.centers != null );
return;
}if ("delete" == propertyName) {
if (!this.iHaveCenterBitSet) this.centers=bs;
p$1.deletePolyhedra.apply(this, []);
return;
}if ("on" == propertyName) {
if (!this.iHaveCenterBitSet) this.centers=bs;
p$1.setVisible$Z.apply(this, [true]);
return;
}if ("off" == propertyName) {
if (!this.iHaveCenterBitSet) this.centers=bs;
p$1.setVisible$Z.apply(this, [false]);
return;
}if ("noedges" == propertyName) {
this.drawEdges=0;
return;
}if ("edges" == propertyName) {
this.drawEdges=1;
return;
}if ("edgesOnly" == propertyName) {
this.drawEdges=3;
return;
}if ("frontedges" == propertyName) {
this.drawEdges=2;
return;
}if (propertyName.indexOf$S("color") == 0) {
bs=("colorThis" == propertyName && this.iHaveCenterBitSet  ? this.centers : p$1.andBitSet$javajs_util_BS.apply(this, [bs]));
var isPhase=("colorPhase" == propertyName);
var cvalue=(isPhase ? (value)[1] : value);
var colixEdge=(isPhase ? $I$(8).getColix$I(((value)[0]).intValue$()) : 0);
var colix=$I$(8).getColixO$O(isPhase ? cvalue : value);
var p;
var bs1=p$1.findPolyBS$javajs_util_BS.apply(this, [bs]);
for (var i=bs1.nextSetBit$I(0); i >= 0; i=bs1.nextSetBit$I(i + 1)) {
p=this.polyhedrons[i];
if (p.id == null ) {
p.colixEdge=colixEdge;
} else {
p.colixEdge=colixEdge;
p.colix=colix;
}}
if (this.thisID != null ) return;
value=cvalue;
propertyName="color";
}if (propertyName.indexOf$S("translucency") == 0) {
var isTranslucent=(value.equals$O("translucent"));
if (this.thisID != null ) {
var bs1=p$1.findPolyBS$javajs_util_BS.apply(this, [bs]);
var p;
for (var i=bs1.nextSetBit$I(0); i >= 0; i=bs1.nextSetBit$I(i + 1)) {
p=this.polyhedrons[i];
p.colix=$I$(8).getColixTranslucent3$H$Z$F(p.colix, isTranslucent, this.translucentLevel);
if (p.colixEdge != 0) p.colixEdge=$I$(8).getColixTranslucent3$H$Z$F(p.colixEdge, isTranslucent, this.translucentLevel);
}
return;
}bs=("translucentThis".equals$O(value) && this.iHaveCenterBitSet  ? this.centers : p$1.andBitSet$javajs_util_BS.apply(this, [bs]));
if (value.equals$O("translucentThis")) value="translucent";
}if ("radius" == propertyName) {
var v=(value).floatValue$();
if (v <= 0 ) {
this.isAuto=true;
v=(v == 0  ? 6.0 : -v);
}this.radius=v;
return;
}if ("radius1" == propertyName) {
this.radiusMin=this.radius;
this.radius=(value).floatValue$();
return;
}if ("points" == propertyName) {
this.pointScale=(value).floatValue$();
p$1.pointsPolyhedra$javajs_util_BS$F.apply(this, [bs, this.pointScale]);
return;
}if (propertyName == "deleteModelAtoms") {
var modelIndex=((value)[2])[0];
for (var i=this.polyhedronCount; --i >= 0; ) {
var p=this.polyhedrons[i];
p.info=null;
if (p.modelIndex > modelIndex) {
p.modelIndex--;
} else if (p.modelIndex == modelIndex) {
this.polyhedronCount--;
this.polyhedrons=$I$(3).deleteElements$O$I$I(this.polyhedrons, i, 1);
}}
}this.setPropAS$S$O$javajs_util_BS(propertyName, value, bs);
});

Clazz.newMeth(C$, 'setDefinedFaces$javajs_util_P3A$IAA', function (points, faces) {
var bsUsed=Clazz.new_($I$(5));
for (var i=faces.length; --i >= 0; ) {
var face=faces[i];
for (var j=face.length; --j >= 0; ) bsUsed.set$I(face[j]);

}
var bsNot=$I$(7).newBitSet2$I$I(0, bsUsed.length$());
bsNot.andNot$javajs_util_BS(bsUsed);
var nNot=bsNot.cardinality$();
if (nNot > 0) {
var np=points.length;
var mapOldToNew=Clazz.array(Integer.TYPE, [np]);
var mapNewToOld=Clazz.array(Integer.TYPE, [np]);
var n=0;
for (var i=0; i < np; i++) if (!bsNot.get$I(i)) {
mapNewToOld[n]=i;
mapOldToNew[i]=n++;
}
var pnew=Clazz.array($I$(1), [n]);
for (var i=0; i < n; i++) pnew[i]=points[mapNewToOld[i]];

points=pnew;
for (var i=faces.length; --i >= 0; ) {
var face=faces[i];
for (var j=face.length; --j >= 0; ) face[j]=mapOldToNew[face[j]];

}
}var n=this.nPoints=points.length;
this.center=Clazz.new_($I$(1));
this.otherAtoms=Clazz.array($I$(1), [n + 1]);
if (n > 0) {
this.otherAtoms[n]=this.center;
for (var i=0; i < n; i++) this.center.add$javajs_util_T3(this.otherAtoms[i]=points[i]);

this.center.scale$F(1.0 / n);
}this.explicitFaces=faces;
}, p$1);

Clazz.newMeth(C$, 'pointsPolyhedra$javajs_util_BS$F', function (bs, pointScale) {
bs=p$1.findPolyBS$javajs_util_BS.apply(this, [this.thisID == null  ? bs : null]);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) this.polyhedrons[i].pointScale=pointScale;

}, p$1);

Clazz.newMeth(C$, 'scalePolyhedra$F', function (scale) {
var bs=p$1.findPolyBS$javajs_util_BS.apply(this, [null]);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) this.polyhedrons[i].scale=scale;

}, p$1);

Clazz.newMeth(C$, 'offsetPolyhedra$javajs_util_P3', function (value) {
var bs=p$1.findPolyBS$javajs_util_BS.apply(this, [null]);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) this.polyhedrons[i].setOffset$javajs_util_P3($I$(1).newP$javajs_util_T3(value));

}, p$1);

Clazz.newMeth(C$, 'getIndexFromName$S', function (id) {
if (id != null ) for (var i=this.polyhedronCount; --i >= 0; ) if (id.equalsIgnoreCase$S(this.polyhedrons[i].id)) return i;

return -1;
});

Clazz.newMeth(C$, 'getProperty$S$I', function (property, i) {
var info=this.polyhedrons[i].getInfo$org_jmol_viewer_Viewer$S(this.vwr, property);
return (property.equalsIgnoreCase$S("info") ? info : info.get$O(property));
});

Clazz.newMeth(C$, 'getPropertyData$S$OA', function (property, data) {
var iatom=(Clazz.instanceOf(data[0], "java.lang.Integer") ? (data[0]).intValue$() : -2147483648);
var id=(Clazz.instanceOf(data[0], "java.lang.String") ? data[0] : null);
var p;
if (property == "index") {
var i=this.getIndexFromName$S(id);
if (i >= 0) data[1]=Integer.valueOf$I(i);
return (i >= 0);
}if (property == "checkID") {
return p$1.checkID$S.apply(this, [id]);
}if (property == "getAtomsWithin") {
p=p$1.findPoly$S$I$Z.apply(this, [id, iatom, true]);
if (p == null ) return false;
data[2]=p$1.getAtomsWithin$org_jmol_shapespecial_Polyhedron$F.apply(this, [p, (data[1]).floatValue$()]);
return true;
}if (property == "info") {
p=p$1.findPoly$S$I$Z.apply(this, [id, iatom, true]);
if (p == null ) return false;
data[1]=p.getInfo$org_jmol_viewer_Viewer$S(this.vwr, "info");
return true;
}if (property == "points") {
p=p$1.findPoly$S$I$Z.apply(this, [id, iatom, false]);
if (p == null ) return false;
data[1]=p.vertices;
return true;
}if (property == "symmetry") {
var bsSelected=data[2];
var s="";
for (var i=0; i < this.polyhedronCount; i++) {
p=this.polyhedrons[i];
if (p.id == null  ? id != null  || bsSelected != null  && !bsSelected.get$I(p.centralAtom.i)   : id != null  && !$I$(9).isLike$S$S(p.id, id) ) continue;
s += (i + 1) + "\t" + p.getSymmetry$org_jmol_viewer_Viewer$Z(this.vwr, true) + "\n" ;
}
data[1]=s;
return true;
}if (property == "move") {
var mat=data[1];
if (mat == null ) return false;
var bsMoved=data[0];
var bs=p$1.findPolyBS$javajs_util_BS.apply(this, [bsMoved]);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) this.polyhedrons[i].move$javajs_util_M4$javajs_util_BS(mat, bsMoved);

return true;
}if (property == "getCenters") {
var smiles=data[1];
var bsSelected=data[2];
var sm=(smiles == null  ? null : this.vwr.getSmilesMatcher$());
if (sm != null ) smiles=sm.cleanSmiles$S(smiles);
var nv=(smiles != null  ? $I$(9).countChar$S$C(smiles, "*") : iatom);
if (nv == 0) nv=-2147483648;
var bs=Clazz.new_($I$(5));
if (smiles == null  || sm != null  ) for (var i=this.polyhedronCount; --i >= 0; ) {
p=this.polyhedrons[i];
if (p.id != null ) continue;
if (nv != (nv > 0 ? p.nVertices : nv > -2147483648 ? -p.faces.length : nv)) continue;
iatom=p.centralAtom.i;
if (bsSelected != null  && !bsSelected.get$I(iatom) ) continue;
if (smiles == null ) {
bs.set$I(iatom);
continue;
}p.getSymmetry$org_jmol_viewer_Viewer$Z(this.vwr, false);
var smiles0=p.polySmiles;
try {
if (sm.areEqual$S$S(smiles, smiles0) > 0) bs.set$I(iatom);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}
data[1]=bs;
return true;
}if (property == "allInfo") {
var info=Clazz.new_($I$(10));
for (var i=this.polyhedronCount; --i >= 0; ) info.addLast$TV(this.polyhedrons[i].getInfo$org_jmol_viewer_Viewer$S(this.vwr, "info"));

data[1]=info;
return true;
}return this.getPropShape$S$OA(property, data);
});

Clazz.newMeth(C$, 'getAtomsWithin$org_jmol_shapespecial_Polyhedron$F', function (p, offset) {
var faces=p.faces;
var vertices=p.vertices;
var center=(p.center == null  ? p.centralAtom : p.center);
if (p.planes == null ) {
var vNorm=Clazz.new_($I$(2));
var vAB=Clazz.new_($I$(2));
p.planes=Clazz.array($I$(11), [faces.length]);
for (var iface=faces.length; --iface >= 0; ) {
var plane=p.planes[iface]=Clazz.new_($I$(11));
$I$(12).getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4(vertices[faces[iface][0]], vertices[faces[iface][1]], vertices[faces[iface][2]], vNorm, vAB, plane);
}
}var maxDistance=0;
for (var i=p.nVertices; --i >= 0; ) {
var d=vertices[i].distance$javajs_util_T3(center);
if (d > maxDistance ) maxDistance=d;
}
var bsAtoms=$I$(7).copy$javajs_util_BS(this.vwr.getAtomsNearPt$F$javajs_util_P3(maxDistance + offset, center));
var atoms=this.vwr.ms.at;
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
for (var f=faces.length; --f >= 0; ) {
System.out.println$F($I$(12).distanceToPlane$javajs_util_P4$javajs_util_T3(p.planes[f], atoms[i]));
if ($I$(12).distanceToPlane$javajs_util_P4$javajs_util_T3(p.planes[f], atoms[i]) > offset + 0.001 ) {
bsAtoms.clear$I(i);
break;
}}
}
return bsAtoms;
}, p$1);

Clazz.newMeth(C$, 'checkID$S', function (thisID) {
this.thisID=thisID;
return (p$1.findPolyBS$javajs_util_BS.apply(this, [null]).cardinality$() > 0);
}, p$1);

Clazz.newMeth(C$, 'findPoly$S$I$Z', function (id, iatom, allowCollapsed) {
for (var i=this.polyhedronCount; --i >= 0; ) {
var p=this.polyhedrons[i];
if (p.id == null  ? p.centralAtom.i == iatom : p.id.equalsIgnoreCase$S(id)) return (allowCollapsed || !this.polyhedrons[i].collapsed  ? this.polyhedrons[i] : null);
}
return null;
}, p$1);

Clazz.newMeth(C$, 'findPolyBS$javajs_util_BS', function (bsCenters) {
var bs=this.bsPolys;
bs.clearAll$();
var p;
for (var i=this.polyhedronCount; --i >= 0; ) {
p=this.polyhedrons[i];
if (p.id == null  ? bsCenters != null  && bsCenters.get$I(p.centralAtom.i)  : p$1.isMatch$S.apply(this, [p.id])) bs.set$I(i);
}
return bs;
}, p$1);

Clazz.newMeth(C$, 'isMatch$S', function (id) {
return this.thisID != null  && $I$(9).isMatch$S$S$Z$Z(id.toLowerCase$(), this.thisID.toLowerCase$(), true, true) ;
}, p$1);

Clazz.newMeth(C$, 'getShapeDetail$', function () {
var lst=Clazz.new_($I$(10));
for (var i=0; i < this.polyhedronCount; i++) lst.addLast$TV(this.polyhedrons[i].getInfo$org_jmol_viewer_Viewer$S(this.vwr, "info"));

return lst;
});

Clazz.newMeth(C$, 'andBitSet$javajs_util_BS', function (bs) {
var bsCenters=Clazz.new_($I$(5));
for (var i=this.polyhedronCount; --i >= 0; ) {
var p=this.polyhedrons[i];
if (p.id == null ) bsCenters.set$I(p.centralAtom.i);
}
bsCenters.and$javajs_util_BS(bs);
return bsCenters;
}, p$1);

Clazz.newMeth(C$, 'deletePolyhedra', function () {
var newCount=0;
var pid=($b$[0] = $I$(13).pidOf$O(null), $b$[0]);
var bs=p$1.findPolyBS$javajs_util_BS.apply(this, [this.centers]);
for (var i=0; i < this.polyhedronCount; ++i) {
var p=this.polyhedrons[i];
if (bs.get$I(i)) {
if (this.colixes != null  && p.id == null  ) this.setColixAndPalette$H$B$I(0, ($b$[0] = pid, $b$[0]), p.centralAtom.i);
continue;
}this.polyhedrons[newCount++]=p;
}
for (var i=newCount; i < this.polyhedronCount; ++i) this.polyhedrons[i]=null;

this.polyhedronCount=newCount;
}, p$1);

Clazz.newMeth(C$, 'setVisible$Z', function (visible) {
var bs=p$1.findPolyBS$javajs_util_BS.apply(this, [this.centers]);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var p=this.polyhedrons[i];
p.visible=visible;
if (p.centralAtom != null ) this.atoms[p.centralAtom.i].setShapeVisibility$I$Z(this.vf, visible);
}
}, p$1);

Clazz.newMeth(C$, 'buildPolyhedra', function () {
var p=null;
if (this.thisID != null ) {
if ($I$(9).isWild$S(this.thisID)) return;
if (this.center != null ) {
if (this.nPoints == 0) p$1.setPointsFromBitset.apply(this, []);
p=p$1.validatePolyhedron$javajs_util_P3$I.apply(this, [this.center, this.nPoints]);
}} else if (this.info != null  && this.info.containsKey$O("id") ) {
var o=this.info.get$O("id");
this.thisID=(Clazz.instanceOf(o, "org.jmol.script.SV") ? (o).asString$() : o.toString());
p=Clazz.new_($I$(4)).setInfo$org_jmol_viewer_Viewer$java_util_Map$org_jmol_modelset_AtomA(this.vwr, this.info, this.vwr.ms.at);
}if (p != null ) {
p$1.addPolyhedron$org_jmol_shapespecial_Polyhedron.apply(this, [p]);
return;
}var useBondAlgorithm=(this.radius == 0  || this.bondedOnly );
var buildMode=(this.info != null  ? 6 : this.nPoints > 0 ? 2 : this.haveBitSetVertices ? 4 : this.useUnitCell ? 5 : useBondAlgorithm ? 1 : 3);
var iter=(buildMode == 3 ? this.ms.getSelectedAtomIterator$javajs_util_BS$Z$Z$Z$Z(null, false, false, false, false) : null);
for (var i=this.centers.nextSetBit$I(0); i >= 0; i=this.centers.nextSetBit$I(i + 1)) {
var atom=this.atoms[i];
p=null;
switch (buildMode) {
case 4:
p=p$1.constructBitSetPolyhedron$org_jmol_modelset_Atom.apply(this, [atom]);
break;
case 5:
p=p$1.constructUnitCellPolygon$org_jmol_modelset_Atom$Z.apply(this, [atom, useBondAlgorithm]);
break;
case 1:
p=p$1.constructBondsPolyhedron$org_jmol_modelset_Atom$I.apply(this, [atom, 0]);
break;
case 3:
this.vwr.setIteratorForAtom$org_jmol_api_AtomIndexIterator$I$F(iter, i, this.radius);
p=p$1.constructRadiusPolyhedron$org_jmol_modelset_Atom$org_jmol_api_AtomIndexIterator.apply(this, [atom, iter]);
break;
case 6:
p=Clazz.new_($I$(4)).setInfo$org_jmol_viewer_Viewer$java_util_Map$org_jmol_modelset_AtomA(this.vwr, this.info, this.vwr.ms.at);
break;
case 2:
p=p$1.validatePolyhedron$javajs_util_P3$I.apply(this, [atom, this.nPoints]);
break;
}
if (p != null ) p$1.addPolyhedron$org_jmol_shapespecial_Polyhedron.apply(this, [p]);
if (this.haveBitSetVertices) break;
}
if (iter != null ) iter.release$();
}, p$1);

Clazz.newMeth(C$, 'setPointsFromBitset', function () {
if (this.bsVertices != null ) for (var i=this.bsVertices.nextSetBit$I(0); i >= 0 && this.nPoints < 250 ; i=this.bsVertices.nextSetBit$I(i + 1)) this.otherAtoms[this.nPoints++]=this.atoms[i];

}, p$1);

Clazz.newMeth(C$, 'addPolyhedron$org_jmol_shapespecial_Polyhedron', function (p) {
if (this.polyhedronCount == this.polyhedrons.length) this.polyhedrons=$I$(3).doubleLength$O(this.polyhedrons);
this.polyhedrons[this.polyhedronCount++]=p;
}, p$1);

Clazz.newMeth(C$, 'constructBondsPolyhedron$org_jmol_modelset_Atom$I', function (atom, otherAtomCount) {
this.distanceRef=0;
if (otherAtomCount == 0) {
var bonds=atom.bonds;
if (bonds == null ) return null;
var r2=this.radius * this.radius;
var r1=this.radiusMin * this.radiusMin;
var r;
for (var i=bonds.length; --i >= 0; ) {
var bond=bonds[i];
if (!bond.isCovalent$()) continue;
var other=bond.getOtherAtom$org_jmol_modelset_Atom(atom);
if (this.bsVertices != null  && !this.bsVertices.get$I(other.i)  || this.radius > 0  && ((r=other.distanceSquared$javajs_util_T3(atom)) > r2  || r < r1  )  ) continue;
this.otherAtoms[otherAtomCount++]=other;
if (otherAtomCount >= 250) return null;
}
}if (this.isAuto) otherAtomCount=p$1.setGap$javajs_util_P3$I.apply(this, [atom, otherAtomCount]);
return (otherAtomCount < 3 || this.nVertices > 0 && !this.bsVertexCount.get$I(otherAtomCount)   ? null : p$1.validatePolyhedron$javajs_util_P3$I.apply(this, [atom, otherAtomCount]));
}, p$1);

Clazz.newMeth(C$, 'constructUnitCellPolygon$org_jmol_modelset_Atom$Z', function (atom, useBondAlgorithm) {
var unitcell=this.vwr.ms.getUnitCellForAtom$I(atom.i);
if (unitcell == null ) return null;
var bsAtoms=$I$(7).copy$javajs_util_BS(this.vwr.getModelUndeletedAtomsBitSet$I(atom.mi));
if (this.bsVertices != null ) bsAtoms.and$javajs_util_BS(this.bsVertices);
if (bsAtoms.isEmpty$()) return null;
var iter=unitcell.getIterator$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_AtomA$javajs_util_BS$F(this.vwr, atom, this.atoms, bsAtoms, useBondAlgorithm ? 5.0 : this.radius);
if (!useBondAlgorithm) return p$1.constructRadiusPolyhedron$org_jmol_modelset_Atom$org_jmol_api_AtomIndexIterator.apply(this, [atom, iter]);
var myBondingRadius=atom.getBondingRadius$();
if (myBondingRadius == 0 ) return null;
var bondTolerance=this.vwr.getFloat$I(570425348);
var minBondDistance=(this.radiusMin == 0  ? this.vwr.getFloat$I(570425364) : this.radiusMin);
var minBondDistance2=minBondDistance * minBondDistance;
var otherAtomCount=0;
 outer : while (iter.hasNext$()){
var other=this.atoms[iter.next$()];
var otherRadius=other.getBondingRadius$();
var pt=iter.getPosition$();
var distance2=atom.distanceSquared$javajs_util_T3(pt);
if (!this.vwr.ms.isBondable$F$F$F$F$F(myBondingRadius, otherRadius, distance2, minBondDistance2, bondTolerance)) continue;
for (var i=0; i < otherAtomCount; i++) if (this.otherAtoms[i].distanceSquared$javajs_util_T3(pt) < 0.01 ) continue outer;

this.otherAtoms[otherAtomCount++]=pt;
if (otherAtomCount >= 250) return null;
}
return p$1.constructBondsPolyhedron$org_jmol_modelset_Atom$I.apply(this, [atom, otherAtomCount]);
}, p$1);

Clazz.newMeth(C$, 'constructBitSetPolyhedron$org_jmol_modelset_Atom', function (atom) {
this.bsVertices.clear$I(atom.i);
if (this.bsVertices.cardinality$() >= 250) return null;
var otherAtomCount=0;
this.distanceRef=0;
for (var i=this.bsVertices.nextSetBit$I(0); i >= 0; i=this.bsVertices.nextSetBit$I(i + 1)) this.otherAtoms[otherAtomCount++]=this.atoms[i];

return p$1.validatePolyhedron$javajs_util_P3$I.apply(this, [atom, otherAtomCount]);
}, p$1);

Clazz.newMeth(C$, 'constructRadiusPolyhedron$org_jmol_modelset_Atom$org_jmol_api_AtomIndexIterator', function (atom, iter) {
var otherAtomCount=0;
this.distanceRef=this.radius;
var r2=this.radius * this.radius;
var r2min=this.radiusMin * this.radiusMin;
 outer : while (iter.hasNext$()){
var other=this.atoms[iter.next$()];
var pt=iter.getPosition$();
if (pt == null ) {
pt=other;
if (this.bsVertices != null  && !this.bsVertices.get$I(other.i) ) continue;
}var r=atom.distanceSquared$javajs_util_T3(pt);
if (other.altloc != atom.altloc && other.altloc.$c() != 0   && atom.altloc.$c() != 0   || r > r2   || r < r2min  ) continue;
if (otherAtomCount == 250) break;
for (var i=0; i < otherAtomCount; i++) if (this.otherAtoms[i].distanceSquared$javajs_util_T3(pt) < 0.01 ) continue outer;

this.otherAtoms[otherAtomCount++]=pt;
}
if (this.isAuto) otherAtomCount=p$1.setGap$javajs_util_P3$I.apply(this, [atom, otherAtomCount]);
return (otherAtomCount < 3 || this.nVertices > 0 && !this.bsVertexCount.get$I(otherAtomCount)   ? null : p$1.validatePolyhedron$javajs_util_P3$I.apply(this, [atom, otherAtomCount]));
}, p$1);

Clazz.newMeth(C$, 'setGap$javajs_util_P3$I', function (atom, otherAtomCount) {
if (otherAtomCount < 4) return otherAtomCount;
var dist=Clazz.array(java.lang.Object, [250, 2]);
for (var i=0; i < otherAtomCount; i++) dist[i][0]=Float.valueOf$F(atom.distance$javajs_util_T3((dist[i][1]=this.otherAtoms[i])));

$I$(14).sort$TTA$java_util_Comparator(dist, this);
var maxGap=0;
var iMax=0;
var n=otherAtomCount;
var dlast=(dist[0][0]).floatValue$();
this.otherAtoms[0]=dist[0][1];
for (var i=1; i < n; i++) {
var d=(dist[i][0]).floatValue$();
var gap=d - dlast;
this.otherAtoms[i]=dist[i][1];
if ($I$(15).debugging) $I$(15).info$S("polyhedron d=" + new Float(d).toString() + " " + this.otherAtoms[i] );
if (gap > maxGap ) {
if ($I$(15).debugging) $I$(15).info$S("polyhedron maxGap=" + new Float(gap).toString() + " for i=" + i + " d=" + new Float(d).toString() + " " + this.otherAtoms[i] );
maxGap=gap;
iMax=i;
}dlast=d;
}
return (iMax == 0 ? otherAtomCount : iMax);
}, p$1);

Clazz.newMeth(C$, 'validatePolyhedron$javajs_util_P3$I', function (atomOrPt, vertexCount) {
var points=this.otherAtoms;
var faces=this.explicitFaces;
var faceTriangles;
var normals;
var collapsed=this.isCollapsed;
var triangleCount=0;
var bsCenterPlanes=Clazz.new_($I$(5));
var triangles;
if (faces != null ) {
collapsed=false;
faceTriangles=$I$(3).newInt2$I(faces.length);
normals=Clazz.array($I$(2), [faces.length]);
for (var i=faces.length; --i >= 0; ) faces[i]=p$1.fixExplicitFaceWinding$IA$I$javajs_util_P3A$javajs_util_V3A.apply(this, [faces[i], i, points, normals]);

triangles=($I$(16).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.util.MeshCapper", this.vwr, "script")).set$org_jmol_util_MeshSlicer(null).triangulateFaces$IAA$javajs_util_P3A$IAA(faces, points, faceTriangles);
triangleCount=triangles.length;
} else {
this.nPoints=vertexCount + 1;
var ni=vertexCount - 2;
var nj=vertexCount - 1;
var planarParam=(Float.isNaN$F(this.planarParam) ? 0.98 : this.planarParam);
points[vertexCount]=atomOrPt;
var ptAve=$I$(1).newP$javajs_util_T3(atomOrPt);
for (var i=0; i < vertexCount; i++) ptAve.add$javajs_util_T3(points[i]);

ptAve.scale$F(1.0 / (vertexCount + 1));
var ptRef=$I$(1).newP$javajs_util_T3(ptAve);
var bsThroughCenter=Clazz.new_($I$(5));
if (this.thisID == null ) for (var pt=0, i=0; i < ni; i++) for (var j=i + 1; j < nj; j++) for (var k=j + 1; k < vertexCount; k++, pt++) if (p$1.isPlanar$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3.apply(this, [points[i], points[j], points[k], ptRef])) bsThroughCenter.set$I(pt);



triangles=this.planesT;
var pTemp=Clazz.new_($I$(11));
var nTemp=Clazz.new_($I$(2));
var offset=this.faceCenterOffset;
var fmax=247;
var vmax=250;
var bsTemp=$I$(17).newVertexBitSet$();
normals=this.normalsT;
var htNormMap=Clazz.new_($I$(18));
var htEdgeMap=Clazz.new_($I$(18));
var lstRejected=(this.isFull ? Clazz.new_($I$(10)) : null);
var edgeTest=Clazz.array(java.lang.Object, [3]);
var vAC=this.vAC;
for (var i=0, pt=0; i < ni; i++) for (var j=i + 1; j < nj; j++) {
for (var k=j + 1; k < vertexCount; k++, pt++) {
if (triangleCount >= fmax) {
$I$(15).error$S("Polyhedron error: maximum face(" + fmax + ") -- reduce RADIUS" );
return null;
}if (this.nPoints >= vmax) {
$I$(15).error$S("Polyhedron error: maximum vertex count(" + vmax + ") -- reduce RADIUS" );
return null;
}var isThroughCenter=bsThroughCenter.get$I(pt);
var rpt=(isThroughCenter ? C$.randomPoint : ptAve);
var normal=Clazz.new_($I$(2));
var isWindingOK=$I$(12).getNormalFromCenter$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z$javajs_util_V3$javajs_util_V3(rpt, points[i], points[j], points[k], !isThroughCenter, normal, vAC);
var t=Clazz.array(Integer.TYPE, -1, [isWindingOK ? i : j, isWindingOK ? j : i, k, -7]);
var err=p$1.checkFacet$javajs_util_P3A$I$IA$I$javajs_util_V3$javajs_util_P4$javajs_util_V3$javajs_util_V3$java_util_Map$java_util_Map$F$javajs_util_BS$OA.apply(this, [points, vertexCount, t, triangleCount, normal, pTemp, nTemp, vAC, htNormMap, htEdgeMap, planarParam, bsTemp, edgeTest]);
if (err != 0 ) {
if (this.isFull && err != 3.4028235E38   && err < 0.5  ) {
t[3]=((err * 100)|0);
lstRejected.addLast$TV(t);
}continue;
}normals[triangleCount]=normal;
triangles[triangleCount]=t;
if (isThroughCenter) {
bsCenterPlanes.set$I(triangleCount++);
} else if (collapsed) {
points[this.nPoints]=Clazz.new_($I$(1));
points[this.nPoints].scaleAdd2$F$javajs_util_T3$javajs_util_T3(offset, normal, atomOrPt);
ptRef.setT$javajs_util_T3(points[this.nPoints]);
p$1.addFacet$I$I$I$javajs_util_P3$javajs_util_P3A$javajs_util_V3A$IAA$I$I$Z$javajs_util_V3.apply(this, [i, j, k, ptRef, points, normals, triangles, triangleCount++, this.nPoints, isWindingOK, vAC]);
p$1.addFacet$I$I$I$javajs_util_P3$javajs_util_P3A$javajs_util_V3A$IAA$I$I$Z$javajs_util_V3.apply(this, [k, i, j, ptRef, points, normals, triangles, triangleCount++, this.nPoints, isWindingOK, vAC]);
p$1.addFacet$I$I$I$javajs_util_P3$javajs_util_P3A$javajs_util_V3A$IAA$I$I$Z$javajs_util_V3.apply(this, [j, k, i, ptRef, points, normals, triangles, triangleCount++, this.nPoints, isWindingOK, vAC]);
this.nPoints++;
} else {
triangleCount++;
}}
}

this.nPoints--;
if ($I$(15).debugging) {
$I$(15).info$S("Polyhedron planeCount=" + triangleCount + " nPoints=" + this.nPoints );
for (var i=0; i < triangleCount; i++) $I$(15).info$S("Polyhedron " + $I$(9).toJSON$S$O("face[" + i + "]" , triangles[i]));

}faces=p$1.getFaces$IAA$I$java_util_Map.apply(this, [triangles, triangleCount, htNormMap]);
faceTriangles=p$1.getFaceTriangles$I$java_util_Map$I.apply(this, [faces.length, htNormMap, triangleCount]);
}return Clazz.new_($I$(4)).set$S$I$javajs_util_P3$javajs_util_P3A$I$I$IAA$I$IAA$IAA$javajs_util_V3A$javajs_util_BS$Z$F$F(this.thisID, this.modelIndex, atomOrPt, points, this.nPoints, vertexCount, triangles, triangleCount, faces, faceTriangles, normals, bsCenterPlanes, collapsed, this.distanceRef, this.pointScale);
}, p$1);

Clazz.newMeth(C$, 'fixExplicitFaceWinding$IA$I$javajs_util_P3A$javajs_util_V3A', function (face, ipt, points, normals) {
var n=face.length;
for (var i=0, nlast=n - 2; i < nlast; i++) {
var a=points[face[i]];
var b=points[face[(i + 1) % n]];
var c=points[face[(i + 2) % n]];
if ($I$(12).computeAngleABC$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(a, b, c, true) < 178 ) {
if (!$I$(12).getNormalFromCenter$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z$javajs_util_V3$javajs_util_V3(this.center, a, b, c, true, normals[ipt]=Clazz.new_($I$(2)), this.vAC)) face=$I$(3).arrayCopyRangeRevI$IA$I$I(face, 0, -1);
break;
}}
return face;
}, p$1);

Clazz.newMeth(C$, 'getFaceTriangles$I$java_util_Map$I', function (n, htNormMap, triangleCount) {
var faceTriangles=$I$(3).newInt2$I(n);
if (triangleCount == n) {
for (var i=triangleCount; --i >= 0; ) faceTriangles[i]=Clazz.array(Integer.TYPE, -1, [i]);

return faceTriangles;
}var i=0;
for (var e, $e = htNormMap.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var eo=e.getValue$();
if (eo[2] != null  && eo[2] !== e.getKey$()  ) continue;
var lst=e.getValue$()[1];
n=lst.size$();
var a=Clazz.array(Integer.TYPE, [n]);
for (var j=n; --j >= 0; ) a[j]=lst.get$I(j).intValue$();

faceTriangles[i++]=a;
}
return faceTriangles;
}, p$1);

Clazz.newMeth(C$, 'addFacet$I$I$I$javajs_util_P3$javajs_util_P3A$javajs_util_V3A$IAA$I$I$Z$javajs_util_V3', function (i, j, k, ptRef, points, normals, faces, planeCount, nRef, isWindingOK, vTemp) {
var normal=Clazz.new_($I$(2));
var ii=isWindingOK ? i : j;
var jj=isWindingOK ? j : i;
$I$(12).getNormalFromCenter$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z$javajs_util_V3$javajs_util_V3(points[k], ptRef, points[ii], points[jj], false, normal, vTemp);
normals[planeCount]=normal;
faces[planeCount]=Clazz.array(Integer.TYPE, -1, [nRef, ii, jj, -2]);
}, p$1);

Clazz.newMeth(C$, 'checkFacet$javajs_util_P3A$I$IA$I$javajs_util_V3$javajs_util_P4$javajs_util_V3$javajs_util_V3$java_util_Map$java_util_Map$F$javajs_util_BS$OA', function (points, nPoints, t, index, norm, pTemp, vNorm, vAC, htNormMap, htEdgeMap, planarParam, bsTemp, edgeTest) {
var i0=t[0];
$I$(12).getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4(points[i0], points[t[1]], points[t[2]], vNorm, vAC, pTemp);
var pt=points[i0];
for (var j=0; j < nPoints; j++) {
if (j == i0) continue;
vAC.sub2$javajs_util_T3$javajs_util_T3(points[j], pt);
vAC.normalize$();
var v=vAC.dot$javajs_util_T3(vNorm);
if (v > 0.05 ) {
return v;
}if ($I$(15).debugging) $I$(15).info$S("checkFacet " + j + " " + new Float(v).toString() + " " + $I$(9).toJSON$S$O(null, t) );
}
var normix=Integer.valueOf$I($I$(17).getNormixV$javajs_util_V3$javajs_util_BS(norm, bsTemp));
var o=htNormMap.get$O(normix);
if (o == null ) {
var norms=$I$(17).getVertexVectors$();
for (var e, $e = htNormMap.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var n=e.getKey$();
if (norms[n.intValue$()].dot$javajs_util_T3(norm) > planarParam ) {
o=e.getValue$();
o[2]=n;
htNormMap.put$TK$TV(normix, o);
break;
}}
if (o == null ) htNormMap.put$TK$TV(normix, o=Clazz.array(java.lang.Object, -1, [Clazz.new_($I$(10)), Clazz.new_($I$(10)), normix]));
}normix=o[2];
var faceEdgeList=o[0];
var faceTriList=o[1];
for (var i=0; i < 3; i++) if ((edgeTest[i]=p$1.addEdge$javajs_util_Lst$java_util_Map$Integer$IA$I$javajs_util_P3A.apply(this, [faceEdgeList, htEdgeMap, normix, t, i, points])) == null ) return 3.4028235E38;

for (var i=0; i < 3; i++) {
var oo=edgeTest[i];
if (oo === $I$(6).TRUE ) continue;
var oe=oo;
faceEdgeList.addLast$TV(oe[2]);
htEdgeMap.put$TK$TV(oe[3], oe);
}
faceTriList.addLast$TV(Integer.valueOf$I(index));
return 0;
}, p$1);

Clazz.newMeth(C$, 'addEdge$javajs_util_Lst$java_util_Map$Integer$IA$I$javajs_util_P3A', function (faceEdgeList, htEdgeMap, normix, p1, i, points) {
var pt=p1[i];
var pt1=p1[(i + 1) % 3];
var s1="_" + pt1;
var s="_" + pt;
var edge=normix + s + s1 ;
if (htEdgeMap.containsKey$O(edge)) return null;
var edge0=normix + s1 + s ;
var o=htEdgeMap.get$O(edge0);
var b;
if (o == null ) {
var coord2=points[pt1];
var coord1=points[pt];
this.vAB.sub2$javajs_util_T3$javajs_util_T3(coord2, coord1);
for (var j=faceEdgeList.size$(); --j >= 0; ) {
var e=faceEdgeList.get$I(j);
var c1=points[e[0]];
var c2=points[e[1]];
if (c1 !== coord1  && c1 !== coord2   && c2 !== coord1   && c2 !== coord2   && p$1.testDiff$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3.apply(this, [c1, c2, coord1, coord2])  && p$1.testDiff$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3.apply(this, [coord1, coord2, c1, c2]) ) return null;
}
return Clazz.array(java.lang.Object, -1, [p1, Integer.valueOf$I(i), Clazz.array(Integer.TYPE, -1, [pt, pt1, 0]), edge]);
}var p10=(o)[0];
if (p10 == null ) return null;
var i0=((o)[1]).intValue$();
p10[3]=-((-p10[3]) ^ (1 << i0));
p1[3]=-((-p1[3]) ^ (1 << i));
b=(o)[2];
for (var j=faceEdgeList.size$(); --j >= 0; ) {
var f=faceEdgeList.get$I(j);
if (f[0] == b[0] && f[1] == b[1] ) {
f[2]=-1;
break;
}}
htEdgeMap.put$TK$TV(edge, Clazz.array(java.lang.Object, -1, [null]));
htEdgeMap.put$TK$TV(edge0, Clazz.array(java.lang.Object, -1, [null]));
return $I$(6).TRUE;
}, p$1);

Clazz.newMeth(C$, 'testDiff$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (a1, b1, a2, b2) {
this.vAB.sub2$javajs_util_T3$javajs_util_T3(b1, a1);
this.vAC.sub2$javajs_util_T3$javajs_util_T3(a2, a1);
this.vAC.cross$javajs_util_T3$javajs_util_T3(this.vAC, this.vAB);
this.vBC.sub2$javajs_util_T3$javajs_util_T3(b2, a1);
this.vBC.cross$javajs_util_T3$javajs_util_T3(this.vBC, this.vAB);
return (this.vBC.dot$javajs_util_T3(this.vAC) < 0 );
}, p$1);

Clazz.newMeth(C$, 'isPlanar$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (pt1, pt2, pt3, ptX) {
var norm=Clazz.new_($I$(2));
var w=$I$(12).getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(pt1, pt2, pt3, norm, this.vAB);
var d=$I$(12).distanceToPlaneV$javajs_util_V3$F$javajs_util_P3(norm, w, ptX);
return (Math.abs(d) < C$.MAX_DISTANCE_TO_PLANE );
}, p$1);

Clazz.newMeth(C$, 'getFaces$IAA$I$java_util_Map', function (triangles, triangleCount, htNormMap) {
var n=0;
for (var e, $e = htNormMap.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var eo=e.getValue$();
if (eo[2] === e.getKey$() ) n++;
}
var faces=$I$(3).newInt2$I(n);
if (triangleCount == n) {
for (var i=triangleCount; --i >= 0; ) faces[i]=$I$(3).arrayCopyI$IA$I(triangles[i], 3);

return faces;
}var fpt=0;
for (var e, $e = htNormMap.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var eo=e.getValue$();
if (eo[2] != null  && eo[2] !== e.getKey$()  ) continue;
var faceEdgeList=e.getValue$()[0];
n=faceEdgeList.size$();
var nOK=0;
for (var i=faceEdgeList.size$(); --i >= 0; ) if (faceEdgeList.get$I(i)[2] >= 0) nOK++;

var face=faces[fpt++]=Clazz.array(Integer.TYPE, [nOK]);
if (n < 2) continue;
var edge=null;
var pt=0;
do {
edge=faceEdgeList.get$I(pt);
} while (pt++ < nOK && edge[2] == -1 );
face[0]=edge[0];
face[1]=edge[1];
pt=2;
var i0=1;
var pt0=-1;
while (pt < nOK && pt0 != pt ){
pt0=pt;
for (var i=i0; i < n; i++) {
edge=faceEdgeList.get$I(i);
if (edge[2] != -1 && edge[0] == face[pt - 1] ) {
face[pt++]=edge[1];
if (i == i0) i0++;
break;
}}
}
}
return faces;
}, p$1);

Clazz.newMeth(C$, 'setModelVisibilityFlags$javajs_util_BS', function (bsModels) {
for (var i=this.polyhedronCount; --i >= 0; ) {
var p=this.polyhedrons[i];
if (p.id == null ) {
var ia=p.centralAtom.i;
if (this.ms.at[ia].isDeleted$()) p.isValid=false;
p.visibilityFlags=(p.visible && bsModels.get$I(p.modelIndex) && !this.ms.isAtomHidden$I(ia) && !this.ms.at[ia].isDeleted$()   ? this.vf : 0);
this.atoms[ia].setShapeVisibility$I$Z(this.vf, p.visibilityFlags != 0);
} else {
p.visibilityFlags=(p.visible && (p.modelIndex < 0 || bsModels.get$I(p.modelIndex) )  ? this.vf : 0);
}}
});

Clazz.newMeth(C$, 'getShapeState$', function () {
if (this.polyhedronCount == 0) return "";
var s=Clazz.new_($I$(19));
for (var i=0; i < this.polyhedronCount; i++) if (this.polyhedrons[i].isValid) s.append$S(this.polyhedrons[i].getState$org_jmol_viewer_Viewer(this.vwr));

if (this.drawEdges == 2) org.jmol.shape.Shape.appendCmd$javajs_util_SB$S(s, "polyhedra frontedges");
 else if (this.drawEdges == 1) org.jmol.shape.Shape.appendCmd$javajs_util_SB$S(s, "polyhedra edges");
 else if (this.drawEdges == 3) org.jmol.shape.Shape.appendCmd$javajs_util_SB$S(s, "polyhedra edgesOnly");
s.append$S(this.vwr.getStateCreator$().getAtomShapeState$org_jmol_shape_AtomShape(this));
var ia;
for (var i=0; i < this.polyhedronCount; i++) {
var p=this.polyhedrons[i];
if (p.isValid && p.id == null   && p.colixEdge != 0  && this.bsColixSet.get$I(ia=p.centralAtom.i) ) org.jmol.shape.Shape.appendCmd$javajs_util_SB$S(s, "select ({" + ia + "}); color polyhedra " + ($I$(8).isColixTranslucent$H(this.colixes[ia]) ? "translucent " : "") + $I$(8).getHexCode$H(this.colixes[ia]) + " " + $I$(8).getHexCode$H(p.colixEdge) );
}
return s.toString();
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
