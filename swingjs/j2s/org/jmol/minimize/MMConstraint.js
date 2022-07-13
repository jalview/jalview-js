(function(){var P$=Clazz.newPackage("org.jmol.minimize"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MMConstraint");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.minList=Clazz.array(Integer.TYPE, [4]);
},1);

C$.$fields$=[['D',['value'],'I',['type','nAtoms'],'O',['indexes','int[]','+minList']]]

Clazz.newMeth(C$, 'c$$IA$D', function (indexes, value) {
;C$.$init$.apply(this);
this.value=value;
this.indexes=indexes;
}, 1);

Clazz.newMeth(C$, 'set$I$javajs_util_BS$IA', function (steps, bsAtoms, atomMap) {
this.nAtoms=Math.abs(this.indexes[0]);
this.type=this.nAtoms - 2;
for (var j=1; j <= this.nAtoms; j++) {
if (steps <= 0 || !bsAtoms.get$I(this.indexes[j]) ) {
this.indexes[0]=-this.nAtoms;
break;
}this.minList[j - 1]=atomMap[this.indexes[j]];
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:36 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
