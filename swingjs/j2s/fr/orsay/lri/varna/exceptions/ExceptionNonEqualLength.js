(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.exceptions"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ExceptionNonEqualLength", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['_errorMessage']]]

Clazz.newMeth(C$, 'c$$S', function (errorMessage) {
Clazz.super_(C$, this);
this._errorMessage=errorMessage;
}, 1);

Clazz.newMeth(C$, 'getError$', function () {
return this._errorMessage;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return "Both RNA have not the same length, cannot resolve secondary structure.";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
