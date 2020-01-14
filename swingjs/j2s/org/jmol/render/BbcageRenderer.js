(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'org.jmol.util.BoxInfo']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BbcageRenderer", null, 'org.jmol.render.CageRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
