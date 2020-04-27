(function(){var P$=Clazz.newPackage("jalview.io.vamsas"),I$=[[0,'jalview.javascript.log4j.Logger','java.util.IdentityHashMap']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DatastoreRegistry", null, null, 'AutoCloseable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dsObjReg','java.util.IdentityHashMap','+dsItemReg']]
,['O',['log','jalview.javascript.log4j.Logger']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.dsObjReg=Clazz.new_($I$(2,1));
this.dsItemReg=Clazz.new_($I$(2,1));
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
this.dsItemReg.put$O$O(dsitem, dsregitem);
this.dsObjReg.put$O$O(dsitem.jvobj, dsitem);
this.dsObjReg.put$O$O(dsitem.vobj, dsitem);
} else {
if (dsitem.jvobj !== dsregitem[0] ) {
if (dsregitem[0] != null ) {
this.dsObjReg.remove$O(dsregitem[0]);
}if ((dsregitem[0]=dsitem.jvobj) != null ) {
this.dsObjReg.put$O$O(dsregitem[0], dsitem);
}}if (dsitem.vobj !== dsregitem[1] ) {
if (dsregitem[1] != null ) {
this.dsObjReg.remove$O(dsregitem[1]);
}if ((dsregitem[1]=dsitem.vobj) != null ) {
this.dsObjReg.put$O$O(dsregitem[1], dsitem);
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

Clazz.newMeth(C$, 'close$', function () {
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
}});

C$.$static$=function(){C$.$static$=0;
C$.log=$I$(1,"getLogger$Class",[Clazz.getClass(C$)]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
