(function(){var P$=Clazz.newPackage("org.jmol.smiles"),I$=[];
var C$=Clazz.newClass(P$, "SmilesRing", null, 'javajs.util.BS');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.set=null;
this.edges=null;
this.bsEdgesToCheck=null;
this.isOK=false;
this.n=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$javajs_util_BS$javajs_util_Lst$Z', function (n, atoms, edges, isOK) {
Clazz.super_(C$, this,1);
this.or$javajs_util_BS(atoms);
this.edges=edges;
this.isOK=isOK;
this.n=n;
}, 1);

Clazz.newMeth(C$, 'addEdges$java_util_Hashtable', function (htEdgeMap) {
for (var i=this.edges.size$(); --i >= 0; ) htEdgeMap.put$TK$TV(C$.getKey$org_jmol_util_Edge(this.edges.get$I(i)), this.set);

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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
