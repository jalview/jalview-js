(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.webexport"),p$1={},p$2={},I$=[[0,'org.openscience.jmol.app.webexport.Widgets','java.awt.Checkbox','javax.swing.JTextField','org.openscience.jmol.app.webexport.WebExport','org.jmol.i18n.GT','javax.swing.JList','javax.swing.DefaultListModel','org.openscience.jmol.app.webexport.ArrayListTransferHandler',['org.openscience.jmol.app.webexport.WebPanel','.InstanceCellRenderer'],'java.awt.Dimension','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JLabel','javax.swing.JButton','javax.swing.BorderFactory','javax.swing.BoxLayout','org.openscience.jmol.app.jmolpanel.GuiMap','javax.swing.ImageIcon','org.openscience.jmol.app.jmolpanel.HelpDialog','javax.swing.JOptionPane','org.openscience.jmol.app.webexport.JmolInstance','org.openscience.jmol.app.webexport.LogPanel','java.io.File','javajs.util.Lst','org.jmol.viewer.FileManager','java.util.ArrayList','java.io.FileOutputStream','javajs.util.PT','StringBuilder','javajs.util.BS','java.util.zip.GZIPOutputStream','java.util.zip.ZipFile','org.jmol.util.Logger','java.net.URLDecoder','java.awt.datatransfer.DataFlavor',['org.openscience.jmol.app.webexport.ArrayListTransferHandler','.ArrayListTransferable']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrayListTransferHandler", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.TransferHandler');
C$.$classes$=[['ArrayListTransferable',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.localArrayListType="application/x-java-jvm-local-objectref;class=java.util.ArrayList";
this.source=null;
this.sourceIndices=null;
this.addIndex=-1;
this.addCount=0;
},1);

C$.$fields$=[['I',['addIndex','addCount'],'S',['localArrayListType'],'O',['localArrayListFlavor','java.awt.datatransfer.DataFlavor','+serialArrayListFlavor','source','javax.swing.JList','sourceIndices','int[]','webPanel','org.openscience.jmol.app.webexport.WebPanel']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_webexport_WebPanel', function (webPanel) {
Clazz.super_(C$, this);
this.webPanel=webPanel;
try {
this.localArrayListFlavor=Clazz.new_($I$(36,1).c$$S,[this.localArrayListType]);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
System.out.println$S("ArrayListTransferHandler: unable to create data flavor");
} else {
throw e;
}
}
this.serialArrayListFlavor=Clazz.new_([Clazz.getClass($I$(27)), "ArrayList"],$I$(36,1).c$$Class$S);
}, 1);

Clazz.newMeth(C$, 'importData$javax_swing_JComponent$java_awt_datatransfer_Transferable', function (c, t) {
if (this.sourceIndices == null  || !this.canImport$javax_swing_JComponent$java_awt_datatransfer_DataFlavorA(c, t.getTransferDataFlavors$()) ) {
return false;
}var target=null;
var alist=null;
try {
target=c;
if (p$2.hasLocalArrayListFlavor$java_awt_datatransfer_DataFlavorA.apply(this, [t.getTransferDataFlavors$()])) {
alist=t.getTransferData$java_awt_datatransfer_DataFlavor(this.localArrayListFlavor);
} else if (p$2.hasSerialArrayListFlavor$java_awt_datatransfer_DataFlavorA.apply(this, [t.getTransferDataFlavors$()])) {
alist=t.getTransferData$java_awt_datatransfer_DataFlavor(this.serialArrayListFlavor);
} else {
return false;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.awt.datatransfer.UnsupportedFlavorException")){
var ufe = e$$;
{
$I$(34).error$S("importData: unsupported data flavor");
return false;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
$I$(34).error$S("importData: I/O exception");
return false;
}
} else {
throw e$$;
}
}
var targetIndex=target.getSelectedIndex$();
if (this.source.equals$O(target)) {
if (targetIndex >= this.sourceIndices[0] && targetIndex <= this.sourceIndices[this.sourceIndices.length - 1] ) {
this.sourceIndices=null;
return true;
}}var listModel=target.getModel$();
var max=listModel.getSize$();
if (targetIndex < 0) {
targetIndex=max;
} else {
if (this.sourceIndices[0] < targetIndex) targetIndex++;
if (targetIndex > max) {
targetIndex=max;
}}this.addIndex=targetIndex;
this.addCount=alist.size$();
for (var i=0; i < alist.size$(); i++) {
(listModel).add$I$O(targetIndex++, C$.objectOf$javax_swing_DefaultListModel$O(listModel, alist.get$I(i)));
}
return true;
});

Clazz.newMeth(C$, 'objectOf$javax_swing_DefaultListModel$O', function (listModel, objectName) {
if (Clazz.instanceOf(objectName, "java.lang.String")) {
var name=objectName;
var o;
for (var i=listModel.size$(); --i >= 0; ) if (!(Clazz.instanceOf((o=listModel.get$I(i)), "java.lang.String")) && o.toString().equals$O(name) ) return listModel.get$I(i);

}return objectName;
}, 1);

Clazz.newMeth(C$, 'exportDone$javax_swing_JComponent$java_awt_datatransfer_Transferable$I', function (c, data, action) {
if ((action == 2) && (this.sourceIndices != null ) ) {
var model=this.source.getModel$();
if (this.addCount > 0) {
for (var i=0; i < this.sourceIndices.length; i++) {
if (this.sourceIndices[i] > this.addIndex) {
this.sourceIndices[i]+=this.addCount;
}}
}for (var i=this.sourceIndices.length - 1; i >= 0; i--) model.remove$I(this.sourceIndices[i]);

(c).setSelectedIndices$IA(Clazz.array(Integer.TYPE, -1, []));
if (this.webPanel != null ) this.webPanel.syncLists$();
}this.sourceIndices=null;
this.addIndex=-1;
this.addCount=0;
});

Clazz.newMeth(C$, 'hasLocalArrayListFlavor$java_awt_datatransfer_DataFlavorA', function (flavors) {
if (this.localArrayListFlavor == null ) {
return false;
}for (var i=0; i < flavors.length; i++) {
if (flavors[i].equals$java_awt_datatransfer_DataFlavor(this.localArrayListFlavor)) {
return true;
}}
return false;
}, p$2);

Clazz.newMeth(C$, 'hasSerialArrayListFlavor$java_awt_datatransfer_DataFlavorA', function (flavors) {
if (this.serialArrayListFlavor == null ) {
return false;
}for (var i=0; i < flavors.length; i++) {
if (flavors[i].equals$java_awt_datatransfer_DataFlavor(this.serialArrayListFlavor)) {
return true;
}}
return false;
}, p$2);

Clazz.newMeth(C$, 'canImport$javax_swing_JComponent$java_awt_datatransfer_DataFlavorA', function (c, flavors) {
if (p$2.hasLocalArrayListFlavor$java_awt_datatransfer_DataFlavorA.apply(this, [flavors])) {
return true;
}if (p$2.hasSerialArrayListFlavor$java_awt_datatransfer_DataFlavorA.apply(this, [flavors])) {
return true;
}return false;
});

Clazz.newMeth(C$, 'createTransferable$javax_swing_JComponent', function (c) {
if (Clazz.instanceOf(c, "javax.swing.JList")) {
this.source=c;
this.sourceIndices=this.source.getSelectedIndices$();
var values=this.source.getSelectedValuesList$();
if (values == null  || values.size$() == 0 ) {
return null;
}var alist=Clazz.new_($I$(25,1));
for (var i=0; i < values.size$(); i++) {
var o=values.get$I(i);
var str=o.toString();
if (str == null ) str="";
alist.addLast$O(str);
}
return Clazz.new_($I$(37,1).c$$javajs_util_Lst,[this, null, alist]);
}return null;
});

Clazz.newMeth(C$, 'getSourceActions$javax_swing_JComponent', function (c) {
return 3;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayListTransferHandler, "ArrayListTransferable", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.datatransfer.Transferable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['data','javajs.util.Lst']]]

Clazz.newMeth(C$, 'c$$javajs_util_Lst', function (alist) {
;C$.$init$.apply(this);
this.data=alist;
}, 1);

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor', function (flavor) {
if (!this.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(flavor)) {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[flavor]);
}return this.data;
});

Clazz.newMeth(C$, 'getTransferDataFlavors$', function () {
return Clazz.array($I$(36), -1, [this.b$['org.openscience.jmol.app.webexport.ArrayListTransferHandler'].localArrayListFlavor, this.b$['org.openscience.jmol.app.webexport.ArrayListTransferHandler'].serialArrayListFlavor]);
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor', function (flavor) {
if (this.b$['org.openscience.jmol.app.webexport.ArrayListTransferHandler'].localArrayListFlavor.equals$java_awt_datatransfer_DataFlavor(flavor)) {
return true;
}if (this.b$['org.openscience.jmol.app.webexport.ArrayListTransferHandler'].serialArrayListFlavor.equals$java_awt_datatransfer_DataFlavor(flavor)) {
return true;
}return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
