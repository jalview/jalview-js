(function(){var P$=Clazz.newPackage("jalview.analysis"),p$1={},I$=[[0,'java.util.ArrayList','jalview.util.DBRefUtils','jalview.datamodel.AlignedCodonFrame','jalview.analysis.SequenceIdMatcher','jalview.datamodel.Sequence','jalview.datamodel.Alignment','jalview.datamodel.SequenceI','jalview.ws.SequenceFetcherFactory','jalview.datamodel.SequenceFeature','jalview.datamodel.DBRefEntry','jalview.datamodel.Mapping','jalview.analysis.AlignmentUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CrossRef");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dataset','jalview.datamodel.AlignmentI','fromSeqs','jalview.datamodel.SequenceI[]','matcher','jalview.analysis.SequenceIdMatcher','rseqs','java.util.List']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI',  function (seqs, ds) {
;C$.$init$.apply(this);
this.fromSeqs=seqs;
this.dataset=ds.getDataset$() == null  ? ds : ds.getDataset$();
}, 1);

Clazz.newMeth(C$, 'findXrefSourcesForSequences$Z',  function (dna) {
var sources=Clazz.new_($I$(1,1));
for (var seq, $seq = 0, $$seq = this.fromSeqs; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
if (seq != null ) {
this.findXrefSourcesForSequence$jalview_datamodel_SequenceI$Z$java_util_List(seq, dna, sources);
}}
sources.remove$O("EMBL");
if (dna) {
sources.remove$O("ENSEMBL");
sources.remove$O("ENSEMBLGENOMES");
}return sources;
});

Clazz.newMeth(C$, 'findXrefSourcesForSequence$jalview_datamodel_SequenceI$Z$java_util_List',  function (seq, fromDna, sources) {
var rfs=$I$(2,"selectDbRefs$Z$java_util_List",[!fromDna, seq.getDBRefs$()]);
this.addXrefsToSources$java_util_List$java_util_List(rfs, sources);
if (this.dataset != null ) {
var lrfs=$I$(2,"selectDbRefs$Z$java_util_List",[fromDna, seq.getDBRefs$()]);
var foundSeqs=Clazz.new_($I$(1,1));
p$1.searchDatasetXrefs$Z$jalview_datamodel_SequenceI$java_util_List$java_util_List$jalview_datamodel_AlignedCodonFrame.apply(this, [fromDna, seq, lrfs, foundSeqs, null]);
for (var rs, $rs = foundSeqs.iterator$(); $rs.hasNext$()&&((rs=($rs.next$())),1);) {
var xrs=$I$(2,"selectDbRefs$Z$java_util_List",[!fromDna, rs.getDBRefs$()]);
this.addXrefsToSources$java_util_List$java_util_List(xrs, sources);
}
}});

Clazz.newMeth(C$, 'addXrefsToSources$java_util_List$java_util_List',  function (xrefs, sources) {
if (xrefs != null ) {
for (var ref, $ref = xrefs.iterator$(); $ref.hasNext$()&&((ref=($ref.next$())),1);) {
var source=$I$(2,"getCanonicalName$S",[ref.getSource$()]);
if (!sources.contains$O(source)) {
sources.add$O(source);
}}
}});

Clazz.newMeth(C$, 'findXrefSequences$S$Z',  function (source, fromDna) {
this.rseqs=Clazz.new_($I$(1,1));
var cf=Clazz.new_($I$(3,1));
this.matcher=Clazz.new_([this.dataset.getSequences$()],$I$(4,1).c$$java_util_List);
for (var seq, $seq = 0, $$seq = this.fromSeqs; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var dss=seq;
while (dss.getDatasetSequence$() != null ){
dss=dss.getDatasetSequence$();
}
var found=false;
var xrfs=$I$(2,"selectDbRefs$Z$java_util_List",[!fromDna, dss.getDBRefs$()]);
if ((xrfs == null  || xrfs.size$() == 0 ) && this.dataset != null  ) {
var lrfs=$I$(2,"selectDbRefs$Z$java_util_List",[fromDna, seq.getDBRefs$()]);
found=p$1.searchDatasetXrefs$Z$jalview_datamodel_SequenceI$java_util_List$java_util_List$jalview_datamodel_AlignedCodonFrame.apply(this, [fromDna, dss, lrfs, this.rseqs, cf]);
}if (xrfs == null  && !found ) {
continue;
}var sourceRefs=$I$(2).searchRefsForSource$java_util_List$S(xrfs, source);
var refIterator=sourceRefs.iterator$();
while (refIterator.hasNext$()){
var xref=refIterator.next$();
found=false;
if (xref.hasMap$() && xref.getMap$().getMap$().isTripletMap$() ) {
var mappedTo=xref.getMap$().getTo$();
if (mappedTo != null ) {
found=true;
var matchInDataset=this.findInDataset$jalview_datamodel_DBRefEntry(xref);
if (matchInDataset != null  && xref.getMap$().getTo$() != null   && matchInDataset !== xref.getMap$().getTo$()  ) {
System.err.println$S("Implementation problem (reopen JAL-2154): CrossRef.findInDataset seems to have recovered a different sequence than the one explicitly mapped for xref.Found:" + matchInDataset + "\nExpected:" + xref.getMap$().getTo$() + "\nFor xref:" + xref );
}if (matchInDataset != null ) {
if (!this.rseqs.contains$O(matchInDataset)) {
this.rseqs.add$O(matchInDataset);
}if (xref.getMap$().getMap$().isTripletMap$() && this.dataset.getMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(seq, matchInDataset) == null   && cf.getMappingBetween$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(seq, matchInDataset) == null  ) {
if (fromDna) {
cf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList$S(dss, matchInDataset, xref.getMap$().getMap$(), xref.getMap$().getMappedFromId$());
} else {
cf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList$S(matchInDataset, dss, xref.getMap$().getMap$().getInverse$(), xref.getMap$().getMappedFromId$());
}}refIterator.remove$();
continue;
}var rsq=Clazz.new_($I$(5,1).c$$jalview_datamodel_SequenceI,[mappedTo]);
this.rseqs.add$O(rsq);
if (xref.getMap$().getMap$().isTripletMap$()) {
if (fromDna) {
cf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList$S(dss, rsq, xref.getMap$().getMap$(), xref.getMap$().getMappedFromId$());
} else {
cf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList$S(rsq, dss, xref.getMap$().getMap$().getInverse$(), xref.getMap$().getMappedFromId$());
}}}}if (!found) {
var matchedSeq=this.matcher.findIdMatch$S(xref.getSource$() + "|" + xref.getAccessionId$() );
if (matchedSeq != null  && matchedSeq.isProtein$() == fromDna  ) {
if (this.constructMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$jalview_datamodel_AlignedCodonFrame$Z(seq, matchedSeq, xref, cf, fromDna)) {
found=true;
}}}if (!found) {
found=this.searchDataset$Z$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$java_util_List$jalview_datamodel_AlignedCodonFrame$Z$I(fromDna, dss, xref, this.rseqs, cf, false, 15);
}if (found) {
refIterator.remove$();
}}
if (!sourceRefs.isEmpty$()) {
p$1.retrieveCrossRef$java_util_List$jalview_datamodel_SequenceI$java_util_List$Z$jalview_datamodel_AlignedCodonFrame.apply(this, [sourceRefs, seq, xrfs, fromDna, cf]);
}}
var ral=null;
if (this.rseqs.size$() > 0) {
ral=Clazz.new_([this.rseqs.toArray$OA(Clazz.array($I$(7), [this.rseqs.size$()]))],$I$(6,1).c$$jalview_datamodel_SequenceIA);
if (!cf.isEmpty$()) {
this.dataset.addCodonFrame$jalview_datamodel_AlignedCodonFrame(cf);
}}return ral;
});

Clazz.newMeth(C$, 'retrieveCrossRef$java_util_List$jalview_datamodel_SequenceI$java_util_List$Z$jalview_datamodel_AlignedCodonFrame',  function (sourceRefs, seq, xrfs, fromDna, cf) {
var sftch=$I$(8).getSequenceFetcher$();
var retrieved=null;
var dss=seq.getDatasetSequence$() == null  ? seq : seq.getDatasetSequence$();
p$1.removeAlreadyRetrievedSeqs$java_util_List$Z.apply(this, [sourceRefs, fromDna]);
if (sourceRefs.size$() == 0) {
return;
}try {
retrieved=sftch.getSequences$java_util_List$Z(sourceRefs, !fromDna);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Problem whilst retrieving cross references for Sequence : " + seq.getName$());
e.printStackTrace$();
} else {
throw e;
}
}
if (retrieved != null ) {
var addedXref=false;
var newDsSeqs=Clazz.new_($I$(1,1));
var doNotAdd=Clazz.new_($I$(1,1));
for (var retrievedSequence, $retrievedSequence = 0, $$retrievedSequence = retrieved; $retrievedSequence<$$retrievedSequence.length&&((retrievedSequence=($$retrievedSequence[$retrievedSequence])),1);$retrievedSequence++) {
var retrievedDss=retrievedSequence.getDatasetSequence$() == null  ? retrievedSequence : retrievedSequence.getDatasetSequence$();
addedXref=!!(addedXref|(p$1.importCrossRefSeq$jalview_datamodel_AlignedCodonFrame$java_util_List$java_util_List$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI.apply(this, [cf, newDsSeqs, doNotAdd, dss, retrievedDss])));
}
if (!addedXref) {
this.updateDbrefMappings$jalview_datamodel_SequenceI$java_util_List$jalview_datamodel_SequenceIA$jalview_datamodel_AlignedCodonFrame$Z(seq, xrfs, retrieved, cf, fromDna);
for (var retrievedSequence, $retrievedSequence = 0, $$retrievedSequence = retrieved; $retrievedSequence<$$retrievedSequence.length&&((retrievedSequence=($$retrievedSequence[$retrievedSequence])),1);$retrievedSequence++) {
var retrievedDss=retrievedSequence.getDatasetSequence$() == null  ? retrievedSequence : retrievedSequence.getDatasetSequence$();
addedXref=!!(addedXref|(p$1.importCrossRefSeq$jalview_datamodel_AlignedCodonFrame$java_util_List$java_util_List$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI.apply(this, [cf, newDsSeqs, doNotAdd, dss, retrievedDss])));
}
}for (var newToSeq, $newToSeq = newDsSeqs.iterator$(); $newToSeq.hasNext$()&&((newToSeq=($newToSeq.next$())),1);) {
if (!doNotAdd.contains$O(newToSeq) && this.dataset.findIndex$jalview_datamodel_SequenceI(newToSeq) == -1 ) {
this.dataset.addSequence$jalview_datamodel_SequenceI(newToSeq);
this.matcher.add$jalview_datamodel_SequenceI(newToSeq);
}}
}}, p$1);

Clazz.newMeth(C$, 'removeAlreadyRetrievedSeqs$java_util_List$Z',  function (sourceRefs, fromDna) {
var dbrSourceSet=Clazz.new_($I$(1,1).c$$java_util_Collection,[sourceRefs]);
var dsSeqs=this.dataset.getSequences$();
for (var ids=0, nds=dsSeqs.size$(); ids < nds; ids++) {
var sq=dsSeqs.get$I(ids);
var dupeFound=false;
if (sq.isProtein$() == fromDna ) {
var sqdbrefs=sq.getPrimaryDBRefs$();
for (var idb=0, ndb=sqdbrefs.size$(); idb < ndb; idb++) {
var dbr=sqdbrefs.get$I(idb);
var searchrefs=$I$(2).searchRefs$java_util_List$jalview_datamodel_DBRefEntry$I(dbrSourceSet, dbr, 15);
for (var isr=0, nsr=searchrefs.size$(); isr < nsr; isr++) {
sourceRefs.remove$O(searchrefs.get$I(isr));
dupeFound=true;
}
}
}if (dupeFound) {
dbrSourceSet.clear$();
dbrSourceSet.addAll$java_util_Collection(sourceRefs);
}}
}, p$1);

Clazz.newMeth(C$, 'importCrossRefSeq$jalview_datamodel_AlignedCodonFrame$java_util_List$java_util_List$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI',  function (cf, newDsSeqs, doNotAdd, sourceSequence, retrievedSequence) {
var imported=false;
var dbr=retrievedSequence.getDBRefs$();
if (dbr != null ) {
for (var ib=0, nb=dbr.size$(); ib < nb; ib++) {
var dbref=dbr.get$I(ib);
var matched=this.findInDataset$jalview_datamodel_DBRefEntry(dbref);
if (matched === sourceSequence ) {
imported=true;
}var map=dbref.getMap$();
if (map != null ) {
var ms=map.getTo$();
if (ms != null  && map.getMap$() != null  ) {
if (ms === sourceSequence ) {
continue;
}if (matched == null ) {
newDsSeqs.add$O(ms);
continue;
}try {
var sf=map.getMap$().getToLowest$();
var st=map.getMap$().getToHighest$();
var mappedrg=ms.getSubSequence$I$I(sf, st);
if (mappedrg.getLength$() > 0 && ms.getSequenceAsString$().equals$O(matched.getSequenceAsString$()) ) {
var msg="Mapping updated from " + ms.getName$() + " to retrieved crossreference " + matched.getName$() ;
System.out.println$S(msg);
var toRefs=map.getTo$().getDBRefs$();
if (toRefs != null ) {
for (var ref, $ref = toRefs.iterator$(); $ref.hasNext$()&&((ref=($ref.next$())),1);) {
if (dbref.getSrcAccString$().equals$O(ref.getSrcAccString$())) {
continue;
}matched.addDBRef$jalview_datamodel_DBRefEntry(ref);
}
}doNotAdd.add$O(map.getTo$());
map.setTo$jalview_datamodel_SequenceI(matched);
this.setReverseMapping$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$jalview_datamodel_AlignedCodonFrame(matched, dbref, cf);
var sfs=ms.getFeatures$().getAllFeatures$SA(Clazz.array(String, -1, []));
for (var feat, $feat = sfs.iterator$(); $feat.hasNext$()&&((feat=($feat.next$())),1);) {
var newFeature=((P$.CrossRef$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CrossRef$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('jalview.datamodel.SequenceFeature'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
return C$.superclazz.prototype.equals$O$Z.apply(this, [o, true]);
});
})()
), Clazz.new_($I$(9,1).c$$jalview_datamodel_SequenceFeature,[this, null, feat],P$.CrossRef$1));
matched.addSequenceFeature$jalview_datamodel_SequenceFeature(newFeature);
}
}cf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(retrievedSequence, map.getTo$(), map.getMap$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Exception when consolidating Mapped sequence set...");
e.printStackTrace$java_io_PrintStream(System.err);
} else {
throw e;
}
}
}}}
}if (imported) {
retrievedSequence.updatePDBIds$();
this.rseqs.add$O(retrievedSequence);
if (this.dataset.findIndex$jalview_datamodel_SequenceI(retrievedSequence) == -1) {
this.dataset.addSequence$jalview_datamodel_SequenceI(retrievedSequence);
this.matcher.add$jalview_datamodel_SequenceI(retrievedSequence);
}}return imported;
}, p$1);

Clazz.newMeth(C$, 'setReverseMapping$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$jalview_datamodel_AlignedCodonFrame',  function (mapFrom, dbref, mappings) {
var mapTo=dbref.getMap$().getTo$();
if (mapTo == null ) {
return;
}var dbrefs=mapTo.getDBRefs$();
if (dbrefs == null ) {
return;
}for (var toRef, $toRef = dbrefs.iterator$(); $toRef.hasNext$()&&((toRef=($toRef.next$())),1);) {
if (toRef.hasMap$() && mapFrom === toRef.getMap$().getTo$()  ) {
if (toRef.getMap$().getMap$() == null ) {
var inverse=dbref.getMap$().getMap$().getInverse$();
toRef.getMap$().setMap$jalview_util_MapList(inverse);
mappings.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(mapTo, mapFrom, inverse);
}}}
});

Clazz.newMeth(C$, 'findInDataset$jalview_datamodel_DBRefEntry',  function (xref) {
if (xref == null  || !xref.hasMap$()  || xref.getMap$().getTo$() == null  ) {
return null;
}var mapsTo=xref.getMap$().getTo$();
var name=xref.getAccessionId$();
var name2=xref.getSource$() + "|" + name ;
var dss=mapsTo.getDatasetSequence$() == null  ? mapsTo : mapsTo.getDatasetSequence$();
if (this.dataset.findIndex$jalview_datamodel_SequenceI(dss) > -1) {
return dss;
}var template=Clazz.new_([xref.getSource$(), null, xref.getAccessionId$()],$I$(10,1).c$$S$S$S);
var firstIdMatch=null;
for (var seq, $seq = this.dataset.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
var match=$I$(2,"searchRefs$java_util_List$jalview_datamodel_DBRefEntry$I",[seq.getPrimaryDBRefs$(), template, 15]);
if (match != null  && match.size$() == 1  && C$.sameSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(seq, dss) ) {
return seq;
}if (firstIdMatch == null  && (name.equals$O(seq.getName$()) || seq.getName$().startsWith$S(name2) ) ) {
if (C$.sameSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(seq, dss)) {
firstIdMatch=seq;
}}}
return firstIdMatch;
});

Clazz.newMeth(C$, 'sameSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI',  function (seq1, seq2) {
if (seq1 === seq2 ) {
return true;
}if (seq1 == null  || seq2 == null  ) {
return false;
}if (seq1.getLength$() != seq2.getLength$()) {
return false;
}var length=seq1.getLength$();
for (var i=0; i < length; i++) {
var diff=(seq1.getCharAt$I(i)).$c() - (seq2.getCharAt$I(i)).$c();
if (diff != 0 && diff != 32  && diff != -32 ) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'updateDbrefMappings$jalview_datamodel_SequenceI$java_util_List$jalview_datamodel_SequenceIA$jalview_datamodel_AlignedCodonFrame$Z',  function (mapFrom, xrefs, retrieved, acf, fromDna) {
var idMatcher=Clazz.new_($I$(4,1).c$$jalview_datamodel_SequenceIA,[retrieved]);
for (var xref, $xref = xrefs.iterator$(); $xref.hasNext$()&&((xref=($xref.next$())),1);) {
if (!xref.hasMap$()) {
var targetSeqName=xref.getSource$() + "|" + xref.getAccessionId$() ;
var matches=idMatcher.findAllIdMatches$S(targetSeqName);
if (matches == null ) {
return;
}for (var seq, $seq = 0, $$seq = matches; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
this.constructMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$jalview_datamodel_AlignedCodonFrame$Z(mapFrom, seq, xref, acf, fromDna);
}
}}
});

Clazz.newMeth(C$, 'constructMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$jalview_datamodel_AlignedCodonFrame$Z',  function (mapFrom, mapTo, xref, mappings, fromDna) {
var mapping=null;
var dsmapFrom=mapFrom.getDatasetSequence$() == null  ? mapFrom : mapFrom.getDatasetSequence$();
var dsmapTo=mapTo.getDatasetSequence$() == null  ? mapTo : mapTo.getDatasetSequence$();
if (dsmapTo.getDBRefs$() != null ) {
for (var dbref, $dbref = dsmapTo.getDBRefs$().iterator$(); $dbref.hasNext$()&&((dbref=($dbref.next$())),1);) {
var name=dbref.getSource$() + "|" + dbref.getAccessionId$() ;
if (dbref.hasMap$() && dsmapFrom.getName$().startsWith$S(name) ) {
var reverse=dbref.getMap$().getMap$().getInverse$();
xref.setMap$jalview_datamodel_Mapping(Clazz.new_($I$(11,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList,[dsmapTo, reverse]));
mappings.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(mapFrom, dsmapTo, reverse);
return true;
}}
}if (fromDna) {
mapping=$I$(12).mapCdnaToProtein$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(mapTo, mapFrom);
} else {
mapping=$I$(12).mapCdnaToProtein$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(mapFrom, mapTo);
if (mapping != null ) {
mapping=mapping.getInverse$();
}}if (mapping == null ) {
return false;
}xref.setMap$jalview_datamodel_Mapping(Clazz.new_($I$(11,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList,[mapTo, mapping]));
if (mapFrom.getDatasetSequence$() != null  && false ) {
}if (fromDna) {
mappings.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(mapFrom, mapTo, mapping);
} else {
mappings.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(mapTo, mapFrom, mapping.getInverse$());
}return true;
});

Clazz.newMeth(C$, 'searchDatasetXrefs$Z$jalview_datamodel_SequenceI$java_util_List$java_util_List$jalview_datamodel_AlignedCodonFrame',  function (fromDna, sequenceI, lrfs, foundSeqs, cf) {
var found=false;
if (lrfs == null ) {
return false;
}for (var i=0, n=lrfs.size$(); i < n; i++) {
found=!!(found|(this.searchDataset$Z$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$java_util_List$jalview_datamodel_AlignedCodonFrame$Z$I(fromDna, sequenceI, lrfs.get$I(i), foundSeqs, cf, false, 5)));
}
return found;
}, p$1);

Clazz.newMeth(C$, 'searchDataset$Z$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$java_util_List$jalview_datamodel_AlignedCodonFrame$Z$I',  function (fromDna, fromSeq, xrf, foundSeqs, mappings, direct, mode) {
var found=false;
if (this.dataset == null ) {
return false;
}if (this.dataset.getSequences$() == null ) {
System.err.println$S("Empty dataset sequence set - NO VECTOR");
return false;
}var ds=this.dataset.getSequences$();
{
for (var nxt, $nxt = ds.iterator$(); $nxt.hasNext$()&&((nxt=($nxt.next$())),1);) {
if (nxt != null ) {
if (nxt.getDatasetSequence$() != null ) {
System.err.println$S("Implementation warning: CrossRef initialised with a dataset alignment with non-dataset sequences in it! (" + nxt.getDisplayId$Z(true) + " has ds reference " + nxt.getDatasetSequence$().getDisplayId$Z(true) + ")" );
}if (nxt === fromSeq  || nxt === fromSeq.getDatasetSequence$()  ) {
continue;
}{
var isDna=!nxt.isProtein$();
if (direct ? (isDna != fromDna ) : (isDna == fromDna )) {
continue;
}}var poss=nxt.getDBRefs$();
var cands=null;
cands=$I$(2).searchRefs$java_util_List$jalview_datamodel_DBRefEntry$I(poss, xrf, mode);
if (!cands.isEmpty$()) {
if (foundSeqs.contains$O(nxt)) {
continue;
}found=true;
foundSeqs.add$O(nxt);
if (mappings != null  && !direct ) {
for (var candidate, $candidate = cands.iterator$(); $candidate.hasNext$()&&((candidate=($candidate.next$())),1);) {
var mapping=candidate.getMap$();
if (mapping != null ) {
var map=mapping.getMap$();
if (mapping.getTo$() != null  && map.getFromRatio$() != map.getToRatio$() ) {
if (map.getFromRatio$() == 3) {
mappings.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(nxt, fromSeq, map);
} else {
mappings.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(nxt, fromSeq, map.getInverse$());
}}}}
}}}}
}return found;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:25 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
