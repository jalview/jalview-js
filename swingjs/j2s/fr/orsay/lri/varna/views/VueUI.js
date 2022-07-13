(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'fr.orsay.lri.varna.applications.FileNameExtensionFilter','javax.swing.JOptionPane','javax.swing.JColorChooser','javax.swing.undo.UndoableEditSupport','java.util.Hashtable',['fr.orsay.lri.varna.models.VARNAEdits','.RedrawEdit'],'fr.orsay.lri.varna.views.VueRNAList','javax.swing.JFileChooser','fr.orsay.lri.varna.factories.RNAFactory','fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax','fr.orsay.lri.varna.views.VueColorMapStyle','fr.orsay.lri.varna.views.VueLoadColorMapValues','fr.orsay.lri.varna.views.VueBaseValues','fr.orsay.lri.varna.views.VueManualInput','fr.orsay.lri.varna.models.rna.RNA','fr.orsay.lri.varna.models.VARNAConfig','java.util.ArrayList','fr.orsay.lri.varna.applications.VARNAPrinter','java.util.Arrays','fr.orsay.lri.varna.views.VueBorder','java.awt.Point','fr.orsay.lri.varna.views.VueZoom','fr.orsay.lri.varna.views.VueGlobalRescale',['fr.orsay.lri.varna.models.VARNAEdits','.RescaleRNAEdit'],'fr.orsay.lri.varna.views.VueGlobalRotation',['fr.orsay.lri.varna.models.VARNAEdits','.RotateRNAEdit'],'fr.orsay.lri.varna.views.VueStyleBP','fr.orsay.lri.varna.views.VueFont','fr.orsay.lri.varna.views.VueSpaceBetweenBases','fr.orsay.lri.varna.views.VueBPHeightIncrement','fr.orsay.lri.varna.views.VueNumPeriod','fr.orsay.lri.varna.views.VueBPType','fr.orsay.lri.varna.views.VueJPEG','java.awt.image.BufferedImage','java.awt.geom.AffineTransform','javax.imageio.ImageIO','java.io.File','fr.orsay.lri.varna.exceptions.ExceptionExportFailed','javax.imageio.stream.FileImageOutputStream','javax.imageio.IIOImage','fr.orsay.lri.varna.views.VueBases','fr.orsay.lri.varna.views.VueAboutPanel',['fr.orsay.lri.varna.models.annotations.TextAnnotation','.AnchorType'],'fr.orsay.lri.varna.views.VueAnnotation','fr.orsay.lri.varna.models.annotations.TextAnnotation',['java.awt.geom.Point2D','.Double'],'fr.orsay.lri.varna.models.rna.ModeleBase','fr.orsay.lri.varna.models.annotations.HighlightRegionAnnotation','fr.orsay.lri.varna.views.VueHighlightRegionEdit','fr.orsay.lri.varna.models.annotations.ChemProbAnnotation','fr.orsay.lri.varna.views.VueChemProbAnnotation','fr.orsay.lri.varna.views.VueBPList','fr.orsay.lri.varna.views.VueListeAnnotations',['fr.orsay.lri.varna.models.VARNAEdits','.AddBPEdit'],'java.util.HashSet',['fr.orsay.lri.varna.models.VARNAEdits','.RemoveBPEdit'],['fr.orsay.lri.varna.models.VARNAEdits','.BasesShiftEdit'],['fr.orsay.lri.varna.models.VARNAEdits','.SingleBaseMoveEdit'],['fr.orsay.lri.varna.models.VARNAEdits','.HelixFlipEdit'],['fr.orsay.lri.varna.models.VARNAEdits','.HelixRotateEdit'],'fr.orsay.lri.varna.views.VueBPThickness']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VueUI");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._fileChooserDirectory=null;
this._varnaFilter=Clazz.new_($I$(1,1).c$$S$S$S,["VARNA Session File", "varna", "VARNA"]);
this._bpseqFilter=Clazz.new_(["BPSeq (CRW) File", "bpseq", "BPSEQ"],$I$(1,1).c$$S$S$S);
this._ctFilter=Clazz.new_(["Connect (MFold) File", "ct", "CT"],$I$(1,1).c$$S$S$S);
this._dbnFilter=Clazz.new_(["Dot-bracket notation (Vienna) File", "dbn", "DBN", "faa", "FAA"],$I$(1,1).c$$S$S$S$S$S);
this._jpgFilter=Clazz.new_($I$(1,1).c$$S$S$S$S$S,["JPEG Picture", "jpeg", "jpg", "JPG", "JPEG"]);
this._pngFilter=Clazz.new_($I$(1,1).c$$S$S$S,["PNG Picture", "png", "PNG"]);
this._epsFilter=Clazz.new_($I$(1,1).c$$S$S$S,["EPS File", "eps", "EPS"]);
this._svgFilter=Clazz.new_($I$(1,1).c$$S$S$S,["SVG Picture", "svg", "SVG"]);
this._xfigFilter=Clazz.new_($I$(1,1).c$$S$S$S$S$S,["XFig Diagram", "fig", "xfig", "FIG", "XFIG"]);
this._tikzFilter=Clazz.new_($I$(1,1).c$$S$S$S,["PGF/Tikz diagram", "tex", "pgf"]);
},1);

C$.$fields$=[['O',['okBtnCallback','Runnable','+cancelBtnCallback','+closeBtnCallback','+errorCallback','+finalCallback','+noBtnCallback','+objectCallback','dialogReturnValue','java.lang.Object','dialogError','Throwable','_vp','fr.orsay.lri.varna.VARNAPanel','_fileChooserDirectory','java.io.File','_undoableEditSupport','javax.swing.undo.UndoableEditSupport','_varnaFilter','fr.orsay.lri.varna.applications.FileNameExtensionFilter','+_bpseqFilter','+_ctFilter','+_dbnFilter','+_jpgFilter','+_pngFilter','+_epsFilter','+_svgFilter','+_xfigFilter','+_tikzFilter']]]

Clazz.newMeth(C$, 'getDialogReturnValue$', function () {
return this.dialogReturnValue;
});

Clazz.newMeth(C$, 'getDialogError$', function () {
return this.dialogError;
});

Clazz.newMeth(C$, 'showMessageDialog$O$S$I$Runnable$Runnable', function (messagePanel, title, messageType, ok, close) {
this.okBtnCallback=ok;
this.closeBtnCallback=close;
$I$(2).showMessageDialog$java_awt_Component$O$S$I(this._vp, messagePanel, title, messageType);
}, p$1);

Clazz.newMeth(C$, 'showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA', function (optionPanel, title, ok, cancel, close_final_error) {
this.okBtnCallback=ok;
this.cancelBtnCallback=cancel;
this.closeBtnCallback=(close_final_error.length > 0 ? close_final_error[0] : null);
this.finalCallback=(close_final_error.length > 1 ? close_final_error[1] : null);
this.errorCallback=(close_final_error.length > 2 ? close_final_error[2] : null);
this.onDialogReturn$I($I$(2).showConfirmDialog$java_awt_Component$O$S$I(this._vp, optionPanel, title, 2));
});

Clazz.newMeth(C$, 'showInputDialog$S$O$Runnable$RunnableA', function (message, initialValue, input, close_final_error) {
this.objectCallback=input;
this.closeBtnCallback=(close_final_error.length > 0 ? close_final_error[0] : null);
this.finalCallback=(close_final_error.length > 1 ? close_final_error[1] : null);
this.errorCallback=(close_final_error.length > 2 ? close_final_error[2] : null);
this.onDialogReturn$O($I$(2).showInputDialog$java_awt_Component$O$O(this._vp, message, initialValue));
});

Clazz.newMeth(C$, 'showColorDialog$S$O$Runnable', function (message, initialValue, ret) {
this.objectCallback=ret;
this.onDialogReturn$O($I$(3).showDialog$java_awt_Component$S$java_awt_Color(this._vp, message, initialValue));
});

Clazz.newMeth(C$, 'onDialogReturn$O', function (value) {
this.dialogReturnValue=value;
if (this.objectCallback != null  && !(Clazz.instanceOf(value, "javax.swing.plaf.UIResource")) ) this.objectCallback.run$();
});

Clazz.newMeth(C$, 'onDialogReturn$I', function (value) {
try {
switch (value) {
case 0:
if (this.okBtnCallback != null ) this.okBtnCallback.run$();
break;
case 1:
if (this.noBtnCallback != null ) this.noBtnCallback.run$();
break;
case 2:
if (this.cancelBtnCallback != null ) this.cancelBtnCallback.run$();
break;
case -1:
if (this.closeBtnCallback != null ) this.closeBtnCallback.run$();
break;
}
} catch (e) {
this.dialogError=e;
if (this.errorCallback != null ) this.errorCallback.run$();
} finally {
if (value != Math.floor(value) ) {
return;
}if (this.finalCallback != null ) this.finalCallback.run$();
this.okBtnCallback=this.noBtnCallback=this.cancelBtnCallback=this.closeBtnCallback=this.errorCallback=this.objectCallback=null;
this.dialogError=null;
}
});

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
;C$.$init$.apply(this);
this._vp=vp;
this._undoableEditSupport=Clazz.new_($I$(4,1).c$$O,[this._vp]);
}, 1);

Clazz.newMeth(C$, 'addUndoableEditListener$javax_swing_undo_UndoManager', function (manager) {
this._undoableEditSupport.addUndoableEditListener$javax_swing_event_UndoableEditListener(manager);
});

Clazz.newMeth(C$, 'UIToggleColorMap$', function () {
if (this._vp.isModifiable$()) {
this._vp.setColorMapVisible$Z(!this._vp.getColorMapVisible$());
this._vp.repaint$();
}});

Clazz.newMeth(C$, 'UIToggleDrawBackbone$', function () {
if (this._vp.isModifiable$()) {
this._vp.setDrawBackbone$Z(!this._vp.getDrawBackbone$());
this._vp.repaint$();
}});

Clazz.newMeth(C$, 'backupAllCoords$', function () {
var tmp=Clazz.new_($I$(5,1));
for (var i=0; i < this._vp.getRNA$().getSize$(); i++) {
tmp.put$O$O(new Integer(i), this._vp.getRNA$().getCoords$I(i));
}
return tmp;
});

Clazz.newMeth(C$, 'UIToggleFlatExteriorLoop$', function () {
if (this._vp.isModifiable$() && this._vp.getRNA$().get_drawMode$() == 2 ) {
var bck=this.backupAllCoords$();
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_([2, this._vp, !this._vp.getFlatExteriorLoop$()],$I$(6,1).c$$I$fr_orsay_lri_varna_VARNAPanel$Z));
this._vp.setFlatExteriorLoop$Z(!this._vp.getFlatExteriorLoop$());
this._vp.reset$();
this._vp.drawRNA$fr_orsay_lri_varna_models_rna_RNA$I(this._vp.getRNA$(), 2);
this._vp.repaint$();
this._vp.fireLayoutChanged$java_util_Hashtable(bck);
}});

Clazz.newMeth(C$, 'UIRadiate$', function () {
if (this._vp.isModifiable$()) {
var bck=this.backupAllCoords$();
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(6,1).c$$I$fr_orsay_lri_varna_VARNAPanel,[2, this._vp]));
this._vp.reset$();
this._vp.drawRNA$fr_orsay_lri_varna_models_rna_RNA$I(this._vp.getRNA$(), 2);
this._vp.repaint$();
this._vp.fireLayoutChanged$java_util_Hashtable(bck);
}});

Clazz.newMeth(C$, 'UIMOTIFView$', function () {
if (this._vp.isModifiable$()) {
var bck=this.backupAllCoords$();
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(6,1).c$$I$fr_orsay_lri_varna_VARNAPanel,[6, this._vp]));
this._vp.reset$();
this._vp.drawRNA$fr_orsay_lri_varna_models_rna_RNA$I(this._vp.getRNA$(), 6);
this._vp.repaint$();
this._vp.fireLayoutChanged$java_util_Hashtable(bck);
}});

Clazz.newMeth(C$, 'UILine$', function () {
if (this._vp.isModifiable$()) {
var bck=this.backupAllCoords$();
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(6,1).c$$I$fr_orsay_lri_varna_VARNAPanel,[4, this._vp]));
this._vp.reset$();
this._vp.drawRNA$fr_orsay_lri_varna_models_rna_RNA$I(this._vp.getRNA$(), 4);
this._vp.repaint$();
this._vp.fireLayoutChanged$java_util_Hashtable(bck);
}});

Clazz.newMeth(C$, 'UICircular$', function () {
if (this._vp.isModifiable$()) {
var bck=this.backupAllCoords$();
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(6,1).c$$I$fr_orsay_lri_varna_VARNAPanel,[1, this._vp]));
this._vp.reset$();
this._vp.drawRNA$fr_orsay_lri_varna_models_rna_RNA$I(this._vp.getRNA$(), 1);
this._vp.repaint$();
this._vp.fireLayoutChanged$java_util_Hashtable(bck);
}});

Clazz.newMeth(C$, 'UINAView$', function () {
if (this._vp.isModifiable$()) {
var bck=this.backupAllCoords$();
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(6,1).c$$I$fr_orsay_lri_varna_VARNAPanel,[3, this._vp]));
this._vp.reset$();
this._vp.drawRNA$fr_orsay_lri_varna_models_rna_RNA$I(this._vp.getRNA$(), 3);
this._vp.repaint$();
this._vp.fireLayoutChanged$java_util_Hashtable(bck);
}});

Clazz.newMeth(C$, 'UIVARNAView$', function () {
if (this._vp.isModifiable$()) {
var bck=this.backupAllCoords$();
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(6,1).c$$I$fr_orsay_lri_varna_VARNAPanel,[5, this._vp]));
this._vp.reset$();
this._vp.drawRNA$fr_orsay_lri_varna_models_rna_RNA$I(this._vp.getRNA$(), 5);
this._vp.repaint$();
this._vp.fireLayoutChanged$java_util_Hashtable(bck);
}});

Clazz.newMeth(C$, 'UIReset$', function () {
if (this._vp.isModifiable$()) {
var bck=this.backupAllCoords$();
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_([this._vp.getRNA$().get_drawMode$(), this._vp],$I$(6,1).c$$I$fr_orsay_lri_varna_VARNAPanel));
this._vp.reset$();
this._vp.drawRNA$fr_orsay_lri_varna_models_rna_RNA$I(this._vp.getRNA$(), this._vp.getRNA$().get_drawMode$());
this._vp.repaint$();
this._vp.fireLayoutChanged$java_util_Hashtable(bck);
}});

Clazz.newMeth(C$, 'savePath$javax_swing_JFileChooser', function (jfc) {
this._fileChooserDirectory=jfc.getCurrentDirectory$();
}, p$1);

Clazz.newMeth(C$, 'loadPath$javax_swing_JFileChooser', function (jfc) {
if (this._fileChooserDirectory != null ) {
jfc.setCurrentDirectory$java_io_File(this._fileChooserDirectory);
}}, p$1);

Clazz.newMeth(C$, 'UIChooseRNAs$java_util_ArrayList', function (rnas) {
if (rnas.size$() > 5) {
var vrna=Clazz.new_($I$(7,1).c$$java_util_ArrayList,[rnas]);
var ok=((P$.VueUI$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
for (var r, $r = this.$finals$.vrna.getSelectedRNAs$().iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
try {
r.drawRNA$fr_orsay_lri_varna_models_VARNAConfig(this.b$['fr.orsay.lri.varna.views.VueUI']._vp.getConfig$());
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNAViewAlgorithm")){
e.printStackTrace$();
} else {
throw e;
}
}
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.showRNA$fr_orsay_lri_varna_models_rna_RNA(r);
}
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueUI$1.$init$,[this, {vrna:vrna}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(vrna, "Select imported sequence/structures", ok, null, []);
} else {
for (var r, $r = rnas.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
try {
r.drawRNA$fr_orsay_lri_varna_models_VARNAConfig(this._vp.getConfig$());
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNAViewAlgorithm")){
e.printStackTrace$();
} else {
throw e;
}
}
this._vp.showRNA$fr_orsay_lri_varna_models_rna_RNA(r);
}
this._vp.repaint$();
}});

Clazz.newMeth(C$, 'UIFile$', function () {
if (this._vp.isModifiable$()) {
var fc=Clazz.new_($I$(8,1));
fc.setFileSelectionMode$I(0);
fc.setDialogTitle$S("Open...");
p$1.loadPath$javax_swing_JFileChooser.apply(this, [fc]);
if (fc.showOpenDialog$java_awt_Component(this._vp) == 0) {
try {
p$1.savePath$javax_swing_JFileChooser.apply(this, [fc]);
var path=fc.getSelectedFile$().getAbsolutePath$();
if (!path.toLowerCase$().endsWith$S(".varna")) {
var rnas=$I$(9).loadSecStr$S(path);
if (rnas.isEmpty$()) {
throw Clazz.new_($I$(10,1).c$$S,["No RNA could be parsed from that source."]);
} else {
this.UIChooseRNAs$java_util_ArrayList(rnas);
}} else {
var bck=this._vp.loadSession$java_io_File(fc.getSelectedFile$());
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
var e1 = e$$;
{
this._vp.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionPermissionDenied")){
var e1 = e$$;
{
this._vp.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionLoadingFailed")){
var e1 = e$$;
{
this._vp.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e1 = e$$;
{
this._vp.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e1 = e$$;
{
this._vp.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
this._vp.errorDialog$Exception(e);
}
} else {
throw e$$;
}
}
}}});

Clazz.newMeth(C$, 'UISetColorMapStyle$', function () {
var vcms=Clazz.new_($I$(11,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var ok=((P$.VueUI$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap(this.$finals$.vcms.getColorMap$());
});
})()
), Clazz.new_(P$.VueUI$2.$init$,[this, {vcms:vcms}]));
var cancel=((P$.VueUI$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.vcms.cancelChanges$();
});
})()
), Clazz.new_(P$.VueUI$3.$init$,[this, {vcms:vcms}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(vcms, "Choose color map style", ok, cancel, [cancel, null, null]);
});

Clazz.newMeth(C$, 'UILoadColorMapValues$', function () {
var vcmv=Clazz.new_($I$(12,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var ok=((P$.VueUI$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setColorMapVisible$Z(true);
try {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.readValues$java_io_Reader(this.$finals$.vcmv.getReader$());
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.errorDialog$Exception(this.b$['fr.orsay.lri.varna.views.VueUI'].getDialogError$.apply(this.b$['fr.orsay.lri.varna.views.VueUI'], []));
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.VueUI$4.$init$,[this, {vcmv:vcmv}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(vcmv, "Load base values", ok, null, []);
});

Clazz.newMeth(C$, 'UISetColorMapValues$', function () {
var vbv=Clazz.new_($I$(13,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var cancel=((P$.VueUI$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.vbv.cancelChanges$();
});
})()
), Clazz.new_(P$.VueUI$5.$init$,[this, {vbv:vbv}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(vbv, "Choose base values", null, cancel, []);
});

Clazz.newMeth(C$, 'UIManualInput$', function () {
if (this._vp.isModifiable$()) {
var manualInput=Clazz.new_($I$(14,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var ok=((P$.VueUI$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['fr.orsay.lri.varna.views.VueUI']._vp.getRNA$().getSize$() == 0) {
}try {
var r=Clazz.new_($I$(15,1));
var cfg=Clazz.new_($I$(16,1));
r.setRNA$S$S(this.$finals$.manualInput.getTseq$().getText$(), this.$finals$.manualInput.getTstr$().getText$());
r.drawRNA$I$fr_orsay_lri_varna_models_VARNAConfig(this.b$['fr.orsay.lri.varna.views.VueUI']._vp.getRNA$().get_drawMode$(), cfg);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.drawRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA(r);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionNAViewAlgorithm")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
});
})()
), Clazz.new_(P$.VueUI$6.$init$,[this, {manualInput:manualInput}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(manualInput.getPanel$(), "Input sequence/structure", ok, null, []);
}});

Clazz.newMeth(C$, 'UISetTitle$', function () {
if (this._vp.isModifiable$()) {
var input=((P$.VueUI$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var res=this.b$['fr.orsay.lri.varna.views.VueUI'].getDialogReturnValue$.apply(this.b$['fr.orsay.lri.varna.views.VueUI'], []);
if (res != null ) {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setTitle$S(res);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
}});
})()
), Clazz.new_(P$.VueUI$7.$init$,[this, null]));
this.showInputDialog$S$O$Runnable$RunnableA("Input title", this._vp.getTitle$(), input, []);
}});

Clazz.newMeth(C$, 'UISetColorMapCaption$', function () {
if (this._vp.isModifiable$()) {
var input=((P$.VueUI$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var res=this.b$['fr.orsay.lri.varna.views.VueUI'].getDialogReturnValue$.apply(this.b$['fr.orsay.lri.varna.views.VueUI'], []);
if (res != null ) {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setColorMapCaption$S(res);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
}});
})()
), Clazz.new_(P$.VueUI$8.$init$,[this, null]));
this.showInputDialog$S$O$Runnable$RunnableA("Input new color map caption", this._vp.getColorMapCaption$(), input, []);
}});

Clazz.newMeth(C$, 'UISetBaseCharacter$', function () {
if (this._vp.isModifiable$()) {
var i=(this._vp.getNearestBase$()).valueOf();
if (this._vp.isComparisonMode$()) {
var input=((P$.VueUI$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var res=this.b$['fr.orsay.lri.varna.views.VueUI'].getDialogReturnValue$.apply(this.b$['fr.orsay.lri.varna.views.VueUI'], []);
if (res != null ) {
var mb=this.b$['fr.orsay.lri.varna.views.VueUI']._vp.getRNA$().get_listeBases$().get$I(this.$finals$.i);
var bck=mb.getBase1$() + "|" + mb.getBase2$() ;
mb.setBase1$Character(new Character(((res.length$() > 0) ? res.charAt$I(0) : " ")));
mb.setBase2$Character(new Character(((res.length$() > 1) ? res.charAt$I(1) : " ")));
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.fireSequenceChanged$I$S$S(this.$finals$.i, bck, res);
}});
})()
), Clazz.new_(P$.VueUI$9.$init$,[this, {i:i}]));
this.showInputDialog$S$O$Runnable$RunnableA("Input base", (this._vp.getRNA$().get_listeBases$().get$I(i)).getBases$(), input, []);
} else {
var input=((P$.VueUI$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var res=this.b$['fr.orsay.lri.varna.views.VueUI'].getDialogReturnValue$.apply(this.b$['fr.orsay.lri.varna.views.VueUI'], []);
if (res != null ) {
var mb=this.b$['fr.orsay.lri.varna.views.VueUI']._vp.getRNA$().get_listeBases$().get$I(this.$finals$.i);
var bck=mb.getBase$();
mb.setBase$S(res);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.fireSequenceChanged$I$S$S(this.$finals$.i, bck, res);
}});
})()
), Clazz.new_(P$.VueUI$10.$init$,[this, {i:i}]));
this.showInputDialog$S$O$Runnable$RunnableA("Input base", (this._vp.getRNA$().get_listeBases$().get$I(i)).getBase$(), input, []);
}}});

Clazz.newMeth(C$, 'UIExport$', function () {
var v=Clazz.new_($I$(17,1));
v.add$O(this._epsFilter);
v.add$O(this._svgFilter);
v.add$O(this._tikzFilter);
v.add$O(this._xfigFilter);
v.add$O(this._jpgFilter);
v.add$O(this._pngFilter);
var dest=this.UIChooseOutputFile$java_util_ArrayList(v);
if (dest != null ) {
var extLower=dest.substring$I(dest.lastIndexOf$I(".")).toLowerCase$();
if (extLower.equals$O(".eps")) {
this._vp.getRNA$().saveRNAEPS$S$fr_orsay_lri_varna_models_VARNAConfig(dest, this._vp.getConfig$());
} else if (extLower.equals$O(".svg")) {
this._vp.getRNA$().saveRNASVG$S$fr_orsay_lri_varna_models_VARNAConfig(dest, this._vp.getConfig$());
} else if (extLower.equals$O(".fig") || extLower.equals$O(".xfig") ) {
this._vp.getRNA$().saveRNAXFIG$S$fr_orsay_lri_varna_models_VARNAConfig(dest, this._vp.getConfig$());
} else if (extLower.equals$O(".pgf") || extLower.equals$O(".tex") ) {
this._vp.getRNA$().saveRNATIKZ$S$fr_orsay_lri_varna_models_VARNAConfig(dest, this._vp.getConfig$());
} else if (extLower.equals$O(".png")) {
this.saveToPNG$S(dest);
} else if (extLower.equals$O(".jpg") || extLower.equals$O(".jpeg") ) {
this.saveToJPEG$S(dest);
}}});

Clazz.newMeth(C$, 'UIExportJPEG$', function () {
var dest=this.UIChooseOutputFile$fr_orsay_lri_varna_applications_FileNameExtensionFilter(this._jpgFilter);
if (dest != null ) {
this.saveToJPEG$S(dest);
}});

Clazz.newMeth(C$, 'UIPrint$', function () {
$I$(18).printComponent$java_awt_Component(this._vp);
});

Clazz.newMeth(C$, 'UIExportPNG$', function () {
var dest=this.UIChooseOutputFile$fr_orsay_lri_varna_applications_FileNameExtensionFilter(this._pngFilter);
if (dest != null ) {
this.saveToPNG$S(dest);
}});

Clazz.newMeth(C$, 'UIExportXFIG$', function () {
var dest=this.UIChooseOutputFile$fr_orsay_lri_varna_applications_FileNameExtensionFilter(this._xfigFilter);
if (dest != null ) {
this._vp.getRNA$().saveRNAXFIG$S$fr_orsay_lri_varna_models_VARNAConfig(dest, this._vp.getConfig$());
}});

Clazz.newMeth(C$, 'UIExportTIKZ$', function () {
var dest=this.UIChooseOutputFile$fr_orsay_lri_varna_applications_FileNameExtensionFilter(this._tikzFilter);
if (dest != null ) {
this._vp.getRNA$().saveRNATIKZ$S$fr_orsay_lri_varna_models_VARNAConfig(dest, this._vp.getConfig$());
}});

Clazz.newMeth(C$, 'UIExportEPS$', function () {
var dest=this.UIChooseOutputFile$fr_orsay_lri_varna_applications_FileNameExtensionFilter(this._epsFilter);
if (dest != null ) {
this._vp.getRNA$().saveRNAEPS$S$fr_orsay_lri_varna_models_VARNAConfig(dest, this._vp.getConfig$());
}});

Clazz.newMeth(C$, 'UIExportSVG$', function () {
var dest=this.UIChooseOutputFile$fr_orsay_lri_varna_applications_FileNameExtensionFilter(this._svgFilter);
if (dest != null ) {
this._vp.getRNA$().saveRNASVG$S$fr_orsay_lri_varna_models_VARNAConfig(dest, this._vp.getConfig$());
}});

Clazz.newMeth(C$, 'UISaveAsDBN$', function () {
var name=this._vp.getVARNAUI$().UIChooseOutputFile$fr_orsay_lri_varna_applications_FileNameExtensionFilter(this._dbnFilter);
if (name != null ) this._vp.getRNA$().saveAsDBN$S$S(name, this._vp.getTitle$());
});

Clazz.newMeth(C$, 'UISaveAsCT$', function () {
var name=this._vp.getVARNAUI$().UIChooseOutputFile$fr_orsay_lri_varna_applications_FileNameExtensionFilter(this._ctFilter);
if (name != null ) this._vp.getRNA$().saveAsCT$S$S(name, this._vp.getTitle$());
});

Clazz.newMeth(C$, 'UISaveAsBPSEQ$', function () {
var name=this._vp.getVARNAUI$().UIChooseOutputFile$fr_orsay_lri_varna_applications_FileNameExtensionFilter(this._bpseqFilter);
if (name != null ) this._vp.getRNA$().saveAsBPSEQ$S$S(name, this._vp.getTitle$());
});

Clazz.newMeth(C$, 'UISaveAs$', function () {
var v=Clazz.new_($I$(17,1));
v.add$O(this._bpseqFilter);
v.add$O(this._dbnFilter);
v.add$O(this._ctFilter);
v.add$O(this._varnaFilter);
var dest=this.UIChooseOutputFile$java_util_ArrayList(v);
if (dest != null ) {
var extLower=dest.substring$I(dest.lastIndexOf$I(".")).toLowerCase$();
if (extLower.endsWith$S("bpseq")) {
this._vp.getRNA$().saveAsBPSEQ$S$S(dest, this._vp.getTitle$());
} else if (extLower.endsWith$S("ct")) {
this._vp.getRNA$().saveAsCT$S$S(dest, this._vp.getTitle$());
} else if (extLower.endsWith$S("dbn") || extLower.endsWith$S("faa") ) {
this._vp.getRNA$().saveAsDBN$S$S(dest, this._vp.getTitle$());
} else if (extLower.endsWith$S("varna")) {
this._vp.saveSession$S(dest);
}}});

Clazz.newMeth(C$, 'UIChooseOutputFile$fr_orsay_lri_varna_applications_FileNameExtensionFilter', function (filtre) {
var v=Clazz.new_($I$(17,1));
v.add$O(filtre);
return this.UIChooseOutputFile$java_util_ArrayList(v);
});

Clazz.newMeth(C$, 'UIChooseOutputFile$java_util_ArrayList', function (filtre) {
var fc=Clazz.new_($I$(8,1));
p$1.loadPath$javax_swing_JFileChooser.apply(this, [fc]);
var absolutePath=null;
for (var i=0; i < filtre.size$(); i++) {
fc.addChoosableFileFilter$javax_swing_filechooser_FileFilter(filtre.get$I(i));
}
fc.setFileSelectionMode$I(0);
fc.setDialogTitle$S("Save...");
if (fc.showSaveDialog$java_awt_Component(this._vp) == 0) {
p$1.savePath$javax_swing_JFileChooser.apply(this, [fc]);
absolutePath=fc.getSelectedFile$().getAbsolutePath$();
var extension=this._vp.getPopupMenu$().get_controleurMenu$().getExtension$java_io_File(fc.getSelectedFile$());
var f=fc.getFileFilter$();
if (Clazz.instanceOf(f, "fr.orsay.lri.varna.applications.FileNameExtensionFilter")) {
var listeExtension=Clazz.new_($I$(17,1));
listeExtension.addAll$java_util_Collection($I$(19,"asList$OA",[(f).getExtensions$()]));
if (!listeExtension.contains$O(extension)) {
absolutePath += "." + listeExtension.get$I(0);
}}}return absolutePath;
});

Clazz.newMeth(C$, 'UISetBorder$', function () {
var border=Clazz.new_($I$(20,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var oldBorder=this._vp.getBorderSize$();
this._vp.drawBBox$Z(true);
this._vp.drawBorder$Z(true);
this._vp.repaint$();
var cancel=((P$.VueUI$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setBorderSize$java_awt_Dimension(this.$finals$.oldBorder);
});
})()
), Clazz.new_(P$.VueUI$11.$init$,[this, {oldBorder:oldBorder}]));
var final_=((P$.VueUI$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.drawBorder$Z(false);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.drawBBox$Z(false);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueUI$12.$init$,[this, null]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(border.getPanel$(), "Set new border size", null, cancel, [cancel, final_]);
});

Clazz.newMeth(C$, 'UISetBackground$', function () {
this.showColorDialog$S$O$Runnable("Choose new background color", this._vp.getBackground$(), ((P$.VueUI$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['fr.orsay.lri.varna.views.VueUI'].dialogReturnValue != null ) {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setBackground$java_awt_Color(this.b$['fr.orsay.lri.varna.views.VueUI'].dialogReturnValue);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
}});
})()
), Clazz.new_(P$.VueUI$13.$init$,[this, null])));
});

Clazz.newMeth(C$, 'UIZoomIn$', function () {
var _actualZoom=this._vp.getZoom$();
var _actualAmount=this._vp.getZoomIncrement$();
var _actualTranslation=this._vp.getTranslation$();
var newZoom=Math.min(60.0, _actualZoom * _actualAmount);
var ratio=newZoom / _actualZoom;
var newTrans=Clazz.new_([((_actualTranslation.x * ratio)|0), ((_actualTranslation.y * ratio)|0)],$I$(21,1).c$$I$I);
this._vp.setZoom$O(new Double(newZoom));
this._vp.setTranslation$java_awt_Point(newTrans);
this._vp.checkTranslation$();
this._vp.repaint$();
});

Clazz.newMeth(C$, 'UIZoomOut$', function () {
var _actualZoom=this._vp.getZoom$();
var _actualAmount=this._vp.getZoomIncrement$();
var _actualTranslation=this._vp.getTranslation$();
var newZoom=Math.max(_actualZoom / _actualAmount, 0.5);
var ratio=newZoom / _actualZoom;
var newTrans=Clazz.new_([((_actualTranslation.x * ratio)|0), ((_actualTranslation.y * ratio)|0)],$I$(21,1).c$$I$I);
this._vp.setZoom$O(new Double(newZoom));
this._vp.setTranslation$java_awt_Point(newTrans);
this._vp.checkTranslation$();
this._vp.repaint$();
});

Clazz.newMeth(C$, 'UICustomZoom$', function () {
var zoom=Clazz.new_($I$(22,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var oldZoom=this._vp.getZoom$();
var oldZoomAmount=this._vp.getZoomIncrement$();
this._vp.drawBBox$Z(true);
this._vp.repaint$();
var cancel=((P$.VueUI$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setZoom$O(new Double(this.$finals$.oldZoom));
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setZoomIncrement$D(this.$finals$.oldZoomAmount);
});
})()
), Clazz.new_(P$.VueUI$14.$init$,[this, {oldZoom:oldZoom,oldZoomAmount:oldZoomAmount}]));
var final_=((P$.VueUI$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.drawBBox$Z(false);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueUI$15.$init$,[this, null]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(zoom.getPanel$(), "Set zoom", null, cancel, [cancel, final_]);
});

Clazz.newMeth(C$, 'UIGlobalRescale$', function () {
if (this._vp.isModifiable$()) {
if (this._vp.getRNA$().get_listeBases$().size$() > 0) {
var rescale=Clazz.new_($I$(23,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var cancel=((P$.VueUI$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI'].UIGlobalRescale$D.apply(this.b$['fr.orsay.lri.varna.views.VueUI'], [1.0 / this.$finals$.rescale.getScale$()]);
});
})()
), Clazz.new_(P$.VueUI$16.$init$,[this, {rescale:rescale}]));
var final_=((P$.VueUI$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.drawBBox$Z(false);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueUI$17.$init$,[this, null]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(rescale.getPanel$(), "Rescales the whole RNA (No redraw)", null, cancel, [cancel, final_]);
}}});

Clazz.newMeth(C$, 'UIGlobalRescale$D', function (d) {
if (this._vp.isModifiable$()) {
if (this._vp.getRNA$().get_listeBases$().size$() > 0) {
this._vp.globalRescale$D(d);
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(24,1).c$$D$fr_orsay_lri_varna_VARNAPanel,[d, this._vp]));
}}});

Clazz.newMeth(C$, 'UIGlobalRotation$', function () {
if (this._vp.isModifiable$()) {
if (this._vp.getRNA$().get_listeBases$().size$() > 0) {
this._vp.drawBBox$Z(true);
this._vp.repaint$();
var rotation=Clazz.new_($I$(25,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var cancel=((P$.VueUI$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI'].UIGlobalRotation$D.apply(this.b$['fr.orsay.lri.varna.views.VueUI'], [-this.$finals$.rotation.getAngle$()]);
});
})()
), Clazz.new_(P$.VueUI$18.$init$,[this, {rotation:rotation}]));
var final_=((P$.VueUI$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.drawBBox$Z(false);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueUI$19.$init$,[this, null]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(rotation.getPanel$(), "Rotates the whole RNA", null, cancel, [cancel, final_, null]);
}}});

Clazz.newMeth(C$, 'UIGlobalRotation$D', function (d) {
if (this._vp.isModifiable$()) {
if (this._vp.getRNA$().get_listeBases$().size$() > 0) {
this._vp.globalRotation$Double(new Double(d));
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(26,1).c$$D$fr_orsay_lri_varna_VARNAPanel,[d, this._vp]));
}}});

Clazz.newMeth(C$, 'UISetBPStyle$', function () {
if (this._vp.getRNA$().get_listeBases$().size$() > 0) {
var bpstyle=Clazz.new_($I$(27,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var bck=this._vp.getBPStyle$();
var cancel=((P$.VueUI$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setBPStyle$fr_orsay_lri_varna_models_VARNAConfig_BP_STYLE(this.$finals$.bck);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueUI$20.$init$,[this, {bck:bck}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(bpstyle.getPanel$(), "Set main base pair style", null, cancel, [cancel]);
}});

Clazz.newMeth(C$, 'UISetTitleColor$', function () {
if (this._vp.isModifiable$()) {
this.showColorDialog$S$O$Runnable("Choose new title color", this._vp.getTitleColor$(), ((P$.VueUI$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['fr.orsay.lri.varna.views.VueUI'].dialogReturnValue != null ) {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setTitleColor$java_awt_Color(this.b$['fr.orsay.lri.varna.views.VueUI'].dialogReturnValue);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
}});
})()
), Clazz.new_(P$.VueUI$21.$init$,[this, null])));
}});

Clazz.newMeth(C$, 'UISetBackboneColor$', function () {
if (this._vp.isModifiable$()) {
this.showColorDialog$S$O$Runnable("Choose new backbone color", this._vp.getBackboneColor$(), ((P$.VueUI$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['fr.orsay.lri.varna.views.VueUI'].dialogReturnValue != null ) {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setBackboneColor$java_awt_Color(this.b$['fr.orsay.lri.varna.views.VueUI'].dialogReturnValue);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
}});
})()
), Clazz.new_(P$.VueUI$22.$init$,[this, null])));
}});

Clazz.newMeth(C$, 'UISetTitleFont$', function () {
if (this._vp.isModifiable$()) {
var font=Clazz.new_($I$(28,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var ok=((P$.VueUI$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setTitleFont$java_awt_Font(this.$finals$.font.getFont$());
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueUI$23.$init$,[this, {font:font}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(font.getPanel$(), "New Title font", ok, null, []);
}});

Clazz.newMeth(C$, 'UISetSpaceBetweenBases$', function () {
if (this._vp.isModifiable$()) {
var vsbb=Clazz.new_($I$(29,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var oldSpace=new Double(this._vp.getSpaceBetweenBases$());
var cancel=((P$.VueUI$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setSpaceBetweenBases$D((this.$finals$.oldSpace).valueOf());
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.drawRNA$fr_orsay_lri_varna_models_rna_RNA(this.b$['fr.orsay.lri.varna.views.VueUI']._vp.getRNA$());
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueUI$24.$init$,[this, {oldSpace:oldSpace}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(vsbb.getPanel$(), "Set the space between each base", null, cancel, [cancel]);
}});

Clazz.newMeth(C$, 'UISetBPHeightIncrement$', function () {
if (this._vp.isModifiable$()) {
var v=Clazz.new_($I$(30,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var oldSpace=new Double(this._vp.getBPHeightIncrement$());
var cancel=((P$.VueUI$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setBPHeightIncrement$D((this.$finals$.oldSpace).valueOf());
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.drawRNA$fr_orsay_lri_varna_models_rna_RNA(this.b$['fr.orsay.lri.varna.views.VueUI']._vp.getRNA$());
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueUI$25.$init$,[this, {oldSpace:oldSpace}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(v.getPanel$(), "Set the vertical increment in linear mode", null, cancel, [cancel]);
}});

Clazz.newMeth(C$, 'UISetNumPeriod$', function () {
if (this._vp.getRNA$().get_listeBases$().size$() != 0) {
var oldNumPeriod=this._vp.getNumPeriod$();
var vnp=Clazz.new_($I$(31,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
var cancel=((P$.VueUI$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setNumPeriod$I(this.$finals$.oldNumPeriod);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueUI$26.$init$,[this, {oldNumPeriod:oldNumPeriod}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(vnp.getPanel$(), "Set new numbering period", null, cancel, [cancel]);
}});

Clazz.newMeth(C$, 'UIEditBasePair$', function () {
if (this._vp.isModifiable$()) {
var mb=this._vp.getRNA$().get_listeBases$().get$I((this._vp.getNearestBase$()).valueOf());
if (mb.getElementStructure$() != -1) {
var msbp=mb.getStyleBP$();
var bck5=msbp.getEdgePartner5$();
var bck3=msbp.getEdgePartner3$();
var bcks=msbp.getStericity$();
var vbpt=Clazz.new_($I$(32,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_rna_ModeleBP,[this._vp, msbp]);
var cancel=((P$.VueUI$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.msbp.setEdge5$fr_orsay_lri_varna_models_rna_ModeleBP_Edge(this.$finals$.bck5);
this.$finals$.msbp.setEdge3$fr_orsay_lri_varna_models_rna_ModeleBP_Edge(this.$finals$.bck3);
this.$finals$.msbp.setStericity$fr_orsay_lri_varna_models_rna_ModeleBP_Stericity(this.$finals$.bcks);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueUI$27.$init$,[this, {bck5:bck5,bck3:bck3,msbp:msbp,bcks:bcks}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(vbpt.getPanel$(), "Set base pair L/W type", null, cancel, [cancel]);
}}});

Clazz.newMeth(C$, 'UIColorBasePair$', function () {
if (this._vp.isModifiable$()) {
var mb=this._vp.getRNA$().get_listeBases$().get$I((this._vp.getNearestBase$()).valueOf());
if (mb.getElementStructure$() != -1) {
var msbp=mb.getStyleBP$();
this.showColorDialog$S$O$Runnable("Choose custom base pair color", msbp.getStyle$().getColor$java_awt_Color(this._vp.getConfig$()._bondColor), ((P$.VueUI$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['fr.orsay.lri.varna.views.VueUI'].dialogReturnValue != null ) {
this.$finals$.msbp.getStyle$().setCustomColor$java_awt_Color(this.b$['fr.orsay.lri.varna.views.VueUI'].dialogReturnValue);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
}});
})()
), Clazz.new_(P$.VueUI$28.$init$,[this, {msbp:msbp}])));
}}});

Clazz.newMeth(C$, 'UIThicknessBasePair$', function () {
if (this._vp.isModifiable$()) {
var mb=this._vp.getRNA$().get_listeBases$().get$I((this._vp.getNearestBase$()).valueOf());
if (mb.getElementStructure$() != -1) {
var msbp=mb.getStyleBP$();
var bases=Clazz.new_($I$(17,1));
bases.add$O(msbp);
this.UIThicknessBasePairs$java_util_ArrayList(bases);
}}});

Clazz.newMeth(C$, 'saveToPNG$S', function (filename) {
var jpeg=Clazz.new_($I$(33,1).c$$Z$Z,[true, false]);
var ok=((P$.VueUI$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var scale=new Double(this.$finals$.jpeg.getScaleSlider$().getValue$() / 100.0);
var myImage=Clazz.new_([(Math.round(this.b$['fr.orsay.lri.varna.views.VueUI']._vp.getWidth$() * (scale).valueOf())|0), (Math.round(this.b$['fr.orsay.lri.varna.views.VueUI']._vp.getHeight$() * (scale).valueOf())|0), 2],$I$(34,1).c$$I$I$I);
var AF=Clazz.new_($I$(35,1));
AF.setToScale$D$D((scale).valueOf(), (scale).valueOf());
var g2=myImage.createGraphics$();
g2.setTransform$java_awt_geom_AffineTransform(AF);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.paintComponent$java_awt_Graphics$Z(g2, !this.b$['fr.orsay.lri.varna.views.VueUI']._vp.getConfig$()._drawBackground);
g2.dispose$();
try {
$I$(36,"write$java_awt_image_RenderedImage$S$java_io_File",[myImage, "PNG", Clazz.new_($I$(37,1).c$$S,[this.$finals$.filename])]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.errorDialog$Exception(Clazz.new_([e.getMessage$(), this.$finals$.filename],$I$(38,1).c$$S$S));
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.VueUI$29.$init$,[this, {filename:filename,jpeg:jpeg}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(jpeg.getPanel$(), "Set resolution", ok, null, []);
});

Clazz.newMeth(C$, 'saveToJPEG$S', function (filename) {
var jpeg=Clazz.new_($I$(33,1).c$$Z$Z,[true, true]);
var ok=((P$.VueUI$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var scale;
if (this.$finals$.jpeg.getScaleSlider$().getValue$() == 0) scale=new Double(0.01);
 else scale=new Double(this.$finals$.jpeg.getScaleSlider$().getValue$() / 100.0);
var myImage=Clazz.new_([(Math.round(this.b$['fr.orsay.lri.varna.views.VueUI']._vp.getWidth$() * (scale).valueOf())|0), (Math.round(this.b$['fr.orsay.lri.varna.views.VueUI']._vp.getHeight$() * (scale).valueOf())|0), 1],$I$(34,1).c$$I$I$I);
var AF=Clazz.new_($I$(35,1));
AF.setToScale$D$D((scale).valueOf(), (scale).valueOf());
var g2=myImage.createGraphics$();
g2.setTransform$java_awt_geom_AffineTransform(AF);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.paintComponent$java_awt_Graphics(g2);
try {
var out=Clazz.new_([Clazz.new_($I$(37,1).c$$S,[this.$finals$.filename])],$I$(39,1).c$$java_io_File);
var writer=$I$(36).getImageWritersByFormatName$S("jpeg").next$();
var params=writer.getDefaultWriteParam$();
params.setCompressionMode$I(2);
params.setCompressionQuality$F(this.$finals$.jpeg.getQualitySlider$().getValue$() / 100.0);
writer.setOutput$O(out);
var myIIOImage=Clazz.new_($I$(40,1).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[myImage, null, null]);
writer.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam(null, myIIOImage, params);
out.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.errorDialog$Exception(Clazz.new_([e.getMessage$(), this.$finals$.filename],$I$(38,1).c$$S$S));
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.VueUI$30.$init$,[this, {jpeg:jpeg,filename:filename}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(jpeg.getPanel$(), "Set resolution/quality", ok, null, []);
});

Clazz.newMeth(C$, 'UIToggleShowNCBP$', function () {
if (this._vp.isModifiable$()) {
this._vp.setShowNonCanonicalBP$Z(!this._vp.getShowNonCanonicalBP$());
this._vp.repaint$();
}});

Clazz.newMeth(C$, 'UIToggleColorSpecialBases$', function () {
this._vp.setColorNonStandardBases$Z(!this._vp.getColorSpecialBases$());
this._vp.repaint$();
});

Clazz.newMeth(C$, 'UIToggleColorGapsBases$', function () {
this._vp.setColorGapsBases$Z(!this._vp.getColorGapsBases$());
this._vp.repaint$();
});

Clazz.newMeth(C$, 'UIToggleShowNonPlanar$', function () {
if (this._vp.isModifiable$()) {
this._vp.setShowNonPlanarBP$Z(!this._vp.getShowNonPlanarBP$());
this._vp.repaint$();
}});

Clazz.newMeth(C$, 'UIToggleShowWarnings$', function () {
this._vp.setShowWarnings$Z(!this._vp.getShowWarnings$());
this._vp.repaint$();
});

Clazz.newMeth(C$, 'UIPickSpecialBasesColor$', function () {
this.showColorDialog$S$O$Runnable("Choose new special bases color", this._vp.getNonStandardBasesColor$(), ((P$.VueUI$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['fr.orsay.lri.varna.views.VueUI'].dialogReturnValue != null ) {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setNonStandardBasesColor$java_awt_Color(this.b$['fr.orsay.lri.varna.views.VueUI'].dialogReturnValue);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setColorNonStandardBases$Z(true);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
}});
})()
), Clazz.new_(P$.VueUI$31.$init$,[this, null])));
});

Clazz.newMeth(C$, 'UIPickGapsBasesColor$', function () {
this.showColorDialog$S$O$Runnable("Choose new gaps bases color", this._vp.getGapsBasesColor$(), ((P$.VueUI$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['fr.orsay.lri.varna.views.VueUI'].dialogReturnValue != null ) {
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setGapsBasesColor$java_awt_Color(this.b$['fr.orsay.lri.varna.views.VueUI'].dialogReturnValue);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.setColorGapsBases$Z(true);
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
}});
})()
), Clazz.new_(P$.VueUI$32.$init$,[this, null])));
});

Clazz.newMeth(C$, 'UIBaseTypeColor$', function () {
if (this._vp.isModifiable$()) {
Clazz.new_($I$(41,1).c$$fr_orsay_lri_varna_VARNAPanel$I,[this._vp, 1]);
}});

Clazz.newMeth(C$, 'UIToggleModifiable$', function () {
this._vp.setModifiable$Z(!this._vp.isModifiable$());
});

Clazz.newMeth(C$, 'UIBasePairTypeColor$', function () {
if (this._vp.isModifiable$()) {
Clazz.new_($I$(41,1).c$$fr_orsay_lri_varna_VARNAPanel$I,[this._vp, 3]);
}});

Clazz.newMeth(C$, 'UIBaseAllColor$', function () {
if (this._vp.isModifiable$()) {
Clazz.new_($I$(41,1).c$$fr_orsay_lri_varna_VARNAPanel$I,[this._vp, 2]);
}});

Clazz.newMeth(C$, 'UIAbout$', function () {
var about=Clazz.new_($I$(42,1));
var ok=((P$.VueUI$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.about.gracefulStop$();
});
})()
), Clazz.new_(P$.VueUI$33.$init$,[this, {about:about}]));
p$1.showMessageDialog$O$S$I$Runnable$Runnable.apply(this, [about, "About VARNA 3.9", -1, ok, ok]);
});

Clazz.newMeth(C$, 'UIAutoAnnotateHelices$', function () {
if (this._vp.isModifiable$()) {
this._vp.getRNA$().autoAnnotateHelices$();
this._vp.repaint$();
}});

Clazz.newMeth(C$, 'UIAutoAnnotateStrandEnds$', function () {
if (this._vp.isModifiable$()) {
this._vp.getRNA$().autoAnnotateStrandEnds$();
this._vp.repaint$();
}});

Clazz.newMeth(C$, 'UIAutoAnnotateInteriorLoops$', function () {
if (this._vp.isModifiable$()) {
this._vp.getRNA$().autoAnnotateInteriorLoops$();
this._vp.repaint$();
}});

Clazz.newMeth(C$, 'UIAutoAnnotateTerminalLoops$', function () {
if (this._vp.isModifiable$()) {
this._vp.getRNA$().autoAnnotateTerminalLoops$();
this._vp.repaint$();
}});

Clazz.newMeth(C$, 'UIAnnotationRemoveFromAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation', function (textAnnotation) {
if (this._vp.isModifiable$()) {
this._vp.set_selectedAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(null);
this._vp.getListeAnnotations$().remove$O(textAnnotation);
this._vp.repaint$();
}});

Clazz.newMeth(C$, 'UIAnnotationEditFromAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation', function (textAnnotation) {
var vue;
if (textAnnotation.getType$() === $I$(43).POSITION ) vue=Clazz.new_($I$(44,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z,[this._vp, textAnnotation, false]);
 else vue=Clazz.new_($I$(44,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z$Z,[this._vp, textAnnotation, true, false]);
vue.show$();
});

Clazz.newMeth(C$, 'UIAnnotationAddFromStructure$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType$java_util_ArrayList', function (type, listeIndex) {
var textAnnot;
var listeBase;
var vue;
switch (type) {
case $I$(43).BASE:
textAnnot=Clazz.new_(["", this._vp.getRNA$().get_listeBases$().get$I((listeIndex.get$I(0)).valueOf())],$I$(45,1).c$$S$fr_orsay_lri_varna_models_rna_ModeleBase);
vue=Clazz.new_($I$(44,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z,[this._vp, textAnnot, true]);
vue.show$();
break;
case $I$(43).LOOP:
listeBase=Clazz.new_($I$(17,1));
for (var i, $i = listeIndex.iterator$(); $i.hasNext$()&&((i=($i.next$())),1);) {
listeBase.add$O(this._vp.getRNA$().get_listeBases$().get$I((i).valueOf()));
}
textAnnot=Clazz.new_($I$(45,1).c$$S$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType,["", listeBase, type]);
vue=Clazz.new_($I$(44,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z,[this._vp, textAnnot, true]);
vue.show$();
break;
case $I$(43).HELIX:
listeBase=Clazz.new_($I$(17,1));
for (var i, $i = listeIndex.iterator$(); $i.hasNext$()&&((i=($i.next$())),1);) {
listeBase.add$O(this._vp.getRNA$().get_listeBases$().get$I((i).valueOf()));
}
textAnnot=Clazz.new_($I$(45,1).c$$S$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType,["", listeBase, type]);
vue=Clazz.new_($I$(44,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z,[this._vp, textAnnot, true]);
vue.show$();
break;
default:
this._vp.errorDialog$Exception(Clazz.new_(Clazz.load('Exception').c$$S,["Unknown structure type"]));
break;
}
});

Clazz.newMeth(C$, 'UIAnnotationEditFromStructure$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType$java_util_ArrayList', function (type, listeIndex) {
if (this._vp.isModifiable$()) {
var mb=this._vp.getRNA$().get_listeBases$().get$I((listeIndex.get$I(0)).valueOf());
var ta=this._vp.getRNA$().getAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType$fr_orsay_lri_varna_models_rna_ModeleBase(type, mb);
if (ta != null ) this.UIAnnotationEditFromAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(ta);
}});

Clazz.newMeth(C$, 'UIAnnotationRemoveFromStructure$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType$java_util_ArrayList', function (type, listeIndex) {
if (this._vp.isModifiable$()) {
var mb=this._vp.getRNA$().get_listeBases$().get$I((listeIndex.get$I(0)).valueOf());
var ta=this._vp.getRNA$().getAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType$fr_orsay_lri_varna_models_rna_ModeleBase(type, mb);
if (ta != null ) this.UIAnnotationRemoveFromAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(ta);
}});

Clazz.newMeth(C$, 'UIAnnotationsAddPosition$I$I', function (x, y) {
if (this._vp.isModifiable$()) {
var p=this._vp.panelToLogicPoint$java_awt_geom_Point2D_Double(Clazz.new_($I$(46,1).c$$D$D,[x, y]));
var annotationAdd=Clazz.new_([this._vp, (p.x|0), (p.y|0)],$I$(44,1).c$$fr_orsay_lri_varna_VARNAPanel$I$I);
annotationAdd.show$();
}});

Clazz.newMeth(C$, 'UIAnnotationsAddBase$I$I', function (x, y) {
if (this._vp.isModifiable$()) {
var mb=this._vp.getBaseAt$java_awt_geom_Point2D_Double(Clazz.new_($I$(46,1).c$$D$D,[x, y]));
if (mb != null ) {
this._vp.highlightSelectedBase$fr_orsay_lri_varna_models_rna_ModeleBase(mb);
var textAnnot=Clazz.new_($I$(45,1).c$$S$fr_orsay_lri_varna_models_rna_ModeleBase,["", mb]);
var annotationAdd=Clazz.new_($I$(44,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z,[this._vp, textAnnot, true]);
annotationAdd.show$();
}}});

Clazz.newMeth(C$, 'UIAnnotationsAddLoop$I$I', function (x, y) {
if (this._vp.isModifiable$()) {
try {
var mb=this._vp.getBaseAt$java_awt_geom_Point2D_Double(Clazz.new_($I$(46,1).c$$D$D,[x, y]));
if (mb != null ) {
var v=this._vp.getRNA$().getLoopBases$I(mb.getIndex$());
var mbs=this._vp.getRNA$().getBasesAt$java_util_Collection(v);
var textAnnot;
textAnnot=Clazz.new_(["", mbs, $I$(43).LOOP],$I$(45,1).c$$S$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType);
this._vp.setSelection$java_util_Collection(mbs);
var annotationAdd=Clazz.new_($I$(44,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z,[this._vp, textAnnot, true]);
annotationAdd.show$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'extractMaxContiguousPortion$java_util_ArrayList', function (m) {
var tab=Clazz.array($I$(47), [this._vp.getRNA$().getSize$()]);
for (var i=0; i < tab.length; i++) {
tab[i]=null;
}
for (var mb, $mb = m.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
tab[mb.getIndex$()]=mb;
}
var best=Clazz.new_($I$(17,1));
var current=Clazz.new_($I$(17,1));
for (var i=0; i < tab.length; i++) {
if (tab[i] != null ) {
current.add$O(tab[i]);
} else {
if (current.size$() > best.size$()) best=current;
current=Clazz.new_($I$(17,1));
}}
if (current.size$() > best.size$()) {
best=current;
}return best;
}, p$1);

Clazz.newMeth(C$, 'UIAnnotationsAddRegion$I$I', function (x, y) {
if (this._vp.isModifiable$()) {
var mb=this._vp.getSelection$().getBases$();
if (mb.size$() == 0) {
var m=this._vp.getBaseAt$java_awt_geom_Point2D_Double(Clazz.new_($I$(46,1).c$$D$D,[x, y]));
mb.add$O(m);
}mb=p$1.extractMaxContiguousPortion$java_util_ArrayList.apply(this, [p$1.extractMaxContiguousPortion$java_util_ArrayList.apply(this, [mb])]);
this._vp.setSelection$java_util_Collection(mb);
var regionAnnot=Clazz.new_($I$(48,1).c$$java_util_ArrayList,[mb]);
this._vp.addHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation(regionAnnot);
var annotationAdd=Clazz.new_($I$(49,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation,[this._vp, regionAnnot]);
if (!annotationAdd.show$()) {
this._vp.removeHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation(regionAnnot);
}this._vp.clearSelection$();
}});

Clazz.newMeth(C$, 'UIAnnotationsAddChemProb$I$I', function (x, y) {
if (this._vp.isModifiable$() && this._vp.getRNA$().getSize$() > 1 ) {
var p=this._vp.panelToLogicPoint$java_awt_geom_Point2D_Double(Clazz.new_($I$(46,1).c$$D$D,[x, y]));
var m1=this._vp.getBaseAt$java_awt_geom_Point2D_Double(Clazz.new_($I$(46,1).c$$D$D,[x, y]));
var best=null;
if (m1.getIndex$() - 1 >= 0) {
best=this._vp.getRNA$().getBaseAt$I(m1.getIndex$() - 1);
}if (m1.getIndex$() + 1 < this._vp.getRNA$().getSize$()) {
var m2=this._vp.getRNA$().getBaseAt$I(m1.getIndex$() + 1);
if (best == null ) {
best=m2;
} else {
if (best.getCoords$().distance$java_awt_geom_Point2D(p) > m2.getCoords$().distance$java_awt_geom_Point2D(p) ) {
best=m2;
}}}var tab=Clazz.new_($I$(17,1));
tab.add$O(m1);
tab.add$O(best);
this._vp.setSelection$java_util_Collection(tab);
var regionAnnot=Clazz.new_($I$(50,1).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase,[m1, best]);
this._vp.getRNA$().addChemProbAnnotation$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation(regionAnnot);
var annotationAdd=Clazz.new_($I$(51,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation,[this._vp, regionAnnot]);
if (!annotationAdd.show$()) {
this._vp.getRNA$().removeChemProbAnnotation$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation(regionAnnot);
}this._vp.clearSelection$();
}});

Clazz.newMeth(C$, 'UIAnnotationsAddHelix$I$I', function (x, y) {
if (this._vp.isModifiable$()) {
try {
var mb=this._vp.getBaseAt$java_awt_geom_Point2D_Double(Clazz.new_($I$(46,1).c$$D$D,[x, y]));
if (mb != null ) {
var v=this._vp.getRNA$().findHelix$I(mb.getIndex$());
var mbs=this._vp.getRNA$().getBasesAt$java_util_Collection(v);
var textAnnot;
textAnnot=Clazz.new_(["", mbs, $I$(43).HELIX],$I$(45,1).c$$S$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType);
this._vp.setSelection$java_util_Collection(mbs);
var annotationAdd=Clazz.new_($I$(44,1).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z,[this._vp, textAnnot, true]);
annotationAdd.show$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'UIToggleGaspinMode$', function () {
if (this._vp.isModifiable$()) {
this._vp.toggleDrawOutlineBases$();
this._vp.toggleFillBases$();
this._vp.repaint$();
}});

Clazz.newMeth(C$, 'UIAnnotationsAdd$', function () {
if (this._vp.isModifiable$()) {
var annotationAdd=Clazz.new_($I$(44,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
annotationAdd.show$();
}});

Clazz.newMeth(C$, 'UIEditAllBasePairs$', function () {
if (this._vp.isModifiable$()) {
Clazz.new_($I$(52,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
}});

Clazz.newMeth(C$, 'UIEditAllBases$', function () {
if (this._vp.isModifiable$()) {
Clazz.new_($I$(41,1).c$$fr_orsay_lri_varna_VARNAPanel$I,[this._vp, 2]);
}});

Clazz.newMeth(C$, 'UIAnnotationsRemove$', function () {
if (this._vp.isModifiable$()) {
Clazz.new_($I$(53,1).c$$fr_orsay_lri_varna_VARNAPanel$I,[this._vp, 0]);
}});

Clazz.newMeth(C$, 'UIAnnotationsEdit$', function () {
if (this._vp.isModifiable$()) {
Clazz.new_($I$(53,1).c$$fr_orsay_lri_varna_VARNAPanel$I,[this._vp, 1]);
}});

Clazz.newMeth(C$, 'UIAddBP$I$I$fr_orsay_lri_varna_models_rna_ModeleBP', function (i, j, ms) {
if (this._vp.isModifiable$()) {
this._vp.getRNA$().addBP$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(i, j, ms);
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(54,1).c$$I$I$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_VARNAPanel,[i, j, ms, this._vp]));
this._vp.repaint$();
var tmp=Clazz.new_($I$(55,1));
tmp.add$O(ms);
this._vp.fireStructureChanged$java_util_Set$java_util_Set$java_util_Set(Clazz.new_([this._vp.getRNA$().getAllBPs$()],$I$(55,1).c$$java_util_Collection), tmp, Clazz.new_($I$(55,1)));
}});

Clazz.newMeth(C$, 'UIRemoveBP$fr_orsay_lri_varna_models_rna_ModeleBP', function (ms) {
if (this._vp.isModifiable$()) {
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_([ms.getIndex5$(), ms.getIndex3$(), ms, this._vp],$I$(56,1).c$$I$I$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_VARNAPanel));
this._vp.getRNA$().removeBP$fr_orsay_lri_varna_models_rna_ModeleBP(ms);
this._vp.repaint$();
var tmp=Clazz.new_($I$(55,1));
tmp.add$O(ms);
this._vp.fireStructureChanged$java_util_Set$java_util_Set$java_util_Set(Clazz.new_([this._vp.getRNA$().getAllBPs$()],$I$(55,1).c$$java_util_Collection), Clazz.new_($I$(55,1)), tmp);
}});

Clazz.newMeth(C$, 'UIShiftBaseCoord$java_util_ArrayList$D$D', function (indices, dx, dy) {
if (this._vp.isModifiable$()) {
var backupPos=Clazz.new_($I$(5,1));
for (var index, $index = indices.iterator$(); $index.hasNext$()&&((index=($index.next$()).intValue$()),1);) {
var mb=this._vp.getRNA$().getBaseAt$I(index);
var d=mb.getCoords$();
backupPos.put$O$O(new Integer(index), d);
this._vp.getRNA$().setCoord$I$D$D(index, d.x + dx, d.y + dy);
this._vp.getRNA$().setCenter$I$D$D(index, mb.getCenter$().x + dx, mb.getCenter$().y + dy);
}
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(57,1).c$$java_util_ArrayList$D$D$fr_orsay_lri_varna_VARNAPanel,[indices, dx, dy, this._vp]));
this._vp.repaint$();
this._vp.fireLayoutChanged$java_util_Hashtable(backupPos);
}});

Clazz.newMeth(C$, 'UIShiftBaseCoord$java_util_ArrayList$java_awt_geom_Point2D_Double', function (indices, dv) {
this.UIShiftBaseCoord$java_util_ArrayList$D$D(indices, dv.x, dv.y);
});

Clazz.newMeth(C$, 'UIMoveSingleBase$I$D$D', function (index, nx, ny) {
if (this._vp.isModifiable$()) {
var mb=this._vp.getRNA$().getBaseAt$I(index);
var d=mb.getCoords$();
var backupPos=Clazz.new_($I$(5,1));
backupPos.put$O$O(new Integer(index), d);
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(58,1).c$$I$D$D$fr_orsay_lri_varna_VARNAPanel,[index, nx, ny, this._vp]));
this._vp.getRNA$().setCoord$I$D$D(index, nx, ny);
this._vp.repaint$();
this._vp.fireLayoutChanged$java_util_Hashtable(backupPos);
}});

Clazz.newMeth(C$, 'UIMoveSingleBase$I$java_awt_geom_Point2D_Double', function (index, dv) {
this.UIMoveSingleBase$I$D$D(index, dv.x, dv.y);
});

Clazz.newMeth(C$, 'UISetBaseCenter$I$D$D', function (index, x, y) {
this.UISetBaseCenter$I$java_awt_geom_Point2D_Double(index, Clazz.new_($I$(46,1).c$$D$D,[x, y]));
});

Clazz.newMeth(C$, 'UISetBaseCenter$I$java_awt_geom_Point2D_Double', function (index, p) {
if (this._vp.isModifiable$()) {
this._vp.getRNA$().setCenter$I$java_awt_geom_Point2D_Double(index, p);
}});

Clazz.newMeth(C$, 'UIUndo$', function () {
this._vp.undo$();
});

Clazz.newMeth(C$, 'UIRedo$', function () {
this._vp.redo$();
});

Clazz.newMeth(C$, 'UIMoveHelixAtom$I$java_awt_geom_Point2D_Double', function (index, newPos) {
if (this._vp.isModifiable$() && (index >= 0) && (index < this._vp.getRNA$().get_listeBases$().size$())  ) {
var indexTo=this._vp.getRNA$().get_listeBases$().get$I(index).getElementStructure$();
var h=this._vp.getRNA$().getHelixInterval$I(index);
var ml=this._vp.getRNA$().getMultiLoop$I(h.x);
var i=ml.x;
if (indexTo != -1) {
if (i == 0) {
if (this.shouldFlip$I$java_awt_geom_Point2D_Double(index, newPos)) {
this.UIFlipHelix$java_awt_Point(h);
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(59,1).c$$java_awt_Point$fr_orsay_lri_varna_VARNAPanel,[h, this._vp]));
}} else {
this.UIRotateHelixAtom$I$java_awt_geom_Point2D_Double(index, newPos);
}}this._vp.fireLayoutChanged$();
}});

Clazz.newMeth(C$, 'UIFlipHelix$java_awt_Point', function (h) {
var hBeg=h.x;
var hEnd=h.y;
var A=this._vp.getRNA$().getCoords$I(hBeg);
var B=this._vp.getRNA$().getCoords$I(hEnd);
var AB=Clazz.new_($I$(46,1).c$$D$D,[B.x - A.x, B.y - A.y]);
var normAB=Math.sqrt(AB.x * AB.x + AB.y * AB.y);
var O=A;
var Ox=Clazz.new_($I$(46,1).c$$D$D,[AB.x / normAB, AB.y / normAB]);
var old=Clazz.new_($I$(5,1));
for (var i=hBeg + 1; i < hEnd; i++) {
var P=this._vp.getRNA$().getCoords$I(i);
var nP=$I$(15).project$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(O, Ox, P);
old.put$O$O(new Integer(i), nP);
}
this._vp.getRNA$().flipHelix$java_awt_Point(h);
this._vp.fireLayoutChanged$java_util_Hashtable(old);
});

Clazz.newMeth(C$, 'shouldFlip$I$java_awt_geom_Point2D_Double', function (index, P) {
var h=this._vp.getRNA$().getHelixInterval$I(index);
var A=this._vp.getRNA$().getCoords$I(h.x);
var B=this._vp.getRNA$().getCoords$I(h.y);
var C=this._vp.getRNA$().getCoords$I(h.x + 1);
var hAB=Clazz.new_([B.y - A.y, -(B.x - A.x)],$I$(46,1).c$$D$D);
var AC=Clazz.new_($I$(46,1).c$$D$D,[C.x - A.x, C.y - A.y]);
var AP=Clazz.new_($I$(46,1).c$$D$D,[P.x - A.x, P.y - A.y]);
var signC=(hAB.x * AC.x + hAB.y * AC.y);
var signP=(hAB.x * AP.x + hAB.y * AP.y);
return (signC * signP < 0.0 );
});

Clazz.newMeth(C$, 'UIRotateHelixAtom$I$java_awt_geom_Point2D_Double', function (index, newPos) {
var h=this._vp.getRNA$().getHelixInterval$I(index);
var ml=this._vp.getRNA$().getMultiLoop$I(h.x);
var i=ml.x;
var prevIndex=h.x;
var nextIndex=h.y;
while (i <= ml.y){
var j=this._vp.getRNA$().get_listeBases$().get$I(i).getElementStructure$();
if ((j != -1) && (i < h.x) ) {
prevIndex=i;
}if ((j != -1) && (i > h.y) && (nextIndex == h.y)  ) {
nextIndex=i;
}if ((j > i) && (j < ml.y) ) {
i=this._vp.getRNA$().get_listeBases$().get$I(i).getElementStructure$();
} else {
i++;
}}
var oldPos=this._vp.getRNA$().getCoords$I(index);
var limitLoopLeft;
var limitLoopRight;
var limitLeft;
var limitRight;
var helixStart;
var helixStop;
var isDirect=this._vp.getRNA$().testDirectionality$I$I$I(ml.x, ml.y, h.x);
if (isDirect) {
limitLoopLeft=this._vp.getRNA$().getCoords$I(ml.y);
limitLoopRight=this._vp.getRNA$().getCoords$I(ml.x);
limitLeft=this._vp.getRNA$().getCoords$I(prevIndex);
limitRight=this._vp.getRNA$().getCoords$I(nextIndex);
helixStart=this._vp.getRNA$().getCoords$I(h.x);
helixStop=this._vp.getRNA$().getCoords$I(h.y);
} else {
limitLoopLeft=this._vp.getRNA$().getCoords$I(ml.x);
limitLoopRight=this._vp.getRNA$().getCoords$I(ml.y);
limitLeft=this._vp.getRNA$().getCoords$I(nextIndex);
limitRight=this._vp.getRNA$().getCoords$I(prevIndex);
helixStart=this._vp.getRNA$().getCoords$I(h.y);
helixStop=this._vp.getRNA$().getCoords$I(h.x);
}var center=this._vp.getRNA$().get_listeBases$().get$I(h.x).getCenter$();
var base=($I$(15).computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(center, limitLoopRight) + $I$(15).computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(center, limitLoopLeft)) / 2.0;
var pLimR=$I$(15).computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(center, limitLeft) - base;
var pHelR=$I$(15).computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(center, helixStart) - base;
var pNew=$I$(15).computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(center, newPos) - base;
var pOld=$I$(15).computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(center, oldPos) - base;
var pHelL=$I$(15).computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(center, helixStop) - base;
var pLimL=$I$(15).computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(center, limitRight) - base;
while (pLimR < 0.0 )pLimR += 6.283185307179586;

while (pHelR < pLimR )pHelR += 6.283185307179586;

while ((pNew < pHelR ))pNew += 6.283185307179586;

while ((pOld < pHelR ))pOld += 6.283185307179586;

while ((pHelL < pOld ))pHelL += 6.283185307179586;

while ((pLimL < pHelL ))pLimL += 6.283185307179586;

var minDelta=p$1.normalizeAngle$D.apply(this, [(pLimR - pHelR) + 0.25]);
var maxDelta=p$1.normalizeAngle$D.apply(this, [(pLimL - pHelL) - 0.25]);
while (maxDelta < minDelta )maxDelta += 6.283185307179586;

var delta=p$1.normalizeAngle$D.apply(this, [pNew - pOld]);
while (delta < minDelta )delta += 6.283185307179586;

if (delta > maxDelta ) {
var distanceMax=delta - maxDelta;
var distanceMin=minDelta - (delta - 6.283185307179586);
if (distanceMin < distanceMax ) {
delta=minDelta;
} else {
delta=maxDelta;
}}var corrected=$I$(15,"correctHysteresis$D",[(delta + base + (pHelR + pHelL) / 2.0 )]);
delta=corrected - (base + (pHelR + pHelL) / 2.0);
this._undoableEditSupport.postEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(60,1).c$$D$D$D$D$java_awt_Point$java_awt_Point$fr_orsay_lri_varna_VARNAPanel,[delta, base, pLimL, pLimR, h, ml, this._vp]));
this.UIRotateEverything$D$D$D$D$java_awt_Point$java_awt_Point(delta, base, pLimL, pLimR, h, ml);
});

Clazz.newMeth(C$, 'UIRotateEverything$D$D$D$D$java_awt_Point$java_awt_Point', function (delta, base, pLimL, pLimR, h, ml) {
var backupPos=Clazz.new_($I$(5,1));
this._vp.getRNA$().rotateEverything$D$D$D$D$java_awt_Point$java_awt_Point$java_util_Hashtable(delta, base, pLimL, pLimR, h, ml, backupPos);
this._vp.fireLayoutChanged$java_util_Hashtable(backupPos);
});

Clazz.newMeth(C$, 'normalizeAngle$D', function (angle) {
return p$1.normalizeAngle$D$D.apply(this, [angle, 0.0]);
}, p$1);

Clazz.newMeth(C$, 'normalizeAngle$D$D', function (angle, base) {
while (angle < base ){
angle += 6.283185307179586;
}
while (angle >= (6.283185307179586) - base ){
angle -= 6.283185307179586;
}
return angle;
}, p$1);

Clazz.newMeth(C$, 'UIThicknessBasePairs$java_util_ArrayList', function (bases) {
var vbpt=Clazz.new_($I$(61,1).c$$fr_orsay_lri_varna_VARNAPanel$java_util_ArrayList,[this._vp, bases]);
var cancel=((P$.VueUI$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "VueUI$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.vbpt.restoreThicknesses$();
this.b$['fr.orsay.lri.varna.views.VueUI']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueUI$34.$init$,[this, {vbpt:vbpt}]));
this.showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(vbpt.getPanel$(), "Set base pair(s) thickness", null, cancel, [cancel]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
