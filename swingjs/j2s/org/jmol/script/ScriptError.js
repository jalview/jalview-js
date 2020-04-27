(function(){var P$=Clazz.newPackage("org.jmol.script"),p$1={},I$=[[0,'org.jmol.i18n.GT','javajs.util.PT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptError", null, null, 'org.jmol.api.JmolScriptEvaluator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['chk','ignoreError','error'],'I',['iCommandError'],'S',['errorMessage','errorMessageUntranslated','errorType'],'O',['vwr','org.jmol.viewer.Viewer']]]

Clazz.newMeth(C$, 'getErrorMessage$', function () {
return this.errorMessage;
});

Clazz.newMeth(C$, 'getErrorMessageUntranslated$', function () {
return this.errorMessageUntranslated == null  ? this.errorMessage : this.errorMessageUntranslated;
});

Clazz.newMeth(C$, 'invArg$', function () {
this.error$I(22);
});

Clazz.newMeth(C$, 'bad$', function () {
this.error$I(2);
});

Clazz.newMeth(C$, 'integerOutOfRange$I$I', function (min, max) {
p$1.errorOrWarn$I$S$S$S$Z.apply(this, [21, "" + min, "" + max, null, true]);
});

Clazz.newMeth(C$, 'numberOutOfRange$F$F', function (min, max) {
p$1.errorOrWarn$I$S$S$S$Z.apply(this, [36, "" + new Float(min).toString(), "" + new Float(max).toString(), null, true]);
});

Clazz.newMeth(C$, 'error$I', function (iError) {
p$1.errorOrWarn$I$S$S$S$Z.apply(this, [iError, null, null, null, false]);
});

Clazz.newMeth(C$, 'errorStr$I$S', function (iError, value) {
p$1.errorOrWarn$I$S$S$S$Z.apply(this, [iError, value, null, null, false]);
});

Clazz.newMeth(C$, 'errorStr2$I$S$S', function (iError, value, more) {
p$1.errorOrWarn$I$S$S$S$Z.apply(this, [iError, value, more, null, false]);
});

Clazz.newMeth(C$, 'errorMore$I$S$S$S', function (iError, value, more, more2) {
p$1.errorOrWarn$I$S$S$S$Z.apply(this, [iError, value, more, more2, false]);
});

Clazz.newMeth(C$, 'warning$I$S$S', function (iError, value, more) {
p$1.errorOrWarn$I$S$S$S$Z.apply(this, [iError, value, more, null, true]);
});

Clazz.newMeth(C$, 'errorOrWarn$I$S$S$S$Z', function (iError, value, more, more2, warningOnly) {
var strError=(this.ignoreError ? null : C$.errorString$I$S$S$S$Z(iError, value, more, more2, true));
var strUntranslated=(this.ignoreError || !$I$(1).getDoTranslate$()  ? null : C$.errorString$I$S$S$S$Z(iError, value, more, more2, false));
if (!warningOnly) this.evalError$S$S(strError, strUntranslated);
this.showStringPrint$S$Z(strError, true);
}, p$1);

Clazz.newMeth(C$, 'evalError$S$S', function (message, strUntranslated) {
if (this.ignoreError) throw Clazz.new_(Clazz.load('NullPointerException'));
if (strUntranslated == null ) strUntranslated=message;
if (!this.chk) {
this.setCursorWait$Z(false);
this.vwr.setBooleanProperty$S$Z("refreshing", true);
this.vwr.setStringProperty$S$S("_errormessage", strUntranslated);
}throw Clazz.new_(Clazz.load('org.jmol.script.ScriptException').c$$org_jmol_script_ScriptError$S$S$Z,[this, message, strUntranslated, true]);
});

Clazz.newMeth(C$, 'setCursorWait$Z', function (TF) {
if (!this.chk) this.vwr.setCursor$I(TF ? 3 : 0);
});

Clazz.newMeth(C$, 'errorString$I$S$S$S$Z', function (iError, value, more, more2, translated) {
var doTranslate=false;
if (!translated && (doTranslate=$I$(1).getDoTranslate$()) == true  ) $I$(1).setDoTranslate$Z(false);
var msg;
switch (iError) {
default:
msg="Unknown error message number: " + iError;
break;
case 0:
msg=$I$(1).$$S("x y z axis expected");
break;
case 1:
msg=$I$(1).$$S("{0} not allowed with background model displayed");
break;
case 2:
msg=$I$(1).$$S("bad argument count");
break;
case 3:
msg=$I$(1).$$S("Miller indices cannot all be zero.");
break;
case 4:
msg=$I$(1).$$S("bad [R,G,B] color");
break;
case 5:
msg=$I$(1).$$S("boolean expected");
break;
case 6:
msg=$I$(1).$$S("boolean or number expected");
break;
case 7:
msg=$I$(1).$$S("boolean, number, or {0} expected");
break;
case 56:
msg=$I$(1).$$S("cannot set value");
break;
case 8:
msg=$I$(1).$$S("color expected");
break;
case 9:
msg=(function(a,f){return f.apply(null,a)})(["a color or palette name (Jmol, Rasmol) is required"],$I$(1).$$S);
break;
case 10:
msg=$I$(1).$$S("command expected");
break;
case 11:
msg=(function(a,f){return f.apply(null,a)})(["{x y z} or $name or (atom expression) required"],$I$(1).$$S);
break;
case 12:
msg=$I$(1).$$S("draw object not defined");
break;
case 13:
msg=$I$(1).$$S("unexpected end of script command");
break;
case 14:
msg=(function(a,f){return f.apply(null,a)})(["valid (atom expression) expected"],$I$(1).$$S);
break;
case 15:
msg=(function(a,f){return f.apply(null,a)})(["(atom expression) or integer expected"],$I$(1).$$S);
break;
case 16:
msg=$I$(1).$$S("filename expected");
break;
case 17:
msg=$I$(1).$$S("file not found");
break;
case 18:
msg=$I$(1).$$S("incompatible arguments");
break;
case 19:
msg=$I$(1).$$S("insufficient arguments");
break;
case 20:
msg=$I$(1).$$S("integer expected");
break;
case 21:
msg=(function(a,f){return f.apply(null,a)})(["integer out of range ({0} - {1})"],$I$(1).$$S);
break;
case 22:
msg=$I$(1).$$S("invalid argument");
break;
case 23:
msg=$I$(1).$$S("invalid parameter order");
break;
case 24:
msg=$I$(1).$$S("keyword expected");
break;
case 25:
msg=$I$(1).$$S("no MO coefficient data available");
break;
case 26:
msg=$I$(1).$$S("An MO index from 1 to {0} is required");
break;
case 27:
msg=$I$(1).$$S("no MO basis/coefficient data available for this frame");
break;
case 28:
msg=$I$(1).$$S("no MO occupancy data available");
break;
case 29:
msg=$I$(1).$$S("Only one molecular orbital is available in this file");
break;
case 30:
msg=$I$(1).$$S("{0} require that only one model be displayed");
break;
case 55:
msg=$I$(1).$$S("{0} requires that only one model be loaded");
break;
case 31:
msg=$I$(1).$$S("No data available");
break;
case 32:
msg=$I$(1).$$S("No partial charges were read from the file; Jmol needs these to render the MEP data.");
break;
case 33:
msg=$I$(1).$$S("No unit cell");
break;
case 34:
msg=$I$(1).$$S("number expected");
break;
case 35:
msg=(function(a,f){return f.apply(null,a)})(["number must be ({0} or {1})"],$I$(1).$$S);
break;
case 36:
msg=(function(a,f){return f.apply(null,a)})(["decimal number out of range ({0} - {1})"],$I$(1).$$S);
break;
case 37:
msg=$I$(1).$$S("object name expected after \'$\'");
break;
case 38:
msg=$I$(1).$$S("plane expected -- either three points or atom expressions or {0} or {1} or {2}");
break;
case 39:
msg=$I$(1).$$S("property name expected");
break;
case 40:
msg=$I$(1).$$S("space group {0} was not found.");
break;
case 41:
msg=$I$(1).$$S("quoted string expected");
break;
case 42:
msg=$I$(1).$$S("quoted string or identifier expected");
break;
case 43:
msg=$I$(1).$$S("too many rotation points were specified");
break;
case 44:
msg=$I$(1).$$S("too many script levels");
break;
case 45:
msg=$I$(1).$$S("unrecognized atom property");
break;
case 46:
msg=$I$(1).$$S("unrecognized bond property");
break;
case 47:
msg=$I$(1).$$S("unrecognized command");
break;
case 48:
msg=$I$(1).$$S("runtime unrecognized expression");
break;
case 49:
msg=$I$(1).$$S("unrecognized object");
break;
case 50:
msg=$I$(1).$$S("unrecognized {0} parameter");
break;
case 51:
msg=(function(a,f){return f.apply(null,a)})(["unrecognized {0} parameter in Jmol state script (set anyway)"],$I$(1).$$S);
break;
case 52:
msg=$I$(1).$$S("unrecognized SHOW parameter --  use {0}");
break;
case 53:
msg="{0}";
break;
case 54:
msg=$I$(1).$$S("write what? {0} or {1} \"filename\"");
break;
}
if (msg.indexOf$S("{0}") < 0) {
if (value != null ) msg += ": " + value;
} else {
msg=$I$(2).rep$S$S$S(msg, "{0}", value);
if (msg.indexOf$S("{1}") >= 0) msg=$I$(2).rep$S$S$S(msg, "{1}", more);
 else if (more != null ) msg += ": " + more;
if (msg.indexOf$S("{2}") >= 0) msg=$I$(2).rep$S$S$S(msg, "{2}", more);
}if (doTranslate) $I$(1).setDoTranslate$Z(true);
return msg;
}, 1);

Clazz.newMeth(C$, 'getErrorLineMessage$S$S$I$I$S', function (functionName, filename, lineCurrent, pcCurrent, lineInfo) {
var err="\n----";
if (filename != null  || functionName != null  ) err += "line " + lineCurrent + " command " + (pcCurrent + 1) + " of " + (functionName == null  ? filename : functionName.equals$O("try") ? "try" : "function " + functionName) + ":" ;
err += "\n         " + lineInfo;
return err;
}, 1);

Clazz.newMeth(C$, 'setErrorMessage$S', function (err) {
this.errorMessageUntranslated=null;
if (err == null ) {
this.error=false;
this.errorType=null;
this.errorMessage=null;
this.iCommandError=-1;
return;
}this.error=true;
if (this.errorMessage == null ) this.errorMessage=$I$(1).$$S("script ERROR: ");
this.errorMessage += err;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:18 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
