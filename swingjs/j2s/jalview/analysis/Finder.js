(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'com.stevesoft.pat.Regex','jalview.datamodel.SearchResults','java.util.Vector','jalview.datamodel.Range','jalview.analysis.AlignSeq','jalview.util.Comparison']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Finder", null, null, 'jalview.api.FinderI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.searchResults=null;
this.idMatches=null;
this.viewport=null;
this.sequenceIndex=0;
this.columnIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI', function (av) {
C$.$init$.apply(this);
this.viewport=av;
this.sequenceIndex=0;
this.columnIndex=-1;
}, 1);

Clazz.newMeth(C$, 'findAll$S$Z$Z', function (theSearchString, matchCase, searchDescription) {
this.sequenceIndex=0;
this.columnIndex=-1;
this.doFind$S$Z$Z$Z(theSearchString, matchCase, searchDescription, true);
this.sequenceIndex=0;
this.columnIndex=-1;
});

Clazz.newMeth(C$, 'findNext$S$Z$Z', function (theSearchString, matchCase, searchDescription) {
this.doFind$S$Z$Z$Z(theSearchString, matchCase, searchDescription, false);
if (this.searchResults.isEmpty$() && this.idMatches.isEmpty$() ) {
this.sequenceIndex=0;
this.columnIndex=-1;
}});

Clazz.newMeth(C$, 'doFind$S$Z$Z$Z', function (theSearchString, matchCase, searchDescription, findAll) {
var searchString=matchCase ? theSearchString : theSearchString.toUpperCase$();
var searchPattern=Clazz.new_($I$(1).c$$S,[searchString]);
searchPattern.setIgnoreCase$Z(!matchCase);
this.searchResults=Clazz.new_($I$(2));
this.idMatches=Clazz.new_($I$(3));
var selection=this.viewport.getSelectionGroup$();
if (selection != null  && selection.getSize$() < 1 ) {
selection=null;
}var alignment=this.viewport.getAlignment$();
var end=alignment.getHeight$();
while (this.sequenceIndex < end){
var seq=alignment.getSequenceAt$I(this.sequenceIndex);
var found=this.findNextMatch$jalview_datamodel_SequenceI$S$com_stevesoft_pat_Regex$Z(seq, searchString, searchPattern, searchDescription);
if (found && !findAll ) {
return;
}if (!found) {
this.sequenceIndex++;
this.columnIndex=-1;
}}
});

Clazz.newMeth(C$, 'getNextVisibleSequenceRegion$jalview_datamodel_SequenceI$I', function (sequence, column) {
var seqColStart=column;
var seqColEnd=sequence.getLength$() - 1;
var alignment=this.viewport.getAlignment$();
var visibleRegions=alignment.getHiddenColumns$().getVisContigsIterator$I$I$Z(column, alignment.getWidth$(), false);
var visible=visibleRegions.hasNext$() ? visibleRegions.next$() : null;
if (visible == null ) {
this.columnIndex=seqColEnd + 1;
return null;
}seqColStart=Math.max(seqColStart, visible[0]);
seqColEnd=Math.min(seqColEnd, visible[1]);
var selection=this.viewport.getSelectionGroup$();
if (selection != null ) {
var selectionStart=selection.getStartRes$();
var selectionEnd=selection.getEndRes$();
if (selectionStart > seqColEnd || selectionEnd < seqColStart ) {
this.columnIndex=seqColEnd + 1;
return null;
}seqColStart=Math.max(seqColStart, selectionStart);
seqColEnd=Math.min(seqColEnd, selectionEnd);
}return Clazz.new_($I$(4).c$$I$I,[seqColStart, seqColEnd]);
});

Clazz.newMeth(C$, 'findNextMatch$jalview_datamodel_SequenceI$S$com_stevesoft_pat_Regex$Z', function (seq, searchString, searchPattern, matchDescription) {
var selection=this.viewport.getSelectionGroup$();
if (selection != null  && !selection.contains$jalview_datamodel_SequenceI(seq) ) {
return false;
}if (this.columnIndex < 0) {
if (this.doNonMotifSearches$jalview_datamodel_SequenceI$S$com_stevesoft_pat_Regex$Z(seq, searchString, searchPattern, matchDescription)) {
return true;
}}var end=seq.getLength$();
while (this.columnIndex < end){
if (this.searchNextVisibleRegion$jalview_datamodel_SequenceI$com_stevesoft_pat_Regex(seq, searchPattern)) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'searchNextVisibleRegion$jalview_datamodel_SequenceI$com_stevesoft_pat_Regex', function (seq, searchPattern) {
var visible=this.getNextVisibleSequenceRegion$jalview_datamodel_SequenceI$I(seq, this.columnIndex);
if (visible == null ) {
return false;
}var seqString=seq.getSequenceAsString$I$I(visible.start, visible.end + 1);
var noGaps=$I$(5).extractGaps$S$S($I$(6).GapChars, seqString);
if (searchPattern.search$S(noGaps)) {
var sequenceStartPosition=seq.findPosition$I(visible.start);
this.recordMatch$jalview_datamodel_SequenceI$com_stevesoft_pat_Regex$I(seq, searchPattern, sequenceStartPosition);
return true;
} else {
this.columnIndex=visible.end + 1;
}return false;
});

Clazz.newMeth(C$, 'recordMatch$jalview_datamodel_SequenceI$com_stevesoft_pat_Regex$I', function (seq, searchPattern, firstResiduePosition) {
var offset=searchPattern.matchedFrom$();
var matchStartPosition=firstResiduePosition + offset;
var matchEndPosition=matchStartPosition + searchPattern.charsMatched$() - 1;
this.columnIndex=seq.findIndex$I(matchStartPosition);
var matches=this.searchResults.getResults$();
var lastMatch=matches.isEmpty$() ? null : matches.get$I(matches.size$() - 1);
if (lastMatch == null  || !lastMatch.contains$jalview_datamodel_SequenceI$I$I(seq, matchStartPosition, matchEndPosition) ) {
this.searchResults.addResult$jalview_datamodel_SequenceI$I$I(seq, matchStartPosition, matchEndPosition);
return true;
}return false;
});

Clazz.newMeth(C$, 'doNonMotifSearches$jalview_datamodel_SequenceI$S$com_stevesoft_pat_Regex$Z', function (seq, searchString, searchPattern, includeDescription) {
this.columnIndex=0;
if (this.searchForResidueNumber$jalview_datamodel_SequenceI$S(seq, searchString)) {
return true;
}if (this.searchSequenceName$jalview_datamodel_SequenceI$com_stevesoft_pat_Regex(seq, searchPattern)) {
return true;
}if (includeDescription && this.searchSequenceDescription$jalview_datamodel_SequenceI$com_stevesoft_pat_Regex(seq, searchPattern) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'searchSequenceDescription$jalview_datamodel_SequenceI$com_stevesoft_pat_Regex', function (seq, searchPattern) {
var desc=seq.getDescription$();
if (desc != null  && searchPattern.search$S(desc)  && !this.idMatches.contains$O(seq) ) {
this.idMatches.addElement$TE(seq);
return true;
}return false;
});

Clazz.newMeth(C$, 'searchSequenceName$jalview_datamodel_SequenceI$com_stevesoft_pat_Regex', function (seq, searchPattern) {
if (searchPattern.search$S(seq.getName$()) && !this.idMatches.contains$O(seq) ) {
this.idMatches.addElement$TE(seq);
return true;
}return false;
});

Clazz.newMeth(C$, 'searchForResidueNumber$jalview_datamodel_SequenceI$S', function (seq, searchString) {
try {
var res=Integer.parseInt$S(searchString);
if (seq.getStart$() <= res && seq.getEnd$() >= res ) {
this.searchResults.addResult$jalview_datamodel_SequenceI$I$I(seq, res, res);
return true;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
return false;
});

Clazz.newMeth(C$, 'getIdMatches$', function () {
return this.idMatches;
});

Clazz.newMeth(C$, 'getSearchResults$', function () {
return this.searchResults;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
