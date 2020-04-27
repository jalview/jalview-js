(function(){var P$=Clazz.newPackage("jalview.ws.rest"),I$=[[0,'java.util.ArrayList','java.util.regex.Pattern','java.nio.charset.Charset','org.apache.http.entity.mime.content.StringBody','jalview.ws.params.simple.IntegerParameter','StringBuffer','jalview.ws.params.simple.Option',['jalview.ws.rest.InputType','.molType']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InputType", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['molType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.min=1;
this.max=0;
this.inputData=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['replaceids'],'I',['min','max'],'S',['token'],'O',['inputData','java.util.ArrayList']]
,['O',['URL_PATTERN','java.util.regex.Pattern']]]

Clazz.newMeth(C$, 'c$$ClassA', function (types) {
;C$.$init$.apply(this);
if (types != null ) {
for (var t, $t = 0, $$t = types; $t<$$t.length&&((t=($$t[$t])),1);$t++) {
this.inputData.add$O(t);
}
}}, 1);

Clazz.newMeth(C$, 'validFor$jalview_ws_rest_RestJob', function (restJob) {
if (!this.validFor$jalview_ws_rest_RestServiceDescription(restJob.rsd)) return false;
for (var cl, $cl = this.inputData.iterator$(); $cl.hasNext$()&&((cl=($cl.next$())),1);) {
if (!restJob.hasDataOfType$Class(cl)) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'validFor$jalview_ws_rest_RestServiceDescription', function (restServiceDescription) {
if (!restServiceDescription.inputParams.values$().contains$O(this)) return false;
return true;
});

Clazz.newMeth(C$, 'utf8StringBody$S$S', function (content, type) {
var utf8=$I$(3).forName$S("UTF-8");
try {
if (type == null ) {
return Clazz.new_([utf8.encode$S(content).asCharBuffer$().toString()],$I$(4,1).c$$S);
} else {
return Clazz.new_([utf8.encode$S(content).asCharBuffer$().toString(), type, utf8],$I$(4,1).c$$S$S$java_nio_charset_Charset);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Couldn't transform string\n" + content + "\nException was :" );
ex.printStackTrace$java_io_PrintStream(System.err);
} else {
throw ex;
}
}
return null;
});

Clazz.newMeth(C$, 'isConstant$', function () {
return (this.inputData == null  || this.inputData.size$() == 0 );
});

Clazz.newMeth(C$, 'configureFromURLtokenString$java_util_List$StringBuffer', function (tokenstring, warnings) {
var valid=true;
for (var tok, $tok = tokenstring.iterator$(); $tok.hasNext$()&&((tok=($tok.next$())),1);) {
var mtch=C$.URL_PATTERN.matcher$CharSequence(tok);
if (mtch.find$()) {
try {
if (mtch.group$I(1).equals$O("min")) {
this.min=Integer.parseInt$S(mtch.group$I(2));
continue;
} else if (mtch.group$I(1).equals$O("max")) {
this.max=Integer.parseInt$S(mtch.group$I(2));
continue;
}} catch (x) {
if (Clazz.exceptionOf(x,"NumberFormatException")){
valid=false;
warnings.append$S("Invalid value for parameter " + mtch.group$I(1).toLowerCase$() + " '" + mtch.group$I(2) + "' (expected an integer)\n" );
} else {
throw x;
}
}
if (!this.configureProperty$S$S$StringBuffer(mtch.group$I(1), mtch.group$I(2), warnings)) {
if (warnings.length$() == 0) {
warnings.append$S("Failed to configure InputType :" + this.getURLtokenPrefix$() + " with property string: '" + mtch.group$I(0) + "'\n (token is '" + mtch.group$I(1) + "' and value is '" + mtch.group$I(2) + "')\n" );
}valid=false;
}}}
return valid;
});

Clazz.newMeth(C$, 'addBaseParams$java_util_ArrayList', function (prms) {
if (this.min != 1) {
prms.add$O("min='" + this.min + "'" );
}if (this.max != 0) {
prms.add$O("max='" + this.max + "'" );
}});

Clazz.newMeth(C$, 'getBaseOptions$', function () {
var opts=Clazz.new_($I$(1,1));
opts.add$O(Clazz.new_($I$(5,1).c$$S$S$Z$I$I$I$I,["min", "Minimum number of data of this type", true, 1, this.min, 0, -1]));
opts.add$O(Clazz.new_($I$(5,1).c$$S$S$Z$I$I$I$I,["max", "Maximum number of data of this type", false, 0, this.max, 0, -1]));
return opts;
});

Clazz.newMeth(C$, 'configureFromArgumentI$java_util_List', function (currentSettings) {
var urltoks=Clazz.new_($I$(1,1));
var rg;
for (var arg, $arg = currentSettings.iterator$(); $arg.hasNext$()&&((arg=($arg.next$())),1);) {
if (Clazz.instanceOf(arg, "jalview.ws.params.ParameterI")) {
rg=arg.getName$() + "='" + arg.getValue$() + "'" ;
} else {
rg=(arg.getValue$().length$() > 0) ? (arg.getValue$().equals$O(arg.getName$()) ? arg.getName$() : arg.getName$() + "='" + arg.getValue$() + "'" ) : arg.getName$();
}if (rg.length$() > 0) {
urltoks.add$O(rg);
}}
var warnings;
if (!this.configureFromURLtokenString$java_util_List$StringBuffer(urltoks, warnings=Clazz.new_($I$(6,1)))) {
throw Clazz.new_(Clazz.load('jalview.ws.params.InvalidArgumentException').c$$S,[warnings.toString()]);
}});

Clazz.newMeth(C$, 'createMolTypeOption$S$S$Z$jalview_ws_rest_InputType_molType$jalview_ws_rest_InputType_molType', function (name, descr, req, curType, defType) {
return Clazz.new_([name, descr, req, defType == null  ? "" : defType.toString(), curType == null  ? "" : curType.toString(), $I$(8).toStringValues$(), null],$I$(7,1).c$$S$S$Z$S$S$java_util_Collection$java_net_URL);
});

C$.$static$=function(){C$.$static$=0;
C$.URL_PATTERN=$I$(2,"compile$S",["^([^=]+)=?\'?([^\']*)?\'?"]);
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.InputType, "molType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toStringValues$', function () {
var c=Clazz.new_($I$(1,1));
for (var type, $type = 0, $$type = C$.values$(); $type<$$type.length&&((type=($$type[$type])),1);$type++) {
c.add$O(type.toString());
}
return c;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NUC", 0, []);
Clazz.newEnumConst($vals, C$.c$, "PROT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "MIX", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
