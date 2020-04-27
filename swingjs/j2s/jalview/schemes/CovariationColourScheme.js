(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.util.Hashtable','jalview.util.ColorUtils','java.awt.Color','jalview.schemes.ResidueProperties']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CovariationColourScheme", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.helixcolorhash=Clazz.new_($I$(1,1));
this.positionsToHelix=Clazz.new_($I$(1,1));
this.numHelix=0;
},1);

C$.$fields$=[['I',['numHelix'],'O',['helixcolorhash','java.util.Map','+positionsToHelix','annotation','jalview.datamodel.AlignmentAnnotation']]]

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, coll) {
return Clazz.new_(C$.c$$jalview_datamodel_AlignmentAnnotation,[coll.getAlignmentAnnotation$()[0]]);
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentAnnotation', function (annotation) {
Clazz.super_(C$, this);
this.annotation=annotation;
for (var x=0; x < this.annotation._rnasecstr.length; x++) {
this.positionsToHelix.put$O$O(new Integer(this.annotation._rnasecstr[x].getBegin$()), this.annotation._rnasecstr[x].getFeatureGroup$());
this.positionsToHelix.put$O$O(new Integer(this.annotation._rnasecstr[x].getEnd$()), this.annotation._rnasecstr[x].getFeatureGroup$());
if (Integer.parseInt$S(this.annotation._rnasecstr[x].getFeatureGroup$()) > this.numHelix) {
this.numHelix=Integer.parseInt$S(this.annotation._rnasecstr[x].getFeatureGroup$());
}}
for (var j=0; j <= this.numHelix; j++) {
this.helixcolorhash.put$O$O(String.valueOf$I(j), $I$(2,"generateRandomColor$java_awt_Color",[$I$(3).white]));
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
