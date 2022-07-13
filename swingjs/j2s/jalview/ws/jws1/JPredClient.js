(function(){var P$=Clazz.newPackage("jalview.ws.jws1"),p$1={},I$=[[0,'jalview.bin.Console','jalview.datamodel.SequenceI','jalview.analysis.SeqsetUtils','jalview.analysis.AlignSeq','jalview.ws.jws1.JPredThread','Error','jalview.util.MessageManager','java.util.Locale','jalview.datamodel.Sequence','jalview.gui.WebserviceInfo','ext.vamsas.JpredServiceLocator','java.net.URL','jalview.gui.JvOptionPane','jalview.gui.Desktop','javax.swing.JMenuItem','jalview.ws.jws1.JPredClient']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPredClient", null, 'jalview.ws.jws1.WS1Client');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$ext_vamsas_ServiceHandle$S$Z$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame$Z',  function (sh, title, msa, alview, parentFrame, viewonly) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.wsInfo=this.setWebService$ext_vamsas_ServiceHandle(sh);
p$1.startJPredClient$S$Z$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame$Z.apply(this, [title, msa, alview, parentFrame, viewonly]);
}, 1);

Clazz.newMeth(C$, 'startJPredClient$S$Z$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame$Z',  function (title, msa, alview, parentFrame, viewonly) {
var input=alview;
if (this.wsInfo == null ) {
this.wsInfo=p$1.setWebService.apply(this, []);
}var server=p$1.locateWebService.apply(this, []);
if (server == null ) {
$I$(1).warn$S("Couldn\'t find a Jpred webservice to invoke!");
return;
}var msf=null;
var seq=null;
var delMap=null;
msf=input.getSequences$();
seq=msf[0].getSeq$C("-");
if (viewonly) {
delMap=alview.getVisibleContigMapFor$IA(seq.gapMap$());
}if (msa && msf.length > 1 ) {
var altitle=p$1.getPredictionName$S.apply(this, [this.WebServiceName]) + " on " + (viewonly ? "visible " : "") + seq.getName$() + " using alignment from " + title ;
var aln=Clazz.array($I$(2), [msf.length]);
for (var i=0, j=msf.length; i < j; i++) {
aln[i]=msf[i].getSeq$C("-");
}
var SequenceInfo=$I$(3).uniquify$jalview_datamodel_SequenceIA$Z(aln, true);
if (viewonly) {
var seqs=alview.getSequenceStrings$C("-");
for (var i=0, j=msf.length; i < j; i++) {
aln[i].setSequence$S(seqs[i]);
}
seq.setSequence$S(seqs[0]);
}this.wsInfo.setProgressText$S("Job details for " + (viewonly ? "visible " : "") + "MSA based prediction (" + title + ") on sequence :\n>" + seq.getName$() + "\n" + $I$(4,"extractGaps$S$S",["-. ", seq.getSequenceAsString$()]) + "\n" );
var jthread=Clazz.new_($I$(5,1).c$$jalview_gui_WebserviceInfo$S$ext_vamsas_Jpred$java_util_Hashtable$jalview_datamodel_SequenceIA$IA$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame$S,[this.wsInfo, altitle, server, SequenceInfo, aln, delMap, alview, parentFrame, this.WsURL]);
this.wsInfo.setthisService$jalview_ws_WSClientI(jthread);
jthread.start$();
} else {
if (!msa && msf.length > 1 ) {
throw Clazz.new_([$I$(7).getString$S("error.implementation_error_multiple_single_sequence_prediction_jobs_not_supported")],$I$(6,1).c$$S);
}var altitle=p$1.getPredictionName$S.apply(this, [this.WebServiceName]) + " for " + (viewonly ? "visible " : "") + "sequence " + seq.getName$() + " from " + title ;
var seqname=seq.getName$();
var SequenceInfo=$I$(3).SeqCharacterHash$jalview_datamodel_SequenceI(seq);
if (viewonly) {
var seqs=alview.getSequenceStrings$C("-");
seq.setSequence$S(seqs[0]);
}this.wsInfo.setProgressText$S("Job details for prediction on " + (viewonly ? "visible " : "") + "sequence :\n>" + seqname + "\n" + $I$(4,"extractGaps$S$S",["-. ", seq.getSequenceAsString$()]) + "\n" );
var jthread=Clazz.new_($I$(5,1).c$$jalview_gui_WebserviceInfo$S$ext_vamsas_Jpred$S$java_util_Hashtable$jalview_datamodel_SequenceI$IA$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame,[this.wsInfo, altitle, server, this.WsURL, SequenceInfo, seq, delMap, alview, parentFrame]);
this.wsInfo.setthisService$jalview_ws_WSClientI(jthread);
jthread.start$();
}}, p$1);

Clazz.newMeth(C$, 'getPredictionName$S',  function (webServiceName) {
if (webServiceName.toLowerCase$java_util_Locale($I$(8).ROOT).indexOf$S("secondary structure prediction") > -1) {
return webServiceName;
} else {
return webServiceName + "secondary structure prediction";
}}, p$1);

Clazz.newMeth(C$, 'c$$ext_vamsas_ServiceHandle$S$jalview_datamodel_SequenceI$jalview_gui_AlignFrame',  function (sh, title, seq, parentFrame) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.wsInfo=this.setWebService$ext_vamsas_ServiceHandle(sh);
this.startJPredClient$S$jalview_datamodel_SequenceI$jalview_gui_AlignFrame(title, seq, parentFrame);
}, 1);

Clazz.newMeth(C$, 'c$$ext_vamsas_ServiceHandle$S$jalview_datamodel_SequenceIA$jalview_gui_AlignFrame',  function (sh, title, msa, parentFrame) {
Clazz.super_(C$, this);
this.wsInfo=this.setWebService$ext_vamsas_ServiceHandle(sh);
p$1.startJPredClient$S$jalview_datamodel_SequenceIA$jalview_gui_AlignFrame.apply(this, [title, msa, parentFrame]);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceIA',  function (title, msf) {
Clazz.super_(C$, this);
p$1.startJPredClient$S$jalview_datamodel_SequenceIA$jalview_gui_AlignFrame.apply(this, [title, msf, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceI',  function (title, seq) {
Clazz.super_(C$, this);
this.startJPredClient$S$jalview_datamodel_SequenceI$jalview_gui_AlignFrame(title, seq, null);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'startJPredClient$S$jalview_datamodel_SequenceIA$jalview_gui_AlignFrame',  function (title, msf, parentFrame) {
if (this.wsInfo == null ) {
this.wsInfo=p$1.setWebService.apply(this, []);
}var seq=msf[0];
var altitle="JPred prediction on " + seq.getName$() + " using alignment from " + title ;
this.wsInfo.setProgressText$S("Job details for MSA based prediction (" + title + ") on sequence :\n>" + seq.getName$() + "\n" + $I$(4,"extractGaps$S$S",["-. ", seq.getSequenceAsString$()]) + "\n" );
var aln=Clazz.array($I$(2), [msf.length]);
for (var i=0, j=msf.length; i < j; i++) {
aln[i]=Clazz.new_($I$(9,1).c$$jalview_datamodel_SequenceI,[msf[i]]);
}
var SequenceInfo=$I$(3).uniquify$jalview_datamodel_SequenceIA$Z(aln, true);
var server=p$1.locateWebService.apply(this, []);
if (server == null ) {
return;
}var jthread=Clazz.new_($I$(5,1).c$$jalview_gui_WebserviceInfo$S$ext_vamsas_Jpred$java_util_Hashtable$jalview_datamodel_SequenceIA$IA$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame$S,[this.wsInfo, altitle, server, SequenceInfo, aln, null, null, parentFrame, this.WsURL]);
this.wsInfo.setthisService$jalview_ws_WSClientI(jthread);
jthread.start$();
}, p$1);

Clazz.newMeth(C$, 'startJPredClient$S$jalview_datamodel_SequenceI$jalview_gui_AlignFrame',  function (title, seq, parentFrame) {
if (this.wsInfo == null ) {
this.wsInfo=p$1.setWebService.apply(this, []);
}this.wsInfo.setProgressText$S("Job details for prediction on sequence :\n>" + seq.getName$() + "\n" + $I$(4,"extractGaps$S$S",["-. ", seq.getSequenceAsString$()]) + "\n" );
var altitle="JPred prediction for sequence " + seq.getName$() + " from " + title ;
var SequenceInfo=$I$(3).SeqCharacterHash$jalview_datamodel_SequenceI(seq);
var server=p$1.locateWebService.apply(this, []);
if (server == null ) {
return;
}var jthread=Clazz.new_($I$(5,1).c$$jalview_gui_WebserviceInfo$S$ext_vamsas_Jpred$S$java_util_Hashtable$jalview_datamodel_SequenceI$IA$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame,[this.wsInfo, altitle, server, this.WsURL, SequenceInfo, seq, null, null, parentFrame]);
this.wsInfo.setthisService$jalview_ws_WSClientI(jthread);
jthread.start$();
});

Clazz.newMeth(C$, 'setWebService',  function () {
this.WebServiceName="JNetWS";
this.WebServiceJobTitle=$I$(7).getString$S("label.jnet_secondary_structure_prediction");
this.WebServiceReference="\"Cuff J. A and Barton G.J (2000) Application of multiple sequence alignment profiles to improve protein secondary structure prediction, Proteins 40:502-511\".";
this.WsURL="http://www.compbio.dundee.ac.uk/JalviewWS/services/jpred";
var wsInfo=Clazz.new_($I$(10,1).c$$S$S$Z,[this.WebServiceJobTitle, this.WebServiceReference, true]);
return wsInfo;
}, p$1);

Clazz.newMeth(C$, 'locateWebService',  function () {
var loc=Clazz.new_($I$(11,1));
var server=null;
try {
server=loc.getjpred$java_net_URL(Clazz.new_($I$(12,1).c$$S,[this.WsURL]));
(server).setTimeout$I(60000);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(13,"showMessageDialog$java_awt_Component$S$S$I",[$I$(14).desktop, $I$(7,"formatMessage$S$SA",["label.secondary_structure_prediction_service_couldnt_be_located", Clazz.array(String, -1, [this.WebServiceName, this.WsURL])]), $I$(7).getString$S("label.internal_jalview_error"), 2]);
this.wsInfo.setProgressText$S($I$(7,"formatMessage$S$SA",["label.secondary_structure_prediction_service_couldnt_be_located", Clazz.array(String, -1, [this.WebServiceName, this.WsURL])]) + "\n" + ex.getMessage$() );
this.wsInfo.setStatus$I(5);
} else {
throw ex;
}
}
return server;
}, p$1);

Clazz.newMeth(C$, 'attachWSMenuEntry$javax_swing_JMenu$ext_vamsas_ServiceHandle$jalview_gui_AlignFrame',  function (wsmenu, sh, af) {
var method=Clazz.new_([sh.getName$()],$I$(15,1).c$$S);
method.setToolTipText$S(sh.getEndpointURL$());
method.addActionListener$java_awt_event_ActionListener(((P$.JPredClient$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JPredClient$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var msa=this.$finals$.af.gatherSeqOrMsaForSecStrPrediction$();
if (msa.getSequences$().length == 1) {
Clazz.new_([this.$finals$.sh, this.$finals$.af.getTitle$(), false, msa, this.$finals$.af, true],$I$(16,1).c$$ext_vamsas_ServiceHandle$S$Z$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame$Z);
} else {
if (msa.getSequences$().length > 1) {
Clazz.new_([this.$finals$.sh, this.$finals$.af.getTitle$(), true, msa, this.$finals$.af, true],$I$(16,1).c$$ext_vamsas_ServiceHandle$S$Z$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame$Z);
}}});
})()
), Clazz.new_(P$.JPredClient$1.$init$,[this, {af:af,sh:sh}])));
wsmenu.add$javax_swing_JMenuItem(method);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
