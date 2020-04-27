(function(){var P$=Clazz.newPackage("org.jmol.script"),p$1={},I$=[[0,'javajs.util.Lst','java.util.Hashtable','org.jmol.script.T','org.jmol.script.SV','javajs.util.AU','javajs.util.SB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptFunction", null, null, 'org.jmol.api.JmolScriptFunction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cmdpt0=-1;
this.names=Clazz.new_($I$(1,1));
this.variables=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['I',['pt0','chpt0','cmdpt0','nParameters','tok'],'S',['typeName','name','script'],'O',['names','javajs.util.Lst','variables','java.util.Map','returnValue','org.jmol.script.SV','aatoken','org.jmol.script.T[][]','lineIndices','int[][]','lineNumbers','short[]']]]

Clazz.newMeth(C$, 'isVariable$S', function (ident) {
return this.variables.containsKey$O(ident);
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (name, tok) {
;C$.$init$.apply(this);
this.set$S$I(name, tok);
this.typeName=$I$(3).nameOf$I(tok);
}, 1);

Clazz.newMeth(C$, 'set$S$I', function (name, tok) {
this.name=name;
this.tok=tok;
});

Clazz.newMeth(C$, 'setVariables$java_util_Map$javajs_util_Lst', function (contextVariables, params) {
var nParams=(params == null  ? 0 : params.size$());
for (var i=this.names.size$(); --i >= 0; ) {
var name=this.names.get$I(i).toLowerCase$();
var $var=(i < this.nParameters && i < nParams  ? params.get$I(i) : null);
if ($var != null  && $var.tok != 7 ) $var=$I$(4).newT$org_jmol_script_T($var);
contextVariables.put$O$O(name, ($var == null  ? $I$(4).newS$S("").setName$S(name) : $var));
}
if (this.tok != 364558) {
contextVariables.put$O$O("_argcount", (function(a,f){return f.apply(null,a)})([params == null  ? 0 : params.size$()],$I$(4).newI$I));
contextVariables.put$O$O("_arguments", (params == null  ? (function(a,f){return f.apply(null,a)})([Clazz.array(Integer.TYPE, -1, [])],$I$(4).getVariableAI$IA) : $I$(4).getVariableList$javajs_util_Lst(params)));
}contextVariables.put$O$O("_retval", (function(a,f){return f.apply(null,a)})([this.tok == 364558 ? 2147483647 : 0],$I$(4).newI$I));
});

Clazz.newMeth(C$, 'unsetVariables$java_util_Map$javajs_util_Lst', function (contextVariables, params) {
var nParams=(params == null  ? 0 : params.size$());
var nNames=this.names.size$();
if (nParams == 0 || nNames == 0 ) return;
for (var i=0; i < nNames && i < nParams ; i++) {
var global=params.get$I(i);
if (global.tok != 7) continue;
var local=contextVariables.get$O(this.names.get$I(i).toLowerCase$());
if (local.tok != 7) continue;
global.value=local.value;
}
});

Clazz.newMeth(C$, 'addVariable$S$Z', function (name, isParameter) {
this.variables.put$O$O(name, name);
this.names.addLast$O(name);
if (isParameter) this.nParameters++;
});

Clazz.newMeth(C$, 'setFunction$org_jmol_script_ScriptFunction$S$I$I$HA$IAA$javajs_util_Lst', function ($function, script, ichCurrentCommand, pt, lineNumbers, lineIndices, lltoken) {
var cmdpt0=$function.cmdpt0;
var chpt0=$function.chpt0;
var nCommands=pt - cmdpt0;
p$1.setScript$S.apply($function, [script.substring$I$I(chpt0, ichCurrentCommand)]);
var aatoken=$function.aatoken=Clazz.array($I$(3), [nCommands, null]);
$function.lineIndices=$I$(5).newInt2$I(nCommands);
$function.lineNumbers=Clazz.array(Short.TYPE, [nCommands]);
var line0=($s$[0] = (lineNumbers[cmdpt0] - 1), $s$[0]);
for (var i=0; i < nCommands; i++) {
$function.lineNumbers[i]=((lineNumbers[cmdpt0 + i] - line0)|0);
$function.lineIndices[i]=Clazz.array(Integer.TYPE, -1, [lineIndices[cmdpt0 + i][0] - chpt0, lineIndices[cmdpt0 + i][1] - chpt0]);
aatoken[i]=lltoken.get$I(cmdpt0 + i);
if (aatoken[i].length > 0) {
var tokenCommand=aatoken[i][0];
if ($I$(3).tokAttr$I$I(tokenCommand.tok, 102400)) tokenCommand.intValue-=(tokenCommand.intValue < 0 ? -cmdpt0 : cmdpt0);
}}
for (var i=pt; --i >= cmdpt0; ) {
lltoken.removeItemAt$I(i);
lineIndices[i][0]=lineIndices[i][1]=0;
}
}, 1);

Clazz.newMeth(C$, 'setScript$S', function (s) {
this.script=s;
if (this.script != null  && this.script != ""  && !this.script.endsWith$S("\n") ) this.script += "\n";
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
var s=Clazz.new_($I$(6,1)).append$S("/*\n * ").append$S(this.name).append$S("\n */\n").append$S(this.getSignature$()).append$S(" {\n");
if (this.script != null ) s.append$S(this.script);
s.append$S("}\n");
return s.toString();
});

Clazz.newMeth(C$, 'getSignature$', function () {
if (this.typeName == null ) return $I$(3).nameOf$I(this.tok);
var s=Clazz.new_($I$(6,1)).append$S(this.typeName).append$S(" ").append$S(this.name).append$S("(");
for (var i=0; i < this.nParameters; i++) {
if (i > 0) s.append$S(", ");
s.append$S(this.names.get$I(i));
}
s.append$S(")");
return s.toString();
});

Clazz.newMeth(C$, 'geTokens$', function () {
return this.aatoken;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getTok$', function () {
return this.tok;
});
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:18 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
