(function(){var P$=Clazz.newPackage("javax.swing"),p$1={};
var C$=Clazz.newClass(P$, "JSeparator", null, 'javax.swing.JComponent', 'javax.swing.SwingConstants');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.orientation=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.orientation=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (orientation) {
Clazz.super_(C$, this,1);
p$1.checkOrientation$I.apply(this, [orientation]);
this.orientation=orientation;
this.setFocusable$Z(false);
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$', function () {
return "SeparatorUI";
});

Clazz.newMeth(C$, 'getOrientation$', function () {
return this.orientation;
});

Clazz.newMeth(C$, 'setOrientation$I', function (orientation) {
if (this.orientation == orientation) {
return;
}var oldValue=this.orientation;
p$1.checkOrientation$I.apply(this, [orientation]);
this.orientation=orientation;
this.firePropertyChange$S$I$I("orientation", oldValue, orientation);
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'checkOrientation$I', function (orientation) {
switch (orientation) {
case 1:
case 0:
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["orientation must be one of: VERTICAL, HORIZONTAL"]);
}
}, p$1);

Clazz.newMeth(C$, 'paramString$', function () {
var orientationString=(this.orientation == 0 ? "HORIZONTAL" : "VERTICAL");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",orientation=" + orientationString ;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
