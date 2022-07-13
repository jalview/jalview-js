(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FollowerColourScheme", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['colourScheme','jalview.schemes.ColourSchemeI']]]

Clazz.newMeth(C$, 'getBaseColour$',  function () {
return this.colourScheme;
});

Clazz.newMeth(C$, 'getSchemeName$',  function () {
return "Follower";
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI',  function (view, coll) {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'getColourScheme$',  function () {
return this.colourScheme;
});

Clazz.newMeth(C$, 'setColourScheme$jalview_schemes_ColourSchemeI',  function (colourScheme) {
this.colourScheme=colourScheme;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
