(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models"),I$=[[0,'java.util.HashSet','java.util.ArrayList','java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BaseList");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._bases=null;
this._caption=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._bases=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_BaseList', function (b) {
C$.$init$.apply(this);
this._caption=b._caption;
this._bases=Clazz.new_($I$(1).c$$java_util_Collection,[b._bases]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (caption) {
C$.$init$.apply(this);
this._caption=caption;
}, 1);

Clazz.newMeth(C$, 'c$$S$fr_orsay_lri_varna_models_rna_ModeleBase', function (caption, mb) {
C$.c$$S.apply(this, [caption]);
this.addBase$fr_orsay_lri_varna_models_rna_ModeleBase(mb);
}, 1);

Clazz.newMeth(C$, 'contains$fr_orsay_lri_varna_models_rna_ModeleBase', function (mb) {
return this._bases.contains$O(mb);
});

Clazz.newMeth(C$, 'getCaption$', function () {
return this._caption;
});

Clazz.newMeth(C$, 'addBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (b) {
this._bases.add$TE(b);
});

Clazz.newMeth(C$, 'removeBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (b) {
this._bases.remove$O(b);
});

Clazz.newMeth(C$, 'addBases$java_util_Collection', function (mbs) {
this._bases.addAll$java_util_Collection(mbs);
});

Clazz.newMeth(C$, 'getBases$', function () {
return Clazz.new_($I$(2).c$$java_util_Collection,[this._bases]);
});

Clazz.newMeth(C$, 'clear$', function () {
this._bases.clear$();
});

Clazz.newMeth(C$, 'getAverageColor$java_util_ArrayList', function (cols) {
var r=0;
var g=0;
var b=0;
for (var c, $c = cols.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
r+=c.getRed$();
g+=c.getGreen$();
b+=c.getBlue$();
}
if (cols.size$() > 0) {
r=(r/(cols.size$())|0);
g=(g/(cols.size$())|0);
b=(b/(cols.size$())|0);
}return Clazz.new_($I$(3).c$$I$I$I,[r, g, b]);
}, 1);

Clazz.newMeth(C$, 'getAverageOutlineColor$', function () {
var cols=Clazz.new_($I$(2));
for (var mb, $mb = this._bases.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
cols.add$TE(mb.getStyleBase$().getBaseOutlineColor$());
}
return C$.getAverageColor$java_util_ArrayList(cols);
});

Clazz.newMeth(C$, 'getAverageNameColor$', function () {
var cols=Clazz.new_($I$(2));
for (var mb, $mb = this._bases.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
cols.add$TE(mb.getStyleBase$().getBaseNameColor$());
}
return C$.getAverageColor$java_util_ArrayList(cols);
});

Clazz.newMeth(C$, 'getAverageNumberColor$', function () {
var cols=Clazz.new_($I$(2));
for (var mb, $mb = this._bases.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
cols.add$TE(mb.getStyleBase$().getBaseNumberColor$());
}
return C$.getAverageColor$java_util_ArrayList(cols);
});

Clazz.newMeth(C$, 'getAverageInnerColor$', function () {
var cols=Clazz.new_($I$(2));
for (var mb, $mb = this._bases.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
cols.add$TE(mb.getStyleBase$().getBaseInnerColor$());
}
return C$.getAverageColor$java_util_ArrayList(cols);
});

Clazz.newMeth(C$, 'getNumbers$', function () {
var result="";
var first=true;
for (var mb, $mb = this._bases.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
if (!first) {
result += ",";
} else {
first=false;
}result += "" + mb.getBaseNumber$();
}
result += "";
return result;
});

Clazz.newMeth(C$, 'getContents$', function () {
var result="";
var first=true;
for (var mb, $mb = this._bases.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
if (!first) {
result += ",";
} else {
first=false;
}result += "" + mb.getContent$();
}
result += "";
return result;
});

Clazz.newMeth(C$, 'getIndices$', function () {
var indices=Clazz.new_($I$(2));
for (var mb, $mb = this._bases.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
indices.add$TE(new Integer(mb.getIndex$()));
}
return indices;
});

Clazz.newMeth(C$, 'retainAll$fr_orsay_lri_varna_models_BaseList', function (mb) {
var cp=Clazz.new_($I$(1));
cp.addAll$java_util_Collection(this._bases);
cp.retainAll$java_util_Collection(mb._bases);
var result=Clazz.new_(C$.c$$S,["TmpIntersection"]);
result.addBases$java_util_Collection(cp);
return result;
});

Clazz.newMeth(C$, 'removeAll$fr_orsay_lri_varna_models_BaseList', function (mb) {
var cp=Clazz.new_($I$(1));
cp.addAll$java_util_Collection(this._bases);
cp.removeAll$java_util_Collection(mb._bases);
var result=Clazz.new_(C$.c$$S,["TmpMinus"]);
result.addBases$java_util_Collection(cp);
return result;
});

Clazz.newMeth(C$, 'size$', function () {
return this._bases.size$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
