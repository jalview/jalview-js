(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'StringBuilder','java.util.ArrayList',['jalview.datamodel.SearchResults','.Match'],'java.util.BitSet']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SearchResults", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'jalview.datamodel.SearchResultsI');
C$.$classes$=[['Match',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.matches=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['matches','java.util.List']]]

Clazz.newMeth(C$, 'addResult$jalview_datamodel_SequenceI$I$I', function (seq, start, end) {
var m=Clazz.new_($I$(3,1).c$$jalview_datamodel_SequenceI$I$I,[this, null, seq, start, end]);
if (!this.matches.contains$O(m)) {
this.matches.add$O(m);
}return m;
});

Clazz.newMeth(C$, 'involvesSequence$jalview_datamodel_SequenceI', function (sequence) {
var ds=sequence.getDatasetSequence$();
for (var _m, $_m = this.matches.iterator$(); $_m.hasNext$()&&((_m=($_m.next$())),1);) {
var matched=_m.getSequence$();
if (matched != null  && (matched === sequence  || matched === ds  ) ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getResults$jalview_datamodel_SequenceI$I$I', function (sequence, start, end) {
if (this.matches.isEmpty$()) {
return null;
}var result=null;
var tmp=null;
var resultLength;
var matchStart=0;
var matchEnd=0;
var mfound;
var m;
for (var _m, $_m = this.matches.iterator$(); $_m.hasNext$()&&((_m=($_m.next$())),1);) {
m=_m;
mfound=false;
if (m.sequence === sequence  || m.sequence === sequence.getDatasetSequence$()  ) {
mfound=true;
matchStart=sequence.findIndex$I(m.start) - 1;
matchEnd=m.start == m.end ? matchStart : sequence.findIndex$I(m.end) - 1;
}if (mfound) {
if (matchStart <= end && matchEnd >= start ) {
if (matchStart < start) {
matchStart=start;
}if (matchEnd > end) {
matchEnd=end;
}if (result == null ) {
result=Clazz.array(Integer.TYPE, -1, [matchStart, matchEnd]);
} else {
resultLength=result.length;
tmp=Clazz.array(Integer.TYPE, [resultLength + 2]);
System.arraycopy$O$I$O$I$I(result, 0, tmp, 0, resultLength);
result=tmp;
result[resultLength]=matchStart;
result[resultLength + 1]=matchEnd;
}} else {
}}}
return result;
});

Clazz.newMeth(C$, 'markColumns$jalview_datamodel_SequenceCollectionI$java_util_BitSet', function (sqcol, bs) {
var count=0;
var mask=Clazz.new_($I$(4,1));
var startRes=sqcol.getStartRes$();
var endRes=sqcol.getEndRes$();
for (var s, $s = sqcol.getSequences$().iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
var cols=this.getResults$jalview_datamodel_SequenceI$I$I(s, startRes, endRes);
if (cols != null ) {
for (var pair=0; pair < cols.length; pair+=2) {
mask.set$I$I(cols[pair], cols[pair + 1] + 1);
}
}}
var original=bs.clone$();
original.and$java_util_BitSet(mask);
count=mask.cardinality$() - original.cardinality$();
bs.or$java_util_BitSet(mask);
return count;
});

Clazz.newMeth(C$, 'getSize$', function () {
return this.matches.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.matches.isEmpty$();
});

Clazz.newMeth(C$, 'getResults$', function () {
return this.matches;
});

Clazz.newMeth(C$, 'toString', function () {
return this.matches == null  ? "" : this.matches.toString();
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.matches.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null  || !(Clazz.instanceOf(obj, "jalview.datamodel.SearchResultsI")) ) {
return false;
}var sr=obj;
return this.matches.equals$O(sr.getResults$());
});

Clazz.newMeth(C$, 'addSearchResults$jalview_datamodel_SearchResultsI', function (toAdd) {
this.matches.addAll$java_util_Collection(toAdd.getResults$());
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.SearchResults, "Match", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'jalview.datamodel.SearchResultMatchI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','end'],'O',['sequence','jalview.datamodel.SequenceI']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$I$I', function (seq, start, end) {
;C$.$init$.apply(this);
this.sequence=seq;
if (start <= end) {
this.start=start;
this.end=end;
} else {
this.start=end;
this.end=start;
}}, 1);

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(1,1));
if (this.sequence != null ) {
sb.append$S(this.sequence.getName$()).append$S("/");
}sb.append$I(this.start).append$S("-").append$I(this.end);
return sb.toString();
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hash=this.sequence == null  ? 0 : this.sequence.hashCode$();
hash+=31 * this.start;
hash+=67 * this.end;
return hash;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null  || !(Clazz.instanceOf(obj, "jalview.datamodel.SearchResultMatchI")) ) {
return false;
}var m=obj;
return (this.sequence === m.getSequence$()  && this.start == m.getStart$()  && this.end == m.getEnd$() );
});

Clazz.newMeth(C$, 'contains$jalview_datamodel_SequenceI$I$I', function (seq, from, to) {
return (this.sequence === seq  && this.start <= from  && this.end >= to );
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
