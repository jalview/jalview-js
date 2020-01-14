(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),I$=[[0,'net.miginfocom.layout.LC','Boolean','net.miginfocom.layout.LayoutUtil','net.miginfocom.layout.UnitValue','net.miginfocom.layout.AC','net.miginfocom.layout.BoundSize','net.miginfocom.layout.DimConstraint','net.miginfocom.layout.ResizeConstraint','java.util.HashMap','net.miginfocom.layout.CC','net.miginfocom.layout.PlatformDefaults','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ConstraintParser");

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parseLayoutConstraint$S', function (s) {
var lc=Clazz.new_($I$(1));
if (s.isEmpty$()) return lc;
var parts=C$.toTrimmedTokens$S$C(s, ",");
for (var i=0; i < parts.length; i++) {
var part=parts[i];
if (part == null ) continue;
var len=part.length$();
if (len == 3 || len == 11 ) {
if (part.equals$O("ltr") || part.equals$O("rtl") || part.equals$O("lefttoright") || part.equals$O("righttoleft")  ) {
lc.setLeftToRight$Boolean(part.charAt$I(0) == "l" ? $I$(2).TRUE : $I$(2).FALSE);
parts[i]=null;
}if (part.equals$O("ttb") || part.equals$O("btt") || part.equals$O("toptobottom") || part.equals$O("bottomtotop")  ) {
lc.setTopToBottom$Z(part.charAt$I(0) == "t");
parts[i]=null;
}}}
for (var part, $part = 0, $$part = parts; $part<$$part.length&&((part=($$part[$part])),1);$part++) {
if (part == null  || part.length$() == 0 ) continue;
try {
var ix=-1;
var c=part.charAt$I(0);
if (c == "w" || c == "h" ) {
ix=C$.startsWithLenient$S$S$I$Z(part, "wrap", -1, true);
if (ix > -1) {
var num=part.substring$I(ix).trim$();
lc.setWrapAfter$I(num.length$() != 0 ? Integer.parseInt$S(num) : 0);
continue;
}var isHor=c == "w";
if (isHor && (part.startsWith$S("w ") || part.startsWith$S("width ") ) ) {
var sz=part.substring$I(part.charAt$I(1) == " " ? 2 : 6).trim$();
lc.setWidth$net_miginfocom_layout_BoundSize(C$.parseBoundSize$S$Z$Z(sz, false, true));
continue;
}if (!isHor && (part.startsWith$S("h ") || part.startsWith$S("height ") ) ) {
var uvStr=part.substring$I(part.charAt$I(1) == " " ? 2 : 7).trim$();
lc.setHeight$net_miginfocom_layout_BoundSize(C$.parseBoundSize$S$Z$Z(uvStr, false, false));
continue;
}if (part.length$() > 5) {
var sz=part.substring$I(5).trim$();
if (part.startsWith$S("wmin ")) {
lc.minWidth$S(sz);
continue;
} else if (part.startsWith$S("wmax ")) {
lc.maxWidth$S(sz);
continue;
} else if (part.startsWith$S("hmin ")) {
lc.minHeight$S(sz);
continue;
} else if (part.startsWith$S("hmax ")) {
lc.maxHeight$S(sz);
continue;
}}if (part.startsWith$S("hidemode ")) {
lc.setHideMode$I(Integer.parseInt$S(part.substring$I(9)));
continue;
}}if (c == "g") {
if (part.startsWith$S("gapx ")) {
lc.setGridGapX$net_miginfocom_layout_BoundSize(C$.parseBoundSize$S$Z$Z(part.substring$I(5).trim$(), true, true));
continue;
}if (part.startsWith$S("gapy ")) {
lc.setGridGapY$net_miginfocom_layout_BoundSize(C$.parseBoundSize$S$Z$Z(part.substring$I(5).trim$(), true, false));
continue;
}if (part.startsWith$S("gap ")) {
var gaps=C$.toTrimmedTokens$S$C(part.substring$I(4).trim$(), " ");
lc.setGridGapX$net_miginfocom_layout_BoundSize(C$.parseBoundSize$S$Z$Z(gaps[0], true, true));
lc.setGridGapY$net_miginfocom_layout_BoundSize(gaps.length > 1 ? C$.parseBoundSize$S$Z$Z(gaps[1], true, false) : lc.getGridGapX$());
continue;
}}if (c == "d") {
ix=C$.startsWithLenient$S$S$I$Z(part, "debug", 5, true);
if (ix > -1) {
var millis=part.substring$I(ix).trim$();
lc.setDebugMillis$I(millis.length$() > 0 ? Integer.parseInt$S(millis) : 1000);
continue;
}}if (c == "n") {
if (part.equals$O("nogrid")) {
lc.setNoGrid$Z(true);
continue;
}if (part.equals$O("nocache")) {
lc.setNoCache$Z(true);
continue;
}if (part.equals$O("novisualpadding")) {
lc.setVisualPadding$Z(false);
continue;
}}if (c == "f") {
if (part.equals$O("fill") || part.equals$O("fillx") || part.equals$O("filly")  ) {
lc.setFillX$Z(part.length$() == 4 || part.charAt$I(4) == "x" );
lc.setFillY$Z(part.length$() == 4 || part.charAt$I(4) == "y" );
continue;
}if (part.equals$O("flowy")) {
lc.setFlowX$Z(false);
continue;
}if (part.equals$O("flowx")) {
lc.setFlowX$Z(true);
continue;
}}if (c == "i") {
ix=C$.startsWithLenient$S$S$I$Z(part, "insets", 3, true);
if (ix > -1) {
var insStr=part.substring$I(ix).trim$();
var ins=C$.parseInsets$S$Z(insStr, true);
$I$(3).putCCString$O$S(ins, insStr);
lc.setInsets$net_miginfocom_layout_UnitValueA(ins);
continue;
}}if (c == "a") {
ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["aligny", "ay"]), Clazz.array(Integer.TYPE, -1, [6, 2]), true);
if (ix > -1) {
var align=C$.parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(part.substring$I(ix).trim$(), false, null);
if (align === $I$(4).BASELINE_IDENTITY ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["\'baseline\' can not be used to align the whole component group."]);
lc.setAlignY$net_miginfocom_layout_UnitValue(align);
continue;
}ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["alignx", "ax"]), Clazz.array(Integer.TYPE, -1, [6, 2]), true);
if (ix > -1) {
lc.setAlignX$net_miginfocom_layout_UnitValue(C$.parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(part.substring$I(ix).trim$(), true, null));
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "align", 2, true);
if (ix > -1) {
var gaps=C$.toTrimmedTokens$S$C(part.substring$I(ix).trim$(), " ");
lc.setAlignX$net_miginfocom_layout_UnitValue(C$.parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(gaps[0], true, null));
if (gaps.length > 1) {
var align=C$.parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(gaps[1], false, null);
if (align === $I$(4).BASELINE_IDENTITY ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["\'baseline\' can not be used to align the whole component group."]);
lc.setAlignY$net_miginfocom_layout_UnitValue(align);
}continue;
}}if (c == "p") {
if (part.startsWith$S("packalign ")) {
var packs=C$.toTrimmedTokens$S$C(part.substring$I(10).trim$(), " ");
lc.setPackWidthAlign$F(packs[0].length$() > 0 ? Float.parseFloat$S(packs[0]) : 0.5);
if (packs.length > 1) lc.setPackHeightAlign$F(Float.parseFloat$S(packs[1]));
continue;
}if (part.startsWith$S("pack ") || part.equals$O("pack") ) {
var ps=part.substring$I(4).trim$();
var packs=C$.toTrimmedTokens$S$C(ps.length$() > 0 ? ps : "pref pref", " ");
lc.setPackWidth$net_miginfocom_layout_BoundSize(C$.parseBoundSize$S$Z$Z(packs[0], false, true));
if (packs.length > 1) lc.setPackHeight$net_miginfocom_layout_BoundSize(C$.parseBoundSize$S$Z$Z(packs[1], false, false));
continue;
}}if (lc.getAlignX$() == null ) {
var alignX=C$.parseAlignKeywords$S$Z(part, true);
if (alignX != null ) {
lc.setAlignX$net_miginfocom_layout_UnitValue(alignX);
continue;
}}var alignY=C$.parseAlignKeywords$S$Z(part, false);
if (alignY != null ) {
lc.setAlignY$net_miginfocom_layout_UnitValue(alignY);
continue;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown Constraint: '" + part + "'\n" ]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal Constraint: '" + part + "'\n" + ex.getMessage$() ]);
} else {
throw ex;
}
}
}
return lc;
}, 1);

Clazz.newMeth(C$, 'parseRowConstraints$S', function (s) {
return C$.parseAxisConstraint$S$Z(s, false);
}, 1);

Clazz.newMeth(C$, 'parseColumnConstraints$S', function (s) {
return C$.parseAxisConstraint$S$Z(s, true);
}, 1);

Clazz.newMeth(C$, 'parseAxisConstraint$S$Z', function (s, isCols) {
s=s.trim$();
if (s.length$() == 0) return Clazz.new_($I$(5));
s=s.toLowerCase$();
var parts=C$.getRowColAndGapsTrimmed$S(s);
var gaps=Clazz.array($I$(6), [(parts.size$() >> 1) + 1]);
for (var i=0, iSz=parts.size$(), gIx=0; i < iSz; i+=2, gIx++) gaps[gIx]=C$.parseBoundSize$S$Z$Z(parts.get$I(i), true, isCols);

var colSpecs=Clazz.array($I$(7), [parts.size$() >> 1]);
for (var i=0, gIx=0; i < colSpecs.length; i++, gIx++) {
if (gIx >= gaps.length - 1) gIx=gaps.length - 2;
colSpecs[i]=C$.parseDimConstraint$S$net_miginfocom_layout_BoundSize$net_miginfocom_layout_BoundSize$Z(parts.get$I((i << 1) + 1), gaps[gIx], gaps[gIx + 1], isCols);
}
var ac=Clazz.new_($I$(5));
ac.setConstaints$net_miginfocom_layout_DimConstraintA(colSpecs);
return ac;
}, 1);

Clazz.newMeth(C$, 'parseDimConstraint$S$net_miginfocom_layout_BoundSize$net_miginfocom_layout_BoundSize$Z', function (s, gapBefore, gapAfter, isCols) {
var dimConstraint=Clazz.new_($I$(7));
dimConstraint.setGapBefore$net_miginfocom_layout_BoundSize(gapBefore);
dimConstraint.setGapAfter$net_miginfocom_layout_BoundSize(gapAfter);
var parts=C$.toTrimmedTokens$S$C(s, ",");
for (var i=0; i < parts.length; i++) {
var part=parts[i];
try {
if (part.length$() == 0) continue;
if (part.equals$O("fill")) {
dimConstraint.setFill$Z(true);
continue;
}if (part.equals$O("nogrid")) {
dimConstraint.setNoGrid$Z(true);
continue;
}var ix=-1;
var c=part.charAt$I(0);
if (c == "s") {
ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["sizegroup", "sg"]), Clazz.array(Integer.TYPE, -1, [5, 2]), true);
if (ix > -1) {
dimConstraint.setSizeGroup$S(part.substring$I(ix).trim$());
continue;
}ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["shrinkprio", "shp"]), Clazz.array(Integer.TYPE, -1, [10, 3]), true);
if (ix > -1) {
dimConstraint.setShrinkPriority$I(Integer.parseInt$S(part.substring$I(ix).trim$()));
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "shrink", 6, true);
if (ix > -1) {
dimConstraint.setShrink$Float(C$.parseFloat$S$Float(part.substring$I(ix).trim$(), $I$(8).WEIGHT_100));
continue;
}}if (c == "g") {
ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["growpriority", "gp"]), Clazz.array(Integer.TYPE, -1, [5, 2]), true);
if (ix > -1) {
dimConstraint.setGrowPriority$I(Integer.parseInt$S(part.substring$I(ix).trim$()));
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "grow", 4, true);
if (ix > -1) {
dimConstraint.setGrow$Float(C$.parseFloat$S$Float(part.substring$I(ix).trim$(), $I$(8).WEIGHT_100));
continue;
}}if (c == "a") {
ix=C$.startsWithLenient$S$S$I$Z(part, "align", 2, true);
if (ix > -1) {
dimConstraint.setAlign$net_miginfocom_layout_UnitValue(C$.parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(part.substring$I(ix).trim$(), isCols, null));
continue;
}}var align=C$.parseAlignKeywords$S$Z(part, isCols);
if (align != null ) {
dimConstraint.setAlign$net_miginfocom_layout_UnitValue(align);
continue;
}dimConstraint.setSize$net_miginfocom_layout_BoundSize(C$.parseBoundSize$S$Z$Z(part, false, isCols));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal constraint: '" + part + "'\n" + ex.getMessage$() ]);
} else {
throw ex;
}
}
}
return dimConstraint;
}, 1);

Clazz.newMeth(C$, 'parseComponentConstraints$java_util_Map', function (constrMap) {
var flowConstrMap=Clazz.new_($I$(9));
for (var it=constrMap.entrySet$().iterator$(); it.hasNext$(); ) {
var entry=it.next$();
flowConstrMap.put$TK$TV(entry.getKey$(), C$.parseComponentConstraint$S(entry.getValue$()));
}
return flowConstrMap;
}, 1);

Clazz.newMeth(C$, 'parseComponentConstraint$S', function (s) {
var cc=Clazz.new_($I$(10));
if (s == null  || s.isEmpty$() ) return cc;
var parts=C$.toTrimmedTokens$S$C(s, ",");
for (var part, $part = 0, $$part = parts; $part<$$part.length&&((part=($$part[$part])),1);$part++) {
try {
if (part.length$() == 0) continue;
var ix=-1;
var c=part.charAt$I(0);
if (c == "n") {
if (part.equals$O("north")) {
cc.setDockSide$I(0);
continue;
}if (part.equals$O("newline")) {
cc.setNewline$Z(true);
continue;
}if (part.startsWith$S("newline ")) {
var gapSz=part.substring$I(7).trim$();
cc.setNewlineGapSize$net_miginfocom_layout_BoundSize(C$.parseBoundSize$S$Z$Z(gapSz, true, true));
continue;
}}if (c == "f" && (part.equals$O("flowy") || part.equals$O("flowx") ) ) {
cc.setFlowX$Boolean(part.charAt$I(4) == "x" ? $I$(2).TRUE : $I$(2).FALSE);
continue;
}if (c == "s") {
ix=C$.startsWithLenient$S$S$I$Z(part, "skip", 4, true);
if (ix > -1) {
var num=part.substring$I(ix).trim$();
cc.setSkip$I(num.length$() != 0 ? Integer.parseInt$S(num) : 1);
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "split", 5, true);
if (ix > -1) {
var split=part.substring$I(ix).trim$();
cc.setSplit$I(split.length$() > 0 ? Integer.parseInt$S(split) : 2097051);
continue;
}if (part.equals$O("south")) {
cc.setDockSide$I(2);
continue;
}ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["spany", "sy"]), Clazz.array(Integer.TYPE, -1, [5, 2]), true);
if (ix > -1) {
cc.setSpanY$I(C$.parseSpan$S(part.substring$I(ix).trim$()));
continue;
}ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["spanx", "sx"]), Clazz.array(Integer.TYPE, -1, [5, 2]), true);
if (ix > -1) {
cc.setSpanX$I(C$.parseSpan$S(part.substring$I(ix).trim$()));
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "span", 4, true);
if (ix > -1) {
var spans=C$.toTrimmedTokens$S$C(part.substring$I(ix).trim$(), " ");
cc.setSpanX$I(spans[0].length$() > 0 ? Integer.parseInt$S(spans[0]) : 2097051);
cc.setSpanY$I(spans.length > 1 ? Integer.parseInt$S(spans[1]) : 1);
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "shrinkx", 7, true);
if (ix > -1) {
cc.getHorizontal$().setShrink$Float(C$.parseFloat$S$Float(part.substring$I(ix).trim$(), $I$(8).WEIGHT_100));
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "shrinky", 7, true);
if (ix > -1) {
cc.getVertical$().setShrink$Float(C$.parseFloat$S$Float(part.substring$I(ix).trim$(), $I$(8).WEIGHT_100));
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "shrink", 6, false);
if (ix > -1) {
var shrinks=C$.toTrimmedTokens$S$C(part.substring$I(ix).trim$(), " ");
cc.getHorizontal$().setShrink$Float(C$.parseFloat$S$Float(shrinks[0], $I$(8).WEIGHT_100));
if (shrinks.length > 1) cc.getVertical$().setShrink$Float(C$.parseFloat$S$Float(shrinks[1], $I$(8).WEIGHT_100));
continue;
}ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["shrinkprio", "shp"]), Clazz.array(Integer.TYPE, -1, [10, 3]), true);
if (ix > -1) {
var sp=part.substring$I(ix).trim$();
if (sp.startsWith$S("x") || sp.startsWith$S("y") ) {
(sp.startsWith$S("x") ? cc.getHorizontal$() : cc.getVertical$()).setShrinkPriority$I(Integer.parseInt$S(sp.substring$I(2)));
} else {
var shrinks=C$.toTrimmedTokens$S$C(sp, " ");
cc.getHorizontal$().setShrinkPriority$I(Integer.parseInt$S(shrinks[0]));
if (shrinks.length > 1) cc.getVertical$().setShrinkPriority$I(Integer.parseInt$S(shrinks[1]));
}continue;
}ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["sizegroupx", "sizegroupy", "sgx", "sgy"]), Clazz.array(Integer.TYPE, -1, [9, 9, 2, 2]), true);
if (ix > -1) {
var sg=part.substring$I(ix).trim$();
var lc=part.charAt$I(ix - 1);
if (lc != "y") cc.getHorizontal$().setSizeGroup$S(sg);
if (lc != "x") cc.getVertical$().setSizeGroup$S(sg);
continue;
}}if (c == "g") {
ix=C$.startsWithLenient$S$S$I$Z(part, "growx", 5, true);
if (ix > -1) {
cc.getHorizontal$().setGrow$Float(C$.parseFloat$S$Float(part.substring$I(ix).trim$(), $I$(8).WEIGHT_100));
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "growy", 5, true);
if (ix > -1) {
cc.getVertical$().setGrow$Float(C$.parseFloat$S$Float(part.substring$I(ix).trim$(), $I$(8).WEIGHT_100));
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "grow", 4, false);
if (ix > -1) {
var grows=C$.toTrimmedTokens$S$C(part.substring$I(ix).trim$(), " ");
cc.getHorizontal$().setGrow$Float(C$.parseFloat$S$Float(grows[0], $I$(8).WEIGHT_100));
cc.getVertical$().setGrow$Float(C$.parseFloat$S$Float(grows.length > 1 ? grows[1] : "", $I$(8).WEIGHT_100));
continue;
}ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["growprio", "gp"]), Clazz.array(Integer.TYPE, -1, [8, 2]), true);
if (ix > -1) {
var gp=part.substring$I(ix).trim$();
var c0=gp.length$() > 0 ? gp.charAt$I(0) : " ";
if (c0 == "x" || c0 == "y" ) {
(c0 == "x" ? cc.getHorizontal$() : cc.getVertical$()).setGrowPriority$I(Integer.parseInt$S(gp.substring$I(2)));
} else {
var grows=C$.toTrimmedTokens$S$C(gp, " ");
cc.getHorizontal$().setGrowPriority$I(Integer.parseInt$S(grows[0]));
if (grows.length > 1) cc.getVertical$().setGrowPriority$I(Integer.parseInt$S(grows[1]));
}continue;
}if (part.startsWith$S("gap")) {
var gaps=C$.parseGaps$S(part);
if (gaps[0] != null ) cc.getVertical$().setGapBefore$net_miginfocom_layout_BoundSize(gaps[0]);
if (gaps[1] != null ) cc.getHorizontal$().setGapBefore$net_miginfocom_layout_BoundSize(gaps[1]);
if (gaps[2] != null ) cc.getVertical$().setGapAfter$net_miginfocom_layout_BoundSize(gaps[2]);
if (gaps[3] != null ) cc.getHorizontal$().setGapAfter$net_miginfocom_layout_BoundSize(gaps[3]);
continue;
}}if (c == "a") {
ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["aligny", "ay"]), Clazz.array(Integer.TYPE, -1, [6, 2]), true);
if (ix > -1) {
cc.getVertical$().setAlign$net_miginfocom_layout_UnitValue(C$.parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(part.substring$I(ix).trim$(), false, null));
continue;
}ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["alignx", "ax"]), Clazz.array(Integer.TYPE, -1, [6, 2]), true);
if (ix > -1) {
cc.getHorizontal$().setAlign$net_miginfocom_layout_UnitValue(C$.parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(part.substring$I(ix).trim$(), true, null));
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "align", 2, true);
if (ix > -1) {
var gaps=C$.toTrimmedTokens$S$C(part.substring$I(ix).trim$(), " ");
cc.getHorizontal$().setAlign$net_miginfocom_layout_UnitValue(C$.parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(gaps[0], true, null));
if (gaps.length > 1) cc.getVertical$().setAlign$net_miginfocom_layout_UnitValue(C$.parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(gaps[1], false, null));
continue;
}}if ((c == "x" || c == "y" ) && part.length$() > 2 ) {
var c2=part.charAt$I(1);
if (c2 == " " || (c2 == "2" && part.charAt$I(2) == " " ) ) {
if (cc.getPos$() == null ) {
cc.setPos$net_miginfocom_layout_UnitValueA(Clazz.array($I$(4), [4]));
} else if (cc.isBoundsInGrid$() == false ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot combine \'position\' with \'x/y/x2/y2\' keywords."]);
}var edge=(c == "x" ? 0 : 1) + (c2 == "2" ? 2 : 0);
var pos=cc.getPos$();
pos[edge]=C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(part.substring$I(2).trim$(), null, c == "x");
cc.setPos$net_miginfocom_layout_UnitValueA(pos);
cc.setBoundsInGrid$Z(true);
continue;
}}if (c == "c") {
ix=C$.startsWithLenient$S$S$I$Z(part, "cell", 4, true);
if (ix > -1) {
var grs=C$.toTrimmedTokens$S$C(part.substring$I(ix).trim$(), " ");
if (grs.length < 2) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["At least two integers must follow " + part]);
cc.setCellX$I(Integer.parseInt$S(grs[0]));
cc.setCellY$I(Integer.parseInt$S(grs[1]));
if (grs.length > 2) cc.setSpanX$I(Integer.parseInt$S(grs[2]));
if (grs.length > 3) cc.setSpanY$I(Integer.parseInt$S(grs[3]));
continue;
}}if (c == "p") {
ix=C$.startsWithLenient$S$S$I$Z(part, "pos", 3, true);
if (ix > -1) {
if (cc.getPos$() != null  && cc.isBoundsInGrid$() ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can not combine \'pos\' with \'x/y/x2/y2\' keywords."]);
var pos=C$.toTrimmedTokens$S$C(part.substring$I(ix).trim$(), " ");
var bounds=Clazz.array($I$(4), [4]);
for (var j=0; j < pos.length; j++) bounds[j]=C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(pos[j], null, j % 2 == 0);

if (bounds[0] == null  && bounds[2] == null   || bounds[1] == null  && bounds[3] == null   ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Both x and x2 or y and y2 can not be null!"]);
cc.setPos$net_miginfocom_layout_UnitValueA(bounds);
cc.setBoundsInGrid$Z(false);
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "pad", 3, true);
if (ix > -1) {
var p=C$.parseInsets$S$Z(part.substring$I(ix).trim$(), false);
cc.setPadding$net_miginfocom_layout_UnitValueA(Clazz.array($I$(4), -1, [p[0], p.length > 1 ? p[1] : null, p.length > 2 ? p[2] : null, p.length > 3 ? p[3] : null]));
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "pushx", 5, true);
if (ix > -1) {
cc.setPushX$Float(C$.parseFloat$S$Float(part.substring$I(ix).trim$(), $I$(8).WEIGHT_100));
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "pushy", 5, true);
if (ix > -1) {
cc.setPushY$Float(C$.parseFloat$S$Float(part.substring$I(ix).trim$(), $I$(8).WEIGHT_100));
continue;
}ix=C$.startsWithLenient$S$S$I$Z(part, "push", 4, false);
if (ix > -1) {
var pushs=C$.toTrimmedTokens$S$C(part.substring$I(ix).trim$(), " ");
cc.setPushX$Float(C$.parseFloat$S$Float(pushs[0], $I$(8).WEIGHT_100));
cc.setPushY$Float(C$.parseFloat$S$Float(pushs.length > 1 ? pushs[1] : "", $I$(8).WEIGHT_100));
continue;
}}if (c == "t") {
ix=C$.startsWithLenient$S$S$I$Z(part, "tag", 3, true);
if (ix > -1) {
cc.setTag$S(part.substring$I(ix).trim$());
continue;
}}if (c == "w" || c == "h" ) {
if (part.equals$O("wrap")) {
cc.setWrap$Z(true);
continue;
}if (part.startsWith$S("wrap ")) {
var gapSz=part.substring$I(5).trim$();
cc.setWrapGapSize$net_miginfocom_layout_BoundSize(C$.parseBoundSize$S$Z$Z(gapSz, true, true));
continue;
}var isHor=c == "w";
if (isHor && (part.startsWith$S("w ") || part.startsWith$S("width ") ) ) {
var uvStr=part.substring$I(part.charAt$I(1) == " " ? 2 : 6).trim$();
cc.getHorizontal$().setSize$net_miginfocom_layout_BoundSize(C$.parseBoundSize$S$Z$Z(uvStr, false, true));
continue;
}if (!isHor && (part.startsWith$S("h ") || part.startsWith$S("height ") ) ) {
var uvStr=part.substring$I(part.charAt$I(1) == " " ? 2 : 7).trim$();
cc.getVertical$().setSize$net_miginfocom_layout_BoundSize(C$.parseBoundSize$S$Z$Z(uvStr, false, false));
continue;
}if (part.startsWith$S("wmin ") || part.startsWith$S("wmax ") || part.startsWith$S("hmin ") || part.startsWith$S("hmax ")  ) {
var uvStr=part.substring$I(5).trim$();
if (uvStr.length$() > 0) {
var uv=C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(uvStr, null, isHor);
var isMin=part.charAt$I(3) == "n";
var dc=isHor ? cc.getHorizontal$() : cc.getVertical$();
dc.setSize$net_miginfocom_layout_BoundSize(Clazz.new_($I$(6).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[isMin ? uv : dc.getSize$().getMin$(), dc.getSize$().getPreferred$(), isMin ? (dc.getSize$().getMax$()) : uv, uvStr]));
continue;
}}if (part.equals$O("west")) {
cc.setDockSide$I(1);
continue;
}if (part.startsWith$S("hidemode ")) {
cc.setHideMode$I(Integer.parseInt$S(part.substring$I(9)));
continue;
}}if (c == "i" && part.startsWith$S("id ") ) {
cc.setId$S(part.substring$I(3).trim$());
var dIx=cc.getId$().indexOf$I(".");
if (dIx == 0 || dIx == cc.getId$().length$() - 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Dot must not be first or last!"]);
continue;
}if (c == "e") {
if (part.equals$O("east")) {
cc.setDockSide$I(3);
continue;
}if (part.equals$O("external")) {
cc.setExternal$Z(true);
continue;
}ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["endgroupx", "endgroupy", "egx", "egy"]), Clazz.array(Integer.TYPE, -1, [-1, -1, -1, -1]), true);
if (ix > -1) {
var sg=part.substring$I(ix).trim$();
var lc=part.charAt$I(ix - 1);
var dc=(lc == "x" ? cc.getHorizontal$() : cc.getVertical$());
dc.setEndGroup$S(sg);
continue;
}}if (c == "d") {
if (part.equals$O("dock north")) {
cc.setDockSide$I(0);
continue;
}if (part.equals$O("dock west")) {
cc.setDockSide$I(1);
continue;
}if (part.equals$O("dock south")) {
cc.setDockSide$I(2);
continue;
}if (part.equals$O("dock east")) {
cc.setDockSide$I(3);
continue;
}if (part.equals$O("dock center")) {
cc.getHorizontal$().setGrow$Float(new Float(100));
cc.getVertical$().setGrow$Float(new Float(100));
cc.setPushX$Float(new Float(100));
cc.setPushY$Float(new Float(100));
continue;
}}if (c == "v") {
ix=C$.startsWithLenient$S$SA$IA$Z(part, Clazz.array(String, -1, ["visualpadding", "vp"]), Clazz.array(Integer.TYPE, -1, [3, 2]), true);
if (ix > -1) {
var p=C$.parseInsets$S$Z(part.substring$I(ix).trim$(), false);
cc.setVisualPadding$net_miginfocom_layout_UnitValueA(Clazz.array($I$(4), -1, [p[0], p.length > 1 ? p[1] : null, p.length > 2 ? p[2] : null, p.length > 3 ? p[3] : null]));
continue;
}}var horAlign=C$.parseAlignKeywords$S$Z(part, true);
if (horAlign != null ) {
cc.getHorizontal$().setAlign$net_miginfocom_layout_UnitValue(horAlign);
continue;
}var verAlign=C$.parseAlignKeywords$S$Z(part, false);
if (verAlign != null ) {
cc.getVertical$().setAlign$net_miginfocom_layout_UnitValue(verAlign);
continue;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown keyword."]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S$Throwable,["Error parsing Constraint: '" + part + "'" , ex]);
} else {
throw ex;
}
}
}
return cc;
}, 1);

Clazz.newMeth(C$, 'parseInsets$S$Z', function (s, acceptPanel) {
if (s.length$() == 0 || s.equals$O("dialog")  || s.equals$O("panel") ) {
if (acceptPanel == false ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Insets now allowed: " + s + "\n" ]);
var isPanel=s.startsWith$S("p");
var ins=Clazz.array($I$(4), [4]);
for (var j=0; j < 4; j++) ins[j]=isPanel ? $I$(11).getPanelInsets$I(j) : $I$(11).getDialogInsets$I(j);

return ins;
} else {
var insS=C$.toTrimmedTokens$S$C(s, " ");
var ins=Clazz.array($I$(4), [4]);
for (var j=0; j < 4; j++) {
var insSz=C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(insS[j < insS.length ? j : insS.length - 1], $I$(4).ZERO, j % 2 == 1);
ins[j]=insSz != null  ? insSz : $I$(11).getPanelInsets$I(j);
}
return ins;
}}, 1);

Clazz.newMeth(C$, 'parseGaps$S', function (s) {
var ret=Clazz.array($I$(6), [4]);
var ix=C$.startsWithLenient$S$S$I$Z(s, "gaptop", -1, true);
if (ix > -1) {
s=s.substring$I(ix).trim$();
ret[0]=C$.parseBoundSize$S$Z$Z(s, true, false);
return ret;
}ix=C$.startsWithLenient$S$S$I$Z(s, "gapleft", -1, true);
if (ix > -1) {
s=s.substring$I(ix).trim$();
ret[1]=C$.parseBoundSize$S$Z$Z(s, true, true);
return ret;
}ix=C$.startsWithLenient$S$S$I$Z(s, "gapbottom", -1, true);
if (ix > -1) {
s=s.substring$I(ix).trim$();
ret[2]=C$.parseBoundSize$S$Z$Z(s, true, false);
return ret;
}ix=C$.startsWithLenient$S$S$I$Z(s, "gapright", -1, true);
if (ix > -1) {
s=s.substring$I(ix).trim$();
ret[3]=C$.parseBoundSize$S$Z$Z(s, true, true);
return ret;
}ix=C$.startsWithLenient$S$S$I$Z(s, "gapbefore", -1, true);
if (ix > -1) {
s=s.substring$I(ix).trim$();
ret[1]=C$.parseBoundSize$S$Z$Z(s, true, true);
return ret;
}ix=C$.startsWithLenient$S$S$I$Z(s, "gapafter", -1, true);
if (ix > -1) {
s=s.substring$I(ix).trim$();
ret[3]=C$.parseBoundSize$S$Z$Z(s, true, true);
return ret;
}ix=C$.startsWithLenient$S$SA$IA$Z(s, Clazz.array(String, -1, ["gapx", "gapy"]), null, true);
if (ix > -1) {
var x=s.charAt$I(3) == "x";
var gaps=C$.toTrimmedTokens$S$C(s.substring$I(ix).trim$(), " ");
ret[x ? 1 : 0]=C$.parseBoundSize$S$Z$Z(gaps[0], true, x);
if (gaps.length > 1) ret[x ? 3 : 2]=C$.parseBoundSize$S$Z$Z(gaps[1], true, !x);
return ret;
}ix=C$.startsWithLenient$S$S$I$Z(s, "gap ", 1, true);
if (ix > -1) {
var gaps=C$.toTrimmedTokens$S$C(s.substring$I(ix).trim$(), " ");
ret[1]=C$.parseBoundSize$S$Z$Z(gaps[0], true, true);
if (gaps.length > 1) {
ret[3]=C$.parseBoundSize$S$Z$Z(gaps[1], true, false);
if (gaps.length > 2) {
ret[0]=C$.parseBoundSize$S$Z$Z(gaps[2], true, true);
if (gaps.length > 3) ret[2]=C$.parseBoundSize$S$Z$Z(gaps[3], true, false);
}}return ret;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown Gap part: '" + s + "'" ]);
}, 1);

Clazz.newMeth(C$, 'parseSpan$S', function (s) {
return s.length$() > 0 ? Integer.parseInt$S(s) : 2097051;
}, 1);

Clazz.newMeth(C$, 'parseFloat$S$Float', function (s, nullVal) {
return s.length$() > 0 ?  new Float(Float.parseFloat$S(s)) : nullVal;
}, 1);

Clazz.newMeth(C$, 'parseBoundSize$S$Z$Z', function (s, isGap, isHor) {
if (s.length$() == 0 || s.equals$O("null")  || s.equals$O("n") ) return null;
var cs=s;
var push=false;
if (s.endsWith$S("push")) {
push=true;
var l=s.length$();
s=s.substring$I$I(0, l - (s.endsWith$S(":push") ? 5 : 4));
if (s.length$() == 0) return Clazz.new_($I$(6).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z$S,[null, null, null, true, cs]);
}var sizes=C$.toTrimmedTokens$S$C(s, ":");
var s0=sizes[0];
if (sizes.length == 1) {
var hasEM=s0.endsWith$S("!");
if (hasEM) s0=s0.substring$I$I(0, s0.length$() - 1);
var uv=C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(s0, null, isHor);
return Clazz.new_($I$(6).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z$S,[((isGap || hasEM ) ? uv : null), uv, (hasEM ? uv : null), push, cs]);
} else if (sizes.length == 2) {
return Clazz.new_($I$(6).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z$S,[C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(s0, null, isHor), C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(sizes[1], null, isHor), null, push, cs]);
} else if (sizes.length == 3) {
return Clazz.new_($I$(6).c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z$S,[C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(s0, null, isHor), C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(sizes[1], null, isHor), C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(sizes[2], null, isHor), push, cs]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Min:Preferred:Max size section must contain 0, 1 or 2 colons. '" + cs + "'" ]);
}}, 1);

Clazz.newMeth(C$, 'parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue', function (s, isHor, emptyReplacement) {
if (s.length$() == 0) return emptyReplacement;
var align=C$.parseAlignKeywords$S$Z(s, isHor);
if (align != null ) return align;
return C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(s, emptyReplacement, isHor);
}, 1);

Clazz.newMeth(C$, 'parseUnitValue$S$Z', function (s, isHor) {
return C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(s, null, isHor);
}, 1);

Clazz.newMeth(C$, 'parseUnitValue$S$net_miginfocom_layout_UnitValue$Z', function (s, emptyReplacement, isHor) {
if (s == null  || s.length$() == 0 ) return emptyReplacement;
var cs=s;
var c0=s.charAt$I(0);
if (c0 == "(" && s.charAt$I(s.length$() - 1) == ")" ) s=s.substring$I$I(1, s.length$() - 1);
if (c0 == "n" && (s.equals$O("null") || s.equals$O("n") ) ) return null;
if (c0 == "i" && s.equals$O("inf") ) return $I$(4).INF;
var oper=C$.getOper$S(s);
var inline=oper == 101 || oper == 102  || oper == 103  || oper == 104 ;
if (oper != 100) {
var uvs;
if (inline == false ) {
var sub=s.substring$I$I(4, s.length$() - 1).trim$();
uvs=C$.toTrimmedTokens$S$C(sub, ",");
if (uvs.length == 1) return C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(sub, null, isHor);
} else {
var delim;
if (oper == 101) {
delim="+";
} else if (oper == 102) {
delim="-";
} else if (oper == 103) {
delim="*";
} else {
delim="/";
}uvs=C$.toTrimmedTokens$S$C(s, delim);
if (uvs.length > 2) {
var last=uvs[uvs.length - 1];
var first=s.substring$I$I(0, s.length$() - last.length$() - 1 );
uvs=Clazz.array(String, -1, [first, last]);
}}if (uvs.length != 2) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Malformed UnitValue: '" + s + "'" ]);
var sub1=C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(uvs[0], null, isHor);
var sub2=C$.parseUnitValue$S$net_miginfocom_layout_UnitValue$Z(uvs[1], null, isHor);
if (sub1 == null  || sub2 == null  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Malformed UnitValue. Must be two sub-values: '" + s + "'" ]);
return Clazz.new_($I$(4).c$$Z$I$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S,[isHor, oper, sub1, sub2, cs]);
} else {
try {
var numParts=C$.getNumTextParts$S(s);
var value=numParts[0].length$() > 0 ? Float.parseFloat$S(numParts[0]) : 1;
return Clazz.new_($I$(4).c$$F$S$Z$I$S,[value, numParts[1], isHor, oper, cs]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S$Throwable,["Malformed UnitValue: '" + s + "'" , e]);
} else {
throw e;
}
}
}}, 1);

Clazz.newMeth(C$, 'parseAlignKeywords$S$Z', function (s, isHor) {
if (C$.startsWithLenient$S$S$I$Z(s, "center", 1, false) != -1) return $I$(4).CENTER;
if (isHor) {
if (C$.startsWithLenient$S$S$I$Z(s, "left", 1, false) != -1) return $I$(4).LEFT;
if (C$.startsWithLenient$S$S$I$Z(s, "right", 1, false) != -1) return $I$(4).RIGHT;
if (C$.startsWithLenient$S$S$I$Z(s, "leading", 4, false) != -1) return $I$(4).LEADING;
if (C$.startsWithLenient$S$S$I$Z(s, "trailing", 5, false) != -1) return $I$(4).TRAILING;
if (C$.startsWithLenient$S$S$I$Z(s, "label", 5, false) != -1) return $I$(4).LABEL;
} else {
if (C$.startsWithLenient$S$S$I$Z(s, "baseline", 4, false) != -1) return $I$(4).BASELINE_IDENTITY;
if (C$.startsWithLenient$S$S$I$Z(s, "top", 1, false) != -1) return $I$(4).TOP;
if (C$.startsWithLenient$S$S$I$Z(s, "bottom", 1, false) != -1) return $I$(4).BOTTOM;
}return null;
}, 1);

Clazz.newMeth(C$, 'getNumTextParts$S', function (s) {
for (var i=0, iSz=s.length$(); i < iSz; i++) {
var c=s.charAt$I(i);
if (c == " ") throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Space in UnitValue: '" + s + "'" ]);
if ((c < "0" || c > "9" ) && c != "."  && c != "-" ) return Clazz.array(String, -1, [s.substring$I$I(0, i).trim$(), s.substring$I(i).trim$()]);
}
return Clazz.array(String, -1, [s, ""]);
}, 1);

Clazz.newMeth(C$, 'getOper$S', function (s) {
var len=s.length$();
if (len < 3) return 100;
if (len > 5 && s.charAt$I(3) == "("  && s.charAt$I(len - 1) == ")" ) {
if (s.startsWith$S("min(")) return 105;
if (s.startsWith$S("max(")) return 106;
if (s.startsWith$S("mid(")) return 107;
}for (var j=0; j < 2; j++) {
for (var i=len - 1, p=0; i > 0; i--) {
var c=s.charAt$I(i);
if (c == ")") {
p++;
} else if (c == "(") {
p--;
} else if (p == 0) {
if (j == 0) {
if (c == "+") return 101;
if (c == "-") return 102;
} else {
if (c == "*") return 103;
if (c == "/") return 104;
}}}
}
return 100;
}, 1);

Clazz.newMeth(C$, 'startsWithLenient$S$SA$IA$Z', function (s, matches, minChars, acceptTrailing) {
for (var i=0; i < matches.length; i++) {
var minChar=minChars != null  ? minChars[i] : -1;
var ix=C$.startsWithLenient$S$S$I$Z(s, matches[i], minChar, acceptTrailing);
if (ix > -1) return ix;
}
return -1;
}, 1);

Clazz.newMeth(C$, 'startsWithLenient$S$S$I$Z', function (s, match, minChars, acceptTrailing) {
if (s.charAt$I(0) != match.charAt$I(0)) return -1;
if (minChars == -1) minChars=match.length$();
var sSz=s.length$();
if (sSz < minChars) return -1;
var mSz=match.length$();
var sIx=0;
for (var mIx=0; mIx < mSz; sIx++, mIx++) {
while (sIx < sSz && (s.charAt$I(sIx) == " " || s.charAt$I(sIx) == "_" ) )sIx++;

if (sIx >= sSz || s.charAt$I(sIx) != match.charAt$I(mIx) ) return mIx >= minChars && (acceptTrailing || sIx >= sSz )  && (sIx >= sSz || s.charAt$I(sIx - 1) == " " )  ? sIx : -1;
}
return sIx >= sSz || acceptTrailing  || s.charAt$I(sIx) == " "  ? sIx : -1;
}, 1);

Clazz.newMeth(C$, 'toTrimmedTokens$S$C', function (s, sep) {
var toks=0;
var sSize=s.length$();
var disregardDoubles=sep == " ";
var p=0;
for (var i=0; i < sSize; i++) {
var c=s.charAt$I(i);
if (c == "(") {
p++;
} else if (c == ")") {
p--;
} else if (p == 0 && c == sep ) {
toks++;
while (disregardDoubles && i < sSize - 1  && s.charAt$I(i + 1) == " " )i++;

}if (p < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unbalanced parentheses: '" + s + "'" ]);
}
if (p != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unbalanced parentheses: '" + s + "'" ]);
if (toks == 0) return Clazz.array(String, -1, [s.trim$()]);
var retArr=Clazz.array(String, [toks + 1]);
var st=0;
var pNr=0;
p=0;
for (var i=0; i < sSize; i++) {
var c=s.charAt$I(i);
if (c == "(") {
p++;
} else if (c == ")") {
p--;
} else if (p == 0 && c == sep ) {
retArr[pNr++]=s.substring$I$I(st, i).trim$();
st=i + 1;
while (disregardDoubles && i < sSize - 1  && s.charAt$I(i + 1) == " " )i++;

}}
retArr[pNr++]=s.substring$I$I(st, sSize).trim$();
return retArr;
}, 1);

Clazz.newMeth(C$, 'getRowColAndGapsTrimmed$S', function (s) {
if (s.indexOf$I("|") != -1) s=s.replaceAll$S$S("\\|", "][");
var retList=Clazz.new_($I$(12).c$$I,[Math.max(s.length$() >> 3, 3)]);
var s0=0;
var s1=0;
var st=0;
for (var i=0, iSz=s.length$(); i < iSz; i++) {
var c=s.charAt$I(i);
if (c == "[") {
s0++;
} else if (c == "]") {
s1++;
} else {
continue;
}if (s0 != s1 && (s0 - 1) != s1 ) break;
retList.add$TE(s.substring$I$I(st, i).trim$());
st=i + 1;
}
if (s0 != s1) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["'[' and ']' mismatch in row/column format string: " + s]);
if (s0 == 0) {
retList.add$TE("");
retList.add$TE(s);
retList.add$TE("");
} else if (retList.size$() % 2 == 0) {
retList.add$TE(s.substring$I$I(st, s.length$()));
}return retList;
}, 1);

Clazz.newMeth(C$, 'prepare$S', function (s) {
return s != null  ? s.trim$().toLowerCase$() : "";
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-02-03 08:07:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
