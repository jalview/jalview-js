(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.util.Locale']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ComponentOrientation");
C$.LEFT_TO_RIGHT=null;
C$.RIGHT_TO_LEFT=null;
C$.UNKNOWN=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.LEFT_TO_RIGHT=Clazz.new_(C$.c$$I,[6]);
C$.RIGHT_TO_LEFT=Clazz.new_(C$.c$$I,[2]);
C$.UNKNOWN=Clazz.new_(C$.c$$I,[7]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.orientation=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isHorizontal$', function () {
return (this.orientation & 2) != 0;
});

Clazz.newMeth(C$, 'isLeftToRight$', function () {
return (this.orientation & 4) != 0;
});

Clazz.newMeth(C$, 'getOrientation$java_util_Locale', function (locale) {
var lang=locale.getLanguage$();
if ("iw".equals$O(lang) || "ar".equals$O(lang) || "fa".equals$O(lang) || "ur".equals$O(lang)  ) {
return C$.RIGHT_TO_LEFT;
} else {
return C$.LEFT_TO_RIGHT;
}}, 1);

Clazz.newMeth(C$, 'getOrientation$java_util_ResourceBundle', function (bdl) {
var result=null;
try {
result=bdl.getObject$S("Orientation");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (result == null ) {
result=C$.getOrientation$java_util_Locale(bdl.getLocale$());
}if (result == null ) {
result=C$.getOrientation$java_util_Locale($I$(1).getDefault$());
}return result;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (value) {
C$.$init$.apply(this);
this.orientation=value;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
