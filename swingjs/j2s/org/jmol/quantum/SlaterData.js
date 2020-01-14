(function(){var P$=Clazz.newPackage("org.jmol.quantum"),I$=[];
var C$=Clazz.newClass(P$, "SlaterData");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isCore=false;
this.atomNo=0;
this.x=0;
this.y=0;
this.z=0;
this.r=0;
this.zeta=0;
this.coef=0;
this.index=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$D$D', function (iAtom, x, y, z, r, zeta, coef) {
C$.$init$.apply(this);
this.atomNo=iAtom;
this.x=x;
this.y=y;
this.z=z;
this.r=r;
this.zeta=zeta;
this.coef=coef;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "[" + this.atomNo + "," + this.x + "," + this.y + "," + this.z + "," + this.r + "," + new Double(this.zeta).toString() + "," + new Double(this.coef).toString() + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
