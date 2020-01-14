(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),p$1={},p$2={},p$3={},p$4={},I$=[[0,'java.util.ArrayList','java.util.Arrays','net.miginfocom.layout.UnitValue','net.miginfocom.layout.ResizeConstraint','net.miginfocom.layout.LayoutUtil','java.lang.ref.WeakReference','net.miginfocom.layout.DimConstraint','net.miginfocom.layout.CC','java.util.LinkedHashMap','java.util.TreeSet','net.miginfocom.layout.LinkHandler',['net.miginfocom.layout.Grid','.CompWrap'],['net.miginfocom.layout.Grid','.Cell'],'java.util.HashMap','Boolean','net.miginfocom.layout.PlatformDefaults',['net.miginfocom.layout.Grid','.LinkedDimGroup'],['net.miginfocom.layout.Grid','.AboveBelow'],['net.miginfocom.layout.Grid','.FlowSizeSpec'],'java.util.WeakHashMap',['net.miginfocom.layout.Grid','.WeakCell']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Grid", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.GROW_100=null;
C$.DOCK_DIM_CONSTRAINT=null;
C$.GAP_RC_CONST=null;
C$.GAP_RC_CONST_PUSH=null;
C$.DEF_CC=null;
C$.PARENT_ROWCOL_SIZES_MAP=null;
C$.PARENT_GRIDPOS_MAP=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.GROW_100=Clazz.array(Float, -1, [$I$(4).WEIGHT_100]);
C$.DOCK_DIM_CONSTRAINT=Clazz.new_($I$(7));
{
C$.DOCK_DIM_CONSTRAINT.setGrowPriority$I(0);
};
C$.GAP_RC_CONST=Clazz.new_($I$(4).c$$I$Float$I$Float,[200, $I$(4).WEIGHT_100, 50, null]);
C$.GAP_RC_CONST_PUSH=Clazz.new_($I$(4).c$$I$Float$I$Float,[200, $I$(4).WEIGHT_100, 50, $I$(4).WEIGHT_100]);
C$.DEF_CC=Clazz.new_($I$(8));
C$.PARENT_ROWCOL_SIZES_MAP=null;
C$.PARENT_GRIDPOS_MAP=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lc=null;
this.container=null;
this.grid=null;
this.wrapGapMap=null;
this.rowIndexes=null;
this.colIndexes=null;
this.rowConstr=null;
this.colConstr=null;
this.colFlowSpecs=null;
this.rowFlowSpecs=null;
this.colGroupLists=null;
this.rowGroupLists=null;
this.width=null;
this.height=null;
this.debugRects=null;
this.linkTargetIDs=null;
this.dockOffY=0;
this.dockOffX=0;
this.pushXs=null;
this.pushYs=null;
this.callbackList=null;
this.lastRefWidth=0;
this.lastRefHeight=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.grid=Clazz.new_($I$(9));
this.wrapGapMap=null;
this.rowIndexes=Clazz.new_($I$(10));
this.colIndexes=Clazz.new_($I$(10));
this.colFlowSpecs=null;
this.rowFlowSpecs=null;
this.width=null;
this.height=null;
this.debugRects=null;
this.linkTargetIDs=null;
this.lastRefWidth=0;
this.lastRefHeight=0;
}, 1);

Clazz.newMeth(C$, 'c$$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_LC$net_miginfocom_layout_AC$net_miginfocom_layout_AC$java_util_Map$java_util_ArrayList', function (container, lc, rowConstr, colConstr, ccMap, callbackList) {
C$.$init$.apply(this);
this.lc=lc;
this.rowConstr=rowConstr;
this.colConstr=colConstr;
this.container=container;
this.callbackList=callbackList;
var wrap=lc.getWrapAfter$() != 0 ? lc.getWrapAfter$() : (lc.isFlowX$() ? colConstr : rowConstr).getConstaints$().length;
var useVisualPadding=lc.isVisualPadding$();
var comps=container.getComponents$();
var hasTagged=false;
var hasPushX=false;
var hasPushY=false;
var hitEndOfRow=false;
var cellXY=Clazz.array(Integer.TYPE, [2]);
var spannedRects=Clazz.new_($I$(1).c$$I,[2]);
var specs=(lc.isFlowX$() ? rowConstr : colConstr).getConstaints$();
var sizeGroupsX=0;
var sizeGroupsY=0;
var dockInsets=null;
$I$(11).clearTemporaryBounds$O(container.getLayout$());
for (var i=0; i < comps.length; ) {
var comp=comps[i];
var rootCc=C$.getCC$net_miginfocom_layout_ComponentWrapper$java_util_Map(comp, ccMap);
p$3.addLinkIDs$net_miginfocom_layout_CC.apply(this, [rootCc]);
var hideMode=comp.isVisible$() ? -1 : rootCc.getHideMode$() != -1 ? rootCc.getHideMode$() : lc.getHideMode$();
if (hideMode == 3) {
p$3.setLinkedBounds$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$I$I$I$I$Z.apply(this, [comp, rootCc, comp.getX$(), comp.getY$(), comp.getWidth$(), comp.getHeight$(), rootCc.isExternal$()]);
i++;
continue;
}if (rootCc.getHorizontal$().getSizeGroup$() != null ) sizeGroupsX++;
if (rootCc.getVertical$().getSizeGroup$() != null ) sizeGroupsY++;
if (p$3.getPos$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC.apply(this, [comp, rootCc]) != null  || rootCc.isExternal$() ) {
var cw=Clazz.new_($I$(12).c$$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$I$Z, [this, null, comp, rootCc, hideMode, useVisualPadding]);
var cell=this.grid.get$O(null);
if (cell == null ) {
this.grid.put$TK$TV(null, Clazz.new_($I$(13).c$$net_miginfocom_layout_Grid_CompWrap,[cw]));
} else {
cell.compWraps.add$TE(cw);
}if (!rootCc.isBoundsInGrid$() || rootCc.isExternal$() ) {
p$3.setLinkedBounds$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$I$I$I$I$Z.apply(this, [comp, rootCc, comp.getX$(), comp.getY$(), comp.getWidth$(), comp.getHeight$(), rootCc.isExternal$()]);
i++;
continue;
}}if (rootCc.getDockSide$() != -1) {
if (dockInsets == null ) dockInsets=Clazz.array(Integer.TYPE, -1, [-32767, -32767, 32767, 32767]);
p$3.addDockingCell$IA$I$net_miginfocom_layout_Grid_CompWrap.apply(this, [dockInsets, rootCc.getDockSide$(), Clazz.new_($I$(12).c$$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$I$Z, [this, null, comp, rootCc, hideMode, useVisualPadding])]);
i++;
continue;
}var cellFlowX=rootCc.getFlowX$();
var cell=null;
if (rootCc.isNewline$()) {
p$3.wrap$IA$net_miginfocom_layout_BoundSize.apply(this, [cellXY, rootCc.getNewlineGapSize$()]);
} else if (hitEndOfRow) {
p$3.wrap$IA$net_miginfocom_layout_BoundSize.apply(this, [cellXY, null]);
}hitEndOfRow=false;
var isRowInGridMode=!lc.isNoGrid$() && !($I$(5).getIndexSafe$OA$I(specs, lc.isFlowX$() ? cellXY[1] : cellXY[0])).isNoGrid$() ;
var cx=rootCc.getCellX$();
var cy=rootCc.getCellY$();
if ((cx < 0 || cy < 0 ) && isRowInGridMode && rootCc.getSkip$() == 0  ) {
while (!p$3.isCellFree$I$I$java_util_ArrayList.apply(this, [cellXY[1], cellXY[0], spannedRects])){
if (Math.abs(p$3.increase$IA$I.apply(this, [cellXY, 1])) >= wrap) p$3.wrap$IA$net_miginfocom_layout_BoundSize.apply(this, [cellXY, null]);
}
} else {
if (cx >= 0 && cy >= 0 ) {
if (cy >= 0) {
cellXY[0]=cx;
cellXY[1]=cy;
} else {
if (lc.isFlowX$()) {
cellXY[0]=cx;
} else {
cellXY[1]=cx;
}}p$3.ensureIndexSizes$I$I.apply(this, [cx, cy]);
}cell=p$3.getCell$I$I.apply(this, [cellXY[1], cellXY[0]]);
}for (var s=0, skipCount=rootCc.getSkip$(); s < skipCount; s++) {
do {
if (Math.abs(p$3.increase$IA$I.apply(this, [cellXY, 1])) >= wrap) p$3.wrap$IA$net_miginfocom_layout_BoundSize.apply(this, [cellXY, null]);
} while (!p$3.isCellFree$I$I$java_util_ArrayList.apply(this, [cellXY[1], cellXY[0], spannedRects]));
}
if (cell == null ) {
var spanx=Math.min(!isRowInGridMode && lc.isFlowX$()  ? 2097051 : rootCc.getSpanX$(), 30000 - cellXY[0]);
var spany=Math.min(!isRowInGridMode && !lc.isFlowX$()  ? 2097051 : rootCc.getSpanY$(), 30000 - cellXY[1]);
cell=Clazz.new_($I$(13).c$$I$I$Z,[spanx, spany, cellFlowX != null  ? (cellFlowX).booleanValue$() : lc.isFlowX$()]);
p$3.setCell$I$I$net_miginfocom_layout_Grid_Cell.apply(this, [cellXY[1], cellXY[0], cell]);
if (spanx > 1 || spany > 1 ) spannedRects.add$TE(Clazz.array(Integer.TYPE, -1, [cellXY[0], cellXY[1], spanx, spany]));
}var wrapHandled=false;
var splitLeft=isRowInGridMode ? rootCc.getSplit$() - 1 : 2097051;
var splitExit=false;
var spanRestOfRow=(lc.isFlowX$() ? rootCc.getSpanX$() : rootCc.getSpanY$()) == 2097051;
for (; splitLeft >= 0 && i < comps.length ; splitLeft--) {
var compAdd=comps[i];
var cc=C$.getCC$net_miginfocom_layout_ComponentWrapper$java_util_Map(compAdd, ccMap);
p$3.addLinkIDs$net_miginfocom_layout_CC.apply(this, [cc]);
var visible=compAdd.isVisible$();
hideMode=visible ? -1 : cc.getHideMode$() != -1 ? cc.getHideMode$() : lc.getHideMode$();
if (cc.isExternal$() || hideMode == 3 ) {
i++;
splitLeft++;
continue;
}hasPushX|=(visible || hideMode > 1 ) && (cc.getPushX$() != null ) ;
hasPushY|=(visible || hideMode > 1 ) && (cc.getPushY$() != null ) ;
if (cc !== rootCc ) {
if (cc.isNewline$() || !cc.isBoundsInGrid$() || cc.getDockSide$() != -1  ) break;
if (splitLeft > 0 && cc.getSkip$() > 0 ) {
splitExit=true;
break;
}}var cw=Clazz.new_($I$(12).c$$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$I$Z, [this, null, compAdd, cc, hideMode, useVisualPadding]);
cell.compWraps.add$TE(cw);
cell.hasTagged|=cc.getTag$() != null ;
hasTagged|=cell.hasTagged;
if (cc !== rootCc ) {
if (cc.getHorizontal$().getSizeGroup$() != null ) sizeGroupsX++;
if (cc.getVertical$().getSizeGroup$() != null ) sizeGroupsY++;
}i++;
if ((cc.isWrap$() || (spanRestOfRow && splitLeft == 0 ) )) {
if (cc.isWrap$()) {
p$3.wrap$IA$net_miginfocom_layout_BoundSize.apply(this, [cellXY, cc.getWrapGapSize$()]);
} else {
hitEndOfRow=true;
}wrapHandled=true;
break;
}}
if (!wrapHandled && isRowInGridMode ) {
var span=lc.isFlowX$() ? cell.spanx : cell.spany;
if (Math.abs((lc.isFlowX$() ? cellXY[0] : cellXY[1])) + span >= wrap) {
hitEndOfRow=true;
} else {
p$3.increase$IA$I.apply(this, [cellXY, splitExit ? span - 1 : span]);
}}}
if (sizeGroupsX > 0 || sizeGroupsY > 0 ) {
var sizeGroupMapX=sizeGroupsX > 0 ? Clazz.new_($I$(14).c$$I,[sizeGroupsX]) : null;
var sizeGroupMapY=sizeGroupsY > 0 ? Clazz.new_($I$(14).c$$I,[sizeGroupsY]) : null;
var sizeGroupCWs=Clazz.new_($I$(1).c$$I,[Math.max(sizeGroupsX, sizeGroupsY)]);
for (var cell, $cell = this.grid.values$().iterator$(); $cell.hasNext$()&&((cell=($cell.next$())),1);) {
for (var i=0; i < cell.compWraps.size$(); i++) {
var cw=cell.compWraps.get$I(i);
var sgx=cw.cc.getHorizontal$().getSizeGroup$();
var sgy=cw.cc.getVertical$().getSizeGroup$();
if (sgx != null  || sgy != null  ) {
if (sgx != null  && sizeGroupMapX != null  ) C$.addToSizeGroup$java_util_HashMap$S$IA(sizeGroupMapX, sgx, p$2.getSizes$Z.apply(cw, [true]));
if (sgy != null  && sizeGroupMapY != null  ) C$.addToSizeGroup$java_util_HashMap$S$IA(sizeGroupMapY, sgy, p$2.getSizes$Z.apply(cw, [false]));
sizeGroupCWs.add$TE(cw);
}}
}
for (var cw, $cw = sizeGroupCWs.iterator$(); $cw.hasNext$()&&((cw=($cw.next$())),1);) {
if (sizeGroupMapX != null ) p$2.setForcedSizes$IA$Z.apply(cw, [sizeGroupMapX.get$O(cw.cc.getHorizontal$().getSizeGroup$()), true]);
if (sizeGroupMapY != null ) p$2.setForcedSizes$IA$Z.apply(cw, [sizeGroupMapY.get$O(cw.cc.getVertical$().getSizeGroup$()), false]);
}
}if (hasTagged) C$.sortCellsByPlatform$java_util_Collection$net_miginfocom_layout_ContainerWrapper(this.grid.values$(), container);
var ltr=$I$(5).isLeftToRight$net_miginfocom_layout_LC$net_miginfocom_layout_ContainerWrapper(lc, container);
for (var cell, $cell = this.grid.values$().iterator$(); $cell.hasNext$()&&((cell=($cell.next$())),1);) {
var cws=cell.compWraps;
for (var i=0, lastI=cws.size$() - 1; i <= lastI; i++) {
var cw=cws.get$I(i);
var cwBef=i > 0 ? cws.get$I(i - 1).comp : null;
var cwAft=i < lastI ? cws.get$I(i + 1).comp : null;
var tag=C$.getCC$net_miginfocom_layout_ComponentWrapper$java_util_Map(cw.comp, ccMap).getTag$();
var ccBef=cwBef != null  ? C$.getCC$net_miginfocom_layout_ComponentWrapper$java_util_Map(cwBef, ccMap) : null;
var ccAft=cwAft != null  ? C$.getCC$net_miginfocom_layout_ComponentWrapper$java_util_Map(cwAft, ccMap) : null;
p$2.calcGaps$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$S$Z$Z.apply(cw, [cwBef, ccBef, cwAft, ccAft, tag, cell.flowx, ltr]);
}
}
this.dockOffX=C$.getDockInsets$java_util_TreeSet(this.colIndexes);
this.dockOffY=C$.getDockInsets$java_util_TreeSet(this.rowIndexes);
p$3.ensureIndexSizes$I$I.apply(this, [colConstr.getCount$(), rowConstr.getCount$()]);
this.colGroupLists=p$3.divideIntoLinkedGroups$Z.apply(this, [false]);
this.rowGroupLists=p$3.divideIntoLinkedGroups$Z.apply(this, [true]);
this.pushXs=hasPushX || lc.isFillX$()  ? p$3.getDefaultPushWeights$Z.apply(this, [false]) : null;
this.pushYs=hasPushY || lc.isFillY$()  ? p$3.getDefaultPushWeights$Z.apply(this, [true]) : null;
if ($I$(5).isDesignTime$net_miginfocom_layout_ContainerWrapper(container)) C$.saveGrid$net_miginfocom_layout_ComponentWrapper$java_util_LinkedHashMap(container, this.grid);
}, 1);

Clazz.newMeth(C$, 'ensureIndexSizes$I$I', function (colCount, rowCount) {
for (var i=0; i < colCount; i++) this.colIndexes.add$TE(new Integer(i));

for (var i=0; i < rowCount; i++) this.rowIndexes.add$TE(new Integer(i));

}, p$3);

Clazz.newMeth(C$, 'getCC$net_miginfocom_layout_ComponentWrapper$java_util_Map', function (comp, ccMap) {
var cc=ccMap.get$O(comp);
return cc != null  ? cc : C$.DEF_CC;
}, 1);

Clazz.newMeth(C$, 'addLinkIDs$net_miginfocom_layout_CC', function (cc) {
var linkIDs=cc.getLinkTargets$();
for (var linkID, $linkID = 0, $$linkID = linkIDs; $linkID<$$linkID.length&&((linkID=($$linkID[$linkID])),1);$linkID++) {
if (this.linkTargetIDs == null ) this.linkTargetIDs=Clazz.new_($I$(14));
this.linkTargetIDs.put$TK$TV(linkID, null);
}
}, p$3);

Clazz.newMeth(C$, 'invalidateContainerSize$', function () {
this.colFlowSpecs=null;
p$3.invalidateComponentSizes.apply(this, []);
});

Clazz.newMeth(C$, 'invalidateComponentSizes', function () {
for (var cell, $cell = this.grid.values$().iterator$(); $cell.hasNext$()&&((cell=($cell.next$())),1);) {
for (var compWrap, $compWrap = cell.compWraps.iterator$(); $compWrap.hasNext$()&&((compWrap=($compWrap.next$())),1);) compWrap.invalidateSizes$();

}
}, p$3);

Clazz.newMeth(C$, 'layout$IA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z$Z', function (bounds, alignX, alignY, debug, notUsed) {
return p$3.layoutImpl$IA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z$Z.apply(this, [bounds, alignX, alignY, debug, false]);
});

Clazz.newMeth(C$, 'layout$IA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z', function (bounds, alignX, alignY, debug) {
return p$3.layoutImpl$IA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z$Z.apply(this, [bounds, alignX, alignY, debug, false]);
});

Clazz.newMeth(C$, 'layoutImpl$IA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z$Z', function (bounds, alignX, alignY, debug, trialRun) {
if (debug) this.debugRects=Clazz.new_($I$(1));
if (this.colFlowSpecs == null ) p$3.checkSizeCalcs$I$I.apply(this, [bounds[2], bounds[3]]);
p$3.resetLinkValues$Z$Z.apply(this, [true, true]);
p$3.layoutInOneDim$I$net_miginfocom_layout_UnitValue$Z$FloatA.apply(this, [bounds[2], alignX, false, this.pushXs]);
p$3.layoutInOneDim$I$net_miginfocom_layout_UnitValue$Z$FloatA.apply(this, [bounds[3], alignY, true, this.pushYs]);
var endGrpXMap=null;
var endGrpYMap=null;
var compCount=this.container.getComponentCount$();
var addVisualPadding=this.lc.isVisualPadding$();
var layoutAgain=false;
if (compCount > 0) {
for (var j=0; j < (this.linkTargetIDs != null  ? 2 : 1); j++) {
var doAgain;
var count=0;
do {
doAgain=false;
for (var cell, $cell = this.grid.values$().iterator$(); $cell.hasNext$()&&((cell=($cell.next$())),1);) {
for (var cw, $cw = cell.compWraps.iterator$(); $cw.hasNext$()&&((cw=($cw.next$())),1);) {
if (j == 0) {
doAgain|=p$3.doAbsoluteCorrections$net_miginfocom_layout_Grid_CompWrap$IA.apply(this, [cw, bounds]);
if (!doAgain) {
if (cw.cc.getHorizontal$().getEndGroup$() != null ) endGrpXMap=C$.addToEndGroup$java_util_HashMap$S$I(endGrpXMap, cw.cc.getHorizontal$().getEndGroup$(), cw.x + cw.w);
if (cw.cc.getVertical$().getEndGroup$() != null ) endGrpYMap=C$.addToEndGroup$java_util_HashMap$S$I(endGrpYMap, cw.cc.getVertical$().getEndGroup$(), cw.y + cw.h);
}if (this.linkTargetIDs != null  && (this.linkTargetIDs.containsKey$O("visual") || this.linkTargetIDs.containsKey$O("container") ) ) {
layoutAgain=true;
}}if (this.linkTargetIDs == null  || j == 1 ) {
if (cw.cc.getHorizontal$().getEndGroup$() != null ) cw.w=(endGrpXMap.get$O(cw.cc.getHorizontal$().getEndGroup$())).intValue$() - cw.x;
if (cw.cc.getVertical$().getEndGroup$() != null ) cw.h=(endGrpYMap.get$O(cw.cc.getVertical$().getEndGroup$())).intValue$() - cw.y;
cw.x+=bounds[0];
cw.y+=bounds[1];
if (!trialRun) p$2.transferBounds$Z.apply(cw, [addVisualPadding]);
if (this.callbackList != null ) {
for (var callback, $callback = this.callbackList.iterator$(); $callback.hasNext$()&&((callback=($callback.next$())),1);) callback.correctBounds$net_miginfocom_layout_ComponentWrapper(cw.comp);

}}}
}
p$3.clearGroupLinkBounds.apply(this, []);
if (++count > ((compCount << 3) + 10)) {
System.err.println$S("Unstable cyclic dependency in absolute linked values.");
break;
}} while (doAgain);
}
}if (debug) {
for (var cell, $cell = this.grid.values$().iterator$(); $cell.hasNext$()&&((cell=($cell.next$())),1);) {
var compWraps=cell.compWraps;
for (var cw, $cw = compWraps.iterator$(); $cw.hasNext$()&&((cw=($cw.next$())),1);) {
var hGrp=C$.getGroupContaining$java_util_ArrayListA$net_miginfocom_layout_Grid_CompWrap(this.colGroupLists, cw);
var vGrp=C$.getGroupContaining$java_util_ArrayListA$net_miginfocom_layout_Grid_CompWrap(this.rowGroupLists, cw);
if (hGrp != null  && vGrp != null  ) this.debugRects.add$TE(Clazz.array(Integer.TYPE, -1, [hGrp.lStart + bounds[0] - (hGrp.fromEnd ? hGrp.lSize : 0), vGrp.lStart + bounds[1] - (vGrp.fromEnd ? vGrp.lSize : 0), hGrp.lSize, vGrp.lSize]));
}
}
}return layoutAgain;
}, p$3);

Clazz.newMeth(C$, 'paintDebug$', function () {
if (this.debugRects != null ) {
this.container.paintDebugOutline$Z(this.lc.isVisualPadding$());
var painted=Clazz.new_($I$(1));
for (var r, $r = this.debugRects.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
if (!painted.contains$O(r)) {
this.container.paintDebugCell$I$I$I$I(r[0], r[1], r[2], r[3]);
painted.add$TE(r);
}}
for (var cell, $cell = this.grid.values$().iterator$(); $cell.hasNext$()&&((cell=($cell.next$())),1);) {
var compWraps=cell.compWraps;
for (var compWrap, $compWrap = compWraps.iterator$(); $compWrap.hasNext$()&&((compWrap=($compWrap.next$())),1);) compWrap.comp.paintDebugOutline$Z(this.lc.isVisualPadding$());

}
}});

Clazz.newMeth(C$, 'getContainer$', function () {
return this.container;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.getWidth$I(this.lastRefHeight);
});

Clazz.newMeth(C$, 'getWidth$I', function (refHeight) {
p$3.checkSizeCalcs$I$I.apply(this, [this.lastRefWidth, refHeight]);
return this.width.clone$();
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.getHeight$I(this.lastRefWidth);
});

Clazz.newMeth(C$, 'getHeight$I', function (refWidth) {
p$3.checkSizeCalcs$I$I.apply(this, [refWidth, this.lastRefHeight]);
return this.height.clone$();
});

Clazz.newMeth(C$, 'checkSizeCalcs$I$I', function (refWidth, refHeight) {
if (this.colFlowSpecs == null ) p$3.calcGridSizes$I$I.apply(this, [refWidth, refHeight]);
if ((refWidth > 0 && refWidth != this.lastRefWidth ) || (refHeight > 0 && refHeight != this.lastRefHeight ) ) {
var refBounds=Clazz.array(Integer.TYPE, -1, [0, 0, (refWidth > 0 ? refWidth : this.width[1]), (refHeight > 0 ? refHeight : this.height[1])]);
p$3.layoutImpl$IA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z$Z.apply(this, [refBounds, null, null, false, true]);
p$3.calcGridSizes$I$I.apply(this, [refWidth, refHeight]);
}this.lastRefWidth=refWidth;
this.lastRefHeight=refHeight;
}, p$3);

Clazz.newMeth(C$, 'calcGridSizes$I$I', function (refWidth, refHeight) {
var colSpecs=p$3.calcRowsOrColsSizes$Z$I.apply(this, [true, refWidth]);
var rowSpecs=p$3.calcRowsOrColsSizes$Z$I.apply(this, [false, refHeight]);
this.colFlowSpecs=colSpecs;
this.rowFlowSpecs=rowSpecs;
this.width=p$3.getMinPrefMaxSumSize$Z$IAA.apply(this, [true, colSpecs.sizes]);
this.height=p$3.getMinPrefMaxSumSize$Z$IAA.apply(this, [false, rowSpecs.sizes]);
if (this.linkTargetIDs == null ) {
p$3.resetLinkValues$Z$Z.apply(this, [false, true]);
} else {
this.layout$IA$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z(Clazz.array(Integer.TYPE, -1, [0, 0, refWidth, refHeight]), null, null, false);
p$3.resetLinkValues$Z$Z.apply(this, [false, false]);
}p$3.adjustSizeForAbsolute$Z.apply(this, [true]);
p$3.adjustSizeForAbsolute$Z.apply(this, [false]);
}, p$3);

Clazz.newMeth(C$, 'getPos$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC', function (cw, cc) {
var callbackPos=null;
if (this.callbackList != null ) {
for (var i=0; i < this.callbackList.size$() && callbackPos == null  ; i++) callbackPos=this.callbackList.get$I(i).getPosition$net_miginfocom_layout_ComponentWrapper(cw);

}var ccPos=cc.getPos$();
if (callbackPos == null  || ccPos == null  ) return callbackPos != null  ? callbackPos : ccPos;
for (var i=0; i < 4; i++) {
var cbUv=callbackPos[i];
if (cbUv != null ) ccPos[i]=cbUv;
}
return ccPos;
}, p$3);

Clazz.newMeth(C$, 'getCallbackSize$net_miginfocom_layout_ComponentWrapper', function (cw) {
if (this.callbackList != null ) {
for (var callback, $callback = this.callbackList.iterator$(); $callback.hasNext$()&&((callback=($callback.next$())),1);) {
var bs=callback.getSize$net_miginfocom_layout_ComponentWrapper(cw);
if (bs != null ) return bs;
}
}return null;
}, p$3);

Clazz.newMeth(C$, 'getDockInsets$java_util_TreeSet', function (set) {
var c=0;
for (var i, $i = set.iterator$(); $i.hasNext$()&&((i=($i.next$())),1);) {
if ((i).intValue$() < -30000 ) {
c++;
} else {
break;
}}
return c;
}, 1);

Clazz.newMeth(C$, 'setLinkedBounds$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$I$I$I$I$Z', function (cw, cc, x, y, w, h, external) {
var id=cc.getId$() != null  ? cc.getId$() : cw.getLinkId$();
if (id == null ) return false;
var gid=null;
var grIx=id.indexOf$I(".");
if (grIx != -1) {
gid=id.substring$I$I(0, grIx);
id=id.substring$I(grIx + 1);
}var lay=this.container.getLayout$();
var changed=false;
if (external || (this.linkTargetIDs != null  && this.linkTargetIDs.containsKey$O(id) ) ) changed=$I$(11).setBounds$O$S$I$I$I$I$Z$Z(lay, id, x, y, w, h, !external, false);
if (gid != null  && (external || (this.linkTargetIDs != null  && this.linkTargetIDs.containsKey$O(gid) ) ) ) {
if (this.linkTargetIDs == null ) this.linkTargetIDs=Clazz.new_($I$(14).c$$I,[4]);
this.linkTargetIDs.put$TK$TV(gid, $I$(15).TRUE);
changed|=$I$(11).setBounds$O$S$I$I$I$I$Z$Z(lay, gid, x, y, w, h, !external, true);
}return changed;
}, p$3);

Clazz.newMeth(C$, 'increase$IA$I', function (p, cnt) {
return this.lc.isFlowX$() ? (p[0]+=cnt) : (p[1]+=cnt);
}, p$3);

Clazz.newMeth(C$, 'wrap$IA$net_miginfocom_layout_BoundSize', function (cellXY, gapSize) {
var flowx=this.lc.isFlowX$();
cellXY[0]=flowx ? 0 : cellXY[0] + 1;
cellXY[1]=flowx ? cellXY[1] + 1 : 0;
if (gapSize != null ) {
if (this.wrapGapMap == null ) this.wrapGapMap=Clazz.new_($I$(14).c$$I,[8]);
this.wrapGapMap.put$TK$TV(new Integer(cellXY[flowx ? 1 : 0]), gapSize);
}if (flowx) {
this.rowIndexes.add$TE(new Integer(cellXY[1]));
} else {
this.colIndexes.add$TE(new Integer(cellXY[0]));
}}, p$3);

Clazz.newMeth(C$, 'sortCellsByPlatform$java_util_Collection$net_miginfocom_layout_ContainerWrapper', function (cells, parent) {
var order=$I$(16).getButtonOrder$();
var orderLo=order.toLowerCase$();
var unrelSize=$I$(16).convertToPixels$F$S$Z$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(1, "u", true, 0, parent, null);
if (unrelSize == -87654312) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["\'unrelated\' not recognized by PlatformDefaults!"]);
var gapUnrel=Clazz.array(Integer.TYPE, -1, [unrelSize, unrelSize, -2147471302]);
var flGap=Clazz.array(Integer.TYPE, -1, [0, 0, -2147471302]);
for (var cell, $cell = cells.iterator$(); $cell.hasNext$()&&((cell=($cell.next$())),1);) {
if (!cell.hasTagged) continue;
var prevCW=null;
var nextUnrel=false;
var nextPush=false;
var sortedList=Clazz.new_($I$(1).c$$I,[cell.compWraps.size$()]);
for (var i=0, iSz=orderLo.length$(); i < iSz; i++) {
var c=orderLo.charAt$I(i);
if (c == "+" || c == "_" ) {
nextUnrel=true;
if (c == "+") nextPush=true;
} else {
var tag=$I$(16).getTagForChar$C(c);
if (tag != null ) {
for (var j=0, jSz=cell.compWraps.size$(); j < jSz; j++) {
var cw=cell.compWraps.get$I(j);
if (tag.equals$O(cw.cc.getTag$())) {
if (Character.isUpperCase$C(order.charAt$I(i))) cw.adjustMinHorSizeUp$I(($I$(16).getMinimumButtonWidthIncludingPadding$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(0, parent, cw.comp)|0));
sortedList.add$TE(cw);
if (nextUnrel) {
p$2.mergeGapSizes$IA$Z$Z.apply((prevCW != null  ? prevCW : cw), [gapUnrel, cell.flowx, prevCW == null ]);
if (nextPush) {
cw.forcedPushGaps=1;
nextUnrel=false;
nextPush=false;
}}if (c == "u") nextUnrel=true;
prevCW=cw;
}}
}}}
if (sortedList.size$() > 0) {
var cw=sortedList.get$I(sortedList.size$() - 1);
if (nextUnrel) {
p$2.mergeGapSizes$IA$Z$Z.apply(cw, [gapUnrel, cell.flowx, false]);
if (nextPush) cw.forcedPushGaps|=2;
}if (cw.cc.getHorizontal$().getGapAfter$() == null ) p$2.setGaps$IA$I.apply(cw, [flGap, 3]);
cw=sortedList.get$I(0);
if (cw.cc.getHorizontal$().getGapBefore$() == null ) p$2.setGaps$IA$I.apply(cw, [flGap, 1]);
}if (cell.compWraps.size$() == sortedList.size$()) {
cell.compWraps.clear$();
} else {
cell.compWraps.removeAll$java_util_Collection(sortedList);
}cell.compWraps.addAll$java_util_Collection(sortedList);
}
}, 1);

Clazz.newMeth(C$, 'getDefaultPushWeights$Z', function (isRows) {
var groupLists=isRows ? this.rowGroupLists : this.colGroupLists;
var pushWeightArr=C$.GROW_100;
for (var i=0, ix=1; i < groupLists.length; i++, ix+=2) {
var grps=groupLists[i];
var rowPushWeight=null;
for (var grp, $grp = grps.iterator$(); $grp.hasNext$()&&((grp=($grp.next$())),1);) {
for (var c=0; c < grp._compWraps.size$(); c++) {
var cw=grp._compWraps.get$I(c);
var hideMode=cw.comp.isVisible$() ? -1 : cw.cc.getHideMode$() != -1 ? cw.cc.getHideMode$() : this.lc.getHideMode$();
var pushWeight=hideMode < 2 ? (isRows ? cw.cc.getPushY$() : cw.cc.getPushX$()) : null;
if (rowPushWeight == null  || (pushWeight != null  && (pushWeight).floatValue$() > (rowPushWeight).floatValue$()  ) ) rowPushWeight=pushWeight;
}
}
if (rowPushWeight != null ) {
if (pushWeightArr === C$.GROW_100 ) pushWeightArr=Clazz.array(Float, [(groupLists.length << 1) + 1]);
pushWeightArr[ix]=rowPushWeight;
}}
return pushWeightArr;
}, p$3);

Clazz.newMeth(C$, 'clearGroupLinkBounds', function () {
if (this.linkTargetIDs == null ) return;
for (var o, $o = this.linkTargetIDs.entrySet$().iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (o.getValue$() === $I$(15).TRUE ) $I$(11).clearBounds$O$S(this.container.getLayout$(), o.getKey$());
}
}, p$3);

Clazz.newMeth(C$, 'resetLinkValues$Z$Z', function (parentSize, compLinks) {
var lay=this.container.getLayout$();
if (compLinks) $I$(11).clearTemporaryBounds$O(lay);
var defIns=!p$3.hasDocks.apply(this, []);
var parW=parentSize ? this.lc.getWidth$().constrain$I$F$net_miginfocom_layout_ContainerWrapper(this.container.getWidth$(), C$.getParentSize$net_miginfocom_layout_ComponentWrapper$Z(this.container, true), this.container) : 0;
var parH=parentSize ? this.lc.getHeight$().constrain$I$F$net_miginfocom_layout_ContainerWrapper(this.container.getHeight$(), C$.getParentSize$net_miginfocom_layout_ComponentWrapper$Z(this.container, false), this.container) : 0;
var insX=$I$(5).getInsets$net_miginfocom_layout_LC$I$Z(this.lc, 0, defIns).getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(0, this.container, null);
var insY=$I$(5).getInsets$net_miginfocom_layout_LC$I$Z(this.lc, 1, defIns).getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(0, this.container, null);
var visW=parW - insX - $I$(5).getInsets$net_miginfocom_layout_LC$I$Z(this.lc, 2, defIns).getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(0, this.container, null) ;
var visH=parH - insY - $I$(5).getInsets$net_miginfocom_layout_LC$I$Z(this.lc, 3, defIns).getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(0, this.container, null) ;
$I$(11).setBounds$O$S$I$I$I$I$Z$Z(lay, "visual", insX, insY, visW, visH, true, false);
$I$(11).setBounds$O$S$I$I$I$I$Z$Z(lay, "container", 0, 0, parW, parH, true, false);
}, p$3);

Clazz.newMeth(C$, 'getGroupContaining$java_util_ArrayListA$net_miginfocom_layout_Grid_CompWrap', function (groupLists, cw) {
for (var groups, $groups = 0, $$groups = groupLists; $groups<$$groups.length&&((groups=($$groups[$groups])),1);$groups++) {
for (var group, $group = groups.iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
var cwList=group._compWraps;
for (var aCwList, $aCwList = cwList.iterator$(); $aCwList.hasNext$()&&((aCwList=($aCwList.next$())),1);) {
if (aCwList === cw ) return group;
}
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'doAbsoluteCorrections$net_miginfocom_layout_Grid_CompWrap$IA', function (cw, bounds) {
var changed=false;
var stSz=p$3.getAbsoluteDimBounds$net_miginfocom_layout_Grid_CompWrap$I$Z.apply(this, [cw, bounds[2], true]);
if (stSz != null ) p$2.setDimBounds$I$I$Z.apply(cw, [stSz[0], stSz[1], true]);
stSz=p$3.getAbsoluteDimBounds$net_miginfocom_layout_Grid_CompWrap$I$Z.apply(this, [cw, bounds[3], false]);
if (stSz != null ) p$2.setDimBounds$I$I$Z.apply(cw, [stSz[0], stSz[1], false]);
if (this.linkTargetIDs != null ) changed=p$3.setLinkedBounds$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$I$I$I$I$Z.apply(this, [cw.comp, cw.cc, cw.x, cw.y, cw.w, cw.h, false]);
return changed;
}, p$3);

Clazz.newMeth(C$, 'adjustSizeForAbsolute$Z', function (isHor) {
var curSizes=isHor ? this.width : this.height;
var absCell=this.grid.get$O(null);
if (absCell == null  || absCell.compWraps.size$() == 0 ) return;
var cws=absCell.compWraps;
var maxEnd=0;
for (var j=0, cwSz=absCell.compWraps.size$(); j < cwSz + 3; j++) {
var doAgain=false;
for (var i=0; i < cwSz; i++) {
var cw=cws.get$I(i);
var stSz=p$3.getAbsoluteDimBounds$net_miginfocom_layout_Grid_CompWrap$I$Z.apply(this, [cw, 0, isHor]);
var end=stSz[0] + stSz[1];
if (maxEnd < end) maxEnd=end;
if (this.linkTargetIDs != null ) doAgain|=p$3.setLinkedBounds$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$I$I$I$I$Z.apply(this, [cw.comp, cw.cc, stSz[0], stSz[0], stSz[1], stSz[1], false]);
}
if (!doAgain) break;
maxEnd=0;
p$3.clearGroupLinkBounds.apply(this, []);
}
maxEnd+=$I$(5).getInsets$net_miginfocom_layout_LC$I$Z(this.lc, isHor ? 3 : 2, !p$3.hasDocks.apply(this, [])).getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(0, this.container, null);
if (curSizes[0] < maxEnd) curSizes[0]=maxEnd;
if (curSizes[1] < maxEnd) curSizes[1]=maxEnd;
}, p$3);

Clazz.newMeth(C$, 'getAbsoluteDimBounds$net_miginfocom_layout_Grid_CompWrap$I$Z', function (cw, refSize, isHor) {
if (cw.cc.isExternal$()) {
if (isHor) {
return Clazz.array(Integer.TYPE, -1, [cw.comp.getX$(), cw.comp.getWidth$()]);
} else {
return Clazz.array(Integer.TYPE, -1, [cw.comp.getY$(), cw.comp.getHeight$()]);
}}var pad=cw.cc.getPadding$();
var pos=p$3.getPos$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC.apply(this, [cw.comp, cw.cc]);
if (pos == null  && pad == null  ) return null;
var st=isHor ? cw.x : cw.y;
var sz=isHor ? cw.w : cw.h;
if (pos != null ) {
var stUV=pos[isHor ? 0 : 1];
var endUV=pos[isHor ? 2 : 3];
var minSz=p$2.getSize$I$Z.apply(cw, [0, isHor]);
var maxSz=p$2.getSize$I$Z.apply(cw, [2, isHor]);
sz=Math.min(Math.max(p$2.getSize$I$Z.apply(cw, [1, isHor]), minSz), maxSz);
if (stUV != null ) {
st=stUV.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(stUV.getUnit$() == 12 ? sz : refSize, this.container, cw.comp);
if (endUV != null ) sz=Math.min(Math.max((isHor ? (cw.x + cw.w) : (cw.y + cw.h)) - st, minSz), maxSz);
}if (endUV != null ) {
if (stUV != null ) {
sz=Math.min(Math.max(endUV.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, this.container, cw.comp) - st, minSz), maxSz);
} else {
st=endUV.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, this.container, cw.comp) - sz;
}}}if (pad != null ) {
var uv=pad[isHor ? 1 : 0];
var p=uv != null  ? uv.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, this.container, cw.comp) : 0;
st+=p;
uv=pad[isHor ? 3 : 2];
sz+=-p + (uv != null  ? uv.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, this.container, cw.comp) : 0);
}return Clazz.array(Integer.TYPE, -1, [st, sz]);
}, p$3);

Clazz.newMeth(C$, 'layoutInOneDim$I$net_miginfocom_layout_UnitValue$Z$FloatA', function (refSize, align, isRows, defaultPushWeights) {
var fromEnd=!(isRows ? this.lc.isTopToBottom$() : $I$(5).isLeftToRight$net_miginfocom_layout_LC$net_miginfocom_layout_ContainerWrapper(this.lc, this.container));
var primDCs=(isRows ? this.rowConstr : this.colConstr).getConstaints$();
var fss=isRows ? this.rowFlowSpecs : this.colFlowSpecs;
var rowCols=isRows ? this.rowGroupLists : this.colGroupLists;
var rowColSizes=$I$(5).calculateSerial$IAA$net_miginfocom_layout_ResizeConstraintA$FloatA$I$I(fss.sizes, fss.resConstsInclGaps, defaultPushWeights, 1, refSize);
if ($I$(5).isDesignTime$net_miginfocom_layout_ContainerWrapper(this.container)) {
var indexes=isRows ? this.rowIndexes : this.colIndexes;
var ixArr=Clazz.array(Integer.TYPE, [indexes.size$()]);
var ix=0;
for (var i, $i = indexes.iterator$(); $i.hasNext$()&&((i=($i.next$())),1);) ixArr[ix++]=(i).intValue$();

C$.putSizesAndIndexes$O$IA$IA$Z(this.container.getComponent$(), rowColSizes, ixArr, isRows);
}var curPos=align != null  ? align.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize - $I$(5).sum$IA(rowColSizes), this.container, null) : 0;
if (fromEnd) curPos=refSize - curPos;
for (var i=0; i < rowCols.length; i++) {
var linkedGroups=rowCols[i];
var scIx=i - (isRows ? this.dockOffY : this.dockOffX);
var bIx=i << 1;
var bIx2=bIx + 1;
curPos+=(fromEnd ? -rowColSizes[bIx] : rowColSizes[bIx]);
var primDC=scIx >= 0 ? primDCs[scIx >= primDCs.length ? primDCs.length - 1 : scIx] : C$.DOCK_DIM_CONSTRAINT;
var rowSize=rowColSizes[bIx2];
for (var group, $group = linkedGroups.iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
var groupSize=rowSize;
if (group.span > 1) groupSize=$I$(5).sum$IA$I$I(rowColSizes, bIx2, Math.min((group.span << 1) - 1, rowColSizes.length - bIx2 - 1 ));
p$1.layout$net_miginfocom_layout_DimConstraint$I$I$I.apply(group, [primDC, curPos, groupSize, group.span]);
}
curPos+=(fromEnd ? -rowSize : rowSize);
}
}, p$3);

Clazz.newMeth(C$, 'addToSizeGroup$java_util_HashMap$S$IA', function (sizeGroups, sizeGroup, size) {
var sgSize=sizeGroups.get$O(sizeGroup);
if (sgSize == null ) {
sizeGroups.put$TK$TV(sizeGroup, Clazz.array(Integer.TYPE, -1, [size[0], size[1], size[2]]));
} else {
sgSize[0]=Math.max(size[0], sgSize[0]);
sgSize[1]=Math.max(size[1], sgSize[1]);
sgSize[2]=Math.min(size[2], sgSize[2]);
}}, 1);

Clazz.newMeth(C$, 'addToEndGroup$java_util_HashMap$S$I', function (endGroups, endGroup, end) {
if (endGroup != null ) {
if (endGroups == null ) endGroups=Clazz.new_($I$(14).c$$I,[4]);
var oldEnd=endGroups.get$O(endGroup);
if (oldEnd == null  || end > (oldEnd).intValue$()  ) endGroups.put$TK$TV(endGroup, new Integer(end));
}return endGroups;
}, 1);

Clazz.newMeth(C$, 'calcRowsOrColsSizes$Z$I', function (isHor, containerSize) {
var groupsLists=isHor ? this.colGroupLists : this.rowGroupLists;
var defPush=isHor ? this.pushXs : this.pushYs;
if (containerSize <= 0) containerSize=isHor ? this.container.getWidth$() : this.container.getHeight$();
var cSz=isHor ? this.lc.getWidth$() : this.lc.getHeight$();
if (!cSz.isUnset$()) containerSize=cSz.constrain$I$F$net_miginfocom_layout_ContainerWrapper(containerSize, C$.getParentSize$net_miginfocom_layout_ComponentWrapper$Z(this.container, isHor), this.container);
var primDCs=(isHor ? this.colConstr : this.rowConstr).getConstaints$();
var primIndexes=isHor ? this.colIndexes : this.rowIndexes;
var rowColBoundSizes=Clazz.array(Integer.TYPE, [primIndexes.size$(), null]);
var sizeGroupMap=Clazz.new_($I$(14).c$$I,[4]);
var allDCs=Clazz.array($I$(7), [primIndexes.size$()]);
var primIt=primIndexes.iterator$();
for (var r=0; r < rowColBoundSizes.length; r++) {
var cellIx=(primIt.next$()).intValue$();
var rowColSizes=Clazz.array(Integer.TYPE, [3]);
if (cellIx >= -30000 && cellIx <= 30000 ) {
allDCs[r]=primDCs[cellIx >= primDCs.length ? primDCs.length - 1 : cellIx];
} else {
allDCs[r]=C$.DOCK_DIM_CONSTRAINT;
}var groups=groupsLists[r];
var groupSizes=Clazz.array(Integer.TYPE, -1, [C$.getTotalGroupsSizeParallel$java_util_ArrayList$I$Z(groups, 0, false), C$.getTotalGroupsSizeParallel$java_util_ArrayList$I$Z(groups, 1, false), 2097051]);
C$.correctMinMax$IA(groupSizes);
var dimSize=allDCs[r].getSize$();
for (var sType=0; sType <= 2; sType++) {
var rowColSize=groupSizes[sType];
var uv=dimSize.getSize$I(sType);
if (uv != null ) {
var unit=uv.getUnit$();
if (unit == 14) {
rowColSize=groupSizes[1];
} else if (unit == 13) {
rowColSize=groupSizes[0];
} else if (unit == 15) {
rowColSize=groupSizes[2];
} else {
rowColSize=uv.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(containerSize, this.container, null);
}} else if (cellIx >= -30000 && cellIx <= 30000  && rowColSize == 0 ) {
rowColSize=$I$(5).isDesignTime$net_miginfocom_layout_ContainerWrapper(this.container) ? $I$(5).getDesignTimeEmptySize$() : 0;
}rowColSizes[sType]=rowColSize;
}
C$.correctMinMax$IA(rowColSizes);
C$.addToSizeGroup$java_util_HashMap$S$IA(sizeGroupMap, allDCs[r].getSizeGroup$(), rowColSizes);
rowColBoundSizes[r]=rowColSizes;
}
if (sizeGroupMap.size$() > 0) {
for (var r=0; r < rowColBoundSizes.length; r++) {
if (allDCs[r].getSizeGroup$() != null ) rowColBoundSizes[r]=sizeGroupMap.get$O(allDCs[r].getSizeGroup$());
}
}var resConstrs=C$.getRowResizeConstraints$net_miginfocom_layout_DimConstraintA(allDCs);
var fillInPushGaps=Clazz.array(Boolean.TYPE, [allDCs.length + 1]);
var gapSizes=p$3.getRowGaps$net_miginfocom_layout_DimConstraintA$I$Z$ZA.apply(this, [allDCs, containerSize, isHor, fillInPushGaps]);
var fss=C$.mergeSizesGapsAndResConstrs$net_miginfocom_layout_ResizeConstraintA$ZA$IAA$IAA(resConstrs, fillInPushGaps, rowColBoundSizes, gapSizes);
p$3.adjustMinPrefForSpanningComps$net_miginfocom_layout_DimConstraintA$FloatA$net_miginfocom_layout_Grid_FlowSizeSpec$java_util_ArrayListA.apply(this, [allDCs, defPush, fss, groupsLists]);
return fss;
}, p$3);

Clazz.newMeth(C$, 'getParentSize$net_miginfocom_layout_ComponentWrapper$Z', function (cw, isHor) {
var p=cw.getParent$();
return p != null  ? (isHor ? cw.getWidth$() : cw.getHeight$()) : 0;
}, 1);

Clazz.newMeth(C$, 'getMinPrefMaxSumSize$Z$IAA', function (isHor, sizes) {
var retSizes=Clazz.array(Integer.TYPE, [3]);
var sz=isHor ? this.lc.getWidth$() : this.lc.getHeight$();
for (var i=0; i < sizes.length; i++) {
if (sizes[i] != null ) {
var size=sizes[i];
for (var sType=0; sType <= 2; sType++) {
if (sz.getSize$I(sType) != null ) {
if (i == 0) retSizes[sType]=sz.getSize$I(sType).getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(C$.getParentSize$net_miginfocom_layout_ComponentWrapper$Z(this.container, isHor), this.container, null);
} else {
var s=size[sType];
if (s != -2147471302) {
if (sType == 1) {
var bnd=size[2];
if (bnd != -2147471302 && bnd < s ) s=bnd;
bnd=size[0];
if (bnd > s) s=bnd;
}retSizes[sType]+=s;
}if (size[2] == -2147471302 || retSizes[2] > 2097051 ) retSizes[2]=2097051;
}}
}}
C$.correctMinMax$IA(retSizes);
return retSizes;
}, p$3);

Clazz.newMeth(C$, 'getRowResizeConstraints$net_miginfocom_layout_DimConstraintA', function (specs) {
var resConsts=Clazz.array($I$(4), [specs.length]);
for (var i=0; i < resConsts.length; i++) resConsts[i]=specs[i].resize;

return resConsts;
}, 1);

Clazz.newMeth(C$, 'getComponentResizeConstraints$java_util_ArrayList$Z', function (compWraps, isHor) {
var resConsts=Clazz.array($I$(4), [compWraps.size$()]);
for (var i=0; i < resConsts.length; i++) {
var fc=compWraps.get$I(i).cc;
resConsts[i]=fc.getDimConstraint$Z(isHor).resize;
var dock=fc.getDockSide$();
if (isHor ? (dock == 0 || dock == 2 ) : (dock == 1 || dock == 3 )) {
var dc=resConsts[i];
resConsts[i]=Clazz.new_($I$(4).c$$I$Float$I$Float,[dc.shrinkPrio, dc.shrink, dc.growPrio, $I$(4).WEIGHT_100]);
}}
return resConsts;
}, 1);

Clazz.newMeth(C$, 'getComponentGapPush$java_util_ArrayList$Z', function (compWraps, isHor) {
var barr=Clazz.array(Boolean.TYPE, [compWraps.size$() + 1]);
for (var i=0; i < barr.length; i++) {
var push=i > 0 && p$2.isPushGap$Z$Z.apply(compWraps.get$I(i - 1), [isHor, false]) ;
if (!push && i < (barr.length - 1) ) push=p$2.isPushGap$Z$Z.apply(compWraps.get$I(i), [isHor, true]);
barr[i]=push;
}
return barr;
}, 1);

Clazz.newMeth(C$, 'getRowGaps$net_miginfocom_layout_DimConstraintA$I$Z$ZA', function (specs, refSize, isHor, fillInPushGaps) {
var defGap=isHor ? this.lc.getGridGapX$() : this.lc.getGridGapY$();
if (defGap == null ) defGap=isHor ? $I$(16).getGridGapX$() : $I$(16).getGridGapY$();
var defGapArr=defGap.getPixelSizes$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, this.container, null);
var defIns=!p$3.hasDocks.apply(this, []);
var firstGap=$I$(5).getInsets$net_miginfocom_layout_LC$I$Z(this.lc, isHor ? 1 : 0, defIns);
var lastGap=$I$(5).getInsets$net_miginfocom_layout_LC$I$Z(this.lc, isHor ? 3 : 2, defIns);
var retValues=Clazz.array(Integer.TYPE, [specs.length + 1, null]);
for (var i=0, wgIx=0; i < retValues.length; i++) {
var specBefore=i > 0 ? specs[i - 1] : null;
var specAfter=i < specs.length ? specs[i] : null;
var edgeBefore=(specBefore === C$.DOCK_DIM_CONSTRAINT  || specBefore == null  );
var edgeAfter=(specAfter === C$.DOCK_DIM_CONSTRAINT  || specAfter == null  );
if (edgeBefore && edgeAfter ) continue;
var wrapGapSize=(this.wrapGapMap == null  || isHor == this.lc.isFlowX$()   ? null : this.wrapGapMap.get$O(new Integer(wgIx++)));
if (wrapGapSize == null ) {
var gapBefore=specBefore != null  ? specBefore.getRowGaps$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_BoundSize$I$Z(this.container, null, refSize, false) : null;
var gapAfter=specAfter != null  ? specAfter.getRowGaps$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_BoundSize$I$Z(this.container, null, refSize, true) : null;
if (edgeBefore && gapAfter == null   && firstGap != null  ) {
var bef=firstGap.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, this.container, null);
retValues[i]=Clazz.array(Integer.TYPE, -1, [bef, bef, bef]);
} else if (edgeAfter && gapBefore == null   && firstGap != null  ) {
var aft=lastGap.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, this.container, null);
retValues[i]=Clazz.array(Integer.TYPE, -1, [aft, aft, aft]);
} else {
retValues[i]=gapAfter !== gapBefore  ? C$.mergeSizes$IA$IA(gapAfter, gapBefore) : Clazz.array(Integer.TYPE, -1, [defGapArr[0], defGapArr[1], defGapArr[2]]);
}if (specBefore != null  && specBefore.isGapAfterPush$()  || specAfter != null  && specAfter.isGapBeforePush$()  ) fillInPushGaps[i]=true;
} else {
if (wrapGapSize.isUnset$()) {
retValues[i]=Clazz.array(Integer.TYPE, -1, [defGapArr[0], defGapArr[1], defGapArr[2]]);
} else {
retValues[i]=wrapGapSize.getPixelSizes$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, this.container, null);
}fillInPushGaps[i]=wrapGapSize.getGapPush$();
}}
return retValues;
}, p$3);

Clazz.newMeth(C$, 'getGaps$java_util_ArrayList$Z', function (compWraps, isHor) {
var compCount=compWraps.size$();
var retValues=Clazz.array(Integer.TYPE, [compCount + 1, null]);
retValues[0]=p$2.getGaps$Z$Z.apply(compWraps.get$I(0), [isHor, true]);
for (var i=0; i < compCount; i++) {
var gap1=p$2.getGaps$Z$Z.apply(compWraps.get$I(i), [isHor, false]);
var gap2=i < compCount - 1 ? p$2.getGaps$Z$Z.apply(compWraps.get$I(i + 1), [isHor, true]) : null;
retValues[i + 1]=C$.mergeSizes$IA$IA(gap1, gap2);
}
return retValues;
}, 1);

Clazz.newMeth(C$, 'hasDocks', function () {
return (this.dockOffX > 0 || this.dockOffY > 0  || (this.rowIndexes.last$()).intValue$() > 30000   || (this.colIndexes.last$()).intValue$() > 30000  );
}, p$3);

Clazz.newMeth(C$, 'adjustMinPrefForSpanningComps$net_miginfocom_layout_DimConstraintA$FloatA$net_miginfocom_layout_Grid_FlowSizeSpec$java_util_ArrayListA', function (specs, defPush, fss, groupsLists) {
for (var r=groupsLists.length - 1; r >= 0; r--) {
var groups=groupsLists[r];
for (var group, $group = groups.iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
if (group.span == 1) continue;
var sizes=p$1.getMinPrefMax.apply(group, []);
for (var s=0; s <= 1; s++) {
var cSize=sizes[s];
if (cSize == -2147471302) continue;
var rowSize=0;
var sIx=(r << 1) + 1;
var len=Math.min((group.span << 1), fss.sizes.length - sIx) - 1;
for (var j=sIx; j < sIx + len; j++) {
var sz=fss.sizes[j][s];
if (sz != -2147471302) rowSize+=sz;
}
if (rowSize < cSize && len > 0 ) {
for (var eagerness=0, newRowSize=0; eagerness < 4 && newRowSize < cSize ; eagerness++) newRowSize=p$4.expandSizes$net_miginfocom_layout_DimConstraintA$FloatA$I$I$I$I$I.apply(fss, [specs, defPush, cSize, sIx, len, s, eagerness]);

}}
}
}
}, p$3);

Clazz.newMeth(C$, 'divideIntoLinkedGroups$Z', function (isRows) {
var fromEnd=!(isRows ? this.lc.isTopToBottom$() : $I$(5).isLeftToRight$net_miginfocom_layout_LC$net_miginfocom_layout_ContainerWrapper(this.lc, this.container));
var primIndexes=isRows ? this.rowIndexes : this.colIndexes;
var secIndexes=isRows ? this.colIndexes : this.rowIndexes;
var primDCs=(isRows ? this.rowConstr : this.colConstr).getConstaints$();
var groupLists=Clazz.array($I$(1), [primIndexes.size$()]);
var gIx=0;
for (var i, $i = primIndexes.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
var dc;
if (i >= -30000 && i <= 30000 ) {
dc=primDCs[i >= primDCs.length ? primDCs.length - 1 : i];
} else {
dc=C$.DOCK_DIM_CONSTRAINT;
}var groupList=Clazz.new_($I$(1).c$$I,[4]);
groupLists[gIx++]=groupList;
for (var ix, $ix = secIndexes.iterator$(); $ix.hasNext$()&&((ix=($ix.next$())),1);) {
var cell=isRows ? p$3.getCell$I$I.apply(this, [i, (ix).intValue$()]) : p$3.getCell$I$I.apply(this, [(ix).intValue$(), i]);
if (cell == null  || cell.compWraps.size$() == 0 ) continue;
var span=(isRows ? cell.spany : cell.spanx);
if (span > 1) span=C$.convertSpanToSparseGrid$I$I$java_util_TreeSet(i, span, primIndexes);
var isPar=(cell.flowx == isRows );
if ((!isPar && cell.compWraps.size$() > 1 ) || span > 1 ) {
var linkType=isPar ? 1 : 0;
var lg=Clazz.new_($I$(17).c$$S$I$I$Z$Z,["p," + ix, span, linkType, !isRows, fromEnd]);
p$1.setCompWraps$java_util_ArrayList.apply(lg, [cell.compWraps]);
groupList.add$TE(lg);
} else {
for (var cwIx=0; cwIx < cell.compWraps.size$(); cwIx++) {
var cw=cell.compWraps.get$I(cwIx);
var rowBaselineAlign=(isRows && this.lc.isTopToBottom$() && dc.getAlignOrDefault$Z(!isRows) === $I$(3).BASELINE_IDENTITY   );
var isBaseline=isRows && p$2.isBaselineAlign$Z.apply(cw, [rowBaselineAlign]) ;
var linkCtx=isBaseline ? "baseline" : null;
var foundList=false;
for (var glIx=0, lastGl=groupList.size$() - 1; glIx <= lastGl; glIx++) {
var group=groupList.get$I(glIx);
if (group.linkCtx == linkCtx || linkCtx != null  && linkCtx.equals$O(group.linkCtx)  ) {
p$1.addCompWrap$net_miginfocom_layout_Grid_CompWrap.apply(group, [cw]);
foundList=true;
break;
}}
if (!foundList) {
var linkType=isBaseline ? 2 : 1;
var lg=Clazz.new_($I$(17).c$$S$I$I$Z$Z,[linkCtx, 1, linkType, !isRows, fromEnd]);
p$1.addCompWrap$net_miginfocom_layout_Grid_CompWrap.apply(lg, [cw]);
groupList.add$TE(lg);
}}
}}
}
return groupLists;
}, p$3);

Clazz.newMeth(C$, 'convertSpanToSparseGrid$I$I$java_util_TreeSet', function (curIx, span, indexes) {
var lastIx=curIx + span;
var retSpan=1;
for (var ix, $ix = indexes.iterator$(); $ix.hasNext$()&&((ix=($ix.next$())),1);) {
if ((ix).intValue$() <= curIx ) continue;
if ((ix).intValue$() >= lastIx ) break;
retSpan++;
}
return retSpan;
}, 1);

Clazz.newMeth(C$, 'isCellFree$I$I$java_util_ArrayList', function (r, c, occupiedRects) {
if (p$3.getCell$I$I.apply(this, [r, c]) != null ) return false;
for (var rect, $rect = occupiedRects.iterator$(); $rect.hasNext$()&&((rect=($rect.next$())),1);) {
if (rect[0] <= c && rect[1] <= r  && rect[0] + rect[2] > c  && rect[1] + rect[3] > r ) return false;
}
return true;
}, p$3);

Clazz.newMeth(C$, 'getCell$I$I', function (r, c) {
return this.grid.get$O(new Integer((r << 16) + (c & 65535)));
}, p$3);

Clazz.newMeth(C$, 'setCell$I$I$net_miginfocom_layout_Grid_Cell', function (r, c, cell) {
if (c < 0 || r < 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cell position cannot be negative. row: " + r + ", col: " + c ]);
if (c > 30000 || r > 30000 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cell position out of bounds. Out of cells. row: " + r + ", col: " + c ]);
this.rowIndexes.add$TE(new Integer(r));
this.colIndexes.add$TE(new Integer(c));
this.grid.put$TK$TV(new Integer((r << 16) + (c & 65535)), cell);
}, p$3);

Clazz.newMeth(C$, 'addDockingCell$IA$I$net_miginfocom_layout_Grid_CompWrap', function (dockInsets, side, cw) {
var r;
var c;
var spanx=1;
var spany=1;
switch (side) {
case 0:
case 2:
r=side == 0 ? dockInsets[0]++ : dockInsets[2]--;
c=dockInsets[1];
spanx=dockInsets[3] - dockInsets[1] + 1;
this.colIndexes.add$TE(new Integer(dockInsets[3]));
break;
case 1:
case 3:
c=side == 1 ? dockInsets[1]++ : dockInsets[3]--;
r=dockInsets[0];
spany=dockInsets[2] - dockInsets[0] + 1;
this.rowIndexes.add$TE(new Integer(dockInsets[2]));
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Internal error 123."]);
}
this.rowIndexes.add$TE(new Integer(r));
this.colIndexes.add$TE(new Integer(c));
this.grid.put$TK$TV(new Integer((r << 16) + (c & 65535)), Clazz.new_($I$(13).c$$net_miginfocom_layout_Grid_CompWrap$I$I$Z,[cw, spanx, spany, spanx > 1]));
}, p$3);

Clazz.newMeth(C$, 'layoutBaseline$net_miginfocom_layout_ContainerWrapper$java_util_ArrayList$net_miginfocom_layout_DimConstraint$I$I$I$I', function (parent, compWraps, dc, start, size, sizeType, spanCount) {
var aboveBelow=C$.getBaselineAboveBelow$java_util_ArrayList$I$Z(compWraps, sizeType, true);
var blRowSize=aboveBelow.sum$();
var cc=compWraps.get$I(0).cc;
var align=cc.getVertical$().getAlign$();
if (spanCount == 1 && align == null  ) align=dc.getAlignOrDefault$Z(false);
if (align === $I$(3).BASELINE_IDENTITY ) align=$I$(3).CENTER;
var offset=start + aboveBelow.maxAbove + (align != null  ? Math.max(0, align.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(size - blRowSize, parent, null)) : 0) ;
for (var cw, $cw = compWraps.iterator$(); $cw.hasNext$()&&((cw=($cw.next$())),1);) {
cw.y+=offset;
if (cw.y + cw.h > start + size) cw.h=start + size - cw.y;
}
}, 1);

Clazz.newMeth(C$, 'layoutSerial$net_miginfocom_layout_ContainerWrapper$java_util_ArrayList$net_miginfocom_layout_DimConstraint$I$I$Z$I$Z', function (parent, compWraps, dc, start, size, isHor, spanCount, fromEnd) {
var fss=C$.mergeSizesGapsAndResConstrs$net_miginfocom_layout_ResizeConstraintA$ZA$IAA$IAA(C$.getComponentResizeConstraints$java_util_ArrayList$Z(compWraps, isHor), C$.getComponentGapPush$java_util_ArrayList$Z(compWraps, isHor), C$.getComponentSizes$java_util_ArrayList$Z(compWraps, isHor), C$.getGaps$java_util_ArrayList$Z(compWraps, isHor));
var pushW=dc.isFill$() ? C$.GROW_100 : null;
var sizes=$I$(5).calculateSerial$IAA$net_miginfocom_layout_ResizeConstraintA$FloatA$I$I(fss.sizes, fss.resConstsInclGaps, pushW, 1, size);
C$.setCompWrapBounds$net_miginfocom_layout_ContainerWrapper$IA$java_util_ArrayList$net_miginfocom_layout_UnitValue$I$I$Z$Z(parent, sizes, compWraps, dc.getAlignOrDefault$Z(isHor), start, size, isHor, fromEnd);
}, 1);

Clazz.newMeth(C$, 'setCompWrapBounds$net_miginfocom_layout_ContainerWrapper$IA$java_util_ArrayList$net_miginfocom_layout_UnitValue$I$I$Z$Z', function (parent, allSizes, compWraps, rowAlign, start, size, isHor, fromEnd) {
var totSize=$I$(5).sum$IA(allSizes);
var cc=compWraps.get$I(0).cc;
var align=C$.correctAlign$net_miginfocom_layout_CC$net_miginfocom_layout_UnitValue$Z$Z(cc, rowAlign, isHor, fromEnd);
var cSt=start;
var slack=size - totSize;
if (slack > 0 && align != null  ) {
var al=Math.min(slack, Math.max(0, align.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(slack, parent, null)));
cSt+=(fromEnd ? -al : al);
}for (var i=0, bIx=0, iSz=compWraps.size$(); i < iSz; i++) {
var cw=compWraps.get$I(i);
if (fromEnd) {
cSt-=allSizes[bIx++];
p$2.setDimBounds$I$I$Z.apply(cw, [cSt - allSizes[bIx], allSizes[bIx], isHor]);
cSt-=allSizes[bIx++];
} else {
cSt+=allSizes[bIx++];
p$2.setDimBounds$I$I$Z.apply(cw, [cSt, allSizes[bIx], isHor]);
cSt+=allSizes[bIx++];
}}
}, 1);

Clazz.newMeth(C$, 'layoutParallel$net_miginfocom_layout_ContainerWrapper$java_util_ArrayList$net_miginfocom_layout_DimConstraint$I$I$Z$Z', function (parent, compWraps, dc, start, size, isHor, fromEnd) {
var sizes=Clazz.array(Integer.TYPE, [compWraps.size$(), null]);
for (var i=0; i < sizes.length; i++) {
var cw=compWraps.get$I(i);
var cDc=cw.cc.getDimConstraint$Z(isHor);
var resConstr=Clazz.array($I$(4), -1, [p$2.isPushGap$Z$Z.apply(cw, [isHor, true]) ? C$.GAP_RC_CONST_PUSH : C$.GAP_RC_CONST, cDc.resize, p$2.isPushGap$Z$Z.apply(cw, [isHor, false]) ? C$.GAP_RC_CONST_PUSH : C$.GAP_RC_CONST]);
var sz=Clazz.array(Integer.TYPE, -2, [p$2.getGaps$Z$Z.apply(cw, [isHor, true]), p$2.getSizes$Z.apply(cw, [isHor]), p$2.getGaps$Z$Z.apply(cw, [isHor, false])]);
var pushW=dc.isFill$() ? C$.GROW_100 : null;
sizes[i]=$I$(5).calculateSerial$IAA$net_miginfocom_layout_ResizeConstraintA$FloatA$I$I(sz, resConstr, pushW, 1, size);
}
var rowAlign=dc.getAlignOrDefault$Z(isHor);
C$.setCompWrapBounds$net_miginfocom_layout_ContainerWrapper$IAA$java_util_ArrayList$net_miginfocom_layout_UnitValue$I$I$Z$Z(parent, sizes, compWraps, rowAlign, start, size, isHor, fromEnd);
}, 1);

Clazz.newMeth(C$, 'setCompWrapBounds$net_miginfocom_layout_ContainerWrapper$IAA$java_util_ArrayList$net_miginfocom_layout_UnitValue$I$I$Z$Z', function (parent, sizes, compWraps, rowAlign, start, size, isHor, fromEnd) {
for (var i=0; i < sizes.length; i++) {
var cw=compWraps.get$I(i);
var align=C$.correctAlign$net_miginfocom_layout_CC$net_miginfocom_layout_UnitValue$Z$Z(cw.cc, rowAlign, isHor, fromEnd);
var cSizes=sizes[i];
var gapBef=cSizes[0];
var cSize=cSizes[1];
var gapAft=cSizes[2];
var cSt=fromEnd ? start - gapBef : start + gapBef;
var slack=size - cSize - gapBef - gapAft ;
if (slack > 0 && align != null  ) {
var al=Math.min(slack, Math.max(0, align.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(slack, parent, null)));
cSt+=(fromEnd ? -al : al);
}p$2.setDimBounds$I$I$Z.apply(cw, [fromEnd ? cSt - cSize : cSt, cSize, isHor]);
}
}, 1);

Clazz.newMeth(C$, 'correctAlign$net_miginfocom_layout_CC$net_miginfocom_layout_UnitValue$Z$Z', function (cc, rowAlign, isHor, fromEnd) {
var align=(isHor ? cc.getHorizontal$() : cc.getVertical$()).getAlign$();
if (align == null ) align=rowAlign;
if (align === $I$(3).BASELINE_IDENTITY ) align=$I$(3).CENTER;
if (fromEnd) {
if (align === $I$(3).LEFT ) align=$I$(3).RIGHT;
 else if (align === $I$(3).RIGHT ) align=$I$(3).LEFT;
}return align;
}, 1);

Clazz.newMeth(C$, 'getBaselineAboveBelow$java_util_ArrayList$I$Z', function (compWraps, sType, centerBaseline) {
var maxAbove=-2147483648;
var maxBelow=-2147483648;
for (var cw, $cw = compWraps.iterator$(); $cw.hasNext$()&&((cw=($cw.next$())),1);) {
var height=p$2.getSize$I$Z.apply(cw, [sType, false]);
if (height >= 2097051) return Clazz.new_($I$(18).c$$I$I,[1048525, 1048525]);
var baseline=p$2.getBaseline$I.apply(cw, [sType]);
var above=baseline + p$2.getGapBefore$I$Z.apply(cw, [sType, false]);
maxAbove=Math.max(above, maxAbove);
maxBelow=Math.max(height - baseline + p$2.getGapAfter$I$Z.apply(cw, [sType, false]), maxBelow);
if (centerBaseline) p$2.setDimBounds$I$I$Z.apply(cw, [-baseline, height, false]);
}
return Clazz.new_($I$(18).c$$I$I,[maxAbove, maxBelow]);
}, 1);

Clazz.newMeth(C$, 'getTotalSizeParallel$java_util_ArrayList$I$Z', function (compWraps, sType, isHor) {
var size=sType == 2 ? 2097051 : 0;
for (var cw, $cw = compWraps.iterator$(); $cw.hasNext$()&&((cw=($cw.next$())),1);) {
var cwSize=p$2.getSizeInclGaps$I$Z.apply(cw, [sType, isHor]);
if (cwSize >= 2097051) return 2097051;
if (sType == 2 ? cwSize < size : cwSize > size) size=cwSize;
}
return C$.constrainSize$I(size);
}, 1);

Clazz.newMeth(C$, 'getTotalSizeSerial$java_util_ArrayList$I$Z', function (compWraps, sType, isHor) {
var totSize=0;
for (var i=0, iSz=compWraps.size$(), lastGapAfter=0; i < iSz; i++) {
var wrap=compWraps.get$I(i);
var gapBef=p$2.getGapBefore$I$Z.apply(wrap, [sType, isHor]);
if (gapBef > lastGapAfter) totSize+=gapBef - lastGapAfter;
totSize+=p$2.getSize$I$Z.apply(wrap, [sType, isHor]);
totSize+=(lastGapAfter=p$2.getGapAfter$I$Z.apply(wrap, [sType, isHor]));
if (totSize >= 2097051) return 2097051;
}
return C$.constrainSize$I(totSize);
}, 1);

Clazz.newMeth(C$, 'getTotalGroupsSizeParallel$java_util_ArrayList$I$Z', function (groups, sType, countSpanning) {
var size=sType == 2 ? 2097051 : 0;
for (var group, $group = groups.iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
if (countSpanning || group.span == 1 ) {
var grpSize=p$1.getMinPrefMax.apply(group, [])[sType];
if (grpSize >= 2097051) return 2097051;
if (sType == 2 ? grpSize < size : grpSize > size) size=grpSize;
}}
return C$.constrainSize$I(size);
}, 1);

Clazz.newMeth(C$, 'getComponentSizes$java_util_ArrayList$Z', function (compWraps, isHor) {
var compSizes=Clazz.array(Integer.TYPE, [compWraps.size$(), null]);
for (var i=0; i < compSizes.length; i++) compSizes[i]=p$2.getSizes$Z.apply(compWraps.get$I(i), [isHor]);

return compSizes;
}, 1);

Clazz.newMeth(C$, 'mergeSizesGapsAndResConstrs$net_miginfocom_layout_ResizeConstraintA$ZA$IAA$IAA', function (resConstr, gapPush, minPrefMaxSizes, gapSizes) {
var sizes=Clazz.array(Integer.TYPE, [(minPrefMaxSizes.length << 1) + 1, null]);
var resConstsInclGaps=Clazz.array($I$(4), [sizes.length]);
sizes[0]=gapSizes[0];
for (var i=0, crIx=1; i < minPrefMaxSizes.length; i++, crIx+=2) {
resConstsInclGaps[crIx]=resConstr[i];
sizes[crIx]=minPrefMaxSizes[i];
sizes[crIx + 1]=gapSizes[i + 1];
if (sizes[crIx - 1] != null ) resConstsInclGaps[crIx - 1]=gapPush[i < gapPush.length ? i : gapPush.length - 1] ? C$.GAP_RC_CONST_PUSH : C$.GAP_RC_CONST;
if (i == (minPrefMaxSizes.length - 1) && sizes[crIx + 1] != null  ) resConstsInclGaps[crIx + 1]=gapPush[(i + 1) < gapPush.length ? (i + 1) : gapPush.length - 1] ? C$.GAP_RC_CONST_PUSH : C$.GAP_RC_CONST;
}
for (var i=0; i < sizes.length; i++) {
if (sizes[i] == null ) sizes[i]=Clazz.array(Integer.TYPE, [3]);
}
return Clazz.new_($I$(19).c$$IAA$net_miginfocom_layout_ResizeConstraintA,[sizes, resConstsInclGaps]);
}, 1);

Clazz.newMeth(C$, 'mergeSizes$IA$IA', function (oldValues, newValues) {
if (oldValues == null ) return newValues;
if (newValues == null ) return oldValues;
var ret=Clazz.array(Integer.TYPE, [oldValues.length]);
for (var i=0; i < ret.length; i++) ret[i]=C$.mergeSizes$I$I$Z(oldValues[i], newValues[i], true);

return ret;
}, 1);

Clazz.newMeth(C$, 'mergeSizes$I$I$Z', function (oldValue, newValue, toMax) {
if (oldValue == -2147471302 || oldValue == newValue ) return newValue;
if (newValue == -2147471302) return oldValue;
return toMax != oldValue > newValue  ? newValue : oldValue;
}, 1);

Clazz.newMeth(C$, 'constrainSize$I', function (s) {
return s > 0 ? (s < 2097051 ? s : 2097051) : 0;
}, 1);

Clazz.newMeth(C$, 'correctMinMax$IA', function (s) {
if (s[0] > s[2]) s[0]=s[2];
if (s[1] < s[0]) s[1]=s[0];
if (s[1] > s[2]) s[1]=s[2];
}, 1);

Clazz.newMeth(C$, 'extractSubArray$net_miginfocom_layout_DimConstraintA$FloatA$I$I', function (specs, arr, ix, len) {
if (arr == null  || arr.length < ix + len ) {
var growLastArr=Clazz.array(Float, [len]);
for (var i=ix + len - 1; i >= 0; i-=2) {
var specIx=(i >> 1);
if (specs[specIx] !== C$.DOCK_DIM_CONSTRAINT ) {
growLastArr[i - ix]=$I$(4).WEIGHT_100;
return growLastArr;
}}
return growLastArr;
}var newArr=Clazz.array(Float, [len]);
System.arraycopy$O$I$O$I$I(arr, ix, newArr, 0, len);
return newArr;
}, 1);

Clazz.newMeth(C$, 'putSizesAndIndexes$O$IA$IA$Z', function (parComp, sizes, ixArr, isRows) {
if (C$.PARENT_ROWCOL_SIZES_MAP == null ) C$.PARENT_ROWCOL_SIZES_MAP=Clazz.array($I$(20), -1, [Clazz.new_($I$(20).c$$I,[4]), Clazz.new_($I$(20).c$$I,[4])]);
C$.PARENT_ROWCOL_SIZES_MAP[isRows ? 0 : 1].put$TK$TV(parComp, Clazz.array(Integer.TYPE, -2, [ixArr, sizes]));
}, 1);

Clazz.newMeth(C$, 'getSizesAndIndexes$O$Z', function (parComp, isRows) {
if (C$.PARENT_ROWCOL_SIZES_MAP == null ) return null;
return C$.PARENT_ROWCOL_SIZES_MAP[isRows ? 0 : 1].get$O(parComp);
}, 1);

Clazz.newMeth(C$, 'saveGrid$net_miginfocom_layout_ComponentWrapper$java_util_LinkedHashMap', function (parComp, grid) {
if (C$.PARENT_GRIDPOS_MAP == null ) C$.PARENT_GRIDPOS_MAP=Clazz.new_($I$(20).c$$I,[4]);
var weakCells=Clazz.new_($I$(1).c$$I,[grid.size$()]);
for (var e, $e = grid.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var cell=e.getValue$();
var xyInt=e.getKey$();
if (xyInt != null ) {
var x=((xyInt).intValue$() << 16) >> 16;
var y=(xyInt).intValue$() >> 16;
for (var cw, $cw = cell.compWraps.iterator$(); $cw.hasNext$()&&((cw=($cw.next$())),1);) weakCells.add$TE(Clazz.new_($I$(21).c$$O$I$I$I$I,[cw.comp.getComponent$(), x, y, cell.spanx, cell.spany]));

}}
C$.PARENT_GRIDPOS_MAP.put$TK$TV(parComp.getComponent$(), weakCells);
}, 1);

Clazz.newMeth(C$, 'getGridPositions$O', function (parComp) {
var weakCells=C$.PARENT_GRIDPOS_MAP != null  ? C$.PARENT_GRIDPOS_MAP.get$O(parComp) : null;
if (weakCells == null ) return null;
var retMap=Clazz.new_($I$(14));
for (var wc, $wc = weakCells.iterator$(); $wc.hasNext$()&&((wc=($wc.next$())),1);) {
var component=wc.componentRef.get$();
if (component != null ) retMap.put$TK$TV(component, Clazz.array(Integer.TYPE, -1, [wc.x, wc.y, wc.spanX, wc.spanY]));
}
return retMap;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.Grid, "Cell", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.spanx=0;
this.spany=0;
this.flowx=false;
this.compWraps=null;
this.hasTagged=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.compWraps=Clazz.new_($I$(1).c$$I,[2]);
this.hasTagged=false;
}, 1);

Clazz.newMeth(C$, 'c$$net_miginfocom_layout_Grid_CompWrap', function (cw) {
C$.c$$net_miginfocom_layout_Grid_CompWrap$I$I$Z.apply(this, [cw, 1, 1, true]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$Z', function (spanx, spany, flowx) {
C$.c$$net_miginfocom_layout_Grid_CompWrap$I$I$Z.apply(this, [null, spanx, spany, flowx]);
}, 1);

Clazz.newMeth(C$, 'c$$net_miginfocom_layout_Grid_CompWrap$I$I$Z', function (cw, spanx, spany, flowx) {
C$.$init$.apply(this);
if (cw != null ) this.compWraps.add$TE(cw);
this.spanx=spanx;
this.spany=spany;
this.flowx=flowx;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Grid, "LinkedDimGroup", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.linkCtx=null;
this.span=0;
this.linkType=0;
this.isHor=false;
this.fromEnd=false;
this._compWraps=null;
this.lStart=0;
this.lSize=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._compWraps=Clazz.new_($I$(1).c$$I,[4]);
this.lStart=0;
this.lSize=0;
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I$Z$Z', function (linkCtx, span, linkType, isHor, fromEnd) {
C$.$init$.apply(this);
this.linkCtx=linkCtx;
this.span=span;
this.linkType=linkType;
this.isHor=isHor;
this.fromEnd=fromEnd;
}, 1);

Clazz.newMeth(C$, 'addCompWrap$net_miginfocom_layout_Grid_CompWrap', function (cw) {
this._compWraps.add$TE(cw);
}, p$1);

Clazz.newMeth(C$, 'setCompWraps$java_util_ArrayList', function (cws) {
if (this._compWraps !== cws ) {
this._compWraps.clear$();
this._compWraps.addAll$java_util_Collection(cws);
}}, p$1);

Clazz.newMeth(C$, 'layout$net_miginfocom_layout_DimConstraint$I$I$I', function (dc, start, size, spanCount) {
this.lStart=start;
this.lSize=size;
if (this._compWraps.isEmpty$()) return;
var parent=this._compWraps.get$I(0).comp.getParent$();
if (this.linkType == 1) {
P$.Grid.layoutParallel$net_miginfocom_layout_ContainerWrapper$java_util_ArrayList$net_miginfocom_layout_DimConstraint$I$I$Z$Z(parent, this._compWraps, dc, start, size, this.isHor, this.fromEnd);
} else if (this.linkType == 2) {
P$.Grid.layoutBaseline$net_miginfocom_layout_ContainerWrapper$java_util_ArrayList$net_miginfocom_layout_DimConstraint$I$I$I$I(parent, this._compWraps, dc, start, size, 1, spanCount);
} else {
P$.Grid.layoutSerial$net_miginfocom_layout_ContainerWrapper$java_util_ArrayList$net_miginfocom_layout_DimConstraint$I$I$Z$I$Z(parent, this._compWraps, dc, start, size, this.isHor, spanCount, this.fromEnd);
}}, p$1);

Clazz.newMeth(C$, 'getMinPrefMax', function () {
var sizes=Clazz.array(Integer.TYPE, [3]);
if (!this._compWraps.isEmpty$()) {
for (var sType=0; sType <= 1; sType++) {
if (this.linkType == 1) {
sizes[sType]=P$.Grid.getTotalSizeParallel$java_util_ArrayList$I$Z(this._compWraps, sType, this.isHor);
} else if (this.linkType == 2) {
var aboveBelow=P$.Grid.getBaselineAboveBelow$java_util_ArrayList$I$Z(this._compWraps, sType, false);
sizes[sType]=aboveBelow.sum$();
} else {
sizes[sType]=P$.Grid.getTotalSizeSerial$java_util_ArrayList$I$Z(this._compWraps, sType, this.isHor);
}}
sizes[2]=2097051;
}return sizes;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Grid, "CompWrap", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.comp=null;
this.cc=null;
this.eHideMode=0;
this.useVisualPadding=false;
this.sizesOk=false;
this.isAbsolute=false;
this.gaps=null;
this.horSizes=null;
this.verSizes=null;
this.x=0;
this.y=0;
this.w=0;
this.h=0;
this.forcedPushGaps=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sizesOk=false;
this.horSizes=Clazz.array(Integer.TYPE, [3]);
this.verSizes=Clazz.array(Integer.TYPE, [3]);
this.x=-2147471302;
this.y=-2147471302;
this.w=-2147471302;
this.h=-2147471302;
this.forcedPushGaps=0;
}, 1);

Clazz.newMeth(C$, 'c$$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$I$Z', function (c, cc, eHideMode, useVisualPadding) {
C$.$init$.apply(this);
this.comp=c;
this.cc=cc;
this.eHideMode=eHideMode;
this.useVisualPadding=useVisualPadding;
this.isAbsolute=cc.getHorizontal$().getSize$().isAbsolute$() && cc.getVertical$().getSize$().isAbsolute$() ;
if (eHideMode > 1) {
this.gaps=Clazz.array(Integer.TYPE, [4, null]);
for (var i=0; i < this.gaps.length; i++) this.gaps[i]=Clazz.array(Integer.TYPE, [3]);

}}, 1);

Clazz.newMeth(C$, 'getSizes$Z', function (isHor) {
p$2.validateSize.apply(this, []);
return isHor ? this.horSizes : this.verSizes;
}, p$2);

Clazz.newMeth(C$, 'validateSize', function () {
var callbackSz=p$3.getCallbackSize$net_miginfocom_layout_ComponentWrapper.apply(this.this$0, [this.comp]);
if (this.isAbsolute && this.sizesOk && callbackSz == null   ) return;
if (this.eHideMode <= 0) {
var contentBias=this.comp.getContentBias$();
var sizeHint=contentBias == -1 ? -1 : (contentBias == 0 ? (this.w != -2147471302 ? this.w : this.comp.getWidth$()) : (this.h != -2147471302 ? this.h : this.comp.getHeight$()));
var hBS=(callbackSz != null  && callbackSz[0] != null  ) ? callbackSz[0] : this.cc.getHorizontal$().getSize$();
var vBS=(callbackSz != null  && callbackSz[1] != null  ) ? callbackSz[1] : this.cc.getVertical$().getSize$();
for (var i=0; i <= 2; i++) {
switch (contentBias) {
case -1:
default:
this.horSizes[i]=p$2.getSize$net_miginfocom_layout_BoundSize$I$Z$Z$I.apply(this, [hBS, i, true, this.useVisualPadding, -1]);
this.verSizes[i]=p$2.getSize$net_miginfocom_layout_BoundSize$I$Z$Z$I.apply(this, [vBS, i, false, this.useVisualPadding, -1]);
break;
case 0:
this.horSizes[i]=p$2.getSize$net_miginfocom_layout_BoundSize$I$Z$Z$I.apply(this, [hBS, i, true, this.useVisualPadding, -1]);
this.verSizes[i]=p$2.getSize$net_miginfocom_layout_BoundSize$I$Z$Z$I.apply(this, [vBS, i, false, this.useVisualPadding, sizeHint > 0 ? sizeHint : this.horSizes[i]]);
break;
case 1:
this.verSizes[i]=p$2.getSize$net_miginfocom_layout_BoundSize$I$Z$Z$I.apply(this, [vBS, i, false, this.useVisualPadding, -1]);
this.horSizes[i]=p$2.getSize$net_miginfocom_layout_BoundSize$I$Z$Z$I.apply(this, [hBS, i, true, this.useVisualPadding, sizeHint > 0 ? sizeHint : this.verSizes[i]]);
break;
}
}
P$.Grid.correctMinMax$IA(this.horSizes);
P$.Grid.correctMinMax$IA(this.verSizes);
} else {
$I$(2).fill$IA$I(this.horSizes, 0);
$I$(2).fill$IA$I(this.verSizes, 0);
}this.sizesOk=true;
}, p$2);

Clazz.newMeth(C$, 'getSize$net_miginfocom_layout_BoundSize$I$Z$Z$I', function (uvs, sizeType, isHor, useVP, sizeHint) {
var size;
if (uvs == null  || uvs.getSize$I(sizeType) == null  ) {
switch (sizeType) {
case 0:
size=isHor ? this.comp.getMinimumWidth$I(sizeHint) : this.comp.getMinimumHeight$I(sizeHint);
break;
case 1:
size=isHor ? this.comp.getPreferredWidth$I(sizeHint) : this.comp.getPreferredHeight$I(sizeHint);
break;
default:
size=isHor ? this.comp.getMaximumWidth$I(sizeHint) : this.comp.getMaximumHeight$I(sizeHint);
break;
}
if (useVP) {
var visualPadding=this.comp.getVisualPadding$();
if (visualPadding != null  && visualPadding.length > 0 ) size-=isHor ? (visualPadding[1] + visualPadding[3]) : (visualPadding[0] + visualPadding[2]);
}} else {
var par=this.comp.getParent$();
var refValue=isHor ? par.getWidth$() : par.getHeight$();
size=uvs.getSize$I(sizeType).getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refValue, par, this.comp);
}return size;
}, p$2);

Clazz.newMeth(C$, 'calcGaps$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_CC$S$Z$Z', function (before, befCC, after, aftCC, tag, flowX, isLTR) {
var par=this.comp.getParent$();
var parW=par.getWidth$();
var parH=par.getHeight$();
var befGap=before != null  ? (flowX ? befCC.getHorizontal$() : befCC.getVertical$()).getGapAfter$() : null;
var aftGap=after != null  ? (flowX ? aftCC.getHorizontal$() : aftCC.getVertical$()).getGapBefore$() : null;
p$2.mergeGapSizes$IA$Z$Z.apply(this, [this.cc.getVertical$().getComponentGaps$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_BoundSize$net_miginfocom_layout_ComponentWrapper$S$I$I$Z(par, this.comp, befGap, (flowX ? null : before), tag, parH, 0, isLTR), false, true]);
p$2.mergeGapSizes$IA$Z$Z.apply(this, [this.cc.getHorizontal$().getComponentGaps$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_BoundSize$net_miginfocom_layout_ComponentWrapper$S$I$I$Z(par, this.comp, befGap, (flowX ? before : null), tag, parW, 1, isLTR), true, true]);
p$2.mergeGapSizes$IA$Z$Z.apply(this, [this.cc.getVertical$().getComponentGaps$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_BoundSize$net_miginfocom_layout_ComponentWrapper$S$I$I$Z(par, this.comp, aftGap, (flowX ? null : after), tag, parH, 2, isLTR), false, false]);
p$2.mergeGapSizes$IA$Z$Z.apply(this, [this.cc.getHorizontal$().getComponentGaps$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper$net_miginfocom_layout_BoundSize$net_miginfocom_layout_ComponentWrapper$S$I$I$Z(par, this.comp, aftGap, (flowX ? after : null), tag, parW, 3, isLTR), true, false]);
}, p$2);

Clazz.newMeth(C$, 'setDimBounds$I$I$Z', function (start, size, isHor) {
if (isHor) {
if (start != this.x || this.w != size ) {
this.x=start;
this.w=size;
if (this.comp.getContentBias$() == 0) this.invalidateSizes$();
}} else {
if (start != this.y || this.h != size ) {
this.y=start;
this.h=size;
if (this.comp.getContentBias$() == 1) this.invalidateSizes$();
}}}, p$2);

Clazz.newMeth(C$, 'invalidateSizes$', function () {
this.sizesOk=false;
});

Clazz.newMeth(C$, 'isPushGap$Z$Z', function (isHor, isBefore) {
if (isHor && ((isBefore ? 1 : 2) & this.forcedPushGaps) != 0 ) return true;
var dc=this.cc.getDimConstraint$Z(isHor);
var s=isBefore ? dc.getGapBefore$() : dc.getGapAfter$();
return s != null  && s.getGapPush$() ;
}, p$2);

Clazz.newMeth(C$, 'transferBounds$Z', function (addVisualPadding) {
if (this.cc.isExternal$()) return;
var compX=this.x;
var compY=this.y;
var compW=this.w;
var compH=this.h;
if (addVisualPadding) {
var visualPadding=this.comp.getVisualPadding$();
if (visualPadding != null ) {
compX-=visualPadding[1];
compY-=visualPadding[0];
compW+=(visualPadding[1] + visualPadding[3]);
compH+=(visualPadding[0] + visualPadding[2]);
}}this.comp.setBounds$I$I$I$I(compX, compY, compW, compH);
}, p$2);

Clazz.newMeth(C$, 'setForcedSizes$IA$Z', function (sizes, isHor) {
if (sizes == null ) return;
System.arraycopy$O$I$O$I$I(sizes, 0, p$2.getSizes$Z.apply(this, [isHor]), 0, 3);
this.sizesOk=true;
}, p$2);

Clazz.newMeth(C$, 'setGaps$IA$I', function (minPrefMax, ix) {
if (this.gaps == null ) this.gaps=Clazz.array(Integer.TYPE, -2, [null, null, null, null]);
this.gaps[ix]=minPrefMax;
}, p$2);

Clazz.newMeth(C$, 'mergeGapSizes$IA$Z$Z', function (sizes, isHor, isTL) {
if (this.gaps == null ) this.gaps=Clazz.array(Integer.TYPE, -2, [null, null, null, null]);
if (sizes == null ) return;
var gapIX=p$2.getGapIx$Z$Z.apply(this, [isHor, isTL]);
var oldGaps=this.gaps[gapIX];
if (oldGaps == null ) {
oldGaps=Clazz.array(Integer.TYPE, -1, [0, 0, 2097051]);
this.gaps[gapIX]=oldGaps;
}oldGaps[0]=Math.max(sizes[0], oldGaps[0]);
oldGaps[1]=Math.max(sizes[1], oldGaps[1]);
oldGaps[2]=Math.min(sizes[2], oldGaps[2]);
}, p$2);

Clazz.newMeth(C$, 'getGapIx$Z$Z', function (isHor, isTL) {
return isHor ? (isTL ? 1 : 3) : (isTL ? 0 : 2);
}, p$2);

Clazz.newMeth(C$, 'getSizeInclGaps$I$Z', function (sizeType, isHor) {
return p$2.filter$I$I.apply(this, [sizeType, p$2.getGapBefore$I$Z.apply(this, [sizeType, isHor]) + p$2.getSize$I$Z.apply(this, [sizeType, isHor]) + p$2.getGapAfter$I$Z.apply(this, [sizeType, isHor]) ]);
}, p$2);

Clazz.newMeth(C$, 'getSize$I$Z', function (sizeType, isHor) {
return p$2.filter$I$I.apply(this, [sizeType, p$2.getSizes$Z.apply(this, [isHor])[sizeType]]);
}, p$2);

Clazz.newMeth(C$, 'getGapBefore$I$Z', function (sizeType, isHor) {
var gaps=p$2.getGaps$Z$Z.apply(this, [isHor, true]);
return gaps != null  ? p$2.filter$I$I.apply(this, [sizeType, gaps[sizeType]]) : 0;
}, p$2);

Clazz.newMeth(C$, 'getGapAfter$I$Z', function (sizeType, isHor) {
var gaps=p$2.getGaps$Z$Z.apply(this, [isHor, false]);
return gaps != null  ? p$2.filter$I$I.apply(this, [sizeType, gaps[sizeType]]) : 0;
}, p$2);

Clazz.newMeth(C$, 'getGaps$Z$Z', function (isHor, isTL) {
return this.gaps[p$2.getGapIx$Z$Z.apply(this, [isHor, isTL])];
}, p$2);

Clazz.newMeth(C$, 'filter$I$I', function (sizeType, size) {
if (size == -2147471302) return sizeType != 2 ? 0 : 2097051;
return P$.Grid.constrainSize$I(size);
}, p$2);

Clazz.newMeth(C$, 'isBaselineAlign$Z', function (defValue) {
var g=this.cc.getVertical$().getGrow$();
if (g != null  && g.intValue$() != 0 ) return false;
var al=this.cc.getVertical$().getAlign$();
return (al != null  ? al === $I$(3).BASELINE_IDENTITY  : defValue) && this.comp.hasBaseline$() ;
}, p$2);

Clazz.newMeth(C$, 'getBaseline$I', function (sizeType) {
return this.comp.getBaseline$I$I(p$2.getSize$I$Z.apply(this, [sizeType, true]), p$2.getSize$I$Z.apply(this, [sizeType, false]));
}, p$2);

Clazz.newMeth(C$, 'adjustMinHorSizeUp$I', function (minSize) {
var sz=p$2.getSizes$Z.apply(this, [true]);
if (sz[0] < minSize) sz[0]=minSize;
P$.Grid.correctMinMax$IA(sz);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Grid, "AboveBelow", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.maxAbove=0;
this.maxBelow=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (maxAbove, maxBelow) {
C$.$init$.apply(this);
this.maxAbove=maxAbove;
this.maxBelow=maxBelow;
}, 1);

Clazz.newMeth(C$, 'sum$', function () {
return this.maxAbove + this.maxBelow;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Grid, "FlowSizeSpec", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sizes=null;
this.resConstsInclGaps=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$IAA$net_miginfocom_layout_ResizeConstraintA', function (sizes, resConstsInclGaps) {
C$.$init$.apply(this);
this.sizes=sizes;
this.resConstsInclGaps=resConstsInclGaps;
}, 1);

Clazz.newMeth(C$, 'expandSizes$net_miginfocom_layout_DimConstraintA$FloatA$I$I$I$I$I', function (specs, defGrow, targetSize, fromIx, len, sizeType, eagerness) {
var resConstr=Clazz.array($I$(4), [len]);
var sizesToExpand=Clazz.array(Integer.TYPE, [len, null]);
for (var i=0; i < len; i++) {
var minPrefMax=this.sizes[i + fromIx];
sizesToExpand[i]=Clazz.array(Integer.TYPE, -1, [minPrefMax[sizeType], minPrefMax[1], minPrefMax[2]]);
if (eagerness <= 1 && i % 2 == 0 ) {
var cIx=(i + fromIx - 1) >> 1;
var spec=$I$(5).getIndexSafe$OA$I(specs, cIx);
var sz=spec.getSize$();
if ((sizeType == 0 && sz.getMin$() != null   && sz.getMin$().getUnit$() != 13 ) || (sizeType == 1 && sz.getPreferred$() != null   && sz.getPreferred$().getUnit$() != 14 ) ) {
continue;
}}resConstr[i]=$I$(5).getIndexSafe$OA$I(this.resConstsInclGaps, i + fromIx);
}
var growW=(eagerness == 1 || eagerness == 3 ) ? P$.Grid.extractSubArray$net_miginfocom_layout_DimConstraintA$FloatA$I$I(specs, defGrow, fromIx, len) : null;
var newSizes=$I$(5).calculateSerial$IAA$net_miginfocom_layout_ResizeConstraintA$FloatA$I$I(sizesToExpand, resConstr, growW, 1, targetSize);
var newSize=0;
for (var i=0; i < len; i++) {
var s=newSizes[i];
this.sizes[i + fromIx][sizeType]=s;
newSize+=s;
}
return newSize;
}, p$4);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Grid, "WeakCell", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.componentRef=null;
this.x=0;
this.y=0;
this.spanX=0;
this.spanY=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$I$I$I$I', function (component, x, y, spanX, spanY) {
C$.$init$.apply(this);
this.componentRef=Clazz.new_($I$(6).c$$TT,[component]);
this.x=x;
this.y=y;
this.spanX=spanX;
this.spanY=spanY;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-02-03 08:07:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
