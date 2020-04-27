(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),p$1={},I$=[[0,'javajs.util.Lst','java.util.Hashtable','javajs.util.P3','javajs.util.AU','javajs.util.BS','org.jmol.util.Logger','org.jmol.util.Escape','javajs.util.Quat','javajs.util.PT','org.jmol.modelset.LabelToken','org.jmol.viewer.Viewer','org.jmol.util.BSUtil','org.jmol.modelset.Atom']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BioExt");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['vwr','org.jmol.viewer.Viewer','ms','org.jmol.modelset.ModelSet']]
,['O',['qColor','String[]','+pdbRecords']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet', function (vwr, ms) {
this.vwr=vwr;
this.ms=ms;
return this;
});

Clazz.newMeth(C$, 'getAllPolymerInfo$javajs_util_BS$java_util_Map', function (bs, fullInfo) {
var modelVector=Clazz.new_($I$(1,1));
var modelCount=this.ms.mc;
var models=this.ms.am;
for (var i=0; i < modelCount; ++i) if (models[i].isBioModel) {
var m=models[i];
var modelInfo=Clazz.new_($I$(2,1));
var info=Clazz.new_($I$(1,1));
for (var ip=0; ip < m.bioPolymerCount; ip++) {
var bp=m.bioPolymers[ip];
var pInfo=Clazz.new_($I$(2,1));
var mInfo=Clazz.new_($I$(1,1));
var sInfo=null;
var ps;
var psLast=null;
var n=0;
var ptTemp=Clazz.new_($I$(3,1));
for (var im=0; im < bp.monomerCount; im++) {
if (bs.get$I(bp.monomers[im].leadAtomIndex)) {
var monomerInfo=bp.monomers[im].getMyInfo$javajs_util_P3(ptTemp);
monomerInfo.put$O$O("monomerIndex", Integer.valueOf$I(im));
mInfo.addLast$O(monomerInfo);
if ((ps=bp.getProteinStructure$I(im)) != null  && ps !== psLast  ) {
var psInfo=Clazz.new_($I$(2,1));
psLast=ps;
psInfo.put$O$O("type", ps.type.getBioStructureTypeName$Z(false));
var leadAtomIndices=bp.getLeadAtomIndices$();
var iArray=$I$(4).arrayCopyRangeI$IA$I$I(leadAtomIndices, ps.monomerIndexFirst, ps.monomerIndexFirst + ps.nRes);
psInfo.put$O$O("leadAtomIndices", iArray);
ps.calcAxis$();
if (ps.axisA != null ) {
psInfo.put$O$O("axisA", ps.axisA);
psInfo.put$O$O("axisB", ps.axisB);
psInfo.put$O$O("axisUnitVector", ps.axisUnitVector);
}psInfo.put$O$O("index", Integer.valueOf$I(n++));
if (sInfo == null ) sInfo=Clazz.new_($I$(1,1));
sInfo.addLast$O(psInfo);
}}}
if (mInfo.size$() > 0) {
pInfo.put$O$O("sequence", bp.getSequence$());
pInfo.put$O$O("monomers", mInfo);
if (sInfo != null ) pInfo.put$O$O("structures", sInfo);
}if (!pInfo.isEmpty$()) info.addLast$O(pInfo);
}
if (info.size$() > 0) {
modelInfo.put$O$O("modelIndex", Integer.valueOf$I(m.modelIndex));
modelInfo.put$O$O("polymers", info);
modelVector.addLast$O(modelInfo);
}}
fullInfo.put$O$O("models", modelVector);
});

Clazz.newMeth(C$, 'calculateStraightnessAll$', function () {
var qtype=this.vwr.getQuaternionFrame$();
var mStep=this.vwr.getInt$I(553648144);
for (var i=this.ms.mc; --i >= 0; ) if (this.ms.am[i].isBioModel) {
var m=this.ms.am[i];
var ptTemp=Clazz.new_($I$(3,1));
for (var p=0; p < m.bioPolymerCount; p++) p$1.getPdbData$org_jmol_modelsetbio_BioPolymer$C$C$I$I$javajs_util_BS$javajs_util_BS$Z$Z$Z$org_jmol_modelset_LabelTokenA$javajs_util_OC$javajs_util_SB$javajs_util_BS$javajs_util_P3.apply(this, [m.bioPolymers[p], "S", qtype, mStep, 2, null, null, false, false, false, null, null, null, Clazz.new_($I$(5,1)), ptTemp]);

}
this.ms.haveStraightness=true;
});

Clazz.newMeth(C$, 'getPdbData$org_jmol_modelsetbio_BioPolymer$C$C$I$I$javajs_util_BS$javajs_util_BS$Z$Z$Z$org_jmol_modelset_LabelTokenA$javajs_util_OC$javajs_util_SB$javajs_util_BS$javajs_util_P3', function (bp, ctype, qtype, mStep, derivType, bsAtoms, bsSelected, bothEnds, isDraw, addHeader, tokens, pdbATOM, pdbCONECT, bsWritten, ptTemp) {
var calcRamachandranStraightness=(qtype == "C" || qtype == "P" );
var isRamachandran=(ctype == "R" || ctype == "S" && calcRamachandranStraightness  );
if (isRamachandran && !bp.calcPhiPsiAngles$() ) return;
var isAmino=(bp.type == 1);
var isRelativeAlias=(ctype == "r");
var quaternionStraightness=(!isRamachandran && ctype == "S" );
if (derivType == 2 && isRelativeAlias ) ctype="w";
if (quaternionStraightness) derivType=2;
var useQuaternionStraightness=(ctype == "S");
var writeRamachandranStraightness=("rcpCP".indexOf$I(qtype) >= 0);
if ($I$(6).debugging && (quaternionStraightness || calcRamachandranStraightness ) ) {
(function(a,f){return f.apply(null,a)})(["For straightness calculation: useQuaternionStraightness = " + useQuaternionStraightness + " and quaternionFrame = " + qtype ],$I$(6).debug$S);
}if (addHeader && !isDraw ) {
pdbATOM.append$S("REMARK   6    AT GRP CH RESNO  ");
switch (ctype.$c()) {
default:
case 119:
pdbATOM.append$S("x*10___ y*10___ z*10___      w*10__       ");
break;
case 120:
pdbATOM.append$S("y*10___ z*10___ w*10___      x*10__       ");
break;
case 121:
pdbATOM.append$S("z*10___ w*10___ x*10___      y*10__       ");
break;
case 122:
pdbATOM.append$S("w*10___ x*10___ y*10___      z*10__       ");
break;
case 82:
if (writeRamachandranStraightness) pdbATOM.append$S("phi____ psi____ theta         Straightness");
 else pdbATOM.append$S("phi____ psi____ omega-180    PartialCharge");
break;
}
pdbATOM.append$S("    Sym   q0_______ q1_______ q2_______ q3_______");
pdbATOM.append$S("  theta_  aaX_______ aaY_______ aaZ_______");
if (ctype != "R") pdbATOM.append$S("  centerX___ centerY___ centerZ___");
if (qtype == "n") pdbATOM.append$S("  NHX_______ NHY_______ NHZ_______");
pdbATOM.append$S("\n\n");
}var factor=(ctype == "R" ? 1.0 : 10.0);
bothEnds=false;
for (var j=0; j < (bothEnds ? 2 : 1); j++, factor *= -1) for (var i=0; i < (mStep < 1 ? 1 : mStep); i++) if (bp.hasStructure) p$1.getData$I$I$org_jmol_modelsetbio_BioPolymer$C$C$I$javajs_util_BS$javajs_util_BS$Z$Z$Z$Z$Z$Z$F$Z$Z$org_jmol_modelset_LabelTokenA$javajs_util_OC$javajs_util_SB$javajs_util_BS$javajs_util_P3.apply(this, [i, mStep, bp, ctype, qtype, derivType, bsAtoms, bsSelected, isDraw, isRamachandran, calcRamachandranStraightness, useQuaternionStraightness, writeRamachandranStraightness, quaternionStraightness, factor, isAmino, isRelativeAlias, tokens, pdbATOM, pdbCONECT, bsWritten, ptTemp]);


}, p$1);

Clazz.newMeth(C$, 'getData$I$I$org_jmol_modelsetbio_BioPolymer$C$C$I$javajs_util_BS$javajs_util_BS$Z$Z$Z$Z$Z$Z$F$Z$Z$org_jmol_modelset_LabelTokenA$javajs_util_OC$javajs_util_SB$javajs_util_BS$javajs_util_P3', function (m0, mStep, p, ctype, qtype, derivType, bsAtoms, bsSelected, isDraw, isRamachandran, calcRamachandranStraightness, useQuaternionStraightness, writeRamachandranStraightness, quaternionStraightness, factor, isAmino, isRelativeAlias, tokens, pdbATOM, pdbCONECT, bsWritten, ptTemp) {
var prefix=(derivType > 0 ? "dq" + (derivType == 2 ? "2" : "") : "q");
var q;
var aprev=null;
var qprev=null;
var dq=null;
var dqprev=null;
var qref=null;
var atomLast=null;
var x=0;
var y=0;
var z=0;
var w=0;
var strExtra="";
var val1=NaN;
var val2=NaN;
var pt=(isDraw ? Clazz.new_($I$(3,1)) : null);
var dm=(mStep <= 1 ? 1 : mStep);
for (var m=m0; m < p.monomerCount; m+=dm) {
var monomer=p.monomers[m];
if (bsAtoms == null  || bsAtoms.get$I(monomer.leadAtomIndex) ) {
var a=monomer.getLeadAtom$();
var id=monomer.getUniqueID$();
if (isRamachandran) {
if (ctype == "S") monomer.setGroupParameter$I$F(1111490574, NaN);
x=monomer.getGroupParameter$I(1111490569);
y=monomer.getGroupParameter$I(1111490570);
z=monomer.getGroupParameter$I(1111490568);
if (z < -90 ) z += 360;
z -= 180;
if (Float.isNaN$F(x) || Float.isNaN$F(y) || Float.isNaN$F(z)  ) {
if (bsAtoms != null ) bsAtoms.clear$I(a.i);
continue;
}var angledeg=(writeRamachandranStraightness ? p.calculateRamachandranHelixAngle$I$C(m, qtype) : 0);
var straightness=(calcRamachandranStraightness || writeRamachandranStraightness  ? C$.getStraightness$F(Math.cos(angledeg / 2 / 180  * 3.141592653589793)) : 0);
if (ctype == "S") {
monomer.setGroupParameter$I$F(1111490574, straightness);
continue;
}if (isDraw) {
if (bsSelected != null  && !bsSelected.get$I(a.getIndex$()) ) continue;
var aa=monomer;
pt.set$F$F$F(-x, x, 0.5);
pdbATOM.append$S("draw ID \"phi").append$S(id).append$S("\" ARROW ARC ").append$S((function(a,f){return f.apply(null,a)})([aa.getNitrogenAtom$()],$I$(7).eP$javajs_util_T3)).append$S($I$(7).eP$javajs_util_T3(a)).append$S((function(a,f){return f.apply(null,a)})([aa.getCarbonylCarbonAtom$()],$I$(7).eP$javajs_util_T3)).append$S($I$(7).eP$javajs_util_T3(pt)).append$S(" \"phi = ").append$S(String.valueOf$I(Math.round(x))).append$S("\" color ").append$S(C$.qColor[2]).append$S("\n");
pt.set$F$F$F(0, y, 0.5);
pdbATOM.append$S("draw ID \"psi").append$S(id).append$S("\" ARROW ARC ").append$S($I$(7).eP$javajs_util_T3(a)).append$S((function(a,f){return f.apply(null,a)})([aa.getCarbonylCarbonAtom$()],$I$(7).eP$javajs_util_T3)).append$S((function(a,f){return f.apply(null,a)})([aa.getNitrogenAtom$()],$I$(7).eP$javajs_util_T3)).append$S($I$(7).eP$javajs_util_T3(pt)).append$S(" \"psi = ").append$S(String.valueOf$I(Math.round(y))).append$S("\" color ").append$S(C$.qColor[1]).append$S("\n");
pdbATOM.append$S("draw ID \"planeNCC").append$S(id).append$S("\" ").append$S((function(a,f){return f.apply(null,a)})([aa.getNitrogenAtom$()],$I$(7).eP$javajs_util_T3)).append$S($I$(7).eP$javajs_util_T3(a)).append$S((function(a,f){return f.apply(null,a)})([aa.getCarbonylCarbonAtom$()],$I$(7).eP$javajs_util_T3)).append$S(" color ").append$S(C$.qColor[0]).append$S("\n");
pdbATOM.append$S("draw ID \"planeCNC").append$S(id).append$S("\" ").append$S((function(a,f){return f.apply(null,a)})([(p.monomers[m - 1]).getCarbonylCarbonAtom$()],$I$(7).eP$javajs_util_T3)).append$S((function(a,f){return f.apply(null,a)})([aa.getNitrogenAtom$()],$I$(7).eP$javajs_util_T3)).append$S($I$(7).eP$javajs_util_T3(a)).append$S(" color ").append$S(C$.qColor[1]).append$S("\n");
pdbATOM.append$S("draw ID \"planeCCN").append$S(id).append$S("\" ").append$S($I$(7).eP$javajs_util_T3(a)).append$S((function(a,f){return f.apply(null,a)})([aa.getCarbonylCarbonAtom$()],$I$(7).eP$javajs_util_T3)).append$S((function(a,f){return f.apply(null,a)})([(p.monomers[m + 1]).getNitrogenAtom$()],$I$(7).eP$javajs_util_T3)).append$S(" color ").append$S(C$.qColor[2]).append$S("\n");
continue;
}if (Float.isNaN$F(angledeg)) {
strExtra="";
if (writeRamachandranStraightness) continue;
} else {
q=(function(a,f){return f.apply(null,a)})([$I$(3).new3$F$F$F(1, 0, 0), angledeg],$I$(8).newVA$javajs_util_T3$F);
strExtra=C$.getQInfo$javajs_util_Quat(q);
if (writeRamachandranStraightness) {
z=angledeg;
w=straightness;
} else {
w=a.getPartialCharge$();
}}} else {
q=monomer.getQuaternion$C(qtype);
if (q != null ) {
q.setRef$javajs_util_Quat(qref);
qref=$I$(8).newQ$javajs_util_Quat(q);
}if (derivType == 2) monomer.setGroupParameter$I$F(1111490574, NaN);
if (q == null ) {
qprev=null;
qref=null;
} else if (derivType > 0) {
var anext=a;
var qnext=q;
if (qprev == null ) {
q=null;
dqprev=null;
} else {
if (isRelativeAlias) {
dq=qprev.leftDifference$javajs_util_Quat(q);
} else {
dq=q.rightDifference$javajs_util_Quat(qprev);
}if (derivType == 1) {
q=dq;
} else if (dqprev == null ) {
q=null;
} else {
q=dq.rightDifference$javajs_util_Quat(dqprev);
val1=C$.getQuaternionStraightness$S$javajs_util_Quat$javajs_util_Quat(id, dqprev, dq);
val2=C$.get3DStraightness$S$javajs_util_Quat$javajs_util_Quat(id, dqprev, dq);
(aprev.group).setGroupParameter$I$F(1111490574, useQuaternionStraightness ? val1 : val2);
}dqprev=dq;
}aprev=anext;
qprev=qnext;
}if (q == null ) {
atomLast=null;
continue;
}switch (ctype.$c()) {
default:
x=q.q1;
y=q.q2;
z=q.q3;
w=q.q0;
break;
case 120:
x=q.q0;
y=q.q1;
z=q.q2;
w=q.q3;
break;
case 121:
x=q.q3;
y=q.q0;
z=q.q1;
w=q.q2;
break;
case 122:
x=q.q2;
y=q.q3;
z=q.q0;
w=q.q1;
break;
}
var ptCenter=monomer.getQuaternionFrameCenter$C(qtype);
if (ptCenter == null ) ptCenter=Clazz.new_($I$(3,1));
if (isDraw) {
if (bsSelected != null  && !bsSelected.get$I(a.getIndex$()) ) continue;
var deg=(Math.floor(Math.acos(w) * 360 / 3.141592653589793)|0);
if (derivType == 0) {
pdbATOM.append$S($I$(7).drawQuat$javajs_util_Quat$S$S$javajs_util_P3$F(q, prefix, id, ptCenter, 1.0));
if (qtype == "n" && isAmino ) {
var ptH=(monomer).getNitrogenHydrogenPoint$();
if (ptH != null ) pdbATOM.append$S("draw ID \"").append$S(prefix).append$S("nh").append$S(id).append$S("\" width 0.1 ").append$S($I$(7).eP$javajs_util_T3(ptH)).append$S("\n");
}}if (derivType == 1) {
pdbATOM.append$S(monomer.getHelixData$I$C$I(135176, qtype, mStep)).append$S("\n");
continue;
}pt.set$F$F$F(x * 2, y * 2, z * 2);
pdbATOM.append$S("draw ID \"").append$S(prefix).append$S("a").append$S(id).append$S("\" VECTOR ").append$S($I$(7).eP$javajs_util_T3(ptCenter)).append$S($I$(7).eP$javajs_util_T3(pt)).append$S(" \">").append$S(String.valueOf$I(deg)).append$S("\" color ").append$S(C$.qColor[derivType]).append$S("\n");
continue;
}strExtra=C$.getQInfo$javajs_util_Quat(q) + (function(a,f){return f.apply(null,a)})(["  %10.5p %10.5p %10.5p", "p", Clazz.array(java.lang.Object, -1, [ptCenter])],$I$(9).sprintf$S$S$OA);
if (qtype == "n" && isAmino ) {
strExtra += (function(a,f){return f.apply(null,a)})(["  %10.5p %10.5p %10.5p", "p", Clazz.array(java.lang.Object, -1, [(monomer).getNitrogenHydrogenPoint$()])],$I$(9).sprintf$S$S$OA);
} else if (derivType == 2 && !Float.isNaN$F(val1) ) {
strExtra += (function(a,f){return f.apply(null,a)})([" %10.5f %10.5f", "F", Clazz.array(java.lang.Object, -1, [Clazz.array(Float.TYPE, -1, [val1, val2])])],$I$(9).sprintf$S$S$OA);
}}if (pdbATOM == null ) continue;
bsWritten.set$I((a.group).leadAtomIndex);
pdbATOM.append$S($I$(10).formatLabelAtomArray$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelTokenA$C$IA$javajs_util_P3(this.vwr, a, tokens, "\u0000", null, ptTemp));
pdbATOM.append$S((function(a,f){return f.apply(null,a)})(["%8.2f%8.2f%8.2f      %6.3f          %2s    %s\n", "ssF", Clazz.array(java.lang.Object, -1, [a.getElementSymbolIso$Z(false).toUpperCase$(), strExtra, Clazz.array(Float.TYPE, -1, [x * factor, y * factor, z * factor, w * factor])])],$I$(9).sprintf$S$S$OA));
if (atomLast != null  && atomLast.group.getBioPolymerIndexInModel$() == a.group.getBioPolymerIndexInModel$() ) {
pdbCONECT.append$S("CONECT").append$S((function(a,f){return f.apply(null,a)})(["%5i", "i", atomLast.getAtomNumber$()],$I$(9).formatStringI$S$S$I)).append$S((function(a,f){return f.apply(null,a)})(["%5i", "i", a.getAtomNumber$()],$I$(9).formatStringI$S$S$I)).appendC$C("\n");
}atomLast=a;
}}
}, p$1);

Clazz.newMeth(C$, 'getQInfo$javajs_util_Quat', function (q) {
var axis=q.toAxisAngle4f$();
return (function(a,f){return f.apply(null,a)})(["%10.6f%10.6f%10.6f%10.6f  %6.2f  %10.5f %10.5f %10.5f", "F", Clazz.array(java.lang.Object, -1, [Clazz.array(Float.TYPE, -1, [q.q0, q.q1, q.q2, q.q3, (axis.angle * 180 / 3.141592653589793), axis.x, axis.y, axis.z])])],$I$(9).sprintf$S$S$OA);
}, 1);

Clazz.newMeth(C$, 'drawQuat$javajs_util_Quat$S$S$javajs_util_P3$F', function (q, prefix, id, ptCenter, scale) {
var strV=" VECTOR " + $I$(7).eP$javajs_util_T3(ptCenter) + " " ;
if (scale == 0 ) scale=1.0;
return "draw " + prefix + "x" + id + strV + (function(a,f){return f.apply(null,a)})([q.getVectorScaled$I$F(0, scale)],$I$(7).eP$javajs_util_T3) + " color red\n" + "draw " + prefix + "y" + id + strV + (function(a,f){return f.apply(null,a)})([q.getVectorScaled$I$F(1, scale)],$I$(7).eP$javajs_util_T3) + " color green\n" + "draw " + prefix + "z" + id + strV + (function(a,f){return f.apply(null,a)})([q.getVectorScaled$I$F(2, scale)],$I$(7).eP$javajs_util_T3) + " color blue\n" ;
}, 1);

Clazz.newMeth(C$, 'get3DStraightness$S$javajs_util_Quat$javajs_util_Quat', function (id, dq, dqnext) {
return dq.getNormal$().dot$javajs_util_T3(dqnext.getNormal$());
}, 1);

Clazz.newMeth(C$, 'getQuaternionStraightness$S$javajs_util_Quat$javajs_util_Quat', function (id, dq, dqnext) {
return C$.getStraightness$F(dq.dot$javajs_util_Quat(dqnext));
}, 1);

Clazz.newMeth(C$, 'getStraightness$F', function (cosHalfTheta) {
return (1 - 2 * Math.acos(Math.abs(cosHalfTheta)) / 3.141592653589793);
}, 1);

Clazz.newMeth(C$, 'getPdbDataM$org_jmol_modelsetbio_BioModel$org_jmol_viewer_Viewer$S$C$Z$javajs_util_BS$javajs_util_OC$org_jmol_modelset_LabelTokenA$javajs_util_SB$javajs_util_BS', function (m, vwr, type, ctype, isDraw, bsSelected, out, tokens, pdbCONECT, bsWritten) {
var bothEnds=false;
var qtype=(ctype != "R" ? "r" : type.length$() > 13 && type.indexOf$S("ramachandran ") >= 0  ? type.charAt$I(13) : "R");
if (qtype == "r") qtype=vwr.getQuaternionFrame$();
var mStep=vwr.getInt$I(553648144);
var derivType=(type.indexOf$S("diff") < 0 ? 0 : type.indexOf$S("2") < 0 ? 1 : 2);
if (!isDraw) {
out.append$S("REMARK   6 Jmol PDB-encoded data: " + type + ";" );
if (ctype != "R") {
out.append$S("  quaternionFrame = \"" + qtype + "\"" );
bothEnds=true;
}out.append$S("\nREMARK   6 Jmol Version ").append$S($I$(11).getJmolVersion$()).append$S("\n");
if (ctype == "R") out.append$S("REMARK   6 Jmol data min = {-180 -180 -180} max = {180 180 180} unScaledXyz = xyz * {1 1 1} + {0 0 0} plotScale = {100 100 100}\n");
 else out.append$S("REMARK   6 Jmol data min = {-1 -1 -1} max = {1 1 1} unScaledXyz = xyz * {0.1 0.1 0.1} + {0 0 0} plotScale = {100 100 100}\n");
}var ptTemp=Clazz.new_($I$(3,1));
for (var p=0; p < m.bioPolymerCount; p++) p$1.getPdbData$org_jmol_modelsetbio_BioPolymer$C$C$I$I$javajs_util_BS$javajs_util_BS$Z$Z$Z$org_jmol_modelset_LabelTokenA$javajs_util_OC$javajs_util_SB$javajs_util_BS$javajs_util_P3.apply(this, [m.bioPolymers[p], ctype, qtype, mStep, derivType, m.bsAtoms, bsSelected, bothEnds, isDraw, p == 0, tokens, out, pdbCONECT, bsWritten, ptTemp]);

});

Clazz.newMeth(C$, 'calculateAllstruts$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet$javajs_util_BS$javajs_util_BS', function (vwr, ms, bs1, bs2) {
vwr.setModelVisibility$();
ms.makeConnections2$F$F$I$I$javajs_util_BS$javajs_util_BS$javajs_util_BS$Z$Z$F(0, 3.4028235E38, 32768, 12291, bs1, bs2, null, false, false, 0);
var iAtom=bs1.nextSetBit$I(0);
if (iAtom < 0) return 0;
var m=ms.am[ms.at[iAtom].mi];
if (!m.isBioModel) return 0;
var vCA=Clazz.new_($I$(1,1));
var bsCheck;
if (bs1.equals$O(bs2)) {
bsCheck=bs1;
} else {
bsCheck=$I$(12).copy$javajs_util_BS(bs1);
bsCheck.or$javajs_util_BS(bs2);
}var atoms=ms.at;
bsCheck.and$javajs_util_BS(vwr.getModelUndeletedAtomsBitSet$I(m.modelIndex));
for (var i=bsCheck.nextSetBit$I(0); i >= 0; i=bsCheck.nextSetBit$I(i + 1)) {
var a=atoms[i];
if (a.checkVisible$() && a.atomID == 2  && a.group.groupID != 5  && atoms[i].group.leadAtomIndex >= 0 ) vCA.addLast$O(atoms[i]);
}
if (vCA.size$() == 0) return 0;
var struts=C$.calculateStruts$org_jmol_modelset_ModelSet$javajs_util_BS$javajs_util_BS$javajs_util_Lst$F$I$Z(ms, bs1, bs2, vCA, vwr.getFloat$I(570425408), vwr.getInt$I(553648184), vwr.getBoolean$I(603979955));
var mad=($s$[0] = (vwr.getFloat$I(570425406) * 2000), $s$[0]);
for (var i=0; i < struts.size$(); i++) {
var o=struts.get$I(i);
ms.bondAtoms$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z$Z(o[0], o[1], 32768, mad, null, 0, false, true);
}
return struts.size$();
});

Clazz.newMeth(C$, 'calculateStruts$org_jmol_modelset_ModelSet$javajs_util_BS$javajs_util_BS$javajs_util_Lst$F$I$Z', function (modelSet, bs1, bs2, vCA, thresh, delta, allowMultiple) {
var vStruts=Clazz.new_($I$(1,1));
var thresh2=thresh * thresh;
var n=vCA.size$();
var nEndMin=3;
var bsStruts=Clazz.new_($I$(5,1));
var bsNotAvailable=Clazz.new_($I$(5,1));
var bsNearbyResidues=Clazz.new_($I$(5,1));
var a1=vCA.get$I(0);
var a2;
var nBiopolymers=modelSet.getBioPolymerCountInModel$I(a1.mi);
var biopolymerStartsEnds=Clazz.array(Integer.TYPE, [nBiopolymers, nEndMin * 2]);
for (var i=0; i < n; i++) {
a1=vCA.get$I(i);
var polymerIndex=a1.group.getBioPolymerIndexInModel$();
var monomerIndex=a1.group.getMonomerIndex$();
var bpt=monomerIndex;
if (bpt < nEndMin) biopolymerStartsEnds[polymerIndex][bpt]=i + 1;
bpt=(a1.group).getBioPolymerLength$() - monomerIndex - 1 ;
if (bpt < nEndMin) biopolymerStartsEnds[polymerIndex][nEndMin + bpt]=i + 1;
}
var d2=Clazz.array(Float.TYPE, [(n * (n - 1)/2|0)]);
for (var i=0; i < n; i++) {
a1=vCA.get$I(i);
for (var j=i + 1; j < n; j++) {
var ipt=C$.strutPoint$I$I$I(i, j, n);
a2=vCA.get$I(j);
var resno1=a1.getResno$();
var polymerIndex1=a1.group.getBioPolymerIndexInModel$();
var resno2=a2.getResno$();
var polymerIndex2=a2.group.getBioPolymerIndexInModel$();
if (polymerIndex1 == polymerIndex2 && Math.abs(resno2 - resno1) < delta ) bsNearbyResidues.set$I(ipt);
var d=d2[ipt]=a1.distanceSquared$javajs_util_T3(a2);
if (d >= thresh2 ) bsNotAvailable.set$I(ipt);
}
}
for (var t=5; --t >= 0; ) {
thresh2=(thresh - t) * (thresh - t);
for (var i=0; i < n; i++) if (allowMultiple || !bsStruts.get$I(i) ) for (var j=i + 1; j < n; j++) {
var ipt=C$.strutPoint$I$I$I(i, j, n);
if (!bsNotAvailable.get$I(ipt) && !bsNearbyResidues.get$I(ipt) && (allowMultiple || !bsStruts.get$I(j) ) && d2[ipt] <= thresh2   ) C$.setStrut$I$I$I$javajs_util_Lst$javajs_util_BS$javajs_util_BS$javajs_util_Lst$javajs_util_BS$javajs_util_BS$javajs_util_BS$I(i, j, n, vCA, bs1, bs2, vStruts, bsStruts, bsNotAvailable, bsNearbyResidues, delta);
}

}
for (var b=0; b < nBiopolymers; b++) {
for (var k=0; k < nEndMin * 2; k++) {
var i=biopolymerStartsEnds[b][k] - 1;
if (i >= 0 && bsStruts.get$I(i) ) {
for (var j=0; j < nEndMin; j++) {
var pt=((k/nEndMin|0)) * nEndMin + j;
if ((i=biopolymerStartsEnds[b][pt] - 1) >= 0) bsStruts.set$I(i);
biopolymerStartsEnds[b][pt]=-1;
}
}}
if (biopolymerStartsEnds[b][0] == -1 && biopolymerStartsEnds[b][nEndMin] == -1 ) continue;
var okN=false;
var okC=false;
var iN=0;
var jN=0;
var iC=0;
var jC=0;
var minN=3.4028235E38;
var minC=3.4028235E38;
for (var j=0; j < n; j++) for (var k=0; k < nEndMin * 2; k++) {
var i=biopolymerStartsEnds[b][k] - 1;
if (i == -2) {
k=((k/nEndMin|0) + 1) * nEndMin - 1;
continue;
}if (j == i || i == -1 ) continue;
var ipt=C$.strutPoint$I$I$I(i, j, n);
if (bsNearbyResidues.get$I(ipt) || d2[ipt] > (k < nEndMin ? minN : minC)  ) continue;
if (k < nEndMin) {
if (bsNotAvailable.get$I(ipt)) okN=true;
jN=j;
iN=i;
minN=d2[ipt];
} else {
if (bsNotAvailable.get$I(ipt)) okC=true;
jC=j;
iC=i;
minC=d2[ipt];
}}

if (okN) C$.setStrut$I$I$I$javajs_util_Lst$javajs_util_BS$javajs_util_BS$javajs_util_Lst$javajs_util_BS$javajs_util_BS$javajs_util_BS$I(iN, jN, n, vCA, bs1, bs2, vStruts, bsStruts, bsNotAvailable, bsNearbyResidues, delta);
if (okC) C$.setStrut$I$I$I$javajs_util_Lst$javajs_util_BS$javajs_util_BS$javajs_util_Lst$javajs_util_BS$javajs_util_BS$javajs_util_BS$I(iC, jC, n, vCA, bs1, bs2, vStruts, bsStruts, bsNotAvailable, bsNearbyResidues, delta);
}
return vStruts;
}, 1);

Clazz.newMeth(C$, 'strutPoint$I$I$I', function (i, j, n) {
return (j < i ? (j * (2 * n - j - 1)/2|0) + i - j - 1 : (i * (2 * n - i - 1)/2|0) + j - i - 1);
}, 1);

Clazz.newMeth(C$, 'setStrut$I$I$I$javajs_util_Lst$javajs_util_BS$javajs_util_BS$javajs_util_Lst$javajs_util_BS$javajs_util_BS$javajs_util_BS$I', function (i, j, n, vCA, bs1, bs2, vStruts, bsStruts, bsNotAvailable, bsNearbyResidues, delta) {
var a1=vCA.get$I(i);
var a2=vCA.get$I(j);
if (!bs1.get$I(a1.i) || !bs2.get$I(a2.i) ) return;
vStruts.addLast$O(Clazz.array($I$(13), -1, [a1, a2]));
bsStruts.set$I(i);
bsStruts.set$I(j);
for (var k1=Math.max(0, i - delta); k1 <= i + delta && k1 < n ; k1++) {
for (var k2=Math.max(0, j - delta); k2 <= j + delta && k2 < n ; k2++) {
if (k1 == k2) {
continue;
}var ipt=C$.strutPoint$I$I$I(k1, k2, n);
if (!bsNearbyResidues.get$I(ipt)) {
bsNotAvailable.set$I(ipt);
}}
}
}, 1);

Clazz.newMeth(C$, 'mutate$org_jmol_viewer_Viewer$javajs_util_BS$S$SA', function (vwr, bs, group, sequence) {
var i0=bs.nextSetBit$I(0);
if (sequence == null ) return C$.mutateAtom$org_jmol_viewer_Viewer$I$S(vwr, i0, group);
var isFile=(group == null );
if (isFile) group=sequence[0];
var lastGroup=null;
var isOK=true;
for (var i=i0, pt=0; i >= 0; i=bs.nextSetBit$I(i + 1)) {
var g=vwr.ms.at[i].group;
if (g === lastGroup ) continue;
lastGroup=g;
if (!isFile) {
group=sequence[pt++ % sequence.length];
if (group.equals$O("UNK")) continue;
group="==" + group;
}C$.mutateAtom$org_jmol_viewer_Viewer$I$S(vwr, i, group);
}
return isOK;
});

Clazz.newMeth(C$, 'mutateAtom$org_jmol_viewer_Viewer$I$S', function (vwr, iatom, fileName) {
var ms=vwr.ms;
var iModel=ms.at[iatom].mi;
if (ms.isTrajectory$I(iModel)) return false;
var info=vwr.fm.getFileInfo$();
var g=ms.at[iatom].group;
if (!(Clazz.instanceOf(g, "org.jmol.modelsetbio.AminoMonomer"))) return false;
(ms.am[iModel]).isMutated=true;
var res0=g;
var ac=ms.ac;
var bsRes0=Clazz.new_($I$(5,1));
res0.setAtomBits$javajs_util_BS(bsRes0);
var backbone=C$.getMutationBackbone$org_jmol_modelsetbio_AminoMonomer$org_jmol_modelset_AtomA(res0, null);
fileName=$I$(9).esc$S(fileName);
var script="try{\n  var atoms0 = {*}\n  var res0 = " + (function(a,f){return f.apply(null,a)})([bsRes0, "(", ")"],$I$(5).escape$javajs_util_BS$C$C) + "\n" + "  load mutate " + fileName + "\n" + "  var res1 = {!atoms0};var r1 = res1[1];var r0 = res1[0]\n" + "  if ({r1 & within(group, r0)}){\n" + "    var haveHs = ({_H & connected(res0)} != 0)\n" + "    if (!haveHs) {delete _H & res1}\n" + "    var sm = '[*.N][*.CA][*.C][*.O]'\n" + "    var keyatoms = res1.find(sm)\n" + "    var x = compare(res1,res0,sm,'BONDS')\n" + "    if(x){\n" + "      print 'mutating ' + res0[1].label('%n%r') + ' to ' + " + fileName + ".trim('=')\n" + "      rotate branch @x\n" + "      compare res1 res0 SMARTS @sm rotate translate 0\n" + "      var c = {!res0 & connected(res0)}\n" + "      var N2 = {*.N & c}\n" + "      var C0 = {*.C & c}\n" + "      var angleH = ({*.H and res0} ? angle({*.C and res0},{*.CA and res0},{*.N and res0},{*.H and res0}) : 1000)\n" + "      delete res0\n" + "      if (N2) {\n" + "        delete (*.OXT,*.HXT) and res1\n" + "        connect {N2} {keyatoms & *.C}\n" + "      }\n" + "      if (C0) {\n" + "        var h1 = {*.H and res1}\n" + "        var n = (h1 ? 0 + {res1 and _H & connected(*.N)} : 0)\n" + "        switch (n) {\n" + "        case 0:\n" + "          break\n" + "        case 1:\n" + "          delete h1\n" + "          break\n" + "        default:\n" + "          var x = angle({*.C and res1},{*.CA and res1},{*.N and res1},h1)\n" + "          rotate branch {*.CA and res1} {*.N and res1} @{angleH-x}\n" + "          delete *.H2 and res1\n" + "          delete *.H3 and res1\n" + "          break\n" + "        }\n" + "        connect {C0} {keyatoms & *.N}\n" + "      }\n" + "    }\n" + "  }\n" + "}catch(e){print e}\n" ;
try {
if ($I$(6).debugging) $I$(6).debug$S(script);
vwr.eval.runScript$S(script);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.out.println$O(e);
} else {
throw e;
}
}
ms=vwr.ms;
if (ms.ac == ac) return false;
var sb=ms.am[iModel].loadScript;
var s=(function(a,f){return f.apply(null,a)})([sb.toString(), "load mutate ", "mutate ({" + iatom + "})" ],$I$(9).rep$S$S$S);
sb.setLength$I(0);
sb.append$S(s);
g=ms.at[ms.ac - 1].group;
if (g !== ms.at[ac + 1].group  || !(Clazz.instanceOf(g, "org.jmol.modelsetbio.AminoMonomer")) ) {
var bsAtoms=Clazz.new_($I$(5,1));
g.setAtomBits$javajs_util_BS(bsAtoms);
vwr.deleteAtoms$javajs_util_BS$Z(bsAtoms, false);
return false;
}var res1=g;
C$.getMutationBackbone$org_jmol_modelsetbio_AminoMonomer$org_jmol_modelset_AtomA(res1, backbone);
C$.replaceMutatedMonomer$org_jmol_viewer_Viewer$org_jmol_modelsetbio_AminoMonomer$org_jmol_modelsetbio_AminoMonomer(vwr, res0, res1);
vwr.fm.setFileInfo$SA(info);
return true;
}, 1);

Clazz.newMeth(C$, 'replaceMutatedMonomer$org_jmol_viewer_Viewer$org_jmol_modelsetbio_AminoMonomer$org_jmol_modelsetbio_AminoMonomer', function (vwr, res0, res1) {
res1.setResno$I(res0.getResno$());
res1.chain.groupCount=0;
res1.chain=res0.chain;
res1.chain.model.groupCount=-1;
res1.proteinStructure=res0.proteinStructure;
vwr.shm.replaceGroup$org_jmol_modelset_Group$org_jmol_modelset_Group(res0, res1);
var groups=res0.chain.groups;
for (var i=groups.length; --i >= 0; ) if (groups[i] === res0 ) {
groups[i]=res1;
break;
}
res1.bioPolymer=res0.bioPolymer;
if (res1.bioPolymer != null ) {
var m=res1.bioPolymer.monomers;
for (var j=m.length; --j >= 0; ) if (m[j] === res0 ) {
m[j]=res1;
break;
}
}}, 1);

Clazz.newMeth(C$, 'getMutationBackbone$org_jmol_modelsetbio_AminoMonomer$org_jmol_modelset_AtomA', function (res1, backbone) {
var b=Clazz.array($I$(13), -1, [res1.getCarbonylCarbonAtom$(), res1.getCarbonylOxygenAtom$(), res1.getLeadAtom$(), res1.getNitrogenAtom$(), res1.getExplicitNH$()]);
if (backbone == null ) {
if (b[3].getCovalentHydrogenCount$() > 1) b[4]=null;
} else {
for (var i=0; i < 5; i++) {
var a0=backbone[i];
var a1=b[i];
if (a0 != null  && a1 != null  ) a1.setT$javajs_util_T3(a0);
}
}return b;
}, 1);

Clazz.newMeth(C$, 'getFullPDBHeader$java_util_Map', function (auxiliaryInfo) {
var info=this.vwr.getCurrentFileAsString$S("biomodel");
var ichMin=info.length$();
for (var i=C$.pdbRecords.length; --i >= 0; ) {
var ichFound;
var strRecord=C$.pdbRecords[i];
switch (ichFound=(info.startsWith$S(strRecord) ? 0 : info.indexOf$S("\n" + strRecord))) {
case -1:
continue;
case 0:
auxiliaryInfo.put$O$O("fileHeader", "");
return "";
default:
if (ichFound < ichMin) ichMin=++ichFound;
}
}
info=info.substring$I$I(0, ichMin);
auxiliaryInfo.put$O$O("fileHeader", info);
return info;
});

Clazz.newMeth(C$, 'getAminoAcidValenceAndCharge$S$S$IA', function (res, name, ret) {
var valence=ret[4];
ret[4]=0;
if (res == null  || res.length$() == 0  || res.length$() > 3  || name.equals$O("CA")  || name.equals$O("CB") ) return false;
var ch0=name.charAt$I(0);
var ch1=(name.length$() == 1 ? "\u0000" : name.charAt$I(1));
var isSp2=false;
var bondCount=ret[3];
switch (res.length$()) {
case 3:
if (name.length$() == 1) {
switch (ch0.$c()) {
case 78:
if (bondCount > 1) return false;
ret[1]=1;
break;
case 79:
if (valence == 1) {
return true;
}isSp2=("HOH;DOD;WAT".indexOf$S(res) < 0);
break;
default:
isSp2=true;
}
} else {
var id=res + ch0;
isSp2=("ARGN;ASNN;ASNO;ASPO;GLNN;GLNO;GLUO;HISN;HISC;PHECTRPC;TRPN;TYRC".indexOf$S(id) >= 0);
if ("LYSN".indexOf$S(id) >= 0) {
ret[1]=1;
} else if (ch0 == "O" && ch1 == "X" ) {
ret[1]=-1;
}}break;
case 1:
case 2:
if (name.length$() > 2 && name.charAt$I(2) == "\'" ) return false;
switch (ch0.$c()) {
case 67:
if (ch1 == "7") return false;
break;
case 78:
switch (ch1.$c()) {
case 49:
case 51:
if ("A3;A1;C3;G3;I3".indexOf$S("" + res.charAt$I(res.length$() - 1) + ch1 ) >= 0) ret[0]--;
break;
case 55:
ret[0]--;
break;
}
break;
}
isSp2=true;
}
if (isSp2) {
ret[4]=("ARGNE;ARGNH1;ASNNH2;GLNNE2;TRPNE1;HISNE2".indexOf$S(res + name) >= 0 ? 0 : 1);
switch (ch0.$c()) {
case 78:
ret[2]=2;
if (valence == 2 && bondCount == 1 ) ret[4]++;
break;
case 67:
ret[2]=2;
ret[0]--;
break;
case 79:
if (valence == 2 && bondCount == 1 ) ret[4]--;
ret[0]--;
break;
}
}return true;
});

C$.$static$=function(){C$.$static$=0;
C$.qColor=Clazz.array(String, -1, ["yellow", "orange", "purple"]);
C$.pdbRecords=Clazz.array(String, -1, ["ATOM  ", "MODEL ", "HETATM"]);
};
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:13 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
