(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),p$1={},I$=[[0,'javajs.util.BS','java.util.Hashtable','org.jmol.symmetry.SpaceGroup','org.jmol.script.T','javajs.util.PT','javajs.util.V3','javajs.util.P3','javajs.util.Measure','javajs.util.Quat','org.jmol.symmetry.SymmetryOperation','javajs.util.SB','org.jmol.util.Escape','javajs.util.P4','org.jmol.util.Logger','javajs.util.M4','org.jmol.symmetry.Symmetry','javajs.util.Lst']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SymmetryDesc");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['modelSet','org.jmol.modelset.ModelSet']]
,['O',['keys','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_modelset_ModelSet', function (modelSet) {
this.modelSet=modelSet;
return this;
});

Clazz.newMeth(C$, 'getSymopInfo$I$S$I$javajs_util_P3$javajs_util_P3$S$I$F$I$I', function (iAtom, xyz, op, pt, pt2, id, type, scaleFactor, nth, options) {
if (type == 0) type=C$.getType$S(id);
var ret=(type == 1140850689 ? Clazz.new_($I$(1,1)) : "");
if (iAtom < 0) return ret;
var iModel=this.modelSet.at[iAtom].mi;
var uc=this.modelSet.am[iModel].biosymmetry;
if (uc == null  && (uc=this.modelSet.getUnitCell$I(iModel)) == null  ) return ret;
if (type != 135176 || op != 2147483647 ) {
return p$1.getSymmetryInfo$org_jmol_symmetry_Symmetry$I$I$org_jmol_symmetry_Symmetry$S$I$javajs_util_P3$javajs_util_P3$S$I$F$I$I.apply(this, [uc, iModel, iAtom, uc, xyz, op, pt, pt2, id, type, scaleFactor, nth, options]);
}var s="";
var ops=uc.getSymmetryOperations$();
if (ops != null ) {
if (id == null ) id="sg";
var n=ops.length;
for (op=0; op < n; op++) s += p$1.getSymmetryInfo$org_jmol_symmetry_Symmetry$I$I$org_jmol_symmetry_Symmetry$S$I$javajs_util_P3$javajs_util_P3$S$I$F$I$I.apply(this, [uc, iModel, iAtom, uc, xyz, op, pt, pt2, id + op, 135176, scaleFactor, nth, options]);

}return s;
});

Clazz.newMeth(C$, 'getSpaceGroupInfo$org_jmol_symmetry_Symmetry$I$S$I$javajs_util_P3$javajs_util_P3$S$F$I$Z$Z$I$org_jmol_api_SymmetryInterface', function (sym, modelIndex, sgName, symOp, pt1, pt2, drawID, scaleFactor, nth, isFull, isForModel, options, cellInfo) {
var info=null;
var isStandard=(pt1 == null  && drawID == null   && nth <= 0 );
var isBio=false;
var sgNote=null;
var haveName=(sgName != null  && sgName.length$() > 0 );
var haveRawName=(haveName && sgName.indexOf$S("[--]") >= 0 );
if (isForModel || !haveName ) {
var saveModelInfo=(isStandard && symOp == 0 );
if (modelIndex < 0) modelIndex=(Clazz.instanceOf(pt1, "org.jmol.modelset.Atom") ? (pt1).mi : this.modelSet.vwr.am.cmi);
if (modelIndex < 0) sgNote="no single current model";
 else if (cellInfo == null  && !(isBio=(cellInfo=this.modelSet.am[modelIndex].biosymmetry) != null )  && (cellInfo=this.modelSet.getUnitCell$I(modelIndex)) == null  ) sgNote="not applicable";
if (sgNote != null ) {
info=Clazz.new_($I$(2,1));
info.put$O$O("spaceGroupInfo", "");
info.put$O$O("spaceGroupNote", sgNote);
info.put$O$O("symmetryInfo", "");
} else if (isStandard) {
info=this.modelSet.getInfo$I$S(modelIndex, "spaceGroupInfo");
}if (info != null ) return info;
info=Clazz.new_($I$(2,1));
sgName=cellInfo.getSpaceGroupName$();
var ops=cellInfo.getSymmetryOperations$();
var sg=(isBio ? (cellInfo).spaceGroup : null);
var slist=(haveRawName ? "" : null);
var opCount=0;
if (ops != null ) {
if (isBio) sym.spaceGroup=$I$(3).getNull$Z$Z$Z(false, false, false);
 else sym.setSpaceGroup$Z(false);
if (ops[0].timeReversal != 0) (sym.getSpaceGroupOperation$I(0)).timeReversal=1;
var infolist=Clazz.array(java.lang.Object, [ops.length, null]);
var sops="";
for (var i=0, nop=0; i < ops.length && nop != nth ; i++) {
var op=ops[i];
var isNewIncomm=(i == 0 && op.xyz.indexOf$S("x4") >= 0 );
var iop=(!isNewIncomm && sym.getSpaceGroupOperation$I(i) != null   ? i : isBio ? sym.addBioMoleculeOperation$javajs_util_M4$Z(sg.finalOperations[i], false) : sym.addSpaceGroupOperation$S$I("=" + op.xyz, i + 1));
if (iop < 0) continue;
op=sym.getSpaceGroupOperation$I(i);
if (op == null ) continue;
if (op.timeReversal != 0 || op.modDim > 0 ) isStandard=false;
if (slist != null ) slist += ";" + op.xyz;
var ret=(symOp > 0 && symOp - 1 != iop  ? null : p$1.createInfoArray$org_jmol_symmetry_SymmetryOperation$org_jmol_api_SymmetryInterface$javajs_util_P3$javajs_util_P3$S$F$I.apply(this, [op, cellInfo, pt1, pt2, drawID, scaleFactor, options]));
if (ret != null ) {
if (nth > 0 && ++nop != nth ) continue;
infolist[i]=ret;
sops += "\n" + (i + 1) + "\t" + ret[0] + "\t" + ret[2] ;
opCount++;
}}
info.put$O$O("operations", infolist);
info.put$O$O("symmetryInfo", (sops.length$() == 0 ? "" : sops.substring$I(1)));
}sgNote=(opCount == 0 ? "\n no symmetry operations" : nth <= 0 && symOp <= 0  ? "\n" + opCount + " symmetry operation" + (opCount == 1 ? ":\n" : "s:\n")  : "");
if (slist != null ) sgName=slist.substring$I(slist.indexOf$S(";") + 1);
if (saveModelInfo) this.modelSet.setInfo$I$O$O(modelIndex, "spaceGroupInfo", info);
} else {
info=Clazz.new_($I$(2,1));
}info.put$O$O("spaceGroupName", sgName);
info.put$O$O("spaceGroupNote", sgNote == null  ? "" : sgNote);
var data;
if (isBio) {
data=sgName;
} else {
if (haveName && !haveRawName ) sym.setSpaceGroupName$S(sgName);
data=sym.getSpaceGroupInfoObj$S$org_jmol_api_SymmetryInterface$Z(sgName, cellInfo, isFull);
if (data == null  || data.equals$O("?") ) {
data="?";
info.put$O$O("spaceGroupNote", "could not identify space group from name: " + sgName + "\nformat: show spacegroup \"2\" or \"P 2c\" " + "or \"C m m m\" or \"x, y, z;-x ,-y, -z\"" );
}}info.put$O$O("spaceGroupInfo", data);
return info;
});

Clazz.newMeth(C$, 'getType$S', function (id) {
var type;
if (id == null ) return 1073742001;
if (id.equalsIgnoreCase$S("matrix")) return 12;
if (id.equalsIgnoreCase$S("description")) return 1825200146;
if (id.equalsIgnoreCase$S("axispoint")) return 134217751;
if (id.equalsIgnoreCase$S("time")) return 268435633;
if (id.equalsIgnoreCase$S("info")) return 1275068418;
type=$I$(4).getTokFromName$S(id);
if (type != 0) return type;
for (type=0; type < C$.keys.length; type++) if (id.equalsIgnoreCase$S(C$.keys[type])) return -1 - type;

return 1073741961;
}, 1);

Clazz.newMeth(C$, 'nullReturn$I', function (type) {
switch (type) {
case 135176:
return "draw ID sym_* delete";
case 1073741961:
case 1825200146:
case 1145047050:
case 1073742078:
return "";
case 1140850689:
return Clazz.new_($I$(1,1));
default:
return null;
}
}, 1);

Clazz.newMeth(C$, 'getInfo$OA$I', function (info, type) {
if (type < 0 && type >= -C$.keys.length ) return info[-1 - type];
switch (type) {
case 1073742327:
case 1073741982:
return info;
case 1275068418:
var lst=Clazz.new_($I$(2,1));
for (var j=0, n=info.length; j < n; j++) {
var key=(j == 3 ? "draw" : j == 7 ? "axispoint" : C$.keys[j]);
if (info[j] != null ) lst.put$O$O(key, info[j]);
}
return lst;
case 1073741961:
return info[0] + "  \t" + info[2] ;
case 1145047050:
return info[0];
case 1073742078:
return info[1];
default:
case 1825200146:
return info[2];
case 135176:
return info[3] + "\nprint " + $I$(5).esc$S(info[0] + " " + info[2] ) ;
case 1145047051:
return info[4];
case 1073742178:
return info[5];
case 12289:
return info[6];
case 134217751:
return info[7];
case 1073741854:
return info[8];
case 134217729:
return info[9];
case 12:
return info[10];
case 1814695966:
return info[11];
case 4160:
return info[12];
case 268435633:
return info[13];
case 134217750:
return info[14];
case 1140850696:
return info[15];
case 1073741974:
return info[16];
}
}, 1);

Clazz.newMeth(C$, 'createInfoArray$org_jmol_symmetry_SymmetryOperation$org_jmol_api_SymmetryInterface$javajs_util_P3$javajs_util_P3$S$F$I', function (op, uc, pta00, ptTarget, id, scaleFactor, options) {
if (!op.isFinalized) op.doFinalize$();
var isTimeReversed=(op.timeReversal == -1);
if (scaleFactor == 0 ) scaleFactor=1.0;
var vtemp=Clazz.new_($I$(6,1));
var ptemp=Clazz.new_($I$(7,1));
var ptemp2=Clazz.new_($I$(7,1));
var pta01=Clazz.new_($I$(7,1));
var pta02=Clazz.new_($I$(7,1));
var ftrans=Clazz.new_($I$(6,1));
var vtrans=Clazz.new_($I$(6,1));
var plane=null;
if (pta00 == null  || Float.isNaN$F(pta00.x) ) pta00=Clazz.new_($I$(7,1));
if (ptTarget != null ) {
C$.setFractional$org_jmol_api_SymmetryInterface$javajs_util_T3$javajs_util_P3$javajs_util_P3(uc, pta00, pta01, ptemp);
op.rotTrans$javajs_util_T3(pta01);
uc.toCartesian$javajs_util_T3$Z(pta01, false);
uc.toUnitCell$javajs_util_T3$javajs_util_T3(pta01, ptemp);
pta02.setT$javajs_util_T3(ptTarget);
uc.toUnitCell$javajs_util_T3$javajs_util_T3(pta02, ptemp);
if (pta01.distance$javajs_util_T3(pta02) > 0.1 ) return null;
C$.setFractional$org_jmol_api_SymmetryInterface$javajs_util_T3$javajs_util_P3$javajs_util_P3(uc, pta00, pta01, null);
op.rotTrans$javajs_util_T3(pta01);
C$.setFractional$org_jmol_api_SymmetryInterface$javajs_util_T3$javajs_util_P3$javajs_util_P3(uc, ptTarget, pta02, null);
vtrans.sub2$javajs_util_T3$javajs_util_T3(pta02, pta01);
}pta01.set$F$F$F(1, 0, 0);
pta02.set$F$F$F(0, 1, 0);
var pta03=$I$(7).new3$F$F$F(0, 0, 1);
pta01.add$javajs_util_T3(pta00);
pta02.add$javajs_util_T3(pta00);
pta03.add$javajs_util_T3(pta00);
var pt0=C$.rotTransCart$org_jmol_symmetry_SymmetryOperation$org_jmol_api_SymmetryInterface$javajs_util_P3$javajs_util_V3(op, uc, pta00, vtrans);
var pt1=C$.rotTransCart$org_jmol_symmetry_SymmetryOperation$org_jmol_api_SymmetryInterface$javajs_util_P3$javajs_util_V3(op, uc, pta01, vtrans);
var pt2=C$.rotTransCart$org_jmol_symmetry_SymmetryOperation$org_jmol_api_SymmetryInterface$javajs_util_P3$javajs_util_V3(op, uc, pta02, vtrans);
var pt3=C$.rotTransCart$org_jmol_symmetry_SymmetryOperation$org_jmol_api_SymmetryInterface$javajs_util_P3$javajs_util_V3(op, uc, pta03, vtrans);
var vt1=$I$(6).newVsub$javajs_util_T3$javajs_util_T3(pt1, pt0);
var vt2=$I$(6).newVsub$javajs_util_T3$javajs_util_T3(pt2, pt0);
var vt3=$I$(6).newVsub$javajs_util_T3$javajs_util_T3(pt3, pt0);
C$.approx$javajs_util_T3(vtrans);
vtemp.cross$javajs_util_T3$javajs_util_T3(vt1, vt2);
var haveInversion=(vtemp.dot$javajs_util_T3(vt3) < 0 );
if (haveInversion) {
pt1.sub2$javajs_util_T3$javajs_util_T3(pt0, vt1);
pt2.sub2$javajs_util_T3$javajs_util_T3(pt0, vt2);
pt3.sub2$javajs_util_T3$javajs_util_T3(pt0, vt3);
}var info=$I$(8,"computeHelicalAxis$javajs_util_P3$javajs_util_P3$javajs_util_Quat",[pta00, pt0, $I$(9).getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3(pt0, pt1, pt2).div$javajs_util_Quat($I$(9).getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3(pta00, pta01, pta02))]);
var pa1=info[0];
var ax1=info[1];
var ang1=(Math.abs($I$(5,"approx$F$F",[(info[3]).x, 1]))|0);
var pitch1=$I$(10,"approxF$F",[(info[3]).y]);
if (haveInversion) {
pt1.add2$javajs_util_T3$javajs_util_T3(pt0, vt1);
pt2.add2$javajs_util_T3$javajs_util_T3(pt0, vt2);
pt3.add2$javajs_util_T3$javajs_util_T3(pt0, vt3);
}var trans=$I$(6).newVsub$javajs_util_T3$javajs_util_T3(pt0, pta00);
if (trans.length$() < 0.1 ) trans=null;
var ptinv=null;
var ipt=null;
var ptref=null;
var isTranslation=(ang1 == 0);
var isRotation=!isTranslation;
var isInversionOnly=false;
var isMirrorPlane=false;
if (isRotation || haveInversion ) {
trans=null;
}if (haveInversion && isTranslation ) {
ipt=$I$(7).newP$javajs_util_T3(pta00);
ipt.add$javajs_util_T3(pt0);
ipt.scale$F(0.5);
ptinv=pt0;
isInversionOnly=true;
} else if (haveInversion) {
var d=(pitch1 == 0  ? Clazz.new_($I$(6,1)) : ax1);
var f=0;
switch (ang1) {
case 60:
f=0.6666667;
break;
case 120:
f=2;
break;
case 90:
f=1;
break;
case 180:
ptref=$I$(7).newP$javajs_util_T3(pta00);
ptref.add$javajs_util_T3(d);
pa1.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.5, d, pta00);
if (ptref.distance$javajs_util_T3(pt0) > 0.1 ) {
trans=$I$(6).newVsub$javajs_util_T3$javajs_util_T3(pt0, ptref);
C$.setFractional$org_jmol_api_SymmetryInterface$javajs_util_T3$javajs_util_P3$javajs_util_P3(uc, trans, ptemp, null);
ftrans.setT$javajs_util_T3(ptemp);
} else {
trans=null;
}isRotation=false;
haveInversion=false;
isMirrorPlane=true;
break;
default:
haveInversion=false;
break;
}
if (f != 0 ) {
vtemp.sub2$javajs_util_T3$javajs_util_T3(pta00, pa1);
vtemp.add$javajs_util_T3(pt0);
vtemp.sub$javajs_util_T3(pa1);
vtemp.sub$javajs_util_T3(d);
vtemp.scale$F(f);
pa1.add$javajs_util_T3(vtemp);
ipt=Clazz.new_($I$(7,1));
ipt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.5, d, pa1);
ptinv=Clazz.new_($I$(7,1));
ptinv.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-2, ipt, pta00);
ptinv.scale$F(-1);
}} else if (trans != null ) {
ptemp.setT$javajs_util_T3(trans);
uc.toFractional$javajs_util_T3$Z(ptemp, false);
ftrans.setT$javajs_util_T3(ptemp);
uc.toCartesian$javajs_util_T3$Z(ptemp, false);
trans.setT$javajs_util_T3(ptemp);
}var ang=ang1;
C$.approx0$javajs_util_T3(ax1);
if (isRotation) {
var ptr=Clazz.new_($I$(7,1));
vtemp.setT$javajs_util_T3(ax1);
var ang2=ang1;
if (haveInversion) {
ptr.add2$javajs_util_T3$javajs_util_T3(pa1, vtemp);
ang2=Math.round($I$(8).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(ptinv, pa1, ptr, pt0, true));
} else if (pitch1 == 0 ) {
ptr.setT$javajs_util_T3(pa1);
ptemp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(1, ptr, vtemp);
ang2=Math.round($I$(8).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(pta00, pa1, ptemp, pt0, true));
} else {
ptemp.add2$javajs_util_T3$javajs_util_T3(pa1, vtemp);
ptr.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.5, vtemp, pa1);
ang2=Math.round($I$(8).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(pta00, pa1, ptemp, pt0, true));
}if (ang2 != 0) ang1=ang2;
if (!haveInversion && pitch1 == 0   && (ax1.z < 0  || ax1.z == 0  && (ax1.y < 0  || ax1.y == 0  && ax1.x < 0   )  ) ) {
ax1.scale$F(-1);
ang1=-ang1;
}}var info1="identity";
var type=info1;
if (isInversionOnly) {
ptemp.setT$javajs_util_T3(ipt);
uc.toFractional$javajs_util_T3$Z(ptemp, false);
info1="Ci: " + C$.strCoord$javajs_util_T3$Z(ptemp, op.isBio);
type="inversion center";
} else if (isRotation) {
if (haveInversion) {
type=info1=((360/ang|0)) + "-bar axis";
} else if (pitch1 != 0 ) {
type=info1=((360/ang|0)) + "-fold screw axis";
ptemp.setT$javajs_util_T3(ax1);
uc.toFractional$javajs_util_T3$Z(ptemp, false);
info1 += "|translation: " + C$.strCoord$javajs_util_T3$Z(ptemp, op.isBio);
} else {
type=info1="C" + ((360/ang|0)) + " axis" ;
}} else if (trans != null ) {
var s=" " + C$.strCoord$javajs_util_T3$Z(ftrans, op.isBio);
if (isTranslation) {
type=info1="translation";
info1 += ":" + s;
} else if (isMirrorPlane) {
var fx=Math.abs($I$(10).approxF$F(ftrans.x));
var fy=Math.abs($I$(10).approxF$F(ftrans.y));
var fz=Math.abs($I$(10).approxF$F(ftrans.z));
s=" " + C$.strCoord$javajs_util_T3$Z(ftrans, op.isBio);
if (fx != 0  && fy != 0   && fz != 0  ) {
if (fx == 0.25  && fy == 0.25   && fz == 0.25  ) {
info1="d-";
} else if (fx == 0.5  && fy == 0.5   && fz == 0.5  ) {
info1="n-";
} else {
info1="g-";
}} else if (fx != 0  && fy != 0   || fy != 0  && fz != 0    || fz != 0  && fx != 0   ) {
if (fx == 0.25  && fy == 0.25   || fx == 0.25  && fz == 0.25    || fy == 0.25  && fz == 0.25   ) {
info1="d-";
} else if (fx == 0.5  && fy == 0.5   || fx == 0.5  && fz == 0.5    || fy == 0.5  && fz == 0.5   ) {
if (fx == 0  && ax1.x == 0   || fy == 0  && ax1.y == 0    || fz == 0  && ax1.z == 0   ) {
info1="g-";
} else {
info1="n-";
}} else {
info1="g-";
}} else if (fx != 0 ) info1="a-";
 else if (fy != 0 ) info1="b-";
 else info1="c-";
type=info1=info1 + "glide plane";
info1 += "|translation:" + s;
}} else if (isMirrorPlane) {
type=info1="mirror plane";
}if (haveInversion && !isInversionOnly ) {
ptemp.setT$javajs_util_T3(ipt);
uc.toFractional$javajs_util_T3$Z(ptemp, false);
info1 += "|inversion center at " + C$.strCoord$javajs_util_T3$Z(ptemp, op.isBio);
}if (isTimeReversed) {
info1 += "|time-reversed";
type += " (time-reversed)";
}var cmds=null;
var xyzNew=(op.isBio ? op.xyzOriginal : $I$(10).getXYZFromMatrix$javajs_util_M4$Z$Z$Z(op, false, false, false));
if (id != null ) {
var opType=null;
var drawid="\ndraw ID " + id + "_" ;
var draw1=Clazz.new_($I$(11,1));
draw1.append$S(drawid).append$S("* delete");
C$.drawLine$javajs_util_SB$S$F$javajs_util_P3$javajs_util_P3$S(draw1, drawid + "frame1X", 0.15, pta00, pta01, "red");
C$.drawLine$javajs_util_SB$S$F$javajs_util_P3$javajs_util_P3$S(draw1, drawid + "frame1Y", 0.15, pta00, pta02, "green");
C$.drawLine$javajs_util_SB$S$F$javajs_util_P3$javajs_util_P3$S(draw1, drawid + "frame1Z", 0.15, pta00, pta03, "blue");
var color;
if (isRotation) {
var ptr=Clazz.new_($I$(7,1));
color="red";
ang=ang1;
var scale=1.0;
vtemp.setT$javajs_util_T3(ax1);
if (haveInversion) {
opType=drawid + "rotinv";
ptr.add2$javajs_util_T3$javajs_util_T3(pa1, vtemp);
if (pitch1 == 0 ) {
ptr.setT$javajs_util_T3(ipt);
vtemp.scale$F(3 * scaleFactor);
ptemp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-1, vtemp, pa1);
C$.drawVector$javajs_util_SB$S$S$S$javajs_util_T3$javajs_util_T3$S(draw1, drawid, "rotVector2", "", pa1, ptemp, "red");
}scale=pt0.distance$javajs_util_T3(ptr);
draw1.append$S(drawid).append$S("rotLine1 ").append$S($I$(12).eP$javajs_util_T3(ptr)).append$S($I$(12).eP$javajs_util_T3(ptinv)).append$S(" color red");
draw1.append$S(drawid).append$S("rotLine2 ").append$S($I$(12).eP$javajs_util_T3(ptr)).append$S($I$(12).eP$javajs_util_T3(pt0)).append$S(" color red");
} else if (pitch1 == 0 ) {
opType=drawid + "rot";
var isSpecial=(pta00.distance$javajs_util_T3(pt0) < 0.2 );
if (!isSpecial) {
draw1.append$S(drawid).append$S("rotLine1 ").append$S($I$(12).eP$javajs_util_T3(pta00)).append$S($I$(12).eP$javajs_util_T3(pa1)).append$S(" color red");
draw1.append$S(drawid).append$S("rotLine2 ").append$S($I$(12).eP$javajs_util_T3(pt0)).append$S($I$(12).eP$javajs_util_T3(pa1)).append$S(" color red");
}vtemp.scale$F(3 * scaleFactor);
ptemp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-1, vtemp, pa1);
C$.drawVector$javajs_util_SB$S$S$S$javajs_util_T3$javajs_util_T3$S(draw1, drawid, "rotVector2", "", pa1, ptemp, isTimeReversed ? "gray" : "red");
ptr.setT$javajs_util_T3(pa1);
if (pitch1 == 0  && pta00.distance$javajs_util_T3(pt0) < 0.2  ) ptr.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.5, vtemp, ptr);
} else {
opType=drawid + "screw";
color="orange";
draw1.append$S(drawid).append$S("rotLine1 ").append$S($I$(12).eP$javajs_util_T3(pta00)).append$S($I$(12).eP$javajs_util_T3(pa1)).append$S(" color red");
ptemp.add2$javajs_util_T3$javajs_util_T3(pa1, vtemp);
draw1.append$S(drawid).append$S("rotLine2 ").append$S($I$(12).eP$javajs_util_T3(pt0)).append$S($I$(12).eP$javajs_util_T3(ptemp)).append$S(" color red");
ptr.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.5, vtemp, pa1);
}ptemp.add2$javajs_util_T3$javajs_util_T3(ptr, vtemp);
if (haveInversion && pitch1 != 0  ) {
draw1.append$S(drawid).append$S("rotRotLine1").append$S($I$(12).eP$javajs_util_T3(ptr)).append$S($I$(12).eP$javajs_util_T3(ptinv)).append$S(" color red");
draw1.append$S(drawid).append$S("rotRotLine2").append$S($I$(12).eP$javajs_util_T3(ptr)).append$S($I$(12).eP$javajs_util_T3(pt0)).append$S(" color red");
}draw1.append$S(drawid).append$S("rotRotArrow arrow width 0.1 scale " + $I$(5).escF$F(scale) + " arc " ).append$S($I$(12).eP$javajs_util_T3(ptr)).append$S($I$(12).eP$javajs_util_T3(ptemp));
ptemp.setT$javajs_util_T3(haveInversion ? ptinv : pta00);
if (ptemp.distance$javajs_util_T3(pt0) < 0.1 ) ptemp.set$F$F$F(Math.random(), Math.random(), Math.random());
draw1.append$S($I$(12).eP$javajs_util_T3(ptemp));
ptemp.set$F$F$F(0, ang, 0);
draw1.append$S($I$(12).eP$javajs_util_T3(ptemp)).append$S(" color red");
C$.drawVector$javajs_util_SB$S$S$S$javajs_util_T3$javajs_util_T3$S(draw1, drawid, "rotVector1", "vector", pa1, vtemp, isTimeReversed ? "Gray" : color);
} else if (isMirrorPlane) {
ptemp.sub2$javajs_util_T3$javajs_util_T3(ptref, pta00);
if (pta00.distance$javajs_util_T3(ptref) > 0.2 ) C$.drawVector$javajs_util_SB$S$S$S$javajs_util_T3$javajs_util_T3$S(draw1, drawid, "planeVector", "vector", pta00, ptemp, isTimeReversed ? "Gray" : "cyan");
opType=drawid + "plane";
if (trans != null ) {
opType=drawid + "glide";
C$.drawFrameLine$S$javajs_util_P3$javajs_util_V3$F$javajs_util_P3$javajs_util_SB$S$S("X", ptref, vt1, 0.15, ptemp, draw1, opType, "red");
C$.drawFrameLine$S$javajs_util_P3$javajs_util_V3$F$javajs_util_P3$javajs_util_SB$S$S("Y", ptref, vt2, 0.15, ptemp, draw1, opType, "green");
C$.drawFrameLine$S$javajs_util_P3$javajs_util_V3$F$javajs_util_P3$javajs_util_SB$S$S("Z", ptref, vt3, 0.15, ptemp, draw1, opType, "blue");
}color=(trans == null  ? "green" : "blue");
vtemp.setT$javajs_util_T3(ax1);
vtemp.normalize$();
var w=-vtemp.x * pa1.x - vtemp.y * pa1.y - vtemp.z * pa1.z;
plane=$I$(13).new4$F$F$F$F(vtemp.x, vtemp.y, vtemp.z, w);
var margin=(Math.abs(w) < 0.01  && vtemp.x * vtemp.y > 0.4   ? 1.3 : 1.05);
var v=this.modelSet.vwr.getTriangulator$().intersectPlane$javajs_util_P4$javajs_util_T3A$I(plane, uc.getCanonicalCopy$F$Z(margin, true), 3);
if (v != null ) for (var i=v.size$(); --i >= 0; ) {
var pts=v.get$I(i);
draw1.append$S(drawid).append$S("planep").appendI$I(i).append$S(" ").append$S($I$(12).eP$javajs_util_T3(pts[0])).append$S($I$(12).eP$javajs_util_T3(pts[1]));
if (pts.length == 3) draw1.append$S($I$(12).eP$javajs_util_T3(pts[2]));
draw1.append$S(" color translucent ").append$S(color);
}
if (v == null  || v.size$() == 0 ) {
ptemp.add2$javajs_util_T3$javajs_util_T3(pa1, ax1);
draw1.append$S(drawid).append$S("planeCircle scale 2.0 circle ").append$S($I$(12).eP$javajs_util_T3(pa1)).append$S($I$(12).eP$javajs_util_T3(ptemp)).append$S(" color translucent ").append$S(color).append$S(" mesh fill");
}}if (haveInversion) {
opType=drawid + "inv";
draw1.append$S(drawid).append$S("invPoint diameter 0.4 ").append$S($I$(12).eP$javajs_util_T3(ipt));
ptemp.sub2$javajs_util_T3$javajs_util_T3(ptinv, pta00);
C$.drawVector$javajs_util_SB$S$S$S$javajs_util_T3$javajs_util_T3$S(draw1, drawid, "invArrow", "vector", pta00, ptemp, isTimeReversed ? "gray" : "cyan");
if (!isInversionOnly && options != 1073742066 ) {
C$.drawFrameLine$S$javajs_util_P3$javajs_util_V3$F$javajs_util_P3$javajs_util_SB$S$S("X", ptinv, vt1, 0.15, ptemp, draw1, opType, "red");
C$.drawFrameLine$S$javajs_util_P3$javajs_util_V3$F$javajs_util_P3$javajs_util_SB$S$S("Y", ptinv, vt2, 0.15, ptemp, draw1, opType, "green");
C$.drawFrameLine$S$javajs_util_P3$javajs_util_V3$F$javajs_util_P3$javajs_util_SB$S$S("Z", ptinv, vt3, 0.15, ptemp, draw1, opType, "blue");
}}if (trans != null ) {
if (ptref == null ) ptref=$I$(7).newP$javajs_util_T3(pta00);
C$.drawVector$javajs_util_SB$S$S$S$javajs_util_T3$javajs_util_T3$S(draw1, drawid, "transVector", "vector", ptref, trans, isTimeReversed && !haveInversion && !isMirrorPlane && !isRotation   ? "darkGray" : "gold");
}ptemp2.setT$javajs_util_T3(pt0);
ptemp.sub2$javajs_util_T3$javajs_util_T3(pt1, pt0);
ptemp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.9, ptemp, ptemp2);
C$.drawLine$javajs_util_SB$S$F$javajs_util_P3$javajs_util_P3$S(draw1, drawid + "frame2X", 0.2, ptemp2, ptemp, "red");
ptemp.sub2$javajs_util_T3$javajs_util_T3(pt2, pt0);
ptemp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.9, ptemp, ptemp2);
C$.drawLine$javajs_util_SB$S$F$javajs_util_P3$javajs_util_P3$S(draw1, drawid + "frame2Y", 0.2, ptemp2, ptemp, "green");
ptemp.sub2$javajs_util_T3$javajs_util_T3(pt3, pt0);
ptemp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.9, ptemp, ptemp2);
C$.drawLine$javajs_util_SB$S$F$javajs_util_P3$javajs_util_P3$S(draw1, drawid + "frame2Z", 0.2, ptemp2, ptemp, "purple");
draw1.append$S("\nsym_point = " + $I$(12).eP$javajs_util_T3(pta00));
draw1.append$S("\nvar p0 = " + $I$(12).eP$javajs_util_T3(ptemp2));
draw1.append$S("\nvar set2 = within(0.2,p0);if(!set2){set2 = within(0.2,p0.uxyz.xyz)}");
if (Clazz.instanceOf(pta00, "org.jmol.modelset.Atom")) draw1.append$S("\n set2 &= {_" + (pta00).getElementSymbol$() + "}" );
draw1.append$S("\nsym_target = set2;if (set2) {");
if (options != 1073742066 && ptTarget == null  ) {
draw1.append$S(drawid).append$S("offsetFrameX diameter 0.20 @{set2.xyz} @{set2.xyz + ").append$S($I$(12).eP$javajs_util_T3(vt1)).append$S("*0.9} color red");
draw1.append$S(drawid).append$S("offsetFrameY diameter 0.20 @{set2.xyz} @{set2.xyz + ").append$S($I$(12).eP$javajs_util_T3(vt2)).append$S("*0.9} color green");
draw1.append$S(drawid).append$S("offsetFrameZ diameter 0.20 @{set2.xyz} @{set2.xyz + ").append$S($I$(12).eP$javajs_util_T3(vt3)).append$S("*0.9} color purple");
}draw1.append$S("\n}\n");
cmds=draw1.toString();
if ($I$(14).debugging) $I$(14).info$S(cmds);
draw1=null;
drawid=null;
}if (trans == null ) ftrans=null;
if (isRotation) {
if (haveInversion) {
} else if (pitch1 == 0 ) {
} else {
trans=$I$(6).newV$javajs_util_T3(ax1);
ptemp.setT$javajs_util_T3(trans);
uc.toFractional$javajs_util_T3$Z(ptemp, false);
ftrans=$I$(6).newV$javajs_util_T3(ptemp);
}}if (isMirrorPlane) {
ang1=0;
}if (haveInversion) {
if (isInversionOnly) {
pa1=null;
ax1=null;
trans=null;
ftrans=null;
}} else if (isTranslation) {
pa1=null;
ax1=null;
}if (ax1 != null ) ax1.normalize$();
var m2=null;
m2=$I$(15).newM4$javajs_util_M4(op);
if (vtrans.length$() != 0 ) {
m2.m03 += vtrans.x;
m2.m13 += vtrans.y;
m2.m23 += vtrans.z;
}xyzNew=(op.isBio ? m2.toString() : op.modDim > 0 ? op.xyzOriginal : $I$(10).getXYZFromMatrix$javajs_util_M4$Z$Z$Z(m2, false, false, false));
if (op.timeReversal != 0) xyzNew=op.fixMagneticXYZ$javajs_util_M4$S$Z(m2, xyzNew, true);
return Clazz.array(java.lang.Object, -1, [xyzNew, op.xyzOriginal, info1, cmds, C$.approx0$javajs_util_T3(ftrans), C$.approx0$javajs_util_T3(trans), C$.approx0$javajs_util_T3(ipt), C$.approx0$javajs_util_T3(pa1), plane == null  ? C$.approx0$javajs_util_T3(ax1) : null, ang1 != 0 ? Integer.valueOf$I(ang1) : null, m2, vtrans.lengthSquared$() > 0  ? vtrans : null, op.getCentering$(), Integer.valueOf$I(op.timeReversal), plane, type, Integer.valueOf$I(op.index)]);
}, p$1);

Clazz.newMeth(C$, 'drawLine$javajs_util_SB$S$F$javajs_util_P3$javajs_util_P3$S', function (s, id, diameter, pt0, pt1, color) {
s.append$S(id).append$S(" diameter ").appendF$F(diameter).append$S($I$(12).eP$javajs_util_T3(pt0)).append$S($I$(12).eP$javajs_util_T3(pt1)).append$S(" color ").append$S(color);
}, 1);

Clazz.newMeth(C$, 'drawFrameLine$S$javajs_util_P3$javajs_util_V3$F$javajs_util_P3$javajs_util_SB$S$S', function (xyz, pt, v, width, ptemp, draw1, key, color) {
ptemp.setT$javajs_util_T3(pt);
ptemp.add$javajs_util_T3(v);
C$.drawLine$javajs_util_SB$S$F$javajs_util_P3$javajs_util_P3$S(draw1, key + "Pt" + xyz , width, pt, ptemp, "translucent " + color);
}, 1);

Clazz.newMeth(C$, 'drawVector$javajs_util_SB$S$S$S$javajs_util_T3$javajs_util_T3$S', function (draw1, drawid, label, type, pt1, v, color) {
draw1.append$S(drawid).append$S(label).append$S(" diameter 0.1 ").append$S(type).append$S($I$(12).eP$javajs_util_T3(pt1)).append$S($I$(12).eP$javajs_util_T3(v)).append$S(" color ").append$S(color);
}, 1);

Clazz.newMeth(C$, 'setFractional$org_jmol_api_SymmetryInterface$javajs_util_T3$javajs_util_P3$javajs_util_P3', function (uc, pt00, pt01, offset) {
pt01.setT$javajs_util_T3(pt00);
if (offset != null ) uc.toUnitCell$javajs_util_T3$javajs_util_T3(pt01, offset);
uc.toFractional$javajs_util_T3$Z(pt01, false);
}, 1);

Clazz.newMeth(C$, 'rotTransCart$org_jmol_symmetry_SymmetryOperation$org_jmol_api_SymmetryInterface$javajs_util_P3$javajs_util_V3', function (op, uc, pt00, vtrans) {
var p0=$I$(7).newP$javajs_util_T3(pt00);
uc.toFractional$javajs_util_T3$Z(p0, false);
op.rotTrans$javajs_util_T3(p0);
p0.add$javajs_util_T3(vtrans);
uc.toCartesian$javajs_util_T3$Z(p0, false);
return p0;
}, 1);

Clazz.newMeth(C$, 'strCoord$javajs_util_T3$Z', function (p, isBio) {
C$.approx0$javajs_util_T3(p);
return (isBio ? new Float(p.x).toString() + " " + new Float(p.y).toString() + " " + new Float(p.z).toString()  : $I$(10).fcoord$javajs_util_T3(p));
}, 1);

Clazz.newMeth(C$, 'approx0$javajs_util_T3', function (pt) {
if (pt != null ) {
if (Math.abs(pt.x) < 1.0E-4 ) pt.x=0;
if (Math.abs(pt.y) < 1.0E-4 ) pt.y=0;
if (Math.abs(pt.z) < 1.0E-4 ) pt.z=0;
}return pt;
}, 1);

Clazz.newMeth(C$, 'approx$javajs_util_T3', function (pt) {
if (pt != null ) {
pt.x=$I$(10).approxF$F(pt.x);
pt.y=$I$(10).approxF$F(pt.y);
pt.z=$I$(10).approxF$F(pt.z);
}return pt;
}, 1);

Clazz.newMeth(C$, 'getSymmetryInfo$org_jmol_symmetry_Symmetry$I$I$org_jmol_symmetry_Symmetry$S$I$javajs_util_P3$javajs_util_P3$S$I$F$I$I', function (sym, iModel, iatom, uc, xyz, op, pt, pt2, id, type, scaleFactor, nth, options) {
if (type == 1073741994) return uc.getLatticeType$();
var nullRet=C$.nullReturn$I(type);
var iop=op;
var offset=(options == 1073742066 && (type == 1140850689 || type == 134217751 )  ? pt2 : null);
if (offset != null ) pt2=null;
var info=null;
if (pt2 == null ) {
if (xyz == null ) {
var ops=uc.getSymmetryOperations$();
if (ops == null  || op == 0  || Math.abs(op) > ops.length ) return nullRet;
iop=Math.abs(op) - 1;
xyz=ops[iop].xyz;
} else {
iop=op=0;
}var symTemp=Clazz.new_($I$(16,1));
symTemp.setSpaceGroup$Z(false);
var isBio=uc.isBio$();
var i=(isBio ? symTemp.addBioMoleculeOperation$javajs_util_M4$Z(uc.spaceGroup.finalOperations[iop], op < 0) : symTemp.addSpaceGroupOperation$S$I((op < 0 ? "!" : "=") + xyz, Math.abs(op)));
if (i < 0) return nullRet;
var opTemp=symTemp.getSpaceGroupOperation$I(i);
opTemp.index=op - 1;
if (!isBio) opTemp.getCentering$();
if (pt == null  && iatom >= 0 ) pt=this.modelSet.at[iatom];
if (type == 134217751 || type == 1140850689 ) {
if (isBio) return nullRet;
symTemp.setUnitCell$org_jmol_symmetry_Symmetry(uc);
pt=$I$(7).newP$javajs_util_T3(pt);
uc.toFractional$javajs_util_T3$Z(pt, false);
if (Float.isNaN$F(pt.x)) return nullRet;
var sympt=Clazz.new_($I$(7,1));
symTemp.newSpaceGroupPoint$I$javajs_util_P3$javajs_util_P3$I$I$I$javajs_util_M4(i, pt, sympt, 0, 0, 0, null);
if (options == 1073742066) {
uc.unitize$javajs_util_T3(sympt);
if (options == 1073742066) sympt.add$javajs_util_T3(offset);
}symTemp.toCartesian$javajs_util_T3$Z(sympt, false);
return (type == 1140850689 ? p$1.getAtom$org_jmol_symmetry_Symmetry$I$I$javajs_util_T3.apply(this, [uc, iModel, iatom, sympt]) : sympt);
}info=p$1.createInfoArray$org_jmol_symmetry_SymmetryOperation$org_jmol_api_SymmetryInterface$javajs_util_P3$javajs_util_P3$S$F$I.apply(this, [opTemp, uc, pt, null, (id == null  ? "sym" : id), scaleFactor, options]);
} else {
var stype="info";
var asString=false;
switch (type) {
case 1275068418:
id=stype=null;
asString=false;
if (nth == 0) nth=-1;
break;
case 1073742001:
id=stype=null;
asString=true;
if (nth == 0) nth=-1;
break;
case 135176:
if (id == null ) id="sym";
stype="all";
asString=true;
break;
case 1140850689:
id=stype=null;
default:
if (nth == 0) nth=1;
}
var ret1=p$1.getSymopInfoForPoints$org_jmol_symmetry_Symmetry$I$I$javajs_util_P3$javajs_util_P3$S$S$F$I$Z$I.apply(this, [sym, iModel, op, pt, pt2, id, stype, scaleFactor, nth, asString, options]);
if (asString) return ret1;
if (Clazz.instanceOf(ret1, "java.lang.String")) return nullRet;
info=ret1;
if (type == 1140850689) {
if (!(Clazz.instanceOf(pt, "org.jmol.modelset.Atom")) && !(Clazz.instanceOf(pt2, "org.jmol.modelset.Atom")) ) iatom=-1;
return (info == null  ? nullRet : p$1.getAtom$org_jmol_symmetry_Symmetry$I$I$javajs_util_T3.apply(this, [uc, iModel, iatom, info[7]]));
}}if (info == null ) return nullRet;
if (nth < 0 && op <= 0  && (type == 1275068418 || info.length > 0 && Clazz.instanceOf(info[0], Clazz.array(java.lang.Object, -1))  ) ) {
var lst=Clazz.new_($I$(17,1));
for (var i=0; i < info.length; i++) lst.addLast$O(C$.getInfo$OA$I(info[i], type));

return lst;
}return C$.getInfo$OA$I(info, type);
}, p$1);

Clazz.newMeth(C$, 'getAtom$org_jmol_symmetry_Symmetry$I$I$javajs_util_T3', function (uc, iModel, iAtom, sympt) {
var bsElement=null;
if (iAtom >= 0) this.modelSet.getAtomBitsMDa$I$O$javajs_util_BS(1094715402, Integer.valueOf$I(this.modelSet.at[iAtom].getElementNumber$()), bsElement=Clazz.new_($I$(1,1)));
var bsResult=Clazz.new_($I$(1,1));
this.modelSet.getAtomsWithin$F$javajs_util_T3$javajs_util_BS$I(0.02, sympt, bsResult, iModel);
if (bsElement != null ) bsResult.and$javajs_util_BS(bsElement);
if (bsResult.isEmpty$()) {
sympt=$I$(7).newP$javajs_util_T3(sympt);
uc.toUnitCell$javajs_util_T3$javajs_util_T3(sympt, null);
uc.toCartesian$javajs_util_T3$Z(sympt, false);
this.modelSet.getAtomsWithin$F$javajs_util_T3$javajs_util_BS$I(0.02, sympt, bsResult, iModel);
if (bsElement != null ) bsResult.and$javajs_util_BS(bsElement);
}return bsResult;
}, p$1);

Clazz.newMeth(C$, 'getSymopInfoForPoints$org_jmol_symmetry_Symmetry$I$I$javajs_util_P3$javajs_util_P3$S$S$F$I$Z$I', function (sym, modelIndex, symOp, pt1, pt2, drawID, stype, scaleFactor, nth, asString, options) {
var ret=(asString ? "" : null);
var sginfo=this.getSpaceGroupInfo$org_jmol_symmetry_Symmetry$I$S$I$javajs_util_P3$javajs_util_P3$S$F$I$Z$Z$I$org_jmol_api_SymmetryInterface(sym, modelIndex, null, symOp, pt1, pt2, drawID, scaleFactor, nth, false, true, options, null);
if (sginfo == null ) return ret;
var infolist=sginfo.get$O("operations");
if (infolist == null ) return ret;
var sb=(asString ? Clazz.new_($I$(11,1)) : null);
symOp--;
var isAll=(!asString && symOp < 0 );
var strOperations=sginfo.get$O("symmetryInfo");
var labelOnly="label".equals$O(stype);
var n=0;
for (var i=0; i < infolist.length; i++) {
if (infolist[i] == null  || symOp >= 0 && symOp != i  ) continue;
if (!asString) {
if (!isAll) return infolist[i];
infolist[n++]=infolist[i];
continue;
}if (drawID != null ) return (infolist[i][3]) + "\nprint " + $I$(5).esc$S(strOperations) ;
if (sb.length$() > 0) sb.appendC$C("\n");
if (!labelOnly) {
if (symOp < 0) sb.appendI$I(i + 1).appendC$C("\t");
sb.append$S(infolist[i][0]).appendC$C("\t");
}sb.append$S(infolist[i][2]);
}
if (!asString) {
var a=Clazz.array(java.lang.Object, [n]);
for (var i=0; i < n; i++) a[i]=infolist[i];

return a;
}if (sb.length$() == 0) return (drawID != null  ? "draw " + drawID + "* delete"  : ret);
return sb.toString();
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.keys=Clazz.array(String, -1, ["xyz", "xyzOriginal", "label", null, "fractionalTranslation", "cartesianTranslation", "inversionCenter", null, "axisVector", "rotationAngle", "matrix", "unitTranslation", "centeringVector", "timeReversal", "plane", "_type", "id"]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
