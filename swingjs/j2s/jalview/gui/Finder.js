(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.HashMap','javax.swing.JInternalFrame','javax.swing.JLayeredPane','javax.swing.event.InternalFrameAdapter','java.awt.event.FocusAdapter','jalview.util.MessageManager','jalview.gui.Desktop','java.awt.Dimension','javax.swing.KeyStroke','javax.swing.AbstractAction','java.util.ArrayList','jalview.datamodel.SequenceFeature','jalview.gui.FeatureEditor','jalview.analysis.Finder','jalview.gui.JvOptionPane','StringBuilder','java.util.Locale','java.util.regex.Pattern']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Finder", null, 'jalview.jbgui.GFinder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['focusFixed'],'O',['av','jalview.api.AlignViewportI','ap','jalview.gui.AlignmentPanel','frame','javax.swing.JInternalFrame','finders','java.util.Map','searchResults','jalview.datamodel.SearchResultsI']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$Z$S',  function (alignPanel, fixedFocus, scope) {
Clazz.super_(C$, this);
this.av=alignPanel.getAlignViewport$();
this.ap=alignPanel;
this.focusFixed=fixedFocus;
this.finders=Clazz.new_($I$(1,1));
this.frame=Clazz.new_($I$(2,1));
this.frame.setContentPane$java_awt_Container(this);
this.frame.setLayer$Integer($I$(3).PALETTE_LAYER);
this.frame.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.Finder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Finder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent',  function (e) {
this.b$['jalview.gui.Finder'].closeAction$.apply(this.b$['jalview.gui.Finder'], []);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.Finder$1)));
this.frame.addFocusListener$java_awt_event_FocusListener(((P$.Finder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Finder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['jalview.gui.Finder'].getFocusedViewport$.apply(this.b$['jalview.gui.Finder'], []);
});
})()
), Clazz.new_($I$(5,1),[this, null],P$.Finder$2)));
p$1.addEscapeHandler.apply(this, []);
var title=$I$(6).getString$S("label.find");
if (scope != null ) {
title+=" " + scope;
}$I$(7).addInternalFrame$javax_swing_JInternalFrame$S$I$I(this.frame, title, 400, 150);
this.frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[350, 120]));
this.searchBox.getComponent$().requestFocus$();
}, 1);

Clazz.newMeth(C$, 'addEscapeHandler',  function () {
this.getRootPane$().getInputMap$I(2).put$javax_swing_KeyStroke$O($I$(9).getKeyStroke$I$I(27, 0), "Cancel");
this.getRootPane$().getActionMap$().put$O$javax_swing_Action("Cancel", ((P$.Finder$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Finder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.Finder'].closeAction$.apply(this.b$['jalview.gui.Finder'], []);
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.Finder$3)));
}, p$1);

Clazz.newMeth(C$, 'findNext_actionPerformed$',  function () {
if (this.getFocusedViewport$()) {
this.doSearch$Z(false);
}});

Clazz.newMeth(C$, 'findAll_actionPerformed$',  function () {
if (this.getFocusedViewport$()) {
this.doSearch$Z(true);
}});

Clazz.newMeth(C$, 'getFocusedViewport$',  function () {
if (this.focusFixed || $I$(7).desktop == null  ) {
if (this.ap != null  && this.av != null  ) {
this.ignoreHidden.setEnabled$Z(this.av.hasHiddenColumns$());
return true;
}return false;
}var frames=$I$(7).desktop.getAllFrames$();
for (var f=0; f < frames.length; f++) {
var alignFrame=frames[f];
if (alignFrame != null  && Clazz.instanceOf(alignFrame, "jalview.gui.AlignFrame")  && !alignFrame.isIcon$() ) {
this.av=(alignFrame).viewport;
this.ap=(alignFrame).alignPanel;
this.ignoreHidden.setEnabled$Z(this.av.hasHiddenColumns$());
return true;
}}
return false;
});

Clazz.newMeth(C$, 'createFeatures_actionPerformed$',  function () {
if (this.searchResults.isEmpty$()) {
return;
}var seqs=Clazz.new_($I$(11,1));
var features=Clazz.new_($I$(11,1));
var searchString=this.searchBox.getUserInput$();
var desc="Search Results";
for (var match, $match = this.searchResults.getResults$().iterator$(); $match.hasNext$()&&((match=($match.next$())),1);) {
seqs.add$O(match.getSequence$().getDatasetSequence$());
features.add$O(Clazz.new_([searchString, desc, match.getStart$(), match.getEnd$(), desc],$I$(12,1).c$$S$S$I$I$S));
}
Clazz.new_($I$(13,1).c$$jalview_gui_AlignmentPanel$java_util_List$java_util_List$Z,[this.ap, seqs, features, true]).showDialog$();
});

Clazz.newMeth(C$, 'doSearch$Z',  function (doFindAll) {
this.createFeatures.setEnabled$Z(false);
var searchString=this.searchBox.getUserInput$();
if (this.isInvalidSearchString$S(searchString)) {
return;
}var finder=this.finders.get$O(this.av);
if (finder == null ) {
finder=Clazz.new_($I$(14,1).c$$jalview_api_AlignViewportI,[this.av]);
this.finders.put$O$O(this.av, finder);
}var isCaseSensitive=this.caseSensitive.isSelected$();
var doSearchDescription=this.searchDescription.isSelected$();
var skipHidden=this.ignoreHidden.isSelected$();
if (doFindAll) {
finder.findAll$S$Z$Z$Z(searchString, isCaseSensitive, doSearchDescription, skipHidden);
} else {
finder.findNext$S$Z$Z$Z(searchString, isCaseSensitive, doSearchDescription, skipHidden);
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
$I$(15,"showInternalMessageDialog$java_awt_Component$S$S$I",[this, $I$(6).getString$S("label.finished_searching"), null, -1]);
} else {
if (doFindAll) {
var message=Clazz.new_($I$(16,1));
if (idMatch.size$() > 0) {
message.append$I(idMatch.size$()).append$S(" IDs");
}if (this.searchResults != null ) {
if (idMatch.size$() > 0 && this.searchResults.getCount$() > 0 ) {
message.append$S(" ").append$S($I$(6).getString$S("label.and").toLowerCase$java_util_Locale($I$(17).ROOT)).append$S(" ");
}message.append$S($I$(6,"formatMessage$S$OA",["label.subsequence_matches_found", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.searchResults.getCount$())])]));
}$I$(15,"showInternalMessageDialog$java_awt_Component$S$S$I",[this, message.toString(), null, 1]);
}}});

Clazz.newMeth(C$, 'isInvalidSearchString$S',  function (searchString) {
var error=this.getSearchValidationError$S(searchString);
if (error == null ) {
return false;
}$I$(15,"showInternalMessageDialog$java_awt_Component$S$S$I",[this, error, $I$(6).getString$S("label.invalid_search"), 0]);
return true;
});

Clazz.newMeth(C$, 'getSearchValidationError$S',  function (searchString) {
var error=null;
if (searchString == null  || searchString.length$() == 0 ) {
error=$I$(6).getString$S("label.invalid_search");
}try {
$I$(18).compile$S(searchString);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.regex.PatternSyntaxException")){
error=$I$(6).getString$S("error.invalid_regex") + ": " + e.getDescription$() ;
} else {
throw e;
}
}
return error;
});

Clazz.newMeth(C$, 'closeAction$',  function () {
this.frame.setVisible$Z(false);
this.frame.dispose$();
this.searchBox.persistCache$();
if (this.getFocusedViewport$()) {
this.ap.alignFrame.requestFocus$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:34 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
