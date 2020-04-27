(function(){var P$=Clazz.newPackage("org.jmol.renderbio"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.V3','org.jmol.c.STR','org.jmol.util.MeshSurface']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RocketRenderer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['tPending','renderArrowHeads','isRockets'],'I',['startIndexPending','endIndexPending'],'H',['colix','mad'],'O',['proteinstructurePending','org.jmol.modelsetbio.ProteinStructure','vtemp','javajs.util.V3','screenA','javajs.util.P3','+screenB','+screenC','rr','org.jmol.renderbio.RocketsRenderer','vwr','org.jmol.viewer.Viewer','g3d','org.jmol.api.JmolRendererInterface','tm','org.jmol.viewer.TransformManager','ptC','javajs.util.P3','+ptTip','corners','javajs.util.P3[]','+screenCorners','vW','javajs.util.V3','+vH','meshSurface','org.jmol.util.MeshSurface']]
,['O',['boxFaces','int[][]','+arrowHeadFaces']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_renderbio_RocketsRenderer', function (rr) {
this.screenA=Clazz.new_($I$(1,1));
this.screenB=Clazz.new_($I$(1,1));
this.screenC=Clazz.new_($I$(1,1));
this.vtemp=Clazz.new_($I$(2,1));
this.rr=rr;
this.vwr=rr.vwr;
this.tm=rr.vwr.tm;
this.isRockets=rr.isRockets;
return this;
});

Clazz.newMeth(C$, 'renderRockets$', function () {
this.g3d=this.rr.g3d;
this.tPending=false;
this.renderArrowHeads=this.rr.renderArrowHeads;
var bsVisible=this.rr.bsVisible;
for (var i=bsVisible.nextSetBit$I(0); i >= 0; i=bsVisible.nextSetBit$I(i + 1)) {
if (this.rr.structureTypes[i] === $I$(3).HELIX  || this.isRockets && this.rr.structureTypes[i] === $I$(3).SHEET   ) {
p$1.renderSpecialSegment$org_jmol_modelsetbio_AlphaMonomer$H$H.apply(this, [this.rr.monomers[i], this.rr.getLeadColix$I(i), this.rr.mads[i]]);
} else if (this.isRockets) {
p$1.renderPending.apply(this, []);
this.rr.renderHermiteConic$I$Z$I(i, true, 7);
}}
p$1.renderPending.apply(this, []);
});

Clazz.newMeth(C$, 'renderSpecialSegment$org_jmol_modelsetbio_AlphaMonomer$H$H', function (monomer, thisColix, thisMad) {
var proteinstructure=monomer.proteinStructure;
if (this.tPending) {
if (proteinstructure === this.proteinstructurePending  && thisMad == this.mad  && thisColix == this.colix  && proteinstructure.getIndex$org_jmol_modelsetbio_Monomer(monomer) == this.endIndexPending + 1 ) {
++this.endIndexPending;
return;
}p$1.renderPending.apply(this, []);
}this.proteinstructurePending=proteinstructure;
this.startIndexPending=this.endIndexPending=proteinstructure.getIndex$org_jmol_modelsetbio_Monomer(monomer);
this.colix=thisColix;
this.mad=thisMad;
this.tPending=true;
}, p$1);

Clazz.newMeth(C$, 'renderPending', function () {
if (!this.tPending) return;
var segments=this.proteinstructurePending.getSegments$();
var renderArrowHead=(this.renderArrowHeads && this.endIndexPending == this.proteinstructurePending.nRes - 1 );
if (Clazz.instanceOf(this.proteinstructurePending, "org.jmol.modelsetbio.Helix")) p$1.renderPendingRocketSegment$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z.apply(this, [this.endIndexPending, segments[this.startIndexPending], segments[this.endIndexPending], segments[this.endIndexPending + 1], renderArrowHead]);
 else if (Clazz.instanceOf(this.proteinstructurePending, "org.jmol.modelsetbio.Sheet") && Clazz.instanceOf((this.proteinstructurePending).apolymer, "org.jmol.modelsetbio.AminoPolymer") ) p$1.renderPendingSheetPlank$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z.apply(this, [segments[this.startIndexPending], segments[this.endIndexPending], segments[this.endIndexPending + 1], renderArrowHead]);
this.tPending=false;
}, p$1);

Clazz.newMeth(C$, 'renderPendingRocketSegment$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z', function (i, pointStart, pointBeforeEnd, pointEnd, renderArrowHead) {
if (this.g3d.setC$H(this.colix)) {
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(pointStart, this.screenA);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3((renderArrowHead ? pointBeforeEnd : pointEnd), this.screenB);
var zMid=(Math.floor((this.screenA.z + this.screenB.z) / 2.0)|0);
var diameter=((this.vwr.tm.scaleToScreen$I$I(zMid, this.mad)|0));
if (!renderArrowHead || pointStart !== pointBeforeEnd  ) this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, diameter, this.screenA, this.screenB);
if (renderArrowHead) {
this.screenA.sub2$javajs_util_T3$javajs_util_T3(pointEnd, pointBeforeEnd);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(pointEnd, this.screenC);
var coneDiameter=(this.mad << 1) - (this.mad >> 1);
coneDiameter=(this.vwr.tm.scaleToScreen$I$I((Math.floor(this.screenB.z)|0), coneDiameter)|0);
this.g3d.fillConeScreen3f$B$I$javajs_util_P3$javajs_util_P3$Z(2, coneDiameter, this.screenB, this.screenC, false);
} else {
}if (this.startIndexPending == this.endIndexPending) return;
var t=this.screenB;
this.screenB=this.screenC;
this.screenC=t;
}}, p$1);

Clazz.newMeth(C$, 'renderPendingSheetPlank$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z', function (ptStart, pointBeforeEnd, ptEnd, renderArrowHead) {
if (!this.g3d.setC$H(this.colix)) return;
if (this.corners == null ) {
this.ptC=Clazz.new_($I$(1,1));
this.ptTip=Clazz.new_($I$(1,1));
this.vW=Clazz.new_($I$(2,1));
this.vH=Clazz.new_($I$(2,1));
this.screenCorners=Clazz.array($I$(1), [8]);
this.corners=Clazz.array($I$(1), [8]);
for (var i=8; --i >= 0; ) {
this.corners[i]=Clazz.new_($I$(1,1));
this.screenCorners[i]=Clazz.new_($I$(1,1));
}
}if (renderArrowHead) {
p$1.setBox$F$F$javajs_util_P3.apply(this, [1.25, 0.333, pointBeforeEnd]);
this.ptTip.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-0.5, this.vH, ptEnd);
for (var i=4; --i >= 0; ) {
var corner=this.corners[i];
corner.setT$javajs_util_T3(this.ptC);
if ((i & 1) != 0) corner.add$javajs_util_T3(this.vW);
if ((i & 2) != 0) corner.add$javajs_util_T3(this.vH);
}
this.corners[4].setT$javajs_util_T3(this.ptTip);
this.corners[5].add2$javajs_util_T3$javajs_util_T3(this.ptTip, this.vH);
p$1.renderPart$IAA.apply(this, [C$.arrowHeadFaces]);
ptEnd=pointBeforeEnd;
}p$1.setBox$F$F$javajs_util_P3.apply(this, [1.0, 0.25, ptStart]);
this.vtemp.sub2$javajs_util_T3$javajs_util_T3(ptEnd, ptStart);
if (this.vtemp.lengthSquared$() == 0 ) return;
p$1.buildBox$javajs_util_P3$javajs_util_V3$javajs_util_V3$javajs_util_V3.apply(this, [this.ptC, this.vW, this.vH, this.vtemp]);
p$1.renderPart$IAA.apply(this, [C$.boxFaces]);
}, p$1);

Clazz.newMeth(C$, 'setBox$F$F$javajs_util_P3', function (w, h, pt) {
(this.proteinstructurePending).setBox$F$F$javajs_util_P3$javajs_util_V3$javajs_util_V3$javajs_util_P3$F(w, h, pt, this.vW, this.vH, this.ptC, this.mad / 1000.0);
}, p$1);

Clazz.newMeth(C$, 'buildBox$javajs_util_P3$javajs_util_V3$javajs_util_V3$javajs_util_V3', function (pointCorner, scaledWidthVector, scaledHeightVector, lengthVector) {
for (var i=8; --i >= 0; ) {
var corner=this.corners[i];
corner.setT$javajs_util_T3(pointCorner);
if ((i & 1) != 0) corner.add$javajs_util_T3(scaledWidthVector);
if ((i & 2) != 0) corner.add$javajs_util_T3(scaledHeightVector);
if ((i & 4) != 0) corner.add$javajs_util_T3(lengthVector);
}
}, p$1);

Clazz.newMeth(C$, 'renderPart$IAA', function (planes) {
if (this.rr.exportType == 1) {
if (this.meshSurface == null ) {
this.meshSurface=Clazz.new_($I$(4,1));
this.meshSurface.vs=this.corners;
this.meshSurface.haveQuads=true;
this.meshSurface.vc=this.corners.length;
}this.meshSurface.pis=planes;
this.meshSurface.pc=planes.length;
this.g3d.drawSurface$org_jmol_util_MeshSurface$H(this.meshSurface, this.colix);
} else {
for (var i=8; --i >= 0; ) this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.corners[i], this.screenCorners[i]);

for (var i=planes.length; --i >= 0; ) {
var f=planes[i];
if (f.length == 3) this.g3d.fillTriangle3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(this.screenCorners[f[0]], this.screenCorners[f[1]], this.screenCorners[f[2]], true);
 else this.g3d.fillQuadrilateral$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(this.screenCorners[f[0]], this.screenCorners[f[1]], this.screenCorners[f[2]], this.screenCorners[f[3]], true);
}
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.boxFaces=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [0, 1, 3, 2]), Clazz.array(Integer.TYPE, -1, [0, 2, 6, 4]), Clazz.array(Integer.TYPE, -1, [0, 4, 5, 1]), Clazz.array(Integer.TYPE, -1, [7, 5, 4, 6]), Clazz.array(Integer.TYPE, -1, [7, 6, 2, 3]), Clazz.array(Integer.TYPE, -1, [7, 3, 1, 5])]);
C$.arrowHeadFaces=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [1, 0, 4]), Clazz.array(Integer.TYPE, -1, [2, 3, 5]), Clazz.array(Integer.TYPE, -1, [0, 1, 3, 2]), Clazz.array(Integer.TYPE, -1, [2, 5, 4, 0]), Clazz.array(Integer.TYPE, -1, [1, 4, 5, 3])]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:16 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
