(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={};
var C$=Clazz.newClass(P$, "RangeElementsIterator", null, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.last=0;
this.current=0;
this.next=0;
this.rangeIterator=null;
this.nextRange=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.nextRange=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Iterator', function (it) {
C$.$init$.apply(this);
this.rangeIterator=it;
if (this.rangeIterator.hasNext$()) {
this.nextRange=this.rangeIterator.next$();
this.next=this.nextRange[0];
this.last=this.nextRange[1];
}}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.rangeIterator.hasNext$() || this.next <= this.last ;
});

Clazz.newMeth(C$, 'next$', function () {
if (!this.hasNext$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}this.current=this.next;
this.next++;
p$1.checkNextRange.apply(this, []);
return new Integer(this.current);
});

Clazz.newMeth(C$, 'checkNextRange', function () {
if (this.nextRange != null  && this.next > this.nextRange[1] ) {
if (this.rangeIterator.hasNext$()) {
this.nextRange=this.rangeIterator.next$();
this.next=this.nextRange[0];
this.last=this.nextRange[1];
} else {
this.nextRange=null;
}}}, p$1);

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
