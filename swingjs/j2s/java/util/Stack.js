(function(){var P$=java.util;
var C$=Clazz.newClass(P$, "Stack", null, 'java.util.Vector');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, ['push$TE'], function (item) {
this.addElement$TE(item);
return item;
});

Clazz.newMeth(C$, 'pop$', function () {
var obj;
var len=this.size$();
obj=this.peek$();
this.removeElementAt$I(len - 1);
return obj;
});

Clazz.newMeth(C$, 'peek$', function () {
var len=this.size$();
if (len == 0) throw Clazz.new_(Clazz.load('java.util.EmptyStackException'));
return this.elementAt$I(len - 1);
});

Clazz.newMeth(C$, 'empty$', function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'search$O', function (o) {
var i=this.lastIndexOf$O(o);
if (i >= 0) {
return this.size$() - i;
}return -1;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:49 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
