(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.bin.Cache','jalview.bin.Console','jalview.gui.JvOptionPane','jalview.gui.Desktop']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PromptUserConfig", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.property=null;
this.allowCancel=false;
this.iftrue=null;
this.iffalse=null;
this.ifundef=null;
},1);

C$.$fields$=[['Z',['allowCancel','removeifunset'],'S',['property','dialogTitle','dialogText'],'O',['iftrue','Runnable','+iffalse','+ifundef','component','java.awt.Component']]]

Clazz.newMeth(C$, 'isRemoveifunset$',  function () {
return this.removeifunset;
});

Clazz.newMeth(C$, 'setRemoveifunset$Z',  function (removeifunset) {
this.removeifunset=removeifunset;
});

Clazz.newMeth(C$, 'c$$java_awt_Component$S$S$S$Runnable$Runnable$Runnable$Z',  function (desktop, property, dialogTitle, dialogText, iftrue, iffalse, ifundef, allowCancel) {
;C$.$init$.apply(this);
this.component=desktop;
this.property=property;
this.dialogTitle=dialogTitle;
this.dialogText=dialogText;
this.iftrue=iftrue;
this.iffalse=iffalse;
this.ifundef=ifundef;
this.allowCancel=allowCancel;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.property == null ) {
return;
}var lastq=$I$(1).getProperty$S(this.property);
if (lastq == null ) {
p$1.raiseDialog.apply(this, []);
$I$(2).debug$S("Got user response.");
}lastq=$I$(1).getProperty$S(this.property);
var extype="";
var e=null;
if (lastq == null ) {
try {
if (this.ifundef != null ) {
this.ifundef.run$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
e=ex;
extype="undefined";
} else {
throw ex;
}
}
} else if (Boolean.valueOf$S(lastq).booleanValue$()) {
try {
if (this.iftrue != null ) {
this.iftrue.run$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
e=ex;
extype="if true";
} else {
throw ex;
}
}
} else {
try {
if (this.iffalse != null ) {
this.iffalse.run$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
e=ex;
extype="if false";
} else {
throw ex;
}
}
}if (e != null ) {
$I$(2).warn$S$Throwable("Unexpected exception when executing the " + extype + " runnable for property " + this.property , e);
}});

Clazz.newMeth(C$, 'raiseDialog',  function () {
if ($I$(2).isDebugEnabled$()) {
$I$(2).debug$S("Prompting user for " + this.dialogTitle + " for Cache property " + this.property );
}try {
var reply=$I$(3,"showConfirmDialog$java_awt_Component$O$S$I$I",[$I$(4).desktop, this.dialogText, this.dialogTitle, (this.allowCancel) ? 1 : 0, 3]);
$I$(2).debug$S("Got response : " + reply);
if (reply == 0) {
$I$(1).setProperty$S$S(this.property, "true");
} else if (reply == 1) {
if (this.removeifunset) {
$I$(1).removeProperty$S(this.property);
} else {
$I$(1).setProperty$S$S(this.property, "false");
}} else {
$I$(2).debug$S("User cancelled setting " + this.property);
return;
}if ($I$(2).isDebugEnabled$()) {
$I$(2,"debug$S",["User set property to " + $I$(1).getProperty$S(this.property)]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(2).warn$S$Throwable("Unexpected exception when prompting user for yes/no setting for property " + this.property, e);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:35 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
