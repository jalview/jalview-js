(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.gui.Desktop','javax.swing.JButton','javax.swing.JToolBar','javax.swing.JLabel','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JSplitPane','javax.swing.JList','javax.swing.DefaultListModel','org.robsite.jswingreader.ui.BlogContentPane','java.util.ArrayList','jalview.bin.Console','jalview.gui.JalviewDialog','org.robsite.jswingreader.model.ChannelListModel','org.robsite.jswingreader.model.Channel','jalview.bin.Cache','javax.swing.SwingUtilities','java.awt.Rectangle','javax.swing.JFrame','java.awt.event.ActionEvent','java.awt.event.WindowAdapter','java.awt.Dimension','jalview.util.MessageManager',['java.awt.Dialog','.ModalExclusionType'],'java.text.SimpleDateFormat','javax.swing.JScrollPane','StringBuffer','java.awt.event.MouseAdapter','org.robsite.jswingreader.ui.util.ContextMenuMouseAdapter','jalview.gui.ItemsRenderer',['javax.swing.event.HyperlinkEvent','.EventType'],'org.robsite.jswingreader.ui.ItemReadTimer','javax.swing.JPopupMenu','javax.swing.JMenuItem',['jalview.gui.BlogReader','.LaunchJvBrowserOnItem'],'org.robsite.jswingreader.action.MarkItemAsRead','org.robsite.jswingreader.action.MarkItemAsUnread','org.robsite.jswingreader.action.MarkChannelAsRead','org.robsite.jswingreader.action.MarkChannelAsUnread','org.robsite.jswingreader.model.SimpleRSSParser','java.util.Collections','org.robsite.jswingreader.model.Item','org.robsite.jswingreader.ui.Main','javax.swing.ImageIcon','java.text.DateFormat']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ItemsRenderer", null, 'javax.swing.DefaultListCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['_icon','javax.swing.Icon']]]

Clazz.newMeth(C$, 'getListCellRendererComponent$javax_swing_JList$O$I$Z$Z',  function (list, value, index, isSelected, cellHasFocus) {
var component=C$.superclazz.prototype.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z.apply(this, [list, value, index, isSelected, cellHasFocus]);
component.setIcon$javax_swing_Icon(C$._icon);
if (Clazz.instanceOf(value, "org.robsite.jswingreader.model.Item")) {
var item=value;
if (item.getPublishDate$() != null ) {
component.setText$S($I$(23,"formatMessage$S$SA",["label.blog_item_published_on_date", Clazz.array(String, -1, [$I$(45,"getDateInstance$I$java_util_Locale",[1, $I$(23).getLocale$()]).format$java_util_Date(item.getPublishDate$()).toString(), item.getTitle$()])]));
}component.setToolTipText$S(item.getLink$());
if (!item.isRead$()) {
component.setFont$java_awt_Font(component.getFont$().deriveFont$I(1));
} else {
component.setFont$java_awt_Font(component.getFont$().deriveFont$I(0));
}}return component;
});

C$.$static$=function(){C$.$static$=0;
C$._icon=Clazz.new_([Clazz.getClass($I$(43)).getResource$S("image/ComposeMail16.gif")],$I$(44,1).c$$java_net_URL);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:33 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
