(function(){var P$=Clazz.newPackage("org.jmol.script"),p$1={},I$=[[0,'org.jmol.script.T','Boolean','javajs.util.Lst','org.jmol.util.Logger','org.jmol.script.ScriptParam','javajs.util.P3','org.jmol.util.SimpleUnitCell','org.jmol.i18n.GT','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ScriptTokenParser");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.script=null;
this.isStateScript=false;
this.lineCurrent=0;
this.iCommand=0;
this.ichCurrentCommand=0;
this.ichComment=0;
this.ichEnd=0;
this.ichToken=0;
this.theToken=null;
this.lastFlowCommand=null;
this.tokenCommand=null;
this.lastToken=null;
this.tokenAndEquals=null;
this.theTok=0;
this.nTokens=0;
this.tokCommand=0;
this.ptNewSetModifier=0;
this.isNewSet=false;
this.haveMacro=false;
this.logMessages=false;
this.atokenInfix=null;
this.itokenInfix=0;
this.isSetBrace=false;
this.isMathExpressionCommand=false;
this.isSetOrDefine=false;
this.ltokenPostfix=null;
this.isEmbeddedExpression=false;
this.isCommaAsOrAllowed=false;
this.theValue=null;
this.htUserFunctions=null;
this.haveString=false;
this.residueSpecCodeGenerated=false;
this.errorMessage=null;
this.errorMessageUntranslated=null;
this.errorLine=null;
this.errorType=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.logMessages=true;
}, 1);

Clazz.newMeth(C$, 'compileExpressions$', function () {
var isScriptExpression=((this.tokCommand == 134222850 || this.tokCommand == 4124 ) && this.tokAt$I(2) == 268435472 );
this.isEmbeddedExpression=(isScriptExpression || (this.tokCommand != 0 && (this.tokCommand != 134320141 && this.tokCommand != 102436  && this.tokCommand != 364558  && this.tokCommand != 102412  || this.tokenCommand.intValue != 2147483647 )  && this.tokCommand != 102409  && !$I$(1).tokAttr$I$I(this.tokCommand, 12288)  && (this.nTokens > 2 || !$I$(1).tokAttr$I$I(this.tokCommand, 20480) ) ) );
this.isMathExpressionCommand=(this.tokCommand == 1073741824 || isScriptExpression  || $I$(1).tokAttr$I$I(this.tokCommand, 36864) );
var checkExpression=this.isEmbeddedExpression || ($I$(1).tokAttr$I$I(this.tokCommand, 12288)) ;
if (this.tokAt$I(1) == 1073742330 && $I$(1).tokAttr$I$I(this.tokCommand, 12288) ) checkExpression=false;
if (checkExpression && !this.compileExpression$() ) return false;
var size=this.atokenInfix.length;
var nDefined=0;
for (var i=1; i < size; i++) {
if (this.tokAt$I(i) == 12290) nDefined++;
}
size-=nDefined;
if (this.isNewSet) {
if (size == 1) {
this.atokenInfix[0]=$I$(1).tv$I$I$O(134320141, 0, this.atokenInfix[0].value);
this.isNewSet=false;
}}if ((this.isNewSet || this.isSetBrace ) && this.ptNewSetModifier != 2147483647  && size < this.ptNewSetModifier + 2 ) {
if (!this.isNewSet || !this.haveMacro ) return this.commandExpected$();
this.htUserFunctions.put$TK$TV(this.atokenInfix[0].value, $I$(2).TRUE);
}return (size == 1 || !$I$(1).tokAttr$I$I(this.tokCommand, 262144)  ? true : this.error$I(0));
});

Clazz.newMeth(C$, 'compileExpression$', function () {
var firstToken=(this.isSetOrDefine && !this.isSetBrace  ? 2 : 1);
this.ltokenPostfix=Clazz.new_($I$(3));
this.itokenInfix=0;
var tokenBegin=null;
var tok=this.tokAt$I(1);
switch (this.tokCommand) {
case 12290:
var i=(this.tokAt$I(1) == 12290 ? 2 : 1);
if (this.tokAt$I(i) == 2 && this.tokAt$I(i + 1) == 1073742336  && this.tokAt$I(i + 3) == 268435860 ) {
this.tokCommand=36867;
this.isSetBrace=true;
this.ptNewSetModifier=i + 3;
this.isMathExpressionCommand=true;
this.isEmbeddedExpression=true;
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenSetProperty]);
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenExpressionBegin]);
for (var j=0; j++ <= i; ) p$1.addNextToken.apply(this, []);

p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenExpressionEnd]);
firstToken=0;
}break;
case 12295:
if (tok == 1677721602) firstToken=2;
break;
case 1275082245:
switch (tok) {
case 1073742335:
case 1073742334:
tok=this.tokAt$I(++firstToken);
break;
}
case 12294:
case 1610625028:
switch (tok) {
case 1275069441:
case 1073742119:
tok=this.tokAt$I(++firstToken);
break;
}
if (tok == 1086324742 && !$I$(1).tokAttr$I$I(this.tokAt$I(firstToken + 1), 268435456) ) firstToken++;
}
for (var i=0; i < firstToken && p$1.addNextToken.apply(this, []) ; i++) {
}
while (p$1.moreTokens.apply(this, [])){
if (this.isEmbeddedExpression) {
while (!p$1.isExpressionNext.apply(this, [])){
if (p$1.tokPeekIs$I.apply(this, [1073741824]) && !(this.tokCommand == 134222849 && this.itokenInfix == 1 ) ) {
var name=this.atokenInfix[this.itokenInfix].value;
var t=$I$(1).getTokenFromName$S(name);
if (t != null ) if (!this.isMathExpressionCommand && this.lastToken.tok != 12290  || (this.lastToken.tok == 1073742336 || this.tokAt$I(this.itokenInfix + 1) == 268435472 ) && !this.isUserFunction$S(name)  ) {
this.atokenInfix[this.itokenInfix]=t;
}}if (!p$1.addNextToken.apply(this, [])) break;
}
if (!p$1.moreTokens.apply(this, [])) break;
}if (this.lastToken.tok == 12290) {
if (!p$1.clauseDefine$Z$Z.apply(this, [true, false])) return false;
continue;
}if (!this.isMathExpressionCommand) p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [tokenBegin=$I$(1).o$I$O(1073742325, "implicitExpressionBegin")]);
if (!p$1.clauseOr$Z.apply(this, [this.isCommaAsOrAllowed || !this.isMathExpressionCommand && p$1.tokPeekIs$I.apply(this, [268435472])  ])) return false;
if (!this.isMathExpressionCommand && !(this.isEmbeddedExpression && this.lastToken === $I$(1).tokenCoordinateEnd  ) ) {
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenExpressionEnd]);
}if (p$1.moreTokens.apply(this, [])) {
if (this.tokCommand != 1275082245 && this.tokCommand != 12291  && !this.isEmbeddedExpression ) return this.error$I(5);
if (this.tokCommand == 1275082245) {
tokenBegin.intValue=0;
this.tokCommand=0;
this.isEmbeddedExpression=true;
this.isMathExpressionCommand=true;
this.isCommaAsOrAllowed=false;
}}}
this.atokenInfix=this.ltokenPostfix.toArray$TTA(Clazz.array($I$(1), [this.ltokenPostfix.size$()]));
return true;
});

Clazz.newMeth(C$, 'isUserFunction$S', function (name) {
name=name.toLowerCase$();
return (!this.isStateScript && (this.vwr.isFunction$S(name) || this.htUserFunctions.containsKey$O(name) ) );
});

Clazz.newMeth(C$, 'isExpressionNext', function () {
return p$1.tokPeekIs$I.apply(this, [1073742332]) && !(this.tokAt$I(this.itokenInfix + 1) == 4 && this.tokAt$I(this.itokenInfix + 2) == 268435490 )  || !this.isMathExpressionCommand && p$1.tokPeekIs$I.apply(this, [268435472])  ;
}, p$1);

Clazz.newMeth(C$, 'tokenAttr$org_jmol_script_T$I', function (token, tok) {
return token != null  && $I$(1).tokAttr$I$I(token.tok, tok) ;
}, 1);

Clazz.newMeth(C$, 'moreTokens', function () {
return (this.itokenInfix < this.atokenInfix.length);
}, p$1);

Clazz.newMeth(C$, 'tokAt$I', function (i) {
return (i < this.atokenInfix.length ? this.atokenInfix[i].tok : 0);
});

Clazz.newMeth(C$, 'tokPeek', function () {
return (this.itokenInfix >= this.atokenInfix.length ? 0 : this.atokenInfix[this.itokenInfix].tok);
}, p$1);

Clazz.newMeth(C$, 'tokPeekIs$I', function (tok) {
return (this.tokAt$I(this.itokenInfix) == tok);
}, p$1);

Clazz.newMeth(C$, 'intPeek', function () {
return (this.itokenInfix >= this.atokenInfix.length ? 2147483647 : this.atokenInfix[this.itokenInfix].intValue);
}, p$1);

Clazz.newMeth(C$, 'valuePeek', function () {
return (p$1.moreTokens.apply(this, []) ? this.atokenInfix[this.itokenInfix].value : "");
}, p$1);

Clazz.newMeth(C$, 'tokenNext', function () {
return (this.itokenInfix >= this.atokenInfix.length ? null : this.atokenInfix[this.itokenInfix++]);
}, p$1);

Clazz.newMeth(C$, 'tokenNextTok$I', function (tok) {
var token=p$1.tokenNext.apply(this, []);
return (token != null  && token.tok == tok );
}, p$1);

Clazz.newMeth(C$, 'returnToken', function () {
this.itokenInfix--;
return false;
}, p$1);

Clazz.newMeth(C$, 'getToken', function () {
this.theValue=((this.theToken=p$1.tokenNext.apply(this, [])) == null  ? null : this.theToken.value);
return this.theToken;
}, p$1);

Clazz.newMeth(C$, 'getNumericalToken', function () {
return (p$1.getToken.apply(this, []) != null  && (this.theToken.tok == 2 || this.theToken.tok == 3 ) );
}, p$1);

Clazz.newMeth(C$, 'floatValue', function () {
switch (this.theToken.tok) {
case 2:
return this.theToken.intValue;
case 3:
return (this.theValue).floatValue$();
}
return 0;
}, p$1);

Clazz.newMeth(C$, 'addTokenToPostfix$I$O', function (tok, value) {
return p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).o$I$O(tok, value)]);
}, p$1);

Clazz.newMeth(C$, 'addTokenToPostfixInt$I$I$O', function (tok, intValue, value) {
return p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tv$I$I$O(tok, intValue, value)]);
}, p$1);

Clazz.newMeth(C$, 'addTokenToPostfixToken$org_jmol_script_T', function (token) {
if (token == null ) return false;
if (this.logMessages) $I$(4).debug$S("addTokenToPostfix" + token);
if (token.tok == 268435520 && (this.lastToken.tok == 1073742336 || this.lastToken.tok == 1073742337 ) ) {
var ipt=this.ltokenPostfix.size$() - 1;
this.ltokenPostfix.removeItemAt$I(ipt);
this.ltokenPostfix.addLast$TV($I$(1).tokenRightParen);
var pcount=0;
var tok;
for (var i=this.ltokenPostfix.size$(); --i >= 0 && pcount >= 0 ; ) {
switch (tok=this.ltokenPostfix.get$I(i).tok) {
case 268435473:
case 268435521:
pcount++;
break;
case 268435472:
case 268435520:
pcount--;
var tok2;
if (pcount == 1 && (tok2=this.ltokenPostfix.get$I(i - 1).tok) != 268435473  && tok2 != 268435521 ) {
ipt=(tok == 268435520 ? i - 1 : i);
pcount=-10;
}break;
default:
tok2=(i == 0 ? 0 : this.ltokenPostfix.get$I(i - 1).tok);
if (tok2 == 1073742336 || tok2 == 1073742337 ) {
ipt=i - 1;
break;
}if (i == ipt - 1) {
ipt=i;
pcount=-10;
}break;
}
}
if (pcount == -10) {
this.ltokenPostfix.add$I$TE(ipt, $I$(1).tokenLeftParen);
}}this.ltokenPostfix.addLast$TV(token);
this.lastToken=token;
return true;
}, p$1);

Clazz.newMeth(C$, 'addNextToken', function () {
return p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [p$1.tokenNext.apply(this, [])]);
}, p$1);

Clazz.newMeth(C$, 'addNextTokenIf$I', function (tok) {
return (p$1.tokPeekIs$I.apply(this, [tok]) && p$1.addNextToken.apply(this, []) );
}, p$1);

Clazz.newMeth(C$, 'addSubstituteTokenIf$I$org_jmol_script_T', function (tok, token) {
if (!p$1.tokPeekIs$I.apply(this, [tok])) return false;
this.itokenInfix++;
return p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [token]);
}, p$1);

Clazz.newMeth(C$, 'clauseOr$Z', function (allowCommaAsOr) {
this.haveString=false;
if (!p$1.clauseAnd.apply(this, [])) return false;
if (this.isEmbeddedExpression && this.lastToken.tok == 1073742326 ) return true;
var tok;
while ((tok=p$1.tokPeek.apply(this, [])) == 268435536 || tok == 268435537  || tok == 268435538  || allowCommaAsOr && tok == 268435504  ){
if (tok == 268435504 && !this.haveString ) p$1.addSubstituteTokenIf$I$org_jmol_script_T.apply(this, [268435504, $I$(1).tokenOr]);
 else p$1.addNextToken.apply(this, []);
if (!p$1.clauseAnd.apply(this, [])) return false;
if (allowCommaAsOr && (this.lastToken.tok == 1073742338 || this.lastToken.tok == 10 ) ) this.haveString=true;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'clauseAnd', function () {
if (!p$1.clauseNot.apply(this, [])) return false;
if (this.isEmbeddedExpression && this.lastToken.tok == 1073742326 ) return true;
while (p$1.tokPeekIs$I.apply(this, [268435552])){
p$1.addNextToken.apply(this, []);
if (!p$1.clauseNot.apply(this, [])) return false;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'clauseNot', function () {
if (p$1.tokPeekIs$I.apply(this, [268435568])) {
p$1.addNextToken.apply(this, []);
return p$1.clauseNot.apply(this, []);
}return (p$1.clausePrimitive.apply(this, []));
}, p$1);

Clazz.newMeth(C$, 'clausePrimitive', function () {
var tok=p$1.tokPeek.apply(this, []);
switch (tok) {
case 1073742195:
this.itokenInfix++;
return p$1.clausePrimitive.apply(this, []);
case 0:
return this.error$I(4);
case 1073742327:
case 10:
case 268435632:
case 136314895:
case 2097160:
case 2097159:
case 2097162:
case 1073742331:
case 1073742333:
case 2097184:
return p$1.addNextToken.apply(this, []);
case 4:
this.haveString=true;
return p$1.addNextToken.apply(this, []);
case 3:
return p$1.addTokenToPostfixInt$I$I$O.apply(this, [1073742359, p$1.fixModelSpec$org_jmol_script_T.apply(this, [p$1.getToken.apply(this, [])]), this.theValue]);
case 1094713349:
case 1094713350:
return p$1.clauseCell$I.apply(this, [tok]);
case 134217736:
case 1275203608:
return p$1.clauseConnected$Z.apply(this, [tok == 1275203608]);
case 134218756:
case 134218757:
return p$1.clauseSubstructure.apply(this, []);
case 134217759:
case 134353926:
return p$1.clauseWithin$Z.apply(this, [tok == 134217759]);
case 12290:
return p$1.clauseDefine$Z$Z.apply(this, [false, false]);
case 1677721602:
case 1745489939:
p$1.addNextToken.apply(this, []);
if (p$1.tokPeekIs$I.apply(this, [10])) p$1.addNextToken.apply(this, []);
 else if (p$1.tokPeekIs$I.apply(this, [12290])) return p$1.clauseDefine$Z$Z.apply(this, [false, false]);
return true;
case 268435472:
p$1.addNextToken.apply(this, []);
if (!p$1.clauseOr$Z.apply(this, [true])) return false;
if (!p$1.addNextTokenIf$I.apply(this, [268435473])) return this.errorStr$I$S(15, ")");
return p$1.checkForItemSelector$Z.apply(this, [true]);
case 1073742332:
return p$1.checkForCoordinate$Z.apply(this, [this.isMathExpressionCommand]);
default:
if (p$1.clauseResidueSpec.apply(this, [])) return true;
if (p$1.isError.apply(this, [])) return false;
if ($I$(1).tokAttr$I$I(tok, 1077936128)) {
var itemp=this.itokenInfix;
var isOK=p$1.clauseComparator$Z.apply(this, [true]);
if (isOK || this.itokenInfix != itemp ) return isOK;
if (tok == 1237320707) {
return p$1.clauseSubstructure.apply(this, []);
}}return p$1.addNextToken.apply(this, []);
}
}, p$1);

Clazz.newMeth(C$, 'checkForCoordinate$Z', function (isImplicitExpression) {
var isCoordinate=false;
var pt=this.ltokenPostfix.size$();
if (isImplicitExpression) {
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenExpressionBegin]);
p$1.tokenNext.apply(this, []);
} else if (this.isEmbeddedExpression) {
p$1.tokenNext.apply(this, []);
pt--;
} else {
p$1.addNextToken.apply(this, []);
}var isHash=p$1.tokPeekIs$I.apply(this, [4]);
if (isHash) {
isImplicitExpression=false;
p$1.returnToken.apply(this, []);
this.ltokenPostfix.removeItemAt$I(this.ltokenPostfix.size$() - 1);
p$1.addNextToken.apply(this, []);
var nBrace=1;
while (nBrace != 0){
if (p$1.tokPeekIs$I.apply(this, [1073742332])) {
if (p$1.isExpressionNext.apply(this, [])) {
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).o$I$O(1073742325, "implicitExpressionBegin")]);
if (!p$1.clauseOr$Z.apply(this, [false])) return false;
if (this.lastToken !== $I$(1).tokenCoordinateEnd ) {
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenExpressionEnd]);
}} else {
nBrace++;
}}if (p$1.tokPeekIs$I.apply(this, [1073742338])) nBrace--;
p$1.addNextToken.apply(this, []);
}
} else {
if (!p$1.tokPeekIs$I.apply(this, [1073742338]) && !p$1.clauseOr$Z.apply(this, [false]) ) return false;
var n=1;
while (!p$1.tokPeekIs$I.apply(this, [1073742338])){
var haveComma=p$1.addNextTokenIf$I.apply(this, [268435504]);
if (!p$1.clauseOr$Z.apply(this, [false])) return (haveComma || n < 3  ? false : this.errorStr$I$S(15, "}"));
n++;
}
isCoordinate=(n >= 2);
}if (isCoordinate && (isImplicitExpression || this.isEmbeddedExpression ) ) {
this.ltokenPostfix.set$I$TE(pt, $I$(1).tokenCoordinateBegin);
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenCoordinateEnd]);
p$1.tokenNext.apply(this, []);
} else if (isImplicitExpression) {
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenExpressionEnd]);
p$1.tokenNext.apply(this, []);
} else if (this.isEmbeddedExpression) {
if (!isHash) p$1.tokenNext.apply(this, []);
} else {
p$1.addNextToken.apply(this, []);
}return p$1.checkForItemSelector$Z.apply(this, [!isHash]);
}, p$1);

Clazz.newMeth(C$, 'checkForItemSelector$Z', function (allowNumeric) {
var tok;
if ((tok=this.tokAt$I(this.itokenInfix + 1)) == 268435520 || allowNumeric && tok == 1073742332  ) return true;
while (true){
if (!p$1.addNextTokenIf$I.apply(this, [268435520])) break;
if (!p$1.clauseItemSelector.apply(this, [])) return false;
if (!p$1.addNextTokenIf$I.apply(this, [268435521])) return this.errorStr$I$S(15, "]");
}
return true;
}, p$1);

Clazz.newMeth(C$, 'clauseWithin$Z', function (isWithin) {
p$1.addNextToken.apply(this, []);
if (!p$1.addNextTokenIf$I.apply(this, [268435472])) return false;
if (p$1.getToken.apply(this, []) == null ) return false;
var distance=3.4028235E38;
var key=null;
var allowComma=isWithin;
var tok;
var tok0=this.theToken.tok;
if (!isWithin) {
tok=-1;
for (var i=this.itokenInfix; tok != 0; i++) {
switch (tok=this.tokAt$I(i)) {
case 268435504:
tok=0;
break;
case 1073742332:
case 268435472:
case 268435473:
distance=100;
p$1.returnToken.apply(this, []);
tok0=tok=0;
break;
}
}
}switch (tok0) {
case 268435616:
if (p$1.getToken.apply(this, []) == null ) return false;
if (this.theToken.tok != 2) return this.error$I(12);
distance=-this.theToken.intValue;
break;
case 2:
case 3:
distance=p$1.floatValue.apply(this, []);
break;
case 12290:
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [this.theToken]);
if (!p$1.clauseDefine$Z$Z.apply(this, [true, false])) return false;
key="";
allowComma=false;
break;
}
if (isWithin && distance == 3.4028235E38  ) switch (tok0) {
case 12290:
break;
case 1111490587:
case 1073742128:
case 134218756:
case 134218757:
case 1237320707:
case 1073741925:
case 1073742189:
p$1.addTokenToPostfix$I$O.apply(this, [4, this.theValue]);
if (!p$1.addNextTokenIf$I.apply(this, [268435504])) return false;
allowComma=false;
tok=p$1.tokPeek.apply(this, []);
switch (tok) {
case 0:
return false;
case 4:
p$1.addNextToken.apply(this, []);
key="";
break;
case 12290:
if (!p$1.clauseDefine$Z$Z.apply(this, [false, true])) return false;
key="";
break;
default:
return false;
}
break;
case 1073742328:
allowComma=false;
case 1086326785:
case 1086326786:
case 1073741863:
case 1678381065:
case 1086326788:
case 1073742329:
case 1086326789:
case 1086324742:
case 1814695966:
case 136314895:
case 1094717454:
case 1094713360:
case 134217750:
case 134219265:
case 1094713362:
case 1086324744:
case 2097184:
case 1094713366:
case 1639976963:
case 4:
case 1648363544:
key=this.theValue;
break;
default:
key=(this.theValue).toLowerCase$();
break;
}
if (key == null ) p$1.addTokenToPostfix$I$O.apply(this, [3, Float.valueOf$F(distance)]);
 else if (key.length$() > 0) p$1.addTokenToPostfix$I$O.apply(this, [4, key]);
var done=false;
while (!done){
if (tok0 != 0 && !p$1.addNextTokenIf$I.apply(this, [268435504]) ) break;
if (tok0 == 0) tok0=134353926;
var isCoordOrPlane=false;
tok=p$1.tokPeek.apply(this, []);
if (isWithin) {
switch (tok0) {
case 2:
case 3:
if (tok == 1073742335 || tok == 1073742334 ) {
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [p$1.getToken.apply(this, [])]);
if (!p$1.addNextTokenIf$I.apply(this, [268435504])) break;
tok=p$1.tokPeek.apply(this, []);
}break;
}
if (key == null ) {
switch (tok) {
case 134219265:
case 1073742329:
case 134217750:
isCoordOrPlane=true;
p$1.addNextToken.apply(this, []);
break;
case 1073742330:
p$1.getToken.apply(this, []);
p$1.getToken.apply(this, []);
p$1.addTokenToPostfix$I$O.apply(this, [4, "$" + this.theValue]);
done=true;
break;
case 1086324742:
case 1648363544:
case 1814695966:
p$1.getToken.apply(this, []);
p$1.addTokenToPostfix$I$O.apply(this, [4, $I$(1).nameOf$I(tok)]);
break;
case 1073742332:
p$1.returnToken.apply(this, []);
isCoordOrPlane=true;
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).getTokenFromName$S(distance == 3.4028235E38  ? "plane" : "coord")]);
}
if (!done) p$1.addNextTokenIf$I.apply(this, [268435504]);
}}tok=p$1.tokPeek.apply(this, []);
if (done) break;
if (isCoordOrPlane) {
while (!p$1.tokPeekIs$I.apply(this, [268435473])){
switch (p$1.tokPeek.apply(this, [])) {
case 0:
return this.error$I(4);
case 268435472:
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenExpressionBegin]);
p$1.addNextToken.apply(this, []);
if (!p$1.clauseOr$Z.apply(this, [false])) return this.errorIntStr2$I$S$S(18, "WITHIN", ": ?");
if (!p$1.addNextTokenIf$I.apply(this, [268435473])) return this.errorStr$I$S(15, ", / )");
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenExpressionEnd]);
break;
case 12290:
if (!p$1.clauseDefine$Z$Z.apply(this, [false, false])) return false;
break;
default:
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [p$1.getToken.apply(this, [])]);
}
}
} else if (!p$1.clauseOr$Z.apply(this, [allowComma])) {
}}
if (!p$1.addNextTokenIf$I.apply(this, [268435473])) return this.errorStr$I$S(15, ")");
return true;
}, p$1);

Clazz.newMeth(C$, 'clauseConnected$Z', function (isPolyhedra) {
p$1.addNextToken.apply(this, []);
if (!p$1.addNextTokenIf$I.apply(this, [268435472])) {
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenLeftParen]);
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenRightParen]);
return true;
}while (true){
if (p$1.addNextTokenIf$I.apply(this, [2])) {
if (!p$1.addNextTokenIf$I.apply(this, [268435504])) {
break;
}if (isPolyhedra) {
p$1.returnToken.apply(this, []);
break;
}} else if (isPolyhedra && (p$1.addNextTokenIf$I.apply(this, [4]) || p$1.addNextTokenIf$I.apply(this, [1073741824]) ) ) {
break;
}if (p$1.addNextTokenIf$I.apply(this, [2])) if (!p$1.addNextTokenIf$I.apply(this, [268435504])) break;
if (p$1.addNextTokenIf$I.apply(this, [3])) if (!p$1.addNextTokenIf$I.apply(this, [268435504])) break;
if (p$1.addNextTokenIf$I.apply(this, [3])) if (!p$1.addNextTokenIf$I.apply(this, [268435504])) break;
var o=p$1.getToken.apply(this, []).value;
var strOrder=(Clazz.instanceOf(o, "java.lang.String") ? o : " ");
var intType=$I$(5).getBondOrderFromString$S(strOrder);
if (intType == 131071) {
p$1.returnToken.apply(this, []);
} else {
p$1.addTokenToPostfix$I$O.apply(this, [4, strOrder]);
if (!p$1.addNextTokenIf$I.apply(this, [268435504])) break;
}if (p$1.addNextTokenIf$I.apply(this, [268435473])) return true;
if (!p$1.clauseOr$Z.apply(this, [p$1.tokPeekIs$I.apply(this, [268435472])])) return false;
if (p$1.addNextTokenIf$I.apply(this, [268435473])) return true;
if (!p$1.addNextTokenIf$I.apply(this, [268435504])) return false;
if (!p$1.clauseOr$Z.apply(this, [p$1.tokPeekIs$I.apply(this, [268435472])])) return false;
break;
}
if (!p$1.addNextTokenIf$I.apply(this, [268435473])) return this.errorStr$I$S(15, ")");
return true;
}, p$1);

Clazz.newMeth(C$, 'clauseSubstructure', function () {
p$1.addNextToken.apply(this, []);
if (!p$1.addNextTokenIf$I.apply(this, [268435472])) return false;
if (p$1.tokPeekIs$I.apply(this, [12290])) {
if (!p$1.clauseDefine$Z$Z.apply(this, [false, true])) return false;
} else if (!p$1.addNextTokenIf$I.apply(this, [4])) {
return this.errorStr$I$S(15, "\"...\"");
}if (p$1.addNextTokenIf$I.apply(this, [268435504])) if (!p$1.clauseOr$Z.apply(this, [p$1.tokPeekIs$I.apply(this, [268435472])])) return false;
if (!p$1.addNextTokenIf$I.apply(this, [268435473])) return this.errorStr$I$S(15, ")");
return true;
}, p$1);

Clazz.newMeth(C$, 'clauseItemSelector', function () {
var tok;
var nparen=0;
while ((tok=p$1.tokPeek.apply(this, [])) != 0 && tok != 268435521 ){
p$1.addNextToken.apply(this, []);
if (tok == 268435520) nparen++;
if (p$1.tokPeek.apply(this, []) == 268435521 && nparen-- > 0 ) p$1.addNextToken.apply(this, []);
}
return true;
}, p$1);

Clazz.newMeth(C$, 'clauseComparator$Z', function (isOptional) {
var tokenAtomProperty=p$1.tokenNext.apply(this, []);
var tokenComparator=p$1.tokenNext.apply(this, []);
if (!C$.tokenAttr$org_jmol_script_T$I(tokenComparator, 268435712)) {
if (!isOptional) return this.errorStr$I$S(15, "== != < > <= >=");
if (tokenComparator != null ) p$1.returnToken.apply(this, []);
p$1.returnToken.apply(this, []);
return false;
}if (C$.tokenAttr$org_jmol_script_T$I(tokenAtomProperty, 1086324736) && tokenComparator.tok != 268435860  && tokenComparator.tok != 268435862  && tokenComparator.tok != 268435861 ) return this.errorStr$I$S(15, "== !=");
if (p$1.tokPeek.apply(this, []) == 268435520) {
p$1.getToken.apply(this, []);
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenLeftParen]);
while (true){
if (!p$1.addCompare$org_jmol_script_T$org_jmol_script_T.apply(this, [tokenAtomProperty, tokenComparator])) return false;
if (p$1.tokPeek.apply(this, []) == 268435504) p$1.getToken.apply(this, []);
 else if (p$1.tokPeek.apply(this, []) == 268435521) break;
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [tokenComparator.tok == 268435861 ? $I$(1).tokenAnd : $I$(1).tokenOr]);
}
p$1.getToken.apply(this, []);
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenRightParen]);
return true;
}return p$1.addCompare$org_jmol_script_T$org_jmol_script_T.apply(this, [tokenAtomProperty, tokenComparator]);
}, p$1);

Clazz.newMeth(C$, 'addCompare$org_jmol_script_T$org_jmol_script_T', function (tokenAtomProperty, tokenComparator) {
if (p$1.getToken.apply(this, []) == null ) return this.errorStr$I$S(17, "" + p$1.valuePeek.apply(this, []));
var isNegative=(this.theToken.tok == 268435616);
if (isNegative && p$1.getToken.apply(this, []) == null  ) return this.error$I(12);
switch (this.theToken.tok) {
case 2:
case 3:
case 1073741824:
case 4:
case 1073742332:
case 12290:
break;
default:
if (!$I$(1).tokAttr$I$I(this.theToken.tok, 1073741824)) return this.error$I(13);
}
p$1.addTokenToPostfixInt$I$I$O.apply(this, [tokenComparator.tok, tokenAtomProperty.tok, tokenComparator.value + (isNegative ? " -" : "")]);
if (tokenAtomProperty.tok == 1715472409) p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [tokenAtomProperty]);
if (this.theToken.tok == 1073742332) {
p$1.returnToken.apply(this, []);
return p$1.clausePrimitive.apply(this, []);
}p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [this.theToken]);
if (this.theToken.tok == 12290) return p$1.clauseDefine$Z$Z.apply(this, [true, false]);
return true;
}, p$1);

Clazz.newMeth(C$, 'clauseCell$I', function (tok) {
var cell=Clazz.new_($I$(6));
p$1.tokenNext.apply(this, []);
if (!p$1.tokenNextTok$I.apply(this, [268435860])) return this.errorStr$I$S(15, "=");
if (p$1.getToken.apply(this, []) == null ) return this.error$I(3);
if (this.theToken.tok == 2) {
$I$(7).ijkToPoint3f$I$javajs_util_P3$I$I(this.theToken.intValue, cell, 1, 0);
return p$1.addTokenToPostfix$I$O.apply(this, [tok, cell]);
}if (this.theToken.tok != 1073742332 || !p$1.getNumericalToken.apply(this, []) ) return this.error$I(3);
cell.x=p$1.floatValue.apply(this, []);
if (p$1.tokPeekIs$I.apply(this, [268435504])) p$1.tokenNext.apply(this, []);
if (!p$1.getNumericalToken.apply(this, [])) return this.error$I(3);
cell.y=p$1.floatValue.apply(this, []);
if (p$1.tokPeekIs$I.apply(this, [268435504])) p$1.tokenNext.apply(this, []);
if (!p$1.getNumericalToken.apply(this, []) || !p$1.tokenNextTok$I.apply(this, [1073742338]) ) return this.error$I(3);
cell.z=p$1.floatValue.apply(this, []);
return p$1.addTokenToPostfix$I$O.apply(this, [tok, cell]);
}, p$1);

Clazz.newMeth(C$, 'clauseDefine$Z$Z', function (haveToken, forceString) {
if (!haveToken) {
var token=p$1.tokenNext.apply(this, []);
if (forceString) token=$I$(1).tokenDefineString;
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [token]);
}if (p$1.tokPeekIs$I.apply(this, [0])) return this.error$I(4);
if (!p$1.addSubstituteTokenIf$I$org_jmol_script_T.apply(this, [1073742332, $I$(1).tokenExpressionBegin])) {
if (p$1.tokPeek.apply(this, []) == 12290) p$1.addNextToken.apply(this, []);
return p$1.addNextToken.apply(this, []) && p$1.checkForItemSelector$Z.apply(this, [true]) ;
}while (p$1.moreTokens.apply(this, []) && !p$1.tokPeekIs$I.apply(this, [1073742338]) ){
if (p$1.tokPeekIs$I.apply(this, [1073742332])) {
if (!p$1.checkForCoordinate$Z.apply(this, [true])) return false;
} else {
p$1.addNextToken.apply(this, []);
}}
return p$1.addSubstituteTokenIf$I$org_jmol_script_T.apply(this, [1073742338, $I$(1).tokenExpressionEnd]) && p$1.checkForItemSelector$Z.apply(this, [true]) ;
}, p$1);

Clazz.newMeth(C$, 'generateResidueSpecCode$org_jmol_script_T', function (token) {
if (this.residueSpecCodeGenerated) p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenAndSpec]);
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [token]);
this.residueSpecCodeGenerated=true;
return true;
}, p$1);

Clazz.newMeth(C$, 'clauseResidueSpec', function () {
var tok=p$1.tokPeek.apply(this, []);
this.residueSpecCodeGenerated=false;
var checkResNameSpec=false;
switch (tok) {
case 0:
case 2097156:
case 2097174:
return false;
case 2:
case 268435490:
case 268435634:
case 5:
break;
case 268435633:
case 268435520:
case 1073741824:
checkResNameSpec=true;
break;
default:
if ($I$(1).tokAttr$I$I(tok, 268435712)) return false;
var str="" + p$1.valuePeek.apply(this, []);
checkResNameSpec=(str.length$() == 2 || str.length$() == 3 );
if (!checkResNameSpec) return false;
}
var specSeen=false;
if (checkResNameSpec) {
if (!p$1.clauseResNameSpec.apply(this, [])) return false;
specSeen=true;
tok=p$1.tokPeek.apply(this, []);
}if (tok == 2 || tok == 268435633  || tok == 5 ) {
if (!p$1.clauseSequenceSpec.apply(this, [])) return false;
specSeen=true;
tok=p$1.tokPeek.apply(this, []);
}if (tok == 268435490) {
if (!p$1.clauseChainSpec$I.apply(this, [tok])) return false;
specSeen=true;
tok=p$1.tokPeek.apply(this, []);
}if (tok == 1073742336) {
if (!p$1.clauseAtomSpec.apply(this, [])) return false;
specSeen=true;
tok=p$1.tokPeek.apply(this, []);
}if (tok == 268435634) {
if (!p$1.clauseAlternateSpec.apply(this, [])) return false;
specSeen=true;
tok=p$1.tokPeek.apply(this, []);
}if (tok == 268435632) {
if (!p$1.clauseModelSpec.apply(this, [])) return false;
specSeen=true;
tok=p$1.tokPeek.apply(this, []);
}if (!specSeen) return this.error$I(14);
if (!this.residueSpecCodeGenerated) {
p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [$I$(1).tokenAll]);
}return true;
}, p$1);

Clazz.newMeth(C$, 'clauseResNameSpec', function () {
p$1.getToken.apply(this, []);
var tok=p$1.tokPeek.apply(this, []);
switch (this.theToken.tok) {
case 268435633:
return true;
case 268435520:
var strSpec="";
while (p$1.getToken.apply(this, []) != null  && this.theToken.tok != 268435521 )strSpec += this.theValue;

if (this.theToken == null ) return false;
if (strSpec == "") return true;
var pt;
return (strSpec.length$() > 0 && (pt=strSpec.indexOf$S("*")) >= 0  && pt != strSpec.length$() - 1  ? this.error$I(14) : p$1.generateResidueSpecCode$org_jmol_script_T.apply(this, [$I$(1).o$I$O(1073742360, strSpec.toUpperCase$())]));
default:
if ($I$(1).tokAttr$I$I(tok, 268435712)) {
p$1.returnToken.apply(this, []);
return false;
}var res=this.theValue;
if (tok == 268435633) {
res=this.theValue + "*";
p$1.getToken.apply(this, []);
}return p$1.generateResidueSpecCode$org_jmol_script_T.apply(this, [$I$(1).o$I$O(1073741824, res)]);
}
}, p$1);

Clazz.newMeth(C$, 'clauseSequenceSpec', function () {
if (p$1.tokPeek.apply(this, []) == 268435633) return (p$1.getToken.apply(this, []) != null );
var seqToken=p$1.getSequenceCode$Z.apply(this, [false]);
if (seqToken == null ) return false;
var tok=p$1.tokPeek.apply(this, []);
if (tok == 268435616 || tok == 2 && p$1.intPeek.apply(this, []) < 0  ) {
if (tok == 268435616) {
p$1.tokenNext.apply(this, []);
} else {
var i=-p$1.intPeek.apply(this, []);
p$1.tokenNext.apply(this, []).intValue=i;
p$1.returnToken.apply(this, []);
}seqToken.tok=1073742363;
p$1.generateResidueSpecCode$org_jmol_script_T.apply(this, [seqToken]);
return p$1.addTokenToPostfixToken$org_jmol_script_T.apply(this, [p$1.getSequenceCode$Z.apply(this, [true])]);
}return p$1.generateResidueSpecCode$org_jmol_script_T.apply(this, [seqToken]);
}, p$1);

Clazz.newMeth(C$, 'getSequenceCode$Z', function (isSecond) {
var seqcode=2147483647;
var seqvalue=2147483647;
switch (p$1.tokPeek.apply(this, [])) {
case 5:
seqcode=p$1.tokenNext.apply(this, []).intValue;
break;
case 2:
seqvalue=p$1.tokenNext.apply(this, []).intValue;
break;
default:
if (!isSecond) return null;
}
return $I$(1).tv$I$I$O(1073742362, seqvalue, Integer.valueOf$I(seqcode));
}, p$1);

Clazz.newMeth(C$, 'clauseChainSpec$I', function (tok) {
p$1.tokenNext.apply(this, []);
tok=p$1.tokPeek.apply(this, []);
var strChain;
if (p$1.isTerminator$I.apply(this, [tok])) {
strChain=" ";
} else {
switch (tok) {
case 268435633:
return (p$1.getToken.apply(this, []) != null );
case 2:
p$1.getToken.apply(this, []);
var val=this.theToken.intValue;
if (val < 0 || val > 9999 ) return this.error$I(8);
strChain="" + val;
break;
case 4:
this.vwr.getChainID$S$Z("a", true);
default:
strChain="" + p$1.getToken.apply(this, []).value;
break;
}
if (strChain.length$() == 0) strChain=" ";
 else if (strChain.equals$O("?")) return true;
}var chain=this.vwr.getChainID$S$Z(strChain, false);
return p$1.generateResidueSpecCode$org_jmol_script_T.apply(this, [$I$(1).tv$I$I$O(1073742357, chain, "spec_chain")]);
}, p$1);

Clazz.newMeth(C$, 'clauseAlternateSpec', function () {
p$1.tokenNext.apply(this, []);
if (p$1.isTerminator$I.apply(this, [p$1.tokPeek.apply(this, [])])) return p$1.generateResidueSpecCode$org_jmol_script_T.apply(this, [$I$(1).o$I$O(1073742355, null)]);
switch (p$1.getToken.apply(this, []).tok) {
case 268435633:
case 4:
case 2:
case 1073741824:
case 805306401:
case 1111492629:
case 1111492630:
case 1111492631:
case 1140850705:
break;
default:
return this.error$I(10);
}
return p$1.generateResidueSpecCode$org_jmol_script_T.apply(this, [$I$(1).o$I$O(1073742355, this.theToken.value)]);
}, p$1);

Clazz.newMeth(C$, 'isTerminator$I', function (tok) {
switch (tok) {
case 0:
case 268435632:
case 268435552:
case 268435536:
case 268435568:
case 268435504:
case 268435473:
case 1073742338:
return true;
default:
return false;
}
}, p$1);

Clazz.newMeth(C$, 'clauseModelSpec', function () {
p$1.getToken.apply(this, []);
switch (p$1.tokPeek.apply(this, [])) {
case 268435633:
p$1.getToken.apply(this, []);
return true;
case 2:
return p$1.generateResidueSpecCode$org_jmol_script_T.apply(this, [$I$(1).o$I$O(1073742358, Integer.valueOf$I(p$1.getToken.apply(this, []).intValue))]);
case 3:
return p$1.generateResidueSpecCode$org_jmol_script_T.apply(this, [$I$(1).tv$I$I$O(1073742358, p$1.fixModelSpec$org_jmol_script_T.apply(this, [p$1.getToken.apply(this, [])]), this.theValue)]);
case 268435504:
case 1073742338:
case 0:
return p$1.generateResidueSpecCode$org_jmol_script_T.apply(this, [$I$(1).o$I$O(1073742358, Integer.valueOf$I(1))]);
}
return this.error$I(10);
}, p$1);

Clazz.newMeth(C$, 'fixModelSpec$org_jmol_script_T', function (token) {
var ival=token.intValue;
if (ival == 2147483647) {
var f=(this.theValue).floatValue$();
if (f == (f|0) ) ival=((f|0)) * 1000000;
if (ival < 0) ival=2147483647;
}return ival;
}, p$1);

Clazz.newMeth(C$, 'clauseAtomSpec', function () {
if (!p$1.tokenNextTok$I.apply(this, [1073742336])) return this.error$I(7);
if (p$1.getToken.apply(this, []) == null ) return true;
var atomSpec="";
if (this.theToken.tok == 2) {
atomSpec += "" + this.theToken.intValue;
if (p$1.getToken.apply(this, []) == null ) return this.error$I(7);
}if (this.theToken.tok == 268435633) return true;
atomSpec += "" + this.theToken.value;
if (p$1.tokPeekIs$I.apply(this, [268435633])) {
p$1.tokenNext.apply(this, []);
atomSpec += "'";
}return p$1.generateResidueSpecCode$org_jmol_script_T.apply(this, [$I$(1).tv$I$I$O(1073742356, this.vwr.getJBR$().lookupSpecialAtomID$S(atomSpec.toUpperCase$()), atomSpec)]);
}, p$1);

Clazz.newMeth(C$, 'errorString$I$S$S$Z', function (iError, value, more, translated) {
var doTranslate=false;
if (!translated && (doTranslate=$I$(8).getDoTranslate$()) == true  ) $I$(8).setDoTranslate$Z(false);
var msg;
switch (iError) {
default:
msg="Unknown compiler error message number: " + iError;
break;
case 0:
msg=$I$(8).$$S("bad argument count");
break;
case 1:
msg=$I$(8).$$S("invalid context for {0}");
break;
case 2:
msg=$I$(8).$$S("command expected");
break;
case 3:
msg=$I$(8).$$S("{ number number number } expected");
break;
case 4:
msg=$I$(8).$$S("unexpected end of script command");
break;
case 5:
msg=$I$(8).$$S("end of expression expected");
break;
case 6:
msg=$I$(8).$$S("identifier or residue specification expected");
break;
case 7:
msg=$I$(8).$$S("invalid atom specification");
break;
case 8:
msg=$I$(8).$$S("invalid chain specification");
break;
case 9:
msg=$I$(8).$$S("invalid expression token: {0}");
break;
case 10:
msg=$I$(8).$$S("invalid model specification");
break;
case 11:
msg=$I$(8).$$S("missing END for {0}");
break;
case 12:
msg=$I$(8).$$S("number expected");
break;
case 13:
msg=$I$(8).$$S("number or variable name expected");
break;
case 14:
msg=$I$(8).$$S("residue specification (ALA, AL?, A*) expected");
break;
case 15:
msg=$I$(8).$$S("{0} expected");
break;
case 16:
msg=$I$(8).$$S("{0} unexpected");
break;
case 17:
msg=$I$(8).$$S("unrecognized expression token: {0}");
break;
case 18:
msg=$I$(8).$$S("unrecognized {0} parameter");
break;
case 19:
msg=$I$(8).$$S("unrecognized token: {0}");
break;
}
if (msg.indexOf$S("{0}") < 0) {
if (value != null ) msg += ": " + value;
} else {
msg=$I$(9).rep$S$S$S(msg, "{0}", value);
if (msg.indexOf$S("{1}") >= 0) msg=$I$(9).rep$S$S$S(msg, "{1}", more);
 else if (more != null ) msg += ": " + more;
}if (!translated) $I$(8).setDoTranslate$Z(doTranslate);
return msg;
}, 1);

Clazz.newMeth(C$, 'commandExpected$', function () {
this.ichToken=this.ichCurrentCommand;
return this.error$I(2);
});

Clazz.newMeth(C$, 'error$I', function (error) {
return this.errorIntStr2$I$S$S(error, null, null);
});

Clazz.newMeth(C$, 'errorStr$I$S', function (error, value) {
return this.errorIntStr2$I$S$S(error, value, null);
});

Clazz.newMeth(C$, 'errorIntStr2$I$S$S', function (iError, value, more) {
var strError=C$.errorString$I$S$S$Z(iError, value, more, true);
var strUntranslated=($I$(8).getDoTranslate$() ? C$.errorString$I$S$S$Z(iError, value, more, false) : null);
return this.errorStr2$S$S(strError, strUntranslated);
});

Clazz.newMeth(C$, 'isError', function () {
return this.errorMessage != null ;
}, p$1);

Clazz.newMeth(C$, 'errorStr2$S$S', function (errorMessage, strUntranslated) {
this.errorMessage=errorMessage;
this.errorMessageUntranslated=strUntranslated;
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
