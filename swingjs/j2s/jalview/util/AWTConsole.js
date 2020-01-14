(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.io.PipedInputStream','java.awt.Frame','java.awt.Toolkit','java.awt.Dimension','java.awt.TextArea','java.awt.Button','java.awt.Panel','java.awt.BorderLayout','java.io.PipedOutputStream','java.io.PrintStream','Thread','java.awt.GraphicsEnvironment','jalview.util.MessageManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AWTConsole", null, 'java.awt.event.WindowAdapter', ['java.awt.event.WindowListener', 'java.awt.event.ActionListener', 'Runnable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.frame=null;
this.textArea=null;
this.reader=null;
this.reader2=null;
this.quit=false;
this.pin=null;
this.pin2=null;
this.errorThrower=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.pin=Clazz.new_($I$(1));
this.pin2=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.frame=Clazz.new_($I$(2).c$$S,["Java Console"]);
var screenSize=$I$(3).getDefaultToolkit$().getScreenSize$();
var frameSize=Clazz.new_($I$(4).c$$I$I,[(screenSize.width/2|0), (screenSize.height/2|0)]);
var x=(frameSize.width/2|0);
var y=(frameSize.height/2|0);
this.frame.setBounds$I$I$I$I(x, y, frameSize.width, frameSize.height);
this.textArea=Clazz.new_($I$(5));
this.textArea.setEditable$Z(false);
var button=Clazz.new_($I$(6).c$$S,["clear"]);
var panel=Clazz.new_($I$(7));
panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8)));
panel.add$java_awt_Component$O(this.textArea, "Center");
panel.add$java_awt_Component$O(button, "South");
this.frame.add$java_awt_Component(panel);
this.frame.setVisible$Z(true);
this.frame.addWindowListener$java_awt_event_WindowListener(this);
button.addActionListener$java_awt_event_ActionListener(this);
try {
var pout=Clazz.new_($I$(9).c$$java_io_PipedInputStream,[this.pin]);
System.setOut$java_io_PrintStream(Clazz.new_($I$(10).c$$java_io_OutputStream$Z,[pout, true]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var io = e$$;
{
this.textArea.append$S("Couldn't redirect STDOUT to this console\n" + io.getMessage$());
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var se = e$$;
{
this.textArea.append$S("Couldn't redirect STDOUT to this console\n" + se.getMessage$());
}
} else {
throw e$$;
}
}
try {
var pout2=Clazz.new_($I$(9).c$$java_io_PipedInputStream,[this.pin2]);
System.setErr$java_io_PrintStream(Clazz.new_($I$(10).c$$java_io_OutputStream$Z,[pout2, true]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var io = e$$;
{
this.textArea.append$S("Couldn't redirect STDERR to this console\n" + io.getMessage$());
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var se = e$$;
{
this.textArea.append$S("Couldn't redirect STDERR to this console\n" + se.getMessage$());
}
} else {
throw e$$;
}
}
this.quit=false;
this.reader=Clazz.new_($I$(11).c$$Runnable,[this]);
this.reader.setDaemon$Z(true);
this.reader.start$();
this.reader2=Clazz.new_($I$(11).c$$Runnable,[this]);
this.reader2.setDaemon$Z(true);
this.reader2.start$();
System.out.println$S("Hello World 2");
System.out.println$S("All fonts available to Graphic2D:\n");
var ge=$I$(12).getLocalGraphicsEnvironment$();
var fontNames=ge.getAvailableFontFamilyNames$();
for (var n=0; n < fontNames.length; n++) {
System.out.println$S(fontNames[n]);
}
System.out.println$S("\nLets throw an error on this console");
this.errorThrower=Clazz.new_($I$(11).c$$Runnable,[this]);
this.errorThrower.setDaemon$Z(true);
this.errorThrower.start$();
}, 1);

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (evt) {
this.quit=true;
this.notifyAll$();
try {
this.reader.join$J(1000);
this.pin.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
try {
this.reader2.join$J(1000);
this.pin2.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
System.exit$I(0);
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (evt) {
this.frame.setVisible$Z(false);
this.frame.dispose$();
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
this.textArea.setText$S("");
});

Clazz.newMeth(C$, 'run$', function () {
try {
while ($I$(11).currentThread$() === this.reader ){
try {
this.wait$J(100);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
} else {
throw ie;
}
}
if (this.pin.available$() != 0) {
var input=this.readLine$java_io_PipedInputStream(this.pin);
this.textArea.append$S(input);
}if (this.quit) {
return;
}}
while ($I$(11).currentThread$() === this.reader2 ){
try {
this.wait$J(100);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
} else {
throw ie;
}
}
if (this.pin2.available$() != 0) {
var input=this.readLine$java_io_PipedInputStream(this.pin2);
this.textArea.append$S(input);
}if (this.quit) {
return;
}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.textArea.append$S("\nConsole reports an Internal error.");
this.textArea.append$S("The error is: " + e);
} else {
throw e;
}
}
if ($I$(11).currentThread$() === this.errorThrower ) {
try {
this.wait$J(1000);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
} else {
throw ie;
}
}
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(13).getString$S("exception.application_test_npe")]);
}});

Clazz.newMeth(C$, 'readLine$java_io_PipedInputStream', function ($in) {
var input="";
do {
var available=$in.available$();
if (available == 0) {
break;
}var b=Clazz.array(Byte.TYPE, [available]);
$in.read$BA(b);
input=input +  String.instantialize(b, 0, b.length);
} while (!input.endsWith$S("\n") && !input.endsWith$S("\r\n") && !this.quit  );
return input;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
