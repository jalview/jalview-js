(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RuleHolder", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.held=null;
},1);

C$.$fields$=[['O',['held','com.stevesoft.pat.ReplaceRule']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_ReplaceRule',  function (h) {
Clazz.super_(C$, this);
this.held=h;
}, 1);

Clazz.newMeth(C$, 'clone1$',  function () {
return Clazz.new_(C$.c$$com_stevesoft_pat_ReplaceRule,[this.held]);
});

Clazz.newMeth(C$, 'toString1$',  function () {
return this.held.toString1$();
});

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes',  function (sb, rr) {
this.held.apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes(sb, rr);
});

Clazz.newMeth(C$, 'arg$S',  function (s) {
return Clazz.new_(C$.c$$com_stevesoft_pat_ReplaceRule,[this.held.arg$S(s)]);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
