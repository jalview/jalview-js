(function(){var P$=java.util,I$=[[0,'java.util.Vector']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Observable");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.changed=false;
this.obs=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.changed=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.obs=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'addObserver$java_util_Observer', function (o) {
if (o == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (!this.obs.contains$O(o)) {
this.obs.addElement$TE(o);
}});

Clazz.newMeth(C$, 'deleteObserver$java_util_Observer', function (o) {
this.obs.removeElement$O(o);
});

Clazz.newMeth(C$, 'notifyObservers$', function () {
this.notifyObservers$O(null);
});

Clazz.newMeth(C$, 'notifyObservers$O', function (arg) {
var arrLocal;
{
if (!this.changed) return;
arrLocal=this.obs.toArray$();
this.clearChanged$();
}for (var i=arrLocal.length - 1; i >= 0; i--) (arrLocal[i]).update$(this, arg);

});

Clazz.newMeth(C$, 'deleteObservers$', function () {
this.obs.removeAllElements$();
});

Clazz.newMeth(C$, 'setChanged$', function () {
this.changed=true;
});

Clazz.newMeth(C$, 'clearChanged$', function () {
this.changed=false;
});

Clazz.newMeth(C$, 'hasChanged$', function () {
return this.changed;
});

Clazz.newMeth(C$, 'countObservers$', function () {
return this.obs.size$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
