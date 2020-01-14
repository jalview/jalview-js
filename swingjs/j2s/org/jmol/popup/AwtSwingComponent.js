(function(){var P$=Clazz.newPackage("org.jmol.popup"),I$=[[0,'javax.swing.JPopupMenu','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.JRadioButtonMenuItem','javax.swing.JCheckBoxMenuItem']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AwtSwingComponent", null, null, 'javajs.awt.SC');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.jc=null;
this.ab=null;
this.jmi=null;
this.jm=null;
this.parent=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPopup$S$java_util_Map', function (title, htSources) {
var c=Clazz.new_(C$);
c.jc=Clazz.new_($I$(1).c$$S,[title]);
htSources.put$TK$TV(c.jc, c);
return c;
}, 1);

Clazz.newMeth(C$, 'getMenu$S$java_util_Map', function (name, htSources) {
var c=Clazz.new_(C$);
c.jc=c.ab=c.jmi=c.jm=Clazz.new_($I$(2).c$$S,[name]);
htSources.put$TK$TV(c.jc, c);
return c;
}, 1);

Clazz.newMeth(C$, 'getMenuItem$S$java_util_Map', function (name, htSources) {
var c=Clazz.new_(C$);
c.jc=c.ab=c.jmi=Clazz.new_($I$(3).c$$S,[name]);
htSources.put$TK$TV(c.jc, c);
return c;
}, 1);

Clazz.newMeth(C$, 'getRadio$S$java_util_Map', function (name, htSources) {
var c=Clazz.new_(C$);
c.jc=c.ab=c.jmi=Clazz.new_($I$(4).c$$S,[name]);
htSources.put$TK$TV(c.jc, c);
return c;
}, 1);

Clazz.newMeth(C$, 'getCheckBox$S$java_util_Map', function (name, htSources) {
var c=Clazz.new_(C$);
c.jc=c.ab=c.jmi=Clazz.new_($I$(5).c$$S,[name]);
htSources.put$TK$TV(c.jc, c);
return c;
}, 1);

Clazz.newMeth(C$, 'add$javajs_awt_SC', function (item) {
if (item == null  || item.getIcon$() == null  && (item.getText$() == null  || item.getText$().length$() == 0 )  ) {
if (this.jm == null ) (this.jc).addSeparator$();
 else this.jm.addSeparator$();
return;
}var c=item;
this.jc.add$java_awt_Component(c.jc);
if (c.parent == null ) c.parent=this;
});

Clazz.newMeth(C$, 'addActionListener$O', function (owner) {
this.ab.addActionListener$java_awt_event_ActionListener(owner);
});

Clazz.newMeth(C$, 'addItemListener$O', function (owner) {
this.ab.addItemListener$java_awt_event_ItemListener(owner);
});

Clazz.newMeth(C$, 'addMouseListener$O', function (owner) {
this.jc.addMouseListener$java_awt_event_MouseListener(owner);
});

Clazz.newMeth(C$, 'getActionCommand$', function () {
return this.ab.getActionCommand$();
});

Clazz.newMeth(C$, 'getComponent$I', function (i) {
return (this.jm == null  ? this.jc.getComponent$I(i) : this.jm.getItem$I(i));
});

Clazz.newMeth(C$, 'getComponentCount$', function () {
return (this.jm == null  ? this.jc.getComponentCount$() : this.jm.getItemCount$());
});

Clazz.newMeth(C$, 'getComponents$', function () {
return this.jc.getComponents$();
});

Clazz.newMeth(C$, 'getName$', function () {
return this.jc.getName$();
});

Clazz.newMeth(C$, 'getParent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'getPopupMenu$', function () {
return this.jm.getPopupMenu$();
});

Clazz.newMeth(C$, 'getText$', function () {
return this.ab.getText$();
});

Clazz.newMeth(C$, 'getIcon$', function () {
return this.ab.getIcon$();
});

Clazz.newMeth(C$, 'init$S$O$S$javajs_awt_SC', function (text, icon, actionCommand, popupMenu) {
this.setText$S(text);
this.setIcon$O(icon);
this.setActionCommand$S(actionCommand);
});

Clazz.newMeth(C$, 'insert$javajs_awt_SC$I', function (subMenu, index) {
if (Clazz.instanceOf(this.jc, "javax.swing.JPopupMenu")) (this.jc).insert$java_awt_Component$I((subMenu).jm, index);
 else (this.jc).insert$javax_swing_JMenuItem$I((subMenu).jm, index);
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return this.jc.isEnabled$();
});

Clazz.newMeth(C$, 'isSelected$', function () {
return this.ab.isSelected$();
});

Clazz.newMeth(C$, 'remove$I', function (i) {
this.jc.remove$I(i);
});

Clazz.newMeth(C$, 'removeAll$', function () {
this.jc.removeAll$();
});

Clazz.newMeth(C$, 'setActionCommand$S', function (script) {
this.ab.setActionCommand$S(script);
});

Clazz.newMeth(C$, 'setAutoscrolls$Z', function (b) {
this.jc.setAutoscrolls$Z(b);
});

Clazz.newMeth(C$, 'setEnabled$Z', function (enabled) {
this.jc.setEnabled$Z(enabled);
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.jc.setName$S(name);
});

Clazz.newMeth(C$, 'setSelected$Z', function (b) {
this.ab.setSelected$Z(b);
});

Clazz.newMeth(C$, 'setText$S', function (text) {
this.ab.setText$S(text);
});

Clazz.newMeth(C$, 'setIcon$O', function (icon) {
this.ab.setIcon$javax_swing_Icon(icon);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
