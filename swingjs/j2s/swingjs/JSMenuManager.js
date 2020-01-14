(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'swingjs.JSUtil','swingjs.api.js.DOMNode','java.awt.EventQueue','javax.swing.MenuElement']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSMenuManager", null, 'javax.swing.MenuSelectionManager');
C$.currentNode=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setCurrentNode$O', function (node) {
C$.currentNode=node;
javax.swing.MenuSelectionManager.defaultManager$().clearSelectedPath$();
}, 1);

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent', function (e) {
if ((e.getModifiers$() & ~8) != 0) {
p$1.checkNavigationKeys$java_awt_event_KeyEvent.apply(this, [e]);
return;
}var i=Character.toLowerCase$I(e.getKeyCode$());
var obj=$I$(1).jQuery.$(".a.ui-mnem-" + i);
var node=(obj[0] ||null);
var jc=$I$(2).getAttr(node, "data-component");
if (jc == null ) return;
$I$(3).setCurrentEventAndMostRecentTime$java_awt_AWTEvent(e);
jc.processKeyEvent$java_awt_event_KeyEvent$javax_swing_MenuElementA$javax_swing_MenuSelectionManager(e, p$1.getPathTo$javax_swing_MenuElement$Z.apply(this, [jc, true]), this);
});

Clazz.newMeth(C$, 'checkNavigationKeys$java_awt_event_KeyEvent', function (e) {
}, p$1);

Clazz.newMeth(C$, 'setCurrentPath$javax_swing_JComponent', function (jc) {
C$.currentNode=null;
this.setSelectedPath$javax_swing_MenuElementA(p$1.getPathTo$javax_swing_MenuElement$Z.apply(this, [jc, false]));
});

Clazz.newMeth(C$, 'getPathTo$javax_swing_MenuElement$Z', function (jc, addTarget) {
var selection=Clazz.array($I$(4), [0]);
while (jc != null ){
if (addTarget) {

selection.push(jc);
}jc=jc.parent || jc.invoker ||null;
if (!(Clazz.instanceOf(jc, "javax.swing.MenuElement"))) break;

selection.push(jc);
}

selection.reverse()
return selection;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
