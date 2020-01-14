(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap");
var C$=Clazz.newClass(P$, "WriterWrap", null, null, 'com.stevesoft.pat.BasicStringBufferLike');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.w=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer', function (w) {
C$.$init$.apply(this);
this.w=w;
}, 1);

Clazz.newMeth(C$, 'append$C', function (c) {
try {
this.w.write$I(c.$c());
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'append$S', function (s) {
try {
this.w.write$S(s);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'toStringLike$', function () {
return null;
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.w;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
