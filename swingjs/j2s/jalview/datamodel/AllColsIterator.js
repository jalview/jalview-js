(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AllColsIterator", null, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['last','next','current']]]

Clazz.newMeth(C$, 'c$$I$I$jalview_datamodel_HiddenColumns', function (firstcol, lastcol, hiddenCols) {
;C$.$init$.apply(this);
this.last=lastcol;
this.next=firstcol;
this.current=firstcol;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.next <= this.last;
});

Clazz.newMeth(C$, 'next$', function () {
if (this.next > this.last) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}this.current=this.next;
this.next++;
return new Integer(this.current);
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
