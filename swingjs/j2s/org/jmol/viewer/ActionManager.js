(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},p$2={},I$=[[0,'org.jmol.viewer.MouseState','org.jmol.util.Rectangle','org.jmol.viewer.Viewer','org.jmol.viewer.binding.JmolBinding','org.jmol.viewer.binding.Binding','org.jmol.viewer.Gesture','org.jmol.i18n.GT','org.jmol.util.BSUtil','org.jmol.thread.HoverWatcherThread','org.jmol.util.Logger','javajs.util.AU','javajs.util.PT','org.jmol.util.Escape','org.jmol.util.Point3fi','org.jmol.api.Interface','org.jmol.script.ScriptEval','org.jmol.script.SV','org.jmol.viewer.MotionPoint']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ActionManager", null, null, 'org.jmol.api.EventManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.apm=1;
this.pickingStyleSelect=0;
this.pickingStyleMeasure=5;
this.rootPickingStyle=0;
this.gestureSwipeFactor=1.0;
this.mouseDragFactor=1.0;
this.mouseWheelFactor=1.15;
this.current=Clazz.new_($I$(1,1).c$$S,["current"]);
this.moved=Clazz.new_($I$(1,1).c$$S,["moved"]);
this.clicked=Clazz.new_($I$(1,1).c$$S,["clicked"]);
this.pressed=Clazz.new_($I$(1,1).c$$S,["pressed"]);
this.dragged=Clazz.new_($I$(1,1).c$$S,["dragged"]);
this.measuresEnabled=true;
this.hoverActive=false;
this.dragAtomIndex=-1;
this.rubberbandSelectionMode=false;
this.rectRubber=Clazz.new_($I$(2,1));
this.isAltKeyReleased=true;
this.selectionWorking=false;
},1);

C$.$fields$=[['Z',['haveMultiTouchInput','isMultiTouch','drawMode','labelMode','dragSelectedMode','measuresEnabled','haveSelection','hoverActive','mkBondPressed','rubberbandSelectionMode','isAltKeyReleased','keyProcessing','isMultiTouchClient','isMultiTouchServer','zoomTrigger','selectionWorking'],'F',['gestureSwipeFactor','mouseDragFactor','mouseWheelFactor'],'I',['LEFT_CLICKED','LEFT_DRAGGED','apm','bondPickingMode','pickingStyle','pickingStyleSelect','pickingStyleMeasure','rootPickingStyle','pressedCount','clickedCount','dragAtomIndex','pressAction','dragAction','clickAction'],'O',['vwr','org.jmol.viewer.Viewer','b','org.jmol.viewer.binding.Binding','+jmolBinding','+pfaatBinding','+dragBinding','+rasmolBinding','+predragBinding','hoverWatcherThread','Thread','dragGesture','org.jmol.viewer.Gesture','current','org.jmol.viewer.MouseState','+moved','+clicked','+pressed','+dragged','mp','org.jmol.modelset.MeasurementPending','rectRubber','org.jmol.util.Rectangle','measurementQueued','org.jmol.modelset.MeasurementPending']]
,['O',['actionInfo','String[]','+actionNames','+pickingModeNames','+pickingStyleNames']]]

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer$S', function (vwr, commandOptions) {
this.vwr=vwr;
if (!$I$(3).isJS) this.createActions$();
this.setBinding$org_jmol_viewer_binding_Binding(this.jmolBinding=Clazz.new_($I$(4,1)));
this.LEFT_CLICKED=$I$(5).getMouseAction$I$I$I(1, 16, 2);
this.LEFT_DRAGGED=$I$(5).getMouseAction$I$I$I(1, 16, 1);
this.dragGesture=Clazz.new_($I$(6,1).c$$I$org_jmol_viewer_Viewer,[20, vwr]);
});

Clazz.newMeth(C$, 'checkHover$', function () {
if (this.zoomTrigger) {
this.zoomTrigger=false;
if (this.vwr.currentCursor == 8) this.vwr.setCursor$I(0);
this.vwr.setInMotion$Z(false);
return;
}if (!this.vwr.getInMotion$Z(true) && !this.vwr.tm.spinOn && !this.vwr.tm.navOn && !this.vwr.checkObjectHovered$I$I(this.current.x, this.current.y)  ) {
var atomIndex=this.vwr.findNearestAtomIndex$I$I(this.current.x, this.current.y);
if (atomIndex < 0) return;
var isLabel=(this.apm == 2 && this.bnd$I$IA($I$(5).getMouseAction$I$I$I(this.clickedCount, this.moved.modifiers, 1), [10]) );
this.vwr.hoverOn$I$Z(atomIndex, isLabel);
}});

Clazz.newMeth(C$, 'processMultitouchEvent$I$I$I$I$javajs_util_P3$J', function (groupID, eventType, touchID, iData, pt, time) {
});

Clazz.newMeth(C$, 'bind$S$S', function (desc, name) {
var jmolAction=C$.getActionFromName$S(name);
var mouseAction=$I$(5).getMouseActionStr$S(desc);
if (mouseAction == 0) return;
if (jmolAction >= 0) {
this.b.bindAction$I$I(mouseAction, jmolAction);
} else {
this.b.bindName$I$S(mouseAction, name);
}});

Clazz.newMeth(C$, 'clearBindings$', function () {
this.setBinding$org_jmol_viewer_binding_Binding(this.jmolBinding=Clazz.new_($I$(4,1)));
this.pfaatBinding=null;
this.dragBinding=null;
this.rasmolBinding=null;
});

Clazz.newMeth(C$, 'unbindAction$S$S', function (desc, name) {
if (desc == null  && name == null  ) {
this.clearBindings$();
return;
}var jmolAction=C$.getActionFromName$S(name);
var mouseAction=$I$(5).getMouseActionStr$S(desc);
if (jmolAction >= 0) this.b.unbindAction$I$I(mouseAction, jmolAction);
 else if (mouseAction != 0) this.b.unbindName$I$S(mouseAction, name);
if (name == null ) this.b.unbindUserAction$S(desc);
});

Clazz.newMeth(C$, 'newAction$I$S$S', function (i, name, info) {
C$.actionInfo[i]=info;
C$.actionNames[i]=name;
}, 1);

Clazz.newMeth(C$, 'createActions$', function () {
if (C$.actionInfo[0] != null ) return;
C$.newAction$I$S$S(0, "_assignNew", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["assign/new atom or bond (requires {0})"],$I$(7).$$S), "set picking assignAtom_??/assignBond_?"],$I$(7).o$S$O));
C$.newAction$I$S$S(1, "_center", $I$(7).$$S("center"));
C$.newAction$I$S$S(2, "_clickFrank", (function(a,f){return f.apply(null,a)})(["pop up recent context menu (click on Jmol frank)"],$I$(7).$$S));
C$.newAction$I$S$S(4, "_deleteAtom", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["delete atom (requires {0})"],$I$(7).$$S), "set picking DELETE ATOM"],$I$(7).o$S$O));
C$.newAction$I$S$S(5, "_deleteBond", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["delete bond (requires {0})"],$I$(7).$$S), "set picking DELETE BOND"],$I$(7).o$S$O));
C$.newAction$I$S$S(6, "_depth", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["adjust depth (back plane; requires {0})"],$I$(7).$$S), "SLAB ON"],$I$(7).o$S$O));
C$.newAction$I$S$S(7, "_dragAtom", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["move atom (requires {0})"],$I$(7).$$S), "set picking DRAGATOM"],$I$(7).o$S$O));
C$.newAction$I$S$S(8, "_dragDrawObject", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["move whole DRAW object (requires {0})"],$I$(7).$$S), "set picking DRAW"],$I$(7).o$S$O));
C$.newAction$I$S$S(9, "_dragDrawPoint", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["move specific DRAW point (requires {0})"],$I$(7).$$S), "set picking DRAW"],$I$(7).o$S$O));
C$.newAction$I$S$S(10, "_dragLabel", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["move label (requires {0})"],$I$(7).$$S), "set picking LABEL"],$I$(7).o$S$O));
C$.newAction$I$S$S(11, "_dragMinimize", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["move atom and minimize molecule (requires {0})"],$I$(7).$$S), "set picking DRAGMINIMIZE"],$I$(7).o$S$O));
C$.newAction$I$S$S(12, "_dragMinimizeMolecule", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["move and minimize molecule (requires {0})"],$I$(7).$$S), "set picking DRAGMINIMIZEMOLECULE"],$I$(7).o$S$O));
C$.newAction$I$S$S(13, "_dragSelected", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["move selected atoms (requires {0})"],$I$(7).$$S), "set DRAGSELECTED"],$I$(7).o$S$O));
C$.newAction$I$S$S(14, "_dragZ", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["drag atoms in Z direction (requires {0})"],$I$(7).$$S), "set DRAGSELECTED"],$I$(7).o$S$O));
C$.newAction$I$S$S(15, "_multiTouchSimulation", $I$(7).$$S("simulate multi-touch using the mouse)"));
C$.newAction$I$S$S(16, "_navTranslate", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["translate navigation point (requires {0} and {1})"],$I$(7).$$S), Clazz.array(String, -1, ["set NAVIGATIONMODE", "set picking NAVIGATE"])],$I$(7).o$S$O));
C$.newAction$I$S$S(17, "_pickAtom", $I$(7).$$S("pick an atom"));
C$.newAction$I$S$S(3, "_pickConnect", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["connect atoms (requires {0})"],$I$(7).$$S), "set picking CONNECT"],$I$(7).o$S$O));
C$.newAction$I$S$S(18, "_pickIsosurface", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["pick an ISOSURFACE point (requires {0}"],$I$(7).$$S), "set DRAWPICKING"],$I$(7).o$S$O));
C$.newAction$I$S$S(19, "_pickLabel", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["pick a label to toggle it hidden/displayed (requires {0})"],$I$(7).$$S), "set picking LABEL"],$I$(7).o$S$O));
C$.newAction$I$S$S(20, "_pickMeasure", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["pick an atom to include it in a measurement (after starting a measurement or after {0})"],$I$(7).$$S), "set picking DISTANCE/ANGLE/TORSION"],$I$(7).o$S$O));
C$.newAction$I$S$S(21, "_pickNavigate", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["pick a point or atom to navigate to (requires {0})"],$I$(7).$$S), "set NAVIGATIONMODE"],$I$(7).o$S$O));
C$.newAction$I$S$S(22, "_pickPoint", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["pick a DRAW point (for measurements) (requires {0}"],$I$(7).$$S), "set DRAWPICKING"],$I$(7).o$S$O));
C$.newAction$I$S$S(23, "_popupMenu", $I$(7).$$S("pop up the full context menu"));
C$.newAction$I$S$S(24, "_reset", (function(a,f){return f.apply(null,a)})(["reset (when clicked off the model)"],$I$(7).$$S));
C$.newAction$I$S$S(25, "_rotate", $I$(7).$$S("rotate"));
C$.newAction$I$S$S(26, "_rotateBranch", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["rotate branch around bond (requires {0})"],$I$(7).$$S), "set picking ROTATEBOND"],$I$(7).o$S$O));
C$.newAction$I$S$S(27, "_rotateSelected", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["rotate selected atoms (requires {0})"],$I$(7).$$S), "set DRAGSELECTED"],$I$(7).o$S$O));
C$.newAction$I$S$S(28, "_rotateZ", $I$(7).$$S("rotate Z"));
C$.newAction$I$S$S(29, "_rotateZorZoom", (function(a,f){return f.apply(null,a)})(["rotate Z (horizontal motion of mouse) or zoom (vertical motion of mouse)"],$I$(7).$$S));
C$.newAction$I$S$S(30, "_select", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["select an atom (requires {0})"],$I$(7).$$S), "set pickingStyle EXTENDEDSELECT"],$I$(7).o$S$O));
C$.newAction$I$S$S(31, "_selectAndDrag", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["select and drag atoms (requires {0})"],$I$(7).$$S), "set DRAGSELECTED"],$I$(7).o$S$O));
C$.newAction$I$S$S(32, "_selectAndNot", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["unselect this group of atoms (requires {0})"],$I$(7).$$S), "set pickingStyle DRAG/EXTENDEDSELECT"],$I$(7).o$S$O));
C$.newAction$I$S$S(33, "_selectNone", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["select NONE (requires {0})"],$I$(7).$$S), "set pickingStyle EXTENDEDSELECT"],$I$(7).o$S$O));
C$.newAction$I$S$S(34, "_selectOr", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["add this group of atoms to the set of selected atoms (requires {0})"],$I$(7).$$S), "set pickingStyle DRAG/EXTENDEDSELECT"],$I$(7).o$S$O));
C$.newAction$I$S$S(35, "_selectToggle", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["toggle selection (requires {0})"],$I$(7).$$S), "set pickingStyle DRAG/EXTENDEDSELECT/RASMOL"],$I$(7).o$S$O));
C$.newAction$I$S$S(36, "_selectToggleOr", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["if all are selected, unselect all, otherwise add this group of atoms to the set of selected atoms (requires {0})"],$I$(7).$$S), "set pickingStyle DRAG"],$I$(7).o$S$O));
C$.newAction$I$S$S(37, "_setMeasure", $I$(7).$$S("pick an atom to initiate or conclude a measurement"));
C$.newAction$I$S$S(38, "_slab", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["adjust slab (front plane; requires {0})"],$I$(7).$$S), "SLAB ON"],$I$(7).o$S$O));
C$.newAction$I$S$S(39, "_slabAndDepth", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["move slab/depth window (both planes; requires {0})"],$I$(7).$$S), "SLAB ON"],$I$(7).o$S$O));
C$.newAction$I$S$S(40, "_slideZoom", (function(a,f){return f.apply(null,a)})(["zoom (along right edge of window)"],$I$(7).$$S));
C$.newAction$I$S$S(41, "_spinDrawObjectCCW", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["click on two points to spin around axis counterclockwise (requires {0})"],$I$(7).$$S), "set picking SPIN"],$I$(7).o$S$O));
C$.newAction$I$S$S(42, "_spinDrawObjectCW", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["click on two points to spin around axis clockwise (requires {0})"],$I$(7).$$S), "set picking SPIN"],$I$(7).o$S$O));
C$.newAction$I$S$S(43, "_stopMotion", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["stop motion (requires {0})"],$I$(7).$$S), "set waitForMoveTo FALSE"],$I$(7).o$S$O));
C$.newAction$I$S$S(44, "_swipe", (function(a,f){return f.apply(null,a)})(["spin model (swipe and release button and stop motion simultaneously)"],$I$(7).$$S));
C$.newAction$I$S$S(45, "_translate", $I$(7).$$S("translate"));
C$.newAction$I$S$S(46, "_wheelZoom", $I$(7).$$S("zoom"));
});

Clazz.newMeth(C$, 'getActionName$I', function (i) {
return (i < C$.actionNames.length ? C$.actionNames[i] : null);
}, 1);

Clazz.newMeth(C$, 'getActionFromName$S', function (name) {
for (var i=0; i < C$.actionNames.length; i++) if (C$.actionNames[i].equalsIgnoreCase$S(name)) return i;

return -1;
}, 1);

Clazz.newMeth(C$, 'getBindingInfo$S', function (qualifiers) {
return this.b.getBindingInfo$SA$SA$S(C$.actionInfo, C$.actionNames, qualifiers);
});

Clazz.newMeth(C$, 'setBinding$org_jmol_viewer_binding_Binding', function (newBinding) {
this.b=newBinding;
});

Clazz.newMeth(C$, 'bnd$I$IA', function (mouseAction, jmolActions) {
for (var i=jmolActions.length; --i >= 0; ) if (this.b.isBound$I$I(mouseAction, jmolActions[i])) return true;

return false;
});

Clazz.newMeth(C$, 'isDrawOrLabelAction$I', function (a) {
return (this.drawMode && this.bnd$I$IA(a, [8, 9])  || this.labelMode && this.bnd$I$IA(a, [10])  );
}, p$1);

Clazz.newMeth(C$, 'getBondPickingMode$', function () {
return this.bondPickingMode;
});

Clazz.newMeth(C$, 'getPickingModeName$I', function (pickingMode) {
return (pickingMode < 0 || pickingMode >= C$.pickingModeNames.length  ? "off" : C$.pickingModeNames[pickingMode]);
}, 1);

Clazz.newMeth(C$, 'getPickingMode$S', function (str) {
for (var i=C$.pickingModeNames.length; --i >= 0; ) if (str.equalsIgnoreCase$S(C$.pickingModeNames[i])) return i;

return -1;
}, 1);

Clazz.newMeth(C$, 'getPickingStyleName$I', function (pickingStyle) {
return (pickingStyle < 0 || pickingStyle >= C$.pickingStyleNames.length  ? "toggle" : C$.pickingStyleNames[pickingStyle]);
}, 1);

Clazz.newMeth(C$, 'getPickingStyleIndex$S', function (str) {
for (var i=C$.pickingStyleNames.length; --i >= 0; ) if (str.equalsIgnoreCase$S(C$.pickingStyleNames[i])) return i;

return -1;
}, 1);

Clazz.newMeth(C$, 'getAtomPickingMode$', function () {
return this.apm;
});

Clazz.newMeth(C$, 'setPickingMode$I', function (pickingMode) {
var isNew=false;
switch (pickingMode) {
case -1:
isNew=true;
this.bondPickingMode=35;
pickingMode=1;
this.vwr.setStringProperty$S$S("pickingStyle", "toggle");
this.vwr.setBooleanProperty$S$Z("bondPicking", false);
break;
case 35:
case 34:
case 33:
case 8:
this.vwr.setBooleanProperty$S$Z("bondPicking", true);
this.bondPickingMode=pickingMode;
p$1.resetMeasurement.apply(this, []);
return;
}
isNew|=(this.apm != pickingMode);
this.apm=pickingMode;
if (isNew) p$1.resetMeasurement.apply(this, []);
});

Clazz.newMeth(C$, 'getPickingState$', function () {
var script=";set modelkitMode " + this.vwr.getBoolean$I(603983903) + ";set picking " + C$.getPickingModeName$I(this.apm) ;
if (this.apm == 32) script += "_" + this.vwr.getModelkitProperty$O("atomType");
script += ";";
if (this.bondPickingMode != 0) script += "set picking " + C$.getPickingModeName$I(this.bondPickingMode);
if (this.bondPickingMode == 33) script += "_" + this.vwr.getModelkitProperty$O("bondType");
script += ";";
return script;
});

Clazz.newMeth(C$, 'getPickingStyle$', function () {
return this.pickingStyle;
});

Clazz.newMeth(C$, 'setPickingStyle$I', function (pickingStyle) {
this.pickingStyle=pickingStyle;
if (pickingStyle >= 4) {
this.pickingStyleMeasure=pickingStyle;
p$1.resetMeasurement.apply(this, []);
} else {
if (pickingStyle < 3) this.rootPickingStyle=pickingStyle;
this.pickingStyleSelect=pickingStyle;
}this.rubberbandSelectionMode=false;
switch (this.pickingStyleSelect) {
case 2:
if (!this.b.name.equals$O("extendedSelect")) this.setBinding$org_jmol_viewer_binding_Binding(this.pfaatBinding == null  ? this.pfaatBinding=$I$(5).newBinding$org_jmol_viewer_Viewer$S(this.vwr, "Pfaat") : this.pfaatBinding);
break;
case 3:
if (!this.b.name.equals$O("drag")) this.setBinding$org_jmol_viewer_binding_Binding(this.dragBinding == null  ? this.dragBinding=$I$(5).newBinding$org_jmol_viewer_Viewer$S(this.vwr, "Drag") : this.dragBinding);
this.rubberbandSelectionMode=true;
break;
case 1:
if (!this.b.name.equals$O("selectOrToggle")) this.setBinding$org_jmol_viewer_binding_Binding(this.rasmolBinding == null  ? this.rasmolBinding=$I$(5).newBinding$org_jmol_viewer_Viewer$S(this.vwr, "Rasmol") : this.rasmolBinding);
break;
default:
if (this.b !== this.jmolBinding ) this.setBinding$org_jmol_viewer_binding_Binding(this.jmolBinding);
}
if (!this.b.name.equals$O("drag")) this.predragBinding=this.b;
});

Clazz.newMeth(C$, 'setGestureSwipeFactor$F', function (factor) {
this.gestureSwipeFactor=factor;
});

Clazz.newMeth(C$, 'setMouseDragFactor$F', function (factor) {
this.mouseDragFactor=factor;
});

Clazz.newMeth(C$, 'setMouseWheelFactor$F', function (factor) {
this.mouseWheelFactor=factor;
});

Clazz.newMeth(C$, 'isDraggedIsShiftDown$', function () {
return (this.dragged.modifiers & 1) != 0;
});

Clazz.newMeth(C$, 'setCurrent$J$I$I$I', function (time, x, y, mods) {
this.vwr.hoverOff$();
this.current.set$J$I$I$I(time, x, y, mods);
});

Clazz.newMeth(C$, 'getCurrentX$', function () {
return this.current.x;
});

Clazz.newMeth(C$, 'getCurrentY$', function () {
return this.current.y;
});

Clazz.newMeth(C$, 'setMouseMode$', function () {
this.drawMode=this.labelMode=false;
this.dragSelectedMode=this.vwr.getDragSelected$();
this.measuresEnabled=!this.dragSelectedMode;
if (!this.dragSelectedMode) switch (this.apm) {
default:
return;
case 32:
this.measuresEnabled=!this.vwr.getModelkit$Z(false).isPickAtomAssignCharge$();
return;
case 4:
this.drawMode=true;
this.measuresEnabled=false;
break;
case 2:
this.labelMode=true;
this.measuresEnabled=false;
break;
case 9:
this.measuresEnabled=false;
break;
case 19:
case 22:
case 20:
case 21:
this.measuresEnabled=false;
return;
}
this.exitMeasurementMode$S(null);
});

Clazz.newMeth(C$, 'clearMouseInfo$', function () {
this.pressedCount=this.clickedCount=0;
this.dragGesture.setAction$I$J(0, 0);
this.exitMeasurementMode$S(null);
});

Clazz.newMeth(C$, 'setDragAtomIndex$I', function (iatom) {
this.dragAtomIndex=iatom;
p$1.setAtomsPicked$javajs_util_BS$S.apply(this, [$I$(8).newAndSetBit$I(iatom), "Label picked for atomIndex = " + iatom]);
});

Clazz.newMeth(C$, 'isMTClient$', function () {
return this.isMultiTouchClient;
});

Clazz.newMeth(C$, 'isMTServer$', function () {
return this.isMultiTouchServer;
});

Clazz.newMeth(C$, 'dispose$', function () {
this.clear$();
});

Clazz.newMeth(C$, 'clear$', function () {
this.startHoverWatcher$Z(false);
if (this.predragBinding != null ) this.b=this.predragBinding;
this.vwr.setPickingMode$S$I(null, 1);
this.vwr.setPickingStyle$S$I(null, this.rootPickingStyle);
this.isAltKeyReleased=true;
});

Clazz.newMeth(C$, 'startHoverWatcher$Z', function (isStart) {
if (this.vwr.isPreviewOnly) return;
try {
if (isStart) {
if (this.hoverWatcherThread != null ) return;
this.current.time=-1;
this.hoverWatcherThread=Clazz.new_($I$(9,1).c$$org_jmol_viewer_ActionManager$org_jmol_viewer_MouseState$org_jmol_viewer_MouseState$org_jmol_viewer_Viewer,[this, this.current, this.moved, this.vwr]);
} else {
if (this.hoverWatcherThread == null ) return;
this.current.time=-1;
this.hoverWatcherThread.interrupt$();
this.hoverWatcherThread=null;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setModeMouse$I', function (modeMouse) {
if (modeMouse == -1) {
this.startHoverWatcher$Z(false);
}});

Clazz.newMeth(C$, 'keyPressed$I$I', function (key, modifiers) {
if (this.keyProcessing) return false;
this.keyProcessing=true;
switch (key) {
case 18:
if (this.dragSelectedMode && this.isAltKeyReleased ) this.vwr.moveSelected$I$I$I$I$I$javajs_util_BS$Z$Z$I(-2147483648, 0, -2147483648, -2147483648, -2147483648, null, false, false, modifiers);
this.isAltKeyReleased=false;
this.moved.modifiers|=8;
break;
case 16:
this.dragged.modifiers|=1;
this.moved.modifiers|=1;
break;
case 17:
this.moved.modifiers|=2;
break;
case 27:
this.vwr.hoverOff$();
this.exitMeasurementMode$S("escape");
break;
default:
this.vwr.hoverOff$();
break;
}
var action=16 | 256 | 8192 | this.moved.modifiers ;
if (!this.labelMode && !this.b.isUserAction$I(action) ) {
p$1.checkMotionRotateZoom$I$I$I$I$Z.apply(this, [action, this.current.x, 0, 0, false]);
}if (this.vwr.getBoolean$I(603979889)) {
switch (key) {
case 38:
case 40:
case 37:
case 39:
case 32:
case 46:
this.vwr.navigate$I$I(key, modifiers);
break;
}
}this.keyProcessing=false;
return true;
});

Clazz.newMeth(C$, 'keyTyped$I$I', function (keyChar, modifiers) {
return false;
});

Clazz.newMeth(C$, 'keyReleased$I', function (key) {
switch (key) {
case 18:
this.moved.modifiers&=~8;
if (this.dragSelectedMode) this.vwr.moveSelected$I$I$I$I$I$javajs_util_BS$Z$Z$I(2147483647, 0, -2147483648, -2147483648, -2147483648, null, false, false, this.moved.modifiers);
this.isAltKeyReleased=true;
break;
case 16:
this.moved.modifiers&=~1;
break;
case 17:
this.moved.modifiers&=~2;
}
if (this.moved.modifiers == 0) this.vwr.setCursor$I(0);
if (!this.vwr.getBoolean$I(603979889)) return;
switch (key) {
case 38:
case 40:
case 37:
case 39:
this.vwr.navigate$I$I(0, 0);
break;
}
});

Clazz.newMeth(C$, 'mouseEnterExit$J$I$I$Z', function (time, x, y, isExit) {
if (this.vwr.tm.stereoDoubleDTI) x=x << 1;
this.setCurrent$J$I$I$I(time, x, y, 0);
if (isExit) this.exitMeasurementMode$S("mouseExit");
});

Clazz.newMeth(C$, 'setMouseActions$I$I$Z', function (count, buttonMods, isRelease) {
this.pressAction=$I$(5).getMouseAction$I$I$I(count, buttonMods, isRelease ? 5 : 4);
this.dragAction=$I$(5).getMouseAction$I$I$I(count, buttonMods, 1);
this.clickAction=$I$(5).getMouseAction$I$I$I(count, buttonMods, 2);
}, p$1);

Clazz.newMeth(C$, 'mouseAction$I$J$I$I$I$I', function (mode, time, x, y, count, buttonMods) {
if (!this.vwr.getMouseEnabled$()) return;
if ($I$(10).debuggingHigh && mode != 0  && this.vwr.getBoolean$I(603979960) ) this.vwr.showString$S$Z("mouse action: " + mode + " " + buttonMods + " " + (function(a,f){return f.apply(null,a)})([$I$(5).getMouseAction$I$I$I(count, buttonMods, mode), false],$I$(5).getMouseActionName$I$Z) , false);
if (this.vwr.tm.stereoDoubleDTI) x=x << 1;
switch (mode) {
case 0:
this.setCurrent$J$I$I$I(time, x, y, buttonMods);
this.moved.setCurrent$org_jmol_viewer_MouseState$I(this.current, 0);
if (this.mp != null  || this.hoverActive ) {
this.clickAction=$I$(5).getMouseAction$I$I$I(this.clickedCount, buttonMods, 0);
p$1.checkClickAction$I$I$J$I.apply(this, [x, y, time, 0]);
return;
}if (p$1.isZoomArea$I.apply(this, [x])) {
p$1.checkMotionRotateZoom$I$I$I$I$Z.apply(this, [this.LEFT_DRAGGED, 0, 0, 0, false]);
return;
}if (this.vwr.currentCursor == 8) this.vwr.setCursor$I(0);
return;
case 4:
this.setMouseMode$();
this.pressedCount=(this.pressed.check$I$I$I$I$J$J(20, x, y, buttonMods, time, 700) ? this.pressedCount + 1 : 1);
if (this.pressedCount == 1) {
this.vwr.checkInMotion$I(1);
this.setCurrent$J$I$I$I(time, x, y, buttonMods);
}this.pressAction=$I$(5).getMouseAction$I$I$I(this.pressedCount, buttonMods, 4);
this.vwr.setCursor$I(12);
this.pressed.setCurrent$org_jmol_viewer_MouseState$I(this.current, 1);
this.dragged.setCurrent$org_jmol_viewer_MouseState$I(this.current, 1);
this.vwr.setFocus$();
this.dragGesture.setAction$I$J(this.dragAction, time);
p$1.checkPressedAction$I$I$J.apply(this, [x, y, time]);
return;
case 1:
this.setMouseMode$();
p$1.setMouseActions$I$I$Z.apply(this, [this.pressedCount, buttonMods, false]);
var deltaX=x - this.dragged.x;
var deltaY=y - this.dragged.y;
this.setCurrent$J$I$I$I(time, x, y, buttonMods);
this.dragged.setCurrent$org_jmol_viewer_MouseState$I(this.current, -1);
this.dragGesture.add$I$I$I$J(this.dragAction, x, y, time);
p$1.checkDragWheelAction$I$I$I$I$I$J$I.apply(this, [this.dragAction, x, y, deltaX, deltaY, time, 1]);
return;
case 5:
p$1.setMouseActions$I$I$Z.apply(this, [this.pressedCount, buttonMods, true]);
this.setCurrent$J$I$I$I(time, x, y, buttonMods);
this.vwr.spinXYBy$I$I$F(0, 0, 0);
var dragRelease=!this.pressed.check$I$I$I$I$J$J(10, x, y, buttonMods, time, 9223372036854775807);
p$1.checkReleaseAction$I$I$J$Z.apply(this, [x, y, time, dragRelease]);
return;
case 3:
if (this.vwr.isApplet && !this.vwr.hasFocus$() ) return;
this.setCurrent$J$I$I$I(time, this.current.x, this.current.y, buttonMods);
p$1.checkDragWheelAction$I$I$I$I$I$J$I.apply(this, [$I$(5).getMouseAction$I$I$I(0, buttonMods, 3), this.current.x, this.current.y, 0, y, time, 3]);
return;
case 2:
this.setMouseMode$();
this.clickedCount=(count > 1 ? count : this.clicked.check$I$I$I$I$J$J(10, 0, 0, buttonMods, time, 700) ? this.clickedCount + 1 : 1);
if (this.clickedCount == 1) {
this.setCurrent$J$I$I$I(time, x, y, buttonMods);
}p$1.setMouseActions$I$I$Z.apply(this, [this.clickedCount, buttonMods, false]);
this.clicked.setCurrent$org_jmol_viewer_MouseState$I(this.current, this.clickedCount);
this.vwr.setFocus$();
if (this.apm != 9 && this.bnd$I$IA($I$(5).getMouseAction$I$I$I(1, buttonMods, 4), [31]) ) return;
this.clickAction=$I$(5).getMouseAction$I$I$I(this.clickedCount, buttonMods, 2);
p$1.checkClickAction$I$I$J$I.apply(this, [x, y, time, this.clickedCount]);
return;
}
});

Clazz.newMeth(C$, 'checkPressedAction$I$I$J', function (x, y, time) {
var buttonMods=$I$(5).getButtonMods$I(this.pressAction);
var isDragSelectedAction=this.bnd$I$IA($I$(5).getMouseAction$I$I$I(1, buttonMods, 4), [31]);
if (buttonMods != 0) {
this.pressAction=this.vwr.notifyMouseClicked$I$I$I$I(x, y, this.pressAction, 4);
if (this.pressAction == 0) return;
buttonMods=$I$(5).getButtonMods$I(this.pressAction);
}p$1.setMouseActions$I$I$Z.apply(this, [this.pressedCount, buttonMods, false]);
if ($I$(10).debuggingHigh && this.vwr.getBoolean$I(603979960) ) (function(a,f){return f.apply(null,a)})([$I$(5).getMouseActionName$I$Z(this.pressAction, false)],$I$(10).debug$S);
if (p$1.isDrawOrLabelAction$I.apply(this, [this.dragAction]) && this.vwr.checkObjectDragged$I$I$I$I$I(-2147483648, 0, x, y, this.dragAction) ) return;
p$1.checkUserAction$I$I$I$I$I$J$I.apply(this, [this.pressAction, x, y, 0, 0, time, 4]);
var isBound=false;
switch (this.apm) {
case 32:
isBound=this.bnd$I$IA(this.clickAction, [0]);
break;
case 28:
isBound=this.bnd$I$IA(this.dragAction, [7, 14]);
break;
case 26:
case 36:
case 37:
case 27:
isBound=this.bnd$I$IA(this.dragAction, [7, 14, 27]);
break;
case 29:
isBound=this.bnd$I$IA(this.dragAction, [11, 14]);
break;
case 30:
isBound=this.bnd$I$IA(this.dragAction, [11, 14, 27]);
break;
}
if (isBound) {
this.dragAtomIndex=this.vwr.findNearestAtomIndexMovable$I$I$Z(x, y, true);
if (this.dragAtomIndex >= 0 && (this.apm == 32 || this.apm == 31 )  && this.vwr.ms.isAtomInLastModel$I(this.dragAtomIndex) ) {
if (this.bondPickingMode == 34) {
this.vwr.setModelkitProperty$S$O("bondAtomIndex", Integer.valueOf$I(this.dragAtomIndex));
}p$1.enterMeasurementMode$I.apply(this, [this.dragAtomIndex]);
this.mp.addPoint$I$org_jmol_util_Point3fi$Z(this.dragAtomIndex, null, false);
}var xy=this.vwr.getModelkitProperty$O("screenXY");
this.mkBondPressed=(xy != null  && this.pressed.inRange$I$I$I(10, xy[0], xy[1]) );
return;
}if (this.bnd$I$IA(this.pressAction, [23])) {
var type="j";
if (this.vwr.getBoolean$I(603983903)) {
var t=this.vwr.checkObjectClicked$I$I$I(x, y, this.LEFT_CLICKED);
type=('m');
}this.vwr.popupMenu$I$I$C(x, y, type);
return;
}if (this.dragSelectedMode) {
this.haveSelection=(!isDragSelectedAction || this.vwr.findNearestAtomIndexMovable$I$I$Z(x, y, true) >= 0 );
if (this.haveSelection && this.bnd$I$IA(this.dragAction, [13, 14]) ) this.vwr.moveSelected$I$I$I$I$I$javajs_util_BS$Z$Z$I(-2147483648, 0, -2147483648, -2147483648, -2147483648, null, false, false, buttonMods);
return;
}p$1.checkMotionRotateZoom$I$I$I$I$Z.apply(this, [this.dragAction, x, 0, 0, true]);
}, p$1);

Clazz.newMeth(C$, 'checkDragWheelAction$I$I$I$I$I$J$I', function (dragWheelAction, x, y, deltaX, deltaY, time, mode) {
var buttonmods=$I$(5).getButtonMods$I(dragWheelAction);
if (buttonmods != 0) {
var newAction=this.vwr.notifyMouseClicked$I$I$I$I(x, y, $I$(5).getMouseAction$I$I$I(this.pressedCount, buttonmods, mode), mode);
if (newAction == 0) return;
if (newAction > 0) dragWheelAction=newAction;
}if (p$1.isRubberBandSelect$I.apply(this, [dragWheelAction])) {
p$1.calcRectRubberBand.apply(this, []);
this.vwr.refresh$I$S(3, "rubberBand selection");
return;
}if (p$1.checkUserAction$I$I$I$I$I$J$I.apply(this, [dragWheelAction, x, y, deltaX, deltaY, time, mode])) return;
if (this.vwr.g.modelKitMode && this.vwr.getModelkit$Z(false).getRotateBondIndex$() >= 0 ) {
if (this.dragAtomIndex >= 0 || this.mkBondPressed  || this.bnd$I$IA(dragWheelAction, [26]) ) {
this.vwr.moveSelected$I$I$I$I$I$javajs_util_BS$Z$Z$I(deltaX, deltaY, -2147483648, x, y, null, false, false, this.dragAtomIndex >= 0 ? 0 : 16);
return;
}}var bs=null;
if (this.dragAtomIndex >= 0 && this.apm != 2 ) {
switch (this.apm) {
case 26:
p$1.dragSelected$I$I$I$Z.apply(this, [dragWheelAction, deltaX, deltaY, true]);
return;
case 36:
case 37:
case 27:
case 30:
bs=this.vwr.ms.getAtoms$I$O((this.apm == 37 ? 1094717454 : 1094713360), $I$(8).newAndSetBit$I(this.dragAtomIndex));
if (this.apm == 36) bs.and$javajs_util_BS(this.vwr.getAtomBitSet$O("ligand"));
case 28:
case 29:
if (this.dragGesture.getPointCount$() == 1) this.vwr.undoMoveActionClear$I$I$Z(this.dragAtomIndex, 2, true);
this.setMotion$I$Z(13, true);
if (this.bnd$I$IA(dragWheelAction, [27])) {
this.vwr.rotateSelected$F$F$javajs_util_BS(this.getDegrees$F$Z(deltaX, true), this.getDegrees$F$Z(deltaY, false), bs);
} else {
switch (this.apm) {
case 36:
case 37:
case 27:
case 30:
this.vwr.select$javajs_util_BS$Z$I$Z(bs, false, 0, true);
break;
}
this.vwr.moveAtomWithHydrogens$I$I$I$I$javajs_util_BS(this.dragAtomIndex, deltaX, deltaY, (this.bnd$I$IA(dragWheelAction, [14]) ? -deltaY : -2147483648), bs);
}return;
}
}if (this.dragAtomIndex >= 0 && mode == 1  && this.bnd$I$IA(this.clickAction, [0])  && this.apm == 32 ) {
var nearestAtomIndex=this.vwr.findNearestAtomIndexMovable$I$I$Z(x, y, false);
if (nearestAtomIndex >= 0) {
if (this.mp != null ) {
this.mp.setCount$I(1);
} else if (this.measuresEnabled) {
p$1.enterMeasurementMode$I.apply(this, [nearestAtomIndex]);
}p$1.addToMeasurement$I$org_jmol_util_Point3fi$Z.apply(this, [nearestAtomIndex, null, true]);
this.mp.colix=20;
} else if (this.mp != null ) {
this.mp.setCount$I(1);
this.mp.colix=23;
}if (this.mp == null ) return;
if (this.vwr.antialiased) {
x<<=1;
y<<=1;
}this.mp.traceX=x;
this.mp.traceY=y;
this.vwr.refresh$I$S(3, "assignNew");
return;
}if (!this.drawMode && !this.labelMode && this.bnd$I$IA(dragWheelAction, [45])  ) {
this.vwr.translateXYBy$I$I(deltaX, deltaY);
return;
}if (this.dragSelectedMode && this.haveSelection && this.bnd$I$IA(dragWheelAction, [13, 27])  ) {
var iatom=this.vwr.bsA$().nextSetBit$I(0);
if (iatom < 0) return;
if (this.dragGesture.getPointCount$() == 1) this.vwr.undoMoveActionClear$I$I$Z(iatom, 2, true);
 else this.vwr.moveSelected$I$I$I$I$I$javajs_util_BS$Z$Z$I(2147483647, 0, -2147483648, -2147483648, -2147483648, null, false, false, buttonmods);
p$1.dragSelected$I$I$I$Z.apply(this, [dragWheelAction, deltaX, deltaY, false]);
return;
}if (p$1.isDrawOrLabelAction$I.apply(this, [dragWheelAction])) {
this.setMotion$I$Z(13, true);
if (this.vwr.checkObjectDragged$I$I$I$I$I(this.dragged.x, this.dragged.y, x, y, dragWheelAction)) {
return;
}}if (p$1.checkMotionRotateZoom$I$I$I$I$Z.apply(this, [dragWheelAction, x, deltaX, deltaY, true])) {
if (this.vwr.tm.slabEnabled && this.bnd$I$IA(dragWheelAction, [39]) ) this.vwr.slabDepthByPixels$I(deltaY);
 else this.vwr.zoomBy$I(deltaY);
return;
}if (this.bnd$I$IA(dragWheelAction, [25])) {
this.vwr.rotateXYBy$F$F(this.getDegrees$F$Z(deltaX, true), this.getDegrees$F$Z(deltaY, false));
return;
}if (this.bnd$I$IA(dragWheelAction, [29])) {
if (deltaX == 0 && Math.abs(deltaY) > 1 ) {
this.setMotion$I$Z(8, true);
this.vwr.zoomBy$I(deltaY + (deltaY > 0 ? -1 : 1));
} else if (deltaY == 0 && Math.abs(deltaX) > 1 ) {
this.setMotion$I$Z(13, true);
this.vwr.rotateZBy$I$I$I(-deltaX + (deltaX > 0 ? 1 : -1), 2147483647, 2147483647);
}return;
}if (this.vwr.tm.slabEnabled) {
if (this.bnd$I$IA(dragWheelAction, [6])) {
this.vwr.depthByPixels$I(deltaY);
return;
}if (this.bnd$I$IA(dragWheelAction, [38])) {
this.vwr.slabByPixels$I(deltaY);
return;
}if (this.bnd$I$IA(dragWheelAction, [39])) {
this.vwr.slabDepthByPixels$I(deltaY);
return;
}}if (this.bnd$I$IA(dragWheelAction, [46])) {
this.zoomByFactor$I$I$I(deltaY, 2147483647, 2147483647);
return;
}if (this.bnd$I$IA(dragWheelAction, [28])) {
this.setMotion$I$Z(13, true);
this.vwr.rotateZBy$I$I$I(-deltaX, 2147483647, 2147483647);
return;
}}, p$1);

Clazz.newMeth(C$, 'dragSelected$I$I$I$Z', function (a, deltaX, deltaY, isPickingDrag) {
this.setMotion$I$Z(13, true);
if (this.bnd$I$IA(a, [27]) && this.vwr.getBoolean$I(603979785) ) this.vwr.rotateSelected$F$F$javajs_util_BS(this.getDegrees$F$Z(deltaX, true), this.getDegrees$F$Z(deltaY, false), null);
 else this.vwr.moveSelected$I$I$I$I$I$javajs_util_BS$Z$Z$I(deltaX, deltaY, (isPickingDrag && this.bnd$I$IA(a, [14])  ? -deltaY : -2147483648), -2147483648, -2147483648, null, true, false, this.dragged.modifiers);
}, p$1);

Clazz.newMeth(C$, 'checkReleaseAction$I$I$J$Z', function (x, y, time, dragRelease) {
if ($I$(10).debuggingHigh && this.vwr.getBoolean$I(603979960) ) (function(a,f){return f.apply(null,a)})([$I$(5).getMouseActionName$I$Z(this.pressAction, false)],$I$(10).debug$S);
this.vwr.checkInMotion$I(0);
this.vwr.setInMotion$Z(false);
this.vwr.setCursor$I(0);
this.dragGesture.add$I$I$I$J(this.dragAction, x, y, time);
if (this.dragAtomIndex >= 0) {
if (this.apm == 29 || this.apm == 30 ) p$1.minimize$Z.apply(this, [true]);
}if (this.apm == 32 && this.bnd$I$IA(this.clickAction, [0]) ) {
if (this.mp == null  || this.dragAtomIndex < 0 ) {
this.exitMeasurementMode$S(null);
return;
} else if (this.bondPickingMode == 34) {
this.vwr.setModelkitProperty$S$O("bondAtomIndex", Integer.valueOf$I(this.dragAtomIndex));
this.exitMeasurementMode$S(null);
return;
}p$1.assignNew$I$I.apply(this, [x, y]);
return;
}this.dragAtomIndex=-1;
this.mkBondPressed=false;
var isRbAction=p$1.isRubberBandSelect$I.apply(this, [this.dragAction]);
if (isRbAction) p$1.selectRb$I.apply(this, [this.clickAction]);
this.rubberbandSelectionMode=(this.b.name.equals$O("drag"));
this.rectRubber.x=2147483647;
if (dragRelease) {
this.vwr.notifyMouseClicked$I$I$I$I(x, y, $I$(5).getMouseAction$I$I$I(this.pressedCount, 0, 5), 5);
}if (p$1.isDrawOrLabelAction$I.apply(this, [this.dragAction])) {
this.vwr.checkObjectDragged$I$I$I$I$I(2147483647, 0, x, y, this.dragAction);
return;
}if (this.haveSelection && this.dragSelectedMode && this.bnd$I$IA(this.dragAction, [13])  ) this.vwr.moveSelected$I$I$I$I$I$javajs_util_BS$Z$Z$I(2147483647, 0, -2147483648, -2147483648, -2147483648, null, false, false, this.dragged.modifiers);
if (dragRelease && p$1.checkUserAction$I$I$I$I$I$J$I.apply(this, [this.pressAction, x, y, 0, 0, time, 5]) ) return;
if (this.vwr.getBoolean$I(603979780)) {
if (this.bnd$I$IA(this.dragAction, [44])) {
var speed=p$1.getExitRate.apply(this, []);
if (speed > 0 ) this.vwr.spinXYBy$I$I$F(this.dragGesture.getDX$I$I(4, 2), this.dragGesture.getDY$I$I(4, 2), speed * 30 * this.gestureSwipeFactor );
if (this.vwr.g.logGestures) this.vwr.log$S("$NOW$ swipe " + this.dragGesture + " " + new Float(speed).toString() );
return;
}}}, p$1);

Clazz.newMeth(C$, 'checkClickAction$I$I$J$I', function (x, y, time, clickedCount) {
if (clickedCount > 0) {
if (p$1.checkUserAction$I$I$I$I$I$J$I.apply(this, [this.clickAction, x, y, 0, 0, time, 32768])) return;
this.clickAction=this.vwr.notifyMouseClicked$I$I$I$I(x, y, this.clickAction, 32768);
if (this.clickAction == 0) return;
}if ($I$(10).debuggingHigh && this.vwr.getBoolean$I(603979960) ) (function(a,f){return f.apply(null,a)})([$I$(5).getMouseActionName$I$Z(this.clickAction, false)],$I$(10).debug$S);
if (this.bnd$I$IA(this.clickAction, [2])) {
if (this.vwr.frankClicked$I$I(x, y)) {
this.vwr.popupMenu$I$I$C(-x, y, "j");
return;
}if (this.vwr.frankClickedModelKit$I$I(x, y)) {
this.vwr.popupMenu$I$I$C(10, 0, "m");
return;
}}var nearestPoint=null;
var isBond=false;
var isIsosurface=false;
var map=null;
if (!this.drawMode) {
map=this.vwr.checkObjectClicked$I$I$I(x, y, this.clickAction);
if (map != null ) {
if (this.labelMode) {
p$1.pickLabel$I.apply(this, [(map.get$O("atomIndex")).intValue$()]);
return;
}isBond="bond".equals$O(map.get$O("type"));
isIsosurface="isosurface".equals$O(map.get$O("type"));
nearestPoint=p$1.getPoint$java_util_Map.apply(this, [map]);
}}if (isBond) clickedCount=1;
if (nearestPoint != null  && Float.isNaN$F(nearestPoint.x) ) return;
var nearestAtomIndex=p$1.findNearestAtom$I$I$org_jmol_util_Point3fi$Z.apply(this, [x, y, nearestPoint, clickedCount > 0]);
if (clickedCount == 0 && this.apm != 32 ) {
if (this.mp == null ) return;
if (nearestPoint != null  || this.mp.getIndexOf$I(nearestAtomIndex) == 0 ) this.mp.addPoint$I$org_jmol_util_Point3fi$Z(nearestAtomIndex, nearestPoint, false);
if (this.mp.haveModified) this.vwr.setPendingMeasurement$org_jmol_modelset_MeasurementPending(this.mp);
this.vwr.refresh$I$S(3, "measurementPending");
return;
}this.setMouseMode$();
if (this.bnd$I$IA(this.clickAction, [43])) {
this.vwr.tm.stopMotion$();
}if (this.vwr.getBoolean$I(603979889) && this.apm == 23  && this.bnd$I$IA(this.clickAction, [21]) ) {
this.vwr.navTranslatePercent$F$F(x * 100.0 / this.vwr.getScreenWidth$() - 50.0, y * 100.0 / this.vwr.getScreenHeight$() - 50.0);
return;
}if (isBond) {
if (this.bnd$I$IA(this.clickAction, [this.bondPickingMode == 34 || this.bondPickingMode == 33  ? 0 : 5])) {
p$1.bondPicked$I.apply(this, [(map.get$O("index")).intValue$()]);
return;
}} else if (isIsosurface) {
return;
} else {
if (this.apm != 32 && this.mp != null   && this.bnd$I$IA(this.clickAction, [20]) ) {
p$1.atomOrPointPicked$I$org_jmol_util_Point3fi.apply(this, [nearestAtomIndex, nearestPoint]);
if (p$1.addToMeasurement$I$org_jmol_util_Point3fi$Z.apply(this, [nearestAtomIndex, nearestPoint, false]) == 4) p$1.toggleMeasurement.apply(this, []);
return;
}if (this.bnd$I$IA(this.clickAction, [37])) {
if (this.mp != null ) {
p$1.addToMeasurement$I$org_jmol_util_Point3fi$Z.apply(this, [nearestAtomIndex, nearestPoint, true]);
p$1.toggleMeasurement.apply(this, []);
} else if (!this.drawMode && !this.labelMode && !this.dragSelectedMode && this.measuresEnabled  ) {
p$1.enterMeasurementMode$I.apply(this, [nearestAtomIndex]);
p$1.addToMeasurement$I$org_jmol_util_Point3fi$Z.apply(this, [nearestAtomIndex, nearestPoint, true]);
}p$1.atomOrPointPicked$I$org_jmol_util_Point3fi.apply(this, [nearestAtomIndex, nearestPoint]);
return;
}}if (p$1.isSelectAction$I.apply(this, [this.clickAction])) {
if (!isIsosurface) p$1.atomOrPointPicked$I$org_jmol_util_Point3fi.apply(this, [nearestAtomIndex, nearestPoint]);
return;
}if (this.bnd$I$IA(this.clickAction, [24])) {
if (nearestAtomIndex < 0) p$1.reset.apply(this, []);
return;
}}, p$1);

Clazz.newMeth(C$, 'pickLabel$I', function (iatom) {
var label=this.vwr.ms.at[iatom].atomPropertyString$org_jmol_viewer_Viewer$I(this.vwr, 1825200146);
if (this.pressedCount == 2) {
label=this.vwr.apiPlatform.prompt$S$S$SA$Z("Set label for atomIndex=" + iatom, label, null, false);
if (label != null ) {
this.vwr.shm.setAtomLabel$S$I(label, iatom);
this.vwr.refresh$I$S(1, "label atom");
}} else {
p$1.setAtomsPicked$javajs_util_BS$S.apply(this, [$I$(8).newAndSetBit$I(iatom), "Label picked for atomIndex = " + iatom + ": " + label ]);
}}, p$1);

Clazz.newMeth(C$, 'checkUserAction$I$I$I$I$I$J$I', function (mouseAction, x, y, deltaX, deltaY, time, mode) {
if (!this.b.isUserAction$I(mouseAction)) return false;
var passThrough=false;
var obj;
var ht=this.b.getBindings$();
var mkey=mouseAction + "\t";
for (var key, $key = ht.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (key.indexOf$S(mkey) != 0 || !(function(a,f){return f.apply(null,a)})([obj=ht.get$O(key)],$I$(11).isAS$O) ) continue;
var script=(obj)[1];
var nearestPoint=null;
if (script.indexOf$S("_ATOM") >= 0) {
var iatom=p$1.findNearestAtom$I$I$org_jmol_util_Point3fi$Z.apply(this, [x, y, null, true]);
script=(function(a,f){return f.apply(null,a)})([script, "_ATOM", "({" + (iatom >= 0 ? "" + iatom : "") + "})" ],$I$(12).rep$S$S$S);
if (iatom >= 0) script=(function(a,f){return f.apply(null,a)})([script, "_POINT", $I$(13).eP$javajs_util_T3(this.vwr.ms.at[iatom])],$I$(12).rep$S$S$S);
}if (!this.drawMode && (script.indexOf$S("_POINT") >= 0 || script.indexOf$S("_OBJECT") >= 0  || script.indexOf$S("_BOND") >= 0 ) ) {
var t=this.vwr.checkObjectClicked$I$I$I(x, y, mouseAction);
if (t != null  && (nearestPoint=t.get$O("pt")) != null  ) {
var isBond=t.get$O("type").equals$O("bond");
if (isBond) script=(function(a,f){return f.apply(null,a)})([script, "_BOND", "[{" + t.get$O("index") + "}]" ],$I$(12).rep$S$S$S);
script=(function(a,f){return f.apply(null,a)})([script, "_POINT", $I$(13).eP$javajs_util_T3(nearestPoint)],$I$(12).rep$S$S$S);
script=(function(a,f){return f.apply(null,a)})([script, "_OBJECT", $I$(13).escapeMap$java_util_Map(t)],$I$(12).rep$S$S$S);
}script=$I$(12).rep$S$S$S(script, "_BOND", "[{}]");
script=$I$(12).rep$S$S$S(script, "_OBJECT", "{}");
}script=$I$(12).rep$S$S$S(script, "_POINT", "{}");
script=$I$(12).rep$S$S$S(script, "_ACTION", "" + mouseAction);
script=$I$(12).rep$S$S$S(script, "_X", "" + x);
script=(function(a,f){return f.apply(null,a)})([script, "_Y", "" + (this.vwr.getScreenHeight$() - y)],$I$(12).rep$S$S$S);
script=$I$(12).rep$S$S$S(script, "_DELTAX", "" + deltaX);
script=$I$(12).rep$S$S$S(script, "_DELTAY", "" + deltaY);
script=$I$(12).rep$S$S$S(script, "_TIME", "" + time);
script=$I$(12).rep$S$S$S(script, "_MODE", "" + mode);
if (script.startsWith$S("+:")) {
passThrough=true;
script=script.substring$I(2);
}this.vwr.evalStringQuiet$S(script);
}
return !passThrough;
}, p$1);

Clazz.newMeth(C$, 'checkMotionRotateZoom$I$I$I$I$Z', function (mouseAction, x, deltaX, deltaY, isDrag) {
var isSlideZoom=this.bnd$I$IA(mouseAction, [40]) && p$1.isZoomArea$I.apply(this, [this.pressed.x]) ;
var isRotateXY=this.bnd$I$IA(mouseAction, [25]);
var isRotateZorZoom=this.bnd$I$IA(mouseAction, [29]);
if (!isSlideZoom && !isRotateXY && !isRotateZorZoom  ) return false;
var isZoom=(isRotateZorZoom && (deltaX == 0 || Math.abs(deltaY) > 5 * Math.abs(deltaX) ) );
var cursor=(isZoom || p$1.isZoomArea$I.apply(this, [this.moved.x]) || this.bnd$I$IA(mouseAction, [46])   ? 8 : isRotateXY || isRotateZorZoom  ? 13 : this.bnd$I$IA(mouseAction, [1]) ? 12 : 0);
this.setMotion$I$Z(cursor, isDrag);
return (isZoom || isSlideZoom );
}, p$1);

Clazz.newMeth(C$, 'getExitRate', function () {
var dt=this.dragGesture.getTimeDifference$I(2);
return (this.isMultiTouch ? (dt > (80) ? 0 : this.dragGesture.getSpeedPixelsPerMillisecond$I$I(2, 1)) : (dt > 10 ? 0 : this.dragGesture.getSpeedPixelsPerMillisecond$I$I(4, 2)));
}, p$1);

Clazz.newMeth(C$, 'isRubberBandSelect$I', function (action) {
action=action & ~8192 | 32768;
return (this.rubberbandSelectionMode && this.bnd$I$IA(action, [35, 34, 32]) );
}, p$1);

Clazz.newMeth(C$, 'getRubberBand$', function () {
return (this.rubberbandSelectionMode && this.rectRubber.x != 2147483647  ? this.rectRubber : null);
});

Clazz.newMeth(C$, 'calcRectRubberBand', function () {
var factor=(this.vwr.antialiased ? 2 : 1);
if (this.current.x < this.pressed.x) {
this.rectRubber.x=this.current.x * factor;
this.rectRubber.width=(this.pressed.x - this.current.x) * factor;
} else {
this.rectRubber.x=this.pressed.x * factor;
this.rectRubber.width=(this.current.x - this.pressed.x) * factor;
}if (this.current.y < this.pressed.y) {
this.rectRubber.y=this.current.y * factor;
this.rectRubber.height=(this.pressed.y - this.current.y) * factor;
} else {
this.rectRubber.y=this.pressed.y * factor;
this.rectRubber.height=(this.current.y - this.pressed.y) * factor;
}}, p$1);

Clazz.newMeth(C$, 'getDegrees$F$Z', function (delta, isX) {
return delta / Math.min(500, isX ? this.vwr.getScreenWidth$() : this.vwr.getScreenHeight$()) * 180 * this.mouseDragFactor;
});

Clazz.newMeth(C$, 'isZoomArea$I', function (x) {
return x > this.vwr.getScreenWidth$() * (this.vwr.tm.stereoDoubleFull || this.vwr.tm.stereoDoubleDTI  ? 2 : 1) * 98  / 100.0 ;
}, p$1);

Clazz.newMeth(C$, 'getPoint$java_util_Map', function (t) {
var pt=Clazz.new_($I$(14,1));
pt.setT$javajs_util_T3(t.get$O("pt"));
pt.mi=($s$[0] = (t.get$O("modelIndex")).intValue$(), $s$[0]);
return pt;
}, p$1);

Clazz.newMeth(C$, 'findNearestAtom$I$I$org_jmol_util_Point3fi$Z', function (x, y, nearestPoint, isClicked) {
var index=(this.drawMode || nearestPoint != null   ? -1 : this.vwr.findNearestAtomIndexMovable$I$I$Z(x, y, false));
return (index >= 0 && (isClicked || this.mp == null  )  && !this.vwr.slm.isInSelectionSubset$I(index)  ? -1 : index);
}, p$1);

Clazz.newMeth(C$, 'isSelectAction$I', function (action) {
return (this.bnd$I$IA(action, [17]) || !this.drawMode && !this.labelMode && this.apm == 1   && this.bnd$I$IA(action, [1])   || this.dragSelectedMode && this.bnd$I$IA(this.dragAction, [27, 13])   || this.bnd$I$IA(action, [22, 35, 32, 34, 36, 30]) );
}, p$1);

Clazz.newMeth(C$, 'enterMeasurementMode$I', function (iAtom) {
this.vwr.setPicked$I$Z(iAtom, true);
this.vwr.setCursor$I(1);
this.vwr.setPendingMeasurement$org_jmol_modelset_MeasurementPending(this.mp=p$1.getMP.apply(this, []));
this.measurementQueued=this.mp;
}, p$1);

Clazz.newMeth(C$, 'getMP', function () {
return ($I$(15).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.modelset.MeasurementPending", this.vwr, "mouse")).set$org_jmol_modelset_ModelSet(this.vwr.ms);
}, p$1);

Clazz.newMeth(C$, 'addToMeasurement$I$org_jmol_util_Point3fi$Z', function (atomIndex, nearestPoint, dblClick) {
if (atomIndex == -1 && nearestPoint == null   || this.mp == null  ) {
this.exitMeasurementMode$S(null);
return 0;
}var measurementCount=this.mp.count;
if (this.mp.traceX != -2147483648 && measurementCount == 2 ) this.mp.setCount$I(measurementCount=1);
return (measurementCount == 4 && !dblClick  ? measurementCount : this.mp.addPoint$I$org_jmol_util_Point3fi$Z(atomIndex, nearestPoint, true));
}, p$1);

Clazz.newMeth(C$, 'resetMeasurement', function () {
this.exitMeasurementMode$S(null);
this.measurementQueued=p$1.getMP.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'exitMeasurementMode$S', function (refreshWhy) {
if (this.mp == null ) return;
this.vwr.setPendingMeasurement$org_jmol_modelset_MeasurementPending(this.mp=null);
this.vwr.setCursor$I(0);
if (refreshWhy != null ) this.vwr.refresh$I$S(3, refreshWhy);
});

Clazz.newMeth(C$, 'getSequence', function () {
var a1=this.measurementQueued.getAtomIndex$I(1);
var a2=this.measurementQueued.getAtomIndex$I(2);
if (a1 < 0 || a2 < 0 ) return;
try {
var sequence=this.vwr.getSmilesOpt$javajs_util_BS$I$I$I$S(null, a1, a2, 1048576, null);
this.vwr.setStatusMeasuring$S$I$S$F("measureSequence", -2, sequence, 0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
(function(a,f){return f.apply(null,a)})([e.toString()],$I$(10).error$S);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'minimize$Z', function (dragDone) {
var iAtom=this.dragAtomIndex;
if (dragDone) {
this.dragAtomIndex=-1;
this.mkBondPressed=false;
}this.vwr.dragMinimizeAtom$I(iAtom);
}, p$1);

Clazz.newMeth(C$, 'queueAtom$I$org_jmol_util_Point3fi', function (atomIndex, ptClicked) {
var n=this.measurementQueued.addPoint$I$org_jmol_util_Point3fi$Z(atomIndex, ptClicked, true);
if (atomIndex >= 0) this.vwr.setStatusAtomPicked$I$S$java_util_Map$Z(atomIndex, "Atom #" + n + ":" + this.vwr.getAtomInfo$I(atomIndex) , null, false);
return n;
}, p$1);

Clazz.newMeth(C$, 'setMotion$I$Z', function (cursor, inMotion) {
switch (this.vwr.currentCursor) {
case 3:
break;
default:
this.vwr.setCursor$I(cursor);
}
if (inMotion) this.vwr.setInMotion$Z(true);
});

Clazz.newMeth(C$, 'zoomByFactor$I$I$I', function (dz, x, y) {
if (dz == 0) return;
this.setMotion$I$Z(8, true);
this.vwr.zoomByFactor$F$I$I(Math.pow(this.mouseWheelFactor, dz), x, y);
this.moved.setCurrent$org_jmol_viewer_MouseState$I(this.current, 0);
this.vwr.setInMotion$Z(true);
this.zoomTrigger=true;
this.startHoverWatcher$Z(true);
});

Clazz.newMeth(C$, 'runScript$S', function (script) {
this.vwr.script$S(script);
}, p$1);

Clazz.newMeth(C$, 'atomOrPointPicked$I$org_jmol_util_Point3fi', function (atomIndex, ptClicked) {
if (atomIndex < 0) {
p$1.resetMeasurement.apply(this, []);
if (this.bnd$I$IA(this.clickAction, [33])) {
p$1.runScript$S.apply(this, ["select none"]);
return;
}if (this.apm != 5 && this.apm != 6 ) return;
}var n=2;
switch (this.apm) {
case 28:
case 29:
return;
case 0:
return;
case 25:
case 24:
case 8:
var isDelete=(this.apm == 8);
var isStruts=(this.apm == 25);
if (!this.bnd$I$IA(this.clickAction, [(isDelete ? 5 : 3)])) return;
if (this.measurementQueued == null  || this.measurementQueued.count == 0  || this.measurementQueued.count > 2 ) {
p$1.resetMeasurement.apply(this, []);
p$1.enterMeasurementMode$I.apply(this, [atomIndex]);
}p$1.addToMeasurement$I$org_jmol_util_Point3fi$Z.apply(this, [atomIndex, ptClicked, true]);
if (p$1.queueAtom$I$org_jmol_util_Point3fi.apply(this, [atomIndex, ptClicked]) != 2) return;
var cAction=(isDelete || this.measurementQueued.isConnected$org_jmol_modelset_AtomA$I(this.vwr.ms.at, 2)  ? " DELETE" : isStruts ? "STRUTS" : "");
p$1.runScript$S.apply(this, ["connect " + this.measurementQueued.getMeasurementScript$S$Z(" ", true) + cAction ]);
p$1.resetMeasurement.apply(this, []);
return;
case 21:
n++;
case 20:
n++;
case 18:
case 19:
case 22:
if (!this.bnd$I$IA(this.clickAction, [20])) return;
if (this.measurementQueued == null  || this.measurementQueued.count == 0  || this.measurementQueued.count > n ) {
p$1.resetMeasurement.apply(this, []);
p$1.enterMeasurementMode$I.apply(this, [atomIndex]);
}p$1.addToMeasurement$I$org_jmol_util_Point3fi$Z.apply(this, [atomIndex, ptClicked, true]);
p$1.queueAtom$I$org_jmol_util_Point3fi.apply(this, [atomIndex, ptClicked]);
var i=this.measurementQueued.count;
if (i == 1) this.vwr.setPicked$I$Z(atomIndex, true);
if (i < n) return;
if (this.apm == 22) {
p$1.getSequence.apply(this, []);
} else {
this.vwr.setStatusMeasuring$S$I$S$F("measurePicked", n, this.measurementQueued.getStringDetail$(), this.measurementQueued.value);
if (this.apm == 18 || this.pickingStyleMeasure == 4 ) {
p$1.runScript$S.apply(this, ["measure " + this.measurementQueued.getMeasurementScript$S$Z(" ", true)]);
}}p$1.resetMeasurement.apply(this, []);
return;
}
var mode=(this.mp != null  && this.apm != 1  ? 1 : this.apm);
switch (mode) {
case 3:
if (!this.bnd$I$IA(this.clickAction, [17])) return;
if (ptClicked == null ) {
p$1.zoomTo$I.apply(this, [atomIndex]);
} else {
p$1.runScript$S.apply(this, ["zoomTo " + $I$(13).eP$javajs_util_T3(ptClicked)]);
}return;
case 5:
case 6:
if (this.bnd$I$IA(this.clickAction, [17])) p$1.checkTwoAtomAction$org_jmol_util_Point3fi$I.apply(this, [ptClicked, atomIndex]);
}
if (ptClicked != null ) return;
var bs;
switch (mode) {
case 1:
if (!this.drawMode && !this.labelMode && this.bnd$I$IA(this.clickAction, [1])  ) p$1.zoomTo$I.apply(this, [atomIndex]);
 else if (this.bnd$I$IA(this.clickAction, [17])) this.vwr.setStatusAtomPicked$I$S$java_util_Map$Z(atomIndex, null, null, false);
return;
case 2:
if (this.bnd$I$IA(this.clickAction, [19])) {
p$1.runScript$S.apply(this, ["set labeltoggle {atomindex=" + atomIndex + "}" ]);
p$1.pickLabel$I.apply(this, [atomIndex]);
}return;
case 31:
if (this.bnd$I$IA(this.clickAction, [0])) {
this.vwr.invertRingAt$I$Z(atomIndex, true);
this.vwr.setStatusAtomPicked$I$S$java_util_Map$Z(atomIndex, "invert stereo for atomIndex=" + atomIndex, null, false);
}return;
case 7:
if (this.bnd$I$IA(this.clickAction, [4])) {
bs=$I$(8).newAndSetBit$I(atomIndex);
this.vwr.deleteAtoms$javajs_util_BS$Z(bs, false);
this.vwr.setStatusAtomPicked$I$S$java_util_Map$Z(atomIndex, "deleted: " + $I$(13).eBS$javajs_util_BS(bs), null, false);
}return;
}
var spec="atomindex=" + atomIndex;
switch (this.apm) {
default:
return;
case 9:
p$1.selectAtoms$S.apply(this, [spec]);
break;
case 10:
p$1.selectAtoms$S.apply(this, ["within(group, " + spec + ")" ]);
break;
case 11:
p$1.selectAtoms$S.apply(this, ["within(chain, " + spec + ")" ]);
break;
case 13:
p$1.selectAtoms$S.apply(this, ["within(polymer, " + spec + ")" ]);
break;
case 14:
p$1.selectAtoms$S.apply(this, ["within(structure, " + spec + ")" ]);
break;
case 12:
p$1.selectAtoms$S.apply(this, ["within(molecule, " + spec + ")" ]);
break;
case 16:
p$1.selectAtoms$S.apply(this, ["within(model, " + spec + ")" ]);
break;
case 17:
p$1.selectAtoms$S.apply(this, ["visible and within(element, " + spec + ")" ]);
break;
case 15:
p$1.selectAtoms$S.apply(this, ["visible and within(site, " + spec + ")" ]);
break;
}
this.vwr.clearClickCount$();
this.vwr.setStatusAtomPicked$I$S$java_util_Map$Z(atomIndex, null, null, false);
}, p$1);

Clazz.newMeth(C$, 'assignNew$I$I', function (x, y) {
if (!this.vwr.getModelkit$Z(false).handleAssignNew$org_jmol_viewer_MouseState$org_jmol_viewer_MouseState$org_jmol_modelset_MeasurementPending$I(this.pressed, this.dragged, this.mp, this.dragAtomIndex)) {
this.exitMeasurementMode$S("bond dropped");
}this.exitMeasurementMode$S(null);
}, p$1);

Clazz.newMeth(C$, 'bondPicked$I', function (index) {
if (this.bondPickingMode == 33) {
this.vwr.undoMoveActionClear$I$I$Z(-1, 4146, true);
}switch (this.bondPickingMode) {
case 33:
this.vwr.setModelkitProperty$S$O("scriptAssignBond", Integer.valueOf$I(index));
break;
case 34:
break;
case 8:
this.vwr.deleteBonds$javajs_util_BS($I$(8).newAndSetBit$I(index));
}
}, p$1);

Clazz.newMeth(C$, 'checkTwoAtomAction$org_jmol_util_Point3fi$I', function (ptClicked, atomIndex) {
var isSpin=(this.apm == 5);
if (this.vwr.tm.spinOn || this.vwr.tm.navOn || this.vwr.getPendingMeasurement$() != null   ) {
p$1.resetMeasurement.apply(this, []);
if (this.vwr.tm.spinOn) p$1.runScript$S.apply(this, ["spin off"]);
return;
}if (this.measurementQueued.count >= 2) p$1.resetMeasurement.apply(this, []);
var queuedAtomCount=this.measurementQueued.count;
if (queuedAtomCount == 1) {
if (ptClicked == null ) {
if (this.measurementQueued.getAtomIndex$I(1) == atomIndex) return;
} else {
if (this.measurementQueued.getAtom$I(1).distance$javajs_util_T3(ptClicked) == 0 ) return;
}}if (atomIndex >= 0 || ptClicked != null  ) queuedAtomCount=p$1.queueAtom$I$org_jmol_util_Point3fi.apply(this, [atomIndex, ptClicked]);
if (queuedAtomCount < 2) {
if (isSpin) this.vwr.scriptStatus$S(queuedAtomCount == 1 ? $I$(7).$$S("pick one more atom in order to spin the model around an axis") : $I$(7).$$S("pick two atoms in order to spin the model around an axis"));
 else this.vwr.scriptStatus$S(queuedAtomCount == 1 ? $I$(7).$$S("pick one more atom in order to display the symmetry relationship") : $I$(7).$$S("pick two atoms in order to display the symmetry relationship between them"));
return;
}var s=this.measurementQueued.getMeasurementScript$S$Z(" ", false);
if (isSpin) p$1.runScript$S.apply(this, ["spin" + s + " " + this.vwr.getInt$I(553648157) ]);
 else p$1.runScript$S.apply(this, ["draw symop " + s + ";show symop " + s ]);
}, p$1);

Clazz.newMeth(C$, 'reset', function () {
p$1.runScript$S.apply(this, ["!reset"]);
}, p$1);

Clazz.newMeth(C$, 'selectAtoms$S', function (item) {
if (this.mp != null  || this.selectionWorking ) return;
this.selectionWorking=true;
var s=(this.rubberbandSelectionMode || this.bnd$I$IA(this.clickAction, [35])  ? "selected and not (" + item + ") or (not selected) and "  : this.bnd$I$IA(this.clickAction, [32]) ? "selected and not " : this.bnd$I$IA(this.clickAction, [34]) ? "selected or " : this.clickAction == 0 || this.bnd$I$IA(this.clickAction, [36])  ? "selected tog " : this.bnd$I$IA(this.clickAction, [30]) ? "" : null);
if (s != null ) {
s += "(" + item + ")" ;
try {
var bs=this.vwr.getAtomBitSetEval$org_jmol_api_JmolScriptEvaluator$O(null, s);
p$1.setAtomsPicked$javajs_util_BS$S.apply(this, [bs, "selected: " + $I$(13).eBS$javajs_util_BS(bs)]);
this.vwr.refresh$I$S(3, "selections set");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}this.selectionWorking=false;
}, p$1);

Clazz.newMeth(C$, 'setAtomsPicked$javajs_util_BS$S', function (bs, msg) {
this.vwr.select$javajs_util_BS$Z$I$Z(bs, false, 0, false);
this.vwr.setStatusAtomPicked$I$S$java_util_Map$Z(-1, msg, null, false);
}, p$1);

Clazz.newMeth(C$, 'selectRb$I', function (action) {
var bs=this.vwr.ms.findAtomsInRectangle$org_jmol_util_Rectangle(this.rectRubber);
if (bs.length$() > 0) {
var s=$I$(13).eBS$javajs_util_BS(bs);
if (this.bnd$I$IA(action, [34])) p$1.runScript$S.apply(this, ["selectionHalos on;select selected or " + s]);
 else if (this.bnd$I$IA(action, [32])) p$1.runScript$S.apply(this, ["selectionHalos on;select selected and not " + s]);
 else p$1.runScript$S.apply(this, ["selectionHalos on;select selected tog " + s]);
}this.vwr.refresh$I$S(3, "mouseReleased");
}, p$1);

Clazz.newMeth(C$, 'toggleMeasurement', function () {
if (this.mp == null ) return;
var measurementCount=this.mp.count;
if (measurementCount >= 2 && measurementCount <= 4 ) p$1.runScript$S.apply(this, ["!measure " + this.mp.getMeasurementScript$S$Z(" ", true)]);
this.exitMeasurementMode$S(null);
}, p$1);

Clazz.newMeth(C$, 'zoomTo$I', function (atomIndex) {
p$1.runScript$S.apply(this, ["zoomTo (atomindex=" + atomIndex + ")" ]);
this.vwr.setStatusAtomPicked$I$S$java_util_Map$Z(atomIndex, null, null, false);
}, p$1);

Clazz.newMeth(C$, 'userActionEnabled$I', function (action) {
return this.vwr.isFunction$S(C$.getActionName$I(action).toLowerCase$());
});

Clazz.newMeth(C$, 'userAction$I$OA', function (action, params) {
if (!this.userActionEnabled$I(action)) return false;
var result=(function(a,f){return f.apply(null,a)})([C$.getActionName$I(action), params, this.vwr],$I$(16).runUserAction$S$OA$org_jmol_viewer_Viewer);
return !$I$(17).vF.equals$O(result);
});

C$.$static$=function(){C$.$static$=0;
C$.actionInfo=Clazz.array(String, [47]);
C$.actionNames=Clazz.array(String, [47]);
{
C$.pickingModeNames="off identify label center draw spin symmetry deleteatom deletebond atom group chain molecule polymer structure site model element measure distance angle torsion sequence navigate connect struts dragselected dragmolecule dragatom dragminimize dragminimizemolecule invertstereo assignatom assignbond rotatebond identifybond dragligand dragmodel".split$S(" ");
};
{
C$.pickingStyleNames="toggle selectOrToggle extendedSelect drag measure measureoff".split$S(" ");
};
};
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:25 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
