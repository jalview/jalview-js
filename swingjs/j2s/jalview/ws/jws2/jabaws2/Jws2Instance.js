(function(){var P$=Clazz.newPackage("jalview.ws.jws2.jabaws2"),I$=[[0,'Error','jalview.util.MessageManager','jalview.ws.jws2.JabaParamStore','jalview.gui.Desktop','jalview.ws.jws2.MsaWSClient','jalview.ws.jws2.SequenceAnnotationWSClient']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Jws2Instance");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.hosturl=null;
this.serviceType=null;
this.action=null;
this.service=null;
this.description=null;
this.docUrl=null;
this.presets=null;
this.paramStore=null;
this.hasParams=false;
this.lookedForParams=false;
this.aaui=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.presets=null;
this.paramStore=null;
this.hasParams=false;
this.lookedForParams=false;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S$compbio_data_msa_JABAService', function (hosturl, serviceType, action, description, service) {
C$.$init$.apply(this);
this.hosturl=hosturl;
this.serviceType=serviceType;
this.service=service;
this.action=action;
this.description=description;
var p=description.indexOf$S("MORE INFORMATION:");
if (p > -1) {
this.docUrl=description.substring$I(description.indexOf$S$I("http", p)).trim$();
if (this.docUrl.indexOf$I("\n") > -1) {
this.docUrl=this.docUrl.substring$I$I(0, this.docUrl.indexOf$S("\n")).trim$();
}}}, 1);

Clazz.newMeth(C$, 'getPresets$', function () {
if (this.presets == null ) {
try {
if (Clazz.instanceOf(this.service, "compbio.data.msa.MsaWS")) {
this.presets=(this.service).getPresets$();
}if (Clazz.instanceOf(this.service, "compbio.data.msa.SequenceAnnotation")) {
this.presets=(this.service).getPresets$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Exception when retrieving presets for service " + this.serviceType + " at " + this.hosturl );
} else {
throw ex;
}
}
}return this.presets;
});

Clazz.newMeth(C$, 'getHost$', function () {
return this.hosturl;
});

Clazz.newMeth(C$, 'getActionText$', function () {
return this.action + " with " + this.serviceType ;
});

Clazz.newMeth(C$, 'getRunnerConfig$', function () {
if (Clazz.instanceOf(this.service, "compbio.data.msa.MsaWS")) {
return (this.service).getRunnerOptions$();
}if (Clazz.instanceOf(this.service, "compbio.data.msa.SequenceAnnotation")) {
return (this.service).getRunnerOptions$();
}throw Clazz.new_($I$(1).c$$S,[$I$(2).formatMessage$S$SA("error.implementation_error_runner_config_not_available", Clazz.array(String, -1, [this.serviceType, this.service.getClass$().toString()]))]);
});

Clazz.newMeth(C$, 'finalize$', function () {
if (this.service != null ) {
try {
(this.service).close$();
} catch (t) {
}
}C$.superclazz.prototype.finalize$.apply(this, []);
});

Clazz.newMeth(C$, 'getParamStore$', function () {
if (this.paramStore == null ) {
try {
this.paramStore=Clazz.new_($I$(3).c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_ParamManager,[this, ($I$(4).instance != null  ? $I$(4).getUserParameterStore$() : null)]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Unexpected exception creating JabaParamStore.");
ex.printStackTrace$();
} else {
throw ex;
}
}
}return this.paramStore;
});

Clazz.newMeth(C$, 'getUri$', function () {
return this.hosturl + (this.hosturl.lastIndexOf$S("/") == (this.hosturl.length$() - 1) ? "" : "/") + this.serviceType ;
});

Clazz.newMeth(C$, 'hasParameters$', function () {
if (!this.lookedForParams) {
this.lookedForParams=true;
try {
this.hasParams=(this.getRunnerConfig$().getArguments$().size$() > 0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}return this.hasParams;
});

Clazz.newMeth(C$, 'attachWSMenuEntry$javax_swing_JMenu$jalview_gui_AlignFrame', function (atpoint, alignFrame) {
if (Clazz.instanceOf(this.service, "compbio.data.msa.MsaWS")) {
Clazz.new_($I$(5)).attachWSMenuEntry$javax_swing_JMenu$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame(atpoint, this, alignFrame);
} else if (Clazz.instanceOf(this.service, "compbio.data.msa.SequenceAnnotation")) {
Clazz.new_($I$(6)).attachWSMenuEntry$javax_swing_JMenu$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame(atpoint, this, alignFrame);
}});

Clazz.newMeth(C$, 'getServiceTypeURI$', function () {
return "java:" + this.serviceType;
});

Clazz.newMeth(C$, 'getAlignAnalysisUI$', function () {
return this.aaui;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
