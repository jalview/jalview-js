(function(){var P$=Clazz.newPackage("org.jmol.smiles"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SmilesRing", null, 'javajs.util.BS');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isOK'],'I',['n'],'O',['set','org.jmol.smiles.SmilesRingSet','edges','javajs.util.Lst','bsEdgesToCheck','javajs.util.BS']]]

Clazz.newMeth(C$, 'c$$I$javajs_util_BS$javajs_util_Lst$Z', function (n, atoms, edges, isOK) {
Clazz.super_(C$, this);
this.or$javajs_util_BS(atoms);
this.edges=edges;
this.isOK=isOK;
this.n=n;
}, 1);

Clazz.newMeth(C$, 'addEdges$java_util_Hashtable', function (htEdgeMap) {
for (var i=this.edges.size$(); --i >= 0; ) htEdgeMap.put$O$O(C$.getKey$org_jmol_util_Edge(this.edges.get$I(i)), this.set);

});

Clazz.newMeth(C$, 'getSetByEdge$org_jmol_util_Edge$java_util_Hashtable', function (edge, htEdgeMap) {
return htEdgeMap.get$O(C$.getKey$org_jmol_util_Edge(edge));
}, 1);

Clazz.newMeth(C$, 'getKey$org_jmol_util_Edge', function (e) {
var i=e.getAtomIndex1$();
var j=e.getAtomIndex2$();
return (i < j ? i + "_" + j  : j + "_" + i );
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
