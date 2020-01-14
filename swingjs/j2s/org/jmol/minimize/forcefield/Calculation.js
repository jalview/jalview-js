(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[];
var C$=Clazz.newClass(P$, "Calculation");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.key=null;
this.dE=0;
this.a=null;
this.b=null;
this.c=null;
this.d=null;
this.ia=0;
this.ib=0;
this.ic=0;
this.id=0;
this.iData=null;
this.dData=null;
this.delta=0;
this.rab=0;
this.theta=0;
this.energy=0;
this.calcs=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_minimize_forcefield_Calculations', function (calcs) {
this.calcs=calcs;
return this;
});

Clazz.newMeth(C$, 'setData$javajs_util_Lst$I$I$D', function (calc, ia, ib, d) {
});

Clazz.newMeth(C$, 'getEnergy$', function () {
return this.energy;
});

Clazz.newMeth(C$, 'getPointers$OA', function (dataIn) {
this.dData=dataIn[1];
this.iData=dataIn[0];
switch (this.iData.length) {
default:
this.id=this.iData[3];
case 3:
this.ic=this.iData[2];
case 2:
this.ib=this.iData[1];
case 1:
this.ia=this.iData[0];
case 0:
break;
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
