(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.gui.Desktop','javax.swing.JButton','javax.swing.JToolBar','javax.swing.JLabel','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JSplitPane','javax.swing.JList','javax.swing.DefaultListModel','org.robsite.jswingreader.ui.BlogContentPane','java.util.ArrayList','jalview.bin.Cache','jalview.gui.JalviewDialog','org.robsite.jswingreader.model.ChannelListModel','org.robsite.jswingreader.model.Channel','javax.swing.SwingUtilities','java.awt.Rectangle','javax.swing.JFrame','java.awt.event.ActionEvent','java.awt.event.WindowAdapter','java.awt.Dimension','jalview.util.MessageManager',['java.awt.Dialog','.ModalExclusionType'],'java.text.SimpleDateFormat','javax.swing.JScrollPane','StringBuffer','java.awt.event.MouseAdapter','org.robsite.jswingreader.ui.util.ContextMenuMouseAdapter','jalview.gui.ItemsRenderer',['javax.swing.event.HyperlinkEvent','.EventType'],'org.robsite.jswingreader.ui.ItemReadTimer','javax.swing.JPopupMenu','javax.swing.JMenuItem',['jalview.gui.BlogReader','.LaunchJvBrowserOnItem'],'org.robsite.jswingreader.action.MarkItemAsRead','org.robsite.jswingreader.action.MarkItemAsUnread','org.robsite.jswingreader.action.MarkChannelAsRead','org.robsite.jswingreader.action.MarkChannelAsUnread','org.robsite.jswingreader.model.SimpleRSSParser','java.util.Collections','org.robsite.jswingreader.model.Item','org.robsite.jswingreader.ui.Main','Boolean','javax.swing.ImageIcon','java.text.DateFormat']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ItemsRenderer", null, 'javax.swing.DefaultListCellRenderer');
C$._icon=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$._icon=Clazz.new_($I$(44).c$$java_net_URL,[Clazz.getClass($I$(42)).getResource$S("image/ComposeMail16.gif")]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['getListCellRendererComponent$javax_swing_JList$O$I$Z$Z','getListCellRendererComponent$','getListCellRendererComponent$javax_swing_JList$TE$I$Z$Z'], function (list, value, index, isSelected, cellHasFocus) {
var component=C$.superclazz.prototype.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z.apply(this, [list, value, index, isSelected, cellHasFocus]);
component.setIcon$javax_swing_Icon(C$._icon);
if (Clazz.instanceOf(value, "org.robsite.jswingreader.model.Item")) {
var item=value;
if (item.getPublishDate$() != null ) {
component.setText$S($I$(22).formatMessage$S$SA("label.blog_item_published_on_date", Clazz.array(String, -1, [$I$(45).getDateInstance$I$java_util_Locale(1, $I$(22).getLocale$()).format$java_util_Date(item.getPublishDate$()).toString(), item.getTitle$()])));
}component.setToolTipText$S(item.getLink$());
if (!item.isRead$()) {
component.setFont$java_awt_Font(component.getFont$().deriveFont$I(1));
} else {
component.setFont$java_awt_Font(component.getFont$().deriveFont$I(0));
}}return component;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
