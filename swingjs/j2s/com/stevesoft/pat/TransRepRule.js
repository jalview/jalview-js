(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TransRepRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['t','com.stevesoft.pat.Transformer']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Transformer',  function (t) {
Clazz.super_(C$, this);
this.t=t;
}, 1);

Clazz.newMeth(C$, 'toString1$',  function () {
return "";
});

Clazz.newMeth(C$, 'clone1$',  function () {
return Clazz.new_(C$.c$$com_stevesoft_pat_Transformer,[this.t]);
});

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes',  function (sb, rr) {
this.next=this.t.tp.ra[this.t.tp.pn].getReplaceRule$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
