(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSRadioButtonMenuItemUI", null, 'swingjs.plaf.JSRadioButtonUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.isMenuItem=true;
this.allowPaintedBackground=false;
this.actionItemOffset=-8;
}, 1);

Clazz.newMeth(C$, 'getPropertyPrefix$',  function () {
return "RadioButtonMenuItem";
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
this.menuItem=jc;
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
});

Clazz.newMeth(C$, 'isFocusable$',  function () {
return false;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
