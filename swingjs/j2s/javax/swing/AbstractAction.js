(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'Boolean','javax.swing.ArrayTable','javax.swing.event.SwingPropertyChangeSupport','java.beans.PropertyChangeListener']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractAction", null, null, ['javax.swing.Action', 'Cloneable']);
C$.RECONFIGURE_ON_NULL=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.enabled=false;
this.arrayTable=null;
this.changeSupport=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.enabled=true;
}, 1);

Clazz.newMeth(C$, 'shouldReconfigure$java_beans_PropertyChangeEvent', function (e) {
if (e.getPropertyName$() == null ) {
C$.RECONFIGURE_ON_NULL=new Boolean(false);
}return false;
}, 1);

Clazz.newMeth(C$, 'setEnabledFromAction$javax_swing_JComponent$javax_swing_Action', function (c, a) {
c.setEnabled$Z((a != null ) ? a.isEnabled$() : true);
}, 1);

Clazz.newMeth(C$, 'setToolTipTextFromAction$javax_swing_JComponent$javax_swing_Action', function (c, a) {
c.setToolTipText$S(a != null  ? a.getValue$S("ShortDescription") : null);
}, 1);

Clazz.newMeth(C$, 'hasSelectedKey$javax_swing_Action', function (a) {
return (a != null  && a.getValue$S("SwingSelectedKey") != null  );
}, 1);

Clazz.newMeth(C$, 'isSelected$javax_swing_Action', function (a) {
return $I$(1).TRUE.equals$O(a.getValue$S("SwingSelectedKey"));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.putValue$S$O("Name", name);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon', function (name, icon) {
C$.c$$S.apply(this, [name]);
this.putValue$S$O("SmallIcon", icon);
}, 1);

Clazz.newMeth(C$, 'getValue$S', function (key) {
if (key == "enabled") {
return new Boolean(this.enabled);
}if (this.arrayTable == null ) {
return null;
}return this.arrayTable.get$O(key);
});

Clazz.newMeth(C$, 'putValue$S$O', function (key, newValue) {
var oldValue=null;
if (key == "enabled") {
if (newValue == null  || !(Clazz.instanceOf(newValue, "java.lang.Boolean")) ) {
newValue=new Boolean(false);
}oldValue=new Boolean(this.enabled);
this.enabled=(newValue).booleanValue$();
} else {
if (this.arrayTable == null ) {
this.arrayTable=Clazz.new_($I$(2));
}if (this.arrayTable.containsKey$O(key)) oldValue=this.arrayTable.get$O(key);
if (newValue == null ) {
this.arrayTable.remove$O(key);
} else {
this.arrayTable.put$O$O(key, newValue);
}}this.firePropertyChange$S$O$O(key, oldValue, newValue);
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return this.enabled;
});

Clazz.newMeth(C$, 'setEnabled$Z', function (newValue) {
var oldValue=this.enabled;
if (oldValue != newValue ) {
this.enabled=newValue;
this.firePropertyChange$S$O$O("enabled", $I$(1).valueOf$Z(oldValue), $I$(1).valueOf$Z(newValue));
}});

Clazz.newMeth(C$, 'getKeys$', function () {
if (this.arrayTable == null ) {
return null;
}var keys=Clazz.array(java.lang.Object, [this.arrayTable.size$()]);
this.arrayTable.getKeys$OA(keys);
return keys;
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O', function (propertyName, oldValue, newValue) {
if (this.changeSupport == null  || (oldValue != null  && newValue != null   && oldValue.equals$O(newValue) ) ) {
return;
}this.changeSupport.firePropertyChange$S$O$O(propertyName, oldValue, newValue);
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(3).c$$O,[this]);
}this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
if (this.changeSupport == null ) {
return;
}this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'getPropertyChangeListeners$', function () {
if (this.changeSupport == null ) {
return Clazz.array($I$(4), [0]);
}return this.changeSupport.getPropertyChangeListeners$();
});

Clazz.newMeth(C$, 'clone$', function () {
var newAction=Clazz.clone(this);
{
if (this.arrayTable != null ) {
newAction.arrayTable=this.arrayTable.clone$();
}}return newAction;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
