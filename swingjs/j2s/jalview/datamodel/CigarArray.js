(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'jalview.datamodel.CigarSimple','jalview.datamodel.SeqCigar','StringBuffer','java.util.Vector']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CigarArray", null, 'jalview.datamodel.CigarBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.refCigars=null;
this.seqcigararray=false;
},1);

C$.$fields$=[['Z',['seqcigararray'],'O',['refCigars','jalview.datamodel.CigarSimple[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isSeqCigarArray$', function () {
return this.seqcigararray;
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_CigarSimpleA', function (cigars) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.seqcigararray=true;
if (cigars != null  && cigars.length > 0 ) {
this.refCigars=Clazz.array($I$(1), [cigars.length]);
for (var c=0; c < cigars.length; c++) {
this.refCigars[c]=cigars[c];
if (!((Clazz.instanceOf(cigars[c], "jalview.datamodel.SeqCigar")) || Clazz.instanceOf(cigars[c], "jalview.datamodel.CigarCigar") )) {
this.seqcigararray=false;
}}
}}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup', function (alignment, hidden, selectionGroup) {
C$.c$$jalview_datamodel_CigarSimpleA.apply(this, [C$.constructSeqCigarArray$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceGroup(alignment, selectionGroup)]);
p$1.constructFromAlignment$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup.apply(this, [alignment, hidden, selectionGroup]);
}, 1);

Clazz.newMeth(C$, '_calcStartEndBounds$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceGroup', function (alignment, selectionGroup) {
var startend=Clazz.array(Integer.TYPE, -1, [0, 0, 0]);
if (selectionGroup != null ) {
startend[0]=selectionGroup.getSize$();
startend[1]=selectionGroup.getStartRes$();
startend[2]=selectionGroup.getEndRes$();
} else {
startend[0]=alignment.getHeight$();
startend[2]=alignment.getWidth$() - 1;
}return startend;
}, 1);

Clazz.newMeth(C$, 'constructSeqCigarArray$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceGroup', function (alignment, selectionGroup) {
var seqs=null;
var i;
var iSize;
var _startend=C$._calcStartEndBounds$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceGroup(alignment, selectionGroup);
var start=_startend[1];
var end=_startend[2];
if (selectionGroup != null ) {
iSize=selectionGroup.getSize$();
seqs=selectionGroup.getSequencesInOrder$jalview_datamodel_AlignmentI(alignment);
start=selectionGroup.getStartRes$();
end=selectionGroup.getEndRes$();
} else {
iSize=alignment.getHeight$();
seqs=alignment.getSequencesArray$();
end=alignment.getWidth$() - 1;
}var selseqs=Clazz.array($I$(2), [iSize]);
for (i=0; i < iSize; i++) {
selseqs[i]=Clazz.new_($I$(2,1).c$$jalview_datamodel_SequenceI$I$I,[seqs[i], start, end]);
}
return selseqs;
}, 1);

Clazz.newMeth(C$, 'constructFromAlignment$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup', function (alignment, hidden, selectionGroup) {
var _startend=C$._calcStartEndBounds$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceGroup(alignment, selectionGroup);
var start=_startend[1];
var end=_startend[2];
if (hidden != null ) {
var region;
var hideStart;
var hideEnd;
var last=start;
var regions=hidden.getBoundedIterator$I$I(start, end);
while (regions.hasNext$()){
region=regions.next$();
hideStart=region[0];
hideEnd=region[1];
if ((hideStart < last) && (hideEnd >= last) ) {
hideStart=last;
}if (hideEnd > end) {
hideEnd=end;
}if (last < hideStart) {
this.addOperation$C$I("M", hideStart - last);
}this.addOperation$C$I("D", 1 + hideEnd - hideStart);
last=hideEnd + 1;
}
if (last <= end) {
this.addOperation$C$I("M", end - last + 1);
}} else {
this.addOperation$C$I("M", end - start + 1);
}}, p$1);

Clazz.newMeth(C$, 'getArrayofSequenceAndDeletions$C', function (GapChar) {
if (this.refCigars == null  || this.refCigars.length == 0  || this.length == 0 ) {
return null;
}var sqanddels=Clazz.array(java.lang.Object, [this.refCigars.length, null]);
for (var c=0; c < this.refCigars.length; c++) {
var refString=this.refCigars[c].getSequenceString$C(GapChar);
if (refString != null ) {
sqanddels[c]=this.getSequenceAndDeletions$S$C(refString, GapChar);
} else {
sqanddels[c]=null;
}}
return sqanddels;
});

Clazz.newMeth(C$, 'getSequenceString$C', function (GapChar) {
if (this.length == 0 || this.refCigars == null  ) {
return "";
}var seqStrings=Clazz.new_($I$(3,1));
var sqanddels=this.getArrayofSequenceAndDeletions$C(GapChar);
for (var c=0; c < this.refCigars.length; c++) {
if (sqanddels[c] != null ) {
seqStrings.append$S(sqanddels[c][0]);
sqanddels[c][0]=null;
}seqStrings.append$C("\n");
}
return seqStrings.toString();
});

Clazz.newMeth(C$, 'getSequenceStrings$C', function (GapChar) {
if (this.length == 0 || this.refCigars == null   || this.refCigars.length == 0 ) {
return null;
}var sqanddels=this.getArrayofSequenceAndDeletions$C(GapChar);
var seqs=Clazz.array(String, [sqanddels.length]);
for (var c=0; c < this.refCigars.length; c++) {
seqs[c]=sqanddels[c][0];
}
return seqs;
});

Clazz.newMeth(C$, 'applyDeletions$', function () {
var delpos=null;
if (this.length == 0) {
return null;
}var cursor=0;
var vcursor=0;
var offset=0;
var i=0;
while (i < this.length){
if (this.operation[i] != "D") {
if (this.operation[i] == "M") {
cursor+=this.range[i];
}vcursor+=this.range[i++];
} else {
if (delpos == null ) {
delpos=Clazz.new_($I$(4,1));
}var delstart=cursor;
var delend=cursor + this.range[i] - 1;
delpos.addElement$O(Clazz.array(Integer.TYPE, -1, [vcursor + offset, this.range[i]]));
offset+=this.range[i] - 1;
System.arraycopy$O$I$O$I$I(this.operation, i + 1, this.operation, i, this.length - i);
System.arraycopy$O$I$O$I$I(this.range, i + 1, this.range, i, this.length - i);
this.length--;
for (var s=0; s < this.refCigars.length; s++) {
var d=this.refCigars[s].deleteRange$I$I(delstart, delend);
}
}}
if (delpos != null ) {
var pos=Clazz.array(Integer.TYPE, [delpos.size$() * 2]);
for (var k=0, l=delpos.size$(); k < l; k++) {
var dr=(delpos.elementAt$I(k));
pos[k * 2]=dr[0];
pos[k * 2 + 1]=dr[1];
delpos.setElementAt$O$I(null, k);
}
delpos=null;
return pos;
}return null;
});

Clazz.newMeth(C$, 'getSeqCigarArray$', function () {
if (!this.isSeqCigarArray$()) {
return null;
}var sa=Clazz.array($I$(2), [this.refCigars.length]);
for (var i=0; i < this.refCigars.length; i++) {
sa[i]=this.refCigars[i];
}
return sa;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
