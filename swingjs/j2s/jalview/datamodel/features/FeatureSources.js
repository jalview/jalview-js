(function(){var P$=Clazz.newPackage("jalview.datamodel.features"),I$=[[0,'java.util.HashMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureSources");
C$.instance=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.instance=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sources=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.sources=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getSource$S', function (sourceId) {
return this.sources.get$O(sourceId);
});

Clazz.newMeth(C$, 'addSource$S$jalview_datamodel_features_FeatureSource', function (sourceId, source) {
this.sources.put$TK$TV(sourceId, source);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
