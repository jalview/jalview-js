(function(){var P$=Clazz.newPackage("org.jmol.renderbio"),p$1={},I$=[[0,'javajs.util.BS','javajs.util.P3','javajs.api.Interface','org.jmol.c.STR','org.jmol.util.C']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BioShapeRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ribbonBorder=false;
this.bsVisible=Clazz.new_($I$(1,1));
this.pointT=Clazz.new_($I$(2,1));
this.screenArrowTop=Clazz.new_($I$(2,1));
this.screenArrowTopPrev=Clazz.new_($I$(2,1));
this.screenArrowBot=Clazz.new_($I$(2,1));
this.screenArrowBotPrev=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['invalidateMesh','invalidateSheets','isTraceAlpha','ribbonBorder','haveControlPointScreens','cartoonsFancy','isNucleic','isPhosphorusOnly','isCarbohydrate','isHighRes','wireframeOnly','needTranslucent','isCyclic'],'F',['aspectRatio','sheetSmoothing'],'I',['hermiteLevel','monomerCount','iPrev','iNext','iNext2','iNext3','diameterBeg','diameterMid','diameterEnd'],'H',['madBeg','madMid','madEnd','colixBack'],'O',['monomers','org.jmol.modelsetbio.Monomer[]','bsVisible','javajs.util.BS','ribbonTopScreens','javajs.util.P3[]','+ribbonBottomScreens','+controlPoints','+controlPointScreens','leadAtomIndices','int[]','wingVectors','javajs.util.V3[]','mads','short[]','+colixes','+colixesBack','structureTypes','org.jmol.c.STR[]','meshRenderer','org.jmol.renderbio.BioMeshRenderer','bioShape','org.jmol.shapebio.BioShape','pointT','javajs.util.P3','reversed','javajs.util.BS','screenArrowTop','javajs.util.P3','+screenArrowTopPrev','+screenArrowBot','+screenArrowBotPrev']]]

Clazz.newMeth(C$, 'render$', function () {
if (this.shape == null ) return false;
p$1.setGlobals.apply(this, []);
p$1.renderShapes.apply(this, []);
return this.needTranslucent;
});

Clazz.newMeth(C$, 'setGlobals', function () {
this.invalidateMesh=false;
this.needTranslucent=false;
this.g3d.addRenderer$I(553648145);
var TF=(!this.isExport && !this.vwr.checkMotionRendering$I(1112152066) );
if (TF != this.wireframeOnly ) this.invalidateMesh=true;
this.wireframeOnly=TF;
TF=(this.isExport || !this.wireframeOnly && this.vwr.getBoolean$I(603979864)  );
if (TF != this.isHighRes ) this.invalidateMesh=true;
this.isHighRes=TF;
TF=!this.wireframeOnly && (this.vwr.getBoolean$I(603979817) || this.isExport ) ;
if (this.cartoonsFancy != TF ) {
this.invalidateMesh=true;
this.cartoonsFancy=TF;
}var val1=this.vwr.getHermiteLevel$();
val1=(val1 <= 0 ? -val1 : this.vwr.getInMotion$Z(true) ? 0 : val1);
if (this.cartoonsFancy && !this.wireframeOnly ) val1=Math.max(val1, 3);
if (val1 != this.hermiteLevel) this.invalidateMesh=true;
this.hermiteLevel=Math.min(val1, 8);
var val=this.vwr.getInt$I(553648166);
val=Math.min(Math.max(0, val), 20);
if (this.cartoonsFancy && val >= 16 ) val=4;
if (this.wireframeOnly || this.hermiteLevel == 0 ) val=0;
if (val != this.aspectRatio  && val != 0  && val1 != 0 ) this.invalidateMesh=true;
this.aspectRatio=val;
if (this.aspectRatio > 0 ) {
if (this.meshRenderer == null ) {
this.meshRenderer=$I$(3).getInterface$S("org.jmol.renderbio.BioMeshRenderer");
this.meshRenderer.setViewerG3dShapeID$org_jmol_viewer_Viewer$I(this.vwr, this.shape.shapeID);
}this.meshRenderer.setup$org_jmol_api_JmolRendererInterface$org_jmol_modelset_ModelSet$org_jmol_shape_Shape(this.g3d, this.vwr.ms, this.shape);
}TF=this.vwr.getBoolean$I(603979966);
if (TF != this.isTraceAlpha ) this.invalidateMesh=true;
this.isTraceAlpha=TF;
this.invalidateSheets=false;
var fval=this.vwr.getFloat$I(570425392);
if (fval != this.sheetSmoothing  && this.isTraceAlpha ) {
this.sheetSmoothing=fval;
this.invalidateMesh=true;
this.invalidateSheets=true;
}}, p$1);

Clazz.newMeth(C$, 'renderShapes', function () {
var mps=this.shape;
for (var c=mps.bioShapes.length; --c >= 0; ) {
this.bioShape=mps.getBioShape$I(c);
if ((this.bioShape.modelVisibilityFlags & this.myVisibilityFlag) == 0) continue;
if (this.bioShape.monomerCount >= 2 && p$1.initializePolymer$org_jmol_shapebio_BioShape.apply(this, [this.bioShape]) ) {
if (this.meshRenderer != null ) this.meshRenderer.initBS$();
this.isCyclic=this.bioShape.bioPolymer.isCyclic$();
this.renderBioShape$org_jmol_shapebio_BioShape(this.bioShape);
if (this.meshRenderer != null ) this.meshRenderer.renderMeshes$();
p$1.freeTempArrays.apply(this, []);
}}
}, p$1);

Clazz.newMeth(C$, 'setBioColix$H', function (colix) {
if (this.g3d.setC$H(colix)) return true;
this.needTranslucent=true;
return false;
});

Clazz.newMeth(C$, 'freeTempArrays', function () {
if (this.haveControlPointScreens) this.vwr.freeTempPoints$javajs_util_P3A(this.controlPointScreens);
this.vwr.freeTempEnum$org_jmol_c_STRA(this.structureTypes);
}, p$1);

Clazz.newMeth(C$, 'initializePolymer$org_jmol_shapebio_BioShape', function (bioShape) {
var bsDeleted=this.vwr.slm.bsDeleted;
if (this.vwr.ms.isJmolDataFrameForModel$I(bioShape.modelIndex)) {
this.controlPoints=bioShape.bioPolymer.getControlPoints$Z$F$Z(true, 0, false);
} else {
this.controlPoints=bioShape.bioPolymer.getControlPoints$Z$F$Z(this.isTraceAlpha, this.sheetSmoothing, this.invalidateSheets);
}this.monomerCount=bioShape.monomerCount;
this.monomers=bioShape.monomers;
this.reversed=bioShape.bioPolymer.reversed;
this.leadAtomIndices=bioShape.bioPolymer.getLeadAtomIndices$();
this.bsVisible.clearAll$();
var haveVisible=false;
if (this.invalidateMesh) bioShape.falsifyMesh$();
for (var i=this.monomerCount; --i >= 0; ) {
if ((this.monomers[i].shapeVisibilityFlags & this.myVisibilityFlag) == 0 || this.ms.isAtomHidden$I(this.leadAtomIndices[i])  || bsDeleted != null  && bsDeleted.get$I(this.leadAtomIndices[i])  ) continue;
var lead=this.ms.at[this.leadAtomIndices[i]];
if (!this.g3d.isInDisplayRange$I$I(lead.sX, lead.sY)) continue;
this.bsVisible.set$I(i);
haveVisible=true;
}
if (!haveVisible) return false;
this.ribbonBorder=this.vwr.getBoolean$I(603979901);
this.isNucleic=Clazz.instanceOf(bioShape.bioPolymer, "org.jmol.modelsetbio.NucleicPolymer");
this.isPhosphorusOnly=!this.isNucleic && Clazz.instanceOf(bioShape.bioPolymer, "org.jmol.modelsetbio.PhosphorusPolymer") ;
this.isCarbohydrate=Clazz.instanceOf(bioShape.bioPolymer, "org.jmol.modelsetbio.CarbohydratePolymer");
this.haveControlPointScreens=false;
this.wingVectors=bioShape.wingVectors;
if (this.meshRenderer != null ) this.meshRenderer.initialize$org_jmol_render_ShapeRenderer$org_jmol_shapebio_BioShape$I(this, bioShape, this.monomerCount);
this.mads=bioShape.mads;
this.colixes=bioShape.colixes;
this.colixesBack=bioShape.colixesBack;
p$1.setStructureTypes.apply(this, []);
return true;
}, p$1);

Clazz.newMeth(C$, 'setStructureTypes', function () {
var types=this.structureTypes=this.vwr.allocTempEnum$I(this.monomerCount + 1);
for (var i=this.monomerCount; --i >= 0; ) if ((types[i]=this.monomers[i].getProteinStructureType$()) === $I$(4).TURN ) types[i]=$I$(4).NONE;

types[this.monomerCount]=types[this.monomerCount - 1];
}, p$1);

Clazz.newMeth(C$, 'calcScreenControlPoints$', function () {
var count=this.monomerCount + 1;
var scr=this.controlPointScreens=this.vwr.allocTempPoints$I(count);
var points=this.controlPoints;
for (var i=count; --i >= 0; ) this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(points[i], scr[i]);

this.haveControlPointScreens=true;
});

Clazz.newMeth(C$, 'calcScreens$F$HA', function (offsetFraction, mads) {
var count=this.controlPoints.length;
var screens=this.vwr.allocTempPoints$I(count);
if (offsetFraction == 0 ) {
for (var i=count; --i >= 0; ) this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.controlPoints[i], screens[i]);

} else {
var offset_1000=offsetFraction / 1000.0;
for (var i=count; --i >= 0; ) p$1.calc1Screen$javajs_util_P3$javajs_util_V3$H$F$javajs_util_P3.apply(this, [this.controlPoints[i], this.wingVectors[i], (mads[i] == 0 && i > 0  ? mads[i - 1] : mads[i]), offset_1000, screens[i]]);

}return screens;
});

Clazz.newMeth(C$, 'calc1Screen$javajs_util_P3$javajs_util_V3$H$F$javajs_util_P3', function (center, vector, mad, offset_1000, screen) {
this.pointT.scaleAdd2$F$javajs_util_T3$javajs_util_T3(mad * offset_1000, vector, center);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pointT, screen);
}, p$1);

Clazz.newMeth(C$, 'getLeadColix$I', function (i) {
return (function(a,f){return f.apply(null,a)})([this.colixes[i], this.monomers[i].getLeadAtom$().colixAtom],$I$(5).getColixInherited$H$H);
});

Clazz.newMeth(C$, 'getLeadColixBack$I', function (i) {
return (this.colixesBack == null  || this.colixesBack.length <= i  ? ($s$[0] = 0, $s$[0]) : this.colixesBack[i]);
});

Clazz.newMeth(C$, 'setNeighbors$I', function (i) {
if (this.isCyclic) {
i+=this.monomerCount;
this.iPrev=(i - 1) % this.monomerCount;
this.iNext=(i + 1) % this.monomerCount;
this.iNext2=(i + 2) % this.monomerCount;
this.iNext3=(i + 3) % this.monomerCount;
} else {
this.iPrev=Math.max(i - 1, 0);
this.iNext=Math.min(i + 1, this.monomerCount);
this.iNext2=Math.min(i + 2, this.monomerCount);
this.iNext3=Math.min(i + 3, this.monomerCount);
}});

Clazz.newMeth(C$, 'setColix$H', function (colix) {
this.colix=colix;
return this.g3d.setC$H(colix);
});

Clazz.newMeth(C$, 'setMads$I$Z', function (i, thisTypeOnly) {
this.madMid=this.madBeg=this.madEnd=this.mads[i];
if (this.isTraceAlpha) {
if (!thisTypeOnly || this.structureTypes[i] === this.structureTypes[this.iNext]  ) {
this.madEnd=this.mads[this.iNext];
if (this.madEnd == 0) {
if (Clazz.instanceOf(this, "org.jmol.renderbio.TraceRenderer")) {
this.madEnd=this.madBeg;
} else {
this.madEnd=this.madBeg;
}}this.madMid=($s$[0] = ((this.madBeg + this.madEnd) >> 1), $s$[0]);
}} else {
if (!thisTypeOnly || this.structureTypes[i] === this.structureTypes[this.iPrev]  ) this.madBeg=($s$[0] = (((this.mads[this.iPrev] == 0 ? this.madMid : this.mads[this.iPrev]) + this.madMid) >> 1), $s$[0]);
if (!thisTypeOnly || this.structureTypes[i] === this.structureTypes[this.iNext]  ) this.madEnd=($s$[0] = (((this.mads[this.iNext] == 0 ? this.madMid : this.mads[this.iNext]) + this.madMid) >> 1), $s$[0]);
}this.diameterBeg=(this.vwr.tm.scaleToScreen$I$I((this.controlPointScreens[i].z|0), this.madBeg)|0);
this.diameterMid=(this.vwr.tm.scaleToScreen$I$I(this.monomers[i].getLeadAtom$().sZ, this.madMid)|0);
this.diameterEnd=(this.vwr.tm.scaleToScreen$I$I((this.controlPointScreens[this.iNext].z|0), this.madEnd)|0);
var doCap0=(i == this.iPrev || !this.bsVisible.get$I(this.iPrev)  || thisTypeOnly && this.structureTypes[i] !== this.structureTypes[this.iPrev]   );
var doCap1=(this.iNext == this.iNext2 || !this.bsVisible.get$I(this.iNext)  || thisTypeOnly && this.structureTypes[i] !== this.structureTypes[this.iNext]   );
return (this.aspectRatio > 0  && this.meshRenderer != null   && this.meshRenderer.check$Z$Z(doCap0, doCap1) );
}, p$1);

Clazz.newMeth(C$, 'renderHermiteCylinder$javajs_util_P3A$I', function (screens, i) {
this.colix=this.getLeadColix$I(i);
if (!this.setBioColix$H(this.colix)) return;
this.setNeighbors$I(i);
this.g3d.drawHermite4$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3(this.isNucleic ? 4 : 7, screens[this.iPrev], screens[i], screens[this.iNext], screens[this.iNext2]);
});

Clazz.newMeth(C$, 'renderHermiteConic$I$Z$I', function (i, thisTypeOnly, tension) {
this.setNeighbors$I(i);
this.colix=this.getLeadColix$I(i);
if (!this.setBioColix$H(this.colix)) return;
if (p$1.setMads$I$Z.apply(this, [i, thisTypeOnly]) || this.isExport ) {
this.meshRenderer.setFancyConic$I$I(i, tension);
return;
}if (this.diameterBeg == 0 && this.diameterEnd == 0  || this.wireframeOnly ) this.g3d.drawLineAB$javajs_util_P3$javajs_util_P3(this.controlPointScreens[i], this.controlPointScreens[this.iNext]);
 else {
this.g3d.fillHermite$I$I$I$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3(this.isNucleic ? 4 : 7, this.diameterBeg, this.diameterMid, this.diameterEnd, this.controlPointScreens[this.iPrev], this.controlPointScreens[i], this.controlPointScreens[this.iNext], this.controlPointScreens[this.iNext2]);
}});

Clazz.newMeth(C$, 'renderHermiteRibbon$Z$I$Z', function (doFill, i, thisTypeOnly) {
this.setNeighbors$I(i);
var c0=this.colix=this.getLeadColix$I(i);
if (!this.setBioColix$H(this.colix)) return;
var cb=this.colixBack=this.getLeadColixBack$I(i);
if (doFill && (this.aspectRatio != 0  || this.isExport ) ) {
if (p$1.setMads$I$Z.apply(this, [i, thisTypeOnly]) || this.isExport ) {
this.meshRenderer.setFancyRibbon$I(i);
return;
}}var isReversed=this.reversed.get$I(i);
if (isReversed && this.colixBack != 0 ) {
this.setColix$H(this.colixBack);
cb=c0;
}this.g3d.drawHermite7$Z$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$I$H(doFill, this.ribbonBorder, (isReversed ? -1 : 1) * (this.isNucleic ? 4 : 7), this.ribbonTopScreens[this.iPrev], this.ribbonTopScreens[i], this.ribbonTopScreens[this.iNext], this.ribbonTopScreens[this.iNext2], this.ribbonBottomScreens[this.iPrev], this.ribbonBottomScreens[i], this.ribbonBottomScreens[this.iNext], this.ribbonBottomScreens[this.iNext2], (this.aspectRatio|0), cb);
if (isReversed && this.colixBack != 0 ) {
this.setColix$H(c0);
cb=this.colixBack;
}});

Clazz.newMeth(C$, 'renderHermiteArrowHead$I', function (i) {
this.colix=this.getLeadColix$I(i);
if (!this.setBioColix$H(this.colix)) return;
this.colixBack=this.getLeadColixBack$I(i);
this.setNeighbors$I(i);
if (p$1.setMads$I$Z.apply(this, [i, false]) || this.isExport ) {
this.meshRenderer.setFancyArrowHead$I(i);
return;
}var cp=this.controlPoints[i];
var wv=this.wingVectors[i];
p$1.calc1Screen$javajs_util_P3$javajs_util_V3$H$F$javajs_util_P3.apply(this, [cp, wv, this.madBeg, 7.0E-4, this.screenArrowTop]);
p$1.calc1Screen$javajs_util_P3$javajs_util_V3$H$F$javajs_util_P3.apply(this, [cp, wv, this.madBeg, -7.0E-4, this.screenArrowBot]);
p$1.calc1Screen$javajs_util_P3$javajs_util_V3$H$F$javajs_util_P3.apply(this, [cp, wv, this.madBeg, 0.001, this.screenArrowTopPrev]);
p$1.calc1Screen$javajs_util_P3$javajs_util_V3$H$F$javajs_util_P3.apply(this, [cp, wv, this.madBeg, -0.001, this.screenArrowBotPrev]);
this.g3d.drawHermite7$Z$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$I$H(true, this.ribbonBorder, this.isNucleic ? 4 : 7, this.screenArrowTopPrev, this.screenArrowTop, this.controlPointScreens[this.iNext], this.controlPointScreens[this.iNext2], this.screenArrowBotPrev, this.screenArrowBot, this.controlPointScreens[this.iNext], this.controlPointScreens[this.iNext2], (this.aspectRatio|0), this.colixBack);
this.g3d.setC$H(this.colix);
if (this.ribbonBorder && this.aspectRatio == 0  ) {
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(3, 3, this.screenArrowTop, this.screenArrowBot);
}});

Clazz.newMeth(C$, 'drawSegmentAB$org_jmol_modelset_Atom$org_jmol_modelset_Atom$H$H$F', function (atomA, atomB, colixA, colixB, max) {
var xA=atomA.sX;
var yA=atomA.sY;
var zA=atomA.sZ;
var xB=atomB.sX;
var yB=atomB.sY;
var zB=atomB.sZ;
var mad=this.mad;
if (max == 1000 ) mad=mad >> 1;
if (mad < 0) {
this.g3d.drawLine$H$H$I$I$I$I$I$I(colixA, colixB, xA, yA, zA, xB, yB, zB);
} else {
var width=((this.isExport ? mad : this.vwr.tm.scaleToScreen$I$I(((zA + zB)/2|0), mad))|0);
this.g3d.fillCylinderXYZ$H$H$B$I$I$I$I$I$I$I(colixA, colixB, 3, width, xA, yA, zA, xB, yB, zB);
}});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:16 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
