(function(){var P$=Clazz.newPackage("components"),p$1={},I$=[[0,'java.awt.BorderLayout','javax.swing.JTextField','javax.swing.JPasswordField','javax.swing.JFormattedTextField','java.util.Calendar','javax.swing.JLabel','javax.swing.BorderFactory','javax.swing.JPanel','java.awt.GridBagLayout','java.awt.GridBagConstraints','javax.swing.JTextArea','java.awt.Font','javax.swing.JScrollPane','java.awt.Dimension','javax.swing.JSplitPane','java.awt.GridLayout','java.awt.Toolkit','javax.swing.JEditorPane','test.components.TextSamplerDemo','javax.swing.JTextPane','javax.swing.text.StyleContext','javax.swing.text.StyleConstants','javax.swing.JButton','java.awt.Cursor','java.awt.Insets','javax.swing.ImageIcon','javax.swing.JFrame','javax.swing.SwingUtilities','javax.swing.UIManager','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TextSamplerDemo", null, 'javax.swing.JPanel', 'java.awt.event.ActionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.newline=null;
this.actionLabel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.newline="\n";
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1)));
var textField=Clazz.new_($I$(2).c$$I,[10]);
textField.setActionCommand$S("JTextField");
textField.addActionListener$java_awt_event_ActionListener(this);
var passwordField=Clazz.new_($I$(3).c$$I,[10]);
passwordField.setActionCommand$S("JPasswordField");
passwordField.addActionListener$java_awt_event_ActionListener(this);
var ftf=Clazz.new_($I$(4).c$$O,[$I$(5).getInstance$().getTime$()]);
ftf.setActionCommand$S("JTextField");
ftf.addActionListener$java_awt_event_ActionListener(this);
var textFieldLabel=Clazz.new_($I$(6).c$$S,["JTextField: "]);
textFieldLabel.setLabelFor$java_awt_Component(textField);
var passwordFieldLabel=Clazz.new_($I$(6).c$$S,["JPasswordField: "]);
passwordFieldLabel.setLabelFor$java_awt_Component(passwordField);
var ftfLabel=Clazz.new_($I$(6).c$$S,["JFormattedTextField: "]);
ftfLabel.setLabelFor$java_awt_Component(ftf);
this.actionLabel=Clazz.new_($I$(6).c$$S,["Type text in a field and press Enter."]);
this.actionLabel.setBorder$javax_swing_border_Border($I$(7).createEmptyBorder$I$I$I$I(10, 0, 0, 0));
var textControlsPane=Clazz.new_($I$(8));
var gridbag=Clazz.new_($I$(9));
var c=Clazz.new_($I$(10));
textControlsPane.setLayout$java_awt_LayoutManager(gridbag);
var labels=Clazz.array($I$(6), -1, [textFieldLabel, passwordFieldLabel, ftfLabel]);
var textFields=Clazz.array($I$(2), -1, [textField, passwordField, ftf]);
p$1.addLabelTextRows$javax_swing_JLabelA$javax_swing_JTextFieldA$java_awt_GridBagLayout$java_awt_Container.apply(this, [labels, textFields, gridbag, textControlsPane]);
c.gridwidth=0;
c.anchor=17;
c.weightx=1.0;
textControlsPane.add$java_awt_Component$O(this.actionLabel, c);
textControlsPane.setBorder$javax_swing_border_Border($I$(7).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border($I$(7).createTitledBorder$S("Text Fields"), $I$(7).createEmptyBorder$I$I$I$I(5, 5, 5, 5)));
var textArea=Clazz.new_($I$(11).c$$S,["This is an editable JTextArea. A text area is a \"plain\" text component, which means that although it can display text in any font, all of the text is in the same font."]);
textArea.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Serif", 2, 16]));
textArea.setLineWrap$Z(true);
textArea.setWrapStyleWord$Z(true);
var areaScrollPane=Clazz.new_($I$(13).c$$java_awt_Component,[textArea]);
areaScrollPane.setVerticalScrollBarPolicy$I(22);
areaScrollPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(14).c$$I$I,[250, 250]));
areaScrollPane.setBorder$javax_swing_border_Border($I$(7).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border($I$(7).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border($I$(7).createTitledBorder$S("Plain Text"), $I$(7).createEmptyBorder$I$I$I$I(5, 5, 5, 5)), areaScrollPane.getBorder$()));
var editorPane=p$1.createEditorPane.apply(this, []);
var editorScrollPane=Clazz.new_($I$(13).c$$java_awt_Component,[editorPane]);
editorScrollPane.setVerticalScrollBarPolicy$I(22);
editorScrollPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(14).c$$I$I,[250, 145]));
editorScrollPane.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(14).c$$I$I,[10, 10]));
var textPane=p$1.createTextPane.apply(this, []);
var paneScrollPane=Clazz.new_($I$(13).c$$java_awt_Component,[textPane]);
paneScrollPane.setVerticalScrollBarPolicy$I(22);
paneScrollPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(14).c$$I$I,[250, 155]));
paneScrollPane.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(14).c$$I$I,[10, 10]));
var splitPane=Clazz.new_($I$(15).c$$I$java_awt_Component$java_awt_Component,[0, editorScrollPane, paneScrollPane]);
splitPane.setOneTouchExpandable$Z(true);
splitPane.setResizeWeight$D(0.5);
var rightPane=Clazz.new_($I$(8).c$$java_awt_LayoutManager,[Clazz.new_($I$(16).c$$I$I,[1, 0])]);
rightPane.add$java_awt_Component(splitPane);
rightPane.setBorder$javax_swing_border_Border($I$(7).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border($I$(7).createTitledBorder$S("Styled Text"), $I$(7).createEmptyBorder$I$I$I$I(5, 5, 5, 5)));
var leftPane=Clazz.new_($I$(8).c$$java_awt_LayoutManager,[Clazz.new_($I$(1))]);
leftPane.add$java_awt_Component$O(textControlsPane, "First");
leftPane.add$java_awt_Component$O(areaScrollPane, "Center");
this.add$java_awt_Component$O(leftPane, "Before");
this.add$java_awt_Component$O(rightPane, "After");
}, 1);

Clazz.newMeth(C$, 'addLabelTextRows$javax_swing_JLabelA$javax_swing_JTextFieldA$java_awt_GridBagLayout$java_awt_Container', function (labels, textFields, gridbag, container) {
var c=Clazz.new_($I$(10));
c.anchor=13;
var numLabels=labels.length;
for (var i=0; i < numLabels; i++) {
c.gridwidth=-1;
c.fill=0;
c.weightx=0.0;
container.add$java_awt_Component$O(labels[i], c);
c.gridwidth=0;
c.fill=2;
c.weightx=1.0;
container.add$java_awt_Component$O(textFields[i], c);
}
}, p$1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var prefix="You typed \"";
if ("JTextField".equals$O(e.getActionCommand$())) {
var source=e.getSource$();
this.actionLabel.setText$S(prefix + source.getText$() + "\"" );
} else if ("JPasswordField".equals$O(e.getActionCommand$())) {
var source=e.getSource$();
this.actionLabel.setText$S(prefix +  String.instantialize(source.getPassword$()) + "\"" );
} else if ("JButton".equals$O(e.getActionCommand$())) {
$I$(17).getDefaultToolkit$().beep$();
}});

Clazz.newMeth(C$, 'createEditorPane', function () {
var editorPane=((P$.t.components.TextSamplerDemo$9443||
(function(){var C$=Clazz.newClass(P$, "t.components.TextSamplerDemo$9443", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JEditorPane'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDocument$', function () {
return C$.superclazz.prototype.getDocument$.apply(this, []);
});

Clazz.newMeth(C$, 'setDocument$javax_swing_text_Document', function (doc) {
C$.superclazz.prototype.setDocument$javax_swing_text_Document.apply(this, [doc]);
});
})()
), Clazz.new_($I$(18), [this, null],test.components.TextSamplerDemo$9443));
editorPane.setEditable$Z(false);
var helpURL=Clazz.getClass($I$(19)).getResource$S("TextSamplerDemoHelp.html");
if (helpURL != null ) {
try {
editorPane.setPage$java_net_URL(helpURL);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Attempted to read a bad URL: " + helpURL);
} else {
throw e;
}
}
} else {
System.err.println$S("Couldn\'t find file: TextSampleDemoHelp.html");
}return editorPane;
}, p$1);

Clazz.newMeth(C$, 'createTextPane', function () {
var initString=Clazz.array(String, -1, ["This is an editable JTextPane, ", "another ", "styled ", "text ", "component, ", "which supports embedded components..." + this.newline, " " + this.newline, "...and embedded icons..." + this.newline, " ", this.newline + "JTextPane is a subclass of JEditorPane that " + "uses a StyledEditorKit and StyledDocument, and provides " + "cover methods for interacting with those objects." ]);
var initStyles=Clazz.array(String, -1, ["regular", "italic", "bold", "small", "large", "regular", "button", "regular", "icon", "regular"]);
var textPane=Clazz.new_($I$(20));
var doc=textPane.getStyledDocument$();
this.addStylesToDocument$javax_swing_text_StyledDocument(doc);
try {
for (var i=0; i < initString.length; i++) {
doc.insertString$I$S$javax_swing_text_AttributeSet(doc.getLength$(), initString[i], doc.getStyle$S(initStyles[i]));
}
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
System.err.println$S("Couldn\'t insert initial text into text pane.");
} else {
throw ble;
}
}
return textPane;
}, p$1);

Clazz.newMeth(C$, 'addStylesToDocument$javax_swing_text_StyledDocument', function (doc) {
var def=$I$(21).getDefaultStyleContext$().getStyle$S("default");
var regular=doc.addStyle$S$javax_swing_text_Style("regular", def);
$I$(22).setFontFamily$javax_swing_text_MutableAttributeSet$S(def, "SansSerif");
var s=doc.addStyle$S$javax_swing_text_Style("italic", regular);
$I$(22).setItalic$javax_swing_text_MutableAttributeSet$Z(s, true);
s=doc.addStyle$S$javax_swing_text_Style("bold", regular);
$I$(22).setBold$javax_swing_text_MutableAttributeSet$Z(s, true);
s=doc.addStyle$S$javax_swing_text_Style("small", regular);
$I$(22).setFontSize$javax_swing_text_MutableAttributeSet$I(s, 10);
s=doc.addStyle$S$javax_swing_text_Style("large", regular);
$I$(22).setFontSize$javax_swing_text_MutableAttributeSet$I(s, 16);
s=doc.addStyle$S$javax_swing_text_Style("icon", regular);
$I$(22).setAlignment$javax_swing_text_MutableAttributeSet$I(s, 1);
var pigIcon=test.components.TextSamplerDemo.createImageIcon$S$S("images/Pig.gif", "a cute pig");
if (pigIcon != null ) {
$I$(22).setIcon$javax_swing_text_MutableAttributeSet$javax_swing_Icon(s, pigIcon);
}s=doc.addStyle$S$javax_swing_text_Style("button", regular);
$I$(22).setAlignment$javax_swing_text_MutableAttributeSet$I(s, 1);
var soundIcon=test.components.TextSamplerDemo.createImageIcon$S$S("images/sound.gif", "sound icon");
var button=Clazz.new_($I$(23));
if (soundIcon != null ) {
button.setIcon$javax_swing_Icon(soundIcon);
} else {
button.setText$S("BEEP");
}button.setCursor$java_awt_Cursor($I$(24).getDefaultCursor$());
button.setMargin$java_awt_Insets(Clazz.new_($I$(25).c$$I$I$I$I,[0, 0, 0, 0]));
button.setActionCommand$S("JButton");
button.addActionListener$java_awt_event_ActionListener(this);
$I$(22).setComponent$javax_swing_text_MutableAttributeSet$java_awt_Component(s, button);
});

Clazz.newMeth(C$, 'createImageIcon$S$S', function (path, description) {
if (true) return null;
var imgURL=Clazz.getClass($I$(19)).getResource$S(path);
if (imgURL != null ) {
return Clazz.new_($I$(26).c$$java_net_URL$S,[imgURL, description]);
} else {
System.err.println$S("Couldn't find file: " + path);
return null;
}}, 1);

Clazz.newMeth(C$, 'createAndShowGUI$', function () {
var frame=Clazz.new_($I$(27).c$$S,["TextSamplerDemo"]);
frame.setDefaultCloseOperation$I(3);
frame.add$java_awt_Component(Clazz.new_($I$(19)));
frame.pack$();
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
$I$(28).invokeLater$Runnable(((P$.t.components.TextSamplerDemo$14948||
(function(){var C$=Clazz.newClass(P$, "t.components.TextSamplerDemo$14948", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(29).put$O$O("swing.boldMetal", $I$(30).FALSE);
test.components.TextSamplerDemo.createAndShowGUI$();
});
})()
), Clazz.new_(test.components.TextSamplerDemo$14948.$init$, [this, null])));
}, 1);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-07 12:28:42 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
