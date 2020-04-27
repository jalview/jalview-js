(function(){var P$=Clazz.newPackage("jalview.datamodel.features"),I$=[[0,'java.util.HashMap']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureSources");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sources','java.util.Map']]
,['O',['instance','jalview.datamodel.features.FeatureSources']]]

Clazz.newMeth(C$, 'getInstance$', function () {
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.sources=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'getSource$S', function (sourceId) {
return this.sources.get$O(sourceId);
});

Clazz.newMeth(C$, 'addSource$S$jalview_datamodel_features_FeatureSource', function (sourceId, source) {
this.sources.put$O$O(sourceId, source);
});

C$.$static$=function(){C$.$static$=0;
C$.instance=Clazz.new_(C$);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
