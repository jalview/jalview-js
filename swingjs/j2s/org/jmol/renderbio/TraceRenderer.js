(function(){var P$=Clazz.newPackage("org.jmol.renderbio"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TraceRenderer", null, 'org.jmol.renderbio.StrandsRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'renderBioShape$org_jmol_shapebio_BioShape', function (bioShape) {
if (this.wireframeOnly) this.renderStrands$();
 else this.renderTrace$();
});

Clazz.newMeth(C$, 'renderTrace$', function () {
this.calcScreenControlPoints$();
for (var i=this.bsVisible.nextSetBit$I(0); i >= 0; i=this.bsVisible.nextSetBit$I(i + 1)) this.renderHermiteConic$I$Z$I(i, false, 7);

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
