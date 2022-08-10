(function(){var P$=Clazz.newPackage("jalview.ws.rest.params"),I$=[[0,'org.apache.http.entity.mime.content.StringBody','java.util.ArrayList','java.net.URLEncoder','Error','jalview.util.MessageManager']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JobConstant", null, 'jalview.ws.rest.InputType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value']]]

Clazz.newMeth(C$, 'c$$S$S',  function (param, val) {
;C$.superclazz.c$$ClassA.apply(this,[null]);C$.$init$.apply(this);
this.token=param;
this.value=val;
}, 1);

Clazz.newMeth(C$, 'formatForInput$jalview_ws_rest_RestJob',  function (rj) {
return Clazz.new_($I$(1,1).c$$S,[this.value]);
});

Clazz.newMeth(C$, 'getURLEncodedParameter$',  function () {
var prm=Clazz.new_($I$(2,1));
if (this.value != null  && this.value.length$() > 0 ) {
try {
prm.add$O($I$(3).encode$S$S(this.value, "UTF-8"));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.UnsupportedEncodingException")){
throw Clazz.new_([$I$(5,"formatMessage$S$SA",["error.couldnt_encode_as_utf8", Clazz.array(String, -1, [this.value])]), ex],$I$(4,1).c$$S$Throwable);
} else {
throw ex;
}
}
}return prm;
});

Clazz.newMeth(C$, 'getURLtokenPrefix$',  function () {
return "";
});

Clazz.newMeth(C$, 'configureFromURLtokenString$java_util_List$StringBuffer',  function (tokenstring, warnings) {
if (tokenstring.size$() > 1) {
warnings.append$S("IMPLEMENTATION ERROR: Constant POST parameters cannot have more than one value.");
return false;
}if (tokenstring.size$() == 1) {
this.value=tokenstring.get$I(0);
}return true;
});

Clazz.newMeth(C$, 'configureProperty$S$S$StringBuffer',  function (tok, val, warnings) {
warnings.append$S("IMPLEMENTATION ERROR: No Properties to configure for a Constant parameter.");
return false;
});

Clazz.newMeth(C$, 'getOptions$',  function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
