(function(){var P$=Clazz.newPackage("jalview.io.vamsas"),I$=[];
var C$=Clazz.newClass(P$, "LocalDocSyncObject", null, 'jalview.io.vamsas.DatastoreItem');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
