(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.exceptions"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MappingException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['_type'],'S',['_errorMessage']]]

Clazz.newMeth(C$, 'c$$S', function (errorMessage) {
Clazz.super_(C$, this);
this._errorMessage=errorMessage;
this._type=3;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (type) {
Clazz.super_(C$, this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
