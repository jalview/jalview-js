(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),I$=[[0,'org.jmol.c.STR']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CarbohydrateMonomer", null, 'org.jmol.modelsetbio.Monomer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['alphaOffsets','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'validateAndAllocate$org_jmol_modelset_Chain$S$I$I$I', function (chain, group3, seqcode, firstIndex, lastIndex) {
return Clazz.new_(C$).set2$org_jmol_modelset_Chain$S$I$I$I$BA(chain, group3, seqcode, firstIndex, lastIndex, C$.alphaOffsets);
}, 1);

Clazz.newMeth(C$, 'isCarbohydrate$', function () {
return true;
});

Clazz.newMeth(C$, 'getProteinStructureType$', function () {
return $I$(1).CARBOHYDRATE;
});

Clazz.newMeth(C$, 'isConnectedAfter$org_jmol_modelsetbio_Monomer', function (possiblyPreviousMonomer) {
if (possiblyPreviousMonomer == null ) return true;
for (var i=this.firstAtomIndex; i <= this.lastAtomIndex; i++) for (var j=possiblyPreviousMonomer.firstAtomIndex; j <= possiblyPreviousMonomer.lastAtomIndex; j++) {
var a=this.chain.model.ms.at[i];
var b=this.chain.model.ms.at[j];
if (a.getElementNumber$() + b.getElementNumber$() == 14 && a.distanceSquared$javajs_util_T3(b) < 3.24  ) return true;
}

return false;
});

Clazz.newMeth(C$, 'findNearestAtomIndex$I$I$org_jmol_modelset_AtomA$H$H', function (x, y, closest, madBegin, madEnd) {
var competitor=closest[0];
var anomericO=this.getLeadAtom$();
var marBegin=($s$[0] = ((madBegin/2|0)), $s$[0]);
if (marBegin < 1200) marBegin=($s$[0] = 1200, $s$[0]);
if (anomericO.sZ == 0) return;
var radiusBegin=(this.scaleToScreen$I$I(anomericO.sZ, marBegin)|0);
if (radiusBegin < 4) radiusBegin=4;
if (this.isCursorOnTopOf$org_jmol_modelset_Atom$I$I$I$org_jmol_modelset_Atom(anomericO, x, y, radiusBegin, competitor)) closest[0]=anomericO;
});

Clazz.newMeth(C$, 'isConnectedPrevious$', function () {
if (this.monomerIndex <= 0) return false;
for (var i=this.firstAtomIndex; i <= this.lastAtomIndex; i++) if (this.getCrossLinkGroup$I$javajs_util_Lst$org_jmol_modelset_Group$Z$Z$Z(i, null, null, true, false, false)) return true;

return false;
});

C$.$static$=function(){C$.$static$=0;
C$.alphaOffsets=Clazz.array(Byte.TYPE, -1, [0]);
};
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
