(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),p$1={},I$=[[0,'java.util.ArrayList','net.miginfocom.layout.DimConstraint','net.miginfocom.layout.ConstraintParser','net.miginfocom.layout.LayoutUtil']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AC", null, null, 'java.io.Externalizable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cList=Clazz.new_($I$(1,1).c$$I,[1]);
this.curIx=0;
},1);

C$.$fields$=[['I',['curIx'],'O',['cList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.cList.add$O(Clazz.new_($I$(2,1)));
}, 1);

Clazz.newMeth(C$, 'getConstaints$', function () {
return this.cList.toArray$OA(Clazz.array($I$(2), [this.cList.size$()]));
});

Clazz.newMeth(C$, 'setConstaints$net_miginfocom_layout_DimConstraintA', function (constr) {
if (constr == null  || constr.length < 1 ) constr=Clazz.array($I$(2), -1, [Clazz.new_($I$(2,1))]);
this.cList.clear$();
this.cList.ensureCapacity$I(constr.length);
for (var c, $c = 0, $$c = constr; $c<$$c.length&&((c=($$c[$c])),1);$c++) this.cList.add$O(c);

});

Clazz.newMeth(C$, 'getCount$', function () {
return this.cList.size$();
});

Clazz.newMeth(C$, 'count$I', function (size) {
p$1.makeSize$I.apply(this, [size]);
return this;
});

Clazz.newMeth(C$, 'noGrid$', function () {
return this.noGrid$IA([this.curIx]);
});

Clazz.newMeth(C$, 'noGrid$IA', function (indexes) {
for (var i=indexes.length - 1; i >= 0; i--) {
var ix=indexes[i];
p$1.makeSize$I.apply(this, [ix]);
this.cList.get$I(ix).setNoGrid$Z(true);
}
return this;
});

Clazz.newMeth(C$, 'index$I', function (i) {
p$1.makeSize$I.apply(this, [i]);
this.curIx=i;
return this;
});

Clazz.newMeth(C$, 'fill$', function () {
return this.fill$IA([this.curIx]);
});

Clazz.newMeth(C$, 'fill$IA', function (indexes) {
for (var i=indexes.length - 1; i >= 0; i--) {
var ix=indexes[i];
p$1.makeSize$I.apply(this, [ix]);
this.cList.get$I(ix).setFill$Z(true);
}
return this;
});

Clazz.newMeth(C$, 'sizeGroup$', function () {
return this.sizeGroup$S$IA("", [this.curIx]);
});

Clazz.newMeth(C$, 'sizeGroup$S', function (s) {
return this.sizeGroup$S$IA(s, [this.curIx]);
});

Clazz.newMeth(C$, 'sizeGroup$S$IA', function (s, indexes) {
for (var i=indexes.length - 1; i >= 0; i--) {
var ix=indexes[i];
p$1.makeSize$I.apply(this, [ix]);
this.cList.get$I(ix).setSizeGroup$S(s);
}
return this;
});

Clazz.newMeth(C$, 'size$S', function (s) {
return this.size$S$IA(s, [this.curIx]);
});

Clazz.newMeth(C$, 'size$S$IA', function (size, indexes) {
var bs=$I$(3).parseBoundSize$S$Z$Z(size, false, true);
for (var i=indexes.length - 1; i >= 0; i--) {
var ix=indexes[i];
p$1.makeSize$I.apply(this, [ix]);
this.cList.get$I(ix).setSize$net_miginfocom_layout_BoundSize(bs);
}
return this;
});

Clazz.newMeth(C$, 'gap$', function () {
this.curIx++;
p$1.makeSize$I.apply(this, [this.curIx]);
return this;
});

Clazz.newMeth(C$, 'gap$S', function (size) {
return this.gap$S$IA(size, [this.curIx++]);
});

Clazz.newMeth(C$, 'gap$S$IA', function (size, indexes) {
var bsa=size != null  ? $I$(3).parseBoundSize$S$Z$Z(size, true, true) : null;
for (var i=indexes.length - 1; i >= 0; i--) {
var ix=indexes[i];
p$1.makeSize$I.apply(this, [ix + 1]);
if (bsa != null ) this.cList.get$I(ix).setGapAfter$net_miginfocom_layout_BoundSize(bsa);
}
return this;
});

Clazz.newMeth(C$, 'align$S', function (side) {
return this.align$S$IA(side, [this.curIx]);
});

Clazz.newMeth(C$, 'align$S$IA', function (side, indexes) {
var al=$I$(3).parseAlignKeywords$S$Z(side, true);
if (al == null ) al=$I$(3).parseAlignKeywords$S$Z(side, false);
for (var i=indexes.length - 1; i >= 0; i--) {
var ix=indexes[i];
p$1.makeSize$I.apply(this, [ix]);
this.cList.get$I(ix).setAlign$net_miginfocom_layout_UnitValue(al);
}
return this;
});

Clazz.newMeth(C$, 'growPrio$I', function (p) {
return this.growPrio$I$IA(p, [this.curIx]);
});

Clazz.newMeth(C$, 'growPrio$I$IA', function (p, indexes) {
for (var i=indexes.length - 1; i >= 0; i--) {
var ix=indexes[i];
p$1.makeSize$I.apply(this, [ix]);
this.cList.get$I(ix).setGrowPriority$I(p);
}
return this;
});

Clazz.newMeth(C$, 'grow$', function () {
return this.grow$F$IA(100.0, [this.curIx]);
});

Clazz.newMeth(C$, 'grow$F', function (w) {
return this.grow$F$IA(w, [this.curIx]);
});

Clazz.newMeth(C$, 'grow$F$IA', function (w, indexes) {
var gw= new Float(w);
for (var i=indexes.length - 1; i >= 0; i--) {
var ix=indexes[i];
p$1.makeSize$I.apply(this, [ix]);
this.cList.get$I(ix).setGrow$Float(gw);
}
return this;
});

Clazz.newMeth(C$, 'shrinkPrio$I', function (p) {
return this.shrinkPrio$I$IA(p, [this.curIx]);
});

Clazz.newMeth(C$, 'shrinkPrio$I$IA', function (p, indexes) {
for (var i=indexes.length - 1; i >= 0; i--) {
var ix=indexes[i];
p$1.makeSize$I.apply(this, [ix]);
this.cList.get$I(ix).setShrinkPriority$I(p);
}
return this;
});

Clazz.newMeth(C$, 'shrink$', function () {
return this.shrink$F$IA(100.0, [this.curIx]);
});

Clazz.newMeth(C$, 'shrink$F', function (w) {
return this.shrink$F$IA(w, [this.curIx]);
});

Clazz.newMeth(C$, 'shrink$F$IA', function (w, indexes) {
var sw= new Float(w);
for (var i=indexes.length - 1; i >= 0; i--) {
var ix=indexes[i];
p$1.makeSize$I.apply(this, [ix]);
this.cList.get$I(ix).setShrink$Float(sw);
}
return this;
});

Clazz.newMeth(C$, 'shrinkWeight$F', function (w) {
return this.shrink$F(w);
});

Clazz.newMeth(C$, 'shrinkWeight$F$IA', function (w, indexes) {
return this.shrink$F$IA(w, indexes);
});

Clazz.newMeth(C$, 'makeSize$I', function (sz) {
if (this.cList.size$() <= sz) {
this.cList.ensureCapacity$I(sz);
for (var i=this.cList.size$(); i <= sz; i++) this.cList.add$O(Clazz.new_($I$(2,1)));

}}, p$1);

Clazz.newMeth(C$, 'readResolve', function () {
return $I$(4).getSerializedObject$O(this);
}, p$1);

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$I$(4,"setSerializedObject$O$O",[this, $I$(4).readAsXML$java_io_ObjectInput($in)]);
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
if (this.getClass$() === Clazz.getClass(C$) ) $I$(4).writeAsXML$java_io_ObjectOutput$O(out, this);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
