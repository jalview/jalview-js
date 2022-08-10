(function(){var P$=Clazz.newPackage("org.jmol.awt"),p$1={},I$=[[0,'java.beans.PropertyChangeSupport','java.awt.dnd.DropTarget','org.jmol.viewer.FileManager','javax.swing.JOptionPane','org.jmol.i18n.GT','javajs.util.SB','javajs.util.PT','org.jmol.util.Logger','java.awt.datatransfer.DataFlavor','java.beans.PropertyChangeEvent']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileDropper", null, null, 'java.awt.dnd.DropTargetListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['fd_oldFileName'],'O',['fd_propSupport','java.beans.PropertyChangeSupport','vwr','org.jmol.viewer.Viewer','pcl','java.beans.PropertyChangeListener','statusListener','org.jmol.api.JmolStatusListener','dropListener','org.jmol.api.JmolDropEditor']]]

Clazz.newMeth(C$, 'c$$org_jmol_api_JmolStatusListener$org_jmol_viewer_Viewer$org_jmol_api_JmolDropEditor', function (statusListener, vwr, dropListener) {
;C$.$init$.apply(this);
this.statusListener=statusListener;
this.dropListener=dropListener;
this.fd_oldFileName="";
this.fd_propSupport=Clazz.new_($I$(1,1).c$$O,[this]);
this.vwr=vwr;
this.addPropertyChangeListener$java_beans_PropertyChangeListener((this.pcl=((P$.FileDropper$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileDropper$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (evt) {
this.b$['org.jmol.awt.FileDropper'].doDrop$java_beans_PropertyChangeEvent.apply(this.b$['org.jmol.awt.FileDropper'], [evt]);
});
})()
), Clazz.new_(P$.FileDropper$1.$init$,[this, null]))));
var display=vwr.display;
display.setDropTarget$java_awt_dnd_DropTarget(Clazz.new_($I$(2,1).c$$java_awt_Component$java_awt_dnd_DropTargetListener,[display, this]));
display.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'dispose$', function () {
this.removePropertyChangeListener$java_beans_PropertyChangeListener(this.pcl);
this.vwr=null;
});

Clazz.newMeth(C$, 'loadFile$S$I$I', function (fname, x, y) {
if (this.dropListener != null ) {
this.dropListener.loadFile$S(fname);
return;
}if (fname.endsWith$S(".URL")) {
var data=this.vwr.getAsciiFileOrNull$S(fname);
if (data == null  || data.indexOf$S("URL=") < 0 ) return;
fname=data.substring$I(data.indexOf$S("URL=") + 4);
fname=fname.substring$I$I(0, fname.indexOf$S("\n"));
}fname=fname.replace$C$C("\\", "/").trim$();
if (fname.indexOf$S("://") < 0) fname=(fname.startsWith$S("/") ? "file://" : "file:///") + fname;
if (!this.vwr.setStatusDragDropped$I$I$I$S(0, x, y, fname)) return;
var flags=1;
var isScript=$I$(3).isScriptType$S(fname);
var isSurface=$I$(3).isSurfaceType$S(fname);
switch (this.vwr.ms.ac > 0 && !isScript  && !isSurface  ? $I$(4,"showConfirmDialog$java_awt_Component$O",[null, $I$(5).$$S("Would you like to replace the current model with the selected model?")]) : 0) {
case 2:
return;
case 0:
break;
default:
flags+=4;
break;
}
if (this.statusListener != null ) {
try {
var data=this.vwr.fm.getEmbeddedFileState$S$Z$S(fname, false, "state.spt");
if (data.indexOf$S("preferredWidthHeight") >= 0) this.vwr.sm.resizeInnerPanelString$S(data);
} catch (e) {
}
}this.vwr.openFileAsyncSpecial$S$I(fname, flags);
}, p$1);

Clazz.newMeth(C$, 'loadFiles$java_util_List', function (fileList) {
var sb=Clazz.new_($I$(6,1));
for (var i=0; i < fileList.size$(); ++i) {
var f=fileList.get$I(i);
var fname=f.getAbsolutePath$();
fname=fname.replace$C$C("\\", "/").trim$();
fname=(fname.startsWith$S("/") ? "file://" : "file:///") + fname;
sb.append$S("load ").append$S(i == 0 ? "" : "APPEND ").append$S($I$(7).esc$S(fname)).append$S(";\n");
}
sb.append$S("frame *;reset;");
this.vwr.script$S(sb.toString());
}, p$1);

Clazz.newMeth(C$, 'doDrop$java_beans_PropertyChangeEvent', function (evt) {
if ("inline".equals$O(evt.getPropertyName$())) {
this.vwr.openStringInline$S(evt.getNewValue$());
}});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (l) {
this.fd_propSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(l);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (l) {
this.fd_propSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(l);
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DropTargetDragEvent', function (dtde) {
if ($I$(8).debugging) $I$(8).debug$S("DropOver detected...");
});

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DropTargetDragEvent', function (dtde) {
if ($I$(8).debugging) $I$(8).debug$S("DropEnter detected...");
dtde.acceptDrag$I(3);
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DropTargetEvent', function (dtde) {
if ($I$(8).debugging) $I$(8).debug$S("DropExit detected...");
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DropTargetDragEvent', function (dtde) {
System.out.println$S("dropactionchanged");
});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent', function (dtde) {
if ($I$(8).debugging) $I$(8).debug$S("Drop detected...");
var t=dtde.getTransferable$();
var isAccepted=false;
if (t.isDataFlavorSupported$java_awt_datatransfer_DataFlavor($I$(9).javaFileListFlavor)) {
while (true){
var o=null;
try {
dtde.acceptDrop$I(3);
o=t.getTransferData$java_awt_datatransfer_DataFlavor($I$(9).javaFileListFlavor);
isAccepted=true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(8).error$S("transfer failed");
} else {
throw e;
}
}
if (Clazz.instanceOf(o, "java.util.List")) {
var fileList=o;
var length=fileList.size$();
if (length == 1) {
var fileName=fileList.get$I(0).getAbsolutePath$().trim$();
if (fileName.endsWith$S(".bmp")) break;
dtde.getDropTargetContext$().dropComplete$Z(true);
var loc=dtde.getLocation$();
p$1.loadFile$S$I$I.apply(this, [fileName, loc.x, loc.y]);
return;
}dtde.getDropTargetContext$().dropComplete$Z(true);
p$1.loadFiles$java_util_List.apply(this, [fileList]);
return;
}break;
}
}if ($I$(8).debugging) $I$(8).debug$S("browsing supported flavours to find something useful...");
var df=t.getTransferDataFlavors$();
if (df == null  || df.length == 0 ) return;
for (var i=0; i < df.length; ++i) {
var flavor=df[i];
var o=null;
if (true) {
$I$(8).info$S("df " + i + " flavor " + flavor );
$I$(8,"info$S",["  class: " + flavor.getRepresentationClass$().getName$()]);
$I$(8,"info$S",["  mime : " + flavor.getMimeType$()]);
}if (flavor.getMimeType$().startsWith$S("text/uri-list") && flavor.getRepresentationClass$().getName$().equals$O("java.lang.String") ) {
try {
if (!isAccepted) dtde.acceptDrop$I(3);
isAccepted=true;
o=t.getTransferData$java_awt_datatransfer_DataFlavor(flavor);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(8).errorEx$S$Throwable(null, e);
} else {
throw e;
}
}
if (Clazz.instanceOf(o, "java.lang.String")) {
if ($I$(8).debugging) {
$I$(8,"debug$S",["  String: " + o.toString()]);
}p$1.loadFile$S$I$I.apply(this, [o.toString(), 0, 0]);
dtde.getDropTargetContext$().dropComplete$Z(true);
return;
}} else if (flavor.getMimeType$().equals$O("application/x-java-serialized-object; class=java.lang.String")) {
try {
if (!isAccepted) dtde.acceptDrop$I(3);
isAccepted=true;
o=t.getTransferData$java_awt_datatransfer_DataFlavor(df[i]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(8).errorEx$S$Throwable(null, e);
} else {
throw e;
}
}
if (Clazz.instanceOf(o, "java.lang.String")) {
var content=o;
if ($I$(8).debugging) {
$I$(8).debug$S("  String: " + content);
}if (content.startsWith$S("file:/")) {
p$1.loadFile$S$I$I.apply(this, [content, 0, 0]);
} else {
var pce=Clazz.new_($I$(10,1).c$$O$S$O$O,[this, "inline", this.fd_oldFileName, content]);
this.fd_propSupport.firePropertyChange$java_beans_PropertyChangeEvent(pce);
}dtde.getDropTargetContext$().dropComplete$Z(true);
return;
}}}
if (!isAccepted) dtde.rejectDrop$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
