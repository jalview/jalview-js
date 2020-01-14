(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.awt.Color','jalview.schemes.FeatureColour']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDBFeatureSettings", null, 'jalview.schemes.FeatureSettingsAdapter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isFeatureDisplayed$S', function (type) {
return type.equalsIgnoreCase$S("INSERTION") || type.equalsIgnoreCase$S("RESNUM") ;
});

Clazz.newMeth(C$, 'getFeatureColour$S', function (type) {
if (type.equalsIgnoreCase$S("INSERTION")) {
return ((P$.PDBFeatureSettings$1||
(function(){var C$=Clazz.newClass(P$, "PDBFeatureSettings$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('jalview.schemes.FeatureColour'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getColour$', function () {
return $I$(1).RED;
});
})()
), Clazz.new_($I$(2), [this, null],P$.PDBFeatureSettings$1));
}return null;
});

Clazz.newMeth(C$, ['compare$S$S','compare$','compare$TT$TT'], function (feature1, feature2) {
if (feature1.equalsIgnoreCase$S("INSERTION")) {
return +1;
}if (feature2.equalsIgnoreCase$S("INSERTION")) {
return -1;
}if (feature1.equalsIgnoreCase$S("RESNUM")) {
return +1;
}if (feature2.equalsIgnoreCase$S("RESNUM")) {
return -1;
}return 0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
