(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.Vector','jalview.ws.rest.RestServiceDescription','jalview.gui.RestInputParamEditDialog','javax.swing.JPopupMenu','jalview.util.MessageManager',['jalview.io.packed.DataProvider','.JvDataType'],'javax.swing.JMenuItem','java.util.HashMap','StringBuffer','java.util.regex.Pattern','jalview.gui.JalviewDialog','javax.swing.JPanel','java.awt.BorderLayout','java.awt.FlowLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RestServiceEditorPane", null, 'jalview.jbgui.GRestServiceEditorPane');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.currentservice=null;
this.oldservice=null;
this._iparam=null;
this._rparam=null;
this.finalService=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.currentservice=null;
this.oldservice=null;
this._iparam=Clazz.new_($I$(1));
this._rparam=Clazz.new_($I$(1));
this.finalService=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.urldesc.addKeyListener$java_awt_event_KeyListener(((P$.RestServiceEditorPane$1||
(function(){var C$=Clazz.newClass(P$, "RestServiceEditorPane$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.KeyListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
this.b$['jalview.gui.RestServiceEditorPane'].refreshCutnPaste$Z.apply(this.b$['jalview.gui.RestServiceEditorPane'], [true]);
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
});
})()
), Clazz.new_(P$.RestServiceEditorPane$1.$init$, [this, null])));
this.panels.addChangeListener$javax_swing_event_ChangeListener(((P$.RestServiceEditorPane$2||
(function(){var C$=Clazz.newClass(P$, "RestServiceEditorPane$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lastComp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
if (this.lastComp !== this.b$['jalview.gui.RestServiceEditorPane'].paste ) {
p$1.updateServiceFromGui.apply(this.b$['jalview.gui.RestServiceEditorPane'], []);
this.b$['jalview.gui.RestServiceEditorPane'].refreshCutnPaste$Z.apply(this.b$['jalview.gui.RestServiceEditorPane'], [false]);
} else {
this.b$['jalview.gui.RestServiceEditorPane'].refreshCutnPaste$Z.apply(this.b$['jalview.gui.RestServiceEditorPane'], [true]);
}this.lastComp=this.b$['jalview.gui.RestServiceEditorPane'].panels.getSelectedComponent$();
});
})()
), Clazz.new_(P$.RestServiceEditorPane$2.$init$, [this, null])));
this.currentservice=Clazz.new_($I$(2).c$$S$S$S$S$S$java_util_Map$Z$Z$C,["Analysis", "service description", "service name", "http://localhost/", "", null, false, false, "-"]);
p$1.initGuiWith$jalview_ws_rest_RestServiceDescription.apply(this, [this.currentservice]);
this.refreshCutnPaste$Z(false);
this.updateButtons$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_rest_RestServiceDescription', function (toedit) {
C$.c$.apply(this, []);
this.oldservice=toedit;
if (this.oldservice != null ) {
this.currentservice=Clazz.new_($I$(2).c$$jalview_ws_rest_RestServiceDescription,[toedit]);
} else {
this.currentservice=Clazz.new_($I$(2).c$$S$S$S$S$S$java_util_Map$Z$Z$C,["Analysis", "service description", "service name", "http://localhost/", "", null, false, false, "-"]);
}p$1.initGuiWith$jalview_ws_rest_RestServiceDescription.apply(this, [this.currentservice]);
this.refreshCutnPaste$Z(false);
this.updateButtons$();
}, 1);

Clazz.newMeth(C$, 'updateButtons$', function () {
this.cancelButton.setEnabled$Z(true);
this.okButton.setEnabled$Z(this.currentservice != null  && this.currentservice.isValid$() );
});

Clazz.newMeth(C$, 'initGuiWith$jalview_ws_rest_RestServiceDescription', function (currentservice) {
this._iparam.clear$();
this._rparam.clear$();
this.action.removeAllItems$();
this.action.addItem$TE("Alignment");
this.action.addItem$TE("Analysis");
this.gapChar.removeAllItems$();
this.gapChar.addItem$TE(".");
this.gapChar.addItem$TE(" ");
this.gapChar.addItem$TE("-");
if (currentservice == null ) {
this.$name.setText$S("");
this.descr.setText$S("");
this.url.setText$S("");
this.urlsuff.setText$S("");
this.action.setSelectedItem$O("Analysis");
this.gapChar.setSelectedItem$O("-");
} else {
this.$name.setText$S(currentservice.getName$());
this.descr.setText$S(currentservice.getDescription$());
this.url.setText$S(currentservice.getPostUrl$());
this.urlsuff.setText$S(currentservice.getUrlSuffix$());
for (var inparam, $inparam = currentservice.getInputParams$().entrySet$().iterator$(); $inparam.hasNext$()&&((inparam=($inparam.next$())),1);) {
this._iparam.add$TE(inparam.getKey$() + " " + inparam.getValue$().getURLtokenPrefix$() + ":" + inparam.getValue$().getURLEncodedParameter$().toString() );
}
for (var oparam, $oparam = currentservice.getResultDataTypes$().iterator$(); $oparam.hasNext$()&&((oparam=($oparam.next$())),1);) {
this._rparam.add$TE(oparam.name$());
}
this.iprms.setListData$java_util_Vector(this._iparam);
this.rdata.setListData$java_util_Vector(this._rparam);
this.action.setSelectedItem$O(currentservice.getAction$());
this.gapChar.setSelectedItem$O("" + currentservice.getGapCharacter$());
}this.revalidate$();
}, p$1);

Clazz.newMeth(C$, 'getSelectedInputToken', function () {
if (this.iprms.getSelectedIndex$() > -1) {
var toktoedit=this.iprms.getSelectedValue$();
toktoedit=toktoedit.substring$I$I(0, toktoedit.indexOf$S(" "));
return toktoedit;
}return null;
}, p$1);

Clazz.newMeth(C$, 'iprmListSelection_doubleClicked$', function () {
var toktoedit=p$1.getSelectedInputToken.apply(this, []);
if (toktoedit != null ) {
var toedit=this.currentservice.getInputParams$().get$O(toktoedit);
var oldParam=toktoedit;
var dialog=Clazz.new_($I$(3).c$$jalview_gui_RestServiceEditorPane$jalview_ws_rest_RestServiceDescription$jalview_ws_rest_InputType,[this, this.currentservice, toedit]);
if (dialog.wasUpdated$()) {
this.currentservice.getInputParams$().remove$O(oldParam);
this.currentservice.getInputParams$().put$TK$TV(dialog.current.token, dialog.current);
p$1.initGuiWith$jalview_ws_rest_RestServiceDescription.apply(this, [this.currentservice]);
}}});

Clazz.newMeth(C$, 'iprmsAdd_actionPerformed$java_awt_event_ActionEvent', function (e) {
var dialog=Clazz.new_($I$(3).c$$jalview_gui_RestServiceEditorPane$jalview_ws_rest_RestServiceDescription$S,[this, this.currentservice, "param" + (1 + this.currentservice.getInputParams$().size$())]);
if (dialog.wasUpdated$()) {
this.currentservice.getInputParams$().put$TK$TV(dialog.current.token, dialog.current);
p$1.initGuiWith$jalview_ws_rest_RestServiceDescription.apply(this, [this.currentservice]);
}});

Clazz.newMeth(C$, 'iprmsRem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var toktoedit=p$1.getSelectedInputToken.apply(this, []);
if (toktoedit != null ) {
this.currentservice.getInputParams$().remove$O(toktoedit);
p$1.initGuiWith$jalview_ws_rest_RestServiceDescription.apply(this, [this.currentservice]);
}});

Clazz.newMeth(C$, 'rdata_rightClicked$java_awt_event_MouseEvent', function (mouse) {
var rdatasel=this.rdata.getSelectedIndex$();
if (rdatasel > -1) {
var popup=Clazz.new_($I$(4).c$$S,[$I$(5).getString$S("label.select_return_type")]);
for (var type, $type = 0, $$type = $I$(6).values$(); $type<$$type.length&&((type=($$type[$type])),1);$type++) {
popup.add$javax_swing_JMenuItem(Clazz.new_($I$(7).c$$S,[type.name$()])).addActionListener$java_awt_event_ActionListener(((P$.RestServiceEditorPane$3||
(function(){var C$=Clazz.newClass(P$, "RestServiceEditorPane$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.RestServiceEditorPane'].currentservice.getResultDataTypes$().set$I$TE(this.$finals$.rdatasel, this.$finals$.type);
p$1.initGuiWith$jalview_ws_rest_RestServiceDescription.apply(this.b$['jalview.gui.RestServiceEditorPane'], [this.b$['jalview.gui.RestServiceEditorPane'].currentservice]);
this.b$['jalview.gui.RestServiceEditorPane'].rdata.setSelectedIndex$I(this.$finals$.rdatasel);
});
})()
), Clazz.new_(P$.RestServiceEditorPane$3.$init$, [this, {rdatasel: rdatasel, type: type}])));
}
popup.show$java_awt_Component$I$I(this.rdata, mouse.getX$(), mouse.getY$());
}});

Clazz.newMeth(C$, 'rdataAdd_actionPerformed$java_awt_event_ActionEvent', function (e) {
var p;
if ((p=this.rdata.getSelectedIndex$()) > -1) {
this.currentservice.getResultDataTypes$().add$I$TE(p + 1, $I$(6).ANNOTATION);
} else {
this.currentservice.addResultDatatype$jalview_io_packed_DataProvider_JvDataType($I$(6).ANNOTATION);
}p$1.initGuiWith$jalview_ws_rest_RestServiceDescription.apply(this, [this.currentservice]);
this.rdata.setSelectedIndex$I(p == -1 ? this.currentservice.getResultDataTypes$().size$() - 1 : p + 1);
});

Clazz.newMeth(C$, 'rdataNdown_actionPerformed$java_awt_event_ActionEvent', function (e) {
var p;
if ((p=this.rdata.getSelectedIndex$()) > -1 && p < this._rparam.size$() - 1 ) {
var rtypes=this.currentservice.getResultDataTypes$();
var below=rtypes.get$I(p + 1);
rtypes.set$I$TE(p + 1, rtypes.get$I(p));
rtypes.set$I$TE(p, below);
p$1.initGuiWith$jalview_ws_rest_RestServiceDescription.apply(this, [this.currentservice]);
this.rdata.setSelectedIndex$I(p + 1);
}});

Clazz.newMeth(C$, 'rdataNup_actionPerformed$java_awt_event_ActionEvent', function (e) {
var p;
if ((p=this.rdata.getSelectedIndex$()) > 0) {
var rtypes=this.currentservice.getResultDataTypes$();
var above=rtypes.get$I(p - 1);
rtypes.set$I$TE(p - 1, rtypes.get$I(p));
rtypes.set$I$TE(p, above);
p$1.initGuiWith$jalview_ws_rest_RestServiceDescription.apply(this, [this.currentservice]);
this.rdata.setSelectedIndex$I(p - 1);
}});

Clazz.newMeth(C$, 'rdataRem_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.rdata.getSelectedIndex$() > -1) {
this.currentservice.getResultDataTypes$().remove$I(this.rdata.getSelectedIndex$());
p$1.initGuiWith$jalview_ws_rest_RestServiceDescription.apply(this, [this.currentservice]);
}});

Clazz.newMeth(C$, 'updateServiceFromGui', function () {
var inputTypes=Clazz.new_($I$(8));
var warnings=Clazz.new_($I$(9));
for (var its, $its = this._iparam.iterator$(); $its.hasNext$()&&((its=($its.next$())),1);) {
var mtch=$I$(10).compile$S("(\\S+)\\s(\\S+):\\[(.+)]").matcher$CharSequence(its);
if (mtch.find$()) {
if (!$I$(2).parseTypeString$S$S$S$S$java_util_Map$StringBuffer(mtch.group$I(2) + ":" + mtch.group$I(3) , mtch.group$I(1), mtch.group$I(2), mtch.group$I(3), inputTypes, warnings)) {
System.err.println$S("IMPLEMENTATION PROBLEM: Cannot parse RestService input parameter string '" + its + "'" + "\n" + warnings );
}}}
var gc=this.gapChar.getSelectedItem$() == null  ? " " : (this.gapChar.getSelectedItem$()).charAt$I(0);
var newService=Clazz.new_($I$(2).c$$S$S$S$S$S$java_util_Map$Z$Z$C,[this.action.getSelectedItem$(), this.descr.getText$().trim$(), this.$name.getText$().trim$(), this.url.getText$().trim$(), this.urlsuff.getText$().trim$(), inputTypes, this.hSeparable.isSelected$(), this.vSeparable.isSelected$(), gc]);
if (newService.isValid$()) {
for (var its, $its = this._rparam.iterator$(); $its.hasNext$()&&((its=($its.next$())),1);) {
var dtype;
try {
dtype=$I$(6).valueOf$S(its);
newService.addResultDatatype$jalview_io_packed_DataProvider_JvDataType(dtype);
} catch (x) {
System.err.println$S("IMPLEMENTATION PROBLEM: Cannot parse RestService output parameter string '" + its + "'" + "\n" + warnings );
}
}
this.currentservice=newService;
return true;
} else {
System.err.println$S("IMPLEMENTATION PROBLEM: Restservice generated from GUI is invalid\n" + warnings);
}return false;
}, p$1);

Clazz.newMeth(C$, 'refreshCutnPaste$Z', function (reparse) {
if (!reparse && this.currentservice.isValid$() ) {
this.urldesc.setText$S(this.currentservice.toString());
this.parseWarnings.setVisible$Z(false);
} else {
if (reparse) {
var txt=this.urldesc.getText$().trim$();
if (txt.length$() > 0) {
var rsd=null;
try {
rsd=Clazz.new_($I$(2).c$$S,[txt]);
if (rsd.isValid$()) {
this.parseWarnings.setVisible$Z(false);
this.parseRes.setText$S("");
p$1.initGuiWith$jalview_ws_rest_RestServiceDescription.apply(this, [this.currentservice=rsd]);
} else {
this.parseRes.setText$S($I$(5).formatMessage$S$SA("label.parsing_failed_syntax_errors_shown_below_param", Clazz.array(String, -1, [rsd.getInvalidMessage$()])));
this.parseWarnings.setVisible$Z(true);
}} catch (e) {
e.printStackTrace$();
this.parseRes.setText$S($I$(5).formatMessage$S$SA("label.parsing_failed_unrecoverable_exception_thrown_param", Clazz.array(String, -1, [e.toString()])));
this.parseWarnings.setVisible$Z(true);
}
}this.paste.revalidate$();
}}});

Clazz.newMeth(C$, 'showDialog$S', function (title) {
if (this.oldservice != null ) {
this.finalService=this.oldservice.toString();
}var jvd=((P$.RestServiceEditorPane$5||
(function(){var C$=Clazz.newClass(P$, "RestServiceEditorPane$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('jalview.gui.JalviewDialog'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'raiseClosed$', function () {
});

Clazz.newMeth(C$, 'okPressed$', function () {
p$1.updateServiceFromGui.apply(this.b$['jalview.gui.RestServiceEditorPane'], []);
this.b$['jalview.gui.RestServiceEditorPane'].finalService=this.b$['jalview.gui.RestServiceEditorPane'].currentservice.toString();
});

Clazz.newMeth(C$, 'cancelPressed$', function () {
});
})()
), Clazz.new_($I$(11), [this, null],P$.RestServiceEditorPane$5));
var pane=Clazz.new_($I$(12).c$$java_awt_LayoutManager,[Clazz.new_($I$(13))]);
var okcancel=Clazz.new_($I$(12).c$$java_awt_LayoutManager,[Clazz.new_($I$(14))]);
pane.add$java_awt_Component$O(this, "Center");
okcancel.add$java_awt_Component(jvd.ok);
okcancel.add$java_awt_Component(jvd.cancel);
pane.add$java_awt_Component$O(okcancel, "South");
jvd.initDialogFrame$java_awt_Container$Z$Z$S$I$I(pane, true, true, title, 600, 350);
jvd.waitForInput$();
});

Clazz.newMeth(C$, 'getEditedRestService$', function () {
return this.finalService;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
