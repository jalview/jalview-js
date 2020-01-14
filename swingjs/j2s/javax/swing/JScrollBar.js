(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.DefaultBoundedRangeModel',['javax.swing.JScrollBar','.ModelListener'],'java.awt.event.AdjustmentListener','java.awt.event.AdjustmentEvent','java.awt.Dimension','java.awt.JSComponent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JScrollBar", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', 'java.awt.Adjustable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fwdAdjustmentEvents=null;
this.model=null;
this.orientation=0;
this.unitIncrement=0;
this.blockIncrement=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'checkOrientation$I', function (orientation) {
switch (orientation) {
case 1:
case 0:
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["orientation must be one of: VERTICAL, HORIZONTAL"]);
}
}, p$1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I', function (orientation, value, extent, min, max) {
Clazz.super_(C$, this,1);
p$1.checkOrientation$I.apply(this, [orientation]);
this.unitIncrement=1;
this.blockIncrement=(extent == 0) ? 1 : extent;
this.orientation=orientation;
this.model=Clazz.new_($I$(1).c$$I$I$I$I,[value, extent, min, max]);
this.model.addChangeListener$javax_swing_event_ChangeListener(this.fwdAdjustmentEvents=Clazz.new_($I$(2), [this, null]));
this.setRequestFocusEnabled$Z(false);
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$', function () {
return "ScrollBarUI";
});

Clazz.newMeth(C$, 'c$$I', function (orientation) {
C$.c$$I$I$I$I$I.apply(this, [orientation, 0, 10, 0, 100]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [1]);
}, 1);

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener', function (l) {
this.model.addChangeListener$javax_swing_event_ChangeListener(l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener', function (l) {
this.model.removeChangeListener$javax_swing_event_ChangeListener(l);
});

Clazz.newMeth(C$, 'getOrientation$', function () {
return this.orientation;
});

Clazz.newMeth(C$, 'setOrientation$I', function (orientation) {
p$1.checkOrientation$I.apply(this, [orientation]);
var oldValue=this.orientation;
this.orientation=orientation;
this.firePropertyChange$S$I$I("orientation", oldValue, orientation);
if (orientation != oldValue) {
this.revalidate$();
}});

Clazz.newMeth(C$, 'getModel$', function () {
return this.model;
});

Clazz.newMeth(C$, 'setModel$javax_swing_BoundedRangeModel', function (newModel) {
var oldModel=this.model;
if (this.model != null ) {
this.model.removeChangeListener$javax_swing_event_ChangeListener(this.fwdAdjustmentEvents);
}this.model=newModel;
if (this.model != null ) {
this.model.addChangeListener$javax_swing_event_ChangeListener(this.fwdAdjustmentEvents);
}this.firePropertyChange$S$O$O("model", oldModel, this.model);
});

Clazz.newMeth(C$, 'getUnitIncrement$I', function (direction) {
return this.unitIncrement;
});

Clazz.newMeth(C$, 'setUnitIncrement$I', function (unitIncrement) {
var oldValue=this.unitIncrement;
this.unitIncrement=unitIncrement;
this.firePropertyChange$S$I$I("unitIncrement", oldValue, unitIncrement);
});

Clazz.newMeth(C$, 'getBlockIncrement$I', function (direction) {
return this.blockIncrement;
});

Clazz.newMeth(C$, 'setBlockIncrement$I', function (blockIncrement) {
var oldValue=this.blockIncrement;
this.blockIncrement=blockIncrement;
this.firePropertyChange$S$I$I("blockIncrement", oldValue, blockIncrement);
});

Clazz.newMeth(C$, 'getUnitIncrement$', function () {
return this.unitIncrement;
});

Clazz.newMeth(C$, 'getBlockIncrement$', function () {
return this.blockIncrement;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.getModel$().getValue$();
});

Clazz.newMeth(C$, 'setValue$I', function (value) {
var m=this.getModel$();
m.setValue$I(value);
});

Clazz.newMeth(C$, 'getVisibleAmount$', function () {
return this.getModel$().getExtent$();
});

Clazz.newMeth(C$, 'setVisibleAmount$I', function (extent) {
this.getModel$().setExtent$I(extent);
});

Clazz.newMeth(C$, 'getMinimum$', function () {
return this.getModel$().getMinimum$();
});

Clazz.newMeth(C$, 'setMinimum$I', function (minimum) {
this.getModel$().setMinimum$I(minimum);
});

Clazz.newMeth(C$, 'getMaximum$', function () {
return this.getModel$().getMaximum$();
});

Clazz.newMeth(C$, 'setMaximum$I', function (maximum) {
this.getModel$().setMaximum$I(maximum);
});

Clazz.newMeth(C$, 'getValueIsAdjusting$', function () {
return this.getModel$().getValueIsAdjusting$();
});

Clazz.newMeth(C$, 'setValueIsAdjusting$Z', function (b) {
var m=this.getModel$();
m.setValueIsAdjusting$Z(b);
});

Clazz.newMeth(C$, 'setValues$I$I$I$I', function (newValue, newExtent, newMin, newMax) {
var m=this.getModel$();
m.setRangeProperties$I$I$I$I$Z(newValue, newExtent, newMin, newMax, m.getValueIsAdjusting$());
});

Clazz.newMeth(C$, 'addAdjustmentListener$java_awt_event_AdjustmentListener', function (l) {
this.listenerList.add$Class$TT(Clazz.getClass($I$(3),['adjustmentValueChanged$java_awt_event_AdjustmentEvent']), l);
});

Clazz.newMeth(C$, 'removeAdjustmentListener$java_awt_event_AdjustmentListener', function (l) {
this.listenerList.remove$Class$TT(Clazz.getClass($I$(3),['adjustmentValueChanged$java_awt_event_AdjustmentEvent']), l);
});

Clazz.newMeth(C$, 'getAdjustmentListeners$', function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(3),['adjustmentValueChanged$java_awt_event_AdjustmentEvent']));
});

Clazz.newMeth(C$, 'fireAdjustmentValueChanged$I$I$I', function (id, type, value) {
this.fireAdjustmentValueChanged$I$I$I$Z(id, type, value, this.getValueIsAdjusting$());
});

Clazz.newMeth(C$, 'fireAdjustmentValueChanged$I$I$I$Z', function (id, type, value, isAdjusting) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(3),['adjustmentValueChanged$java_awt_event_AdjustmentEvent']) ) {
if (e == null ) {
e=Clazz.new_($I$(4).c$$java_awt_Adjustable$I$I$I$Z,[this, id, type, value, isAdjusting]);
}(listeners[i + 1]).adjustmentValueChanged$(e);
}}
});

Clazz.newMeth(C$, 'getMinimumSize$', function () {
var pref=this.getPreferredSize$();
if (this.orientation == 1) {
return Clazz.new_($I$(5).c$$I$I,[pref.width, 5]);
} else {
return Clazz.new_($I$(5).c$$I$I,[5, pref.height]);
}});

Clazz.newMeth(C$, 'getMaximumSize$', function () {
var pref=this.getPreferredSize$();
if (this.getOrientation$() == 1) {
return Clazz.new_($I$(5).c$$I$I,[pref.width, 32767]);
} else {
return Clazz.new_($I$(5).c$$I$I,[32767, pref.height]);
}});

Clazz.newMeth(C$, 'setEnabled$Z', function (x) {
C$.superclazz.prototype.setEnabled$Z.apply(this, [x]);
var n=this.getComponentCount$();
var components=$I$(6).getChildArray$java_awt_Container(this);
for (var i=0; i < n; i++) {
components[i].setEnabled$Z(x);
}
});

Clazz.newMeth(C$, 'paramString$', function () {
var orientationString=(this.orientation == 0 ? "HORIZONTAL" : "VERTICAL");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",blockIncrement=" + this.blockIncrement + ",orientation=" + orientationString + ",unitIncrement=" + this.unitIncrement ;
});
;
(function(){var C$=Clazz.newClass(P$.JScrollBar, "ModelListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
var obj=e.getSource$();
if (Clazz.instanceOf(obj, "javax.swing.BoundedRangeModel")) {
var id=601;
var type=5;
var model=obj;
var value=model.getValue$();
var isAdjusting=model.getValueIsAdjusting$();
this.this$0.fireAdjustmentValueChanged$I$I$I$Z.apply(this.this$0, [id, type, value, isAdjusting]);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
