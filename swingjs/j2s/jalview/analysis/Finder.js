(function(){var P$=Clazz.newPackage("jalview.analysis"),p$1={},I$=[[0,'jalview.datamodel.SearchResults','java.util.ArrayList','java.util.Locale','com.stevesoft.pat.Regex','jalview.analysis.AlignSeq','jalview.util.Comparison','StringBuilder','java.util.Arrays','jalview.util.MapList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Finder", null, null, 'jalview.api.FinderI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['sequenceIndex','residueIndex','searchedSequenceStartPosition'],'S',['seqToSearch'],'O',['searchResults','jalview.datamodel.SearchResultsI','idMatches','java.util.List','viewport','jalview.api.AlignViewportI','searchedSequenceMap','jalview.util.MapList']]]

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI',  function (av) {
;C$.$init$.apply(this);
this.viewport=av;
this.sequenceIndex=0;
this.residueIndex=-1;
}, 1);

Clazz.newMeth(C$, 'findAll$S$Z$Z$Z',  function (theSearchString, matchCase, searchDescription, ignoreHidden) {
this.sequenceIndex=0;
this.residueIndex=-1;
this.doFind$S$Z$Z$Z$Z(theSearchString, matchCase, searchDescription, true, ignoreHidden);
this.sequenceIndex=0;
this.residueIndex=-1;
});

Clazz.newMeth(C$, 'findNext$S$Z$Z$Z',  function (theSearchString, matchCase, searchDescription, ignoreHidden) {
this.doFind$S$Z$Z$Z$Z(theSearchString, matchCase, searchDescription, false, ignoreHidden);
if (this.searchResults.isEmpty$() && this.idMatches.isEmpty$() ) {
this.sequenceIndex=0;
this.residueIndex=-1;
}});

Clazz.newMeth(C$, 'doFind$S$Z$Z$Z$Z',  function (theSearchString, matchCase, searchDescription, findAll, ignoreHidden) {
this.searchResults=Clazz.new_($I$(1,1));
this.idMatches=Clazz.new_($I$(2,1));
var searchString=matchCase ? theSearchString : theSearchString.toUpperCase$java_util_Locale($I$(3).ROOT);
var searchPattern=Clazz.new_($I$(4,1).c$$S,[searchString]);
searchPattern.setIgnoreCase$Z(!matchCase);
var selection=this.viewport.getSelectionGroup$();
if (selection != null  && selection.getSize$() < 1 ) {
selection=null;
}var alignment=this.viewport.getAlignment$();
var end=alignment.getHeight$();
p$1.getSequence$Z.apply(this, [ignoreHidden]);
var found=false;
while ((!found || findAll ) && this.sequenceIndex < end ){
found=this.findNextMatch$S$com_stevesoft_pat_Regex$Z$Z(searchString, searchPattern, searchDescription, ignoreHidden);
}
});

Clazz.newMeth(C$, 'getSequence$Z',  function (ignoreHidden) {
var alignment=this.viewport.getAlignment$();
if (this.sequenceIndex >= alignment.getHeight$()) {
this.seqToSearch="";
return false;
}var seq=alignment.getSequenceAt$I(this.sequenceIndex);
var selection=this.viewport.getSelectionGroup$();
if (selection != null  && !selection.contains$jalview_datamodel_SequenceI(seq) ) {
if (!p$1.nextSequence$Z.apply(this, [ignoreHidden])) {
return false;
}seq=alignment.getSequenceAt$I(this.sequenceIndex);
}var seqString=null;
if (ignoreHidden) {
seqString=p$1.getVisibleSequence$jalview_datamodel_SequenceI.apply(this, [seq]);
this.searchedSequenceStartPosition=1;
} else {
var startCol=0;
var endCol=seq.getLength$() - 1;
this.searchedSequenceStartPosition=seq.getStart$();
if (selection != null ) {
startCol=selection.getStartRes$();
endCol=Math.min(endCol, selection.getEndRes$());
this.searchedSequenceStartPosition=seq.findPosition$I(startCol);
}seqString=seq.getSequenceAsString$I$I(startCol, endCol + 1);
}var ungapped=$I$(5,"extractGaps$S$S",[$I$(6).GapChars, seqString]);
this.seqToSearch=ungapped;
return true;
}, p$1);

Clazz.newMeth(C$, 'getVisibleSequence$jalview_datamodel_SequenceI',  function (seq) {
var seqStartCol=seq.findIndex$I(seq.getStart$()) - 1;
var seqEndCol=seq.findIndex$I(seq.getStart$() + seq.getLength$() - 1) - 1;
var visibleColumns=this.viewport.getViewAsVisibleContigs$Z(true);
var visibleSeq=Clazz.new_($I$(7,1).c$$I,[seqEndCol - seqStartCol]);
var fromRanges=Clazz.new_($I$(2,1));
while (visibleColumns.hasNext$()){
var range=visibleColumns.next$();
if (range[0] > seqEndCol) {
break;
}if (range[1] < seqStartCol) {
continue;
}var subseq=seq.getSequenceAsString$I$I(range[0], range[1] + 1);
var ungapped=$I$(5,"extractGaps$S$S",[$I$(6).GapChars, subseq]);
visibleSeq.append$S(ungapped);
if (!ungapped.isEmpty$()) {
var seqResFrom=seq.findPosition$I(range[0]);
var seqResTo=seqResFrom + ungapped.length$() - 1;
fromRanges.add$O(Clazz.array(Integer.TYPE, -1, [seqResFrom, seqResTo]));
}}
var toRange=$I$(8,"asList$OA",[Clazz.array(Integer.TYPE, -1, [Clazz.array(Integer.TYPE, -1, [1, visibleSeq.length$()])])]);
this.searchedSequenceMap=Clazz.new_($I$(9,1).c$$java_util_List$java_util_List$I$I,[fromRanges, toRange, 1, 1]);
return visibleSeq.toString();
}, p$1);

Clazz.newMeth(C$, 'nextSequence$Z',  function (ignoreHidden) {
++this.sequenceIndex;
this.residueIndex=-1;
return p$1.getSequence$Z.apply(this, [ignoreHidden]);
}, p$1);

Clazz.newMeth(C$, 'findNextMatch$S$com_stevesoft_pat_Regex$Z$Z',  function (searchString, searchPattern, matchDescription, ignoreHidden) {
if (this.residueIndex < 0) {
if (this.doNonMotifSearches$S$com_stevesoft_pat_Regex$Z(searchString, searchPattern, matchDescription)) {
return true;
}}var end=this.seqToSearch.length$();
while (this.residueIndex < end){
var matched=searchPattern.searchFrom$S$I(this.seqToSearch, this.residueIndex);
if (matched) {
if (this.recordMatch$com_stevesoft_pat_Regex$Z(searchPattern, ignoreHidden)) {
return true;
}} else {
this.residueIndex=2147483647;
}}
p$1.nextSequence$Z.apply(this, [ignoreHidden]);
return false;
});

Clazz.newMeth(C$, 'recordMatch$com_stevesoft_pat_Regex$Z',  function (searchPattern, ignoreHidden) {
var seq=this.viewport.getAlignment$().getSequenceAt$I(this.sequenceIndex);
var offset=searchPattern.matchedFrom$();
var matchStartPosition=this.searchedSequenceStartPosition + offset;
var matchEndPosition=matchStartPosition + searchPattern.charsMatched$() - 1;
this.residueIndex=searchPattern.matchedFrom$() + 1;
if (p$1.allHidden$jalview_datamodel_SequenceI$I$I.apply(this, [seq, matchStartPosition, matchEndPosition])) {
return false;
}var matches=this.searchResults.getResults$();
var lastMatch=matches.isEmpty$() ? null : matches.get$I(matches.size$() - 1);
if (lastMatch == null  || !lastMatch.contains$jalview_datamodel_SequenceI$I$I(seq, matchStartPosition, matchEndPosition) ) {
p$1.addMatch$jalview_datamodel_SequenceI$I$I$Z.apply(this, [seq, matchStartPosition, matchEndPosition, ignoreHidden]);
return true;
}return false;
});

Clazz.newMeth(C$, 'addMatch$jalview_datamodel_SequenceI$I$I$Z',  function (seq, matchStartPosition, matchEndPosition, ignoreHidden) {
if (!ignoreHidden) {
this.searchResults.addResult$jalview_datamodel_SequenceI$I$I(seq, matchStartPosition, matchEndPosition);
return;
}var truePositions=this.searchedSequenceMap.locateInFrom$I$I(matchStartPosition, matchEndPosition);
this.searchResults.addResult$jalview_datamodel_SequenceI$IA(seq, truePositions);
}, p$1);

Clazz.newMeth(C$, 'allHidden$jalview_datamodel_SequenceI$I$I',  function (seq, fromPos, toPos) {
if (!this.viewport.hasHiddenColumns$()) {
return false;
}for (var res=fromPos; res <= toPos; res++) {
if (p$1.isVisible$jalview_datamodel_SequenceI$I.apply(this, [seq, res])) {
return false;
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'doNonMotifSearches$S$com_stevesoft_pat_Regex$Z',  function (searchString, searchPattern, includeDescription) {
var seq=this.viewport.getAlignment$().getSequenceAt$I(this.sequenceIndex);
this.residueIndex=0;
try {
var res=Integer.parseInt$S(searchString);
return this.searchForResidueNumber$jalview_datamodel_SequenceI$I(seq, res);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
if (this.searchSequenceName$jalview_datamodel_SequenceI$com_stevesoft_pat_Regex(seq, searchPattern)) {
return true;
}if (includeDescription && this.searchSequenceDescription$jalview_datamodel_SequenceI$com_stevesoft_pat_Regex(seq, searchPattern) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'searchSequenceDescription$jalview_datamodel_SequenceI$com_stevesoft_pat_Regex',  function (seq, searchPattern) {
var desc=seq.getDescription$();
if (desc != null  && searchPattern.search$S(desc)  && !this.idMatches.contains$O(seq) ) {
this.idMatches.add$O(seq);
return true;
}return false;
});

Clazz.newMeth(C$, 'searchSequenceName$jalview_datamodel_SequenceI$com_stevesoft_pat_Regex',  function (seq, searchPattern) {
if (searchPattern.search$S(seq.getName$()) && !this.idMatches.contains$O(seq) ) {
this.idMatches.add$O(seq);
return true;
}return false;
});

Clazz.newMeth(C$, 'searchForResidueNumber$jalview_datamodel_SequenceI$I',  function (seq, resNo) {
if (seq.getStart$() <= resNo && seq.getEnd$() >= resNo ) {
if (p$1.isVisible$jalview_datamodel_SequenceI$I.apply(this, [seq, resNo])) {
this.searchResults.addResult$jalview_datamodel_SequenceI$I$I(seq, resNo, resNo);
return true;
}}return false;
});

Clazz.newMeth(C$, 'isVisible$jalview_datamodel_SequenceI$I',  function (seq, res) {
if (!this.viewport.hasHiddenColumns$()) {
return true;
}var col=seq.findIndex$I(res);
return this.viewport.getAlignment$().getHiddenColumns$().isVisible$I(col - 1);
}, p$1);

Clazz.newMeth(C$, 'getIdMatches$',  function () {
return this.idMatches;
});

Clazz.newMeth(C$, 'getSearchResults$',  function () {
return this.searchResults;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
