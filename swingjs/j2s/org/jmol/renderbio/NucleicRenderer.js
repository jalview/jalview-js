(function(){var P$=Clazz.newPackage("org.jmol.renderbio"),p$1={},I$=[[0,'javajs.util.P3','org.jmol.util.C']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NucleicRenderer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.triangles=Clazz.array(Integer.TYPE, -1, [1, 0, 3, 1, 3, 2, 0, 4, 7, 0, 7, 3, 4, 5, 6, 4, 6, 7, 5, 1, 2, 5, 2, 6, 2, 3, 7, 2, 7, 6, 0, 1, 5, 0, 5, 4]);
},1);

C$.$fields$=[['Z',['cartoonBaseEdges','cartoonBlocks','cartoonLadders','cartoonRibose','cartoonSteps'],'F',['blockHeight'],'H',['colix'],'O',['rPt','javajs.util.P3[]','+rPt5','+rScr','+rScr5','basePt','javajs.util.P3','+backbonePt','+baseScreen','+backboneScreen','+ptTemp','vwr','org.jmol.viewer.Viewer','tm','org.jmol.viewer.TransformManager','g3d','org.jmol.api.JmolRendererInterface','bsr','org.jmol.renderbio.BioShapeRenderer','scrBox','javajs.util.P3[]','triangles','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'renderNucleic$org_jmol_renderbio_BioShapeRenderer', function (renderer) {
if (this.vwr == null ) {
this.rPt=Clazz.array($I$(1), [10]);
this.rScr=Clazz.array($I$(1), [10]);
this.rPt5=Clazz.array($I$(1), [5]);
this.rScr5=Clazz.array($I$(1), [5]);
this.backboneScreen=Clazz.new_($I$(1,1));
this.backbonePt=Clazz.new_($I$(1,1));
this.bsr=renderer;
this.tm=renderer.vwr.tm;
this.vwr=renderer.vwr;
}this.g3d=renderer.g3d;
var screens=renderer.controlPointScreens;
var pts=renderer.controlPoints;
this.cartoonBlocks=this.vwr.getBoolean$I(603979810);
this.cartoonBaseEdges=this.vwr.getBoolean$I(603979816);
this.cartoonSteps=this.vwr.getBoolean$I(603979811);
this.cartoonLadders=this.vwr.getBoolean$I(603979818);
this.cartoonRibose=this.vwr.getBoolean$I(603979819);
this.blockHeight=this.vwr.getFloat$I(570425347);
var isTraceAlpha=this.vwr.getBoolean$I(603979966);
var bsVisible=this.bsr.bsVisible;
for (var i=bsVisible.nextSetBit$I(0); i >= 0; i=bsVisible.nextSetBit$I(i + 1)) {
var scr=screens[i + 1];
if (isTraceAlpha) {
this.backboneScreen.ave$javajs_util_T3$javajs_util_T3(screens[i], scr);
this.backbonePt.ave$javajs_util_T3$javajs_util_T3(pts[i], pts[i + 1]);
} else {
this.backboneScreen.setT$javajs_util_T3(scr);
this.backbonePt.setT$javajs_util_T3(pts[i + 1]);
}this.bsr.renderHermiteConic$I$Z$I(i, false, 4);
this.colix=this.bsr.getLeadColix$I(i);
if (this.bsr.setBioColix$H(this.colix)) {
if (this.cartoonRibose && bsVisible.get$I(i + 1) ) p$1.renderNucleicBaseStep$I$javajs_util_T3$javajs_util_T3.apply(this, [i, pts[i + 1], screens[i + 1]]);
 else p$1.renderNucleicBaseStep$I$javajs_util_T3$javajs_util_T3.apply(this, [i, null, null]);
}}
});

Clazz.newMeth(C$, 'renderNucleicBaseStep$I$javajs_util_T3$javajs_util_T3', function (im, ptPnext, scrPnext) {
if (this.bsr.isPhosphorusOnly) return;
var nucleotide=this.bsr.monomers[im];
var thisMad=this.bsr.mad=this.bsr.mads[im];
if (this.rScr[0] == null ) {
for (var i=10; --i >= 0; ) this.rScr[i]=Clazz.new_($I$(1,1));

for (var i=5; --i >= 0; ) this.rScr5[i]=Clazz.new_($I$(1,1));

this.baseScreen=Clazz.new_($I$(1,1));
this.basePt=Clazz.new_($I$(1,1));
this.rPt[9]=Clazz.new_($I$(1,1));
}if (this.cartoonBlocks) {
p$1.renderBlock$org_jmol_modelsetbio_NucleicMonomer.apply(this, [nucleotide]);
return;
}if (this.cartoonBaseEdges) {
p$1.renderLeontisWesthofEdges$org_jmol_modelsetbio_NucleicMonomer.apply(this, [nucleotide]);
return;
}if (this.cartoonSteps) {
p$1.renderSteps$org_jmol_modelsetbio_NucleicMonomer$I.apply(this, [nucleotide, im]);
return;
}nucleotide.getBaseRing6Points$javajs_util_P3A(this.rPt);
p$1.transformPoints$I$javajs_util_T3A$javajs_util_P3A.apply(this, [6, this.rPt, this.rScr]);
if (!this.cartoonLadders) p$1.renderRing6.apply(this, []);
var stepScreen;
var stepPt;
var pt;
var hasRing5=nucleotide.maybeGetBaseRing5Points$javajs_util_P3A(this.rPt5);
if (hasRing5) {
if (this.cartoonLadders) {
stepScreen=this.rScr[2];
stepPt=this.rPt[2];
} else {
p$1.transformPoints$I$javajs_util_T3A$javajs_util_P3A.apply(this, [5, this.rPt5, this.rScr5]);
p$1.renderRing5.apply(this, []);
stepScreen=this.rScr5[3];
stepPt=this.rPt5[3];
}} else {
pt=(this.cartoonLadders ? 4 : 2);
stepScreen=this.rScr[pt];
stepPt=this.rPt[pt];
}var mad=($s$[0] = (thisMad > 1 ? (thisMad/2|0) : thisMad), $s$[0]);
var r=mad / 2000.0;
var w=(this.vwr.tm.scaleToScreen$I$I((this.backboneScreen.z|0), mad)|0);
if (this.cartoonLadders || !this.cartoonRibose ) this.g3d.fillCylinderScreen3I$B$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$F(3, w, this.backboneScreen, stepScreen, this.backbonePt, stepPt, r);
if (this.cartoonLadders) return;
p$1.drawEdges$javajs_util_P3A$javajs_util_P3A$I.apply(this, [this.rScr, this.rPt, 6]);
if (hasRing5) p$1.drawEdges$javajs_util_P3A$javajs_util_P3A$I.apply(this, [this.rScr5, this.rPt5, 5]);
 else p$1.renderEdge$javajs_util_P3A$javajs_util_P3A$I$I.apply(this, [this.rScr, this.rPt, 0, 5]);
if (this.cartoonRibose) {
this.baseScreen.setT$javajs_util_T3(stepScreen);
this.basePt.setT$javajs_util_T3(stepPt);
nucleotide.getRiboseRing5Points$javajs_util_P3A(this.rPt);
var c=this.rPt[9];
c.set$F$F$F(0, 0, 0);
for (var i=0; i < 5; i++) c.add$javajs_util_T3(this.rPt[i]);

c.scale$F(0.2);
p$1.transformPoints$I$javajs_util_T3A$javajs_util_P3A.apply(this, [10, this.rPt, this.rScr]);
p$1.renderRibose.apply(this, []);
p$1.renderEdge$javajs_util_P3A$javajs_util_P3A$I$I.apply(this, [this.rScr, this.rPt, 2, 5]);
p$1.renderEdge$javajs_util_P3A$javajs_util_P3A$I$I.apply(this, [this.rScr, this.rPt, 3, 6]);
p$1.renderEdge$javajs_util_P3A$javajs_util_P3A$I$I.apply(this, [this.rScr, this.rPt, 6, 7]);
p$1.renderEdge$javajs_util_P3A$javajs_util_P3A$I$I.apply(this, [this.rScr, this.rPt, 7, 8]);
p$1.renderEdge$javajs_util_P3A$javajs_util_P3A$I$I.apply(this, [this.rScr, this.rPt, 0, 4]);
p$1.renderCyl$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3.apply(this, [this.rScr[0], this.baseScreen, this.rPt[0], this.basePt]);
if (ptPnext != null ) p$1.renderCyl$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3.apply(this, [this.rScr[5], scrPnext, this.rPt[5], ptPnext]);
p$1.drawEdges$javajs_util_P3A$javajs_util_P3A$I.apply(this, [this.rScr, this.rPt, 5]);
}}, p$1);

Clazz.newMeth(C$, 'renderSteps$org_jmol_modelsetbio_NucleicMonomer$I', function (g, i) {
var bps=g.getBasePairs$();
var atomA=g.getLeadAtom$();
var cA=$I$(2).getColixInherited$H$H(this.colix, atomA.colixAtom);
if (bps != null ) {
var checkPass2=(!this.bsr.isExport && !this.vwr.gdata.isPass2 );
for (var j=bps.size$(); --j >= 0; ) {
var iAtom=bps.get$I(j).getPartnerAtom$org_jmol_modelsetbio_NucleicMonomer(g);
if (iAtom > i) {
var atomB=this.vwr.ms.at[iAtom];
var cB=$I$(2).getColixInherited$H$H(this.colix, atomB.colixAtom);
if (!checkPass2 || this.bsr.setBioColix$H(cA) || this.bsr.setBioColix$H(cB)  ) this.bsr.drawSegmentAB$org_jmol_modelset_Atom$org_jmol_modelset_Atom$H$H$F(atomA, atomB, cA, cB, 1000);
}}
}}, p$1);

Clazz.newMeth(C$, 'transformPoints$I$javajs_util_T3A$javajs_util_P3A', function (count, angstroms, screens) {
for (var i=count; --i >= 0; ) this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(angstroms[i], screens[i]);

}, p$1);

Clazz.newMeth(C$, 'drawEdges$javajs_util_P3A$javajs_util_P3A$I', function (scr, pt, n) {
for (var i=n; --i >= 0; ) scr[i].z--;

for (var i=n; --i > 0; ) p$1.renderEdge$javajs_util_P3A$javajs_util_P3A$I$I.apply(this, [scr, pt, i, i - 1]);

}, p$1);

Clazz.newMeth(C$, 'renderBlock$org_jmol_modelsetbio_NucleicMonomer', function (g) {
var atomA=g.getLeadAtom$();
var cA=this.colix;
if (this.scrBox == null ) {
this.scrBox=Clazz.array($I$(1), [8]);
for (var j=0; j < 8; j++) this.scrBox[j]=Clazz.new_($I$(1,1));

}var oxyz=g.getDSSRFrame$org_jmol_viewer_Viewer(this.vwr);
var box=g.dssrBox;
var lastHeight=g.dssrBoxHeight;
var isPurine=g.isPurine$();
if (box == null  || lastHeight != this.blockHeight  ) {
g.dssrBoxHeight=this.blockHeight;
if (box == null ) {
box=Clazz.array($I$(1), [8]);
for (var j=8; --j >= 0; ) box[j]=Clazz.new_($I$(1,1));

g.dssrBox=box;
}var uc=this.vwr.getSymTemp$().getUnitCell$javajs_util_T3A$Z$S(oxyz, false, null);
if (this.ptTemp == null ) this.ptTemp=Clazz.new_($I$(1,1));
this.ptTemp.setT$javajs_util_T3(oxyz[0]);
uc.toFractional$javajs_util_T3$Z(this.ptTemp, true);
uc.setOffsetPt$javajs_util_T3($I$(1).new3$F$F$F(this.ptTemp.x - 2.25, this.ptTemp.y + 5.0, this.ptTemp.z - this.blockHeight / 2));
var x=4.5;
var y=(isPurine ? -4.5 : -3.0);
var z=this.blockHeight;
uc.toCartesian$javajs_util_T3$Z(box[0]=$I$(1).new3$F$F$F(0, 0, 0), false);
uc.toCartesian$javajs_util_T3$Z(box[1]=$I$(1).new3$F$F$F(x, 0, 0), false);
uc.toCartesian$javajs_util_T3$Z(box[2]=$I$(1).new3$F$F$F(x, y, 0), false);
uc.toCartesian$javajs_util_T3$Z(box[3]=$I$(1).new3$F$F$F(0, y, 0), false);
uc.toCartesian$javajs_util_T3$Z(box[4]=$I$(1).new3$F$F$F(0, 0, z), false);
uc.toCartesian$javajs_util_T3$Z(box[5]=$I$(1).new3$F$F$F(x, 0, z), false);
uc.toCartesian$javajs_util_T3$Z(box[6]=$I$(1).new3$F$F$F(x, y, z), false);
uc.toCartesian$javajs_util_T3$Z(box[7]=$I$(1).new3$F$F$F(0, y, z), false);
}for (var j=0; j < 8; j++) this.vwr.tm.transformPt3f$javajs_util_T3$javajs_util_P3(box[j], this.scrBox[j]);

for (var j=0; j < 36; ) this.g3d.fillTriangle3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(this.scrBox[this.triangles[j++]], this.scrBox[this.triangles[j++]], this.scrBox[this.triangles[j++]], false);

var atomB=g.getC1P$();
var atomC=g.getN0$();
if (atomB != null  && atomC != null  ) {
this.bsr.drawSegmentAB$org_jmol_modelset_Atom$org_jmol_modelset_Atom$H$H$F(atomA, atomB, cA, cA, 1000);
this.bsr.drawSegmentAB$org_jmol_modelset_Atom$org_jmol_modelset_Atom$H$H$F(atomB, atomC, cA, cA, 1000);
}}, p$1);

Clazz.newMeth(C$, 'renderLeontisWesthofEdges$org_jmol_modelsetbio_NucleicMonomer', function (nucleotide) {
if (!nucleotide.getEdgePoints$javajs_util_P3A(this.rPt)) return;
p$1.transformPoints$I$javajs_util_T3A$javajs_util_P3A.apply(this, [6, this.rPt, this.rScr]);
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr, this.rPt, 2, 3, 4, true]);
p$1.renderEdge$javajs_util_P3A$javajs_util_P3A$I$I.apply(this, [this.rScr, this.rPt, 0, 1]);
p$1.renderEdge$javajs_util_P3A$javajs_util_P3A$I$I.apply(this, [this.rScr, this.rPt, 1, 2]);
var isTranslucent=$I$(2).isColixTranslucent$H(this.colix);
var tl=$I$(2).getColixTranslucencyLevel$H(this.colix);
var colixSugarEdge=$I$(2).getColixTranslucent3$H$Z$F(10, isTranslucent, tl);
var colixWatsonCrickEdge=$I$(2).getColixTranslucent3$H$Z$F(11, isTranslucent, tl);
var colixHoogsteenEdge=$I$(2).getColixTranslucent3$H$Z$F(7, isTranslucent, tl);
this.g3d.setC$H(colixSugarEdge);
p$1.renderEdge$javajs_util_P3A$javajs_util_P3A$I$I.apply(this, [this.rScr, this.rPt, 2, 3]);
this.g3d.setC$H(colixWatsonCrickEdge);
p$1.renderEdge$javajs_util_P3A$javajs_util_P3A$I$I.apply(this, [this.rScr, this.rPt, 3, 4]);
this.g3d.setC$H(colixHoogsteenEdge);
p$1.renderEdge$javajs_util_P3A$javajs_util_P3A$I$I.apply(this, [this.rScr, this.rPt, 4, 5]);
}, p$1);

Clazz.newMeth(C$, 'renderEdge$javajs_util_P3A$javajs_util_P3A$I$I', function (scr, pt, i, j) {
p$1.renderCyl$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3.apply(this, [scr[i], scr[j], pt[i], pt[j]]);
}, p$1);

Clazz.newMeth(C$, 'renderCyl$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (s1, s2, p1, p2) {
this.g3d.fillCylinderScreen3I$B$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$F(3, 3, s1, s2, p1, p2, 0.005);
}, p$1);

Clazz.newMeth(C$, 'renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z', function (scr, pt, i, j, k, doShade) {
this.g3d.fillTriangle3i$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(scr[i], scr[j], scr[k], pt[i], pt[j], pt[k], doShade);
}, p$1);

Clazz.newMeth(C$, 'renderRing6', function () {
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr, this.rPt, 0, 2, 4, true]);
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr, this.rPt, 0, 1, 2, false]);
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr, this.rPt, 0, 4, 5, false]);
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr, this.rPt, 2, 3, 4, false]);
}, p$1);

Clazz.newMeth(C$, 'renderRing5', function () {
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr5, this.rPt5, 0, 1, 2, false]);
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr5, this.rPt5, 0, 2, 3, false]);
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr5, this.rPt5, 0, 3, 4, false]);
}, p$1);

Clazz.newMeth(C$, 'renderRibose', function () {
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr, this.rPt, 0, 1, 9, true]);
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr, this.rPt, 1, 2, 9, true]);
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr, this.rPt, 2, 3, 9, true]);
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr, this.rPt, 3, 4, 9, true]);
p$1.renderTriangle$javajs_util_P3A$javajs_util_P3A$I$I$I$Z.apply(this, [this.rScr, this.rPt, 4, 0, 9, true]);
}, p$1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:16 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
