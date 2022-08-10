(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'java.util.ArrayList','java.util.Hashtable',['jalview.analysis.SecStrConsensus','.SimpleBP']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SecStrConsensus", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SimpleBP',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'extractConsensus$java_util_ArrayList',  function (bps) {
var maxlength=0;
for (var strs, $strs = bps.iterator$(); $strs.hasNext$()&&((strs=($strs.next$())),1);) {
for (var bp, $bp = strs.iterator$(); $bp.hasNext$()&&((bp=($bp.next$())),1);) {
maxlength=Math.max(1 + Math.max(bp.bp5, bp.bp3), maxlength);
}
}
var seq=Clazz.new_($I$(1,1));
for (var i=0; i < maxlength; i++) {
seq.add$O(Clazz.new_($I$(2,1)));
}
for (var strs, $strs = bps.iterator$(); $strs.hasNext$()&&((strs=($strs.next$())),1);) {
for (var bp, $bp = strs.iterator$(); $bp.hasNext$()&&((bp=($bp.next$())),1);) {
var i=bp.bp5;
var j=bp.bp3;
var h=seq.get$I(i);
if (!h.containsKey$O(Integer.valueOf$I(j))) {
h.put$O$O(Integer.valueOf$I(j), Double.valueOf$D(0.0));
}h.put$O$O(Integer.valueOf$I(j), Double.valueOf$D((h.get$O(Integer.valueOf$I(j))).$c() + 1.0));
}
}
var mat=C$.fillMatrix$java_util_ArrayList(seq);
var res=C$.backtrack$DAA$java_util_ArrayList(mat, seq);
var finalres=Clazz.array(Integer.TYPE, [seq.size$()]);
for (var i=0; i < seq.size$(); i++) {
finalres[i]=-1;
}
for (var bp, $bp = res.iterator$(); $bp.hasNext$()&&((bp=($bp.next$())),1);) {
finalres[bp.bp5]=bp.bp3;
finalres[bp.bp3]=bp.bp5;
}
return finalres;
}, 1);

Clazz.newMeth(C$, 'canBasePair$java_util_ArrayList$I$I',  function (seq, i, k) {
return seq.get$I(i).containsKey$O(Integer.valueOf$I(k));
}, 1);

Clazz.newMeth(C$, 'basePairScore$java_util_ArrayList$I$I',  function (seq, i, k) {
return (seq.get$I(i).get$O(Integer.valueOf$I(k))).valueOf();
}, 1);

Clazz.newMeth(C$, 'fillMatrix$java_util_ArrayList',  function (seq) {
var n=seq.size$();
var tab=Clazz.array(Double.TYPE, [n, n]);
for (var m=1; m <= n; m++) {
for (var i=0; i < n - m + 1; i++) {
var j=i + m - 1;
tab[i][j]=0;
if (i < j) {
tab[i][j]=Math.max(tab[i][j], tab[i + 1][j]);
for (var k=i + 1; k <= j; k++) {
if (C$.canBasePair$java_util_ArrayList$I$I(seq, i, k)) {
var fact1=0;
if (k > i + 1) {
fact1=tab[i + 1][k - 1];
}var fact2=0;
if (k < j) {
fact2=tab[k + 1][j];
}tab[i][j]=Math.max(tab[i][j], C$.basePairScore$java_util_ArrayList$I$I(seq, i, k) + fact1 + fact2 );
}}
}}
}
return tab;
}, 1);

Clazz.newMeth(C$, 'backtrack$DAA$java_util_ArrayList',  function (tab, seq) {
return C$.backtrack$DAA$java_util_ArrayList$I$I(tab, seq, 0, seq.size$() - 1);
}, 1);

Clazz.newMeth(C$, 'backtrack$DAA$java_util_ArrayList$I$I',  function (tab, seq, i, j) {
var result=Clazz.new_($I$(1,1));
if (i < j) {
var indices=Clazz.new_($I$(1,1));
indices.add$O(Integer.valueOf$I(-1));
for (var k=i + 1; k <= j; k++) {
indices.add$O(Integer.valueOf$I(k));
}
for (var k, $k = indices.iterator$(); $k.hasNext$()&&((k=($k.next$()).intValue$()),1);) {
if (k == -1) {
if (tab[i][j] == tab[i + 1][j] ) {
result=C$.backtrack$DAA$java_util_ArrayList$I$I(tab, seq, i + 1, j);
}} else {
if (C$.canBasePair$java_util_ArrayList$I$I(seq, i, k)) {
var fact1=0;
if (k > i + 1) {
fact1=tab[i + 1][k - 1];
}var fact2=0;
if (k < j) {
fact2=tab[k + 1][j];
}if (tab[i][j] == C$.basePairScore$java_util_ArrayList$I$I(seq, i, k) + fact1 + fact2  ) {
result=C$.backtrack$DAA$java_util_ArrayList$I$I(tab, seq, i + 1, k - 1);
result.addAll$java_util_Collection(C$.backtrack$DAA$java_util_ArrayList$I$I(tab, seq, k + 1, j));
result.add$O(Clazz.new_($I$(3,1).c$$I$I,[i, k]));
}}}}
} else if (i == j) {
} else {
}return result;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.SecStrConsensus, "SimpleBP", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['bp5','bp3']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (i5, i3) {
;C$.$init$.apply(this);
this.bp5=i5;
this.bp3=i3;
}, 1);

Clazz.newMeth(C$, 'setBP5$I',  function (i5) {
this.bp5=i5;
});

Clazz.newMeth(C$, 'setBP3$I',  function (i3) {
this.bp3=i3;
});

Clazz.newMeth(C$, 'getBP5$',  function () {
return this.bp5;
});

Clazz.newMeth(C$, 'getBP3$',  function () {
return this.bp3;
});

Clazz.newMeth(C$, 'toString',  function () {
return "(" + this.bp5 + "," + this.bp3 + ")" ;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
