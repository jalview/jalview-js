(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ReverseListIterator", null, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['iterator','java.util.ListIterator']]]

Clazz.newMeth(C$, 'c$$java_util_List',  function (stuff) {
;C$.$init$.apply(this);
this.iterator=stuff.listIterator$I(stuff.size$());
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.iterator.hasPrevious$();
});

Clazz.newMeth(C$, 'next$',  function () {
return this.iterator.previous$();
});

Clazz.newMeth(C$, 'remove$',  function () {
this.iterator.remove$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
