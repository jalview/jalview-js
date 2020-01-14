(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[];
var C$=Clazz.newClass(P$, "SequencePojo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.seq=null;
this.name=null;
this.type=null;
this.id=null;
this.order=0;
this.start=0;
this.end=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$S$S$S', function (start, end, id, name, seq) {
C$.$init$.apply(this);
this.id=id;
this.name=name;
this.seq=seq;
}, 1);

Clazz.newMeth(C$, 'getSeq$', function () {
return this.seq;
});

Clazz.newMeth(C$, 'setSeq$S', function (seq) {
this.seq=seq;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (id) {
this.id=id;
});

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$I', function (start) {
this.start=start;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$I', function (end) {
this.end=end;
});

Clazz.newMeth(C$, 'getOrder$', function () {
return this.order;
});

Clazz.newMeth(C$, 'setOrder$I', function (order) {
this.order=order;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (type) {
this.type=type;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
