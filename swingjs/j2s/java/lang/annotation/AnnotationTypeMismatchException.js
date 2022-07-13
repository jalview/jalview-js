(function(){var P$=Clazz.newPackage("java.lang.annotation"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AnnotationTypeMismatchException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['foundType'],'O',['element','java.lang.reflect.Method']]]

Clazz.newMeth(C$, 'c$$java_lang_reflect_Method$S',  function (element, foundType) {
;C$.superclazz.c$$S.apply(this,["Incorrectly typed data found for annotation element " + element + " (Found data of type " + foundType + ")" ]);C$.$init$.apply(this);
this.element=element;
this.foundType=foundType;
}, 1);

Clazz.newMeth(C$, 'element$',  function () {
return this.element;
});

Clazz.newMeth(C$, 'foundType$',  function () {
return this.foundType;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:08:59 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
