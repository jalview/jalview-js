(function(){var P$=java.lang,I$=[];
/*c*/var C$=Clazz.newClass(P$, "TypeNotPresentException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['typeName']]]

Clazz.newMeth(C$, 'c$$S$Throwable', function (typeName, cause) {
;C$.superclazz.c$$S$Throwable.apply(this,["Type " + typeName + " not present" , cause]);C$.$init$.apply(this);
this.typeName=typeName;
}, 1);

Clazz.newMeth(C$, 'typeName$', function () {
return this.typeName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
