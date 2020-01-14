(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.util.regex.Pattern','java.util.ArrayList','StringBuffer','StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StringUtils");
C$.DELIMITERS_PATTERN=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DELIMITERS_PATTERN=$I$(1).compile$S(".*=\'[^\']*(?!\')");
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'insertCharAt$CA$I$I$C', function ($in, position, count, ch) {
var tmp=Clazz.array(Character.TYPE, [$in.length + count]);
if (position >= $in.length) {
System.arraycopy$O$I$O$I$I($in, 0, tmp, 0, $in.length);
position=$in.length;
} else {
System.arraycopy$O$I$O$I$I($in, 0, tmp, 0, position);
}var index=position;
while (count > 0){
tmp[index++]=ch;
count--;
}
if (position < $in.length) {
System.arraycopy$O$I$O$I$I($in, position, tmp, index, $in.length - position);
}return tmp;
}, 1);

Clazz.newMeth(C$, 'deleteChars$CA$I$I', function ($in, from, to) {
if (from >= $in.length || from < 0 ) {
return $in;
}var tmp;
if (to >= $in.length) {
tmp=Clazz.array(Character.TYPE, [from]);
System.arraycopy$O$I$O$I$I($in, 0, tmp, 0, from);
to=$in.length;
} else {
tmp=Clazz.array(Character.TYPE, [$in.length - to + from]);
System.arraycopy$O$I$O$I$I($in, 0, tmp, 0, from);
System.arraycopy$O$I$O$I$I($in, to, tmp, from, $in.length - to);
}return tmp;
}, 1);

Clazz.newMeth(C$, 'getLastToken$S$S', function (input, token) {
if (input == null ) {
return null;
}if (token == null ) {
return input;
}var st=input.split$S(token);
return st[st.length - 1];
}, 1);

Clazz.newMeth(C$, 'separatorListToArray$S$S', function (input, delimiter) {
var seplen=delimiter.length$();
if (input == null  || input.equals$O("")  || input.equals$O(delimiter) ) {
return null;
}var jv=Clazz.new_($I$(2));
var cp=0;
var pos;
var escape;
var wasescaped=false;
var wasquoted=false;
var lstitem=null;
while ((pos=input.indexOf$S$I(delimiter, cp)) >= cp){
escape=(pos > 0 && input.charAt$I(pos - 1) == "\\" ) ? -1 : 0;
if (wasescaped || wasquoted ) {
jv.set$I$TE(jv.size$() - 1, lstitem=lstitem + delimiter + input.substring$I$I(cp, pos + escape) );
} else {
jv.add$TE(lstitem=input.substring$I$I(cp, pos + escape));
}cp=pos + seplen;
wasescaped=escape == -1;
wasquoted=C$.DELIMITERS_PATTERN.matcher$CharSequence(lstitem).matches$();
}
if (cp < input.length$()) {
var c=input.substring$I(cp);
if (wasescaped || wasquoted ) {
jv.set$I$TE(jv.size$() - 1, lstitem + delimiter + c );
} else {
if (!c.equals$O(delimiter)) {
jv.add$TE(c);
}}}if (jv.size$() > 0) {
var v=jv.toArray$TTA(Clazz.array(String, [jv.size$()]));
jv.clear$();
if (false) {
System.err.println$S("Array from '" + delimiter + "' separated List:\n" + v.length );
for (var i=0; i < v.length; i++) {
System.err.println$S("item " + i + " '" + v[i] + "'" );
}
}return v;
}if (false) {
System.err.println$S("Empty Array from '" + delimiter + "' separated List" );
}return null;
}, 1);

Clazz.newMeth(C$, 'arrayToSeparatorList$SA$S', function (list, separator) {
var v=Clazz.new_($I$(3));
if (list != null  && list.length > 0 ) {
for (var i=0, iSize=list.length; i < iSize; i++) {
if (list[i] != null ) {
if (v.length$() > 0) {
v.append$S(separator);
}v.append$S(list[i]);
}}
if (false) {
System.err.println$S("Returning '" + separator + "' separated List:\n" );
System.err.println$O(v);
}return v.toString();
}if (false) {
System.err.println$S("Returning empty '" + separator + "' separated List\n" );
}return "" + separator;
}, 1);

Clazz.newMeth(C$, 'listToDelimitedString$java_util_List$S', function (terms, delim) {
var sb=Clazz.new_($I$(4).c$$I,[32]);
if (terms != null  && !terms.isEmpty$() ) {
var appended=false;
for (var term, $term = terms.iterator$(); $term.hasNext$()&&((term=($term.next$())),1);) {
if (appended) {
sb.append$S(delim);
}appended=true;
sb.append$S(term);
}
}return sb.toString();
}, 1);

Clazz.newMeth(C$, 'parseInt$S', function (s) {
var result=0;
if (s != null  && s.length$() > 0 ) {
try {
result=Integer.parseInt$S(s);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
}return result;
}, 1);

Clazz.newMeth(C$, 'compareVersions$S$S', function (v1, v2) {
return C$.compareVersions$S$S$S(v1, v2, null);
}, 1);

Clazz.newMeth(C$, 'compareVersions$S$S$S', function (v1, v2, pointSeparator) {
if (v1 == null  || v2 == null  ) {
return 0;
}var toks1=v1.split$S("\\.");
var toks2=v2.split$S("\\.");
var i=0;
for (; i < toks1.length; i++) {
if (i >= toks2.length) {
return 1;
}var tok1=toks1[i];
var tok2=toks2[i];
if (pointSeparator != null ) {
tok1=tok1.replace$CharSequence$CharSequence(pointSeparator, ".");
tok2=tok2.replace$CharSequence$CharSequence(pointSeparator, ".");
}try {
var f1=(Float.valueOf$S(tok1)).floatValue$();
var f2=(Float.valueOf$S(tok2)).floatValue$();
var comp=Float.compare$F$F(f1, f2);
if (comp != 0) {
return comp;
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.err.println$S("Invalid version format found: " + e.getMessage$());
return 0;
} else {
throw e;
}
}
}
if (i < toks2.length) {
return -1;
}return 0;
}, 1);

Clazz.newMeth(C$, 'toSentenceCase$S', function (s) {
if (s == null ) {
return s;
}if (s.length$() <= 1) {
return s.toUpperCase$();
}return s.substring$I$I(0, 1).toUpperCase$() + s.substring$I(1).toLowerCase$();
}, 1);

Clazz.newMeth(C$, 'stripHtmlTags$S', function (text) {
if (text == null ) {
return null;
}var tmp2up=text.toUpperCase$();
var startTag=tmp2up.indexOf$S("<HTML>");
if (startTag > -1) {
text=text.substring$I(startTag + 6);
tmp2up=tmp2up.substring$I(startTag + 6);
}var endTag=tmp2up.indexOf$S("</BODY>");
if (endTag > -1) {
text=text.substring$I$I(0, endTag);
tmp2up=tmp2up.substring$I$I(0, endTag);
}endTag=tmp2up.indexOf$S("</HTML>");
if (endTag > -1) {
text=text.substring$I$I(0, endTag);
}if (startTag == -1 && (text.contains$CharSequence("<") || text.contains$CharSequence(">") ) ) {
text=text.replaceAll$S$S("<", "&lt;");
text=text.replaceAll$S$S(">", "&gt;");
}return text;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
