(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[[0,'java.util.Hashtable','org.jmol.script.SV']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ScriptContext");
C$.contextCount=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.contextCount=0;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.aatoken=null;
this.allowJSThreads=false;
this.chk=false;
this.contextPath=null;
this.vars=null;
this.displayLoadErrorsSave=false;
this.errorMessage=null;
this.errorMessageUntranslated=null;
this.errorType=null;
this.executionPaused=false;
this.executionStepping=false;
this.functionName=null;
this.iCommandError=0;
this.id=0;
this.isComplete=false;
this.isFunction=false;
this.isJSThread=false;
this.isStateScript=false;
this.isTryCatch=false;
this.forVars=null;
this.iToken=0;
this.lineEnd=0;
this.lineIndices=null;
this.lineNumbers=null;
this.mustResumeEval=false;
this.outputBuffer=null;
this.parallelProcessor=null;
this.parentContext=null;
this.pc=0;
this.pc0=0;
this.pcEnd=0;
this.script=null;
this.scriptExtensions=null;
this.scriptFileName=null;
this.scriptLevel=0;
this.statement=null;
this.htFileCache=null;
this.statementLength=0;
this.token=null;
this.tryPt=0;
this.theToken=null;
this.theTok=0;
this.pointers=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.contextPath=" >> ";
this.iCommandError=-1;
this.isComplete=true;
this.lineEnd=2147483647;
this.pcEnd=2147483647;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.id=++C$.contextCount;
}, 1);

Clazz.newMeth(C$, 'setMustResume$', function () {
var sc=this;
while (sc != null ){
sc.mustResumeEval=true;
sc.pc=sc.pc0;
sc=sc.parentContext;
}
});

Clazz.newMeth(C$, 'getVariable$S', function ($var) {
var context=this;
while (context != null  && !context.isFunction ){
if (context.vars != null  && context.vars.containsKey$O($var) ) return context.vars.get$O($var);
context=context.parentContext;
}
return null;
});

Clazz.newMeth(C$, 'getFullMap$', function () {
var ht=Clazz.new_($I$(1));
var context=this;
if (this.contextPath != null ) ht.put$TK$TV("_path", $I$(2).newS$S(this.contextPath));
while (context != null  && !context.isFunction ){
if (context.vars != null ) for (var key, $key = context.vars.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) if (!ht.containsKey$O(key)) {
var val=context.vars.get$O(key);
if (val.tok != 2 || val.intValue != 2147483647 ) ht.put$TK$TV(key, val);
}
context=context.parentContext;
}
return ht;
});

Clazz.newMeth(C$, 'saveTokens$org_jmol_script_TAA', function (aa) {
this.aatoken=aa;
if (aa == null ) {
this.pointers=null;
return;
}this.pointers=Clazz.array(Integer.TYPE, [aa.length]);
for (var i=this.pointers.length; --i >= 0; ) this.pointers[i]=(aa[i] == null  ? -1 : aa[i][0].intValue);

});

Clazz.newMeth(C$, 'restoreTokens$', function () {
if (this.pointers != null ) for (var i=this.pointers.length; --i >= 0; ) if (this.aatoken[i] != null ) this.aatoken[i][0].intValue=this.pointers[i];

return this.aatoken;
});

Clazz.newMeth(C$, 'getTokenCount$', function () {
return (this.aatoken == null  ? -1 : this.aatoken.length);
});

Clazz.newMeth(C$, 'getToken$I', function (i) {
return this.aatoken[i];
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
