(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.Color','java.awt.Toolkit','java.util.StringTokenizer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Tooltip", null, 'java.awt.Canvas', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastTip="";
this.setPosition=false;
this.VERTICAL_OFFSET=20;
this.HORIZONTAL_ENLARGE=10;
this.fontHeight=0;
},1);

C$.$fields$=[['Z',['setPosition','shown'],'I',['VERTICAL_OFFSET','HORIZONTAL_ENLARGE','fontHeight'],'S',['lastTip'],'O',['tip','String[]','owner','java.awt.Component','mainContainer','java.awt.Container','mainLayout','java.awt.LayoutManager','linkImage','java.awt.Image','fm','java.awt.FontMetrics']]]

Clazz.newMeth(C$, 'c$$S$java_awt_Component', function (tip, owner) {
Clazz.super_(C$, this);
this.owner=owner;
owner.addMouseListener$java_awt_event_MouseListener(this);
owner.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.setBackground$java_awt_Color(Clazz.new_($I$(1,1).c$$I$I$I,[255, 255, 220]));
this.setTip$S(tip);
var url=this.getClass$().getResource$S("/images/link.gif");
if (url != null ) {
this.linkImage=$I$(2).getDefaultToolkit$().getImage$java_net_URL(url);
}}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
var w=this.getSize$().width;
var h=this.getSize$().height;
g.drawRect$I$I$I$I(0, 0, w - 1, h - 1);
var lindex;
var x;
for (var i=0; i < this.tip.length; i++) {
x=3;
lindex=this.tip[i].indexOf$S("%LINK%");
if (lindex != -1) {
if (lindex > 0) {
g.drawString$S$I$I(this.tip[i].substring$I$I(0, lindex), 3, (i + 1) * this.fontHeight - 3);
x+=this.fm.stringWidth$S(this.tip[i].substring$I$I(0, lindex) + 3);
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.linkImage, x, i * this.fontHeight + 1, this);
if (lindex + 6 < this.tip[i].length$()) {
g.drawString$S$I$I(this.tip[i].substring$I(lindex + 6), x + this.linkImage.getWidth$java_awt_image_ImageObserver(this), (i + 1) * this.fontHeight - 3);
}} else {
g.drawString$S$I$I(this.tip[i], 3, (i + 1) * this.fontHeight - 3);
}}
});

Clazz.newMeth(C$, 'setTip$S', function (tip) {
if (tip == null ) {
this.setTip$S("");
return;
}if (this.lastTip.equals$O(tip)) {
return;
}this.lastTip=tip;
this.setPosition=true;
this.fm=this.getFontMetrics$java_awt_Font(this.owner.getFont$());
this.fontHeight=this.fm.getHeight$();
var longestLine=0;
var st=Clazz.new_($I$(3,1).c$$S$S,[tip, "\n"]);
this.tip=Clazz.array(String, [st.countTokens$()]);
var index=0;
while (st.hasMoreElements$()){
this.tip[index]=st.nextToken$();
if (this.fm.stringWidth$S(this.tip[index]) > longestLine) {
longestLine=this.fm.stringWidth$S(this.tip[index]);
}index++;
}
this.setSize$I$I(longestLine + 10, this.fontHeight * this.tip.length);
this.repaint$();
});

Clazz.newMeth(C$, 'setTipLocation$java_awt_event_MouseEvent', function (evt) {
if (this.mainContainer == null  || this.owner == null  ) {
return;
}this.setLocation$I$I((this.owner.getLocationOnScreen$().x - this.mainContainer.getLocationOnScreen$().x) + evt.getX$(), (this.owner.getLocationOnScreen$().y - this.mainContainer.getLocationOnScreen$().y + 20) + evt.getY$());
if (this.mainContainer.getSize$().width < (this.getLocation$().x + this.getSize$().width)) {
this.setLocation$I$I(this.mainContainer.getSize$().width - this.getSize$().width, this.getLocation$().y);
}});

Clazz.newMeth(C$, 'removeToolTip', function () {
if (this.shown) {
this.mainContainer.remove$I(0);
this.mainContainer.setLayout$java_awt_LayoutManager(this.mainLayout);
this.mainContainer.validate$();
}this.shown=false;
}, p$1);

Clazz.newMeth(C$, 'findMainContainer', function () {
var parent=this.owner.getParent$();
while (true){
if ((Clazz.instanceOf(parent, "java.applet.Applet")) || (Clazz.instanceOf(parent, "java.awt.Frame")) ) {
this.mainContainer=parent;
break;
} else {
parent=parent.getParent$();
}}
this.mainLayout=this.mainContainer.getLayout$();
}, p$1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (me) {
this.setTipLocation$java_awt_event_MouseEvent(me);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (me) {
p$1.removeToolTip.apply(this, []);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (me) {
p$1.removeToolTip.apply(this, []);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (me) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (me) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (me) {
if (!this.shown) {
p$1.findMainContainer.apply(this, []);
this.mainContainer.setLayout$java_awt_LayoutManager(null);
this.mainContainer.add$java_awt_Component$I(this, 0);
this.mainContainer.validate$();
this.shown=true;
this.setTipLocation$java_awt_event_MouseEvent(me);
} else if (this.setPosition) {
this.setTipLocation$java_awt_event_MouseEvent(me);
this.setPosition=false;
}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (me) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:46 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
