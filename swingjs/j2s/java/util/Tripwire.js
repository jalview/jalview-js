(function(){var P$=java.util,I$=[[0,'sun.util.logging.PlatformLogger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Tripwire");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trip$Class$S', function (trippingClass, msg) {
$I$(1).getLogger$S(trippingClass.getName$()).warning$S$OA(msg, [trippingClass.getName$()]);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
