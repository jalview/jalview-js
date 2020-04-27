(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.beans.PropertyChangeSupport']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewChangeSupport", null, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.changeSupport=Clazz.new_($I$(1,1).c$$O,[this]);
},1);

C$.$fields$=[['O',['changeSupport','java.beans.PropertyChangeSupport']]]

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (evt) {
this.changeSupport.firePropertyChange$java_beans_PropertyChangeEvent(evt);
});

Clazz.newMeth(C$, 'addJalviewPropertyChangeListener$S$java_beans_PropertyChangeListener', function (propertyName, listener) {
this.changeSupport.addPropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
});

Clazz.newMeth(C$, 'addJalviewPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removeJalviewPropertyChangeListener$S$java_beans_PropertyChangeListener', function (propertyName, listener) {
this.changeSupport.removePropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
