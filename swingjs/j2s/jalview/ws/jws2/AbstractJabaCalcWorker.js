(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),I$=[[0,'jalview.ws.jws2.dm.AAConSettings','jalview.ws.jws2.JabaParamStore','java.util.ArrayList','compbio.metadata.Option','StringBuffer','compbio.metadata.JobStatus','Thread','jalview.bin.Cache','java.util.HashMap','jalview.analysis.SeqsetUtils','compbio.data.sequence.FastaSequence','jalview.schemes.ResidueProperties','jalview.analysis.AlignSeq','jalview.util.Comparison']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractJabaCalcWorker", null, 'jalview.workers.AlignCalcWorker');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.service=null;
this.preset=null;
this.$arguments=null;
this.guiProgress=null;
this.submitGaps=false;
this.filterNonStandardResidues=false;
this.alignedSeqs=false;
this.nucleotidesAllowed=false;
this.proteinAllowed=false;
this.bySequence=false;
this.seqNames=null;
this.gapMap=null;
this.realw=0;
this.start=0;
this.end=0;
this.rslt=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.submitGaps=true;
this.filterNonStandardResidues=true;
this.alignedSeqs=true;
this.nucleotidesAllowed=false;
this.proteinAllowed=false;
this.bySequence=false;
this.rslt="JOB NOT DEFINED";
}, 1);

Clazz.newMeth(C$, 'initViewportParams$', function () {
if (this.getCalcId$() != null ) {
(this.alignViewport).setCalcIdSettingsFor$S$jalview_ws_params_AutoCalcSetting$Z(this.getCalcId$(), Clazz.new_($I$(1).c$$Z$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List,[true, this.service, this.preset, (this.$arguments != null ) ? $I$(2).getJwsArgsfromJaba$java_util_List(this.$arguments) : null]), true);
}});

Clazz.newMeth(C$, 'getPreset$', function () {
return this.preset;
});

Clazz.newMeth(C$, 'getArguments$', function () {
return this.$arguments;
});

Clazz.newMeth(C$, 'updateParameters$jalview_ws_params_WsParamSetI$java_util_List', function (newpreset, newarguments) {
this.preset=newpreset;
this.$arguments=newarguments;
this.calcMan.startWorker$jalview_api_AlignCalcWorkerI(this);
this.initViewportParams$();
});

Clazz.newMeth(C$, 'getJabaArguments$', function () {
var newargs=Clazz.new_($I$(3));
if (this.preset != null  && Clazz.instanceOf(this.preset, "jalview.ws.jws2.dm.JabaWsParamSet") ) {
newargs.addAll$java_util_Collection((this.preset).getjabaArguments$());
}if (this.$arguments != null  && this.$arguments.size$() > 0 ) {
for (var rg, $rg = this.$arguments.iterator$(); $rg.hasNext$()&&((rg=($rg.next$())),1);) {
if (Clazz.getClass($I$(4)).isAssignableFrom$Class(rg.getClass$())) {
newargs.add$TE(rg);
}}
}return newargs;
});

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel', function (alignViewport, alignPanel) {
C$.superclazz.c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel.apply(this, [alignViewport, alignPanel]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List', function (service, alignFrame, preset, paramset) {
C$.c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel.apply(this, [alignFrame.getCurrentView$(), alignFrame.alignPanel]);
this.guiProgress=alignFrame;
this.preset=preset;
this.$arguments=paramset;
this.service=service;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (!this.hasService$()) {
return;
}var progressId=-1;
var serverErrorsLeft=3;
var msg=Clazz.new_($I$(5));
try {
if (this.checkDone$()) {
return;
}var seqs=this.getInputSequences$jalview_datamodel_AlignmentI$jalview_datamodel_AnnotatedCollectionI(this.alignViewport.getAlignment$(), this.bySequence ? this.alignViewport.getSelectionGroup$() : null);
if (seqs == null  || !this.checkValidInputSeqs$Z$java_util_List(true, seqs) ) {
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
return;
}var aa=this.alignViewport.getAlignment$().getAlignmentAnnotation$();
if (this.guiProgress != null ) {
this.guiProgress.setProgressBar$S$J("JABA " + this.getServiceActionText$(), progressId=System.currentTimeMillis$());
}this.rslt=this.submitToService$java_util_List(seqs);
if (this.guiProgress != null ) {
this.guiProgress.registerHandler$J$jalview_gui_IProgressIndicatorHandler(progressId, ((P$.AbstractJabaCalcWorker$1||
(function(){var C$=Clazz.newClass(P$, "AbstractJabaCalcWorker$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.gui.IProgressIndicatorHandler', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['cancelActivity$J','cancelActivity$'], function (id) {
this.b$['jalview.ws.jws2.AbstractJabaCalcWorker'].cancelCurrentJob$.apply(this.b$['jalview.ws.jws2.AbstractJabaCalcWorker'], []);
return true;
});

Clazz.newMeth(C$, 'canCancel$', function () {
return true;
});
})()
), Clazz.new_(P$.AbstractJabaCalcWorker$1.$init$, [this, null])));
}var finished=false;
var rpos=0;
do {
var status=this.getJobStatus$S(this.rslt);
if (status.equals$O($I$(6).FINISHED)) {
finished=true;
}if (this.calcMan.isPending$jalview_api_AlignCalcWorkerI(this) && this.isInteractiveUpdate$() ) {
finished=true;
try {
if (this.cancelJob$S(this.rslt)) {
System.err.println$S("Cancelled AACon job: " + this.rslt);
} else {
System.err.println$S("FAILED TO CANCEL AACon job: " + this.rslt);
}} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
} else {
throw x;
}
}
this.rslt="CANCELLED JOB";
return;
}var cpos;
var stats=null;
do {
cpos=rpos;
var retry=false;
do {
try {
stats=this.pullExecStatistics$S$J(this.rslt, rpos);
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
if (x.getMessage$().contains$CharSequence("Position in a file could not be negative!")) {
stats=null;
} else {
if (--serverErrorsLeft > 0) {
retry=true;
try {
$I$(7).sleep$J(200);
} catch (q) {
if (Clazz.exceptionOf(q,"InterruptedException")){
} else {
throw q;
}
}
;} else {
throw x;
}}} else {
throw x;
}
}
} while (retry);
if (stats != null ) {
System.out.print$S(stats.getChunk$());
msg.append$O(stats);
rpos=stats.getNextPosition$();
}} while (stats != null  && rpos > cpos );
if (!finished && status.equals$O($I$(6).FAILED) ) {
try {
$I$(7).sleep$J(200);
} catch (x) {
if (Clazz.exceptionOf(x,"InterruptedException")){
} else {
throw x;
}
}
;}} while (!finished);
if (serverErrorsLeft > 0) {
try {
$I$(7).sleep$J(200);
} catch (x) {
if (Clazz.exceptionOf(x,"InterruptedException")){
} else {
throw x;
}
}
if (this.collectAnnotationResultsFor$S(this.rslt)) {
$I$(8).log.debug$O("Updating result annotation from Job " + this.rslt + " at " + this.service.getUri$() );
this.updateResultAnnotation$Z(true);
this.ap.adjustAnnotationHeight$();
}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"compbio.metadata.JobSubmissionException")){
var x = e$$;
{
System.err.println$S("submission error with " + this.getServiceActionText$() + " :" );
x.printStackTrace$();
this.calcMan.disableWorker$jalview_api_AlignCalcWorkerI(this);
}
} else if (Clazz.exceptionOf(e$$,"compbio.metadata.ResultNotAvailableException")){
var x = e$$;
{
System.err.println$S("collection error:\nJob ID: " + this.rslt);
x.printStackTrace$();
this.calcMan.disableWorker$jalview_api_AlignCalcWorkerI(this);
}
} else if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var error = e$$;
{
this.calcMan.disableWorker$jalview_api_AlignCalcWorkerI(this);
this.ap.raiseOOMWarning$(this.getServiceActionText$(), error);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var x = e$$;
{
this.calcMan.disableWorker$jalview_api_AlignCalcWorkerI(this);
System.err.println$S("Blacklisting worker due to unexpected exception:");
x.printStackTrace$();
}
} else {
throw e$$;
}
} finally {
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
if (this.ap != null ) {
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
if (this.guiProgress != null  && progressId != -1 ) {
this.guiProgress.setProgressBar$S$J("", progressId);
}this.ap.paintAlignment$Z$Z(false, false);
}if (msg.length$() > 0) {
}}
});

Clazz.newMeth(C$, 'cancelCurrentJob$', function () {
try {
var id=this.rslt;
if (this.cancelJob$S(this.rslt)) {
System.err.println$S("Cancelled job " + id);
} else {
System.err.println$S("Job " + id + " couldn't be cancelled." );
}} catch (q) {
if (Clazz.exceptionOf(q,"Exception")){
q.printStackTrace$();
} else {
throw q;
}
}
});

Clazz.newMeth(C$, 'getInputSequences$jalview_datamodel_AlignmentI$jalview_datamodel_AnnotatedCollectionI', function (alignment, inputSeqs) {
if (alignment == null  || alignment.getWidth$() <= 0  || alignment.getSequences$() == null   || alignment.isNucleotide$()  ? !this.nucleotidesAllowed : !this.proteinAllowed) {
return null;
}if (inputSeqs == null  || inputSeqs.getWidth$() <= 0  || inputSeqs.getSequences$() == null   || inputSeqs.getSequences$().size$() < 1 ) {
inputSeqs=alignment;
}var seqs=Clazz.new_($I$(3));
var minlen=10;
var ln=-1;
if (this.bySequence) {
this.seqNames=Clazz.new_($I$(9));
}this.gapMap=Clazz.array(Boolean.TYPE, [0]);
this.start=inputSeqs.getStartRes$();
this.end=inputSeqs.getEndRes$();
for (var sq, $sq = (inputSeqs.getSequences$()).iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
if (this.bySequence ? sq.findPosition$I(this.end + 1) - sq.findPosition$I(this.start + 1) > minlen - 1 : sq.getEnd$() - sq.getStart$() > minlen - 1) {
var newname=$I$(10).unique_name$I(seqs.size$() + 1);
if (this.seqNames != null ) {
this.seqNames.put$TK$TV(newname, sq);
}var seq;
if (this.submitGaps) {
seqs.add$TE(seq=Clazz.new_($I$(11).c$$S$S,[newname, sq.getSequenceAsString$()]));
if (this.gapMap == null  || this.gapMap.length < seq.getSequence$().length$() ) {
var tg=this.gapMap;
this.gapMap=Clazz.array(Boolean.TYPE, [seq.getLength$()]);
System.arraycopy$O$I$O$I$I(tg, 0, this.gapMap, 0, tg.length);
for (var p=tg.length; p < this.gapMap.length; p++) {
this.gapMap[p]=false;
}
}for (var apos, $apos = 0, $$apos = sq.gapMap$(); $apos<$$apos.length&&((apos=($$apos[$apos])),1);$apos++) {
var sqc=sq.getCharAt$I(apos);
if (!this.filterNonStandardResidues || (sq.isProtein$() ? $I$(12).aaIndex[sqc.$c()] < 20 : $I$(12).nucleotideIndex[sqc.$c()] < 5) ) {
this.gapMap[apos]=true;
};}
} else {
seqs.add$TE(seq=Clazz.new_($I$(11).c$$S$S,[newname, $I$(13).extractGaps$S$S($I$(14).GapChars, sq.getSequenceAsString$I$I(this.start, this.end + 1))]));
}if (seq.getSequence$().length$() > ln) {
ln=seq.getSequence$().length$();
}}}
if (this.alignedSeqs && this.submitGaps ) {
this.realw=0;
for (var i=0; i < this.gapMap.length; i++) {
if (this.gapMap[i]) {
this.realw++;
}}
for (var p=0; p < seqs.size$(); p++) {
var sq=seqs.get$I(p);
var l=sq.getSequence$().length$();
var padded=Clazz.array(Character.TYPE, [this.realw]);
var orig=sq.getSequence$().toCharArray$();
for (var i=0, pp=0; i < this.realw; pp++) {
if (this.gapMap[pp]) {
if (orig.length > pp) {
padded[i++]=orig[pp];
} else {
padded[i++]="-";
}}}
seqs.set$I$TE(p, Clazz.new_($I$(11).c$$S$S,[sq.getId$(),  String.instantialize(padded)]));
}
}return seqs;
});

Clazz.newMeth(C$, 'updateAnnotation$', function () {
this.updateResultAnnotation$Z(false);
});

Clazz.newMeth(C$, 'checkDone$', function () {
this.calcMan.notifyStart$jalview_api_AlignCalcWorkerI(this);
this.ap.paintAlignment$Z$Z(false, false);
while (!this.calcMan.notifyWorking$jalview_api_AlignCalcWorkerI(this)){
if (this.calcMan.isWorking$jalview_api_AlignCalcWorkerI(this)) {
return true;
}try {
if (this.ap != null ) {
this.ap.paintAlignment$Z$Z(false, false);
}$I$(7).sleep$J(200);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}
if (this.alignViewport.isClosed$()) {
this.abortAndDestroy$();
return true;
}return false;
});

Clazz.newMeth(C$, 'updateOurAnnots$java_util_List', function (ourAnnot) {
var our=this.ourAnnots;
this.ourAnnots=ourAnnot;
var alignment=this.alignViewport.getAlignment$();
if (our != null ) {
if (our.size$() > 0) {
for (var an, $an = our.iterator$(); $an.hasNext$()&&((an=($an.next$())),1);) {
if (!this.ourAnnots.contains$O(an)) {
alignment.deleteAnnotation$jalview_datamodel_AlignmentAnnotation(an);
}}
}our.clear$();
this.ap.adjustAnnotationHeight$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
