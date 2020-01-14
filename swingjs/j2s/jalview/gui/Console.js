(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.io.PipedInputStream','StringBuffer','java.awt.Toolkit','javax.swing.JTextArea','javax.swing.JButton','jalview.util.MessageManager','java.awt.BorderLayout','javax.swing.JScrollPane','Thread','java.io.PipedOutputStream','java.io.PrintStream','java.awt.GraphicsEnvironment','javax.swing.JFrame','java.awt.Dimension','jalview.gui.JalviewAppender','jalview.javascript.log4j.SimpleLayout','jalview.javascript.log4j.Logger','javax.swing.SwingUtilities']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Console", null, 'java.awt.event.WindowAdapter', ['java.awt.event.WindowListener', 'java.awt.event.ActionListener', 'Runnable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.frame=null;
this.textArea=null;
this.byteslim=0;
this.bytescut=0;
this.reader=null;
this.reader2=null;
this.textAppender=null;
this.quit=false;
this.stdout=null;
this.stderr=null;
this.pin=null;
this.pin2=null;
this.displayPipe=null;
this.errorThrower=null;
this.parent=null;
this.MIN_WIDTH=0;
this.MIN_HEIGHT=0;
this.pout=null;
this.perr=null;
this.header=null;
this.updateConsole=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.byteslim=102400;
this.bytescut=76800;
this.stdout=System.out;
this.stderr=System.err;
this.pin=Clazz.new_($I$(1));
this.pin2=Clazz.new_($I$(1));
this.displayPipe=Clazz.new_($I$(2));
this.parent=null;
this.MIN_WIDTH=300;
this.MIN_HEIGHT=250;
this.pout=null;
this.perr=null;
this.header=null;
this.updateConsole=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
var screenSize=$I$(3).getDefaultToolkit$().getScreenSize$();
this.frame=p$1.initFrame$S$I$I$I$I.apply(this, ["Java Console", (screenSize.width/2|0), (screenSize.height/2|0), -1, -1]);
p$1.initConsole$Z.apply(this, [true]);
}, 1);

Clazz.newMeth(C$, 'initConsole$Z', function (visible) {
p$1.initConsole$Z$Z.apply(this, [visible, true]);
}, p$1);

Clazz.newMeth(C$, 'initConsole$Z$Z', function (visible, redirect) {
this.textArea=Clazz.new_($I$(4));
this.textArea.setEditable$Z(false);
var button=Clazz.new_($I$(5).c$$S,[$I$(6).getString$S("action.clear")]);
this.frame.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
this.frame.getContentPane$().add$java_awt_Component$O(Clazz.new_($I$(8).c$$java_awt_Component,[this.textArea]), "Center");
this.frame.getContentPane$().add$java_awt_Component$O(button, "South");
this.frame.setVisible$Z(visible);
this.updateConsole=visible;
this.frame.addWindowListener$java_awt_event_WindowListener(this);
button.addActionListener$java_awt_event_ActionListener(this);
if (redirect) {
this.redirectStreams$();
} else {
this.unredirectStreams$();
}this.quit=false;
this.reader=Clazz.new_($I$(9).c$$Runnable,[this]);
this.reader.setDaemon$Z(true);
this.reader.start$();
this.reader2=Clazz.new_($I$(9).c$$Runnable,[this]);
this.reader2.setDaemon$Z(true);
this.reader2.start$();
this.textAppender=Clazz.new_($I$(9).c$$Runnable,[this]);
this.textAppender.setDaemon$Z(true);
this.textAppender.start$();
}, p$1);

Clazz.newMeth(C$, 'redirectStreams$', function () {
if (this.pout == null ) {
try {
this.pout=Clazz.new_($I$(10).c$$java_io_PipedInputStream,[this.pin]);
System.setOut$java_io_PrintStream(Clazz.new_($I$(11).c$$java_io_OutputStream$Z,[this.pout, true]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var io = e$$;
{
this.textArea.append$S("Couldn't redirect STDOUT to this console\n" + io.getMessage$());
io.printStackTrace$java_io_PrintStream(this.stderr);
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var se = e$$;
{
this.textArea.append$S("Couldn't redirect STDOUT to this console\n" + se.getMessage$());
se.printStackTrace$java_io_PrintStream(this.stderr);
}
} else {
throw e$$;
}
}
try {
this.perr=Clazz.new_($I$(10).c$$java_io_PipedInputStream,[this.pin2]);
System.setErr$java_io_PrintStream(Clazz.new_($I$(11).c$$java_io_OutputStream$Z,[this.perr, true]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var io = e$$;
{
this.textArea.append$S("Couldn't redirect STDERR to this console\n" + io.getMessage$());
io.printStackTrace$java_io_PrintStream(this.stderr);
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var se = e$$;
{
this.textArea.append$S("Couldn't redirect STDERR to this console\n" + se.getMessage$());
se.printStackTrace$java_io_PrintStream(this.stderr);
}
} else {
throw e$$;
}
}
}});

Clazz.newMeth(C$, 'unredirectStreams$', function () {
if (this.pout != null ) {
try {
System.setOut$java_io_PrintStream(this.stdout);
this.pout.flush$();
this.pout.close$();
this.pin=Clazz.new_($I$(1));
this.pout=null;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var io = e$$;
{
this.textArea.append$S("Couldn't unredirect STDOUT to this console\n" + io.getMessage$());
io.printStackTrace$java_io_PrintStream(this.stderr);
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var se = e$$;
{
this.textArea.append$S("Couldn't unredirect STDOUT to this console\n" + se.getMessage$());
se.printStackTrace$java_io_PrintStream(this.stderr);
}
} else {
throw e$$;
}
}
try {
System.setErr$java_io_PrintStream(this.stderr);
this.perr.flush$();
this.perr.close$();
this.pin2=Clazz.new_($I$(1));
this.perr=null;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var io = e$$;
{
this.textArea.append$S("Couldn't unredirect STDERR to this console\n" + io.getMessage$());
io.printStackTrace$java_io_PrintStream(this.stderr);
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var se = e$$;
{
this.textArea.append$S("Couldn't unredirect STDERR to this console\n" + se.getMessage$());
se.printStackTrace$java_io_PrintStream(this.stderr);
}
} else {
throw e$$;
}
}
}});

Clazz.newMeth(C$, 'test$', function () {
System.out.println$S("Hello World 2");
System.out.println$S("All fonts available to Graphic2D:\n");
var ge=$I$(12).getLocalGraphicsEnvironment$();
var fontNames=ge.getAvailableFontFamilyNames$();
for (var n=0; n < fontNames.length; n++) {
System.out.println$S(fontNames[n]);
}
System.out.println$S("\nLets throw an error on this console");
this.errorThrower=Clazz.new_($I$(9).c$$Runnable,[this]);
this.errorThrower.setDaemon$Z(true);
this.errorThrower.start$();
});

Clazz.newMeth(C$, 'initFrame$S$I$I$I$I', function (string, i, j, x, y) {
var frame=Clazz.new_($I$(13).c$$S,[string]);
frame.setName$S(string);
if (x == -1) {
x=(i/2|0);
}if (y == -1) {
y=(j/2|0);
}frame.setBounds$I$I$I$I(x, y, i, j);
return frame;
}, p$1);

Clazz.newMeth(C$, 'c$$jalview_gui_Desktop', function (desktop) {
C$.c$$jalview_gui_Desktop$Z.apply(this, [desktop, true]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_Desktop$Z', function (desktop, showjconsole) {
Clazz.super_(C$, this,1);
this.parent=desktop;
var bounds=desktop.getLastKnownDimensions$S("JAVA_CONSOLE_");
if (bounds == null ) {
this.frame=p$1.initFrame$S$I$I$I$I.apply(this, ["Jalview Java Console", (desktop.getWidth$()/2|0), (desktop.getHeight$()/4|0), desktop.getX$(), desktop.getY$()]);
} else {
this.frame=p$1.initFrame$S$I$I$I$I.apply(this, ["Jalview Java Console", bounds.width, bounds.height, bounds.x, bounds.y]);
}this.frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(14).c$$I$I,[this.MIN_WIDTH, this.MIN_HEIGHT]));
p$1.initConsole$Z.apply(this, [false]);
var jappender=Clazz.new_($I$(15));
jappender.setLayout$jalview_javascript_log4j_Layout(Clazz.new_($I$(16)));
$I$(15).setTextArea$javax_swing_JTextArea(this.textArea);
$I$(17).getRootLogger$().addAppender$jalview_javascript_log4j_Appender(jappender);
}, 1);

Clazz.newMeth(C$, 'stopConsole$', function () {
this.quit=true;
this.notifyAll$();
if (this.pout != null ) {
try {
this.reader.join$J(10);
this.pin.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
try {
this.reader2.join$J(10);
this.pin2.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
try {
this.textAppender.join$J(10);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}if (!this.frame.isVisible$()) {
this.frame.dispose$();
}});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (evt) {
this.frame.setVisible$Z(false);
p$1.closeConsoleGui.apply(this, []);
});

Clazz.newMeth(C$, 'closeConsoleGui', function () {
this.updateConsole=false;
if (this.parent == null ) {
this.stopConsole$();
} else {
this.parent.showConsole$Z(false);
}}, p$1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (evt) {
this.frame.setVisible$Z(false);
p$1.closeConsoleGui.apply(this, []);
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
p$1.trimBuffer$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'run$', function () {
try {
while ($I$(9).currentThread$() === this.reader ){
if (this.pin == null  || this.pin.available$() == 0 ) {
try {
this.wait$J(100);
if (this.pin.available$() == 0) {
p$1.trimBuffer$Z.apply(this, [false]);
}} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
} else {
throw ie;
}
}
}while (this.pin.available$() != 0){
var input=this.readLine$java_io_PipedInputStream(this.pin);
this.stdout.print$S(input);
var time=System.nanoTime$();
p$1.appendToTextArea$S.apply(this, [input]);
}
if (this.quit) {
return;
}}
while ($I$(9).currentThread$() === this.reader2 ){
if (this.pin2.available$() == 0) {
try {
this.wait$J(100);
if (this.pin2.available$() == 0) {
p$1.trimBuffer$Z.apply(this, [false]);
}} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
} else {
throw ie;
}
}
}while (this.pin2.available$() != 0){
var input=this.readLine$java_io_PipedInputStream(this.pin2);
this.stderr.print$S(input);
var time=System.nanoTime$();
p$1.appendToTextArea$S.apply(this, [input]);
}
if (this.quit) {
return;
}}
while ($I$(9).currentThread$() === this.textAppender ){
if (this.updateConsole) {
var count;
while (this.displayPipe.length$() > 0){
count=0;
var tmp=Clazz.new_($I$(2));
var replace;
{
replace=this.displayPipe;
this.displayPipe=tmp;
}this.textArea.append$S(replace.toString());
count+=replace.length$();
if (count > this.byteslim) {
p$1.trimBuffer$Z.apply(this, [false]);
}}
if (this.displayPipe.length$() == 0) {
try {
this.wait$J(100);
if (this.displayPipe.length$() == 0) {
p$1.trimBuffer$Z.apply(this, [false]);
}} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}} else {
try {
this.wait$J(100);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}if (this.quit) {
return;
}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.textArea.append$S("\nConsole reports an Internal error.");
this.textArea.append$S("The error is: " + e.getMessage$());
this.stderr.println$S("Console reports an Internal error.\nThe error is: " + e);
} else {
throw e;
}
}
if ($I$(9).currentThread$() === this.errorThrower ) {
try {
this.wait$J(1000);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
} else {
throw ie;
}
}
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(6).getString$S("exception.application_test_npe")]);
}});

Clazz.newMeth(C$, 'appendToTextArea$S', function (input) {
if (this.updateConsole == false ) {
return;
}var time=System.nanoTime$();
$I$(18).invokeLater$Runnable(((P$.Console$1||
(function(){var C$=Clazz.newClass(P$, "Console$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.Console'].displayPipe.append$S(this.$finals$.input);
});
})()
), Clazz.new_(P$.Console$1.$init$, [this, {input: input}])));
}, p$1);

Clazz.newMeth(C$, 'trimBuffer$Z', function (clear) {
if (this.header == null  && this.textArea.getLineCount$() > 5 ) {
try {
this.header=this.textArea.getText$I$I(0, this.textArea.getLineStartOffset$I(5)) + "\nTruncated...\n";
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}var tlength=this.textArea.getDocument$().getLength$();
if (this.header != null ) {
if (clear || (tlength > this.byteslim) ) {
try {
if (!clear) {
var time=System.nanoTime$();
this.textArea.replaceRange$S$I$I(this.header, 0, tlength - this.bytescut);
} else {
this.textArea.setText$S(this.header);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}}}, p$1);

Clazz.newMeth(C$, 'readLine$java_io_PipedInputStream', function ($in) {
var input="";
var lp=-1;
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

Clazz.newMeth(C$, 'setVisible$Z', function (selected) {
this.frame.setVisible$Z(selected);
if (selected == true ) {
this.redirectStreams$();
this.updateConsole=true;
this.frame.toFront$();
} else {
this.unredirectStreams$();
this.updateConsole=false;
}});

Clazz.newMeth(C$, 'getBounds$', function () {
if (this.frame != null ) {
return this.frame.getBounds$();
}return null;
});

Clazz.newMeth(C$, 'setHeader$S', function (string) {
this.header=string;
if (this.header.charAt$I(this.header.length$() - 1) != "\n") {
this.header += "\n";
}this.textArea.insert$S$I(this.header, 0);
});

Clazz.newMeth(C$, 'getHeader$', function () {
return this.header;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
