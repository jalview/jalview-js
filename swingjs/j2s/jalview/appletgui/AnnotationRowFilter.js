(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Checkbox','java.awt.Panel','java.awt.Scrollbar','java.awt.TextField','java.awt.Button','jalview.util.MessageManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AnnotationRowFilter", null, 'java.awt.Panel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.av=null;
this.ap=null;
this.annmap=null;
this.enableSeqAss=false;
this.currentAnnotation=null;
this.adjusting=false;
this.currentColours=null;
this.minColour=null;
this.maxColour=null;
this.seqAssociated=null;
this.thresholdIsMin=null;
this.slider=null;
this.percentThreshold=null;
this.thresholdValue=null;
this.frame=null;
this.ok=null;
this.cancel=null;
this.sliderDragging=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.enableSeqAss=false;
this.adjusting=false;
this.currentColours=Clazz.new_($I$(1));
this.minColour=Clazz.new_($I$(2));
this.maxColour=Clazz.new_($I$(2));
this.seqAssociated=Clazz.new_($I$(1));
this.thresholdIsMin=Clazz.new_($I$(1));
this.slider=Clazz.new_($I$(3).c$$I,[0]);
this.percentThreshold=Clazz.new_($I$(1));
this.thresholdValue=Clazz.new_($I$(4).c$$I,[20]);
this.ok=Clazz.new_($I$(5));
this.cancel=Clazz.new_($I$(5));
this.sliderDragging=false;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignViewport$jalview_appletgui_AlignmentPanel', function (av, ap) {
Clazz.super_(C$, this,1);
this.av=av;
this.ap=ap;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'getSelectedThresholdItem$I', function (indexValue) {
var selectedThresholdItem=-1;
if (indexValue == 1) {
selectedThresholdItem=1;
} else if (indexValue == 2) {
selectedThresholdItem=0;
}return selectedThresholdItem;
});

Clazz.newMeth(C$, 'modelChanged$', function () {
this.seqAssociated.setEnabled$Z(this.enableSeqAss);
});

Clazz.newMeth(C$, 'ok_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.updateView$();
this.frame.setVisible$Z(false);
});

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.reset$();
this.ap.paintAlignment$Z$Z(true, true);
this.frame.setVisible$Z(false);
});

Clazz.newMeth(C$, 'thresholdCheck_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.updateView$();
});

Clazz.newMeth(C$, 'annotations_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.updateView$();
});

Clazz.newMeth(C$, 'threshold_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.updateView$();
});

Clazz.newMeth(C$, 'setThresholdValueText$', function () {
var oldadj=this.adjusting;
this.adjusting=true;
if (this.percentThreshold.getState$()) {
var scl=this.slider.getMaximum$() - this.slider.getMinimum$();
scl=(this.slider.getValue$() - this.slider.getMinimum$()) / scl;
this.thresholdValue.setText$S(new Double(100.0 * scl).toString() + "");
} else {
this.thresholdValue.setText$S((new Float(this.slider.getValue$() / 1000.0).toString()) + "");
}this.thresholdValue.setCaretPosition$I(0);
this.adjusting=oldadj;
});

Clazz.newMeth(C$, 'thresholdValue_actionPerformed$java_awt_event_ActionEvent', function (e) {
try {
var f=Float.parseFloat$S(this.thresholdValue.getText$());
if (this.percentThreshold.getState$()) {
var pos=this.slider.getMinimum$() + (((this.slider.getMaximum$() - this.slider.getMinimum$()) * f / 100.0)|0);
this.slider.setValue$I(pos);
} else {
this.slider.setValue$I(((f * 1000)|0));
}this.valueChanged$Z(false);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'percentageValue_actionPerformed$', function () {
this.setThresholdValueText$();
});

Clazz.newMeth(C$, 'populateThresholdComboBox$java_awt_Choice', function (threshold) {
threshold.addItem$S($I$(6).getString$S("label.threshold_feature_no_threshold"));
threshold.addItem$S($I$(6).getString$S("label.threshold_feature_above_threshold"));
threshold.addItem$S($I$(6).getString$S("label.threshold_feature_below_threshold"));
});

Clazz.newMeth(C$, 'getCurrentAnnotation$', function () {
return this.currentAnnotation;
});

Clazz.newMeth(C$, 'setCurrentAnnotation$jalview_datamodel_AlignmentAnnotation', function (currentAnnotation) {
this.currentAnnotation=currentAnnotation;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:06 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
