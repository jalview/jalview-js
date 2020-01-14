(function(){var P$=Clazz.newPackage("javajs.awt"),I$=[[0,'javajs.util.CU']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Component");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._visible=false;
this.enabled=false;
this.text=null;
this.name=null;
this.width=0;
this.height=0;
this.id=null;
this.parent=null;
this.mouseListener=null;
this.bgcolor=null;
this.minWidth=0;
this.minHeight=0;
this.renderWidth=0;
this.renderHeight=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.enabled=true;
this.minWidth=30;
this.minHeight=30;
}, 1);

Clazz.newMeth(C$, 'setParent$O', function (p) {
this.parent=p;
});

Clazz.newMeth(C$, 'c$$S', function (type) {
C$.$init$.apply(this);
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

Clazz.newMeth(C$, 'setPreferredSize$java_awt_Dimension', function (dimension) {
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

Clazz.newMeth(C$, 'setMinimumSize$java_awt_Dimension', function (d) {
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
;Clazz.setTVer('3.2.4.07');//Created 2019-03-05 22:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
