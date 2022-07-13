(function(){var P$=Clazz.newPackage("intervalstore.nonc"),p$1={},I$=[[0,'intervalstore.nonc.IntervalStore','intervalstore.nonc.SimpleFeature','java.util.ArrayList','intervalstore.impl.IntervalStore','java.util.Random']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IntervalStoreTest");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'testFindOverlaps_nonNested$', function () {
var store=Clazz.new_($I$(1));
var sf1=this.add$intervalstore_nonc_IntervalStore$I$I(store, 10, 20);
var sf2=Clazz.new_($I$(2).c$$I$I$S,[10, 20, "desc"]);
store.add$TT(sf2);
var sf3=this.add$intervalstore_nonc_IntervalStore$I$I(store, 15, 25);
var sf4=this.add$intervalstore_nonc_IntervalStore$I$I(store, 20, 35);
org.testng.Assert.assertEquals$I$I(store.size$(), 4);
var overlaps=store.findOverlaps$J$J(1, 9);
org.testng.Assert.assertTrue$Z(overlaps.isEmpty$());
overlaps=store.findOverlaps$J$J(8, 10);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 2);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
overlaps=store.findOverlaps$J$J(12, 16);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 3);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf3));
overlaps=store.findOverlaps$J$J(33, 33);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 1);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
overlaps=store.findOverlaps$J$J(35, 40);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 1);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
org.testng.Assert.assertTrue$Z(store.findOverlaps$J$J(36, 100).isEmpty$());
org.testng.Assert.assertTrue$Z(store.findOverlaps$J$J(1, 9).isEmpty$());
});

Clazz.newMeth(C$, 'testFindOverlaps_nested$', function () {
var store=Clazz.new_($I$(1));
var sf1=this.add$intervalstore_nonc_IntervalStore$I$I(store, 10, 50);
var sf2=this.add$intervalstore_nonc_IntervalStore$I$I(store, 10, 40);
var sf3=this.add$intervalstore_nonc_IntervalStore$I$I(store, 20, 30);
var sf4=Clazz.new_($I$(2).c$$I$I$S,[20, 30, "different desc"]);
store.add$TT(sf4);
var sf5=this.add$intervalstore_nonc_IntervalStore$I$I(store, 35, 36);
var overlaps=store.findOverlaps$J$J(1, 9);
org.testng.Assert.assertTrue$Z(overlaps.isEmpty$());
overlaps=store.findOverlaps$J$J(10, 15);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 2);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
overlaps=store.findOverlaps$J$J(45, 60);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 1);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
overlaps=store.findOverlaps$J$J(32, 38);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 3);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf5));
overlaps=store.findOverlaps$J$J(15, 25);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 4);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf3));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
});

Clazz.newMeth(C$, 'testFindOverlaps_mixed$', function () {
var store=Clazz.new_($I$(1));
var sf1=this.add$intervalstore_nonc_IntervalStore$I$I(store, 10, 50);
var sf2=this.add$intervalstore_nonc_IntervalStore$I$I(store, 1, 15);
var sf3=this.add$intervalstore_nonc_IntervalStore$I$I(store, 20, 30);
var sf4=this.add$intervalstore_nonc_IntervalStore$I$I(store, 40, 100);
var sf5=this.add$intervalstore_nonc_IntervalStore$I$I(store, 60, 100);
var sf6=this.add$intervalstore_nonc_IntervalStore$I$I(store, 70, 70);
var overlaps=store.findOverlaps$J$J(200, 200);
org.testng.Assert.assertTrue$Z(overlaps.isEmpty$());
overlaps=store.findOverlaps$J$J(1, 9);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 1);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
overlaps=store.findOverlaps$J$J(5, 18);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 2);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
overlaps=store.findOverlaps$J$J(30, 40);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 3);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf3));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
overlaps=store.findOverlaps$J$J(80, 90);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 2);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf5));
overlaps=store.findOverlaps$J$J(68, 70);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 3);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf5));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf6));
});

Clazz.newMeth(C$, 'add$intervalstore_nonc_IntervalStore$I$I', function (store, from, to) {
var sf1=Clazz.new_($I$(2).c$$I$I$S,[from, to, "desc"]);
store.add$TT(sf1);
return sf1;
});

Clazz.newMeth(C$, 'testRemove$', function () {
var store=Clazz.new_($I$(1));
var sf1=this.add$intervalstore_nonc_IntervalStore$I$I(store, 10, 20);
org.testng.Assert.assertTrue$Z(store.contains$O(sf1));
try {
store.remove$O("what is this?");
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
} else {
throw e;
}
}
org.testng.Assert.assertFalse$Z(store.remove$O(null));
org.testng.Assert.assertTrue$Z(store.remove$O(sf1));
org.testng.Assert.assertTrue$Z(store.isEmpty$());
var sf2=this.add$intervalstore_nonc_IntervalStore$I$I(store, 0, 0);
var sf2a=this.add$intervalstore_nonc_IntervalStore$I$I(store, 30, 40);
org.testng.Assert.assertTrue$Z(store.contains$O(sf2));
org.testng.Assert.assertFalse$Z(store.remove$O(sf1));
org.testng.Assert.assertTrue$Z(store.remove$O(sf2));
org.testng.Assert.assertTrue$Z(store.remove$O(sf2a));
org.testng.Assert.assertTrue$Z(store.isEmpty$());
var sf4=this.add$intervalstore_nonc_IntervalStore$I$I(store, 20, 30);
var sf5=this.add$intervalstore_nonc_IntervalStore$I$I(store, 22, 26);
var sf6=this.add$intervalstore_nonc_IntervalStore$I$I(store, 23, 24);
var sf7=this.add$intervalstore_nonc_IntervalStore$I$I(store, 25, 25);
var sf8=this.add$intervalstore_nonc_IntervalStore$I$I(store, 24, 24);
var sf9=this.add$intervalstore_nonc_IntervalStore$I$I(store, 23, 23);
org.testng.Assert.assertEquals$I$I(store.size$(), 6);
org.testng.Assert.assertTrue$Z(store.remove$O(sf6));
org.testng.Assert.assertEquals$I$I(store.size$(), 5);
org.testng.Assert.assertFalse$Z(store.contains$O(sf6));
org.testng.Assert.assertTrue$Z(store.remove$O(sf7));
org.testng.Assert.assertEquals$I$I(store.size$(), 4);
org.testng.Assert.assertFalse$Z(store.contains$O(sf7));
org.testng.Assert.assertTrue$Z(store.remove$O(sf5));
org.testng.Assert.assertEquals$I$I(store.size$(), 3);
org.testng.Assert.assertFalse$Z(store.contains$O(sf5));
org.testng.Assert.assertTrue$Z(store.remove$O(sf4));
org.testng.Assert.assertEquals$I$I(store.size$(), 2);
org.testng.Assert.assertFalse$Z(store.contains$O(sf4));
org.testng.Assert.assertTrue$Z(store.remove$O(sf9));
org.testng.Assert.assertEquals$I$I(store.size$(), 1);
org.testng.Assert.assertFalse$Z(store.contains$O(sf9));
org.testng.Assert.assertTrue$Z(store.remove$O(sf8));
org.testng.Assert.assertTrue$Z(store.isEmpty$());
});

Clazz.newMeth(C$, 'containsObject$java_util_List$O', function (list, o) {
for (var i, $i = list.iterator$(); $i.hasNext$()&&((i=($i.next$())),1);) {
if (i === o ) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'testAdd$', function () {
var store=Clazz.new_($I$(1));
org.testng.Assert.assertFalse$Z(store.add$TT(null));
var sf1=Clazz.new_($I$(2).c$$I$I$S,[10, 20, "Cath"]);
var sf2=Clazz.new_($I$(2).c$$I$I$S,[10, 20, "Cath"]);
org.testng.Assert.assertTrue$Z(store.add$TT(sf1));
org.testng.Assert.assertEquals$I$I(store.size$(), 1);
org.testng.Assert.assertTrue$Z(store.contains$O(sf1));
org.testng.Assert.assertTrue$Z(store.contains$O(sf2));
org.testng.Assert.assertTrue$Z(store.add$TT(sf2));
org.testng.Assert.assertEquals$I$I(store.size$(), 2);
var sf3=Clazz.new_($I$(2).c$$I$I$S,[0, 0, "Cath"]);
org.testng.Assert.assertTrue$Z(store.add$TT(sf3));
org.testng.Assert.assertEquals$I$I(store.size$(), 3);
});

Clazz.newMeth(C$, 'testAdd_noDuplicates$', function () {
var store=Clazz.new_($I$(1));
var sf1=Clazz.new_($I$(2).c$$I$I$S,[10, 20, "Cath"]);
var sf2=Clazz.new_($I$(2).c$$I$I$S,[10, 20, "Cath"]);
org.testng.Assert.assertTrue$Z(sf1.equals$O(sf2));
org.testng.Assert.assertTrue$Z(store.add$TT(sf1));
org.testng.Assert.assertEquals$I$I(store.size$(), 1);
org.testng.Assert.assertFalse$Z(store.add$TT$Z(sf2, false));
org.testng.Assert.assertEquals$I$I(store.size$(), 1);
org.testng.Assert.assertTrue$Z(store.contains$O(sf1));
org.testng.Assert.assertTrue$Z(store.contains$O(sf2));
});

Clazz.newMeth(C$, 'testIsEmpty$', function () {
var store=Clazz.new_($I$(1));
org.testng.Assert.assertTrue$Z(store.isEmpty$());
org.testng.Assert.assertEquals$I$I(store.size$(), 0);
var sf1=Clazz.new_($I$(2).c$$I$I$S,[10, 20, "Cath"]);
store.add$TT(sf1);
org.testng.Assert.assertFalse$Z(store.isEmpty$());
org.testng.Assert.assertEquals$I$I(store.size$(), 1);
store.remove$O(sf1);
org.testng.Assert.assertTrue$Z(store.isEmpty$());
org.testng.Assert.assertEquals$I$I(store.size$(), 0);
sf1=Clazz.new_($I$(2).c$$I$I$S,[0, 0, "Cath"]);
store.add$TT(sf1);
org.testng.Assert.assertFalse$Z(store.isEmpty$());
org.testng.Assert.assertEquals$I$I(store.size$(), 1);
store.remove$O(sf1);
org.testng.Assert.assertTrue$Z(store.isEmpty$());
org.testng.Assert.assertEquals$I$I(store.size$(), 0);
sf1=Clazz.new_($I$(2).c$$I$I$S,[19, 49, "Cath"]);
var sf2=Clazz.new_($I$(2).c$$I$I$S,[20, 40, "Cath"]);
var sf3=Clazz.new_($I$(2).c$$I$I$S,[25, 35, "Cath"]);
store.add$TT(sf1);
org.testng.Assert.assertEquals$I$I(store.size$(), 1);
store.add$TT(sf2);
org.testng.Assert.assertEquals$I$I(store.size$(), 2);
store.add$TT(sf3);
org.testng.Assert.assertEquals$I$I(store.size$(), 3);
org.testng.Assert.assertTrue$Z(store.remove$O(sf1));
org.testng.Assert.assertEquals$I$I(store.size$(), 2);
org.testng.Assert.assertFalse$Z(store.isEmpty$());
org.testng.Assert.assertTrue$Z(store.remove$O(sf2));
org.testng.Assert.assertEquals$I$I(store.size$(), 1);
org.testng.Assert.assertFalse$Z(store.isEmpty$());
org.testng.Assert.assertTrue$Z(store.remove$O(sf3));
org.testng.Assert.assertEquals$I$I(store.size$(), 0);
org.testng.Assert.assertTrue$Z(store.isEmpty$());
});

Clazz.newMeth(C$, 'testRemove_readd$', function () {
var store=Clazz.new_($I$(1));
var sf1=this.add$intervalstore_nonc_IntervalStore$I$I(store, 10, 20);
var sf2=this.add$intervalstore_nonc_IntervalStore$I$I(store, 12, 14);
org.testng.Assert.assertEquals$I$I(store.size$(), 2);
org.testng.Assert.assertTrue$Z(store.contains$O(sf1));
org.testng.Assert.assertTrue$Z(store.contains$O(sf2));
org.testng.Assert.assertTrue$Z(store.remove$O(sf1));
org.testng.Assert.assertFalse$Z(store.contains$O(sf1));
org.testng.Assert.assertTrue$Z(store.contains$O(sf2));
store.add$TT(sf2);
org.testng.Assert.assertEquals$I$I(store.size$(), 2);
org.testng.Assert.assertTrue$Z(store.contains$O(sf2));
});

Clazz.newMeth(C$, 'testContains$', function () {
var store=Clazz.new_($I$(1));
var sf1=Clazz.new_($I$(2).c$$I$I$S,[10, 20, "Cath"]);
var sf2=Clazz.new_($I$(2).c$$I$I$S,[10, 20, "Pfam"]);
store.add$TT(sf1);
org.testng.Assert.assertTrue$Z(store.contains$O(sf1));
org.testng.Assert.assertTrue$Z(store.contains$O(Clazz.new_($I$(2).c$$intervalstore_nonc_SimpleFeature,[sf1])));
org.testng.Assert.assertFalse$Z(store.contains$O(sf2));
var sf3=Clazz.new_($I$(2).c$$I$I$S,[12, 16, "Cath"]);
store.add$TT(sf3);
org.testng.Assert.assertTrue$Z(store.contains$O(sf3));
org.testng.Assert.assertTrue$Z(store.contains$O(Clazz.new_($I$(2).c$$intervalstore_nonc_SimpleFeature,[sf3])));
store.remove$O(sf1);
org.testng.Assert.assertFalse$Z(store.contains$O(sf1));
org.testng.Assert.assertTrue$Z(store.contains$O(sf3));
org.testng.Assert.assertFalse$Z(store.contains$O(null));
try {
org.testng.Assert.assertFalse$Z(store.contains$O("junk"));
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'testFindOverlaps_resultsArg_mixed$', function () {
var store=Clazz.new_($I$(1));
var sf1=this.add$intervalstore_nonc_IntervalStore$I$I(store, 10, 50);
var sf2=this.add$intervalstore_nonc_IntervalStore$I$I(store, 1, 15);
var sf3=this.add$intervalstore_nonc_IntervalStore$I$I(store, 20, 30);
var sf4=this.add$intervalstore_nonc_IntervalStore$I$I(store, 40, 100);
var sf5=this.add$intervalstore_nonc_IntervalStore$I$I(store, 60, 100);
var sf6=this.add$intervalstore_nonc_IntervalStore$I$I(store, 70, 70);
var overlaps=Clazz.new_($I$(3));
var overlaps2=store.findOverlaps$J$J$java_util_List(200, 200, overlaps);
org.testng.Assert.assertSame$O$O(overlaps, overlaps2);
org.testng.Assert.assertTrue$Z(overlaps.isEmpty$());
overlaps.clear$();
store.findOverlaps$J$J$java_util_List(1, 9, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 1);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
overlaps.clear$();
store.findOverlaps$J$J$java_util_List(5, 18, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 2);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
overlaps.clear$();
store.findOverlaps$J$J$java_util_List(30, 40, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 3);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf3));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
overlaps.clear$();
store.findOverlaps$J$J$java_util_List(80, 90, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 2);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf5));
overlaps.clear$();
store.findOverlaps$J$J$java_util_List(68, 70, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 3);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf5));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf6));
store.findOverlaps$J$J$java_util_List(30, 40, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 6);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf3));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf5));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf6));
org.testng.Assert.assertSame$O$O(sf4, overlaps.get$I(0));
org.testng.Assert.assertSame$O$O(sf4, overlaps.get$I(4));
});

Clazz.newMeth(C$, 'testFindOverlaps_resultsArg_nested$', function () {
var store=Clazz.new_($I$(1));
var sf1=this.add$intervalstore_nonc_IntervalStore$I$I(store, 10, 50);
var sf2=this.add$intervalstore_nonc_IntervalStore$I$I(store, 10, 40);
var sf3=this.add$intervalstore_nonc_IntervalStore$I$I(store, 20, 30);
var sf4=Clazz.new_($I$(2).c$$I$I$S,[20, 30, "different desc"]);
store.add$TT(sf4);
var sf5=this.add$intervalstore_nonc_IntervalStore$I$I(store, 35, 36);
var overlaps=Clazz.new_($I$(3));
store.findOverlaps$J$J$java_util_List(1, 9, overlaps);
org.testng.Assert.assertTrue$Z(overlaps.isEmpty$());
store.findOverlaps$J$J$java_util_List(10, 15, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 2);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
overlaps.clear$();
store.findOverlaps$J$J$java_util_List(45, 60, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 1);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
overlaps.clear$();
store.findOverlaps$J$J$java_util_List(32, 38, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 3);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf5));
overlaps.clear$();
store.findOverlaps$J$J$java_util_List(15, 25, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 4);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf3));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
});

Clazz.newMeth(C$, 'testFindOverlaps_resultsArg_nonNested$', function () {
var store=Clazz.new_($I$(1));
var sf1=this.add$intervalstore_nonc_IntervalStore$I$I(store, 10, 20);
var sf2=Clazz.new_($I$(2).c$$I$I$S,[10, 20, "desc"]);
store.add$TT(sf2);
var sf3=this.add$intervalstore_nonc_IntervalStore$I$I(store, 15, 25);
var sf4=this.add$intervalstore_nonc_IntervalStore$I$I(store, 20, 35);
org.testng.Assert.assertEquals$I$I(store.size$(), 4);
var overlaps=Clazz.new_($I$(3));
store.findOverlaps$J$J$java_util_List(1, 9, overlaps);
org.testng.Assert.assertTrue$Z(overlaps.isEmpty$());
store.findOverlaps$J$J$java_util_List(8, 10, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 2);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
overlaps.clear$();
store.findOverlaps$J$J$java_util_List(12, 16, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 3);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf1));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf2));
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf3));
overlaps.clear$();
store.findOverlaps$J$J$java_util_List(33, 33, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 1);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
overlaps.clear$();
store.findOverlaps$J$J$java_util_List(35, 40, overlaps);
org.testng.Assert.assertEquals$I$I(overlaps.size$(), 1);
org.testng.Assert.assertTrue$Z(overlaps.contains$O(sf4));
overlaps.clear$();
org.testng.Assert.assertTrue$Z(store.findOverlaps$J$J$java_util_List(36, 100, overlaps).isEmpty$());
org.testng.Assert.assertTrue$Z(store.findOverlaps$J$J$java_util_List(1, 9, overlaps).isEmpty$());
});

Clazz.newMeth(C$, 'testAddAndQueryTiming$', function () {
var store=Clazz.new_($I$(4));
System.out.println$S("IntervalStoreJ");
p$1.testAddAndQueryTiming$intervalstore_api_IntervalStoreI.apply(this, [store]);
System.out.println$S("\nnonc.IntervalStore");
store=Clazz.new_($I$(1));
p$1.testAddAndQueryTiming$intervalstore_api_IntervalStoreI.apply(this, [store]);
});

Clazz.newMeth(C$, 'testAddAndQueryTiming$intervalstore_api_IntervalStoreI', function (store) {
var seqlen=100000;
var repeats=20;
var K=1000;
var warmups=5;
var scales=Clazz.array(Integer.TYPE, -1, [10000, 100000, 1000000]);
var r=Clazz.new_($I$(5).c$$J,[732]);
var counter=0;
System.out.println$S("Scale\titeration\tmicrosecs");
for (var scale, $scale = 0, $$scale = scales; $scale<$$scale.length&&((scale=($$scale[$scale])),1);$scale++) {
for (var i=0; i < scale; i++) {
var sf=this.makeFeature$I$java_util_Random$I(100000, r, counter);
counter++;
store.add$TE(sf);
}
var total=0;
for (var i=0; i < 25; i++) {
var sf=this.makeFeature$I$java_util_Random$I(100000, r, counter);
store.add$TE(sf);
var t1=System.nanoTime$();
store.findOverlaps$J$J(10, 20);
var elapsed=System.nanoTime$() - t1;
if (i >= 5) {
total+=elapsed;
System.out.println$S(String.format$S$OA("%d\t%d\t%d", [new Integer(scale), new Integer(i - 5), new Long((elapsed/1000|0))]));
}}
System.out.println$S("average " + ((total/(20000)|0)));
}
}, p$1);

Clazz.newMeth(C$, 'makeFeature$I$java_util_Random$I', function (seqlen, r, counter) {
var i1=r.nextInt$I(seqlen);
var i2=r.nextInt$I(seqlen);
var from=Math.min(i1, i2);
var to=Math.max(i1, i2);
var sf=Clazz.new_($I$(2).c$$I$I$S,[from, to, "desc" + counter]);
return sf;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-09-10 16:07:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
