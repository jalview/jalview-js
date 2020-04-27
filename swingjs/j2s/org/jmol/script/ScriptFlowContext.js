(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[[0,'org.jmol.script.ScriptCompiler']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptFlowContext");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.forceEndIf=true;
},1);

C$.$fields$=[['Z',['forceEndIf'],'I',['pt0','ptDefault','lineStart','commandStart','ptLine','ptCommand','addLine','tok0','ichCommand'],'H',['line0'],'S',['ident'],'O',['compiler','org.jmol.script.ScriptCompiler','token','org.jmol.script.ContextToken','$function','org.jmol.script.ScriptFunction','$var','org.jmol.script.SV','parent','org.jmol.script.ScriptFlowContext']]]

Clazz.newMeth(C$, 'c$$org_jmol_script_ScriptCompiler$org_jmol_script_ContextToken$I$org_jmol_script_ScriptFlowContext$I$H', function (compiler, token, pt0, parent, ich, line0) {
;C$.$init$.apply(this);
this.compiler=compiler;
this.token=token;
this.tok0=token.tok;
this.ident=token.value;
this.pt0=pt0;
this.line0=line0;
this.parent=parent;
this.ichCommand=ich;
this.lineStart=this.ptLine=this.compiler.lineCurrent;
this.commandStart=this.ptCommand=this.compiler.iCommand;
}, 1);

Clazz.newMeth(C$, 'getBreakableContext$I', function (nLevelsUp) {
var f=this;
while (f != null  && (!$I$(1).isBreakableContext$I(f.token.tok) || nLevelsUp-- > 0 ) )f=f.parent;

return f;
});

Clazz.newMeth(C$, 'checkForceEndIf$I', function (offset) {
if (this.ptCommand == this.compiler.iCommand && this.addLine > 0 ) this.addLine++;
var test=this.forceEndIf && this.ptCommand < this.compiler.iCommand  && this.ptLine + (this.addLine == 0 ? 0 : this.addLine + offset) == this.compiler.lineCurrent ;
if (test) this.forceEndIf=false;
return test;
});

Clazz.newMeth(C$, 'setPt0$I$Z', function (pt0, isDefault) {
this.pt0=pt0;
if (isDefault) this.ptDefault=pt0;
this.setLine$();
return pt0;
});

Clazz.newMeth(C$, 'setLine$', function () {
this.ptLine=this.compiler.lineCurrent;
this.ptCommand=this.compiler.iCommand + 1;
});

Clazz.newMeth(C$, 'toString', function () {
return "ident " + this.ident + " line " + this.lineStart + " command " + this.commandStart ;
});

Clazz.newMeth(C$, 'path$', function () {
var s="";
var f=this;
while (f != null ){
s=f.ident + "-" + s ;
f=f.parent;
}
return "[" + s + "]" ;
});

Clazz.newMeth(C$, 'setFunction$org_jmol_script_ScriptFunction', function ($function) {
this.$function=$function;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:18 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
