(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[];
var C$=Clazz.newClass(P$, "EditorKit", null, null, 'Cloneable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
var o;
try {
o=Clazz.clone(this);
} catch (cnse) {
if (Clazz.exceptionOf(cnse,"CloneNotSupportedException")){
o=null;
} else {
throw cnse;
}
}
return o;
});

Clazz.newMeth(C$, 'install$javax_swing_JEditorPane', function (c) {
});

Clazz.newMeth(C$, 'deinstall$javax_swing_JEditorPane', function (c) {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:23 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
