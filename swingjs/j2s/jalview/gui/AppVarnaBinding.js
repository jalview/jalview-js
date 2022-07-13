(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.ArrayList','jalview.gui.AppVarnaBinding','fr.orsay.lri.varna.models.FullBackup','javax.swing.JPanel','java.awt.Color','javax.swing.DefaultListModel','javax.swing.DefaultListSelectionModel','fr.orsay.lri.varna.components.ReorderableJList','java.awt.event.MouseAdapter','java.awt.Dimension',['jalview.gui.AppVarnaBinding','.BackupHolder'],'fr.orsay.lri.varna.VARNAPanel','javax.swing.JScrollPane','javax.swing.JLabel','jalview.util.MessageManager','java.awt.BorderLayout','java.awt.dnd.DropTarget','java.awt.dnd.DropTargetAdapter','fr.orsay.lri.varna.factories.RNAFactory','java.io.File']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppVarnaBinding", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.ext.varna.JalviewVarnaBinding');
C$.$classes$=[['BackupHolder',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._listPanel=Clazz.new_($I$(4,1));
this._sideList=null;
this._backgroundColor=$I$(5).white;
},1);

C$.$fields$=[['Z',['_error'],'I',['_algoCode'],'O',['vp','fr.orsay.lri.varna.VARNAPanel','_listPanel','javax.swing.JPanel','_sideList','fr.orsay.lri.varna.components.ReorderableJList','_backgroundColor','java.awt.Color','_rnaList','jalview.gui.AppVarnaBinding.BackupHolder']]
,['I',['_nextID'],'S',['errorOpt']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init',  function () {
var dlm=Clazz.new_($I$(6,1));
var marginTools=40;
var m=Clazz.new_($I$(7,1));
m.setSelectionMode$I(0);
m.setLeadAnchorNotificationEnabled$Z(false);
this._sideList=Clazz.new_($I$(8,1));
this._sideList.setModel$javax_swing_ListModel(dlm);
this._sideList.addMouseListener$java_awt_event_MouseListener(((P$.AppVarnaBinding$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppVarnaBinding$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.gui.AppVarnaBinding'].mouseClicked$java_awt_event_MouseEvent.apply(this.b$['jalview.gui.AppVarnaBinding'], [e]);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.AppVarnaBinding$1)));
this._sideList.setSelectionModel$javax_swing_ListSelectionModel(m);
this._sideList.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[100, 0]));
this._sideList.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.AppVarnaBinding$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppVarnaBinding$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (evt) {
this.b$['jalview.gui.AppVarnaBinding'].changeSelectedStructure_actionPerformed$javax_swing_event_ListSelectionEvent.apply(this.b$['jalview.gui.AppVarnaBinding'], [evt]);
});
})()
), Clazz.new_(P$.AppVarnaBinding$2.$init$,[this, null])));
this._rnaList=Clazz.new_($I$(11,1).c$$javax_swing_DefaultListModel$javax_swing_JList,[this, null, dlm, this._sideList]);
try {
this.vp=Clazz.new_($I$(12,1).c$$S$S,["0", "."]);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
this.vp.errorDialog$Exception(e);
} else {
throw e;
}
}
this.vp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[400, 400]));
var listScroller=Clazz.new_($I$(13,1).c$$java_awt_Component,[this._sideList]);
listScroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[150, 0]));
this.vp.setBackground$java_awt_Color(this._backgroundColor);
var j=Clazz.new_([$I$(15).getString$S("label.structures_manager"), 0],$I$(14,1).c$$S$I);
this._listPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16,1)));
this._listPanel.add$java_awt_Component$O(j, "North");
this._listPanel.add$java_awt_Component$O(listScroller, "Center");
Clazz.new_([this.vp, ((P$.AppVarnaBinding$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppVarnaBinding$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.dnd.DropTargetAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent',  function (dtde) {
this.b$['jalview.gui.AppVarnaBinding'].drop$java_awt_dnd_DropTargetDropEvent.apply(this.b$['jalview.gui.AppVarnaBinding'], [dtde]);
});
})()
), Clazz.new_($I$(18,1),[this, null],P$.AppVarnaBinding$3))],$I$(17,1).c$$java_awt_Component$java_awt_dnd_DropTargetListener);
}, p$1);

Clazz.newMeth(C$, 'getListPanel$',  function () {
return this._listPanel;
});

Clazz.newMeth(C$, 'getSelectedRNA$',  function () {
var selectedIndex=this._sideList.getSelectedIndex$();
if (selectedIndex < 0) {
return null;
}var selected=this._rnaList.getElementAt$I(selectedIndex);
return selected.rna;
});

Clazz.newMeth(C$, 'updateSelectedRNA$fr_orsay_lri_varna_models_rna_RNA',  function (rnaEdit) {
this.vp.repaint$();
this.vp.showRNA$fr_orsay_lri_varna_models_rna_RNA(rnaEdit);
});

Clazz.newMeth(C$, 'generateDefaultName$',  function () {
return "User file #" + C$._nextID++;
}, 1);

Clazz.newMeth(C$, 'getParameterInfo$',  function () {
var info=Clazz.array(String, -2, [Clazz.array(String, -1, ["sequenceDBN", "String", "A raw RNA sequence"]), Clazz.array(String, -1, ["structureDBN", "String", "An RNA structure in dot bracket notation (DBN)"]), Clazz.array(String, -1, [C$.errorOpt, "boolean", "To show errors"])]);
return info;
});

Clazz.newMeth(C$, 'getSafeColor$S$java_awt_Color',  function (col, def) {
var result;
try {
result=$I$(5).decode$S(col);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
try {
result=$I$(5).getColor$S$java_awt_Color(col, def);
} catch (e2) {
if (Clazz.exceptionOf(e2,"Exception")){
return def;
} else {
throw e2;
}
}
} else {
throw e;
}
}
return result;
}, p$1);

Clazz.newMeth(C$, 'get_varnaPanel$',  function () {
return this.vp;
});

Clazz.newMeth(C$, 'set_varnaPanel$fr_orsay_lri_varna_VARNAPanel',  function (surface) {
this.vp=surface;
});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent',  function (dtde) {
try {
var tr=dtde.getTransferable$();
var flavors=tr.getTransferDataFlavors$();
for (var i=0; i < flavors.length; i++) {
if (flavors[i].isFlavorJavaFileListType$()) {
dtde.acceptDrop$I(3);
var ob=tr.getTransferData$java_awt_datatransfer_DataFlavor(flavors[i]);
if (Clazz.instanceOf(ob, "java.util.List")) {
var list=ob;
for (var j=0; j < list.size$(); j++) {
var o=list.get$I(j);
if (Clazz.instanceOf(dtde.getSource$(), "java.awt.dnd.DropTarget")) {
var dt=dtde.getSource$();
var c=dt.getComponent$();
if (Clazz.instanceOf(c, "fr.orsay.lri.varna.VARNAPanel")) {
var path=o.toString();
var varnaPanel=c;
try {
var bck=$I$(12).importSession$S(path);
this._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(bck.config, bck.rna, bck.name, true);
} catch (e3) {
if (Clazz.exceptionOf(e3,"fr.orsay.lri.varna.exceptions.ExceptionLoadingFailed")){
var mn=1;
var mdls=$I$(19).loadSecStr$S(path);
for (var r, $r = mdls.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
r.drawRNA$fr_orsay_lri_varna_models_VARNAConfig(varnaPanel.getConfig$());
var name=r.getName$();
if (name.equals$O("")) {
name=path.substring$I(path.lastIndexOf$I($I$(20).separatorChar) + 1);
}if (mdls.size$() > 1) {
name+=" (Model " + mn++ + ")" ;
}this._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(varnaPanel.getConfig$().clone$(), r, name, true);
}
} else {
throw e3;
}
}
}}}
}dtde.dropComplete$Z(true);
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

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (e.getClickCount$() == 2) {
var index=this._sideList.locationToIndex$java_awt_Point(e.getPoint$());
var dlm=this._sideList.getModel$();
this._sideList.ensureIndexIsVisible$I(index);
}});

Clazz.newMeth(C$, 'getStructureFiles$',  function () {
return null;
});

Clazz.newMeth(C$, 'releaseReferences$O',  function (svl) {
});

Clazz.newMeth(C$, 'updateColours$O',  function (source) {
});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$, 'highlightAtoms$java_util_List',  function (atoms) {
});

Clazz.newMeth(C$, 'isListeningFor$jalview_datamodel_SequenceI',  function (seq) {
return true;
});

Clazz.newMeth(C$, 'getStateInfo$fr_orsay_lri_varna_models_rna_RNA',  function (rna) {
if (this.vp == null ) {
return null;
}var sel=this._sideList.getSelectedValue$();
var model=null;
var models=this._sideList.getModel$();
for (var i=0; i < models.getSize$(); i++) {
model=models.getElementAt$I(i);
if (model.rna === rna ) {
break;
}}
if (model == null ) {
return null;
}this.vp.showRNA$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig(model.rna, model.config);
try {
var temp;
temp=$I$(20).createTempFile$S$S("varna", null);
temp.deleteOnExit$();
var filePath=temp.getAbsolutePath$();
this.vp.toXML$S(filePath);
this.vp.showRNA$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig(sel.rna, sel.config);
return filePath;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getSelectedIndex$',  function () {
return this._sideList.getSelectedIndex$();
});

Clazz.newMeth(C$, 'changeSelectedStructure_actionPerformed$javax_swing_event_ListSelectionEvent',  function (evt) {
if (!evt.getValueIsAdjusting$()) {
this.showSelectedStructure$();
}});

Clazz.newMeth(C$, 'showSelectedStructure$',  function () {
var sel=this._sideList.getSelectedValue$();
if (sel != null ) {
this.vp.showRNA$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig(sel.rna, sel.config);
}});

Clazz.newMeth(C$, 'setSelectedIndex$I',  function (selectedRna) {
this._sideList.setSelectedIndex$I(selectedRna);
});

Clazz.newMeth(C$, 'addStructure$fr_orsay_lri_varna_models_rna_RNA',  function (rna) {
var config=this.vp.getConfig$().clone$();
this.addStructure$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig(rna, config);
});

Clazz.newMeth(C$, 'addStructure$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig',  function (rna, config) {
this.drawRna$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig(rna, config);
this._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S(config, rna, rna.getName$());
});

Clazz.newMeth(C$, 'drawRna$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig',  function (rna, config) {
try {
rna.drawRNA$I$fr_orsay_lri_varna_models_VARNAConfig(rna.getDrawMode$(), config);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNAViewAlgorithm")){
System.err.println$S("Error drawing RNA: " + e.getMessage$());
} else {
throw e;
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.errorOpt="error";
C$._nextID=1;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AppVarnaBinding, "BackupHolder", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._rnas=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['_rnalist','javax.swing.DefaultListModel','_rnas','java.util.List','_l','javax.swing.JList']]]

Clazz.newMeth(C$, 'c$$javax_swing_DefaultListModel$javax_swing_JList',  function (rnaList, l) {
;C$.$init$.apply(this);
this._rnalist=rnaList;
this._l=l;
}, 1);

Clazz.newMeth(C$, 'add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S',  function (c, r, name) {
this.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(c, r, name, false);
});

Clazz.newMeth(C$, 'add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z',  function (c, r, name, select) {
if (select) {
this._l.removeSelectionInterval$I$I(0, this._rnalist.size$());
}if (name.equals$O("")) {
name=$I$(2).generateDefaultName$();
}var bck=Clazz.new_($I$(3,1).c$$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S,[c, r, name]);
this._rnas.add$O(r);
this._rnalist.addElement$O(bck);
if (select) {
this._l.setSelectedIndex$I(0);
}});

Clazz.newMeth(C$, 'getElementAt$I',  function (i) {
return this._rnalist.getElementAt$I(i);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:33 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
