(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[];
var C$=Clazz.newClass(P$, "AbstractButton", null, 'org.jmol.awtjs.swing.JComponent', 'javajs.awt.SC');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.itemListener=null;
this.applet=null;
this.htmlName=null;
this.selected=false;
this.popupMenu=null;
this.icon=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (type) {
C$.superclazz.c$$S.apply(this, [type]);
C$.$init$.apply(this);
this.enabled=true;
}, 1);

Clazz.newMeth(C$, 'setSelected$Z', function (selected) {
this.selected=selected;
{
SwingController.setSelected(this);
}
});

Clazz.newMeth(C$, 'isSelected$', function () {
return this.selected;
});

Clazz.newMeth(C$, 'addItemListener$O', function (listener) {
this.itemListener=listener;
});

Clazz.newMeth(C$, 'getIcon$', function () {
return this.icon;
});

Clazz.newMeth(C$, 'setIcon$O', function (icon) {
this.icon=icon;
});

Clazz.newMeth(C$, 'init$S$O$S$javajs_awt_SC', function (text, icon, actionCommand, popupMenu) {
this.text=text;
this.icon=icon;
this.actionCommand=actionCommand;
this.popupMenu=popupMenu;
{
SwingController.initMenuItem(this);
}
});

Clazz.newMeth(C$, 'getTopPopupMenu$', function () {
return this.popupMenu;
});

Clazz.newMeth(C$, 'add$javajs_awt_SC', function (item) {
this.addComponent$javajs_awt_Component(item);
});

Clazz.newMeth(C$, 'insert$javajs_awt_SC$I', function (subMenu, index) {
this.insertComponent$javajs_awt_Component$I(subMenu, index);
});

Clazz.newMeth(C$, 'getPopupMenu$', function () {
return null;
});

Clazz.newMeth(C$, 'getMenuHTML$', function () {
var label=(this.icon != null  ? this.icon : this.text != null  ? this.text : null);
var s=(label == null  ? "" : "<li><a>" + label + "</a>" + this.htmlMenuOpener$S("ul") );
var n=this.getComponentCount$();
if (n > 0) for (var i=0; i < n; i++) s += this.getComponent$I(i).toHTML$();

if (label != null ) s += "</ul></li>";
return s;
});

Clazz.newMeth(C$, 'htmlMenuOpener$S', function (type) {
return "<" + type + " id=\"" + this.id + "\"" + (this.enabled ? "" : this.getHtmlDisabled$()) + ">" ;
});

Clazz.newMeth(C$, 'getHtmlDisabled$', function () {
return " disabled=\"disabled\"";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
