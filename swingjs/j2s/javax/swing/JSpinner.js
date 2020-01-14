(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.JFormattedTextField','javax.swing.JSpinner','java.awt.Dimension','sun.util.resources.LocaleData','java.text.MessageFormat','java.text.SimpleDateFormat',['javax.swing.JSpinner','.DateEditorFormatter'],'javax.swing.text.DefaultFormatterFactory','java.text.DecimalFormat',['javax.swing.JSpinner','.NumberEditorFormatter'],['javax.swing.JSpinner','.ListEditor','.ListFormatter','.Filter'],['javax.swing.JSpinner','.ListEditor','.ListFormatter'],['javax.swing.JSpinner','.DisabledAction'],'javax.swing.SpinnerNumberModel',['javax.swing.JSpinner','.DateEditor'],['javax.swing.JSpinner','.ListEditor'],['javax.swing.JSpinner','.NumberEditor'],['javax.swing.JSpinner','.DefaultEditor'],['javax.swing.JSpinner','.ModelListener'],'javax.swing.event.ChangeListener','javax.swing.event.ChangeEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSpinner", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent');
C$.DISABLED_ACTION=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DISABLED_ACTION=Clazz.new_($I$(13));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.model=null;
this.editor=null;
this.modelListener=null;
this.changeEvent=null;
this.editorExplicitlySet=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.editorExplicitlySet=false;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_SpinnerModel', function (model) {
Clazz.super_(C$, this,1);
if (model == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["model cannot be null"]);
}this.model=model;
this.editor=this.createEditor$javax_swing_SpinnerModel(model);
this.setUIProperty$S$O("opaque", new Boolean(true));
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$', function () {
return "SpinnerUI";
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$javax_swing_SpinnerModel.apply(this, [Clazz.new_($I$(14))]);
}, 1);

Clazz.newMeth(C$, 'createEditor$javax_swing_SpinnerModel', function (model) {
if (Clazz.instanceOf(model, "javax.swing.SpinnerDateModel")) {
return Clazz.new_($I$(15).c$$javax_swing_JSpinner,[this]);
} else if (Clazz.instanceOf(model, "javax.swing.SpinnerListModel")) {
return Clazz.new_($I$(16).c$$javax_swing_JSpinner,[this]);
} else if (Clazz.instanceOf(model, "javax.swing.SpinnerNumberModel")) {
return Clazz.new_($I$(17).c$$javax_swing_JSpinner,[this]);
} else {
return Clazz.new_($I$(18).c$$javax_swing_JSpinner,[this]);
}});

Clazz.newMeth(C$, 'setModel$javax_swing_SpinnerModel', function (model) {
if (model == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null model"]);
}if (!model.equals$O(this.model)) {
var oldModel=this.model;
this.model=model;
if (this.modelListener != null ) {
oldModel.removeChangeListener$javax_swing_event_ChangeListener(this.modelListener);
this.model.addChangeListener$javax_swing_event_ChangeListener(this.modelListener);
}this.firePropertyChange$S$O$O("model", oldModel, model);
if (!this.editorExplicitlySet) {
this.setEditor$javax_swing_JComponent(this.createEditor$javax_swing_SpinnerModel(model));
this.editorExplicitlySet=false;
}this.repaint$();
this.revalidate$();
}});

Clazz.newMeth(C$, 'getModel$', function () {
return this.model;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.getModel$().getValue$();
});

Clazz.newMeth(C$, 'setValue$O', function (value) {
this.getModel$().setValue$O(value);
});

Clazz.newMeth(C$, 'getNextValue$', function () {
return this.getModel$().getNextValue$();
});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener', function (listener) {
if (this.modelListener == null ) {
this.modelListener=Clazz.new_($I$(19), [this, null]);
this.getModel$().addChangeListener$javax_swing_event_ChangeListener(this.modelListener);
}this.listenerList.add$Class$TT(Clazz.getClass($I$(20),['stateChanged$javax_swing_event_ChangeEvent']), listener);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener', function (listener) {
this.listenerList.remove$Class$TT(Clazz.getClass($I$(20),['stateChanged$javax_swing_event_ChangeEvent']), listener);
});

Clazz.newMeth(C$, 'getChangeListeners$', function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(20),['stateChanged$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'fireStateChanged$', function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(20),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) {
this.changeEvent=Clazz.new_($I$(21).c$$O,[this]);
}(listeners[i + 1]).stateChanged$(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'getPreviousValue$', function () {
return this.getModel$().getPreviousValue$();
});

Clazz.newMeth(C$, 'setEditor$javax_swing_JComponent', function (editor) {
if (editor == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null editor"]);
}if (!editor.equals$O(this.editor)) {
var oldEditor=this.editor;
this.editor=editor;
if (Clazz.instanceOf(oldEditor, "javax.swing.JSpinner.DefaultEditor")) {
(oldEditor).dismiss$javax_swing_JSpinner(this);
}this.editorExplicitlySet=true;
this.firePropertyChange$S$O$O("editor", oldEditor, editor);
this.revalidate$();
this.repaint$();
}});

Clazz.newMeth(C$, 'getEditor$', function () {
return this.editor;
});

Clazz.newMeth(C$, 'commitEdit$', function () {
var editor=this.getEditor$();
if (Clazz.instanceOf(editor, "javax.swing.JSpinner.DefaultEditor")) {
(editor).commitEdit$();
}});
;
(function(){var C$=Clazz.newClass(P$.JSpinner, "ModelListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
this.this$0.fireStateChanged$.apply(this.this$0, []);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSpinner, "DefaultEditor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JPanel', ['javax.swing.event.ChangeListener', 'java.beans.PropertyChangeListener', 'java.awt.LayoutManager']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JSpinner', function (spinner) {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [null]);
C$.$init$.apply(this);
var ftf=Clazz.new_($I$(1));
ftf.setName$S("Spinner.formattedTextField");
ftf.setValue$O(spinner.getValue$());
ftf.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
ftf.setEditable$Z(false);
ftf.setInheritsPopupMenu$Z(true);
var toolTipText=spinner.getToolTipText$();
if (toolTipText != null ) {
ftf.setToolTipText$S(toolTipText);
}this.add$java_awt_Component(ftf);
this.setLayout$java_awt_LayoutManager(this);
spinner.addChangeListener$javax_swing_event_ChangeListener(this);
var ftfMap=ftf.getActionMap$();
if (ftfMap != null ) {
ftfMap.put$O$javax_swing_Action("increment", $I$(2).DISABLED_ACTION);
ftfMap.put$O$javax_swing_Action("decrement", $I$(2).DISABLED_ACTION);
}}, 1);

Clazz.newMeth(C$, 'dismiss$javax_swing_JSpinner', function (spinner) {
spinner.removeChangeListener$javax_swing_event_ChangeListener(this);
});

Clazz.newMeth(C$, 'getSpinner$', function () {
for (var c=this; c != null ; c=c.getParent$()) {
if (Clazz.instanceOf(c, "javax.swing.JSpinner")) {
return c;
}}
return null;
});

Clazz.newMeth(C$, 'getTextField$', function () {
return this.getComponent$I(0);
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
var spinner=(e.getSource$());
this.getTextField$().setValue$O(spinner.getValue$());
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
var spinner=this.getSpinner$();
if (spinner == null ) {
return;
}var source=e.getSource$();
var name=e.getPropertyName$();
if ((Clazz.instanceOf(source, "javax.swing.JFormattedTextField")) && "value".equals$O(name) ) {
var lastValue=spinner.getValue$();
try {
spinner.setValue$O(this.getTextField$().getValue$());
} catch (iae) {
if (Clazz.exceptionOf(iae,"IllegalArgumentException")){
try {
(source).setValue$O(lastValue);
} catch (iae2) {
if (Clazz.exceptionOf(iae2,"IllegalArgumentException")){
} else {
throw iae2;
}
}
} else {
throw iae;
}
}
}});

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component', function (name, child) {
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component', function (child) {
});

Clazz.newMeth(C$, 'insetSize$java_awt_Container', function (parent) {
var insets=parent.getInsets$();
var w=insets.left + insets.right;
var h=insets.top + insets.bottom;
return Clazz.new_($I$(3).c$$I$I,[w, h]);
}, p$1);

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container', function (parent) {
var preferredSize=p$1.insetSize$java_awt_Container.apply(this, [parent]);
if (parent.getComponentCount$() > 0) {
var childSize=this.getComponent$I(0).getPreferredSize$();
preferredSize.width+=childSize.width;
preferredSize.height+=childSize.height;
}return preferredSize;
});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container', function (parent) {
var minimumSize=p$1.insetSize$java_awt_Container.apply(this, [parent]);
if (parent.getComponentCount$() > 0) {
var childSize=this.getComponent$I(0).getMinimumSize$();
minimumSize.width+=childSize.width;
minimumSize.height+=childSize.height;
}return minimumSize;
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container', function (parent) {
if (parent.getComponentCount$() > 0) {
var insets=parent.getInsets$();
var w=parent.getWidth$() - (insets.left + insets.right);
var h=parent.getHeight$() - (insets.top + insets.bottom);
this.getComponent$I(0).setBounds$I$I$I$I(insets.left, insets.top, w, h);
}});

Clazz.newMeth(C$, 'commitEdit$', function () {
var ftf=this.getTextField$();
ftf.commitEdit$();
});

Clazz.newMeth(C$, 'getBaseline$I$I', function (width, height) {
C$.superclazz.prototype.getBaseline$I$I.apply(this, [width, height]);
var insets=this.getInsets$();
width=width - insets.left - insets.right ;
height=height - insets.top - insets.bottom ;
var baseline=this.getComponent$I(0).getBaseline$I$I(width, height);
if (baseline >= 0) {
return baseline + insets.top;
}return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$', function () {
return this.getComponent$I(0).getBaselineResizeBehavior$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSpinner, "DateEditorFormatter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.DateFormatter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.model=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_SpinnerDateModel$java_text_DateFormat', function (model, format) {
C$.superclazz.c$$java_text_DateFormat.apply(this, [format]);
C$.$init$.apply(this);
this.model=model;
}, 1);

Clazz.newMeth(C$, 'setMinimum$Comparable', function (min) {
this.model.setStart$Comparable(min);
});

Clazz.newMeth(C$, 'getMinimum$', function () {
return this.model.getStart$();
});

Clazz.newMeth(C$, 'setMaximum$Comparable', function (max) {
this.model.setEnd$Comparable(max);
});

Clazz.newMeth(C$, 'getMaximum$', function () {
return this.model.getEnd$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSpinner, "DateEditor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.JSpinner','.DefaultEditor']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDefaultPattern$java_util_Locale', function (loc) {
var r=$I$(4).getDateFormatData$java_util_Locale(loc);
var dateTimePatterns=r.getStringArray$S("DateTimePatterns");
var dateTimeArgs=Clazz.array(java.lang.Object, -1, [dateTimePatterns[3], dateTimePatterns[7]]);
return $I$(5).format$S$OA(dateTimePatterns[8], dateTimeArgs);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JSpinner', function (spinner) {
C$.c$$javax_swing_JSpinner$S.apply(this, [spinner, C$.getDefaultPattern$java_util_Locale(spinner.getLocale$())]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JSpinner$S', function (spinner, dateFormatPattern) {
C$.c$$javax_swing_JSpinner$java_text_DateFormat.apply(this, [spinner, Clazz.new_($I$(6).c$$S$java_util_Locale,[dateFormatPattern, spinner.getLocale$()])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JSpinner$java_text_DateFormat', function (spinner, format) {
C$.superclazz.c$$javax_swing_JSpinner.apply(this, [spinner]);
C$.$init$.apply(this);
if (!(Clazz.instanceOf(spinner.getModel$(), "javax.swing.SpinnerDateModel"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["model not a SpinnerDateModel"]);
}var model=spinner.getModel$();
var formatter=Clazz.new_($I$(7).c$$javax_swing_SpinnerDateModel$java_text_DateFormat,[model, format]);
var factory=Clazz.new_($I$(8).c$$javax_swing_JFormattedTextField_AbstractFormatter,[formatter]);
var ftf=this.getTextField$();
ftf.setEditable$Z(true);
ftf.setFormatterFactory$javax_swing_JFormattedTextField_AbstractFormatterFactory(factory);
try {
var maxString=formatter.valueToString$O(model.getStart$());
var minString=formatter.valueToString$O(model.getEnd$());
ftf.setColumns$I(Math.max(maxString.length$(), minString.length$()));
} catch (e) {
if (Clazz.exceptionOf(e,"java.text.ParseException")){
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getFormat$', function () {
return ((this.getTextField$().getFormatter$())).getFormat$();
});

Clazz.newMeth(C$, 'getModel$', function () {
return (this.getSpinner$().getModel$());
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSpinner, "NumberEditorFormatter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.NumberFormatter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.model=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_SpinnerNumberModel$java_text_NumberFormat', function (model, format) {
C$.superclazz.c$$java_text_NumberFormat.apply(this, [format]);
C$.$init$.apply(this);
this.model=model;
this.setValueClass$Class(model.getValue$().getClass$());
}, 1);

Clazz.newMeth(C$, 'setMinimum$Comparable', function (min) {
this.model.setMinimum$Comparable(min);
});

Clazz.newMeth(C$, 'getMinimum$', function () {
return this.model.getMinimum$();
});

Clazz.newMeth(C$, 'setMaximum$Comparable', function (max) {
this.model.setMaximum$Comparable(max);
});

Clazz.newMeth(C$, 'getMaximum$', function () {
return this.model.getMaximum$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSpinner, "NumberEditor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.JSpinner','.DefaultEditor']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDefaultPattern$java_util_Locale', function (locale) {
var rb=$I$(4).getNumberFormatData$java_util_Locale(locale);
var all=rb.getStringArray$S("NumberPatterns");
return all[0];
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JSpinner', function (spinner) {
C$.c$$javax_swing_JSpinner$S.apply(this, [spinner, C$.getDefaultPattern$java_util_Locale(spinner.getLocale$())]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JSpinner$S', function (spinner, decimalFormatPattern) {
C$.c$$javax_swing_JSpinner$java_text_DecimalFormat.apply(this, [spinner, Clazz.new_($I$(9).c$$S,[decimalFormatPattern])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JSpinner$java_text_DecimalFormat', function (spinner, format) {
C$.superclazz.c$$javax_swing_JSpinner.apply(this, [spinner]);
C$.$init$.apply(this);
if (!(Clazz.instanceOf(spinner.getModel$(), "javax.swing.SpinnerNumberModel"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["model not a SpinnerNumberModel"]);
}var model=spinner.getModel$();
var formatter=Clazz.new_($I$(10).c$$javax_swing_SpinnerNumberModel$java_text_NumberFormat,[model, format]);
var factory=Clazz.new_($I$(8).c$$javax_swing_JFormattedTextField_AbstractFormatter,[formatter]);
var ftf=this.getTextField$();
ftf.setEditable$Z(true);
ftf.setFormatterFactory$javax_swing_JFormattedTextField_AbstractFormatterFactory(factory);
ftf.setHorizontalAlignment$I(4);
try {
var maxString=formatter.valueToString$O(model.getMinimum$());
var minString=formatter.valueToString$O(model.getMaximum$());
ftf.setColumns$I(Math.max(maxString.length$(), minString.length$()));
} catch (e) {
if (Clazz.exceptionOf(e,"java.text.ParseException")){
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getFormat$', function () {
return ((this.getTextField$().getFormatter$())).getFormat$();
});

Clazz.newMeth(C$, 'getModel$', function () {
return (this.getSpinner$().getModel$());
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSpinner, "ListEditor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.JSpinner','.DefaultEditor']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JSpinner', function (spinner) {
C$.superclazz.c$$javax_swing_JSpinner.apply(this, [spinner]);
C$.$init$.apply(this);
if (!(Clazz.instanceOf(spinner.getModel$(), "javax.swing.SpinnerListModel"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["model not a SpinnerListModel"]);
}this.getTextField$().setEditable$Z(true);
this.getTextField$().setFormatterFactory$javax_swing_JFormattedTextField_AbstractFormatterFactory(Clazz.new_($I$(8).c$$javax_swing_JFormattedTextField_AbstractFormatter,[Clazz.new_($I$(12), [this, null])]));
}, 1);

Clazz.newMeth(C$, 'getModel$', function () {
return (this.getSpinner$().getModel$());
});
;
(function(){var C$=Clazz.newClass(P$.JSpinner.ListEditor, "ListFormatter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.JFormattedTextField','.AbstractFormatter']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.filter=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'valueToString$O', function (value) {
if (value == null ) {
return "";
}return value.toString();
});

Clazz.newMeth(C$, 'stringToValue$S', function (string) {
return string;
});

Clazz.newMeth(C$, 'getDocumentFilter$', function () {
if (this.filter == null ) {
this.filter=Clazz.new_($I$(11), [this, null]);
}return this.filter;
});
;
(function(){var C$=Clazz.newClass(P$.JSpinner.ListEditor.ListFormatter, "Filter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.DocumentFilter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet', function (fb, offset, length, string, attrs) {
if (string != null  && (offset + length) == fb.getDocument$().getLength$() ) {
var next=this.b$['javax.swing.JSpinner.ListEditor'].getModel$.apply(this.b$['javax.swing.JSpinner.ListEditor'], []).findNextMatch$S(fb.getDocument$().getText$I$I(0, offset) + string);
var value=(next != null ) ? next.toString() : null;
if (value != null ) {
fb.remove$I$I(0, offset + length);
fb.insertString$I$S$javax_swing_text_AttributeSet(0, value, null);
this.b$['javax.swing.JFormattedTextField.AbstractFormatter'].getFormattedTextField$.apply(this.b$['javax.swing.JFormattedTextField.AbstractFormatter'], []).select$I$I(offset + string.length$(), value.length$());
return;
}}C$.superclazz.prototype.replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet.apply(this, [fb, offset, length, string, attrs]);
});

Clazz.newMeth(C$, 'insertString$javax_swing_text_DocumentFilter_FilterBypass$I$S$javax_swing_text_AttributeSet', function (fb, offset, string, attr) {
this.replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet(fb, offset, 0, string, attr);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSpinner, "DisabledAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.Action');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getValue$S', function (key) {
return null;
});

Clazz.newMeth(C$, 'putValue$S$O', function (key, value) {
});

Clazz.newMeth(C$, 'setEnabled$Z', function (b) {
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return false;
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (l) {
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (l) {
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (ae) {
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
