(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[];
var C$=Clazz.newClass(P$, "JSCheckBoxMenuItemUI", null, 'swingjs.plaf.JSCheckBoxUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
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
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
