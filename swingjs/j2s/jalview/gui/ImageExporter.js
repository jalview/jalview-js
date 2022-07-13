(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.util.MessageManager','jalview.bin.Jalview','jalview.io.JalviewFileView','jalview.bin.Cache','jalview.util.Platform','java.util.concurrent.atomic.AtomicBoolean',['jalview.util.ImageMaker','.TYPE'],'jalview.gui.LineartOptions','jalview.util.ImageMaker']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageExporter", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ImageWriterI',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['title'],'O',['messageBoard','jalview.gui.IProgressIndicator','imageWriter','jalview.gui.ImageExporter.ImageWriterI','imageType','jalview.util.ImageMaker.TYPE']]]

Clazz.newMeth(C$, 'c$$jalview_gui_ImageExporter_ImageWriterI$jalview_gui_IProgressIndicator$jalview_util_ImageMaker_TYPE$S',  function (writer, statusBar, type, fileTitle) {
;C$.$init$.apply(this);
this.imageWriter=writer;
this.messageBoard=statusBar;
this.imageType=type;
this.title=fileTitle;
}, 1);

Clazz.newMeth(C$, 'doExport$java_io_File$java_awt_Component$I$I$S',  function (file, parent, width, height, imageSource) {
var messageId=System.currentTimeMillis$();
this.setStatus$S$J($I$(1,"formatMessage$S$OA",["status.exporting_alignment_as_x_file", Clazz.array(java.lang.Object, -1, [this.imageType])]), messageId);
if (file == null  && !$I$(2).isHeadlessMode$() ) {
var chooser=this.imageType.getFileChooser$();
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(3,1)));
$I$(1,"formatMessage$S$OA",["label.create_image_of", Clazz.array(java.lang.Object, -1, [this.imageType.getName$(), imageSource])]);
var title="Create " + this.imageType.getName$() + " image from alignment" ;
chooser.setDialogTitle$S(title);
chooser.setToolTipText$S($I$(1).getString$S("action.save"));
var value=chooser.showSaveDialog$java_awt_Component(parent);
if (value != 0) {
var msg=$I$(1,"formatMessage$S$OA",["status.cancelled_image_export_operation", Clazz.array(java.lang.Object, -1, [this.imageType.$name])]);
this.setStatus$S$J(msg, messageId);
return;
}$I$(4,"setProperty$S$S",["LAST_DIRECTORY", chooser.getSelectedFile$().getParent$()]);
file=chooser.getSelectedFile$();
}var renderStyle=$I$(4,"getDefault$S$S",[this.imageType.getName$() + "_RENDERING", "Prompt each time"]);
if ($I$(5).isJS$()) {
renderStyle="Text";
}var textSelected=Clazz.new_([!"Lineart".equals$O(renderStyle)],$I$(6,1).c$$Z);
if ((this.imageType === $I$(7).EPS  || this.imageType === $I$(7).SVG  ) && "Prompt each time".equals$O(renderStyle) && !$I$(2).isHeadlessMode$()  ) {
var chosenFile=file;
var okAction=((P$.ImageExporter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageExporter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.ImageExporter'].exportImage$java_io_File$Z$I$I$J.apply(this.b$['jalview.gui.ImageExporter'], [this.$finals$.chosenFile, !this.$finals$.textSelected.get$(), this.$finals$.width, this.$finals$.height, this.$finals$.messageId]);
});
})()
), Clazz.new_(P$.ImageExporter$1.$init$,[this, {textSelected:textSelected,messageId:messageId,height:height,width:width,chosenFile:chosenFile}]));
var epsOption=Clazz.new_([$I$(7).EPS.getName$(), textSelected],$I$(8,1).c$$S$java_util_concurrent_atomic_AtomicBoolean);
epsOption.setResponseAction$O$Runnable(Integer.valueOf$I(1), ((P$.ImageExporter$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageExporter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.ImageExporter'].setStatus$S$J.apply(this.b$['jalview.gui.ImageExporter'], [$I$(1,"formatMessage$S$OA",["status.cancelled_image_export_operation", Clazz.array(java.lang.Object, -1, [this.b$['jalview.gui.ImageExporter'].imageType.getName$()])]), this.$finals$.messageId]);
});
})()
), Clazz.new_(P$.ImageExporter$2.$init$,[this, {messageId:messageId}])));
epsOption.setResponseAction$O$Runnable(Integer.valueOf$I(0), okAction);
epsOption.showDialog$();
} else {
this.exportImage$java_io_File$Z$I$I$J(file, !textSelected.get$(), width, height, messageId);
}});

Clazz.newMeth(C$, 'exportImage$java_io_File$Z$I$I$J',  function (chosenFile, asLineart, width, height, messageId) {
var type=this.imageType.getName$();
try {
var im=Clazz.new_($I$(9,1).c$$jalview_util_ImageMaker_TYPE$I$I$java_io_File$S$Z,[this.imageType, width, height, chosenFile, this.title, asLineart]);
this.imageWriter.exportImage$java_awt_Graphics(im.getGraphics$());
im.writeImage$();
this.setStatus$S$J($I$(1,"formatMessage$S$OA",["status.export_complete", Clazz.array(java.lang.Object, -1, [type])]), messageId);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(String.format$S$OA("Error creating %s file: %s", Clazz.array(java.lang.Object, -1, [type, e.toString()])));
this.setStatus$S$J($I$(1,"formatMessage$S$OA",["info.error_creating_file", Clazz.array(java.lang.Object, -1, [type])]), messageId);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setStatus$S$J',  function (msg, id) {
if (this.messageBoard != null  && !$I$(2).isHeadlessMode$() ) {
this.messageBoard.setProgressBar$S$J(msg, id);
}});
;
(function(){/*i*/var C$=Clazz.newInterface(P$.ImageExporter, "ImageWriterI", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:34 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
