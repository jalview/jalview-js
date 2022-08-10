(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.schemes.ResidueProperties','jalview.schemes.JalviewColourScheme']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZappoColourScheme", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$IA$java_awt_ColorA.apply(this,[$I$(1).aaIndex, $I$(1).zappo]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isPeptideSpecific$',  function () {
return true;
});

Clazz.newMeth(C$, 'getSchemeName$',  function () {
return $I$(2).Zappo.toString();
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI',  function (view, coll) {
return Clazz.new_(C$);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
