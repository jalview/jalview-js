(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'java.awt.Insets','swingjs.plaf.JSComponentUI']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSPopupUI", null, 'swingjs.plaf.JSWindowUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasBeenVisible'],'O',['isToolTip','Boolean']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.isPopup=true;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.hasBeenVisible=false;
}return C$.superclazz.prototype.updateDOMNode$.apply(this, []);
});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (b && !this.hasBeenVisible && p$1.isToolTip.apply(this, [])  ) {
this.$$O("body > .swingjs-tooltip").remove();
this.$$O(this.outerNode).addClass("swingjs-tooltip");
this.jc.setOpaque$Z(true);
this.setZ$I(2147483647);
}this.hasBeenVisible=true;
});

Clazz.newMeth(C$, 'toFront$', function () {
if (p$1.isToolTip.apply(this, [])) {
this.setZ$I(2147483647);
} else {
C$.superclazz.prototype.toFront$.apply(this, []);
}});

Clazz.newMeth(C$, 'isToolTip', function () {
if (this.isToolTip == null ) this.isToolTip=new Boolean((Clazz.instanceOf((this.window).getRootPane$().getContentPane$().getComponent$I(0), "javax.swing.JToolTip")));
return (this.isToolTip).valueOf();
}, p$1);

Clazz.newMeth(C$, 'getInsets$', function () {
return (p$1.isToolTip.apply(this, []) ? Clazz.new_($I$(1,1).c$$I$I$I$I,[5, 5, 5, 5]) : $I$(2).zeroInsets);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 08:17:08 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
