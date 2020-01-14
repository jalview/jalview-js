(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[[0,'javax.swing.SwingUtilities']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SwingPropertyChangeSupport", null, 'java.beans.PropertyChangeSupport');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.notifyOnEDT=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O', function (sourceBean) {
C$.c$$O$Z.apply(this, [sourceBean, false]);
}, 1);

Clazz.newMeth(C$, 'c$$O$Z', function (sourceBean, notifyOnEDT) {
C$.superclazz.c$$O.apply(this, [sourceBean]);
C$.$init$.apply(this);
this.notifyOnEDT=notifyOnEDT;
}, 1);

Clazz.newMeth(C$, 'firePropertyChange$java_beans_PropertyChangeEvent', function (evt) {
if (evt == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (!this.isNotifyOnEDT$() || $I$(1).isEventDispatchThread$() ) {
C$.superclazz.prototype.firePropertyChange$java_beans_PropertyChangeEvent.apply(this, [evt]);
} else {
$I$(1).invokeLater$Runnable(((P$.SwingPropertyChangeSupport$1||
(function(){var C$=Clazz.newClass(P$, "SwingPropertyChangeSupport$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['javax.swing.event.SwingPropertyChangeSupport'].firePropertyChange$java_beans_PropertyChangeEvent.apply(this.b$['javax.swing.event.SwingPropertyChangeSupport'], [this.$finals$.evt]);
});
})()
), Clazz.new_(P$.SwingPropertyChangeSupport$1.$init$, [this, {evt: evt}])));
}});

Clazz.newMeth(C$, 'isNotifyOnEDT$', function () {
return this.notifyOnEDT;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
