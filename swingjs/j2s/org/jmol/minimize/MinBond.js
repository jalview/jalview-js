(function(){var P$=Clazz.newPackage("org.jmol.minimize"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MinBond", null, 'org.jmol.minimize.MinObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isAromatic','isAmide'],'I',['rawIndex','index','order']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I$Integer', function (rawIndex, index, atomIndex1, atomIndex2, order, type, key) {
Clazz.super_(C$, this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
