(function(){var P$=Clazz.newPackage("jalview.analysis"),p$1={},I$=[[0,'jalview.analysis.CodonComparator','java.util.Arrays','jalview.util.ShiftList','java.util.ArrayList','jalview.datamodel.AlignedCodonFrame','jalview.datamodel.AlignedCodon','jalview.datamodel.SequenceI','jalview.datamodel.Alignment','jalview.util.DBRefUtils','jalview.datamodel.DBRefSource','jalview.datamodel.Annotation','jalview.datamodel.AlignmentAnnotation','jalview.datamodel.GraphLine','StringBuilder','jalview.util.Comparison','jalview.schemes.ResidueProperties','jalview.datamodel.Sequence','jalview.util.MapList','jalview.datamodel.FeatureProperties']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Dna");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.aaWidth=0;
},1);

C$.$fields$=[['C',['gapChar'],'I',['dnaWidth','aaWidth'],'O',['selection','java.util.List','seqstring','String[]','contigs','java.util.Iterator','annotations','jalview.datamodel.AlignmentAnnotation[]','dataset','jalview.datamodel.AlignmentI','vismapping','jalview.util.ShiftList','startcontigs','int[]','alignedCodons','jalview.datamodel.AlignedCodon[]']]
,['O',['comparator','java.util.Comparator']]]

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$java_util_Iterator',  function (viewport, visibleContigs) {
;C$.$init$.apply(this);
this.selection=$I$(2,"asList$OA",[viewport.getSequenceSelection$()]);
this.seqstring=viewport.getViewAsString$Z(true);
this.contigs=visibleContigs;
this.gapChar=viewport.getGapCharacter$();
this.annotations=viewport.getAlignment$().getAlignmentAnnotation$();
this.dnaWidth=viewport.getAlignment$().getWidth$();
this.dataset=viewport.getAlignment$().getDataset$();
p$1.initContigs.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'initContigs',  function () {
this.vismapping=Clazz.new_($I$(3,1));
var npos=0;
var lastregion=null;
var tempcontigs=Clazz.new_($I$(4,1));
while (this.contigs.hasNext$()){
var region=this.contigs.next$();
if (lastregion == null ) {
this.vismapping.addShift$I$I(npos, region[0]);
} else {
this.vismapping.addShift$I$I(npos, region[0] - lastregion[1] + 1);
}lastregion=region;
tempcontigs.add$O(Integer.valueOf$I(region[0]));
tempcontigs.add$O(Integer.valueOf$I(region[1]));
}
this.startcontigs=Clazz.array(Integer.TYPE, [tempcontigs.size$()]);
var i=0;
for (var val, $val = tempcontigs.iterator$(); $val.hasNext$()&&((val=($val.next$())),1);) {
this.startcontigs[i]=(val).$c();
++i;
}
tempcontigs=null;
}, p$1);

Clazz.newMeth(C$, 'compareCodonPos$jalview_datamodel_AlignedCodon$jalview_datamodel_AlignedCodon',  function (ac1, ac2) {
return C$.comparator.compare$O$O(ac1, ac2);
}, 1);

Clazz.newMeth(C$, 'jalview_2_8_2compare$jalview_datamodel_AlignedCodon$jalview_datamodel_AlignedCodon',  function (ac1, ac2) {
if (ac1 == null  || ac2 == null   || (ac1.equals$O(ac2)) ) {
return 0;
}if (ac1.pos1 < ac2.pos1 || ac1.pos2 < ac2.pos2  || ac1.pos3 < ac2.pos3 ) {
return -1;
}return 1;
}, 1);

Clazz.newMeth(C$, 'translateCdna$jalview_analysis_GeneticCodeI',  function (codeTable) {
var acf=Clazz.new_($I$(5,1));
this.alignedCodons=Clazz.array($I$(6), [this.dnaWidth]);
var s;
var sSize=this.selection.size$();
var pepseqs=Clazz.new_($I$(4,1));
for (s=0; s < sSize; s++) {
var newseq=this.translateCodingRegion$jalview_datamodel_SequenceI$S$jalview_datamodel_AlignedCodonFrame$java_util_List$jalview_analysis_GeneticCodeI(this.selection.get$I(s), this.seqstring[s], acf, pepseqs, codeTable);
if (newseq != null ) {
pepseqs.add$O(newseq);
var ds=newseq;
if (this.dataset != null ) {
while (ds.getDatasetSequence$() != null ){
ds=ds.getDatasetSequence$();
}
this.dataset.addSequence$jalview_datamodel_SequenceI(ds);
}}}
var newseqs=pepseqs.toArray$OA(Clazz.array($I$(7), [pepseqs.size$()]));
var al=Clazz.new_($I$(8,1).c$$jalview_datamodel_SequenceIA,[newseqs]);
al.padGaps$();
al.setDataset$jalview_datamodel_AlignmentI(this.dataset);
this.translateAlignedAnnotations$jalview_datamodel_AlignmentI$jalview_datamodel_AlignedCodonFrame(al, acf);
al.addCodonFrame$jalview_datamodel_AlignedCodonFrame(acf);
return al;
});

Clazz.newMeth(C$, 'canTranslate$jalview_datamodel_SequenceIA$IA',  function (selection, viscontigs) {
for (var gd=0; gd < selection.length; gd++) {
var dna=selection[gd];
var dnarefs=$I$(9,"selectRefs$java_util_List$SA",[dna.getDBRefs$(), $I$(10).DNACODINGDBS]);
if (dnarefs != null ) {
var mappedrefs=Clazz.new_($I$(4,1));
var refs=dna.getDBRefs$();
for (var d=0, nd=refs.size$(); d < nd; d++) {
var ref=refs.get$I(d);
if (ref.getMap$() != null  && ref.getMap$().getMap$() != null   && ref.getMap$().getMap$().getFromRatio$() == 3  && ref.getMap$().getMap$().getToRatio$() == 1 ) {
mappedrefs.add$O(ref);
}}
dnarefs=mappedrefs;
for (var d=0, nd=dnarefs.size$(); d < nd; d++) {
var mp=dnarefs.get$I(d).getMap$();
if (mp != null ) {
for (var vc=0, nv=viscontigs.length; vc < nv; vc+=2) {
var mpr=mp.locateMappedRange$I$I(viscontigs[vc], viscontigs[vc + 1]);
if (mpr != null ) {
return true;
}}
}}
}}
return false;
}, 1);

Clazz.newMeth(C$, 'translateAlignedAnnotations$jalview_datamodel_AlignmentI$jalview_datamodel_AlignedCodonFrame',  function (al, acf) {
if (this.annotations != null ) {
for (var annotation, $annotation = 0, $$annotation = this.annotations; $annotation<$$annotation.length&&((annotation=($$annotation[$annotation])),1);$annotation++) {
if (annotation.autoCalculated || !annotation.visible || annotation.isRNA$()  ) {
continue;
}var aSize=this.aaWidth;
var anots=(annotation.annotations == null ) ? null : Clazz.array($I$(11), [aSize]);
if (anots != null ) {
for (var a=0; a < aSize; a++) {
if (a < this.alignedCodons.length && this.alignedCodons[a] != null   && this.alignedCodons[a].pos1 == (this.alignedCodons[a].pos3 - 2) ) {
anots[a]=C$.getCodonAnnotation$jalview_datamodel_AlignedCodon$jalview_datamodel_AnnotationA(this.alignedCodons[a], annotation.annotations);
}}
}var aa=Clazz.new_($I$(12,1).c$$S$S$jalview_datamodel_AnnotationA,[annotation.label, annotation.description, anots]);
aa.graph=annotation.graph;
aa.graphGroup=annotation.graphGroup;
aa.graphHeight=annotation.graphHeight;
if (annotation.getThreshold$() != null ) {
aa.setThreshold$jalview_datamodel_GraphLine(Clazz.new_([annotation.getThreshold$()],$I$(13,1).c$$jalview_datamodel_GraphLine));
}if (annotation.hasScore) {
aa.setScore$D(annotation.getScore$());
}var seqRef=annotation.sequenceRef;
if (seqRef != null ) {
var aaSeq=acf.getAaForDnaSeq$jalview_datamodel_SequenceI(seqRef);
if (aaSeq != null ) {
aa.setSequenceRef$jalview_datamodel_SequenceI(aaSeq);
aa.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(aaSeq, aaSeq.getStart$(), true);
aa.adjustForAlignment$();
aaSeq.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(aa);
}}al.addAnnotation$jalview_datamodel_AlignmentAnnotation(aa);
}
}});

Clazz.newMeth(C$, 'getCodonAnnotation$jalview_datamodel_AlignedCodon$jalview_datamodel_AnnotationA',  function (is, annotations) {
var contrib=0;
var annot=null;
for (var p=1; p <= 3; p++) {
var dnaCol=is.getBaseColumn$I(p);
if (annotations[dnaCol] != null ) {
if (annot == null ) {
annot=Clazz.new_($I$(11,1).c$$jalview_datamodel_Annotation,[annotations[dnaCol]]);
contrib=1;
} else {
var cpy=Clazz.new_($I$(11,1).c$$jalview_datamodel_Annotation,[annotations[dnaCol]]);
if (annot.colour == null ) {
annot.colour=cpy.colour;
}if (annot.description == null  || annot.description.length$() == 0 ) {
annot.description=cpy.description;
}if (annot.displayCharacter == null ) {
annot.displayCharacter=cpy.displayCharacter;
}if (annot.secondaryStructure.$c() == 0 ) {
annot.secondaryStructure=cpy.secondaryStructure;
}annot.value+=cpy.value;
++contrib;
}}}
if (contrib > 1) {
annot.value/=contrib;
}return annot;
}, 1);

Clazz.newMeth(C$, 'translateCodingRegion$jalview_datamodel_SequenceI$S$jalview_datamodel_AlignedCodonFrame$java_util_List$jalview_analysis_GeneticCodeI',  function (selection, seqstring, acf, proteinSeqs, codeTable) {
var skip=Clazz.new_($I$(4,1));
var skipint=null;
var npos=0;
var vc=0;
var scontigs=Clazz.array(Integer.TYPE, [this.startcontigs.length]);
System.arraycopy$O$I$O$I$I(this.startcontigs, 0, scontigs, 0, this.startcontigs.length);
var protein=Clazz.new_([(seqstring.length$()/2|0)],$I$(14,1).c$$I);
var seq=seqstring.replace$C$C("U", "T").replace$C$C("u", "T");
var codon=Clazz.array(Character.TYPE, [3]);
var cdp=Clazz.array(Integer.TYPE, [3]);
var rf=0;
var lastnpos=0;
var nend;
var aspos=0;
var resSize=0;
for (npos=0, nend=seq.length$(); npos < nend; npos++) {
if (!$I$(15,"isGap$C",[seq.charAt$I(npos)])) {
cdp[rf]=npos;
codon[rf++]=seq.charAt$I(npos);
}if (rf == 3) {
var alignedCodon=Clazz.new_($I$(6,1).c$$I$I$I,[cdp[0], cdp[1], cdp[2]]);
var aa=codeTable.translate$S( String.instantialize(codon));
rf=0;
var gapString=String.valueOf$C(this.gapChar);
if (aa == null ) {
aa=gapString;
if (skipint == null ) {
skipint=Clazz.array(Integer.TYPE, -1, [alignedCodon.pos1, alignedCodon.pos3]);
}skipint[1]=alignedCodon.pos3;
} else {
if (skipint != null ) {
skipint[0]=this.vismapping.shift$I(skipint[0]);
skipint[1]=this.vismapping.shift$I(skipint[1]);
for (vc=0; vc < scontigs.length; ) {
if (scontigs[vc + 1] < skipint[0]) {
vc+=2;
continue;
}if (scontigs[vc] > skipint[1]) {
break;
}var t;
if (scontigs[vc] <= skipint[0]) {
if (skipint[0] == scontigs[vc]) {
if (scontigs[vc + 1] > skipint[1]) {
scontigs[vc]=skipint[1];
vc+=2;
} else {
if (scontigs[vc + 1] == skipint[1]) {
t=Clazz.array(Integer.TYPE, [scontigs.length - 2]);
if (vc > 0) {
System.arraycopy$O$I$O$I$I(scontigs, 0, t, 0, vc - 1);
}if (vc + 2 < t.length) {
System.arraycopy$O$I$O$I$I(scontigs, vc + 2, t, vc, t.length - vc + 2);
}scontigs=t;
} else {
scontigs[vc + 1]=skipint[0] - 1;
vc+=2;
}}} else {
if (scontigs[vc + 1] < skipint[1]) {
scontigs[vc + 1]=skipint[0] - 1;
vc+=2;
} else {
t=Clazz.array(Integer.TYPE, [scontigs.length + 2]);
System.arraycopy$O$I$O$I$I(scontigs, 0, t, 0, vc + 1);
t[vc + 1]=skipint[0];
t[vc + 2]=skipint[1];
System.arraycopy$O$I$O$I$I(scontigs, vc + 1, t, vc + 3, scontigs.length - (vc + 1));
scontigs=t;
vc+=4;
}}}}
skip.add$O(skipint);
skipint=null;
}if (aa.equals$O($I$(16).STOP)) {
aa="*";
}++resSize;
}var findpos=true;
while (findpos){
var compareCodonPos=C$.compareCodonPos$jalview_datamodel_AlignedCodon$jalview_datamodel_AlignedCodon(alignedCodon, this.alignedCodons[aspos]);
switch (compareCodonPos) {
case -1:
this.insertAAGap$I$java_util_List(aspos, proteinSeqs);
findpos=false;
break;
case 1:
aa=gapString + aa;
++aspos;
break;
case 0:
findpos=false;
}
}
protein.append$S(aa);
lastnpos=npos;
if (this.alignedCodons[aspos] == null ) {
this.alignedCodons[aspos]=alignedCodon;
} else if (!this.alignedCodons[aspos].equals$O(alignedCodon)) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Tried to coalign " + this.alignedCodons[aspos].toString() + " with " + alignedCodon.toString() ]);
}if (aspos >= this.aaWidth) {
this.aaWidth=aspos;
}++aspos;
}}
if (resSize > 0) {
var newseq=Clazz.new_([selection.getName$(), protein.toString()],$I$(17,1).c$$S$S);
if (rf != 0) {
var errMsg="trimming contigs for incomplete terminal codon.";
System.err.println$S("trimming contigs for incomplete terminal codon.");
vc=scontigs.length - 1;
lastnpos=this.vismapping.shift$I(lastnpos);
while (vc >= 0 && scontigs[vc] > lastnpos ){
if (vc > 0 && scontigs[vc - 1] > lastnpos ) {
vc-=2;
} else {
scontigs[vc]=lastnpos;
}}
if (vc > 0 && (vc + 1) < scontigs.length ) {
var t=Clazz.array(Integer.TYPE, [vc + 1]);
System.arraycopy$O$I$O$I$I(scontigs, 0, t, 0, vc + 1);
scontigs=t;
}if (vc <= 0) {
scontigs=null;
}}if (scontigs != null ) {
npos=0;
for (vc=0; vc < scontigs.length; vc+=2) {
scontigs[vc]=selection.findPosition$I(scontigs[vc]);
scontigs[vc + 1]=selection.findPosition$I(scontigs[vc + 1]);
if (scontigs[vc + 1] == selection.getEnd$()) {
break;
}}
if ((vc + 2) < scontigs.length) {
var t=Clazz.array(Integer.TYPE, [vc + 2]);
System.arraycopy$O$I$O$I$I(scontigs, 0, t, 0, vc + 2);
scontigs=t;
}var map=Clazz.new_([scontigs, Clazz.array(Integer.TYPE, -1, [1, resSize]), 3, 1],$I$(18,1).c$$IA$IA$I$I);
C$.transferCodedFeatures$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(selection, newseq, map);
var rseq=newseq.deriveSequence$();
acf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(selection, rseq, map);
return rseq;
}}return null;
});

Clazz.newMeth(C$, 'insertAAGap$I$java_util_List',  function (pos, proteinSeqs) {
++this.aaWidth;
for (var seq, $seq = proteinSeqs.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
seq.insertCharAt$I$C(pos, this.gapChar);
}
this.checkCodonFrameWidth$();
if (pos < this.aaWidth) {
++this.aaWidth;
System.arraycopy$O$I$O$I$I(this.alignedCodons, pos, this.alignedCodons, pos + 1, this.alignedCodons.length - pos - 1 );
this.alignedCodons[pos]=null;
}});

Clazz.newMeth(C$, 'checkCodonFrameWidth$',  function () {
if (this.alignedCodons[this.alignedCodons.length - 1] != null ) {
var c=Clazz.array($I$(6), [this.alignedCodons.length + 10]);
System.arraycopy$O$I$O$I$I(this.alignedCodons, 0, c, 0, this.alignedCodons.length);
this.alignedCodons=c;
}});

Clazz.newMeth(C$, 'transferCodedFeatures$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList',  function (dna, pep, map) {
for (var sf, $sf = dna.getFeatures$().getAllFeatures$SA(Clazz.array(String, -1, [])).iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if ($I$(19,"isCodingFeature$S$S",[null, sf.getType$()])) {
{
}}}
}, 1);

Clazz.newMeth(C$, 'reverseCdna$Z',  function (complement) {
var sSize=this.selection.size$();
var reversed=Clazz.new_($I$(4,1));
for (var s=0; s < sSize; s++) {
var newseq=C$.reverseSequence$S$S$Z(this.selection.get$I(s).getName$(), this.seqstring[s], complement);
if (newseq != null ) {
reversed.add$O(newseq);
}}
var newseqs=reversed.toArray$OA(Clazz.array($I$(7), [reversed.size$()]));
var al=Clazz.new_($I$(8,1).c$$jalview_datamodel_SequenceIA,[newseqs]);
(al).createDatasetAlignment$();
return al;
});

Clazz.newMeth(C$, 'reverseSequence$S$S$Z',  function (seqName, sequence, complement) {
var newName=seqName + "|rev" + (complement ? "comp" : "") ;
var originalSequence=sequence.toCharArray$();
var length=originalSequence.length;
var reversedSequence=Clazz.array(Character.TYPE, [length]);
var bases=0;
for (var i=0; i < length; i++) {
var c=complement ? C$.getComplement$C(originalSequence[i]) : originalSequence[i];
reversedSequence[length - i - 1 ]=c;
if (!$I$(15).isGap$C(c)) {
++bases;
}}
var reversed=Clazz.new_($I$(17,1).c$$S$CA$I$I,[newName, reversedSequence, 1, bases]);
return reversed;
}, 1);

Clazz.newMeth(C$, 'reverseComplement$S',  function (s) {
var sb=Clazz.new_([s.length$()],$I$(14,1).c$$I);
for (var i=s.length$() - 1; i >= 0; i--) {
sb.append$C(C$.getComplement$C(s.charAt$I(i)));
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getComplement$C',  function (c) {
var result=c;
switch (c.$c()) {
case 45:
case 46:
case 32:
break;
case 97:
result="t";
break;
case 65:
result="T";
break;
case 99:
result="g";
break;
case 67:
result="G";
break;
case 103:
result="c";
break;
case 71:
result="C";
break;
case 116:
result="a";
break;
case 84:
result="A";
break;
case 117:
result="a";
break;
case 85:
result="A";
break;
case 114:
result="y";
break;
case 82:
result="Y";
break;
case 121:
result="r";
break;
case 89:
result="R";
break;
case 107:
result="m";
break;
case 75:
result="M";
break;
case 109:
result="k";
break;
case 77:
result="K";
break;
case 98:
result="v";
break;
case 66:
result="V";
break;
case 118:
result="b";
break;
case 86:
result="B";
break;
case 100:
result="h";
break;
case 68:
result="H";
break;
case 104:
result="d";
break;
case 72:
result="D";
break;
}
return result;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.comparator=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
