(function(){var P$=Clazz.newPackage("org.jmol.io");
/*c*/var C$=Clazz.newClass(P$, "DOMReader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.aDOMNode=Clazz.array(java.lang.Object, [1]);
},1);

C$.$fields$=[['O',['fm','org.jmol.viewer.FileManager','vwr','org.jmol.viewer.Viewer','aDOMNode','Object[]','atomSetCollection','java.lang.Object','htParams','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_viewer_FileManager$org_jmol_viewer_Viewer$O$java_util_Map', function (fileManager, vwr, DOMNode, htParams) {
this.fm=fileManager;
this.vwr=vwr;
this.aDOMNode[0]=DOMNode;
this.htParams=htParams;
});

Clazz.newMeth(C$, 'run$', function () {
var info=null;
{

}
if (info != null ) this.htParams.put$O$O("nameSpaceInfo", info);
this.vwr.zap$Z$Z$Z(false, true, false);
this.atomSetCollection=this.vwr.getModelAdapter$().getAtomSetCollectionFromDOM$O$java_util_Map(this.aDOMNode, this.htParams);
if (Clazz.instanceOf(this.atomSetCollection, "java.lang.String")) return;
this.fm.setFileInfo$SA(Clazz.array(String, -1, ["JSNode"]));
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:09 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
