(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.util.Hashtable','jalview.schemes.ResidueProperties','jalview.schemes.ColourSchemeProperty','java.awt.Color','jalview.schemes.JalviewColourScheme']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RNAHelicesColour", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.positionsToHelix=Clazz.new_($I$(1,1));
this.numHelix=0;
this.lastrefresh=-1;
},1);

C$.$fields$=[['I',['numHelix'],'J',['lastrefresh'],'O',['positionsToHelix','java.util.Hashtable','annotation','jalview.datamodel.AlignmentAnnotation']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentAnnotation', function (annotation) {
;C$.superclazz.c$$IA.apply(this,[$I$(2).nucleotideIndex]);C$.$init$.apply(this);
this.annotation=annotation;
$I$(3).resetRnaHelicesShading$();
this.refresh$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AnnotatedCollectionI', function (alignment) {
;C$.superclazz.c$$IA.apply(this,[$I$(2).nucleotideIndex]);C$.$init$.apply(this);
$I$(3).resetRnaHelicesShading$();
this.alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map(alignment, null);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_schemes_RNAHelicesColour', function (rnaHelicesColour) {
;C$.superclazz.c$$IA.apply(this,[$I$(2).nucleotideIndex]);C$.$init$.apply(this);
this.annotation=rnaHelicesColour.annotation;
this.refresh$();
}, 1);

Clazz.newMeth(C$, 'alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map', function (alignment, hiddenReps) {
var annotations=alignment.getAlignmentAnnotation$();
if (annotations == null ) {
return;
}for (var i=0; i < annotations.length; i++) {
if (annotations[i].visible && annotations[i].isRNA$() && annotations[i].isValidStruc$()  ) {
this.annotation=annotations[i];
break;
}}
this.refresh$();
});

Clazz.newMeth(C$, 'refresh$', function () {
if (this.annotation != null  && ((this.annotation._rnasecstr == null  || this.lastrefresh != this.annotation._rnasecstr.hashCode$() ) && this.annotation.isValidStruc$() ) ) {
this.annotation.getRNAStruc$();
this.lastrefresh=this.annotation._rnasecstr.hashCode$();
this.numHelix=0;
this.positionsToHelix=Clazz.new_($I$(1,1));
for (var x=0; x < this.annotation._rnasecstr.length; x++) {
this.positionsToHelix.put$O$O(new Integer(this.annotation._rnasecstr[x].getBegin$()), this.annotation._rnasecstr[x].getFeatureGroup$());
this.positionsToHelix.put$O$O(new Integer(this.annotation._rnasecstr[x].getEnd$()), this.annotation._rnasecstr[x].getFeatureGroup$());
if (Integer.parseInt$S(this.annotation._rnasecstr[x].getFeatureGroup$()) > this.numHelix) {
this.numHelix=Integer.parseInt$S(this.annotation._rnasecstr[x].getFeatureGroup$());
}}
$I$(3).initRnaHelicesShading$I(this.numHelix);
}});

Clazz.newMeth(C$, 'findColour$C', function (c) {
return $I$(2).purinepyrimidine[$I$(2).purinepyrimidineIndex[c.$c()]];
});

Clazz.newMeth(C$, 'findColour$C$I$jalview_datamodel_SequenceI', function (c, j, seq) {
this.refresh$();
var currentColour=$I$(4).white;
var currentHelix=null;
currentHelix=this.positionsToHelix.get$O(new Integer(j));
if (currentHelix != null ) {
currentColour=$I$(3).rnaHelices[Integer.parseInt$S(currentHelix)];
}return currentColour;
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, sg) {
return Clazz.new_(C$.c$$jalview_datamodel_AnnotatedCollectionI,[sg]);
});

Clazz.newMeth(C$, 'isNucleotideSpecific$', function () {
return true;
});

Clazz.newMeth(C$, 'isApplicableTo$jalview_datamodel_AnnotatedCollectionI', function (ac) {
if (Clazz.instanceOf(ac, "jalview.datamodel.AlignmentI") && (ac).hasRNAStructure$() ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return $I$(5).RNAHelices.toString();
});

Clazz.newMeth(C$, 'isSimple$', function () {
return false;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
