(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),p$1={},I$=[[0,'net.miginfocom.layout.BoundSize','net.miginfocom.layout.UnitValue','net.miginfocom.layout.ConstraintParser','Boolean','net.miginfocom.layout.LayoutUtil']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LC", null, null, 'java.io.Externalizable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.wrapAfter=0;
this.leftToRight=null;
this.insets=null;
this.alignX=null;
this.alignY=null;
this.gridGapX=null;
this.gridGapY=null;
this.width=null;
this.height=null;
this.packW=null;
this.packH=null;
this.pwAlign=0;
this.phAlign=0;
this.debugMillis=0;
this.hideMode=0;
this.noCache=false;
this.flowX=false;
this.fillX=false;
this.fillY=false;
this.topToBottom=false;
this.noGrid=false;
this.visualPadding=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.wrapAfter=2097051;
this.leftToRight=null;
this.insets=null;
this.alignX=null;
this.alignY=null;
this.gridGapX=null;
this.gridGapY=null;
this.width=$I$(1).NULL_SIZE;
this.height=$I$(1).NULL_SIZE;
this.packW=$I$(1).NULL_SIZE;
this.packH=$I$(1).NULL_SIZE;
this.pwAlign=0.5;
this.phAlign=1.0;
this.debugMillis=0;
this.hideMode=0;
this.noCache=false;
this.flowX=true;
this.fillX=false;
this.fillY=false;
this.topToBottom=true;
this.noGrid=false;
this.visualPadding=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isNoCache$', function () {
return this.noCache;
});

Clazz.newMeth(C$, 'setNoCache$Z', function (b) {
this.noCache=b;
});

Clazz.newMeth(C$, 'getAlignX$', function () {
return this.alignX;
});

Clazz.newMeth(C$, 'setAlignX$net_miginfocom_layout_UnitValue', function (uv) {
this.alignX=uv;
});

Clazz.newMeth(C$, 'getAlignY$', function () {
return this.alignY;
});

Clazz.newMeth(C$, 'setAlignY$net_miginfocom_layout_UnitValue', function (uv) {
this.alignY=uv;
});

Clazz.newMeth(C$, 'getDebugMillis$', function () {
return this.debugMillis;
});

Clazz.newMeth(C$, 'setDebugMillis$I', function (millis) {
this.debugMillis=millis;
});

Clazz.newMeth(C$, 'isFillX$', function () {
return this.fillX;
});

Clazz.newMeth(C$, 'setFillX$Z', function (b) {
this.fillX=b;
});

Clazz.newMeth(C$, 'isFillY$', function () {
return this.fillY;
});

Clazz.newMeth(C$, 'setFillY$Z', function (b) {
this.fillY=b;
});

Clazz.newMeth(C$, 'isFlowX$', function () {
return this.flowX;
});

Clazz.newMeth(C$, 'setFlowX$Z', function (b) {
this.flowX=b;
});

Clazz.newMeth(C$, 'getGridGapX$', function () {
return this.gridGapX;
});

Clazz.newMeth(C$, 'setGridGapX$net_miginfocom_layout_BoundSize', function (x) {
this.gridGapX=x;
});

Clazz.newMeth(C$, 'getGridGapY$', function () {
return this.gridGapY;
});

Clazz.newMeth(C$, 'setGridGapY$net_miginfocom_layout_BoundSize', function (y) {
this.gridGapY=y;
});

Clazz.newMeth(C$, 'getHideMode$', function () {
return this.hideMode;
});

Clazz.newMeth(C$, 'setHideMode$I', function (mode) {
if (mode < 0 || mode > 3 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Wrong hideMode: " + mode]);
this.hideMode=mode;
});

Clazz.newMeth(C$, 'getInsets$', function () {
return this.insets != null  ? Clazz.array($I$(2), -1, [this.insets[0], this.insets[1], this.insets[2], this.insets[3]]) : null;
});

Clazz.newMeth(C$, 'setInsets$net_miginfocom_layout_UnitValueA', function (ins) {
this.insets=ins != null  ? Clazz.array($I$(2), -1, [ins[0], ins[1], ins[2], ins[3]]) : null;
});

Clazz.newMeth(C$, 'getLeftToRight$', function () {
return this.leftToRight;
});

Clazz.newMeth(C$, 'setLeftToRight$Boolean', function (b) {
this.leftToRight=b;
});

Clazz.newMeth(C$, 'isNoGrid$', function () {
return this.noGrid;
});

Clazz.newMeth(C$, 'setNoGrid$Z', function (b) {
this.noGrid=b;
});

Clazz.newMeth(C$, 'isTopToBottom$', function () {
return this.topToBottom;
});

Clazz.newMeth(C$, 'setTopToBottom$Z', function (b) {
this.topToBottom=b;
});

Clazz.newMeth(C$, 'isVisualPadding$', function () {
return this.visualPadding;
});

Clazz.newMeth(C$, 'setVisualPadding$Z', function (b) {
this.visualPadding=b;
});

Clazz.newMeth(C$, 'getWrapAfter$', function () {
return this.wrapAfter;
});

Clazz.newMeth(C$, 'setWrapAfter$I', function (count) {
this.wrapAfter=count;
});

Clazz.newMeth(C$, 'getPackWidth$', function () {
return this.packW;
});

Clazz.newMeth(C$, 'setPackWidth$net_miginfocom_layout_BoundSize', function (size) {
this.packW=size != null  ? size : $I$(1).NULL_SIZE;
});

Clazz.newMeth(C$, 'getPackHeight$', function () {
return this.packH;
});

Clazz.newMeth(C$, 'setPackHeight$net_miginfocom_layout_BoundSize', function (size) {
this.packH=size != null  ? size : $I$(1).NULL_SIZE;
});

Clazz.newMeth(C$, 'getPackHeightAlign$', function () {
return this.phAlign;
});

Clazz.newMeth(C$, 'setPackHeightAlign$F', function (align) {
this.phAlign=Math.max(0.0, Math.min(1.0, align));
});

Clazz.newMeth(C$, 'getPackWidthAlign$', function () {
return this.pwAlign;
});

Clazz.newMeth(C$, 'setPackWidthAlign$F', function (align) {
this.pwAlign=Math.max(0.0, Math.min(1.0, align));
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$net_miginfocom_layout_BoundSize', function (size) {
this.width=size != null  ? size : $I$(1).NULL_SIZE;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$net_miginfocom_layout_BoundSize', function (size) {
this.height=size != null  ? size : $I$(1).NULL_SIZE;
});

Clazz.newMeth(C$, 'pack$', function () {
return this.pack$S$S("pref", "pref");
});

Clazz.newMeth(C$, 'pack$S$S', function (width, height) {
this.setPackWidth$net_miginfocom_layout_BoundSize(width != null  ? $I$(3).parseBoundSize$S$Z$Z(width, false, true) : $I$(1).NULL_SIZE);
this.setPackHeight$net_miginfocom_layout_BoundSize(height != null  ? $I$(3).parseBoundSize$S$Z$Z(height, false, false) : $I$(1).NULL_SIZE);
return this;
});

Clazz.newMeth(C$, 'packAlign$F$F', function (alignX, alignY) {
this.setPackWidthAlign$F(alignX);
this.setPackHeightAlign$F(alignY);
return this;
});

Clazz.newMeth(C$, 'wrap$', function () {
this.setWrapAfter$I(0);
return this;
});

Clazz.newMeth(C$, 'wrapAfter$I', function (count) {
this.setWrapAfter$I(count);
return this;
});

Clazz.newMeth(C$, 'noCache$', function () {
this.setNoCache$Z(true);
return this;
});

Clazz.newMeth(C$, 'flowY$', function () {
this.setFlowX$Z(false);
return this;
});

Clazz.newMeth(C$, 'flowX$', function () {
this.setFlowX$Z(true);
return this;
});

Clazz.newMeth(C$, 'fill$', function () {
this.setFillX$Z(true);
this.setFillY$Z(true);
return this;
});

Clazz.newMeth(C$, 'fillX$', function () {
this.setFillX$Z(true);
return this;
});

Clazz.newMeth(C$, 'fillY$', function () {
this.setFillY$Z(true);
return this;
});

Clazz.newMeth(C$, 'leftToRight$Z', function (b) {
this.setLeftToRight$Boolean(b ? $I$(4).TRUE : $I$(4).FALSE);
return this;
});

Clazz.newMeth(C$, 'rightToLeft$', function () {
this.setLeftToRight$Boolean($I$(4).FALSE);
return this;
});

Clazz.newMeth(C$, 'bottomToTop$', function () {
this.setTopToBottom$Z(false);
return this;
});

Clazz.newMeth(C$, 'topToBottom$', function () {
this.setTopToBottom$Z(true);
return this;
});

Clazz.newMeth(C$, 'noGrid$', function () {
this.setNoGrid$Z(true);
return this;
});

Clazz.newMeth(C$, 'noVisualPadding$', function () {
this.setVisualPadding$Z(false);
return this;
});

Clazz.newMeth(C$, 'insetsAll$S', function (allSides) {
var insH=$I$(3).parseUnitValue$S$Z(allSides, true);
var insV=$I$(3).parseUnitValue$S$Z(allSides, false);
this.insets=Clazz.array($I$(2), -1, [insV, insH, insV, insH]);
return this;
});

Clazz.newMeth(C$, 'insets$S', function (s) {
this.insets=$I$(3).parseInsets$S$Z(s, true);
return this;
});

Clazz.newMeth(C$, 'insets$S$S$S$S', function (top, left, bottom, right) {
this.insets=Clazz.array($I$(2), -1, [$I$(3).parseUnitValue$S$Z(top, false), $I$(3).parseUnitValue$S$Z(left, true), $I$(3).parseUnitValue$S$Z(bottom, false), $I$(3).parseUnitValue$S$Z(right, true)]);
return this;
});

Clazz.newMeth(C$, 'alignX$S', function (align) {
this.setAlignX$net_miginfocom_layout_UnitValue($I$(3).parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(align, true, null));
return this;
});

Clazz.newMeth(C$, 'alignY$S', function (align) {
this.setAlignY$net_miginfocom_layout_UnitValue($I$(3).parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(align, false, null));
return this;
});

Clazz.newMeth(C$, 'align$S$S', function (ax, ay) {
if (ax != null ) this.alignX$S(ax);
if (ay != null ) this.alignY$S(ay);
return this;
});

Clazz.newMeth(C$, 'gridGapX$S', function (boundsSize) {
this.setGridGapX$net_miginfocom_layout_BoundSize($I$(3).parseBoundSize$S$Z$Z(boundsSize, true, true));
return this;
});

Clazz.newMeth(C$, 'gridGapY$S', function (boundsSize) {
this.setGridGapY$net_miginfocom_layout_BoundSize($I$(3).parseBoundSize$S$Z$Z(boundsSize, true, false));
return this;
});

Clazz.newMeth(C$, 'gridGap$S$S', function (gapx, gapy) {
if (gapx != null ) this.gridGapX$S(gapx);
if (gapy != null ) this.gridGapY$S(gapy);
return this;
});

Clazz.newMeth(C$, 'debug$', function () {
this.setDebugMillis$I(300);
return this;
});

Clazz.newMeth(C$, 'debug$I', function (repaintMillis) {
this.setDebugMillis$I(repaintMillis);
return this;
});

Clazz.newMeth(C$, 'hideMode$I', function (mode) {
this.setHideMode$I(mode);
return this;
});

Clazz.newMeth(C$, 'minWidth$S', function (width) {
this.setWidth$net_miginfocom_layout_BoundSize($I$(5).derive$net_miginfocom_layout_BoundSize$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(this.getWidth$(), $I$(3).parseUnitValue$S$Z(width, true), null, null));
return this;
});

Clazz.newMeth(C$, 'width$S', function (width) {
this.setWidth$net_miginfocom_layout_BoundSize($I$(3).parseBoundSize$S$Z$Z(width, false, true));
return this;
});

Clazz.newMeth(C$, 'maxWidth$S', function (width) {
this.setWidth$net_miginfocom_layout_BoundSize($I$(5).derive$net_miginfocom_layout_BoundSize$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(this.getWidth$(), null, null, $I$(3).parseUnitValue$S$Z(width, true)));
return this;
});

Clazz.newMeth(C$, 'minHeight$S', function (height) {
this.setHeight$net_miginfocom_layout_BoundSize($I$(5).derive$net_miginfocom_layout_BoundSize$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(this.getHeight$(), $I$(3).parseUnitValue$S$Z(height, false), null, null));
return this;
});

Clazz.newMeth(C$, 'height$S', function (height) {
this.setHeight$net_miginfocom_layout_BoundSize($I$(3).parseBoundSize$S$Z$Z(height, false, false));
return this;
});

Clazz.newMeth(C$, 'maxHeight$S', function (height) {
this.setHeight$net_miginfocom_layout_BoundSize($I$(5).derive$net_miginfocom_layout_BoundSize$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(this.getHeight$(), null, null, $I$(3).parseUnitValue$S$Z(height, false)));
return this;
});

Clazz.newMeth(C$, 'readResolve', function () {
return $I$(5).getSerializedObject$O(this);
}, p$1);

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$I$(5).setSerializedObject$O$O(this, $I$(5).readAsXML$java_io_ObjectInput($in));
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
if (this.getClass$() === Clazz.getClass(C$) ) $I$(5).writeAsXML$java_io_ObjectOutput$O(out, this);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-02-03 08:07:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
