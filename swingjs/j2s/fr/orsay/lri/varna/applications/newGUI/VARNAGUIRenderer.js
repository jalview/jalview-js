(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.newGUI"),I$=[[0,'javax.swing.JOptionPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.BorderFactory','java.awt.Color','javax.swing.UIManager','javax.swing.JButton',['fr.orsay.lri.varna.applications.newGUI.VARNAGUIRenderer','.FolderCloses']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VARNAGUIRenderer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.tree.DefaultTreeCellRenderer');
C$._default=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$._default=Clazz.new_(C$.c$$javax_swing_JTree$fr_orsay_lri_varna_applications_newGUI_VARNAGUITreeModel,[null, null]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._j=null;
this._m=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JTree$fr_orsay_lri_varna_applications_newGUI_VARNAGUITreeModel', function (j, m) {
Clazz.super_(C$, this,1);
this._j=j;
this._m=m;
}, 1);

Clazz.newMeth(C$, 'baseElements$javax_swing_JTree$fr_orsay_lri_varna_applications_newGUI_VARNAGUITreeModel$O$Z$Z$Z$I$Z', function (tree, m, value, sel, expanded, leaf, row, hasFocus) {
var initValue=C$.superclazz.prototype.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z.apply(this, [tree, value, sel, expanded, leaf, row, hasFocus]);
var result=Clazz.new_($I$(2));
result.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3)));
initValue.setBorder$javax_swing_border_Border(null);
if (hasFocus) {
result.setBorder$javax_swing_border_Border($I$(4).createLineBorder$java_awt_Color($I$(5).blue));
result.setBackground$java_awt_Color($I$(6).getColor$O("Tree.selectionBackground"));
initValue.setOpaque$Z(true);
} else {
result.setBackground$java_awt_Color($I$(5).white);
result.setBorder$javax_swing_border_Border($I$(4).createLineBorder$java_awt_Color(initValue.getBackground$()));
}var t=value;
var o=t.getUserObject$();
if (!(Clazz.instanceOf(o, "fr.orsay.lri.varna.applications.newGUI.VARNAGUIModel"))) {
if (expanded) {
initValue.setIcon$javax_swing_Icon(C$._default.getOpenIcon$());
} else {
initValue.setIcon$javax_swing_Icon(C$._default.getClosedIcon$());
}result.add$java_awt_Component$O(initValue, "West");
var del=Clazz.new_($I$(7).c$$S,["X"]);
del.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(8).c$$S$javax_swing_JComponent$fr_orsay_lri_varna_applications_newGUI_VARNAGUITreeModel, [this, null, o, tree, m]));
result.add$java_awt_Component$O(del, "East");
} else {
var mod=o;
initValue.setIcon$javax_swing_Icon(C$._default.getLeafIcon$());
result.add$java_awt_Component$O(initValue, "West");
if (mod.hasChanged$()) {
var refresh=Clazz.new_($I$(7).c$$S,["Refresh"]);
result.add$java_awt_Component$O(refresh, "East");
}}return result;
});

Clazz.newMeth(C$, 'getDefaultTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z', function (tree, value, sel, expanded, leaf, row, hasFocus) {
return C$.superclazz.prototype.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z.apply(this, [tree, value, sel, expanded, leaf, row, hasFocus]);
});

Clazz.newMeth(C$, ['getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z','getTreeCellRendererComponent$'], function (tree, value, sel, expanded, leaf, row, hasFocus) {
return this.baseElements$javax_swing_JTree$fr_orsay_lri_varna_applications_newGUI_VARNAGUITreeModel$O$Z$Z$Z$I$Z(tree, this._m, value, sel, expanded, leaf, row, hasFocus);
});

Clazz.newMeth(C$, 'getPreferredSize$I', function (row) {
var size=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
size.width=this._j.getWidth$();
System.out.println$O(size);
return size;
});
;
(function(){var C$=Clazz.newClass(P$.VARNAGUIRenderer, "FolderCloses", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._path=null;
this._p=null;
this._m=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_JComponent$fr_orsay_lri_varna_applications_newGUI_VARNAGUITreeModel', function (path, p, m) {
C$.$init$.apply(this);
this._path=path;
this._p=p;
this._m=m;
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if ($I$(1).showConfirmDialog$java_awt_Component$O$S$I(this._p, "This folder will cease to be watched. Confirm?", "Closing folder", 0) == 0) {
this._m.removeFolder$S(this._path);
System.out.println$O(this.this$0._j);
this.this$0._j.updateUI$();
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
