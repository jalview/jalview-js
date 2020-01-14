(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'org.json.JSONObject','org.json.JSONTokener','org.json.Cookie','StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CookieList");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toJSONObject$S', function (string) {
var jo=Clazz.new_($I$(1));
var x=Clazz.new_($I$(2).c$$S,[string]);
while (x.more$()){
var name=$I$(3).unescape$S(x.nextTo$C("="));
x.next$C("=");
jo.put$S$O(name, $I$(3).unescape$S(x.nextTo$C(";")));
x.next$();
}
return jo;
}, 1);

Clazz.newMeth(C$, 'toString$org_json_JSONObject', function (jo) {
var b=false;
var sb=Clazz.new_($I$(4));
for (var key, $key = jo.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=jo.opt$S(key);
if (!$I$(1).NULL.equals$O(value)) {
if (b) {
sb.append$C(";");
}sb.append$S($I$(3).escape$S(key));
sb.append$S("=");
sb.append$S($I$(3).escape$S(value.toString()));
b=true;
}}
return sb.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
