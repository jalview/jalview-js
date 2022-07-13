(function(){var P$=Clazz.newPackage("jalview.ws.params.simple"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Parameter", null, 'jalview.ws.params.simple.Option', ['jalview.ws.params.OptionI', 'jalview.ws.params.ParameterI']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['validator','jalview.ws.params.ValueConstrainI']]]

Clazz.newMeth(C$, 'getValidValue$',  function () {
return this.validator;
});

Clazz.newMeth(C$, 'c$$jalview_ws_params_simple_Parameter',  function (parm) {
;C$.superclazz.c$$jalview_ws_params_simple_Option.apply(this,[parm]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_params_ValueConstrainI',  function (validator) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.validator=validator;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
