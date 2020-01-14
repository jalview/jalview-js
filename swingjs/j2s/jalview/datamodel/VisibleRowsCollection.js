(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.datamodel.VisibleRowsIterator']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VisibleRowsCollection", null, null, 'jalview.api.AlignmentRowsCollectionI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.start=0;
this.end=0;
this.alignment=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$jalview_datamodel_AlignmentI', function (s, e, al) {
C$.$init$.apply(this);
this.start=s;
this.end=e;
this.alignment=al;
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(1).c$$I$I$jalview_datamodel_AlignmentI,[this.start, this.end, this.alignment]);
});

Clazz.newMeth(C$, 'isHidden$I', function (seq) {
return false;
});

Clazz.newMeth(C$, 'getSequence$I', function (seq) {
return this.alignment.getSequenceAtAbsoluteIndex$I(seq);
});

Clazz.newMeth(C$, 'hasHidden$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
