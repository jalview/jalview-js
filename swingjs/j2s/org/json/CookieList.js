(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'org.json.JSONObject','org.json.JSONTokener','org.json.Cookie','StringBuilder']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CookieList");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toJSONObject$S', function (string) {
var jo=Clazz.new_($I$(1,1));
var x=Clazz.new_($I$(2,1).c$$S,[string]);
while (x.more$()){
var name=$I$(3,"unescape$S",[x.nextTo$C("=")]);
x.next$C("=");
jo.put$S$O(name, $I$(3,"unescape$S",[x.nextTo$C(";")]));
x.next$();
}
return jo;
}, 1);

Clazz.newMeth(C$, 'toString$org_json_JSONObject', function (jo) {
var b=false;
var sb=Clazz.new_($I$(4,1));
for (var key, $key = jo.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=jo.opt$S(key);
if (!$I$(1).NULL.equals$O(value)) {
if (b) {
sb.append$C(";");
}sb.append$S($I$(3).escape$S(key));
sb.append$S("=");
sb.append$S($I$(3,"escape$S",[value.toString()]));
b=true;
}}
return sb.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
