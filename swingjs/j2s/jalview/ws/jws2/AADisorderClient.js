(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),I$=[[0,'java.util.HashMap','compbio.ws.client.Services','java.util.Hashtable','java.util.ArrayList','jalview.bin.Console','jalview.datamodel.SequenceFeature','jalview.datamodel.GraphLine','java.awt.Color','jalview.util.ColorUtils','jalview.schemes.FeatureColour']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AADisorderClient", null, 'jalview.ws.jws2.JabawsCalcWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['typeName','methodName','groupName'],'O',['af','jalview.gui.AlignFrame']]
,['S',['DONTCOMBINE','INVISIBLE'],'O',['featureMap','java.util.Map','+annotMap']]]

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List',  function (sh, alignFrame, thePreset, paramset) {
;C$.superclazz.c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List.apply(this,[sh, alignFrame, thePreset, paramset]);C$.$init$.apply(this);
this.af=alignFrame;
this.typeName=sh.action;
this.methodName=sh.serviceType;
this.submitGaps=false;
this.alignedSeqs=false;
this.nucleotidesAllowed=false;
this.proteinAllowed=true;
this.bySequence=true;
}, 1);

Clazz.newMeth(C$, 'getServiceActionText$',  function () {
return "Submitting amino acid sequences for disorder prediction.";
});

Clazz.newMeth(C$, 'checkValidInputSeqs$Z$java_util_List',  function (dynamic, seqs) {
return (seqs.size$() > 0);
});

Clazz.newMeth(C$, 'updateResultAnnotation$Z',  function (immediate) {
if (immediate || !this.calcMan.isWorking$jalview_api_AlignCalcWorkerI(this) && this.scoremanager != null   ) {
var featureTypeMap=C$.featureMap.get$O(this.service.serviceType);
var annotTypeMap=C$.annotMap.get$O(this.service.serviceType);
var dispFeatures=false;
var fc=Clazz.new_($I$(3,1));
var ourAnnot=Clazz.new_($I$(4,1));
var graphGroup=1;
if (this.alignViewport.getAlignment$().getAlignmentAnnotation$() != null ) {
for (var ala, $ala = 0, $$ala = this.alignViewport.getAlignment$().getAlignmentAnnotation$(); $ala<$$ala.length&&((ala=($$ala[$ala])),1);$ala++) {
if (ala.graphGroup > graphGroup) {
graphGroup=ala.graphGroup;
}}
}for (var seqId, $seqId = this.seqNames.keySet$().iterator$(); $seqId.hasNext$()&&((seqId=($seqId.next$())),1);) {
var sameGroup=false;
var dseq;
var aseq;
var seq=this.seqNames.get$O(seqId);
var base=seq.findPosition$I(this.start) - 1;
aseq=seq;
while ((dseq=seq).getDatasetSequence$() != null ){
seq=seq.getDatasetSequence$();
}
var scores=null;
try {
scores=this.scoremanager.getAnnotationForSequence$S(seqId);
} catch (q) {
if (Clazz.exceptionOf(q,"Exception")){
$I$(5,"info$S",["Couldn't recover disorder prediction for sequence " + seq.getName$() + "(Prediction name was " + seqId + ")" + "\nSee http://issues.jalview.org/browse/JAL-1319 for one possible reason why disorder predictions might fail." ]);
} else {
throw q;
}
}
var last=NaN;
var val=NaN;
var lastAnnot=ourAnnot.size$();
if (scores != null  && scores.scores != null  ) {
for (var scr, $scr = scores.scores.iterator$(); $scr.hasNext$()&&((scr=($scr.next$())),1);) {
if (scr.getRanges$() != null  && scr.getRanges$().size$() > 0 ) {
var vals=scr.getScores$().iterator$();
for (var rn, $rn = scr.getRanges$().iterator$(); $rn.hasNext$()&&((rn=($rn.next$())),1);) {
var sf;
var type=featureTypeMap.get$O(scr.getMethod$());
if (type == null ) {
type=Clazz.array(String, -1, [this.typeName + " (" + scr.getMethod$() + ")" , this.service.getActionText$()]);
}if (vals.hasNext$()) {
val=vals.next$().floatValue$();
sf=Clazz.new_($I$(6,1).c$$S$S$I$I$F$S,[type[0], type[1], base + rn.from, base + rn.to, val, this.methodName]);
} else {
sf=Clazz.new_($I$(6,1).c$$S$S$I$I$S,[type[0], type[1], base + rn.from, base + rn.to, this.methodName]);
}dseq.addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
if (last != val  && !Float.isNaN$F(last) ) {
fc.put$O$O(sf.getType$(), sf);
}last=val;
dispFeatures=true;
}
} else {
if (scr.getScores$().size$() == 0) {
continue;
}var typename;
var calcName;
var annot=this.createAnnotationRowsForScores$java_util_List$S$S$jalview_datamodel_SequenceI$I$compbio_data_sequence_Score(ourAnnot, typename=this.service.serviceType + " (" + scr.getMethod$() + ")" , calcName=this.service.getServiceTypeURI$() + "/" + scr.getMethod$() , aseq, base + 1, scr);
annot.graph=2;
var styleMap=(annotTypeMap == null ) ? null : annotTypeMap.get$O(scr.getMethod$());
annot.visible=(styleMap == null  || styleMap.get$O(C$.INVISIBLE) == null  );
var thrsh=(styleMap == null ) ? null : styleMap.get$O("THRESHOLD");
var range=(styleMap == null ) ? null : styleMap.get$O("RANGE");
if (range != null ) {
annot.graphMin=range[0];
annot.graphMax=range[1];
}if (styleMap == null  || styleMap.get$O(C$.DONTCOMBINE) == null  ) {
{
if (!sameGroup) {
++graphGroup;
sameGroup=true;
}annot.graphGroup=graphGroup;
}}annot.description="<html>" + this.service.getActionText$() + " - raw scores" ;
if (thrsh != null ) {
var threshNote=(thrsh[0] > 0  ? "Above " : "Below ") + new Double(thrsh[1]).toString() + " indicates disorder" ;
annot.threshold=Clazz.new_([thrsh[1], threshNote, $I$(8).red],$I$(7,1).c$$F$S$java_awt_Color);
annot.description+="<br/>" + threshNote;
}annot.description+="</html>";
var col=$I$(9,"createColourFromName$S",[this.typeName + scr.getMethod$()]);
for (var p=0, ps=annot.annotations.length; p < ps; p++) {
if (annot.annotations[p] != null ) {
annot.annotations[p].colour=col;
}}
annot._linecolour=col;
this.replaceAnnotationOnAlignmentWith$jalview_datamodel_AlignmentAnnotation$S$S$jalview_datamodel_SequenceI(annot, typename, calcName, aseq);
}}
}if (lastAnnot + 1 == ourAnnot.size$()) {
ourAnnot.get$I(lastAnnot).graphGroup=-1;
}}
{
if (dispFeatures) {
var fr=(this.ap).cloneFeatureRenderer$();
for (var ft, $ft = fc.keySet$().iterator$(); $ft.hasNext$()&&((ft=($ft.next$())),1);) {
var gc=fr.getFeatureStyle$S(ft);
if (gc.isSimpleColour$()) {
var ggc=Clazz.new_([gc.getColour$(), $I$(8).white, gc.getColour$(), $I$(8).white, 1.4E-45, 3.4028235E38],$I$(10,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F);
ggc.setAutoScaled$Z(true);
fr.setColour$S$jalview_api_FeatureColourI(ft, ggc);
}}
(this.ap).updateFeatureRendererFrom$jalview_api_FeatureRenderer(fr);
if (this.af.alignPanel === this.ap ) {
this.af.setShowSeqFeatures$Z(true);
}}if (ourAnnot.size$() > 0) {
this.updateOurAnnots$java_util_List(ourAnnot);
this.ap.adjustAnnotationHeight$();
this.ap.paintAlignment$Z$Z(true, true);
}}}});

Clazz.newMeth(C$, 'getCalcId$',  function () {
return null;
});

C$.$static$=function(){C$.$static$=0;
C$.DONTCOMBINE="DONTCOMBINE";
C$.INVISIBLE="INVISIBLE";
{
C$.featureMap=Clazz.new_($I$(1,1));
var fmap;
C$.featureMap.put$O$O($I$(2).IUPredWS.toString(), fmap=Clazz.new_($I$(1,1)));
fmap.put$O$O("Glob", Clazz.array(String, -1, ["Globular Domain", "Predicted globular domain"]));
C$.featureMap.put$O$O($I$(2).JronnWS.toString(), fmap=Clazz.new_($I$(1,1)));
C$.featureMap.put$O$O($I$(2).DisemblWS.toString(), fmap=Clazz.new_($I$(1,1)));
fmap.put$O$O("REM465", Clazz.array(String, -1, ["REM465", "Missing density"]));
fmap.put$O$O("HOTLOOPS", Clazz.array(String, -1, ["HOTLOOPS", "Flexible loops"]));
fmap.put$O$O("COILS", Clazz.array(String, -1, ["COILS", "Random coil"]));
C$.featureMap.put$O$O($I$(2).GlobPlotWS.toString(), fmap=Clazz.new_($I$(1,1)));
fmap.put$O$O("GlobDoms", Clazz.array(String, -1, ["Globular Domain", "Predicted globular domain"]));
fmap.put$O$O("Disorder", Clazz.array(String, -1, ["Protein Disorder", "Probable unstructured peptide region"]));
var amap;
C$.annotMap=Clazz.new_($I$(1,1));
C$.annotMap.put$O$O($I$(2).GlobPlotWS.toString(), amap=Clazz.new_($I$(1,1)));
amap.put$O$O("Dydx", Clazz.new_($I$(1,1)));
amap.get$O("Dydx").put$O$O(C$.DONTCOMBINE, C$.DONTCOMBINE);
amap.get$O("Dydx").put$O$O("THRESHOLD", Clazz.array(Double.TYPE, -1, [1, 0]));
amap.get$O("Dydx").put$O$O("RANGE", Clazz.array(Float.TYPE, -1, [-1, 1]));
amap.put$O$O("SmoothedScore", Clazz.new_($I$(1,1)));
amap.get$O("SmoothedScore").put$O$O(C$.INVISIBLE, C$.INVISIBLE);
amap.put$O$O("RawScore", Clazz.new_($I$(1,1)));
amap.get$O("RawScore").put$O$O(C$.INVISIBLE, C$.INVISIBLE);
C$.annotMap.put$O$O($I$(2).DisemblWS.toString(), amap=Clazz.new_($I$(1,1)));
amap.put$O$O("COILS", Clazz.new_($I$(1,1)));
amap.put$O$O("HOTLOOPS", Clazz.new_($I$(1,1)));
amap.put$O$O("REM465", Clazz.new_($I$(1,1)));
amap.get$O("COILS").put$O$O("THRESHOLD", Clazz.array(Double.TYPE, -1, [1, 0.516]));
amap.get$O("COILS").put$O$O("RANGE", Clazz.array(Float.TYPE, -1, [0, 1]));
amap.get$O("HOTLOOPS").put$O$O("THRESHOLD", Clazz.array(Double.TYPE, -1, [1, 0.6]));
amap.get$O("HOTLOOPS").put$O$O("RANGE", Clazz.array(Float.TYPE, -1, [0, 1]));
amap.get$O("REM465").put$O$O("THRESHOLD", Clazz.array(Double.TYPE, -1, [1, 0.1204]));
amap.get$O("REM465").put$O$O("RANGE", Clazz.array(Float.TYPE, -1, [0, 1]));
C$.annotMap.put$O$O($I$(2).IUPredWS.toString(), amap=Clazz.new_($I$(1,1)));
amap.put$O$O("Long", Clazz.new_($I$(1,1)));
amap.put$O$O("Short", Clazz.new_($I$(1,1)));
amap.get$O("Long").put$O$O("THRESHOLD", Clazz.array(Double.TYPE, -1, [1, 0.5]));
amap.get$O("Long").put$O$O("RANGE", Clazz.array(Float.TYPE, -1, [0, 1]));
amap.get$O("Short").put$O$O("THRESHOLD", Clazz.array(Double.TYPE, -1, [1, 0.5]));
amap.get$O("Short").put$O$O("RANGE", Clazz.array(Float.TYPE, -1, [0, 1]));
C$.annotMap.put$O$O($I$(2).JronnWS.toString(), amap=Clazz.new_($I$(1,1)));
amap.put$O$O("JRonn", Clazz.new_($I$(1,1)));
amap.get$O("JRonn").put$O$O("THRESHOLD", Clazz.array(Double.TYPE, -1, [1, 0.5]));
amap.get$O("JRonn").put$O$O("RANGE", Clazz.array(Float.TYPE, -1, [0, 1]));
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
