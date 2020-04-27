(function(){var P$=Clazz.newPackage("jalview.io.vamsas"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LocalDocSyncObject", null, 'jalview.io.vamsas.DatastoreItem');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'synchronize$Z', function (documentIsUpdated) {
var Lobject=this.getLObject$();
var Vobject=this.getVObject$();
if (Lobject == null ) {
this.newLocalObject$().synchronize$Z(documentIsUpdated);
return;
}if (Vobject == null ) {
this.newDocumentObject$().synchronize$Z(documentIsUpdated);
}if (this.getjv2vObj$O(Lobject) !== Vobject ) {
this.newLocalObject$().synchronize$Z(documentIsUpdated);
this.newDocumentObject$().synchronize$Z(documentIsUpdated);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
