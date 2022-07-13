(function(){var P$=Clazz.newPackage("jalview.ws.rest.params"),I$=[[0,'jalview.datamodel.AlignmentI','jalview.analysis.AlignmentSorter','StringBuffer','java.util.ArrayList','jalview.util.MessageManager','jalview.util.QuickSort','org.apache.http.entity.mime.content.StringBody',['jalview.ws.rest.InputType','.molType'],'jalview.ws.params.simple.Option','java.util.Arrays','jalview.ws.params.simple.IntegerParameter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SeqGroupIndexVector", null, 'jalview.ws.rest.InputType', 'jalview.ws.rest.AlignmentProcessor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sep=",";
this.minsize=1;
},1);

C$.$fields$=[['I',['minsize'],'S',['sep'],'O',['type','jalview.ws.rest.InputType.molType']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$ClassA.apply(this,[Clazz.array(Class, -1, [Clazz.getClass($I$(1),['addAnnotation$jalview_datamodel_AlignmentAnnotation','addAnnotation$jalview_datamodel_AlignmentAnnotation$I','addCodonFrame$jalview_datamodel_AlignedCodonFrame','addGroup$jalview_datamodel_SequenceGroup','addSequence$jalview_datamodel_SequenceI','alignAs$jalview_datamodel_AlignmentI','append$jalview_datamodel_AlignmentI','deleteAllAnnotations$Z','deleteAllGroups$','deleteAnnotation$jalview_datamodel_AlignmentAnnotation','deleteAnnotation$jalview_datamodel_AlignmentAnnotation$Z','deleteGroup$jalview_datamodel_SequenceGroup','deleteHiddenSequence$I','deleteSequence$jalview_datamodel_SequenceI','deleteSequence$I','findAllGroups$jalview_datamodel_SequenceI','findGroup$jalview_datamodel_SequenceI$I','findIndex$jalview_datamodel_SequenceI','findIndex$jalview_datamodel_SearchResultsI','findName$S','findName$S$Z','findName$jalview_datamodel_SequenceI$S$Z','findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup','findSequenceMatch$S','getAbsoluteHeight$','getAlignmentAnnotation$','getCodonFrame$jalview_datamodel_SequenceI','getCodonFrames$','getCompactAlignment$','getDataset$','getGapCharacter$','getGroups$','getHeight$','getHiddenColumns$','getHiddenSequences$','getMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI','getProperties$','getProperty$O','getSequenceAt$I','getSequenceAtAbsoluteIndex$I','getSequenceNames$','getSequences$','getSequencesArray$','getSequencesByName$','getVisibleWidth$','getWidth$','hasRNAStructure$','hasValidSequence$','isAligned$','isAligned$Z','isHidden$I','justify$Z','moveSelectedSequencesByOne$jalview_datamodel_SequenceGroup$java_util_Map$Z','padGaps$','propagateInsertions$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentView','realiseMappings$java_util_List','removeCodonFrame$jalview_datamodel_AlignedCodonFrame','replaceSequenceAt$I$jalview_datamodel_SequenceI','setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I','setCodonFrames$java_util_List','setDataset$jalview_datamodel_AlignmentI','setGapCharacter$C','setHiddenColumns$jalview_datamodel_HiddenColumns','setProperty$O$O','setupJPredAlignment$','validateAnnotation$jalview_datamodel_AlignmentAnnotation'])])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'prepareAlignment$jalview_datamodel_AlignmentI',  function (al) {
$I$(2).sortByGroup$jalview_datamodel_AlignmentI(al);
return al;
});

Clazz.newMeth(C$, 'formatForInput$jalview_ws_rest_RestJob',  function (rj) {
var idvector=Clazz.new_($I$(3,1));
var list=false;
var al=rj.getAlignmentForInput$S$jalview_ws_rest_InputType_molType(this.token, this.type);
var gl=Clazz.new_($I$(4,1));
var p=0;
var lowest=al.getHeight$();
var highest=0;
var sgs=al.getGroups$();
{
for (var sg, $sg = sgs.iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (sg.getSize$() < this.minsize) {
throw Clazz.new_(Clazz.load('jalview.ws.rest.NoValidInputDataException').c$$S,[$I$(5,"formatMessage$S$SA",["exception.notvaliddata_group_contains_less_than_min_seqs", Clazz.array(String, -1, [Integer.valueOf$I(this.minsize).toString()])])]);
}var se=null;
for (var sq, $sq = 0, $$sq = sg.getSequencesInOrder$jalview_datamodel_AlignmentI(al); $sq<$$sq.length&&((sq=($$sq[$sq])),1);$sq++) {
p=al.findIndex$jalview_datamodel_SequenceI(sq);
if (lowest > p) {
lowest=p;
}if (highest < p) {
highest=p;
}if (se == null ) {
se=Clazz.array(Integer.TYPE, -1, [p, p]);
} else {
if (p < se[0]) {
se[0]=p;
}if (p > se[1]) {
se[1]=p;
}}}
if (se != null ) {
gl.add$O(se);
}}
}if (gl.size$() > 0) {
if (lowest - 1 > this.minsize) {
gl.add$I$O(0, Clazz.array(Integer.TYPE, -1, [0, lowest - 2]));
}if ((al.getHeight$() - 1 - highest ) > this.minsize) {
gl.add$O(Clazz.array(Integer.TYPE, -1, [highest + 1, al.getHeight$() - 1]));
}} else {
gl.add$O(Clazz.array(Integer.TYPE, -1, [0, al.getHeight$() - 1]));
}if (this.min >= 0 && gl.size$() < this.min ) {
throw Clazz.new_(Clazz.load('jalview.ws.rest.NoValidInputDataException').c$$S,["Not enough sequence groups for input. Need at least " + this.min + " groups (including ungrouped regions)." ]);
}if (this.max > 0 && gl.size$() > this.max ) {
throw Clazz.new_(Clazz.load('jalview.ws.rest.NoValidInputDataException').c$$S,["Too many sequence groups for input. Need at most " + this.max + " groups (including ungrouped regions)." ]);
}var vals=gl.toArray$OA(Clazz.array(Integer.TYPE, [gl.size$(), null]));
var srt=Clazz.array(Integer.TYPE, [gl.size$()]);
for (var i=0; i < vals.length; i++) {
srt[i]=vals[i][0];
}
$I$(6).sort$IA$OA(srt, vals);
list=false;
var last=vals[0][0] - 1;
for (var range, $range = 0, $$range = vals; $range<$$range.length&&((range=($$range[$range])),1);$range++) {
if (range[1] > last) {
if (list) {
idvector.append$S(this.sep);
}idvector.append$I(range[1] - last);
last=range[1];
list=true;
}}
return Clazz.new_([idvector.toString()],$I$(7,1).c$$S);
});

Clazz.newMeth(C$, 'setMinsize$I',  function (i) {
if (this.minsize >= 1) {
this.minsize=i;
} else {
this.minsize=1;
}});

Clazz.newMeth(C$, 'getURLEncodedParameter$',  function () {
var prms=Clazz.new_($I$(4,1));
C$.superclazz.prototype.addBaseParams$java_util_ArrayList.apply(this, [prms]);
prms.add$O("minsize='" + this.minsize + "'" );
prms.add$O("sep='" + this.sep + "'" );
if (this.type != null ) {
prms.add$O("type='" + this.type + "'" );
}return prms;
});

Clazz.newMeth(C$, 'getURLtokenPrefix$',  function () {
return "PARTITION";
});

Clazz.newMeth(C$, 'configureProperty$S$S$StringBuffer',  function (tok, val, warnings) {
if (tok.startsWith$S("sep")) {
this.sep=val;
return true;
}if (tok.startsWith$S("minsize")) {
try {
this.minsize=(Integer.valueOf$S(val)).$c();
if (this.minsize >= 0) {
return true;
}} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
} else {
throw x;
}
}
warnings.append$S("Invalid minsize value '" + val + "'. Must be a positive integer.\n" );
}if (tok.startsWith$S("type")) {
try {
this.type=$I$(8).valueOf$S(val);
return true;
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
warnings.append$S("Invalid molecule type '" + val + "'. Must be one of (" );
for (var v, $v = 0, $$v = $I$(8).values$(); $v<$$v.length&&((v=($$v[$v])),1);$v++) {
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
lst.add$O(Clazz.new_(["sep", "Separator character between elements of vector", true, ",", this.sep, $I$(10,"asList$OA",[Clazz.array(String, -1, [" ", ",", ";", "\t", "|"])]), null],$I$(9,1).c$$S$S$Z$S$S$java_util_Collection$java_net_URL));
lst.add$O(Clazz.new_($I$(11,1).c$$S$S$Z$I$I$I$I,["minsize", "Minimum size of partition allowed by service", true, 1, this.minsize, 1, 0]));
lst.add$O(this.createMolTypeOption$S$S$Z$jalview_ws_rest_InputType_molType$jalview_ws_rest_InputType_molType("type", "Sequence type", false, this.type, $I$(8).MIX));
return lst;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
