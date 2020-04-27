(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.jvxl.data.JvxlCoder','org.jmol.util.Logger','javajs.util.P3','javajs.util.PT','javajs.util.CU']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PmeshReader", null, 'org.jmol.jvxl.readers.PolygonFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tokens=Clazz.array(String, [0]);
this.iToken=0;
},1);

C$.$fields$=[['Z',['isBinary','isClosedFace','onePerLine'],'I',['nPolygons','fixedCount','vertexBase','iToken'],'S',['pmeshError','type'],'O',['vertexMap','int[]','tokens','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2PR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
});

Clazz.newMeth(C$, 'init2PR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2PFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
var fileName=(sg.getReaderData$())[0];
if (fileName == null ) return;
this.type="pmesh";
this.setHeader$();
this.isBinary=this.checkBinary$S(fileName);
this.isClosedFace=!this.isBinary;
});

Clazz.newMeth(C$, 'setHeader$', function () {
this.jvxlFileHeaderBuffer.append$S(this.type + " file format\nvertices and triangles only\n");
$I$(1).jvxlCreateHeaderWithoutTitleOrAtoms$org_jmol_jvxl_data_VolumeData$javajs_util_SB(this.volumeData, this.jvxlFileHeaderBuffer);
});

Clazz.newMeth(C$, 'checkBinary$S', function (fileName) {
try {
this.br.mark$I(4);
var buf=Clazz.array(Character.TYPE, [5]);
this.br.read$CA$I$I(buf, 0, 5);
if (( String.instantialize(buf)).startsWith$S("PM\u0001\u0000")) {
this.br.close$();
this.binarydoc=this.newBinaryDocument$();
this.setStream$S$Z(fileName, (buf[4] == "\u0000"));
return true;
}this.br.reset$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$O(e);
} else {
throw e;
}
}
return false;
});

Clazz.newMeth(C$, 'getSurfaceData$', function () {
if (this.readVerticesAndPolygons$()) (function(a,f){return f.apply(null,a)})([(this.isBinary ? "binary " : "") + this.type + " file contains " + this.nVertices + " vertices and " + this.nPolygons + " polygons for " + this.nTriangles + " triangles" ],$I$(2).info$S);
 else (function(a,f){return f.apply(null,a)})([this.params.fileName + ": " + (this.pmeshError == null  ? "Error reading pmesh data " : this.pmeshError) ],$I$(2).error$S);
});

Clazz.newMeth(C$, 'readVerticesAndPolygons$', function () {
try {
if (this.isBinary && !this.readBinaryHeader$() ) return false;
if (this.readVertices$() && this.readPolygons$() ) return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (this.pmeshError == null ) this.pmeshError=this.type + " ERROR: " + e ;
} else {
throw e;
}
}
return false;
});

Clazz.newMeth(C$, 'readBinaryHeader$', function () {
this.pmeshError="could not read binary Pmesh file header";
try {
var ignored=Clazz.array(Byte.TYPE, [64]);
this.binarydoc.readByteArray$BA$I$I(ignored, 0, 8);
this.nVertices=this.binarydoc.readInt$();
this.nPolygons=this.binarydoc.readInt$();
this.binarydoc.readByteArray$BA$I$I(ignored, 0, 64);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.pmeshError += " " + e.toString();
this.binarydoc.close$();
return false;
} else {
throw e;
}
}
this.pmeshError=null;
return true;
});

Clazz.newMeth(C$, 'readVertices$', function () {
return this.readVerticesPM$();
});

Clazz.newMeth(C$, 'readVerticesPM$', function () {
this.pmeshError=this.type + " ERROR: vertex count must be positive";
if (!this.isBinary) {
this.nVertices=p$1.getInt.apply(this, []);
if (this.nVertices == -2147483648) this.nVertices=p$1.getInt.apply(this, []);
}if (this.onePerLine) this.iToken=2147483647;
if (this.nVertices <= 0) {
this.pmeshError += " (" + this.nVertices + ")" ;
return false;
}this.pmeshError=this.type + " ERROR: invalid vertex list";
this.vertexMap=Clazz.array(Integer.TYPE, [this.nVertices]);
for (var i=0; i < this.nVertices; i++) {
var pt=(function(a,f){return f.apply(null,a)})([p$1.getFloat.apply(this, []), p$1.getFloat.apply(this, []), p$1.getFloat.apply(this, [])],$I$(3).new3$F$F$F);
if (this.isAnisotropic) this.setVertexAnisotropy$javajs_util_T3(pt);
if ($I$(2).debugging) $I$(2).debug$S(i + ": " + pt );
this.vertexMap[i]=this.addVertexCopy$javajs_util_T3$F$I$Z(pt, 0, i, false);
if (this.onePerLine) this.iToken=2147483647;
}
this.pmeshError=null;
return true;
});

Clazz.newMeth(C$, 'readPolygons$', function () {
return this.readPolygonsPM$();
});

Clazz.newMeth(C$, 'readPolygonsPM$', function () {
this.pmeshError=this.type + " ERROR: polygon count must be zero or positive";
if (!this.isBinary) this.nPolygons=p$1.getInt.apply(this, []);
if (this.onePerLine) this.iToken=2147483647;
var vertices=Clazz.array(Integer.TYPE, [5]);
if (this.nPolygons == -1) this.nPolygons=2147483647;
var nread=0;
for (var iPoly=0; iPoly < this.nPolygons; iPoly++) {
var intCount=(this.fixedCount == 0 ? p$1.getInt.apply(this, []) : this.fixedCount);
if (intCount == 0) break;
nread++;
var haveColor=(intCount < 0);
if (haveColor) intCount=-intCount;
var vertexCount=intCount - (intCount > 3 && this.isClosedFace  ? 1 : 0);
if (vertexCount < 1 || vertexCount > 4 ) {
this.pmeshError=this.type + " ERROR: bad polygon (must have 1-4 vertices) at #" + (iPoly + 1) ;
return false;
}var isOK=true;
for (var i=0; i < intCount; ++i) {
if ((vertices[i]=p$1.getInt.apply(this, []) - this.vertexBase) < 0 || vertices[i] >= this.nVertices ) {
this.pmeshError=this.type + " ERROR: invalid vertex index: " + vertices[i] ;
return false;
}if ((vertices[i]=this.vertexMap[vertices[i]]) < 0) isOK=false;
}
if (this.onePerLine) this.iToken=2147483647;
if (!isOK) continue;
if (vertexCount < 3) for (var i=vertexCount; i < 3; ++i) vertices[i]=vertices[i - 1];

var color=0;
if (haveColor) {
if (this.isBinary) {
color=p$1.getInt.apply(this, []);
} else {
var c=p$1.nextToken.apply(this, []);
try {
color=(c.startsWith$S("0x") ? (function(a,f){return f.apply(null,a)})([c.substring$I(2), 16],$I$(4).parseIntRadix$S$I) : this.parseIntStr$S(c));
} catch (e) {
color=-2147483648;
}
if (color == -2147483648) color=$I$(5).getArgbFromString$S(c);
}color|=-16777216;
}if (vertexCount == 4) {
this.nTriangles+=2;
this.addTriangleCheck$I$I$I$I$I$Z$I(vertices[0], vertices[1], vertices[3], 5, 0, false, color);
this.addTriangleCheck$I$I$I$I$I$Z$I(vertices[1], vertices[2], vertices[3], 3, 0, false, color);
} else {
this.nTriangles++;
this.addTriangleCheck$I$I$I$I$I$Z$I(vertices[0], vertices[1], vertices[2], 7, 0, false, color);
}}
if (this.isBinary) this.nBytes=this.binarydoc.getPosition$();
this.nPolygons=nread;
return true;
});

Clazz.newMeth(C$, 'nextToken', function () {
while (this.iToken >= this.tokens.length){
this.iToken=0;
this.rd$();
this.tokens=this.getTokens$();
}
return this.tokens[this.iToken++];
}, p$1);

Clazz.newMeth(C$, 'getInt', function () {
return (this.isBinary ? this.binarydoc.readInt$() : this.parseIntStr$S(p$1.nextToken.apply(this, [])));
}, p$1);

Clazz.newMeth(C$, 'getFloat', function () {
return (this.isBinary ? this.binarydoc.readFloat$() : this.parseFloatStr$S(p$1.nextToken.apply(this, [])));
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
