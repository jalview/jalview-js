(function(){var P$=Clazz.newPackage("org.jmol.atomdata"),I$=[[0,'javajs.util.P3','org.jmol.util.BSUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['hAtomRadius'],'I',['modelIndex','firstAtomIndex','firstModelIndex','lastModelIndex','ac','hydrogenAtomCount','adpMode'],'S',['programInfo','fileName','modelName'],'O',['bsSelected','javajs.util.BS','+bsIgnored','bsMolecules','javajs.util.BS[]','radiusData','org.jmol.atomdata.RadiusData','atomIndex','int[]','atoms','org.jmol.modelset.Atom[]','xyz','javajs.util.P3[]','atomRadius','float[]','atomicNumber','int[]','+atomMolecule','hAtoms','javajs.util.P3[][]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'transformXYZ$javajs_util_M4$javajs_util_BS', function (mat, bs) {
var p=Clazz.array($I$(1), [this.xyz.length]);
if (bs == null ) bs=$I$(2).newBitSet2$I$I(0, this.xyz.length);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (this.xyz[i] == null ) continue;
p[i]=$I$(1).newP$javajs_util_T3(this.xyz[i]);
mat.rotTrans$javajs_util_T3(p[i]);
}
this.xyz=p;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
