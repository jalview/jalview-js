(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),p$1={},I$=[[0,'java.util.Hashtable','java.util.ArrayList','jalview.ws.jws2.JabaPreset','jalview.ws.jws2.dm.JabaParameter','jalview.ws.jws2.dm.JabaOption','Error','jalview.util.MessageManager','jalview.ws.params.ArgumentI','jalview.util.QuickSort','java.util.Arrays','jalview.ws.jws2.dm.JabaWsParamSet','java.util.StringTokenizer','jalview.ws.jws2.ParameterUtils','StringBuffer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JabaParamStore", null, null, 'jalview.ws.params.ParamDatastoreI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.editedParams=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['editedParams','java.util.Hashtable','service','jalview.ws.jws2.jabaws2.Jws2Instance','serviceOptions','compbio.metadata.RunnerConfig','servicePresets','java.util.Hashtable','manager','jalview.ws.params.ParamManager']]]

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance',  function (service) {
C$.c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_ParamManager.apply(this, [service, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_ParamManager',  function (service, manager) {
;C$.$init$.apply(this);
this.service=service;
this.serviceOptions=service.getRunnerConfig$();
this.manager=manager;
if (manager != null ) {
manager.registerParser$S$jalview_ws_params_ParamDatastoreI(service.getUri$(), this);
var prams=manager.getParameterSet$S$S$Z$Z(null, service.getUri$(), true, false);
if (prams != null ) {
for (var paramset, $paramset = 0, $$paramset = prams; $paramset<$$paramset.length&&((paramset=($$paramset[$paramset])),1);$paramset++) {
if (Clazz.instanceOf(paramset, "jalview.ws.jws2.dm.JabaWsParamSet")) {
this.editedParams.put$O$O(paramset.getName$(), paramset);
} else {
System.err.println$S("Warning: Ignoring parameter set instance of type " + paramset.getClass$() + " : Bound but not applicable for service at " + service.getUri$() );
}}
}}}, 1);

Clazz.newMeth(C$, 'getPresets$',  function () {
var prefs=Clazz.new_($I$(2,1));
if (this.servicePresets == null ) {
this.servicePresets=Clazz.new_($I$(1,1));
var prman;
if ((prman=this.service.getPresets$()) != null ) {
var pset=prman.getPresets$();
if (pset != null ) {
for (var pr, $pr = pset.iterator$(); $pr.hasNext$()&&((pr=($pr.next$())),1);) {
var prset=Clazz.new_($I$(3,1).c$$jalview_ws_jws2_jabaws2_Jws2Instance$compbio_metadata_Preset,[this.service, pr]);
this.servicePresets.put$O$O(prset.getName$(), prset);
}
}}}for (var pr, $pr = this.servicePresets.values$().iterator$(); $pr.hasNext$()&&((pr=($pr.next$())),1);) {
prefs.add$O(pr);
}
for (var wspset, $wspset = this.editedParams.values$().iterator$(); $wspset.hasNext$()&&((wspset=($wspset.next$())),1);) {
prefs.add$O(wspset);
}
return prefs;
});

Clazz.newMeth(C$, 'getPreset$S',  function (name) {
for (var pr, $pr = this.getPresets$().iterator$(); $pr.hasNext$()&&((pr=($pr.next$())),1);) {
if (pr.getName$().equals$O(name)) {
return pr;
}}
return null;
});

Clazz.newMeth(C$, 'getJwsArgsfromJaba$java_util_List',  function (jabargs) {
return C$.getJwsArgsfromJaba$java_util_List$Z(jabargs, true);
}, 1);

Clazz.newMeth(C$, 'getJwsArgsfromJaba$java_util_List$Z',  function (jabargs, sortByOpt) {
var rgs=Clazz.new_($I$(2,1));
var rgnames=Clazz.new_($I$(2,1));
for (var rg, $rg = jabargs.iterator$(); $rg.hasNext$()&&((rg=($rg.next$())),1);) {
var narg=null;
var nargstring=null;
if (Clazz.instanceOf(rg, "compbio.metadata.Parameter")) {
narg=Clazz.new_($I$(4,1).c$$compbio_metadata_Parameter,[rg]);
nargstring=narg.getName$();
} else if (Clazz.instanceOf(rg, "compbio.metadata.Option")) {
narg=Clazz.new_($I$(5,1).c$$compbio_metadata_Option,[rg]);
nargstring=(rg).getOptionNames$().get$I(0);
}if (narg == null ) {
throw Clazz.new_([$I$(7,"formatMessage$S$SA",["error.implementation_error_cannot_handle_jaba_param", Clazz.array(String, -1, [rg.getClass$().toString()])])],$I$(6,1).c$$S);
} else {
rgs.add$O(narg);
rgnames.add$O(nargstring);
}}
if (!sortByOpt) {
return rgs;
}var rgssort=rgs.toArray$OA(Clazz.array($I$(8), [rgs.size$()]));
var rgssorton=rgnames.toArray$OA(Clazz.array(String, [rgs.size$()]));
$I$(9).sort$SA$OA(rgssorton, rgssort);
var tmp1;
var i=0;
while (rgssort.length - i > i){
tmp1=rgssort[rgssort.length - i - 1 ];
rgssort[rgssort.length - i - 1 ]=rgssort[i];
rgssort[i++]=tmp1;
}
return $I$(10).asList$OA(rgssort);
}, 1);

Clazz.newMeth(C$, 'getJabafromJwsArgs$java_util_List',  function (jwsargs) {
var rgs=Clazz.new_($I$(2,1));
for (var rg, $rg = jwsargs.iterator$(); $rg.hasNext$()&&((rg=($rg.next$())),1);) {
var narg=(Clazz.instanceOf(rg, "jalview.ws.jws2.dm.JabaOption")) ? (rg).getOption$() : null;
if (narg == null ) {
throw Clazz.new_([$I$(7,"formatMessage$S$SA",["error.implementation_error_cannot_handle_jaba_param", Clazz.array(String, -1, [rg.getClass$().toString()])])],$I$(6,1).c$$S);
} else {
rgs.add$O(narg);
}}
return rgs;
}, 1);

Clazz.newMeth(C$, 'getServiceParameters$',  function () {
return C$.getJwsArgsfromJaba$java_util_List(this.serviceOptions.getArguments$());
});

Clazz.newMeth(C$, 'presetExists$S',  function (name) {
return (this.editedParams.containsKey$O(name) || this.servicePresets.containsKey$O(name) );
});

Clazz.newMeth(C$, 'deletePreset$S',  function (name) {
if (this.editedParams.containsKey$O(name)) {
var parameterSet=this.editedParams.get$O(name);
this.editedParams.remove$O(name);
if (this.manager != null ) {
this.manager.deleteParameterSet$jalview_ws_params_WsParamSetI(parameterSet);
}return;
}if (this.servicePresets.containsKey$O(name)) {
throw Clazz.new_([$I$(7).getString$S("error.implementation_error_attempt_to_delete_service_preset")],$I$(6,1).c$$S);
}});

Clazz.newMeth(C$, 'storePreset$S$S$java_util_List',  function (presetName, text, jobParams) {
var jps=Clazz.new_($I$(11,1).c$$S$S$java_util_List,[presetName, text, jobParams]);
jps.setApplicableUrls$SA(Clazz.array(String, -1, [this.service.getUri$()]));
this.editedParams.put$O$O(jps.getName$(), jps);
if (this.manager != null ) {
this.manager.storeParameterSet$jalview_ws_params_WsParamSetI(jps);
}});

Clazz.newMeth(C$, 'updatePreset$S$S$S$java_util_List',  function (oldName, presetName, text, jobParams) {
var jps=((oldName != null ) ? this.getPreset$S(oldName) : this.getPreset$S(presetName));
if (jps == null ) {
throw Clazz.new_([$I$(7,"formatMessage$S$SA",["error.implementation_error_cannot_locate_oldname_presetname", Clazz.array(String, -1, [oldName, presetName])])],$I$(6,1).c$$S);
}jps.setName$S(presetName);
jps.setDescription$S(text);
jps.setArguments$java_util_List(jobParams);
jps.setApplicableUrls$SA(Clazz.array(String, -1, [this.service.getUri$()]));
if (oldName != null  && !oldName.equals$O(jps.getName$()) ) {
this.editedParams.remove$O(oldName);
}this.editedParams.put$O$O(jps.getName$(), jps);
if (this.manager != null ) {
this.manager.storeParameterSet$jalview_ws_params_WsParamSetI(jps);
}});

Clazz.newMeth(C$, 'newWsParamSet$',  function () {
return Clazz.new_($I$(11,1));
});

Clazz.newMeth(C$, 'involves$SA',  function (urls) {
var found=false;
for (var url, $url = 0, $$url = urls; $url<$$url.length&&((url=($$url[$url])),1);$url++) {
if (this.service.getServiceTypeURI$().equals$O(url) || this.service.getUri$().equalsIgnoreCase$S(url) ) {
found=true;
break;
}}
return found;
}, p$1);

Clazz.newMeth(C$, 'parseServiceParameterFile$S$S$SA$S',  function (name, descr, urls, parameterfile) {
if (!p$1.involves$SA.apply(this, [urls])) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(7).getString$S("error.implementation_error_cannot_find_service_url_in_given_set")]);
}var wsp=Clazz.new_($I$(11,1));
wsp.setName$S(name);
wsp.setDescription$S(descr);
wsp.setApplicableUrls$SA(urls.clone$());
var lines=Clazz.new_($I$(2,1));
var st=Clazz.new_($I$(12,1).c$$S$S,[parameterfile, "\n"]);
while (st.hasMoreTokens$()){
lines.add$O(st.nextToken$());
}
wsp.setjabaArguments$java_util_List($I$(13).processParameters$java_util_List$compbio_metadata_RunnerConfig$S(lines, this.serviceOptions, " "));
return wsp;
});

Clazz.newMeth(C$, 'generateServiceParameterFile$jalview_ws_params_WsParamSetI',  function (pset) {
if (!p$1.involves$SA.apply(this, [pset.getApplicableUrls$()])) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(7,"formatMessage$S$SA",["error.implementation_error_cannot_find_service_url_in_given_set_param_store", Clazz.array(String, -1, [this.service.getUri$()])])]);
}if (!(Clazz.instanceOf(pset, "jalview.ws.jws2.dm.JabaWsParamSet"))) {
throw Clazz.new_([$I$(7).getString$S("error.implementation_error_jabaws_param_set_only_handled_by")],$I$(6,1).c$$S);
}var rslt=Clazz.new_($I$(14,1));
for (var ln, $ln = $I$(13,"writeParameterSet$java_util_List$S",[(pset).getjabaArguments$(), " "]).iterator$(); $ln.hasNext$()&&((ln=($ln.next$())),1);) {
rslt.append$S(ln);
rslt.append$S("\n");
}
;return rslt.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
