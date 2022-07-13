(function(){var P$=Clazz.newPackage("jalview.commands"),I$=[[0,['jalview.commands.EditCommand','.Action'],'java.util.ArrayList',['jalview.commands.EditCommand','.Edit'],'jalview.datamodel.SequenceI','StringBuilder','jalview.util.Comparison','jalview.analysis.AlignSeq','jalview.datamodel.Sequence','jalview.datamodel.Range','java.util.Locale','Error','java.util.Hashtable','jalview.datamodel.AlignmentAnnotation','jalview.datamodel.Annotation','jalview.datamodel.SequenceFeature','java.util.HashMap','jalview.util.ReverseListIterator','jalview.util.StringUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EditCommand", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'jalview.commands.CommandI');
C$.$classes$=[['Action',1033],['Edit',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.edits=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['S',['description'],'O',['edits','java.util.List']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (desc) {
;C$.$init$.apply(this);
this.description=desc;
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI',  function (desc, command, seqs, position, number, al) {
;C$.$init$.apply(this);
this.description=desc;
if (command === $I$(1).CUT  || command === $I$(1).PASTE  ) {
this.setEdit$jalview_commands_EditCommand_Edit(Clazz.new_($I$(3,1).c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI,[this, null, command, seqs, position, number, al]));
}this.performEdit$I$jalview_datamodel_AlignmentIA(0, null);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_commands_EditCommand_Action$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI',  function (desc, command, replace, seqs, position, number, al) {
;C$.$init$.apply(this);
this.description=desc;
if (command === $I$(1).REPLACE ) {
this.setEdit$jalview_commands_EditCommand_Edit(Clazz.new_($I$(3,1).c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$S,[this, null, command, seqs, position, number, al, replace]));
}this.performEdit$I$jalview_datamodel_AlignmentIA(0, null);
}, 1);

Clazz.newMeth(C$, 'setEdit$jalview_commands_EditCommand_Edit',  function (e) {
this.edits.clear$();
this.edits.add$O(e);
});

Clazz.newMeth(C$, 'addEdit$jalview_commands_EditCommand_Edit',  function (e) {
if (!C$.expandEdit$java_util_List$jalview_commands_EditCommand_Edit(this.edits, e)) {
this.edits.add$O(e);
}});

Clazz.newMeth(C$, 'expandEdit$java_util_List$jalview_commands_EditCommand_Edit',  function (edits, e) {
if (edits == null  || edits.isEmpty$() ) {
return false;
}var lastEdit=edits.get$I(edits.size$() - 1);
var action=e.command;
if (lastEdit.command !== action ) {
return false;
}if (lastEdit.seqs.length != e.seqs.length) {
return false;
}for (var i=0; i < e.seqs.length; i++) {
if (lastEdit.seqs[i].getDatasetSequence$() !== e.seqs[i].getDatasetSequence$() ) {
return false;
}}
var contiguous=(action === $I$(1).INSERT_GAP  && e.position == lastEdit.position + lastEdit.number ) || (action === $I$(1).DELETE_GAP  && e.position + e.number == lastEdit.position ) ;
if (contiguous) {
lastEdit.number+=e.number;
lastEdit.seqs=e.seqs;
if (action === $I$(1).DELETE_GAP ) {
--lastEdit.position;
}return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'clearEdits$',  function () {
this.edits.clear$();
});

Clazz.newMeth(C$, 'getEdit$I',  function (i) {
if (i >= 0 && i < this.edits.size$() ) {
return this.edits.get$I(i);
}return null;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'getSize$',  function () {
return this.edits.size$();
});

Clazz.newMeth(C$, 'getAlignment$',  function () {
return (this.edits.isEmpty$() ? null : this.edits.get$I(0).al);
});

Clazz.newMeth(C$, 'appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z',  function (command, seqs, position, number, al, performEdit) {
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentIA(command, seqs, position, number, al, performEdit, null);
});

Clazz.newMeth(C$, 'appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentIA',  function (command, seqs, position, number, al, performEdit, views) {
var edit=Clazz.new_($I$(3,1).c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI,[this, null, command, seqs, position, number, al]);
this.appendEdit$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentIA(edit, al, performEdit, views);
});

Clazz.newMeth(C$, 'appendEdit$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentIA',  function (edit, al, performEdit, views) {
if (al.getHeight$() == edit.seqs.length) {
edit.al=al;
edit.fullAlignmentHeight=true;
}this.addEdit$jalview_commands_EditCommand_Edit(edit);
if (performEdit) {
C$.performEdit$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentIA(edit, views);
}});

Clazz.newMeth(C$, 'performEdit$I$jalview_datamodel_AlignmentIA',  function (commandIndex, views) {
var iterator=this.edits.listIterator$I(commandIndex);
while (iterator.hasNext$()){
var edit=iterator.next$();
C$.performEdit$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentIA(edit, views);
}
});

Clazz.newMeth(C$, 'performEdit$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentIA',  function (edit, views) {
switch (edit.command) {
case $I$(1).INSERT_GAP:
C$.insertGap$jalview_commands_EditCommand_Edit(edit);
break;
case $I$(1).DELETE_GAP:
C$.deleteGap$jalview_commands_EditCommand_Edit(edit);
break;
case $I$(1).CUT:
C$.cut$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentIA(edit, views);
break;
case $I$(1).PASTE:
C$.paste$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentIA(edit, views);
break;
case $I$(1).REPLACE:
C$.replace$jalview_commands_EditCommand_Edit(edit);
break;
case $I$(1).INSERT_NUC:
break;
default:
break;
}
}, 1);

Clazz.newMeth(C$, 'doCommand$jalview_datamodel_AlignmentIA',  function (views) {
this.performEdit$I$jalview_datamodel_AlignmentIA(0, views);
});

Clazz.newMeth(C$, 'undoCommand$jalview_datamodel_AlignmentIA',  function (views) {
var iterator=this.edits.listIterator$I(this.edits.size$());
while (iterator.hasPrevious$()){
var e=iterator.previous$();
switch (e.command) {
case $I$(1).INSERT_GAP:
C$.deleteGap$jalview_commands_EditCommand_Edit(e);
break;
case $I$(1).DELETE_GAP:
C$.insertGap$jalview_commands_EditCommand_Edit(e);
break;
case $I$(1).CUT:
C$.paste$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentIA(e, views);
break;
case $I$(1).PASTE:
C$.cut$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentIA(e, views);
break;
case $I$(1).REPLACE:
C$.replace$jalview_commands_EditCommand_Edit(e);
break;
case $I$(1).INSERT_NUC:
break;
default:
break;
}
}
});

Clazz.newMeth(C$, 'insertGap$jalview_commands_EditCommand_Edit',  function (command) {
for (var s=0; s < command.seqs.length; s++) {
command.seqs[s].insertCharAt$I$I$C(command.position, command.number, command.gapChar);
}
C$.adjustAnnotations$jalview_commands_EditCommand_Edit$Z$Z$jalview_datamodel_AlignmentIA(command, true, false, null);
}, 1);

Clazz.newMeth(C$, 'deleteGap$jalview_commands_EditCommand_Edit',  function (command) {
for (var s=0; s < command.seqs.length; s++) {
command.seqs[s].deleteChars$I$I(command.position, command.position + command.number);
}
C$.adjustAnnotations$jalview_commands_EditCommand_Edit$Z$Z$jalview_datamodel_AlignmentIA(command, false, false, null);
}, 1);

Clazz.newMeth(C$, 'cut$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentIA',  function (command, views) {
var seqDeleted=false;
command.string=Clazz.array(Character.TYPE, [command.seqs.length, null]);
for (var i=0; i < command.seqs.length; i++) {
var sequence=command.seqs[i];
if (sequence.getLength$() > command.position) {
command.string[i]=sequence.getSequence$I$I(command.position, command.position + command.number);
var oldds=sequence.getDatasetSequence$();
var cutPositions=sequence.findPositions$I$I(command.position + 1, command.position + command.number);
var cutIsInternal=cutPositions != null  && sequence.getStart$() != cutPositions.getBegin$()  && sequence.getEnd$() != cutPositions.getEnd$() ;
var ds=sequence.getDatasetSequence$();
sequence.deleteChars$I$I(command.position, command.position + command.number);
if (command.oldds != null  && command.oldds[i] != null  ) {
sequence.setDatasetSequence$jalview_datamodel_SequenceI(command.oldds[i]);
command.oldds[i]=oldds;
} else {
if (command.oldds == null ) {
command.oldds=Clazz.array($I$(4), [command.seqs.length]);
}command.oldds[i]=oldds;
if (oldds !== sequence.getDatasetSequence$()  || (cutIsInternal && sequence.getFeatures$().hasFeatures$() ) ) {
if (cutPositions != null ) {
C$.cutFeatures$jalview_commands_EditCommand_Edit$jalview_datamodel_SequenceI$I$I$Z(command, sequence, cutPositions.getBegin$(), cutPositions.getEnd$(), cutIsInternal);
}}}var newDs=sequence.getDatasetSequence$();
if (newDs !== ds  && command.al != null   && command.al.getDataset$() != null   && !command.al.getDataset$().getSequences$().contains$O(newDs) ) {
command.al.getDataset$().addSequence$jalview_datamodel_SequenceI(newDs);
}}if (sequence.getLength$() < 1) {
command.al.deleteSequence$jalview_datamodel_SequenceI(sequence);
seqDeleted=true;
}}
C$.adjustAnnotations$jalview_commands_EditCommand_Edit$Z$Z$jalview_datamodel_AlignmentIA(command, false, seqDeleted, views);
}, 1);

Clazz.newMeth(C$, 'paste$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentIA',  function (command, views) {
var seqWasDeleted=false;
for (var i=0; i < command.seqs.length; i++) {
var newDSNeeded=false;
var newDSWasNeeded=command.oldds != null  && command.oldds[i] != null  ;
var sequence=command.seqs[i];
if (sequence.getLength$() < 1) {
if (command.alIndex[i] < command.al.getHeight$()) {
var sequences=command.al.getSequences$();
{
if (!(command.alIndex[i] < 0)) {
sequences.add$I$O(command.alIndex[i], sequence);
}}} else {
command.al.addSequence$jalview_datamodel_SequenceI(sequence);
}seqWasDeleted=true;
}var newStart=sequence.getStart$();
var newEnd=sequence.getEnd$();
var tmp=Clazz.new_($I$(5,1));
tmp.append$CA(sequence.getSequence$());
var start=0;
var length=0;
if (command.string != null  && command.string[i] != null  ) {
if (command.position >= tmp.length$()) {
var len=command.position - tmp.length$();
while (len > 0){
tmp.append$C(command.gapChar);
--len;
}
}tmp.insert$I$CA(command.position, command.string[i]);
for (var s=0; s < command.string[i].length; s++) {
if (!$I$(6).isGap$C(command.string[i][s])) {
++length;
if (!newDSNeeded) {
newDSNeeded=true;
start=sequence.findPosition$I(command.position);
}if (sequence.getStart$() == start) {
--newStart;
} else {
++newEnd;
}}}
command.string[i]=null;
}sequence.setSequence$S(tmp.toString());
sequence.setStart$I(newStart);
sequence.setEnd$I(newEnd);
var sameDatasetSequence=false;
if (newDSNeeded) {
if (sequence.getDatasetSequence$() != null ) {
var ds;
if (newDSWasNeeded) {
ds=command.oldds[i];
} else {
var ungapped=$I$(7,"extractGaps$S$S",[$I$(6).GapChars, sequence.getSequenceAsString$()]);
ds=Clazz.new_([sequence.getName$(), ungapped, sequence.getStart$(), sequence.getEnd$()],$I$(8,1).c$$S$S$I$I);
ds.setDescription$S(sequence.getDescription$());
}if (command.oldds == null ) {
command.oldds=Clazz.array($I$(4), [command.seqs.length]);
}command.oldds[i]=sequence.getDatasetSequence$();
sameDatasetSequence=ds === sequence.getDatasetSequence$() ;
ds.setSequenceFeatures$java_util_List(sequence.getSequenceFeatures$());
if (!sameDatasetSequence && command.al.getDataset$() != null  ) {
command.al.getDataset$().deleteSequence$jalview_datamodel_SequenceI(sequence.getDatasetSequence$());
}sequence.setDatasetSequence$jalview_datamodel_SequenceI(ds);
}C$.undoCutFeatures$jalview_commands_EditCommand_Edit$jalview_datamodel_SequenceI$I$I$Z(command, command.seqs[i], start, length, sameDatasetSequence);
}}
C$.adjustAnnotations$jalview_commands_EditCommand_Edit$Z$Z$jalview_datamodel_AlignmentIA(command, true, seqWasDeleted, views);
command.string=null;
}, 1);

Clazz.newMeth(C$, 'replace$jalview_commands_EditCommand_Edit',  function (command) {
var tmp;
var oldstring;
var start=command.position;
var end=command.number;
command.number=start + command.string[0].length;
for (var i=0; i < command.seqs.length; i++) {
var newDSWasNeeded=command.oldds != null  && command.oldds[i] != null  ;
var newStartEndWasNeeded=command.oldStartEnd != null  && command.oldStartEnd[i] != null  ;
var beforeEditedPositions=command.seqs[i].findPositions$I$I(1, start);
var afterEditedPositions=command.seqs[i].findPositions$I$I(end + 1, command.seqs[i].getLength$());
oldstring=command.seqs[i].getSequenceAsString$();
tmp=Clazz.new_([oldstring.substring$I$I(0, start)],$I$(5,1).c$$S);
tmp.append$CA(command.string[i]);
var nogaprep=$I$(7,"extractGaps$S$S",[$I$(6).GapChars,  String.instantialize(command.string[i])]);
if (end < oldstring.length$()) {
tmp.append$S(oldstring.substring$I(end));
}var oldstartend=Clazz.new_([command.seqs[i].getStart$(), command.seqs[i].getEnd$()],$I$(9,1).c$$I$I);
command.seqs[i].setSequence$S(tmp.toString());
command.string[i]=oldstring.substring$I$I(start, Math.min(end, oldstring.length$())).toCharArray$();
var nogapold=$I$(7,"extractGaps$S$S",[$I$(6).GapChars,  String.instantialize(command.string[i])]);
if (!nogaprep.toLowerCase$java_util_Locale($I$(10).ROOT).equals$O(nogapold.toLowerCase$java_util_Locale($I$(10).ROOT))) {
if (newDSWasNeeded || newStartEndWasNeeded ) {
if (newDSWasNeeded) {
var oldds=command.seqs[i].getDatasetSequence$();
command.seqs[i].setDatasetSequence$jalview_datamodel_SequenceI(command.oldds[i]);
command.oldds[i]=oldds;
}if (newStartEndWasNeeded) {
var newStart=command.oldStartEnd[i];
command.oldStartEnd[i]=oldstartend;
command.seqs[i].setStart$I(newStart.getBegin$());
command.seqs[i].setEnd$I(newStart.getEnd$());
}} else {
var oldds=command.seqs[i].getDatasetSequence$();
var osp=oldds.getSequenceAsString$();
var beforeStartOfEdit=-oldds.getStart$() + 1 + (beforeEditedPositions == null  ? ((afterEditedPositions != null ) ? afterEditedPositions.getBegin$() - 1 : oldstartend.getBegin$() + nogapold.length$()) : beforeEditedPositions.getEnd$()) ;
var afterEndOfEdit=-oldds.getStart$() + 1 + ((afterEditedPositions == null ) ? oldstartend.getEnd$() : afterEditedPositions.getBegin$() - 1) ;
var fullseq=osp.substring$I$I(0, beforeStartOfEdit) + nogaprep + osp.substring$I(afterEndOfEdit) ;
if (!fullseq.equalsIgnoreCase$S(osp)) {
var newds=Clazz.new_($I$(8,1).c$$jalview_datamodel_SequenceI,[oldds]);
newds.setSequence$S(fullseq.toUpperCase$java_util_Locale($I$(10).ROOT));
if (command.oldds == null ) {
command.oldds=Clazz.array($I$(4), [command.seqs.length]);
}command.oldds[i]=command.seqs[i].getDatasetSequence$();
if (command.oldStartEnd == null ) {
command.oldStartEnd=Clazz.array($I$(9), [command.seqs.length]);
}command.oldStartEnd[i]=oldstartend;
command.seqs[i].setDatasetSequence$jalview_datamodel_SequenceI(newds);
} else {
if (command.oldStartEnd == null ) {
command.oldStartEnd=Clazz.array($I$(9), [command.seqs.length]);
}command.oldStartEnd[i]=Clazz.new_([command.seqs[i].getStart$(), command.seqs[i].getEnd$()],$I$(9,1).c$$I$I);
if (beforeEditedPositions != null  && afterEditedPositions == null  ) {
command.seqs[i].setEnd$I(beforeEditedPositions.getEnd$() + nogaprep.length$() - nogapold.length$());
} else if (afterEditedPositions != null  && beforeEditedPositions == null  ) {
command.seqs[i].setStart$I(afterEditedPositions.getBegin$() - nogaprep.length$());
} else {
var nogapalseq=$I$(7,"extractGaps$S$S",[$I$(6).GapChars, command.seqs[i].getSequenceAsString$().toUpperCase$java_util_Locale($I$(10).ROOT)]);
var newStart=command.seqs[i].getDatasetSequence$().getSequenceAsString$().indexOf$S(nogapalseq);
if (newStart == -1) {
throw Clazz.new_($I$(11,1).c$$S,["Implementation Error: could not locate start/end in dataset sequence after an edit of the sequence string"]);
}var newEnd=newStart + nogapalseq.length$() - 1;
command.seqs[i].setStart$I(newStart);
command.seqs[i].setEnd$I(newEnd);
}}}}tmp=null;
oldstring=null;
}
}, 1);

Clazz.newMeth(C$, 'adjustAnnotations$jalview_commands_EditCommand_Edit$Z$Z$jalview_datamodel_AlignmentIA',  function (command, insert, modifyVisibility, views) {
var annotations=null;
if (modifyVisibility && !insert ) {
command.deletedAnnotationRows=Clazz.new_($I$(12,1));
}if (command.fullAlignmentHeight) {
annotations=command.al.getAlignmentAnnotation$();
} else {
var aSize=0;
var tmp;
for (var s=0; s < command.seqs.length; s++) {
command.seqs[s].sequenceChanged$();
if (modifyVisibility) {
if (!insert) {
tmp=command.seqs[s].getAnnotation$();
if (tmp != null ) {
var alen=tmp.length;
for (var aa=0; aa < tmp.length; aa++) {
if (!command.al.deleteAnnotation$jalview_datamodel_AlignmentAnnotation(tmp[aa])) {
tmp[aa]=null;
--alen;
}}
command.seqs[s].setAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA(null);
if (alen != tmp.length) {
var saved=Clazz.array($I$(13), [alen]);
for (var aa=0, aapos=0; aa < tmp.length; aa++) {
if (tmp[aa] != null ) {
saved[aapos++]=tmp[aa];
tmp[aa]=null;
}}
tmp=saved;
command.deletedAnnotationRows.put$O$O(command.seqs[s], saved);
for (var alview=0; views != null  && alview < views.length ; alview++) {
if (views[alview] !== command.al ) {
var toremove=views[alview].getAlignmentAnnotation$();
if (toremove == null  || toremove.length == 0 ) {
continue;
}for (var aa=0; aa < toremove.length; aa++) {
if (toremove[aa].sequenceRef === command.seqs[s] ) {
views[alview].deleteAnnotation$jalview_datamodel_AlignmentAnnotation(toremove[aa]);
}}
}}
} else {
command.deletedAnnotationRows.put$O$O(command.seqs[s], tmp);
}}} else {
if (command.deletedAnnotationRows != null  && command.deletedAnnotationRows.containsKey$O(command.seqs[s]) ) {
var revealed=command.deletedAnnotationRows.get$O(command.seqs[s]);
command.seqs[s].setAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA(revealed);
if (revealed != null ) {
for (var aa=0; aa < revealed.length; aa++) {
command.al.addAnnotation$jalview_datamodel_AlignmentAnnotation(revealed[aa]);
}
for (var aa=0; aa < revealed.length; aa++) {
command.al.setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I(revealed[aa], aa);
}
for (var vnum=0; views != null  && vnum < views.length ; vnum++) {
if (views[vnum] !== command.al ) {
var avwidth=views[vnum].getWidth$() + 1;
for (var a=0; a < revealed.length; a++) {
var newann=Clazz.new_($I$(13,1).c$$jalview_datamodel_AlignmentAnnotation,[revealed[a]]);
command.seqs[s].addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(newann);
newann.padAnnotation$I(avwidth);
views[vnum].addAnnotation$jalview_datamodel_AlignmentAnnotation(newann);
views[vnum].setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I(newann, a);
}
}}
}}}continue;
}if (command.seqs[s].getAnnotation$() == null ) {
continue;
}if (aSize == 0) {
annotations=command.seqs[s].getAnnotation$();
} else {
tmp=Clazz.array($I$(13), [aSize + command.seqs[s].getAnnotation$().length]);
System.arraycopy$O$I$O$I$I(annotations, 0, tmp, 0, aSize);
System.arraycopy$O$I$O$I$I(command.seqs[s].getAnnotation$(), 0, tmp, aSize, command.seqs[s].getAnnotation$().length);
annotations=tmp;
}aSize=annotations.length;
}
}if (annotations == null ) {
return;
}if (!insert) {
command.deletedAnnotations=Clazz.new_($I$(12,1));
}var aSize;
var temp;
for (var a=0; a < annotations.length; a++) {
if (annotations[a].autoCalculated || annotations[a].annotations == null  ) {
continue;
}var tSize=0;
aSize=annotations[a].annotations.length;
if (insert) {
temp=Clazz.array($I$(14), [aSize + command.number]);
if (annotations[a].padGaps) {
for (var aa=0; aa < temp.length; aa++) {
temp[aa]=Clazz.new_($I$(14,1).c$$S$S$C$F,[command.gapChar + "", null, " ", 0]);
}
}} else {
if (command.position < aSize) {
if (command.position + command.number >= aSize) {
tSize=aSize;
} else {
tSize=aSize - command.number;
}} else {
tSize=aSize;
}if (tSize < 0) {
tSize=aSize;
}temp=Clazz.array($I$(14), [tSize]);
}if (insert) {
if (command.position < annotations[a].annotations.length) {
System.arraycopy$O$I$O$I$I(annotations[a].annotations, 0, temp, 0, command.position);
if (command.deletedAnnotations != null  && command.deletedAnnotations.containsKey$O(annotations[a].annotationId) ) {
var restore=command.deletedAnnotations.get$O(annotations[a].annotationId);
System.arraycopy$O$I$O$I$I(restore, 0, temp, command.position, command.number);
}System.arraycopy$O$I$O$I$I(annotations[a].annotations, command.position, temp, command.position + command.number, aSize - command.position);
} else {
if (command.deletedAnnotations != null  && command.deletedAnnotations.containsKey$O(annotations[a].annotationId) ) {
var restore=command.deletedAnnotations.get$O(annotations[a].annotationId);
temp=Clazz.array($I$(14), [annotations[a].annotations.length + restore.length]);
System.arraycopy$O$I$O$I$I(annotations[a].annotations, 0, temp, 0, annotations[a].annotations.length);
System.arraycopy$O$I$O$I$I(restore, 0, temp, annotations[a].annotations.length, restore.length);
} else {
temp=annotations[a].annotations;
}}} else {
if (tSize != aSize || command.position < 2 ) {
var copylen=Math.min(command.position, annotations[a].annotations.length);
if (copylen > 0) {
System.arraycopy$O$I$O$I$I(annotations[a].annotations, 0, temp, 0, copylen);
}var deleted=Clazz.array($I$(14), [command.number]);
if (copylen >= command.position) {
copylen=Math.min(command.number, annotations[a].annotations.length - command.position);
if (copylen > 0) {
System.arraycopy$O$I$O$I$I(annotations[a].annotations, command.position, deleted, 0, copylen);
}}command.deletedAnnotations.put$O$O(annotations[a].annotationId, deleted);
if (annotations[a].annotations.length > command.position + command.number) {
System.arraycopy$O$I$O$I$I(annotations[a].annotations, command.position + command.number, temp, command.position, annotations[a].annotations.length - command.position - command.number );
}} else {
var dSize=aSize - command.position;
if (dSize > 0) {
var deleted=Clazz.array($I$(14), [command.number]);
System.arraycopy$O$I$O$I$I(annotations[a].annotations, command.position, deleted, 0, dSize);
command.deletedAnnotations.put$O$O(annotations[a].annotationId, deleted);
tSize=Math.min(annotations[a].annotations.length, command.position);
temp=Clazz.array($I$(14), [tSize]);
System.arraycopy$O$I$O$I$I(annotations[a].annotations, 0, temp, 0, tSize);
} else {
temp=annotations[a].annotations;
}}}annotations[a].annotations=temp;
}
}, 1);

Clazz.newMeth(C$, 'undoCutFeatures$jalview_commands_EditCommand_Edit$jalview_datamodel_SequenceI$I$I$Z',  function (command, seq, start, length, sameDatasetSequence) {
var sequence=seq.getDatasetSequence$();
if (sequence == null ) {
sequence=seq;
}if (!sameDatasetSequence) {
seq.getFeatures$().shiftFeatures$I$I(start + 1, length);
var sfs=seq.getFeatures$().findFeatures$I$I$SA(start, start, Clazz.array(String, -1, []));
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (sf.getBegin$() == start) {
if (!command.truncatedFeatures.containsKey$O(seq) || !command.truncatedFeatures.get$O(seq).contains$O(sf) ) {
var shifted=Clazz.new_([sf, sf.getBegin$() + length, sf.getEnd$() + length, sf.getFeatureGroup$(), sf.getScore$()],$I$(15,1).c$$jalview_datamodel_SequenceFeature$I$I$S$F);
seq.addSequenceFeature$jalview_datamodel_SequenceFeature(shifted);
seq.deleteFeature$jalview_datamodel_SequenceFeature(sf);
}}}
}if (command.deletedFeatures != null  && command.deletedFeatures.containsKey$O(seq) ) {
for (var deleted, $deleted = command.deletedFeatures.get$O(seq).iterator$(); $deleted.hasNext$()&&((deleted=($deleted.next$())),1);) {
sequence.addSequenceFeature$jalview_datamodel_SequenceFeature(deleted);
}
}if (command.truncatedFeatures != null  && command.truncatedFeatures.containsKey$O(seq) ) {
for (var amended, $amended = command.truncatedFeatures.get$O(seq).iterator$(); $amended.hasNext$()&&((amended=($amended.next$())),1);) {
sequence.deleteFeature$jalview_datamodel_SequenceFeature(amended);
}
}}, 1);

Clazz.newMeth(C$, 'getEdits$',  function () {
return this.edits;
});

Clazz.newMeth(C$, 'priorState$Z',  function (forUndo) {
var result=Clazz.new_($I$(16,1));
if (this.getEdits$() == null ) {
return result;
}if (forUndo) {
for (var e, $e = this.getEdits$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
for (var seq, $seq = 0, $$seq = e.getSequences$(); $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var ds=seq.getDatasetSequence$();
if (!result.containsKey$O(ds)) {
var preEdit=Clazz.new_(["", seq.getSequenceAsString$(), seq.getStart$(), seq.getEnd$()],$I$(8,1).c$$S$S$I$I);
preEdit.setDatasetSequence$jalview_datamodel_SequenceI(ds);
result.put$O$O(ds, preEdit);
}}
}
return result;
}var editList=Clazz.new_([this.getEdits$()],$I$(17,1).c$$java_util_List);
while (editList.hasNext$()){
var oldEdit=editList.next$();
var action=oldEdit.getAction$();
var position=oldEdit.getPosition$();
var number=oldEdit.getNumber$();
var gap=oldEdit.getGapCharacter$();
for (var seq, $seq = 0, $$seq = oldEdit.getSequences$(); $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var ds=seq.getDatasetSequence$();
var preEdit=result.get$O(ds);
if (preEdit == null ) {
preEdit=Clazz.new_(["", seq.getSequenceAsString$(), seq.getStart$(), seq.getEnd$()],$I$(8,1).c$$S$S$I$I);
preEdit.setDatasetSequence$jalview_datamodel_SequenceI(ds);
result.put$O$O(ds, preEdit);
}if (ds != null ) {
if (action === $I$(1).DELETE_GAP ) {
preEdit.setSequence$S( String.instantialize($I$(18,"insertCharAt$CA$I$I$C",[preEdit.getSequence$(), position, number, gap])));
} else if (action === $I$(1).INSERT_GAP ) {
preEdit.setSequence$S( String.instantialize($I$(18,"deleteChars$CA$I$I",[preEdit.getSequence$(), position, position + number])));
} else {
System.err.println$S("Can't undo edit action " + action);
}}}
}
return result;
});

Clazz.newMeth(C$, 'getEditIterator$Z',  function (forwards) {
if (forwards) {
return this.getEdits$().iterator$();
} else {
return Clazz.new_([this.getEdits$()],$I$(17,1).c$$java_util_List);
}});

Clazz.newMeth(C$, 'cutFeatures$jalview_commands_EditCommand_Edit$jalview_datamodel_SequenceI$I$I$Z',  function (command, seq, fromPosition, toPosition, cutIsInternal) {
if (!cutIsInternal) {
return;
}var added=Clazz.new_($I$(2,1));
var removed=Clazz.new_($I$(2,1));
var featureStore=seq.getFeatures$();
if (toPosition < fromPosition || featureStore == null  ) {
return;
}var cutStartPos=fromPosition;
var cutEndPos=toPosition;
var cutWidth=cutEndPos - cutStartPos + 1;
{
var toAmend=featureStore.findFeatures$I$I$SA(cutStartPos, cutEndPos, Clazz.array(String, -1, []));
for (var contact, $contact = featureStore.getContactFeatures$SA(Clazz.array(String, -1, [])).iterator$(); $contact.hasNext$()&&((contact=($contact.next$())),1);) {
if (contact.getBegin$() < cutStartPos && contact.getEnd$() > cutEndPos ) {
toAmend.add$O(contact);
}}
for (var sf, $sf = toAmend.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var sfBegin=sf.getBegin$();
var sfEnd=sf.getEnd$();
var newBegin=sfBegin;
var newEnd=sfEnd;
var toDelete=false;
var follows=false;
if (sfBegin >= cutStartPos && sfEnd <= cutEndPos ) {
toDelete=true;
} else if (sfBegin < cutStartPos && sfEnd > cutEndPos ) {
newEnd-=cutWidth;
} else if (sfEnd <= cutEndPos) {
newEnd=cutStartPos - 1;
if (sf.isContactFeature$()) {
toDelete=true;
}} else if (sfBegin >= cutStartPos) {
newBegin=cutIsInternal ? cutStartPos : cutEndPos + 1;
newEnd=newBegin + sfEnd - cutEndPos - 1;
if (sf.isContactFeature$()) {
toDelete=true;
}}seq.deleteFeature$jalview_datamodel_SequenceFeature(sf);
if (!follows) {
removed.add$O(sf);
}if (!toDelete) {
var copy=Clazz.new_([sf, newBegin, newEnd, sf.getFeatureGroup$(), sf.getScore$()],$I$(15,1).c$$jalview_datamodel_SequenceFeature$I$I$S$F);
seq.addSequenceFeature$jalview_datamodel_SequenceFeature(copy);
if (!follows) {
added.add$O(copy);
}}}
featureStore.shiftFeatures$I$I(cutEndPos + 1, -cutWidth);
}if (command.deletedFeatures == null ) {
command.deletedFeatures=Clazz.new_($I$(16,1));
}if (command.truncatedFeatures == null ) {
command.truncatedFeatures=Clazz.new_($I$(16,1));
}command.deletedFeatures.put$O$O(seq, removed);
command.truncatedFeatures.put$O$O(seq, added);
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.EditCommand, "Action", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
(P$.EditCommand$Action$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "EditCommand$Action$1", null, Clazz.load(['jalview.commands.EditCommand','.Action']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getUndoAction$',  function () {
return $I$(1).DELETE_GAP;
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "INSERT_GAP", 0, [], jalview.commands.EditCommand$Action$1);
(P$.EditCommand$Action$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "EditCommand$Action$2", null, Clazz.load(['jalview.commands.EditCommand','.Action']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getUndoAction$',  function () {
return $I$(1).INSERT_GAP;
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "DELETE_GAP", 1, [], jalview.commands.EditCommand$Action$2);
(P$.EditCommand$Action$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "EditCommand$Action$3", null, Clazz.load(['jalview.commands.EditCommand','.Action']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getUndoAction$',  function () {
return $I$(1).PASTE;
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "CUT", 2, [], jalview.commands.EditCommand$Action$3);
(P$.EditCommand$Action$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "EditCommand$Action$4", null, Clazz.load(['jalview.commands.EditCommand','.Action']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getUndoAction$',  function () {
return $I$(1).CUT;
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "PASTE", 3, [], jalview.commands.EditCommand$Action$4);
(P$.EditCommand$Action$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "EditCommand$Action$5", null, Clazz.load(['jalview.commands.EditCommand','.Action']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getUndoAction$',  function () {
return $I$(1).REPLACE;
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "REPLACE", 4, [], jalview.commands.EditCommand$Action$5);
(P$.EditCommand$Action$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "EditCommand$Action$6", null, Clazz.load(['jalview.commands.EditCommand','.Action']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getUndoAction$',  function () {
return null;
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "INSERT_NUC", 5, [], jalview.commands.EditCommand$Action$6);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EditCommand, "Edit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fullAlignmentHeight=false;
},1);

C$.$fields$=[['Z',['fullAlignmentHeight','systemGenerated'],'C',['gapChar'],'I',['position','number'],'O',['oldds','jalview.datamodel.SequenceI[]','oldStartEnd','jalview.datamodel.Range[]','deletedAnnotationRows','java.util.Map','+deletedAnnotations','+deletedFeatures','+truncatedFeatures','al','jalview.datamodel.AlignmentI','command','jalview.commands.EditCommand.Action','string','char[][]','seqs','jalview.datamodel.SequenceI[]','alIndex','int[]']]]

Clazz.newMeth(C$, 'c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$C',  function (cmd, sqs, pos, count, gap) {
;C$.$init$.apply(this);
this.command=cmd;
this.seqs=sqs;
this.position=pos;
this.number=count;
this.gapChar=gap;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI',  function (cmd, sqs, pos, count, align) {
C$.c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$C.apply(this, [cmd, sqs, pos, count, align.getGapCharacter$()]);
this.al=align;
this.alIndex=Clazz.array(Integer.TYPE, [sqs.length]);
for (var i=0; i < sqs.length; i++) {
this.alIndex[i]=align.findIndex$jalview_datamodel_SequenceI(sqs[i]);
}
this.fullAlignmentHeight=(align.getHeight$() == sqs.length);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$S',  function (cmd, sqs, pos, count, align, replace) {
C$.c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI.apply(this, [cmd, sqs, pos, count, align]);
this.string=Clazz.array(Character.TYPE, [sqs.length, null]);
for (var i=0; i < sqs.length; i++) {
this.string[i]=replace.toCharArray$();
}
}, 1);

Clazz.newMeth(C$, 'getSequences$',  function () {
return this.seqs;
});

Clazz.newMeth(C$, 'getPosition$',  function () {
return this.position;
});

Clazz.newMeth(C$, 'getAction$',  function () {
return this.command;
});

Clazz.newMeth(C$, 'getNumber$',  function () {
return this.number;
});

Clazz.newMeth(C$, 'getGapCharacter$',  function () {
return this.gapChar;
});

Clazz.newMeth(C$, 'setSystemGenerated$Z',  function (b) {
this.systemGenerated=b;
});

Clazz.newMeth(C$, 'isSystemGenerated$',  function () {
return this.systemGenerated;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
