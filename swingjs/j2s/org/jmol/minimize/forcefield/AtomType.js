(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[];
var C$=Clazz.newClass(P$, "AtomType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.elemNo=0;
this.descr=null;
this.smartsCode=null;
this.mmType=0;
this.hType=0;
this.formalCharge=0;
this.fcadj=0;
this.sbmb=false;
this.arom=false;
this.pilp=false;
this.mltb=0;
this.val=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$F$I$S$S', function (elemNo, mmType, hType, formalCharge, val, descr, smartsCode) {
C$.$init$.apply(this);
this.elemNo=elemNo;
this.mmType=mmType;
this.hType=hType;
this.formalCharge=formalCharge;
this.val=val;
this.descr=descr;
this.smartsCode=smartsCode;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
