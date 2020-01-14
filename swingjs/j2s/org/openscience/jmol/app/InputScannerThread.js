(function(){var P$=Clazz.newPackage("org.openscience.jmol.app"),p$1={},I$=[[0,'StringBuilder','java.util.Scanner','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "InputScannerThread", null, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.scanner=null;
this.isSilent=false;
this.buffer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.buffer=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_api_JmolViewer$Z', function (vwr, isSilent) {
Clazz.super_(C$, this,1);
this.vwr=vwr;
this.isSilent=isSilent;
this.start$();
}, 1);

Clazz.newMeth(C$, 'start$', function () {
this.scanner=Clazz.new_($I$(2).c$$java_io_InputStream,[System.$in]);
this.scanner.useDelimiter$S("\n");
C$.superclazz.prototype.start$.apply(this, []);
});

Clazz.newMeth(C$, 'run$', function () {
try {
$I$(3).currentThread$().setPriority$I(1);
p$1.say$S.apply(this, [null]);
while (true){
$I$(3).sleep$J(100);
while (this.scanner.hasNext$()){
var s=this.scanner.next$();
s=s.substring$I$I(0, s.length$() - 1);
if (s.toLowerCase$().equals$O("exitjmol")) System.exit$I(0);
if (this.vwr.checkHalt$S$Z(s, false)) {
this.buffer=Clazz.new_($I$(1));
s="";
}this.buffer.append$S(s).append$C("\n");
if (!p$1.checkCommand.apply(this, []) && this.buffer.length$() == 1 ) {
p$1.say$S.apply(this, [null]);
}}
}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
System.exit$I(1);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
e.printStackTrace$();
System.exit$I(1);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'say$S', function (msg) {
if (this.isSilent) return;
if (msg == null ) msg="Enter: \nquit     to stop processing and re-initialize input\nexit     to stop all script processing\nexitJmol to exit Jmol\nJmol> ";
System.out.print$S(msg);
System.out.flush$();
}, p$1);

Clazz.newMeth(C$, 'checkCommand', function () {
var s=this.buffer.toString();
if (s.length$() == 1) return false;
var ret=this.vwr.scriptCheck$S(s);
if (Clazz.instanceOf(ret, "java.lang.String")) {
s=ret;
if (s.indexOf$S("missing END") >= 0) return true;
p$1.say$S.apply(this, [s]);
return false;
}if (Clazz.instanceOf(ret, "org.jmol.script.ScriptContext")) {
var c=ret;
if (!c.isComplete) {
return true;
}}this.buffer=Clazz.new_($I$(1));
s += "\1##noendcheck";
if (this.isSilent) this.vwr.evalStringQuiet$S(s);
 else this.vwr.evalString$S(s);
return true;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
