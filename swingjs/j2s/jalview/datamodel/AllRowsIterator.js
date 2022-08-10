(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AllRowsIterator", null, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['last','next','current'],'O',['al','jalview.datamodel.AlignmentI']]]

Clazz.newMeth(C$, 'c$$I$I$jalview_datamodel_AlignmentI',  function (firstrow, lastrow, alignment) {
;C$.$init$.apply(this);
this.last=lastrow;
this.current=firstrow;
this.next=firstrow;
this.al=alignment;
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.next <= this.last;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.next > this.last) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}this.current=this.next;
++this.next;
return Integer.valueOf$I(this.current);
});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
