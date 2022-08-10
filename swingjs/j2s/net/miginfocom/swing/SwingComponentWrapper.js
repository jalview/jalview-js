(function(){var P$=Clazz.newPackage("net.miginfocom.swing"),p$1={},I$=[[0,'java.awt.Color','net.miginfocom.layout.PlatformDefaults','java.util.IdentityHashMap','java.awt.Font',['java.awt.geom.Point2D','.Float'],'java.awt.Point','javax.swing.SwingUtilities','net.miginfocom.swing.SwingContainerWrapper','Boolean','java.awt.BasicStroke']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SwingComponentWrapper", null, null, 'net.miginfocom.layout.ComponentWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.compType=-1;
this.bl=null;
this.prefCalled=false;
},1);

C$.$fields$=[['Z',['prefCalled'],'I',['compType'],'O',['c','java.awt.Component','bl','Boolean']]
,['Z',['maxSet','vp','isJava9orLater'],'S',['VISUAL_PADDING_PROPERTY'],'O',['DB_COMP_OUTLINE','java.awt.Color','FM_MAP','java.util.IdentityHashMap','SUBST_FONT','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$java_awt_Component', function (c) {
;C$.$init$.apply(this);
this.c=c;
}, 1);

Clazz.newMeth(C$, 'getBaseline$I$I', function (width, height) {
var h=height;
var visPad=this.getVisualPadding$();
if (h < 0) {
h=this.c.getHeight$();
} else if (visPad != null ) {
h=height + visPad[0] + visPad[2] ;
}var baseLine=this.c.getBaseline$I$I(width < 0 ? this.c.getWidth$() : width, h);
if (baseLine != -1 && visPad != null  ) baseLine-=visPad[0];
return baseLine;
});

Clazz.newMeth(C$, 'getComponent$', function () {
return this.c;
});

Clazz.newMeth(C$, 'getPixelUnitFactor$Z', function (isHor) {
switch ($I$(2).getLogicalPixelBase$()) {
case 100:
var font=this.c.getFont$();
var fm=this.c.getFontMetrics$java_awt_Font(font != null  ? font : C$.SUBST_FONT);
var p=C$.FM_MAP.get$O(fm);
if (p == null ) {
var r=fm.getStringBounds$S$java_awt_Graphics("X", this.c.getGraphics$());
p=Clazz.new_([(r.getWidth$()) / 6.0, (r.getHeight$()) / 13.277344],$I$(5,1).c$$F$F);
C$.FM_MAP.put$O$O(fm, p);
}return isHor ? p.x : p.y;
case 101:
var s=isHor ? $I$(2).getHorizontalScaleFactor$() : $I$(2).getVerticalScaleFactor$();
var scaleFactor=(s != null ) ? (s).valueOf() : 1.0;
var screenScale=C$.isJava9orLater ? 1.0 : (isHor ? this.getHorizontalScreenDPI$() : this.getVerticalScreenDPI$()) / $I$(2).getDefaultDPI$();
return scaleFactor * screenScale;
default:
return 1.0;
}
});

Clazz.newMeth(C$, 'getX$', function () {
return this.c.getX$();
});

Clazz.newMeth(C$, 'getY$', function () {
return this.c.getY$();
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.c.getHeight$();
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.c.getWidth$();
});

Clazz.newMeth(C$, 'getScreenLocationX$', function () {
var p=Clazz.new_($I$(6,1));
$I$(7).convertPointToScreen$java_awt_Point$java_awt_Component(p, this.c);
return p.x;
});

Clazz.newMeth(C$, 'getScreenLocationY$', function () {
var p=Clazz.new_($I$(6,1));
$I$(7).convertPointToScreen$java_awt_Point$java_awt_Component(p, this.c);
return p.y;
});

Clazz.newMeth(C$, 'getMinimumHeight$I', function (sz) {
if (this.prefCalled == false ) {
this.c.getPreferredSize$();
this.prefCalled=true;
}return this.c.getMinimumSize$().height;
});

Clazz.newMeth(C$, 'getMinimumWidth$I', function (sz) {
if (this.prefCalled == false ) {
this.c.getPreferredSize$();
this.prefCalled=true;
}return this.c.getMinimumSize$().width;
});

Clazz.newMeth(C$, 'getPreferredHeight$I', function (sz) {
if (this.c.getWidth$() == 0 && this.c.getHeight$() == 0  && sz != -1 ) this.c.setBounds$I$I$I$I(this.c.getX$(), this.c.getY$(), sz, 1);
return this.c.getPreferredSize$().height;
});

Clazz.newMeth(C$, 'getPreferredWidth$I', function (sz) {
if (this.c.getWidth$() == 0 && this.c.getHeight$() == 0  && sz != -1 ) this.c.setBounds$I$I$I$I(this.c.getX$(), this.c.getY$(), 1, sz);
return this.c.getPreferredSize$().width;
});

Clazz.newMeth(C$, 'getMaximumHeight$I', function (sz) {
if (!p$1.isMaxSet$java_awt_Component.apply(this, [this.c])) return 2147483647;
return this.c.getMaximumSize$().height;
});

Clazz.newMeth(C$, 'getMaximumWidth$I', function (sz) {
if (!p$1.isMaxSet$java_awt_Component.apply(this, [this.c])) return 2147483647;
return this.c.getMaximumSize$().width;
});

Clazz.newMeth(C$, 'isMaxSet$java_awt_Component', function (c) {
return c.isMaximumSizeSet$();
}, p$1);

Clazz.newMeth(C$, 'getParent$', function () {
var p=this.c.getParent$();
return p != null  ? Clazz.new_($I$(8,1).c$$java_awt_Container,[p]) : null;
});

Clazz.newMeth(C$, 'getHorizontalScreenDPI$', function () {
try {
return this.c.getToolkit$().getScreenResolution$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.HeadlessException")){
return $I$(2).getDefaultDPI$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getVerticalScreenDPI$', function () {
try {
return this.c.getToolkit$().getScreenResolution$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.HeadlessException")){
return $I$(2).getDefaultDPI$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getScreenWidth$', function () {
try {
return this.c.getToolkit$().getScreenSize$().width;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.HeadlessException")){
return 1024;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getScreenHeight$', function () {
try {
return this.c.getToolkit$().getScreenSize$().height;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.HeadlessException")){
return 768;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'hasBaseline$', function () {
if (this.bl == null ) {
try {
this.bl=new Boolean(this.getBaseline$I$I(8192, 8192) > -1);
} catch (ex) {
this.bl=$I$(9).FALSE;
}
}return (this.bl).valueOf();
});

Clazz.newMeth(C$, 'getLinkId$', function () {
return this.c.getName$();
});

Clazz.newMeth(C$, 'setBounds$I$I$I$I', function (x, y, width, height) {
this.c.setBounds$I$I$I$I(x, y, width, height);
});

Clazz.newMeth(C$, 'isVisible$', function () {
return this.c.isVisible$();
});

Clazz.newMeth(C$, 'getVisualPadding$', function () {
var padding=null;
if (C$.isVisualPaddingEnabled$()) {
if (Clazz.instanceOf(this.c, "javax.swing.JComponent")) {
var component=this.c;
var padValue=component.getClientProperty$O(C$.VISUAL_PADDING_PROPERTY);
if (Clazz.instanceOf(padValue, Clazz.array(Integer.TYPE, -1))) {
padding=padValue;
} else if (Clazz.instanceOf(padValue, "java.awt.Insets")) {
var padInsets=padValue;
padding=Clazz.array(Integer.TYPE, -1, [padInsets.top, padInsets.left, padInsets.bottom, padInsets.right]);
}if (padding == null ) {
var classID;
switch (this.getComponentType$Z(false)) {
case 5:
var border=component.getBorder$();
if (border != null  && border.getClass$().getName$().startsWith$S("com.apple.laf.AquaButtonBorder") ) {
if ($I$(2).getPlatform$() == 1) {
var buttonType=component.getClientProperty$O("JButton.buttonType");
if (buttonType == null ) {
classID=component.getHeight$() < 33 ? "Button" : "Button.bevel";
} else {
classID="Button." + buttonType;
}if ((component).getIcon$() != null ) classID += ".icon";
} else {
classID="Button";
}} else {
classID="";
}break;
case 16:
border=component.getBorder$();
if (border != null  && border.getClass$().getName$().startsWith$S("com.apple.laf.AquaButtonBorder") ) {
var size=component.getClientProperty$O("JComponent.sizeVariant");
if (size != null  && size.toString().equals$O("regular") == false  ) {
size="." + size;
} else {
size="";
}if (Clazz.instanceOf(component, "javax.swing.JRadioButton")) {
classID="RadioButton" + size;
} else if (Clazz.instanceOf(component, "javax.swing.JCheckBox")) {
classID="CheckBox" + size;
} else {
classID="ToggleButton" + size;
}} else {
classID="";
}break;
case 11:
if ($I$(2).getPlatform$() == 1) {
if ((component).isEditable$()) {
var isSquare=component.getClientProperty$O("JComboBox.isSquare");
if (isSquare != null  && isSquare.toString().equals$O("true") ) {
classID="ComboBox.editable.isSquare";
} else {
classID="ComboBox.editable";
}} else {
var isSquare=component.getClientProperty$O("JComboBox.isSquare");
var isPopDown=component.getClientProperty$O("JComboBox.isPopDown");
if (isSquare != null  && isSquare.toString().equals$O("true") ) {
classID="ComboBox.isSquare";
} else if (isPopDown != null  && isPopDown.toString().equals$O("true") ) {
classID="ComboBox.isPopDown";
} else {
classID="ComboBox";
}}} else {
classID="ComboBox";
}break;
case 1:
classID="Container";
break;
case 9:
classID="Image";
break;
case 2:
classID="Label";
break;
case 6:
classID="List";
break;
case 10:
classID="Panel";
break;
case 14:
classID="ProgressBar";
break;
case 17:
classID="ScrollBar";
break;
case 8:
classID="ScrollPane";
break;
case 18:
classID="Separator";
break;
case 12:
classID="Slider";
break;
case 13:
classID="Spinner";
break;
case 7:
classID="Table";
break;
case 19:
classID="TabbedPane";
break;
case 4:
classID="TextArea";
break;
case 3:
border=component.getBorder$();
if (!component.isOpaque$() && border != null   && border.getClass$().getSimpleName$().equals$O("AquaTextFieldBorder") ) {
classID="TextField";
} else {
classID="";
}break;
case 15:
classID="Tree";
break;
case 0:
classID="Other";
break;
case -1:
default:
classID="";
break;
}
padValue=$I$(2).getDefaultVisualPadding$S(classID + "." + C$.VISUAL_PADDING_PROPERTY );
if (Clazz.instanceOf(padValue, Clazz.array(Integer.TYPE, -1))) {
padding=padValue;
} else if (Clazz.instanceOf(padValue, "java.awt.Insets")) {
var padInsets=padValue;
padding=Clazz.array(Integer.TYPE, -1, [padInsets.top, padInsets.left, padInsets.bottom, padInsets.right]);
}}}}return padding;
});

Clazz.newMeth(C$, 'isMaxSizeSetOn1_4$', function () {
return C$.maxSet;
}, 1);

Clazz.newMeth(C$, 'setMaxSizeSetOn1_4$Z', function (b) {
C$.maxSet=b;
}, 1);

Clazz.newMeth(C$, 'isVisualPaddingEnabled$', function () {
return C$.vp;
}, 1);

Clazz.newMeth(C$, 'setVisualPaddingEnabled$Z', function (b) {
C$.vp=b;
}, 1);

Clazz.newMeth(C$, 'paintDebugOutline$Z', function (showVisualPadding) {
if (this.c.isShowing$() == false ) return;
var g=this.c.getGraphics$();
if (g == null ) return;
g.setPaint$java_awt_Paint(C$.DB_COMP_OUTLINE);
g.setStroke$java_awt_Stroke(Clazz.new_([1.0, 2, 0, 10.0, Clazz.array(Float.TYPE, -1, [2.0, 4.0]), 0],$I$(10,1).c$$F$I$I$F$FA$F));
g.drawRect$I$I$I$I(0, 0, this.getWidth$() - 1, this.getHeight$() - 1);
if (showVisualPadding && C$.isVisualPaddingEnabled$() ) {
var padding=this.getVisualPadding$();
if (padding != null ) {
g.setColor$java_awt_Color($I$(1).GREEN);
g.drawRect$I$I$I$I(padding[1], padding[0], (this.getWidth$() - 1) - (padding[1] + padding[3]), (this.getHeight$() - 1) - (padding[0] + padding[2]));
}}});

Clazz.newMeth(C$, 'getComponentType$Z', function (disregardScrollPane) {
if (this.compType == -1) this.compType=p$1.checkType$Z.apply(this, [disregardScrollPane]);
return this.compType;
});

Clazz.newMeth(C$, 'getLayoutHashCode$', function () {
var d=this.c.getMaximumSize$();
var hash=d.width + (d.height << 5);
d=this.c.getPreferredSize$();
hash+=(d.width << 10) + (d.height << 15);
d=this.c.getMinimumSize$();
hash+=(d.width << 20) + (d.height << 25);
if (this.c.isVisible$()) hash+=1324511;
var id=this.getLinkId$();
if (id != null ) hash+=id.hashCode$();
return hash;
});

Clazz.newMeth(C$, 'checkType$Z', function (disregardScrollPane) {
var c=this.c;
if (disregardScrollPane) {
if (Clazz.instanceOf(c, "javax.swing.JScrollPane")) {
c=(c).getViewport$().getView$();
} else if (Clazz.instanceOf(c, "java.awt.ScrollPane")) {
c=(c).getComponent$I(0);
}}if (Clazz.instanceOf(c, "javax.swing.JTextField") || Clazz.instanceOf(c, "java.awt.TextField") ) {
return 3;
} else if (Clazz.instanceOf(c, "javax.swing.JLabel") || Clazz.instanceOf(c, "java.awt.Label") ) {
return 2;
} else if (Clazz.instanceOf(c, "javax.swing.JCheckBox") || Clazz.instanceOf(c, "javax.swing.JRadioButton") || Clazz.instanceOf(c, "java.awt.Checkbox")  ) {
return 16;
} else if (Clazz.instanceOf(c, "javax.swing.AbstractButton") || Clazz.instanceOf(c, "java.awt.Button") ) {
return 5;
} else if (Clazz.instanceOf(c, "javax.swing.JComboBox") || Clazz.instanceOf(c, "java.awt.Choice") ) {
return 11;
} else if (Clazz.instanceOf(c, "javax.swing.text.JTextComponent") || Clazz.instanceOf(c, "java.awt.TextComponent") ) {
return 4;
} else if (Clazz.instanceOf(c, "javax.swing.JPanel") || Clazz.instanceOf(c, "java.awt.Canvas") ) {
return 10;
} else if (Clazz.instanceOf(c, "javax.swing.JList") || Clazz.instanceOf(c, "java.awt.List") ) {
return 6;
} else if (Clazz.instanceOf(c, "javax.swing.JTable")) {
return 7;
} else if (Clazz.instanceOf(c, "javax.swing.JSeparator")) {
return 18;
} else if (Clazz.instanceOf(c, "javax.swing.JSpinner")) {
return 13;
} else if (Clazz.instanceOf(c, "javax.swing.JTabbedPane")) {
return 19;
} else if (Clazz.instanceOf(c, "javax.swing.JProgressBar")) {
return 14;
} else if (Clazz.instanceOf(c, "javax.swing.JSlider")) {
return 12;
} else if (Clazz.instanceOf(c, "javax.swing.JScrollPane")) {
return 8;
} else if (Clazz.instanceOf(c, "javax.swing.JScrollBar") || Clazz.instanceOf(c, "java.awt.Scrollbar") ) {
return 17;
} else if (Clazz.instanceOf(c, "java.awt.Container")) {
return 1;
}return 0;
}, p$1);

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getComponent$().hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (Clazz.instanceOf(o, "net.miginfocom.layout.ComponentWrapper") == false ) return false;
return this.c.equals$O((o).getComponent$());
});

Clazz.newMeth(C$, 'getContentBias$', function () {
return Clazz.instanceOf(this.c, "javax.swing.JTextArea") || Clazz.instanceOf(this.c, "javax.swing.JEditorPane") || (Clazz.instanceOf(this.c, "javax.swing.JComponent") && $I$(9).TRUE.equals$O((this.c).getClientProperty$O("migLayout.dynamicAspectRatio")) )   ? 0 : -1;
});

C$.$static$=function(){C$.$static$=0;
C$.maxSet=false;
C$.vp=true;
C$.DB_COMP_OUTLINE=Clazz.new_($I$(1,1).c$$I$I$I,[0, 0, 200]);
C$.VISUAL_PADDING_PROPERTY=$I$(2).VISUAL_PADDING_PROPERTY;
C$.FM_MAP=Clazz.new_($I$(3,1).c$$I,[4]);
C$.SUBST_FONT=Clazz.new_($I$(4,1).c$$S$I$I,["sansserif", 0, 11]);
C$.isJava9orLater=true;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:27 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
