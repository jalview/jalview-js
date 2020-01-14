(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "AllColsIterator", null, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.last=0;
this.next=0;
this.current=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$jalview_datamodel_HiddenColumns', function (firstcol, lastcol, hiddenCols) {
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
