(function(){var P$=Clazz.newPackage("jalview.bin"),p$1={},p$2={},I$=[[0,'jalview.bin.JalviewLite','jalview.io.DataSourceType','jalview.util.HttpUtils',['jalview.bin.JalviewLite','.LoadJmolThread'],'Thread','jalview.analysis.AlignmentUtils','jalview.appletgui.SplitFrame','jalview.io.IdentifyFile','jalview.io.AppletFormatAdapter','jalview.appletgui.AlignFrame','jalview.util.MessageManager','jalview.io.FileParse','java.util.Vector','jalview.analysis.SequenceIdMatcher','jalview.datamodel.PDBEntry','java.util.StringTokenizer','jalview.datamodel.SequenceI','java.util.ArrayList','jalview.structure.StructureSelectionManager','jalview.io.JPredFile','jalview.io.JnetAnnotationMaker','jalview.io.AnnotationFile','jalview.appletgui.FeatureSettings','jalview.io.NewickFile','java.awt.Button','java.util.Hashtable','StringBuffer','java.awt.EventQueue','jalview.datamodel.SequenceGroup','jalview.datamodel.ColumnSelection','jalview.io.FileFormats','jalview.datamodel.Alignment','jalview.datamodel.AlignmentOrder','jalview.javascript.MouseOverListener','jalview.javascript.JsSelectionSender','jalview.javascript.MouseOverStructureListener','java.io.BufferedReader','java.io.InputStreamReader','netscape.javascript.JSObject','Error','java.awt.Color',['jalview.bin.JalviewLite','.LoadingThread'],'jalview.javascript.JSFunctionExec','java.awt.event.WindowAdapter','java.awt.Font','jalview.util.ColorUtils','java.net.URL']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewLite", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.applet.Applet', ['jalview.api.StructureSelectionManagerProvider', 'jalview.javascript.JalviewLiteJsApi']);
C$.$classes$=[['LoadJmolThread',0],['LoadingThread',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.javascriptListeners=Clazz.new_($I$(13,1));
this.fileFound=true;
this.file="No file";
this.file2=null;
this.launcher=Clazz.new_([$I$(11).getString$S("label.start_jalview")],$I$(25,1).c$$S);
this.currentAlignFrame=null;
this.initialAlignFrame=null;
this.embedded=false;
this.checkForJmol=true;
this.checkedForJmol=false;
this.jmolAvailable=false;
this.alignPdbStructures=false;
this.useXtrnalSviewer=false;
this.separator="\u00ac";
this.jsfallbackEnabled=false;
this.jshashes=Clazz.new_($I$(26,1));
this.jsmessages=Clazz.new_($I$(26,1));
this.jsExecQueue=Clazz.new_($I$(13,1));
},1);

C$.$fields$=[['Z',['fileFound','embedded','checkForJmol','checkedForJmol','jmolAvailable','alignPdbStructures','useXtrnalSviewer','jsfallbackEnabled'],'S',['file','file2','separator'],'O',['javascriptListeners','java.util.Vector','jsFunctionExec','jalview.javascript.JSFunctionExec','launcher','java.awt.Button','currentAlignFrame','jalview.appletgui.AlignFrame','+initialAlignFrame','jshashes','java.util.Hashtable','+jsmessages','jsExecQueue','java.util.Vector']]
,['Z',['debug'],'I',['lastFrameX','lastFrameY'],'S',['builddate','version','installation']]]

Clazz.newMeth(C$, ['getStructureSelectionManager$','getStructureSelectionManager'], function () {
return $I$(19).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this);
});

Clazz.newMeth(C$, ['getSelectedSequences$','getSelectedSequences'], function () {
return this.getSelectedSequencesFrom$jalview_appletgui_AlignFrame(this.getDefaultTargetFrame$());
});

Clazz.newMeth(C$, ['getSelectedSequences$S','getSelectedSequences'], function (sep) {
return this.getSelectedSequencesFrom$jalview_appletgui_AlignFrame$S(this.getDefaultTargetFrame$(), sep);
});

Clazz.newMeth(C$, ['getSelectedSequencesFrom$jalview_appletgui_AlignFrame','getSelectedSequencesFrom'], function (alf) {
return this.getSelectedSequencesFrom$jalview_appletgui_AlignFrame$S(alf, this.separator);
});

Clazz.newMeth(C$, ['getSelectedSequencesFrom$jalview_appletgui_AlignFrame$S','getSelectedSequencesFrom'], function (alf, sep) {
var result=Clazz.new_($I$(27,1).c$$S,[""]);
if (sep == null  || sep.length$() == 0 ) {
sep=this.separator;
}if (alf.viewport.getSelectionGroup$() != null ) {
var seqs=alf.viewport.getSelectionGroup$().getSequencesInOrder$jalview_datamodel_AlignmentI(alf.viewport.getAlignment$());
for (var i=0; i < seqs.length; i++) {
result.append$S(seqs[i].getName$());
result.append$S(sep);
}
}return result.toString();
});

Clazz.newMeth(C$, ['highlight$S$S$S','highlight'], function (sequenceId, position, alignedPosition) {
this.highlightIn$jalview_appletgui_AlignFrame$S$S$S(this.getDefaultTargetFrame$(), sequenceId, position, alignedPosition);
});

Clazz.newMeth(C$, ['highlightIn$jalview_appletgui_AlignFrame$S$S$S','highlightIn'], function (alf, sequenceId, position, alignedPosition) {
var matcher=Clazz.new_([alf.viewport.getAlignment$().getSequencesArray$()],$I$(14,1).c$$jalview_datamodel_SequenceIA);
var sq=matcher.findIdMatch$S(sequenceId);
if (sq != null ) {
var apos=-1;
try {
apos=Integer.valueOf$S(position).intValue$();
apos--;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
return;
} else {
throw ex;
}
}
var me=this;
var pos=apos;
if (alignedPosition != null  && (alignedPosition.trim$().length$() == 0 || alignedPosition.toLowerCase$().indexOf$S("false") > -1 ) ) {
$I$(28,"invokeLater$Runnable",[((P$.JalviewLite$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewLite$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['run$','run'], function () {
$I$(19).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this.$finals$.me).mouseOverVamsasSequence$jalview_datamodel_SequenceI$I$jalview_structure_VamsasSource(this.$finals$.sq, this.$finals$.sq.findIndex$I(this.$finals$.pos), null);
});
})()
), Clazz.new_(P$.JalviewLite$1.$init$,[this, {sq:sq,me:me,pos:pos}]))]);
} else {
$I$(28,"invokeLater$Runnable",[((P$.JalviewLite$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewLite$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['run$','run'], function () {
$I$(19).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this.$finals$.me).mouseOverVamsasSequence$jalview_datamodel_SequenceI$I$jalview_structure_VamsasSource(this.$finals$.sq, this.$finals$.pos, null);
});
})()
), Clazz.new_(P$.JalviewLite$2.$init$,[this, {sq:sq,me:me,pos:pos}]))]);
}}});

Clazz.newMeth(C$, ['select$S$S','select'], function (sequenceIds, columns) {
this.selectIn$jalview_appletgui_AlignFrame$S$S$S(this.getDefaultTargetFrame$(), sequenceIds, columns, this.separator);
});

Clazz.newMeth(C$, ['select$S$S$S','select'], function (sequenceIds, columns, sep) {
this.selectIn$jalview_appletgui_AlignFrame$S$S$S(this.getDefaultTargetFrame$(), sequenceIds, columns, sep);
});

Clazz.newMeth(C$, ['selectIn$jalview_appletgui_AlignFrame$S$S','selectIn'], function (alf, sequenceIds, columns) {
this.selectIn$jalview_appletgui_AlignFrame$S$S$S(alf, sequenceIds, columns, this.separator);
});

Clazz.newMeth(C$, ['selectIn$jalview_appletgui_AlignFrame$S$S$S','selectIn'], function (alf, sequenceIds, columns, sep) {
if (sep == null  || sep.length$() == 0 ) {
sep=this.separator;
} else {
if (C$.debug) {
System.err.println$S("Selecting region using separator string '" + this.separator + "'" );
}}var ids=C$.separatorListToArray$S$S(sequenceIds, sep);
var cols=C$.separatorListToArray$S$S(columns, sep);
var sel=Clazz.new_($I$(29,1));
var csel=Clazz.new_($I$(30,1));
var al=alf.viewport.getAlignment$();
var matcher=Clazz.new_([alf.viewport.getAlignment$().getSequencesArray$()],$I$(14,1).c$$jalview_datamodel_SequenceIA);
var start=0;
var end=al.getWidth$();
var alw=al.getWidth$();
var seqsfound=true;
if (ids != null  && ids.length > 0 ) {
seqsfound=false;
for (var i=0; i < ids.length; i++) {
if (ids[i].trim$().length$() == 0) {
continue;
}var sq=matcher.findIdMatch$S(ids[i]);
if (sq != null ) {
seqsfound=true;
sel.addSequence$jalview_datamodel_SequenceI$Z(sq, false);
}}
}var inseqpos=false;
if (cols != null  && cols.length > 0 ) {
var seset=false;
for (var i=0; i < cols.length; i++) {
var cl=cols[i].trim$();
if (cl.length$() == 0) {
continue;
}var p;
if ((p=cl.indexOf$S("-")) > -1) {
var from=-1;
var to=-1;
try {
from=Integer.valueOf$S(cl.substring$I$I(0, p)).intValue$();
from--;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
System.err.println$S("ERROR: Couldn't parse first integer in range element column selection string '" + cl + "' - format is 'from-to'" );
return;
} else {
throw ex;
}
}
try {
to=Integer.valueOf$S(cl.substring$I(p + 1)).intValue$();
to--;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
System.err.println$S("ERROR: Couldn't parse second integer in range element column selection string '" + cl + "' - format is 'from-to'" );
return;
} else {
throw ex;
}
}
if (from >= 0 && to >= 0 ) {
if (from < to) {
var t=to;
to=from;
to=t;
}if (!seset) {
start=from;
end=to;
seset=true;
} else {
if (start > from) {
start=from;
}if (end < to) {
end=to;
}}for (var r=from; r <= to; r++) {
if (r >= 0 && r < alw ) {
csel.addElement$I(r);
}}
if (C$.debug) {
System.err.println$S("Range '" + cl + "' deparsed as [" + from + "," + to + "]" );
}} else {
System.err.println$S("ERROR: Invalid Range '" + cl + "' deparsed as [" + from + "," + to + "]" );
}} else {
var r=-1;
try {
r=Integer.valueOf$S(cl).intValue$();
r--;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
if (cl.toLowerCase$().equals$O("sequence")) {
inseqpos=true;
} else {
System.err.println$S("ERROR: Couldn't parse integer from point selection element of column selection string '" + cl + "'" );
return;
}} else {
throw ex;
}
}
if (r >= 0 && r <= alw ) {
if (!seset) {
start=r;
end=r;
seset=true;
} else {
if (start > r) {
start=r;
}if (end < r) {
end=r;
}}csel.addElement$I(r);
if (C$.debug) {
System.err.println$S("Point selection '" + cl + "' deparsed as [" + r + "]" );
}} else {
System.err.println$S("ERROR: Invalid Point selection '" + cl + "' deparsed as [" + r + "]" );
}}}
}if (seqsfound) {
if (inseqpos && sel.getSize$() > 0 ) {
var rs=sel.getSequenceAt$I(0);
start=rs.findIndex$I(start);
end=rs.findIndex$I(end);
var cs=Clazz.new_([csel.getSelected$()],$I$(18,1).c$$java_util_Collection);
csel.clear$();
for (var selectedCol, $selectedCol = cs.iterator$(); $selectedCol.hasNext$()&&((selectedCol=($selectedCol.next$())),1);) {
csel.addElement$I(rs.findIndex$I((selectedCol).valueOf()));
}
}sel.setStartRes$I(start);
sel.setEndRes$I(end);
$I$(28,"invokeLater$Runnable",[((P$.JalviewLite$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewLite$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['run$','run'], function () {
this.$finals$.alf.select$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns(this.$finals$.sel, this.$finals$.csel, this.$finals$.alf.getAlignViewport$().getAlignment$().getHiddenColumns$());
});
})()
), Clazz.new_(P$.JalviewLite$3.$init$,[this, {alf:alf,csel:csel,sel:sel}]))]);
}});

Clazz.newMeth(C$, ['getSelectedSequencesAsAlignment$S$S','getSelectedSequencesAsAlignment'], function (format, suffix) {
return this.getSelectedSequencesAsAlignmentFrom$jalview_appletgui_AlignFrame$S$S(this.getDefaultTargetFrame$(), format, suffix);
});

Clazz.newMeth(C$, ['getSelectedSequencesAsAlignmentFrom$jalview_appletgui_AlignFrame$S$S','getSelectedSequencesAsAlignmentFrom'], function (alf, format, suffix) {
try {
var theFormat=$I$(31).getInstance$().forName$S(format);
var seqlimits=suffix.equalsIgnoreCase$S("true");
if (alf.viewport.getSelectionGroup$() != null ) {
var reply=Clazz.new_($I$(9,1)).formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$Z(theFormat, Clazz.new_([alf.viewport.getSelectionAsNewSequence$()],$I$(32,1).c$$jalview_datamodel_SequenceIA), seqlimits);
return reply;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalArgumentException")){
ex.printStackTrace$();
return "Error retrieving alignment, possibly invalid format specifier: " + format;
} else {
throw ex;
}
}
return "";
});

Clazz.newMeth(C$, ['getAlignmentOrder$','getAlignmentOrder'], function () {
return this.getAlignmentOrderFrom$jalview_appletgui_AlignFrame(this.getDefaultTargetFrame$());
});

Clazz.newMeth(C$, ['getAlignmentOrderFrom$jalview_appletgui_AlignFrame','getAlignmentOrderFrom'], function (alf) {
return this.getAlignmentOrderFrom$jalview_appletgui_AlignFrame$S(alf, this.separator);
});

Clazz.newMeth(C$, ['getAlignmentOrderFrom$jalview_appletgui_AlignFrame$S','getAlignmentOrderFrom'], function (alf, sep) {
var alorder=alf.getAlignViewport$().getAlignment$();
var order=Clazz.array(String, [alorder.getHeight$()]);
for (var i=0; i < order.length; i++) {
order[i]=alorder.getSequenceAt$I(i).getName$();
}
return this.arrayToSeparatorList$SA(order);
});

Clazz.newMeth(C$, ['orderBy$S$S','orderBy'], function (order, undoName) {
return this.orderBy$S$S$S(order, undoName, this.separator);
});

Clazz.newMeth(C$, ['orderBy$S$S$S','orderBy'], function (order, undoName, sep) {
return this.orderAlignmentBy$jalview_appletgui_AlignFrame$S$S$S(this.getDefaultTargetFrame$(), order, undoName, sep);
});

Clazz.newMeth(C$, ['orderAlignmentBy$jalview_appletgui_AlignFrame$S$S$S','orderAlignmentBy'], function (alf, order, undoName, sep) {
var ids=C$.separatorListToArray$S$S(order, sep);
var sqs=null;
if (ids != null  && ids.length > 0 ) {
var matcher=Clazz.new_([alf.viewport.getAlignment$().getSequencesArray$()],$I$(14,1).c$$jalview_datamodel_SequenceIA);
var s=0;
sqs=Clazz.array($I$(17), [ids.length]);
for (var i=0; i < ids.length; i++) {
if (ids[i].trim$().length$() == 0) {
continue;
}var sq=matcher.findIdMatch$S(ids[i]);
if (sq != null ) {
sqs[s++]=sq;
}}
if (s > 0) {
var sqq=Clazz.array($I$(17), [s]);
System.arraycopy$O$I$O$I$I(sqs, 0, sqq, 0, s);
sqs=sqq;
} else {
sqs=null;
}}if (sqs == null ) {
return "";
};var aorder=Clazz.new_($I$(33,1).c$$jalview_datamodel_SequenceIA,[sqs]);
if (undoName != null  && undoName.trim$().length$() == 0 ) {
undoName=null;
}var _undoName=undoName;
return alf.sortBy$jalview_datamodel_AlignmentOrder$S(aorder, _undoName) ? "true" : "";
});

Clazz.newMeth(C$, ['getAlignment$S','getAlignment'], function (format) {
return this.getAlignmentFrom$jalview_appletgui_AlignFrame$S$S(this.getDefaultTargetFrame$(), format, "true");
});

Clazz.newMeth(C$, ['getAlignmentFrom$jalview_appletgui_AlignFrame$S','getAlignmentFrom'], function (alf, format) {
return this.getAlignmentFrom$jalview_appletgui_AlignFrame$S$S(alf, format, "true");
});

Clazz.newMeth(C$, ['getAlignment$S$S','getAlignment'], function (format, suffix) {
return this.getAlignmentFrom$jalview_appletgui_AlignFrame$S$S(this.getDefaultTargetFrame$(), format, suffix);
});

Clazz.newMeth(C$, ['getAlignmentFrom$jalview_appletgui_AlignFrame$S$S','getAlignmentFrom'], function (alf, format, suffix) {
try {
var seqlimits=suffix.equalsIgnoreCase$S("true");
var theFormat=$I$(31).getInstance$().forName$S(format);
var reply=Clazz.new_($I$(9,1)).formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$Z(theFormat, alf.viewport.getAlignment$(), seqlimits);
return reply;
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalArgumentException")){
ex.printStackTrace$();
return "Error retrieving alignment, possibly invalid format specifier: " + format;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, ['loadAnnotation$S','loadAnnotation'], function (annotation) {
this.loadAnnotationFrom$jalview_appletgui_AlignFrame$S(this.getDefaultTargetFrame$(), annotation);
});

Clazz.newMeth(C$, ['loadAnnotationFrom$jalview_appletgui_AlignFrame$S','loadAnnotationFrom'], function (alf, annotation) {
if (Clazz.new_($I$(22,1)).annotateAlignmentView$jalview_api_AlignViewportI$O$jalview_io_DataSourceType(alf.getAlignViewport$(), annotation, $I$(2).PASTE)) {
alf.alignPanel.fontChanged$();
alf.alignPanel.setScrollValues$I$I(0, 0);
} else {
alf.parseFeaturesFile$S$jalview_io_DataSourceType(annotation, $I$(2).PASTE);
}});

Clazz.newMeth(C$, ['loadFeatures$S$Z','loadFeatures'], function (features, autoenabledisplay) {
this.loadFeaturesFrom$jalview_appletgui_AlignFrame$S$Z(this.getDefaultTargetFrame$(), features, autoenabledisplay);
});

Clazz.newMeth(C$, ['loadFeaturesFrom$jalview_appletgui_AlignFrame$S$Z','loadFeaturesFrom'], function (alf, features, autoenabledisplay) {
return alf.parseFeaturesFile$S$jalview_io_DataSourceType$Z(features, $I$(2).PASTE, autoenabledisplay);
});

Clazz.newMeth(C$, ['getFeatures$S','getFeatures'], function (format) {
return this.getFeaturesFrom$jalview_appletgui_AlignFrame$S(this.getDefaultTargetFrame$(), format);
});

Clazz.newMeth(C$, ['getFeaturesFrom$jalview_appletgui_AlignFrame$S','getFeaturesFrom'], function (alf, format) {
return alf.outputFeatures$Z$S(false, format);
});

Clazz.newMeth(C$, ['getAnnotation$','getAnnotation'], function () {
return this.getAnnotationFrom$jalview_appletgui_AlignFrame(this.getDefaultTargetFrame$());
});

Clazz.newMeth(C$, ['getAnnotationFrom$jalview_appletgui_AlignFrame','getAnnotationFrom'], function (alf) {
return alf.outputAnnotations$Z(false);
});

Clazz.newMeth(C$, ['newView$','newView'], function () {
return this.newViewFrom$jalview_appletgui_AlignFrame(this.getDefaultTargetFrame$());
});

Clazz.newMeth(C$, ['newView$S','newView'], function (name) {
return this.newViewFrom$jalview_appletgui_AlignFrame$S(this.getDefaultTargetFrame$(), name);
});

Clazz.newMeth(C$, ['newViewFrom$jalview_appletgui_AlignFrame','newViewFrom'], function (alf) {
return alf.newView$S(null);
});

Clazz.newMeth(C$, ['newViewFrom$jalview_appletgui_AlignFrame$S','newViewFrom'], function (alf, name) {
return alf.newView$S(name);
});

Clazz.newMeth(C$, ['loadAlignment$S$S','loadAlignment'], function (text, title) {
var al=null;
try {
var format=Clazz.new_($I$(8,1)).identify$S$jalview_io_DataSourceType(text, $I$(2).PASTE);
al=Clazz.new_($I$(9,1)).readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(text, $I$(2).PASTE, format);
if (al.getHeight$() > 0) {
return Clazz.new_($I$(10,1).c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z,[al, this, title, false]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
});

Clazz.newMeth(C$, ['setMouseoverListener$S','setMouseoverListener'], function (listener) {
this.setMouseoverListener$jalview_appletgui_AlignFrame$S(this.currentAlignFrame, listener);
});

Clazz.newMeth(C$, ['setMouseoverListener$jalview_appletgui_AlignFrame$S','setMouseoverListener'], function (af, listener) {
if (listener != null ) {
listener=listener.trim$();
if (listener.length$() == 0) {
System.err.println$S("jalview Javascript error: Ignoring empty function for mouseover listener.");
return;
}}var mol=Clazz.new_($I$(34,1).c$$jalview_bin_JalviewLite$jalview_appletgui_AlignFrame$S,[this, af, listener]);
this.javascriptListeners.addElement$O(mol);
$I$(19).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this).addStructureViewerListener$O(mol);
if (C$.debug) {
System.err.println$S("Added a mouseover listener for " + ((af == null ) ? "All frames" : "Just views for " + af.getAlignViewport$().getSequenceSetId$()));
System.err.println$S("There are now " + this.javascriptListeners.size$() + " listeners in total." );
}});

Clazz.newMeth(C$, ['setSelectionListener$S','setSelectionListener'], function (listener) {
this.setSelectionListener$jalview_appletgui_AlignFrame$S(null, listener);
});

Clazz.newMeth(C$, ['setSelectionListener$jalview_appletgui_AlignFrame$S','setSelectionListener'], function (af, listener) {
if (listener != null ) {
listener=listener.trim$();
if (listener.length$() == 0) {
System.err.println$S("jalview Javascript error: Ignoring empty function for selection listener.");
return;
}}var mol=Clazz.new_($I$(35,1).c$$jalview_bin_JalviewLite$jalview_appletgui_AlignFrame$S,[this, af, listener]);
this.javascriptListeners.addElement$O(mol);
$I$(19).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this).addSelectionListener$jalview_structure_SelectionListener(mol);
if (C$.debug) {
System.err.println$S("Added a selection listener for " + ((af == null ) ? "All frames" : "Just views for " + af.getAlignViewport$().getSequenceSetId$()));
System.err.println$S("There are now " + this.javascriptListeners.size$() + " listeners in total." );
}});

Clazz.newMeth(C$, ['setStructureListener$S$S','setStructureListener'], function (listener, modelSet) {
if (listener != null ) {
listener=listener.trim$();
if (listener.length$() == 0) {
System.err.println$S("jalview Javascript error: Ignoring empty function for selection listener.");
return;
}}var mol=Clazz.new_([this, listener, this.separatorListToArray$S(modelSet)],$I$(36,1).c$$jalview_bin_JalviewLite$S$SA);
this.javascriptListeners.addElement$O(mol);
$I$(19).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this).addStructureViewerListener$O(mol);
if (C$.debug) {
System.err.println$S("Added a javascript structure viewer listener '" + listener + "'" );
System.err.println$S("There are now " + this.javascriptListeners.size$() + " listeners in total." );
}});

Clazz.newMeth(C$, ['removeJavascriptListener$jalview_appletgui_AlignFrame$S','removeJavascriptListener'], function (af, listener) {
if (listener != null ) {
listener=listener.trim$();
if (listener.length$() == 0) {
listener=null;
}}var rprt=false;
for (var ms=0, msSize=this.javascriptListeners.size$(); ms < msSize; ) {
var lstn=this.javascriptListeners.elementAt$I(ms);
var lstner=lstn;
if ((af == null  || lstner.getAlignFrame$() === af  ) && (listener == null  || lstner.getListenerFunction$().equals$O(listener) ) ) {
this.javascriptListeners.removeElement$O(lstner);
msSize--;
if (Clazz.instanceOf(lstner, "jalview.structure.SelectionListener")) {
$I$(19).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this).removeSelectionListener$jalview_structure_SelectionListener(lstner);
} else {
$I$(19).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this).removeStructureViewerListener$O$SA(lstner, null);
}rprt=C$.debug;
if (C$.debug) {
System.err.println$S("Removed listener '" + listener + "'" );
}} else {
ms++;
}}
if (rprt) {
System.err.println$S("There are now " + this.javascriptListeners.size$() + " listeners in total." );
}});

Clazz.newMeth(C$, ['stop$','stop'], function () {
System.err.println$S("Applet " + this.getName$() + " stop()." );
p$2.tidyUp.apply(this, []);
});

Clazz.newMeth(C$, ['destroy$','destroy'], function () {
System.err.println$S("Applet " + this.getName$() + " destroy()." );
p$2.tidyUp.apply(this, []);
});

Clazz.newMeth(C$, 'tidyUp', function () {
this.removeAll$();
if (this.currentAlignFrame != null  && this.currentAlignFrame.viewport != null   && this.currentAlignFrame.viewport.applet != null  ) {
var av=this.currentAlignFrame.viewport;
this.currentAlignFrame.closeMenuItem_actionPerformed$();
av.applet=null;
this.currentAlignFrame=null;
}if (this.javascriptListeners != null ) {
while (this.javascriptListeners.size$() > 0){
var mol=this.javascriptListeners.elementAt$I(0);
this.javascriptListeners.removeElement$O(mol);
if (Clazz.instanceOf(mol, "jalview.structure.SelectionListener")) {
$I$(19).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this).removeSelectionListener$jalview_structure_SelectionListener(mol);
} else {
$I$(19).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this).removeStructureViewerListener$O$SA(mol, null);
}mol.jvlite=null;
}
}if (this.jsFunctionExec != null ) {
this.jsFunctionExec.stopQueue$();
this.jsFunctionExec.jvlite=null;
}this.initialAlignFrame=null;
this.jsFunctionExec=null;
this.javascriptListeners=null;
$I$(19).release$jalview_api_StructureSelectionManagerProvider(this);
}, p$2);

Clazz.newMeth(C$, ['mouseOverStructure$S$S$S','mouseOverStructure'], function (pdbResNum, chain, pdbfile) {
var me=this;
$I$(28,"invokeLater$Runnable",[((P$.JalviewLite$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewLite$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['run$','run'], function () {
try {
$I$(19).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this.$finals$.me).mouseOverStructure$I$S$S(Integer.valueOf$S(this.$finals$.pdbResNum).intValue$(), this.$finals$.chain, this.$finals$.pdbfile);
if ($I$(1).debug) {
System.err.println$S("mouseOver for '" + this.$finals$.pdbResNum + "' in chain '" + this.$finals$.chain + "' in structure '" + this.$finals$.pdbfile + "'" );
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.err.println$S("Ignoring invalid residue number string '" + this.$finals$.pdbResNum + "'" );
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.JalviewLite$4.$init$,[this, {me:me,pdbfile:pdbfile,chain:chain,pdbResNum:pdbResNum}]))]);
});

Clazz.newMeth(C$, ['scrollViewToIn$jalview_appletgui_AlignFrame$S$S','scrollViewToIn'], function (alf, topRow, leftHandColumn) {
$I$(28,"invokeLater$Runnable",[((P$.JalviewLite$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewLite$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['run$','run'], function () {
try {
this.$finals$.alf.scrollTo$I$I(Integer.valueOf$S(this.$finals$.topRow).intValue$(), Integer.valueOf$S(this.$finals$.leftHandColumn).intValue$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Couldn't parse integer arguments (topRow='" + this.$finals$.topRow + "' and leftHandColumn='" + this.$finals$.leftHandColumn + "')" );
ex.printStackTrace$();
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.JalviewLite$5.$init$,[this, {leftHandColumn:leftHandColumn,alf:alf,topRow:topRow}]))]);
});

Clazz.newMeth(C$, ['scrollViewToRowIn$jalview_appletgui_AlignFrame$S','scrollViewToRowIn'], function (alf, topRow) {
$I$(28,"invokeLater$Runnable",[((P$.JalviewLite$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewLite$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['run$','run'], function () {
try {
this.$finals$.alf.scrollToRow$I(Integer.valueOf$S(this.$finals$.topRow).intValue$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Couldn't parse integer arguments (topRow='" + this.$finals$.topRow + "')" );
ex.printStackTrace$();
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.JalviewLite$6.$init$,[this, {topRow:topRow,alf:alf}]))]);
});

Clazz.newMeth(C$, ['scrollViewToColumnIn$jalview_appletgui_AlignFrame$S','scrollViewToColumnIn'], function (alf, leftHandColumn) {
$I$(28,"invokeLater$Runnable",[((P$.JalviewLite$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewLite$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['run$','run'], function () {
try {
this.$finals$.alf.scrollToColumn$I(Integer.valueOf$S(this.$finals$.leftHandColumn).intValue$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Couldn't parse integer arguments (leftHandColumn='" + this.$finals$.leftHandColumn + "')" );
ex.printStackTrace$();
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.JalviewLite$7.$init$,[this, {leftHandColumn:leftHandColumn,alf:alf}]))]);
});

Clazz.newMeth(C$, 'initBuildDetails$', function () {
if (C$.builddate == null ) {
C$.builddate="unknown";
C$.version="test";
C$.installation="applet";
var url=Clazz.getClass(C$).getResource$S("/.build_properties");
if (url != null ) {
try {
var reader=Clazz.new_([Clazz.new_([url.openStream$()],$I$(38,1).c$$java_io_InputStream)],$I$(37,1).c$$java_io_Reader);
var line;
while ((line=reader.readLine$()) != null ){
if (line.indexOf$S("VERSION") > -1) {
C$.version=line.substring$I(line.indexOf$S("=") + 1);
}if (line.indexOf$S("BUILD_DATE") > -1) {
C$.builddate=line.substring$I(line.indexOf$S("=") + 1);
}if (line.indexOf$S("INSTALLATION") > -1) {
C$.installation=line.substring$I(line.indexOf$S("=") + 1);
}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}}}, 1);

Clazz.newMeth(C$, 'getBuildDate$', function () {
C$.initBuildDetails$();
return C$.builddate;
}, 1);

Clazz.newMeth(C$, 'getInstallation$', function () {
C$.initBuildDetails$();
return C$.installation;
}, 1);

Clazz.newMeth(C$, 'getVersion$', function () {
C$.initBuildDetails$();
return C$.version;
}, 1);

Clazz.newMeth(C$, ['init$','init'], function () {
C$.debug="true".equalsIgnoreCase$S(this.getParameter$S("debug"));
try {
if (C$.debug) {
System.err.println$S("Applet context is '" + this.getAppletContext$().getClass$().toString() + "'" );
}var scriptObject=$I$(39).getWindow$java_applet_Applet(this);
if (C$.debug && scriptObject != null  ) {
System.err.println$S("Applet has Javascript callback support.");
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Warning: No JalviewLite javascript callbacks available.");
if (C$.debug) {
ex.printStackTrace$();
}} else {
throw ex;
}
}
if (C$.debug) {
System.err.println$S("JalviewLite Version " + C$.getVersion$());
System.err.println$S("Build Date : " + C$.getBuildDate$());
System.err.println$S("Installation : " + C$.getInstallation$());
}var externalsviewer=this.getParameter$S("externalstructureviewer");
if (externalsviewer != null ) {
this.useXtrnalSviewer=externalsviewer.trim$().toLowerCase$().equals$O("true");
}var chkforJmol=this.getParameter$S("nojmol");
if (chkforJmol != null ) {
this.checkForJmol=!chkforJmol.equals$O("true");
}var sep=this.getParameter$S("separator");
if (sep != null ) {
if (sep.length$() > 0) {
this.separator=sep;
if (C$.debug) {
System.err.println$S("Separator set to '" + this.separator + "'" );
}} else {
throw Clazz.new_([$I$(11).getString$S("error.invalid_separator_parameter")],$I$(40,1).c$$S);
}}var r=255;
var g=255;
var b=255;
var param=this.getParameter$S("RGB");
if (param != null ) {
try {
r=Integer.parseInt$S$I(param.substring$I$I(0, 2), 16);
g=Integer.parseInt$S$I(param.substring$I$I(2, 4), 16);
b=Integer.parseInt$S$I(param.substring$I$I(4, 6), 16);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
r=255;
g=255;
b=255;
} else {
throw ex;
}
}
}param=this.getParameter$S("label");
if (param != null ) {
this.launcher.setLabel$S(param);
}this.setBackground$java_awt_Color(Clazz.new_($I$(41,1).c$$I$I$I,[r, g, b]));
this.file=this.getParameter$S("file");
if (this.file == null ) {
var data=Clazz.new_($I$(27,1).c$$S,["PASTE"]);
var i=1;
while ((this.file=this.getParameter$S("sequence" + i)) != null ){
data.append$S(this.file.toString() + "\n");
i++;
}
if (data.length$() > 5) {
this.file=data.toString();
}}if (this.getDefaultParameter$S$Z("enableSplitFrame", true)) {
this.file2=this.getParameter$S("file2");
}this.embedded="true".equalsIgnoreCase$S(this.getParameter$S("embedded"));
if (this.embedded) {
var loader=Clazz.new_($I$(42,1).c$$S$S$jalview_bin_JalviewLite,[this, null, this.file, this.file2, this]);
loader.start$();
} else if (this.file != null ) {
if ("false".equalsIgnoreCase$S(this.getParameter$S("showbutton"))) {
var loader=Clazz.new_($I$(42,1).c$$S$S$jalview_bin_JalviewLite,[this, null, this.file, this.file2, this]);
loader.start$();
} else {
this.add$java_awt_Component(this.launcher);
this.launcher.addActionListener$java_awt_event_ActionListener(((P$.JalviewLite$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewLite$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed'], function (e) {
var loader=Clazz.new_($I$(42,1).c$$S$S$jalview_bin_JalviewLite,[this, null, this.b$['jalview.bin.JalviewLite'].file, this.b$['jalview.bin.JalviewLite'].file2, this.b$['jalview.bin.JalviewLite']]);
loader.start$();
});
})()
), Clazz.new_(P$.JalviewLite$8.$init$,[this, null])));
}} else {
this.file="NO FILE";
this.fileFound=false;
p$2.callInitCallback.apply(this, []);
}});

Clazz.newMeth(C$, 'initLiveConnect', function () {
var notFailed=false;
var tries=0;
while (!notFailed && tries < 10 ){
if (tries > 0) {
System.err.println$S("LiveConnect request thread going to sleep.");
}try {
$I$(5,"sleep$J",[700 * (1 + tries)]);
} catch (q) {
if (Clazz.exceptionOf(q,"InterruptedException")){
} else {
throw q;
}
}
;if (tries++ > 0) {
System.err.println$S("LiveConnect request thread woken up.");
}try {
var scriptObject=$I$(39).getWindow$java_applet_Applet(this);
if (scriptObject.eval$S("navigator") != null ) {
notFailed=true;
}} catch (jsex) {
if (Clazz.exceptionOf(jsex,"Exception")){
System.err.println$S("Attempt " + tries + " to access LiveConnect javascript failed." );
} else {
throw jsex;
}
}
}
}, p$2);

Clazz.newMeth(C$, 'callInitCallback', function () {
var initjscallback=this.getParameter$S("oninit");
if (initjscallback == null ) {
return;
}initjscallback=initjscallback.trim$();
if (initjscallback.length$() > 0) {
var scriptObject=null;
try {
scriptObject=$I$(39).getWindow$java_applet_Applet(this);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
;p$2.initLiveConnect.apply(this, []);
if (scriptObject != null ) {
try {
Clazz.new_($I$(43,1).c$$jalview_bin_JalviewLite,[this]).executeJavascriptFunction$Z$S$OA$S(true, initjscallback, null, "Calling oninit callback '" + initjscallback + "'." );
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Exception when executing _oninit callback '" + initjscallback + "'." );
e.printStackTrace$();
} else {
throw e;
}
}
} else {
System.err.println$S("Not executing _oninit callback '" + initjscallback + "' - no scripting allowed." );
}}}, p$2);

Clazz.newMeth(C$, 'addFrame$java_awt_Frame$S$I$I', function (frame, title, width, height) {
frame.setLocation$I$I(C$.lastFrameX, C$.lastFrameY);
C$.lastFrameX+=40;
C$.lastFrameY+=40;
frame.setSize$I$I(width, height);
frame.setTitle$S(title);
frame.addWindowListener$java_awt_event_WindowListener(((P$.JalviewLite$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewLite$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['windowClosing$java_awt_event_WindowEvent','windowClosing'], function (e) {
if (Clazz.instanceOf(this.$finals$.frame, "jalview.appletgui.AlignFrame")) {
var vp=(this.$finals$.frame).viewport;
(this.$finals$.frame).closeMenuItem_actionPerformed$();
if (vp.applet.currentAlignFrame === this.$finals$.frame ) {
vp.applet.currentAlignFrame=null;
}vp.applet=null;
vp=null;
}$I$(1).lastFrameX-=40;
$I$(1).lastFrameY-=40;
if (Clazz.instanceOf(this.$finals$.frame, "jalview.appletgui.EmbmenuFrame")) {
(this.$finals$.frame).destroyMenus$();
}this.$finals$.frame.setMenuBar$java_awt_MenuBar(null);
this.$finals$.frame.dispose$();
});

Clazz.newMeth(C$, ['windowActivated$java_awt_event_WindowEvent','windowActivated'], function (e) {
if (Clazz.instanceOf(this.$finals$.frame, "jalview.appletgui.AlignFrame")) {
(this.$finals$.frame).viewport.applet.currentAlignFrame=this.$finals$.frame;
if ($I$(1).debug) {
System.err.println$S("Activated window " + this.$finals$.frame);
}}C$.superclazz.prototype.windowActivated$java_awt_event_WindowEvent.apply(this, [e]);
});
})()
), Clazz.new_($I$(44,1),[this, {frame:frame}],P$.JalviewLite$9)));
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, ['paint$java_awt_Graphics','paint'], function (g) {
if (!this.fileFound) {
g.setColor$java_awt_Color(Clazz.new_($I$(41,1).c$$I$I$I,[200, 200, 200]));
g.setColor$java_awt_Color($I$(41).cyan);
g.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
g.setColor$java_awt_Color($I$(41).red);
g.drawString$S$I$I($I$(11).getString$S("label.jalview_cannot_open_file"), 5, 15);
g.drawString$S$I$I("\"" + this.file + "\"" , 5, 30);
} else if (this.embedded) {
g.setColor$java_awt_Color($I$(41).black);
g.setFont$java_awt_Font(Clazz.new_($I$(45,1).c$$S$I$I,["Arial", 1, 24]));
g.drawString$S$I$I($I$(11).getString$S("label.jalview_applet"), 50, (this.getSize$().height/2|0) - 30);
g.drawString$S$I$I($I$(11).getString$S("label.loading_data") + "...", 50, (this.getSize$().height/2|0));
}});

Clazz.newMeth(C$, ['getAppletWindow$Class','getAppletWindow'], function (class1) {
var wnds=Clazz.new_($I$(13,1));
var cmp=this.getComponents$();
if (cmp != null ) {
for (var i=0; i < cmp.length; i++) {
if (class1.isAssignableFrom$Class(cmp[i].getClass$())) {
wnds.addElement$O(cmp);
}}
}return wnds;
});

Clazz.newMeth(C$, ['getDefaultTargetFrame$','getDefaultTargetFrame'], function () {
if (this.currentAlignFrame != null ) {
return this.currentAlignFrame;
}if (this.initialAlignFrame != null ) {
return this.initialAlignFrame;
}System.err.println$S("Implementation error: Jalview Applet API cannot work out which AlignFrame to use.");
return null;
});

Clazz.newMeth(C$, ['separatorListToArray$S','separatorListToArray'], function (list) {
return C$.separatorListToArray$S$S(list, this.separator);
});

Clazz.newMeth(C$, 'separatorListToArray$S$S', function (list, separator) {
var seplen=separator.length$();
if (list == null  || list.equals$O("")  || list.equals$O(separator) ) {
return null;
}var jv=Clazz.new_($I$(13,1));
var cp=0;
var pos;
while ((pos=list.indexOf$S$I(separator, cp)) > cp){
jv.addElement$O(list.substring$I$I(cp, pos));
cp=pos + seplen;
}
if (cp < list.length$()) {
var c=list.substring$I(cp);
if (!c.equals$O(separator)) {
jv.addElement$O(c);
}}if (jv.size$() > 0) {
var v=Clazz.array(String, [jv.size$()]);
for (var i=0; i < v.length; i++) {
v[i]=jv.elementAt$I(i);
}
jv.removeAllElements$();
if (C$.debug) {
System.err.println$S("Array from '" + separator + "' separated List:\n" + v.length );
for (var i=0; i < v.length; i++) {
System.err.println$S("item " + i + " '" + v[i] + "'" );
}
}return v;
}if (C$.debug) {
System.err.println$S("Empty Array from '" + separator + "' separated List" );
}return null;
}, 1);

Clazz.newMeth(C$, ['arrayToSeparatorList$SA','arrayToSeparatorList'], function (list) {
return C$.arrayToSeparatorList$SA$S(list, this.separator);
});

Clazz.newMeth(C$, 'arrayToSeparatorList$SA$S', function (list, separator) {
var v=Clazz.new_($I$(27,1));
if (list != null  && list.length > 0 ) {
for (var i=0, iSize=list.length; i < iSize; i++) {
if (list[i] != null ) {
if (i > 0) {
v.append$S(separator);
}v.append$S(list[i]);
}}
if (C$.debug) {
System.err.println$S("Returning '" + separator + "' separated List:\n" );
System.err.println$O(v);
}return v.toString();
}if (C$.debug) {
System.err.println$S("Returning empty '" + separator + "' separated List\n" );
}return "" + separator;
}, 1);

Clazz.newMeth(C$, ['getFeatureGroups$','getFeatureGroups'], function () {
var lst=this.arrayToSeparatorList$SA(this.getDefaultTargetFrame$().getFeatureGroups$());
return lst;
});

Clazz.newMeth(C$, ['getFeatureGroupsOn$jalview_appletgui_AlignFrame','getFeatureGroupsOn'], function (alf) {
var lst=this.arrayToSeparatorList$SA(alf.getFeatureGroups$());
return lst;
});

Clazz.newMeth(C$, ['getFeatureGroupsOfState$Z','getFeatureGroupsOfState'], function (visible) {
return this.arrayToSeparatorList$SA(this.getDefaultTargetFrame$().getFeatureGroupsOfState$Z(visible));
});

Clazz.newMeth(C$, ['getFeatureGroupsOfStateOn$jalview_appletgui_AlignFrame$Z','getFeatureGroupsOfStateOn'], function (alf, visible) {
return this.arrayToSeparatorList$SA(alf.getFeatureGroupsOfState$Z(visible));
});

Clazz.newMeth(C$, ['setFeatureGroupStateOn$jalview_appletgui_AlignFrame$S$Z','setFeatureGroupStateOn'], function (alf, groups, state) {
var st=state;
$I$(28,"invokeLater$Runnable",[((P$.JalviewLite$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewLite$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['run$','run'], function () {
this.$finals$.alf.setFeatureGroupState$SA$Z(this.b$['jalview.bin.JalviewLite'].separatorListToArray$S.apply(this.b$['jalview.bin.JalviewLite'], [this.$finals$.groups]), this.$finals$.st);
});
})()
), Clazz.new_(P$.JalviewLite$10.$init$,[this, {st:st,groups:groups,alf:alf}]))]);
});

Clazz.newMeth(C$, ['setFeatureGroupState$S$Z','setFeatureGroupState'], function (groups, state) {
this.setFeatureGroupStateOn$jalview_appletgui_AlignFrame$S$Z(this.getDefaultTargetFrame$(), groups, state);
});

Clazz.newMeth(C$, ['getSeparator$','getSeparator'], function () {
return this.separator;
});

Clazz.newMeth(C$, ['setSeparator$S','setSeparator'], function (separator) {
if (separator == null  || separator.length$() < 1 ) {
separator="\u00ac";
}this.separator=separator;
if (C$.debug) {
System.err.println$S("Default Separator now: '" + separator + "'" );
}});

Clazz.newMeth(C$, ['getDefaultParameter$S$Z','getDefaultParameter'], function (name, def) {
var stn;
if ((stn=this.getParameter$S(name)) == null ) {
return def;
}if ("true".equalsIgnoreCase$S(stn)) {
return true;
}return false;
});

Clazz.newMeth(C$, ['addPdbFile$jalview_appletgui_AlignFrame$S$S$S','addPdbFile'], function (alFrame, sequenceId, pdbEntryString, pdbFile) {
return alFrame.addPdbFile$S$S$S(sequenceId, pdbEntryString, pdbFile);
});

Clazz.newMeth(C$, 'setAlignPdbStructures$Z', function (alignPdbStructures) {
this.alignPdbStructures=alignPdbStructures;
});

Clazz.newMeth(C$, ['isAlignPdbStructures$','isAlignPdbStructures'], function () {
return this.alignPdbStructures;
});

Clazz.newMeth(C$, ['start$','start'], function () {
});

Clazz.newMeth(C$, ['setJsMessageSet$S$S$SA','setJsMessageSet'], function (messageclass, viewId, colcommands) {
var msgset=this.jsmessages.get$O(messageclass);
if (msgset == null ) {
msgset=Clazz.new_($I$(26,1));
this.jsmessages.put$O$O(messageclass, msgset);
}msgset.put$O$O(viewId, colcommands);
var l=Clazz.array(Long.TYPE, [colcommands.length]);
for (var i=0; i < colcommands.length; i++) {
l[i]=colcommands[i].hashCode$();
}
this.jshashes.put$O$O(messageclass + "|" + viewId , l);
});

Clazz.newMeth(C$, ['getJsMessage$S$S','getJsMessage'], function (messageclass, viewId) {
var msgset=this.jsmessages.get$O(messageclass);
if (msgset != null ) {
var msgs=msgset.get$O(viewId);
if (msgs != null ) {
for (var i=0; i < msgs.length; i++) {
if (msgs[i] != null ) {
var m=msgs[i];
msgs[i]=null;
return m;
}}
}}return "";
});

Clazz.newMeth(C$, ['isJsMessageSetChanged$S$S$SA','isJsMessageSetChanged'], function (string, string2, colcommands) {
var l=this.jshashes.get$O(string + "|" + string2 );
if (l == null  && colcommands != null  ) {
return true;
}for (var i=0; i < colcommands.length; i++) {
if (l[i] != colcommands[i].hashCode$()) {
return true;
}}
return false;
});

Clazz.newMeth(C$, ['getJsExecQueue$','getJsExecQueue'], function () {
return this.jsExecQueue;
});

Clazz.newMeth(C$, ['setExecutor$jalview_javascript_JSFunctionExec','setExecutor'], function (jsFunctionExec2) {
this.jsFunctionExec=jsFunctionExec2;
});

Clazz.newMeth(C$, ['getDefaultColourParameter$S$java_awt_Color','getDefaultColourParameter'], function (colparam, defcolour) {
var colprop=this.getParameter$S(colparam);
if (colprop == null  || colprop.trim$().length$() == 0 ) {
return defcolour;
}var col=$I$(46).parseColourString$S(colprop);
if (col == null ) {
System.err.println$S("Couldn't parse '" + colprop + "' as a colour for " + colparam );
}return (col == null ) ? defcolour : col;
});

Clazz.newMeth(C$, ['openJalviewHelpUrl$','openJalviewHelpUrl'], function () {
var helpUrl=this.getParameter$S("jalviewhelpurl");
if (helpUrl == null  || helpUrl.trim$().length$() < 5 ) {
helpUrl="http://www.jalview.org/help.html";
}this.showURL$S$S(helpUrl, "HELP");
});

Clazz.newMeth(C$, 'resolveUrlForLocalOrAbsolute$S$java_net_URL', function (targetPath, localref) {
var resolvedPath="";
if (targetPath.startsWith$S("/")) {
var codebase=localref.toString();
var localfile=localref.getFile$();
resolvedPath=codebase.substring$I$I(0, codebase.length$() - localfile.length$()) + targetPath;
return resolvedPath;
}var urlPath=localref.toString();
var directoryPath=urlPath;
var lastSeparator=directoryPath.lastIndexOf$S("/");
if (lastSeparator > 0) {
directoryPath=directoryPath.substring$I$I(0, lastSeparator + 1);
}if (targetPath.startsWith$S("/")) {
resolvedPath=directoryPath + targetPath.substring$I(1);
} else {
resolvedPath=directoryPath + targetPath;
}if (C$.debug) {
System.err.println$S("resolveUrlForLocalOrAbsolute returning " + resolvedPath);
}return resolvedPath;
}, p$2);

Clazz.newMeth(C$, ['showURL$S$S','showURL'], function (url, target) {
try {
if (url.indexOf$S(":") == -1) {
var prepend;
url=p$2.resolveUrlForLocalOrAbsolute$S$java_net_URL.apply(this, [url, prepend=this.getDefaultParameter$S$Z("resolvetocodebase", false) ? this.getCodeBase$() : this.getDocumentBase$()]);
if (C$.debug) {
System.err.println$S("Show url (prepended " + prepend + " - toggle resolvetocodebase if code/docbase resolution is wrong): " + url );
}} else {
if (C$.debug) {
System.err.println$S("Show url: " + url);
}}if (url.indexOf$S("javascript:") == 0) {
this.getAppletContext$().showDocument$java_net_URL(Clazz.new_($I$(47,1).c$$S,[url]));
} else {
this.getAppletContext$().showDocument$java_net_URL$S(Clazz.new_($I$(47,1).c$$S,[url]), target);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.lastFrameX=200;
C$.lastFrameY=200;
C$.debug=false;
C$.builddate=null;
C$.version=null;
C$.installation=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewLite, "LoadJmolThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.running=false;
},1);

C$.$fields$=[['Z',['running']]]

Clazz.newMeth(C$, 'run$', function () {
if (this.running || this.this$0.checkedForJmol ) {
return;
}this.running=true;
if (this.this$0.checkForJmol) {
try {
if (!System.getProperty$S("java.version").startsWith$S("1.1")) {
Clazz.forName("org.jmol.adapter.smarter.SmarterJmolAdapter");
this.this$0.jmolAvailable=true;
}if (!this.this$0.jmolAvailable) {
System.out.println$S("Jmol not available - Using mc_view for structures");
}} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
} else {
throw ex;
}
}
} else {
this.this$0.jmolAvailable=false;
if ($I$(1).debug) {
System.err.println$S("Skipping Jmol check. Will use mc_view (probably)");
}}this.this$0.checkedForJmol=true;
this.running=false;
});

Clazz.newMeth(C$, 'notFinished$', function () {
return this.running || !this.this$0.checkedForJmol ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewLite, "LoadingThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['_file','_file2'],'O',['protocol','jalview.io.DataSourceType','applet','jalview.bin.JalviewLite']]]

Clazz.newMeth(C$, 'dbgMsg$S', function (msg) {
if ($I$(1).debug) {
System.err.println$S(msg);
}}, p$1);

Clazz.newMeth(C$, 'resolveFileProtocol$S', function (path) {
if (path.startsWith$S("PASTE")) {
this.protocol=$I$(2).PASTE;
return path.substring$I(5);
}if (path.indexOf$S("://") != -1) {
this.protocol=$I$(2).URL;
return path;
}var documentBase=this.b$['java.applet.Applet'].getDocumentBase$.apply(this.b$['java.applet.Applet'], []);
var withDocBase=p$2.resolveUrlForLocalOrAbsolute$S$java_net_URL.apply(this.this$0, [path, documentBase]);
if ($I$(3).isValidUrl$S(withDocBase)) {
if ($I$(1).debug) {
System.err.println$S("Prepended document base '" + documentBase + "' to make: '" + withDocBase + "'" );
}this.protocol=$I$(2).URL;
return withDocBase;
}var codeBase=this.b$['java.applet.Applet'].getCodeBase$.apply(this.b$['java.applet.Applet'], []);
var withCodeBase=p$2.resolveUrlForLocalOrAbsolute$S$java_net_URL.apply(this.applet, [path, codeBase]);
if (!withCodeBase.equals$O(withDocBase) && $I$(3).isValidUrl$S(withCodeBase) ) {
this.protocol=$I$(2).URL;
if ($I$(1).debug) {
System.err.println$S("Prepended codebase '" + codeBase + "' to make: '" + withCodeBase + "'" );
}return withCodeBase;
}if (this.inArchive$S(path)) {
this.protocol=$I$(2).CLASSLOADER;
}return path;
});

Clazz.newMeth(C$, 'c$$S$S$jalview_bin_JalviewLite', function (file, file2, _applet) {
Clazz.super_(C$, this);
this._file=file;
this._file2=file2;
this.applet=_applet;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var jmolchecker=Clazz.new_($I$(4,1),[this, null]);
jmolchecker.start$();
while (jmolchecker.notFinished$()){
try {
$I$(5).sleep$J(2);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
p$1.startLoading.apply(this, []);
});

Clazz.newMeth(C$, 'startLoading', function () {
p$1.dbgMsg$S.apply(this, ["Loading thread started with:\n>>file\n" + this._file + ">>endfile" ]);
p$1.dbgMsg$S.apply(this, ["Loading started."]);
var newAlignFrame=this.readAlignment$S(this._file);
var newAlignFrame2=this.readAlignment$S(this._file2);
if (newAlignFrame != null ) {
this.addToDisplay$jalview_appletgui_AlignFrame$jalview_appletgui_AlignFrame(newAlignFrame, newAlignFrame2);
this.loadTree$jalview_appletgui_AlignFrame(newAlignFrame);
this.loadScoreFile$jalview_appletgui_AlignFrame(newAlignFrame);
this.loadFeatures$jalview_appletgui_AlignFrame(newAlignFrame);
this.loadAnnotations$jalview_appletgui_AlignFrame(newAlignFrame);
this.loadJnetFile$jalview_appletgui_AlignFrame(newAlignFrame);
this.loadPdbFiles$jalview_appletgui_AlignFrame(newAlignFrame);
} else {
this.this$0.fileFound=false;
this.applet.remove$java_awt_Component(this.this$0.launcher);
this.applet.repaint$();
}p$2.callInitCallback.apply(this.this$0, []);
}, p$1);

Clazz.newMeth(C$, 'addToDisplay$jalview_appletgui_AlignFrame$jalview_appletgui_AlignFrame', function (af, af2) {
if (af2 != null ) {
var al1=af.viewport.getAlignment$();
var al2=af2.viewport.getAlignment$();
var cdna=al1.isNucleotide$() ? al1 : al2;
var prot=al1.isNucleotide$() ? al2 : al1;
if ($I$(6).mapProteinAlignmentToCdna$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI(prot, cdna)) {
al2.alignAs$jalview_datamodel_AlignmentI(al1);
var sf=Clazz.new_($I$(7,1).c$$jalview_appletgui_AlignFrame$jalview_appletgui_AlignFrame,[af, af2]);
sf.addToDisplay$Z$jalview_bin_JalviewLite(this.this$0.embedded, this.this$0);
return;
} else {
var msg="Could not map any sequence in " + af2.getTitle$() + " as " + (al1.isNucleotide$() ? "protein product" : "cDNA") + " for " + af.getTitle$() ;
System.err.println$S(msg);
}}af.addToDisplay$Z(this.this$0.embedded);
});

Clazz.newMeth(C$, 'readAlignment$S', function (fileParam) {
if (fileParam == null ) {
return null;
}var resolvedFile=this.resolveFileProtocol$S(fileParam);
var al=null;
try {
var format=Clazz.new_($I$(8,1)).identify$S$jalview_io_DataSourceType(resolvedFile, this.protocol);
p$1.dbgMsg$S.apply(this, ["File identified as '" + format + "'" ]);
al=Clazz.new_($I$(9,1)).readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(resolvedFile, this.protocol, format);
if ((al != null ) && (al.getHeight$() > 0) ) {
p$1.dbgMsg$S.apply(this, ["Successfully loaded file."]);
al.setDataset$jalview_datamodel_AlignmentI(null);
var newAlignFrame=Clazz.new_($I$(10,1).c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z$Z,[al, this.applet, resolvedFile, this.this$0.embedded, false]);
newAlignFrame.setTitle$S(resolvedFile);
if (this.this$0.initialAlignFrame == null ) {
this.this$0.initialAlignFrame=newAlignFrame;
}this.this$0.currentAlignFrame=newAlignFrame;
if (this.protocol === $I$(2).PASTE ) {
newAlignFrame.setTitle$S($I$(11,"formatMessage$S$OA",["label.sequences_from", Clazz.array(java.lang.Object, -1, [this.applet.getDocumentBase$().toString()])]));
}newAlignFrame.statusBar.setText$S($I$(11,"formatMessage$S$OA",["label.successfully_loaded_file", Clazz.array(java.lang.Object, -1, [resolvedFile])]));
return newAlignFrame;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
p$1.dbgMsg$S.apply(this, ["File load exception."]);
ex.printStackTrace$();
if ($I$(1).debug) {
try {
var fp=Clazz.new_($I$(12,1).c$$O$jalview_io_DataSourceType,[resolvedFile, this.protocol]);
var ln=null;
p$1.dbgMsg$S.apply(this, [">>>Dumping contents of '" + resolvedFile + "' " + "(" + this.protocol + ")" ]);
while ((ln=fp.nextLine$()) != null ){
p$1.dbgMsg$S.apply(this, [ln]);
}
p$1.dbgMsg$S.apply(this, [">>>Dump finished."]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Exception when trying to dump the content of the file parameter.");
e.printStackTrace$();
} else {
throw e;
}
}
}} else {
throw ex;
}
}
return null;
});

Clazz.newMeth(C$, 'loadPdbFiles$jalview_appletgui_AlignFrame', function (alignFrame) {
var result=false;
this.applet.setAlignPdbStructures$Z(this.this$0.getDefaultParameter$S$Z.apply(this.this$0, ["alignpdbfiles", false]));
var pdbFileCount=0;
var pdbs=Clazz.new_($I$(13,1));
var matcher=(this.applet.getDefaultParameter$S$Z("relaxedidmatch", false)) ? Clazz.new_([alignFrame.getAlignViewport$().getAlignment$().getSequencesArray$()],$I$(14,1).c$$jalview_datamodel_SequenceIA) : null;
var param;
do {
if (pdbFileCount > 0) {
param=this.applet.getParameter$S("PDBFILE" + pdbFileCount);
} else {
param=this.applet.getParameter$S("PDBFILE");
}if (param != null ) {
var pdb=Clazz.new_($I$(15,1));
var seqstring;
var seqs=null;
var chains=null;
var st=Clazz.new_($I$(16,1).c$$S$S,[param, " "]);
if (st.countTokens$() < 2) {
var sequence=this.applet.getParameter$S("PDBSEQ");
if (sequence != null ) {
seqs=Clazz.array($I$(17), -1, [matcher == null  ? alignFrame.getAlignViewport$().getAlignment$().findName$S(sequence) : matcher.findIdMatch$S(sequence)]);
}} else {
param=st.nextToken$();
var tmp=Clazz.new_($I$(18,1));
var tmp2=Clazz.new_($I$(18,1));
while (st.hasMoreTokens$()){
seqstring=st.nextToken$();
var st2=Clazz.new_([seqstring, "="],$I$(16,1).c$$S$S);
if (st2.countTokens$() > 1) {
tmp2.add$O(st2.nextToken$());
seqstring=st2.nextToken$();
}tmp.add$O(matcher == null  ? alignFrame.getAlignViewport$().getAlignment$().findName$S(seqstring) : matcher.findIdMatch$S(seqstring));
}
seqs=tmp.toArray$OA(Clazz.array($I$(17), [tmp.size$()]));
if (tmp2.size$() == tmp.size$()) {
chains=tmp2.toArray$OA(Clazz.array(String, [tmp2.size$()]));
}}param=this.resolveFileProtocol$S(param);
pdb.setFile$S(param);
if (seqs != null ) {
for (var i=0; i < seqs.length; i++) {
if (seqs[i] != null ) {
(seqs[i]).addPDBId$jalview_datamodel_PDBEntry(pdb);
$I$(19).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this.applet).registerPDBEntry$jalview_datamodel_PDBEntry(pdb);
} else {
if ($I$(1).debug) {
System.err.println$S("Warning: Possible input parsing error: Null sequence for attachment of PDB (sequence " + i + ")" );
}}}
if (!this.this$0.alignPdbStructures) {
alignFrame.newStructureView$jalview_bin_JalviewLite$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_io_DataSourceType(this.applet, pdb, seqs, chains, this.protocol);
} else {
pdbs.addElement$O(Clazz.array(java.lang.Object, -1, [pdb, seqs, chains, this.protocol]));
}}}pdbFileCount++;
} while (param != null  || pdbFileCount < 10 );
if (pdbs.size$() > 0) {
var seqs=Clazz.array($I$(17), [pdbs.size$(), null]);
var pdb=Clazz.array($I$(15), [pdbs.size$()]);
var chains=Clazz.array(String, [pdbs.size$(), null]);
var protocols=Clazz.array(String, [pdbs.size$()]);
for (var pdbsi=0, pdbsiSize=pdbs.size$(); pdbsi < pdbsiSize; pdbsi++) {
var o=pdbs.elementAt$I(pdbsi);
pdb[pdbsi]=o[0];
seqs[pdbsi]=o[1];
chains[pdbsi]=o[2];
protocols[pdbsi]=o[3];
}
alignFrame.alignedStructureView$jalview_bin_JalviewLite$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$SAA$SA(this.applet, pdb, seqs, chains, protocols);
result=true;
}return result;
});

Clazz.newMeth(C$, 'loadJnetFile$jalview_appletgui_AlignFrame', function (alignFrame) {
var result=false;
var param=this.applet.getParameter$S("jnetfile");
if (param == null ) {
param=this.applet.getParameter$S("jpredfile");
}if (param != null ) {
try {
param=this.resolveFileProtocol$S(param);
var predictions=Clazz.new_($I$(20,1).c$$O$jalview_io_DataSourceType,[param, this.protocol]);
$I$(21,"add_annotation$jalview_io_JPredFile$jalview_datamodel_AlignmentI$I$Z",[predictions, alignFrame.viewport.getAlignment$(), 0, false]);
alignFrame.viewport.getAlignment$().setupJPredAlignment$();
alignFrame.alignPanel.fontChanged$();
alignFrame.alignPanel.setScrollValues$I$I(0, 0);
result=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}return result;
});

Clazz.newMeth(C$, 'loadAnnotations$jalview_appletgui_AlignFrame', function (alignFrame) {
var result=false;
var param=this.applet.getParameter$S("annotations");
if (param != null ) {
param=this.resolveFileProtocol$S(param);
if (Clazz.new_($I$(22,1)).annotateAlignmentView$jalview_api_AlignViewportI$O$jalview_io_DataSourceType(alignFrame.viewport, param, this.protocol)) {
alignFrame.alignPanel.fontChanged$();
alignFrame.alignPanel.setScrollValues$I$I(0, 0);
result=true;
} else {
System.err.println$S("Annotations were not added from annotation file '" + param + "'" );
}}return result;
});

Clazz.newMeth(C$, 'loadFeatures$jalview_appletgui_AlignFrame', function (alignFrame) {
var result=false;
var param=this.applet.getParameter$S("hidefeaturegroups");
if (param != null ) {
alignFrame.setFeatureGroupState$SA$Z(this.this$0.separatorListToArray$S.apply(this.this$0, [param]), false);
}param=this.applet.getParameter$S("showfeaturegroups");
if (param != null ) {
alignFrame.setFeatureGroupState$SA$Z(this.this$0.separatorListToArray$S.apply(this.this$0, [param]), true);
}param=this.applet.getParameter$S("features");
if (param != null ) {
param=this.resolveFileProtocol$S(param);
result=alignFrame.parseFeaturesFile$S$jalview_io_DataSourceType(param, this.protocol);
}param=this.applet.getParameter$S("showFeatureSettings");
if (param != null  && param.equalsIgnoreCase$S("true") ) {
alignFrame.viewport.setShowSequenceFeatures$Z(true);
Clazz.new_($I$(23,1).c$$jalview_appletgui_AlignmentPanel,[alignFrame.alignPanel]);
}return result;
});

Clazz.newMeth(C$, 'loadScoreFile$jalview_appletgui_AlignFrame', function (alignFrame) {
var result=false;
var sScoreFile=this.applet.getParameter$S("scoreFile");
if (sScoreFile != null  && !"".equals$O(sScoreFile) ) {
try {
if ($I$(1).debug) {
System.err.println$S("Attempting to load T-COFFEE score file from the scoreFile parameter");
}result=alignFrame.loadScoreFile$S(sScoreFile);
if (!result) {
System.err.println$S("Failed to parse T-COFFEE parameter as a valid score file ('" + sScoreFile + "')" );
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.printf$S$OA("Cannot read score file: \'%s\'. Cause: %s \n", [sScoreFile, e.getMessage$()]);
} else {
throw e;
}
}
}return result;
});

Clazz.newMeth(C$, 'loadTree$jalview_appletgui_AlignFrame', function (alignFrame) {
var result=false;
var treeFile=this.applet.getParameter$S("tree");
if (treeFile == null ) {
treeFile=this.applet.getParameter$S("treeFile");
}if (treeFile != null ) {
try {
treeFile=this.resolveFileProtocol$S(treeFile);
var fin=Clazz.new_($I$(24,1).c$$S$jalview_io_DataSourceType,[treeFile, this.protocol]);
fin.parse$();
if (fin.getTree$() != null ) {
alignFrame.loadTree$jalview_io_NewickFile$S(fin, treeFile);
result=true;
p$1.dbgMsg$S.apply(this, ["Successfully imported tree."]);
} else {
p$1.dbgMsg$S.apply(this, ["Tree parameter did not resolve to a valid tree."]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}return result;
});

Clazz.newMeth(C$, 'inArchive$S', function (f) {
try {
var rtn=(this.getClass$().getResourceAsStream$S("/" + f) != null );
if ($I$(1).debug) {
System.err.println$S("Resource '" + f + "' was " + (rtn ? "" : "not ") + "located by classloader." );
}return rtn;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Exception checking resources: " + f + " " + ex );
return false;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
