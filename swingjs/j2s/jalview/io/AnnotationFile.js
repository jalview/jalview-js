(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'StringBuffer','java.util.Hashtable','java.util.BitSet','jalview.util.Format','jalview.util.Comparison','java.awt.Color','jalview.schemes.ColourSchemeProperty','jalview.datamodel.ColumnSelection','jalview.datamodel.HiddenColumns','jalview.io.FileParse','java.util.ArrayList','java.util.StringTokenizer','java.util.Vector','jalview.datamodel.AlignmentAnnotation','jalview.datamodel.Annotation','jalview.util.ColorUtils','jalview.datamodel.GraphLine','jalview.datamodel.SequenceGroup','java.util.HashMap','jalview.analysis.Conservation']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationFile", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ViewDef',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.newline=System.getProperty$S("line.separator");
this.refSeq=null;
this.refSeqId=null;
this.nlinesread=0;
this.lastread="";
},1);

C$.$fields$=[['J',['nlinesread'],'S',['newline','refSeqId','lastread'],'O',['text','StringBuffer','refSeq','jalview.datamodel.SequenceI']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init',  function () {
this.text=Clazz.new_(["JALVIEW_ANNOTATION" + this.newline + "# Created: " + Clazz.new_(java.util.Date) + this.newline + this.newline ],$I$(1,1).c$$S);
this.refSeq=null;
this.refSeqId=null;
}, p$1);

Clazz.newMeth(C$, 'printAnnotations$jalview_datamodel_AlignmentAnnotationA$java_util_List$java_util_Hashtable',  function (annotations, list, properties) {
return this.printAnnotations$jalview_datamodel_AlignmentAnnotationA$java_util_List$java_util_Hashtable$jalview_datamodel_HiddenColumns$jalview_datamodel_AlignmentI$jalview_io_AnnotationFile_ViewDef(annotations, list, properties, null, null, null);
});

Clazz.newMeth(C$, 'printAnnotations$jalview_datamodel_AlignmentAnnotationA$java_util_List$java_util_Hashtable$jalview_datamodel_HiddenColumns$jalview_datamodel_AlignmentI$jalview_io_AnnotationFile_ViewDef',  function (annotations, list, properties, cs, al, view) {
if (view != null ) {
if (view.viewname != null ) {
this.text.append$S("VIEW_DEF\t" + view.viewname + "\n" );
}if (list == null ) {
}if (cs == null ) {
cs=view.hiddencols;
}if (al == null ) {
}}if (al != null  && al.hasSeqrep$() ) {
this.text.append$S("VIEW_SETREF\t" + al.getSeqrep$().getName$() + "\n" );
}if (cs != null  && cs.hasHiddenColumns$() ) {
this.text.append$S("VIEW_HIDECOLS\t");
var regions=cs.regionsToString$S$S(",", "-");
this.text.append$S(regions);
this.text.append$S("\n");
}if (annotations != null ) {
var oneColour=true;
var row;
var comma;
var refSeq=null;
var refGroup=null;
var colours=Clazz.new_($I$(1,1));
var graphLine=Clazz.new_($I$(1,1));
var rowprops=Clazz.new_($I$(1,1));
var graphGroup=Clazz.new_($I$(2,1));
var graphGroup_refs=Clazz.new_($I$(2,1));
var graphGroupSeen=Clazz.new_($I$(3,1));
var color;
for (var i=0; i < annotations.length; i++) {
row=annotations[i];
if (!row.visible && !row.hasScore$() && !(row.graphGroup > -1 && graphGroupSeen.get$I(row.graphGroup) )  ) {
continue;
}color=null;
oneColour=true;
p$1.writeSequence_Ref$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI.apply(this, [refSeq, row.sequenceRef]);
refSeq=row.sequenceRef;
p$1.writeGroup_Ref$jalview_datamodel_SequenceGroup$jalview_datamodel_SequenceGroup.apply(this, [refGroup, row.groupRef]);
refGroup=row.groupRef;
var hasGlyphs=row.hasIcons;
var hasLabels=row.hasText;
var hasValues=row.hasScore;
var hasText=false;
for (var j=0; row.annotations != null  && j < row.annotations.length  && (!hasGlyphs || !hasLabels || !hasValues  ) ; j++) {
if (row.annotations[j] != null ) {
hasLabels=!!(hasLabels|((row.annotations[j].displayCharacter != null  && row.annotations[j].displayCharacter.length$() > 0  && !row.annotations[j].displayCharacter.equals$O(" ") )));
hasGlyphs=!!(hasGlyphs|(((row.annotations[j].secondaryStructure).$c() != 0  && row.annotations[j].secondaryStructure != " " )));
hasValues=!!(hasValues|((!Float.isNaN$F(row.annotations[j].value))));
hasText=!!(hasText|((row.annotations[j].description != null  && row.annotations[j].description.length$() > 0 )));
}}
if (row.graph == 0) {
this.text.append$S("NO_GRAPH\t");
hasValues=false;
} else {
if (row.graph == 1) {
this.text.append$S("BAR_GRAPH\t");
hasGlyphs=false;
} else if (row.graph == 2) {
hasGlyphs=false;
this.text.append$S("LINE_GRAPH\t");
}if (row.getThreshold$() != null ) {
graphLine.append$S("GRAPHLINE\t");
graphLine.append$S(row.label);
graphLine.append$S("\t");
graphLine.append$F(row.getThreshold$().value);
graphLine.append$S("\t");
graphLine.append$S(row.getThreshold$().label);
graphLine.append$S("\t");
graphLine.append$S($I$(4,"getHexString$java_awt_Color",[row.getThreshold$().colour]));
graphLine.append$S(this.newline);
}if (row.graphGroup > -1) {
graphGroupSeen.set$I(row.graphGroup);
var key=Integer.valueOf$I(row.graphGroup);
if (graphGroup.containsKey$O(key)) {
graphGroup.put$O$O(key, graphGroup.get$O(key) + "\t" + row.label );
} else {
graphGroup_refs.put$O$O(key, Clazz.array(java.lang.Object, -1, [refSeq, refGroup]));
graphGroup.put$O$O(key, row.label);
}}}this.text.append$S(row.label + "\t");
if (row.description != null ) {
this.text.append$S(row.description + "\t");
}for (var j=0; row.annotations != null  && j < row.annotations.length ; j++) {
if (refSeq != null  && $I$(5,"isGap$C",[refSeq.getCharAt$I(j)]) ) {
continue;
}if (row.annotations[j] != null ) {
comma="";
if (hasGlyphs) {
this.text.append$S(comma);
if (row.annotations[j].secondaryStructure != " ") {
this.text.append$C(row.annotations[j].secondaryStructure);
}comma=",";
}if (hasValues) {
if (!Float.isNaN$F(row.annotations[j].value)) {
this.text.append$S(comma + new Float(row.annotations[j].value).toString());
} else {
this.text.append$S(comma + new Float(0.0).toString());
}comma=",";
}if (hasLabels) {
if (row.annotations[j].displayCharacter != null  && row.annotations[j].displayCharacter.length$() > 0  && !row.annotations[j].displayCharacter.equals$O(" ") ) {
this.text.append$S(comma + row.annotations[j].displayCharacter);
comma=",";
}}if (hasText) {
if (row.annotations[j].description != null  && row.annotations[j].description.length$() > 0  && !row.annotations[j].description.equals$O(row.annotations[j].displayCharacter) ) {
this.text.append$S(comma + row.annotations[j].description);
comma=",";
}}if (color != null  && !color.equals$O(row.annotations[j].colour) ) {
oneColour=false;
}color=row.annotations[j].colour;
if (row.annotations[j].colour != null  && row.annotations[j].colour !== $I$(6).black  ) {
this.text.append$S(comma + "[" + $I$(4).getHexString$java_awt_Color(row.annotations[j].colour) + "]" );
comma=",";
}}this.text.append$S("|");
}
if (row.hasScore$()) {
this.text.append$S("\t" + new Double(row.score).toString());
}this.text.append$S(this.newline);
if (color != null  && color !== $I$(6).black   && oneColour ) {
colours.append$S("COLOUR\t");
colours.append$S(row.label);
colours.append$S("\t");
colours.append$S($I$(4).getHexString$java_awt_Color(color));
colours.append$S(this.newline);
}if (row.scaleColLabel || row.showAllColLabels || row.centreColLabels  ) {
rowprops.append$S("ROWPROPERTIES\t");
rowprops.append$S(row.label);
rowprops.append$S("\tscaletofit=");
rowprops.append$Z(row.scaleColLabel);
rowprops.append$S("\tshowalllabs=");
rowprops.append$Z(row.showAllColLabels);
rowprops.append$S("\tcentrelabs=");
rowprops.append$Z(row.centreColLabels);
rowprops.append$S(this.newline);
}if (graphLine.length$() > 0) {
this.text.append$S(graphLine.toString());
graphLine.setLength$I(0);
}}
this.text.append$S(this.newline);
this.text.append$S(colours.toString());
if (graphGroup.size$() > 0) {
var oldRefSeq=refSeq;
var oldRefGroup=refGroup;
for (var combine_statement, $combine_statement = graphGroup.entrySet$().iterator$(); $combine_statement.hasNext$()&&((combine_statement=($combine_statement.next$())),1);) {
var seqRefAndGroup=graphGroup_refs.get$O(combine_statement.getKey$());
p$1.writeSequence_Ref$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI.apply(this, [refSeq, seqRefAndGroup[0]]);
refSeq=seqRefAndGroup[0];
p$1.writeGroup_Ref$jalview_datamodel_SequenceGroup$jalview_datamodel_SequenceGroup.apply(this, [refGroup, seqRefAndGroup[1]]);
refGroup=seqRefAndGroup[1];
this.text.append$S("COMBINE\t");
this.text.append$S(combine_statement.getValue$());
this.text.append$S(this.newline);
}
p$1.writeSequence_Ref$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI.apply(this, [refSeq, oldRefSeq]);
refSeq=oldRefSeq;
p$1.writeGroup_Ref$jalview_datamodel_SequenceGroup$jalview_datamodel_SequenceGroup.apply(this, [refGroup, oldRefGroup]);
refGroup=oldRefGroup;
}this.text.append$S(rowprops.toString());
}if (list != null ) {
this.printGroups$java_util_List(list);
}if (properties != null ) {
this.text.append$S(this.newline);
this.text.append$S(this.newline);
this.text.append$S("ALIGNMENT");
var en=properties.keys$();
while (en.hasMoreElements$()){
var key=en.nextElement$().toString();
this.text.append$S("\t");
this.text.append$S(key);
this.text.append$S("=");
this.text.append$O(properties.get$O(key));
}
}return this.text.toString();
});

Clazz.newMeth(C$, 'writeGroup_Ref$jalview_datamodel_SequenceGroup$jalview_datamodel_SequenceGroup',  function (refGroup, next_refGroup) {
if (next_refGroup == null ) {
if (refGroup != null ) {
this.text.append$S(this.newline);
this.text.append$S("GROUP_REF\t");
this.text.append$S("ALIGNMENT");
this.text.append$S(this.newline);
}return Boolean.valueOf$Z(true);
} else {
if (refGroup == null  || refGroup !== next_refGroup  ) {
this.text.append$S(this.newline);
this.text.append$S("GROUP_REF\t");
this.text.append$S(next_refGroup.getName$());
this.text.append$S(this.newline);
return Boolean.valueOf$Z(true);
}}return Boolean.valueOf$Z(false);
}, p$1);

Clazz.newMeth(C$, 'writeSequence_Ref$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI',  function (refSeq, next_refSeq) {
if (next_refSeq == null ) {
if (refSeq != null ) {
this.text.append$S(this.newline);
this.text.append$S("SEQUENCE_REF\t");
this.text.append$S("ALIGNMENT");
this.text.append$S(this.newline);
return true;
}} else {
if (refSeq == null  || refSeq !== next_refSeq  ) {
this.text.append$S(this.newline);
this.text.append$S("SEQUENCE_REF\t");
this.text.append$S(next_refSeq.getName$());
this.text.append$S(this.newline);
return true;
}}return false;
}, p$1);

Clazz.newMeth(C$, 'printGroups$java_util_List',  function (list) {
var seqrep=null;
for (var sg, $sg = list.iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (!sg.hasSeqrep$()) {
this.text.append$S("SEQUENCE_GROUP\t" + sg.getName$() + "\t" + (sg.getStartRes$() + 1) + "\t" + (sg.getEndRes$() + 1) + "\t" + "-1\t" );
seqrep=null;
} else {
seqrep=sg.getSeqrep$();
this.text.append$S("SEQUENCE_REF\t");
this.text.append$S(seqrep.getName$());
this.text.append$S(this.newline);
this.text.append$S("SEQUENCE_GROUP\t");
this.text.append$S(sg.getName$());
this.text.append$S("\t");
this.text.append$I((seqrep.findPosition$I(sg.getStartRes$())));
this.text.append$S("\t");
this.text.append$I((seqrep.findPosition$I(sg.getEndRes$())));
this.text.append$S("\t");
this.text.append$S("-1\t");
}for (var s=0; s < sg.getSize$(); s++) {
this.text.append$S(sg.getSequenceAt$I(s).getName$());
this.text.append$S("\t");
}
this.text.append$S(this.newline);
this.text.append$S("PROPERTIES\t");
this.text.append$S(sg.getName$());
this.text.append$S("\t");
if (sg.getDescription$() != null ) {
this.text.append$S("description=");
this.text.append$S(sg.getDescription$());
this.text.append$S("\t");
}if (sg.cs != null ) {
this.text.append$S("colour=");
this.text.append$S($I$(7,"getColourName$jalview_schemes_ColourSchemeI",[sg.cs.getColourScheme$()]));
this.text.append$S("\t");
if (sg.cs.getThreshold$() != 0) {
this.text.append$S("pidThreshold=");
this.text.append$I(sg.cs.getThreshold$());
}if (sg.cs.conservationApplied$()) {
this.text.append$S("consThreshold=");
this.text.append$I(sg.cs.getConservationInc$());
this.text.append$S("\t");
}}this.text.append$S("outlineColour=");
this.text.append$S($I$(4,"getHexString$java_awt_Color",[sg.getOutlineColour$()]));
this.text.append$S("\t");
this.text.append$S("displayBoxes=");
this.text.append$Z(sg.getDisplayBoxes$());
this.text.append$S("\t");
this.text.append$S("displayText=");
this.text.append$Z(sg.getDisplayText$());
this.text.append$S("\t");
this.text.append$S("colourText=");
this.text.append$Z(sg.getColourText$());
this.text.append$S("\t");
this.text.append$S("showUnconserved=");
this.text.append$Z(sg.getShowNonconserved$());
this.text.append$S("\t");
if (sg.textColour !== $I$(6).black ) {
this.text.append$S("textCol1=");
this.text.append$S($I$(4).getHexString$java_awt_Color(sg.textColour));
this.text.append$S("\t");
}if (sg.textColour2 !== $I$(6).white ) {
this.text.append$S("textCol2=");
this.text.append$S($I$(4).getHexString$java_awt_Color(sg.textColour2));
this.text.append$S("\t");
}if (sg.thresholdTextColour != 0) {
this.text.append$S("textColThreshold=");
this.text.append$I(sg.thresholdTextColour);
this.text.append$S("\t");
}if (sg.idColour != null ) {
this.text.append$S("idColour=");
this.text.append$S($I$(4).getHexString$java_awt_Color(sg.idColour));
this.text.append$S("\t");
}if (sg.isHidereps$()) {
this.text.append$S("hide=true\t");
}if (sg.isHideCols$()) {
this.text.append$S("hidecols=true\t");
}if (seqrep != null ) {
this.text.append$S(this.newline);
this.text.append$S("SEQUENCE_REF");
}this.text.append$S(this.newline);
this.text.append$S(this.newline);
}
});

Clazz.newMeth(C$, 'annotateAlignmentView$jalview_api_AlignViewportI$O$jalview_io_DataSourceType',  function (viewport, file, protocol) {
var colSel=viewport.getColumnSelection$();
var hidden=viewport.getAlignment$().getHiddenColumns$();
if (colSel == null ) {
colSel=Clazz.new_($I$(8,1));
}if (hidden == null ) {
hidden=Clazz.new_($I$(9,1));
}var rslt=this.readAnnotationFile$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$O$jalview_io_DataSourceType(viewport.getAlignment$(), hidden, file, protocol);
if (rslt && (colSel.hasSelectedColumns$() || hidden.hasHiddenColumns$() ) ) {
viewport.setColumnSelection$jalview_datamodel_ColumnSelection(colSel);
viewport.getAlignment$().setHiddenColumns$jalview_datamodel_HiddenColumns(hidden);
}return rslt;
});

Clazz.newMeth(C$, 'readAnnotationFile$jalview_datamodel_AlignmentI$S$jalview_io_DataSourceType',  function (al, file, sourceType) {
return this.readAnnotationFile$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$O$jalview_io_DataSourceType(al, null, file, sourceType);
});

Clazz.newMeth(C$, 'readAnnotationFile$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$O$jalview_io_DataSourceType',  function (al, hidden, file, sourceType) {
var $in=null;
try {
$in=Clazz.new_($I$(10,1)).getBufferedReader$O$jalview_io_DataSourceType(file, sourceType);
if ($in != null ) {
return this.parseAnnotationFrom$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$java_io_BufferedReader(al, hidden, $in);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
System.out.println$S("Problem reading annotation file: " + ex);
if (Long.$gt(this.nlinesread,0 )) {
System.out.println$S("Last read line " + Long.$s(this.nlinesread) + ": '" + this.lastread + "' (first 80 chars) ..." );
}return false;
} else {
throw ex;
}
}
return false;
});

Clazz.newMeth(C$, 'parseAnnotationFrom$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$java_io_BufferedReader',  function (al, hidden, $in) {
this.nlinesread=0;
var combineAnnotation_calls=Clazz.new_($I$(11,1));
var deferredAnnotation_calls=Clazz.new_($I$(11,1));
var modified=false;
var groupRef=null;
var groupRefRows=Clazz.new_($I$(2,1));
var autoAnnots=Clazz.new_($I$(2,1));
{
var line;
var label;
var description;
var token;
var graphStyle;
var index;
var refSeqIndex=1;
var existingAnnotations=0;
var overrideAutoAnnot=false;
if (al.getAlignmentAnnotation$() != null ) {
existingAnnotations=al.getAlignmentAnnotation$().length;
if (existingAnnotations > 0) {
var aa=al.getAlignmentAnnotation$();
for (var aai=0; aai < aa.length; aai++) {
if (aa[aai].autoCalculated) {
autoAnnots.put$O$O(p$1.autoAnnotsKey$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_SequenceI$S.apply(this, [aa[aai], aa[aai].sequenceRef, (aa[aai].groupRef == null  ? null : aa[aai].groupRef.getName$())]), Integer.valueOf$I(1));
}}
}}var alWidth=al.getWidth$();
var st;
var annotations;
var annotation=null;
var jvAnnotationFile=false;
while ((line=$in.readLine$()) != null ){
(this.nlinesread=Long.$inc(this.nlinesread,1));
this.lastread= String.instantialize(line);
if (line.indexOf$S("#") == 0) {
continue;
}if (line.indexOf$S("JALVIEW_ANNOTATION") > -1) {
jvAnnotationFile=true;
break;
}}
if (!jvAnnotationFile) {
$in.close$();
return false;
}while ((line=$in.readLine$()) != null ){
(this.nlinesread=Long.$inc(this.nlinesread,1));
this.lastread= String.instantialize(line);
if (line.indexOf$S("#") == 0 || line.indexOf$S("JALVIEW_ANNOTATION") > -1  || line.length$() == 0 ) {
continue;
}st=Clazz.new_($I$(12,1).c$$S$S,[line, "\t"]);
token=st.nextToken$();
if (token.equalsIgnoreCase$S("COLOUR")) {
this.colourAnnotations$jalview_datamodel_AlignmentI$S$S(al, st.nextToken$(), st.nextToken$());
modified=true;
continue;
} else if (token.equalsIgnoreCase$S("COMBINE")) {
combineAnnotation_calls.add$O(Clazz.array(java.lang.Object, -1, [st, this.refSeq, groupRef]));
modified=true;
continue;
} else if (token.equalsIgnoreCase$S("ROWPROPERTIES")) {
this.addRowProperties$jalview_datamodel_AlignmentI$java_util_StringTokenizer(al, st);
modified=true;
continue;
} else if (token.equalsIgnoreCase$S("GRAPHLINE")) {
deferredAnnotation_calls.add$O(Clazz.array(java.lang.Object, -1, ["GRAPHLINE", st, this.refSeq, groupRef]));
modified=true;
continue;
} else if (token.equalsIgnoreCase$S("SEQUENCE_REF")) {
if (st.hasMoreTokens$()) {
this.refSeq=al.findName$S(this.refSeqId=st.nextToken$());
if (this.refSeq == null ) {
this.refSeqId=null;
}try {
refSeqIndex=Integer.parseInt$S(st.nextToken$());
if (refSeqIndex < 1) {
refSeqIndex=1;
System.out.println$S("WARNING: SEQUENCE_REF index must be > 0 in AnnotationFile");
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
refSeqIndex=1;
} else {
throw ex;
}
}
} else {
this.refSeq=null;
this.refSeqId=null;
}continue;
} else if (token.equalsIgnoreCase$S("GROUP_REF")) {
groupRef=null;
if (st.hasMoreTokens$()) {
groupRef=st.nextToken$();
if (groupRef.length$() < 1) {
groupRef=null;
} else {
if (groupRefRows.get$O(groupRef) == null ) {
groupRefRows.put$O$O(groupRef, Clazz.new_($I$(13,1)));
}}}continue;
} else if (token.equalsIgnoreCase$S("SEQUENCE_GROUP")) {
this.addGroup$jalview_datamodel_AlignmentI$java_util_StringTokenizer(al, st);
modified=true;
continue;
} else if (token.equalsIgnoreCase$S("PROPERTIES")) {
this.addProperties$jalview_datamodel_AlignmentI$java_util_StringTokenizer(al, st);
modified=true;
continue;
} else if (token.equalsIgnoreCase$S("BELOW_ALIGNMENT")) {
this.setBelowAlignment$jalview_datamodel_AlignmentI$java_util_StringTokenizer(al, st);
modified=true;
continue;
} else if (token.equalsIgnoreCase$S("ALIGNMENT")) {
this.addAlignmentDetails$jalview_datamodel_AlignmentI$java_util_StringTokenizer(al, st);
modified=true;
continue;
} else if (token.equalsIgnoreCase$S("VIEW_SETREF")) {
if (this.refSeq != null ) {
al.setSeqrep$jalview_datamodel_SequenceI(this.refSeq);
}modified=true;
continue;
} else if (token.equalsIgnoreCase$S("VIEW_HIDECOLS")) {
if (st.hasMoreTokens$()) {
if (hidden == null ) {
hidden=Clazz.new_($I$(9,1));
}p$1.parseHideCols$jalview_datamodel_HiddenColumns$S.apply(this, [hidden, st.nextToken$()]);
}modified=true;
continue;
} else if (token.equalsIgnoreCase$S("HIDE_INSERTIONS")) {
var sr=this.refSeq == null  ? al.getSeqrep$() : this.refSeq;
if (sr == null ) {
sr=al.getSequenceAt$I(0);
}if (sr != null ) {
if (hidden == null ) {
System.err.println$S("Cannot process HIDE_INSERTIONS without an alignment view: Ignoring line: " + line);
} else {
hidden.hideList$java_util_List(sr.getInsertions$());
}}modified=true;
continue;
}graphStyle=$I$(14).getGraphValueFromString$S(token);
label=st.nextToken$();
index=0;
annotations=Clazz.array($I$(15), [alWidth]);
description=null;
var score=NaN;
if (st.hasMoreTokens$()) {
line=st.nextToken$();
if (line.indexOf$S("|") == -1) {
description=line;
if (st.hasMoreTokens$()) {
line=st.nextToken$();
}}if (st.hasMoreTokens$()) {
score=Float.valueOf$S(st.nextToken$()).floatValue$();
}st=Clazz.new_($I$(12,1).c$$S$S$Z,[line, "|", true]);
var emptyColumn=true;
var onlyOneElement=(st.countTokens$() == 1);
while (st.hasMoreElements$() && index < alWidth ){
token=st.nextToken$().trim$();
if (onlyOneElement) {
try {
score=Float.valueOf$S(token).floatValue$();
break;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
}if (token.equals$O("|")) {
if (emptyColumn) {
++index;
}emptyColumn=true;
} else {
annotations[index++]=this.parseAnnotation$S$I(token, graphStyle);
emptyColumn=false;
}}
}annotation=Clazz.new_([label, description, (index == 0) ? null : annotations, 0, 0, graphStyle],$I$(14,1).c$$S$S$jalview_datamodel_AnnotationA$F$F$I);
annotation.score=score;
if (!overrideAutoAnnot && autoAnnots.containsKey$O(p$1.autoAnnotsKey$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_SequenceI$S.apply(this, [annotation, this.refSeq, groupRef])) ) {
continue;
}if (this.refSeq != null ) {
annotation.belowAlignment=false;
var referedSeq=this.refSeq;
do {
var ann=Clazz.new_($I$(14,1).c$$jalview_datamodel_AlignmentAnnotation,[annotation]);
annotation.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(referedSeq, refSeqIndex, false);
annotation.adjustForAlignment$();
referedSeq.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(annotation);
al.addAnnotation$jalview_datamodel_AlignmentAnnotation(annotation);
al.setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I(annotation, al.getAlignmentAnnotation$().length - existingAnnotations - 1 );
if (groupRef != null ) {
(groupRefRows.get$O(groupRef)).addElement$O(annotation);
}annotation=ann;
} while (this.refSeqId != null  && (referedSeq=al.findName$jalview_datamodel_SequenceI$S$Z(referedSeq, this.refSeqId, true)) != null  );
} else {
al.addAnnotation$jalview_datamodel_AlignmentAnnotation(annotation);
al.setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I(annotation, al.getAlignmentAnnotation$().length - existingAnnotations - 1 );
if (groupRef != null ) {
(groupRefRows.get$O(groupRef)).addElement$O(annotation);
}}modified=true;
}
var groupRefLookup=Clazz.new_($I$(2,1));
var en=groupRefRows.keys$();
while (en.hasMoreElements$()){
groupRef=en.nextElement$();
var matched=false;
for (var theGroup, $theGroup = al.getGroups$().iterator$(); $theGroup.hasNext$()&&((theGroup=($theGroup.next$())),1);) {
if (theGroup.getName$().equals$O(groupRef)) {
if (matched) {
System.err.println$S("Ignoring 1:many group reference mappings for group name '" + groupRef + "'" );
} else {
matched=true;
var rowset=groupRefRows.get$O(groupRef);
groupRefLookup.put$O$O(groupRef, theGroup);
if (rowset != null  && rowset.size$() > 0 ) {
var alan=null;
for (var elm=0, elmSize=rowset.size$(); elm < elmSize; elm++) {
alan=rowset.elementAt$I(elm);
alan.groupRef=theGroup;
}
}}}}
(groupRefRows.get$O(groupRef)).removeAllElements$();
}
for (var _deferred_args, $_deferred_args = deferredAnnotation_calls.iterator$(); $_deferred_args.hasNext$()&&((_deferred_args=($_deferred_args.next$())),1);) {
if (_deferred_args[0] === "GRAPHLINE" ) {
this.addLine$jalview_datamodel_AlignmentI$java_util_StringTokenizer$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup(al, _deferred_args[1], _deferred_args[2], (_deferred_args[3] == null ) ? null : groupRefLookup.get$O(_deferred_args[3]));
}}
var combinecount=0;
for (var _combine_args, $_combine_args = combineAnnotation_calls.iterator$(); $_combine_args.hasNext$()&&((_combine_args=($_combine_args.next$())),1);) {
this.combineAnnotations$jalview_datamodel_AlignmentI$I$java_util_StringTokenizer$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup(al, ++combinecount, _combine_args[0], _combine_args[1], (_combine_args[2] == null ) ? null : groupRefLookup.get$O(_combine_args[2]));
}
}return modified;
});

Clazz.newMeth(C$, 'parseHideCols$jalview_datamodel_HiddenColumns$S',  function (hidden, nextToken) {
var inval=Clazz.new_($I$(12,1).c$$S$S,[nextToken, ","]);
while (inval.hasMoreTokens$()){
var range=inval.nextToken$().trim$();
var from;
var to=range.indexOf$S("-");
if (to == -1) {
from=to=Integer.parseInt$S(range);
if (from >= 0) {
hidden.hideColumns$I$I(from, to);
}} else {
from=Integer.parseInt$S(range.substring$I$I(0, to));
if (to < range.length$() - 1) {
to=Integer.parseInt$S(range.substring$I(to + 1));
} else {
to=from;
}if (from > 0 && to >= from ) {
hidden.hideColumns$I$I(from, to);
}}}
}, p$1);

Clazz.newMeth(C$, 'autoAnnotsKey$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_SequenceI$S',  function (annotation, refSeq, groupRef) {
return annotation.graph + "\t" + annotation.label + "\t" + annotation.description + "\t" + (refSeq != null  ? refSeq.getDisplayId$Z(true) : "") ;
}, p$1);

Clazz.newMeth(C$, 'parseAnnotation$S$I',  function (string, graphStyle) {
var hasSymbols=(graphStyle == 0);
var desc=null;
var displayChar=null;
var ss=" ";
var value=0;
var parsedValue=false;
var dcset=false;
var colour=null;
var i=string.indexOf$S("[");
var j=string.indexOf$S("]");
if (i > -1 && j > -1 ) {
colour=$I$(16,"parseColourString$S",[string.substring$I$I(i + 1, j)]);
if (i > 0 && string.charAt$I(i - 1) == "," ) {
--i;
}string=string.substring$I$I(0, i) + string.substring$I(j + 1);
}var st=Clazz.new_($I$(12,1).c$$S$S$Z,[string, ",", true]);
var token;
var seenContent=false;
var pass=0;
while (st.hasMoreTokens$()){
++pass;
token=st.nextToken$().trim$();
if (token.equals$O(",")) {
if (!seenContent && parsedValue && !dcset  ) {
dcset=true;
displayChar=" ";
}seenContent=false;
continue;
} else {
seenContent=true;
}if (!parsedValue) {
try {
displayChar=token;
value=Float.valueOf$S(token).floatValue$();
parsedValue=true;
continue;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
} else {
if (token.length$() == 1) {
displayChar=token;
}}if (hasSymbols && (token.length$() == 1 && "()<>[]{}AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz".contains$CharSequence(token) ) ) {
ss=token.charAt$I(0);
if (displayChar.equals$O(token.substring$I$I(0, 1))) {
displayChar="";
}} else if (desc == null  || (parsedValue && pass > 2 ) ) {
desc=token;
}}
if (displayChar != null  && desc != null   && desc.length$() == 1 ) {
if (displayChar.length$() > 1) {
var tmp=displayChar;
displayChar=desc;
desc=tmp;
} else {
if (displayChar.equals$O(desc)) {
desc=null;
}}}var anot=Clazz.new_($I$(15,1).c$$S$S$C$F,[displayChar, desc, ss, value]);
anot.colour=colour;
return anot;
});

Clazz.newMeth(C$, 'colourAnnotations$jalview_datamodel_AlignmentI$S$S',  function (al, label, colour) {
var awtColour=$I$(16).parseColourString$S(colour);
var annotations;
for (var i=0; i < al.getAlignmentAnnotation$().length; i++) {
if (al.getAlignmentAnnotation$()[i].label.equalsIgnoreCase$S(label)) {
annotations=al.getAlignmentAnnotation$()[i].annotations;
for (var j=0; j < annotations.length; j++) {
if (annotations[j] != null ) {
annotations[j].colour=awtColour;
}}
}}
});

Clazz.newMeth(C$, 'combineAnnotations$jalview_datamodel_AlignmentI$I$java_util_StringTokenizer$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup',  function (al, combineCount, st, seqRef, groupRef) {
var group=st.nextToken$();
var graphGroup=0;
if (al.getAlignmentAnnotation$() != null ) {
for (var i=0; i < al.getAlignmentAnnotation$().length; i++) {
var aa=al.getAlignmentAnnotation$()[i];
if (aa.graphGroup > graphGroup) {
graphGroup=aa.graphGroup + 1;
}if (aa.sequenceRef === seqRef  && aa.groupRef === groupRef   && aa.label.equalsIgnoreCase$S(group) ) {
if (aa.graphGroup > -1) {
graphGroup=aa.graphGroup;
} else {
if (graphGroup <= combineCount) {
graphGroup=combineCount + 1;
}aa.graphGroup=graphGroup;
}break;
}}
while (st.hasMoreTokens$()){
group=st.nextToken$();
for (var i=0; i < al.getAlignmentAnnotation$().length; i++) {
var aa=al.getAlignmentAnnotation$()[i];
if (aa.sequenceRef === seqRef  && aa.groupRef === groupRef   && aa.label.equalsIgnoreCase$S(group) ) {
aa.graphGroup=graphGroup;
break;
}}
}
} else {
System.err.println$S("Couldn\'t combine annotations. None are added to alignment yet!");
}});

Clazz.newMeth(C$, 'addLine$jalview_datamodel_AlignmentI$java_util_StringTokenizer$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup',  function (al, st, seqRef, groupRef) {
var group=st.nextToken$();
var alannot=al.getAlignmentAnnotation$();
var nextToken=st.nextToken$();
var value=0.0;
try {
value=(Float.valueOf$S(nextToken)).valueOf();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.err.println$S("line " + Long.$s(this.nlinesread) + ": Threshold '" + nextToken + "' invalid, setting to zero" );
} else {
throw e;
}
}
var label=st.hasMoreTokens$() ? st.nextToken$() : null;
var colour=null;
if (st.hasMoreTokens$()) {
colour=$I$(16,"parseColourString$S",[st.nextToken$()]);
}if (alannot != null ) {
for (var i=0; i < alannot.length; i++) {
if (alannot[i].label.equalsIgnoreCase$S(group) && (seqRef == null  || alannot[i].sequenceRef === seqRef  ) && (groupRef == null  || alannot[i].groupRef === groupRef  )  ) {
alannot[i].setThreshold$jalview_datamodel_GraphLine(Clazz.new_($I$(17,1).c$$F$S$java_awt_Color,[value, label, colour]));
}}
}});

Clazz.newMeth(C$, 'addGroup$jalview_datamodel_AlignmentI$java_util_StringTokenizer',  function (al, st) {
var sg=Clazz.new_($I$(18,1));
sg.setName$S(st.nextToken$());
var rng="";
try {
rng=st.nextToken$();
if (rng.length$() > 0 && !rng.startsWith$S("*") ) {
sg.setStartRes$I(Integer.parseInt$S(rng) - 1);
} else {
sg.setStartRes$I(0);
}rng=st.nextToken$();
if (rng.length$() > 0 && !rng.startsWith$S("*") ) {
sg.setEndRes$I(Integer.parseInt$S(rng) - 1);
} else {
sg.setEndRes$I(al.getWidth$() - 1);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Couldn't parse Group Start or End Field as '*' or a valid column or sequence index: '" + rng + "' - assuming alignment width for group." );
sg.setStartRes$I(0);
sg.setEndRes$I(al.getWidth$() - 1);
} else {
throw e;
}
}
var index=st.nextToken$();
if (index.equals$O("-1")) {
while (st.hasMoreElements$()){
sg.addSequence$jalview_datamodel_SequenceI$Z(al.findName$S(st.nextToken$()), false);
}
} else {
var st2=Clazz.new_($I$(12,1).c$$S$S,[index, ","]);
while (st2.hasMoreTokens$()){
var tmp=st2.nextToken$();
if (tmp.equals$O("*")) {
for (var i=0; i < al.getHeight$(); i++) {
sg.addSequence$jalview_datamodel_SequenceI$Z(al.getSequenceAt$I(i), false);
}
} else if (tmp.indexOf$S("-") >= 0) {
var st3=Clazz.new_($I$(12,1).c$$S$S,[tmp, "-"]);
var start=(Integer.parseInt$S(st3.nextToken$()));
var end=(Integer.parseInt$S(st3.nextToken$()));
if (end > start) {
for (var i=start; i <= end; i++) {
sg.addSequence$jalview_datamodel_SequenceI$Z(al.getSequenceAt$I(i - 1), false);
}
}} else {
sg.addSequence$jalview_datamodel_SequenceI$Z(al.getSequenceAt$I(Integer.parseInt$S(tmp) - 1), false);
}}
}if (this.refSeq != null ) {
sg.setStartRes$I(this.refSeq.findIndex$I(sg.getStartRes$() + 1) - 1);
sg.setEndRes$I(this.refSeq.findIndex$I(sg.getEndRes$() + 1) - 1);
sg.setSeqrep$jalview_datamodel_SequenceI(this.refSeq);
}if (sg.getSize$() > 0) {
al.addGroup$jalview_datamodel_SequenceGroup(sg);
}});

Clazz.newMeth(C$, 'addRowProperties$jalview_datamodel_AlignmentI$java_util_StringTokenizer',  function (al, st) {
var label=st.nextToken$();
var keyValue;
var key;
var value;
var scaletofit=false;
var centerlab=false;
var showalllabs=false;
while (st.hasMoreTokens$()){
keyValue=st.nextToken$();
key=keyValue.substring$I$I(0, keyValue.indexOf$S("="));
value=keyValue.substring$I(keyValue.indexOf$S("=") + 1);
if (key.equalsIgnoreCase$S("scaletofit")) {
scaletofit=Boolean.valueOf$S(value).booleanValue$();
}if (key.equalsIgnoreCase$S("showalllabs")) {
showalllabs=Boolean.valueOf$S(value).booleanValue$();
}if (key.equalsIgnoreCase$S("centrelabs")) {
centerlab=Boolean.valueOf$S(value).booleanValue$();
}var alr=al.getAlignmentAnnotation$();
if (alr != null ) {
for (var i=0; i < alr.length; i++) {
if (alr[i].label.equalsIgnoreCase$S(label)) {
alr[i].centreColLabels=centerlab;
alr[i].scaleColLabel=scaletofit;
alr[i].showAllColLabels=showalllabs;
}}
}}
});

Clazz.newMeth(C$, 'addProperties$jalview_datamodel_AlignmentI$java_util_StringTokenizer',  function (al, st) {
if (al.getGroups$() == null ) {
return;
}var name=st.nextToken$();
var properties=Clazz.new_($I$(19,1));
while (st.hasMoreTokens$()){
var keyValue=st.nextToken$();
var key=keyValue.substring$I$I(0, keyValue.indexOf$S("="));
var value=keyValue.substring$I(keyValue.indexOf$S("=") + 1);
properties.put$O$O(key, value);
}
for (var sg, $sg = al.getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (sg.getName$().equals$O(name)) {
p$1.addProperties$jalview_datamodel_SequenceGroup$java_util_Map$jalview_datamodel_AlignmentI.apply(this, [sg, properties, al]);
}}
});

Clazz.newMeth(C$, 'addProperties$jalview_datamodel_SequenceGroup$java_util_Map$jalview_datamodel_AlignmentI',  function (sg, properties, al) {
var def=sg.getColourScheme$();
for (var key, $key = properties.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=properties.get$O(key);
if (key.equalsIgnoreCase$S("description")) {
sg.setDescription$S(value);
} else if (key.equalsIgnoreCase$S("colour")) {
sg.cs.setColourScheme$jalview_schemes_ColourSchemeI($I$(7).getColourScheme$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$S(null, al, value));
} else if (key.equalsIgnoreCase$S("pidThreshold")) {
sg.cs.setThreshold$I$Z(Integer.parseInt$S(value), true);
} else if (key.equalsIgnoreCase$S("consThreshold")) {
sg.cs.setConservationInc$I(Integer.parseInt$S(value));
var c=Clazz.new_(["Group", sg.getSequences$java_util_Map(null), sg.getStartRes$(), sg.getEndRes$() + 1],$I$(20,1).c$$S$java_util_List$I$I);
c.calculate$();
c.verdict$Z$F(false, 25);
sg.cs.setConservation$jalview_analysis_Conservation(c);
} else if (key.equalsIgnoreCase$S("outlineColour")) {
sg.setOutlineColour$java_awt_Color($I$(16).parseColourString$S(value));
} else if (key.equalsIgnoreCase$S("displayBoxes")) {
sg.setDisplayBoxes$Z(Boolean.valueOf$S(value).booleanValue$());
} else if (key.equalsIgnoreCase$S("showUnconserved")) {
sg.setShowNonconserved$Z(Boolean.valueOf$S(value).booleanValue$());
} else if (key.equalsIgnoreCase$S("displayText")) {
sg.setDisplayText$Z(Boolean.valueOf$S(value).booleanValue$());
} else if (key.equalsIgnoreCase$S("colourText")) {
sg.setColourText$Z(Boolean.valueOf$S(value).booleanValue$());
} else if (key.equalsIgnoreCase$S("textCol1")) {
sg.textColour=$I$(16).parseColourString$S(value);
} else if (key.equalsIgnoreCase$S("textCol2")) {
sg.textColour2=$I$(16).parseColourString$S(value);
} else if (key.equalsIgnoreCase$S("textColThreshold")) {
sg.thresholdTextColour=Integer.parseInt$S(value);
} else if (key.equalsIgnoreCase$S("idColour")) {
var idColour=$I$(16).parseColourString$S(value);
sg.setIdColour$java_awt_Color(idColour == null  ? $I$(6).black : idColour);
} else if (key.equalsIgnoreCase$S("hide")) {
sg.setHidereps$Z(true);
} else if (key.equalsIgnoreCase$S("hidecols")) {
sg.setHideCols$Z(true);
}sg.recalcConservation$();
}
if (sg.getColourScheme$() == null ) {
sg.setColourScheme$jalview_schemes_ColourSchemeI(def);
}}, p$1);

Clazz.newMeth(C$, 'setBelowAlignment$jalview_datamodel_AlignmentI$java_util_StringTokenizer',  function (al, st) {
var token;
var aa;
var ala=al.getAlignmentAnnotation$();
if (ala == null ) {
System.err.print$S("Warning - no annotation to set below for sequence associated annotation:");
}while (st.hasMoreTokens$()){
token=st.nextToken$();
if (ala == null ) {
System.err.print$S(" " + token);
} else {
for (var i=0; i < al.getAlignmentAnnotation$().length; i++) {
aa=al.getAlignmentAnnotation$()[i];
if (aa.sequenceRef === this.refSeq  && aa.label.equals$O(token) ) {
aa.belowAlignment=true;
}}
}}
if (ala == null ) {
System.err.print$S("\n");
}});

Clazz.newMeth(C$, 'addAlignmentDetails$jalview_datamodel_AlignmentI$java_util_StringTokenizer',  function (al, st) {
var keyValue;
var key;
var value;
while (st.hasMoreTokens$()){
keyValue=st.nextToken$();
key=keyValue.substring$I$I(0, keyValue.indexOf$S("="));
value=keyValue.substring$I(keyValue.indexOf$S("=") + 1);
al.setProperty$O$O(key, value);
}
});

Clazz.newMeth(C$, 'printCSVAnnotations$jalview_datamodel_AlignmentAnnotationA',  function (annotations) {
if (annotations == null ) {
return "";
}var sp=Clazz.new_($I$(1,1));
for (var i=0; i < annotations.length; i++) {
var atos=annotations[i].toString();
var p=0;
do {
var cp=atos.indexOf$S$I("\n", p);
sp.append$S(annotations[i].label);
sp.append$S(",");
if (cp > p) {
sp.append$S(atos.substring$I$I(p, cp + 1));
} else {
sp.append$S(atos.substring$I(p));
sp.append$S(this.newline);
}p=cp + 1;
} while (p > 0);
}
return sp.toString();
});

Clazz.newMeth(C$, 'printAnnotationsForView$jalview_api_AlignViewportI',  function (viewport) {
return this.printAnnotations$jalview_datamodel_AlignmentAnnotationA$java_util_List$java_util_Hashtable$jalview_datamodel_HiddenColumns$jalview_datamodel_AlignmentI$jalview_io_AnnotationFile_ViewDef(viewport.isShowAnnotation$() ? viewport.getAlignment$().getAlignmentAnnotation$() : null, viewport.getAlignment$().getGroups$(), viewport.getAlignment$().getProperties$(), viewport.getAlignment$().getHiddenColumns$(), viewport.getAlignment$(), null);
});

Clazz.newMeth(C$, 'printAnnotationsForAlignment$jalview_datamodel_AlignmentI',  function (al) {
return this.printAnnotations$jalview_datamodel_AlignmentAnnotationA$java_util_List$java_util_Hashtable$jalview_datamodel_HiddenColumns$jalview_datamodel_AlignmentI$jalview_io_AnnotationFile_ViewDef(al.getAlignmentAnnotation$(), al.getGroups$(), al.getProperties$(), null, al, null);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnnotationFile, "ViewDef", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['viewname'],'O',['hidseqs','jalview.datamodel.HiddenSequences','hiddencols','jalview.datamodel.HiddenColumns','hiddenRepSeqs','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns$java_util_Hashtable',  function (vname, hseqs, hcols, hRepSeqs) {
;C$.$init$.apply(this);
this.viewname=vname;
this.hidseqs=hseqs;
this.hiddencols=hcols;
this.hiddenRepSeqs=hRepSeqs;
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
