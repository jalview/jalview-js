(function(){var P$=Clazz.newPackage("jalview.ws.rest"),I$=[[0,'jalview.gui.Desktop','jalview.util.MessageManager','jalview.gui.WebserviceInfo','javax.swing.JMenuItem','jalview.ws.rest.RestClient','jalview.datamodel.AlignmentView','StringBuffer','jalview.ws.rest.RestJobThread','jalview.gui.JvOptionPane','java.util.Hashtable','jalview.ws.rest.params.Alignment','jalview.ws.rest.params.SeqGroupIndexVector','jalview.ws.rest.RestServiceDescription',['jalview.io.packed.DataProvider','.JvDataType'],'java.util.Vector','jalview.bin.Cache']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RestClient", null, 'jalview.ws.WSClient', ['jalview.ws.WSClientI', 'jalview.ws.WSMenuEntryProviderI']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.headless=false;
this.undoredo=null;
},1);

C$.$fields$=[['Z',['headless'],'S',['viewTitle'],'O',['service','jalview.ws.rest.RestServiceDescription','af','jalview.gui.AlignFrame','av','jalview.gui.AlignViewport','undoredo','long[]','_input','jalview.datamodel.AlignmentView','jds','jalview.io.packed.JalviewDataset']]
,['O',['services','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$jalview_ws_rest_RestServiceDescription', function (rsd) {
Clazz.super_(C$, this);
this.service=rsd;
}, 1);

Clazz.newMeth(C$, 'recoverAlignFrameForView$', function () {
return $I$(1).getAlignFrameFor$jalview_api_AlignViewportI(this.av);
});

Clazz.newMeth(C$, 'c$$jalview_ws_rest_RestServiceDescription$jalview_gui_AlignFrame', function (service2, alignFrame) {
C$.c$$jalview_ws_rest_RestServiceDescription$jalview_gui_AlignFrame$Z.apply(this, [service2, alignFrame, false]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_rest_RestServiceDescription$jalview_gui_AlignFrame$Z', function (service2, alignFrame, nogui) {
Clazz.super_(C$, this);
this.service=service2;
this.af=alignFrame;
this.av=alignFrame.getViewport$();
this.headless=nogui;
this.constructJob$();
}, 1);

Clazz.newMeth(C$, 'setWebserviceInfo$Z', function (headless) {
this.WebServiceJobTitle=$I$(2,"formatMessage$S$SA",["label.webservice_job_title", Clazz.array(String, -1, [this.service.details.Action, this.service.details.Name])]);
this.WebServiceName=this.service.details.Name;
this.WebServiceReference="No reference - go to url for more info";
if (this.service.details.description != null ) {
this.WebServiceReference=this.service.details.description;
}if (!headless) {
this.wsInfo=Clazz.new_($I$(3,1).c$$S$S$Z,[this.WebServiceJobTitle, this.WebServiceName + "\n" + this.WebServiceReference , true]);
this.wsInfo.setRenderAsHtml$Z(true);
}});

Clazz.newMeth(C$, 'isCancellable$', function () {
return false;
});

Clazz.newMeth(C$, 'canMergeResults$', function () {
return false;
});

Clazz.newMeth(C$, 'cancelJob$', function () {
System.err.println$S("Cannot cancel this job type: " + this.service);
});

Clazz.newMeth(C$, 'attachWSMenuEntry$javax_swing_JMenu$jalview_gui_AlignFrame', function (wsmenu, alignFrame) {
var submit=Clazz.new_($I$(4,1).c$$S,[this.service.details.Name]);
submit.setToolTipText$S($I$(2,"formatMessage$S$SA",["label.rest_client_submit", Clazz.array(String, -1, [this.service.details.Action, this.service.details.Name])]));
submit.addActionListener$java_awt_event_ActionListener(((P$.RestClient$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RestClient$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_($I$(5,1).c$$jalview_ws_rest_RestServiceDescription$jalview_gui_AlignFrame,[this.b$['jalview.ws.rest.RestClient'].service, this.$finals$.alignFrame]);
});
})()
), Clazz.new_(P$.RestClient$1.$init$,[this, {alignFrame:alignFrame}])));
wsmenu.add$javax_swing_JMenuItem(submit);
wsmenu.addMenuListener$javax_swing_event_MenuListener(((P$.RestClient$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "RestClient$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent', function (e) {
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent', function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent', function (e) {
});
})()
), Clazz.new_(P$.RestClient$2.$init$,[this, null])));
});

Clazz.newMeth(C$, 'isAlignmentModified$', function () {
if (this.undoredo == null  || this.av == null   || this.av.getAlignment$() == null  ) {
return true;
}if (this.av.isUndoRedoHashModified$JA(this.undoredo)) {
return true;
}return false;
});

Clazz.newMeth(C$, 'constructJob$', function () {
this.service.setInvolvesFlags$();
this.undoredo=this.av.getUndoRedoHash$();
var selExists=(this.av.getSelectionGroup$() != null ) && (this.av.getSelectionGroup$().getSize$() > 1) ;
if (selExists) {
if (this.service.partitiondata) {
if (this.av.getAlignment$().getGroups$() != null  && this.av.getAlignment$().getGroups$().size$() > 0 ) {
this._input=Clazz.new_([this.av.getAlignment$(), this.av.getAlignment$().getHiddenColumns$(), this.av.getSelectionGroup$(), this.av.hasHiddenColumns$(), true, true],$I$(6,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z);
this.viewTitle=$I$(2,"formatMessage$S$SA",["label.select_visible_region_of", Clazz.array(String, -1, [(this.av.hasHiddenColumns$() ? $I$(2).getString$S("label.visible") : ""), this.af.getTitle$()])]);
} else {
this._input=Clazz.new_([this.av.getAlignment$(), this.av.getAlignment$().getHiddenColumns$(), this.av.getSelectionGroup$(), this.av.hasHiddenColumns$(), false, true],$I$(6,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z);
}this.viewTitle=$I$(2,"formatMessage$S$SA",["label.select_unselect_visible_regions_from", Clazz.array(String, -1, [(this.av.hasHiddenColumns$() ? $I$(2).getString$S("label.visible") : ""), this.af.getTitle$()])]);
} else {
this._input=Clazz.new_([this.av.getAlignment$(), this.av.getAlignment$().getHiddenColumns$(), this.av.getSelectionGroup$(), this.av.hasHiddenColumns$(), true, true],$I$(6,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z);
this.viewTitle=$I$(2,"formatMessage$S$SA",["label.select_visible_region_of", Clazz.array(String, -1, [(this.av.hasHiddenColumns$() ? $I$(2).getString$S("label.visible") : ""), this.af.getTitle$()])]);
}} else {
this._input=Clazz.new_([this.av.getAlignment$(), this.av.getAlignment$().getHiddenColumns$(), null, this.av.hasHiddenColumns$(), false, true],$I$(6,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z);
this.viewTitle="" + (this.av.hasHiddenColumns$() ? (Clazz.new_($I$(7,1).c$$S,[" "]).append$S($I$(2).getString$S("label.visible_region_of")).toString()) : "") + this.af.getTitle$() ;
}var jobsthread=Clazz.new_($I$(8,1).c$$jalview_ws_rest_RestClient,[this]);
if (jobsthread.isValid$()) {
this.setWebserviceInfo$Z(this.headless);
if (!this.headless) {
this.wsInfo.setthisService$jalview_ws_WSClientI(this);
jobsthread.setWebServiceInfo$jalview_gui_WebserviceInfo(this.wsInfo);
}jobsthread.start$();
} else {
$I$(9,"showMessageDialog$java_awt_Component$S$S$I",[$I$(1).desktop, (jobsthread.hasWarnings$() ? jobsthread.getWarnings$() : $I$(2).getString$S("label.job_couldnt_be_started_check_input")), $I$(2).getString$S("label.unable_start_web_service_analysis"), 2]);
}});

Clazz.newMeth(C$, 'makeShmmrRestClient$', function () {
var action="Analysis";
var description="Sequence Harmony and Multi-Relief (Brandt et al. 2010)";
var name=$I$(2).getString$S("label.multiharmony");
var iparams=Clazz.new_($I$(10,1));
var toolp;
var aliinput=Clazz.new_($I$(11,1));
aliinput.token="ali_file";
aliinput.writeAsFile=true;
iparams.put$O$O(aliinput.token, aliinput);
var sgroups=Clazz.new_($I$(12,1));
sgroups.setMinsize$I(2);
sgroups.min=2;
iparams.put$O$O("groups", sgroups);
sgroups.token="groups";
sgroups.sep=" ";
var shmrService=Clazz.new_([action, description, name, "http://zeus.few.vu.nl/programs/shmrwww/index.php?tool=jalview", "?tool=jalview", iparams, true, false, "-"],$I$(13,1).c$$S$S$S$S$S$java_util_Map$Z$Z$C);
shmrService.addResultDatatype$jalview_io_packed_DataProvider_JvDataType($I$(14).ANNOTATION);
return Clazz.new_(C$.c$$jalview_ws_rest_RestServiceDescription,[shmrService]);
}, 1);

Clazz.newMeth(C$, 'recoverAlignPanelForView$', function () {
var aps=$I$(1,"getAlignmentPanels$S",[this.av.getSequenceSetId$()]);
for (var alp, $alp = 0, $$alp = aps; $alp<$$alp.length&&((alp=($$alp[$alp])),1);$alp++) {
if (alp.av === this.av ) {
return alp;
}}
return null;
});

Clazz.newMeth(C$, 'isShowResultsInNewView$', function () {
return true;
});

Clazz.newMeth(C$, 'getRestClients$', function () {
if (C$.services == null ) {
C$.services=Clazz.new_($I$(15,1));
try {
for (var descr, $descr = $I$(13,"parseDescriptions$S",[$I$(16,"getDefault$S$S",["RSBS_SERVICES", C$.makeShmmrRestClient$().service.toString()])]).iterator$(); $descr.hasNext$()&&((descr=($descr.next$())),1);) {
C$.services.add$O(descr.toString());
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Serious - RSBS descriptions in user preferences are corrupt!");
ex.printStackTrace$();
} else {
throw ex;
}
}
}var lst=Clazz.array(C$, [C$.services.size$()]);
var i=0;
for (var svc, $svc = C$.services.iterator$(); $svc.hasNext$()&&((svc=($svc.next$())),1);) {
lst[i++]=Clazz.new_(C$.c$$jalview_ws_rest_RestServiceDescription,[Clazz.new_($I$(13,1).c$$S,[svc])]);
}
return lst;
}, 1);

Clazz.newMeth(C$, 'getAction$', function () {
return this.service.details.Action;
});

Clazz.newMeth(C$, 'getRestDescription$', function () {
return this.service;
});

Clazz.newMeth(C$, 'getRsbsDescriptions$', function () {
var rsbsDescrs=Clazz.new_($I$(15,1));
for (var rsbs, $rsbs = 0, $$rsbs = C$.getRestClients$(); $rsbs<$$rsbs.length&&((rsbs=($$rsbs[$rsbs])),1);$rsbs++) {
rsbsDescrs.add$O(rsbs.getRestDescription$().toString());
}
return rsbsDescrs;
}, 1);

Clazz.newMeth(C$, 'setRsbsServices$java_util_Vector', function (rsbsUrls) {
if (rsbsUrls != null ) {
C$.services=Clazz.new_($I$(15,1).c$$java_util_Collection,[rsbsUrls]);
var sprop=Clazz.new_($I$(7,1));
for (var s, $s = C$.services.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
sprop.append$S(s);
}
$I$(16,"setProperty$S$S",["RSBS_SERVICES", sprop.toString()]);
} else {
$I$(16).removeProperty$S("RSBS_SERVICES");
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.services=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
