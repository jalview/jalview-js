(function(){var P$=Clazz.newPackage("jalview.ws"),p$1={},I$=[[0,'jalview.gui.CutAndPasteTransfer','java.util.ArrayList','jalview.datamodel.SequenceI','jalview.gui.SequenceFetcher','jalview.bin.Cache','jalview.datamodel.DBRefSource','jalview.ws.seqfetcher.DbSourceProxy','Thread','java.util.Locale','java.util.Vector','Error','jalview.util.MessageManager','uk.ac.ebi.www.picr.AccessionMappingService.AccessionMapperServiceLocator','java.util.Arrays','java.util.Hashtable','StringBuffer','jalview.bin.Console','jalview.gui.OOMWarning','jalview.util.DBRefUtils','java.util.regex.Pattern','StringBuilder','jalview.gui.Desktop','jalview.analysis.AlignSeq','jalview.datamodel.Mapping','java.util.HashMap','jalview.api.FeatureSettingsModelI']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DBRefFetcher", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Runnable');
C$.$classes$=[['FetchFinishedListenerI',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.output=Clazz.new_($I$(1,1));
this.picrClient=null;
this.trimDsSeqs=true;
this.featureDisplaySettings=null;
},1);

C$.$fields$=[['Z',['trimDsSeqs'],'O',['dataset','jalview.datamodel.SequenceI[]','progressWindow','jalview.gui.IProgressIndicator','output','jalview.gui.CutAndPasteTransfer','picrClient','uk.ac.ebi.www.picr.AccessionMappingService.AccessionMapperInterface','seqRefs','java.util.Hashtable','dbSources','jalview.ws.seqfetcher.DbSourceProxy[]','sfetcher','jalview.ws.SequenceFetcher','listeners','java.util.List','alseqs','jalview.datamodel.SequenceI[]','featureDisplaySettings','java.util.Map']]
,['S',['NEWLINE']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA$jalview_gui_IProgressIndicator$jalview_ws_seqfetcher_DbSourceProxyA$jalview_gui_FeatureSettings$Z',  function (seqs, progressIndicatorFrame, sources, featureSettings, isNucleotide) {
;C$.$init$.apply(this);
this.listeners=Clazz.new_($I$(2,1));
this.progressWindow=progressIndicatorFrame;
this.alseqs=Clazz.array($I$(3), [seqs.length]);
var ds=Clazz.array($I$(3), [seqs.length]);
for (var i=0; i < seqs.length; i++) {
this.alseqs[i]=seqs[i];
if (seqs[i].getDatasetSequence$() != null ) {
ds[i]=seqs[i].getDatasetSequence$();
} else {
ds[i]=seqs[i];
}}
this.dataset=ds;
this.sfetcher=$I$(4).getSequenceFetcherSingleton$();
this.trimDsSeqs=$I$(5).getDefault$S$Z("TRIM_FETCHED_DATASET_SEQS", true);
if (sources == null ) {
this.setDatabaseSources$jalview_gui_FeatureSettings$Z(featureSettings, isNucleotide);
} else {
this.dbSources=sources;
}}, 1);

Clazz.newMeth(C$, 'setDatabaseSources$jalview_gui_FeatureSettings$Z',  function (featureSettings, forNucleotide) {
var defdb=null;
var selsources=Clazz.new_($I$(2,1));
if (forNucleotide) {
defdb=$I$(6).DNACODINGDBS;
} else {
defdb=$I$(6).PROTEINDBS;
}var srces=Clazz.new_($I$(2,1));
for (var ddb, $ddb = 0, $$ddb = defdb; $ddb<$$ddb.length&&((ddb=($$ddb[$ddb])),1);$ddb++) {
var srcesfordb=this.sfetcher.getSourceProxy$S(ddb);
if (srcesfordb != null ) {
for (var src, $src = srcesfordb.iterator$(); $src.hasNext$()&&((src=($src.next$())),1);) {
if (!srces.contains$O(src)) {
srces.addAll$java_util_Collection(srcesfordb);
}}
}}
srces.addAll$java_util_Collection(selsources);
this.dbSources=srces.toArray$OA(Clazz.array($I$(7), [srces.size$()]));
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA',  function (sequences) {
C$.c$$jalview_datamodel_SequenceIA$jalview_gui_IProgressIndicator$jalview_ws_seqfetcher_DbSourceProxyA$jalview_gui_FeatureSettings$Z.apply(this, [sequences, null, null, null, false]);
}, 1);

Clazz.newMeth(C$, 'addListener$jalview_ws_DBRefFetcher_FetchFinishedListenerI',  function (l) {
this.listeners.add$O(l);
});

Clazz.newMeth(C$, 'fetchDBRefs$Z',  function (waitTillFinished) {
if (waitTillFinished) {
this.run$();
} else {
Clazz.new_($I$(8,1).c$$Runnable,[this]).start$();
}});

Clazz.newMeth(C$, 'addSeqId$jalview_datamodel_SequenceI$S',  function (seq, key) {
key=key.toUpperCase$java_util_Locale($I$(9).ROOT);
var seqs;
if (this.seqRefs.containsKey$O(key)) {
seqs=this.seqRefs.get$O(key);
if (seqs != null  && !seqs.contains$O(seq) ) {
seqs.addElement$O(seq);
} else if (seqs == null ) {
seqs=Clazz.new_($I$(10,1));
seqs.addElement$O(seq);
}} else {
seqs=Clazz.new_($I$(10,1));
seqs.addElement$O(seq);
}this.seqRefs.put$O$O(key, seqs);
});

Clazz.newMeth(C$, 'run$',  function () {
if (this.dbSources == null ) {
throw Clazz.new_([$I$(12).getString$S("error.implementation_error_must_init_dbsources")],$I$(11,1).c$$S);
}var startTime=System.currentTimeMillis$();
if (this.progressWindow != null ) {
this.progressWindow.setProgressBar$S$J($I$(12).getString$S("status.fetching_db_refs"), startTime);
}try {
if ($I$(5).getDefault$S$Z("DBREFFETCH_USEPICR", false)) {
this.picrClient=Clazz.new_($I$(13,1)).getAccessionMapperPort$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Couldn\'t locate PICR service instance.\n");
e.printStackTrace$();
} else {
throw e;
}
}
var sdataset=Clazz.new_([$I$(14).asList$OA(this.dataset)],$I$(10,1).c$$java_util_Collection);
var warningMessages=Clazz.new_($I$(2,1));
this.featureDisplaySettings=null;
var db=0;
while (sdataset.size$() > 0 && db < this.dbSources.length ){
var maxqlen=1;
System.out.println$S("Verifying against " + this.dbSources[db].getDbName$());
var currSeqs=Clazz.array($I$(3), [sdataset.size$()]);
sdataset.copyInto$OA(currSeqs);
var queries=Clazz.new_($I$(10,1));
this.seqRefs=Clazz.new_($I$(15,1));
var seqIndex=0;
var dbsource=this.dbSources[db];
maxqlen=dbsource.getMaximumQueryCount$();
while (queries.size$() > 0 || seqIndex < currSeqs.length ){
if (queries.size$() > 0) {
var queryString=Clazz.new_($I$(16,1).c$$S,[""]);
var numq=0;
var nqSize=(maxqlen > queries.size$()) ? queries.size$() : maxqlen;
while (queries.size$() > 0 && numq < nqSize ){
var query=queries.elementAt$I(0);
if (dbsource.isValidReference$S(query)) {
queryString.append$S((numq == 0) ? "" : dbsource.getAccessionSeparator$());
queryString.append$S(query);
++numq;
}queries.removeElementAt$I(0);
}
var retrieved=null;
try {
if ($I$(17).isDebugEnabled$()) {
$I$(17,"debug$S",["Querying " + dbsource.getDbName$() + " with : '" + queryString.toString() + "'" ]);
}retrieved=dbsource.getSequenceRecords$S(queryString.toString());
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
ex.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var err = e$$;
{
Clazz.new_(["retrieving database references (" + queryString.toString() + ")" , err],$I$(18,1).c$$S$OutOfMemoryError);
}
} else {
throw e$$;
}
}
if (retrieved != null ) {
this.transferReferences$java_util_Vector$jalview_ws_seqfetcher_DbSourceProxy$jalview_datamodel_AlignmentI$Z$java_util_List(sdataset, dbsource, retrieved, this.trimDsSeqs, warningMessages);
}} else {
for (var i=0; (seqIndex < this.dataset.length) && (i < 50) ; seqIndex++, i++) {
var sequence=this.dataset[seqIndex];
var uprefs=$I$(19,"selectRefs$java_util_List$SA",[sequence.getDBRefs$(), Clazz.array(String, -1, [dbsource.getDbSource$()])]);
if (uprefs != null  && uprefs.size$() > 0 ) {
for (var j=0, n=uprefs.size$(); j < n; j++) {
var upref=uprefs.get$I(j);
this.addSeqId$jalview_datamodel_SequenceI$S(sequence, upref.getAccessionId$());
queries.addElement$O(upref.getAccessionId$().toUpperCase$java_util_Locale($I$(9).ROOT));
}
} else {
var possibleIds=$I$(20).compile$S("[A-Za-z0-9_]+");
var tokens=possibleIds.matcher$CharSequence(sequence.getName$());
var p=0;
while (tokens.find$I(p)){
var token=tokens.group$();
p=tokens.end$();
var presp=null;
if (this.picrClient != null ) {
try {
presp=this.picrClient.getUPIForAccession$S$S$SA$S$Z(token, null, this.picrClient.getMappedDatabaseNames$(), null, true);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Exception with Picr for '" + token + "'\n" );
e.printStackTrace$();
} else {
throw e;
}
}
}if (presp != null  && presp.length > 0 ) {
for (var id=0; id < presp.length; id++) {
}
System.out.println$S("Validated ID against PICR... (for what its worth):" + token);
this.addSeqId$jalview_datamodel_SequenceI$S(sequence, token);
queries.addElement$O(token.toUpperCase$java_util_Locale($I$(9).ROOT));
} else {
this.addSeqId$jalview_datamodel_SequenceI$S(sequence, token);
queries.addElement$O(token.toUpperCase$java_util_Locale($I$(9).ROOT));
}}
}}
}}
++db;
}
if (!warningMessages.isEmpty$()) {
var sb=Clazz.new_([warningMessages.size$() * 30],$I$(21,1).c$$I);
sb.append$S($I$(12).getString$S("label.your_sequences_have_been_verified"));
for (var msg, $msg = warningMessages.iterator$(); $msg.hasNext$()&&((msg=($msg.next$())),1);) {
sb.append$S(msg).append$S(C$.NEWLINE);
}
this.output.setText$S(sb.toString());
$I$(22,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[this.output, $I$(12).getString$S("label.sequences_updated"), 600, 300]);
}if (this.progressWindow != null ) {
this.progressWindow.setProgressBar$S$J($I$(12).getString$S("label.dbref_search_completed"), startTime);
}for (var listener, $listener = this.listeners.iterator$(); $listener.hasNext$()&&((listener=($listener.next$())),1);) {
listener.finished$();
}
});

Clazz.newMeth(C$, 'transferReferences$java_util_Vector$jalview_ws_seqfetcher_DbSourceProxy$jalview_datamodel_AlignmentI$Z$java_util_List',  function (sdataset, dbSourceProxy, retrievedAl, trimDatasetSeqs, warningMessages) {
if (retrievedAl == null  || retrievedAl.getHeight$() == 0 ) {
return false;
}var dbSource=dbSourceProxy.getDbName$();
var modified=false;
var retrieved=p$1.recoverDbSequences$jalview_datamodel_SequenceIA.apply(this, [retrievedAl.getSequencesArray$()]);
var sequence=null;
for (var retrievedSeq, $retrievedSeq = 0, $$retrievedSeq = retrieved; $retrievedSeq<$$retrievedSeq.length&&((retrievedSeq=($$retrievedSeq[$retrievedSeq])),1);$retrievedSeq++) {
var sequenceMatches=Clazz.new_($I$(10,1));
var entryRefs=$I$(19,"selectRefs$java_util_List$SA",[retrievedSeq.getDBRefs$(), Clazz.array(String, -1, [dbSource])]);
if (entryRefs == null ) {
System.err.println$S("Dud dbSource string ? no entryrefs selected for " + dbSource + " on " + retrievedSeq.getName$() );
continue;
}for (var j=0, n=entryRefs.size$(); j < n; j++) {
var ref=entryRefs.get$I(j);
var accessionId=ref.getAccessionId$();
if (this.seqRefs.containsKey$O(accessionId.toUpperCase$java_util_Locale($I$(9).ROOT))) {
var seqs=this.seqRefs.get$O(accessionId);
for (var jj=0; jj < seqs.size$(); jj++) {
sequence=seqs.elementAt$I(jj);
if (!sequenceMatches.contains$O(sequence)) {
sequenceMatches.addElement$O(sequence);
}}
}}
if (sequenceMatches.isEmpty$()) {
var e=this.seqRefs.keys$();
while (e.hasMoreElements$()){
var sqs=this.seqRefs.get$O(e.nextElement$());
if (sqs != null  && sqs.size$() > 0 ) {
var sqe=sqs.elements$();
while (sqe.hasMoreElements$()){
sequenceMatches.addElement$O(sqe.nextElement$());
}
}}
}if (sequenceMatches.size$() > 0) {
p$1.addFeatureSettings$jalview_ws_seqfetcher_DbSourceProxy.apply(this, [dbSourceProxy]);
}var retrievedSeqString=retrievedSeq.getSequenceAsString$();
var entrySeq=retrievedSeqString.toUpperCase$java_util_Locale($I$(9).ROOT);
for (var m=0; m < sequenceMatches.size$(); m++) {
sequence=sequenceMatches.elementAt$I(m);
var updateRefFrame=sequence.getDBRefs$() == null  || sequence.getDBRefs$().size$() == 0 ;
var mp;
var sequenceStart=sequence.getStart$();
var remoteEnclosesLocal=false;
var nonGapped=$I$(23,"extractGaps$S$S",["-. ", sequence.getSequenceAsString$()]).toUpperCase$java_util_Locale($I$(9).ROOT);
var absStart=entrySeq.indexOf$S(nonGapped);
if (absStart == -1) {
absStart=nonGapped.indexOf$S(entrySeq);
if (absStart == -1) {
continue;
}var msg=sequence.getName$() + " has " + absStart + " prefixed residues compared to " + retrievedSeq.getName$() ;
this.addWarningMessage$java_util_List$S(warningMessages, msg);
mp=Clazz.new_([null, Clazz.array(Integer.TYPE, -1, [sequenceStart + absStart, sequenceStart + absStart + entrySeq.length$()  - 1]), Clazz.array(Integer.TYPE, -1, [retrievedSeq.getStart$(), retrievedSeq.getStart$() + entrySeq.length$() - 1]), 1, 1],$I$(24,1).c$$jalview_datamodel_SequenceI$IA$IA$I$I);
updateRefFrame=false;
} else {
remoteEnclosesLocal=true;
mp=null;
if (updateRefFrame) {
var startShift=absStart - sequenceStart + 1;
if (startShift != 0) {
modified=!!(modified|(sequence.getFeatures$().shiftFeatures$I$I(1, startShift)));
}}}System.out.println$S("Adding dbrefs to " + sequence.getName$() + " from " + dbSource + " sequence : " + retrievedSeq.getName$() );
sequence.transferAnnotation$jalview_datamodel_SequenceI$jalview_datamodel_Mapping(retrievedSeq, mp);
absStart+=retrievedSeq.getStart$();
var absEnd=absStart + nonGapped.length$() - 1;
if (!trimDatasetSeqs) {
if (!retrievedSeqString.equals$O(sequence.getSequenceAsString$()) && remoteEnclosesLocal ) {
sequence.setSequence$S(retrievedSeqString);
modified=true;
this.addWarningMessage$java_util_List$S(warningMessages, "Sequence for " + sequence.getName$() + " expanded from " + retrievedSeq.getName$() );
}if (sequence.getStart$() != retrievedSeq.getStart$()) {
sequence.setStart$I(retrievedSeq.getStart$());
modified=true;
if (absStart != sequenceStart) {
this.addWarningMessage$java_util_List$S(warningMessages, "Start/end position for " + sequence.getName$() + " updated from " + retrievedSeq.getName$() );
}}}if (updateRefFrame) {
if (trimDatasetSeqs) {
if (sequence.getStart$() != absStart || sequence.getEnd$() != absEnd ) {
sequence.setStart$I(absStart);
sequence.setEnd$I(absEnd);
modified=true;
this.addWarningMessage$java_util_List$S(warningMessages, "Start/end for " + sequence.getName$() + " updated from " + retrievedSeq.getName$() );
}}for (var alsq=0; alsq < this.alseqs.length; alsq++) {
if (this.alseqs[alsq].getDatasetSequence$() === sequence ) {
var ngAlsq=$I$(23,"extractGaps$S$S",["-. ", this.alseqs[alsq].getSequenceAsString$()]).toUpperCase$java_util_Locale($I$(9).ROOT);
var oldstrt=this.alseqs[alsq].getStart$();
this.alseqs[alsq].setStart$I(sequence.getSequenceAsString$().toUpperCase$java_util_Locale($I$(9).ROOT).indexOf$S(ngAlsq) + sequence.getStart$());
if (oldstrt != this.alseqs[alsq].getStart$()) {
this.alseqs[alsq].setEnd$I(ngAlsq.length$() + this.alseqs[alsq].getStart$() - 1);
modified=true;
}}}
}sdataset.remove$O(sequence);
}
}
return modified;
});

Clazz.newMeth(C$, 'addFeatureSettings$jalview_ws_seqfetcher_DbSourceProxy',  function (dbSourceProxy) {
var fsettings=dbSourceProxy.getFeatureColourScheme$();
if (fsettings != null ) {
if (this.featureDisplaySettings == null ) {
this.featureDisplaySettings=Clazz.new_($I$(25,1));
}this.featureDisplaySettings.put$O$O(dbSourceProxy.getDbName$(), fsettings);
}}, p$1);

Clazz.newMeth(C$, 'getFeatureSettingsModels$',  function () {
return this.featureDisplaySettings == null  ? $I$(14,"asList$OA",[Clazz.array($I$(26), [0])]) : $I$(14,"asList$OA",[this.featureDisplaySettings.values$().toArray$OA(Clazz.array($I$(26), [1]))]);
});

Clazz.newMeth(C$, 'addWarningMessage$java_util_List$S',  function (messageList, msg) {
if (!messageList.contains$O(msg)) {
messageList.add$O(msg);
}});

Clazz.newMeth(C$, 'recoverDbSequences$jalview_datamodel_SequenceIA',  function (sequencesArray) {
var n;
if (sequencesArray == null  || (n=sequencesArray.length) == 0 ) return sequencesArray;
var nseq=Clazz.new_($I$(2,1));
for (var i=0; i < n; i++) {
nseq.add$O(sequencesArray[i]);
var dbr=sequencesArray[i].getDBRefs$();
var map=null;
if (dbr != null ) {
for (var r=0, rn=dbr.size$(); r < rn; r++) {
if ((map=dbr.get$I(r).getMap$()) != null ) {
if (map.getTo$() != null  && !nseq.contains$O(map.getTo$()) ) {
nseq.add$O(map.getTo$());
}}}
}}
if (nseq.size$() > 0) {
return nseq.toArray$OA(Clazz.array($I$(3), [nseq.size$()]));
}return sequencesArray;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.NEWLINE=System.lineSeparator$();
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DBRefFetcher, "FetchFinishedListenerI", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
