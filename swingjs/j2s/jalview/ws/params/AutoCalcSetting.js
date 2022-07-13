(function(){var P$=Clazz.newPackage("jalview.ws.params"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AutoCalcSetting");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['autoUpdate'],'O',['preset','jalview.ws.params.WsParamSetI','jobArgset','java.util.List']]]

Clazz.newMeth(C$, 'c$$jalview_ws_params_WsParamSetI$java_util_List$Z',  function (preset2, jobArgset2, autoUpdate2) {
;C$.$init$.apply(this);
this.autoUpdate=autoUpdate2;
this.preset=preset2;
this.jobArgset=jobArgset2;
}, 1);

Clazz.newMeth(C$, 'isAutoUpdate$',  function () {
return this.autoUpdate;
});

Clazz.newMeth(C$, 'setAutoUpdate$Z',  function (autoUpdate) {
this.autoUpdate=autoUpdate;
});

Clazz.newMeth(C$, 'getPreset$',  function () {
return this.preset;
});

Clazz.newMeth(C$, 'setPreset$jalview_ws_params_WsParamSetI',  function (preset) {
this.preset=preset;
});

Clazz.newMeth(C$, 'getArgumentSet$',  function () {
return this.jobArgset;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
