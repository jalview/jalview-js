(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'javajs.util.Lst','javax.swing.JPanel','javax.swing.BoxLayout','javax.swing.JComboBox','java.awt.Dimension',['swingjs.plaf.JComboPane','.Page']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JComboPane", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pagePanel=null;
this.tabs=null;
this.pages=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.pages=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.pagePanel=Clazz.new_($I$(2));
this.pagePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3).c$$java_awt_Container$I,[this.pagePanel, 3]));
this.tabs=Clazz.new_($I$(4));
this.tabs.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(5).c$$I$I,[150, 15]));
this.tabs.addItemListener$java_awt_event_ItemListener(((P$.JComboPane$1||
(function(){var C$=Clazz.newClass(P$, "JComboPane$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
p$1.update$Z.apply(this.b$['swingjs.plaf.JComboPane'], [false]);
});
})()
), Clazz.new_(P$.JComboPane$1.$init$, [this, null])));
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3).c$$java_awt_Container$I,[this, 3]));
this.add$java_awt_Component(this.tabs);
this.add$java_awt_Component(this.pagePanel);
}, 1);

Clazz.newMeth(C$, 'add$javax_swing_JComponent$S$I', function (panel, title, index) {
this.addTab$javax_swing_JComponent$S$I(panel, title, index);
});

Clazz.newMeth(C$, 'add$S$javax_swing_JComponent', function (title, panel) {
this.addTab$javax_swing_JComponent$S$I(panel, title, this.pages.size$());
});

Clazz.newMeth(C$, 'addTab$S$javax_swing_JComponent', function (title, panel) {
this.addTab$javax_swing_JComponent$S$I(panel, title, this.pages.size$());
});

Clazz.newMeth(C$, 'addTab$javax_swing_JComponent$S$I', function (panel, title, index) {
var page=Clazz.new_($I$(6), [this, null]);
page.component=panel;
page.tab=(title == null  ? "tab" + index : title);
panel.setVisible$Z(true);
if (index < this.pages.size$()) {
this.pages.get$I(index).component=panel;
} else {
this.pages.addLast$TV(page);
p$1.update$Z.apply(this, [true]);
}});

Clazz.newMeth(C$, 'update$Z', function (combo) {
if (combo) {
var i0=this.tabs.getSelectedIndex$();
this.tabs.removeAllItems$();
for (var i=0; i < this.pages.size$(); i++) {
this.tabs.addItem$O(this.pages.get$I(i).tab);
}
this.tabs.setSelectedIndex$I(i0 < 0 ? 0 : i0);
}this.pagePanel.removeAll$();
var selected=this.getSelectedIndex$();
if (selected >= 0) {
this.pagePanel.add$java_awt_Component(this.pages.get$I(selected).component);
}this.revalidate$();
this.repaint$();
}, p$1);

Clazz.newMeth(C$, 'setComponentAt$I$javax_swing_JPanel', function (index, panel) {
if (index < 0 || index >= this.pages.size$() ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
this.pages.get$I(index).component=panel;
p$1.update$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'getTabCount$', function () {
return this.tabs.getItemCount$();
});

Clazz.newMeth(C$, 'setSelectedIndex$I', function (index) {
this.tabs.setSelectedIndex$I(index);
p$1.update$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'getSelectedIndex$', function () {
return this.tabs.getSelectedIndex$();
});

Clazz.newMeth(C$, 'setEnabledAt$I$Z', function (index, bEnable) {
});

Clazz.newMeth(C$, 'remove$I', function (n) {
this.pages.removeItemAt$I(n);
this.tabs.removeItemAt$I(n);
p$1.update$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'setMnemonicAt$I$I', function (i, mnemonic) {
});

Clazz.newMeth(C$, 'setDisplayedMnemonicIndexAt$I$I', function (i, displayedMnemonicIndex) {
});
;
(function(){var C$=Clazz.newClass(P$.JComboPane, "Page", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tab=null;
this.component=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
