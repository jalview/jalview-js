(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),I$=[[0,'java.util.WeakHashMap','java.util.TreeSet','net.miginfocom.layout.BoundSize','net.miginfocom.layout.PlatformDefaults','net.miginfocom.layout.UnitValue']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LayoutUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['HAS_BEANS'],'I',['eSz','globalDebugMillis'],'O',['CR_MAP','java.util.WeakHashMap','+DT_MAP']]]

Clazz.newMeth(C$, 'hasBeans$', function () {
return false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getVersion$', function () {
return "5.0";
}, 1);

Clazz.newMeth(C$, 'getGlobalDebugMillis$', function () {
return C$.globalDebugMillis;
}, 1);

Clazz.newMeth(C$, 'setGlobalDebugMillis$I', function (millis) {
C$.globalDebugMillis=millis;
}, 1);

Clazz.newMeth(C$, 'setDesignTime$net_miginfocom_layout_ContainerWrapper$Z', function (cw, b) {
if (C$.DT_MAP == null ) C$.DT_MAP=Clazz.new_($I$(1,1));
C$.DT_MAP.put$O$O((cw != null  ? cw.getComponent$() : null), new Boolean(b));
}, 1);

Clazz.newMeth(C$, 'isDesignTime$net_miginfocom_layout_ContainerWrapper', function (cw) {
if (C$.DT_MAP == null ) return false;
if (cw == null  && C$.DT_MAP != null   && !C$.DT_MAP.isEmpty$() ) return true;
if (cw != null  && C$.DT_MAP.containsKey$O(cw.getComponent$()) == false  ) cw=null;
var b=C$.DT_MAP.get$O(cw != null  ? cw.getComponent$() : null);
return b != null  && (b).valueOf() ;
}, 1);

Clazz.newMeth(C$, 'getDesignTimeEmptySize$', function () {
return C$.eSz;
}, 1);

Clazz.newMeth(C$, 'setDesignTimeEmptySize$I', function (pixels) {
C$.eSz=pixels;
}, 1);

Clazz.newMeth(C$, 'putCCString$O$S', function (con, s) {
if (s != null  && con != null   && C$.isDesignTime$net_miginfocom_layout_ContainerWrapper(null) ) {
if (C$.CR_MAP == null ) C$.CR_MAP=Clazz.new_($I$(1,1).c$$I,[64]);
C$.CR_MAP.put$O$O(con, s);
}}, 1);

Clazz.newMeth(C$, 'getCCString$O', function (con) {
return C$.CR_MAP != null  ? C$.CR_MAP.get$O(con) : null;
}, 1);

Clazz.newMeth(C$, 'throwCC$', function () {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["setStoreConstraintData(true) must be set for strings to be saved."]);
}, 1);

Clazz.newMeth(C$, 'calculateSerial$IAA$net_miginfocom_layout_ResizeConstraintA$FloatA$I$I', function (sizes, resConstr, defPushWeights, startSizeType, bounds) {
var lengths=Clazz.array(Float.TYPE, [sizes.length]);
var usedLength=0.0;
for (var i=0; i < sizes.length; i++) {
if (sizes[i] != null ) {
var len=sizes[i][startSizeType] != -2147471302 ? sizes[i][startSizeType] : 0;
var newSizeBounded=C$.getBrokenBoundary$F$I$I(len, sizes[i][0], sizes[i][2]);
if (newSizeBounded != -2147471302) len=newSizeBounded;
usedLength += len;
lengths[i]=len;
}}
var useLengthI=Math.round(usedLength);
if (useLengthI != bounds && resConstr != null  ) {
var isGrow=useLengthI < bounds;
var prioList=Clazz.new_($I$(2,1));
for (var i=0; i < sizes.length; i++) {
var resC=C$.getIndexSafe$OA$I(resConstr, i);
if (resC != null ) prioList.add$O(new Integer(isGrow ? resC.growPrio : resC.shrinkPrio));
}
var prioIntegers=prioList.toArray$OA(Clazz.array(Integer, [prioList.size$()]));
for (var force=0; force <= ((isGrow && defPushWeights != null  ) ? 1 : 0); force++) {
for (var pr=prioIntegers.length - 1; pr >= 0; pr--) {
var curPrio=(prioIntegers[pr]).valueOf();
var totWeight=0.0;
var resizeWeight=Clazz.array(Float, [sizes.length]);
for (var i=0; i < sizes.length; i++) {
if (sizes[i] == null ) continue;
var resC=C$.getIndexSafe$OA$I(resConstr, i);
if (resC != null ) {
var prio=isGrow ? resC.growPrio : resC.shrinkPrio;
if (curPrio == prio) {
if (isGrow) {
resizeWeight[i]=(force == 0 || resC.grow != null  ) ? resC.grow : (defPushWeights[i < defPushWeights.length ? i : defPushWeights.length - 1]);
} else {
resizeWeight[i]=resC.shrink;
}if (resizeWeight[i] != null ) totWeight += (resizeWeight[i]).valueOf();
}}}
if (totWeight > 0.0 ) {
var hit;
do {
var toChange=bounds - usedLength;
hit=false;
var changedWeight=0.0;
for (var i=0; i < sizes.length && totWeight > 1.0E-4  ; i++) {
var weight=resizeWeight[i];
if (weight != null ) {
var sizeDelta=toChange * (weight).valueOf() / totWeight;
var newSize=lengths[i] + sizeDelta;
if (sizes[i] != null ) {
var newSizeBounded=C$.getBrokenBoundary$F$I$I(newSize, sizes[i][0], sizes[i][2]);
if (newSizeBounded != -2147471302) {
resizeWeight[i]=null;
hit=true;
changedWeight += (weight).valueOf();
newSize=newSizeBounded;
sizeDelta=newSize - lengths[i];
}}lengths[i]=newSize;
usedLength += sizeDelta;
}}
totWeight -= changedWeight;
} while (hit);
}}
}
}return C$.roundSizes$FA(lengths);
}, 1);

Clazz.newMeth(C$, 'getIndexSafe$OA$I', function (arr, ix) {
return arr != null  ? arr[ix < arr.length ? ix : arr.length - 1] : null;
}, 1);

Clazz.newMeth(C$, 'getBrokenBoundary$F$I$I', function (sz, lower, upper) {
if (lower != -2147471302) {
if (sz < lower ) return lower;
} else if (sz < 0.0 ) {
return 0;
}if (upper != -2147471302 && sz > upper  ) return upper;
return -2147471302;
}, 1);

Clazz.newMeth(C$, 'sum$IA$I$I', function (terms, start, len) {
var s=0;
for (var i=start, iSz=start + len; i < iSz; i++) s+=terms[i];

return s;
}, 1);

Clazz.newMeth(C$, 'sum$IA', function (terms) {
return C$.sum$IA$I$I(terms, 0, terms.length);
}, 1);

Clazz.newMeth(C$, 'clamp$F$F$F', function (f, min, max) {
return Math.max(min, Math.min(f, max));
}, 1);

Clazz.newMeth(C$, 'clamp$I$I$I', function (i, min, max) {
return Math.max(min, Math.min(i, max));
}, 1);

Clazz.newMeth(C$, 'getSizeSafe$IA$I', function (sizes, sizeType) {
if (sizes == null  || sizes[sizeType] == -2147471302 ) return sizeType == 2 ? 2097051 : 0;
return sizes[sizeType];
}, 1);

Clazz.newMeth(C$, 'derive$net_miginfocom_layout_BoundSize$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue', function (bs, min, pref, max) {
if (bs == null  || bs.isUnset$() ) return Clazz.new_($I$(3,1).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[min, pref, max, null]);
return Clazz.new_([min != null  ? min : bs.getMin$(), pref != null  ? pref : bs.getPreferred$(), max != null  ? max : bs.getMax$(), bs.getGapPush$(), null],$I$(3,1).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z$S);
}, 1);

Clazz.newMeth(C$, 'isLeftToRight$net_miginfocom_layout_LC$net_miginfocom_layout_ContainerWrapper', function (lc, container) {
if (lc != null  && lc.getLeftToRight$() != null  ) return (lc.getLeftToRight$()).valueOf();
return container == null  || container.isLeftToRight$() ;
}, 1);

Clazz.newMeth(C$, 'roundSizes$FA', function (sizes) {
var retInts=Clazz.array(Integer.TYPE, [sizes.length]);
var posD=0;
for (var i=0; i < retInts.length; i++) {
var posI=((posD + 0.5)|0);
posD += sizes[i];
retInts[i]=((posD + 0.5)|0) - posI;
}
return retInts;
}, 1);

Clazz.newMeth(C$, 'equals$O$O', function (o1, o2) {
return o1 === o2  || (o1 != null  && o2 != null   && o1.equals$O(o2) ) ;
}, 1);

Clazz.newMeth(C$, 'getInsets$net_miginfocom_layout_LC$I$Z', function (lc, side, getDefault) {
var i=lc.getInsets$();
return (i != null  && i[side] != null  ) ? i[side] : (getDefault ? $I$(4).getPanelInsets$I(side) : $I$(5).ZERO);
}, 1);

Clazz.newMeth(C$, 'writeAsXML$java_io_ObjectOutput$O', function (out, o) {
}, 1);

Clazz.newMeth(C$, 'readAsXML$java_io_ObjectInput', function ($in) {
return null;
}, 1);

Clazz.newMeth(C$, 'setSerializedObject$O$O', function ($caller, o) {
}, 1);

Clazz.newMeth(C$, 'getSerializedObject$O', function ($caller) {
return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.CR_MAP=null;
C$.DT_MAP=null;
C$.eSz=0;
C$.globalDebugMillis=0;
C$.HAS_BEANS=C$.hasBeans$();
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:25 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
