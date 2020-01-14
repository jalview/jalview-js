(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'gnu.jpdf.PDFStream','gnu.jpdf.PDFStringHelper']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDFInfo", null, 'gnu.jpdf.PDFObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.author=null;
this.creator=null;
this.title=null;
this.subject=null;
this.keywords=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S.apply(this, [null]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (title) {
C$.c$.apply(this, []);
this.title=title;
}, 1);

Clazz.newMeth(C$, 'getAuthor$', function () {
return this.author;
});

Clazz.newMeth(C$, 'setAuthor$S', function (v) {
this.author=v;
});

Clazz.newMeth(C$, 'getCreator$', function () {
return this.creator;
});

Clazz.newMeth(C$, 'setCreator$S', function (v) {
this.creator=v;
});

Clazz.newMeth(C$, 'getTitle$', function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S', function (v) {
this.title=v;
});

Clazz.newMeth(C$, 'getSubject$', function () {
return this.subject;
});

Clazz.newMeth(C$, 'setSubject$S', function (v) {
this.subject=v;
});

Clazz.newMeth(C$, 'getKeywords$', function () {
return this.keywords;
});

Clazz.newMeth(C$, 'setKeywords$S', function (v) {
this.keywords=v;
});

Clazz.newMeth(C$, 'write$java_io_OutputStream', function (os) {
this.writeStart$java_io_OutputStream(os);
if (this.author != null ) {
$I$(1).write$java_io_OutputStream$S(os, "/Author (");
$I$(1).write$java_io_OutputStream$S(os, $I$(2).makePDFString$S(this.author));
$I$(1).write$java_io_OutputStream$S(os, ")\n");
}if (this.creator != null ) {
$I$(1).write$java_io_OutputStream$S(os, "/Creator (");
$I$(1).write$java_io_OutputStream$S(os, $I$(2).makePDFString$S(this.creator));
$I$(1).write$java_io_OutputStream$S(os, ")\n");
}$I$(1).write$java_io_OutputStream$S(os, "/Producer ");
$I$(1).write$java_io_OutputStream$S(os, $I$(2).makePDFString$S("gnujpdf - gnujpdf.sourceforge.net"));
$I$(1).write$java_io_OutputStream$S(os, "\n");
if (this.title != null ) {
$I$(1).write$java_io_OutputStream$S(os, "/Title ");
$I$(1).write$java_io_OutputStream$S(os, $I$(2).makePDFString$S(this.title));
$I$(1).write$java_io_OutputStream$S(os, "\n");
}if (this.subject != null ) {
$I$(1).write$java_io_OutputStream$S(os, "/Subject (");
$I$(1).write$java_io_OutputStream$S(os, $I$(2).makePDFString$S(this.subject));
$I$(1).write$java_io_OutputStream$S(os, ")\n");
}if (this.keywords != null ) {
$I$(1).write$java_io_OutputStream$S(os, "/Keywords (");
$I$(1).write$java_io_OutputStream$S(os, $I$(2).makePDFString$S(this.keywords));
$I$(1).write$java_io_OutputStream$S(os, ")\n");
}this.writeEnd$java_io_OutputStream(os);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
