(function(){var P$=Clazz.newPackage("org.jmol.minimize"),I$=[];
var C$=Clazz.newClass(P$, "MinBond", null, 'org.jmol.minimize.MinObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rawIndex=0;
this.index=0;
this.order=0;
this.isAromatic=false;
this.isAmide=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I$Integer', function (rawIndex, index, atomIndex1, atomIndex2, order, type, key) {
Clazz.super_(C$, this,1);
this.rawIndex=rawIndex;
this.index=index;
this.type=type;
this.data=Clazz.array(Integer.TYPE, -1, [atomIndex1, atomIndex2]);
this.order=order;
this.key=key;
}, 1);

Clazz.newMeth(C$, 'getOtherAtom$I', function (index) {
return this.data[this.data[0] == index ? 1 : 0];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
