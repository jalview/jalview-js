(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.gui.Desktop','javax.swing.JButton','javax.swing.JToolBar','javax.swing.JLabel','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JSplitPane','javax.swing.JList','javax.swing.DefaultListModel','org.robsite.jswingreader.ui.BlogContentPane','java.util.ArrayList','jalview.bin.Cache','jalview.gui.JalviewDialog','org.robsite.jswingreader.model.ChannelListModel','org.robsite.jswingreader.model.Channel','javax.swing.SwingUtilities','java.awt.Rectangle','javax.swing.JFrame','java.awt.event.ActionEvent','java.awt.event.WindowAdapter','java.awt.Dimension','jalview.util.MessageManager',['java.awt.Dialog','.ModalExclusionType'],'java.text.SimpleDateFormat','javax.swing.JScrollPane','StringBuffer','java.awt.event.MouseAdapter','org.robsite.jswingreader.ui.util.ContextMenuMouseAdapter','jalview.gui.ItemsRenderer',['javax.swing.event.HyperlinkEvent','.EventType'],'org.robsite.jswingreader.ui.ItemReadTimer','javax.swing.JPopupMenu','javax.swing.JMenuItem',['jalview.gui.BlogReader','.LaunchJvBrowserOnItem'],'org.robsite.jswingreader.action.MarkItemAsRead','org.robsite.jswingreader.action.MarkItemAsUnread','org.robsite.jswingreader.action.MarkChannelAsRead','org.robsite.jswingreader.action.MarkChannelAsUnread','org.robsite.jswingreader.model.SimpleRSSParser','java.util.Collections','org.robsite.jswingreader.model.Item','org.robsite.jswingreader.ui.Main','Boolean','javax.swing.ImageIcon','java.text.DateFormat']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BlogReader", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['LaunchJvBrowserOnItem',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buttonRefresh=Clazz.new_($I$(2,1));
this.toolBar=Clazz.new_($I$(3,1));
this.statusBar=Clazz.new_($I$(4,1));
this.panelMain=Clazz.new_($I$(5,1));
this.layoutMain=Clazz.new_($I$(6,1));
this.borderLayout1=Clazz.new_($I$(6,1));
this.topPanel=Clazz.new_($I$(5,1));
this.bottomPanel=Clazz.new_($I$(5,1));
this.topBottomSplitPane=Clazz.new_($I$(7,1));
this.listItems=Clazz.new_([Clazz.new_($I$(9,1))],$I$(8,1).c$$javax_swing_ListModel);
this.textDescription=Clazz.new_($I$(10,1));
this.borderLayout4=Clazz.new_($I$(6,1));
this.borderLayout5=Clazz.new_($I$(6,1));
this._channelModel=null;
this.listChannels=Clazz.new_($I$(8,1));
this.exitAction=((P$.BlogReader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BlogReader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.Action', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (arg0) {
if (this.b$['jalview.gui.BlogReader'].xf != null ) {
this.b$['jalview.gui.BlogReader'].xf.dispose$();
}this.b$['jalview.gui.BlogReader'].xf=null;
this.b$['jalview.gui.BlogReader'].jd=null;
if (this.b$['jalview.gui.BlogReader'].$parent != null ) {
this.b$['jalview.gui.BlogReader'].$parent.showNews$Z(false);
}});

Clazz.newMeth(C$, 'setEnabled$Z', function (arg0) {
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (arg0) {
});

Clazz.newMeth(C$, 'putValue$S$O', function (arg0, arg1) {
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return true;
});

Clazz.newMeth(C$, 'getValue$S', function (arg0) {
return null;
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (arg0) {
});
})()
), Clazz.new_(P$.BlogReader$1.$init$,[this, null]));
this.xf=null;
this.jd=null;
this.lblChannels=Clazz.new_($I$(4,1));
this._updatableActions=Clazz.new_($I$(11,1));
this._itemTimer=null;
this._popupItems=null;
this._popupChannels=null;
this.lastm="";
this.newsnew=false;
this.$parent=null;
this.updating=false;
this.lastDate=null;
},1);

C$.$fields$=[['Z',['newsnew','updating'],'S',['lastm'],'O',['buttonRefresh','javax.swing.JButton','toolBar','javax.swing.JToolBar','statusBar','javax.swing.JLabel','panelMain','javax.swing.JPanel','layoutMain','java.awt.BorderLayout','+borderLayout1','topPanel','javax.swing.JPanel','+bottomPanel','topBottomSplitPane','javax.swing.JSplitPane','listItems','javax.swing.JList','textDescription','org.robsite.jswingreader.ui.BlogContentPane','borderLayout4','java.awt.BorderLayout','+borderLayout5','_channelModel','org.robsite.jswingreader.model.ChannelListModel','listChannels','javax.swing.JList','exitAction','javax.swing.Action','xf','javax.swing.JFrame','jd','jalview.gui.JalviewDialog','lblChannels','javax.swing.JLabel','_updatableActions','java.util.List','_itemTimer','org.robsite.jswingreader.ui.ItemReadTimer','_popupItems','javax.swing.JPopupMenu','+_popupChannels','$parent','jalview.gui.Desktop','lastDate','java.util.Date']]]

Clazz.newMeth(C$, 'createDialog', function () {
return this.jd=((P$.BlogReader$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "BlogReader$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('jalview.gui.JalviewDialog'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'raiseClosed$', function () {
if (this.b$['jalview.gui.BlogReader'].$parent != null ) {
$I$(12).log.debug$O("News window closed.");
this.b$['jalview.gui.BlogReader'].jd=null;
this.b$['jalview.gui.BlogReader'].$parent.showNews$Z(false);
}});

Clazz.newMeth(C$, 'okPressed$', function () {
});

Clazz.newMeth(C$, 'cancelPressed$', function () {
});
})()
), Clazz.new_($I$(13,1),[this, null],P$.BlogReader$2));
}, p$1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$jalview_gui_Desktop.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_Desktop', function (desktop) {
Clazz.super_(C$, this);
$I$(12).log.debug$O("Constructing news reader.");
this.$parent=desktop;
this._channelModel=Clazz.new_($I$(14,1));
var chan=Clazz.new_($I$(15,1));
chan.setURL$S($I$(12,"getDefault$S$S",["JALVIEW_NEWS_RSS", $I$(12).getDefault$S$S("www.jalview.org", "http://www.jalview.org") + "/feeds/desktop/rss"]));
p$1.loadLastM.apply(this, []);
this._channelModel.addChannel$org_robsite_jswingreader_model_Channel(chan);
this.updating=true;
try {
p$1.jbInit.apply(this, []);
p$1.postInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
p$1.initItems$org_robsite_jswingreader_model_Channel.apply(this, [chan]);
this.updating=false;
var setvisible=p$1.checkForNew$org_robsite_jswingreader_model_Channel$Z.apply(this, [chan, true]);
if (setvisible) {
$I$(12).log.debug$O("Will show jalview news automatically");
this.showNews$();
}$I$(12).log.debug$O("Completed construction of reader.");
}, 1);

Clazz.newMeth(C$, 'isVisible$', function () {
if (this.$parent == null ) {
return this.xf != null  && this.xf.isVisible$() ;
}return this.jd != null  && this.jd.isVisible$() ;
});

Clazz.newMeth(C$, 'showNews$', function () {
var me=this;
$I$(16,"invokeLater$Runnable",[((P$.BlogReader$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "BlogReader$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var bounds=Clazz.new_($I$(17,1).c$$I$I$I$I,[5, 5, 550, 350]);
if (this.b$['jalview.gui.BlogReader'].$parent == null ) {
this.b$['jalview.gui.BlogReader'].xf=Clazz.new_($I$(18,1));
this.b$['jalview.gui.BlogReader'].xf.setContentPane$java_awt_Container(this.$finals$.me);
this.b$['jalview.gui.BlogReader'].xf.addWindowListener$java_awt_event_WindowListener(((P$.BlogReader$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BlogReader$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
var actionEvent=Clazz.new_([this, 1001, this.b$['jalview.gui.BlogReader'].exitAction.getValue$S("Name")],$I$(19,1).c$$O$I$S);
this.b$['jalview.gui.BlogReader'].exitAction.actionPerformed$java_awt_event_ActionEvent(actionEvent);
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (e) {
});
})()
), Clazz.new_($I$(20,1),[this, null],P$.BlogReader$3$1)));
this.$finals$.me.setSize$java_awt_Dimension(Clazz.new_($I$(21,1).c$$I$I,[550, 350]));
this.b$['jalview.gui.BlogReader'].xf.setVisible$Z(true);
} else {
p$1.createDialog.apply(this.b$['jalview.gui.BlogReader'], []);
bounds=Clazz.new_($I$(17,1).c$$I$I$I$I,[5, 5, 550, 350]);
this.b$['jalview.gui.BlogReader'].jd.initDialogFrame$java_awt_Container$Z$Z$S$I$I(this.$finals$.me, false, false, $I$(22).getString$S("label.news_from_jalview"), bounds.width, bounds.height);
this.b$['jalview.gui.BlogReader'].jd.frame.setModalExclusionType$java_awt_Dialog_ModalExclusionType($I$(23).NO_EXCLUDE);
$I$(12).log.debug$O("Displaying news.");
this.b$['jalview.gui.BlogReader'].jd.waitForInput$();
}});
})()
), Clazz.new_(P$.BlogReader$3.$init$,[this, {me:me}]))]);
});

Clazz.newMeth(C$, 'checkForNew$org_robsite_jswingreader_model_Channel$Z', function (chan, updateItems) {
if (!this.updating || updateItems ) {
this.newsnew=false;
}var earliest=null;
try {
earliest=Clazz.new_($I$(24,1).c$$S,["YYYY-MM-DD"]).parse$S(chan.getHTTPLastModified$());
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
} else {
throw x;
}
}
if (chan != null  && chan.getItems$() != null  ) {
$I$(12).log.debug$O("Scanning news items: newsnew=" + this.newsnew + " and lastDate is " + this.lastDate );
for (var i, $i = chan.getItems$().iterator$(); $i.hasNext$()&&((i=($i.next$())),1);) {
var published=i.getPublishDate$();
var isread=this.lastDate == null  ? false : (published != null  && !this.lastDate.before$java_util_Date(published) );
if (!this.updating || updateItems ) {
this.newsnew|=!isread;
}if (updateItems) {
i.setRead$Z(isread);
}if (published != null  && !i.isRead$() ) {
if (earliest == null  || earliest.after$java_util_Date(published) ) {
earliest=published;
}}}
}if (!updateItems && !this.updating && this.lastDate == null   ) {
this.lastDate=earliest;
}return this.newsnew;
}, p$1);

Clazz.newMeth(C$, 'loadLastM', function () {
this.lastDate=$I$(12).getDateProperty$S("JALVIEW_NEWS_RSS_LASTMODIFIED");
}, p$1);

Clazz.newMeth(C$, 'saveLastM$org_robsite_jswingreader_model_Item', function (item) {
if (item != null ) {
if (item.getPublishDate$() != null ) {
if (this.lastDate == null  || item.getPublishDate$().after$java_util_Date(this.lastDate) ) {
this.lastDate=item.getPublishDate$();
}}if (this._channelModel.getElementAt$I(0) != null ) {
p$1.checkForNew$org_robsite_jswingreader_model_Channel$Z.apply(this, [this._channelModel.getElementAt$I(0), false]);
}if (this.lastDate != null ) {
var formatted=$I$(12).setDateProperty$S$java_util_Date("JALVIEW_NEWS_RSS_LASTMODIFIED", this.lastDate);
$I$(12).log.debug$O("Saved last read date as " + formatted);
}}}, p$1);

Clazz.newMeth(C$, 'jbInit', function () {
this.setLayout$java_awt_LayoutManager(this.layoutMain);
this.panelMain.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.topPanel.setLayout$java_awt_LayoutManager(this.borderLayout5);
this.bottomPanel.setLayout$java_awt_LayoutManager(this.borderLayout4);
this.topBottomSplitPane.setOrientation$I(0);
this.topBottomSplitPane.setDividerLocation$I(100);
this.topBottomSplitPane.setTopComponent$java_awt_Component(this.topPanel);
this.topBottomSplitPane.setBottomComponent$java_awt_Component(this.bottomPanel);
var spTextDescription=Clazz.new_($I$(25,1).c$$java_awt_Component,[this.textDescription]);
this.textDescription.setText$S("");
this.statusBar.setText$S(Clazz.new_($I$(26,1).c$$S,["["]).append$S($I$(22).getString$S("label.status")).append$S("]").toString());
this.buttonRefresh.addActionListener$java_awt_event_ActionListener(((P$.BlogReader$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "BlogReader$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.BlogReader'].refreshNews$.apply(this.b$['jalview.gui.BlogReader'], []);
});
})()
), Clazz.new_(P$.BlogReader$4.$init$,[this, null])));
this.add$java_awt_Component$O(this.statusBar, "South");
this.toolBar.add$java_awt_Component(this.buttonRefresh);
this.toolBar.addSeparator$();
var about=Clazz.new_(["brought to you by JSwingReader (jswingreader.sourceforge.net)"],$I$(4,1).c$$S);
this.toolBar.add$java_awt_Component(about);
this.toolBar.setFloatable$Z(false);
this.add$java_awt_Component$O(this.toolBar, "North");
this.panelMain.add$java_awt_Component$O(this.topBottomSplitPane, "Center");
this.add$java_awt_Component$O(this.panelMain, "Center");
var spListItems=Clazz.new_($I$(25,1).c$$java_awt_Component,[this.listItems]);
this.listItems.setSelectionMode$I(1);
this.topPanel.add$java_awt_Component$O(spListItems, "Center");
this.bottomPanel.add$java_awt_Component$O(spTextDescription, "Center");
this.listChannels.setModel$javax_swing_ListModel(this._channelModel);
this.listItems.addMouseListener$java_awt_event_MouseListener(((P$.BlogReader$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "BlogReader$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
p$1.listItems_mouseClicked$java_awt_event_MouseEvent.apply(this.b$['jalview.gui.BlogReader'], [e]);
});
})()
), Clazz.new_($I$(27,1),[this, null],P$.BlogReader$5)));
this._popupItems=p$1._buildItemsPopupMenu.apply(this, []);
this._popupChannels=p$1._buildChannelsPopupMenu.apply(this, []);
var popupAdapter=Clazz.new_($I$(28,1).c$$javax_swing_JPopupMenu,[this._popupItems]);
var popupChannelsAdapter=Clazz.new_($I$(28,1).c$$javax_swing_JPopupMenu,[this._popupChannels]);
this.listItems.addMouseListener$java_awt_event_MouseListener(popupAdapter);
this.listItems.setCellRenderer$javax_swing_ListCellRenderer(Clazz.new_($I$(29,1)));
this.lblChannels.setText$S($I$(22).getString$S("label.channels"));
}, p$1);

Clazz.newMeth(C$, 'postInit', function () {
for (var hll, $hll = 0, $$hll = this.textDescription.getHyperlinkListeners$(); $hll<$$hll.length&&((hll=($$hll[$hll])),1);$hll++) {
this.textDescription.removeHyperlinkListener$javax_swing_event_HyperlinkListener(hll);
}
this.textDescription.addHyperlinkListener$javax_swing_event_HyperlinkListener(((P$.BlogReader$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "BlogReader$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.HyperlinkListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent', function (e) {
if (e.getEventType$() === $I$(30).ACTIVATED ) {
$I$(1,"showUrl$S",[e.getURL$().toExternalForm$()]);
}});
})()
), Clazz.new_(P$.BlogReader$6.$init$,[this, null])));
this.listItems.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.BlogReader$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "BlogReader$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent', function (e) {
if (e.getValueIsAdjusting$() == false ) {
p$1._itemsValueChanged$javax_swing_JList.apply(this.b$['jalview.gui.BlogReader'], [this.b$['jalview.gui.BlogReader'].listItems]);
}});
})()
), Clazz.new_(P$.BlogReader$7.$init$,[this, null])));
this.listChannels.setSelectedIndex$I(1);
p$1._updateAllActions.apply(this, []);
p$1._updateToolbarButtons.apply(this, []);
this._itemTimer=Clazz.new_($I$(31,1).c$$javax_swing_JList$javax_swing_JList,[this.listChannels, this.listItems]);
p$1._itemsValueChanged$javax_swing_JList.apply(this, [this.listItems]);
}, p$1);

Clazz.newMeth(C$, '_buildItemsPopupMenu', function () {
var popup=Clazz.new_($I$(32,1));
popup.add$javax_swing_JMenuItem(Clazz.new_([Clazz.new_($I$(34,1).c$$javax_swing_JList,[this, null, this.listItems])],$I$(33,1).c$$javax_swing_Action));
popup.addSeparator$();
popup.add$javax_swing_JMenuItem(Clazz.new_([Clazz.new_($I$(35,1).c$$javax_swing_JList,[this.listItems])],$I$(33,1).c$$javax_swing_Action));
popup.add$javax_swing_JMenuItem(Clazz.new_([Clazz.new_($I$(36,1).c$$javax_swing_JList,[this.listItems])],$I$(33,1).c$$javax_swing_Action));
return popup;
}, p$1);

Clazz.newMeth(C$, '_buildChannelsPopupMenu', function () {
var popup=Clazz.new_($I$(32,1));
popup.add$javax_swing_JMenuItem(Clazz.new_([Clazz.new_($I$(37,1).c$$javax_swing_JList$javax_swing_JList,[this.listChannels, this.listItems])],$I$(33,1).c$$javax_swing_Action));
popup.add$javax_swing_JMenuItem(Clazz.new_([Clazz.new_($I$(38,1).c$$javax_swing_JList$javax_swing_JList,[this.listChannels, this.listItems])],$I$(33,1).c$$javax_swing_Action));
return popup;
}, p$1);

Clazz.newMeth(C$, 'initItems$org_robsite_jswingreader_model_Channel', function (channel) {
if (channel == null ) {
channel=Clazz.new_($I$(15,1));
}if (!channel.isOpen$() && channel.getURL$() != null  ) {
try {
$I$(39).parse$org_robsite_jswingreader_model_Channel(channel);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}var itemsModel=this.listItems.getModel$();
itemsModel.clear$();
var iter=(channel.getItems$() != null ) ? channel.getItems$().iterator$() : $I$(40).EMPTY_LIST.iterator$();
while (iter.hasNext$()){
itemsModel.addElement$O(iter.next$());
}
if (itemsModel.getSize$() > 0) {
this.listItems.setSelectedIndex$I(0);
p$1._itemsValueChanged$javax_swing_JList.apply(this, [this.listItems]);
}this.setStatusBarText$S(channel.getURL$());
p$1._updateAllActions.apply(this, []);
}, p$1);

Clazz.newMeth(C$, '_itemsValueChanged$javax_swing_JList', function (itemList) {
var item=itemList.getSelectedValue$();
if (item == null ) {
if (itemList.getModel$().getSize$() > 0) {
item=itemList.getModel$().getElementAt$I(0);
}if (item == null ) {
item=Clazz.new_($I$(41,1));
} else {
itemList.setSelectedIndex$I(0);
}}if (this._itemTimer != null ) {
this._itemTimer.setDelay$I(300);
this._itemTimer.start$();
this._itemTimer.setLastItem$org_robsite_jswingreader_model_Item(item);
var lastitem=item;
this._itemTimer.addActionListener$java_awt_event_ActionListener(((P$.BlogReader$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "BlogReader$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
p$1.saveLastM$org_robsite_jswingreader_model_Item.apply(this.b$['jalview.gui.BlogReader'], [this.$finals$.lastitem]);
});
})()
), Clazz.new_(P$.BlogReader$8.$init$,[this, {lastitem:lastitem}])));
}this.setStatusBarText$S(item.getLink$());
this.textDescription.setBlogText$org_robsite_jswingreader_model_Item(item);
p$1._updateAllActions.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setStatusBarText$S', function (text) {
this.statusBar.setText$S(text);
});

Clazz.newMeth(C$, '_updateAllActions', function () {
var iter=this._updatableActions.iterator$();
while (iter.hasNext$()){
var action=iter.next$();
action.update$O(this);
}
}, p$1);

Clazz.newMeth(C$, '_updateToolbarButtons', function () {
var general=$I$(42).getPreferences$().get$O("general");
if (general == null ) {
return;
}var components=this.toolBar.getComponents$();
for (var i=0; i < components.length; i++) {
var component=components[i];
if (Clazz.instanceOf(component, "javax.swing.JButton")) {
var button=component;
if ($I$(43).toString$Z(false).equals$O(general.get$O("useToolBarText"))) {
button.setText$S("");
}if ($I$(43).toString$Z(true).equals$O(general.get$O("radioTextBelow"))) {
button.setVerticalTextPosition$I(3);
button.setHorizontalTextPosition$I(0);
} else if ($I$(43).toString$Z(true).equals$O(general.get$O("radioTextRight"))) {
button.setVerticalTextPosition$I(0);
button.setHorizontalTextPosition$I(4);
}}}
}, p$1);

Clazz.newMeth(C$, 'listItems_mouseClicked$java_awt_event_MouseEvent', function (e) {
if (e.getClickCount$() == 2 && e.getModifiersEx$() == 0 ) {
var item=this.listItems.getSelectedValue$();
item.setRead$Z(true);
p$1.saveLastM$org_robsite_jswingreader_model_Item.apply(this, [item]);
if (this._itemTimer != null ) {
this._itemTimer.stop$();
}var action=Clazz.new_($I$(34,1).c$$javax_swing_JList,[this, null, this.listItems]);
var event=Clazz.new_($I$(19,1).c$$O$I$S,[this, 1001, "LaunchBrowserOnItem"]);
action.actionPerformed$java_awt_event_ActionEvent(event);
}}, p$1);

Clazz.newMeth(C$, 'refreshNews$', function () {
try {
p$1.initItems$org_robsite_jswingreader_model_Channel.apply(this, [this._channelModel.getElementAt$I(0)]);
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'isNewsNew$', function () {
return this.newsnew;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.BlogReader, "LaunchJvBrowserOnItem", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction', 'org.robsite.jswingreader.action.UpdatableAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._listItems=null;
},1);

C$.$fields$=[['O',['_listItems','javax.swing.JList']]]

Clazz.newMeth(C$, 'c$$javax_swing_JList', function (listItems) {
;C$.superclazz.c$$S.apply(this,["Open in Browser"]);C$.$init$.apply(this);
this.putValue$S$O("MnemonicKey", Integer.valueOf$I(79));
this.putValue$S$O("LongDescription", "Open in Browser");
this._listItems=listItems;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var o=this._listItems.getSelectedValue$();
if (Clazz.instanceOf(o, "org.robsite.jswingreader.model.Item")) {
var item=o;
item.setRead$Z(true);
this._listItems.repaint$();
$I$(1,"showUrl$S",[item.getLink$()]);
}});

Clazz.newMeth(C$, 'update$O', function (o) {
this.setEnabled$Z(true);
if (this._listItems == null  || this._listItems.getModel$().getSize$() == 0 ) {
this.setEnabled$Z(false);
} else if (this._listItems.getSelectedIndex$() == -1) {
this.setEnabled$Z(false);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
