(function(){var P$=Clazz.newPackage("org.jmol.renderbio"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RibbonsRenderer", null, 'org.jmol.renderbio.MeshRibbonRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'renderBioShape$org_jmol_shapebio_BioShape', function (bioShape) {
if (this.wingVectors == null ) return;
if (this.wireframeOnly) this.renderStrands$();
 else this.render2Strand$Z$F$F(true, this.isNucleic ? 1.0 : 0.5, this.isNucleic ? 0.0 : 0.5);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
