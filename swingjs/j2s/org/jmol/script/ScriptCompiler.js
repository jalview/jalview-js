(function(){var P$=Clazz.newPackage("org.jmol.script"),p$1={},I$=[[0,'javajs.util.Lst','org.jmol.script.ScriptContext','org.jmol.script.T','java.util.Hashtable','org.jmol.script.SV','org.jmol.viewer.FileManager','org.jmol.util.Logger','org.jmol.script.ScriptManager','org.jmol.script.ContextToken','javajs.util.AU','org.jmol.viewer.Viewer','javajs.util.PT','org.jmol.script.ScriptParam','org.jmol.modelset.Group','org.jmol.script.ScriptTokenParser','org.jmol.modelset.BondSet','org.jmol.util.Escape','org.jmol.api.Interface','org.jmol.script.ScriptFunction','Boolean','org.jmol.script.ScriptFlowContext','javajs.util.SB','javajs.util.BS','org.jmol.i18n.GT','org.jmol.script.ScriptError']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptCompiler", null, 'org.jmol.script.ScriptTokenParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lnLength=8;
this.vPush=Clazz.new_($I$(1,1));
this.chFirst="\u0000";
},1);

C$.$fields$=[['Z',['isSilent','preDefining','isShowScriptOutput','isCheckOnly','haveComments','iHaveQuotedString','isEndOfCommand','needRightParen','endOfLine','checkImpliedScriptCmd','allowMissingEnd','isShowCommand','isComment','isUserToken','implicitString','isDotDot','haveENDIF'],'C',['chFirst'],'I',['lnLength','ichBrace','cchToken','cchScript','nSemiSkip','parenCount','braceCount','setBraceCount','bracketCount','ptSemi','forPoint3','setEqualPt','iBrace','tokLastMath','tokInitialPlusPlus','afterWhite','pushCount','afterMath'],'S',['filename','scriptExtensions','comment','ident','identLC'],'O',['contextVariables','java.util.Map','aatokenCompiled','org.jmol.script.T[][]','lineNumbers','short[]','lineIndices','int[][]','thisFunction','org.jmol.script.ScriptFunction','flowContext','org.jmol.script.ScriptFlowContext','ltoken','javajs.util.Lst','+lltoken','+vBraces','+vFunctionStack','+vPush','forceFlowContext','org.jmol.script.ScriptFlowContext']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer', function (vwr) {
Clazz.super_(C$, this);
this.vwr=vwr;
}, 1);

Clazz.newMeth(C$, 'compile$S$S$Z$Z$Z$Z', function (filename, script, isPredefining, isSilent, debugScript, isCheckOnly) {
this.isCheckOnly=isCheckOnly;
this.filename=filename;
this.isSilent=isSilent;
this.script=script;
this.logMessages=(!isSilent && !isPredefining && debugScript  );
this.preDefining=(filename == "#predefine");
var doFull=true;
var isOK=p$1.compile0$Z.apply(this, [doFull]);
this.atokenInfix=null;
if (!isOK) p$1.handleError.apply(this, []);
var sc=Clazz.new_($I$(2,1));
isOK=(this.iBrace == 0 && this.parenCount == 0  && this.braceCount == 0  && this.bracketCount == 0 );
sc.isComplete=isOK;
sc.script=script;
sc.scriptExtensions=this.scriptExtensions;
sc.errorType=this.errorType;
if (this.errorType != null ) {
sc.iCommandError=this.iCommand;
p$1.setAaTokenCompiled.apply(this, []);
}sc.saveTokens$org_jmol_script_TAA(this.aatokenCompiled);
sc.errorMessage=this.errorMessage;
sc.errorMessageUntranslated=(this.errorMessageUntranslated == null  ? this.errorMessage : this.errorMessageUntranslated);
if (this.allowMissingEnd && sc.errorMessage != null   && sc.errorMessageUntranslated.indexOf$S("missing END") >= 0 ) sc.errorMessage=sc.errorMessageUntranslated;
sc.lineIndices=this.lineIndices;
sc.lineNumbers=this.lineNumbers;
sc.vars=this.contextVariables;
return sc;
});

Clazz.newMeth(C$, 'newContextVariable$S', function (ident) {
this.theToken=$I$(3).o$I$O(1073741824, ident);
if (this.pushCount > 0) {
var ct=this.vPush.get$I(this.pushCount - 1);
ct.addName$S(ident);
if (ct.tok != 364558) return;
}if (this.thisFunction == null ) {
if (this.contextVariables == null ) this.contextVariables=Clazz.new_($I$(4,1));
C$.addContextVariable$java_util_Map$S(this.contextVariables, ident);
} else {
this.thisFunction.addVariable$S$Z(ident, false);
}}, p$1);

Clazz.newMeth(C$, 'addContextVariable$java_util_Map$S', function (contextVariables, name) {
contextVariables.put$O$O(name, $I$(5).newS$S("").setName$S(name));
}, 1);

Clazz.newMeth(C$, 'isContextVariable$S', function (ident) {
for (var i=this.vPush.size$(); --i >= 0; ) {
var ct=this.vPush.get$I(i);
if (ct.contextVariables != null  && ct.contextVariables.containsKey$O(ident) ) return true;
}
return (this.thisFunction != null  ? this.thisFunction.isVariable$S(ident) : this.contextVariables != null  && this.contextVariables.containsKey$O(ident) );
}, p$1);

Clazz.newMeth(C$, 'cleanScriptComments$S', function (script) {
if (script.indexOf$I("\u201c") >= 0) script=script.replace$C$C("\u201c", "\"");
if (script.indexOf$I("\u201d") >= 0) script=script.replace$C$C("\u201d", "\"");
if (script.indexOf$I("\ufeff") >= 0) script=script.replace$C$C("\ufeff", " ");
var pt=(script.indexOf$S("\u0001##"));
if (pt >= 0) {
this.scriptExtensions=script.substring$I(pt + 1);
script=script.substring$I$I(0, pt);
this.allowMissingEnd=(this.scriptExtensions.indexOf$S("##noendcheck") >= 0);
}this.haveComments=(script.indexOf$S("#") >= 0);
return $I$(6).getEmbeddedScript$S(script);
}, p$1);

Clazz.newMeth(C$, 'addTokenToPrefix$org_jmol_script_T', function (token) {
if (this.logMessages) $I$(7).info$S("addTokenToPrefix" + this.lineCurrent + " " + this.iCommand + " " + token );
this.ltoken.addLast$O(token);
if (token.tok != 0) this.lastToken=token;
}, p$1);

Clazz.newMeth(C$, 'compile0$Z', function (isFull) {
this.haveENDIF=false;
this.script=p$1.cleanScriptComments$S.apply(this, [this.script]);
this.ichToken=this.script.indexOf$S("# Jmol state version ");
this.isStateScript=(this.ichToken >= 0);
if (this.isStateScript) {
this.ptSemi=this.script.indexOf$S$I(";", this.ichToken);
if (this.ptSemi >= this.ichToken) (function(a,f){return f.apply(null,a)})([this.vwr, this.script.substring$I$I(this.ichToken + "# Jmol state version ".length$(), this.ptSemi).trim$()],$I$(8).setStateScriptVersion$org_jmol_viewer_Viewer$S);
}this.cchScript=this.script.length$();
 main : while (true){
this.vFunctionStack=Clazz.new_($I$(1,1));
this.htUserFunctions=Clazz.new_($I$(4,1));
this.contextVariables=null;
this.lineNumbers=null;
this.lineIndices=null;
this.aatokenCompiled=null;
this.thisFunction=null;
this.flowContext=null;
this.errorType=null;
this.errorMessage=null;
this.errorMessageUntranslated=null;
this.errorLine=null;
this.nSemiSkip=0;
this.ichToken=0;
this.ichCurrentCommand=0;
this.ichComment=0;
this.ichBrace=0;
this.lineCurrent=($s$[0] = 1, $s$[0]);
this.iCommand=0;
this.tokLastMath=0;
this.lastToken=$I$(3).tokenOff;
this.vBraces=Clazz.new_($I$(1,1));
this.vPush=Clazz.new_($I$(1,1));
this.pushCount=0;
this.iBrace=0;
this.braceCount=0;
this.parenCount=0;
this.isDotDot=false;
this.ptSemi=-10;
this.cchToken=0;
this.lnLength=8;
this.lineNumbers=Clazz.array(Short.TYPE, [this.lnLength]);
this.lineIndices=Clazz.array(Integer.TYPE, [this.lnLength, 2]);
this.isNewSet=this.isSetBrace=false;
this.ptNewSetModifier=1;
this.isShowScriptOutput=false;
this.iHaveQuotedString=false;
this.checkImpliedScriptCmd=false;
this.lltoken=Clazz.new_($I$(1,1));
this.ltoken=Clazz.new_($I$(1,1));
this.tokCommand=0;
this.lastFlowCommand=null;
this.tokenAndEquals=null;
this.tokInitialPlusPlus=0;
this.setBraceCount=0;
this.bracketCount=0;
this.forPoint3=-1;
this.setEqualPt=2147483647;
this.endOfLine=false;
this.comment=null;
this.isEndOfCommand=false;
this.needRightParen=false;
this.lastFlowCommand=null;
this.forceFlowContext=null;
this.theTok=0;
var iLine=($s$[0] = 1, $s$[0]);
for (; true; this.ichToken+=this.cchToken) {
if ((this.nTokens=this.ltoken.size$()) == 0) {
if (this.thisFunction != null  && this.thisFunction.chpt0 == 0 ) this.thisFunction.chpt0=this.ichToken;
this.ichCurrentCommand=this.ichToken;
iLine=this.lineCurrent;
}if (p$1.lookingAtLeadingWhitespace.apply(this, [])) continue;
this.endOfLine=false;
if (!this.isEndOfCommand) {
this.endOfLine=p$1.lookingAtEndOfLine.apply(this, []);
switch (this.endOfLine ? 0 : p$1.lookingAtComment.apply(this, [])) {
case 2:
continue;
case 3:
this.isEndOfCommand=true;
continue;
case 1:
this.isEndOfCommand=true;
this.comment=this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken).trim$();
break;
}
this.isEndOfCommand=this.isEndOfCommand || this.endOfLine || p$1.lookingAtTerminator.apply(this, [])  ;
}if (this.isEndOfCommand) {
this.isEndOfCommand=false;
switch (p$1.processTokenList$H$Z.apply(this, [iLine, isFull])) {
case 2:
continue;
case 4:
return false;
}
this.checkImpliedScriptCmd=false;
if (this.ichToken < this.cchScript) continue;
if (this.flowContext != null ) {
this.ichCurrentCommand=this.ichToken=this.cchScript;
while (this.flowContext != null ){
p$1.fixFlowAddLine$org_jmol_script_ScriptFlowContext.apply(this, [this.flowContext]);
if (!this.haveENDIF && this.flowContext.checkForceEndIf$I(0) ) {
p$1.forceFlowEnd$org_jmol_script_T.apply(this, [this.flowContext.token]);
p$1.processTokenList$H$Z.apply(this, [iLine, isFull]);
} else {
this.lineCurrent=($s$[0] = this.flowContext.lineStart, $s$[0]);
this.iCommand=this.flowContext.pt0;
this.ichCurrentCommand=this.lineIndices[this.iCommand][0];
this.ichToken=this.ichEnd=this.lineIndices[this.iCommand][1];
return this.errorStr$I$S(11, (this.flowContext.$function == null  ? $I$(3).nameOf$I(this.flowContext.token.tok) : this.flowContext.$function.getSignature$()));
}}
this.lltoken.addLast$O(Clazz.array($I$(3), -1, [$I$(3).o$I$O(0, "// end of script")]));
}p$1.setAaTokenCompiled.apply(this, []);
return true;
}if (this.nTokens > 0 && !this.isDotDot ) {
switch (p$1.checkSpecialParameterSyntax.apply(this, [])) {
case 2:
continue;
case 4:
return false;
}
}if (p$1.lookingAtLookupToken$I.apply(this, [this.ichToken])) {
switch (p$1.parseKnownToken.apply(this, [])) {
case 2:
continue;
case 4:
return false;
case 5:
this.haveENDIF=true;
continue main;
}
switch (p$1.parseCommandParameter$H$Z.apply(this, [iLine, isFull])) {
case 2:
continue;
case 4:
return false;
case 5:
this.haveENDIF=true;
continue main;
}
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [this.theToken]);
continue;
}if (this.nTokens == 0 || (this.isNewSet || this.isSetBrace ) && this.nTokens == this.ptNewSetModifier  ) {
if (this.nTokens == 0) {
if (p$1.lookingAtString$Z.apply(this, [true])) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [p$1.setCommand$org_jmol_script_T.apply(this, [$I$(3).tokenScript])]);
this.cchToken=0;
continue;
}if (p$1.lookingAtImpliedString$Z$Z$Z.apply(this, [true, true, true])) this.ichEnd=this.ichToken + this.cchToken;
}return this.commandExpected$();
}return this.errorStr$I$S(19, this.script.substring$I$I(this.ichToken, this.ichToken + 1));
}
}
}, p$1);

Clazz.newMeth(C$, 'setAaTokenCompiled', function () {
this.aatokenCompiled=this.lltoken.toArray$OA(Clazz.array($I$(3), [this.lltoken.size$(), null]));
}, p$1);

Clazz.newMeth(C$, 'lookingAtLeadingWhitespace', function () {
var ichT=this.ichToken;
while (C$.isSpaceOrTab$C(p$1.charAt$I.apply(this, [ichT])))++ichT;

if (p$1.isLineContinuation$I$Z.apply(this, [ichT, true])) ichT+=1 + p$1.nCharNewLine$I.apply(this, [ichT + 1]);
this.cchToken=ichT - this.ichToken;
if (this.cchToken == 0) return false;
this.afterWhite=ichT;
return true;
}, p$1);

Clazz.newMeth(C$, 'isLineContinuation$I$Z', function (ichT, checkMathop) {
var isEscaped=(ichT + 2 < this.cchScript && this.script.charAt$I(ichT) == "\\"  && p$1.nCharNewLine$I.apply(this, [ichT + 1]) > 0  || !this.isShowScriptOutput && checkMathop && p$1.lookingAtMathContinuation$I.apply(this, [ichT])   );
if (isEscaped) ($s$[0]=this.lineCurrent,this.lineCurrent=(++$s$[0],$s$[0]));
return isEscaped;
}, p$1);

Clazz.newMeth(C$, 'lookingAtMathContinuation$I', function (ichT) {
var n;
if ((n=p$1.nCharNewLine$I.apply(this, [ichT])) == 0 || this.lastToken.tok == 1073742332 ) return false;
if (this.parenCount > 0 || this.bracketCount > 0 ) return true;
switch (this.tokCommand) {
case 134320141:
case 102436:
this.flowContext.forceEndIf=false;
return false;
case 134320648:
case 102406:
case 134320649:
case 364547:
case 102402:
if (!this.haveENDIF) {
this.flowContext.addLine=1;
this.flowContext.forceEndIf=true;
}return false;
case 36867:
if (this.nTokens > 1 && this.ltoken.get$I(1).tok == 537022465 ) return false;
case 36865:
case 36869:
break;
default:
return false;
}
if (this.lastToken.tok == this.tokLastMath) return true;
ichT+=n;
while (C$.isSpaceOrTab$C(p$1.charAt$I.apply(this, [ichT])))++ichT;

return (p$1.lookingAtLookupToken$I.apply(this, [ichT]) && this.tokLastMath == 1 );
}, p$1);

Clazz.newMeth(C$, 'lookingAtEndOfLine', function () {
if (this.ichToken >= this.cchScript) {
this.ichEnd=this.cchScript;
return true;
}return ((this.cchToken=p$1.nCharNewLine$I.apply(this, [this.ichEnd=this.ichToken])) > 0);
}, p$1);

Clazz.newMeth(C$, 'nCharNewLine$I', function (ichT) {
var ch;
return ((ch=p$1.charAt$I.apply(this, [ichT])) != "\r" ? (ch == "\n" ? 1 : 0) : p$1.charAt$I.apply(this, [++ichT]) == "\n" ? 2 : 1);
}, p$1);

Clazz.newMeth(C$, 'lookingAtTerminator', function () {
var isSemi=(this.script.charAt$I(this.ichToken) == ";");
if (isSemi && this.nTokens > 0 ) this.ptSemi=this.nTokens;
if (!isSemi || this.nSemiSkip-- > 0 ) return false;
this.cchToken=1;
return true;
}, p$1);

Clazz.newMeth(C$, 'lookingAtComment', function () {
var ch=this.script.charAt$I(this.ichToken);
var ichT=this.ichToken;
var ichFirstSharp=-1;
if (this.ichToken == this.ichCurrentCommand && ch == "$"  && (this.isShowScriptOutput || this.ichToken == 0 ) ) {
this.isShowScriptOutput=true;
this.isShowCommand=true;
if (p$1.charAt$I.apply(this, [++ichT]) == "[") while (ch != "]" && !p$1.eol$C.apply(this, [ch=p$1.charAt$I.apply(this, [ichT])]) )++ichT;

this.cchToken=ichT - this.ichToken;
return 2;
} else if (this.isShowScriptOutput && !this.isShowCommand ) {
ichFirstSharp=ichT;
}if (ch == "/" && ichT + 1 < this.cchScript ) switch ((this.script.charCodeAt$I(++ichT))) {
case 47:
ichFirstSharp=this.ichToken;
this.ichEnd=ichT - 1;
break;
case 42:
this.ichEnd=ichT - 1;
var terminator=((ch=p$1.charAt$I.apply(this, [++ichT])) == "*" ? "**/" : "*/");
ichT=this.script.indexOf$S$I(terminator, this.ichToken + 2);
if (ichT < 0) {
this.ichToken=this.cchScript;
return 3;
}p$1.incrementLineCount$S.apply(this, [this.script.substring$I$I(this.ichToken, ichT)]);
this.cchToken=ichT + (ch == "*" ? 3 : 2) - this.ichToken;
return 2;
default:
return 0;
}
var isSharp=(ichFirstSharp < 0);
if (isSharp && !this.haveComments ) return 0;
if (this.ichComment > ichT) ichT=this.ichComment;
for (; ichT < this.cchScript; ichT++) {
if (p$1.eol$C.apply(this, [ch=this.script.charAt$I(ichT)])) {
this.ichEnd=ichT;
if (ichT > 0 && p$1.isLineContinuation$I$Z.apply(this, [ichT - 1, false]) ) {
ichT+=p$1.nCharNewLine$I.apply(this, [ichT]);
continue;
}if (!isSharp && ch == ";" ) continue;
break;
}if (ichFirstSharp >= 0) continue;
if (ch == "#") ichFirstSharp=ichT;
}
if (ichFirstSharp < 0) return 0;
this.ichComment=ichFirstSharp;
if (isSharp && this.nTokens == 0  && this.cchScript - ichFirstSharp >= 3  && this.script.charAt$I(ichFirstSharp + 1) == "j"  && this.script.charAt$I(ichFirstSharp + 2) == "c" ) {
this.cchToken=ichT - this.ichToken;
return 2;
}if (ichFirstSharp != this.ichToken) return 0;
if (isSharp && this.cchScript > this.ichToken + 3  && this.script.charAt$I(this.ichToken + 1) == "j"  && this.script.charAt$I(this.ichToken + 2) == "x"  && C$.isSpaceOrTab$C(this.script.charAt$I(this.ichToken + 3)) ) {
this.cchToken=4;
return 2;
}if (ichT == this.ichToken) return 0;
this.cchToken=ichT - this.ichToken;
return (this.nTokens == 0 ? 1 : 2);
}, p$1);

Clazz.newMeth(C$, 'charAt$I', function (i) {
return (i < this.cchScript ? this.script.charAt$I(i) : "\u0000");
}, p$1);

Clazz.newMeth(C$, 'processTokenList$H$Z', function (iLine, doCompile) {
var n=this.ltoken.size$();
if (n > 0 || this.comment != null  ) {
if (n == 0) {
this.ichCurrentCommand=this.ichToken;
if (this.comment != null ) {
this.isComment=true;
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(0, this.comment)]);
}} else if (this.setBraceCount > 0 && this.endOfLine  && this.ichToken < this.cchScript ) {
return 2;
}if (p$1.wasImpliedScript.apply(this, [])) return 2;
if (this.isNewSet && n > 2  && this.tokAt$I(2) == 1073742336  && (this.tokAt$I(3) == 1275068444 || this.tokAt$I(3) == 1140850693  || this.tokAt$I(3) == 1275335685  || this.tokAt$I(3) == 1275334681 ) ) {
this.ltoken.set$I$O(0, $I$(3).tokenSet);
this.ltoken.add$I$O(1, this.tokAt$I(3) == 1275334681 ? $I$(3).tokenAll : this.ltoken.get$I(1));
} else if (this.tokInitialPlusPlus != 0) {
if (!this.isNewSet) p$1.checkNewSetCommand.apply(this, []);
p$1.tokenizePlusPlus$I$Z.apply(this, [this.tokInitialPlusPlus, true]);
this.ichCurrentCommand-=2;
}this.iCommand=this.lltoken.size$();
if (this.thisFunction != null  && this.thisFunction.cmdpt0 < 0 ) {
this.thisFunction.cmdpt0=this.iCommand;
}if (n == 1 && this.braceCount == 1 ) {
if (this.lastFlowCommand == null ) {
this.parenCount=this.setBraceCount=this.braceCount=0;
this.ltoken.removeItemAt$I(0);
var t=$I$(9).newContext$Z(true);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [p$1.setCommand$org_jmol_script_T.apply(this, [t])]);
p$1.pushContext$org_jmol_script_T.apply(this, [t]);
p$1.addBrace$org_jmol_script_T.apply(this, [this.tokenCommand]);
} else {
this.parenCount=this.setBraceCount=0;
p$1.setCommand$org_jmol_script_T.apply(this, [this.lastFlowCommand]);
if (this.lastFlowCommand.tok != 102439 && (this.tokAt$I(0) == 1073742332) ) this.ltoken.removeItemAt$I(0);
this.lastFlowCommand=null;
this.forceFlowContext=this.flowContext;
}}if (this.bracketCount > 0 || this.setBraceCount > 0  || this.parenCount > 0  || this.braceCount == 1 && !p$1.checkFlowStartBrace$Z.apply(this, [true])  ) {
this.error$I(n == 1 ? 2 : 4);
return 4;
}if (this.needRightParen) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenRightParen]);
this.needRightParen=false;
}if (this.tokAt$I(1) == 1073741974 && $I$(3).tokAttr$I$I(this.tokCommand, 135168) ) {
switch (this.tokAt$I(2)) {
case 0:
case 4:
case 12290:
break;
default:
var t=this.ltoken.removeItemAt$I(2);
this.ltoken.add$I$O(2, (function(a,f){return f.apply(null,a)})([4, t.tok == 2 ? "" + t.intValue : t.value.toString()],$I$(3).o$I$O));
}
}if (this.ltoken.size$() > 0) {
if (doCompile && !p$1.compileCommand.apply(this, []) ) return 4;
if (this.logMessages) {
$I$(7).info$S("-------------------------------------");
}var doEval=true;
switch (this.tokCommand) {
case 364558:
case 102436:
case 134320141:
case 102409:
doEval=(this.atokenInfix.length > 0 && this.atokenInfix[0].intValue != 2147483647 );
break;
}
if (doEval) {
if (this.iCommand == this.lnLength) {
this.lineNumbers=$I$(10).doubleLengthShort$HA(this.lineNumbers);
var lnI=Clazz.array(Integer.TYPE, [this.lnLength * 2, 2]);
System.arraycopy$O$I$O$I$I(this.lineIndices, 0, lnI, 0, this.lnLength);
this.lineIndices=lnI;
this.lnLength*=2;
}this.lineNumbers[this.iCommand]=this.lineNumbers[this.lineNumbers.length - 1]=iLine;
this.lineIndices[this.iCommand][0]=this.ichCurrentCommand;
this.lineIndices[this.iCommand][1]=Math.max(this.ichCurrentCommand, Math.min(this.cchScript, this.ichEnd == this.ichCurrentCommand ? this.ichToken : this.ichEnd));
this.lltoken.addLast$O(this.atokenInfix);
this.iCommand=this.lltoken.size$();
}if (this.tokCommand == 36867) this.lastFlowCommand=null;
}p$1.setCommand$org_jmol_script_T.apply(this, [null]);
this.comment=null;
this.iHaveQuotedString=this.isNewSet=this.isSetBrace=this.needRightParen=false;
this.ptNewSetModifier=1;
this.ltoken.clear$();
this.nTokens=this.nSemiSkip=0;
this.tokInitialPlusPlus=0;
this.tokenAndEquals=null;
this.ptSemi=-10;
this.forPoint3=-1;
this.setEqualPt=2147483647;
}var isOneLine=(this.flowContext != null  && this.flowContext.addLine == 0 );
var isEndFlow=((this.endOfLine || !isOneLine ) && !this.haveENDIF && this.flowContext != null    && this.flowContext.checkForceEndIf$I(-1) );
if (this.endOfLine) {
if (isEndFlow) {
if (this.isComment) {
if (!isOneLine) {
this.flowContext.addLine++;
this.flowContext.forceEndIf=true;
}} else if (n > 0 && !this.haveENDIF  || isOneLine ) {
p$1.forceFlowEnd$org_jmol_script_T.apply(this, [this.flowContext.token]);
if (!isOneLine) {
this.forceFlowContext.forceEndIf=true;
}}this.isEndOfCommand=true;
this.cchToken=0;
this.ichCurrentCommand=this.ichToken;
return 2;
}this.isComment=false;
this.isShowCommand=false;
(($s$[0]=++this.lineCurrent,this.lineCurrent=$s$[0],$s$[0]));
} else if (isEndFlow) {
p$1.forceFlowEnd$org_jmol_script_T.apply(this, [this.flowContext.token]);
this.forceFlowContext.forceEndIf=true;
}if (this.ichToken >= this.cchScript) {
p$1.setCommand$org_jmol_script_T.apply(this, [$I$(3).tokenAll]);
this.theTok=0;
switch (p$1.checkFlowEndBrace.apply(this, [])) {
case 4:
return 4;
case 2:
this.isEndOfCommand=true;
this.cchToken=0;
return 2;
}
this.ichToken=this.cchScript;
return 0;
}return 0;
}, p$1);

Clazz.newMeth(C$, 'addBrace$org_jmol_script_T', function (t) {
this.vBraces.addLast$O(t);
this.iBrace++;
}, p$1);

Clazz.newMeth(C$, 'pushContext$org_jmol_script_T', function (t) {
this.pushCount++;
this.vPush.addLast$O(t);
}, p$1);

Clazz.newMeth(C$, 'wasImpliedScript', function () {
if (this.checkImpliedScriptCmd && this.nTokens >= 2  && (this.tokCommand == 134222850 || this.tokCommand == 4124 ) ) {
var s=(this.nTokens == 2 ? this.lastToken.value.toString().toUpperCase$() : null);
if (this.nTokens > 2 ? !(this.tokAt$I(2) == 268435472 && this.ltoken.get$I(1).value.toString().endsWith$S(".spt") ) : s.endsWith$S(".SORT") || s.endsWith$S(".REVERSE") || s.endsWith$S(".POP") || s.indexOf$S(".SORT(") >= 0   || s.indexOf$S(".REVERSE(") >= 0  || s.indexOf$S(".POP(") >= 0  || s.indexOf$S(".PUSH(") >= 0  || s.endsWith$S("++")  || s.endsWith$S("--")  || s.endsWith$S("=")  || this.tokInitialPlusPlus != 0 ) {
this.ichToken=this.ichCurrentCommand;
this.nTokens=0;
this.ltoken.clear$();
this.cchToken=0;
this.tokCommand=0;
return true;
}}return false;
}, p$1);

Clazz.newMeth(C$, 'compileCommand', function () {
switch (this.ltoken.size$()) {
case 0:
this.atokenInfix=Clazz.array($I$(3), [0]);
return true;
case 4:
if (this.isNewSet && p$1.tokenAt$I.apply(this, [2]).value.equals$O(".") && p$1.tokenAt$I.apply(this, [3]).value.equals$O("spt")  ) {
var fname=p$1.tokenAt$I.apply(this, [1]).value + "." + p$1.tokenAt$I.apply(this, [3]).value ;
this.ltoken.clear$();
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenScript]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(4, fname)]);
this.isNewSet=false;
}}
p$1.setCommand$org_jmol_script_T.apply(this, [p$1.tokenAt$I.apply(this, [0])]);
var size=this.ltoken.size$();
if (size == 1 && $I$(3).tokAttr$I$I(this.tokCommand, 524288) ) p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenOn]);
if (this.tokenAndEquals != null ) {
var j;
var i=0;
for (i=1; i < size; i++) {
if ((j=this.tokAt$I(i)) == 268435666) break;
}
size=i;
i++;
if (this.ltoken.size$() < i) {
$I$(7).error$S("COMPILER ERROR! - andEquals ");
} else {
for (j=1; j < size; j++, i++) this.ltoken.add$I$O(i, p$1.tokenAt$I.apply(this, [j]));

this.ltoken.set$I$O(size, $I$(3).tokenEquals);
this.ltoken.add$I$O(i, this.tokenAndEquals);
this.ltoken.add$I$O(++i, $I$(3).tokenLeftParen);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenRightParen]);
}}this.atokenInfix=this.ltoken.toArray$OA(Clazz.array($I$(3), [size=this.ltoken.size$()]));
return this.compileExpressions$();
}, p$1);

Clazz.newMeth(C$, 'tokenAt$I', function (i) {
return this.ltoken.get$I(i);
}, p$1);

Clazz.newMeth(C$, 'tokAt$I', function (i) {
return (i < this.ltoken.size$() ? p$1.tokenAt$I.apply(this, [i]).tok : 0);
});

Clazz.newMeth(C$, 'setCommand$org_jmol_script_T', function (token) {
this.tokenCommand=token;
if (token == null ) {
this.tokCommand=0;
} else {
this.tokCommand=this.tokenCommand.tok;
this.isMathExpressionCommand=(this.tokCommand == 1073741824 || $I$(3).tokAttr$I$I(this.tokCommand, 36864) );
this.isSetOrDefine=(this.tokCommand == 36867 || this.tokCommand == 12290 );
this.isCommaAsOrAllowed=$I$(3).tokAttr$I$I(this.tokCommand, 12288);
this.implicitString=$I$(3).tokAttr$I$I(this.tokCommand, 20480);
}return token;
}, p$1);

Clazz.newMeth(C$, 'replaceCommand$org_jmol_script_T', function (token) {
this.ltoken.removeItemAt$I(0);
this.ltoken.add$I$O(0, p$1.setCommand$org_jmol_script_T.apply(this, [token]));
}, p$1);

Clazz.newMeth(C$, 'getPrefixToken', function () {
this.ident=this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken);
this.identLC=this.ident.toLowerCase$();
var isUserVar=this.lastToken.tok != 1073742336 && !this.isDotDot  && p$1.isContextVariable$S.apply(this, [this.identLC]) ;
var myName=this.ident;
var preserveCase=null;
if (this.nTokens == 0) this.isUserToken=isUserVar;
if (this.nTokens == 1 && (this.tokCommand == 134320141 || this.tokCommand == 102436  || this.tokCommand == 36868 )  || this.nTokens != 0 && isUserVar   || !this.isDotDot && this.isUserFunction$S(this.identLC) && ((preserveCase=this.ident) != null ) && (this.thisFunction == null  || !this.thisFunction.name.equals$O(this.identLC) )   ) {
this.ident=(preserveCase == null  ? this.identLC : preserveCase);
this.theToken=null;
} else if (this.ident.length$() == 1 || this.lastToken.tok == 268435490 ) {
if ((this.theToken=$I$(3).getTokenFromName$S(this.ident)) == null  && (this.theToken=$I$(3).getTokenFromName$S(this.identLC)) != null  ) this.theToken=$I$(3).tv$I$I$O(this.theToken.tok, this.theToken.intValue, this.ident);
} else {
this.theToken=$I$(3).getTokenFromName$S(this.identLC);
if (isUserVar && this.theToken != null   && !this.theToken.value.toString().equalsIgnoreCase$S(this.identLC) ) {
this.theToken=null;
}if (this.theToken != null ) switch (this.lastToken.tok) {
case 1073742336:
case 268435520:
case 268435504:
this.theToken=$I$(3).o$I$O(this.theToken.tok, this.ident);
}
}if (this.theToken == null ) {
this.theToken=(function(a,f){return f.apply(null,a)})([(this.identLC.indexOf$S("property_") == 0 ? 1715472409 : 1073741824), 2147483647, this.ident],$I$(5).newSV$I$I$O).setName$S(myName);
}return this.theTok=this.theToken.tok;
}, p$1);

Clazz.newMeth(C$, 'checkSpecialParameterSyntax', function () {
if (p$1.lookingAtString$Z.apply(this, [!this.implicitString])) {
if (this.cchToken < 0) return p$1.ERROR$I.apply(this, [4]);
var str=p$1.getUnescapedStringLiteral$Z.apply(this, [this.lastToken != null  && !this.iHaveQuotedString  && this.lastToken.tok != 1073741984  && (this.tokCommand == 36867 && this.nTokens == 2  && this.lastToken.tok == 545259546  || this.tokCommand == 134222849  || this.tokCommand == 1610616835  || this.tokCommand == 134222850  || this.tokCommand == 4124 ) ]);
this.iHaveQuotedString=true;
if ((this.tokCommand == 134222849 || this.tokCommand == 135174 ) && this.lastToken.tok == 134221834  || this.tokCommand == 134221834 && str.indexOf$S("@") < 0  ) {
if (!p$1.getData$S.apply(this, [str])) {
return p$1.ERROR$I$S.apply(this, [11, "data"]);
}} else {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(4, str)]);
if (this.implicitString) {
this.ichEnd=this.ichToken + this.cchToken;
this.isEndOfCommand=true;
}}return 2;
}var ch;
if (this.nTokens == this.ptNewSetModifier) {
ch=this.script.charAt$I(this.ichToken);
var isAndEquals=("+-\\*/&|=".indexOf$I(ch) >= 0);
var isOperation=(isAndEquals || ch == "."  || ch == "[" );
var ch2=p$1.charAt$I.apply(this, [this.ichToken + 1]);
if (!this.isNewSet && this.isUserToken && isOperation && (ch == "=" || ch2 == ch  || ch2 == "=" )  ) {
this.isNewSet=true;
}if (this.isNewSet || this.tokCommand == 36867  || $I$(3).tokAttr$I$I(this.tokCommand, 536870912) ) {
if (ch == "=") this.setEqualPt=this.ichToken;
if ($I$(3).tokAttr$I$I(this.tokCommand, 536870912) && ch == "="  || (this.isNewSet || this.isSetBrace ) && isOperation  ) {
p$1.setCommand$org_jmol_script_T.apply(this, [isAndEquals ? $I$(3).tokenSet : ch == "[" && !this.isSetBrace  || ch == "." && ch2 == "."   ? $I$(3).tokenSetArray : $I$(3).tokenSetProperty]);
this.ltoken.add$I$O(0, this.tokenCommand);
this.cchToken=1;
switch (ch.$c()) {
case 91:
this.tokLastMath=1;
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenArrayOpen]);
this.bracketCount++;
return 2;
case 46:
if (ch2 == ".") {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenArrayOpen]);
this.cchToken=2;
this.isDotDot=true;
return 2;
}p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(1073742336, ".")]);
return 2;
case 45:
case 43:
case 42:
case 47:
case 92:
case 38:
case 124:
if (ch2.$c() == 0 ) return p$1.ERROR$I.apply(this, [4]);
if (ch2 != ch && ch2 != "=" ) return p$1.ERROR$I$S.apply(this, [1, "\"" + ch + "\"" ]);
break;
default:
this.lastToken=$I$(3).tokenMinus;
return 2;
}
}}} out : switch (this.tokCommand) {
case 134222350:
switch (this.lastToken.tok) {
case 4120:
case 1296041986:
case 1715472409:
case 1073877010:
if (this.nTokens == 2) this.iHaveQuotedString=true;
break;
case 1073741925:
case 1073742189:
break;
default:
if (!this.iHaveQuotedString && this.nTokens != 2 ) return 0;
break;
}
case 134222849:
case 134222850:
case 4124:
case 1275072526:
if (this.script.charAt$I(this.ichToken) == "@") {
this.iHaveQuotedString=true;
return 0;
}switch (this.tokCommand) {
case 4124:
this.haveMacro=true;
break out;
case 134222849:
if (this.nTokens == 1 || this.nTokens == 2 && (this.tokAt$I(1) == 1073741839)  ) {
var isDataBase=(function(a,f){return f.apply(null,a)})([p$1.charAt$I.apply(this, [this.ichToken])],$I$(11).isDatabaseCode$C);
if (p$1.lookingAtLoadFormat$Z.apply(this, [isDataBase])) {
var strFormat=this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken);
var token=(function(a,f){return f.apply(null,a)})([strFormat.toLowerCase$()],$I$(3).getTokenFromName$S);
switch (token == null  ? 0 : token.tok) {
case 36868:
case 1073742015:
case 1073742077:
case 1073741839:
case 1610616855:
case 4130:
case 1073877011:
if (this.nTokens != 1) return 4;
case 134221834:
case 1228935687:
case 1073741984:
case 1094717454:
case 134218757:
case 536870926:
case 1073741849:
case 1073741851:
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [token]);
break;
default:
var tok=(isDataBase ? 4 : (function(a,f){return f.apply(null,a)})([strFormat=strFormat.toLowerCase$(), ";xyz;vxyz;vibration;temperature;occupancy;partialcharge;"],$I$(12).isOneOf$S$S) ? 1073741824 : 0);
if (tok != 0) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(tok, strFormat)]);
this.iHaveQuotedString=(tok == 4);
}}
return 2;
}break;
}var bs;
if (this.script.charAt$I(this.ichToken) == "{" || this.parenCount > 0 ) break out;
if ((bs=this.lookingAtBitset$()) != null ) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(10, bs)]);
return 2;
}}
if (!this.iHaveQuotedString && p$1.lookingAtImpliedString$Z$Z$Z.apply(this, [this.tokCommand == 134222350, this.tokCommand == 134222849, this.nTokens > 1 || this.tokCommand != 134222850 && this.tokCommand != 4124  ]) ) {
var str=this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken);
if (this.tokCommand == 134222850) {
if (str.startsWith$S("javascript:")) {
p$1.lookingAtImpliedString$Z$Z$Z.apply(this, [true, true, true]);
str=this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken);
} else if (str.toUpperCase$().indexOf$S(".PUSH(") >= 0) {
this.cchToken=0;
this.iHaveQuotedString=true;
return 2;
}}this.iHaveQuotedString=true;
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(4, str)]);
return 2;
}break;
case 4156:
if (this.nTokens == 1 && p$1.lookForSyncID.apply(this, []) ) {
var ident=this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken);
var iident=$I$(12).parseInt$S(ident);
if (iident == -2147483648 || Math.abs(iident) < 1000 ) p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(1073741824, ident)]);
 else p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).i$I(iident)]);
return 2;
}break;
case 134221856:
if (this.nTokens == 2 && this.lastToken.tok == 4115 ) this.iHaveQuotedString=true;
if (!this.iHaveQuotedString) {
if (this.script.charAt$I(this.ichToken) == "@") {
this.iHaveQuotedString=true;
return 0;
}if (p$1.lookingAtImpliedString$Z$Z$Z.apply(this, [true, true, true])) {
var str=this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken);
var pt=str.indexOf$S(" as ");
if (pt > 0) str=str.substring$I$I(0, this.cchToken=pt);
if (str.indexOf$S(" ") < 0 && str.indexOf$S(".") >= 0 ) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(4, str)]);
this.iHaveQuotedString=true;
return 2;
}}}break;
}
this.implicitString&=(this.nTokens == 1);
if (this.implicitString && !((this.tokCommand == 134222850 || this.tokCommand == 4124 ) && this.iHaveQuotedString ) && p$1.lookingAtImpliedString$Z$Z$Z.apply(this, [true, true, true])  ) {
var str=this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken);
if (this.tokCommand == 1825200146 && (function(a,f){return f.apply(null,a)})([str.toLowerCase$(), ";on;off;hide;display;"],$I$(12).isOneOf$S$S) ) p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [(function(a,f){return f.apply(null,a)})([str.toLowerCase$()],$I$(3).getTokenFromName$S)]);
 else p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(4, str)]);
return 2;
}if (p$1.lookingAtObjectID.apply(this, [])) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).getTokenFromName$S("$")]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [(function(a,f){return f.apply(null,a)})([1073741824, this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken)],$I$(3).o$I$O)]);
return 2;
}var value;
if (!Float.isNaN$F(value=p$1.lookingAtExponential.apply(this, []))) {
p$1.addNumber$I$I$O.apply(this, [3, 2147483647, Float.valueOf$F(value)]);
return 2;
}if (p$1.lookingAtDecimal.apply(this, [])) {
value=Float.parseFloat$S(this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken));
var intValue=((function(a,f){return f.apply(null,a)})([this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken)],$I$(13).getFloatEncodedInt$S));
p$1.addNumber$I$I$O.apply(this, [3, intValue, Float.valueOf$F(value)]);
return 2;
}if (p$1.lookingAtSeqcode.apply(this, [])) {
ch=this.script.charAt$I(this.ichToken);
try {
var seqNum=(ch == "*" || ch == "^"  ? 2147483647 : Integer.parseInt$S(this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken - 2)));
var insertionCode=this.script.charAt$I(this.ichToken + this.cchToken - 1);
if (insertionCode == "^") insertionCode=" ";
if (seqNum < 0) {
seqNum=-seqNum;
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenMinus]);
}var seqcode=$I$(14).getSeqcodeFor$I$C(seqNum, insertionCode);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tv$I$I$O(5, seqcode, "seqcode")]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
return p$1.ERROR$I$S.apply(this, [9, "" + ch]);
} else {
throw nfe;
}
}
return 2;
}var val=p$1.lookingAtInteger.apply(this, []);
if (val != 2147483647) {
var intString=this.script.substring$I$I(this.ichToken, this.ichToken + this.cchToken);
if (this.tokCommand == 102407 || this.tokCommand == 102408 ) {
if (this.nTokens != 1) return p$1.ERROR$I.apply(this, [0]);
var f=(this.flowContext == null  ? null : this.flowContext.getBreakableContext$I(val=Math.abs(val)));
if (f == null ) return p$1.ERROR$I$S.apply(this, [1, this.tokenCommand.value]);
p$1.tokenAt$I.apply(this, [0]).intValue=f.pt0;
}p$1.addNumber$I$I$O.apply(this, [2, val, intString]);
return 2;
}if (!this.isMathExpressionCommand && this.parenCount == 0  || this.lastToken.tok != 1073741824 && !$I$(15).tokenAttr$org_jmol_script_T$I(this.lastToken, 134217728)  ) {
var isBondOrMatrix=(this.script.charAt$I(this.ichToken) == "[");
var bs=this.lookingAtBitset$();
if (bs != null ) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [(function(a,f){return f.apply(null,a)})([10, isBondOrMatrix ? $I$(16).newBS$javajs_util_BS$IA(bs, null) : bs],$I$(3).o$I$O)]);
return 2;
}if (isBondOrMatrix) {
var m=p$1.lookingAtMatrix.apply(this, []);
if (Clazz.instanceOf(m, "javajs.util.M34")) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [(function(a,f){return f.apply(null,a)})([(Clazz.instanceOf(m, "javajs.util.M4") ? 12 : 11), m],$I$(3).o$I$O)]);
return 2;
}}}return 0;
}, p$1);

Clazz.newMeth(C$, 'addNumber$I$I$O', function (tok, i, v) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [this.afterWhite == this.ichToken ? $I$(5).newSV$I$I$O(tok, i, v) : $I$(3).tv$I$I$O(tok, i, v)]);
}, p$1);

Clazz.newMeth(C$, 'lookingAtMatrix', function () {
var ipt;
var m;
if (this.ichToken + 4 >= this.cchScript || this.script.charAt$I(this.ichToken) != "["  || this.script.charAt$I(this.ichToken + 1) != "["  || (ipt=this.script.indexOf$S$I("]]", this.ichToken)) < 0  || (m=(function(a,f){return f.apply(null,a)})([this.script.substring$I$I(this.ichToken, ipt + 2)],$I$(17).unescapeMatrix$S)) == null  ) return null;
this.cchToken=ipt + 2 - this.ichToken;
return m;
}, p$1);

Clazz.newMeth(C$, 'parseKnownToken', function () {
var tok=p$1.getPrefixToken.apply(this, []);
var token;
if (this.isDotDot) {
if (tok == 268435520) {
this.bracketCount++;
} else {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(4, this.ident)]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenArrayClose]);
}this.isDotDot=false;
return 2;
}if (this.tokLastMath != 0) this.tokLastMath=tok;
if (this.flowContext != null  && this.flowContext.token.tok == 102410  && this.flowContext.$var != null   && tok != 102411  && tok != 102413  && this.lastToken.tok != 102410 ) return p$1.ERROR$I$S.apply(this, [1, this.ident]);
if (this.lastToken.tok == 12290 && tok != 1073742332  && this.nTokens != 1 ) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [tok == 12290 ? this.lastToken : $I$(3).o$I$O(4, this.ident)]);
return 2;
}switch (tok) {
case 1073741824:
if (this.nTokens == 0 && !this.checkImpliedScriptCmd ) {
if (this.ident.charAt$I(0) == "\'") {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [p$1.setCommand$org_jmol_script_T.apply(this, [$I$(3).tokenScript])]);
this.cchToken=0;
return 2;
}if (p$1.charAt$I.apply(this, [this.ichToken + this.cchToken]) == ".") {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [p$1.setCommand$org_jmol_script_T.apply(this, [$I$(3).tokenScript])]);
this.nTokens=1;
this.cchToken=0;
this.checkImpliedScriptCmd=true;
return 2;
}}break;
case 268435666:
if (this.nSemiSkip == this.forPoint3 && this.nTokens == this.ptSemi + 2 ) {
token=this.lastToken;
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenEquals]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [token]);
token=(function(a,f){return f.apply(null,a)})([this.ident.substring$I$I(0, 1)],$I$(3).getTokenFromName$S);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [token]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenLeftParen]);
this.needRightParen=true;
return 2;
}p$1.checkNewSetCommand.apply(this, []);
if (this.tokCommand == 36867) {
this.tokenAndEquals=(function(a,f){return f.apply(null,a)})([this.ident.substring$I$I(0, 1)],$I$(3).getTokenFromName$S);
this.setEqualPt=this.ichToken;
return 0;
}if (this.tokCommand == 554176565 || this.tokCommand == 554176526 ) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [this.tokenCommand]);
p$1.replaceCommand$org_jmol_script_T.apply(this, [$I$(3).tokenSet]);
this.tokenAndEquals=(function(a,f){return f.apply(null,a)})([this.ident.substring$I$I(0, 1)],$I$(3).getTokenFromName$S);
this.setEqualPt=this.ichToken;
return 0;
}return 2;
case 268435649:
case 268435650:
if (this.afterWhite == this.ichToken || this.afterMath == this.ichToken ) this.theToken=$I$(3).tv$I$I$O(this.theToken.tok, -1, this.theToken.value);
if (!this.isNewSet && this.nTokens == 1 ) p$1.checkNewSetCommand.apply(this, []);
if (this.isNewSet && this.parenCount == 0  && this.bracketCount == 0  && this.ichToken <= this.setEqualPt ) {
p$1.tokenizePlusPlus$I$Z.apply(this, [tok, false]);
return 2;
} else if (this.nSemiSkip == this.forPoint3 && this.nTokens == this.ptSemi + 2 ) {
token=this.lastToken;
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenEquals]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [token]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [tok == 268435649 ? $I$(3).tokenMinus : $I$(3).tokenPlus]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).i$I(1)]);
return 2;
}break;
case 268435860:
if (this.parenCount == 0 && this.bracketCount == 0 ) this.setEqualPt=this.ichToken;
break;
case 1073742336:
if (this.tokCommand == 36867 && this.parenCount == 0  && this.bracketCount == 0  && this.ichToken < this.setEqualPt  && this.ltoken.size$() > 1  && this.ltoken.get$I(1).tok == 1073742332 ) {
this.ltoken.set$I$O(0, $I$(3).tokenSetProperty);
this.ltoken.add$I$O(1, $I$(3).tokenExpressionBegin);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenExpressionEnd]);
this.setEqualPt=0;
}break;
case 1073742332:
if (++this.braceCount == 1 && this.parenCount == 0  && p$1.checkFlowStartBrace$Z.apply(this, [false]) ) {
this.isEndOfCommand=true;
var f=(this.flowContext != null  && this.flowContext.addLine == 0  || this.forceFlowContext == null   ? this.flowContext : this.forceFlowContext);
if (f != null ) {
f.addLine=0;
f.forceEndIf=false;
this.lastToken=$I$(3).tokenLeftBrace;
this.forceFlowContext=f;
}return 2;
}this.parenCount++;
break;
case 268435472:
this.parenCount++;
if (this.nTokens > 1 && (this.lastToken.tok == 1275082245 || this.lastToken.tok == 134320648  || this.lastToken.tok == 134320649 ) ) this.nSemiSkip+=2;
break;
case 1073742338:
if (this.iBrace > 0 && this.parenCount == 0  && this.braceCount == 0 ) {
this.ichBrace=this.ichToken;
if (this.nTokens == 0) {
this.braceCount=this.parenCount=1;
} else {
if (!p$1.wasImpliedScript.apply(this, [])) {
this.braceCount=this.parenCount=this.nSemiSkip=0;
p$1.addBrace$org_jmol_script_T.apply(this, [this.theToken]);
this.isEndOfCommand=true;
this.ichEnd=this.ichToken;
}return 2;
}}this.braceCount--;
case 268435473:
if (--this.parenCount < 0) return p$1.ERROR$I$S.apply(this, [16, this.ident]);
if (this.parenCount == 0) this.nSemiSkip=0;
if (this.needRightParen) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenRightParen]);
this.needRightParen=false;
}break;
case 268435520:
if (this.ichToken > 0 && (function(a,f){return f.apply(null,a)})([this.script.charAt$I(this.ichToken - 1)],$I$(12).isWhitespace$C) ) p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenSpaceBeforeSquare]);
this.bracketCount++;
break;
case 268435521:
this.bracketCount--;
if (this.bracketCount < 0) return p$1.ERROR$I$S.apply(this, [16, "]"]);
break;
case 1073742337:
this.isDotDot=true;
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenArrayOpen]);
return 2;
}
switch (this.lastToken.tok) {
case 1073742336:
case 1073742337:
case 268435504:
case 268435520:
return 0;
}
switch (tok) {
case 102409:
if (this.tokCommand == 135174 || this.tokCommand == 4103 && this.nTokens == 1  ) return 0;
if (!this.haveENDIF) return 5;
case 364548:
if (this.flowContext != null ) this.flowContext.forceEndIf=false;
case 364547:
if (this.nTokens > 0) {
this.isEndOfCommand=true;
this.cchToken=0;
return 2;
}break;
case 134320648:
case 102411:
case 102413:
case 102402:
case 134320649:
case 102410:
case 102406:
case 102412:
if (this.nTokens > 1 && this.tokCommand != 36867  && this.nSemiSkip == 0 ) {
this.isEndOfCommand=true;
if (this.flowContext != null ) this.flowContext.forceEndIf=true;
this.cchToken=0;
return 2;
}break;
}
return 0;
}, p$1);

Clazz.newMeth(C$, 'tokenizePlusPlus$I$Z', function (tok, isPlusPlusX) {
if (isPlusPlusX) {
p$1.setCommand$org_jmol_script_T.apply(this, [$I$(3).tokenSet]);
if (this.nTokens == 1) this.ltoken.add$I$O(0, this.tokenCommand);
}this.nTokens=this.ltoken.size$();
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenEquals]);
this.setEqualPt=0;
for (var i=1; i < this.nTokens; i++) p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [this.ltoken.get$I(i)]);

p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [tok == 268435649 ? $I$(3).tokenMinus : $I$(3).tokenPlus]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).i$I(1)]);
}, p$1);

Clazz.newMeth(C$, 'checkNewSetCommand', function () {
var name=this.ltoken.get$I(0).value.toString();
if (!p$1.isContextVariable$S.apply(this, [name.toLowerCase$()])) return false;
var t=p$1.setNewSetCommand$Z$S.apply(this, [false, name]);
p$1.setCommand$org_jmol_script_T.apply(this, [$I$(3).tokenSet]);
this.ltoken.add$I$O(0, this.tokenCommand);
this.ltoken.set$I$O(1, t);
return true;
}, p$1);

Clazz.newMeth(C$, 'parseCommandParameter$H$Z', function (iLine, isFull) {
this.nTokens=this.ltoken.size$();
switch (this.tokCommand) {
case 0:
this.lastToken=$I$(3).tokenOff;
this.ichCurrentCommand=this.ichEnd=this.ichToken;
p$1.setCommand$org_jmol_script_T.apply(this, [this.theToken]);
if (this.logMessages) $I$(7).info$S("compiling " + this.theToken);
var isFlowCmd=$I$(3).tokAttr$I$I(this.tokCommand, 102400);
if (isFlowCmd) {
this.lastFlowCommand=this.tokenCommand;
}var ret=p$1.checkFlowEndBrace.apply(this, []);
if (ret == 4) return 4;
 else if (ret == 2) {
this.isEndOfCommand=true;
this.cchToken=0;
return 2;
}switch (this.theTok) {
case 1073742332:
break;
case 268435490:
this.braceCount++;
this.isEndOfCommand=true;
return 0;
case 102409:
return 0;
case 364547:
case 102402:
p$1.fixFlowAddLine$org_jmol_script_ScriptFlowContext.apply(this, [this.flowContext]);
if (this.lltoken.get$I(this.iCommand - 1)[0].tok == 102409 && this.forceFlowContext != null   && this.forceFlowContext.forceEndIf  && this.forceFlowContext.addLine > 0  && p$1.isFlowIfContextOK$org_jmol_script_ScriptFlowContext.apply(this, [this.forceFlowContext]) ) {
this.flowContext=this.forceFlowContext;
this.flowContext.forceEndIf=true;
this.lltoken.removeItemAt$I(--this.iCommand);
} else if (this.flowContext != null  && this.flowContext.addLine > 0 ) {
while (this.flowContext != null  && !p$1.isFlowIfContextOK$org_jmol_script_ScriptFlowContext.apply(this, [this.flowContext]) ){
if (this.flowContext.checkForceEndIf$I(0)) {
p$1.forceFlowEnd$org_jmol_script_T.apply(this, [this.flowContext.token]);
p$1.processTokenList$H$Z.apply(this, [iLine, isFull]);
p$1.fixFlowAddLine$org_jmol_script_ScriptFlowContext.apply(this, [this.flowContext]);
p$1.setCommand$org_jmol_script_T.apply(this, [this.theToken]);
this.theTok=this.theToken.tok;
} else {
break;
}}
}default:
if (isFlowCmd) {
switch (p$1.checkFlowCommand$S.apply(this, [this.tokenCommand.value])) {
case 4:
return 4;
case 2:
return 2;
case 5:
return 5;
case 0:
this.theToken=this.tokenCommand;
if (this.theTok == 102411) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [this.tokenCommand]);
this.theToken=$I$(3).tokenLeftParen;
}return 0;
}
}if (this.flowContext != null  && !this.haveENDIF  && this.flowContext.addLine > 0 ) {
p$1.fixFlowAddLine$org_jmol_script_ScriptFlowContext.apply(this, [this.flowContext]);
while (this.flowContext != null ){
if (this.flowContext.checkForceEndIf$I(0)) {
p$1.forceFlowEnd$org_jmol_script_T.apply(this, [this.flowContext.token]);
p$1.processTokenList$H$Z.apply(this, [iLine, isFull]);
p$1.setCommand$org_jmol_script_T.apply(this, [this.theToken]);
this.theTok=this.theToken.tok;
} else {
break;
}}
}if (this.theTok == 1073742338) {
this.forceFlowContext=null;
p$1.addBrace$org_jmol_script_T.apply(this, [this.tokenCommand]);
this.tokCommand=0;
return 2;
}this.lastFlowCommand=null;
}
if (this.theTok == 268435552) {
p$1.setCommand$org_jmol_script_T.apply(this, [this.theToken=$I$(3).o$I$O(4143, "resume")]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [this.theToken]);
this.theToken=$I$(3).o$I$O(14, "context");
return 0;
}if ($I$(3).tokAttr$I$I(this.tokCommand, 4096)) break;
this.isSetBrace=(this.theTok == 1073742332);
if (this.isSetBrace) {
if (!p$1.lookingAtSetBraceSyntax.apply(this, [])) {
this.isEndOfCommand=true;
if (this.flowContext != null ) this.flowContext.forceEndIf=false;
}} else {
switch (this.theTok) {
case 268435650:
case 268435649:
this.tokInitialPlusPlus=this.theTok;
this.tokCommand=0;
return 2;
case 1073741824:
case 36868:
case 12290:
case 268435472:
break;
default:
if (!$I$(3).tokAttr$I$I(this.theTok, 1073741824) && !$I$(3).tokAttr$I$I(this.theTok, 536870912) && !p$1.isContextVariable$S.apply(this, [this.identLC])  ) {
this.commandExpected$();
return 4;
}}
}this.theToken=p$1.setNewSetCommand$Z$S.apply(this, [this.isSetBrace, this.ident]);
break;
case 102412:
switch (this.nTokens) {
case 1:
if (this.theTok != 268435472) return p$1.ERROR$I$S.apply(this, [15, "("]);
break;
case 2:
if (this.theTok != 268435473) (this.tokenCommand).name0=this.ident;
p$1.newContextVariable$S.apply(this, [this.ident]);
break;
case 3:
if (this.theTok != 268435473) return p$1.ERROR$I$S.apply(this, [15, ")"]);
this.isEndOfCommand=true;
this.ichEnd=this.ichToken + 1;
this.flowContext.setLine$();
break;
default:
return p$1.ERROR$I.apply(this, [0]);
}
break;
case 102436:
case 134320141:
if (this.tokenCommand.intValue == 0) {
if (this.nTokens != 1) break;
this.tokenCommand.value=this.ident;
return 2;
}if (this.nTokens == 1) {
if (this.thisFunction != null ) this.vFunctionStack.add$I$O(0, this.thisFunction);
this.thisFunction=(this.tokCommand == 102436 ? $I$(18).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.script.ScriptParallelProcessor", null, null) : Clazz.new_($I$(19,1).c$$S$I,[this.ident, this.tokCommand]));
this.thisFunction.set$S$I(this.ident, this.tokCommand);
this.htUserFunctions.put$O$O(this.ident, $I$(20).TRUE);
this.flowContext.setFunction$org_jmol_script_ScriptFunction(this.thisFunction);
break;
}if (this.nTokens == 2) {
if (this.theTok != 268435472) return p$1.ERROR$I$S.apply(this, [15, "("]);
break;
}if (this.nTokens == 3 && this.theTok == 268435473 ) break;
if (this.nTokens % 2 == 0) {
if (this.theTok != 268435504 && this.theTok != 268435473 ) return p$1.ERROR$I$S.apply(this, [15, ")"]);
break;
}this.thisFunction.addVariable$S$Z(this.ident, true);
break;
case 102411:
if (this.nTokens > 1 && this.parenCount == 0  && this.braceCount == 0  && this.theTok == 268435490 ) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenRightParen]);
this.braceCount=1;
this.isEndOfCommand=true;
this.cchToken=0;
return 2;
}break;
case 102413:
if (this.nTokens > 1) {
this.braceCount=1;
this.isEndOfCommand=true;
this.cchToken=0;
return 2;
}break;
case 364547:
if (this.nTokens == 1 && this.theTok != 134320649 ) {
this.isEndOfCommand=true;
this.cchToken=0;
return 2;
}if (this.nTokens != 1 || this.theTok != 134320649 && this.theTok != 1073742332  ) return p$1.ERROR$I.apply(this, [0]);
p$1.replaceCommand$org_jmol_script_T.apply(this, [this.flowContext.token=$I$(9).newCmd$I$O(102402, "elseif")]);
this.tokCommand=102402;
return 2;
case 102409:
if (this.nTokens != 1) return p$1.ERROR$I.apply(this, [0]);
if (!p$1.checkFlowEnd$I$S$I$Z.apply(this, [this.theTok, this.ident, this.ichCurrentCommand, true])) return 4;
if (this.theTok == 134320141 || this.theTok == 102436 ) {
return 2;
}break;
case 134320648:
if (this.nTokens == 1) {
if (this.theTok != 268435472) return p$1.ERROR$I$S.apply(this, [19, this.ident]);
this.forPoint3=this.nSemiSkip=0;
this.nSemiSkip+=2;
break;
}if (this.nTokens == 3 && this.tokAt$I(2) == 36868 ) {
p$1.newContextVariable$S.apply(this, [this.ident]);
break;
}if ((this.nTokens == 3 || this.nTokens == 4 ) && this.theTok == 1275068432 ) {
this.nSemiSkip-=2;
this.forPoint3=2;
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [this.theToken]);
this.theToken=$I$(3).tokenLeftParen;
break;
}case 102410:
case 102406:
case 102402:
case 134320649:
if (this.nTokens <= 2 || this.braceCount != 0  || this.parenCount != 0 ) break;
case 102439:
this.isEndOfCommand=true;
this.ichEnd=this.ichToken + 1;
this.flowContext.setLine$();
break;
case 36868:
if (this.nTokens == 1) {
p$1.replaceCommand$org_jmol_script_T.apply(this, [$I$(3).tokenSetVar]);
p$1.newContextVariable$S.apply(this, [this.ident]);
break;
} else if (this.ident.equals$O(",")) {
return 2;
} else if (!(function(a,f){return f.apply(null,a)})([this.ident.charAt$I(0)],$I$(12).isLetter$C)) {
if (this.nTokens != 2 || this.ident.equals$O("[") ) return p$1.ERROR$I.apply(this, [0]);
p$1.replaceCommand$org_jmol_script_T.apply(this, [$I$(3).tokenSet]);
} else {
p$1.newContextVariable$S.apply(this, [this.ident]);
break;
}case 36867:
if (this.theTok == 1073742332) this.setBraceCount++;
 else if (this.theTok == 1073742338) {
this.setBraceCount--;
if (this.isSetBrace && this.setBraceCount == 0  && this.ptNewSetModifier == 2147483647 ) this.ptNewSetModifier=this.nTokens + 1;
}if (this.nTokens == this.ptNewSetModifier) {
var token=p$1.tokenAt$I.apply(this, [0]);
if (this.theTok == 268435472 || this.isUserFunction$S(token.value.toString()) ) {
this.ltoken.set$I$O(0, p$1.setCommand$org_jmol_script_T.apply(this, [$I$(3).tv$I$I$O(1073741824, 0, token.value)]));
this.setBraceCount=0;
break;
}if (this.theTok != 1073741824 && this.theTok != 268435666  && this.theTok != 12290  && (!$I$(3).tokAttr$I$I(this.theTok, 536870912)) ) {
if (this.isNewSet) this.commandExpected$();
 else this.errorIntStr2$I$S$S(18, "SET", ": " + this.ident);
return 4;
}if (this.nTokens == 1 && (this.lastToken.tok == 268435650 || this.lastToken.tok == 268435649 ) ) {
p$1.replaceCommand$org_jmol_script_T.apply(this, [$I$(3).tokenSet]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [this.lastToken]);
break;
}}break;
case 134222849:
if (this.theTok == 12290 && (this.nTokens == 1 || this.lastToken.tok == 1073741940  || this.lastToken.tok == 134217764 ) ) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).tokenDefineString]);
return 2;
}if (this.theTok == 1073741848) this.iHaveQuotedString=false;
break;
case 12290:
if (this.nTokens == 1) {
if (this.theTok != 1073741824) {
if (this.preDefining) {
if (!$I$(3).tokAttr$I$I(this.theTok, 2097152)) {
this.errorStr2$S$S("ERROR IN Token.java or JmolConstants.java -- the following term was used in JmolConstants.java but not listed as predefinedset in Token.java: " + this.ident, null);
return 4;
}} else if ($I$(3).tokAttr$I$I(this.theTok, 2097152)) {
$I$(7).warn$S("WARNING: predefined term '" + this.ident + "' has been redefined by the user until the next file load." );
} else if (!this.isCheckOnly && this.ident.length$() > 1 ) {
$I$(7).warn$S("WARNING: redefining " + this.ident + "; was " + this.theToken + "not all commands may continue to be functional for the life of the applet!" );
this.theTok=this.theToken.tok=1073741824;
$I$(3).addToken$S$org_jmol_script_T(this.ident, this.theToken);
}}p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [this.theToken]);
this.lastToken=$I$(3).tokenComma;
return 2;
}if (this.nTokens == 2) {
if (this.theTok == 268435860) {
this.ltoken.add$I$O(0, $I$(3).tokenSet);
return 2;
}}break;
case 135190:
case 135188:
case 135180:
var ch=p$1.charAt$I.apply(this, [this.ichToken + this.cchToken]);
if (this.parenCount == 0 && this.bracketCount == 0  && ".:/\\+-!?".indexOf$I(ch) >= 0  && !(ch == "-" && this.ident.equals$O("=") ) ) p$1.checkUnquotedFileName.apply(this, []);
break;
}
return 0;
}, p$1);

Clazz.newMeth(C$, 'setNewSetCommand$Z$S', function (isSetBrace, ident) {
this.tokCommand=36867;
this.isNewSet=(!isSetBrace && !this.isUserFunction$S(ident) );
this.setBraceCount=(isSetBrace ? 1 : 0);
this.bracketCount=0;
this.setEqualPt=2147483647;
this.ptNewSetModifier=(this.isNewSet ? (ident.equals$O("(") ? 2 : 1) : 2147483647);
return ((isSetBrace || this.theToken.tok == 268435472  || this.theToken.tok == 536870918  || this.theToken.tok == 268435650  || this.theToken.tok == 268435649 ) ? this.theToken : $I$(3).o$I$O(1073741824, ident));
}, p$1);

Clazz.newMeth(C$, 'checkUnquotedFileName', function () {
var ichT=this.ichToken;
var ch;
while (++ichT < this.cchScript && !(function(a,f){return f.apply(null,a)})([ch=this.script.charAt$I(ichT)],$I$(12).isWhitespace$C)  && ch != "#"  && ch != ";"  && ch != "}" ){
}
var name=this.script.substring$I$I(this.ichToken, ichT).replace$C$C("\\", "/");
this.cchToken=ichT - this.ichToken;
this.theToken=$I$(3).o$I$O(4, name);
}, p$1);

Clazz.newMeth(C$, 'checkFlowStartBrace$Z', function (atEnd) {
var tok=this.tokCommand;
switch (tok) {
default:
if ($I$(3).tokAttr$I$I(tok, 102400)) {
if (atEnd) {
switch (tok) {
case 102411:
case 102413:
break;
default:
this.flowContext.addLine=0;
p$1.addBrace$org_jmol_script_T.apply(this, [this.tokenCommand]);
this.lastFlowCommand=null;
break;
}
this.parenCount=this.braceCount=0;
}return true;
}case 102407:
case 102408:
return false;
}
}, p$1);

Clazz.newMeth(C$, 'checkFlowEndBrace', function () {
if (this.iBrace <= 0 || this.vBraces.get$I(this.iBrace - 1).tok != 1073742338 ) return 0;
this.vBraces.removeItemAt$I(--this.iBrace);
var token=this.vBraces.removeItemAt$I(--this.iBrace);
if (this.theTok == 1073742332) {
this.braceCount--;
this.parenCount--;
}if (token.tok == 1275335685) {
this.vPush.removeItemAt$I(--this.pushCount);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [p$1.setCommand$org_jmol_script_T.apply(this, [$I$(9).newContext$Z(false)])]);
this.isEndOfCommand=true;
return 2;
}switch (this.flowContext == null  ? 0 : this.flowContext.token.tok) {
case 134320649:
case 102402:
case 364547:
if (this.tokCommand == 364547 || this.tokCommand == 102402 ) return 0;
break;
case 102410:
case 102411:
case 102413:
if (this.tokCommand == 102411 || this.tokCommand == 102413 ) return 0;
}
return p$1.forceFlowEnd$org_jmol_script_T.apply(this, [token]);
}, p$1);

Clazz.newMeth(C$, 'forceFlowEnd$org_jmol_script_T', function (token) {
var t0=this.tokenCommand;
this.forceFlowContext=this.flowContext;
token=p$1.flowStart$org_jmol_script_T.apply(this, [token]);
if (!p$1.checkFlowEnd$I$S$I$Z.apply(this, [token.tok, token.value, this.ichBrace, false])) return 4;
switch (token.tok) {
case 134320141:
case 102436:
case 364558:
break;
default:
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [token]);
}
p$1.setCommand$org_jmol_script_T.apply(this, [t0]);
return 2;
}, p$1);

Clazz.newMeth(C$, 'flowStart$org_jmol_script_T', function (token) {
switch (token.tok) {
case 134320649:
case 364547:
case 102402:
return $I$(3).tokenIf;
case 102413:
case 102411:
return $I$(3).tokenSwitch;
default:
return $I$(3).getTokenFromName$S(token.value);
}
}, p$1);

Clazz.newMeth(C$, 'isBreakableContext$I', function (tok) {
return tok == 134320648 || tok == 102439  || tok == 102406  || tok == 102411  || tok == 102413 ;
}, 1);

Clazz.newMeth(C$, 'checkFlowCommand$S', function (ident) {
var pt=this.lltoken.size$();
switch (this.tokCommand) {
case 364548:
if (!p$1.isFlowIfContextOK$org_jmol_script_ScriptFlowContext.apply(this, [this.flowContext])) {
if (!this.haveENDIF) return 5;
this.errorStr$I$S(1, ident);
return 4;
}this.flowContext.token.intValue=this.flowContext.setPt0$I$Z(pt, false);
p$1.setFlowEnd$I$S.apply(this, [this.tokCommand, ident]);
this.flowContext=this.flowContext.parent;
return 0;
case 102407:
case 102408:
var f=(this.flowContext == null  ? null : this.flowContext.getBreakableContext$I(0));
if (this.tokCommand == 102408) while (f != null  && f.token.tok != 134320648  && f.token.tok != 102406 )f=f.parent;

if (f == null ) {
this.errorStr$I$S(1, ident);
return 4;
}p$1.setCommand$org_jmol_script_T.apply(this, [$I$(3).tv$I$I$O(this.tokCommand, f.pt0, ident)]);
this.theToken=this.tokenCommand;
return 1;
case 134320141:
case 102436:
if (this.flowContext != null ) {
this.errorStr$I$S(1, $I$(3).nameOf$I(this.tokCommand));
return 4;
}break;
case 134320649:
case 364558:
case 102412:
case 134320648:
case 102439:
case 102410:
case 102406:
break;
case 102402:
case 364547:
if (this.flowContext != null  && !p$1.isFlowIfContextOK$org_jmol_script_ScriptFlowContext.apply(this, [this.flowContext]) ) {
this.flowContext=this.flowContext.parent;
}if (!p$1.isFlowIfContextOK$org_jmol_script_ScriptFlowContext.apply(this, [this.flowContext])) {
if (!this.haveENDIF) return 5;
this.errorStr$I$S(1, ident);
return 4;
}this.flowContext.token.intValue=this.flowContext.setPt0$I$Z(pt, false);
break;
case 102411:
case 102413:
if (this.flowContext == null  || this.flowContext.token.tok != 102410 && this.flowContext.token.tok != 102411  && (this.tokCommand == 102413 ? this.flowContext.ptDefault > 0 : this.flowContext.token.tok != 102413)  ) {
this.errorStr$I$S(1, ident);
return 4;
}this.flowContext.token.intValue=this.flowContext.setPt0$I$Z(pt, this.tokCommand == 102413);
break;
}
var ct=$I$(9).newCmd$I$O(this.tokCommand, this.tokenCommand.value);
if (this.tokCommand == 102410) ct.addName$S("_var");
p$1.setCommand$org_jmol_script_T.apply(this, [ct]);
switch (this.tokCommand) {
case 364558:
this.flowContext=Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptCompiler$org_jmol_script_ContextToken$I$org_jmol_script_ScriptFlowContext$I$H,[this, ct, pt, this.flowContext, this.ichCurrentCommand, this.lineCurrent]);
if (this.thisFunction != null ) this.vFunctionStack.add$I$O(0, this.thisFunction);
this.thisFunction=Clazz.new_($I$(19,1).c$$S$I,["", 364558]);
this.flowContext.setFunction$org_jmol_script_ScriptFunction(this.thisFunction);
p$1.pushContext$org_jmol_script_T.apply(this, [ct]);
break;
case 102411:
case 102413:
ct.contextVariables=this.flowContext.token.contextVariables;
case 364547:
case 102402:
this.flowContext.token=ct;
break;
case 102439:
case 134320648:
case 102406:
case 102412:
p$1.pushContext$org_jmol_script_T.apply(this, [ct]);
case 134320649:
case 102410:
default:
this.flowContext=Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptCompiler$org_jmol_script_ContextToken$I$org_jmol_script_ScriptFlowContext$I$H,[this, ct, pt, this.flowContext, this.ichCurrentCommand, this.lineCurrent]);
}
return 0;
}, p$1);

Clazz.newMeth(C$, 'setFlowEnd$I$S', function (tokCommand, ident) {
p$1.setCommand$org_jmol_script_T.apply(this, [(function(a,f){return f.apply(null,a)})([tokCommand, (this.flowContext.ptDefault > 0 ? this.flowContext.ptDefault : -this.flowContext.pt0), ident],$I$(3).tv$I$I$O)]);
}, p$1);

Clazz.newMeth(C$, 'isFlowIfContextOK$org_jmol_script_ScriptFlowContext', function (f) {
switch (f == null  ? 0 : f.token.tok) {
case 134320649:
case 102402:
return true;
case 364547:
return this.tokCommand != 364547;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'checkFlowEnd$I$S$I$Z', function (tok, ident, pt1, isExplicitEnd) {
if (isExplicitEnd) {
if (this.flowContext == null ) return this.errorStr$I$S(1, "end " + ident);
this.flowContext.addLine=0;
this.flowContext.forceEndIf=false;
switch (this.flowContext.token.tok) {
case 134320141:
case 102436:
case 364558:
break;
default:
p$1.setFlowEnd$I$S.apply(this, [102409, "end"]);
this.ltoken.set$I$O(0, this.tokenCommand);
}
} else {
p$1.setFlowEnd$I$S.apply(this, [102409, "end"]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [this.tokenCommand]);
}if (this.flowContext == null  || tok != this.flowContext.tok0 ) return this.errorStr$I$S(1, "end " + ident);
var pt=this.lltoken.size$();
this.flowContext.token.intValue=(this.tokCommand == 102412 ? -pt : pt);
switch (tok) {
case 134320649:
case 102410:
break;
case 102412:
case 134320648:
case 102439:
case 102406:
if (!isExplicitEnd) this.vPush.removeItemAt$I(--this.pushCount);
break;
case 102436:
case 134320141:
case 364558:
if (!this.isCheckOnly) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(tok, this.thisFunction)]);
(function(a,f){return f.apply(null,a)})([this.thisFunction, this.script, pt1, this.lltoken.size$(), this.lineNumbers, this.lineIndices, this.lltoken],$I$(19).setFunction$org_jmol_script_ScriptFunction$S$I$I$HA$IAA$javajs_util_Lst);
}this.thisFunction=(this.vFunctionStack.size$() == 0 ? null : this.vFunctionStack.removeItemAt$I(0));
this.tokenCommand.intValue=0;
if (tok == 364558) this.vPush.removeItemAt$I(--this.pushCount);
break;
default:
return this.errorStr$I$S(19, "end " + ident);
}
this.flowContext=this.flowContext.parent;
p$1.fixFlowAddLine$org_jmol_script_ScriptFlowContext.apply(this, [this.flowContext]);
return true;
}, p$1);

Clazz.newMeth(C$, 'fixFlowAddLine$org_jmol_script_ScriptFlowContext', function (flowContext) {
while (flowContext != null ){
if (flowContext.addLine > 0 || flowContext.forceEndIf ) {
flowContext.addLine=this.lineCurrent - flowContext.ptLine;
flowContext.forceEndIf=true;
}flowContext=flowContext.parent;
}
}, p$1);

Clazz.newMeth(C$, 'getData$S', function (key) {
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(4, key)]);
this.ichToken+=key.length$() + 2;
if (p$1.charAt$I.apply(this, [this.ichToken]) == "\r") {
($s$[0]=this.lineCurrent,this.lineCurrent=(++$s$[0],$s$[0]));
this.ichToken++;
}if (p$1.charAt$I.apply(this, [this.ichToken]) == "\n") {
($s$[0]=this.lineCurrent,this.lineCurrent=(++$s$[0],$s$[0]));
this.ichToken++;
}var i=this.script.indexOf$S$I(this.chFirst + key + this.chFirst , this.ichToken) - 4;
if (i < 0 || !this.script.substring$I$I(i, i + 4).equalsIgnoreCase$S("END ") ) return false;
var str=this.script.substring$I$I(this.ichToken, i);
p$1.incrementLineCount$S.apply(this, [str]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(134221834, str)]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(1073741824, "end")]);
p$1.addTokenToPrefix$org_jmol_script_T.apply(this, [$I$(3).o$I$O(4, key)]);
this.cchToken=i - this.ichToken + key.length$() + 6;
return true;
}, p$1);

Clazz.newMeth(C$, 'incrementLineCount$S', function (str) {
var ch;
var pt=str.indexOf$I("\r");
var pt2=str.indexOf$I("\n");
if (pt < 0 && pt2 < 0 ) return 0;
var n=this.lineCurrent;
if (pt < 0 || pt2 < pt ) pt=pt2;
for (var i=str.length$(); --i >= pt; ) {
if ((ch=str.charAt$I(i)) == "\n" || ch == "\r" ) ($s$[0]=this.lineCurrent,this.lineCurrent=(++$s$[0],$s$[0]));
}
return this.lineCurrent - n;
}, p$1);

Clazz.newMeth(C$, 'isSpaceOrTab$C', function (ch) {
return ch == " " || ch == "\t" ;
}, 1);

Clazz.newMeth(C$, 'eol$C', function (ch) {
return (ch == "\u0000" || ch == "\r"  || ch == "\n"  || ch == ";" && this.nSemiSkip <= 0  );
}, p$1);

Clazz.newMeth(C$, 'lookingAtSetBraceSyntax', function () {
var ichT=this.ichToken;
var nParen=1;
while (++ichT < this.cchScript && nParen > 0 ){
switch ((this.script.charCodeAt$I(ichT))) {
case 123:
nParen++;
break;
case 125:
nParen--;
break;
}
}
if (p$1.charAt$I.apply(this, [ichT]) == "[" && ++nParen == 1 ) while (++ichT < this.cchScript && nParen > 0 ){
switch ((this.script.charCodeAt$I(ichT))) {
case 91:
nParen++;
break;
case 93:
if (p$1.charAt$I.apply(this, [ichT + 1]) == "[") ichT++;
 else nParen--;
break;
}
}
if (p$1.charAt$I.apply(this, [ichT]) == "." && nParen == 0 ) {
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'lookingAtString$Z', function (allowPrime) {
if (this.ichToken + 2 > this.cchScript) return false;
this.chFirst=this.script.charAt$I(this.ichToken);
if (this.chFirst != "\"" && (!allowPrime || this.chFirst != "\'" ) ) return false;
var ichT=this.ichToken;
var ch;
var previousCharBackslash=false;
while (++ichT < this.cchScript){
ch=this.script.charAt$I(ichT);
if (ch == this.chFirst && !previousCharBackslash ) break;
previousCharBackslash=(ch == "\\" ? !previousCharBackslash : false);
}
if (ichT == this.cchScript) {
this.cchToken=-1;
this.ichEnd=this.cchScript;
} else {
this.cchToken=++ichT - this.ichToken;
}return true;
}, p$1);

Clazz.newMeth(C$, 'getUnescapedStringLiteral$Z', function (isFileName) {
if (isFileName) {
var s=this.script.substring$I$I(this.ichToken + 1, this.ichToken + this.cchToken - 1);
if (s.indexOf$S("\\u") >= 0) s=$I$(17).unescapeUnicode$S(s);
if (s.indexOf$S(";base64,") != 0) return s;
}return C$.unescapeString$S$I$I(this.script, this.ichToken + 1, this.cchToken - 2);
}, p$1);

Clazz.newMeth(C$, 'unescapeString$S$I$I', function (script, ich, nChar) {
var sb=$I$(22).newN$I(nChar);
var ichMax=ich + nChar;
while (ich < ichMax){
var ch=script.charAt$I(ich++);
if (ch == "\\" && ich < ichMax ) {
ch=script.charAt$I(ich++);
switch (ch.$c()) {
case 110:
ch="\n";
break;
case 116:
ch="\t";
break;
case 114:
ch="\r";
case 34:
case 92:
case 39:
break;
case 120:
case 117:
var digitCount=ch == "x" ? 2 : 4;
if (ich < ichMax) {
var unicode=0;
for (var k=digitCount; --k >= 0 && ich < ichMax ; ) {
var chT=script.charAt$I(ich);
var hexit=$I$(17).getHexitValue$C(chT);
if (hexit < 0) break;
unicode<<=4;
unicode+=hexit;
++ich;
}
ch=String.fromCharCode(unicode);
}}
}sb.appendC$C(ch);
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'lookingAtLoadFormat$Z', function (allchar) {
var ichT=this.ichToken;
var ch;
while (((function(a,f){return f.apply(null,a)})([ch=p$1.charAt$I.apply(this, [ichT])],$I$(12).isLetterOrDigit$C) && (allchar || $I$(12).isLetter$C(ch) )  || allchar && (!p$1.eol$C.apply(this, [ch]) && !$I$(12).isWhitespace$C(ch) )  ))++ichT;

if (!allchar && ichT == this.ichToken  || !C$.isSpaceOrTab$C(ch) ) return false;
this.cchToken=ichT - this.ichToken;
return true;
}, p$1);

Clazz.newMeth(C$, 'lookingAtImpliedString$Z$Z$Z', function (allowSpace, allowEquals, allowSptParen) {
var ichT=this.ichToken;
var ch=this.script.charAt$I(ichT);
var isID=(this.lastToken.tok == 1073741974);
var passVariableToString=($I$(3).tokAttr$I$I(this.tokCommand, 20480) && (this.tokCommand & 1) == 1 );
var isVariable=(ch == "@");
var isMath=(isVariable && ichT + 3 < this.cchScript  && this.script.charAt$I(ichT + 1) == "{" );
if (isMath && (isID || !passVariableToString ) ) return false;
var ptSpace=-1;
var ptLastChar=-1;
var isOK=true;
var parenpt=0;
while (isOK && !p$1.eol$C.apply(this, [ch=p$1.charAt$I.apply(this, [ichT])]) ){
switch (ch.$c()) {
case 40:
if (!allowSptParen) {
if (this.tokCommand == 4124 || ichT >= 5 && (this.script.substring$I$I(ichT - 4, ichT).equals$O(".spt") || this.script.substring$I$I(ichT - 4, ichT).equals$O(".png") || this.script.substring$I$I(ichT - 5, ichT).equals$O(".pngj")  )  ) {
isOK=false;
continue;
}}break;
case 61:
if (!allowEquals) {
isOK=false;
continue;
}break;
case 123:
parenpt++;
break;
case 125:
parenpt--;
if (parenpt < 0 && (this.braceCount > 0 || this.iBrace > 0 ) ) {
isOK=false;
continue;
}default:
if ($I$(12).isWhitespace$C(ch)) {
if (ptSpace < 0) ptSpace=ichT;
} else {
ptLastChar=ichT;
}break;
}
++ichT;
}
if (allowSpace) ichT=ptLastChar + 1;
 else if (ptSpace > 0) ichT=ptSpace;
if (isVariable && (!allowSpace || ptSpace < 0 && parenpt <= 0  && ichT - this.ichToken > 1  ) ) {
return false;
}return (this.cchToken=ichT - this.ichToken) > 0;
}, p$1);

Clazz.newMeth(C$, 'lookingAtExponential', function () {
if (this.ichToken == this.cchScript) return NaN;
var ichT=this.ichToken;
var pt0=ichT;
if (this.script.charAt$I(ichT) == "-") ++ichT;
var isOK=false;
var ch="X";
while ((function(a,f){return f.apply(null,a)})([ch=p$1.charAt$I.apply(this, [ichT])],$I$(12).isDigit$C)){
++ichT;
isOK=true;
}
if (ichT < this.cchScript && ch == "." ) ++ichT;
while ((function(a,f){return f.apply(null,a)})([ch=p$1.charAt$I.apply(this, [ichT])],$I$(12).isDigit$C)){
++ichT;
isOK=true;
}
if (ichT == this.cchScript || !isOK ) return NaN;
isOK=(ch != "E" && ch != "e" );
if (isOK || ++ichT == this.cchScript ) return NaN;
ch=this.script.charAt$I(ichT);
if (ch == "-" || ch == "+" ) ichT++;
while ((function(a,f){return f.apply(null,a)})([p$1.charAt$I.apply(this, [ichT])],$I$(12).isDigit$C)){
ichT++;
isOK=true;
}
if (!isOK) return NaN;
this.cchToken=ichT - this.ichToken;
return Double.valueOf$S(this.script.substring$I$I(pt0, ichT)).floatValue$();
}, p$1);

Clazz.newMeth(C$, 'lookingAtDecimal', function () {
if (this.ichToken == this.cchScript) return false;
var ichT=this.ichToken;
if (this.script.charAt$I(ichT) == "-") ++ichT;
var digitSeen=false;
var ch;
while ((function(a,f){return f.apply(null,a)})([ch=p$1.charAt$I.apply(this, [ichT++])],$I$(12).isDigit$C))digitSeen=true;

if (ch != ".") return false;
var ch1=p$1.charAt$I.apply(this, [ichT]);
if (!C$.isSpaceOrTab$C(ch1) && !p$1.eol$C.apply(this, [ch1]) ) {
if ($I$(12).isLetter$C(ch1) || ch1 == "?"  || ch1 == "*"  || ch1 == "_" ) return false;
if ((function(a,f){return f.apply(null,a)})([ch1=p$1.charAt$I.apply(this, [ichT + 1])],$I$(12).isLetter$C) || ch1 == "?" ) return false;
}while ((function(a,f){return f.apply(null,a)})([p$1.charAt$I.apply(this, [ichT])],$I$(12).isDigit$C)){
++ichT;
digitSeen=true;
}
this.cchToken=ichT - this.ichToken;
return digitSeen;
}, p$1);

Clazz.newMeth(C$, 'lookingAtSeqcode', function () {
var ichT=this.ichToken;
var ch;
if (p$1.charAt$I.apply(this, [ichT + 1]) == "^" && this.script.charAt$I(ichT) == "*" ) {
ch="^";
++ichT;
} else {
if (this.script.charAt$I(ichT) == "-") ++ichT;
while ((function(a,f){return f.apply(null,a)})([ch=p$1.charAt$I.apply(this, [ichT])],$I$(12).isDigit$C))++ichT;

}if (ch != "^") return false;
ichT++;
if (ichT == this.cchScript) ch=" ";
 else ch=this.script.charAt$I(ichT++);
if (ch != " " && ch != "*"  && ch != "?"  && !$I$(12).isLetter$C(ch) ) return false;
this.cchToken=ichT - this.ichToken;
return true;
}, p$1);

Clazz.newMeth(C$, 'lookingAtInteger', function () {
if (this.ichToken == this.cchScript) return 2147483647;
var ichT=this.ichToken;
if (this.script.charAt$I(this.ichToken) == "-") ++ichT;
var ichBeginDigits=ichT;
while ((function(a,f){return f.apply(null,a)})([p$1.charAt$I.apply(this, [ichT])],$I$(12).isDigit$C))++ichT;

if (ichBeginDigits == ichT) return 2147483647;
this.cchToken=ichT - this.ichToken;
try {
var val=Integer.parseInt$S(this.ident=this.script.substring$I$I(this.ichToken, ichT));
return val;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
return 2147483647;
}, p$1);

Clazz.newMeth(C$, 'lookingAtBitset$', function () {
if (this.script.indexOf$S$I("({null})", this.ichToken) == this.ichToken) {
this.cchToken=8;
return Clazz.new_($I$(23,1));
}var ichT;
if (this.ichToken + 4 > this.cchScript || this.script.charAt$I(this.ichToken + 1) != "{"  || (ichT=this.script.indexOf$S$I("}", this.ichToken)) < 0  || ichT + 1 == this.cchScript ) return null;
var bs=(function(a,f){return f.apply(null,a)})([this.script.substring$I$I(this.ichToken, ichT + 2)],$I$(23).unescape$S);
if (bs != null ) this.cchToken=ichT + 2 - this.ichToken;
return bs;
});

Clazz.newMeth(C$, 'lookingAtObjectID', function () {
var allowWildID=(this.nTokens == 1);
var ichT=this.ichToken;
if (p$1.charAt$I.apply(this, [ichT]) != "$") return false;
if (p$1.charAt$I.apply(this, [++ichT]) == "\"") return false;
while (ichT < this.cchScript){
var ch;
if ((function(a,f){return f.apply(null,a)})([ch=this.script.charAt$I(ichT)],$I$(12).isWhitespace$C)) {
if (ichT == this.ichToken + 1) return false;
break;
}if (!$I$(12).isLetterOrDigit$C(ch)) {
switch (ch.$c()) {
default:
return false;
case 42:
if (!allowWildID) return false;
break;
case 126:
case 95:
break;
}
}ichT++;
}
this.cchToken=ichT - (++this.ichToken);
return true;
}, p$1);

Clazz.newMeth(C$, 'lookingAtLookupToken$I', function (ichT) {
if (ichT == this.cchScript) return false;
var ichT0=ichT;
this.afterMath=(this.tokLastMath != 0 ? ichT : 0);
this.tokLastMath=0;
var ch;
switch ((ch=this.script.charAt$I(ichT++)).$c()) {
case 45:
case 43:
case 38:
case 124:
case 42:
if (ichT < this.cchScript) {
if (this.script.charAt$I(ichT) == ch) {
++ichT;
if (ch == "-" || ch == "+" ) break;
if (ch == "&" && p$1.charAt$I.apply(this, [ichT]) == ch ) ++ichT;
} else if (this.script.charAt$I(ichT) == "=") {
++ichT;
}}this.tokLastMath=1;
break;
case 47:
if (p$1.charAt$I.apply(this, [ichT]) == "/") break;
case 92:
case 33:
if (p$1.charAt$I.apply(this, [ichT]) == "=") ++ichT;
this.tokLastMath=1;
break;
case 41:
case 93:
case 125:
break;
case 46:
if (p$1.charAt$I.apply(this, [ichT]) == ".") ++ichT;
this.tokLastMath=1;
break;
case 64:
case 123:
this.tokLastMath=2;
break;
case 58:
this.tokLastMath=1;
break;
case 40:
case 44:
case 36:
case 59:
case 91:
case 37:
this.tokLastMath=1;
break;
case 60:
case 61:
case 62:
if ((ch=p$1.charAt$I.apply(this, [ichT])) == "<" || ch == "="  || ch == ">" ) ++ichT;
this.tokLastMath=1;
break;
default:
if (!$I$(12).isLetter$C(ch) && !this.isDotDot ) return false;
case 126:
case 95:
case 39:
case 63:
if (ch == "?") this.tokLastMath=1;
while ((function(a,f){return f.apply(null,a)})([ch=p$1.charAt$I.apply(this, [ichT])],$I$(12).isLetterOrDigit$C) || ch == "_"  || ch == "*" && p$1.charAt$I.apply(this, [ichT - 1]) == "?"   || ch == "?"  || ch == "~"  || ch == "\'"  || ch == "\\" && p$1.charAt$I.apply(this, [ichT + 1]) == "?"   || ch == "^" && ichT > ichT0  && (function(a,f){return f.apply(null,a)})([p$1.charAt$I.apply(this, [ichT - 1])],$I$(12).isDigit$C)  )++ichT;

break;
}
this.cchToken=ichT - ichT0;
return true;
}, p$1);

Clazz.newMeth(C$, 'lookForSyncID', function () {
var ch;
if ((ch=p$1.charAt$I.apply(this, [this.ichToken])) == "\"" || ch == "@"  || ch == "\u0000" ) return false;
var ichT=this.ichToken;
while (!C$.isSpaceOrTab$C(ch=p$1.charAt$I.apply(this, [ichT])) && ch != "#"  && ch != "}"  && !p$1.eol$C.apply(this, [ch]) )++ichT;

this.cchToken=ichT - this.ichToken;
return true;
}, p$1);

Clazz.newMeth(C$, 'ERROR$I', function (error) {
this.errorIntStr2$I$S$S(error, null, null);
return 4;
}, p$1);

Clazz.newMeth(C$, 'ERROR$I$S', function (error, value) {
this.errorStr$I$S(error, value);
return 4;
}, p$1);

Clazz.newMeth(C$, 'handleError', function () {
this.errorType=this.errorMessage;
this.errorLine=this.script.substring$I$I(this.ichCurrentCommand, this.ichEnd <= this.ichCurrentCommand ? this.ichToken + this.cchToken : this.ichEnd);
var lineInfo=(this.ichToken < this.ichEnd ? this.errorLine.substring$I$I(0, this.ichToken - this.ichCurrentCommand) + " >>>> " + this.errorLine.substring$I(this.ichToken - this.ichCurrentCommand)  : this.errorLine) + " <<<<";
this.errorMessage=$I$(24).$$S("script compiler ERROR: ") + this.errorMessage + $I$(25).getErrorLineMessage$S$S$I$I$S(null, this.filename, this.lineCurrent, this.iCommand, lineInfo) ;
if (!this.isSilent) {
this.ichToken=Math.max(this.ichEnd, this.ichToken);
while (!p$1.lookingAtEndOfLine.apply(this, []) && !p$1.lookingAtTerminator.apply(this, []) )this.ichToken++;

this.errorLine=this.script.substring$I$I(this.ichCurrentCommand, this.ichToken);
this.vwr.addCommand$S(this.errorLine + "#??");
$I$(7).error$S(this.errorMessage);
}return false;
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:17 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
