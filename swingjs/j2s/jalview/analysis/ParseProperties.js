(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'com.stevesoft.pat.Regex','jalview.datamodel.AlignmentAnnotation']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParseProperties");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.al=null;
},1);

C$.$fields$=[['O',['al','jalview.datamodel.AlignmentI']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI',  function (al) {
;C$.$init$.apply(this);
this.al=al;
}, 1);

Clazz.newMeth(C$, 'getScoresFromDescription$S$S$S$Z',  function (ScoreName, ScoreDescriptions, regex, repeat) {
return this.getScoresFromDescription$SA$SA$S$Z(Clazz.array(String, -1, [ScoreName]), Clazz.array(String, -1, [ScoreDescriptions]), regex, repeat);
});

Clazz.newMeth(C$, 'getScoresFromDescription$SA$SA$S$Z',  function (ScoreNames, ScoreDescriptions, regex, repeat) {
return this.getScoresFromDescription$jalview_datamodel_SequenceIA$SA$SA$S$Z(this.al.getSequencesArray$(), ScoreNames, ScoreDescriptions, regex, repeat);
});

Clazz.newMeth(C$, 'getScoresFromDescription$jalview_datamodel_SequenceIA$SA$SA$S$Z',  function (seqs, ScoreNames, ScoreDescriptions, regex, repeat) {
var count=0;
var pattern=Clazz.new_($I$(1,1).c$$S,[regex]);
if (pattern.numSubs$() > ScoreNames.length) {
var onamelen=ScoreNames.length;
var tnames=Clazz.array(String, [pattern.numSubs$() + 1]);
System.arraycopy$O$I$O$I$I(ScoreNames, 0, tnames, 0, ScoreNames.length);
var base=tnames[ScoreNames.length - 1];
ScoreNames=tnames;
var descrbase=ScoreDescriptions[onamelen - 1];
if (descrbase == null ) {
descrbase="Score parsed from (" + regex + ")" ;
}tnames=Clazz.array(String, [pattern.numSubs$() + 1]);
System.arraycopy$O$I$O$I$I(ScoreDescriptions, 0, tnames, 0, ScoreDescriptions.length);
ScoreDescriptions=tnames;
for (var i=onamelen; i < ScoreNames.length; i++) {
ScoreNames[i]=base + "_" + i ;
ScoreDescriptions[i]=descrbase + " (column " + i + ")" ;
}
}for (var i=0; i < seqs.length; i++) {
var descr=seqs[i].getDescription$();
if (descr == null ) {
continue;
}var pos=0;
var added=false;
var reps=0;
while ((repeat || pos == 0 ) && pattern.searchFrom$S$I(descr, pos) ){
pos=pattern.matchedTo$();
for (var cols=0; cols < pattern.numSubs$(); cols++) {
var sstring=pattern.stringMatched$I(cols + 1);
var score=NaN;
try {
score=Double.valueOf$S(sstring).doubleValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
continue;
} else {
throw e;
}
}
var an=Clazz.new_([ScoreNames[cols] + ((reps > 0) ? "_" + reps : ""), ScoreDescriptions[cols], null],$I$(2,1).c$$S$S$jalview_datamodel_AnnotationA);
an.setScore$D(score);
System.out.println$S(seqs[i].getName$() + " score: '" + ScoreNames[cols] + "' = " + new Double(score).toString() );
an.setSequenceRef$jalview_datamodel_SequenceI(seqs[i]);
seqs[i].addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(an);
this.al.addAnnotation$jalview_datamodel_AlignmentAnnotation(an);
added=true;
}
++reps;
}
if (added) {
++count;
}}
return count;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
