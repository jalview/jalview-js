(function(){var P$=Clazz.newPackage("jalview.datamodel.features"),I$=[[0,'java.util.HashMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureSource", null, null, 'jalview.datamodel.features.FeatureSourceI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.attributeNames=null;
this.attributeTypes=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (theName) {
C$.$init$.apply(this);
this.name=theName;
this.attributeNames=Clazz.new_($I$(1));
this.attributeTypes=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getAttributeName$S', function (attributeId) {
return this.attributeNames.get$O(attributeId);
});

Clazz.newMeth(C$, 'getAttributeType$S', function (attributeId) {
return this.attributeTypes.get$O(attributeId);
});

Clazz.newMeth(C$, 'setAttributeName$S$S', function (id, attName) {
this.attributeNames.put$TK$TV(id, attName);
});

Clazz.newMeth(C$, 'setAttributeType$S$jalview_datamodel_features_FeatureAttributeType', function (id, type) {
this.attributeTypes.put$TK$TV(id, type);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
