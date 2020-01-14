(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'jalview.datamodel.AlignedCodon','jalview.util.Comparison','jalview.util.MapList','jalview.datamodel.SequenceFeature','java.util.Vector',['jalview.datamodel.Mapping','.AlignedCodonIterator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Mapping", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.map=null;
this.to=null;
this.mappedFromId=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.map=null;
this.to=null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_util_MapList', function (map) {
C$.$init$.apply(this);
this.map=map;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$jalview_util_MapList', function (to, map) {
C$.c$$jalview_util_MapList.apply(this, [map]);
this.to=to;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$IA$IA$I$I', function (to, exon, is, i, j) {
C$.c$$jalview_datamodel_SequenceI$jalview_util_MapList.apply(this, [to, Clazz.new_($I$(3).c$$IA$IA$I$I,[exon, is, i, j])]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_Mapping', function (map2) {
C$.$init$.apply(this);
if (map2 !== this  && map2 != null  ) {
if (map2.map != null ) {
this.map=Clazz.new_($I$(3).c$$jalview_util_MapList,[map2.map]);
}this.to=map2.to;
this.mappedFromId=map2.mappedFromId;
}}, 1);

Clazz.newMeth(C$, 'getMap$', function () {
return this.map;
});

Clazz.newMeth(C$, 'setMap$jalview_util_MapList', function (map) {
this.map=map;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o == null  || !(Clazz.instanceOf(o, "jalview.datamodel.Mapping")) ) {
return false;
}var other=o;
if (other === this ) {
return true;
}if (other.to !== this.to ) {
return false;
}if ((this.map != null  && other.map == null  ) || (this.map == null  && other.map != null  ) ) {
return false;
}if ((this.map == null  && other.map == null  ) || this.map.equals$O(other.map) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hashCode=(this.to == null  ? 1 : this.to.hashCode$());
if (this.map != null ) {
hashCode=hashCode * 31 + this.map.hashCode$();
}return hashCode;
});

Clazz.newMeth(C$, 'getPosition$I', function (mpos) {
if (this.map != null ) {
var mp=this.map.shiftTo$I(mpos);
if (mp != null ) {
return mp[0];
}}return mpos;
});

Clazz.newMeth(C$, 'getWord$I', function (mpos) {
if (this.map != null ) {
return this.map.getToWord$I(mpos);
}return null;
});

Clazz.newMeth(C$, 'getWidth$', function () {
if (this.map != null ) {
return this.map.getFromRatio$();
}return 1;
});

Clazz.newMeth(C$, 'getMappedWidth$', function () {
if (this.map != null ) {
return this.map.getToRatio$();
}return 1;
});

Clazz.newMeth(C$, 'getMappedPosition$I', function (pos) {
if (this.map != null ) {
var mp=this.map.shiftFrom$I(pos);
if (mp != null ) {
return mp[0];
}}return pos;
});

Clazz.newMeth(C$, 'getMappedWord$I', function (pos) {
if (this.map != null ) {
var mp=this.map.shiftFrom$I(pos);
if (mp != null ) {
return Clazz.array(Integer.TYPE, -1, [mp[0], mp[0] + mp[2] * (this.map.getToRatio$() - 1)]);
}}return null;
});

Clazz.newMeth(C$, 'locateFeature$jalview_datamodel_SequenceFeature', function (f) {
if (true) {
if (this.map != null ) {
var frange=this.map.locateInFrom$I$I(f.getBegin$(), f.getEnd$());
if (frange == null ) {
return null;
}var vf=Clazz.array($I$(4), [(frange.length/2|0)]);
for (var i=0, v=0; i < frange.length; i+=2, v++) {
vf[v]=Clazz.new_($I$(4).c$$jalview_datamodel_SequenceFeature$I$I$S$F,[f, frange[i], frange[i + 1], f.getFeatureGroup$(), f.getScore$()]);
if (frange.length > 2) {
vf[v].setDescription$S(f.getDescription$() + "\nPart " + (v + 1) );
}}
return vf;
}}return Clazz.array($I$(4), -1, [f]);
});

Clazz.newMeth(C$, 'locateRange$I$I', function (from, to) {
if (this.map != null ) {
if (from <= to) {
from=(this.map.getToLowest$() < from) ? from : this.map.getToLowest$();
to=(this.map.getToHighest$() > to) ? to : this.map.getToHighest$();
if (from > to) {
return null;
}} else {
from=(this.map.getToHighest$() > from) ? from : this.map.getToHighest$();
to=(this.map.getToLowest$() < to) ? to : this.map.getToLowest$();
if (from < to) {
return null;
}}return this.map.locateInFrom$I$I(from, to);
}return Clazz.array(Integer.TYPE, -1, [from, to]);
});

Clazz.newMeth(C$, 'locateMappedRange$I$I', function (from, to) {
if (this.map != null ) {
if (from <= to) {
from=(this.map.getFromLowest$() < from) ? from : this.map.getFromLowest$();
to=(this.map.getFromHighest$() > to) ? to : this.map.getFromHighest$();
if (from > to) {
return null;
}} else {
from=(this.map.getFromHighest$() > from) ? from : this.map.getFromHighest$();
to=(this.map.getFromLowest$() < to) ? to : this.map.getFromLowest$();
if (from < to) {
return null;
}}return this.map.locateInTo$I$I(from, to);
}return Clazz.array(Integer.TYPE, -1, [from, to]);
});

Clazz.newMeth(C$, 'intersectVisContigs$IA', function (viscontigs) {
var copy=Clazz.new_(C$.c$$jalview_datamodel_Mapping,[this]);
if (this.map != null ) {
var vpos=0;
var apos=0;
var toRange=Clazz.new_($I$(5));
var fromRange=Clazz.new_($I$(5));
for (var vc=0; vc < viscontigs.length; vc+=2) {
var mpr=this.locateMappedRange$I$I(1 + viscontigs[vc], viscontigs[vc + 1] - 1);
if (mpr != null ) {
for (var m=0; m < mpr.length; m+=2) {
toRange.addElement$TE(Clazz.array(Integer.TYPE, -1, [mpr[m], mpr[m + 1]]));
var xpos=this.locateRange$I$I(mpr[m], mpr[m + 1]);
for (var x=0; x < xpos.length; x+=2) {
fromRange.addElement$TE(Clazz.array(Integer.TYPE, -1, [xpos[x], xpos[x + 1]]));
}
}
}}
var from=Clazz.array(Integer.TYPE, [fromRange.size$() * 2]);
var to=Clazz.array(Integer.TYPE, [toRange.size$() * 2]);
var r;
for (var f=0, fSize=fromRange.size$(); f < fSize; f++) {
r=fromRange.elementAt$I(f);
from[f * 2]=r[0];
from[f * 2 + 1]=r[1];
}
for (var f=0, fSize=toRange.size$(); f < fSize; f++) {
r=toRange.elementAt$I(f);
to[f * 2]=r[0];
to[f * 2 + 1]=r[1];
}
copy.setMap$jalview_util_MapList(Clazz.new_($I$(3).c$$IA$IA$I$I,[from, to, this.map.getFromRatio$(), this.map.getToRatio$()]));
}return copy;
});

Clazz.newMeth(C$, 'getTo$', function () {
return this.to;
});

Clazz.newMeth(C$, 'setTo$jalview_datamodel_SequenceI', function (tto) {
this.to=tto;
});

Clazz.newMeth(C$, 'getCodonIterator$jalview_datamodel_SequenceI$C', function (seq, gapChar) {
return Clazz.new_($I$(6).c$$jalview_datamodel_SequenceI$C, [this, null, seq, gapChar]);
});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("%s %s", [this.map.toString(), this.to == null  ? "" : this.to.getName$()]);
});

Clazz.newMeth(C$, 'getMappedFromId$', function () {
return this.mappedFromId;
});

Clazz.newMeth(C$, 'setMappedFromId$S', function (mappedFromId) {
this.mappedFromId=mappedFromId;
});
;
(function(){var C$=Clazz.newClass(P$.Mapping, "AlignedCodonIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.gap='\0';
this.alignedSeq=null;
this.start=0;
this.alignedColumn=0;
this.alignedBases=0;
this.fromRanges=null;
this.toRanges=null;
this.currentFromRange=null;
this.currentToRange=null;
this.fromPosition=0;
this.toPosition=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.alignedColumn=0;
this.alignedBases=0;
this.currentFromRange=null;
this.currentToRange=null;
this.fromPosition=0;
this.toPosition=0;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$C', function (seq, gapChar) {
C$.$init$.apply(this);
this.alignedSeq=seq;
this.start=seq.getStart$();
this.gap=gapChar;
this.fromRanges=this.this$0.map.getFromRanges$().iterator$();
this.toRanges=this.this$0.map.getToRanges$().iterator$();
if (this.fromRanges.hasNext$()) {
this.currentFromRange=this.fromRanges.next$();
this.fromPosition=this.currentFromRange[0];
}if (this.toRanges.hasNext$()) {
this.currentToRange=this.toRanges.next$();
this.toPosition=this.currentToRange[0];
}}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
if (this.fromRanges.hasNext$()) {
return true;
}if (this.currentFromRange == null  || this.fromPosition >= this.currentFromRange[1] ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'next$', function () {
if (!this.hasNext$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}var codon=p$1.getNextCodon.apply(this, []);
var alignedCodon=p$1.getAlignedCodon$IA.apply(this, [codon]);
var peptide=p$1.getPeptide.apply(this, []);
var peptideCol=this.toPosition - 1 - this.this$0.to.getStart$() ;
return Clazz.new_($I$(1).c$$I$I$I$S$I,[alignedCodon[0], alignedCodon[1], alignedCodon[2], peptide, peptideCol]);
});

Clazz.newMeth(C$, 'getPeptide', function () {
if (this.toPosition <= this.currentToRange[1]) {
var seq=this.this$0.to;
var pep=seq.getCharAt$I(this.toPosition - seq.getStart$());
this.toPosition++;
return String.valueOf$C(pep);
}if (!this.toRanges.hasNext$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["Ran out of peptide at position " + this.toPosition]);
}this.currentToRange=this.toRanges.next$();
this.toPosition=this.currentToRange[0];
return p$1.getPeptide.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getNextCodon', function () {
var codon=Clazz.array(Integer.TYPE, [3]);
var codonbase=0;
while (codonbase < 3){
if (this.fromPosition <= this.currentFromRange[1]) {
codon[codonbase++]=this.fromPosition++;
} else {
if (!this.fromRanges.hasNext$()) {
throw Clazz.new_(Clazz.load('jalview.datamodel.IncompleteCodonException'));
}this.currentFromRange=this.fromRanges.next$();
this.fromPosition=this.currentFromRange[0];
}}
return codon;
}, p$1);

Clazz.newMeth(C$, 'getAlignedCodon$IA', function (codon) {
var aligned=Clazz.array(Integer.TYPE, [codon.length]);
for (var i=0; i < codon.length; i++) {
aligned[i]=p$1.getAlignedColumn$I.apply(this, [codon[i]]);
}
return aligned;
}, p$1);

Clazz.newMeth(C$, 'getAlignedColumn$I', function (sequencePos) {
var truePos=sequencePos - (this.start - 1);
var length=this.alignedSeq.getLength$();
while (this.alignedBases < truePos && this.alignedColumn < length ){
var c=this.alignedSeq.getCharAt$I(this.alignedColumn++);
if (c != this.gap && !$I$(2).isGap$C(c) ) {
this.alignedBases++;
}}
return this.alignedColumn - 1;
}, p$1);

Clazz.newMeth(C$, 'remove$', function () {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
