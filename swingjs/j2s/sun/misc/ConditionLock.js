(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ConditionLock", null, 'sun.misc.Lock');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.state=0;
},1);

C$.$fields$=[['I',['state']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialState) {
Clazz.super_(C$, this);
this.state=initialState;
}, 1);

Clazz.newMeth(C$, 'lockWhen$I', function (desiredState) {
while (this.state != desiredState){
this.wait$();
}
this.lock$();
});

Clazz.newMeth(C$, 'unlockWith$I', function (newState) {
this.state=newState;
this.unlock$();
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:38 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
