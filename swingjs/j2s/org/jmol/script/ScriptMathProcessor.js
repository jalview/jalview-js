(function(){var P$=Clazz.newPackage("org.jmol.script"),p$1={},I$=[[0,'org.jmol.script.T','org.jmol.script.SV','org.jmol.util.Logger','javajs.util.Lst','javajs.util.BS','javajs.util.AU','javajs.util.P3','javajs.util.P4','javajs.util.M3','javajs.util.M4','org.jmol.util.BSUtil','javajs.util.Quat','javajs.util.PT','javajs.util.CU','org.jmol.util.Escape','java.util.Hashtable','javajs.util.A4','javajs.util.DF','javajs.util.V3','org.jmol.modelset.BondSet']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScriptMathProcessor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.oPt=-1;
this.oStack=Clazz.array($I$(1), [8]);
this.xStack=Clazz.array($I$(2), [8]);
this.ifStack=Clazz.array(Character.TYPE, [8]);
this.ifPt=-1;
this.xPt=-1;
this.ptid=0;
this.ptx=2147483647;
this.pto=2147483647;
this.doSelections=true;
},1);

C$.$fields$=[['Z',['wasX','asBitSet','chk','wasSyntaxCheck','debugHigh','isArrayItem','asVector','haveSpaceBeforeSquare','isSpecialAssignment','doSelections','assignLeft','allowUnderflow','isAssignment','skipping'],'I',['oPt','ifPt','xPt','parenCount','squareCount','braceCount','equalCount','ptid','ptx','pto'],'O',['eval','org.jmol.script.ScriptExpr','vwr','org.jmol.viewer.Viewer','oStack','org.jmol.script.T[]','xStack','org.jmol.script.SV[]','ifStack','char[]','lastAssignedString','org.jmol.script.SV']]]

Clazz.newMeth(C$, 'c$$org_jmol_script_ScriptExpr$Z$Z$Z$Z$Z$S', function (eval, isSpecialAssignment, isArrayItem, asVector, asBitSet, allowUnderflow, key) {
;C$.$init$.apply(this);
this.eval=eval;
this.isSpecialAssignment=this.assignLeft=isSpecialAssignment;
this.isAssignment=(isSpecialAssignment || key != null  );
this.vwr=eval.vwr;
this.debugHigh=eval.debugHigh;
this.chk=this.wasSyntaxCheck=eval.chk;
this.isArrayItem=isArrayItem;
this.asVector=asVector || isArrayItem ;
this.asBitSet=asBitSet;
this.allowUnderflow=allowUnderflow;
this.wasX=isArrayItem;
if (this.debugHigh) $I$(3).debug$S("initialize RPN");
}, 1);

Clazz.newMeth(C$, 'endAssignment$', function () {
this.assignLeft=false;
return (this.doSelections=false);
});

Clazz.newMeth(C$, 'getResult$', function () {
var isOK=true;
while (isOK && this.oPt >= 0  && this.oStack[this.oPt] != null  )isOK=p$1.operate.apply(this, []);

if (isOK) {
if (this.asVector) {
if (this.isAssignment && (this.xPt > 0 && this.oPt < 0  || this.oPt >= 0 && (this.oStack[this.oPt] != null )  ) ) this.eval.invArg$();
var result=Clazz.new_($I$(4,1));
for (var i=0; i <= this.xPt; i++) result.addLast$O(this.isSpecialAssignment ? this.xStack[i] : $I$(2).selectItemVar$org_jmol_script_SV(this.xStack[i]));

if (this.lastAssignedString != null ) {
result.removeItemAt$I(0);
result.add$I$O(0, this.lastAssignedString);
this.lastAssignedString.intValue=this.xStack[0].intValue;
}return $I$(2).newV$I$O(135198, result);
}if (this.xPt == 0) {
var x=this.xStack[0];
if (this.chk) {
if (this.asBitSet) return $I$(2,"newV$I$O",[10, Clazz.new_($I$(5,1))]);
return x;
}if (x.tok == 10 || x.tok == 7  || x.tok == 15  || x.tok == 4  || x.tok == 11  || x.tok == 12 ) x=$I$(2).selectItemVar$org_jmol_script_SV(x);
if (this.asBitSet && x.tok == 7 ) x=$I$(2,"newV$I$O",[10, $I$(2).unEscapeBitSetArray$javajs_util_Lst$Z(x.value, false)]);
return x;
}}if (!this.allowUnderflow && (this.xPt >= 0 || this.oPt >= 0 ) ) this.eval.invArg$();
return null;
});

Clazz.newMeth(C$, 'putX$org_jmol_script_SV', function (x) {
if (this.skipping) return;
if (this.wasX) {
try {
this.addOp$org_jmol_script_T($I$(1).tokenComma);
} catch (e) {
if (Clazz.exceptionOf(e,"org.jmol.script.ScriptException")){
} else {
throw e;
}
}
}if (++this.xPt == this.xStack.length) this.xStack=$I$(6).doubleLength$O(this.xStack);
if (this.xPt < 0) System.out.println$S("testing scriptemaafe");
this.xStack[this.xPt]=x;
this.ptx=++this.ptid;
if (this.debugHigh) {
$I$(3,"debug$S",["\nputx= " + x + " ptx=" + this.ptid ]);
}}, p$1);

Clazz.newMeth(C$, 'putOp$org_jmol_script_T', function (op) {
if (++this.oPt >= this.oStack.length) this.oStack=$I$(6).doubleLength$O(this.oStack);
this.oStack[this.oPt]=op;
this.pto=++this.ptid;
if (this.debugHigh) {
$I$(3,"debug$S",["\nputop=" + op + " pto=" + this.ptid ]);
}}, p$1);

Clazz.newMeth(C$, 'putIf$C', function (c) {
if (++this.ifPt >= this.ifStack.length) this.ifStack=$I$(6).doubleLength$O(this.ifStack);
this.ifStack[this.ifPt]=c;
}, p$1);

Clazz.newMeth(C$, 'addXCopy$org_jmol_script_SV', function (x) {
switch (x.tok) {
case 2:
x=$I$(2).newI$I(x.intValue);
break;
case 3:
x=$I$(2).newV$I$O(3, x.value);
break;
}
return this.addX$org_jmol_script_SV(x);
});

Clazz.newMeth(C$, 'addX$org_jmol_script_SV', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [x]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXObj$O', function (x) {
var v=$I$(2).getVariable$O(x);
if (v == null ) return false;
p$1.putX$org_jmol_script_SV.apply(this, [v]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXStr$S', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).newS$S(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXBool$Z', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).getBoolean$Z(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXInt$I', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).newI$I(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXList$javajs_util_Lst', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).getVariableList$javajs_util_Lst(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXMap$java_util_Map', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).getVariableMap$java_util_Map(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXM3$javajs_util_M3', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).newV$I$O(11, x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXM4$javajs_util_M4', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).newV$I$O(12, x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXFloat$F', function (x) {
if (Float.isNaN$F(x)) return this.addXStr$S("NaN");
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).newF$F(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXBs$javajs_util_BS', function (bs) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).newV$I$O(10, bs)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXPt$javajs_util_P3', function (pt) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).newV$I$O(8, pt)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXPt4$javajs_util_P4', function (pt) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).newV$I$O(9, pt)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXNum$org_jmol_script_T', function (x) {
var v;
if (Clazz.instanceOf(x, "org.jmol.script.SV")) {
v=x;
} else {
switch (x.tok) {
case 3:
if (this.wasX) {
var f=(x.value).floatValue$();
if (f < 0  || f == 0  && 1 / f == -Infinity   ) {
this.addOp$org_jmol_script_T($I$(1).tokenMinus);
v=$I$(2).newF$F(-f);
break;
}}v=$I$(2).newV$I$O(3, x.value);
break;
default:
var iv=x.intValue;
if (this.wasX && iv < 0 ) {
this.addOp$org_jmol_script_T($I$(1).tokenMinus);
iv=-iv;
}v=$I$(2).newI$I(iv);
break;
}
}p$1.putX$org_jmol_script_SV.apply(this, [v]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXAV$org_jmol_script_SVA', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).getVariableAV$org_jmol_script_SVA(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXAD$DA', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).getVariableAD$DA(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXAS$SA', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).getVariableAS$SA(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXAI$IA', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).getVariableAI$IA(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXAII$IAA', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).getVariableAII$IAA(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXAF$FA', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).getVariableAF$FA(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'addXAFF$FAA', function (x) {
p$1.putX$org_jmol_script_SV.apply(this, [$I$(2).getVariableAFF$FAA(x)]);
return this.wasX=true;
});

Clazz.newMeth(C$, 'isOpFunc$org_jmol_script_T', function (op) {
return (op != null  && ($I$(1).tokAttr$I$I(op.tok, 134217728) && op !== $I$(1).tokenArraySquare   || op.tok == 268435665 && $I$(1).tokAttr$I$I(op.intValue, 134217728)  ) );
}, 1);

Clazz.newMeth(C$, 'addOp$org_jmol_script_T', function (op) {
return this.addOpAllowMath$org_jmol_script_T$Z$I(op, true, 0);
});

Clazz.newMeth(C$, 'addOpAllowMath$org_jmol_script_T$Z$I', function (op, allowMathFunc, tokNext) {
if (this.debugHigh) {
this.dumpStacks$S("adding " + op + " wasx=" + this.wasX );
}var tok0=(this.oPt >= 0 && this.oStack[this.oPt] != null   ? this.oStack[this.oPt].tok : 0);
this.skipping=(this.ifPt >= 0 && (this.ifStack[this.ifPt] == "F" || this.ifStack[this.ifPt] == "X" ) );
if (this.skipping) return p$1.checkSkip$org_jmol_script_T$I.apply(this, [op, tok0]);
var tok;
var isDotSelector=(op.tok == 268435665);
if (isDotSelector && !this.wasX ) return false;
var isMathFunc=(allowMathFunc && C$.isOpFunc$org_jmol_script_T(op) );
if (this.oPt >= 1 && op.tok != 268435472  && tok0 == 134217750 ) tok0=this.oStack[--this.oPt].tok;
var newOp=null;
var isLeftOp=false;
switch (op.tok) {
case 1073742195:
this.haveSpaceBeforeSquare=true;
return true;
case 268435504:
if (!this.wasX) return false;
break;
case 268435649:
case 268435650:
if (this.wasX && op.intValue == -1  && this.addOp$org_jmol_script_T($I$(1).tokenComma) ) return this.addOp$org_jmol_script_T(op);
break;
case 268435521:
break;
case 268435473:
if (!this.wasX && this.oPt >= 1  && tok0 == 268435472  && !C$.isOpFunc$org_jmol_script_T(this.oStack[this.oPt - 1]) ) return false;
break;
case 268435616:
if (!this.wasX) op=$I$(2).newV$I$O(268435648, "-");
break;
case 32:
case 64:
case 96:
case 128:
case 160:
case 192:
case 480:
tok=(this.oPt < 0 ? 0 : tok0);
if (!this.wasX || !(tok == 268435665 || tok == 1677721602  || tok == 1140850689 ) ) return false;
this.oStack[this.oPt].intValue|=op.tok;
return true;
case 268435520:
isLeftOp=true;
if (!this.wasX || this.haveSpaceBeforeSquare ) {
this.squareCount++;
op=newOp=$I$(1).tokenArraySquare;
this.haveSpaceBeforeSquare=false;
}break;
case 268435568:
case 268435472:
isLeftOp=true;
default:
if (isMathFunc) {
var isArgument=(this.oPt >= 1 && tok0 == 268435472 );
if (isDotSelector) {
if (tokNext == 268435472) {
if (this.xStack[this.xPt].tok == 6) return false;
}} else if (this.wasX && !isArgument ) {
return false;
}newOp=op;
isLeftOp=true;
break;
}if (this.wasX == isLeftOp  && tok0 != 268435665 ) {
if (!this.wasX || !allowMathFunc ) return false;
if (this.addOp$org_jmol_script_T($I$(1).tokenComma)) return this.addOp$org_jmol_script_T(op);
}break;
}
while (this.oPt >= 0 && tok0 != 268435490  && (op.tok != 268435649 && op.tok != 268435650  || this.wasX )  && (!isLeftOp || tok0 == 268435665 && (op.tok == 268435665 || op.tok == 268435520 )  )  && $I$(1).getPrecedence$I(tok0) >= $I$(1).getPrecedence$I(op.tok)  && (tok0 != 268435648 || op.tok != 268435648 ) ){
if (op.tok == 268435473 && tok0 == 268435472 ) {
if (this.xPt >= 0) this.xStack[this.xPt]=$I$(2).selectItemVar$org_jmol_script_SV(this.xStack[this.xPt]);
this.wasX=true;
break;
}if (op.tok == 268435521 && tok0 == 1275068418 ) {
break;
}if (op.tok == 268435521 && tok0 == 268435520 ) {
if (this.isArrayItem && this.squareCount == 1  && this.equalCount == 0 ) {
this.wasX=false;
this.addX$org_jmol_script_SV($I$(2,"newT$org_jmol_script_T",[$I$(1).tokenArrayOpen]));
break;
}if (!p$1.doSelection.apply(this, [])) return false;
this.wasX=true;
break;
}if (!p$1.operate.apply(this, [])) return false;
tok0=(this.oPt >= 0 && this.oStack[this.oPt] != null   ? this.oStack[this.oPt].tok : 0);
}
if (newOp != null ) {
this.wasX=false;
this.addX$org_jmol_script_SV($I$(2).newV$I$O(268435860, newOp));
}switch (op.tok) {
case 268435472:
this.parenCount++;
this.wasX=false;
break;
case 805306401:
var isFirst=this.getX$().asBoolean$();
if (tok0 == 268435490) this.ifPt--;
 else p$1.putOp$org_jmol_script_T.apply(this, [$I$(1).tokenColon]);
p$1.putIf$C.apply(this, [isFirst ? "T" : "F"]);
this.skipping=!isFirst;
this.wasX=false;
return true;
case 268435490:
if (tok0 != 268435490) return false;
if (this.ifPt < 0) return false;
this.ifStack[this.ifPt]="X";
this.wasX=false;
this.skipping=true;
return true;
case 268435473:
this.wasX=true;
if (this.parenCount-- <= 0) return false;
if (tok0 == 268435490) {
this.ifPt--;
this.oPt--;
}this.oPt--;
if (this.oPt < 0) return true;
if (C$.isOpFunc$org_jmol_script_T(this.oStack[this.oPt])) {
this.wasX=false;
if (!p$1.evaluateFunction$I.apply(this, [0])) return false;
}this.skipping=(this.ifPt >= 0 && this.ifStack[this.ifPt] == "X" );
return true;
case 268435504:
this.wasX=false;
return true;
case 268435520:
this.squareCount++;
this.wasX=false;
break;
case 268435521:
this.wasX=true;
if (this.squareCount-- <= 0 || this.oPt < 0  || !this.doSelections ) return !this.doSelections;
if (this.oStack[this.oPt].tok == 1275068418) return p$1.evaluateFunction$I.apply(this, [268435520]);
this.oPt--;
return true;
case 268435665:
this.wasX=(!allowMathFunc || !$I$(1).tokAttr$I$I(op.intValue, 134217728) );
break;
case 1073742332:
this.braceCount++;
this.wasX=false;
break;
case 1073742338:
if (this.braceCount-- <= 0) return false;
this.wasX=false;
break;
case 268435552:
case 268435536:
if (!this.wasSyntaxCheck && this.xPt < 0 ) return false;
if (!this.wasSyntaxCheck && this.xStack[this.xPt].tok != 10  && this.xStack[this.xPt].tok != 7 ) {
var tf=this.getX$().asBoolean$();
this.addX$org_jmol_script_SV($I$(2).getBoolean$Z(tf));
if (tf == (op.tok == 268435536) ) {
this.chk=true;
op=(op.tok == 268435536 ? $I$(1).tokenOrTRUE : $I$(1).tokenAndFALSE);
}}this.wasX=false;
break;
case 268435650:
case 268435649:
break;
case 268435860:
if (this.squareCount == 0) {
this.doSelections=true;
this.assignLeft=false;
this.equalCount++;
}this.wasX=false;
break;
default:
this.wasX=false;
}
p$1.putOp$org_jmol_script_T.apply(this, [op]);
switch (op.tok) {
case 268435665:
return (((op.intValue & ~480) == 134320141 && op.intValue != 134320141 ) ? p$1.evaluateFunction$I.apply(this, [0]) : true);
case 268435650:
case 268435649:
return (this.wasX ? p$1.operate.apply(this, []) : true);
}
return true;
});

Clazz.newMeth(C$, 'checkSkip$org_jmol_script_T$I', function (op, tok0) {
switch (op.tok) {
case 268435472:
p$1.putOp$org_jmol_script_T.apply(this, [op]);
break;
case 268435490:
if (tok0 != 268435490 || this.ifStack[this.ifPt] == "X" ) break;
this.ifStack[this.ifPt]="T";
this.wasX=false;
this.skipping=false;
break;
case 268435473:
if (tok0 == 268435472) {
this.oPt--;
break;
}if (tok0 != 268435490) {
p$1.putOp$org_jmol_script_T.apply(this, [op]);
break;
}this.wasX=true;
this.ifPt--;
this.oPt-=2;
this.skipping=false;
break;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'doSelection', function () {
if (this.xPt < 0 || this.xPt == 0 && !this.isArrayItem  ) {
return false;
}var var1=this.xStack[this.xPt--];
var $var=this.xStack[this.xPt];
if (($var.tok == 7 || $var.tok == 15 ) && $var.intValue != 2147483647 ) if (var1.tok == 4 || this.assignLeft && this.squareCount == 1  ) {
this.xStack[this.xPt]=$var=$I$(2).selectItemTok$org_jmol_script_T$I($var, -2147483648);
}if (this.assignLeft && $var.tok != 4 ) this.lastAssignedString=null;
switch ($var.tok) {
case 6:
case 14:
if (this.doSelections) {
var v=$var.mapValue$S($I$(2).sValue$org_jmol_script_T(var1));
this.xStack[this.xPt]=(v == null  ? $I$(2).newS$S("") : v);
} else {
this.xPt++;
p$1.putOp$org_jmol_script_T.apply(this, [null]);
}return true;
default:
$var=$I$(2,"newS$S",[$I$(2).sValue$org_jmol_script_T($var)]);
case 10:
case 15:
case 7:
case 4:
case 11:
case 12:
if (this.doSelections || $var.tok == 7 && $var.intValue == 2147483647  ) {
this.xStack[this.xPt]=$I$(2,"selectItemTok$org_jmol_script_T$I",[$var, var1.asInt$()]);
if (this.assignLeft && $var.tok == 4  && this.squareCount == 1 ) this.lastAssignedString=$var;
} else {
this.xPt++;
}if (!this.doSelections) p$1.putOp$org_jmol_script_T.apply(this, [null]);
break;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'dumpStacks$S', function (message) {
$I$(3).debug$S("\n\n------------------\nRPN stacks: " + message + "\n" );
for (var i=0; i <= this.xPt; i++) $I$(3).debug$S("x[" + i + "]: " + this.xStack[i] );

$I$(3).debug$S("\n");
for (var i=0; i <= this.oPt; i++) $I$(3,"debug$S",["o[" + i + "]: " + this.oStack[i] + " prec=" + (this.oStack[i] == null  ? "--" : "" + $I$(1).getPrecedence$I(this.oStack[i].tok)) ]);

$I$(3,"debug$S",[" ifStack = " + ( String.instantialize(this.ifStack)).substring$I$I(0, this.ifPt + 1)]);
});

Clazz.newMeth(C$, 'getX$', function () {
if (this.xPt < 0) this.eval.error$I(13);
var v=$I$(2).selectItemVar$org_jmol_script_SV(this.xStack[this.xPt]);
this.xStack[this.xPt--]=null;
this.wasX=false;
return v;
});

Clazz.newMeth(C$, 'getXTok$', function () {
return (this.xPt < 0 ? 0 : this.xStack[this.xPt].tok);
});

Clazz.newMeth(C$, 'evaluateFunction$I', function (tok) {
var op=this.oStack[this.oPt--];
if (tok == 0) tok=(op.tok == 268435665 ? op.intValue & ~480 : op.tok);
var nParamMax=$I$(1).getMaxMathParams$I(tok);
var nParam=0;
var pt=this.xPt;
while (pt >= 0 && this.xStack[pt--].value !== op  )nParam++;

if (nParamMax > 0 && nParam > nParamMax ) return false;
var args=Clazz.array($I$(2), [nParam]);
for (var i=nParam; --i >= 0; ) args[i]=this.getX$();

this.xPt--;
if (!this.chk) return this.eval.getMathExt$().evaluate$org_jmol_script_ScriptMathProcessor$org_jmol_script_T$org_jmol_script_SVA$I(this, op, args, tok);
if (op.tok == 268435665) this.xPt--;
if (this.xPt < 0) this.xPt=0;
switch (tok) {
case 134217736:
case 1275203608:
case 134218756:
case 134218757:
case 134217759:
case 134353926:
return this.addXBs$javajs_util_BS(Clazz.new_($I$(5,1)));
}
return this.addXBool$Z(true);
}, p$1);

Clazz.newMeth(C$, 'operate', function () {
var op=this.oStack[this.oPt--];
var pt;
var m;
var m4;
var s;
var x1;
if (this.debugHigh) {
this.dumpStacks$S("operate: " + op);
}if (op.tok == 268435860 && (this.isArrayItem && this.squareCount == 0  && this.equalCount == 1  && this.oPt < 0  || this.oPt >= 0 && this.oStack[this.oPt] == null   ) ) return true;
var x2;
switch (op.tok) {
case 268435649:
case 268435650:
if (this.xPt >= 0 && this.xStack[this.xPt].canIncrement$() ) {
x2=this.xStack[this.xPt--];
this.wasX=false;
break;
}default:
x2=this.getX$();
break;
}
if (x2 === $I$(1).tokenArrayOpen ) return false;
switch (op.tok) {
case 268435649:
case 268435650:
x1=x2;
if (!this.chk) {
if (this.ptx < this.pto) {
x1=$I$(2).newS$S("").setv$org_jmol_script_SV(x2);
}if (!x2.increment$I(op.tok == 268435650 ? 1 : -1)) return false;
if (this.ptx > this.pto) {
x1=$I$(2).newS$S("").setv$org_jmol_script_SV(x2);
}}this.wasX=false;
p$1.putX$org_jmol_script_SV.apply(this, [x1]);
this.wasX=true;
return true;
case 268435648:
switch (x2.tok) {
case 2:
return this.addXInt$I(-x2.asInt$());
case 8:
pt=$I$(7).newP$javajs_util_T3(x2.value);
pt.scale$F(-1.0);
return this.addXPt$javajs_util_P3(pt);
case 9:
var pt4=$I$(8).newPt$javajs_util_P4(x2.value);
pt4.scale4$F(-1.0);
return this.addXPt4$javajs_util_P4(pt4);
case 11:
m=$I$(9).newM3$javajs_util_M3(x2.value);
m.invert$();
return this.addXM3$javajs_util_M3(m);
case 12:
m4=$I$(10).newM4$javajs_util_M4(x2.value);
m4.invert$();
return this.addXM4$javajs_util_M4(m4);
case 10:
return this.addXBs$javajs_util_BS($I$(11,"copyInvert$javajs_util_BS$I",[x2.value, (Clazz.instanceOf(x2.value, "org.jmol.modelset.BondSet") ? this.vwr.ms.bondCount : this.vwr.ms.ac)]));
}
return this.addXFloat$F(-x2.asFloat$());
case 268435568:
if (this.chk) return this.addXBool$Z(true);
switch (x2.tok) {
case 9:
return this.addXPt4$javajs_util_P4(($I$(12).newP4$javajs_util_P4(x2.value)).inv$().toPoint4f$());
case 11:
m=$I$(9).newM3$javajs_util_M3(x2.value);
m.invert$();
return this.addXM3$javajs_util_M3(m);
case 12:
return this.addXM4$javajs_util_M4($I$(10).newM4$javajs_util_M4(x2.value).invert$());
case 10:
return this.addXBs$javajs_util_BS($I$(11,"copyInvert$javajs_util_BS$I",[x2.value, (Clazz.instanceOf(x2.value, "org.jmol.modelset.BondSet") ? this.vwr.ms.bondCount : this.vwr.ms.ac)]));
default:
return this.addXBool$Z(!x2.asBoolean$());
}
case 268435665:
var iv=(op.intValue == 805306401 ? 805306401 : op.intValue & ~480);
if (this.chk) return this.addXObj$O($I$(2).newS$S(""));
if (this.vwr.allowArrayDotNotation) switch (x2.tok) {
case 6:
case 14:
switch (iv) {
case 1275068418:
case 1140850706:
case 1140850694:
case 1140850696:
break;
default:
var ret=x2.mapValue$S(op.value);
return this.addXObj$O(ret == null  ? $I$(2).newS$S("") : ret);
}
break;
}
switch (iv) {
case 1275068418:
return this.addX$org_jmol_script_SV(x2.toArray$());
case 805306401:
case 1073741824:
return (x2.tok == 10 && (this.chk ? this.addXStr$S("") : p$1.getAllProperties$org_jmol_script_SV$S.apply(this, [x2, op.value])) );
case 1140850696:
return this.addXStr$S(C$.typeOf$org_jmol_script_SV(x2));
case 1140850706:
var keys=x2.getKeys$Z((op.intValue & 480) == 480);
return (keys == null  ? this.addXStr$S("") : this.addXAS$SA(keys));
case 1140850691:
case 1275068425:
case 1140850694:
if (iv == 1140850691 && Clazz.instanceOf(x2.value, "org.jmol.modelset.BondSet") ) break;
return this.addXInt$I($I$(2).sizeOf$org_jmol_script_T(x2));
case 1140850692:
switch (x2.tok) {
case 11:
case 12:
s=$I$(2).sValue$org_jmol_script_T(x2);
s=$I$(13,"rep$S$S$S",[s.substring$I$I(1, s.length$() - 1), "],[", "]\n["]);
break;
case 4:
s=x2.value;
break;
default:
s=$I$(2).sValue$org_jmol_script_T(x2);
}
s=$I$(13).rep$S$S$S(s, "\n\r", "\n").replace$C$C("\r", "\n");
return this.addXAS$SA($I$(13).split$S$S(s, "\n"));
case 1765808134:
switch (x2.tok) {
case 4:
case 7:
return this.addXPt$javajs_util_P3($I$(14,"colorPtFromString$S",[$I$(2).sValue$org_jmol_script_T(x2)]));
case 2:
case 3:
return this.addXPt$javajs_util_P3(this.vwr.getColorPointForPropertyValue$F($I$(2).fValue$org_jmol_script_T(x2)));
case 8:
return this.addXStr$S($I$(15,"escapeColor$I",[$I$(14).colorPtToFFRGB$javajs_util_T3(x2.value)]));
default:
}
break;
case 1678381065:
return (this.chk ? this.addXStr$S("x") : p$1.getBoundBox$org_jmol_script_SV.apply(this, [x2]));
}
if (this.chk) return this.addXStr$S($I$(2).sValue$org_jmol_script_T(x2));
if (x2.tok == 4) {
var v=$I$(2,"unescapePointOrBitsetAsVariable$O",[$I$(2).sValue$org_jmol_script_T(x2)]);
if (!(Clazz.instanceOf(v, "org.jmol.script.SV"))) return false;
x2=v;
}if (op.tok == x2.tok) x2=this.getX$();
return p$1.getPointOrBitsetOperation$org_jmol_script_T$org_jmol_script_SV.apply(this, [op, x2]);
}
x1=this.getX$();
if (this.chk) {
if (op === $I$(1).tokenAndFALSE  || op === $I$(1).tokenOrTRUE  ) this.chk=false;
return this.addX$org_jmol_script_SV($I$(2).newT$org_jmol_script_T(x1));
}return this.binaryOp$org_jmol_script_T$org_jmol_script_SV$org_jmol_script_SV(op, x1, x2);
}, p$1);

Clazz.newMeth(C$, 'binaryOp$org_jmol_script_T$org_jmol_script_SV$org_jmol_script_SV', function (op, x1, x2) {
var pt;
var pt4;
var m;
var s;
var f;
switch (op.tok) {
case 268435584:
case 268435552:
switch (x1.tok) {
case 10:
var bs=x1.value;
switch (x2.tok) {
case 2:
var x=x2.asInt$();
return (this.addXBool$Z(x < 0 ? false : bs.get$I(x)));
case 10:
bs=$I$(11).copy$javajs_util_BS(bs);
bs.and$javajs_util_BS(x2.value);
return this.addXBs$javajs_util_BS(bs);
}
break;
}
return this.addXBool$Z(x1.asBoolean$() && x2.asBoolean$() );
case 268435536:
switch (x1.tok) {
case 10:
var bs=$I$(11).copy$javajs_util_BS(x1.value);
switch (x2.tok) {
case 10:
bs.or$javajs_util_BS(x2.value);
return this.addXBs$javajs_util_BS(bs);
case 2:
var x=x2.asInt$();
if (x < 0) break;
bs.set$I(x);
return this.addXBs$javajs_util_BS(bs);
case 7:
var sv=x2.value;
for (var i=sv.size$(); --i >= 0; ) {
var b=sv.get$I(i).asInt$();
if (b >= 0) bs.set$I(b);
}
return this.addXBs$javajs_util_BS(bs);
}
break;
case 7:
return this.addX$org_jmol_script_SV($I$(2).concatList$org_jmol_script_SV$org_jmol_script_SV$Z(x1, x2, false));
}
return this.addXBool$Z(x1.asBoolean$() || x2.asBoolean$() );
case 268435537:
if (x1.tok == 10 && x2.tok == 10 ) {
var bs=$I$(11).copy$javajs_util_BS(x1.value);
bs.xor$javajs_util_BS(x2.value);
return this.addXBs$javajs_util_BS(bs);
}var a=x1.asBoolean$();
var b=x2.asBoolean$();
return this.addXBool$Z(a && !b  || b && !a  );
case 268435538:
if (x1.tok != 10 || x2.tok != 10 ) return false;
return this.addXBs$javajs_util_BS($I$(11,"toggleInPlace$javajs_util_BS$javajs_util_BS",[$I$(11).copy$javajs_util_BS(x1.value), x2.value]));
case 268435858:
return this.addXBool$Z(x1.asFloat$() <= x2.asFloat$() );
case 268435857:
return this.addXBool$Z(x1.asFloat$() >= x2.asFloat$() );
case 268435856:
return this.addXBool$Z(x1.asFloat$() > x2.asFloat$() );
case 268435859:
return this.addXBool$Z(x1.asFloat$() < x2.asFloat$() );
case 268435860:
return this.addXBool$Z($I$(2).areEqual$org_jmol_script_SV$org_jmol_script_SV(x1, x2));
case 268435861:
return this.addXBool$Z(!$I$(2).areEqual$org_jmol_script_SV$org_jmol_script_SV(x1, x2));
case 268435862:
return this.addXBool$Z($I$(2).isLike$org_jmol_script_SV$org_jmol_script_SV(x1, x2));
case 268435617:
switch (x1.tok) {
case 6:
var ht=Clazz.new_($I$(16,1).c$$java_util_Map,[x1.value]);
var map=x2.getMap$();
if (map != null ) ht.putAll$java_util_Map(map);
return this.addX$org_jmol_script_SV($I$(2).getVariableMap$java_util_Map(ht));
case 2:
if (!p$1.isDecimal$org_jmol_script_SV.apply(this, [x2])) return this.addXInt$I(x1.intValue + x2.asInt$());
break;
case 4:
return this.addX$org_jmol_script_SV($I$(2,"newS$S",[$I$(2).sValue$org_jmol_script_T(x1) + $I$(2).sValue$org_jmol_script_T(x2)]));
case 8:
pt=$I$(7).newP$javajs_util_T3(x1.value);
switch (x2.tok) {
case 8:
pt.add$javajs_util_T3(x2.value);
return this.addXPt$javajs_util_P3(pt);
case 9:
pt4=x2.value;
pt.add$javajs_util_T3($I$(7).new3$F$F$F(pt4.x, pt4.y, pt4.z));
return this.addXPt$javajs_util_P3(pt);
default:
f=x2.asFloat$();
return this.addXPt$javajs_util_P3($I$(7).new3$F$F$F(pt.x + f, pt.y + f, pt.z + f));
}
case 11:
switch (x2.tok) {
default:
return this.addXFloat$F(x1.asFloat$() + x2.asFloat$());
case 11:
m=$I$(9).newM3$javajs_util_M3(x1.value);
m.add$javajs_util_M3(x2.value);
return this.addXM3$javajs_util_M3(m);
case 8:
return this.addXM4$javajs_util_M4(C$.getMatrix4f$javajs_util_M3$javajs_util_T3(x1.value, x2.value));
}
case 9:
var q1=$I$(12).newP4$javajs_util_P4(x1.value);
switch (x2.tok) {
default:
return this.addXPt4$javajs_util_P4(q1.add$F(x2.asFloat$()).toPoint4f$());
case 9:
return this.addXPt4$javajs_util_P4(q1.mulQ$javajs_util_Quat($I$(12).newP4$javajs_util_P4(x2.value)).toPoint4f$());
}
case 7:
return this.addX$org_jmol_script_SV($I$(2).concatList$org_jmol_script_SV$org_jmol_script_SV$Z(x1, x2, true));
}
return this.addXFloat$F(x1.asFloat$() + x2.asFloat$());
case 268435616:
switch (x1.tok) {
case 2:
if (!p$1.isDecimal$org_jmol_script_SV.apply(this, [x2])) return this.addXInt$I(x1.intValue - x2.asInt$());
break;
case 4:
if (!p$1.isDecimal$org_jmol_script_SV.apply(this, [x2]) && !p$1.isDecimal$org_jmol_script_SV.apply(this, [x1]) ) return this.addXInt$I(x1.asInt$() - x2.asInt$());
break;
case 6:
var ht=Clazz.new_($I$(16,1).c$$java_util_Map,[x1.value]);
ht.remove$O($I$(2).sValue$org_jmol_script_T(x2));
return this.addX$org_jmol_script_SV($I$(2).getVariableMap$java_util_Map(ht));
case 11:
if (x2.tok != 11) break;
m=$I$(9).newM3$javajs_util_M3(x1.value);
m.sub$javajs_util_M3(x2.value);
return this.addXM3$javajs_util_M3(m);
case 12:
if (x2.tok != 12) break;
var m4=$I$(10).newM4$javajs_util_M4(x1.value);
m4.sub$javajs_util_M4(x2.value);
return this.addXM4$javajs_util_M4(m4);
case 8:
pt=$I$(7).newP$javajs_util_T3(x1.value);
switch (x2.tok) {
case 8:
pt.sub$javajs_util_T3(x2.value);
return this.addXPt$javajs_util_P3(pt);
case 9:
pt4=x2.value;
pt.sub$javajs_util_T3($I$(7).new3$F$F$F(pt4.x, pt4.y, pt4.z));
return this.addXPt$javajs_util_P3(pt);
}
f=x2.asFloat$();
return this.addXPt$javajs_util_P3($I$(7).new3$F$F$F(pt.x - f, pt.y - f, pt.z - f));
case 9:
var q1=$I$(12).newP4$javajs_util_P4(x1.value);
if (x2.tok == 9) {
var q2=$I$(12).newP4$javajs_util_P4(x2.value);
return this.addXPt4$javajs_util_P4(q2.mulQ$javajs_util_Quat(q1.inv$()).toPoint4f$());
}return this.addXPt4$javajs_util_P4(q1.add$F(-x2.asFloat$()).toPoint4f$());
}
return this.addXFloat$F(x1.asFloat$() - x2.asFloat$());
case 1275068930:
if (x1.tok == 8 && x2.tok == 8 ) {
pt=x1.value;
var pt2=x2.value;
return this.addXPt$javajs_util_P3($I$(7).new3$F$F$F(pt.x * pt2.x, pt.y * pt2.y, pt.z * pt2.z));
}case 268435633:
switch (x1.tok) {
case 2:
return (p$1.isDecimal$org_jmol_script_SV.apply(this, [x2]) ? this.addXFloat$F(x1.intValue * x2.asFloat$()) : this.addXInt$I(x1.intValue * x2.asInt$()));
case 4:
return (p$1.isDecimal$org_jmol_script_SV.apply(this, [x2]) || p$1.isDecimal$org_jmol_script_SV.apply(this, [x1])  ? this.addXFloat$F(x1.asFloat$() * x2.asFloat$()) : this.addXInt$I(x1.asInt$() * x2.asInt$()));
}
pt=(x1.tok == 11 || x1.tok == 12  ? this.ptValue$org_jmol_script_SV$javajs_util_BS(x2, null) : x2.tok == 11 ? this.ptValue$org_jmol_script_SV$javajs_util_BS(x1, null) : null);
pt4=(x1.tok == 12 ? this.planeValue$org_jmol_script_T(x2) : x2.tok == 12 ? this.planeValue$org_jmol_script_T(x1) : null);
switch (x2.tok) {
case 11:
if (pt != null ) {
var m3b=$I$(9).newM3$javajs_util_M3(x2.value);
m3b.transpose$();
var pt1=$I$(7).newP$javajs_util_T3(pt);
m3b.rotate$javajs_util_T3(pt1);
return (x1.tok == 7 ? this.addX$org_jmol_script_SV($I$(2,"getVariableAF$FA",[Clazz.array(Float.TYPE, -1, [pt1.x, pt1.y, pt1.z])])) : this.addXPt$javajs_util_P3(pt1));
}if (pt4 != null ) return this.addXPt4$javajs_util_P4(($I$(12).newP4$javajs_util_P4(pt4).mulQ$javajs_util_Quat($I$(12).newM$javajs_util_M3(x2.value))).toPoint4f$());
break;
case 12:
if (pt4 != null ) {
var m4b=$I$(10).newM4$javajs_util_M4(x2.value);
m4b.transpose$();
var pt41=$I$(8).newPt$javajs_util_P4(pt4);
m4b.transform$javajs_util_T4(pt41);
return (x1.tok == 7 ? this.addX$org_jmol_script_SV($I$(2,"getVariableAF$FA",[Clazz.array(Float.TYPE, -1, [pt41.x, pt41.y, pt41.z, pt41.w])])) : this.addXPt4$javajs_util_P4(pt41));
}break;
}
switch (x1.tok) {
case 11:
var m3=x1.value;
if (pt != null ) {
var pt1=$I$(7).newP$javajs_util_T3(pt);
m3.rotate$javajs_util_T3(pt1);
return (x2.tok == 7 ? this.addX$org_jmol_script_SV($I$(2,"getVariableAF$FA",[Clazz.array(Float.TYPE, -1, [pt1.x, pt1.y, pt1.z])])) : this.addXPt$javajs_util_P3(pt1));
}switch (x2.tok) {
case 11:
m=$I$(9).newM3$javajs_util_M3(x2.value);
m.mul2$javajs_util_M3$javajs_util_M3(m3, m);
return this.addXM3$javajs_util_M3(m);
case 9:
return this.addXM3$javajs_util_M3($I$(12).newM$javajs_util_M3(m3).mulQ$javajs_util_Quat($I$(12).newP4$javajs_util_P4(x2.value)).getMatrix$());
}
f=x2.asFloat$();
var aa=Clazz.new_($I$(17,1));
aa.setM$javajs_util_M3(m3);
aa.angle *= f;
return this.addXM3$javajs_util_M3(Clazz.new_($I$(9,1)).setAA$javajs_util_A4(aa));
case 12:
var m4=x1.value;
if (pt != null ) {
var pt1=$I$(7).newP$javajs_util_T3(pt);
m4.rotTrans$javajs_util_T3(pt1);
return (x2.tok == 7 ? this.addX$org_jmol_script_SV($I$(2,"getVariableAF$FA",[Clazz.array(Float.TYPE, -1, [pt1.x, pt1.y, pt1.z])])) : this.addXPt$javajs_util_P3(pt1));
}if (pt4 != null ) {
m4.transform$javajs_util_T4(pt4);
return (x2.tok == 7 ? this.addX$org_jmol_script_SV($I$(2,"getVariableAF$FA",[Clazz.array(Float.TYPE, -1, [pt4.x, pt4.y, pt4.z, pt4.w])])) : this.addXPt4$javajs_util_P4(pt4));
}if (x2.tok == 12) {
var m4b=$I$(10).newM4$javajs_util_M4(x2.value);
m4b.mul2$javajs_util_M4$javajs_util_M4(m4, m4b);
return this.addXM4$javajs_util_M4(m4b);
}return this.addXStr$S("NaN");
case 8:
pt=$I$(7).newP$javajs_util_T3(x1.value);
switch (x2.tok) {
case 8:
var pt2=(x2.value);
return this.addXFloat$F(pt.x * pt2.x + pt.y * pt2.y + pt.z * pt2.z);
}
f=x2.asFloat$();
return this.addXPt$javajs_util_P3($I$(7).new3$F$F$F(pt.x * f, pt.y * f, pt.z * f));
case 9:
if (x2.tok == 9) return this.addXPt4$javajs_util_P4($I$(12).newP4$javajs_util_P4(x1.value).mulQ$javajs_util_Quat($I$(12).newP4$javajs_util_P4(x2.value)).toPoint4f$());
return this.addXPt4$javajs_util_P4($I$(12).newP4$javajs_util_P4(x1.value).mul$F(x2.asFloat$()).toPoint4f$());
}
return this.addXFloat$F(x1.asFloat$() * x2.asFloat$());
case 268435632:
var f2;
switch (x1.tok) {
case 2:
if (x2.tok == 2 && x2.intValue != 0 ) return this.addXInt$I((x1.intValue/x2.intValue|0));
var n=(p$1.isDecimal$org_jmol_script_SV.apply(this, [x2]) ? 0 : x2.asInt$());
if (n != 0) return this.addXInt$I((x1.intValue/n|0));
break;
case 4:
var i2;
if (!p$1.isDecimal$org_jmol_script_SV.apply(this, [x1]) && !p$1.isDecimal$org_jmol_script_SV.apply(this, [x2]) && (i2=x2.asInt$()) != 0  ) return this.addXInt$I((x1.asInt$()/i2|0));
break;
case 8:
pt=$I$(7).newP$javajs_util_T3(x1.value);
return this.addXPt$javajs_util_P3((f2=x2.asFloat$()) == 0  ? $I$(7).new3$F$F$F(NaN, NaN, NaN) : $I$(7).new3$F$F$F(pt.x / f2, pt.y / f2, pt.z / f2));
case 9:
return this.addXPt4$javajs_util_P4(x2.tok == 9 ? $I$(12).newP4$javajs_util_P4(x1.value).div$javajs_util_Quat($I$(12).newP4$javajs_util_P4(x2.value)).toPoint4f$() : (f2=x2.asFloat$()) == 0  ? $I$(8).new4$F$F$F$F(NaN, NaN, NaN, NaN) : $I$(12).newP4$javajs_util_P4(x1.value).mul$F(1 / f2).toPoint4f$());
}
return this.addXFloat$F(x1.asFloat$() / x2.asFloat$());
case 268435635:
f=x2.asFloat$();
if (x1.tok == 9) {
return (f == 0  ? this.addXPt4$javajs_util_P4($I$(8).new4$F$F$F$F(NaN, NaN, NaN, NaN)) : x2.tok == 9 ? this.addXPt4$javajs_util_P4($I$(12).newP4$javajs_util_P4(x1.value).divLeft$javajs_util_Quat($I$(12).newP4$javajs_util_P4(x2.value)).toPoint4f$()) : this.addXPt4$javajs_util_P4($I$(12).newP4$javajs_util_P4(x1.value).mul$F(1 / f).toPoint4f$()));
}return this.addXInt$I(f == 0  ? 0 : (Math.floor(x1.asFloat$() / x2.asFloat$())|0));
case 268435651:
f=Math.pow(x1.asFloat$(), x2.asFloat$());
return (x1.tok == 2 && x2.tok == 2  ? this.addXInt$I((f|0)) : this.addXFloat$F(f));
case 268435634:
s=null;
var n=x2.asInt$();
switch (x1.tok) {
case 1073742335:
case 1073742334:
case 2:
default:
break;
case 3:
f=x1.asFloat$();
if (n == 0) return this.addXInt$I(Math.round(f));
s=$I$(18).formatDecimal$F$I(f, n);
return this.addXStr$S(s);
case 4:
s=x1.value;
return this.addXStr$S(n == 0 ? $I$(13).trim$S$S(s, "\n\t ") : n == 9999 ? s.toUpperCase$() : n == -9999 ? s.toLowerCase$() : n > 0 ? $I$(13).formatS$S$I$I$Z$Z(s, n, n, false, false) : $I$(13).formatS$S$I$I$Z$Z(s, n, n - 1, true, false));
case 7:
var list=$I$(2).strListValue$org_jmol_script_T(x1);
for (var i=0; i < list.length; i++) {
if (n == 0) list[i]=list[i].trim$();
 else if (n > 0) list[i]=$I$(13).formatS$S$I$I$Z$Z(list[i], n, n, true, false);
 else list[i]=$I$(13).formatS$S$I$I$Z$Z(s, -n, n, false, false);
}
return this.addXAS$SA(list);
case 8:
pt=$I$(7).newP$javajs_util_T3(x1.value);
this.vwr.toUnitCell$javajs_util_P3$javajs_util_P3(pt, $I$(7).new3$F$F$F(n, n, n));
return this.addXPt$javajs_util_P3(pt);
case 9:
pt4=x1.value;
if (x2.tok == 8) return this.addXPt$javajs_util_P3(($I$(12).newP4$javajs_util_P4(pt4)).transform2$javajs_util_T3$javajs_util_T3(x2.value, Clazz.new_($I$(7,1))));
if (x2.tok == 9) {
var v4=$I$(8).newPt$javajs_util_P4(x2.value);
($I$(12).newP4$javajs_util_P4(pt4)).getThetaDirected$javajs_util_P4(v4);
return this.addXPt4$javajs_util_P4(v4);
}if (n == 0 && x2.tok == 4 ) {
s=" " + x2.value.toString().trim$().toLowerCase$() + ":" ;
var i=" w:0 x:1 y:2 z:3 normal:4 eulerzxz:5 eulerzyz:6 vector:-1 theta:-2 axisx:-3 axisy:-4 axisz:-5 axisangle:-6 matrix:-9".indexOf$S(s);
n=(i >= 0 ? $I$(13,"parseInt$S",[" w:0 x:1 y:2 z:3 normal:4 eulerzxz:5 eulerzyz:6 vector:-1 theta:-2 axisx:-3 axisy:-4 axisz:-5 axisangle:-6 matrix:-9".substring$I(i + s.length$())]) : -99);
}switch (n) {
case 0:
return this.addXFloat$F(pt4.w);
case 1:
return this.addXFloat$F(pt4.x);
case 2:
return this.addXFloat$F(pt4.y);
case 3:
return this.addXFloat$F(pt4.z);
}
var q=$I$(12).newP4$javajs_util_P4(pt4);
switch (n) {
case 4:
return this.addXPt$javajs_util_P3($I$(7,"newP$javajs_util_T3",[q.getNormal$()]));
case 5:
return this.addXAF$FA(q.getEulerZXZ$());
case 6:
return this.addXAF$FA(q.getEulerZYZ$());
case -1:
return this.addXPt$javajs_util_P3($I$(7,"newP$javajs_util_T3",[q.getVector$I(-1)]));
case -2:
return this.addXFloat$F(q.getTheta$());
case -3:
return this.addXPt$javajs_util_P3($I$(7,"newP$javajs_util_T3",[q.getVector$I(0)]));
case -4:
return this.addXPt$javajs_util_P3($I$(7,"newP$javajs_util_T3",[q.getVector$I(1)]));
case -5:
return this.addXPt$javajs_util_P3($I$(7,"newP$javajs_util_T3",[q.getVector$I(2)]));
case -6:
var ax=q.toAxisAngle4f$();
return this.addXPt4$javajs_util_P4($I$(8,"new4$F$F$F$F",[ax.x, ax.y, ax.z, (ax.angle * 180 / 3.141592653589793)]));
case -9:
return this.addXM3$javajs_util_M3(q.getMatrix$());
default:
return this.addXStr$S("NaN");
}
case 12:
var m4=x1.value;
switch (n) {
case 1:
var m3=Clazz.new_($I$(9,1));
m4.getRotationScale$javajs_util_M3(m3);
return this.addXM3$javajs_util_M3(m3);
case 2:
var v3=Clazz.new_($I$(19,1));
m4.getTranslation$javajs_util_T3(v3);
return this.addXPt$javajs_util_P3($I$(7).newP$javajs_util_T3(v3));
default:
return false;
}
case 10:
return this.addXBs$javajs_util_BS($I$(2).bsSelectRange$org_jmol_script_T$I(x1, n));
}
return this.addXInt$I(n == 0 ? x1.asInt$() : x1.asInt$() % n);
}
return true;
});

Clazz.newMeth(C$, 'isDecimal$org_jmol_script_SV', function (x) {
var s;
return (x.tok == 3 || x.tok == 4 && ((s=$I$(2).sValue$org_jmol_script_T(x).trim$()).indexOf$S(".") >= 0 || s.indexOf$S("+") > 0  || s.lastIndexOf$S("-") > 0 )  );
}, p$1);

Clazz.newMeth(C$, 'ptValue$org_jmol_script_SV$javajs_util_BS', function (x, bsRestrict) {
var pt;
switch (x.tok) {
case 8:
return x.value;
case 10:
var bs=x.value;
if (bs.isEmpty$()) break;
if (bsRestrict != null ) {
bs=$I$(11).copy$javajs_util_BS(bs);
bs.and$javajs_util_BS(bsRestrict);
}return this.eval.getBitsetProperty$javajs_util_BS$javajs_util_Lst$I$javajs_util_P3$javajs_util_P4$O$O$Z$I$Z(bs, null, 1145047050, null, null, x.value, null, false, 2147483647, false);
case 4:
pt=$I$(15,"uP$S",[$I$(2).sValue$org_jmol_script_T(x)]);
if (Clazz.instanceOf(pt, "javajs.util.P3")) return pt;
break;
case 7:
pt=$I$(15,"uP$S",["{" + $I$(2).sValue$org_jmol_script_T(x).replace$C$C("]", " ").replace$C$C("[", " ") + "}" ]);
if (Clazz.instanceOf(pt, "javajs.util.P3")) return pt;
break;
}
return null;
});

Clazz.newMeth(C$, 'planeValue$org_jmol_script_T', function (x) {
switch (x.tok) {
case 9:
return x.value;
case 7:
case 4:
var pt=$I$(15,"uP$S",[$I$(2).sValue$org_jmol_script_T(x)]);
return (Clazz.instanceOf(pt, "javajs.util.P4") ? pt : null);
case 10:
break;
}
return null;
});

Clazz.newMeth(C$, 'typeOf$org_jmol_script_SV', function (x) {
var tok=(x == null  ? 0 : x.tok);
switch (tok) {
case 1073742335:
case 1073742334:
return "boolean";
case 10:
return (Clazz.instanceOf(x.value, "org.jmol.modelset.BondSet") ? "bondset" : "bitset");
case 2:
case 3:
case 8:
case 9:
case 4:
case 7:
case 6:
case 15:
case 11:
case 12:
case 14:
return $I$(1).astrType[tok];
}
return "?";
}, 1);

Clazz.newMeth(C$, 'getAllProperties$org_jmol_script_SV$S', function (x2, abbr) {
var bs=x2.value;
var tokens;
var n=bs.cardinality$();
if (n == 0 || !abbr.endsWith$S("?")  || (tokens=$I$(1,"getAtomPropertiesLike$S",[abbr.substring$I$I(0, abbr.length$() - 1)])) == null  ) return this.addXStr$S("");
var ht=Clazz.new_($I$(16,1));
var index=(n == 1 ? bs.nextSetBit$I(0) : 2147483647);
for (var i=tokens.size$(); --i >= 0; ) {
var t=tokens.get$I(i);
var tok=t.tok;
switch (tok) {
case 1094717448:
case 1094713349:
continue;
default:
if (index == 2147483647) tok|=480;
ht.put$O$O(t.value, $I$(2,"getVariable$O",[this.eval.getBitsetProperty$javajs_util_BS$javajs_util_Lst$I$javajs_util_P3$javajs_util_P4$O$O$Z$I$Z(bs, null, tok, null, null, null, null, false, index, true)]));
}
}
return this.addXMap$java_util_Map(ht);
}, p$1);

Clazz.newMeth(C$, 'getMatrix4f$javajs_util_M3$javajs_util_T3', function (matRotate, vTranslate) {
return $I$(10,"newMV$javajs_util_M3$javajs_util_T3",[matRotate, vTranslate == null  ? Clazz.new_($I$(19,1)) : $I$(19).newV$javajs_util_T3(vTranslate)]);
}, 1);

Clazz.newMeth(C$, 'getBoundBox$org_jmol_script_SV', function (x2) {
if (x2.tok != 10) return false;
var b=this.vwr.ms.getBoxInfo$javajs_util_BS$F(x2.value, 1);
var pts=b.getBoundBoxPoints$Z(true);
var list=Clazz.new_($I$(4,1));
for (var i=0; i < 4; i++) list.addLast$O(pts[i]);

return this.addXList$javajs_util_Lst(list);
}, p$1);

Clazz.newMeth(C$, 'getPointOrBitsetOperation$org_jmol_script_T$org_jmol_script_SV', function (op, x2) {
switch (x2.tok) {
case 7:
switch (op.intValue) {
case 32:
case 64:
case 96:
case 192:
case 128:
case 160:
case 1275068437:
return this.addXObj$O(this.eval.getMathExt$().getMinMax$O$I(x2.getList$(), op.intValue));
case 1275334681:
return this.addX$org_jmol_script_SV(x2.pushPop$org_jmol_script_SV$org_jmol_script_SV(null, null));
case 1275068444:
case 1140850693:
return this.addX$org_jmol_script_SV(x2.sortOrReverse$I(op.intValue == 1140850693 ? -2147483648 : 1));
}
var list2=Clazz.array($I$(2), [x2.getList$().size$()]);
for (var i=0; i < list2.length; i++) {
var v=$I$(2,"unescapePointOrBitsetAsVariable$O",[x2.getList$().get$I(i)]);
if (!(Clazz.instanceOf(v, "org.jmol.script.SV")) || !p$1.getPointOrBitsetOperation$org_jmol_script_T$org_jmol_script_SV.apply(this, [op, v]) ) return false;
list2[i]=this.xStack[this.xPt--];
}
return this.addXAV$org_jmol_script_SVA(list2);
case 8:
switch (op.intValue) {
case 1111492609:
case 1111492629:
return this.addXFloat$F((x2.value).x);
case 1111492610:
case 1111492630:
return this.addXFloat$F((x2.value).y);
case 1111492611:
case 1111492631:
return this.addXFloat$F((x2.value).z);
case 1145047050:
var pt=$I$(7).newP$javajs_util_T3(x2.value);
this.vwr.toCartesian$javajs_util_T3$Z(pt, false);
return this.addXPt$javajs_util_P3(pt);
case 1111492612:
case 1111492613:
case 1111492614:
case 1145047051:
var ptf=$I$(7).newP$javajs_util_T3(x2.value);
this.vwr.toFractional$javajs_util_T3$Z(ptf, false);
return (op.intValue == 1145047051 ? this.addXPt$javajs_util_P3(ptf) : this.addXFloat$F(op.intValue == 1111492612 ? ptf.x : op.intValue == 1111492613 ? ptf.y : ptf.z));
case 1111492615:
case 1111492616:
case 1111492617:
case 1145047053:
var ptfu=$I$(7).newP$javajs_util_T3(x2.value);
this.vwr.toFractional$javajs_util_T3$Z(ptfu, true);
return (op.intValue == 1145047053 ? this.addXPt$javajs_util_P3(ptfu) : this.addXFloat$F(op.intValue == 1111492615 ? ptfu.x : op.intValue == 1111492616 ? ptfu.y : ptfu.z));
case 1111490577:
case 1111490578:
case 1111490579:
case 1145045006:
var ptu=$I$(7).newP$javajs_util_T3(x2.value);
this.vwr.toUnitCell$javajs_util_P3$javajs_util_P3(ptu, null);
this.vwr.toFractional$javajs_util_T3$Z(ptu, false);
return (op.intValue == 1145045006 ? this.addXPt$javajs_util_P3(ptu) : this.addXFloat$F(op.intValue == 1111490577 ? ptu.x : op.intValue == 1111490578 ? ptu.y : ptu.z));
}
break;
case 9:
switch (op.intValue) {
case 1111492609:
case 1111492629:
return this.addXFloat$F((x2.value).x);
case 1111492610:
case 1111492630:
return this.addXFloat$F((x2.value).y);
case 1111492611:
case 1111492631:
return this.addXFloat$F((x2.value).z);
case 1140850705:
return this.addXFloat$F((x2.value).w);
}
break;
case 10:
var isAtoms=(op.intValue != 1677721602);
if (!isAtoms && Clazz.instanceOf(x2.value, "org.jmol.modelset.BondSet") ) return this.addX$org_jmol_script_SV(x2);
var bs=x2.value;
if (isAtoms && bs.cardinality$() == 1  && (op.intValue & 480) == 0 ) op.intValue|=32;
var val=this.eval.getBitsetProperty$javajs_util_BS$javajs_util_Lst$I$javajs_util_P3$javajs_util_P4$O$O$Z$I$Z(bs, null, op.intValue, null, null, x2.value, op.value, false, x2.index, true);
return (isAtoms ? this.addXObj$O(val) : this.addX$org_jmol_script_SV($I$(2,"newV$I$O",[10, $I$(20,"newBS$javajs_util_BS$IA",[val, this.vwr.ms.getAtomIndices$javajs_util_BS(bs)])])));
}
return false;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:44 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
