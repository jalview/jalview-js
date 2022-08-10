(function(){var P$=Clazz.newPackage("java.time.format"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DateTimeParseException", null, 'java.time.DateTimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['errorIndex'],'S',['parsedString']]]

Clazz.newMeth(C$, 'c$$S$CharSequence$I', function (message, parsedData, errorIndex) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.parsedString=parsedData.toString();
this.errorIndex=errorIndex;
}, 1);

Clazz.newMeth(C$, 'c$$S$CharSequence$I$Throwable', function (message, parsedData, errorIndex, cause) {
;C$.superclazz.c$$S$Throwable.apply(this,[message, cause]);C$.$init$.apply(this);
this.parsedString=parsedData.toString();
this.errorIndex=errorIndex;
}, 1);

Clazz.newMeth(C$, 'getParsedString$', function () {
return this.parsedString;
});

Clazz.newMeth(C$, 'getErrorIndex$', function () {
return this.errorIndex;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
