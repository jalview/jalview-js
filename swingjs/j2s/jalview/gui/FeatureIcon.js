(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.util.MessageManager','jalview.schemes.FeatureColour','jalview.datamodel.features.FeatureMatcherSet','jalview.gui.FeatureSettings','javax.swing.BorderFactory','javax.swing.JButton','jalview.gui.JalviewColourChooser','jalview.gui.FeatureTypeSettings','jalview.util.Platform','javax.swing.JLabel','javax.swing.JScrollPane','javax.swing.JSlider','java.util.HashMap','jalview.viewmodel.styles.ViewStyle','jalview.gui.JvSwingUtils','java.awt.Point','javax.swing.JTable','java.awt.Font','javax.swing.ToolTipManager',['jalview.gui.FeatureSettings','.ColorEditor'],['jalview.gui.FeatureSettings','.ColorRenderer'],['jalview.gui.FeatureSettings','.FilterEditor'],['jalview.gui.FeatureSettings','.FilterRenderer'],'javax.swing.table.TableColumn','java.awt.event.MouseAdapter','java.awt.event.MouseMotionAdapter','javax.swing.JInternalFrame','jalview.gui.Desktop','java.awt.Dimension','javax.swing.event.InternalFrameAdapter','javax.swing.JLayeredPane','javax.swing.JPopupMenu','javax.swing.JMenuItem','java.util.Arrays','jalview.gui.JvOptionPane','java.util.HashSet','javax.swing.JCheckBox','java.util.Hashtable',['jalview.gui.FeatureSettings','.FeatureTableModel'],'java.awt.GridLayout','jalview.util.QuickSort','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView','java.io.InputStreamReader','java.io.FileInputStream','javax.xml.bind.JAXBContext','javax.xml.stream.XMLInputFactory','jalview.xml.binding.jalview.JalviewUserColours','jalview.project.Jalview2XML','java.io.PrintWriter','java.io.OutputStreamWriter','java.io.FileOutputStream',['jalview.xml.binding.jalview.JalviewUserColours','.Filter'],'jalview.xml.binding.jalview.ObjectFactory',['jalview.viewmodel.seqfeatures.FeatureRendererModel','.FeatureSettingsBean'],'java.awt.BorderLayout','javax.swing.JPanel','jalview.gui.Help',['jalview.gui.Help','.HelpId'],'java.util.Locale','java.awt.FlowLayout','StringBuilder','jalview.datamodel.features.FeatureMatcher','jalview.gui.FeatureIcon','java.awt.Color']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureIcon", null, null, 'javax.swing.Icon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.midspace=false;
this.width=50;
this.height=20;
this.mpcolour=$I$(65).white;
},1);

C$.$fields$=[['Z',['midspace'],'I',['width','height','s1','e1'],'O',['gcol','jalview.api.FeatureColourI','backg','java.awt.Color','+mpcolour']]]

Clazz.newMeth(C$, 'c$$jalview_api_FeatureColourI$java_awt_Color$I$I$Z',  function (gfc, bg, w, h, mspace) {
;C$.$init$.apply(this);
this.gcol=gfc;
this.backg=bg;
this.width=w;
this.height=h;
this.midspace=mspace;
if (this.midspace) {
this.s1=(this.width/3|0);
this.e1=this.s1 * 2;
} else {
this.s1=(this.width/2|0);
this.e1=this.s1;
}}, 1);

Clazz.newMeth(C$, 'getIconWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getIconHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'paintIcon$java_awt_Component$java_awt_Graphics$I$I',  function (c, g, x, y) {
if (this.gcol.isColourByLabel$()) {
g.setColor$java_awt_Color(this.backg);
g.fillRect$I$I$I$I(0, 0, this.width, this.height);
g.setColor$java_awt_Color(this.gcol.getMaxColour$());
g.setFont$java_awt_Font(Clazz.new_($I$(18,1).c$$S$I$I,["Verdana", 0, 9]));
g.drawString$S$I$I($I$(1).getString$S("label.label"), 0, 0);
} else {
var minCol=this.gcol.getMinColour$();
g.setColor$java_awt_Color(minCol);
g.fillRect$I$I$I$I(0, 0, this.s1, this.height);
if (this.midspace) {
g.setColor$java_awt_Color($I$(65).white);
g.fillRect$I$I$I$I(this.s1, 0, this.e1 - this.s1, this.height);
}g.setColor$java_awt_Color(this.gcol.getMaxColour$());
g.fillRect$I$I$I$I(this.e1, 0, this.width - this.e1, this.height);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:34 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
