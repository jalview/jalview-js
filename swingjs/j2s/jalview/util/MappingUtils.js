(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.util.HashMap','jalview.datamodel.Sequence','jalview.commands.EditCommand',['jalview.commands.EditCommand','.Action'],['jalview.commands.EditCommand','.Edit'],'jalview.datamodel.SequenceI','jalview.util.StringUtils','jalview.datamodel.SearchResults','jalview.datamodel.SequenceGroup','jalview.util.Comparison','java.util.Arrays','jalview.datamodel.AlignedCodonFrame','java.util.ArrayList','jalview.analysis.AlignmentSorter','jalview.datamodel.AlignmentOrder','jalview.commands.OrderCommand','jalview.util.ReverseListIterator']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MappingUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mapCutOrPaste$jalview_commands_EditCommand_Edit$Z$java_util_List$jalview_commands_EditCommand$java_util_List', function (edit, undo, targetSeqs, result, mappings) {
var action=edit.getAction$();
if (undo) {
action=action.getUndoAction$();
}System.err.println$S("MappingUtils.mapCutOrPaste not yet implemented");
}, 1);

Clazz.newMeth(C$, 'mapEditCommand$jalview_commands_EditCommand$Z$jalview_datamodel_AlignmentI$C$java_util_List', function (command, undo, mapTo, gapChar, mappings) {
if (!mapTo.isNucleotide$()) {
return null;
}var targetCopies=Clazz.new_($I$(1));
for (var seq, $seq = mapTo.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
var ds=seq.getDatasetSequence$();
if (ds != null ) {
var copy=Clazz.new_($I$(2).c$$jalview_datamodel_SequenceI,[seq]);
copy.setDatasetSequence$jalview_datamodel_SequenceI(ds);
targetCopies.put$TK$TV(ds, copy);
}}
var originalSequences=command.priorState$Z(undo);
var result=Clazz.new_($I$(3));
var edits=command.getEditIterator$Z(!undo);
while (edits.hasNext$()){
var edit=edits.next$();
if (edit.getAction$() === $I$(4).CUT  || edit.getAction$() === $I$(4).PASTE  ) {
C$.mapCutOrPaste$jalview_commands_EditCommand_Edit$Z$java_util_List$jalview_commands_EditCommand$java_util_List(edit, undo, mapTo.getSequences$(), result, mappings);
} else if (edit.getAction$() === $I$(4).INSERT_GAP  || edit.getAction$() === $I$(4).DELETE_GAP  ) {
C$.mapInsertOrDelete$jalview_commands_EditCommand_Edit$Z$java_util_Map$java_util_List$java_util_Map$C$jalview_commands_EditCommand$java_util_List(edit, undo, originalSequences, mapTo.getSequences$(), targetCopies, gapChar, result, mappings);
}}
return result.getSize$() > 0 ? result : null;
}, 1);

Clazz.newMeth(C$, 'mapInsertOrDelete$jalview_commands_EditCommand_Edit$Z$java_util_Map$java_util_List$java_util_Map$C$jalview_commands_EditCommand$java_util_List', function (edit, undo, originalSequences, targetSeqs, targetCopies, gapChar, result, mappings) {
var action=edit.getAction$();
if (undo) {
action=action.getUndoAction$();
}var count=edit.getNumber$();
var editPos=edit.getPosition$();
for (var seq, $seq = 0, $$seq = edit.getSequences$(); $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var ds=seq.getDatasetSequence$();
if (ds == null ) {
continue;
}var actedOn=originalSequences.get$O(ds);
var seqpos=actedOn.findPosition$I(editPos);
var sr=C$.buildSearchResults$jalview_datamodel_SequenceI$I$java_util_List(seq, seqpos, mappings);
if (!sr.isEmpty$()) {
for (var targetSeq, $targetSeq = targetSeqs.iterator$(); $targetSeq.hasNext$()&&((targetSeq=($targetSeq.next$())),1);) {
ds=targetSeq.getDatasetSequence$();
if (ds == null ) {
continue;
}var copyTarget=targetCopies.get$O(ds);
var match=sr.getResults$jalview_datamodel_SequenceI$I$I(copyTarget, 0, copyTarget.getLength$());
if (match != null ) {
var ratio=3;
var mappedCount=count * 3;
var mappedEditPos=action === $I$(4).DELETE_GAP  ? match[0] - mappedCount : match[0];
var e=Clazz.new_($I$(5).c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$C, [result, null, action, Clazz.array($I$(6), -1, [targetSeq]), mappedEditPos, mappedCount, gapChar]);
result.addEdit$jalview_commands_EditCommand_Edit(e);
if (action === $I$(4).INSERT_GAP ) {
copyTarget.setSequence$S( String.instantialize($I$(7).insertCharAt$CA$I$I$C(copyTarget.getSequence$(), mappedEditPos, mappedCount, gapChar)));
} else if (action === $I$(4).DELETE_GAP ) {
copyTarget.setSequence$S( String.instantialize($I$(7).deleteChars$CA$I$I(copyTarget.getSequence$(), mappedEditPos, mappedEditPos + mappedCount)));
}}}
}if (action === $I$(4).INSERT_GAP ) {
actedOn.setSequence$S( String.instantialize($I$(7).insertCharAt$CA$I$I$C(actedOn.getSequence$(), editPos, count, gapChar)));
} else if (action === $I$(4).DELETE_GAP ) {
actedOn.setSequence$S( String.instantialize($I$(7).deleteChars$CA$I$I(actedOn.getSequence$(), editPos, editPos + count)));
}}
}, 1);

Clazz.newMeth(C$, 'buildSearchResults$jalview_datamodel_SequenceI$I$java_util_List', function (seq, index, seqmappings) {
var results=Clazz.new_($I$(8));
C$.addSearchResults$jalview_datamodel_SearchResultsI$jalview_datamodel_SequenceI$I$java_util_List(results, seq, index, seqmappings);
return results;
}, 1);

Clazz.newMeth(C$, 'addSearchResults$jalview_datamodel_SearchResultsI$jalview_datamodel_SequenceI$I$java_util_List', function (results, seq, index, seqmappings) {
if (index >= seq.getStart$() && index <= seq.getEnd$() ) {
for (var acf, $acf = seqmappings.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
acf.markMappedRegion$jalview_datamodel_SequenceI$I$jalview_datamodel_SearchResultsI(seq, index, results);
}
}}, 1);

Clazz.newMeth(C$, 'mapSequenceGroup$jalview_datamodel_SequenceGroup$jalview_api_AlignViewportI$jalview_api_AlignViewportI', function (sg, mapFrom, mapTo) {
var targetIsNucleotide=mapTo.isNucleotide$();
var protein=targetIsNucleotide ? mapFrom : mapTo;
var codonFrames=protein.getAlignment$().getCodonFrames$();
var mappedGroup=Clazz.new_($I$(9).c$$jalview_datamodel_SequenceGroup,[sg]);
mappedGroup.setColourScheme$jalview_schemes_ColourSchemeI(mapTo.getGlobalColourScheme$());
mappedGroup.clear$();
var minStartCol=-1;
var maxEndCol=-1;
var selectionStartRes=sg.getStartRes$();
var selectionEndRes=sg.getEndRes$();
for (var selected, $selected = sg.getSequences$().iterator$(); $selected.hasNext$()&&((selected=($selected.next$())),1);) {
var firstUngappedPos=selectionStartRes;
while (firstUngappedPos <= selectionEndRes && $I$(10).isGap$C(selected.getCharAt$I(firstUngappedPos)) ){
firstUngappedPos++;
}
if (firstUngappedPos > selectionEndRes) {
continue;
}var lastUngappedPos=selectionEndRes;
while (lastUngappedPos >= selectionStartRes && $I$(10).isGap$C(selected.getCharAt$I(lastUngappedPos)) ){
lastUngappedPos--;
}
var startResiduePos=selected.findPosition$I(firstUngappedPos);
var endResiduePos=selected.findPosition$I(lastUngappedPos);
for (var acf, $acf = codonFrames.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
var mappedSequence=targetIsNucleotide ? acf.getDnaForAaSeq$jalview_datamodel_SequenceI(selected) : acf.getAaForDnaSeq$jalview_datamodel_SequenceI(selected);
if (mappedSequence != null ) {
for (var seq, $seq = mapTo.getAlignment$().getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
var mappedStartResidue=0;
var mappedEndResidue=0;
if (seq.getDatasetSequence$() === mappedSequence ) {
var mapping=$I$(11).asList$TTA(Clazz.array($I$(12), -1, [acf]));
var sr=C$.buildSearchResults$jalview_datamodel_SequenceI$I$java_util_List(selected, startResiduePos, mapping);
for (var m, $m = sr.getResults$().iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
mappedStartResidue=m.getStart$();
mappedEndResidue=m.getEnd$();
}
sr=C$.buildSearchResults$jalview_datamodel_SequenceI$I$java_util_List(selected, endResiduePos, mapping);
for (var m, $m = sr.getResults$().iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
mappedStartResidue=Math.min(mappedStartResidue, m.getStart$());
mappedEndResidue=Math.max(mappedEndResidue, m.getEnd$());
}
var mappedStartCol=seq.findIndex$I(mappedStartResidue) - 1;
minStartCol=minStartCol == -1 ? mappedStartCol : Math.min(minStartCol, mappedStartCol);
var mappedEndCol=seq.findIndex$I(mappedEndResidue) - 1;
maxEndCol=maxEndCol == -1 ? mappedEndCol : Math.max(maxEndCol, mappedEndCol);
mappedGroup.addSequence$jalview_datamodel_SequenceI$Z(seq, false);
break;
}}
}}
}
mappedGroup.setStartRes$I(minStartCol < 0 ? 0 : minStartCol);
mappedGroup.setEndRes$I(maxEndCol < 0 ? 0 : maxEndCol);
return mappedGroup;
}, 1);

Clazz.newMeth(C$, 'mapOrderCommand$jalview_commands_OrderCommand$Z$jalview_datamodel_AlignmentI$java_util_List', function (command, undo, mapTo, mappings) {
var sortOrder=command.getSequenceOrder$Z(undo);
var mappedOrder=Clazz.new_($I$(13));
var j=0;
var mappingToNucleotide=mapTo.isNucleotide$();
for (var seq, $seq = 0, $$seq = sortOrder; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
for (var acf, $acf = mappings.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
var mappedSeq=mappingToNucleotide ? acf.getDnaForAaSeq$jalview_datamodel_SequenceI(seq) : acf.getAaForDnaSeq$jalview_datamodel_SequenceI(seq);
if (mappedSeq != null ) {
for (var seq2, $seq2 = mapTo.getSequences$().iterator$(); $seq2.hasNext$()&&((seq2=($seq2.next$())),1);) {
if (seq2.getDatasetSequence$() === mappedSeq ) {
mappedOrder.add$TE(seq2);
j++;
break;
}}
}}
}
if (j == 0) {
return null;
}if (j < mapTo.getHeight$()) {
for (var seq, $seq = mapTo.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
if (!mappedOrder.contains$O(seq)) {
mappedOrder.add$TE(seq);
}}
}var mappedOrderArray=mappedOrder.toArray$TTA(Clazz.array($I$(6), [mappedOrder.size$()]));
var oldOrder=mapTo.getSequencesArray$();
$I$(14).sortBy$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentOrder(mapTo, Clazz.new_($I$(15).c$$jalview_datamodel_SequenceIA,[mappedOrderArray]));
var result=Clazz.new_($I$(16).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI,[command.getDescription$(), oldOrder, mapTo]);
return result;
}, 1);

Clazz.newMeth(C$, 'mapColumnSelection$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_api_AlignViewportI$jalview_api_AlignViewportI$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns', function (colsel, hiddencols, mapFrom, mapTo, newColSel, newHidden) {
var targetIsNucleotide=mapTo.isNucleotide$();
var protein=targetIsNucleotide ? mapFrom : mapTo;
var codonFrames=protein.getAlignment$().getCodonFrames$();
if (colsel == null ) {
return;
}var fromGapChar=mapFrom.getAlignment$().getGapCharacter$();
var fromSequences=mapFrom.getAlignment$().getSequences$();
var toSequences=mapTo.getAlignment$().getSequences$();
for (var sel, $sel = colsel.getSelected$().iterator$(); $sel.hasNext$()&&((sel=($sel.next$())),1);) {
C$.mapColumn$I$java_util_List$jalview_datamodel_ColumnSelection$java_util_List$java_util_List$C(sel.intValue$(), codonFrames, newColSel, fromSequences, toSequences, fromGapChar);
}
var regions=hiddencols.iterator$();
while (regions.hasNext$()){
C$.mapHiddenColumns$IA$java_util_List$jalview_datamodel_HiddenColumns$java_util_List$java_util_List$C(regions.next$(), codonFrames, newHidden, fromSequences, toSequences, fromGapChar);
}
return;
}, 1);

Clazz.newMeth(C$, 'mapHiddenColumns$IA$java_util_List$jalview_datamodel_HiddenColumns$java_util_List$java_util_List$C', function (hidden, mappings, mappedColumns, fromSequences, toSequences, fromGapChar) {
for (var col=hidden[0]; col <= hidden[1]; col++) {
var mappedTo=C$.findMappedColumns$I$java_util_List$java_util_List$java_util_List$C(col, mappings, fromSequences, toSequences, fromGapChar);
if (mappedTo != null ) {
mappedColumns.hideColumns$I$I(mappedTo[0] - 1, mappedTo[1] - 1);
}}
}, 1);

Clazz.newMeth(C$, 'mapColumn$I$java_util_List$jalview_datamodel_ColumnSelection$java_util_List$java_util_List$C', function (col, mappings, mappedColumns, fromSequences, toSequences, fromGapChar) {
var mappedTo=C$.findMappedColumns$I$java_util_List$java_util_List$java_util_List$C(col, mappings, fromSequences, toSequences, fromGapChar);
if (mappedTo != null ) {
for (var i=mappedTo[0]; i <= mappedTo[1]; i++) {
mappedColumns.addElement$I(i - 1);
}
}}, 1);

Clazz.newMeth(C$, 'findMappedColumns$I$java_util_List$java_util_List$java_util_List$C', function (col, mappings, fromSequences, toSequences, fromGapChar) {
var mappedTo=Clazz.array(Integer.TYPE, -1, [2147483647, -2147483648]);
var found=false;
for (var fromSeq, $fromSeq = fromSequences.iterator$(); $fromSeq.hasNext$()&&((fromSeq=($fromSeq.next$())),1);) {
if (fromSeq.getCharAt$I(col) == fromGapChar) {
continue;
}var residuePos=fromSeq.findPosition$I(col);
var sr=C$.buildSearchResults$jalview_datamodel_SequenceI$I$java_util_List(fromSeq, residuePos, mappings);
for (var m, $m = sr.getResults$().iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
var mappedStartResidue=m.getStart$();
var mappedEndResidue=m.getEnd$();
var mappedSeq=m.getSequence$();
for (var toSeq, $toSeq = toSequences.iterator$(); $toSeq.hasNext$()&&((toSeq=($toSeq.next$())),1);) {
if (toSeq.getDatasetSequence$() === mappedSeq ) {
var mappedStartCol=toSeq.findIndex$I(mappedStartResidue);
var mappedEndCol=toSeq.findIndex$I(mappedEndResidue);
mappedTo[0]=Math.min(mappedTo[0], mappedStartCol);
mappedTo[1]=Math.max(mappedTo[1], mappedEndCol);
found=true;
break;
}}
}
}
return found ? mappedTo : null;
}, 1);

Clazz.newMeth(C$, 'findCodonsFor$jalview_datamodel_SequenceI$I$java_util_List', function (seq, col, mappings) {
var result=Clazz.new_($I$(13));
var dsPos=seq.findPosition$I(col);
for (var mapping, $mapping = mappings.iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
if (mapping.involvesSequence$jalview_datamodel_SequenceI(seq)) {
var codons=mapping.getMappedCodons$jalview_datamodel_SequenceI$I(seq.getDatasetSequence$(), dsPos);
if (codons != null ) {
result.addAll$java_util_Collection(codons);
}}}
return result;
}, 1);

Clazz.newMeth(C$, 'flattenRanges$IA', function (ranges) {
var count=0;
for (var i=0; i < ranges.length - 1; i+=2) {
count+=Math.abs(ranges[i + 1] - ranges[i]) + 1;
}
var result=Clazz.array(Integer.TYPE, [count]);
var k=0;
for (var i=0; i < ranges.length - 1; i+=2) {
var from=ranges[i];
var to=ranges[i + 1];
var step=from <= to ? 1 : -1;
do {
result[k++]=from;
from+=step;
} while (from != to + step);
}
return result;
}, 1);

Clazz.newMeth(C$, 'findMappingsForSequence$jalview_datamodel_SequenceI$java_util_List', function (sequence, mappings) {
return C$.findMappingsForSequenceAndOthers$jalview_datamodel_SequenceI$java_util_List$java_util_List(sequence, mappings, null);
}, 1);

Clazz.newMeth(C$, 'findMappingsForSequenceAndOthers$jalview_datamodel_SequenceI$java_util_List$java_util_List', function (sequence, mappings, filterList) {
var result=Clazz.new_($I$(13));
if (sequence == null  || mappings == null  ) {
return result;
}for (var mapping, $mapping = mappings.iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
if (mapping.involvesSequence$jalview_datamodel_SequenceI(sequence)) {
if (filterList != null ) {
for (var otherseq, $otherseq = filterList.iterator$(); $otherseq.hasNext$()&&((otherseq=($otherseq.next$())),1);) {
var otherDataset=otherseq.getDatasetSequence$();
if (otherseq === sequence  || otherseq === sequence.getDatasetSequence$()   || (otherDataset != null  && (otherDataset === sequence  || otherDataset === sequence.getDatasetSequence$()  ) ) ) {
continue;
}if (mapping.involvesSequence$jalview_datamodel_SequenceI(otherseq)) {
result.add$TE(mapping);
break;
}}
} else {
result.add$TE(mapping);
}}}
return result;
}, 1);

Clazz.newMeth(C$, 'getLength$java_util_List', function (ranges) {
if (ranges == null ) {
return 0;
}var length=0;
for (var range, $range = ranges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
if (range.length % 2 != 0) {
System.err.println$S("Error unbalance start/end ranges: " + ranges.toString());
return 0;
}for (var i=0; i < range.length - 1; i+=2) {
length+=Math.abs(range[i + 1] - range[i]) + 1;
}
}
return length;
}, 1);

Clazz.newMeth(C$, 'contains$java_util_List$I', function (ranges, value) {
if (ranges == null ) {
return false;
}for (var range, $range = ranges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
if (range[1] >= range[0] && value >= range[0]  && value <= range[1] ) {
return true;
}if (range[1] < range[0] && value <= range[0]  && value >= range[1] ) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'removeStartPositions$I$IA', function (removeCount, ranges) {
if (removeCount <= 0) {
return ranges;
}var copy=$I$(11).copyOf$IA$I(ranges, ranges.length);
var sxpos=-1;
var cdspos=0;
for (var x=0; x < copy.length && sxpos == -1 ; x+=2) {
cdspos+=Math.abs(copy[x + 1] - copy[x]) + 1;
if (removeCount < cdspos) {
sxpos=x;
if (copy[x] <= copy[x + 1]) {
copy[x]=copy[x + 1] - cdspos + removeCount + 1;
} else {
copy[x]=copy[x + 1] + cdspos - removeCount - 1;
}break;
}}
if (sxpos > 0) {
var nxon=Clazz.array(Integer.TYPE, [copy.length - sxpos]);
System.arraycopy$O$I$O$I$I(copy, sxpos, nxon, 0, copy.length - sxpos);
return nxon;
}return copy;
}, 1);

Clazz.newMeth(C$, 'rangeContains$IA$IA', function (range, queryRange) {
if (range == null  || queryRange == null   || range.length != 2  || queryRange.length != 2 ) {
return false;
}var min=Math.min(range[0], range[1]);
var max=Math.max(range[0], range[1]);
return (min <= queryRange[0] && max >= queryRange[0]  && min <= queryRange[1]  && max >= queryRange[1] );
}, 1);

Clazz.newMeth(C$, 'removeEndPositions$I$java_util_List', function (positions, ranges) {
var toRemove=positions;
var it=Clazz.new_($I$(17).c$$java_util_List,[ranges]);
while (toRemove > 0){
var endRange=it.next$();
if (endRange.length != 2) {
System.err.println$S("MappingUtils.removeEndPositions doesn\'t handle multiple  ranges");
return;
}var length=endRange[1] - endRange[0] + 1;
if (length <= 0) {
System.err.println$S("MappingUtils.removeEndPositions doesn\'t handle reverse strand");
return;
}if (length > toRemove) {
endRange[1]-=toRemove;
toRemove=0;
} else {
toRemove-=length;
it.remove$();
}}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
