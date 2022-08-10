(function(){var P$=Clazz.newPackage("org.jmol.script"),p$1={},I$=[[0,'Thread','org.jmol.script.ScriptCompiler','org.jmol.script.ScriptManager','javajs.util.SB','org.jmol.script.ScriptError','org.jmol.util.Logger','javajs.util.PT','org.jmol.script.SV','org.jmol.script.T','javajs.util.BS','org.jmol.viewer.FileManager','java.util.Hashtable','org.jmol.viewer.JC','org.jmol.util.Elements','org.jmol.util.BSUtil','org.jmol.script.ScriptContext','org.jmol.modelset.Group','org.jmol.script.ScriptExpr','org.jmol.util.Escape','org.jmol.script.ScriptDelayThread','org.jmol.script.ScriptInterruption','org.jmol.script.FileLoadThread','javajs.util.Lst','javajs.util.P3','javajs.util.BArray','javajs.util.Base64','org.jmol.util.Edge','org.jmol.script.ScriptParam','org.jmol.viewer.StateManager','org.jmol.i18n.GT','org.jmol.modelset.BondSet',['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.atomdata.RadiusData','org.jmol.c.VDW','org.jmol.util.Txt','java.util.Arrays','org.jmol.util.Font','org.jmol.viewer.Viewer','javajs.util.AU','javajs.util.V3','javajs.util.Quat','javajs.util.Measure','javajs.util.P4','javajs.util.M4','org.jmol.api.Interface','javajs.util.M3','org.jmol.script.ScriptMathProcessor','org.jmol.c.STR','org.jmol.util.SimpleUnitCell','org.jmol.viewer.ActionManager','org.jmol.c.PAL','org.jmol.util.Parser','org.jmol.util.ColorEncoder']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScriptEval", null, 'org.jmol.script.ScriptExpr');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.allowJSThreads=true;
this.contextPath="";
this.pcResume=-1;
},1);

C$.$fields$=[['Z',['isJS','allowJSThreads','isFuncReturn','historyDisabled','debugScript','isCmdLine_C_Option','isCmdLine_c_or_C_Option','listCommands','tQuiet','executionStopped','executionPaused','executionStepping','executing','mustResumeEval','isStateScript','forceNoAddHydrogens','isEmbedded'],'I',['scriptLevel','pc','lineEnd','pcEnd','pcResume'],'J',['timeBeginExecution','timeEndExecution'],'S',['contextPath','scriptFileName','functionName','script','scriptExtensions','thisCommand','fullCommand'],'O',['sm','org.jmol.viewer.ShapeManager','scriptDelayThread','org.jmol.thread.JmolThread','+fileLoadThread','currentThread','Thread','compiler','org.jmol.script.ScriptCompiler','outputBuffer','javajs.util.SB','aatoken','org.jmol.script.T[][]','lineNumbers','short[]','lineIndices','int[][]','parallelProcessor','org.jmol.api.JmolParallelProcessor']]
,['I',['iProcess','commandHistoryLevelMax','contextDepthMax','scriptReportingLevel']]]

Clazz.newMeth(C$, 'getAllowJSThreads$', function () {
return this.allowJSThreads;
});

Clazz.newMeth(C$, 'setAllowJSThreads$Z', function (b) {
this.allowJSThreads=b;
});

Clazz.newMeth(C$, 'doReport$', function () {
return (!this.tQuiet && this.scriptLevel <= C$.scriptReportingLevel );
});

Clazz.newMeth(C$, 'isStateScript$', function () {
return this.isStateScript;
});

Clazz.newMeth(C$, 'setStatic$I$I', function (tok, ival) {
switch (tok) {
case 553648167:
if (ival >= 10) C$.contextDepthMax=ival;
return C$.contextDepthMax;
case 553648146:
if (ival >= 0) C$.commandHistoryLevelMax=ival;
return C$.commandHistoryLevelMax;
case 553648168:
if (ival >= 0) C$.scriptReportingLevel=ival;
return C$.scriptReportingLevel;
}
return 0;
});

Clazz.newMeth(C$, 'getScript$', function () {
return this.script;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.currentThread=$I$(1).currentThread$();
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
this.compiler=(this.compiler == null  ? vwr.compiler : this.compiler);
this.isJS=vwr.isSingleThreaded;
return this;
});

Clazz.newMeth(C$, 'setCompiler$', function () {
this.vwr.compiler=this.compiler=Clazz.new_($I$(2,1).c$$org_jmol_viewer_Viewer,[this.vwr]);
});

Clazz.newMeth(C$, 'compileScriptString$S$Z', function (script, tQuiet) {
p$1.clearState$Z.apply(this, [tQuiet]);
this.contextPath="[script]";
return this.compileScript$S$S$Z(null, script, this.debugScript);
});

Clazz.newMeth(C$, 'compileScriptFile$S$Z', function (filename, tQuiet) {
p$1.clearState$Z.apply(this, [tQuiet]);
this.contextPath=filename;
return p$1.compileScriptFileInternal$S$S$S$S.apply(this, [filename, null, null, null]);
});

Clazz.newMeth(C$, 'evaluateCompiledScript$Z$Z$Z$Z$javajs_util_SB$Z', function (isCmdLine_c_or_C_Option, isCmdLine_C_Option, historyDisabled, listCommands, outputBuffer, allowThreads) {
var tempOpen=this.isCmdLine_C_Option;
this.isCmdLine_C_Option=isCmdLine_C_Option;
this.chk=this.isCmdLine_c_or_C_Option=isCmdLine_c_or_C_Option;
this.historyDisabled=historyDisabled;
this.outputBuffer=outputBuffer;
this.currentThread=$I$(1).currentThread$();
this.setAllowJSThreads$Z(!!(allowThreads & !this.vwr.getBoolean$I(603979892)));
this.listCommands=listCommands;
this.timeBeginExecution=System.currentTimeMillis$();
this.executionStopped=this.executionPaused=false;
this.executionStepping=false;
this.executing=true;
this.vwr.pushHoldRepaintWhy$S("runEval");
p$1.setScriptExtensions.apply(this, []);
p$1.executeCommands$Z$Z.apply(this, [false, true]);
this.isCmdLine_C_Option=tempOpen;
if (this.isStateScript) $I$(3).setStateScriptVersion$org_jmol_viewer_Viewer$S(this.vwr, null);
});

Clazz.newMeth(C$, 'useThreads$', function () {
return (!this.chk && !this.vwr.headless && !this.vwr.autoExit && this.vwr.haveDisplay && this.outputBuffer == null    && this.allowJSThreads );
});

Clazz.newMeth(C$, 'executeCommands$Z$Z', function (isTry, reportCompletion) {
var haveError=false;
try {
if (!this.dispatchCommands$Z$Z$Z(false, false, isTry)) return;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
this.vwr.handleError$Error$Z(er, false);
this.setErrorMessage$S("" + er + " " + this.vwr.getShapeErrorState$() );
this.errorMessageUntranslated="" + er;
this.report$S$Z(this.errorMessage, true);
haveError=true;
}
} else if (Clazz.exceptionOf(e$$,"org.jmol.script.ScriptException")){
var e = e$$;
{
if (Clazz.instanceOf(e, "org.jmol.script.ScriptInterruption") && (!isTry || !e.isError ) ) {
return;
}if (isTry) {
this.vwr.setStringProperty$S$S("_errormessage", "" + e);
return;
}this.setErrorMessage$S(e.toString());
this.errorMessageUntranslated=e.getErrorMessageUntranslated$();
this.report$S$Z(this.errorMessage, true);
this.vwr.notifyError$S$S$S((this.errorMessage != null  && this.errorMessage.indexOf$S("java.lang.OutOfMemoryError") >= 0  ? "Error" : "ScriptException"), this.errorMessage, this.errorMessageUntranslated);
haveError=true;
}
} else {
throw e$$;
}
}
if (haveError || !this.isJS || !this.allowJSThreads  ) {
this.vwr.setTainted$Z(true);
this.vwr.popHoldRepaint$S("executeCommands" + " " + (this.scriptLevel > 0 ? "\u0001## REPAINT_IGNORE ##" : "") );
}this.timeEndExecution=System.currentTimeMillis$();
if (this.errorMessage == null  && this.executionStopped ) this.setErrorMessage$S("execution interrupted");
 else if (!this.tQuiet && reportCompletion ) this.vwr.scriptStatus$S("Script completed");
this.executing=this.chk=this.isCmdLine_c_or_C_Option=this.historyDisabled=false;
var msg=this.getErrorMessageUntranslated$();
this.vwr.setErrorMessage$S$S(this.errorMessage, msg);
if (!this.tQuiet && reportCompletion ) this.vwr.setScriptStatus$S$S$I$S("Jmol script terminated", this.errorMessage, 1 + ((this.timeEndExecution - this.timeBeginExecution)|0), msg);
}, p$1);

Clazz.newMeth(C$, 'resumeEval$O', function (sco) {
var sc=sco;
this.setErrorMessage$S(null);
if (this.executionStopped || sc == null   || !sc.mustResumeEval ) {
p$1.resumeViewer$S.apply(this, ["resumeEval"]);
return;
}if (!this.executionPaused) sc.pc++;
this.thisContext=sc;
if (sc.scriptLevel > 0) this.scriptLevel=sc.scriptLevel - 1;
this.restoreScriptContext$org_jmol_script_ScriptContext$Z$Z$Z(sc, true, false, false);
this.pcResume=sc.pc;
p$1.executeCommands$Z$Z.apply(this, [sc.isTryCatch, this.scriptLevel <= 0]);
this.pcResume=-1;
});

Clazz.newMeth(C$, 'resumeViewer$S', function (why) {
this.vwr.setTainted$Z(true);
this.vwr.popHoldRepaint$S(why + (this.chk ? "\u0001## REPAINT_IGNORE ##" : ""));
this.vwr.queueOnHold=false;
}, p$1);

Clazz.newMeth(C$, 'runScript$S', function (script) {
if (!this.vwr.isPreviewOnly) this.runScriptBuffer$S$javajs_util_SB$Z(script, this.outputBuffer, false);
});

Clazz.newMeth(C$, 'runScriptBuffer$S$javajs_util_SB$Z', function (script, outputBuffer, isFuncReturn) {
p$1.pushContext$org_jmol_script_ContextToken$S.apply(this, [null, "runScriptBuffer"]);
this.contextPath += " >> script() ";
this.outputBuffer=outputBuffer;
this.setAllowJSThreads$Z(false);
var fret=this.isFuncReturn;
this.isFuncReturn|=isFuncReturn;
if (this.compileScript$S$S$Z(null, script + "\u0001## EDITOR_IGNORE ##" + "\u0001## REPAINT_IGNORE ##" , false)) this.dispatchCommands$Z$Z$Z(false, false, false);
this.popContext$Z$Z(false, false);
this.isFuncReturn=fret;
});

Clazz.newMeth(C$, 'checkScriptSilent$S', function (script) {
var sc=this.compiler.compile$S$S$Z$Z$Z$Z(null, script, false, true, false, true);
if (sc.errorType != null ) return sc;
this.restoreScriptContext$org_jmol_script_ScriptContext$Z$Z$Z(sc, false, false, false);
this.chk=true;
this.isCmdLine_c_or_C_Option=this.isCmdLine_C_Option=false;
this.pc=0;
try {
this.dispatchCommands$Z$Z$Z(false, false, false);
} catch (e) {
if (Clazz.exceptionOf(e,"org.jmol.script.ScriptException")){
this.setErrorMessage$S(e.toString());
sc=this.getScriptContext$S("checkScriptSilent");
} else {
throw e;
}
}
this.chk=false;
return sc;
});

Clazz.newMeth(C$, 'getContextTrace$org_jmol_viewer_Viewer$org_jmol_script_ScriptContext$javajs_util_SB$Z', function (vwr, sc, sb, isTop) {
if (sb == null ) sb=Clazz.new_($I$(4,1));
var pc=Math.min(sc.pc, sc.lineNumbers[sc.lineNumbers.length - 1]);
sb.append$S($I$(5,"getErrorLineMessage$S$S$I$I$S",[sc.functionName, sc.scriptFileName, sc.lineNumbers[pc], pc, C$.statementAsString$org_jmol_viewer_Viewer$org_jmol_script_TA$I$Z(vwr, sc.statement, (isTop ? sc.iToken : 9999), false)]));
if (sc.parentContext != null ) C$.getContextTrace$org_jmol_viewer_Viewer$org_jmol_script_ScriptContext$javajs_util_SB$Z(vwr, sc.parentContext, sb, false);
return sb;
}, 1);

Clazz.newMeth(C$, 'setDebugging$', function () {
this.debugScript=this.vwr.getBoolean$I(603979825);
this.debugHigh=(this.debugScript && $I$(6).debugging );
});

Clazz.newMeth(C$, 'haltExecution$', function () {
if (this.isEmbedded) {
this.vwr.setBooleanProperty$S$Z("allowEmbeddedScripts", true);
this.isEmbedded=false;
}this.resumePausedExecution$();
this.executionStopped=true;
});

Clazz.newMeth(C$, 'pauseExecution$Z', function (withDelay) {
if (this.chk || this.vwr.headless ) return;
if (withDelay && !this.isJS ) this.delayScript$I(-100);
this.vwr.popHoldRepaint$S("pauseExecution " + withDelay);
this.executionStepping=false;
this.executionPaused=true;
});

Clazz.newMeth(C$, 'stepPausedExecution$', function () {
this.executionStepping=true;
this.executionPaused=false;
});

Clazz.newMeth(C$, 'resumePausedExecution$', function () {
this.executionPaused=false;
this.executionStepping=false;
});

Clazz.newMeth(C$, 'isExecuting$', function () {
return this.executing && !this.executionStopped ;
});

Clazz.newMeth(C$, 'isPaused$', function () {
return this.executionPaused;
});

Clazz.newMeth(C$, 'isStepping$', function () {
return this.executionStepping;
});

Clazz.newMeth(C$, 'isStopped$', function () {
return this.executionStopped || !this.isJS && this.currentThread !== $I$(1).currentThread$()   ;
});

Clazz.newMeth(C$, 'getNextStatement$', function () {
return (this.pc < this.aatoken.length ? $I$(5,"getErrorLineMessage$S$S$I$I$S",[this.functionName, this.scriptFileName, this.getLinenumber$org_jmol_script_ScriptContext(null), this.pc, C$.statementAsString$org_jmol_viewer_Viewer$org_jmol_script_TA$I$Z(this.vwr, this.aatoken[this.pc], -9999, this.debugHigh)]) : "");
});

Clazz.newMeth(C$, 'getCommand$I$Z$Z', function (pc, allThisLine, addSemi) {
if (pc >= this.lineIndices.length) return "";
if (allThisLine) {
var pt0=-1;
var pt1=this.script.length$();
for (var i=0; i < this.lineNumbers.length; i++) if (this.lineNumbers[i] == this.lineNumbers[pc]) {
if (pt0 < 0) pt0=this.lineIndices[i][0];
pt1=this.lineIndices[i][1];
} else if (this.lineNumbers[i] == 0 || this.lineNumbers[i] > this.lineNumbers[pc] ) {
break;
}
var s=this.script;
if (s.indexOf$I("\u0001") >= 0) s=s.substring$I$I(0, s.indexOf$I("\u0001"));
if (pt1 == s.length$() - 1 && s.endsWith$S("}") ) pt1++;
return (pt0 == s.length$() || pt1 < pt0  ? "" : s.substring$I$I(Math.max(pt0, 0), Math.min(s.length$(), pt1)));
}var ichBegin=this.lineIndices[pc][0];
var ichEnd=this.lineIndices[pc][1];
var s="";
if (ichBegin < 0 || ichEnd <= ichBegin  || ichEnd > this.script.length$() ) return "";
try {
s=this.script.substring$I$I(ichBegin, ichEnd);
if (s.indexOf$S("\\\n") >= 0) s=$I$(7).rep$S$S$S(s, "\\\n", "  ");
if (s.indexOf$S("\\\r") >= 0) s=$I$(7).rep$S$S$S(s, "\\\r", "  ");
if (s.length$() > 0 && !s.endsWith$S(";") ) s += ";";
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(6,"error$S",["darn problem in Eval getCommand: ichBegin=" + ichBegin + " ichEnd=" + ichEnd + " len = " + this.script.length$() + "\n" + e ]);
} else {
throw e;
}
}
return s;
}, p$1);

Clazz.newMeth(C$, 'logDebugScript$org_jmol_script_TA$I', function (st, ifLevel) {
this.iToken=-9999;
if (this.debugHigh) {
if (st.length > 0) $I$(6,"debug$S",[st[0].toString()]);
for (var i=1; i < st.length; ++i) if (st[i] != null ) $I$(6,"debug$S",[st[i].toString()]);

var strbufLog=Clazz.new_($I$(4,1));
var s=(ifLevel > 0 ? "                          ".substring$I$I(0, ifLevel * 2) : "");
strbufLog.append$S(s).append$S(C$.statementAsString$org_jmol_viewer_Viewer$org_jmol_script_TA$I$Z(this.vwr, st, this.iToken, this.debugHigh));
this.vwr.scriptStatus$S(strbufLog.toString());
} else {
var cmd=p$1.getCommand$I$Z$Z.apply(this, [this.pc, false, false]);
if (cmd !== "" ) this.vwr.scriptStatus$S(cmd);
}}, p$1);

Clazz.newMeth(C$, 'evaluateExpression$O$Z$Z', function (expr, asVariable, compileOnly) {
var e=(Clazz.new_(C$)).setViewer$org_jmol_viewer_Viewer(this.vwr);
try {
e.thisContext=this.thisContext;
e.contextVariables=this.contextVariables;
p$1.pushContext$org_jmol_script_ContextToken$S.apply(e, [null, "evalExp"]);
e.setAllowJSThreads$Z(false);
} catch (e1) {
if (Clazz.exceptionOf(e1,"org.jmol.script.ScriptException")){
} else {
throw e1;
}
}
var exec0=this.executing;
var o=(p$1.evaluate$O$Z$Z.apply(e, [expr, asVariable, compileOnly]));
this.executing=exec0;
return o;
});

Clazz.newMeth(C$, 'runBufferedSafely$S$javajs_util_SB', function (script, outputBuffer) {
if (outputBuffer == null ) outputBuffer=this.outputBuffer;
var e=(Clazz.new_(C$)).setViewer$org_jmol_viewer_Viewer(this.vwr);
var exec0=this.executing;
try {
e.runScriptBuffer$S$javajs_util_SB$Z(script, outputBuffer, false);
} catch (e1) {
if (Clazz.exceptionOf(e1,"org.jmol.script.ScriptException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
this.executing=exec0;
});

Clazz.newMeth(C$, 'runUserAction$S$OA$org_jmol_viewer_Viewer', function (functionName, params, vwr) {
var ev=(Clazz.new_(C$)).setViewer$org_jmol_viewer_Viewer(vwr);
var func=vwr.getFunction$S(functionName.toLowerCase$());
if (func == null ) return null;
try {
var svparams=$I$(8).getVariableAO$OA(params).getList$();
p$1.restoreFunction$org_jmol_api_JmolScriptFunction$javajs_util_Lst$org_jmol_script_SV.apply(ev, [func, svparams, null]);
ev.dispatchCommands$Z$Z$Z(false, true, false);
} catch (e) {
if (Clazz.exceptionOf(e,"org.jmol.script.ScriptException")){
return null;
} else {
throw e;
}
}
var ret=ev.getContextVariableAsVariable$S$Z("_retval", false);
return (ret == null  ? $I$(8).vT : ret);
}, 1);

Clazz.newMeth(C$, 'evaluate$O$Z$Z', function (expr, asVariable, compileOnly) {
try {
if (Clazz.instanceOf(expr, "java.lang.String")) {
if (this.compileScript$S$S$Z(null, "e_x_p_r_e_s_s_i_o_n = " + expr, false)) {
if (compileOnly) return this.aatoken[0];
this.setStatement$org_jmol_script_TA$I(this.aatoken[0], 1);
return (asVariable ? this.parameterExpressionList$I$I$Z(2, -1, false).get$I(0) : this.parameterExpressionString$I$I(2, 0));
}} else if (Clazz.instanceOf(expr, Clazz.array($I$(9), -1))) {
var bs=this.atomExpression$org_jmol_script_TA$I$I$Z$Z$OA$Z(expr, 0, 0, true, false, null, false);
return (asVariable ? $I$(8).newV$I$O(10, bs) : bs);
} else if (Clazz.instanceOf(expr, Clazz.array($I$(9), -2))) {
this.setStatement$org_jmol_script_TA$I((expr)[0], 1);
return (asVariable ? this.parameterExpressionList$I$I$Z(0, -1, false).get$I(0) : this.parameterExpressionString$I$I(0, -1));
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(6).error$S("Error evaluating: " + expr + "\n" + ex );
} else {
throw ex;
}
}
return (asVariable ? $I$(8).getVariable$O("ERROR") : "ERROR");
}, p$1);

Clazz.newMeth(C$, 'checkSelect$java_util_Map$org_jmol_script_TA', function (h, where) {
var ok=false;
try {
p$1.pushContext$org_jmol_script_ContextToken$S.apply(this, [null, "checkSelect"]);
ok=this.parameterExpressionSelect$java_util_Map$org_jmol_script_TA(h, where);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(6).error$S("checkSelect " + ex);
} else {
throw ex;
}
}
this.popContext$Z$Z(false, false);
return ok;
});

Clazz.newMeth(C$, 'getAtomBitSet$O', function (atomExpression) {
if (Clazz.instanceOf(atomExpression, "javajs.util.BS")) return atomExpression;
var bs=Clazz.new_($I$(10,1));
var executing=this.executing;
try {
p$1.pushContext$org_jmol_script_ContextToken$S.apply(this, [null, "getAtomBitSet"]);
var scr="select (" + atomExpression + ")" ;
scr=$I$(7,"replaceAllCharacters$S$S$S",[scr, "\n\r", "),("]);
scr=$I$(7,"rep$S$S$S",[scr, "()", "(none)"]);
if (this.compileScript$S$S$Z(null, scr, false)) {
this.st=this.aatoken[0];
this.setStatement$org_jmol_script_TA$I(this.st, 0);
bs=this.atomExpression$org_jmol_script_TA$I$I$Z$Z$OA$Z(this.st, 1, 0, false, false, null, true);
}this.popContext$Z$Z(false, false);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(6).error$S("getAtomBitSet " + atomExpression + "\n" + ex );
} else {
throw ex;
}
}
this.executing=executing;
return bs;
});

Clazz.newMeth(C$, 'compileScript$S$S$Z', function (filename, strScript, debugCompiler) {
this.scriptFileName=filename;
strScript=p$1.fixScriptPath$S$S.apply(this, [strScript, filename]);
this.restoreScriptContext$org_jmol_script_ScriptContext$Z$Z$Z(this.compiler.compile$S$S$Z$Z$Z$Z(filename, strScript, false, false, debugCompiler && $I$(6).debugging , false), false, false, false);
this.isStateScript=this.compiler.isStateScript;
this.forceNoAddHydrogens=(this.isStateScript && this.script.indexOf$S("pdbAddHydrogens") < 0 );
var s=this.script;
this.pc=p$1.setScriptExtensions.apply(this, []);
if (!this.chk && this.vwr.scriptEditorVisible && strScript.indexOf$S("\u0001## EDITOR_IGNORE ##") < 0  ) this.vwr.scriptStatus$S("");
this.script=s;
return !this.error;
});

Clazz.newMeth(C$, 'fixScriptPath$S$S', function (strScript, filename) {
if (filename != null  && strScript.indexOf$S("$SCRIPT_PATH$") >= 0 ) {
var path=filename;
var pt=Math.max(filename.lastIndexOf$S("|"), filename.lastIndexOf$S("/"));
path=path.substring$I$I(0, pt + 1);
strScript=$I$(7).rep$S$S$S(strScript, "$SCRIPT_PATH$/", path);
strScript=$I$(7).rep$S$S$S(strScript, "$SCRIPT_PATH$", path);
}return strScript;
}, p$1);

Clazz.newMeth(C$, 'setScriptExtensions', function () {
var extensions=this.scriptExtensions;
if (extensions == null ) return 0;
var pt=extensions.indexOf$S("##SCRIPT_STEP");
if (pt >= 0) {
this.executionStepping=true;
}pt=extensions.indexOf$S("##SCRIPT_START=");
if (pt < 0) return 0;
pt=$I$(7,"parseInt$S",[extensions.substring$I(pt + 15)]);
if (pt == -2147483648) return 0;
for (this.pc=0; this.pc < this.lineIndices.length; this.pc++) {
if (this.lineIndices[this.pc][0] > pt || this.lineIndices[this.pc][1] >= pt ) break;
}
if (this.pc > 0 && this.pc < this.lineIndices.length  && this.lineIndices[this.pc][0] > pt ) --this.pc;
return this.pc;
}, p$1);

Clazz.newMeth(C$, 'compileScriptFileInternal$S$S$S$S', function (filename, localPath, remotePath, scriptPath) {
if (filename.toLowerCase$().indexOf$S("javascript:") == 0) return this.compileScript$S$S$Z(filename, this.vwr.jsEval$S(filename.substring$I(11)), this.debugScript);
var data=Clazz.array(String, [2]);
data[0]=filename;
if (!this.vwr.fm.getFileDataAsString$SA$I$Z$Z$Z(data, -1, false, true, false)) {
this.setErrorMessage$S("io error reading " + data[0] + ": " + data[1] );
return false;
}var movieScript="";
if (("\n" + data[1]).indexOf$S("\nJmolManifest.txt\n") >= 0) {
var path;
if (filename.endsWith$S(".all.pngj") || filename.endsWith$S(".all.png") ) {
path="|state.spt";
filename += "|";
} else {
if (data[1].indexOf$S("movie.spt") >= 0) {
data[0]=filename + "|movie.spt";
if (this.vwr.fm.getFileDataAsString$SA$I$Z$Z$Z(data, -1, false, true, false)) {
movieScript=data[1];
}}filename += "|JmolManifest.txt";
data[0]=filename;
if (!this.vwr.fm.getFileDataAsString$SA$I$Z$Z$Z(data, -1, false, true, false)) {
this.setErrorMessage$S("io error reading " + data[0] + ": " + data[1] );
return false;
}path=$I$(11).getManifestScriptPath$S(data[1]);
}if (path != null  && path.length$() > 0 ) {
data[0]=filename=filename.substring$I$I(0, filename.lastIndexOf$S("|")) + path;
if (!this.vwr.fm.getFileDataAsString$SA$I$Z$Z$Z(data, -1, false, true, false)) {
this.setErrorMessage$S("io error reading " + data[0] + ": " + data[1] );
return false;
}}if (filename.endsWith$S("|state.spt")) {
this.vwr.g.setO$S$O("_pngjFile", filename.substring$I$I(0, filename.length$() - 10) + "?");
}}this.scriptFileName=filename;
data[1]=$I$(11).getEmbeddedScript$S(data[1]);
var script=p$1.fixScriptPath$S$S.apply(this, [data[1], data[0]]);
if (scriptPath == null ) {
scriptPath=this.vwr.fm.getFilePath$S$Z$Z(filename, false, false);
scriptPath=scriptPath.substring$I$I(0, Math.max(scriptPath.lastIndexOf$S("|"), scriptPath.lastIndexOf$S("/")));
}script=$I$(11).setScriptFileReferences$S$S$S$S(script, localPath, remotePath, scriptPath);
return this.compileScript$S$S$Z(filename, script + movieScript, this.debugScript);
}, p$1);

Clazz.newMeth(C$, 'evalFunctionFloat$O$O$FA', function (func, params, values) {
try {
var p=params;
for (var i=0; i < values.length; i++) p.get$I(i).value=Float.valueOf$F(values[i]);

var f=func;
return $I$(8,"fValue$org_jmol_script_T",[p$1.runFunctionAndRet$org_jmol_api_JmolScriptFunction$S$javajs_util_Lst$org_jmol_script_SV$Z$Z$Z.apply(this, [f, f.name, p, null, true, false, false])]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return NaN;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getUserFunctionResult$S$javajs_util_Lst$org_jmol_script_SV', function (name, params, tokenAtom) {
return p$1.runFunctionAndRet$org_jmol_api_JmolScriptFunction$S$javajs_util_Lst$org_jmol_script_SV$Z$Z$Z.apply(this, [null, name, params, tokenAtom, true, true, false]);
});

Clazz.newMeth(C$, 'runFunctionAndRet$org_jmol_api_JmolScriptFunction$S$javajs_util_Lst$org_jmol_script_SV$Z$Z$Z', function ($function, name, params, tokenAtom, getReturn, setContextPath, allowThreads) {
if ($function == null ) {
name=name.toLowerCase$();
$function=this.vwr.getFunction$S(name);
if ($function == null ) return null;
if (setContextPath) this.contextPath += " >> function " + name;
} else if (setContextPath) {
this.contextPath += " >> " + name;
}p$1.pushContext$org_jmol_script_ContextToken$S.apply(this, [null, "runFunctionAndRet "]);
if (this.allowJSThreads) this.setAllowJSThreads$Z(allowThreads);
var isTry=($function.getTok$() == 364558);
this.thisContext.isTryCatch=isTry;
this.thisContext.isFunction=!isTry;
this.functionName=name;
if (isTry) {
p$1.resetError.apply(this, []);
this.thisContext.displayLoadErrorsSave=this.vwr.displayLoadErrors;
this.thisContext.tryPt=++this.vwr.tryPt;
this.vwr.displayLoadErrors=false;
p$1.restoreFunction$org_jmol_api_JmolScriptFunction$javajs_util_Lst$org_jmol_script_SV.apply(this, [$function, params, tokenAtom]);
this.contextVariables.put$O$O("_breakval", $I$(8).newI$I(2147483647));
this.contextVariables.put$O$O("_errorval", $I$(8).newS$S(""));
var cv=this.contextVariables;
p$1.executeCommands$Z$Z.apply(this, [true, false]);
while (this.thisContext.tryPt > this.vwr.tryPt)this.popContext$Z$Z(false, false);

p$1.processTry$java_util_Map.apply(this, [cv]);
return null;
} else if (Clazz.instanceOf($function, "org.jmol.api.JmolParallelProcessor")) {
{
this.parallelProcessor=$function;
p$1.restoreFunction$org_jmol_api_JmolScriptFunction$javajs_util_Lst$org_jmol_script_SV.apply(this, [$function, params, tokenAtom]);
this.dispatchCommands$Z$Z$Z(false, true, false);
($function).runAllProcesses$org_jmol_viewer_Viewer(this.vwr);
}} else {
p$1.restoreFunction$org_jmol_api_JmolScriptFunction$javajs_util_Lst$org_jmol_script_SV.apply(this, [$function, params, tokenAtom]);
this.dispatchCommands$Z$Z$Z(false, true, false);
}var v=(getReturn ? this.getContextVariableAsVariable$S$Z("_retval", false) : null);
this.popContext$Z$Z(false, false);
return v;
}, p$1);

Clazz.newMeth(C$, 'processTry$java_util_Map', function (cv) {
this.vwr.displayLoadErrors=this.thisContext.displayLoadErrorsSave;
this.popContext$Z$Z(false, false);
var err=this.vwr.getP$S("_errormessage");
if (err.length$() > 0) {
cv.put$O$O("_errorval", $I$(8).newS$S(err));
p$1.resetError.apply(this, []);
}cv.put$O$O("_tryret", cv.get$O("_retval"));
var ret=cv.get$O("_tryret");
if (ret.value != null  || ret.intValue != 2147483647 ) {
p$1.cmdReturn$org_jmol_script_SV.apply(this, [ret]);
return;
}var errMsg=(cv.get$O("_errorval")).value;
if (errMsg.length$() == 0) {
var iBreak=(cv.get$O("_breakval")).intValue;
if (iBreak != 2147483647) {
p$1.breakAt$I.apply(this, [this.pc - iBreak]);
return;
}}if (this.pc + 1 < this.aatoken.length && this.aatoken[this.pc + 1][0].tok == 102412 ) {
var ct=this.aatoken[this.pc + 1][0];
if (ct.contextVariables != null  && ct.name0 != null  ) ct.contextVariables.put$O$O(ct.name0, $I$(8).newS$S(errMsg));
ct.intValue=(errMsg.length$() > 0 ? 1 : -1) * Math.abs(ct.intValue);
}}, p$1);

Clazz.newMeth(C$, 'breakAt$I', function (pt) {
if (pt < 0) {
this.getContextVariableAsVariable$S$Z("_breakval", false).intValue=-pt;
this.pcEnd=this.pc;
return;
}var ptEnd=Math.abs(this.aatoken[pt][0].intValue);
var tok=this.aatoken[pt][0].tok;
if (tok == 102411 || tok == 102413 ) {
this.theToken=this.aatoken[ptEnd--][0];
var ptNext=Math.abs(this.theToken.intValue);
if (this.theToken.tok != 102409) this.theToken.intValue=-ptNext;
} else {
this.pc=-1;
while (this.pc != pt && this.thisContext != null  ){
while (this.thisContext != null  && !$I$(2).isBreakableContext$I(this.thisContext.token.tok) )this.popContext$Z$Z(true, false);

this.pc=this.thisContext.pc;
this.popContext$Z$Z(true, false);
}
}this.pc=ptEnd;
}, p$1);

Clazz.newMeth(C$, 'restoreFunction$org_jmol_api_JmolScriptFunction$javajs_util_Lst$org_jmol_script_SV', function (f, params, tokenAtom) {
var $function=f;
this.aatoken=$function.aatoken;
this.lineNumbers=$function.lineNumbers;
this.lineIndices=$function.lineIndices;
this.script=$function.script;
this.pc=0;
if ($function.names != null ) {
this.contextVariables=Clazz.new_($I$(12,1));
$function.setVariables$java_util_Map$javajs_util_Lst(this.contextVariables, params);
}if (tokenAtom != null ) this.contextVariables.put$O$O("_x", tokenAtom);
}, p$1);

Clazz.newMeth(C$, 'clearDefinedVariableAtomSets$', function () {
this.vwr.definedAtomSets.remove$O("# variable");
});

Clazz.newMeth(C$, 'defineSets', function () {
if (!this.vwr.definedAtomSets.containsKey$O("# static")) {
for (var i=0; i < $I$(13).predefinedStatic.length; i++) p$1.defineAtomSet$S.apply(this, [$I$(13).predefinedStatic[i]]);

p$1.defineAtomSet$S.apply(this, ["# static"]);
}if (this.vwr.definedAtomSets.containsKey$O("# variable")) return;
for (var i=0; i < $I$(13).predefinedVariable.length; i++) p$1.defineAtomSet$S.apply(this, [$I$(13).predefinedVariable[i]]);

for (var i=$I$(14).elementNumberMax; --i >= 0; ) {
var definition=" elemno=" + i;
p$1.defineAtomSet$S.apply(this, ["@" + $I$(14).elementNameFromNumber$I(i) + definition ]);
p$1.defineAtomSet$S.apply(this, ["@_" + $I$(14).elementSymbolFromNumber$I(i) + definition ]);
}
for (var i=4; --i >= 0; ) {
var definition="@" + $I$(14).altElementNameFromIndex$I(i) + " _e=" + $I$(14).altElementNumberFromIndex$I(i) ;
p$1.defineAtomSet$S.apply(this, [definition]);
}
for (var i=$I$(14).altElementMax; --i >= 4; ) {
var ei=$I$(14).altElementNumberFromIndex$I(i);
var def=" _e=" + ei;
var definition="@_" + $I$(14).altElementSymbolFromIndex$I(i);
p$1.defineAtomSet$S.apply(this, [definition + def]);
definition="@_" + $I$(14).altIsotopeSymbolFromIndex$I(i);
p$1.defineAtomSet$S.apply(this, [definition + def]);
definition="@_" + $I$(14).altIsotopeSymbolFromIndex2$I(i);
p$1.defineAtomSet$S.apply(this, [definition + def]);
definition="@" + $I$(14).altElementNameFromIndex$I(i);
if (definition.length$() > 1) p$1.defineAtomSet$S.apply(this, [definition + def]);
var e=$I$(14).getElementNumber$I(ei);
ei=$I$(14).getNaturalIsotope$I(e);
if (ei > 0) {
def=$I$(14).elementSymbolFromNumber$I(e);
p$1.defineAtomSet$S.apply(this, ["@_" + def + ei + " _e=" + e ]);
p$1.defineAtomSet$S.apply(this, ["@_" + ei + def + " _e=" + e ]);
}}
p$1.defineAtomSet$S.apply(this, ["# variable"]);
}, p$1);

Clazz.newMeth(C$, 'defineAtomSet$S', function (script) {
if (script.indexOf$S("#") == 0) {
this.vwr.definedAtomSets.put$O$O(script, Boolean.TRUE);
return;
}var sc=this.compiler.compile$S$S$Z$Z$Z$Z("#predefine", script, true, false, false, false);
if (sc.errorType != null ) {
this.vwr.scriptStatus$S("JmolConstants.java ERROR: predefined set compile error:" + script + "\ncompile error:" + sc.errorMessageUntranslated );
return;
}if (sc.getTokenCount$() != 1) {
this.vwr.scriptStatus$S("JmolConstants.java ERROR: predefinition does not have exactly 1 command:" + script);
return;
}var statement=sc.getToken$I(0);
if (statement.length <= 2) {
this.vwr.scriptStatus$S("JmolConstants.java ERROR: bad predefinition length:" + script);
return;
}var tok=statement[1].tok;
if (!$I$(9).tokAttr$I$I(tok, 1073741824) && !$I$(9).tokAttr$I$I(tok, 2097152) ) {
this.vwr.scriptStatus$S("JmolConstants.java ERROR: invalid variable name:" + script);
return;
}var name=(statement[1].value).toLowerCase$();
if (name.startsWith$S("dynamic_")) name="!" + name.substring$I(8);
this.vwr.definedAtomSets.put$O$O(name, statement);
}, p$1);

Clazz.newMeth(C$, 'lookupIdentifierValue$S', function (identifier) {
var bs=p$1.lookupValue$S$Z.apply(this, [identifier, false]);
if (bs != null ) return $I$(15).copy$javajs_util_BS(bs);
bs=this.getAtomBits$I$O(1073741824, identifier);
return (bs == null  ? Clazz.new_($I$(10,1)) : bs);
});

Clazz.newMeth(C$, 'lookupValue$S$Z', function (setName, plurals) {
if (this.chk) {
return Clazz.new_($I$(10,1));
}p$1.defineSets.apply(this, []);
setName=setName.toLowerCase$();
var value=this.vwr.definedAtomSets.get$O(setName);
var isDynamic=false;
if (value == null ) {
value=this.vwr.definedAtomSets.get$O("!" + setName);
isDynamic=(value != null );
}if (Clazz.instanceOf(value, "javajs.util.BS")) return value;
if (Clazz.instanceOf(value, Clazz.array($I$(9), -1))) {
p$1.pushContext$org_jmol_script_ContextToken$S.apply(this, [null, "lookupValue"]);
var bs=this.atomExpression$org_jmol_script_TA$I$I$Z$Z$OA$Z(value, -2, 0, true, false, null, true);
this.popContext$Z$Z(false, false);
if (!isDynamic) this.vwr.definedAtomSets.put$O$O(setName, bs);
return bs;
}if (setName.equals$O("water")) {
var bs=this.vwr.ms.getAtoms$I$O(1612709912, null);
if (!isDynamic) this.vwr.definedAtomSets.put$O$O(setName, bs);
return bs;
}if (plurals) return null;
var len=setName.length$();
if (len < 5) return null;
if (setName.charAt$I(len - 1) != "s") return null;
if (setName.endsWith$S("ies")) setName=setName.substring$I$I(0, len - 3) + 'y';
 else setName=setName.substring$I$I(0, len - 1);
return p$1.lookupValue$S$Z.apply(this, [setName, true]);
}, p$1);

Clazz.newMeth(C$, 'deleteAtomsInVariables$javajs_util_BS', function (bsDeleted) {
for (var entry, $entry = this.vwr.definedAtomSets.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var value=entry.getValue$();
if (Clazz.instanceOf(value, "javajs.util.BS")) {
$I$(15).deleteBits$javajs_util_BS$javajs_util_BS(value, bsDeleted);
if (!entry.getKey$().startsWith$S("!")) this.vwr.g.setUserVariable$S$org_jmol_script_SV("@" + entry.getKey$(), $I$(8).newV$I$O(10, value));
}}
});

Clazz.newMeth(C$, 'getThisContext$', function () {
return this.thisContext;
});

Clazz.newMeth(C$, 'clearState$Z', function (tQuiet) {
this.thisContext=null;
this.scriptLevel=0;
this.setErrorMessage$S(null);
this.contextPath="";
this.tQuiet=tQuiet;
}, p$1);

Clazz.newMeth(C$, 'pushContextDown$S', function (why) {
this.scriptLevel--;
p$1.pushContext2$org_jmol_script_ContextToken$S.apply(this, [null, why]);
});

Clazz.newMeth(C$, 'pushContext$org_jmol_script_ContextToken$S', function (token, why) {
if (this.scriptLevel == C$.contextDepthMax) this.error$I(44);
p$1.pushContext2$org_jmol_script_ContextToken$S.apply(this, [token, why]);
}, p$1);

Clazz.newMeth(C$, 'pushContext2$org_jmol_script_ContextToken$S', function (token, why) {
this.thisContext=this.getScriptContext$S(why);
this.thisContext.token=token;
if (token == null ) {
this.scriptLevel=++this.thisContext.scriptLevel;
} else {
this.thisContext.scriptLevel=-1;
this.contextVariables=Clazz.new_($I$(12,1));
if (token.contextVariables != null ) for (var key, $key = token.contextVariables.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) $I$(2).addContextVariable$java_util_Map$S(this.contextVariables, key);

}if (this.debugHigh || this.isCmdLine_c_or_C_Option ) $I$(6,"info$S",["-->>----------------------".substring$I$I(0, Math.min(15, this.scriptLevel + 5)) + this.scriptLevel + " " + this.scriptFileName + " " + token + " " + this.thisContext.id + " " + why + " path=" + this.thisContext.contextPath ]);
}, p$1);

Clazz.newMeth(C$, 'getScriptContext$S', function (why) {
var context=Clazz.new_($I$(16,1));
if (this.debugHigh) $I$(6,"info$S",["creating context " + context.id + " for " + why + " path=" + this.contextPath ]);
context.scriptLevel=this.scriptLevel;
context.parentContext=this.thisContext;
context.contextPath=this.contextPath;
context.scriptFileName=this.scriptFileName;
context.parallelProcessor=this.parallelProcessor;
context.functionName=this.functionName;
context.script=this.script;
context.lineNumbers=this.lineNumbers;
context.lineIndices=this.lineIndices;
context.saveTokens$org_jmol_script_TAA(this.aatoken);
context.statement=this.st;
context.statementLength=this.slen;
context.pc=context.pc0=this.pc;
context.lineEnd=this.lineEnd;
context.pcEnd=this.pcEnd;
context.iToken=this.iToken;
context.theToken=this.theToken;
context.theTok=this.theTok;
context.outputBuffer=this.outputBuffer;
context.vars=this.contextVariables;
context.isStateScript=this.isStateScript;
context.errorMessage=this.errorMessage;
context.errorType=this.errorType;
context.iCommandError=this.iCommandError;
context.chk=this.chk;
context.executionStepping=this.executionStepping;
context.executionPaused=this.executionPaused;
context.scriptExtensions=this.scriptExtensions;
context.mustResumeEval=this.mustResumeEval;
context.allowJSThreads=this.allowJSThreads;
return context;
});

Clazz.newMeth(C$, 'popContext$Z$Z', function (isFlowCommand, statementOnly) {
if (this.thisContext == null ) return;
if (this.thisContext.scriptLevel > 0) this.scriptLevel=this.thisContext.scriptLevel - 1;
var scTemp=(isFlowCommand ? this.getScriptContext$S("popFlow") : null);
this.restoreScriptContext$org_jmol_script_ScriptContext$Z$Z$Z(this.thisContext, true, isFlowCommand, statementOnly);
if (scTemp != null ) this.restoreScriptContext$org_jmol_script_ScriptContext$Z$Z$Z(scTemp, true, false, true);
if (this.debugHigh || this.isCmdLine_c_or_C_Option ) $I$(6,"info$S",["--<<------------".substring$I$I(0, Math.min(15, this.scriptLevel + 5)) + (this.scriptLevel + 1) + " " + this.scriptFileName + " isFlow " + isFlowCommand + " thisContext=" + (this.thisContext == null  ? "" : "" + this.thisContext.id) + " pc=" + this.pc + "-->" + this.pc + " path=" + (this.thisContext == null  ? "" : this.thisContext.contextPath) ]);
});

Clazz.newMeth(C$, 'restoreScriptContext$org_jmol_script_ScriptContext$Z$Z$Z', function (context, isPopContext, isFlowCommand, statementOnly) {
this.executing=!this.chk;
if (context == null ) return;
if (!isFlowCommand) {
this.st=context.statement;
this.slen=context.statementLength;
this.pc=context.pc;
this.lineEnd=context.lineEnd;
this.pcEnd=context.pcEnd;
if (statementOnly) return;
}this.mustResumeEval=context.mustResumeEval;
this.script=context.script;
this.lineNumbers=context.lineNumbers;
this.lineIndices=context.lineIndices;
this.aatoken=context.restoreTokens$();
this.contextVariables=context.vars;
this.scriptExtensions=context.scriptExtensions;
if (isPopContext) {
this.contextPath=context.contextPath;
var pt=(this.contextPath == null  ? -1 : this.contextPath.indexOf$S(" >> "));
if (pt >= 0) this.contextPath=this.contextPath.substring$I$I(0, pt);
this.scriptFileName=context.scriptFileName;
this.parallelProcessor=context.parallelProcessor;
this.functionName=context.functionName;
this.iToken=context.iToken;
this.theToken=context.theToken;
this.theTok=context.theTok;
this.outputBuffer=context.outputBuffer;
this.isStateScript=context.isStateScript;
this.thisContext=context.parentContext;
this.allowJSThreads=context.allowJSThreads;
if (this.debugHigh || this.isCmdLine_c_or_C_Option ) $I$(6,"info$S",["--r------------".substring$I$I(0, Math.min(15, this.scriptLevel + 5)) + this.scriptLevel + " " + this.scriptFileName + " isPop " + isPopContext + " isFlow " + isFlowCommand + " context.id=" + context.id + " pc=" + this.pc + "-->" + context.pc + " " + this.contextPath ]);
} else {
this.error=(context.errorType != null );
this.errorMessage=context.errorMessage;
this.errorMessageUntranslated=context.errorMessageUntranslated;
this.iCommandError=context.iCommandError;
this.errorType=context.errorType;
}});

Clazz.newMeth(C$, 'setException$org_jmol_script_ScriptException$S$S', function (sx, msg, untranslated) {
sx.untranslated=(untranslated == null  ? msg : untranslated);
var isThrown="!".equals$O(untranslated);
this.errorType=msg;
this.iCommandError=this.pc;
if (sx.message == null ) {
sx.message="";
return;
}var s=C$.getContextTrace$org_jmol_viewer_Viewer$org_jmol_script_ScriptContext$javajs_util_SB$Z(this.vwr, this.getScriptContext$S("setException"), null, true).toString();
while (this.thisContext != null  && !this.thisContext.isTryCatch )this.popContext$Z$Z(false, false);

if (sx.message.indexOf$S(s) < 0) {
sx.message += s;
sx.untranslated += s;
}p$1.resumeViewer$S.apply(this, [isThrown ? "throw context" : "scriptException"]);
if (isThrown || this.thisContext != null   || this.chk  || msg.indexOf$S("NOTE: file recognized as a script file: ") >= 0 ) return;
$I$(6,"error$S",["eval ERROR: " + s + "\n" + this.toString() ]);
if (this.vwr.autoExit) this.vwr.exitJmol$();
});

Clazz.newMeth(C$, 'statementAsString$org_jmol_viewer_Viewer$org_jmol_script_TA$I$Z', function (vwr, statement, iTok, doLogMessages) {
if (statement.length == 0) return "";
var sb=Clazz.new_($I$(4,1));
var tok=statement[0].tok;
switch (tok) {
case 0:
return statement[0].value;
case 102409:
if (statement.length == 2 && (statement[1].tok == 134320141 || statement[1].tok == 102436 ) ) return ((statement[1].value)).toString();
}
var useBraces=true;
var inBrace=false;
var inClauseDefine=false;
var setEquals=(statement.length > 1 && tok == 36867  && statement[0].value.equals$O("")  && (statement[0].intValue == 61  || statement[0].intValue == 35  )  && statement[1].tok != 1073742325 );
var len=statement.length;
for (var i=0; i < len; ++i) {
var token=statement[i];
if (token == null ) {
len=i;
break;
}if (iTok == i - 1) sb.append$S(" <<");
if (i != 0) sb.appendC$C(" ");
if (i == 2 && setEquals ) {
if ((setEquals=(token.tok != 268435860)) || statement[0].intValue == 35  ) {
sb.append$S(setEquals ? "= " : "== ");
if (!setEquals) continue;
}}if (iTok == i && token.tok != 1073742326 ) sb.append$S("<<<<");
switch (token.tok) {
case 1073742325:
if (useBraces) sb.append$S("{");
continue;
case 1073742326:
if (inClauseDefine && i == statement.length - 1 ) useBraces=false;
if (useBraces) sb.append$S("}");
continue;
case 268435520:
case 268435521:
break;
case 1073742332:
case 1073742338:
inBrace=(token.tok == 1073742332);
break;
case 12290:
if (i > 0 && (token.value).equals$O("define") ) {
sb.append$S("@");
if (i + 1 < statement.length && statement[i + 1].tok == 1073742325 ) {
if (!useBraces) inClauseDefine=true;
useBraces=true;
}continue;
}break;
case 1073742335:
sb.append$S("true");
continue;
case 1073742334:
sb.append$S("false");
continue;
case 1275082245:
break;
case 2:
sb.appendI$I(token.intValue);
continue;
case 8:
case 9:
case 10:
sb.append$S($I$(8).sValue$org_jmol_script_T(token));
continue;
case 6:
if (Boolean.TRUE === (token.value).get$O("$_BINARY_$") ) {
sb.append$S("<BINARY DATA>");
continue;
}case 7:
sb.append$S((token).escape$());
continue;
case 5:
sb.appendC$C("^");
continue;
case 1073742363:
if (token.intValue != 2147483647) sb.appendI$I(token.intValue);
 else sb.append$S($I$(17,"getSeqcodeStringFor$I",[$I$(18).getSeqCode$org_jmol_script_T(token)]));
token=statement[++i];
sb.appendC$C(" ");
sb.append$S(inBrace ? "-" : "- ");
case 1073742362:
if (token.intValue != 2147483647) sb.appendI$I(token.intValue);
 else sb.append$S($I$(17,"getSeqcodeStringFor$I",[$I$(18).getSeqCode$org_jmol_script_T(token)]));
continue;
case 1073742357:
sb.append$S("*:");
sb.append$S(vwr.getChainIDStr$I(token.intValue));
continue;
case 1073742355:
sb.append$S("*%");
if (token.value != null ) sb.append$S(token.value.toString());
continue;
case 1073742358:
sb.append$S("*/");
case 1073742359:
case 3:
if (token.intValue < 2147483647) {
sb.append$S($I$(19).escapeModelFileNumber$I(token.intValue));
} else {
sb.append$S("" + token.value);
}continue;
case 1073742361:
sb.appendC$C("[");
var ptr=token.intValue * 6 + 1;
sb.append$S($I$(17).standardGroupList.substring$I$I(ptr, ptr + 3).trim$());
sb.appendC$C("]");
continue;
case 1073742360:
sb.appendC$C("[");
sb.appendO$O(token.value);
sb.appendC$C("]");
continue;
case 1073742356:
sb.append$S("*.");
break;
case 1094713349:
if (Clazz.instanceOf(token.value, "javajs.util.P3")) {
var pt=token.value;
sb.append$S("cell=").append$S($I$(19).eP$javajs_util_T3(pt));
continue;
}break;
case 4:
sb.append$S("\"").appendO$O(token.value).append$S("\"");
continue;
case 268435860:
case 268435858:
case 268435857:
case 268435856:
case 268435859:
case 268435861:
if (token.intValue == 1715472409) {
sb.append$S(statement[++i].value).append$S(" ");
} else if (token.intValue != 2147483647) sb.append$S($I$(9).nameOf$I(token.intValue)).append$S(" ");
break;
case 364558:
continue;
case 102409:
sb.append$S("end");
continue;
default:
if ($I$(9).tokAttr$I$I(token.tok, 1073741824) || !doLogMessages ) break;
sb.appendC$C("\n").append$S(token.toString()).appendC$C("\n");
continue;
}
if (token.value != null ) sb.append$S(token.value.toString());
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'setObjectPropSafe$S$I', function (id, tokCommand) {
try {
return p$1.setObjectProp$S$I$I.apply(this, [id, tokCommand, -1]);
} catch (e) {
if (Clazz.exceptionOf(e,"org.jmol.script.ScriptException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setAtomProp$S$O$javajs_util_BS', function (prop, value, bs) {
this.setShapePropertyBs$I$S$O$javajs_util_BS(0, prop, value, bs);
});

Clazz.newMeth(C$, 'restrictSelected$Z$Z', function (isBond, doInvert) {
if (!this.chk) this.sm.restrictSelected$Z$Z(isBond, doInvert);
});

Clazz.newMeth(C$, 'showString$S', function (str) {
this.showStringPrint$S$Z(str, false);
});

Clazz.newMeth(C$, 'showStringPrint$S$Z', function (s, mustDo) {
if (this.chk || s == null  ) return;
if (this.outputBuffer == null ) this.vwr.showString$S$Z(s, mustDo);
 else p$1.appendBuffer$S$Z.apply(this, [s, mustDo]);
});

Clazz.newMeth(C$, 'report$S$Z', function (s, isError) {
if (this.chk) return;
if (this.outputBuffer == null ) this.vwr.scriptStatus$S(s);
 else p$1.appendBuffer$S$Z.apply(this, [s, isError]);
});

Clazz.newMeth(C$, 'appendBuffer$S$Z', function (str, mustDo) {
if (mustDo || this.isFuncReturn || $I$(6).isActiveLevel$I(4)  ) this.outputBuffer.append$S(str).appendC$C("\n");
}, p$1);

Clazz.newMeth(C$, 'addProcess$javajs_util_Lst$I$I', function (vProcess, pc, pt) {
if (this.parallelProcessor == null ) return;
var statements=Clazz.array($I$(9), [pt, null]);
for (var i=0; i < vProcess.size$(); i++) statements[i + 1 - pc]=vProcess.get$I(i);

var context=this.getScriptContext$S("addProcess");
context.saveTokens$org_jmol_script_TAA(statements);
context.pc=1 - pc;
context.pcEnd=pt;
this.parallelProcessor.addProcess$S$org_jmol_script_ScriptContext("p" + (++C$.iProcess), context);
}, p$1);

Clazz.newMeth(C$, 'checkContinue', function () {
if (this.executionStopped) return false;
if (this.executionStepping && p$1.isCommandDisplayable$I.apply(this, [this.pc]) ) {
this.vwr.scriptStatusMsg$S$S("Next: " + this.getNextStatement$(), "stepping -- type RESUME to continue");
this.executionPaused=true;
} else if (!this.executionPaused) {
return true;
}if ($I$(6).debugging) {
$I$(6,"debug$S",["script execution paused at command " + (this.pc + 1) + " level " + this.scriptLevel + ": " + this.thisCommand ]);
}this.refresh$Z(false);
while (this.executionPaused){
this.vwr.popHoldRepaint$S("pause \u0001## REPAINT_IGNORE ##");
var script=this.vwr.getInsertedCommand$();
if (script.length$() > 0) {
this.resumePausedExecution$();
this.setErrorMessage$S(null);
var scSave=this.getScriptContext$S("script insertion");
this.pc--;
try {
this.runScript$S(script);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
this.setErrorMessage$S("" + e);
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
this.setErrorMessage$S("" + er);
}
} else {
throw e$$;
}
}
if (this.error) {
this.report$S$Z(this.errorMessage, true);
this.setErrorMessage$S(null);
}this.restoreScriptContext$org_jmol_script_ScriptContext$Z$Z$Z(scSave, true, false, false);
this.pauseExecution$Z(false);
}p$1.doDelay$I.apply(this, [-100]);
this.vwr.pushHoldRepaintWhy$S("pause");
}
this.notifyResumeStatus$();
return !this.error && !this.executionStopped ;
}, p$1);

Clazz.newMeth(C$, 'delayScript$I', function (millis) {
if (this.vwr.autoExit) return;
this.stopScriptThreads$();
if (this.vwr.captureParams != null  && millis > 0 ) {
this.vwr.captureParams.put$O$O("captureDelayMS", Integer.valueOf$I(millis));
}this.scriptDelayThread=Clazz.new_($I$(20,1).c$$org_jmol_api_JmolScriptEvaluator$org_jmol_viewer_Viewer$I,[this, this.vwr, millis]);
this.scriptDelayThread.run$();
});

Clazz.newMeth(C$, 'doDelay$I', function (millis) {
if (!this.useThreads$()) return;
if (this.isJS) throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "delay", millis]);
this.delayScript$I(millis);
}, p$1);

Clazz.newMeth(C$, 'evalParallel$org_jmol_script_ScriptContext$org_jmol_viewer_ShapeManager', function (context, shapeManager) {
return this.getCmdExt$().evalParallel$org_jmol_script_ScriptContext$org_jmol_viewer_ShapeManager(context, shapeManager);
});

Clazz.newMeth(C$, 'isCommandDisplayable$I', function (i) {
if (i >= this.aatoken.length || i >= this.pcEnd  || this.aatoken[i] == null  ) return false;
return (this.lineIndices[i][1] > this.lineIndices[i][0]);
}, p$1);

Clazz.newMeth(C$, 'loadFileResourceAsync$S', function (fileName) {
this.loadFileAsync$S$S$I$Z(null, fileName, -Math.abs(fileName.hashCode$()), false);
});

Clazz.newMeth(C$, 'loadFileAsync$S$S$I$Z', function (prefix, filename, i, doClear) {
if (this.vwr.fm.cacheGet$S$Z(filename, false) != null ) return filename;
if (prefix != null ) prefix="cache://local" + prefix;
var key=this.pc + "_" + i + "_" + filename ;
var cacheName;
if (this.thisContext == null ) {
p$1.pushContext$org_jmol_script_ContextToken$S.apply(this, [null, "loadFileAsync"]);
}if (this.thisContext.htFileCache == null ) {
this.thisContext.htFileCache=Clazz.new_($I$(12,1));
}cacheName=this.thisContext.htFileCache.get$O(key);
if (cacheName != null  && cacheName.length$() > 0 ) {
this.fileLoadThread=null;
this.vwr.queueOnHold=false;
if ("#CANCELED#".equals$O(cacheName) || "#CANCELED#".equals$O(this.vwr.fm.cacheGet$S$Z(cacheName, false)) ) this.evalError$S$S("#CANCELED#", null);
return cacheName;
}this.thisContext.htFileCache.put$O$O(key, cacheName=prefix + System.currentTimeMillis$());
if (doClear) this.vwr.cacheFileByName$S$Z(prefix + "*", false);
this.fileLoadThread=Clazz.new_($I$(22,1).c$$org_jmol_api_JmolScriptEvaluator$org_jmol_viewer_Viewer$S$S$S,[this, this.vwr, filename, key, cacheName]);
if (this.vwr.testAsync) this.fileLoadThread.start$();
 else this.fileLoadThread.run$();
if (i < 0) this.fileLoadThread=null;
throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "load", 1]);
});

Clazz.newMeth(C$, 'logLoadInfo$S', function (msg) {
if (msg.length$() > 0) $I$(6).info$S(msg);
var sb=Clazz.new_($I$(4,1));
var modelCount=this.vwr.ms.mc;
if (modelCount > 1) sb.append$S((this.vwr.am.isMovie ? this.vwr.am.getFrameCount$() + " frames" : modelCount + " models") + "\n");
for (var i=0; i < modelCount; i++) {
var moData=this.vwr.ms.getInfo$I$S(i, "moData");
if (moData == null  || !moData.containsKey$O("mos") ) continue;
sb.appendI$I((moData.get$O("mos")).size$()).append$S(" molecular orbitals in model ").append$S(this.vwr.getModelNumberDotted$I(i)).append$S("\n");
}
if (sb.length$() > 0) this.vwr.showString$S$Z(sb.toString(), false);
}, p$1);

Clazz.newMeth(C$, 'notifyResumeStatus$', function () {
if (!this.chk && !this.executionStopped && !this.executionStepping && !this.executionPaused  ) {
this.vwr.scriptStatus$S("script execution " + (this.error || this.executionStopped  ? "interrupted" : "resumed"));
}if ($I$(6).debugging) $I$(6).debug$S("script execution resumed");
});

Clazz.newMeth(C$, 'refresh$Z', function (doDelay) {
if (this.chk) return;
this.vwr.setTainted$Z(true);
this.vwr.requestRepaintAndWait$S("refresh cmd");
if (this.isJS && doDelay ) p$1.doDelay$I.apply(this, [10]);
});

Clazz.newMeth(C$, 'stopScriptThreads$', function () {
if (this.scriptDelayThread != null ) {
this.scriptDelayThread.interrupt$();
this.scriptDelayThread=null;
}if (this.fileLoadThread != null ) {
this.fileLoadThread.interrupt$();
this.fileLoadThread.resumeEval$();
if (this.thisContext != null ) this.popContext$Z$Z(false, false);
this.fileLoadThread=null;
}});

Clazz.newMeth(C$, 'getErrorLineMessage2$', function () {
return $I$(5,"getErrorLineMessage$S$S$I$I$S",[this.functionName, this.scriptFileName, this.getLinenumber$org_jmol_script_ScriptContext(null), this.pc, C$.statementAsString$org_jmol_viewer_Viewer$org_jmol_script_TA$I$Z(this.vwr, this.st, -9999, this.debugHigh)]);
});

Clazz.newMeth(C$, 'getLinenumber$org_jmol_script_ScriptContext', function (c) {
return (c == null  ? this.lineNumbers[this.pc] : c.lineNumbers[c.pc]);
});

Clazz.newMeth(C$, 'dispatchCommands$Z$Z$Z', function (isSpt, fromFunc, isTry) {
if (this.sm == null ) this.sm=this.vwr.shm;
this.debugScript=this.debugHigh=false;
if (!this.chk) this.setDebugging$();
if (this.pcEnd == 0) this.pcEnd=2147483647;
if (this.lineEnd == 0) this.lineEnd=2147483647;
if (this.aatoken == null ) return true;
if (!this.tQuiet) {
this.tQuiet=(this.vwr.getInt$I(536870922) < 0);
}var allowJSInterrupt=(this.isJS && !fromFunc && this.useThreads$() && this.vwr.getInt$I(536870922) >= 0  );
p$1.commandLoop$Z.apply(this, [allowJSInterrupt]);
if (this.chk) return true;
var script=this.vwr.getInsertedCommand$();
if (!"".equals$O(script)) this.runScriptBuffer$S$javajs_util_SB$Z(script, null, false);
 else if (isSpt && this.debugScript && this.vwr.getBoolean$I(603979879)  ) this.vwr.getChimeMessenger$().update$S(null);
if (!this.mustResumeEval && !allowJSInterrupt  || fromFunc ) return true;
if (!isTry && this.mustResumeEval  || this.thisContext == null  ) {
var done=(this.thisContext == null );
this.resumeEval$O(this.thisContext);
this.mustResumeEval=false;
return done;
}return true;
});

Clazz.newMeth(C$, 'commandLoop$Z', function (allowJSInterrupt) {
var lastCommand="";
var isForCheck=false;
var vProcess=null;
var lastTime=System.currentTimeMillis$();
if (this.debugScript && this.debugHigh && !this.chk  ) {
for (var i=this.pc; i < this.aatoken.length && i < this.pcEnd ; i++) {
$I$(6).info$S("Command " + i);
if (this.debugScript) p$1.logDebugScript$org_jmol_script_TA$I.apply(this, [this.aatoken[i], 0]);
}
$I$(6).info$S("-----");
}for (; this.pc < this.aatoken.length && this.pc < this.pcEnd ; this.pc++) {
if (allowJSInterrupt) {
if (!this.executionPaused && System.currentTimeMillis$() - lastTime > 1000 ) {
this.pc--;
p$1.doDelay$I.apply(this, [-1]);
}lastTime=System.currentTimeMillis$();
}if (!this.chk && !p$1.checkContinue.apply(this, []) ) break;
if (this.pc >= this.lineNumbers.length || this.lineNumbers[this.pc] > this.lineEnd ) break;
if (this.debugHigh) {
var timeBegin=0;
timeBegin=System.currentTimeMillis$();
this.vwr.scriptStatus$S("Eval.dispatchCommands():" + timeBegin);
this.vwr.scriptStatus$S(this.script);
}if (this.debugScript && !this.chk ) $I$(6,"info$S",["Command " + this.pc + (this.thisContext == null  ? "" : " path=" + this.thisContext.contextPath) ]);
this.theToken=(this.aatoken[this.pc].length == 0 ? null : this.aatoken[this.pc][0]);
if (!this.historyDisabled && !this.chk && this.scriptLevel <= C$.commandHistoryLevelMax   && !this.tQuiet ) {
var cmdLine=p$1.getCommand$I$Z$Z.apply(this, [this.pc, true, true]);
if (this.theToken != null  && cmdLine.length$() > 0  && !cmdLine.equals$O(lastCommand)  && (this.theToken.tok == 134320141 || this.theToken.tok == 102436  || !$I$(9).tokAttr$I$I(this.theToken.tok, 102400) ) ) this.vwr.addCommand$S(lastCommand=cmdLine);
}if (!this.chk && allowJSInterrupt ) {
var script=this.vwr.getInsertedCommand$();
if (!"".equals$O(script)) this.runScript$S(script);
}if (!this.setStatement$org_jmol_script_TA$I(this.aatoken[this.pc], 1)) {
$I$(6,"info$S",[p$1.getCommand$I$Z$Z.apply(this, [this.pc, true, false]) + " -- STATEMENT CONTAINING @{} SKIPPED"]);
continue;
}this.thisCommand=p$1.getCommand$I$Z$Z.apply(this, [this.pc, false, true]);
if (this.debugHigh || this.debugScript ) $I$(6).info$S(this.thisCommand);
var nextCommand=p$1.getCommand$I$Z$Z.apply(this, [this.pc + 1, false, true]);
this.fullCommand=this.thisCommand + (nextCommand.startsWith$S("#") ? nextCommand : "");
this.getToken$I(0);
this.iToken=0;
if ((this.listCommands || !this.chk && this.scriptLevel > 0  ) && !this.isJS ) {
var milliSecDelay=this.vwr.getInt$I(536870922);
if (this.listCommands || milliSecDelay > 0 ) {
if (milliSecDelay > 0) this.delayScript$I(-milliSecDelay);
this.vwr.scriptEcho$S("$[" + this.scriptLevel + "." + this.lineNumbers[this.pc] + "." + (this.pc + 1) + "] " + this.thisCommand );
}}if (vProcess != null  && (this.theTok != 102409 || this.slen < 2  || this.st[1].tok != 102439 ) ) {
vProcess.addLast$O(this.st);
continue;
}if (this.chk) {
if (this.isCmdLine_c_or_C_Option) $I$(6).info$S(this.thisCommand);
if (this.slen == 1 && this.st[0].tok != 134320141  && this.st[0].tok != 102436 ) continue;
} else {
if (this.debugScript) p$1.logDebugScript$org_jmol_script_TA$I.apply(this, [this.st, 0]);
if (this.scriptLevel == 0 && this.vwr.g.logCommands ) this.vwr.log$S(this.thisCommand);
if (this.debugHigh && this.theToken != null  ) $I$(6,"debug$S",[this.theToken.toString()]);
}if (this.theToken == null ) continue;
var tok=this.theToken.tok;
switch (tok) {
case 36867:
p$1.cmdSet.apply(this, []);
continue;
case 134320648:
isForCheck=p$1.cmdFor$I$Z.apply(this, [tok, isForCheck]);
continue;
case 102439:
p$1.pushContext$org_jmol_script_ContextToken$S.apply(this, [this.theToken, "PROCESS"]);
if (this.parallelProcessor != null ) vProcess=Clazz.new_($I$(23,1));
continue;
default:
if ($I$(9).tokAttr$I$I(tok, 102400)) {
isForCheck=p$1.cmdFlow$I$Z$javajs_util_Lst.apply(this, [tok, isForCheck, vProcess]);
if (this.theTok == 102439) vProcess=null;
continue;
}p$1.processCommand$I.apply(this, [tok]);
this.setCursorWait$Z(false);
if (this.executionStepping) {
this.executionPaused=(p$1.isCommandDisplayable$I.apply(this, [this.pc + 1]));
}}
}
}, p$1);

Clazz.newMeth(C$, 'processCommand$I', function (tok) {
if ($I$(9).tokAttr$I$I(this.theToken.tok, 135168)) {
p$1.processShapeCommand$I.apply(this, [tok]);
return;
}switch (tok) {
case 0:
if (!this.chk && this.vwr.getBoolean$I(603979879) ) this.vwr.getChimeMessenger$().showHash$javajs_util_SB$S(this.outputBuffer, this.theToken.value);
break;
case 1275335685:
p$1.pushContext$org_jmol_script_ContextToken$S.apply(this, [this.theToken, "PUSH"]);
break;
case 1275334681:
this.popContext$Z$Z(true, false);
break;
case 268435490:
break;
case 4097:
p$1.cmdAnimation.apply(this, []);
break;
case 1610616835:
p$1.cmdBackground$I.apply(this, [1]);
break;
case 4100:
p$1.cmdBind.apply(this, []);
break;
case 4101:
p$1.cmdBondorder.apply(this, []);
break;
case 20488:
p$1.cmdCD.apply(this, []);
break;
case 12289:
p$1.cmdCenter$I.apply(this, [1]);
break;
case 1765808134:
p$1.cmdColor.apply(this, []);
break;
case 12290:
p$1.cmdDefine.apply(this, []);
break;
case 528397:
p$1.cmdDelay.apply(this, []);
break;
case 12291:
p$1.cmdDelete.apply(this, []);
break;
case 554176526:
p$1.cmdSlab$Z.apply(this, [true]);
break;
case 1610625028:
p$1.cmdDisplay$Z.apply(this, [true]);
break;
case 266255:
case 266281:
if (this.chk) break;
if (this.pc > 0 && this.theToken.tok == 266255  && !this.vwr.autoExit ) {
this.vwr.clearScriptQueue$();
}this.executionStopped=(this.pc > 0 || !this.vwr.g.useScriptQueue );
break;
case 266256:
if (this.chk) return;
if (this.outputBuffer != null ) $I$(6,"warn$S",[this.outputBuffer.toString()]);
this.vwr.exitJmol$();
break;
case 1228935687:
p$1.cmdFile.apply(this, []);
break;
case 12293:
p$1.cmdFixed.apply(this, []);
break;
case 4114:
p$1.cmdFont$I$F.apply(this, [-1, 0]);
break;
case 4115:
case 1094717454:
p$1.cmdModel$I.apply(this, [1]);
break;
case 1073741824:
p$1.cmdFunc.apply(this, []);
break;
case 1275072526:
p$1.cmdGetProperty.apply(this, []);
break;
case 20500:
if (this.vwr.headless) break;
p$1.cmdGoto$Z.apply(this, [true]);
break;
case 20482:
p$1.cmdHelp.apply(this, []);
break;
case 12294:
p$1.cmdDisplay$Z.apply(this, [false]);
break;
case 1613238294:
p$1.cmdHbond.apply(this, []);
break;
case 1610616855:
p$1.cmdHistory$I.apply(this, [1]);
break;
case 544771:
p$1.cmdHover.apply(this, []);
break;
case 266265:
if (!this.chk) this.vwr.initialize$Z$Z(!this.isStateScript, false);
break;
case 134238732:
this.cmdScript$I$S$S(134238732, null, null);
break;
case 134222849:
this.cmdLoad$();
break;
case 36869:
p$1.cmdLog.apply(this, []);
break;
case 528411:
p$1.cmdLoop.apply(this, []);
break;
case 20485:
p$1.cmdMessage.apply(this, []);
break;
case 4128:
p$1.cmdMove.apply(this, []);
break;
case 4129:
p$1.cmdMoveto.apply(this, []);
break;
case 20487:
p$1.cmdPause.apply(this, []);
break;
case 36865:
p$1.cmdPrint.apply(this, []);
break;
case 134256131:
p$1.cmdPrompt.apply(this, []);
break;
case 4139:
case 4165:
p$1.cmdUndoRedoMove.apply(this, []);
break;
case 266284:
this.refresh$Z(true);
break;
case 4141:
p$1.cmdReset.apply(this, []);
break;
case 12295:
p$1.cmdRestrict.apply(this, []);
break;
case 4143:
if (this.slen == 0) {
if (!this.chk) this.resumePausedExecution$();
break;
}case 4142:
p$1.cmdRestore.apply(this, []);
break;
case 36866:
p$1.cmdReturn$org_jmol_script_SV.apply(this, [null]);
break;
case 528432:
this.cmdRotate$Z$Z(false, false);
break;
case 4145:
this.cmdRotate$Z$Z(false, true);
break;
case 4146:
p$1.cmdSave.apply(this, []);
break;
case 134222850:
this.cmdScript$I$S$S(134222850, null, null);
break;
case 1275082245:
p$1.cmdSelect$I.apply(this, [1]);
break;
case 1611141171:
p$1.cmdSelectionHalos$I.apply(this, [1]);
break;
case 554176565:
p$1.cmdSlab$Z.apply(this, [false]);
break;
case 1611141175:
this.cmdRotate$Z$Z(true, false);
break;
case 1611141176:
p$1.cmdSsbond.apply(this, []);
break;
case 266298:
if (p$1.cmdPause.apply(this, [])) this.stepPausedExecution$();
break;
case 1639976963:
p$1.cmdStructure.apply(this, []);
break;
case 2109448:
p$1.cmdSubset.apply(this, []);
break;
case 4156:
p$1.cmdSync.apply(this, []);
break;
case 36870:
p$1.cmdThrow.apply(this, []);
break;
case 536875070:
p$1.cmdTimeout$I.apply(this, [1]);
break;
case 4160:
p$1.cmdTranslate$Z.apply(this, [false]);
break;
case 4162:
p$1.cmdTranslate$Z.apply(this, [true]);
break;
case 4164:
p$1.cmdUnbind.apply(this, []);
break;
case 36868:
break;
case 4166:
p$1.cmdVibration.apply(this, []);
break;
case 12297:
p$1.cmdZap$Z.apply(this, [true]);
break;
case 4168:
p$1.cmdZoom$Z.apply(this, [false]);
break;
case 4170:
p$1.cmdZoom$Z.apply(this, [true]);
break;
default:
p$1.checkExtension$I.apply(this, [this.theToken.tok]);
}
}, p$1);

Clazz.newMeth(C$, 'checkExtension$I', function (tok) {
switch (tok) {
case 4098:
case 134221829:
case 4102:
case 4103:
case 4105:
case 134221831:
case 1094717448:
case 4106:
case 528395:
case 1613238294:
case 4120:
case 4122:
case 528443:
case 4124:
case 4125:
case 4126:
case 603983903:
case 1275072532:
case 4130:
case 134221834:
case 4131:
case 4133:
case 134221850:
case 4138:
case 134222350:
case 134221856:
this.getCmdExt$().dispatch$I$Z$org_jmol_script_TA(tok, false, this.st);
break;
default:
System.out.println$S($I$(9).nameOf$I(tok) + " is not a command");
this.error$I(47);
}
}, p$1);

Clazz.newMeth(C$, 'processShapeCommand$I', function (tok) {
var iShape=0;
switch (tok) {
case 1611272194:
iShape=34;
break;
case 1114249217:
iShape=9;
break;
case 1678381065:
iShape=32;
break;
case 1112152066:
iShape=11;
break;
case 135174:
iShape=23;
break;
case 134353926:
iShape=25;
break;
case 135175:
iShape=17;
break;
case 1112150019:
iShape=16;
break;
case 135176:
iShape=22;
break;
case 537022465:
iShape=31;
break;
case 1112150020:
iShape=20;
break;
case 1611272202:
iShape=36;
break;
case 1112150021:
iShape=19;
break;
case 1112152070:
iShape=8;
break;
case 135180:
iShape=24;
break;
case 1825200146:
iShape=5;
break;
case 135182:
iShape=26;
break;
case 537006096:
case 1745489939:
iShape=6;
break;
case 1112152071:
iShape=13;
break;
case 1073877010:
iShape=27;
break;
case 1073877011:
iShape=28;
break;
case 135190:
iShape=30;
break;
case 135188:
iShape=29;
break;
case 1275203608:
iShape=21;
break;
case 1112152073:
iShape=14;
break;
case 1112152074:
iShape=15;
break;
case 1112152075:
iShape=0;
break;
case 1112152076:
iShape=7;
break;
case 1649022989:
iShape=12;
break;
case 659482:
iShape=4;
break;
case 1112152078:
iShape=10;
break;
case 1814695966:
iShape=33;
break;
case 135198:
iShape=18;
break;
case 659488:
iShape=1;
break;
default:
this.error$I(47);
}
if (this.sm.getShape$I(iShape) == null  && this.slen == 2 ) {
switch (this.st[1].tok) {
case 1073742334:
case 12291:
case 1073742333:
return;
}
}switch (tok) {
case 1114249217:
case 1112152066:
case 1112152071:
case 1112152073:
case 1112152074:
case 1649022989:
case 1112152078:
p$1.setSizeBio$I.apply(this, [iShape]);
return;
case 1112150019:
case 1112150021:
p$1.cmdDots$I.apply(this, [iShape]);
return;
case 1112152070:
case 1112152075:
case 1112152076:
p$1.setSize$I$F.apply(this, [iShape, (tok == 1112152070 ? -1000.0 : 1.0)]);
return;
case 1825200146:
p$1.cmdLabel$I$javajs_util_BS.apply(this, [1, null]);
return;
case 135198:
p$1.cmdVector.apply(this, []);
return;
case 659488:
p$1.cmdWireframe.apply(this, []);
return;
}
switch (tok) {
case 1611272194:
p$1.cmdAxes$I.apply(this, [1]);
return;
case 1678381065:
p$1.cmdBoundbox$I.apply(this, [1]);
return;
case 537022465:
p$1.cmdEcho$I.apply(this, [1]);
return;
case 1611272202:
p$1.cmdFrank$I.apply(this, [1]);
return;
case 1814695966:
p$1.cmdUnitcell$I.apply(this, [1]);
return;
case 1112150020:
case 537006096:
case 1745489939:
case 1275203608:
case 659482:
this.getCmdExt$().dispatch$I$Z$org_jmol_script_TA(iShape, false, this.st);
return;
case 135174:
case 134353926:
case 135175:
case 135176:
case 135180:
case 135182:
case 1073877010:
case 1073877011:
case 135190:
case 135188:
this.getIsoExt$().dispatch$I$Z$org_jmol_script_TA(iShape, false, this.st);
return;
}
}, p$1);

Clazz.newMeth(C$, 'cmdAnimation', function () {
var animate=false;
switch (this.getToken$I(1).tok) {
case 1073742335:
animate=true;
case 1073742334:
if (!this.chk) this.vwr.setAnimationOn$Z(animate);
break;
case 1073742029:
var morphCount=(this.floatParameter$I(2)|0);
if (!this.chk) this.vwr.am.setMorphCount$I(Math.abs(morphCount));
break;
case 1610625028:
this.iToken=2;
var bs=(this.tokAt$I(2) == 1073742327 ? null : this.atomExpressionAt$I(2));
this.checkLength$I(this.iToken + 1);
if (!this.chk) this.vwr.setAnimDisplay$javajs_util_BS(bs);
return;
case 4115:
if (this.isArrayParameter$I(2)) p$1.setFrameSet$I.apply(this, [2]);
 else p$1.cmdModel$I.apply(this, [2]);
break;
case 1073742024:
var startDelay=1;
var endDelay=1;
if (this.slen > 5) this.bad$();
var animationMode=$I$(9,"getTokFromName$S",[this.paramAsStr$I(2)]);
switch (animationMode) {
case 1073742070:
startDelay=endDelay=0;
break;
case 528411:
case 1073742082:
break;
default:
this.invArg$();
}
if (this.slen >= 4) {
startDelay=endDelay=this.floatParameter$I(3);
if (this.slen == 5) endDelay=this.floatParameter$I(4);
}if (!this.chk) this.vwr.am.setAnimationReplayMode$I$F$F(animationMode, startDelay, endDelay);
break;
case 1073741918:
var i=2;
var direction=0;
switch (this.tokAt$I(i)) {
case 268435616:
direction=-this.intParameter$I(++i);
break;
case 268435617:
direction=this.intParameter$I(++i);
break;
case 2:
direction=this.intParameter$I(i);
break;
default:
this.invArg$();
}
this.checkLength$I(++i);
if (direction != 1 && direction != -1 ) this.errorStr2$I$S$S(35, "-1", "1");
if (!this.chk) this.vwr.am.setAnimationDirection$I(direction);
break;
case 1073741950:
this.setIntProperty$S$I("animationFps", this.intParameter$I(this.checkLast$I(2)));
break;
default:
p$1.frameControl$I.apply(this, [1]);
}
}, p$1);

Clazz.newMeth(C$, 'setFrameSet$I', function (i) {
var frames=this.expandFloatArray$FA$I(this.floatParameterSet$I$I$I(i, 0, 2147483647), 1);
this.checkLength$I(this.iToken + 1);
if (this.chk) return;
var movie=Clazz.new_($I$(12,1));
if (frames.length > 0) movie.put$O$O("frames", frames);
movie.put$O$O("currentFrame", Integer.valueOf$I(0));
this.vwr.am.setMovie$java_util_Map(movie);
}, p$1);

Clazz.newMeth(C$, 'cmdAxes$I', function (index) {
var tickInfo=this.tickParamAsStr$I$Z$Z$Z(index, true, true, false);
index=this.iToken + 1;
var tok=this.tokAt$I(index);
var type=this.optParameterAsString$I(index).toLowerCase$();
if (this.slen == index + 1 && $I$(7).isOneOf$S$S(type, ";window;unitcell;molecular;") ) {
this.setBooleanProperty$S$Z("axes" + type, true);
return;
}switch (tok) {
case 1073742066:
this.setFloatProperty$S$F("axisOffset", this.floatParameter$I(++index));
this.checkLast$I(this.iToken);
return;
case 12289:
this.setShapeProperty$I$S$O(34, "origin", this.centerParameter$I$OA(index + 1, null));
this.checkLast$I(this.iToken);
return;
case 1140850696:
var s=this.stringParameter$I(index + 1);
if (!$I$(7).isOneOf$S$S(s, ";a;b;c;ab;ac;bc;abc;")) s=null;
this.setShapeProperty$I$S$O(34, "type", s);
this.checkLast$I(this.iToken);
return;
case 1073742138:
this.setFloatProperty$S$F("axesScale", this.floatParameter$I(this.checkLast$I(++index)));
return;
case 1825200146:
switch (tok=this.tokAt$I(index + 1)) {
case 1073742334:
case 1073742335:
this.checkLength$I(index + 2);
this.setShapeProperty$I$S$O(34, "labels" + (tok == 1073742335 ? "On" : "Off"), null);
return;
}
var sOrigin=null;
switch (this.slen - index) {
case 7:
this.setShapeProperty$I$S$O(34, "labels", Clazz.array(String, -1, [this.paramAsStr$I(++index), this.paramAsStr$I(++index), this.paramAsStr$I(++index), this.paramAsStr$I(++index), this.paramAsStr$I(++index), this.paramAsStr$I(++index)]));
break;
case 5:
sOrigin=this.paramAsStr$I(index + 4);
case 4:
this.setShapeProperty$I$S$O(34, "labels", Clazz.array(String, -1, [this.paramAsStr$I(++index), this.paramAsStr$I(++index), this.paramAsStr$I(++index), sOrigin]));
break;
default:
this.bad$();
}
return;
}
if (type.equals$O("position")) {
var xyp;
if (this.tokAt$I(++index) == 1073742334) {
xyp=Clazz.new_($I$(24,1));
} else {
xyp=this.xypParameter$I(index);
if (xyp == null ) this.invArg$();
index=this.iToken;
}this.setShapeProperty$I$S$O(34, "position", xyp);
return;
}var mad10=this.getSetAxesTypeMad10$I(index);
if (this.chk || mad10 == 2147483647 ) return;
this.setObjectMad10$I$S$I(34, "axes", mad10);
if (tickInfo != null ) this.setShapeProperty$I$S$O(34, "tickInfo", tickInfo);
}, p$1);

Clazz.newMeth(C$, 'cmdBackground$I', function (i) {
this.getToken$I(i);
var argb;
if (this.theTok == 4120) {
var o=null;
switch (this.tokAt$I(++i)) {
case 15:
case 6:
o=this.getToken$I(i).value;
break;
default:
var file=this.paramAsStr$I(this.checkLast$I(i));
if (this.chk) return;
if (file.equalsIgnoreCase$S("none") || file.length$() == 0 ) {
this.vwr.setBackgroundImage$S$O(null, null);
return;
}o=(file.startsWith$S(";base64,") ? Clazz.new_([$I$(26).decodeBase64$S(file)],$I$(25,1).c$$BA) : file);
}
if (this.vwr.fm.loadImage$O$S$Z(o, null, !this.useThreads$())) throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "backgroundImage", 1]);
return;
}if (this.theTok == 1073742333 || this.isColorParam$I(i) ) {
argb=this.getArgbParamLast$I$Z(i, true);
if (this.chk) return;
p$1.setObjectArgb$S$I.apply(this, ["background", argb]);
this.vwr.setBackgroundImage$S$O(null, null);
return;
}var iShape=p$1.getShapeType$I.apply(this, [this.theTok]);
p$1.colorShape$I$I$Z.apply(this, [iShape, i + 1, true]);
}, p$1);

Clazz.newMeth(C$, 'cmdBind', function () {
var mouseAction=this.stringParameter$I(1);
var name=this.paramAsStr$I(2);
this.checkLength$I(3);
if (!this.chk) this.vwr.bindAction$S$S(mouseAction, name);
}, p$1);

Clazz.newMeth(C$, 'cmdBondorder', function () {
this.checkLength$I(-3);
var order=0;
switch (this.getToken$I(1).tok) {
case 2:
case 3:
if ((order=$I$(27,"getBondOrderFromFloat$F",[this.floatParameter$I(1)])) == 131071) this.invArg$();
break;
default:
if ((order=$I$(28,"getBondOrderFromString$S",[this.paramAsStr$I(1)])) == 131071) this.invArg$();
if (order == 33 && this.tokAt$I(2) == 3 ) {
order=$I$(28).getPartialBondOrderFromFloatEncodedInt$I(this.st[2].intValue);
}}
this.setShapeProperty$I$S$O(1, "bondOrder", Integer.valueOf$I(order));
}, p$1);

Clazz.newMeth(C$, 'cmdBoundbox$I', function (index) {
var tickInfo=this.tickParamAsStr$I$Z$Z$Z(index, false, true, false);
index=this.iToken + 1;
var scale=1;
if (this.tokAt$I(index) == 1073742138) {
scale=this.floatParameter$I(++index);
if (!this.chk && scale == 0  ) this.invArg$();
index++;
if (index == this.slen) {
if (!this.chk) this.vwr.ms.setBoundBox$javajs_util_T3$javajs_util_T3$Z$F(null, null, true, scale);
return;
}}var byCorner=(this.tokAt$I(index) == 1073741902);
if (byCorner) index++;
if (this.isCenterParameter$I(index)) {
var ret=Clazz.array(java.lang.Object, [1]);
var index0=index;
var pt1=this.centerParameter$I$OA(index, ret);
index=this.iToken + 1;
if (byCorner || this.isCenterParameter$I(index) ) {
var pt2=(byCorner ? this.centerParameter$I$OA(index, ret) : this.getPoint3f$I$Z$Z(index, true, true));
index=this.iToken + 1;
if (!this.chk) this.vwr.ms.setBoundBox$javajs_util_T3$javajs_util_T3$Z$F(pt1, pt2, byCorner, scale);
} else if (ret[0] != null  && Clazz.instanceOf(ret[0], "javajs.util.BS") ) {
if (!this.chk) this.vwr.calcBoundBoxDimensions$javajs_util_BS$F(ret[0], scale);
} else if (ret[0] == null  && this.tokAt$I(index0) == 1073742330 ) {
if (this.chk) return;
var bbox=p$1.getObjectBoundingBox$S.apply(this, [this.objectNameParameter$I(++index0)]);
if (bbox == null ) this.invArg$();
this.vwr.ms.setBoundBox$javajs_util_T3$javajs_util_T3$Z$F(bbox[0], bbox[1], true, scale);
index=this.iToken + 1;
} else {
this.invArg$();
}if (index == this.slen) return;
}var mad10=this.getSetAxesTypeMad10$I(index);
if (this.chk || mad10 == 2147483647 ) return;
if (tickInfo != null ) this.setShapeProperty$I$S$O(32, "tickInfo", tickInfo);
this.setObjectMad10$I$S$I(32, "boundbox", mad10);
}, p$1);

Clazz.newMeth(C$, 'cmdCD', function () {
if (this.chk) return;
var dir=(this.slen == 1 ? null : this.paramAsStr$I(1));
this.showString$S(this.vwr.cd$S(dir));
}, p$1);

Clazz.newMeth(C$, 'cmdCenter$I', function (i) {
if (this.slen == 1) {
this.vwr.setNewRotationCenter$javajs_util_P3(null);
return;
}var center=this.centerParameter$I$OA(i, null);
if (center == null ) this.invArg$();
if (!this.chk) this.vwr.setNewRotationCenter$javajs_util_P3(center);
}, p$1);

Clazz.newMeth(C$, 'cmdColor', function () {
var i=1;
var strColor=(this.tokAt$I(1) == 4 ? this.stringParameter$I(1) : null);
if (this.isColorParam$I(1)) {
this.theTok=1140850689;
} else {
var argb=0;
i=2;
var tok=this.getToken$I(1).tok;
if (tok == 4) {
tok=$I$(9).getTokFromName$S(strColor);
if (tok == 0) tok=4;
}switch (tok) {
case 1073742330:
this.setObjectProperty$();
return;
case 1086324739:
case 2097154:
case 2097166:
case 1086326788:
case 1073741946:
case 1631586315:
case 1086324742:
case 1113589786:
case 1086324746:
case 1073741991:
case 1094713360:
case 1094713361:
case 1073742333:
case 1073742074:
case 1111492619:
case 1094713362:
case 1715472409:
case 1073742116:
case 1073742110:
case 1112152075:
case 1073742144:
case 1111490574:
case 1639976963:
case 1111490575:
case 1111492620:
case 603979967:
case 1073742186:
case 1648363544:
this.theTok=1140850689;
i=1;
break;
case 4:
i=2;
if (this.isArrayParameter$I(i)) {
strColor=strColor += "=" + $I$(8,"sValue$org_jmol_script_T",[$I$(8,"getVariableAS$SA",[this.stringParameterSet$I(i)])]).replace$C$C("\n", " ");
i=this.iToken + 1;
}var isTranslucent=(this.tokAt$I(i) == 603979967);
if (!this.chk) this.vwr.setPropertyColorScheme$S$Z$Z(strColor, isTranslucent, true);
if (isTranslucent) ++i;
if (this.tokAt$I(i) == 1073742114 || this.tokAt$I(i) == 1073741826 ) {
var min=this.floatParameter$I(++i);
var max=this.floatParameter$I(++i);
if (!this.chk) this.vwr.cm.setPropertyColorRange$F$F(min, max);
}return;
case 1073742114:
case 1073741826:
var min=this.floatParameter$I(2);
var max=this.floatParameter$I(this.checkLast$I(3));
if (!this.chk) this.vwr.cm.setPropertyColorRange$F$F(min, max);
return;
case 1610616835:
argb=this.getArgbParamLast$I$Z(2, true);
if (!this.chk) p$1.setObjectArgb$S$I.apply(this, ["background", argb]);
return;
case 12290:
case 10:
case 1073742325:
i=-1;
this.theTok=1140850689;
break;
case 1073742134:
argb=this.getArgbParamLast$I$Z(2, false);
if (!this.chk) this.vwr.cm.setRubberbandArgb$I(argb);
return;
case 536870920:
case 1611141171:
i=2;
if (this.tokAt$I(2) == 1073742074) i++;
argb=this.getArgbParamLast$I$Z(i, true);
if (this.chk) return;
this.sm.loadShape$I(8);
this.setShapeProperty$I$S$O(8, (tok == 1611141171 ? "argbSelection" : "argbHighlight"), Integer.valueOf$I(argb));
return;
case 1611272194:
case 1678381065:
case 1814695966:
case 1073741824:
case 1612709900:
var str=this.paramAsStr$I(1);
if (this.checkToken$I(2)) {
argb=this.getToken$I(2).tok;
switch (argb) {
case 1073742333:
argb=1073741991;
break;
case 1073741991:
case 1073742116:
case 1073742110:
break;
default:
argb=this.getArgbParam$I(2);
}
}if (argb == 0) this.error$I(9);
this.checkLast$I(this.iToken);
if (str.equalsIgnoreCase$S("axes") || $I$(29).getObjectIdFromName$S(str) >= 0 ) {
p$1.setObjectArgb$S$I.apply(this, [str, argb]);
return;
}if (p$1.setElementColor$S$I.apply(this, [str, argb])) return;
this.invArg$();
break;
case 135180:
case 134353926:
this.setShapeProperty$I$S$O($I$(13).shapeTokenIndex$I(tok), "thisID", "+PREVIOUS_MESH+");
break;
}
}p$1.colorShape$I$I$Z.apply(this, [p$1.getShapeType$I.apply(this, [this.theTok]), i, false]);
}, p$1);

Clazz.newMeth(C$, 'cmdDefine', function () {
if (this.slen < 3 || !(Clazz.instanceOf(this.getToken$I(1).value, "java.lang.String")) ) this.invArg$();
var setName=(this.getToken$I(1).value).toLowerCase$();
if ($I$(7).parseInt$S(setName) != -2147483648) this.invArg$();
if (this.chk) return;
var isSite=setName.startsWith$S("site_");
var isDynamic=(setName.indexOf$S("dynamic_") == 0);
if (isDynamic || isSite ) {
var code=Clazz.array($I$(9), [this.slen]);
for (var i=this.slen; --i >= 0; ) code[i]=this.st[i];

this.vwr.definedAtomSets.put$O$O("!" + (isSite ? setName : setName.substring$I(8)), code);
} else {
var bs=this.atomExpressionAt$I(2);
this.vwr.definedAtomSets.put$O$O(setName, bs);
if (!this.chk) this.vwr.g.setUserVariable$S$org_jmol_script_SV("@" + setName, $I$(8).newV$I$O(10, bs));
}}, p$1);

Clazz.newMeth(C$, 'cmdDelay', function () {
var millis=0;
switch (this.getToken$I(1).tok) {
case 1073742335:
millis=1;
break;
case 2:
millis=this.intParameter$I(1) * 1000;
break;
case 3:
millis=((this.floatParameter$I(1) * 1000)|0);
break;
default:
this.error$I(34);
}
this.refresh$Z(false);
p$1.doDelay$I.apply(this, [Math.abs(millis)]);
}, p$1);

Clazz.newMeth(C$, 'cmdDelete', function () {
if (this.tokAt$I(1) == 1073742330) {
if (this.slen == 4 && this.optParameterAsString$I(2).equals$O("saved")  && this.slen == 4 ) {
this.vwr.stm.deleteSaved$S(this.optParameterAsString$I(3));
if (this.doReport$()) this.report$S$Z($I$(30,"o$S$O",[$I$(30).$$S("show saved: {0}"), this.vwr.stm.listSavedStates$()]), false);
return;
}this.setObjectProperty$();
return;
}var bs=(this.slen == 1 ? null : this.atomExpression$org_jmol_script_TA$I$I$Z$Z$OA$Z(this.st, 1, 0, true, false, null, false));
if (this.chk) return;
if (bs == null ) bs=this.vwr.getAllAtoms$();
var nDeleted=this.vwr.deleteAtoms$javajs_util_BS$Z(bs, false);
if (this.doReport$()) this.report$S$Z($I$(30,"i$S$I",[$I$(30).$$S("{0} atoms deleted"), nDeleted]), false);
}, p$1);

Clazz.newMeth(C$, 'cmdDisplay$Z', function (isDisplay) {
var bs=null;
var addRemove=0;
var i=1;
var tok;
switch (tok=this.tokAt$I(1)) {
case 1275069441:
case 1073742119:
addRemove=tok;
tok=this.tokAt$I(++i);
break;
}
var isGroup=(tok == 1086324742);
if (isGroup) tok=this.tokAt$I(++i);
switch (tok) {
case 1073742330:
this.setObjectProperty$();
return;
case 0:
break;
default:
if (this.slen == 4 && this.tokAt$I(2) == 1677721602 ) bs=$I$(31,"newBS$javajs_util_BS$IA",[$I$(15).newBitSet2$I$I(0, this.vwr.ms.bondCount), null]);
 else bs=this.atomExpressionAt$I(i);
}
if (this.chk) return;
if (Clazz.instanceOf(bs, "org.jmol.modelset.BondSet")) {
this.vwr.ms.displayBonds$org_jmol_modelset_BondSet$Z(bs, isDisplay);
return;
}this.vwr.displayAtoms$javajs_util_BS$Z$Z$I$Z(bs, isDisplay, isGroup, addRemove, this.tQuiet);
}, p$1);

Clazz.newMeth(C$, 'cmdDots$I', function (iShape) {
if (!this.chk) this.sm.loadShape$I(iShape);
this.setShapeProperty$I$S$O(iShape, "init", null);
var value=NaN;
var type=$I$(32).ABSOLUTE;
var ipt=1;
while (true){
switch (this.getToken$I(ipt).tok) {
case 1073742072:
this.restrictSelected$Z$Z(false, false);
case 1073742335:
value=1;
type=$I$(32).FACTOR;
break;
case 1073742334:
value=0;
break;
case 1073741976:
this.setShapeProperty$I$S$O(iShape, "ignore", this.atomExpressionAt$I(ipt + 1));
ipt=this.iToken + 1;
continue;
case 2:
var dotsParam=this.intParameter$I(ipt);
if (this.tokAt$I(ipt + 1) == 1665140738) {
ipt++;
this.setShapeProperty$I$S$O(iShape, "atom", Integer.valueOf$I(dotsParam));
this.setShapeProperty$I$S$O(iShape, "radius", Float.valueOf$F(this.floatParameter$I(++ipt)));
if (this.tokAt$I(++ipt) == 1765808134) {
this.setShapeProperty$I$S$O(iShape, "colorRGB", Integer.valueOf$I(this.getArgbParam$I(++ipt)));
ipt++;
}if (this.getToken$I(ipt).tok != 10) this.invArg$();
this.setShapeProperty$I$S$O(iShape, "dots", this.st[ipt].value);
return;
}break;
}
break;
}
var rd=(Float.isNaN$F(value) ? this.encodeRadiusParameter$I$Z$Z(ipt, false, true) : Clazz.new_([null, value, type, $I$(34).AUTO],$I$(33,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW));
if (rd == null ) return;
if (Float.isNaN$F(rd.value)) this.invArg$();
p$1.setShapeSize$I$org_jmol_atomdata_RadiusData.apply(this, [iShape, rd]);
}, p$1);

Clazz.newMeth(C$, 'cmdEcho$I', function (index) {
if (this.chk) return;
var text=this.optParameterAsString$I(index);
var doRefresh=true;
if (this.vwr.ms.getEchoStateActive$()) {
if (text.startsWith$S("\u0001")) {
text=text.substring$I(1);
doRefresh=false;
}if (text != null ) this.setShapeProperty$I$S$O(31, "text", text);
}if (doRefresh && this.vwr.getRefreshing$() ) this.showString$S($I$(35).formatText$org_jmol_api_JmolViewer$S(this.vwr, text));
}, p$1);

Clazz.newMeth(C$, 'cmdFile', function () {
var file=this.intParameter$I(this.checkLast$I(1));
if (this.chk) return;
var modelIndex=this.vwr.ms.getModelNumberIndex$I$Z$Z(file * 1000000 + 1, false, false);
var modelIndex2=-1;
if (modelIndex >= 0) {
modelIndex2=this.vwr.ms.getModelNumberIndex$I$Z$Z((file + 1) * 1000000 + 1, false, false);
if (modelIndex2 < 0) modelIndex2=this.vwr.ms.mc;
modelIndex2--;
}this.vwr.setAnimationOn$Z(false);
this.vwr.am.setAnimationDirection$I(1);
this.vwr.setAnimationRange$I$I(modelIndex, modelIndex2);
this.vwr.setCurrentModelIndex$I(-1);
}, p$1);

Clazz.newMeth(C$, 'cmdFixed', function () {
var bs=(this.slen == 1 ? null : this.atomExpressionAt$I(1));
if (this.chk) return;
this.vwr.setMotionFixedAtoms$javajs_util_BS(bs);
}, p$1);

Clazz.newMeth(C$, 'cmdFor$I$Z', function (tok, isForCheck) {
var cmdToken=this.theToken;
var pt=this.st[0].intValue;
var forVars=cmdToken.forVars;
var pts=Clazz.array(Integer.TYPE, [2]);
var bsOrList=null;
var forVal=null;
var forVar=null;
var inTok=0;
var isOK=true;
var isMinusMinus=false;
var j=0;
var key=null;
if (isForCheck && forVars != null  ) {
tok=1275068432;
forVar=forVars[0];
forVal=forVars[1];
bsOrList=forVars[1].value;
j=++forVal.intValue;
if (forVal.tok == 2) {
isMinusMinus=(j < 0);
var i1=(bsOrList)[0];
var i2=(bsOrList)[1];
isOK=(i1 != i2 && (i2 < i1) == isMinusMinus  );
if (isOK) forVar.intValue=(bsOrList)[0]=i1 + (isMinusMinus ? -1 : 1);
j=-1;
} else if (forVal.tok == 7) {
isOK=(j <= (bsOrList).size$());
if (isOK) forVar.setv$org_jmol_script_SV($I$(8).selectItemVar$org_jmol_script_SV(forVal));
j=-1;
} else {
this.isBondSet=Clazz.instanceOf(bsOrList, "org.jmol.modelset.BondSet");
j=(bsOrList).nextSetBit$I(j);
isOK=(j >= 0);
}} else {
var isLocal=false;
for (var i=1, nSkip=0; i < this.slen && j < 2 ; i++) {
switch (tok=this.tokAt$I(i)) {
case 36868:
isLocal=true;
break;
case 1073742339:
if (nSkip > 0) nSkip--;
 else pts[j++]=i;
break;
case 1275068432:
case 1073741952:
key=this.paramAsStr$I(i - 1);
nSkip-=2;
if (this.isAtomExpression$I(++i)) {
inTok=10;
bsOrList=this.atomExpressionAt$I(i);
if (this.isBondSet) bsOrList=$I$(31).newBS$javajs_util_BS$IA(bsOrList, null);
isOK=((bsOrList).nextSetBit$I(0) >= 0);
} else {
var what=this.parameterExpressionList$I$I$Z(-i, 1, false);
if (what == null  || what.size$() < 1 ) this.invArg$();
var vl=what.get$I(0);
switch (inTok=vl.tok) {
case 10:
bsOrList=vl.value;
isOK=!(bsOrList).isEmpty$();
break;
case 7:
var v=vl.getList$();
j=v.size$();
isOK=(j > 0);
if (isOK && tok == 1073741952 ) {
var i12=Clazz.array(Integer.TYPE, -1, [$I$(8,"iValue$org_jmol_script_T",[v.get$I(0)]), $I$(8,"iValue$org_jmol_script_T",[v.get$I(j - 1)])]);
isMinusMinus=(i12[1] < i12[0]);
bsOrList=i12;
tok=1275068432;
inTok=2;
} else {
bsOrList=v;
}break;
case 6:
var m=vl.getMap$();
var n=m.keySet$().size$();
isOK=(n > 0);
if (isOK) {
var keys=Clazz.array(String, [n]);
m.keySet$().toArray$OA(keys);
$I$(36).sort$OA(keys);
bsOrList=keys;
}break;
default:
this.invArg$();
}
}i=this.iToken;
break;
case 1275082245:
nSkip+=2;
break;
}
}
if (!isForCheck) {
p$1.pushContext$org_jmol_script_ContextToken$S.apply(this, [cmdToken, "FOR"]);
this.thisContext.forVars=forVars;
forVars=null;
}if (key == null ) {
if (isForCheck) {
j=(bsOrList == null  ? pts[1] + 1 : 2);
} else {
j=2;
}if (this.tokAt$I(j) == 36868) j++;
key=this.paramAsStr$I(j);
isMinusMinus=key.equals$O("--") || key.equals$O("++") ;
if (isMinusMinus) key=this.paramAsStr$I(++j);
}if (isOK) if (tok == 1275068432) {
forVar=this.getContextVariableAsVariable$S$Z(key, isLocal);
if (forVar == null  && !isLocal ) forVar=this.vwr.g.getAndSetNewVariable$S$Z(key, false);
if (forVar == null  || forVar.myName == null  ) {
if (key.startsWith$S("_")) this.invArg$();
if (isLocal) this.contextVariables.put$O$O(key.toLowerCase$(), forVar=$I$(8).newI$I(0));
 else forVar=this.vwr.g.getAndSetNewVariable$S$Z(key, true);
}if (inTok == 2) {
forVar.tok=2;
forVar.intValue=(bsOrList)[0];
forVal=$I$(8).newV$I$O(2, bsOrList);
forVal.intValue=(isMinusMinus ? -2147483648 : 0);
j=-1;
} else {
forVal=$I$(8).getVariable$O(bsOrList);
if (inTok == 10) {
j=(bsOrList).nextSetBit$I(0);
forVal.intValue=0;
} else {
forVal.intValue=1;
forVar.setv$org_jmol_script_SV($I$(8).selectItemVar$org_jmol_script_SV(forVal));
j=-1;
}}if (forVars == null ) forVars=cmdToken.forVars=Clazz.array($I$(8), [2]);
forVars[0]=forVar;
forVars[1]=forVal;
} else {
var vtok=this.tokAt$I(j);
if (vtok != 1073742339 && ($I$(9).tokAttr$I$I(vtok, 1073741824) || (forVal=this.getContextVariableAsVariable$S$Z(key, false)) != null  ) ) {
if (!isMinusMinus && this.getToken$I(++j).tok != 268435860 ) this.invArg$();
if (isMinusMinus) j-=2;
this.setVariable$I$I$S$Z(++j, this.slen - 1, key, false);
}isOK=(pts[0] + 1 == pts[1] || this.parameterExpressionBoolean$I$I(pts[0] + 1, pts[1]) );
}}if (isOK && tok == 1275068432  && j >= 0 ) {
forVal.intValue=j;
forVar.tok=10;
if (this.isBondSet) {
forVar.value=Clazz.new_($I$(31,1));
(forVar.value).set$I(j);
} else {
forVar.value=$I$(15).newAndSetBit$I(j);
}}pt++;
if (!isOK) {
cmdToken.forVars=this.thisContext.forVars;
this.popContext$Z$Z(true, false);
}isForCheck=false;
if (!isOK && !this.chk ) this.pc=Math.abs(pt) - 1;
return isForCheck;
}, p$1);

Clazz.newMeth(C$, 'cmdFlow$I$Z$javajs_util_Lst', function (tok, isForCheck, vProcess) {
var ct;
var pt=this.st[0].intValue;
var isDone=(pt < 0 && !this.chk );
var continuing=true;
var ptNext=0;
switch (tok) {
case 134320141:
case 102436:
p$1.cmdFunc.apply(this, []);
return isForCheck;
case 364558:
return isForCheck;
case 102412:
ct=this.theToken;
p$1.pushContext$org_jmol_script_ContextToken$S.apply(this, [ct, "CATCH"]);
if (!isDone && ct.name0 != null  ) this.contextVariables.put$O$O(ct.name0, ct.contextVariables.get$O(ct.name0));
continuing=!isDone;
this.st[0].intValue=-Math.abs(pt);
break;
case 102410:
case 102413:
case 102411:
ptNext=Math.abs(this.aatoken[Math.abs(pt)][0].intValue);
switch (isDone ? 0 : p$1.cmdFlowSwitch$org_jmol_script_ContextToken$I.apply(this, [this.theToken, tok])) {
case 0:
ptNext=-ptNext;
continuing=false;
break;
case -1:
continuing=false;
break;
case 1:
}
this.aatoken[this.pc][0].intValue=Math.abs(pt);
this.theToken=this.aatoken[Math.abs(pt)][0];
if (this.theToken.tok != 102409) this.theToken.intValue=ptNext;
break;
case 134320649:
case 102402:
continuing=(!isDone && this.parameterExpressionBoolean$I$I(1, 0) );
if (this.chk) break;
ptNext=Math.abs(this.aatoken[Math.abs(pt)][0].intValue);
ptNext=(isDone || continuing  ? -ptNext : ptNext);
this.aatoken[Math.abs(pt)][0].intValue=ptNext;
if (tok == 102412) this.aatoken[this.pc][0].intValue=-pt;
break;
case 364547:
this.checkLength$I(1);
if (pt < 0 && !this.chk ) this.pc=-pt - 1;
break;
case 364548:
this.checkLength$I(1);
break;
case 102406:
if (!isForCheck) p$1.pushContext$org_jmol_script_ContextToken$S.apply(this, [this.theToken, "WHILE"]);
isForCheck=false;
if (!this.parameterExpressionBoolean$I$I(1, 0) && !this.chk ) {
this.pc=pt;
this.popContext$Z$Z(true, false);
}break;
case 102407:
if (!this.chk) {
p$1.breakAt$I.apply(this, [pt]);
break;
}if (this.slen == 1) break;
var n=this.intParameter$I(this.checkLast$I(1));
if (this.chk) break;
for (var i=0; i < n; i++) this.popContext$Z$Z(true, false);

break;
case 102408:
isForCheck=true;
if (!this.chk) this.pc=pt - 1;
if (this.slen > 1) this.intParameter$I(this.checkLast$I(1));
break;
case 102409:
switch (this.getToken$I(this.checkLast$I(1)).tok) {
case 364558:
var trycmd=this.getToken$I(1).value;
if (this.chk) return false;
p$1.runFunctionAndRet$org_jmol_api_JmolScriptFunction$S$javajs_util_Lst$org_jmol_script_SV$Z$Z$Z.apply(this, [trycmd, "try", null, null, true, true, true]);
return false;
case 134320141:
case 102436:
this.vwr.addFunction$org_jmol_api_JmolScriptFunction(this.theToken.value);
return isForCheck;
case 102412:
this.popContext$Z$Z(true, false);
break;
case 102439:
p$1.addProcess$javajs_util_Lst$I$I.apply(this, [vProcess, pt, this.pc]);
this.popContext$Z$Z(true, false);
break;
case 102410:
if (pt > 0 && p$1.cmdFlowSwitch$org_jmol_script_ContextToken$I.apply(this, [this.aatoken[pt][0], 0]) == -1 ) {
for (; pt < this.pc; pt++) if ((tok=this.aatoken[pt][0].tok) != 102413 && tok != 102411 ) break;

continuing=(this.pc == pt);
}break;
case 134320649:
break;
case 134320648:
case 102406:
continuing=false;
isForCheck=true;
break;
}
break;
}
if (!continuing && !this.chk ) this.pc=Math.abs(pt) - 1;
return isForCheck;
}, p$1);

Clazz.newMeth(C$, 'cmdFlowSwitch$org_jmol_script_ContextToken$I', function (c, tok) {
if (tok == 102410) c.addName$S("_var");
var $var=c.contextVariables.get$O("_var");
if ($var == null ) return 1;
if (tok == 0) {
c.contextVariables.remove$O("_var");
return -1;
}if (tok == 102413) return -1;
var v=this.parameterExpressionToken$I(1);
if (tok == 102411) {
var isOK=$I$(8).areEqual$org_jmol_script_SV$org_jmol_script_SV($var, v);
if (isOK) c.contextVariables.remove$O("_var");
return isOK ? 1 : -1;
}c.contextVariables.put$O$O("_var", v);
return 1;
}, p$1);

Clazz.newMeth(C$, 'cmdFont$I$F', function (shapeType, fontsize) {
var fontface="SansSerif";
var fontstyle="Plain";
var sizeAdjust=0;
var scaleAngstromsPerPixel=-1;
switch (this.iToken=this.slen) {
case 6:
scaleAngstromsPerPixel=this.floatParameter$I(5);
if (scaleAngstromsPerPixel >= 5 ) scaleAngstromsPerPixel=this.vwr.tm.getZoomSetting$() / scaleAngstromsPerPixel / this.vwr.getScalePixelsPerAngstrom$Z(false) ;
case 5:
if (this.getToken$I(4).tok != 1073741824) this.invArg$();
fontstyle=this.paramAsStr$I(4);
case 4:
if (this.getToken$I(3).tok != 1073741824) this.invArg$();
fontface=this.paramAsStr$I(3);
if (!this.isFloatParameter$I(2)) this.error$I(34);
fontsize=this.floatParameter$I(2);
shapeType=p$1.getShapeType$I.apply(this, [this.getToken$I(1).tok]);
break;
case 3:
if (!this.isFloatParameter$I(2)) this.error$I(34);
if (shapeType == -1) {
shapeType=p$1.getShapeType$I.apply(this, [this.getToken$I(1).tok]);
fontsize=this.floatParameter$I(2);
} else {
if (fontsize >= 1 ) fontsize += (sizeAdjust=5);
}break;
case 2:
default:
if (shapeType == 5) {
fontsize=13;
break;
}this.bad$();
}
if (shapeType == 5) {
if (fontsize < 0  || fontsize >= 1  && (fontsize < 6  || fontsize > 63  )  ) {
this.integerOutOfRange$I$I(6 - sizeAdjust, 63 - sizeAdjust);
return;
}this.setShapeProperty$I$S$O(5, "setDefaults", this.vwr.slm.noneSelected);
}if (this.chk) return;
if ($I$(37).getFontStyleID$S(fontface) >= 0) {
fontstyle=fontface;
fontface="SansSerif";
}var font3d=this.vwr.getFont3D$S$S$F(fontface, fontstyle, fontsize);
this.sm.loadShape$I(shapeType);
this.setShapeProperty$I$S$O(shapeType, "font", font3d);
if (scaleAngstromsPerPixel >= 0 ) this.setShapeProperty$I$S$O(shapeType, "scalereference", Float.valueOf$F(scaleAngstromsPerPixel));
}, p$1);

Clazz.newMeth(C$, 'cmdFrank$I', function (i) {
var b=true;
if (this.slen > i) switch (this.getToken$I(this.checkLast$I(i)).tok) {
case 1073742335:
break;
case 1073742334:
b=false;
break;
default:
this.error$I(5);
}
this.setBooleanProperty$S$Z("frank", b);
}, p$1);

Clazz.newMeth(C$, 'cmdFunc', function () {
if (this.chk && !this.isCmdLine_c_or_C_Option ) return;
var name=(this.getToken$I(0).value).toLowerCase$();
if (this.tokAt$I(1) == 268435860 && this.tokAt$I(2) == 1073742333 ) {
this.vwr.removeFunction$S(name);
return;
}if (!this.vwr.isFunction$S(name)) this.error$I(10);
var params=(this.slen == 1 || this.slen == 3 && this.tokAt$I(1) == 268435472  && this.tokAt$I(2) == 268435473   ? null : this.parameterExpressionList$I$I$Z(1, -1, false));
if (this.chk) return;
p$1.runFunctionAndRet$org_jmol_api_JmolScriptFunction$S$javajs_util_Lst$org_jmol_script_SV$Z$Z$Z.apply(this, [null, name, params, null, false, true, true]);
}, p$1);

Clazz.newMeth(C$, 'cmdGetProperty', function () {
if (this.chk) return;
var retValue="";
var property=this.optParameterAsString$I(1);
var name=property;
if (name.indexOf$S(".") >= 0) name=name.substring$I$I(0, name.indexOf$S("."));
if (name.indexOf$S("[") >= 0) name=name.substring$I$I(0, name.indexOf$S("["));
var propertyID=this.vwr.getPropertyNumber$S(name);
var param="";
switch (this.tokAt$I(2)) {
default:
param=this.optParameterAsString$I(2);
break;
case 12290:
case 1073742325:
case 10:
param=this.atomExpressionAt$I(2);
if (property.equalsIgnoreCase$S("bondInfo") && this.isAtomExpression$I(++this.iToken) ) param=Clazz.array($I$(10), -1, [param, this.atomExpressionAt$I(this.iToken)]);
break;
}
if (property.length$() > 0 && propertyID < 0 ) {
property="";
param="";
} else if (propertyID >= 0 && this.slen < 3 ) {
if ((param=this.vwr.getDefaultPropertyParam$I(propertyID)).equals$O("(visible)")) param=this.vwr.ms.getVisibleSet$Z(true);
} else if (propertyID == this.vwr.getPropertyNumber$S("fileContents")) {
var s=param.toString();
for (var i=3; i < this.slen; i++) s += this.paramAsStr$I(i);

param=s;
}retValue=this.vwr.getProperty$S$S$O("readable", property, param);
this.showString$S(retValue);
}, p$1);

Clazz.newMeth(C$, 'cmdGoto$Z', function (isCmd) {
var strTo=(isCmd ? this.paramAsStr$I(this.checkLast$I(1)) : null);
var pcTo=(strTo == null  ? this.aatoken.length - 1 : -1);
var s=null;
for (var i=pcTo + 1; i < this.aatoken.length; i++) {
var tokens=this.aatoken[i];
var tok=tokens[0].tok;
switch (tok) {
case 20485:
case 0:
s=tokens[tokens.length - 1].value;
if (tok == 0) s=s.substring$I(s.startsWith$S("#") ? 1 : 2);
break;
default:
continue;
}
if (s.equalsIgnoreCase$S(strTo)) {
pcTo=i;
break;
}}
if (pcTo < 0) this.invArg$();
if (strTo == null ) pcTo=0;
var di=(pcTo < this.pc ? 1 : -1);
var nPush=0;
for (var i=pcTo; i != this.pc; i+=di) {
switch (this.aatoken[i][0].tok) {
case 1275335685:
case 102439:
case 134320648:
case 102412:
case 102406:
nPush++;
break;
case 1275334681:
nPush--;
break;
case 102409:
switch (this.aatoken[i][1].tok) {
case 102439:
case 134320648:
case 102412:
case 102406:
nPush--;
}
break;
}
}
if (strTo == null ) {
pcTo=2147483647;
for (; nPush > 0; --nPush) this.popContext$Z$Z(false, false);

}if (nPush != 0) this.invArg$();
if (!this.chk) this.pc=pcTo - 1;
}, p$1);

Clazz.newMeth(C$, 'cmdHbond', function () {
if (this.slen == 2 && this.getToken$I(1).tok == 4102 ) {
if (this.chk) return;
var n=this.vwr.autoHbond$javajs_util_BS$javajs_util_BS$Z(null, null, false);
this.report$S$Z($I$(30,"i$S$I",[$I$(30).$$S("{0} hydrogen bonds"), Math.abs(n)]), false);
return;
}if (this.slen == 2 && this.getToken$I(1).tok == 12291 ) {
if (this.chk) return;
p$1.checkExtension$I.apply(this, [1613238294]);
return;
}var mad=this.getMadParameter$();
if (mad == 2147483647) return;
this.setShapeProperty$I$S$O(1, "type", Integer.valueOf$I(30720));
this.setShapeSizeBs$I$I$javajs_util_BS(1, mad, null);
this.setShapeProperty$I$S$O(1, "type", Integer.valueOf$I(1023));
}, p$1);

Clazz.newMeth(C$, 'cmdHelp', function () {
if (this.chk) return;
var what=this.optParameterAsString$I(1).toLowerCase$();
var pt=0;
if (what.startsWith$S("mouse") && (pt=what.indexOf$S(" ")) >= 0  && pt == what.lastIndexOf$S(" ") ) {
this.showString$S(this.vwr.getBindingInfo$S(what.substring$I(pt + 1)));
return;
}if ($I$(9,"tokAttr$I$I",[$I$(9).getTokFromName$S(what), 4096])) what="?command=" + what;
this.vwr.getHelp$S(what);
}, p$1);

Clazz.newMeth(C$, 'cmdHistory$I', function (pt) {
if (this.slen == 1) {
this.showString$S(this.vwr.getSetHistory$I(2147483647));
return;
}if (pt == 2) {
var n=this.intParameter$I(this.checkLast$I(2));
if (n < 0) this.invArg$();
if (!this.chk) this.vwr.getSetHistory$I(n == 0 ? 0 : -2 - n);
return;
}switch (this.getToken$I(this.checkLast$I(1)).tok) {
case 1073742335:
case 1073741882:
if (!this.chk) this.vwr.getSetHistory$I(-2147483648);
return;
case 1073742334:
if (!this.chk) this.vwr.getSetHistory$I(0);
break;
default:
this.errorStr$I$S(24, "ON, OFF, CLEAR");
}
}, p$1);

Clazz.newMeth(C$, 'cmdHover', function () {
if (this.chk) return;
var strLabel=(this.slen == 1 ? "on" : this.paramAsStr$I(1));
if (strLabel.equalsIgnoreCase$S("on")) strLabel="%U";
 else if (strLabel.equalsIgnoreCase$S("off")) strLabel=null;
this.vwr.setHoverLabel$S(strLabel);
}, p$1);

Clazz.newMeth(C$, 'cmdLabel$I$javajs_util_BS', function (index, bs) {
if (this.chk) return;
this.sm.loadShape$I(5);
var strLabel=null;
switch (this.getToken$I(index).tok) {
case 1073742335:
strLabel=this.vwr.getStandardLabelFormat$I(0);
break;
case 1073742334:
break;
case 12294:
case 1610625028:
this.setShapeProperty$I$S$O(5, "display", this.theTok == 1610625028 ? Boolean.TRUE : Boolean.FALSE);
return;
case 7:
strLabel=this.theToken.value;
break;
default:
strLabel=this.paramAsStr$I(index);
}
this.sm.setLabel$O$javajs_util_BS(strLabel, bs == null  ? this.vwr.bsA$() : bs);
}, p$1);

Clazz.newMeth(C$, 'cmdLoad$', function () {
var doLoadFiles=(!this.chk || this.isCmdLine_C_Option );
var isAppend=false;
var isInline=false;
var isSmiles=false;
var isMutate=false;
var isData=false;
var isAsync=this.vwr.async;
var isConcat=false;
var doOrient=false;
var appendNew=this.vwr.getBoolean$I(603979792);
var isAudio=false;
var filename=null;
var bsModels;
var i=(this.tokAt$I(0) == 134221834 ? 0 : 1);
var filter=null;
var modelCount0=this.vwr.ms.mc - (this.vwr.fm.getFileName$().equals$O("zapped") ? 1 : 0);
var ac0=this.vwr.ms.ac;
var loadScript=Clazz.new_($I$(4,1)).append$S("load");
var nFiles=1;
var htParams=Clazz.new_($I$(12,1));
if (this.isStateScript) {
htParams.put$O$O("isStateScript", Boolean.TRUE);
if (this.forceNoAddHydrogens) htParams.put$O$O("doNotAddHydrogens", Boolean.TRUE);
}var modelName=null;
var filenames=null;
var tempFileInfo=null;
var errMsg=null;
var sOptions=Clazz.new_($I$(4,1));
var tokType=0;
var tok;
if (this.slen == 1) {
i=0;
} else {
modelName=this.paramAsStr$I(i);
if (this.slen == 2 && !this.chk ) {
if (modelName.endsWith$S(".spt") || modelName.endsWith$S(".png") || modelName.endsWith$S(".pngj")  ) {
this.cmdScript$I$S$S(0, modelName, null);
return;
}}tok=this.tokAt$I(i);
switch (tok) {
case 36868:
var $var=this.paramAsStr$I(++i);
filename="@" + $var;
var o=this.getVarParameter$S$Z($var, false);
if (Clazz.instanceOf(o, "java.util.Map")) {
this.checkLength$I(3);
p$1.loadPNGJVar$S$O$java_util_Map.apply(this, [filename, o, htParams]);
return;
}break;
case 1073877011:
case 1610616855:
case 1073742015:
var m=this.paramAsStr$I(this.checkLast$I(2));
if (!this.chk) {
switch (tok) {
case 1073877011:
htParams.put$O$O("service", "nbo");
htParams.put$O$O("mode", Integer.valueOf$I(1));
htParams.put$O$O("action", "load");
htParams.put$O$O("value", m);
htParams.put$O$O("sync", Boolean.TRUE);
this.vwr.sm.processService$java_util_Map(htParams);
this.runScript$S(htParams.get$O("ret"));
break;
case 1610616855:
this.vwr.setHistory$S(m);
break;
case 1073742015:
this.vwr.setMenu$S$Z(m, true);
break;
}
}return;
case 4130:
isMutate=isAppend=true;
appendNew=false;
loadScript.append$S(" mutate");
modelName=this.optParameterAsString$I(++i);
tok=$I$(9).getTokFromName$S(modelName);
break;
case 1073741839:
isAppend=true;
loadScript.append$S(" append");
modelName=this.optParameterAsString$I(++i);
tok=$I$(9).getTokFromName$S(modelName);
break;
case 1073742077:
doOrient=true;
loadScript.append$S(" orientation");
this.vwr.stm.saveOrientation$S$FA("preload", null);
modelName=this.optParameterAsString$I(++i);
tok=$I$(9).getTokFromName$S(modelName);
break;
case 1073741851:
isAudio=true;
i++;
break;
case 1073741824:
i++;
loadScript.append$S(" " + modelName);
tokType=(tok == 1073741824 && $I$(7,"isOneOf$S$S",[modelName.toLowerCase$(), ";xyz;vxyz;vibration;temperature;occupancy;partialcharge;"])  ? $I$(9).getTokFromName$S(modelName) : 0);
if (tokType != 0) {
htParams.put$O$O("atomDataOnly", Boolean.TRUE);
htParams.put$O$O("modelNumber", Integer.valueOf$I(1));
if (tokType == 4166) tokType=1145047055;
tempFileInfo=this.vwr.fm.getFileInfo$();
isAppend=true;
}}
switch (tok) {
case 1228935687:
i++;
loadScript.append$S(" " + modelName);
if (this.optParameterAsString$I(i).equals$O("+")) {
isConcat=true;
i++;
loadScript.append$S(" +");
}if (this.optParameterAsString$I(i).equals$O("-")) {
isConcat=true;
i++;
loadScript.append$S(" -");
}if (this.tokAt$I(i) == 7) {
filenames=this.stringParameterSet$I(i);
i=this.iToken;
if (i + 1 != this.slen) this.invArg$();
if (filenames != null ) nFiles=filenames.length;
}break;
case 1073741984:
isInline=true;
i++;
loadScript.append$S(" " + modelName);
break;
case 134218757:
isSmiles=true;
i++;
break;
case 1073741849:
isAsync=true;
htParams.put$O$O("async", Boolean.TRUE);
i++;
break;
case 536870926:
case 1094717454:
i++;
loadScript.append$S(" " + modelName);
if (tok == 536870926) htParams.put$O$O("isTrajectory", Boolean.TRUE);
if (this.isPoint3f$I(i)) {
var pt=this.getPoint3f$I$Z$Z(i, false, true);
i=this.iToken + 1;
htParams.put$O$O("firstLastStep", Clazz.array(Integer.TYPE, -1, [(pt.x|0), (pt.y|0), (pt.z|0)]));
loadScript.append$S(" " + $I$(19).eP$javajs_util_T3(pt));
} else {
switch (this.tokAt$I(i)) {
case 10:
bsModels=this.getToken$I(i++).value;
htParams.put$O$O("bsModels", bsModels);
loadScript.append$S(" " + $I$(19).eBS$javajs_util_BS(bsModels));
break;
default:
htParams.put$O$O("firstLastStep", Clazz.array(Integer.TYPE, -1, [0, -1, 1]));
}
}break;
case 1073741824:
break;
case 134221834:
var key=this.stringParameter$I(++i).toLowerCase$();
isAppend=key.startsWith$S("append");
doOrient=(key.indexOf$S("orientation") >= 0);
i=p$1.addLoadData$javajs_util_SB$S$java_util_Map$I.apply(this, [loadScript, key, htParams, i]);
isData=true;
break;
default:
modelName="fileset";
}
if (filename == null  && filenames == null   && this.getToken$I(i).tok != 4 ) this.error$I(16);
}var filePt=i;
var ptAs=i + 1;
var localName=null;
if (this.tokAt$I(ptAs) == 1073741848) {
localName=this.stringParameter$I(i=ptAs + 1);
if (this.vwr.fm.getPathForAllFiles$() !== "" ) {
localName=null;
filePt=i;
}}var appendedData=null;
var appendedKey=null;
if (this.slen == i + 1) {
if (filename == null  && (i == 0 || filenames == null  && (filename=this.paramAsStr$I(filePt)).length$() == 0  ) ) filename=this.getFullPathName$();
if (filename == null  && filenames == null  ) {
p$1.cmdZap$Z.apply(this, [false]);
return;
}if (filenames == null  && !isInline ) {
if (isSmiles) {
filename="$" + filename;
} else {
if (filename.equals$O("String[]")) return;
if (filename.indexOf$S("[") == 0) {
filenames=$I$(19).unescapeStringArray$S(filename);
if (filenames != null ) {
if (i == 1) loadScript.append$S(" files");
nFiles=filenames.length;
}}}}if (filenames != null ) for (var j=0; j < nFiles; j++) loadScript.append$S(" /*file*/").append$S($I$(7).esc$S(filenames[j]));

} else if (p$1.isLoadOption$I.apply(this, [this.getToken$I(i + 1).tok])) {
if (filename == null  && (filename=this.paramAsStr$I(filePt)).length$() == 0  && (filename=this.getFullPathName$()) == null  ) {
p$1.cmdZap$Z.apply(this, [false]);
return;
}if (filePt == i || localName != null  ) i++;
if (filename.equals$O("String[]")) return;
if ((tok=this.tokAt$I(i)) == 1073742010) {
var manifest=this.stringParameter$I(++i);
htParams.put$O$O("manifest", manifest);
sOptions.append$S(" MANIFEST " + $I$(7).esc$S(manifest));
tok=this.tokAt$I(++i);
}switch (tok) {
case 2:
case 7:
case 268435520:
case 1073742195:
i=p$1.getLoadModelIndex$I$javajs_util_SB$java_util_Map.apply(this, [i, sOptions, htParams]);
break;
}
i=this.getCmdExt$().getLoadSymmetryParams$I$javajs_util_SB$java_util_Map(i, sOptions, htParams);
if (this.tokAt$I(i) == 1073741839) {
if (this.tokAt$I(++i) == 134221834) {
i+=2;
appendedData=this.getToken$I(i++).value;
appendedKey=this.stringParameter$I(++i);
++i;
} else {
appendedKey=this.stringParameter$I(i++);
appendedData=this.stringParameter$I(i++);
}htParams.put$O$O(appendedKey, appendedData);
}if (this.tokAt$I(i) == 1073741940) filter=this.stringParameter$I(++i);
} else {
var fNames=Clazz.new_($I$(23,1));
if (i == 1) {
if (this.tokAt$I(i + 1) == 268435617 || this.tokAt$I(i + 1) == 268435616 ) {
modelName="files";
} else {
i++;
}loadScript.append$S(" " + modelName);
}if (this.tokAt$I(i + 1) == 268435616) isConcat=true;
filter=p$1.getLoadFilesList$I$javajs_util_SB$javajs_util_SB$java_util_Map$javajs_util_Lst.apply(this, [i, loadScript, sOptions, htParams, fNames]);
filenames=fNames.toArray$OA(Clazz.array(String, [nFiles=fNames.size$()]));
if (!isConcat && loadScript.indexOf$S("/*concat*/") >= 0 ) isConcat=true;
}if (!doLoadFiles) return;
if (filenames != null ) filename="fileSet";
if (appendedData != null ) {
sOptions.append$S(" APPEND data \"" + appendedKey + "\"\n" + appendedData + (appendedData.endsWith$S("\n") ? "" : "\n") + "end \"" + appendedKey + "\"" );
}if (filter == null ) filter=this.vwr.g.defaultLoadFilter;
if (filter.length$() > 0) {
if (filter.toUpperCase$().indexOf$S("DOCACHE") >= 0) {
if (!this.isStateScript && !isAppend ) this.vwr.cacheClear$();
}htParams.put$O$O("filter", filter);
if (filter.equalsIgnoreCase$S("2d")) filter="2D-noMin";
sOptions.append$S(" FILTER " + $I$(7).esc$S(filter));
}var isVariable=false;
if (filenames == null ) {
if (filename.equals$O("string") && this.vwr.am.cmi >= 0 ) {
filename=this.vwr.getCurrentFileAsString$S(null);
loadScript=Clazz.new_($I$(4,1)).append$S("load inline ");
isInline=true;
}if (isInline) {
htParams.put$O$O("fileData", filename);
} else if (filename.startsWith$S("@") && filename.length$() > 1 ) {
var o=this.getVarParameter$S$Z(filename.substring$I(1), false);
if (Clazz.instanceOf(o, "java.util.Map")) {
this.checkLength$I(i + 1);
p$1.loadPNGJVar$S$O$java_util_Map.apply(this, [filename, o, htParams]);
return;
}isVariable=true;
o="" + o;
loadScript=Clazz.new_($I$(4,1)).append$S("{\n    var ").append$S(filename.substring$I(1)).append$S(" = ").append$S($I$(7).esc$S(o)).append$S(";\n    ").appendSB$javajs_util_SB(loadScript);
htParams.put$O$O("fileData", o);
} else if (!isData && !((filename.startsWith$S("=") || filename.startsWith$S("*") ) && filename.indexOf$S("/") > 0 ) ) {
var type="";
var pt=filename.indexOf$S("::");
if (pt > 0 && pt < 20 ) {
type=filename.substring$I$I(0, pt + 2);
filename=filename.substring$I(pt + 2);
}filename=type + this.checkFileExists$S$Z$S$I$Z("LOAD" + (isAppend ? "_APPEND_" : "_"), isAsync, filename, filePt, !isAppend && this.pc != this.pcResume );
if (filename.startsWith$S("cache://")) localName=null;
}}var out=null;
var filecat=null;
if (localName != null ) {
if (localName.equals$O(".")) localName=this.vwr.fm.getFilePath$S$Z$Z(filename, false, true);
if (localName.length$() == 0 || this.vwr.fm.getFilePath$S$Z$Z(localName, false, false).equalsIgnoreCase$S(this.vwr.fm.getFilePath$S$Z$Z(filename, false, false)) ) this.invArg$();
var fullPath=Clazz.array(String, -1, [localName]);
out=this.vwr.getOutputChannel$S$SA(localName, fullPath);
if (out == null ) $I$(6).error$S("Could not create output stream for " + fullPath[0]);
 else htParams.put$O$O("outputChannel", out);
}if (filenames == null  && tokType == 0 ) {
loadScript.append$S(" ");
if (isVariable || isInline ) {
loadScript.append$S(filename.indexOf$I("\n") >= 0 || isVariable  ? $I$(7).esc$S(filename) : filename);
} else if (!isData) {
if (localName != null ) localName=this.vwr.fm.getFilePath$S$Z$Z(localName, false, false);
if (!filename.equals$O("String[]")) loadScript.append$S("/*file*/").append$S((localName != null  ? $I$(7).esc$S(localName) : "$FILENAME$"));
}if (!isConcat && (filename.startsWith$S("=") || filename.startsWith$S("*") ) && filename.indexOf$S("/") > 0  ) {
isConcat=true;
var pt=filename.indexOf$S("/");
var id;
if (pt == 1 && (id=this.vwr.getPdbID$()) != null  ) {
filename=filename.substring$I$I(0, 1) + id + filename.substring$I(1) ;
pt=filename.indexOf$S("/");
} else {
id=filename.substring$I$I(1, pt);
}var ext=filename.substring$I(pt + 1);
filename=filename.substring$I$I(0, pt);
if ((pt=filename.indexOf$S(".")) >= 0) filename=filename.substring$I$I(0, pt);
if (";dssr;rna3d;dom;val;".indexOf$S(";" + ext + ";" ) >= 0 || ext.startsWith$S("dssr--") ) {
if (filename.startsWith$S("=")) filename += ".cif";
filenames=(ext.equals$O("all") ? Clazz.array(String, -1, [filename, "*dom/" + id, "*val/" + id]) : Clazz.array(String, -1, [filename, "*" + ext + "/" + id ]));
filename="fileSet";
loadScript=null;
isVariable=false;
filecat="-";
} else {
filename += "/" + ext;
}}if (loadScript != null ) {
if (sOptions.length$() > 0) loadScript.append$S(" /*options*/ ").append$S(sOptions.toString());
if (isVariable) loadScript.append$S("\n  }");
htParams.put$O$O("loadScript", loadScript);
}}if (isAudio) {
if (filename != null ) htParams.put$O$O("audioFile", filename);
p$1.addFilterAttribute$java_util_Map$S$S.apply(this, [htParams, filter, "id"]);
p$1.addFilterAttribute$java_util_Map$S$S.apply(this, [htParams, filter, "pause"]);
p$1.addFilterAttribute$java_util_Map$S$S.apply(this, [htParams, filter, "play"]);
p$1.addFilterAttribute$java_util_Map$S$S.apply(this, [htParams, filter, "ended"]);
p$1.addFilterAttribute$java_util_Map$S$S.apply(this, [htParams, filter, "action"]);
this.vwr.sm.playAudio$java_util_Map(htParams);
return;
}this.setCursorWait$Z(true);
var timeMsg=this.vwr.getBoolean$I(603979934);
if (timeMsg) $I$(6).startTimer$S("load");
if (!this.isStateScript && !isAppend ) this.vwr.setBooleanProperty$S$Z("legacyJavaFloat", false);
if (isMutate) htParams.put$O$O("isMutate", Boolean.TRUE);
htParams.put$O$O("eval", this);
errMsg=this.vwr.loadModelFromFile$S$S$SA$O$Z$java_util_Map$javajs_util_SB$javajs_util_SB$I$S(null, filename, filenames, null, isAppend, htParams, loadScript, sOptions, tokType, filecat != null  ? filecat : isConcat ? "+" : " ");
if (timeMsg) this.showString$S($I$(6).getTimerMsg$S$I("load", 0));
if (out != null ) {
this.vwr.fm.setFileInfo$SA(Clazz.array(String, -1, [localName]));
$I$(6,"info$S",[$I$(30,"o$S$O",[$I$(30).$$S("file {0} created"), localName])]);
this.showString$S(this.vwr.fm.getFilePath$S$Z$Z(localName, false, false) + " created");
out.closeChannel$();
}if (tokType > 0) {
this.vwr.fm.setFileInfo$SA(tempFileInfo);
if (errMsg != null  && !this.isCmdLine_c_or_C_Option ) this.evalError$S$S(errMsg, null);
return;
}if (errMsg != null  && !this.isCmdLine_c_or_C_Option ) {
if (errMsg.indexOf$S("NOTE: file recognized as a script file: ") == 0) {
filename=errMsg.substring$I("NOTE: file recognized as a script file: ".length$()).trim$();
if (filename.indexOf$S("png|") >= 0 && filename.endsWith$S("pdb|state.spt") ) {
filename=filename.substring$I$I(0, filename.lastIndexOf$S("|"));
filename += filename.substring$I(filename.lastIndexOf$S("|"));
this.runScript$S("load \"" + filename + "\"" );
return;
}this.cmdScript$I$S$S(0, filename, null);
return;
}if (this.vwr.async && errMsg.startsWith$S($I$(13).READER_NOT_FOUND) ) {
throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "async", 1]);
}this.evalError$S$S(errMsg, null);
}if (this.debugHigh) this.report$S$Z("Successfully loaded:" + (filenames == null  ? htParams.get$O("fullPathName") : modelName), false);
p$1.finalizeLoad$Z$Z$Z$Z$I$I$I.apply(this, [isAppend, appendNew, isConcat, doOrient, nFiles, ac0, modelCount0]);
});

Clazz.newMeth(C$, 'checkFileExists$S$Z$S$I$Z', function (prefix, isAsync, filename, i, doClear) {
if (this.chk || filename.startsWith$S("cache://") ) return filename;
if ((this.vwr.testAsync || $I$(38).isJS ) && (isAsync || filename.startsWith$S("?") )  || this.vwr.apiPlatform.forceAsyncLoad$S(filename) ) {
filename=this.loadFileAsync$S$S$I$Z(prefix, filename, i, doClear);
}var fullPathNameOrError=this.vwr.getFullPathNameOrError$S(filename);
filename=fullPathNameOrError[0];
if (fullPathNameOrError[1] != null ) this.errorStr$I$S(17, filename + ":" + fullPathNameOrError[1] );
return filename;
});

Clazz.newMeth(C$, 'addFilterAttribute$java_util_Map$S$S', function (htParams, filter, key) {
var val=$I$(7).getQuotedOrUnquotedAttribute$S$S(filter, key);
if (val != null  && val.length$() > 0 ) htParams.put$O$O(key, val);
}, p$1);

Clazz.newMeth(C$, 'addLoadData$javajs_util_SB$S$java_util_Map$I', function (loadScript, key, htParams, i) {
loadScript.append$S(" /*data*/ data");
var ptVar=key.indexOf$S("@");
if (ptVar >= 0) key=key.replace$C$C("@", "_");
loadScript.append$S(" ").append$S($I$(7).esc$S(key));
var strModel=(ptVar >= 0 ? "" + this.getParameter$S$I$Z(key.substring$I(ptVar + 1), 4, true) : this.paramAsStr$I(++i));
strModel=$I$(38,"fixInlineString$S$C",[strModel, this.vwr.getInlineChar$()]);
htParams.put$O$O("fileData", strModel);
htParams.put$O$O("isData", Boolean.TRUE);
loadScript.appendC$C("\n").append$S(strModel).append$S(" end ").append$S($I$(7).esc$S(key));
if (ptVar < 0) i+=2;
return i;
}, p$1);

Clazz.newMeth(C$, 'loadPNGJVar$S$O$java_util_Map', function (varName, o, htParams) {
var av=Clazz.array($I$(8), -1, [$I$(8).newV$I$O(6, o)]);
this.getCmdExt$().dispatch$I$Z$org_jmol_script_TA(1073741866, false, av);
htParams.put$O$O("imageData", av[0].value);
var out=this.vwr.getOutputChannel$S$SA(null, null);
htParams.put$O$O("outputChannel", out);
this.vwr.createZip$S$S$java_util_Map("", "BINARY", htParams);
var modelName="cache://VAR_" + varName;
this.vwr.cacheFileByName$S$Z("cache://VAR_*", false);
this.vwr.cachePut$S$O(modelName, out.toByteArray$());
this.cmdScript$I$S$S(0, modelName, null);
}, p$1);

Clazz.newMeth(C$, 'getLoadFilesList$I$javajs_util_SB$javajs_util_SB$java_util_Map$javajs_util_Lst', function (i, loadScript, sOptions, htParams, fNames) {
var firstLastSteps=null;
var filter=null;
var pt=null;
var bs=null;
while (i < this.slen){
switch (this.tokAt$I(i)) {
case 268435617:
loadScript.append$S("/*concat*/ +");
++i;
continue;
case 268435616:
loadScript.append$S(" -");
++i;
continue;
case 2:
case 7:
case 268435520:
case 1073742195:
i=p$1.getLoadModelIndex$I$javajs_util_SB$java_util_Map.apply(this, [i, sOptions, htParams]);
continue;
case 1073741940:
filter=this.stringParameter$I(++i);
++i;
continue;
case 1073742329:
htParams.remove$O("isTrajectory");
if (firstLastSteps == null ) {
firstLastSteps=Clazz.new_($I$(23,1));
pt=$I$(24).new3$F$F$F(0, -1, 1);
}if (this.isPoint3f$I(++i)) {
pt=this.getPoint3f$I$Z$Z(i, false, true);
i=this.iToken + 1;
} else if (this.tokAt$I(i) == 10) {
bs=this.getToken$I(i).value;
pt=null;
i=this.iToken + 1;
}break;
case 1073741824:
this.invArg$();
}
fNames.addLast$O(this.paramAsStr$I(i++));
if (pt != null ) {
firstLastSteps.addLast$O(Clazz.array(Integer.TYPE, -1, [(pt.x|0), (pt.y|0), (pt.z|0)]));
loadScript.append$S(" COORD " + $I$(19).eP$javajs_util_T3(pt));
} else if (bs != null ) {
firstLastSteps.addLast$O(bs);
loadScript.append$S(" COORD " + $I$(19).eBS$javajs_util_BS(bs));
}loadScript.append$S(" /*file*/$FILENAME" + fNames.size$() + "$" );
}
if (firstLastSteps != null ) htParams.put$O$O("firstLastSteps", firstLastSteps);
return filter;
}, p$1);

Clazz.newMeth(C$, 'isLoadOption$I', function (tok) {
switch (tok) {
case 1073742010:
case 2:
case 7:
case 268435520:
case 1073742195:
case 1073742332:
case 8:
case 1073742080:
case 1094713350:
case 1073742163:
case 1073741938:
case 1073742114:
case 134217764:
case 1814695966:
case 1073742066:
case 134221834:
case 1073741839:
return true;
case 1073741940:
case 1073741824:
return (this.tokAt$I(this.iToken + 2) != 1073742329);
}
return false;
}, p$1);

Clazz.newMeth(C$, 'getLoadModelIndex$I$javajs_util_SB$java_util_Map', function (i, sOptions, htParams) {
var n;
switch (this.tokAt$I(i)) {
case 2:
htParams.remove$O("firstLastStep");
htParams.remove$O("bsModel");
htParams.put$O$O("useFileModelNumbers", Boolean.TRUE);
n=this.intParameter$I(i);
sOptions.append$S(" ").appendI$I(n);
if (n < 0) htParams.put$O$O("vibrationNumber", Integer.valueOf$I(-n));
 else htParams.put$O$O("modelNumber", Integer.valueOf$I(n));
break;
case 7:
case 268435520:
case 1073742195:
htParams.remove$O("firstLastStep");
var data=this.floatParameterSet$I$I$I(i, 1, 2147483647);
var bs=Clazz.new_($I$(10,1));
var iArray=Clazz.array(Integer.TYPE, [data.length]);
for (var j=0; j < data.length; j++) {
n=(data[j]|0);
if (data[j] >= 1  && data[j] == n  ) bs.set$I(n - 1);
 else this.invArg$();
iArray[j]=n;
}
sOptions.append$S(" " + $I$(19).eAI$IA(iArray));
htParams.put$O$O("bsModels", bs);
htParams.put$O$O("useFileModelNumbers", Boolean.TRUE);
break;
}
return this.iToken + 1;
}, p$1);

Clazz.newMeth(C$, 'finalizeLoad$Z$Z$Z$Z$I$I$I', function (isAppend, appendNew, isConcat, doOrient, nFiles, ac0, modelCount0) {
if (isAppend && (appendNew || nFiles > 1 ) ) {
this.vwr.setAnimationRange$I$I(-1, -1);
this.vwr.setCurrentModelIndex$I(modelCount0);
}var msg;
if (this.scriptLevel == 0 && !isAppend  && (isConcat || nFiles < 2 )  && (msg=this.vwr.ms.getInfoM$S("modelLoadNote")) != null  ) this.vwr.showString$S$Z(msg, false);
var centroid=this.vwr.ms.getInfoM$S("centroidMinMax");
if ($I$(39).isAI$O(centroid) && this.vwr.ms.ac > 0 ) {
var bs=$I$(15).newBitSet2$I$I(isAppend ? ac0 : 0, this.vwr.ms.ac);
this.vwr.ms.setCentroid$javajs_util_BS$IA(bs, centroid);
}var script=this.vwr.g.defaultLoadScript;
msg="";
if (script.length$() > 0) msg += "\nUsing defaultLoadScript: " + script;
var embeddedScript;
var info=this.vwr.ms.msInfo;
if (info != null  && this.vwr.allowEmbeddedScripts$()  && (embeddedScript=info.remove$O("jmolscript")) != null   && embeddedScript.length$() > 0 ) {
msg += "\nAdding embedded #jmolscript: " + embeddedScript;
script += ";" + embeddedScript;
this.setStringProperty$S$S("_loadScript", script);
script="allowEmbeddedScripts = false;try{" + script + "} allowEmbeddedScripts = true;" ;
this.isEmbedded=!this.isCmdLine_c_or_C_Option;
} else {
this.setStringProperty$S$S("_loadScript", "");
}p$1.logLoadInfo$S.apply(this, [msg]);
var siteScript=(info == null  ? null : info.remove$O("sitescript"));
if (siteScript != null ) script=siteScript + ";" + script ;
if (doOrient) script += ";restore orientation preload";
if (script.length$() > 0 && !this.isCmdLine_c_or_C_Option ) this.runScript$S(script);
}, p$1);

Clazz.newMeth(C$, 'cmdLog', function () {
if (this.slen == 1) this.bad$();
if (this.chk) return;
var s=this.parameterExpressionString$I$I(1, 0);
if (this.tokAt$I(1) == 1073742334) this.setStringProperty$S$S("logFile", "");
 else this.vwr.log$S(s);
}, p$1);

Clazz.newMeth(C$, 'cmdLoop', function () {
if (this.vwr.headless) return;
if (!this.chk) this.pc=-1;
p$1.cmdDelay.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'cmdMessage', function () {
var text=this.paramAsStr$I(this.checkLast$I(1));
if (this.chk) return;
var s=$I$(35).formatText$org_jmol_api_JmolViewer$S(this.vwr, text);
if (this.outputBuffer == null  && !this.vwr.isPrintOnly ) $I$(6).warn$S(s);
if (!s.startsWith$S("_")) this.report$S$Z(s, false);
}, p$1);

Clazz.newMeth(C$, 'cmdModel$I', function (offset) {
var isFrame=(this.theTok == 4115 || this.vwr.ms.mc > 1 );
var frameList=Clazz.array(Integer.TYPE, -1, [-1, -1]);
var nFrames=0;
var useModelNumber=true;
var modelIndex=-1;
if (this.slen == 1 && offset == 1 ) {
modelIndex=this.vwr.am.cmi;
var m;
if (!this.chk && modelIndex >= 0  && (m=this.vwr.ms.getJmolDataSourceFrame$I(modelIndex)) >= 0 ) this.vwr.setCurrentModelIndex$I(m == modelIndex ? -2147483648 : m);
return;
}switch (this.tokAt$I(1)) {
case 1073877010:
if (!this.chk && isFrame && this.slen == 2  ) {
while (++modelIndex < this.vwr.ms.mc){
if (!this.vwr.ms.am[modelIndex].auxiliaryInfo.containsKey$O("moData")) continue;
this.vwr.am.setFrame$I(modelIndex);
this.showString$S("Frame set to " + (modelIndex + 1));
return;
}
this.showString$S("No molecular orbitals");
}return;
case 2:
if (isFrame && this.slen == 2 ) {
if (!this.chk) this.vwr.am.setFrame$I(this.intParameter$I(1) - 1);
return;
}break;
case 1073742325:
case 10:
modelIndex=this.atomExpressionAt$I(1).nextSetBit$I(0);
if (this.chk || modelIndex < 0  || modelIndex >= this.vwr.ms.ac ) return;
modelIndex=this.vwr.ms.at[modelIndex].mi;
if (this.iToken + 1 == this.slen) {
this.vwr.setCurrentModelIndex$I(modelIndex);
return;
}frameList[nFrames++]=modelIndex;
offset=this.iToken + 1;
useModelNumber=false;
break;
case 1073741904:
this.iToken=1;
var n=(this.tokAt$I(2) == 2 ? this.intParameter$I(++this.iToken) : 1);
this.checkLength$I(this.iToken + 1);
if (!this.chk && n > 0 ) this.vwr.ms.createModels$I(n);
return;
case 1073741974:
this.checkLength$I(3);
var id=this.stringParameter$I(2);
if (!this.chk) this.vwr.setCurrentModelID$S(id);
return;
case 528397:
var millis=0;
this.checkLength$I(3);
switch (this.getToken$I(2).tok) {
case 2:
case 3:
millis=((this.floatParameter$I(2) * 1000)|0);
break;
default:
this.error$I(20);
}
if (!this.chk) this.vwr.setFrameDelayMs$J(millis);
return;
case 1073742166:
if (this.checkLength23$() > 0) if (!this.chk) this.vwr.setFrameTitleObj$O(this.slen == 2 ? "@{_modelName}" : (this.tokAt$I(2) == 7 ? $I$(8).strListValue$org_jmol_script_T(this.st[2]) : this.paramAsStr$I(2)));
return;
case 1073742077:
if (this.tokAt$I(2) == 3 && this.tokAt$I(3) == 12 ) {
modelIndex=this.vwr.ms.getModelNumberIndex$I$Z$Z(this.getToken$I(2).intValue, false, false);
var mat4=this.getToken$I(3).value;
if (modelIndex >= 0) this.vwr.ms.am[modelIndex].mat4=mat4;
return;
}break;
case 1073741832:
var isNone=(this.tokAt$I(2) == 1073742333);
var bs=(this.slen == 2 || isNone  ? null : this.atomExpressionAt$I(2));
if (isNone) this.iToken=2;
var isFixed=(this.tokAt$I(this.iToken + 1) == 12293);
this.checkLength$I(this.iToken + (isFixed ? 2 : 1));
if (!this.chk) this.vwr.setFrameOffsets$javajs_util_BS$Z(bs, isFixed);
return;
}
if (this.getToken$I(offset).tok == 268435616) {
++offset;
if (this.getToken$I(this.checkLast$I(offset)).tok != 2 || this.intParameter$I(offset) != 1 ) this.invArg$();
if (!this.chk) this.vwr.setAnimation$I(1073742108);
return;
}var isPlay=false;
var isRange=false;
var propName=null;
var prop=null;
var isAll=false;
var isHyphen=false;
var fFrame=0;
var frameAlign=null;
var haveFileSet=this.vwr.haveFileSet$();
if (this.isArrayParameter$I(1)) {
p$1.setFrameSet$I.apply(this, [1]);
isAll=true;
} else {
for (var i=offset; i < this.slen; i++) {
switch (this.getToken$I(i).tok) {
case 1073741832:
if (i != 2) this.invArg$();
frameAlign=this.centerParameter$I$OA(3, null);
this.checkLength$I(i=this.iToken + 1);
break;
case 1073742327:
case 268435633:
this.checkLength$I(offset + (isRange ? 2 : 1));
isAll=true;
break;
case 268435616:
if (nFrames != 1) this.invArg$();
isHyphen=true;
break;
case 1073742333:
this.checkLength$I(offset + 1);
break;
case 3:
useModelNumber=false;
if ((fFrame=this.floatParameter$I(i)) < 0 ) {
this.checkLength$I(i + 1);
if (!this.chk) this.vwr.am.morph$F(-fFrame);
return;
}case 2:
case 4:
if (nFrames == 2) this.invArg$();
var iFrame=(this.theTok == 4 ? $I$(28).getFloatEncodedInt$S(this.theToken.value) : this.theToken.intValue);
if (iFrame < 0 && nFrames == 1 ) {
isHyphen=true;
iFrame=-iFrame;
if (haveFileSet && iFrame < 1000000 ) iFrame*=1000000;
}if (this.theTok == 3 && haveFileSet  && fFrame == (fFrame|0)  ) iFrame=(fFrame|0) * 1000000;
if (iFrame == 2147483647) {
useModelNumber=false;
frameList[nFrames++]=(this.chk || i != 1  ? 0 : this.vwr.getModelIndexFromId$S(this.theToken.value.toString()));
break;
}if (iFrame == -1) {
this.checkLength$I(offset + 1);
if (!this.chk) this.vwr.setAnimation$I(1073742108);
return;
}if (iFrame >= 1000 && iFrame < 1000000  && haveFileSet ) iFrame=((iFrame/1000|0)) * 1000000 + (iFrame % 1000);
if (!useModelNumber && iFrame == 0  && nFrames == 0 ) isAll=true;
if (iFrame >= 1000000) useModelNumber=false;
frameList[nFrames++]=iFrame;
break;
case 1073742096:
isPlay=true;
break;
case 1073742114:
isRange=true;
break;
case 1715472409:
if (modelIndex < 0 && (modelIndex=this.vwr.am.cmi) < 0 ) return;
propName=this.paramAsStr$I(++i);
var sv=this.setVariable$I$I$S$Z(++i, -1, "", false);
if (sv != null  && !this.chk ) {
if (propName.equalsIgnoreCase$S("DSSR")) {
p$1.loadDssr$I$S.apply(this, [modelIndex, sv.value]);
return;
}prop=$I$(8).oValue$O(sv);
}if (!this.chk) this.vwr.ms.setInfo$I$O$O(modelIndex, propName, prop);
return;
default:
p$1.frameControl$I.apply(this, [offset]);
return;
}
}
}if (this.chk) return;
if (isRange && nFrames == 0 ) isAll=true;
if (isAll) {
this.vwr.setAnimationOn$Z(false);
this.vwr.setAnimationRange$I$I(-1, -1);
if (!isRange) this.vwr.setCurrentModelIndex$I(-1);
return;
}if (nFrames == 2 && !isRange ) isHyphen=true;
if (haveFileSet) useModelNumber=false;
 else if (useModelNumber) for (var i=0; i < nFrames; i++) if (frameList[i] >= 0) frameList[i]%=1000000;

modelIndex=this.vwr.ms.getModelNumberIndex$I$Z$Z(frameList[0], useModelNumber, false);
if (frameAlign != null ) {
if (modelIndex >= 0) {
this.vwr.ms.translateModel$I$javajs_util_T3(modelIndex, null);
this.vwr.ms.translateModel$I$javajs_util_T3(modelIndex, frameAlign);
}return;
}var modelIndex2=-1;
if (haveFileSet && modelIndex < 0  && frameList[0] != 0 ) {
if (frameList[0] < 1000000) frameList[0]*=1000000;
if (nFrames == 2 && frameList[1] < 1000000 ) frameList[1]*=1000000;
if (frameList[0] % 1000000 == 0) {
frameList[0]++;
modelIndex=this.vwr.ms.getModelNumberIndex$I$Z$Z(frameList[0], false, false);
if (modelIndex >= 0) {
var i2=(nFrames == 1 ? frameList[0] + 1000000 : frameList[1] == 0 ? -1 : frameList[1] % 1000000 == 0 ? frameList[1] + 1000001 : frameList[1] + 1);
modelIndex2=this.vwr.ms.getModelNumberIndex$I$Z$Z(i2, false, false);
if (modelIndex2 < 0) modelIndex2=this.vwr.ms.mc;
modelIndex2--;
if (isRange) nFrames=2;
 else if (!isHyphen && modelIndex2 != modelIndex ) isHyphen=true;
isRange=isRange || modelIndex == modelIndex2 ;
}} else {
return;
}}if (!isPlay && !isRange  || modelIndex >= 0 ) this.vwr.setCurrentModelIndexClear$I$Z(modelIndex, false);
if (isPlay && nFrames == 2  || isRange  || isHyphen ) {
if (modelIndex2 < 0) modelIndex2=this.vwr.ms.getModelNumberIndex$I$Z$Z(frameList[1], useModelNumber, false);
this.vwr.setAnimationOn$Z(false);
this.vwr.am.setAnimationDirection$I(1);
this.vwr.setAnimationRange$I$I(modelIndex, modelIndex2);
this.vwr.setCurrentModelIndexClear$I$Z(isHyphen && !isRange  ? -1 : modelIndex >= 0 ? modelIndex : 0, false);
}if (isPlay) this.vwr.setAnimation$I(4143);
}, p$1);

Clazz.newMeth(C$, 'loadDssr$I$S', function (modelIndex, data) {
if (modelIndex < 0 && (modelIndex=this.vwr.am.cmi) < 0 ) this.errorStr$I$S(30, "load <dssr file>");
if (!data.startsWith$S("{")) data=this.vwr.getFileAsString3$S$Z$S(data, true, "script");
this.clearDefinedVariableAtomSets$();
var map=this.vwr.parseJSONMap$S(data);
this.showString$S(this.vwr.getAnnotationParser$Z(true).fixDSSRJSONMap$java_util_Map(map));
this.vwr.ms.setInfo$I$O$O(modelIndex, "dssr", map);
}, p$1);

Clazz.newMeth(C$, 'cmdMove', function () {
this.checkLength$I(-11);
var dRot=$I$(40,"new3$F$F$F",[this.floatParameter$I(1), this.floatParameter$I(2), this.floatParameter$I(3)]);
var dZoom=this.floatParameter$I(4);
var dTrans=$I$(40,"new3$F$F$F",[this.intParameter$I(5), this.intParameter$I(6), this.intParameter$I(7)]);
var dSlab=this.floatParameter$I(8);
var floatSecondsTotal=this.floatParameter$I(9);
var fps=(this.slen == 11 ? this.intParameter$I(10) : 30);
if (this.chk) return;
this.refresh$Z(false);
if (!this.useThreads$()) floatSecondsTotal=0;
this.vwr.move$org_jmol_api_JmolScriptEvaluator$javajs_util_V3$F$javajs_util_V3$F$F$I(this, dRot, dZoom, dTrans, dSlab, floatSecondsTotal, fps);
if (floatSecondsTotal > 0  && this.isJS ) throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "move", 1]);
}, p$1);

Clazz.newMeth(C$, 'cmdMoveto', function () {
if (this.slen == 2 && this.tokAt$I(1) == 1073742162 ) {
if (!this.chk) this.vwr.tm.stopMotion$();
return;
}var floatSecondsTotal;
if (this.slen == 2 && this.isFloatParameter$I(1) ) {
floatSecondsTotal=this.floatParameter$I(1);
if (this.chk) return;
if (!this.useThreads$()) floatSecondsTotal=0;
if (floatSecondsTotal > 0 ) this.refresh$Z(false);
this.vwr.moveTo$org_jmol_api_JmolScriptEvaluator$F$javajs_util_P3$javajs_util_V3$F$javajs_util_M3$F$F$F$F$javajs_util_P3$F$F$F$F$F$F(this, floatSecondsTotal, null, $I$(13).axisZ, 0, null, 100, 0, 0, 0, null, NaN, NaN, NaN, NaN, NaN, NaN);
if (this.isJS && floatSecondsTotal > 0   && this.vwr.g.waitForMoveTo ) throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "moveTo", 1]);
return;
}var axis=$I$(40).new3$F$F$F(NaN, 0, 0);
var center=null;
var i=1;
floatSecondsTotal=(this.isFloatParameter$I(i) ? this.floatParameter$I(i++) : 2.0);
var degrees=90;
var bsCenter=null;
var isChange=true;
var isMolecular=false;
var xTrans=0;
var yTrans=0;
var zoom=NaN;
var rotationRadius=NaN;
var zoom0=this.vwr.tm.getZoomSetting$();
var navCenter=null;
var xNav=NaN;
var yNav=NaN;
var navDepth=NaN;
var cameraDepth=NaN;
var cameraX=NaN;
var cameraY=NaN;
var pymolView=null;
var q=null;
switch (this.getToken$I(i).tok) {
case 1073742110:
pymolView=this.floatParameterSet$I$I$I(++i, 18, 21);
i=this.iToken + 1;
if (this.chk && this.checkLength$I(i) > 0 ) return;
break;
case 134221850:
if (this.tokAt$I(++i) == 1073742028) {
isMolecular=true;
i++;
}if (this.isAtomExpression$I(i)) {
isMolecular=true;
var ret=Clazz.array(java.lang.Object, [1]);
center=this.centerParameter$I$OA(i, ret);
if (!(Clazz.instanceOf(ret[0], "javajs.util.BS"))) this.invArg$();
bsCenter=ret[0];
q=(this.chk ? Clazz.new_($I$(41,1)) : this.vwr.ms.getQuaternion$I$C(bsCenter.nextSetBit$I(0), this.vwr.getQuaternionFrame$()));
} else {
q=this.getQuaternionParameter$I$javajs_util_BS$Z(i, null, false);
}i=this.iToken + 1;
if (q == null ) this.invArg$();
break;
case 9:
case 8:
case 1073742332:
if (this.isPoint3f$I(i)) {
axis.setT$javajs_util_T3(this.getPoint3f$I$Z$Z(i, true, true));
i=this.iToken + 1;
degrees=this.floatParameter$I(i++);
} else {
var pt4=this.getPoint4f$I(i);
i=this.iToken + 1;
axis.set$F$F$F(pt4.x, pt4.y, pt4.z);
degrees=(pt4.x == 0  && pt4.y == 0   && pt4.z == 0   ? NaN : pt4.w);
}break;
case 1073741954:
axis.set$F$F$F(1, 0, 0);
degrees=0.0;
this.checkLength$I(++i);
break;
case 1073741858:
axis.set$F$F$F(0, 1, 0);
degrees=180.0;
this.checkLength$I(++i);
break;
case 1073741996:
axis.set$F$F$F(0, 1, 0);
this.checkLength$I(++i);
break;
case 1073742126:
axis.set$F$F$F(0, -1, 0);
this.checkLength$I(++i);
break;
case 1073742172:
axis.set$F$F$F(1, 0, 0);
this.checkLength$I(++i);
break;
case 1073741871:
axis.set$F$F$F(-1, 0, 0);
this.checkLength$I(++i);
break;
case 1073741854:
var abc=this.paramAsStr$I(++i);
if (abc.equals$O("-")) abc += this.paramAsStr$I(++i);
this.checkLength$I(++i);
switch ("xyz".indexOf$S(abc)) {
case 0:
q=$I$(41).new4$F$F$F$F(0.5, 0.5, 0.5, -0.5);
break;
case 1:
q=$I$(41).new4$F$F$F$F(0.5, 0.5, 0.5, 0.5);
break;
case 2:
q=$I$(41).new4$F$F$F$F(0, 0, 0, 1);
break;
default:
var uc;
uc=this.vwr.getCurrentUnitCell$();
if (uc == null ) {
uc=this.vwr.getSymTemp$();
uc.setUnitCell$FA$Z(Clazz.array(Float.TYPE, -1, [1, 1, 1, 90, 90, 90]), false);
}q=uc.getQuaternionRotation$S(abc);
if (q == null ) this.invArg$();
}
break;
default:
axis=$I$(40,"new3$F$F$F",[this.floatParameter$I(i++), this.floatParameter$I(i++), this.floatParameter$I(i++)]);
degrees=this.floatParameter$I(i++);
}
if (q != null ) {
var aa;
aa=q.toAxisAngle4f$();
axis.set$F$F$F(aa.x, aa.y, aa.z);
degrees=(isMolecular ? -1 : 1) * (aa.angle * 180.0 / 3.141592653589793);
}if (Float.isNaN$F(axis.x) || Float.isNaN$F(axis.y) || Float.isNaN$F(axis.z)  ) axis.set$F$F$F(0, 0, 0);
 else if (axis.length$() == 0  && degrees == 0  ) degrees=NaN;
isChange=!this.vwr.tm.isInPosition$javajs_util_V3$F(axis, degrees);
if (this.isFloatParameter$I(i)) zoom=this.floatParameter$I(i++);
if (this.isFloatParameter$I(i) && !this.isCenterParameter$I(i) ) {
xTrans=this.floatParameter$I(i++);
yTrans=this.floatParameter$I(i++);
if (!isChange && Math.abs(xTrans - this.vwr.tm.getTranslationXPercent$()) >= 1  ) isChange=true;
if (!isChange && Math.abs(yTrans - this.vwr.tm.getTranslationYPercent$()) >= 1  ) isChange=true;
}if (bsCenter == null  && i != this.slen ) {
var ret=Clazz.array(java.lang.Object, [1]);
center=this.centerParameter$I$OA(i, ret);
if (Clazz.instanceOf(ret[0], "javajs.util.BS")) bsCenter=ret[0];
i=this.iToken + 1;
}if (center != null ) {
if (!isChange && center.distance$javajs_util_T3(this.vwr.tm.fixedRotationCenter) >= 0.1  ) isChange=true;
if (this.isFloatParameter$I(i)) rotationRadius=this.floatParameter$I(i++);
if (!this.isCenterParameter$I(i)) {
if ((rotationRadius == 0  || Float.isNaN$F(rotationRadius) ) && (zoom == 0  || Float.isNaN$F(zoom) ) ) {
var newZoom=Math.abs(p$1.getZoom$I$I$javajs_util_BS$F.apply(this, [0, i, bsCenter, (zoom == 0  ? 0 : zoom0)]));
i=this.iToken + 1;
zoom=newZoom;
} else {
if (!isChange && Math.abs(rotationRadius - this.vwr.getFloat$I(570425388)) >= 0.1  ) isChange=true;
}}if (zoom == 0  || Float.isNaN$F(zoom) ) zoom=100;
if (Float.isNaN$F(rotationRadius)) rotationRadius=0;
if (!isChange && Math.abs(zoom - zoom0) >= 1  ) isChange=true;
if (i != this.slen) {
navCenter=this.centerParameter$I$OA(i, null);
i=this.iToken + 1;
if (i != this.slen) {
xNav=this.floatParameter$I(i++);
yNav=this.floatParameter$I(i++);
}if (i != this.slen) navDepth=this.floatParameter$I(i++);
if (i != this.slen) {
cameraDepth=this.floatParameter$I(i++);
if (!isChange && Math.abs(cameraDepth - this.vwr.tm.getCameraDepth$()) >= 0.01  ) isChange=true;
}if (i + 1 < this.slen) {
cameraX=this.floatParameter$I(i++);
cameraY=this.floatParameter$I(i++);
if (!isChange && Math.abs(cameraX - this.vwr.tm.camera.x) >= 0.01  ) isChange=true;
if (!isChange && Math.abs(cameraY - this.vwr.tm.camera.y) >= 0.01  ) isChange=true;
}}}this.checkLength$I(i);
if (this.chk) return;
if (!isChange) floatSecondsTotal=0;
if (floatSecondsTotal > 0 ) this.refresh$Z(false);
if (!this.useThreads$()) floatSecondsTotal=0;
if (cameraDepth == 0 ) {
cameraDepth=cameraX=cameraY=NaN;
}if (pymolView != null ) this.vwr.tm.moveToPyMOL$org_jmol_api_JmolScriptEvaluator$F$FA(this, floatSecondsTotal, pymolView);
 else this.vwr.moveTo$org_jmol_api_JmolScriptEvaluator$F$javajs_util_P3$javajs_util_V3$F$javajs_util_M3$F$F$F$F$javajs_util_P3$F$F$F$F$F$F(this, floatSecondsTotal, center, axis, degrees, null, zoom, xTrans, yTrans, rotationRadius, navCenter, xNav, yNav, navDepth, cameraDepth, cameraX, cameraY);
if (this.isJS && floatSecondsTotal > 0   && this.vwr.g.waitForMoveTo ) throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "moveTo", 1]);
}, p$1);

Clazz.newMeth(C$, 'isAtomExpression$I', function (i) {
switch (this.tokAt$I(i)) {
case 12290:
case 10:
case 1073742325:
return true;
default:
return false;
}
});

Clazz.newMeth(C$, 'cmdPause', function () {
if (this.chk || this.isJS && !this.allowJSThreads  ) return false;
var msg=this.optParameterAsString$I(1);
if (!this.vwr.getBooleanProperty$S("_useCommandThread")) {
}if (this.vwr.autoExit || !this.vwr.haveDisplay && !$I$(38).isWebGL  ) return false;
if (this.scriptLevel == 0 && this.pc == this.aatoken.length - 1 ) {
this.vwr.scriptStatus$S("nothing to pause: " + msg);
return false;
}msg=(msg.length$() == 0 ? ": RESUME to continue." : ": " + $I$(35).formatText$org_jmol_api_JmolViewer$S(this.vwr, msg));
this.pauseExecution$Z(true);
this.vwr.scriptStatusMsg$S$S("script execution paused" + msg, "script paused for RESUME");
return true;
}, p$1);

Clazz.newMeth(C$, 'cmdPrint', function () {
if (this.slen == 1) {
if (!this.chk) this.showStringPrint$S$Z("\u0000", true);
return;
}this.showStringPrint$S$Z(this.parameterExpressionString$I$I(1, 0), true);
}, p$1);

Clazz.newMeth(C$, 'cmdPrompt', function () {
var msg=null;
if (this.slen == 1) {
if (!this.chk) msg=C$.getContextTrace$org_jmol_viewer_Viewer$org_jmol_script_ScriptContext$javajs_util_SB$Z(this.vwr, this.getScriptContext$S("prompt"), null, true).toString();
} else {
msg=this.parameterExpressionString$I$I(1, 0);
}if (!this.chk) this.vwr.prompt$S$S$SA$Z(msg, null, null, true);
}, p$1);

Clazz.newMeth(C$, 'cmdReset', function () {
if (this.slen == 3 && this.tokAt$I(1) == 134320141 ) {
if (!this.chk) this.vwr.removeFunction$S(this.stringParameter$I(2));
return;
}this.checkLength$I(-2);
if (this.chk) return;
if (this.slen == 1) {
this.vwr.reset$Z(false);
return;
}switch (this.tokAt$I(1)) {
case 36865:
if (!this.chk && this.outputBuffer != null  ) this.outputBuffer.setLength$I(0);
return;
case 134221829:
this.vwr.cacheClear$();
return;
case 1073741936:
p$1.resetError.apply(this, []);
return;
case 1073741995:
this.vwr.stm.resetLighting$();
return;
case 1086324748:
this.vwr.resetShapes$Z(true);
return;
case 134320141:
this.vwr.clearFunctions$();
return;
case 1639976963:
var bsModified=Clazz.new_($I$(10,1));
this.runScript$S(this.vwr.ms.getDefaultStructure$javajs_util_BS$javajs_util_BS(this.vwr.bsA$(), bsModified));
this.vwr.shm.resetBioshapes$javajs_util_BS(bsModified);
return;
case 1648363544:
this.vwr.setData$S$OA$I$I$I$I$I("element_vdw", Clazz.array(java.lang.Object, -1, [null, ""]), 0, 0, 0, 0, 0);
return;
case 1075838996:
this.vwr.ms.resetAromatic$();
return;
case 1611141175:
this.vwr.reset$Z(true);
return;
}
var $var=this.paramAsStr$I(1);
if ($var.charAt$I(0) == "_") this.invArg$();
this.vwr.unsetProperty$S($var);
}, p$1);

Clazz.newMeth(C$, 'resetError', function () {
this.vwr.g.removeParam$S("_errormessage");
}, p$1);

Clazz.newMeth(C$, 'cmdRestrict', function () {
var isBond=(this.tokAt$I(1) == 1677721602);
p$1.cmdSelect$I.apply(this, [isBond ? 2 : 1]);
this.restrictSelected$Z$Z(isBond, true);
}, p$1);

Clazz.newMeth(C$, 'cmdReturn$org_jmol_script_SV', function (tv) {
if (this.chk) return;
var t=this.getContextVariableAsVariable$S$Z("_retval", false);
if (t != null ) {
var v=(tv != null  || this.slen == 1  ? null : this.parameterExpressionToken$I(1));
if (tv == null ) tv=(v == null  ? $I$(8).newI$I(0) : v);
t.value=tv.value;
t.intValue=tv.intValue;
t.tok=tv.tok;
}p$1.cmdGoto$Z.apply(this, [false]);
}, p$1);

Clazz.newMeth(C$, 'cmdRotate$Z$Z', function (isSpin, isSelected) {
if (this.slen == 2) switch (this.getToken$I(1).tok) {
case 1073742335:
if (!this.chk) this.vwr.tm.setSpinOn$();
return;
case 1073742334:
if (!this.chk) this.vwr.tm.setSpinOff$();
return;
}
var bsAtoms=null;
var bsBest=null;
var degreesPerSecond=1.4E-45;
var nPoints=0;
var endDegrees=3.4028235E38;
var isMolecular=false;
var haveRotation=false;
var dihedralList=null;
var ptsA=null;
var points=Clazz.array($I$(24), [2]);
var rotAxis=$I$(40).new3$F$F$F(0, 1, 0);
var translation=null;
var m4=null;
var m3=null;
var is4x4=false;
var direction=1;
var tok;
var q=null;
var helicalPath=false;
var isDegreesPerSecond=false;
var isSeconds=false;
var ptsB=null;
var bsCompare=null;
var invPoint=null;
var invPlane=null;
var axesOrientationRasmol=this.vwr.getBoolean$I(603979806);
for (var i=1; i < this.slen; ++i) {
switch (tok=this.getToken$I(i).tok) {
case 528432:
continue;
case 12290:
case 10:
case 1073742325:
bsBest=this.atomExpressionAt$I(i);
if (translation != null  || q != null   || nPoints == 2 ) {
bsAtoms=bsBest;
ptsB=null;
isSelected=true;
break;
}case 1073742332:
case 8:
case 1073742330:
haveRotation=true;
if (nPoints == 2) nPoints=0;
var pt1=this.centerParameterForModel$I$I$OA(i, this.vwr.am.cmi, null);
if (!this.chk && tok == 1073742330  && this.tokAt$I(i + 2) != 268435520 ) {
isMolecular=true;
var data=Clazz.array(java.lang.Object, -1, [this.objectNameParameter$I(++i), Integer.valueOf$I(this.vwr.am.cmi), null]);
rotAxis=(this.getShapePropertyData$I$S$OA(22, "getSpinAxis", data) ? data[2] : null);
}points[nPoints++]=pt1;
break;
case 1611141175:
isSpin=true;
continue;
case 1073741988:
case 1073742028:
isMolecular=true;
continue;
case 1113589787:
isSelected=true;
break;
case 268435504:
continue;
case 2:
case 3:
if (isSpin) {
if (degreesPerSecond == 1.4E-45 ) {
degreesPerSecond=this.floatParameter$I(i);
} else if (endDegrees == 3.4028235E38 ) {
endDegrees=degreesPerSecond;
degreesPerSecond=this.floatParameter$I(i);
} else {
this.invArg$();
}} else {
if (endDegrees == 3.4028235E38 ) {
endDegrees=this.floatParameter$I(i);
} else if (degreesPerSecond == 1.4E-45 ) {
degreesPerSecond=this.floatParameter$I(i);
isSpin=true;
} else {
this.invArg$();
}}if (i == this.slen - 2 && (this.tokAt$I(i + 1) == 1073741824 || this.tokAt$I(i + 1) == 4 ) ) {
var s=this.paramAsStr$I(++i).toLowerCase$();
if (s.equals$O("dps")) {
isDegreesPerSecond=true;
} else if (s.equals$O("sec")) {
isSeconds=true;
}}break;
case 268435616:
direction=-1;
continue;
case 1111492629:
haveRotation=true;
rotAxis.set$F$F$F(direction, 0, 0);
continue;
case 1111492630:
haveRotation=true;
rotAxis.set$F$F$F(0, direction, 0);
continue;
case 1111492631:
haveRotation=true;
rotAxis.set$F$F$F(0, 0, (axesOrientationRasmol && !isMolecular  ? -direction : direction));
continue;
case 9:
case 134221850:
case 1073741864:
if (tok == 134221850) i++;
haveRotation=true;
if ((q=this.getQuaternionParameter$I$javajs_util_BS$Z(i, bsBest, tok == 1073741864)) != null ) {
if (q.q0 == 0 ) q.q0=1.0E-10;
rotAxis.setT$javajs_util_T3(q.getNormal$());
endDegrees=q.getTheta$();
}break;
case 134217750:
var pts;
var n;
if (this.paramAsStr$I(i + 1).equalsIgnoreCase$S("picked")) {
i++;
var lst=this.vwr.getPOrNull$S("pickedList");
n=lst.size$();
if (n < 3) return;
pts=Clazz.array($I$(24), [3]);
for (var j=0; j < 3; j++) pts[j]=this.vwr.ms.getAtomSetCenter$javajs_util_BS($I$(8,"getBitSet$org_jmol_script_SV$Z",[lst.get$I(n - 3 + j), false]));

} else if (this.isArrayParameter$I(i + 1)) {
pts=this.getPointArray$I$I$Z(++i, -1, false);
i=this.iToken;
} else {
pts=Clazz.array($I$(24), [3]);
for (var j=0; j < 3; j++) {
pts[j]=this.centerParameter$I$OA(++i, null);
i=this.iToken;
}
}n=pts.length;
if (n < 3) return;
q=$I$(41).getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3(pts[n - 3], pts[n - 2], pts[n - 1]);
q=$I$(41).new4$F$F$F$F(1, 0, 0, 0).mulQ$javajs_util_Quat(q.inv$().div$javajs_util_Quat(this.vwr.tm.getRotationQ$()));
rotAxis.setT$javajs_util_T3(q.getNormal$());
endDegrees=q.getTheta$();
break;
case 134217731:
haveRotation=true;
if (this.isPoint3f$I(++i)) {
rotAxis.setT$javajs_util_T3(this.centerParameter$I$OA(i, null));
break;
}var p4=this.getPoint4f$I(i);
rotAxis.set$F$F$F(p4.x, p4.y, p4.z);
endDegrees=p4.w;
q=$I$(41).newVA$javajs_util_T3$F(rotAxis, endDegrees);
break;
case 1073742328:
isSelected=true;
isMolecular=true;
haveRotation=true;
if (this.isArrayParameter$I(++i)) {
dihedralList=this.floatParameterSet$I$I$I(i, 6, 2147483647);
i=this.iToken;
} else {
var iAtom1=this.atomExpressionAt$I(i).nextSetBit$I(0);
var iAtom2=this.atomExpressionAt$I(++this.iToken).nextSetBit$I(0);
if (iAtom1 < 0 || iAtom2 < 0 ) return;
bsAtoms=this.vwr.getBranchBitSet$I$I$Z(iAtom2, iAtom1, true);
points[0]=this.vwr.ms.at[iAtom1];
points[1]=this.vwr.ms.at[iAtom2];
nPoints=2;
}break;
case 4160:
translation=$I$(40,"newV$javajs_util_T3",[this.centerParameter$I$OA(++i, null)]);
isMolecular=isSelected=true;
break;
case 136314895:
helicalPath=true;
continue;
case 1296041986:
var symop=this.intParameter$I(++i);
if (this.chk) continue;
var info=this.vwr.getSymTemp$().getSpaceGroupInfo$org_jmol_modelset_ModelSet$S$I$Z$FA(this.vwr.ms, null, -1, false, null);
var op=(info == null  ? null : info.get$O("operations"));
if (symop == 0 || op == null   || op.length < Math.abs(symop) ) this.invArg$();
op=op[Math.abs(symop) - 1];
translation=op[5];
invPoint=op[6];
points[0]=op[7];
if (op[8] != null ) rotAxis=op[8];
endDegrees=(op[9]).intValue$();
if (symop < 0) {
endDegrees=-endDegrees;
if (translation != null ) translation.scale$F(-1);
}if (endDegrees == 0  && points[0] != null  ) {
rotAxis.normalize$();
$I$(42,"getPlaneThroughPoint$javajs_util_T3$javajs_util_V3$javajs_util_P4",[points[0], rotAxis, invPlane=Clazz.new_($I$(43,1))]);
}q=$I$(41).newVA$javajs_util_T3$F(rotAxis, endDegrees);
nPoints=(points[0] == null  ? 0 : 1);
isMolecular=true;
haveRotation=true;
isSelected=true;
continue;
case 134221831:
bsCompare=this.atomExpressionAt$I(++i);
ptsA=this.vwr.ms.getAtomPointVector$javajs_util_BS(bsCompare);
if (ptsA == null ) {
this.iToken=i;
this.invArg$();
}i=this.iToken;
ptsB=this.getPointVector$org_jmol_script_T$I(this.getToken$I(++i), i);
if (ptsB == null  || ptsA.size$() != ptsB.size$() ) {
this.iToken=i;
this.invArg$();
}m4=Clazz.new_($I$(44,1));
points[0]=Clazz.new_($I$(24,1));
nPoints=1;
$I$(45).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.Eigen", this.vwr, "script");
var stddev=(this.chk ? 0 : $I$(42).getTransformMatrix4$javajs_util_Lst$javajs_util_Lst$javajs_util_M4$javajs_util_P3(ptsA, ptsB, m4, points[0]));
if (stddev > 0.001 ) ptsB=null;
case 12:
case 11:
haveRotation=true;
m3=Clazz.new_($I$(46,1));
if (tok == 12) {
is4x4=true;
m4=this.theToken.value;
}if (m4 != null ) {
translation=Clazz.new_($I$(40,1));
m4.getTranslation$javajs_util_T3(translation);
m4.getRotationScale$javajs_util_M3(m3);
} else {
m3=this.theToken.value;
}q=(this.chk ? Clazz.new_($I$(41,1)) : $I$(41).newM$javajs_util_M3(m3));
rotAxis.setT$javajs_util_T3(q.getNormal$());
endDegrees=q.getTheta$();
isMolecular=true;
break;
default:
this.invArg$();
}
i=this.iToken;
}
if (this.chk) return;
if (dihedralList != null ) {
if (endDegrees != 3.4028235E38 ) {
isSpin=true;
degreesPerSecond=endDegrees;
}}if (isSelected && bsAtoms == null  ) bsAtoms=this.vwr.bsA$();
if (bsCompare != null ) {
isSelected=true;
if (bsAtoms == null ) bsAtoms=bsCompare;
}if (q != null  && !isSeconds  && !isDegreesPerSecond ) {
isDegreesPerSecond=(degreesPerSecond > 0 );
isSeconds=!isDegreesPerSecond;
}var rate=(degreesPerSecond == 1.4E-45  ? 10 : endDegrees == 3.4028235E38  ? degreesPerSecond : isDegreesPerSecond ? degreesPerSecond : isSeconds ? (endDegrees < 0  ? -1 : 1) * Math.abs(endDegrees / degreesPerSecond) : (degreesPerSecond < 0 ) == (q == null  ? endDegrees > 0  : true)  ? -endDegrees / degreesPerSecond : degreesPerSecond);
if (q == null  && endDegrees < 0   && rate > 0  ) rate=-rate;
if (dihedralList != null ) {
if (!isSpin) {
this.vwr.setDihedrals$FA$javajs_util_BSA$F(dihedralList, null, 1);
return;
}translation=null;
}if (q != null ) {
if (nPoints == 0 && translation != null   && !is4x4 ) points[0]=this.vwr.ms.getAtomSetCenter$javajs_util_BS(bsAtoms != null  ? bsAtoms : isSelected ? this.vwr.bsA$() : this.vwr.getAllAtoms$());
if (helicalPath && translation != null  ) {
points[1]=$I$(24).newP$javajs_util_T3(points[0]);
points[1].add$javajs_util_T3(translation);
var ret=$I$(42).computeHelicalAxis$javajs_util_P3$javajs_util_P3$javajs_util_Quat(points[0], points[1], q);
points[0]=ret[0];
var theta=(ret[3]).x;
if (theta != 0 ) {
translation=ret[1];
rotAxis=$I$(40).newV$javajs_util_T3(translation);
if (theta < 0 ) rotAxis.scale$F(-1);
}m4=null;
}if (isSpin && m4 == null  ) m4=$I$(47,"getMatrix4f$javajs_util_M3$javajs_util_T3",[q.getMatrix$(), translation]);
if (points[0] != null ) nPoints=1;
}if (invPoint != null ) {
this.vwr.invertAtomCoordPt$javajs_util_P3$javajs_util_BS(invPoint, bsAtoms);
if (rotAxis == null ) return;
}if (invPlane != null ) {
this.vwr.invertAtomCoordPlane$javajs_util_P4$javajs_util_BS(invPlane, bsAtoms);
if (rotAxis == null ) return;
}var requiresThread=(isSpin && (!this.vwr.headless || endDegrees == 3.4028235E38  ) );
if (isSpin && !requiresThread ) isSpin=false;
if (nPoints < 2 && dihedralList == null  ) {
if (!isMolecular) {
if (requiresThread && bsAtoms == null   && !this.useThreads$() ) {
isSpin=false;
if (endDegrees == 3.4028235E38 ) return;
}if (this.vwr.rotateAxisAngleAtCenter$org_jmol_api_JmolScriptEvaluator$javajs_util_P3$javajs_util_V3$F$F$Z$javajs_util_BS(this, points[0], rotAxis, rate, endDegrees, isSpin, bsAtoms)) {
if (this.isJS && isSpin && bsAtoms == null    && this.vwr.g.waitForMoveTo  && endDegrees != 3.4028235E38  ) throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "rotate", 1]);
}return;
}if (nPoints == 0) points[0]=Clazz.new_($I$(24,1));
points[1]=$I$(24).newP$javajs_util_T3(points[0]);
points[1].add$javajs_util_T3(rotAxis);
nPoints=2;
}if (nPoints == 0) points[0]=Clazz.new_($I$(24,1));
if (nPoints < 2 || points[0].distance$javajs_util_T3(points[1]) == 0  ) {
points[1]=$I$(24).newP$javajs_util_T3(points[0]);
points[1].y += 1.0;
}if (endDegrees == 3.4028235E38 ) endDegrees=0;
if (endDegrees != 0  && translation != null   && !haveRotation ) translation.scale$F(endDegrees / translation.length$());
if (isSpin && translation != null   && (endDegrees == 0  || degreesPerSecond == 0  ) ) {
endDegrees=0.01;
rate=(degreesPerSecond == 1.4E-45  ? 0.01 : degreesPerSecond < 0  ? -endDegrees / degreesPerSecond : degreesPerSecond * 0.01 / translation.length$());
degreesPerSecond=0.01;
}if (bsAtoms != null  && isSpin  && ptsB == null   && m4 != null  ) {
ptsA=this.vwr.ms.getAtomPointVector$javajs_util_BS(bsAtoms);
ptsB=$I$(42).transformPoints$javajs_util_Lst$javajs_util_M4$javajs_util_P3(ptsA, m4, points[0]);
}if (bsAtoms != null  && !isSpin  && ptsB != null  ) {
this.vwr.setAtomCoords$javajs_util_BS$I$O(bsAtoms, 1145047050, ptsB);
} else {
if (requiresThread && !this.useThreads$() ) return;
if (this.vwr.rotateAboutPointsInternal$org_jmol_api_JmolScriptEvaluator$javajs_util_P3$javajs_util_P3$F$F$Z$javajs_util_BS$javajs_util_V3$javajs_util_Lst$FA$javajs_util_M4(this, points[0], points[1], rate, endDegrees, isSpin, bsAtoms, translation, ptsB, dihedralList, is4x4 ? m4 : null) && this.isJS && isSpin  ) throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "rotate", 1]);
}});

Clazz.newMeth(C$, 'cmdRestore', function () {
if (this.slen > 1) {
var saveName=this.optParameterAsString$I(2);
var tok=this.tokAt$I(1);
switch (tok) {
case 1814695966:
if (!this.chk) this.setCurrentCagePts$javajs_util_T3A$S(null, null);
return;
case 1073742077:
case 1073742132:
case 1073742139:
var floatSecondsTotal=(this.slen > 3 ? this.floatParameter$I(3) : 0);
if (floatSecondsTotal < 0 ) this.invArg$();
if (this.chk) return;
var type="";
switch (tok) {
case 1073742077:
type="Orientation";
this.vwr.stm.restoreOrientation$S$F$Z(saveName, floatSecondsTotal, true);
break;
case 1073742132:
type="Rotation";
this.vwr.stm.restoreOrientation$S$F$Z(saveName, floatSecondsTotal, false);
break;
case 1073742139:
type="Scene";
this.vwr.stm.restoreScene$S$F(saveName, floatSecondsTotal);
break;
}
if (this.isJS && floatSecondsTotal > 0   && this.vwr.g.waitForMoveTo ) throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "restore" + type, 1]);
return;
}
this.checkLength23$();
switch (tok) {
case 1677721602:
if (!this.chk) this.vwr.stm.restoreBonds$S(saveName);
return;
case 14:
if (this.chk) return;
var sc=this.vwr.stm.getContext$S(saveName);
if (sc != null ) {
this.restoreScriptContext$org_jmol_script_ScriptContext$Z$Z$Z(sc, true, false, false);
if (this.thisContext != null ) {
this.thisContext.setMustResume$();
this.mustResumeEval=true;
this.tQuiet=true;
}}return;
case 1073742329:
if (this.chk) return;
var script=this.vwr.stm.getSavedCoordinates$S(saveName);
if (script == null ) this.invArg$();
this.runScript$S(script);
this.vwr.checkCoordinatesChanged$();
return;
case 1073742140:
if (!this.chk) this.vwr.stm.restoreSelection$S(saveName);
return;
case 1073742158:
if (this.chk) return;
var state=this.vwr.stm.getSavedState$S(saveName);
if (state == null ) this.invArg$();
this.runScript$S(state);
return;
case 1639976963:
if (this.chk) return;
var shape=this.vwr.stm.getSavedStructure$S(saveName);
if (shape == null ) this.invArg$();
this.runScript$S(shape);
return;
}
}this.errorStr2$I$S$S(53, "RESTORE", "bonds? context? coordinates? orientation? rotation? selection? state? structure?");
}, p$1);

Clazz.newMeth(C$, 'cmdSave', function () {
if (this.slen > 1) {
var saveName=this.optParameterAsString$I(2);
switch (this.tokAt$I(1)) {
case 1677721602:
if (!this.chk) this.vwr.stm.saveBonds$S(saveName);
return;
case 14:
if (!this.chk) p$1.saveContext$S.apply(this, [saveName]);
return;
case 1073742329:
if (!this.chk) this.vwr.stm.saveCoordinates$S$javajs_util_BS(saveName, this.vwr.bsA$());
return;
case 1073742077:
case 1073742132:
if (!this.chk) this.vwr.stm.saveOrientation$S$FA(saveName, null);
return;
case 1073742140:
if (!this.chk) {
this.vwr.stm.saveSelection$S$javajs_util_BS(saveName, this.vwr.bsA$());
this.vwr.stm.restoreSelection$S(saveName);
}return;
case 1073742158:
if (!this.chk) this.vwr.stm.saveState$S(saveName);
return;
case 1639976963:
if (!this.chk) this.vwr.stm.saveStructure$S(saveName);
return;
}
}this.errorStr2$I$S$S(53, "SAVE", "bonds? context? coordinates? orientation? rotation? selection? state? structure?");
}, p$1);

Clazz.newMeth(C$, 'cmdScript$I$S$S', function (tok, filename, theScript) {
if (tok == 134238732) {
this.checkLength$I(2);
if (!this.chk) this.vwr.jsEval$S(this.paramAsStr$I(1));
return;
}var loadCheck=true;
var isCheck=false;
var doStep=false;
var isAsync=this.vwr.async;
var lineNumber=0;
var pc=0;
var lineEnd=0;
var pcEnd=0;
var i=1;
var localPath=null;
var remotePath=null;
var scriptPath=null;
var params=null;
if (tok == 4124) {
i=-2;
}if (filename == null  && theScript == null  ) {
tok=this.tokAt$I(i);
if (tok != 4) this.error$I(16);
filename=this.paramAsStr$I(i);
if (filename.equalsIgnoreCase$S("async")) {
isAsync=true;
filename=this.paramAsStr$I(++i);
}if (filename.equalsIgnoreCase$S("applet")) {
var appID=this.paramAsStr$I(++i);
theScript=this.parameterExpressionString$I$I(++i, 0);
this.checkLast$I(this.iToken);
if (this.chk) return;
if (appID.length$() == 0 || appID.equals$O("all") ) appID="*";
if (!appID.equals$O(".")) {
this.vwr.jsEval$S(appID + "\u0001" + theScript );
if (!appID.equals$O("*")) return;
}} else {
tok=this.tokAt$I(this.slen - 1);
doStep=(tok == 266298);
if (filename.equalsIgnoreCase$S("inline")) {
theScript=this.parameterExpressionString$I$I(++i, (doStep ? this.slen - 1 : 0));
i=this.iToken;
} else {
while (filename.equalsIgnoreCase$S("localPath") || filename.equalsIgnoreCase$S("remotePath") || filename.equalsIgnoreCase$S("scriptPath")  ){
if (filename.equalsIgnoreCase$S("localPath")) localPath=this.paramAsStr$I(++i);
 else if (filename.equalsIgnoreCase$S("scriptPath")) scriptPath=this.paramAsStr$I(++i);
 else remotePath=this.paramAsStr$I(++i);
filename=this.paramAsStr$I(++i);
}
filename=this.checkFileExists$S$Z$S$I$Z("SCRIPT_", isAsync, filename, i, true);
}if ((tok=this.tokAt$I(++i)) == 1073741878) {
isCheck=true;
tok=this.tokAt$I(++i);
}if (tok == 1073742050) {
loadCheck=false;
tok=this.tokAt$I(++i);
}if (tok == 1073741998 || tok == 1140850692 ) {
i++;
lineEnd=lineNumber=Math.max(this.intParameter$I(i++), 0);
if (this.checkToken$I(i)) {
if (this.getToken$I(i).tok == 268435616) lineEnd=(this.checkToken$I(++i) ? this.intParameter$I(i++) : 0);
 else lineEnd=-this.intParameter$I(i++);
if (lineEnd <= 0) this.invArg$();
}} else if (tok == 1073741890 || tok == 1073741892 ) {
i++;
pc=Math.max(this.intParameter$I(i++) - 1, 0);
pcEnd=pc + 1;
if (this.checkToken$I(i)) {
if (this.getToken$I(i).tok == 268435616) pcEnd=(this.checkToken$I(++i) ? this.intParameter$I(i++) : 0);
 else pcEnd=-this.intParameter$I(i++);
if (pcEnd <= 0) this.invArg$();
}}i=-i;
}} else if (filename != null  && isAsync ) {
filename=this.checkFileExists$S$Z$S$I$Z("SCRIPT_", isAsync, filename, i, true);
}if (i < 0) {
if (this.tokAt$I(i=-i) == 268435472) {
params=this.parameterExpressionList$I$I$Z(i, -1, false);
i=this.iToken + 1;
}this.checkLength$I(doStep ? i + 1 : i);
}if (this.chk && !this.isCmdLine_c_or_C_Option ) return;
if (this.isCmdLine_c_or_C_Option) isCheck=true;
var wasSyntaxCheck=this.chk;
var wasScriptCheck=this.isCmdLine_c_or_C_Option;
if (isCheck) this.chk=this.isCmdLine_c_or_C_Option=true;
p$1.pushContext$org_jmol_script_ContextToken$S.apply(this, [null, "SCRIPT"]);
this.contextPath += " >> " + filename;
if (theScript == null  ? p$1.compileScriptFileInternal$S$S$S$S.apply(this, [filename, localPath, remotePath, scriptPath]) : this.compileScript$S$S$Z(null, theScript, false)) {
this.pcEnd=pcEnd;
this.lineEnd=lineEnd;
while (pc < this.lineNumbers.length && this.lineNumbers[pc] < lineNumber )pc++;

this.pc=pc;
var saveLoadCheck=this.isCmdLine_C_Option;
this.isCmdLine_C_Option&=loadCheck;
this.executionStepping|=doStep;
if (this.contextVariables == null ) this.contextVariables=Clazz.new_($I$(12,1));
this.contextVariables.put$O$O("_arguments", (params == null  ? $I$(8,"getVariableAI$IA",[Clazz.array(Integer.TYPE, -1, [])]) : $I$(8).getVariableList$javajs_util_Lst(params)));
this.contextVariables.put$O$O("_argcount", $I$(8,"newI$I",[params == null  ? 0 : params.size$()]));
if (isCheck) this.listCommands=true;
var timeMsg=this.vwr.getBoolean$I(603979934);
if (timeMsg) $I$(6).startTimer$S("script");
this.dispatchCommands$Z$Z$Z(false, false, false);
if (this.isStateScript) $I$(3).setStateScriptVersion$org_jmol_viewer_Viewer$S(this.vwr, null);
if (timeMsg) this.showString$S($I$(6).getTimerMsg$S$I("script", 0));
this.isCmdLine_C_Option=saveLoadCheck;
this.popContext$Z$Z(false, false);
} else {
$I$(6,"error$S",[$I$(30).$$S("script ERROR: ") + this.errorMessage]);
this.popContext$Z$Z(false, false);
if (wasScriptCheck) {
this.setErrorMessage$S(null);
} else {
this.evalError$S$S(null, null);
}}this.chk=wasSyntaxCheck;
this.isCmdLine_c_or_C_Option=wasScriptCheck;
});

Clazz.newMeth(C$, 'cmdSelect$I', function (i) {
if (this.slen == 1) {
this.vwr.select$javajs_util_BS$Z$I$Z(null, false, 0, !this.doReport$());
return;
}if (this.slen == 2 && this.tokAt$I(1) == 1073742072 ) return;
var tok=this.tokAt$I(2);
this.vwr.slm.noneSelected=Boolean.valueOf$Z(this.slen == 4 && tok == 1073742333 );
var bs=null;
switch (tok) {
case 10:
if (Clazz.instanceOf(this.getToken$I(2).value, "org.jmol.modelset.BondSet") || this.tokAt$I(2) == 1677721602 && this.getToken$I(3).tok == 10  ) {
if (this.slen != this.iToken + 2) this.invArg$();
if (!this.chk) this.vwr.selectBonds$javajs_util_BS(this.theToken.value);
return;
}break;
case 1745489939:
case 1677721602:
if (this.slen == 5 && this.tokAt$I(3) == 10 ) {
bs=this.getToken$I(3).value;
this.iToken++;
} else if (this.isArrayParameter$I(4)) {
bs=Clazz.new_($I$(10,1));
var a=this.expandFloatArray$FA$I(this.floatParameterSet$I$I$I(4, 0, 2147483647), 0);
for (var ii=a.length; --ii >= 0; ) if (a[ii] >= 0) bs.set$I(a[ii]);

}this.checkLast$I(this.iToken);
if (this.chk) return;
if (bs == null ) this.invArg$();
if (tok == 1745489939) this.setShapeProperty$I$S$O(6, "select", bs);
 else this.vwr.selectBonds$javajs_util_BS(bs);
return;
}
var addRemove=0;
var isGroup=false;
if (this.getToken$I(1).intValue == 0 && this.theTok != 1073742334 ) {
var v=this.parameterExpressionToken$I(0).value;
if (!(Clazz.instanceOf(v, "javajs.util.BS"))) this.invArg$();
this.checkLast$I(this.iToken);
bs=v;
} else {
tok=this.tokAt$I(i);
switch (tok) {
case 1073742335:
case 1073742334:
if (!this.chk) this.vwr.setSelectionHalosEnabled$Z(tok == 1073742335);
tok=this.tokAt$I(++i);
if (tok == 0) return;
break;
}
switch (tok) {
case 1275069441:
case 1073742119:
addRemove=tok;
tok=this.tokAt$I(++i);
}
isGroup=(tok == 1086324742);
if (isGroup) tok=this.tokAt$I(++i);
bs=this.atomExpressionAt$I(i);
}if (this.chk) return;
if (this.isBondSet) {
this.vwr.selectBonds$javajs_util_BS(bs);
} else {
if (bs.length$() > this.vwr.ms.ac) {
var bs1=this.vwr.getAllAtoms$();
bs1.and$javajs_util_BS(bs);
bs=bs1;
}this.vwr.select$javajs_util_BS$Z$I$Z(bs, isGroup, addRemove, !this.doReport$());
}}, p$1);

Clazz.newMeth(C$, 'cmdSelectionHalos$I', function (pt) {
var showHalo=false;
switch (pt == this.slen ? 1073742335 : this.getToken$I(pt).tok) {
case 1073742335:
case 1113589787:
showHalo=true;
case 1073742334:
case 1073742333:
case 1073742056:
this.setBooleanProperty$S$Z("selectionHalos", showHalo);
break;
default:
this.invArg$();
}
}, p$1);

Clazz.newMeth(C$, 'cmdSet', function () {
if (this.slen == 1) {
this.showString$S(this.vwr.getAllSettings$S(null));
return;
}var isJmolSet=(this.paramAsStr$I(0).equals$O("set"));
var key=this.optParameterAsString$I(1);
if (isJmolSet && this.slen == 2  && key.indexOf$S("?") >= 0 ) {
this.showString$S(this.vwr.getAllSettings$S(key.substring$I$I(0, key.indexOf$S("?"))));
return;
}var tok=this.getToken$I(1).tok;
var newTok=0;
var sval;
var ival=2147483647;
var b;
var pt;
var showing=(!this.chk && this.doReport$() && !(this.st[0].value).equals$O("var")  );
switch (tok) {
case 553648146:
case 603979866:
case 603979903:
case 603979924:
case 603979960:
case 603979962:
case 603979964:
case 603979965:
case 603979970:
if (this.isStateScript) return;
break;
case 1611272194:
p$1.cmdAxes$I.apply(this, [2]);
return;
case 1610616835:
p$1.cmdBackground$I.apply(this, [2]);
return;
case 1678381065:
p$1.cmdBoundbox$I.apply(this, [2]);
return;
case 1611272202:
p$1.cmdFrank$I.apply(this, [2]);
return;
case 1610616855:
p$1.cmdHistory$I.apply(this, [2]);
return;
case 1825200146:
p$1.cmdLabel$I$javajs_util_BS.apply(this, [2, null]);
return;
case 1814695966:
p$1.cmdUnitcell$I.apply(this, [2]);
return;
case 536870920:
this.sm.loadShape$I(8);
this.setShapeProperty$I$S$O(8, "highlight", (this.tokAt$I(2) == 1073742334 ? null : this.atomExpressionAt$I(2)));
return;
case 1610625028:
case 1611141171:
p$1.cmdSelectionHalos$I.apply(this, [2]);
return;
case 536875070:
p$1.cmdTimeout$I.apply(this, [2]);
return;
case 536870932:
var o=(this.isArrayParameter$I(2) ? this.floatParameterSet$I$I$I(2, 2, 2) : this.tokAt$I(2) == 2 ? Clazz.array(Float.TYPE, -1, [this.intParameter$I(2), this.intParameter$I(3)]) : this.stringParameter$I(2));
this.checkLast$I(this.iToken);
if (this.chk) return;
if (Clazz.instanceOf(o, "java.lang.String")) {
if (this.vwr.fm.loadImage$O$S$Z(o, "\u0000windowImage", !this.useThreads$())) throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "windowImage", 1]);
} else {
this.vwr.setWindowDimensions$FA(o);
}return;
case 1639976963:
var type=$I$(48,"getProteinStructureType$S",[this.paramAsStr$I(2)]);
if (type === $I$(48).NOT ) this.invArg$();
var data=this.floatParameterSet$I$I$I(3, 0, 2147483647);
if (data.length % 4 != 0) this.invArg$();
this.vwr.setStructureList$FA$org_jmol_c_STR(data, type);
this.checkLast$I(this.iToken);
return;
case 545259526:
ival=this.getArgbParam$I(2);
if (!this.chk) p$1.setObjectArgb$S$I.apply(this, ["axes", ival]);
return;
case 1610612737:
b=false;
switch (this.getToken$I(this.checkLast$I(2)).tok) {
case 268435552:
break;
case 268435536:
b=true;
break;
default:
this.invArg$();
}
this.setBooleanProperty$S$Z("bondModeOr", b);
return;
case 536870916:
case 536870917:
if (this.chk) return;
var iLevel=(this.tokAt$I(2) == 1073742334 || this.tokAt$I(2) == 2 && this.intParameter$I(2) == 0   ? 4 : (tok == 536870917 ? 6 : 5));
$I$(6).setLogLevel$I(iLevel);
this.setIntProperty$S$I("logLevel", iLevel);
if (iLevel == 4) {
this.vwr.setDebugScript$Z(false);
if (showing) this.vwr.showParameter$S$Z$I("debugScript", true, 80);
}this.setDebugging$();
if (showing) this.vwr.showParameter$S$Z$I("logLevel", true, 80);
return;
case 537022465:
p$1.cmdSetEcho.apply(this, []);
return;
case 1610612738:
p$1.cmdFont$I$F.apply(this, [5, this.checkLength23$() == 2 ? 0 : this.floatParameter$I(2)]);
return;
case 1613238294:
var bool=false;
switch (this.tokAt$I(this.checkLast$I(2))) {
case 1114249217:
bool=true;
case 2097178:
this.setBooleanProperty$S$Z("hbondsBackbone", bool);
break;
case 1073742150:
bool=true;
case 1073741926:
this.setBooleanProperty$S$Z("hbondsSolid", bool);
break;
default:
this.invArg$();
}
return;
case 1745489939:
case 537006096:
switch (tok=this.tokAt$I(this.checkLast$I(2))) {
case 1073742335:
case 1073742334:
this.setBooleanProperty$S$Z("measurementlabels", tok == 1073742335);
return;
case 1073741926:
case 2:
case 3:
this.vwr.shm.loadShape$I(6);
var mad10=this.getSetAxesTypeMad10$I(2);
if (mad10 != 2147483647) this.setShapeSizeBs$I$I$javajs_util_BS(6, tok == 3 ? (mad10/10|0) : mad10, null);
return;
}
p$1.setUnits$S$I.apply(this, [this.paramAsStr$I(2), 545259568]);
return;
case 1611141176:
b=false;
switch (this.tokAt$I(this.checkLast$I(2))) {
case 1114249217:
b=true;
break;
case 2097178:
break;
default:
this.invArg$();
}
this.setBooleanProperty$S$Z("ssbondsBackbone", b);
return;
case 1610612741:
p$1.cmdSetLabel$S.apply(this, ["toggle"]);
return;
case 536870930:
var v=Clazz.new_($I$(23,1));
for (var i=2; i < this.slen; i++) {
var argb=this.getArgbParam$I(i);
v.addLast$O(Integer.valueOf$I(argb));
i=this.iToken;
}
if (this.chk) return;
var n=v.size$();
var scale=Clazz.array(Integer.TYPE, [n]);
for (var i=n; --i >= 0; ) scale[i]=v.get$I(i).intValue$();

this.vwr.cm.ce.setUserScale$IA(scale);
return;
case 553648188:
if (this.isFloatParameter$I(2)) {
this.checkLength$I(3);
this.setIntProperty$S$I("zSlab", (this.floatParameter$I(2)|0));
pt=null;
} else {
if (!this.isCenterParameter$I(2)) this.invArg$();
pt=this.centerParameter$I$OA(2, null);
this.checkLength$I(this.iToken + 1);
}if (!this.chk) this.vwr.tm.zSlabPoint=(pt == null  ? null : $I$(24).newP$javajs_util_T3(pt));
return;
}
var justShow=true;
switch (tok) {
case 536870914:
if (this.slen > 2) {
var modelDotted=p$1.getSettingStr$I$Z.apply(this, [2, false]);
var modelNumber;
var useModelNumber=false;
if (modelDotted.indexOf$S(".") < 0) {
modelNumber=$I$(7).parseInt$S(modelDotted);
useModelNumber=true;
} else {
modelNumber=$I$(28).getFloatEncodedInt$S(modelDotted);
}if (this.chk) return;
var modelIndex=this.vwr.ms.getModelNumberIndex$I$Z$Z(modelNumber, useModelNumber, true);
this.vwr.setBackgroundModelIndex$I(modelIndex);
return;
}break;
case 1648363544:
if (this.chk) return;
this.vwr.setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA(this.vwr.getAllAtoms$(), 1648363544, -1, NaN, null, null, null);
if (this.slen > 2 && "probe".equalsIgnoreCase$S(p$1.getSettingStr$I$Z.apply(this, [2, false])) ) {
this.runScript$S("#VDW radii for PROBE;{_H}.vdw = 1.0;{_H and connected(_C) and not connected(within(smiles,\'[a]\'))}.vdw = 1.17;{_C}.vdw = 1.75;{_C and connected(3) and connected(_O)}.vdw = 1.65;{_N}.vdw = 1.55;{_O}.vdw = 1.4;{_P}.vdw = 1.8;{_S}.vdw = 1.8;message VDW radii for H, C, N, O, P, and S set according to Word, et al., J. Mol. Biol. (1999) 285, 1711-1733");
return;
}newTok=545259555;
case 545259555:
if (this.slen > 2) {
sval=this.paramAsStr$I(2);
if (this.slen == 3 && $I$(34).getVdwType$S(sval) == null   && $I$(34,"getVdwType$S",[sval=p$1.getSettingStr$I$Z.apply(this, [2, false])]) == null  ) this.invArg$();
this.setStringProperty$S$S(key, sval);
}break;
case 536870918:
if (this.slen > 2) {
var $var=this.parameterExpressionToken$I(2);
if ($var.tok == 8) pt=$var.value;
 else {
pt=Clazz.new_($I$(24,1));
var ijk=$var.asInt$();
if (ijk >= 100) $I$(49).ijkToPoint3f$I$javajs_util_P3$I$I(ijk, pt, -1, 0);
}if (!this.chk) this.vwr.setDefaultLattice$javajs_util_P3(pt);
}break;
case 545259552:
case 545259545:
if (this.slen > 2) {
if ((this.theTok=this.tokAt$I(2)) == 1073741991 || this.theTok == 1073742116 ) {
sval=this.paramAsStr$I(this.checkLast$I(2));
} else {
sval=p$1.getSettingStr$I$Z.apply(this, [2, false]);
}this.setStringProperty$S$S(key, sval);
}break;
case 1631586315:
ival=p$1.getSettingInt$I.apply(this, [2]);
if (ival == -2147483648) this.invArg$();
if (!this.chk) this.vwr.ms.setFormalCharges$javajs_util_BS$I(this.vwr.bsA$(), ival);
return;
case 545259563:
if (this.slen > 2) this.setStringProperty$S$S(key, p$1.getSettingStr$I$Z.apply(this, [2, isJmolSet]));
break;
case 545259568:
case 545259558:
if (this.slen > 2) p$1.setUnits$S$I.apply(this, [p$1.getSettingStr$I$Z.apply(this, [2, isJmolSet]), tok]);
break;
case 545259573:
if (!this.chk) this.vwr.setPicked$I$Z(-1, false);
if (this.slen > 2) {
p$1.cmdSetPicking.apply(this, []);
return;
}break;
case 545259574:
if (this.slen > 2) {
p$1.cmdSetPickingStyle.apply(this, []);
return;
}break;
case 1715472409:
break;
case 536870924:
ival=p$1.getSettingInt$I.apply(this, [2]);
if (ival == -2147483648 || ival == 0  || ival == 1 ) {
justShow=false;
break;
}tok=553648174;
key="specularPercent";
this.setIntProperty$S$I(key, ival);
break;
case 1649022989:
tok=553648178;
key="strandCount";
this.setIntProperty$S$I(key, p$1.getSettingInt$I.apply(this, [2]));
break;
default:
justShow=false;
}
if (justShow && !showing ) return;
var isContextVariable=(!justShow && !isJmolSet && this.getContextVariableAsVariable$S$Z(key, false) != null   );
if (!justShow && !isContextVariable ) {
switch (tok) {
case 1677721602:
newTok=603979928;
break;
case 1612709894:
newTok=603979908;
break;
case 1612709900:
newTok=603979910;
break;
case 1610612739:
newTok=603979878;
break;
case 1665140738:
newTok=570425394;
this.setFloatProperty$S$F("solventProbeRadius", p$1.getSettingFloat$I.apply(this, [2]));
justShow=true;
break;
case 1610612740:
newTok=570425390;
break;
case 1612709912:
newTok=603979948;
break;
case 1765808134:
newTok=545259545;
break;
case 1611141175:
sval=this.paramAsStr$I(2).toLowerCase$();
switch ("x;y;z;fps;".indexOf$S(sval + ";")) {
case 0:
newTok=570425398;
break;
case 2:
newTok=570425400;
break;
case 4:
newTok=570425402;
break;
case 6:
newTok=570425396;
break;
default:
this.errorStr2$I$S$S(50, "set SPIN ", sval);
}
if (!this.chk) this.vwr.setSpin$S$I(sval, (this.floatParameter$I(this.checkLast$I(3))|0));
justShow=true;
break;
}
}if (newTok != 0) {
key=$I$(9,"nameOf$I",[tok=newTok]);
} else if (!justShow && !isContextVariable ) {
if (key.length$() == 0 || key.charAt$I(0) == "_" && this.tokAt$I(2) != 268435520  ) this.error$I(56);
var lckey=key.toLowerCase$();
if (lckey.indexOf$S("label") == 0 && $I$(7,"isOneOf$S$S",[lckey.substring$I(5), ";front;group;atom;offset;offsetexact;offsetabsolute;pointer;alignment;toggle;scalereference;for;"]) ) {
if (p$1.cmdSetLabel$S.apply(this, [lckey.substring$I(5)])) return;
}if (isJmolSet && lckey.indexOf$S("shift_") == 0 ) {
var f=this.floatParameter$I(2);
this.checkLength$I(3);
if (!this.chk) this.vwr.getNMRCalculation$().setChemicalShiftReference$S$F(lckey.substring$I(6), f);
return;
}if (lckey.endsWith$S("callback")) tok=536870912;
}if (isJmolSet && !$I$(9).tokAttr$I$I(tok, 536870912) ) {
this.iToken=1;
if (!this.isStateScript) this.errorStr2$I$S$S(50, "SET", key);
this.warning$I$S$S(51, "SET", key);
}if (!justShow && isJmolSet ) {
switch (this.slen) {
case 2:
this.setBooleanProperty$S$Z(key, true);
justShow=true;
break;
case 3:
if (ival != 2147483647) {
this.setIntProperty$S$I(key, ival);
justShow=true;
}break;
}
}if (!justShow && !isJmolSet && this.tokAt$I(2) == 1073742333  ) {
if (!this.chk) this.vwr.removeUserVariable$S(key.toLowerCase$());
justShow=true;
}if (!justShow) {
this.setVariable$I$I$S$Z(1, 0, key, true);
if (!isJmolSet) return;
}if (showing) this.vwr.showParameter$S$Z$I(key, true, 80);
}, p$1);

Clazz.newMeth(C$, 'cmdSetEcho', function () {
var propertyName=null;
var propertyValue=null;
var id=null;
var echoShapeActive=true;
var pt=2;
switch (this.getToken$I(2).tok) {
case 1073742334:
id=propertyName="allOff";
this.checkLength$I(++pt);
break;
case 1073742333:
echoShapeActive=false;
case 1073742327:
id=this.paramAsStr$I(2);
this.checkLength$I(++pt);
break;
case 1073741996:
case 12289:
case 1073742126:
case 1073742172:
case 1073742019:
case 1073741871:
case 1073741824:
case 4:
case 1073741974:
if (this.theTok == 1073741974) pt++;
id=this.paramAsStr$I(pt++);
break;
}
if (!this.chk) {
this.vwr.ms.setEchoStateActive$Z(echoShapeActive);
this.sm.loadShape$I(31);
if (id != null ) this.setShapeProperty$I$S$O(31, propertyName == null  ? "target" : propertyName, id);
}if (pt < this.slen) {
switch (this.getToken$I(pt++).tok) {
case 1073741832:
propertyName="align";
switch (this.getToken$I(pt).tok) {
case 1073741996:
case 1073742126:
case 12289:
propertyValue=this.paramAsStr$I(pt++);
break;
default:
this.invArg$();
}
break;
case 12289:
case 1073741996:
case 1073742126:
propertyName="align";
propertyValue=this.paramAsStr$I(pt - 1);
break;
case 554176526:
propertyName="%zpos";
propertyValue=Integer.valueOf$I((this.floatParameter$I(pt++)|0));
break;
case 1610625028:
case 2097192:
case 1073742335:
propertyName="hidden";
propertyValue=Boolean.FALSE;
break;
case 12294:
case 2097194:
propertyName="hidden";
propertyValue=Boolean.TRUE;
break;
case 1094717454:
var modelIndex=(this.chk ? 0 : this.modelNumberParameter$I(pt++));
if (modelIndex >= this.vwr.ms.mc) this.invArg$();
propertyName="model";
propertyValue=Integer.valueOf$I(modelIndex);
break;
case 268435520:
case 1073742195:
propertyName="xypos";
propertyValue=this.xypParameter$I(--pt);
if (propertyValue == null ) this.invArg$();
pt=this.iToken + 1;
break;
case 2:
var posx=this.intParameter$I(pt - 1);
var namex="xpos";
if (this.tokAt$I(pt) == 268435634) {
namex="%xpos";
pt++;
}propertyName="ypos";
propertyValue=Integer.valueOf$I(this.intParameter$I(pt++));
if (this.tokAt$I(pt) == 268435634) {
propertyName="%ypos";
pt++;
}this.checkLength$I(pt);
this.setShapeProperty$I$S$O(31, namex, Integer.valueOf$I(posx));
break;
case 1073742066:
propertyName="offset";
if (this.isPoint3f$I(pt)) {
var pt3=this.getPoint3f$I$Z$Z(pt, false, true);
propertyValue=Clazz.array(Float.TYPE, -1, [-1, pt3.x, pt3.y, pt3.z, 0, 0, 0]);
pt=this.iToken + 1;
} else if (this.isArrayParameter$I(pt)) {
propertyValue=this.floatParameterSet$I$I$I(pt, 7, 7);
pt=this.iToken + 1;
}break;
case 1073742334:
propertyName="off";
break;
case 1073742138:
propertyName="scale";
propertyValue=Float.valueOf$F(this.floatParameter$I(pt++));
break;
case 134222850:
propertyName="script";
propertyValue=this.paramAsStr$I(pt++);
break;
case 4120:
pt++;
case 4:
var isImage=(this.theTok != 4);
this.checkLength$I(pt--);
if (isImage) {
if (id == null ) {
var data=Clazz.array(String, [1]);
this.getShapePropertyData$I$S$OA(31, "currentTarget", data);
id=data[0];
}if (!this.chk && this.vwr.ms.getEchoStateActive$() && this.vwr.fm.loadImage$O$S$Z(this.getToken$I(pt).value, id, !this.useThreads$())  ) throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "setEchoImage", 1]);
return;
}p$1.cmdEcho$I.apply(this, [pt]);
return;
case 134217751:
propertyName="point";
propertyValue=(this.isCenterParameter$I(pt) ? this.centerParameter$I$OA(pt, null) : null);
pt=this.iToken + 1;
break;
default:
if (this.isCenterParameter$I(pt - 1)) {
propertyName="xyz";
propertyValue=this.centerParameter$I$OA(pt - 1, null);
pt=this.iToken + 1;
break;
}this.invArg$();
}
}this.checkLength$I(pt);
if (!this.chk && propertyName != null  ) this.setShapeProperty$I$S$O(31, propertyName, propertyValue);
}, p$1);

Clazz.newMeth(C$, 'cmdSetLabel$S', function (str) {
this.sm.loadShape$I(5);
var propertyValue=null;
this.setShapeProperty$I$S$O(5, "setDefaults", this.vwr.slm.noneSelected);
while (true){
if (str.equals$O("for")) {
var bs=this.atomExpressionAt$I(2);
p$1.cmdLabel$I$javajs_util_BS.apply(this, [this.iToken + 1, bs]);
return true;
}if (str.equals$O("scalereference")) {
var scaleAngstromsPerPixel=this.floatParameter$I(2);
if (scaleAngstromsPerPixel >= 5 ) scaleAngstromsPerPixel=this.vwr.tm.getZoomSetting$() / scaleAngstromsPerPixel / this.vwr.getScalePixelsPerAngstrom$Z(false) ;
propertyValue=Float.valueOf$F(scaleAngstromsPerPixel);
break;
}var isAbsolute=false;
if (str.equals$O("offset") || (isAbsolute=(str.equals$O("offsetabsolute") || str.equals$O("offsetexact") )) ) {
str="offset";
if (this.isPoint3f$I(2)) {
var pt=this.getPoint3f$I$Z$Z(2, false, true);
propertyValue=Clazz.array(Float.TYPE, -1, [-1, pt.x, pt.y, pt.z, 0, 0, 0]);
} else if (this.isArrayParameter$I(2)) {
propertyValue=this.floatParameterSet$I$I$I(2, 7, 7);
} else {
var xOffset=this.intParameterRange$I$I$I(2, -500, 500);
var yOffset=this.intParameterRange$I$I$I(3, -500, 500);
if (xOffset == 2147483647 || yOffset == 2147483647 ) return true;
propertyValue=Integer.valueOf$I($I$(13).getOffset$I$I$Z(xOffset, yOffset, isAbsolute));
}break;
}if (str.equals$O("alignment")) {
switch (this.getToken$I(2).tok) {
case 1073741996:
case 1073742126:
case 12289:
str="align";
propertyValue=this.theToken.value;
break;
default:
this.invArg$();
}
break;
}if (str.equals$O("pointer")) {
var flags=0;
switch (this.getToken$I(2).tok) {
case 1073742334:
case 1073742333:
break;
case 1610616835:
flags|=2;
case 1073742335:
flags|=1;
break;
default:
this.invArg$();
}
propertyValue=Integer.valueOf$I(flags);
break;
}if (str.equals$O("toggle")) {
this.iToken=1;
var bs=(this.slen == 2 ? this.vwr.bsA$() : this.atomExpressionAt$I(2));
this.checkLast$I(this.iToken);
if (this.chk) return true;
this.vwr.shm.loadShape$I(5);
this.vwr.shm.setShapePropertyBs$I$S$O$javajs_util_BS(5, "toggleLabel", null, bs);
return true;
}this.iToken=1;
var TF=(this.slen == 2 || this.getToken$I(2).tok == 1073742335 );
if (str.equals$O("front") || str.equals$O("group") ) {
if (!TF && this.tokAt$I(2) != 1073742334 ) this.invArg$();
if (!TF) str="front";
propertyValue=(TF ? Boolean.TRUE : Boolean.FALSE);
break;
}if (str.equals$O("atom")) {
if (!TF && this.tokAt$I(2) != 1073742334 ) this.invArg$();
str="front";
propertyValue=(TF ? Boolean.FALSE : Boolean.TRUE);
break;
}return false;
}
var bs=(this.iToken + 1 < this.slen ? this.atomExpressionAt$I(++this.iToken) : null);
this.checkLast$I(this.iToken);
if (this.chk) return true;
if (bs == null ) this.setShapeProperty$I$S$O(5, str, propertyValue);
 else this.setShapePropertyBs$I$S$O$javajs_util_BS(5, str, propertyValue, bs);
return true;
}, p$1);

Clazz.newMeth(C$, 'cmdSetPicking', function () {
if (this.slen == 2) {
this.setStringProperty$S$S("picking", "identify");
return;
}if (this.slen > 4 || this.tokAt$I(2) == 4 ) {
this.setStringProperty$S$S("picking", p$1.getSettingStr$I$Z.apply(this, [2, false]));
return;
}var i=2;
var type="SELECT";
switch (this.getToken$I(2).tok) {
case 1275082245:
case 1745489939:
case 1611141175:
if (this.checkLength34$() == 4) {
type=this.paramAsStr$I(2).toUpperCase$();
if (type.equals$O("SPIN")) this.setIntProperty$S$I("pickingSpinRate", this.intParameter$I(3));
 else i=3;
}break;
case 12291:
break;
default:
this.checkLength$I(3);
}
var str=this.paramAsStr$I(i);
switch (this.getToken$I(i).tok) {
case 1073742335:
case 1073742056:
str="identify";
break;
case 1073742334:
case 1073742333:
str="off";
break;
case 1275082245:
str="atom";
break;
case 1825200146:
str="label";
break;
case 1677721602:
str="bond";
break;
case 12291:
this.checkLength$I(4);
if (this.tokAt$I(3) != 1677721602) this.invArg$();
str="deleteBond";
break;
}
var mode=((mode=str.indexOf$S("_")) >= 0 ? mode : str.length$());
mode=$I$(50,"getPickingMode$S",[str.substring$I$I(0, mode)]);
if (mode < 0) this.errorStr2$I$S$S(50, "SET PICKING " + type, str);
this.setStringProperty$S$S("picking", str);
}, p$1);

Clazz.newMeth(C$, 'cmdSetPickingStyle', function () {
if (this.slen > 4 || this.tokAt$I(2) == 4 ) {
this.setStringProperty$S$S("pickingStyle", p$1.getSettingStr$I$Z.apply(this, [2, false]));
return;
}var i=2;
var isMeasure=false;
var type="SELECT";
switch (this.getToken$I(2).tok) {
case 1745489939:
isMeasure=true;
type="MEASURE";
case 1275082245:
if (this.checkLength34$() == 4) i=3;
break;
default:
this.checkLength$I(3);
}
var str=this.paramAsStr$I(i);
switch (this.getToken$I(i).tok) {
case 1073742333:
case 1073742334:
str=(isMeasure ? "measureoff" : "toggle");
break;
case 1073742335:
if (isMeasure) str="measure";
break;
}
if ($I$(50).getPickingStyleIndex$S(str) < 0) this.errorStr2$I$S$S(50, "SET PICKINGSTYLE " + type, str);
this.setStringProperty$S$S("pickingStyle", str);
}, p$1);

Clazz.newMeth(C$, 'cmdSlab$Z', function (isDepth) {
var TF=false;
var plane=null;
var str;
if (this.isCenterParameter$I(1) || this.tokAt$I(1) == 9 ) plane=this.planeParameter$I(1);
 else switch (this.getToken$I(1).tok) {
case 2:
var percent=this.intParameter$I(this.checkLast$I(1));
if (!this.chk) if (isDepth) this.vwr.tm.depthToPercent$I(percent);
 else this.vwr.tm.slabToPercent$I(percent);
return;
case 1073742335:
TF=true;
case 1073742334:
this.checkLength$I(2);
this.setBooleanProperty$S$Z("slabEnabled", TF);
return;
case 4141:
this.checkLength$I(2);
if (this.chk) return;
this.vwr.tm.slabReset$();
this.setBooleanProperty$S$Z("slabEnabled", true);
return;
case 36867:
this.checkLength$I(2);
if (!this.chk) this.vwr.tm.setSlabDepthInternal$Z(isDepth);
return;
case 268435616:
str=this.paramAsStr$I(2);
if (str.equalsIgnoreCase$S("hkl")) plane=this.hklParameter$I(3);
 else if (str.equalsIgnoreCase$S("plane")) plane=this.planeParameter$I(2);
if (plane == null ) this.invArg$();
plane.scale4$F(-1);
break;
case 134217750:
switch (this.getToken$I(2).tok) {
case 1073742333:
break;
default:
plane=this.planeParameter$I(1);
}
break;
case 134219265:
plane=(this.getToken$I(2).tok == 1073742333 ? null : this.hklParameter$I(2));
break;
case 1073742118:
return;
default:
this.invArg$();
}
if (!this.chk) this.vwr.tm.slabInternal$javajs_util_P4$Z(plane, isDepth);
}, p$1);

Clazz.newMeth(C$, 'cmdSsbond', function () {
var mad=this.getMadParameter$();
if (mad == 2147483647) return;
this.setShapeProperty$I$S$O(1, "type", Integer.valueOf$I(256));
this.setShapeSizeBs$I$I$javajs_util_BS(1, mad, null);
this.setShapeProperty$I$S$O(1, "type", Integer.valueOf$I(1023));
}, p$1);

Clazz.newMeth(C$, 'cmdStructure', function () {
var type=$I$(48,"getProteinStructureType$S",[this.paramAsStr$I(1)]);
if (type === $I$(48).NOT ) this.invArg$();
var bs=null;
switch (this.tokAt$I(2)) {
case 12290:
case 10:
case 1073742325:
bs=this.atomExpressionAt$I(2);
this.checkLast$I(this.iToken);
break;
default:
this.checkLength$I(2);
}
if (this.chk) return;
this.clearDefinedVariableAtomSets$();
this.vwr.setProteinType$org_jmol_c_STR$javajs_util_BS(type, bs);
}, p$1);

Clazz.newMeth(C$, 'cmdSubset', function () {
var bs=null;
if (!this.chk) this.vwr.slm.setSelectionSubset$javajs_util_BS(null);
if (this.slen != 1 && (this.slen != 4 || !this.getToken$I(2).value.equals$O("off") ) ) bs=this.atomExpressionAt$I(1);
if (!this.chk) this.vwr.slm.setSelectionSubset$javajs_util_BS(bs);
}, p$1);

Clazz.newMeth(C$, 'cmdSync', function () {
var text="";
var applet="";
var port=$I$(7,"parseInt$S",[this.optParameterAsString$I(1)]);
if (port == -2147483648) {
this.checkLength$I(-3);
port=0;
switch (this.slen) {
case 1:
applet="*";
text="ON";
break;
case 2:
applet=this.paramAsStr$I(1);
if (applet.indexOf$S("jmolApplet") == 0 || $I$(7).isOneOf$S$S(applet, ";*;.;^;") ) {
text="ON";
if (!this.chk) this.vwr.syncScript$S$S$I(text, applet, 0);
applet=".";
break;
}text=applet;
applet="*";
break;
case 3:
applet=this.paramAsStr$I(1);
text=(this.tokAt$I(2) == 528443 ? "GET_GRAPHICS" : this.paramAsStr$I(2));
break;
}
} else {
var v=null;
if (this.slen > 2 && (v=this.setVariable$I$I$S$Z(2, -1, "", false)) == null  ) return;
text=(this.slen == 2 ? null : v.tok == 6 ? v.toJSON$() : v.asString$());
applet=null;
}if (this.chk) return;
this.vwr.syncScript$S$S$I(text, applet, port);
}, p$1);

Clazz.newMeth(C$, 'cmdThrow', function () {
if (this.chk) return;
var pt=(this.tokAt$I(1) == 14 ? 2 : 1);
var v=(pt == 1 ? this.setVariable$I$I$S$Z(1, this.slen, "thrown_value", false) : this.vwr.g.setUserVariable$S$org_jmol_script_SV("thrown_value", $I$(8,"newS$S",[this.optParameterAsString$I(2)])));
var info=v.asString$();
if (info.length$() == 0 && (info=this.optParameterAsString$I(1)).length$() == 0 ) info="context";
if (pt == 2) {
p$1.saveContext$S.apply(this, [info]);
if (this.doReport$()) this.report$S$Z($I$(30,"o$S$O",[$I$(30).$$S("to resume, enter: &{0}"), info]), false);
throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, info, -2147483648]);
}this.evalError$S$S(info, null);
}, p$1);

Clazz.newMeth(C$, 'saveContext$S', function (saveName) {
var sc=this.getScriptContext$S("Context_" + saveName);
this.vwr.stm.saveContext$S$O(saveName, sc);
this.vwr.g.setUserVariable$S$org_jmol_script_SV(saveName, $I$(8).newV$I$O(14, sc));
return sc;
}, p$1);

Clazz.newMeth(C$, 'cmdTimeout$I', function (index) {
var name=null;
var script=null;
var mSec=0;
if (this.slen == index) {
this.showString$S(this.vwr.showTimeout$S(null));
return;
}for (var i=index; i < this.slen; i++) switch (this.getToken$I(i).tok) {
case 1073741974:
name=this.paramAsStr$I(++i);
if (this.slen == 3) {
if (!this.chk) this.vwr.triggerTimeout$S(name);
return;
}break;
case 1073742334:
break;
case 2:
mSec=this.intParameter$I(i);
break;
case 3:
mSec=Math.round(this.floatParameter$I(i) * 1000);
break;
default:
if (name == null ) name=this.paramAsStr$I(i);
 else if (script == null ) script=this.paramAsStr$I(i);
 else this.invArg$();
break;
}

if (!this.chk) this.vwr.setTimeout$S$I$S(name, mSec, script);
}, p$1);

Clazz.newMeth(C$, 'cmdTranslate$Z', function (isSelected) {
var bs=null;
var i=1;
var i0=0;
if (this.tokAt$I(1) == 1113589787) {
isSelected=true;
i0=1;
i=2;
}if (this.isPoint3f$I(i)) {
var pt=this.getPoint3f$I$Z$Z(i, true, true);
bs=(this.iToken + 1 < this.slen ? this.atomExpressionAt$I(++this.iToken) : null);
this.checkLast$I(this.iToken);
if (!this.chk) this.vwr.setAtomCoordsRelative$javajs_util_T3$javajs_util_BS(pt, bs);
return;
}var xyz=(this.paramAsStr$I(i).toLowerCase$() + " ").charAt$I(0);
if ("xyz".indexOf$I(xyz) < 0) this.error$I(0);
var amount=this.floatParameter$I(++i);
var type;
switch (this.tokAt$I(++i)) {
case 0:
case 12290:
case 10:
case 1073742325:
type="\u0000";
break;
default:
type=(this.optParameterAsString$I(i).toLowerCase$() + '\u0000').charAt$I(0);
}
if (amount == 0  && type != "\u0000" ) return;
this.iToken=i0 + (type == "\u0000" ? 2 : 3);
bs=(isSelected ? this.vwr.bsA$() : this.iToken + 1 < this.slen ? this.atomExpressionAt$I(++this.iToken) : null);
this.checkLast$I(this.iToken);
if (!this.chk) {
this.vwr.translate$C$F$C$javajs_util_BS(xyz, amount, type, bs);
this.refresh$Z(false);
}}, p$1);

Clazz.newMeth(C$, 'cmdUnbind', function () {
if (this.slen != 1) this.checkLength23$();
var mouseAction=this.optParameterAsString$I(1);
var name=this.optParameterAsString$I(2);
if (mouseAction.length$() == 0 || this.tokAt$I(1) == 1073742327 ) mouseAction=null;
if (name.length$() == 0 || this.tokAt$I(2) == 1073742327 ) name=null;
if (name == null  && mouseAction != null   && $I$(50).getActionFromName$S(mouseAction) >= 0 ) {
name=mouseAction;
mouseAction=null;
}if (!this.chk) this.vwr.unBindAction$S$S(mouseAction, name);
}, p$1);

Clazz.newMeth(C$, 'cmdUndoRedoMove', function () {
var n=1;
var len=2;
switch (this.tokAt$I(1)) {
case 0:
len=1;
break;
case 1073742327:
n=0;
break;
case 2:
n=this.intParameter$I(1);
break;
default:
this.invArg$();
}
this.checkLength$I(len);
if (!this.chk) this.vwr.undoMoveAction$I$I(this.tokAt$I(0), n);
}, p$1);

Clazz.newMeth(C$, 'setCurrentCagePts$javajs_util_T3A$S', function (originABC, name) {
var sym=$I$(45).getSymmetry$org_jmol_viewer_Viewer$S(this.vwr, "eval");
if (sym == null  && this.vwr.async ) throw Clazz.new_(Clazz.load('NullPointerException'));
try {
this.vwr.ms.setModelCage$I$org_jmol_api_SymmetryInterface(this.vwr.am.cmi, originABC == null  ? null : sym.getUnitCell$javajs_util_T3A$Z$S(originABC, false, name));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'cmdUnitcell$I', function (i) {
this.getCmdExt$().dispatch$I$Z$org_jmol_script_TA(1814695966, i == 2, null);
}, p$1);

Clazz.newMeth(C$, 'cmdVector', function () {
var type=$I$(32).SCREEN;
var value=1;
this.checkLength$I(-3);
switch (this.iToken=this.slen) {
case 1:
break;
case 2:
switch (this.getToken$I(1).tok) {
case 1073742335:
break;
case 1073742334:
value=0;
break;
case 2:
var d=this.intParameterRange$I$I$I(1, 0, 19);
if (d == 2147483647) return;
value=d;
break;
case 3:
type=$I$(32).ABSOLUTE;
if (Float.isNaN$F(value=this.floatParameterRange$I$F$F(1, 0, 3))) return;
break;
default:
this.error$I(6);
}
break;
case 3:
switch (this.tokAt$I(1)) {
case 1112152078:
this.setIntProperty$S$I("vectorTrace", this.intParameterRange$I$I$I(2, 0, 20));
return;
case 1073742138:
if (!Float.isNaN$F(value=this.floatParameterRange$I$F$F(2, -100, 100))) this.setFloatProperty$S$F("vectorScale", value);
return;
case 64:
var max=this.floatParameter$I(2);
if (!this.chk) this.vwr.ms.scaleVectorsToMax$F(max);
return;
}
break;
}
p$1.setShapeSize$I$org_jmol_atomdata_RadiusData.apply(this, [18, Clazz.new_($I$(33,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW,[null, value, type, null])]);
}, p$1);

Clazz.newMeth(C$, 'cmdVibration', function () {
this.checkLength$I(-3);
var period=0;
switch (this.getToken$I(1).tok) {
case 1073742335:
this.checkLength$I(2);
period=this.vwr.getFloat$I(570425412);
break;
case 1073742334:
this.checkLength$I(2);
period=0;
break;
case 2:
case 3:
this.checkLength$I(2);
period=this.floatParameter$I(1);
break;
case 1073742138:
if (!Float.isNaN$F(period=this.floatParameterRange$I$F$F(2, -100, 100))) this.setFloatProperty$S$F("vibrationScale", period);
return;
case 64:
var max=this.floatParameter$I(2);
if (!this.chk) this.vwr.ms.scaleVectorsToMax$F(max);
break;
case 1073742090:
this.setFloatProperty$S$F("vibrationPeriod", this.floatParameter$I(2));
return;
case 1073741824:
this.invArg$();
break;
default:
period=-1;
}
if (period < 0 ) this.invArg$();
if (this.chk) return;
if (period == 0 ) {
this.vwr.tm.setVibrationPeriod$F(0);
return;
}this.vwr.setVibrationPeriod$F(-period);
}, p$1);

Clazz.newMeth(C$, 'cmdWireframe', function () {
var mad=-2147483648;
if (this.tokAt$I(1) == 4141) this.checkLast$I(1);
 else mad=this.getMadParameter$();
if (this.chk || mad == 2147483647 ) return;
this.setShapeProperty$I$S$O(1, "type", Integer.valueOf$I(1023));
this.setShapeSizeBs$I$I$javajs_util_BS(1, mad == -2147483648 ? 300 : mad, null);
}, p$1);

Clazz.newMeth(C$, 'cmdZap$Z', function (isZapCommand) {
if (this.slen == 1 || !isZapCommand ) {
var doAll=(isZapCommand && !this.isStateScript );
if (doAll) this.vwr.cacheFileByName$S$Z(null, false);
this.vwr.zap$Z$Z$Z(true, doAll, true);
this.refresh$Z(false);
return;
}var bs=this.atomExpressionAt$I(1);
if (this.chk) return;
if (bs.nextSetBit$I(0) < 0 && this.slen == 4  && this.tokAt$I(2) == 1073742359 ) {
var iModel=this.vwr.ms.getModelNumberIndex$I$Z$Z(this.getToken$I(2).intValue, false, true);
if (iModel >= 0) this.vwr.deleteModels$I$javajs_util_BS(iModel, null);
return;
}var nDeleted=this.vwr.deleteAtoms$javajs_util_BS$Z(bs, true);
var isQuiet=!this.doReport$();
if (!isQuiet) this.report$S$Z($I$(30,"i$S$I",[$I$(30).$$S("{0} atoms deleted"), nDeleted]), false);
this.vwr.select$javajs_util_BS$Z$I$Z(null, false, 0, isQuiet);
}, p$1);

Clazz.newMeth(C$, 'cmdZoom$Z', function (isZoomTo) {
if (!isZoomTo) {
var tok=(this.slen > 1 ? this.getToken$I(1).tok : 1073742335);
switch (tok) {
case 1275068432:
case 1073742079:
break;
case 1073742335:
case 1073742334:
if (this.slen > 2) this.bad$();
if (!this.chk) this.setBooleanProperty$S$Z("zoomEnabled", tok == 1073742335);
return;
}
}var center=null;
var i=1;
var floatSecondsTotal=(isZoomTo ? (this.isFloatParameter$I(i) ? this.floatParameter$I(i++) : 1.0) : 0.0);
if (floatSecondsTotal < 0 ) {
i--;
floatSecondsTotal=0;
}var ptCenter=0;
var bsCenter=null;
if (this.isCenterParameter$I(i)) {
ptCenter=i;
var ret=Clazz.array(java.lang.Object, [1]);
center=this.centerParameter$I$OA(i, ret);
if (Clazz.instanceOf(ret[0], "javajs.util.BS")) bsCenter=ret[0];
i=this.iToken + 1;
} else if (this.tokAt$I(i) == 2 && this.getToken$I(i).intValue == 0 ) {
bsCenter=this.vwr.getAtomBitSet$O("visible");
center=this.vwr.ms.getAtomSetCenter$javajs_util_BS(bsCenter);
}var isSameAtom=false;
var zoom=this.vwr.tm.getZoomSetting$();
var newZoom=p$1.getZoom$I$I$javajs_util_BS$F.apply(this, [ptCenter, i, bsCenter, zoom]);
i=this.iToken + 1;
var xTrans=NaN;
var yTrans=NaN;
if (i != this.slen) {
xTrans=this.floatParameter$I(i++);
yTrans=this.floatParameter$I(i++);
}if (i != this.slen) this.invArg$();
if (newZoom < 0 ) {
newZoom=-newZoom;
if (isZoomTo) {
if (this.slen == 1 || isSameAtom ) newZoom *= 2;
 else if (center == null ) newZoom /= 2;
}}var max=200000;
if (newZoom < 5  || newZoom > max  ) this.numberOutOfRange$F$F(5, max);
if (!this.vwr.tm.isWindowCentered$()) {
if (center != null ) {
var bs=this.atomExpressionAt$I(ptCenter);
if (!this.chk) this.vwr.setCenterBitSet$javajs_util_BS$Z(bs, false);
}center=this.vwr.tm.fixedRotationCenter;
if (Float.isNaN$F(xTrans)) xTrans=this.vwr.tm.getTranslationXPercent$();
if (Float.isNaN$F(yTrans)) yTrans=this.vwr.tm.getTranslationYPercent$();
}if (this.chk) return;
if (Float.isNaN$F(xTrans)) xTrans=0;
if (Float.isNaN$F(yTrans)) yTrans=0;
if (isSameAtom && Math.abs(zoom - newZoom) < 1   || !this.useThreads$() ) floatSecondsTotal=0;
this.vwr.moveTo$org_jmol_api_JmolScriptEvaluator$F$javajs_util_P3$javajs_util_V3$F$javajs_util_M3$F$F$F$F$javajs_util_P3$F$F$F$F$F$F(this, floatSecondsTotal, center, $I$(13).center, NaN, null, newZoom, xTrans, yTrans, NaN, null, NaN, NaN, NaN, NaN, NaN, NaN);
if (this.isJS && floatSecondsTotal > 0   && this.vwr.g.waitForMoveTo ) throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "zoomTo", 1]);
}, p$1);

Clazz.newMeth(C$, 'colorShape$I$I$Z', function (shapeType, index, isBackground) {
var translucency=null;
var colorvalue=null;
var colorvalue1=null;
var bs=null;
var prefix=(index == 2 && this.tokAt$I(1) == 1073741859  ? "ball" : "");
var isColor=false;
var isIsosurface=(shapeType == 24 || shapeType == 25 );
var typeMask=0;
var doClearBondSet=false;
var translucentLevel=3.4028235E38;
if (index < 0) {
bs=this.atomExpressionAt$I(-index);
index=this.iToken + 1;
if (this.isBondSet) {
doClearBondSet=true;
shapeType=1;
}}var tok=this.getToken$I(index).tok;
if (isBackground) this.getToken$I(index);
 else if ((isBackground=(tok == 1610616835)) == true ) this.getToken$I(++index);
if (isBackground) prefix="bg";
 else if (isIsosurface) {
switch (this.theTok) {
case 1073742018:
this.getToken$I(++index);
prefix="mesh";
break;
case 1073742094:
var argb=this.getArgbParamOrNone$I$Z(++index, false);
colorvalue1=(argb == 0 ? null : Integer.valueOf$I(argb));
this.getToken$I(index=this.iToken + 1);
break;
case 12290:
case 10:
case 1073742325:
if (Clazz.instanceOf(this.theToken.value, "org.jmol.modelset.BondSet")) {
bs=this.theToken.value;
prefix="vertex";
} else {
bs=this.atomExpressionAt$I(index);
prefix="atom";
}this.getToken$I(index=this.iToken + 1);
break;
}
}if (!this.chk && (shapeType == 27 || shapeType == 28 ) && this.getIsoExt$().dispatch$I$Z$org_jmol_script_TA(shapeType, true, this.st) != null   ) return;
var isTranslucent=(this.theTok == 603979967);
if (isTranslucent || this.theTok == 1073742074 ) {
if (translucentLevel == 1.4E-45 ) this.invArg$();
translucency=this.paramAsStr$I(index++);
if (isTranslucent && this.isFloatParameter$I(index) ) translucentLevel=this.getTranslucentLevel$I(index++);
}tok=0;
if (index < this.slen && this.tokAt$I(index) != 1073742335  && this.tokAt$I(index) != 1073742334 ) {
isColor=true;
tok=this.getToken$I(index).tok;
if ((!isIsosurface || this.tokAt$I(index + 1) != 1073742170 ) && this.isColorParam$I(index) ) {
var argb=this.getArgbParamOrNone$I$Z(index, false);
colorvalue=(argb == 0 ? null : Integer.valueOf$I(argb));
if (this.tokAt$I(index=this.iToken + 1) != 0 && translucency == null  ) {
this.getToken$I(index);
isTranslucent=(this.theTok == 603979967);
if (isTranslucent || this.theTok == 1073742074 ) {
translucency=this.paramAsStr$I(index++);
if (isTranslucent && this.isFloatParameter$I(index) ) translucentLevel=this.getTranslucentLevel$I(index++);
}}if (this.isColorParam$I(index)) {
argb=this.getArgbParamOrNone$I$Z(index, false);
colorvalue1=(argb == 0 ? null : Integer.valueOf$I(argb));
index=this.iToken + 1;
}this.checkLength$I(index);
} else if (shapeType == 26) {
this.iToken--;
} else {
var name=this.paramAsStr$I(index).toLowerCase$();
var isByElement=(name.indexOf$S("byelement") == 0);
var isColorIndex=(isByElement || name.indexOf$S("byresidue") == 0 );
var pal=(isColorIndex || isIsosurface  ? $I$(51).PROPERTY : tok == 1112152075 ? $I$(51).CPK : $I$(51).getPalette$S(name));
if (pal === $I$(51).UNKNOWN  || (pal === $I$(51).TYPE  || pal === $I$(51).ENERGY  ) && shapeType != 2  ) this.invArg$();
var data=null;
var bsSelected=(pal !== $I$(51).PROPERTY  && pal !== $I$(51).VARIABLE   || !this.vwr.g.rangeSelected  ? null : this.vwr.bsA$());
if (pal === $I$(51).PROPERTY ) {
if (isColorIndex) {
if (!this.chk) {
data=this.getCmdExt$().getBitsetPropertyFloat$javajs_util_BS$I$S$F$F(bsSelected, (isByElement ? 1094715402 : 1094713356) | 256, null, NaN, NaN);
}} else {
var isPropertyExplicit=name.equals$O("property");
if (isPropertyExplicit && $I$(9,"tokAttr$I$I",[(tok=this.getToken$I(++index).tok), 1077936128]) && !$I$(9).tokAttr$I$I(tok, 1086324736)  ) {
tok=this.getToken$I(index).tok;
var type=(tok == 1111490587 ? this.getToken$I(++index).value.toString() : null);
if (!this.chk) {
data=this.getCmdExt$().getBitsetPropertyFloat$javajs_util_BS$I$S$F$F(bsSelected, tok | 256, type, NaN, NaN);
}index++;
} else if (!isPropertyExplicit && !isIsosurface ) {
index++;
}}} else if (pal === $I$(51).VARIABLE ) {
index++;
name=this.paramAsStr$I(index++);
data=Clazz.array(Float.TYPE, [this.vwr.ms.ac]);
$I$(52,"parseStringInfestedFloatArray$S$javajs_util_BS$FA",["" + this.getParameter$S$I$Z(name, 4, true), null, data]);
pal=$I$(51).PROPERTY;
}if (pal === $I$(51).PROPERTY ) {
var scheme=null;
if (this.tokAt$I(index) == 4) {
scheme=this.paramAsStr$I(index++).toLowerCase$();
if (this.isArrayParameter$I(index)) {
scheme += "=" + $I$(8,"sValue$org_jmol_script_T",[$I$(8,"getVariableAS$SA",[this.stringParameterSet$I(index)])]).replace$C$C("\n", " ");
index=this.iToken + 1;
}} else if (isIsosurface && this.isColorParam$I(index) ) {
scheme=this.getColorRange$I(index);
index=this.iToken + 1;
}if (scheme != null  && !isIsosurface ) {
this.setStringProperty$S$S("propertyColorScheme", (isTranslucent && translucentLevel == 3.4028235E38   ? "translucent " : "") + scheme);
isColorIndex=(scheme.indexOf$S("byelement") == 0 || scheme.indexOf$S("byresidue") == 0 );
}var min=0;
var max=3.4028235E38;
if (!isColorIndex && (this.tokAt$I(index) == 1073741826 || this.tokAt$I(index) == 1073742114 ) ) {
min=this.floatParameter$I(index + 1);
max=this.floatParameter$I(index + 2);
index+=3;
if (min == max  && isIsosurface ) {
var range=this.getShapeProperty$I$S(shapeType, "dataRange");
if (range != null ) {
min=range[0];
max=range[1];
}} else if (min == max ) {
max=3.4028235E38;
}}if (isIsosurface) {
} else if (data == null ) {
if (!this.chk) this.vwr.setCurrentColorRange$S(name);
} else {
if (!this.chk) this.vwr.cm.setPropertyColorRangeData$FA$javajs_util_BS(data, bsSelected);
}if (isIsosurface) {
this.checkLength$I(index);
if (this.chk) return;
isColor=false;
var ce=(scheme == null  ? this.getShapeProperty$I$S(shapeType, "colorEncoder") : null);
if (ce == null  && (ce=this.vwr.cm.getColorEncoder$S(scheme)) == null  ) return;
ce.isTranslucent=(isTranslucent && translucentLevel == 3.4028235E38  );
ce.setRange$F$F$Z(min, max, min > max );
if (max == 3.4028235E38 ) ce.hi=max;
this.setShapeProperty$I$S$O(shapeType, "remapColor", ce);
this.showString$S((this.getShapeProperty$I$S(shapeType, "dataRangeStr")).replace$C$C("\n", " "));
if (translucentLevel == 3.4028235E38 ) return;
} else if (max != 3.4028235E38 ) {
this.vwr.cm.setPropertyColorRange$F$F(min, max);
}} else {
index++;
}this.checkLength$I(index);
colorvalue=pal;
}}if (this.chk || shapeType < 0 ) return;
switch (shapeType) {
case 4:
typeMask=32768;
break;
case 2:
typeMask=30720;
break;
case 3:
typeMask=256;
break;
case 1:
typeMask=1023;
break;
default:
typeMask=0;
}
if (typeMask == 0) {
this.sm.loadShape$I(shapeType);
if (shapeType == 5) this.setShapeProperty$I$S$O(5, "setDefaults", this.vwr.slm.noneSelected);
} else {
if (bs != null ) {
this.vwr.selectBonds$javajs_util_BS(bs);
bs=null;
}shapeType=1;
this.setShapeProperty$I$S$O(shapeType, "type", Integer.valueOf$I(typeMask));
}if (isColor) {
switch (tok) {
case 1111492619:
this.getPartialCharges$javajs_util_BS(bs);
break;
case 1111490575:
case 1111490574:
this.vwr.autoCalculate$I$S(tok, null);
break;
case 1111492620:
if (this.vwr.g.rangeSelected) this.vwr.ms.clearBfactorRange$();
break;
case 1086324742:
this.vwr.ms.calcSelectedGroupsCount$();
break;
case 1094713362:
case 1094713361:
this.vwr.ms.calcSelectedMonomersCount$();
break;
case 1094713360:
this.vwr.ms.calcSelectedMoleculesCount$();
break;
}
if (colorvalue1 != null  && (isIsosurface || shapeType == 11  || shapeType == 14  || shapeType == 21 ) ) this.setShapeProperty$I$S$O(shapeType, "colorPhase", Clazz.array(java.lang.Object, -1, [colorvalue1, colorvalue]));
 else if (bs == null ) this.setShapeProperty$I$S$O(shapeType, prefix + "color", colorvalue);
 else this.setShapePropertyBs$I$S$O$javajs_util_BS(shapeType, prefix + "color", colorvalue, bs);
}if (translucency != null ) this.setShapeTranslucency$I$S$S$F$javajs_util_BS(shapeType, prefix, translucency, translucentLevel, bs);
if (typeMask != 0) this.setShapeProperty$I$S$O(1, "type", Integer.valueOf$I(1023));
if (doClearBondSet) this.vwr.selectBonds$javajs_util_BS(null);
if (shapeType == 0) this.vwr.shm.checkInheritedShapes$();
}, p$1);

Clazz.newMeth(C$, 'getPartialCharges$javajs_util_BS', function (bs) {
try {
this.vwr.getOrCalcPartialCharges$javajs_util_BS$javajs_util_BS(bs, null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(21,1).c$$org_jmol_script_ScriptEval$S$I,[this, "partialcharge", 1]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'encodeRadiusParameter$I$Z$Z', function (index, isOnly, allowAbsolute) {
var value=NaN;
var factorType=$I$(32).ABSOLUTE;
var vdwType=null;
var tok=(index == -1 ? 1648363544 : this.getToken$I(index).tok);
switch (tok) {
case 1111490561:
case 1111490562:
case 1111492618:
case 1113589786:
case 1111492620:
case 1648363544:
value=1;
factorType=$I$(32).FACTOR;
vdwType=(tok == 1648363544 ? null : $I$(34,"getVdwType2$S",[$I$(9).nameOf$I(tok)]));
tok=this.tokAt$I(++index);
break;
}
switch (tok) {
case 4141:
return this.vwr.rd;
case 1073741852:
case 1073742116:
case 1073741856:
case 1073741857:
case 1073741991:
value=1;
factorType=$I$(32).FACTOR;
this.iToken=index - 1;
break;
case 268435617:
case 2:
case 3:
if (tok == 268435617) {
index++;
} else if (this.tokAt$I(index + 1) == 268435634) {
value=Math.round(this.floatParameter$I(index));
this.iToken=++index;
factorType=$I$(32).FACTOR;
if (value < 0  || value > 200  ) {
this.integerOutOfRange$I$I(0, 200);
return null;
}value /= 100;
break;
} else if (tok == 2) {
value=this.intParameter$I(index);
if (value > 749  || value < -200  ) {
this.integerOutOfRange$I$I(-200, 749);
return null;
}if (value > 0 ) {
value /= 250;
factorType=$I$(32).ABSOLUTE;
} else {
value /= -100;
factorType=$I$(32).FACTOR;
}break;
}var max;
if (tok == 268435617 || !allowAbsolute ) {
factorType=$I$(32).OFFSET;
max=16;
} else {
factorType=$I$(32).ABSOLUTE;
vdwType=$I$(34).NADA;
max=100;
}value=this.floatParameterRange$I$F$F(index, (isOnly || !allowAbsolute  ? -max : 0), max);
if (Float.isNaN$F(value)) return null;
if (isOnly) value=-value;
if (value > 16 ) value=16.1;
break;
default:
if (value == 1 ) index--;
}
if (vdwType == null ) {
vdwType=$I$(34,"getVdwType$S",[this.optParameterAsString$I(++this.iToken)]);
if (vdwType == null ) {
this.iToken=index;
vdwType=$I$(34).AUTO;
}}return Clazz.new_($I$(33,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW,[null, value, factorType, vdwType]);
});

Clazz.newMeth(C$, 'expandFloatArray$FA$I', function (a, min) {
var n=a.length;
var haveNeg=false;
try {
for (var i=0; i < a.length; i++) if (a[i] < 0 ) {
n=(n+(Math.abs(a[i - 1] + a[i]) - 1)|0);
haveNeg=true;
}
if (haveNeg) {
var b=Clazz.array(Float.TYPE, [n]);
for (var pt=0, i=0; i < a.length; i++) {
n=(a[i]|0);
if (n >= 0) {
if (n < min) this.invArg$();
b[pt++]=n;
} else {
var dif=((a[i - 1] + n)|0);
var dir=(dif < 0 ? 1 : -1);
for (var j=(a[i - 1]|0); j != -a[i] ; j+=dir, pt++) b[pt]=b[pt - 1] + dir;

}}
a=b;
n=a.length;
}var ia=Clazz.array(Integer.TYPE, [n]);
for (var i=n; --i >= 0; ) ia[i]=(a[i]|0);

return ia;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.invArg$();
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'frameControl$I', function (i) {
switch (this.getToken$I(this.checkLast$I(i)).tok) {
case 1073742098:
case 1073742096:
case 4143:
case 20487:
case 1073742037:
case 1073742108:
case 1073742125:
case 1073741942:
case 1073741993:
if (!this.chk) this.vwr.setAnimation$I(this.theTok);
return;
}
this.invArg$();
}, p$1);

Clazz.newMeth(C$, 'getColorRange$I', function (i) {
var color1=this.getArgbParam$I(i);
if (this.tokAt$I(++this.iToken) != 1073742170) this.invArg$();
var color2=this.getArgbParam$I(++this.iToken);
var nColors=(this.tokAt$I(this.iToken + 1) == 2 ? this.intParameter$I(++this.iToken) : 0);
return $I$(53,"getColorSchemeList$IA",[$I$(53).getPaletteAtoB$I$I$I(color1, color2, nColors)]);
});

Clazz.newMeth(C$, 'getFullPathName$', function () {
var filename=(!this.chk || this.isCmdLine_C_Option  ? this.vwr.fm.getFullPathName$Z(true) : "test.xyz");
if (filename == null ) this.invArg$();
return filename;
});

Clazz.newMeth(C$, 'getObjectBoundingBox$S', function (id) {
var data=Clazz.array(java.lang.Object, -1, [id, null, null]);
return (this.getShapePropertyData$I$S$OA(24, "getBoundingBox", data) || this.getShapePropertyData$I$S$OA(29, "getBoundingBox", data) || this.getShapePropertyData$I$S$OA(25, "getBoundingBox", data) || this.getShapePropertyData$I$S$OA(28, "getBoundingBox", data) || this.getShapePropertyData$I$S$OA(27, "getBoundingBox", data)   ? data[2] : null);
}, p$1);

Clazz.newMeth(C$, 'getObjectCenter$S$I$I', function (axisID, index, modelIndex) {
var data=Clazz.array(java.lang.Object, -1, [axisID, Integer.valueOf$I(index), Integer.valueOf$I(modelIndex)]);
return (this.getShapePropertyData$I$S$OA(22, "getCenter", data) || this.getShapePropertyData$I$S$OA(24, "getCenter", data) || this.getShapePropertyData$I$S$OA(29, "getCenter", data) || this.getShapePropertyData$I$S$OA(25, "getCenter", data) || this.getShapePropertyData$I$S$OA(28, "getCenter", data) || this.getShapePropertyData$I$S$OA(27, "getCenter", data)   ? data[2] : null);
});

Clazz.newMeth(C$, 'getPlaneForObject$S$javajs_util_V3', function (id, vAB) {
var shapeType=this.sm.getShapeIdFromObjectName$S(id);
switch (shapeType) {
case 22:
this.setShapeProperty$I$S$O(22, "thisID", id);
var points=this.getShapeProperty$I$S(22, "vertices");
if (points == null  || points.length < 3  || points[0] == null   || points[1] == null   || points[2] == null  ) break;
return $I$(42,"getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4",[points[0], points[1], points[2], Clazz.new_($I$(40,1)), vAB, Clazz.new_($I$(43,1))]);
case 24:
this.setShapeProperty$I$S$O(24, "thisID", id);
return this.getShapeProperty$I$S(24, "plane");
}
return null;
});

Clazz.newMeth(C$, 'getQuaternionArray$O$I', function (quaternionOrSVData, itype) {
var data;
switch (itype) {
case 134221850:
data=quaternionOrSVData;
break;
case 9:
var pts=quaternionOrSVData;
data=Clazz.array($I$(41), [pts.length]);
for (var i=0; i < pts.length; i++) data[i]=$I$(41).newP4$javajs_util_P4(pts[i]);

break;
case 1073742001:
var sv=quaternionOrSVData;
data=Clazz.array($I$(41), [sv.size$()]);
for (var i=0; i < sv.size$(); i++) {
var pt=$I$(8,"pt4Value$org_jmol_script_SV",[sv.get$I(i)]);
if (pt == null ) return null;
data[i]=$I$(41).newP4$javajs_util_P4(pt);
}
break;
default:
return null;
}
return data;
});

Clazz.newMeth(C$, 'getSetAxesTypeMad10$I', function (index) {
if (index == this.slen) return 1;
switch (this.getToken$I(this.checkLast$I(index)).tok) {
case 1073742335:
return 1;
case 1073742334:
return 0;
case 1073741926:
return -1;
case 2:
return this.intParameterRange$I$I$I(index, -1, 19);
case 3:
var angstroms=this.floatParameterRange$I$F$F(index, 0, 2);
return (Float.isNaN$F(angstroms) ? 2147483647 : (Math.floor(angstroms * 10000 * 2 )|0));
}
if (!this.chk) this.errorStr$I$S(7, "\"DOTTED\"");
return 0;
});

Clazz.newMeth(C$, 'getSettingFloat$I', function (pt) {
return (pt >= this.slen ? NaN : $I$(8,"fValue$org_jmol_script_T",[this.parameterExpressionToken$I(pt)]));
}, p$1);

Clazz.newMeth(C$, 'getSettingInt$I', function (pt) {
return (pt >= this.slen ? -2147483648 : this.parameterExpressionToken$I(pt).asInt$());
}, p$1);

Clazz.newMeth(C$, 'getSettingStr$I$Z', function (pt, isJmolSet) {
return (isJmolSet && this.slen == pt + 1  ? this.paramAsStr$I(pt) : this.parameterExpressionToken$I(pt).asString$());
}, p$1);

Clazz.newMeth(C$, 'getShapeProperty$I$S', function (shapeType, propertyName) {
return this.sm.getShapePropertyIndex$I$S$I(shapeType, propertyName, -2147483648);
});

Clazz.newMeth(C$, 'getShapePropertyData$I$S$OA', function (shapeType, propertyName, data) {
return this.sm.getShapePropertyData$I$S$OA(shapeType, propertyName, data);
});

Clazz.newMeth(C$, 'getShapeType$I', function (tok) {
var iShape=$I$(13).shapeTokenIndex$I(tok);
if (iShape < 0) this.error$I(49);
return iShape;
}, p$1);

Clazz.newMeth(C$, 'getTranslucentLevel$I', function (i) {
var f=this.floatParameter$I(i);
return (this.theTok == 2 && f > 0   && f < 9   ? f + 1 : f);
});

Clazz.newMeth(C$, 'getZoom$I$I$javajs_util_BS$F', function (ptCenter, i, bs, currentZoom) {
var zoom=(this.isFloatParameter$I(i) ? this.floatParameter$I(i++) : NaN);
if (zoom == 0  || currentZoom == 0  ) {
var r=NaN;
if (bs == null ) {
if (this.tokAt$I(ptCenter) == 1073742330) {
var bbox=p$1.getObjectBoundingBox$S.apply(this, [this.objectNameParameter$I(ptCenter + 1)]);
if (bbox == null  || (r=bbox[0].distance$javajs_util_T3(bbox[1]) / 2) == 0  ) this.invArg$();
}} else {
r=this.vwr.ms.calcRotationRadiusBs$javajs_util_BS(bs);
}if (Float.isNaN$F(r)) this.invArg$();
currentZoom=this.vwr.getFloat$I(570425388) / r * 100;
zoom=NaN;
}if (zoom < 0 ) {
zoom += currentZoom;
} else if (Float.isNaN$F(zoom)) {
var tok=this.tokAt$I(i);
switch (tok) {
case 1073742079:
case 1275068432:
zoom=currentZoom * (tok == 1073742079 ? 0.5 : 2.0);
i++;
break;
case 268435632:
case 268435633:
case 268435617:
var value=this.floatParameter$I(++i);
i++;
switch (tok) {
case 268435632:
zoom=currentZoom / value;
break;
case 268435633:
zoom=currentZoom * value;
break;
case 268435617:
zoom=currentZoom + value;
break;
}
break;
default:
zoom=(bs == null  ? -currentZoom : currentZoom);
}
}this.iToken=i - 1;
return zoom;
}, p$1);

Clazz.newMeth(C$, 'setElementColor$S$I', function (str, argb) {
for (var i=$I$(14).elementNumberMax; --i >= 0; ) {
if (str.equalsIgnoreCase$S($I$(14).elementNameFromNumber$I(i))) {
if (!this.chk) this.vwr.setElementArgb$I$I(i, argb);
return true;
}}
for (var i=$I$(14).altElementMax; --i >= 0; ) {
if (str.equalsIgnoreCase$S($I$(14).altElementNameFromIndex$I(i))) {
if (!this.chk) this.vwr.setElementArgb$I$I($I$(14).altElementNumberFromIndex$I(i), argb);
return true;
}}
if (str.charAt$I(0) != "_") return false;
for (var i=$I$(14).elementNumberMax; --i >= 0; ) {
if (str.equalsIgnoreCase$S("_" + $I$(14).elementSymbolFromNumber$I(i))) {
if (!this.chk) this.vwr.setElementArgb$I$I(i, argb);
return true;
}}
for (var i=$I$(14).altElementMax; --i >= 4; ) {
if (str.equalsIgnoreCase$S("_" + $I$(14).altElementSymbolFromIndex$I(i))) {
if (!this.chk) this.vwr.setElementArgb$I$I($I$(14).altElementNumberFromIndex$I(i), argb);
return true;
}if (str.equalsIgnoreCase$S("_" + $I$(14).altIsotopeSymbolFromIndex$I(i))) {
if (!this.chk) this.vwr.setElementArgb$I$I($I$(14).altElementNumberFromIndex$I(i), argb);
return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'setMeshDisplayProperty$I$I$I', function (shape, i, tok) {
var propertyName=null;
var propertyValue=null;
var allowCOLOR=(shape == 25);
var checkOnly=(i == 0);
if (!checkOnly) tok=this.getToken$I(i).tok;
switch (tok) {
case 1765808134:
if (allowCOLOR) this.iToken++;
 else break;
case 1073742074:
case 603979967:
if (!checkOnly) p$1.colorShape$I$I$Z.apply(this, [shape, this.iToken, false]);
return true;
case 0:
case 12291:
case 1073742335:
case 1073742334:
case 12294:
case 2097194:
case 1610625028:
case 2097192:
if (this.iToken == 1 && shape >= 0  && this.tokAt$I(2) == 0 ) this.setShapeProperty$I$S$O(shape, "thisID", null);
if (tok == 0) return (this.iToken == 1);
if (checkOnly) return true;
switch (tok) {
case 12291:
this.setShapeProperty$I$S$O(shape, "delete", null);
return true;
case 2097194:
case 12294:
tok=1073742334;
break;
case 2097192:
tok=1073742335;
break;
case 1610625028:
if (i + 1 == this.slen) tok=1073742335;
break;
}
case 1073741958:
case 1073741861:
case 1073741964:
case 1073741898:
case 1073742039:
case 1112150019:
case 1073742042:
case 1073742018:
case 1073742052:
case 1073741938:
case 1073742046:
case 1073741862:
case 1073742057:
case 1073742182:
case 1073742060:
case 1073741960:
case 1073742058:
propertyName="token";
propertyValue=Integer.valueOf$I(tok);
break;
}
if (propertyName == null ) return false;
if (checkOnly) return true;
this.setShapeProperty$I$S$O(shape, propertyName, propertyValue);
if ((this.tokAt$I(this.iToken + 1)) != 0) {
if (!this.setMeshDisplayProperty$I$I$I(shape, ++this.iToken, 0)) --this.iToken;
}return true;
});

Clazz.newMeth(C$, 'setObjectArgb$S$I', function (str, argb) {
if (this.chk) return;
this.vwr.setObjectArgb$S$I(str, argb);
}, p$1);

Clazz.newMeth(C$, 'setObjectMad10$I$S$I', function (iShape, name, mad10) {
if (!this.chk) this.vwr.setObjectMad10$I$S$I(iShape, name, mad10);
});

Clazz.newMeth(C$, 'setObjectProp$S$I$I', function (id, tokCommand, ptColor) {
var data=Clazz.array(java.lang.Object, -1, [id, null]);
var s="";
var isWild=$I$(7).isWild$S(id);
for (var iShape=17; ; ) {
if (this.getShapePropertyData$I$S$OA(iShape, "checkID", data)) {
this.setShapeProperty$I$S$O(iShape, "thisID", id);
switch (tokCommand) {
case 12291:
this.setShapeProperty$I$S$O(iShape, "delete", null);
break;
case 12294:
case 1610625028:
this.setShapeProperty$I$S$O(iShape, "hidden", tokCommand == 1610625028 ? Boolean.FALSE : Boolean.TRUE);
break;
case 134222350:
s += this.getShapeProperty$I$S(iShape, "command") + "\n";
break;
case 1765808134:
if (ptColor >= 0) p$1.colorShape$I$I$Z.apply(this, [iShape, ptColor + 1, false]);
break;
}
if (!isWild) break;
}switch (iShape) {
case 17:
iShape=20;
continue;
case 20:
iShape=32;
}
switch (--iShape) {
case 27:
iShape--;
break;
case 28:
iShape-=2;
break;
}
if (iShape < 21) break;
}
return s;
}, p$1);

Clazz.newMeth(C$, 'setObjectProperty$', function () {
var id=this.setShapeNameParameter$I(2);
return (this.chk ? "" : p$1.setObjectProp$S$I$I.apply(this, [id, this.tokAt$I(0), this.iToken]));
});

Clazz.newMeth(C$, 'setShapeNameParameter$I', function (i) {
var id=this.paramAsStr$I(i);
var isWild=id.equals$O("*");
if (id.length$() == 0) this.invArg$();
if (isWild) {
switch (this.tokAt$I(i + 1)) {
case 0:
case 1073742335:
case 1073742334:
case 2097192:
case 2097194:
case 1765808134:
case 12291:
break;
default:
if (this.setMeshDisplayProperty$I$I$I(-1, 0, this.tokAt$I(i + 1))) break;
id += this.optParameterAsString$I(++i);
}
}if (this.tokAt$I(i + 1) == 268435633) id += this.paramAsStr$I(++i);
this.iToken=i;
return id;
});

Clazz.newMeth(C$, 'setShapeProperty$I$S$O', function (shapeType, propertyName, propertyValue) {
if (!this.chk) this.sm.setShapePropertyBs$I$S$O$javajs_util_BS(shapeType, propertyName, propertyValue, null);
});

Clazz.newMeth(C$, 'setShapePropertyBs$I$S$O$javajs_util_BS', function (iShape, propertyName, propertyValue, bs) {
if (!this.chk) this.sm.setShapePropertyBs$I$S$O$javajs_util_BS(iShape, propertyName, propertyValue, bs);
});

Clazz.newMeth(C$, 'setShapeSize$I$org_jmol_atomdata_RadiusData', function (shapeType, rd) {
if (!this.chk) this.sm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(shapeType, 0, rd, null);
}, p$1);

Clazz.newMeth(C$, 'setShapeSizeBs$I$I$javajs_util_BS', function (shapeType, size, bs) {
if (!this.chk) this.sm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(shapeType, size, null, bs);
});

Clazz.newMeth(C$, 'setShapeTranslucency$I$S$S$F$javajs_util_BS', function (shapeType, prefix, translucency, translucentLevel, bs) {
if (translucentLevel == 3.4028235E38 ) translucentLevel=this.vwr.getFloat$I(570425354);
this.setShapeProperty$I$S$O(shapeType, "translucentLevel", Float.valueOf$F(translucentLevel));
if (prefix == null ) return;
if (bs == null ) this.setShapeProperty$I$S$O(shapeType, prefix + "translucency", translucency);
 else if (!this.chk) this.setShapePropertyBs$I$S$O$javajs_util_BS(shapeType, prefix + "translucency", translucency, bs);
});

Clazz.newMeth(C$, 'setSize$I$F', function (shape, scale) {
var rd=null;
var tok=this.tokAt$I(1);
var isOnly=false;
switch (tok) {
case 1073742072:
this.restrictSelected$Z$Z(false, false);
case 1073742335:
break;
case 1073742334:
scale=0;
break;
case 3:
isOnly=(this.floatParameter$I(1) < 0 );
case 2:
default:
rd=this.encodeRadiusParameter$I$Z$Z(1, isOnly, true);
if (rd == null ) return;
if (Float.isNaN$F(rd.value)) this.invArg$();
}
if (rd == null ) rd=Clazz.new_([null, scale, $I$(32).FACTOR, $I$(34).AUTO],$I$(33,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW);
if (isOnly) this.restrictSelected$Z$Z(false, false);
p$1.setShapeSize$I$org_jmol_atomdata_RadiusData.apply(this, [shape, rd]);
}, p$1);

Clazz.newMeth(C$, 'setSizeBio$I', function (iShape) {
var mad=0;
switch (this.getToken$I(1).tok) {
case 1073742072:
this.restrictSelected$Z$Z(false, false);
case 1073742335:
mad=-1;
break;
case 1073742334:
break;
case 1639976963:
mad=-2;
break;
case 1111492620:
case 1073741922:
mad=-4;
break;
case 2:
if ((mad=(this.intParameterRange$I$I$I(1, 0, 1000) * 8)) == 2147483647) return;
break;
case 3:
mad=Math.round(this.floatParameterRange$I$F$F(1, -4.0, 4.0) * 2000);
if (mad == 2147483647) return;
if (mad < 0) {
this.restrictSelected$Z$Z(false, false);
mad=-mad;
}break;
case 10:
if (!this.chk) this.sm.loadShape$I(iShape);
this.setShapeProperty$I$S$O(iShape, "bitset", this.theToken.value);
return;
default:
this.error$I(6);
}
this.setShapeSizeBs$I$I$javajs_util_BS(iShape, mad, null);
}, p$1);

Clazz.newMeth(C$, 'setUnits$S$I', function (units, tok) {
if (tok == 545259568 && (units.toLowerCase$().endsWith$S("hz") || $I$(7,"isOneOf$S$S",[units.toLowerCase$(), ";angstroms;au;bohr;nanometers;nm;picometers;pm;vanderwaals;vdw;"]) ) ) {
if (!this.chk) this.vwr.setUnits$S$Z(units, true);
} else if (tok == 545259558 && $I$(7,"isOneOf$S$S",[units.toLowerCase$(), ";kcal;kj;"]) ) {
if (!this.chk) this.vwr.setUnits$S$Z(units, false);
} else {
this.errorStr2$I$S$S(50, "set " + $I$(9).nameOf$I(tok), units);
}return true;
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
var str=Clazz.new_($I$(4,1));
str.append$S("Eval\n pc:");
str.appendI$I(this.pc);
str.append$S("\n");
str.appendI$I(this.aatoken.length);
str.append$S(" statements\n");
for (var i=0; i < this.aatoken.length; ++i) {
str.append$S("----\n");
var atoken=this.aatoken[i];
for (var j=0; j < atoken.length; ++j) {
str.appendO$O(atoken[j]);
str.appendC$C("\n");
}
str.appendC$C("\n");
}
str.append$S("END\n");
return str.toString();
});

C$.$static$=function(){C$.$static$=0;
C$.commandHistoryLevelMax=0;
C$.contextDepthMax=100;
C$.scriptReportingLevel=0;
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-04 06:50:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
