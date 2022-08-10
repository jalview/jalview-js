(function(){var P$=Clazz.newPackage("jalview.ws.rest.params"),I$=[[0,'jalview.io.FileFormat','jalview.datamodel.AlignmentI','java.io.File','java.io.PrintWriter','java.io.OutputStreamWriter','java.io.BufferedOutputStream','java.io.FileOutputStream','jalview.io.FormatAdapter','org.apache.http.entity.mime.content.FileBody','org.apache.http.entity.mime.content.StringBody','java.util.ArrayList','jalview.io.FileFormats',['jalview.ws.rest.InputType','.molType'],'jalview.ws.params.simple.BooleanOption','jalview.ws.params.simple.Option']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Alignment", null, 'jalview.ws.rest.InputType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.format=$I$(1).Fasta;
this.jvsuffix=false;
this.writeAsFile=false;
},1);

C$.$fields$=[['Z',['jvsuffix','writeAsFile'],'O',['format','jalview.io.FileFormatI','type','jalview.ws.rest.InputType.molType']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$ClassA.apply(this,[Clazz.array(Class, -1, [Clazz.getClass($I$(2),['addAnnotation$jalview_datamodel_AlignmentAnnotation','addAnnotation$jalview_datamodel_AlignmentAnnotation$I','addCodonFrame$jalview_datamodel_AlignedCodonFrame','addGroup$jalview_datamodel_SequenceGroup','addSequence$jalview_datamodel_SequenceI','alignAs$jalview_datamodel_AlignmentI','append$jalview_datamodel_AlignmentI','deleteAllAnnotations$Z','deleteAllGroups$','deleteAnnotation$jalview_datamodel_AlignmentAnnotation','deleteAnnotation$jalview_datamodel_AlignmentAnnotation$Z','deleteGroup$jalview_datamodel_SequenceGroup','deleteHiddenSequence$I','deleteSequence$jalview_datamodel_SequenceI','deleteSequence$I','findAllGroups$jalview_datamodel_SequenceI','findGroup$jalview_datamodel_SequenceI$I','findIndex$jalview_datamodel_SequenceI','findIndex$jalview_datamodel_SearchResultsI','findName$S','findName$S$Z','findName$jalview_datamodel_SequenceI$S$Z','findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup','findSequenceMatch$S','getAbsoluteHeight$','getAlignmentAnnotation$','getCodonFrame$jalview_datamodel_SequenceI','getCodonFrames$','getCompactAlignment$','getDataset$','getGapCharacter$','getGroups$','getHeight$','getHiddenColumns$','getHiddenSequences$','getMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI','getProperties$','getProperty$O','getSequenceAt$I','getSequenceAtAbsoluteIndex$I','getSequenceNames$','getSequences$','getSequencesArray$','getSequencesByName$','getVisibleWidth$','getWidth$','hasRNAStructure$','hasValidSequence$','isAligned$','isAligned$Z','isHidden$I','justify$Z','moveSelectedSequencesByOne$jalview_datamodel_SequenceGroup$java_util_Map$Z','padGaps$','propagateInsertions$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentView','realiseMappings$java_util_List','removeCodonFrame$jalview_datamodel_AlignedCodonFrame','replaceSequenceAt$I$jalview_datamodel_SequenceI','setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I','setCodonFrames$java_util_List','setDataset$jalview_datamodel_AlignmentI','setGapCharacter$C','setHiddenColumns$jalview_datamodel_HiddenColumns','setProperty$O$O','setupJPredAlignment$','validateAnnotation$jalview_datamodel_AlignmentAnnotation'])])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'formatForInput$jalview_ws_rest_RestJob',  function (rj) {
var alignment=rj.getAlignmentForInput$S$jalview_ws_rest_InputType_molType(this.token, this.type);
if (this.writeAsFile) {
try {
var fa=$I$(3).createTempFile$S$S("jvmime", ".fa");
var pw=Clazz.new_([Clazz.new_([Clazz.new_([Clazz.new_($I$(7,1).c$$java_io_File,[fa])],$I$(6,1).c$$java_io_OutputStream), "UTF-8"],$I$(5,1).c$$java_io_OutputStream$S)],$I$(4,1).c$$java_io_Writer);
pw.append$CharSequence(Clazz.new_($I$(8,1)).formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$Z(this.format, alignment, this.jvsuffix));
pw.close$();
return Clazz.new_($I$(9,1).c$$java_io_File$S,[fa, "text/plain"]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('jalview.ws.rest.NoValidInputDataException').c$$S$Exception,["Couldn\'t write out alignment to file.", ex]);
} else {
throw ex;
}
}
} else {
var fa=Clazz.new_($I$(8,1));
fa.setNewlineString$S("\r\n");
return Clazz.new_([(fa.formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$Z(this.format, alignment, this.jvsuffix))],$I$(10,1).c$$S);
}});

Clazz.newMeth(C$, 'getURLEncodedParameter$',  function () {
var prms=Clazz.new_($I$(11,1));
prms.add$O("format='" + this.format.getName$() + "'" );
if (this.type != null ) {
prms.add$O("type='" + this.type.toString() + "'" );
}if (this.jvsuffix) {
prms.add$O("jvsuffix");
}if (this.writeAsFile) {
prms.add$O("writeasfile");
}return prms;
});

Clazz.newMeth(C$, 'getURLtokenPrefix$',  function () {
return "ALIGNMENT";
});

Clazz.newMeth(C$, 'configureProperty$S$S$StringBuffer',  function (tok, val, warnings) {
if (tok.startsWith$S("jvsuffix")) {
this.jvsuffix=true;
return true;
}if (tok.startsWith$S("writeasfile")) {
this.writeAsFile=true;
return true;
}if (tok.startsWith$S("format")) {
for (var fmt, $fmt = $I$(12).getInstance$().getFormats$().iterator$(); $fmt.hasNext$()&&((fmt=($fmt.next$())),1);) {
if (fmt.isWritable$() && val.equalsIgnoreCase$S(fmt.getName$()) ) {
this.format=fmt;
return true;
}}
warnings.append$S("Invalid alignment format '" + val + "'. Must be one of (" );
for (var fmt, $fmt = $I$(12).getInstance$().getWritableFormats$Z(true).iterator$(); $fmt.hasNext$()&&((fmt=($fmt.next$())),1);) {
warnings.append$S(" ").append$S(fmt);
}
warnings.append$S(")\n");
}if (tok.startsWith$S("type")) {
try {
this.type=$I$(13).valueOf$S(val);
return true;
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
warnings.append$S("Invalid molecule type '" + val + "'. Must be one of (" );
for (var v, $v = 0, $$v = $I$(13).values$(); $v<$$v.length&&((v=($$v[$v])),1);$v++) {
warnings.append$S(" " + v);
}
warnings.append$S(")\n");
} else {
throw x;
}
}
}return false;
});

Clazz.newMeth(C$, 'getOptions$',  function () {
var lst=this.getBaseOptions$();
lst.add$O(Clazz.new_($I$(14,1).c$$S$S$Z$Z$Z$java_net_URL,["jvsuffix", "Append jalview style /start-end suffix to ID", false, false, this.jvsuffix, null]));
lst.add$O(Clazz.new_($I$(14,1).c$$S$S$Z$Z$Z$java_net_URL,["writeasfile", "Append jalview style /start-end suffix to ID", false, false, this.writeAsFile, null]));
var writable=$I$(12).getInstance$().getWritableFormats$Z(true);
lst.add$O(Clazz.new_(["format", "Alignment upload format", true, $I$(1).Fasta.toString(), this.format.getName$(), writable, null],$I$(15,1).c$$S$S$Z$S$S$java_util_Collection$java_net_URL));
lst.add$O(this.createMolTypeOption$S$S$Z$jalview_ws_rest_InputType_molType$jalview_ws_rest_InputType_molType("type", "Sequence type", false, this.type, null));
return lst;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
