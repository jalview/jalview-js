(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.util.LinkedHashMap','java.util.HashSet','jalview.io.FileFormat','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileFormats");
C$.instance=null;
C$.formats=null;
C$.identifiable=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.instance=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'reset$', function () {
C$.formats=Clazz.new_($I$(1));
C$.identifiable=Clazz.new_($I$(2));
for (var format, $format = 0, $$format = $I$(3).values$(); $format<$$format.length&&((format=($$format[$format])),1);$format++) {
this.registerFileFormat$jalview_io_FileFormatI$Z(format, format.isIdentifiable$());
}
});

Clazz.newMeth(C$, 'isIdentifiable$jalview_io_FileFormatI', function (f) {
return C$.identifiable.contains$O(f);
});

Clazz.newMeth(C$, 'registerFileFormat$jalview_io_FileFormatI', function (format) {
var isIdentifiable=Clazz.instanceOf(format, "jalview.io.FileFormat") && (format).isIdentifiable$() ;
this.registerFileFormat$jalview_io_FileFormatI$Z(format, isIdentifiable);
});

Clazz.newMeth(C$, 'registerFileFormat$jalview_io_FileFormatI$Z', function (format, isIdentifiable) {
var name=format.getName$().toUpperCase$();
if (C$.formats.containsKey$O(name)) {
System.err.println$S("Overwriting file format: " + format.getName$());
}C$.formats.put$TK$TV(name, format);
if (isIdentifiable) {
C$.identifiable.add$TE(format);
}});

Clazz.newMeth(C$, 'deregisterFileFormat$S', function (name) {
var ff=C$.formats.remove$O(name.toUpperCase$());
C$.identifiable.remove$O(ff);
});

Clazz.newMeth(C$, 'getWritableFormats$Z', function (textOnly) {
var l=Clazz.new_($I$(4));
for (var ff, $ff = C$.formats.values$().iterator$(); $ff.hasNext$()&&((ff=($ff.next$())),1);) {
if (ff.isWritable$() && (!textOnly || ff.isTextFormat$() ) ) {
l.add$TE(ff.getName$());
}}
return l;
});

Clazz.newMeth(C$, 'getReadableFormats$', function () {
var l=Clazz.new_($I$(4));
for (var ff, $ff = C$.formats.values$().iterator$(); $ff.hasNext$()&&((ff=($ff.next$())),1);) {
if (ff.isReadable$()) {
l.add$TE(ff.getName$());
}}
return l;
});

Clazz.newMeth(C$, 'forName$S', function (format) {
return format == null  ? null : C$.formats.get$O(format.toUpperCase$());
});

Clazz.newMeth(C$, 'getFormats$', function () {
return C$.formats.values$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
