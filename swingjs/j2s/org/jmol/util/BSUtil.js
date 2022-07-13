(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'javajs.util.BS']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BSUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['emptySet','javajs.util.BS']]]

Clazz.newMeth(C$, 'newAndSetBit$I', function (i) {
var bs=$I$(1).newN$I(i + 1);
bs.set$I(i);
return bs;
}, 1);

Clazz.newMeth(C$, 'areEqual$javajs_util_BS$javajs_util_BS', function (a, b) {
return (a == null  || b == null   ? a == null  && b == null   : a.equals$O(b));
}, 1);

Clazz.newMeth(C$, 'haveCommon$javajs_util_BS$javajs_util_BS', function (a, b) {
return (a == null  || b == null   ? false : a.intersects$javajs_util_BS(b));
}, 1);

Clazz.newMeth(C$, 'cardinalityOf$javajs_util_BS', function (bs) {
return (bs == null  ? 0 : bs.cardinality$());
}, 1);

Clazz.newMeth(C$, 'newBitSet2$I$I', function (i0, i1) {
var bs=$I$(1).newN$I(i1);
bs.setBits$I$I(i0, i1);
return bs;
}, 1);

Clazz.newMeth(C$, 'setAll$I', function (n) {
var bs=$I$(1).newN$I(n);
bs.setBits$I$I(0, n);
return bs;
}, 1);

Clazz.newMeth(C$, 'andNot$javajs_util_BS$javajs_util_BS', function (a, b) {
if (b != null  && a != null  ) a.andNot$javajs_util_BS(b);
return a;
}, 1);

Clazz.newMeth(C$, 'copy$javajs_util_BS', function (bs) {
return bs == null  ? null : bs.clone$();
}, 1);

Clazz.newMeth(C$, 'copy2$javajs_util_BS$javajs_util_BS', function (a, b) {
if (a == null  || b == null  ) return null;
b.clearAll$();
b.or$javajs_util_BS(a);
return b;
}, 1);

Clazz.newMeth(C$, 'copyInvert$javajs_util_BS$I', function (bs, n) {
return (bs == null  ? null : C$.andNot$javajs_util_BS$javajs_util_BS(C$.setAll$I(n), bs));
}, 1);

Clazz.newMeth(C$, 'invertInPlace$javajs_util_BS$I', function (bs, n) {
return C$.copy2$javajs_util_BS$javajs_util_BS(C$.copyInvert$javajs_util_BS$I(bs, n), bs);
}, 1);

Clazz.newMeth(C$, 'toggleInPlace$javajs_util_BS$javajs_util_BS', function (a, b) {
if (a.equals$O(b)) {
a.clearAll$();
} else if (C$.andNot$javajs_util_BS$javajs_util_BS(C$.copy$javajs_util_BS(b), a).length$() == 0) {
C$.andNot$javajs_util_BS$javajs_util_BS(a, b);
} else {
a.or$javajs_util_BS(b);
}return a;
}, 1);

Clazz.newMeth(C$, 'deleteBits$javajs_util_BS$javajs_util_BS', function (bs, bsDelete) {
if (bs == null  || bsDelete == null  ) return bs;
var ipt=bsDelete.nextSetBit$I(0);
if (ipt < 0) return bs;
var len=bs.length$();
var lend=Math.min(len, bsDelete.length$());
var i;
for (i=bsDelete.nextClearBit$I(ipt); i < lend && i >= 0 ; i=bsDelete.nextClearBit$I(i + 1)) bs.setBitTo$I$Z(ipt++, bs.get$I(i));

for (i=lend; i < len; i++) bs.setBitTo$I$Z(ipt++, bs.get$I(i));

if (ipt < len) bs.clearBits$I$I(ipt, len);
return bs;
}, 1);

Clazz.newMeth(C$, 'shiftBits$javajs_util_BS$javajs_util_BS$Z$I', function (bs, bsAdded, setIfFound, iLast) {
if (bs == null  || bsAdded == null  ) return;
var n=bsAdded.length$();
var bsNew=$I$(1).newN$I(n);
var isFound=false;
var doSet=false;
var checkFound=setIfFound;
for (var j=0, i=0; j < n && i < iLast ; j++) {
if (bsAdded.get$I(j)) {
if (doSet) bsNew.set$I(j);
checkFound=setIfFound;
isFound=false;
} else if (bs.get$I(i++)) {
bsNew.set$I(j);
if (checkFound) {
checkFound=false;
isFound=true;
doSet=true;
}} else if (checkFound && !isFound ) {
doSet=false;
}}
bs.clearAll$();
bs.or$javajs_util_BS(bsNew);
}, 1);

Clazz.newMeth(C$, 'offset$javajs_util_BS$I$I', function (bs0, pos, offset) {
if (bs0 == null ) return;
var bsTemp=$I$(1,"newN$I",[bs0.length$() + offset]);
for (var i=bs0.nextSetBit$I(0); i >= pos; i=bs0.nextSetBit$I(i + 1)) bsTemp.set$I(i + offset);

C$.copy2$javajs_util_BS$javajs_util_BS(bsTemp, bs0);
}, 1);

Clazz.newMeth(C$, 'setMapBitSet$java_util_Map$I$I$S', function (ht, i1, i2, key) {
var bs;
if (ht.containsKey$O(key)) bs=ht.get$O(key);
 else ht.put$O$O(key, bs=Clazz.new_($I$(1,1)));
bs.setBits$I$I(i1, i2 + 1);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.emptySet=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
