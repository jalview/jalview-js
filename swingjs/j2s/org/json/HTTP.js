(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'org.json.JSONObject','org.json.HTTPTokener','java.util.Locale','StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HTTP");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toJSONObject$S', function (string) {
var jo=Clazz.new_($I$(1));
var x=Clazz.new_($I$(2).c$$S,[string]);
var token;
token=x.nextToken$();
if (token.toUpperCase$java_util_Locale($I$(3).ROOT).startsWith$S("HTTP")) {
jo.put$S$O("HTTP-Version", token);
jo.put$S$O("Status-Code", x.nextToken$());
jo.put$S$O("Reason-Phrase", x.nextTo$C("\u0000"));
x.next$();
} else {
jo.put$S$O("Method", token);
jo.put$S$O("Request-URI", x.nextToken$());
jo.put$S$O("HTTP-Version", x.nextToken$());
}while (x.more$()){
var name=x.nextTo$C(":");
x.next$C(":");
jo.put$S$O(name, x.nextTo$C("\u0000"));
x.next$();
}
return jo;
}, 1);

Clazz.newMeth(C$, 'toString$org_json_JSONObject', function (jo) {
var sb=Clazz.new_($I$(4));
if (jo.has$S("Status-Code") && jo.has$S("Reason-Phrase") ) {
sb.append$S(jo.getString$S("HTTP-Version"));
sb.append$C(" ");
sb.append$S(jo.getString$S("Status-Code"));
sb.append$C(" ");
sb.append$S(jo.getString$S("Reason-Phrase"));
} else if (jo.has$S("Method") && jo.has$S("Request-URI") ) {
sb.append$S(jo.getString$S("Method"));
sb.append$C(" ");
sb.append$C("\"");
sb.append$S(jo.getString$S("Request-URI"));
sb.append$C("\"");
sb.append$C(" ");
sb.append$S(jo.getString$S("HTTP-Version"));
} else {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Not enough material for an HTTP header."]);
}sb.append$S("\r\n");
for (var key, $key = jo.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=jo.optString$S(key);
if (!"HTTP-Version".equals$O(key) && !"Status-Code".equals$O(key) && !"Reason-Phrase".equals$O(key) && !"Method".equals$O(key) && !"Request-URI".equals$O(key) && !$I$(1).NULL.equals$O(value)  ) {
sb.append$S(key);
sb.append$S(": ");
sb.append$S(jo.optString$S(key));
sb.append$S("\r\n");
}}
sb.append$S("\r\n");
return sb.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
