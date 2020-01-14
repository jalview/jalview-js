(function(){var P$=Clazz.newPackage("org.jmol.io");
var C$=Clazz.newClass(P$, "DOMReader");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fm=null;
this.vwr=null;
this.aDOMNode=null;
this.atomSetCollection=null;
this.htParams=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.aDOMNode=Clazz.array(java.lang.Object, [1]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
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
if (info != null ) this.htParams.put$TK$TV("nameSpaceInfo", info);
this.vwr.zap$Z$Z$Z(false, true, false);
this.atomSetCollection=this.vwr.getModelAdapter$().getAtomSetCollectionFromDOM$O$java_util_Map(this.aDOMNode, this.htParams);
if (Clazz.instanceOf(this.atomSetCollection, "java.lang.String")) return;
this.fm.setFileInfo$SA(Clazz.array(String, -1, ["JSNode"]));
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
