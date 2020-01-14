(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.schemes.ResidueProperties','jalview.schemes.JalviewColourScheme']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NucleotideColourScheme", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$IA$java_awt_ColorA.apply(this, [$I$(1).nucleotideIndex, $I$(1).nucleotide]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isNucleotideSpecific$', function () {
return true;
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return $I$(2).Nucleotide.toString();
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, coll) {
return Clazz.new_(C$);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
