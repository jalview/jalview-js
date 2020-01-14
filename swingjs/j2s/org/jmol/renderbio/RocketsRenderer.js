(function(){var P$=Clazz.newPackage("org.jmol.renderbio"),I$=[[0,'javajs.api.Interface','javajs.util.P3','org.jmol.c.STR']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RocketsRenderer", null, 'org.jmol.renderbio.StrandsRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isRockets=false;
this.helixRockets=false;
this.renderArrowHeads=false;
this.cordMidPoints=null;
this.rr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.helixRockets=true;
}, 1);

Clazz.newMeth(C$, 'renderBioShape$org_jmol_shapebio_BioShape', function (bioShape) {
if (!this.setupRR$org_jmol_shapebio_BioShape$Z(bioShape, true)) return;
this.calcRopeMidPoints$();
this.renderRockets$();
this.vwr.freeTempPoints$javajs_util_P3A(this.cordMidPoints);
});

Clazz.newMeth(C$, 'renderRockets$', function () {
if (this.rr == null ) this.rr=($I$(1).getInterface$S("org.jmol.renderbio.RocketRenderer")).set$org_jmol_renderbio_RocketsRenderer(this);
this.rr.renderRockets$();
});

Clazz.newMeth(C$, 'setupRR$org_jmol_shapebio_BioShape$Z', function (bioShape, isRockets) {
this.isRockets=isRockets;
if (this.wireframeOnly) {
this.renderStrands$();
} else if (this.wingVectors != null  && !this.isCarbohydrate  && !(isRockets && this.isNucleic ) ) {
var val=!this.vwr.getBoolean$I(603979902);
if (!this.isNucleic && this.renderArrowHeads != val  ) {
bioShape.falsifyMesh$();
this.renderArrowHeads=val;
}return true;
}return false;
});

Clazz.newMeth(C$, 'calcRopeMidPoints$', function () {
var midPointCount=this.monomerCount + 1;
this.cordMidPoints=this.vwr.allocTempPoints$I(midPointCount);
var proteinstructurePrev=null;
var point;
var ptLastRocket=-10;
var pt1=Clazz.new_($I$(2));
var pt2=Clazz.new_($I$(2));
for (var i=0; i <= this.monomerCount; ++i) {
point=this.cordMidPoints[i];
if (i < this.monomerCount && (this.helixRockets && this.structureTypes[i] === $I$(3).HELIX   || this.isRockets && this.structureTypes[i] === $I$(3).SHEET   ) ) {
var proteinstructure=this.monomers[i].getStructure$();
if (proteinstructure === proteinstructurePrev ) {
pt1.add$javajs_util_T3(pt2);
ptLastRocket=i;
} else {
proteinstructurePrev=proteinstructure;
pt1.setT$javajs_util_T3(proteinstructure.getAxisStartPoint$());
pt2.sub2$javajs_util_T3$javajs_util_T3(proteinstructure.getAxisEndPoint$(), pt1);
pt2.scale$F(1.0 / (proteinstructure.nRes - 1));
if (ptLastRocket == i - 3) {
this.cordMidPoints[i - 1].ave$javajs_util_T3$javajs_util_T3(this.cordMidPoints[i - 2], pt1);
}}point.setT$javajs_util_T3(pt1);
} else {
if (ptLastRocket == i - 1 && i > 1 ) this.cordMidPoints[i - 1].setT$javajs_util_T3(this.cordMidPoints[i > 2 ? i - 3 : i - 2]);
point.setT$javajs_util_T3(proteinstructurePrev == null  ? this.controlPoints[i] : proteinstructurePrev.getAxisEndPoint$());
proteinstructurePrev=null;
}}
this.controlPoints=this.cordMidPoints;
this.calcScreenControlPoints$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
