(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'java.awt.Insets','javax.swing.LookAndFeel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSToolTipUI", null, 'swingjs.plaf.JSLabelUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.toolTip=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.allowTextAlignment=false;
}, 1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
var prop=e.getPropertyName$();
if (prop == "component") {
return;
}C$.superclazz.prototype.propertyChangedCUI$java_beans_PropertyChangeEvent$S.apply(this, [e, prop]);
});

Clazz.newMeth(C$, 'getIconAndText$', function () {
this.icon=null;
this.iconNode=null;
this.gap=0;
this.text=this.toolTip.getTipText$();
});

Clazz.newMeth(C$, 'getInsets$', function () {
return Clazz.new_($I$(1).c$$I$I$I$I,[2, 2, 2, 2]);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.toolTip=jc;
$I$(2).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, "ToolTip.background", "ToolTip.foreground", "Tooltip.font");
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
System.out.println$S("Uninstalling ToolTipUI");
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
