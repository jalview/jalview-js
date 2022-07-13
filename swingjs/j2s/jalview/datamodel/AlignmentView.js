(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'java.util.ArrayList','jalview.datamodel.CigarArray',['jalview.datamodel.AlignmentView','.ScGroup'],'jalview.datamodel.SequenceGroup','Error','jalview.datamodel.HiddenColumns','jalview.datamodel.SeqCigar','jalview.datamodel.Alignment','jalview.util.ShiftList','jalview.datamodel.SequenceI','jalview.datamodel.AlignmentI','jalview.util.MessageManager']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignmentView", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ScGroup',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sequences=null;
this.contigs=null;
this.width=0;
this.firstCol=0;
this.scGroups=null;
this.isNa=false;
},1);

C$.$fields$=[['Z',['isNa'],'I',['width','firstCol'],'O',['sequences','jalview.datamodel.SeqCigar[]','contigs','int[]','scGroups','java.util.List','selected','jalview.datamodel.AlignmentView.ScGroup']]]

Clazz.newMeth(C$, 'isNa$',  function () {
return this.isNa;
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z',  function (alignment, hidden, selection, hasHiddenColumns, selectedRegionOnly, recordGroups) {
C$.c$$jalview_datamodel_CigarArray$I.apply(this, [Clazz.new_([alignment, (hasHiddenColumns ? hidden : null), (selectedRegionOnly ? selection : null)],$I$(2,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup), (selectedRegionOnly && selection != null  ) ? selection.getStartRes$() : 0]);
this.isNa=alignment.isNucleotide$();
var selseqs;
if (selection != null  && selection.getSize$() > 0 ) {
this.selected=Clazz.new_($I$(3,1),[this, null]);
selseqs=selection.getSequencesInOrder$jalview_datamodel_AlignmentI$Z(alignment, selectedRegionOnly);
} else {
selseqs=alignment.getSequencesArray$();
}var seqsets=Clazz.new_($I$(1,1));
var grps=Clazz.new_($I$(1,1));
var gg=alignment.getGroups$();
grps.addAll$java_util_Collection(gg);
var sgrps=null;
var addedgps=null;
if (grps != null ) {
if (selection != null  && selectedRegionOnly ) {
var ssel=selection.getStartRes$();
var esel=selection.getEndRes$();
var isg=Clazz.new_($I$(1,1));
for (var sg, $sg = grps.iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (!(sg.getStartRes$() > esel || sg.getEndRes$() < ssel )) {
if (sg.getStartRes$() < ssel) {
sg.setStartRes$I(ssel);
}if (sg.getEndRes$() > esel) {
sg.setEndRes$I(esel);
}sg.setStartRes$I(sg.getStartRes$() - ssel + 1);
sg.setEndRes$I(sg.getEndRes$() - ssel + 1);
isg.add$O(sg);
}}
grps=isg;
}sgrps=Clazz.array($I$(3), [grps.size$()]);
addedgps=Clazz.array(Boolean.TYPE, [grps.size$()]);
for (var g=0; g < sgrps.length; g++) {
var sg=grps.get$I(g);
sgrps[g]=Clazz.new_($I$(3,1),[this, null]);
sgrps[g].sg=Clazz.new_($I$(4,1).c$$jalview_datamodel_SequenceGroup,[sg]);
addedgps[g]=false;
seqsets.add$O(sg.getSequences$());
}
}var csi=0;
for (var i=0; i < selseqs.length; i++) {
if (selseqs[i] != null ) {
if (selection != null  && selection.getSize$() > 0  && !selectedRegionOnly ) {
this.selected.add$jalview_datamodel_SeqCigar(this.sequences[csi]);
}if (seqsets != null ) {
for (var sg=0; sg < sgrps.length; sg++) {
if ((seqsets.get$I(sg)).contains$O(selseqs[i])) {
sgrps[sg].sg.deleteSequence$jalview_datamodel_SequenceI$Z(selseqs[i], false);
sgrps[sg].add$jalview_datamodel_SeqCigar(this.sequences[csi]);
if (!addedgps[sg]) {
if (this.scGroups == null ) {
this.scGroups=Clazz.new_($I$(1,1));
}addedgps[sg]=true;
this.scGroups.add$O(sgrps[sg]);
}}}
}++csi;
}}
for (var sg=0; sg < sgrps.length; sg++) {
var sqs=sgrps[sg].sg.getSequencesAsArray$java_util_Map(null);
for (var si=0; si < sqs.length; si++) {
sgrps[sg].sg.deleteSequence$jalview_datamodel_SequenceI$Z(sqs[si], false);
}
sgrps[sg]=null;
}
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_CigarArray',  function (seqcigararray) {
;C$.$init$.apply(this);
if (!seqcigararray.isSeqCigarArray$()) {
throw Clazz.new_($I$(5,1).c$$S,["Implementation Error - can only make an alignment view from a CigarArray of sequences."]);
}this.contigs=seqcigararray.getDeletedRegions$();
this.sequences=seqcigararray.getSeqCigarArray$();
this.width=seqcigararray.getWidth$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_CigarArray$I',  function (sdata, firstcol) {
C$.c$$jalview_datamodel_CigarArray.apply(this, [sdata]);
this.firstCol=firstcol;
}, 1);

Clazz.newMeth(C$, 'setSequences$jalview_datamodel_SeqCigarA',  function (sequences) {
this.sequences=sequences;
});

Clazz.newMeth(C$, 'setContigs$IA',  function (contigs) {
this.contigs=contigs;
});

Clazz.newMeth(C$, 'getSequences$',  function () {
return this.sequences;
});

Clazz.newMeth(C$, 'getContigs$',  function () {
return this.contigs;
});

Clazz.newMeth(C$, 'getAlignmentAndHiddenColumns$C',  function (gapCharacter) {
var hidden=Clazz.new_($I$(6,1));
return Clazz.array(java.lang.Object, -1, [$I$(7).createAlignmentSequences$jalview_datamodel_SeqCigarA$C$jalview_datamodel_HiddenColumns$IA(this.sequences, gapCharacter, hidden, this.contigs), hidden]);
});

Clazz.newMeth(C$, 'getVisibleAlignment$C',  function (c) {
var aln=p$1.getVisibleSeqs$C.apply(this, [c]);
var vcal=Clazz.new_($I$(8,1).c$$jalview_datamodel_SequenceIA,[aln]);
p$1.addPrunedGroupsInOrder$jalview_datamodel_AlignmentI$I$I$Z.apply(this, [vcal, -1, -1, true]);
return vcal;
});

Clazz.newMeth(C$, 'addPrunedGroupsInOrder$jalview_datamodel_AlignmentI$I$I$Z',  function (vcal, gstart, gend, viscontigs) {
var r=false;
if (gstart > -1 && gstart <= gend ) {
r=true;
}var aln=vcal.getSequencesArray$();
{
{
var nvg=(this.scGroups != null ) ? this.scGroups.size$() : 0;
if (nvg > 0) {
var nsg=Clazz.array($I$(4), [nvg]);
for (var g=0; g < nvg; g++) {
var sg=this.scGroups.get$I(g).sg;
if (r) {
if (sg.getStartRes$() > gend || sg.getEndRes$() < gstart ) {
nsg[g]=null;
continue;
}}nsg[g]=Clazz.new_($I$(4,1).c$$jalview_datamodel_SequenceGroup,[sg]);
if (r && !viscontigs ) {
if (nsg[g].getStartRes$() < gstart) {
nsg[g].setStartRes$I(0);
} else {
nsg[g].setStartRes$I(nsg[g].getStartRes$() - gstart);
nsg[g].setEndRes$I(nsg[g].getEndRes$() - gstart);
}if (nsg[g].getEndRes$() > (gend - gstart)) {
nsg[g].setEndRes$I(gend - gstart);
}}}
if (viscontigs) {
if (this.contigs != null ) {
var p=0;
var prune=Clazz.new_($I$(9,1));
if (r) {
prune.addShift$I$I(gstart, -gstart);
}for (var h=0; h < this.contigs.length; h+=3) {
{
prune.addShift$I$I(p + this.contigs[h + 1], this.contigs[h + 2] - this.contigs[h + 1]);
}p=this.contigs[h + 1] + this.contigs[h + 2];
}
for (var g=0; g < nsg.length; g++) {
if (nsg[g] != null ) {
var s=nsg[g].getStartRes$();
var t=nsg[g].getEndRes$();
var w=1 + t - s;
if (r) {
if (s < gstart) {
s=gstart;
}if (t > gend) {
t=gend;
}}s=prune.shift$I(s);
t=prune.shift$I(t);
nsg[g].setStartRes$I(s);
nsg[g].setEndRes$I(t);
}}
}}for (var nsq=0; nsq < aln.length; nsq++) {
for (var g=0; g < nvg; g++) {
if (nsg[g] != null  && this.sequences[nsq].isMemberOf$O(this.scGroups.get$I(g)) ) {
nsg[g].addSequence$jalview_datamodel_SequenceI$Z(aln[nsq], false);
}}
}
for (var g=0; g < nvg; g++) {
if (nsg[g] != null  && nsg[g].getSize$() > 0 ) {
vcal.addGroup$jalview_datamodel_SequenceGroup(nsg[g]);
}nsg[g]=null;
}
}}}}, p$1);

Clazz.newMeth(C$, 'getVisibleSeqs$C',  function (c) {
var aln=Clazz.array($I$(10), [this.sequences.length]);
for (var i=0, j=this.sequences.length; i < j; i++) {
aln[i]=this.sequences[i].getSeq$C(c);
aln[i].setSequence$S(p$1.getASequenceString$C$I.apply(this, [c, i]));
}
return aln;
}, p$1);

Clazz.newMeth(C$, 'getVisibleContigAlignments$C',  function (c) {
var nvc=0;
var vcontigs=this.getVisibleContigs$();
var contigviews=this.getVisibleContigs$C(c);
var vcals=Clazz.array($I$(11), [contigviews.length]);
for (nvc=0; nvc < contigviews.length; nvc++) {
vcals[nvc]=Clazz.new_($I$(8,1).c$$jalview_datamodel_SequenceIA,[contigviews[nvc]]);
if (this.scGroups != null  && this.scGroups.size$() > 0 ) {
p$1.addPrunedGroupsInOrder$jalview_datamodel_AlignmentI$I$I$Z.apply(this, [vcals[nvc], vcontigs[nvc * 2], vcontigs[nvc * 2 + 1], true]);
}}
return vcals;
});

Clazz.newMeth(C$, 'getASequenceString$C$I',  function (c, n) {
var sqn;
var fullseq=this.sequences[n].getSequenceString$C(c);
if (this.contigs != null ) {
sqn="";
var p=0;
for (var h=0; h < this.contigs.length; h+=3) {
sqn+=fullseq.substring$I$I(p, this.contigs[h + 1]);
p=this.contigs[h + 1] + this.contigs[h + 2];
}
sqn+=fullseq.substring$I(p);
} else {
sqn=fullseq;
}return sqn;
}, p$1);

Clazz.newMeth(C$, 'getSequenceStrings$C',  function (c) {
var seqs=Clazz.array(String, [this.sequences.length]);
for (var n=0; n < this.sequences.length; n++) {
seqs[n]=p$1.getASequenceString$C$I.apply(this, [c, n]);
}
return seqs;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$I',  function (width) {
this.width=width;
});

Clazz.newMeth(C$, 'getVisibleContigs$C',  function (gapCharacter) {
var smsa;
var njobs=1;
if (this.sequences == null  || this.width <= 0 ) {
return null;
}if (this.contigs != null  && this.contigs.length > 0 ) {
var start=0;
njobs=0;
var fwidth=this.width;
for (var contig=0; contig < this.contigs.length; contig+=3) {
if ((this.contigs[contig + 1] - start) > 0) {
++njobs;
}fwidth+=this.contigs[contig + 2];
start=this.contigs[contig + 1] + this.contigs[contig + 2];
}
if (start < fwidth) {
++njobs;
}smsa=Clazz.array($I$(10), [njobs, null]);
start=0;
var j=0;
for (var contig=0; contig < this.contigs.length; contig+=3) {
if (this.contigs[contig + 1] - start > 0) {
var mseq=Clazz.array($I$(10), [this.sequences.length]);
for (var s=0; s < mseq.length; s++) {
mseq[s]=this.sequences[s].getSeq$C(gapCharacter).getSubSequence$I$I(start, this.contigs[contig + 1]);
}
smsa[j]=mseq;
++j;
}start=this.contigs[contig + 1] + this.contigs[contig + 2];
}
if (start < fwidth) {
var mseq=Clazz.array($I$(10), [this.sequences.length]);
for (var s=0; s < mseq.length; s++) {
mseq[s]=this.sequences[s].getSeq$C(gapCharacter).getSubSequence$I$I(start, fwidth + 1);
}
smsa[j]=mseq;
++j;
}} else {
smsa=Clazz.array($I$(10), [1, null]);
smsa[0]=Clazz.array($I$(10), [this.sequences.length]);
for (var s=0; s < this.sequences.length; s++) {
smsa[0][s]=this.sequences[s].getSeq$C(gapCharacter);
}
}return smsa;
});

Clazz.newMeth(C$, 'getUpdatedView$jalview_datamodel_SequenceIAA$jalview_datamodel_AlignmentOrderA$C',  function (nvismsa, orders, gapCharacter) {
if (this.sequences == null  || this.width <= 0 ) {
throw Clazz.new_([$I$(12).getString$S("error.empty_view_cannot_be_updated")],$I$(5,1).c$$S);
}if (nvismsa == null ) {
throw Clazz.new_(["nvismsa==null. use getAlignmentAndColumnSelection() instead."],$I$(5,1).c$$S);
}if (this.contigs != null  && this.contigs.length > 0 ) {
var alignment=Clazz.array($I$(10), [this.sequences.length]);
var hidden=Clazz.new_($I$(6,1));
if (this.contigs != null  && this.contigs.length > 0 ) {
var start=0;
var nwidth=0;
var owidth=this.width;
var j=0;
for (var contig=0; contig < this.contigs.length; contig+=3) {
owidth+=this.contigs[contig + 2];
if (this.contigs[contig + 1] - start > 0) {
var swidth=0;
if (nvismsa[j] != null ) {
var mseq=nvismsa[j];
var order=(orders == null ) ? null : orders[j];
++j;
if (mseq.length != this.sequences.length) {
throw Clazz.new_([$I$(12,"formatMessage$S$SA",["error.mismatch_between_number_of_sequences_in_block", Clazz.array(String, -1, [Integer.valueOf$I(j).toString(), Integer.valueOf$I(mseq.length).toString(), Integer.valueOf$I(this.sequences.length).toString()])])],$I$(5,1).c$$S);
}swidth=mseq[0].getLength$();
for (var s=0; s < mseq.length; s++) {
if (alignment[s] == null ) {
alignment[s]=mseq[s];
} else {
alignment[s].setSequence$S(alignment[s].getSequenceAsString$() + mseq[s].getSequenceAsString$());
if (mseq[s].getStart$() <= mseq[s].getEnd$()) {
alignment[s].setEnd$I(mseq[s].getEnd$());
}if (order != null ) {
order.updateSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(mseq[s], alignment[s]);
}}}
} else {
if (true) {
for (var s=0; s < this.sequences.length; s++) {
var oseq=this.sequences[s].getSeq$C(gapCharacter).getSubSequence$I$I(start, this.contigs[contig + 1]);
if (swidth < oseq.getLength$()) {
swidth=oseq.getLength$();
}if (alignment[s] == null ) {
alignment[s]=oseq;
} else {
alignment[s].setSequence$S(alignment[s].getSequenceAsString$() + oseq.getSequenceAsString$());
if (oseq.getEnd$() >= oseq.getStart$()) {
alignment[s].setEnd$I(oseq.getEnd$());
}}}
}++j;
}nwidth+=swidth;
}start=this.contigs[contig + 1] + this.contigs[contig + 2];
for (var s=0; s < this.sequences.length; s++) {
var hseq=this.sequences[s].getSeq$C(gapCharacter).getSubSequence$I$I(this.contigs[contig + 1], start);
if (alignment[s] == null ) {
alignment[s]=hseq;
} else {
alignment[s].setSequence$S(alignment[s].getSequenceAsString$() + hseq.getSequenceAsString$());
if (hseq.getEnd$() >= hseq.getStart$()) {
alignment[s].setEnd$I(hseq.getEnd$());
}}}
hidden.hideColumns$I$I(nwidth, nwidth + this.contigs[contig + 2] - 1);
nwidth+=this.contigs[contig + 2];
}
if (j < nvismsa.length) {
var swidth=0;
if (nvismsa[j] != null ) {
var mseq=nvismsa[j];
var order=(orders != null ) ? orders[j] : null;
swidth=mseq[0].getLength$();
for (var s=0; s < mseq.length; s++) {
if (alignment[s] == null ) {
alignment[s]=mseq[s];
} else {
alignment[s].setSequence$S(alignment[s].getSequenceAsString$() + mseq[s].getSequenceAsString$());
if (mseq[s].getEnd$() >= mseq[s].getStart$()) {
alignment[s].setEnd$I(mseq[s].getEnd$());
}if (order != null ) {
order.updateSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(mseq[s], alignment[s]);
}}}
} else {
if (start < owidth) {
if (true) {
for (var s=0; s < this.sequences.length; s++) {
var oseq=this.sequences[s].getSeq$C(gapCharacter).getSubSequence$I$I(start, owidth + 1);
if (swidth < oseq.getLength$()) {
swidth=oseq.getLength$();
}if (alignment[s] == null ) {
alignment[s]=oseq;
} else {
alignment[s].setSequence$S(alignment[s].getSequenceAsString$() + oseq.getSequenceAsString$());
if (oseq.getEnd$() >= oseq.getStart$()) {
alignment[s].setEnd$I(oseq.getEnd$());
}}}
nwidth+=swidth;
} else {
throw Clazz.new_([$I$(12).getString$S("error.padding_not_yet_implemented")],$I$(5,1).c$$S);
}}}}}return Clazz.array(java.lang.Object, -1, [alignment, hidden]);
} else {
if (nvismsa.length != 1) {
throw Clazz.new_([$I$(12,"formatMessage$S$SA",["error.mismatch_between_visible_blocks_to_update_and_number_of_contigs_in_view", Clazz.array(String, -1, [Integer.valueOf$I(nvismsa.length).toString()])])],$I$(5,1).c$$S);
}if (nvismsa[0] != null ) {
return Clazz.array(java.lang.Object, -1, [nvismsa[0], Clazz.new_($I$(6,1))]);
} else {
return this.getAlignmentAndHiddenColumns$C(gapCharacter);
}}});

Clazz.newMeth(C$, 'getVisibleContigs$',  function () {
if (this.contigs != null  && this.contigs.length > 0 ) {
var start=0;
var nvis=0;
var fwidth=this.width;
for (var contig=0; contig < this.contigs.length; contig+=3) {
if ((this.contigs[contig + 1] - start) > 0) {
++nvis;
}fwidth+=this.contigs[contig + 2];
start=this.contigs[contig + 1] + this.contigs[contig + 2];
}
if (start < fwidth) {
++nvis;
}var viscontigs=Clazz.array(Integer.TYPE, [nvis * 2]);
nvis=0;
start=0;
for (var contig=0; contig < this.contigs.length; contig+=3) {
if ((this.contigs[contig + 1] - start) > 0) {
viscontigs[nvis]=start;
viscontigs[nvis + 1]=this.contigs[contig + 1] - 1;
nvis+=2;
}start=this.contigs[contig + 1] + this.contigs[contig + 2];
}
if (start < fwidth) {
viscontigs[nvis]=start;
viscontigs[nvis + 1]=fwidth - 1;
nvis+=2;
}return viscontigs;
} else {
return Clazz.array(Integer.TYPE, -1, [0, this.width - 1]);
}});

Clazz.newMeth(C$, 'getAlignmentOrigin$',  function () {
return this.firstCol;
});

Clazz.newMeth(C$, 'getVisibleContigMapFor$IA',  function (gapMap) {
var delMap=null;
var viscontigs=this.getVisibleContigs$();
var spos=0;
var i=0;
if (viscontigs != null ) {
delMap=Clazz.array(Integer.TYPE, [gapMap.length]);
for (var contig=0; contig < viscontigs.length; contig+=2) {
while (spos < gapMap.length && gapMap[spos] < viscontigs[contig] ){
++spos;
}
while (spos < gapMap.length && gapMap[spos] <= viscontigs[contig + 1] ){
delMap[i++]=spos++;
}
}
var tmap=Clazz.array(Integer.TYPE, [i]);
System.arraycopy$O$I$O$I$I(delMap, 0, tmap, 0, i);
delMap=tmap;
}return delMap;
});

Clazz.newMeth(C$, 'getEditedSequences$C$Z',  function (gc, $delete) {
var msf=this.getSequences$();
var aln=Clazz.array($I$(10), [msf.length]);
for (var i=0, j=msf.length; i < j; i++) {
aln[i]=msf[i].getSeq$C(gc);
}
if ($delete) {
var sqs=this.getSequenceStrings$C(gc);
for (var i=0; i < sqs.length; i++) {
aln[i].setSequence$S(sqs[i]);
sqs[i]=null;
}
}return aln;
});

Clazz.newMeth(C$, 'summariseAlignmentView$jalview_datamodel_AlignmentView$java_io_PrintStream',  function (view, os) {
os.print$S("View has " + view.sequences.length + " of which " );
if (view.selected == null ) {
os.print$S("None");
} else {
os.print$S(" " + view.selected.size$());
}os.println$S(" are selected.");
os.print$S("View is " + view.getWidth$() + " columns wide" );
var viswid=0;
var contigs=view.getContigs$();
if (contigs != null ) {
viswid=view.width;
for (var i=0; i < contigs.length; i+=3) {
viswid+=contigs[i + 2];
}
os.println$S("with " + viswid + " visible columns spread over " + (contigs.length/3|0)  + " regions.");
} else {
viswid=view.width;
os.println$S(".");
}if (view.scGroups != null ) {
os.println$S("There are " + view.scGroups.size$() + " groups defined on the view." );
for (var g=0; g < view.scGroups.size$(); g++) {
var sgr=view.scGroups.get$I(g);
os.println$S("Group " + g + ": Name = " + sgr.sg.getName$() + " Contains " + sgr.seqs.size$() + " Seqs." );
os.println$S("This group runs from " + sgr.sg.getStartRes$() + " to " + sgr.sg.getEndRes$() );
for (var s=0; s < sgr.seqs.size$(); s++) {
if (!sgr.seqs.get$I(s).isMemberOf$O(sgr)) {
os.println$S("** WARNING: sequence " + sgr.seqs.get$I(s).toString() + " is not marked as member of group." );
}}
}
var visal=view.getVisibleAlignment$C("-");
if (visal != null ) {
os.println$S("Vis. alignment is " + visal.getWidth$() + " wide and has " + visal.getHeight$() + " seqs." );
if (visal.getGroups$() != null  && visal.getGroups$().size$() > 0 ) {
var i=1;
for (var sg, $sg = visal.getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
os.println$S("Group " + (i++) + " begins at column " + sg.getStartRes$() + " and ends at " + sg.getEndRes$() );
}
}}}}, 1);

Clazz.newMeth(C$, 'testSelectionViews$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup',  function (alignment, hidden, selection) {
System.out.println$S("Testing standard view creation:\n");
var view=null;
try {
System.out.println$S("View with no hidden columns, no limit to selection, no groups to be collected:");
view=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z,[alignment, hidden, selection, false, false, false]);
C$.summariseAlignmentView$jalview_datamodel_AlignmentView$java_io_PrintStream(view, System.out);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.err.println$S("Failed to generate alignment with selection but no groups marked.");
} else {
throw e;
}
}
try {
System.out.println$S("View with no hidden columns, no limit to selection, and all groups to be collected:");
view=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z,[alignment, hidden, selection, false, false, true]);
C$.summariseAlignmentView$jalview_datamodel_AlignmentView$java_io_PrintStream(view, System.out);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.err.println$S("Failed to generate alignment with selection marked but no groups marked.");
} else {
throw e;
}
}
try {
System.out.println$S("View with no hidden columns, limited to selection and no groups to be collected:");
view=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z,[alignment, hidden, selection, false, true, false]);
C$.summariseAlignmentView$jalview_datamodel_AlignmentView$java_io_PrintStream(view, System.out);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.err.println$S("Failed to generate alignment with selection restricted but no groups marked.");
} else {
throw e;
}
}
try {
System.out.println$S("View with no hidden columns, limited to selection, and all groups to be collected:");
view=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z,[alignment, hidden, selection, false, true, true]);
C$.summariseAlignmentView$jalview_datamodel_AlignmentView$java_io_PrintStream(view, System.out);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.err.println$S("Failed to generate alignment with selection restricted and groups marked.");
} else {
throw e;
}
}
try {
System.out.println$S("View *with* hidden columns, no limit to selection, no groups to be collected:");
view=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z,[alignment, hidden, selection, true, false, false]);
C$.summariseAlignmentView$jalview_datamodel_AlignmentView$java_io_PrintStream(view, System.out);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.err.println$S("Failed to generate alignment with selection but no groups marked.");
} else {
throw e;
}
}
try {
System.out.println$S("View *with* hidden columns, no limit to selection, and all groups to be collected:");
view=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z,[alignment, hidden, selection, true, false, true]);
C$.summariseAlignmentView$jalview_datamodel_AlignmentView$java_io_PrintStream(view, System.out);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.err.println$S("Failed to generate alignment with selection marked but no groups marked.");
} else {
throw e;
}
}
try {
System.out.println$S("View *with* hidden columns, limited to selection and no groups to be collected:");
view=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z,[alignment, hidden, selection, true, true, false]);
C$.summariseAlignmentView$jalview_datamodel_AlignmentView$java_io_PrintStream(view, System.out);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.err.println$S("Failed to generate alignment with selection restricted but no groups marked.");
} else {
throw e;
}
}
try {
System.out.println$S("View *with* hidden columns, limited to selection, and all groups to be collected:");
view=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z,[alignment, hidden, selection, true, true, true]);
C$.summariseAlignmentView$jalview_datamodel_AlignmentView$java_io_PrintStream(view, System.out);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.err.println$S("Failed to generate alignment with selection restricted and groups marked.");
} else {
throw e;
}
}
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AlignmentView, "ScGroup", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['seqs','java.util.List','sg','jalview.datamodel.SequenceGroup']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.seqs=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'add$jalview_datamodel_SeqCigar',  function (seq) {
if (!seq.isMemberOf$O(this)) {
this.seqs.add$O(seq);
seq.setGroupMembership$O(this);
return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'remove$jalview_datamodel_SeqCigar',  function (seq) {
if (seq.removeGroupMembership$O(this)) {
this.seqs.remove$O(seq);
return true;
}return false;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.seqs.size$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
