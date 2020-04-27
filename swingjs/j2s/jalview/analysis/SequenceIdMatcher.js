(function(){var P$=Clazz.newPackage("jalview.analysis"),p$1={},p$2={},I$=[[0,'java.util.HashMap',['jalview.analysis.SequenceIdMatcher','.SeqIdName'],'java.util.Arrays','java.util.ArrayList','jalview.datamodel.SequenceI','java.util.Vector']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceIdMatcher", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SeqIdName',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['names','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (seqs) {
;C$.$init$.apply(this);
this.names=Clazz.new_($I$(1,1));
this.addAll$java_util_List(seqs);
}, 1);

Clazz.newMeth(C$, 'addAll$java_util_List', function (seqs) {
for (var seq, $seq = seqs.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
this.add$jalview_datamodel_SequenceI(seq);
}
});

Clazz.newMeth(C$, 'add$jalview_datamodel_SequenceI', function (seq) {
this.names.put$O$O(Clazz.new_([this, null, seq.getDisplayId$Z(true)],$I$(2,1).c$$S), seq);
var dbseq=seq;
while (dbseq.getDatasetSequence$() != null ){
dbseq=dbseq.getDatasetSequence$();
}
var dbr=dbseq.getDBRefs$();
if (dbr != null ) {
var sid=null;
for (var r=0, nr=dbr.size$(); r < nr; r++) {
sid=Clazz.new_([this, null, dbr.get$I(r).getAccessionId$()],$I$(2,1).c$$S);
if (!this.names.containsKey$O(sid)) {
this.names.put$O$O(sid, seq);
}}
}});

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA', function (sequences) {
C$.c$$java_util_List.apply(this, [$I$(3).asList$OA(sequences)]);
}, 1);

Clazz.newMeth(C$, 'pickbestMatch$jalview_analysis_SequenceIdMatcher_SeqIdName$java_util_List', function (candName, matches) {
var st=p$2.pickbestMatches$jalview_analysis_SequenceIdMatcher_SeqIdName$java_util_List.apply(this, [candName, matches]);
return st == null  || st.size$() == 0  ? null : st.get$I(0);
}, p$2);

Clazz.newMeth(C$, 'pickbestMatches$jalview_analysis_SequenceIdMatcher_SeqIdName$java_util_List', function (candName, matches) {
var best=Clazz.new_($I$(4,1));
if (candName == null  || matches == null   || matches.size$() == 0 ) {
return null;
}var match=matches.remove$I(0);
best.add$O(match);
this.names.put$O$O(Clazz.new_([this, null, match.getName$()],$I$(2,1).c$$S), match);
var matchlen=match.getName$().length$();
var namlen=candName.id.length$();
while (matches.size$() > 0){
var cand=matches.remove$I(0);
this.names.put$O$O(Clazz.new_([this, null, cand.getName$()],$I$(2,1).c$$S), cand);
var q;
var w;
var candlen=cand.getName$().length$();
if ((q=Math.abs(matchlen - namlen)) > (w=Math.abs(candlen - namlen)) && candlen > matchlen ) {
best.clear$();
match=cand;
matchlen=candlen;
best.add$O(match);
}if (q == w && candlen == matchlen ) {
best.add$O(cand);
}}
if (best.size$() == 0) {
return null;
};return best;
}, p$2);

Clazz.newMeth(C$, 'findIdMatch$jalview_datamodel_SequenceI', function (seq) {
var nam=Clazz.new_([this, null, seq.getName$()],$I$(2,1).c$$S);
return p$2.findIdMatch$jalview_analysis_SequenceIdMatcher_SeqIdName.apply(this, [nam]);
});

Clazz.newMeth(C$, 'findIdMatch$S', function (seqnam) {
var nam=Clazz.new_($I$(2,1).c$$S,[this, null, seqnam]);
return p$2.findIdMatch$jalview_analysis_SequenceIdMatcher_SeqIdName.apply(this, [nam]);
});

Clazz.newMeth(C$, 'findAllIdMatches$S', function (seqnam) {
var nam=Clazz.new_($I$(2,1).c$$S,[this, null, seqnam]);
var m=p$2.findAllIdMatches$jalview_analysis_SequenceIdMatcher_SeqIdName.apply(this, [nam]);
if (m != null ) {
return m.toArray$OA(Clazz.array($I$(5), [m.size$()]));
}return null;
});

Clazz.newMeth(C$, 'findIdMatch$jalview_datamodel_SequenceIA', function (seqs) {
var namedseqs=null;
var i=0;
var nam;
if (seqs.length > 0) {
namedseqs=Clazz.array($I$(5), [seqs.length]);
do {
nam=Clazz.new_([this, null, seqs[i].getName$()],$I$(2,1).c$$S);
if (this.names.containsKey$O(nam)) {
namedseqs[i]=p$2.findIdMatch$jalview_analysis_SequenceIdMatcher_SeqIdName.apply(this, [nam]);
} else {
namedseqs[i]=null;
}} while (++i < seqs.length);
}return namedseqs;
});

Clazz.newMeth(C$, 'findIdMatch$jalview_analysis_SequenceIdMatcher_SeqIdName', function (nam) {
var matches=Clazz.new_($I$(6,1));
while (this.names.containsKey$O(nam)){
matches.addElement$O(this.names.remove$O(nam));
}
return p$2.pickbestMatch$jalview_analysis_SequenceIdMatcher_SeqIdName$java_util_List.apply(this, [nam, matches]);
}, p$2);

Clazz.newMeth(C$, 'findAllIdMatches$jalview_analysis_SequenceIdMatcher_SeqIdName', function (nam) {
var matches=Clazz.new_($I$(4,1));
while (this.names.containsKey$O(nam)){
matches.add$O(this.names.remove$O(nam));
}
var r=p$2.pickbestMatches$jalview_analysis_SequenceIdMatcher_SeqIdName$java_util_List.apply(this, [nam, matches]);
return r;
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.SequenceIdMatcher, "SeqIdName", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.WORD_SEP="~. |#\\/<>!\"\u00a4$%^*)}[@\',?_";
},1);

C$.$fields$=[['S',['id','WORD_SEP']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.$init$.apply(this);
if (s != null ) {
this.id=s.toLowerCase$();
} else {
this.id="";
}}, 1);

Clazz.newMeth(C$, 'hashCode$', function () {
return ((this.id.length$() >= 4) ? this.id.substring$I$I(0, 4).hashCode$() : this.id.hashCode$());
});

Clazz.newMeth(C$, 'equals$O', function (s) {
if (s == null ) {
return false;
}if (Clazz.instanceOf(s, "jalview.analysis.SequenceIdMatcher.SeqIdName")) {
return p$1.stringequals$S.apply(this, [(s).id]);
} else {
if (Clazz.instanceOf(s, "java.lang.String")) {
return p$1.stringequals$S.apply(this, [(s).toLowerCase$()]);
}}return false;
});

Clazz.newMeth(C$, 'stringequals$S', function (s) {
if (this.id.length$() > s.length$()) {
return this.id.startsWith$S(s) ? (this.WORD_SEP.indexOf$I(this.id.charAt$I(s.length$())) > -1) : false;
} else {
return s.startsWith$S(this.id) ? (s.equals$O(this.id) ? true : (this.WORD_SEP.indexOf$I(s.charAt$I(this.id.length$())) > -1)) : false;
}}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this.id;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
