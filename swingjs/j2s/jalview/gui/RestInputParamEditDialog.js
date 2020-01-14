(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.Hashtable','jalview.gui.JalviewDialog','java.util.ArrayList','jalview.ws.rest.RestServiceDescription','javax.swing.JPanel','net.miginfocom.swing.MigLayout','jalview.gui.OptsAndParamsPage']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RestInputParamEditDialog", null, 'jalview.jbgui.GRestInputParamEditDialog', 'jalview.gui.OptsParametersContainerI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.typeclass=null;
this.typeopts=null;
this.opanps=null;
this.reply=0;
this.frame=null;
this.old=null;
this.current=null;
this.updated=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.typeclass=Clazz.new_($I$(1));
this.typeopts=Clazz.new_($I$(1));
this.opanps=Clazz.new_($I$(1));
this.frame=((P$.RestInputParamEditDialog$1||
(function(){var C$=Clazz.newClass(P$, "RestInputParamEditDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('jalview.gui.JalviewDialog'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'raiseClosed$', function () {
});

Clazz.newMeth(C$, 'okPressed$', function () {
this.b$['jalview.gui.RestInputParamEditDialog'].reply=0;
});

Clazz.newMeth(C$, 'cancelPressed$', function () {
this.b$['jalview.gui.RestInputParamEditDialog'].reply=2;
});
})()
), Clazz.new_($I$(2), [this, null],P$.RestInputParamEditDialog$1));
this.updated=false;
}, 1);

Clazz.newMeth(C$, 'getTypeFor$S', function (name) {
try {
return (this.typeclass.get$O(name).getConstructor$ClassA([]).newInstance$OA([]));
} catch (x) {
System.err.println$S("Unexpected exception when instantiating rest input type.");
x.printStackTrace$();
}
return null;
}, p$1);

Clazz.newMeth(C$, 'c$$jalview_gui_RestServiceEditorPane$jalview_ws_rest_RestServiceDescription$jalview_ws_rest_InputType', function (restServiceEditorPane, currentservice, toedit) {
Clazz.super_(C$, this,1);
p$1.initFor$jalview_gui_RestServiceEditorPane$jalview_ws_rest_RestServiceDescription$jalview_ws_rest_InputType.apply(this, [restServiceEditorPane, currentservice, toedit]);
this.frame.waitForInput$();
}, 1);

Clazz.newMeth(C$, 'initFor$jalview_gui_RestServiceEditorPane$jalview_ws_rest_RestServiceDescription$jalview_ws_rest_InputType', function (restServiceEditorPane, currentservice, toedit) {
this.okcancel.add$java_awt_Component(this.frame.cancel);
this.okcancel.add$java_awt_Component(this.frame.ok);
this.frame.initDialogFrame$java_awt_Container$Z$Z$S$I$I(this.dpane, true, true, "Edit parameter for service " + currentservice.getName$(), 600, 800);
p$1.initTypeLists.apply(this, []);
this.reply=2;
this.old=toedit;
this.current=null;
if (this.old != null ) {
p$1.setStateFor$jalview_ws_rest_InputType.apply(this, [this.old]);
}this.updated=this.updated && this.reply == 0 ;
this.frame.validate$();
}, p$1);

Clazz.newMeth(C$, 'c$$jalview_gui_RestServiceEditorPane$jalview_ws_rest_RestServiceDescription$S', function (restServiceEditorPane, currentservice, string) {
Clazz.super_(C$, this,1);
p$1.initFor$jalview_gui_RestServiceEditorPane$jalview_ws_rest_RestServiceDescription$jalview_ws_rest_InputType.apply(this, [restServiceEditorPane, currentservice, null]);
this.tok.setText$S(string);
this.frame.waitForInput$();
}, 1);

Clazz.newMeth(C$, 'setStateFor$jalview_ws_rest_InputType', function (current) {
this.tok.setText$S(current.token);
var opanp=this.opanps.get$O(current.getURLtokenPrefix$());
for (var ops, $ops = current.getOptions$().iterator$(); $ops.hasNext$()&&((ops=($ops.next$())),1);) {
if (Clazz.instanceOf(ops, "jalview.ws.params.ParameterI")) {
opanp.setParameter$jalview_ws_params_ParameterI(ops);
} else {
if (ops.getValue$() != null  && ops.getValue$().length$() > 0 ) {
opanp.selectOption$jalview_ws_params_OptionI$S(ops, ops.getValue$());
}}}
this.typeList.setSelectedValue$O$Z(current.getURLtokenPrefix$(), true);
this.type_SelectionChangedActionPerformed$javax_swing_event_ListSelectionEvent(null);
}, p$1);

Clazz.newMeth(C$, 'updateCurrentType', function () {
if (this.typeList.getSelectedValue$() != null ) {
var newType=p$1.getTypeFor$S.apply(this, [this.typeList.getSelectedValue$()]);
if (newType != null ) {
newType.token=this.tok.getText$().trim$();
try {
newType.configureFromArgumentI$java_util_List(this.opanps.get$O(newType.getURLtokenPrefix$()).getCurrentSettings$());
this.current=newType;
this.updated=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"jalview.ws.params.InvalidArgumentException")){
System.err.println$S("IMPLEMENTATION ERROR: Invalid argument for type : " + this.typeList.getSelectedValue$() + "\n" );
ex.printStackTrace$();
} else {
throw ex;
}
}
}}}, p$1);

Clazz.newMeth(C$, 'initTypeLists', function () {
var types=Clazz.new_($I$(3));
for (var type, $type = 0, $$type = $I$(4).getInputTypes$(); $type<$$type.length&&((type=($$type[$type])),1);$type++) {
var jtype=null;
try {
var inopts=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(6))]);
var opts=Clazz.new_($I$(3));
var prms=Clazz.new_($I$(3));
jtype=(type.getConstructor$ClassA([]).newInstance$OA([]));
this.typeclass.put$TK$TV(jtype.getURLtokenPrefix$(), type);
var opanp=Clazz.new_($I$(7).c$$jalview_gui_OptsParametersContainerI$Z,[this, true]);
this.opanps.put$TK$TV(jtype.getURLtokenPrefix$(), opanp);
for (var opt, $opt = jtype.getOptions$().iterator$(); $opt.hasNext$()&&((opt=($opt.next$())),1);) {
if (Clazz.instanceOf(opt, "jalview.ws.params.ParameterI")) {
prms.add$TE(opanp.addParameter$jalview_ws_params_ParameterI(opt));
} else {
opts.add$TE(opanp.addOption$jalview_ws_params_OptionI(opt));
}}
for (var pnl, $pnl = prms.iterator$(); $pnl.hasNext$()&&((pnl=($pnl.next$())),1);) {
opts.add$TE(pnl);
}
this.typeopts.put$TK$TV(jtype.getURLtokenPrefix$(), opts);
types.add$TE(jtype.getURLtokenPrefix$());
} catch (x) {
System.err.println$S("Unexpected exception when instantiating rest input type.");
x.printStackTrace$();
}
}
this.typeList.setListData$TEA(types.toArray$());
}, p$1);

Clazz.newMeth(C$, 'type_SelectionChangedActionPerformed$javax_swing_event_ListSelectionEvent', function (e) {
this.options.removeAll$();
var typen=this.typeList.getSelectedValue$();
if (this.typeopts.get$O(typen) != null ) {
for (var opt, $opt = this.typeopts.get$O(typen).iterator$(); $opt.hasNext$()&&((opt=($opt.next$())),1);) {
opt.setOpaque$Z(true);
this.options.add$java_awt_Component$O(opt, "wrap");
}
this.options.invalidate$();
this.optionsPanel.setVisible$Z(true);
} else {
this.optionsPanel.setVisible$Z(false);
}this.dpane.revalidate$();
p$1.updateCurrentType.apply(this, []);
});

Clazz.newMeth(C$, 'wasUpdated$', function () {
return this.updated;
});

Clazz.newMeth(C$, 'refreshParamLayout$', function () {
this.options.invalidate$();
this.dpane.revalidate$();
});

Clazz.newMeth(C$, 'tokChanged_actionPerformed$', function () {
if (this.tok.getText$().trim$().length$() > 0) {
if (this.current != null ) {
this.current.token=this.tok.getText$().trim$();
this.updated=true;
}}});

Clazz.newMeth(C$, 'argSetModified$O$Z', function (modifiedElement, b) {
this.updated=!!(this.updated | b);
if (this.updated) {
p$1.updateCurrentType.apply(this, []);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
