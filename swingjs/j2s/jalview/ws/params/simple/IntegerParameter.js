(function(){var P$=Clazz.newPackage("jalview.ws.params.simple"),I$=[[0,['jalview.ws.params.ValueConstrainI','.ValueType']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IntegerParameter", null, 'jalview.ws.params.simple.Option', 'jalview.ws.params.ParameterI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.defval=0;
this.min=0;
this.max=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getValidValue$', function () {
return ((P$.IntegerParameter$1||
(function(){var C$=Clazz.newClass(P$, "IntegerParameter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.ws.params.ValueConstrainI', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
return $I$(1).Integer;
});

Clazz.newMeth(C$, 'getMin$', function () {
if (this.b$['jalview.ws.params.simple.IntegerParameter'].min < this.b$['jalview.ws.params.simple.IntegerParameter'].max) {
return new Integer(this.b$['jalview.ws.params.simple.IntegerParameter'].min);
} else {
return null;
}});

Clazz.newMeth(C$, 'getMax$', function () {
if (this.b$['jalview.ws.params.simple.IntegerParameter'].min < this.b$['jalview.ws.params.simple.IntegerParameter'].max) {
return new Integer(this.b$['jalview.ws.params.simple.IntegerParameter'].max);
} else {
return null;
}});
})()
), Clazz.new_(P$.IntegerParameter$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'c$$jalview_ws_params_simple_IntegerParameter', function (parm) {
C$.superclazz.c$$jalview_ws_params_simple_Option.apply(this, [parm]);
C$.$init$.apply(this);
this.max=parm.max;
this.min=parm.min;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Z$I$I$I', function (name, description, required, defValue, min, max) {
C$.superclazz.c$$S$S$Z$S$S$java_util_Collection$java_net_URL.apply(this, [name, description, required, String.valueOf$I(defValue), null, null, null]);
C$.$init$.apply(this);
this.defval=defValue;
this.min=min;
this.max=max;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Z$I$I$I$I', function (name, description, required, defValue, value, min, max) {
C$.superclazz.c$$S$S$Z$S$S$java_util_Collection$java_net_URL.apply(this, [name, description, required, String.valueOf$I(defValue), String.valueOf$I(value), null, null]);
C$.$init$.apply(this);
this.defval=defValue;
this.min=min;
this.max=max;
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$jalview_ws_params_simple_IntegerParameter,[this]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
