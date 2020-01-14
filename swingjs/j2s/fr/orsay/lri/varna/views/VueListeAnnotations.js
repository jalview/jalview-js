(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'javax.swing.JOptionPane','javax.swing.JFileChooser','java.awt.BorderLayout','java.util.ArrayList','fr.orsay.lri.varna.components.AnnotationTableModel','javax.swing.JTable','fr.orsay.lri.varna.controlers.ControleurTableAnnotations','javax.swing.JScrollPane','javax.swing.filechooser.FileFilter','javax.swing.JButton','fr.orsay.lri.varna.views.VueListeAnnotations','java.io.BufferedReader','java.io.FileReader','java.io.PrintWriter','javax.swing.JPanel','javax.swing.BoxLayout','javax.swing.Box','java.awt.Dimension']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueListeAnnotations", null, 'javax.swing.JPanel');
C$.fc=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.fc=((P$.VueListeAnnotations$1||
(function(){var C$=Clazz.newClass(P$, "VueListeAnnotations$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JFileChooser'), null, 1);

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
), Clazz.new_($I$(2), [this, null],P$.VueListeAnnotations$1));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this.data=null;
this.table=null;
this.type=0;
this.specialTableModel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$I', function (vp, type) {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(3))]);
C$.$init$.apply(this);
this.type=type;
this._vp=vp;
this.data=Clazz.new_($I$(4));
this.data.addAll$java_util_Collection(this._vp.getListeAnnotations$());
this.data.addAll$java_util_Collection(this._vp.getRNA$().getHighlightRegion$());
this.data.addAll$java_util_Collection(this._vp.getRNA$().getChemProbAnnotations$());
p$1.createView.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'createView', function () {
this.specialTableModel=Clazz.new_($I$(5).c$$java_util_ArrayList,[this.data]);
this.table=Clazz.new_($I$(6).c$$javax_swing_table_TableModel,[this.specialTableModel]);
var ctrl=Clazz.new_($I$(7).c$$javax_swing_JTable$fr_orsay_lri_varna_VARNAPanel$I,[this.table, this._vp, this.type]);
this.table.addMouseListener$java_awt_event_MouseListener(ctrl);
this.table.addMouseMotionListener$java_awt_event_MouseMotionListener(ctrl);
var scrollPane=Clazz.new_($I$(8).c$$java_awt_Component,[this.table]);
this.add$java_awt_Component$O(scrollPane, "Center");
var CPAFiles=((P$.VueListeAnnotations$2||
(function(){var C$=Clazz.newClass(P$, "VueListeAnnotations$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'accept$java_io_File', function (f) {
return f.getName$().toLowerCase$().endsWith$S(".cpa") || f.isDirectory$() ;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return "Chemical Probing Annotations (*.cpa) Files";
});
})()
), Clazz.new_($I$(9), [this, null],P$.VueListeAnnotations$2));
C$.fc.addChoosableFileFilter$javax_swing_filechooser_FileFilter(CPAFiles);
C$.fc.setFileFilter$javax_swing_filechooser_FileFilter(CPAFiles);
var loadStyleButton=Clazz.new_($I$(10).c$$S,["Load"]);
loadStyleButton.addActionListener$java_awt_event_ActionListener(((P$.VueListeAnnotations$3||
(function(){var C$=Clazz.newClass(P$, "VueListeAnnotations$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if ($I$(11).fc.showOpenDialog$java_awt_Component(this.b$['fr.orsay.lri.varna.views.VueListeAnnotations']) == 0) {
var file=$I$(11).fc.getSelectedFile$();
try {
var br=Clazz.new_($I$(12).c$$java_io_Reader,[Clazz.new_($I$(13).c$$java_io_File,[file])]);
var s=br.readLine$();
while (s != null ){
if (s.startsWith$S("TextAnnotation")) s=br.readLine$();
}
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
), Clazz.new_(P$.VueListeAnnotations$3.$init$, [this, null])));
var saveStyleButton=Clazz.new_($I$(10).c$$S,["Save"]);
saveStyleButton.addActionListener$java_awt_event_ActionListener(((P$.VueListeAnnotations$4||
(function(){var C$=Clazz.newClass(P$, "VueListeAnnotations$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if ($I$(11).fc.showSaveDialog$java_awt_Component(this.b$['fr.orsay.lri.varna.views.VueListeAnnotations']) == 0) {
try {
var out=Clazz.new_($I$(14).c$$java_io_File,[$I$(11).fc.getSelectedFile$()]);
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
), Clazz.new_(P$.VueListeAnnotations$4.$init$, [this, null])));
saveStyleButton.setAlignmentX$F(0.5);
loadStyleButton.setAlignmentX$F(0.5);
var jp2=Clazz.new_($I$(15));
var bl=Clazz.new_($I$(16).c$$java_awt_Container$I,[jp2, 0]);
jp2.setLayout$java_awt_LayoutManager(bl);
jp2.setAlignmentX$F(0.5);
jp2.add$java_awt_Component(loadStyleButton);
jp2.add$java_awt_Component($I$(17).createRigidArea$java_awt_Dimension(Clazz.new_($I$(18).c$$I$I,[5, 0])));
jp2.add$java_awt_Component(saveStyleButton);
this.add$java_awt_Component$O(jp2, "South");
this.UIvueListeAnnotations$();
}, p$1);

Clazz.newMeth(C$, 'UIvueListeAnnotations$', function () {
var newContentPane=this;
newContentPane.setOpaque$Z(true);
$I$(1).showMessageDialog$java_awt_Component$O$S$I(this._vp, newContentPane, "Annotation edition", -1);
});

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'setData$java_util_ArrayList', function (data) {
this.data=data;
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

Clazz.newMeth(C$, 'setSpecialTableModel$fr_orsay_lri_varna_components_AnnotationTableModel', function (specialTableModel) {
this.specialTableModel=specialTableModel;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
