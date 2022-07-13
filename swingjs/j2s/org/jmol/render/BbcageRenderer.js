(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'org.jmol.util.BoxInfo']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BbcageRenderer", null, 'org.jmol.render.CageRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initRenderer$', function () {
this.tickEdges=$I$(1).bbcageTickEdges;
});

Clazz.newMeth(C$, 'render$', function () {
var bbox=this.shape;
var hiddenLines=(this.vwr.getBoolean$I(603979856));
if (bbox.isVisible && (this.isExport || this.g3d.checkTranslucent$Z(false) ) && !this.vwr.isJmolDataFrame$()  ) {
this.colix=this.vwr.getObjectColix$I(4);
this.renderCage$I$javajs_util_P3A$IAA$javajs_util_P3A$I$I$I$F(this.vwr.getObjectMad10$I(4), this.ms.getBBoxVertices$(), (hiddenLines ? $I$(1).facePoints : null), null, 0, 255, 255, 1);
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
