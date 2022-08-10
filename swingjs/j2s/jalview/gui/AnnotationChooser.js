(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.awt.Font','java.util.HashMap','java.awt.GridLayout','javax.swing.JPanel','java.awt.FlowLayout','java.awt.Checkbox','java.util.ArrayList','java.awt.BorderLayout','java.awt.CheckboxGroup','jalview.util.MessageManager','jalview.gui.JvSwingUtils','javax.swing.JButton','javax.swing.JInternalFrame','javax.swing.JLayeredPane','jalview.gui.Desktop']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationChooser", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.resetState=null;
this.selectedTypes=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['showSelected','applyToSelectedSequences','applyToUnselectedSequences'],'O',['frame','javax.swing.JInternalFrame','ap','jalview.gui.AlignmentPanel','sg','jalview.datamodel.SequenceGroup','resetState','boolean[]','selectedTypes','java.util.Map']]
,['O',['CHECKBOX_FONT','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel',  function (alignPane) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.ap=alignPane;
this.sg=alignPane.av.getSelectionGroup$();
this.saveResetState$jalview_datamodel_AlignmentI(alignPane.getAlignment$());
try {
this.jbInit$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
p$1.showFrame.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'saveResetState$jalview_datamodel_AlignmentI',  function (alignment) {
var annotations=alignment.getAlignmentAnnotation$();
var count=annotations.length;
this.resetState=Clazz.array(Boolean.TYPE, [count]);
for (var i=0; i < count; i++) {
this.resetState[i]=annotations[i].visible;
}
});

Clazz.newMeth(C$, 'jbInit$',  function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$I$I,[3, 1]));
this.add$java_awt_Component(this.buildAnnotationTypesPanel$());
this.add$java_awt_Component(this.buildShowHideOptionsPanel$());
this.add$java_awt_Component(this.buildActionButtonsPanel$());
this.validate$();
});

Clazz.newMeth(C$, 'buildAnnotationTypesPanel$',  function () {
var jp=Clazz.new_([Clazz.new_($I$(5,1).c$$I,[0])],$I$(4,1).c$$java_awt_LayoutManager);
var annotationTypes=C$.getAnnotationTypes$jalview_datamodel_AlignmentI$Z(this.ap.getAlignment$(), true);
for (var type, $type = annotationTypes.iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
var check=Clazz.new_($I$(6,1).c$$S,[type]);
check.setFont$java_awt_Font(C$.CHECKBOX_FONT);
check.addItemListener$java_awt_event_ItemListener(((P$.AnnotationChooser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
if (evt.getStateChange$() == 1) {
this.b$['jalview.gui.AnnotationChooser'].selectedTypes.put$O$O(this.$finals$.type, this.$finals$.type);
} else {
this.b$['jalview.gui.AnnotationChooser'].selectedTypes.remove$O(this.$finals$.type);
}this.b$['jalview.gui.AnnotationChooser'].changeTypeSelected_actionPerformed$S.apply(this.b$['jalview.gui.AnnotationChooser'], [this.$finals$.type]);
});
})()
), Clazz.new_(P$.AnnotationChooser$1.$init$,[this, {type:type}])));
jp.add$java_awt_Component(check);
}
return jp;
});

Clazz.newMeth(C$, 'changeApplyTo_actionPerformed$',  function () {
this.setAnnotationVisibility$Z(true);
this.ap.updateAnnotation$();
});

Clazz.newMeth(C$, 'changeTypeSelected_actionPerformed$S',  function (type) {
var typeSelected=this.selectedTypes.containsKey$O(type);
for (var aa, $aa = 0, $$aa = this.ap.getAlignment$().getAlignmentAnnotation$(); $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
if (aa.sequenceRef != null  && type.equals$O(aa.label)  && this.isInActionScope$jalview_datamodel_AlignmentAnnotation(aa) ) {
aa.visible=typeSelected ? this.showSelected : !this.showSelected;
}}
this.ap.updateAnnotation$();
});

Clazz.newMeth(C$, 'changeShowHide_actionPerformed$',  function () {
this.setAnnotationVisibility$Z(false);
this.ap.updateAnnotation$();
});

Clazz.newMeth(C$, 'setAnnotationVisibility$Z',  function (updateAllRows) {
for (var aa, $aa = 0, $$aa = this.ap.getAlignment$().getAlignmentAnnotation$(); $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
if (aa.sequenceRef != null ) {
this.setAnnotationVisibility$jalview_datamodel_AlignmentAnnotation$Z(aa, updateAllRows);
}}
});

Clazz.newMeth(C$, 'setAnnotationVisibility$jalview_datamodel_AlignmentAnnotation$Z',  function (aa, updateAllRows) {
if (this.selectedTypes.containsKey$O(aa.label)) {
if (this.isInActionScope$jalview_datamodel_AlignmentAnnotation(aa)) {
aa.visible=this.showSelected;
} else if (updateAllRows) {
aa.visible=!this.showSelected;
}}});

Clazz.newMeth(C$, 'isInActionScope$jalview_datamodel_AlignmentAnnotation',  function (aa) {
var result=false;
if (this.applyToSelectedSequences && this.applyToUnselectedSequences ) {
result=true;
} else if (this.sg == null ) {
result=true;
} else if (this.sg.getSequences$().contains$O(aa.sequenceRef)) {
result=this.applyToSelectedSequences ? true : false;
} else {
result=this.applyToUnselectedSequences ? true : false;
}return result;
});

Clazz.newMeth(C$, 'getAnnotationTypes$jalview_datamodel_AlignmentI$Z',  function (alignment, sequenceSpecificOnly) {
var result=Clazz.new_($I$(7,1));
for (var aa, $aa = 0, $$aa = alignment.getAlignmentAnnotation$(); $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
if (!sequenceSpecificOnly || aa.sequenceRef != null  ) {
var label=aa.label;
if (!result.contains$O(label)) {
result.add$O(label);
}}}
return result;
}, 1);

Clazz.newMeth(C$, 'buildShowHideOptionsPanel$',  function () {
var jp=Clazz.new_($I$(4,1));
jp.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
var showHideOptions=this.buildShowHidePanel$();
jp.add$java_awt_Component$O(showHideOptions, "Center");
var applyToOptions=this.buildApplyToOptionsPanel$();
jp.add$java_awt_Component$O(applyToOptions, "South");
return jp;
});

Clazz.newMeth(C$, 'buildApplyToOptionsPanel$',  function () {
var wholeAlignment=this.sg == null ;
var applyToOptions=Clazz.new_([Clazz.new_($I$(5,1).c$$I,[0])],$I$(4,1).c$$java_awt_LayoutManager);
var actingOn=Clazz.new_($I$(9,1));
var forAll=$I$(10).getString$S("label.all_sequences");
var allSequences=Clazz.new_($I$(6,1).c$$S$java_awt_CheckboxGroup$Z,[forAll, actingOn, wholeAlignment]);
allSequences.addItemListener$java_awt_event_ItemListener(((P$.AnnotationChooser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
if (evt.getStateChange$() == 1) {
this.b$['jalview.gui.AnnotationChooser'].setApplyToSelectedSequences$Z.apply(this.b$['jalview.gui.AnnotationChooser'], [true]);
this.b$['jalview.gui.AnnotationChooser'].setApplyToUnselectedSequences$Z.apply(this.b$['jalview.gui.AnnotationChooser'], [true]);
this.b$['jalview.gui.AnnotationChooser'].changeApplyTo_actionPerformed$.apply(this.b$['jalview.gui.AnnotationChooser'], []);
}});
})()
), Clazz.new_(P$.AnnotationChooser$2.$init$,[this, null])));
applyToOptions.add$java_awt_Component(allSequences);
var forSelected=$I$(10).getString$S("label.selected_sequences");
var selectedSequences=Clazz.new_($I$(6,1).c$$S$java_awt_CheckboxGroup$Z,[forSelected, actingOn, !wholeAlignment]);
selectedSequences.setEnabled$Z(!wholeAlignment);
selectedSequences.addItemListener$java_awt_event_ItemListener(((P$.AnnotationChooser$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationChooser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
if (evt.getStateChange$() == 1) {
this.b$['jalview.gui.AnnotationChooser'].setApplyToSelectedSequences$Z.apply(this.b$['jalview.gui.AnnotationChooser'], [true]);
this.b$['jalview.gui.AnnotationChooser'].setApplyToUnselectedSequences$Z.apply(this.b$['jalview.gui.AnnotationChooser'], [false]);
this.b$['jalview.gui.AnnotationChooser'].changeApplyTo_actionPerformed$.apply(this.b$['jalview.gui.AnnotationChooser'], []);
}});
})()
), Clazz.new_(P$.AnnotationChooser$3.$init$,[this, null])));
applyToOptions.add$java_awt_Component(selectedSequences);
var exceptSelected=$I$(10).getString$S("label.except_selected_sequences");
var unselectedSequences=Clazz.new_($I$(6,1).c$$S$java_awt_CheckboxGroup$Z,[exceptSelected, actingOn, false]);
unselectedSequences.setEnabled$Z(!wholeAlignment);
unselectedSequences.addItemListener$java_awt_event_ItemListener(((P$.AnnotationChooser$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationChooser$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
if (evt.getStateChange$() == 1) {
this.b$['jalview.gui.AnnotationChooser'].setApplyToSelectedSequences$Z.apply(this.b$['jalview.gui.AnnotationChooser'], [false]);
this.b$['jalview.gui.AnnotationChooser'].setApplyToUnselectedSequences$Z.apply(this.b$['jalview.gui.AnnotationChooser'], [true]);
this.b$['jalview.gui.AnnotationChooser'].changeApplyTo_actionPerformed$.apply(this.b$['jalview.gui.AnnotationChooser'], []);
}});
})()
), Clazz.new_(P$.AnnotationChooser$4.$init$,[this, null])));
applyToOptions.add$java_awt_Component(unselectedSequences);
this.applyToSelectedSequences=selectedSequences.getState$() || allSequences.getState$() ;
this.applyToUnselectedSequences=unselectedSequences.getState$() || allSequences.getState$() ;
return applyToOptions;
});

Clazz.newMeth(C$, 'buildShowHidePanel$',  function () {
var showHideOptions=Clazz.new_([Clazz.new_($I$(5,1).c$$I,[0])],$I$(4,1).c$$java_awt_LayoutManager);
var showOrHide=Clazz.new_($I$(9,1));
var showLabel=$I$(10).getString$S("label.show_selected_annotations");
var showOption=Clazz.new_($I$(6,1).c$$S$java_awt_CheckboxGroup$Z,[showLabel, showOrHide, false]);
showOption.addItemListener$java_awt_event_ItemListener(((P$.AnnotationChooser$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationChooser$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
if (evt.getStateChange$() == 1) {
this.b$['jalview.gui.AnnotationChooser'].setShowSelected$Z.apply(this.b$['jalview.gui.AnnotationChooser'], [true]);
this.b$['jalview.gui.AnnotationChooser'].changeShowHide_actionPerformed$.apply(this.b$['jalview.gui.AnnotationChooser'], []);
}});
})()
), Clazz.new_(P$.AnnotationChooser$5.$init$,[this, null])));
showHideOptions.add$java_awt_Component(showOption);
var hideLabel=$I$(10).getString$S("label.hide_selected_annotations");
var hideOption=Clazz.new_($I$(6,1).c$$S$java_awt_CheckboxGroup$Z,[hideLabel, showOrHide, true]);
hideOption.addItemListener$java_awt_event_ItemListener(((P$.AnnotationChooser$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationChooser$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
if (evt.getStateChange$() == 1) {
this.b$['jalview.gui.AnnotationChooser'].setShowSelected$Z.apply(this.b$['jalview.gui.AnnotationChooser'], [false]);
this.b$['jalview.gui.AnnotationChooser'].changeShowHide_actionPerformed$.apply(this.b$['jalview.gui.AnnotationChooser'], []);
}});
})()
), Clazz.new_(P$.AnnotationChooser$6.$init$,[this, null])));
showHideOptions.add$java_awt_Component(hideOption);
this.showSelected=showOption.getState$();
return showHideOptions;
});

Clazz.newMeth(C$, 'buildActionButtonsPanel$',  function () {
var jp=Clazz.new_($I$(4,1));
var labelFont=$I$(11).getLabelFont$();
var ok=Clazz.new_([$I$(10).getString$S("action.ok")],$I$(12,1).c$$S);
ok.setFont$java_awt_Font(labelFont);
ok.addActionListener$java_awt_event_ActionListener(((P$.AnnotationChooser$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationChooser$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.AnnotationChooser'].close_actionPerformed$.apply(this.b$['jalview.gui.AnnotationChooser'], []);
});
})()
), Clazz.new_(P$.AnnotationChooser$7.$init$,[this, null])));
jp.add$java_awt_Component(ok);
var cancel=Clazz.new_([$I$(10).getString$S("action.cancel")],$I$(12,1).c$$S);
cancel.setFont$java_awt_Font(labelFont);
cancel.addActionListener$java_awt_event_ActionListener(((P$.AnnotationChooser$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationChooser$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.AnnotationChooser'].cancel_actionPerformed$.apply(this.b$['jalview.gui.AnnotationChooser'], []);
});
})()
), Clazz.new_(P$.AnnotationChooser$8.$init$,[this, null])));
jp.add$java_awt_Component(cancel);
return jp;
});

Clazz.newMeth(C$, 'cancel_actionPerformed$',  function () {
this.resetOriginalState$();
this.ap.repaint$();
this.close_actionPerformed$();
});

Clazz.newMeth(C$, 'resetOriginalState$',  function () {
var i=0;
for (var aa, $aa = 0, $$aa = this.ap.getAlignment$().getAlignmentAnnotation$(); $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
aa.visible=this.resetState[i++];
}
});

Clazz.newMeth(C$, 'close_actionPerformed$',  function () {
try {
this.frame.setClosed$Z(true);
} catch (exe) {
if (Clazz.exceptionOf(exe,"Exception")){
} else {
throw exe;
}
}
});

Clazz.newMeth(C$, 'showFrame',  function () {
this.frame=Clazz.new_($I$(13,1));
this.frame.setContentPane$java_awt_Container(this);
this.frame.setLayer$Integer($I$(14).PALETTE_LAYER);
$I$(15,"addInternalFrame$javax_swing_JInternalFrame$S$I$I$Z",[this.frame, $I$(10).getString$S("label.choose_annotations"), 600, 250, true]);
}, p$1);

Clazz.newMeth(C$, 'setShowSelected$Z',  function (showSelected) {
this.showSelected=showSelected;
});

Clazz.newMeth(C$, 'setApplyToSelectedSequences$Z',  function (applyToSelectedSequences) {
this.applyToSelectedSequences=applyToSelectedSequences;
});

Clazz.newMeth(C$, 'setApplyToUnselectedSequences$Z',  function (applyToUnselectedSequences) {
this.applyToUnselectedSequences=applyToUnselectedSequences;
});

Clazz.newMeth(C$, 'isShowSelected$',  function () {
return this.showSelected;
});

Clazz.newMeth(C$, 'isApplyToSelectedSequences$',  function () {
return this.applyToSelectedSequences;
});

Clazz.newMeth(C$, 'isApplyToUnselectedSequences$',  function () {
return this.applyToUnselectedSequences;
});

C$.$static$=function(){C$.$static$=0;
C$.CHECKBOX_FONT=Clazz.new_($I$(1,1).c$$S$I$I,["Serif", 1, 12]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:32 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
