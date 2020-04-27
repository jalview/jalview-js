(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[[0,'java.util.Hashtable','org.jmol.script.SV']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ContextToken", null, 'org.jmol.script.T');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.name0=null;
},1);

C$.$fields$=[['S',['name0'],'O',['contextVariables','java.util.Map','forVars','org.jmol.script.SV[]']]]

Clazz.newMeth(C$, 'newContext$Z', function (isOpen) {
var ct=(isOpen ? C$.newCmd$I$O(1275335685, "{") : C$.newCmd$I$O(1275334681, "}"));
ct.intValue=0;
return ct;
}, 1);

Clazz.newMeth(C$, 'newCmd$I$O', function (tok, value) {
var ct=Clazz.new_(C$);
ct.tok=tok;
ct.value=value;
return ct;
}, 1);

Clazz.newMeth(C$, 'addName$S', function (name) {
if (this.contextVariables == null ) this.contextVariables=Clazz.new_($I$(1,1));
this.contextVariables.put$O$O(name, $I$(2).newS$S("").setName$S(name));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:17 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
