(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
var C$=Clazz.newClass(P$, "TransRepRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.t=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Transformer', function (t) {
Clazz.super_(C$, this,1);
this.t=t;
}, 1);

Clazz.newMeth(C$, 'toString1$', function () {
return "";
});

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_(C$.c$$com_stevesoft_pat_Transformer,[this.t]);
});

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, rr) {
this.next=this.t.tp.ra[this.t.tp.pn].getReplaceRule$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
