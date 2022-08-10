(function(){var P$=Clazz.newPackage("jalview.datamodel.features"),I$=[[0,'java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureSource", null, null, 'jalview.datamodel.features.FeatureSourceI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name'],'O',['attributeNames','java.util.Map','+attributeTypes']]]

Clazz.newMeth(C$, 'c$$S',  function (theName) {
;C$.$init$.apply(this);
this.name=theName;
this.attributeNames=Clazz.new_($I$(1,1));
this.attributeTypes=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getAttributeName$S',  function (attributeId) {
return this.attributeNames.get$O(attributeId);
});

Clazz.newMeth(C$, 'getAttributeType$S',  function (attributeId) {
return this.attributeTypes.get$O(attributeId);
});

Clazz.newMeth(C$, 'setAttributeName$S$S',  function (id, attName) {
this.attributeNames.put$O$O(id, attName);
});

Clazz.newMeth(C$, 'setAttributeType$S$jalview_datamodel_features_FeatureAttributeType',  function (id, type) {
this.attributeTypes.put$O$O(id, type);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
