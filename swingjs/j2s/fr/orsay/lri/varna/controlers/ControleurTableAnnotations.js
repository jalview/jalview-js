(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),p$1={},I$=[[0,'fr.orsay.lri.varna.views.VueAnnotation','fr.orsay.lri.varna.views.VueHighlightRegionEdit','fr.orsay.lri.varna.views.VueChemProbAnnotation','fr.orsay.lri.varna.models.annotations.TextAnnotation']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControleurTableAnnotations", null, null, ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['_type'],'O',['_table','javax.swing.JTable','_vp','fr.orsay.lri.varna.VARNAPanel']]]

Clazz.newMeth(C$, 'c$$javax_swing_JTable$fr_orsay_lri_varna_VARNAPanel$I', function (table, vp, type) {
;C$.$init$.apply(this);
this._table=table;
this._vp=vp;
this._type=type;
}, 1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (arg0) {
switch (this._type) {
case 1:
p$1.edit.apply(this, []);
break;
case 0:
p$1.remove.apply(this, []);
break;
default:
break;
}
});

Clazz.newMeth(C$, 'remove', function () {
this._vp.set_selectedAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(null);
var o=this._table.getValueAt$I$I(this._table.getSelectedRow$(), 0);
if (Clazz.instanceOf(o, "fr.orsay.lri.varna.models.annotations.TextAnnotation")) {
if (!this._vp.removeAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(o)) this._vp.errorDialog$Exception(Clazz.new_(Clazz.load('Exception').c$$S,["Impossible de supprimer"]));
this._table.setValueAt$O$I$I("Deleted!", this._table.getSelectedRow$(), 0);
} else if (Clazz.instanceOf(o, "fr.orsay.lri.varna.models.annotations.ChemProbAnnotation")) {
this._vp.getRNA$().removeChemProbAnnotation$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation(o);
this._table.setValueAt$O$I$I("Deleted!", this._table.getSelectedRow$(), 0);
} else if (Clazz.instanceOf(o, "fr.orsay.lri.varna.models.annotations.HighlightRegionAnnotation")) {
this._vp.getRNA$().removeHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation(o);
this._table.setValueAt$O$I$I("Deleted!", this._table.getSelectedRow$(), 0);
}this._vp.repaint$();
}, p$1);

Clazz.newMeth(C$, 'edit', function () {
var o=this._table.getValueAt$I$I(this._table.getSelectedRow$(), 0);
if (Clazz.instanceOf(o, "fr.orsay.lri.varna.models.annotations.TextAnnotation")) {
var textAnnot=o;
var vueAnnotation;
vueAnnotation=Clazz.new_($I$(1,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z,[this._vp, textAnnot, false]);
vueAnnotation.show$();
} else if (Clazz.instanceOf(o, "fr.orsay.lri.varna.models.annotations.HighlightRegionAnnotation")) {
var annot=o;
var an=annot.clone$();
var vueAnnotation=Clazz.new_($I$(2,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation,[this._vp, annot]);
if (!vueAnnotation.show$()) {
annot.setBases$java_util_ArrayList(an.getBases$());
annot.setFillColor$java_awt_Color(an.getFillColor$());
annot.setOutlineColor$java_awt_Color(an.getOutlineColor$());
annot.setRadius$D(an.getRadius$());
}} else if (Clazz.instanceOf(o, "fr.orsay.lri.varna.models.annotations.ChemProbAnnotation")) {
var annot=o;
var an=annot.clone$();
var vueAnnotation=Clazz.new_($I$(3,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation,[this._vp, annot]);
if (!vueAnnotation.show$()) {
annot.setColor$java_awt_Color(an.getColor$());
annot.setIntensity$D(an.getIntensity$());
annot.setType$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType(an.getType$());
annot.setOut$Z(an.isOut$());
}}}, p$1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (arg0) {
this._vp.set_selectedAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(null);
this._vp.repaint$();
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (arg0) {
if (this._table.rowAtPoint$java_awt_Point(arg0.getPoint$()) < 0) return;
var o=this._table.getValueAt$I$I(this._table.rowAtPoint$java_awt_Point(arg0.getPoint$()), 0);
if (o.getClass$().equals$O(Clazz.getClass($I$(4))) && o !== this._vp.get_selectedAnnotation$()  ) {
this._vp.set_selectedAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(o);
this._vp.repaint$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
