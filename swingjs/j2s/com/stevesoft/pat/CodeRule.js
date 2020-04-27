(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CodeRule", null, 'com.stevesoft.pat.SpecialRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.c="E";
},1);

C$.$fields$=[['C',['c']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$C', function (c) {
Clazz.super_(C$, this);
this.c=c;
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, res) {
sb.setMode$C(this.c);
});

Clazz.newMeth(C$, 'toString1$', function () {
return "\\" + this.c;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
