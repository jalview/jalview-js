(function(){var P$=Clazz.newPackage("jalview.util"),p$1={},I$=[[0,'java.util.regex.Pattern','java.util.ArrayList','StringBuilder','java.util.StringTokenizer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParseHtmlBodyAndLinks");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.orig=null;
this.htmlContent=true;
this.links=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['htmlContent'],'S',['orig','content'],'O',['links','java.util.List']]
,['O',['LEFT_ANGLE_BRACKET_PATTERN','java.util.regex.Pattern']]]

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
;C$.$init$.apply(this);
if (description == null  || description.length$() == 0 ) {
this.htmlContent=false;
return;
}var sb=Clazz.new_([description.length$()],$I$(3,1).c$$I);
if (description.toUpperCase$().indexOf$S("<HTML>") == -1) {
this.htmlContent=false;
}this.orig=description;
var st=Clazz.new_($I$(4,1).c$$S$S,[description, "<"]);
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
this.links.add$O(label + "|" + link );
sb.append$S(label + "%LINK%");
} else if (tag != null  && tag.equalsIgnoreCase$S("br") ) {
sb.append$S(newline);
} else {
sb.append$S(token);
}}
if (removeHTML && !this.htmlContent ) {
sb=Clazz.new_([C$.LEFT_ANGLE_BRACKET_PATTERN.matcher$CharSequence(description).replaceAll$S("&lt;")],$I$(3,1).c$$S);
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

C$.$static$=function(){C$.$static$=0;
C$.LEFT_ANGLE_BRACKET_PATTERN=$I$(1).compile$S("<");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
