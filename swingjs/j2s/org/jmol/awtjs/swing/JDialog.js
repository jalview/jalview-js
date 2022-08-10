(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),p$1={},I$=[[0,'org.jmol.awtjs.swing.JContentPane','org.jmol.awtjs.swing.Color','javajs.util.SB']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JDialog", null, 'org.jmol.awtjs.swing.Container');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultWidth=600;
this.defaultHeight=300;
this.zIndex=9000;
},1);

C$.$fields$=[['I',['defaultWidth','defaultHeight','zIndex'],'S',['title','html'],'O',['contentPane','org.jmol.awtjs.swing.JContentPane','loc','int[]']]]

Clazz.newMeth(C$, 'setZIndex$I', function (zIndex) {
this.zIndex=zIndex;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["JD"]);C$.$init$.apply(this);
this.add$org_jmol_awtjs_swing_Component(this.contentPane=Clazz.new_($I$(1,1)));
this.setBackground$javajs_api_GenericColor($I$(2).get3$I$I$I(210, 210, 240));
this.contentPane.setBackground$javajs_api_GenericColor($I$(2).get3$I$I$I(230, 230, 230));
}, 1);

Clazz.newMeth(C$, 'setLocation$IA', function (loc) {
this.loc=loc;
});

Clazz.newMeth(C$, 'getContentPane$', function () {
return this.contentPane;
});

Clazz.newMeth(C$, 'setTitle$S', function (title) {
this.title=title;
});

Clazz.newMeth(C$, 'pack$', function () {
this.html=null;
});

Clazz.newMeth(C$, 'validate$', function () {
this.html=null;
});

Clazz.newMeth(C$, 'setVisible$Z', function (tf) {
if (tf && this.html == null  ) p$1.setDialog.apply(this, []);
C$.superclazz.prototype.setVisible$Z.apply(this, [tf]);
if (tf) this.toFront$();
});

Clazz.newMeth(C$, 'dispose$', function () {
{
{
SwingController.dispose(this);
}
}});

Clazz.newMeth(C$, 'repaint$', function () {
p$1.setDialog.apply(this, []);
});

Clazz.newMeth(C$, 'setDialog', function () {
this.html=this.toHTML$();
{
SwingController.setDialog(this);
}
}, p$1);

Clazz.newMeth(C$, 'toHTML$', function () {
this.renderWidth=Math.max(this.width, this.getSubcomponentWidth$());
if (this.renderWidth == 0) this.renderWidth=this.defaultWidth;
this.renderHeight=Math.max(this.height, this.contentPane.getSubcomponentHeight$());
if (this.renderHeight == 0) this.renderHeight=this.defaultHeight;
var h=this.renderHeight - 25;
var sb=Clazz.new_($I$(3,1));
sb.append$S("\n<div id='" + this.id + "' class='JDialog' style='" + this.getCSSstyle$I$I(0, 0) + "z-index:" + this.zIndex + ";position:relative;top:0px;left:0px;reize:both;'>\n" );
sb.append$S("\n<div id='" + this.id + "_title' class='JDialogTitle' style='width:100%;height:25px;padding:5px 5px 5px 5px;height:" + 25 + "px'>" + "<span style='text-align:center;'>" + this.title + "</span><span style='position:absolute;text-align:right;right:1px;'>" + "<input type=button id='" + this.id + "_closer' onclick='SwingController.windowClosing(this)' value='x' /></span></div>\n" );
sb.append$S("\n<div id='" + this.id + "_body' class='JDialogBody' style='width:100%;height:" + h + "px;" + "position: relative;left:0px;top:0px'>\n" );
sb.append$S(this.contentPane.toHTML$());
sb.append$S("\n</div></div>\n");
return sb.toString();
});

Clazz.newMeth(C$, 'toFront$', function () {
{
SwingController.setFront(this);
}
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
