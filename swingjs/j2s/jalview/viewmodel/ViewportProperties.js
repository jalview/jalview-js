(function(){var P$=Clazz.newPackage("jalview.viewmodel"),I$=[[0,'java.beans.PropertyChangeSupport']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ViewportProperties");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.changeSupport=Clazz.new_($I$(1,1).c$$O,[this]);
},1);

C$.$fields$=[['O',['changeSupport','java.beans.PropertyChangeSupport']]]

Clazz.newMeth(C$, 'addPropertyChangeListener$jalview_viewmodel_ViewportListenerI',  function (listener) {
this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$jalview_viewmodel_ViewportListenerI',  function (listener) {
this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
