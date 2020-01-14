(function(){var P$=Clazz.newPackage("java.lang.annotation"),I$=[[0,'org.apache.harmony.luni.util.Msg']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AnnotationTypeMismatchException", null, 'RuntimeException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.element=null;
this.foundType=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$reflect_Method$S', function (element, foundType) {
C$.superclazz.c$$S.apply(this, [$I$(1).getString$S$O$O("annotation.1", element, foundType)]);
C$.$init$.apply(this);
this.element=element;
this.foundType=foundType;
}, 1);

Clazz.newMeth(C$, 'element$', function () {
return this.element;
});

Clazz.newMeth(C$, 'foundType$', function () {
return this.foundType;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
