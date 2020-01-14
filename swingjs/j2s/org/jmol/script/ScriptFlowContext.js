(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[[0,'org.jmol.script.ScriptCompiler']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ScriptFlowContext");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.compiler=null;
this.token=null;
this.pt0=0;
this.ptDefault=0;
this.$function=null;
this.$var=null;
this.parent=null;
this.lineStart=0;
this.commandStart=0;
this.ptLine=0;
this.ptCommand=0;
this.forceEndIf=false;
this.ident=null;
this.addLine=0;
this.tok0=0;
this.ichCommand=0;
this.line0=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.forceEndIf=true;
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_script_ScriptCompiler$org_jmol_script_ContextToken$I$org_jmol_script_ScriptFlowContext$I$H', function (compiler, token, pt0, parent, ich, line0) {
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
