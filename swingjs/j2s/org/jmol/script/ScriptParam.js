(function(){var P$=Clazz.newPackage("org.jmol.script"),p$1={},I$=[[0,'org.jmol.script.SV','javajs.util.SB','java.util.Hashtable','javajs.util.PT','javajs.util.Lst','org.jmol.util.BSUtil','javajs.util.P3','javajs.util.V3','javajs.util.P4','javajs.util.Measure','org.jmol.util.Logger','javajs.util.Quat','org.jmol.util.Edge','org.jmol.script.T','javajs.util.CU','org.jmol.modelset.TickInfo']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptParam", null, 'org.jmol.script.ScriptError');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['coordinatesAreFractional','isBondSet'],'I',['iToken','theTok','slen'],'O',['contextVariables','java.util.Map','thisContext','org.jmol.script.ScriptContext','theToken','org.jmol.script.T','st','org.jmol.script.T[]','fractionalPoint','javajs.util.P3','+pt1','+pt2','+pt3']]]

Clazz.newMeth(C$, 'getToken$I', function (i) {
if (!this.checkToken$I(i)) this.error$I(13);
this.theToken=this.st[i];
this.theTok=this.theToken.tok;
return this.theToken;
});

Clazz.newMeth(C$, 'tokAt$I', function (i) {
return (i < this.slen && this.st[i] != null   ? this.st[i].tok : 0);
});

Clazz.newMeth(C$, 'checkToken$I', function (i) {
return (this.iToken=i) < this.slen;
});

Clazz.newMeth(C$, 'getParameter$S$I$Z', function (key, tokType, nullAsString) {
var v=this.getContextVariableAsVariable$S$Z(key, false);
if (v == null ) {
if (nullAsString) v=this.vwr.getP$S(key);
 else if ((v=this.vwr.getPOrNull$S(key)) == null ) return null;
}switch (tokType) {
case 1073742190:
return $I$(1).getVariable$O(v);
case 4:
if (!(Clazz.instanceOf(v, "javajs.util.Lst"))) break;
var sv=v;
var sb=Clazz.new_($I$(2,1));
for (var i=0; i < sv.size$(); i++) sb.append$S(sv.get$I(i).asString$()).appendC$C("\n");

return sb.toString();
}
return $I$(1).oValue$O(v);
});

Clazz.newMeth(C$, 'getVarParameter$S$Z', function ($var, orReturnName) {
var v=this.getContextVariableAsVariable$S$Z($var, false);
if (v != null ) return (orReturnName ? v.asString$() : $I$(1).oValue$O(v));
var val=this.vwr.getP$S($var);
return (orReturnName && ("" + val).length$() == 0  ? $var : val);
});

Clazz.newMeth(C$, 'getContextVariableAsVariable$S$Z', function ($var, isLocal) {
if ($var.equals$O("expressionBegin")) return null;
if ($var.equalsIgnoreCase$S("_caller")) {
var sc=this.thisContext;
while (sc != null ){
if (sc.isFunction) return $I$(1).newV$I$O(6, sc.vars);
sc=sc.parentContext;
}
return (function(a,f){return f.apply(null,a)})([6, Clazz.new_($I$(3,1))],$I$(1).newV$I$O);
}$var=$var.toLowerCase$();
return (this.contextVariables != null  && this.contextVariables.containsKey$O($var)  ? this.contextVariables.get$O($var) : isLocal || this.thisContext == null   ? null : this.thisContext.getVariable$S($var));
});

Clazz.newMeth(C$, 'paramAsStr$I', function (i) {
this.getToken$I(i);
if (this.theToken == null ) this.error$I(13);
return $I$(1).sValue$org_jmol_script_T(this.theToken);
});

Clazz.newMeth(C$, 'stringParameter$I', function (index) {
if (!this.checkToken$I(index) || this.getToken$I(index).tok != 4 ) this.error$I(41);
return this.theToken.value;
});

Clazz.newMeth(C$, 'stringParameterSet$I', function (i) {
switch (this.tokAt$I(i)) {
case 4:
var s=this.stringParameter$I(i);
if (s.startsWith$S("[\"")) {
var o=this.vwr.evaluateExpression$O(s);
if (Clazz.instanceOf(o, "java.lang.String")) return $I$(4).split$S$S(o, "\n");
}return Clazz.array(String, -1, [s]);
case 1073742195:
i+=2;
break;
case 268435520:
++i;
break;
case 7:
return (function(a,f){return f.apply(null,a)})([this.getToken$I(i)],$I$(1).strListValue$org_jmol_script_T);
default:
this.invArg$();
}
var tok;
var v=Clazz.new_($I$(5,1));
while ((tok=this.tokAt$I(i)) != 268435521){
switch (tok) {
case 268435504:
break;
case 4:
v.addLast$O(this.stringParameter$I(i));
break;
default:
case 0:
this.invArg$();
}
i++;
}
this.iToken=i;
var n=v.size$();
var sParams=Clazz.array(String, [n]);
for (var j=0; j < n; j++) {
sParams[j]=v.get$I(j);
}
return sParams;
});

Clazz.newMeth(C$, 'objectNameParameter$I', function (index) {
if (!this.checkToken$I(index)) this.error$I(37);
return this.paramAsStr$I(index);
});

Clazz.newMeth(C$, 'atomCenterOrCoordinateParameter$I$OA', function (i, ret) {
switch (this.getToken$I(i).tok) {
case 10:
case 1073742325:
var bs=(this).atomExpression$org_jmol_script_TA$I$I$Z$Z$OA$Z(this.st, i, 0, true, false, ret, true);
if (bs == null ) {
if (ret == null  || !(Clazz.instanceOf(ret[0], "javajs.util.P3")) ) this.invArg$();
return ret[0];
}if (ret != null ) {
if (ret.length == 2 && Clazz.instanceOf(ret[1], "javajs.util.BS") ) {
bs=$I$(6).copy$javajs_util_BS(bs);
bs.and$javajs_util_BS(ret[1]);
}ret[0]=bs;
}return (bs.cardinality$() == 1 ? this.vwr.ms.at[bs.nextSetBit$I(0)] : this.vwr.ms.getAtomSetCenter$javajs_util_BS(bs));
case 1073742332:
case 8:
return this.getPoint3f$I$Z$Z(i, true, true);
}
this.invArg$();
return null;
});

Clazz.newMeth(C$, 'isCenterParameter$I', function (i) {
var tok=this.tokAt$I(i);
return (tok == 1073742330 || tok == 1073742332  || tok == 1073742325  || tok == 8  || tok == 10 );
});

Clazz.newMeth(C$, 'centerParameter$I$OA', function (i, ret) {
return this.centerParameterForModel$I$I$OA(i, -2147483648, ret);
});

Clazz.newMeth(C$, 'centerParameterForModel$I$I$OA', function (i, modelIndex, ret) {
var center=null;
if (this.checkToken$I(i)) {
switch (this.getToken$I(i).tok) {
case 1073742330:
var id=this.objectNameParameter$I(++i);
var index=-2147483648;
if (this.tokAt$I(i + 1) == 268435520) {
index=(this).parameterExpressionList$I$I$Z(-i - 1, -1, true).get$I(0).asInt$();
if (this.getToken$I(--this.iToken).tok != 268435521) this.invArg$();
}if (this.chk) return Clazz.new_($I$(7,1));
if (this.tokAt$I(i + 1) == 1073742336 && (this.tokAt$I(i + 2) == 1140850691 || this.tokAt$I(i + 2) == 1140850694 ) ) {
index=2147483647;
this.iToken=i + 2;
}if ((center=(this).getObjectCenter$S$I$I(id, index, modelIndex)) == null ) this.errorStr$I$S(12, id);
break;
case 10:
case 1073742325:
case 1073742332:
case 8:
if (ret == null ) ret=Clazz.array(java.lang.Object, [1]);
center=this.atomCenterOrCoordinateParameter$I$OA(i, ret);
break;
}
}if (center == null ) this.error$I(11);
return center;
});

Clazz.newMeth(C$, 'planeParameter$I', function (i) {
var vTemp=Clazz.new_($I$(8,1));
var vTemp2=Clazz.new_($I$(8,1));
var plane=null;
var norm=null;
if (this.tokAt$I(i) == 134217750) i++;
var isNegated=(this.tokAt$I(i) == 268435616);
if (isNegated) i++;
if (i < this.slen) {
switch (this.getToken$I(i).tok) {
case 9:
plane=$I$(9).newPt$javajs_util_P4(this.theToken.value);
break;
case 1073742330:
var id=this.objectNameParameter$I(++i);
if (this.chk) return Clazz.new_($I$(9,1));
plane=(this).getPlaneForObject$S$javajs_util_V3(id, vTemp);
break;
case 1111492629:
if (!this.checkToken$I(++i) || this.getToken$I(i++).tok != 268435860 ) this.evalError$S$S("x=?", null);
plane=(function(a,f){return f.apply(null,a)})([1, 0, 0, -this.floatParameter$I(i)],$I$(9).new4$F$F$F$F);
break;
case 1111492630:
if (!this.checkToken$I(++i) || this.getToken$I(i++).tok != 268435860 ) this.evalError$S$S("y=?", null);
plane=(function(a,f){return f.apply(null,a)})([0, 1, 0, -this.floatParameter$I(i)],$I$(9).new4$F$F$F$F);
break;
case 1111492631:
if (!this.checkToken$I(++i) || this.getToken$I(i++).tok != 268435860 ) this.evalError$S$S("z=?", null);
plane=(function(a,f){return f.apply(null,a)})([0, 0, 1, -this.floatParameter$I(i)],$I$(9).new4$F$F$F$F);
break;
case 1073741824:
case 4:
var str=this.paramAsStr$I(i);
if (str.equalsIgnoreCase$S("xy")) plane=$I$(9).new4$F$F$F$F(0, 0, isNegated ? -1 : 1, 0);
 else if (str.equalsIgnoreCase$S("xz")) plane=$I$(9).new4$F$F$F$F(0, isNegated ? -1 : 1, 0, 0);
 else if (str.equalsIgnoreCase$S("yz")) plane=$I$(9).new4$F$F$F$F(isNegated ? -1 : 1, 0, 0, 0);
break;
case 1073742332:
case 8:
if (!this.isPoint3f$I(i)) {
plane=this.getPoint4f$I(i);
break;
}case 10:
case 1073742325:
this.pt1=this.atomCenterOrCoordinateParameter$I$OA(i, null);
if (this.getToken$I(++this.iToken).tok == 268435504) ++this.iToken;
this.pt2=this.atomCenterOrCoordinateParameter$I$OA(this.iToken, null);
if (this.getToken$I(++this.iToken).tok == 268435504) ++this.iToken;
if (this.isFloatParameter$I(this.iToken)) {
var frac=this.floatParameter$I(this.iToken);
plane=Clazz.new_($I$(9,1));
vTemp.sub2$javajs_util_T3$javajs_util_T3(this.pt2, this.pt1);
vTemp.scale$F(frac * 2);
$I$(10).getBisectingPlane$javajs_util_P3$javajs_util_V3$javajs_util_T3$javajs_util_V3$javajs_util_P4(this.pt1, vTemp, vTemp2, vTemp, plane);
} else {
this.pt3=this.atomCenterOrCoordinateParameter$I$OA(this.iToken, null);
i=this.iToken;
norm=Clazz.new_($I$(8,1));
}break;
default:
if (this.isArrayParameter$I(i)) {
var list=this.getPointOrCenterVector$org_jmol_script_T(this.getToken$I(i));
if (list.size$() != 3) this.invArg$();
this.pt1=list.get$I(0);
this.pt2=list.get$I(1);
this.pt3=list.get$I(2);
norm=Clazz.new_($I$(8,1));
}}
if (norm != null ) {
var w=$I$(10).getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(this.pt1, this.pt2, this.pt3, norm, vTemp);
plane=Clazz.new_($I$(9,1));
plane.set4$F$F$F$F(norm.x, norm.y, norm.z, w);
}if (!this.chk && $I$(11).debugging ) $I$(11).debug$S(" defined plane: " + plane);
}if (plane == null ) this.errorMore$I$S$S$S(38, "{a b c d}", "\"xy\" \"xz\" \"yz\" \"x=...\" \"y=...\" \"z=...\"", "$xxxxx");
if (isNegated) {
plane.scale4$F(-1);
}return plane;
});

Clazz.newMeth(C$, 'getPointOrCenterVector$org_jmol_script_T', function (t) {
var data=Clazz.new_($I$(5,1));
var pt;
var bs;
var pts=(t).getList$();
if (pts == null ) this.invArg$();
for (var j=0; j < pts.size$(); j++) {
if ((pt=(function(a,f){return f.apply(null,a)})([pts.get$I(j)],$I$(1).ptValue$org_jmol_script_SV)) != null ) {
data.addLast$O(pt);
} else if ((bs=(function(a,f){return f.apply(null,a)})([pts.get$I(j), true],$I$(1).getBitSet$org_jmol_script_SV$Z)) != null ) {
data.addLast$O(bs.cardinality$() == 1 ? (function(a,f){return f.apply(null,a)})([this.vwr.ms.at[bs.nextSetBit$I(0)]],$I$(7).newP$javajs_util_T3) : this.vwr.ms.getAtomSetCenter$javajs_util_BS(bs));
} else {
this.invArg$();
}}
return data;
});

Clazz.newMeth(C$, 'hklParameter$I', function (i) {
if (!this.chk && this.vwr.getCurrentUnitCell$() == null  ) this.error$I(33);
var pt=this.getPointOrPlane$I$Z$Z$Z$Z$I$I$Z(i, false, true, false, true, 3, 3, true);
var p=this.getHklPlane$javajs_util_P3(pt);
if (p == null ) this.error$I(3);
if (!this.chk && $I$(11).debugging ) $I$(11).debug$S("defined plane: " + p);
return p;
});

Clazz.newMeth(C$, 'getHklPlane$javajs_util_P3', function (pt) {
this.pt1=(function(a,f){return f.apply(null,a)})([pt.x == 0  ? 1 : 1 / pt.x, 0, 0],$I$(7).new3$F$F$F);
this.pt2=(function(a,f){return f.apply(null,a)})([0, pt.y == 0  ? 1 : 1 / pt.y, 0],$I$(7).new3$F$F$F);
this.pt3=(function(a,f){return f.apply(null,a)})([0, 0, pt.z == 0  ? 1 : 1 / pt.z],$I$(7).new3$F$F$F);
if (pt.x == 0  && pt.y == 0   && pt.z == 0  ) {
return null;
} else if (pt.x == 0  && pt.y == 0  ) {
this.pt1.set$F$F$F(1, 0, this.pt3.z);
this.pt2.set$F$F$F(0, 1, this.pt3.z);
} else if (pt.y == 0  && pt.z == 0  ) {
this.pt2.set$F$F$F(this.pt1.x, 0, 1);
this.pt3.set$F$F$F(this.pt1.x, 1, 0);
} else if (pt.z == 0  && pt.x == 0  ) {
this.pt3.set$F$F$F(0, this.pt2.y, 1);
this.pt1.set$F$F$F(1, this.pt2.y, 0);
} else if (pt.x == 0 ) {
this.pt1.set$F$F$F(1, this.pt2.y, 0);
} else if (pt.y == 0 ) {
this.pt2.set$F$F$F(0, 1, this.pt3.z);
} else if (pt.z == 0 ) {
this.pt3.set$F$F$F(this.pt1.x, 0, 1);
}this.vwr.toCartesian$javajs_util_T3$Z(this.pt1, false);
this.vwr.toCartesian$javajs_util_T3$Z(this.pt2, false);
this.vwr.toCartesian$javajs_util_T3$Z(this.pt3, false);
return (function(a,f){return f.apply(null,a)})([this.pt1, this.pt2, this.pt3, Clazz.new_($I$(8,1)), Clazz.new_($I$(8,1)), Clazz.new_($I$(9,1))],$I$(10).getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4);
});

Clazz.newMeth(C$, 'getPointOrPlane$I$Z$Z$Z$Z$I$I$Z', function (index, integerOnly, allowFractional, doConvert, implicitFractional, minDim, maxDim, throwE) {
var coord=Clazz.array(Float.TYPE, [6]);
var code555=Clazz.array(Integer.TYPE, [6]);
var useCell555P4=false;
var n=0;
var isOK=true;
try {
this.coordinatesAreFractional=implicitFractional;
if (this.tokAt$I(index) == 8) {
if (minDim <= 3 && maxDim >= 3 ) return this.getToken$I(index).value;
isOK=false;
return null;
}if (this.tokAt$I(index) == 9) {
if (minDim <= 4 && maxDim >= 4 ) return this.getToken$I(index).value;
isOK=false;
return null;
}var multiplier=1;
 out : for (var i=index; i < this.st.length; i++) {
switch (this.getToken$I(i).tok) {
case 1073742332:
case 268435504:
case 268435552:
case 268435584:
break;
case 1073742338:
break out;
case 268435616:
multiplier=-1;
break;
case 1073742363:
if (n == 6) {
isOK=false;
return null;
}coord[n++]=this.theToken.intValue;
multiplier=-1;
break;
case 2:
case 1073742362:
if (n == 6) this.invArg$();
if (implicitFractional && this.theToken.intValue > 999999999 ) useCell555P4=true;
code555[n]=this.theToken.intValue;
coord[n++]=this.theToken.intValue * multiplier;
multiplier=1;
break;
case 268435632:
case 1073742358:
if (!allowFractional) {
isOK=false;
return null;
}if (this.theTok == 268435632) this.getToken$I(++i);
n--;
if (n < 0 || integerOnly ) {
isOK=false;
return null;
}if (Clazz.instanceOf(this.theToken.value, "java.lang.Integer") || this.theTok == 2 ) {
coord[n++] /= (this.theToken.intValue == 2147483647 ? (this.theToken.value).intValue$() : this.theToken.intValue);
} else if (Clazz.instanceOf(this.theToken.value, "java.lang.Float")) {
coord[n++] /= (this.theToken.value).floatValue$();
}this.coordinatesAreFractional=true;
break;
case 1073742357:
case 1073741824:
coord[n++]=NaN;
break;
case 3:
case 1073742359:
if (integerOnly) {
isOK=false;
return null;
}if (n == 6) {
isOK=false;
return null;
}coord[n++]=(this.theToken.value).floatValue$();
break;
default:
isOK=false;
return null;
}
}
if (n < minDim || n > maxDim ) {
isOK=false;
return null;
}if (n == 3) {
if (useCell555P4) {
return (function(a,f){return f.apply(null,a)})([coord[0], coord[1], coord[2], (code555[0] % 1000) * 1000 + (code555[1] % 1000) + 1000000],$I$(9).new4$F$F$F$F);
}var pt=$I$(7).new3$F$F$F(coord[0], coord[1], coord[2]);
if (this.coordinatesAreFractional && doConvert ) {
this.fractionalPoint=$I$(7).newP$javajs_util_T3(pt);
if (!this.chk) this.vwr.toCartesian$javajs_util_T3$Z(pt, false);
}return pt;
}if (n == 4) {
if (this.coordinatesAreFractional) {
isOK=false;
return null;
}var plane=$I$(9).new4$F$F$F$F(coord[0], coord[1], coord[2], coord[3]);
return plane;
}return coord;
} finally {
if (!isOK && throwE ) this.invArg$();
}
});

Clazz.newMeth(C$, 'isPoint3f$I', function (i) {
var itok=this.tokAt$I(i);
if (itok == 0) return false;
var isOK;
if ((isOK=(itok == 8)) || itok == 9  || this.isFloatParameter$I(i + 1) && this.isFloatParameter$I(i + 2) && this.isFloatParameter$I(i + 3) && this.isFloatParameter$I(i + 4)   ) return isOK;
this.ignoreError=true;
var t=this.iToken;
isOK=true;
try {
if (this.getPoint3f$I$Z$Z(i, true, false) == null ) isOK=false;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
isOK=false;
} else {
throw e;
}
}
this.ignoreError=false;
this.iToken=t;
return isOK;
});

Clazz.newMeth(C$, 'getPoint3f$I$Z$Z', function (i, allowFractional, throwE) {
return this.getPointOrPlane$I$Z$Z$Z$Z$I$I$Z(i, false, allowFractional, true, false, 3, 3, throwE);
});

Clazz.newMeth(C$, 'getPoint4f$I', function (i) {
return this.getPointOrPlane$I$Z$Z$Z$Z$I$I$Z(i, false, false, false, false, 4, 4, true);
});

Clazz.newMeth(C$, 'xypParameter$I', function (index) {
var tok=this.tokAt$I(index);
if (tok == 1073742195) tok=this.tokAt$I(++index);
if (tok != 268435520 || !this.isFloatParameter$I(++index) ) return null;
var pt=Clazz.new_($I$(7,1));
pt.x=this.floatParameter$I(index);
if (this.tokAt$I(++index) == 268435504) index++;
if (!this.isFloatParameter$I(index)) return null;
pt.y=this.floatParameter$I(index);
var isPercent=(this.tokAt$I(++index) == 268435634);
if (isPercent) ++index;
if (this.tokAt$I(index) != 268435521) return null;
this.iToken=index;
pt.z=(isPercent ? -1 : 1) * 3.4028235E38;
return pt;
});

Clazz.newMeth(C$, 'xyzpParameter$I', function (index) {
var tok=this.tokAt$I(index);
if (tok == 1073742195) tok=this.tokAt$I(++index);
if (tok != 268435520 || !this.isFloatParameter$I(++index) ) return null;
var pt=Clazz.new_($I$(9,1));
pt.x=this.floatParameter$I(index);
if (this.tokAt$I(++index) == 268435504) index++;
if (!this.isFloatParameter$I(index)) return null;
pt.y=this.floatParameter$I(index);
if (this.tokAt$I(++index) == 268435504) index++;
if (!this.isFloatParameter$I(index)) return null;
pt.z=this.floatParameter$I(index);
var isPercent=(this.tokAt$I(++index) == 268435634);
if (isPercent) ++index;
if (this.tokAt$I(index) != 268435521) return null;
this.iToken=index;
pt.w=(isPercent ? -1 : 1) * 3.4028235E38;
return pt;
});

Clazz.newMeth(C$, 'optParameterAsString$I', function (i) {
return (i >= this.slen ? "" : this.paramAsStr$I(i));
});

Clazz.newMeth(C$, 'intParameter$I', function (index) {
if (this.checkToken$I(index)) if (this.getToken$I(index).tok == 2) return this.theToken.intValue;
this.error$I(20);
return 0;
});

Clazz.newMeth(C$, 'isFloatParameter$I', function (index) {
switch (this.tokAt$I(index)) {
case 2:
case 3:
return true;
}
return false;
});

Clazz.newMeth(C$, 'floatParameter$I', function (index) {
if (this.checkToken$I(index)) {
this.getToken$I(index);
switch (this.theTok) {
case 1073742363:
return -this.theToken.intValue;
case 1073742362:
case 2:
return this.theToken.intValue;
case 1073742359:
case 3:
return (this.theToken.value).floatValue$();
}
}this.error$I(34);
return 0;
});

Clazz.newMeth(C$, 'getPointArray$I$I$Z', function (i, nPoints, allowNull) {
if (nPoints == 2147483647) nPoints=-1;
var points=(nPoints < 0 ? null : Clazz.array($I$(7), [nPoints]));
var vp=(nPoints < 0 ? Clazz.new_($I$(5,1)) : null);
var tok=(i < 0 ? 7 : this.getToken$I(i++).tok);
switch (tok) {
case 7:
var v=(this.theToken).getList$();
if (nPoints >= 0 && v.size$() != nPoints ) this.invArg$();
nPoints=v.size$();
if (points == null ) points=Clazz.array($I$(7), [nPoints]);
for (var j=0; j < nPoints; j++) if ((points[j]=(function(a,f){return f.apply(null,a)})([v.get$I(j)],$I$(1).ptValue$org_jmol_script_SV)) == null  && !allowNull ) this.invArg$();

return points;
case 1073742195:
tok=this.tokAt$I(i++);
break;
}
if (tok != 268435520) this.invArg$();
var n=0;
while (tok != 268435521 && tok != 0 ){
tok=this.getToken$I(i).tok;
switch (tok) {
case 0:
case 268435521:
break;
case 268435504:
i++;
break;
default:
if (nPoints >= 0 && n == nPoints ) {
tok=0;
break;
}var pt=this.centerParameter$I$OA(i, null);
if (points == null ) vp.addLast$O(pt);
 else points[n]=pt;
n++;
i=this.iToken + 1;
}
}
if (tok != 268435521) this.invArg$();
if (points == null ) points=vp.toArray$OA(Clazz.array($I$(7), [vp.size$()]));
if (nPoints > 0 && points[nPoints - 1] == null  ) this.invArg$();
return points;
});

Clazz.newMeth(C$, 'listParameter$I$I$I', function (i, nMin, nMax) {
return this.listParameter4$I$I$I$Z(i, nMin, nMax, false);
});

Clazz.newMeth(C$, 'listParameter4$I$I$I$Z', function (i, nMin, nMax, allowString) {
var v=Clazz.new_($I$(5,1));
var tok=this.tokAt$I(i);
if (tok == 1073742195) tok=this.tokAt$I(++i);
var haveBrace=(tok == 1073742332);
var haveSquare=(tok == 268435520);
if (haveBrace || haveSquare ) i++;
var n=0;
while (n < nMax){
tok=this.tokAt$I(i);
if (haveBrace && tok == 1073742338  || haveSquare && tok == 268435521  ) break;
switch (tok) {
case 268435504:
case 268435616:
case 1073742332:
case 1073742338:
break;
case 4:
if (allowString) v.addLast$O(this.stringParameter$I(i));
break;
case 9:
var pt4=this.getPoint4f$I(i);
v.addLast$O(Float.valueOf$F(pt4.x));
v.addLast$O(Float.valueOf$F(pt4.y));
v.addLast$O(Float.valueOf$F(pt4.z));
v.addLast$O(Float.valueOf$F(pt4.w));
n+=4;
break;
default:
if (this.isCenterParameter$I(i)) {
var pt=this.centerParameter$I$OA(i, null);
i=this.iToken;
v.addLast$O(Float.valueOf$F(pt.x));
v.addLast$O(Float.valueOf$F(pt.y));
v.addLast$O(Float.valueOf$F(pt.z));
n+=3;
break;
}v.addLast$O(Float.valueOf$F(this.floatParameter$I(i)));
n++;
}
i+=(n == nMax && haveSquare  && this.tokAt$I(i + 1) == 1073742338  ? 2 : 1);
}
if (haveBrace && this.tokAt$I(i++) != 1073742338  || haveSquare && this.tokAt$I(i++) != 268435521   || n < nMin  || n > nMax ) this.invArg$();
this.iToken=i - 1;
return v;
});

Clazz.newMeth(C$, 'floatParameterSet$I$I$I', function (i, nMin, nMax) {
var v=null;
var fparams=null;
var n=0;
var s=null;
this.iToken=i;
switch (this.tokAt$I(i)) {
case 4:
s=$I$(1).sValue$org_jmol_script_T(this.st[i]);
s=$I$(4).replaceWithCharacter$S$S$C(s, "{},[]\"\'", " ");
fparams=$I$(4).parseFloatArray$S(s);
n=fparams.length;
break;
case 7:
fparams=$I$(1).flistValue$org_jmol_script_T$I(this.st[i], 0);
n=fparams.length;
break;
default:
v=this.listParameter$I$I$I(i, nMin, nMax);
n=v.size$();
}
if (n < nMin || n > nMax ) this.invArg$();
if (fparams == null ) {
fparams=Clazz.array(Float.TYPE, [n]);
for (var j=0; j < n; j++) fparams[j]=(v.get$I(j)).floatValue$();

}return fparams;
});

Clazz.newMeth(C$, 'isArrayParameter$I', function (i) {
switch (this.tokAt$I(i)) {
case 7:
case 11:
case 12:
case 1073742195:
case 268435520:
return true;
}
return false;
});

Clazz.newMeth(C$, 'getQuaternionParameter$I$javajs_util_BS$Z', function (i, bsAtoms, divideByCurrent) {
switch (this.tokAt$I(i)) {
case 7:
var sv=(this.getToken$I(i)).getList$();
var p4=null;
if (sv.size$() == 0 || (p4=(function(a,f){return f.apply(null,a)})([sv.get$I(0)],$I$(1).pt4Value$org_jmol_script_SV)) == null  ) this.invArg$();
return $I$(12).newP4$javajs_util_P4(p4);
case 1073741864:
return (this.chk ? null : this.vwr.getOrientationText$I$S$javajs_util_BS(1073741864, (divideByCurrent ? "best" : ""), bsAtoms));
default:
return (function(a,f){return f.apply(null,a)})([this.getPoint4f$I(i)],$I$(12).newP4$javajs_util_P4);
}
});

Clazz.newMeth(C$, 'checkLast$I', function (i) {
return this.checkLength$I(i + 1) - 1;
});

Clazz.newMeth(C$, 'checkLength$I', function (length) {
if (length >= 0) return this.checkLengthErrorPt$I$I(length, 0);
if (this.slen > -length) {
this.iToken=-length;
this.bad$();
}return this.slen;
});

Clazz.newMeth(C$, 'checkLengthErrorPt$I$I', function (length, errorPt) {
if (this.slen != length) {
this.iToken=errorPt > 0 ? errorPt : this.slen;
if (errorPt > 0) this.invArg$();
 else this.bad$();
}return this.slen;
});

Clazz.newMeth(C$, 'checkLength23$', function () {
this.iToken=this.slen;
if (this.slen != 2 && this.slen != 3 ) this.bad$();
return this.slen;
});

Clazz.newMeth(C$, 'checkLength34$', function () {
this.iToken=this.slen;
if (this.slen != 3 && this.slen != 4 ) this.bad$();
return this.slen;
});

Clazz.newMeth(C$, 'modelNumberParameter$I', function (index) {
var iFrame=0;
var useModelNumber=false;
switch (this.tokAt$I(index)) {
case 2:
useModelNumber=true;
case 3:
iFrame=this.getToken$I(index).intValue;
break;
case 4:
iFrame=C$.getFloatEncodedInt$S(this.stringParameter$I(index));
break;
default:
this.invArg$();
}
return this.vwr.ms.getModelNumberIndex$I$Z$Z(iFrame, useModelNumber, true);
});

Clazz.newMeth(C$, 'getMadParameter$', function () {
var mad=1;
switch (this.getToken$I(1).tok) {
case 1073742072:
(this).restrictSelected$Z$Z(false, false);
case 1073742335:
break;
case 1073742334:
mad=0;
break;
case 2:
var radiusRasMol=this.intParameterRange$I$I$I(1, 0, 750);
mad=radiusRasMol * 4 * 2 ;
break;
case 3:
var f=this.floatParameterRange$I$F$F(1, -3, 3);
mad=(Float.isNaN$F(f) ? 2147483647 : (Math.floor(f * 1000 * 2 )|0));
if (mad < 0) {
(this).restrictSelected$Z$Z(false, false);
mad=-mad;
}break;
default:
this.error$I(6);
}
return mad;
});

Clazz.newMeth(C$, 'intParameterRange$I$I$I', function (i, min, max) {
var val=this.intParameter$I(i);
if (val < min || val > max ) {
this.integerOutOfRange$I$I(min, max);
return 2147483647;
}return val;
});

Clazz.newMeth(C$, 'floatParameterRange$I$F$F', function (i, min, max) {
var val=this.floatParameter$I(i);
if (val < min  || val > max  ) {
this.numberOutOfRange$F$F(min, max);
return NaN;
}return val;
});

Clazz.newMeth(C$, 'getPointVector$org_jmol_script_T$I', function (t, i) {
switch (t.tok) {
case 10:
return this.vwr.ms.getAtomPointVector$javajs_util_BS(t.value);
case 7:
var data=Clazz.new_($I$(5,1));
var pt;
var pts=(t).getList$();
for (var j=0; j < pts.size$(); j++) if ((pt=(function(a,f){return f.apply(null,a)})([pts.get$I(j)],$I$(1).ptValue$org_jmol_script_SV)) != null ) data.addLast$O(pt);
 else return null;

return data;
}
if (i > 0) return this.vwr.ms.getAtomPointVector$javajs_util_BS((this).atomExpressionAt$I(i));
return null;
});

Clazz.newMeth(C$, 'getFloatEncodedInt$S', function (strDecimal) {
var pt=strDecimal.indexOf$S(".");
if (pt < 1 || strDecimal.charAt$I(0) == "-"  || strDecimal.endsWith$S(".")  || strDecimal.contains$CharSequence(".0") ) return 2147483647;
var i=0;
var j=0;
if (pt > 0) {
try {
i=Integer.parseInt$S(strDecimal.substring$I$I(0, pt));
if (i < 0) i=-i;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
i=-1;
} else {
throw e;
}
}
}if (pt < strDecimal.length$() - 1) try {
j=Integer.parseInt$S(strDecimal.substring$I(pt + 1));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
i=i * 1000000 + j;
return (i < 0 ? 2147483647 : i);
}, 1);

Clazz.newMeth(C$, 'getPartialBondOrderFromFloatEncodedInt$I', function (bondOrderInteger) {
return ((((bondOrderInteger/1000000|0)) % 7) << 5) + ((bondOrderInteger % 1000000) & 31);
}, 1);

Clazz.newMeth(C$, 'getBondOrderFromString$S', function (s) {
return (s.indexOf$I(" ") < 0 ? $I$(13).getBondOrderFromString$S(s) : s.toLowerCase$().indexOf$S("partial ") == 0 ? C$.getPartialBondOrderFromString$S(s.substring$I(8).trim$()) : 131071);
}, 1);

Clazz.newMeth(C$, 'getPartialBondOrderFromString$S', function (s) {
return C$.getPartialBondOrderFromFloatEncodedInt$I(C$.getFloatEncodedInt$S(s));
}, 1);

Clazz.newMeth(C$, 'isColorParam$I', function (i) {
var tok=this.tokAt$I(i);
return tok != 0 && (tok == 570425378 || tok == 1073742195  || tok == 268435520  || tok == 7  || tok == 8  || this.isPoint3f$I(i)  || (tok == 4 || $I$(14).tokAttr$I$I(tok, 1073741824) ) && $I$(15).getArgbFromString$S(this.st[i].value) != 0  ) ;
});

Clazz.newMeth(C$, 'getArgbParam$I', function (index) {
return this.getArgbParamOrNone$I$Z(index, false);
});

Clazz.newMeth(C$, 'getArgbParamLast$I$Z', function (index, allowNone) {
var icolor=this.getArgbParamOrNone$I$Z(index, allowNone);
this.checkLast$I(this.iToken);
return icolor;
});

Clazz.newMeth(C$, 'getArgbParamOrNone$I$Z', function (index, allowNone) {
var pt=null;
if (this.checkToken$I(index)) {
switch (this.getToken$I(index).tok) {
default:
if (!$I$(14).tokAttr$I$I(this.theTok, 1073741824)) break;
case 570425378:
case 4:
return (function(a,f){return f.apply(null,a)})([this.paramAsStr$I(index)],$I$(15).getArgbFromString$S);
case 1073742195:
return p$1.getColorTriad$I.apply(this, [index + 2]);
case 268435520:
return p$1.getColorTriad$I.apply(this, [++index]);
case 7:
var rgb=$I$(1).flistValue$org_jmol_script_T$I(this.theToken, 3);
if (rgb != null  && rgb.length != 3 ) pt=$I$(7).new3$F$F$F(rgb[0], rgb[1], rgb[2]);
break;
case 8:
pt=this.theToken.value;
break;
case 1073742332:
pt=this.getPoint3f$I$Z$Z(index, false, true);
break;
case 1073742333:
if (allowNone) return 0;
}
}if (pt == null ) this.error$I(8);
return $I$(15).colorPtToFFRGB$javajs_util_T3(pt);
});

Clazz.newMeth(C$, 'getColorTriad$I', function (i) {
var colors=Clazz.array(Float.TYPE, [3]);
var n=0;
var hex="";
this.getToken$I(i);
var pt=null;
var val=0;
 out : switch (this.theTok) {
case 2:
case 1073742362:
case 3:
for (; i < this.slen; i++) {
switch (this.getToken$I(i).tok) {
case 268435504:
continue;
case 1073741824:
if (n != 1 || colors[0] != 0  ) this.error$I(4);
hex="0" + this.paramAsStr$I(i);
break out;
case 3:
if (n > 2) this.error$I(4);
val=this.floatParameter$I(i);
break;
case 2:
if (n > 2) this.error$I(4);
val=this.theToken.intValue;
break;
case 1073742362:
if (n > 2) this.error$I(4);
val=(this.theToken.value).intValue$() % 256;
break;
case 268435521:
if (n != 3) this.error$I(4);
--i;
pt=$I$(7).new3$F$F$F(colors[0], colors[1], colors[2]);
break out;
default:
this.error$I(4);
}
colors[n++]=val;
}
this.error$I(4);
break;
case 8:
pt=this.theToken.value;
break;
case 1073741824:
hex=this.paramAsStr$I(i);
break;
default:
this.error$I(4);
}
if (this.getToken$I(++i).tok != 268435521) this.error$I(4);
if (pt != null ) return $I$(15).colorPtToFFRGB$javajs_util_T3(pt);
if ((n=$I$(15).getArgbFromString$S("[" + hex + "]" )) == 0) this.error$I(4);
return n;
}, p$1);

Clazz.newMeth(C$, 'tickParamAsStr$I$Z$Z$Z', function (index, allowUnitCell, allowScale, allowFirst) {
this.iToken=index - 1;
if (this.tokAt$I(index) != 1073742164) return null;
var tickInfo;
var str=" ";
switch (this.tokAt$I(index + 1)) {
case 1111492629:
case 1111492630:
case 1111492631:
str=this.paramAsStr$I(++index).toLowerCase$();
break;
case 1073741824:
this.invArg$();
}
if (this.tokAt$I(++index) == 1073742333) {
tickInfo=Clazz.new_($I$(16,1).c$$javajs_util_P3,[null]);
tickInfo.type=str;
this.iToken=index;
return tickInfo;
}tickInfo=Clazz.new_([this.getPointOrPlane$I$Z$Z$Z$Z$I$I$Z(index, false, true, false, false, 3, 3, true)],$I$(16,1).c$$javajs_util_P3);
if (this.coordinatesAreFractional || this.tokAt$I(this.iToken + 1) == 1814695966 ) {
tickInfo.scale=$I$(7).new3$F$F$F(NaN, NaN, NaN);
allowScale=false;
}if (this.tokAt$I(this.iToken + 1) == 1814695966) this.iToken++;
tickInfo.type=str;
if (this.tokAt$I(this.iToken + 1) == 1287653388) tickInfo.tickLabelFormats=this.stringParameterSet$I(this.iToken + 2);
if (!allowScale) return tickInfo;
if (this.tokAt$I(this.iToken + 1) == 1073742138) {
if (this.isFloatParameter$I(this.iToken + 2)) {
var f=this.floatParameter$I(this.iToken + 2);
tickInfo.scale=$I$(7).new3$F$F$F(f, f, f);
} else {
tickInfo.scale=this.getPoint3f$I$Z$Z(this.iToken + 2, true, true);
}}if (allowFirst) if (this.tokAt$I(this.iToken + 1) == 1073741942) tickInfo.first=this.floatParameter$I(this.iToken + 2);
return tickInfo;
});

Clazz.newMeth(C$, 'setBooleanProperty$S$Z', function (key, value) {
if (!this.chk) this.vwr.setBooleanProperty$S$Z(key, value);
});

Clazz.newMeth(C$, 'setIntProperty$S$I', function (key, value) {
if (!this.chk) this.vwr.setIntProperty$S$I(key, value);
return true;
});

Clazz.newMeth(C$, 'setFloatProperty$S$F', function (key, value) {
if (!this.chk) this.vwr.setFloatProperty$S$F(key, value);
return true;
});

Clazz.newMeth(C$, 'setStringProperty$S$S', function (key, value) {
if (!this.chk) this.vwr.setStringProperty$S$S(key, value);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:18 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
