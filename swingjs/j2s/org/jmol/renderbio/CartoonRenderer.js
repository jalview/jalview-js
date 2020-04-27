(function(){var P$=Clazz.newPackage("org.jmol.renderbio"),p$1={},I$=[[0,'org.jmol.api.Interface','org.jmol.c.STR']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CartoonRenderer", null, 'org.jmol.renderbio.RocketsRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['nucleicRenderer','org.jmol.renderbio.NucleicRenderer']]]

Clazz.newMeth(C$, 'renderBioShape$org_jmol_shapebio_BioShape', function (bioShape) {
if (!this.setupRR$org_jmol_shapebio_BioShape$Z(bioShape, false)) return;
if (this.isNucleic || this.isPhosphorusOnly ) {
if (this.nucleicRenderer == null ) this.nucleicRenderer=$I$(1).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.renderbio.NucleicRenderer", this.vwr, "render");
this.calcScreenControlPoints$();
this.nucleicRenderer.renderNucleic$org_jmol_renderbio_BioShapeRenderer(this);
return;
}var val=this.vwr.getBoolean$I(603979820);
if (this.helixRockets != val ) {
bioShape.falsifyMesh$();
this.helixRockets=val;
}this.ribbonTopScreens=this.calcScreens$F$HA(0.5, this.mads);
this.ribbonBottomScreens=this.calcScreens$F$HA(-0.5, this.mads);
this.calcRopeMidPoints$();
p$1.renderProtein.apply(this, []);
this.vwr.freeTempPoints$javajs_util_P3A(this.cordMidPoints);
this.vwr.freeTempPoints$javajs_util_P3A(this.ribbonTopScreens);
this.vwr.freeTempPoints$javajs_util_P3A(this.ribbonBottomScreens);
});

Clazz.newMeth(C$, 'renderProtein', function () {
var lastWasSheet=false;
var lastWasHelix=false;
var previousStructure=null;
var thisStructure;
var needRockets=(this.helixRockets || !this.renderArrowHeads );
var doRockets=false;
for (var i=this.monomerCount; --i >= 0; ) {
thisStructure=this.monomers[i].getStructure$();
if (thisStructure !== previousStructure ) {
lastWasSheet=false;
}previousStructure=thisStructure;
var isHelix=(this.structureTypes[i] === $I$(2).HELIX );
var isSheet=(this.structureTypes[i] === $I$(2).SHEET );
if (this.bsVisible.get$I(i)) {
if (isHelix && needRockets ) {
doRockets=true;
} else if (isSheet || isHelix ) {
if (lastWasSheet && isSheet  || lastWasHelix && isHelix  ) {
this.renderHermiteRibbon$Z$I$Z(true, i, true);
} else {
this.renderHermiteArrowHead$I(i);
}} else {
this.renderHermiteConic$I$Z$I(i, true, 7);
}}lastWasSheet=isSheet;
lastWasHelix=isHelix && !this.helixRockets ;
}
if (doRockets) this.renderRockets$();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:16 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
