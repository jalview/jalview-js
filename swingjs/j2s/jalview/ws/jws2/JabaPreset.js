(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),I$=[[0,'Error','jalview.util.MessageManager','jalview.ws.jws2.JabaParamStore']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JabaPreset", null, null, 'jalview.ws.params.WsParamSetI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.p=null;
this.service=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.p=null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$compbio_metadata_Preset', function (svc, preset) {
C$.$init$.apply(this);
this.service=svc;
this.p=preset;
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.p.getName$();
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.p.getDescription$();
});

Clazz.newMeth(C$, 'getApplicableUrls$', function () {
return Clazz.array(String, -1, [this.service.getUri$()]);
});

Clazz.newMeth(C$, 'getSourceFile$', function () {
return null;
});

Clazz.newMeth(C$, 'isModifiable$', function () {
return false;
});

Clazz.newMeth(C$, 'setSourceFile$S', function (newfile) {
throw Clazz.new_($I$(1).c$$S,[$I$(2).formatMessage$S$SA("error.cannot_set_source_file_for", Clazz.array(String, -1, [this.getClass$().toString()]))]);
});

Clazz.newMeth(C$, 'getArguments$', function () {
try {
return $I$(3).getJwsArgsfromJaba$java_util_List(this.p.getArguments$compbio_metadata_RunnerConfig(this.service.getRunnerConfig$()));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
throw Clazz.new_($I$(1).c$$S,[$I$(2).getString$S("error.mismatch_service_instance_preset")]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setArguments$java_util_List', function (args) {
throw Clazz.new_($I$(1).c$$S,[$I$(2).getString$S("error.cannot_set_params_for_ws_preset")]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
