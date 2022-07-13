(function(){var P$=Clazz.newPackage("jalview.ws.rest"),p$1={},I$=[[0,'java.util.regex.Pattern',['jalview.ws.rest.RestServiceDescription','.UIinfo'],'java.util.HashMap','java.util.ArrayList','jalview.ws.rest.params.Alignment','jalview.ws.rest.params.AnnotationFile','jalview.ws.rest.params.SeqGroupIndexVector','StringBuffer','jalview.util.StringUtils','java.util.StringTokenizer',['jalview.io.packed.DataProvider','.JvDataType'],'java.util.Hashtable','java.net.URL','jalview.ws.rest.params.SeqIdVector','jalview.ws.rest.params.SeqVector','jalview.ws.rest.params.Tree','jalview.ws.rest.InputType']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RestServiceDescription", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['UIinfo',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.details=Clazz.new_($I$(2,1),[this, null]);
this.inputParams=Clazz.new_($I$(3,1));
this.invalidMessage=null;
this.hseparable=false;
this.vseparable=false;
this.gapCharacter="-";
this.resultData=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['Z',['aligndata','annotdata','partitiondata','hseparable','vseparable'],'C',['gapCharacter'],'S',['postUrl','urlSuffix','invalidMessage'],'O',['details','jalview.ws.rest.RestServiceDescription.UIinfo','inputParams','java.util.Map','resultData','java.util.List']]
,['O',['PARAM_ENCODED_URL_PATTERN','java.util.regex.Pattern']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S$S$java_util_Map$Z$Z$C',  function (action, description, name, postUrl, urlSuffix, inputParams, hseparable, vseparable, gapCharacter) {
;C$.$init$.apply(this);
this.details=Clazz.new_($I$(2,1),[this, null]);
this.details.Action=action == null  ? "" : action;
this.details.description=description == null  ? "" : description;
this.details.Name=name == null  ? "" : name;
this.postUrl=postUrl == null  ? "" : postUrl;
this.urlSuffix=urlSuffix == null  ? "" : urlSuffix;
if (inputParams != null ) {
this.inputParams=inputParams;
}this.hseparable=hseparable;
this.vseparable=vseparable;
this.gapCharacter=gapCharacter;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (o == null  || !(Clazz.instanceOf(o, "jalview.ws.rest.RestServiceDescription")) ) {
return false;
}var other=o;
var diff=(this.gapCharacter != other.gapCharacter);
diff=!!(diff|(this.vseparable != other.vseparable ));
diff=!!(diff|(this.hseparable != other.hseparable ));
diff=!!(diff|(!(this.urlSuffix == null  && other.urlSuffix == null   || (this.urlSuffix != null  && other.urlSuffix != null   && this.urlSuffix.equals$O(other.urlSuffix) ) )));
diff=!!(diff|(!this.details.Name.equals$O(other.details.Name)));
diff=!!(diff|(!this.details.Action.equals$O(other.details.Action)));
diff=!!(diff|(!this.details.description.equals$O(other.details.description)));
return !diff;
});

Clazz.newMeth(C$, 'getAction$',  function () {
return this.details.getAction$();
});

Clazz.newMeth(C$, 'setAction$S',  function (action) {
this.details.setAction$S(action);
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.details.getName$();
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.details.setName$S(name);
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.details.getDescription$();
});

Clazz.newMeth(C$, 'setDescription$S',  function (description) {
this.details.setDescription$S(description);
});

Clazz.newMeth(C$, 'getPostUrl$',  function () {
return this.postUrl;
});

Clazz.newMeth(C$, 'setPostUrl$S',  function (postUrl) {
this.postUrl=postUrl;
});

Clazz.newMeth(C$, 'getUrlSuffix$',  function () {
return this.urlSuffix;
});

Clazz.newMeth(C$, 'setUrlSuffix$S',  function (urlSuffix) {
this.urlSuffix=urlSuffix;
});

Clazz.newMeth(C$, 'getInputParams$',  function () {
return this.inputParams;
});

Clazz.newMeth(C$, 'setInputParams$java_util_Map',  function (inputParams) {
this.inputParams=inputParams;
});

Clazz.newMeth(C$, 'setHseparable$Z',  function (hseparable) {
this.hseparable=hseparable;
});

Clazz.newMeth(C$, 'setVseparable$Z',  function (vseparable) {
this.vseparable=vseparable;
});

Clazz.newMeth(C$, 'setGapCharacter$C',  function (gapCharacter) {
this.gapCharacter=gapCharacter;
});

Clazz.newMeth(C$, 'setInputParam$jalview_ws_rest_InputType',  function (it) {
this.inputParams.put$O$O(it.token, it);
});

Clazz.newMeth(C$, 'removeInputParam$jalview_ws_rest_InputType',  function (it) {
this.inputParams.remove$O(it.token);
});

Clazz.newMeth(C$, 'setInvolvesFlags$',  function () {
this.aligndata=this.inputInvolves$Class(Clazz.getClass($I$(5)));
this.annotdata=this.inputInvolves$Class(Clazz.getClass($I$(6)));
this.partitiondata=this.inputInvolves$Class(Clazz.getClass($I$(7)));
});

Clazz.newMeth(C$, 'c$$S',  function (link) {
;C$.$init$.apply(this);
var warnings=Clazz.new_($I$(8,1));
if (!this.configureFromEncodedString$S$StringBuffer(link, warnings)) {
if (warnings.length$() > 0) {
this.invalidMessage=warnings.toString();
}}}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_rest_RestServiceDescription',  function (toedit) {
C$.c$$S.apply(this, [toedit.toString()]);
}, 1);

Clazz.newMeth(C$, 'getInvalidMessage$',  function () {
return this.invalidMessage;
});

Clazz.newMeth(C$, 'isValid$',  function () {
return this.invalidMessage == null ;
});

Clazz.newMeth(C$, 'configureFromServiceInputProperties$S$StringBuffer',  function (propList, warnings) {
var props=$I$(9).separatorListToArray$S$S(propList, ",");
if (props == null ) {
return true;
};var valid=true;
var val=null;
var l=warnings.length$();
var i;
for (var prop, $prop = 0, $$prop = props; $prop<$$prop.length&&((prop=($$prop[$prop])),1);$prop++) {
if ((i=prop.indexOf$S("=")) > -1) {
val=prop.substring$I(i + 1);
if (val.startsWith$S("\'") && val.endsWith$S("\'") ) {
val=val.substring$I$I(1, val.length$() - 1);
}prop=prop.substring$I$I(0, i);
}if (prop.equals$O("hseparable")) {
this.hseparable=true;
}if (prop.equals$O("vseparable")) {
this.vseparable=true;
}if (prop.equals$O("gapCharacter")) {
if (val == null  || val.length$() == 0  || val.length$() > 1 ) {
valid=false;
warnings.append$S((warnings.length$() > 0 ? "\n" : "") + ("Invalid service property: gapCharacter=' ' (single character) - was given '" + val + "'" ));
} else {
this.gapCharacter=val.charAt$I(0);
}}if (prop.equals$O("returns")) {
p$1._configureOutputFormatFrom$S$StringBuffer.apply(this, [val, warnings]);
}}
return valid && (l == warnings.length$()) ;
}, p$1);

Clazz.newMeth(C$, '_genOutputFormatString',  function () {
var buff="";
if (this.resultData == null ) {
return "";
}for (var type, $type = this.resultData.iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
if (buff.length$() > 0) {
buff+=";";
}buff+=type.toString();
}
return buff;
}, p$1);

Clazz.newMeth(C$, '_configureOutputFormatFrom$S$StringBuffer',  function (outstring, warnings) {
if (outstring.indexOf$S(";") == -1) {
outstring=outstring + ";";
}var st=Clazz.new_($I$(10,1).c$$S$S,[outstring, ";"]);
var tok="";
this.resultData=Clazz.new_($I$(4,1));
while (st.hasMoreTokens$()){
try {
this.resultData.add$O($I$(11,"valueOf$S",[tok=st.nextToken$()]));
} catch (x) {
if (Clazz.exceptionOf(x,"java.util.NoSuchElementException")){
warnings.append$S("Invalid result type: '" + tok + "' (must be one of: " );
var sep="";
for (var vl, $vl = 0, $$vl = $I$(11).values$(); $vl<$$vl.length&&((vl=($$vl[$vl])),1);$vl++) {
warnings.append$S(sep);
warnings.append$S(vl.toString());
sep=" ,";
}
warnings.append$S(" separated by semi-colons)\n");
} else {
throw x;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'getServiceIOProperties',  function () {
var vls=Clazz.new_($I$(4,1));
if (this.isHseparable$()) {
vls.add$O("hseparable");
};if (this.isVseparable$()) {
vls.add$O("vseparable");
};vls.add$O( String.instantialize("gapCharacter='" + this.gapCharacter + "'" ));
vls.add$O( String.instantialize("returns='" + p$1._genOutputFormatString.apply(this, []) + "'" ));
return $I$(9,"arrayToSeparatorList$SA$S",[vls.toArray$OA(Clazz.array(String, [0])), ","]);
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
var result=Clazz.new_($I$(8,1));
result.append$S("|");
result.append$S(this.details.Name);
result.append$C("|");
result.append$S(this.details.Action);
result.append$C("|");
if (this.details.description != null ) {
result.append$S(this.details.description);
};result.append$C("|");
result.append$S(p$1.getServiceIOProperties.apply(this, []));
if (this.urlSuffix != null  && this.urlSuffix.length$() > 0 ) {
result.append$C("|");
result.append$S(this.urlSuffix);
}result.append$C("|");
result.append$S(p$1.getInputParamEncodedUrl.apply(this, []));
return result.toString();
});

Clazz.newMeth(C$, 'configureFromEncodedString$S$StringBuffer',  function (encoding, warnings) {
var list=$I$(9).separatorListToArray$S$S(encoding, "|");
var nextpos=this.parseServiceList$SA$StringBuffer$I(list, warnings, 0);
if (nextpos > 0) {
return true;
}return false;
});

Clazz.newMeth(C$, 'parseServiceList$SA$StringBuffer$I',  function (list, warnings, p) {
var invalid=false;
while (list[p] != null  && list[p].trim$().length$() == 0 ){
++p;
}
this.details.Name=list[p];
this.details.Action=list[p + 1];
this.details.description=list[p + 2];
invalid=!!(invalid|(!p$1.configureFromServiceInputProperties$S$StringBuffer.apply(this, [list[p + 3], warnings])));
if (list.length - p > 5 && list[p + 5] != null   && list[p + 5].trim$().length$() > 5 ) {
this.urlSuffix=list[p + 4];
invalid=!!(invalid|(!p$1.configureFromInputParamEncodedUrl$S$StringBuffer.apply(this, [list[p + 5], warnings])));
p+=6;
} else {
if (list.length - p > 4 && list[p + 4] != null   && list[p + 4].trim$().length$() > 5 ) {
this.urlSuffix=null;
invalid=!!(invalid|(!p$1.configureFromInputParamEncodedUrl$S$StringBuffer.apply(this, [list[p + 4], warnings])));
p+=5;
}}return invalid ? -1 : p;
});

Clazz.newMeth(C$, 'getInputParamEncodedUrl',  function () {
var url=Clazz.new_($I$(8,1));
if (this.postUrl == null  || this.postUrl.length$() < 5 ) {
return "";
}url.append$S(this.postUrl);
var appendChar=(this.postUrl.indexOf$S("?") > -1) ? "&" : "?";
var consts=true;
do {
for (var param, $param = this.inputParams.entrySet$().iterator$(); $param.hasNext$()&&((param=($param.next$())),1);) {
var vals=param.getValue$().getURLEncodedParameter$();
if (param.getValue$().isConstant$()) {
if (consts) {
url.append$C(appendChar);
appendChar="&";
url.append$S(param.getValue$().token);
if (vals.size$() == 1) {
url.append$S("=");
url.append$S(vals.get$I(0));
}}} else {
if (!consts) {
url.append$C(appendChar);
appendChar="&";
url.append$S(param.getValue$().token);
url.append$S("=");
url.append$S("$");
url.append$S(param.getValue$().getURLtokenPrefix$());
url.append$S(":");
url.append$S($I$(9,"arrayToSeparatorList$SA$S",[vals.toArray$OA(Clazz.array(String, [0])), ","]));
url.append$S("$");
}}}
} while (!(consts=!consts));
return url.toString();
}, p$1);

Clazz.newMeth(C$, 'configureFromInputParamEncodedUrl$S$StringBuffer',  function (ipurl, warnings) {
var valid=true;
var lastp=0;
var url= String.instantialize();
var prms=C$.PARAM_ENCODED_URL_PATTERN.matcher$CharSequence(ipurl);
var iparams=Clazz.new_($I$(12,1));
var jinput;
while (prms.find$()){
if (lastp < prms.start$I(0)) {
url+=ipurl.substring$I$I(lastp, prms.start$I(0));
lastp=prms.end$I(0) + 1;
}var sep=prms.group$I(1);
var tok=prms.group$I(2);
var iprm=prms.group$I(3);
var colon=iprm.indexOf$S(":");
var iprmparams="";
if (colon > -1) {
iprmparams=iprm.substring$I(colon + 1);
iprm=iprm.substring$I$I(0, colon);
}valid=C$.parseTypeString$S$S$S$S$java_util_Map$StringBuffer(prms.group$I(0), tok, iprm, iprmparams, iparams, warnings);
}
if (valid) {
try {
var u=Clazz.new_($I$(13,1).c$$S,[url]);
this.postUrl=url;
this.inputParams=iparams;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
warnings.append$S("Failed to parse '" + url + "' as a URL.\n" );
valid=false;
} else {
throw e;
}
}
}return valid;
}, p$1);

Clazz.newMeth(C$, 'getInputTypes$',  function () {
return Clazz.array(Class, -1, [Clazz.getClass($I$(5)), Clazz.getClass($I$(6)), Clazz.getClass($I$(7)), Clazz.getClass($I$(14)), Clazz.getClass($I$(15)), Clazz.getClass($I$(16))]);
}, 1);

Clazz.newMeth(C$, 'parseTypeString$S$S$S$S$java_util_Map$StringBuffer',  function (fullstring, tok, iprm, iprmparams, iparams, warnings) {
var valid=true;
var jinput;
for (var type, $type = 0, $$type = C$.getInputTypes$(); $type<$$type.length&&((type=($$type[$type])),1);$type++) {
try {
jinput=(type.getConstructor$ClassA(Clazz.array(Class, -1, [])).newInstance$OA(Clazz.array(java.lang.Object, -1, [])));
if (iprm.equalsIgnoreCase$S(jinput.getURLtokenPrefix$())) {
var al=Clazz.new_($I$(4,1));
for (var prprm, $prprm = 0, $$prprm = $I$(9).separatorListToArray$S$S(iprmparams, ","); $prprm<$$prprm.length&&((prprm=($$prprm[$prprm])),1);$prprm++) {
al.add$O(prprm.trim$());
}
if (!jinput.configureFromURLtokenString$java_util_List$StringBuffer(al, warnings)) {
valid=false;
warnings.append$S("Failed to parse '" + fullstring + "' as a " + jinput.getURLtokenPrefix$() + " input tag.\n" );
} else {
jinput.token=tok;
iparams.put$O$O(tok, jinput);
valid=true;
}break;
}} catch (thr) {
}
;}
return valid;
}, 1);

Clazz.newMeth(C$, 'formStrings$jalview_datamodel_SequenceIA',  function (seqs) {
var idset=Clazz.array(String, [2, seqs.length]);
for (var i=0; i < seqs.length; i++) {
idset[0][i]=seqs[i].getName$();
idset[1][i]=seqs[i].getSequenceAsString$();
}
return idset;
}, 1);

Clazz.newMeth(C$, 'isHseparable$',  function () {
return this.hseparable;
});

Clazz.newMeth(C$, 'isVseparable$',  function () {
return this.vseparable;
});

Clazz.newMeth(C$, 'inputInvolves$Class',  function (class1) {
Clazz.assert(C$, this, function(){return (Clazz.getClass($I$(17)).isAssignableFrom$Class(class1))});
for (var val, $val = this.inputParams.values$().iterator$(); $val.hasNext$()&&((val=($val.next$())),1);) {
if (class1.isAssignableFrom$Class(val.getClass$())) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getGapCharacter$',  function () {
return this.gapCharacter;
});

Clazz.newMeth(C$, 'getDecoratedResultUrl$S',  function (jobId) {
return jobId + this.urlSuffix;
});

Clazz.newMeth(C$, 'addResultDatatype$jalview_io_packed_DataProvider_JvDataType',  function (dt) {
if (this.resultData == null ) {
this.resultData=Clazz.new_($I$(4,1));
}this.resultData.add$O(dt);
});

Clazz.newMeth(C$, 'removeRsultDatatype$jalview_io_packed_DataProvider_JvDataType',  function (dt) {
if (this.resultData != null ) {
return this.resultData.remove$O(dt);
}return false;
});

Clazz.newMeth(C$, 'getResultDataTypes$',  function () {
return this.resultData;
});

Clazz.newMeth(C$, 'parseDescriptions$S',  function (services) {
var list=$I$(9).separatorListToArray$S$S(services, "|");
var svcparsed=Clazz.new_($I$(4,1));
var p=0;
var lastp=0;
var warnings=Clazz.new_($I$(8,1));
do {
var rsd=Clazz.new_(C$);
p=rsd.parseServiceList$SA$StringBuffer$I(list, warnings, lastp=p);
if (p > lastp && rsd.isValid$() ) {
svcparsed.add$O(rsd);
} else {
throw Clazz.new_(Clazz.load('Exception').c$$S,["Failed to parse user defined RSBS services from :" + services + "\nFirst error was encountered at token " + lastp + " starting " + list[lastp] + ":\n" + rsd.getInvalidMessage$() ]);
}} while (p < lastp && p < list.length - 1 );
return svcparsed;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.PARAM_ENCODED_URL_PATTERN=$I$(1,"compile$S",["([?&])([A-Za-z0-9_]+)=\\$([^$]+)\\$"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.RestServiceDescription, "UIinfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['Action','Name','description']]]

Clazz.newMeth(C$, 'getAction$',  function () {
return this.Action;
});

Clazz.newMeth(C$, 'setAction$S',  function (action) {
this.Action=action;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.Name;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.Name=name;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (description) {
this.description=description;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
