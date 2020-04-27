(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={},I$=[[0,'javajs.util.SB','java.util.Hashtable','org.jmol.util.Edge','javajs.util.PT','org.jmol.viewer.JC','org.jmol.script.T','javajs.util.AU','org.jmol.script.SV']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LabelToken");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pt=-1;
this.ch1="\u0000";
this.precision=2147483647;
},1);

C$.$fields$=[['Z',['alignLeft','zeroPad','intAsFloat'],'C',['ch1'],'I',['tok','pt','width','precision'],'S',['text','key'],'O',['data','java.lang.Object']]
,['O',['labelTokenIds','int[]','+twoCharLabelTokenIds']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$S$I', function (text, pt) {
this.text=text;
this.pt=pt;
return this;
}, p$1);

Clazz.newMeth(C$, 'isLabelPropertyTok$I', function (tok) {
for (var i=C$.labelTokenIds.length; --i >= 0; ) if (C$.labelTokenIds[i] == tok) return true;

return false;
}, 1);

Clazz.newMeth(C$, 'compile$org_jmol_viewer_Viewer$S$C$java_util_Map', function (vwr, strFormat, chAtom, htValues) {
if (strFormat == null  || strFormat.length$() == 0 ) return null;
if (strFormat.indexOf$S("%") < 0 || strFormat.length$() < 2 ) return Clazz.array(C$, -1, [p$1.set$S$I.apply(Clazz.new_(C$), [strFormat, -1])]);
var n=0;
var ich=-1;
var cch=strFormat.length$();
while (++ich < cch && (ich=strFormat.indexOf$I$I("%", ich)) >= 0 )n++;

var tokens=Clazz.array(C$, [n * 2 + 1]);
var ichPercent;
var i=0;
for (ich=0; (ichPercent=strFormat.indexOf$I$I("%", ich)) >= 0; ) {
if (ich != ichPercent) tokens[i++]=p$1.set$S$I.apply(Clazz.new_(C$), [strFormat.substring$I$I(ich, ichPercent), -1]);
var lt=tokens[i++]=p$1.set$S$I.apply(Clazz.new_(C$), [null, ichPercent]);
vwr.autoCalculate$I$S(lt.tok, null);
ich=C$.setToken$org_jmol_viewer_Viewer$S$org_jmol_modelset_LabelToken$I$I$java_util_Map(vwr, strFormat, lt, cch, chAtom.$c(), htValues);
}
if (ich < cch) tokens[i++]=p$1.set$S$I.apply(Clazz.new_(C$), [strFormat.substring$I(ich), -1]);
return tokens;
}, 1);

Clazz.newMeth(C$, 'formatLabel$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$S$javajs_util_P3', function (vwr, atom, strFormat, ptTemp) {
return (strFormat == null  || strFormat.length$() == 0  ? null : C$.formatLabelAtomArray$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelTokenA$C$IA$javajs_util_P3(vwr, atom, C$.compile$org_jmol_viewer_Viewer$S$C$java_util_Map(vwr, strFormat, "\u0000", null), "\u0000", null, ptTemp));
});

Clazz.newMeth(C$, 'formatLabelAtomArray$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelTokenA$C$IA$javajs_util_P3', function (vwr, atom, tokens, chAtom, indices, ptTemp) {
if (atom == null ) return null;
var strLabel=(chAtom > "0" ? null : Clazz.new_($I$(1,1)));
if (tokens != null ) for (var i=0; i < tokens.length; i++) {
var t=tokens[i];
if (t == null ) break;
if (chAtom > "0" && t.ch1 != chAtom ) continue;
if (t.tok <= 0 || t.key != null  ) {
if (strLabel != null ) {
strLabel.append$S(t.text);
if (t.ch1 != "\u0000") strLabel.appendC$C(t.ch1);
}} else {
C$.appendAtomTokenValue$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelToken$javajs_util_SB$IA$javajs_util_P3(vwr, atom, t, strLabel, indices, ptTemp);
}}
return (strLabel == null  ? null : strLabel.toString().intern$());
}, 1);

Clazz.newMeth(C$, 'getBondLabelValues$', function () {
var htValues=Clazz.new_($I$(2,1));
htValues.put$O$O("#", "");
htValues.put$O$O("ORDER", "");
htValues.put$O$O("TYPE", "");
htValues.put$O$O("LENGTH", Float.valueOf$F(0));
htValues.put$O$O("ENERGY", Float.valueOf$F(0));
return htValues;
}, 1);

Clazz.newMeth(C$, 'formatLabelBond$org_jmol_viewer_Viewer$org_jmol_modelset_Bond$org_jmol_modelset_LabelTokenA$java_util_Map$IA$javajs_util_P3', function (vwr, bond, tokens, values, indices, ptTemp) {
values.put$O$O("#", "" + (bond.index + 1));
values.put$O$O("ORDER", "" + $I$(3).getBondOrderNumberFromOrder$I(bond.order));
values.put$O$O("TYPE", $I$(3).getBondOrderNameFromOrder$I(bond.order));
values.put$O$O("LENGTH", Float.valueOf$F(bond.atom1.distance$javajs_util_T3(bond.atom2)));
values.put$O$O("ENERGY", Float.valueOf$F(bond.getEnergy$()));
C$.setValues$org_jmol_modelset_LabelTokenA$java_util_Map(tokens, values);
C$.formatLabelAtomArray$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelTokenA$C$IA$javajs_util_P3(vwr, bond.atom1, tokens, "1", indices, ptTemp);
C$.formatLabelAtomArray$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelTokenA$C$IA$javajs_util_P3(vwr, bond.atom2, tokens, "2", indices, ptTemp);
return C$.getLabel$org_jmol_modelset_LabelTokenA(tokens);
}, 1);

Clazz.newMeth(C$, 'formatLabelMeasure$org_jmol_viewer_Viewer$org_jmol_modelset_Measurement$S$F$S', function (vwr, m, label, value, units) {
var htValues=Clazz.new_($I$(2,1));
htValues.put$O$O("#", "" + (m.index + 1));
htValues.put$O$O("VALUE", Float.valueOf$F(value));
htValues.put$O$O("UNITS", units);
var tokens=C$.compile$org_jmol_viewer_Viewer$S$C$java_util_Map(vwr, label, "\u0001", htValues);
if (tokens == null ) return "";
C$.setValues$org_jmol_modelset_LabelTokenA$java_util_Map(tokens, htValues);
var atoms=m.ms.at;
var indices=m.countPlusIndices;
for (var i=indices[0]; i >= 1; --i) if (indices[i] >= 0) C$.formatLabelAtomArray$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelTokenA$C$IA$javajs_util_P3(vwr, atoms[indices[i]], tokens, String.fromCharCode((48 + i)), null, null);

label=C$.getLabel$org_jmol_modelset_LabelTokenA(tokens);
return (label == null  ? "" : label);
}, 1);

Clazz.newMeth(C$, 'setValues$org_jmol_modelset_LabelTokenA$java_util_Map', function (tokens, values) {
for (var i=0; i < tokens.length; i++) {
var lt=tokens[i];
if (lt == null ) break;
if (lt.key == null ) continue;
var value=values.get$O(lt.key);
lt.text=(Clazz.instanceOf(value, "java.lang.Float") ? p$1.format$F$S$javajs_util_T3.apply(lt, [(value).floatValue$(), null, null]) : p$1.format$F$S$javajs_util_T3.apply(lt, [NaN, value, null]));
}
}, 1);

Clazz.newMeth(C$, 'getLabel$org_jmol_modelset_LabelTokenA', function (tokens) {
var sb=Clazz.new_($I$(1,1));
for (var i=0; i < tokens.length; i++) {
var lt=tokens[i];
if (lt == null ) break;
sb.append$S(lt.text);
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'setToken$org_jmol_viewer_Viewer$S$org_jmol_modelset_LabelToken$I$I$java_util_Map', function (vwr, strFormat, lt, cch, chAtom, htValues) {
var ich=lt.pt + 1;
if (ich >= cch) {
lt.text="%";
return ich;
}var ch;
if (strFormat.charAt$I(ich) == "-") {
lt.alignLeft=true;
++ich;
}if (ich < cch && strFormat.charAt$I(ich) == "0" ) {
lt.zeroPad=true;
++ich;
}while (ich < cch && (function(a,f){return f.apply(null,a)})([ch=strFormat.charAt$I(ich)],$I$(4).isDigit$C) ){
lt.width=(10 * lt.width) + (ch.$c() - 48);
++ich;
}
lt.precision=2147483647;
var isNegative=false;
if (ich < cch && strFormat.charAt$I(ich) == "." ) {
++ich;
if (ich < cch && (ch=strFormat.charAt$I(ich)) == "-" ) {
isNegative=true;
++ich;
}if (ich < cch && (function(a,f){return f.apply(null,a)})([ch=strFormat.charAt$I(ich)],$I$(4).isDigit$C) ) {
lt.precision=ch.$c() - 48;
if (isNegative) lt.precision=-1 - lt.precision;
++ich;
}}if (ich < cch && htValues != null  ) for (var key, $key = htValues.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) if (strFormat.indexOf$S(key) == ich) return ich + (lt.key=key).length$();

if (ich < cch) switch ((ch=strFormat.charAt$I(ich++)).$c()) {
case 37:
lt.text="%";
return ich;
case 91:
var ichClose=strFormat.indexOf$I$I("]", ich);
if (ichClose < ich) {
ich=cch;
break;
}var propertyName=strFormat.substring$I$I(ich, ichClose).toLowerCase$();
if (propertyName.startsWith$S("property_")) {
lt.tok=134221834;
lt.data=vwr.getDataObj$S$javajs_util_BS$I(propertyName, null, 1);
} else if (propertyName.startsWith$S("validation.")) {
lt.tok=1073742189;
lt.data=vwr.getDataObj$S$javajs_util_BS$I("property_" + propertyName.substring$I(11), null, 1);
} else if (propertyName.startsWith$S("unitid")) {
lt.tok=1073741974;
lt.data=Integer.valueOf$I((function(a,f){return f.apply(null,a)})([propertyName.substring$I(6)],$I$(5).getUnitIDFlags$S));
} else {
var token=$I$(6).getTokenFromName$S(propertyName);
if (token != null  && C$.isLabelPropertyTok$I(token.tok) ) lt.tok=token.tok;
}ich=ichClose + 1;
break;
case 123:
var ichCloseBracket=strFormat.indexOf$I$I("}", ich);
if (ichCloseBracket < ich) {
ich=cch;
break;
}var s=strFormat.substring$I$I(ich, ichCloseBracket);
lt.data=vwr.getDataObj$S$javajs_util_BS$I(s, null, 1);
if (lt.data == null ) {
lt.data=vwr.getDataObj$S$javajs_util_BS$I(s, null, -1);
if (lt.data != null ) {
lt.data=(lt.data)[1];
if (Clazz.instanceOf(lt.data, "java.lang.String")) lt.data=$I$(4).split$S$S(lt.data, "\n");
if (!($I$(7).isAS$O(lt.data))) lt.data=null;
}if (lt.data == null ) {
lt.tok=1715472409;
lt.data=s;
} else {
lt.tok=1275068418;
}} else {
lt.tok=134221834;
}ich=ichCloseBracket + 1;
break;
default:
var i;
var i1;
if (ich < cch && (i="fuv".indexOf$I(ch)) >= 0  && (i1="xyz".indexOf$I(strFormat.charAt$I(ich))) >= 0 ) {
lt.tok=C$.twoCharLabelTokenIds[i * 3 + i1];
ich++;
} else if ((i="AaBbCcDEefGgIiLlMmNnOoPpQqRrSsTtUuVvWXxxYyyZzz%%%gqW".indexOf$I(ch)) >= 0) {
lt.tok=C$.labelTokenIds[i];
}}
lt.text=strFormat.substring$I$I(lt.pt, ich);
if (ich < cch && chAtom != 0   && (function(a,f){return f.apply(null,a)})([ch=strFormat.charAt$I(ich)],$I$(4).isDigit$C) ) {
ich++;
lt.ch1=ch;
if (ch.$c() != chAtom  && chAtom != 1  ) lt.tok=0;
}return ich;
}, 1);

Clazz.newMeth(C$, 'appendAtomTokenValue$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_LabelToken$javajs_util_SB$IA$javajs_util_P3', function (vwr, atom, t, strLabel, indices, ptTemp) {
var strT=null;
var floatT=NaN;
var ptT=null;
try {
switch (t.tok) {
case 1094713347:
strT="" + (indices == null  ? atom.i : indices[atom.i]);
break;
case 1765808134:
ptT=atom.atomPropertyTuple$org_jmol_viewer_Viewer$I$javajs_util_P3(vwr, t.tok, ptTemp);
break;
case 1073741974:
strT=atom.getUnitID$I((t.data).intValue$());
break;
case 134221834:
case 1073742189:
if (t.data != null ) {
floatT=(t.data)[atom.i];
if (t.tok == 1073742189 && floatT != 1   && floatT != 0  ) {
var o=vwr.getAtomValidation$S$org_jmol_modelset_Atom(t.text.substring$I$I(13, t.text.length$() - 1), atom);
if (o == null ) {
System.out.println$S("?? o is null ??");
} else if (o.size$() == 1) {
floatT=o.get$I(0).floatValue$();
} else {
floatT=NaN;
strT="";
for (var i=0, n=o.size$(); i < n; i++) {
strT += "," + o.get$I(i).toString();
}
if (strT.length$() > 1) strT=strT.substring$I(1);
}}}break;
case 1715472409:
var data=vwr.ms.getInfo$I$S(atom.mi, t.data);
var iatom=atom.i - vwr.ms.am[atom.mi].firstAtomIndex;
var o=null;
if (iatom >= 0) if ((Clazz.instanceOf(data, Clazz.array(java.lang.Object, -1)))) {
var sdata=data;
o=(iatom < sdata.length ? sdata[iatom] : null);
} else if (Clazz.instanceOf(data, "javajs.util.Lst")) {
var list=data;
o=(iatom < list.size$() ? (function(a,f){return f.apply(null,a)})([list.get$I(iatom)],$I$(8).oValue$O) : null);
}if (o == null ) {
strT="";
} else if (Clazz.instanceOf(o, "java.lang.Float")) {
floatT=(o).floatValue$();
} else if (Clazz.instanceOf(o, "java.lang.Integer")) {
floatT=(o).intValue$();
} else if (Clazz.instanceOf(o, "javajs.util.T3")) {
ptT=o;
} else {
strT=o.toString();
}break;
case 1275068418:
if (t.data != null ) {
var sdata=t.data;
strT=(atom.i < sdata.length ? sdata[atom.i] : "");
}break;
case 1631586315:
var formalCharge=atom.getFormalCharge$();
strT=(formalCharge > 0 ? "" + formalCharge + "+"  : formalCharge < 0 ? "" + -formalCharge + "-"  : "");
break;
case 1094717454:
strT=atom.getModelNumberForLabel$();
break;
case 1128269825:
strT="" + atom.atomPropertyInt$I(t.tok);
break;
case 1665140738:
floatT=atom.atomPropertyFloat$org_jmol_viewer_Viewer$I$javajs_util_P3(vwr, t.tok, ptTemp);
break;
case 1086324749:
strT=atom.group.getStructureId$();
break;
case 1094713367:
var id=atom.group.getStrucNo$();
strT=(id <= 0 ? "" : "" + id);
break;
case 1111490574:
if (Float.isNaN$F(floatT=atom.group.getGroupParameter$I(1111490574))) strT="null";
break;
case 1111492626:
case 1111492627:
case 1111492628:
case 1111490583:
case 1111490584:
case 1111490585:
case 1111490586:
floatT=atom.atomPropertyFloat$org_jmol_viewer_Viewer$I$javajs_util_P3(vwr, t.tok, ptTemp);
if (Float.isNaN$F(floatT)) strT="";
break;
case 1073877011:
strT=vwr.getNBOAtomLabel$org_jmol_modelset_Atom(atom);
break;
case 1086324747:
case 1639976963:
case 1237320707:
strT=atom.atomPropertyString$org_jmol_viewer_Viewer$I(vwr, t.tok);
break;
case 1140850705:
strT=atom.getIdentityXYZ$Z$javajs_util_P3(false, ptTemp);
break;
case 79:
strT=atom.getSymmetryOperatorList$Z(false);
break;
case 81:
floatT=atom.getOccupancy100$() / 100.0;
break;
default:
switch (t.tok & 1136656384) {
case 1094713344:
if (t.intAsFloat) floatT=atom.atomPropertyInt$I(t.tok);
 else strT="" + atom.atomPropertyInt$I(t.tok);
break;
case 1111490560:
floatT=atom.atomPropertyFloat$org_jmol_viewer_Viewer$I$javajs_util_P3(vwr, t.tok, ptTemp);
break;
case 1086324736:
strT=atom.atomPropertyString$org_jmol_viewer_Viewer$I(vwr, t.tok);
break;
case 1077936128:
ptT=atom.atomPropertyTuple$org_jmol_viewer_Viewer$I$javajs_util_P3(vwr, t.tok, ptTemp);
if (ptT == null ) strT="";
break;
default:
}
}
} catch (ioobe) {
if (Clazz.exceptionOf(ioobe,"IndexOutOfBoundsException")){
floatT=NaN;
strT=null;
ptT=null;
} else {
throw ioobe;
}
}
strT=p$1.format$F$S$javajs_util_T3.apply(t, [floatT, strT, ptT]);
if (strLabel == null ) t.text=strT;
 else strLabel.append$S(strT);
}, 1);

Clazz.newMeth(C$, 'format$F$S$javajs_util_T3', function (floatT, strT, ptT) {
if (!Float.isNaN$F(floatT)) {
return $I$(4).formatF$F$I$I$Z$Z(floatT, this.width, this.precision, this.alignLeft, this.zeroPad);
} else if (strT != null ) {
return $I$(4).formatS$S$I$I$Z$Z(strT, this.width, this.precision, this.alignLeft, this.zeroPad);
} else if (ptT != null ) {
if (this.width == 0 && this.precision == 2147483647 ) {
this.width=6;
this.precision=2;
}return $I$(4).formatF$F$I$I$Z$Z(ptT.x, this.width, this.precision, false, false) + $I$(4).formatF$F$I$I$Z$Z(ptT.y, this.width, this.precision, false, false) + $I$(4).formatF$F$I$I$Z$Z(ptT.z, this.width, this.precision, false, false) ;
} else {
return this.text;
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.labelTokenIds=Clazz.array(Integer.TYPE, -1, [1086324739, 1086326786, 1086326785, 1111492620, 1631586315, 1086326788, 1094713347, 1086324746, 1086326789, 1111490569, 1094713357, 1094713361, 1111492618, 1094715393, 1094713363, 1094715402, 1094717454, 1086324743, 1094713360, 1086324742, 79, 1088421903, 1111492619, 1111490570, 81, 1128269825, 1094715412, 1086324747, 1094713366, 1086326788, 1111490574, 1111492620, 1086324745, 1111490575, 1648363544, 1145047055, 1140850705, 1111492612, 1111492609, 1111492629, 1111492613, 1111492610, 1111492630, 1111492614, 1111492611, 1111492631, 1114249217, 1112152066, 1112150019, 1112150020, 1112150021, 1112152070, 1112152071, 1112152073, 1112152074, 1112152076, 1649022989, 1112152078, 1111490561, 1111490562, 1094713346, 1228931587, 1765808134, 1094713356, 1111490564, 1228935687, 1287653388, 1825200146, 1111490567, 1094713359, 1111490565, 1111490568, 1094713362, 1715472409, 1665140738, 1113589787, 1086324748, 1086324744, 1112152075, 1639976963, 1237320707, 1094713367, 1086324749, 1086326798, 1111490576, 1111490577, 1111490578, 1111490579, 1094715417, 1648361473, 1111492626, 1111492627, 1111492628, 1312817669, 1145045006, 1145047051, 1145047050, 1145047053, 1111492615, 1111492616, 1111492617, 1113589786, 1111490571, 1111490572, 1111490573, 1145047052, 1111490566, 1111490563, 1094713351, 1094713365, 1111490583, 1111490584, 1111490585, 1111490586, 1145045008, 1296041986, 1073877011, 1086324752, 1086324753]);
C$.twoCharLabelTokenIds=Clazz.array(Integer.TYPE, -1, [1111492612, 1111492613, 1111492614, 1111490577, 1111490578, 1111490579, 1111492626, 1111492627, 1111492628]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:12 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
