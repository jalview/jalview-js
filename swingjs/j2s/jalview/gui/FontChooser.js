(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'javax.swing.JInternalFrame','jalview.gui.Desktop','jalview.util.MessageManager','javax.swing.JLayeredPane','java.awt.GraphicsEnvironment','java.awt.Font','jalview.gui.JvOptionPane','jalview.bin.Cache']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontChooser", null, 'jalview.jbgui.GFontChooser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.init=true;
this.lastSelected=null;
this.lastSelMono=false;
},1);

C$.$fields$=[['Z',['oldProteinScale','oldMirrorFont','init','lastSelMono','oldSmoothFont','oldComplementSmooth'],'O',['ap','jalview.gui.AlignmentPanel','tp','jalview.gui.TreePanel','oldFont','java.awt.Font','+oldComplementFont','frame','javax.swing.JInternalFrame','lastSelected','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$jalview_gui_TreePanel',  function (treePanel) {
Clazz.super_(C$, this);
this.tp=treePanel;
this.ap=treePanel.getTreeCanvas$().getAssociatedPanel$();
this.oldFont=treePanel.getTreeFont$();
this.defaultButton.setVisible$Z(false);
this.smoothFont.setEnabled$Z(false);
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel',  function (alignPanel) {
Clazz.super_(C$, this);
this.oldFont=alignPanel.av.getFont$();
this.oldProteinScale=alignPanel.av.isScaleProteinAsCdna$();
this.oldMirrorFont=alignPanel.av.isProteinFontAsCdna$();
this.oldSmoothFont=alignPanel.av.antiAlias;
this.ap=alignPanel;
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
this.frame=Clazz.new_($I$(1,1));
this.frame.setContentPane$java_awt_Container(this);
this.smoothFont.setSelected$Z(this.ap.av.antiAlias);
var inSplitFrame=this.ap.av.getCodingComplement$() != null ;
if (inSplitFrame) {
this.oldComplementFont=(this.ap.av.getCodingComplement$()).getFont$();
this.oldComplementSmooth=(this.ap.av.getCodingComplement$()).antiAlias;
this.scaleAsCdna.setVisible$Z(true);
this.scaleAsCdna.setSelected$Z(this.ap.av.isScaleProteinAsCdna$());
this.fontAsCdna.setVisible$Z(true);
this.fontAsCdna.setSelected$Z(this.ap.av.isProteinFontAsCdna$());
}if (p$1.isTreeFont.apply(this, [])) {
$I$(2,"addInternalFrame$javax_swing_JInternalFrame$S$I$I$Z",[this.frame, $I$(3).getString$S("action.change_font_tree_panel"), 400, 200, false]);
} else {
$I$(2,"addInternalFrame$javax_swing_JInternalFrame$S$I$I$Z",[this.frame, $I$(3).getString$S("action.change_font"), 380, 220, false]);
}this.frame.setLayer$Integer($I$(4).PALETTE_LAYER);
var fonts=$I$(5).getLocalGraphicsEnvironment$().getAvailableFontFamilyNames$();
for (var i=0; i < fonts.length; i++) {
this.fontName.addItem$O(fonts[i]);
}
for (var i=1; i < 51; i++) {
this.fontSize.addItem$O(Integer.valueOf$I(i));
}
this.fontStyle.addItem$O("plain");
this.fontStyle.addItem$O("bold");
this.fontStyle.addItem$O("italic");
this.fontName.setSelectedItem$O(this.oldFont.getName$());
this.fontSize.setSelectedItem$O(Integer.valueOf$I(this.oldFont.getSize$()));
this.fontStyle.setSelectedIndex$I(this.oldFont.getStyle$());
var fm=this.getGraphics$().getFontMetrics$java_awt_Font(this.oldFont);
this.monospaced.setSelected$Z(fm.getStringBounds$S$java_awt_Graphics("M", this.getGraphics$()).getWidth$() == fm.getStringBounds$S$java_awt_Graphics("|", this.getGraphics$()).getWidth$() );
this.init=false;
});

Clazz.newMeth(C$, 'smoothFont_actionPerformed$',  function () {
this.ap.av.antiAlias=this.smoothFont.isSelected$();
this.ap.getAnnotationPanel$().image=null;
this.ap.paintAlignment$Z$Z(true, false);
if (this.ap.av.getCodingComplement$() != null  && this.ap.av.isProteinFontAsCdna$() ) {
(this.ap.av.getCodingComplement$()).antiAlias=this.ap.av.antiAlias;
var sv=this.ap.alignFrame.getSplitViewContainer$();
sv.adjustLayout$();
sv.repaint$();
}});

Clazz.newMeth(C$, 'ok_actionPerformed$',  function () {
try {
this.frame.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (this.ap != null ) {
if (this.ap.getOverviewPanel$() != null ) {
this.ap.getOverviewPanel$().updateOverviewImage$();
}}});

Clazz.newMeth(C$, 'cancel_actionPerformed$',  function () {
if (p$1.isTreeFont.apply(this, [])) {
this.tp.setTreeFont$java_awt_Font(this.oldFont);
} else if (this.ap != null ) {
this.ap.av.setFont$java_awt_Font$Z(this.oldFont, true);
this.ap.av.setScaleProteinAsCdna$Z(this.oldProteinScale);
this.ap.av.setProteinFontAsCdna$Z(this.oldMirrorFont);
this.ap.av.antiAlias=this.oldSmoothFont;
this.ap.fontChanged$();
if (this.scaleAsCdna.isVisible$() && this.scaleAsCdna.isEnabled$() ) {
this.ap.av.getCodingComplement$().setScaleProteinAsCdna$Z(this.oldProteinScale);
this.ap.av.getCodingComplement$().setProteinFontAsCdna$Z(this.oldMirrorFont);
(this.ap.av.getCodingComplement$()).antiAlias=this.oldComplementSmooth;
this.ap.av.getCodingComplement$().setFont$java_awt_Font$Z(this.oldComplementFont, true);
var splitFrame=this.ap.alignFrame.getSplitViewContainer$();
splitFrame.adjustLayout$();
splitFrame.repaint$();
}}try {
this.frame.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'isTreeFont',  function () {
return this.tp != null ;
}, p$1);

Clazz.newMeth(C$, 'changeFont$',  function () {
if (this.lastSelected == null ) {
this.lastSelected=this.oldFont;
var fm=this.getGraphics$().getFontMetrics$java_awt_Font(this.oldFont);
var mw=fm.getStringBounds$S$java_awt_Graphics("M", this.getGraphics$()).getWidth$();
var iw=fm.getStringBounds$S$java_awt_Graphics("I", this.getGraphics$()).getWidth$();
this.lastSelMono=(mw == iw );
}var newFont=Clazz.new_([this.fontName.getSelectedItem$().toString(), this.fontStyle.getSelectedIndex$(), (this.fontSize.getSelectedItem$()).$c()],$I$(6,1).c$$S$I$I);
var fm=this.getGraphics$().getFontMetrics$java_awt_Font(newFont);
var mw=fm.getStringBounds$S$java_awt_Graphics("M", this.getGraphics$()).getWidth$();
var iBounds=fm.getStringBounds$S$java_awt_Graphics("I", this.getGraphics$());
var iw=iBounds.getWidth$();
if (mw < 1  || iw < 1  ) {
var message=iBounds.getHeight$() < 1  ? $I$(3).getString$S("label.font_doesnt_have_letters_defined") : $I$(3).getString$S("label.font_too_small");
$I$(7,"showInternalMessageDialog$java_awt_Component$S$S$I",[this, message, $I$(3).getString$S("label.invalid_font"), 2]);
if (this.lastSelected.getSize$() != (this.fontSize.getSelectedItem$()).$c() ) {
this.fontSize.setSelectedItem$O(Integer.valueOf$I(this.lastSelected.getSize$()));
}if (!this.lastSelected.getName$().equals$O(this.fontName.getSelectedItem$().toString())) {
this.fontName.setSelectedItem$O(this.lastSelected.getName$());
}if (this.lastSelected.getStyle$() != this.fontStyle.getSelectedIndex$()) {
this.fontStyle.setSelectedIndex$I(this.lastSelected.getStyle$());
}if (this.lastSelMono != this.monospaced.isSelected$() ) {
this.monospaced.setSelected$Z(this.lastSelMono);
}return;
}if (p$1.isTreeFont.apply(this, [])) {
this.tp.setTreeFont$java_awt_Font(newFont);
} else if (this.ap != null ) {
this.ap.av.setFont$java_awt_Font$Z(newFont, true);
this.ap.fontChanged$();
if (this.fontAsCdna.isVisible$()) {
if (this.fontAsCdna.isSelected$()) {
this.ap.av.getCodingComplement$().setFont$java_awt_Font$Z(newFont, true);
}var splitFrame=this.ap.alignFrame.getSplitViewContainer$();
splitFrame.adjustLayout$();
splitFrame.repaint$();
}}this.monospaced.setSelected$Z(mw == iw );
this.lastSelected=newFont;
});

Clazz.newMeth(C$, 'fontName_actionPerformed$',  function () {
if (this.init) {
return;
}this.changeFont$();
});

Clazz.newMeth(C$, 'fontSize_actionPerformed$',  function () {
if (this.init) {
return;
}this.changeFont$();
});

Clazz.newMeth(C$, 'fontStyle_actionPerformed$',  function () {
if (this.init) {
return;
}this.changeFont$();
});

Clazz.newMeth(C$, 'defaultButton_actionPerformed$',  function () {
$I$(8,"setProperty$S$S",["FONT_NAME", this.fontName.getSelectedItem$().toString()]);
$I$(8,"setProperty$S$S",["FONT_STYLE", this.fontStyle.getSelectedIndex$() + ""]);
$I$(8,"setProperty$S$S",["FONT_SIZE", this.fontSize.getSelectedItem$().toString()]);
$I$(8,"setProperty$S$S",["ANTI_ALIAS", Boolean.toString$Z(this.smoothFont.isSelected$())]);
$I$(8,"setProperty$S$S",["SCALE_PROTEIN_TO_CDNA", Boolean.toString$Z(this.scaleAsCdna.isSelected$())]);
});

Clazz.newMeth(C$, 'scaleAsCdna_actionPerformed$',  function () {
this.ap.av.setScaleProteinAsCdna$Z(this.scaleAsCdna.isSelected$());
this.ap.av.getCodingComplement$().setScaleProteinAsCdna$Z(this.scaleAsCdna.isSelected$());
var splitFrame=this.ap.alignFrame.getSplitViewContainer$();
splitFrame.adjustLayout$();
splitFrame.repaint$();
});

Clazz.newMeth(C$, 'mirrorFonts_actionPerformed$',  function () {
var selected=this.fontAsCdna.isSelected$();
this.ap.av.setProteinFontAsCdna$Z(selected);
this.ap.av.getCodingComplement$().setProteinFontAsCdna$Z(selected);
if (!selected) {
this.ap.av.getCodingComplement$().setFont$java_awt_Font$Z(this.oldComplementFont, true);
}this.changeFont$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:34 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
