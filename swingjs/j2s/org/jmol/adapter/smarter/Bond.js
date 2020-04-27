(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Bond", null, 'org.jmol.adapter.smarter.AtomSetObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.radius=-1;
this.colix=($s$[0] = -1, $s$[0]);
this.uniqueID=-1;
},1);

C$.$fields$=[['F',['radius'],'I',['atomIndex1','atomIndex2','order','uniqueID'],'H',['colix']]]

Clazz.newMeth(C$, 'c$$I$I$I', function (atomIndex1, atomIndex2, order) {
Clazz.super_(C$, this);
this.atomIndex1=atomIndex1;
this.atomIndex2=atomIndex2;
this.order=order;
}, 1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
