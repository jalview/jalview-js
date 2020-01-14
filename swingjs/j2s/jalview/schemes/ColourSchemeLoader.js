(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.io.File','java.io.InputStreamReader','java.io.FileInputStream','javax.xml.bind.JAXBContext','javax.xml.stream.XMLInputFactory','jalview.xml.binding.jalview.JalviewUserColours','java.awt.Color','jalview.schemes.ResidueProperties','jalview.schemes.UserColourScheme']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ColourSchemeLoader");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'loadColourScheme$S', function (filePath) {
var ucs=null;
var newColours=null;
var file=Clazz.new_($I$(1).c$$S,[filePath]);
try {
var $in=Clazz.new_($I$(2).c$$java_io_InputStream$S,[Clazz.new_($I$(3).c$$java_io_File,[file]), "UTF-8"]);
var jc=$I$(4).newInstance$S("jalview.xml.binding.jalview");
var um=jc.createUnmarshaller$();
var streamReader=$I$(5).newInstance$().createXMLStreamReader$java_io_Reader($in);
var jbe=um.unmarshal$javax_xml_stream_XMLStreamReader$Class(streamReader, Clazz.getClass($I$(6)));
var jucs=jbe.getValue$();
newColours=Clazz.array($I$(7), [24]);
var lowerCase=Clazz.array($I$(7), [23]);
var caseSensitive=false;
var name;
var index;
for (var i=0; i < jucs.getColour$().size$(); i++) {
name=jucs.getColour$().get$I(i).getName$();
if ($I$(8).aa3Hash.containsKey$O(name)) {
index=$I$(8).aa3Hash.get$O(name).intValue$();
} else {
index=$I$(8).aaIndex[(name.charCodeAt$I(0))];
}if (index == -1) {
continue;
}var color=Clazz.new_($I$(7).c$$I,[Integer.parseInt$S$I(jucs.getColour$().get$I(i).getRGB$(), 16)]);
if (name.toLowerCase$().equals$O(name)) {
caseSensitive=true;
lowerCase[index]=color;
} else {
newColours[index]=color;
}}
ucs=Clazz.new_($I$(9).c$$java_awt_ColorA,[newColours]);
ucs.setName$S(jucs.getSchemeName$());
if (caseSensitive) {
ucs.setLowerCaseColours$java_awt_ColorA(lowerCase);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Failed to read colour scheme from " + filePath + " : " + ex.toString() );
} else {
throw ex;
}
}
return ucs;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
