(function(){var P$=Clazz.newPackage("org.jmol.smiles"),I$=[[0,'javajs.util.BS']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SmilesRingSet", null, 'javajs.util.Lst');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bs=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.bs=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'addSet$org_jmol_smiles_SmilesRingSet$java_util_Hashtable', function (set, htEdgeMap) {
for (var i=set.size$(); --i >= 0; ) {
var r=set.get$I(i);
this.addRing$org_jmol_smiles_SmilesRing(r);
r.addEdges$java_util_Hashtable(htEdgeMap);
}
});

Clazz.newMeth(C$, 'addRing$org_jmol_smiles_SmilesRing', function (ring) {
this.addLast$TV(ring);
ring.set=this;
this.bs.or$javajs_util_BS(ring);
});

Clazz.newMeth(C$, 'getElectronCount$IA', function (eCounts) {
var eCount=0;
for (var j=this.bs.nextSetBit$I(0); j >= 0; j=this.bs.nextSetBit$I(j + 1)) eCount+=eCounts[j];

return eCount;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
