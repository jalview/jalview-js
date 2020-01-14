(function(){var P$=Clazz.newPackage("org.jmol.renderbio"),p$1={};
var C$=Clazz.newClass(P$, "StrandsRenderer", null, 'org.jmol.renderbio.BioShapeRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.strandCount=0;
this.strandSeparation=0;
this.baseStrandOffset=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.strandCount=1;
}, 1);

Clazz.newMeth(C$, 'renderBioShape$org_jmol_shapebio_BioShape', function (bioShape) {
this.renderStrandShape$();
});

Clazz.newMeth(C$, 'renderStrandShape$', function () {
if (!this.setStrandCount$()) return;
this.renderStrands$();
});

Clazz.newMeth(C$, 'setStrandCount$', function () {
if (this.wingVectors == null ) return false;
this.strandCount=(Clazz.instanceOf(this.shape, "org.jmol.shapebio.Strands") ? this.vwr.getStrandCount$I((this.shape).shapeID) : 10);
this.strandSeparation=(this.strandCount <= 1) ? 0 : 1.0 / (this.strandCount - 1);
this.baseStrandOffset=((this.strandCount & 1) == 0 ? this.strandSeparation / 2 : this.strandSeparation);
return true;
});

Clazz.newMeth(C$, 'renderStrands$', function () {
var screens;
for (var i=this.strandCount >> 1; --i >= 0; ) {
var f=(i * this.strandSeparation) + this.baseStrandOffset;
screens=this.calcScreens$F$HA(f, this.mads);
p$1.renderStrand$javajs_util_P3A.apply(this, [screens]);
this.vwr.freeTempPoints$javajs_util_P3A(screens);
screens=this.calcScreens$F$HA(-f, this.mads);
p$1.renderStrand$javajs_util_P3A.apply(this, [screens]);
this.vwr.freeTempPoints$javajs_util_P3A(screens);
}
if (this.strandCount % 2 == 1) {
screens=this.calcScreens$F$HA(0.0, this.mads);
p$1.renderStrand$javajs_util_P3A.apply(this, [screens]);
this.vwr.freeTempPoints$javajs_util_P3A(screens);
}});

Clazz.newMeth(C$, 'renderStrand$javajs_util_P3A', function (screens) {
for (var i=this.bsVisible.nextSetBit$I(0); i >= 0; i=this.bsVisible.nextSetBit$I(i + 1)) this.renderHermiteCylinder$javajs_util_P3A$I(screens, i);

}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
