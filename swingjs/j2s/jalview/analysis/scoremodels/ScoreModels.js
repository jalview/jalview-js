(function(){var P$=Clazz.newPackage("jalview.analysis.scoremodels"),I$=[[0,'java.util.LinkedHashMap','jalview.analysis.scoremodels.PIDModel','jalview.analysis.scoremodels.FeatureDistanceModel','jalview.io.FileParse','jalview.io.DataSourceType','jalview.io.ScoreMatrixFile']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScoreModels");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['BLOSUM62','jalview.analysis.scoremodels.ScoreMatrix','+PAM250','+DNA','models','java.util.Map']]
,['O',['instance','jalview.analysis.scoremodels.ScoreModels']]]

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.models=Clazz.new_($I$(1,1));
this.BLOSUM62=this.loadScoreMatrix$S("scoreModel/blosum62.scm");
this.PAM250=this.loadScoreMatrix$S("scoreModel/pam250.scm");
this.DNA=this.loadScoreMatrix$S("scoreModel/dna.scm");
this.registerScoreModel$jalview_api_analysis_ScoreModelI(Clazz.new_($I$(2,1)));
this.registerScoreModel$jalview_api_analysis_ScoreModelI(Clazz.new_($I$(3,1)));
}, 1);

Clazz.newMeth(C$, 'loadScoreMatrix$S', function (resourcePath) {
try {
var fp=Clazz.new_([resourcePath, $I$(5).CLASSLOADER],$I$(4,1).c$$O$jalview_io_DataSourceType);
var sm=Clazz.new_($I$(6,1).c$$jalview_io_FileParse,[fp]).parseMatrix$();
this.registerScoreModel$jalview_api_analysis_ScoreModelI(sm);
return sm;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Error reading " + resourcePath + ": " + e.getMessage$() );
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'getModels$', function () {
return this.models.values$();
});

Clazz.newMeth(C$, 'getScoreModel$S$jalview_api_AlignmentViewPanel', function (name, avp) {
var model=this.models.get$O(name);
return model == null  ? null : model.getInstance$jalview_api_AlignmentViewPanel(avp);
});

Clazz.newMeth(C$, 'registerScoreModel$jalview_api_analysis_ScoreModelI', function (sm) {
var sm2=this.models.get$O(sm.getName$());
if (sm2 != null ) {
System.err.println$S("Warning: replacing score model " + sm2.getName$());
}this.models.put$O$O(sm.getName$(), sm);
});

Clazz.newMeth(C$, 'reset$', function () {
C$.instance=Clazz.new_(C$);
});

Clazz.newMeth(C$, 'getDefaultModel$Z', function (forPeptide) {
return forPeptide ? this.BLOSUM62 : this.DNA;
});

Clazz.newMeth(C$, 'getBlosum62$', function () {
return this.BLOSUM62;
});

Clazz.newMeth(C$, 'getPam250$', function () {
return this.PAM250;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
