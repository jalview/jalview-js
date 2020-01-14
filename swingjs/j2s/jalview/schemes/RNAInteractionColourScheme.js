(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.schemes.ResidueProperties','java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RNAInteractionColourScheme", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'findColour$C', function (c) {
return this.colors[$I$(1).nucleotideIndex[c.$c()]];
});

Clazz.newMeth(C$, 'findColour$C$I$jalview_datamodel_SequenceI', function (c, j, seq) {
var currentColour=$I$(2).white;
try {
currentColour=this.colors[$I$(1).nucleotideIndex[c.$c()]];
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return currentColour;
});

Clazz.newMeth(C$, 'isNucleotideSpecific$', function () {
return true;
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return "RNA Interaction type";
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, coll) {
return Clazz.new_(C$);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
