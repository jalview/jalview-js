(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'javax.swing.JLabel',['javax.swing.JPopupMenu','.Separator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PopupMenu", null, 'javax.swing.JPopupMenu', 'swingjs.a2s.AWTPopupMenu');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (string) {
C$.superclazz.c$$S.apply(this, [string]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'countItems$', function () {
return this.getComponentCount$();
});

Clazz.newMeth(C$, 'add$java_awt_MenuItem', function (mi) {
return this.add$java_awt_Component(mi);
});

Clazz.newMeth(C$, 'getItemCount$', function () {
return this.getComponentCount$();
});

Clazz.newMeth(C$, 'getItem$I', function (index) {
return this.getComponent$I(index);
});

Clazz.newMeth(C$, 'insert$java_awt_MenuItem$I', function (menuitem, index) {
this.insert$java_awt_Component$I(menuitem, index);
});

Clazz.newMeth(C$, 'insert$S$I', function (label, index) {
this.insert$java_awt_Component$I(Clazz.new_($I$(1).c$$S,[label]), index);
});

Clazz.newMeth(C$, 'insertSeparator$I', function (index) {
var sep=Clazz.new_($I$(2));
sep._j2sInvalidateOnAdd=false;
this.insert$java_awt_Component$I(sep, index);
});

Clazz.newMeth(C$, 'remove$java_awt_MenuComponent', function (comp) {
this.remove$java_awt_Component(comp);
});

Clazz.newMeth(C$, 'isTearOff$', function () {
return false;
});

Clazz.newMeth(C$, 'getShortcut$', function () {
return null;
});

Clazz.newMeth(C$, 'setShortcut$java_awt_MenuShortcut', function (s) {
});

Clazz.newMeth(C$, 'deleteShortcut$', function () {
});

Clazz.newMeth(C$, 'setActionCommand$S', function (command) {
});

Clazz.newMeth(C$, 'getActionCommand$', function () {
return null;
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener', function (l) {
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener', function (l) {
});

Clazz.newMeth(C$, 'getActionListeners$', function () {
return null;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
