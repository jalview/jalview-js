(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[[0,'org.jmol.minimize.forcefield.CalculationsUFF']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UFFAngleCalc", null, 'org.jmol.minimize.forcefield.Calculation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setData$javajs_util_Lst$IA', function (calc, angle) {
this.a=this.calcs.minAtoms[this.ia=angle[0]];
this.b=this.calcs.minAtoms[this.ib=angle[1]];
this.c=this.calcs.minAtoms[this.ic=angle[2]];
var preliminaryMagnification=(this.a.sType == "H_" && this.c.sType == "H_"  ? 10 : 1);
this.calcs.parA=this.calcs.getParameter$O(this.a.sType);
this.calcs.parB=this.calcs.getParameter$O(this.b.sType);
this.calcs.parC=this.calcs.getParameter$O(this.c.sType);
var coordination=this.calcs.parB.iVal[0];
var zi=this.calcs.parA.dVal[5];
var zk=this.calcs.parC.dVal[5];
var theta0=this.calcs.parB.dVal[1];
var cosT0=Math.cos(theta0);
var sinT0=Math.sin(theta0);
var c0;
var c1;
var c2;
switch (coordination) {
case 1:
case 2:
case 4:
case 6:
c0=c1=c2=0;
break;
default:
c2=1.0 / (4.0 * sinT0 * sinT0 );
c1=-4.0 * c2 * cosT0 ;
c0=c2 * (2.0 * cosT0 * cosT0  + 1.0);
}
var bond=this.a.getBondTo$I(this.ib);
var bondorder=bond.order;
if (bond.isAromatic) bondorder=1.5;
if (bond.isAmide) bondorder=1.41;
this.rab=$I$(1).calculateR0$D$D$D$D$D(this.calcs.parA.dVal[0], this.calcs.parB.dVal[0], this.calcs.parA.dVal[8], this.calcs.parB.dVal[8], bondorder);
bond=this.c.getBondTo$I(this.ib);
bondorder=bond.order;
if (bond.isAromatic) bondorder=1.5;
if (bond.isAmide) bondorder=1.41;
var rbc=$I$(1).calculateR0$D$D$D$D$D(this.calcs.parB.dVal[0], this.calcs.parC.dVal[0], this.calcs.parB.dVal[8], this.calcs.parC.dVal[8], bondorder);
var rac=Math.sqrt(this.rab * this.rab + rbc * rbc - 2.0 * this.rab * rbc * cosT0 );
var ka=(2696.8016159999997) * (zi * zk / (Math.pow(rac, 5.0))) * (3.0 * this.rab * rbc * (1.0 - cosT0 * cosT0)  - rac * rac * cosT0 ) ;
calc.addLast$O(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [this.ia, this.ib, this.ic, coordination]), Clazz.array(Double.TYPE, -1, [ka, theta0 * 57.29577951308232, c0 - c2, c1, 2 * c2, preliminaryMagnification * ka])]));
});

Clazz.newMeth(C$, 'compute$OA', function (dataIn) {
this.getPointers$OA(dataIn);
var coordination=this.iData[3];
var ka=(this.calcs.isPreliminary ? this.dData[5] : this.dData[0]);
var a0=this.dData[2];
var a1=this.dData[3];
var a2=this.dData[4];
this.calcs.setAngleVariables$org_jmol_minimize_forcefield_Calculation(this);
if ((coordination == 4 || coordination == 6 ) && (this.theta > 2.35619  || this.theta < 0.785398  ) ) coordination=1;
var cosT=Math.cos(this.theta);
var sinT=Math.sin(this.theta);
switch (coordination) {
case 0:
case 1:
this.energy=ka * (1.0 + cosT) * (1.0 + cosT)  / 4.0;
break;
case 2:
this.energy=ka * (1.0 + (4.0 * cosT) * (1.0 + cosT)) / 9.0;
break;
case 4:
case 6:
this.energy=ka * cosT * cosT ;
break;
default:
this.energy=ka * (a0 + a1 * cosT + a2 * cosT * cosT );
}
if (this.calcs.gradients) {
switch (coordination) {
case 0:
case 1:
this.dE=-0.5 * ka * sinT * (1 + cosT) ;
break;
case 2:
this.dE=-4.0 * sinT * ka * (1.0 - 2.0 * cosT)  / 9.0;
break;
case 4:
case 6:
this.dE=-ka * sinT * cosT ;
break;
default:
this.dE=-ka * (a1 * sinT - 2.0 * a2 * cosT * sinT );
}
this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 3);
}if (this.calcs.logging) this.calcs.appendLogData$S(this.calcs.getDebugLine$I$org_jmol_minimize_forcefield_Calculation(1, this));
return this.energy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
