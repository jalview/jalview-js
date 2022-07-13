(function(){var P$=Clazz.newPackage("jalview.ws.jws2.dm"),I$=[[0,'java.util.ArrayList','Error','jalview.util.MessageManager','jalview.ws.jws2.JabaParamStore','StringBuffer','jalview.ws.jws2.ParameterUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AAConSettings", null, 'jalview.ws.params.AutoCalcSetting');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['service','jalview.ws.jws2.jabaws2.Jws2Instance']]]

Clazz.newMeth(C$, 'c$$Z$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List',  function (autoUpdate, service, preset, jobArgset) {
;C$.superclazz.c$$jalview_ws_params_WsParamSetI$java_util_List$Z.apply(this,[preset, jobArgset, autoUpdate]);C$.$init$.apply(this);
this.service=service;
}, 1);

Clazz.newMeth(C$, 'getService$',  function () {
return this.service;
});

Clazz.newMeth(C$, 'setService$jalview_ws_jws2_jabaws2_Jws2Instance',  function (service) {
this.service=service;
if (this.preset != null ) {
for (var url, $url = 0, $$url = this.preset.getApplicableUrls$(); $url<$$url.length&&((url=($$url[$url])),1);$url++) {
if (url.equals$O(service.getUri$())) {
return;
}}
var pr=service.getParamStore$().getPreset$S(this.preset.getName$());
if (Clazz.instanceOf(pr, "jalview.ws.jws2.JabaPreset") && Clazz.instanceOf(this.preset, "jalview.ws.jws2.JabaPreset") ) {
this.preset=pr;
return;
}var oldargs=Clazz.new_($I$(1,1));
var newargs=Clazz.new_($I$(1,1));
oldargs.addAll$java_util_Collection(this.preset.getArguments$());
for (var newparg, $newparg = pr.getArguments$().iterator$(); $newparg.hasNext$()&&((newparg=($newparg.next$())),1);) {
if (!oldargs.remove$O(newparg)) {
newargs.add$O(newparg);
}}
if (oldargs.size$() == 0 && newargs.size$() == 0 ) {
this.preset=pr;
return;
}throw Clazz.new_([$I$(3).getString$S("error.parameter_migration_not_implemented_yet")],$I$(2,1).c$$S);
}});

Clazz.newMeth(C$, 'getJobArgset$',  function () {
return this.jobArgset == null  ? null : $I$(4).getJabafromJwsArgs$java_util_List(this.jobArgset);
});

Clazz.newMeth(C$, 'setJobArgset$java_util_List',  function (jobArgset) {
this.jobArgset=jobArgset == null  ? null : $I$(4).getJwsArgsfromJaba$java_util_List(jobArgset);
});

Clazz.newMeth(C$, 'getWsParamFile$',  function () {
var opts=null;
if (this.jobArgset != null ) {
opts=$I$(4).getJabafromJwsArgs$java_util_List(this.jobArgset);
} else {
if (this.preset != null ) {
opts=$I$(4,"getJabafromJwsArgs$java_util_List",[this.preset.getArguments$()]);
}}if (opts == null  || opts.size$() == 0 ) {
return "";
}var pset=Clazz.new_($I$(5,1));
for (var ps, $ps = $I$(6).writeParameterSet$java_util_List$S(opts, " ").iterator$(); $ps.hasNext$()&&((ps=($ps.next$())),1);) {
pset.append$S(ps);
pset.append$S("\n");
}
return pset.toString();
});

Clazz.newMeth(C$, 'getServiceURI$',  function () {
return this.service.getServiceTypeURI$();
});

Clazz.newMeth(C$, 'getServiceURLs$',  function () {
return Clazz.array(String, -1, [this.service.getUri$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
