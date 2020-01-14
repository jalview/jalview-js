(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
var C$=Clazz.newClass(P$, "RuleHolder", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.held=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.held=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_ReplaceRule', function (h) {
Clazz.super_(C$, this,1);
this.held=h;
}, 1);

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_(C$.c$$com_stevesoft_pat_ReplaceRule,[this.held]);
});

Clazz.newMeth(C$, 'toString1$', function () {
return this.held.toString1$();
});

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, rr) {
this.held.apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes(sb, rr);
});

Clazz.newMeth(C$, 'arg$S', function (s) {
return Clazz.new_(C$.c$$com_stevesoft_pat_ReplaceRule,[this.held.arg$S(s)]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
