(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.util.MessageManager','jalview.bin.Jalview','jalview.io.JalviewFileView','jalview.bin.Cache','jalview.util.Platform','java.util.concurrent.atomic.AtomicBoolean',['jalview.util.ImageMaker','.TYPE'],'jalview.gui.LineartOptions','jalview.util.ImageMaker']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ImageExporter", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.messageBoard=null;
this.imageWriter=null;
this.imageType=null;
this.title=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_ImageExporter_ImageWriterI$jalview_gui_IProgressIndicator$jalview_util_ImageMaker_TYPE$S', function (writer, statusBar, type, fileTitle) {
C$.$init$.apply(this);
this.imageWriter=writer;
this.messageBoard=statusBar;
this.imageType=type;
this.title=fileTitle;
}, 1);

Clazz.newMeth(C$, 'doExport$java_io_File$java_awt_Component$I$I$S', function (file, parent, width, height, imageSource) {
var messageId=System.currentTimeMillis$();
this.setStatus$S$J($I$(1).formatMessage$S$OA("status.exporting_alignment_as_x_file", [this.imageType]), messageId);
if (file == null  && !$I$(2).isHeadlessMode$() ) {
var chooser=this.imageType.getFileChooser$();
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(3)));
$I$(1).formatMessage$S$OA("label.create_image_of", [this.imageType.getName$(), imageSource]);
var title="Create " + this.imageType.getName$() + " image from alignment" ;
chooser.setDialogTitle$S(title);
chooser.setToolTipText$S($I$(1).getString$S("action.save"));
var value=chooser.showSaveDialog$java_awt_Component(parent);
if (value != 0) {
var msg=$I$(1).formatMessage$S$OA("status.cancelled_image_export_operation", [this.imageType.$name]);
this.setStatus$S$J(msg, messageId);
return;
}$I$(4).setProperty$S$S("LAST_DIRECTORY", chooser.getSelectedFile$().getParent$());
file=chooser.getSelectedFile$();
}var renderStyle=$I$(4).getDefault$S$S(this.imageType.getName$() + "_RENDERING", "Prompt each time");
if ($I$(5).isJS$()) {
renderStyle="Text";
}var textSelected=Clazz.new_($I$(6).c$$Z,[!"Lineart".equals$O(renderStyle)]);
if ((this.imageType === $I$(7).EPS  || this.imageType === $I$(7).SVG  ) && "Prompt each time".equals$O(renderStyle) && !$I$(2).isHeadlessMode$()  ) {
var chosenFile=file;
var okAction=((P$.ImageExporter$1||
(function(){var C$=Clazz.newClass(P$, "ImageExporter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.ImageExporter'].exportImage$java_io_File$Z$I$I$J.apply(this.b$['jalview.gui.ImageExporter'], [this.$finals$.chosenFile, !this.$finals$.textSelected.get$(), this.$finals$.width, this.$finals$.height, this.$finals$.messageId]);
});
})()
), Clazz.new_(P$.ImageExporter$1.$init$, [this, {chosenFile: chosenFile, textSelected: textSelected, width: width, height: height, messageId: messageId}]));
var epsOption=Clazz.new_($I$(8).c$$S$java_util_concurrent_atomic_AtomicBoolean,[$I$(7).EPS.getName$(), textSelected]);
epsOption.setResponseAction$O$Runnable(new Integer(1), ((P$.ImageExporter$2||
(function(){var C$=Clazz.newClass(P$, "ImageExporter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.ImageExporter'].setStatus$S$J.apply(this.b$['jalview.gui.ImageExporter'], [$I$(1).formatMessage$S$OA("status.cancelled_image_export_operation", [this.b$['jalview.gui.ImageExporter'].imageType.getName$()]), this.$finals$.messageId]);
});
})()
), Clazz.new_(P$.ImageExporter$2.$init$, [this, {messageId: messageId}])));
epsOption.setResponseAction$O$Runnable(new Integer(0), okAction);
epsOption.showDialog$();
} else {
this.exportImage$java_io_File$Z$I$I$J(file, !textSelected.get$(), width, height, messageId);
}});

Clazz.newMeth(C$, 'exportImage$java_io_File$Z$I$I$J', function (chosenFile, asLineart, width, height, messageId) {
var type=this.imageType.getName$();
try {
var im=Clazz.new_($I$(9).c$$jalview_util_ImageMaker_TYPE$I$I$java_io_File$S$Z,[this.imageType, width, height, chosenFile, this.title, asLineart]);
this.imageWriter.exportImage$(im.getGraphics$());
im.writeImage$();
this.setStatus$S$J($I$(1).formatMessage$S$OA("status.export_complete", [type]), messageId);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(String.format$S$OA("Error creating %s file: %s", [type, e.toString()]));
this.setStatus$S$J($I$(1).formatMessage$S$OA("info.error_creating_file", [type]), messageId);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setStatus$S$J', function (msg, id) {
if (this.messageBoard != null  && !$I$(2).isHeadlessMode$() ) {
this.messageBoard.setProgressBar$S$J(msg, id);
}});
;
(function(){var C$=Clazz.newInterface(P$.ImageExporter, "ImageWriterI", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
