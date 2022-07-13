(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.templateEditor"),I$=[[0,['fr.orsay.lri.varna.applications.templateEditor.TemplateEditorPanelUI','.Tool'],'javax.swing.undo.UndoableEditSupport',['fr.orsay.lri.varna.applications.templateEditor.TemplateEdits','.ElementEdgeMoveTemplateEdit'],['java.awt.geom.Point2D','.Double'],['fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement','.RelativePosition'],['fr.orsay.lri.varna.applications.templateEditor.TemplateEdits','.ElementAddTemplateEdit'],['fr.orsay.lri.varna.applications.templateEditor.TemplateEdits','.ElementRemoveTemplateEdit'],'fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement',['fr.orsay.lri.varna.applications.templateEditor.TemplateEdits','.ElementAttachTemplateEdit'],['fr.orsay.lri.varna.applications.templateEditor.TemplateEdits','.ElementDetachTemplateEdit'],['fr.orsay.lri.varna.applications.templateEditor.TemplateEdits','.HelixFlipTemplateEdit']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TemplateEditorPanelUI", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Tool',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selectedTool=$I$(1).CREATE_HELIX;
},1);

C$.$fields$=[['O',['_undoableEditSupport','javax.swing.undo.UndoableEditSupport','_tp','fr.orsay.lri.varna.applications.templateEditor.TemplatePanel','selectedTool','fr.orsay.lri.varna.applications.templateEditor.TemplateEditorPanelUI.Tool']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel', function (tp) {
;C$.$init$.apply(this);
this._tp=tp;
this._undoableEditSupport=Clazz.new_($I$(2,1).c$$O,[tp]);
}, 1);

Clazz.newMeth(C$, 'getSelectedTool$', function () {
return this.selectedTool;
});

Clazz.newMeth(C$, 'setSelectedTool$fr_orsay_lri_varna_applications_templateEditor_TemplateEditorPanelUI_Tool', function (selectedTool) {
this.selectedTool=selectedTool;
});

Clazz.newMeth(C$, 'undoableEdgeMove$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$D$D', function (h, edge, nx, ny) {
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(3,1).c$$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$D$D$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel,[h, edge, nx, ny, this._tp]));
h.setEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$java_awt_geom_Point2D_Double(edge, Clazz.new_($I$(4,1).c$$D$D,[nx, ny]));
this._tp.repaint$();
});

Clazz.newMeth(C$, 'setEdge5UI$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$D$D', function (h, nx, ny) {
this.undoableEdgeMove$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$D$D(h, $I$(5).RP_CONNECT_START5, nx, ny);
});

Clazz.newMeth(C$, 'setEdge3UI$fr_orsay_lri_varna_applications_templateEditor_UnpairedRegion$D$D', function (h, nx, ny) {
this.undoableEdgeMove$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$D$D(h, $I$(5).RP_CONNECT_END3, nx, ny);
});

Clazz.newMeth(C$, 'setEdge5TangentUI$fr_orsay_lri_varna_applications_templateEditor_UnpairedRegion$D$D', function (h, nx, ny) {
this.undoableEdgeMove$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$D$D(h, $I$(5).RP_EDIT_TANGENT_5, nx, ny);
});

Clazz.newMeth(C$, 'setEdge3TangentUI$fr_orsay_lri_varna_applications_templateEditor_UnpairedRegion$D$D', function (h, nx, ny) {
this.undoableEdgeMove$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$D$D(h, $I$(5).RP_EDIT_TANGENT_3, nx, ny);
});

Clazz.newMeth(C$, 'moveUnpairedUI$fr_orsay_lri_varna_applications_templateEditor_UnpairedRegion$D$D', function (u, nx, ny) {
this.undoableEdgeMove$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$D$D(u, $I$(5).RP_INNER_MOVE, nx, ny);
});

Clazz.newMeth(C$, 'moveHelixUI$fr_orsay_lri_varna_applications_templateEditor_Helix$D$D', function (h, nx, ny) {
this.undoableEdgeMove$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$D$D(h, $I$(5).RP_INNER_MOVE, nx, ny);
});

Clazz.newMeth(C$, 'setHelixPosUI$fr_orsay_lri_varna_applications_templateEditor_Helix$D$D', function (h, nx, ny) {
this.undoableEdgeMove$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$D$D(h, $I$(5).RP_EDIT_START, nx, ny);
});

Clazz.newMeth(C$, 'setHelixExtentUI$fr_orsay_lri_varna_applications_templateEditor_Helix$D$D', function (h, nx, ny) {
this.undoableEdgeMove$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$D$D(h, $I$(5).RP_EDIT_END, nx, ny);
});

Clazz.newMeth(C$, 'addElementUI$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement', function (h) {
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(6,1).c$$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel,[h, this._tp]));
this._tp.addElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(h);
});

Clazz.newMeth(C$, 'removeElementUI$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement', function (h) {
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(7,1).c$$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel,[h, this._tp]));
this._tp.removeElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(h);
});

Clazz.newMeth(C$, 'addUndoableEditListener$javax_swing_undo_UndoManager', function (manager) {
this._undoableEditSupport.addUndoableEditListener$javax_swing_event_UndoableEditListener(manager);
});

Clazz.newMeth(C$, 'addConnectionUI$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (h1, e1, h2, e2) {
if ($I$(8).canConnect$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(h1, e1, h2, e2)) {
var c=this._tp.addConnection$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(h1, e1, h2, e2);
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(9,1).c$$fr_orsay_lri_varna_applications_templateEditor_Connection$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel,[c, this._tp]));
}});

Clazz.newMeth(C$, 'removeConnectionUI$fr_orsay_lri_varna_applications_templateEditor_Connection', function (c) {
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(10,1).c$$fr_orsay_lri_varna_applications_templateEditor_Connection$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel,[c, this._tp]));
this._tp.removeConnection$fr_orsay_lri_varna_applications_templateEditor_Connection(c);
});

Clazz.newMeth(C$, 'flipHelixUI$fr_orsay_lri_varna_applications_templateEditor_Helix', function (h) {
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(11,1).c$$fr_orsay_lri_varna_applications_templateEditor_Helix$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel,[h, this._tp]));
this._tp.flip$fr_orsay_lri_varna_applications_templateEditor_Helix(h);
this._tp.repaint$();
});

Clazz.newMeth(C$, 'getTemplate$', function () {
return this._tp.getTemplate$();
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.TemplateEditorPanelUI, "Tool", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SELECT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "CREATE_HELIX", 1, []);
Clazz.newEnumConst($vals, C$.c$, "CREATE_UNPAIRED", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
