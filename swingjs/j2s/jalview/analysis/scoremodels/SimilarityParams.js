(function(){var P$=Clazz.newPackage("jalview.analysis.scoremodels"),I$=[];
var C$=Clazz.newClass(P$, "SimilarityParams", null, null, 'jalview.api.analysis.SimilarityParamsI');
C$.Jalview=null;
C$.SeqSpace=null;
C$.PID1=null;
C$.PID2=null;
C$.PID3=null;
C$.PID4=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.Jalview=Clazz.new_(C$.c$$Z$Z$Z$Z,[true, true, true, true]);
C$.SeqSpace=Clazz.new_(C$.c$$Z$Z$Z$Z,[true, false, true, true]);
C$.PID1=Clazz.new_(C$.c$$Z$Z$Z$Z,[false, false, true, false]);
C$.PID2=Clazz.new_(C$.c$$Z$Z$Z$Z,[false, false, false, false]);
C$.PID3=Clazz.new_(C$.c$$Z$Z$Z$Z,[false, false, false, true]);
C$.PID4=Clazz.new_(C$.c$$Z$Z$Z$Z,[false, false, true, true]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.includeGappedColumns=false;
this.matchGaps=false;
this.includeGaps=false;
this.denominateByShortestLength=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z$Z$Z', function (includeGapGap, matchGapResidue, includeGapResidue, shortestLength) {
C$.$init$.apply(this);
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

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
