(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[[0,'java.util.Hashtable','org.jmol.script.SV']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ContextToken", null, 'org.jmol.script.T');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.contextVariables=null;
this.forVars=null;
this.name0=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.name0=null;
}, 1);

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
if (this.contextVariables == null ) this.contextVariables=Clazz.new_($I$(1));
this.contextVariables.put$TK$TV(name, $I$(2).newS$S("").setName$S(name));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
