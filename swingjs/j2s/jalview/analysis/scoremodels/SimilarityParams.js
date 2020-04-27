(function(){var P$=Clazz.newPackage("jalview.analysis.scoremodels"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SimilarityParams", null, null, 'jalview.api.analysis.SimilarityParamsI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['includeGappedColumns','matchGaps','includeGaps','denominateByShortestLength']]
,['O',['Jalview','jalview.api.analysis.SimilarityParamsI','+SeqSpace','+PID1','+PID2','+PID3','+PID4']]]

Clazz.newMeth(C$, 'c$$Z$Z$Z$Z', function (includeGapGap, matchGapResidue, includeGapResidue, shortestLength) {
;C$.$init$.apply(this);
this.includeGappedColumns=includeGapGap;
this.matchGaps=matchGapResidue;
this.includeGaps=includeGapResidue;
this.denominateByShortestLength=shortestLength;
}, 1);

Clazz.newMeth(C$, 'includeGaps$', function () {
return this.includeGaps;
});

Clazz.newMeth(C$, 'denominateByShortestLength$', function () {
return this.denominateByShortestLength;
});

Clazz.newMeth(C$, 'includeGappedColumns$', function () {
return this.includeGappedColumns;
});

Clazz.newMeth(C$, 'matchGaps$', function () {
return this.matchGaps;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var prime=31;
var result=1;
result=31 * result + (this.denominateByShortestLength ? 1231 : 1237);
result=31 * result + (this.includeGappedColumns ? 1231 : 1237);
result=31 * result + (this.includeGaps ? 1231 : 1237);
result=31 * result + (this.matchGaps ? 1231 : 1237);
return result;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (obj == null ) {
return false;
}if (this.getClass$() !== obj.getClass$() ) {
return false;
}var other=obj;
if (this.denominateByShortestLength != other.denominateByShortestLength ) {
return false;
}if (this.includeGappedColumns != other.includeGappedColumns ) {
return false;
}if (this.includeGaps != other.includeGaps ) {
return false;
}if (this.matchGaps != other.matchGaps ) {
return false;
}return true;
});

C$.$static$=function(){C$.$static$=0;
C$.Jalview=Clazz.new_(C$.c$$Z$Z$Z$Z,[true, true, true, true]);
C$.SeqSpace=Clazz.new_(C$.c$$Z$Z$Z$Z,[true, false, true, true]);
C$.PID1=Clazz.new_(C$.c$$Z$Z$Z$Z,[false, false, true, false]);
C$.PID2=Clazz.new_(C$.c$$Z$Z$Z$Z,[false, false, false, false]);
C$.PID3=Clazz.new_(C$.c$$Z$Z$Z$Z,[false, false, false, true]);
C$.PID4=Clazz.new_(C$.c$$Z$Z$Z$Z,[false, false, true, true]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
