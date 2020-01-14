(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI','javax.swing.UIManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSToggleButtonUI", null, 'swingjs.plaf.JSButtonUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "ToggleButton";
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
if ($I$(1).debugging) System.out.println$S(this.id + " stateChange " + this.dumpEvent$java_util_EventObject(e) );
var model=this.button.getModel$();
this.setBackgroundCUI$java_awt_Color(model.isArmed$() && model.isPressed$()  || model.isSelected$()  ? $I$(2).getColor$O(this.getPropertyPrefix$() + ".highlight") : this.getBackground$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
