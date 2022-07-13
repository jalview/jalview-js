(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.surfacetool"),I$=[[0,'org.jmol.util.C','org.openscience.jmol.app.surfacetool.Slice']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SurfaceStatus");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['fillOn','meshOn','frontonly','show','beenSliced','capOn','ghostOn','foundDuringLastSync','isShell'],'I',['kind','color','translucency','meshColor','meshTranslucency','lighting'],'S',['id'],'O',['slice','org.openscience.jmol.app.surfacetool.Slice']]]

Clazz.newMeth(C$, 'c$$org_jmol_shape_Mesh$I', function (m, type) {
;C$.$init$.apply(this);
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
this.slice=Clazz.new_($I$(2,1));
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
