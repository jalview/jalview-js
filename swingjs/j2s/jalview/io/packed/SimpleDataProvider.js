(function(){var P$=Clazz.newPackage("jalview.io.packed"),I$=[];
var C$=Clazz.newClass(P$, "SimpleDataProvider", null, null, 'jalview.io.packed.DataProvider');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.jvtype=null;
this.source=null;
this.assocseq=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_packed_DataProvider_JvDataType$jalview_io_FileParse$O', function (type, fp, assoc) {
C$.$init$.apply(this);
this.jvtype=type;
this.source=fp;
this.assocseq=assoc;
}, 1);

Clazz.newMeth(C$, 'getDataSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'getSequenceTarget$', function () {
return this.assocseq;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.jvtype;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
