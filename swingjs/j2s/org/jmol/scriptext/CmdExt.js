(function(){var P$=Clazz.newPackage("org.jmol.scriptext"),p$1={},I$=[[0,'javajs.util.PT','Boolean','org.jmol.script.ScriptEval','org.jmol.script.ScriptCompiler','org.jmol.util.Logger','org.jmol.modelset.LabelToken','javajs.util.P3','org.jmol.util.SimpleUnitCell','org.jmol.util.Escape','org.jmol.util.BoxInfo','javajs.util.T3','org.jmol.i18n.GT','java.util.Hashtable','org.jmol.script.T','org.jmol.util.BSUtil','javajs.util.Lst','javajs.util.BS','org.jmol.api.Interface','javajs.util.Measure','javajs.util.Quat','javajs.util.M4','javajs.util.V3','javajs.util.M3','org.jmol.script.ScriptMathProcessor','org.jmol.script.ScriptInterruption','org.jmol.util.C','org.jmol.util.Point3fi','org.jmol.atomdata.RadiusData','org.jmol.modelset.Text','org.jmol.util.Edge','org.jmol.script.ScriptParam','org.jmol.util.Elements','org.jmol.modelset.AtomCollection','org.jmol.script.SV','javajs.util.SB',['org.jmol.viewer.Viewer','.ACCESS'],'org.jmol.viewer.FileManager','javajs.util.Base64','org.jmol.c.VDW','org.jmol.c.STER','javajs.util.P4','javajs.util.AU','org.jmol.viewer.StateManager','org.jmol.script.ScriptError','org.jmol.util.Parser']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CmdExt", null, 'org.jmol.scriptext.ScriptExt');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'dispatch$I$Z$org_jmol_script_TA', function (iTok, b, st) {
this.chk=this.e.chk;
this.slen=this.e.slen;
this.st=st;
switch (iTok) {
case 1073741866:
st[0].value=this.prepareBinaryOutput$org_jmol_script_SV(st[0]);
return null;
case 4098:
p$1.assign$I.apply(this, [1]);
break;
case 134221829:
p$1.cache.apply(this, []);
break;
case 4102:
p$1.calculate.apply(this, []);
break;
case 4103:
p$1.capture.apply(this, []);
break;
case 4105:
p$1.centerAt.apply(this, []);
break;
case 134221831:
p$1.compare.apply(this, []);
break;
case 528395:
p$1.console.apply(this, []);
break;
case 4106:
p$1.connect$I.apply(this, [1]);
break;
case 1094717448:
p$1.configuration.apply(this, []);
break;
case 134221834:
p$1.data.apply(this, []);
break;
case 1613238294:
p$1.connect$I.apply(this, [0]);
break;
case 4120:
p$1.image.apply(this, []);
break;
case 4122:
p$1.invertSelected.apply(this, []);
break;
case 4124:
p$1.macro.apply(this, []);
break;
case 4125:
p$1.mapProperty.apply(this, []);
break;
case 4126:
p$1.minimize.apply(this, []);
break;
case 603983903:
p$1.modelkit.apply(this, []);
break;
case 1275072532:
p$1.modulation.apply(this, []);
break;
case 4130:
p$1.mutate.apply(this, []);
break;
case 4131:
p$1.navigate.apply(this, []);
break;
case 4133:
case 134221850:
case 4138:
p$1.plot$org_jmol_script_TA.apply(this, [st]);
break;
case 134222350:
p$1.show.apply(this, []);
break;
case 528443:
p$1.stereo.apply(this, []);
break;
case 1814695966:
p$1.unitcell$I.apply(this, [b ? 2 : 1]);
break;
case 134221856:
return p$1.write$org_jmol_script_TA.apply(this, [b ? st : null]);
case 6:
p$1.measure.apply(this, []);
break;
case 21:
p$1.polyhedra.apply(this, []);
break;
case 20:
p$1.ellipsoid.apply(this, []);
break;
case 4:
p$1.struts.apply(this, []);
break;
}
return null;
});

Clazz.newMeth(C$, 'modelkit', function () {
var isOn=true;
var i=0;
switch (this.tokAt$I(1)) {
case 1073742334:
isOn=false;
case 0:
case 1073742335:
if (!this.chk) this.vwr.setBooleanProperty$S$Z("modelkitmode", isOn);
return;
case 528432:
this.e.cmdRotate$Z$Z(false, false);
return;
case 4145:
this.e.cmdRotate$Z$Z(false, true);
return;
case 4098:
p$1.assign$I.apply(this, [2]);
return;
}
var kit=this.vwr.getModelkit$Z(false);
var tok=0;
while ((tok=this.tokAt$I(++i)) != 0){
var key=this.paramAsStr$I(i).toLowerCase$();
var value=null;
switch (tok) {
case 36867:
key=this.paramAsStr$I(++i);
value=this.paramAsStr$I(++i);
break;
case 1073742024:
value=this.paramAsStr$I(++i).toLowerCase$();
if (!$I$(1).isOneOf$S$S(value, ";view;edit;molecular;")) this.invArg$();
break;
case 1814695966:
value=this.paramAsStr$I(++i).toLowerCase$();
if (!$I$(1).isOneOf$S$S(value, ";packed;extend;")) this.invArg$();
break;
case 1296041986:
switch (this.tokAt$I(++i)) {
case 4:
case 1073742333:
value=this.paramAsStr$I(i);
break;
case 12:
value=this.getToken$I(i).value;
break;
case 2:
value=Integer.valueOf$I(this.getToken$I(i).intValue);
break;
default:
if (this.e.isCenterParameter$I(i)) {
key="center";
value=this.e.centerParameter$I$OA(i, null);
i=this.e.iToken;
} else {
this.invArg$();
}break;
}
break;
case 1088421903:
value=this.paramAsStr$I(++i).toLowerCase$();
if (!$I$(1).isOneOf$S$S(value, ";none;applylocal;retainlocal;applyfull;")) this.invArg$();
break;
case 1073742066:
value=this.paramAsStr$I(i + 1);
if (value.equals$O("none")) {
++i;
break;
}case 12289:
case 134217751:
value=this.e.atomCenterOrCoordinateParameter$I$OA(++i, null);
i=this.e.iToken;
break;
default:
if ($I$(1).isOneOf$S$S(key, ";showsymopinfo;clicktosetelement;addhydrogen;addhydrogens;")) {
isOn=(tok == 0 || this.tokAt$I(++i) == 1073742335 );
value=$I$(2).valueOf$Z(isOn);
break;
}if ($I$(1).isOneOf$S$S(key, ";view;edit;molecular;")) {
value=key;
key="mode";
break;
}if ($I$(1).isOneOf$S$S(key, ";packed;extend;")) {
value=key;
key="unitcell";
break;
}this.invArg$();
}
if (value != null  && !this.chk ) kit.setProperty$S$O(key, value);
}
}, p$1);

Clazz.newMeth(C$, 'macro', function () {
if (this.chk) return;
var key=this.e.optParameterAsString$I(1);
if (key.length$() == 0) {
this.showString$S(this.vwr.getMacro$S(null));
return;
}var macro=this.vwr.getMacro$S(key);
if (macro == null ) {
this.showString$S("macro " + key + " could not be found. Current macros include:\n" + this.vwr.getMacro$S(null) );
return;
}this.showString$S("running " + macro);
this.e.cmdScript$I$S$S(4124, macro, null);
}, p$1);

Clazz.newMeth(C$, 'evalParallel$org_jmol_script_ScriptContext$org_jmol_viewer_ShapeManager', function (context, shapeManager) {
this.chk=this.e.chk;
this.slen=this.e.slen;
var se=Clazz.new_($I$(3,1)).setViewer$org_jmol_viewer_Viewer(this.vwr);
se.historyDisabled=true;
se.compiler=Clazz.new_($I$(4,1).c$$org_jmol_viewer_Viewer,[this.vwr]);
se.sm=shapeManager;
try {
se.restoreScriptContext$org_jmol_script_ScriptContext$Z$Z$Z(context, true, false, false);
se.setAllowJSThreads$Z(false);
se.dispatchCommands$Z$Z$Z(false, false, false);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.e.vwr.setStringProperty$S$S("_errormessage", "" + ex);
if (se.thisContext == null ) {
$I$(5).error$S("Error evaluating context " + ex);
ex.printStackTrace$();
}return false;
} else {
throw ex;
}
}
return true;
});

Clazz.newMeth(C$, 'getBitsetIdent$javajs_util_BS$S$O$Z$I$Z', function (bs, label, tokenValue, useAtomMap, index, isExplicitlyAll) {
var isAtoms=!(Clazz.instanceOf(tokenValue, "org.jmol.modelset.BondSet"));
if (isAtoms) {
if (label == null ) label=this.vwr.getStandardLabelFormat$I(0);
 else if (label.length$() == 0) label="%[label]";
}var pt=(label == null  ? -1 : label.indexOf$S("%"));
var haveIndex=(index != 2147483647);
if (bs == null  || this.chk  || isAtoms && pt < 0  ) {
if (label == null ) label="";
return isExplicitlyAll ? Clazz.array(String, -1, [label]) : label;
}var modelSet=this.vwr.ms;
var n=0;
var labeler=modelSet.getLabeler$();
var indices=(isAtoms || !useAtomMap  ? null : (tokenValue).associatedAtoms);
if (indices == null  && label != null   && label.indexOf$S("%D") > 0 ) indices=this.vwr.ms.getAtomIndices$javajs_util_BS(bs);
var asIdentity=(label == null  || label.length$() == 0 );
var htValues=(isAtoms || asIdentity  ? null : $I$(6).getBondLabelValues$());
var tokens=(asIdentity ? null : isAtoms ? $I$(6).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, label, "\u0000", null) : $I$(6).compile$org_jmol_viewer_Viewer$S$C$java_util_Map(this.vwr, label, "\u0001", htValues));
var nmax=(haveIndex ? 1 : bs.cardinality$());
var sout=Clazz.array(String, [nmax]);
var ptTemp=Clazz.new_($I$(7,1));
for (var j=(haveIndex ? index : bs.nextSetBit$I(0)); j >= 0; j=bs.nextSetBit$I(j + 1)) {
var str;
if (isAtoms) {
if (asIdentity) str=modelSet.at[j].getInfo$();
 else str=$I$(6).formatLabelAtomArray$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelTokenA$C$IA$javajs_util_P3(this.vwr, modelSet.at[j], tokens, "\u0000", indices, ptTemp);
} else {
var bond=modelSet.bo[j];
if (asIdentity) str=bond.getIdentity$();
 else str=$I$(6).formatLabelBond$org_jmol_viewer_Viewer$org_jmol_modelset_Bond$org_jmol_modelset_LabelTokenA$java_util_Map$IA$javajs_util_P3(this.vwr, bond, tokens, htValues, indices, ptTemp);
}str=(function(a,f){return f.apply(null,a)})([str, "#", (n + 1)],$I$(1).formatStringI$S$S$I);
sout[n++]=str;
if (haveIndex) break;
}
return nmax == 1 && !isExplicitlyAll  ? sout[0] : sout;
});

Clazz.newMeth(C$, 'getLoadSymmetryParams$I$javajs_util_SB$java_util_Map', function (i, sOptions, htParams) {
var eval=this.e;
this.chk=eval.chk;
this.slen=eval.slen;
var lattice=null;
var tok=this.tokAt$I(i);
if (tok == 1073742332 || tok == 8 ) {
lattice=eval.getPointOrPlane$I$Z$Z$Z$Z$I$I$Z(i, false, true, false, true, 3, 3, true);
tok=this.tokAt$I(i=eval.iToken + 1);
}switch (tok) {
case 1073741938:
case 1073742080:
case 1094713350:
case 1073742163:
case 1073742114:
case 134217764:
case 1814695966:
if (lattice == null ) lattice=$I$(7).new3$F$F$F(555, 555, -1);
eval.iToken=i - 1;
}
var offset=null;
if (lattice != null ) {
htParams.put$O$O("lattice", lattice);
i=eval.iToken + 1;
sOptions.append$S(" " + $I$(8).escapeMultiplier$javajs_util_T3(lattice));
i=p$1.checkPacked$I$java_util_Map$javajs_util_SB.apply(this, [i, htParams, sOptions]);
if (this.tokAt$I(i) == 1094713350) {
htParams.put$O$O("centroid", $I$(2).TRUE);
sOptions.append$S(" CENTROID");
i=p$1.checkPacked$I$java_util_Map$javajs_util_SB.apply(this, [++i, htParams, sOptions]);
}if (this.tokAt$I(i) == 1073742163) {
var supercell;
sOptions.append$S(" SUPERCELL ");
if (eval.isPoint3f$I(++i)) {
var pt=this.getPoint3f$I$Z(i, false);
if (pt.x != (pt.x|0)  || pt.y != (pt.y|0)   || pt.z != (pt.z|0)   || pt.x < 1   || pt.y < 1   || pt.z < 1  ) {
eval.iToken=i;
this.invArg$();
}supercell=pt;
i=eval.iToken;
} else {
supercell=this.stringParameter$I(i);
}sOptions.append$S($I$(9).e$O(supercell));
htParams.put$O$O("supercell", supercell);
i=p$1.checkPacked$I$java_util_Map$javajs_util_SB.apply(this, [++i, htParams, sOptions]);
}var distance=0;
if (this.tokAt$I(i) == 1073742114) {
i++;
distance=this.floatParameter$I(i++);
sOptions.append$S(" range " + new Float(distance).toString());
}htParams.put$O$O("symmetryRange", Float.valueOf$F(distance));
var spacegroup=null;
var sg;
var iGroup=-2147483648;
if (this.tokAt$I(i) == 134217764) {
++i;
spacegroup=(function(a,f){return f.apply(null,a)})([this.paramAsStr$I(i++), "\'\'", "\""],$I$(1).rep$S$S$S);
sOptions.append$S(" spacegroup " + $I$(1).esc$S(spacegroup));
if (spacegroup.equalsIgnoreCase$S("ignoreOperators")) {
iGroup=-999;
} else {
if (spacegroup.length$() == 0) {
sg=this.vwr.getCurrentUnitCell$();
if (sg != null ) spacegroup=sg.getSpaceGroupName$();
} else {
if (spacegroup.indexOf$S(",") >= 0) if ((lattice.x < 9  && lattice.y < 9   && lattice.z == 0  )) spacegroup += "#doNormalize=0";
}htParams.put$O$O("spaceGroupName", spacegroup);
iGroup=-2;
}}var fparams=null;
if (this.tokAt$I(i) == 1814695966) {
++i;
var s=eval.optParameterAsString$I(i);
if (s.length$() == 0) {
sg=this.vwr.getCurrentUnitCell$();
if (sg != null ) {
fparams=sg.getUnitCellAsArray$Z(true);
offset=sg.getCartesianOffset$();
}} else {
if (this.tokAt$I(i) == 4) {
fparams=Clazz.array(Float.TYPE, [6]);
$I$(8).setOabc$S$FA$javajs_util_T3A(s, fparams, null);
} else {
fparams=eval.floatParameterSet$I$I$I(i, 6, 9);
}}if (fparams == null  || fparams.length != 6 && fparams.length != 9  ) this.invArg$();
sOptions.append$S(" unitcell [");
for (var j=0; j < fparams.length; j++) sOptions.append$S((j == 0 ? "" : " ") + new Float(fparams[j]).toString());

sOptions.append$S("]");
htParams.put$O$O("unitcell", fparams);
if (iGroup == -2147483648) iGroup=-1;
i=eval.iToken + 1;
}if (iGroup != -2147483648) htParams.put$O$O("spaceGroupIndex", Integer.valueOf$I(iGroup));
}if (offset != null ) eval.coordinatesAreFractional=false;
 else if (this.tokAt$I(i) == 1073742066) offset=this.getPoint3f$I$Z(++i, true);
if (offset != null ) {
if (eval.coordinatesAreFractional) {
offset.setT$javajs_util_T3(eval.fractionalPoint);
htParams.put$O$O("unitCellOffsetFractional", (eval.coordinatesAreFractional ? $I$(2).TRUE : $I$(2).FALSE));
sOptions.append$S(" offset {" + new Float(offset.x).toString() + " " + new Float(offset.y).toString() + " " + new Float(offset.z).toString() + "/1}" );
} else {
sOptions.append$S(" offset " + $I$(9).eP$javajs_util_T3(offset));
}htParams.put$O$O("unitCellOffset", offset);
i=eval.iToken + 1;
}return i;
});

Clazz.newMeth(C$, 'checkPacked$I$java_util_Map$javajs_util_SB', function (i, htParams, sOptions) {
switch (this.tokAt$I(i)) {
case 1073741938:
htParams.put$O$O("packed", $I$(2).TRUE);
var oabc=null;
var tok=this.tokAt$I(++i);
switch (tok) {
case 1814695966:
case 1678381065:
break;
default:
if (this.e.isArrayParameter$I(i)) {
oabc=this.e.getPointArray$I$I$Z(i, -1, false);
i=this.e.iToken;
} else if (this.isFloatParameter$I(i)) {
var d=this.floatParameter$I(i);
oabc=Clazz.array($I$(7), -1, [Clazz.new_($I$(7,1)), $I$(7).new3$F$F$F(d, d, d)]);
} else {
oabc=Clazz.array($I$(7), [0]);
--i;
}}
i++;
if (this.e.chk) return i;
switch (tok) {
case 1814695966:
var type=this.e.optParameterAsString$I(i++).toLowerCase$();
if ($I$(1).isOneOf$S$S(type, ";conventional;primitive;")) {
htParams.put$O$O("fillRange", type);
sOptions.append$S(" FILL UNITCELL \"" + type + "\"" );
return i;
}var unitCell=this.vwr.getCurrentUnitCell$();
if (unitCell != null ) {
oabc=(function(a,f){return f.apply(null,a)})([unitCell.getUnitCellVerticesNoOffset$(), unitCell.getCartesianOffset$()],$I$(10).toOABC$javajs_util_P3A$javajs_util_T3);
break;
}case 1678381065:
oabc=(function(a,f){return f.apply(null,a)})([this.vwr.ms.getBBoxVertices$(), null],$I$(10).toOABC$javajs_util_P3A$javajs_util_T3);
break;
}
switch (oabc.length) {
case 2:
var a=oabc[1];
oabc=Clazz.array($I$(11), -1, [oabc[0], $I$(7).newP$javajs_util_T3(oabc[0]), Clazz.new_($I$(7,1)), Clazz.new_($I$(7,1))]);
oabc[1].x=a.x;
oabc[2].y=a.y;
oabc[3].z=a.z;
break;
case 3:
oabc=Clazz.array($I$(11), -1, [Clazz.new_($I$(7,1)), oabc[0], oabc[1], oabc[2]]);
break;
case 4:
break;
default:
oabc=Clazz.array($I$(11), -1, [Clazz.new_($I$(7,1)), $I$(7).new3$F$F$F(10, 0, 0), $I$(7).new3$F$F$F(0, 10, 0), $I$(7).new3$F$F$F(0, 0, 10)]);
}
htParams.put$O$O("fillRange", oabc);
sOptions.append$S(" FILL [" + oabc[0] + oabc[1] + oabc[2] + oabc[3] + "]" );
break;
case 1073742080:
var f=NaN;
if (this.isFloatParameter$I(++i)) f=this.floatParameter$I(i++);
if (!this.e.chk) {
htParams.put$O$O("packed", $I$(2).TRUE);
sOptions.append$S(" PACKED");
if (!Float.isNaN$F(f)) {
htParams.put$O$O("packingError", Float.valueOf$F(f));
sOptions.append$S(" " + new Float(f).toString());
}}break;
}
return i;
}, p$1);

Clazz.newMeth(C$, 'cache', function () {
var tok=this.tokAt$I(1);
var fileName=null;
var n=2;
switch (tok) {
case 1275069441:
case 1073742119:
fileName=this.e.optParameterAsString$I(n++);
case 1073741882:
this.checkLength$I(n);
if (!this.chk) {
if ("all".equals$O(fileName)) fileName=null;
var nBytes=this.vwr.cacheFileByName$S$Z(fileName, tok == 1275069441);
this.showString$S(nBytes < 0 ? "cache cleared" : nBytes + " bytes " + (tok == 1275069441 ? " cached" : " removed") );
}break;
default:
this.invArg$();
}
}, p$1);

Clazz.newMeth(C$, 'calculate', function () {
var isSurface=false;
var asDSSP=false;
var bs1=null;
var bs2=null;
var eval=this.e;
var n=-2147483648;
var version=2;
if ((eval.iToken=eval.slen) >= 2) {
eval.clearDefinedVariableAtomSets$();
switch (this.getToken$I(1).tok) {
case 1073741824:
this.checkLength$I(2);
break;
case 1086324752:
eval.iToken=1;
bs1=(this.slen == 2 ? null : this.atomExpressionAt$I(2));
eval.checkLast$I(eval.iToken);
if (!this.chk) eval.showString$S(this.vwr.calculateChirality$javajs_util_BS(bs1));
return;
case 1631586315:
this.checkLength$I(2);
if (this.chk) return;
n=this.vwr.calculateFormalCharges$javajs_util_BS(null);
this.showString$S((function(a,f){return f.apply(null,a)})([$I$(12).$$S("{0} charges modified"), n],$I$(12).i$S$I));
return;
case 1075838996:
this.checkLength$I(2);
if (!this.chk) this.vwr.ms.assignAromaticBondsBs$Z$javajs_util_BS(true, null);
return;
case 1613238294:
if (eval.slen != 2) {
asDSSP=(this.tokAt$I(++eval.iToken) == 1639976963);
if (asDSSP) bs1=this.vwr.bsA$();
 else bs1=this.atomExpressionAt$I(eval.iToken);
if (!asDSSP && !(asDSSP=(this.tokAt$I(++eval.iToken) == 1639976963)) ) bs2=this.atomExpressionAt$I(eval.iToken);
}if (this.chk) return;
n=this.vwr.autoHbond$javajs_util_BS$javajs_util_BS$Z(bs1, bs2, false);
if (n != -2147483648) eval.report$S$Z((function(a,f){return f.apply(null,a)})([$I$(12).$$S("{0} hydrogen bonds"), Math.abs(n)],$I$(12).i$S$I), false);
return;
case 1612709900:
var andBond=(this.tokAt$I(2) == 1073742335);
if (andBond) eval.iToken++;
bs1=(this.slen == (andBond ? 3 : 2) ? null : this.atomExpressionAt$I(andBond ? 3 : 2));
eval.checkLast$I(eval.iToken);
if (!this.chk) {
this.vwr.addHydrogens$javajs_util_BS$Z$Z(bs1, false, false);
if (andBond) {
if (bs1 == null ) bs1=this.vwr.bsA$();
this.vwr.makeConnections$F$F$I$I$javajs_util_BS$javajs_util_BS$javajs_util_BS$Z$Z$F(0.1, 1.0E8, 515, 1073742025, bs1, bs1, null, false, false, 0);
this.vwr.ms.assignAromaticBondsBs$Z$javajs_util_BS(true, null);
}}return;
case 1111492619:
eval.iToken=1;
bs1=(this.slen == 2 ? null : this.atomExpressionAt$I(2));
eval.checkLast$I(eval.iToken);
if (!this.chk) eval.getPartialCharges$javajs_util_BS(bs1);
return;
case 1088421903:
case 134217762:
if (!this.chk) {
if (this.tokAt$I(2) == 1275203608) {
var id=(this.tokAt$I(3) == 4 ? this.stringParameter$I(3) : null);
bs1=(id != null  || this.slen == 3  ? null : this.atomExpressionAt$I(3));
var data=Clazz.array(java.lang.Object, -1, [id, null, bs1]);
this.showString$S(eval.getShapePropertyData$I$S$OA(21, "symmetry", data) ? data[1] : "");
} else {
this.showString$S(this.vwr.ms.calculatePointGroup$javajs_util_BS(this.vwr.bsA$()));
}}return;
case 1111490574:
this.checkLength$I(2);
if (!this.chk) {
this.vwr.calculateStraightness$();
this.vwr.addStateScript$S$Z$Z("set quaternionFrame '" + this.vwr.getQuaternionFrame$() + "'; calculate straightness" , false, true);
}return;
case 1639976963:
bs1=(this.slen < 4 || this.isFloatParameter$I(3)  ? null : this.atomExpressionAt$I(2));
switch (this.tokAt$I(++eval.iToken)) {
case 4138:
break;
case 1111490587:
if (this.chk) return;
eval.showString$S(this.vwr.getAnnotationParser$Z(true).calculateDSSRStructure$org_jmol_viewer_Viewer$javajs_util_BS(this.vwr, bs1));
return;
case 1073741915:
asDSSP=true;
version=(this.slen == eval.iToken + 1 ? 2 : (this.floatParameter$I(++eval.iToken)|0));
break;
case 0:
asDSSP=this.vwr.getBoolean$I(603979826);
break;
default:
this.invArg$();
}
if (!this.chk) this.showString$S(this.vwr.calculateStructures$javajs_util_BS$Z$Z$I(bs1, asDSSP, true, version));
return;
case 659482:
bs1=(eval.iToken + 1 < this.slen ? this.atomExpressionAt$I(++eval.iToken) : null);
bs2=(eval.iToken + 1 < this.slen ? this.atomExpressionAt$I(++eval.iToken) : null);
this.checkLength$I(++eval.iToken);
if (!this.chk) {
n=this.vwr.calculateStruts$javajs_util_BS$javajs_util_BS(bs1, bs2);
if (n > 0) {
this.setShapeProperty$I$S$O(1, "type", Integer.valueOf$I(32768));
eval.setShapePropertyBs$I$S$O$javajs_util_BS(1, "color", Integer.valueOf$I(16777215), null);
eval.setShapeTranslucency$I$S$S$F$javajs_util_BS(1, "", "translucent", 0.5, null);
this.setShapeProperty$I$S$O(1, "type", Integer.valueOf$I(1023));
}this.showString$S((function(a,f){return f.apply(null,a)})([$I$(12).$$S("{0} struts added"), n],$I$(12).i$S$I));
}return;
case 2097180:
isSurface=true;
case 1111490575:
var isFrom=false;
switch (this.tokAt$I(2)) {
case 134217759:
eval.iToken++;
break;
case 0:
isFrom=!isSurface;
break;
case 1073741952:
isFrom=true;
eval.iToken++;
break;
default:
isFrom=true;
}
bs1=(eval.iToken + 1 < this.slen ? this.atomExpressionAt$I(++eval.iToken) : this.vwr.bsA$());
this.checkLength$I(++eval.iToken);
if (!this.chk) this.vwr.calculateSurface$javajs_util_BS$F(bs1, (isFrom ? 3.4028235E38 : -1));
return;
}
}eval.errorStr2$I$S$S(53, "CALCULATE", "aromatic? hbonds? hydrogen? formalCharge? partialCharge? pointgroup? straightness? structure? struts? surfaceDistance FROM? surfaceDistance WITHIN?");
}, p$1);

Clazz.newMeth(C$, 'capture', function () {
if (!this.chk && !this.vwr.allowCapture$() ) {
this.showString$S("Cannot capture on this platform");
return;
}var params=this.vwr.captureParams;
var type=(params == null  ? "GIF" : params.get$O("type"));
var endTime=0;
var mode=0;
var slen=this.e.slen;
var fileName="";
var looping=(this.vwr.am.animationReplayMode != 1073742070);
var i=1;
var tok=this.tokAt$I(i);
var isTransparent=(tok == 603979967);
if (isTransparent) tok=this.tokAt$I(++i);
var s=null;
switch (tok == 0 ? (tok=102409) : tok) {
case 4:
fileName=this.e.optParameterAsString$I(i++);
if (fileName.length$() == 0) {
mode=102409;
break;
}var lc=fileName.toLowerCase$();
if (lc.endsWith$S(".gift") || lc.endsWith$S(".pngt") ) {
isTransparent=true;
fileName=fileName.substring$I$I(0, fileName.length$() - 1);
lc=fileName.toLowerCase$();
} else if (!lc.endsWith$S(".gif") && !lc.contains$CharSequence(".png") ) {
fileName += ".gif";
}if (lc.endsWith$S(".png")) {
if (!lc.endsWith$S("0.png")) fileName=fileName.substring$I$I(0, fileName.length$() - 4) + "0000.png";
type="PNG";
} else {
type="GIF";
}if (isTransparent) type += "T";
var pt=fileName.indexOf$S("0000.");
var streaming=(pt < 0 || pt != fileName.lastIndexOf$S(".") - 4 );
var isRock=false;
if (this.tokAt$I(i) == 528411) {
looping=true;
tok=this.tokAt$I(++i);
}switch (this.tokAt$I(i)) {
case 134222850:
s=this.stringParameter$I(++i);
break;
case 1073742129:
isRock=true;
case 1611141175:
var axis="y";
looping=true;
i++;
if (isRock) {
if (i < slen && this.tokAt$I(i) != 2 ) axis=this.e.optParameterAsString$I(i++).toLowerCase$();
s="rotate Y 10 10;rotate Y -10 -10;rotate Y -10 -10;rotate Y 10 10";
var n=(i < slen ? this.intParameter$I(i++) : 5);
if (n < 0) {
s=(function(a,f){return f.apply(null,a)})([s, "10;", "" + (-n) + ";" ],$I$(1).rep$S$S$S);
} else {
s=$I$(1).rep$S$S$S(s, "10", "" + n);
}} else {
if (i < slen) axis=this.e.optParameterAsString$I(i++).toLowerCase$();
s="rotate Y 360 30;";
}if (this.chk) return;
this.vwr.setNavigationMode$Z(false);
if (axis == "" || "xyz".indexOf$S(axis) < 0 ) axis="y";
s=$I$(1).rep$S$S$S(s, "Y", axis);
break;
case 3:
case 2:
endTime=this.floatParameter$I(i++);
break;
}
if (this.chk) return;
if (s != null ) {
var wf=this.vwr.g.waitForMoveTo;
s="set waitformoveto true;" + s + ";set waitformoveto " + wf ;
s="capture " + (isTransparent ? "transparent " : "") + $I$(1).esc$S(fileName) + (looping ? " LOOP;" : ";") + s + ";capture end;" ;
this.e.cmdScript$I$S$S(0, null, s);
return;
}mode=1073742031;
params=Clazz.new_($I$(13,1));
var fps=this.vwr.getInt$I(553648132);
if (streaming) {
params.put$O$O("streaming", $I$(2).TRUE);
if (!looping) this.showString$S((function(a,f){return f.apply(null,a)})([$I$(12).$$S("Note: Enable looping using the LOOP keyword just after the file name or {0}"), Clazz.array(java.lang.Object, -1, ["ANIMATION MODE LOOP"])],$I$(12).o$S$O));
this.showString$S((function(a,f){return f.apply(null,a)})([$I$(12).$$S("Animation delay based on: {0}"), Clazz.array(java.lang.Object, -1, ["ANIMATION FPS " + fps])],$I$(12).o$S$O));
}params.put$O$O("captureFps", Integer.valueOf$I(fps));
break;
case 102409:
case 1073741874:
if (params != null ) params.put$O$O("captureSilent", $I$(2).TRUE);
case 1073742335:
case 1073742334:
this.checkLength$I(-2);
mode=tok;
break;
default:
this.invArg$();
}
if (this.chk || params == null  ) return;
params.put$O$O("type", type);
var c=Integer.valueOf$I(this.vwr.getBackgroundArgb$());
params.put$O$O("backgroundColor", c);
params.put$O$O("fileName", fileName);
params.put$O$O("quality", Integer.valueOf$I(-1));
params.put$O$O("endTime", Long.valueOf$J(endTime <= 0  ? -1 : System.currentTimeMillis$() + ((endTime * 1000)|0)));
params.put$O$O("captureMode", $I$(14).nameOf$I(mode).toLowerCase$());
params.put$O$O("captureLooping", looping ? $I$(2).TRUE : $I$(2).FALSE);
var msg=this.vwr.processWriteOrCapture$java_util_Map(params);
if (msg == null ) msg="canceled";
$I$(5).info$S(msg);
}, p$1);

Clazz.newMeth(C$, 'centerAt', function () {
var tok=this.getToken$I(1).tok;
switch (tok) {
case 1073741826:
case 96:
case 1678381065:
break;
default:
this.invArg$();
}
var pt=$I$(7).new3$F$F$F(0, 0, 0);
if (this.slen == 5) {
pt.x=this.floatParameter$I(2);
pt.y=this.floatParameter$I(3);
pt.z=this.floatParameter$I(4);
} else if (this.e.isCenterParameter$I(2)) {
pt=this.centerParameter$I(2);
this.e.checkLast$I(this.e.iToken);
} else {
this.checkLength$I(2);
}if (!this.chk && !this.vwr.isJmolDataFrame$() ) this.vwr.tm.setCenterAt$I$javajs_util_P3(tok, pt);
}, p$1);

Clazz.newMeth(C$, 'compare', function () {
var eval=this.e;
var isQuaternion=false;
var doRotate=false;
var doTranslate=false;
var doAnimate=false;
var isFlexFit=false;
var data1=null;
var data2=null;
var bsAtoms1=null;
var bsAtoms2=null;
var vAtomSets=null;
var vQuatSets=null;
eval.iToken=0;
var nSeconds=(this.isFloatParameter$I(1) ? this.floatParameter$I(++eval.iToken) : NaN);
var bsFrom=this.atomExpressionAt$I(++eval.iToken);
var coordTo=null;
var bsTo=null;
if (eval.isArrayParameter$I(++eval.iToken)) {
coordTo=eval.getPointArray$I$I$Z(eval.iToken, -1, false);
} else if (this.tokAt$I(eval.iToken) != 1140850689) {
bsTo=this.atomExpressionAt$I(eval.iToken);
}var bsSubset=null;
var isSmiles=false;
var strSmiles=null;
var bs=$I$(15).copy$javajs_util_BS(bsFrom);
if (bsTo != null ) bs.or$javajs_util_BS(bsTo);
var isToSubsetOfFrom=(coordTo == null  && bsTo != null   && bs.equals$O(bsFrom) );
var isFrames=isToSubsetOfFrom;
for (var i=eval.iToken + 1; i < this.slen; ++i) {
switch (this.getToken$I(i).tok) {
case 4115:
isFrames=true;
break;
case 134218757:
isSmiles=true;
if (this.tokAt$I(i + 1) != 4) {
strSmiles="*";
break;
}case 134218756:
strSmiles=this.stringParameter$I(++i);
break;
case 1677721602:
isFlexFit=true;
doRotate=true;
strSmiles=this.paramAsStr$I(++i);
if (strSmiles.equalsIgnoreCase$S("SMILES")) {
isSmiles=true;
strSmiles="*";
}break;
case 3:
case 2:
nSeconds=Math.abs(this.floatParameter$I(i));
if (nSeconds > 0 ) doAnimate=true;
break;
case 268435504:
break;
case 2109448:
bsSubset=this.atomExpressionAt$I(++i);
i=eval.iToken;
break;
case 10:
case 1073742325:
if (vQuatSets != null ) this.invArg$();
bsAtoms1=this.atomExpressionAt$I(eval.iToken);
var tok=(isToSubsetOfFrom ? 0 : this.tokAt$I(eval.iToken + 1));
bsAtoms2=(coordTo == null  && eval.isArrayParameter$I(eval.iToken + 1)  ? null : (tok == 10 || tok == 1073742325  ? this.atomExpressionAt$I(++eval.iToken) : $I$(15).copy$javajs_util_BS(bsAtoms1)));
if (bsSubset != null ) {
bsAtoms1.and$javajs_util_BS(bsSubset);
if (bsAtoms2 != null ) bsAtoms2.and$javajs_util_BS(bsSubset);
}if (bsAtoms2 == null ) coordTo=eval.getPointArray$I$I$Z(++eval.iToken, -1, false);
 else if (bsTo != null ) bsAtoms2.and$javajs_util_BS(bsTo);
if (vAtomSets == null ) vAtomSets=Clazz.new_($I$(16,1));
vAtomSets.addLast$O(Clazz.array($I$(17), -1, [bsAtoms1, bsAtoms2]));
i=eval.iToken;
break;
case 7:
if (vAtomSets != null ) this.invArg$();
isQuaternion=true;
data1=eval.getQuaternionArray$O$I((eval.theToken).getList$(), 1073742001);
this.getToken$I(++i);
data2=eval.getQuaternionArray$O$I((eval.theToken).getList$(), 1073742001);
if (vQuatSets == null ) vQuatSets=Clazz.new_($I$(16,1));
vQuatSets.addLast$O(Clazz.array(java.lang.Object, -1, [data1, data2]));
break;
case 1073742077:
isQuaternion=true;
break;
case 134217751:
case 1140850689:
isQuaternion=false;
break;
case 528432:
doRotate=true;
break;
case 4160:
doTranslate=true;
break;
default:
this.invArg$();
}
}
if (this.chk) return;
if (isFrames) nSeconds=0;
if (Float.isNaN$F(nSeconds) || nSeconds < 0  ) nSeconds=1;
 else if (!doRotate && !doTranslate ) doRotate=doTranslate=true;
doAnimate=(nSeconds != 0 );
var isAtoms=(!isQuaternion && strSmiles == null   || coordTo != null  );
if (isAtoms) $I$(18).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.Eigen", this.vwr, "script");
if (vAtomSets == null  && vQuatSets == null  ) {
if (bsSubset == null ) {
bsAtoms1=(isAtoms ? this.vwr.getAtomBitSet$O("spine") : Clazz.new_($I$(17,1)));
if (bsAtoms1.nextSetBit$I(0) < 0) {
bsAtoms1=bsFrom;
bsAtoms2=bsTo;
} else {
bsAtoms2=$I$(15).copy$javajs_util_BS(bsAtoms1);
bsAtoms1.and$javajs_util_BS(bsFrom);
bsAtoms2.and$javajs_util_BS(bsTo);
}} else {
bsAtoms1=$I$(15).copy$javajs_util_BS(bsFrom);
bsAtoms2=$I$(15).copy$javajs_util_BS(bsTo);
bsAtoms1.and$javajs_util_BS(bsSubset);
bsAtoms1.and$javajs_util_BS(bsFrom);
if (bsAtoms2 != null ) {
bsAtoms2.and$javajs_util_BS(bsSubset);
bsAtoms2.and$javajs_util_BS(bsTo);
}}vAtomSets=Clazz.new_($I$(16,1));
vAtomSets.addLast$O(Clazz.array($I$(17), -1, [bsAtoms1, bsAtoms2]));
}var bsFrames;
if (isFrames) {
var bsModels=this.vwr.ms.getModelBS$javajs_util_BS$Z(bsFrom, false);
bsFrames=Clazz.array($I$(17), [bsModels.cardinality$()]);
for (var i=0, iModel=bsModels.nextSetBit$I(0); iModel >= 0; iModel=bsModels.nextSetBit$I(iModel + 1), i++) bsFrames[i]=this.vwr.getModelUndeletedAtomsBitSet$I(iModel);

} else {
bsFrames=Clazz.array($I$(17), -1, [bsFrom]);
}for (var iFrame=0; iFrame < bsFrames.length; iFrame++) {
bsFrom=bsFrames[iFrame];
var retStddev=Clazz.array(Float.TYPE, [2]);
var q=null;
var vQ=Clazz.new_($I$(16,1));
var centerAndPoints=null;
var vAtomSets2=(isFrames ? Clazz.new_($I$(16,1)) : vAtomSets);
for (var i=0; i < vAtomSets.size$(); ++i) {
var bss=vAtomSets.get$I(i);
if (isFrames) vAtomSets2.addLast$O(bss=Clazz.array($I$(17), -1, [$I$(15).copy$javajs_util_BS(bss[0]), bss[1]]));
bss[0].and$javajs_util_BS(bsFrom);
}
var center=null;
var translation=null;
if (isAtoms) {
if (coordTo != null ) {
vAtomSets2.clear$();
vAtomSets2.addLast$O(Clazz.array(java.lang.Object, -1, [bsAtoms1, coordTo]));
}try {
centerAndPoints=this.vwr.getCenterAndPoints$javajs_util_Lst$Z(vAtomSets2, true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.invArg$();
} else {
throw ex;
}
}
var n=centerAndPoints[0].length - 1;
for (var i=1; i <= n; i++) {
var aij=centerAndPoints[0][i];
var bij=centerAndPoints[1][i];
if (!(Clazz.instanceOf(aij, "org.jmol.modelset.Atom")) || !(Clazz.instanceOf(bij, "org.jmol.modelset.Atom")) ) break;
(function(a,f){return f.apply(null,a)})([" atom 1 " + (aij).getInfo$() + "\tatom 2 " + (bij).getInfo$() ],$I$(5).info$S);
}
q=$I$(19).calculateQuaternionRotation$javajs_util_P3AA$FA(centerAndPoints, retStddev);
var r0=(Float.isNaN$F(retStddev[1]) ? NaN : Math.round(retStddev[0] * 100) / 100.0);
var r1=(Float.isNaN$F(retStddev[1]) ? NaN : Math.round(retStddev[1] * 100) / 100.0);
this.showString$S("RMSD " + new Float(r0).toString() + " --> " + new Float(r1).toString() + " Angstroms" );
} else if (isQuaternion) {
if (vQuatSets == null ) {
for (var i=0; i < vAtomSets2.size$(); i++) {
var bss=vAtomSets2.get$I(i);
data1=this.vwr.getAtomGroupQuaternions$javajs_util_BS$I(bss[0], 2147483647);
data2=this.vwr.getAtomGroupQuaternions$javajs_util_BS$I(bss[1], 2147483647);
for (var j=0; j < data1.length && j < data2.length ; j++) {
vQ.addLast$O(data2[j].div$javajs_util_Quat(data1[j]));
}
}
} else {
for (var j=0; j < data1.length && j < data2.length ; j++) {
vQ.addLast$O(data2[j].div$javajs_util_Quat(data1[j]));
}
}retStddev[0]=0;
data1=vQ.toArray$OA(Clazz.array($I$(20), [vQ.size$()]));
q=$I$(20).sphereMean$javajs_util_QuatA$FA$F(data1, retStddev, 1.0E-4);
this.showString$S("RMSD = " + new Float(retStddev[0]).toString() + " degrees" );
} else {
var m4=Clazz.new_($I$(21,1));
center=Clazz.new_($I$(7,1));
if (("*".equals$O(strSmiles) || "".equals$O(strSmiles) ) && bsFrom != null  ) try {
strSmiles=this.vwr.getSmiles$javajs_util_BS(bsFrom);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
eval.evalError$S$S(ex.getMessage$(), null);
} else {
throw ex;
}
}
if (isFlexFit) {
var list;
if (bsFrom == null  || bsTo == null   || (list=eval.getSmilesExt$().getFlexFitList$javajs_util_BS$javajs_util_BS$S$Z(bsFrom, bsTo, strSmiles, !isSmiles)) == null  ) return;
this.vwr.setDihedrals$FA$javajs_util_BSA$F(list, null, 1);
}var stddev=eval.getSmilesExt$().getSmilesCorrelation$javajs_util_BS$javajs_util_BS$S$javajs_util_Lst$javajs_util_Lst$javajs_util_M4$javajs_util_Lst$Z$IAA$javajs_util_P3$Z$I(bsFrom, bsTo, strSmiles, null, null, m4, null, false, null, center, false, 32 | (isSmiles ? 1 : 2));
if (Float.isNaN$F(stddev)) {
this.showString$S("structures do not match");
return;
}if (doTranslate) {
translation=Clazz.new_($I$(22,1));
m4.getTranslation$javajs_util_T3(translation);
}if (doRotate) {
var m3=Clazz.new_($I$(23,1));
m4.getRotationScale$javajs_util_M3(m3);
q=$I$(20).newM$javajs_util_M3(m3);
}this.showString$S("RMSD = " + new Float(stddev).toString() + " Angstroms" );
}if (centerAndPoints != null ) center=centerAndPoints[0][0];
if (center == null ) {
centerAndPoints=this.vwr.getCenterAndPoints$javajs_util_Lst$Z(vAtomSets2, true);
center=centerAndPoints[0][0];
}var pt1=Clazz.new_($I$(7,1));
var endDegrees=NaN;
if (doTranslate) {
if (translation == null ) translation=$I$(22).newVsub$javajs_util_T3$javajs_util_T3(centerAndPoints[1][0], center);
endDegrees=1.0E10;
}if (doRotate) {
if (q == null ) eval.evalError$S$S("option not implemented", null);
pt1.add2$javajs_util_T3$javajs_util_T3(center, q.getNormal$());
endDegrees=q.getTheta$();
if (endDegrees == 0  && doTranslate ) {
if (translation.length$() > 0.01 ) endDegrees=1.0E10;
 else doRotate=doTranslate=doAnimate=false;
}}if (Float.isNaN$F(endDegrees) || Float.isNaN$F(pt1.x) ) continue;
var ptsB=null;
if (doRotate && doTranslate && nSeconds != 0   ) {
var ptsA=this.vwr.ms.getAtomPointVector$javajs_util_BS(bsFrom);
var m4=(function(a,f){return f.apply(null,a)})([q.getMatrix$(), translation],$I$(24).getMatrix4f$javajs_util_M3$javajs_util_T3);
ptsB=$I$(19).transformPoints$javajs_util_Lst$javajs_util_M4$javajs_util_P3(ptsA, m4, center);
}if (!eval.useThreads$()) doAnimate=false;
if (this.vwr.rotateAboutPointsInternal$org_jmol_api_JmolScriptEvaluator$javajs_util_P3$javajs_util_P3$F$F$Z$javajs_util_BS$javajs_util_V3$javajs_util_Lst$FA$javajs_util_M4(eval, center, pt1, endDegrees / nSeconds, endDegrees, doAnimate, bsFrom, translation, ptsB, null, null) && doAnimate && eval.isJS  ) throw Clazz.new_($I$(25,1).c$$org_jmol_script_ScriptEval$S$I,[eval, "compare", 1]);
}
}, p$1);

Clazz.newMeth(C$, 'configuration', function () {
var bsAtoms=null;
var bsSelected=this.vwr.bsA$();
if (this.slen == 1) {
if (this.chk) return;
bsAtoms=this.vwr.ms.setConformation$javajs_util_BS(bsSelected);
this.vwr.ms.addStateScript$S$javajs_util_BS$javajs_util_BS$javajs_util_BS$S$Z$Z("select", null, bsSelected, null, "configuration", true, false);
} else {
var n;
if (this.isFloatParameter$I(1)) {
n=this.intParameter$I(this.e.checkLast$I(1));
if (this.chk) return;
bsAtoms=this.vwr.ms.getConformation$I$I$Z$javajs_util_BS(this.vwr.am.cmi, n - 1, true, null);
this.vwr.addStateScript$S$Z$Z("configuration " + n + ";" , true, false);
} else {
bsAtoms=this.atomExpressionAt$I(1);
if (this.chk) return;
n=this.intParameter$I(this.e.checkLast$I(this.e.iToken + 1));
this.vwr.addStateScript$S$Z$Z("configuration " + $I$(9).eBS$javajs_util_BS(bsAtoms) + " " + n + ";" , true, false);
bsAtoms=this.vwr.ms.getConformation$I$I$Z$javajs_util_BS(this.vwr.am.cmi, n - 1, true, bsAtoms);
}}this.setShapeProperty$I$S$O(1, "type", Integer.valueOf$I(30720));
this.e.setShapeSizeBs$I$I$javajs_util_BS(1, 0, bsAtoms);
this.vwr.autoHbond$javajs_util_BS$javajs_util_BS$Z(bsAtoms, bsAtoms, true);
this.vwr.select$javajs_util_BS$Z$I$Z(bsAtoms, false, 0, this.e.tQuiet);
}, p$1);

Clazz.newMeth(C$, 'measure', function () {
var eval=this.e;
var id=null;
var pt=1;
var colix=($s$[0] = 0, $s$[0]);
var offset=null;
if (this.slen == 2) switch (this.tokAt$I(1)) {
case 1073742334:
this.setShapeProperty$I$S$O(6, "hideAll", $I$(2).TRUE);
return;
case 12291:
if (!this.chk) this.vwr.clearAllMeasurements$();
return;
}
this.vwr.shm.loadShape$I(6);
switch (this.tokAt$I(1)) {
case 134218756:
var smarts=this.stringParameter$I(this.slen == 3 ? 2 : 4);
if (this.chk) return;
var atoms=this.vwr.ms.at;
var ac=this.vwr.ms.ac;
var maps=null;
try {
maps=this.vwr.getSmilesMatcher$().getCorrelationMaps$S$org_jmol_util_NodeA$I$javajs_util_BS$I(smarts, atoms, ac, this.vwr.bsA$(), 2);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
eval.evalError$S$S(ex.getMessage$(), null);
} else {
throw ex;
}
}
if (maps == null ) return;
this.setShapeProperty$I$S$O(6, "maps", maps);
return;
}
switch (this.slen) {
case 2:
switch (this.getToken$I(pt).tok) {
case 0:
case 1073742335:
this.vwr.shm.loadShape$I(6);
this.setShapeProperty$I$S$O(6, "hideAll", $I$(2).FALSE);
return;
case 1073742001:
if (!this.chk) eval.showStringPrint$S$Z(this.vwr.getMeasurementInfoAsString$(), false);
return;
case 4:
this.setShapeProperty$I$S$O(6, "setFormats", this.stringParameter$I(1));
return;
}
eval.errorStr$I$S(24, "ON, OFF, DELETE");
break;
case 3:
switch (this.getToken$I(1).tok) {
case 12291:
if (this.getToken$I(2).tok == 1073742327) {
if (!this.chk) this.vwr.clearAllMeasurements$();
} else {
var i=this.intParameter$I(2) - 1;
if (!this.chk) this.vwr.deleteMeasurement$I(i);
}return;
}
}
var nAtoms=0;
var expressionCount=0;
var modelIndex=-1;
var atomIndex=-1;
var ptFloat=-1;
var countPlusIndexes=Clazz.array(Integer.TYPE, [5]);
var rangeMinMax=Clazz.array(Float.TYPE, -1, [3.4028235E38, 3.4028235E38]);
var isAll=false;
var isAllConnected=false;
var isNotConnected=false;
var isRange=true;
var rd=null;
var intramolecular=null;
var tokAction=268435538;
var strFormat=null;
var font=null;
var points=Clazz.new_($I$(16,1));
var bs=Clazz.new_($I$(17,1));
var target=null;
var tickInfo=null;
var nBitSets=0;
var mad=0;
var alignment=null;
for (var i=1; i < this.slen; ++i) {
switch (this.getToken$I(i).tok) {
case 1073741974:
if (i != 1) this.invArg$();
id=eval.optParameterAsString$I(++i);
continue;
case 1073741824:
eval.errorStr$I$S(24, "ALL, ALLCONNECTED, DELETE");
break;
default:
this.error$I(15);
break;
case 268435568:
if (this.tokAt$I(i + 1) != 134217736) this.invArg$();
i++;
isNotConnected=true;
break;
case 1073741832:
alignment=this.paramAsStr$I(++i).toLowerCase$();
break;
case 134217736:
case 1073741834:
case 1073742327:
isAllConnected=(eval.theTok == 1073741834);
atomIndex=-1;
isAll=true;
if (isAllConnected && isNotConnected ) this.invArg$();
break;
case 1765808134:
colix=(function(a,f){return f.apply(null,a)})([eval.getArgbParam$I(++i)],$I$(26).getColix$I);
i=eval.iToken;
break;
case 1073742066:
if (eval.isPoint3f$I(++i)) {
var p=this.getPoint3f$I$Z(i, false);
offset=Clazz.array(Float.TYPE, -1, [1, p.x, p.y, p.z, 0, 0, 0]);
} else {
offset=eval.floatParameterSet$I$I$I(i, 7, 7);
}i=eval.iToken;
break;
case 1665140738:
case 1073741917:
mad=(((eval.theTok == 1665140738 ? 2000 : 1000) * this.floatParameter$I(++i))|0);
if (id != null  && mad <= 0 ) mad=-1;
break;
case 3:
if (rd != null ) this.invArg$();
isAll=true;
isRange=true;
ptFloat=(ptFloat + 1) % 2;
rangeMinMax[ptFloat]=this.floatParameter$I(i);
break;
case 12291:
if (tokAction != 268435538) this.invArg$();
tokAction=12291;
break;
case 4114:
var fontsize=this.floatParameter$I(++i);
var fontface=this.paramAsStr$I(++i);
var fontstyle=this.paramAsStr$I(++i);
if (!this.chk) font=this.vwr.getFont3D$S$S$F(fontface, fontstyle, fontsize);
break;
case 2:
var iParam=this.intParameter$I(i);
if (isAll) {
isRange=true;
ptFloat=(ptFloat + 1) % 2;
rangeMinMax[ptFloat]=iParam;
} else {
atomIndex=this.vwr.ms.getFirstAtomIndexFromAtomNumber$I$javajs_util_BS(iParam, this.vwr.getVisibleFramesBitSet$());
if (!this.chk && atomIndex < 0 ) return;
if (target != null ) this.invArg$();
if ((countPlusIndexes[0]=++nAtoms) > 4) eval.bad$();
countPlusIndexes[nAtoms]=atomIndex;
}break;
case 1094713359:
modelIndex=this.intParameter$I(++i);
break;
case 1073742334:
if (tokAction != 268435538) this.invArg$();
tokAction=1073742334;
break;
case 1073742335:
if (tokAction != 268435538) this.invArg$();
tokAction=1073742335;
break;
case 1073742114:
isAll=true;
isRange=true;
atomIndex=-1;
break;
case 1073741989:
case 1073741990:
intramolecular=(function(a,f){return f.apply(null,a)})([eval.theTok == 1073741989],$I$(2).valueOf$Z);
isAll=true;
isNotConnected=(eval.theTok == 1073741990);
break;
case 1648363544:
if (ptFloat >= 0) this.invArg$();
rd=eval.encodeRadiusParameter$I$Z$Z(i, false, true);
if (rd == null ) return;
rd.values=rangeMinMax;
i=eval.iToken;
isNotConnected=true;
isAll=true;
intramolecular=$I$(2).valueOf$Z(false);
if (nBitSets == 1) {
nBitSets++;
nAtoms++;
var bs2=$I$(15).copy$javajs_util_BS(bs);
$I$(15).invertInPlace$javajs_util_BS$I(bs2, this.vwr.ms.ac);
bs2.and$javajs_util_BS(this.vwr.ms.getAtomsWithinRadius$F$javajs_util_BS$Z$org_jmol_atomdata_RadiusData(5, bs, false, null));
points.addLast$O(bs2);
}break;
case 12290:
case 10:
case 1073742325:
nBitSets++;
case 1073742332:
case 8:
case 1073742330:
if (atomIndex >= 0) this.invArg$();
var ret=Clazz.array(java.lang.Object, [1]);
target=eval.centerParameter$I$OA(i, ret);
if (Clazz.instanceOf(ret[0], "javajs.util.BS")) {
target=bs=ret[0];
if (!this.chk && bs.length$() == 0 ) return;
}if (Clazz.instanceOf(target, "javajs.util.P3")) {
var v=Clazz.new_($I$(27,1));
v.setT$javajs_util_T3(target);
v.mi=($s$[0] = modelIndex, $s$[0]);
target=v;
}if ((nAtoms=++expressionCount) > 4) eval.bad$();
i=eval.iToken;
points.addLast$O(target);
break;
case 4:
strFormat=this.stringParameter$I(i);
break;
case 1073742164:
tickInfo=eval.tickParamAsStr$I$Z$Z$Z(i, false, true, true);
i=eval.iToken;
tokAction=12290;
break;
}
}
if (rd != null  && (ptFloat >= 0 || nAtoms != 2 )  || nAtoms < 2 && id == null   && (tickInfo == null  || nAtoms == 1 )  ) eval.bad$();
if (strFormat != null  && strFormat.indexOf$S(nAtoms + ":") != 0 ) strFormat=nAtoms + ":" + strFormat ;
if (isRange) {
if (rangeMinMax[1] < rangeMinMax[0] ) {
rangeMinMax[1]=rangeMinMax[0];
rangeMinMax[0]=(rangeMinMax[1] == 3.4028235E38  ? 3.4028235E38 : -200);
}}if (this.chk) return;
var isRefreshID=(id != null  && target == null   && tokAction == 268435538 );
if (target != null  || tickInfo != null   || isRefreshID ) {
if (rd == null ) rd=Clazz.new_($I$(28,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW,[rangeMinMax, 0, null, null]);
if (tickInfo != null ) tickInfo.id="default";
if (isRefreshID) {
tokAction=266284;
} else if (target != null  && strFormat != null   && tokAction == 268435538 ) {
tokAction=12290;
}var text=null;
if (font != null  || alignment != null   || colix != 0  || strFormat != null  && (isRefreshID || strFormat.indexOf$I("\n") >= 0 )  ) text=$I$(29).newMeasure$org_jmol_viewer_Viewer$org_jmol_util_Font$H(this.vwr, font, colix);
if (text != null ) {
text.pymolOffset=offset;
text.setAlignmentLCR$S(alignment);
}this.setShapeProperty$I$S$O(6, "measure", this.vwr.newMeasurementData$S$javajs_util_Lst(id, points).set$I$java_util_Map$org_jmol_atomdata_RadiusData$S$S$org_jmol_modelset_TickInfo$Z$Z$Boolean$Z$I$H$org_jmol_modelset_Text(tokAction, null, rd, strFormat, null, tickInfo, isAllConnected, isNotConnected, intramolecular, isAll, mad, colix, text));
return;
}var propertyValue=(id == null  ? countPlusIndexes : id);
switch (tokAction) {
case 12291:
this.setShapeProperty$I$S$O(6, "delete", propertyValue);
break;
case 1073742335:
this.setShapeProperty$I$S$O(6, "show", propertyValue);
break;
case 1073742334:
this.setShapeProperty$I$S$O(6, "hide", propertyValue);
break;
default:
this.setShapeProperty$I$S$O(6, (strFormat == null  ? "toggle" : "toggleOn"), propertyValue);
if (strFormat != null ) this.setShapeProperty$I$S$O(6, "setFormats", strFormat);
}
}, p$1);

Clazz.newMeth(C$, 'connect$I', function (index) {
var eval=this.e;
var distances=Clazz.array(Float.TYPE, [2]);
var atomSets=Clazz.array($I$(17), [2]);
atomSets[0]=atomSets[1]=this.vwr.bsA$();
var radius=NaN;
var colorArgb=Clazz.array(Integer.TYPE, -1, [-2147483648]);
var distanceCount=0;
var bondOrder=131071;
var bo;
var operation=1073742026;
var isDelete=false;
var haveType=false;
var haveOperation=false;
var translucentLevel=3.4028235E38;
var isColorOrRadius=false;
var nAtomSets=0;
var nDistances=0;
var bsBonds=Clazz.new_($I$(17,1));
var isBonds=false;
var expression2=0;
var ptColor=0;
var energy=0;
var addGroup=false;
if (this.slen == 1) {
if (!this.chk) this.vwr.rebondState$Z(eval.isStateScript);
return;
}if (this.tokAt$I(1) == 1073877011) {
if (!this.chk) this.vwr.connectNBO$S(this.e.optParameterAsString$I(2));
return;
}for (var i=index; i < this.slen; ++i) {
switch (this.getToken$I(i).tok) {
case 1073742335:
case 1073742334:
this.checkLength$I(2);
if (!this.chk) this.vwr.rebondState$Z(eval.isStateScript);
return;
case 2:
case 3:
if (nAtomSets > 0) {
if (haveType || isColorOrRadius ) eval.error$I(23);
bo=(function(a,f){return f.apply(null,a)})([this.floatParameter$I(i)],$I$(30).getBondOrderFromFloat$F);
if (bo == 131071) this.invArg$();
bondOrder=bo;
haveType=true;
break;
}if (++nDistances > 2) eval.bad$();
var dist=this.floatParameter$I(i);
if (this.tokAt$I(i + 1) == 268435634) {
dist=-dist / 100.0;
i++;
}distances[distanceCount++]=dist;
break;
case 12290:
case 10:
case 1073742325:
if (nAtomSets > 2 || isBonds && nAtomSets > 0  ) eval.bad$();
if (haveType || isColorOrRadius ) this.invArg$();
atomSets[nAtomSets++]=this.atomExpressionAt$I(i);
isBonds=eval.isBondSet;
if (nAtomSets == 2) {
var pt=eval.iToken;
for (var j=i; j < pt; j++) if (this.tokAt$I(j) == 1073741824 && this.paramAsStr$I(j).equals$O("_1") ) {
expression2=i;
break;
}
eval.iToken=pt;
}i=eval.iToken;
break;
case 1086324742:
addGroup=true;
break;
case 1765808134:
case 603979967:
case 1073742074:
isColorOrRadius=true;
translucentLevel=this.getColorTrans$org_jmol_script_ScriptEval$I$Z$IA(eval, i, false, colorArgb);
i=eval.iToken;
break;
case 1073742086:
var isAuto=(this.tokAt$I(2) == 1073741852);
this.checkLength$I(isAuto ? 3 : 2);
if (this.chk) return;
this.vwr.clearModelDependentObjects$();
this.vwr.ms.deleteAllBonds$();
var bsExclude=Clazz.new_($I$(17,1));
this.vwr.ms.setPdbConectBonding$I$I$javajs_util_BS(0, 0, bsExclude);
if (isAuto) {
var isLegacy=eval.isStateScript && this.vwr.getBoolean$I(603979872) ;
this.vwr.ms.autoBondBs4$javajs_util_BS$javajs_util_BS$javajs_util_BS$javajs_util_BS$H$Z(null, null, bsExclude, null, this.vwr.getMadBond$(), isLegacy);
this.vwr.addStateScript$S$Z$Z((isLegacy ? "set legacyAutoBonding TRUE;connect PDB AUTO;set legacyAutoBonding FALSE;" : "connect PDB auto;"), false, true);
return;
}this.vwr.addStateScript$S$Z$Z("connect PDB;", false, true);
return;
case 1073741830:
case 1073741852:
case 1073741904:
case 1073742025:
case 1073742026:
haveOperation=true;
if (++i != this.slen) this.invArg$();
operation=eval.theTok;
if (operation == 1073741852 && !(bondOrder == 131071 || bondOrder == 2048  || bondOrder == 515 ) ) this.invArg$();
break;
case 659482:
if (!isColorOrRadius) {
colorArgb[0]=16777215;
translucentLevel=0.5;
radius=this.vwr.getFloat$I(570425406);
isColorOrRadius=true;
}if (!haveOperation) {
operation=1073742026;
haveOperation=true;
}case 1073741824:
if (eval.isColorParam$I(i)) {
ptColor=-i;
break;
}case 1075838996:
case 1613238294:
var cmd=this.paramAsStr$I(i);
if ((bo=$I$(31).getBondOrderFromString$S(cmd)) == 131071) this.invArg$();
if (haveType) eval.error$I(18);
haveType=true;
switch (bo) {
case 33:
switch (this.tokAt$I(i + 1)) {
case 3:
bo=$I$(31).getPartialBondOrderFromFloatEncodedInt$I(this.st[++i].intValue);
break;
case 2:
bo=($s$[0] = this.intParameter$I(++i), $s$[0]);
break;
}
break;
case 2048:
if (this.tokAt$I(i + 1) == 2) {
bo=($s$[0] = (this.intParameter$I(++i) << 11), $s$[0]);
energy=this.floatParameter$I(++i);
}break;
case 65537:
if (!haveOperation) {
operation=1073742025;
haveOperation=true;
}break;
}
bondOrder=bo;
break;
case 1665140738:
radius=this.floatParameter$I(++i);
isColorOrRadius=true;
break;
case 1073742333:
case 12291:
if (++i != this.slen) this.invArg$();
operation=12291;
isDelete=true;
isColorOrRadius=false;
break;
default:
ptColor=i;
break;
}
if (i > 0) {
if (ptColor == -i || ptColor == i && eval.isColorParam$I(i)  ) {
isColorOrRadius=true;
colorArgb[0]=eval.getArgbParam$I(i);
i=eval.iToken;
} else if (ptColor == i) {
this.invArg$();
}}}
if (this.chk) return;
if (distanceCount < 2) {
if (distanceCount == 0) distances[0]=1.0E8;
distances[1]=distances[0];
distances[0]=0.1;
}if (isColorOrRadius) {
if (!haveType) bondOrder=65535;
if (!haveOperation) operation=1073742025;
}var nNew=0;
var nModified=0;
var result;
if (expression2 > 0) {
var bs=Clazz.new_($I$(17,1));
this.vwr.definedAtomSets.put$O$O("_1", bs);
var bs0=atomSets[0];
for (var atom1=bs0.nextSetBit$I(0); atom1 >= 0; atom1=bs0.nextSetBit$I(atom1 + 1)) {
bs.set$I(atom1);
result=this.vwr.makeConnections$F$F$I$I$javajs_util_BS$javajs_util_BS$javajs_util_BS$Z$Z$F(distances[0], distances[1], bondOrder, operation, bs, this.atomExpressionAt$I(expression2), bsBonds, isBonds, false, 0);
nNew+=Math.abs(result[0]);
nModified+=result[1];
bs.clear$I(atom1);
}
} else {
result=this.vwr.makeConnections$F$F$I$I$javajs_util_BS$javajs_util_BS$javajs_util_BS$Z$Z$F(distances[0], distances[1], bondOrder, operation, atomSets[0], atomSets[1], bsBonds, isBonds, addGroup, energy);
nNew+=Math.abs(result[0]);
nModified+=result[1];
}var report=eval.doReport$();
if (isDelete) {
if (report) eval.report$S$Z((function(a,f){return f.apply(null,a)})([$I$(12).$$S("{0} connections deleted"), nModified],$I$(12).i$S$I), false);
return;
}if (isColorOrRadius) {
this.vwr.selectBonds$javajs_util_BS(bsBonds);
if (!Float.isNaN$F(radius)) eval.setShapeSizeBs$I$I$javajs_util_BS(1, Math.round(radius * 2000), null);
this.finalizeObject$I$I$F$I$Z$O$I$javajs_util_BS(1, colorArgb[0], translucentLevel, 0, false, null, 0, bsBonds);
this.vwr.selectBonds$javajs_util_BS(null);
}if (report) eval.report$S$Z((function(a,f){return f.apply(null,a)})([$I$(12).$$S("{0} new bonds; {1} modified"), Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(nNew), Integer.valueOf$I(nModified)])],$I$(12).o$S$O), false);
}, p$1);

Clazz.newMeth(C$, 'console', function () {
switch (this.getToken$I(1).tok) {
case 1073742334:
if (!this.chk) this.vwr.showConsole$Z(false);
break;
case 1073742335:
if (!this.chk) this.vwr.showConsole$Z(true);
break;
case 1073741882:
if (!this.chk) this.vwr.sm.clearConsole$();
break;
case 134221856:
this.showString$S(this.stringParameter$I(2));
break;
default:
this.invArg$();
}
}, p$1);

Clazz.newMeth(C$, 'data', function () {
var eval=this.e;
var dataString=null;
var dataLabel=null;
var isOneValue=false;
var i;
switch (eval.iToken=this.slen) {
case 5:
dataString=this.paramAsStr$I(2);
case 4:
case 2:
dataLabel=this.paramAsStr$I(1);
if (dataLabel.equalsIgnoreCase$S("clear")) {
if (!this.chk) this.vwr.setData$S$OA$I$I$I$I$I(null, null, 0, 0, 0, 0, 0);
return;
}if ((i=dataLabel.indexOf$S("@")) >= 0) {
dataString="" + eval.getParameter$S$I$Z(dataLabel.substring$I(i + 1), 4, true);
dataLabel=dataLabel.substring$I$I(0, i).trim$();
} else if (dataString == null  && (i=dataLabel.indexOf$S(" ")) >= 0 ) {
dataString=dataLabel.substring$I(i + 1).trim$();
dataLabel=dataLabel.substring$I$I(0, i).trim$();
isOneValue=true;
}break;
default:
eval.bad$();
}
var dataType=dataLabel.substring$I$I(0, (dataLabel + " ").indexOf$S(" ")).toLowerCase$();
if (dataType.equals$O("model") || dataType.equals$O("append") ) {
eval.cmdLoad$();
return;
}if (this.chk) return;
var isDefault=(dataLabel.toLowerCase$().indexOf$S("(default)") >= 0);
if (dataType.equals$O("connect_atoms")) {
this.vwr.ms.connect$FAA(p$1.parseDataArray$S$Z.apply(this, [dataString, false]));
return;
}if (dataType.indexOf$S("ligand_") == 0) {
this.vwr.setLigandModel$S$S(dataLabel.substring$I(7).toUpperCase$() + "_data", dataString.trim$());
return;
}if (dataType.indexOf$S("file_") == 0) {
this.vwr.setLigandModel$S$S(dataLabel.substring$I(5) + "_file", dataString.trim$());
return;
}var d=Clazz.array(java.lang.Object, [4]);
if (dataType.equals$O("element_vdw")) {
d[0]=dataType;
d[1]=dataString.replace$C$C(";", "\n");
var n=$I$(32).elementNumberMax;
var eArray=Clazz.array(Integer.TYPE, [n + 1]);
for (var ie=1; ie <= n; ie++) eArray[ie]=ie;

d[2]=eArray;
d[3]=Integer.valueOf$I(0);
this.vwr.setData$S$OA$I$I$I$I$I("element_vdw", d, n, 0, 0, 0, 0);
return;
}if (dataType.indexOf$S("data2d_") == 0) {
d[0]=dataLabel;
d[1]=p$1.parseDataArray$S$Z.apply(this, [dataString, false]);
d[3]=Integer.valueOf$I(2);
this.vwr.setData$S$OA$I$I$I$I$I(dataLabel, d, 0, 0, 0, 0, 0);
return;
}if (dataType.indexOf$S("data3d_") == 0) {
d[0]=dataLabel;
d[1]=p$1.parseDataArray$S$Z.apply(this, [dataString, true]);
d[3]=Integer.valueOf$I(3);
this.vwr.setData$S$OA$I$I$I$I$I(dataLabel, d, 0, 0, 0, 0, 0);
return;
}var tokens=$I$(1).getTokens$S(dataLabel);
if (dataType.indexOf$S("property_") == 0 && !(tokens.length == 2 && tokens[1].equals$O("set") ) ) {
var bs=this.vwr.bsA$();
d[0]=dataType;
var atomNumberField=(isOneValue ? 0 : (this.vwr.getP$S("propertyAtomNumberField")).intValue$());
var atomNumberFieldColumnCount=(isOneValue ? 0 : (this.vwr.getP$S("propertyAtomNumberColumnCount")).intValue$());
var propertyField=(isOneValue ? -2147483648 : (this.vwr.getP$S("propertyDataField")).intValue$());
var propertyFieldColumnCount=(isOneValue ? 0 : (this.vwr.getP$S("propertyDataColumnCount")).intValue$());
if (!isOneValue && dataLabel.indexOf$S(" ") >= 0 ) {
if (tokens.length == 3) {
dataLabel=tokens[0];
atomNumberField=$I$(1).parseInt$S(tokens[1]);
propertyField=$I$(1).parseInt$S(tokens[2]);
}if (tokens.length == 5) {
dataLabel=tokens[0];
atomNumberField=$I$(1).parseInt$S(tokens[1]);
atomNumberFieldColumnCount=$I$(1).parseInt$S(tokens[2]);
propertyField=$I$(1).parseInt$S(tokens[3]);
propertyFieldColumnCount=$I$(1).parseInt$S(tokens[4]);
}}if (atomNumberField < 0) atomNumberField=0;
if (propertyField < 0) propertyField=0;
var ac=this.vwr.ms.ac;
var atomMap=null;
var bsTemp=$I$(17).newN$I(ac);
if (atomNumberField > 0) {
atomMap=Clazz.array(Integer.TYPE, [ac + 2]);
for (var j=0; j <= ac; j++) atomMap[j]=-1;

for (var j=bs.nextSetBit$I(0); j >= 0; j=bs.nextSetBit$I(j + 1)) {
var atomNo=this.vwr.ms.at[j].getAtomNumber$();
if (atomNo > ac + 1 || atomNo < 0  || bsTemp.get$I(atomNo) ) continue;
bsTemp.set$I(atomNo);
atomMap[atomNo]=j;
}
d[2]=atomMap;
} else {
d[2]=$I$(15).copy$javajs_util_BS(bs);
}d[1]=dataString;
d[3]=Integer.valueOf$I(0);
this.vwr.setData$S$OA$I$I$I$I$I(dataType, d, ac, atomNumberField, atomNumberFieldColumnCount, propertyField, propertyFieldColumnCount);
return;
}if ("occupany".equals$O(dataType)) dataType="occupancy";
var userType=$I$(33).getUserSettableType$S(dataType);
if (userType > -1) {
this.vwr.setAtomData$I$S$S$Z(userType, dataType, dataString, isDefault);
return;
}d[0]=dataLabel;
d[1]=dataString;
d[3]=Integer.valueOf$I(0);
this.vwr.setData$S$OA$I$I$I$I$I(dataType, d, 0, 0, 0, 0, 0);
}, p$1);

Clazz.newMeth(C$, 'ellipsoid', function () {
var eval=this.e;
var mad=0;
var i=1;
var translucentLevel=3.4028235E38;
var checkMore=false;
var isSet=false;
this.setShapeProperty$I$S$O(20, "thisID", null);
switch (this.getToken$I(1).tok) {
case 1073742335:
mad=2147483647;
break;
case 1073742334:
break;
case 2:
mad=this.intParameter$I(1);
break;
case 36867:
this.e.sm.loadShape$I(20);
this.setShapeProperty$I$S$O(20, "select", this.paramAsStr$I(2));
i=eval.iToken;
checkMore=true;
isSet=true;
break;
case 1073741974:
case 268435633:
case 1073741824:
this.e.sm.loadShape$I(20);
if (eval.theTok == 1073741974) i++;
this.setShapeId$I$I$Z(20, i, false);
i=eval.iToken;
checkMore=true;
break;
default:
this.invArg$();
}
if (!checkMore) {
eval.setShapeSizeBs$I$I$javajs_util_BS(20, mad, null);
return;
}var colorArgb=Clazz.array(Integer.TYPE, -1, [-2147483648]);
while (++i < this.slen){
var key=this.paramAsStr$I(i);
var value=null;
this.getToken$I(i);
if (!isSet) switch (eval.theTok) {
case 1073742330:
key="points";
var data=Clazz.array(java.lang.Object, [3]);
data[0]=eval.objectNameParameter$I(++i);
if (this.chk) continue;
eval.getShapePropertyData$I$S$OA(24, "getVertices", data);
value=data;
break;
case 1825200146:
value=this.e.optParameterAsString$I(++i);
if ((value).length$() == 0) continue;
break;
case 1611272194:
var axes=Clazz.array($I$(22), [3]);
var l=null;
switch (this.getToken$I(i + 1).tok) {
case 11:
i++;
var m=eval.theToken.value;
for (var im=3; --im >= 0; ) m.getColumnV$I$javajs_util_T3(im, axes[im]=Clazz.new_($I$(22,1)));

break;
case 1073742195:
i+=2;
case 268435520:
l=Clazz.new_($I$(16,1));
for (var i1=3; --i1 >= 0; ) {
switch (this.tokAt$I(++i)) {
case 268435520:
break;
default:
if (eval.isCenterParameter$I(i)) {
l.addLast$O((function(a,f){return f.apply(null,a)})([8, this.centerParameter$I(i)],$I$(34).newV$I$O));
} else if (this.tokAt$I(i) == 268435520) {
} else {
l.addLast$O(this.getToken$I(i));
}}
i=eval.iToken;
}
if (this.getToken$I(++i).tok != 268435521) this.invArg$();
break;
case 7:
l=(eval.theToken).getList$();
switch (l.size$()) {
case 1:
var l1=Clazz.new_($I$(16,1));
for (var il=3; --il >= 0; ) l1.addLast$O(this.getToken$I(++i));

l=l1;
break;
case 3:
break;
default:
this.invArg$();
break;
}
break;
default:
for (var j=0; j < 3; j++) {
axes[j]=Clazz.new_($I$(22,1));
axes[j].setT$javajs_util_T3(this.centerParameter$I(++i));
i=eval.iToken;
}
break;
}
if (l != null ) {
for (var k=3; --k >= 0; ) {
var v=l.get$I(k);
switch (v.tok) {
case 7:
axes[k]=(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([v.getList$().get$I(0)],$I$(34).fValue$org_jmol_script_T), (function(a,f){return f.apply(null,a)})([v.getList$().get$I(1)],$I$(34).fValue$org_jmol_script_T), (function(a,f){return f.apply(null,a)})([v.getList$().get$I(2)],$I$(34).fValue$org_jmol_script_T)],$I$(22).new3$F$F$F);
break;
case 8:
axes[k]=$I$(22).newV$javajs_util_T3(v.value);
break;
}
}
}i=eval.iToken;
value=axes;
break;
case 12289:
value=this.centerParameter$I(++i);
i=eval.iToken;
break;
case 1094713359:
value=Integer.valueOf$I(this.intParameter$I(++i));
break;
case 12291:
value=$I$(2).TRUE;
this.checkLength$I(i + 1);
break;
}
if (value == null ) switch (eval.theTok) {
case 1073742335:
key="on";
value=$I$(2).TRUE;
break;
case 1073742334:
key="on";
value=$I$(2).FALSE;
break;
case 1073742138:
if (this.isFloatParameter$I(i + 1)) {
value=Float.valueOf$F(this.floatParameter$I(++i));
} else if (eval.isCenterParameter$I(i)) {
var p=this.centerParameter$I(i);
value=Clazz.array(Float.TYPE, -1, [p.x, p.y, p.z]);
} else {
value=eval.floatParameterSet$I$I$I(++i, 3, 3);
}i=eval.iToken;
break;
case 12290:
case 10:
case 1073742325:
key="atoms";
value=this.atomExpressionAt$I(i);
i=eval.iToken;
break;
case 1765808134:
case 603979967:
case 1073742074:
translucentLevel=this.getColorTrans$org_jmol_script_ScriptEval$I$Z$IA(eval, i, true, colorArgb);
i=eval.iToken;
continue;
case 1073742075:
value=this.paramAsStr$I(++i);
break;
}
if (value == null ) this.invArg$();
this.setShapeProperty$I$S$O(20, key.toLowerCase$(), value);
}
this.finalizeObject$I$I$F$I$Z$O$I$javajs_util_BS(20, colorArgb[0], translucentLevel, 0, false, null, 0, null);
this.setShapeProperty$I$S$O(20, "thisID", null);
}, p$1);

Clazz.newMeth(C$, 'image', function () {
if (!this.chk) this.vwr.getConsole$();
var pt=1;
var id=null;
if (this.tokAt$I(1) == 1073741974) {
id=this.e.optParameterAsString$I(++pt);
pt++;
}var fileName=this.e.optParameterAsString$I(pt);
var isClose=this.e.optParameterAsString$I(this.slen - 1).equalsIgnoreCase$S("close");
if (!isClose && (this.slen == pt || this.slen == pt + 2 ) ) {
var width=(this.slen == pt + 2 ? this.intParameter$I(pt++) : -1);
var height=(width < 0 ? -1 : this.intParameter$I(pt));
var params=Clazz.new_($I$(13,1));
params.put$O$O("fileName", "\u0001\u0001" + id);
params.put$O$O("backgroundColor", Integer.valueOf$I(this.vwr.getBackgroundArgb$()));
params.put$O$O("type", "png");
params.put$O$O("quality", Integer.valueOf$I(-1));
params.put$O$O("width", Integer.valueOf$I(width));
params.put$O$O("height", Integer.valueOf$I(height));
if (!this.chk) this.vwr.processWriteOrCapture$java_util_Map(params);
return;
}pt++;
if (isClose) {
switch (this.slen) {
case 2:
fileName="closeall";
break;
case 3:
case 4:
break;
default:
this.checkLength$I(0);
}
}if (!this.chk) this.vwr.fm.loadImage$O$S$Z(isClose ? "\u0001close" : fileName, "\u0001" + fileName + "\u0001" + ("".equals$O(id) || id == null   ? null : id) , false);
}, p$1);

Clazz.newMeth(C$, 'invertSelected', function () {
var eval=this.e;
var pt=null;
var plane=null;
var bs=null;
var iAtom=-2147483648;
var ipt=1;
switch (this.tokAt$I(1)) {
case 0:
if (this.chk) return;
bs=this.vwr.bsA$();
pt=this.vwr.ms.getAtomSetCenter$javajs_util_BS(bs);
this.vwr.invertAtomCoordPt$javajs_util_P3$javajs_util_BS(pt, bs);
return;
case 528443:
case 1140850689:
ipt++;
case 10:
case 1073742325:
case 12290:
bs=this.atomExpressionAt$I(ipt);
if (!eval.isAtomExpression$I(eval.iToken + 1)) {
eval.checkLengthErrorPt$I$I(eval.iToken + 1, eval.iToken + 1);
if (!this.chk) {
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
this.vwr.invertRingAt$I$Z(i, false);
}
}return;
}iAtom=bs.nextSetBit$I(0);
bs=this.atomExpressionAt$I(eval.iToken + 1);
break;
case 134217751:
pt=eval.centerParameter$I$OA(2, null);
break;
case 134217750:
plane=eval.planeParameter$I(1);
break;
case 134219265:
plane=eval.hklParameter$I(2);
break;
}
eval.checkLengthErrorPt$I$I(eval.iToken + 1, 1);
if (plane == null  && pt == null   && iAtom == -2147483648 ) this.invArg$();
if (this.chk) return;
if (iAtom == -1) return;
this.vwr.invertSelected$javajs_util_P3$javajs_util_P4$I$javajs_util_BS(pt, plane, iAtom, bs);
}, p$1);

Clazz.newMeth(C$, 'mapProperty', function () {
var bsFrom;
var bsTo;
var property1;
var property2;
var mapKey;
var tokProp1=0;
var tokProp2=0;
var tokKey=0;
var eval=this.e;
while (true){
if (this.tokAt$I(1) == 1113589787) {
bsFrom=this.vwr.bsA$();
bsTo=this.atomExpressionAt$I(2);
property1=property2="selected";
} else {
bsFrom=this.atomExpressionAt$I(1);
if (this.tokAt$I(++eval.iToken) != 1073742336 || !(function(a,f){return f.apply(null,a)})([tokProp1=this.tokAt$I(++eval.iToken), 1077936128],$I$(14).tokAttr$I$I) ) break;
property1=this.paramAsStr$I(eval.iToken);
bsTo=this.atomExpressionAt$I(++eval.iToken);
if (this.tokAt$I(++eval.iToken) != 1073742336 || !(function(a,f){return f.apply(null,a)})([tokProp2=this.tokAt$I(++eval.iToken), 2048],$I$(14).tokAttr$I$I) ) break;
property2=this.paramAsStr$I(eval.iToken);
}if ((function(a,f){return f.apply(null,a)})([tokKey=this.tokAt$I(eval.iToken + 1), 1077936128],$I$(14).tokAttr$I$I)) mapKey=this.paramAsStr$I(++eval.iToken);
 else mapKey=(function(a,f){return f.apply(null,a)})([tokKey=1094715393],$I$(14).nameOf$I);
eval.checkLast$I(eval.iToken);
if (this.chk) return;
var bsOut=null;
this.showString$S("mapping " + property1.toUpperCase$() + " for " + bsFrom.cardinality$() + " atoms to " + property2.toUpperCase$() + " for " + bsTo.cardinality$() + " atoms using " + mapKey.toUpperCase$() );
if ($I$(14).tokAttrOr$I$I$I(tokProp1, 1094713344, 1111490560) && $I$(14).tokAttrOr$I$I$I(tokProp2, 1094713344, 1111490560) && $I$(14).tokAttrOr$I$I$I(tokKey, 1094713344, 1111490560)  ) {
var data1=this.getBitsetPropertyFloat$javajs_util_BS$I$S$F$F(bsFrom, tokProp1 | 224, null, NaN, NaN);
var data2=this.getBitsetPropertyFloat$javajs_util_BS$I$S$F$F(bsFrom, tokKey | 224, null, NaN, NaN);
var data3=this.getBitsetPropertyFloat$javajs_util_BS$I$S$F$F(bsTo, tokKey | 224, null, NaN, NaN);
var isProperty=(tokProp2 == 1715472409);
var dataOut=Clazz.array(Float.TYPE, [isProperty ? this.vwr.ms.ac : data3.length]);
bsOut=Clazz.new_($I$(17,1));
if (data1.length == data2.length) {
var ht=Clazz.new_($I$(13,1));
for (var i=0; i < data1.length; i++) {
ht.put$O$O(Float.valueOf$F(data2[i]), Float.valueOf$F(data1[i]));
}
var pt=-1;
var nOut=0;
for (var i=0; i < data3.length; i++) {
pt=bsTo.nextSetBit$I(pt + 1);
var F=ht.get$O(Float.valueOf$F(data3[i]));
if (F == null ) continue;
bsOut.set$I(pt);
dataOut[(isProperty ? pt : nOut)]=F.floatValue$();
nOut++;
}
if (isProperty) this.vwr.setData$S$OA$I$I$I$I$I(property2, Clazz.array(java.lang.Object, -1, [property2, dataOut, bsOut, Integer.valueOf$I(1), $I$(2).TRUE]), this.vwr.ms.ac, 0, 0, 2147483647, 0);
 else if (!$I$(14).tokAttr$I$I(tokProp2, 2048)) this.error$I(56);
 else this.vwr.setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA(bsOut, tokProp2, 0, 0, null, dataOut, null);
}}if (bsOut == null ) {
var format="{" + mapKey + "=%[" + mapKey + "]}." + property2 + " = %[" + property1 + "]" ;
var data=this.getBitsetIdent$javajs_util_BS$S$O$Z$I$Z(bsFrom, format, null, false, 2147483647, false);
var sb=Clazz.new_($I$(35,1));
for (var i=0; i < data.length; i++) if (data[i].indexOf$S("null") < 0) sb.append$S(data[i]).appendC$C("\n");

if ($I$(5).debugging) (function(a,f){return f.apply(null,a)})([sb.toString()],$I$(5).debug$S);
var bsSubset=$I$(15).copy$javajs_util_BS(this.vwr.slm.bsSubset);
this.vwr.slm.setSelectionSubset$javajs_util_BS(bsTo);
try {
eval.runScript$S(sb.toString());
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
this.vwr.slm.setSelectionSubset$javajs_util_BS(bsSubset);
eval.errorStr$I$S(-1, "Error: " + ex.getMessage$());
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
this.vwr.slm.setSelectionSubset$javajs_util_BS(bsSubset);
eval.errorStr$I$S(-1, "Error: " + er.toString());
}
} else {
throw e$$;
}
}
this.vwr.slm.setSelectionSubset$javajs_util_BS(bsSubset);
}this.showString$S("DONE");
return;
}
this.invArg$();
}, p$1);

Clazz.newMeth(C$, 'minimize', function () {
var bsSelected=null;
var steps=2147483647;
var crit=0;
var addHydrogen=false;
var isSilent=false;
var bsFixed=null;
var isOnly=false;
var minimizer=this.vwr.getMinimizer$Z(false);
for (var i=1; i < this.slen; i++) switch (this.getToken$I(i).tok) {
case 1073741828:
addHydrogen=true;
continue;
case 1073741874:
case 1073742162:
this.checkLength$I(2);
if (this.chk || minimizer == null  ) return;
minimizer.setProperty$S$O(this.paramAsStr$I(i), null);
return;
case 1073741882:
this.checkLength$I(2);
if (this.chk || minimizer == null  ) return;
minimizer.setProperty$S$O("clear", null);
return;
case 1073741894:
if (i != 1) this.invArg$();
var n=0;
var targetValue=0;
var aList=Clazz.array(Integer.TYPE, [5]);
if (this.tokAt$I(++i) == 1073741882) {
this.checkLength$I(3);
} else {
while (n < 4 && !this.isFloatParameter$I(i) ){
aList[++n]=this.atomExpressionAt$I(i).nextSetBit$I(0);
i=this.e.iToken + 1;
}
aList[0]=n;
if (n == 1) this.invArg$();
targetValue=this.floatParameter$I(this.e.checkLast$I(i));
}if (!this.chk) this.vwr.getMinimizer$Z(true).setProperty$S$O("constraint", Clazz.array(java.lang.Object, -1, [aList, Float.valueOf$F(targetValue)]));
return;
case 1073741905:
crit=this.floatParameter$I(++i);
continue;
case 1073741935:
steps=0;
continue;
case 12293:
if (i != 1) this.invArg$();
bsFixed=this.atomExpressionAt$I(++i);
if (bsFixed.nextSetBit$I(0) < 0) bsFixed=null;
i=this.e.iToken;
if (!this.chk) this.vwr.getMinimizer$Z(true).setProperty$S$O("fixed", bsFixed);
if (i + 1 == this.slen) return;
continue;
case 10:
case 1073742325:
isOnly=true;
case 1275082245:
if (this.e.theTok == 1275082245) i++;
bsSelected=this.atomExpressionAt$I(i);
i=this.e.iToken;
if (this.tokAt$I(i + 1) == 1073742072) {
i++;
isOnly=true;
}continue;
case 1073742148:
isSilent=true;
break;
case 266298:
steps=this.intParameter$I(++i);
continue;
default:
this.invArg$();
break;
}

if (!this.chk) try {
this.vwr.minimize$org_jmol_api_JmolScriptEvaluator$I$F$javajs_util_BS$javajs_util_BS$F$Z$Z$Z$Z(this.e, steps, crit, bsSelected, bsFixed, 0, addHydrogen, isOnly, isSilent, false);
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
throw Clazz.new_($I$(25,1).c$$org_jmol_script_ScriptEval$S$I,[this.e, "minimize", 1]);
} else {
throw e1;
}
}
}, p$1);

Clazz.newMeth(C$, 'modulation', function () {
var qtOffset=null;
var eval=this.e;
var mod=true;
var isQ=false;
var bs=null;
var i=1;
switch (this.getToken$I(i).tok) {
case 1073742334:
mod=false;
case 0:
case 1073742335:
break;
case 12290:
case 10:
case 1073742325:
bs=this.atomExpressionAt$I(1);
switch (this.tokAt$I(eval.iToken + 1)) {
case 0:
break;
case 1073742334:
mod=false;
case 1073742335:
eval.iToken++;
break;
}
eval.checkLast$I(eval.iToken);
break;
case 1073742332:
case 8:
qtOffset=eval.getPoint3f$I$Z$Z(1, false, true);
isQ=(this.tokAt$I(eval.iToken + 1) == 1073742335);
break;
default:
var s=eval.theToken.value.toString();
i++;
if (s.equalsIgnoreCase$S("t")) {
eval.theTok=3;
} else if (s.equalsIgnoreCase$S("m") || s.equalsIgnoreCase$S("q") ) {
eval.theTok=2;
} else {
this.invArg$();
}case 3:
case 2:
switch (eval.theTok) {
case 3:
if (this.isFloatParameter$I(i)) {
var t1=this.floatParameter$I(i);
qtOffset=$I$(7).new3$F$F$F(t1, t1, t1);
} else {
qtOffset=eval.getPoint3f$I$Z$Z(i, false, true);
}break;
case 2:
if (this.tokAt$I(i) == 2) {
var t=this.intParameter$I(i);
qtOffset=$I$(7).new3$F$F$F(t, t, t);
} else {
qtOffset=eval.getPoint3f$I$Z$Z(i, false, true);
}isQ=true;
break;
}
break;
case 1073742138:
var scale=this.floatParameter$I(2);
if (!this.chk) this.vwr.setFloatProperty$S$F("modulationScale", scale);
return;
}
if (!this.chk) {
this.vwr.tm.setVibrationPeriod$F(0);
this.vwr.setModulation$javajs_util_BS$Z$javajs_util_P3$Z(bs, mod, qtOffset, isQ);
}}, p$1);

Clazz.newMeth(C$, 'mutate', function () {
var bs;
var i;
switch (this.tokAt$I(1)) {
case 2:
this.st[1]=$I$(14).o$I$O(4, "" + this.st[1].value);
default:
bs=this.atomExpressionAt$I(1);
i=++this.e.iToken;
break;
case 268435633:
bs=this.vwr.getAllAtoms$();
i=2;
break;
}
bs.and$javajs_util_BS(this.vwr.getModelUndeletedAtomsBitSet$I(this.vwr.ms.mc - 1));
var iatom=bs.length$() - 1;
var imodel=0;
if (iatom < 0 || (imodel=this.vwr.ms.at[iatom].mi) != this.vwr.ms.mc - 1  || this.vwr.ms.isTrajectory$I(imodel) ) return;
var group=this.e.optParameterAsString$I(i);
this.e.checkLast$I(i);
if (this.chk || !this.vwr.ms.am[imodel].isBioModel ) return;
var isFile=(this.tokAt$I(i) == 4 && !group.startsWith$S("~") );
var list=null;
if (isFile) {
list=Clazz.array(String, -1, [group]);
group=null;
} else {
group=$I$(1).replaceAllCharacters$S$S$S(group, ",; \t\n", " ").trim$().toUpperCase$();
var isOneLetter=group.startsWith$S("~");
if (isOneLetter || group.length$() != 3  || !this.vwr.getJBR$().isKnownPDBGroup$S$I(group, 20) ) group=this.vwr.getJBR$().toStdAmino3$S(isOneLetter ? group.substring$I(1) : group);
list=$I$(1).getTokens$S(group);
}if (list.length > 0) this.vwr.ms.bioModelset.mutate$javajs_util_BS$S$SA(bs, group, list);
}, p$1);

Clazz.newMeth(C$, 'navigate', function () {
var eval=this.e;
if (this.slen == 1) {
eval.setBooleanProperty$S$Z("navigationMode", true);
return;
}var rotAxis=$I$(22).new3$F$F$F(0, 1, 0);
var list=Clazz.new_($I$(16,1));
var pt;
if (this.slen == 2) {
switch (this.getToken$I(1).tok) {
case 1073742335:
case 1073742334:
if (this.chk) return;
eval.setObjectMad10$I$S$I(34, "axes", 10);
this.setShapeProperty$I$S$O(34, "position", $I$(7).new3$F$F$F(50, 50, 3.4028235E38));
eval.setBooleanProperty$S$Z("navigationMode", true);
this.vwr.tm.setNavOn$Z(eval.theTok == 1073742335);
return;
case 1073742162:
if (!this.chk) this.vwr.tm.setNavXYZ$F$F$F(0, 0, 0);
return;
case 8:
case 1112152078:
break;
default:
this.invArg$();
}
}if (!this.chk && !this.vwr.getBoolean$I(603979889) ) eval.setBooleanProperty$S$Z("navigationMode", true);
for (var i=1; i < this.slen; i++) {
var timeSec=(this.isFloatParameter$I(i) ? this.floatParameter$I(i++) : 2.0);
if (timeSec < 0 ) this.invArg$();
if (!this.chk && timeSec > 0  ) eval.refresh$Z(false);
switch (this.getToken$I(i).tok) {
case 8:
case 1073742332:
pt=this.getPoint3f$I$Z(i, true);
eval.iToken++;
if (eval.iToken != this.slen) this.invArg$();
if (!this.chk) this.vwr.tm.setNavXYZ$F$F$F(pt.x, pt.y, pt.z);
return;
case 554176526:
var depth=this.floatParameter$I(++i);
if (!this.chk) list.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(554176526), Float.valueOf$F(timeSec), Float.valueOf$F(depth)]));
continue;
case 12289:
pt=this.centerParameter$I(++i);
i=eval.iToken;
if (!this.chk) list.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(134217751), Float.valueOf$F(timeSec), pt]));
continue;
case 528432:
switch (this.getToken$I(++i).tok) {
case 1111492629:
rotAxis.set$F$F$F(1, 0, 0);
i++;
break;
case 1111492630:
rotAxis.set$F$F$F(0, 1, 0);
i++;
break;
case 1111492631:
rotAxis.set$F$F$F(0, 0, 1);
i++;
break;
case 8:
case 1073742332:
rotAxis.setT$javajs_util_T3(this.getPoint3f$I$Z(i, true));
i=eval.iToken + 1;
break;
case 1073741824:
this.invArg$();
break;
}
var degrees=this.floatParameter$I(i);
if (!this.chk) list.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(528432), Float.valueOf$F(timeSec), rotAxis, Float.valueOf$F(degrees)]));
continue;
case 4160:
var x=NaN;
var y=NaN;
if (this.isFloatParameter$I(++i)) {
x=this.floatParameter$I(i);
y=this.floatParameter$I(++i);
} else {
switch (this.tokAt$I(i)) {
case 1111492629:
x=this.floatParameter$I(++i);
break;
case 1111492630:
y=this.floatParameter$I(++i);
break;
default:
pt=this.centerParameter$I(i);
i=eval.iToken;
if (!this.chk) list.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(4160), Float.valueOf$F(timeSec), pt]));
continue;
}
}if (!this.chk) list.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(268435634), Float.valueOf$F(timeSec), Float.valueOf$F(x), Float.valueOf$F(y)]));
continue;
case 268435632:
continue;
case 1112152078:
var pathGuide;
var vp=Clazz.new_($I$(16,1));
var bs;
if (eval.isAtomExpression$I(i + 1)) {
bs=this.atomExpressionAt$I(++i);
i=eval.iToken;
} else {
bs=this.vwr.bsA$();
}if (this.chk) return;
this.vwr.getPolymerPointsAndVectors$javajs_util_BS$javajs_util_Lst(bs, vp);
var n;
if ((n=vp.size$()) > 0) {
pathGuide=Clazz.array($I$(7), [n, null]);
for (var j=0; j < n; j++) {
pathGuide[j]=vp.get$I(j);
}
list.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(1112152078), Float.valueOf$F(timeSec), pathGuide]));
continue;
}break;
case 1073742084:
var path;
var theta=null;
if (this.getToken$I(i + 1).tok == 1073742330) {
i++;
var pathID=eval.objectNameParameter$I(++i);
if (this.chk) return;
this.setShapeProperty$I$S$O(22, "thisID", pathID);
path=this.getShapeProperty$I$S(22, "vertices");
eval.refresh$Z(false);
if (path == null ) this.invArg$();
var indexStart=((this.isFloatParameter$I(i + 1) ? this.floatParameter$I(++i) : 0)|0);
var indexEnd=((this.isFloatParameter$I(i + 1) ? this.floatParameter$I(++i) : 2147483647)|0);
list.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(1073742084), Float.valueOf$F(timeSec), path, theta, Clazz.array(Integer.TYPE, -1, [indexStart, indexEnd])]));
continue;
}var v=Clazz.new_($I$(16,1));
while (eval.isCenterParameter$I(i + 1)){
v.addLast$O(this.centerParameter$I(++i));
i=eval.iToken;
}
if (v.size$() > 0) {
path=v.toArray$OA(Clazz.array($I$(7), [v.size$()]));
if (!this.chk) list.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(1073742084), Float.valueOf$F(timeSec), path, theta, Clazz.array(Integer.TYPE, -1, [0, 2147483647])]));
continue;
}default:
this.invArg$();
}
}
if (!this.chk && !this.vwr.isJmolDataFrame$() ) this.vwr.tm.navigateList$org_jmol_api_JmolScriptEvaluator$javajs_util_Lst(eval, list);
}, p$1);

Clazz.newMeth(C$, 'plot$org_jmol_script_TA', function (args) {
var eval=this.e;
var modelIndex=this.vwr.am.cmi;
if (modelIndex < 0) eval.errorStr$I$S(30, "plot");
modelIndex=this.vwr.ms.getJmolDataSourceFrame$I(modelIndex);
var pt=args.length - 1;
var isReturnOnly=(args !== this.st );
var pdbFormat=true;
var statementSave=this.st;
if (isReturnOnly) eval.st=this.st=args;
var tokCmd=(isReturnOnly ? 134222350 : args[0].tok);
var pt0=(isReturnOnly || tokCmd == 134221850  || tokCmd == 4138  ? 0 : 1);
var filename=null;
var makeNewFrame=true;
var isDraw=false;
switch (tokCmd) {
case 4133:
case 134221850:
case 4138:
break;
case 135176:
makeNewFrame=false;
isDraw=true;
break;
case 134222350:
makeNewFrame=false;
pdbFormat=false;
break;
case 134221856:
makeNewFrame=false;
if (C$.tokAtArray$I$org_jmol_script_TA(pt, args) == 4) {
filename=this.stringParameter$I(pt--);
} else if (C$.tokAtArray$I$org_jmol_script_TA(pt - 1, args) == 1073742336) {
filename=this.paramAsStr$I(pt - 2) + "." + this.paramAsStr$I(pt) ;
pt-=3;
} else {
eval.st=this.st=statementSave;
eval.iToken=this.st.length;
this.error$I(13);
}eval.slen=this.slen=pt + 1;
break;
}
var qFrame="";
var parameters=null;
var stateScript="";
var isQuaternion=false;
var isDerivative=false;
var isSecondDerivative=false;
var isRamachandranRelative=false;
var props=Clazz.array(String, [3]);
var propToks=Clazz.array(Integer.TYPE, [3]);
var bs=(function(a,f){return f.apply(null,a)})([this.vwr.bsA$()],$I$(15).copy$javajs_util_BS);
var preSelected="; select " + $I$(9).eBS$javajs_util_BS(bs) + ";\n " ;
var type=eval.optParameterAsString$I(pt).toLowerCase$();
var minXYZ=null;
var maxXYZ=null;
var format=null;
var tok=C$.tokAtArray$I$org_jmol_script_TA(pt0, args);
if (tok == 4) tok=$I$(14).getTokFromName$S(args[pt0].value);
switch (tok) {
default:
eval.iToken=1;
this.invArg$();
break;
case 134221834:
eval.iToken=1;
type="data";
preSelected="";
break;
case 1715472409:
eval.iToken=pt0 + 1;
for (var i=0; i < 3; i++) {
switch (this.tokAt$I(eval.iToken)) {
case 4:
propToks[i]=(function(a,f){return f.apply(null,a)})([eval.getToken$I(eval.iToken).value],$I$(14).getTokFromName$S);
break;
default:
propToks[i]=this.tokAt$I(eval.iToken);
break;
case 0:
if (i == 0) this.invArg$();
case 1287653388:
case 32:
case 64:
i=2;
continue;
}
if (propToks[i] != 1715472409 && !$I$(14).tokAttr$I$I(propToks[i], 1077936128) ) this.invArg$();
props[i]=this.getToken$I(eval.iToken).value.toString();
eval.iToken++;
}
if (this.tokAt$I(eval.iToken) == 1287653388) {
format=this.stringParameter$I(++eval.iToken);
pdbFormat=false;
eval.iToken++;
}if (this.tokAt$I(eval.iToken) == 32) {
minXYZ=this.getPoint3f$I$Z(++eval.iToken, false);
eval.iToken++;
}if (this.tokAt$I(eval.iToken) == 64) {
maxXYZ=this.getPoint3f$I$Z(++eval.iToken, false);
eval.iToken++;
}type="property " + props[0] + (props[1] == null  ? "" : " " + props[1]) + (props[2] == null  ? "" : " " + props[2]) ;
if (bs.nextSetBit$I(0) < 0) bs=this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
stateScript="select " + $I$(9).eBS$javajs_util_BS(bs) + ";\n " ;
break;
case 4138:
if (type.equalsIgnoreCase$S("draw")) {
isDraw=true;
type=eval.optParameterAsString$I(--pt).toLowerCase$();
}isRamachandranRelative=(pt > pt0 && type.startsWith$S("r") );
type="ramachandran" + (isRamachandranRelative ? " r" : "") + (tokCmd == 135176 ? " draw" : "") ;
break;
case 134221850:
case 136314895:
qFrame=" \"" + this.vwr.getQuaternionFrame$() + "\"" ;
stateScript="set quaternionFrame" + qFrame + ";\n  " ;
isQuaternion=true;
if (type.equalsIgnoreCase$S("draw")) {
isDraw=true;
type=eval.optParameterAsString$I(--pt).toLowerCase$();
}isDerivative=(type.startsWith$S("deriv") || type.startsWith$S("diff") );
isSecondDerivative=(isDerivative && type.indexOf$S("2") > 0 );
if (isDerivative) pt--;
if (type.equalsIgnoreCase$S("helix") || type.equalsIgnoreCase$S("axis") ) {
isDraw=true;
isDerivative=true;
pt=-1;
}type=((pt <= pt0 ? "" : eval.optParameterAsString$I(pt)) + "w").substring$I$I(0, 1);
if (type.equals$O("a") || type.equals$O("r") ) isDerivative=true;
if (!$I$(1).isOneOf$S$S(type, ";w;x;y;z;r;a;")) eval.evalError$S$S("QUATERNION [w,x,y,z,a,r] [difference][2]", null);
type="quaternion " + type + (isDerivative ? " difference" : "") + (isSecondDerivative ? "2" : "") + (isDraw ? " draw" : "") ;
break;
}
this.st=statementSave;
if (this.chk) return "";
if (makeNewFrame) {
stateScript += "plot " + type;
var ptDataFrame=this.vwr.ms.getJmolDataFrameIndex$I$S(modelIndex, stateScript);
if (ptDataFrame > 0 && tokCmd != 134221856  && tokCmd != 134222350 ) {
this.vwr.setCurrentModelIndexClear$I$Z(ptDataFrame, true);
return "";
}}var dataX=null;
var dataY=null;
var dataZ=null;
var propData=Clazz.array(String, [3]);
if (tok == 1715472409) {
dataX=this.getBitsetPropertyFloat$javajs_util_BS$I$S$F$F(bs, propToks[0] | 224, propToks[0] == 1715472409 ? props[0] : null, (minXYZ == null  ? NaN : minXYZ.x), (maxXYZ == null  ? NaN : maxXYZ.x));
propData[0]=props[0] + " " + $I$(9).eAF$FA(dataX) ;
if (props[1] != null ) {
dataY=this.getBitsetPropertyFloat$javajs_util_BS$I$S$F$F(bs, propToks[1] | 224, propToks[1] == 1715472409 ? props[1] : null, (minXYZ == null  ? NaN : minXYZ.y), (maxXYZ == null  ? NaN : maxXYZ.y));
propData[1]=props[1] + " " + $I$(9).eAF$FA(dataY) ;
}if (props[2] != null ) {
dataZ=this.getBitsetPropertyFloat$javajs_util_BS$I$S$F$F(bs, propToks[2] | 224, propToks[2] == 1715472409 ? props[2] : null, (minXYZ == null  ? NaN : minXYZ.z), (maxXYZ == null  ? NaN : maxXYZ.z));
propData[2]=props[2] + " " + $I$(9).eAF$FA(dataZ) ;
}if (minXYZ == null ) minXYZ=(function(a,f){return f.apply(null,a)})([p$1.getPlotMinMax$FA$Z$I.apply(this, [dataX, false, propToks[0]]), p$1.getPlotMinMax$FA$Z$I.apply(this, [dataY, false, propToks[1]]), p$1.getPlotMinMax$FA$Z$I.apply(this, [dataZ, false, propToks[2]])],$I$(7).new3$F$F$F);
if (maxXYZ == null ) maxXYZ=(function(a,f){return f.apply(null,a)})([p$1.getPlotMinMax$FA$Z$I.apply(this, [dataX, true, propToks[0]]), p$1.getPlotMinMax$FA$Z$I.apply(this, [dataY, true, propToks[1]]), p$1.getPlotMinMax$FA$Z$I.apply(this, [dataZ, true, propToks[2]])],$I$(7).new3$F$F$F);
$I$(5).info$S("plot min/max: " + minXYZ + " " + maxXYZ );
var center=null;
var factors=null;
if (pdbFormat) {
factors=$I$(7).new3$F$F$F(1, 1, 1);
center=Clazz.new_($I$(7,1));
center.ave$javajs_util_T3$javajs_util_T3(maxXYZ, minXYZ);
factors.sub2$javajs_util_T3$javajs_util_T3(maxXYZ, minXYZ);
factors.set$F$F$F(factors.x / 200, factors.y / 200, factors.z / 200);
if ($I$(14).tokAttr$I$I(propToks[0], 1094713344)) {
factors.x=1;
center.x=0;
} else if (factors.x > 0.1  && factors.x <= 10  ) {
factors.x=1;
}if ($I$(14).tokAttr$I$I(propToks[1], 1094713344)) {
factors.y=1;
center.y=0;
} else if (factors.y > 0.1  && factors.y <= 10  ) {
factors.y=1;
}if ($I$(14).tokAttr$I$I(propToks[2], 1094713344)) {
factors.z=1;
center.z=0;
} else if (factors.z > 0.1  && factors.z <= 10  ) {
factors.z=1;
}if (props[2] == null  || props[1] == null  ) center.z=minXYZ.z=maxXYZ.z=factors.z=0;
for (var i=0; i < dataX.length; i++) dataX[i]=(dataX[i] - center.x) / factors.x;

if (props[1] != null ) for (var i=0; i < dataY.length; i++) dataY[i]=(dataY[i] - center.y) / factors.y;

if (props[2] != null ) for (var i=0; i < dataZ.length; i++) dataZ[i]=(dataZ[i] - center.z) / factors.z;

}parameters=Clazz.array(java.lang.Object, -1, [bs, dataX, dataY, dataZ, minXYZ, maxXYZ, factors, center, format, propData]);
}if (tokCmd == 134221856) return this.vwr.writeFileData$S$S$I$OA(filename, "PLOT_" + type, modelIndex, parameters);
var data=(type.equals$O("data") ? "1 0 H 0 0 0 # Jmol PDB-encoded data" : this.vwr.getPdbData$I$S$javajs_util_BS$OA$javajs_util_OC$Z(modelIndex, type, null, parameters, null, true));
if (tokCmd == 134222350) return data;
if ($I$(5).debugging) $I$(5).debug$S(data);
if (tokCmd == 135176) {
eval.runScript$S(data);
return "";
}var savedFileInfo=this.vwr.fm.getFileInfo$();
var oldAppendNew=this.vwr.getBoolean$I(603979792);
this.vwr.g.appendNew=true;
var isOK=(data != null  && this.vwr.openStringInlineParamsAppend$S$java_util_Map$Z(data, null, true) == null  );
this.vwr.g.appendNew=oldAppendNew;
this.vwr.fm.setFileInfo$SA(savedFileInfo);
if (!isOK) return "";
var modelCount=this.vwr.ms.mc;
this.vwr.ms.setJmolDataFrame$S$I$I(stateScript, modelIndex, modelCount - 1);
if (tok != 1715472409) stateScript += ";\n" + preSelected;
var ss=this.vwr.addStateScript$S$Z$Z(stateScript, true, false);
var radius=150;
var script;
switch (tok) {
default:
script="frame 0.0; frame last; reset;select visible;wireframe only;";
radius=10;
break;
case 1715472409:
this.vwr.setFrameTitle$I$S(modelCount - 1, type + " plot for model " + this.vwr.getModelNumberDotted$I(modelIndex) );
script="frame 0.0; frame last; reset;select visible; spacefill 3.0; wireframe 0;draw plotAxisX" + modelCount + " {100 -100 -100} {-100 -100 -100} \"" + props[0] + "\";" + "draw plotAxisY" + modelCount + " {-100 100 -100} {-100 -100 -100} \"" + props[1] + "\";" ;
if (props[2] != null ) script += "draw plotAxisZ" + modelCount + " {-100 -100 100} {-100 -100 -100} \"" + props[2] + "\";" ;
break;
case 4138:
this.vwr.setFrameTitle$I$S(modelCount - 1, "ramachandran plot for model " + this.vwr.getModelNumberDotted$I(modelIndex));
script="frame 0.0; frame last; reset;select visible; color structure; spacefill 3.0; wireframe 0;draw ramaAxisX" + modelCount + " {100 0 0} {-100 0 0} \"phi\";" + "draw ramaAxisY" + modelCount + " {0 100 0} {0 -100 0} \"psi\";" ;
break;
case 134221850:
case 136314895:
this.vwr.setFrameTitle$I$S(modelCount - 1, type.replace$C$C("w", " ") + qFrame + " for model " + this.vwr.getModelNumberDotted$I(modelIndex) );
var color=($I$(26).getHexCode$H(this.vwr.cm.colixBackgroundContrast));
script="frame 0.0; frame last; reset;select visible; wireframe 0; spacefill 3.0; isosurface quatSphere" + modelCount + " color " + color + " sphere 100.0 mesh nofill frontonly translucent 0.8;" + "draw quatAxis" + modelCount + "X {100 0 0} {-100 0 0} color red \"x\";" + "draw quatAxis" + modelCount + "Y {0 100 0} {0 -100 0} color green \"y\";" + "draw quatAxis" + modelCount + "Z {0 0 100} {0 0 -100} color blue \"z\";" + "color structure;" + "draw quatCenter" + modelCount + "{0 0 0} scale 0.02;" ;
break;
}
eval.runScript$S(script + preSelected);
ss.setModelIndex$I(this.vwr.am.cmi);
this.vwr.setRotationRadius$F$Z(radius, true);
eval.sm.loadShape$I(31);
this.showString$S("frame " + this.vwr.getModelNumberDotted$I(modelCount - 1) + (type.length$() > 0 ? " created: " + type + (isQuaternion ? qFrame : "")  : "") );
return "";
}, p$1);

Clazz.newMeth(C$, 'polyhedra', function () {
var eval=this.e;
var haveBonds=(this.slen == 1);
var haveCenter=false;
var needsGenerating=haveBonds;
var onOffDelete=false;
var typeSeen=false;
var edgeParameterSeen=false;
var scale=NaN;
var nAtomSets=0;
eval.sm.loadShape$I(21);
this.setShapeProperty$I$S$O(21, "init", $I$(2).TRUE);
var translucentLevel=3.4028235E38;
var radius=-1;
var colorArgb=Clazz.array(Integer.TYPE, -1, [-2147483648]);
var noToParam=-1;
var offset=null;
var id=null;
var ok=false;
var faces=null;
var points=null;
for (var i=1; i < this.slen; ++i) {
var propertyName=null;
var propertyValue=null;
switch (this.getToken$I(i).tok) {
case 1073742197:
scale=NaN;
case 1073741872:
var index=(this.e.theTok == 1073742197 ? -1 : (this.tokAt$I(i + 1) == 2 ? this.intParameter$I(++i) : 1));
if (!this.chk) ($I$(18).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.util.BZone", this.vwr, "script")).setViewer$org_jmol_viewer_Viewer(this.vwr).createBZ$I$OA$Z$S$F(index, null, false, id, scale);
this.setShapeProperty$I$S$O(21, "init", $I$(2).FALSE);
return;
case 6:
propertyName="info";
propertyValue=this.e.theToken.value;
needsGenerating=true;
break;
case 134217751:
propertyName="points";
propertyValue=Float.valueOf$F(this.tokAt$I(++i) == 1073742334 ? 0 : this.e.floatParameter$I(i));
ok=true;
break;
case 1073742138:
scale=this.floatParameter$I(++i);
ok=true;
continue;
case 1814695966:
if (id != null ) this.invArg$();
propertyName="unitCell";
propertyValue=$I$(2).TRUE;
needsGenerating=true;
break;
case 1073742072:
this.e.restrictSelected$Z$Z(false, false);
eval.theTok=1073742335;
case 1073742335:
case 12291:
case 1073742334:
if (i + 1 != this.slen || needsGenerating  || nAtomSets > 1 ) this.error$I(18);
propertyName=(eval.theTok == 1073742334 ? "off" : eval.theTok == 1073742335 ? "on" : "delete");
onOffDelete=true;
break;
case 7:
if (id == null  || needsGenerating ) this.invArg$();
needsGenerating=true;
faces=this.getIntArray2$I(i);
points=this.getAllPoints$I(eval.iToken + 1);
i=eval.iToken;
if (Clazz.instanceOf(points[0], "org.jmol.modelset.Atom")) this.setShapeProperty$I$S$O(21, "model", Integer.valueOf$I((points[0]).getModelIndex$()));
propertyName="definedFaces";
propertyValue=Clazz.array(java.lang.Object, -1, [faces, points]);
break;
case 1073741961:
propertyName="full";
break;
case 2:
if (id != null ) this.invArg$();
propertyName="nVertices";
propertyValue=Integer.valueOf$I(this.intParameter$I(i));
needsGenerating=true;
if (this.tokAt$I(i + 1) == 268435504) i++;
break;
case 1677721602:
if (id != null ) this.invArg$();
if (nAtomSets > 0) this.invPO$();
needsGenerating=true;
propertyName="bonds";
haveBonds=true;
break;
case 1073741852:
if (radius != -1 ) this.invArg$();
radius=0;
i--;
case 1665140738:
i++;
case 3:
if (id != null ) this.invArg$();
if (nAtomSets > 0) this.invPO$();
propertyName=(radius <= 0  ? "radius" : "radius1");
propertyValue=Float.valueOf$F(radius=(radius == 0  ? 0 : this.floatParameter$I(i)));
needsGenerating=true;
break;
case 1073742066:
if (!this.isFloatParameter$I(i + 1)) {
offset=this.e.centerParameter$I$OA(++i, null);
i=eval.iToken;
ok=true;
continue;
}case 1073741937:
this.setShapeProperty$I$S$O(21, "collapsed", null);
case 1073742099:
case 1073741924:
propertyName=$I$(14).nameOf$I(eval.theTok);
switch (this.tokAt$I(i + 1)) {
case 268435860:
case 268435504:
i++;
break;
}
propertyValue=Float.valueOf$F(this.floatParameter$I(++i));
break;
case 1094717454:
if (id == null ) this.invArg$();
propertyName="model";
propertyValue=Integer.valueOf$I(this.intParameter$I(++i));
break;
case 1073742170:
if (nAtomSets > 1 || id != null  && !haveCenter   || noToParam == i ) this.invPO$();
nAtomSets=3;
if (eval.isAtomExpression$I(++i)) {
propertyName=(needsGenerating || haveCenter  ? "to" : "toBitSet");
propertyValue=this.atomExpressionAt$I(i);
} else if (eval.isArrayParameter$I(i)) {
propertyName="toVertices";
propertyValue=eval.getPointArray$I$I$Z(i, -1, false);
} else {
this.error$I(19);
}i=eval.iToken;
needsGenerating=true;
break;
case 12290:
case 10:
case 1073742325:
if (typeSeen) this.invPO$();
switch (++nAtomSets) {
case 1:
if (id != null ) this.invArg$();
propertyName="centers";
break;
case 2:
propertyName="to";
needsGenerating=true;
break;
default:
eval.bad$();
}
propertyValue=this.atomExpressionAt$I(i);
i=eval.iToken;
needsGenerating|=(i + 1 == this.slen);
break;
case 1765808134:
case 603979967:
case 1073742074:
translucentLevel=this.getColorTrans$org_jmol_script_ScriptEval$I$Z$IA(eval, i, true, colorArgb);
i=eval.iToken;
continue;
case 1073741948:
case 1073741886:
if (typeSeen) this.error$I(18);
typeSeen=true;
if (this.isFloatParameter$I(i + 1)) this.setShapeProperty$I$S$O(21, "faceCenterOffset", Float.valueOf$F(this.floatParameter$I(++i)));
propertyName=(this.e.theTok == 1073741886 ? "collapsed" : null);
break;
case 1073742044:
case 1073741933:
case 1073741956:
case 1073741934:
if (edgeParameterSeen) this.error$I(18);
edgeParameterSeen=true;
ok=true;
propertyName=$I$(14).nameOf$I(eval.theTok);
break;
case 1073742182:
case 1073742060:
case 1073741861:
case 1073741958:
case 1073741964:
continue;
case 1073741974:
case 268435633:
case 1073741824:
case 4:
if (!eval.isColorParam$I(i)) {
if (i != 1) this.invPO$();
id=(eval.theTok == 1073741974 ? this.stringParameter$I(++i) : eval.optParameterAsString$I(i));
this.setShapeProperty$I$S$O(21, "thisID", id);
this.setShapeProperty$I$S$O(21, "model", Integer.valueOf$I(this.vwr.am.cmi));
if (!eval.isCenterParameter$I(i + 1)) continue;
propertyName="center";
propertyValue=this.centerParameter$I(++i);
i=eval.iToken;
haveCenter=true;
break;
}default:
if (eval.isColorParam$I(i)) {
colorArgb[0]=eval.getArgbParam$I(i);
if (eval.isCenterParameter$I(i)) noToParam=eval.iToken + 1;
i=eval.iToken;
continue;
}this.invArg$();
}
if (propertyName != null ) this.setShapeProperty$I$S$O(21, propertyName, propertyValue);
if (onOffDelete) return;
}
if (needsGenerating) {
if (!typeSeen && haveBonds ) this.setShapeProperty$I$S$O(21, "bonds", null);
this.setShapeProperty$I$S$O(21, "generate", null);
} else if (!ok) {
this.error$I(19);
}if (offset != null ) this.setShapeProperty$I$S$O(21, "offset", offset);
if (!Float.isNaN$F(scale)) this.setShapeProperty$I$S$O(21, "scale", Float.valueOf$F(scale));
if (colorArgb[0] != -2147483648) this.setShapeProperty$I$S$O(21, "colorThis", Integer.valueOf$I(colorArgb[0]));
if (translucentLevel != 3.4028235E38 ) eval.setShapeTranslucency$I$S$S$F$javajs_util_BS(21, "", "translucentThis", translucentLevel, null);
this.setShapeProperty$I$S$O(21, "init", $I$(2).FALSE);
}, p$1);

Clazz.newMeth(C$, 'write$org_jmol_script_TA', function (args) {
var eval=this.e;
var pt=1;
var pt0=1;
var scripts=null;
var msg=null;
var localPath=null;
var remotePath=null;
var type="SPT";
var isCommand=true;
var showOnly=false;
var isContact=false;
if (args == null ) {
args=this.st;
showOnly=(this.vwr.isApplet && !this.vwr.isSignedApplet  || !this.vwr.haveAccess$org_jmol_viewer_Viewer_ACCESS($I$(36).ALL)  || this.vwr.fm.getPathForAllFiles$().length$() > 0 );
} else {
pt=pt0=0;
isCommand=false;
showOnly=!isCommand;
}var tok=C$.tokAtArray$I$org_jmol_script_TA(pt, args);
if (tok == 4 && !isCommand ) {
var t0=(function(a,f){return f.apply(null,a)})([$I$(34).sValue$org_jmol_script_T(args[0]).toLowerCase$()],$I$(14).getTokenFromName$S);
if (t0 != null ) tok=t0.tok;
}switch (tok) {
case 0:
break;
case 134221850:
case 4138:
case 1715472409:
msg=p$1.plot$org_jmol_script_TA.apply(this, [args]);
return (showOnly ? msg : p$1.writeMsg$S.apply(this, [msg]));
case 134222850:
if (eval.isArrayParameter$I(pt + 1)) {
scripts=eval.stringParameterSet$I(++pt);
localPath=".";
remotePath=".";
pt0=pt=eval.iToken + 1;
tok=this.tokAt$I(pt);
}break;
default:
type=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [pt, args])],$I$(34).sValue$org_jmol_script_T).toUpperCase$();
}
var driverList=this.vwr.getExportDriverList$();
var data=null;
var argCount=(isCommand ? this.slen : args.length);
var type2="";
var val=null;
var is2D=false;
var tVar=null;
var nVibes=0;
var sceneType=null;
var isCoord=false;
var bsFrames=null;
var width=-1;
var height=-1;
var isExport=false;
var fileName=null;
var quality=-2147483648;
if (tok != 0 && isCommand  && this.slen > 1  && this.tokAt$I(this.slen - 2) == 1073741848 ) {
type=this.paramAsStr$I(this.slen - 1).toUpperCase$();
pt0=argCount;
argCount-=2;
tok=0;
}switch (tok) {
case 0:
break;
case 15:
case 6:
type="VAR";
tVar=p$1.tokenAt$I$org_jmol_script_TA.apply(this, [pt++, args]);
break;
case 1073741984:
type="INLINE";
data=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [++pt, args])],$I$(34).sValue$org_jmol_script_T);
pt++;
break;
case 134217762:
type="PGRP";
pt++;
type2=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [pt, args])],$I$(34).sValue$org_jmol_script_T).toLowerCase$();
if (type2.equals$O("draw")) pt++;
break;
case 1073742329:
pt++;
isCoord=true;
break;
case 1073742158:
case 134222850:
val=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [++pt, args])],$I$(34).sValue$org_jmol_script_T).toLowerCase$();
while (val.equals$O("localpath") || val.equals$O("remotepath") ){
if (val.equals$O("localpath")) localPath=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [++pt, args])],$I$(34).sValue$org_jmol_script_T);
 else remotePath=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [++pt, args])],$I$(34).sValue$org_jmol_script_T);
val=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [++pt, args])],$I$(34).sValue$org_jmol_script_T).toLowerCase$();
}
type="SPT";
break;
case 1228935687:
case 134320141:
case 1610616855:
case 135180:
case 1073742015:
case 1073742018:
case 1073877011:
case 1073877010:
case 135188:
pt++;
break;
case 1073741991:
type="ZIPALL";
pt++;
break;
case 36868:
type="VAR";
pt+=2;
break;
case 1073741929:
case 4115:
case 4120:
case 1073742139:
case 4166:
case 1073741824:
case 4:
switch (tok) {
case 4115:
var bsAtoms;
if (pt + 1 < argCount && args[++pt].tok == 1073742325  || args[pt].tok == 10 ) {
bsAtoms=eval.atomExpression$org_jmol_script_TA$I$I$Z$Z$OA$Z(args, pt, 0, true, false, null, true);
pt=eval.iToken + 1;
} else {
bsAtoms=this.vwr.getAllAtoms$();
}if (!this.chk) bsFrames=this.vwr.ms.getModelBS$javajs_util_BS$Z(bsAtoms, true);
break;
case 1073741929:
tok=4120;
is2D=true;
case 4120:
type="IMAGE";
pt++;
break;
case 1073742139:
val=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [++pt, args])],$I$(34).sValue$org_jmol_script_T).toUpperCase$();
if ($I$(1).isOneOf$S$S(val, ";PNG;PNGJ;")) {
sceneType=val;
pt++;
} else {
sceneType="PNG";
}break;
case 4166:
nVibes=eval.intParameterRange$I$I$I(++pt, 1, 10);
if (nVibes == 2147483647) return "";
if (!this.chk) {
this.vwr.tm.setVibrationPeriod$F(0);
if (!eval.isJS) eval.delayScript$I(100);
}pt++;
break;
default:
tok=4120;
break;
}
if (tok == 4120 && pt < args.length ) {
var t=(function(a,f){return f.apply(null,a)})([$I$(34).sValue$org_jmol_script_T(args[pt]).toLowerCase$()],$I$(14).getTokenFromName$S);
if (t != null ) type=$I$(34).sValue$org_jmol_script_T(t).toUpperCase$();
if ((function(a,f){return f.apply(null,a)})([type, driverList.toUpperCase$()],$I$(1).isOneOf$S$S)) {
pt++;
type=type.substring$I$I(0, 1).toUpperCase$() + type.substring$I(1).toLowerCase$();
isExport=true;
if (isCommand) fileName="Jmol." + type.toLowerCase$();
break;
} else if ($I$(1).isOneOf$S$S(type, ";ZIP;ZIPALL;SPT;STATE;")) {
pt++;
break;
} else {
type="IMAGE";
}}if (C$.tokAtArray$I$org_jmol_script_TA(pt, args) == 2) {
width=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [pt++, args])],$I$(34).iValue$org_jmol_script_T);
if (width <= 0) this.invArg$();
height=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [pt++, args])],$I$(34).iValue$org_jmol_script_T);
if (height <= 0) this.invArg$();
}break;
}
if (pt0 < argCount) {
val=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [pt, args])],$I$(34).sValue$org_jmol_script_T);
if (val.equalsIgnoreCase$S("clipboard")) {
if (this.chk) return "";
} else if ((function(a,f){return f.apply(null,a)})([val.toLowerCase$(), ";jpg;jpeg;jpg64;jpeg64;gif;gift;pdf;ppm;png;pngj;pngt;"],$I$(1).isOneOf$S$S)) {
if (C$.tokAtArray$I$org_jmol_script_TA(pt + 1, args) == 2 && C$.tokAtArray$I$org_jmol_script_TA(pt + 2, args) == 2 ) {
width=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [++pt, args])],$I$(34).iValue$org_jmol_script_T);
if (width <= 0) this.invArg$();
height=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [++pt, args])],$I$(34).iValue$org_jmol_script_T);
if (height <= 0) this.invArg$();
}if (C$.tokAtArray$I$org_jmol_script_TA(pt + 1, args) == 2) quality=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [++pt, args])],$I$(34).iValue$org_jmol_script_T);
} else if ((function(a,f){return f.apply(null,a)})([val.toLowerCase$(), ";xyz;xyzrn;xyzvib;mol;mol67;sdf;v2000;v3000;json;pdb;pqr;cml;cif;qcjson;"],$I$(1).isOneOf$S$S)) {
type=val.toUpperCase$();
if (pt + 1 == argCount) pt++;
}if (type.equals$O("IMAGE") && (function(a,f){return f.apply(null,a)})([val.toLowerCase$(), ";jpg;jpeg;jpg64;jpeg64;gif;gift;pdf;ppm;png;pngj;pngt;scene;"],$I$(1).isOneOf$S$S) ) {
type=val.toUpperCase$();
quality=-2147483648;
pt++;
}}if (pt + 2 == argCount) {
(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [++pt, args])],$I$(34).sValue$org_jmol_script_T);
}switch (C$.tokAtArray$I$org_jmol_script_TA(pt, args)) {
case 0:
showOnly=true;
break;
case 1073741884:
break;
case 805306401:
fileName=(type.equals$O("IMAGE") ? "?jmol.png" : "?jmol." + type.toLowerCase$());
break;
case 1073741824:
case 4:
fileName=(function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [pt, args])],$I$(34).sValue$org_jmol_script_T);
if (fileName.equalsIgnoreCase$S("clipboard") || !this.vwr.haveAccess$org_jmol_viewer_Viewer_ACCESS($I$(36).ALL) ) fileName=null;
break;
default:
this.invArg$();
}
if (type.equals$O("IMAGE") || type.equals$O("FRAME") || type.equals$O("VIBRATION")  ) {
type=(fileName != null  && fileName.indexOf$S(".") >= 0  ? fileName.substring$I(fileName.lastIndexOf$S(".") + 1).toUpperCase$() : "JPG");
}if (type.equals$O("ISOSURFACE") || type.equals$O("CONTACT") ) {
isContact=type.equals$O("CONTACT");
type=(fileName != null  && fileName.indexOf$S(".") >= 0  ? fileName.substring$I(fileName.lastIndexOf$S(".") + 1).toUpperCase$() : "JVXL");
if (type.equals$O("PMESH")) type="ISOMESH";
 else if (type.equals$O("PMB")) type="ISOMESHBIN";
}var isImage=(function(a,f){return f.apply(null,a)})([type.toLowerCase$(), ";jpg;jpeg;jpg64;jpeg64;gif;gift;pdf;ppm;png;pngj;pngt;scene;"],$I$(1).isOneOf$S$S);
if (!isImage) {
if (type.equals$O("MNU")) {
type="MENU";
} else if (type.equals$O("WRL") || type.equals$O("VRML") ) {
type="Vrml";
isExport=true;
} else if (type.equals$O("X3D")) {
type="X3d";
isExport=true;
} else if (type.equals$O("STL")) {
type="Stl";
isExport=true;
} else if (type.equals$O("IDTF")) {
type="Idtf";
isExport=true;
} else if (type.equals$O("MA")) {
type="Maya";
isExport=true;
} else if (type.equals$O("JS")) {
type="Js";
isExport=true;
} else if (type.equals$O("OBJ")) {
type="Obj";
isExport=true;
} else if (type.equals$O("JVXL")) {
type="ISOSURFACE";
} else if (type.equals$O("XJVXL")) {
type="ISOSURFACE";
} else if (type.equals$O("JMOL")) {
type="ZIPALL";
} else if (type.equals$O("HIS")) {
type="HISTORY";
}if (type.equals$O("COORD") || type.equals$O("COORDS") ) type=(fileName != null  && fileName.indexOf$S(".") >= 0  ? fileName.substring$I(fileName.lastIndexOf$S(".") + 1).toUpperCase$() : "XYZ");
}if (scripts != null ) {
if (type.equals$O("PNG")) type="PNGJ";
if (!type.equals$O("PNGJ") && !type.equals$O("ZIPALL") && !type.equals$O("ZIP")  ) this.invArg$();
}if (!isImage && !isExport && !$I$(1).isOneOf$S$S(type, ";SCENE;JMOL;ZIP;ZIPALL;SPT;HISTORY;MO;NBO;ISOSURFACE;MESH;PMESH;PMB;ISOMESHBIN;ISOMESH;VAR;FILE;FUNCTION;CFI;CIF;CML;JSON;XYZ;XYZRN;XYZVIB;MENU;MOL;MOL67;PDB;PGRP;PQR;QUAT;RAMA;SDF;V2000;V3000;QCJSON;INLINE;")  ) eval.errorStr2$I$S$S(54, "COORDS|FILE|FUNCTIONS|HISTORY|IMAGE|INLINE|ISOSURFACE|JMOL|MENU|MO|NBO|POINTGROUP|QUATERNION [w,x,y,z] [derivative]|RAMACHANDRAN|SPT|STATE|VAR x|ZIP|ZIPALL  CLIPBOARD", "CIF|CML|CFI|GIF|GIFT|JPG|JPG64|JMOL|JVXL|MESH|MOL|PDB|PMESH|PNG|PNGJ|PNGT|PPM|PQR|SDF|CD|JSON|QCJSON|V2000|V3000|SPT|XJVXL|XYZ|XYZRN|XYZVIB|ZIP" + driverList.toUpperCase$().replace$C$C(";", "|"));
if (this.chk) return "";
var fullPath=Clazz.array(String, [1]);
var params;
var timeMsg=this.vwr.getBoolean$I(603979934);
if (isExport) {
if (timeMsg) $I$(5).startTimer$S("export");
var eparams=Clazz.new_($I$(13,1));
eparams.put$O$O("type", type);
if (fileName != null ) eparams.put$O$O("fileName", fileName);
if (isCommand || fileName != null  ) eparams.put$O$O("fullPath", fullPath);
eparams.put$O$O("width", Integer.valueOf$I(width));
eparams.put$O$O("height", Integer.valueOf$I(height));
data=this.vwr.generateOutputForExport$java_util_Map(eparams);
if (data == null  || data.length$() == 0 ) return "";
if (showOnly) return data;
if (!type.equals$O("Povray") && !type.equals$O("Idtf")  || fullPath[0] == null  ) return p$1.writeMsg$S.apply(this, [data]);
var ext=(type.equals$O("Idtf") ? ".tex" : ".ini");
fileName=fullPath[0] + ext;
params=Clazz.new_($I$(13,1));
params.put$O$O("fileName", fileName);
params.put$O$O("type", ext);
params.put$O$O("text", data);
params.put$O$O("fullPath", fullPath);
msg=this.vwr.processWriteOrCapture$java_util_Map(params);
if (type.equals$O("Idtf")) data=data.substring$I$I(0, data.indexOf$S("\\begin{comment}"));
data="Created " + fullPath[0] + ":\n\n" + data ;
if (timeMsg) this.showString$S($I$(5).getTimerMsg$S$I("export", 0));
if (msg != null ) {
var isError=!msg.startsWith$S("OK");
if (isError) eval.evalError$S$S(msg, null);
eval.report$S$Z(data, isError);
}return "";
}var bytes=null;
var writeFileData=false;
if (data == null ) {
var len=0;
data=type.intern$();
if (data == "MENU") {
data=this.vwr.getMenu$S("");
} else if (data == "PGRP") {
data=this.vwr.ms.getPointGroupAsString$javajs_util_BS$S$I$F$javajs_util_P3A$javajs_util_P3$S(this.vwr.bsA$(), null, 0, 1.0, null, null, type2.equals$O("draw") ? "" : null);
} else if (data == "PDB" || data == "PQR" ) {
if (showOnly) {
data=this.vwr.getPdbAtomData$javajs_util_BS$javajs_util_OC$Z$Z(null, null, (data == "PQR"), isCoord);
} else {
writeFileData=true;
type="PDB_" + data + "-coord " + isCoord ;
}} else if (data == "FILE") {
if ("?".equals$O(fileName)) fileName="?Jmol." + this.vwr.getP$S("_fileType");
if (showOnly) data=this.vwr.getCurrentFileAsString$S("script");
 else writeFileData=true;
} else if (data == "CIF" || data == "SDF"  || data == "MOL"  || data == "MOL67"  || data == "V2000"  || data == "V3000"  || data == "CD"  || data == "JSON"  || data == "XYZ"  || data == "XYZRN"  || data == "XYZVIB"  || data == "CML"  || data == "QCJSON" ) {
var selected=this.vwr.bsA$();
var bsModel;
msg=" (" + selected.cardinality$() + " atoms)" ;
if (this.vwr.am.cmi >= 0 && !selected.equals$O(bsModel=this.vwr.getModelUndeletedAtomsBitSet$I(this.vwr.am.cmi)) ) msg += "\nNote! Selected atom set " + selected + " is not the same as the current model " + bsModel ;
data=this.vwr.getModelExtract$O$Z$Z$S(selected, isCoord, false, data);
if (data.startsWith$S("ERROR:")) bytes=data;
} else if (data == "CFI") {
data=this.vwr.getModelFileData$S$S$Z("selected", "cfi", false);
} else if (data == "FUNCTION") {
data=this.vwr.getFunctionCalls$S(null);
type="TXT";
} else if (data == "VAR") {
if (tVar == null ) {
tVar=eval.getParameter$S$I$Z((function(a,f){return f.apply(null,a)})([p$1.tokenAt$I$org_jmol_script_TA.apply(this, [isCommand ? 2 : 1, args])],$I$(34).sValue$org_jmol_script_T), 1073742190, true);
}var v=null;
if (tVar.tok == 15) {
v=Clazz.new_($I$(16,1));
v.addLast$O((tVar.value).data);
} else if (tVar.tok == 6) {
v=(fileName == null  ? Clazz.new_($I$(16,1)) : this.prepareBinaryOutput$org_jmol_script_SV(tVar));
}if (v == null ) {
data=tVar.asString$();
type="TXT";
} else {
if (fileName != null ) {
params=Clazz.new_($I$(13,1));
params.put$O$O("data", v);
if ((bytes=data=this.vwr.createZip$S$S$java_util_Map(fileName, v.size$() == 1 || fileName.endsWith$S(".png")  || fileName.endsWith$S(".pngj")  ? "BINARY" : "ZIPDATA", params)) == null ) eval.evalError$S$S("#CANCELED#", null);
}}} else if (data == "SPT") {
if (isCoord) {
var tainted=this.vwr.ms.getTaintedAtoms$I(2);
this.vwr.setAtomCoordsRelative$javajs_util_T3$javajs_util_BS($I$(7).new3$F$F$F(0, 0, 0), null);
data=this.vwr.getStateInfo$();
this.vwr.ms.setTaintedAtoms$javajs_util_BS$I(tainted, 2);
} else {
data=this.vwr.getStateInfo$();
if (localPath != null  || remotePath != null  ) data=$I$(37).setScriptFileReferences$S$S$S$S(data, localPath, remotePath, null);
}} else if (data == "ZIP" || data == "ZIPALL" ) {
if (fileName != null ) {
params=Clazz.new_($I$(13,1));
if (scripts != null ) params.put$O$O("data", scripts);
if ((bytes=data=this.vwr.createZip$S$S$java_util_Map(fileName, type, params)) == null ) eval.evalError$S$S("#CANCELED#", null);
}} else if (data == "HISTORY") {
data=this.vwr.getSetHistory$I(2147483647);
type="SPT";
} else if (data == "MO" || data == "NBO" ) {
data=p$1.getMoJvxl$I$Z.apply(this, [2147483647, data == "NBO"]);
type="XJVXL";
} else if (data == "PMESH" || data == "PMB" ) {
if ((data=p$1.getIsosurfaceJvxl$I$S.apply(this, [29, data])) == null ) this.error$I(31);
type="XJVXL";
} else if (data == "ISOMESH") {
if ((data=p$1.getIsosurfaceJvxl$I$S.apply(this, [24, data])) == null ) this.error$I(31);
type="PMESH";
} else if (data == "ISOMESHBIN") {
if ((bytes=p$1.getIsosurfaceJvxl$I$S.apply(this, [24, "ISOMESHBIN"])) == null ) this.error$I(31);
type="PMB";
} else if (data == "ISOSURFACE" || data == "MESH" ) {
if ((data=p$1.getIsosurfaceJvxl$I$S.apply(this, [isContact ? 25 : 24, data])) == null ) this.error$I(31);
type=(data.indexOf$S("<?xml") >= 0 ? "XJVXL" : "JVXL");
if (!showOnly) this.showString$S(this.getShapeProperty$I$S(isContact ? 25 : 24, "jvxlFileInfo"));
} else {
if (isCommand && showOnly && fileName == null   ) {
showOnly=false;
fileName="\u0001";
}len=-1;
if (sceneType == null  && quality < 0 ) quality=-1;
}if (data == null ) data="";
if (len == 0) len=(bytes == null  ? data.length$() : Clazz.instanceOf(bytes, "java.lang.String") ? (bytes).length$() : (bytes).length);
}if (!isCommand) return data;
if (showOnly) {
eval.showStringPrint$S$Z(data, true);
return "";
}if (bytes != null  && Clazz.instanceOf(bytes, "java.lang.String") ) return p$1.writeMsg$S.apply(this, [bytes]);
if (writeFileData) return p$1.writeMsg$S.apply(this, [this.vwr.writeFileData$S$S$I$OA(fileName, type, 0, null)]);
if (type.equals$O("SCENE")) bytes=sceneType;
 else if (bytes == null  && (!isImage || fileName != null  ) ) bytes=data;
if (timeMsg) $I$(5).startTimer$S("write");
if (isImage) {
eval.refresh$Z(false);
if (width < 0) width=(is2D ? 250 : this.vwr.getScreenWidth$());
if (height < 0) height=(is2D ? 250 : this.vwr.getScreenHeight$());
}params=Clazz.new_($I$(13,1));
if (fileName != null ) params.put$O$O("fileName", fileName);
params.put$O$O("backgroundColor", Integer.valueOf$I(this.vwr.getBackgroundArgb$()));
params.put$O$O("type", type);
if (is2D) {
params.put$O$O("is2D", $I$(2).TRUE);
var smiles;
var ret="smiles could not be generated";
try {
smiles=this.vwr.getOpenSmiles$javajs_util_BS(null);
if (smiles.length$() > 0) {
var fname=this.vwr.setLoadFormat$S$C$Z("_" + smiles, "2", false);
fname += "?width=" + width + "&height=" + height + "&format=" + type.toLowerCase$() ;
this.showString$S(fname);
ret=this.vwr.fm.getFileAsBytes$S$javajs_util_OC(fname, null);
}} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
} else {
throw e1;
}
}
if (Clazz.instanceOf(ret, "java.lang.String")) {
this.showString$S(ret);
return null;
}bytes=ret;
}if (Clazz.instanceOf(bytes, "java.lang.String") && quality == -2147483648 ) params.put$O$O("text", bytes);
 else if (Clazz.instanceOf(bytes, Clazz.array(Byte.TYPE, -1))) params.put$O$O("bytes", bytes);
if (scripts != null ) params.put$O$O("scripts", scripts);
if (bsFrames != null ) params.put$O$O("bsFrames", bsFrames);
params.put$O$O("fullPath", fullPath);
params.put$O$O("quality", Integer.valueOf$I(quality));
params.put$O$O("width", Integer.valueOf$I(width));
params.put$O$O("height", Integer.valueOf$I(height));
params.put$O$O("nVibes", Integer.valueOf$I(nVibes));
var ret=this.vwr.processWriteOrCapture$java_util_Map(params);
if (ret == null ) ret="canceled";
if (isImage && ret.startsWith$S("OK") ) ret += "; width=" + width + "; height=" + height ;
if (timeMsg) this.showString$S($I$(5).getTimerMsg$S$I("write", 0));
return p$1.writeMsg$S.apply(this, [ret + (msg == null  ? "" : msg)]);
}, p$1);

Clazz.newMeth(C$, 'prepareBinaryOutput$org_jmol_script_SV', function (tvar) {
var m=tvar.getMap$();
if (m == null  || !m.containsKey$O("$_BINARY_$") ) return null;
var v=Clazz.new_($I$(16,1));
for (var e, $e = m.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
if (key.equals$O("$_BINARY_$")) continue;
var o=e.getValue$();
var bytes=(o.tok == 15 ? (o.value).data : null);
if (bytes == null ) {
var s=o.asString$();
bytes=(s.startsWith$S(";base64,") ? $I$(38).decodeBase64$S(s) : s.getBytes$());
}if (key.equals$O("_DATA_")) {
v=Clazz.new_($I$(16,1));
v.addLast$O(bytes);
return v;
} else if (key.equals$O("_IMAGE_")) {
v.add$I$O(0, key);
v.add$I$O(1, null);
v.add$I$O(2, bytes);
} else {
v.addLast$O(key);
v.addLast$O(null);
v.addLast$O(bytes);
}}
return v;
});

Clazz.newMeth(C$, 'writeMsg$S', function (msg) {
if (this.chk || msg == null  ) return "";
var isError=!msg.startsWith$S("OK");
if (isError) {
this.e.evalError$S$S(msg, null);
{
alert(msg);
}
}this.e.report$S$Z(msg, isError);
return msg;
}, p$1);

Clazz.newMeth(C$, 'show', function () {
var eval=this.e;
var value=null;
var str=this.paramAsStr$I(1);
var filter=null;
var filterLen=0;
if (this.slen > 3 && this.tokAt$I(this.slen - 3) == 268435632  && this.tokAt$I(this.slen - 2) == 268435568 ) {
filter="!/" + this.paramAsStr$I(this.slen - 1);
this.slen-=3;
filterLen=3;
} else if (this.slen > 2 && this.tokAt$I(this.slen - 2) == 268435632 ) {
filter="/" + this.paramAsStr$I(this.slen - 1);
this.slen-=2;
filterLen=2;
} else if ((filter=this.paramAsStr$I(this.slen - 1)).lastIndexOf$S("/") == 0) {
this.slen--;
filterLen=1;
} else {
filter=null;
}var msg=null;
var name=null;
var len=2;
var token=this.getToken$I(1);
var tok=(Clazz.instanceOf(token, "org.jmol.script.SV") && token.tok != 1073741824  ? 0 : token.tok);
if (tok == 4) {
token=(function(a,f){return f.apply(null,a)})([str.toLowerCase$()],$I$(14).getTokenFromName$S);
if (token != null ) tok=token.tok;
}if (tok != 1296041986 && tok != 1073742158  && tok != 1715472409  && tok != 1228935687 ) this.checkLength$I(-3);
if (this.slen == 2 && str.indexOf$S("?") >= 0 ) {
msg=this.vwr.getAllSettings$S(str.substring$I$I(0, str.indexOf$S("?")));
tok=-1;
}switch (tok) {
case -1:
break;
case 0:
if (!this.chk) msg=(eval.theToken).escape$();
break;
case 1073741925:
eval.checkLength23$();
len=this.st.length;
if (!this.chk) {
var d=this.vwr.getModelInfo$S("domains");
if (Clazz.instanceOf(d, "org.jmol.script.SV")) msg=this.vwr.getAnnotationInfo$org_jmol_script_SV$S$I(d, eval.optParameterAsString$I(2), 1073741925);
 else msg="domain information has not been loaded";
}break;
case 1715472409:
msg=p$1.plot$org_jmol_script_TA.apply(this, [this.st]);
len=this.st.length;
break;
case 1073742189:
eval.checkLength23$();
len=this.st.length;
if (!this.chk) {
var d=this.vwr.getModelInfo$S("validation");
if (Clazz.instanceOf(d, "org.jmol.script.SV")) msg=this.vwr.getAnnotationInfo$org_jmol_script_SV$S$I(d, eval.optParameterAsString$I(2), 1073742189);
 else msg="validation information has not been loaded";
}break;
case 134221829:
if (!this.chk) msg=(function(a,f){return f.apply(null,a)})([this.vwr.fm.cacheList$()],$I$(9).e$O);
break;
case 1111490587:
eval.checkLength23$();
len=this.st.length;
if (!this.chk) {
var d=this.vwr.getModelInfo$S("dssr");
msg=(d == null  ? "no DSSR information has been read" : len > 2 ? (function(a,f){return f.apply(null,a)})([this.vwr.extractProperty$O$O$I(d, this.stringParameter$I(2), -1)],$I$(34).getVariable$O).asString$() : "" + $I$(34).getVariable$O(d).asString$());
}break;
case 1073741915:
var version=2;
if (this.slen == 3) version=((this.floatParameter$I((len=3) - 1)|0));
 else this.checkLength$I(2 + filterLen);
if (!this.chk) msg=this.vwr.calculateStructures$javajs_util_BS$Z$Z$I(null, true, false, version);
break;
case 545259572:
this.checkLength$I(2 + filterLen);
if (!this.chk) msg=this.vwr.fm.getPathForAllFiles$();
break;
case 1275203608:
if (!this.chk) {
var info=Clazz.array(java.lang.Object, [2]);
this.vwr.shm.getShapePropertyData$I$S$OA(21, "allInfo", info);
msg=$I$(34).getVariable$O(info[1]).asString$();
}break;
case 1073742038:
{
if (!this.chk) this.vwr.getNMRPredict$S(eval.optParameterAsString$I(2));
return;
}case 1073741929:
case 1073741879:
case 134218757:
this.checkLength$I((tok == 1073741879 || tok == 134218757 && this.tokAt$I(2) == 1073742335   ? len=3 : 2) + filterLen);
if (this.chk) return;
var param2=eval.optParameterAsString$I(2);
if (tok == 1073741879) {
if ("mf".equals$O(param2)) param2="formula";
if ("formula".equals$O(param2)) {
msg=this.vwr.getModelInfo$S("formula");
if (msg != null ) msg=$I$(1).rep$S$S$S(msg, " ", "");
}}if (msg == null ) {
try {
if (tok != 134218757) {
msg=this.vwr.ms.getModelDataBaseName$javajs_util_BS(this.vwr.bsA$());
if (msg != null  && (msg.startsWith$S("$") || msg.startsWith$S(":") ) ) {
msg=msg.substring$I(1);
} else {
msg=null;
}} else if (param2.equalsIgnoreCase$S("true")) {
msg=this.vwr.getBioSmiles$javajs_util_BS(null);
filter=null;
} else if (filter != null ) {
msg=this.vwr.getSmilesOpt$javajs_util_BS$I$I$I$S(null, -1, -1, 1, filter + "///");
filter=null;
}if (msg == null ) {
var level=$I$(5).getLogLevel$();
$I$(5).setLogLevel$I(4);
msg=(tok == 134218757 ? this.vwr.getSmiles$javajs_util_BS(null) : this.vwr.getOpenSmiles$javajs_util_BS(null));
$I$(5).setLogLevel$I(level);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
msg=ex.getMessage$();
if (msg == null ) {
msg="";
}ex.printStackTrace$();
} else {
throw ex;
}
}
switch (tok) {
case 134218757:
break;
case 1073741929:
if (msg.length$() > 0) {
this.vwr.fm.loadImage$O$S$Z(this.vwr.setLoadFormat$S$C$Z("_" + msg, "2", false), "\u0001" + msg, false);
return;
}msg="Could not show drawing -- Either insufficient atoms are selected or the model is a PDB file.";
break;
case 1073741879:
len=3;
if (msg.length$() > 0) {
msg=this.vwr.getChemicalInfo$S$S$javajs_util_BS(msg, param2, this.vwr.bsA$());
if (msg.indexOf$S("FileNotFound") >= 0) msg="?";
} else {
msg="Could not show name -- Either insufficient atoms are selected or the model is a PDB file.";
}}
}break;
case 134217764:
case 1296041986:
msg="";
var info=null;
if ((len=this.slen) == 2) {
if (this.chk) break;
info=this.vwr.getSymTemp$().getSpaceGroupInfo$org_jmol_modelset_ModelSet$S$I$Z$FA(this.vwr.ms, null, -1, false, null);
} else if (tok == 134217764) {
var sg=this.paramAsStr$I(2);
len=3;
if (this.chk) break;
info=this.vwr.getSymTemp$().getSpaceGroupInfo$org_jmol_modelset_ModelSet$S$I$Z$FA(this.vwr.ms, $I$(1).rep$S$S$S(sg, "\'\'", "\""), -1, false, null);
}if (info != null ) {
msg=(tok == 134217764 ? "" + info.get$O("spaceGroupInfo") + info.get$O("spaceGroupNote")  : "") + info.get$O("symmetryInfo");
break;
}var iop=(this.tokAt$I(2) == 2 ? this.intParameter$I(2) : 0);
var xyz=(this.tokAt$I(2) == 4 ? this.paramAsStr$I(2) : null);
var pt1=null;
var pt2=null;
var nth=-1;
if (this.slen > 3 && this.tokAt$I(3) != 4 ) {
var ret=Clazz.array($I$(17), -1, [null, this.vwr.getFrameAtoms$()]);
pt1=eval.centerParameter$I$OA(2 + (iop == 0 ? 0 : 1), ret);
if (ret[0] != null  && ret[0].cardinality$() == 0 ) {
len=this.slen;
break;
}ret[0]=null;
if (iop == 0) {
pt2=eval.centerParameter$I$OA(++eval.iToken, ret);
if (ret[0] != null  && ret[0].cardinality$() == 0 ) {
len=this.slen;
break;
}}if (this.tokAt$I(eval.iToken + 1) == 2) nth=eval.getToken$I(++eval.iToken).intValue;
}var type=(eval.iToken > 1 && this.tokAt$I(eval.iToken + 1) == 4  ? this.stringParameter$I(++eval.iToken) : null);
this.checkLength$I((len=++eval.iToken) + filterLen);
if (!this.chk) {
var o=this.vwr.getSymmetryInfo$I$S$I$javajs_util_P3$javajs_util_P3$I$S$F$I$I(this.vwr.getAllAtoms$().nextSetBit$I(0), xyz, iop, pt1, pt2, 0, type, 0, nth, 0);
msg=(Clazz.instanceOf(o, "java.util.Map") ? $I$(34).getVariable$O(o).asString$() : o.toString());
}break;
case 1648363544:
var vdwType=null;
if (this.slen > 2) {
len=this.slen;
vdwType=(function(a,f){return f.apply(null,a)})([this.paramAsStr$I(2)],$I$(39).getVdwType$S);
if (vdwType == null ) this.invArg$();
}if (!this.chk) msg=this.vwr.getDefaultVdwNameOrData$I$org_jmol_c_VDW$javajs_util_BS(0, vdwType, null);
break;
case 134320141:
eval.checkLength23$();
len=this.slen;
var s=eval.optParameterAsString$I(2);
var pt;
if (filter == null  && (pt=s.indexOf$I("/")) >= 0 ) {
filter=s.substring$I(pt + 1);
s=s.substring$I$I(0, pt);
}if (!this.chk) msg=this.vwr.getFunctionCalls$S(s);
break;
case 36867:
this.checkLength$I(2 + filterLen);
if (!this.chk) msg=this.vwr.getAllSettings$S(null);
break;
case 1073742166:
msg=this.vwr.getFrameTitle$();
break;
case 1073742184:
if ((len=this.slen) == 2) {
if (!this.chk) this.vwr.showUrl$S(eval.getFullPathName$());
} else {
name=this.paramAsStr$I(2);
if (!this.chk) this.vwr.showUrl$S(name);
}return;
case 1765808134:
str="defaultColorScheme";
break;
case 1610612740:
str="scaleAngstromsPerInch";
break;
case 134221850:
case 4138:
if (this.chk) return;
var modelIndex=this.vwr.am.cmi;
if (modelIndex < 0) eval.errorStr$I$S(30, "show " + eval.theToken.value);
msg=p$1.plot$org_jmol_script_TA.apply(this, [this.st]);
len=this.slen;
break;
case 14:
case 1112152078:
if (!this.chk) msg=p$1.getContext$Z.apply(this, [false]);
break;
case 1073741888:
name=eval.optParameterAsString$I(2);
if (name.length$() > 0) len=3;
if (!this.chk) value=this.vwr.cm.getColorSchemeList$S(name);
break;
case 1073742192:
if (!this.chk) msg=this.vwr.getAtomDefs$java_util_Map(this.vwr.definedAtomSets) + this.vwr.g.getVariableList$() + p$1.getContext$Z.apply(this, [true]) ;
break;
case 536870926:
if (!this.chk) msg=this.vwr.getTrajectoryState$();
break;
case 553648146:
value="" + $I$(3).commandHistoryLevelMax;
break;
case 553648149:
value="" + $I$(5).getLogLevel$();
break;
case 603979825:
value="" + this.vwr.getBoolean$I(603979825);
break;
case 553648178:
msg="set strandCountForStrands " + this.vwr.getStrandCount$I(12) + "; set strandCountForMeshRibbon " + this.vwr.getStrandCount$I(13) ;
break;
case 536875070:
msg=this.vwr.showTimeout$S((len=this.slen) == 2 ? null : this.paramAsStr$I(2));
break;
case 536870918:
value=(function(a,f){return f.apply(null,a)})([this.vwr.getDefaultLattice$()],$I$(9).eP$javajs_util_T3);
break;
case 4126:
if (!this.chk) msg=this.vwr.getMinimizationInfo$();
break;
case 1611272194:
switch (this.vwr.g.axesMode) {
case 603979808:
msg="set axesUnitcell";
break;
case 603979804:
msg="set axesMolecular";
break;
default:
msg="set axesWindow";
}
break;
case 1610612737:
msg="set bondMode " + (this.vwr.getBoolean$I(603979812) ? "OR" : "AND");
break;
case 1649022989:
if (!this.chk) msg="set strandCountForStrands " + this.vwr.getStrandCount$I(12) + "; set strandCountForMeshRibbon " + this.vwr.getStrandCount$I(13) ;
break;
case 1613238294:
msg="set hbondsBackbone " + this.vwr.getBoolean$I(603979852) + ";set hbondsSolid " + this.vwr.getBoolean$I(603979854) ;
break;
case 1611141175:
if (!this.chk) msg=this.vwr.getSpinState$();
break;
case 1611141176:
msg="set ssbondsBackbone " + this.vwr.getBoolean$I(603979952);
break;
case 1610625028:
case 1611141171:
msg="selectionHalos " + (this.vwr.getSelectionHalosEnabled$() ? "ON" : "OFF");
break;
case 1612709894:
msg="set selectHetero " + this.vwr.getBoolean$I(1612709894);
break;
case 1073741828:
msg=(function(a,f){return f.apply(null,a)})([this.vwr.getAdditionalHydrogens$javajs_util_BS$Z$Z$javajs_util_Lst(null, true, true, null)],$I$(9).eAP$javajs_util_T3A);
break;
case 1612709900:
msg="set selectHydrogens " + this.vwr.getBoolean$I(1612709900);
break;
case 553648130:
case 553648140:
case 536870924:
case 553648176:
case 553648172:
case 1073741995:
if (!this.chk) msg=this.vwr.getLightingState$();
break;
case 1073742136:
case 4146:
if (!this.chk) msg=this.vwr.stm.listSavedStates$();
break;
case 1814695966:
if (!this.chk) msg=this.vwr.getUnitCellInfoText$();
break;
case 1073742329:
if ((len=this.slen) == 2) {
if (!this.chk) msg=this.vwr.getCoordinateState$javajs_util_BS(this.vwr.bsA$());
break;
}var nameC=this.paramAsStr$I(2);
if (!this.chk) msg=this.vwr.stm.getSavedCoordinates$S(nameC);
break;
case 1073742158:
if (!this.chk && eval.outputBuffer == null  ) this.vwr.sm.clearConsole$();
if ((len=this.slen) == 2) {
if (!this.chk) msg=this.vwr.getStateInfo$();
break;
}if (filter != null  && this.slen == 3 ) {
if (!this.chk) msg=this.vwr.getStateInfo$();
break;
} else if (this.tokAt$I(2) == 1228935687 && (len=this.slen) == 4 ) {
if (!this.chk) msg=this.vwr.fm.getEmbeddedFileState$S$Z$S(this.paramAsStr$I(3), true, "state.spt");
break;
}len=3;
name=this.paramAsStr$I(2);
if (!this.chk) msg=this.vwr.stm.getSavedState$S(name);
break;
case 1639976963:
if ((len=this.slen) == 2) {
if (!this.chk) msg=this.vwr.ms.getProteinStructureState$javajs_util_BS$I(this.vwr.bsA$(), 134222350);
break;
}var shape=this.paramAsStr$I(2);
if (!this.chk) msg=this.vwr.stm.getSavedStructure$S(shape);
break;
case 134221834:
var dtype=((len=this.slen) == 3 ? this.paramAsStr$I(2) : null);
if (!this.chk) {
var data=this.vwr.getDataObj$S$javajs_util_BS$I(dtype, null, -2);
msg=(data == null  ? "no data" : (function(a,f){return f.apply(null,a)})([data[0], data[1], (data[3]).intValue$()],$I$(9).encapsulateData$S$O$I));
}break;
case 1073742330:
len=3;
msg=eval.setObjectProperty$();
break;
case 1678381065:
if (!this.chk) {
msg=this.vwr.ms.getBoundBoxCommand$Z(true);
}break;
case 12289:
if (!this.chk) msg="center " + $I$(9).eP$javajs_util_T3(this.vwr.tm.fixedRotationCenter);
break;
case 135176:
if (!this.chk) msg=this.getShapeProperty$I$S(22, "command");
break;
case 1228935687:
if (this.slen == 2) {
if (!this.chk) {
if (filter == null ) this.vwr.sm.clearConsole$();
msg=this.vwr.getCurrentFileAsString$S("script");
}if (msg == null ) msg="<unavailable>";
break;
}len=3;
value=this.paramAsStr$I(2);
if (!this.chk) {
if (filter == null ) this.vwr.sm.clearConsole$();
msg=this.vwr.getFileAsString3$S$Z$S(value, true, null);
}break;
case 4115:
if (this.tokAt$I(2) == 1073742327 && (len=3) > 0 ) msg=this.vwr.getModelFileInfoAll$();
 else msg=this.vwr.getModelFileInfo$();
break;
case 1610616855:
var n=((len=this.slen) == 2 ? 2147483647 : this.intParameter$I(2));
if (n < 1) this.invArg$();
if (!this.chk) {
this.vwr.sm.clearConsole$();
if (eval.scriptLevel == 0) this.vwr.removeCommand$();
msg=this.vwr.getSetHistory$I(n);
}break;
case 135180:
if (!this.chk) msg=this.getShapeProperty$I$S(24, "jvxlDataXml");
break;
case 1073877011:
case 1073877010:
if (eval.optParameterAsString$I(2).equalsIgnoreCase$S("list")) {
this.e.sm.loadShape$I(27);
msg=(this.chk ? "" : this.getShapeProperty$I$S(27, "list -1"));
len=3;
} else {
var ptMO=((len=this.slen) == 2 ? -2147483648 : this.intParameter$I(2));
if (!this.chk) msg=p$1.getMoJvxl$I$Z.apply(this, [ptMO, tok == 1073877011]);
}break;
case 1094717454:
if (!this.chk) msg=this.vwr.ms.getModelInfoAsString$();
break;
case 537006096:
if (!this.chk) msg=this.vwr.getMeasurementInfoAsString$();
break;
case 1073741864:
len=3;
if (!this.chk && this.slen == len ) {
msg=this.paramAsStr$I(2);
msg=this.vwr.getOrientationText$I$S$javajs_util_BS((function(a,f){return f.apply(null,a)})([msg.equals$O("box") ? "volume" : msg.equals$O("rotation") ? "best" : msg],$I$(14).getTokFromName$S), "best", null).toString();
}break;
case 1073742132:
tok=this.tokAt$I(2);
if (tok == 0) tok=1073742132;
 else len=3;
case 1073742178:
case 4129:
if (!this.chk) msg=this.vwr.getOrientationText$I$S$javajs_util_BS(tok, null, null).toString();
break;
case 1073742077:
len=2;
if (this.slen > 3) break;
switch (tok=this.tokAt$I(2)) {
case 1073742178:
case 1073742132:
case 4129:
case 0:
if (!this.chk) msg=this.vwr.getOrientationText$I$S$javajs_util_BS(tok, null, null).toString();
break;
default:
name=eval.optParameterAsString$I(2);
msg=this.vwr.getOrientationText$I$S$javajs_util_BS(1073742034, name, null).toString();
}
len=this.slen;
break;
case 1073742088:
if (!this.chk) msg=this.vwr.ms.getPDBHeader$I(this.vwr.am.cmi);
break;
case 134217762:
var typ=eval.optParameterAsString$I(2);
if (typ.length$() == 0) typ=null;
len=this.slen;
if (!this.chk) msg=this.vwr.ms.getPointGroupAsString$javajs_util_BS$S$I$F$javajs_util_P3A$javajs_util_P3$S(this.vwr.bsA$(), "show:" + typ, 0, 0, null, null, null);
break;
case 1088421903:
if (!this.chk) msg=this.vwr.ms.getSymmetryInfoAsString$();
break;
case 1073742176:
if (!this.chk) msg="transform:\n" + this.vwr.tm.matrixRotate.toString();
break;
case 4168:
msg="zoom " + (this.vwr.tm.zoomEnabled ? ("" + new Float(this.vwr.tm.getZoomSetting$()).toString()) : "off");
break;
case 1611272202:
msg=(this.vwr.getShowFrank$() ? "frank ON" : "frank OFF");
break;
case 1665140738:
str="solventProbeRadius";
break;
case 1086324744:
if ((len=this.slen) == 3 && this.tokAt$I(2) == 1073742334 ) tok=1086324743;
case 1073741863:
case 1086326788:
case 1073742120:
case 1113589787:
case 1086324742:
case 1140850689:
case 1073741982:
if (!this.chk) msg=this.vwr.getChimeInfo$I(tok);
break;
case 537022465:
case 1610612738:
case 20482:
case 1612709912:
value="?";
break;
case 1073742030:
var qualifiers=((len=this.slen) == 2 ? null : this.paramAsStr$I(2));
if (!this.chk) msg=this.vwr.getBindingInfo$S(qualifiers);
break;
case 1073742015:
if (!this.chk) value=this.vwr.getMenu$S("");
break;
case 1073741824:
if (str.equalsIgnoreCase$S("fileHeader")) {
if (!this.chk) msg=this.vwr.ms.getPDBHeader$I(this.vwr.am.cmi);
}break;
case 1073741992:
case 36868:
str=this.paramAsStr$I(len++);
var v=eval.getParameter$S$I$Z(str, 1073742190, true);
if (!this.chk) if (tok == 1073741992) {
msg=v.toJSON$();
} else {
msg=v.escape$();
}break;
}
this.checkLength$I(len + filterLen);
if (this.chk) return;
if (msg != null ) this.showString$S(p$1.filterShow$S$S.apply(this, [msg, filter]));
 else if (value != null ) this.showString$S(str + " = " + value );
 else if (str != null ) {
if (str.indexOf$S(" ") >= 0) this.showString$S(str);
 else this.showString$S(str + " = " + (eval.getParameter$S$I$Z(str, 1073742190, true)).escape$() );
}}, p$1);

Clazz.newMeth(C$, 'filterShow$S$S', function (msg, name) {
if (name == null ) return msg;
var isNot=name.startsWith$S("!/");
name=name.substring$I(isNot ? 2 : 1).toLowerCase$();
var info=$I$(1).split$S$S(msg, "\n");
var sb=Clazz.new_($I$(35,1));
for (var i=0; i < info.length; i++) if ((info[i].toLowerCase$().indexOf$S(name) < 0) == isNot ) sb.append$S(info[i]).appendC$C("\n");

return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'stereo', function () {
var stereoMode=$I$(40).DOUBLE;
var degrees=-5;
var degreesSeen=false;
var colors=null;
var colorpt=0;
for (var i=1; i < this.slen; ++i) {
if (this.e.isColorParam$I(i)) {
if (colorpt > 1) this.e.bad$();
if (colorpt == 0) colors=Clazz.array(Integer.TYPE, [2]);
if (!degreesSeen) degrees=3;
colors[colorpt]=this.e.getArgbParam$I(i);
if (colorpt++ == 0) colors[1]=~colors[0];
i=this.e.iToken;
continue;
}switch (this.getToken$I(i).tok) {
case 1073742335:
this.e.checkLast$I(this.e.iToken=1);
this.e.iToken=1;
break;
case 1073742334:
this.e.checkLast$I(this.e.iToken=1);
stereoMode=$I$(40).NONE;
break;
case 2:
case 3:
degrees=this.floatParameter$I(i);
degreesSeen=true;
break;
case 1073741824:
if (!degreesSeen) degrees=3;
stereoMode=(function(a,f){return f.apply(null,a)})([this.paramAsStr$I(i)],$I$(40).getStereoMode$S);
if (stereoMode != null ) break;
default:
this.invArg$();
}
}
if (this.chk) return;
this.vwr.setStereoMode$IA$org_jmol_c_STER$F(colors, stereoMode, degrees);
}, p$1);

Clazz.newMeth(C$, 'struts', function () {
var eval=this.e;
var defOn=(this.tokAt$I(1) == 1073742072 || this.tokAt$I(1) == 1073742335  || this.slen == 1 );
var mad=eval.getMadParameter$();
if (mad == 2147483647) return false;
if (defOn) mad=Math.round(this.vwr.getFloat$I(570425406) * 2000.0);
this.setShapeProperty$I$S$O(1, "type", Integer.valueOf$I(32768));
eval.setShapeSizeBs$I$I$javajs_util_BS(1, mad, null);
this.setShapeProperty$I$S$O(1, "type", Integer.valueOf$I(1023));
return true;
}, p$1);

Clazz.newMeth(C$, 'unitcell$I', function (i) {
var eval=this.e;
var icell=2147483647;
var mad10=2147483647;
var pt=null;
var tickInfo=eval.tickParamAsStr$I$Z$Z$Z(i, true, false, false);
i=eval.iToken;
var id=null;
var oabc=null;
var newUC=null;
var ucname=null;
var isOffset=false;
var isReset=false;
var tok=this.tokAt$I(++i);
switch (tok) {
case 4142:
case 4141:
isReset=true;
pt=$I$(41).new4$F$F$F$F(0, 0, 0, -1);
eval.iToken++;
break;
case 4:
case 1073741824:
var s=this.paramAsStr$I(i).toLowerCase$();
ucname=s;
if (s.indexOf$S(",") >= 0 || this.chk ) {
newUC=s;
break;
}var stype=null;
eval.setCurrentCagePts$javajs_util_T3A$S(null, null);
newUC=this.vwr.getModelInfo$S("unitcell_conventional");
if ($I$(1).isOneOf$S$S(ucname, ";parent;standard;primitive;")) {
if (newUC == null  && this.vwr.getModelInfo$S("isprimitive") != null  ) {
this.showString$S("Cannot convert unit cell when file data is primitive and have no lattice information");
return;
}if (ucname.equals$O("primitive") && this.tokAt$I(i + 1) == 4 ) stype=this.paramAsStr$I(++i).toUpperCase$();
}if (Clazz.instanceOf(newUC, Clazz.array($I$(11), -1))) {
oabc=newUC;
}if (stype == null ) stype=this.vwr.getModelInfo$S("latticeType");
if (newUC != null ) eval.setCurrentCagePts$javajs_util_T3A$S(this.vwr.getV0abc$O(newUC), "" + newUC);
if (!ucname.equals$O("conventional")) {
s=this.vwr.getModelInfo$S("unitcell_" + ucname);
if (s == null ) {
var isPrimitive=ucname.equals$O("primitive");
if (isPrimitive || ucname.equals$O("reciprocal") ) {
var scale=(this.slen == i + 1 ? 1 : this.tokAt$I(i + 1) == 2 ? this.intParameter$I(++i) * 3.1415927 : this.floatParameter$I(++i));
var u=this.vwr.getCurrentUnitCell$();
ucname=(u == null  ? "" : u.getSpaceGroupName$() + " ") + ucname;
oabc=(u == null  ? Clazz.array($I$(7), -1, [$I$(7).new3$F$F$F(0, 0, 0), $I$(7).new3$F$F$F(1, 0, 0), $I$(7).new3$F$F$F(0, 1, 0), $I$(7).new3$F$F$F(0, 0, 1)]) : u.getUnitCellVectors$());
if (stype == null ) stype=this.vwr.getSymmetryInfo$I$S$I$javajs_util_P3$javajs_util_P3$I$S$F$I$I(this.vwr.getFrameAtoms$().nextSetBit$I(0), null, 0, null, null, 1073741994, null, 0, -1, 0);
if (u == null ) u=this.vwr.getSymTemp$();
u.toFromPrimitive$Z$C$javajs_util_T3A$javajs_util_M3(true, stype.length$() == 0 ? "P" : stype.charAt$I(0), oabc, this.vwr.getCurrentModelAuxInfo$().get$O("primitiveToCrystal"));
if (!isPrimitive) {
$I$(8).getReciprocal$javajs_util_T3A$javajs_util_T3A$F(oabc, oabc, scale);
}break;
}} else {
ucname=s;
if (s.indexOf$S(",") >= 0) newUC=s;
}this.showString$S(ucname);
}break;
case 135180:
case 1073742330:
id=eval.objectNameParameter$I(++i);
break;
case 1678381065:
var o=(function(a,f){return f.apply(null,a)})([this.vwr.getBoundBoxCenter$()],$I$(7).newP$javajs_util_T3);
pt=this.vwr.getBoundBoxCornerVector$();
o.sub$javajs_util_T3(pt);
oabc=Clazz.array($I$(7), -1, [o, $I$(7).new3$F$F$F(pt.x * 2, 0, 0), $I$(7).new3$F$F$F(0, pt.y * 2, 0), $I$(7).new3$F$F$F(0, 0, pt.z * 2)]);
pt=null;
eval.iToken=i;
break;
case 1073742176:
if (this.tokAt$I(++i) != 12) this.invArg$();
newUC=Clazz.array(java.lang.Object, -1, [this.getToken$I(i).value]);
break;
case 11:
case 12:
newUC=this.getToken$I(i).value;
break;
case 12289:
switch (this.tokAt$I(++i)) {
case 12290:
case 10:
case 1073742325:
pt=this.vwr.ms.getAtomSetCenter$javajs_util_BS(this.atomExpressionAt$I(i));
this.vwr.toFractional$javajs_util_T3$Z(pt, true);
i=eval.iToken;
break;
default:
if (eval.isCenterParameter$I(i)) {
pt=this.centerParameter$I(i);
i=eval.iToken;
break;
}this.invArg$();
}
pt.x -= 0.5;
pt.y -= 0.5;
pt.z -= 0.5;
break;
case 12290:
case 10:
case 1073742325:
var iAtom=this.atomExpressionAt$I(i).nextSetBit$I(0);
if (!this.chk) this.vwr.am.cai=iAtom;
if (iAtom < 0) return;
i=eval.iToken;
break;
case 1073742066:
isOffset=true;
case 1073742114:
pt=eval.getPointOrPlane$I$Z$Z$Z$Z$I$I$Z(++i, false, true, false, true, 3, 3, true);
pt=(function(a,f){return f.apply(null,a)})([pt.x, pt.y, pt.z, (isOffset ? 1 : 0)],$I$(41).new4$F$F$F$F);
i=eval.iToken;
break;
case 3:
case 2:
var f=this.floatParameter$I(i);
if (f < 111 ) {
i--;
break;
}icell=this.intParameter$I(i);
break;
default:
if (eval.isArrayParameter$I(i)) {
oabc=eval.getPointArray$I$I$Z(i, 4, false);
i=eval.iToken;
} else if (this.slen > i + 1) {
pt=eval.getPointOrPlane$I$Z$Z$Z$Z$I$I$Z(i, false, true, false, true, 3, 3, true);
i=eval.iToken;
} else {
i--;
}}
mad10=eval.getSetAxesTypeMad10$I(++i);
eval.checkLast$I(eval.iToken);
if (this.chk || mad10 == 2147483647 ) return;
if (mad10 == 2147483647) this.vwr.am.cai=-1;
if (oabc == null  && newUC != null  ) oabc=this.vwr.getV0abc$O(newUC);
if (icell != 2147483647) this.vwr.ms.setUnitCellOffset$org_jmol_api_SymmetryInterface$javajs_util_T3$I(this.vwr.getCurrentUnitCell$(), null, icell);
 else if (id != null ) this.vwr.setCurrentCage$S(id);
 else if (isReset || oabc != null  ) eval.setCurrentCagePts$javajs_util_T3A$S(oabc, ucname);
eval.setObjectMad10$I$S$I(33, "unitCell", mad10);
if (pt != null ) this.vwr.ms.setUnitCellOffset$org_jmol_api_SymmetryInterface$javajs_util_T3$I(this.vwr.getCurrentUnitCell$(), pt, 0);
if (tickInfo != null ) this.setShapeProperty$I$S$O(33, "tickInfo", tickInfo);
}, p$1);

Clazz.newMeth(C$, 'assign$I', function (i) {
var atomsOrBonds=this.tokAt$I(i++);
var index=-1;
var index2=-1;
if (atomsOrBonds == 1140850689 && this.tokAt$I(i) == 4 ) {
this.e.iToken++;
} else {
index=this.atomExpressionAt$I(i).nextSetBit$I(0);
if (index < 0) {
return;
}}var type=null;
if (atomsOrBonds == 4106) {
index2=this.atomExpressionAt$I(++this.e.iToken).nextSetBit$I(0);
} else {
type=this.paramAsStr$I(++this.e.iToken);
}var pt=(++this.e.iToken < this.slen ? this.centerParameter$I(this.e.iToken) : null);
if (this.chk) return;
this.vwr.pushState$();
switch (atomsOrBonds) {
case 1140850689:
this.e.clearDefinedVariableAtomSets$();
p$1.assignAtom$I$javajs_util_P3$S.apply(this, [index, pt, type]);
break;
case 1677721602:
p$1.assignBond$I$C.apply(this, [index, (type + "p").charAt$I(0)]);
break;
case 4106:
p$1.assignConnect$I$I.apply(this, [index, index2]);
}
}, p$1);

Clazz.newMeth(C$, 'assignAtom$I$javajs_util_P3$S', function (atomIndex, pt, type) {
if (type.equals$O("X")) this.vwr.setModelKitRotateBondIndex$I(-1);
if (atomIndex >= 0 && this.vwr.ms.at[atomIndex].mi != this.vwr.ms.mc - 1 ) return;
this.vwr.clearModelDependentObjects$();
var ac=this.vwr.ms.ac;
if (pt == null ) {
if (atomIndex < 0) return;
this.vwr.sm.modifySend$I$I$I$S(atomIndex, this.vwr.ms.at[atomIndex].mi, 1, this.e.fullCommand);
this.vwr.setModelkitProperty$S$O("assignAtom", Clazz.array(java.lang.Object, -1, [type, Clazz.array(Integer.TYPE, -1, [atomIndex, 1, 1])]));
if (!$I$(1).isOneOf$S$S(type, ";Mi;Pl;X;")) this.vwr.ms.setAtomNamesAndNumbers$I$I$org_jmol_modelset_AtomCollection(atomIndex, -ac, null);
this.vwr.sm.modifySend$I$I$I$S(atomIndex, this.vwr.ms.at[atomIndex].mi, -1, "OK");
this.vwr.refresh$I$S(3, "assignAtom");
return;
}var atom=(atomIndex < 0 ? null : this.vwr.ms.at[atomIndex]);
var bs=(atomIndex < 0 ? Clazz.new_($I$(17,1)) : $I$(15).newAndSetBit$I(atomIndex));
var pts=Clazz.array($I$(7), -1, [pt]);
var vConnections=Clazz.new_($I$(16,1));
var modelIndex=-1;
if (atom != null ) {
vConnections.addLast$O(atom);
modelIndex=atom.mi;
this.vwr.sm.modifySend$I$I$I$S(atomIndex, modelIndex, 3, this.e.fullCommand);
}try {
bs=this.vwr.addHydrogensInline$javajs_util_BS$javajs_util_Lst$javajs_util_P3A(bs, vConnections, pts);
var atomIndex2=bs.nextSetBit$I(0);
this.vwr.setModelkitProperty$S$O("assignAtom", Clazz.array(java.lang.Object, -1, [type, Clazz.array(Integer.TYPE, -1, [atomIndex2, -1, atomIndex])]));
atomIndex=atomIndex2;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
this.vwr.ms.setAtomNamesAndNumbers$I$I$org_jmol_modelset_AtomCollection(atomIndex, -ac, null);
this.vwr.sm.modifySend$I$I$I$S(atomIndex, modelIndex, -3, "OK");
}, p$1);

Clazz.newMeth(C$, 'assignBond$I$C', function (bondIndex, type) {
var modelIndex=-1;
try {
modelIndex=this.vwr.ms.bo[bondIndex].atom1.mi;
this.vwr.sm.modifySend$I$I$I$S(bondIndex, modelIndex, 2, this.e.fullCommand);
var bsAtoms=this.vwr.setModelkitProperty$S$O("assignBond", Clazz.array(Integer.TYPE, -1, [bondIndex, type]));
if (bsAtoms == null  || type == "0" ) this.vwr.refresh$I$S(3, "setBondOrder");
this.vwr.sm.modifySend$I$I$I$S(bondIndex, modelIndex, -2, "" + type);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(5).error$S("assignBond failed");
this.vwr.sm.modifySend$I$I$I$S(bondIndex, modelIndex, -2, "ERROR " + ex);
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'assignConnect$I$I', function (index, index2) {
this.vwr.clearModelDependentObjects$();
var connections=$I$(42).newFloat2$I(1);
connections[0]=Clazz.array(Float.TYPE, -1, [index, index2]);
var modelIndex=this.vwr.ms.at[index].mi;
this.vwr.sm.modifySend$I$I$I$S(index, modelIndex, 2, this.e.fullCommand);
this.vwr.ms.connect$FAA(connections);
this.vwr.setModelkitProperty$S$O("assignAtom", Clazz.array(java.lang.Object, -1, [".", Clazz.array(Integer.TYPE, -1, [index, 1, 1])]));
this.vwr.setModelkitProperty$S$O("assignAtom", Clazz.array(java.lang.Object, -1, [".", Clazz.array(Integer.TYPE, -1, [index2, 1, 1])]));
this.vwr.sm.modifySend$I$I$I$S(index, modelIndex, -2, "OK");
this.vwr.refresh$I$S(3, "assignConnect");
}, p$1);

Clazz.newMeth(C$, 'getContext$Z', function (withVariables) {
var sb=Clazz.new_($I$(35,1));
var context=this.e.thisContext;
while (context != null ){
if (withVariables) {
if (context.vars != null ) {
sb.append$S(p$1.getScriptID$org_jmol_script_ScriptContext.apply(this, [context]));
sb.append$S($I$(43).getVariableList$java_util_Map$I$Z$Z(context.vars, 80, true, false));
}} else {
sb.append$S((function(a,f){return f.apply(null,a)})([context.functionName, context.scriptFileName, this.e.getLinenumber$org_jmol_script_ScriptContext(context), context.pc, $I$(3).statementAsString$org_jmol_viewer_Viewer$org_jmol_script_TA$I$Z(this.vwr, context.statement, -9999, this.e.debugHigh)],$I$(44).getErrorLineMessage$S$S$I$I$S));
}context=context.parentContext;
}
if (withVariables) {
if (this.e.contextVariables != null ) {
sb.append$S(p$1.getScriptID$org_jmol_script_ScriptContext.apply(this, [null]));
sb.append$S($I$(43).getVariableList$java_util_Map$I$Z$Z(this.e.contextVariables, 80, true, false));
}} else {
sb.append$S(this.e.getErrorLineMessage2$());
}return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'getIsosurfaceJvxl$I$S', function (iShape, type) {
type=(type == "PMESH" || type == "MESH"  ? "jvxlMeshX" : type == "ISOMESH" ? "pmesh" : type == "ISOMESHBIN" || type == "PMB"  ? "pmeshbin" : "jvxlDataXml");
return (this.chk ? "" : this.getShapeProperty$I$S(iShape, type));
}, p$1);

Clazz.newMeth(C$, 'getMoJvxl$I$Z', function (ptMO, isNBO) {
var iShape=(isNBO ? 28 : 27);
this.e.sm.loadShape$I(iShape);
var modelIndex=this.vwr.am.cmi;
if (modelIndex < 0) this.e.errorStr$I$S(30, "show/write MO/NBO");
var moData=this.vwr.ms.getInfo$I$S(modelIndex, "moData");
if (moData == null ) this.error$I(27);
var n=this.getShapeProperty$I$S(iShape, "moNumber");
if (n == null  || n.intValue$() == 0 ) this.setShapeProperty$I$S$O(iShape, "init", Integer.valueOf$I(modelIndex));
this.setShapeProperty$I$S$O(iShape, "moData", moData);
return this.e.sm.getShapePropertyIndex$I$S$I(iShape, "showMO", ptMO);
}, p$1);

Clazz.newMeth(C$, 'getScriptID$org_jmol_script_ScriptContext', function (context) {
var fuName=(context == null  ? this.e.functionName : "function " + context.functionName);
var fiName=(context == null  ? this.e.scriptFileName : context.scriptFileName);
return "\n# " + fuName + " (file " + fiName + (context == null  ? "" : " context " + context.id) + ")\n" ;
}, p$1);

Clazz.newMeth(C$, 'tokenAt$I$org_jmol_script_TA', function (i, args) {
return (i < args.length ? args[i] : null);
}, p$1);

Clazz.newMeth(C$, 'tokAtArray$I$org_jmol_script_TA', function (i, args) {
return (i < args.length && args[i] != null   ? args[i].tok : 0);
}, 1);

Clazz.newMeth(C$, 'getPlotMinMax$FA$Z$I', function (data, isMax, tok) {
if (data == null ) return 0;
switch (tok) {
case 1111490568:
case 1111490569:
case 1111490570:
return (isMax ? 180 : -180);
case 1111490565:
case 1111490576:
return (isMax ? 360 : 0);
case 1111490574:
return (isMax ? 1 : -1);
}
var fmax=(isMax ? -1.0E10 : 1.0E10);
for (var i=data.length; --i >= 0; ) {
var f=data[i];
if (Float.isNaN$F(f)) continue;
if (isMax == (f > fmax ) ) fmax=f;
}
return fmax;
}, p$1);

Clazz.newMeth(C$, 'parseDataArray$S$Z', function (str, is3D) {
str=$I$(45).fixDataString$S(str);
var lines=$I$(45).markLines$S$C(str, "\n");
var nLines=lines.length;
if (!is3D) {
var data=$I$(42).newFloat2$I(nLines);
for (var iLine=0, pt=0; iLine < nLines; pt=lines[iLine++]) {
var tokens=(function(a,f){return f.apply(null,a)})([str.substring$I$I(pt, lines[iLine])],$I$(1).getTokens$S);
(function(a,f){return f.apply(null,a)})([tokens, data[iLine]=Clazz.array(Float.TYPE, [tokens.length])],$I$(1).parseFloatArrayData$SA$FA);
}
return data;
}var tokens=(function(a,f){return f.apply(null,a)})([str.substring$I$I(0, lines[0])],$I$(1).getTokens$S);
if (tokens.length != 3) return Clazz.array(Float.TYPE, [0, 0, 0]);
var nX=$I$(1).parseInt$S(tokens[0]);
var nY=$I$(1).parseInt$S(tokens[1]);
var nZ=$I$(1).parseInt$S(tokens[2]);
if (nX < 1 || nY < 1  || nZ < 1 ) return Clazz.array(Float.TYPE, [1, 1, 1]);
var data=$I$(42).newFloat3$I$I(nX, nY);
var iX=0;
var iY=0;
for (var iLine=1, pt=lines[0]; iLine < nLines && iX < nX ; pt=lines[iLine++]) {
tokens=(function(a,f){return f.apply(null,a)})([str.substring$I$I(pt, lines[iLine])],$I$(1).getTokens$S);
if (tokens.length < nZ) continue;
(function(a,f){return f.apply(null,a)})([tokens, data[iX][iY]=Clazz.array(Float.TYPE, [tokens.length])],$I$(1).parseFloatArrayData$SA$FA);
if (++iY == nY) {
iX++;
iY=0;
}}
if (iX != nX) {
System.out.println$S("Error reading 3D data -- nX = " + nX + ", but only " + iX + " blocks read" );
return Clazz.array(Float.TYPE, [1, 1, 1]);
}return data;
}, p$1);

Clazz.newMeth(C$, 'getBitsetPropertyFloat$javajs_util_BS$I$S$F$F', function (bs, tok, property, min, max) {
var odata=(property == null  || tok == (1111490843)  ? this.e.getBitsetProperty$javajs_util_BS$javajs_util_Lst$I$javajs_util_P3$javajs_util_P4$O$O$Z$I$Z(bs, null, tok, null, null, property, null, false, 2147483647, false) : this.vwr.getDataObj$S$javajs_util_BS$I(property, bs, 1));
if (odata == null  || !$I$(42).isAF$O(odata) ) return (bs == null  ? null : Clazz.array(Float.TYPE, [bs.cardinality$()]));
var data=odata;
if (!Float.isNaN$F(min)) for (var i=0; i < data.length; i++) if (data[i] < min ) data[i]=NaN;

if (!Float.isNaN$F(max)) for (var i=0; i < data.length; i++) if (data[i] > max ) data[i]=NaN;

return data;
});
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
