(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Calculation");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['dE','delta','rab','theta','energy'],'I',['ia','ib','ic','id'],'O',['key','Integer','a','org.jmol.minimize.MinAtom','+b','+c','+d','iData','int[]','dData','double[]','calcs','org.jmol.minimize.forcefield.Calculations']]]

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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
