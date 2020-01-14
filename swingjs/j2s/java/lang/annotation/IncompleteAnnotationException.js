(function(){var P$=Clazz.newPackage("java.lang.annotation"),I$=[[0,'org.apache.harmony.luni.util.Msg']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IncompleteAnnotationException", null, 'RuntimeException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.annotationType=null;
this.elementName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Class$S', function (annotationType, elementName) {
C$.superclazz.c$$S.apply(this, [$I$(1).getString$S$O$O("annotation.0", elementName, annotationType)]);
C$.$init$.apply(this);
this.annotationType=annotationType;
this.elementName=elementName;
}, 1);

Clazz.newMeth(C$, 'annotationType$', function () {
return this.annotationType;
});

Clazz.newMeth(C$, 'elementName$', function () {
return this.elementName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
