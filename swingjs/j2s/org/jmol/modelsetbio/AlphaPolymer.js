(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),p$1={},I$=[[0,'javajs.util.P3','org.jmol.util.Logger','org.jmol.c.STR','org.jmol.modelsetbio.Helix','org.jmol.modelsetbio.Sheet','org.jmol.modelsetbio.Turn','javajs.util.Measure',['org.jmol.modelsetbio.AlphaPolymer','.Code']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlphaPolymer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.modelsetbio.BioPolymer');
C$.dsspTypes=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.dsspTypes=Clazz.array(String, -1, ["H", null, "H", "S", "H", null, "T"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pt0=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_modelsetbio_MonomerA$I', function (monomers, pt0) {
Clazz.super_(C$, this,1);
this.pt0=pt0;
this.set$org_jmol_modelsetbio_MonomerA(monomers);
this.hasStructure=true;
}, 1);

Clazz.newMeth(C$, 'getProteinStructure$I', function (monomerIndex) {
return this.monomers[monomerIndex].getStructure$();
});

Clazz.newMeth(C$, 'getControlPoint$I$javajs_util_V3', function (i, v) {
if (!this.monomers[i].isSheet$()) return this.leadPoints[i];
v.sub2$javajs_util_T3$javajs_util_T3(this.leadMidpoints[i], this.leadPoints[i]);
v.scale$F(this.sheetSmoothing);
var pt=$I$(1).newP$javajs_util_T3(this.leadPoints[i]);
pt.add$javajs_util_T3(v);
return pt;
});

Clazz.newMeth(C$, 'addStructure$org_jmol_c_STR$S$I$I$I$I$I$I$I$I$javajs_util_BS', function (type, structureID, serialID, strandCount, startChainID, startSeqcode, endChainID, endSeqcode, istart, iend, bsAssigned) {
var i0=-1;
var i1=-1;
if (istart < iend) {
if (this.monomers[0].firstAtomIndex > iend || this.monomers[this.monomerCount - 1].lastAtomIndex < istart ) return;
i0=istart;
i1=iend;
}var indexStart;
var indexEnd;
if ((indexStart=this.getIndex$I$I$I$I(startChainID, startSeqcode, i0, i1)) == -1 || (indexEnd=this.getIndex$I$I$I$I(endChainID, endSeqcode, i0, i1)) == -1 ) return;
if (istart >= 0 && bsAssigned != null  ) {
var pt=bsAssigned.nextSetBit$I(this.monomers[indexStart].firstAtomIndex);
if (pt >= 0 && pt < this.monomers[indexEnd].lastAtomIndex ) return;
}if (this.addStructureProtected$org_jmol_c_STR$S$I$I$I$I(type, structureID, serialID, strandCount, indexStart, indexEnd) && istart >= 0 ) bsAssigned.setBits$I$I(istart, iend + 1);
});

Clazz.newMeth(C$, 'addStructureProtected$org_jmol_c_STR$S$I$I$I$I', function (type, structureID, serialID, strandCount, indexStart, indexEnd) {
if (indexEnd < indexStart) {
$I$(2).error$S("AlphaPolymer:addSecondaryStructure error:  indexStart:" + indexStart + " indexEnd:" + indexEnd );
return false;
}var structureCount=indexEnd - indexStart + 1;
var ps=null;
switch (type) {
case $I$(3).HELIX:
case $I$(3).HELIXALPHA:
case $I$(3).HELIX310:
case $I$(3).HELIXPI:
ps=Clazz.new_($I$(4).c$$org_jmol_modelsetbio_AlphaPolymer$I$I$org_jmol_c_STR,[this, indexStart, structureCount, type]);
break;
case $I$(3).SHEET:
ps=Clazz.new_($I$(5).c$$org_jmol_modelsetbio_AlphaPolymer$I$I$org_jmol_c_STR,[this, indexStart, structureCount, type]);
break;
case $I$(3).TURN:
ps=Clazz.new_($I$(6).c$$org_jmol_modelsetbio_AlphaPolymer$I$I,[this, indexStart, structureCount]);
break;
default:
$I$(2).error$S("unrecognized secondary structure type");
return false;
}
ps.structureID=structureID;
ps.serialID=serialID;
ps.strandCount=strandCount;
for (var i=indexStart; i <= indexEnd; ++i) (this.monomers[i]).setStructure$org_jmol_modelsetbio_ProteinStructure(ps);

return true;
});

Clazz.newMeth(C$, 'clearStructures$', function () {
for (var i=0; i < this.monomerCount; i++) (this.monomers[i]).setStructure$org_jmol_modelsetbio_ProteinStructure(null);

});

Clazz.newMeth(C$, 'calculateStructures$Z', function (alphaOnly) {
if (this.monomerCount < 4) return;
var angles=p$1.calculateAnglesInDegrees.apply(this, []);
var codes=p$1.calculateCodes$FA.apply(this, [angles]);
p$1.checkBetaSheetAlphaHelixOverlap$org_jmol_modelsetbio_AlphaPolymer_CodeA$FA.apply(this, [codes, angles]);
var tags=p$1.calculateRunsFourOrMore$org_jmol_modelsetbio_AlphaPolymer_CodeA.apply(this, [codes]);
p$1.extendRuns$org_jmol_c_STRA.apply(this, [tags]);
p$1.searchForTurns$org_jmol_modelsetbio_AlphaPolymer_CodeA$FA$org_jmol_c_STRA.apply(this, [codes, angles, tags]);
p$1.addStructuresFromTags$org_jmol_c_STRA.apply(this, [tags]);
});

Clazz.newMeth(C$, 'calculateAnglesInDegrees', function () {
var angles=Clazz.array(Float.TYPE, [this.monomerCount]);
for (var i=this.monomerCount - 1; --i >= 2; ) angles[i]=$I$(7).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(this.monomers[i - 2].getLeadAtom$(), this.monomers[i - 1].getLeadAtom$(), this.monomers[i].getLeadAtom$(), this.monomers[i + 1].getLeadAtom$(), true);

return angles;
}, p$1);

Clazz.newMeth(C$, 'calculateCodes$FA', function (angles) {
var codes=Clazz.array($I$(8), [this.monomerCount]);
for (var i=this.monomerCount - 1; --i >= 2; ) {
var degrees=angles[i];
codes[i]=((degrees >= 10  && degrees < 120  ) ? $I$(8).RIGHT_HELIX : ((degrees >= 120  || degrees < -90  ) ? $I$(8).BETA_SHEET : ((degrees >= -90  && degrees < 0  ) ? $I$(8).LEFT_HELIX : $I$(8).NADA)));
}
return codes;
}, p$1);

Clazz.newMeth(C$, 'checkBetaSheetAlphaHelixOverlap$org_jmol_modelsetbio_AlphaPolymer_CodeA$FA', function (codes, angles) {
for (var i=this.monomerCount - 2; --i >= 2; ) if (codes[i] === $I$(8).BETA_SHEET  && angles[i] <= 140   && codes[i - 2] === $I$(8).RIGHT_HELIX   && codes[i - 1] === $I$(8).RIGHT_HELIX   && codes[i + 1] === $I$(8).RIGHT_HELIX   && codes[i + 2] === $I$(8).RIGHT_HELIX  ) codes[i]=$I$(8).RIGHT_HELIX;

}, p$1);

Clazz.newMeth(C$, 'calculateRunsFourOrMore$org_jmol_modelsetbio_AlphaPolymer_CodeA', function (codes) {
var tags=Clazz.array($I$(3), [this.monomerCount]);
var tag=$I$(3).NONE;
var code=$I$(8).NADA;
var runLength=0;
for (var i=0; i < this.monomerCount; ++i) {
if (codes[i] === code  && code !== $I$(8).NADA   && code !== $I$(8).BETA_SHEET  ) {
++runLength;
if (runLength == 4) {
tag=(code === $I$(8).BETA_SHEET  ? $I$(3).SHEET : $I$(3).HELIX);
for (var j=4; --j >= 0; ) tags[i - j]=tag;

} else if (runLength > 4) tags[i]=tag;
} else {
runLength=1;
code=codes[i];
}}
return tags;
}, p$1);

Clazz.newMeth(C$, 'extendRuns$org_jmol_c_STRA', function (tags) {
for (var i=1; i < this.monomerCount - 4; ++i) if (tags[i] === $I$(3).NONE  && tags[i + 1] !== $I$(3).NONE  ) tags[i]=tags[i + 1];

tags[0]=tags[1];
tags[this.monomerCount - 1]=tags[this.monomerCount - 2];
}, p$1);

Clazz.newMeth(C$, 'searchForTurns$org_jmol_modelsetbio_AlphaPolymer_CodeA$FA$org_jmol_c_STRA', function (codes, angles, tags) {
for (var i=this.monomerCount - 1; --i >= 2; ) {
codes[i]=$I$(8).NADA;
if (tags[i] == null  || tags[i] === $I$(3).NONE  ) {
var angle=angles[i];
if (angle >= -90  && angle < 0  ) codes[i]=$I$(8).LEFT_TURN;
 else if (angle >= 0  && angle < 90  ) codes[i]=$I$(8).RIGHT_TURN;
}}
for (var i=this.monomerCount - 1; --i >= 0; ) {
if (codes[i] !== $I$(8).NADA  && codes[i + 1] === codes[i]   && tags[i] === $I$(3).NONE  ) tags[i]=$I$(3).TURN;
}
}, p$1);

Clazz.newMeth(C$, 'addStructuresFromTags$org_jmol_c_STRA', function (tags) {
var i=0;
while (i < this.monomerCount){
var tag=tags[i];
if (tag == null  || tag === $I$(3).NONE  ) {
++i;
continue;
}var iMax;
for (iMax=i + 1; iMax < this.monomerCount && tags[iMax] === tag  ; ++iMax) {
}
this.addStructureProtected$org_jmol_c_STR$S$I$I$I$I(tag, null, 0, 0, i, iMax - 1);
i=iMax;
}
}, p$1);

Clazz.newMeth(C$, 'setStructureBS$I$I$org_jmol_c_STR$javajs_util_BS$Z', function (count, dsspType, type, bs, doOffset) {
var offset=(doOffset ? this.pt0 : 0);
for (var pt=0, i=bs.nextSetBit$I(offset), i2=0, n=this.monomerCount + offset; i >= 0 && i < n ; i=bs.nextSetBit$I(i2 + 1)) {
if ((i2=bs.nextClearBit$I(i)) < 0 || i2 > n ) i2=n;
this.addStructureProtected$org_jmol_c_STR$S$I$I$I$I(type, C$.dsspTypes[dsspType] + (++pt), count++, (dsspType == 3 ? 1 : 0), i - offset, i2 - 1 - offset );
}
return count;
});
;
(function(){var C$=Clazz.newClass(P$.AlphaPolymer, "Code", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NADA", 0, []);
Clazz.newEnumConst($vals, C$.c$, "RIGHT_HELIX", 1, []);
Clazz.newEnumConst($vals, C$.c$, "BETA_SHEET", 2, []);
Clazz.newEnumConst($vals, C$.c$, "LEFT_HELIX", 3, []);
Clazz.newEnumConst($vals, C$.c$, "LEFT_TURN", 4, []);
Clazz.newEnumConst($vals, C$.c$, "RIGHT_TURN", 5, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
