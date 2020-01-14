(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
var C$=Clazz.newClass(P$, "ChangeRule", null, 'com.stevesoft.pat.SpecialRule');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.NewRule=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_ChangeRule', function (c) {
Clazz.super_(C$, this,1);
this.NewRule=c.NewRule;
}, 1);

Clazz.newMeth(C$, 'c$$S$com_stevesoft_pat_Regex', function (nm, rr) {
Clazz.super_(C$, this,1);
this.name=nm;
this.NewRule=rr;
}, 1);

Clazz.newMeth(C$, 'c$$S$com_stevesoft_pat_Transformer', function (nm, tr) {
Clazz.super_(C$, this,1);
this.name=nm;
this.NewRule=tr.rp;
}, 1);

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_(C$.c$$com_stevesoft_pat_ChangeRule,[this]);
});

Clazz.newMeth(C$, 'toString1$', function () {
return "${=" + this.name + "}" ;
});

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, rr) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
