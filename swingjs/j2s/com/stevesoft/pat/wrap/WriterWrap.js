(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap");
/*c*/var C$=Clazz.newClass(P$, "WriterWrap", null, null, 'com.stevesoft.pat.BasicStringBufferLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['w','java.io.Writer']]]

Clazz.newMeth(C$, 'c$$java_io_Writer',  function (w) {
;C$.$init$.apply(this);
this.w=w;
}, 1);

Clazz.newMeth(C$, 'append$C',  function (c) {
try {
this.w.write$I(c.$c());
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'append$S',  function (s) {
try {
this.w.write$S(s);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'toStringLike$',  function () {
return null;
});

Clazz.newMeth(C$, 'unwrap$',  function () {
return this.w;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
