(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.webexport"),I$=[[0,'org.jmol.i18n.GT','javax.swing.SpinnerNumberModel','org.openscience.jmol.app.webexport.WebExport','javax.swing.JSpinner','javax.swing.JPanel','javax.swing.JLabel','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ScriptButtons", null, 'org.openscience.jmol.app.webexport.WebPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$javax_swing_JFileChooser$org_openscience_jmol_app_webexport_WebPanelA$I', function (vwr, fc, webPanels, panelIndex) {
C$.superclazz.c$$org_jmol_viewer_Viewer$javax_swing_JFileChooser$org_openscience_jmol_app_webexport_WebPanelA$I.apply(this, [vwr, fc, webPanels, panelIndex]);
C$.$init$.apply(this);
this.panelName="script_btn";
this.listLabel=$I$(1).$$S("These names will be used for button labels");
}, 1);

Clazz.newMeth(C$, 'appletParamPanel$', function () {
var appletSizeModel=Clazz.new_($I$(2).c$$I$I$I$I,[$I$(3).getScriptButtonPercent$(), 20, 100, 5]);
this.appletSizeSpinnerP=Clazz.new_($I$(4).c$$javax_swing_SpinnerModel,[appletSizeModel]);
var appletSizePPanel=Clazz.new_($I$(5));
appletSizePPanel.add$java_awt_Component(Clazz.new_($I$(6).c$$S,[$I$(1).$$S("% of window for JSmol width:")]));
appletSizePPanel.add$java_awt_Component(this.appletSizeSpinnerP);
return (appletSizePPanel);
});

Clazz.newMeth(C$, 'fixHtml$S', function (html) {
var size=((this.appletSizeSpinnerP.getModel$())).getNumber$().intValue$();
var appletheightpercent=100;
var nbuttons=this.getInstanceList$().getModel$().getSize$();
if (!this.allSelectedWidgets$().isEmpty$()) appletheightpercent=85;
html=$I$(7).rep$S$S$S(html, "@WIDTHPERCENT@", "" + size);
html=$I$(7).rep$S$S$S(html, "@LEFTPERCENT@", "" + (100 - size));
html=$I$(7).rep$S$S$S(html, "@NBUTTONS@", "" + nbuttons);
html=$I$(7).rep$S$S$S(html, "@HEIGHT@", "" + appletheightpercent);
html=$I$(7).rep$S$S$S(html, "@BOTTOMPERCENT@", "" + (100 - appletheightpercent));
return html;
});

Clazz.newMeth(C$, 'getAppletDefs$I$S$StringBuilder$org_openscience_jmol_app_webexport_JmolInstance', function (i, html, appletDefs, instance) {
var name=instance.name;
var buttonname=instance.javaname;
var widgetDefs="";
var row=0;
if (!instance.whichWidgets.isEmpty$()) {
if (instance.whichWidgets.get$I(3)) {
widgetDefs += "<div class=\"widgetItemAnim\"> " + this.theWidgets.widgetList[3].getJavaScript$I$org_openscience_jmol_app_webexport_JmolInstance(0, instance) + "</div>" ;
}widgetDefs += "<table><tbody><tr>";
for (var j=0; j < this.nWidgets; j++) {
if (j == 3) {
continue;
}if (instance.whichWidgets.get$I(j)) {
if (row == 3) {
widgetDefs += "</tr><tr>";
row=0;
}widgetDefs += "<td class=\"widgetItemScBtn\">" + this.theWidgets.widgetList[j].getJavaScript$I$org_openscience_jmol_app_webexport_JmolInstance(0, instance) + "</td>" ;
row=row + 1;
}}
widgetDefs += "</tr></tbody></table>";
}if (i == 0) {
html=$I$(7).rep$S$S$S(html, "@APPLETNAME0@", $I$(1).escapeHTML$S(buttonname));
}var s=this.htmlAppletTemplate;
s=$I$(7).rep$S$S$S(s, "@APPLETNAME0@", $I$(1).escapeHTML$S(buttonname));
s=$I$(7).rep$S$S$S(s, "@NAME@", "&#x201C;" + $I$(1).escapeHTML$S(name) + "&#x201D;" );
s=$I$(7).rep$S$S$S(s, "@LABEL@", $I$(1).escapeHTML$S(name));
s=$I$(7).rep$S$S$S(s, "@I@", "" + i);
s=$I$(7).rep$S$S$S(s, "@WIDGETSTR@", widgetDefs);
appletDefs.append$S(s);
return html;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
