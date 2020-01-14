(function(){var P$=Clazz.newPackage("jalview.util"),p$1={},I$=[[0,'java.util.regex.Pattern','java.util.ArrayList','StringBuilder','java.util.StringTokenizer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ParseHtmlBodyAndLinks");
C$.LEFT_ANGLE_BRACKET_PATTERN=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.LEFT_ANGLE_BRACKET_PATTERN=$I$(1).compile$S("<");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.orig=null;
this.htmlContent=false;
this.links=null;
this.content=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.orig=null;
this.htmlContent=true;
this.links=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'getOrig$', function () {
return this.orig;
});

Clazz.newMeth(C$, 'isHtmlContent$', function () {
return this.htmlContent;
});

Clazz.newMeth(C$, 'getContent$', function () {
return this.content;
});

Clazz.newMeth(C$, 'getLinks$', function () {
return this.links;
});

Clazz.newMeth(C$, 'c$$S$Z$S', function (description, removeHTML, newline) {
C$.$init$.apply(this);
if (description == null  || description.length$() == 0 ) {
this.htmlContent=false;
return;
}var sb=Clazz.new_($I$(3).c$$I,[description.length$()]);
if (description.toUpperCase$().indexOf$S("<HTML>") == -1) {
this.htmlContent=false;
}this.orig=description;
var st=Clazz.new_($I$(4).c$$S$S,[description, "<"]);
var token;
var link;
var startTag;
var tag=null;
while (st.hasMoreElements$()){
token=st.nextToken$S(">");
if (token.equalsIgnoreCase$S("html") || token.startsWith$S("/") ) {
continue;
}tag=null;
startTag=token.indexOf$S("<");
if (startTag > -1) {
tag=token.substring$I(startTag + 1);
token=token.substring$I$I(0, startTag);
}if (tag != null  && tag.toUpperCase$().startsWith$S("A HREF=") ) {
if (token.length$() > 0) {
sb.append$S(token);
}link=tag.substring$I$I(tag.indexOf$S("\"") + 1, tag.length$() - 1);
var label=st.nextToken$S("<>");
this.links.add$TE(label + "|" + link );
sb.append$S(label + "%LINK%");
} else if (tag != null  && tag.equalsIgnoreCase$S("br") ) {
sb.append$S(newline);
} else {
sb.append$S(token);
}}
if (removeHTML && !this.htmlContent ) {
sb=Clazz.new_($I$(3).c$$S,[C$.LEFT_ANGLE_BRACKET_PATTERN.matcher$CharSequence(description).replaceAll$S("&lt;")]);
}this.content=p$1.translateEntities$S.apply(this, [sb.toString()]);
}, 1);

Clazz.newMeth(C$, 'translateEntities$S', function (s) {
s=s.replaceAll$S$S("&amp;", "&");
s=s.replaceAll$S$S("&lt;", "<");
s=s.replaceAll$S$S("&gt;", ">");
return s;
}, p$1);

Clazz.newMeth(C$, 'getNonHtmlContent$', function () {
return this.isHtmlContent$() ? this.content : this.orig;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
