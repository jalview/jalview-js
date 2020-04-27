(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.awt.Color','jalview.schemes.FeatureColour']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDBFeatureSettings", null, 'jalview.schemes.FeatureSettingsAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isFeatureDisplayed$S', function (type) {
return type.equalsIgnoreCase$S("INSERTION") || type.equalsIgnoreCase$S("RESNUM") ;
});

Clazz.newMeth(C$, 'getFeatureColour$S', function (type) {
if (type.equalsIgnoreCase$S("INSERTION")) {
return ((P$.PDBFeatureSettings$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PDBFeatureSettings$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('jalview.schemes.FeatureColour'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getColour$', function () {
return $I$(1).RED;
});
})()
), Clazz.new_($I$(2,1),[this, null],P$.PDBFeatureSettings$1));
}return null;
});

Clazz.newMeth(C$, ['compare$S$S','compare$O$O'], function (feature1, feature2) {
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
