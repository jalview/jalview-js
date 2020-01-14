(function(){var P$=Clazz.newPackage("jalview.ws"),p$1={},I$=[[0,'jalview.gui.CutAndPasteTransfer','java.util.ArrayList','jalview.datamodel.SequenceI','jalview.gui.SequenceFetcher','jalview.bin.Cache','jalview.datamodel.DBRefSource','jalview.ws.seqfetcher.DbSourceProxy','Thread','java.util.Vector','Error','jalview.util.MessageManager','uk.ac.ebi.www.picr.AccessionMappingService.AccessionMapperServiceLocator','java.util.Arrays','java.util.Hashtable','StringBuffer','jalview.gui.OOMWarning','jalview.util.DBRefUtils','java.util.StringTokenizer','StringBuilder','jalview.gui.Desktop','jalview.analysis.AlignSeq','jalview.datamodel.Mapping']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DBRefFetcher", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Runnable');
C$.NEWLINE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.NEWLINE=System.lineSeparator$();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dataset=null;
this.progressWindow=null;
this.output=null;
this.running=false;
this.picrClient=null;
this.seqRefs=null;
this.dbSources=null;
this.sfetcher=null;
this.listeners=null;
this.alseqs=null;
this.trimDsSeqs=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.output=Clazz.new_($I$(1));
this.running=false;
this.picrClient=null;
this.trimDsSeqs=true;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA$jalview_gui_IProgressIndicator$jalview_ws_seqfetcher_DbSourceProxyA$jalview_gui_FeatureSettings$Z', function (seqs, progressIndicatorFrame, sources, featureSettings, isNucleotide) {
C$.$init$.apply(this);
this.listeners=Clazz.new_($I$(2));
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

Clazz.newMeth(C$, 'setDatabaseSources$jalview_gui_FeatureSettings$Z', function (featureSettings, forNucleotide) {
var defdb=null;
var selsources=Clazz.new_($I$(2));
if (forNucleotide) {
defdb=$I$(6).DNACODINGDBS;
} else {
defdb=$I$(6).PROTEINDBS;
}var srces=Clazz.new_($I$(2));
for (var ddb, $ddb = 0, $$ddb = defdb; $ddb<$$ddb.length&&((ddb=($$ddb[$ddb])),1);$ddb++) {
var srcesfordb=this.sfetcher.getSourceProxy$S(ddb);
if (srcesfordb != null ) {
for (var src, $src = srcesfordb.iterator$(); $src.hasNext$()&&((src=($src.next$())),1);) {
if (!srces.contains$O(src)) {
srces.addAll$java_util_Collection(srcesfordb);
}}
}}
srces.addAll$java_util_Collection(selsources);
this.dbSources=srces.toArray$TTA(Clazz.array($I$(7), [srces.size$()]));
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA', function (sequences) {
C$.c$$jalview_datamodel_SequenceIA$jalview_gui_IProgressIndicator$jalview_ws_seqfetcher_DbSourceProxyA$jalview_gui_FeatureSettings$Z.apply(this, [sequences, null, null, null, false]);
}, 1);

Clazz.newMeth(C$, 'addListener$jalview_ws_DBRefFetcher_FetchFinishedListenerI', function (l) {
this.listeners.add$TE(l);
});

Clazz.newMeth(C$, 'fetchDBRefs$Z', function (waitTillFinished) {
var thread=Clazz.new_($I$(8).c$$Runnable,[this]);
thread.start$();
this.running=true;
if (waitTillFinished) {
while (this.running){
try {
$I$(8).sleep$J(500);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}
}});

Clazz.newMeth(C$, 'addSeqId$jalview_datamodel_SequenceI$S', function (seq, key) {
key=key.toUpperCase$();
var seqs;
if (this.seqRefs.containsKey$O(key)) {
seqs=this.seqRefs.get$O(key);
if (seqs != null  && !seqs.contains$O(seq) ) {
seqs.addElement$TE(seq);
} else if (seqs == null ) {
seqs=Clazz.new_($I$(9));
seqs.addElement$TE(seq);
}} else {
seqs=Clazz.new_($I$(9));
seqs.addElement$TE(seq);
}this.seqRefs.put$TK$TV(key, seqs);
});

Clazz.newMeth(C$, 'run$', function () {
if (this.dbSources == null ) {
throw Clazz.new_($I$(10).c$$S,[$I$(11).getString$S("error.implementation_error_must_init_dbsources")]);
}this.running=true;
var startTime=System.currentTimeMillis$();
if (this.progressWindow != null ) {
this.progressWindow.setProgressBar$S$J($I$(11).getString$S("status.fetching_db_refs"), startTime);
}try {
if ($I$(5).getDefault$S$Z("DBREFFETCH_USEPICR", false)) {
this.picrClient=Clazz.new_($I$(12)).getAccessionMapperPort$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Couldn\'t locate PICR service instance.\n");
e.printStackTrace$();
} else {
throw e;
}
}
var sdataset=Clazz.new_($I$(9).c$$java_util_Collection,[$I$(13).asList$TTA(this.dataset)]);
var warningMessages=Clazz.new_($I$(2));
var db=0;
while (sdataset.size$() > 0 && db < this.dbSources.length ){
var maxqlen=1;
System.out.println$S("Verifying against " + this.dbSources[db].getDbName$());
var currSeqs=Clazz.array($I$(3), [sdataset.size$()]);
sdataset.copyInto$OA(currSeqs);
var queries=Clazz.new_($I$(9));
this.seqRefs=Clazz.new_($I$(14));
var seqIndex=0;
var dbsource=this.dbSources[db];
maxqlen=dbsource.getMaximumQueryCount$();
while (queries.size$() > 0 || seqIndex < currSeqs.length ){
if (queries.size$() > 0) {
var queryString=Clazz.new_($I$(15).c$$S,[""]);
var numq=0;
var nqSize=(maxqlen > queries.size$()) ? queries.size$() : maxqlen;
while (queries.size$() > 0 && numq < nqSize ){
var query=queries.elementAt$I(0);
if (dbsource.isValidReference$S(query)) {
queryString.append$S((numq == 0) ? "" : dbsource.getAccessionSeparator$());
queryString.append$S(query);
numq++;
}queries.removeElementAt$I(0);
}
var retrieved=null;
try {
if ($I$(5).log.isDebugEnabled$()) {
$I$(5).log.debug$O("Querying " + dbsource.getDbName$() + " with : '" + queryString.toString() + "'" );
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
Clazz.new_($I$(16).c$$S$OutOfMemoryError,["retrieving database references (" + queryString.toString() + ")" , err]);
}
} else {
throw e$$;
}
}
if (retrieved != null ) {
this.transferReferences$java_util_Vector$S$jalview_datamodel_AlignmentI$Z$java_util_List(sdataset, dbsource.getDbSource$(), retrieved, this.trimDsSeqs, warningMessages);
}} else {
for (var i=0; (seqIndex < this.dataset.length) && (i < 50) ; seqIndex++, i++) {
var sequence=this.dataset[seqIndex];
var uprefs=$I$(17).selectRefs$java_util_List$SA(sequence.getDBRefs$(), Clazz.array(String, -1, [dbsource.getDbSource$()]));
if (uprefs != null  && uprefs.size$() > 0 ) {
for (var j=0, n=uprefs.size$(); j < n; j++) {
var upref=uprefs.get$I(j);
this.addSeqId$jalview_datamodel_SequenceI$S(sequence, upref.getAccessionId$());
queries.addElement$TE(upref.getAccessionId$().toUpperCase$());
}
} else {
var st=Clazz.new_($I$(18).c$$S$S,[sequence.getName$(), "|"]);
while (st.hasMoreTokens$()){
var token=st.nextToken$();
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
queries.addElement$TE(token.toUpperCase$());
} else {
this.addSeqId$jalview_datamodel_SequenceI$S(sequence, token);
queries.addElement$TE(token.toUpperCase$());
}}
}}
}}
db++;
}
if (!warningMessages.isEmpty$()) {
var sb=Clazz.new_($I$(19).c$$I,[warningMessages.size$() * 30]);
sb.append$S($I$(11).getString$S("label.your_sequences_have_been_verified"));
for (var msg, $msg = warningMessages.iterator$(); $msg.hasNext$()&&((msg=($msg.next$())),1);) {
sb.append$S(msg).append$S(C$.NEWLINE);
}
this.output.setText$S(sb.toString());
$I$(20).addInternalFrame$javax_swing_JInternalFrame$S$I$I(this.output, $I$(11).getString$S("label.sequences_updated"), 600, 300);
}if (this.progressWindow != null ) {
this.progressWindow.setProgressBar$S$J($I$(11).getString$S("label.dbref_search_completed"), startTime);
}for (var listener, $listener = this.listeners.iterator$(); $listener.hasNext$()&&((listener=($listener.next$())),1);) {
listener.finished$();
}
this.running=false;
});

Clazz.newMeth(C$, 'transferReferences$java_util_Vector$S$jalview_datamodel_AlignmentI$Z$java_util_List', function (sdataset, dbSource, retrievedAl, trimDatasetSeqs, warningMessages) {
if (retrievedAl == null  || retrievedAl.getHeight$() == 0 ) {
return false;
}var modified=false;
var retrieved=p$1.recoverDbSequences$jalview_datamodel_SequenceIA.apply(this, [retrievedAl.getSequencesArray$()]);
var sequence=null;
for (var retrievedSeq, $retrievedSeq = 0, $$retrievedSeq = retrieved; $retrievedSeq<$$retrievedSeq.length&&((retrievedSeq=($$retrievedSeq[$retrievedSeq])),1);$retrievedSeq++) {
var sequenceMatches=Clazz.new_($I$(9));
var entryRefs=$I$(17).selectRefs$java_util_List$SA(retrievedSeq.getDBRefs$(), Clazz.array(String, -1, [dbSource]));
if (entryRefs == null ) {
System.err.println$S("Dud dbSource string ? no entryrefs selected for " + dbSource + " on " + retrievedSeq.getName$() );
continue;
}for (var j=0, n=entryRefs.size$(); j < n; j++) {
var ref=entryRefs.get$I(j);
var accessionId=ref.getAccessionId$();
if (this.seqRefs.containsKey$O(accessionId.toUpperCase$())) {
var seqs=this.seqRefs.get$O(accessionId);
for (var jj=0; jj < seqs.size$(); jj++) {
sequence=seqs.elementAt$I(jj);
if (!sequenceMatches.contains$O(sequence)) {
sequenceMatches.addElement$TE(sequence);
}}
}}
if (sequenceMatches.isEmpty$()) {
var e=this.seqRefs.keys$();
while (e.hasMoreElements$()){
var sqs=this.seqRefs.get$O(e.nextElement$());
if (sqs != null  && sqs.size$() > 0 ) {
var sqe=sqs.elements$();
while (sqe.hasMoreElements$()){
sequenceMatches.addElement$TE(sqe.nextElement$());
}
}}
}var retrievedSeqString=retrievedSeq.getSequenceAsString$();
var entrySeq=retrievedSeqString.toUpperCase$();
for (var m=0; m < sequenceMatches.size$(); m++) {
sequence=sequenceMatches.elementAt$I(m);
var updateRefFrame=sequence.getDBRefs$() == null  || sequence.getDBRefs$().size$() == 0 ;
var mp;
var sequenceStart=sequence.getStart$();
var remoteEnclosesLocal=false;
var nonGapped=$I$(21).extractGaps$S$S("-. ", sequence.getSequenceAsString$()).toUpperCase$();
var absStart=entrySeq.indexOf$S(nonGapped);
if (absStart == -1) {
absStart=nonGapped.indexOf$S(entrySeq);
if (absStart == -1) {
continue;
}var msg=sequence.getName$() + " has " + absStart + " prefixed residues compared to " + retrievedSeq.getName$() ;
this.addWarningMessage$java_util_List$S(warningMessages, msg);
mp=Clazz.new_($I$(22).c$$jalview_datamodel_SequenceI$IA$IA$I$I,[null, Clazz.array(Integer.TYPE, -1, [sequenceStart + absStart, sequenceStart + absStart + entrySeq.length$()  - 1]), Clazz.array(Integer.TYPE, -1, [retrievedSeq.getStart$(), retrievedSeq.getStart$() + entrySeq.length$() - 1]), 1, 1]);
updateRefFrame=false;
} else {
remoteEnclosesLocal=true;
mp=null;
if (updateRefFrame) {
var startShift=absStart - sequenceStart + 1;
if (startShift != 0) {
modified|=sequence.getFeatures$().shiftFeatures$I$I(1, startShift);
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
var ngAlsq=$I$(21).extractGaps$S$S("-. ", this.alseqs[alsq].getSequenceAsString$()).toUpperCase$();
var oldstrt=this.alseqs[alsq].getStart$();
this.alseqs[alsq].setStart$I(sequence.getSequenceAsString$().toUpperCase$().indexOf$S(ngAlsq) + sequence.getStart$());
if (oldstrt != this.alseqs[alsq].getStart$()) {
this.alseqs[alsq].setEnd$I(ngAlsq.length$() + this.alseqs[alsq].getStart$() - 1);
modified=true;
}}}
}sdataset.remove$O(sequence);
}
}
return modified;
});

Clazz.newMeth(C$, 'addWarningMessage$java_util_List$S', function (messageList, msg) {
if (!messageList.contains$O(msg)) {
messageList.add$TE(msg);
}});

Clazz.newMeth(C$, 'recoverDbSequences$jalview_datamodel_SequenceIA', function (sequencesArray) {
var n;
if (sequencesArray == null  || (n=sequencesArray.length) == 0 ) return sequencesArray;
var nseq=Clazz.new_($I$(2));
for (var i=0; i < n; i++) {
nseq.add$TE(sequencesArray[i]);
var dbr=sequencesArray[i].getDBRefs$();
var map=null;
if (dbr != null ) {
for (var r=0, rn=dbr.size$(); r < rn; r++) {
if ((map=dbr.get$I(r).getMap$()) != null ) {
if (map.getTo$() != null  && !nseq.contains$O(map.getTo$()) ) {
nseq.add$TE(map.getTo$());
}}}
}}
if (nseq.size$() > 0) {
return nseq.toArray$TTA(Clazz.array($I$(3), [nseq.size$()]));
}return sequencesArray;
}, p$1);
;
(function(){var C$=Clazz.newInterface(P$.DBRefFetcher, "FetchFinishedListenerI", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
