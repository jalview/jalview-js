(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'StringBuilder','org.json.JSONObject','org.json.JSONTokener','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Cookie");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'escape$S', function (string) {
var c;
var s=string.trim$();
var length=s.length$();
var sb=Clazz.new_($I$(1).c$$I,[length]);
for (var i=0; i < length; i+=1) {
c=s.charAt$I(i);
if (c < " " || c == "+"  || c == "%"  || c == "="  || c == ";" ) {
sb.append$C("%");
sb.append$C(Character.forDigit$I$I(String.fromCharCode(((c.$c() >>> 4) & 15)).$c(), 16));
sb.append$C(Character.forDigit$I$I(String.fromCharCode((c.$c() & 15)).$c(), 16));
} else {
sb.append$C(c);
}}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'toJSONObject$S', function (string) {
var name;
var jo=Clazz.new_($I$(2));
var value;
var x=Clazz.new_($I$(3).c$$S,[string]);
jo.put$S$O("name", x.nextTo$C("="));
x.next$C("=");
jo.put$S$O("value", x.nextTo$C(";"));
x.next$();
while (x.more$()){
name=C$.unescape$S(x.nextTo$S("=;"));
if (x.next$() != "=") {
if (name.equals$O("secure")) {
value=$I$(4).TRUE;
} else {
throw x.syntaxError$S("Missing \'=\' in cookie parameter.");
}} else {
value=C$.unescape$S(x.nextTo$C(";"));
x.next$();
}jo.put$S$O(name, value);
}
return jo;
}, 1);

Clazz.newMeth(C$, 'toString$org_json_JSONObject', function (jo) {
var sb=Clazz.new_($I$(1));
sb.append$S(C$.escape$S(jo.getString$S("name")));
sb.append$S("=");
sb.append$S(C$.escape$S(jo.getString$S("value")));
if (jo.has$S("expires")) {
sb.append$S(";expires=");
sb.append$S(jo.getString$S("expires"));
}if (jo.has$S("domain")) {
sb.append$S(";domain=");
sb.append$S(C$.escape$S(jo.getString$S("domain")));
}if (jo.has$S("path")) {
sb.append$S(";path=");
sb.append$S(C$.escape$S(jo.getString$S("path")));
}if (jo.optBoolean$S("secure")) {
sb.append$S(";secure");
}return sb.toString();
}, 1);

Clazz.newMeth(C$, 'unescape$S', function (string) {
var length=string.length$();
var sb=Clazz.new_($I$(1).c$$I,[length]);
for (var i=0; i < length; ++i) {
var c=string.charAt$I(i);
if (c == "+") {
c=" ";
} else if (c == "%" && i + 2 < length ) {
var d=$I$(3).dehexchar$C(string.charAt$I(i + 1));
var e=$I$(3).dehexchar$C(string.charAt$I(i + 2));
if (d >= 0 && e >= 0 ) {
c=String.fromCharCode((d * 16 + e));
i+=2;
}}sb.append$C(c);
}
return sb.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
