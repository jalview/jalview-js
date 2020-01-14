(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','jalview.util.MessageManager','jalview.schemes.ColourSchemes','jalview.gui.JvOptionPane','jalview.gui.Desktop','java.awt.event.MouseAdapter','StringBuilder','jalview.bin.Cache','jalview.schemes.ColourSchemeLoader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ColourMenuHelper", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'addMenuItems$javax_swing_JMenu$jalview_gui_ColourMenuHelper_ColourChangeListener$jalview_datamodel_AnnotatedCollectionI$Z', function (colourMenu, client, coll, simpleOnly) {
var colours=Clazz.new_($I$(1));
if (!simpleOnly) {
var noColourmenuItem=Clazz.new_($I$(2).c$$S,[$I$(3).getString$S("label.none")]);
noColourmenuItem.setName$S("None");
noColourmenuItem.addActionListener$java_awt_event_ActionListener(((P$.ColourMenuHelper$1||
(function(){var C$=Clazz.newClass(P$, "ColourMenuHelper$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.$finals$.client.changeColour_actionPerformed$("None");
});
})()
), Clazz.new_(P$.ColourMenuHelper$1.$init$, [this, {client: client}])));
colourMenu.add$javax_swing_JMenuItem(noColourmenuItem);
colours.add$javax_swing_AbstractButton(noColourmenuItem);
}var colourSchemes=$I$(4).getInstance$().getColourSchemes$();
for (var scheme, $scheme = colourSchemes.iterator$(); $scheme.hasNext$()&&((scheme=($scheme.next$())),1);) {
if (simpleOnly && !scheme.isSimple$() ) {
continue;
}var name=scheme.getSchemeName$();
var label=$I$(3).getStringOrReturn$S$S("label.colourScheme_", name);
var radioItem=Clazz.new_($I$(2).c$$S,[label]);
radioItem.setName$S(name);
radioItem.setEnabled$Z(scheme.isApplicableTo$jalview_datamodel_AnnotatedCollectionI(coll));
if (Clazz.instanceOf(scheme, "jalview.schemes.UserColourScheme")) {
radioItem.addMouseListener$java_awt_event_MouseListener(((P$.ColourMenuHelper$2||
(function(){var C$=Clazz.newClass(P$, "ColourMenuHelper$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
if (evt.isPopupTrigger$() && !this.$finals$.radioItem.isSelected$() ) {
this.offerRemoval$();
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
if (evt.isPopupTrigger$() && !this.$finals$.radioItem.isSelected$() ) {
this.offerRemoval$();
}});

Clazz.newMeth(C$, 'offerRemoval$', function () {
var al=this.$finals$.radioItem.getActionListeners$()[0];
this.$finals$.radioItem.removeActionListener$java_awt_event_ActionListener(al);
var option=$I$(5).showInternalConfirmDialog$java_awt_Component$S$S$I($I$(6).desktop, $I$(3).getString$S("label.remove_from_default_list"), $I$(3).getString$S("label.remove_user_defined_colour"), 0);
if (option == 0) {
$I$(4).getInstance$().removeColourScheme$S(this.$finals$.radioItem.getName$());
this.$finals$.colourMenu.remove$javax_swing_JMenuItem(this.$finals$.radioItem);
P$.ColourMenuHelper.updatePreferences$();
} else {
this.$finals$.radioItem.addActionListener$java_awt_event_ActionListener(al);
}});
})()
), Clazz.new_($I$(7), [this, {radioItem: radioItem, colourMenu: colourMenu}],P$.ColourMenuHelper$2)));
}radioItem.addActionListener$java_awt_event_ActionListener(((P$.ColourMenuHelper$3||
(function(){var C$=Clazz.newClass(P$, "ColourMenuHelper$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
this.$finals$.client.changeColour_actionPerformed$(this.$finals$.name);
});
})()
), Clazz.new_(P$.ColourMenuHelper$3.$init$, [this, {client: client, name: name}])));
colourMenu.add$javax_swing_JMenuItem(radioItem);
colours.add$javax_swing_AbstractButton(radioItem);
}
if (Clazz.instanceOf(client, "jalview.gui.AlignFrame")) {
var label=$I$(3).getString$S("action.user_defined");
var userDefinedColour=Clazz.new_($I$(2).c$$S,[label]);
userDefinedColour.setName$S("*User Defined*");
userDefinedColour.addActionListener$java_awt_event_ActionListener(((P$.ColourMenuHelper$4||
(function(){var C$=Clazz.newClass(P$, "ColourMenuHelper$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.$finals$.client.changeColour_actionPerformed$("*User Defined*");
});
})()
), Clazz.new_(P$.ColourMenuHelper$4.$init$, [this, {client: client}])));
colourMenu.add$javax_swing_JMenuItem(userDefinedColour);
colours.add$javax_swing_AbstractButton(userDefinedColour);
}return colours;
}, 1);

Clazz.newMeth(C$, 'setColourSelected$javax_swing_JMenu$jalview_schemes_ColourSchemeI', function (colourMenu, cs) {
var colourName=cs == null  ? "None" : cs.getSchemeName$();
var none=null;
var userDefined=null;
for (var menuItem, $menuItem = 0, $$menuItem = colourMenu.getMenuComponents$(); $menuItem<$$menuItem.length&&((menuItem=($$menuItem[$menuItem])),1);$menuItem++) {
if (Clazz.instanceOf(menuItem, "javax.swing.JRadioButtonMenuItem")) {
var radioButton=menuItem;
var buttonName=radioButton.getName$();
if (buttonName.equals$O(colourName)) {
radioButton.setSelected$Z(true);
return;
}if ("None".equals$O(buttonName)) {
none=radioButton;
}if ("*User Defined*".equals$O(buttonName)) {
userDefined=radioButton;
}}}
if (Clazz.instanceOf(cs, "jalview.schemes.UserColourScheme") && userDefined != null  ) {
userDefined.setSelected$Z(true);
} else if (none != null ) {
none.setSelected$Z(true);
}}, 1);

Clazz.newMeth(C$, 'updatePreferences$', function () {
var coloursFound=Clazz.new_($I$(8));
var files=$I$(9).getProperty$S("USER_DEFINED_COLOURS").split$S("\\|");
for (var file, $file = 0, $$file = files; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
try {
var ucs=$I$(10).loadColourScheme$S(file);
if (ucs != null  && $I$(4).getInstance$().nameExists$S(ucs.getName$()) ) {
if (coloursFound.length$() > 0) {
coloursFound.append$S("|");
}coloursFound.append$S(file);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Error loading User ColourFile\n" + ex);
} else {
throw ex;
}
}
}
if (coloursFound.toString().length$() > 1) {
$I$(9).setProperty$S$S("USER_DEFINED_COLOURS", coloursFound.toString());
} else {
$I$(9).applicationProperties.remove$O("USER_DEFINED_COLOURS");
}}, 1);
;
(function(){var C$=Clazz.newInterface(P$.ColourMenuHelper, "ColourChangeListener", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
