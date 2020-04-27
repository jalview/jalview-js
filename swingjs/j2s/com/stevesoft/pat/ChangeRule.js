(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ChangeRule", null, 'com.stevesoft.pat.SpecialRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['NewRule','com.stevesoft.pat.Regex']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_ChangeRule', function (c) {
Clazz.super_(C$, this);
this.NewRule=c.NewRule;
}, 1);

Clazz.newMeth(C$, 'c$$S$com_stevesoft_pat_Regex', function (nm, rr) {
Clazz.super_(C$, this);
this.name=nm;
this.NewRule=rr;
}, 1);

Clazz.newMeth(C$, 'c$$S$com_stevesoft_pat_Transformer', function (nm, tr) {
Clazz.super_(C$, this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
