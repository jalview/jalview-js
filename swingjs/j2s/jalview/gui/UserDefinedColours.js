(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.awt.Font','java.util.ArrayList','javax.swing.JInternalFrame','jalview.gui.Desktop','jalview.util.MessageManager','jalview.schemes.ResidueProperties','jalview.util.ColorUtils','javax.swing.JButton','java.awt.event.MouseAdapter','java.awt.Color','java.awt.Insets','jalview.gui.JvOptionPane','jalview.util.Platform','jalview.schemes.UserColourScheme','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView','jalview.bin.Cache','jalview.schemes.ColourSchemeLoader','jalview.schemes.ColourSchemes','jalview.xml.binding.jalview.JalviewUserColours','java.io.PrintWriter','java.io.OutputStreamWriter','java.io.FileOutputStream',['jalview.xml.binding.jalview.JalviewUserColours','.Colour'],'jalview.util.Format','javax.xml.bind.JAXBContext','jalview.xml.binding.jalview.ObjectFactory']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UserDefinedColours", null, 'jalview.jbgui.GUserDefinedColours', 'javax.swing.event.ChangeListener');
C$.VERDANA_BOLD_10=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.VERDANA_BOLD_10=Clazz.new_($I$(1).c$$S$I$I,["Verdana", 1, 10]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ap=null;
this.oldColourScheme=null;
this.changedButNotSaved=false;
this.frame=null;
this.upperCaseButtons=null;
this.lowerCaseButtons=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel', function (alignPanel) {
C$.c$.apply(this, []);
this.lcaseColour.setEnabled$Z(false);
this.ap=alignPanel;
this.oldColourScheme=alignPanel.av.getGlobalColourScheme$();
if (Clazz.instanceOf(this.oldColourScheme, "jalview.schemes.UserColourScheme")) {
this.schemeName.setText$S(this.oldColourScheme.getSchemeName$());
if ((this.oldColourScheme).getLowerCaseColours$() != null ) {
this.caseSensitive.setSelected$Z(true);
this.lcaseColour.setEnabled$Z(true);
this.resetButtonPanel$Z(true);
} else {
this.resetButtonPanel$Z(false);
}} else {
this.resetButtonPanel$Z(false);
}this.showFrame$();
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.selectedButtons=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'showFrame$', function () {
this.colorChooser.getSelectionModel$().addChangeListener$javax_swing_event_ChangeListener(this);
this.frame=Clazz.new_($I$(3));
this.frame.setContentPane$java_awt_Container(this);
$I$(4).addInternalFrame$javax_swing_JInternalFrame$S$I$I$Z(this.frame, $I$(5).getString$S("label.user_defined_colours"), 810, 440, true);
});

Clazz.newMeth(C$, 'resetButtonPanel$Z', function (isCaseSensitive) {
this.buttonPanel.removeAll$();
if (this.upperCaseButtons == null ) {
this.upperCaseButtons=Clazz.new_($I$(2));
}for (var i=0; i < 20; i++) {
var label=isCaseSensitive ? $I$(6).aa[i] : $I$(6).aa2Triplet.get$O($I$(6).aa[i]).toString();
var button=this.makeButton$S$S$java_util_List$I(label, $I$(6).aa[i], this.upperCaseButtons, i);
this.buttonPanel.add$java_awt_Component(button);
}
this.buttonPanel.add$java_awt_Component(this.makeButton$S$S$java_util_List$I("B", "B", this.upperCaseButtons, 20));
this.buttonPanel.add$java_awt_Component(this.makeButton$S$S$java_util_List$I("Z", "Z", this.upperCaseButtons, 21));
this.buttonPanel.add$java_awt_Component(this.makeButton$S$S$java_util_List$I("X", "X", this.upperCaseButtons, 22));
this.buttonPanel.add$java_awt_Component(this.makeButton$S$S$java_util_List$I("Gap", "-", this.upperCaseButtons, 23));
if (!isCaseSensitive) {
this.gridLayout.setRows$I(6);
this.gridLayout.setColumns$I(4);
} else {
this.gridLayout.setRows$I(7);
var cols=7;
this.gridLayout.setColumns$I(cols + 1);
if (this.lowerCaseButtons == null ) {
this.lowerCaseButtons=Clazz.new_($I$(2));
}for (var i=0; i < 20; i++) {
var row=(i/cols|0) + 1;
var index=(row * cols) + i;
var button=this.makeButton$S$S$java_util_List$I($I$(6).aa[i].toLowerCase$(), $I$(6).aa[i].toLowerCase$(), this.lowerCaseButtons, i);
this.buttonPanel.add$java_awt_Component$I(button, index);
}
}if (isCaseSensitive) {
this.buttonPanel.add$java_awt_Component(this.makeButton$S$S$java_util_List$I("b", "b", this.lowerCaseButtons, 20));
this.buttonPanel.add$java_awt_Component(this.makeButton$S$S$java_util_List$I("z", "z", this.lowerCaseButtons, 21));
this.buttonPanel.add$java_awt_Component(this.makeButton$S$S$java_util_List$I("x", "x", this.lowerCaseButtons, 22));
}if (this.frame != null ) {
var newWidth=isCaseSensitive ? 970 : 810;
this.frame.setSize$I$I(newWidth, this.frame.getHeight$());
}this.buttonPanel.validate$();
this.validate$();
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (evt) {
var button=null;
var newColour=this.colorChooser.getColor$();
if (this.lcaseColour.isSelected$()) {
this.selectedButtons.clear$();
for (var i=0; i < this.lowerCaseButtons.size$(); i++) {
button=this.lowerCaseButtons.get$I(i);
button.setBackground$java_awt_Color(newColour);
button.setForeground$java_awt_Color($I$(7).brighterThan$java_awt_Color(button.getBackground$()));
}
}for (var i=0; i < this.selectedButtons.size$(); i++) {
button=this.selectedButtons.get$I(i);
button.setBackground$java_awt_Color(newColour);
button.setForeground$java_awt_Color($I$(7).brighterThan$java_awt_Color(newColour));
}
this.changedButNotSaved=true;
});

Clazz.newMeth(C$, 'colourButtonPressed$java_awt_event_MouseEvent', function (e) {
var pressed=e.getSource$();
if (e.isShiftDown$()) {
var start;
var end=e.getSource$();
if (this.selectedButtons.size$() > 0) {
start=this.selectedButtons.get$I(this.selectedButtons.size$() - 1);
} else {
start=e.getSource$();
}var startIndex=0;
var endIndex=0;
for (var b=0; b < this.buttonPanel.getComponentCount$(); b++) {
if (this.buttonPanel.getComponent$I(b) === start ) {
startIndex=b;
}if (this.buttonPanel.getComponent$I(b) === end ) {
endIndex=b;
}}
if (startIndex > endIndex) {
var temp=startIndex;
startIndex=endIndex;
endIndex=temp;
}for (var b=startIndex; b <= endIndex; b++) {
var button=this.buttonPanel.getComponent$I(b);
if (!this.selectedButtons.contains$O(button)) {
button.setForeground$java_awt_Color($I$(7).brighterThan$java_awt_Color(button.getBackground$()));
this.selectedButtons.add$TE(button);
}}
} else if (!e.isControlDown$()) {
for (var b=0; b < this.selectedButtons.size$(); b++) {
var button=this.selectedButtons.get$I(b);
button.setForeground$java_awt_Color($I$(7).darkerThan$java_awt_Color(button.getBackground$()));
}
this.selectedButtons.clear$();
pressed.setForeground$java_awt_Color($I$(7).brighterThan$java_awt_Color(pressed.getBackground$()));
this.selectedButtons.add$TE(pressed);
} else if (e.isControlDown$()) {
if (this.selectedButtons.contains$O(pressed)) {
pressed.setForeground$java_awt_Color($I$(7).darkerThan$java_awt_Color(pressed.getBackground$()));
this.selectedButtons.remove$O(pressed);
} else {
pressed.setForeground$java_awt_Color($I$(7).brighterThan$java_awt_Color(pressed.getBackground$()));
this.selectedButtons.add$TE(pressed);
}}if (this.selectedButtons.size$() > 0) {
this.colorChooser.setColor$java_awt_Color((this.selectedButtons.get$I(0)).getBackground$());
}});

Clazz.newMeth(C$, 'makeButton$S$S$java_util_List$I', function (label, residue, buttons, buttonIndex) {
var button;
var col;
if (buttonIndex < buttons.size$()) {
button=buttons.get$I(buttonIndex);
col=button.getBackground$();
} else {
button=Clazz.new_($I$(8));
button.addMouseListener$java_awt_event_MouseListener(((P$.UserDefinedColours$1||
(function(){var C$=Clazz.newClass(P$, "UserDefinedColours$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.gui.UserDefinedColours'].colourButtonPressed$java_awt_event_MouseEvent.apply(this.b$['jalview.gui.UserDefinedColours'], [e]);
});
})()
), Clazz.new_($I$(9), [this, null],P$.UserDefinedColours$1)));
buttons.add$TE(button);
col=$I$(10).white;
if (this.oldColourScheme != null  && this.oldColourScheme.isSimple$() ) {
col=this.oldColourScheme.findColour$C$I$jalview_datamodel_SequenceI$S$F(residue.charAt$I(0), 0, null, null, 0.0);
}}if (this.caseSensitive.isSelected$()) {
button.setMargin$java_awt_Insets(Clazz.new_($I$(11).c$$I$I$I$I,[2, 2, 2, 2]));
} else {
button.setMargin$java_awt_Insets(Clazz.new_($I$(11).c$$I$I$I$I,[2, 14, 2, 14]));
}button.setOpaque$Z(true);
button.setBackground$java_awt_Color(col);
button.setText$S(label);
button.setForeground$java_awt_Color($I$(7).darkerThan$java_awt_Color(col));
button.setFont$java_awt_Font(C$.VERDANA_BOLD_10);
return button;
});

Clazz.newMeth(C$, 'okButton_actionPerformed$', function () {
if (this.isNoSelectionMade$()) {
$I$(12).showMessageDialog$java_awt_Component$S$S$I($I$(4).desktop, $I$(5).getString$S("label.no_colour_selection_in_scheme"), $I$(5).getString$S("label.no_colour_selection_warn"), 2);
} else {
this.applyButton_actionPerformed$();
this.warnIfUnsavedChanges$();
try {
this.frame.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'warnIfUnsavedChanges$', function () {
if (!$I$(13).isJS$() && this.changedButNotSaved ) 
{}
});

Clazz.newMeth(C$, 'isNoSelectionMade$', function () {
var noUpperCaseSelected=this.upperCaseButtons == null  || this.upperCaseButtons.isEmpty$() ;
var noLowerCaseSelected=this.caseSensitive.isSelected$() && (this.lowerCaseButtons == null  || this.lowerCaseButtons.isEmpty$() ) ;
var noSelectionMade=noUpperCaseSelected || noLowerCaseSelected ;
return noSelectionMade;
});

Clazz.newMeth(C$, 'applyButton_actionPerformed$', function () {
if (this.isNoSelectionMade$()) {
$I$(12).showMessageDialog$java_awt_Component$S$S$I($I$(4).desktop, $I$(5).getString$S("label.no_colour_selection_in_scheme"), $I$(5).getString$S("label.no_colour_selection_warn"), 2);
}var ucs=this.getSchemeFromButtons$();
this.ap.alignFrame.changeColour$jalview_schemes_ColourSchemeI(ucs);
});

Clazz.newMeth(C$, 'getSchemeFromButtons$', function () {
var newColours=Clazz.array($I$(10), [24]);
var length=this.upperCaseButtons.size$();
if (length < 24) {
var i=0;
for (var btn, $btn = this.upperCaseButtons.iterator$(); $btn.hasNext$()&&((btn=($btn.next$())),1);) {
newColours[i]=btn.getBackground$();
i++;
}
} else {
for (var i=0; i < 24; i++) {
var button=this.upperCaseButtons.get$I(i);
newColours[i]=button.getBackground$();
}
}var ucs=Clazz.new_($I$(14).c$$java_awt_ColorA,[newColours]);
ucs.setName$S(this.schemeName.getText$());
if (this.caseSensitive.isSelected$()) {
newColours=Clazz.array($I$(10), [23]);
length=this.lowerCaseButtons.size$();
if (length < 23) {
var i=0;
for (var btn, $btn = this.lowerCaseButtons.iterator$(); $btn.hasNext$()&&((btn=($btn.next$())),1);) {
newColours[i]=btn.getBackground$();
i++;
}
} else {
for (var i=0; i < 23; i++) {
var button=this.lowerCaseButtons.get$I(i);
newColours[i]=button.getBackground$();
}
}ucs.setLowerCaseColours$java_awt_ColorA(newColours);
}return ucs;
});

Clazz.newMeth(C$, 'loadbutton_actionPerformed$', function () {
this.upperCaseButtons=Clazz.new_($I$(2));
this.lowerCaseButtons=Clazz.new_($I$(2));
var chooser=Clazz.new_($I$(15).c$$S$S,["jc", "Jalview User Colours"]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(16)));
chooser.setDialogTitle$S($I$(5).getString$S("label.load_colour_scheme"));
chooser.setToolTipText$S($I$(5).getString$S("action.load"));
chooser.setResponseHandler$O$Runnable(new Integer(0), ((P$.UserDefinedColours$2||
(function(){var C$=Clazz.newClass(P$, "UserDefinedColours$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var choice=this.$finals$.chooser.getSelectedFile$();
$I$(17).setProperty$S$S("LAST_DIRECTORY", choice.getParent$());
var ucs=$I$(18).loadColourScheme$S(choice.getAbsolutePath$());
var colors=ucs.getColours$();
this.b$['jalview.gui.UserDefinedColours'].schemeName.setText$S(ucs.getSchemeName$());
if (ucs.getLowerCaseColours$() != null ) {
this.b$['jalview.gui.UserDefinedColours'].caseSensitive.setSelected$Z(true);
this.b$['jalview.gui.UserDefinedColours'].lcaseColour.setEnabled$Z(true);
this.b$['jalview.gui.UserDefinedColours'].resetButtonPanel$Z.apply(this.b$['jalview.gui.UserDefinedColours'], [true]);
for (var i=0; i < this.b$['jalview.gui.UserDefinedColours'].lowerCaseButtons.size$(); i++) {
var button=this.b$['jalview.gui.UserDefinedColours'].lowerCaseButtons.get$I(i);
button.setBackground$java_awt_Color(ucs.getLowerCaseColours$()[i]);
}
} else {
this.b$['jalview.gui.UserDefinedColours'].caseSensitive.setSelected$Z(false);
this.b$['jalview.gui.UserDefinedColours'].lcaseColour.setEnabled$Z(false);
this.b$['jalview.gui.UserDefinedColours'].resetButtonPanel$Z.apply(this.b$['jalview.gui.UserDefinedColours'], [false]);
}for (var i=0; i < this.b$['jalview.gui.UserDefinedColours'].upperCaseButtons.size$(); i++) {
var button=this.b$['jalview.gui.UserDefinedColours'].upperCaseButtons.get$I(i);
button.setBackground$java_awt_Color(colors[i]);
}
this.b$['jalview.gui.UserDefinedColours'].addNewColourScheme$S.apply(this.b$['jalview.gui.UserDefinedColours'], [choice.getPath$()]);
});
})()
), Clazz.new_(P$.UserDefinedColours$2.$init$, [this, {chooser: chooser}])));
chooser.showOpenDialog$java_awt_Component(this);
});

Clazz.newMeth(C$, 'loadDefaultColours$', function () {
var ret=null;
var colours=$I$(17).getProperty$S("USER_DEFINED_COLOURS");
if (colours != null ) {
if (colours.indexOf$S("|") > -1) {
colours=colours.substring$I$I(0, colours.indexOf$S("|"));
}ret=$I$(18).loadColourScheme$S(colours);
}if (ret == null ) {
ret=Clazz.new_($I$(14).c$$S,["white"]);
}return ret;
}, 1);

Clazz.newMeth(C$, 'savebutton_actionPerformed$', function () {
var name=this.schemeName.getText$().trim$();
if (name.length$() < 1) {
$I$(12).showInternalMessageDialog$java_awt_Component$S$S$I($I$(4).desktop, $I$(5).getString$S("label.user_colour_scheme_must_have_name"), $I$(5).getString$S("label.no_name_colour_scheme"), 2);
}if (!$I$(13).isJS$() && $I$(19).getInstance$().nameExists$S(name) ) {

{}
}var chooser=Clazz.new_($I$(15).c$$S$S,["jc", "Jalview User Colours"]);
var fileView=Clazz.new_($I$(16));
chooser.setFileView$javax_swing_filechooser_FileView(fileView);
chooser.setDialogTitle$S($I$(5).getString$S("label.save_colour_scheme"));
chooser.setToolTipText$S($I$(5).getString$S("action.save"));
var option=chooser.showSaveDialog$java_awt_Component(this);
if (option == 0) {
var file=chooser.getSelectedFile$();
var updatedScheme=this.addNewColourScheme$S(file.getPath$());
this.saveToFile$java_io_File(file);
this.changedButNotSaved=false;
if (this.oldColourScheme != null  && name.equals$O(this.oldColourScheme.getSchemeName$()) ) {
this.oldColourScheme=updatedScheme;
this.applyButton_actionPerformed$();
}}});

Clazz.newMeth(C$, 'addNewColourScheme$S', function (filePath) {
var defaultColours=$I$(17).getDefault$S$S("USER_DEFINED_COLOURS", filePath);
if (defaultColours.indexOf$S(filePath) == -1) {
if (defaultColours.length$() > 0) {
defaultColours=defaultColours.concat$S("|");
}defaultColours=defaultColours.concat$S(filePath);
}$I$(17).setProperty$S$S("USER_DEFINED_COLOURS", defaultColours);
var ucs=this.getSchemeFromButtons$();
$I$(19).getInstance$().registerColourScheme$jalview_schemes_ColourSchemeI(ucs);
if (this.ap != null ) {
this.ap.alignFrame.buildColourMenu$();
}return ucs;
});

Clazz.newMeth(C$, 'saveToFile$java_io_File', function (toFile) {
var ucs=Clazz.new_($I$(20));
var name=this.schemeName.getText$();
ucs.setSchemeName$S(name);
try {
var out=Clazz.new_($I$(21).c$$java_io_Writer,[Clazz.new_($I$(22).c$$java_io_OutputStream$S,[Clazz.new_($I$(23).c$$java_io_File,[toFile]), "UTF-8"])]);
for (var i=0; i < this.buttonPanel.getComponentCount$(); i++) {
var button=this.buttonPanel.getComponent$I(i);
var col=Clazz.new_($I$(24));
col.setName$S(button.getText$());
col.setRGB$S($I$(25).getHexString$java_awt_Color(button.getBackground$()));
ucs.getColour$().add$TE(col);
}
var jaxbContext=$I$(26).newInstance$ClassA([Clazz.getClass($I$(20))]);
var jaxbMarshaller=jaxbContext.createMarshaller$();
jaxbMarshaller.marshal$O$java_io_Writer(Clazz.new_($I$(27)).createJalviewUserColours$jalview_xml_binding_jalview_JalviewUserColours(ucs), out);
out.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'cancelButton_actionPerformed$', function () {
this.ap.alignFrame.changeColour$jalview_schemes_ColourSchemeI(this.oldColourScheme);
this.ap.paintAlignment$Z$Z(true, true);
try {
this.frame.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'caseSensitive_actionPerformed$', function () {
var selected=this.caseSensitive.isSelected$();
this.resetButtonPanel$Z(selected);
this.lcaseColour.setEnabled$Z(selected);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
