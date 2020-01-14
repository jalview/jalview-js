(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
var C$=Clazz.newClass(P$, "BackRefRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.n=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
Clazz.super_(C$, this,1);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
