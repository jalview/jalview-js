(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.exceptions"),I$=[];
var C$=Clazz.newClass(P$, "MappingException", null, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._errorMessage=null;
this._type=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (errorMessage) {
Clazz.super_(C$, this,1);
this._errorMessage=errorMessage;
this._type=3;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (type) {
Clazz.super_(C$, this,1);
this._type=type;
}, 1);

Clazz.newMeth(C$, 'getMessage$', function () {
switch (this._type) {
case 1:
return "Mapping error: Attempt to define multiple partners for a base-pair";
case 2:
return "Mapping error: Bad input alignment";
case 3:
return this._errorMessage;
default:
return "Mapping error: Type is unknown.";
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
