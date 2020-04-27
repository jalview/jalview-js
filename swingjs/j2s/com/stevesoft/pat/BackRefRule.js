(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BackRefRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['n']]]

Clazz.newMeth(C$, 'c$$I', function (n) {
Clazz.super_(C$, this);
this.n=n;
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, res) {
var x=res.stringMatched$I(this.n);
sb.append$S(x == null  ? "" : x);
});

Clazz.newMeth(C$, 'toString1$', function () {
return "$" + this.n;
});

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_(C$.c$$I,[this.n]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
