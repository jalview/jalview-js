(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.log.JLoggerLog4j','java.util.HashSet','java.util.Locale',['java.util.ResourceBundle','.Control'],'java.util.ResourceBundle','java.text.MessageFormat']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MessageManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['rb','java.util.ResourceBundle','log','jalview.log.JLoggerLog4j','loc','java.util.Locale','reportedMissing','java.util.Set']]]

Clazz.newMeth(C$, 'getString$S',  function (key) {
var value="[missing key] " + key;
try {
value=C$.rb.getString$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var msg="I18N missing: " + C$.loc + "\t" + key ;
C$.logWarning$S$S(key, msg);
} else {
throw e;
}
}
return value;
}, 1);

Clazz.newMeth(C$, 'getLocale$',  function () {
return C$.loc;
}, 1);

Clazz.newMeth(C$, 'formatMessage$S$OA',  function (key, params) {
try {
return $I$(6,"format$S$OA",[C$.rb.getString$S(key), params]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.log.warn$S("I18N missing: " + C$.loc + "\t" + key );
} else {
throw e;
}
}
var value="[missing key] " + key + "" ;
for (var p, $p = 0, $$p = params; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
value+=" '" + p.toString() + "'" ;
}
return value;
}, 1);

Clazz.newMeth(C$, 'formatMessage$S$SA',  function (key, params) {
return C$.formatMessage$S$OA(key, params);
}, 1);

Clazz.newMeth(C$, 'getStringOrReturn$S$S',  function (keyroot, name) {
var smkey=keyroot + name.toLowerCase$java_util_Locale($I$(3).ROOT).replaceAll$S$S(" ", "");
try {
name=C$.rb.getString$S(smkey);
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
var msg="I18N missing key with root " + keyroot + ": " + C$.loc + "\t" + smkey ;
C$.logWarning$S$S(smkey, msg);
} else {
throw x;
}
}
return name;
}, 1);

Clazz.newMeth(C$, 'logWarning$S$S',  function (key, msg) {
if (!C$.reportedMissing.contains$O(key)) {
C$.reportedMissing.add$O(key);
C$.log.info$S(msg);
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.log=$I$(1,"getLogger$S",[Clazz.getClass(C$).getCanonicalName$()]);
C$.reportedMissing=Clazz.new_($I$(2,1));
{
try {
C$.loc=$I$(3).getDefault$();
C$.log.info$S("Getting messages for lang: " + C$.loc);
var control=$I$(4,"getControl$java_util_List",[$I$(4).FORMAT_PROPERTIES]);
C$.rb=$I$(5).getBundle$S$java_util_Locale$java_util_ResourceBundle_Control("lang.Messages", C$.loc, control);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var q = e$$;
{
C$.log.warn$S("Exception when initting Locale for i18n messages\n" + q.getMessage$());
q.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var v = e$$;
{
C$.log.warn$S("Error when initting Locale for i18n messages\n" + v.getMessage$());
v.printStackTrace$();
}
} else {
throw e$$;
}
}
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
