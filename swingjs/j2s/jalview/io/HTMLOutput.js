(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.datamodel.AlignExportSettingsAdapter','jalview.io.FormatAdapter','jalview.io.FileFormat','StringBuilder','java.util.Objects','java.io.InputStreamReader','java.io.BufferedReader','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView','jalview.util.MessageManager','jalview.bin.Cache','jalview.util.BrowserLauncher','java.io.File','Thread']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HTMLOutput", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._bioJson=null;
},1);

C$.$fields$=[['J',['pSessionId'],'S',['_bioJson','description'],'O',['ap','jalview.gui.AlignmentPanel','pIndicator','jalview.gui.IProgressIndicator','generatedFile','java.io.File']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$S',  function (ap, desc) {
;C$.$init$.apply(this);
this.ap=ap;
this.pIndicator=ap.alignFrame;
this.description=desc;
this.pSessionId=System.currentTimeMillis$();
}, 1);

Clazz.newMeth(C$, 'getBioJSONData$',  function () {
if (!this.isEmbedData$()) {
return null;
}if (this._bioJson == null ) {
var options=Clazz.new_($I$(1,1).c$$Z,[true]);
var exportData=this.ap.getAlignViewport$().getAlignExportData$jalview_api_AlignExportSettingsI(options);
this._bioJson=Clazz.new_($I$(2,1).c$$jalview_api_AlignmentViewPanel$jalview_api_AlignExportSettingsI,[this.ap, options]).formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$SA$IA$jalview_datamodel_HiddenColumns($I$(3).Json, exportData.getAlignment$(), exportData.getOmitHidden$(), exportData.getStartEndPostions$(), this.ap.getAlignViewport$().getAlignment$().getHiddenColumns$());
}return this._bioJson;
});

Clazz.newMeth(C$, 'readFileAsString$java_io_File',  function (file) {
var isReader=null;
var buffReader=null;
var sb=Clazz.new_($I$(4,1));
$I$(5).requireNonNull$O$S(file, "File must not be null!");
var url=file.toURL$();
if (url != null ) {
try {
isReader=Clazz.new_([url.openStream$()],$I$(6,1).c$$java_io_InputStream);
buffReader=Clazz.new_($I$(7,1).c$$java_io_Reader,[isReader]);
var line;
var lineSeparator=System.getProperty$S("line.separator");
while ((line=buffReader.readLine$()) != null ){
sb.append$S(line).append$S(lineSeparator);
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
} finally {
if (isReader != null ) {
isReader.close$();
}if (buffReader != null ) {
buffReader.close$();
}}
}return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getImageMapHTML$',  function () {
return  String.instantialize("<html>\n<head>\n<script language=\"JavaScript\">\nvar ns4 = document.layers;\nvar ns6 = document.getElementById && !document.all;\nvar ie4 = document.all;\noffsetX = 0;\noffsetY = 20;\nvar toolTipSTYLE=\"\";\nfunction initToolTips()\n{\n  if(ns4||ns6||ie4)\n  {\n    if(ns4) toolTipSTYLE = document.toolTipLayer;\n    else if(ns6) toolTipSTYLE = document.getElementById(\"toolTipLayer\").style;\n    else if(ie4) toolTipSTYLE = document.all.toolTipLayer.style;\n    if(ns4) document.captureEvents(Event.MOUSEMOVE);\n    else\n    {\n      toolTipSTYLE.visibility = \"visible\";\n      toolTipSTYLE.display = \"none\";\n    }\n    document.onmousemove = moveToMouseLoc;\n  }\n}\nfunction toolTip(msg, fg, bg)\n{\n  if(toolTip.arguments.length < 1) // hide\n  {\n    if(ns4) toolTipSTYLE.visibility = \"hidden\";\n    else toolTipSTYLE.display = \"none\";\n  }\n  else // show\n  {\n    if(!fg) fg = \"#555555\";\n    if(!bg) bg = \"#FFFFFF\";\n    var content =\n    \'<table border=\"0\" cellspacing=\"0\" cellpadding=\"1\" bgcolor=\"\' + fg + \'\"><td>\' +\n    \'<table border=\"0\" cellspacing=\"0\" cellpadding=\"1\" bgcolor=\"\' + bg + \n    \'\"><td align=\"center\"><font face=\"sans-serif\" color=\"\' + fg +\n    \'\" size=\"-2\">&nbsp;\' + msg +\n    \'&nbsp;</font></td></table></td></table>\';\n    if(ns4)\n    {\n      toolTipSTYLE.document.write(content);\n      toolTipSTYLE.document.close();\n      toolTipSTYLE.visibility = \"visible\";\n    }\n    if(ns6)\n    {\n      document.getElementById(\"toolTipLayer\").innerHTML = content;\n      toolTipSTYLE.display=\'block\'\n    }\n    if(ie4)\n    {\n      document.all(\"toolTipLayer\").innerHTML=content;\n      toolTipSTYLE.display=\'block\'\n    }\n  }\n}\nfunction moveToMouseLoc(e)\n{\n  if(ns4||ns6)\n  {\n    x = e.pageX;\n    y = e.pageY;\n  }\n  else\n  {\n    x = event.x + document.body.scrollLeft;\n    y = event.y + document.body.scrollTop;\n  }\n  toolTipSTYLE.left = x + offsetX;\n  toolTipSTYLE.top = y + offsetY;\n  return true;\n}\n</script>\n</head>\n<body>\n<div id=\"toolTipLayer\" style=\"position:absolute; visibility: hidden\"></div>\n<script language=\"JavaScript\"><!--\ninitToolTips(); //--></script>\n");
}, 1);

Clazz.newMeth(C$, 'getOutputFile$',  function () {
var selectedFile=null;
var jvFileChooser=Clazz.new_($I$(8,1).c$$S$S,["html", "HTML files"]);
jvFileChooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(9,1)));
jvFileChooser.setDialogTitle$S($I$(10).getString$S("label.save_as_html"));
jvFileChooser.setToolTipText$S($I$(10).getString$S("action.save"));
var fileChooserOpt=jvFileChooser.showSaveDialog$java_awt_Component(null);
if (fileChooserOpt == 0) {
$I$(11,"setProperty$S$S",["LAST_DIRECTORY", jvFileChooser.getSelectedFile$().getParent$()]);
selectedFile=jvFileChooser.getSelectedFile$().getPath$();
}return selectedFile;
});

Clazz.newMeth(C$, 'setProgressMessage$S',  function (message) {
if (this.pIndicator != null  && !this.isHeadless$() ) {
this.pIndicator.setProgressBar$S$J(message, this.pSessionId);
} else {
System.out.println$S(message);
}});

Clazz.newMeth(C$, 'isHeadless$',  function () {
return System.getProperty$S("java.awt.headless") != null  && System.getProperty$S("java.awt.headless").equals$O("true") ;
});

Clazz.newMeth(C$, 'exportCompleted$',  function () {
if (this.isLaunchInBrowserAfterExport$() && !this.isHeadless$() ) {
$I$(12,"openURL$S",["file:///" + this.getExportedFile$()]);
}});

Clazz.newMeth(C$, 'getExportedFile$',  function () {
return this.generatedFile;
});

Clazz.newMeth(C$, 'exportHTML$S',  function (outputFile) {
this.setProgressMessage$S($I$(10,"formatMessage$S$OA",["status.exporting_alignment_as_x_file", Clazz.array(java.lang.Object, -1, [this.getDescription$()])]));
try {
if (outputFile == null ) {
outputFile=this.getOutputFile$();
if (outputFile == null ) {
this.setProgressMessage$S($I$(10,"formatMessage$S$OA",["status.cancelled_image_export_operation", Clazz.array(java.lang.Object, -1, [this.getDescription$()])]));
return;
}}this.generatedFile=Clazz.new_($I$(13,1).c$$S,[outputFile]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.setProgressMessage$S($I$(10,"formatMessage$S$OA",["info.error_creating_file", Clazz.array(java.lang.Object, -1, [this.getDescription$()])]));
e.printStackTrace$();
return;
} else {
throw e;
}
}
Clazz.new_($I$(14,1).c$$Runnable,[this]).start$();
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
