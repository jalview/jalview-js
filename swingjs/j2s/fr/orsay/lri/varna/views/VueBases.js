(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Hashtable','java.awt.GridLayout','fr.orsay.lri.varna.models.BaseList','fr.orsay.lri.varna.components.BaseTableModel','javax.swing.JTable','java.awt.Dimension','javax.swing.JScrollPane','java.awt.Color','fr.orsay.lri.varna.components.ColorRenderer','fr.orsay.lri.varna.components.BaseSpecialColorEditor','javax.swing.JOptionPane']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueBases", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._mode=0;
this._vp=null;
this.data=null;
this.revdata=null;
this.table=null;
this.specialTableModel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.data=Clazz.new_($I$(1));
this.revdata=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$I', function (vp, mode) {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(3).c$$I$I,[1, 0])]);
C$.$init$.apply(this);
this._vp=vp;
switch (mode) {
case (1):
this._mode=1;
p$1.kindMode.apply(this, []);
break;
case (2):
this._mode=2;
p$1.allMode.apply(this, []);
break;
case (3):
this._mode=3;
p$1.coupleMode.apply(this, []);
break;
default:
break;
}
}, 1);

Clazz.newMeth(C$, 'locateOrAddList$S', function (caption) {
if (!this.revdata.containsKey$O(caption)) {
var mbl=Clazz.new_($I$(4).c$$S,[caption]);
this.revdata.put$TK$TV(caption, mbl);
this.data.add$TE(mbl);
}return this.revdata.get$O(caption);
}, p$1);

Clazz.newMeth(C$, 'coupleMode', function () {
var pairString;
for (var i=0; i < this._vp.getRNA$().get_listeBases$().size$(); i++) {
var j=this._vp.getRNA$().get_listeBases$().get$I(i).getElementStructure$();
if (j > i) {
var tmp1=(this._vp.getRNA$().get_listeBases$().get$I(i).getContent$());
var tmp2=(this._vp.getRNA$().get_listeBases$().get$I(j).getContent$());
pairString=tmp1 + "-" + tmp2 ;
var bl=p$1.locateOrAddList$S.apply(this, [pairString]);
bl.addBase$fr_orsay_lri_varna_models_rna_ModeleBase(this._vp.getRNA$().get_listeBases$().get$I(i));
bl.addBase$fr_orsay_lri_varna_models_rna_ModeleBase(this._vp.getRNA$().get_listeBases$().get$I(j));
}}
p$1.createView.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'allMode', function () {
for (var i=0; i < this._vp.getRNA$().get_listeBases$().size$(); i++) {
var mb=this._vp.getRNA$().get_listeBases$().get$I(i);
var bl=p$1.locateOrAddList$S.apply(this, ["" + i]);
bl.addBase$fr_orsay_lri_varna_models_rna_ModeleBase(mb);
}
p$1.createView.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'kindMode', function () {
for (var i=0; i < this._vp.getRNA$().get_listeBases$().size$(); i++) {
var mb=this._vp.getRNA$().get_listeBases$().get$I(i);
var tmp1=(mb.getContent$());
var bl=p$1.locateOrAddList$S.apply(this, [tmp1]);
bl.addBase$fr_orsay_lri_varna_models_rna_ModeleBase(mb);
}
p$1.createView.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'createView', function () {
this.specialTableModel=Clazz.new_($I$(5).c$$java_util_ArrayList,[this.data]);
this.table=Clazz.new_($I$(6).c$$javax_swing_table_TableModel,[this.specialTableModel]);
this.table.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(7).c$$I$I,[500, 300]));
var scrollPane=Clazz.new_($I$(8).c$$java_awt_Component,[this.table]);
this.table.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass($I$(9)), Clazz.new_($I$(10).c$$Z,[true]));
this.table.setDefaultEditor$Class$javax_swing_table_TableCellEditor(Clazz.getClass($I$(9)), Clazz.new_($I$(11).c$$fr_orsay_lri_varna_views_VueBases,[this]));
this.specialTableModel.addTableModelListener$javax_swing_event_TableModelListener(((P$.VueBases$1||
(function(){var C$=Clazz.newClass(P$, "VueBases$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TableModelListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['tableChanged$javax_swing_event_TableModelEvent','tableChanged$'], function (e) {
this.b$['fr.orsay.lri.varna.views.VueBases']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueBases$1.$init$, [this, null])));
this.add$java_awt_Component(scrollPane);
this.UIvueBases$();
}, p$1);

Clazz.newMeth(C$, 'UIvueBases$', function () {
var newContentPane=this;
newContentPane.setOpaque$Z(true);
$I$(12).showMessageDialog$java_awt_Component$O$S$I(this._vp, newContentPane, "Base Colors Edition", -1);
});

Clazz.newMeth(C$, 'getMode$', function () {
return this._mode;
});

Clazz.newMeth(C$, 'getDataAt$I', function (i) {
return this.data.get$I(i);
});

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$, 'getTable$', function () {
return this.table;
});

Clazz.newMeth(C$, 'setTable$javax_swing_JTable', function (table) {
this.table=table;
});

Clazz.newMeth(C$, 'getSpecialTableModel$', function () {
return this.specialTableModel;
});

Clazz.newMeth(C$, 'setSpecialTableModel$fr_orsay_lri_varna_components_BaseTableModel', function (specialTableModel) {
this.specialTableModel=specialTableModel;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
