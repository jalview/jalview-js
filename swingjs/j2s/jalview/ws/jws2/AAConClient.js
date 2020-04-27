(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),I$=[[0,'java.util.ArrayList','jalview.ws.uimodel.AlignAnalysisUIText','compbio.ws.client.Services','jalview.util.MessageManager']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AAConClient", null, 'jalview.ws.jws2.JabawsCalcWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['CALC_ID']]]

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List', function (service, alignFrame, preset, paramset) {
;C$.superclazz.c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List.apply(this,[service, alignFrame, preset, paramset]);C$.$init$.apply(this);
this.submitGaps=true;
this.alignedSeqs=true;
this.nucleotidesAllowed=false;
this.proteinAllowed=true;
this.filterNonStandardResidues=true;
this.gapMap=Clazz.array(Boolean.TYPE, [0]);
this.initViewportParams$();
}, 1);

Clazz.newMeth(C$, 'getServiceActionText$', function () {
return "calculating Amino acid consensus using AACon service";
});

Clazz.newMeth(C$, 'updateResultAnnotation$Z', function (immediate) {
if (immediate || !this.calcMan.isWorking$jalview_api_AlignCalcWorkerI(this) && this.scoremanager != null   ) {
var scoremap=this.scoremanager.asMap$();
var alWidth=this.alignViewport.getAlignment$().getWidth$();
var ourAnnot=Clazz.new_($I$(1,1));
for (var score, $score = scoremap.keySet$().iterator$(); $score.hasNext$()&&((score=($score.next$())),1);) {
var scores=scoremap.get$O(score);
for (var scr, $scr = scores.iterator$(); $scr.hasNext$()&&((scr=($scr.next$())),1);) {
if (scr.getRanges$() != null  && scr.getRanges$().size$() > 0 ) {
} else {
this.createAnnotationRowsForScores$java_util_List$S$I$compbio_data_sequence_Score(ourAnnot, this.getCalcId$(), alWidth, scr);
}}
}
if (ourAnnot.size$() > 0) {
this.updateOurAnnots$java_util_List(ourAnnot);
}}});

Clazz.newMeth(C$, 'checkValidInputSeqs$Z$java_util_List', function (dynamic, seqs) {
return (seqs.size$() > 1);
});

Clazz.newMeth(C$, 'getCalcId$', function () {
return C$.CALC_ID;
});

Clazz.newMeth(C$, 'getAlignAnalysisUITest$', function () {
return Clazz.new_([$I$(3).AAConWS.toString(), Clazz.getClass(C$), C$.CALC_ID, false, true, true, $I$(4).getString$S("label.aacon_calculations"), $I$(4).getString$S("tooltip.aacon_calculations"), $I$(4).getString$S("label.aacon_settings"), $I$(4).getString$S("tooltip.aacon_settings")],$I$(2,1).c$$S$Class$S$Z$Z$Z$S$S$S$S);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.CALC_ID="jabaws2.AACon";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
