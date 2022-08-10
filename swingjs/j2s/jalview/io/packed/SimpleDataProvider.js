(function(){var P$=Clazz.newPackage("jalview.io.packed"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SimpleDataProvider", null, null, 'jalview.io.packed.DataProvider');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['jvtype','jalview.io.packed.DataProvider.JvDataType','source','jalview.io.FileParse','assocseq','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$jalview_io_packed_DataProvider_JvDataType$jalview_io_FileParse$O',  function (type, fp, assoc) {
;C$.$init$.apply(this);
this.jvtype=type;
this.source=fp;
this.assocseq=assoc;
}, 1);

Clazz.newMeth(C$, 'getDataSource$',  function () {
return this.source;
});

Clazz.newMeth(C$, 'getSequenceTarget$',  function () {
return this.assocseq;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.jvtype;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
