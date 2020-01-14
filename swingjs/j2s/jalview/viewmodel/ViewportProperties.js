(function(){var P$=Clazz.newPackage("jalview.viewmodel"),I$=[[0,'java.beans.PropertyChangeSupport']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ViewportProperties");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.changeSupport=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.changeSupport=Clazz.new_($I$(1).c$$O,[this]);
}, 1);

Clazz.newMeth(C$, 'addPropertyChangeListener$jalview_viewmodel_ViewportListenerI', function (listener) {
this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$jalview_viewmodel_ViewportListenerI', function (listener) {
this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
