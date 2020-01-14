(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[];
var C$=Clazz.newClass(P$, "FollowerColourScheme", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.colourScheme=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getBaseColour$', function () {
return this.colourScheme;
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return "Follower";
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, coll) {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'getColourScheme$', function () {
return this.colourScheme;
});

Clazz.newMeth(C$, 'setColourScheme$jalview_schemes_ColourSchemeI', function (colourScheme) {
this.colourScheme=colourScheme;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
