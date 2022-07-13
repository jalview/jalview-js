(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[[0,'java.util.Hashtable','org.jmol.script.SV']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScriptContext");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.contextPath=" >> ";
this.iCommandError=-1;
this.isComplete=true;
this.lineEnd=2147483647;
this.pcEnd=2147483647;
},1);

C$.$fields$=[['Z',['allowJSThreads','chk','displayLoadErrorsSave','executionPaused','executionStepping','isComplete','isFunction','isJSThread','isStateScript','isTryCatch','mustResumeEval'],'I',['iCommandError','id','iToken','lineEnd','pc','pc0','pcEnd','scriptLevel','statementLength','tryPt','theTok'],'S',['contextPath','errorMessage','errorMessageUntranslated','errorType','functionName','script','scriptExtensions','scriptFileName'],'O',['aatoken','org.jmol.script.T[][]','vars','java.util.Map','forVars','org.jmol.script.SV[]','lineIndices','int[][]','lineNumbers','short[]','outputBuffer','javajs.util.SB','parallelProcessor','org.jmol.api.JmolParallelProcessor','parentContext','org.jmol.script.ScriptContext','statement','org.jmol.script.T[]','htFileCache','java.util.Map','token','org.jmol.script.ContextToken','theToken','org.jmol.script.T','pointers','int[]']]
,['I',['contextCount']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
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
var ht=Clazz.new_($I$(1,1));
var context=this;
if (this.contextPath != null ) ht.put$O$O("_path", $I$(2).newS$S(this.contextPath));
while (context != null  && !context.isFunction ){
if (context.vars != null ) for (var key, $key = context.vars.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) if (!ht.containsKey$O(key)) {
var val=context.vars.get$O(key);
if (val.tok != 2 || val.intValue != 2147483647 ) ht.put$O$O(key, val);
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

C$.$static$=function(){C$.$static$=0;
C$.contextCount=0;
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:43 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
