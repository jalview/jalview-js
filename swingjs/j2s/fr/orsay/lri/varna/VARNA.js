(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna"),I$=[[0,'fr.orsay.lri.varna.models.VARNAConfigLoader','java.awt.dnd.DropTarget','javax.swing.JOptionPane','java.awt.GridLayout','fr.orsay.lri.varna.VARNAPanel','fr.orsay.lri.varna.controlers.ControleurScriptParser']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VARNA", null, 'javax.swing.JApplet', ['fr.orsay.lri.varna.interfaces.InterfaceParameterLoader', 'java.awt.dnd.DropTargetListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
{

if (!thisApplet.__Info.sequenceDBN) { thisApplet.__Info.sequenceDBN = "GGGGCCAAUAUGGCCAUCC";
thisApplet.__Info.structureDBN = "((((((.....))))..))";
thisApplet.__Info.title = "Hello RNA world, from SwingJS!";//prompt("Title?","Hello RNA world!");
}
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vpl=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._vpl=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['init$','init'], function () {
try {
var VARNAcfg=Clazz.new_($I$(1).c$$fr_orsay_lri_varna_interfaces_InterfaceParameterLoader,[this]);
try {
this._vpl=VARNAcfg.createVARNAPanels$();
for (var i=0; i < this._vpl.size$(); i++) {
Clazz.new_($I$(2).c$$java_awt_Component$java_awt_dnd_DropTargetListener,[this._vpl.get$I(i), this]);
}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
$I$(3).showMessageDialog$java_awt_Component$O$S$I(this, e.getMessage$(), "VARNA Error", 0);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e = e$$;
{
$I$(3).showMessageDialog$java_awt_Component$O$S$I(this, e.getMessage$(), "VARNA Error", 0);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionLoadingFailed")){
var e = e$$;
{
$I$(3).showMessageDialog$java_awt_Component$O$S$I(this, e.getMessage$(), "VARNA Error", 0);
}
} else {
throw e$$;
}
}
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4).c$$I$I,[VARNAcfg.getNbColumns$(), VARNAcfg.getNbRows$()]));
for (var i=0; i < this._vpl.size$(); i++) {
this.getContentPane$().add$java_awt_Component(this._vpl.get$I(i));
}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionParameterError")){
var e = e$$;
{
$I$(5).errorDialogStatic$Exception$java_awt_Component(e, this);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionModeleStyleBaseSyntaxError")){
var e = e$$;
{
$I$(5).errorDialogStatic$Exception$java_awt_Component(e, this);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
var e = e$$;
{
$I$(5).errorDialogStatic$Exception$java_awt_Component(e, this);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, ['start$','start'], function () {
});

Clazz.newMeth(C$, ['update$','update'], function () {
System.out.println$S("update");
});

Clazz.newMeth(C$, ['getParameterValue$S$S','getParameterValue','getParameterValue$'], function (key, def) {
if (this.getParameter$S(key) == null ) {
return def;
} else {
return this.getParameter$S(key);
}});

Clazz.newMeth(C$, ['getParameterInfo$','getParameterInfo'], function () {
return $I$(1).getParameterInfo$();
});

Clazz.newMeth(C$, ['getPanels$','getPanels'], function () {
return this._vpl;
});

Clazz.newMeth(C$, ['getSelection$','getSelection'], function () {
return this.getSelection$I(0);
});

Clazz.newMeth(C$, ['getSelection$I','getSelection'], function (panel) {
var result="[";
var v=this._vpl.get$I(panel);
var l=v.getSelectionIndices$();
for (var i=0; i < l.size$(); i++) {
var n=(l.get$I(i)).intValue$();
if (i > 0) {
result += ",";
}result += n;
}
result += "]";
return result;
});

Clazz.newMeth(C$, ['runScript$S','runScript'], function (script) {
if (this._vpl.size$() > 0) {
var _vp=this._vpl.get$I(0);
try {
$I$(6).executeScript$fr_orsay_lri_varna_VARNAPanel$S(_vp, script);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, ['setRNA$S$S','setRNA'], function (seq, str) {
if (this._vpl.size$() > 0) {
try {
this._vpl.get$I(0).drawRNA$S$S(seq, str);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
e.printStackTrace$();
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, ['setSmoothedRNA$S$S','setSmoothedRNA'], function (seq, str) {
if (this._vpl.size$() > 0) {
try {
this._vpl.get$I(0).drawRNAInterpolated$S$S(seq, str);
this._vpl.get$I(0).repaint$();
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
e.printStackTrace$();
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, ['dragEnter$java_awt_dnd_DropTargetDragEvent','dragEnter'], function (arg0) {
});

Clazz.newMeth(C$, ['dragExit$java_awt_dnd_DropTargetEvent','dragExit'], function (arg0) {
});

Clazz.newMeth(C$, ['dragOver$java_awt_dnd_DropTargetDragEvent','dragOver'], function (arg0) {
});

Clazz.newMeth(C$, ['drop$java_awt_dnd_DropTargetDropEvent','drop'], function (dtde) {
try {
var tr=dtde.getTransferable$();
var flavors=tr.getTransferDataFlavors$();
for (var i=0; i < flavors.length; i++) {
if (flavors[i].isFlavorJavaFileListType$()) {
dtde.acceptDrop$I(3);
var list=tr.getTransferData$java_awt_datatransfer_DataFlavor(flavors[i]);
for (var j=0; j < list.size$(); j++) {
var o=list.get$I(j);
if (Clazz.instanceOf(dtde.getSource$(), "java.awt.dnd.DropTarget")) {
var dt=dtde.getSource$();
var c=dt.getComponent$();
if (Clazz.instanceOf(c, "fr.orsay.lri.varna.VARNAPanel")) {
var vp=c;
vp.loadFile$java_io_File$Z(o, true);
}}}
dtde.dropComplete$Z(true);
return;
}}
dtde.rejectDrop$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
dtde.rejectDrop$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, ['dropActionChanged$java_awt_dnd_DropTargetDragEvent','dropActionChanged'], function (arg0) {
});
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:41 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
