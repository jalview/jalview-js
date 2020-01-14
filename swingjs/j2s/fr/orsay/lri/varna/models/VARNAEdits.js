(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models"),I$=[[0,['java.awt.geom.Point2D','.Double'],'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VARNAEdits", function(){
Clazz.newInstance(this, arguments,0,C$);
});

Clazz.newMeth(C$, '$init$', function () {
}, 1);
;
(function(){var C$=Clazz.newClass(P$.VARNAEdits, "BasesShiftEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._indices=null;
this._dx=0;
this._dy=0;
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayList$D$D$fr_orsay_lri_varna_VARNAPanel', function (indices, dx, dy, p) {
Clazz.super_(C$, this,1);
this._indices=indices;
this._dx=dx;
this._dy=dy;
this._vp=p;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
for (var index, $index = this._indices.iterator$(); $index.hasNext$()&&((index=($index.next$()).intValue$()),1);) {
var mb=this._vp.getRNA$().getBaseAt$I(index);
this._vp.getRNA$().setCoord$I$java_awt_geom_Point2D_Double(index, Clazz.new_($I$(1).c$$D$D,[mb.getCoords$().x - this._dx, mb.getCoords$().y - this._dy]));
this._vp.getRNA$().setCenter$I$java_awt_geom_Point2D_Double(index, Clazz.new_($I$(1).c$$D$D,[mb.getCenter$().x - this._dx, mb.getCenter$().y - this._dy]));
}
this._vp.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
for (var index, $index = this._indices.iterator$(); $index.hasNext$()&&((index=($index.next$()).intValue$()),1);) {
var mb=this._vp.getRNA$().getBaseAt$I(index);
this._vp.getRNA$().setCoord$I$java_awt_geom_Point2D_Double(index, Clazz.new_($I$(1).c$$D$D,[mb.getCoords$().x + this._dx, mb.getCoords$().y + this._dy]));
this._vp.getRNA$().setCenter$I$java_awt_geom_Point2D_Double(index, Clazz.new_($I$(1).c$$D$D,[mb.getCenter$().x - this._dx, mb.getCenter$().y - this._dy]));
}
this._vp.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Base #" + this._indices + " shifted" ;
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
if (Clazz.instanceOf(anEdit, "fr.orsay.lri.varna.models.VARNAEdits.BasesShiftEdit")) {
var e=anEdit;
if (e._indices.equals$O(this._indices)) {
var tot=Clazz.new_($I$(1).c$$D$D,[this._dx + e._dx, this._dy + e._dy]);
if (tot.distance$D$D(0.0, 0.0) < 55.0 ) {
this._dx=this._dx + e._dx;
this._dy=this._dy + e._dy;
return true;
}}}return false;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.VARNAEdits, "HelixRotateEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._delta=0;
this._base=0;
this._pLimL=0;
this._pLimR=0;
this._h=null;
this._ml=null;
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D$java_awt_Point$java_awt_Point$fr_orsay_lri_varna_VARNAPanel', function (delta, base, pLimL, pLimR, h, ml, vp) {
Clazz.super_(C$, this,1);
this._delta=delta;
this._base=base;
this._pLimL=pLimL;
this._pLimR=pLimR;
this._h=h;
this._ml=ml;
this._vp=vp;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._vp.getVARNAUI$().UIRotateEverything$D$D$D$D$java_awt_Point$java_awt_Point(-this._delta, this._base, this._pLimL, this._pLimR, this._h, this._ml);
this._vp.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._vp.getVARNAUI$().UIRotateEverything$D$D$D$D$java_awt_Point$java_awt_Point(this._delta, this._base, this._pLimL, this._pLimR, this._h, this._ml);
this._vp.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Helix #" + this._h + " rotated angle:" + new Double(this._delta).toString() ;
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
if (Clazz.instanceOf(anEdit, "fr.orsay.lri.varna.models.VARNAEdits.HelixRotateEdit")) {
var e=anEdit;
if (e._h.equals$O(this._h)) {
var totAngle=e._delta + this._delta;
while (totAngle > 3.141592653589793 ){
totAngle -= 6.283185307179586;
}
if (Math.abs(totAngle) < 0.39269908169872414 ) {
this._delta=totAngle;
return true;
}}}return false;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.VARNAEdits, "SingleBaseMoveEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._index=0;
this._ox=0;
this._oy=0;
this._nx=0;
this._ny=0;
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$D$D$fr_orsay_lri_varna_VARNAPanel', function (index, nx, ny, p) {
Clazz.super_(C$, this,1);
this._index=index;
var mb=p.getRNA$().getBaseAt$I(index);
this._ox=mb.getCoords$().x;
this._oy=mb.getCoords$().y;
this._nx=nx;
this._ny=ny;
this._vp=p;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._vp.getRNA$().setCoord$I$java_awt_geom_Point2D_Double(this._index, Clazz.new_($I$(1).c$$D$D,[this._ox, this._oy]));
this._vp.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._vp.getRNA$().setCoord$I$java_awt_geom_Point2D_Double(this._index, Clazz.new_($I$(1).c$$D$D,[this._nx, this._ny]));
this._vp.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Base #" + this._index + " moved" ;
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
if (Clazz.instanceOf(anEdit, "fr.orsay.lri.varna.models.VARNAEdits.SingleBaseMoveEdit")) {
var e=anEdit;
if (e._index == this._index) {
var po1=Clazz.new_($I$(1).c$$D$D,[this._ox, this._oy]);
var pn1=Clazz.new_($I$(1).c$$D$D,[this._nx, this._ny]);
var po2=Clazz.new_($I$(1).c$$D$D,[e._ox, e._oy]);
var pn2=Clazz.new_($I$(1).c$$D$D,[e._nx, e._ny]);
if ((pn1.equals$O(po2)) && (po1.distance$java_awt_geom_Point2D(pn2) < 55.0 ) ) {
this._nx=e._nx;
this._ny=e._ny;
return true;
}}}return false;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.VARNAEdits, "HelixFlipEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._h=null;
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Point$fr_orsay_lri_varna_VARNAPanel', function (h, vp) {
Clazz.super_(C$, this,1);
this._h=h;
this._vp=vp;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._vp.getVARNAUI$().UIFlipHelix$java_awt_Point(this._h);
this._vp.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._vp.getVARNAUI$().UIFlipHelix$java_awt_Point(this._h);
this._vp.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Helix #" + this._h + " flipped" ;
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.VARNAEdits, "AddBPEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._msbp=null;
this._i=0;
this._j=0;
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_VARNAPanel', function (i, j, msbp, vp) {
Clazz.super_(C$, this,1);
this._msbp=msbp;
this._i=i;
this._j=j;
this._vp=vp;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._vp.getRNA$().removeBP$fr_orsay_lri_varna_models_rna_ModeleBP(this._msbp);
this._vp.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._vp.getRNA$().addBP$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(this._i, this._j, this._msbp);
this._vp.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Add BP (" + this._i + "," + this._j + ")" ;
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.VARNAEdits, "RemoveBPEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._msbp=null;
this._i=0;
this._j=0;
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_VARNAPanel', function (i, j, msbp, vp) {
Clazz.super_(C$, this,1);
this._msbp=msbp;
this._i=i;
this._j=j;
this._vp=vp;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._vp.getRNA$().addBP$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(this._i, this._j, this._msbp);
this._vp.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._vp.getRNA$().removeBP$fr_orsay_lri_varna_models_rna_ModeleBP(this._msbp);
this._vp.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Remove BP (" + this._i + "," + this._j + ")" ;
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.VARNAEdits, "RescaleRNAEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._factor=0;
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$D$fr_orsay_lri_varna_VARNAPanel', function (angle, vp) {
Clazz.super_(C$, this,1);
this._factor=angle;
this._vp=vp;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._vp.getRNA$().rescale$D(1.0 / this._factor);
this._vp.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._vp.getRNA$().rescale$D(this._factor);
this._vp.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Rescale RNA factor:" + new Double(this._factor).toString() + "" ;
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
if (Clazz.instanceOf(anEdit, "fr.orsay.lri.varna.models.VARNAEdits.RescaleRNAEdit")) {
var e=anEdit;
var cumFact=this._factor * e._factor;
if (cumFact > 0.7  || cumFact < 1.3  ) {
this._factor *= e._factor;
return true;
}}return false;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.VARNAEdits, "RotateRNAEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._angle=0;
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$D$fr_orsay_lri_varna_VARNAPanel', function (angle, vp) {
Clazz.super_(C$, this,1);
this._angle=angle;
this._vp=vp;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
this._vp.getRNA$().globalRotation$Double(new Double(-this._angle));
this._vp.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
this._vp.getRNA$().globalRotation$Double(new Double(this._angle));
this._vp.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Rotate RNA angle:" + new Double(this._angle).toString() + "" ;
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
if (Clazz.instanceOf(anEdit, "fr.orsay.lri.varna.models.VARNAEdits.RotateRNAEdit")) {
var e=anEdit;
if (Math.abs(this._angle + e._angle) < 30 ) {
this._angle += e._angle;
return true;
}}return false;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.VARNAEdits, "RedrawEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._prevMode=0;
this._newMode=0;
this._prevFlat=false;
this._newFlat=false;
this._backupCoords=null;
this._backupCenters=null;
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._backupCoords=Clazz.new_($I$(2));
this._backupCenters=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$Z', function (vp, newFlat) {
C$.c$$I$fr_orsay_lri_varna_VARNAPanel$Z.apply(this, [vp.getRNA$().getDrawMode$(), vp, newFlat]);
}, 1);

Clazz.newMeth(C$, 'c$$I$fr_orsay_lri_varna_VARNAPanel', function (newMode, vp) {
C$.c$$I$fr_orsay_lri_varna_VARNAPanel$Z.apply(this, [newMode, vp, vp.getFlatExteriorLoop$()]);
}, 1);

Clazz.newMeth(C$, 'c$$I$fr_orsay_lri_varna_VARNAPanel$Z', function (newMode, vp, newFlat) {
Clazz.super_(C$, this,1);
this._vp=vp;
this._newMode=newMode;
this._newFlat=newFlat;
this._prevFlat=this._vp.getFlatExteriorLoop$();
for (var mb, $mb = this._vp.getRNA$().get_listeBases$().iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
this._backupCoords.add$TE(Clazz.new_($I$(1).c$$D$D,[mb.getCoords$().x, mb.getCoords$().y]));
this._backupCenters.add$TE(Clazz.new_($I$(1).c$$D$D,[mb.getCenter$().x, mb.getCenter$().y]));
}
this._prevMode=this._vp.getDrawMode$();
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
var r=this._vp.getRNA$();
this._vp.setFlatExteriorLoop$Z(this._prevFlat);
r.setDrawMode$I(this._prevMode);
for (var index=0; index < this._vp.getRNA$().get_listeBases$().size$(); index++) {
var oldCoord=this._backupCoords.get$I(index);
var oldCenter=this._backupCenters.get$I(index);
r.setCoord$I$java_awt_geom_Point2D_Double(index, oldCoord);
r.setCenter$I$java_awt_geom_Point2D_Double(index, oldCenter);
}
this._vp.repaint$();
});

Clazz.newMeth(C$, 'redo$', function () {
try {
this._vp.setFlatExteriorLoop$Z(this._newFlat);
this._vp.getRNA$().drawRNA$I$fr_orsay_lri_varna_models_VARNAConfig(this._newMode, this._vp.getConfig$());
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNAViewAlgorithm")){
e.printStackTrace$();
} else {
throw e;
}
}
this._vp.repaint$();
});

Clazz.newMeth(C$, 'canUndo$', function () {
return true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "Redraw whole RNA";
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
