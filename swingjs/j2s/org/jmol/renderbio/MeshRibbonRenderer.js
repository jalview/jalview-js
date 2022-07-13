(function(){var P$=Clazz.newPackage("org.jmol.renderbio"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MeshRibbonRenderer", null, 'org.jmol.renderbio.StrandsRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'renderBioShape$org_jmol_shapebio_BioShape', function (bioShape) {
if (this.wireframeOnly) this.renderStrands$();
 else this.renderMeshRibbon$();
});

Clazz.newMeth(C$, 'renderMeshRibbon$', function () {
if (!this.setStrandCount$()) return;
var offset=((this.strandCount >> 1) * this.strandSeparation) + this.baseStrandOffset;
this.render2Strand$Z$F$F(false, offset, offset);
this.renderStrands$();
});

Clazz.newMeth(C$, 'render2Strand$Z$F$F', function (doFill, offsetTop, offsetBottom) {
this.calcScreenControlPoints$();
this.ribbonTopScreens=this.calcScreens$F$HA(offsetTop, this.mads);
this.ribbonBottomScreens=this.calcScreens$F$HA(-offsetBottom, this.mads);
for (var i=this.bsVisible.nextSetBit$I(0); i >= 0; i=this.bsVisible.nextSetBit$I(i + 1)) this.renderHermiteRibbon$Z$I$Z(doFill, i, false);

this.vwr.freeTempPoints$javajs_util_P3A(this.ribbonTopScreens);
this.vwr.freeTempPoints$javajs_util_P3A(this.ribbonBottomScreens);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
