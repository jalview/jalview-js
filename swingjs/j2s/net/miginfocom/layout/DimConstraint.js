(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),p$1={},I$=[[0,'net.miginfocom.layout.ResizeConstraint','net.miginfocom.layout.BoundSize','net.miginfocom.layout.UnitValue','net.miginfocom.layout.PlatformDefaults','net.miginfocom.layout.LayoutUtil']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DimConstraint", null, null, 'java.io.Externalizable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.resize=null;
this.sizeGroup=null;
this.size=null;
this.gapBefore=null;
this.gapAfter=null;
this.align=null;
this.endGroup=null;
this.fill=false;
this.noGrid=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.resize=Clazz.new_($I$(1));
this.sizeGroup=null;
this.size=$I$(2).NULL_SIZE;
this.gapBefore=null;
this.gapAfter=null;
this.align=null;
this.endGroup=null;
this.fill=false;
this.noGrid=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getGrowPriority$', function () {
return this.resize.growPrio;
});

Clazz.newMeth(C$, 'setGrowPriority$I', function (p) {
this.resize.growPrio=p;
});

Clazz.newMeth(C$, 'getGrow$', function () {
return this.resize.grow;
});

Clazz.newMeth(C$, 'setGrow$Float', function (weight) {
this.resize.grow=weight;
});

Clazz.newMeth(C$, 'getShrinkPriority$', function () {
return this.resize.shrinkPrio;
});

Clazz.newMeth(C$, 'setShrinkPriority$I', function (p) {
this.resize.shrinkPrio=p;
});

Clazz.newMeth(C$, 'getShrink$', function () {
return this.resize.shrink;
});

Clazz.newMeth(C$, 'setShrink$Float', function (weight) {
this.resize.shrink=weight;
});

Clazz.newMeth(C$, 'getAlignOrDefault$Z', function (isCols) {
if (this.align != null ) return this.align;
if (isCols) return $I$(3).LEADING;
return this.fill || $I$(4).getDefaultRowAlignmentBaseline$() == false   ? $I$(3).CENTER : $I$(3).BASELINE_IDENTITY;
});

Clazz.newMeth(C$, 'getAlign$', function () {
return this.align;
});

Clazz.newMeth(C$, 'setAlign$net_miginfocom_layout_UnitValue', function (uv) {
this.align=uv;
});

Clazz.newMeth(C$, 'getGapAfter$', function () {
return this.gapAfter;
});

Clazz.newMeth(C$, 'setGapAfter$net_miginfocom_layout_BoundSize', function (size) {
this.gapAfter=size;
});

Clazz.newMeth(C$, 'hasGapAfter$', function () {
return this.gapAfter != null  && this.gapAfter.isUnset$() == false  ;
});

Clazz.newMeth(C$, 'isGapAfterPush$', function () {
return this.gapAfter != null  && this.gapAfter.getGapPush$() ;
});

Clazz.newMeth(C$, 'getGapBefore$', function () {
return this.gapBefore;
});

Clazz.newMeth(C$, 'setGapBefore$net_miginfocom_layout_BoundSize', function (size) {
this.gapBefore=size;
});

Clazz.newMeth(C$, 'hasGapBefore$', function () {
return this.gapBefore != null  && this.gapBefore.isUnset$() == false  ;
});

Clazz.newMeth(C$, 'isGapBeforePush$', function () {
return this.gapBefore != null  && this.gapBefore.getGapPush$() ;
});

Clazz.newMeth(C$, 'getSize$', function () {
return this.size;
});

Clazz.newMeth(C$, 'setSize$net_miginfocom_layout_BoundSize', function (size) {
if (size != null ) size.checkNotLinked$();
this.size=size;
});

Clazz.newMeth(C$, 'getSizeGroup$', function () {
return this.sizeGroup;
});

Clazz.newMeth(C$, 'setSizeGroup$S', function (s) {
this.sizeGroup=s;
});

Clazz.newMeth(C$, 'getEndGroup$', function () {
return this.endGroup;
});

Clazz.newMeth(C$, 'setEndGroup$S', function (s) {
this.endGroup=s;
});

Clazz.newMeth(C$, 'isFill$', function () {
return this.fill;
});

Clazz.newMeth(C$, 'setFill$Z', function (b) {
this.fill=b;
});

Clazz.newMeth(C$, 'isNoGrid$', function () {
return this.noGrid;
});

Clazz.newMeth(C$, 'setNoGrid$Z', function (b) {
this.noGrid=b;
});

Clazz.newMeth(C$, 'getRowGaps$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_BoundSize$I$Z', function (parent, defGap, refSize, before) {
var gap=before ? this.gapBefore : this.gapAfter;
if (gap == null  || gap.isUnset$() ) gap=defGap;
if (gap == null  || gap.isUnset$() ) return null;
var ret=Clazz.array(Integer.TYPE, [3]);
for (var i=0; i <= 2; i++) {
var uv=gap.getSize$I(i);
ret[i]=uv != null  ? uv.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, parent, null) : -2147471302;
}
return ret;
});

Clazz.newMeth(C$, 'getComponentGaps$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_BoundSize$net_miginfocom_layout_ComponentWrapper$S$I$I$Z', function (parent, comp, adjGap, adjacentComp, tag, refSize, adjacentSide, isLTR) {
var gap=adjacentSide < 2 ? this.gapBefore : this.gapAfter;
var hasGap=gap != null  && gap.getGapPush$() ;
if ((gap == null  || gap.isUnset$() ) && (adjGap == null  || adjGap.isUnset$() ) && comp != null   ) gap=$I$(4).getDefaultComponentGap$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_ComponentWrapper$I$S$Z(comp, adjacentComp, adjacentSide + 1, tag, isLTR);
if (gap == null ) return hasGap ? Clazz.array(Integer.TYPE, -1, [0, 0, -2147471302]) : null;
var ret=Clazz.array(Integer.TYPE, [3]);
for (var i=0; i <= 2; i++) {
var uv=gap.getSize$I(i);
ret[i]=uv != null  ? uv.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, parent, null) : -2147471302;
}
return ret;
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
