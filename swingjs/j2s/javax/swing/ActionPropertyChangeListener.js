(function(){var P$=Clazz.newPackage("javax.swing"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "ActionPropertyChangeListener", null, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['action','javax.swing.Action']]]

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$javax_swing_Action', function (c, a) {
;C$.$init$.apply(this);
p$1.setTarget$javax_swing_JComponent.apply(this, [c]);
this.action=a;
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (e) {
var target=this.getTarget$();
if (target == null ) {
this.getAction$().removePropertyChangeListener$java_beans_PropertyChangeListener(this);
} else {
this.actionPropertyChanged$javax_swing_JComponent$javax_swing_Action$java_beans_PropertyChangeEvent(target, this.getAction$(), e);
}});

Clazz.newMeth(C$, 'setTarget$javax_swing_JComponent', function (c) {
}, p$1);

Clazz.newMeth(C$, 'getTarget$', function () {
return null;
});

Clazz.newMeth(C$, 'getAction$', function () {
return this.action;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
