(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.surfacetool"),I$=[[0,'org.jmol.util.C','org.openscience.jmol.app.surfacetool.Slice']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SurfaceStatus");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.id=null;
this.kind=0;
this.color=0;
this.fillOn=false;
this.translucency=0;
this.meshOn=false;
this.meshColor=0;
this.meshTranslucency=0;
this.lighting=0;
this.frontonly=false;
this.show=false;
this.beenSliced=false;
this.capOn=false;
this.ghostOn=false;
this.foundDuringLastSync=false;
this.slice=null;
this.isShell=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_shape_Mesh$I', function (m, type) {
C$.$init$.apply(this);
this.id=m.thisID;
this.kind=type;
this.color=m.color;
this.fillOn=m.fillTriangles;
this.translucency=$I$(1).getColixTranslucencyLevel$H(m.colix);
this.meshOn=m.drawTriangles;
this.meshColor=$I$(1).getArgb$H(m.meshColix);
this.meshTranslucency=0;
this.lighting=m.lighting;
this.frontonly=m.frontOnly;
this.isShell=m.isShell;
this.beenSliced=false;
this.capOn=false;
this.ghostOn=false;
this.foundDuringLastSync=true;
this.slice=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'updateExisting$org_jmol_shape_Mesh', function (m) {
this.color=m.color;
this.fillOn=m.fillTriangles;
this.translucency=$I$(1).getColixTranslucencyLevel$H(m.colix);
this.meshOn=m.drawTriangles;
this.meshColor=$I$(1).getArgb$H(m.meshColix);
this.meshTranslucency=0;
this.lighting=m.lighting;
this.frontonly=m.frontOnly;
this.isShell=m.isShell;
this.foundDuringLastSync=true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
