(function(){var P$=Clazz.newPackage("jalview.ws.params"),I$=[];
var C$=Clazz.newClass(P$, "AutoCalcSetting");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.autoUpdate=false;
this.preset=null;
this.jobArgset=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_params_WsParamSetI$java_util_List$Z', function (preset2, jobArgset2, autoUpdate2) {
C$.$init$.apply(this);
this.autoUpdate=autoUpdate2;
this.preset=preset2;
this.jobArgset=jobArgset2;
}, 1);

Clazz.newMeth(C$, 'isAutoUpdate$', function () {
return this.autoUpdate;
});

Clazz.newMeth(C$, 'setAutoUpdate$Z', function (autoUpdate) {
this.autoUpdate=autoUpdate;
});

Clazz.newMeth(C$, 'getPreset$', function () {
return this.preset;
});

Clazz.newMeth(C$, 'setPreset$jalview_ws_params_WsParamSetI', function (preset) {
this.preset=preset;
});

Clazz.newMeth(C$, 'getArgumentSet$', function () {
return this.jobArgset;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
