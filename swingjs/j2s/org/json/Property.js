(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'org.json.JSONObject','java.util.Properties']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Property");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toJSONObject$java_util_Properties', function (properties) {
var jo=Clazz.new_($I$(1));
if (properties != null  && !properties.isEmpty$() ) {
var enumProperties=properties.propertyNames$();
while (enumProperties.hasMoreElements$()){
var name=enumProperties.nextElement$();
jo.put$S$O(name, properties.getProperty$S(name));
}
}return jo;
}, 1);

Clazz.newMeth(C$, 'toProperties$org_json_JSONObject', function (jo) {
var properties=Clazz.new_($I$(2));
if (jo != null ) {
for (var key, $key = jo.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=jo.opt$S(key);
if (!$I$(1).NULL.equals$O(value)) {
properties.put$TK$TV(key, value.toString());
}}
}return properties;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
