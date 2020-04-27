(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSCheckBoxMenuItemUI", null, 'swingjs.plaf.JSCheckBoxUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.isMenuItem=true;
this.actionItemOffset=-7;
}, 1);

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "CheckBoxMenuItem";
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.menuItem=jc;
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
});

Clazz.newMeth(C$, 'isFocusable$', function () {
return false;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 08:17:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
