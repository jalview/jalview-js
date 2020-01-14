(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.SB','javajs.util.PT','org.jmol.util.Escape','javajs.util.P3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "XmlReader");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.br=null;
this.line=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getLine$', function () {
return this.line;
});

Clazz.newMeth(C$, 'c$$java_io_BufferedReader', function (br) {
C$.$init$.apply(this);
this.br=br;
}, 1);

Clazz.newMeth(C$, 'toTag$S', function (name) {
p$1.skipTo$S.apply(this, ["<" + name]);
if (this.line == null ) return "";
var i=this.line.indexOf$S("<" + name) + name.length$() + 1 ;
if (i == this.line.length$()) return this.line;
if (this.line.charAt$I(i) == " " || this.line.charAt$I(i) == ">" ) return this.line;
this.line=null;
return this.toTag$S(name);
});

Clazz.newMeth(C$, 'skipTag$S', function (name) {
p$1.skipTo$S.apply(this, ["</" + name + ">" ]);
});

Clazz.newMeth(C$, 'getXmlData$S$S$Z$Z', function (name, data, withTag, allowSelfCloseOption) {
var closer="</" + name + ">" ;
var tag="<" + name;
if (data == null ) {
var sb=Clazz.new_($I$(1));
try {
if (this.line == null ) this.line=this.br.readLine$();
while (this.line.indexOf$S(tag) < 0){
this.line=this.br.readLine$();
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
sb.append$S(this.line);
var selfClosed=false;
var pt=this.line.indexOf$S("/>");
var pt1=this.line.indexOf$S(">");
if (pt1 < 0 || pt == pt1 - 1 ) selfClosed=allowSelfCloseOption;
while (this.line.indexOf$S(closer) < 0 && (!selfClosed || this.line.indexOf$S("/>") < 0 ) )sb.append$S(this.line=this.br.readLine$());

data=sb.toString();
}return C$.extractTag$S$S$S$Z(data, tag, closer, withTag);
});

Clazz.newMeth(C$, 'extractTagOnly$S$S', function (data, tag) {
return C$.extractTag$S$S$S$Z(data, "<" + tag + ">" , "</" + tag + ">" , false);
}, 1);

Clazz.newMeth(C$, 'extractTag$S$S$S$Z', function (data, tag, closer, withTag) {
var pt1=data.indexOf$S(tag);
if (pt1 < 0) return "";
var pt2=data.indexOf$S$I(closer, pt1);
if (pt2 < 0) {
pt2=data.indexOf$S$I("/>", pt1);
closer="/>";
}if (pt2 < 0) return "";
if (withTag) {
pt2+=closer.length$();
return data.substring$I$I(pt1, pt2);
}var quoted=false;
for (; pt1 < pt2; pt1++) {
var ch;
if ((ch=data.charAt$I(pt1)) == "\"") quoted=!quoted;
 else if (quoted && ch == "\\" ) pt1++;
 else if (!quoted && (ch == ">" || ch == "/" ) ) break;
}
if (pt1 >= pt2) return "";
while ($I$(2).isWhitespace$C(data.charAt$I(++pt1))){
}
return C$.unwrapCdata$S(data.substring$I$I(pt1, pt2));
}, 1);

Clazz.newMeth(C$, 'unwrapCdata$S', function (s) {
return (s.startsWith$S("<![CDATA[") && s.endsWith$S("]]>")  ? $I$(2).rep$S$S$S(s.substring$I$I(9, s.length$() - 3), "]]]]><![CDATA[>", "]]>") : s);
}, 1);

Clazz.newMeth(C$, 'getXmlAttrib$S$S', function (data, what) {
var nexta=Clazz.array(Integer.TYPE, [1]);
var pt=C$.setNext$S$S$IA$I(data, what, nexta, 1);
if (pt < 2 || (pt=C$.setNext$S$S$IA$I(data, "\"", nexta, 0)) < 2 ) return "";
var pt1=C$.setNext$S$S$IA$I(data, "\"", nexta, -1);
return (pt1 <= 0 ? "" : data.substring$I$I(pt, pt1));
}, 1);

Clazz.newMeth(C$, 'getXmlPoint$S$S', function (data, key) {
var spt=C$.getXmlAttrib$S$S(data, key).replace$C$C("(", "{").replace$C$C(")", "}");
var value=$I$(3).uP$S(spt);
if (Clazz.instanceOf(value, "javajs.util.P3")) return value;
return Clazz.new_($I$(4));
});

Clazz.newMeth(C$, 'setNext$S$S$IA$I', function (data, what, next, offset) {
var ipt=next[0];
if (ipt < 0 || (ipt=data.indexOf$S$I(what, next[0])) < 0 ) return -1;
ipt+=what.length$();
next[0]=ipt + offset;
if (offset > 0 && ipt < data.length$()  && data.charAt$I(ipt) != "=" ) return C$.setNext$S$S$IA$I(data, what, next, offset);
return next[0];
}, 1);

Clazz.newMeth(C$, 'skipTo$S', function (key) {
if (this.line == null ) this.line=this.br.readLine$();
while (this.line != null  && this.line.indexOf$S(key) < 0 )this.line=this.br.readLine$();

}, p$1);

Clazz.newMeth(C$, 'isNext$S', function (name) {
if (this.line == null  || this.line.indexOf$S("</") >= 0 && this.line.indexOf$S("</") == this.line.indexOf$S("<")  ) this.line=this.br.readLine$();
return (this.line.indexOf$S("<" + name) >= 0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
