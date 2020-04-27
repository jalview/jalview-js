(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'javajs.util.CU']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Component");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.enabled=true;
this.minWidth=30;
this.minHeight=30;
},1);

C$.$fields$=[['Z',['_visible','enabled'],'I',['width','height','minWidth','minHeight','renderWidth','renderHeight'],'S',['text','name','id'],'O',['parent','java.lang.Object','+mouseListener','bgcolor','javajs.api.GenericColor']]]

Clazz.newMeth(C$, 'setParent$O', function (p) {
this.parent=p;
});

Clazz.newMeth(C$, 'c$$S', function (type) {
;C$.$init$.apply(this);
this.id=C$.newID$S(type);
if (type == null ) return;
{
SwingController.register(this, type);
}
}, 1);

Clazz.newMeth(C$, 'newID$S', function (type) {
return type + ("" + new Double(Math.random()).toString()).substring$I$I(3, 10);
}, 1);

Clazz.newMeth(C$, 'setBackground$javajs_api_GenericColor', function (color) {
this.bgcolor=color;
});

Clazz.newMeth(C$, 'setText$S', function (text) {
this.text=text;
{
SwingController.setText(this);
}
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getParent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'setPreferredSize$org_jmol_awtjs_swing_Dimension', function (dimension) {
this.width=dimension.width;
this.height=dimension.height;
});

Clazz.newMeth(C$, 'addMouseListener$O', function (listener) {
this.mouseListener=listener;
});

Clazz.newMeth(C$, 'getText$', function () {
return this.text;
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return this.enabled;
});

Clazz.newMeth(C$, 'setEnabled$Z', function (enabled) {
this.enabled=enabled;
{
SwingController.setEnabled(this);
}
});

Clazz.newMeth(C$, 'isVisible$', function () {
return this._visible;
});

Clazz.newMeth(C$, 'setVisible$Z', function (visible) {
this._visible=visible;
{
SwingController.setVisible(this);
}
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'setMinimumSize$org_jmol_awtjs_swing_Dimension', function (d) {
this.minWidth=d.width;
this.minHeight=d.height;
});

Clazz.newMeth(C$, 'getSubcomponentWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getSubcomponentHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getCSSstyle$I$I', function (defaultPercentW, defaultPercentH) {
var width=(this.renderWidth > 0 ? this.renderWidth : this.getSubcomponentWidth$());
var height=(this.renderHeight > 0 ? this.renderHeight : this.getSubcomponentHeight$());
return (width > 0 ? "width:" + width + "px;"  : defaultPercentW > 0 ? "width:" + defaultPercentW + "%;"  : "") + (height > 0 ? "height:" + height + "px;"  : defaultPercentH > 0 ? "height:" + defaultPercentH + "%;"  : "") + (this.bgcolor == null  ? "" : "background-color:" + $I$(1).toCSSString$javajs_api_GenericColor(this.bgcolor) + ";" ) ;
});

Clazz.newMeth(C$, 'repaint$', function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
