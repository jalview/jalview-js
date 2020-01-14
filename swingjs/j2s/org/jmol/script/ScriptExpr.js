(function(){var P$=Clazz.newPackage("org.jmol.script"),p$1={},I$=[[0,'org.jmol.api.Interface','org.jmol.script.SV','org.jmol.script.ScriptMathProcessor','org.jmol.script.T','java.util.Hashtable','javajs.util.BS','javajs.util.PT','javajs.util.Lst','Boolean','org.jmol.util.BSUtil','javajs.util.CU','org.jmol.util.Escape','org.jmol.modelset.ModelSet','javajs.util.P3','org.jmol.modelset.BondSet','javajs.util.Measure','javajs.util.SB','org.jmol.modelset.Group','org.jmol.util.Elements']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ScriptExpr", null, 'org.jmol.script.ScriptParam');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.debugHigh=false;
this.cmdExt=null;
this.isoExt=null;
this.mathExt=null;
this.smilesExt=null;
this.tempStatement=null;
this.ptTemp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCmdExt$', function () {
return (this.cmdExt == null  ? this.cmdExt=(p$1.getExt$S.apply(this, ["Cmd"])).init$O(this) : this.cmdExt);
});

Clazz.newMeth(C$, 'getIsoExt$', function () {
return (this.isoExt == null  ? this.isoExt=(p$1.getExt$S.apply(this, ["Iso"])).init$O(this) : this.isoExt);
});

Clazz.newMeth(C$, 'getMathExt$', function () {
return (this.mathExt == null  ? (this.mathExt=p$1.getExt$S.apply(this, ["Math"])).init$O(this) : this.mathExt);
});

Clazz.newMeth(C$, 'getSmilesExt$', function () {
return (this.smilesExt == null  ? (this.smilesExt=p$1.getExt$S.apply(this, ["Smiles"])).init$O(this) : this.smilesExt);
});

Clazz.newMeth(C$, 'getExt$S', function (type) {
return $I$(1).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.scriptext." + type + "Ext" , this.vwr, "script");
}, p$1);

Clazz.newMeth(C$, 'parameterExpressionList$I$I$Z', function (pt, ptAtom, isArrayItem) {
return p$1.parameterExpression$I$I$S$Z$Z$I$Z$java_util_Map$S$Z.apply(this, [pt, -1, null, true, true, ptAtom, isArrayItem, null, null, false]);
});

Clazz.newMeth(C$, 'parameterExpressionString$I$I', function (pt, ptMax) {
return p$1.parameterExpression$I$I$S$Z$Z$I$Z$java_util_Map$S$Z.apply(this, [pt, ptMax, "", true, false, -1, false, null, null, false]);
});

Clazz.newMeth(C$, 'parameterExpressionBoolean$I$I', function (pt, ptMax) {
return (p$1.parameterExpression$I$I$S$Z$Z$I$Z$java_util_Map$S$Z.apply(this, [pt, ptMax, null, true, false, -1, false, null, null, false])).booleanValue$();
});

Clazz.newMeth(C$, 'parameterExpressionToken$I', function (pt) {
var result=this.parameterExpressionList$I$I$Z(pt, -1, false);
return (result.size$() > 0 ? result.get$I(0) : $I$(2).newS$S(""));
});

Clazz.newMeth(C$, 'parameterExpressionSelect$java_util_Map$org_jmol_script_TA', function (h, where) {
this.st=where;
this.slen=this.st.length;
return (p$1.parameterExpression$I$I$S$Z$Z$I$Z$java_util_Map$S$Z.apply(this, [2, -2147483648, null, true, false, -1, false, h, null, false])).booleanValue$();
});

Clazz.newMeth(C$, 'parameterExpression$I$I$S$Z$Z$I$Z$java_util_Map$S$Z', function (pt, ptMax, key, ignoreComma, asVector, ptAtom, isArrayItem, localVars, localVar, isSpecialAssignment) {
var isImplicitAtomProperty=(localVar != null );
var isWhere=(localVar == null  && localVars != null  );
var isOneExpressionOnly=(pt < 0);
var returnBoolean=(!asVector && key == null  );
var returnString=(!asVector && key != null   && key.length$() == 0 );
if (isOneExpressionOnly) pt=-pt;
var allContext=(localVars == null  || ptMax != -2147483648 );
if (ptMax < pt) ptMax=this.slen;
var ptEq=(isSpecialAssignment ? 0 : 1);
var ptWithin=-1;
var rpn=Clazz.new_($I$(3).c$$org_jmol_script_ScriptExpr$Z$Z$Z$Z$Z$S,[this, isSpecialAssignment, isArrayItem, asVector, false, false, key]);
var v;
var res;
var nSquare=0;
var nParen=0;
var topLevel=true;
 out : for (var i=pt; i < ptMax; i++) {
v=null;
var tok=this.getToken$I(i).tok;
if (isImplicitAtomProperty && this.tokAt$I(i + 1) != 1073742336 ) {
var token=(localVars != null  && localVars.containsKey$O(this.theToken.value)  ? null : p$1.getBitsetPropertySelector$I$I.apply(this, [i, 10]));
if (token != null ) {
rpn.addX$org_jmol_script_SV(localVars.get$O(localVar));
if (!rpn.addOpAllowMath$org_jmol_script_T$Z$I(token, (this.tokAt$I(i + 1) == 268435472), 0)) this.invArg$();
if ((token.intValue == 134320141 || token.intValue == 102436 ) && this.tokAt$I(this.iToken + 1) != 268435472 ) {
rpn.addOp$org_jmol_script_T($I$(4).tokenLeftParen);
rpn.addOp$org_jmol_script_T($I$(4).tokenRightParen);
}i=this.iToken;
continue;
}}switch (tok) {
case 268435521:
case 1073742338:
if (!ignoreComma && topLevel ) break out;
if (tok == 1073742338) this.invArg$();
if (isSpecialAssignment && nSquare == 1  && this.tokAt$I(i + 1) == 268435860 ) isSpecialAssignment=rpn.endAssignment$();
}
switch (tok) {
case 12290:
if ((tok=this.tokAt$I(++i)) == 1073742325) {
v=this.parameterExpressionToken$I(++i);
i=this.iToken;
} else if (tok == 2) {
v=this.vwr.ms.getAtoms$I$O(1094715393, Integer.valueOf$I(this.st[i].intValue));
break;
} else if (tok == 12290 && this.tokAt$I(i + 1) == 2 ) {
v=this.vwr.ms.getAtomsFromAtomNumberInFrame$I(this.st[++i].intValue);
break;
} else {
v=this.getParameter$S$I$Z($I$(2).sValue$org_jmol_script_T(this.st[i]), 1073742190, true);
}v=this.getParameter$S$I$Z((v).asString$(), 1073742190, true);
break;
case 134320649:
if (this.getToken$I(++i).tok != 268435472) this.invArg$();
if (localVars == null ) localVars=Clazz.new_($I$(5));
res=p$1.parameterExpression$I$I$S$Z$Z$I$Z$java_util_Map$S$Z.apply(this, [++i, -1, null, ignoreComma, false, -1, false, localVars, localVar, false]);
var TF=(res).booleanValue$();
var iT=this.iToken;
if (this.getToken$I(iT++).tok != 1073742339) this.invArg$();
this.parameterExpressionBoolean$I$I(iT, -1);
var iF=this.iToken;
if (this.tokAt$I(iF++) != 1073742339) this.invArg$();
p$1.parameterExpression$I$I$S$Z$Z$I$Z$java_util_Map$S$Z.apply(this, [-iF, -1, null, ignoreComma, false, 1, false, localVars, localVar, false]);
var iEnd=this.iToken;
if (this.tokAt$I(iEnd) != 268435473) this.invArg$();
v=p$1.parameterExpression$I$I$S$Z$Z$I$Z$java_util_Map$S$Z.apply(this, [TF ? iT : iF, TF ? iF : iEnd, "XXX", ignoreComma, false, 1, false, localVars, localVar, false]);
i=this.iToken=iEnd;
break;
case 134320648:
case 1275082245:
var isFunctionOfX=(pt > 0);
var isFor=(isFunctionOfX && tok == 134320648 );
var dummy;
if (isFunctionOfX) {
if (this.getToken$I(++i).tok != 268435472 || !$I$(4).tokAttr$I$I(this.getToken$I(++i).tok, 1073741824) ) this.invArg$();
dummy=this.paramAsStr$I(i);
if (this.getToken$I(++i).tok != 1073742339) this.invArg$();
} else {
dummy="_x";
}v=this.parameterExpressionToken$I(-(++i)).value;
if (!(Clazz.instanceOf(v, "javajs.util.BS"))) this.invArg$();
var bsAtoms=v;
i=this.iToken;
if (isFunctionOfX && this.getToken$I(i++).tok != 1073742339 ) this.invArg$();
var bsSelect=Clazz.new_($I$(6));
var bsX=Clazz.new_($I$(6));
var sout=(isFor ? Clazz.array(String, [bsAtoms.cardinality$()]) : null);
if (localVars == null ) localVars=Clazz.new_($I$(5));
bsX.set$I(0);
var t=$I$(2).newV$I$O(10, bsX);
t.index=0;
localVars.put$TK$TV(dummy, t.setName$S(dummy));
var pt2=-1;
if (isFunctionOfX) {
pt2=i - 1;
var np=0;
var tok2;
while (np >= 0 && ++pt2 < ptMax ){
if ((tok2=this.tokAt$I(pt2)) == 268435473) np--;
 else if (tok2 == 268435472) np++;
}
}var p=0;
var jlast=0;
var j=bsAtoms.nextSetBit$I(0);
if (j < 0 || this.chk ) {
this.iToken=pt2 - 1;
} else {
for (; j >= 0; j=bsAtoms.nextSetBit$I(j + 1)) {
if (jlast >= 0) bsX.clear$I(jlast);
jlast=j;
bsX.set$I(j);
t.index=j;
res=p$1.parameterExpression$I$I$S$Z$Z$I$Z$java_util_Map$S$Z.apply(this, [i, pt2, (isFor ? "XXX" : null), ignoreComma, isFor, j, false, localVars, isFunctionOfX ? null : dummy, false]);
if (isFor) {
if (res == null  || (res).size$() == 0 ) this.invArg$();
sout[p++]=((res).get$I(0)).asString$();
} else if ((res).booleanValue$()) {
bsSelect.set$I(j);
}}
}if (isFor) {
v=sout;
} else if (isFunctionOfX) {
v=bsSelect;
} else {
return this.listBS$javajs_util_BS(bsSelect);
}i=this.iToken + 1;
break;
case 1073742339:
break out;
case 2:
if (this.tokAt$I(this.iToken + 1) == 1073742336 && ((tok=this.tokAt$I(this.iToken + 2)) == 805306401 || tok == 268435633 ) ) {
this.theToken.value=Float.valueOf$F(this.theToken.intValue);
this.theToken.tok=3;
this.theToken.intValue=2147483647;
i++;
}case 3:
case 1073742362:
rpn.addXNum$org_jmol_script_T(this.theToken);
break;
case 134217750:
if (this.tokAt$I(this.iToken + 1) == 268435472) {
if (!rpn.addOpAllowMath$org_jmol_script_T$Z$I(this.theToken, true, 0)) this.invArg$();
break;
}case 1073742335:
case 1073742334:
case 4:
case 8:
case 9:
case 11:
case 12:
case 7:
case 10:
case 6:
case 14:
rpn.addX$org_jmol_script_SV($I$(2).newT$org_jmol_script_T(this.theToken));
break;
case 1073742330:
if (this.tokAt$I(i + 2) == 1073742336 && this.tokAt$I(i + 3) == 1275072526 ) {
rpn.addXStr$S("$" + this.paramAsStr$I(++i));
} else {
this.ignoreError=true;
var ptc;
try {
ptc=this.centerParameter$I$OA(i, null);
rpn.addX$org_jmol_script_SV($I$(2).newV$I$O(8, ptc));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
rpn.addXStr$S("");
} else {
throw e;
}
}
this.ignoreError=false;
i=this.iToken;
}break;
case 1073742332:
if (this.tokAt$I(i + 1) == 4) {
if (this.tokAt$I(i + 2) == 1073742338) {
v=(this.chk ? Clazz.new_($I$(6)) : this.getAtomBitSet$O(this.stringParameter$I(i + 1)));
i+=2;
break;
}v=this.getAssocArray$I(i);
} else {
v=this.getPointOrPlane$I$Z$Z$Z$Z$I$I$Z(i, false, true, true, false, 3, 4, true);
}i=this.iToken;
break;
case 1073742325:
if (this.tokAt$I(i + 1) == 1073742326) {
v=Clazz.new_($I$(5));
i++;
break;
} else if (this.tokAt$I(i + 1) == 1073742327 && this.tokAt$I(i + 2) == 1073742326 ) {
tok=1073742327;
this.iToken+=2;
}case 1073742327:
if (tok == 1073742327) v=this.vwr.getAllAtoms$();
 else v=this.atomExpression$org_jmol_script_TA$I$I$Z$Z$OA$Z(this.st, i, 0, true, true, null, true);
i=this.iToken;
if (nParen == 0 && isOneExpressionOnly ) {
this.iToken++;
return this.listBS$javajs_util_BS(v);
}break;
case 1073742195:
rpn.addOp$org_jmol_script_T(this.theToken);
continue;
case 1073742326:
i++;
break out;
case 268435504:
if (!ignoreComma && topLevel ) break out;
if (!rpn.addOp$org_jmol_script_T(this.theToken)) this.invArg$();
break;
case 1073742337:
case 1073742336:
if (isSpecialAssignment && topLevel && this.tokAt$I(i + 2) == 268435860  ) isSpecialAssignment=rpn.endAssignment$();
if (ptEq == 0 && topLevel ) {
switch (this.tokAt$I(i + 1)) {
case 0:
break;
case 1275335685:
case 1275334681:
case 1140850694:
case 1140850706:
case 1140850696:
case 1275068418:
if (tok == 1073742336) break;
default:
rpn.addOp$org_jmol_script_T($I$(4).tokenArrayOpen);
rpn.addXStr$S(this.optParameterAsString$I(++i));
rpn.addOp$org_jmol_script_T($I$(4).tokenArrayClose);
continue;
}
}var $var=p$1.getBitsetPropertySelector$I$I.apply(this, [i + 1, rpn.getXTok$()]);
var isUserFunction=($var.intValue == 134320141);
var allowMathFunc=true;
var tok2=this.tokAt$I(this.iToken + 2);
if (this.tokAt$I(this.iToken + 1) == 1073742336) {
switch (tok2) {
case 1073742327:
tok2=480;
if (this.tokAt$I(this.iToken + 3) == 1073742336 && this.tokAt$I(this.iToken + 4) == 1275068420 ) tok2=224;
case 32:
case 64:
case 192:
case 128:
case 160:
case 96:
allowMathFunc=(isUserFunction || $var.intValue == 1275069443  || tok2 == 480  || tok2 == 224 );
$var.intValue|=tok2;
this.getToken$I(this.iToken + 2);
}
}var tokNext=this.tokAt$I(this.iToken + 1);
allowMathFunc&=(tokNext == 268435472 || isUserFunction );
if (!rpn.addOpAllowMath$org_jmol_script_T$Z$I($var, allowMathFunc, isUserFunction ? tokNext : 0)) this.invArg$();
i=this.iToken;
if ($var.intValue == 134320141 && tokNext != 268435472 ) {
rpn.addOp$org_jmol_script_T($I$(4).tokenLeftParen);
rpn.addOp$org_jmol_script_T($I$(4).tokenRightParen);
}break;
case 1086326786:
case 1086326785:
case 1073742328:
case 1678381065:
case 1086326788:
case 1073742329:
case 1111490587:
case 1086326789:
case 1086324742:
case 1094717454:
case 1094713360:
case 1073742128:
case 134218756:
case 1086324744:
case 1094713366:
case 134218757:
case 1237320707:
case 1639976963:
if (!isWhere && i == ptWithin  && this.tokAt$I(i + 1) == 268435504 ) {
rpn.addX$org_jmol_script_SV($I$(2).newT$org_jmol_script_T(this.theToken));
break;
}default:
if (this.theTok == 268435520 && this.tokAt$I(i + 2) == 268435490 ) {
v=this.getAssocArray$I(i);
i=this.iToken;
break;
}if ($I$(4).tokAttr$I$I(this.theTok, 268435456) || $I$(4).tokAttr$I$I(this.theTok, 134217728) && this.tokAt$I(this.iToken + 1) == 268435472  ) {
if (!rpn.addOp$org_jmol_script_T(this.theToken)) {
if (ptAtom >= 0) {
break out;
}this.invArg$();
}switch (this.theTok) {
case 134217759:
ptWithin=i + 2;
break;
case 268435860:
if (topLevel) ptEq=i;
break;
case 268435472:
nParen++;
topLevel=false;
break;
case 268435473:
if (--nParen <= 0 && nSquare == 0 ) {
if (isOneExpressionOnly) {
this.iToken++;
break out;
}topLevel=true;
}break;
case 268435520:
nSquare++;
topLevel=false;
break;
case 268435521:
if (--nSquare == 0 && nParen == 0 ) {
if (isOneExpressionOnly) {
this.iToken++;
break out;
}topLevel=true;
}break;
}
} else {
var name=this.paramAsStr$I(i).toLowerCase$();
var haveParens=(this.tokAt$I(i + 1) == 268435472);
if (!haveParens) if (this.chk) {
v=name;
} else if (localVars == null  || (v=$I$(7).getMapValueNoCase$java_util_Map$S(localVars, name)) == null  && allContext  ) {
if (name.startsWith$S("_")) {
v=(name.equals$O("_") ? this.vwr.ms.getAuxiliaryInfo$javajs_util_BS(null) : name.equals$O("_m") ? this.vwr.getCurrentModelAuxInfo$() : null);
}if (v == null ) v=this.getContextVariableAsVariable$S$Z(name, false);
 else if (ptEq == 0) this.invArg$();
}if (v == null ) {
if ($I$(4).tokAttr$I$I(this.theTok, 1073741824) && this.vwr.isFunction$S(name) ) {
if (!rpn.addOp$org_jmol_script_T($I$(2).newV$I$O(134320141, this.theToken.value))) this.invArg$();
if (!haveParens) {
rpn.addOp$org_jmol_script_T($I$(4).tokenLeftParen);
rpn.addOp$org_jmol_script_T($I$(4).tokenRightParen);
}} else {
$var=this.vwr.g.getAndSetNewVariable$S$Z(name, false);
switch ($var.tok) {
case 2:
case 3:
if (this.noCopy$I$I(i, -1) || this.noCopy$I$I(i, 1) ) break;
rpn.addXCopy$org_jmol_script_SV($var);
continue;
default:
}
rpn.addX$org_jmol_script_SV($var);
}}}}
if (v != null ) {
if (Clazz.instanceOf(v, "javajs.util.BS")) rpn.addXBs$javajs_util_BS(v);
 else rpn.addXObj$O(v);
}}
var result=rpn.getResult$();
if (result == null ) {
if (!this.chk) rpn.dumpStacks$S("null result");
this.error$I(13);
}if (result.tok == 135198) {
if (isSpecialAssignment && ptEq == 0 ) {
var rv=Clazz.new_($I$(8));
rv.addLast$TV(Clazz.new_($I$(2)));
return rv;
}return result.value;
}if (this.chk) {
if (returnBoolean) return $I$(9).TRUE;
if (returnString) return "";
} else {
if (returnBoolean) return $I$(9).valueOf$Z(result.asBoolean$());
if (returnString) {
if (result.tok == 4) result.intValue=2147483647;
return result.asString$();
}}switch (result.tok) {
case 1073742335:
case 1073742334:
return $I$(9).valueOf$Z(result.intValue == 1);
case 2:
return Integer.valueOf$I(result.intValue);
case 10:
case 3:
case 4:
case 8:
default:
return result.value;
}
}, p$1);

Clazz.newMeth(C$, 'atomExpressionAt$I', function (index) {
if (!this.checkToken$I(index)) {
this.iToken=index;
this.bad$();
}return this.atomExpression$org_jmol_script_TA$I$I$Z$Z$OA$Z(this.st, index, 0, true, false, null, true);
});

Clazz.newMeth(C$, 'atomExpression$org_jmol_script_TA$I$I$Z$Z$OA$Z', function (code, pcStart, pcStop, allowRefresh, allowUnderflow, ret, andNotDeleted) {
this.isBondSet=false;
if (code !== this.st ) {
this.tempStatement=this.st;
this.st=code;
}var rpn=Clazz.new_($I$(3).c$$org_jmol_script_ScriptExpr$Z$Z$Z$Z$Z$S,[this, false, false, false, ret == null , allowUnderflow, null]);
var val;
var refreshed=false;
this.iToken=1000;
var ignoreSubset=(pcStart < 0);
var isInMath=false;
var bs;
var nExpress=0;
var ac=this.vwr.ms.ac;
var ptWithin=-10;
if (ignoreSubset) pcStart=-pcStart;
ignoreSubset|=this.chk;
if (pcStop == 0 && code.length > pcStart ) pcStop=pcStart + 1;
 expression_loop : for (var pc=pcStart; pc < pcStop; ++pc) {
this.iToken=pc;
var instruction=code[pc];
if (instruction == null ) break;
var value=instruction.value;
switch (instruction.tok) {
case 1073742325:
pcStart=pc;
pcStop=code.length;
nExpress++;
break;
case 1073742326:
nExpress--;
if (nExpress > 0) continue;
break expression_loop;
case 1073742332:
if (this.isPoint3f$I(pc)) {
var pt=this.getPoint3f$I$Z$Z(pc, true, true);
if (pt != null ) {
rpn.addXPt$javajs_util_P3(pt);
pc=this.iToken;
break;
}}break;
case 1073742338:
if (pc > 0 && code[pc - 1].tok == 1073742332 ) rpn.addXBs$javajs_util_BS(Clazz.new_($I$(6)));
break;
case 268435520:
isInMath=true;
rpn.addOp$org_jmol_script_T(instruction);
break;
case 268435521:
isInMath=false;
rpn.addOp$org_jmol_script_T(instruction);
break;
case 12290:
rpn.addXBs$javajs_util_BS(this.getAtomBitSet$O(value));
break;
case 7:
bs=$I$(2).getBitSet$org_jmol_script_SV$Z(instruction, false);
if (bs != null ) {
rpn.addXBs$javajs_util_BS(bs);
break;
}case 6:
rpn.addXBs$javajs_util_BS(this.vwr.ms.getAtoms$I$O(1086324744, (instruction).asString$()));
break;
case 134219265:
rpn.addX$org_jmol_script_SV($I$(2).newT$org_jmol_script_T(instruction));
rpn.addX$org_jmol_script_SV($I$(2).newV$I$O(9, this.hklParameter$I(pc + 2)));
pc=this.iToken;
break;
case 134217750:
rpn.addX$org_jmol_script_SV($I$(2).newT$org_jmol_script_T(instruction));
rpn.addX$org_jmol_script_SV($I$(2).newV$I$O(9, this.planeParameter$I(pc + 2)));
pc=this.iToken;
break;
case 1073742329:
rpn.addX$org_jmol_script_SV($I$(2).newT$org_jmol_script_T(instruction));
rpn.addXPt$javajs_util_P3(this.getPoint3f$I$Z$Z(pc + 2, true, true));
pc=this.iToken;
break;
case 4:
var s=value;
if (s.indexOf$S("({") == 0) {
bs=$I$(6).unescape$S(s);
if (bs != null ) {
rpn.addXBs$javajs_util_BS(bs);
break;
}} else if (s.indexOf$S("|") >= 0 && ptWithin != pc - 4 ) {
rpn.addXBs$javajs_util_BS(this.vwr.ms.getAtoms$I$O(1086324744, s));
break;
}rpn.addX$org_jmol_script_SV($I$(2).newT$org_jmol_script_T(instruction));
if (s.equals$O("hkl")) {
rpn.addX$org_jmol_script_SV($I$(2).newV$I$O(9, this.hklParameter$I(pc + 2)));
pc=this.iToken;
}break;
case 134217759:
ptWithin=pc;
case 134218757:
case 134218756:
case 1237320707:
case 134353926:
case 134217736:
case 268435504:
case 1275203608:
rpn.addOp$org_jmol_script_T(instruction);
break;
case 1073742327:
rpn.addXBs$javajs_util_BS(this.vwr.getAllAtoms$());
break;
case 1073742333:
rpn.addXBs$javajs_util_BS(Clazz.new_($I$(6)));
break;
case 1073742335:
case 1073742334:
rpn.addX$org_jmol_script_SV($I$(2).newT$org_jmol_script_T(instruction));
break;
case 1113589787:
rpn.addXBs$javajs_util_BS($I$(10).copy$javajs_util_BS(this.vwr.bsA$()));
break;
case 2097194:
rpn.addXBs$javajs_util_BS($I$(10).copy$javajs_util_BS(this.vwr.slm.getHiddenSet$()));
break;
case 12293:
rpn.addXBs$javajs_util_BS($I$(10).copy$javajs_util_BS(this.vwr.getMotionFixedAtoms$()));
break;
case 2097192:
rpn.addXBs$javajs_util_BS($I$(10).copyInvert$javajs_util_BS$I(this.vwr.slm.getHiddenSet$(), ac));
break;
case 2097200:
rpn.addXBs$javajs_util_BS(this.vwr.getBaseModelBitSet$());
break;
case 2097198:
rpn.addXBs$javajs_util_BS(this.chk ? Clazz.new_($I$(6)) : $I$(10).copy$javajs_util_BS(this.vwr.ms.getVisibleSet$Z(!refreshed)));
refreshed=true;
break;
case 2097190:
if (!this.chk && allowRefresh ) (this).refresh$Z(false);
rpn.addXBs$javajs_util_BS(this.chk ? Clazz.new_($I$(6)) : this.vwr.ms.getClickableSet$Z(!allowRefresh));
allowRefresh=false;
break;
case 1073742356:
if (this.vwr.ms.mc != 1 || this.vwr.ms.haveBioModels ) {
var atomID=instruction.intValue;
if (atomID > 0) {
bs=p$1.compareInt$I$I$I.apply(this, [1094713346, 268435860, atomID]);
if (atomID == 2) bs.or$javajs_util_BS(p$1.compareInt$I$I$I.apply(this, [1086326789, 268435860, 20]));
rpn.addXBs$javajs_util_BS(bs);
} else {
rpn.addXBs$javajs_util_BS(this.getAtomBits$I$O(instruction.tok, value));
}} else {
rpn.addXBs$javajs_util_BS((this).lookupIdentifierValue$S("_" + value));
}break;
case 2097155:
case 2097188:
case 2097156:
case 1612709894:
case 1073742331:
case 2097166:
case 2097165:
case 2097168:
case 2097170:
case 2097172:
case 2097174:
case 1073742360:
case 1073742355:
case 2097196:
case 1088421903:
case 1814695966:
rpn.addXBs$javajs_util_BS(this.getAtomBits$I$O(instruction.tok, value));
break;
case 1073742358:
case 1073742359:
var iModel=instruction.intValue;
if (iModel == 2147483647 && Clazz.instanceOf(value, "java.lang.Integer") ) {
iModel=(value).intValue$();
if (!this.vwr.haveFileSet$()) {
rpn.addXBs$javajs_util_BS(this.getAtomBits$I$O(1073742358, Integer.valueOf$I(iModel)));
break;
}if (iModel <= 2147) iModel=iModel * 1000000;
}rpn.addXBs$javajs_util_BS(p$1.bitSetForModelFileNumber$I.apply(this, [iModel]));
break;
case 1073742361:
case 1073742357:
rpn.addXBs$javajs_util_BS(this.getAtomBits$I$O(instruction.tok, Integer.valueOf$I(instruction.intValue)));
break;
case 1073742362:
if (isInMath) rpn.addXNum$org_jmol_script_T(instruction);
 else rpn.addXBs$javajs_util_BS(this.getAtomBits$I$O(1073742362, Integer.valueOf$I(C$.getSeqCode$org_jmol_script_T(instruction))));
break;
case 1073742363:
if (isInMath) {
rpn.addXNum$org_jmol_script_T(instruction);
rpn.addOp$org_jmol_script_T($I$(4).tokenMinus);
rpn.addXNum$org_jmol_script_T(code[++pc]);
break;
}var chainID=(pc + 3 < code.length && code[pc + 2].tok == 268435584  && code[pc + 3].tok == 1073742357  ? code[pc + 3].intValue : -1);
rpn.addXBs$javajs_util_BS(this.getAtomBits$I$O(1073742363, Clazz.array(Integer.TYPE, -1, [C$.getSeqCode$org_jmol_script_T(instruction), C$.getSeqCode$org_jmol_script_T(code[++pc]), chainID])));
if (chainID != -1) pc+=2;
break;
case 1094713350:
case 1094713349:
var pt=value;
rpn.addXBs$javajs_util_BS(this.getAtomBits$I$O(instruction.tok, Clazz.array(Integer.TYPE, -1, [(Math.floor(pt.x * 1000)|0), (Math.floor(pt.y * 1000)|0), (Math.floor(pt.z * 1000)|0)])));
break;
case 2097182:
rpn.addXBs$javajs_util_BS(this.vwr.am.cmi < 0 ? this.vwr.getFrameAtoms$() : this.vwr.getModelUndeletedAtomsBitSet$I(this.vwr.am.cmi));
break;
case 1612709900:
case 2097154:
case 1114249217:
case 1612709912:
case 136314895:
case 2097159:
case 2097160:
case 2097162:
case 2097178:
case 2097180:
rpn.addXBs$javajs_util_BS((this).lookupIdentifierValue$S(value));
break;
case 268435859:
case 268435858:
case 268435857:
case 268435856:
case 268435860:
case 268435861:
case 268435862:
var tok=instruction.tok;
var tokWhat=instruction.intValue;
if ((tokWhat == 1094717448) && tok != 268435860 ) this.invArg$();
var data=null;
if (tokWhat == 1715472409) {
if (pc + 2 == code.length) this.invArg$();
if (!this.chk) data=this.vwr.getDataObj$S$javajs_util_BS$I(code[++pc].value, null, 1);
}if (++pc == code.length) this.invArg$();
rpn.addXBs$javajs_util_BS(this.chk ? Clazz.new_($I$(6)) : p$1.getComparison$org_jmol_script_T$I$I$S$FA.apply(this, [code[pc], tokWhat, tok, value, data]));
break;
case 3:
case 2:
rpn.addXNum$org_jmol_script_T(instruction);
break;
case 10:
var bs1=$I$(10).copy$javajs_util_BS(value);
rpn.addXBs$javajs_util_BS(bs1);
break;
case 8:
rpn.addXPt$javajs_util_P3(value);
break;
default:
if ($I$(4).tokAttr$I$I(instruction.tok, 268435456)) {
if (!rpn.addOp$org_jmol_script_T(instruction)) this.invArg$();
break;
}if (!(Clazz.instanceOf(value, "java.lang.String"))) {
rpn.addXObj$O(value);
break;
}val=this.getParameter$S$I$Z(value, 0, true);
if (isInMath) {
rpn.addXObj$O(val);
break;
}if (Clazz.instanceOf(val, "java.lang.String") || Clazz.instanceOf(val, "javajs.util.Lst") ) val=p$1.getStringObjectAsVariable$O.apply(this, [val]);
if (Clazz.instanceOf(val, "java.lang.String")) val=(this).lookupIdentifierValue$S(value);
rpn.addXObj$O(val);
break;
}
}
var expressionResult=rpn.getResult$();
if (expressionResult == null ) {
if (allowUnderflow) return null;
if (!this.chk) rpn.dumpStacks$S("after getResult");
this.error$I(13);
}var exp=expressionResult.value;
if (Clazz.instanceOf(exp, "java.lang.String") && (ret == null  || (exp).startsWith$S("({") ) ) {
exp=(this.chk ? Clazz.new_($I$(6)) : this.getAtomBitSet$O(exp));
}if (ret != null  && !(Clazz.instanceOf(exp, "javajs.util.BS")) ) {
ret[0]=exp;
return null;
}bs=(Clazz.instanceOf(exp, "javajs.util.BS") ? exp : Clazz.new_($I$(6)));
this.isBondSet=(Clazz.instanceOf(exp, "org.jmol.modelset.BondSet"));
if (!this.isBondSet && (bs=this.vwr.slm.excludeAtoms$javajs_util_BS$Z(bs, ignoreSubset)).length$() > this.vwr.ms.ac ) bs.clearAll$();
if (this.tempStatement != null ) {
this.st=this.tempStatement;
this.tempStatement=null;
}return bs;
});

Clazz.newMeth(C$, 'getComparison$org_jmol_script_T$I$I$S$FA', function (t, tokWhat, tokOp, strOp, data) {
var tokValue=t.tok;
if (tokValue == 7) {
var bs=Clazz.new_($I$(6));
if (tokOp != 268435860) bs.setBits$I$I(0, this.vwr.ms.ac);
var lst=(t).getList$();
for (var i=lst.size$(); --i >= 0; ) {
var res=p$1.getComparison$org_jmol_script_T$I$I$S$FA.apply(this, [lst.get$I(i), tokWhat, tokOp, strOp, data]);
if (tokOp == 268435860) bs.or$javajs_util_BS(res);
 else bs.and$javajs_util_BS(res);
}
return bs;
}var comparisonInt=t.intValue;
var comparisonFloat=NaN;
var isModel=(tokWhat == 1094717454);
var isIntProperty=$I$(4).tokAttr$I$I(tokWhat, 1094713344);
var isFloatProperty=($I$(4).tokAttr$I$I(tokWhat, 1111490560) || (tokWhat & 1136656384) == 1077936128 );
var isIntOrFloat=isIntProperty && isFloatProperty ;
var isStringProperty=!isIntProperty && $I$(4).tokAttr$I$I(tokWhat, 1086324736) ;
if (tokWhat == 1086326789) isIntProperty=!(isStringProperty=false);
var val=t.value;
if ($I$(4).tokAttr$I$I(tokValue, 1073741824)) {
if ("_modelNumber".equalsIgnoreCase$S(val)) {
var modelIndex=this.vwr.am.cmi;
val=Integer.valueOf$I(comparisonInt=(modelIndex < 0 ? 0 : this.vwr.getModelFileNumber$I(modelIndex)));
} else {
var v=this.getParameter$S$I$Z(val, 1073742190, false);
if (v != null ) {
if (v.tok == 7) return p$1.getComparison$org_jmol_script_T$I$I$S$FA.apply(this, [v, tokWhat, tokOp, strOp, data]);
comparisonInt=v.intValue;
val=(isStringProperty ? $I$(2).sValue$org_jmol_script_T(v) : $I$(2).nValue$org_jmol_script_T(v));
}}}if (Clazz.instanceOf(val, "javajs.util.P3")) {
if (tokWhat == 1765808134) {
comparisonInt=$I$(11).colorPtToFFRGB$javajs_util_T3(val);
tokValue=2;
isIntProperty=true;
}} else if (Clazz.instanceOf(val, "java.lang.String")) {
if (tokWhat == 1765808134) {
comparisonInt=$I$(11).getArgbFromString$S(val);
if (comparisonInt == 0 && $I$(4).tokAttr$I$I(tokValue, 1073741824) ) {
val=this.getVarParameter$S$Z(val, true);
if ((val).startsWith$S("{")) {
val=$I$(12).uP$S(val);
if (Clazz.instanceOf(val, "javajs.util.P3")) comparisonInt=$I$(11).colorPtToFFRGB$javajs_util_T3(val);
 else comparisonInt=0;
} else {
comparisonInt=$I$(11).getArgbFromString$S(val);
}}tokValue=2;
isIntProperty=true;
} else if (!isStringProperty) {
if (tokWhat == 1639976963 || tokWhat == 1237320707  || tokWhat == 1086326789 ) isStringProperty=!(isIntProperty=(comparisonInt != 2147483647));
 else val=$I$(2).nValue$org_jmol_script_T(t);
if (Clazz.instanceOf(val, "java.lang.Integer")) comparisonFloat=comparisonInt=(val).intValue$();
 else if (Clazz.instanceOf(val, "java.lang.Float") && isModel ) comparisonInt=$I$(13).modelFileNumberFromFloat$F((val).floatValue$());
}}if (isStringProperty && !(Clazz.instanceOf(val, "java.lang.String")) ) {
val="" + val;
}if (Clazz.instanceOf(val, "java.lang.Integer") || tokValue == 2 ) {
if (isModel) {
if (comparisonInt >= 1000000) tokWhat=-1094717454;
} else if (isIntOrFloat) {
isFloatProperty=false;
} else if (isFloatProperty) {
comparisonFloat=comparisonInt;
}} else if (Clazz.instanceOf(val, "java.lang.Float")) {
if (isModel) {
tokWhat=-1094717454;
} else {
comparisonFloat=(val).floatValue$();
if (isIntOrFloat) {
isIntProperty=false;
} else if (isIntProperty) {
comparisonInt=((comparisonFloat)|0);
}}} else if (!isStringProperty) {
this.iToken++;
this.invArg$();
}if (isModel && comparisonInt >= 1000000  && comparisonInt % 1000000 == 0 ) {
comparisonInt=(comparisonInt/(1000000)|0);
tokWhat=1228935687;
isModel=false;
}if (tokWhat == -1094717454 && tokOp == 268435860 ) {
return p$1.bitSetForModelFileNumber$I.apply(this, [comparisonInt]);
}if (strOp != null  && strOp.indexOf$S("-") >= 0 ) {
if (isIntProperty) comparisonInt=-comparisonInt;
 else if (!Float.isNaN$F(comparisonFloat)) comparisonFloat=-comparisonFloat;
}return (isIntProperty ? p$1.compareInt$I$I$I.apply(this, [tokWhat, tokOp, comparisonInt]) : isStringProperty ? p$1.compareString$I$I$S.apply(this, [tokWhat, tokOp, val]) : this.compareFloatData$I$FA$I$F(tokWhat, data, tokOp, comparisonFloat));
}, p$1);

Clazz.newMeth(C$, 'noCopy$I$I', function (i, dir) {
switch (this.tokAt$I(i + dir)) {
case 268435650:
case 268435649:
return ((this.st[i + dir].intValue == -1) == (dir == -1) );
default:
return false;
}
});

Clazz.newMeth(C$, 'getAssocArray$I', function (i) {
var ht=Clazz.new_($I$(5));
var closer=(this.tokAt$I(i) == 1073742332 ? 1073742338 : 268435521);
for (i=i + 1; i < this.slen; i++) {
var tok=this.tokAt$I(i);
if (tok == closer) break;
var key=null;
if (Clazz.instanceOf(this.st[i], "org.jmol.script.SV")) key=(this.st[i]).myName;
if (key == null ) key=$I$(2).sValue$org_jmol_script_T(this.st[i]);
i++;
if (this.tokAt$I(i++) != 268435490) this.invArg$();
var v=p$1.parameterExpression$I$I$S$Z$Z$I$Z$java_util_Map$S$Z.apply(this, [i, 0, null, false, true, -1, false, null, null, false]);
if (v.size$() == 0) this.invArg$();
ht.put$TK$TV(key, v.get$I(0));
i=this.iToken;
if (this.tokAt$I(i) != 268435504) break;
}
this.iToken=i;
if (this.tokAt$I(i) != closer) this.invArg$();
return ht;
});

Clazz.newMeth(C$, 'listBS$javajs_util_BS', function (bs) {
var l=Clazz.new_($I$(8));
l.addLast$TV($I$(2).newV$I$O(10, bs));
return l;
});

Clazz.newMeth(C$, 'compareFloatData$I$FA$I$F', function (tokWhat, data, tokOperator, comparisonFloat) {
var bs=Clazz.new_($I$(6));
var ac=this.vwr.ms.ac;
var modelSet=this.vwr.ms;
var atoms=modelSet.at;
var propertyFloat=0;
this.vwr.autoCalculate$I$S(tokWhat, null);
var isProp=(tokWhat == 1715472409);
if (!isProp && this.ptTemp == null  ) this.ptTemp=Clazz.new_($I$(14));
for (var i=ac; --i >= 0; ) {
var match=false;
var atom=atoms[i];
if (isProp) {
if (data == null  || data.length <= i ) continue;
propertyFloat=data[i];
} else {
propertyFloat=atom.atomPropertyFloat$org_jmol_viewer_Viewer$I$javajs_util_P3(this.vwr, tokWhat, this.ptTemp);
}match=this.compareFloat$I$F$F(tokOperator, propertyFloat, comparisonFloat);
if (match) bs.set$I(i);
}
return bs;
});

Clazz.newMeth(C$, 'compareFloat$I$F$F', function (tokOperator, a, b) {
switch (tokOperator) {
case 268435859:
return a < b ;
case 268435858:
return a <= b ;
case 268435857:
return a >= b ;
case 268435856:
return a > b ;
case 268435860:
return a == b ;
case 268435861:
return a != b  && !Float.isNaN$F(a) ;
}
return false;
});

Clazz.newMeth(C$, 'compareString$I$I$S', function (tokWhat, tokOperator, comparisonString) {
var bs=Clazz.new_($I$(6));
var atoms=this.vwr.ms.at;
var ac=this.vwr.ms.ac;
var isCaseSensitive=(tokOperator == 268435862 || tokWhat == 1086326788 && this.vwr.getBoolean$I(603979822)  );
if (!isCaseSensitive) comparisonString=comparisonString.toLowerCase$();
for (var i=ac; --i >= 0; ) {
var propertyString=atoms[i].atomPropertyString$org_jmol_viewer_Viewer$I(this.vwr, tokWhat);
if (!isCaseSensitive) propertyString=propertyString.toLowerCase$();
if (p$1.compareStringValues$I$S$S.apply(this, [tokOperator, propertyString, comparisonString])) bs.set$I(i);
}
return bs;
}, p$1);

Clazz.newMeth(C$, 'compareStringValues$I$S$S', function (tokOperator, propertyValue, comparisonValue) {
switch (tokOperator) {
case 268435860:
case 268435861:
return ($I$(7).isMatch$S$S$Z$Z(propertyValue, comparisonValue, true, true) == (tokOperator == 268435860) );
case 268435862:
return $I$(7).isLike$S$S(propertyValue, comparisonValue);
default:
this.invArg$();
}
return false;
}, p$1);

Clazz.newMeth(C$, 'compareInt$I$I$I', function (tokWhat, tokOperator, ival) {
var ia=2147483647;
var propertyBitSet=null;
var bitsetComparator=tokOperator;
var bitsetBaseValue=ival;
var modelSet=this.vwr.ms;
var atoms=modelSet.at;
var ac=modelSet.ac;
var imax=-1;
var imin=0;
var iModel=-1;
var cellRange=null;
var nOps=0;
var bs;
switch (tokWhat) {
case 1296041986:
switch (bitsetComparator) {
case 268435857:
case 268435856:
imax=2147483647;
break;
}
break;
case 1094713347:
try {
switch (tokOperator) {
case 268435859:
return $I$(10).newBitSet2$I$I(0, ival);
case 268435858:
return $I$(10).newBitSet2$I$I(0, ival + 1);
case 268435857:
return $I$(10).newBitSet2$I$I(ival, ac);
case 268435856:
return $I$(10).newBitSet2$I$I(ival + 1, ac);
case 268435860:
return (ival < ac ? $I$(10).newBitSet2$I$I(ival, ival + 1) : Clazz.new_($I$(6)));
case 268435861:
default:
bs=$I$(10).setAll$I(ac);
if (ival >= 0) bs.clear$I(ival);
return bs;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return Clazz.new_($I$(6));
} else {
throw e;
}
}
}
bs=$I$(6).newN$I(ac);
for (var i=0; i < ac; ++i) {
var match=false;
var atom=atoms[i];
switch (tokWhat) {
default:
ia=atom.atomPropertyInt$I(tokWhat);
break;
case 1094713368:
case 1094717448:
return $I$(10).copy$javajs_util_BS(this.vwr.ms.getConformation$I$I$Z$javajs_util_BS(-1, ival - 1, false, null));
case 1296041986:
propertyBitSet=atom.atomSymmetry;
if (propertyBitSet == null ) continue;
if (atom.mi != iModel) {
iModel=atom.mi;
cellRange=modelSet.getModelCellRange$I(iModel);
nOps=modelSet.getModelSymmetryCount$I(iModel);
}if (bitsetBaseValue >= 200) {
if (cellRange == null ) continue;
ival=bitsetBaseValue % 1000;
var symop=(bitsetBaseValue/1000|0) - 1;
if (symop < 0) {
match=true;
} else if (nOps == 0 || symop >= 0 && !(match=propertyBitSet.get$I(symop))  ) {
continue;
}bitsetComparator=1073742333;
if (symop < 0) ia=atom.getCellTranslation$I$IA$I(ival, cellRange, nOps);
 else ia=atom.getSymmetryTranslation$I$IA$I(symop, cellRange, nOps);
} else if (nOps > 0) {
if (ival > nOps) {
if (bitsetComparator != 268435859 && bitsetComparator != 268435858 ) continue;
}if (bitsetComparator == 268435861) {
if (ival > 0 && ival <= nOps  && !propertyBitSet.get$I(ival) ) {
bs.set$I(i);
}continue;
}var bs1=$I$(10).copy$javajs_util_BS(propertyBitSet);
bs1.clearBits$I$I(nOps, bs1.length$());
propertyBitSet=bs1;
}switch (bitsetComparator) {
case 268435859:
imax=ival - 1;
break;
case 268435858:
imax=ival;
break;
case 268435857:
imin=ival - 1;
break;
case 268435856:
imin=ival;
break;
case 268435860:
imax=ival;
imin=ival - 1;
break;
case 268435861:
match=!propertyBitSet.get$I(ival);
break;
}
if (imin < 0) imin=0;
if (imin < imax) {
var pt=propertyBitSet.nextSetBit$I(imin);
if (pt >= 0 && pt < imax ) match=true;
}if (!match || ia == 2147483647 ) tokOperator=1073742333;
}
switch (tokOperator) {
case 1073742333:
break;
case 268435859:
match=(ia < ival);
break;
case 268435858:
match=(ia <= ival);
break;
case 268435857:
match=(ia >= ival);
break;
case 268435856:
match=(ia > ival);
break;
case 268435860:
match=(ia == ival);
break;
case 268435861:
match=(ia != ival);
break;
}
if (match) bs.set$I(i);
}
return bs;
}, p$1);

Clazz.newMeth(C$, 'getBitsetPropertySelector$I$I', function (i, xTok) {
var tok=this.getToken$I(i).tok;
switch (tok) {
case 32:
case 64:
case 96:
case 192:
case 128:
case 160:
case 1715472409:
break;
default:
if ($I$(4).tokAttrOr$I$I$I(tok, 1077936128, 1140850688) || xTok == 6 ) break;
if (tok != 805306401 && !$I$(4).tokAttr$I$I(tok, 1073741824) ) break;
var name=this.paramAsStr$I(i);
if (this.vwr.isFunction$S(name.toLowerCase$())) {
tok=134320141;
break;
}}
return $I$(2).newSV$I$I$O(268435665, tok, this.paramAsStr$I(i));
}, p$1);

Clazz.newMeth(C$, 'getBitsetProperty$javajs_util_BS$javajs_util_Lst$I$javajs_util_P3$javajs_util_P4$O$O$Z$I$Z', function (bs, pts, tok, ptRef, planeRef, tokenValue, opValue, useAtomMap, index, asVectorIfAll) {
var haveIndex=(index != 2147483647);
var isAtoms=haveIndex || !(Clazz.instanceOf(tokenValue, "org.jmol.modelset.BondSet")) ;
var minmaxtype=tok & 480;
var selectedFloat=(minmaxtype == 224);
var ac=this.vwr.ms.ac;
var fout=(minmaxtype == 256 ? Clazz.array(Float.TYPE, [ac]) : null);
var isExplicitlyAll=(minmaxtype == 480 || selectedFloat );
tok&=~480;
var info=null;
if (tok == 0) tok=(isAtoms ? 1140850689 : 1677721602);
var isPt=false;
var isHash=false;
var isInt=false;
var isString=false;
switch (tok) {
case 1275068449:
return (this.vwr.getAuxiliaryInfoForAtoms$O(bs)).get$O("models");
case 1145047050:
case 1145047055:
case 1145047051:
case 1145047053:
case 1145045008:
case 1145045006:
case 1765808134:
case 1145047052:
isPt=true;
break;
case 1275203608:
isHash=true;
info=Clazz.array(java.lang.Object, -1, [null, null]);
break;
case 134320141:
case 1275069443:
break;
default:
isInt=$I$(4).tokAttr$I$I(tok, 1094713344) && !$I$(4).tokAttr$I$I(tok, 1111490560) ;
isString=!isInt && $I$(4).tokAttr$I$I(tok, 1086324736) ;
}
var pt=(isPt || !isAtoms  ? Clazz.new_($I$(14)) : null);
if (isExplicitlyAll || isString && !haveIndex && minmaxtype != 256   && minmaxtype != 32  ) minmaxtype=1073742327;
var vout=(minmaxtype == 1073742327 ? Clazz.new_($I$(8)) : null);
var bsNew=null;
var userFunction=null;
var params=null;
var bsAtom=null;
var tokenAtom=null;
var ptT=null;
var data=null;
switch (tok) {
case 1140850689:
case 1677721602:
if (this.chk) return bs;
bsNew=(tok == 1140850689 ? (isAtoms ? bs : this.vwr.ms.getAtoms$I$O(1677721602, bs)) : (isAtoms ? $I$(15).newBS$javajs_util_BS$IA(this.vwr.getBondsForSelectedAtoms$javajs_util_BS(bs), null) : bs));
var i;
switch (minmaxtype) {
case 32:
i=bsNew.nextSetBit$I(0);
break;
case 64:
i=bsNew.length$() - 1;
break;
case 192:
case 128:
case 160:
return Float.valueOf$F(NaN);
default:
return bsNew;
}
bsNew.clearAll$();
if (i >= 0) bsNew.set$I(i);
return bsNew;
case 1086324745:
switch (minmaxtype) {
case 0:
case 1073742327:
return this.getCmdExt$().getBitsetIdent$javajs_util_BS$S$O$Z$I$Z(bs, null, tokenValue, useAtomMap, index, isExplicitlyAll);
}
return "";
case 134320141:
userFunction=(opValue)[0];
params=(opValue)[1];
bsAtom=$I$(6).newN$I(ac);
tokenAtom=$I$(2).newV$I$O(10, bsAtom);
break;
case 1111490587:
for (var j=fout.length; --j >= 0; ) fout[j]=NaN;

case 1111490574:
case 1111490575:
this.vwr.autoCalculate$I$S(tok, tokenValue);
break;
case 1275069443:
if (ptRef == null  && planeRef == null  ) return Clazz.new_($I$(14));
break;
case 1765808134:
ptT=Clazz.new_($I$(14));
break;
case 1715472409:
data=this.vwr.getDataObj$S$javajs_util_BS$I(opValue, null, 1);
break;
}
var n=0;
var ivMinMax=0;
var fvMinMax=0;
var sum=0;
var sum2=0;
switch (minmaxtype) {
case 32:
ivMinMax=2147483647;
fvMinMax=3.4028235E38;
break;
case 64:
ivMinMax=-2147483648;
fvMinMax=-3.4028235E38;
break;
}
var modelSet=this.vwr.ms;
var mode=(isHash ? 4 : isPt ? 3 : isString ? 2 : isInt ? 1 : 0);
if (isAtoms) {
var haveBitSet=(bs != null );
var i0;
var i1;
if (pts != null ) {
i0=0;
i1=pts.size$();
} else if (haveIndex) {
i0=index;
i1=index + 1;
} else if (haveBitSet) {
i0=bs.nextSetBit$I(0);
i1=Math.min(ac, bs.length$());
} else {
i0=0;
i1=ac;
}if (this.chk) i1=0;
for (var i=i0; i >= 0 && i < i1 ; i=(haveBitSet ? bs.nextSetBit$I(i + 1) : i + 1)) {
n++;
var atom=(pts == null  ? modelSet.at[i] : null);
switch (mode) {
case 0:
var fv=3.4028235E38;
switch (tok) {
case 134320141:
bsAtom.set$I(i);
fv=$I$(2).fValue$org_jmol_script_T((this).getUserFunctionResult$S$javajs_util_Lst$org_jmol_script_SV(userFunction, params, tokenAtom));
bsAtom.clear$I(i);
break;
case 1715472409:
fv=(data == null  ? 0 : data[i]);
break;
case 1275069443:
if (planeRef != null ) fv=$I$(16).distanceToPlane$javajs_util_P4$javajs_util_T3(planeRef, atom);
 else fv=(pts != null  ? $I$(2).ptValue$org_jmol_script_SV(pts.get$I(i)).distance$javajs_util_T3(ptRef) : atom !== ptRef  || minmaxtype != 32  ? atom.distance$javajs_util_T3(ptRef) : NaN);
break;
default:
fv=atom.atomPropertyFloat$org_jmol_viewer_Viewer$I$javajs_util_P3(this.vwr, tok, this.ptTemp);
}
if (fv == 3.4028235E38  || Float.isNaN$F(fv) && minmaxtype != 1073742327  ) {
n--;
continue;
}switch (minmaxtype) {
case 32:
if (fv < fvMinMax ) fvMinMax=fv;
break;
case 64:
if (fv > fvMinMax ) fvMinMax=fv;
break;
case 256:
fout[i]=fv;
break;
case 1073742327:
vout.addLast$TV(Float.valueOf$F(fv));
break;
case 160:
case 192:
sum2 += (fv) * fv;
case 128:
default:
sum += fv;
}
break;
case 1:
var iv=0;
switch (tok) {
case 1094717448:
case 1094713349:
this.errorStr$I$S(45, $I$(4).nameOf$I(tok));
break;
default:
iv=atom.atomPropertyInt$I(tok);
}
switch (minmaxtype) {
case 32:
if (iv < ivMinMax) ivMinMax=iv;
break;
case 64:
if (iv > ivMinMax) ivMinMax=iv;
break;
case 256:
fout[i]=iv;
break;
case 1073742327:
vout.addLast$TV(Integer.valueOf$I(iv));
break;
case 160:
case 192:
sum2 += (iv) * iv;
case 128:
default:
sum += iv;
}
break;
case 2:
var s=atom.atomPropertyString$org_jmol_viewer_Viewer$I(this.vwr, tok);
switch (minmaxtype) {
case 256:
fout[i]=$I$(7).parseFloat$S(s);
break;
default:
if (vout == null ) return s;
vout.addLast$TV(s);
}
break;
case 3:
var t=atom.atomPropertyTuple$org_jmol_viewer_Viewer$I$javajs_util_P3(this.vwr, tok, this.ptTemp);
switch (minmaxtype) {
case 256:
fout[i]=(pt == null  ? -1 : t == null  ? 0 : t.length$());
break;
case 1073742327:
vout.addLast$TV(t == null  ? Integer.valueOf$I(-1) : $I$(14).newP$javajs_util_T3(t));
break;
default:
if (t == null ) n--;
 else pt.add$javajs_util_T3(t);
}
break;
case 4:
switch (tok) {
case 1275203608:
info[0]=Integer.valueOf$I(i);
info[1]="";
this.vwr.shm.getShapePropertyData$I$S$OA(21, "info", info);
if (info[1] != null ) {
if (vout == null ) return info[1];
vout.addLast$TV(info[1]);
}break;
}
}
if (haveIndex) break;
}
} else {
var isAll=(bs == null );
var i0=(isAll ? 0 : bs.nextSetBit$I(0));
var i1=this.vwr.ms.bondCount;
for (var i=i0; i >= 0 && i < i1 ; i=(isAll ? i + 1 : bs.nextSetBit$I(i + 1))) {
n++;
var bond=modelSet.bo[i];
switch (tok) {
case 1140850691:
var fv=bond.atom1.distance$javajs_util_T3(bond.atom2);
switch (minmaxtype) {
case 32:
if (fv < fvMinMax ) fvMinMax=fv;
break;
case 64:
if (fv > fvMinMax ) fvMinMax=fv;
break;
case 1073742327:
vout.addLast$TV(Float.valueOf$F(fv));
break;
case 160:
case 192:
sum2 += fv * fv;
case 128:
default:
sum += fv;
}
break;
case 1145047050:
switch (minmaxtype) {
case 1073742327:
pt.ave$javajs_util_T3$javajs_util_T3(bond.atom1, bond.atom2);
vout.addLast$TV($I$(14).newP$javajs_util_T3(pt));
break;
default:
pt.add$javajs_util_T3(bond.atom1);
pt.add$javajs_util_T3(bond.atom2);
n++;
}
break;
case 1765808134:
$I$(11).colorPtFromInt$I$javajs_util_P3(this.vwr.gdata.getColorArgbOrGray$H(bond.colix), ptT);
switch (minmaxtype) {
case 1073742327:
vout.addLast$TV($I$(14).newP$javajs_util_T3(ptT));
break;
default:
pt.add$javajs_util_T3(ptT);
}
break;
default:
this.errorStr$I$S(46, $I$(4).nameOf$I(tok));
}
}
}if (minmaxtype == 256) return fout;
if (minmaxtype == 1073742327) {
if (asVectorIfAll) return vout;
var len=vout.size$();
if ((isString || isHash ) && !isExplicitlyAll && len == 1  ) return vout.get$I(0);
if (selectedFloat) {
fout=Clazz.array(Float.TYPE, [len]);
for (var i=len; --i >= 0; ) {
var v=vout.get$I(i);
switch (mode) {
case 0:
fout[i]=(v).floatValue$();
break;
case 1:
fout[i]=(v).floatValue$();
break;
case 2:
fout[i]=$I$(7).parseFloat$S(v);
break;
case 3:
fout[i]=(v == null  ? -1 : (v).length$());
break;
}
}
return fout;
}if (tok == 1086324744) {
var sb=Clazz.new_($I$(17));
for (var i=0; i < len; i++) sb.append$S(vout.get$I(i));

return sb.toString();
}var sout=Clazz.array(String, [len]);
for (var i=len; --i >= 0; ) {
var v=vout.get$I(i);
if (Clazz.instanceOf(v, "javajs.util.P3")) sout[i]=$I$(12).eP$javajs_util_T3(v);
 else sout[i]="" + vout.get$I(i);
}
return sout;
}if (isPt) return (n == 0 ? Integer.valueOf$I(-1) : $I$(14).new3$F$F$F(pt.x / n, pt.y / n, pt.z / n));
if (isHash) return Clazz.new_($I$(5));
if (n == 0 || n == 1 && minmaxtype == 192  ) return Float.valueOf$F(NaN);
if (isInt) {
switch (minmaxtype) {
case 32:
case 64:
return Integer.valueOf$I(ivMinMax);
case 160:
case 192:
break;
case 128:
return Integer.valueOf$I((sum|0));
default:
if (sum / n == ((sum / n)|0) ) return Integer.valueOf$I(((sum / n)|0));
return Float.valueOf$F((sum / n));
}
}switch (minmaxtype) {
case 32:
case 64:
sum=fvMinMax;
break;
case 128:
break;
case 160:
sum=sum2;
break;
case 192:
sum=Math.sqrt((sum2 - sum * sum / n) / (n - 1));
break;
default:
sum /= n;
break;
}
return Float.valueOf$F(sum);
});

Clazz.newMeth(C$, 'bitSetForModelFileNumber$I', function (m) {
var bs=$I$(6).newN$I(this.vwr.ms.ac);
if (this.chk) return bs;
var modelCount=this.vwr.ms.mc;
var haveFileSet=this.vwr.haveFileSet$();
if (m < 1000000 && haveFileSet ) m*=1000000;
var pt=m % 1000000;
if (pt == 0) {
var model1=this.vwr.ms.getModelNumberIndex$I$Z$Z(m + 1, false, false);
if (model1 < 0) return bs;
var model2=(m == 0 ? modelCount : this.vwr.ms.getModelNumberIndex$I$Z$Z(m + 1000001, false, false));
if (model1 < 0) model1=0;
if (model2 < 0) model2=modelCount;
if (this.vwr.ms.isTrajectory$I(model1)) model2=model1 + 1;
for (var j=model1; j < model2; j++) bs.or$javajs_util_BS(this.vwr.getModelUndeletedAtomsBitSet$I(j));

} else {
var modelIndex=this.vwr.ms.getModelNumberIndex$I$Z$Z(m, false, true);
if (modelIndex >= 0) bs.or$javajs_util_BS(this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex));
}return bs;
}, p$1);

Clazz.newMeth(C$, 'getStringObjectAsVariable$O', function (obj) {
if (obj == null ) return obj;
if (Clazz.instanceOf(obj, "java.lang.String")) {
var s=obj;
if (s.length$() == 0) return s;
return $I$(2).unescapePointOrBitsetAsVariable$O(s);
}var lst=obj;
if (lst.size$() == 0) return "";
if (lst.get$I(0).asString$().contains$CharSequence("|")) return this.vwr.ms.getAtoms$I$O(1086324744, $I$(2).newV$I$O(7, lst).asString$());
var bs=$I$(2).unEscapeBitSetArray$javajs_util_Lst$Z(lst, true);
return (bs == null  ? "" : bs);
}, p$1);

Clazz.newMeth(C$, 'getAtomBits$I$O', function (tokType, specInfo) {
return (this.chk ? Clazz.new_($I$(6)) : this.vwr.ms.getAtoms$I$O(tokType, specInfo));
});

Clazz.newMeth(C$, 'getSeqCode$org_jmol_script_T', function (instruction) {
return (instruction.intValue == 2147483647 ? (instruction.value).intValue$() : $I$(18).getSeqcodeFor$I$C(instruction.intValue, " "));
}, 1);

Clazz.newMeth(C$, 'setVariable$I$I$S$Z', function (pt, ptMax, key, isSet) {
var bs=null;
var propertyName="";
var settingData=key.startsWith$S("property_");
var isThrown=key.equals$O("thrown_value");
var isExpression=(this.tokAt$I(1) == 1073742325 || this.tokAt$I(1) == 268435472 );
var t=(settingData ? null : key.length$() == 0 ? Clazz.new_($I$(2)) : this.getContextVariableAsVariable$S$Z(key, false));
if (isSet && !isExpression ) {
switch (this.tokAt$I(2)) {
default:
pt=2;
break;
case 268435860:
pt=3;
break;
case 1073742195:
case 268435520:
if (this.st[0].intValue == 61) {
pt=2;
break;
}case 1073742336:
case 1073742337:
key=null;
break;
}
}var nv=0;
var v=p$1.parameterExpression$I$I$S$Z$Z$I$Z$java_util_Map$S$Z.apply(this, [pt, ptMax, key, true, true, -1, false, null, null, isSet && pt == 1 ]);
nv=v.size$();
if (nv == 0) this.invArg$();
if (this.chk || v.get$I(0).tok == 0 ) return null;
var tv=$I$(2).selectItemVar$org_jmol_script_SV($I$(2).newS$S("").setv$org_jmol_script_SV(v.get$I(nv - 1)));
if (nv > 1) {
var sel=(nv > 2 ? v.get$I(1) : null);
t=v.get$I(0);
var selectOne=false;
switch (t.tok) {
case 6:
case 14:
if (nv > 3) this.invArg$();
t.mapPut$S$org_jmol_script_SV(sel.asString$(), tv);
break;
case 7:
if (nv > 2 + (sel == null  ? 0 : 1)) this.invArg$();
if (sel == null ) {
sel=t;
} else {
t=$I$(2).selectItemVar$org_jmol_script_SV(t);
}selectOne=true;
break;
case 4:
if (sel.tok != 2) {
t.value=$I$(7).rep$S$S$S(t.asString$(), sel.asString$(), tv.asString$());
t.intValue=2147483647;
break;
}case 11:
case 12:
if (t.intValue == 2147483647) selectOne=true;
 else t.setSelectedValue$I$I$org_jmol_script_SV(t.intValue, sel.asInt$(), tv);
break;
case 8:
var p=(t.value=$I$(14).newP$javajs_util_T3(t.value));
var f=tv.asFloat$();
switch ($I$(4).getTokFromName$S(sel.asString$())) {
case 1111492629:
p.x=f;
break;
case 1111492630:
p.y=f;
break;
case 1111492631:
p.z=f;
break;
}
break;
case 10:
bs=$I$(2).getBitSet$org_jmol_script_SV$Z(t, true);
var nAtoms=this.vwr.ms.ac;
var nbs=bs.cardinality$();
propertyName=sel.asString$();
var tok=$I$(4).getTokFromName$S(propertyName);
switch (tok) {
case 0:
if (propertyName.startsWith$S("property_")) {
var obj=(tv.tok == 7 ? $I$(2).flistValue$org_jmol_script_T$I(tv, tv.getList$().size$() == nbs ? nbs : nAtoms) : tv.asString$());
this.vwr.setData$S$OA$I$I$I$I$I(propertyName, Clazz.array(java.lang.Object, -1, [propertyName, obj, $I$(10).copy$javajs_util_BS(bs), Integer.valueOf$I(-1)]), nAtoms, 0, 0, tv.tok == 7 ? 2147483647 : -2147483648, 0);
break;
}this.iToken=pt;
this.error$I(56);
break;
case 1825200146:
case 1287653388:
this.vwr.shm.loadShape$I(5);
default:
p$1.setBitsetProperty$javajs_util_BS$I$I$F$org_jmol_script_T.apply(this, [bs, tok, tv.asInt$(), tv.asFloat$(), tv]);
break;
}
break;
}
if (selectOne) t.setSelectedValue$I$I$org_jmol_script_SV(sel.intValue, 2147483647, tv);
return null;
}var needVariable=(!settingData && t == null   && (isThrown || !(Clazz.instanceOf(tv.value, "java.lang.String") || tv.tok == 2  || Clazz.instanceOf(tv.value, "java.lang.Integer")  || Clazz.instanceOf(tv.value, "java.lang.Float")  || Clazz.instanceOf(tv.value, "java.lang.Boolean") ) ) );
if (needVariable && key != null  ) {
if (key.startsWith$S("_") || (t=this.vwr.g.getAndSetNewVariable$S$Z(key, true)) == null  ) this.errorStr$I$S(22, key);
}if (t != null ) return t.setv$org_jmol_script_SV(tv);
var vv=$I$(2).oValue$O(tv);
if (settingData) {
if (tv.tok == 7) vv=tv.asString$();
this.vwr.setData$S$OA$I$I$I$I$I(key, Clazz.array(java.lang.Object, -1, [key, "" + vv, $I$(10).copy$javajs_util_BS(this.vwr.bsA$()), Integer.valueOf$I(0)]), this.vwr.ms.ac, 0, 0, -2147483648, 0);
return null;
}if (Clazz.instanceOf(vv, "java.lang.Boolean")) {
this.setBooleanProperty$S$Z(key, (vv).booleanValue$());
} else if (Clazz.instanceOf(vv, "java.lang.Integer")) {
this.setIntProperty$S$I(key, (vv).intValue$());
} else if (Clazz.instanceOf(vv, "java.lang.Float")) {
this.setFloatProperty$S$F(key, (vv).floatValue$());
} else if (Clazz.instanceOf(vv, "java.lang.String")) {
this.setStringProperty$S$S(key, vv);
} else {
}return tv;
});

Clazz.newMeth(C$, 'setBitsetProperty$javajs_util_BS$I$I$F$org_jmol_script_T', function (bs, tok, iValue, fValue, tokenValue) {
if (this.chk || bs.cardinality$() == 0 ) return;
var list=null;
var sValue=null;
var fvalues=null;
var pt;
var sv=null;
var nValues=0;
var isStrProperty=$I$(4).tokAttr$I$I(tok, 1086324736);
if (tokenValue.tok == 7) {
sv=(tokenValue).getList$();
if ((nValues=sv.size$()) == 0) return;
}switch (tok) {
case 1145047050:
case 1145047051:
case 1145047053:
case 1145047055:
switch (tokenValue.tok) {
case 8:
this.vwr.setAtomCoords$javajs_util_BS$I$O(bs, tok, tokenValue.value);
break;
case 7:
this.theToken=tokenValue;
this.vwr.setAtomCoords$javajs_util_BS$I$O(bs, tok, this.getPointArray$I$I$Z(-1, nValues, true));
break;
}
return;
case 1765808134:
var value=null;
var prop="color";
switch (tokenValue.tok) {
case 7:
var values=Clazz.array(Integer.TYPE, [nValues]);
for (var i=nValues; --i >= 0; ) {
var svi=sv.get$I(i);
pt=$I$(2).ptValue$org_jmol_script_SV(svi);
if (pt != null ) {
values[i]=$I$(11).colorPtToFFRGB$javajs_util_T3(pt);
} else if (svi.tok == 2) {
values[i]=svi.intValue;
} else {
values[i]=$I$(11).getArgbFromString$S(svi.asString$());
if (values[i] == 0) values[i]=svi.asInt$();
}if (values[i] == 0) this.errorStr2$I$S$S(50, "ARRAY", svi.asString$());
}
value=values;
prop="colorValues";
break;
case 8:
value=Integer.valueOf$I($I$(11).colorPtToFFRGB$javajs_util_T3(tokenValue.value));
break;
case 4:
value=tokenValue.value;
break;
default:
value=Integer.valueOf$I($I$(2).iValue$org_jmol_script_T(tokenValue));
break;
}
(this).setAtomProp$S$O$javajs_util_BS(prop, value, bs);
return;
case 1825200146:
case 1287653388:
if (tokenValue.tok != 7) sValue=$I$(2).sValue$org_jmol_script_T(tokenValue);
break;
case 1086326789:
case 1094715402:
(this).clearDefinedVariableAtomSets$();
isStrProperty=false;
break;
}
switch (tokenValue.tok) {
case 7:
if (isStrProperty) list=$I$(2).strListValue$org_jmol_script_T(tokenValue);
 else fvalues=$I$(2).flistValue$org_jmol_script_T$I(tokenValue, nValues);
break;
case 4:
if (sValue == null ) list=$I$(7).getTokens$S($I$(2).sValue$org_jmol_script_T(tokenValue));
break;
}
if (list != null ) {
nValues=list.length;
if (!isStrProperty) {
fvalues=Clazz.array(Float.TYPE, [nValues]);
for (var i=nValues; --i >= 0; ) fvalues[i]=(tok == 1086326789 ? $I$(19).elementNumberFromSymbol$S$Z(list[i], false) : $I$(7).parseFloat$S(list[i]));

}if (tokenValue.tok != 7 && nValues == 1 ) {
if (isStrProperty) sValue=list[0];
 else fValue=fvalues[0];
iValue=(fValue|0);
list=null;
fvalues=null;
}}if (!$I$(4).tokAttr$I$I(tok, 2048)) this.error$I(56);
this.vwr.setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA(bs, tok, iValue, fValue, sValue, fvalues, list);
}, p$1);

Clazz.newMeth(C$, 'setStatement$org_jmol_script_TA$I', function (st0, pt0) {
this.st=st0;
this.slen=this.st.length;
if (this.slen == 0) return true;
var fixed;
var i;
var tok;
for (i=pt0; i < this.slen; i++) {
if (this.st[i] == null ) {
this.slen=i;
return true;
}if (this.st[i].tok == 12290) break;
}
if (i == this.slen) return i == this.slen;
switch (this.st[0].tok) {
case 102436:
case 134320141:
case 1073741824:
if (this.tokAt$I(1) == 268435472) return true;
}
fixed=Clazz.array($I$(4), [this.slen]);
fixed[0]=this.st[0];
var isExpression=false;
var j=pt0;
for (i=pt0; i < this.slen; i++) {
if (this.st[i] == null ) continue;
switch (tok=this.getToken$I(i).tok) {
default:
fixed[j]=this.st[i];
break;
case 1073742325:
case 1073742326:
isExpression=(tok == 1073742325);
fixed[j]=this.st[i];
break;
case 12290:
if (++i == this.slen) this.invArg$();
var v;
var forceString=(this.theToken.intValue == 4);
var s;
var $var=this.paramAsStr$I(i);
var isClauseDefine=(this.tokAt$I(i) == 1073742325);
var isSetAt=(pt0 == 1 && j == 1  && this.st[0] === $I$(4).tokenSetCmd  );
if (isClauseDefine) {
var vt=this.parameterExpressionToken$I(++i);
if (this.chk) {
v=null;
} else if (vt.tok != 7) {
v=$I$(2).oValue$O(vt);
} else if (!isExpression) {
v=vt;
} else {
var bs=$I$(2).getBitSet$org_jmol_script_SV$Z(vt, true);
if (bs == null ) {
var sv=$I$(2).sValue$org_jmol_script_T(vt);
v=(sv.indexOf$S("|") < 0 ? this.getAtomBitSet$O(sv) : sv);
} else {
v=bs;
}}i=this.iToken;
} else if (this.chk) {
v=Clazz.new_($I$(6));
} else {
if (this.tokAt$I(i) == 2) {
v=this.vwr.ms.getAtoms$I$O(1094715393, Integer.valueOf$I(this.st[i].intValue));
} else if (this.tokAt$I(i) == 12290 && this.tokAt$I(i + 1) == 2 ) {
v=this.vwr.ms.getAtomsFromAtomNumberInFrame$I(this.st[++i].intValue);
} else {
v=this.getParameter$S$I$Z($var, 0, true);
}if (!isExpression && !isSetAt ) isClauseDefine=true;
}tok=this.tokAt$I(0);
forceString|=($I$(4).tokAttr$I$I(tok, 20480) || tok == 134222850 );
if (v == null ) {
fixed[j]=$I$(4).tokenAll;
} else if (Clazz.instanceOf(v, "org.jmol.script.SV")) {
fixed[j]=v;
} else if (Clazz.instanceOf(v, "java.lang.Boolean")) {
fixed[j]=((v).booleanValue$() ? $I$(4).tokenOn : $I$(4).tokenOff);
} else if (Clazz.instanceOf(v, "java.lang.Integer")) {
fixed[j]=$I$(4).tv$I$I$O(2, (v).intValue$(), v);
} else if (Clazz.instanceOf(v, "java.lang.Float")) {
fixed[j]=$I$(4).tv$I$I$O(3, P$.ScriptParam.getFloatEncodedInt$S("" + v), v);
} else if (Clazz.instanceOf(v, "java.lang.String")) {
if (!forceString && !isExpression ) {
if ((tok != 36867 || j > 1 && this.st[1].tok != 537022465  && !"labelfor".equalsIgnoreCase$S(this.st[1].value.toString())  ) && $I$(4).tokAttr$I$I(tok, 36864) ) {
v=this.getParameter$S$I$Z(v, 1073742190, true);
}if (Clazz.instanceOf(v, "java.lang.String")) {
v=p$1.getStringObjectAsVariable$O.apply(this, [v]);
}}if (Clazz.instanceOf(v, "org.jmol.script.SV")) {
fixed[j]=v;
} else {
s=v;
if (isExpression && !forceString ) {
fixed[j]=(s.indexOf$S("|") >= 0 || $I$(4).tokAttr$I$I(fixed[j - 1].tok, 268435712)  ? $I$(4).o$I$O(4, s) : $I$(4).o$I$O(10, this.getAtomBitSet$O(s)));
} else {
tok=(isSetAt ? $I$(4).getTokFromName$S(s) : isClauseDefine || forceString || s.length$() == 0   || s.indexOf$S(".") >= 0  || s.indexOf$S(" ") >= 0  || s.indexOf$S("=") >= 0  || s.indexOf$S(";") >= 0  || s.indexOf$S("[") >= 0  || s.indexOf$S("{") >= 0  ? 4 : 1073741824);
fixed[j]=$I$(4).o$I$O(tok, v);
}}} else if (Clazz.instanceOf(v, "javajs.util.BArray")) {
fixed[j]=$I$(2).newV$I$O(15, v);
} else if (Clazz.instanceOf(v, "javajs.util.BS")) {
fixed[j]=$I$(2).newV$I$O(10, v);
} else if (Clazz.instanceOf(v, "javajs.util.P3")) {
fixed[j]=$I$(2).newV$I$O(8, v);
} else if (Clazz.instanceOf(v, "javajs.util.P4")) {
fixed[j]=$I$(2).newV$I$O(9, v);
} else if (Clazz.instanceOf(v, "javajs.util.M34")) {
fixed[j]=$I$(2).newV$I$O(Clazz.instanceOf(v, "javajs.util.M4") ? 12 : 11, v);
} else if (Clazz.instanceOf(v, "java.util.Map") || Clazz.instanceOf(v, "org.jmol.script.ScriptContext") && (v=(v).getFullMap$()) != null   ) {
fixed[j]=$I$(2).newV$I$O(6, (isExpression ? v : $I$(2).deepCopy$O$Z$Z(v, true, true)));
} else if (Clazz.instanceOf(v, "javajs.util.Lst")) {
if (!isExpression) {
fixed[j]=$I$(2).newV$I$O(7, $I$(2).deepCopy$O$Z$Z(v, false, true));
break;
}var sv=v;
var bs=null;
for (var k=0; k < sv.size$(); k++) {
var svk=sv.get$I(k);
if (svk.tok != 10) {
bs=null;
break;
}if (bs == null ) bs=Clazz.new_($I$(6));
bs.or$javajs_util_BS(svk.value);
}
fixed[j]=(bs == null  ? $I$(2).getVariable$O(v) : $I$(4).o$I$O(10, bs));
} else {
var center=(this).getObjectCenter$S$I$I($var, -2147483648, -2147483648);
if (center == null ) this.invArg$();
fixed[j]=$I$(4).o$I$O(8, center);
}if (isSetAt && !$I$(4).tokAttr$I$I(fixed[j].tok, 536870912) ) this.invArg$();
break;
}
j++;
}
this.st=fixed;
for (i=j; i < this.st.length; i++) this.st[i]=null;

this.slen=j;
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 07:18:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
