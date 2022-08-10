(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','jalview.util.MessageManager','jalview.schemes.ColourSchemes','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.gui.ColourMenuHelper','java.awt.event.MouseAdapter','StringBuilder','jalview.bin.Cache','jalview.schemes.ColourSchemeLoader']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColourMenuHelper", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ColourChangeListener',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'addMenuItems$javax_swing_JMenu$jalview_gui_ColourMenuHelper_ColourChangeListener$jalview_datamodel_AnnotatedCollectionI$Z',  function (colourMenu, client, coll, simpleOnly) {
var colours=Clazz.new_($I$(1,1));
if (!simpleOnly) {
var noColourmenuItem=Clazz.new_([$I$(3).getString$S("label.none")],$I$(2,1).c$$S);
noColourmenuItem.setName$S("None");
noColourmenuItem.addActionListener$java_awt_event_ActionListener(((P$.ColourMenuHelper$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ColourMenuHelper$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.client.changeColour_actionPerformed$S("None");
});
})()
), Clazz.new_(P$.ColourMenuHelper$1.$init$,[this, {client:client}])));
colourMenu.add$javax_swing_JMenuItem(noColourmenuItem);
colours.add$javax_swing_AbstractButton(noColourmenuItem);
}var colourSchemes=$I$(4).getInstance$().getColourSchemes$();
for (var scheme, $scheme = colourSchemes.iterator$(); $scheme.hasNext$()&&((scheme=($scheme.next$())),1);) {
if (simpleOnly && !scheme.isSimple$() ) {
continue;
}var name=scheme.getSchemeName$();
var label=$I$(3).getStringOrReturn$S$S("label.colourScheme_", name);
var radioItem=Clazz.new_($I$(2,1).c$$S,[label]);
radioItem.setName$S(name);
radioItem.setEnabled$Z(scheme.isApplicableTo$jalview_datamodel_AnnotatedCollectionI(coll));
if (Clazz.instanceOf(scheme, "jalview.schemes.UserColourScheme")) {
radioItem.addMouseListener$java_awt_event_MouseListener(((P$.ColourMenuHelper$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ColourMenuHelper$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
if (evt.isPopupTrigger$() && !this.$finals$.radioItem.isSelected$() ) {
this.offerRemoval$();
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
if (evt.isPopupTrigger$() && !this.$finals$.radioItem.isSelected$() ) {
this.offerRemoval$();
}});

Clazz.newMeth(C$, 'offerRemoval$',  function () {
var al=this.$finals$.radioItem.getActionListeners$()[0];
this.$finals$.radioItem.removeActionListener$java_awt_event_ActionListener(al);
var option=$I$(5,"showInternalConfirmDialog$java_awt_Component$S$S$I",[$I$(6).desktop, $I$(3).getString$S("label.remove_from_default_list"), $I$(3).getString$S("label.remove_user_defined_colour"), 0]);
if (option == 0) {
$I$(4).getInstance$().removeColourScheme$S(this.$finals$.radioItem.getName$());
this.$finals$.colourMenu.remove$javax_swing_JMenuItem(this.$finals$.radioItem);
$I$(7).updatePreferences$();
} else {
this.$finals$.radioItem.addActionListener$java_awt_event_ActionListener(al);
}});
})()
), Clazz.new_($I$(8,1),[this, {radioItem:radioItem,colourMenu:colourMenu}],P$.ColourMenuHelper$2)));
}radioItem.addActionListener$java_awt_event_ActionListener(((P$.ColourMenuHelper$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ColourMenuHelper$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.$finals$.client.changeColour_actionPerformed$S(this.$finals$.name);
});
})()
), Clazz.new_(P$.ColourMenuHelper$3.$init$,[this, {client:client,name:name}])));
colourMenu.add$javax_swing_JMenuItem(radioItem);
colours.add$javax_swing_AbstractButton(radioItem);
}
if (Clazz.instanceOf(client, "jalview.gui.AlignFrame")) {
var label=$I$(3).getString$S("action.user_defined");
var userDefinedColour=Clazz.new_($I$(2,1).c$$S,[label]);
userDefinedColour.setName$S("*User Defined*");
userDefinedColour.addActionListener$java_awt_event_ActionListener(((P$.ColourMenuHelper$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ColourMenuHelper$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.client.changeColour_actionPerformed$S("*User Defined*");
});
})()
), Clazz.new_(P$.ColourMenuHelper$4.$init$,[this, {client:client}])));
colourMenu.add$javax_swing_JMenuItem(userDefinedColour);
colours.add$javax_swing_AbstractButton(userDefinedColour);
}return colours;
}, 1);

Clazz.newMeth(C$, 'setColourSelected$javax_swing_JMenu$jalview_schemes_ColourSchemeI',  function (colourMenu, cs) {
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

Clazz.newMeth(C$, 'updatePreferences$',  function () {
var coloursFound=Clazz.new_($I$(9,1));
var files=$I$(10).getProperty$S("USER_DEFINED_COLOURS").split$S("\\|");
for (var file, $file = 0, $$file = files; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
try {
var ucs=$I$(11).loadColourScheme$S(file);
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
$I$(10,"setProperty$S$S",["USER_DEFINED_COLOURS", coloursFound.toString()]);
} else {
$I$(10).applicationProperties.remove$O("USER_DEFINED_COLOURS");
}}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.ColourMenuHelper, "ColourChangeListener", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:33 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
