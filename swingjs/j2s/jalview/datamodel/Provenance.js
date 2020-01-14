(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.util.Vector','jalview.datamodel.ProvenanceEntry']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Provenance");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.entries=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.entries=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEntries$', function () {
var ret=Clazz.array($I$(2), [this.entries.size$()]);
for (var i=0; i < this.entries.size$(); i++) {
ret[i]=this.entries.elementAt$I(i);
}
return ret;
});

Clazz.newMeth(C$, 'addEntry$S$S$java_util_Date$S', function (user, action, date, id) {
this.entries.addElement$TE(Clazz.new_($I$(2).c$$S$S$java_util_Date$S,[user, action, date, id]));
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
