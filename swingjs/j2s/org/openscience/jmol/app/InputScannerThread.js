(function(){var P$=Clazz.newPackage("org.openscience.jmol.app"),p$1={},I$=[[0,'StringBuilder','java.util.Scanner','Thread','org.jmol.viewer.Viewer','javax.swing.Timer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InputScannerThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buffer=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['isSilent'],'O',['vwr','org.jmol.api.JmolViewer','scanner','java.util.Scanner','buffer','StringBuilder','t','javax.swing.Timer']]]

Clazz.newMeth(C$, 'c$$org_jmol_api_JmolViewer$Z', function (vwr, isSilent) {
Clazz.super_(C$, this);
this.vwr=vwr;
this.isSilent=isSilent;
this.start$();
}, 1);

Clazz.newMeth(C$, 'start$', function () {
this.scanner=Clazz.new_($I$(2,1).c$$java_io_InputStream,[System.$in]);
this.scanner.useDelimiter$S("\n");
C$.superclazz.prototype.start$.apply(this, []);
});

Clazz.newMeth(C$, 'run$', function () {
try {
$I$(3).currentThread$().setPriority$I(1);
p$1.say$S.apply(this, [null]);
while (true){
if (!this.mainLoop$()) break;
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

Clazz.newMeth(C$, 'mainLoop$', function () {
if ($I$(4).isSwingJS) {
if (this.t == null ) {
this.t=Clazz.new_([100, ((P$.InputScannerThread$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "InputScannerThread$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.InputScannerThread'].scan$.apply(this.b$['org.openscience.jmol.app.InputScannerThread'], []);
});
})()
), Clazz.new_(P$.InputScannerThread$1.$init$,[this, null]))],$I$(5,1).c$$I$java_awt_event_ActionListener);
this.t.setRepeats$Z(false);
this.t.start$();
} else {
this.t.restart$();
}return false;
}$I$(3).sleep$J(100);
this.scan$();
return true;
});

Clazz.newMeth(C$, 'scan$', function () {
while (this.scanner.hasNext$()){
var s=this.scanner.next$();
s=s.substring$I$I(0, s.length$() - 1);
if (s.toLowerCase$().equals$O("exitjmol")) System.exit$I(0);
if (this.vwr.checkHalt$S$Z(s, false)) {
this.buffer=Clazz.new_($I$(1,1));
s="";
}this.buffer.append$S(s).append$C("\n");
if (!p$1.checkCommand.apply(this, []) && this.buffer.length$() == 1 ) {
p$1.say$S.apply(this, [null]);
}}
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
}}this.buffer=Clazz.new_($I$(1,1));
s += "\u0001##noendcheck";
if (this.isSilent) this.vwr.evalStringQuiet$S(s);
 else this.vwr.evalString$S(s);
return true;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
