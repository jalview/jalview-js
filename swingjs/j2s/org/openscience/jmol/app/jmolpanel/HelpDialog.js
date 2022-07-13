(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),I$=[[0,'javax.swing.SwingUtilities','org.jmol.i18n.GT','org.openscience.jmol.app.jmolpanel.JmolResourceHandler','java.net.URL','javax.swing.JEditorPane','org.jmol.util.Logger','javax.swing.JScrollPane','java.awt.Dimension','javax.swing.JPanel','java.awt.BorderLayout','java.awt.FlowLayout','javax.swing.JButton',['javax.swing.event.HyperlinkEvent','.EventType'],'java.awt.Cursor',['org.openscience.jmol.app.jmolpanel.HelpDialog','.PageLoader']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HelpDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog', 'javax.swing.event.HyperlinkListener');
C$.$classes$=[['PageLoader',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['html','javax.swing.JEditorPane']]]

Clazz.newMeth(C$, 'c$$javax_swing_JFrame', function (fr) {
C$.c$$javax_swing_JFrame$java_net_URL.apply(this, [fr, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JFrame$S$Z', function (fr, title, modal) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[fr, title, modal]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JFrame$java_net_URL', function (fr, url) {
C$.c$$javax_swing_JFrame$S$Z.apply(this, [fr, $I$(2).$$S("Jmol Help"), false]);
this.init$java_net_URL$S(url, "Help.helpURL");
}, 1);

Clazz.newMeth(C$, 'init$java_net_URL$S', function (url, resource) {
try {
var myURL=url;
if (myURL == null ) {
resource=$I$(3).getStringX$S(resource);
myURL=(resource.startsWith$S("http") ? Clazz.new_($I$(4,1).c$$S,[resource]) : this.getClass$().getClassLoader$().getResource$S(resource));
}this.html=(myURL == null  ? Clazz.new_(["text/plain", $I$(2,"o$S$O",[$I$(2).$$S("Unable to find url \"{0}\"."), resource])],$I$(5,1).c$$S$S) : Clazz.new_($I$(5,1).c$$java_net_URL,[myURL]));
this.html.setEditable$Z(false);
this.html.addHyperlinkListener$javax_swing_event_HyperlinkListener(this);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e = e$$;
{
$I$(6).errorEx$S$Throwable("Malformed URL", e);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
$I$(6).errorEx$S$Throwable("IOException", e);
}
} else {
throw e$$;
}
}
var scroller=Clazz.new_($I$(7,1));
scroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[500, 400]));
scroller.setAlignmentX$F(0.0);
scroller.getViewport$().add$java_awt_Component(this.html);
var htmlWrapper=Clazz.new_([Clazz.new_($I$(10,1))],$I$(9,1).c$$java_awt_LayoutManager);
htmlWrapper.setAlignmentX$F(0.0);
htmlWrapper.add$java_awt_Component$O(scroller, "Center");
var buttonPanel=Clazz.new_($I$(9,1));
buttonPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11,1).c$$I,[2]));
var ok=Clazz.new_([$I$(2).$$S("OK")],$I$(12,1).c$$S);
ok.addActionListener$java_awt_event_ActionListener(((P$.HelpDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "HelpDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.HelpDialog'].OKPressed$.apply(this.b$['org.openscience.jmol.app.jmolpanel.HelpDialog'], []);
});
})()
), Clazz.new_(P$.HelpDialog$1.$init$,[this, null])));
buttonPanel.add$java_awt_Component(ok);
this.getRootPane$().setDefaultButton$javax_swing_JButton(ok);
var container=Clazz.new_($I$(9,1));
container.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
container.add$java_awt_Component$O(htmlWrapper, "Center");
container.add$java_awt_Component$O(buttonPanel, "South");
this.getContentPane$().add$java_awt_Component(container);
this.pack$();
this.centerDialog$();
});

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent', function (e) {
if (e.getEventType$() === $I$(13).ACTIVATED ) {
this.linkActivated$java_net_URL(e.getURL$());
}});

Clazz.newMeth(C$, 'linkActivated$java_net_URL', function (u) {
var c=this.html.getCursor$();
var waitCursor=$I$(14).getPredefinedCursor$I(3);
this.html.setCursor$java_awt_Cursor(waitCursor);
$I$(1,"invokeLater$Runnable",[Clazz.new_($I$(15,1).c$$java_net_URL$java_awt_Cursor,[this, null, u, c])]);
});

Clazz.newMeth(C$, 'centerDialog$', function () {
var screenSize=this.getToolkit$().getScreenSize$();
var size=this.getSize$();
screenSize.height=(screenSize.height/2|0);
screenSize.width=(screenSize.width/2|0);
size.height=(size.height/2|0);
size.width=(size.width/2|0);
var y=screenSize.height - size.height;
var x=screenSize.width - size.width;
this.setLocation$I$I(x, y);
});

Clazz.newMeth(C$, 'OKPressed$', function () {
this.setVisible$Z(false);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.HelpDialog, "PageLoader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['url','java.net.URL','cursor','java.awt.Cursor']]]

Clazz.newMeth(C$, 'c$$java_net_URL$java_awt_Cursor', function (u, c) {
;C$.$init$.apply(this);
this.url=u;
this.cursor=c;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (this.url == null ) {
this.b$['org.openscience.jmol.app.jmolpanel.HelpDialog'].html.setCursor$java_awt_Cursor(this.cursor);
var parent=this.b$['org.openscience.jmol.app.jmolpanel.HelpDialog'].html.getParent$();
parent.repaint$();
} else {
var doc=this.b$['org.openscience.jmol.app.jmolpanel.HelpDialog'].html.getDocument$();
try {
this.b$['org.openscience.jmol.app.jmolpanel.HelpDialog'].html.setPage$java_net_URL(this.url);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
this.b$['org.openscience.jmol.app.jmolpanel.HelpDialog'].html.setDocument$javax_swing_text_Document(doc);
this.b$['java.awt.Window'].getToolkit$.apply(this.b$['java.awt.Window'], []).beep$();
} else {
throw ioe;
}
} finally {
this.url=null;
$I$(1).invokeLater$Runnable(this);
}
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
