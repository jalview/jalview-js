(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.exceptions"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ExceptionParameterError", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['_errorMessage','_details']]]

Clazz.newMeth(C$, 'c$$S$S', function (errorMessage, details) {
Clazz.super_(C$, this);
this._errorMessage=errorMessage;
this._details=details;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (details) {
Clazz.super_(C$, this);
this._errorMessage="";
this._details=details;
}, 1);

Clazz.newMeth(C$, 'getError$', function () {
return this._errorMessage;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return this._details;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
