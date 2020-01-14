(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
var C$=Clazz.newClass(P$, "FastChar", null, 'com.stevesoft.pat.oneChar');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$C', function (c) {
C$.superclazz.c$$C.apply(this, [c]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (p, pt) {
return (p < pt.src.length$() && pt.src.charAt$I(p) == this.c ) ? this.nextMatch$I$com_stevesoft_pat_Pthings(p + 1, pt) : -1;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$C,[this.c]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
