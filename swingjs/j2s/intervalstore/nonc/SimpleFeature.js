(function(){var P$=Clazz.newPackage("intervalstore.nonc"),I$=[];
var C$=Clazz.newClass(P$, "SimpleFeature", null, null, 'intervalstore.api.IntervalI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.begin=0;
this.end=0;
this.description=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$S', function (from, to, desc) {
C$.$init$.apply(this);
this.begin=from;
this.end=to;
this.description=desc;
}, 1);

Clazz.newMeth(C$, 'c$$intervalstore_nonc_SimpleFeature', function (sf1) {
C$.c$$I$I$S.apply(this, [sf1.begin, sf1.end, sf1.description]);
}, 1);

Clazz.newMeth(C$, 'getBegin$', function () {
return this.begin;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.begin + 37 * this.end + (this.description == null  ? 0 : this.description.hashCode$());
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj != null  && Clazz.instanceOf(obj, "intervalstore.nonc.SimpleFeature") ) {
var o=obj;
if (this.begin == o.begin && this.end == o.end ) {
if (this.description == null ) {
return o.description == null ;
}return this.description.equals$O(o.description);
}}return false;
});

Clazz.newMeth(C$, 'toString', function () {
return this.begin + ":" + this.end + ":" + this.description ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-09-10 16:07:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
