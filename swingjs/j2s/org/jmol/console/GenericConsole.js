(function(){var P$=Clazz.newPackage("org.jmol.console"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.i18n.GT','org.jmol.viewer.Viewer','org.jmol.script.T','javajs.util.PT','Boolean','org.jmol.c.CBK']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GenericConsole", null, null, ['org.jmol.api.JmolAppConsoleInterface', 'org.jmol.api.JmolCallbackListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.menuMap=Clazz.new_($I$(1,1));
this.nTab=0;
},1);

C$.$fields$=[['I',['nTab'],'S',['defaultMessage','incompleteCmd'],'O',['input','org.jmol.api.js.GenericConsoleTextArea','+output','vwr','org.jmol.viewer.Viewer','menuMap','java.util.Map','editButton','org.jmol.api.JmolAbstractButton','+runButton','+historyButton','+stateButton','+clearOutButton','+clearInButton','+loadButton','+label1']]
,['O',['labels','java.util.Map']]]

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
if (C$.labels == null ) {
var l=Clazz.new_($I$(1,1));
l.put$O$O("title", $I$(2).$$S("Jmol Script Console") + " " + $I$(3).getJmolVersion$() );
this.setupLabels$java_util_Map(l);
C$.labels=l;
}});

Clazz.newMeth(C$, 'addButton$org_jmol_api_JmolAbstractButton$S', function (b, label) {
b.addConsoleListener$O(this);
this.menuMap.put$O$O(label, b);
return b;
});

Clazz.newMeth(C$, 'getLabel1$', function () {
return null;
});

Clazz.newMeth(C$, 'setupLabels$java_util_Map', function (labels) {
labels.put$O$O("saveas", $I$(2).$$S("&Save As..."));
labels.put$O$O("file", $I$(2).$$S("&File"));
labels.put$O$O("close", $I$(2).$$S("&Close"));
this.setupLabels0$java_util_Map(labels);
});

Clazz.newMeth(C$, 'setupLabels0$java_util_Map', function (labels) {
labels.put$O$O("help", $I$(2).$$S("&Help"));
labels.put$O$O("search", $I$(2).$$S("&Search..."));
labels.put$O$O("commands", $I$(2).$$S("&Commands"));
labels.put$O$O("functions", $I$(2).$$S("Math &Functions"));
labels.put$O$O("parameters", $I$(2).$$S("Set &Parameters"));
labels.put$O$O("more", $I$(2).$$S("&More"));
labels.put$O$O("Editor", $I$(2).$$S("Editor"));
labels.put$O$O("State", $I$(2).$$S("State"));
labels.put$O$O("Run", $I$(2).$$S("Run"));
labels.put$O$O("Clear Output", $I$(2).$$S("Clear Output"));
labels.put$O$O("Clear Input", $I$(2).$$S("Clear Input"));
labels.put$O$O("History", $I$(2).$$S("History"));
labels.put$O$O("Load", $I$(2).$$S("Load"));
labels.put$O$O("label1", $I$(2).$$S("press CTRL-ENTER for new line or paste model data and press Load"));
labels.put$O$O("default", $I$(2).$$S("Messages will appear here. Enter commands in the box below. Click the console Help menu item for on-line help, which will appear in a new browser window."));
});

Clazz.newMeth(C$, 'setLabels$', function () {
var doTranslate=$I$(2).setDoTranslate$Z(true);
this.editButton=this.setButton$S("Editor");
this.stateButton=this.setButton$S("State");
this.runButton=this.setButton$S("Run");
this.clearOutButton=this.setButton$S("Clear Output");
this.clearInButton=this.setButton$S("Clear Input");
this.historyButton=this.setButton$S("History");
this.loadButton=this.setButton$S("Load");
this.defaultMessage=C$.getLabel$S("default");
this.setTitle$();
$I$(2).setDoTranslate$Z(doTranslate);
});

Clazz.newMeth(C$, 'getLabel$S', function (key) {
return C$.labels.get$O(key);
}, 1);

Clazz.newMeth(C$, 'displayConsole$', function () {
this.layoutWindow$S(null);
p$1.outputMsg$S.apply(this, [this.defaultMessage]);
});

Clazz.newMeth(C$, 'updateLabels$', function () {
return;
});

Clazz.newMeth(C$, 'completeCommand$S', function (thisCmd) {
if (thisCmd.length$() == 0) return null;
var strCommand=(this.nTab <= 0 || this.incompleteCmd == null   ? thisCmd : this.incompleteCmd);
this.incompleteCmd=strCommand;
var splitCmd=C$.splitCommandLine$S(thisCmd);
if (splitCmd == null ) return null;
var asCommand=splitCmd[2] == null ;
var inBrace=(splitCmd[3] != null );
var notThis=splitCmd[asCommand ? 1 : 2];
var s=splitCmd[1];
if (notThis.length$() == 0) return null;
var token=(function(a,f){return f.apply(null,a)})([s.trim$().toLowerCase$()],$I$(4).getTokenFromName$S);
var cmdtok=(token == null  ? 0 : token.tok);
var isSelect=$I$(4).tokAttr$I$I(cmdtok, 12288);
splitCmd=C$.splitCommandLine$S(strCommand);
var cmd=null;
if (!asCommand && (notThis.charAt$I(0) == "\"" || notThis.charAt$I(0) == "\'" ) ) {
var q=notThis.charAt$I(0);
notThis=$I$(5).trim$S$S(notThis, "\"\'");
var stub=$I$(5).trim$S$S(splitCmd[2], "\"\'");
cmd=this.nextFileName$S$I(stub, this.nTab);
if (cmd != null ) cmd=splitCmd[0] + splitCmd[1] + q + cmd + q ;
} else {
var map=null;
if (!asCommand) {
notThis=s;
if (inBrace || splitCmd[2].startsWith$S("$") || isSelect  ) {
map=Clazz.new_($I$(1,1));
this.vwr.getObjectMap$java_util_Map$C(map, inBrace || isSelect  ? "{" : splitCmd[2].startsWith$S("$") ? "$" : "0");
}}cmd=(function(a,f){return f.apply(null,a)})([map, s.equalsIgnoreCase$S("set "), asCommand, asCommand ? splitCmd[1] : splitCmd[2], this.nTab],$I$(4).completeCommand$java_util_Map$Z$Z$S$I);
cmd=splitCmd[0] + (cmd == null  ? notThis : asCommand ? cmd : splitCmd[1] + cmd);
}return (cmd == null  || cmd.equals$O(strCommand)  ? null : cmd);
});

Clazz.newMeth(C$, 'doAction$O', function (source) {
if (source === this.runButton ) {
this.execute$S(null);
} else if (source === this.editButton ) {
this.vwr.getProperty$S$S$O("DATA_API", "scriptEditor", null);
} else if (source === this.historyButton ) {
this.clearContent$S(this.vwr.getSetHistory$I(2147483647));
} else if (source === this.stateButton ) {
this.clearContent$S(this.vwr.getStateInfo$());
} else if (source === this.clearInButton ) {
this.input.setText("");
return;
}if (source === this.clearOutButton ) {
this.output.setText("");
return;
}if (source === this.loadButton ) {
this.vwr.loadInlineAppend$S$Z(this.input.getText(), false);
return;
}if (this.isMenuItem$O(source)) {
this.execute$S((source).getName$());
return;
}});

Clazz.newMeth(C$, 'execute$S', function (strCommand) {
var cmd=(strCommand == null  ? this.input.getText() : strCommand);
if (strCommand == null ) this.input.setText(null);
var strErrorMessage=this.vwr.script$S(cmd + "\u0001## EDITOR_IGNORE ##");
if (strErrorMessage != null  && !strErrorMessage.equals$O("pending") ) p$1.outputMsg$S.apply(this, [strErrorMessage]);
});

Clazz.newMeth(C$, 'destroyConsole$', function () {
if (this.vwr.isApplet) this.vwr.getProperty$S$S$O("DATA_API", "getAppConsole", $I$(6).FALSE);
});

Clazz.newMeth(C$, 'setAbstractButtonLabels$java_util_Map$java_util_Map', function (menuMap, labels) {
for (var key, $key = menuMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var m=menuMap.get$O(key);
var label=labels.get$O(key);
if (key.indexOf$S("Tip") == key.length$() - 3) {
m.setToolTipText$S(labels.get$O(key));
} else {
var mnemonic=C$.getMnemonic$S(label);
if (mnemonic != " ") m.setMnemonic$C(mnemonic);
label=C$.getLabelWithoutMnemonic$S(label);
m.setText$S(label);
}}
}, 1);

Clazz.newMeth(C$, 'getLabelWithoutMnemonic$S', function (label) {
if (label == null ) {
return null;
}var index=label.indexOf$I("&");
if (index == -1) {
return label;
}return label.substring$I$I(0, index) + ((index < label.length$() - 1) ? label.substring$I(index + 1) : "");
}, 1);

Clazz.newMeth(C$, 'getMnemonic$S', function (label) {
if (label == null ) {
return " ";
}var index=label.indexOf$I("&");
if ((index == -1) || (index == label.length$() - 1) ) {
return " ";
}return label.charAt$I(index + 1);
}, 1);

Clazz.newMeth(C$, 'map$O$S$S$java_util_Map', function (button, key, label, menuMap) {
var mnemonic=C$.getMnemonic$S(label);
if (mnemonic != " ") (button).setMnemonic$C(mnemonic);
if (menuMap != null ) menuMap.put$O$O(key, button);
}, 1);

Clazz.newMeth(C$, 'notifyEnabled$org_jmol_c_CBK', function (type) {
switch (type) {
case $I$(7).ECHO:
case $I$(7).MEASURE:
case $I$(7).MESSAGE:
case $I$(7).PICK:
return true;
case $I$(7).ANIMFRAME:
case $I$(7).APPLETREADY:
case $I$(7).ATOMMOVED:
case $I$(7).CLICK:
case $I$(7).DRAGDROP:
case $I$(7).ERROR:
case $I$(7).EVAL:
case $I$(7).HOVER:
case $I$(7).IMAGE:
case $I$(7).LOADSTRUCT:
case $I$(7).MINIMIZATION:
case $I$(7).SERVICE:
case $I$(7).RESIZE:
case $I$(7).SCRIPT:
case $I$(7).SYNC:
case $I$(7).STRUCTUREMODIFIED:
case $I$(7).AUDIO:
break;
}
return false;
});

Clazz.newMeth(C$, 'notifyCallback$org_jmol_c_CBK$OA', function (type, data) {
var strInfo=(data == null  || data[1] == null   ? null : data[1].toString());
switch (type) {
case $I$(7).ECHO:
this.sendConsoleEcho$S(strInfo);
break;
case $I$(7).MEASURE:
var mystatus=data[3];
if (mystatus.indexOf$S("Picked") >= 0 || mystatus.indexOf$S("Sequence") >= 0 ) this.sendConsoleMessage$S(strInfo);
 else if (mystatus.indexOf$S("Completed") >= 0) this.sendConsoleEcho$S(strInfo.substring$I$I(strInfo.lastIndexOf$S(",") + 2, strInfo.length$() - 1));
break;
case $I$(7).MESSAGE:
this.sendConsoleMessage$S(data == null  ? null : strInfo);
break;
case $I$(7).PICK:
this.sendConsoleMessage$S(strInfo);
break;
}
});

Clazz.newMeth(C$, 'getText$', function () {
return this.output.getText();
});

Clazz.newMeth(C$, 'sendConsoleEcho$S', function (strEcho) {
if (strEcho == null ) {
this.updateLabels$();
p$1.outputMsg$S.apply(this, [null]);
strEcho=this.defaultMessage;
} else if (strEcho.equals$O("\u0000")) {
{
Clazz.Console.clear();
}
strEcho=null;
}p$1.outputMsg$S.apply(this, [strEcho]);
});

Clazz.newMeth(C$, 'outputMsg$S', function (message) {
var n=(message == null  ? -1 : message.length$());
switch (n) {
case -1:
this.output.setText("");
return;
default:
if (message.charAt$I(n - 1) == "\n") break;
case 0:
message += "\n";
}
this.output.append(message);
}, p$1);

Clazz.newMeth(C$, 'clearContent$S', function (text) {
this.output.setText(text);
});

Clazz.newMeth(C$, 'sendConsoleMessage$S', function (strInfo) {
if (strInfo != null  && this.output.getText().startsWith$S(this.defaultMessage) ) p$1.outputMsg$S.apply(this, [null]);
p$1.outputMsg$S.apply(this, [strInfo]);
});

Clazz.newMeth(C$, 'setCallbackFunction$S$S', function (callbackType, callbackFunction) {
});

Clazz.newMeth(C$, 'zap$', function () {
});

Clazz.newMeth(C$, 'recallCommand$Z', function (up) {
var cmd=this.vwr.getSetHistory$I(up ? -1 : 1);
if (cmd != null ) this.input.setText($I$(5).escUnicode$S(cmd));
});

Clazz.newMeth(C$, 'processKey$I$I$Z', function (kcode, kid, isControlDown) {
var mode=0;
switch (kid) {
case 401:
switch (kcode) {
case 9:
var s=this.input.getText();
if (s.endsWith$S("\n") || s.endsWith$S("\t") ) return 0;
mode=1;
if (this.input.getCaretPosition() == s.length$()) {
var cmd=this.completeCommand$S(s);
if (cmd != null ) this.input.setText($I$(5).escUnicode$S(cmd).replace$C$C("\t", " "));
this.nTab++;
return mode;
}break;
case 27:
mode=1;
this.input.setText("");
break;
}
this.nTab=0;
if (kcode == 10 && !isControlDown ) {
this.execute$S(null);
return mode;
}if (kcode == 38 || kcode == 40 ) {
this.recallCommand$Z(kcode == 38);
return mode;
}break;
case 402:
if (kcode == 10 && !isControlDown ) return mode;
break;
}
return mode | 2;
});

Clazz.newMeth(C$, 'splitCommandLine$S', function (cmd) {
var sout=Clazz.array(String, [4]);
var isEscaped1=false;
var isEscaped2=false;
var isEscaped=false;
if (cmd.length$() == 0) return null;
var ptQ=-1;
var ptCmd=0;
var ptToken=0;
var nBrace=0;
var ch;
for (var i=0; i < cmd.length$(); i++) {
switch ((ch=cmd.charAt$I(i)).$c()) {
case 34:
if (!isEscaped && !isEscaped1 ) {
isEscaped2=!isEscaped2;
if (isEscaped2) ptQ=ptToken=i;
}break;
case 39:
if (!isEscaped && !isEscaped2 ) {
isEscaped1=!isEscaped1;
if (isEscaped1) ptQ=ptToken=i;
}break;
case 92:
isEscaped=!isEscaped;
continue;
case 32:
if (!isEscaped && !isEscaped1 && !isEscaped2  ) {
ptToken=i + 1;
ptQ=-1;
}break;
case 59:
if (!isEscaped1 && !isEscaped2 ) {
ptCmd=ptToken=i + 1;
ptQ=-1;
nBrace=0;
}break;
case 123:
case 125:
if (!isEscaped1 && !isEscaped2 ) {
nBrace+=(ch == "{" ? 1 : -1);
ptToken=i + 1;
ptQ=-1;
}break;
default:
if (!isEscaped1 && !isEscaped2 ) ptQ=-1;
}
isEscaped=false;
}
sout[0]=cmd.substring$I$I(0, ptCmd);
sout[1]=(ptToken == ptCmd ? cmd.substring$I(ptCmd) : cmd.substring$I$I(ptCmd, (ptToken > ptQ ? ptToken : ptQ)));
sout[2]=(ptToken == ptCmd ? null : cmd.substring$I(ptToken));
sout[3]=(nBrace > 0 ? "{" : null);
return sout;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
