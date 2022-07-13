(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.webexport"),I$=[[0,'org.jmol.i18n.GT','javax.swing.SpinnerNumberModel','org.openscience.jmol.app.webexport.WebExport','javax.swing.JSpinner','javax.swing.JPanel','javax.swing.JLabel','javajs.util.PT','java.util.Hashtable']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PopInJmol", null, 'org.openscience.jmol.app.webexport.WebPanel', 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$javax_swing_JFileChooser$org_openscience_jmol_app_webexport_WebPanelA$I', function (vwr, fc, webPanels, panelIndex) {
;C$.superclazz.c$$org_jmol_viewer_Viewer$javax_swing_JFileChooser$org_openscience_jmol_app_webexport_WebPanelA$I.apply(this,[vwr, fc, webPanels, panelIndex]);C$.$init$.apply(this);
this.panelName="pop_in";
this.listLabel=$I$(1).$$S("These names will be used as filenames used by JSmol");
}, 1);

Clazz.newMeth(C$, 'appletParamPanel$', function () {
var appletSizeModelW=Clazz.new_([$I$(3).getPopInWidth$(), 50, 1000, 25],$I$(2,1).c$$I$I$I$I);
var appletSizeModelH=Clazz.new_([$I$(3).getPopInHeight$(), 50, 1000, 25],$I$(2,1).c$$I$I$I$I);
this.appletSizeSpinnerW=Clazz.new_($I$(4,1).c$$javax_swing_SpinnerModel,[appletSizeModelW]);
this.appletSizeSpinnerW.addChangeListener$javax_swing_event_ChangeListener(this);
this.appletSizeSpinnerH=Clazz.new_($I$(4,1).c$$javax_swing_SpinnerModel,[appletSizeModelH]);
this.appletSizeSpinnerH.addChangeListener$javax_swing_event_ChangeListener(this);
var appletSizeWHPanel=Clazz.new_($I$(5,1));
appletSizeWHPanel.add$java_awt_Component(Clazz.new_([$I$(1).$$S("JSmol width:")],$I$(6,1).c$$S));
appletSizeWHPanel.add$java_awt_Component(this.appletSizeSpinnerW);
appletSizeWHPanel.add$java_awt_Component(Clazz.new_([$I$(1).$$S("height:")],$I$(6,1).c$$S));
appletSizeWHPanel.add$java_awt_Component(this.appletSizeSpinnerH);
return (appletSizeWHPanel);
});

Clazz.newMeth(C$, 'fixHtml$S', function (html) {
var s="";
var nApplets=this.getInstanceList$().getModel$().getSize$();
for (var i=0; i < nApplets; i++) {
var javaname=this.getInstanceList$().getModel$().getElementAt$I(i).javaname;
s += "   var jmolInfo" + i + "=jmolInfo;\n" ;
s += "   jmolInfo" + i + ".coverImage=\"" + javaname + ".png\";\n" ;
s += "   jmolInfo" + i + ".coverScript=\"javascript revealPopinWidgets(" + i + ");\";\n" ;
s += "   jmolInfo" + i + ".script=\"load " + javaname + ".spt\";\n" ;
s += "   $(\"#Jmol" + i + "\").html(Jmol.getAppletHtml(\"jmolApplet" + i + "\",jmolInfo" + i + "));\n" ;
}
html=$I$(7).rep$S$S$S(html, "@APPLETINITIALIZATION@", s);
return html;
});

Clazz.newMeth(C$, 'getAppletDefs$I$S$StringBuilder$org_openscience_jmol_app_webexport_JmolInstance', function (i, html, appletDefs, instance) {
var divClass=(i % 2 == 0 ? "floatRight" : "floatLeft");
var name=instance.name;
var javaname=instance.javaname;
var JmolSizeW=instance.width;
var JmolSizeH=instance.height;
var widgetDefs="";
if (!instance.whichWidgets.isEmpty$()) {
widgetDefs += "<div id=\"JmolCntl" + i + "\">" ;
for (var j=0; j < this.nWidgets; j++) {
if (instance.whichWidgets.get$I(j)) {
widgetDefs += "\n<div class=\"widgetItemPopin\">" + this.theWidgets.widgetList[j].getJavaScript$I$org_openscience_jmol_app_webexport_JmolInstance(i, instance) + "</div>\n" ;
}}
widgetDefs += "</div>";
}var s=this.htmlAppletTemplate;
s=$I$(7).rep$S$S$S(s, "@CLASS@", "" + divClass);
s=$I$(7).rep$S$S$S(s, "@I@", "" + i);
s=$I$(7).rep$S$S$S(s, "@WIDTH@", "" + JmolSizeW);
s=$I$(7).rep$S$S$S(s, "@HEIGHT@", "" + JmolSizeH);
s=$I$(7,"rep$S$S$S",[s, "@NAME@", "&#x201C;" + $I$(1).escapeHTML$S(name) + "&#x201D;" ]);
s=$I$(7,"rep$S$S$S",[s, "@APPLETNAME@", $I$(1).escapeHTML$S(javaname)]);
s=$I$(7).rep$S$S$S(s, "@LEFTWIDGETS@", "");
s=$I$(7).rep$S$S$S(s, "@RIGHTWIDGETS@", widgetDefs);
appletDefs.append$S(s);
return html;
});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
if (e.getSource$() === this.appletSizeSpinnerW  || e.getSource$() === this.appletSizeSpinnerH  ) {
var width=((this.appletSizeSpinnerW.getModel$())).getNumber$().intValue$();
var height=((this.appletSizeSpinnerH.getModel$())).getNumber$().intValue$();
$I$(3).setPopInDim$I$I(width, height);
var whichList=this.getInstanceList$();
var list=whichList.getSelectedIndices$();
if (list.length != 1) return;
var index=whichList.getSelectedIndex$();
var instance=whichList.getModel$().getElementAt$I(index);
instance.width=width;
instance.height=height;
var params=Clazz.new_($I$(8,1));
params.put$O$O("fileName", instance.pictFile);
params.put$O$O("type", "PNG");
params.put$O$O("quality", Integer.valueOf$I(2));
params.put$O$O("width", Integer.valueOf$I(width));
params.put$O$O("height", Integer.valueOf$I(height));
this.vwr.outputToFile$java_util_Map(params);
return;
}if (e.getSource$() === this.appletSizeSpinnerP ) {
var percent=((this.appletSizeSpinnerP.getModel$())).getNumber$().intValue$();
$I$(3).setScriptButtonPercent$I(percent);
return;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
