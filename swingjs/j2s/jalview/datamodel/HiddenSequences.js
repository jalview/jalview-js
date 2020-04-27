(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.datamodel.SequenceI','java.util.ArrayList','jalview.datamodel.Sequence','jalview.datamodel.Alignment']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HiddenSequences");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['hiddenSequences','jalview.datamodel.SequenceI[]','alignment','jalview.datamodel.AlignmentI']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI', function (al) {
;C$.$init$.apply(this);
this.alignment=al;
}, 1);

Clazz.newMeth(C$, 'getSize$', function () {
if (this.hiddenSequences == null ) {
return 0;
}var count=0;
for (var seq, $seq = 0, $$seq = this.hiddenSequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
if (seq != null ) {
count++;
}}
return count;
});

Clazz.newMeth(C$, 'getWidth$', function () {
if (this.hiddenSequences == null ) {
return 0;
}var width=0;
for (var seq, $seq = 0, $$seq = this.hiddenSequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
if (seq != null  && seq.getLength$() > width ) {
width=seq.getLength$();
}}
return width;
});

Clazz.newMeth(C$, 'adjustHeightSequenceDeleted$I', function (seqIndex) {
if (this.hiddenSequences == null ) {
return;
}var alHeight=this.alignment.getHeight$();
var tmp=Clazz.array($I$(1), [alHeight + this.getSize$()]);
var deletionIndex=this.adjustForHiddenSeqs$I(seqIndex);
for (var i=0; i < this.hiddenSequences.length; i++) {
if (this.hiddenSequences[i] == null ) {
continue;
}if (i > deletionIndex) {
tmp[i - 1]=this.hiddenSequences[i];
} else {
tmp[i]=this.hiddenSequences[i];
}}
this.hiddenSequences=tmp;
});

Clazz.newMeth(C$, 'adjustHeightSequenceAdded$', function () {
if (this.hiddenSequences == null ) {
return;
}var alHeight=this.alignment.getHeight$();
var tmp=Clazz.array($I$(1), [alHeight + this.getSize$()]);
System.arraycopy$O$I$O$I$I(this.hiddenSequences, 0, tmp, 0, this.hiddenSequences.length);
this.hiddenSequences=tmp;
});

Clazz.newMeth(C$, 'hideSequence$jalview_datamodel_SequenceI', function (sequence) {
if (this.hiddenSequences == null ) {
this.hiddenSequences=Clazz.array($I$(1), [this.alignment.getHeight$()]);
}var absAlignmentIndex=this.alignment.findIndex$jalview_datamodel_SequenceI(sequence);
var alignmentIndex=this.adjustForHiddenSeqs$I(absAlignmentIndex);
if (alignmentIndex < 0 || this.hiddenSequences[alignmentIndex] != null  ) {
System.out.println$S("ERROR!!!!!!!!!!!");
return;
}this.hiddenSequences[alignmentIndex]=sequence;
this.alignment.deleteHiddenSequence$I(absAlignmentIndex);
});

Clazz.newMeth(C$, 'showAll$java_util_Map', function (hiddenRepSequences) {
var revealedSeqs=Clazz.new_($I$(2,1));
if (this.hiddenSequences == null ) {
return revealedSeqs;
}for (var i=0; i < this.hiddenSequences.length; i++) {
if (this.hiddenSequences[i] != null ) {
var tmp=this.showSequence$I$java_util_Map(i, hiddenRepSequences);
for (var seq, $seq = tmp.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
revealedSeqs.add$O(seq);
}
}}
return revealedSeqs;
});

Clazz.newMeth(C$, 'showSequence$I$java_util_Map', function (alignmentIndex, hiddenRepSequences) {
var revealedSeqs=Clazz.new_($I$(2,1));
var repSequence=this.alignment.getSequenceAt$I(alignmentIndex);
if (repSequence != null  && hiddenRepSequences != null   && hiddenRepSequences.containsKey$O(repSequence) ) {
hiddenRepSequences.remove$O(repSequence);
revealedSeqs.add$O(repSequence);
}var start=this.adjustForHiddenSeqs$I(alignmentIndex - 1);
var end=this.adjustForHiddenSeqs$I(alignmentIndex);
if (end >= this.hiddenSequences.length) {
end=this.hiddenSequences.length - 1;
}var asequences=this.alignment.getSequences$();
{
for (var index=end; index > start; index--) {
var seq=this.hiddenSequences[index];
this.hiddenSequences[index]=null;
if (seq != null ) {
if (seq.getLength$() > 0) {
revealedSeqs.add$O(seq);
asequences.add$I$O(alignmentIndex, seq);
} else {
System.out.println$S(seq.getName$() + " has been deleted whilst hidden");
}}}
}return revealedSeqs;
});

Clazz.newMeth(C$, 'getHiddenSequence$I', function (alignmentIndex) {
return this.hiddenSequences == null  ? null : this.hiddenSequences[alignmentIndex];
});

Clazz.newMeth(C$, 'findIndexWithoutHiddenSeqs$I', function (alignmentIndex) {
if (this.hiddenSequences == null ) {
return alignmentIndex;
}var index=0;
var hiddenSeqs=0;
var diff=0;
if (this.hiddenSequences.length <= alignmentIndex) {
diff=alignmentIndex - this.hiddenSequences.length + 1;
alignmentIndex=this.hiddenSequences.length - 1;
}while (index <= alignmentIndex){
if (this.hiddenSequences[index] != null ) {
hiddenSeqs++;
}index++;
}
return (alignmentIndex - hiddenSeqs + diff);
});

Clazz.newMeth(C$, 'subtractVisibleRows$I$I', function (visibleDistance, startRow) {
if (this.hiddenSequences == null ) {
return startRow - visibleDistance;
}var index=Math.min(startRow, this.hiddenSequences.length - 1);
var count=0;
while ((index > -1) && (count < visibleDistance) ){
if (this.hiddenSequences[index] == null ) {
count++;
}index--;
}
return index;
});

Clazz.newMeth(C$, 'adjustForHiddenSeqs$I', function (alignmentIndex) {
if (this.hiddenSequences == null ) {
return alignmentIndex;
}var index=0;
var hSize=this.hiddenSequences.length;
while (index <= alignmentIndex && index < hSize ){
if (this.hiddenSequences[index] != null ) {
alignmentIndex++;
}index++;
}
;return alignmentIndex;
});

Clazz.newMeth(C$, 'getFullAlignment$', function () {
var seq;
if (this.hiddenSequences == null ) {
seq=this.alignment.getSequencesArray$();
} else {
var isize=this.hiddenSequences.length;
seq=Clazz.array($I$(3), [isize]);
var index=0;
for (var i=0; i < this.hiddenSequences.length; i++) {
if (this.hiddenSequences[i] != null ) {
seq[i]=this.hiddenSequences[i];
} else {
seq[i]=this.alignment.getSequenceAt$I(index);
index++;
}}
}var fAlignmt=Clazz.new_($I$(4,1).c$$jalview_datamodel_SequenceIA,[seq]);
fAlignmt.annotations=this.alignment.getAlignmentAnnotation$();
fAlignmt.alignmentProperties=this.alignment.getProperties$();
fAlignmt.groups=this.alignment.getGroups$();
fAlignmt.hasRNAStructure=this.alignment.hasRNAStructure$();
fAlignmt.setSeqrep$jalview_datamodel_SequenceI(this.alignment.getSeqrep$());
return fAlignmt;
});

Clazz.newMeth(C$, 'isHidden$jalview_datamodel_SequenceI', function (seq) {
if (this.hiddenSequences != null ) {
for (var i=0; i < this.hiddenSequences.length; i++) {
if (this.hiddenSequences[i] != null  && this.hiddenSequences[i] === seq  ) {
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'isHidden$I', function (seq) {
if (this.hiddenSequences != null ) {
return (this.hiddenSequences[seq] != null );
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
