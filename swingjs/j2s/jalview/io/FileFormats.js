(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.util.LinkedHashMap','java.util.HashSet','jalview.io.FileFormat','java.util.Locale','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileFormats");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['instance','jalview.io.FileFormats','formats','java.util.Map','identifiable','java.util.Set']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
C$.formats=Clazz.new_($I$(1,1));
C$.identifiable=Clazz.new_($I$(2,1));
for (var format, $format = 0, $$format = $I$(3).values$(); $format<$$format.length&&((format=($$format[$format])),1);$format++) {
this.registerFileFormat$jalview_io_FileFormatI$Z(format, format.isIdentifiable$());
}
});

Clazz.newMeth(C$, 'isIdentifiable$jalview_io_FileFormatI',  function (f) {
return C$.identifiable.contains$O(f);
});

Clazz.newMeth(C$, 'registerFileFormat$jalview_io_FileFormatI',  function (format) {
var isIdentifiable=Clazz.instanceOf(format, "jalview.io.FileFormat") && (format).isIdentifiable$() ;
this.registerFileFormat$jalview_io_FileFormatI$Z(format, isIdentifiable);
});

Clazz.newMeth(C$, 'registerFileFormat$jalview_io_FileFormatI$Z',  function (format, isIdentifiable) {
var name=format.getName$().toUpperCase$java_util_Locale($I$(4).ROOT);
if (C$.formats.containsKey$O(name)) {
System.err.println$S("Overwriting file format: " + format.getName$());
}C$.formats.put$O$O(name, format);
if (isIdentifiable) {
C$.identifiable.add$O(format);
}});

Clazz.newMeth(C$, 'deregisterFileFormat$S',  function (name) {
var ff=C$.formats.remove$O(name.toUpperCase$java_util_Locale($I$(4).ROOT));
C$.identifiable.remove$O(ff);
});

Clazz.newMeth(C$, 'getWritableFormats$Z',  function (textOnly) {
var l=Clazz.new_($I$(5,1));
for (var ff, $ff = C$.formats.values$().iterator$(); $ff.hasNext$()&&((ff=($ff.next$())),1);) {
if (ff.isWritable$() && (!textOnly || ff.isTextFormat$() ) ) {
l.add$O(ff.getName$());
}}
return l;
});

Clazz.newMeth(C$, 'getReadableFormats$',  function () {
var l=Clazz.new_($I$(5,1));
for (var ff, $ff = C$.formats.values$().iterator$(); $ff.hasNext$()&&((ff=($ff.next$())),1);) {
if (ff.isReadable$()) {
l.add$O(ff.getName$());
}}
return l;
});

Clazz.newMeth(C$, 'forName$S',  function (format) {
return format == null  ? null : C$.formats.get$O(format.toUpperCase$java_util_Locale($I$(4).ROOT));
});

Clazz.newMeth(C$, 'getFormats$',  function () {
return C$.formats.values$();
});

C$.$static$=function(){C$.$static$=0;
C$.instance=Clazz.new_(C$);
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
