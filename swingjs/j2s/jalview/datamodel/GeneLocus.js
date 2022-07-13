(function(){var P$=Clazz.newPackage("jalview.datamodel");
/*c*/var C$=Clazz.newClass(P$, "GeneLocus", null, 'jalview.datamodel.DBRefEntry', 'jalview.datamodel.GeneLociI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$S$S$jalview_datamodel_Mapping',  function (speciesId, assemblyId, chromosomeId, mapping) {
;C$.superclazz.c$$S$S$S$jalview_datamodel_Mapping.apply(this,[speciesId, assemblyId, chromosomeId, mapping]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S',  function (speciesId, assemblyId, chromosomeId) {
C$.c$$S$S$S$jalview_datamodel_Mapping.apply(this, [speciesId, assemblyId, chromosomeId, null]);
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
return Clazz.instanceOf(o, "jalview.datamodel.GeneLocus") && C$.superclazz.prototype.equals$O.apply(this, [o]) ;
});

Clazz.newMeth(C$, 'getMapping$',  function () {
return this.map == null  ? null : this.map.getMap$();
});

Clazz.newMeth(C$, 'getSpeciesId$',  function () {
return this.getSource$();
});

Clazz.newMeth(C$, 'getAssemblyId$',  function () {
return this.getVersion$();
});

Clazz.newMeth(C$, 'getChromosomeId$',  function () {
return this.getAccessionId$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
