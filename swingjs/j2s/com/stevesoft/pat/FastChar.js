(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FastChar", null, 'com.stevesoft.pat.oneChar');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$C', function (c) {
;C$.superclazz.c$$C.apply(this,[c]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (p, pt) {
return (p < pt.src.length$() && pt.src.charAt$I(p) == this.c ) ? this.nextMatch$I$com_stevesoft_pat_Pthings(p + 1, pt) : -1;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$C,[this.c]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
