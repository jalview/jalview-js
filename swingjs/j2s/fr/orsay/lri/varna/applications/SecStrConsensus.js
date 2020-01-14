(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),I$=[[0,'java.util.ArrayList','java.util.Hashtable',['fr.orsay.lri.varna.applications.SecStrConsensus','.SimpleBP']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SecStrConsensus", function(){
Clazz.newInstance(this, arguments,0,C$);
});

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'extractConsensus$java_util_ArrayList', function (bps) {
var maxlength=0;
for (var strs, $strs = bps.iterator$(); $strs.hasNext$()&&((strs=($strs.next$())),1);) {
for (var bp, $bp = strs.iterator$(); $bp.hasNext$()&&((bp=($bp.next$())),1);) {
maxlength=Math.max(1 + Math.max(bp.bp5, bp.bp3), maxlength);
}
}
var seq=Clazz.new_($I$(1));
for (var i=0; i < seq.size$(); i++) {
seq.add$TE(Clazz.new_($I$(2)));
}
for (var strs, $strs = bps.iterator$(); $strs.hasNext$()&&((strs=($strs.next$())),1);) {
for (var bp, $bp = strs.iterator$(); $bp.hasNext$()&&((bp=($bp.next$())),1);) {
var i=bp.bp5;
var j=bp.bp3;
var h=seq.get$I(i);
if (!h.containsKey$O(new Integer(j))) {
h.put$TK$TV(new Integer(j), new Double(0.0));
}h.put$TK$TV(new Integer(j), new Double((h.get$O(new Integer(i))).doubleValue$() + 1.0));
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

Clazz.newMeth(C$, 'canBasePair$java_util_ArrayList$I$I', function (seq, i, k) {
return seq.get$I(i).containsKey$O(new Integer(k));
}, 1);

Clazz.newMeth(C$, 'basePairScore$java_util_ArrayList$I$I', function (seq, i, k) {
return (seq.get$I(i).get$O(new Integer(k))).doubleValue$();
}, 1);

Clazz.newMeth(C$, 'fillMatrix$java_util_ArrayList', function (seq) {
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

Clazz.newMeth(C$, 'backtrack$DAA$java_util_ArrayList', function (tab, seq) {
return C$.backtrack$DAA$java_util_ArrayList$I$I(tab, seq, 0, seq.size$() - 1);
}, 1);

Clazz.newMeth(C$, 'backtrack$DAA$java_util_ArrayList$I$I', function (tab, seq, i, j) {
var result=Clazz.new_($I$(1));
if (i < j) {
var indices=Clazz.new_($I$(1));
indices.add$TE(new Integer(-1));
for (var k=i + 1; k <= j; k++) {
indices.add$TE(new Integer(k));
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
result.add$TE(Clazz.new_($I$(3).c$$I$I,[i, k]));
}}}}
} else if (i == j) {
} else {
}return result;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.SecStrConsensus, "SimpleBP", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bp5=0;
this.bp3=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (i5, i3) {
C$.$init$.apply(this);
this.bp5=i5;
this.bp3=i3;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:41 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
