(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[[0,'javax.swing.JPopupMenu','javax.swing.JMenu','javax.swing.MenuSelectionManager','javax.swing.JMenuItem','javax.swing.JRadioButtonMenuItem','javax.swing.JCheckBoxMenuItem']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AwtSwingComponent", null, null, 'org.jmol.api.SC');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['deferred'],'O',['jc','javax.swing.JComponent','ab','javax.swing.AbstractButton','jmi','javax.swing.JMenuItem','jm','javax.swing.JMenu','parent','org.jmol.api.SC']]]

Clazz.newMeth(C$, 'getPopup$S$java_util_Map', function (title, htSources) {
var c=Clazz.new_(C$);
c.jc=Clazz.new_($I$(1,1).c$$S,[title]);
htSources.put$O$O(c.jc, c);
return c;
}, 1);

Clazz.newMeth(C$, 'getMenu$S$java_util_Map', function (name, htSources) {
var c=Clazz.new_(C$);
c.jc=c.ab=c.jmi=c.jm=Clazz.new_($I$(2,1).c$$S,[name]);
c.jc.setName$S(name);
htSources.put$O$O(c.jc, c);
return c;
}, 1);

Clazz.newMeth(C$, 'getMenuItem$org_jmol_awt_AwtPopupHelper$S$java_util_Map', function (helper, name, htSources) {
var c=Clazz.new_(C$);
c.jc=c.ab=c.jmi=((P$.AwtSwingComponent$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AwtSwingComponent$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JMenuItem'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['path','javax.swing.MenuElement[]']]]

Clazz.newMeth(C$, 'setArmed$Z', function (b) {
C$.superclazz.prototype.setArmed$Z.apply(this, [b]);
if (b) this.path=$I$(3).defaultManager$().getSelectedPath$();
});

Clazz.newMeth(C$, 'doClick$I', function (n) {
C$.superclazz.prototype.doClick$I.apply(this, [n]);
this.$finals$.helper.reinstateMenu$javax_swing_JMenuItem$javax_swing_MenuElementA(this, this.path);
});
})()
), Clazz.new_($I$(4,1).c$$S,[this, {helper:helper}, name],P$.AwtSwingComponent$1));
htSources.put$O$O(c.jc, c);
return c;
}, 1);

Clazz.newMeth(C$, 'getRadio$org_jmol_awt_AwtPopupHelper$S$java_util_Map', function (helper, name, htSources) {
var c=Clazz.new_(C$);
c.jc=c.ab=c.jmi=((P$.AwtSwingComponent$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AwtSwingComponent$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JRadioButtonMenuItem'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['path','javax.swing.MenuElement[]']]]

Clazz.newMeth(C$, 'setArmed$Z', function (b) {
C$.superclazz.prototype.setArmed$Z.apply(this, [b]);
if (b) this.path=$I$(3).defaultManager$().getSelectedPath$();
});

Clazz.newMeth(C$, 'doClick$I', function (n) {
C$.superclazz.prototype.doClick$I.apply(this, [n]);
this.$finals$.helper.reinstateMenu$javax_swing_JMenuItem$javax_swing_MenuElementA(this, this.path);
});
})()
), Clazz.new_($I$(5,1).c$$S,[this, {helper:helper}, name],P$.AwtSwingComponent$2));
htSources.put$O$O(c.jc, c);
return c;
}, 1);

Clazz.newMeth(C$, 'getCheckBox$org_jmol_awt_AwtPopupHelper$S$java_util_Map', function (helper, name, htSources) {
var c=Clazz.new_(C$);
c.jc=c.ab=c.jmi=((P$.AwtSwingComponent$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AwtSwingComponent$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JCheckBoxMenuItem'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['path','javax.swing.MenuElement[]']]]

Clazz.newMeth(C$, 'setArmed$Z', function (b) {
C$.superclazz.prototype.setArmed$Z.apply(this, [b]);
if (b) this.path=$I$(3).defaultManager$().getSelectedPath$();
});

Clazz.newMeth(C$, 'doClick$I', function (n) {
C$.superclazz.prototype.doClick$I.apply(this, [n]);
this.$finals$.helper.reinstateMenu$javax_swing_JMenuItem$javax_swing_MenuElementA(this, this.path);
});
})()
), Clazz.new_($I$(6,1).c$$S,[this, {helper:helper}, name],P$.AwtSwingComponent$3));
htSources.put$O$O(c.jc, c);
return c;
}, 1);

Clazz.newMeth(C$, 'add$org_jmol_api_SC', function (item) {
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
return (i < 0 ? this.jc : this.jm == null  ? this.jc.getComponent$I(i) : this.jm.getItem$I(i));
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

Clazz.newMeth(C$, 'init$S$O$S$org_jmol_api_SC', function (text, icon, actionCommand, popupMenu) {
this.setText$S(text);
this.setIcon$O(icon);
this.setActionCommand$S(actionCommand);
});

Clazz.newMeth(C$, 'insert$org_jmol_api_SC$I', function (subMenu, index) {
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
