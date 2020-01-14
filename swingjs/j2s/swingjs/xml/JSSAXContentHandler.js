(function(){var P$=Clazz.newPackage("swingjs.xml"),p$1={},I$=[[0,'swingjs.JSUtil','javajs.util.SB','swingjs.xml.JSSAXAttributes','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSSAXContentHandler", null, 'org.xml.sax.helpers.DefaultHandler');
C$.debugging=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'processingInstruction$S$S', function (target, data) {
if (C$.debugging) System.out.println$S("JSSAX <?" + target + ' ' + data + "?>" );
});

Clazz.newMeth(C$, 'startDocument$', function () {
C$.debugging=$I$(1).debugging;
if (C$.debugging) System.out.println$S("JSSAX Start document");
});

Clazz.newMeth(C$, 'startElement$S$S$S$org_xml_sax_Attributes', function (uri, localName, nodeName, atts) {
localName=p$1.fixXerces$S$S.apply(this, [localName, nodeName]);
var sb=Clazz.new_($I$(2));
sb.append$S("Start element: " + $I$(3).getFullName$S$S$S(uri, localName, nodeName));
for (var i=0; i < atts.getLength$(); i++) sb.append$S("\n  " + $I$(3).getFullName$S$S$S(atts.getURI$I(i), atts.getLocalName$I(i), atts.getQName$I(i)) + " = \"" + atts.getValue$I(i) + "\"" );

if (C$.debugging) System.out.println$S("JSSAX " + sb.toString());
});

Clazz.newMeth(C$, 'characters$CA$I$I', function (ch, start, length) {
var s="";
for (var i=start; i < start + length; i++) s += ch[i];

if (C$.debugging) System.out.println$S("JSSAX Characters: " + $I$(4).esc$S(s));
});

Clazz.newMeth(C$, 'endElement$S$S$S', function (uri, localName, nodeName) {
localName=p$1.fixXerces$S$S.apply(this, [localName, nodeName]);
if (C$.debugging) System.out.println$S("JSSAX End element: " + $I$(3).getFullName$S$S$S(uri, localName, nodeName));
});

Clazz.newMeth(C$, 'endDocument$', function () {
if (C$.debugging) System.out.println$S("JSSAX End document");
});

Clazz.newMeth(C$, 'fixXerces$S$S', function (localName, nodeName) {
if (localName != null  && localName.length$() > 0  || nodeName == null   || nodeName.length$() == 0 ) return (localName == null  ? "" : localName);
var pt=nodeName.indexOf$S(":");
return (pt < 0 ? nodeName : nodeName.substring$I$I(0, pt));
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
