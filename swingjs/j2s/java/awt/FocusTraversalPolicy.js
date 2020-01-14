(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
var C$=Clazz.newClass(P$, "FocusTraversalPolicy");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInitialComponent$java_awt_Window', function (window) {
if (window == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["window cannot be equal to null."]);
}var def=this.getDefaultComponent$java_awt_Container(window);
if (def == null  && window.isFocusableWindow$() ) {
def=window;
}return def;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:21 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
