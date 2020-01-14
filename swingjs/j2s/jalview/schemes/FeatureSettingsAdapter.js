(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[];
var C$=Clazz.newClass(P$, "FeatureSettingsAdapter", null, null, 'jalview.api.FeatureSettingsModelI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isFeatureDisplayed$S', function (type) {
return false;
});

Clazz.newMeth(C$, 'isGroupDisplayed$S', function (group) {
return true;
});

Clazz.newMeth(C$, 'getFeatureColour$S', function (type) {
return null;
});

Clazz.newMeth(C$, 'getTransparency$', function () {
return 1.0;
});

Clazz.newMeth(C$, ['compare$S$S','compare$','compare$TT$TT'], function (feature1, feature2) {
return 0;
});

Clazz.newMeth(C$, 'optimiseOrder$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
