(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Font','java.util.HashMap','jalview.util.Platform','java.awt.Panel','java.awt.FlowLayout','java.awt.Color','java.awt.Label','java.awt.PopupMenu']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EmbmenuFrame", null, 'java.awt.Frame', ['java.awt.event.MouseListener', 'AutoCloseable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.embeddedPopup=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['embeddedPopup','java.util.Map','embeddedMenu','java.awt.Panel']]
,['O',['FONT_ARIAL_PLAIN_11','java.awt.Font','+DEFAULT_MENU_FONT']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
;C$.superclazz.c$$S.apply(this,[title]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'embedMenuIfNeeded$java_awt_Panel',  function (tobeAdjusted) {
var topMenuBar=this.getMenuBar$();
if (topMenuBar == null ) {
return false;
}if ($I$(3).isAMacAndNotJS$()) {
this.embeddedMenu=this.makeEmbeddedPopupMenu$java_awt_MenuBar$Z$Z(topMenuBar, true, false);
this.setMenuBar$java_awt_MenuBar(null);
this.add$java_awt_Component$O(this.embeddedMenu, "North");
tobeAdjusted.setSize$I$I(this.getSize$().width, this.getSize$().height - this.embeddedMenu.getHeight$());
return true;
}return false;
});

Clazz.newMeth(C$, 'makeEmbeddedPopupMenu$java_awt_MenuBar$Z$Z',  function (menuBar, overrideFonts, append) {
if (!append) {
this.embeddedPopup.clear$();
if (this.embeddedMenu != null ) {
this.embeddedMenu.removeAll$();
}}this.embeddedMenu=this.makeEmbeddedPopupMenu$java_awt_MenuBar$java_awt_Font$Z$java_awt_Panel$java_awt_event_MouseListener(menuBar, C$.DEFAULT_MENU_FONT, overrideFonts, Clazz.new_($I$(4,1)), this);
return this.embeddedMenu;
});

Clazz.newMeth(C$, 'makeEmbeddedPopupMenu$java_awt_MenuBar$java_awt_Font$Z$java_awt_Panel$java_awt_event_MouseListener',  function (menuBar, font, overrideFonts, embeddedMenu, clickHandler) {
if (overrideFonts) {
var mbf=menuBar.getFont$();
if (mbf != null ) {
font=mbf;
}}if (embeddedMenu == null ) {
embeddedMenu=Clazz.new_($I$(4,1));
}var flowLayout1=Clazz.new_($I$(5,1));
embeddedMenu.setBackground$java_awt_Color($I$(6).lightGray);
embeddedMenu.setLayout$java_awt_LayoutManager(flowLayout1);
for (var mbi=0, nMbi=menuBar.getMenuCount$(); mbi < nMbi; mbi++) {
var mi=menuBar.getMenu$I(mbi);
var elab=Clazz.new_([mi.getLabel$()],$I$(7,1).c$$S);
elab.setFont$java_awt_Font(font);
var popup=Clazz.new_($I$(8,1));
var m;
var mSize=mi.getItemCount$();
for (m=0; m < mSize; m++) {
popup.add$java_awt_MenuItem(mi.getItem$I(m));
--mSize;
--m;
}
this.embeddedPopup.put$O$O(elab, popup);
embeddedMenu.add$java_awt_Component(elab);
elab.addMouseListener$java_awt_event_MouseListener(clickHandler);
}
flowLayout1.setAlignment$I(0);
flowLayout1.setHgap$I(2);
flowLayout1.setVgap$I(0);
return embeddedMenu;
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
var popup=null;
var source=evt.getSource$();
popup=this.getPopupMenu$java_awt_Label(source);
if (popup != null ) {
this.embeddedMenu.add$java_awt_PopupMenu(popup);
popup.show$java_awt_Component$I$I(this.embeddedMenu, source.getBounds$().x, source.getBounds$().y + source.getBounds$().getSize$().height);
}});

Clazz.newMeth(C$, 'getPopupMenu$java_awt_Label',  function (source) {
return this.embeddedPopup.get$O(source);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'destroyMenus$',  function () {
if (this.embeddedPopup != null ) {
for (var lb, $lb = this.embeddedPopup.keySet$().iterator$(); $lb.hasNext$()&&((lb=($lb.next$())),1);) {
lb.removeMouseListener$java_awt_event_MouseListener(this);
}
this.embeddedPopup.clear$();
}if (this.embeddedMenu != null ) {
this.embeddedMenu.removeAll$();
}});

Clazz.newMeth(C$, 'close$',  function () {
this.destroyMenus$();
this.embeddedPopup=null;
this.embeddedMenu=null;
});

C$.$static$=function(){C$.$static$=0;
C$.FONT_ARIAL_PLAIN_11=Clazz.new_($I$(1,1).c$$S$I$I,["Arial", 0, 11]);
C$.DEFAULT_MENU_FONT=C$.FONT_ARIAL_PLAIN_11;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:27 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
