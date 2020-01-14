(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
var C$=Clazz.newClass(P$, "CustomEndpoint", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Custom', function (cm) {
Clazz.super_(C$, this,1);
this.c=cm;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
var npos=this.c.v.validate$com_stevesoft_pat_StringLike$I$I(pt.src, this.c.start, pos);
if (npos >= 0) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(npos, pt);
}return -1;
});

Clazz.newMeth(C$, 'toString', function () {
return "";
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$com_stevesoft_pat_Custom,[this.c.clone$java_util_Hashtable(h)]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
