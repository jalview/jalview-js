(function(){var P$=Clazz.newPackage("jalview.ws.rest.params"),I$=[[0,'jalview.datamodel.AlignmentI',['jalview.ws.rest.InputType','.molType'],'org.apache.http.entity.mime.content.StringBody','jalview.io.AnnotationFile','java.util.ArrayList','jalview.ws.params.simple.Option','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationFile", null, 'jalview.ws.rest.InputType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.JVANNOT="JalviewAnnotation";
this.CSVANNOT="CsvAnnotationRow";
this.format="JalviewAnnotation";
},1);

C$.$fields$=[['S',['JVANNOT','CSVANNOT','format']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$ClassA.apply(this,[Clazz.array(Class, -1, [Clazz.getClass($I$(1),['addAnnotation$jalview_datamodel_AlignmentAnnotation','addAnnotation$jalview_datamodel_AlignmentAnnotation$I','addCodonFrame$jalview_datamodel_AlignedCodonFrame','addGroup$jalview_datamodel_SequenceGroup','addSequence$jalview_datamodel_SequenceI','alignAs$jalview_datamodel_AlignmentI','append$jalview_datamodel_AlignmentI','deleteAllAnnotations$Z','deleteAllGroups$','deleteAnnotation$jalview_datamodel_AlignmentAnnotation','deleteAnnotation$jalview_datamodel_AlignmentAnnotation$Z','deleteGroup$jalview_datamodel_SequenceGroup','deleteHiddenSequence$I','deleteSequence$jalview_datamodel_SequenceI','deleteSequence$I','findAllGroups$jalview_datamodel_SequenceI','findGroup$jalview_datamodel_SequenceI$I','findIndex$jalview_datamodel_SequenceI','findIndex$jalview_datamodel_SearchResultsI','findName$S','findName$S$Z','findName$jalview_datamodel_SequenceI$S$Z','findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup','findSequenceMatch$S','getAbsoluteHeight$','getAlignmentAnnotation$','getCodonFrame$jalview_datamodel_SequenceI','getCodonFrames$','getCompactAlignment$','getDataset$','getGapCharacter$','getGroups$','getHeight$','getHiddenColumns$','getHiddenSequences$','getMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI','getProperties$','getProperty$O','getSequenceAt$I','getSequenceAtAbsoluteIndex$I','getSequenceNames$','getSequences$','getSequencesArray$','getSequencesByName$','getVisibleWidth$','getWidth$','hasRNAStructure$','hasValidSequence$','isAligned$','isAligned$Z','isHidden$I','justify$Z','moveSelectedSequencesByOne$jalview_datamodel_SequenceGroup$java_util_Map$Z','padGaps$','propagateInsertions$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentView','realiseMappings$java_util_List','removeCodonFrame$jalview_datamodel_AlignedCodonFrame','replaceSequenceAt$I$jalview_datamodel_SequenceI','setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I','setCodonFrames$java_util_List','setDataset$jalview_datamodel_AlignmentI','setGapCharacter$C','setHiddenColumns$jalview_datamodel_HiddenColumns','setProperty$O$O','setupJPredAlignment$','validateAnnotation$jalview_datamodel_AlignmentAnnotation'])])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'formatForInput$jalview_ws_rest_RestJob',  function (rj) {
var al=rj.getAlignmentForInput$S$jalview_ws_rest_InputType_molType(this.token, $I$(2).MIX);
if (this.format.equals$O("JalviewAnnotation")) {
return Clazz.new_([Clazz.new_($I$(4,1)).printAnnotationsForAlignment$jalview_datamodel_AlignmentI(al)],$I$(3,1).c$$S);
} else {
if (!this.format.equals$O("CsvAnnotationRow")) {
throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException').c$$S,["Unrecognised format for exporting Annotation (" + this.format + ")" ]);
}return Clazz.new_([Clazz.new_($I$(4,1)).printCSVAnnotations$jalview_datamodel_AlignmentAnnotationA(al.getAlignmentAnnotation$())],$I$(3,1).c$$S);
}});

Clazz.newMeth(C$, 'getURLEncodedParameter$',  function () {
var prms=Clazz.new_($I$(5,1));
C$.superclazz.prototype.addBaseParams$java_util_ArrayList.apply(this, [prms]);
prms.add$O("format='" + this.format + "'" );
return prms;
});

Clazz.newMeth(C$, 'getURLtokenPrefix$',  function () {
return "ALANNOTATION";
});

Clazz.newMeth(C$, 'configureProperty$S$S$StringBuffer',  function (tok, val, warnings) {
if (tok.startsWith$S("format")) {
for (var fmt, $fmt = 0, $$fmt = Clazz.array(String, -1, ["CsvAnnotationRow", "JalviewAnnotation"]); $fmt<$$fmt.length&&((fmt=($$fmt[$fmt])),1);$fmt++) {
if (val.equalsIgnoreCase$S(fmt)) {
this.format=fmt;
return true;
}}
warnings.append$S("Invalid annotation file format '" + val + "'. Must be one of (" );
for (var fmt, $fmt = 0, $$fmt = Clazz.array(String, -1, ["CsvAnnotationRow", "JalviewAnnotation"]); $fmt<$$fmt.length&&((fmt=($$fmt[$fmt])),1);$fmt++) {
warnings.append$S(" " + fmt);
}
warnings.append$S(")\n");
}return false;
});

Clazz.newMeth(C$, 'getOptions$',  function () {
var lst=this.getBaseOptions$();
lst.add$O(Clazz.new_(["format", "Alignment annotation upload format", true, "JalviewAnnotation", this.format, $I$(7,"asList$OA",[Clazz.array(String, -1, ["JalviewAnnotation", "CsvAnnotationRow"])]), null],$I$(6,1).c$$S$S$Z$S$S$java_util_Collection$java_net_URL));
return lst;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
