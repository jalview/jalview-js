(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'org.jmol.viewer.JC']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ShapeRenderer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isExport'],'I',['myVisibilityFlag','shapeID','exportType'],'H',['colix','mad'],'O',['vwr','org.jmol.viewer.Viewer','tm','org.jmol.viewer.TransformManager','g3d','org.jmol.api.JmolRendererInterface','ms','org.jmol.modelset.ModelSet','shape','org.jmol.shape.Shape']]]

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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:16 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
