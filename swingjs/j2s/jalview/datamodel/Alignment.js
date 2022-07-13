(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'java.util.Collections','java.util.ArrayList','jalview.datamodel.HiddenSequences','jalview.datamodel.HiddenColumns','jalview.util.Comparison','jalview.datamodel.Sequence','jalview.datamodel.SeqCigar','Error','jalview.util.MessageManager','jalview.datamodel.SequenceI','jalview.analysis.AlignmentUtils','jalview.datamodel.SequenceGroup','jalview.datamodel.AlignmentAnnotation','java.util.Vector','jalview.util.LinkedIdentityHashSet','jalview.datamodel.CigarArray','java.util.Hashtable','jalview.datamodel.Annotation','java.util.Arrays','jalview.io.FastaFile','java.util.HashSet','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Alignment", null, null, ['jalview.datamodel.AlignmentI', 'AutoCloseable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.gapCharacter="-";
this.nucleotide=true;
this.hasRNAStructure=false;
this.alignmentRefs=0;
this.seqrep=null;
},1);

C$.$fields$=[['Z',['nucleotide','hasRNAStructure'],'C',['gapCharacter'],'I',['alignmentRefs'],'O',['dataset','jalview.datamodel.Alignment','sequences','java.util.List','+groups','annotations','jalview.datamodel.AlignmentAnnotation[]','hiddenSequences','jalview.datamodel.HiddenSequences','hiddenCols','jalview.datamodel.HiddenColumns','alignmentProperties','java.util.Hashtable','codonFrameList','java.util.List','seqrep','jalview.datamodel.SequenceI']]]

Clazz.newMeth(C$, 'initAlignment$jalview_datamodel_SequenceIA',  function (seqs) {
this.groups=$I$(1,"synchronizedList$java_util_List",[Clazz.new_($I$(2,1))]);
this.hiddenSequences=Clazz.new_($I$(3,1).c$$jalview_datamodel_AlignmentI,[this]);
this.hiddenCols=Clazz.new_($I$(4,1));
this.codonFrameList=Clazz.new_($I$(2,1));
this.nucleotide=$I$(5).isNucleotide$jalview_datamodel_SequenceIA(seqs);
this.sequences=$I$(1,"synchronizedList$java_util_List",[Clazz.new_($I$(2,1))]);
for (var i=0; i < seqs.length; i++) {
this.sequences.add$O(seqs[i]);
}
}, p$1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI',  function (al) {
;C$.$init$.apply(this);
var seqs=al.getSequencesArray$();
for (var i=0; i < seqs.length; i++) {
seqs[i]=Clazz.new_($I$(6,1).c$$jalview_datamodel_SequenceI,[seqs[i]]);
}
p$1.initAlignment$jalview_datamodel_SequenceIA.apply(this, [seqs]);
if (this.dataset == null  && al.getDataset$() == null  ) {
this.setCodonFrames$java_util_List(al.getCodonFrames$());
}}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA',  function (seqs) {
;C$.$init$.apply(this);
p$1.initAlignment$jalview_datamodel_SequenceIA.apply(this, [seqs]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SeqCigarA',  function (alseqs) {
;C$.$init$.apply(this);
var seqs=$I$(7,"createAlignmentSequences$jalview_datamodel_SeqCigarA$C$jalview_datamodel_HiddenColumns$IA",[alseqs, this.gapCharacter, Clazz.new_($I$(4,1)), null]);
p$1.initAlignment$jalview_datamodel_SequenceIA.apply(this, [seqs]);
}, 1);

Clazz.newMeth(C$, 'createAlignment$jalview_datamodel_CigarArray',  function (compactAlignment) {
throw Clazz.new_([$I$(9).getString$S("error.alignment_cigararray_not_implemented")],$I$(8,1).c$$S);
}, 1);

Clazz.newMeth(C$, 'getSequences$',  function () {
return this.sequences;
});

Clazz.newMeth(C$, 'getSequences$java_util_Map',  function (hiddenReps) {
return this.sequences;
});

Clazz.newMeth(C$, 'getSequencesArray$',  function () {
if (this.sequences == null ) {
return null;
}{
return this.sequences.toArray$OA(Clazz.array($I$(10), [this.sequences.size$()]));
}});

Clazz.newMeth(C$, 'getSequencesByName$',  function () {
return $I$(11).getSequencesByName$jalview_datamodel_AlignmentI(this);
});

Clazz.newMeth(C$, 'getSequenceAt$I',  function (i) {
{
if (i > -1 && i < this.sequences.size$() ) {
return this.sequences.get$I(i);
}}return null;
});

Clazz.newMeth(C$, 'getSequenceAtAbsoluteIndex$I',  function (i) {
var seq=null;
if (this.getHiddenSequences$().getSize$() > 0) {
seq=this.getHiddenSequences$().getHiddenSequence$I(i);
if (seq == null ) {
var index=this.getHiddenSequences$().findIndexWithoutHiddenSeqs$I(i);
seq=this.getSequenceAt$I(index);
}} else {
seq=this.getSequenceAt$I(i);
}return seq;
});

Clazz.newMeth(C$, 'addSequence$jalview_datamodel_SequenceI',  function (snew) {
if (this.dataset != null ) {
var dsseq=snew.getDatasetSequence$();
if (dsseq == null ) {
var adding=snew.deriveSequence$();
snew=adding;
dsseq=snew.getDatasetSequence$();
}if (this.getDataset$().findIndex$jalview_datamodel_SequenceI(dsseq) == -1) {
this.getDataset$().addSequence$jalview_datamodel_SequenceI(dsseq);
}}if (this.sequences == null ) {
p$1.initAlignment$jalview_datamodel_SequenceIA.apply(this, [Clazz.array($I$(10), -1, [snew])]);
} else {
{
this.sequences.add$O(snew);
}}if (this.hiddenSequences != null ) {
this.hiddenSequences.adjustHeightSequenceAdded$();
}});

Clazz.newMeth(C$, 'replaceSequenceAt$I$jalview_datamodel_SequenceI',  function (i, snew) {
{
if (this.sequences.size$() > i) {
return this.sequences.set$I$O(i, snew);
} else {
this.sequences.add$O(snew);
this.hiddenSequences.adjustHeightSequenceAdded$();
}return null;
}});

Clazz.newMeth(C$, 'getGroups$',  function () {
return this.groups;
});

Clazz.newMeth(C$, 'close$',  function () {
if (this.getDataset$() != null ) {
try {
p$1.removeAlignmentRef.apply(this.getDataset$(), []);
} catch (e) {
e.printStackTrace$();
}
}this.nullReferences$();
});

Clazz.newMeth(C$, 'nullReferences$',  function () {
this.dataset=null;
this.sequences=null;
this.groups=null;
this.annotations=null;
this.hiddenSequences=null;
});

Clazz.newMeth(C$, 'removeAlignmentRef',  function () {
if (--this.alignmentRefs == 0) {
this.nullReferences$();
}}, p$1);

Clazz.newMeth(C$, 'deleteSequence$jalview_datamodel_SequenceI',  function (s) {
{
this.deleteSequence$I(this.findIndex$jalview_datamodel_SequenceI(s));
}});

Clazz.newMeth(C$, 'deleteSequence$I',  function (i) {
{
if (i > -1 && i < this.getHeight$() ) {
this.sequences.remove$I(i);
this.hiddenSequences.adjustHeightSequenceDeleted$I(i);
}}});

Clazz.newMeth(C$, 'deleteHiddenSequence$I',  function (i) {
{
if (i > -1 && i < this.getHeight$() ) {
this.sequences.remove$I(i);
}}});

Clazz.newMeth(C$, 'findGroup$jalview_datamodel_SequenceI$I',  function (seq, position) {
{
for (var sg, $sg = this.groups.iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (sg.getSequences$java_util_Map(null).contains$O(seq)) {
if (position >= sg.getStartRes$() && position <= sg.getEndRes$() ) {
return sg;
}}}
}return null;
});

Clazz.newMeth(C$, 'findAllGroups$jalview_datamodel_SequenceI',  function (s) {
var temp=Clazz.new_($I$(2,1));
{
var gSize=this.groups.size$();
for (var i=0; i < gSize; i++) {
var sg=this.groups.get$I(i);
if (sg == null  || sg.getSequences$() == null  ) {
this.deleteGroup$jalview_datamodel_SequenceGroup(sg);
--gSize;
continue;
}if (sg.getSequences$().contains$O(s)) {
temp.add$O(sg);
}}
}var ret=Clazz.array($I$(12), [temp.size$()]);
return temp.toArray$OA(ret);
});

Clazz.newMeth(C$, 'addGroup$jalview_datamodel_SequenceGroup',  function (sg) {
{
if (!this.groups.contains$O(sg)) {
if (this.hiddenSequences.getSize$() > 0) {
var i;
var iSize=sg.getSize$();
for (i=0; i < iSize; i++) {
if (!this.sequences.contains$O(sg.getSequenceAt$I(i))) {
sg.deleteSequence$jalview_datamodel_SequenceI$Z(sg.getSequenceAt$I(i), false);
--iSize;
--i;
}}
if (sg.getSize$() < 1) {
return;
}}sg.setContext$jalview_datamodel_AnnotatedCollectionI$Z(this, true);
this.groups.add$O(sg);
}}});

Clazz.newMeth(C$, 'removeAnnotationForGroup$jalview_datamodel_SequenceGroup',  function (gp) {
if (this.annotations == null  || this.annotations.length == 0 ) {
return;
}var t;
var todelete=Clazz.array($I$(13), [this.annotations.length]);
var tokeep=Clazz.array($I$(13), [this.annotations.length]);
var i;
var p;
var k;
if (gp == null ) {
for (i=0, p=0, k=0; i < this.annotations.length; i++) {
if (this.annotations[i].groupRef != null ) {
todelete[p++]=this.annotations[i];
} else {
tokeep[k++]=this.annotations[i];
}}
} else {
for (i=0, p=0, k=0; i < this.annotations.length; i++) {
if (this.annotations[i].groupRef === gp ) {
todelete[p++]=this.annotations[i];
} else {
tokeep[k++]=this.annotations[i];
}}
}if (p > 0) {
for (i=0; i < p; i++) {
p$1.unhookAnnotation$jalview_datamodel_AlignmentAnnotation.apply(this, [todelete[i]]);
todelete[i]=null;
}
t=Clazz.array($I$(13), [k]);
for (i=0; i < k; i++) {
t[i]=tokeep[i];
}
this.annotations=t;
}}, p$1);

Clazz.newMeth(C$, 'deleteAllGroups$',  function () {
{
if (this.annotations != null ) {
p$1.removeAnnotationForGroup$jalview_datamodel_SequenceGroup.apply(this, [null]);
}for (var sg, $sg = this.groups.iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
sg.setContext$jalview_datamodel_AnnotatedCollectionI$Z(null, false);
}
this.groups.clear$();
}});

Clazz.newMeth(C$, 'deleteGroup$jalview_datamodel_SequenceGroup',  function (g) {
{
if (this.groups.contains$O(g)) {
p$1.removeAnnotationForGroup$jalview_datamodel_SequenceGroup.apply(this, [g]);
this.groups.remove$O(g);
g.setContext$jalview_datamodel_AnnotatedCollectionI$Z(null, false);
}}});

Clazz.newMeth(C$, 'findName$S',  function (name) {
return this.findName$S$Z(name, false);
});

Clazz.newMeth(C$, 'findName$S$Z',  function (token, b) {
return this.findName$jalview_datamodel_SequenceI$S$Z(null, token, b);
});

Clazz.newMeth(C$, 'findName$jalview_datamodel_SequenceI$S$Z',  function (startAfter, token, b) {
var i=0;
var sq=null;
var sqname=null;
var nseq=this.sequences.size$();
if (startAfter != null ) {
var matched=false;
while (i < nseq){
if (this.getSequenceAt$I(i++) === startAfter ) {
matched=true;
break;
}}
if (!matched) {
i=0;
}}while (i < nseq){
sq=this.getSequenceAt$I(i);
sqname=sq.getName$();
if (sqname.equals$O(token) || (b && (sqname.equalsIgnoreCase$S(token)) ) ) {
return this.getSequenceAt$I(i);
}++i;
}
return null;
});

Clazz.newMeth(C$, 'findSequenceMatch$S',  function (name) {
var matches=Clazz.new_($I$(14,1));
var i=0;
while (i < this.sequences.size$()){
if (this.getSequenceAt$I(i).getName$().equals$O(name)) {
matches.addElement$O(this.getSequenceAt$I(i));
}++i;
}
var result=Clazz.array($I$(10), [matches.size$()]);
for (i=0; i < result.length; i++) {
result[i]=matches.elementAt$I(i);
}
return result;
});

Clazz.newMeth(C$, 'findIndex$jalview_datamodel_SequenceI',  function (s) {
var i=0;
while (i < this.sequences.size$()){
if (s === this.getSequenceAt$I(i) ) {
return i;
}++i;
}
return -1;
});

Clazz.newMeth(C$, 'findIndex$jalview_datamodel_SearchResultsI',  function (results) {
var i=0;
while (i < this.sequences.size$()){
if (results.involvesSequence$jalview_datamodel_SequenceI(this.getSequenceAt$I(i))) {
return i;
}++i;
}
return -1;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.sequences.size$();
});

Clazz.newMeth(C$, 'getAbsoluteHeight$',  function () {
return this.sequences.size$() + this.getHiddenSequences$().getSize$();
});

Clazz.newMeth(C$, 'getWidth$',  function () {
var maxLength=-1;
for (var i=0; i < this.sequences.size$(); i++) {
maxLength=Math.max(maxLength, this.getSequenceAt$I(i).getLength$());
}
return maxLength;
});

Clazz.newMeth(C$, 'getVisibleWidth$',  function () {
var w=this.getWidth$();
if (this.hiddenCols != null ) {
w-=this.hiddenCols.getSize$();
}return w;
});

Clazz.newMeth(C$, 'setGapCharacter$C',  function (gc) {
this.gapCharacter=gc;
{
for (var seq, $seq = this.sequences.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
seq.setSequence$S(seq.getSequenceAsString$().replace$C$C(".", gc).replace$C$C("-", gc).replace$C$C(" ", gc));
}
}});

Clazz.newMeth(C$, 'getGapCharacter$',  function () {
return this.gapCharacter;
});

Clazz.newMeth(C$, 'isAligned$',  function () {
return this.isAligned$Z(false);
});

Clazz.newMeth(C$, 'isAligned$Z',  function (includeHidden) {
var width=this.getWidth$();
if (this.hiddenSequences == null  || this.hiddenSequences.getSize$() == 0 ) {
includeHidden=true;
}for (var i=0; i < this.sequences.size$(); i++) {
if (includeHidden || !this.hiddenSequences.isHidden$jalview_datamodel_SequenceI(this.getSequenceAt$I(i)) ) {
if (this.getSequenceAt$I(i).getLength$() != width) {
return false;
}}}
return true;
});

Clazz.newMeth(C$, 'isHidden$I',  function (alignmentIndex) {
return (this.getHiddenSequences$().getHiddenSequence$I(alignmentIndex) != null );
});

Clazz.newMeth(C$, 'deleteAllAnnotations$Z',  function (includingAutoCalculated) {
var result=false;
for (var alan, $alan = 0, $$alan = this.getAlignmentAnnotation$(); $alan<$$alan.length&&((alan=($$alan[$alan])),1);$alan++) {
if (!alan.autoCalculated || includingAutoCalculated ) {
this.deleteAnnotation$jalview_datamodel_AlignmentAnnotation(alan);
result=true;
}}
return result;
});

Clazz.newMeth(C$, 'deleteAnnotation$jalview_datamodel_AlignmentAnnotation',  function (aa) {
return this.deleteAnnotation$jalview_datamodel_AlignmentAnnotation$Z(aa, true);
});

Clazz.newMeth(C$, 'deleteAnnotation$jalview_datamodel_AlignmentAnnotation$Z',  function (aa, unhook) {
var aSize=1;
if (this.annotations != null ) {
aSize=this.annotations.length;
}if (aSize < 1) {
return false;
}var temp=Clazz.array($I$(13), [aSize - 1]);
var swap=false;
var tIndex=0;
for (var i=0; i < aSize; i++) {
if (this.annotations[i] === aa ) {
swap=true;
continue;
}if (tIndex < temp.length) {
temp[tIndex++]=this.annotations[i];
}}
if (swap) {
this.annotations=temp;
if (unhook) {
p$1.unhookAnnotation$jalview_datamodel_AlignmentAnnotation.apply(this, [aa]);
}}return swap;
});

Clazz.newMeth(C$, 'unhookAnnotation$jalview_datamodel_AlignmentAnnotation',  function (aa) {
if (aa.sequenceRef != null ) {
aa.sequenceRef.removeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(aa);
}if (aa.groupRef != null ) {
aa.groupRef=null;
}}, p$1);

Clazz.newMeth(C$, 'addAnnotation$jalview_datamodel_AlignmentAnnotation',  function (aa) {
this.addAnnotation$jalview_datamodel_AlignmentAnnotation$I(aa, -1);
});

Clazz.newMeth(C$, 'addAnnotation$jalview_datamodel_AlignmentAnnotation$I',  function (aa, pos) {
if (aa.getRNAStruc$() != null ) {
this.hasRNAStructure=true;
}var aSize=1;
if (this.annotations != null ) {
aSize=this.annotations.length + 1;
}var temp=Clazz.array($I$(13), [aSize]);
var i=0;
if (pos == -1 || pos >= aSize ) {
temp[aSize - 1]=aa;
} else {
temp[pos]=aa;
}if (aSize > 1) {
var p=0;
for (i=0; i < (aSize - 1); i++, p++) {
if (p == pos) {
++p;
}if (p < temp.length) {
temp[p]=this.annotations[i];
}}
}this.annotations=temp;
});

Clazz.newMeth(C$, 'setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I',  function (aa, index) {
if (aa == null  || this.annotations == null   || this.annotations.length - 1 < index ) {
return;
}var aSize=this.annotations.length;
var temp=Clazz.array($I$(13), [aSize]);
temp[index]=aa;
for (var i=0; i < aSize; i++) {
if (i == index) {
continue;
}if (i < index) {
temp[i]=this.annotations[i];
} else {
temp[i]=this.annotations[i - 1];
}}
this.annotations=temp;
});

Clazz.newMeth(C$, 'getAlignmentAnnotation$',  function () {
return this.annotations;
});

Clazz.newMeth(C$, 'isNucleotide$',  function () {
return this.nucleotide;
});

Clazz.newMeth(C$, 'hasRNAStructure$',  function () {
return this.hasRNAStructure;
});

Clazz.newMeth(C$, 'setDataset$jalview_datamodel_AlignmentI',  function (data) {
if (this.dataset == null  && data == null  ) {
this.createDatasetAlignment$();
} else if (this.dataset == null  && data != null  ) {
if (data === this ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Circular dataset reference"]);
}if (!(Clazz.instanceOf(data, "jalview.datamodel.Alignment"))) {
throw Clazz.new_($I$(8,1).c$$S,["Implementation Error: jalview.datamodel.Alignment does not yet support other implementations of AlignmentI as its dataset reference"]);
}this.dataset=data;
for (var i=0; i < this.getHeight$(); i++) {
var currentSeq=this.getSequenceAt$I(i);
var dsq=currentSeq.getDatasetSequence$();
if (dsq == null ) {
dsq=currentSeq.createDatasetSequence$();
this.dataset.addSequence$jalview_datamodel_SequenceI(dsq);
} else {
while (dsq.getDatasetSequence$() != null ){
dsq=dsq.getDatasetSequence$();
}
if (this.dataset.findIndex$jalview_datamodel_SequenceI(dsq) == -1) {
this.dataset.addSequence$jalview_datamodel_SequenceI(dsq);
}}}
}p$1.addAlignmentRef.apply(this.dataset, []);
});

Clazz.newMeth(C$, 'resolveAndAddDatasetSeq$jalview_datamodel_SequenceI$java_util_Set$Z',  function (currentSeq, seqs, createDatasetSequence) {
var alignedSeq=currentSeq;
if (currentSeq.getDatasetSequence$() != null ) {
currentSeq=currentSeq.getDatasetSequence$();
} else {
if (createDatasetSequence) {
currentSeq=currentSeq.createDatasetSequence$();
}}var toProcess=Clazz.new_($I$(2,1));
toProcess.add$O(currentSeq);
while (toProcess.size$() > 0){
var curDs=toProcess.remove$I(0);
if (!seqs.add$O(curDs)) {
continue;
}if (curDs.getDBRefs$() != null ) {
for (var dbr, $dbr = curDs.getDBRefs$().iterator$(); $dbr.hasNext$()&&((dbr=($dbr.next$())),1);) {
if (dbr.getMap$() != null  && dbr.getMap$().getTo$() != null  ) {
if (dbr.getMap$().getTo$() === alignedSeq ) {
dbr.getMap$().setTo$jalview_datamodel_SequenceI(currentSeq);
}if (dbr.getMap$().getTo$().getDatasetSequence$() != null ) {
throw Clazz.new_(["Implementation error: Map.getTo() for dbref " + dbr + " from " + curDs.getName$() + " is not a dataset sequence." ],$I$(8,1).c$$S);
}toProcess.add$O(dbr.getMap$().getTo$());
}}
}}
}, p$1);

Clazz.newMeth(C$, 'createDatasetAlignment$',  function () {
if (this.dataset != null ) {
return;
}var seqs=Clazz.new_($I$(15,1));
for (var i=0; i < this.getHeight$(); i++) {
var currentSeq=this.getSequenceAt$I(i);
p$1.resolveAndAddDatasetSeq$jalview_datamodel_SequenceI$java_util_Set$Z.apply(this, [currentSeq, seqs, true]);
}
for (var cf, $cf = this.codonFrameList.iterator$(); $cf.hasNext$()&&((cf=($cf.next$())),1);) {
for (var ssm, $ssm = cf.getMappings$().iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (!seqs.contains$O(ssm.getFromSeq$())) {
p$1.resolveAndAddDatasetSeq$jalview_datamodel_SequenceI$java_util_Set$Z.apply(this, [ssm.getFromSeq$(), seqs, false]);
}if (!seqs.contains$O(ssm.getMapping$().getTo$())) {
p$1.resolveAndAddDatasetSeq$jalview_datamodel_SequenceI$java_util_Set$Z.apply(this, [ssm.getMapping$().getTo$(), seqs, false]);
}}
}
this.dataset=Clazz.new_(C$.c$$jalview_datamodel_SequenceIA,[seqs.toArray$OA(Clazz.array($I$(10), [seqs.size$()]))]);
this.dataset.codonFrameList=this.codonFrameList;
this.codonFrameList=null;
});

Clazz.newMeth(C$, 'addAlignmentRef',  function () {
++this.alignmentRefs;
}, p$1);

Clazz.newMeth(C$, 'getDataset$',  function () {
return this.dataset;
});

Clazz.newMeth(C$, 'padGaps$',  function () {
var modified=false;
var maxLength=-1;
var current;
var nseq=this.sequences.size$();
for (var i=0; i < nseq; i++) {
current=this.getSequenceAt$I(i);
for (var j=current.getLength$(); j > maxLength; j--) {
if (j > maxLength && !$I$(5,"isGap$C",[current.getCharAt$I(j)]) ) {
maxLength=j;
break;
}}
}
++maxLength;
var cLength;
for (var i=0; i < nseq; i++) {
current=this.getSequenceAt$I(i);
cLength=current.getLength$();
if (cLength < maxLength) {
current.insertCharAt$I$I$C(cLength, maxLength - cLength, this.gapCharacter);
modified=true;
} else if (current.getLength$() > maxLength) {
current.deleteChars$I$I(maxLength, current.getLength$());
}}
return modified;
});

Clazz.newMeth(C$, 'justify$Z',  function (right) {
var modified=false;
var maxLength=-1;
var ends=Clazz.array(Integer.TYPE, [this.sequences.size$() * 2]);
var current;
for (var i=0; i < this.sequences.size$(); i++) {
current=this.getSequenceAt$I(i);
ends[i * 2]=current.findIndex$I(current.getStart$());
ends[i * 2 + 1]=current.findIndex$I(current.getStart$() + current.getLength$());
var hitres=false;
for (var j=0, rs=0, ssiz=current.getLength$(); j < ssiz; j++) {
if (!$I$(5,"isGap$C",[current.getCharAt$I(j)])) {
if (!hitres) {
ends[i * 2]=j;
hitres=true;
} else {
ends[i * 2 + 1]=j;
if (j - ends[i * 2] > maxLength) {
maxLength=j - ends[i * 2];
}}}}
}
++maxLength;
var cLength;
var extent;
var diff;
for (var i=0; i < this.sequences.size$(); i++) {
current=this.getSequenceAt$I(i);
cLength=1 + ends[i * 2 + 1] - ends[i * 2];
diff=maxLength - cLength;
extent=current.getLength$();
if (right) {
if (extent > ends[i * 2 + 1]) {
current.deleteChars$I$I(ends[i * 2 + 1] + 1, extent);
modified=true;
}if (ends[i * 2] > diff) {
current.deleteChars$I$I(0, ends[i * 2] - diff);
modified=true;
} else {
if (ends[i * 2] < diff) {
current.insertCharAt$I$I$C(0, diff - ends[i * 2], this.gapCharacter);
modified=true;
}}} else {
if (ends[i * 2] > 0) {
current.deleteChars$I$I(0, ends[i * 2]);
modified=true;
ends[i * 2 + 1]-=ends[i * 2];
extent-=ends[i * 2];
}if (extent > maxLength) {
current.deleteChars$I$I(maxLength + 1, extent);
modified=true;
} else {
if (extent < maxLength) {
current.insertCharAt$I$I$C(extent, maxLength - extent, this.gapCharacter);
modified=true;
}}}}
return modified;
});

Clazz.newMeth(C$, 'getHiddenSequences$',  function () {
return this.hiddenSequences;
});

Clazz.newMeth(C$, 'getHiddenColumns$',  function () {
return this.hiddenCols;
});

Clazz.newMeth(C$, 'getCompactAlignment$',  function () {
{
var alseqs=Clazz.array($I$(7), [this.sequences.size$()]);
var i=0;
for (var seq, $seq = this.sequences.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
alseqs[i++]=Clazz.new_($I$(7,1).c$$jalview_datamodel_SequenceI,[seq]);
}
var cal=Clazz.new_($I$(16,1).c$$jalview_datamodel_CigarSimpleA,[alseqs]);
cal.addOperation$C$I("M", this.getWidth$());
return cal;
}});

Clazz.newMeth(C$, 'setProperty$O$O',  function (key, value) {
if (this.alignmentProperties == null ) {
this.alignmentProperties=Clazz.new_($I$(17,1));
}this.alignmentProperties.put$O$O(key, value);
});

Clazz.newMeth(C$, 'getProperty$O',  function (key) {
if (this.alignmentProperties != null ) {
return this.alignmentProperties.get$O(key);
} else {
return null;
}});

Clazz.newMeth(C$, 'getProperties$',  function () {
return this.alignmentProperties;
});

Clazz.newMeth(C$, 'addCodonFrame$jalview_datamodel_AlignedCodonFrame',  function (codons) {
var acfs=this.getCodonFrames$();
if (codons != null  && acfs != null   && !acfs.contains$O(codons) ) {
acfs.add$O(codons);
}});

Clazz.newMeth(C$, 'getCodonFrame$jalview_datamodel_SequenceI',  function (seq) {
if (seq == null ) {
return null;
}var cframes=Clazz.new_($I$(2,1));
for (var acf, $acf = this.getCodonFrames$().iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
if (acf.involvesSequence$jalview_datamodel_SequenceI(seq)) {
cframes.add$O(acf);
}}
return cframes;
});

Clazz.newMeth(C$, 'setCodonFrames$java_util_List',  function (acfs) {
if (this.dataset != null ) {
this.dataset.setCodonFrames$java_util_List(acfs);
} else {
this.codonFrameList=acfs;
}});

Clazz.newMeth(C$, 'getCodonFrames$',  function () {
return this.dataset != null  ? this.dataset.getCodonFrames$() : this.codonFrameList;
});

Clazz.newMeth(C$, 'removeCodonFrame$jalview_datamodel_AlignedCodonFrame',  function (codons) {
var acfs=this.getCodonFrames$();
if (codons == null  || acfs == null  ) {
return false;
}return acfs.remove$O(codons);
});

Clazz.newMeth(C$, 'append$jalview_datamodel_AlignmentI',  function (toappend) {
var oldc=toappend.getGapCharacter$();
var samegap=oldc == this.getGapCharacter$();
var hashidden=toappend.getHiddenSequences$() != null  && toappend.getHiddenSequences$().hiddenSequences != null  ;
var sqs=(hashidden) ? toappend.getHiddenSequences$().getFullAlignment$().getSequences$() : toappend.getSequences$();
if (sqs != null ) {
var toappendsq=Clazz.new_($I$(2,1));
{
for (var addedsq, $addedsq = sqs.iterator$(); $addedsq.hasNext$()&&((addedsq=($addedsq.next$())),1);) {
if (!samegap) {
addedsq.replace$C$C(oldc, this.gapCharacter);
}toappendsq.add$O(addedsq);
}
}for (var addedsq, $addedsq = toappendsq.iterator$(); $addedsq.hasNext$()&&((addedsq=($addedsq.next$())),1);) {
this.addSequence$jalview_datamodel_SequenceI(addedsq);
}
}var alan=toappend.getAlignmentAnnotation$();
for (var a=0; alan != null  && a < alan.length ; a++) {
this.addAnnotation$jalview_datamodel_AlignmentAnnotation(alan[a]);
}
this.getCodonFrames$().addAll$java_util_Collection(toappend.getCodonFrames$());
var sg=toappend.getGroups$();
if (sg != null ) {
for (var _sg, $_sg = sg.iterator$(); $_sg.hasNext$()&&((_sg=($_sg.next$())),1);) {
this.addGroup$jalview_datamodel_SequenceGroup(_sg);
}
}if (toappend.getHiddenSequences$() != null ) {
var hs=toappend.getHiddenSequences$();
if (this.hiddenSequences == null ) {
this.hiddenSequences=Clazz.new_($I$(3,1).c$$jalview_datamodel_AlignmentI,[this]);
}if (hs.hiddenSequences != null ) {
for (var s=0; s < hs.hiddenSequences.length; s++) {
if (hs.hiddenSequences[s] != null ) {
this.hiddenSequences.hideSequence$jalview_datamodel_SequenceI(hs.hiddenSequences[s]);
}}
}}if (toappend.getProperties$() != null ) {
var key=toappend.getProperties$().keys$();
while (key.hasMoreElements$()){
var k=key.nextElement$();
var ourval=this.getProperty$O(k);
var toapprop=toappend.getProperty$O(k);
if (ourval != null ) {
if (ourval.getClass$().equals$O(toapprop.getClass$()) && !ourval.equals$O(toapprop) ) {
if (Clazz.instanceOf(ourval, "java.lang.String")) {
this.setProperty$O$O(k, (ourval) + "; " + (toapprop) );
} else {
if (Clazz.instanceOf(ourval, "java.util.Vector")) {
var theirv=(toapprop).elements$();
while (theirv.hasMoreElements$()){
(ourval).addElement$O(theirv);
}
}}}} else {
this.setProperty$O$O(k, toapprop);
}}
}});

Clazz.newMeth(C$, 'findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup',  function (name, calcId, autoCalc, seqRef, groupRef) {
if (this.annotations != null ) {
for (var annot, $annot = 0, $$annot = this.getAlignmentAnnotation$(); $annot<$$annot.length&&((annot=($$annot[$annot])),1);$annot++) {
if (annot.autoCalculated == autoCalc  && (name.equals$O(annot.label))  && (calcId == null  || annot.getCalcId$().equals$O(calcId) )  && annot.sequenceRef === seqRef   && annot.groupRef === groupRef  ) {
return annot;
}}
}var annot=Clazz.new_([name, name, Clazz.array($I$(18), [1]), 0.0, 0.0, 1],$I$(13,1).c$$S$S$jalview_datamodel_AnnotationA$F$F$I);
annot.hasText=false;
if (calcId != null ) {
annot.setCalcId$S( String.instantialize(calcId));
}annot.autoCalculated=autoCalc;
if (seqRef != null ) {
annot.setSequenceRef$jalview_datamodel_SequenceI(seqRef);
}annot.groupRef=groupRef;
this.addAnnotation$jalview_datamodel_AlignmentAnnotation(annot);
return annot;
});

Clazz.newMeth(C$, 'findAnnotation$S',  function (calcId) {
var alignmentAnnotation=this.getAlignmentAnnotation$();
if (alignmentAnnotation != null ) {
return $I$(13,"findAnnotation$java_util_List$S",[$I$(19,"asList$OA",[this.getAlignmentAnnotation$()]), calcId]);
}return $I$(19,"asList$OA",[Clazz.array($I$(13), -1, [])]);
});

Clazz.newMeth(C$, 'findAnnotations$jalview_datamodel_SequenceI$S$S',  function (seq, calcId, label) {
return $I$(13,"findAnnotations$Iterable$jalview_datamodel_SequenceI$S$S",[$I$(19,"asList$OA",[this.getAlignmentAnnotation$()]), seq, calcId, label]);
});

Clazz.newMeth(C$, 'moveSelectedSequencesByOne$jalview_datamodel_SequenceGroup$java_util_Map$Z',  function (sg, map, up) {
{
if (up) {
for (var i=1, iSize=this.sequences.size$(); i < iSize; i++) {
var seq=this.sequences.get$I(i);
if (!sg.getSequences$java_util_Map(map).contains$O(seq)) {
continue;
}var temp=this.sequences.get$I(i - 1);
if (sg.getSequences$java_util_Map(null).contains$O(temp)) {
continue;
}this.sequences.set$I$O(i, temp);
this.sequences.set$I$O(i - 1, seq);
}
} else {
for (var i=this.sequences.size$() - 2; i > -1; i--) {
var seq=this.sequences.get$I(i);
if (!sg.getSequences$java_util_Map(map).contains$O(seq)) {
continue;
}var temp=this.sequences.get$I(i + 1);
if (sg.getSequences$java_util_Map(map).contains$O(temp)) {
continue;
}this.sequences.set$I$O(i, temp);
this.sequences.set$I$O(i + 1, seq);
}
}}});

Clazz.newMeth(C$, 'validateAnnotation$jalview_datamodel_AlignmentAnnotation',  function (alignmentAnnotation) {
alignmentAnnotation.validateRangeAndDisplay$();
if (this.isNucleotide$() && alignmentAnnotation.isValidStruc$() ) {
this.hasRNAStructure=true;
}});

Clazz.newMeth(C$, 'getSeqrep$',  function () {
return this.seqrep;
});

Clazz.newMeth(C$, 'setSeqrep$jalview_datamodel_SequenceI',  function (seqrep) {
this.seqrep=seqrep;
});

Clazz.newMeth(C$, 'hasSeqrep$',  function () {
return this.seqrep != null ;
});

Clazz.newMeth(C$, 'getEndRes$',  function () {
return this.getWidth$() - 1;
});

Clazz.newMeth(C$, 'getStartRes$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getContext$',  function () {
return this.dataset;
});

Clazz.newMeth(C$, 'alignAs$jalview_datamodel_AlignmentI',  function (al) {
return this.alignAs$jalview_datamodel_AlignmentI$Z$Z(al, false, true);
});

Clazz.newMeth(C$, 'alignAs$jalview_datamodel_AlignmentI$Z$Z',  function (al, preserveMappedGaps, preserveUnmappedGaps) {
var thisIsNucleotide=this.isNucleotide$();
var thatIsProtein=!al.isNucleotide$();
if (!thatIsProtein && !thisIsNucleotide ) {
return $I$(11).alignProteinAsDna$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI(this, al);
} else if (thatIsProtein && thisIsNucleotide ) {
return $I$(11).alignCdsAsProtein$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI(this, al);
}return $I$(11).alignAs$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI(this, al);
});

Clazz.newMeth(C$, 'toString',  function () {
return Clazz.new_($I$(20,1)).print$jalview_datamodel_SequenceIA$Z(this.getSequencesArray$(), true);
});

Clazz.newMeth(C$, 'getSequenceNames$',  function () {
var names=Clazz.new_($I$(21,1));
for (var seq, $seq = this.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
names.add$O(seq.getName$());
}
return names;
});

Clazz.newMeth(C$, 'hasValidSequence$',  function () {
var hasValidSeq=false;
for (var seq, $seq = this.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
if ((seq.getEnd$() - seq.getStart$()) > 0) {
hasValidSeq=true;
break;
}}
return hasValidSeq;
});

Clazz.newMeth(C$, 'realiseMappings$java_util_List',  function (seqs) {
var count=0;
for (var seq, $seq = seqs.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
for (var mapping, $mapping = this.getCodonFrames$().iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
count+=mapping.realiseWith$jalview_datamodel_SequenceI(seq);
}
}
return count;
});

Clazz.newMeth(C$, 'getMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI',  function (mapFrom, mapTo) {
for (var acf, $acf = this.getCodonFrames$().iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
if (acf.getAaForDnaSeq$jalview_datamodel_SequenceI(mapFrom) === mapTo ) {
return acf;
}}
return null;
});

Clazz.newMeth(C$, 'setHiddenColumns$jalview_datamodel_HiddenColumns',  function (cols) {
var changed=cols == null  ? this.hiddenCols != null  : !cols.equals$O(this.hiddenCols);
this.hiddenCols=cols;
return changed;
});

Clazz.newMeth(C$, 'setupJPredAlignment$',  function () {
var repseq=this.getSequenceAt$I(0);
this.setSeqrep$jalview_datamodel_SequenceI(repseq);
var cs=Clazz.new_($I$(4,1));
cs.hideList$java_util_List(repseq.getInsertions$());
this.setHiddenColumns$jalview_datamodel_HiddenColumns(cs);
});

Clazz.newMeth(C$, 'propagateInsertions$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentView',  function (profileseq, input) {
var profsqpos=0;
var gc=this.getGapCharacter$();
var alandhidden=input.getAlignmentAndHiddenColumns$C(gc);
var nview=alandhidden[1];
var origseq=(alandhidden[0])[profsqpos];
return p$1.propagateInsertions$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_HiddenColumns.apply(this, [profileseq, origseq, nview]);
});

Clazz.newMeth(C$, 'propagateInsertions$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_HiddenColumns',  function (profileseq, origseq, hc) {
var gaps=origseq.gapBitset$();
hc.andNot$java_util_BitSet(gaps);
var newhidden=Clazz.new_($I$(4,1));
var numGapsBefore=0;
var gapPosition=0;
var it=hc.iterator$();
while (it.hasNext$()){
var region=it.next$();
while (gapPosition < region[0]){
++gapPosition;
if (gaps.get$I(gapPosition)) {
++numGapsBefore;
}}
var left=region[0] - numGapsBefore;
var right=region[1] - numGapsBefore;
newhidden.hideColumns$I$I(left, right);
p$1.padGaps$I$I$jalview_datamodel_SequenceI.apply(this, [left, right, profileseq]);
}
return newhidden;
}, p$1);

Clazz.newMeth(C$, 'padGaps$I$I$jalview_datamodel_SequenceI',  function (left, right, profileseq) {
var gc=this.getGapCharacter$();
var sb=Clazz.new_($I$(22,1));
for (var g=0; g < right - left + 1; g++) {
sb.append$C(gc);
}
for (var s=0, ns=this.getHeight$(); s < ns; s++) {
var sqobj=this.getSequenceAt$I(s);
if ((sqobj !== profileseq ) && (sqobj.getLength$() >= left) ) {
var sq=sqobj.getSequenceAsString$();
sqobj.setSequence$S(sq.substring$I$I(0, left) + sb.toString() + sq.substring$I(left) );
}}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
