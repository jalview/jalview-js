(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.fragseq"),I$=[[0,'javax.swing.JOptionPane','java.awt.BasicStroke','java.awt.Color','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JButton',['fr.orsay.lri.varna.applications.fragseq.FragSeqCellRenderer','.SimpleIcon'],['fr.orsay.lri.varna.applications.fragseq.FragSeqCellRenderer','.FolderCloses']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FragSeqCellRenderer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.tree.DefaultTreeCellRenderer');
C$.$classes$=[['FolderCloses',1],['SimpleIcon',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_j','javax.swing.JTree','_m','fr.orsay.lri.varna.applications.fragseq.FragSeqTreeModel']]
,['O',['_default','fr.orsay.lri.varna.applications.fragseq.FragSeqCellRenderer']]]

Clazz.newMeth(C$, 'c$$javax_swing_JTree$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel', function (j, m) {
Clazz.super_(C$, this);
this._j=j;
this._m=m;
}, 1);

Clazz.newMeth(C$, 'baseElements$javax_swing_JTree$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel$O$Z$Z$Z$I$Z', function (tree, m, value, sel, expanded, leaf, row, hasFocus) {
var initValue=C$.superclazz.prototype.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z.apply(this, [tree, value, sel, expanded, leaf, row, hasFocus]);
var result=Clazz.new_($I$(4,1));
result.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1)));
initValue.setBorder$javax_swing_border_Border(null);
result.setBorder$javax_swing_border_Border(null);
result.setBackground$java_awt_Color(initValue.getBackground$());
var t=value;
var o=t.getUserObject$();
if ((Clazz.instanceOf(o, "java.lang.String"))) {
if (expanded) {
initValue.setIcon$javax_swing_Icon(C$._default.getOpenIcon$());
} else {
initValue.setIcon$javax_swing_Icon(C$._default.getClosedIcon$());
}result.add$java_awt_Component$O(initValue, "West");
var del=Clazz.new_($I$(6,1));
del.setIcon$javax_swing_Icon(Clazz.new_([this, null, $I$(3).red, 26, false],$I$(7,1).c$$java_awt_Color$I$Z));
var d=this.getPreferredSize$();
d.width=24;
del.setPreferredSize$java_awt_Dimension(d);
del.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(8,1).c$$S$javax_swing_JComponent$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel,[this, null, o, tree, m]));
result.add$java_awt_Component$O(del, "East");
} else if ((Clazz.instanceOf(o, "fr.orsay.lri.varna.applications.fragseq.FragSeqRNASecStrModel"))) {
initValue.setIcon$javax_swing_Icon(Clazz.new_([this, null, $I$(3).blue.darker$()],$I$(7,1).c$$java_awt_Color));
result.add$java_awt_Component$O(initValue, "West");
} else if ((Clazz.instanceOf(o, "fr.orsay.lri.varna.applications.fragseq.FragSeqFileModel"))) {
initValue.setIcon$javax_swing_Icon(C$._default.getLeafIcon$());
var mod=o;
result.add$java_awt_Component$O(initValue, "West");
if (mod.hasChanged$()) {
var refresh=Clazz.new_($I$(6,1).c$$S,["Refresh"]);
result.add$java_awt_Component$O(refresh, "East");
}} else if ((Clazz.instanceOf(o, "fr.orsay.lri.varna.applications.fragseq.FragSeqModel"))) {
var mod=o;
initValue.setIcon$javax_swing_Icon(Clazz.new_($I$(7,1),[this, null]));
result.add$java_awt_Component$O(initValue, "West");
}return result;
});

Clazz.newMeth(C$, 'getDefaultTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z', function (tree, value, sel, expanded, leaf, row, hasFocus) {
return C$.superclazz.prototype.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z.apply(this, [tree, value, sel, expanded, leaf, row, hasFocus]);
});

Clazz.newMeth(C$, 'getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z', function (tree, value, sel, expanded, leaf, row, hasFocus) {
return this.baseElements$javax_swing_JTree$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel$O$Z$Z$Z$I$Z(tree, this._m, value, sel, expanded, leaf, row, hasFocus);
});

Clazz.newMeth(C$, 'getPreferredSize$I', function (row) {
var size=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
size.width=this._j.getWidth$();
System.out.println$O(size);
return size;
});

C$.$static$=function(){C$.$static$=0;
C$._default=Clazz.new_(C$.c$$javax_swing_JTree$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel,[null, null]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.FragSeqCellRenderer, "FolderCloses", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['_path'],'O',['_p','javax.swing.JComponent','_m','fr.orsay.lri.varna.applications.fragseq.FragSeqTreeModel']]]

Clazz.newMeth(C$, 'c$$S$javax_swing_JComponent$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel', function (path, p, m) {
;C$.$init$.apply(this);
this._path=path;
this._p=p;
this._m=m;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if ($I$(1).showConfirmDialog$java_awt_Component$O$S$I(this._p, "This folder will cease to be watched. Confirm?", "Closing folder", 0) == 0) {
this._m.removeFolder$S(this._path);
System.out.println$O(this.this$0._j);
this.this$0._j.updateUI$();
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FragSeqCellRenderer, "SimpleIcon", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.Icon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._w=16;
this._h=16;
this.stroke=Clazz.new_($I$(2,1).c$$F,[3]);
this._drawBackground=true;
},1);

C$.$fields$=[['Z',['_drawBackground'],'I',['_w','_h'],'O',['stroke','java.awt.BasicStroke','_r','java.awt.Color']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_awt_Color.apply(this, [$I$(3).magenta.darker$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color', function (r) {
C$.c$$java_awt_Color$I$Z.apply(this, [r, 16, true]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$I$Z', function (r, dim, drawBackground) {
C$.c$$java_awt_Color$I$I$Z.apply(this, [r, dim, dim, drawBackground]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$I$I$Z', function (r, width, height, drawBackground) {
;C$.$init$.apply(this);
this._r=r;
this._w=width;
this._h=height;
this._drawBackground=drawBackground;
}, 1);

Clazz.newMeth(C$, 'paintIcon$java_awt_Component$java_awt_Graphics$I$I', function (c, g, x, y) {
var g2d=g.create$();
if (this._drawBackground) {
g2d.setColor$java_awt_Color($I$(3).WHITE);
g2d.fillRect$I$I$I$I(x + 1, y + 1, this._w - 2, this._h - 2);
g2d.setColor$java_awt_Color($I$(3).BLACK);
g2d.drawRect$I$I$I$I(x + 1, y + 1, this._w - 2, this._h - 2);
}g2d.setColor$java_awt_Color(this._r);
g2d.setStroke$java_awt_Stroke(this.stroke);
g2d.drawLine$I$I$I$I(x + 10, y + 10, x + this._w - 10, y + this._h - 10);
g2d.drawLine$I$I$I$I(x + 10, y + this._h - 10, x + this._w - 10, y + 10);
g2d.dispose$();
});

Clazz.newMeth(C$, 'getIconWidth$', function () {
return this._w;
});

Clazz.newMeth(C$, 'getIconHeight$', function () {
return this._h;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:18 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
