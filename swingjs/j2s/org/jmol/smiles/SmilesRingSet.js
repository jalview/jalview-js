(function(){var P$=Clazz.newPackage("org.jmol.smiles"),I$=[[0,'javajs.util.BS']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SmilesRingSet", null, 'javajs.util.Lst');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bs=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['bs','javajs.util.BS']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'addSet$org_jmol_smiles_SmilesRingSet$java_util_Hashtable', function (set, htEdgeMap) {
for (var i=set.size$(); --i >= 0; ) {
var r=set.get$I(i);
this.addRing$org_jmol_smiles_SmilesRing(r);
r.addEdges$java_util_Hashtable(htEdgeMap);
}
});

Clazz.newMeth(C$, 'addRing$org_jmol_smiles_SmilesRing', function (ring) {
this.addLast$O(ring);
ring.set=this;
this.bs.or$javajs_util_BS(ring);
});

Clazz.newMeth(C$, 'getElectronCount$IA', function (eCounts) {
var eCount=0;
for (var j=this.bs.nextSetBit$I(0); j >= 0; j=this.bs.nextSetBit$I(j + 1)) eCount+=eCounts[j];

return eCount;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
