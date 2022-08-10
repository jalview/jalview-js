(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),p$1={},I$=[[0,'java.util.HashMap','java.util.ArrayList','net.miginfocom.layout.LayoutUtil','net.miginfocom.layout.PlatformDefaults','net.miginfocom.layout.LinkHandler','net.miginfocom.layout.UnitConverter']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnitValue", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.linkId=null;
},1);

C$.$fields$=[['Z',['isHor'],'F',['value'],'I',['unit','oper'],'S',['unitStr','linkId'],'O',['subUnits','net.miginfocom.layout.UnitValue[]']]
,['O',['UNIT_MAP','java.util.HashMap','CONVERTERS','java.util.ArrayList','ZERO','net.miginfocom.layout.UnitValue','+TOP','+LEADING','+LEFT','+CENTER','+TRAILING','+RIGHT','+BOTTOM','+LABEL','+INF','+BASELINE_IDENTITY','SCALE','float[]']]]

Clazz.newMeth(C$, 'c$$F', function (value) {
C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S.apply(this, [value, null, 0, true, 100, null, null, new Float(value).toString() + "px"]);
}, 1);

Clazz.newMeth(C$, 'c$$F$I$S', function (value, unit, createString) {
C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S.apply(this, [value, null, unit, true, 100, null, null, createString]);
}, 1);

Clazz.newMeth(C$, 'c$$F$S$Z$I$S', function (value, unitStr, isHor, oper, createString) {
C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S.apply(this, [value, unitStr, -1, isHor, oper, null, null, createString]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S', function (isHor, oper, sub1, sub2, createString) {
C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S.apply(this, [0, "", -1, isHor, oper, sub1, sub2, createString]);
if (sub1 == null  || sub2 == null  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Sub units is null!"]);
}, 1);

Clazz.newMeth(C$, 'c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S', function (value, unitStr, unit, isHor, oper, sub1, sub2, createString) {
;C$.$init$.apply(this);
if (oper < 100 || oper > 107 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown Operation: " + oper]);
if (oper >= 101 && oper <= 107  && (sub1 == null  || sub2 == null  ) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[oper + " Operation may not have null sub-UnitValues."]);
this.value=value;
this.oper=oper;
this.isHor=isHor;
this.unitStr=unitStr;
this.unit=unitStr != null  ? p$1.parseUnitString.apply(this, []) : unit;
this.subUnits=sub1 != null  && sub2 != null   ? Clazz.array(C$, -1, [sub1, sub2]) : null;
$I$(3).putCCString$O$S(this, createString);
}, 1);

Clazz.newMeth(C$, 'getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper', function (refValue, parent, comp) {
return Math.round(this.getPixelsExact$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refValue, parent, comp));
});

Clazz.newMeth(C$, 'getPixelsExact$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper', function (refValue, parent, comp) {
if (parent == null ) return 1;
if (this.oper == 100) {
switch (this.unit) {
case 0:
return this.value;
case 1:
case 2:
return parent.getPixelUnitFactor$Z(this.unit == 1) * this.value;
case 3:
case 4:
case 5:
case 7:
var f=C$.SCALE[this.unit - 3];
var s=this.isHor ? $I$(4).getHorizontalScaleFactor$() : $I$(4).getVerticalScaleFactor$();
if (s != null ) f *= (s).valueOf();
return (this.isHor ? parent.getHorizontalScreenDPI$() : parent.getVerticalScreenDPI$()) * this.value / f;
case 6:
return this.value * refValue * 0.01 ;
case 8:
case 9:
return (this.unit == 8 ? parent.getScreenWidth$() : parent.getScreenHeight$()) * this.value * 0.01 ;
case 12:
var st=$I$(5,"getValue$O$S$I",[parent.getLayout$(), "visual", this.isHor ? 0 : 1]);
var sz=$I$(5,"getValue$O$S$I",[parent.getLayout$(), "visual", this.isHor ? 2 : 3]);
if (st == null  || sz == null  ) return 0;
return this.value * (Math.max(0, sz.intValue$()) - refValue) + (st).valueOf();
case 13:
if (comp == null ) return 0;
return this.isHor ? comp.getMinimumWidth$I(comp.getHeight$()) : comp.getMinimumHeight$I(comp.getWidth$());
case 14:
if (comp == null ) return 0;
return this.isHor ? comp.getPreferredWidth$I(comp.getHeight$()) : comp.getPreferredHeight$I(comp.getWidth$());
case 15:
if (comp == null ) return 0;
return this.isHor ? comp.getMaximumWidth$I(comp.getHeight$()) : comp.getMaximumHeight$I(comp.getWidth$());
case 16:
return $I$(4).getMinimumButtonWidthIncludingPadding$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refValue, parent, comp);
case 18:
case 19:
case 20:
case 21:
case 22:
case 23:
case 24:
case 25:
var v=$I$(5,"getValue$O$S$I",[parent.getLayout$(), this.getLinkTargetId$(), this.unit - (this.unit >= 24 ? 24 : 18)]);
if (v == null ) return 0;
if (this.unit == 24) return parent.getScreenLocationX$() + (v).valueOf();
if (this.unit == 25) return parent.getScreenLocationY$() + (v).valueOf();
return (v).valueOf();
case 26:
var res=p$1.lookup$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper.apply(this, [refValue, parent, comp]);
if (res != -87654312 ) return res;
case 27:
return $I$(4).getLabelAlignPercentage$() * refValue;
case -1:
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown/illegal unit: " + this.unit + ", unitStr: " + this.unitStr ]);
}if (this.subUnits != null  && this.subUnits.length == 2 ) {
var r1=this.subUnits[0].getPixelsExact$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refValue, parent, comp);
var r2=this.subUnits[1].getPixelsExact$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refValue, parent, comp);
switch (this.oper) {
case 101:
return r1 + r2;
case 102:
return r1 - r2;
case 103:
return r1 * r2;
case 104:
return r1 / r2;
case 105:
return r1 < r2  ? r1 : r2;
case 106:
return r1 > r2  ? r1 : r2;
case 107:
return (r1 + r2) * 0.5;
}
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Internal: Unknown Oper: " + this.oper]);
});

Clazz.newMeth(C$, 'lookup$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper', function (refValue, parent, comp) {
var res=-87654312;
for (var i=C$.CONVERTERS.size$() - 1; i >= 0; i--) {
res=C$.CONVERTERS.get$I(i).convertToPixels$F$S$Z$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(this.value, this.unitStr, this.isHor, refValue, parent, comp);
if (res != -87654312 ) return res;
}
return $I$(4).convertToPixels$F$S$Z$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(this.value, this.unitStr, this.isHor, refValue, parent, comp);
}, p$1);

Clazz.newMeth(C$, 'parseUnitString', function () {
var len=this.unitStr.length$();
if (len == 0) return this.isHor ? $I$(4).getDefaultHorizontalUnit$() : $I$(4).getDefaultVerticalUnit$();
var u=C$.UNIT_MAP.get$O(this.unitStr);
if (u != null ) {
if (!this.isHor && ((u).valueOf() === 16  || (u).valueOf() === 27  ) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not valid in vertical contexts: '" + this.unitStr + "'" ]);
return (u).valueOf();
}if (this.unitStr.equals$O("lp")) return this.isHor ? 1 : 2;
if (this.unitStr.equals$O("sp")) return this.isHor ? 8 : 9;
if (p$1.lookup$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper.apply(this, [0, null, null]) != -87654312 ) return 26;
var pIx=this.unitStr.indexOf$I(".");
if (pIx != -1) {
this.linkId=this.unitStr.substring$I$I(0, pIx);
var e=this.unitStr.substring$I(pIx + 1);
if (e.equals$O("x")) return 18;
if (e.equals$O("y")) return 19;
if (e.equals$O("w") || e.equals$O("width") ) return 20;
if (e.equals$O("h") || e.equals$O("height") ) return 21;
if (e.equals$O("x2")) return 22;
if (e.equals$O("y2")) return 23;
if (e.equals$O("xpos")) return 24;
if (e.equals$O("ypos")) return 25;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown keyword: " + this.unitStr]);
}, p$1);

Clazz.newMeth(C$, 'isAbsolute$', function () {
switch (this.unit) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 7:
return true;
case 8:
case 9:
case 6:
case 12:
case 13:
case 14:
case 15:
case 16:
case 18:
case 19:
case 20:
case 21:
case 22:
case 23:
case 24:
case 25:
case 26:
case 27:
return false;
case -1:
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown/illegal unit: " + this.unit + ", unitStr: " + this.unitStr ]);
});

Clazz.newMeth(C$, 'isAbsoluteDeep$', function () {
if (this.subUnits != null ) {
for (var subUnit, $subUnit = 0, $$subUnit = this.subUnits; $subUnit<$$subUnit.length&&((subUnit=($$subUnit[$subUnit])),1);$subUnit++) {
if (subUnit.isAbsoluteDeep$()) return true;
}
}return this.isAbsolute$();
});

Clazz.newMeth(C$, 'isLinked$', function () {
return this.linkId != null ;
});

Clazz.newMeth(C$, 'isLinkedDeep$', function () {
if (this.subUnits != null ) {
for (var subUnit, $subUnit = 0, $$subUnit = this.subUnits; $subUnit<$$subUnit.length&&((subUnit=($$subUnit[$subUnit])),1);$subUnit++) {
if (subUnit.isLinkedDeep$()) return true;
}
}return this.isLinked$();
});

Clazz.newMeth(C$, 'getLinkTargetId$', function () {
return this.linkId;
});

Clazz.newMeth(C$, 'getSubUnitValue$I', function (i) {
return this.subUnits[i];
});

Clazz.newMeth(C$, 'getSubUnitCount$', function () {
return this.subUnits != null  ? this.subUnits.length : 0;
});

Clazz.newMeth(C$, 'getSubUnits$', function () {
return this.subUnits != null  ? this.subUnits.clone$() : null;
});

Clazz.newMeth(C$, 'getUnit$', function () {
return this.unit;
});

Clazz.newMeth(C$, 'getUnitString$', function () {
return this.unitStr;
});

Clazz.newMeth(C$, 'getOperation$', function () {
return this.oper;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'isHorizontal$', function () {
return this.isHor;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + ". Value=" + new Float(this.value).toString() + ", unit=" + this.unit + ", unitString: " + this.unitStr + ", oper=" + this.oper + ", isHor: " + this.isHor ;
});

Clazz.newMeth(C$, 'getConstraintString$', function () {
return $I$(3).getCCString$O(this);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return ((this.value * 12345)|0) + (this.oper >>> 5) + this.unit  >>> 17;
});

Clazz.newMeth(C$, 'addGlobalUnitConverter$net_miginfocom_layout_UnitConverter', function (conv) {
if (conv == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
C$.CONVERTERS.add$O(conv);
}, 1);

Clazz.newMeth(C$, 'removeGlobalUnitConverter$net_miginfocom_layout_UnitConverter', function (unit) {
return C$.CONVERTERS.remove$O(unit);
}, 1);

Clazz.newMeth(C$, 'getGlobalUnitConverters$', function () {
return C$.CONVERTERS.toArray$OA(Clazz.array($I$(6), [C$.CONVERTERS.size$()]));
}, 1);

Clazz.newMeth(C$, 'getDefaultUnit$', function () {
return $I$(4).getDefaultHorizontalUnit$();
}, 1);

Clazz.newMeth(C$, 'setDefaultUnit$I', function (unit) {
$I$(4).setDefaultHorizontalUnit$I(unit);
$I$(4).setDefaultVerticalUnit$I(unit);
}, 1);

Clazz.newMeth(C$, 'readResolve', function () {
return $I$(3).getSerializedObject$O(this);
}, p$1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
if (this.getClass$() === Clazz.getClass(C$) ) $I$(3).writeAsXML$java_io_ObjectOutput$O(out, this);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
$I$(3,"setSerializedObject$O$O",[this, $I$(3).readAsXML$java_io_ObjectInput($in)]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.UNIT_MAP=Clazz.new_($I$(1,1).c$$I,[32]);
C$.CONVERTERS=Clazz.new_($I$(2,1));
{
C$.UNIT_MAP.put$O$O("px", new Integer(0));
C$.UNIT_MAP.put$O$O("lpx", new Integer(1));
C$.UNIT_MAP.put$O$O("lpy", new Integer(2));
C$.UNIT_MAP.put$O$O("%", new Integer(6));
C$.UNIT_MAP.put$O$O("cm", new Integer(4));
C$.UNIT_MAP.put$O$O("in", new Integer(5));
C$.UNIT_MAP.put$O$O("spx", new Integer(8));
C$.UNIT_MAP.put$O$O("spy", new Integer(9));
C$.UNIT_MAP.put$O$O("al", new Integer(12));
C$.UNIT_MAP.put$O$O("mm", new Integer(3));
C$.UNIT_MAP.put$O$O("pt", new Integer(7));
C$.UNIT_MAP.put$O$O("min", new Integer(13));
C$.UNIT_MAP.put$O$O("minimum", new Integer(13));
C$.UNIT_MAP.put$O$O("p", new Integer(14));
C$.UNIT_MAP.put$O$O("pref", new Integer(14));
C$.UNIT_MAP.put$O$O("max", new Integer(15));
C$.UNIT_MAP.put$O$O("maximum", new Integer(15));
C$.UNIT_MAP.put$O$O("button", new Integer(16));
C$.UNIT_MAP.put$O$O("label", new Integer(27));
};
C$.ZERO=Clazz.new_(C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[0, null, 0, true, 100, null, null, "0px"]);
C$.TOP=Clazz.new_(C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[0, null, 6, false, 100, null, null, "top"]);
C$.LEADING=Clazz.new_(C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[0, null, 6, true, 100, null, null, "leading"]);
C$.LEFT=Clazz.new_(C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[0, null, 6, true, 100, null, null, "left"]);
C$.CENTER=Clazz.new_(C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[50, null, 6, true, 100, null, null, "center"]);
C$.TRAILING=Clazz.new_(C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[100, null, 6, true, 100, null, null, "trailing"]);
C$.RIGHT=Clazz.new_(C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[100, null, 6, true, 100, null, null, "right"]);
C$.BOTTOM=Clazz.new_(C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[100, null, 6, false, 100, null, null, "bottom"]);
C$.LABEL=Clazz.new_(C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[0, null, 27, false, 100, null, null, "label"]);
C$.INF=Clazz.new_(C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[2097051, null, 0, true, 100, null, null, "inf"]);
C$.BASELINE_IDENTITY=Clazz.new_(C$.c$$F$S$I$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[0, null, -1, false, 100, null, null, "baseline"]);
C$.SCALE=Clazz.array(Float.TYPE, -1, [25.4, 2.54, 1.0, 0.0, 72.0]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:25 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
