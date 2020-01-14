(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),I$=[[0,'org.jmol.c.STR']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CarbohydrateMonomer", null, 'org.jmol.modelsetbio.Monomer');
C$.alphaOffsets=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.alphaOffsets=Clazz.array(Byte.TYPE, -1, [0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
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
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
