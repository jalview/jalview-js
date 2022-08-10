(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'org.json.JSONObject','java.util.Properties']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Property");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toJSONObject$java_util_Properties',  function (properties) {
var jo=Clazz.new_($I$(1,1));
if (properties != null  && !properties.isEmpty$() ) {
var enumProperties=properties.propertyNames$();
while (enumProperties.hasMoreElements$()){
var name=enumProperties.nextElement$();
jo.put$S$O(name, properties.getProperty$S(name));
}
}return jo;
}, 1);

Clazz.newMeth(C$, 'toProperties$org_json_JSONObject',  function (jo) {
var properties=Clazz.new_($I$(2,1));
if (jo != null ) {
for (var key, $key = jo.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=jo.opt$S(key);
if (!$I$(1).NULL.equals$O(value)) {
properties.put$O$O(key, value.toString());
}}
}return properties;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:59 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
