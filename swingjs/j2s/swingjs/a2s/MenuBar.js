(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Insets','java.awt.Color','java.util.Vector']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MenuBar", null, 'javax.swing.JMenuBar', 'java.awt.MenuContainer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.helpMenu=null;
},1);

C$.$fields$=[['O',['helpMenu','java.awt.Menu']]
,['O',['awtInsets','java.awt.Insets']]]

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setBackground$java_awt_Color(Clazz.new_($I$(2,1).c$$I,[15658734]));
}, 1);

Clazz.newMeth(C$, 'getInsets$', function () {
return C$.awtInsets;
});

Clazz.newMeth(C$, 'add$java_awt_Menu', function (m) {
C$.superclazz.prototype.add$java_awt_Component.apply(this, [m]);
});

Clazz.newMeth(C$, 'add$java_awt_MenuItem', function (m) {
C$.superclazz.prototype.add$java_awt_Component.apply(this, [m]);
});

Clazz.newMeth(C$, 'deleteShortcut$java_awt_MenuShortcut', function (s) {
var nmenus=this.getMenuCount$();
for (var i=0; i < nmenus; i++) {
(this.getMenu$I(i)).deleteShortcut$java_awt_MenuShortcut(s);
}
});

Clazz.newMeth(C$, 'shortcuts$', function () {
var shortcuts=Clazz.new_($I$(3,1));
var nmenus=this.getMenuCount$();
for (var i=0; i < nmenus; i++) {
var e=(this.getMenu$I(i)).shortcuts$();
while (e.hasMoreElements$()){
shortcuts.addElement$O(e.nextElement$());
}
}
return shortcuts.elements$();
});

Clazz.newMeth(C$, 'getHelpMenu$', function () {
return this.helpMenu;
});

Clazz.newMeth(C$, 'setHelpMenu$java_awt_Menu', function (m) {
if (this.helpMenu === m ) {
return;
}if (this.helpMenu != null ) {
this.remove$java_awt_MenuComponent(this.helpMenu);
}if (m.getParent$() !== this ) {
this.add$java_awt_Menu(m);
}this.helpMenu=m;
if (m != null ) {
m.isHelpMenu=true;
m.parent=this;
}});

Clazz.newMeth(C$, 'remove$java_awt_MenuComponent', function (m) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [m]);
});

Clazz.newMeth(C$, 'countMenus$', function () {
return this.getMenuCount$();
});

C$.$static$=function(){C$.$static$=0;
C$.awtInsets=Clazz.new_($I$(1,1).c$$I$I$I$I,[6, 10, 6, 10]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
