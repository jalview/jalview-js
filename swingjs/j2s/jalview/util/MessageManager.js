(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.javascript.log4j.Logger','java.util.HashSet','java.util.Locale',['java.util.ResourceBundle','.Control'],'java.util.ResourceBundle','java.text.MessageFormat']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MessageManager");
C$.rb=null;
C$.log=null;
C$.loc=null;
C$.reportedMissing=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.log=$I$(1).getLogger$S(Clazz.getClass(C$).getCanonicalName$());
C$.reportedMissing=Clazz.new_($I$(2));
{
try {
C$.loc=$I$(3).getDefault$();
C$.log.info$O("Getting messages for lang: " + C$.loc);
var control=$I$(4).getControl$java_util_List($I$(4).FORMAT_PROPERTIES);
C$.rb=$I$(5).getBundle$S$java_util_Locale$java_util_ResourceBundle_Control("lang.Messages", C$.loc, control);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var q = e$$;
{
C$.log.warn$O("Exception when initting Locale for i18n messages\n" + q.getMessage$());
q.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var v = e$$;
{
C$.log.warn$O("Error when initting Locale for i18n messages\n" + v.getMessage$());
v.printStackTrace$();
}
} else {
throw e$$;
}
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getString$S', function (key) {
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

Clazz.newMeth(C$, 'getLocale$', function () {
return C$.loc;
}, 1);

Clazz.newMeth(C$, 'formatMessage$S$OA', function (key, params) {
return $I$(6).format$S$OA(C$.getString$S(key), params);
}, 1);

Clazz.newMeth(C$, 'formatMessage$S$SA', function (key, params) {
return $I$(6).format$S$OA(C$.getString$S(key), params);
}, 1);

Clazz.newMeth(C$, 'getStringOrReturn$S$S', function (keyroot, name) {
var smkey=keyroot + name.toLowerCase$().replaceAll$S$S(" ", "");
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

Clazz.newMeth(C$, 'logWarning$S$S', function (key, msg) {
if (!C$.reportedMissing.contains$O(key)) {
C$.reportedMissing.add$TE(key);
C$.log.info$O(msg);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
