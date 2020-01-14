(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'StringBuffer','org.json.JSONArray','StringBuilder','org.json.JSONTokener']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CDL");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getValue$org_json_JSONTokener', function (x) {
var c;
var q;
var sb;
do {
c=x.next$();
} while (c == " " || c == "\t" );
switch (c.$c()) {
case 0:
return null;
case 34:
case 39:
q=c;
sb=Clazz.new_($I$(1));
for (; ; ) {
c=x.next$();
if (c == q) {
var nextC=x.next$();
if (nextC != "\"") {
if (nextC.$c() > 0 ) {
x.back$();
}break;
}}if (c.$c() == 0  || c == "\n"  || c == "\r" ) {
throw x.syntaxError$S("Missing close quote '" + q + "'." );
}sb.append$C(c);
}
return sb.toString();
case 44:
x.back$();
return "";
default:
x.back$();
return x.nextTo$C(",");
}
}, 1);

Clazz.newMeth(C$, 'rowToJSONArray$org_json_JSONTokener', function (x) {
var ja=Clazz.new_($I$(2));
for (; ; ) {
var value=C$.getValue$org_json_JSONTokener(x);
var c=x.next$();
if (value == null  || (ja.length$() == 0 && value.length$() == 0  && c != "," ) ) {
return null;
}ja.put$O(value);
for (; ; ) {
if (c == ",") {
break;
}if (c != " ") {
if (c == "\n" || c == "\r"  || c.$c() == 0  ) {
return ja;
}throw x.syntaxError$S("Bad character '" + c + "' (" + c.$c() + ")." );
}c=x.next$();
}
}
}, 1);

Clazz.newMeth(C$, 'rowToJSONObject$org_json_JSONArray$org_json_JSONTokener', function (names, x) {
var ja=C$.rowToJSONArray$org_json_JSONTokener(x);
return ja != null  ? ja.toJSONObject$org_json_JSONArray(names) : null;
}, 1);

Clazz.newMeth(C$, 'rowToString$org_json_JSONArray', function (ja) {
var sb=Clazz.new_($I$(3));
for (var i=0; i < ja.length$(); i+=1) {
if (i > 0) {
sb.append$C(",");
}var object=ja.opt$I(i);
if (object != null ) {
var string=object.toString();
if (string.length$() > 0 && (string.indexOf$I(",") >= 0 || string.indexOf$I("\n") >= 0  || string.indexOf$I("\r") >= 0  || string.indexOf$I(0) >= 0  || string.charAt$I(0) == "\"" ) ) {
sb.append$C("\"");
var length=string.length$();
for (var j=0; j < length; j+=1) {
var c=string.charAt$I(j);
if (c >= " " && c != "\"" ) {
sb.append$C(c);
}}
sb.append$C("\"");
} else {
sb.append$S(string);
}}}
sb.append$C("\n");
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'toJSONArray$S', function (string) {
return C$.toJSONArray$org_json_JSONTokener(Clazz.new_($I$(4).c$$S,[string]));
}, 1);

Clazz.newMeth(C$, 'toJSONArray$org_json_JSONTokener', function (x) {
return C$.toJSONArray$org_json_JSONArray$org_json_JSONTokener(C$.rowToJSONArray$org_json_JSONTokener(x), x);
}, 1);

Clazz.newMeth(C$, 'toJSONArray$org_json_JSONArray$S', function (names, string) {
return C$.toJSONArray$org_json_JSONArray$org_json_JSONTokener(names, Clazz.new_($I$(4).c$$S,[string]));
}, 1);

Clazz.newMeth(C$, 'toJSONArray$org_json_JSONArray$org_json_JSONTokener', function (names, x) {
if (names == null  || names.length$() == 0 ) {
return null;
}var ja=Clazz.new_($I$(2));
for (; ; ) {
var jo=C$.rowToJSONObject$org_json_JSONArray$org_json_JSONTokener(names, x);
if (jo == null ) {
break;
}ja.put$O(jo);
}
if (ja.length$() == 0) {
return null;
}return ja;
}, 1);

Clazz.newMeth(C$, 'toString$org_json_JSONArray', function (ja) {
var jo=ja.optJSONObject$I(0);
if (jo != null ) {
var names=jo.names$();
if (names != null ) {
return C$.rowToString$org_json_JSONArray(names) + C$.toString$org_json_JSONArray$org_json_JSONArray(names, ja);
}}return null;
}, 1);

Clazz.newMeth(C$, 'toString$org_json_JSONArray$org_json_JSONArray', function (names, ja) {
if (names == null  || names.length$() == 0 ) {
return null;
}var sb=Clazz.new_($I$(1));
for (var i=0; i < ja.length$(); i+=1) {
var jo=ja.optJSONObject$I(i);
if (jo != null ) {
sb.append$S(C$.rowToString$org_json_JSONArray(jo.toJSONArray$org_json_JSONArray(names)));
}}
return sb.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
