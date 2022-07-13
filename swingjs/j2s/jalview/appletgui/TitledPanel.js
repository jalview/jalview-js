(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Insets']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TitledPanel", null, 'java.awt.Panel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.insets=Clazz.new_($I$(1,1).c$$I$I$I$I,[10, 10, 10, 10]);
},1);

C$.$fields$=[['S',['title'],'O',['insets','java.awt.Insets']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, [""]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
Clazz.super_(C$, this);
this.setTitle$S(title);
}, 1);

Clazz.newMeth(C$, 'getInsets$',  function () {
return this.insets;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
g.setColor$java_awt_Color(this.getForeground$());
g.drawRect$I$I$I$I(5, 5, this.getWidth$() - 10, this.getHeight$() - 10);
var width=g.getFontMetrics$().stringWidth$S(this.getTitle$());
g.setColor$java_awt_Color(this.getBackground$());
g.fillRect$I$I$I$I(10, 0, width, 10);
g.setColor$java_awt_Color(this.getForeground$());
g.drawString$S$I$I(this.getTitle$(), 10, 10);
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
this.title=title;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:28 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
