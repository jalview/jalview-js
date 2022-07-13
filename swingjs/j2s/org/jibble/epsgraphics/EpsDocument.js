(function(){var P$=Clazz.newPackage("org.jibble.epsgraphics"),p$1={},I$=[[0,'java.io.StringWriter','java.io.BufferedWriter','java.io.OutputStreamWriter','jalview.bin.Cache']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EpsDocument");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._isClipSet=false;
this._bufferedWriter=null;
this._lastG=null;
},1);

C$.$fields$=[['Z',['_isClipSet'],'F',['minX','minY','maxX','maxY'],'S',['_title'],'O',['_stringWriter','java.io.StringWriter','_bufferedWriter','java.io.BufferedWriter','_lastG','org.jibble.epsgraphics.EpsGraphics2D']]]

Clazz.newMeth(C$, 'c$$S',  function (title) {
;C$.$init$.apply(this);
this._title=title;
this.minX=Infinity;
this.minY=Infinity;
this.maxX=-Infinity;
this.maxY=-Infinity;
this._stringWriter=Clazz.new_($I$(1,1));
this._bufferedWriter=Clazz.new_($I$(2,1).c$$java_io_Writer,[this._stringWriter]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_io_OutputStream$I$I$I$I',  function (title, outputStream, minX, minY, maxX, maxY) {
;C$.$init$.apply(this);
this._title=title;
this.minX=minX;
this.minY=minY;
this.maxX=maxX;
this.maxY=maxY;
this._bufferedWriter=Clazz.new_([Clazz.new_($I$(3,1).c$$java_io_OutputStream,[outputStream])],$I$(2,1).c$$java_io_Writer);
this.write$java_io_Writer(this._bufferedWriter);
}, 1);

Clazz.newMeth(C$, 'getTitle$',  function () {
return this._title;
});

Clazz.newMeth(C$, 'updateBounds$D$D',  function (x, y) {
if (x > this.maxX ) {
this.maxX=x;
}if (x < this.minX ) {
this.minX=x;
}if (y > this.maxY ) {
this.maxY=y;
}if (y < this.minY ) {
this.minY=y;
}});

Clazz.newMeth(C$, 'append$org_jibble_epsgraphics_EpsGraphics2D$S',  function (g, line) {
if (this._lastG == null ) {
this._lastG=g;
} else if (g !== this._lastG ) {
var lastG=this._lastG;
this._lastG=g;
if (g.getClip$() !== lastG.getClip$() ) {
g.setClip$java_awt_Shape(g.getClip$());
}if (!g.getColor$().equals$O(lastG.getColor$())) {
g.setColor$java_awt_Color(g.getColor$());
}if (!g.getBackground$().equals$O(lastG.getBackground$())) {
g.setBackground$java_awt_Color(g.getBackground$());
}if (!g.getPaint$().equals$O(lastG.getPaint$())) {
g.setPaint$java_awt_Paint(g.getPaint$());
}if (!g.getComposite$().equals$O(lastG.getComposite$())) {
g.setComposite$java_awt_Composite(g.getComposite$());
}if (!g.getComposite$().equals$O(lastG.getComposite$())) {
g.setComposite$java_awt_Composite(g.getComposite$());
}if (!g.getFont$().equals$O(lastG.getFont$())) {
g.setFont$java_awt_Font(g.getFont$());
}if (!g.getStroke$().equals$O(lastG.getStroke$())) {
g.setStroke$java_awt_Stroke(g.getStroke$());
}}this._lastG=g;
try {
this._bufferedWriter.write$S(line + "\n");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.jibble.epsgraphics.EpsException').c$$S,["Could not write to the output file: " + e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'write$java_io_Writer',  function (writer) {
var offsetX=-this.minX;
var offsetY=-this.minY;
writer.write$S("%!PS-Adobe-3.0 EPSF-3.0\n");
writer.write$S("%%Creator: Jalview " + $I$(4).getProperty$S("VERSION") + " \n" );
writer.write$S("%%Title: " + this._title + "\n" );
writer.write$S("%%CreationDate: " + Clazz.new_(java.util.Date) + "\n" );
writer.write$S("%%BoundingBox: 0 0 " + ((Math.ceil(this.maxX + offsetX)|0)) + " " + ((Math.ceil(this.maxY + offsetY)|0)) + "\n" );
writer.write$S("%%DocumentData: Clean7Bit\n");
writer.write$S("%%DocumentProcessColors: Black\n");
writer.write$S("%%ColorUsage: Color\n");
writer.write$S("%%Origin: 0 0\n");
writer.write$S("%%Pages: 1\n");
writer.write$S("%%Page: 1 1\n");
writer.write$S("%%EndComments\n\n");
writer.write$S("gsave\n");
if (this._stringWriter != null ) {
writer.write$S(new Float(offsetX).toString() + " " + new Float((offsetY)).toString() + " translate\n" );
this._bufferedWriter.flush$();
var buffer=this._stringWriter.getBuffer$();
for (var i=0; i < buffer.length$(); i++) {
writer.write$I(buffer.charAt$I(i).$c());
}
p$1.writeFooter$java_io_Writer.apply(this, [writer]);
} else {
writer.write$S(new Float(offsetX).toString() + " " + new Float(((this.maxY - this.minY) - offsetY)).toString() + " translate\n" );
}writer.flush$();
});

Clazz.newMeth(C$, 'writeFooter$java_io_Writer',  function (writer) {
writer.write$S("grestore\n");
if (this.isClipSet$()) {
writer.write$S("grestore\n");
}writer.write$S("showpage\n");
writer.write$S("\n");
writer.write$S("%%EOF");
writer.flush$();
}, p$1);

Clazz.newMeth(C$, 'flush$',  function () {
this._bufferedWriter.flush$();
});

Clazz.newMeth(C$, 'close$',  function () {
if (this._stringWriter == null ) {
p$1.writeFooter$java_io_Writer.apply(this, [this._bufferedWriter]);
this._bufferedWriter.flush$();
this._bufferedWriter.close$();
}});

Clazz.newMeth(C$, 'isClipSet$',  function () {
return this._isClipSet;
});

Clazz.newMeth(C$, 'setClipSet$Z',  function (isClipSet) {
this._isClipSet=isClipSet;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
