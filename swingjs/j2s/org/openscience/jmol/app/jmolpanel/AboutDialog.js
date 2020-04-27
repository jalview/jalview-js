(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),I$=[[0,'org.jmol.i18n.GT','java.awt.Dimension','javax.swing.JScrollPane','javax.swing.JEditorPane','javajs.util.PT','org.openscience.jmol.app.jmolpanel.GuiMap','org.openscience.jmol.app.jmolpanel.JmolResourceHandler','javax.swing.JPanel','java.awt.BorderLayout',['javax.swing.event.HyperlinkEvent','.EventType']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AboutDialog", null, 'javax.swing.JDialog', 'javax.swing.event.HyperlinkListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['vwr','org.jmol.api.JmolViewer']]]

Clazz.newMeth(C$, 'c$$javax_swing_JFrame$org_jmol_api_JmolViewer', function (fr, vwr) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[fr, $I$(1).$$S("About Jmol"), true]);C$.$init$.apply(this);
this.vwr=vwr;
var scroller=((P$.AboutDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AboutDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JScrollPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return Clazz.new_($I$(2,1).c$$I$I,[750, 650]);
});

Clazz.newMeth(C$, 'getAlignmentX$', function () {
return 0.0;
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.AboutDialog$1));
var html=Clazz.new_($I$(4,1));
html.setContentType$S("text/html");
html.setText$S((function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([this, this.getClass$().getClassLoader$().getResource$S($I$(7).getStringX$S("About.aboutURL")).getPath$()],$I$(6).getResourceString$O$S), "SPLASH", "" + this.getClass$().getResource$S("about.jpg")],$I$(5).rep$S$S$S));
html.setEditable$Z(false);
html.addHyperlinkListener$javax_swing_event_HyperlinkListener(this);
scroller.getViewport$().add$java_awt_Component(html);
var htmlWrapper=Clazz.new_([Clazz.new_($I$(9,1))],$I$(8,1).c$$java_awt_LayoutManager);
htmlWrapper.setAlignmentX$F(0.0);
htmlWrapper.add$java_awt_Component$O(scroller, "Center");
var container=Clazz.new_($I$(8,1));
container.setLayout$java_awt_LayoutManager(Clazz.new_($I$(9,1)));
container.add$java_awt_Component$O(htmlWrapper, "Center");
this.getContentPane$().add$java_awt_Component(container);
this.pack$();
var screenSize=this.getToolkit$().getScreenSize$();
var size=this.getSize$();
this.setLocation$I$I((screenSize.width/2|0) - (size.width/2|0), (screenSize.height/2|0) - (size.height/2|0));
}, 1);

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent', function (e) {
if (e.getEventType$() === $I$(10).ACTIVATED ) {
this.linkActivated$java_net_URL(e.getURL$());
}});

Clazz.newMeth(C$, 'linkActivated$java_net_URL', function (url) {
this.vwr.showUrl$S(url.toString());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
