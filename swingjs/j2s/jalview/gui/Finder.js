(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.HashMap','javax.swing.JInternalFrame','javax.swing.JLayeredPane','javax.swing.event.InternalFrameAdapter','jalview.gui.Desktop','jalview.util.MessageManager','javax.swing.KeyStroke','javax.swing.AbstractAction','java.util.ArrayList','jalview.datamodel.SequenceFeature','jalview.gui.FeatureEditor','jalview.analysis.Finder','jalview.gui.JvOptionPane','java.util.regex.Pattern']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Finder", null, 'jalview.jbgui.GFinder');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.av=null;
this.ap=null;
this.frame=null;
this.finders=null;
this.searchResults=null;
this.focusfixed=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$jalview_viewmodel_AlignmentViewport$jalview_gui_AlignmentPanel.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_viewmodel_AlignmentViewport$jalview_gui_AlignmentPanel', function (viewport, alignPanel) {
Clazz.super_(C$, this,1);
this.av=viewport;
this.ap=alignPanel;
this.finders=Clazz.new_($I$(1));
this.focusfixed=viewport != null ;
this.frame=Clazz.new_($I$(2));
this.frame.setContentPane$java_awt_Container(this);
this.frame.setLayer$Integer($I$(3).PALETTE_LAYER);
this.frame.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.Finder$1||
(function(){var C$=Clazz.newClass(P$, "Finder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent', function (e) {
this.b$['jalview.gui.Finder'].closeAction$.apply(this.b$['jalview.gui.Finder'], []);
});
})()
), Clazz.new_($I$(4), [this, null],P$.Finder$1)));
p$1.addEscapeHandler.apply(this, []);
$I$(5).addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I$Z$Z(this.frame, $I$(6).getString$S("label.find"), true, 400, 120, true, true);
this.searchBox.getComponent$().requestFocus$();
}, 1);

Clazz.newMeth(C$, 'addEscapeHandler', function () {
this.getRootPane$().getInputMap$I(2).put$javax_swing_KeyStroke$O($I$(7).getKeyStroke$I$I(27, 0), "Cancel");
this.getRootPane$().getActionMap$().put$O$javax_swing_Action("Cancel", ((P$.Finder$2||
(function(){var C$=Clazz.newClass(P$, "Finder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.Finder'].closeAction$.apply(this.b$['jalview.gui.Finder'], []);
});
})()
), Clazz.new_($I$(8), [this, null],P$.Finder$2)));
}, p$1);

Clazz.newMeth(C$, 'findNext_actionPerformed$', function () {
if (this.getFocusedViewport$()) {
this.doSearch$Z(false);
}});

Clazz.newMeth(C$, 'findAll_actionPerformed$', function () {
if (this.getFocusedViewport$()) {
this.doSearch$Z(true);
}});

Clazz.newMeth(C$, 'getFocusedViewport$', function () {
if (this.focusfixed || $I$(5).desktop == null  ) {
if (this.ap != null  && this.av != null  ) {
return true;
}return false;
}var frames=$I$(5).desktop.getAllFrames$();
for (var f=0; f < frames.length; f++) {
var alignFrame=frames[f];
if (alignFrame != null  && Clazz.instanceOf(alignFrame, "jalview.gui.AlignFrame")  && !alignFrame.isIcon$() ) {
this.av=(alignFrame).viewport;
this.ap=(alignFrame).alignPanel;
return true;
}}
return false;
});

Clazz.newMeth(C$, 'createFeatures_actionPerformed$', function () {
if (this.searchResults.isEmpty$()) {
return;
}var seqs=Clazz.new_($I$(9));
var features=Clazz.new_($I$(9));
var searchString=this.searchBox.getUserInput$();
var desc="Search Results";
for (var match, $match = this.searchResults.getResults$().iterator$(); $match.hasNext$()&&((match=($match.next$())),1);) {
seqs.add$TE(match.getSequence$().getDatasetSequence$());
features.add$TE(Clazz.new_($I$(10).c$$S$S$I$I$S,[searchString, desc, match.getStart$(), match.getEnd$(), desc]));
}
Clazz.new_($I$(11).c$$jalview_gui_AlignmentPanel$java_util_List$java_util_List$Z,[this.ap, seqs, features, true]).showDialog$();
});

Clazz.newMeth(C$, 'doSearch$Z', function (doFindAll) {
this.createFeatures.setEnabled$Z(false);
var searchString=this.searchBox.getUserInput$();
if (this.isInvalidSearchString$S(searchString)) {
return;
}var finder=this.finders.get$O(this.av);
if (finder == null ) {
finder=Clazz.new_($I$(12).c$$jalview_api_AlignViewportI,[this.av]);
this.finders.put$TK$TV(this.av, finder);
}var isCaseSensitive=this.caseSensitive.isSelected$();
var doSearchDescription=this.searchDescription.isSelected$();
if (doFindAll) {
finder.findAll$S$Z$Z(searchString, isCaseSensitive, doSearchDescription);
} else {
finder.findNext$S$Z$Z(searchString, isCaseSensitive, doSearchDescription);
}this.searchResults=finder.getSearchResults$();
var idMatch=finder.getIdMatches$();
this.ap.getIdPanel$().highlightSearchResults$java_util_List(idMatch);
if (this.searchResults.isEmpty$()) {
this.searchResults=null;
} else {
this.createFeatures.setEnabled$Z(true);
}this.searchBox.updateCache$();
this.ap.highlightSearchResults$jalview_datamodel_SearchResultsI(this.searchResults);
if (idMatch.isEmpty$() && this.searchResults == null  ) {
$I$(13).showInternalMessageDialog$java_awt_Component$S$S$I(this, $I$(6).getString$S("label.finished_searching"), null, -1);
} else {
if (doFindAll) {
var message=(idMatch.size$() > 0) ? "" + idMatch.size$() + " IDs"  : "";
if (this.searchResults != null ) {
if (idMatch.size$() > 0 && this.searchResults.getSize$() > 0 ) {
message += " and ";
}message += this.searchResults.getSize$() + " subsequence matches found.";
}$I$(13).showInternalMessageDialog$java_awt_Component$S$S$I(this, message, null, -1);
}}});

Clazz.newMeth(C$, 'isInvalidSearchString$S', function (searchString) {
var error=this.getSearchValidationError$S(searchString);
if (error == null ) {
return false;
}$I$(13).showInternalMessageDialog$java_awt_Component$S$S$I(this, error, $I$(6).getString$S("label.invalid_search"), 0);
return true;
});

Clazz.newMeth(C$, 'getSearchValidationError$S', function (searchString) {
var error=null;
if (searchString == null  || searchString.length$() == 0 ) {
error=$I$(6).getString$S("label.invalid_search");
}try {
$I$(14).compile$S(searchString);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.regex.PatternSyntaxException")){
error=$I$(6).getString$S("error.invalid_regex") + ": " + e.getDescription$() ;
} else {
throw e;
}
}
return error;
});

Clazz.newMeth(C$, 'closeAction$', function () {
this.frame.setVisible$Z(false);
this.frame.dispose$();
this.searchBox.persistCache$();
if (this.getFocusedViewport$()) {
this.ap.alignFrame.requestFocus$();
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
