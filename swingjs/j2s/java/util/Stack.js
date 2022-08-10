(function(){var P$=java.util;
/*c*/var C$=Clazz.newClass(P$, "Stack", null, 'java.util.Vector');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'push$O',  function (item) {
this.addElement$O(item);
return item;
});

Clazz.newMeth(C$, 'pop$',  function () {
var obj;
var len=this.size$();
obj=this.peek$();
this.removeElementAt$I(len - 1);
return obj;
});

Clazz.newMeth(C$, 'peek$',  function () {
var len=this.size$();
if (len == 0) throw Clazz.new_(Clazz.load('java.util.EmptyStackException'));
return this.elementAt$I(len - 1);
});

Clazz.newMeth(C$, 'empty$',  function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'search$O',  function (o) {
var i=this.lastIndexOf$O(o);
if (i >= 0) {
return this.size$() - i;
}return -1;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:15 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
