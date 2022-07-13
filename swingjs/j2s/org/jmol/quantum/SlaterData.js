(function(){var P$=Clazz.newPackage("org.jmol.quantum"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SlaterData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isCore'],'D',['zeta','coef'],'I',['atomNo','x','y','z','r','index']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$I$D$D', function (iAtom, x, y, z, r, zeta, coef) {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
