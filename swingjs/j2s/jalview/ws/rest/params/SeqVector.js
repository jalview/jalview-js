(function(){var P$=Clazz.newPackage("jalview.ws.rest.params"),I$=[[0,'jalview.datamodel.AlignmentI','StringBuffer','org.apache.http.entity.mime.content.StringBody','java.util.ArrayList',['jalview.ws.rest.InputType','.molType'],'jalview.ws.params.simple.Option','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SeqVector", null, 'jalview.ws.rest.InputType');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sep=null;
this.type=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$ClassA.apply(this, [Clazz.array(Class, -1, [Clazz.getClass($I$(1),['addAnnotation$jalview_datamodel_AlignmentAnnotation','addAnnotation$jalview_datamodel_AlignmentAnnotation$I','addCodonFrame$jalview_datamodel_AlignedCodonFrame','addGroup$jalview_datamodel_SequenceGroup','addSequence$jalview_datamodel_SequenceI','alignAs$jalview_datamodel_AlignmentI','append$jalview_datamodel_AlignmentI','deleteAllAnnotations$Z','deleteAllGroups$','deleteAnnotation$jalview_datamodel_AlignmentAnnotation','deleteAnnotation$jalview_datamodel_AlignmentAnnotation$Z','deleteGroup$jalview_datamodel_SequenceGroup','deleteHiddenSequence$I','deleteSequence$jalview_datamodel_SequenceI','deleteSequence$I','findAllGroups$jalview_datamodel_SequenceI','findGroup$jalview_datamodel_SequenceI$I','findIndex$jalview_datamodel_SequenceI','findIndex$jalview_datamodel_SearchResultsI','findName$S','findName$S$Z','findName$jalview_datamodel_SequenceI$S$Z','findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup','findSequenceMatch$S','getAbsoluteHeight$','getAlignmentAnnotation$','getCodonFrame$jalview_datamodel_SequenceI','getCodonFrames$','getCompactAlignment$','getDataset$','getGapCharacter$','getGroups$','getHeight$','getHiddenColumns$','getHiddenSequences$','getMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI','getProperties$','getProperty$O','getSequenceAt$I','getSequenceAtAbsoluteIndex$I','getSequenceNames$','getSequences$','getSequencesArray$','getSequencesByName$','getVisibleWidth$','getWidth$','hasRNAStructure$','hasValidSequence$','isAligned$','isAligned$Z','isHidden$I','justify$Z','moveSelectedSequencesByOne$jalview_datamodel_SequenceGroup$java_util_Map$Z','padGaps$','propagateInsertions$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentView','realiseMappings$java_util_List','removeCodonFrame$jalview_datamodel_AlignedCodonFrame','replaceSequenceAt$I$jalview_datamodel_SequenceI','setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I','setCodonFrames$java_util_List','setDataset$jalview_datamodel_AlignmentI','setGapCharacter$C','setHiddenColumns$jalview_datamodel_HiddenColumns','setProperty$O$O','setupJPredAlignment$','validateAnnotation$jalview_datamodel_AlignmentAnnotation'])])]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'formatForInput$jalview_ws_rest_RestJob', function (rj) {
var idvector=Clazz.new_($I$(2));
var list=false;
for (var seq, $seq = 0, $$seq = rj.getSequencesForInput$S$jalview_ws_rest_InputType_molType(this.token, this.type); $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
if (list) {
idvector.append$S(this.sep);
}idvector.append$S(seq.getSequenceAsString$());
}
return Clazz.new_($I$(3).c$$S,[idvector.toString()]);
});

Clazz.newMeth(C$, 'getURLEncodedParameter$', function () {
var prms=Clazz.new_($I$(4));
C$.superclazz.prototype.addBaseParams$java_util_ArrayList.apply(this, [prms]);
prms.add$TE("sep='" + this.sep + "'" );
if (this.type != null ) {
prms.add$TE("type='" + this.type + "'" );
}return prms;
});

Clazz.newMeth(C$, 'getURLtokenPrefix$', function () {
return "SEQS";
});

Clazz.newMeth(C$, 'configureProperty$S$S$StringBuffer', function (tok, val, warnings) {
if (tok.startsWith$S("sep")) {
this.sep=val;
return true;
}if (tok.startsWith$S("type")) {
try {
this.type=$I$(5).valueOf$S(val);
return true;
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
warnings.append$S("Invalid molecule type '" + val + "'. Must be one of (" );
for (var v, $v = 0, $$v = $I$(5).values$(); $v<$$v.length&&((v=($$v[$v])),1);$v++) {
warnings.append$S(" " + v);
}
warnings.append$S(")\n");
} else {
throw x;
}
}
}return false;
});

Clazz.newMeth(C$, 'getOptions$', function () {
var lst=this.getBaseOptions$();
lst.add$TE(Clazz.new_($I$(6).c$$S$S$Z$S$S$java_util_Collection$java_net_URL,["sep", "Separator character between elements of vector", true, ",", this.sep, $I$(7).asList$TTA(Clazz.array(String, -1, [" ", ",", ";", "\t", "|"])), null]));
lst.add$TE(this.createMolTypeOption$S$S$Z$jalview_ws_rest_InputType_molType$jalview_ws_rest_InputType_molType("type", "Sequence type", false, this.type, $I$(5).MIX));
return lst;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
