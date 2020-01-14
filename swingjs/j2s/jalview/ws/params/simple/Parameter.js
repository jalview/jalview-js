(function(){var P$=Clazz.newPackage("jalview.ws.params.simple"),I$=[];
var C$=Clazz.newClass(P$, "Parameter", null, 'jalview.ws.params.simple.Option', ['jalview.ws.params.OptionI', 'jalview.ws.params.ParameterI']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.validator=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getValidValue$', function () {
return this.validator;
});

Clazz.newMeth(C$, 'c$$jalview_ws_params_simple_Parameter', function (parm) {
C$.superclazz.c$$jalview_ws_params_simple_Option.apply(this, [parm]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_params_ValueConstrainI', function (validator) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.validator=validator;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
