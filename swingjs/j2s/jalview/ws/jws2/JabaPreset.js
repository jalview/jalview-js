(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),I$=[[0,'Error','jalview.util.MessageManager','jalview.ws.jws2.JabaParamStore']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JabaPreset", null, null, 'jalview.ws.params.WsParamSetI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.p=null;
},1);

C$.$fields$=[['O',['p','compbio.metadata.Preset','service','jalview.ws.jws2.jabaws2.Jws2Instance']]]

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$compbio_metadata_Preset',  function (svc, preset) {
;C$.$init$.apply(this);
this.service=svc;
this.p=preset;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.p.getName$();
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.p.getDescription$();
});

Clazz.newMeth(C$, 'getApplicableUrls$',  function () {
return Clazz.array(String, -1, [this.service.getUri$()]);
});

Clazz.newMeth(C$, 'getSourceFile$',  function () {
return null;
});

Clazz.newMeth(C$, 'isModifiable$',  function () {
return false;
});

Clazz.newMeth(C$, 'setSourceFile$S',  function (newfile) {
throw Clazz.new_([$I$(2,"formatMessage$S$SA",["error.cannot_set_source_file_for", Clazz.array(String, -1, [this.getClass$().toString()])])],$I$(1,1).c$$S);
});

Clazz.newMeth(C$, 'getArguments$',  function () {
try {
return $I$(3,"getJwsArgsfromJaba$java_util_List",[this.p.getArguments$compbio_metadata_RunnerConfig(this.service.getRunnerConfig$())]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
throw Clazz.new_([$I$(2).getString$S("error.mismatch_service_instance_preset")],$I$(1,1).c$$S);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setArguments$java_util_List',  function (args) {
throw Clazz.new_([$I$(2).getString$S("error.cannot_set_params_for_ws_preset")],$I$(1,1).c$$S);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
