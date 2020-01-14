(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),I$=[[0,'org.jmol.i18n.GT','java.awt.Dimension','javax.swing.JScrollPane','javax.swing.JEditorPane','javajs.util.PT','org.openscience.jmol.app.jmolpanel.GuiMap','org.openscience.jmol.app.jmolpanel.JmolResourceHandler','javax.swing.JPanel','java.awt.BorderLayout',['javax.swing.event.HyperlinkEvent','.EventType']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AboutDialog", null, 'javax.swing.JDialog', 'javax.swing.event.HyperlinkListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JFrame$org_jmol_api_JmolViewer', function (fr, vwr) {
C$.superclazz.c$$java_awt_Frame$S$Z.apply(this, [fr, $I$(1).$$S("About Jmol"), true]);
C$.$init$.apply(this);
this.vwr=vwr;
var scroller=((P$.AboutDialog$1||
(function(){var C$=Clazz.newClass(P$, "AboutDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JScrollPane'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return Clazz.new_($I$(2).c$$I$I,[750, 650]);
});

Clazz.newMeth(C$, 'getAlignmentX$', function () {
return 0.0;
});
})()
), Clazz.new_($I$(3), [this, null],P$.AboutDialog$1));
var html=Clazz.new_($I$(4));
html.setContentType$S("text/html");
html.setText$S($I$(5).rep$S$S$S($I$(6).getResourceString$O$S(this, this.getClass$().getClassLoader$().getResource$S($I$(7).getStringX$S("About.aboutURL")).getPath$()), "SPLASH", "" + this.getClass$().getResource$S("about.jpg")));
html.setEditable$Z(false);
html.addHyperlinkListener$javax_swing_event_HyperlinkListener(this);
scroller.getViewport$().add$java_awt_Component(html);
var htmlWrapper=Clazz.new_($I$(8).c$$java_awt_LayoutManager,[Clazz.new_($I$(9))]);
htmlWrapper.setAlignmentX$F(0.0);
htmlWrapper.add$java_awt_Component$O(scroller, "Center");
var container=Clazz.new_($I$(8));
container.setLayout$java_awt_LayoutManager(Clazz.new_($I$(9)));
container.add$java_awt_Component$O(htmlWrapper, "Center");
this.getContentPane$().add$java_awt_Component(container);
this.pack$();
var screenSize=this.getToolkit$().getScreenSize$();
var size=this.getSize$();
this.setLocation$I$I((screenSize.width/2|0) - (size.width/2|0), (screenSize.height/2|0) - (size.height/2|0));
}, 1);

Clazz.newMeth(C$, ['hyperlinkUpdate$javax_swing_event_HyperlinkEvent','hyperlinkUpdate$'], function (e) {
if (e.getEventType$() === $I$(10).ACTIVATED ) {
this.linkActivated$java_net_URL(e.getURL$());
}});

Clazz.newMeth(C$, 'linkActivated$java_net_URL', function (url) {
this.vwr.showUrl$S(url.toString());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
