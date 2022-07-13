(function(){var P$=Clazz.newPackage("org.jmol.scriptext"),p$1={},I$=[[0,'org.jmol.script.SV','javajs.util.P3','javajs.util.T3','org.jmol.util.SimpleUnitCell','javajs.util.Lst','java.util.Hashtable','javajs.util.AU','javajs.util.CU','javajs.util.SB','javajs.util.V3','org.jmol.util.Escape','javajs.util.M4','org.jmol.util.JmolMolecule','org.jmol.api.Interface','javajs.util.Measure','javajs.util.BS','org.jmol.script.ScriptParam','org.jmol.modelset.BondSet','org.jmol.util.BSUtil','org.jmol.atomdata.RadiusData',['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.c.VDW','org.jmol.util.Parser','org.jmol.script.T','javajs.util.Quat','org.jmol.viewer.JC','javajs.util.PT','org.jmol.util.Logger','org.jmol.viewer.FileManager','org.jmol.viewer.Viewer','org.jmol.util.Point3fi','org.jmol.modelset.Measurement','javajs.util.P4','java.util.Random','org.jmol.bspt.PointIterator','javajs.util.OC','javajs.util.Rdr','javajs.util.ZipTools','org.jmol.i18n.GT']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MathExt");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['vwr','org.jmol.viewer.Viewer','e','org.jmol.script.ScriptEval','rand','java.util.Random','pm','org.jmol.api.JmolPatternMatcher']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'init$O', function (se) {
this.e=se;
this.vwr=this.e.vwr;
return this;
});

Clazz.newMeth(C$, 'evaluate$org_jmol_script_ScriptMathProcessor$org_jmol_script_T$org_jmol_script_SVA$I', function (mp, op, args, tok) {
switch (tok) {
case 134218250:
case 134218242:
case 134218245:
case 134217749:
case 134218244:
case 134218246:
return p$1.evaluateMath$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I.apply(this, [mp, args, tok]);
case 1275069441:
case 1275068928:
case 1275068929:
case 1275068930:
case 1275068931:
case 1275335685:
case 1275334681:
return p$1.evaluateList$org_jmol_script_ScriptMathProcessor$I$org_jmol_script_SVA.apply(this, [mp, op.intValue, args]);
case 268435520:
if (args.length == 0) mp.wasX=false;
case 1275068418:
return p$1.evaluateArray$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$Z.apply(this, [mp, args, tok == 1275068418 && op.tok == 268435665 ]);
case 134217731:
case 134221850:
return p$1.evaluateQuaternion$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I.apply(this, [mp, args, tok]);
case 1275068420:
return p$1.evaluateBin$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 134221829:
return p$1.evaluateCache$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 1275068934:
case 1275068935:
return p$1.evaluateRowCol$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I.apply(this, [mp, args, tok]);
case 1765808134:
return p$1.evaluateColor$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 134221831:
return p$1.evaluateCompare$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 1228931587:
case 134217736:
case 1275203608:
return p$1.evaluateConnected$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I$I.apply(this, [mp, args, tok, op.intValue]);
case 1814695966:
return p$1.evaluateUnitCell$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$Z.apply(this, [mp, args, op.tok == 268435665]);
case 134353926:
return p$1.evaluateContact$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 134221834:
return p$1.evaluateData$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 1275069444:
case 1275069442:
return p$1.evaluateDotDist$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I$I.apply(this, [mp, args, tok, op.intValue]);
case 1275069443:
if (op.tok == 268435665) return p$1.evaluateDotDist$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I$I.apply(this, [mp, args, tok, op.intValue]);
case 134217729:
case 1745489939:
return p$1.evaluateMeasure$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I.apply(this, [mp, args, op.tok]);
case 1228935687:
case 134222849:
return p$1.evaluateLoad$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$Z.apply(this, [mp, args, tok == 1228935687]);
case 1275068427:
return p$1.evaluateFind$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 1287653388:
case 1825200146:
return p$1.evaluateFormat$org_jmol_script_ScriptMathProcessor$I$org_jmol_script_SVA$Z.apply(this, [mp, op.intValue, args, tok == 1825200146]);
case 134320141:
return p$1.evaluateUserFunction$org_jmol_script_ScriptMathProcessor$S$org_jmol_script_SVA$I$Z.apply(this, [mp, op.value, args, op.intValue, op.tok == 268435665]);
case 1275068449:
case 1275068437:
case 1275082245:
case 1275072526:
return p$1.evaluateGetProperty$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I$Z.apply(this, [mp, args, tok, op.tok == 268435665]);
case 136314895:
return p$1.evaluateHelix$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 134219265:
case 134217750:
case 134217763:
return p$1.evaluatePlane$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I.apply(this, [mp, args, tok]);
case 134218759:
case 134238732:
case 134222850:
case 134222350:
return p$1.evaluateScript$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I.apply(this, [mp, args, tok]);
case 1275069446:
case 1275069447:
case 1275068932:
return p$1.evaluateString$org_jmol_script_ScriptMathProcessor$I$org_jmol_script_SVA.apply(this, [mp, op.intValue, args]);
case 134217751:
return p$1.evaluatePoint$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 134217762:
return p$1.evaluatePointGroup$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 134256131:
return p$1.evaluatePrompt$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 134219268:
return p$1.evaluateRandom$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 1275068432:
return p$1.evaluateIn$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 1275072532:
return p$1.evaluateModulation$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 1275068443:
return p$1.evaluateReplace$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 134218756:
case 134218757:
case 1237320707:
return p$1.evaluateSubstructure$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I$Z.apply(this, [mp, args, tok, op.tok == 268435665]);
case 1275068444:
case 1275068425:
return p$1.evaluateSort$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I.apply(this, [mp, args, tok]);
case 134217764:
return p$1.evaluateSpacegroup$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 1296041986:
return p$1.evaluateSymop$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$Z.apply(this, [mp, args, op.tok == 268435665]);
case 1275068445:
return p$1.evaluateTensor$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 134217759:
return p$1.evaluateWithin$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
case 134221856:
return p$1.evaluateWrite$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA.apply(this, [mp, args]);
}
return false;
});

Clazz.newMeth(C$, 'evaluateSpacegroup$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
var unitCell=null;
switch (args.length) {
case 0:
return mp.addXObj$O(this.vwr.getSymTemp$().getSpaceGroupInfo$org_jmol_modelset_ModelSet$S$I$Z$FA(this.vwr.ms, null, this.vwr.am.cmi, true, null));
case 2:
unitCell=$I$(1).flistValue$org_jmol_script_T$I(args[1], 0);
if (unitCell.length < 6) unitCell=null;
case 1:
return mp.addXObj$O(this.vwr.getSymTemp$().getSpaceGroupInfo$org_jmol_modelset_ModelSet$S$I$Z$FA(this.vwr.ms, "" + args[0].asString$(), -2147483648, true, unitCell));
default:
return false;
}
}, p$1);

Clazz.newMeth(C$, 'evaluatePointGroup$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
var pts=null;
var center=null;
var distanceTolerance=NaN;
var linearTolerance=NaN;
var bsAtoms;
switch (args.length) {
case 4:
linearTolerance=args[3].asFloat$();
case 3:
distanceTolerance=args[2].asFloat$();
case 2:
switch (args[1].tok) {
case 8:
center=$I$(1).ptValue$org_jmol_script_SV(args[1]);
break;
case 10:
bsAtoms=$I$(1).getBitSet$org_jmol_script_SV$Z(args[1], false);
var iatom=bsAtoms.nextSetBit$I(0);
if (iatom < 0 || iatom >= this.vwr.ms.ac  || bsAtoms.cardinality$() != 1 ) return false;
if ($I$(1).sValue$org_jmol_script_T(args[0]).equalsIgnoreCase$S("spaceGroup")) {
var lst=this.vwr.ms.generateCrystalClass$I$javajs_util_P3(iatom, $I$(2).new3$F$F$F(NaN, NaN, NaN));
pts=Clazz.array($I$(3), [lst.size$()]);
for (var i=pts.length; --i >= 0; ) pts[i]=lst.get$I(i);

center=Clazz.new_($I$(2,1));
if (args.length == 2) distanceTolerance=0;
} else {
center=this.vwr.ms.at[iatom];
}}
if (pts != null ) break;
case 1:
switch (args[0].tok) {
case 7:
var points=args[0].getList$();
pts=Clazz.array($I$(3), [points.size$()]);
for (var i=pts.length; --i >= 0; ) pts[i]=$I$(1,"ptValue$org_jmol_script_SV",[points.get$I(i)]);

break;
case 10:
bsAtoms=$I$(1).getBitSet$org_jmol_script_SV$Z(args[0], false);
var atoms=this.vwr.ms.getAtomPointVector$javajs_util_BS(bsAtoms);
pts=Clazz.array($I$(3), [atoms.size$()]);
for (var i=pts.length; --i >= 0; ) pts[i]=atoms.get$I(i);

break;
default:
return false;
}
break;
default:
return false;
}
var pointGroup=this.vwr.getSymTemp$().setPointGroup$org_jmol_api_SymmetryInterface$javajs_util_T3$javajs_util_T3A$javajs_util_BS$Z$F$F$Z(null, center, pts, null, false, Float.isNaN$F(distanceTolerance) ? this.vwr.getFloat$I(570425382) : distanceTolerance, Float.isNaN$F(linearTolerance) ? this.vwr.getFloat$I(570425384) : linearTolerance, true);
return mp.addXMap$java_util_Map(pointGroup.getPointGroupInfo$I$S$Z$S$I$F(-1, null, true, null, 0, 1));
}, p$1);

Clazz.newMeth(C$, 'evaluateUnitCell$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$Z', function (mp, args, isSelector) {
var x1=(isSelector ? $I$(1,"getBitSet$org_jmol_script_SV$Z",[mp.getX$(), true]) : null);
var iatom=((x1 == null  ? this.vwr.getAllAtoms$() : x1).nextSetBit$I(0));
var lastParam=args.length - 1;
var scale=1;
switch (lastParam < 0 ? 0 : args[lastParam].tok) {
case 2:
case 3:
scale=args[lastParam].asFloat$();
lastParam--;
break;
}
var tok0=(lastParam < 0 ? 0 : args[0].tok);
var ucnew=null;
var uc=null;
switch (tok0) {
case 7:
uc=args[0].getList$();
break;
case 4:
var s=args[0].asString$();
if (s.indexOf$S("a=") == 0) {
ucnew=Clazz.array($I$(2), [4]);
for (var i=0; i < 4; i++) ucnew[i]=Clazz.new_($I$(2,1));

$I$(4).setOabc$S$FA$javajs_util_T3A(s, null, ucnew);
} else if (s.indexOf$S(",") >= 0) {
return mp.addXObj$O(this.vwr.getV0abc$O(s));
}break;
}
var u=null;
var haveUC=(uc != null );
if (ucnew == null  && haveUC  && uc.size$() < 4 ) return false;
var ptParam=(haveUC ? 1 : 0);
if (ucnew == null  && !haveUC  && tok0 != 8 ) {
u=(iatom < 0 ? null : this.vwr.ms.getUnitCell$I(this.vwr.ms.at[iatom].mi));
ucnew=(u == null  ? Clazz.array($I$(2), -1, [$I$(2).new3$F$F$F(0, 0, 0), $I$(2).new3$F$F$F(1, 0, 0), $I$(2).new3$F$F$F(0, 1, 0), $I$(2).new3$F$F$F(0, 0, 1)]) : u.getUnitCellVectors$());
}if (ucnew == null ) {
ucnew=Clazz.array($I$(2), [4]);
if (haveUC) {
switch (uc.size$()) {
case 3:
ucnew[0]=Clazz.new_($I$(2,1));
for (var i=0; i < 3; i++) ucnew[i + 1]=$I$(2,"newP$javajs_util_T3",[$I$(1,"ptValue$org_jmol_script_SV",[uc.get$I(i)])]);

break;
case 4:
for (var i=0; i < 4; i++) ucnew[i]=$I$(2,"newP$javajs_util_T3",[$I$(1,"ptValue$org_jmol_script_SV",[uc.get$I(i)])]);

break;
case 6:
var params=Clazz.array(Float.TYPE, [6]);
for (var i=0; i < 6; i++) params[i]=uc.get$I(i).asFloat$();

$I$(4).setOabc$S$FA$javajs_util_T3A(null, params, ucnew);
break;
default:
return false;
}
} else {
ucnew[0]=$I$(1).ptValue$org_jmol_script_SV(args[0]);
switch (lastParam) {
case 3:
for (var i=1; i < 4; i++) (ucnew[i]=$I$(2,"newP$javajs_util_T3",[$I$(1).ptValue$org_jmol_script_SV(args[i])])).sub$javajs_util_T3(ucnew[0]);

break;
case 1:
var l=args[1].getList$();
if (l != null  && l.size$() == 3 ) {
for (var i=0; i < 3; i++) ucnew[i + 1]=$I$(1,"ptValue$org_jmol_script_SV",[l.get$I(i)]);

break;
}default:
return false;
}
}}var op=(ptParam <= lastParam ? args[ptParam].asString$() : null);
var toPrimitive="primitive".equalsIgnoreCase$S(op);
if (toPrimitive || "conventional".equalsIgnoreCase$S(op) ) {
var stype=(++ptParam > lastParam ? "" : args[ptParam].asString$().toUpperCase$());
if (stype.equals$O("BCC")) stype="I";
 else if (stype.length$() == 0) stype=this.vwr.getSymmetryInfo$I$S$I$javajs_util_P3$javajs_util_P3$I$S$F$I$I(iatom, null, 0, null, null, 1073741994, null, 0, -1, 0);
if (stype == null  || stype.length$() == 0 ) return false;
if (u == null ) u=this.vwr.getSymTemp$();
var m3=this.vwr.getModelForAtomIndex$I(iatom).auxiliaryInfo.get$O("primitiveToCrystal");
if (!u.toFromPrimitive$Z$C$javajs_util_T3A$javajs_util_M3(toPrimitive, stype.charAt$I(0), ucnew, m3)) return false;
} else if ("reciprocal".equalsIgnoreCase$S(op)) {
ucnew=$I$(4).getReciprocal$javajs_util_T3A$javajs_util_T3A$F(ucnew, null, scale);
scale=1;
}if (scale != 1 ) for (var i=1; i < 4; i++) ucnew[i].scale$F(scale);

return mp.addXObj$O(ucnew);
}, p$1);

Clazz.newMeth(C$, 'evaluateArray$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$Z', function (mp, args, isSelector) {
if (isSelector) {
var x1=mp.getX$();
switch (args.length == 1 ? x1.tok : 0) {
case 6:
var lst=Clazz.new_($I$(5,1));
var id=args[0].asString$();
var map=x1.getMap$();
var keys=x1.getKeys$Z(false);
for (var i=0, n=keys.length; i < n; i++) if (map.get$O(keys[i]).getMap$() == null ) return false;

for (var i=0, n=keys.length; i < n; i++) {
var m=map.get$O(keys[i]);
var m1=m.getMap$();
var m2=$I$(1).deepCopy$O$Z$Z(m1, true, false);
m2.put$O$O(id, $I$(1).newS$S(keys[i]));
lst.addLast$O($I$(1).newV$I$O(6, m2));
}
return mp.addXList$javajs_util_Lst(lst);
case 7:
var map1=Clazz.new_($I$(6,1));
var lst1=x1.getList$();
var id1=args[0].asString$();
for (var i=0, n=lst1.size$(); i < n; i++) {
var m0=lst1.get$I(i).getMap$();
if (m0 == null  || m0.get$O(id1) == null  ) return false;
}
for (var i=0, n=lst1.size$(); i < n; i++) {
var m=lst1.get$I(i);
var m1=$I$(1,"deepCopy$O$Z$Z",[m.getMap$(), true, false]);
var mid=m1.remove$O(id1);
map1.put$O$O(mid.asString$(), $I$(1).newV$I$O(6, m1));
}
return mp.addXObj$O(map1);
}
return false;
}var a=Clazz.array($I$(1), [args.length]);
for (var i=a.length; --i >= 0; ) a[i]=$I$(1).newT$org_jmol_script_T(args[i]);

return mp.addXAV$org_jmol_script_SVA(a);
}, p$1);

Clazz.newMeth(C$, 'evaluateBin$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
var n=args.length;
if (n < 3 || n > 5 ) return false;
var x1=mp.getX$();
var isListf=(x1.tok == 13);
if (!isListf && x1.tok != 7 ) return mp.addX$org_jmol_script_SV(x1);
var f0=$I$(1).fValue$org_jmol_script_T(args[0]);
var f1=$I$(1).fValue$org_jmol_script_T(args[1]);
var df=$I$(1).fValue$org_jmol_script_T(args[2]);
var addBins=(n >= 4 && args[n - 1].tok == 1073742335 );
var key=((n == 5 || n == 4 && !addBins  ) && args[3].tok != 1073742334  ? $I$(1).sValue$org_jmol_script_T(args[3]) : null);
var data;
var maps=null;
if (isListf) {
data=x1.value;
} else {
var list=x1.getList$();
data=Clazz.array(Float.TYPE, [list.size$()]);
if (key != null ) maps=$I$(7,"createArrayOfHashtable$I",[list.size$()]);
try {
for (var i=list.size$(); --i >= 0; ) data[i]=$I$(1,"fValue$org_jmol_script_T",[key == null  ? list.get$I(i) : (maps[i]=list.get$I(i).getMap$()).get$O(key)]);

} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
}var nbins=Math.max((Math.floor((f1 - f0) / df + 0.01)|0), 1);
var array=Clazz.array(Integer.TYPE, [nbins]);
var nPoints=data.length;
for (var i=0; i < nPoints; i++) {
var v=data[i];
var bin=(Math.floor((v - f0) / df)|0);
if (bin < 0 || bin >= nbins ) continue;
array[bin]++;
if (key != null ) {
var map=maps[i];
if (map == null ) continue;
map.put$O$O("_bin", $I$(1).newI$I(bin));
var v1=f0 + df * bin;
var v2=v1 + df;
map.put$O$O("_binMin", $I$(1,"newF$F",[bin == 0 ? -3.4028235E38 : v1]));
map.put$O$O("_binMax", $I$(1,"newF$F",[bin == nbins - 1 ? 3.4028235E38 : v2]));
}}
if (addBins) {
var lst=Clazz.new_($I$(5,1));
for (var i=0; i < nbins; i++) lst.addLast$O(Clazz.array(Float.TYPE, -1, [f0 + df * i, array[i]]));

return mp.addXList$javajs_util_Lst(lst);
}return mp.addXAI$IA(array);
}, p$1);

Clazz.newMeth(C$, 'evaluateCache$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
if (args.length > 0) return false;
return mp.addXMap$java_util_Map(this.vwr.fm.cacheList$());
}, p$1);

Clazz.newMeth(C$, 'evaluateColor$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
var colorScheme=(args.length > 0 ? $I$(1).sValue$org_jmol_script_T(args[0]) : "");
var isIsosurface=colorScheme.startsWith$S("$");
if (args.length == 2 && colorScheme.equalsIgnoreCase$S("TOHSL") ) return mp.addXPt$javajs_util_P3($I$(8,"rgbToHSL$javajs_util_P3$Z",[$I$(2,"newP$javajs_util_T3",[args[1].tok == 8 ? $I$(1).ptValue$org_jmol_script_SV(args[1]) : $I$(8,"colorPtFromString$S",[args[1].asString$()])]), true]));
if (args.length == 2 && colorScheme.equalsIgnoreCase$S("TORGB") ) {
var pt=$I$(2,"newP$javajs_util_T3",[args[1].tok == 8 ? $I$(1).ptValue$org_jmol_script_SV(args[1]) : $I$(8,"colorPtFromString$S",[args[1].asString$()])]);
return mp.addXPt$javajs_util_P3(args[1].tok == 8 ? $I$(8).hslToRGB$javajs_util_P3(pt) : pt);
}if (args.length == 4 && (args[3].tok == 1073742335 || args[3].tok == 1073742334 ) ) {
var pt1=$I$(2,"newP$javajs_util_T3",[args[0].tok == 8 ? $I$(1).ptValue$org_jmol_script_SV(args[0]) : $I$(8,"colorPtFromString$S",[args[0].asString$()])]);
var pt2=$I$(2,"newP$javajs_util_T3",[args[1].tok == 8 ? $I$(1).ptValue$org_jmol_script_SV(args[1]) : $I$(8,"colorPtFromString$S",[args[1].asString$()])]);
var usingHSL=(args[3].tok == 1073742335);
if (usingHSL) {
pt1=$I$(8).rgbToHSL$javajs_util_P3$Z(pt1, false);
pt2=$I$(8).rgbToHSL$javajs_util_P3$Z(pt2, false);
}var sb=Clazz.new_($I$(9,1));
var vd=$I$(10).newVsub$javajs_util_T3$javajs_util_T3(pt2, pt1);
var n=args[2].asInt$();
if (n < 2) n=20;
vd.scale$F(1.0 / (n - 1));
for (var i=0; i < n; i++) {
sb.append$S($I$(11,"escapeColor$I",[$I$(8,"colorPtToFFRGB$javajs_util_T3",[usingHSL ? $I$(8).hslToRGB$javajs_util_P3(pt1) : pt1])]));
pt1.add$javajs_util_T3(vd);
}
return mp.addXStr$S(sb.toString());
}var ce=(isIsosurface ? null : this.vwr.cm.getColorEncoder$S(colorScheme));
if (!isIsosurface && ce == null  ) return mp.addXStr$S("");
var lo=(args.length > 1 ? $I$(1).fValue$org_jmol_script_T(args[1]) : 3.4028235E38);
var hi=(args.length > 2 ? $I$(1).fValue$org_jmol_script_T(args[2]) : 3.4028235E38);
var value=(args.length > 3 ? $I$(1).fValue$org_jmol_script_T(args[3]) : 3.4028235E38);
var getValue=(value != 3.4028235E38  || lo != 3.4028235E38  && hi == 3.4028235E38   );
var haveRange=(hi != 3.4028235E38 );
if (!haveRange && colorScheme.length$() == 0 ) {
value=lo;
var range=this.vwr.getCurrentColorRange$();
lo=range[0];
hi=range[1];
}if (isIsosurface) {
var id=colorScheme.substring$I(1);
var data=Clazz.array(java.lang.Object, -1, [id, null]);
if (!this.vwr.shm.getShapePropertyData$I$S$OA(24, "colorEncoder", data)) return mp.addXStr$S("");
ce=data[1];
} else {
ce.setRange$F$F$Z(lo, hi, lo > hi );
}var key=ce.getColorKey$();
if (getValue) return mp.addXPt$javajs_util_P3($I$(8,"colorPtFromInt$I$javajs_util_P3",[ce.getArgb$F(hi == 3.4028235E38  ? lo : value), null]));
return mp.addX$org_jmol_script_SV($I$(1).getVariableMap$java_util_Map(key));
}, p$1);

Clazz.newMeth(C$, 'evaluateCompare$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
if (args.length < 2 || args.length > 5 ) return false;
var stddev;
var sOpt=$I$(1).sValue$org_jmol_script_T(args[args.length - 1]);
var isStdDev=sOpt.equalsIgnoreCase$S("stddev");
var isIsomer=sOpt.equalsIgnoreCase$S("ISOMER");
var isBonds=sOpt.equalsIgnoreCase$S("BONDS");
var isSmiles=(!isIsomer && args.length > (isStdDev ? 3 : 2) );
var bs1=(args[0].tok == 10 ? args[0].value : null);
var bs2=(args[1].tok == 10 ? args[1].value : null);
var smiles1=(bs1 == null  ? $I$(1).sValue$org_jmol_script_T(args[0]) : "");
var smiles2=(bs2 == null  ? $I$(1).sValue$org_jmol_script_T(args[1]) : "");
var m=Clazz.new_($I$(12,1));
stddev=NaN;
var ptsA;
var ptsB;
try {
if (isSmiles) {
if (bs1 == null  || bs2 == null  ) return false;
}if (isBonds) {
if (args.length != 4) return false;
smiles1=$I$(1).sValue$org_jmol_script_T(args[2]);
isSmiles=smiles1.equalsIgnoreCase$S("SMILES");
try {
if (isSmiles) smiles1=this.vwr.getSmiles$javajs_util_BS(bs1);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.e.evalError$S$S(ex.getMessage$(), null);
} else {
throw ex;
}
}
var data=this.e.getSmilesExt$().getFlexFitList$javajs_util_BS$javajs_util_BS$S$Z(bs1, bs2, smiles1, !isSmiles);
return (data == null  ? mp.addXStr$S("") : mp.addXAF$FA(data));
}if (isIsomer) {
if (args.length != 3) return false;
if (bs1 == null  && bs2 == null  ) return mp.addXStr$S(this.vwr.getSmilesMatcher$().getRelationship$S$S(smiles1, smiles2).toUpperCase$());
var mf1=(bs1 == null  ? this.vwr.getSmilesMatcher$().getMolecularFormula$S$Z(smiles1, false) : $I$(13).getMolecularFormulaAtoms$org_jmol_util_NodeA$javajs_util_BS$FA$Z(this.vwr.ms.at, bs1, null, false));
var mf2=(bs2 == null  ? this.vwr.getSmilesMatcher$().getMolecularFormula$S$Z(smiles2, false) : $I$(13).getMolecularFormulaAtoms$org_jmol_util_NodeA$javajs_util_BS$FA$Z(this.vwr.ms.at, bs2, null, false));
if (!mf1.equals$O(mf2)) return mp.addXStr$S("NONE");
if (bs1 != null ) smiles1=this.e.getSmilesExt$().getSmilesMatches$S$S$javajs_util_BS$javajs_util_BS$I$Z$Z("/strict///", null, bs1, null, 1, true, false);
var check;
if (bs2 == null ) {
check=(this.vwr.getSmilesMatcher$().areEqual$S$S(smiles2, smiles1) > 0);
} else {
smiles2=this.e.getSmilesExt$().getSmilesMatches$S$S$javajs_util_BS$javajs_util_BS$I$Z$Z("/strict///", null, bs2, null, 1, true, false);
check=((this.e.getSmilesExt$().getSmilesMatches$S$S$javajs_util_BS$javajs_util_BS$I$Z$Z("/strict///" + smiles1, null, bs2, null, 1, true, false)).nextSetBit$I(0) >= 0);
}if (!check) {
var s=smiles1 + smiles2;
if (s.indexOf$S("/") >= 0 || s.indexOf$S("\\") >= 0  || s.indexOf$S("@") >= 0 ) {
if (smiles1.indexOf$S("@") >= 0 && (bs2 != null  || smiles2.indexOf$S("@") >= 0 )  && smiles1.indexOf$S("@SP") < 0 ) {
var pt=smiles1.toLowerCase$().indexOf$S("invertstereo");
smiles1=(pt >= 0 ? "/strict/" + smiles1.substring$I$I(0, pt) + smiles1.substring$I(pt + 12)  : "/invertstereo strict/" + smiles1);
if (bs2 == null ) {
check=(this.vwr.getSmilesMatcher$().areEqual$S$S(smiles1, smiles2) > 0);
} else {
check=((this.e.getSmilesExt$().getSmilesMatches$S$S$javajs_util_BS$javajs_util_BS$I$Z$Z(smiles1, null, bs2, null, 1, true, false)).nextSetBit$I(0) >= 0);
}if (check) return mp.addXStr$S("ENANTIOMERS");
}if (bs2 == null ) {
check=(this.vwr.getSmilesMatcher$().areEqual$S$S("/nostereo/" + smiles2, smiles1) > 0);
} else {
var ret=this.e.getSmilesExt$().getSmilesMatches$S$S$javajs_util_BS$javajs_util_BS$I$Z$Z("/nostereo/" + smiles1, null, bs2, null, 1, true, false);
check=((ret).nextSetBit$I(0) >= 0);
}if (check) return mp.addXStr$S("DIASTEREOMERS");
}return mp.addXStr$S("CONSTITUTIONAL ISOMERS");
}if (bs1 == null  || bs2 == null  ) return mp.addXStr$S("IDENTICAL");
stddev=this.e.getSmilesExt$().getSmilesCorrelation$javajs_util_BS$javajs_util_BS$S$javajs_util_Lst$javajs_util_Lst$javajs_util_M4$javajs_util_Lst$Z$IAA$javajs_util_P3$Z$I(bs1, bs2, smiles1, null, null, null, null, false, null, null, false, 1);
return mp.addXStr$S(stddev < 0.2  ? "IDENTICAL" : "IDENTICAL or CONFORMATIONAL ISOMERS (RMSD=" + new Float(stddev).toString() + ")" );
}if (isSmiles) {
ptsA=Clazz.new_($I$(5,1));
ptsB=Clazz.new_($I$(5,1));
sOpt=$I$(1).sValue$org_jmol_script_T(args[2]);
var isMap=sOpt.equalsIgnoreCase$S("MAP");
isSmiles=sOpt.equalsIgnoreCase$S("SMILES");
var isSearch=(isMap || sOpt.equalsIgnoreCase$S("SMARTS") );
if (isSmiles || isSearch ) sOpt=(args.length > (isStdDev ? 4 : 3) ? $I$(1).sValue$org_jmol_script_T(args[3]) : null);
var hMaps=(("H".equalsIgnoreCase$S(sOpt) || "allH".equalsIgnoreCase$S(sOpt) || "bestH".equalsIgnoreCase$S(sOpt)  ));
var isPolyhedron=("polyhedra".equalsIgnoreCase$S(sOpt));
if (isPolyhedron) sOpt=(args.length > (isStdDev ? 5 : 4) ? $I$(1).sValue$org_jmol_script_T(args[4]) : null);
var allMaps=(("all".equalsIgnoreCase$S(sOpt) || "allH".equalsIgnoreCase$S(sOpt) ));
var bestMap=(("best".equalsIgnoreCase$S(sOpt) || "bestH".equalsIgnoreCase$S(sOpt) ));
if ("stddev".equals$O(sOpt)) sOpt=null;
var pattern=sOpt;
if (sOpt == null  || hMaps  || allMaps  || bestMap ) {
if (!isMap && !isSmiles  || hMaps && isPolyhedron  ) return false;
pattern="/noaromatic" + (allMaps || bestMap  ? "/" : " nostereo/") + this.e.getSmilesExt$().getSmilesMatches$S$S$javajs_util_BS$javajs_util_BS$I$Z$Z((hMaps ? "H" : ""), null, bs1, null, 1, true, false) ;
} else {
allMaps=true;
}stddev=this.e.getSmilesExt$().getSmilesCorrelation$javajs_util_BS$javajs_util_BS$S$javajs_util_Lst$javajs_util_Lst$javajs_util_M4$javajs_util_Lst$Z$IAA$javajs_util_P3$Z$I(bs1, bs2, pattern, ptsA, ptsB, m, null, isMap, null, null, bestMap, (isSmiles ? 1 : 2) | (!allMaps && !bestMap  ? 8 : 0));
if (isMap) {
var nAtoms=ptsA.size$();
if (nAtoms == 0) return mp.addXStr$S("");
var nMatch=(ptsB.size$()/nAtoms|0);
var ret=Clazz.new_($I$(5,1));
for (var i=0, pt=0; i < nMatch; i++) {
var a=$I$(7).newInt2$I(nAtoms);
ret.addLast$O(a);
for (var j=0; j < nAtoms; j++, pt++) a[j]=Clazz.array(Integer.TYPE, -1, [(ptsA.get$I(j)).i, (ptsB.get$I(pt)).i]);

}
return (allMaps ? mp.addXList$javajs_util_Lst(ret) : ret.size$() > 0 ? mp.addXAII$IAA(ret.get$I(0)) : mp.addXStr$S(""));
}} else {
switch (args.length) {
case 2:
break;
case 3:
if (isStdDev) break;
default:
return false;
}
ptsA=this.e.getPointVector$org_jmol_script_T$I(args[0], 0);
ptsB=this.e.getPointVector$org_jmol_script_T$I(args[1], 0);
if (ptsA != null  && ptsB != null  ) {
$I$(14).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.Eigen", this.vwr, "script");
stddev=$I$(15).getTransformMatrix4$javajs_util_Lst$javajs_util_Lst$javajs_util_M4$javajs_util_P3(ptsA, ptsB, m, null);
}}return (isStdDev || Float.isNaN$F(stddev)  ? mp.addXFloat$F(stddev) : mp.addXM4$javajs_util_M4(m.round$F(1.0E-7)));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.e.evalError$S$S(ex.getMessage$() == null  ? ex.toString() : ex.getMessage$(), null);
return false;
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'evaluateConnected$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I$I', function (mp, args, tok, intValue) {
if (args.length > 5) return false;
var min=-2147483648;
var max=2147483647;
var fmin=0;
var fmax=3.4028235E38;
var order=65535;
var atoms1=null;
var atoms2=null;
var haveDecimal=false;
var isBonds=false;
switch (tok) {
case 1275203608:
var nv=-2147483648;
var smiles=null;
if (args.length > 0) {
switch (args[0].tok) {
case 2:
nv=args[0].intValue;
break;
case 4:
smiles=$I$(1).sValue$org_jmol_script_T(args[0]);
break;
}
}if (intValue == 1275203608) atoms1=$I$(1,"getBitSet$org_jmol_script_SV$Z",[mp.getX$(), true]);
var data=Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(nv), smiles, atoms1]);
if (!this.vwr.shm.getShapePropertyData$I$S$OA(21, "getCenters", data)) data[1]=null;
return mp.addXBs$javajs_util_BS(data[1] == null  ? Clazz.new_($I$(16,1)) : data[1]);
case 1228931587:
var x1=mp.getX$();
if (x1.tok != 10 || args.length != 1  || args[0].tok != 10 ) return false;
atoms1=x1.value;
atoms2=args[0].value;
var list=Clazz.new_($I$(5,1));
var atoms=this.vwr.ms.at;
for (var i=atoms1.nextSetBit$I(0); i >= 0; i=atoms1.nextSetBit$I(i + 1)) {
var n=0;
var b=atoms[i].bonds;
for (var j=b.length; --j >= 0; ) if (atoms2.get$I(b[j].getOtherAtom$org_jmol_modelset_Atom(atoms[i]).i)) n++;

list.addLast$O(Integer.valueOf$I(n));
}
return mp.addXList$javajs_util_Lst(list);
}
for (var i=0; i < args.length; i++) {
var $var=args[i];
switch ($var.tok) {
case 10:
isBonds=(Clazz.instanceOf($var.value, "org.jmol.modelset.BondSet"));
if (isBonds && atoms1 != null  ) return false;
if (atoms1 == null ) atoms1=$var.value;
 else if (atoms2 == null ) atoms2=$var.value;
 else return false;
break;
case 4:
var type=$I$(1).sValue$org_jmol_script_T($var);
if (type.equalsIgnoreCase$S("hbond")) order=30720;
 else order=$I$(17).getBondOrderFromString$S(type);
if (order == 131071) return false;
break;
case 3:
haveDecimal=true;
default:
var n=$var.asInt$();
var f=$var.asFloat$();
if (max != 2147483647 ) return false;
if (min == -2147483648 ) {
min=Math.max(n, 0);
fmin=f;
} else {
max=n;
fmax=f;
}}
}
if (min == -2147483648 ) {
min=1;
max=100;
fmin=0.1;
fmax=1.0E8;
} else if (max == 2147483647 ) {
max=min;
fmax=fmin;
fmin=0.1;
}if (atoms1 == null ) atoms1=this.vwr.getAllAtoms$();
if (haveDecimal && atoms2 == null  ) atoms2=atoms1;
if (atoms2 != null ) {
var bsBonds=Clazz.new_($I$(16,1));
this.vwr.makeConnections$F$F$I$I$javajs_util_BS$javajs_util_BS$javajs_util_BS$Z$Z$F(fmin, fmax, order, 1086324745, atoms1, atoms2, bsBonds, isBonds, false, 0);
return mp.addX$org_jmol_script_SV($I$(1,"newV$I$O",[10, $I$(18,"newBS$javajs_util_BS$IA",[bsBonds, this.vwr.ms.getAtomIndices$javajs_util_BS(this.vwr.ms.getAtoms$I$O(1677721602, bsBonds))])]));
}return mp.addXBs$javajs_util_BS(this.vwr.ms.getAtomsConnected$F$F$I$javajs_util_BS(min, max, order, atoms1));
}, p$1);

Clazz.newMeth(C$, 'evaluateContact$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
if (args.length < 1 || args.length > 3 ) return false;
var i=0;
var distance=100;
var tok=args[0].tok;
switch (tok) {
case 3:
case 2:
distance=$I$(1).fValue$org_jmol_script_T(args[i++]);
break;
case 10:
break;
default:
return false;
}
if (i == args.length || !(Clazz.instanceOf(args[i].value, "javajs.util.BS")) ) return false;
var bsA=$I$(19).copy$javajs_util_BS(args[i++].value);
var bsB=(i < args.length ? $I$(19).copy$javajs_util_BS(args[i].value) : null);
var rd=Clazz.new_([null, (distance > 10  ? distance / 100 : distance), (distance > 10  ? $I$(21).FACTOR : $I$(21).OFFSET), $I$(22).AUTO],$I$(20,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW);
bsB=this.setContactBitSets$javajs_util_BS$javajs_util_BS$Z$F$org_jmol_atomdata_RadiusData$Z(bsA, bsB, true, NaN, rd, false);
bsB.or$javajs_util_BS(bsA);
return mp.addXBs$javajs_util_BS(bsB);
}, p$1);

Clazz.newMeth(C$, 'evaluateData$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
var selected=(args.length == 0 ? "" : $I$(1).sValue$org_jmol_script_T(args[0]));
var type="";
switch (args.length) {
case 0:
case 1:
break;
case 2:
case 3:
if (args[0].tok == 10) return mp.addXStr$S(this.vwr.getModelFileData$S$S$Z(selected, $I$(1).sValue$org_jmol_script_T(args[1]), args.length == 3 && $I$(1).bValue$org_jmol_script_T(args[2]) ));
break;
case 4:
var iField=args[1].asInt$();
var nBytes=args[2].asInt$();
var firstLine=args[3].asInt$();
var f=$I$(23,"parseFloatArrayFromMatchAndField$S$javajs_util_BS$I$I$IA$I$I$FA$I",[$I$(1).sValue$org_jmol_script_T(args[0]), null, 0, 0, null, iField, nBytes, null, firstLine]);
return mp.addXStr$S($I$(11).escapeFloatA$FA$Z(f, false));
default:
return false;
}
if (selected.indexOf$S("data2d_") == 0) {
var f1=this.vwr.getDataObj$S$javajs_util_BS$I(selected, null, 2);
if (f1 == null ) return mp.addXStr$S("");
if (args.length == 2 && args[1].tok == 2 ) {
var pt=args[1].intValue;
if (pt < 0) pt+=f1.length;
if (pt >= 0 && pt < f1.length ) return mp.addXStr$S($I$(11).escapeFloatA$FA$Z(f1[pt], false));
return mp.addXStr$S("");
}return mp.addXStr$S($I$(11).escapeFloatAA$FAA$Z(f1, false));
}if (selected.indexOf$S("property_") == 0) {
var f1=this.vwr.getDataObj$S$javajs_util_BS$I(selected, null, 1);
if (f1 == null ) return mp.addXStr$S("");
var f2=(type.indexOf$S("property_") == 0 ? this.vwr.getDataObj$S$javajs_util_BS$I(selected, null, 1) : null);
if (f2 != null ) {
f1=$I$(7).arrayCopyF$FA$I(f1, -1);
for (var i=Math.min(f1.length, f2.length); --i >= 0; ) f1[i] += f2[i];

}return mp.addXStr$S($I$(11).escapeFloatA$FA$Z(f1, false));
}var data=this.vwr.getDataObj$S$javajs_util_BS$I(selected, null, -1);
return mp.addXStr$S(data == null  ? "" : "" + data[1]);
}, p$1);

Clazz.newMeth(C$, 'evaluateDotDist$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I$I', function (mp, args, tok, op) {
var isDist=(tok == 1275069443);
var x1;
var x2;
var x3=null;
switch (args.length) {
case 2:
if (op == 2147483647) {
x1=args[0];
x2=args[1];
break;
}x3=args[1];
case 1:
x1=mp.getX$();
x2=args[0];
break;
default:
return false;
}
if (tok == 1275069442) {
var a=$I$(2,"newP$javajs_util_T3",[mp.ptValue$org_jmol_script_SV$javajs_util_BS(x1, null)]);
a.cross$javajs_util_T3$javajs_util_T3(a, mp.ptValue$org_jmol_script_SV$javajs_util_BS(x2, null));
return mp.addXPt$javajs_util_P3(a);
}var pt2=(x2.tok == 7 ? null : mp.ptValue$org_jmol_script_SV$javajs_util_BS(x2, null));
var plane2=mp.planeValue$org_jmol_script_T(x2);
var f=NaN;
try {
if (isDist) {
var minMax=(op == -2147483648 ? 0 : op & 480);
var isMinMax=(minMax == 32 || minMax == 64 );
var isAll=minMax == 480;
switch (x1.tok) {
case 7:
case 10:
var isAtomSet1=(x1.tok == 10);
var isAtomSet2=(x2.tok == 10);
var isPoint2=(x2.tok == 8);
var bs1=(isAtomSet1 ? x1.value : null);
var bs2=(isAtomSet2 ? x2.value : null);
var list1=(isAtomSet1 ? null : x1.getList$());
var list2=(isAtomSet2 ? null : x2.getList$());
var returnAtom=(isMinMax && x3 != null   && x3.asBoolean$() );
switch (x2.tok) {
case 10:
case 7:
case 8:
var atoms=this.vwr.ms.at;
if (returnAtom) {
var dMinMax=NaN;
var iMinMax=2147483647;
if (isAtomSet1) {
for (var i=bs1.nextSetBit$I(0); i >= 0; i=bs1.nextSetBit$I(i + 1)) {
var d=(isPoint2 ? atoms[i].distanceSquared$javajs_util_T3(pt2) : (this.e.getBitsetProperty$javajs_util_BS$javajs_util_Lst$I$javajs_util_P3$javajs_util_P4$O$O$Z$I$Z(bs2, list2, op, atoms[i], plane2, x1.value, null, false, x1.index, false)).floatValue$());
if (minMax == 32 ? d >= dMinMax  : d <= dMinMax ) continue;
dMinMax=d;
iMinMax=i;
}
return mp.addXBs$javajs_util_BS(iMinMax == 2147483647 ? Clazz.new_($I$(16,1)) : $I$(19).newAndSetBit$I(iMinMax));
}for (var i=list1.size$(); --i >= 0; ) {
var pt=$I$(1,"ptValue$org_jmol_script_SV",[list1.get$I(i)]);
var d=(isPoint2 ? pt.distanceSquared$javajs_util_T3(pt2) : (this.e.getBitsetProperty$javajs_util_BS$javajs_util_Lst$I$javajs_util_P3$javajs_util_P4$O$O$Z$I$Z(bs2, list2, op, pt, plane2, x1.value, null, false, 2147483647, false)).floatValue$());
if (minMax == 32 ? d >= dMinMax  : d <= dMinMax ) continue;
dMinMax=d;
iMinMax=i;
}
return mp.addXInt$I(iMinMax);
}if (isAll) {
if (bs2 == null ) {
var data=Clazz.array(Float.TYPE, [bs1.cardinality$()]);
for (var p=0, i=bs1.nextSetBit$I(0); i >= 0; i=bs1.nextSetBit$I(i + 1), p++) data[p]=atoms[i].distance$javajs_util_T3(pt2);

return mp.addXAF$FA(data);
}var data2=Clazz.array(Float.TYPE, [bs1.cardinality$(), bs2.cardinality$()]);
for (var p=0, i=bs1.nextSetBit$I(0); i >= 0; i=bs1.nextSetBit$I(i + 1), p++) for (var q=0, j=bs2.nextSetBit$I(0); j >= 0; j=bs2.nextSetBit$I(j + 1), q++) data2[p][q]=atoms[i].distance$javajs_util_T3(atoms[j]);


return mp.addXAFF$FAA(data2);
}if (isMinMax) {
var data=Clazz.array(Float.TYPE, [isAtomSet1 ? bs1.cardinality$() : list1.size$()]);
if (isAtomSet1) {
for (var i=bs1.nextSetBit$I(0), p=0; i >= 0; i=bs1.nextSetBit$I(i + 1)) data[p++]=(this.e.getBitsetProperty$javajs_util_BS$javajs_util_Lst$I$javajs_util_P3$javajs_util_P4$O$O$Z$I$Z(bs2, list2, op, atoms[i], plane2, x1.value, null, false, x1.index, false)).floatValue$();

return mp.addXAF$FA(data);
}for (var i=data.length; --i >= 0; ) data[i]=(this.e.getBitsetProperty$javajs_util_BS$javajs_util_Lst$I$javajs_util_P3$javajs_util_P4$O$O$Z$I$Z(bs2, list2, op, $I$(1,"ptValue$org_jmol_script_SV",[list1.get$I(i)]), plane2, null, null, false, 2147483647, false)).floatValue$();

return mp.addXAF$FA(data);
}return mp.addXObj$O(this.e.getBitsetProperty$javajs_util_BS$javajs_util_Lst$I$javajs_util_P3$javajs_util_P4$O$O$Z$I$Z(bs1, list1, op, pt2, plane2, x1.value, null, false, x1.index, false));
}
}
}var pt1=mp.ptValue$org_jmol_script_SV$javajs_util_BS(x1, null);
var plane1=mp.planeValue$org_jmol_script_T(x1);
if (isDist) {
if (plane2 != null  && x3 != null  ) f=$I$(15,"directedDistanceToPlane$javajs_util_P3$javajs_util_P4$javajs_util_P3",[pt1, plane2, $I$(1).ptValue$org_jmol_script_SV(x3)]);
 else f=(plane1 == null  ? (plane2 == null  ? pt2.distance$javajs_util_T3(pt1) : $I$(15).distanceToPlane$javajs_util_P4$javajs_util_T3(plane2, pt1)) : $I$(15).distanceToPlane$javajs_util_P4$javajs_util_T3(plane1, pt2));
} else {
if (plane1 != null  && plane2 != null  ) {
f=plane1.x * plane2.x + plane1.y * plane2.y + plane1.z * plane2.z + plane1.w * plane2.w;
} else {
if (plane1 != null ) pt1=$I$(2).new3$F$F$F(plane1.x, plane1.y, plane1.z);
 else if (plane2 != null ) pt2=$I$(2).new3$F$F$F(plane2.x, plane2.y, plane2.z);
f=pt1.dot$javajs_util_T3(pt2);
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return mp.addXFloat$F(f);
}, p$1);

Clazz.newMeth(C$, 'evaluateHelix$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
if (args.length < 1 || args.length > 5 ) return false;
var pt=(args.length > 2 ? 3 : 1);
var type=(pt >= args.length ? "array" : $I$(1).sValue$org_jmol_script_T(args[pt]));
var tok=$I$(24).getTokFromName$S(type);
if (args.length > 2) {
var pta=mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[0], null);
var ptb=mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[1], null);
if (tok == 0 || args[2].tok != 9  || pta == null   || ptb == null  ) return false;
var dq=$I$(25).newP4$javajs_util_P4(args[2].value);
var data=$I$(15).computeHelicalAxis$javajs_util_P3$javajs_util_P3$javajs_util_Quat(pta, ptb, dq);
return (data == null  ? false : mp.addXObj$O($I$(11).escapeHelical$S$I$javajs_util_P3$javajs_util_P3$javajs_util_T3A(type, tok, pta, ptb, data)));
}var bs=(Clazz.instanceOf(args[0].value, "javajs.util.BS") ? args[0].value : this.vwr.ms.getAtoms$I$O(1094715412,  new Integer(args[0].asInt$())));
switch (tok) {
case 134217751:
case 1073741854:
case 1665140738:
return mp.addXObj$O(p$1.getHelixData$javajs_util_BS$I.apply(this, [bs, tok]));
case 134217729:
return mp.addXFloat$F((p$1.getHelixData$javajs_util_BS$I.apply(this, [bs, 134217729])).floatValue$());
case 135176:
case 1745489939:
return mp.addXObj$O(p$1.getHelixData$javajs_util_BS$I.apply(this, [bs, tok]));
case 1275068418:
var data=p$1.getHelixData$javajs_util_BS$I.apply(this, [bs, 1073742001]);
if (data == null ) return false;
return mp.addXAS$SA(data);
}
return false;
}, p$1);

Clazz.newMeth(C$, 'getHelixData$javajs_util_BS$I', function (bs, tokType) {
var iAtom=bs.nextSetBit$I(0);
return (iAtom < 0 ? "null" : this.vwr.ms.at[iAtom].group.getHelixData$I$C$I(tokType, this.vwr.getQuaternionFrame$(), this.vwr.getInt$I(553648144)));
}, p$1);

Clazz.newMeth(C$, 'evaluateFind$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
var x1=mp.getX$();
var isList=(x1.tok == 7);
var isEmpty=(args.length == 0);
var sFind=(isEmpty ? "" : $I$(1).sValue$org_jmol_script_T(args[0]));
var flags=(args.length > 1 && args[1].tok != 1073742335  && args[1].tok != 1073742334  && args[1].tok != 10  ? $I$(1).sValue$org_jmol_script_T(args[1]) : "");
var isSequence=!isList && sFind.equalsIgnoreCase$S("SEQUENCE") ;
var isSeq=!isList && sFind.equalsIgnoreCase$S("SEQ") ;
if (sFind.toUpperCase$().startsWith$S("SMILES/")) {
if (!sFind.endsWith$S("/")) sFind += "/";
var s=sFind.substring$I(6) + "//";
if ($I$(26).isSmilesCanonical$S(s)) {
flags="SMILES";
sFind="CHEMICAL";
} else {
sFind="SMILES";
flags=s + flags;
}} else if (sFind.toUpperCase$().startsWith$S("SMARTS/")) {
if (!sFind.endsWith$S("/")) sFind += "/";
flags=sFind.substring$I(6) + (flags.length$() == 0 ? "//" : flags);
sFind="SMARTS";
}var isSmiles=!isList && sFind.equalsIgnoreCase$S("SMILES") ;
var isSMARTS=!isList && sFind.equalsIgnoreCase$S("SMARTS") ;
var isChemical=!isList && sFind.equalsIgnoreCase$S("CHEMICAL") ;
var isMF=!isList && sFind.equalsIgnoreCase$S("MF") ;
var isCF=!isList && sFind.equalsIgnoreCase$S("CELLFORMULA") ;
var argLast=(args.length > 0 ? args[args.length - 1] : $I$(1).vF);
var isON=!isList && (argLast.tok == 1073742335) ;
try {
if (isChemical) {
var bsAtoms=(x1.tok == 10 ? x1.value : null);
var data=(bsAtoms == null  ? $I$(1).sValue$org_jmol_script_T(x1) : this.vwr.getOpenSmiles$javajs_util_BS(bsAtoms));
data=(data.length$() == 0 ? "" : this.vwr.getChemicalInfo$S$S$javajs_util_BS(data, flags.toLowerCase$(), bsAtoms)).trim$();
if (data.startsWith$S("InChI")) data=$I$(27,"rep$S$S$S",[$I$(27,"rep$S$S$S",[data, "InChI=", ""]), "InChIKey=", ""]);
return mp.addXStr$S(data);
}if (isSmiles || isSMARTS || x1.tok == 10  ) {
var iPt=(isSmiles || isSMARTS  ? 2 : 1);
var bs2=(iPt < args.length && args[iPt].tok == 10  ? args[iPt++].value : null);
var asBonds=("bonds".equalsIgnoreCase$S($I$(1).sValue$org_jmol_script_T(args[args.length - 1])));
var isAll=(asBonds || isON );
var ret=null;
switch (x1.tok) {
case 4:
var smiles=$I$(1).sValue$org_jmol_script_T(x1);
if (bs2 != null  || isSmiles && args.length == 1  ) return false;
if (flags.equalsIgnoreCase$S("mf")) {
ret=this.vwr.getSmilesMatcher$().getMolecularFormula$S$Z(smiles, isSMARTS);
} else {
var pattern=flags;
var allMappings=true;
var asMap=false;
switch (args.length) {
case 4:
allMappings=$I$(1).bValue$org_jmol_script_T(args[3]);
case 3:
asMap=$I$(1).bValue$org_jmol_script_T(args[2]);
break;
}
var justOne=(!asMap && (!allMappings || !isSMARTS && !pattern.equals$O("chirality")  ) );
try {
ret=this.e.getSmilesExt$().getSmilesMatches$S$S$javajs_util_BS$javajs_util_BS$I$Z$Z(pattern, smiles, null, null, isSMARTS ? 2 : 1, !asMap, !allMappings);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S(ex.getMessage$());
return mp.addXInt$I(-1);
} else {
throw ex;
}
}
if (justOne) {
var len=(ret).length;
return mp.addXInt$I(!allMappings && len > 0  ? 1 : len);
}}break;
case 10:
var bs=x1.value;
if (isMF && flags.length$() != 0 ) return mp.addXBs$javajs_util_BS($I$(13).getBitSetForMF$org_jmol_modelset_AtomA$javajs_util_BS$S(this.vwr.ms.at, bs, flags));
if (isMF || isCF ) return mp.addXStr$S($I$(13,"getMolecularFormulaAtoms$org_jmol_util_NodeA$javajs_util_BS$FA$Z",[this.vwr.ms.at, bs, (isMF ? null : this.vwr.ms.getCellWeights$javajs_util_BS(bs)), isON]));
if (isSequence || isSeq ) {
var isHH=(argLast.asString$().equalsIgnoreCase$S("H"));
isAll|=isHH;
return mp.addXStr$S(this.vwr.getSmilesOpt$javajs_util_BS$I$I$I$S(bs, -1, -1, (isAll ? 3145728 | 5242880 | (isHH ? 9437184 : 0)  : 0) | (isSeq ? 34603008 : 1048576), null));
}if (isSmiles || isSMARTS ) sFind=(args.length > 1 && args[1].tok == 10  ? this.vwr.getSmilesOpt$javajs_util_BS$I$I$I$S(args[1].value, 0, 0, 0, flags) : flags);
flags=flags.toUpperCase$();
var bsMatch3D=bs2;
if (asBonds) {
var map=this.vwr.getSmilesMatcher$().getCorrelationMaps$S$org_jmol_util_NodeA$I$javajs_util_BS$I(sFind, this.vwr.ms.at, this.vwr.ms.ac, bs, (isSmiles ? 1 : 2) | 8);
ret=(map.length > 0 ? this.vwr.ms.getDihedralMap$IA(map[0]) : Clazz.array(Integer.TYPE, [0]));
} else if (flags.equalsIgnoreCase$S("map")) {
var map=this.vwr.getSmilesMatcher$().getCorrelationMaps$S$org_jmol_util_NodeA$I$javajs_util_BS$I(sFind, this.vwr.ms.at, this.vwr.ms.ac, bs, (isSmiles ? 1 : 2) | 128);
ret=map;
} else if (sFind.equalsIgnoreCase$S("crystalClass")) {
ret=this.vwr.ms.generateCrystalClass$I$javajs_util_P3(bs.nextSetBit$I(0), (args.length != 2 ? null : argLast.tok == 10 ? this.vwr.ms.getAtomSetCenter$javajs_util_BS(argLast.value) : $I$(1).ptValue$org_jmol_script_SV(argLast)));
} else {
var smilesFlags=(isSmiles ? (flags.indexOf$S("OPEN") >= 0 ? 5 : 1) : 2) | (isON && sFind.length$() == 0  ? 22020096 : 0);
if (flags.indexOf$S("/MOLECULE/") >= 0) {
var mols=this.vwr.ms.getMolecules$();
var molList=Clazz.new_($I$(5,1));
for (var i=0; i < mols.length; i++) {
if (mols[i].atomList.intersects$javajs_util_BS(bs)) {
var bsRet=this.e.getSmilesExt$().getSmilesMatches$S$S$javajs_util_BS$javajs_util_BS$I$Z$Z(sFind, null, mols[i].atomList, bsMatch3D, smilesFlags, !isON, false);
if (!bsRet.isEmpty$()) molList.addLast$O(bsRet);
}}
ret=molList;
} else {
ret=this.e.getSmilesExt$().getSmilesMatches$S$S$javajs_util_BS$javajs_util_BS$I$Z$Z(sFind, null, bs, bsMatch3D, smilesFlags, !isON, false);
}}break;
}
if (ret == null ) this.e.invArg$();
return mp.addXObj$O(ret);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.e.evalError$S$S(ex.getMessage$(), null);
} else {
throw ex;
}
}
var isReverse=(flags.indexOf$S("v") >= 0);
var isCaseInsensitive=(flags.indexOf$S("i") >= 0);
var asMatch=(flags.indexOf$S("m") >= 0);
var checkEmpty=(sFind.length$() == 0);
var isPattern=(!checkEmpty && args.length == 2 );
if (isList || isPattern ) {
var pm=(isPattern ? p$1.getPatternMatcher.apply(this, []) : null);
var pattern=null;
var svlist=(isList ? x1.getList$() : null);
if (isPattern) {
try {
pattern=pm.compile$S$Z(sFind, isCaseInsensitive);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.e.evalError$S$S(ex.toString(), null);
} else {
throw ex;
}
}
}var list=(checkEmpty ? null : $I$(1).strListValue$org_jmol_script_T(x1));
var nlist=(checkEmpty ? svlist.size$() : list.length);
if ($I$(28).debugging) $I$(28).debug$S("finding " + sFind);
var bs=Clazz.new_($I$(16,1));
var n=0;
var matcher=null;
var v=(asMatch ? Clazz.new_($I$(5,1)) : null);
var what="";
for (var i=0; i < nlist; i++) {
var isMatch;
if (checkEmpty) {
var o=svlist.get$I(i);
switch (o.tok) {
case 6:
isMatch=(o.getMap$().isEmpty$() != isEmpty );
break;
case 7:
isMatch=((o.getList$().size$() == 0) != isEmpty );
break;
case 4:
isMatch=((o.asString$().length$() == 0) != isEmpty );
break;
default:
isMatch=true;
}
} else if (isPattern) {
what=list[i];
matcher=pattern.matcher$CharSequence(what);
isMatch=matcher.find$();
} else {
isMatch=($I$(1,"sValue$org_jmol_script_T",[svlist.get$I(i)]).indexOf$S(sFind) >= 0);
}if (asMatch && isMatch  || !asMatch && isMatch == !isReverse   ) {
n++;
bs.set$I(i);
if (asMatch) v.addLast$O(isReverse ? what.substring$I$I(0, matcher.start$()) + what.substring$I(matcher.end$()) : matcher.group$());
}}
if (!isList) {
return (asMatch ? mp.addXStr$S(v.size$() == 1 ? v.get$I(0) : "") : isReverse ? mp.addXBool$Z(n == 1) : asMatch ? mp.addXStr$S(n == 0 ? "" : matcher.group$()) : mp.addXInt$I(n == 0 ? 0 : matcher.start$() + 1));
}if (asMatch) {
var listNew=Clazz.array(String, [n]);
if (n > 0) for (var i=list.length; --i >= 0; ) if (bs.get$I(i)) {
--n;
listNew[n]=(asMatch ? v.get$I(n) : list[i]);
}
return mp.addXAS$SA(listNew);
}var l=Clazz.new_($I$(5,1));
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) l.addLast$O(svlist.get$I(i));

return mp.addXList$javajs_util_Lst(l);
}if (isSequence) {
return mp.addXStr$S(this.vwr.getJBR$().toStdAmino3$S($I$(1).sValue$org_jmol_script_T(x1)));
}return mp.addXInt$I($I$(1).sValue$org_jmol_script_T(x1).indexOf$S(sFind) + 1);
}, p$1);

Clazz.newMeth(C$, 'evaluateGetProperty$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I$Z', function (mp, args, tok0, isAtomProperty) {
var nargs=args.length;
var isSelect=(isAtomProperty && tok0 == 1275082245 );
var isPivot=(isAtomProperty && tok0 == 1275068437  && nargs > 0 );
var isAuxiliary=(tok0 == 1275068449);
var pt=0;
var tok=(nargs == 0 ? 0 : args[0].tok);
if (nargs == 2 && (tok == 7 || tok == 6  || tok == 14 ) ) {
return mp.addXObj$O(this.vwr.extractProperty$O$O$I(args[0].value, args[1].value.toString(), -1));
}var bsSelect=(isAtomProperty && nargs == 1  && args[0].tok == 10  ? args[0].value : null);
var pname=(bsSelect == null  && nargs > 0  ? $I$(1).sValue$org_jmol_script_T(args[pt++]) : "");
var propertyName=pname;
var lc=propertyName.toLowerCase$();
if (!isSelect && lc.indexOf$S("[select ") < 0 ) propertyName=lc;
var isJSON=false;
if (propertyName.equals$O("json") && nargs > pt ) {
isJSON=true;
propertyName=$I$(1).sValue$org_jmol_script_T(args[pt++]);
}var x=null;
if (isAtomProperty) {
x=mp.getX$();
switch (x.tok) {
case 10:
break;
case 4:
var name=x.value;
var data=Clazz.array(java.lang.Object, [3]);
var shapeID;
if (name.startsWith$S("$")) {
name=name.substring$I(1);
shapeID=this.vwr.shm.getShapeIdFromObjectName$S(name);
if (shapeID >= 0) {
data[0]=name;
this.vwr.shm.getShapePropertyData$I$S$OA(shapeID, "index", data);
if (data[1] != null  && !pname.equals$O("index") ) {
var index=(data[1]).intValue$();
data[1]=this.vwr.shm.getShapePropertyIndex$I$S$I(shapeID, pname.intern$(), index);
}}} else {
shapeID=$I$(26,"shapeTokenIndex$I",[$I$(24).getTokFromName$S(name)]);
if (shapeID >= 0) {
data[0]=pname;
data[1]=Integer.valueOf$I(-1);
this.vwr.shm.getShapePropertyData$I$S$OA(shapeID, pname.intern$(), data);
}}return (data[1] == null  ? mp.addXStr$S("") : mp.addXObj$O(data[1]));
case 7:
if (isPivot) {
var lstx=x.getList$();
var map=Clazz.new_($I$(6,1));
var sep=(nargs > 1 ? $I$(1).sValue$org_jmol_script_T(args[nargs - 1]) : null);
if (sep != null ) nargs--;
var keys=Clazz.array(String, [nargs]);
for (var i=0; i < nargs; i++) keys[i]=$I$(1).sValue$org_jmol_script_T(args[i]);

for (var i=0, n=lstx.size$(); i < n; i++) {
var sv=lstx.get$I(i);
if (sv.tok != 6) continue;
var mapi=sv.getMap$();
var key="";
for (var j=0; j < nargs; j++) {
var obj=mapi.get$O(keys[j]);
key += (j == 0 ? "" : sep) + $I$(1).sValue$org_jmol_script_T(obj);
}
var vlist=map.get$O(key);
if (vlist == null ) map.put$O$O(key, vlist=$I$(1,"newV$I$O",[7, Clazz.new_($I$(5,1))]));
vlist.getList$().addLast$O(sv);
}
return mp.addXMap$java_util_Map(map);
}if (bsSelect != null ) {
var l0=x.getList$();
var lst=Clazz.new_($I$(5,1));
for (var i=bsSelect.nextSetBit$I(0); i >= 0; i=bsSelect.nextSetBit$I(i + 1)) lst.addLast$O(l0.get$I(i));

return mp.addXList$javajs_util_Lst(lst);
}default:
if (isSelect) propertyName="[SELECT " + propertyName + "]" ;
return mp.addXObj$O(this.vwr.extractProperty$O$O$I(x, propertyName, -1));
}
if (!lc.startsWith$S("bondinfo") && !lc.startsWith$S("atominfo") && !lc.startsWith$S("modelkitinfo")  ) propertyName="atomInfo." + propertyName;
}var propertyValue="";
if (propertyName.equalsIgnoreCase$S("fileContents") && nargs >= 2 ) {
var s=$I$(1).sValue$org_jmol_script_T(args[1]);
for (var i=2; i < nargs; i++) s += "|" + $I$(1).sValue$org_jmol_script_T(args[i]);

propertyValue=s;
pt=nargs;
} else if (nargs > pt) {
switch (args[pt].tok) {
case 10:
propertyValue=args[pt++].value;
if (propertyName.equalsIgnoreCase$S("bondInfo") && nargs > pt  && args[pt].tok == 10 ) propertyValue=Clazz.array($I$(16), -1, [propertyValue, args[pt].value]);
break;
case 6:
case 4:
if (this.vwr.checkPropertyParameter$S(propertyName)) propertyValue=args[pt++].value;
break;
}
}if (isAtomProperty) {
var bs=x.value;
var iAtom=bs.nextSetBit$I(0);
if (iAtom < 0) return mp.addXStr$S("");
propertyValue=bs;
}if (isAuxiliary && !isAtomProperty ) propertyName="auxiliaryInfo.models." + propertyName;
propertyName=$I$(27).rep$S$S$S(propertyName, ".[", "[");
var property=this.vwr.getProperty$S$S$O(null, propertyName, propertyValue);
if (pt < nargs) property=this.vwr.extractProperty$O$O$I(property, args, pt);
return mp.addXObj$O(isJSON ? $I$(1).safeJSON$S$O("value", property) : $I$(1).isVariableType$O(property) ? property : $I$(11).toReadable$S$O(propertyName, property));
}, p$1);

Clazz.newMeth(C$, 'evaluateFormat$org_jmol_script_ScriptMathProcessor$I$org_jmol_script_SVA$Z', function (mp, intValue, args, isLabel) {
var x1=(args.length < 2 || intValue == 1287653388  ? mp.getX$() : null);
var format=(args.length == 0 ? "%U" : args[0].tok == 7 ? null : $I$(1).sValue$org_jmol_script_T(args[0]));
if (!isLabel && args.length > 0  && x1 != null   && x1.tok != 10  && format != null  ) {
if (args.length == 2) {
var listIn=x1.getList$();
var formatList=args[1].getList$();
if (listIn == null  || formatList == null  ) return false;
x1=$I$(1,"getVariableList$javajs_util_Lst",[p$1.getSublist$javajs_util_Lst$javajs_util_Lst.apply(this, [listIn, formatList])]);
}args=Clazz.array($I$(1), -1, [args[0], x1]);
x1=null;
}if (x1 == null ) {
var pt=(isLabel ? -1 : $I$(1).getFormatType$S(format));
if (pt >= 0 && args.length != 2 ) return false;
if (pt >= 0 || args.length < 2  || args[1].tok != 7 ) {
var o=$I$(1).format$org_jmol_script_SVA$I(args, pt);
return (format.equalsIgnoreCase$S("json") ? mp.addXStr$S(o) : mp.addXObj$O(o));
}var a=args[1].getList$();
var args2=Clazz.array($I$(1), -1, [args[0], null]);
var sa=Clazz.array(String, [a.size$()]);
for (var i=sa.length; --i >= 0; ) {
args2[1]=a.get$I(i);
sa[i]=$I$(1).format$org_jmol_script_SVA$I(args2, pt).toString();
}
return mp.addXAS$SA(sa);
}if (x1.tok == 7 && format == null  ) {
var listIn=x1.getList$();
var formatList=args[0].getList$();
var listOut=p$1.getSublist$javajs_util_Lst$javajs_util_Lst.apply(this, [listIn, formatList]);
return mp.addXList$javajs_util_Lst(listOut);
}var bs=(x1.tok == 10 ? x1.value : null);
var asArray=$I$(24).tokAttr$I$I(intValue, 480);
return mp.addXObj$O(format == null  ? "" : bs == null  ? $I$(1,"sprintf$S$org_jmol_script_SV",[$I$(27).formatCheck$S(format), x1]) : this.e.getCmdExt$().getBitsetIdent$javajs_util_BS$S$O$Z$I$Z(bs, format, x1.value, true, x1.index, asArray));
}, p$1);

Clazz.newMeth(C$, 'getSublist$javajs_util_Lst$javajs_util_Lst', function (listIn, formatList) {
var listOut=Clazz.new_($I$(5,1));
var map;
var v;
var list;
for (var i=0, n=listIn.size$(); i < n; i++) {
var element=listIn.get$I(i);
switch (element.tok) {
case 6:
map=element.getMap$();
list=Clazz.new_($I$(5,1));
for (var j=0, n1=formatList.size$(); j < n1; j++) {
v=map.get$O($I$(1,"sValue$org_jmol_script_T",[formatList.get$I(j)]));
list.addLast$O(v == null  ? $I$(1).newS$S("") : v);
}
listOut.addLast$O($I$(1).getVariableList$javajs_util_Lst(list));
break;
case 7:
map=Clazz.new_($I$(6,1));
list=element.getList$();
for (var j=0, n1=Math.min(list.size$(), formatList.size$()); j < n1; j++) {
map.put$O$O($I$(1,"sValue$org_jmol_script_T",[formatList.get$I(j)]), list.get$I(j));
}
listOut.addLast$O($I$(1).getVariable$O(map));
}
}
return listOut;
}, p$1);

Clazz.newMeth(C$, 'evaluateList$org_jmol_script_ScriptMathProcessor$I$org_jmol_script_SVA', function (mp, tok, args) {
var len=args.length;
var x1=mp.getX$();
var isArray1=(x1.tok == 7);
var x2;
switch (tok) {
case 1275335685:
return (len == 2 && mp.addX$org_jmol_script_SV(x1.pushPop$org_jmol_script_SV$org_jmol_script_SV(args[0], args[1]))  || len == 1 && mp.addX$org_jmol_script_SV(x1.pushPop$org_jmol_script_SV$org_jmol_script_SV(null, args[0]))  );
case 1275334681:
return (len == 1 && mp.addX$org_jmol_script_SV(x1.pushPop$org_jmol_script_SV$org_jmol_script_SV(args[0], null))  || len == 0 && mp.addX$org_jmol_script_SV(x1.pushPop$org_jmol_script_SV$org_jmol_script_SV(null, null))  );
case 1275069441:
if (len != 1 && len != 2 ) return false;
break;
case 1275069447:
case 1275069446:
break;
default:
if (len != 1) return false;
}
var sList1=null;
var sList2=null;
var sList3=null;
if (len == 2) {
var tab=$I$(1).sValue$org_jmol_script_T(args[0]);
x2=args[1];
if (tok == 1275069441) {
sList1=(isArray1 ? $I$(1).strListValue$org_jmol_script_T(x1) : $I$(27,"split$S$S",[$I$(1).sValue$org_jmol_script_T(x1), "\n"]));
sList2=(x2.tok == 7 ? $I$(1).strListValue$org_jmol_script_T(x2) : $I$(27,"split$S$S",[$I$(1).sValue$org_jmol_script_T(x2), "\n"]));
sList3=Clazz.array(String, [len=Math.max(sList1.length, sList2.length)]);
for (var i=0; i < len; i++) sList3[i]=(i >= sList1.length ? "" : sList1[i]) + tab + (i >= sList2.length ? "" : sList2[i]) ;

return mp.addXAS$SA(sList3);
}if (x2.tok != 1073742335) return false;
var l=x1.getList$();
var isCSV=(tab.length$() == 0);
if (isCSV) tab=",";
if (tok == 1275069446) {
var s2=Clazz.array($I$(1), [l.size$()]);
for (var i=l.size$(); --i >= 0; ) {
var a=l.get$I(i).getList$();
if (a == null ) s2[i]=l.get$I(i);
 else {
var sb=Clazz.new_($I$(9,1));
for (var j=0, n=a.size$(); j < n; j++) {
if (j > 0) sb.append$S(tab);
var sv=a.get$I(j);
sb.append$S(isCSV && sv.tok == 4  ? "\"" + $I$(27).rep$S$S$S(sv.value, "\"", "\"\"") + "\""  : "" + sv.asString$());
}
s2[i]=$I$(1,"newS$S",[sb.toString()]);
}}
return mp.addXAV$org_jmol_script_SVA(s2);
}var sa=Clazz.new_($I$(5,1));
if (isCSV) tab="\u0000";
var next=Clazz.array(Integer.TYPE, [2]);
for (var i=0, nl=l.size$(); i < nl; i++) {
var line=l.get$I(i).asString$();
if (isCSV) {
next[1]=0;
next[0]=0;
var last=0;
while (true){
var s=$I$(27).getCSVString$S$IA(line, next);
if (s == null ) {
if (next[1] == -1) {
line += (++i < nl ? "\n" + l.get$I(i).asString$() : "\"");
next[1]=last;
continue;
}line=line.substring$I$I(0, last) + line.substring$I(last).replace$C$C(",", "\u0000");
break;
}line=line.substring$I$I(0, last) + line.substring$I$I(last, next[0]).replace$C$C(",", "\u0000") + s + line.substring$I(next[1]) ;
next[1]=last=next[0] + s.length$();
}
}var linaa=line.split$S(tab);
var la=Clazz.new_($I$(5,1));
for (var j=0, n=linaa.length; j < n; j++) {
var s=linaa[j];
if (s.indexOf$S(".") < 0) try {
la.addLast$O($I$(1,"newI$I",[Integer.parseInt$S(s)]));
continue;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
 else try {
la.addLast$O($I$(1,"getVariable$O",[Float.valueOf$F(Float.parseFloat$S(s))]));
continue;
} catch (ee) {
if (Clazz.exceptionOf(ee,"Exception")){
} else {
throw ee;
}
}
la.addLast$O($I$(1).newS$S(s));
}
sa.addLast$O($I$(1).getVariableList$javajs_util_Lst(la));
}
return mp.addXObj$O($I$(1).getVariableList$javajs_util_Lst(sa));
}x2=(len == 0 ? $I$(1).newV$I$O(1073742327, "all") : args[0]);
var isAll=(x2.tok == 1073742327);
if (!isArray1 && x1.tok != 4 ) return mp.binaryOp$org_jmol_script_T$org_jmol_script_SV$org_jmol_script_SV(p$1.opTokenFor$I.apply(this, [tok]), x1, x2);
var isScalar1=$I$(1).isScalar$org_jmol_script_SV(x1);
var isScalar2=$I$(1).isScalar$org_jmol_script_SV(x2);
var list1=null;
var list2=null;
var alist1=x1.getList$();
var alist2=x2.getList$();
if (isArray1) {
len=alist1.size$();
} else if (isScalar1) {
len=2147483647;
} else {
sList1=($I$(27,"split$S$S",[$I$(1).sValue$org_jmol_script_T(x1), "\n"]));
list1=Clazz.array(Float.TYPE, [len=sList1.length]);
$I$(27).parseFloatArrayData$SA$FA(sList1, list1);
}if (isAll && tok != 1275069446 ) {
var sum=0.0;
if (isArray1) {
for (var i=len; --i >= 0; ) sum += $I$(1,"fValue$org_jmol_script_T",[alist1.get$I(i)]);

} else if (!isScalar1) {
for (var i=len; --i >= 0; ) sum += list1[i];

}return mp.addXFloat$F(sum);
}if (tok == 1275069446 && x2.tok == 4 ) {
var sb=Clazz.new_($I$(9,1));
if (isScalar1) {
sb.append$S($I$(1).sValue$org_jmol_script_T(x1));
} else {
var s=(isAll ? "" : x2.value.toString());
for (var i=0; i < len; i++) sb.append$S(i > 0 ? s : "").append$S($I$(1,"sValue$org_jmol_script_T",[alist1.get$I(i)]));

}return mp.addXStr$S(sb.toString());
}var scalar=null;
if (isScalar2) {
scalar=x2;
} else if (x2.tok == 7) {
len=Math.min(len, alist2.size$());
} else {
sList2=$I$(27,"split$S$S",[$I$(1).sValue$org_jmol_script_T(x2), "\n"]);
list2=Clazz.array(Float.TYPE, [sList2.length]);
$I$(27).parseFloatArrayData$SA$FA(sList2, list2);
len=Math.min(len, list2.length);
}var token=p$1.opTokenFor$I.apply(this, [tok]);
var olist=Clazz.array($I$(1), [len]);
if (isArray1 && isAll ) {
var llist=Clazz.new_($I$(5,1));
return mp.addXList$javajs_util_Lst(p$1.addAllLists$javajs_util_Lst$javajs_util_Lst.apply(this, [x1.getList$(), llist]));
}var a=(isScalar1 ? x1 : null);
var b;
for (var i=0; i < len; i++) {
if (isScalar2) b=scalar;
 else if (x2.tok == 7) b=alist2.get$I(i);
 else if (Float.isNaN$F(list2[i])) b=$I$(1,"getVariable$O",[$I$(1).unescapePointOrBitsetAsVariable$O(sList2[i])]);
 else b=$I$(1).newF$F(list2[i]);
if (!isScalar1) {
if (isArray1) a=alist1.get$I(i);
 else if (Float.isNaN$F(list1[i])) a=$I$(1,"getVariable$O",[$I$(1).unescapePointOrBitsetAsVariable$O(sList1[i])]);
 else a=$I$(1).newF$F(list1[i]);
}if (tok == 1275069446) {
if (a.tok != 7) {
var l=Clazz.new_($I$(5,1));
l.addLast$O(a);
a=$I$(1).getVariableList$javajs_util_Lst(l);
}}if (!mp.binaryOp$org_jmol_script_T$org_jmol_script_SV$org_jmol_script_SV(token, a, b)) return false;
olist[i]=mp.getX$();
}
return mp.addXAV$org_jmol_script_SVA(olist);
}, p$1);

Clazz.newMeth(C$, 'addAllLists$javajs_util_Lst$javajs_util_Lst', function (list, l) {
var n=list.size$();
for (var i=0; i < n; i++) {
var v=list.get$I(i);
if (v.tok == 7) p$1.addAllLists$javajs_util_Lst$javajs_util_Lst.apply(this, [v.getList$(), l]);
 else l.addLast$O(v);
}
return l;
}, p$1);

Clazz.newMeth(C$, 'evaluateLoad$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$Z', function (mp, args, isFile) {
if (args.length < 1 || args.length > 3 ) return false;
var file=$I$(29,"fixDOSName$S",[$I$(1).sValue$org_jmol_script_T(args[0])]);
var asBytes=(args.length > 1 && args[1].tok == 1073742335 );
var async=(this.vwr.async || args.length > 2 && args[args.length - 1].tok == 1073742335  );
var nBytesMax=(args.length > 1 && args[1].tok == 2  ? args[1].asInt$() : -1);
var asJSON=(args.length > 1 && args[1].asString$().equalsIgnoreCase$S("JSON") );
if (asBytes) return mp.addXMap$java_util_Map(this.vwr.fm.getFileAsMap$S$S(file, null));
var isQues=file.startsWith$S("?");
if ($I$(30).isJS && (isQues || async ) ) {
if (isFile && isQues ) return mp.addXStr$S("");
file=this.e.loadFileAsync$S$S$I$Z("load()_", file, mp.oPt, true);
}var str=isFile ? this.vwr.fm.getFilePath$S$Z$Z(file, false, false) : this.vwr.getFileAsString4$S$I$Z$Z$Z$S(file, nBytesMax, false, false, true, "script");
try {
return (asJSON ? mp.addXObj$O(this.vwr.parseJSON$S(str)) : mp.addXStr$S(str));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'evaluateMath$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I', function (mp, args, tok) {
if (tok == 134217749) {
if (args.length == 1 && args[0].tok == 4 ) return mp.addXStr$S((Clazz.new_(java.util.Date)) + "\t" + $I$(1).sValue$org_jmol_script_T(args[0]) );
return mp.addXInt$I(((System.currentTimeMillis$()|0) & 2147483647) - (args.length == 0 ? 0 : args[0].asInt$()));
}if (args.length != 1) return false;
if (tok == 134218250) {
if (args[0].tok == 2) return mp.addXInt$I(Math.abs(args[0].asInt$()));
return mp.addXFloat$F(Math.abs(args[0].asFloat$()));
}var x=$I$(1).fValue$org_jmol_script_T(args[0]);
switch (tok) {
case 134218242:
return mp.addXFloat$F((Math.acos(x) * 180 / 3.141592653589793));
case 134218245:
return mp.addXFloat$F(Math.cos(x * 3.141592653589793 / 180));
case 134218244:
return mp.addXFloat$F(Math.sin(x * 3.141592653589793 / 180));
case 134218246:
return mp.addXFloat$F(Math.sqrt(x));
}
return false;
}, p$1);

Clazz.newMeth(C$, 'evaluateMeasure$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I', function (mp, args, tok) {
var nPoints=0;
switch (tok) {
case 1745489939:
var property=null;
var points=Clazz.new_($I$(5,1));
var rangeMinMax=Clazz.array(Float.TYPE, -1, [3.4028235E38, 3.4028235E38]);
var strFormat=null;
var units=null;
var isAllConnected=false;
var isNotConnected=false;
var rPt=0;
var isNull=false;
var rd=null;
var nBitSets=0;
var vdw=3.4028235E38;
var asMinArray=false;
var asFloatArray=false;
for (var i=0; i < args.length; i++) {
switch (args[i].tok) {
case 10:
var bs=args[i].value;
if (bs.length$() == 0) isNull=true;
points.addLast$O(bs);
nPoints++;
nBitSets++;
break;
case 8:
var v=Clazz.new_($I$(31,1));
v.setT$javajs_util_T3(args[i].value);
points.addLast$O(v);
nPoints++;
break;
case 2:
case 3:
rangeMinMax[rPt++ % 2]=$I$(1).fValue$org_jmol_script_T(args[i]);
break;
case 4:
var s=$I$(1).sValue$org_jmol_script_T(args[i]);
if (s.startsWith$S("property_")) {
property=s;
break;
}if (s.equalsIgnoreCase$S("vdw") || s.equalsIgnoreCase$S("vanderwaals") ) vdw=(i + 1 < args.length && args[i + 1].tok == 2  ? args[++i].asInt$() : 100) / 100.0;
 else if (s.equalsIgnoreCase$S("notConnected")) isNotConnected=true;
 else if (s.equalsIgnoreCase$S("connected")) isAllConnected=true;
 else if (s.equalsIgnoreCase$S("minArray")) asMinArray=(nBitSets >= 1);
 else if (s.equalsIgnoreCase$S("asArray") || s.length$() == 0 ) asFloatArray=(nBitSets >= 1);
 else if ($I$(32).isUnits$S(s)) units=s.toLowerCase$();
 else strFormat=nPoints + ":" + s ;
break;
default:
return false;
}
}
if (nPoints < 2 || nPoints > 4  || rPt > 2  || isNotConnected && isAllConnected  ) return false;
if (isNull) return mp.addXStr$S("");
if (vdw != 3.4028235E38  && (nBitSets != 2 || nPoints != 2 ) ) return mp.addXStr$S("");
rd=(vdw == 3.4028235E38  ? Clazz.new_($I$(20,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW,[rangeMinMax, 0, null, null]) : Clazz.new_([null, vdw, $I$(21).FACTOR, $I$(22).AUTO],$I$(20,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW));
var obj=(this.vwr.newMeasurementData$S$javajs_util_Lst(null, points)).set$I$java_util_Map$org_jmol_atomdata_RadiusData$S$S$S$org_jmol_modelset_TickInfo$Z$Z$Boolean$Z$I$H$org_jmol_modelset_Text$F(0, null, rd, property, strFormat, units, null, isAllConnected, isNotConnected, null, true, 0, 0, null, NaN).getMeasurements$Z$Z(asFloatArray, asMinArray);
return mp.addXObj$O(obj);
case 134217729:
if ((nPoints=args.length) != 3 && nPoints != 4 ) return false;
break;
default:
if ((nPoints=args.length) != 2) return false;
}
var pts=Clazz.array($I$(2), [nPoints]);
for (var i=0; i < nPoints; i++) {
if ((pts[i]=mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[i], null)) == null ) return false;
}
switch (nPoints) {
case 2:
return mp.addXFloat$F(pts[0].distance$javajs_util_T3(pts[1]));
case 3:
return mp.addXFloat$F($I$(15).computeAngleABC$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(pts[0], pts[1], pts[2], true));
case 4:
return mp.addXFloat$F($I$(15).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(pts[0], pts[1], pts[2], pts[3], true));
}
return false;
}, p$1);

Clazz.newMeth(C$, 'evaluateModulation$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
var type="";
var t=NaN;
var t456=null;
switch (args.length) {
case 0:
break;
case 1:
switch (args[0].tok) {
case 8:
t456=args[0].value;
break;
case 4:
type=args[0].asString$();
break;
default:
t=$I$(1).fValue$org_jmol_script_T(args[0]);
}
break;
case 2:
type=$I$(1).sValue$org_jmol_script_T(args[0]);
t=$I$(1).fValue$org_jmol_script_T(args[1]);
break;
default:
return false;
}
if (t456 == null  && t < 1000000.0  ) t456=$I$(2).new3$F$F$F(t, t, t);
var x=mp.getX$();
var bs=(x.tok == 10 ? x.value : Clazz.new_($I$(16,1)));
return mp.addXList$javajs_util_Lst(this.vwr.ms.getModulationList$javajs_util_BS$C$javajs_util_P3(bs, (type + "D").toUpperCase$().charAt$I(0), t456));
}, p$1);

Clazz.newMeth(C$, 'evaluatePlane$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I', function (mp, args, tok) {
if (tok == 134219265 && args.length != 3  || tok == 134217763 && args.length != 2  && args.length != 3  && args.length != 4   || args.length == 0  || args.length > 4 ) return false;
var pt1;
var pt2;
var pt3;
var plane;
var norm;
var vTemp;
switch (args.length) {
case 1:
if (args[0].tok == 10) {
var bs=args[0].value;
if (bs.cardinality$() == 3) {
var pts=this.vwr.ms.getAtomPointVector$javajs_util_BS(bs);
return mp.addXPt4$javajs_util_P4($I$(15,"getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4",[pts.get$I(0), pts.get$I(1), pts.get$I(2), Clazz.new_($I$(10,1)), Clazz.new_($I$(10,1)), Clazz.new_($I$(33,1))]));
}}var pt=$I$(11,"uP$S",[$I$(1).sValue$org_jmol_script_T(args[0])]);
if (Clazz.instanceOf(pt, "javajs.util.P4")) return mp.addXPt4$javajs_util_P4(pt);
return mp.addXStr$S("" + pt);
case 2:
if (tok == 134217763) {
if (args[1].tok != 9) return false;
pt3=Clazz.new_($I$(2,1));
norm=Clazz.new_($I$(10,1));
vTemp=Clazz.new_($I$(10,1));
plane=args[1].value;
if (args[0].tok == 9) {
var list=$I$(15).getIntersectionPP$javajs_util_P4$javajs_util_P4(args[0].value, plane);
if (list == null ) return mp.addXStr$S("");
return mp.addXList$javajs_util_Lst(list);
}pt2=mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[0], null);
if (pt2 == null ) return mp.addXStr$S("");
return mp.addXPt$javajs_util_P3($I$(15).getIntersection$javajs_util_P3$javajs_util_V3$javajs_util_P4$javajs_util_P3$javajs_util_V3$javajs_util_V3(pt2, null, plane, pt3, norm, vTemp));
}case 3:
case 4:
switch (tok) {
case 134219265:
return mp.addXPt4$javajs_util_P4(this.e.getHklPlane$javajs_util_P3($I$(2,"new3$F$F$F",[$I$(1).fValue$org_jmol_script_T(args[0]), $I$(1).fValue$org_jmol_script_T(args[1]), $I$(1).fValue$org_jmol_script_T(args[2])])));
case 134217763:
pt1=mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[0], null);
pt2=mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[1], null);
if (pt1 == null  || pt2 == null  ) return mp.addXStr$S("");
var vLine=$I$(10).newV$javajs_util_T3(pt2);
vLine.normalize$();
if (args[2].tok == 9) {
pt3=Clazz.new_($I$(2,1));
norm=Clazz.new_($I$(10,1));
vTemp=Clazz.new_($I$(10,1));
pt1=$I$(15).getIntersection$javajs_util_P3$javajs_util_V3$javajs_util_P4$javajs_util_P3$javajs_util_V3$javajs_util_V3(pt1, vLine, args[2].value, pt3, norm, vTemp);
if (pt1 == null ) return mp.addXStr$S("");
return mp.addXPt$javajs_util_P3(pt1);
}pt3=mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[2], null);
if (pt3 == null ) return mp.addXStr$S("");
var v=Clazz.new_($I$(10,1));
pt3=$I$(2).newP$javajs_util_T3(pt3);
if (args.length == 3) {
$I$(15).projectOntoAxis$javajs_util_P3$javajs_util_P3$javajs_util_V3$javajs_util_V3(pt3, pt1, vLine, v);
return mp.addXPt$javajs_util_P3(pt3);
}var r=$I$(1).fValue$org_jmol_script_T(args[3]);
var ptCenter=$I$(2).newP$javajs_util_T3(pt3);
$I$(15).projectOntoAxis$javajs_util_P3$javajs_util_P3$javajs_util_V3$javajs_util_V3(pt3, pt1, vLine, v);
var d=ptCenter.distance$javajs_util_T3(pt3);
var l=Clazz.new_($I$(5,1));
if (d == r ) {
l.addLast$O(pt3);
} else if (d < r ) {
d=Math.sqrt(r * r - d * d);
v.scaleAdd2$F$javajs_util_T3$javajs_util_T3(d, vLine, pt3);
l.addLast$O($I$(2).newP$javajs_util_T3(v));
v.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-d, vLine, pt3);
l.addLast$O($I$(2).newP$javajs_util_T3(v));
}return mp.addXList$javajs_util_Lst(l);
}
switch (args[0].tok) {
case 2:
case 3:
if (args.length == 3) {
var r=$I$(1).fValue$org_jmol_script_T(args[0]);
var theta=$I$(1).fValue$org_jmol_script_T(args[1]);
var phi=$I$(1).fValue$org_jmol_script_T(args[2]);
norm=$I$(10).new3$F$F$F(0, 0, 1);
pt2=$I$(2).new3$F$F$F(0, 1, 0);
var q=$I$(25).newVA$javajs_util_T3$F(pt2, phi);
q.getMatrix$().rotate$javajs_util_T3(norm);
pt2.set$F$F$F(0, 0, 1);
q=$I$(25).newVA$javajs_util_T3$F(pt2, theta);
q.getMatrix$().rotate$javajs_util_T3(norm);
pt2.setT$javajs_util_T3(norm);
pt2.scale$F(r);
plane=Clazz.new_($I$(33,1));
$I$(15).getPlaneThroughPoint$javajs_util_T3$javajs_util_V3$javajs_util_P4(pt2, norm, plane);
return mp.addXPt4$javajs_util_P4(plane);
}break;
case 10:
case 8:
pt1=mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[0], null);
pt2=mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[1], null);
if (pt2 == null ) return false;
pt3=(args.length > 2 && (args[2].tok == 10 || args[2].tok == 8 )  ? mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[2], null) : null);
norm=$I$(10).newV$javajs_util_T3(pt2);
if (pt3 == null ) {
plane=Clazz.new_($I$(33,1));
if (args.length == 2 || args[2].tok != 2 && args[2].tok != 3  && !args[2].asBoolean$()  ) {
pt3=$I$(2).newP$javajs_util_T3(pt1);
pt3.add$javajs_util_T3(pt2);
pt3.scale$F(0.5);
norm.sub$javajs_util_T3(pt1);
norm.normalize$();
} else if (args[2].tok == 1073742335) {
pt3=pt1;
} else {
norm.sub$javajs_util_T3(pt1);
pt3=Clazz.new_($I$(2,1));
pt3.scaleAdd2$F$javajs_util_T3$javajs_util_T3(args[2].asFloat$(), norm, pt1);
}$I$(15).getPlaneThroughPoint$javajs_util_T3$javajs_util_V3$javajs_util_P4(pt3, norm, plane);
return mp.addXPt4$javajs_util_P4(plane);
}var vAB=Clazz.new_($I$(10,1));
var ptref=(args.length == 4 ? mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[3], null) : null);
var nd=$I$(15).getDirectedNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3(pt1, pt2, pt3, ptref, norm, vAB);
return mp.addXPt4$javajs_util_P4($I$(33).new4$F$F$F$F(norm.x, norm.y, norm.z, nd));
}
}
if (args.length != 4) return false;
var x=$I$(1).fValue$org_jmol_script_T(args[0]);
var y=$I$(1).fValue$org_jmol_script_T(args[1]);
var z=$I$(1).fValue$org_jmol_script_T(args[2]);
var w=$I$(1).fValue$org_jmol_script_T(args[3]);
return mp.addXPt4$javajs_util_P4($I$(33).new4$F$F$F$F(x, y, z, w));
}, p$1);

Clazz.newMeth(C$, 'evaluatePoint$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
switch (args.length) {
default:
return false;
case 1:
if (args[0].tok == 3 || args[0].tok == 2 ) return mp.addXInt$I(args[0].asInt$());
var s=$I$(1).sValue$org_jmol_script_T(args[0]);
if (args[0].tok == 7) s="{" + s + "}" ;
var pt=$I$(11).uP$S(s);
return (Clazz.instanceOf(pt, "javajs.util.P3") ? mp.addXPt$javajs_util_P3(pt) : mp.addXStr$S("" + pt));
case 2:
var pt3;
switch (args[1].tok) {
case 1073742334:
case 1073742335:
switch (args[0].tok) {
case 8:
pt3=$I$(2).newP$javajs_util_T3(args[0].value);
break;
case 10:
pt3=this.vwr.ms.getAtomSetCenter$javajs_util_BS(args[0].value);
break;
default:
return false;
}
if (args[1].tok == 1073742335) {
this.vwr.tm.transformPt3f$javajs_util_T3$javajs_util_P3(pt3, pt3);
pt3.y=this.vwr.tm.height - pt3.y;
if (this.vwr.antialiased) pt3.scale$F(0.5);
} else {
if (this.vwr.antialiased) pt3.scale$F(2.0);
pt3.y=this.vwr.tm.height - pt3.y;
this.vwr.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(pt3, pt3);
}break;
case 8:
var sv=args[0].getList$();
if (sv == null  || sv.size$() != 4 ) return false;
var pt1=$I$(1).ptValue$org_jmol_script_SV(args[1]);
pt3=$I$(2,"newP$javajs_util_T3",[$I$(1,"ptValue$org_jmol_script_SV",[sv.get$I(0)])]);
pt3.scaleAdd2$F$javajs_util_T3$javajs_util_T3(pt1.x, $I$(1,"ptValue$org_jmol_script_SV",[sv.get$I(1)]), pt3);
pt3.scaleAdd2$F$javajs_util_T3$javajs_util_T3(pt1.y, $I$(1,"ptValue$org_jmol_script_SV",[sv.get$I(2)]), pt3);
pt3.scaleAdd2$F$javajs_util_T3$javajs_util_T3(pt1.z, $I$(1,"ptValue$org_jmol_script_SV",[sv.get$I(3)]), pt3);
break;
default:
return false;
}
return mp.addXPt$javajs_util_P3(pt3);
case 3:
return mp.addXPt$javajs_util_P3($I$(2,"new3$F$F$F",[args[0].asFloat$(), args[1].asFloat$(), args[2].asFloat$()]));
case 4:
return mp.addXPt4$javajs_util_P4($I$(33,"new4$F$F$F$F",[args[0].asFloat$(), args[1].asFloat$(), args[2].asFloat$(), args[3].asFloat$()]));
}
}, p$1);

Clazz.newMeth(C$, 'evaluatePrompt$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
if (args.length != 1 && args.length != 2  && args.length != 3 ) return false;
var label=$I$(1).sValue$org_jmol_script_T(args[0]);
var buttonArray=(args.length > 1 && args[1].tok == 7  ? $I$(1).strListValue$org_jmol_script_T(args[1]) : null);
var asButtons=(buttonArray != null  || args.length == 1  || args.length == 3 && args[2].asBoolean$()  );
var input=(buttonArray != null  ? null : args.length >= 2 ? $I$(1).sValue$org_jmol_script_T(args[1]) : "OK");
var s="" + this.vwr.prompt$S$S$SA$Z(label, input, buttonArray, asButtons);
return (asButtons && buttonArray != null   ? mp.addXInt$I(Integer.parseInt$S(s) + 1) : mp.addXStr$S(s));
}, p$1);

Clazz.newMeth(C$, 'evaluateQuaternion$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I', function (mp, args, tok) {
var pt0=null;
var nArgs=args.length;
var nMax=2147483647;
var isRelative=false;
if (tok == 134221850) {
if (nArgs > 1 && args[nArgs - 1].tok == 4  && (args[nArgs - 1].value).equalsIgnoreCase$S("relative") ) {
nArgs--;
isRelative=true;
}if (nArgs > 1 && args[nArgs - 1].tok == 2  && args[0].tok == 10 ) {
nMax=args[nArgs - 1].asInt$();
if (nMax <= 0) nMax=2147483646;
nArgs--;
}}switch (nArgs) {
case 0:
case 1:
case 4:
break;
case 2:
if (tok == 134221850) {
if (args[0].tok == 7 && (args[1].tok == 7 || args[1].tok == 1073742335 ) ) break;
if (args[0].tok == 10 && (args[1].tok == 2 || args[1].tok == 10 ) ) break;
}if ((pt0=mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[0], null)) == null  || tok != 134221850 && args[1].tok == 8  ) return false;
break;
case 3:
if (tok != 134221850) return false;
if (args[0].tok == 9) {
if (args[2].tok != 8 && args[2].tok != 10 ) return false;
break;
}for (var i=0; i < 3; i++) if (args[i].tok != 8 && args[i].tok != 10 ) return false;

break;
default:
return false;
}
var q=null;
var qs=null;
var p4=null;
switch (nArgs) {
case 0:
return mp.addXPt4$javajs_util_P4(this.vwr.tm.getRotationQ$().toPoint4f$());
case 1:
default:
if (tok == 134221850 && args[0].tok == 7 ) {
var data1=this.e.getQuaternionArray$O$I(args[0].getList$(), 1073742001);
var mean=$I$(25).sphereMean$javajs_util_QuatA$FA$F(data1, null, 1.0E-4);
q=(Clazz.instanceOf(mean, "javajs.util.Quat") ? mean : null);
break;
} else if (tok == 134221850 && args[0].tok == 10 ) {
qs=this.vwr.getAtomGroupQuaternions$javajs_util_BS$I(args[0].value, nMax);
} else if (args[0].tok == 11) {
q=$I$(25).newM$javajs_util_M3(args[0].value);
} else if (args[0].tok == 9) {
p4=args[0].value;
} else {
var s=$I$(1).sValue$org_jmol_script_T(args[0]);
var v=$I$(11,"uP$S",[s.equalsIgnoreCase$S("best") ? this.vwr.getOrientationText$I$S$javajs_util_BS(1073741864, "best", null).toString() : s]);
if (!(Clazz.instanceOf(v, "javajs.util.P4"))) return false;
p4=v;
}if (tok == 134217731) q=$I$(25,"newVA$javajs_util_T3$F",[$I$(2).new3$F$F$F(p4.x, p4.y, p4.z), p4.w]);
break;
case 2:
if (tok == 134221850) {
if (args[0].tok == 7 && args[1].tok == 7 ) {
var data1=this.e.getQuaternionArray$O$I(args[0].getList$(), 1073742001);
var data2=this.e.getQuaternionArray$O$I(args[1].getList$(), 1073742001);
qs=$I$(25).div$javajs_util_QuatA$javajs_util_QuatA$I$Z(data2, data1, nMax, isRelative);
break;
}if (args[0].tok == 7 && args[1].tok == 1073742335 ) {
var data1=this.e.getQuaternionArray$O$I(args[0].getList$(), 1073742001);
var stddev=Clazz.array(Float.TYPE, [1]);
$I$(25).sphereMean$javajs_util_QuatA$FA$F(data1, stddev, 1.0E-4);
return mp.addXFloat$F(stddev[0]);
}if (args[0].tok == 10 && args[1].tok == 10 ) {
var data1=this.vwr.getAtomGroupQuaternions$javajs_util_BS$I(args[0].value, 2147483647);
var data2=this.vwr.getAtomGroupQuaternions$javajs_util_BS$I(args[1].value, 2147483647);
qs=$I$(25).div$javajs_util_QuatA$javajs_util_QuatA$I$Z(data2, data1, nMax, isRelative);
break;
}}var pt1=mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[1], null);
p4=mp.planeValue$org_jmol_script_T(args[0]);
if (pt1 != null ) q=$I$(25,"getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3",[$I$(2).new3$F$F$F(0, 0, 0), pt0, pt1]);
 else q=$I$(25,"newVA$javajs_util_T3$F",[pt0, $I$(1).fValue$org_jmol_script_T(args[1])]);
break;
case 3:
if (args[0].tok == 9) {
var pt=(args[2].tok == 8 ? args[2].value : this.vwr.ms.getAtomSetCenter$javajs_util_BS(args[2].value));
return mp.addXStr$S($I$(11,"drawQuat$javajs_util_Quat$S$S$javajs_util_P3$F",[$I$(25).newP4$javajs_util_P4(args[0].value), "q", $I$(1).sValue$org_jmol_script_T(args[1]), pt, 1.0]));
}var pts=Clazz.array($I$(2), [3]);
for (var i=0; i < 3; i++) pts[i]=(args[i].tok == 8 ? args[i].value : this.vwr.ms.getAtomSetCenter$javajs_util_BS(args[i].value));

q=$I$(25).getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3(pts[0], pts[1], pts[2]);
break;
case 4:
if (tok == 134221850) p4=$I$(33,"new4$F$F$F$F",[$I$(1).fValue$org_jmol_script_T(args[1]), $I$(1).fValue$org_jmol_script_T(args[2]), $I$(1).fValue$org_jmol_script_T(args[3]), $I$(1).fValue$org_jmol_script_T(args[0])]);
 else q=$I$(25,"newVA$javajs_util_T3$F",[$I$(2,"new3$F$F$F",[$I$(1).fValue$org_jmol_script_T(args[0]), $I$(1).fValue$org_jmol_script_T(args[1]), $I$(1).fValue$org_jmol_script_T(args[2])]), $I$(1).fValue$org_jmol_script_T(args[3])]);
break;
}
if (qs != null ) {
if (nMax != 2147483647) {
var list=Clazz.new_($I$(5,1));
for (var i=0; i < qs.length; i++) list.addLast$O(qs[i].toPoint4f$());

return mp.addXList$javajs_util_Lst(list);
}q=(qs.length > 0 ? qs[0] : null);
}return mp.addXPt4$javajs_util_P4((q == null  ? $I$(25).newP4$javajs_util_P4(p4) : q).toPoint4f$());
}, p$1);

Clazz.newMeth(C$, 'evaluateRandom$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
if (args.length > 3) return false;
if (this.rand == null ) this.rand=Clazz.new_($I$(34,1));
var lower=0;
var upper=1;
switch (args.length) {
case 3:
this.rand.setSeed$J(($I$(1).fValue$org_jmol_script_T(args[2])|0));
case 2:
upper=$I$(1).fValue$org_jmol_script_T(args[1]);
case 1:
lower=$I$(1).fValue$org_jmol_script_T(args[0]);
case 0:
break;
default:
return false;
}
return mp.addXFloat$F((this.rand.nextFloat$() * (upper - lower)) + lower);
}, p$1);

Clazz.newMeth(C$, 'evaluateRowCol$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I', function (mp, args, tok) {
if (args.length != 1) return false;
var n=args[0].asInt$() - 1;
var x1=mp.getX$();
var f;
switch (x1.tok) {
case 11:
if (n < 0 || n > 2 ) return false;
var m=x1.value;
switch (tok) {
case 1275068935:
f=Clazz.array(Float.TYPE, [3]);
m.getRow$I$FA(n, f);
return mp.addXAF$FA(f);
case 1275068934:
default:
f=Clazz.array(Float.TYPE, [3]);
m.getColumn$I$FA(n, f);
return mp.addXAF$FA(f);
}
case 12:
if (n < 0 || n > 2 ) return false;
var m4=x1.value;
switch (tok) {
case 1275068935:
f=Clazz.array(Float.TYPE, [4]);
m4.getRow$I$FA(n, f);
return mp.addXAF$FA(f);
case 1275068934:
default:
f=Clazz.array(Float.TYPE, [4]);
m4.getColumn$I$FA(n, f);
return mp.addXAF$FA(f);
}
case 7:
var l1=x1.getList$();
var l2=Clazz.new_($I$(5,1));
for (var i=0, len=l1.size$(); i < len; i++) {
var l3=l1.get$I(i).getList$();
if (l3 == null ) return mp.addXStr$S("");
l2.addLast$O(n < l3.size$() ? l3.get$I(n) : $I$(1).newS$S(""));
}
return mp.addXList$javajs_util_Lst(l2);
}
return false;
}, p$1);

Clazz.newMeth(C$, 'evaluateIn$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
var x1=mp.getX$();
switch (args.length) {
case 1:
var lst=args[0].getList$();
if (lst != null ) for (var i=0, n=lst.size$(); i < n; i++) if ($I$(1,"areEqual$org_jmol_script_SV$org_jmol_script_SV",[x1, lst.get$I(i)])) return mp.addXInt$I(i + 1);

break;
default:
for (var i=0; i < args.length; i++) if ($I$(1).areEqual$org_jmol_script_SV$org_jmol_script_SV(x1, args[i])) return mp.addXInt$I(i + 1);

break;
}
return mp.addXInt$I(0);
}, p$1);

Clazz.newMeth(C$, 'evaluateReplace$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
var isAll=false;
var sFind;
var sReplace;
switch (args.length) {
case 0:
isAll=true;
sFind=sReplace=null;
break;
case 3:
isAll=$I$(1).bValue$org_jmol_script_T(args[2]);
case 2:
sFind=$I$(1).sValue$org_jmol_script_T(args[0]);
sReplace=$I$(1).sValue$org_jmol_script_T(args[1]);
break;
default:
return false;
}
var x=mp.getX$();
if (x.tok == 7) {
var list=$I$(1).strListValue$org_jmol_script_T(x);
var l=Clazz.array(String, [list.length]);
for (var i=list.length; --i >= 0; ) l[i]=(sFind == null  ? $I$(27).clean$S(list[i]) : isAll ? $I$(27).replaceAllCharacters$S$S$S(list[i], sFind, sReplace) : $I$(27).rep$S$S$S(list[i], sFind, sReplace));

return mp.addXAS$SA(l);
}var s=$I$(1).sValue$org_jmol_script_T(x);
return mp.addXStr$S(sFind == null  ? $I$(27).clean$S(s) : isAll ? $I$(27).replaceAllCharacters$S$S$S(s, sFind, sReplace) : $I$(27).rep$S$S$S(s, sFind, sReplace));
}, p$1);

Clazz.newMeth(C$, 'evaluateScript$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I', function (mp, args, tok) {
if ((tok == 134222350 || tok == 134238732 ) && args.length != 1  || args.length == 0 ) return false;
var s=$I$(1).sValue$org_jmol_script_T(args[0]);
var sb=Clazz.new_($I$(9,1));
switch (tok) {
case 134218759:
return (args.length == 2 ? s.equalsIgnoreCase$S("JSON") && mp.addXObj$O(this.vwr.parseJSONMap$S($I$(1).sValue$org_jmol_script_T(args[1])))  : mp.addXObj$O(this.vwr.evaluateExpressionAsVariable$O(s)));
case 134222850:
var appID=(args.length == 2 ? $I$(1).sValue$org_jmol_script_T(args[1]) : ".");
if (!appID.equals$O(".")) sb.append$S(this.vwr.jsEval$S(appID + "\u0001" + s ));
if (appID.equals$O(".") || appID.equals$O("*") ) this.e.runScriptBuffer$S$javajs_util_SB$Z(s, sb, true);
break;
case 134222350:
this.e.runScriptBuffer$S$javajs_util_SB$Z("show " + s, sb, true);
break;
case 134238732:
return mp.addX$org_jmol_script_SV(this.vwr.jsEvalSV$S(s));
}
s=sb.toString();
var f;
return (Float.isNaN$F(f=$I$(27).parseFloatStrict$S(s)) ? mp.addXStr$S(s) : s.indexOf$S(".") >= 0 ? mp.addXFloat$F(f) : mp.addXInt$I($I$(27).parseInt$S(s)));
}, p$1);

Clazz.newMeth(C$, 'evaluateSort$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I', function (mp, args, tok) {
if (args.length > 1) return false;
if (tok == 1275068444) {
if (args.length == 1 && args[0].tok == 4 ) {
return mp.addX$org_jmol_script_SV(mp.getX$().sortMapArray$S(args[0].asString$()));
}var n=(args.length == 0 ? 0 : args[0].asInt$());
return mp.addX$org_jmol_script_SV(mp.getX$().sortOrReverse$I(n));
}var x=mp.getX$();
var match=(args.length == 0 ? null : args[0]);
if (x.tok == 4) {
var n=0;
var s=$I$(1).sValue$org_jmol_script_T(x);
if (match == null ) return mp.addXInt$I(0);
var m=$I$(1).sValue$org_jmol_script_T(match);
for (var i=0; i < s.length$(); i++) {
var pt=s.indexOf$S$I(m, i);
if (pt < 0) break;
n++;
i=pt;
}
return mp.addXInt$I(n);
}var counts=Clazz.new_($I$(5,1));
var last=null;
var count=null;
var xList=$I$(1).getVariable$O(x.value).sortOrReverse$I(0).getList$();
if (xList == null ) return (match == null  ? mp.addXStr$S("") : mp.addXInt$I(0));
for (var i=0, nLast=xList.size$(); i <= nLast; i++) {
var a=(i == nLast ? null : xList.get$I(i));
if (match != null  && a != null   && !$I$(1).areEqual$org_jmol_script_SV$org_jmol_script_SV(a, match) ) continue;
if ($I$(1).areEqual$org_jmol_script_SV$org_jmol_script_SV(a, last)) {
count.intValue++;
continue;
} else if (last != null ) {
var y=Clazz.new_($I$(5,1));
y.addLast$O(last);
y.addLast$O(count);
counts.addLast$O($I$(1).getVariableList$javajs_util_Lst(y));
}count=$I$(1).newI$I(1);
last=a;
}
if (match == null ) return mp.addX$org_jmol_script_SV($I$(1).getVariableList$javajs_util_Lst(counts));
if (counts.isEmpty$()) return mp.addXInt$I(0);
return mp.addX$org_jmol_script_SV(counts.get$I(0).getList$().get$I(1));
}, p$1);

Clazz.newMeth(C$, 'evaluateString$org_jmol_script_ScriptMathProcessor$I$org_jmol_script_SVA', function (mp, tok, args) {
var x=mp.getX$();
var sArg=(args.length > 0 ? $I$(1).sValue$org_jmol_script_T(args[0]) : tok == 1275068932 ? "" : "\n");
switch (args.length) {
case 0:
break;
case 1:
if (args[0].tok == 1073742335) {
return mp.addX$org_jmol_script_SV($I$(1,"getVariable$O",[$I$(27,"getTokens$S",[x.asString$()])]));
}break;
case 2:
if (x.tok == 7) break;
if (tok == 1275069447) {
x=$I$(1,"getVariable$O",[$I$(27,"split$S$S",[$I$(27).rep$S$S$S(x.value, "\n\r", "\n").replace$C$C("\r", "\n"), "\n"])]);
break;
}default:
return false;
}
if (x.tok == 7 && tok != 1275068932  && (tok != 1275069447 || args.length == 2 ) ) {
mp.addX$org_jmol_script_SV(x);
return p$1.evaluateList$org_jmol_script_ScriptMathProcessor$I$org_jmol_script_SVA.apply(this, [mp, tok, args]);
}var s=(tok == 1275069447 && x.tok == 10  || tok == 1275068932 && x.tok == 7   ? null : $I$(1).sValue$org_jmol_script_T(x));
switch (tok) {
case 1275069447:
if (x.tok == 10) {
var bsSelected=x.value;
var modelCount=this.vwr.ms.mc;
var lst=Clazz.new_($I$(5,1));
for (var i=0; i < modelCount; i++) {
var bs=this.vwr.getModelUndeletedAtomsBitSet$I(i);
bs.and$javajs_util_BS(bsSelected);
lst.addLast$O($I$(1).getVariable$O(bs));
}
return mp.addXList$javajs_util_Lst(lst);
}return mp.addXAS$SA($I$(27).split$S$S(s, sArg));
case 1275069446:
if (s.length$() > 0 && s.charAt$I(s.length$() - 1) == "\n" ) s=s.substring$I$I(0, s.length$() - 1);
return mp.addXStr$S($I$(27).rep$S$S$S(s, "\n", sArg));
case 1275068932:
if (s != null ) return mp.addXStr$S($I$(27).trim$S$S(s, sArg));
var list=$I$(1).strListValue$org_jmol_script_T(x);
for (var i=list.length; --i >= 0; ) list[i]=$I$(27).trim$S$S(list[i], sArg);

return mp.addXAS$SA(list);
}
return mp.addXStr$S("");
}, p$1);

Clazz.newMeth(C$, 'evaluateSubstructure$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$I$Z', function (mp, args, tok, isSelector) {
if (args.length == 0 || isSelector && args.length > 1  ) return false;
var bs=Clazz.new_($I$(16,1));
var pattern=$I$(1).sValue$org_jmol_script_T(args[0]);
if (pattern.length$() > 0) try {
var bsSelected=(isSelector ? mp.getX$().value : args.length == 2 && args[1].tok == 10  ? args[1].value : null);
bs=this.vwr.getSmilesMatcher$().getSubstructureSet$S$org_jmol_util_NodeA$I$javajs_util_BS$I(pattern, this.vwr.ms.at, this.vwr.ms.ac, bsSelected, (tok == 134218757 ? 1 : 2));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.e.evalError$S$S(ex.getMessage$(), null);
} else {
throw ex;
}
}
return mp.addXBs$javajs_util_BS(bs);
}, p$1);

Clazz.newMeth(C$, 'evaluateSymop$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA$Z', function (mp, args, haveBitSet) {
var x1=(haveBitSet ? mp.getX$() : null);
if (x1 != null  && x1.tok != 10 ) return false;
var bsAtoms=(x1 == null  ? null : x1.value);
if (bsAtoms == null  && this.vwr.ms.mc == 1 ) bsAtoms=this.vwr.getModelUndeletedAtomsBitSet$I(0);
var narg=args.length;
if (narg == 0) {
if (bsAtoms.isEmpty$()) return false;
var ops=$I$(27,"split$S$S",[$I$(27,"trim$S$S",[this.vwr.getSymTemp$().getSpaceGroupInfo$org_jmol_modelset_ModelSet$S$I$Z$FA(this.vwr.ms, null, this.vwr.ms.at[bsAtoms.nextSetBit$I(0)].mi, false, null).get$O("symmetryInfo"), "\n"]), "\n"]);
var lst=Clazz.new_($I$(5,1));
for (var i=0, n=ops.length; i < n; i++) lst.addLast$O($I$(27).split$S$S(ops[i], "\t"));

return mp.addXList$javajs_util_Lst(lst);
}var xyz=null;
var iOp=-2147483648;
var apt=0;
switch (args[0].tok) {
case 4:
xyz=$I$(1).sValue$org_jmol_script_T(args[0]);
apt++;
break;
case 12:
xyz=args[0].escape$();
apt++;
break;
case 2:
iOp=args[0].asInt$();
apt++;
break;
}
if (bsAtoms == null ) {
if (apt < narg && args[apt].tok == 10 ) (bsAtoms=Clazz.new_($I$(16,1))).or$javajs_util_BS(args[apt].value);
if (apt + 1 < narg && args[apt + 1].tok == 10 ) (bsAtoms == null  ? (bsAtoms=Clazz.new_($I$(16,1))) : bsAtoms).or$javajs_util_BS(args[apt + 1].value);
}var pt1=null;
var pt2=null;
if ((pt1=(narg > apt ? mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[apt], bsAtoms) : null)) != null ) apt++;
if ((pt2=(narg > apt ? mp.ptValue$org_jmol_script_SV$javajs_util_BS(args[apt], bsAtoms) : null)) != null ) apt++;
var nth=(pt2 != null  && args.length > apt  && iOp == -2147483648  && args[apt].tok == 2  ? args[apt].intValue : -1);
if (nth >= 0) apt++;
if (iOp == -2147483648) iOp=0;
var desc=(narg == apt ? (pt2 != null  ? "all" : pt1 != null  ? "point" : "matrix") : $I$(1).sValue$org_jmol_script_T(args[apt++]).toLowerCase$());
return (bsAtoms != null  && !bsAtoms.isEmpty$()  && apt == args.length  && mp.addXObj$O(this.vwr.getSymmetryInfo$I$S$I$javajs_util_P3$javajs_util_P3$I$S$F$I$I(bsAtoms.nextSetBit$I(0), xyz, iOp, pt1, pt2, 0, desc, 0, nth, 0)) );
}, p$1);

Clazz.newMeth(C$, 'evaluateTensor$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
var isTensor=(args.length == 2 && args[1].tok == 1275068445 );
var x=(isTensor ? null : mp.getX$());
if (args.length > 2 || !isTensor && x.tok != 10  ) return false;
var bs=x.value;
var tensorType=(isTensor || args.length == 0  ? null : $I$(1).sValue$org_jmol_script_T(args[0]).toLowerCase$());
var calc=this.vwr.getNMRCalculation$();
if ("unique".equals$O(tensorType)) return mp.addXBs$javajs_util_BS(calc.getUniqueTensorSet$javajs_util_BS(bs));
var infoType=(args.length < 2 ? null : $I$(1).sValue$org_jmol_script_T(args[1]).toLowerCase$());
if (isTensor) {
return mp.addXObj$O((args[0].value).getInfo$S(infoType));
}return mp.addXList$javajs_util_Lst(calc.getTensorInfo$S$S$javajs_util_BS(tensorType, infoType, bs));
}, p$1);

Clazz.newMeth(C$, 'evaluateUserFunction$org_jmol_script_ScriptMathProcessor$S$org_jmol_script_SVA$I$Z', function (mp, name, args, tok, isSelector) {
var x1=null;
if (isSelector) {
x1=mp.getX$();
switch (x1.tok) {
case 10:
break;
case 6:
if (args.length > 0) return false;
x1=x1.getMap$().get$O(name);
return (x1 == null  ? mp.addXStr$S("") : mp.addX$org_jmol_script_SV(x1));
default:
return false;
}
}name=name.toLowerCase$();
mp.wasX=false;
var params=Clazz.new_($I$(5,1));
for (var i=0; i < args.length; i++) {
params.addLast$O(args[i]);
}
if (isSelector) {
return mp.addXObj$O(this.e.getBitsetProperty$javajs_util_BS$javajs_util_Lst$I$javajs_util_P3$javajs_util_P4$O$O$Z$I$Z(x1.value, null, tok, null, null, x1.value, Clazz.array(java.lang.Object, -1, [name, params]), false, x1.index, false));
}var $var=this.e.getUserFunctionResult$S$javajs_util_Lst$org_jmol_script_SV(name, params, null);
return ($var == null  ? false : mp.addX$org_jmol_script_SV($var));
}, p$1);

Clazz.newMeth(C$, 'evaluateWithin$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
if (args.length < 1 || args.length > 5 ) return false;
var len=args.length;
if (len == 1 && args[0].tok == 10 ) return mp.addX$org_jmol_script_SV(args[0]);
var distance=0;
var withinSpec=args[0].value;
var withinStr="" + withinSpec;
var tok=args[0].tok;
if (tok == 4) tok=$I$(24).getTokFromName$S(withinStr);
var ms=this.vwr.ms;
var isVdw=false;
var isWithinModelSet=false;
var isWithinGroup=false;
var isDistance=false;
var rd=null;
switch (tok) {
case 1648363544:
isVdw=true;
withinSpec=null;
case 3:
case 2:
isDistance=true;
if (len < 2 || len == 3 && args[1].tok == 7  && args[2].tok != 7  ) return false;
distance=(isVdw ? 100 : $I$(1).fValue$org_jmol_script_T(args[0]));
switch (tok=args[1].tok) {
case 1073742335:
case 1073742334:
isWithinModelSet=args[1].asBoolean$();
if (len > 2 && $I$(1).sValue$org_jmol_script_T(args[2]).equalsIgnoreCase$S("unitcell") ) tok=1814695966;
len=0;
break;
case 4:
var s=$I$(1).sValue$org_jmol_script_T(args[1]);
if (s.startsWith$S("$")) return mp.addXBs$javajs_util_BS(p$1.getAtomsNearSurface$F$S.apply(this, [distance, s.substring$I(1)]));
if (s.equalsIgnoreCase$S("group")) {
isWithinGroup=true;
tok=1086324742;
} else if (s.equalsIgnoreCase$S("vanderwaals") || s.equalsIgnoreCase$S("vdw") ) {
withinSpec=null;
isVdw=true;
tok=1648363544;
} else if (s.equalsIgnoreCase$S("unitcell")) {
tok=1814695966;
} else {
return false;
}break;
}
break;
case 7:
if (len == 1) {
withinSpec=args[0].asString$();
tok=0;
}break;
case 1073742328:
return (len == 3 && Clazz.instanceOf(args[1].value, "javajs.util.BS")  && Clazz.instanceOf(args[2].value, "javajs.util.BS")  && mp.addXBs$javajs_util_BS(this.vwr.getBranchBitSet$I$I$Z((args[2].value).nextSetBit$I(0), (args[1].value).nextSetBit$I(0), true)) );
case 134218757:
case 1237320707:
case 134218756:
var bsSelected=null;
var isOK=true;
switch (len) {
case 2:
break;
case 3:
isOK=(args[2].tok == 10);
if (isOK) bsSelected=args[2].value;
break;
default:
isOK=false;
}
if (!isOK) this.e.invArg$();
return mp.addXObj$O(this.e.getSmilesExt$().getSmilesMatches$S$S$javajs_util_BS$javajs_util_BS$I$Z$Z($I$(1).sValue$org_jmol_script_T(args[1]), null, bsSelected, null, tok == 134218756 ? 2 : 1, mp.asBitSet, false));
}
if (Clazz.instanceOf(withinSpec, "java.lang.String")) {
if (tok == 0) {
tok=1073742362;
if (len > 2) return false;
len=2;
}} else if (!isDistance) {
return false;
}switch (len) {
case 1:
switch (tok) {
case 136314895:
case 2097184:
case 1678381065:
return mp.addXBs$javajs_util_BS(ms.getAtoms$I$O(tok, null));
case 1073741863:
return mp.addXBs$javajs_util_BS(ms.getAtoms$I$O(tok, ""));
case 1073742362:
return mp.addXBs$javajs_util_BS(ms.getAtoms$I$O(1086324744, withinStr));
}
return false;
case 2:
switch (tok) {
case 1073742362:
tok=1086324744;
break;
case 1073741824:
case 1086326786:
case 1086326785:
case 1073741863:
case 1086324744:
case 1111490587:
case 1073742128:
case 1073741925:
case 1073742189:
return mp.addXBs$javajs_util_BS(this.vwr.ms.getAtoms$I$O(tok, $I$(1).sValue$org_jmol_script_T(args[args.length - 1])));
}
break;
case 3:
switch (tok) {
case 1073742335:
case 1073742334:
case 1086324742:
case 1648363544:
case 1814695966:
case 134217750:
case 134219265:
case 1073742329:
case 8:
case 7:
break;
case 1086324744:
withinStr=$I$(1).sValue$org_jmol_script_T(args[2]);
break;
default:
return false;
}
break;
}
var plane=null;
var pt=null;
var pts1=null;
var last=args.length - 1;
switch (args[last].tok) {
case 9:
plane=args[last].value;
break;
case 8:
pt=args[last].value;
if ($I$(1).sValue$org_jmol_script_T(args[1]).equalsIgnoreCase$S("hkl")) plane=this.e.getHklPlane$javajs_util_P3(pt);
break;
case 7:
pts1=(last == 2 && args[1].tok == 7  ? args[1].getList$() : null);
pt=(last == 2 ? $I$(1).ptValue$org_jmol_script_SV(args[1]) : last == 1 ? $I$(2).new3$F$F$F(NaN, 0, 0) : null);
break;
}
if (plane != null ) return mp.addXBs$javajs_util_BS(ms.getAtomsNearPlane$F$javajs_util_P4(distance, plane));
var bs=(args[last].tok == 10 ? args[last].value : null);
if (last > 0 && pt == null   && pts1 == null   && bs == null  ) return false;
if (tok == 1814695966) {
var asMap=isWithinModelSet;
return ((bs != null  || pt != null  ) && mp.addXObj$O(this.vwr.ms.getUnitCellPointsWithin$F$javajs_util_BS$javajs_util_P3$Z(distance, bs, pt, asMap)) );
}if (pt != null  || pts1 != null  ) {
if (args[last].tok == 7) {
var sv=args[last].getList$();
var ap3=Clazz.array($I$(2), [sv.size$()]);
for (var i=ap3.length; --i >= 0; ) ap3[i]=$I$(1,"ptValue$org_jmol_script_SV",[sv.get$I(i)]);

var ap31=null;
if (pts1 != null ) {
ap31=Clazz.array($I$(2), [pts1.size$()]);
for (var i=ap31.length; --i >= 0; ) ap31[i]=$I$(1,"ptValue$org_jmol_script_SV",[pts1.get$I(i)]);

}var ret=Clazz.array(java.lang.Object, [1]);
switch ($I$(35).withinDistPoints$F$javajs_util_P3$javajs_util_P3A$javajs_util_P3A$OA(distance, pt, ap3, ap31, ret)) {
case 134217751:
return mp.addXPt$javajs_util_P3(ret[0]);
case 1073742001:
return mp.addXList$javajs_util_Lst(ret[0]);
case 1275068418:
return mp.addXAI$IA(ret[0]);
case 4:
return mp.addXStr$S(ret[0]);
default:
return false;
}
}return mp.addXBs$javajs_util_BS(this.vwr.getAtomsNearPt$F$javajs_util_P3(distance, pt));
}if (tok == 1086324744) return mp.addXBs$javajs_util_BS(this.vwr.ms.getSequenceBits$S$javajs_util_BS$javajs_util_BS(withinStr, bs, Clazz.new_($I$(16,1))));
if (bs == null ) bs=Clazz.new_($I$(16,1));
if (!isDistance) return mp.addXBs$javajs_util_BS(this.vwr.ms.getAtoms$I$O(tok, bs));
if (isWithinGroup) return mp.addXBs$javajs_util_BS(this.vwr.getGroupsWithin$I$javajs_util_BS((distance|0), bs));
if (isVdw) {
rd=Clazz.new_([null, (distance > 10  ? distance / 100 : distance), (distance > 10  ? $I$(21).FACTOR : $I$(21).OFFSET), $I$(22).AUTO],$I$(20,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW);
if (distance < 0 ) distance=0;
}return mp.addXBs$javajs_util_BS(this.vwr.ms.getAtomsWithinRadius$F$javajs_util_BS$Z$org_jmol_atomdata_RadiusData(distance, bs, isWithinModelSet, rd));
}, p$1);

Clazz.newMeth(C$, 'evaluateWrite$org_jmol_script_ScriptMathProcessor$org_jmol_script_SVA', function (mp, args) {
switch (args.length) {
case 0:
return false;
case 1:
var type=args[0].asString$().toUpperCase$();
if (type.equals$O("PNGJ")) {
return mp.addXMap$java_util_Map(this.vwr.fm.getFileAsMap$S$S(null, "PNGJ"));
}if ($I$(27).isOneOf$S$S(type, ";ZIP;ZIPALL;JMOL;")) {
var params=Clazz.new_($I$(6,1));
var oc=Clazz.new_($I$(36,1));
params.put$O$O("outputChannel", oc);
this.vwr.createZip$S$S$java_util_Map(null, type, params);
var bis=$I$(37,"getBIS$BA",[oc.toByteArray$()]);
params=Clazz.new_($I$(6,1));
$I$(38).readFileAsMap$java_io_BufferedInputStream$java_util_Map$S(bis, params, null);
return mp.addXMap$java_util_Map(params);
}break;
}
return mp.addXStr$S(this.e.getCmdExt$().dispatch$I$Z$org_jmol_script_TA(134221856, true, args));
}, p$1);

Clazz.newMeth(C$, 'getAtomsNearSurface$F$S', function (distance, surfaceId) {
var data=Clazz.array(java.lang.Object, -1, [surfaceId, null, null]);
if (this.e.getShapePropertyData$I$S$OA(24, "getVertices", data)) return p$1.getAtomsNearPts$F$javajs_util_T3A$javajs_util_BS.apply(this, [distance, data[1], data[2]]);
data[1]=Integer.valueOf$I(0);
data[2]=Integer.valueOf$I(-1);
if (this.e.getShapePropertyData$I$S$OA(22, "getCenter", data)) return this.vwr.getAtomsNearPt$F$javajs_util_P3(distance, data[2]);
data[1]=Float.valueOf$F(distance);
if (this.e.getShapePropertyData$I$S$OA(21, "getAtomsWithin", data)) return data[2];
return Clazz.new_($I$(16,1));
}, p$1);

Clazz.newMeth(C$, 'getAtomsNearPts$F$javajs_util_T3A$javajs_util_BS', function (distance, points, bsInclude) {
var bsResult=Clazz.new_($I$(16,1));
if (points.length == 0 || bsInclude != null  && bsInclude.isEmpty$()  ) return bsResult;
if (bsInclude == null ) bsInclude=$I$(19).setAll$I(points.length);
var at=this.vwr.ms.at;
for (var i=this.vwr.ms.ac; --i >= 0; ) {
var atom=at[i];
for (var j=bsInclude.nextSetBit$I(0); j >= 0; j=bsInclude.nextSetBit$I(j + 1)) if (atom.distance$javajs_util_T3(points[j]) < distance ) {
bsResult.set$I(i);
break;
}
}
return bsResult;
}, p$1);

Clazz.newMeth(C$, 'getMinMax$O$I', function (floatOrSVArray, tok) {
var data=null;
var sv=null;
var ndata=0;
var htPivot=null;
while (true){
if ($I$(7).isAF$O(floatOrSVArray)) {
if (tok == 1275068437) return "NaN";
data=floatOrSVArray;
ndata=data.length;
if (ndata == 0) break;
} else if (Clazz.instanceOf(floatOrSVArray, "javajs.util.Lst")) {
sv=floatOrSVArray;
ndata=sv.size$();
if (ndata == 0) {
if (tok != 1275068437) break;
} else {
var sv0=sv.get$I(0);
if (sv0.tok == 8) return p$1.getMinMaxPoint$O$I.apply(this, [sv, tok]);
if (sv0.tok == 4 && (sv0.value).startsWith$S("{") ) {
var pt=$I$(1).ptValue$org_jmol_script_SV(sv0);
if (Clazz.instanceOf(pt, "javajs.util.P3")) return p$1.getMinMaxPoint$O$I.apply(this, [sv, tok]);
if (Clazz.instanceOf(pt, "javajs.util.P4")) return p$1.getMinMaxQuaternion$javajs_util_Lst$I.apply(this, [sv, tok]);
break;
}}} else {
break;
}var sum;
var minMax;
var isMin=false;
switch (tok) {
case 1275068437:
htPivot=Clazz.new_($I$(6,1));
sum=minMax=0;
break;
case 32:
isMin=true;
sum=3.4028235E38;
minMax=2147483647;
break;
case 64:
sum=-3.4028235E38;
minMax=-2147483647;
break;
default:
sum=minMax=0;
}
var sum2=0;
var n=0;
var isInt=true;
var isPivot=(tok == 1275068437);
for (var i=ndata; --i >= 0; ) {
var svi=(sv == null  ? $I$(1).vF : sv.get$I(i));
var v=(isPivot ? 1 : data == null  ? $I$(1).fValue$org_jmol_script_T(svi) : data[i]);
if (Float.isNaN$F(v)) continue;
n++;
switch (tok) {
case 160:
case 192:
sum2 += (v) * v;
case 128:
case 96:
sum += v;
break;
case 1275068437:
isInt&=(svi.tok == 2);
var key=svi.asString$();
var ii=htPivot.get$O(key);
htPivot.put$O$O(key, (ii == null  ?  new Integer(1) :  new Integer(ii.intValue$() + 1)));
break;
case 32:
case 64:
isInt&=(svi.tok == 2);
if (isMin == (v < sum ) ) {
sum=v;
if (isInt) minMax=svi.intValue;
}break;
}
}
if (tok == 1275068437) {
return htPivot;
}if (n == 0) break;
switch (tok) {
case 96:
sum /= n;
break;
case 192:
if (n == 1) break;
sum=Math.sqrt((sum2 - sum * sum / n) / (n - 1));
break;
case 32:
case 64:
if (isInt) return Integer.valueOf$I(minMax);
break;
case 128:
break;
case 160:
sum=sum2;
break;
}
return Float.valueOf$F(sum);
}
return "NaN";
});

Clazz.newMeth(C$, 'getMinMaxPoint$O$I', function (pointOrSVArray, tok) {
var data=null;
var sv=null;
var ndata=0;
if (Clazz.instanceOf(pointOrSVArray, Clazz.array($I$(25), -1))) {
data=pointOrSVArray;
ndata=data.length;
} else if (Clazz.instanceOf(pointOrSVArray, "javajs.util.Lst")) {
sv=pointOrSVArray;
ndata=sv.size$();
}if (sv == null  && data == null  ) return "NaN";
var result=Clazz.new_($I$(2,1));
var fdata=Clazz.array(Float.TYPE, [ndata]);
for (var xyz=0; xyz < 3; xyz++) {
for (var i=0; i < ndata; i++) {
var pt=(data == null  ? $I$(1,"ptValue$org_jmol_script_SV",[sv.get$I(i)]) : data[i]);
if (pt == null ) return "NaN";
switch (xyz) {
case 0:
fdata[i]=pt.x;
break;
case 1:
fdata[i]=pt.y;
break;
case 2:
fdata[i]=pt.z;
break;
}
}
var f=this.getMinMax$O$I(fdata, tok);
if (!(Clazz.instanceOf(f, "java.lang.Number"))) return "NaN";
var value=(f).floatValue$();
switch (xyz) {
case 0:
result.x=value;
break;
case 1:
result.y=value;
break;
case 2:
result.z=value;
break;
}
}
return result;
}, p$1);

Clazz.newMeth(C$, 'getMinMaxQuaternion$javajs_util_Lst$I', function (svData, tok) {
var data;
switch (tok) {
case 32:
case 64:
case 128:
case 160:
return "NaN";
}
while (true){
data=this.e.getQuaternionArray$O$I(svData, 1073742001);
if (data == null ) break;
var retStddev=Clazz.array(Float.TYPE, [1]);
var result=$I$(25).sphereMean$javajs_util_QuatA$FA$F(data, retStddev, 1.0E-4);
switch (tok) {
case 96:
return result;
case 192:
return Float.valueOf$F(retStddev[0]);
}
break;
}
return "NaN";
}, p$1);

Clazz.newMeth(C$, 'getPatternMatcher', function () {
return (this.pm == null  ? this.pm=$I$(14).getUtil$S$org_jmol_viewer_Viewer$S("PatternMatcher", this.e.vwr, "script") : this.pm);
}, p$1);

Clazz.newMeth(C$, 'opTokenFor$I', function (tok) {
switch (tok) {
case 1275069441:
case 1275069446:
return $I$(24).tokenPlus;
case 1275068931:
return $I$(24).tokenMinus;
case 1275068929:
return $I$(24).tokenTimes;
case 1275068930:
return $I$(24).tokenMul3;
case 1275068928:
return $I$(24).tokenDivide;
}
return null;
}, p$1);

Clazz.newMeth(C$, 'setContactBitSets$javajs_util_BS$javajs_util_BS$Z$F$org_jmol_atomdata_RadiusData$Z', function (bsA, bsB, localOnly, distance, rd, warnMultiModel) {
var withinAllModels;
var bs;
if (bsB == null ) {
bsB=$I$(19).setAll$I(this.vwr.ms.ac);
$I$(19).andNot$javajs_util_BS$javajs_util_BS(bsB, this.vwr.slm.bsDeleted);
bsB.andNot$javajs_util_BS(bsA);
withinAllModels=false;
} else {
bs=$I$(19).copy$javajs_util_BS(bsA);
bs.or$javajs_util_BS(bsB);
var nModels=this.vwr.ms.getModelBS$javajs_util_BS$Z(bs, false).cardinality$();
withinAllModels=(nModels > 1);
if (warnMultiModel && nModels > 1  && !this.e.tQuiet ) this.e.showString$S($I$(39).$$S("Note: More than one model is involved in this contact!"));
}if (!bsA.equals$O(bsB)) {
var setBfirst=(!localOnly || bsA.cardinality$() < bsB.cardinality$() );
if (setBfirst) {
bs=this.vwr.ms.getAtomsWithinRadius$F$javajs_util_BS$Z$org_jmol_atomdata_RadiusData(distance, bsA, withinAllModels, (Float.isNaN$F(distance) ? rd : null));
bsB.and$javajs_util_BS(bs);
}if (localOnly) {
bs=this.vwr.ms.getAtomsWithinRadius$F$javajs_util_BS$Z$org_jmol_atomdata_RadiusData(distance, bsB, withinAllModels, (Float.isNaN$F(distance) ? rd : null));
bsA.and$javajs_util_BS(bs);
if (!setBfirst) {
bs=this.vwr.ms.getAtomsWithinRadius$F$javajs_util_BS$Z$org_jmol_atomdata_RadiusData(distance, bsA, withinAllModels, (Float.isNaN$F(distance) ? rd : null));
bsB.and$javajs_util_BS(bs);
}bs=$I$(19).copy$javajs_util_BS(bsB);
bs.and$javajs_util_BS(bsA);
if (bs.equals$O(bsA)) bsB.andNot$javajs_util_BS(bsA);
 else if (bs.equals$O(bsB)) bsA.andNot$javajs_util_BS(bsB);
}}return bsB;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:46 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
