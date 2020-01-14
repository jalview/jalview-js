(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'org.jmol.viewer.JC']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ShapeRenderer");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.tm=null;
this.g3d=null;
this.ms=null;
this.shape=null;
this.myVisibilityFlag=0;
this.shapeID=0;
this.colix=0;
this.mad=0;
this.exportType=0;
this.isExport=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initRenderer$', function () {
});

Clazz.newMeth(C$, 'setViewerG3dShapeID$org_jmol_viewer_Viewer$I', function (vwr, shapeID) {
this.vwr=vwr;
this.tm=vwr.tm;
this.shapeID=shapeID;
this.myVisibilityFlag=$I$(1).getShapeVisibilityFlag$I(shapeID);
this.initRenderer$();
});

Clazz.newMeth(C$, 'renderShape$org_jmol_api_JmolRendererInterface$org_jmol_modelset_ModelSet$org_jmol_shape_Shape', function (g3d, modelSet, shape) {
this.setup$org_jmol_api_JmolRendererInterface$org_jmol_modelset_ModelSet$org_jmol_shape_Shape(g3d, modelSet, shape);
var needsTranslucent=this.render$();
this.exportType=0;
this.isExport=false;
return needsTranslucent;
});

Clazz.newMeth(C$, 'setup$org_jmol_api_JmolRendererInterface$org_jmol_modelset_ModelSet$org_jmol_shape_Shape', function (g3d, modelSet, shape) {
this.g3d=g3d;
this.ms=modelSet;
this.shape=shape;
this.exportType=g3d.getExportType$();
this.isExport=(this.exportType != 0);
});

Clazz.newMeth(C$, 'isVisibleForMe$org_jmol_modelset_Atom', function (a) {
return a.isVisible$I(this.myVisibilityFlag | 9);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
