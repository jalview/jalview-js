(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),p$1={},I$=[[0,'net.miginfocom.layout.BoundSize','net.miginfocom.layout.DimConstraint','net.miginfocom.layout.AnimSpec','java.util.ArrayList','net.miginfocom.layout.LayoutUtil','net.miginfocom.layout.ConstraintParser','net.miginfocom.layout.ResizeConstraint','Boolean','net.miginfocom.layout.UnitValue']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CC", null, null, 'java.io.Externalizable');
C$.DEF_GAP=null;
C$.DOCK_SIDES=null;
C$.EMPTY_ARR=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DEF_GAP=$I$(1).NULL_SIZE;
C$.DOCK_SIDES=Clazz.array(String, -1, ["north", "west", "south", "east"]);
C$.EMPTY_ARR=Clazz.array(String, [0]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dock=0;
this.pos=null;
this.padding=null;
this.visualPadding=null;
this.flowX=null;
this.skip=0;
this.split=0;
this.spanX=0;
this.spanY=0;
this.cellX=0;
this.cellY=0;
this.tag=null;
this.id=null;
this.hideMode=0;
this.hor=null;
this.ver=null;
this.newline=null;
this.wrap=null;
this.boundsInGrid=false;
this.external=false;
this.pushX=null;
this.pushY=null;
this.animSpec=null;
this.linkTargets=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.dock=-1;
this.pos=null;
this.padding=null;
this.visualPadding=null;
this.flowX=null;
this.skip=0;
this.split=1;
this.spanX=1;
this.spanY=1;
this.cellX=-1;
this.cellY=0;
this.tag=null;
this.id=null;
this.hideMode=-1;
this.hor=Clazz.new_($I$(2));
this.ver=Clazz.new_($I$(2));
this.newline=null;
this.wrap=null;
this.boundsInGrid=true;
this.external=false;
this.pushX=null;
this.pushY=null;
this.animSpec=$I$(3).DEF;
this.linkTargets=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLinkTargets$', function () {
if (this.linkTargets == null ) {
var targets=Clazz.new_($I$(4).c$$I,[2]);
if (this.pos != null ) {
for (var i=0; i < this.pos.length; i++) p$1.addLinkTargetIDs$java_util_ArrayList$net_miginfocom_layout_UnitValue.apply(this, [targets, this.pos[i]]);

}this.linkTargets=targets.size$() == 0 ? C$.EMPTY_ARR : targets.toArray$TTA(Clazz.array(String, [targets.size$()]));
}return this.linkTargets;
});

Clazz.newMeth(C$, 'addLinkTargetIDs$java_util_ArrayList$net_miginfocom_layout_UnitValue', function (targets, uv) {
if (uv != null ) {
var linkId=uv.getLinkTargetId$();
if (linkId != null ) {
targets.add$TE(linkId);
} else {
for (var i=uv.getSubUnitCount$() - 1; i >= 0; i--) {
var subUv=uv.getSubUnitValue$I(i);
if (subUv.isLinkedDeep$()) p$1.addLinkTargetIDs$java_util_ArrayList$net_miginfocom_layout_UnitValue.apply(this, [targets, subUv]);
}
}}}, p$1);

Clazz.newMeth(C$, 'endGroupX$S', function (s) {
this.hor.setEndGroup$S(s);
return this;
});

Clazz.newMeth(C$, 'sizeGroupX$S', function (s) {
this.hor.setSizeGroup$S(s);
return this;
});

Clazz.newMeth(C$, 'minWidth$S', function (size) {
this.hor.setSize$net_miginfocom_layout_BoundSize($I$(5).derive$net_miginfocom_layout_BoundSize$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(this.hor.getSize$(), $I$(6).parseUnitValue$S$Z(size, true), null, null));
return this;
});

Clazz.newMeth(C$, 'width$S', function (size) {
this.hor.setSize$net_miginfocom_layout_BoundSize($I$(6).parseBoundSize$S$Z$Z(size, false, true));
return this;
});

Clazz.newMeth(C$, 'maxWidth$S', function (size) {
this.hor.setSize$net_miginfocom_layout_BoundSize($I$(5).derive$net_miginfocom_layout_BoundSize$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(this.hor.getSize$(), null, null, $I$(6).parseUnitValue$S$Z(size, true)));
return this;
});

Clazz.newMeth(C$, 'gapX$S$S', function (before, after) {
if (before != null ) this.hor.setGapBefore$net_miginfocom_layout_BoundSize($I$(6).parseBoundSize$S$Z$Z(before, true, true));
if (after != null ) this.hor.setGapAfter$net_miginfocom_layout_BoundSize($I$(6).parseBoundSize$S$Z$Z(after, true, true));
return this;
});

Clazz.newMeth(C$, 'alignX$S', function (align) {
this.hor.setAlign$net_miginfocom_layout_UnitValue($I$(6).parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(align, true, null));
return this;
});

Clazz.newMeth(C$, 'growPrioX$I', function (p) {
this.hor.setGrowPriority$I(p);
return this;
});

Clazz.newMeth(C$, 'growPrio$IA', function (widthHeight) {
switch (widthHeight.length) {
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal argument count: " + widthHeight.length]);
case 2:
this.growPrioY$I(widthHeight[1]);
case 1:
this.growPrioX$I(widthHeight[0]);
}
return this;
});

Clazz.newMeth(C$, 'growX$', function () {
this.hor.setGrow$Float($I$(7).WEIGHT_100);
return this;
});

Clazz.newMeth(C$, 'growX$F', function (w) {
this.hor.setGrow$Float( new Float(w));
return this;
});

Clazz.newMeth(C$, 'grow$FA', function (widthHeight) {
switch (widthHeight.length) {
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal argument count: " + widthHeight.length]);
case 2:
this.growY$F(widthHeight[1]);
case 1:
this.growX$F(widthHeight[0]);
}
return this;
});

Clazz.newMeth(C$, 'shrinkPrioX$I', function (p) {
this.hor.setShrinkPriority$I(p);
return this;
});

Clazz.newMeth(C$, 'shrinkPrio$IA', function (widthHeight) {
switch (widthHeight.length) {
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal argument count: " + widthHeight.length]);
case 2:
this.shrinkPrioY$I(widthHeight[1]);
case 1:
this.shrinkPrioX$I(widthHeight[0]);
}
return this;
});

Clazz.newMeth(C$, 'shrinkX$F', function (w) {
this.hor.setShrink$Float( new Float(w));
return this;
});

Clazz.newMeth(C$, 'shrink$FA', function (widthHeight) {
switch (widthHeight.length) {
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal argument count: " + widthHeight.length]);
case 2:
this.shrinkY$F(widthHeight[1]);
case 1:
this.shrinkX$F(widthHeight[0]);
}
return this;
});

Clazz.newMeth(C$, 'endGroupY$S', function (s) {
this.ver.setEndGroup$S(s);
return this;
});

Clazz.newMeth(C$, 'endGroup$SA', function (xy) {
switch (xy.length) {
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal argument count: " + xy.length]);
case 2:
this.endGroupY$S(xy[1]);
case 1:
this.endGroupX$S(xy[0]);
}
return this;
});

Clazz.newMeth(C$, 'sizeGroupY$S', function (s) {
this.ver.setSizeGroup$S(s);
return this;
});

Clazz.newMeth(C$, 'sizeGroup$SA', function (xy) {
switch (xy.length) {
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal argument count: " + xy.length]);
case 2:
this.sizeGroupY$S(xy[1]);
case 1:
this.sizeGroupX$S(xy[0]);
}
return this;
});

Clazz.newMeth(C$, 'minHeight$S', function (size) {
this.ver.setSize$net_miginfocom_layout_BoundSize($I$(5).derive$net_miginfocom_layout_BoundSize$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(this.ver.getSize$(), $I$(6).parseUnitValue$S$Z(size, false), null, null));
return this;
});

Clazz.newMeth(C$, 'height$S', function (size) {
this.ver.setSize$net_miginfocom_layout_BoundSize($I$(6).parseBoundSize$S$Z$Z(size, false, false));
return this;
});

Clazz.newMeth(C$, 'maxHeight$S', function (size) {
this.ver.setSize$net_miginfocom_layout_BoundSize($I$(5).derive$net_miginfocom_layout_BoundSize$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue(this.ver.getSize$(), null, null, $I$(6).parseUnitValue$S$Z(size, false)));
return this;
});

Clazz.newMeth(C$, 'gapY$S$S', function (before, after) {
if (before != null ) this.ver.setGapBefore$net_miginfocom_layout_BoundSize($I$(6).parseBoundSize$S$Z$Z(before, true, false));
if (after != null ) this.ver.setGapAfter$net_miginfocom_layout_BoundSize($I$(6).parseBoundSize$S$Z$Z(after, true, false));
return this;
});

Clazz.newMeth(C$, 'alignY$S', function (align) {
this.ver.setAlign$net_miginfocom_layout_UnitValue($I$(6).parseUnitValueOrAlign$S$Z$net_miginfocom_layout_UnitValue(align, false, null));
return this;
});

Clazz.newMeth(C$, 'growPrioY$I', function (p) {
this.ver.setGrowPriority$I(p);
return this;
});

Clazz.newMeth(C$, 'growY$', function () {
this.ver.setGrow$Float($I$(7).WEIGHT_100);
return this;
});

Clazz.newMeth(C$, 'growY$F', function (w) {
this.ver.setGrow$Float(new Float(w));
return this;
});

Clazz.newMeth(C$, 'growY$Float', function (w) {
this.ver.setGrow$Float(w);
return this;
});

Clazz.newMeth(C$, 'shrinkPrioY$I', function (p) {
this.ver.setShrinkPriority$I(p);
return this;
});

Clazz.newMeth(C$, 'shrinkY$F', function (w) {
this.ver.setShrink$Float( new Float(w));
return this;
});

Clazz.newMeth(C$, 'hideMode$I', function (mode) {
this.setHideMode$I(mode);
return this;
});

Clazz.newMeth(C$, 'id$S', function (s) {
this.setId$S(s);
return this;
});

Clazz.newMeth(C$, 'tag$S', function (tag) {
this.setTag$S(tag);
return this;
});

Clazz.newMeth(C$, 'cell$IA', function (colRowWidthHeight) {
switch (colRowWidthHeight.length) {
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal argument count: " + colRowWidthHeight.length]);
case 4:
this.setSpanY$I(colRowWidthHeight[3]);
case 3:
this.setSpanX$I(colRowWidthHeight[2]);
case 2:
this.setCellY$I(colRowWidthHeight[1]);
case 1:
this.setCellX$I(colRowWidthHeight[0]);
}
return this;
});

Clazz.newMeth(C$, 'span$IA', function (cells) {
if (cells == null  || cells.length == 0 ) {
this.setSpanX$I(2097051);
this.setSpanY$I(1);
} else if (cells.length == 1) {
this.setSpanX$I(cells[0]);
this.setSpanY$I(1);
} else {
this.setSpanX$I(cells[0]);
this.setSpanY$I(cells[1]);
}return this;
});

Clazz.newMeth(C$, 'gap$SA', function (args) {
switch (args.length) {
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal argument count: " + args.length]);
case 4:
this.gapBottom$S(args[3]);
case 3:
this.gapTop$S(args[2]);
case 2:
this.gapRight$S(args[1]);
case 1:
this.gapLeft$S(args[0]);
}
return this;
});

Clazz.newMeth(C$, 'gapBefore$S', function (boundsSize) {
this.hor.setGapBefore$net_miginfocom_layout_BoundSize($I$(6).parseBoundSize$S$Z$Z(boundsSize, true, true));
return this;
});

Clazz.newMeth(C$, 'gapAfter$S', function (boundsSize) {
this.hor.setGapAfter$net_miginfocom_layout_BoundSize($I$(6).parseBoundSize$S$Z$Z(boundsSize, true, true));
return this;
});

Clazz.newMeth(C$, 'gapTop$S', function (boundsSize) {
this.ver.setGapBefore$net_miginfocom_layout_BoundSize($I$(6).parseBoundSize$S$Z$Z(boundsSize, true, false));
return this;
});

Clazz.newMeth(C$, 'gapLeft$S', function (boundsSize) {
this.hor.setGapBefore$net_miginfocom_layout_BoundSize($I$(6).parseBoundSize$S$Z$Z(boundsSize, true, true));
return this;
});

Clazz.newMeth(C$, 'gapBottom$S', function (boundsSize) {
this.ver.setGapAfter$net_miginfocom_layout_BoundSize($I$(6).parseBoundSize$S$Z$Z(boundsSize, true, false));
return this;
});

Clazz.newMeth(C$, 'gapRight$S', function (boundsSize) {
this.hor.setGapAfter$net_miginfocom_layout_BoundSize($I$(6).parseBoundSize$S$Z$Z(boundsSize, true, true));
return this;
});

Clazz.newMeth(C$, 'spanY$', function () {
return this.spanY$I(2097051);
});

Clazz.newMeth(C$, 'spanY$I', function (cells) {
this.setSpanY$I(cells);
return this;
});

Clazz.newMeth(C$, 'spanX$', function () {
return this.spanX$I(2097051);
});

Clazz.newMeth(C$, 'spanX$I', function (cells) {
this.setSpanX$I(cells);
return this;
});

Clazz.newMeth(C$, 'push$', function () {
return this.pushX$().pushY$();
});

Clazz.newMeth(C$, 'push$Float$Float', function (weightX, weightY) {
return this.pushX$Float(weightX).pushY$Float(weightY);
});

Clazz.newMeth(C$, 'pushY$', function () {
return this.pushY$Float($I$(7).WEIGHT_100);
});

Clazz.newMeth(C$, 'pushY$Float', function (weight) {
this.setPushY$Float(weight);
return this;
});

Clazz.newMeth(C$, 'pushX$', function () {
return this.pushX$Float($I$(7).WEIGHT_100);
});

Clazz.newMeth(C$, 'pushX$Float', function (weight) {
this.setPushX$Float(weight);
return this;
});

Clazz.newMeth(C$, 'split$I', function (parts) {
this.setSplit$I(parts);
return this;
});

Clazz.newMeth(C$, 'split$', function () {
this.setSplit$I(2097051);
return this;
});

Clazz.newMeth(C$, 'skip$I', function (cells) {
this.setSkip$I(cells);
return this;
});

Clazz.newMeth(C$, 'skip$', function () {
this.setSkip$I(1);
return this;
});

Clazz.newMeth(C$, 'external$', function () {
this.setExternal$Z(true);
return this;
});

Clazz.newMeth(C$, 'flowX$', function () {
this.setFlowX$Boolean($I$(8).TRUE);
return this;
});

Clazz.newMeth(C$, 'flowY$', function () {
this.setFlowX$Boolean($I$(8).FALSE);
return this;
});

Clazz.newMeth(C$, 'grow$', function () {
this.growX$();
this.growY$();
return this;
});

Clazz.newMeth(C$, 'newline$', function () {
this.setNewline$Z(true);
return this;
});

Clazz.newMeth(C$, 'newline$S', function (gapSize) {
var bs=$I$(6).parseBoundSize$S$Z$Z(gapSize, true, (this.flowX != null  && (this.flowX).booleanValue$() === false  ));
if (bs != null ) {
this.setNewlineGapSize$net_miginfocom_layout_BoundSize(bs);
} else {
this.setNewline$Z(true);
}return this;
});

Clazz.newMeth(C$, 'wrap$', function () {
this.setWrap$Z(true);
return this;
});

Clazz.newMeth(C$, 'wrap$S', function (gapSize) {
var bs=$I$(6).parseBoundSize$S$Z$Z(gapSize, true, (this.flowX != null  && (this.flowX).booleanValue$() === false  ));
if (bs != null ) {
this.setWrapGapSize$net_miginfocom_layout_BoundSize(bs);
} else {
this.setWrap$Z(true);
}return this;
});

Clazz.newMeth(C$, 'dockNorth$', function () {
this.setDockSide$I(0);
return this;
});

Clazz.newMeth(C$, 'dockWest$', function () {
this.setDockSide$I(1);
return this;
});

Clazz.newMeth(C$, 'dockSouth$', function () {
this.setDockSide$I(2);
return this;
});

Clazz.newMeth(C$, 'dockEast$', function () {
this.setDockSide$I(3);
return this;
});

Clazz.newMeth(C$, 'x$S', function (x) {
return p$1.corrPos$S$I.apply(this, [x, 0]);
});

Clazz.newMeth(C$, 'y$S', function (y) {
return p$1.corrPos$S$I.apply(this, [y, 1]);
});

Clazz.newMeth(C$, 'x2$S', function (x2) {
return p$1.corrPos$S$I.apply(this, [x2, 2]);
});

Clazz.newMeth(C$, 'y2$S', function (y2) {
return p$1.corrPos$S$I.apply(this, [y2, 3]);
});

Clazz.newMeth(C$, 'corrPos$S$I', function (uv, ix) {
var b=this.getPos$();
if (b == null ) b=Clazz.array($I$(9), [4]);
b[ix]=$I$(6).parseUnitValue$S$Z(uv, (ix % 2 == 0));
this.setPos$net_miginfocom_layout_UnitValueA(b);
this.setBoundsInGrid$Z(true);
return this;
}, p$1);

Clazz.newMeth(C$, 'pos$S$S', function (x, y) {
var b=this.getPos$();
if (b == null ) b=Clazz.array($I$(9), [4]);
b[0]=$I$(6).parseUnitValue$S$Z(x, true);
b[1]=$I$(6).parseUnitValue$S$Z(y, false);
this.setPos$net_miginfocom_layout_UnitValueA(b);
this.setBoundsInGrid$Z(false);
return this;
});

Clazz.newMeth(C$, 'pos$S$S$S$S', function (x, y, x2, y2) {
this.setPos$net_miginfocom_layout_UnitValueA(Clazz.array($I$(9), -1, [$I$(6).parseUnitValue$S$Z(x, true), $I$(6).parseUnitValue$S$Z(y, false), $I$(6).parseUnitValue$S$Z(x2, true), $I$(6).parseUnitValue$S$Z(y2, false)]));
this.setBoundsInGrid$Z(false);
return this;
});

Clazz.newMeth(C$, 'pad$I$I$I$I', function (top, left, bottom, right) {
this.setPadding$net_miginfocom_layout_UnitValueA(Clazz.array($I$(9), -1, [Clazz.new_($I$(9).c$$F,[top]), Clazz.new_($I$(9).c$$F,[left]), Clazz.new_($I$(9).c$$F,[bottom]), Clazz.new_($I$(9).c$$F,[right])]));
return this;
});

Clazz.newMeth(C$, 'pad$S', function (pad) {
this.setPadding$net_miginfocom_layout_UnitValueA(pad != null  ? $I$(6).parseInsets$S$Z(pad, false) : null);
return this;
});

Clazz.newMeth(C$, 'getHorizontal$', function () {
return this.hor;
});

Clazz.newMeth(C$, 'setHorizontal$net_miginfocom_layout_DimConstraint', function (h) {
this.hor=h != null  ? h : Clazz.new_($I$(2));
});

Clazz.newMeth(C$, 'getVertical$', function () {
return this.ver;
});

Clazz.newMeth(C$, 'setVertical$net_miginfocom_layout_DimConstraint', function (v) {
this.ver=v != null  ? v : Clazz.new_($I$(2));
});

Clazz.newMeth(C$, 'getDimConstraint$Z', function (isHor) {
return isHor ? this.hor : this.ver;
});

Clazz.newMeth(C$, 'getPos$', function () {
return this.pos != null  ? Clazz.array($I$(9), -1, [this.pos[0], this.pos[1], this.pos[2], this.pos[3]]) : null;
});

Clazz.newMeth(C$, 'setPos$net_miginfocom_layout_UnitValueA', function (pos) {
this.pos=pos != null  ? Clazz.array($I$(9), -1, [pos[0], pos[1], pos[2], pos[3]]) : null;
this.linkTargets=null;
});

Clazz.newMeth(C$, 'isBoundsInGrid$', function () {
return this.boundsInGrid;
});

Clazz.newMeth(C$, 'setBoundsInGrid$Z', function (b) {
this.boundsInGrid=b;
});

Clazz.newMeth(C$, 'getCellX$', function () {
return this.cellX;
});

Clazz.newMeth(C$, 'setCellX$I', function (x) {
this.cellX=x;
});

Clazz.newMeth(C$, 'getCellY$', function () {
return this.cellX < 0 ? -1 : this.cellY;
});

Clazz.newMeth(C$, 'setCellY$I', function (y) {
if (y < 0) this.cellX=-1;
this.cellY=y < 0 ? 0 : y;
});

Clazz.newMeth(C$, 'getDockSide$', function () {
return this.dock;
});

Clazz.newMeth(C$, 'setDockSide$I', function (side) {
if (side < -1 || side > 3 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal dock side: " + side]);
this.dock=side;
});

Clazz.newMeth(C$, 'isExternal$', function () {
return this.external;
});

Clazz.newMeth(C$, 'setExternal$Z', function (b) {
this.external=b;
});

Clazz.newMeth(C$, 'getFlowX$', function () {
return this.flowX;
});

Clazz.newMeth(C$, 'setFlowX$Boolean', function (b) {
this.flowX=b;
});

Clazz.newMeth(C$, 'getHideMode$', function () {
return this.hideMode;
});

Clazz.newMeth(C$, 'setHideMode$I', function (mode) {
if (mode < -1 || mode > 3 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Wrong hideMode: " + mode]);
this.hideMode=mode;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (id) {
this.id=id;
});

Clazz.newMeth(C$, 'getPadding$', function () {
return this.padding != null  ? Clazz.array($I$(9), -1, [this.padding[0], this.padding[1], this.padding[2], this.padding[3]]) : null;
});

Clazz.newMeth(C$, 'setPadding$net_miginfocom_layout_UnitValueA', function (sides) {
this.padding=sides != null  ? Clazz.array($I$(9), -1, [sides[0], sides[1], sides[2], sides[3]]) : null;
});

Clazz.newMeth(C$, 'getVisualPadding$', function () {
return this.visualPadding != null  ? Clazz.array($I$(9), -1, [this.visualPadding[0], this.visualPadding[1], this.visualPadding[2], this.visualPadding[3]]) : null;
});

Clazz.newMeth(C$, 'setVisualPadding$net_miginfocom_layout_UnitValueA', function (sides) {
this.visualPadding=sides != null  ? Clazz.array($I$(9), -1, [sides[0], sides[1], sides[2], sides[3]]) : null;
});

Clazz.newMeth(C$, 'getSkip$', function () {
return this.skip;
});

Clazz.newMeth(C$, 'setSkip$I', function (cells) {
this.skip=cells;
});

Clazz.newMeth(C$, 'getSpanX$', function () {
return this.spanX;
});

Clazz.newMeth(C$, 'setSpanX$I', function (cells) {
this.spanX=cells;
});

Clazz.newMeth(C$, 'getSpanY$', function () {
return this.spanY;
});

Clazz.newMeth(C$, 'setSpanY$I', function (cells) {
this.spanY=cells;
});

Clazz.newMeth(C$, 'getPushX$', function () {
return this.pushX;
});

Clazz.newMeth(C$, 'setPushX$Float', function (weight) {
this.pushX=weight;
});

Clazz.newMeth(C$, 'getPushY$', function () {
return this.pushY;
});

Clazz.newMeth(C$, 'setPushY$Float', function (weight) {
this.pushY=weight;
});

Clazz.newMeth(C$, 'getSplit$', function () {
return this.split;
});

Clazz.newMeth(C$, 'setSplit$I', function (parts) {
this.split=parts;
});

Clazz.newMeth(C$, 'getTag$', function () {
return this.tag;
});

Clazz.newMeth(C$, 'setTag$S', function (tag) {
this.tag=tag;
});

Clazz.newMeth(C$, 'isWrap$', function () {
return this.wrap != null ;
});

Clazz.newMeth(C$, 'setWrap$Z', function (b) {
this.wrap=b ? (this.wrap == null  ? C$.DEF_GAP : this.wrap) : null;
});

Clazz.newMeth(C$, 'getWrapGapSize$', function () {
return this.wrap === C$.DEF_GAP  ? null : this.wrap;
});

Clazz.newMeth(C$, 'setWrapGapSize$net_miginfocom_layout_BoundSize', function (s) {
this.wrap=s == null  ? (this.wrap != null  ? C$.DEF_GAP : null) : s;
});

Clazz.newMeth(C$, 'isNewline$', function () {
return this.newline != null ;
});

Clazz.newMeth(C$, 'setNewline$Z', function (b) {
this.newline=b ? (this.newline == null  ? C$.DEF_GAP : this.newline) : null;
});

Clazz.newMeth(C$, 'getNewlineGapSize$', function () {
return this.newline === C$.DEF_GAP  ? null : this.newline;
});

Clazz.newMeth(C$, 'setNewlineGapSize$net_miginfocom_layout_BoundSize', function (s) {
this.newline=s == null  ? (this.newline != null  ? C$.DEF_GAP : null) : s;
});

Clazz.newMeth(C$, 'getAnimSpec$', function () {
return this.animSpec;
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
;Clazz.setTVer('3.2.4.07');//Created 2019-02-03 08:07:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
