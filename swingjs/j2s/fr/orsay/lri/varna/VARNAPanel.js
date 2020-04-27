(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna"),p$1={},I$=[[0,'fr.orsay.lri.varna.models.rna.RNA','fr.orsay.lri.varna.models.VARNAConfig','java.util.ArrayList',['java.awt.geom.Point2D','.Double'],'fr.orsay.lri.varna.models.BaseList','java.awt.Dimension','fr.orsay.lri.varna.views.VueMenu','fr.orsay.lri.varna.views.VueUI','javax.swing.undo.UndoManager','fr.orsay.lri.varna.controlers.ControleurBlinkingThread','java.awt.Point','fr.orsay.lri.varna.controlers.ControleurClicMovement','fr.orsay.lri.varna.controlers.ControleurMolette','fr.orsay.lri.varna.controlers.ControleurDraggedMolette','fr.orsay.lri.varna.controlers.ControleurVARNAPanelKeys','fr.orsay.lri.varna.controlers.ControleurInterpolator','java.awt.Font','java.awt.Color',['fr.orsay.lri.varna.models.rna.ModeleBP','.Edge'],'java.awt.geom.GeneralPath',['fr.orsay.lri.varna.models.VARNAConfig','.BP_STYLE'],['fr.orsay.lri.varna.models.annotations.ChemProbAnnotation','.ChemProbAnnotationType'],['fr.orsay.lri.varna.models.annotations.TextAnnotation','.AnchorType'],['fr.orsay.lri.varna.models.rna.ModeleBackboneElement','.BackboneType'],['java.awt.geom.Rectangle2D','.Double'],'java.awt.geom.AffineTransform','java.text.NumberFormat','fr.orsay.lri.varna.models.export.SwingGraphics','java.awt.RenderingHints','java.awt.BasicStroke','fr.orsay.lri.varna.factories.RNAFactory','fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax','fr.orsay.lri.varna.models.rna.Mapping','javax.swing.JOptionPane','java.awt.Rectangle','javax.print.attribute.HashPrintRequestAttributeSet','java.awt.print.PrinterJob','java.io.File','java.io.FileInputStream','fr.orsay.lri.varna.exceptions.ExceptionLoadingFailed','javax.xml.parsers.SAXParserFactory','fr.orsay.lri.varna.utils.VARNASessionParser','fr.orsay.lri.varna.models.FullBackup','java.io.FileReader','java.io.FileOutputStream','java.io.PrintWriter','javax.xml.transform.stream.StreamResult','javax.xml.transform.TransformerFactory','org.xml.sax.helpers.AttributesImpl']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VARNAPanel", null, 'javax.swing.JPanel', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._RNA=Clazz.new_($I$(1,1));
this._debug=false;
this._conf=Clazz.new_($I$(2,1));
this._VARNAListeners=Clazz.new_($I$(3,1));
this._selectionListeners=Clazz.new_($I$(3,1));
this._RNAListeners=Clazz.new_($I$(3,1));
this._basesListeners=Clazz.new_($I$(3,1));
this._realCoords=Clazz.array($I$(4), [0]);
this._realCenters=Clazz.array($I$(4), [0]);
this._scaleFactor=1.0;
this._offsetPanel=Clazz.new_($I$(4,1));
this._offsetRNA=Clazz.new_($I$(4,1));
this._selectedBases=Clazz.new_($I$(5,1).c$$S,["selection"]);
this._backupSelection=Clazz.new_($I$(3,1));
this._nearestBase=null;
this._lastSelectedCoord=Clazz.new_($I$(4,1).c$$D$D,[0.0, 0.0]);
this._linkOrigin=null;
this._linkDestination=null;
this._selectionRectangle=null;
this._highlightAnnotation=false;
this._border=Clazz.new_($I$(6,1).c$$I$I,[0, 0]);
this._drawBBox=false;
this._drawBorder=false;
this._popup=Clazz.new_($I$(7,1).c$$fr_orsay_lri_varna_VARNAPanel,[this]);
this._UI=Clazz.new_($I$(8,1).c$$fr_orsay_lri_varna_VARNAPanel,[this]);
this._target=Clazz.new_($I$(4,1).c$$D$D,[0, 0]);
this._target2=Clazz.new_($I$(4,1).c$$D$D,[0, 0]);
this._hoveredBase=null;
},1);

C$.$fields$=[['Z',['_debug','_highlightAnnotation','_drawBBox','_drawBorder','_horsCadre','_premierAffichage'],'D',['_scaleFactor','_offX','_offY'],'I',['_titleHeight'],'O',['_RNA','fr.orsay.lri.varna.models.rna.RNA','_conf','fr.orsay.lri.varna.models.VARNAConfig','_VARNAListeners','java.util.ArrayList','+_selectionListeners','+_RNAListeners','+_basesListeners','_manager','javax.swing.undo.UndoManager','_realCoords','java.awt.geom.Point2D.Double[]','+_realCenters','_offsetPanel','java.awt.geom.Point2D.Double','+_offsetRNA','_blink','fr.orsay.lri.varna.controlers.ControleurBlinkingThread','_selectedBases','fr.orsay.lri.varna.models.BaseList','_backupSelection','java.util.ArrayList','_nearestBase','Integer','_lastSelectedCoord','java.awt.geom.Point2D.Double','+_linkOrigin','+_linkDestination','_selectionRectangle','java.awt.Rectangle','_border','java.awt.Dimension','_translation','java.awt.Point','_interpolator','fr.orsay.lri.varna.controlers.ControleurInterpolator','_popup','fr.orsay.lri.varna.views.VueMenu','_UI','fr.orsay.lri.varna.views.VueUI','_selectedAnnotation','fr.orsay.lri.varna.models.annotations.TextAnnotation','_target','java.awt.geom.Point2D.Double','+_target2','_hoveredBase','fr.orsay.lri.varna.models.rna.ModeleBase']]
,['D',['DISTANCE_FACT'],'S',['VARNA_SESSION_EXTENSION','XML_ELEMENT_NAME']]]

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (event) {
var val=event.getNewValue$();
switch (event.getPropertyName$()) {
case "value":
this._UI.onDialogReturn$I(val == null  ? -1 : (val).intValue$());
return;
case "SelectedFile":
case "SelectedColor":
case "inputValue":
this._UI.onDialogReturn$O(val);
break;
}
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
p$1.init.apply(this, []);
this.drawRNA$();
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (seq, str) {
C$.c$$S$S$I.apply(this, [seq, str, 2]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I', function (seq, str, drawMode) {
C$.c$$S$S$I$S.apply(this, [seq, str, drawMode, ""]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader', function (r) {
C$.c$$java_io_Reader$I.apply(this, [r, 2]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader$I', function (r, drawMode) {
C$.c$$java_io_Reader$I$S.apply(this, [r, drawMode, ""]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader$I$S', function (r, drawMode, title) {
Clazz.super_(C$, this);
p$1.init.apply(this, []);
this.drawRNA$java_io_Reader$I(r, drawMode);
this.setTitle$S(title);
}, 1);

Clazz.newMeth(C$, 'setOriginLink$java_awt_geom_Point2D_Double', function (p) {
this._linkOrigin=(p);
});

Clazz.newMeth(C$, 'setDestinationLink$java_awt_geom_Point2D_Double', function (p) {
this._linkDestination=(p);
});

Clazz.newMeth(C$, 'removeLink$', function () {
this._linkOrigin=null;
this._linkDestination=null;
});

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA', function (r) {
Clazz.super_(C$, this);
this.showRNA$fr_orsay_lri_varna_models_rna_RNA(r);
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I$S', function (seq, str, drawMode, title) {
Clazz.super_(C$, this);
this.drawRNA$S$S$I(seq, str, drawMode);
p$1.init.apply(this, []);
this.setTitle$S(title);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S$I$S', function (seq1, struct1, seq2, struct2, drawMode, title) {
Clazz.super_(C$, this);
this._conf._comparisonMode=true;
this.drawRNA$S$S$S$S$I(seq1, struct1, seq2, struct2, drawMode);
p$1.init.apply(this, []);
this.setTitle$S(title);
}, 1);

Clazz.newMeth(C$, 'init', function () {
this._popup.buildPopupMenu$();
this.setBackground$java_awt_Color($I$(2).DEFAULT_BACKGROUND_COLOR);
this._manager=Clazz.new_($I$(9,1));
this._manager.setLimit$I(10000);
this._UI.addUndoableEditListener$javax_swing_undo_UndoManager(this._manager);
this._blink=Clazz.new_($I$(10,1).c$$fr_orsay_lri_varna_VARNAPanel$J$D$D$D$D,[this, 50, 0, 1.0, 0.0, 0.2]);
this._blink.start$();
this._premierAffichage=true;
this._translation=Clazz.new_($I$(11,1).c$$I$I,[0, 0]);
this._horsCadre=false;
this.setFont$java_awt_Font(this._conf._fontBasesGeneral);
var controleurClicMovement=Clazz.new_($I$(12,1).c$$fr_orsay_lri_varna_VARNAPanel,[this]);
this.addMouseListener$java_awt_event_MouseListener(controleurClicMovement);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(controleurClicMovement);
this.addMouseWheelListener$java_awt_event_MouseWheelListener(Clazz.new_($I$(13,1).c$$fr_orsay_lri_varna_VARNAPanel,[this]));
var ctrlDraggedMolette=Clazz.new_($I$(14,1).c$$fr_orsay_lri_varna_VARNAPanel,[this]);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(ctrlDraggedMolette);
this.addMouseListener$java_awt_event_MouseListener(ctrlDraggedMolette);
var ctrlKey=Clazz.new_($I$(15,1).c$$fr_orsay_lri_varna_VARNAPanel,[this]);
this.addKeyListener$java_awt_event_KeyListener(ctrlKey);
this.addFocusListener$java_awt_event_FocusListener(ctrlKey);
this._interpolator=Clazz.new_($I$(16,1).c$$fr_orsay_lri_varna_VARNAPanel,[this]);
{

}
}, p$1);

Clazz.newMeth(C$, 'undo$', function () {
if (this._manager.canUndo$()) {
this._manager.undo$();
}});

Clazz.newMeth(C$, 'redo$', function () {
if (this._manager.canRedo$()) {
this._manager.redo$();
}});

Clazz.newMeth(C$, 'setTitleFontStyle$I', function (newStyle) {
this._conf._titleFont=this._conf._titleFont.deriveFont$I(newStyle);
p$1.updateTitleHeight.apply(this, []);
});

Clazz.newMeth(C$, 'setTitleFontSize$F', function (newSize) {
this._conf._titleFont=this._conf._titleFont.deriveFont$F(newSize);
p$1.updateTitleHeight.apply(this, []);
});

Clazz.newMeth(C$, 'setTitleFontFamily$S', function (newFamily) {
this._conf._titleFont=Clazz.new_([newFamily, this._conf._titleFont.getStyle$(), this._conf._titleFont.getSize$()],$I$(17,1).c$$S$I$I);
p$1.updateTitleHeight.apply(this, []);
});

Clazz.newMeth(C$, 'setTitleFontColor$java_awt_Color', function (newColor) {
this._conf._titleColor=newColor;
p$1.updateTitleHeight.apply(this, []);
});

Clazz.newMeth(C$, 'setBaseFontSize$Float', function (size) {
this._conf._fontBasesGeneral=this._conf._fontBasesGeneral.deriveFont$F((size).valueOf());
});

Clazz.newMeth(C$, 'setNumbersFontSize$Float', function (size) {
this._conf._numbersFont=this._conf._numbersFont.deriveFont$F((size).valueOf());
});

Clazz.newMeth(C$, 'setBaseFontStyle$I', function (style) {
this._conf._fontBasesGeneral=this._conf._fontBasesGeneral.deriveFont$I(style);
});

Clazz.newMeth(C$, 'updateTitleHeight', function () {
if (!this.getTitle$().equals$O("")) {
this._titleHeight=((this._conf._titleFont.getSize$() * 1.5)|0);
} else {
this._titleHeight=0;
}if (Math.abs(this.getZoom$() - 1) < 0.02 ) {
this._translation.y=((-p$1.getTitleHeight.apply(this, []) / 2.0)|0);
}}, p$1);

Clazz.newMeth(C$, 'setTitle$S', function (title) {
this._RNA.setName$S(title);
p$1.updateTitleHeight.apply(this, []);
});

Clazz.newMeth(C$, 'setNumPeriod$I', function (n) {
this._conf._numPeriod=n;
});

Clazz.newMeth(C$, 'getNumPeriod$', function () {
return this._conf._numPeriod;
});

Clazz.newMeth(C$, 'setScaleFactor$D', function (d) {
this._scaleFactor=d;
}, p$1);

Clazz.newMeth(C$, 'getScaleFactor', function () {
return this._scaleFactor;
}, p$1);

Clazz.newMeth(C$, 'setAutoFit$Z', function (fit) {
this._conf._autoFit=fit;
this.repaint$();
}, p$1);

Clazz.newMeth(C$, 'lockScrolling$', function () {
p$1.setAutoFit$Z.apply(this, [false]);
this.setAutoCenter$Z(false);
});

Clazz.newMeth(C$, 'unlockScrolling$', function () {
p$1.setAutoFit$Z.apply(this, [true]);
this.setAutoCenter$Z(true);
});

Clazz.newMeth(C$, 'drawStringOutline$fr_orsay_lri_varna_models_export_VueVARNAGraphics$S$D$D$D', function (g2D, res, x, y, margin) {
var d=g2D.getStringDimension$S(res);
x -= d.width / 2.0;
y += d.height / 2.0;
g2D.setColor$java_awt_Color($I$(18).GRAY);
g2D.setSelectionStroke$();
g2D.drawRect$D$D$D$D((x - margin), (y - d.height - margin ), (d.width + 2.0 * margin), (d.height + 2.0 * margin));
}, p$1);

Clazz.newMeth(C$, 'drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge', function (g2D, posx, posy, normx, normy, radius, isCIS, e) {
var bck=g2D.getColor$();
switch (e) {
case $I$(19).WC:
if (isCIS) {
g2D.setColor$java_awt_Color(bck);
g2D.fillCircle$D$D$D((posx - (radius) / 2.0), (posy - (radius) / 2.0), radius);
g2D.drawCircle$D$D$D((posx - (radius) / 2.0), (posy - (radius) / 2.0), radius);
} else {
g2D.setColor$java_awt_Color($I$(18).white);
g2D.fillCircle$D$D$D(posx - (radius) / 2.0, (posy - (radius) / 2.0), (radius));
g2D.setColor$java_awt_Color(bck);
g2D.drawCircle$D$D$D((posx - (radius) / 2.0), (posy - (radius) / 2.0), (radius));
}break;
case $I$(19).HOOGSTEEN:
{
var p2=Clazz.new_($I$(20,1));
radius /= 1.05;
p2.moveTo$F$F((posx - radius * normx / 2.0 - radius * normy / 2.0), (posy - radius * normy / 2.0 + radius * normx / 2.0));
p2.lineTo$F$F((posx + radius * normx / 2.0 - radius * normy / 2.0), (posy + radius * normy / 2.0 + radius * normx / 2.0));
p2.lineTo$F$F((posx + radius * normx / 2.0 + radius * normy / 2.0), (posy + radius * normy / 2.0 - radius * normx / 2.0));
p2.lineTo$F$F((posx - radius * normx / 2.0 + radius * normy / 2.0), (posy - radius * normy / 2.0 - radius * normx / 2.0));
p2.closePath$();
if (isCIS) {
g2D.setColor$java_awt_Color(bck);
g2D.fill$java_awt_geom_GeneralPath(p2);
g2D.draw$java_awt_geom_GeneralPath(p2);
} else {
g2D.setColor$java_awt_Color($I$(18).white);
g2D.fill$java_awt_geom_GeneralPath(p2);
g2D.setColor$java_awt_Color(bck);
g2D.draw$java_awt_geom_GeneralPath(p2);
}}break;
case $I$(19).SUGAR:
{
var ix=radius * normx / 2.0;
var iy=radius * normy / 2.0;
var jx=radius * normy / 2.0;
var jy=-radius * normx / 2.0;
var p2=Clazz.new_($I$(20,1));
p2.moveTo$F$F((posx - ix + jx), (posy - iy + jy));
p2.lineTo$F$F((posx + ix + jx ), (posy + iy + jy ));
p2.lineTo$F$F((posx - jx), (posy - jy));
p2.closePath$();
if (isCIS) {
g2D.setColor$java_awt_Color(bck);
g2D.fill$java_awt_geom_GeneralPath(p2);
g2D.draw$java_awt_geom_GeneralPath(p2);
} else {
g2D.setColor$java_awt_Color($I$(18).white);
g2D.fill$java_awt_geom_GeneralPath(p2);
g2D.setColor$java_awt_Color(bck);
g2D.draw$java_awt_geom_GeneralPath(p2);
}}break;
}
g2D.setColor$java_awt_Color(bck);
}, p$1);

Clazz.newMeth(C$, 'drawBasePairArc$fr_orsay_lri_varna_models_export_VueVARNAGraphics$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$fr_orsay_lri_varna_models_rna_ModeleBP$D', function (g2D, i, j, orig, dest, scaleFactor, style, newRadius) {
var distance;
var coef;
if (j - i == 1) {
coef=this.getBPHeightIncrement$() * 1.75;
} else {
coef=this.getBPHeightIncrement$();
}distance=dest.x - orig.x;
switch (this._conf._mainBPStyle) {
case $I$(21).LW:
{
var radiusCircle=((65.0 - this._RNA.BASE_RADIUS) / 5.0) * scaleFactor;
if (style.isCanonical$()) {
if (style.isCanonicalGC$()) {
if ((orig.x != dest.x ) || (orig.y != dest.y ) ) {
g2D.drawArc$D$D$D$D$D$D((dest.x + orig.x) / 2.0, dest.y - scaleFactor * this._RNA.BASE_RADIUS / 2.0, (distance - scaleFactor * this._RNA.BASE_RADIUS / 3.0), (distance * coef - scaleFactor * this._RNA.BASE_RADIUS / 3.0), 0, 180);
g2D.drawArc$D$D$D$D$D$D((dest.x + orig.x) / 2.0, dest.y - scaleFactor * this._RNA.BASE_RADIUS / 2.0, (distance + scaleFactor * this._RNA.BASE_RADIUS / 3.0), (distance * coef + scaleFactor * this._RNA.BASE_RADIUS / 3.0), 0, 180);
}} else if (style.isCanonicalAU$()) {
g2D.drawArc$D$D$D$D$D$D((dest.x + orig.x) / 2.0, dest.y - scaleFactor * this._RNA.BASE_RADIUS / 2.0, (distance), (distance * coef), 0, 180);
} else if (style.isWobbleUG$()) {
var midtop=Clazz.new_([(dest.x + orig.x) / 2.0, dest.y - distance * coef / 2.0 - scaleFactor * this._RNA.BASE_RADIUS / 2.0],$I$(4,1).c$$D$D);
g2D.drawArc$D$D$D$D$D$D(midtop.x, dest.y - scaleFactor * this._RNA.BASE_RADIUS / 2.0, (distance), (distance * coef), 0, 180);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, midtop.x, midtop.y, 1.0, 0.0, radiusCircle, false, $I$(19).WC]);
} else {
var midtop=Clazz.new_([(dest.x + orig.x) / 2.0, dest.y - distance * coef / 2.0 - scaleFactor * this._RNA.BASE_RADIUS / 2.0],$I$(4,1).c$$D$D);
g2D.drawArc$D$D$D$D$D$D(midtop.x, dest.y - scaleFactor * this._RNA.BASE_RADIUS / 2.0, (distance), (distance * coef), 0, 180);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, midtop.x, midtop.y, 1.0, 0.0, radiusCircle, style.isCIS$(), style.getEdgePartner5$()]);
}} else {
var p1=style.getEdgePartner5$();
var p2=style.getEdgePartner3$();
var midtop=Clazz.new_([(dest.x + orig.x) / 2.0, dest.y - distance * coef / 2.0 - scaleFactor * this._RNA.BASE_RADIUS / 2.0],$I$(4,1).c$$D$D);
g2D.drawArc$D$D$D$D$D$D(midtop.x, dest.y - scaleFactor * this._RNA.BASE_RADIUS / 2.0, (distance), (distance * coef), 0, 180);
if (p1 === p2 ) {
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, midtop.x, midtop.y, 1.0, 0.0, radiusCircle, false, style.getEdgePartner5$()]);
} else {
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, midtop.x - scaleFactor * this._RNA.BASE_RADIUS, midtop.y, 1.0, 0.0, radiusCircle, style.isCIS$(), p1]);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, midtop.x + scaleFactor * this._RNA.BASE_RADIUS, midtop.y, -1.0, 0.0, radiusCircle, style.isCIS$(), p2]);
}}}break;
case $I$(21).LW_ALT:
{
var radiusCircle=((65.0 - this._RNA.BASE_RADIUS) / 5.0) * scaleFactor;
var distFromBaseCenter=C$.DISTANCE_FACT * scaleFactor;
orig=Clazz.new_([orig.x, orig.y - (distFromBaseCenter + newRadius)],$I$(4,1).c$$D$D);
dest=Clazz.new_([dest.x, dest.y - (distFromBaseCenter + newRadius)],$I$(4,1).c$$D$D);
if (style.isCanonical$()) {
if (style.isCanonicalGC$()) {
if ((orig.x != dest.x ) || (orig.y != dest.y ) ) {
g2D.drawArc$D$D$D$D$D$D((dest.x + orig.x) / 2.0, dest.y - scaleFactor * this._RNA.BASE_RADIUS / 2.0, (distance - scaleFactor * this._RNA.BASE_RADIUS / 3.0), (distance * coef - scaleFactor * this._RNA.BASE_RADIUS / 3.0), 0, 180);
g2D.drawArc$D$D$D$D$D$D((dest.x + orig.x) / 2.0, dest.y - scaleFactor * this._RNA.BASE_RADIUS / 2.0, (distance + scaleFactor * this._RNA.BASE_RADIUS / 3.0), (distance * coef + scaleFactor * this._RNA.BASE_RADIUS / 3.0), 0, 180);
}} else if (style.isCanonicalAU$()) {
g2D.drawArc$D$D$D$D$D$D((dest.x + orig.x) / 2.0, dest.y - scaleFactor * this._RNA.BASE_RADIUS / 2.0, (distance), (distance * coef), 0, 180);
}} else {
var p1=style.getEdgePartner5$();
var p2=style.getEdgePartner3$();
var midtop=Clazz.new_([(dest.x + orig.x) / 2.0, dest.y - distance * coef / 2.0 - scaleFactor * this._RNA.BASE_RADIUS / 2.0],$I$(4,1).c$$D$D);
g2D.drawArc$D$D$D$D$D$D(midtop.x, dest.y - scaleFactor * this._RNA.BASE_RADIUS / 2.0, (distance), (distance * coef), 0, 180);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, orig.x, orig.y - radiusCircle * 0.95, 1.0, 0.0, radiusCircle, style.isCIS$(), p1]);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, dest.x, dest.y - radiusCircle * 0.95, -1.0, 0.0, radiusCircle, style.isCIS$(), p2]);
}}break;
default:
g2D.drawArc$D$D$D$D$D$D((dest.x + orig.x) / 2.0, dest.y - scaleFactor * this._RNA.BASE_RADIUS / 2.0, (distance), (distance * coef), 0, 180);
break;
}
}, p$1);

Clazz.newMeth(C$, 'drawBasePair$fr_orsay_lri_varna_models_export_VueVARNAGraphics$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$fr_orsay_lri_varna_models_rna_ModeleBP$D$D', function (g2D, orig, dest, style, newRadius, scaleFactor) {
var dx=dest.x - orig.x;
var dy=dest.y - orig.y;
var dist=Math.sqrt((dest.x - orig.x) * (dest.x - orig.x) + (dest.y - orig.y) * (dest.y - orig.y));
dx /= dist;
dy /= dist;
var nx=-dy;
var ny=dx;
orig=Clazz.new_($I$(4,1).c$$D$D,[orig.x + newRadius * dx, orig.y + newRadius * dy]);
dest=Clazz.new_($I$(4,1).c$$D$D,[dest.x - newRadius * dx, dest.y - newRadius * dy]);
switch (this._conf._mainBPStyle) {
case $I$(21).LW:
{
var radiusCircle=((65.0 - this._RNA.BASE_RADIUS) / 5.0) * scaleFactor;
if (style.isCanonical$()) {
if (style.isCanonicalGC$()) {
if ((orig.x != dest.x ) || (orig.y != dest.y ) ) {
nx *= scaleFactor * this._RNA.BASE_RADIUS / 4.0;
ny *= scaleFactor * this._RNA.BASE_RADIUS / 4.0;
g2D.drawLine$D$D$D$D((orig.x + nx), (orig.y + ny), (dest.x + nx), (dest.y + ny));
g2D.drawLine$D$D$D$D((orig.x - nx), (orig.y - ny), (dest.x - nx), (dest.y - ny));
}} else if (style.isCanonicalAU$()) {
g2D.drawLine$D$D$D$D(orig.x, orig.y, dest.x, dest.y);
} else if (style.isWobbleUG$()) {
var cx=(dest.x + orig.x) / 2.0;
var cy=(dest.y + orig.y) / 2.0;
g2D.drawLine$D$D$D$D(orig.x, orig.y, dest.x, dest.y);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, cx, cy, nx, ny, radiusCircle, false, $I$(19).WC]);
} else {
var cx=(dest.x + orig.x) / 2.0;
var cy=(dest.y + orig.y) / 2.0;
g2D.drawLine$D$D$D$D(orig.x, orig.y, dest.x, dest.y);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, cx, cy, nx, ny, radiusCircle, style.isCIS$(), style.getEdgePartner5$()]);
}} else {
var p1=style.getEdgePartner5$();
var p2=style.getEdgePartner3$();
var cx=(dest.x + orig.x) / 2.0;
var cy=(dest.y + orig.y) / 2.0;
g2D.drawLine$D$D$D$D(orig.x, orig.y, dest.x, dest.y);
if (p1 === p2 ) {
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, cx, cy, nx, ny, radiusCircle, style.isCIS$(), p1]);
} else {
var vdx=(dest.x - orig.x);
var vdy=(dest.y - orig.y);
vdx /= 6.0;
vdy /= 6.0;
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, cx + vdx, cy + vdy, -nx, -ny, radiusCircle, style.isCIS$(), p2]);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, cx - vdx, cy - vdy, nx, ny, radiusCircle, style.isCIS$(), p1]);
}}}break;
case $I$(21).LW_ALT:
{
var radiusCircle=((65.0 - this._RNA.BASE_RADIUS) / 5.0) * scaleFactor;
var distFromBaseCenter=C$.DISTANCE_FACT * scaleFactor;
var norig=Clazz.new_([orig.x + (distFromBaseCenter + 0.5 * newRadius) * dx, orig.y + (distFromBaseCenter + 0.5 * newRadius) * dy],$I$(4,1).c$$D$D);
var ndest=Clazz.new_([dest.x - (distFromBaseCenter + 0.5 * newRadius) * dx, dest.y - (distFromBaseCenter + 0.5 * newRadius) * dy],$I$(4,1).c$$D$D);
if (style.isCanonical$()) {
if (style.isCanonicalGC$()) {
if ((norig.x != ndest.x ) || (norig.y != ndest.y ) ) {
nx *= scaleFactor * this._RNA.BASE_RADIUS / 4.0;
ny *= scaleFactor * this._RNA.BASE_RADIUS / 4.0;
g2D.drawLine$D$D$D$D((norig.x + nx), (norig.y + ny), (ndest.x + nx), (ndest.y + ny));
g2D.drawLine$D$D$D$D((norig.x - nx), (norig.y - ny), (ndest.x - nx), (ndest.y - ny));
}} else if (style.isCanonicalAU$()) {
g2D.drawLine$D$D$D$D(norig.x, norig.y, ndest.x, ndest.y);
} else if (style.isWobbleUG$()) {
var cx=(ndest.x + norig.x) / 2.0;
var cy=(ndest.y + norig.y) / 2.0;
g2D.drawLine$D$D$D$D(norig.x, norig.y, ndest.x, ndest.y);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, cx, cy, nx, ny, radiusCircle, false, $I$(19).WC]);
} else {
var cx=(ndest.x + norig.x) / 2.0;
var cy=(ndest.y + norig.y) / 2.0;
g2D.drawLine$D$D$D$D(norig.x, norig.y, ndest.x, ndest.y);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, cx, cy, nx, ny, radiusCircle, style.isCIS$(), style.getEdgePartner5$()]);
}} else {
var p1=style.getEdgePartner5$();
var p2=style.getEdgePartner3$();
var cx=(ndest.x + norig.x) / 2.0;
var cy=(ndest.y + norig.y) / 2.0;
g2D.drawLine$D$D$D$D(norig.x, norig.y, ndest.x, ndest.y);
if (p1 === p2 ) {
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, cx, cy, nx, ny, radiusCircle, style.isCIS$(), p1]);
} else {
var fac=0.4;
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, ndest.x - fac * radiusCircle * dx , ndest.y - fac * radiusCircle * dy , -nx, -ny, radiusCircle, style.isCIS$(), p2]);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge.apply(this, [g2D, norig.x + fac * radiusCircle * dx , norig.y + fac * radiusCircle * dy , nx, ny, radiusCircle, style.isCIS$(), p1]);
}}}break;
case $I$(21).SIMPLE:
g2D.drawLine$D$D$D$D(orig.x, orig.y, dest.x, dest.y);
break;
case $I$(21).RNAVIZ:
var xcenter=(orig.x + dest.x) / 2.0;
var ycenter=(orig.y + dest.y) / 2.0;
var radius=Math.max(4.0 * scaleFactor, 1.0);
g2D.fillCircle$D$D$D((xcenter - radius), (ycenter - radius), (2.0 * radius));
break;
case $I$(21).NONE:
break;
}
}, p$1);

Clazz.newMeth(C$, 'getHighlightedVersion$java_awt_Color$java_awt_Color', function (c1, c2) {
var r1=c1.getRed$();
var g1=c1.getGreen$();
var b1=c1.getBlue$();
var r2=c2.getRed$();
var g2=c2.getGreen$();
var b2=c2.getBlue$();
var val=this._blink.getVal$();
var nr=Math.max(0, Math.min((((r1 * val + r2 * (1.0 - val)))|0), 255));
var ng=Math.max(0, Math.min((((g1 * val + g2 * (1.0 - val)))|0), 255));
var nb=Math.max(0, Math.min((((b1 * val + b2 * (1.0 - val)))|0), 255));
return Clazz.new_($I$(18,1).c$$I$I$I,[nr, ng, nb]);
}, p$1);

Clazz.newMeth(C$, 'highlightFilter$I$java_awt_Color$java_awt_Color$java_awt_Color$Z', function (index, initialColor, c1, c2, localView) {
if (this._selectedBases.contains$fr_orsay_lri_varna_models_rna_ModeleBase(this._RNA.getBaseAt$I(index)) && localView ) {
return p$1.getHighlightedVersion$java_awt_Color$java_awt_Color.apply(this, [c1, c2]);
} else {
return initialColor;
}}, p$1);

Clazz.newMeth(C$, 'computeExcentricUnitVector$I$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA', function (i, points, centers) {
var dist=points[i].distance$java_awt_geom_Point2D(centers[i]);
var byCenter=Clazz.new_([(points[i].x - centers[i].x) / dist, (points[i].y - centers[i].y) / dist],$I$(4,1).c$$D$D);
if ((i > 0) && (i < points.length - 1) ) {
var p0=points[i - 1];
var p1=points[i];
var p2=points[i + 1];
var dist1=p2.distance$java_awt_geom_Point2D(p1);
var v1=Clazz.new_([(p2.x - p1.x) / dist1, (p2.y - p1.y) / dist1],$I$(4,1).c$$D$D);
var vn1=Clazz.new_($I$(4,1).c$$D$D,[v1.y, -v1.x]);
var dist2=p1.distance$java_awt_geom_Point2D(p0);
var v2=Clazz.new_([(p1.x - p0.x) / dist2, (p1.y - p0.y) / dist2],$I$(4,1).c$$D$D);
var vn2=Clazz.new_($I$(4,1).c$$D$D,[v2.y, -v2.x]);
var vn=Clazz.new_([(vn1.x + vn2.x) / 2.0, (vn1.y + vn2.y) / 2.0],$I$(4,1).c$$D$D);
var D=vn.distance$java_awt_geom_Point2D(Clazz.new_($I$(4,1).c$$D$D,[0.0, 0.0]));
vn.x /= D;
vn.y /= D;
if (byCenter.x * vn.x + byCenter.y * vn.y < 0 ) {
vn.x=-vn.x;
vn.y=-vn.y;
}return vn;
} else if (((i == 0) || (i == points.length - 1) ) && (points.length > 1) ) {
var a=(i == 0) ? 0 : points.length - 1;
var b=(i == 0) ? 1 : points.length - 2;
var D=points[a].distance$java_awt_geom_Point2D(points[b]);
return Clazz.new_([(points[a].x - points[b].x) / D, (points[a].y - points[b].y) / D],$I$(4,1).c$$D$D);
} else {
return byCenter;
}}, 1);

Clazz.newMeth(C$, 'drawBase$fr_orsay_lri_varna_models_export_VueVARNAGraphics$I$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$D$D$Z', function (g2D, i, points, centers, newRadius, _scaleFactor, localView) {
var p=points[i];
var mb=this._RNA.get_listeBases$().get$I(i);
g2D.setFont$java_awt_Font(this._conf._fontBasesGeneral);
var baseInnerColor=p$1.highlightFilter$I$java_awt_Color$java_awt_Color$java_awt_Color$Z.apply(this, [i, this._RNA.getBaseInnerColor$I$fr_orsay_lri_varna_models_VARNAConfig(i, this._conf), $I$(18).white, this._RNA.getBaseInnerColor$I$fr_orsay_lri_varna_models_VARNAConfig(i, this._conf), localView]);
var baseOuterColor=p$1.highlightFilter$I$java_awt_Color$java_awt_Color$java_awt_Color$Z.apply(this, [i, this._RNA.getBaseOuterColor$I$fr_orsay_lri_varna_models_VARNAConfig(i, this._conf), this._RNA.getBaseOuterColor$I$fr_orsay_lri_varna_models_VARNAConfig(i, this._conf), $I$(18).white, localView]);
var baseNameColor=p$1.highlightFilter$I$java_awt_Color$java_awt_Color$java_awt_Color$Z.apply(this, [i, this._RNA.getBaseNameColor$I$fr_orsay_lri_varna_models_VARNAConfig(i, this._conf), this._RNA.getBaseNameColor$I$fr_orsay_lri_varna_models_VARNAConfig(i, this._conf), $I$(18).white, localView]);
if ($I$(1).whiteLabelPreferrable$java_awt_Color(baseInnerColor)) {
baseNameColor=$I$(18).white;
}if (Clazz.instanceOf(mb, "fr.orsay.lri.varna.models.rna.ModeleBaseNucleotide")) {
var mbn=mb;
var res=mbn.getBase$();
if (this._hoveredBase === mb  && localView  && this.isModifiable$() ) {
g2D.setColor$java_awt_Color(this._conf._hoverColor);
g2D.fillCircle$D$D$D(p.getX$() - 1.5 * newRadius, p.getY$() - 1.5 * newRadius, 3.0 * newRadius);
g2D.setColor$java_awt_Color(this._conf._hoverColor.darker$());
g2D.drawCircle$D$D$D(p.getX$() - 1.5 * newRadius, p.getY$() - 1.5 * newRadius, 3.0 * newRadius);
g2D.setPlainStroke$();
}if (this._conf._fillBases) {
g2D.setColor$java_awt_Color(baseInnerColor);
g2D.fillCircle$D$D$D(p.getX$() - newRadius, p.getY$() - newRadius, 2.0 * newRadius);
}if (this._conf._drawOutlineBases) {
g2D.setColor$java_awt_Color(baseOuterColor);
g2D.setStrokeThickness$D(this._conf._baseThickness * _scaleFactor);
g2D.drawCircle$D$D$D(p.getX$() - newRadius, p.getY$() - newRadius, 2.0 * newRadius);
}g2D.setColor$java_awt_Color(baseNameColor);
g2D.drawStringCentered$S$D$D(String.valueOf$O(res), p.getX$(), p.getY$());
} else if (Clazz.instanceOf(mb, "fr.orsay.lri.varna.models.rna.ModeleBasesComparison")) {
var mbc=mb;
g2D.setPlainStroke$();
g2D.setStrokeThickness$D(this._conf._baseThickness * _scaleFactor);
g2D.setColor$java_awt_Color(baseInnerColor);
g2D.fillRoundRect$D$D$D$D$D$D((p.getX$() - 1.5 * newRadius), (p.getY$() - newRadius), (3.0 * newRadius), (2.0 * newRadius), 10 * _scaleFactor, 10 * _scaleFactor);
g2D.setColor$java_awt_Color(baseOuterColor);
g2D.drawRoundRect$D$D$D$D$D$D((p.getX$() - 1.5 * newRadius), (p.getY$() - newRadius), (3 * newRadius), (2 * newRadius), 10 * _scaleFactor, 10 * _scaleFactor);
g2D.drawLine$D$D$D$D((p.getX$()), (p.getY$() + newRadius) - 1, (p.getX$()), (p.getY$() - newRadius) + 1);
var label1=String.valueOf$O(mbc.getBase1$());
var label2=String.valueOf$O(mbc.getBase2$());
g2D.setColor$java_awt_Color(this.getRNA$().get_listeBases$().get$I(i).getStyleBase$().getBaseNameColor$());
g2D.drawStringCentered$S$D$D(label1, p.getX$() - (0.75 * newRadius), p.getY$());
g2D.drawStringCentered$S$D$D(label2, p.getX$() + (0.75 * newRadius), p.getY$());
}if (this._RNA.isNumberDrawn$fr_orsay_lri_varna_models_rna_ModeleBase$I(mb, this.getNumPeriod$())) {
var vn=C$.computeExcentricUnitVector$I$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA(i, points, centers);
g2D.setColor$java_awt_Color(mb.getStyleBase$().getBaseNumberColor$());
g2D.setFont$java_awt_Font(this._conf._numbersFont);
var factorMin=Math.min(0.5, this._conf._distNumbers);
var factorMax=Math.min(this._conf._distNumbers - 1.5, this._conf._distNumbers);
g2D.drawLine$D$D$D$D(p.x + vn.x * ((1 + factorMin) * newRadius), p.y + vn.y * ((1 + factorMin) * newRadius), p.x + vn.x * ((1 + factorMax) * newRadius), p.y + vn.y * ((1 + factorMax) * newRadius));
g2D.drawStringCentered$S$D$D(mb.getLabel$(), p.x + vn.x * ((1 + this._conf._distNumbers) * newRadius), p.y + vn.y * ((1 + this._conf._distNumbers) * newRadius));
}}, p$1);

Clazz.newMeth(C$, 'drawChemProbAnnotation$fr_orsay_lri_varna_models_export_VueVARNAGraphics$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation$java_awt_geom_Point2D_Double$D', function (g2D, cpa, anchor, scaleFactor) {
g2D.setColor$java_awt_Color(cpa.getColor$());
g2D.setStrokeThickness$D($I$(1).CHEM_PROB_ARROW_THICKNESS * scaleFactor * cpa.getIntensity$() );
g2D.setPlainStroke$();
var v=cpa.getDirVector$();
var vn=cpa.getNormalVector$();
var base=Clazz.new_([(anchor.x + this._RNA.CHEM_PROB_DIST * scaleFactor * v.x ), (anchor.y + this._RNA.CHEM_PROB_DIST * scaleFactor * v.y )],$I$(4,1).c$$D$D);
var edge=Clazz.new_([(base.x + this._RNA.CHEM_PROB_BASE_LENGTH * cpa.getIntensity$() * scaleFactor * v.x ), (base.y + this._RNA.CHEM_PROB_BASE_LENGTH * cpa.getIntensity$() * scaleFactor * v.y )],$I$(4,1).c$$D$D);
switch (cpa.getType$()) {
case $I$(22).ARROW:
{
var arrowTip1=Clazz.new_([(base.x + cpa.getIntensity$() * scaleFactor * (this._RNA.CHEM_PROB_ARROW_WIDTH * vn.x + this._RNA.CHEM_PROB_ARROW_HEIGHT * v.x) ), (base.y + cpa.getIntensity$() * scaleFactor * (this._RNA.CHEM_PROB_ARROW_WIDTH * vn.y + this._RNA.CHEM_PROB_ARROW_HEIGHT * v.y) )],$I$(4,1).c$$D$D);
var arrowTip2=Clazz.new_([(base.x + cpa.getIntensity$() * scaleFactor * (-this._RNA.CHEM_PROB_ARROW_WIDTH * vn.x + this._RNA.CHEM_PROB_ARROW_HEIGHT * v.x) ), (base.y + cpa.getIntensity$() * scaleFactor * (-this._RNA.CHEM_PROB_ARROW_WIDTH * vn.y + this._RNA.CHEM_PROB_ARROW_HEIGHT * v.y) )],$I$(4,1).c$$D$D);
g2D.drawLine$D$D$D$D(base.x, base.y, edge.x, edge.y);
g2D.drawLine$D$D$D$D(base.x, base.y, arrowTip1.x, arrowTip1.y);
g2D.drawLine$D$D$D$D(base.x, base.y, arrowTip2.x, arrowTip2.y);
}break;
case $I$(22).PIN:
{
var side1=Clazz.new_([(edge.x - cpa.getIntensity$() * scaleFactor * (this._RNA.CHEM_PROB_PIN_SEMIDIAG * v.x) ), (edge.y - cpa.getIntensity$() * scaleFactor * (this._RNA.CHEM_PROB_PIN_SEMIDIAG * v.y) )],$I$(4,1).c$$D$D);
var side2=Clazz.new_([(edge.x - cpa.getIntensity$() * scaleFactor * (this._RNA.CHEM_PROB_PIN_SEMIDIAG * vn.x) ), (edge.y - cpa.getIntensity$() * scaleFactor * (this._RNA.CHEM_PROB_PIN_SEMIDIAG * vn.y) )],$I$(4,1).c$$D$D);
var side3=Clazz.new_([(edge.x + cpa.getIntensity$() * scaleFactor * (this._RNA.CHEM_PROB_PIN_SEMIDIAG * v.x) ), (edge.y + cpa.getIntensity$() * scaleFactor * (this._RNA.CHEM_PROB_PIN_SEMIDIAG * v.y) )],$I$(4,1).c$$D$D);
var side4=Clazz.new_([(edge.x + cpa.getIntensity$() * scaleFactor * (this._RNA.CHEM_PROB_PIN_SEMIDIAG * vn.x) ), (edge.y + cpa.getIntensity$() * scaleFactor * (this._RNA.CHEM_PROB_PIN_SEMIDIAG * vn.y) )],$I$(4,1).c$$D$D);
var p2=Clazz.new_($I$(20,1));
p2.moveTo$F$F(side1.x, side1.y);
p2.lineTo$F$F(side2.x, side2.y);
p2.lineTo$F$F(side3.x, side3.y);
p2.lineTo$F$F(side4.x, side4.y);
p2.closePath$();
g2D.fill$java_awt_geom_GeneralPath(p2);
g2D.drawLine$D$D$D$D(base.x, base.y, edge.x, edge.y);
}break;
case $I$(22).TRIANGLE:
{
var arrowTip1=Clazz.new_([(edge.x + cpa.getIntensity$() * scaleFactor * (this._RNA.CHEM_PROB_TRIANGLE_WIDTH * vn.x) ), (edge.y + cpa.getIntensity$() * scaleFactor * (this._RNA.CHEM_PROB_TRIANGLE_WIDTH * vn.y) )],$I$(4,1).c$$D$D);
var arrowTip2=Clazz.new_([(edge.x + cpa.getIntensity$() * scaleFactor * (-this._RNA.CHEM_PROB_TRIANGLE_WIDTH * vn.x) ), (edge.y + cpa.getIntensity$() * scaleFactor * (-this._RNA.CHEM_PROB_TRIANGLE_WIDTH * vn.y) )],$I$(4,1).c$$D$D);
var p2=Clazz.new_($I$(20,1));
p2.moveTo$F$F(base.x, base.y);
p2.lineTo$F$F(arrowTip1.x, arrowTip1.y);
p2.lineTo$F$F(arrowTip2.x, arrowTip2.y);
p2.closePath$();
g2D.fill$java_awt_geom_GeneralPath(p2);
}break;
case $I$(22).DOT:
{
var radius=new Double(scaleFactor * this._RNA.CHEM_PROB_DOT_RADIUS * cpa.getIntensity$() );
var center=Clazz.new_([(base.x + (radius).valueOf() * v.x), (base.y + (radius).valueOf() * v.y)],$I$(4,1).c$$D$D);
g2D.fillCircle$D$D$D((center.x - (radius).valueOf()), (center.y - (radius).valueOf()), (2 * (radius).valueOf()));
}break;
}
});

Clazz.newMeth(C$, 'buildCaptionPosition$fr_orsay_lri_varna_models_rna_ModeleBase$D$D', function (mb, scaleFactor, heightEstimate) {
var radius=2.0;
if (this._RNA.isNumberDrawn$fr_orsay_lri_varna_models_rna_ModeleBase$I(mb, this.getNumPeriod$())) {
radius += this._conf._distNumbers;
}var center=mb.getCenter$();
var p=mb.getCoords$();
var realDistance=this._RNA.BASE_RADIUS * radius + heightEstimate;
return Clazz.new_([center.getX$() + (p.getX$() - center.getX$()) * ((p.distance$java_awt_geom_Point2D(center) + realDistance) / p.distance$java_awt_geom_Point2D(center)), center.getY$() + (p.getY$() - center.getY$()) * ((p.distance$java_awt_geom_Point2D(center) + realDistance) / p.distance$java_awt_geom_Point2D(center))],$I$(4,1).c$$D$D);
});

Clazz.newMeth(C$, 'renderAnnotations$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D', function (g2D, offX, offY, rnaBBoxX, rnaBBoxY, scaleFactor) {
for (var textAnnotation, $textAnnotation = this._RNA.getAnnotations$().iterator$(); $textAnnotation.hasNext$()&&((textAnnotation=($textAnnotation.next$())),1);) {
g2D.setColor$java_awt_Color(textAnnotation.getColor$());
g2D.setFont$java_awt_Font(textAnnotation.getFont$().deriveFont$F((2.0 * textAnnotation.getFont$().getSize$() * scaleFactor )));
var position=textAnnotation.getCenterPosition$();
if (textAnnotation.getType$() === $I$(23).BASE ) {
var mb=textAnnotation.getAncrage$();
var fontHeight=Math.ceil(textAnnotation.getFont$().getSize$());
position=this.buildCaptionPosition$fr_orsay_lri_varna_models_rna_ModeleBase$D$D(mb, scaleFactor, fontHeight);
}position=this.transformCoord$java_awt_geom_Point2D_Double$D$D$D$D$D(position, offX, offY, rnaBBoxX, rnaBBoxY, scaleFactor);
g2D.drawStringCentered$S$D$D(textAnnotation.getTexte$(), position.x, position.y);
if ((this._selectedAnnotation === textAnnotation ) && (this._highlightAnnotation) ) {
p$1.drawStringOutline$fr_orsay_lri_varna_models_export_VueVARNAGraphics$S$D$D$D.apply(this, [g2D, textAnnotation.getTexte$(), position.x, position.y, 5]);
}}
for (var cpa, $cpa = this._RNA.getChemProbAnnotations$().iterator$(); $cpa.hasNext$()&&((cpa=($cpa.next$())),1);) {
var anchor=this.transformCoord$java_awt_geom_Point2D_Double$D$D$D$D$D(cpa.getAnchorPosition$(), offX, offY, rnaBBoxX, rnaBBoxY, scaleFactor);
this.drawChemProbAnnotation$fr_orsay_lri_varna_models_export_VueVARNAGraphics$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation$java_awt_geom_Point2D_Double$D(g2D, cpa, anchor, scaleFactor);
}
}, p$1);

Clazz.newMeth(C$, 'getExtendedRNABBox$', function () {
var rnabbox=this._RNA.getBBox$();
rnabbox.y -= this._conf._distNumbers * this._RNA.BASE_RADIUS;
rnabbox.height += 2.0 * this._conf._distNumbers * this._RNA.BASE_RADIUS ;
rnabbox.x -= this._conf._distNumbers * this._RNA.BASE_RADIUS;
rnabbox.width += 2.0 * this._conf._distNumbers * this._RNA.BASE_RADIUS ;
if (this._RNA.hasVirtualLoops$()) {
rnabbox.y -= 40.0;
rnabbox.height += 80.0;
rnabbox.x -= 40.0;
rnabbox.width += 80.0;
}return rnabbox;
});

Clazz.newMeth(C$, 'drawBackbone$fr_orsay_lri_varna_models_export_VueVARNAGraphics$java_awt_geom_Point2D_DoubleA$D$D', function (g2D, newCoords, newRadius, _scaleFactor) {
if (this.getDrawBackbone$()) {
g2D.setStrokeThickness$D(1.5 * _scaleFactor);
g2D.setColor$java_awt_Color(this._conf._backboneColor);
var bck=this._RNA.getBackbone$();
for (var i=1; i < this._RNA.get_listeBases$().size$(); i++) {
var p1=newCoords[i - 1];
var p2=newCoords[i];
var dist=p1.distance$java_awt_geom_Point2D(p2);
var a=this._RNA.getBaseAt$I(i - 1).getElementStructure$();
var b=this._RNA.getBaseAt$I(i).getElementStructure$();
var consecutivePair=(a == i) && (b == i - 1) ;
if ((dist > 0 )) {
var vbp=Clazz.new_($I$(4,1));
vbp.x=(p2.x - p1.x) / dist;
vbp.y=(p2.y - p1.y) / dist;
var bt=bck.getTypeBefore$I(i);
if (bt !== $I$(24).DISCONTINUOUS_TYPE ) {
if (bt === $I$(24).MISSING_PART_TYPE ) {
g2D.setSelectionStroke$();
} else {
g2D.setPlainStroke$();
}g2D.setColor$java_awt_Color(bck.getColorBefore$I$java_awt_Color(i, this._conf._backboneColor));
if (consecutivePair && (this._RNA.getDrawMode$() != 4) && (this._RNA.getDrawMode$() != 1)  ) {
var dir=0;
if (i + 1 < newCoords.length) {
dir=(this._RNA.testDirectionality$I$I$I(i - 1, i, i + 1) ? -1 : 1);
} else if (i - 2 >= 0) {
dir=(this._RNA.testDirectionality$I$I$I(i - 2, i - 1, i) ? -1 : 1);
}var vn=Clazz.new_($I$(4,1).c$$D$D,[dir * vbp.y, -dir * vbp.x]);
var centerSeg=Clazz.new_([(p1.x + p2.x) / 2.0, (p1.y + p2.y) / 2.0],$I$(4,1).c$$D$D);
var distp1CenterSeq=p1.distance$java_awt_geom_Point2D(centerSeg);
var centerDist=Math.sqrt((40.0 * _scaleFactor * 40.0 * _scaleFactor ) - distp1CenterSeq * distp1CenterSeq);
var centerLoop=Clazz.new_($I$(4,1).c$$D$D,[centerSeg.x + centerDist * vn.x, centerSeg.y + centerDist * vn.y]);
var radius=centerLoop.distance$java_awt_geom_Point2D(p1);
var a1=360.0 * (Math.atan2(-(p1.y - centerLoop.y), (p1.x - centerLoop.x))) / (6.283185307179586);
var a2=360.0 * (Math.atan2(-(p2.y - centerLoop.y), (p2.x - centerLoop.x))) / (6.283185307179586);
var angle=(a2 - a1);
if (-dir * angle < 0 ) {
angle += -dir * 360.0;
}g2D.drawArc$D$D$D$D$D$D(centerLoop.x + 0.8 * newRadius * vn.x , centerLoop.y + 0.8 * newRadius * vn.y , 2 * radius, 2 * radius, a1, angle);
} else {
g2D.drawLine$D$D$D$D((newCoords[i - 1].x + newRadius * vbp.x), (newCoords[i - 1].y + newRadius * vbp.y), (newCoords[i].x - newRadius * vbp.x), (newCoords[i].y - newRadius * vbp.y));
}}}}
}});

Clazz.newMeth(C$, 'logicToPanel$java_awt_geom_Point2D_Double', function (logicPoint) {
return Clazz.new_([this._offX + (p$1.getScaleFactor.apply(this, []) * (logicPoint.x - this._offsetRNA.x)), this._offY + (p$1.getScaleFactor.apply(this, []) * (logicPoint.y - this._offsetRNA.y))],$I$(4,1).c$$D$D);
});

Clazz.newMeth(C$, 'renderRNA$fr_orsay_lri_varna_models_export_VueVARNAGraphics$java_awt_geom_Rectangle2D_Double', function (g2D, bbox) {
return this.renderRNA$fr_orsay_lri_varna_models_export_VueVARNAGraphics$java_awt_geom_Rectangle2D_Double$Z$Z(g2D, bbox, false, true);
});

Clazz.newMeth(C$, 'computeScaleFactor$java_awt_geom_Rectangle2D_Double$Z$Z', function (bbox, localView, autoCenter) {
var rnabbox=this.getExtendedRNABBox$();
var scaleFactor=Math.min(bbox.width / rnabbox.width, bbox.height / rnabbox.height);
var newFontSize=Math.max(1, (((1.7 * this._RNA.BASE_RADIUS) * scaleFactor)|0));
rnabbox.y -= newFontSize;
rnabbox.height += newFontSize;
if (this._conf._drawColorMap) {
rnabbox.height += p$1.getColorMapHeight.apply(this, []);
}rnabbox.x -= newFontSize;
rnabbox.width += newFontSize;
scaleFactor=Math.min(bbox.width / rnabbox.width, bbox.height / rnabbox.height);
if (localView) {
if (this._conf._autoFit) {
p$1.setScaleFactor$D.apply(this, [scaleFactor]);
}scaleFactor=p$1.getScaleFactor.apply(this, []);
}return scaleFactor;
}, p$1);

Clazz.newMeth(C$, 'renderRNA$fr_orsay_lri_varna_models_export_VueVARNAGraphics$java_awt_geom_Rectangle2D_Double$Z$Z', function (g2D, bbox, localView, autoCenter) {
var rnaMultiBox=Clazz.new_($I$(25,1).c$$D$D$D$D,[0, 0, 1, 1]);
var scaleFactor=p$1.computeScaleFactor$java_awt_geom_Rectangle2D_Double$Z$Z.apply(this, [bbox, localView, autoCenter]);
var newFontSize=Math.max(1, (((1.7 * this._RNA.BASE_RADIUS) * scaleFactor)|0));
var newRadius=Math.max(1.0, (scaleFactor * this._RNA.BASE_RADIUS));
this.setBaseFontSize$Float(new Float(newFontSize));
this.setNumbersFontSize$Float(new Float(newFontSize));
var offX=bbox.x;
var offY=bbox.y;
var rnabbox=this.getExtendedRNABBox$();
if (this._RNA.getSize$() != 0) {
var offsetRNA=Clazz.new_($I$(4,1).c$$D$D,[rnabbox.x, rnabbox.y]);
if (autoCenter) {
offX=(bbox.x + (bbox.width - Math.round(rnabbox.width * scaleFactor)) / 2.0);
offY=(bbox.y + (bbox.height - Math.round(rnabbox.height * scaleFactor)) / 2.0);
if (localView) {
this._offX=offX;
this._offY=offY;
this._offsetPanel=Clazz.new_($I$(4,1).c$$D$D,[this._offX, this._offY]);
this._offsetRNA=Clazz.new_($I$(4,1).c$$D$D,[rnabbox.x, rnabbox.y]);
}}if (localView) {
offX=this._offX;
offY=this._offY;
offsetRNA=this._offsetRNA;
}var newCoords=Clazz.array($I$(4), [this._RNA.get_listeBases$().size$()]);
var newCenters=Clazz.array($I$(4), [this._RNA.get_listeBases$().size$()]);
for (var i=0; i < this._RNA.get_listeBases$().size$(); i++) {
var mb=this._RNA.getBaseAt$I(i);
newCoords[i]=Clazz.new_([offX + (scaleFactor * (mb.getCoords$().x - offsetRNA.x)), offY + (scaleFactor * (mb.getCoords$().y - offsetRNA.y))],$I$(4,1).c$$D$D);
var centerBck=this._RNA.getCenter$I(i);
if (this._RNA.get_drawMode$() == 3 || this._RNA.get_drawMode$() == 2 ) {
if ((mb.getElementStructure$() != -1) && i < this._RNA.get_listeBases$().size$() - 1  && i > 1 ) {
var b1=this._RNA.get_listeBases$().get$I(i - 1);
var b2=this._RNA.get_listeBases$().get$I(i + 1);
var j1=b1.getElementStructure$();
var j2=b2.getElementStructure$();
if (!!((j1 == -1) ^ (j2 == -1))) {
var a1=b1.getCoords$();
var a2=b2.getCoords$();
var c1=b1.getCenter$();
var c2=b2.getCenter$();
centerBck.x=mb.getCoords$().x + (c1.x - a1.x) / c1.distance$java_awt_geom_Point2D(a1) + (c2.x - a2.x) / c2.distance$java_awt_geom_Point2D(a2);
centerBck.y=mb.getCoords$().y + (c1.y - a1.y) / c1.distance$java_awt_geom_Point2D(a1) + (c2.y - a2.y) / c2.distance$java_awt_geom_Point2D(a2);
}}}newCenters[i]=Clazz.new_([offX + (scaleFactor * (centerBck.x - offsetRNA.x)), offY + (scaleFactor * (centerBck.y - offsetRNA.y))],$I$(4,1).c$$D$D);
}
if (localView) {
this._realCoords=newCoords;
this._realCenters=newCenters;
}g2D.setStrokeThickness$D(1.5 * scaleFactor);
g2D.setPlainStroke$();
g2D.setFont$java_awt_Font(this._conf._fontBasesGeneral);
this.drawRegionHighlightsAnnotation$fr_orsay_lri_varna_models_export_VueVARNAGraphics$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$D(g2D, this._realCoords, this._realCenters, scaleFactor);
this.drawBackbone$fr_orsay_lri_varna_models_export_VueVARNAGraphics$java_awt_geom_Point2D_DoubleA$D$D(g2D, newCoords, newRadius, scaleFactor);
for (var i=0; i < this._RNA.get_listeBases$().size$(); i++) {
var j=this._RNA.get_listeBases$().get$I(i).getElementStructure$();
if (j > i) {
var msbp=this._RNA.get_listeBases$().get$I(i).getStyleBP$();
if (msbp.isCanonical$() || this._conf._drawnNonCanonicalBP ) {
if (this._RNA.get_drawMode$() == 4) {
g2D.setStrokeThickness$D(this._RNA.getBasePairThickness$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig(msbp, this._conf) * 2.0 * scaleFactor * this._conf._bpThickness );
} else {
g2D.setStrokeThickness$D(this._RNA.getBasePairThickness$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig(msbp, this._conf) * 1.5 * scaleFactor );
}g2D.setColor$java_awt_Color(this._RNA.getBasePairColor$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig(msbp, this._conf));
if (this._RNA.get_drawMode$() == 4) {
p$1.drawBasePairArc$fr_orsay_lri_varna_models_export_VueVARNAGraphics$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$fr_orsay_lri_varna_models_rna_ModeleBP$D.apply(this, [g2D, i, j, newCoords[i], newCoords[j], scaleFactor, msbp, newRadius]);
} else {
p$1.drawBasePair$fr_orsay_lri_varna_models_export_VueVARNAGraphics$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$fr_orsay_lri_varna_models_rna_ModeleBP$D$D.apply(this, [g2D, newCoords[i], newCoords[j], msbp, newRadius, scaleFactor]);
}}}}
if (this._conf._drawnNonPlanarBP) {
var bpaux=this._RNA.getStructureAux$();
for (var k=0; k < bpaux.size$(); k++) {
var msbp=bpaux.get$I(k);
if (msbp.isCanonical$() || this._conf._drawnNonCanonicalBP ) {
var i=msbp.getPartner5$().getIndex$();
var j=msbp.getPartner3$().getIndex$();
if (this._RNA.get_drawMode$() == 4) {
g2D.setStrokeThickness$D(this._RNA.getBasePairThickness$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig(msbp, this._conf) * 2.5 * scaleFactor * this._conf._bpThickness );
g2D.setPlainStroke$();
} else {
g2D.setStrokeThickness$D(this._RNA.getBasePairThickness$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig(msbp, this._conf) * 1.5 * scaleFactor );
g2D.setPlainStroke$();
}g2D.setColor$java_awt_Color(this._RNA.getBasePairColor$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig(msbp, this._conf));
if (j > i) {
if (this._RNA.get_drawMode$() == 4) {
p$1.drawBasePairArc$fr_orsay_lri_varna_models_export_VueVARNAGraphics$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$fr_orsay_lri_varna_models_rna_ModeleBP$D.apply(this, [g2D, i, j, newCoords[i], newCoords[j], scaleFactor, msbp, newRadius]);
} else {
p$1.drawBasePair$fr_orsay_lri_varna_models_export_VueVARNAGraphics$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$fr_orsay_lri_varna_models_rna_ModeleBP$D$D.apply(this, [g2D, newCoords[i], newCoords[j], msbp, newRadius, scaleFactor]);
}}}}
}g2D.setPlainStroke$();
for (var i=0; i < Math.min(this._RNA.get_listeBases$().size$(), newCoords.length); i++) {
p$1.drawBase$fr_orsay_lri_varna_models_export_VueVARNAGraphics$I$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$D$D$Z.apply(this, [g2D, i, newCoords, newCenters, newRadius, scaleFactor, localView]);
}
rnaMultiBox=Clazz.new_([offX, offY, (scaleFactor * rnabbox.width) - 1, (scaleFactor * rnabbox.height) - 1],$I$(25,1).c$$D$D$D$D);
if (localView) {
if (this._debug || this._drawBBox ) {
g2D.setColor$java_awt_Color($I$(18).RED);
g2D.setSelectionStroke$();
g2D.drawRect$D$D$D$D(rnaMultiBox.x, rnaMultiBox.y, rnaMultiBox.width, rnaMultiBox.height);
}if (this._conf._drawColorMap) {
p$1.drawColorMap$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$java_awt_geom_Rectangle2D_Double.apply(this, [g2D, scaleFactor, rnabbox]);
}if (this._debug || this._drawBBox ) {
g2D.setColor$java_awt_Color($I$(18).GRAY);
g2D.setSelectionStroke$();
g2D.drawRect$D$D$D$D(0, 0, this.getWidth$() - 1, this.getHeight$() - p$1.getTitleHeight.apply(this, []) - 1 );
}}p$1.renderAnnotations$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$D$D$D$D.apply(this, [g2D, offX, offY, offsetRNA.x, offsetRNA.y, scaleFactor]);
if (this._RNA._debugShape != null ) {
var c=Clazz.new_($I$(18,1).c$$I$I$I$I,[255, 0, 0, 50]);
g2D.setColor$java_awt_Color(c);
var at=Clazz.new_($I$(26,1));
at.translate$D$D(offX - scaleFactor * rnabbox.x, offY - scaleFactor * rnabbox.y);
at.scale$D$D(scaleFactor, scaleFactor);
var s=at.createTransformedShape$java_awt_Shape(this._RNA._debugShape);
if (Clazz.instanceOf(s, "java.awt.geom.GeneralPath")) {
g2D.fill$java_awt_geom_GeneralPath(s);
}}} else {
g2D.setColor$java_awt_Color($I$(2).DEFAULT_MESSAGE_COLOR);
g2D.setFont$java_awt_Font($I$(2).DEFAULT_MESSAGE_FONT);
rnaMultiBox=Clazz.new_($I$(25,1).c$$D$D$D$D,[0, 0, 10, 10]);
g2D.drawStringCentered$S$D$D("No RNA here", bbox.getCenterX$(), bbox.getCenterY$());
}return rnaMultiBox;
});

Clazz.newMeth(C$, 'centerViewOn$D$D', function (x, y) {
var r=this._RNA.getBBox$();
this._target=Clazz.new_($I$(4,1).c$$D$D,[x, y]);
var q=this.logicToPanel$java_awt_geom_Point2D_Double(this._target);
var p=Clazz.new_([((-q.x)|0), ((-q.y)|0)],$I$(11,1).c$$I$I);
this.setTranslation$java_awt_Point(p);
this.repaint$();
});

Clazz.newMeth(C$, 'getBaseAt$java_awt_geom_Point2D_Double', function (po) {
var mb=null;
var p=this.panelToLogicPoint$java_awt_geom_Point2D_Double(po);
var dist=1.7976931348623157E308;
for (var tmp, $tmp = this._RNA.get_listeBases$().iterator$(); $tmp.hasNext$()&&((tmp=($tmp.next$())),1);) {
var ndist=tmp.getCoords$().distance$java_awt_geom_Point2D(p);
if (dist > ndist ) {
mb=tmp;
dist=ndist;
}}
return mb;
});

Clazz.newMeth(C$, 'setColorMapValues$DoubleA', function (values) {
this._RNA.setColorMapValues$DoubleA$fr_orsay_lri_varna_models_rna_ModeleColorMap$Z(values, this._conf._cm, true);
this._conf._drawColorMap=true;
this.repaint$();
});

Clazz.newMeth(C$, 'setColorMapMaxValue$D', function (d) {
this._conf._cm.setMaxValue$D(d);
});

Clazz.newMeth(C$, 'setColorMapMinValue$D', function (d) {
this._conf._cm.setMinValue$D(d);
});

Clazz.newMeth(C$, 'getColorMap$', function () {
return this._conf._cm;
});

Clazz.newMeth(C$, 'setColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap', function (cm) {
this._conf._cm=cm;
this.repaint$();
});

Clazz.newMeth(C$, 'setColorMapCaption$S', function (caption) {
this._conf._colorMapCaption=caption;
this.repaint$();
});

Clazz.newMeth(C$, 'getColorMapCaption$', function () {
return this._conf._colorMapCaption;
});

Clazz.newMeth(C$, 'drawColorMap$Z', function (draw) {
this._conf._drawColorMap=draw;
});

Clazz.newMeth(C$, 'getColorMapHeight', function () {
var result=$I$(2).DEFAULT_COLOR_MAP_FONT_SIZE + this._conf._colorMapHeight;
if (!this._conf._colorMapCaption.equals$O("")) {
result += $I$(2).DEFAULT_COLOR_MAP_FONT_SIZE;
}return result;
}, p$1);

Clazz.newMeth(C$, 'drawColorMap$fr_orsay_lri_varna_models_export_VueVARNAGraphics$D$java_awt_geom_Rectangle2D_Double', function (g2D, scaleFactor, rnabbox) {
var v1=this._conf._cm.getMinValue$();
var v2=this._conf._cm.getMaxValue$();
var x;
var y;
g2D.setPlainStroke$();
var xSpaceAvail=0;
var ySpaceAvail=Math.min((this.getHeight$() - rnabbox.height * scaleFactor - p$1.getTitleHeight.apply(this, [])) / 2.0, scaleFactor * (this._conf._colorMapHeight + $I$(2).DEFAULT_COLOR_MAP_FONT_SIZE));
if ((ySpaceAvail|0) == 0) {
xSpaceAvail=Math.min((this.getWidth$() - rnabbox.width * scaleFactor) / 2, scaleFactor * (this._conf._colorMapWidth) + $I$(2).DEFAULT_COLOR_MAP_STRIPE_WIDTH);
}var xBase=(xSpaceAvail + this._offX + scaleFactor * (rnabbox.width - this._conf._colorMapWidth - this._conf._colorMapXOffset ) );
var hcaption=$I$(2).DEFAULT_COLOR_MAP_FONT_SIZE;
var yBase=(ySpaceAvail + this._offY + scaleFactor * (rnabbox.height - this._conf._colorMapHeight - this._conf._colorMapYOffset - hcaption ) );
for (var i=0; i < this._conf._colorMapWidth ; i++) {
var ratio=((i) / (this._conf._colorMapWidth));
var val=v1 + (v2 - v1) * ratio;
g2D.setColor$java_awt_Color(this._conf._cm.getColorForValue$D(val));
x=(xBase + scaleFactor * i);
y=yBase;
g2D.fillRect$D$D$D$D(x, y, scaleFactor * $I$(2).DEFAULT_COLOR_MAP_STRIPE_WIDTH, (scaleFactor * this._conf._colorMapHeight));
}
g2D.setColor$java_awt_Color($I$(2).DEFAULT_COLOR_MAP_OUTLINE);
g2D.drawRect$D$D$D$D(xBase, yBase, ($I$(2).DEFAULT_COLOR_MAP_STRIPE_WIDTH - 1 + scaleFactor * this._conf._colorMapWidth), ((scaleFactor * this._conf._colorMapHeight)));
g2D.setFont$java_awt_Font(this.getFont$().deriveFont$F((scaleFactor * $I$(2).DEFAULT_COLOR_MAP_FONT_SIZE)));
g2D.setColor$java_awt_Color($I$(2).DEFAULT_COLOR_MAP_FONT_COLOR);
var nf=$I$(27).getInstance$();
nf.setMaximumFractionDigits$I(2);
nf.setMinimumFractionDigits$I(0);
g2D.drawStringCentered$S$D$D(nf.format$D(this._conf._cm.getMinValue$()), xBase, yBase + scaleFactor * (this._conf._colorMapHeight + ($I$(2).DEFAULT_COLOR_MAP_FONT_SIZE / 1.7)));
g2D.drawStringCentered$S$D$D(nf.format$D(this._conf._cm.getMaxValue$()), xBase + $I$(2).DEFAULT_COLOR_MAP_STRIPE_WIDTH + scaleFactor * this._conf._colorMapWidth , yBase + scaleFactor * (this._conf._colorMapHeight + ($I$(2).DEFAULT_COLOR_MAP_FONT_SIZE / 1.7)));
if (!this._conf._colorMapCaption.equals$O("")) {
g2D.drawStringCentered$S$D$D("" + this._conf._colorMapCaption, xBase + scaleFactor * this._conf._colorMapWidth / 2.0, yBase + scaleFactor * ($I$(2).DEFAULT_COLOR_MAP_FONT_SIZE / 1.7 + this._conf._colorMapHeight));
}}, p$1);

Clazz.newMeth(C$, 'panelToLogicPoint$java_awt_geom_Point2D_Double', function (p) {
return Clazz.new_([((p.x - this.getOffsetPanel$().x) / p$1.getScaleFactor.apply(this, [])) + p$1.getRNAOffset.apply(this, []).x, ((p.y - this.getOffsetPanel$().y) / p$1.getScaleFactor.apply(this, [])) + p$1.getRNAOffset.apply(this, []).y],$I$(4,1).c$$D$D);
});

Clazz.newMeth(C$, 'transformCoord$java_awt_geom_Point2D_Double$D$D$D$D$D', function (coordDebut, offX, offY, rnaBBoxX, rnaBBoxY, scaleFactor) {
return Clazz.new_([offX + (scaleFactor * (coordDebut.x - rnaBBoxX)), offY + (scaleFactor * (coordDebut.y - rnaBBoxY))],$I$(4,1).c$$D$D);
});

Clazz.newMeth(C$, 'eraseSequence$', function () {
this._RNA.eraseSequence$();
});

Clazz.newMeth(C$, 'transformCoord$java_awt_geom_Point2D_Double', function (coordDebut) {
var rnabbox=this.getExtendedRNABBox$();
return Clazz.new_([this._offX + (p$1.getScaleFactor.apply(this, []) * (coordDebut.x - rnabbox.x)), this._offY + (p$1.getScaleFactor.apply(this, []) * (coordDebut.y - rnabbox.y))],$I$(4,1).c$$D$D);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
this.paintComponent$java_awt_Graphics$Z(g, false);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics$Z', function (g, transparentBackground) {
if (this._premierAffichage) {
this._translation.x=0;
this._translation.y=((-p$1.getTitleHeight.apply(this, []) / 2.0)|0);
this._premierAffichage=false;
}var g2=g;
var dflt=g2.getStroke$();
var g2D=Clazz.new_($I$(28,1).c$$java_awt_Graphics2D,[g2]);
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(29).KEY_ANTIALIASING, $I$(29).VALUE_ANTIALIAS_ON);
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g2]);
this.renderComponent$fr_orsay_lri_varna_models_export_VueVARNAGraphics$Z$D(g2D, transparentBackground, p$1.getScaleFactor.apply(this, []));
if (this.isFocusOwner$()) {
g2.setStroke$java_awt_Stroke(Clazz.new_($I$(30,1).c$$F,[1.5]));
g2.setColor$java_awt_Color($I$(18).decode$S("#C0C0C0"));
g2.drawRect$I$I$I$I(0, 0, this.getWidth$() - 1, this.getHeight$() - 1);
}g2.setStroke$java_awt_Stroke(dflt);
});

Clazz.newMeth(C$, 'renderComponent$fr_orsay_lri_varna_models_export_VueVARNAGraphics$Z$D', function (g2D, transparentBackground, scaleFactor) {
p$1.updateTitleHeight.apply(this, []);
if (true || !transparentBackground ) {
g2D.setColor$java_awt_Color(this._conf._backgroundColor);
g2D.fillRect$D$D$D$D(0, 0, this.getWidth$(), this.getHeight$());
} else {
g2D.setColor$java_awt_Color(Clazz.new_($I$(18,1).c$$I$I$I$I,[0, 0, 0, 120]));
}if (this._debug || this._drawBorder ) {
g2D.setColor$java_awt_Color($I$(18).BLACK);
g2D.setPlainStroke$();
g2D.drawRect$D$D$D$D(this.getLeftOffset$(), this.getTopOffset$(), this.getInnerWidth$(), this.getInnerHeight$());
}if (this.getMinimumSize$().height < this.getSize$().height && this.getMinimumSize$().width < this.getSize$().width ) {
if (!this.getTitle$().equals$O("")) {
g2D.setColor$java_awt_Color(this._conf._titleColor);
g2D.setFont$java_awt_Font(this._conf._titleFont);
g2D.drawStringCentered$S$D$D(this.getTitle$(), (this.getWidth$()/2|0), this.getHeight$() - p$1.getTitleHeight.apply(this, []) / 2.0);
}this.renderRNA$fr_orsay_lri_varna_models_export_VueVARNAGraphics$java_awt_geom_Rectangle2D_Double$Z$Z(g2D, p$1.getClip.apply(this, []), true, this._conf._autoCenter);
}if (this._selectionRectangle != null ) {
g2D.setColor$java_awt_Color($I$(18).BLACK);
g2D.setSelectionStroke$();
g2D.drawRect$D$D$D$D(this._selectionRectangle.x, this._selectionRectangle.y, this._selectionRectangle.width, this._selectionRectangle.height);
}if ((this._linkOrigin != null ) && (this._linkDestination != null ) ) {
g2D.setColor$java_awt_Color(this._conf._bondColor);
g2D.setPlainStroke$();
g2D.setStrokeThickness$D(3.0 * scaleFactor);
var linkOrigin=(this._linkOrigin);
var linkDestination=(this._linkDestination);
g2D.drawLine$D$D$D$D(linkOrigin.x, linkOrigin.y, linkDestination.x, linkDestination.y);
for (var i, $i = this.getSelection$().getIndices$().iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
p$1.drawBase$fr_orsay_lri_varna_models_export_VueVARNAGraphics$I$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$D$D$Z.apply(this, [g2D, i, this._realCoords, this._realCenters, scaleFactor * this._RNA.BASE_RADIUS, scaleFactor, true]);
}
}if (this._debug) {
g2D.setStrokeThickness$D(3.0 * scaleFactor);
g2D.setColor$java_awt_Color($I$(18).black);
var t=this.logicToPanel$java_awt_geom_Point2D_Double(this._target);
g2D.drawLine$D$D$D$D(t.x - 3, t.y - 3, t.x + 3, t.y + 3);
g2D.drawLine$D$D$D$D(t.x - 3, t.y + 3, t.x + 3, t.y - 3);
g2D.setColor$java_awt_Color($I$(18).red);
t=this.logicToPanel$java_awt_geom_Point2D_Double(this._target2);
g2D.drawLine$D$D$D$D(t.x - 3, t.y - 3, t.x + 3, t.y + 3);
g2D.drawLine$D$D$D$D(t.x - 3, t.y + 3, t.x + 3, t.y - 3);
}});

Clazz.newMeth(C$, 'drawRegionHighlightsAnnotation$fr_orsay_lri_varna_models_export_VueVARNAGraphics$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$D', function (g2D, realCoords, realCenters, scaleFactor) {
g2D.setStrokeThickness$D(2.0 * scaleFactor);
g2D.setPlainStroke$();
for (var r, $r = this._RNA.getHighlightRegion$().iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
var s=r.getShape$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$D(realCoords, realCenters, scaleFactor);
g2D.setColor$java_awt_Color(r.getFillColor$());
g2D.fill$java_awt_geom_GeneralPath(s);
g2D.setColor$java_awt_Color(r.getOutlineColor$());
g2D.draw$java_awt_geom_GeneralPath(s);
}
});

Clazz.newMeth(C$, 'getClip', function () {
return Clazz.new_([this.getLeftOffset$(), this.getTopOffset$(), this.getInnerWidth$(), this.getInnerHeight$()],$I$(25,1).c$$D$D$D$D);
}, p$1);

Clazz.newMeth(C$, 'getViewClip$', function () {
return Clazz.new_([this.getLeftOffset$(), this.getTopOffset$(), this.getInnerWidth$(), this.getInnerHeight$()],$I$(25,1).c$$D$D$D$D);
});

Clazz.newMeth(C$, 'getBackboneColor$', function () {
return this._conf._backboneColor;
});

Clazz.newMeth(C$, 'setBackboneColor$java_awt_Color', function (backbone_color) {
this._conf._backboneColor=backbone_color;
});

Clazz.newMeth(C$, 'getBondColor$', function () {
return this._conf._bondColor;
});

Clazz.newMeth(C$, 'getTitle$', function () {
return this._RNA.getName$();
});

Clazz.newMeth(C$, 'setDefaultBPColor$java_awt_Color', function (bond_color) {
this._conf._bondColor=bond_color;
});

Clazz.newMeth(C$, 'setBorderSize$java_awt_Dimension', function (b) {
this._border=b;
});

Clazz.newMeth(C$, 'getBorderSize$', function () {
return this._border;
});

Clazz.newMeth(C$, 'showRNA$fr_orsay_lri_varna_models_rna_RNA', function (r) {
this.fireUINewStructure$fr_orsay_lri_varna_models_rna_RNA(r);
this._RNA=r;
});

Clazz.newMeth(C$, 'drawRNA$S$S', function (seq, str) {
this.drawRNA$S$S$I(seq, str, this._RNA.get_drawMode$());
});

Clazz.newMeth(C$, 'drawRNA$fr_orsay_lri_varna_models_rna_RNA$I', function (r, drawMode) {
r.setDrawMode$I(drawMode);
this.drawRNA$fr_orsay_lri_varna_models_rna_RNA(r);
});

Clazz.newMeth(C$, 'drawRNA$', function () {
try {
this._RNA.drawRNA$I$fr_orsay_lri_varna_models_VARNAConfig(this._RNA.get_drawMode$(), this._conf);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNAViewAlgorithm")){
this.errorDialog$Exception(e);
e.printStackTrace$();
} else {
throw e;
}
}
this.repaint$();
});

Clazz.newMeth(C$, 'drawRNA$fr_orsay_lri_varna_models_rna_RNA', function (r) {
if (r != null ) {
this._RNA=r;
this.drawRNA$();
}});

Clazz.newMeth(C$, 'drawRNA$S$S$I', function (seq, str, drawMode) {
this._RNA.setDrawMode$I(drawMode);
try {
this._RNA.setRNA$S$S(seq, str);
this.drawRNA$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e1 = e$$;
{
this.errorDialog$Exception(e1);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'drawRNA$java_io_Reader$I', function (r, drawMode) {
this._RNA.setDrawMode$I(drawMode);
var rnas=$I$(31).loadSecStr$java_io_Reader(r);
if (rnas.isEmpty$()) {
throw Clazz.new_($I$(32,1).c$$S,["No RNA could be parsed from that source."]);
}this._RNA=rnas.iterator$().next$();
this.drawRNA$();
});

Clazz.newMeth(C$, 'drawRNAInterpolated$S$S', function (seq, str) {
this.drawRNAInterpolated$S$S$I(seq, str, this._RNA.get_drawMode$());
});

Clazz.newMeth(C$, 'drawRNAInterpolated$S$S$I', function (seq, str, drawMode) {
this.drawRNAInterpolated$S$S$I$fr_orsay_lri_varna_models_rna_Mapping(seq, str, drawMode, $I$(33,"DefaultOutermostMapping$I$I",[this._RNA.get_listeBases$().size$(), str.length$()]));
});

Clazz.newMeth(C$, 'drawRNAInterpolated$S$S$fr_orsay_lri_varna_models_rna_Mapping', function (seq, str, m) {
this.drawRNAInterpolated$S$S$I$fr_orsay_lri_varna_models_rna_Mapping(seq, str, this._RNA.get_drawMode$(), m);
});

Clazz.newMeth(C$, 'drawRNAInterpolated$S$S$I$fr_orsay_lri_varna_models_rna_Mapping', function (seq, str, drawMode, m) {
var target=Clazz.new_($I$(1,1));
try {
target.setRNA$S$S(seq, str);
this.drawRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$I$fr_orsay_lri_varna_models_rna_Mapping(target, drawMode, m);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'drawRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA', function (target) {
this.drawRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$I$fr_orsay_lri_varna_models_rna_Mapping(target, target.get_drawMode$(), $I$(33,"DefaultOutermostMapping$I$I",[this._RNA.get_listeBases$().size$(), target.getSize$()]));
});

Clazz.newMeth(C$, 'drawRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_Mapping', function (target, m) {
this.drawRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$I$fr_orsay_lri_varna_models_rna_Mapping(target, target.get_drawMode$(), m);
});

Clazz.newMeth(C$, 'drawRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$I$fr_orsay_lri_varna_models_rna_Mapping', function (target, drawMode, m) {
try {
target.drawRNA$I$fr_orsay_lri_varna_models_VARNAConfig(drawMode, this._conf);
this._conf._drawColorMap=false;
this._interpolator.addTarget$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_Mapping(target, m);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNAViewAlgorithm")){
this.errorDialog$Exception(e);
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getDrawMode$', function () {
return this._RNA.getDrawMode$();
});

Clazz.newMeth(C$, 'showRNA$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig', function (t, cfg) {
this.showRNA$fr_orsay_lri_varna_models_rna_RNA(t);
if (cfg != null ) {
this.setConfig$fr_orsay_lri_varna_models_VARNAConfig(cfg);
}this.repaint$();
});

Clazz.newMeth(C$, 'isInterpolationInProgress$', function () {
if (this._interpolator == null ) {
return false;
} else {
return this._interpolator.isInterpolationInProgress$();
}});

Clazz.newMeth(C$, 'showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA', function (target) {
this.showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_Mapping(target, $I$(33,"DefaultOutermostMapping$I$I",[this._RNA.get_listeBases$().size$(), target.getSize$()]));
});

Clazz.newMeth(C$, 'showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_Mapping', function (target, m) {
this.showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping(target, null, m);
});

Clazz.newMeth(C$, 'showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping', function (target, cfg, m) {
this._interpolator.addTarget$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping(target, cfg, m);
});

Clazz.newMeth(C$, 'drawRNA$S$S$S$S$I', function (firstSeq, firstStruct, secondSeq, secondStruct, drawMode) {
this._RNA.setDrawMode$I(drawMode);
if (firstSeq.length$() == secondSeq.length$() && firstStruct.length$() == secondStruct.length$() ) {
if (firstSeq.length$() != firstStruct.length$()) {
if (this._conf._showWarnings) {
this.emitWarning$S("First sequence length " + firstSeq.length$() + " differs from that of it's secondary structure " + firstStruct.length$() + ". \nAdapting first sequence length ..." );
}if (firstSeq.length$() < firstStruct.length$()) {
while (firstSeq.length$() < firstStruct.length$()){
firstSeq += " ";
}
} else {
firstSeq=firstSeq.substring$I$I(0, firstStruct.length$());
}}if (secondSeq.length$() != secondStruct.length$()) {
if (this._conf._showWarnings) {
this.emitWarning$S("Second sequence length " + secondSeq.length$() + " differs from that of it's secondary structure " + secondStruct.length$() + ". \nAdapting second sequence length ..." );
}if (secondSeq.length$() < secondStruct.length$()) {
while (secondSeq.length$() < secondStruct.length$()){
secondSeq += " ";
}
} else {
secondSeq=secondSeq.substring$I$I(0, secondStruct.length$());
}}var RNALength=firstSeq.length$();
var string_superStruct= String.instantialize("");
var string_superSeq= String.instantialize("");
var array_rnaOwn=Clazz.new_($I$(3,1));
firstStruct=firstStruct.replace$C$C("-", ".");
secondStruct=secondStruct.replace$C$C("-", ".");
for (var i=0; i < RNALength; i++) {
if (firstStruct.charAt$I(i) == secondStruct.charAt$I(i)) {
string_superStruct=string_superStruct + firstStruct.charAt$I(i);
array_rnaOwn.add$O(new Integer(0));
} else if (firstStruct.charAt$I(i) == "(" || secondStruct.charAt$I(i) == "(" ) {
string_superStruct=string_superStruct + '(';
array_rnaOwn.add$O(new Integer((firstStruct.charAt$I(i) == "(") ? 1 : 2));
} else if (firstStruct.charAt$I(i) == ")" || secondStruct.charAt$I(i) == ")" ) {
string_superStruct=string_superStruct + ')';
array_rnaOwn.add$O(new Integer((firstStruct.charAt$I(i) == ")") ? 1 : 2));
} else {
string_superStruct=string_superStruct + '.';
array_rnaOwn.add$O(new Integer(-1));
}}
for (var i=0; i < RNALength; i++) {
string_superSeq=string_superSeq + firstSeq.charAt$I(i) + secondSeq.charAt$I(i) ;
}
if (!string_superSeq.equals$O("") && !string_superStruct.equals$O("") ) {
try {
this._RNA.setRNA$S$S$java_util_ArrayList(string_superSeq, string_superStruct, array_rnaOwn);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e = e$$;
{
this.errorDialog$Exception(e);
}
} else {
throw e$$;
}
}
} else {
this.emitWarning$S("ERROR : The super-structure is NULL.");
}switch (this._RNA.get_drawMode$()) {
case 2:
this._RNA.drawRNARadiate$fr_orsay_lri_varna_models_VARNAConfig(this._conf);
break;
case 1:
this._RNA.drawRNACircle$fr_orsay_lri_varna_models_VARNAConfig(this._conf);
break;
case 4:
this._RNA.drawRNALine$fr_orsay_lri_varna_models_VARNAConfig(this._conf);
break;
case 3:
try {
this._RNA.drawRNANAView$fr_orsay_lri_varna_models_VARNAConfig(this._conf);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNAViewAlgorithm")){
this.errorDialog$Exception(e);
} else {
throw e;
}
}
break;
default:
break;
}
}});

Clazz.newMeth(C$, 'getRealCoords$', function () {
return this._realCoords;
});

Clazz.newMeth(C$, 'setRealCoords$java_awt_geom_Point2D_DoubleA', function (coords) {
this._realCoords=coords;
});

Clazz.newMeth(C$, 'getPopup$', function () {
return this._popup;
});

Clazz.newMeth(C$, 'setBondColor$java_awt_Color', function (bond_color) {
this._conf._bondColor=bond_color;
});

Clazz.newMeth(C$, 'getTitleColor$', function () {
return this._conf._titleColor;
});

Clazz.newMeth(C$, 'setTitleColor$java_awt_Color', function (title_color) {
this._conf._titleColor=title_color;
});

Clazz.newMeth(C$, 'getTitleHeight', function () {
return this._titleHeight;
}, p$1);

Clazz.newMeth(C$, 'setTitleHeight$I', function (title_height) {
this._titleHeight=title_height;
}, p$1);

Clazz.newMeth(C$, 'isAutoCentered$', function () {
return this._conf._autoCenter;
});

Clazz.newMeth(C$, 'setAutoCenter$Z', function (center) {
this._conf._autoCenter=center;
});

Clazz.newMeth(C$, 'getTitleFont$', function () {
return this._conf._titleFont;
});

Clazz.newMeth(C$, 'setTitleFont$java_awt_Font', function (font) {
this._conf._titleFont=font;
p$1.updateTitleHeight.apply(this, []);
});

Clazz.newMeth(C$, 'getBPHeightIncrement$', function () {
return this._RNA._bpHeightIncrement;
});

Clazz.newMeth(C$, 'setBPHeightIncrement$D', function (inc) {
this._RNA._bpHeightIncrement=inc;
});

Clazz.newMeth(C$, 'getOffsetPanel$', function () {
return this._offsetPanel;
});

Clazz.newMeth(C$, 'getRNAOffset', function () {
return this._offsetRNA;
}, p$1);

Clazz.newMeth(C$, 'getPopupMenu$', function () {
return this._popup;
});

Clazz.newMeth(C$, 'getZoomIncrement$', function () {
return this._conf._zoomAmount;
});

Clazz.newMeth(C$, 'setZoomIncrement$O', function (amount) {
this.setZoomIncrement$O(Float.valueOf$S(amount.toString()));
});

Clazz.newMeth(C$, 'setZoomIncrement$D', function (amount) {
this._conf._zoomAmount=amount;
});

Clazz.newMeth(C$, 'getZoom$', function () {
return this._conf._zoom;
});

Clazz.newMeth(C$, 'setZoom$O', function (_zoom) {
var d=(Float.valueOf$S(_zoom.toString())).valueOf();
if (this._conf._zoom != d ) {
this._conf._zoom=d;
this.fireZoomLevelChanged$D(d);
}});

Clazz.newMeth(C$, 'getTranslation$', function () {
return this._translation;
});

Clazz.newMeth(C$, 'setTranslation$java_awt_Point', function (trans) {
this._translation=trans;
this.checkTranslation$();
this.fireTranslationChanged$();
});

Clazz.newMeth(C$, 'getRNA$', function () {
return this._RNA;
});

Clazz.newMeth(C$, 'isOutOfFrame$', function () {
return this._horsCadre;
});

Clazz.newMeth(C$, 'errorDialog$Exception', function (error) {
this.errorDialog$Exception$java_awt_Component(error, this);
});

Clazz.newMeth(C$, 'errorDialog$Exception$java_awt_Component', function (error, c) {
if (this.isErrorsOn$()) {
$I$(34,"showMessageDialog$java_awt_Component$O$S$I",[c, error.getMessage$(), "VARNA Error", 0]);
}});

Clazz.newMeth(C$, 'errorDialogStatic$Exception$java_awt_Component', function (error, c) {
if (c != null ) {
$I$(34,"showMessageDialog$java_awt_Component$O$S$I",[c, error.getMessage$(), "VARNA Critical Error", 0]);
} else {
System.err.println$S("Error: " + error.getMessage$());
}}, 1);

Clazz.newMeth(C$, 'emitWarning$S', function (warning) {
if (this._conf._showWarnings) {
$I$(34).showMessageDialog$java_awt_Component$O$S$I(this, warning, "VARNA Warning", 2);
}});

Clazz.newMeth(C$, 'emitWarningStatic$Exception$java_awt_Component', function (e, c) {
C$.emitWarningStatic$S$java_awt_Component(e.getMessage$(), c);
}, 1);

Clazz.newMeth(C$, 'emitWarningStatic$S$java_awt_Component', function (warning, c) {
if (c != null ) {
$I$(34).showMessageDialog$java_awt_Component$O$S$I(c, warning, "VARNA Warning", 2);
} else {
System.err.println$S("Error: " + warning);
}}, 1);

Clazz.newMeth(C$, 'setModifiable$Z', function (modifiable) {
this._conf._modifiable=modifiable;
});

Clazz.newMeth(C$, 'isModifiable$', function () {
return this._conf._modifiable;
});

Clazz.newMeth(C$, 'reset$', function () {
this.setBorderSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[0, 0]));
this.setTranslation$java_awt_Point(Clazz.new_([0, ((-p$1.getTitleHeight.apply(this, []) / 2.0)|0)],$I$(11,1).c$$I$I));
this.setZoom$O(new Double(1.0));
this.setZoomIncrement$D(1.2);
});

Clazz.newMeth(C$, 'getNonStandardBasesColor$', function () {
return this._conf._specialBasesColor;
});

Clazz.newMeth(C$, 'setNonStandardBasesColor$java_awt_Color', function (basesColor) {
this._conf._specialBasesColor=basesColor;
});

Clazz.newMeth(C$, 'checkTranslation$', function () {
if (this.getZoom$() <= 1 ) {
if (this.getTranslation$().x < -(((this.getWidth$() - this.getInnerWidth$()) / 2.0)|0)) {
this.setTranslation$java_awt_Point(Clazz.new_([-(((this.getWidth$() - this.getInnerWidth$()) / 2.0)|0), this.getTranslation$().y],$I$(11,1).c$$I$I));
}if (this.getTranslation$().x > (((this.getWidth$() - this.getInnerWidth$()) / 2.0)|0)) {
this.setTranslation$java_awt_Point(Clazz.new_([(((this.getWidth$() - this.getInnerWidth$()) / 2.0)|0), this.getTranslation$().y],$I$(11,1).c$$I$I));
}if (this.getTranslation$().y > (((this.getHeight$() - p$1.getTitleHeight.apply(this, []) * 2 - this.getInnerHeight$()) / 2.0)|0)) {
this.setTranslation$java_awt_Point(Clazz.new_([this.getTranslation$().x, (((this.getHeight$() - p$1.getTitleHeight.apply(this, []) * 2 - this.getInnerHeight$()) / 2.0)|0)],$I$(11,1).c$$I$I));
}if (this.getTranslation$().y < -(((this.getHeight$() - this.getInnerHeight$()) / 2.0)|0)) {
this.setTranslation$java_awt_Point(Clazz.new_([this.getTranslation$().x, -(((this.getHeight$() - this.getInnerHeight$()) / 2.0)|0)],$I$(11,1).c$$I$I));
}} else {
var r2=this.getZoomedInTranslationBox$();
var LBoundX=r2.x;
var UBoundX=r2.x + r2.width;
var LBoundY=r2.y;
var UBoundY=r2.y + r2.height;
if (this.getTranslation$().x < LBoundX) {
this.setTranslation$java_awt_Point(Clazz.new_([LBoundX, this.getTranslation$().y],$I$(11,1).c$$I$I));
} else if (this.getTranslation$().x > UBoundX) {
this.setTranslation$java_awt_Point(Clazz.new_([UBoundX, this.getTranslation$().y],$I$(11,1).c$$I$I));
}if (this.getTranslation$().y < LBoundY) {
this.setTranslation$java_awt_Point(Clazz.new_([this.getTranslation$().x, LBoundY],$I$(11,1).c$$I$I));
} else if (this.getTranslation$().y > UBoundY) {
this.setTranslation$java_awt_Point(Clazz.new_([this.getTranslation$().x, UBoundY],$I$(11,1).c$$I$I));
}}});

Clazz.newMeth(C$, 'getZoomedInTranslationBox$', function () {
var LBoundX=-(((this.getInnerWidth$()) / 2.0)|0);
var UBoundX=(((this.getInnerWidth$()) / 2.0)|0);
var LBoundY=-(((this.getInnerHeight$()) / 2.0)|0);
var UBoundY=(((this.getInnerHeight$()) / 2.0)|0);
return Clazz.new_($I$(35,1).c$$I$I$I$I,[LBoundX, LBoundY, UBoundX - LBoundX, UBoundY - LBoundY]);
});

Clazz.newMeth(C$, 'getLeftOffset$', function () {
return this._border.width + (((this.getWidth$() - 2 * this._border.width) - this.getInnerWidth$())/2|0) + this._translation.x;
});

Clazz.newMeth(C$, 'getInnerWidth$', function () {
return (Math.round((this.getWidth$() - 2 * this._border.width) * this._conf._zoom)|0);
});

Clazz.newMeth(C$, 'getTopOffset$', function () {
return this._border.height + (((this.getHeight$() - 2 * this._border.height) - this.getInnerHeight$())/2|0) + this._translation.y;
});

Clazz.newMeth(C$, 'getInnerHeight$', function () {
return (Math.round((this.getHeight$()) * this._conf._zoom - 2 * this._border.height - p$1.getTitleHeight.apply(this, []))|0);
});

Clazz.newMeth(C$, 'isComparisonMode$', function () {
return this._conf._comparisonMode;
});

Clazz.newMeth(C$, 'globalRotation$Double', function (angleDegres) {
this._RNA.globalRotation$Double(angleDegres);
this.fireLayoutChanged$();
this.repaint$();
});

Clazz.newMeth(C$, 'getNearestBase$', function () {
return this._nearestBase;
});

Clazz.newMeth(C$, 'setNearestBase$Integer', function (base) {
this._nearestBase=base;
});

Clazz.newMeth(C$, 'getGapsBasesColor$', function () {
return this._conf._dashBasesColor;
});

Clazz.newMeth(C$, 'setGapsBasesColor$java_awt_Color', function (c) {
this._conf._dashBasesColor=c;
});

Clazz.newMeth(C$, 'imprimer', function () {
var attributes;
attributes=Clazz.new_($I$(36,1));
try {
var job=$I$(37).getPrinterJob$();
if (job.printDialog$javax_print_attribute_PrintRequestAttributeSet(attributes)) {
job.print$javax_print_attribute_PrintRequestAttributeSet(attributes);
}} catch (exception) {
if (Clazz.exceptionOf(exception,"java.awt.print.PrinterException")){
this.errorDialog$Exception(exception);
} else {
throw exception;
}
}
}, p$1);

Clazz.newMeth(C$, 'isErrorsOn$', function () {
return this._conf._errorsOn;
});

Clazz.newMeth(C$, 'setErrorsOn$Z', function (on) {
this._conf._errorsOn=on;
});

Clazz.newMeth(C$, 'getVARNAUI$', function () {
return this._UI;
});

Clazz.newMeth(C$, 'setUseBaseColorsForBPs$Z', function (on) {
this._conf._useBaseColorsForBPs=on;
});

Clazz.newMeth(C$, 'getUseBaseColorsForBPs$', function () {
return this._conf._useBaseColorsForBPs;
});

Clazz.newMeth(C$, 'setColorNonStandardBases$Z', function (on) {
this._conf._colorSpecialBases=on;
});

Clazz.newMeth(C$, 'getColorSpecialBases$', function () {
return this._conf._colorSpecialBases;
});

Clazz.newMeth(C$, 'setColorGapsBases$Z', function (on) {
this._conf._colorDashBases=on;
});

Clazz.newMeth(C$, 'getColorGapsBases$', function () {
return this._conf._colorDashBases;
});

Clazz.newMeth(C$, 'setShowWarnings$Z', function (on) {
this._conf._showWarnings=on;
});

Clazz.newMeth(C$, 'getShowWarnings$', function () {
return this._conf._showWarnings;
});

Clazz.newMeth(C$, 'setShowNonCanonicalBP$Z', function (on) {
this._conf._drawnNonCanonicalBP=on;
});

Clazz.newMeth(C$, 'getShowNonCanonicalBP$', function () {
return this._conf._drawnNonCanonicalBP;
});

Clazz.newMeth(C$, 'setShowNonPlanarBP$Z', function (on) {
this._conf._drawnNonPlanarBP=on;
});

Clazz.newMeth(C$, 'getShowNonPlanarBP$', function () {
return this._conf._drawnNonPlanarBP;
});

Clazz.newMeth(C$, 'setBPStyle$fr_orsay_lri_varna_models_VARNAConfig_BP_STYLE', function (st) {
this._conf._mainBPStyle=st;
});

Clazz.newMeth(C$, 'getBPStyle$', function () {
return this._conf._mainBPStyle;
});

Clazz.newMeth(C$, 'getConfig$', function () {
return this._conf;
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color', function (c) {
if (this._conf != null ) {
if (c != null ) {
this._conf._backgroundColor=c;
this._conf._drawBackground=(!c.equals$O($I$(2).DEFAULT_BACKGROUND_COLOR));
} else {
this._conf._backgroundColor=$I$(2).DEFAULT_BACKGROUND_COLOR;
this._conf._drawBackground=false;
}}});

Clazz.newMeth(C$, 'highlightSelectedBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (m) {
var v=Clazz.new_($I$(3,1));
var sel=m.getIndex$();
if (sel != -1) {
v.add$O(new Integer(sel));
}this.setSelection$java_util_ArrayList(v);
});

Clazz.newMeth(C$, 'highlightSelectedStem$fr_orsay_lri_varna_models_rna_ModeleBase', function (m) {
var v=Clazz.new_($I$(3,1));
var sel=m.getIndex$();
if (sel != -1) {
var r=this._RNA.findStem$I(sel);
v.addAll$java_util_Collection(r);
}this.setSelection$java_util_ArrayList(v);
});

Clazz.newMeth(C$, 'getSelection$', function () {
return this._selectedBases;
});

Clazz.newMeth(C$, 'getSelectionIndices$', function () {
return this._selectedBases.getIndices$();
});

Clazz.newMeth(C$, 'setSelection$java_util_ArrayList', function (indices) {
this.setSelection$java_util_Collection(this._RNA.getBasesAt$java_util_Collection(indices));
});

Clazz.newMeth(C$, 'setSelection$java_util_Collection', function (mbs) {
var bck=Clazz.new_($I$(5,1).c$$fr_orsay_lri_varna_models_BaseList,[this._selectedBases]);
this._selectedBases.clear$();
this._selectedBases.addBases$java_util_Collection(mbs);
this._blink.setActive$Z(true);
this.fireSelectionChanged$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList(bck, this._selectedBases);
});

Clazz.newMeth(C$, 'getBasesInRectangleDiff$java_awt_Rectangle$java_awt_Rectangle', function (recIn, recOut) {
var result=Clazz.new_($I$(3,1));
for (var i=0; i < this._realCoords.length; i++) {
if (!!(recIn.contains$java_awt_geom_Point2D(this._realCoords[i]) ^ recOut.contains$java_awt_geom_Point2D(this._realCoords[i]))) {
result.add$O(new Integer(i));
}}
return result;
});

Clazz.newMeth(C$, 'getBasesInRectangle$java_awt_Rectangle', function (rec) {
var result=Clazz.new_($I$(3,1));
for (var i=0; i < this._realCoords.length; i++) {
if (rec.contains$java_awt_geom_Point2D(this._realCoords[i])) {
result.add$O(new Integer(i));
}}
return result;
});

Clazz.newMeth(C$, 'setSelectionRectangle$java_awt_Rectangle', function (rec) {
var result=Clazz.new_($I$(3,1));
if (this._selectionRectangle != null ) {
result=this.getBasesInRectangleDiff$java_awt_Rectangle$java_awt_Rectangle(this._selectionRectangle, rec);
} else {
result=this.getBasesInRectangle$java_awt_Rectangle(rec);
}this._selectionRectangle=Clazz.new_($I$(35,1).c$$java_awt_Rectangle,[rec]);
this.toggleSelection$java_util_Collection(result);
this.repaint$();
});

Clazz.newMeth(C$, 'removeSelectionRectangle$', function () {
this._selectionRectangle=null;
});

Clazz.newMeth(C$, 'addToSelection$java_util_Collection', function (indices) {
for (var i, $i = indices.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
this.addToSelection$I(i);
}
});

Clazz.newMeth(C$, 'addToSelection$I', function (i) {
var bck=Clazz.new_($I$(5,1).c$$fr_orsay_lri_varna_models_BaseList,[this._selectedBases]);
var mb=this._RNA.getBaseAt$I(i);
this._selectedBases.addBase$fr_orsay_lri_varna_models_rna_ModeleBase(mb);
this._blink.setActive$Z(true);
this.fireSelectionChanged$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList(bck, this._selectedBases);
});

Clazz.newMeth(C$, 'removeFromSelection$I', function (i) {
var bck=Clazz.new_($I$(5,1).c$$fr_orsay_lri_varna_models_BaseList,[this._selectedBases]);
var mb=this._RNA.getBaseAt$I(i);
this._selectedBases.removeBase$fr_orsay_lri_varna_models_rna_ModeleBase(mb);
if (this._selectedBases.size$() == 0) {
this._blink.setActive$Z(false);
} else {
this._blink.setActive$Z(true);
}this.fireSelectionChanged$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList(bck, this._selectedBases);
});

Clazz.newMeth(C$, 'isInSelection$I', function (i) {
return this._selectedBases.contains$fr_orsay_lri_varna_models_rna_ModeleBase(this._RNA.getBaseAt$I(i));
});

Clazz.newMeth(C$, 'toggleSelection$I', function (i) {
if (this.isInSelection$I(i)) {
this.removeFromSelection$I(i);
} else {
this.addToSelection$I(i);
}});

Clazz.newMeth(C$, 'toggleSelection$java_util_Collection', function (indices) {
for (var i, $i = indices.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
this.toggleSelection$I(i);
}
});

Clazz.newMeth(C$, 'clearSelection$', function () {
var bck=Clazz.new_($I$(5,1).c$$fr_orsay_lri_varna_models_BaseList,[this._selectedBases]);
this._selectedBases.clear$();
this._blink.setActive$Z(false);
this.repaint$();
this.fireSelectionChanged$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList(bck, this._selectedBases);
});

Clazz.newMeth(C$, 'saveSelection$', function () {
this._backupSelection.clear$();
this._backupSelection.addAll$java_util_Collection(this._selectedBases.getBases$());
});

Clazz.newMeth(C$, 'restoreSelection$', function () {
this.setSelection$java_util_Collection(this._backupSelection);
});

Clazz.newMeth(C$, 'resetAnnotationHighlight$', function () {
this._highlightAnnotation=false;
this.repaint$();
});

Clazz.newMeth(C$, 'drawBBox$Z', function (on) {
this._drawBBox=on;
});

Clazz.newMeth(C$, 'drawBorder$Z', function (on) {
this._drawBorder=on;
});

Clazz.newMeth(C$, 'setBaseInnerColor$java_awt_Color', function (c) {
this._RNA.setBaseInnerColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'setBaseNumbersColor$java_awt_Color', function (c) {
this._RNA.setBaseNumbersColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'setBaseNameColor$java_awt_Color', function (c) {
this._RNA.setBaseNameColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'setBaseOutlineColor$java_awt_Color', function (c) {
this._RNA.setBaseOutlineColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'getListeAnnotations$', function () {
return this._RNA.getAnnotations$();
});

Clazz.newMeth(C$, 'resetListeAnnotations$', function () {
this._RNA.clearAnnotations$();
this.repaint$();
});

Clazz.newMeth(C$, 'addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation', function (textAnnotation) {
this._RNA.addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(textAnnotation);
this.repaint$();
});

Clazz.newMeth(C$, 'removeAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation', function (textAnnotation) {
var done=this._RNA.removeAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(textAnnotation);
this.repaint$();
return done;
});

Clazz.newMeth(C$, 'get_selectedAnnotation$', function () {
return this._selectedAnnotation;
});

Clazz.newMeth(C$, 'set_selectedAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation', function (annotation) {
this._selectedAnnotation=annotation;
});

Clazz.newMeth(C$, 'removeSelectedAnnotation$', function () {
this._highlightAnnotation=false;
this._selectedAnnotation=null;
});

Clazz.newMeth(C$, 'highlightSelectedAnnotation$', function () {
this._highlightAnnotation=true;
});

Clazz.newMeth(C$, 'getFlatExteriorLoop$', function () {
return this._conf._flatExteriorLoop;
});

Clazz.newMeth(C$, 'setFlatExteriorLoop$Z', function (on) {
this._conf._flatExteriorLoop=on;
});

Clazz.newMeth(C$, 'setLastSelectedPosition$java_awt_geom_Point2D_Double', function (p) {
this._lastSelectedCoord.x=p.x;
this._lastSelectedCoord.y=p.y;
});

Clazz.newMeth(C$, 'getLastSelectedPosition$', function () {
return this._lastSelectedCoord;
});

Clazz.newMeth(C$, 'setSequence$S', function (s) {
this._RNA.setSequence$S(s);
this.repaint$();
});

Clazz.newMeth(C$, 'setColorMapVisible$Z', function (b) {
this._conf._drawColorMap=b;
this.repaint$();
});

Clazz.newMeth(C$, 'getColorMapVisible$', function () {
return this._conf._drawColorMap;
});

Clazz.newMeth(C$, 'removeColorMap$', function () {
this._conf._drawColorMap=false;
this.repaint$();
});

Clazz.newMeth(C$, 'saveSession$S', function (path) {
this.toXML$S(path);
});

Clazz.newMeth(C$, 'loadSession$S', function (path) {
return this.loadSession$java_io_File(Clazz.new_($I$(38,1).c$$S,[path]));
});

Clazz.newMeth(C$, 'loadSession$java_io_File', function (path) {
var bck=C$.importSession$O(path);
var map=$I$(33,"DefaultOutermostMapping$I$I",[this.getRNA$().getSize$(), bck.rna.getSize$()]);
this.showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_Mapping(bck.rna, map);
this._conf=bck.config;
this.repaint$();
return bck;
});

Clazz.newMeth(C$, 'importSession$O', function (path) {
try {
var fis=(Clazz.instanceOf(path, "java.io.File") ? Clazz.new_($I$(39,1).c$$java_io_File,[path]) : Clazz.new_([path.toString()],$I$(39,1).c$$S));
var h=C$.importSession$java_io_InputStream$S(fis, path.toString());
return h;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
throw (Clazz.new_(["File not found.", path.toString()],$I$(40,1).c$$S$S));
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw (Clazz.new_(["I/O error while loading session.", path.toString()],$I$(40,1).c$$S$S));
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'importSession$java_io_InputStream$S', function (fis, path) {
System.setProperty$S$S("javax.xml.parsers.SAXParserFactory", "com.sun.org.apache.xerces.internal.jaxp.SAXParserFactoryImpl");
var saxFact=$I$(41).newInstance$();
saxFact.setValidating$Z(false);
saxFact.setXIncludeAware$Z(false);
saxFact.setNamespaceAware$Z(false);
try {
var sp=saxFact.newSAXParser$();
var sessionData=Clazz.new_($I$(42,1));
sp.parse$java_io_InputStream$org_xml_sax_helpers_DefaultHandler(fis, sessionData);
var res=Clazz.new_([sessionData.getVARNAConfig$(), sessionData.getRNA$(), "test"],$I$(43,1).c$$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S);
return res;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.parsers.ParserConfigurationException")){
var e = e$$;
{
throw Clazz.new_($I$(40,1).c$$S$S,["Bad XML parser configuration", path]);
}
} else if (Clazz.exceptionOf(e$$,"org.xml.sax.SAXException")){
var e = e$$;
{
throw Clazz.new_($I$(40,1).c$$S$S,["XML parser Exception", path]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_($I$(40,1).c$$S$S,["I/O error", path]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'loadFile$java_io_File', function (path) {
this.loadFile$java_io_File$Z(path, false);
});

Clazz.newMeth(C$, 'getDrawBackbone$', function () {
return this._conf._drawBackbone;
});

Clazz.newMeth(C$, 'setDrawBackbone$Z', function (b) {
this._conf._drawBackbone=b;
});

Clazz.newMeth(C$, 'addHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation', function (n) {
this._RNA.addHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation(n);
});

Clazz.newMeth(C$, 'removeHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation', function (n) {
this._RNA.removeHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation(n);
});

Clazz.newMeth(C$, 'addHighlightRegion$I$I', function (i, j) {
this._RNA.addHighlightRegion$I$I(i, j);
});

Clazz.newMeth(C$, 'addHighlightRegion$I$I$java_awt_Color$java_awt_Color$D', function (i, j, fill, outline, radius) {
this._RNA.addHighlightRegion$I$I$java_awt_Color$java_awt_Color$D(i, j, fill, outline, radius);
});

Clazz.newMeth(C$, 'loadRNA$S', function (path) {
this.loadRNA$O$Z(path, false);
});

Clazz.newMeth(C$, 'loadRNA$O$Z', function (path, interpolate) {
try {
var rnas=(Clazz.instanceOf(path, "java.io.File") ? $I$(31,"loadSecStr$java_io_Reader",[Clazz.new_($I$(44,1).c$$java_io_File,[path])]) : $I$(31,"loadSecStr$S",[path.toString()]));
if (rnas.isEmpty$()) {
throw Clazz.new_($I$(32,1).c$$S,["No RNA could be parsed from that source."]);
}var rna=rnas.iterator$().next$();
try {
rna.drawRNA$fr_orsay_lri_varna_models_VARNAConfig(this._conf);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNAViewAlgorithm")){
e.printStackTrace$();
} else {
throw e;
}
}
if (!interpolate) {
this.showRNA$fr_orsay_lri_varna_models_rna_RNA(rna);
} else {
this.showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA(rna);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'loadFile$java_io_File$Z', function (path, interpolate) {
try {
this.loadSession$java_io_File(path);
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
this.loadRNA$O$Z(path, interpolate);
} else {
throw e1;
}
}
});

Clazz.newMeth(C$, 'setConfig$fr_orsay_lri_varna_models_VARNAConfig', function (cfg) {
this._conf=cfg;
});

Clazz.newMeth(C$, 'toggleDrawOutlineBases$', function () {
this._conf._drawOutlineBases=!this._conf._drawOutlineBases;
});

Clazz.newMeth(C$, 'toggleFillBases$', function () {
this._conf._fillBases=!this._conf._fillBases;
});

Clazz.newMeth(C$, 'setDrawOutlineBases$Z', function (drawn) {
this._conf._drawOutlineBases=drawn;
});

Clazz.newMeth(C$, 'setFillBases$Z', function (drawn) {
this._conf._fillBases=drawn;
});

Clazz.newMeth(C$, 'readValues$java_io_Reader', function (r) {
this._RNA.readValues$java_io_Reader$fr_orsay_lri_varna_models_rna_ModeleColorMap(r, this._conf._cm);
});

Clazz.newMeth(C$, 'addVARNAListener$fr_orsay_lri_varna_interfaces_InterfaceVARNAListener', function (v) {
this._VARNAListeners.add$O(v);
});

Clazz.newMeth(C$, 'fireLayoutChanged$', function () {
for (var v, $v = this._VARNAListeners.iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
v.onStructureRedrawn$();
}
});

Clazz.newMeth(C$, 'fireUINewStructure$fr_orsay_lri_varna_models_rna_RNA', function (r) {
for (var v, $v = this._VARNAListeners.iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
v.onUINewStructure$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA(this._conf, r);
}
});

Clazz.newMeth(C$, 'fireZoomLevelChanged$D', function (d) {
for (var v, $v = this._VARNAListeners.iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
v.onZoomLevelChanged$();
}
});

Clazz.newMeth(C$, 'fireTranslationChanged$', function () {
for (var v2, $v2 = this._VARNAListeners.iterator$(); $v2.hasNext$()&&((v2=($v2.next$())),1);) {
v2.onTranslationChanged$();
}
});

Clazz.newMeth(C$, 'addSelectionListener$fr_orsay_lri_varna_interfaces_InterfaceVARNASelectionListener', function (v) {
this._selectionListeners.add$O(v);
});

Clazz.newMeth(C$, 'fireSelectionChanged$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList', function (mold, mnew) {
var addedBases=mnew.removeAll$fr_orsay_lri_varna_models_BaseList(mold);
var removedBases=mold.removeAll$fr_orsay_lri_varna_models_BaseList(mnew);
for (var v2, $v2 = this._selectionListeners.iterator$(); $v2.hasNext$()&&((v2=($v2.next$())),1);) {
v2.onSelectionChanged$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList(mnew, addedBases, removedBases);
}
});

Clazz.newMeth(C$, 'fireHoverChanged$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (mold, mnew) {
for (var v2, $v2 = this._selectionListeners.iterator$(); $v2.hasNext$()&&((v2=($v2.next$())),1);) {
v2.onHoverChanged$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase(mold, mnew);
}
});

Clazz.newMeth(C$, 'addRNAListener$fr_orsay_lri_varna_interfaces_InterfaceVARNARNAListener', function (v) {
this._RNAListeners.add$O(v);
});

Clazz.newMeth(C$, 'addVARNABasesListener$fr_orsay_lri_varna_interfaces_InterfaceVARNABasesListener', function (l) {
this._basesListeners.add$O(l);
});

Clazz.newMeth(C$, 'fireSequenceChanged$I$S$S', function (index, oldseq, newseq) {
for (var v2, $v2 = this._RNAListeners.iterator$(); $v2.hasNext$()&&((v2=($v2.next$())),1);) {
v2.onSequenceModified$I$S$S(index, oldseq, newseq);
}
});

Clazz.newMeth(C$, 'fireStructureChanged$java_util_Set$java_util_Set$java_util_Set', function (current, addedBasePairs, removedBasePairs) {
for (var v2, $v2 = this._RNAListeners.iterator$(); $v2.hasNext$()&&((v2=($v2.next$())),1);) {
v2.onStructureModified$java_util_Set$java_util_Set$java_util_Set(current, addedBasePairs, removedBasePairs);
}
});

Clazz.newMeth(C$, 'fireLayoutChanged$java_util_Hashtable', function (movedPositions) {
for (var v2, $v2 = this._RNAListeners.iterator$(); $v2.hasNext$()&&((v2=($v2.next$())),1);) {
v2.onRNALayoutChanged$java_util_Hashtable(movedPositions);
}
});

Clazz.newMeth(C$, 'fireBaseClicked$fr_orsay_lri_varna_models_rna_ModeleBase$java_awt_event_MouseEvent', function (mb, me) {
if (mb != null ) {
for (var v2, $v2 = this._basesListeners.iterator$(); $v2.hasNext$()&&((v2=($v2.next$())),1);) {
v2.onBaseClicked$fr_orsay_lri_varna_models_rna_ModeleBase$java_awt_event_MouseEvent(mb, me);
}
}});

Clazz.newMeth(C$, 'getOrientation$', function () {
return this._RNA.getOrientation$();
});

Clazz.newMeth(C$, 'setHoverBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (m) {
if (m !== this._hoveredBase ) {
var bck=this._hoveredBase;
this._hoveredBase=m;
this.repaint$();
this.fireHoverChanged$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase(bck, m);
}});

Clazz.newMeth(C$, 'toXML$S', function (path) {
var fis;
try {
fis=Clazz.new_($I$(45,1).c$$S,[path]);
var pw=Clazz.new_($I$(46,1).c$$java_io_OutputStream,[fis]);
this.toXML$java_io_PrintWriter(pw);
pw.flush$();
fis.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'toXML$java_io_PrintWriter', function (out) {
try {
var streamResult=Clazz.new_($I$(47,1).c$$java_io_Writer,[out]);
var tf=$I$(48).newInstance$();
var hd=tf.newTransformerHandler$();
var serializer=hd.getTransformer$();
serializer.setOutputProperty$S$S("encoding", "ISO-8859-1");
serializer.setOutputProperty$S$S("doctype-system", "users.dtd");
serializer.setOutputProperty$S$S("indent", "yes");
hd.setResult$javax_xml_transform_Result(streamResult);
hd.startDocument$();
this.toXML$javax_xml_transform_sax_TransformerHandler(hd);
hd.endDocument$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.transform.TransformerConfigurationException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"org.xml.sax.SAXException")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(49,1));
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
this._RNA.toXML$javax_xml_transform_sax_TransformerHandler(hd);
this._conf.toXML$javax_xml_transform_sax_TransformerHandler(hd);
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

Clazz.newMeth(C$, 'getNearestAnnotation$I$I', function (x, y) {
var t=null;
if (this.getListeAnnotations$().size$() != 0) {
var dist=1.7976931348623157E308;
var d2;
var position;
for (var textAnnot, $textAnnot = this.getListeAnnotations$().iterator$(); $textAnnot.hasNext$()&&((textAnnot=($textAnnot.next$())),1);) {
position=textAnnot.getCenterPosition$();
position=this.transformCoord$java_awt_geom_Point2D_Double(position);
d2=Math.sqrt(Math.pow((position.x - x), 2) + Math.pow((position.y - y), 2));
if ((dist > d2 ) && (d2 < p$1.getScaleFactor.apply(this, []) * 40.0 ) ) {
t=textAnnot;
dist=d2;
}}
}return t;
});

Clazz.newMeth(C$, 'getNearestBase$I$I$Z$Z', function (x, y, always, onlyPaired) {
var i=this.getNearestBaseIndex$I$I$Z$Z(x, y, always, onlyPaired);
if (i == -1) {
return null;
}return this.getRNA$().get_listeBases$().get$I(i);
});

Clazz.newMeth(C$, 'getNearestBase$I$I', function (x, y) {
return this.getNearestBase$I$I$Z$Z(x, y, false, false);
});

Clazz.newMeth(C$, 'getNearestBaseIndex$I$I$Z$Z', function (x, y, always, onlyPaired) {
var d2;
var dist=1.7976931348623157E308;
var mb=-1;
for (var i=0; i < this.getRealCoords$().length; i++) {
if (!onlyPaired || (this.getRNA$().get_listeBases$().get$I(i).getElementStructure$() != -1) ) {
d2=Math.sqrt(Math.pow((this.getRealCoords$()[i].x - x), 2) + Math.pow((this.getRealCoords$()[i].y - y), 2));
if ((dist > d2 ) && ((d2 < p$1.getScaleFactor.apply(this, []) * 40.0 ) || always ) ) {
dist=d2;
mb=i;
}}}
return mb;
});

Clazz.newMeth(C$, 'globalRescale$D', function (factor) {
this._RNA.rescale$D(factor);
this.fireLayoutChanged$();
this.repaint$();
});

Clazz.newMeth(C$, 'setSpaceBetweenBases$D', function (sp) {
this._conf._spaceBetweenBases=sp;
});

Clazz.newMeth(C$, 'getSpaceBetweenBases$', function () {
return this._conf._spaceBetweenBases;
});

C$.$static$=function(){C$.$static$=0;
C$.DISTANCE_FACT=2.0;
C$.VARNA_SESSION_EXTENSION="varna";
C$.XML_ELEMENT_NAME="VARNASession";
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:16 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
