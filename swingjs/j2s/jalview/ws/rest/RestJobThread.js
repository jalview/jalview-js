(function(){var P$=Clazz.newPackage("jalview.ws.rest"),p$1={},I$=[[0,'jalview.ws.rest.RestJob',['jalview.ws.rest.RestJobThread','.Stage'],'StringBuffer','org.apache.http.client.methods.HttpPost','org.apache.http.entity.mime.MultipartEntity','org.apache.http.entity.mime.HttpMultipartMode','org.apache.http.client.methods.HttpGet','org.apache.http.impl.client.DefaultHttpClient','org.apache.http.protocol.BasicHttpContext','jalview.bin.Cache','jalview.ws.rest.HttpResultSet','org.apache.http.util.EntityUtils','jalview.gui.WebserviceInfo','java.util.ArrayList','jalview.datamodel.SequenceI','jalview.datamodel.AlignmentOrder','jalview.datamodel.AlignmentAnnotation','jalview.datamodel.SequenceGroup','java.util.Hashtable',['jalview.ws.rest.RestJobThread','.AddDataTo'],'jalview.datamodel.Alignment','Error','jalview.util.MessageManager','jalview.datamodel.Annotation','jalview.gui.AlignFrame','jalview.gui.PaintRefresher','jalview.gui.Desktop']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RestJobThread", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.ws.AWSThread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.restClient=null;
this.warnings=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_rest_RestClient', function (restClient) {
C$.superclazz.c$$jalview_gui_AlignFrame$jalview_gui_WebserviceInfo$jalview_datamodel_AlignmentView$S.apply(this, [restClient.af, null, restClient._input, restClient.service.postUrl]);
C$.$init$.apply(this);
this.restClient=restClient;
if (!restClient.service.isHseparable$()) {
this.jobs=Clazz.array($I$(1), [1]);
this.jobs[0]=Clazz.new_($I$(1).c$$I$jalview_ws_rest_RestJobThread$jalview_datamodel_AlignmentI$IA,[0, this, restClient._input.getVisibleAlignment$C(restClient.service.getGapCharacter$()), restClient._input.getVisibleContigs$()]);
} else {
var viscontig=restClient._input.getVisibleContigs$();
var viscontigals=restClient._input.getVisibleContigAlignments$C(restClient.service.getGapCharacter$());
if (viscontigals != null  && viscontigals.length > 0 ) {
this.jobs=Clazz.array($I$(1), [viscontigals.length]);
for (var j=0; j < this.jobs.length; j++) {
var visc=Clazz.array(Integer.TYPE, -1, [viscontig[j * 2], viscontig[j * 2 + 1]]);
if (j != 0) {
this.jobs[j]=Clazz.new_($I$(1).c$$I$jalview_ws_rest_RestJobThread$jalview_datamodel_AlignmentI$IA,[j, this, viscontigals[j], visc]);
} else {
this.jobs[j]=Clazz.new_($I$(1).c$$I$jalview_ws_rest_RestJobThread$jalview_datamodel_AlignmentI$IA,[0, this, viscontigals[j], visc]);
}}
}}if (!restClient.service.isHseparable$()) {
} else {
}}, 1);

Clazz.newMeth(C$, 'setWebServiceInfo$jalview_gui_WebserviceInfo', function (webserviceInfo) {
this.wsInfo=webserviceInfo;
for (var j=0; j < this.jobs.length; j++) {
this.wsInfo.addJobPane$();
if (this.jobs.length > 1) {
this.wsInfo.setProgressName$S$I("region " + this.jobs[j].getJobnum$(), this.jobs[j].getJobnum$());
} else {
this.wsInfo.setProgressText$I$S(this.jobs[j].getJobnum$(), this.OutputHeader);
}}
});

Clazz.newMeth(C$, 'getStage$jalview_ws_rest_RestJobThread_Stage', function (stg) {
if (stg === $I$(2).SUBMIT ) {
return "submitting ";
}if (stg === $I$(2).POLL ) {
return "checking status of ";
}return (" being confused about ");
}, p$1);

Clazz.newMeth(C$, 'doPoll$jalview_ws_rest_RestJob', function (rj) {
var postUrl=rj.getPollUrl$();
this.doHttpReq$jalview_ws_rest_RestJobThread_Stage$jalview_ws_rest_RestJob$S($I$(2).POLL, rj, postUrl);
}, p$1);

Clazz.newMeth(C$, 'doPost$jalview_ws_rest_RestJob', function (rj) {
var postUrl=rj.getPostUrl$();
this.doHttpReq$jalview_ws_rest_RestJobThread_Stage$jalview_ws_rest_RestJob$S($I$(2).SUBMIT, rj, postUrl);
this.wsInfo.invalidate$();
});

Clazz.newMeth(C$, 'doHttpReq$jalview_ws_rest_RestJobThread_Stage$jalview_ws_rest_RestJob$S', function (stg, rj, postUrl) {
var respText=Clazz.new_($I$(3));
var request=null;
var messages="";
if (stg === $I$(2).SUBMIT ) {
var htpost=Clazz.new_($I$(4).c$$S,[postUrl]);
var postentity=Clazz.new_($I$(5).c$$org_apache_http_entity_mime_HttpMultipartMode,[$I$(6).STRICT]);
for (var input, $input = rj.getInputParams$().iterator$(); $input.hasNext$()&&((input=($input.next$())),1);) {
if (input.getValue$().validFor$jalview_ws_rest_RestJob(rj)) {
postentity.addPart$S$org_apache_http_entity_mime_content_ContentBody(input.getKey$(), input.getValue$().formatForInput$jalview_ws_rest_RestJob(rj));
} else {
messages += "Skipped an input (" + input.getKey$() + ") - Couldn't generate it from available data." ;
}}
htpost.setEntity$org_apache_http_HttpEntity(postentity);
request=htpost;
} else {
request=Clazz.new_($I$(7).c$$S,[postUrl]);
}if (request != null ) {
var httpclient=Clazz.new_($I$(8));
var localContext=Clazz.new_($I$(9));
var response=null;
try {
response=httpclient.execute$org_apache_http_client_methods_HttpUriRequest(request);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"org.apache.http.client.ClientProtocolException")){
var he = e$$;
{
rj.statMessage="Web Protocol Exception when " + p$1.getStage$jalview_ws_rest_RestJobThread_Stage.apply(this, [stg]) + "Job. <br>Problematic url was <a href=\"" + request.getURI$() + "\">" + request.getURI$() + "</a><br>See Console output for details." ;
rj.setAllowedServerExceptions$I(0);
rj.error=true;
$I$(10).log.fatal$O("Unexpected REST Job " + p$1.getStage$jalview_ws_rest_RestJobThread_Stage.apply(this, [stg]) + "exception for URL " + rj.rsd.postUrl );
throw (he);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
rj.statMessage="IO Exception when " + p$1.getStage$jalview_ws_rest_RestJobThread_Stage.apply(this, [stg]) + "Job. <br>Problematic url was <a href=\"" + request.getURI$() + "\">" + request.getURI$() + "</a><br>See Console output for details." ;
$I$(10).log.warn$O("IO Exception for REST Job " + p$1.getStage$jalview_ws_rest_RestJobThread_Stage.apply(this, [stg]) + "exception for URL " + rj.rsd.postUrl );
throw (e);
}
} else {
throw e$$;
}
}
switch (response.getStatusLine$().getStatusCode$()) {
case 200:
rj.running=false;
$I$(10).log.debug$O("Processing result set.");
p$1.processResultSet$jalview_ws_rest_RestJob$org_apache_http_HttpResponse$org_apache_http_client_methods_HttpRequestBase.apply(this, [rj, response, request]);
break;
case 202:
rj.statMessage="<br>Job submitted successfully. Results available at this URL:\n<a href=" + rj.getJobId$() + "\">" + rj.getJobId$() + "</a><br>" ;
rj.running=true;
break;
case 302:
var loc;
if (!rj.isSubmitted$() && (loc=response.getHeaders$S("Location")) != null   && loc.length > 0 ) {
if (loc.length > 1) {
$I$(10).log.warn$O("Ignoring additional " + (loc.length - 1) + " location(s) provided in response header ( next one is '" + loc[1].getValue$() + "' )" );
}rj.setJobId$S(loc[0].getValue$());
rj.setSubmitted$Z(true);
}p$1.completeStatus$jalview_ws_rest_RestJob$org_apache_http_HttpResponse.apply(this, [rj, response]);
break;
case 500:
rj.setSubmitted$Z(true);
rj.setAllowedServerExceptions$I(0);
rj.setSubjobComplete$Z(true);
rj.error=true;
rj.running=false;
p$1.completeStatus$jalview_ws_rest_RestJob$org_apache_http_HttpResponse$S.apply(this, [rj, response, "" + p$1.getStage$jalview_ws_rest_RestJobThread_Stage.apply(this, [stg]) + "failed. Reason below:\n" ]);
break;
default:
$I$(10).log.warn$O("Unhandled response status when " + p$1.getStage$jalview_ws_rest_RestJobThread_Stage.apply(this, [stg]) + "for " + postUrl + ": " + response.getStatusLine$() );
rj.error=true;
rj.setAllowedServerExceptions$I(0);
rj.setSubjobComplete$Z(true);
rj.setSubmitted$Z(true);
try {
p$1.completeStatus$jalview_ws_rest_RestJob$org_apache_http_HttpResponse$S.apply(this, [rj, response, "" + p$1.getStage$jalview_ws_rest_RestJobThread_Stage.apply(this, [stg]) + " resulted in an unexpected server response.<br/>Url concerned was <a href=\"" + request.getURI$() + "\">" + request.getURI$() + "</a><br/>Filtered response content below:<br/>" ]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(10).log.debug$O$Throwable("IOException when consuming unhandled response", e);
} else {
throw e;
}
}
;}
}});

Clazz.newMeth(C$, 'processResultSet$jalview_ws_rest_RestJob$org_apache_http_HttpResponse$org_apache_http_client_methods_HttpRequestBase', function (rj, con, req) {
if (rj.statMessage == null ) {
rj.statMessage="";
}rj.statMessage += "Job Complete.\n";
try {
rj.resSet=Clazz.new_($I$(11).c$$jalview_ws_rest_RestJob$org_apache_http_HttpResponse$org_apache_http_client_methods_HttpRequestBase,[rj, con, req]);
rj.gotresult=true;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
rj.statMessage += "Couldn't parse results. Failed.";
rj.error=true;
rj.gotresult=false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'completeStatus$jalview_ws_rest_RestJob$org_apache_http_HttpResponse', function (rj, con) {
p$1.completeStatus$jalview_ws_rest_RestJob$org_apache_http_HttpResponse$S.apply(this, [rj, con, null]);
}, p$1);

Clazz.newMeth(C$, 'completeStatus$jalview_ws_rest_RestJob$org_apache_http_HttpResponse$S', function (rj, con, prefix) {
var sb=Clazz.new_($I$(3));
if (prefix != null ) {
sb.append$S(prefix);
};if (rj.statMessage != null  && rj.statMessage.length$() > 0 ) {
sb.append$S(rj.statMessage);
}var en=con.getEntity$();
var f;
var content=Clazz.new_($I$(3).c$$S,[f=$I$(12).toString$org_apache_http_HttpEntity(en)]);
f=f.toLowerCase$();
var body=f.indexOf$S("<body");
if (body > -1) {
content.delete$I$I(0, f.indexOf$S$I(">", body) + 1);
}if (body > -1 && sb.length$() > 0 ) {
sb.append$S("\n");
content.insert$I$CharSequence(0, sb);
sb=null;
}f=null;
rj.statMessage=content.toString();
}, p$1);

Clazz.newMeth(C$, 'pollJob$jalview_ws_AWsJob', function (job) {
Clazz.assert(C$, this, function(){return (Clazz.instanceOf(job, "jalview.ws.rest.RestJob"))});
System.err.println$S("Debug RestJob: Polling Job");
p$1.doPoll$jalview_ws_rest_RestJob.apply(this, [job]);
});

Clazz.newMeth(C$, 'StartJob$jalview_ws_AWsJob', function (job) {
Clazz.assert(C$, this, function(){return (Clazz.instanceOf(job, "jalview.ws.rest.RestJob"))});
try {
System.err.println$S("Debug RestJob: Posting Job");
this.doPost$jalview_ws_rest_RestJob(job);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"jalview.ws.rest.NoValidInputDataException")){
var erex = e$$;
{
job.setSubjobComplete$Z(true);
job.setSubmitted$Z(true);
(job).statMessage="<br>It looks like there was a problem with the data sent to the service :<br>" + erex.getMessage$() + "\n" ;
(job).error=true;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
job.setSubjobComplete$Z(true);
job.setAllowedServerExceptions$I(-1);
$I$(10).log.error$O$Throwable("Exception when trying to start Rest Job.", ex);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'parseResult$', function () {
$I$(10).log.warn$O("Rest job result parser is currently INCOMPLETE!");
var validres=0;
for (var rj, $rj = 0, $$rj = this.jobs; $rj<$$rj.length&&((rj=($$rj[$rj])),1);$rj++) {
if (rj.hasResponse$() && rj.resSet != null   && rj.resSet.isValid$() ) {
var ln=null;
try {
$I$(10).log.debug$O("Parsing data for job " + rj.getJobId$());
rj.parseResultSet$();
if (rj.hasResults$()) {
validres++;
}$I$(10).log.debug$O("Finished parsing data for job " + rj.getJobId$());
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Error")){
var ex = e$$;
{
$I$(10).log.warn$O("Failed to finish parsing data for job " + rj.getJobId$());
ex.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
$I$(10).log.warn$O("Failed to finish parsing data for job " + rj.getJobId$());
ex.printStackTrace$();
}
} else {
throw e$$;
}
} finally {
rj.error=true;
rj.statMessage="Error whilst parsing data for this job.<br>URL for job response is :<a href=\"" + rj.resSet.getUrl$() + "\">" + rj.resSet.getUrl$() + "</a><br>" ;
}
}}
if (validres > 0) {
if (true) {
this.wsInfo.setViewResultsImmediatly$Z(true);
} else {
}this.wsInfo.showResultsNewFrame.addActionListener$java_awt_event_ActionListener(((P$.RestJobThread$1||
(function(){var C$=Clazz.newClass(P$, "RestJobThread$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.ws.rest.RestJobThread'].realiseResults$Z.apply(this.b$['jalview.ws.rest.RestJobThread'], [false]);
});
})()
), Clazz.new_(P$.RestJobThread$1.$init$, [this, null])));
this.wsInfo.mergeResults.addActionListener$java_awt_event_ActionListener(((P$.RestJobThread$2||
(function(){var C$=Clazz.newClass(P$, "RestJobThread$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.ws.rest.RestJobThread'].realiseResults$Z.apply(this.b$['jalview.ws.rest.RestJobThread'], [true]);
});
})()
), Clazz.new_(P$.RestJobThread$2.$init$, [this, null])));
this.wsInfo.setResultsReady$();
} else {
this.wsInfo.setStatus$I($I$(13).STATE_STOPPED_ERROR);
this.wsInfo.setFinishedNoResults$();
}});

Clazz.newMeth(C$, 'realiseResults$Z', function (merge) {
var destPanels=Clazz.new_($I$(14));
var resultDest=Clazz.new_($I$(14));
var newAlignment=false;
var gapCharacter=this.restClient.av.getGapCharacter$();
var hsepjobs=this.restClient.service.isHseparable$();
var vsepjobs=this.restClient.service.isVseparable$();
var numAlSets=0;
var als=0;
var destAls=Clazz.new_($I$(14));
var destColsel=Clazz.new_($I$(14));
var trees=Clazz.new_($I$(14));
do {
var ordermap=Clazz.array(Integer.TYPE, [this.jobs.length, null]);
var rseqs=Clazz.array($I$(15), [this.jobs.length, null]);
var orders=Clazz.array($I$(16), [this.jobs.length]);
var alan=Clazz.array($I$(17), [this.jobs.length, null]);
var sgrp=Clazz.array($I$(18), [this.jobs.length, null]);
for (var j=0; j < this.jobs.length; j++) {
var rj=this.jobs[j];
if (rj.hasResults$()) {
var rset=rj.context;
if (rset.hasAlignments$()) {
if (numAlSets < rset.getAl$().size$()) {
numAlSets=rset.getAl$().size$();
}if (als < rset.getAl$().size$() && rset.getAl$().get$I(als).isModified$() ) {
var alset=rset.getAl$().get$I(als);
alan[j]=alset.al.getAlignmentAnnotation$();
if (alset.al.getGroups$() != null ) {
sgrp[j]=Clazz.array($I$(18), [alset.al.getGroups$().size$()]);
alset.al.getGroups$().toArray$TTA(sgrp[j]);
} else {
sgrp[j]=null;
}orders[j]=Clazz.new_($I$(16).c$$jalview_datamodel_AlignmentI,[alset.al]);
rseqs[j]=alset.al.getSequencesArray$();
ordermap[j]=rj.getOrderMap$();
if (alset.trees != null ) {
trees.add$TE(Clazz.new_($I$(14).c$$java_util_Collection,[alset.trees]));
} else {
trees.add$TE(Clazz.new_($I$(14)));
}}}}}
var nvertsep=0;
var nvertseps=1;
if (vsepjobs) {
}var vrestjob=0;
var visgrps=Clazz.new_($I$(14));
var groupNames=Clazz.new_($I$(19));
var visAlAn=null;
for (nvertsep=0; nvertsep < nvertseps; nvertsep++) {
{
var nrj=vrestjob;
var rj=this.jobs[nrj];
var contigs=this.input.getVisibleContigs$();
var destAl=null;
var destHCs=null;
if (als == 0 && rj.isInputContextModified$() ) {
if (destAls.size$() > als) {
destAl=destAls.get$I(als);
} else {
if (!this.restClient.isAlignmentModified$() && merge ) {
destAl=this.restClient.av.getAlignment$();
destHCs=this.restClient.av.getAlignment$().getHiddenColumns$();
resultDest.add$TE(this.restClient.isShowResultsInNewView$() ? $I$(20).newView : $I$(20).currentView);
destPanels.add$TE(this.restClient.recoverAlignPanelForView$());
} else {
newAlignment=true;
var idat=this.input.getAlignmentAndHiddenColumns$C(gapCharacter);
destAl=Clazz.new_($I$(21).c$$jalview_datamodel_SequenceIA,[idat[0]]);
destHCs=idat[1];
resultDest.add$TE($I$(20).newAlignment);
}destAls.add$TE(destAl);
destColsel.add$TE(destHCs);
}} else {
if (destAls.size$() > als) {
if (!vsepjobs) {
$I$(10).log.warn$O("dealing with multiple alignment products returned by non-vertically separable service.");
}destAl=destAls.get$I(als);
destHCs=destColsel.get$I(als);
} else {
var newview;
if (!hsepjobs) {
var nsq=p$1.splitSeqsOnVisibleContigs$jalview_datamodel_SequenceIA$IA$C.apply(this, [rseqs[nrj], contigs, gapCharacter]);
var alo=Clazz.array($I$(16), [nsq.length]);
for (var no=0; no < alo.length; no++) {
alo[no]=Clazz.new_($I$(16).c$$java_util_List,[orders[nrj].getOrder$()]);
}
newview=this.input.getUpdatedView$jalview_datamodel_SequenceIAA$jalview_datamodel_AlignmentOrderA$C(nsq, orders, gapCharacter);
} else {
newview=this.input.getUpdatedView$jalview_datamodel_SequenceIAA$jalview_datamodel_AlignmentOrderA$C(rseqs, orders, gapCharacter);
}destAl=Clazz.new_($I$(21).c$$jalview_datamodel_SequenceIA,[newview[0]]);
destHCs=newview[1];
newAlignment=true;
destAls.add$TE(destAl);
destColsel.add$TE(destHCs);
resultDest.add$TE($I$(20).newAlignment);
throw Clazz.new_($I$(22).c$$S,[$I$(23).getString$S("error.implementation_error") + "TODO: "]);
}}var initnrj=nrj;
for (var ncnt=0; ncnt < contigs.length; ncnt+=2) {
if (!hsepjobs) {
} else {
if (ncnt > 0) {
nrj++;
}}if (sgrp[nrj] != null ) {
for (var sg, $sg = 0, $$sg = sgrp[nrj]; $sg<$$sg.length&&((sg=($$sg[$sg])),1);$sg++) {
var recovered=false;
var exsg=null;
if (sg.getName$() != null ) {
exsg=groupNames.get$O(sg.getName$());
}if (exsg == null ) {
exsg=Clazz.new_($I$(18).c$$jalview_datamodel_SequenceGroup,[sg]);
groupNames.put$TK$TV(exsg.getName$(), exsg);
visgrps.add$TE(exsg);
exsg.setStartRes$I(sg.getStartRes$() + contigs[ncnt]);
exsg.setEndRes$I(sg.getEndRes$() + contigs[ncnt]);
} else {
recovered=true;
}{
for (var oseq, $oseq = sg.getSequences$java_util_Map(null).iterator$(); $oseq.hasNext$()&&((oseq=($oseq.next$())),1);) {
var nseq=p$1.getNewSeq$jalview_datamodel_SequenceI$jalview_datamodel_SequenceIA$IA$jalview_datamodel_AlignmentI.apply(this, [oseq, rseqs[nrj], ordermap[nrj], destAl]);
if (nseq != null ) {
if (!recovered) {
exsg.deleteSequence$jalview_datamodel_SequenceI$Z(oseq, false);
}exsg.addSequence$jalview_datamodel_SequenceI$Z(nseq, false);
} else {
$I$(10).log.warn$O("Couldn\'t resolve original sequence for new sequence.");
}}
if (sg.hasSeqrep$()) {
if (exsg.getSeqrep$() === sg.getSeqrep$() ) {
var oseq=sg.getSeqrep$();
var nseq=p$1.getNewSeq$jalview_datamodel_SequenceI$jalview_datamodel_SequenceIA$IA$jalview_datamodel_AlignmentI.apply(this, [oseq, rseqs[nrj], ordermap[nrj], destAl]);
if (nseq != null ) {
exsg.setSeqrep$jalview_datamodel_SequenceI(nseq);
}}}}if (recovered) {
var start=sg.getStartRes$() + contigs[ncnt];
var end=sg.getEndRes$() + contigs[ncnt];
if (start < exsg.getStartRes$()) {
exsg.setStartRes$I(start);
}if (end > exsg.getEndRes$()) {
exsg.setEndRes$I(end);
}}}
}}
nrj=initnrj;
for (var ncnt=0; ncnt < contigs.length; ncnt+=2) {
if (!hsepjobs) {
} else {
if (ncnt > 0) {
nrj++;
}}if (alan[nrj] != null ) {
for (var an=0; an < alan[nrj].length; an++) {
var sqass=null;
var grass=null;
if (alan[nrj][an].sequenceRef != null ) {
sqass=p$1.getNewSeq$jalview_datamodel_SequenceI$jalview_datamodel_SequenceIA$IA$jalview_datamodel_AlignmentI.apply(this, [alan[nrj][an].sequenceRef, rseqs[nrj], ordermap[nrj], destAl]);
}if (alan[nrj][an].groupRef != null ) {
grass=groupNames.get$O(alan[nrj][an].groupRef.getName$());
if (grass == null ) {
$I$(10).log.error$O("Couldn't relocate group referemce for group " + alan[nrj][an].groupRef.getName$());
}}if (visAlAn == null ) {
visAlAn=Clazz.new_($I$(14));
}var visan=null;
for (var v, $v = visAlAn.iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
if (v.label != null  && v.label.equals$O(alan[nrj][an].label) ) {
visan=v;
}}
if (visan == null ) {
visan=Clazz.new_($I$(17).c$$jalview_datamodel_AlignmentAnnotation,[alan[nrj][an]]);
visan.annotations=Clazz.array($I$(24), [this.input.getWidth$()]);
visan.groupRef=grass;
visan.sequenceRef=sqass;
visAlAn.add$TE(visan);
}if (contigs[ncnt] + alan[nrj][an].annotations.length > visan.annotations.length) {
var newannv=Clazz.array($I$(24), [contigs[ncnt] + alan[nrj][an].annotations.length]);
System.arraycopy$O$I$O$I$I(visan.annotations, 0, newannv, 0, visan.annotations.length);
visan.annotations=newannv;
}System.arraycopy$O$I$O$I$I(alan[nrj][an].annotations, 0, visan.annotations, contigs[ncnt], alan[nrj][an].annotations.length);
}
}if (trees.get$I(nrj).size$() > 0) {
for (var nf, $nf = trees.get$I(nrj).iterator$(); $nf.hasNext$()&&((nf=($nf.next$())),1);) {
$I$(10).log.error$O("Tree recovery from restjob not yet implemented.");
}
}}
}}
if (visAlAn != null ) {
for (var v, $v = visAlAn.iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
destAls.get$I(als).addAnnotation$jalview_datamodel_AlignmentAnnotation(v);
}
}if (visgrps != null ) {
for (var sg, $sg = visgrps.iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
destAls.get$I(als).addGroup$jalview_datamodel_SequenceGroup(sg);
}
}} while (++als < numAlSets);
var destaf=this.restClient.recoverAlignFrameForView$();
var destPanel=this.restClient.recoverAlignPanelForView$();
als=0;
for (var action, $action = resultDest.iterator$(); $action.hasNext$()&&((action=($action.next$())),1);) {
var destal;
var destcs;
var alTitle=$I$(23).formatMessage$S$SA("label.webservice_job_title_on", Clazz.array(String, -1, [this.restClient.service.details.Action, this.restClient.service.details.Name, this.restClient.viewTitle]));
switch (action) {
case $I$(20).newAlignment:
destal=destAls.get$I(als);
destcs=destColsel.get$I(als);
destaf=Clazz.new_($I$(25).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I,[destal, destcs, 700, 500]);
$I$(26).Refresh$java_awt_Component$S(destaf, destaf.getViewport$().getSequenceSetId$());
$I$(27).addInternalFrame$javax_swing_JInternalFrame$S$I$I(destaf, alTitle, 700, 500);
break;
case $I$(20).newView:
break;
case $I$(20).currentView:
break;
}
}
if (!newAlignment) {
if (this.restClient.isShowResultsInNewView$()) {
}} else {
}});

Clazz.newMeth(C$, 'splitSeqsOnVisibleContigs$jalview_datamodel_SequenceIA$IA$C', function (sequenceIs, contigs, gapChar) {
var nvc=contigs == null  ? 1 : (contigs.length/2|0);
var blocks=Clazz.array($I$(15), [nvc, null]);
if (contigs == null ) {
blocks[0]=Clazz.array($I$(15), [sequenceIs.length]);
System.arraycopy$O$I$O$I$I(sequenceIs, 0, blocks[0], 0, sequenceIs.length);
} else {
var gapset=null;
var start=0;
var width=0;
for (var c=0; c < nvc; c++) {
width=contigs[c * 2 + 1] - contigs[c * 2] + 1;
for (var s=0; s < sequenceIs.length; s++) {
var end=sequenceIs[s].getLength$();
if (start < end) {
if (start + width < end) {
blocks[c][s]=sequenceIs[s].getSubSequence$I$I(start, start + width);
} else {
blocks[c][s]=sequenceIs[s].getSubSequence$I$I(start, end);
var sq=blocks[c][s].getSequenceAsString$();
for (var n=start + width; n > end; n--) {
sq += gapChar;
}
}} else {
if (gapset == null  || gapset.length < width ) {
var ng=Clazz.array(Character.TYPE, [width]);
var gs=0;
if (gapset != null ) {
System.arraycopy$O$I$O$I$I(gapset, 0, ng, 0, gs=gapset.length);
}while (gs < ng.length){
ng[gs++]=gapChar;
}
}blocks[c][s]=sequenceIs[s].getSubSequence$I$I(end, end);
blocks[c][s].setSequence$S(gapset.toString().substring$I$I(0, width));
}}
if (c > 0) {
start+=contigs[c * 2 + 1] - contigs[c * 2];
}}
}return blocks;
}, p$1);

Clazz.newMeth(C$, 'getNewSeq$jalview_datamodel_SequenceI$jalview_datamodel_SequenceIA$IA$jalview_datamodel_AlignmentI', function (oseq, sequenceIs, is, destAl) {
var p=0;
while (p < sequenceIs.length && sequenceIs[p] !== oseq  ){
p++;
}
if (p < sequenceIs.length && p < destAl.getHeight$() ) {
return destAl.getSequenceAt$I(is[p]);
}return null;
}, p$1);

Clazz.newMeth(C$, 'isValid$', function () {
var _warnings=Clazz.new_($I$(14));
var validt=true;
if (this.jobs != null ) {
for (var rj, $rj = 0, $$rj = this.jobs; $rj<$$rj.length&&((rj=($$rj[$rj])),1);$rj++) {
if (!rj.hasValidInput$()) {
System.err.println$S("Job " + rj.getJobnum$() + " has invalid input. ( " + rj.getStatus$() + ")" );
if (rj.hasStatus$() && !_warnings.contains$O(rj.getStatus$()) ) {
_warnings.add$TE(rj.getStatus$());
}validt=false;
}}
}if (!validt) {
this.warnings="";
for (var st, $st = _warnings.iterator$(); $st.hasNext$()&&((st=($st.next$())),1);) {
if (this.warnings.length$() > 0) {
this.warnings += "\n";
}this.warnings += st;
}
}return validt;
});

Clazz.newMeth(C$, 'hasWarnings$', function () {
return this.warnings != null  && this.warnings.length$() > 0 ;
});

Clazz.newMeth(C$, 'getWarnings$', function () {
return this.isValid$() ? "Job can be started. No warnings." : this.hasWarnings$() ? this.warnings : "";
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){var C$=Clazz.newClass(P$.RestJobThread, "Stage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SUBMIT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "POLL", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.RestJobThread, "AddDataTo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "currentView", 0, []);
Clazz.newEnumConst($vals, C$.c$, "newView", 1, []);
Clazz.newEnumConst($vals, C$.c$, "newAlignment", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
