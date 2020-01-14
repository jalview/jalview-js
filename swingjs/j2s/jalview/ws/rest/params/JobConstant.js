(function(){var P$=Clazz.newPackage("jalview.ws.rest.params"),I$=[[0,'org.apache.http.entity.mime.content.StringBody','java.util.ArrayList','java.net.URLEncoder','Error','jalview.util.MessageManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JobConstant", null, 'jalview.ws.rest.InputType');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (param, val) {
C$.superclazz.c$$ClassA.apply(this, [null]);
C$.$init$.apply(this);
this.token=param;
this.value=val;
}, 1);

Clazz.newMeth(C$, 'formatForInput$jalview_ws_rest_RestJob', function (rj) {
return Clazz.new_($I$(1).c$$S,[this.value]);
});

Clazz.newMeth(C$, 'getURLEncodedParameter$', function () {
var prm=Clazz.new_($I$(2));
if (this.value != null  && this.value.length$() > 0 ) {
try {
prm.add$TE($I$(3).encode$S$S(this.value, "UTF-8"));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.UnsupportedEncodingException")){
throw Clazz.new_($I$(4).c$$S$Throwable,[$I$(5).formatMessage$S$SA("error.couldnt_encode_as_utf8", Clazz.array(String, -1, [this.value])), ex]);
} else {
throw ex;
}
}
}return prm;
});

Clazz.newMeth(C$, 'getURLtokenPrefix$', function () {
return "";
});

Clazz.newMeth(C$, 'configureFromURLtokenString$java_util_List$StringBuffer', function (tokenstring, warnings) {
if (tokenstring.size$() > 1) {
warnings.append$S("IMPLEMENTATION ERROR: Constant POST parameters cannot have more than one value.");
return false;
}if (tokenstring.size$() == 1) {
this.value=tokenstring.get$I(0);
}return true;
});

Clazz.newMeth(C$, 'configureProperty$S$S$StringBuffer', function (tok, val, warnings) {
warnings.append$S("IMPLEMENTATION ERROR: No Properties to configure for a Constant parameter.");
return false;
});

Clazz.newMeth(C$, 'getOptions$', function () {
return Clazz.new_($I$(2));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
