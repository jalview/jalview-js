(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),I$=[[0,'net.miginfocom.layout.LayoutUtil']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AnimSpec", null, null, 'java.io.Serializable');
C$.DEF=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DEF=Clazz.new_(C$.c$$I$I$F$F,[0, 0, 0.2, 0.2]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.prio=0;
this.durMillis=0;
this.easeIn=0;
this.easeOut=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$F$F', function (prio, durMillis, easeIn, easeOut) {
C$.$init$.apply(this);
this.prio=prio;
this.durMillis=durMillis;
this.easeIn=$I$(1).clamp$F$F$F(easeIn, 0, 1);
this.easeOut=$I$(1).clamp$F$F$F(easeOut, 0, 1);
}, 1);

Clazz.newMeth(C$, 'getPriority$', function () {
return this.prio;
});

Clazz.newMeth(C$, 'getDurationMillis$I', function (defMillis) {
return this.durMillis > 0 ? this.durMillis : defMillis;
});

Clazz.newMeth(C$, 'getDurationMillis$', function () {
return this.durMillis;
});

Clazz.newMeth(C$, 'getEaseIn$', function () {
return this.easeIn;
});

Clazz.newMeth(C$, 'getEaseOut$', function () {
return this.easeOut;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-02-03 08:07:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
