(function(){var P$=Clazz.newPackage("edu.uwi");
var C$=Clazz.newClass(P$, "SimThread", null, 'javajs.util.JSThread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.boltzmann=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$edu_uwi_Boltzmann', function (boltzmann) {
C$.superclazz.c$$ThreadGroup$S.apply(this, [null, "BoltzmannThread"]);
C$.$init$.apply(this);
this.boltzmann=boltzmann;
}, 1);

Clazz.newMeth(C$, 'myInit$', function () {
this.boltzmann.sjs_initSimulation$();
return true;
});

Clazz.newMeth(C$, 'isLooping$', function () {
return this.boltzmann.sjs_loopSimulation$();
});

Clazz.newMeth(C$, 'myLoop$', function () {
return this.boltzmann.sjs_checkRepaint$();
});

Clazz.newMeth(C$, 'getDelayMillis$', function () {
return (this.isJS ? 0 : 1);
});

Clazz.newMeth(C$, 'whenDone$', function () {
this.boltzmann.sjs_finalizeGraph$();
});

Clazz.newMeth(C$, 'onException$Exception', function (e) {
System.out.println$S(e.getMessage$());
});

Clazz.newMeth(C$, 'doFinally$', function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-04 16:22:42 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
