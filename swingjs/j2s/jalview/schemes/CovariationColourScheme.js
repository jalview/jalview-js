(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.util.Hashtable','jalview.util.ColorUtils','java.awt.Color','jalview.schemes.ResidueProperties']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CovariationColourScheme", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.helixcolorhash=null;
this.positionsToHelix=null;
this.numHelix=0;
this.annotation=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.helixcolorhash=Clazz.new_($I$(1));
this.positionsToHelix=Clazz.new_($I$(1));
this.numHelix=0;
}, 1);

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, coll) {
return Clazz.new_(C$.c$$jalview_datamodel_AlignmentAnnotation,[coll.getAlignmentAnnotation$()[0]]);
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentAnnotation', function (annotation) {
Clazz.super_(C$, this,1);
this.annotation=annotation;
for (var x=0; x < this.annotation._rnasecstr.length; x++) {
this.positionsToHelix.put$TK$TV(new Integer(this.annotation._rnasecstr[x].getBegin$()), this.annotation._rnasecstr[x].getFeatureGroup$());
this.positionsToHelix.put$TK$TV(new Integer(this.annotation._rnasecstr[x].getEnd$()), this.annotation._rnasecstr[x].getFeatureGroup$());
if (Integer.parseInt$S(this.annotation._rnasecstr[x].getFeatureGroup$()) > this.numHelix) {
this.numHelix=Integer.parseInt$S(this.annotation._rnasecstr[x].getFeatureGroup$());
}}
for (var j=0; j <= this.numHelix; j++) {
this.helixcolorhash.put$TK$TV(String.valueOf$I(j), $I$(2).generateRandomColor$java_awt_Color($I$(3).white));
}
}, 1);

Clazz.newMeth(C$, 'findColour$C', function (c) {
return $I$(4).purinepyrimidine[$I$(4).purinepyrimidineIndex[c.$c()]];
});

Clazz.newMeth(C$, 'findColour$C$I', function (c, j) {
var currentColour=$I$(3).white;
var currentHelix=null;
currentHelix=this.positionsToHelix.get$O(new Integer(j));
if (currentHelix != null ) {
currentColour=this.helixcolorhash.get$O(currentHelix);
}return currentColour;
});

Clazz.newMeth(C$, 'isNucleotideSpecific$', function () {
return true;
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return "Covariation";
});

Clazz.newMeth(C$, 'isSimple$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
