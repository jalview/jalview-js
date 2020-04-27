(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.util.Vector','jalview.datamodel.ProvenanceEntry']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Provenance");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.entries=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['entries','java.util.Vector']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEntries$', function () {
var ret=Clazz.array($I$(2), [this.entries.size$()]);
for (var i=0; i < this.entries.size$(); i++) {
ret[i]=this.entries.elementAt$I(i);
}
return ret;
});

Clazz.newMeth(C$, 'addEntry$S$S$java_util_Date$S', function (user, action, date, id) {
this.entries.addElement$O(Clazz.new_($I$(2,1).c$$S$S$java_util_Date$S,[user, action, date, id]));
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
