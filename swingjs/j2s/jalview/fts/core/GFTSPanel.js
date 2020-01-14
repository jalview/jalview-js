(function(){var P$=Clazz.newPackage("jalview.fts.core"),p$1={},I$=[[0,'javax.swing.Timer','java.awt.Font','java.text.DecimalFormat','javax.swing.JInternalFrame','javax.swing.JTabbedPane','javax.swing.JComboBox','javax.swing.JButton','javax.swing.JCheckBox','StringBuilder','javax.swing.ImageIcon','javax.swing.JLabel','javax.swing.JPanel','java.awt.CardLayout','java.awt.BorderLayout','java.util.HashSet','jalview.gui.JvSwingUtils','javax.swing.JTable','javax.swing.JScrollPane','jalview.util.MessageManager','java.awt.Dimension','java.awt.event.FocusAdapter','jalview.io.cache.JvCacheableInputBox','java.awt.event.MouseAdapter','java.awt.event.KeyAdapter','jalview.util.Platform','jalview.bin.Cache','Boolean',['jalview.fts.core.GFTSPanel','.DeferredTextInputListener'],'jalview.fts.core.FTSDataColumnPreferences',['jalview.fts.core.FTSDataColumnPreferences','.PreferenceSource'],'javax.swing.event.InternalFrameAdapter','jalview.gui.Desktop','java.util.Arrays','Thread','jalview.gui.SequenceFetcher','java.util.ArrayList','java.util.Collections','javax.swing.table.DefaultTableModel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GFTSPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', 'jalview.fts.api.GFTSPanelI');
C$.VERDANA_12=null;
C$.totalNumberformatter=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.VERDANA_12=Clazz.new_($I$(2).c$$S$I$I,["Verdana", 0, 12]);
C$.totalNumberformatter=Clazz.new_($I$(3).c$$S,["###,###"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mainFrame=null;
this.tabs=null;
this.progressIndicator=null;
this.cmb_searchTarget=null;
this.btn_ok=null;
this.btn_back=null;
this.btn_cancel=null;
this.btn_autosearch=null;
this.txt_search=null;
this.seqFetcher=null;
this.wantedFields=null;
this.lastSearchTerm=null;
this.btn_next_page=null;
this.btn_prev_page=null;
this.errorWarning=null;
this.warningImage=null;
this.loadingImage=null;
this.balnkPlaceholderImage=null;
this.lbl_warning=null;
this.lbl_loading=null;
this.lbl_blank=null;
this.tabbedPane=null;
this.pnl_actions=null;
this.pnl_results=null;
this.pnl_inputs=null;
this.mainLayout=null;
this.previousWantedFields=null;
this.resultSetCount=0;
this.totalResultSetCount=0;
this.offSet=0;
this.pageLimit=0;
this.paginatorCart=null;
this.tbl_summary=null;
this.scrl_searchResult=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.mainFrame=Clazz.new_($I$(4).c$$S,[this.getFTSFrameTitle$()]);
this.tabs=Clazz.new_($I$(5));
this.cmb_searchTarget=Clazz.new_($I$(6));
this.btn_ok=Clazz.new_($I$(7));
this.btn_back=Clazz.new_($I$(7));
this.btn_cancel=Clazz.new_($I$(7));
this.btn_autosearch=Clazz.new_($I$(8));
this.lastSearchTerm="";
this.btn_next_page=Clazz.new_($I$(7));
this.btn_prev_page=Clazz.new_($I$(7));
this.errorWarning=Clazz.new_($I$(9));
this.warningImage=Clazz.new_($I$(10).c$$java_net_URL,[this.getClass$().getResource$S("/images/warning.gif")]);
this.loadingImage=Clazz.new_($I$(10).c$$java_net_URL,[this.getClass$().getResource$S("/images/loading.gif")]);
this.balnkPlaceholderImage=Clazz.new_($I$(10).c$$java_net_URL,[this.getClass$().getResource$S("/images/blank_16x16_placeholder.png")]);
this.lbl_warning=Clazz.new_($I$(11).c$$javax_swing_Icon,[this.warningImage]);
this.lbl_loading=Clazz.new_($I$(11).c$$javax_swing_Icon,[this.loadingImage]);
this.lbl_blank=Clazz.new_($I$(11).c$$javax_swing_Icon,[this.balnkPlaceholderImage]);
this.tabbedPane=Clazz.new_($I$(5));
this.pnl_actions=Clazz.new_($I$(12));
this.pnl_results=Clazz.new_($I$(12).c$$java_awt_LayoutManager,[Clazz.new_($I$(13))]);
this.pnl_inputs=Clazz.new_($I$(12));
this.mainLayout=Clazz.new_($I$(14));
this.paginatorCart=Clazz.new_($I$(15));
this.tbl_summary=((P$.GFTSPanel$1||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTable'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.inLayout=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$', function () {
return this.hasExcessWidth$();
});

Clazz.newMeth(C$, 'doLayout$', function () {
if (this.hasExcessWidth$()) {
this.autoResizeMode=2;
}this.inLayout=true;
C$.superclazz.prototype.doLayout$.apply(this, []);
this.inLayout=false;
this.autoResizeMode=0;
});

Clazz.newMeth(C$, 'hasExcessWidth$', function () {
return this.getPreferredSize$().width < this.getParent$().getWidth$();
});

Clazz.newMeth(C$, 'columnMarginChanged$javax_swing_event_ChangeEvent', function (e) {
if (this.isEditing$()) {
this.removeEditor$();
}var resizingColumn=this.getTableHeader$().getResizingColumn$();
if (resizingColumn != null  && this.autoResizeMode == 0  && !this.inLayout ) {
resizingColumn.setPreferredWidth$I(resizingColumn.getWidth$());
var colHeader=resizingColumn.getHeaderValue$().toString();
this.b$['jalview.fts.api.GFTSPanelI'].getTempUserPrefs$.apply(this.b$['jalview.fts.api.GFTSPanelI'], []).put$TK$TV(colHeader, new Integer(resizingColumn.getWidth$()));
}this.resizeAndRepaint$();
});

Clazz.newMeth(C$, 'getToolTipText$java_awt_event_MouseEvent', function (evt) {
var toolTipText=null;
var pnt=evt.getPoint$();
var rowIndex=this.rowAtPoint$java_awt_Point(pnt);
var colIndex=this.columnAtPoint$java_awt_Point(pnt);
try {
if (this.getValueAt$I$I(rowIndex, colIndex) == null ) {
return null;
}toolTipText=this.getValueAt$I$I(rowIndex, colIndex).toString();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
toolTipText=(toolTipText == null  ? null : (toolTipText.length$() > 500 ? $I$(16).wrapTooltip$Z$S(true, toolTipText.subSequence$I$I(0, 500) + "...") : $I$(16).wrapTooltip$Z$S(true, toolTipText)));
return toolTipText;
});
})()
), Clazz.new_($I$(17), [this, null],P$.GFTSPanel$1));
this.scrl_searchResult=Clazz.new_($I$(18).c$$java_awt_Component,[this.tbl_summary]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$jalview_gui_SequenceFetcher.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_SequenceFetcher', function (fetcher) {
Clazz.super_(C$, this,1);
try {
if (fetcher == null ) {
this.tabs=null;
}p$1.jbInit.apply(this, []);
if (fetcher != null ) {
this.tabs.addTab$S$java_awt_Component($I$(19).getString$S("label.retrieve_ids"), fetcher);
fetcher.embedIn$jalview_fts_core_GFTSPanel(this);
}this.mainFrame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(20).c$$I$I,[670, 300]));
var ftsPanel=this;
this.mainFrame.addFocusListener$java_awt_event_FocusListener(((P$.GFTSPanel$2||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
if (this.b$['jalview.fts.core.GFTSPanel'].tabs != null  && this.b$['jalview.fts.core.GFTSPanel'].tabs.getSelectedComponent$() === this.$finals$.ftsPanel  ) {
this.b$['jalview.fts.core.GFTSPanel'].txt_search.getComponent$().requestFocusInWindow$();
}});
})()
), Clazz.new_($I$(21), [this, {ftsPanel: ftsPanel}],P$.GFTSPanel$2)));
this.mainFrame.invalidate$();
this.mainFrame.pack$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
this.txt_search=Clazz.new_($I$(22).c$$S,[this.getCacheKey$()]);
this.populateCmbSearchTargetOptions$();
var width=new Integer(this.getTempUserPrefs$().get$O("FTSPanel.width") == null  ? 800 : (this.getTempUserPrefs$().get$O("FTSPanel.width")).intValue$());
var height=new Integer(this.getTempUserPrefs$().get$O("FTSPanel.height") == null  ? 400 : (this.getTempUserPrefs$().get$O("FTSPanel.height")).intValue$());
this.lbl_warning.setVisible$Z(false);
this.lbl_warning.setFont$java_awt_Font(C$.VERDANA_12);
this.lbl_loading.setVisible$Z(false);
this.lbl_loading.setFont$java_awt_Font(C$.VERDANA_12);
this.lbl_blank.setVisible$Z(true);
this.lbl_blank.setFont$java_awt_Font(C$.VERDANA_12);
this.tbl_summary.setAutoCreateRowSorter$Z(true);
this.tbl_summary.getTableHeader$().setReorderingAllowed$Z(false);
this.tbl_summary.addMouseListener$java_awt_event_MouseListener(((P$.GFTSPanel$3||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.fts.core.GFTSPanel'].validateSelection$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.fts.core.GFTSPanel'].validateSelection$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
});
})()
), Clazz.new_($I$(23), [this, null],P$.GFTSPanel$3)));
this.tbl_summary.addKeyListener$java_awt_event_KeyListener(((P$.GFTSPanel$4||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
this.b$['jalview.fts.core.GFTSPanel'].validateSelection$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
switch (evt.getKeyCode$()) {
case 27:
this.b$['jalview.fts.core.GFTSPanel'].btn_back_ActionPerformed$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
break;
case 10:
if (this.b$['jalview.fts.core.GFTSPanel'].btn_ok.isEnabled$()) {
this.b$['jalview.fts.core.GFTSPanel'].okAction$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
}evt.consume$();
break;
case 9:
if (evt.isShiftDown$()) {
this.b$['jalview.fts.core.GFTSPanel'].tabbedPane.requestFocus$();
} else {
this.b$['jalview.fts.core.GFTSPanel'].btn_back.requestFocus$();
}evt.consume$();
break;
default:
return;
}
});
})()
), Clazz.new_($I$(24), [this, null],P$.GFTSPanel$4)));
var txt_help=Clazz.new_($I$(7).c$$S,["?"]);
txt_help.setFont$java_awt_Font(C$.VERDANA_12);
txt_help.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(20).c$$I$I,[15, 15]));
txt_help.setToolTipText$S($I$(19).getString$S("action.help"));
txt_help.addActionListener$java_awt_event_ActionListener(((P$.GFTSPanel$5||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.fts.core.GFTSPanel'].showHelp$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
});
})()
), Clazz.new_(P$.GFTSPanel$5.$init$, [this, null])));
this.btn_autosearch.setText$S($I$(19).getString$S("option.autosearch"));
this.btn_autosearch.setToolTipText$S($I$(19).getString$S("option.enable_disable_autosearch"));
this.btn_autosearch.setSelected$Z(!$I$(25).isJS$() && $I$(26).getDefault$S$Z(this.getAutosearchPreference$(), true) );
this.btn_autosearch.addActionListener$java_awt_event_ActionListener(((P$.GFTSPanel$6||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
$I$(26).setProperty$S$S(this.b$['jalview.fts.api.GFTSPanelI'].getAutosearchPreference$.apply(this.b$['jalview.fts.api.GFTSPanelI'], []), $I$(27).toString$Z(this.b$['jalview.fts.core.GFTSPanel'].btn_autosearch.isSelected$()));
});
})()
), Clazz.new_(P$.GFTSPanel$6.$init$, [this, null])));
this.btn_back.setFont$java_awt_Font(C$.VERDANA_12);
this.btn_back.setText$S($I$(19).getString$S("action.back"));
this.btn_back.addActionListener$java_awt_event_ActionListener(((P$.GFTSPanel$7||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.fts.core.GFTSPanel'].btn_back_ActionPerformed$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
});
})()
), Clazz.new_(P$.GFTSPanel$7.$init$, [this, null])));
this.btn_back.addKeyListener$java_awt_event_KeyListener(((P$.GFTSPanel$8||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
if (evt.getKeyCode$() == 10) {
this.b$['jalview.fts.core.GFTSPanel'].btn_back_ActionPerformed$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
}});
})()
), Clazz.new_($I$(24), [this, null],P$.GFTSPanel$8)));
this.btn_ok.setEnabled$Z(false);
this.btn_ok.setFont$java_awt_Font(C$.VERDANA_12);
this.btn_ok.setText$S($I$(19).getString$S("action.ok"));
this.btn_ok.addActionListener$java_awt_event_ActionListener(((P$.GFTSPanel$9||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.fts.core.GFTSPanel'].okAction$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
});
})()
), Clazz.new_(P$.GFTSPanel$9.$init$, [this, null])));
this.btn_ok.addKeyListener$java_awt_event_KeyListener(((P$.GFTSPanel$10||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
if (evt.getKeyCode$() == 10) {
this.b$['jalview.fts.core.GFTSPanel'].okAction$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
}});
})()
), Clazz.new_($I$(24), [this, null],P$.GFTSPanel$10)));
this.btn_next_page.setEnabled$Z(false);
this.btn_next_page.setToolTipText$S($I$(19).getString$S("label.next_page_tooltip"));
this.btn_next_page.setFont$java_awt_Font(C$.VERDANA_12);
this.btn_next_page.setText$S($I$(19).getString$S("action.next_page"));
this.btn_next_page.addActionListener$java_awt_event_ActionListener(((P$.GFTSPanel$11||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.fts.core.GFTSPanel'].nextPageAction$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
});
})()
), Clazz.new_(P$.GFTSPanel$11.$init$, [this, null])));
this.btn_next_page.addKeyListener$java_awt_event_KeyListener(((P$.GFTSPanel$12||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
if (evt.getKeyCode$() == 10) {
this.b$['jalview.fts.core.GFTSPanel'].nextPageAction$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
}});
})()
), Clazz.new_($I$(24), [this, null],P$.GFTSPanel$12)));
this.btn_prev_page.setEnabled$Z(false);
this.btn_prev_page.setToolTipText$S($I$(19).getString$S("label.prev_page_tooltip"));
this.btn_prev_page.setFont$java_awt_Font(C$.VERDANA_12);
this.btn_prev_page.setText$S($I$(19).getString$S("action.prev_page"));
this.btn_prev_page.addActionListener$java_awt_event_ActionListener(((P$.GFTSPanel$13||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.fts.core.GFTSPanel'].prevPageAction$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
});
})()
), Clazz.new_(P$.GFTSPanel$13.$init$, [this, null])));
this.btn_prev_page.addKeyListener$java_awt_event_KeyListener(((P$.GFTSPanel$14||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
if (evt.getKeyCode$() == 10) {
this.b$['jalview.fts.core.GFTSPanel'].prevPageAction$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
}});
})()
), Clazz.new_($I$(24), [this, null],P$.GFTSPanel$14)));
if (this.isPaginationEnabled$()) {
this.btn_prev_page.setVisible$Z(true);
this.btn_next_page.setVisible$Z(true);
} else {
this.btn_prev_page.setVisible$Z(false);
this.btn_next_page.setVisible$Z(false);
}this.btn_cancel.setFont$java_awt_Font(C$.VERDANA_12);
this.btn_cancel.setText$S($I$(19).getString$S("action.cancel"));
this.btn_cancel.addActionListener$java_awt_event_ActionListener(((P$.GFTSPanel$15||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.fts.core.GFTSPanel'].btn_cancel_ActionPerformed$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
});
})()
), Clazz.new_(P$.GFTSPanel$15.$init$, [this, null])));
this.btn_cancel.addKeyListener$java_awt_event_KeyListener(((P$.GFTSPanel$16||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
if (evt.getKeyCode$() == 10) {
this.b$['jalview.fts.core.GFTSPanel'].btn_cancel_ActionPerformed$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
}});
})()
), Clazz.new_($I$(24), [this, null],P$.GFTSPanel$16)));
this.scrl_searchResult.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(20).c$$I$I,[(width).intValue$(), (height).intValue$()]));
this.cmb_searchTarget.setFont$java_awt_Font(C$.VERDANA_12);
this.cmb_searchTarget.addItemListener$java_awt_event_ItemListener(((P$.GFTSPanel$17||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
if (e.getStateChange$() == 1) {
var tooltipText;
if ("all".equalsIgnoreCase$S(this.b$['jalview.fts.core.GFTSPanel'].getCmbSearchTarget$.apply(this.b$['jalview.fts.core.GFTSPanel'], []).getSelectedItem$().toString())) {
tooltipText=$I$(19).getString$S("label.search_all");
} else if ("pdb id".equalsIgnoreCase$S(this.b$['jalview.fts.core.GFTSPanel'].getCmbSearchTarget$.apply(this.b$['jalview.fts.core.GFTSPanel'], []).getSelectedItem$().toString())) {
tooltipText=$I$(19).getString$S("label.separate_multiple_accession_ids");
} else {
tooltipText=$I$(19).formatMessage$S$OA("label.separate_multiple_query_values", Clazz.array(java.lang.Object, -1, [this.b$['jalview.fts.core.GFTSPanel'].getCmbSearchTarget$.apply(this.b$['jalview.fts.core.GFTSPanel'], []).getSelectedItem$().toString()]));
}this.b$['jalview.fts.core.GFTSPanel'].txt_search.getComponent$().setToolTipText$S($I$(16).wrapTooltip$Z$S(true, tooltipText));
this.b$['jalview.fts.api.GFTSPanelI'].searchAction$Z.apply(this.b$['jalview.fts.api.GFTSPanelI'], [true]);
}});
})()
), Clazz.new_(P$.GFTSPanel$17.$init$, [this, null])));
this.txt_search.getComponent$().setFont$java_awt_Font(C$.VERDANA_12);
this.txt_search.addKeyListener$java_awt_event_KeyListener(((P$.GFTSPanel$18||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
if (e.getKeyCode$() == 10) {
if (this.b$['jalview.fts.core.GFTSPanel'].getTypedText$.apply(this.b$['jalview.fts.core.GFTSPanel'], []) == null  || this.b$['jalview.fts.core.GFTSPanel'].getTypedText$.apply(this.b$['jalview.fts.core.GFTSPanel'], []).isEmpty$() ) {
return;
}var primaryKeyName=this.b$['jalview.fts.api.GFTSPanelI'].getFTSRestClient$.apply(this.b$['jalview.fts.api.GFTSPanelI'], []).getPrimaryKeyColumn$().getName$();
if (primaryKeyName.equalsIgnoreCase$S(this.b$['jalview.fts.core.GFTSPanel'].getCmbSearchTarget$.apply(this.b$['jalview.fts.core.GFTSPanel'], []).getSelectedItem$().toString())) {
this.b$['jalview.fts.core.GFTSPanel'].transferToSequenceFetcher$S.apply(this.b$['jalview.fts.core.GFTSPanel'], [this.b$['jalview.fts.core.GFTSPanel'].getTypedText$.apply(this.b$['jalview.fts.core.GFTSPanel'], [])]);
} else {
this.b$['jalview.fts.core.GFTSPanel'].performSearchAction$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
}}});
})()
), Clazz.new_($I$(24), [this, null],P$.GFTSPanel$18)));
var listener=Clazz.new_($I$(28).c$$I$java_awt_event_ActionListener$Z, [this, null, 1500, ((P$.GFTSPanel$19||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (this.b$['jalview.fts.core.GFTSPanel'].btn_autosearch.isSelected$() || this.b$['jalview.fts.core.GFTSPanel'].txt_search.wasEnterPressed$() ) {
this.b$['jalview.fts.core.GFTSPanel'].performSearchAction$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
}});
})()
), Clazz.new_(P$.GFTSPanel$19.$init$, [this, null])), false]);
this.txt_search.addDocumentListener$javax_swing_event_DocumentListener(listener);
this.txt_search.addFocusListener$java_awt_event_FocusListener(((P$.GFTSPanel$20||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
this.$finals$.listener.start$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
});
})()
), Clazz.new_(P$.GFTSPanel$20.$init$, [this, {listener: listener}])));
this.txt_search.addActionListener$java_awt_event_ActionListener(((P$.GFTSPanel$21||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.fts.core.GFTSPanel'].performSearchAction$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
});
})()
), Clazz.new_(P$.GFTSPanel$21.$init$, [this, null])));
var searchTabTitle=$I$(19).getString$S("label.search_result");
var configureCols=$I$(19).getString$S("label.configure_displayed_columns");
var changeListener=((P$.GFTSPanel$22||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (changeEvent) {
var sourceTabbedPane=changeEvent.getSource$();
var index=sourceTabbedPane.getSelectedIndex$();
this.b$['jalview.fts.core.GFTSPanel'].btn_back.setVisible$Z(true);
this.b$['jalview.fts.core.GFTSPanel'].btn_cancel.setVisible$Z(true);
this.b$['jalview.fts.core.GFTSPanel'].btn_ok.setVisible$Z(true);
if (sourceTabbedPane.getTitleAt$I(index).equals$O(this.$finals$.configureCols)) {
this.b$['jalview.fts.core.GFTSPanel'].btn_back.setVisible$Z(false);
this.b$['jalview.fts.core.GFTSPanel'].btn_cancel.setVisible$Z(false);
this.b$['jalview.fts.core.GFTSPanel'].btn_ok.setVisible$Z(false);
this.b$['jalview.fts.core.GFTSPanel'].btn_back.setEnabled$Z(false);
this.b$['jalview.fts.core.GFTSPanel'].btn_cancel.setEnabled$Z(false);
this.b$['jalview.fts.core.GFTSPanel'].btn_ok.setEnabled$Z(false);
this.b$['jalview.fts.core.GFTSPanel'].btn_next_page.setEnabled$Z(false);
this.b$['jalview.fts.core.GFTSPanel'].btn_prev_page.setEnabled$Z(false);
this.b$['jalview.fts.core.GFTSPanel'].txt_search.getComponent$().setEnabled$Z(false);
this.b$['jalview.fts.core.GFTSPanel'].cmb_searchTarget.setEnabled$Z(false);
this.b$['jalview.fts.core.GFTSPanel'].previousWantedFields=this.b$['jalview.fts.api.GFTSPanelI'].getFTSRestClient$.apply(this.b$['jalview.fts.api.GFTSPanelI'], []).getAllDefaultDisplayedFTSDataColumns$().toArray$TTA(Clazz.array(java.lang.Object, [0]));
}if (sourceTabbedPane.getTitleAt$I(index).equals$O(this.$finals$.searchTabTitle)) {
this.b$['jalview.fts.core.GFTSPanel'].btn_back.setEnabled$Z(true);
this.b$['jalview.fts.core.GFTSPanel'].btn_cancel.setEnabled$Z(true);
this.b$['jalview.fts.core.GFTSPanel'].refreshPaginatorState$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
this.b$['jalview.fts.core.GFTSPanel'].txt_search.getComponent$().setEnabled$Z(true);
this.b$['jalview.fts.core.GFTSPanel'].cmb_searchTarget.setEnabled$Z(true);
if (this.b$['jalview.fts.core.GFTSPanel'].wantedFieldsUpdated$.apply(this.b$['jalview.fts.core.GFTSPanel'], [])) {
this.b$['jalview.fts.api.GFTSPanelI'].searchAction$Z.apply(this.b$['jalview.fts.api.GFTSPanelI'], [true]);
this.b$['jalview.fts.core.GFTSPanel'].paginatorCart.clear$();
} else {
this.b$['jalview.fts.core.GFTSPanel'].validateSelection$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
}}});
})()
), Clazz.new_(P$.GFTSPanel$22.$init$, [this, {configureCols: configureCols, searchTabTitle: searchTabTitle}]));
this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(changeListener);
this.tabbedPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(20).c$$I$I,[(width).intValue$(), (height).intValue$()]));
this.tabbedPane.add$S$java_awt_Component(searchTabTitle, this.scrl_searchResult);
this.tabbedPane.add$S$java_awt_Component(configureCols, Clazz.new_($I$(29).c$$jalview_fts_core_FTSDataColumnPreferences_PreferenceSource$jalview_fts_api_FTSRestClientI,[$I$(30).SEARCH_SUMMARY, this.getFTSRestClient$()]));
this.pnl_actions.add$java_awt_Component(this.btn_back);
this.pnl_actions.add$java_awt_Component(this.btn_ok);
this.pnl_actions.add$java_awt_Component(this.btn_cancel);
this.pnl_results.add$java_awt_Component(this.tabbedPane);
this.pnl_inputs.add$java_awt_Component(this.cmb_searchTarget);
this.pnl_inputs.add$java_awt_Component(this.txt_search.getComponent$());
this.pnl_inputs.add$java_awt_Component(txt_help);
this.pnl_inputs.add$java_awt_Component(this.btn_autosearch);
this.pnl_inputs.add$java_awt_Component(this.lbl_loading);
this.pnl_inputs.add$java_awt_Component(this.lbl_warning);
this.pnl_inputs.add$java_awt_Component(this.lbl_blank);
this.pnl_inputs.add$java_awt_Component(this.btn_prev_page);
this.pnl_inputs.add$java_awt_Component(this.btn_next_page);
this.setLayout$java_awt_LayoutManager(this.mainLayout);
this.add$java_awt_Component$O(this.pnl_inputs, "North");
this.add$java_awt_Component$O(this.pnl_results, "Center");
this.add$java_awt_Component$O(this.pnl_actions, "South");
this.mainFrame.setVisible$Z(true);
if (this.tabs != null ) {
this.tabs.setOpaque$Z(true);
this.tabs.insertTab$S$javax_swing_Icon$java_awt_Component$S$I($I$(19).getString$S("label.free_text_search"), null, this, "", 0);
this.mainFrame.setContentPane$java_awt_Container(this.tabs);
this.tabs.setVisible$Z(true);
} else {
this.mainFrame.setContentPane$java_awt_Container(this);
}this.mainFrame.setDefaultCloseOperation$I(2);
this.mainFrame.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.GFTSPanel$23||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent', function (e) {
this.b$['jalview.fts.core.GFTSPanel'].closeAction$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
});
})()
), Clazz.new_($I$(31), [this, null],P$.GFTSPanel$23)));
this.mainFrame.setDefaultCloseOperation$I(2);
var x=this.getTempUserPrefs$().get$O("FTSPanel.x");
var y=this.getTempUserPrefs$().get$O("FTSPanel.y");
if (x != null  && y != null  ) {
this.mainFrame.setLocation$I$I((x).intValue$(), (y).intValue$());
}$I$(32).addInternalFrame$javax_swing_JInternalFrame$S$I$I(this.mainFrame, this.getFTSFrameTitle$(), (width).intValue$(), (height).intValue$());
}, p$1);

Clazz.newMeth(C$, 'closeAction$', function () {
this.getTempUserPrefs$().put$TK$TV("FTSPanel.width", new Integer(this.getWidth$()));
this.getTempUserPrefs$().put$TK$TV("FTSPanel.height", new Integer(this.pnl_results.getHeight$()));
this.getTempUserPrefs$().put$TK$TV("FTSPanel.x", new Integer(this.mainFrame.getX$()));
this.getTempUserPrefs$().put$TK$TV("FTSPanel.y", new Integer(this.mainFrame.getY$()));
this.mainFrame.dispose$();
this.txt_search.persistCache$();
});

Clazz.newMeth(C$, 'performSearchAction$', function () {
var typed=this.getTypedText$();
if (typed != null  && typed.length$() > 0  && !typed.equalsIgnoreCase$S(this.lastSearchTerm) ) {
this.searchAction$Z(true);
this.paginatorCart.clear$();
this.lastSearchTerm=typed;
}});

Clazz.newMeth(C$, 'wantedFieldsUpdated$', function () {
if (this.previousWantedFields == null ) {
return false;
}return $I$(33).equals$OA$OA(this.getFTSRestClient$().getAllDefaultDisplayedFTSDataColumns$().toArray$TTA(Clazz.array(java.lang.Object, [0])), this.previousWantedFields) ? false : true;
});

Clazz.newMeth(C$, 'validateSelection$', function () {
if (this.tbl_summary.getSelectedRows$().length > 0 || !this.paginatorCart.isEmpty$() ) {
this.btn_ok.setEnabled$Z(true);
} else {
this.btn_ok.setEnabled$Z(false);
}});

Clazz.newMeth(C$, 'getCmbSearchTarget$', function () {
return this.cmb_searchTarget;
});

Clazz.newMeth(C$, 'getMainFrame$', function () {
return this.mainFrame;
});

Clazz.newMeth(C$, 'delayAndEnableActionButtons$', function () {
((P$.GFTSPanel$24||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
$I$(34).sleep$J(1500);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
e.printStackTrace$();
} else {
throw e;
}
}
this.b$['jalview.fts.core.GFTSPanel'].btn_ok.setEnabled$Z(true);
this.b$['jalview.fts.core.GFTSPanel'].btn_back.setEnabled$Z(true);
this.b$['jalview.fts.core.GFTSPanel'].btn_cancel.setEnabled$Z(true);
});
})()
), Clazz.new_($I$(34), [this, null],P$.GFTSPanel$24)).start$();
});

Clazz.newMeth(C$, 'checkForErrors$', function () {
this.lbl_warning.setVisible$Z(false);
this.lbl_blank.setVisible$Z(true);
if (this.errorWarning.length$() > 0) {
this.lbl_loading.setVisible$Z(false);
this.lbl_blank.setVisible$Z(false);
this.lbl_warning.setToolTipText$S($I$(16).wrapTooltip$Z$S(true, this.errorWarning.toString()));
this.lbl_warning.setVisible$Z(true);
}});

Clazz.newMeth(C$, 'btn_back_ActionPerformed$', function () {
this.closeAction$();
Clazz.new_($I$(35).c$$jalview_gui_IProgressIndicator,[this.progressIndicator]);
});

Clazz.newMeth(C$, 'disableActionButtons$', function () {
this.btn_ok.setEnabled$Z(false);
this.btn_back.setEnabled$Z(false);
this.btn_cancel.setEnabled$Z(false);
});

Clazz.newMeth(C$, 'btn_cancel_ActionPerformed$', function () {
this.closeAction$();
});

Clazz.newMeth(C$, 'populateCmbSearchTargetOptions$', function () {
var searchableTargets=Clazz.new_($I$(36));
try {
var foundFTSTargets=this.getFTSRestClient$().getSearchableDataColumns$();
searchableTargets.addAll$java_util_Collection(foundFTSTargets);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
$I$(37).sort$java_util_List$java_util_Comparator(searchableTargets, ((P$.GFTSPanel$25||
(function(){var C$=Clazz.newClass(P$, "GFTSPanel$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$jalview_fts_api_FTSDataColumnI$jalview_fts_api_FTSDataColumnI','compare$','compare$TT$TT'], function (o1, o2) {
return o1.getName$().compareTo$S(o2.getName$());
});
})()
), Clazz.new_(P$.GFTSPanel$25.$init$, [this, null])));
for (var searchTarget, $searchTarget = searchableTargets.iterator$(); $searchTarget.hasNext$()&&((searchTarget=($searchTarget.next$())),1);) {
this.cmb_searchTarget.addItem$TE(searchTarget);
}
});

Clazz.newMeth(C$, 'transferToSequenceFetcher$S', function (ids) {
this.seqFetcher.setQuery$S(ids);
var worker=Clazz.new_($I$(34).c$$Runnable,[this.seqFetcher]);
worker.start$();
});

Clazz.newMeth(C$, 'getTypedText$', function () {
return this.txt_search.getUserInput$();
});

Clazz.newMeth(C$, 'getResultTable$', function () {
return this.tbl_summary;
});

Clazz.newMeth(C$, 'reset$', function () {
this.lbl_loading.setVisible$Z(false);
this.errorWarning.setLength$I(0);
this.lbl_warning.setVisible$Z(false);
this.lbl_blank.setVisible$Z(true);
this.btn_ok.setEnabled$Z(false);
this.mainFrame.setTitle$S(this.getFTSFrameTitle$());
this.refresh$();
this.tbl_summary.setModel$javax_swing_table_TableModel(Clazz.new_($I$(38)));
this.tbl_summary.setVisible$Z(false);
});

Clazz.newMeth(C$, 'setPrevPageButtonEnabled$Z', function (isEnabled) {
this.btn_prev_page.setEnabled$Z(isEnabled);
});

Clazz.newMeth(C$, 'setNextPageButtonEnabled$Z', function (isEnabled) {
this.btn_next_page.setEnabled$Z(isEnabled);
});

Clazz.newMeth(C$, 'setErrorMessage$S', function (message) {
this.errorWarning.append$S(message);
});

Clazz.newMeth(C$, 'updateSearchFrameTitle$S', function (title) {
this.mainFrame.setTitle$S(title);
});

Clazz.newMeth(C$, 'setSearchInProgress$Boolean', function (isSearchInProgress) {
this.lbl_blank.setVisible$Z(!(isSearchInProgress).booleanValue$());
this.lbl_loading.setVisible$Z((isSearchInProgress).booleanValue$());
this.txt_search.setEditable$Z(!(isSearchInProgress).booleanValue$());
});

Clazz.newMeth(C$, 'prevPageAction$', function () {
this.updatePaginatorCart$();
if (this.offSet >= this.pageLimit) {
this.offSet=this.offSet - this.pageLimit;
this.searchAction$Z(false);
} else {
this.refreshPaginatorState$();
}});

Clazz.newMeth(C$, 'nextPageAction$', function () {
this.updatePaginatorCart$();
this.offSet=this.offSet + this.pageLimit;
this.searchAction$Z(false);
});

Clazz.newMeth(C$, 'updatePaginatorCart$', function () {
var primaryKeyColIndex=0;
var resultTable=this.getResultTable$();
var totalRows=resultTable.getRowCount$();
try {
primaryKeyColIndex=this.getFTSRestClient$().getPrimaryKeyColumIndex$java_util_Collection$Z(this.wantedFields, false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
for (var row=0; row < totalRows; row++) {
var id=resultTable.getValueAt$I$I(row, primaryKeyColIndex);
if (this.paginatorCart.contains$O(id)) {
this.paginatorCart.remove$O(id);
}}
var selectedRows=resultTable.getSelectedRows$();
for (var summaryRow, $summaryRow = 0, $$summaryRow = selectedRows; $summaryRow<$$summaryRow.length&&((summaryRow=($$summaryRow[$summaryRow])),1);$summaryRow++) {
var idStr=resultTable.getValueAt$I$I(summaryRow, primaryKeyColIndex).toString();
this.paginatorCart.add$TE(idStr);
}
});

Clazz.newMeth(C$, 'updateSummaryTableSelections$', function () {
var resultTable=this.getResultTable$();
if (this.paginatorCart.isEmpty$()) {
return;
}var primaryKeyColIndex=0;
try {
primaryKeyColIndex=this.getFTSRestClient$().getPrimaryKeyColumIndex$java_util_Collection$Z(this.wantedFields, false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
var totalRows=resultTable.getRowCount$();
for (var row=0; row < totalRows; row++) {
var id=resultTable.getValueAt$I$I(row, primaryKeyColIndex);
if (this.paginatorCart.contains$O(id)) {
resultTable.addRowSelectionInterval$I$I(row, row);
}}
this.validateSelection$();
});

Clazz.newMeth(C$, 'refreshPaginatorState$', function () {
this.setPrevPageButtonEnabled$Z(false);
this.setNextPageButtonEnabled$Z(false);
if (this.resultSetCount == 0 && this.pageLimit == 0 ) {
return;
}if (this.resultSetCount >= this.pageLimit) {
this.setNextPageButtonEnabled$Z(true);
}if (this.offSet >= this.pageLimit) {
this.setPrevPageButtonEnabled$Z(true);
}});

Clazz.newMeth(C$, 'refresh$', function () {
this.mainFrame.setTitle$S(this.getFTSFrameTitle$());
});
;
(function(){var C$=Clazz.newClass(P$.GFTSPanel, "DeferredTextInputListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.DocumentListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.swingTimer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_event_ActionListener$Z', function (timeOut, listener, repeats) {
C$.$init$.apply(this);
this.swingTimer=Clazz.new_($I$(1).c$$I$java_awt_event_ActionListener,[timeOut, listener]);
this.swingTimer.setRepeats$Z(repeats);
}, 1);

Clazz.newMeth(C$, 'start$', function () {
this.swingTimer.start$();
});

Clazz.newMeth(C$, 'stop$', function () {
this.swingTimer.stop$();
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent', function (e) {
this.swingTimer.restart$();
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent', function (e) {
this.swingTimer.restart$();
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent', function (e) {
this.swingTimer.restart$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
