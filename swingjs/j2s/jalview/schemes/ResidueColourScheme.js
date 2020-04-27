(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.awt.Color']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ResidueColourScheme", null, null, 'jalview.schemes.ColourSchemeI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.colors=null;
this.ignoreGaps=false;
},1);

C$.$fields$=[['Z',['ignoreGaps'],'O',['symbolIndex','int[]','colors','java.awt.Color[]']]]

Clazz.newMeth(C$, 'c$$IA$java_awt_ColorA', function (aaOrnaIndex, colours) {
;C$.$init$.apply(this);
this.symbolIndex=aaOrnaIndex;
this.colors=colours;
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (aaOrNaIndex) {
;C$.$init$.apply(this);
this.symbolIndex=aaOrNaIndex;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.symbolIndex=null;
}, 1);

Clazz.newMeth(C$, 'findColour$C', function (c) {
var colour=$I$(1).white;
if (this.colors != null  && this.symbolIndex != null   && c.$c() < this.symbolIndex.length   && this.symbolIndex[c.$c()] < this.colors.length ) {
colour=this.colors[this.symbolIndex[c.$c()]];
}return colour;
});

Clazz.newMeth(C$, 'findColour$C$I$jalview_datamodel_SequenceI$S$F', function (c, j, seq, consensusResidue, pid) {
return this.findColour$C$I$jalview_datamodel_SequenceI(c, j, seq);
});

Clazz.newMeth(C$, 'findColour$C$I$jalview_datamodel_SequenceI', function (c, j, seq) {
return this.findColour$C(c);
});

Clazz.newMeth(C$, 'alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map', function (alignment, hiddenReps) {
});

Clazz.newMeth(C$, 'isApplicableTo$jalview_datamodel_AnnotatedCollectionI', function (ac) {
if (!this.isPeptideSpecific$() && !this.isNucleotideSpecific$() ) {
return true;
}if (ac == null ) {
return true;
}if (Clazz.instanceOf(ac, "jalview.datamodel.SequenceGroup") && ac.getContext$() == null  ) {
return true;
}var nucleotide=ac.isNucleotide$();
return (nucleotide && this.isNucleotideSpecific$() ) || (!nucleotide && this.isPeptideSpecific$() ) ;
});

Clazz.newMeth(C$, 'isPeptideSpecific$', function () {
return false;
});

Clazz.newMeth(C$, 'isNucleotideSpecific$', function () {
return false;
});

Clazz.newMeth(C$, 'isSimple$', function () {
return true;
});

Clazz.newMeth(C$, 'hasGapColour$', function () {
return false;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
