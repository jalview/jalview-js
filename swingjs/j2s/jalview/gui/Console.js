(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.io.PipedInputStream','StringBuffer','javax.swing.JComboBox',['jalview.log.JLoggerI','.LogLevel'],'java.awt.Toolkit','javax.swing.JTextArea','javax.swing.BorderFactory','javax.swing.JScrollPane','java.awt.event.MouseAdapter','javax.swing.JButton','jalview.util.MessageManager','javax.swing.JLabel','jalview.bin.Console','java.awt.BorderLayout','javax.swing.JPanel','java.awt.GridBagLayout','java.awt.GridBagConstraints','Thread','jalview.util.ChannelProperties','java.awt.datatransfer.StringSelection','java.io.PipedOutputStream','java.io.PrintStream','java.awt.GraphicsEnvironment','javax.swing.JFrame','java.awt.Dimension','jalview.util.Platform','jalview.log.JalviewAppender','jalview.log.JLoggerLog4j','javax.swing.SwingUtilities']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Console", null, 'java.awt.event.WindowAdapter', ['java.awt.event.WindowListener', 'java.awt.event.ActionListener', 'Runnable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.byteslim=102400;
this.bytescut=76800;
this.stdout=System.out;
this.stderr=System.err;
this.pin=Clazz.new_($I$(1,1));
this.pin2=Clazz.new_($I$(1,1));
this.displayPipe=Clazz.new_($I$(2,1));
this.parent=null;
this.MIN_WIDTH=300;
this.MIN_HEIGHT=250;
this.logLevelCombo=Clazz.new_($I$(3,1));
this.startingLogLevel=$I$(4).INFO;
this.pout=null;
this.perr=null;
this.header=null;
this.updateConsole=false;
},1);

C$.$fields$=[['Z',['quit','updateConsole'],'I',['byteslim','bytescut','MIN_WIDTH','MIN_HEIGHT'],'S',['header'],'O',['frame','javax.swing.JFrame','textArea','javax.swing.JTextArea','reader','Thread','+reader2','+textAppender','stdout','java.io.PrintStream','+stderr','pin','java.io.PipedInputStream','+pin2','displayPipe','StringBuffer','errorThrower','Thread','parent','jalview.gui.Desktop','logLevelCombo','javax.swing.JComboBox','startingLogLevel','jalview.log.JLoggerI.LogLevel','pout','java.io.PipedOutputStream','+perr']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
var screenSize=$I$(5).getDefaultToolkit$().getScreenSize$();
this.frame=p$1.initFrame$S$I$I$I$I.apply(this, ["Java Console", (screenSize.width/2|0), (screenSize.height/2|0), -1, -1]);
p$1.initConsole$Z.apply(this, [true]);
}, 1);

Clazz.newMeth(C$, 'initConsole$Z',  function (visible) {
p$1.initConsole$Z$Z.apply(this, [visible, true]);
}, p$1);

Clazz.newMeth(C$, 'initConsole$Z$Z',  function (visible, redirect) {
this.textArea=Clazz.new_($I$(6,1));
this.textArea.setEditable$Z(false);
var caret=this.textArea.getCaret$();
caret.setUpdatePolicy$I(2);
var pausedBorder=$I$(7,"createMatteBorder$I$I$I$I$java_awt_Color",[2, 2, 2, 2, this.textArea.getForeground$()]);
var noBorder=$I$(7).createEmptyBorder$I$I$I$I(2, 2, 2, 2);
var scrollPane=Clazz.new_($I$(8,1).c$$java_awt_Component,[this.textArea]);
scrollPane.setBorder$javax_swing_border_Border(noBorder);
this.textArea.addMouseListener$java_awt_event_MouseListener(((P$.Console$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Console$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (e.getButton$() == 1) {
if (this.$finals$.caret.getUpdatePolicy$() == 2) {
this.$finals$.caret.setUpdatePolicy$I(1);
this.$finals$.scrollPane.setBorder$javax_swing_border_Border(this.$finals$.pausedBorder);
} else {
this.$finals$.caret.setUpdatePolicy$I(2);
this.b$['jalview.gui.Console'].textArea.setCaretPosition$I(this.b$['jalview.gui.Console'].textArea.getDocument$().getLength$());
this.$finals$.scrollPane.setBorder$javax_swing_border_Border(this.$finals$.noBorder);
}}});
})()
), Clazz.new_($I$(9,1),[this, {pausedBorder:pausedBorder,caret:caret,scrollPane:scrollPane,noBorder:noBorder}],P$.Console$1)));
var clearButton=Clazz.new_([$I$(11).getString$S("action.clear")],$I$(10,1).c$$S);
var copyToClipboardButton=Clazz.new_([$I$(11).getString$S("label.copy_to_clipboard")],$I$(10,1).c$$S);
copyToClipboardButton.addActionListener$java_awt_event_ActionListener(((P$.Console$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Console$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.copyConsoleTextToClipboard.apply(this.b$['jalview.gui.Console'], []);
});
})()
), Clazz.new_(P$.Console$2.$init$,[this, null])));
copyToClipboardButton.addMouseListener$java_awt_event_MouseListener(((P$.Console$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Console$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bg=this.b$['jalview.gui.Console'].textArea.getBackground$();
this.fg=this.b$['jalview.gui.Console'].textArea.getForeground$();
},1);

C$.$fields$=[['O',['bg','java.awt.Color','+fg']]]

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.gui.Console'].textArea.setBackground$java_awt_Color(this.b$['jalview.gui.Console'].textArea.getSelectionColor$());
this.b$['jalview.gui.Console'].textArea.setForeground$java_awt_Color(this.b$['jalview.gui.Console'].textArea.getSelectedTextColor$());
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.gui.Console'].textArea.setBackground$java_awt_Color(this.bg);
this.b$['jalview.gui.Console'].textArea.setForeground$java_awt_Color(this.fg);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.Console$3)));
copyToClipboardButton.setToolTipText$S($I$(11).getString$S("label.copy_to_clipboard_tooltip"));
var logLevelLabel=Clazz.new_([$I$(11).getString$S("label.log_level") + ":"],$I$(12,1).c$$S);
this.logLevelCombo.addItem$O($I$(4).TRACE);
this.logLevelCombo.addItem$O($I$(4).DEBUG);
this.logLevelCombo.addItem$O($I$(4).INFO);
this.logLevelCombo.addItem$O($I$(4).WARN);
this.startingLogLevel=$I$(13).log == null  ? $I$(4).INFO : $I$(13).log.getLevel$();
p$1.setChosenLogLevelCombo.apply(this, []);
this.logLevelCombo.addActionListener$java_awt_event_ActionListener(((P$.Console$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Console$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ($I$(13).log != null ) {
$I$(13).log.setLevel$jalview_log_JLoggerI_LogLevel(this.b$['jalview.gui.Console'].logLevelCombo.getSelectedItem$());
}});
})()
), Clazz.new_(P$.Console$4.$init$,[this, null])));
this.frame.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1)));
this.frame.getContentPane$().add$java_awt_Component$O(scrollPane, "Center");
var southPanel=Clazz.new_($I$(15,1));
southPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16,1)));
var logLevelPanel=Clazz.new_($I$(15,1));
logLevelPanel.setAlignmentX$F(0.0);
logLevelPanel.add$java_awt_Component(logLevelLabel);
logLevelPanel.add$java_awt_Component(this.logLevelCombo);
var logLevelTooltip=$I$(11,"formatMessage$S$OA",["label.log_level_tooltip", Clazz.array(java.lang.Object, -1, [this.startingLogLevel.toString()])]);
logLevelLabel.setToolTipText$S(logLevelTooltip);
this.logLevelCombo.setToolTipText$S(logLevelTooltip);
var gbc=Clazz.new_($I$(17,1));
gbc.gridx=0;
gbc.gridy=0;
gbc.gridwidth=1;
gbc.gridheight=1;
gbc.weightx=0.1;
southPanel.add$java_awt_Component$O(logLevelPanel, gbc);
++gbc.gridx;
gbc.weightx=0.8;
gbc.fill=2;
southPanel.add$java_awt_Component$O(clearButton, gbc);
++gbc.gridx;
gbc.weightx=0.1;
gbc.fill=0;
southPanel.add$java_awt_Component$O(copyToClipboardButton, gbc);
southPanel.setVisible$Z(true);
this.frame.getContentPane$().add$java_awt_Component$O(southPanel, "South");
this.frame.setVisible$Z(visible);
this.updateConsole=visible;
this.frame.addWindowListener$java_awt_event_WindowListener(this);
clearButton.addActionListener$java_awt_event_ActionListener(this);
if (redirect) {
this.redirectStreams$();
} else {
this.unredirectStreams$();
}this.quit=false;
this.reader=Clazz.new_($I$(18,1).c$$Runnable,[this]);
this.reader.setDaemon$Z(true);
this.reader.start$();
this.reader2=Clazz.new_($I$(18,1).c$$Runnable,[this]);
this.reader2.setDaemon$Z(true);
this.reader2.start$();
this.textAppender=Clazz.new_($I$(18,1).c$$Runnable,[this]);
this.textAppender.setDaemon$Z(true);
this.textAppender.start$();
this.frame.setIconImages$java_util_List($I$(19).getIconList$());
}, p$1);

Clazz.newMeth(C$, 'setChosenLogLevelCombo',  function () {
p$1.setChosenLogLevelCombo$jalview_log_JLoggerI_LogLevel.apply(this, [this.startingLogLevel]);
}, p$1);

Clazz.newMeth(C$, 'setChosenLogLevelCombo$jalview_log_JLoggerI_LogLevel',  function (setLogLevel) {
this.logLevelCombo.setSelectedItem$O(setLogLevel);
if (!this.logLevelCombo.getSelectedItem$().equals$O(setLogLevel)) {
if (setLogLevel != null  && Clazz.instanceOf(setLogLevel, "jalview.log.JLoggerI.LogLevel") ) {
var added=false;
for (var i=0; i < this.logLevelCombo.getItemCount$(); i++) {
var l=this.logLevelCombo.getItemAt$I(i);
if (l.compareTo$Enum(setLogLevel) >= 0) {
this.logLevelCombo.insertItemAt$O$I(setLogLevel, i);
added=true;
break;
}}
if (!added) {
this.logLevelCombo.addItem$O(setLogLevel);
}this.logLevelCombo.setSelectedItem$O(setLogLevel);
} else {
this.logLevelCombo.setSelectedItem$O($I$(4).INFO);
}}}, p$1);

Clazz.newMeth(C$, 'copyConsoleTextToClipboard',  function () {
var consoleText=this.textArea.getText$();
var consoleTextSelection=Clazz.new_($I$(20,1).c$$S,[consoleText]);
var cb=$I$(5).getDefaultToolkit$().getSystemClipboard$();
cb.setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(consoleTextSelection, null);
}, p$1);

Clazz.newMeth(C$, 'redirectStreams$',  function () {
if (this.pout == null ) {
try {
this.pout=Clazz.new_($I$(21,1).c$$java_io_PipedInputStream,[this.pin]);
System.setOut$java_io_PrintStream(Clazz.new_($I$(22,1).c$$java_io_OutputStream$Z,[this.pout, true]));
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
this.perr=Clazz.new_($I$(21,1).c$$java_io_PipedInputStream,[this.pin2]);
System.setErr$java_io_PrintStream(Clazz.new_($I$(22,1).c$$java_io_OutputStream$Z,[this.perr, true]));
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

Clazz.newMeth(C$, 'unredirectStreams$',  function () {
if (this.pout != null ) {
try {
System.setOut$java_io_PrintStream(this.stdout);
this.pout.flush$();
this.pout.close$();
this.pin=Clazz.new_($I$(1,1));
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
this.pin2=Clazz.new_($I$(1,1));
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

Clazz.newMeth(C$, 'test$',  function () {
System.out.println$S("Hello World 2");
System.out.println$S("All fonts available to Graphic2D:\n");
var ge=$I$(23).getLocalGraphicsEnvironment$();
var fontNames=ge.getAvailableFontFamilyNames$();
for (var n=0; n < fontNames.length; n++) {
System.out.println$S(fontNames[n]);
}
System.out.println$S("\nLets throw an error on this console");
this.errorThrower=Clazz.new_($I$(18,1).c$$Runnable,[this]);
this.errorThrower.setDaemon$Z(true);
this.errorThrower.start$();
});

Clazz.newMeth(C$, 'initFrame$S$I$I$I$I',  function (string, i, j, x, y) {
var frame=Clazz.new_($I$(24,1).c$$S,[string]);
frame.setName$S(string);
if (x == -1) {
x=(i/2|0);
}if (y == -1) {
y=(j/2|0);
}frame.setBounds$I$I$I$I(x, y, i, j);
return frame;
}, p$1);

Clazz.newMeth(C$, 'c$$jalview_gui_Desktop',  function (desktop) {
C$.c$$jalview_gui_Desktop$Z.apply(this, [desktop, true]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_Desktop$Z',  function (desktop, showjconsole) {
Clazz.super_(C$, this);
this.parent=desktop;
var bounds=desktop.getLastKnownDimensions$S("JAVA_CONSOLE_");
if (bounds == null ) {
this.frame=p$1.initFrame$S$I$I$I$I.apply(this, [$I$(19).getProperty$S("app_name") + " Java Console", (desktop.getWidth$()/2|0), (desktop.getHeight$()/4|0), desktop.getX$(), desktop.getY$()]);
} else {
this.frame=p$1.initFrame$S$I$I$I$I.apply(this, [$I$(19).getProperty$S("app_name") + " Java Console", bounds.width, bounds.height, bounds.x, bounds.y]);
}this.frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(25,1).c$$I$I,[this.MIN_WIDTH, this.MIN_HEIGHT]));
p$1.initConsole$Z.apply(this, [false]);
var level=this.logLevelCombo.getSelectedItem$();
if (!$I$(26).isJS$()) {
var jappender=Clazz.new_($I$(27,1).c$$jalview_log_JLoggerI_LogLevel,[level]);
$I$(27).setTextArea$javax_swing_JTextArea(this.textArea);
jappender.start$();
if ($I$(13).log != null  && Clazz.instanceOf($I$(13).log, "jalview.log.JLoggerLog4j") ) {
$I$(28,"addAppender$jalview_log_JLoggerLog4j$org_apache_logging_log4j_core_Appender",[$I$(13).log, jappender]);
}}}, 1);

Clazz.newMeth(C$, 'stopConsole$',  function () {
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

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent',  function (evt) {
this.frame.setVisible$Z(false);
p$1.closeConsoleGui.apply(this, []);
});

Clazz.newMeth(C$, 'closeConsoleGui',  function () {
this.updateConsole=false;
if (this.parent == null ) {
this.stopConsole$();
} else {
this.parent.showConsole$Z(false);
}}, p$1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (evt) {
this.frame.setVisible$Z(false);
p$1.closeConsoleGui.apply(this, []);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
p$1.trimBuffer$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'run$',  function () {
try {
while ($I$(18).currentThread$() === this.reader ){
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
while ($I$(18).currentThread$() === this.reader2 ){
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
while ($I$(18).currentThread$() === this.textAppender ){
if (this.updateConsole) {
var count;
while (this.displayPipe.length$() > 0){
count=0;
var tmp=Clazz.new_($I$(2,1));
var replace;
{
replace=this.displayPipe;
this.displayPipe=tmp;
}this.textArea.append$S(replace.toString());
(count=Long.$add(count,(replace.length$())));
if (Long.$gt(count,this.byteslim )) {
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
if ($I$(18).currentThread$() === this.errorThrower ) {
try {
this.wait$J(1000);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
} else {
throw ie;
}
}
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(11).getString$S("exception.application_test_npe")]);
}});

Clazz.newMeth(C$, 'appendToTextArea$S',  function (input) {
if (this.updateConsole == false ) {
return;
}var time=System.nanoTime$();
$I$(29,"invokeLater$Runnable",[((P$.Console$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Console$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.Console'].displayPipe.append$S(this.$finals$.input);
});
})()
), Clazz.new_(P$.Console$5.$init$,[this, {input:input}]))]);
}, p$1);

Clazz.newMeth(C$, 'trimBuffer$Z',  function (clear) {
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

Clazz.newMeth(C$, 'readLine$java_io_PipedInputStream',  function ($in) {
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

Clazz.newMeth(C$, 'setVisible$Z',  function (selected) {
this.frame.setVisible$Z(selected);
if (selected == true ) {
p$1.setChosenLogLevelCombo.apply(this, []);
this.redirectStreams$();
this.updateConsole=true;
this.frame.toFront$();
} else {
if ($I$(13).log != null ) {
$I$(13).log.setLevel$jalview_log_JLoggerI_LogLevel(this.startingLogLevel);
}this.unredirectStreams$();
this.updateConsole=false;
}});

Clazz.newMeth(C$, 'getBounds$',  function () {
if (this.frame != null ) {
return this.frame.getBounds$();
}return null;
});

Clazz.newMeth(C$, 'setHeader$S',  function (string) {
this.header=string;
if (this.header.charAt$I(this.header.length$() - 1) != "\n") {
this.header+="\n";
}this.textArea.insert$S$I(this.header, 0);
});

Clazz.newMeth(C$, 'getHeader$',  function () {
return this.header;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:33 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
