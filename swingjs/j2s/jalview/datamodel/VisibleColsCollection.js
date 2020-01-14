(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "VisibleColsCollection", null, null, 'jalview.api.AlignmentColsCollectionI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.start=0;
this.end=0;
this.hidden=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$jalview_datamodel_HiddenColumns', function (s, e, h) {
C$.$init$.apply(this);
this.start=s;
this.end=e;
this.hidden=h;
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return this.hidden.getVisibleColsIterator$I$I(this.start, this.end);
});

Clazz.newMeth(C$, 'isHidden$I', function (c) {
return false;
});

Clazz.newMeth(C$, 'hasHidden$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
