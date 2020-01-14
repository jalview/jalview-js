(function(){var P$=Clazz.newPackage("jalview.io.vamsas"),I$=[[0,'jalview.javascript.log4j.Logger','java.util.IdentityHashMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DatastoreRegistry");
C$.log=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.log=$I$(1).getLogger$Class(Clazz.getClass(C$));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dsObjReg=null;
this.dsItemReg=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.dsObjReg=Clazz.new_($I$(2));
this.dsItemReg=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'isInvolvedInDsitem$O', function (obj) {
return (Clazz.instanceOf(obj, "jalview.io.vamsas.DatastoreItem")) ? this.dsItemReg.containsKey$O(obj) : this.dsObjReg.containsKey$O(obj);
});

Clazz.newMeth(C$, 'getDatastoreItemFor$O', function (obj) {
if (Clazz.instanceOf(obj, "jalview.io.vamsas.DatastoreItem")) {
C$.log.debug$O("Returning DatastoreItem self reference.");
return obj;
}return this.dsObjReg.get$O(obj);
});

Clazz.newMeth(C$, 'registerDsObj$jalview_io_vamsas_DatastoreItem', function (dsitem) {
var dsregitem=this.dsItemReg.get$O(dsitem);
if (dsregitem == null ) {
dsregitem=Clazz.array(java.lang.Object, -1, [dsitem.jvobj, dsitem.vobj]);
this.dsItemReg.put$TK$TV(dsitem, dsregitem);
this.dsObjReg.put$TK$TV(dsitem.jvobj, dsitem);
this.dsObjReg.put$TK$TV(dsitem.vobj, dsitem);
} else {
if (dsitem.jvobj !== dsregitem[0] ) {
if (dsregitem[0] != null ) {
this.dsObjReg.remove$O(dsregitem[0]);
}if ((dsregitem[0]=dsitem.jvobj) != null ) {
this.dsObjReg.put$TK$TV(dsregitem[0], dsitem);
}}if (dsitem.vobj !== dsregitem[1] ) {
if (dsregitem[1] != null ) {
this.dsObjReg.remove$O(dsregitem[1]);
}if ((dsregitem[1]=dsitem.vobj) != null ) {
this.dsObjReg.put$TK$TV(dsregitem[1], dsitem);
}}}});

Clazz.newMeth(C$, 'removeDsObj$jalview_io_vamsas_DatastoreItem', function (dsitem) {
var dsregitem=null;
{
{
dsregitem=this.dsItemReg.remove$O(dsitem);
if (dsregitem != null ) {
if (dsregitem[0] != null ) {
this.dsObjReg.remove$O(dsregitem[0]);
}if (dsregitem[1] != null ) {
this.dsObjReg.remove$O(dsregitem[1]);
}}}}return dsregitem;
});

Clazz.newMeth(C$, 'finalize$', function () {
if (this.dsObjReg != null ) {
var items=this.dsObjReg.entrySet$().iterator$();
while (items.hasNext$()){
var vals=(items.next$()).getValue$();
vals[0]=null;
vals[1]=null;
}
items=null;
this.dsObjReg.clear$();
}if (this.dsItemReg != null ) {
this.dsItemReg.clear$();
}C$.superclazz.prototype.finalize$.apply(this, []);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
