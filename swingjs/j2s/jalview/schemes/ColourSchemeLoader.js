(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.io.File','java.io.InputStreamReader','java.io.FileInputStream','javax.xml.bind.JAXBContext','javax.xml.stream.XMLInputFactory','jalview.xml.binding.jalview.JalviewUserColours','java.awt.Color','jalview.schemes.ResidueProperties','java.util.Locale','jalview.schemes.UserColourScheme']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColourSchemeLoader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'loadColourScheme$S',  function (filePath) {
var ucs=null;
var newColours=null;
var file=Clazz.new_($I$(1,1).c$$S,[filePath]);
try {
var $in=Clazz.new_([Clazz.new_($I$(3,1).c$$java_io_File,[file]), "UTF-8"],$I$(2,1).c$$java_io_InputStream$S);
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
}var color=Clazz.new_([Integer.parseInt$S$I(jucs.getColour$().get$I(i).getRGB$(), 16)],$I$(7,1).c$$I);
if (name.toLowerCase$java_util_Locale($I$(9).ROOT).equals$O(name)) {
caseSensitive=true;
lowerCase[index]=color;
} else {
newColours[index]=color;
}}
ucs=Clazz.new_($I$(10,1).c$$java_awt_ColorA,[newColours]);
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
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
