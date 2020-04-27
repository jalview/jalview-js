(function(){var P$=Clazz.newPackage("org.jmol.bspt"),I$=[[0,'org.jmol.bspt.Bspt','org.jmol.bspt.CubeIterator','javajs.util.AU']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Bspf");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isValid=false;
},1);

C$.$fields$=[['Z',['isValid'],'I',['dimMax'],'O',['bspts','org.jmol.bspt.Bspt[]','bsptsValid','boolean[]','cubeIterators','org.jmol.bspt.CubeIterator[]']]]

Clazz.newMeth(C$, 'validateModel$I$Z', function (i, isValid) {
this.bsptsValid[i]=isValid;
});

Clazz.newMeth(C$, 'isInitializedIndex$I', function (bsptIndex) {
return this.bspts.length > bsptIndex && this.bspts[bsptIndex] != null   && this.bsptsValid[bsptIndex] ;
});

Clazz.newMeth(C$, 'c$$I', function (dimMax) {
;C$.$init$.apply(this);
this.dimMax=dimMax;
this.bspts=Clazz.array($I$(1), [1]);
this.bsptsValid=Clazz.array(Boolean.TYPE, [1]);
this.cubeIterators=Clazz.array($I$(2), [0]);
}, 1);

Clazz.newMeth(C$, 'addTuple$I$javajs_util_P3', function (bsptIndex, tuple) {
if (bsptIndex >= this.bspts.length) {
this.bspts=$I$(3).arrayCopyObject$O$I(this.bspts, bsptIndex + 1);
this.bsptsValid=$I$(3).arrayCopyBool$ZA$I(this.bsptsValid, bsptIndex + 1);
}var bspt=this.bspts[bsptIndex];
if (bspt == null ) {
bspt=this.bspts[bsptIndex]=Clazz.new_($I$(1,1).c$$I$I,[this.dimMax, bsptIndex]);
}bspt.addTuple$javajs_util_T3(tuple);
});

Clazz.newMeth(C$, 'stats$', function () {
for (var i=0; i < this.bspts.length; ++i) if (this.bspts[i] != null ) this.bspts[i].stats$();

});

Clazz.newMeth(C$, 'getCubeIterator$I', function (bsptIndex) {
if (bsptIndex < 0) return this.getNewCubeIterator$I(-1 - bsptIndex);
if (bsptIndex >= this.cubeIterators.length) this.cubeIterators=$I$(3).arrayCopyObject$O$I(this.cubeIterators, bsptIndex + 1);
if (this.cubeIterators[bsptIndex] == null  && this.bspts[bsptIndex] != null  ) this.cubeIterators[bsptIndex]=this.getNewCubeIterator$I(bsptIndex);
this.cubeIterators[bsptIndex].set$org_jmol_bspt_Bspt(this.bspts[bsptIndex]);
return this.cubeIterators[bsptIndex];
});

Clazz.newMeth(C$, 'getNewCubeIterator$I', function (bsptIndex) {
return this.bspts[bsptIndex].allocateCubeIterator$();
});

Clazz.newMeth(C$, 'initialize$I$javajs_util_P3A$javajs_util_BS', function (modelIndex, atoms, modelAtomBitSet) {
if (this.bspts[modelIndex] != null ) this.bspts[modelIndex].reset$();
for (var i=modelAtomBitSet.nextSetBit$I(0); i >= 0; i=modelAtomBitSet.nextSetBit$I(i + 1)) this.addTuple$I$javajs_util_P3(modelIndex, atoms[i]);

this.bsptsValid[modelIndex]=true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
