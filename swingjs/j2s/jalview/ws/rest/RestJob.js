(function(){var P$=Clazz.newPackage("jalview.ws.rest"),I$=[[0,'java.util.Hashtable','jalview.analysis.SeqsetUtils','java.util.ArrayList','jalview.datamodel.AlignmentOrder','jalview.io.packed.JalviewDataset','jalview.datamodel.SequenceI','jalview.datamodel.AlignmentI']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RestJob", null, 'jalview.ws.AWsJob');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rsd=null;
this.gotresponse=false;
this.error=false;
this.waiting=false;
this.gotresult=false;
this.squniq=null;
this.dsForIO=null;
this.inputOrder=null;
this.origviscontig=null;
this.contextAl=null;
this.validInput=false;
this.statMessage=null;
this.resSet=null;
this.inputData=null;
this.running=false;
this.context=null;
this.parsedResults=false;
this.validJvresults=false;
this.jvresultobj=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.contextAl=null;
this.validInput=false;
this.statMessage=null;
this.inputData=Clazz.new_($I$(1));
this.running=false;
this.context=null;
this.parsedResults=false;
this.validJvresults=false;
this.jvresultobj=null;
}, 1);

Clazz.newMeth(C$, 'c$$I$jalview_ws_rest_RestJobThread$jalview_datamodel_AlignmentI$IA', function (jobNum, restJobThread, _input, viscontigs) {
Clazz.super_(C$, this,1);
this.rsd=restJobThread.restClient.service;
this.jobnum=jobNum;
if (viscontigs != null ) {
this.origviscontig=Clazz.array(Integer.TYPE, [viscontigs.length]);
System.arraycopy$O$I$O$I$I(viscontigs, 0, this.origviscontig, 0, viscontigs.length);
}this.squniq=$I$(2).uniquify$jalview_datamodel_SequenceIA$Z(_input.getSequencesArray$(), true);
var alinp=Clazz.new_($I$(3));
var paramsWithData=0;
for (var prm, $prm = this.rsd.inputParams.entrySet$().iterator$(); $prm.hasNext$()&&((prm=($prm.next$())),1);) {
if (!prm.getValue$().isConstant$()) {
if (Clazz.instanceOf(prm.getValue$(), "jalview.ws.rest.params.Alignment")) {
alinp.add$TE(prm.getValue$());
} else {
if (Clazz.instanceOf(prm.getValue$(), "jalview.ws.rest.params.SeqGroupIndexVector") && _input.getGroups$() != null   && _input.getGroups$().size$() >= -1 + prm.getValue$().min ) {
alinp.add$TE(prm.getValue$());
} else {
this.statMessage=("Not enough groups defined on the alignment - need at least " + prm.getValue$().min);
}}} else {
paramsWithData++;
}}
if ((paramsWithData + alinp.size$()) == this.rsd.inputParams.size$()) {
this.inputOrder=Clazz.new_($I$(4).c$$jalview_datamodel_AlignmentI,[_input]);
if ((this.dsForIO=_input.getDataset$()) == null ) {
_input.setDataset$jalview_datamodel_AlignmentI(null);
}this.dsForIO=_input.getDataset$();
if (this.contextAl == null ) {
this.contextAl=_input;
}this.setAlignmentForInputs$java_util_Collection$jalview_datamodel_AlignmentI(alinp, _input);
this.validInput=true;
} else {
this.validInput=false;
}}, 1);

Clazz.newMeth(C$, 'hasResults$', function () {
return this.gotresult && (this.parsedResults ? this.validJvresults : true) ;
});

Clazz.newMeth(C$, 'hasValidInput$', function () {
return this.validInput;
});

Clazz.newMeth(C$, 'isRunning$', function () {
return this.running;
});

Clazz.newMeth(C$, 'isQueued$', function () {
return this.waiting;
});

Clazz.newMeth(C$, 'isFinished$', function () {
return this.resSet != null ;
});

Clazz.newMeth(C$, 'isFailed$', function () {
return this.error;
});

Clazz.newMeth(C$, 'isBroken$', function () {
return this.error;
});

Clazz.newMeth(C$, 'isServerError$', function () {
return this.error;
});

Clazz.newMeth(C$, 'hasStatus$', function () {
return this.statMessage != null ;
});

Clazz.newMeth(C$, 'getStatus$', function () {
return this.statMessage;
});

Clazz.newMeth(C$, 'hasResponse$', function () {
return this.statMessage != null  || this.resSet != null  ;
});

Clazz.newMeth(C$, 'clearResponse$', function () {
});

Clazz.newMeth(C$, 'getState$', function () {
return "Job is clueless";
});

Clazz.newMeth(C$, 'getPostUrl$', function () {
return this.rsd.postUrl;
});

Clazz.newMeth(C$, 'getInputParams$', function () {
return this.rsd.inputParams.entrySet$();
});

Clazz.newMeth(C$, 'getPollUrl$', function () {
return this.rsd.getDecoratedResultUrl$S(this.jobId);
});

Clazz.newMeth(C$, 'newJalviewDataset$', function () {
if (this.context == null ) {
this.context=Clazz.new_($I$(5).c$$jalview_datamodel_AlignmentI$java_util_Map$java_util_Hashtable$jalview_datamodel_AlignmentI,[this.dsForIO, null, this.squniq, null]);
if (this.contextAl != null ) {
if (this.contextAl.getAlignmentAnnotation$() != null ) {
for (var alan, $alan = 0, $$alan = this.contextAl.getAlignmentAnnotation$(); $alan<$$alan.length&&((alan=($$alan[$alan])),1);$alan++) {
this.contextAl.deleteAnnotation$jalview_datamodel_AlignmentAnnotation(alan);
}
}if (this.contextAl.getGroups$() != null ) {
this.contextAl.deleteAllGroups$();
}this.context.addAlignment$jalview_datamodel_AlignmentI(this.contextAl);
}}return this.context;
});

Clazz.newMeth(C$, 'getSequencesForInput$S$jalview_ws_rest_InputType_molType', function (token, type) {
var sgdat=this.inputData.get$O(token);
if (sgdat == null ) {
throw Clazz.new_(Clazz.load('jalview.ws.rest.NoValidInputDataException').c$$S,["No Sequence vector data bound to input '" + token + "' for service at " + this.rsd.postUrl ]);
}if (Clazz.instanceOf(sgdat, "jalview.datamodel.AlignmentI")) {
return (sgdat).getSequencesArray$();
}if (Clazz.instanceOf(sgdat, "jalview.datamodel.SequenceGroup")) {
return (sgdat).getSequencesAsArray$java_util_Map(null);
}if (Clazz.instanceOf(sgdat, "java.util.Vector")) {
if ((sgdat).size$() > 0 && Clazz.instanceOf((sgdat).get$I(0), "jalview.datamodel.SequenceI") ) {
var sq=Clazz.array($I$(6), [(sgdat).size$()]);
(sgdat).copyInto$OA(sq);
return sq;
}}throw Clazz.new_(Clazz.load('jalview.ws.rest.NoValidInputDataException').c$$S,["No Sequence vector data bound to input '" + token + "' for service at " + this.rsd.postUrl ]);
});

Clazz.newMeth(C$, 'setAlignmentForInputs$java_util_Collection$jalview_datamodel_AlignmentI', function (itypes, al) {
for (var itype, $itype = itypes.iterator$(); $itype.hasNext$()&&((itype=($itype.next$())),1);) {
if (!this.rsd.inputParams.values$().contains$O(itype)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["InputType " + itype.getClass$() + " is not valid for service at " + this.rsd.postUrl ]);
}if (Clazz.instanceOf(itype, "jalview.ws.rest.AlignmentProcessor")) {
(itype).prepareAlignment$(al);
}this.inputData.put$TK$TV(itype.token, al);
}
});

Clazz.newMeth(C$, 'getAlignmentForInput$S$jalview_ws_rest_InputType_molType', function (token, type) {
var al=this.inputData.get$O(token);
if (al == null  || !(Clazz.instanceOf(al, "jalview.datamodel.AlignmentI")) ) {
throw Clazz.new_(Clazz.load('jalview.ws.rest.NoValidInputDataException').c$$S,["No alignment data bound to input '" + token + "' for service at " + this.rsd.postUrl ]);
}return al;
});

Clazz.newMeth(C$, 'hasDataOfType$Class', function (cl) {
if (Clazz.getClass($I$(7),['addAnnotation$jalview_datamodel_AlignmentAnnotation','addAnnotation$jalview_datamodel_AlignmentAnnotation$I','addCodonFrame$jalview_datamodel_AlignedCodonFrame','addGroup$jalview_datamodel_SequenceGroup','addSequence$jalview_datamodel_SequenceI','alignAs$jalview_datamodel_AlignmentI','append$jalview_datamodel_AlignmentI','deleteAllAnnotations$Z','deleteAllGroups$','deleteAnnotation$jalview_datamodel_AlignmentAnnotation','deleteAnnotation$jalview_datamodel_AlignmentAnnotation$Z','deleteGroup$jalview_datamodel_SequenceGroup','deleteHiddenSequence$I','deleteSequence$jalview_datamodel_SequenceI','deleteSequence$I','findAllGroups$jalview_datamodel_SequenceI','findGroup$jalview_datamodel_SequenceI$I','findIndex$jalview_datamodel_SequenceI','findIndex$jalview_datamodel_SearchResultsI','findName$S','findName$S$Z','findName$jalview_datamodel_SequenceI$S$Z','findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup','findSequenceMatch$S','getAbsoluteHeight$','getAlignmentAnnotation$','getCodonFrame$jalview_datamodel_SequenceI','getCodonFrames$','getCompactAlignment$','getDataset$','getGapCharacter$','getGroups$','getHeight$','getHiddenColumns$','getHiddenSequences$','getMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI','getProperties$','getProperty$O','getSequenceAt$I','getSequenceAtAbsoluteIndex$I','getSequenceNames$','getSequences$','getSequencesArray$','getSequencesByName$','getVisibleWidth$','getWidth$','hasRNAStructure$','hasValidSequence$','isAligned$','isAligned$Z','isHidden$I','justify$Z','moveSelectedSequencesByOne$jalview_datamodel_SequenceGroup$java_util_Map$Z','padGaps$','propagateInsertions$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentView','realiseMappings$java_util_List','removeCodonFrame$jalview_datamodel_AlignedCodonFrame','replaceSequenceAt$I$jalview_datamodel_SequenceI','setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I','setCodonFrames$java_util_List','setDataset$jalview_datamodel_AlignmentI','setGapCharacter$C','setHiddenColumns$jalview_datamodel_HiddenColumns','setProperty$O$O','setupJPredAlignment$','validateAnnotation$jalview_datamodel_AlignmentAnnotation']).isAssignableFrom$Class(cl)) {
return true;
}return false;
});

Clazz.newMeth(C$, 'parseResultSet$', function () {
if (!this.parsedResults) {
this.parsedResults=true;
this.jvresultobj=this.resSet.parseResultSet$();
this.validJvresults=true;
}});

Clazz.newMeth(C$, 'isInputContextModified$', function () {
return this.contextAl != null  && this.validJvresults  && this.context.getAl$().get$I(0).isModified$() ;
});

Clazz.newMeth(C$, 'isInputUniquified$', function () {
return false;
});

Clazz.newMeth(C$, 'getOrderMap$', function () {
var contseq=this.contextAl.getSequencesArray$();
var map=Clazz.array(Integer.TYPE, [contseq.length]);
for (var i=0; i < contseq.length; i++) {
map[i]=this.inputOrder.getOrder$().indexOf$O(contseq[i]);
}
return map;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
