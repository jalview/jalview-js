(function(){var P$=Clazz.newPackage("org.jmol.atomdata"),I$=[[0,'javajs.util.P3','org.jmol.util.BSUtil']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AtomData");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.programInfo=null;
this.fileName=null;
this.modelName=null;
this.modelIndex=0;
this.bsSelected=null;
this.bsIgnored=null;
this.bsMolecules=null;
this.radiusData=null;
this.firstAtomIndex=0;
this.firstModelIndex=0;
this.lastModelIndex=0;
this.hAtomRadius=0;
this.atomIndex=null;
this.atoms=null;
this.xyz=null;
this.atomRadius=null;
this.atomicNumber=null;
this.atomMolecule=null;
this.hAtoms=null;
this.ac=0;
this.hydrogenAtomCount=0;
this.adpMode=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
