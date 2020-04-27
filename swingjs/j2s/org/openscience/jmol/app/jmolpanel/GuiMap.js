(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.i18n.GT','org.jmol.console.KeyJMenu','org.jmol.console.KeyJMenuItem','org.jmol.console.KeyJCheckBoxMenuItem','org.jmol.console.KeyJRadioButtonMenuItem','org.jmol.console.KeyJCheckBox','org.jmol.console.JmolButton','org.jmol.console.GenericConsole','org.openscience.jmol.app.jmolpanel.JmolResourceHandler','javajs.util.PT','StringBuilder','java.io.BufferedReader','java.io.InputStreamReader','org.jmol.viewer.JC']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GuiMap");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.Map','+labels']]
,['O',['language','java.lang.Object','translations','String[]']]]

Clazz.newMeth(C$, 'setupLabels', function () {
this.labels=Clazz.new_($I$(1,1));
this.labels.put$O$O("macros", $I$(2).$$S("&Macros"));
this.labels.put$O$O("idfileMenu", $I$(2).$$S("&File"));
this.labels.put$O$O("file", $I$(2).$$S("&File"));
this.labels.put$O$O("newwin", $I$(2).$$S("&New"));
this.labels.put$O$O("open", $I$(2).$$S("&Open"));
this.labels.put$O$O("openTip", $I$(2).$$S("Open a file."));
this.labels.put$O$O("openurl", $I$(2).$$S("Open &URL"));
this.labels.put$O$O("openpdb", $I$(2).$$S("&Get PDB"));
this.labels.put$O$O("openmol", $I$(2).$$S("Get &MOL"));
this.labels.put$O$O("reloadScript", $I$(2).$$S("&Reload"));
this.labels.put$O$O("spectrumMenu", "&Spectra");
this.labels.put$O$O("openJSpecViewScript", "JSpecView");
this.labels.put$O$O("simulate1HSpectrumScript", "Simulated 1H Spectrum");
this.labels.put$O$O("simulate13CSpectrumScript", "Simulated 13C Spectrum");
this.labels.put$O$O("editor", $I$(2).$$S("Scrip&t Editor..."));
this.labels.put$O$O("console", $I$(2).$$S("Conso&le..."));
this.labels.put$O$O("jconsole", $I$(2).$$S("Jmol Java &Console"));
this.labels.put$O$O("atomsetchooser", $I$(2).$$S("AtomSet&Chooser..."));
this.labels.put$O$O("saveas", $I$(2).$$S("&Save As..."));
this.labels.put$O$O("exportMenu", $I$(2).$$S("&Export"));
this.labels.put$O$O("export", $I$(2).$$S("Export &Image..."));
this.labels.put$O$O("exportTip", $I$(2).$$S("Save current view as an image."));
this.labels.put$O$O("toweb", $I$(2).$$S("Export to &Web Page..."));
this.labels.put$O$O("towebTip", $I$(2).$$S("Export one or more views to a web page."));
this.labels.put$O$O("povray", $I$(2).$$S("Render in POV-&Ray..."));
this.labels.put$O$O("povrayTip", $I$(2).$$S("Render in POV-Ray"));
this.labels.put$O$O("write", $I$(2).$$S("Write &State..."));
this.labels.put$O$O("writeTip", $I$(2).$$S("Save current view as a Jmol state script."));
this.labels.put$O$O("print", $I$(2).$$S("&Print..."));
this.labels.put$O$O("printTip", $I$(2).$$S("Print view."));
this.labels.put$O$O("close", $I$(2).$$S("&Close"));
this.labels.put$O$O("exit", $I$(2).$$S("E&xit"));
this.labels.put$O$O("recentFiles", $I$(2).$$S("Recent &Files..."));
this.labels.put$O$O("edit", $I$(2).$$S("&Edit"));
this.labels.put$O$O("selectall", $I$(2).$$S("Select &All"));
this.labels.put$O$O("deselectall", $I$(2).$$S("Deselect All"));
this.labels.put$O$O("copyImage", $I$(2).$$S("Copy &Image"));
this.labels.put$O$O("copyScript", $I$(2).$$S("Copy Script"));
this.labels.put$O$O("prefs", $I$(2).$$S("Pr&eferences..."));
this.labels.put$O$O("pasteClipboard", $I$(2).$$S("&Paste"));
this.labels.put$O$O("editSelectAllScript", $I$(2).$$S("Select &All"));
this.labels.put$O$O("selectMenu", $I$(2).$$S("&Select"));
this.labels.put$O$O("selectMenuText", $I$(2).$$S("&Select"));
this.labels.put$O$O("selectAllScript", $I$(2).$$S("&All"));
this.labels.put$O$O("selectNoneScript", $I$(2).$$S("&None"));
this.labels.put$O$O("selectHydrogenScript", $I$(2).$$S("Hydrogen"));
this.labels.put$O$O("selectCarbonScript", $I$(2).$$S("Carbon"));
this.labels.put$O$O("selectNitrogenScript", $I$(2).$$S("Nitrogen"));
this.labels.put$O$O("selectOxygenScript", $I$(2).$$S("Oxygen"));
this.labels.put$O$O("selectPhosphorusScript", $I$(2).$$S("Phosphorus"));
this.labels.put$O$O("selectSulfurScript", $I$(2).$$S("Sulfur"));
this.labels.put$O$O("selectAminoScript", $I$(2).$$S("Amino"));
this.labels.put$O$O("selectNucleicScript", $I$(2).$$S("Nucleic"));
this.labels.put$O$O("selectWaterScript", $I$(2).$$S("Water"));
this.labels.put$O$O("selectHeteroScript", $I$(2).$$S("Hetero"));
this.labels.put$O$O("display", $I$(2).$$S("&Display"));
this.labels.put$O$O("atomMenu", $I$(2).$$S("&Atom"));
this.labels.put$O$O("atomNoneScript", $I$(2).$$S("&None"));
this.labels.put$O$O("atom15Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0}% van der Waals"), "15"],$I$(2).o$S$O));
this.labels.put$O$O("atom20Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0}% van der Waals"), "20"],$I$(2).o$S$O));
this.labels.put$O$O("atom25Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0}% van der Waals"), "25"],$I$(2).o$S$O));
this.labels.put$O$O("atom100Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0}% van der Waals"), "100"],$I$(2).o$S$O));
this.labels.put$O$O("bondMenu", $I$(2).$$S("&Bond"));
this.labels.put$O$O("bondNoneScript", $I$(2).$$S("&None"));
this.labels.put$O$O("bondWireframeScript", $I$(2).$$S("&Wireframe"));
this.labels.put$O$O("bond100Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0} \u00c5"), "0.10"],$I$(2).o$S$O));
this.labels.put$O$O("bond150Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0} \u00c5"), "0.15"],$I$(2).o$S$O));
this.labels.put$O$O("bond200Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0} \u00c5"), "0.20"],$I$(2).o$S$O));
this.labels.put$O$O("labelMenu", $I$(2).$$S("&Label"));
this.labels.put$O$O("labelNoneScript", $I$(2).$$S("&None"));
this.labels.put$O$O("labelSymbolScript", $I$(2).$$S("&Symbol"));
this.labels.put$O$O("labelNameScript", $I$(2).$$S("&Name"));
this.labels.put$O$O("labelNumberScript", $I$(2).$$S("&Number"));
this.labels.put$O$O("labelCenteredScript", $I$(2).$$S("&Centered"));
this.labels.put$O$O("labelUpperRightScript", $I$(2).$$S("&Upper right"));
this.labels.put$O$O("vectorMenu", $I$(2).$$S("&Vector"));
this.labels.put$O$O("vectorOffScript", $I$(2).$$S("&None"));
this.labels.put$O$O("vectorOnScript", $I$(2).$$S("&On"));
this.labels.put$O$O("vector3Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0} pixels"), "3"],$I$(2).o$S$O));
this.labels.put$O$O("vector005Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0} \u00c5"), "0.05"],$I$(2).o$S$O));
this.labels.put$O$O("vector01Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0} \u00c5"), "0.1"],$I$(2).o$S$O));
this.labels.put$O$O("vectorScale02Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("Scale {0}"), "0.2"],$I$(2).o$S$O));
this.labels.put$O$O("vectorScale05Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("Scale {0}"), "0.5"],$I$(2).o$S$O));
this.labels.put$O$O("vectorScale1Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("Scale {0}"), "1"],$I$(2).o$S$O));
this.labels.put$O$O("vectorScale2Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("Scale {0}"), "2"],$I$(2).o$S$O));
this.labels.put$O$O("vectorScale5Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("Scale {0}"), "5"],$I$(2).o$S$O));
this.labels.put$O$O("zoomMenu", $I$(2).$$S("&Zoom"));
this.labels.put$O$O("zoom100Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0}%"), "100"],$I$(2).o$S$O));
this.labels.put$O$O("zoom150Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0}%"), "150"],$I$(2).o$S$O));
this.labels.put$O$O("zoom200Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0}%"), "200"],$I$(2).o$S$O));
this.labels.put$O$O("zoom400Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0}%"), "400"],$I$(2).o$S$O));
this.labels.put$O$O("zoom800Script", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("{0}%"), "800"],$I$(2).o$S$O));
this.labels.put$O$O("perspectiveCheck", $I$(2).$$S("&Perspective Depth"));
this.labels.put$O$O("axesCheck", $I$(2).$$S("A&xes"));
this.labels.put$O$O("boundboxCheck", $I$(2).$$S("B&ounding Box"));
this.labels.put$O$O("hydrogensCheck", $I$(2).$$S("&Hydrogens"));
this.labels.put$O$O("vectorsCheck", $I$(2).$$S("V&ectors"));
this.labels.put$O$O("measurementsCheck", $I$(2).$$S("&Measurements"));
this.labels.put$O$O("resize", $I$(2).$$S("Resi&ze"));
this.labels.put$O$O("view", $I$(2).$$S("&View"));
this.labels.put$O$O("front", $I$(2).$$S("&Front"));
this.labels.put$O$O("top", $I$(2).$$S("&Top"));
this.labels.put$O$O("bottom", $I$(2).$$S("&Bottom"));
this.labels.put$O$O("right", $I$(2).$$S("&Right"));
this.labels.put$O$O("left", $I$(2).$$S("&Left"));
this.labels.put$O$O("axisaScript", $I$(2).$$S("Axis a"));
this.labels.put$O$O("axisbScript", $I$(2).$$S("Axis b"));
this.labels.put$O$O("axiscScript", $I$(2).$$S("Axis c"));
this.labels.put$O$O("axisxScript", $I$(2).$$S("Axis x"));
this.labels.put$O$O("axisyScript", $I$(2).$$S("Axis y"));
this.labels.put$O$O("axiszScript", $I$(2).$$S("Axis z"));
this.labels.put$O$O("transform", $I$(2).$$S("Tr&ansform..."));
this.labels.put$O$O("definecenter", $I$(2).$$S("Define &Center"));
this.labels.put$O$O("tools", $I$(2).$$S("&Tools"));
this.labels.put$O$O("gauss", $I$(2).$$S("&Gaussian..."));
this.labels.put$O$O("viewMeasurementTable", $I$(2).$$S("&Measurements") + "...");
this.labels.put$O$O("distanceUnitsMenu", $I$(2).$$S("Distance &Units"));
this.labels.put$O$O("distanceNanometersScript", $I$(2).$$S("&Nanometers 1E-9"));
this.labels.put$O$O("distanceAngstromsScript", $I$(2).$$S("&Angstroms 1E-10"));
this.labels.put$O$O("distancePicometersScript", $I$(2).$$S("&Picometers 1E-12"));
this.labels.put$O$O("distanceHzScript", (function(a,f){return f.apply(null,a)})(["&Hz (NMR J-coupling)"],$I$(2).$$S));
this.labels.put$O$O("animateMenu", $I$(2).$$S("&Animate..."));
this.labels.put$O$O("vibrateMenu", $I$(2).$$S("&Vibrate..."));
this.labels.put$O$O("graph", $I$(2).$$S("&Graph..."));
this.labels.put$O$O("chemicalShifts", $I$(2).$$S("Calculate chemical &shifts..."));
this.labels.put$O$O("crystprop", $I$(2).$$S("&Crystal Properties"));
this.labels.put$O$O("animateOnceScript", $I$(2).$$S("&Once"));
this.labels.put$O$O("animateLoopScript", $I$(2).$$S("&Loop"));
this.labels.put$O$O("animatePalindromeScript", $I$(2).$$S("P&alindrome"));
this.labels.put$O$O("animateStopScript", $I$(2).$$S("&Stop animation"));
this.labels.put$O$O("animateRewindScript", $I$(2).$$S("&Rewind to first frame"));
this.labels.put$O$O("animateRewindScriptTip", $I$(2).$$S("Rewind to first frame"));
this.labels.put$O$O("animateNextScript", $I$(2).$$S("Go to &next frame"));
this.labels.put$O$O("animateNextScriptTip", $I$(2).$$S("Go to next frame"));
this.labels.put$O$O("animatePrevScript", $I$(2).$$S("Go to &previous frame"));
this.labels.put$O$O("animatePrevScriptTip", $I$(2).$$S("Go to previous frame"));
this.labels.put$O$O("animateAllScript", $I$(2).$$S("All &frames"));
this.labels.put$O$O("animateAllScriptTip", $I$(2).$$S("All frames"));
this.labels.put$O$O("animateLastScript", $I$(2).$$S("Go to &last frame"));
this.labels.put$O$O("animateLastScriptTip", $I$(2).$$S("Go to last frame"));
this.labels.put$O$O("vibrateStartScript", $I$(2).$$S("Start &vibration"));
this.labels.put$O$O("vibrateStopScript", $I$(2).$$S("&Stop vibration"));
this.labels.put$O$O("vibrateRewindScript", $I$(2).$$S("&First frequency"));
this.labels.put$O$O("vibrateNextScript", $I$(2).$$S("&Next frequency"));
this.labels.put$O$O("vibratePrevScript", $I$(2).$$S("&Previous frequency"));
this.labels.put$O$O("surfaceTool", $I$(2).$$S("SurfaceTool..."));
this.labels.put$O$O("surfaceToolTip", $I$(2).$$S("Control Display of Surfaces"));
this.labels.put$O$O("help", $I$(2).$$S("&Help"));
this.labels.put$O$O("about", $I$(2).$$S("About Jmol"));
this.labels.put$O$O("uguide", $I$(2).$$S("Jmol Wiki"));
this.labels.put$O$O("whatsnew", $I$(2).$$S("What\'s New"));
this.labels.put$O$O("credits", $I$(2).$$S("Credits"));
this.labels.put$O$O("Prefs.showHydrogens", $I$(2).$$S("Hydrogens"));
this.labels.put$O$O("Prefs.showMeasurements", $I$(2).$$S("Measurements"));
this.labels.put$O$O("Prefs.perspectiveDepth", $I$(2).$$S("Perspective Depth"));
this.labels.put$O$O("Prefs.showAxes", $I$(2).$$S("Axes"));
this.labels.put$O$O("Prefs.showBoundingBox", $I$(2).$$S("Bounding Box"));
this.labels.put$O$O("Prefs.axesOrientationRasmol", $I$(2).$$S("RasMol/Chime compatible axes orientation/rotations"));
this.labels.put$O$O("Prefs.openFilePreview", (function(a,f){return f.apply(null,a)})(["File Preview (requires restarting Jmol)"],$I$(2).$$S));
this.labels.put$O$O("Prefs.clearHistory", (function(a,f){return f.apply(null,a)})(["Clear history (requires restarting Jmol)"],$I$(2).$$S));
this.labels.put$O$O("Prefs.largeFont", $I$(2).$$S("Large Console Font"));
this.labels.put$O$O("Prefs.isLabelAtomColor", $I$(2).$$S("Use Atom Color"));
this.labels.put$O$O("Prefs.isBondAtomColor", $I$(2).$$S("Use Atom Color"));
this.labels.put$O$O("rotateScriptTip", $I$(2).$$S("Rotate molecule."));
this.labels.put$O$O("pickScriptTip", $I$(2).$$S("Select a set of atoms using SHIFT-LEFT-DRAG."));
this.labels.put$O$O("pickMeasureScriptTip", $I$(2).$$S("Click atoms to measure distances"));
this.labels.put$O$O("pickCenterScriptTip", $I$(2).$$S("Click an atom to center on it"));
this.labels.put$O$O("pickLabelScriptTip", $I$(2).$$S("click an atom to toggle label;DOUBLE-Click a label to set; drag to move"));
this.labels.put$O$O("homeTip", $I$(2).$$S("Return molecule to home position."));
this.labels.put$O$O("modelkitScriptTip", $I$(2).$$S("Open the model kit."));
this.labels.put$O$O("JavaConsole.Clear", $I$(2).$$S("Clear"));
this.labels.put$O$O("plugins", $I$(2).$$S("&Plugins"));
this.moreLabels$java_util_Map(this.labels);
}, p$1);

Clazz.newMeth(C$, 'moreLabels$java_util_Map', function (labels) {
});

Clazz.newMeth(C$, 'getLabel$S', function (key) {
if (this.labels == null ) p$1.setupLabels.apply(this, []);
var s=this.labels.get$O(key);
if (s == null  || s.length$() == 0 ) {
System.err.println$S("GUI key? " + key);
return key;
}return s;
});

Clazz.newMeth(C$, 'newJMenu$S', function (key) {
return Clazz.new_([key, this.getLabel$S(key), this.map],$I$(3,1).c$$S$S$java_util_Map);
});

Clazz.newMeth(C$, 'newJMenuItem$S', function (key) {
return Clazz.new_([key, this.getLabel$S(key), this.map],$I$(4,1).c$$S$S$java_util_Map);
});

Clazz.newMeth(C$, 'newJCheckBoxMenuItem$S$Z', function (key, isChecked) {
return Clazz.new_([key, this.getLabel$S(key), this.map, isChecked],$I$(5,1).c$$S$S$java_util_Map$Z);
});

Clazz.newMeth(C$, 'newJRadioButtonMenuItem$S', function (key) {
return Clazz.new_([key, this.getLabel$S(key), this.map],$I$(6,1).c$$S$S$java_util_Map);
});

Clazz.newMeth(C$, 'newJCheckBox$S$Z', function (key, isChecked) {
return Clazz.new_([key, this.getLabel$S(key), this.map, isChecked],$I$(7,1).c$$S$S$java_util_Map$Z);
});

Clazz.newMeth(C$, 'newJButton$S', function (key) {
var jb=Clazz.new_([this.getLabel$S(key)],$I$(8,1).c$$S);
this.map.put$O$O(key, jb);
return jb;
});

Clazz.newMeth(C$, 'get$S', function (key) {
return this.map.get$O(key);
});

Clazz.newMeth(C$, 'setSelected$S$Z', function (key, b) {
(this.get$S(key)).setSelected$Z(b);
});

Clazz.newMeth(C$, 'setEnabled$S$Z', function (key, b) {
(this.get$S(key)).setEnabled$Z(b);
});

Clazz.newMeth(C$, 'updateLabels$', function () {
var doTranslate=$I$(2).setDoTranslate$Z(true);
p$1.setupLabels.apply(this, []);
$I$(9).setAbstractButtonLabels$java_util_Map$java_util_Map(this.map, this.labels);
$I$(2).setDoTranslate$Z(doTranslate);
});

Clazz.newMeth(C$, 'translate$S', function (str) {
if (C$.translations == null  || !$I$(2).getLanguage$().equals$O(C$.language) ) C$.setTranslations$();
C$.language=$I$(2).getLanguage$();
for (var i=0; i < C$.translations.length; i+=2) {
var t=C$.translations[i];
if (str.indexOf$S(t) >= 0) {
var s=C$.translations[i + 1];
if (s.equals$O("see Jmol-resources.properties")) s=$I$(10).getStringX$S(t);
str=$I$(11).rep$S$S$S(str, t, s);
}}
return str;
}, 1);

Clazz.newMeth(C$, 'getResource$O$S', function (object, fileName) {
return C$.getResource$O$S$Z(object, fileName, true);
}, 1);

Clazz.newMeth(C$, 'getHtmlResource$O$S', function (object, root) {
var lang=$I$(2).getLanguage$();
var fileName=root + "_" + lang + ".html" ;
var url=C$.getResource$O$S$Z(object, fileName, false);
if (url == null  && lang.length$() == 5 ) {
fileName=root + "_" + lang.substring$I$I(0, 2) + ".html" ;
url=C$.getResource$O$S$Z(object, fileName, false);
}if (url == null ) {
fileName=root + ".html";
url=C$.getResource$O$S$Z(object, fileName, true);
}return url;
}, 1);

Clazz.newMeth(C$, 'getResource$O$S$Z', function (object, fileName, flagError) {
var url=null;
if (fileName.indexOf$S("/org/") > 0) fileName=fileName.substring$I(fileName.indexOf$S("/org/") + 1);
if (!fileName.contains$CharSequence("/")) fileName="org/openscience/jmol/app/webexport/html/" + fileName;
try {
if ((url=ClassLoader.getSystemResource$S(fileName)) == null  && flagError ) System.err.println$S("Couldn't find file: " + fileName);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Exception " + e.getMessage$() + " in getResource " + fileName );
} else {
throw e;
}
}
return url;
}, 1);

Clazz.newMeth(C$, 'getResourceString$O$S', function (object, name) {
var url=(name.indexOf$S(".") >= 0 ? C$.getResource$O$S(object, name) : C$.getHtmlResource$O$S(object, name));
if (url == null ) {
throw Clazz.new_(Clazz.load('java.io.FileNotFoundException').c$$S,["Error loading resource " + name]);
}var sb=Clazz.new_($I$(12,1));
try {
var br=Clazz.new_([Clazz.new_([url.getContent$()],$I$(14,1).c$$java_io_InputStream)],$I$(13,1).c$$java_io_Reader);
var line;
while ((line=br.readLine$()) != null )sb.append$S(line).append$S("\n");

br.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.getMessage$());
} else {
throw e;
}
}
return C$.translate$S(sb.toString());
}, 1);

Clazz.newMeth(C$, 'setTranslations$', function () {
C$.translations=Clazz.array(String, -1, ["GT_JmolPopIn.js_TOGETA3DMODEL", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([$I$(2).$$S("To get a 3-D model you can manipulate, click {0}here{1}. Download time may be significant the first time the applet is loaded."), Clazz.array(String, -1, ["<a href=\"HREF\">", "</a>"])],$I$(2).o$S$O)],$I$(2).escapeHTML$S), "GT_pop_in_template.html_INSERTTITLE", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("Insert the page TITLE here.")],$I$(2).escapeHTML$S), "GT_pop_in_template.html_INSERTINTRO", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("Insert the page INTRODUCTION here.")],$I$(2).escapeHTML$S), "GT_pop_in_template2.html_INSERTCAPTION", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([$I$(2).$$S("CLICK IMAGE TO ACTIVATE 3D <br/> Insert a caption for {0} here."), "@NAME@"],$I$(2).o$S$O)],$I$(2).escapeHTML$S), "GT_pop_in_template2.html_INSERTADDITIONAL", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([$I$(2).$$S("Insert additional explanatory text here. Long text will wrap around Jmol model {0}."), "@NAME@"],$I$(2).o$S$O)],$I$(2).escapeHTML$S), "GT_script_btn_template.html_INSERT", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("Insert your TITLE and INTRODUCTION here.")],$I$(2).escapeHTML$S), "GT_script_btn_template.html_LOADING", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([$I$(2).$$S("Once the molecule file is fully loaded, the image at right will become live.  At that time the \"activate 3-D\" icon {0} will disappear."), Clazz.array(String, -1, ["<img id=\"make_live_icon\" src=\"\" height=\"15px\" />"])],$I$(2).o$S$O)],$I$(2).escapeHTML$S), "GT_script_btn_template.html_VIEWAGAIN", (function(a,f){return f.apply(null,a)})([$I$(2).$$S("You may look at any of these intermediate views again by clicking on the appropriate button.")],$I$(2).escapeHTML$S), "GT_script_btn_template.html_JAVACAPABLE", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["If your browser/OS combination is Java capable, you will get snappier performance if you <a href=\"?use=JAVA\">use Java</a>"],$I$(2).$$S)],$I$(2).escapeHTML$S), "GT_script_btn_template2.html_BUTTONINFO", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([$I$(2).$$S("The button {0} will appear below.  Insert information for {0} here and below."), "@NAME@"],$I$(2).o$S$O)],$I$(2).escapeHTML$S), "GT_script_btn_template2.html_MORE", (function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([$I$(2).$$S("Insert more information for {0} here."), "@NAME@"],$I$(2).o$S$O)],$I$(2).escapeHTML$S), "About.html#version", "<p><b>Jmol " + $I$(15).version + " (" + $I$(15).date + ")</b></p>" , "About.html#splash", "see Jmol-resources.properties", "About.html#weblinks", "see Jmol-resources.properties", "About.html#libraries", "see Jmol-resources.properties"]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
