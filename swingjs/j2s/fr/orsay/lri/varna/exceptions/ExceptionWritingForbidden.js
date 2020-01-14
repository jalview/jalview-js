(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.exceptions"),I$=[];
var C$=Clazz.newClass(P$, "ExceptionWritingForbidden", null, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._errorMessage=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (errorMessage) {
Clazz.super_(C$, this,1);
this._errorMessage=errorMessage;
}, 1);

Clazz.newMeth(C$, 'getError$', function () {
return this._errorMessage;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return "Writing is not allowed within current security policy.";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
