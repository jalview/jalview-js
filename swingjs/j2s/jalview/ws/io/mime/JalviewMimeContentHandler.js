(function(){var P$=Clazz.newPackage("jalview.ws.io.mime"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewMimeContentHandler", null, null, 'org.apache.james.mime4j.parser.ContentHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dataItems=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['S',['currentType','currentName'],'O',['context','jalview.io.packed.JalviewDataset','dataItems','java.util.List']]]

Clazz.newMeth(C$, 'c$$jalview_io_packed_JalviewDataset', function (ds) {
;C$.$init$.apply(this);
this.context=ds;
}, 1);

Clazz.newMeth(C$, 'body$org_apache_james_mime4j_descriptor_BodyDescriptor$java_io_InputStream', function (arg0, arg1) {
});

Clazz.newMeth(C$, 'endBodyPart$', function () {
});

Clazz.newMeth(C$, 'endHeader$', function () {
});

Clazz.newMeth(C$, 'endMessage$', function () {
});

Clazz.newMeth(C$, 'endMultipart$', function () {
});

Clazz.newMeth(C$, 'epilogue$java_io_InputStream', function (arg0) {
});

Clazz.newMeth(C$, 'field$org_apache_james_mime4j_parser_Field', function (arg0) {
});

Clazz.newMeth(C$, 'preamble$java_io_InputStream', function (arg0) {
});

Clazz.newMeth(C$, 'raw$java_io_InputStream', function (arg0) {
});

Clazz.newMeth(C$, 'startBodyPart$', function () {
});

Clazz.newMeth(C$, 'startHeader$', function () {
});

Clazz.newMeth(C$, 'startMessage$', function () {
});

Clazz.newMeth(C$, 'startMultipart$org_apache_james_mime4j_descriptor_BodyDescriptor', function (arg0) {
});

Clazz.newMeth(C$, 'getJalviewDataProviders$', function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
