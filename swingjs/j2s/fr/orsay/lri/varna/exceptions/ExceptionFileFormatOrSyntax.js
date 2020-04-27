(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.exceptions"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ExceptionFileFormatOrSyntax", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['_path','_errorMessage']]]

Clazz.newMeth(C$, 'c$$S$S', function (errorMessage, path) {
Clazz.super_(C$, this);
this._path=path;
this._errorMessage=errorMessage;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (path) {
Clazz.super_(C$, this);
this._path=path;
}, 1);

Clazz.newMeth(C$, 'getError$', function () {
return this._errorMessage;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return "Unknown format or syntax error in file ' " + this._path + " '. \nLoading cancelled !" ;
});

Clazz.newMeth(C$, 'setPath$S', function (path) {
this._path=path;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
