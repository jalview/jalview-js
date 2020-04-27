(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'java.beans.PropertyChangeSupport','java.awt.Color','jalview.renderer.ResidueShader','java.util.ArrayList','jalview.datamodel.SequenceI','jalview.datamodel.AlignmentAnnotation','jalview.util.Comparison','jalview.analysis.AAFrequency','jalview.analysis.Conservation','jalview.datamodel.Annotation','StringBuffer','jalview.datamodel.Sequence','java.util.Arrays']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceGroup", null, null, 'jalview.datamodel.AnnotatedCollectionI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.changeSupport=Clazz.new_($I$(1,1).c$$O,[this]);
this.displayBoxes=true;
this.displayText=true;
this.colourText=false;
this.isDefined=false;
this.showNonconserved=false;
this.seqrep=null;
this.width=-1;
this.startRes=0;
this.endRes=0;
this.outlineColour=$I$(2).black;
this.idColour=null;
this.thresholdTextColour=0;
this.textColour=$I$(2).black;
this.textColour2=$I$(2).white;
this.ignoreGapsInConsensus=true;
this.showSequenceLogo=false;
this.hidereps=false;
this.hidecols=false;
this.consensus=null;
this.conservation=null;
this.consPercGaps=25;
this.consensusData=null;
},1);

C$.$fields$=[['Z',['displayBoxes','displayText','colourText','isDefined','showNonconserved','ignoreGapsInConsensus','showSequenceLogo','normaliseSequenceLogo','hidereps','hidecols','showConsensusHistogram'],'I',['width','startRes','endRes','thresholdTextColour','consPercGaps'],'S',['groupName','description'],'O',['changeSupport','java.beans.PropertyChangeSupport','conserve','jalview.analysis.Conservation','sequences','java.util.List','seqrep','jalview.datamodel.SequenceI','cs','jalview.renderer.ResidueShaderI','outlineColour','java.awt.Color','+idColour','+textColour','+textColour2','consensus','jalview.datamodel.AlignmentAnnotation','+conservation','context','jalview.datamodel.AnnotatedCollectionI','consensusData','jalview.datamodel.ProfilesI']]]

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.groupName="JGroup:" + this.hashCode$();
this.cs=Clazz.new_($I$(3,1));
this.sequences=Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$S$jalview_schemes_ColourSchemeI$Z$Z$Z$I$I', function (sequences, groupName, scheme, displayBoxes, displayText, colourText, start, end) {
C$.c$.apply(this, []);
this.sequences=sequences;
this.groupName=groupName;
this.displayBoxes=displayBoxes;
this.displayText=displayText;
this.colourText=colourText;
this.cs=Clazz.new_($I$(3,1).c$$jalview_schemes_ColourSchemeI,[scheme]);
this.startRes=start;
this.endRes=end;
this.recalcConservation$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceGroup', function (seqsel) {
C$.c$.apply(this, []);
if (seqsel != null ) {
this.sequences=Clazz.new_($I$(4,1));
this.sequences.addAll$java_util_Collection(seqsel.sequences);
if (seqsel.groupName != null ) {
this.groupName= String.instantialize(seqsel.groupName);
}this.displayBoxes=seqsel.displayBoxes;
this.displayText=seqsel.displayText;
this.colourText=seqsel.colourText;
this.startRes=seqsel.startRes;
this.endRes=seqsel.endRes;
this.cs=Clazz.new_($I$(3,1).c$$jalview_renderer_ResidueShader,[seqsel.cs]);
if (seqsel.description != null ) {
this.description= String.instantialize(seqsel.description);
}this.hidecols=seqsel.hidecols;
this.hidereps=seqsel.hidereps;
this.showNonconserved=seqsel.showNonconserved;
this.showSequenceLogo=seqsel.showSequenceLogo;
this.normaliseSequenceLogo=seqsel.normaliseSequenceLogo;
this.showConsensusHistogram=seqsel.showConsensusHistogram;
this.idColour=seqsel.idColour;
this.outlineColour=seqsel.outlineColour;
this.seqrep=seqsel.seqrep;
this.textColour=seqsel.textColour;
this.textColour2=seqsel.textColour2;
this.thresholdTextColour=seqsel.thresholdTextColour;
this.width=seqsel.width;
this.ignoreGapsInConsensus=seqsel.ignoreGapsInConsensus;
if (seqsel.conserve != null ) {
this.recalcConservation$();
}}}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (seqs) {
C$.c$.apply(this, []);
this.sequences.addAll$java_util_Collection(seqs);
}, 1);

Clazz.newMeth(C$, 'isShowSequenceLogo$', function () {
return this.showSequenceLogo;
});

Clazz.newMeth(C$, 'getSelectionAsNewSequences$jalview_datamodel_AlignmentI', function (align) {
var iSize=this.sequences.size$();
var seqs=Clazz.array($I$(5), [iSize]);
var inorder=this.getSequencesInOrder$jalview_datamodel_AlignmentI(align);
for (var i=0, ipos=0; i < inorder.length; i++) {
var seq=inorder[i];
var seqipos=seqs[ipos]=seq.getSubSequence$I$I(this.startRes, this.endRes + 1);
if (seqipos != null ) {
seqipos.setDescription$S(seq.getDescription$());
seqipos.setDBRefs$jalview_datamodel_Sequence_DBModList(seq.getDBRefs$());
seqipos.setSequenceFeatures$java_util_List(seq.getSequenceFeatures$());
if (seq.getDatasetSequence$() != null ) {
seqipos.setDatasetSequence$jalview_datamodel_SequenceI(seq.getDatasetSequence$());
}if (seq.getAnnotation$() != null ) {
var alann=align.getAlignmentAnnotation$();
for (var a=0; a < seq.getAnnotation$().length; a++) {
var tocopy=seq.getAnnotation$()[a];
if (alann != null ) {
var found=false;
for (var pos=0, np=alann.length; pos < np; pos++) {
if (alann[pos] === tocopy ) {
found=true;
break;
}}
if (!found) {
continue;
}}var newannot=Clazz.new_([seq.getAnnotation$()[a]],$I$(6,1).c$$jalview_datamodel_AlignmentAnnotation);
newannot.restrict$I$I(this.startRes, this.endRes);
newannot.setSequenceRef$jalview_datamodel_SequenceI(seqs[ipos]);
newannot.adjustForAlignment$();
seqipos.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(newannot);
}
}ipos++;
} else {
iSize--;
}}
if (iSize != inorder.length) {
var nseqs=Clazz.array($I$(5), [iSize]);
System.arraycopy$O$I$O$I$I(seqs, 0, nseqs, 0, iSize);
seqs=nseqs;
}return seqs;
});

Clazz.newMeth(C$, 'findEndRes$jalview_datamodel_SequenceI', function (seq) {
var eres=0;
var ch;
for (var j=0; j < this.endRes + 1 && j < seq.getLength$() ; j++) {
ch=seq.getCharAt$I(j);
if (!$I$(7,"isGap$C",[(ch)])) {
eres++;
}}
if (eres > 0) {
eres+=seq.getStart$() - 1;
}return eres;
});

Clazz.newMeth(C$, 'getSequences$', function () {
return this.sequences;
});

Clazz.newMeth(C$, 'getSequences$java_util_Map', function (hiddenReps) {
if (hiddenReps == null ) {
return this.sequences;
} else {
var allSequences=Clazz.new_($I$(4,1));
for (var seq, $seq = this.sequences.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
allSequences.add$O(seq);
if (hiddenReps.containsKey$O(seq)) {
var hsg=hiddenReps.get$O(seq);
for (var seq2, $seq2 = hsg.getSequences$().iterator$(); $seq2.hasNext$()&&((seq2=($seq2.next$())),1);) {
if (seq2 !== seq  && !allSequences.contains$O(seq2) ) {
allSequences.add$O(seq2);
}}
}}
return allSequences;
}});

Clazz.newMeth(C$, 'getSequencesAsArray$java_util_Map', function (map) {
var tmp=this.getSequences$java_util_Map(map);
if (tmp == null ) {
return null;
}return tmp.toArray$OA(Clazz.array($I$(5), [tmp.size$()]));
});

Clazz.newMeth(C$, 'adjustForRemoveLeft$I', function (col) {
if (this.startRes >= col) {
this.startRes=this.startRes - col;
}if (this.endRes >= col) {
this.endRes=this.endRes - col;
if (this.startRes > this.endRes) {
this.startRes=0;
}} else {
return false;
}return true;
});

Clazz.newMeth(C$, 'adjustForRemoveRight$I', function (col) {
if (this.startRes > col) {
return false;
}if (this.endRes >= col) {
this.endRes=col;
}return true;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.groupName;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.groupName=name;
});

Clazz.newMeth(C$, 'setDescription$S', function (desc) {
this.description=desc;
});

Clazz.newMeth(C$, 'getConservation$', function () {
return this.conserve;
});

Clazz.newMeth(C$, 'setConservation$jalview_analysis_Conservation', function (c) {
this.conserve=c;
});

Clazz.newMeth(C$, 'addSequence$jalview_datamodel_SequenceI$Z', function (s, recalc) {
{
if (s != null  && !this.sequences.contains$O(s) ) {
this.sequences.add$O(s);
this.changeSupport.firePropertyChange$S$I$I("Sequence group changed", this.sequences.size$() - 1, this.sequences.size$());
}if (recalc) {
this.recalcConservation$();
}}});

Clazz.newMeth(C$, 'getConsPercGaps$', function () {
return this.consPercGaps;
});

Clazz.newMeth(C$, 'setConsPercGaps$I', function (consPercGaps) {
this.consPercGaps=consPercGaps;
});

Clazz.newMeth(C$, 'recalcConservation$', function () {
return this.recalcConservation$Z(false);
});

Clazz.newMeth(C$, 'recalcConservation$Z', function (defer) {
if (this.cs == null  && this.consensus == null   && this.conservation == null  ) {
return false;
}var upd=false;
try {
var cnsns=$I$(8).calculate$java_util_List$I$I$Z(this.sequences, this.startRes, this.endRes + 1, this.showSequenceLogo);
if (this.consensus != null ) {
p$1._updateConsensusRow$jalview_datamodel_ProfilesI$J.apply(this, [cnsns, this.sequences.size$()]);
upd=true;
}if (this.cs != null ) {
this.cs.setConsensus$jalview_datamodel_ProfilesI(cnsns);
upd=true;
}if ((this.conservation != null ) || (this.cs != null  && this.cs.conservationApplied$() ) ) {
var c=Clazz.new_($I$(9,1).c$$S$java_util_List$I$I,[this.groupName, this.sequences, this.startRes, this.endRes + 1]);
c.calculate$();
c.verdict$Z$F(false, this.consPercGaps);
if (this.conservation != null ) {
p$1._updateConservationRow$jalview_analysis_Conservation.apply(this, [c]);
}if (this.cs != null ) {
if (this.cs.conservationApplied$()) {
this.cs.setConservation$jalview_analysis_Conservation(c);
}}upd=true;
}if (this.cs != null  && !defer ) {
this.cs.alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map(this.context != null  ? this.context : this, null);
return true;
} else {
return upd;
}} catch (err) {
if (Clazz.exceptionOf(err,"OutOfMemoryError")){
System.out.println$S("Out of memory loading groups: " + err);
} else {
throw err;
}
}
return upd;
});

Clazz.newMeth(C$, '_updateConservationRow$jalview_analysis_Conservation', function (c) {
if (this.conservation == null ) {
this.getConservation$();
}this.conservation.label="Conservation for " + this.getName$();
this.conservation.description="Conservation for group " + this.getName$() + " less than " + this.consPercGaps + "% gaps" ;
var aWidth=(this.conservation.annotations != null ) ? (this.endRes < this.conservation.annotations.length ? this.conservation.annotations.length : this.endRes + 1) : this.endRes + 1;
this.conservation.annotations=null;
this.conservation.annotations=Clazz.array($I$(10), [aWidth]);
c.completeAnnotations$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotation$I$I(this.conservation, null, this.startRes, this.endRes + 1);
}, p$1);

Clazz.newMeth(C$, '_updateConsensusRow$jalview_datamodel_ProfilesI$J', function (cnsns, nseq) {
if (this.consensus == null ) {
this.getConsensus$();
}this.consensus.label="Consensus for " + this.getName$();
this.consensus.description="Percent Identity";
this.consensusData=cnsns;
var aWidth=(this.consensus.annotations != null ) ? (this.endRes < this.consensus.annotations.length ? this.consensus.annotations.length : this.endRes + 1) : this.endRes + 1;
this.consensus.annotations=null;
this.consensus.annotations=Clazz.array($I$(10), [aWidth]);
$I$(8).completeConsensus$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_ProfilesI$I$I$Z$Z$J(this.consensus, cnsns, this.startRes, this.endRes + 1, this.ignoreGapsInConsensus, this.showSequenceLogo, nseq);
}, p$1);

Clazz.newMeth(C$, 'addOrRemove$jalview_datamodel_SequenceI$Z', function (s, recalc) {
{
if (this.sequences.contains$O(s)) {
this.deleteSequence$jalview_datamodel_SequenceI$Z(s, recalc);
} else {
this.addSequence$jalview_datamodel_SequenceI$Z(s, recalc);
}}});

Clazz.newMeth(C$, 'deleteSequence$jalview_datamodel_SequenceI$Z', function (s, recalc) {
{
this.sequences.remove$O(s);
this.changeSupport.firePropertyChange$S$I$I("Sequence group changed", this.sequences.size$() + 1, this.sequences.size$());
if (recalc) {
this.recalcConservation$();
}}});

Clazz.newMeth(C$, 'getStartRes$', function () {
return this.startRes;
});

Clazz.newMeth(C$, 'getEndRes$', function () {
return this.endRes;
});

Clazz.newMeth(C$, 'setStartRes$I', function (newStart) {
var before=this.startRes;
this.startRes=Math.max(0, newStart);
this.changeSupport.firePropertyChange$S$I$I("Sequence group changed", before, this.startRes);
});

Clazz.newMeth(C$, 'setEndRes$I', function (i) {
var before=this.endRes;
this.endRes=i;
this.changeSupport.firePropertyChange$S$I$I("Sequence group changed", before, this.endRes);
});

Clazz.newMeth(C$, 'getSize$', function () {
return this.sequences.size$();
});

Clazz.newMeth(C$, 'getSequenceAt$I', function (i) {
return this.sequences.get$I(i);
});

Clazz.newMeth(C$, 'setColourText$Z', function (state) {
this.colourText=state;
});

Clazz.newMeth(C$, 'getColourText$', function () {
return this.colourText;
});

Clazz.newMeth(C$, 'setDisplayText$Z', function (state) {
this.displayText=state;
});

Clazz.newMeth(C$, 'getDisplayText$', function () {
return this.displayText;
});

Clazz.newMeth(C$, 'setDisplayBoxes$Z', function (state) {
this.displayBoxes=state;
});

Clazz.newMeth(C$, 'getDisplayBoxes$', function () {
return this.displayBoxes;
});

Clazz.newMeth(C$, 'getWidth$', function () {
{
var first=true;
for (var seq, $seq = this.sequences.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
if (first || seq.getLength$() > this.width ) {
this.width=seq.getLength$();
first=false;
}}
return this.width;
}});

Clazz.newMeth(C$, 'setOutlineColour$java_awt_Color', function (c) {
this.outlineColour=c;
});

Clazz.newMeth(C$, 'getOutlineColour$', function () {
return this.outlineColour;
});

Clazz.newMeth(C$, 'getSequencesInOrder$jalview_datamodel_AlignmentI', function (al) {
return this.getSequencesInOrder$jalview_datamodel_AlignmentI$Z(al, true);
});

Clazz.newMeth(C$, 'getSequencesInOrder$jalview_datamodel_AlignmentI$Z', function (al, trim) {
{
var sSize=this.sequences.size$();
var alHeight=al.getHeight$();
var seqs=Clazz.array($I$(5), [(trim) ? sSize : alHeight]);
var index=0;
for (var i=0; i < alHeight && index < sSize ; i++) {
if (this.sequences.contains$O(al.getSequenceAt$I(i))) {
seqs[(trim) ? index : i]=al.getSequenceAt$I(i);
index++;
}}
if (index == 0) {
return null;
}if (!trim) {
return seqs;
}if (index < seqs.length) {
var dummy=seqs;
seqs=Clazz.array($I$(5), [index]);
while (--index >= 0){
seqs[index]=dummy[index];
dummy[index]=null;
}
}return seqs;
}});

Clazz.newMeth(C$, 'getIdColour$', function () {
return this.idColour;
});

Clazz.newMeth(C$, 'setIdColour$java_awt_Color', function (idColour) {
this.idColour=idColour;
});

Clazz.newMeth(C$, 'getSeqrep$', function () {
return this.seqrep;
});

Clazz.newMeth(C$, 'setSeqrep$jalview_datamodel_SequenceI', function (seqrep) {
this.seqrep=seqrep;
});

Clazz.newMeth(C$, 'hasSeqrep$', function () {
return this.seqrep != null ;
});

Clazz.newMeth(C$, 'setHidereps$Z', function (visibility) {
this.hidereps=visibility;
});

Clazz.newMeth(C$, 'isHidereps$', function () {
return this.hidereps;
});

Clazz.newMeth(C$, 'setHideCols$Z', function (visibility) {
this.hidecols=visibility;
});

Clazz.newMeth(C$, 'isHideCols$', function () {
return this.hidecols;
});

Clazz.newMeth(C$, 'intersect$jalview_datamodel_AlignmentI$java_util_Map', function (alignment, map) {
var sgroup=Clazz.new_(C$.c$$jalview_datamodel_SequenceGroup,[this]);
var insect=this.getSequencesInOrder$jalview_datamodel_AlignmentI(alignment);
sgroup.sequences=Clazz.new_($I$(4,1));
for (var s=0; insect != null  && s < insect.length ; s++) {
if (map == null  || map.containsKey$O(insect[s]) ) {
sgroup.sequences.add$O(insect[s]);
}}
return sgroup;
});

Clazz.newMeth(C$, 'getShowNonconserved$', function () {
return this.showNonconserved;
});

Clazz.newMeth(C$, 'setShowNonconserved$Z', function (displayNonconserved) {
this.showNonconserved=displayNonconserved;
});

Clazz.newMeth(C$, 'setConsensus$jalview_datamodel_AlignmentAnnotation', function (aan) {
if (this.consensus == null ) {
this.consensus=aan;
}});

Clazz.newMeth(C$, 'getConsensus$', function () {
var aWidth=this.getWidth$();
if (aWidth < 0) {
return null;
}if (this.consensus == null ) {
this.consensus=Clazz.new_(["", "", Clazz.array($I$(10), [1]), 0.0, 100.0, 1],$I$(6,1).c$$S$S$jalview_datamodel_AnnotationA$F$F$I);
this.consensus.hasText=true;
this.consensus.autoCalculated=true;
this.consensus.groupRef=this;
this.consensus.label="Consensus for " + this.getName$();
this.consensus.description="Percent Identity";
}return this.consensus;
});

Clazz.newMeth(C$, 'setConservationRow$jalview_datamodel_AlignmentAnnotation', function (aan) {
if (this.conservation == null ) {
this.conservation=aan;
}});

Clazz.newMeth(C$, 'getConservationRow$', function () {
if (this.conservation == null ) {
this.conservation=Clazz.new_(["", "", Clazz.array($I$(10), [1]), 0.0, 11.0, 1],$I$(6,1).c$$S$S$jalview_datamodel_AnnotationA$F$F$I);
}this.conservation.hasText=true;
this.conservation.autoCalculated=true;
this.conservation.groupRef=this;
this.conservation.label="Conservation for " + this.getName$();
this.conservation.description="Conservation for group " + this.getName$() + " less than " + this.consPercGaps + "% gaps" ;
return this.conservation;
});

Clazz.newMeth(C$, 'hasAnnotationRows$', function () {
return this.consensus != null  || this.conservation != null  ;
});

Clazz.newMeth(C$, 'getConsensusSeq$', function () {
this.getConsensus$();
var seqs=Clazz.new_($I$(11,1));
for (var i=0; i < this.consensus.annotations.length; i++) {
if (this.consensus.annotations[i] != null ) {
var desc=this.consensus.annotations[i].description;
if (desc.length$() > 1 && desc.charAt$I(0) == "[" ) {
seqs.append$C(desc.charAt$I(1));
} else {
seqs.append$S(this.consensus.annotations[i].displayCharacter);
}}}
var sq=Clazz.new_(["Group" + this.getName$() + " Consensus" , seqs.toString()],$I$(12,1).c$$S$S);
sq.setDescription$S("Percentage Identity Consensus " + ((this.ignoreGapsInConsensus) ? " without gaps" : ""));
return sq;
});

Clazz.newMeth(C$, 'setIgnoreGapsConsensus$Z', function (state) {
if (this.ignoreGapsInConsensus != state  && this.consensus != null  ) {
this.ignoreGapsInConsensus=state;
this.recalcConservation$();
}this.ignoreGapsInConsensus=state;
});

Clazz.newMeth(C$, 'getIgnoreGapsConsensus$', function () {
return this.ignoreGapsInConsensus;
});

Clazz.newMeth(C$, 'setshowSequenceLogo$Z', function (showSequenceLogo) {
if (this.showSequenceLogo != showSequenceLogo  && this.consensus != null  ) {
this.showSequenceLogo=showSequenceLogo;
this.recalcConservation$();
}this.showSequenceLogo=showSequenceLogo;
});

Clazz.newMeth(C$, 'setShowConsensusHistogram$Z', function (showConsHist) {
if (this.showConsensusHistogram != showConsHist  && this.consensus != null  ) {
this.showConsensusHistogram=showConsHist;
this.recalcConservation$();
}this.showConsensusHistogram=showConsHist;
});

Clazz.newMeth(C$, 'isShowConsensusHistogram$', function () {
return this.showConsensusHistogram;
});

Clazz.newMeth(C$, 'setNormaliseSequenceLogo$Z', function (norm) {
this.normaliseSequenceLogo=norm;
});

Clazz.newMeth(C$, 'isNormaliseSequenceLogo$', function () {
return this.normaliseSequenceLogo;
});

Clazz.newMeth(C$, 'getAlignmentAnnotation$', function () {
var annot=Clazz.new_($I$(4,1));
{
for (var seq, $seq = this.sequences.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
var aa=seq.getAnnotation$();
if (aa != null ) {
for (var al, $al = 0, $$al = aa; $al<$$al.length&&((al=($$al[$al])),1);$al++) {
if (al.groupRef === this ) {
annot.add$O(al);
}}
}}
if (this.consensus != null ) {
annot.add$O(this.consensus);
}if (this.conservation != null ) {
annot.add$O(this.conservation);
}}return annot.toArray$OA(Clazz.array($I$(6), [0]));
});

Clazz.newMeth(C$, 'findAnnotation$S', function (calcId) {
return $I$(6,"findAnnotation$java_util_List$S",[$I$(13,"asList$OA",[this.getAlignmentAnnotation$()]), calcId]);
});

Clazz.newMeth(C$, 'findAnnotations$jalview_datamodel_SequenceI$S$S', function (seq, calcId, label) {
return $I$(6,"findAnnotations$Iterable$jalview_datamodel_SequenceI$S$S",[$I$(13,"asList$OA",[this.getAlignmentAnnotation$()]), seq, calcId, label]);
});

Clazz.newMeth(C$, 'hasAnnotation$S', function (calcId) {
return $I$(6,"hasAnnotation$java_util_List$S",[$I$(13,"asList$OA",[this.getAlignmentAnnotation$()]), calcId]);
});

Clazz.newMeth(C$, 'clear$', function () {
{
var before=this.sequences.size$();
this.sequences.clear$();
this.changeSupport.firePropertyChange$S$I$I("Sequence group changed", before, this.sequences.size$());
}});

Clazz.newMeth(C$, 'setContext$jalview_datamodel_AnnotatedCollectionI$Z', function (ctx, defined) {
this.setContext$jalview_datamodel_AnnotatedCollectionI(ctx);
this.isDefined=defined;
});

Clazz.newMeth(C$, 'setContext$jalview_datamodel_AnnotatedCollectionI', function (ctx) {
var ref=ctx;
while (ref != null ){
if (ref === this  || ref.getContext$() === ctx  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Circular reference in SequenceGroup.context"]);
}ref=ref.getContext$();
}
this.context=ctx;
});

Clazz.newMeth(C$, 'getContext$', function () {
return this.context;
});

Clazz.newMeth(C$, 'isDefined$', function () {
return this.isDefined;
});

Clazz.newMeth(C$, 'setColourScheme$jalview_schemes_ColourSchemeI', function (scheme) {
if (this.cs == null ) {
this.cs=Clazz.new_($I$(3,1));
}this.cs.setColourScheme$jalview_schemes_ColourSchemeI(scheme);
});

Clazz.newMeth(C$, 'setGroupColourScheme$jalview_renderer_ResidueShaderI', function (scheme) {
this.cs=scheme;
});

Clazz.newMeth(C$, 'getColourScheme$', function () {
return this.cs == null  ? null : this.cs.getColourScheme$();
});

Clazz.newMeth(C$, 'getGroupColourScheme$', function () {
return this.cs;
});

Clazz.newMeth(C$, 'isNucleotide$', function () {
if (this.context != null ) {
return this.context.isNucleotide$();
}return false;
});

Clazz.newMeth(C$, 'contains$jalview_datamodel_SequenceI', function (seq1) {
return this.sequences.contains$O(seq1);
});

Clazz.newMeth(C$, 'contains$jalview_datamodel_SequenceI$I', function (seq, apos) {
return (this.startRes <= apos && this.endRes >= apos ) && this.sequences.contains$O(seq) ;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
