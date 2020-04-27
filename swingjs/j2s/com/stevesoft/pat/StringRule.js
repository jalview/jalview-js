(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StringRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['s']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
Clazz.super_(C$, this);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, res) {
sb.append$S(this.s);
});

Clazz.newMeth(C$, 'toString1$', function () {
return this.s;
});

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_(C$.c$$S,[this.s]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
