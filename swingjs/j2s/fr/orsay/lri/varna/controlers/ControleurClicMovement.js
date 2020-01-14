(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),p$1={},I$=[[0,['fr.orsay.lri.varna.controlers.ControleurClicMovement','.MouseStates'],'java.awt.Point',['java.awt.geom.Point2D','.Double'],'java.awt.Rectangle','fr.orsay.lri.varna.models.rna.ModeleBP','javax.swing.JMenu','fr.orsay.lri.varna.controlers.ControleurSelectionHighlight','java.util.Vector','javax.swing.JMenuItem']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ControleurClicMovement", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'javax.swing.event.PopupMenuListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this._presenceMenuSelection=false;
this._submenuSelection=null;
this._spawnPoint=null;
this._initialPoint=null;
this._prevPoint=null;
this._currentPoint=null;
this._selectedBase=null;
this._currentState=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._selectedBase=null;
this._currentState=$I$(1).NONE;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (_vuep) {
C$.$init$.apply(this);
this._vp=_vuep;
this._vp.getPopup$().addPopupMenuListener$javax_swing_event_PopupMenuListener(this);
this._presenceMenuSelection=false;
}, 1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (arg0) {
this._vp.requestFocus$();
var button1=(arg0.getButton$() == 1);
var button2=(arg0.getButton$() == 2);
var button3=(arg0.getButton$() == 3);
var shift=arg0.isShiftDown$();
var ctrl=arg0.isControlDown$();
var alt=arg0.isAltDown$();
this._vp.removeSelectedAnnotation$();
if (button1 && !ctrl && !alt && !shift  ) {
if (this._vp.isModifiable$()) {
this._currentState=$I$(1).MOVE_OR_SELECT_ELEMENT;
if (this._vp.getRealCoords$() != null  && this._vp.getRealCoords$().length != 0  && this._vp.getRNA$().get_listeBases$().size$() != 0 ) {
this._selectedBase=this._vp.getNearestBase$I$I$Z$Z(arg0.getX$(), arg0.getY$(), false, false);
var selectedAnnotation=this._vp.getNearestAnnotation$I$I(arg0.getX$(), arg0.getY$());
this._initialPoint=Clazz.new_($I$(2).c$$I$I,[arg0.getX$(), arg0.getY$()]);
this._currentPoint=Clazz.new_($I$(2).c$$java_awt_Point,[this._initialPoint]);
this._prevPoint=Clazz.new_($I$(2).c$$java_awt_Point,[this._initialPoint]);
if (this._selectedBase != null ) {
if (this._vp.getRNA$().get_drawMode$() == 2) {
this._vp.highlightSelectedBase$fr_orsay_lri_varna_models_rna_ModeleBase(this._selectedBase);
} else {
if (!this._vp.getSelectionIndices$().contains$O(new Integer(this._selectedBase.getIndex$()))) {
this._vp.highlightSelectedBase$fr_orsay_lri_varna_models_rna_ModeleBase(this._selectedBase);
} else {
}}} else {
if (selectedAnnotation != null ) {
this._currentState=$I$(1).MOVE_ANNOTATION;
this._vp.set_selectedAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(selectedAnnotation);
this._vp.highlightSelectedAnnotation$();
} else {
this._vp.clearSelection$();
this._selectedBase=null;
this._currentState=$I$(1).SELECT_REGION_OR_UNSELECT;
this._initialPoint=Clazz.new_($I$(2).c$$I$I,[arg0.getX$(), arg0.getY$()]);
this._prevPoint=Clazz.new_($I$(2).c$$java_awt_Point,[this._initialPoint]);
this._currentPoint=Clazz.new_($I$(2).c$$java_awt_Point,[this._initialPoint]);
}}}}} else if (button1 && ctrl && !alt && !shift  ) {
this._selectedBase=this._vp.getNearestBase$I$I$Z$Z(arg0.getX$(), arg0.getY$(), false, false);
if (this._selectedBase != null ) {
this._vp.clearSelection$();
this._currentState=$I$(1).CREATE_BP;
this._vp.highlightSelectedBase$fr_orsay_lri_varna_models_rna_ModeleBase(this._selectedBase);
this._vp.setOriginLink$java_awt_geom_Point2D_Double(this._vp.logicToPanel$java_awt_geom_Point2D_Double(this._selectedBase.getCoords$()));
this._initialPoint=Clazz.new_($I$(2).c$$I$I,[arg0.getX$(), arg0.getY$()]);
this._currentPoint=Clazz.new_($I$(2).c$$java_awt_Point,[this._initialPoint]);
}} else if (button1 && !ctrl && !alt && shift  ) {
this._currentState=$I$(1).SELECT_ELEMENT;
this._initialPoint=Clazz.new_($I$(2).c$$I$I,[arg0.getX$(), arg0.getY$()]);
this._currentPoint=Clazz.new_($I$(2).c$$java_awt_Point,[this._initialPoint]);
} else if (button3) {
this._currentState=$I$(1).POPUP_MENU;
if (this._presenceMenuSelection) {
this._vp.getPopupMenu$().removeSelectionMenu$();
}if ((this._vp.getRealCoords$() != null ) && this._vp.getRNA$().get_listeBases$().size$() != 0 ) {
p$1.updateNearestBase$java_awt_event_MouseEvent.apply(this, [arg0]);
p$1.addMenu$java_awt_event_MouseEvent.apply(this, [arg0]);
if (this._vp.get_selectedAnnotation$() != null ) this._vp.highlightSelectedAnnotation$();
}if (this._vp.getRNA$().get_drawMode$() == 4) {
this._vp.getPopup$().get_rotation$().setEnabled$Z(false);
} else {
this._vp.getPopup$().get_rotation$().setEnabled$Z(true);
}this._vp.getPopup$().updateDialog$();
this._vp.getPopup$().show$java_awt_Component$I$I(this._vp, arg0.getX$(), arg0.getY$());
}this._vp.repaint$();
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (me) {
if ((this._currentState === $I$(1).MOVE_OR_SELECT_ELEMENT ) || (this._currentState === $I$(1).MOVE_ELEMENT ) ) {
this._vp.lockScrolling$();
this._currentState=$I$(1).MOVE_ELEMENT;
if (this._selectedBase != null ) {
if (this._vp.getRNA$().get_drawMode$() == 2) {
this._vp.highlightSelectedStem$fr_orsay_lri_varna_models_rna_ModeleBase(this._selectedBase);
this._vp.getVARNAUI$().UIMoveHelixAtom$I$java_awt_geom_Point2D_Double(this._selectedBase.getIndex$(), this._vp.panelToLogicPoint$java_awt_geom_Point2D_Double(Clazz.new_($I$(3).c$$D$D,[me.getX$(), me.getY$()])));
} else {
this._currentPoint=Clazz.new_($I$(2).c$$I$I,[me.getX$(), me.getY$()]);
p$1.moveSelection$java_awt_Point$java_awt_Point.apply(this, [this._prevPoint, this._currentPoint]);
this._prevPoint=Clazz.new_($I$(2).c$$java_awt_Point,[this._currentPoint]);
}this._vp.repaint$();
}} else if (this._currentState === $I$(1).MOVE_ANNOTATION ) {
if (this._vp.get_selectedAnnotation$() != null ) {
var p=this._vp.panelToLogicPoint$java_awt_geom_Point2D_Double(Clazz.new_($I$(3).c$$D$D,[me.getX$(), me.getY$()]));
this._vp.get_selectedAnnotation$().setAncrage$D$D(p.x, p.y);
this._vp.repaint$();
}} else if ((this._currentState === $I$(1).SELECT_ELEMENT ) || (this._currentState === $I$(1).SELECT_REGION_OR_UNSELECT ) ) {
if (this._initialPoint.distance$D$D(me.getX$(), me.getY$()) > 10.0 ) this._currentState=$I$(1).SELECT_REGION;
} else if (this._currentState === $I$(1).SELECT_REGION ) {
this._currentPoint=Clazz.new_($I$(2).c$$I$I,[me.getX$(), me.getY$()]);
var minx=Math.min(this._currentPoint.x, this._initialPoint.x);
var miny=Math.min(this._currentPoint.y, this._initialPoint.y);
var maxx=Math.max(this._currentPoint.x, this._initialPoint.x);
var maxy=Math.max(this._currentPoint.y, this._initialPoint.y);
this._vp.setSelectionRectangle$java_awt_Rectangle(Clazz.new_($I$(4).c$$I$I$I$I,[minx, miny, maxx - minx, maxy - miny]));
} else if (this._currentState === $I$(1).CREATE_BP ) {
if (this._initialPoint.distance$D$D(me.getX$(), me.getY$()) > 10.0 ) {
var newSelectedBase=this._vp.getNearestBase$I$I$Z$Z(me.getX$(), me.getY$(), false, false);
this._vp.setHoverBase$fr_orsay_lri_varna_models_rna_ModeleBase(newSelectedBase);
if (newSelectedBase == null ) {
this._vp.setDestinationLink$java_awt_geom_Point2D_Double(Clazz.new_($I$(3).c$$D$D,[me.getX$(), me.getY$()]));
this._vp.clearSelection$();
this._vp.addToSelection$I(this._selectedBase.getIndex$());
} else {
var mborig=this._selectedBase;
this._vp.clearSelection$();
this._vp.addToSelection$I(newSelectedBase.getIndex$());
this._vp.addToSelection$I(mborig.getIndex$());
this._vp.setDestinationLink$java_awt_geom_Point2D_Double(this._vp.logicToPanel$java_awt_geom_Point2D_Double(newSelectedBase.getCoords$()));
}this._vp.repaint$();
}}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (arg0) {
if (arg0.getButton$() == 1) {
this._vp.fireBaseClicked$fr_orsay_lri_varna_models_rna_ModeleBase$java_awt_event_MouseEvent(this._selectedBase, arg0);
if (this._currentState === $I$(1).MOVE_ELEMENT ) {
this._vp.clearSelection$();
this._selectedBase=null;
this._vp.unlockScrolling$();
this._vp.removeSelectedAnnotation$();
} else if (this._currentState === $I$(1).SELECT_REGION_OR_UNSELECT ) {
this._vp.clearSelection$();
this._selectedBase=null;
this._vp.removeSelectedAnnotation$();
} else if (this._currentState === $I$(1).SELECT_ELEMENT ) {
if (this._vp.getRealCoords$() != null  && this._vp.getRealCoords$().length != 0  && this._vp.getRNA$().get_listeBases$().size$() != 0 ) {
var selectedIndex=this._vp.getNearestBaseIndex$I$I$Z$Z(arg0.getX$(), arg0.getY$(), false, false);
if (selectedIndex != -1) {
this._vp.toggleSelection$I(selectedIndex);
}}this._selectedBase=null;
} else if (this._currentState === $I$(1).SELECT_REGION ) {
this._vp.removeSelectionRectangle$();
} else if (this._currentState === $I$(1).CREATE_BP ) {
if (this._initialPoint.distance$D$D(arg0.getX$(), arg0.getY$()) > 10.0 ) {
var selectedIndex=this._vp.getNearestBaseIndex$I$I$Z$Z(arg0.getX$(), arg0.getY$(), false, false);
if (selectedIndex >= 0) {
var mb=this._vp.getNearestBase$I$I$Z$Z(arg0.getX$(), arg0.getY$(), false, false);
var mborig=this._selectedBase;
var msbp=Clazz.new_($I$(5).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase,[mb, mborig]);
if (mb !== mborig ) {
this._vp.getVARNAUI$().UIAddBP$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(mb.getIndex$(), mborig.getIndex$(), msbp);
}}}this._vp.removeLink$();
this._vp.clearSelection$();
this._vp.repaint$();
} else {
this._vp.clearSelection$();
}}this._currentState=$I$(1).NONE;
this._vp.repaint$();
});

Clazz.newMeth(C$, 'addMenu$java_awt_event_MouseEvent', function (arg0) {
this._submenuSelection=Clazz.new_($I$(6).c$$S,["Selection"]);
p$1.addCurrent.apply(this, []);
p$1.addMenuBase.apply(this, []);
if (this._vp.getRNA$().get_listeBases$().get$I((this._vp.getNearestBase$()).intValue$()).getElementStructure$() != -1) {
p$1.addMenuBasePair.apply(this, []);
}p$1.detectBulge.apply(this, []);
p$1.detect3Prime.apply(this, []);
p$1.detect5Prime.apply(this, []);
p$1.detectLoop.apply(this, []);
p$1.detectHelix.apply(this, []);
p$1.detectStem.apply(this, []);
p$1.addAllBase.apply(this, []);
p$1.detectAnnotation$java_awt_event_MouseEvent.apply(this, [arg0]);
this._vp.getPopup$().addSelectionMenu$javax_swing_JMenuItem(this._submenuSelection);
this._presenceMenuSelection=true;
}, p$1);

Clazz.newMeth(C$, 'detectAnnotation$java_awt_event_MouseEvent', function (arg0) {
if (this._vp.getListeAnnotations$().size$() != 0) {
var dist=1.7976931348623157E308;
var d2;
var position;
for (var textAnnot, $textAnnot = this._vp.getListeAnnotations$().iterator$(); $textAnnot.hasNext$()&&((textAnnot=($textAnnot.next$())),1);) {
position=textAnnot.getCenterPosition$();
position=this._vp.transformCoord$java_awt_geom_Point2D_Double(position);
d2=Math.sqrt(Math.pow((position.x - arg0.getX$()), 2) + Math.pow((position.y - arg0.getY$()), 2));
if (dist > d2 ) {
this._vp.set_selectedAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(textAnnot);
dist=d2;
}}
this._submenuSelection.addSeparator$();
this._vp.getPopup$().addAnnotationMenu$javax_swing_JMenu$Z(this._submenuSelection, true);
}}, p$1);

Clazz.newMeth(C$, 'detectBulge', function () {
var indiceB=(this._vp.getNearestBase$()).intValue$();
var indices=this._vp.getRNA$().findBulge$I(indiceB);
if ((indices.size$() > 0) && (this._vp.getRNA$().getHelixCountOnLoop$I((this._vp.getNearestBase$()).intValue$()) == 2) ) {
var submenuBulge=Clazz.new_($I$(6).c$$S,["Bulge"]);
submenuBulge.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$java_util_Vector$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem,[Clazz.new_($I$(8).c$$java_util_Collection,[indices]), this._vp, submenuBulge]));
submenuBulge.setActionCommand$S("bulge");
if (!this._vp.isModifiable$()) submenuBulge.setEnabled$Z(false);
this._vp.getPopupMenu$().addColorOptions$javax_swing_JMenu(submenuBulge);
this._submenuSelection.add$javax_swing_JMenuItem(submenuBulge);
}}, p$1);

Clazz.newMeth(C$, 'detectHelix', function () {
var indiceH=(this._vp.getNearestBase$()).intValue$();
var indices=this._vp.getRNA$().findHelix$I(indiceH);
if (indices.size$() != 0) {
var submenuHelix=Clazz.new_($I$(6).c$$S,["Helix"]);
submenuHelix.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$java_util_Vector$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem,[Clazz.new_($I$(8).c$$java_util_Collection,[indices]), this._vp, submenuHelix]));
submenuHelix.setActionCommand$S("helix");
if (!this._vp.isModifiable$()) submenuHelix.setEnabled$Z(false);
this._vp.getPopupMenu$().addColorOptions$javax_swing_JMenu(submenuHelix);
submenuHelix.addSeparator$();
this._vp.getPopupMenu$().addAnnotationMenu$javax_swing_JMenu(submenuHelix);
this._submenuSelection.add$javax_swing_JMenuItem(submenuHelix);
}}, p$1);

Clazz.newMeth(C$, 'detectStem', function () {
var indiceS=(this._vp.getNearestBase$()).intValue$();
var indices=this._vp.getRNA$().findStem$I(indiceS);
if (indices.size$() > 0) {
var submenuStem=Clazz.new_($I$(6).c$$S,["Stem"]);
submenuStem.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$java_util_Vector$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem,[Clazz.new_($I$(8).c$$java_util_Collection,[indices]), this._vp, submenuStem]));
submenuStem.setActionCommand$S("stem");
if (!this._vp.isModifiable$()) submenuStem.setEnabled$Z(false);
this._vp.getPopupMenu$().addColorOptions$javax_swing_JMenu(submenuStem);
this._submenuSelection.add$javax_swing_JMenuItem(submenuStem);
}}, p$1);

Clazz.newMeth(C$, 'detect3Prime', function () {
var indice3=(this._vp.getNearestBase$()).intValue$();
var indices=this._vp.getRNA$().find3Prime$I(indice3);
if (indices.size$() != 0) {
var submenu3Prime=Clazz.new_($I$(6).c$$S,["3\'"]);
submenu3Prime.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$java_util_Vector$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem,[Clazz.new_($I$(8).c$$java_util_Collection,[indices]), this._vp, submenu3Prime]));
submenu3Prime.setActionCommand$S("3\'");
if (!this._vp.isModifiable$()) submenu3Prime.setEnabled$Z(false);
this._vp.getPopupMenu$().addColorOptions$javax_swing_JMenu(submenu3Prime);
this._submenuSelection.add$javax_swing_JMenuItem(submenu3Prime);
}}, p$1);

Clazz.newMeth(C$, 'detect5Prime', function () {
var indice5=(this._vp.getNearestBase$()).intValue$();
var indices=this._vp.getRNA$().find5Prime$I(indice5);
if (indices.size$() != 0) {
var submenu5Prime=Clazz.new_($I$(6).c$$S,["5\'"]);
submenu5Prime.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$java_util_Vector$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem,[Clazz.new_($I$(8).c$$java_util_Collection,[indices]), this._vp, submenu5Prime]));
submenu5Prime.setActionCommand$S("5\'");
if (!this._vp.isModifiable$()) submenu5Prime.setEnabled$Z(false);
this._vp.getPopupMenu$().addColorOptions$javax_swing_JMenu(submenu5Prime);
this._submenuSelection.add$javax_swing_JMenuItem(submenu5Prime);
}}, p$1);

Clazz.newMeth(C$, 'detectLoop', function () {
var indexL=(this._vp.getNearestBase$()).intValue$();
if (this._vp.getRNA$().get_listeBases$().get$I(indexL).getElementStructure$() == -1) {
var listLoop=this._vp.getRNA$().findLoop$I(indexL);
var submenuLoop=Clazz.new_($I$(6).c$$S,["Loop"]);
submenuLoop.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$java_util_ArrayList$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem,[listLoop, this._vp, submenuLoop]));
submenuLoop.setActionCommand$S("loop1");
if (!this._vp.isModifiable$()) submenuLoop.setEnabled$Z(false);
this._vp.getPopupMenu$().addColorOptions$javax_swing_JMenu(submenuLoop);
submenuLoop.addSeparator$();
this._vp.getPopupMenu$().addAnnotationMenu$javax_swing_JMenu(submenuLoop);
this._submenuSelection.add$javax_swing_JMenuItem(submenuLoop);
} else {
var listLoop1=this._vp.getRNA$().findLoopForward$I(indexL);
if (listLoop1.size$() > 0) {
var submenuLoop1=Clazz.new_($I$(6).c$$S,["Forward loop"]);
submenuLoop1.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$java_util_ArrayList$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem,[listLoop1, this._vp, submenuLoop1]));
submenuLoop1.setActionCommand$S("loop1");
if (!this._vp.isModifiable$()) submenuLoop1.setEnabled$Z(false);
this._vp.getPopupMenu$().addColorOptions$javax_swing_JMenu(submenuLoop1);
submenuLoop1.addSeparator$();
this._vp.getPopupMenu$().addAnnotationMenu$javax_swing_JMenu(submenuLoop1);
this._submenuSelection.add$javax_swing_JMenuItem(submenuLoop1);
}var listLoop2=this._vp.getRNA$().findLoopBackward$I(indexL);
if (listLoop2.size$() > 0) {
var submenuLoop2=Clazz.new_($I$(6).c$$S,["Backward loop"]);
submenuLoop2.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$java_util_ArrayList$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem,[listLoop2, this._vp, submenuLoop2]));
submenuLoop2.setActionCommand$S("loop2");
if (!this._vp.isModifiable$()) submenuLoop2.setEnabled$Z(false);
this._vp.getPopupMenu$().addColorOptions$javax_swing_JMenu(submenuLoop2);
submenuLoop2.addSeparator$();
this._vp.getPopupMenu$().addAnnotationMenu$javax_swing_JMenu(submenuLoop2);
this._submenuSelection.add$javax_swing_JMenuItem(submenuLoop2);
}}}, p$1);

Clazz.newMeth(C$, 'addCurrent', function () {
var mbs=this._vp.getSelection$().getBases$();
if (mbs.size$() > 0) {
var submenuAll=Clazz.new_($I$(6).c$$S,["Current"]);
submenuAll.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$java_util_Collection$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem,[mbs, this._vp, submenuAll]));
submenuAll.setActionCommand$S("current");
if (!this._vp.isModifiable$()) submenuAll.setEnabled$Z(false);
this._vp.getPopupMenu$().addColorOptions$javax_swing_JMenu(submenuAll);
this._submenuSelection.add$javax_swing_JMenuItem(submenuAll);
}}, p$1);

Clazz.newMeth(C$, 'addMenuBase', function () {
var submenuBase=Clazz.new_($I$(6));
var mb=this._vp.getRNA$().get_listeBases$().get$I((this._vp.getNearestBase$()).intValue$());
if (Clazz.instanceOf(mb, "fr.orsay.lri.varna.models.rna.ModeleBasesComparison")) {
submenuBase.setText$S("Base #" + (mb.getBaseNumber$()) + ":" + (mb).getBases$() );
} else {
submenuBase.setText$S("Base #" + (mb.getBaseNumber$()) + ":" + (mb).getBase$() );
}submenuBase.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$I$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem,[mb.getIndex$(), this._vp, submenuBase]));
submenuBase.setActionCommand$S("base");
if (!this._vp.isModifiable$()) submenuBase.setEnabled$Z(false);
var baseChar=Clazz.new_($I$(9).c$$S,["Edit base"]);
baseChar.setActionCommand$S("baseChar");
baseChar.addActionListener$java_awt_event_ActionListener(this._vp.getPopupMenu$().get_controleurMenu$());
submenuBase.add$javax_swing_JMenuItem(baseChar);
this._vp.getPopupMenu$().addColorOptions$javax_swing_JMenu(submenuBase);
submenuBase.addSeparator$();
this._vp.getPopupMenu$().addAnnotationMenu$javax_swing_JMenu(submenuBase);
this._submenuSelection.add$javax_swing_JMenuItem(submenuBase);
}, p$1);

Clazz.newMeth(C$, 'addAllBase', function () {
var indices=this._vp.getRNA$().findAll$();
var submenuAll=Clazz.new_($I$(6).c$$S,["All"]);
submenuAll.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$java_util_Vector$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem,[Clazz.new_($I$(8).c$$java_util_Collection,[indices]), this._vp, submenuAll]));
submenuAll.setActionCommand$S("all");
if (!this._vp.isModifiable$()) submenuAll.setEnabled$Z(false);
this._vp.getPopupMenu$().addColorOptions$javax_swing_JMenu(submenuAll);
this._submenuSelection.add$javax_swing_JMenuItem(submenuAll);
}, p$1);

Clazz.newMeth(C$, 'addMenuBasePair', function () {
var indiceBP=(this._vp.getNearestBase$()).intValue$();
var indices=this._vp.getRNA$().findPair$I(indiceBP);
var base=this._vp.getRNA$().get_listeBases$().get$I((this._vp.getNearestBase$()).intValue$());
if (base.getElementStructure$() != -1) {
var submenuBasePair=Clazz.new_($I$(6));
var partner=this._vp.getRNA$().get_listeBases$().get$I(base.getElementStructure$());
submenuBasePair.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$java_util_ArrayList$fr_orsay_lri_varna_VARNAPanel$javax_swing_JMenuItem,[indices, this._vp, submenuBasePair]));
submenuBasePair.setText$S("Base pair #(" + (Math.min(base.getBaseNumber$(), partner.getBaseNumber$())) + "," + (Math.max(base.getBaseNumber$(), partner.getBaseNumber$())) + ")" );
submenuBasePair.setActionCommand$S("bp");
if (!this._vp.isModifiable$()) submenuBasePair.setEnabled$Z(false);
var basepair=Clazz.new_($I$(9).c$$S,["Edit BP"]);
basepair.setActionCommand$S("basepair");
basepair.addActionListener$java_awt_event_ActionListener(this._vp.getPopupMenu$().get_controleurMenu$());
this._vp.getPopupMenu$().addColorOptions$javax_swing_JMenu(submenuBasePair);
var comps=submenuBasePair.getMenuComponents$();
var offset=-1;
for (var i=0; i < comps.length; i++) {
var c=comps[i];
if (Clazz.instanceOf(c, "javax.swing.JMenuItem")) {
var jmi=c;
if (jmi.getActionCommand$().contains$CharSequence(",BPColor")) {
offset=i;
}}}
if (offset != -1) {
submenuBasePair.insert$javax_swing_JMenuItem$I(basepair, offset);
} else {
submenuBasePair.add$javax_swing_JMenuItem(basepair);
}this._submenuSelection.add$javax_swing_JMenuItem(submenuBasePair);
}}, p$1);

Clazz.newMeth(C$, 'updateNearestBase$java_awt_event_MouseEvent', function (arg0) {
var i=this._vp.getNearestBaseIndex$I$I$Z$Z(arg0.getX$(), arg0.getY$(), true, false);
if (i != -1) this._vp.setNearestBase$Integer(new Integer(i));
}, p$1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (arg0) {
this._selectedBase=this._vp.getNearestBase$I$I(arg0.getX$(), arg0.getY$());
var selectedAnnotation=this._vp.getNearestAnnotation$I$I(arg0.getX$(), arg0.getY$());
this._vp.setHoverBase$fr_orsay_lri_varna_models_rna_ModeleBase(this._selectedBase);
if (this._selectedBase != null ) {
} else if (selectedAnnotation != null ) {
this._vp.set_selectedAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(selectedAnnotation);
this._vp.highlightSelectedAnnotation$();
this._vp.repaint$();
}this._vp.setLastSelectedPosition$java_awt_geom_Point2D_Double(Clazz.new_($I$(3).c$$D$D,[arg0.getX$(), arg0.getY$()]));
});

Clazz.newMeth(C$, 'moveSelection$java_awt_Point$java_awt_Point', function (prev, cur) {
var p1=this._vp.panelToLogicPoint$java_awt_geom_Point2D_Double(Clazz.new_($I$(3).c$$D$D,[prev.x, prev.y]));
var p2=this._vp.panelToLogicPoint$java_awt_geom_Point2D_Double(Clazz.new_($I$(3).c$$D$D,[cur.x, cur.y]));
var dx=(p2.x - p1.x);
var dy=(p2.y - p1.y);
if (this._vp.isModifiable$()) {
var ndx=dx;
var ndy=dy;
if (this._vp.getRNA$().get_drawMode$() == 4) {
ndy=0.0;
}this._vp.getVARNAUI$().UIShiftBaseCoord$java_util_ArrayList$D$D(this._vp.getSelectionIndices$(), ndx, ndy);
this._vp.fireLayoutChanged$();
}}, p$1);

Clazz.newMeth(C$, 'popupMenuCanceled$javax_swing_event_PopupMenuEvent', function (arg0) {
});

Clazz.newMeth(C$, 'popupMenuWillBecomeInvisible$javax_swing_event_PopupMenuEvent', function (arg0) {
this._vp.resetAnnotationHighlight$();
this._selectedBase=null;
});

Clazz.newMeth(C$, 'popupMenuWillBecomeVisible$javax_swing_event_PopupMenuEvent', function (arg0) {
});
;
(function(){var C$=Clazz.newClass(P$.ControleurClicMovement, "MouseStates", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NONE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "MOVE_ELEMENT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "MOVE_OR_SELECT_ELEMENT", 2, []);
Clazz.newEnumConst($vals, C$.c$, "SELECT_ELEMENT", 3, []);
Clazz.newEnumConst($vals, C$.c$, "SELECT_REGION_OR_UNSELECT", 4, []);
Clazz.newEnumConst($vals, C$.c$, "SELECT_REGION", 5, []);
Clazz.newEnumConst($vals, C$.c$, "CREATE_BP", 6, []);
Clazz.newEnumConst($vals, C$.c$, "POPUP_MENU", 7, []);
Clazz.newEnumConst($vals, C$.c$, "MOVE_ANNOTATION", 8, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
