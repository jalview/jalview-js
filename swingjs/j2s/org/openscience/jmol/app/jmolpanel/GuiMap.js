(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.i18n.GT','org.jmol.console.KeyJMenu','org.jmol.console.KeyJMenuItem','org.jmol.console.KeyJCheckBoxMenuItem','org.jmol.console.KeyJRadioButtonMenuItem','org.jmol.console.KeyJCheckBox','org.jmol.console.JmolButton','org.jmol.console.GenericConsole','org.openscience.jmol.app.jmolpanel.JmolResourceHandler','javajs.util.PT','StringBuilder','java.io.BufferedReader','java.io.InputStreamReader','org.jmol.viewer.JC']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GuiMap");
C$.language=null;
C$.translations=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.map=null;
this.labels=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'setupLabels', function () {
this.labels=Clazz.new_($I$(1));
this.labels.put$TK$TV("macros", $I$(2).$$S("&Macros"));
this.labels.put$TK$TV("idfileMenu", $I$(2).$$S("&File"));
this.labels.put$TK$TV("file", $I$(2).$$S("&File"));
this.labels.put$TK$TV("newwin", $I$(2).$$S("&New"));
this.labels.put$TK$TV("open", $I$(2).$$S("&Open"));
this.labels.put$TK$TV("openTip", $I$(2).$$S("Open a file."));
this.labels.put$TK$TV("openurl", $I$(2).$$S("Open &URL"));
this.labels.put$TK$TV("openpdb", $I$(2).$$S("&Get PDB"));
this.labels.put$TK$TV("openmol", $I$(2).$$S("Get &MOL"));
this.labels.put$TK$TV("reloadScript", $I$(2).$$S("&Reload"));
this.labels.put$TK$TV("spectrumMenu", "&Spectra");
this.labels.put$TK$TV("openJSpecViewScript", "JSpecView");
this.labels.put$TK$TV("simulate1HSpectrumScript", "Simulated 1H Spectrum");
this.labels.put$TK$TV("simulate13CSpectrumScript", "Simulated 13C Spectrum");
this.labels.put$TK$TV("editor", $I$(2).$$S("Scrip&t Editor..."));
this.labels.put$TK$TV("console", $I$(2).$$S("Conso&le..."));
this.labels.put$TK$TV("jconsole", $I$(2).$$S("Jmol Java &Console"));
this.labels.put$TK$TV("atomsetchooser", $I$(2).$$S("AtomSet&Chooser..."));
this.labels.put$TK$TV("saveas", $I$(2).$$S("&Save As..."));
this.labels.put$TK$TV("exportMenu", $I$(2).$$S("&Export"));
this.labels.put$TK$TV("export", $I$(2).$$S("Export &Image..."));
this.labels.put$TK$TV("exportTip", $I$(2).$$S("Save current view as an image."));
this.labels.put$TK$TV("toweb", $I$(2).$$S("Export to &Web Page..."));
this.labels.put$TK$TV("towebTip", $I$(2).$$S("Export one or more views to a web page."));
this.labels.put$TK$TV("povray", $I$(2).$$S("Render in POV-&Ray..."));
this.labels.put$TK$TV("povrayTip", $I$(2).$$S("Render in POV-Ray"));
this.labels.put$TK$TV("write", $I$(2).$$S("Write &State..."));
this.labels.put$TK$TV("writeTip", $I$(2).$$S("Save current view as a Jmol state script."));
this.labels.put$TK$TV("print", $I$(2).$$S("&Print..."));
this.labels.put$TK$TV("printTip", $I$(2).$$S("Print view."));
this.labels.put$TK$TV("close", $I$(2).$$S("&Close"));
this.labels.put$TK$TV("exit", $I$(2).$$S("E&xit"));
this.labels.put$TK$TV("recentFiles", $I$(2).$$S("Recent &Files..."));
this.labels.put$TK$TV("edit", $I$(2).$$S("&Edit"));
this.labels.put$TK$TV("selectall", $I$(2).$$S("Select &All"));
this.labels.put$TK$TV("deselectall", $I$(2).$$S("Deselect All"));
this.labels.put$TK$TV("copyImage", $I$(2).$$S("Copy &Image"));
this.labels.put$TK$TV("copyScript", $I$(2).$$S("Copy Script"));
this.labels.put$TK$TV("prefs", $I$(2).$$S("Pr&eferences..."));
this.labels.put$TK$TV("pasteClipboard", $I$(2).$$S("&Paste"));
this.labels.put$TK$TV("editSelectAllScript", $I$(2).$$S("Select &All"));
this.labels.put$TK$TV("selectMenu", $I$(2).$$S("&Select"));
this.labels.put$TK$TV("selectMenuText", $I$(2).$$S("&Select"));
this.labels.put$TK$TV("selectAllScript", $I$(2).$$S("&All"));
this.labels.put$TK$TV("selectNoneScript", $I$(2).$$S("&None"));
this.labels.put$TK$TV("selectHydrogenScript", $I$(2).$$S("Hydrogen"));
this.labels.put$TK$TV("selectCarbonScript", $I$(2).$$S("Carbon"));
this.labels.put$TK$TV("selectNitrogenScript", $I$(2).$$S("Nitrogen"));
this.labels.put$TK$TV("selectOxygenScript", $I$(2).$$S("Oxygen"));
this.labels.put$TK$TV("selectPhosphorusScript", $I$(2).$$S("Phosphorus"));
this.labels.put$TK$TV("selectSulfurScript", $I$(2).$$S("Sulfur"));
this.labels.put$TK$TV("selectAminoScript", $I$(2).$$S("Amino"));
this.labels.put$TK$TV("selectNucleicScript", $I$(2).$$S("Nucleic"));
this.labels.put$TK$TV("selectWaterScript", $I$(2).$$S("Water"));
this.labels.put$TK$TV("selectHeteroScript", $I$(2).$$S("Hetero"));
this.labels.put$TK$TV("display", $I$(2).$$S("&Display"));
this.labels.put$TK$TV("atomMenu", $I$(2).$$S("&Atom"));
this.labels.put$TK$TV("atomNoneScript", $I$(2).$$S("&None"));
this.labels.put$TK$TV("atom15Script", $I$(2).o$S$O($I$(2).$$S("{0}% van der Waals"), "15"));
this.labels.put$TK$TV("atom20Script", $I$(2).o$S$O($I$(2).$$S("{0}% van der Waals"), "20"));
this.labels.put$TK$TV("atom25Script", $I$(2).o$S$O($I$(2).$$S("{0}% van der Waals"), "25"));
this.labels.put$TK$TV("atom100Script", $I$(2).o$S$O($I$(2).$$S("{0}% van der Waals"), "100"));
this.labels.put$TK$TV("bondMenu", $I$(2).$$S("&Bond"));
this.labels.put$TK$TV("bondNoneScript", $I$(2).$$S("&None"));
this.labels.put$TK$TV("bondWireframeScript", $I$(2).$$S("&Wireframe"));
this.labels.put$TK$TV("bond100Script", $I$(2).o$S$O($I$(2).$$S("{0} \u00c5"), "0.10"));
this.labels.put$TK$TV("bond150Script", $I$(2).o$S$O($I$(2).$$S("{0} \u00c5"), "0.15"));
this.labels.put$TK$TV("bond200Script", $I$(2).o$S$O($I$(2).$$S("{0} \u00c5"), "0.20"));
this.labels.put$TK$TV("labelMenu", $I$(2).$$S("&Label"));
this.labels.put$TK$TV("labelNoneScript", $I$(2).$$S("&None"));
this.labels.put$TK$TV("labelSymbolScript", $I$(2).$$S("&Symbol"));
this.labels.put$TK$TV("labelNameScript", $I$(2).$$S("&Name"));
this.labels.put$TK$TV("labelNumberScript", $I$(2).$$S("&Number"));
this.labels.put$TK$TV("labelCenteredScript", $I$(2).$$S("&Centered"));
this.labels.put$TK$TV("labelUpperRightScript", $I$(2).$$S("&Upper right"));
this.labels.put$TK$TV("vectorMenu", $I$(2).$$S("&Vector"));
this.labels.put$TK$TV("vectorOffScript", $I$(2).$$S("&None"));
this.labels.put$TK$TV("vectorOnScript", $I$(2).$$S("&On"));
this.labels.put$TK$TV("vector3Script", $I$(2).o$S$O($I$(2).$$S("{0} pixels"), "3"));
this.labels.put$TK$TV("vector005Script", $I$(2).o$S$O($I$(2).$$S("{0} \u00c5"), "0.05"));
this.labels.put$TK$TV("vector01Script", $I$(2).o$S$O($I$(2).$$S("{0} \u00c5"), "0.1"));
this.labels.put$TK$TV("vectorScale02Script", $I$(2).o$S$O($I$(2).$$S("Scale {0}"), "0.2"));
this.labels.put$TK$TV("vectorScale05Script", $I$(2).o$S$O($I$(2).$$S("Scale {0}"), "0.5"));
this.labels.put$TK$TV("vectorScale1Script", $I$(2).o$S$O($I$(2).$$S("Scale {0}"), "1"));
this.labels.put$TK$TV("vectorScale2Script", $I$(2).o$S$O($I$(2).$$S("Scale {0}"), "2"));
this.labels.put$TK$TV("vectorScale5Script", $I$(2).o$S$O($I$(2).$$S("Scale {0}"), "5"));
this.labels.put$TK$TV("zoomMenu", $I$(2).$$S("&Zoom"));
this.labels.put$TK$TV("zoom100Script", $I$(2).o$S$O($I$(2).$$S("{0}%"), "100"));
this.labels.put$TK$TV("zoom150Script", $I$(2).o$S$O($I$(2).$$S("{0}%"), "150"));
this.labels.put$TK$TV("zoom200Script", $I$(2).o$S$O($I$(2).$$S("{0}%"), "200"));
this.labels.put$TK$TV("zoom400Script", $I$(2).o$S$O($I$(2).$$S("{0}%"), "400"));
this.labels.put$TK$TV("zoom800Script", $I$(2).o$S$O($I$(2).$$S("{0}%"), "800"));
this.labels.put$TK$TV("perspectiveCheck", $I$(2).$$S("&Perspective Depth"));
this.labels.put$TK$TV("axesCheck", $I$(2).$$S("A&xes"));
this.labels.put$TK$TV("boundboxCheck", $I$(2).$$S("B&ounding Box"));
this.labels.put$TK$TV("hydrogensCheck", $I$(2).$$S("&Hydrogens"));
this.labels.put$TK$TV("vectorsCheck", $I$(2).$$S("V&ectors"));
this.labels.put$TK$TV("measurementsCheck", $I$(2).$$S("&Measurements"));
this.labels.put$TK$TV("resize", $I$(2).$$S("Resi&ze"));
this.labels.put$TK$TV("view", $I$(2).$$S("&View"));
this.labels.put$TK$TV("front", $I$(2).$$S("&Front"));
this.labels.put$TK$TV("top", $I$(2).$$S("&Top"));
this.labels.put$TK$TV("bottom", $I$(2).$$S("&Bottom"));
this.labels.put$TK$TV("right", $I$(2).$$S("&Right"));
this.labels.put$TK$TV("left", $I$(2).$$S("&Left"));
this.labels.put$TK$TV("axisaScript", $I$(2).$$S("Axis a"));
this.labels.put$TK$TV("axisbScript", $I$(2).$$S("Axis b"));
this.labels.put$TK$TV("axiscScript", $I$(2).$$S("Axis c"));
this.labels.put$TK$TV("axisxScript", $I$(2).$$S("Axis x"));
this.labels.put$TK$TV("axisyScript", $I$(2).$$S("Axis y"));
this.labels.put$TK$TV("axiszScript", $I$(2).$$S("Axis z"));
this.labels.put$TK$TV("transform", $I$(2).$$S("Tr&ansform..."));
this.labels.put$TK$TV("definecenter", $I$(2).$$S("Define &Center"));
this.labels.put$TK$TV("tools", $I$(2).$$S("&Tools"));
this.labels.put$TK$TV("gauss", $I$(2).$$S("&Gaussian..."));
this.labels.put$TK$TV("viewMeasurementTable", $I$(2).$$S("&Measurements") + "...");
this.labels.put$TK$TV("distanceUnitsMenu", $I$(2).$$S("Distance &Units"));
this.labels.put$TK$TV("distanceNanometersScript", $I$(2).$$S("&Nanometers 1E-9"));
this.labels.put$TK$TV("distanceAngstromsScript", $I$(2).$$S("&Angstroms 1E-10"));
this.labels.put$TK$TV("distancePicometersScript", $I$(2).$$S("&Picometers 1E-12"));
this.labels.put$TK$TV("animateMenu", $I$(2).$$S("&Animate..."));
this.labels.put$TK$TV("vibrateMenu", $I$(2).$$S("&Vibrate..."));
this.labels.put$TK$TV("graph", $I$(2).$$S("&Graph..."));
this.labels.put$TK$TV("chemicalShifts", $I$(2).$$S("Calculate chemical &shifts..."));
this.labels.put$TK$TV("crystprop", $I$(2).$$S("&Crystal Properties"));
this.labels.put$TK$TV("animateOnceScript", $I$(2).$$S("&Once"));
this.labels.put$TK$TV("animateLoopScript", $I$(2).$$S("&Loop"));
this.labels.put$TK$TV("animatePalindromeScript", $I$(2).$$S("P&alindrome"));
this.labels.put$TK$TV("animateStopScript", $I$(2).$$S("&Stop animation"));
this.labels.put$TK$TV("animateRewindScript", $I$(2).$$S("&Rewind to first frame"));
this.labels.put$TK$TV("animateRewindScriptTip", $I$(2).$$S("Rewind to first frame"));
this.labels.put$TK$TV("animateNextScript", $I$(2).$$S("Go to &next frame"));
this.labels.put$TK$TV("animateNextScriptTip", $I$(2).$$S("Go to next frame"));
this.labels.put$TK$TV("animatePrevScript", $I$(2).$$S("Go to &previous frame"));
this.labels.put$TK$TV("animatePrevScriptTip", $I$(2).$$S("Go to previous frame"));
this.labels.put$TK$TV("animateAllScript", $I$(2).$$S("All &frames"));
this.labels.put$TK$TV("animateAllScriptTip", $I$(2).$$S("All frames"));
this.labels.put$TK$TV("animateLastScript", $I$(2).$$S("Go to &last frame"));
this.labels.put$TK$TV("animateLastScriptTip", $I$(2).$$S("Go to last frame"));
this.labels.put$TK$TV("vibrateStartScript", $I$(2).$$S("Start &vibration"));
this.labels.put$TK$TV("vibrateStopScript", $I$(2).$$S("&Stop vibration"));
this.labels.put$TK$TV("vibrateRewindScript", $I$(2).$$S("&First frequency"));
this.labels.put$TK$TV("vibrateNextScript", $I$(2).$$S("&Next frequency"));
this.labels.put$TK$TV("vibratePrevScript", $I$(2).$$S("&Previous frequency"));
this.labels.put$TK$TV("surfaceTool", $I$(2).$$S("SurfaceTool..."));
this.labels.put$TK$TV("surfaceToolTip", $I$(2).$$S("Control Display of Surfaces"));
this.labels.put$TK$TV("help", $I$(2).$$S("&Help"));
this.labels.put$TK$TV("about", $I$(2).$$S("About Jmol"));
this.labels.put$TK$TV("uguide", $I$(2).$$S("Jmol Wiki"));
this.labels.put$TK$TV("whatsnew", $I$(2).$$S("What\'s New"));
this.labels.put$TK$TV("credits", $I$(2).$$S("Credits"));
this.labels.put$TK$TV("Prefs.showHydrogens", $I$(2).$$S("Hydrogens"));
this.labels.put$TK$TV("Prefs.showMeasurements", $I$(2).$$S("Measurements"));
this.labels.put$TK$TV("Prefs.perspectiveDepth", $I$(2).$$S("Perspective Depth"));
this.labels.put$TK$TV("Prefs.showAxes", $I$(2).$$S("Axes"));
this.labels.put$TK$TV("Prefs.showBoundingBox", $I$(2).$$S("Bounding Box"));
this.labels.put$TK$TV("Prefs.axesOrientationRasmol", $I$(2).$$S("RasMol/Chime compatible axes orientation/rotations"));
this.labels.put$TK$TV("Prefs.openFilePreview", $I$(2).$$S("File Preview (requires restarting Jmol)"));
this.labels.put$TK$TV("Prefs.clearHistory", $I$(2).$$S("Clear history (requires restarting Jmol)"));
this.labels.put$TK$TV("Prefs.largeFont", $I$(2).$$S("Large Console Font"));
this.labels.put$TK$TV("Prefs.isLabelAtomColor", $I$(2).$$S("Use Atom Color"));
this.labels.put$TK$TV("Prefs.isBondAtomColor", $I$(2).$$S("Use Atom Color"));
this.labels.put$TK$TV("rotateScriptTip", $I$(2).$$S("Rotate molecule."));
this.labels.put$TK$TV("pickScriptTip", $I$(2).$$S("Select a set of atoms using SHIFT-LEFT-DRAG."));
this.labels.put$TK$TV("pickMeasureScriptTip", $I$(2).$$S("Click atoms to measure distances"));
this.labels.put$TK$TV("pickCenterScriptTip", $I$(2).$$S("Click an atom to center on it"));
this.labels.put$TK$TV("pickLabelScriptTip", $I$(2).$$S("click an atom to toggle label;DOUBLE-Click a label to set; drag to move"));
this.labels.put$TK$TV("homeTip", $I$(2).$$S("Return molecule to home position."));
this.labels.put$TK$TV("modelkitScriptTip", $I$(2).$$S("Open the model kit."));
this.labels.put$TK$TV("JavaConsole.clear", $I$(2).$$S("Clear"));
this.labels.put$TK$TV("plugins", $I$(2).$$S("&Plugins"));
}, p$1);

Clazz.newMeth(C$, 'getLabel$S', function (key) {
if (this.labels == null ) p$1.setupLabels.apply(this, []);
var label=this.labels.get$O(key);
return label;
});

Clazz.newMeth(C$, 'newJMenu$S', function (key) {
return Clazz.new_($I$(3).c$$S$S$java_util_Map,[key, this.getLabel$S(key), this.map]);
});

Clazz.newMeth(C$, 'newJMenuItem$S', function (key) {
return Clazz.new_($I$(4).c$$S$S$java_util_Map,[key, this.getLabel$S(key), this.map]);
});

Clazz.newMeth(C$, 'newJCheckBoxMenuItem$S$Z', function (key, isChecked) {
return Clazz.new_($I$(5).c$$S$S$java_util_Map$Z,[key, this.getLabel$S(key), this.map, isChecked]);
});

Clazz.newMeth(C$, 'newJRadioButtonMenuItem$S', function (key) {
return Clazz.new_($I$(6).c$$S$S$java_util_Map,[key, this.getLabel$S(key), this.map]);
});

Clazz.newMeth(C$, 'newJCheckBox$S$Z', function (key, isChecked) {
return Clazz.new_($I$(7).c$$S$S$java_util_Map$Z,[key, this.getLabel$S(key), this.map, isChecked]);
});

Clazz.newMeth(C$, 'newJButton$S', function (key) {
var jb=Clazz.new_($I$(8).c$$S,[this.getLabel$S(key)]);
this.map.put$TK$TV(key, jb);
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
}var sb=Clazz.new_($I$(12));
try {
var br=Clazz.new_($I$(13).c$$java_io_Reader,[Clazz.new_($I$(14).c$$java_io_InputStream,[url.getContent$()])]);
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
C$.translations=Clazz.array(String, -1, ["GT_JmolPopIn.js_TOGETA3DMODEL", $I$(2).escapeHTML$S($I$(2).o$S$O($I$(2).$$S("To get a 3-D model you can manipulate, click {0}here{1}. Download time may be significant the first time the applet is loaded."), Clazz.array(String, -1, ["<a href=\"HREF\">", "</a>"]))), "GT_pop_in_template.html_INSERTTITLE", $I$(2).escapeHTML$S($I$(2).$$S("Insert the page TITLE here.")), "GT_pop_in_template.html_INSERTINTRO", $I$(2).escapeHTML$S($I$(2).$$S("Insert the page INTRODUCTION here.")), "GT_pop_in_template2.html_INSERTCAPTION", $I$(2).escapeHTML$S($I$(2).o$S$O($I$(2).$$S("CLICK IMAGE TO ACTIVATE 3D <br/> Insert a caption for {0} here."), "@NAME@")), "GT_pop_in_template2.html_INSERTADDITIONAL", $I$(2).escapeHTML$S($I$(2).o$S$O($I$(2).$$S("Insert additional explanatory text here. Long text will wrap around Jmol model {0}."), "@NAME@")), "GT_script_btn_template.html_INSERT", $I$(2).escapeHTML$S($I$(2).$$S("Insert your TITLE and INTRODUCTION here.")), "GT_script_btn_template.html_LOADING", $I$(2).escapeHTML$S($I$(2).o$S$O($I$(2).$$S("Once the molecule file is fully loaded, the image at right will become live.  At that time the \"activate 3-D\" icon {0} will disappear."), Clazz.array(String, -1, ["<img id=\"make_live_icon\" src=\"\" height=\"15px\" />"]))), "GT_script_btn_template.html_VIEWAGAIN", $I$(2).escapeHTML$S($I$(2).$$S("You may look at any of these intermediate views again by clicking on the appropriate button.")), "GT_script_btn_template.html_JAVACAPABLE", $I$(2).escapeHTML$S($I$(2).$$S("If your browser/OS combination is Java capable, you will get snappier performance if you <a href=\"?use=JAVA\">use Java</a>")), "GT_script_btn_template2.html_BUTTONINFO", $I$(2).escapeHTML$S($I$(2).o$S$O($I$(2).$$S("The button {0} will appear below.  Insert information for {0} here and below."), "@NAME@")), "GT_script_btn_template2.html_MORE", $I$(2).escapeHTML$S($I$(2).o$S$O($I$(2).$$S("Insert more information for {0} here."), "@NAME@")), "About.html#version", "<p><b>Jmol " + $I$(15).version + " (" + $I$(15).date + ")</b></p>" , "About.html#splash", "see Jmol-resources.properties", "About.html#weblinks", "see Jmol-resources.properties", "About.html#libraries", "see Jmol-resources.properties"]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
