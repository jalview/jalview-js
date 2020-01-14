(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
var C$=Clazz.newClass(P$, "CodeRule", null, 'com.stevesoft.pat.SpecialRule');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c='\0';
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.c="E";
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$C', function (c) {
Clazz.super_(C$, this,1);
this.c=c;
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, res) {
sb.setMode$C(this.c);
});

Clazz.newMeth(C$, 'toString1$', function () {
return "\\" + this.c;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
