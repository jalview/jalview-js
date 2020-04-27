(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),p$1={},I$=[[0,'fr.orsay.lri.varna.components.BaseSpecialColorEditor']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControleurBaseSpecialColorEditor", null, null, ['java.awt.event.ActionListener', 'java.awt.event.ComponentListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['_selectedRow','_selectedCol'],'S',['_selectedColTitle'],'O',['_specialColorEditor','fr.orsay.lri.varna.components.BaseSpecialColorEditor','_selectedColor','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_components_BaseSpecialColorEditor', function (specialColorEditor) {
;C$.$init$.apply(this);
this._specialColorEditor=specialColorEditor;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if ($I$(1).getEDIT$().equals$O(e.getActionCommand$())) {
this._specialColorEditor.getButton$().setBackground$java_awt_Color(this._specialColorEditor.getCurrentColor$());
this._specialColorEditor.getColorChooser$().setColor$java_awt_Color(this._specialColorEditor.getCurrentColor$());
this._specialColorEditor.getDialog$().removeComponentListener$java_awt_event_ComponentListener(this);
this._specialColorEditor.getDialog$().addComponentListener$java_awt_event_ComponentListener(this);
this._specialColorEditor.getDialog$().setVisible$Z(true);
} else {
this._specialColorEditor.setCurrentColor$java_awt_Color(this._specialColorEditor.getColorChooser$().getColor$());
this._selectedRow=this._specialColorEditor.get_vueBases$().getTable$().getSelectedRow$();
this._selectedCol=this._specialColorEditor.get_vueBases$().getTable$().getSelectedColumn$();
this._selectedColor=this._specialColorEditor.getCurrentColor$();
this._selectedColTitle=this._specialColorEditor.get_vueBases$().getSpecialTableModel$().getColumnName$I(this._selectedCol);
var lb=this._specialColorEditor.get_vueBases$().getDataAt$I(this._selectedRow);
for (var mb, $mb = lb.getBases$().iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
p$1.applyColor$S$java_awt_Color$fr_orsay_lri_varna_models_rna_ModeleBase.apply(this, [this._selectedColTitle, this._selectedColor, mb]);
}
this._specialColorEditor.get_vueBases$().get_vp$().repaint$();
}});

Clazz.newMeth(C$, 'applyColor$S$java_awt_Color$fr_orsay_lri_varna_models_rna_ModeleBase', function (titreCol, couleur, mb) {
if (titreCol.equals$O("Inner Color")) {
mb.getStyleBase$().setBaseInnerColor$java_awt_Color(couleur);
} else if (titreCol.equals$O("Outline Color")) {
mb.getStyleBase$().setBaseOutlineColor$java_awt_Color(couleur);
} else if (titreCol.equals$O("Name Color")) {
mb.getStyleBase$().setBaseNameColor$java_awt_Color(couleur);
} else if (titreCol.equals$O("Number Color")) {
mb.getStyleBase$().setBaseNumberColor$java_awt_Color(couleur);
}}, p$1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent', function (e) {
this._specialColorEditor.callFireEditingStopped$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
