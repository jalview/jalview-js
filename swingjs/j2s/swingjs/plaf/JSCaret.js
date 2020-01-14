(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[];
var C$=Clazz.newClass(P$, "JSCaret", null, 'javax.swing.text.DefaultCaret', ['javax.swing.text.Caret', 'javax.swing.plaf.UIResource']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
});

Clazz.newMeth(C$, 'isVisible$', function () {
return true;
});

Clazz.newMeth(C$, 'setVisible$Z', function (v) {
});

Clazz.newMeth(C$, 'isSelectionVisible$', function () {
return true;
});

Clazz.newMeth(C$, 'setSelectionVisible$Z', function (v) {
});

Clazz.newMeth(C$, 'setBlinkRate$I', function (rate) {
});

Clazz.newMeth(C$, 'getBlinkRate$', function () {
return 0;
});

Clazz.newMeth(C$, 'toString', function () {
return "caret[" + this.dot + "," + this.mark + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-04 08:07:21 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
