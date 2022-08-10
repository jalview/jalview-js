(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'Error','jalview.util.MessageManager','jalview.datamodel.Sequence','jalview.analysis.SeqsetUtils','jalview.analysis.AlignSeq','jalview.util.Comparison','jalview.datamodel.CigarBase','jalview.datamodel.SequenceI','StringBuffer','jalview.util.ShiftList','java.util.Hashtable']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SeqCigar", null, 'jalview.datamodel.CigarSimple');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.refseq=null;
this.selGroups=null;
},1);

C$.$fields$=[['I',['start','end'],'O',['refseq','jalview.datamodel.SequenceI','seqProps','java.util.Hashtable','+selGroups']]]

Clazz.newMeth(C$, 'getRefSeq$',  function () {
return this.refseq;
});

Clazz.newMeth(C$, 'getStart$',  function () {
return this.start;
});

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'findPosition$I',  function (column) {
var w=0;
var ew;
var p=this.refseq.findPosition$I(this.start);
if (column < 0) {
return -1;
}if (this.range != null ) {
for (var i=0; i < this.length; i++) {
if (this.operation[i] == "M" || this.operation[i] == "D" ) {
p+=this.range[i];
}if (this.operation[i] == "M" || this.operation[i] == "I" ) {
ew=w + this.range[i];
if (column < ew) {
if (this.operation[i] == "I") {
return -1;
}return p - (ew - column);
}w=ew;
}}
}return -1;
});

Clazz.newMeth(C$, 'getSequenceString$C',  function (GapChar) {
return (this.length == 0) ? "" : this.getSequenceAndDeletions$S$C(this.refseq.getSequenceAsString$I$I(this.start, this.end), GapChar)[0];
});

Clazz.newMeth(C$, 'getSeq$C',  function (GapChar) {
var seq;
if (this.refseq == null  || this.length == 0 ) {
return null;
}var edit_result=this.getSequenceAndDeletions$S$C(this.refseq.getSequenceAsString$I$I(this.start, this.end), GapChar);
if (edit_result == null ) {
throw Clazz.new_([$I$(2).getString$S("error.implementation_error_unexpected_null_from_get_sequence_and_deletions")],$I$(1,1).c$$S);
}var bounds=edit_result[1];
seq=Clazz.new_([this.refseq.getName$(), edit_result[0], this.refseq.getStart$() + this.start + bounds[0] , this.refseq.getStart$() + this.start + ((bounds[2] == 0) ? -1 : bounds[2]) ],$I$(3,1).c$$S$S$I$I);
seq.setDescription$S(this.refseq.getDescription$());
var sstart=seq.getStart$();
var send=seq.getEnd$();
if (this.seqProps != null ) {
$I$(4).SeqCharacterUnhash$jalview_datamodel_SequenceI$java_util_Hashtable(seq, this.seqProps);
}seq.setDatasetSequence$jalview_datamodel_SequenceI(this.refseq);
seq.setStart$I(sstart);
seq.setEnd$I(send);
return seq;
});

Clazz.newMeth(C$, '_setSeq$jalview_datamodel_SequenceI$Z$I$I',  function (seq, initialDeletion, _s, _e) {
var hasgaps=false;
if (seq == null ) {
throw Clazz.new_([$I$(2).getString$S("error.implementation_error_set_seq_null")],$I$(1,1).c$$S);
}if (_s < 0) {
throw Clazz.new_([$I$(2,"formatMessage$S$SA",["error.implementation_error_s", Clazz.array(String, -1, [Integer.valueOf$I(_s).toString()])])],$I$(1,1).c$$S);
}var seq_string=seq.getSequenceAsString$();
if (_e == 0 || _e < _s  || _e > seq_string.length$() ) {
_e=seq_string.length$();
}this.start=seq.findPosition$I(_s) - seq.getStart$();
this.end=seq.findPosition$I(_e) - seq.getStart$();
var l_ungapped=this.end - this.start;
var ds=seq.getDatasetSequence$();
if (ds == null ) {
var ungapped=$I$(5,"extractGaps$S$S",[$I$(6).GapChars,  String.instantialize(seq_string)]);
l_ungapped=ungapped.length$();
if (l_ungapped == seq.getLength$()) {
ds=seq;
} else {
ds=Clazz.new_([seq.getName$(), ungapped, seq.getStart$(), seq.getStart$() + ungapped.length$() - 1],$I$(3,1).c$$S$S$I$I);
}}if (ds.getStart$() < seq.getStart$()) {
var offset=seq.getStart$() - ds.getStart$();
if (initialDeletion) {
this.addDeleted$I(_s + offset);
this.start=0;
this.end+=offset;
} else {
this.start+=offset;
this.end+=offset;
}}if (l_ungapped != (_e - _s)) {
hasgaps=true;
}this.refseq=ds;
this.seqProps=$I$(4).SeqCharacterHash$jalview_datamodel_SequenceI(seq);
if (this.end > ds.getLength$()) {
throw Clazz.new_([$I$(2).getString$S("error.implementation_error_seqcigar_possible")],$I$(1,1).c$$S);
}return hasgaps;
}, p$1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$CA$IA',  function (seq, operation, range) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
if (seq == null ) {
throw Clazz.new_([$I$(2).getString$S("error.implmentation_bug_seq_null")],$I$(1,1).c$$S);
}if (operation.length != range.length) {
throw Clazz.new_([$I$(2).getString$S("error.implementation_bug_cigar_operation_list_range_list")],$I$(1,1).c$$S);
}if (operation != null ) {
this.operation=Clazz.array(Character.TYPE, [operation.length + this._inc_length]);
this.range=Clazz.array(Integer.TYPE, [operation.length + this._inc_length]);
if (p$1._setSeq$jalview_datamodel_SequenceI$Z$I$I.apply(this, [seq, false, 0, 0])) {
throw Clazz.new_([$I$(2).getString$S("error.not_yet_implemented_cigar_object_from_cigar_string")],$I$(1,1).c$$S);
}for (var i=this.length, j=0; j < operation.length; i++, j++) {
var op=operation[j];
if (op != "M" && op != "I"  && op != "D" ) {
throw Clazz.new_([$I$(2,"formatMessage$S$SA",["error.implementation_bug_cigar_operation", Clazz.array(String, -1, [Integer.valueOf$I(j).toString(), Integer.valueOf$I(op.$c()).toString(), Integer.valueOf$I("M".$c()).toString(), Integer.valueOf$I("I".$c()).toString(), Integer.valueOf$I("D".$c()).toString()])])],$I$(1,1).c$$S);
}this.operation[i]=op;
this.range[i]=range[j];
}
this.length+=operation.length;
} else {
this.operation=null;
this.range=null;
this.length=0;
if (p$1._setSeq$jalview_datamodel_SequenceI$Z$I$I.apply(this, [seq, false, 0, 0])) {
throw Clazz.new_([$I$(2).getString$S("error.not_yet_implemented_cigar_object_from_cigar_string")],$I$(1,1).c$$S);
}}}, 1);

Clazz.newMeth(C$, 'addMatch$I',  function (range) {
this.addOperation$C$I("M", range);
});

Clazz.newMeth(C$, 'addSequenceOps$jalview_datamodel_CigarBase$jalview_datamodel_SequenceI$I$I$Z',  function (cigar, seq, startpos, endpos, initialDeletions) {
var op="\u0000";
var range=0;
var p=0;
var res=seq.getLength$();
if (!initialDeletions) {
p=startpos;
}while (p <= endpos){
var isGap=(p < res) ? $I$(6,"isGap$C",[seq.getCharAt$I(p)]) : true;
if ((startpos <= p) && (p <= endpos) ) {
if (isGap) {
if (range > 0 && op != "I" ) {
cigar.addOperation$C$I(op, range);
range=0;
}op="I";
++range;
} else {
if (range > 0 && op != "M" ) {
cigar.addOperation$C$I(op, range);
range=0;
}op="M";
++range;
}} else {
if (!isGap) {
if (range > 0 && op != "D" ) {
cigar.addOperation$C$I(op, range);
range=0;
}op="D";
++range;
} else {
}}++p;
}
if (range > 0) {
cigar.addOperation$C$I(op, range);
}}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI',  function (seq) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
if (seq == null ) {
throw Clazz.new_([$I$(2).getString$S("error.implementation_error_for_new_cigar")],$I$(1,1).c$$S);
}p$1._setSeq$jalview_datamodel_SequenceI$Z$I$I.apply(this, [seq, false, 0, 0]);
C$.addSequenceOps$jalview_datamodel_CigarBase$jalview_datamodel_SequenceI$I$I$Z(this, seq, 0, seq.getLength$() - 1, false);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$I$I',  function (seq, start, end) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
if (seq == null ) {
throw Clazz.new_([$I$(2).getString$S("error.implementation_error_for_new_cigar")],$I$(1,1).c$$S);
}p$1._setSeq$jalview_datamodel_SequenceI$Z$I$I.apply(this, [seq, false, start, end + 1]);
C$.addSequenceOps$jalview_datamodel_CigarBase$jalview_datamodel_SequenceI$I$I$Z(this, seq, start, end, false);
}, 1);

Clazz.newMeth(C$, 'parseCigar$jalview_datamodel_SequenceI$S',  function (seq, cigarString) {
var opsandrange=$I$(7).parseCigarString$S(cigarString);
return Clazz.new_(C$.c$$jalview_datamodel_SequenceI$CA$IA,[seq, opsandrange[0], opsandrange[1]]);
}, 1);

Clazz.newMeth(C$, 'createAlignmentSequences$jalview_datamodel_SeqCigarA$C$jalview_datamodel_HiddenColumns$IA',  function (alseqs, gapCharacter, hidden, segments) {
var seqs=Clazz.array($I$(8), [alseqs.length]);
var g_seqs=Clazz.array($I$(9), [alseqs.length]);
var alseqs_string=Clazz.array(String, [alseqs.length]);
var gs_regions=Clazz.array(java.lang.Object, [alseqs.length]);
for (var i=0; i < alseqs.length; i++) {
alseqs_string[i]=alseqs[i].getRefSeq$().getSequenceAsString$I$I(alseqs[i].start, alseqs[i].end);
gs_regions[i]=alseqs[i].getSequenceAndDeletions$S$C(alseqs_string[i], gapCharacter);
if (gs_regions[i] == null ) {
throw Clazz.new_([$I$(2,"formatMessage$S$SA",["error.implementation_error_cigar_seq_no_operations", Clazz.array(String, -1, [Integer.valueOf$I(i).toString()])])],$I$(1,1).c$$S);
}g_seqs[i]=Clazz.new_([(gs_regions[i])[0]],$I$(9,1).c$$S);
}
var shifts=Clazz.new_($I$(10,1));
for (var i=0; i < alseqs.length; i++) {
var gs_region=((gs_regions[i])[2]);
if (gs_region != null ) {
for (var hr=0; hr < gs_region.length; hr++) {
var region=gs_region[hr];
var insert=Clazz.array(Character.TYPE, [region[1] - region[0] + 1]);
for (var s=0; s < insert.length; s++) {
insert[s]=gapCharacter;
}
var inspos=shifts.shift$I(region[2]);
for (var s=0; s < alseqs.length; s++) {
if (s != i) {
if (g_seqs[s].length$() <= inspos) {
for (var l=inspos - g_seqs[s].length$(); l > 0; l--) {
g_seqs[s].append$C(gapCharacter);
}
}g_seqs[s].insert$I$CA(inspos, insert);
} else {
g_seqs[s].insert$I$S(inspos, alseqs_string[i].substring$I$I(region[0], region[1] + 1));
}}
shifts.addShift$I$I(region[2], insert.length);
if (segments == null ) {
hidden.hideColumns$I$I(inspos, inspos + insert.length - 1);
}}
}}
for (var i=0; i < alseqs.length; i++) {
var bounds=((gs_regions[i])[1]);
var ref=alseqs[i].getRefSeq$();
seqs[i]=Clazz.new_([ref.getName$(), g_seqs[i].toString(), ref.getStart$() + alseqs[i].start + bounds[0] , ref.getStart$() + alseqs[i].start + (bounds[2] == 0 ? -1 : bounds[2]) ],$I$(3,1).c$$S$S$I$I);
seqs[i].setDatasetSequence$jalview_datamodel_SequenceI(ref);
seqs[i].setDescription$S(ref.getDescription$());
}
if (segments != null ) {
for (var i=0; i < segments.length; i+=3) {
hidden.hideColumns$I$I(segments[i + 1], segments[i + 1] + segments[i + 2] - 1);
}
}return seqs;
}, 1);

Clazz.newMeth(C$, 'setGroupMembership$O',  function (group) {
if (this.selGroups == null ) {
this.selGroups=Clazz.new_($I$(11,1));
}this.selGroups.put$O$O(group, Clazz.array(Integer.TYPE, [0]));
});

Clazz.newMeth(C$, 'removeGroupMembership$O',  function (group) {
if (this.selGroups != null  && this.selGroups.containsKey$O(group) ) {
this.selGroups.remove$O(group);
return true;
}return false;
});

Clazz.newMeth(C$, 'clearMemberships$',  function () {
if (this.selGroups != null ) {
this.selGroups.clear$();
}this.selGroups=null;
});

Clazz.newMeth(C$, 'getAllMemberships$',  function () {
if (this.selGroups == null ) {
return null;
}var mmbs=Clazz.array(java.lang.Object, [this.selGroups.size$()]);
var en=this.selGroups.keys$();
for (var i=0; en.hasMoreElements$(); i++) {
mmbs[i]=en.nextElement$();
}
return mmbs;
});

Clazz.newMeth(C$, 'isMemberOf$O',  function (sgr) {
return (this.selGroups != null ) && this.selGroups.get$O(sgr) != null  ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
