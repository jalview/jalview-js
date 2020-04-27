(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Point','java.awt.Dimension']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScrollPane", null, 'javax.swing.JScrollPane');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'isAWTContainer$', function () {
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (scrollbars) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
switch (scrollbars) {
case 2:
this.setVerticalScrollBarPolicy$I(21);
this.setHorizontalScrollBarPolicy$I(31);
break;
case 1:
this.setVerticalScrollBarPolicy$I(22);
this.setHorizontalScrollBarPolicy$I(32);
break;
case 0:
break;
}
this.setOpaque$Z(true);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_Component', function (c) {
this.getViewport$().add$java_awt_Component(c);
if (!this.isBackgroundSet$() && c.isBackgroundSet$() ) this.setBackground$java_awt_Color(c.getBackground$());
return c;
});

Clazz.newMeth(C$, 'getVAdjustable$', function () {
return this.getVerticalScrollBar$();
});

Clazz.newMeth(C$, 'getHAdjustable$', function () {
return this.getHorizontalScrollBar$();
});

Clazz.newMeth(C$, 'setScrollPosition$I$I', function (x, y) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
if (this.getComponentCount$() == 0) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["child is null"]);
}this.getHorizontalScrollBar$().setValue$I(x);
this.getVerticalScrollBar$().setValue$I(y);
}});

Clazz.newMeth(C$, 'setScrollPosition$java_awt_Point', function (p) {
this.setScrollPosition$I$I(p.x, p.y);
});

Clazz.newMeth(C$, 'getScrollPosition$', function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
if (this.getComponentCount$() == 0) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["child is null"]);
}return Clazz.new_([this.getHorizontalScrollBar$().getValue$(), this.getVerticalScrollBar$().getValue$()],$I$(1,1).c$$I$I);
}});

Clazz.newMeth(C$, 'getViewportSize$', function () {
var i=this.getInsets$();
return Clazz.new_($I$(2,1).c$$I$I,[this.width - i.right - i.left , this.height - i.top - i.bottom ]);
});

Clazz.newMeth(C$, 'getInsets$', function () {
return this.秘getInsetsC$();
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
