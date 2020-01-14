(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'javax.swing.JOptionPane','javax.swing.JFileChooser','javax.swing.JLabel','fr.orsay.lri.varna.components.GradientEditorPanel','java.awt.Dimension','javax.swing.JPanel','javax.swing.JTextField','java.awt.Font',['fr.orsay.lri.varna.models.rna.ModeleColorMap','.NamedColorMapTypes'],'java.util.Arrays','javax.swing.JComboBox','javax.swing.filechooser.FileFilter','javax.swing.BoxLayout','javax.swing.JButton','fr.orsay.lri.varna.views.VueColorMapStyle','java.io.FileInputStream','fr.orsay.lri.varna.models.rna.ModeleColorMap','java.io.PrintWriter','java.awt.BorderLayout','javax.swing.Box']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueColorMapStyle", null, 'javax.swing.JPanel', ['java.awt.event.ActionListener', 'java.awt.event.ItemListener', 'java.beans.PropertyChangeListener']);
C$.fc=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.fc=((P$.VueColorMapStyle$1||
(function(){var C$=Clazz.newClass(P$, "VueColorMapStyle$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JFileChooser'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'approveSelection$', function () {
var f=this.getSelectedFile$();
if (f.exists$() && this.getDialogType$() == 1 ) {
var result=$I$(1).showConfirmDialog$java_awt_Component$O$S$I(this, "The file exists, overwrite?", "Existing file", 0);
switch (result) {
case 0:
C$.superclazz.prototype.approveSelection$.apply(this, []);
return;
case 1:
return;
case -1:
return;
case 2:
this.cancelSelection$();
return;
}
}C$.superclazz.prototype.approveSelection$.apply(this, []);
});
})()
), Clazz.new_($I$(2), [this, null],P$.VueColorMapStyle$1));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this._gp=null;
this._cb=null;
this._code=null;
this._backup=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this._vp=vp;
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init', function () {
var gradientCaption=Clazz.new_($I$(3).c$$S,["Click gradient to add new color..."]);
this._gp=Clazz.new_($I$(4).c$$fr_orsay_lri_varna_models_rna_ModeleColorMap,[this._vp.getColorMap$().clone$()]);
this._backup=this._vp.getColorMap$();
this._gp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(5).c$$I$I,[300, 70]));
this._gp.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
var codePanel=Clazz.new_($I$(6));
var codeCaption=Clazz.new_($I$(3).c$$S,["Param. code: "]);
codeCaption.setVisible$Z(true);
this._code=Clazz.new_($I$(7).c$$S,[""]);
this._code.setFont$java_awt_Font($I$(8).decode$S("Monospaced-PLAIN-12"));
this._code.setEditable$Z(true);
this._code.addFocusListener$java_awt_event_FocusListener(((P$.VueColorMapStyle$2||
(function(){var C$=Clazz.newClass(P$, "VueColorMapStyle$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (arg0) {
this.b$['fr.orsay.lri.varna.views.VueColorMapStyle']._code.setSelectionStart$I(0);
this.b$['fr.orsay.lri.varna.views.VueColorMapStyle']._code.setSelectionEnd$I(this.b$['fr.orsay.lri.varna.views.VueColorMapStyle']._code.getText$().length$());
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (arg0) {
});
})()
), Clazz.new_(P$.VueColorMapStyle$2.$init$, [this, null])));
this._code.setVisible$Z(false);
var palettes=$I$(9).values$();
$I$(10).sort$TTA$java_util_Comparator(palettes, ((P$.VueColorMapStyle$3||
(function(){var C$=Clazz.newClass(P$, "VueColorMapStyle$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$fr_orsay_lri_varna_models_rna_ModeleColorMap_NamedColorMapTypes$fr_orsay_lri_varna_models_rna_ModeleColorMap_NamedColorMapTypes','compare$','compare$TT$TT'], function (arg0, arg1) {
return arg0.getId$().compareTo$S(arg1.getId$());
});
})()
), Clazz.new_(P$.VueColorMapStyle$3.$init$, [this, null])));
var finalArray=Clazz.array(java.lang.Object, [palettes.length + 1]);
var selected=-1;
for (var i=0; i < palettes.length; i++) {
if (palettes[i].getColorMap$().equals$fr_orsay_lri_varna_models_rna_ModeleColorMap(this._vp.getColorMap$())) {
selected=i;
}finalArray[i]=palettes[i];
}
var custom= String.instantialize("Custom...");
finalArray[palettes.length]=custom;
this._cb=Clazz.new_($I$(11).c$$TEA,[finalArray]);
if (selected != -1) {
this._cb.setSelectedIndex$I(selected);
} else {
this._cb.setSelectedItem$O(new Integer(finalArray.length - 1));
}this._cb.addItemListener$java_awt_event_ItemListener(this);
this._code.setText$S(this.getTextRepresentation$());
var CMSFiles=((P$.VueColorMapStyle$4||
(function(){var C$=Clazz.newClass(P$, "VueColorMapStyle$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'accept$java_io_File', function (f) {
return f.getName$().toLowerCase$().endsWith$S(".cms") || f.isDirectory$() ;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return "Color Map (*.cms) Files";
});
})()
), Clazz.new_($I$(12), [this, null],P$.VueColorMapStyle$4));
C$.fc.addChoosableFileFilter$javax_swing_filechooser_FileFilter(CMSFiles);
C$.fc.setFileFilter$javax_swing_filechooser_FileFilter(CMSFiles);
codePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[codePanel, 2]));
codePanel.add$java_awt_Component(codeCaption);
codePanel.add$java_awt_Component(this._code);
var loadStyleButton=Clazz.new_($I$(14).c$$S,["Load"]);
loadStyleButton.addActionListener$java_awt_event_ActionListener(((P$.VueColorMapStyle$5||
(function(){var C$=Clazz.newClass(P$, "VueColorMapStyle$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if ($I$(15).fc.showOpenDialog$java_awt_Component(this.b$['fr.orsay.lri.varna.views.VueColorMapStyle']) == 0) {
var file=$I$(15).fc.getSelectedFile$();
try {
var fis=Clazz.new_($I$(16).c$$java_io_File,[file]);
var data=Clazz.array(Byte.TYPE, [(file.length$()|0)]);
fis.read$BA(data);
fis.close$();
var str= String.instantialize(data).trim$();
var ns=$I$(17).parseColorMap$S(str);
this.b$['fr.orsay.lri.varna.views.VueColorMapStyle']._gp.setColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap(ns);
p$1.refreshCode.apply(this.b$['fr.orsay.lri.varna.views.VueColorMapStyle'], []);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e1 = e$$;
{
e1.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e1 = e$$;
{
e1.printStackTrace$();
}
} else {
throw e$$;
}
}
}});
})()
), Clazz.new_(P$.VueColorMapStyle$5.$init$, [this, null])));
var saveStyleButton=Clazz.new_($I$(14).c$$S,["Save"]);
saveStyleButton.addActionListener$java_awt_event_ActionListener(((P$.VueColorMapStyle$6||
(function(){var C$=Clazz.newClass(P$, "VueColorMapStyle$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if ($I$(15).fc.showSaveDialog$java_awt_Component(this.b$['fr.orsay.lri.varna.views.VueColorMapStyle']) == 0) {
try {
var out=Clazz.new_($I$(18).c$$java_io_File,[$I$(15).fc.getSelectedFile$()]);
out.println$S(this.b$['fr.orsay.lri.varna.views.VueColorMapStyle']._gp.getColorMap$().getParamEncoding$());
out.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e1 = e$$;
{
e1.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e1 = e$$;
{
e1.printStackTrace$();
}
} else {
throw e$$;
}
}
}});
})()
), Clazz.new_(P$.VueColorMapStyle$6.$init$, [this, null])));
saveStyleButton.setAlignmentX$F(0.5);
loadStyleButton.setAlignmentX$F(0.5);
var jp=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(19))]);
jp.add$java_awt_Component$O(this._cb, "Center");
var jp2=Clazz.new_($I$(6));
jp2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[jp2, 0]));
jp2.add$java_awt_Component($I$(20).createRigidArea$java_awt_Dimension(Clazz.new_($I$(5).c$$I$I,[5, 0])));
jp2.add$java_awt_Component(loadStyleButton);
jp2.add$java_awt_Component($I$(20).createRigidArea$java_awt_Dimension(Clazz.new_($I$(5).c$$I$I,[5, 0])));
jp2.add$java_awt_Component(saveStyleButton);
jp.add$java_awt_Component$O(jp2, "East");
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[this, 1]));
this.add$java_awt_Component(jp);
this.add$java_awt_Component($I$(20).createVerticalStrut$I(10));
this.add$java_awt_Component(this._gp);
this.add$java_awt_Component(gradientCaption);
}, p$1);

Clazz.newMeth(C$, 'getTextRepresentation$', function () {
var selected=this._cb.getSelectedIndex$();
if ((selected != -1) && (selected < this._cb.getItemCount$() - 1) ) {
return (this._cb.getSelectedItem$()).getId$();
} else {
return this._gp.getColorMap$().getParamEncoding$();
}});

Clazz.newMeth(C$, 'cancelChanges$', function () {
this._vp.setColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap(this._backup);
});

Clazz.newMeth(C$, 'getColorMap$', function () {
return this._gp.getColorMap$();
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
});

Clazz.newMeth(C$, 'refreshCode', function () {
var selected=-1;
var n=null;
for (var i=0; i < this._cb.getItemCount$() - 1; i++) {
var o=this._cb.getItemAt$I(i);
if (Clazz.instanceOf(o, "fr.orsay.lri.varna.models.rna.ModeleColorMap.NamedColorMapTypes")) {
var ni=o;
if (ni.getColorMap$().equals$fr_orsay_lri_varna_models_rna_ModeleColorMap(this._gp.getColorMap$())) {
selected=i;
n=ni;
}}}
if (selected != -1) {
this._code.setText$S(n.getId$());
}this._code.setText$S(this.getTextRepresentation$());
this._vp.setColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap(this._gp.getColorMap$());
this._gp.repaint$();
}, p$1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (arg0) {
if (arg0.getStateChange$() == 1) {
var o=arg0.getItem$();
if (Clazz.instanceOf(o, "fr.orsay.lri.varna.models.rna.ModeleColorMap.NamedColorMapTypes")) {
var n=(o);
var m=n.getColorMap$().clone$();
m.setMinValue$D(this._backup.getMinValue$());
m.setMaxValue$D(this._backup.getMaxValue$());
this._gp.setColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap(m);
p$1.refreshCode.apply(this, []);
}}});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (arg0) {
if (arg0.getPropertyName$().equals$O("PaletteChanged")) {
this._cb.setSelectedIndex$I(this._cb.getItemCount$() - 1);
p$1.refreshCode.apply(this, []);
};});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
