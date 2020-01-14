(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),p$1={},I$=[[0,'java.util.Hashtable','fr.orsay.lri.varna.models.VARNAConfigLoader','java.util.Vector','java.util.Arrays',['fr.orsay.lri.varna.applications.VARNAcmd','.ExitCode'],'java.util.ArrayList','fr.orsay.lri.varna.factories.RNAFactory','fr.orsay.lri.varna.VARNAPanel','java.io.FileInputStream','fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax','fr.orsay.lri.varna.models.FullBackup','fr.orsay.lri.varna.models.rna.RNA','fr.orsay.lri.varna.applications.VARNAGUI','java.awt.image.BufferedImage','javax.imageio.stream.FileImageOutputStream','java.io.File','javax.imageio.ImageIO','javax.imageio.IIOImage','fr.orsay.lri.varna.exceptions.ExceptionExportFailed']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VARNAcmd", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'fr.orsay.lri.varna.interfaces.InterfaceParameterLoader');
C$.MAX_WIDTH=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.MAX_WIDTH=100;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._optsValues=null;
this._basicOptsInv=null;
this._inFile=null;
this._outFile=null;
this._baseWidth=0;
this._scale=0;
this._quality=0;
this._basicOptions=null;
this.matrix=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._optsValues=Clazz.new_($I$(1));
this._basicOptsInv=Clazz.new_($I$(1));
this._inFile="";
this._outFile="";
this._baseWidth=400;
this._scale=1.0;
this._quality=0.9;
this._basicOptions=Clazz.array(String, -1, [$I$(2).algoOpt, $I$(2).bpStyleOpt, $I$(2).bondColorOpt, $I$(2).backboneColorOpt, $I$(2).periodNumOpt, $I$(2).baseInnerColorOpt, $I$(2).baseOutlineColorOpt]);
this.matrix=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Vector', function (args) {
C$.$init$.apply(this);
for (var j=0; j < this._basicOptions.length; j++) {
this._basicOptsInv.put$TK$TV(this._basicOptions[j], this._basicOptions[j]);
}
var i=0;
while (i < args.size$()){
var opt=args.elementAt$I(i);
if (opt.charAt$I(0) != "-") {
p$1.errorExit$S.apply(this, ["Missing or unknown option \"" + opt + "\"" ]);
}if (opt.equals$O("-h")) {
p$1.displayLightHelpExit.apply(this, []);
}if (opt.equals$O("-x")) {
p$1.displayDetailledHelpExit.apply(this, []);
} else {
if (i + 1 >= args.size$()) {
p$1.errorExit$S.apply(this, ["Missing argument for option \"" + opt + "\"" ]);
}var val=args.get$I(i + 1);
if (opt.equals$O("-i")) {
this._inFile=val;
} else if (opt.equals$O("-o")) {
this._outFile=val;
} else if (opt.equals$O("-quality")) {
this._quality=Float.parseFloat$S(val);
} else if (opt.equals$O("-resolution")) {
this._scale=Float.parseFloat$S(val);
} else {
this.addOption$S$S(opt, val);
}}i+=2;
}
}, 1);

Clazz.newMeth(C$, 'addOption$S$S', function (key, value) {
if (key.equals$O("-i")) {
this._inFile=value;
} else if (key.equals$O("-o")) {
this._outFile=value;
} else {
this._optsValues.put$TK$TV(key.substring$I(1), value);
}});

Clazz.newMeth(C$, 'getDescription', function () {
return "VARNA v3.9 Assisted drawing of RNA secondary structure (Command Line version)";
}, p$1);

Clazz.newMeth(C$, 'indent$I', function (k) {
var result="";
for (var i=0; i < k; i++) {
result += "  ";
}
return result;
}, p$1);

Clazz.newMeth(C$, 'complete$S$I', function (s, k) {
var result=s;
while (result.length$() < k){
result += " ";
}
return result;
}, p$1);

Clazz.newMeth(C$, 'addLine$S$S', function (opt, val) {
var line=Clazz.array(String, -1, [opt, val]);
this.matrix.add$TE(line);
}, p$1);

Clazz.newMeth(C$, 'printMatrix$I', function (ind) {
var values=Clazz.array(String, [this.matrix.size$(), null]);
this.matrix.toArray$TTA(values);
$I$(4).sort$TTA$java_util_Comparator(values, ((P$.VARNAcmd$1||
(function(){var C$=Clazz.newClass(P$, "VARNAcmd$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$O$O','compare$','compare$TT$TT'], function (o1, o2) {
var tab1=o1;
var tab2=o2;
return tab1[0].compareTo$S(tab2[0]);
});
})()
), Clazz.new_(P$.VARNAcmd$1.$init$, [this, null])));
var maxSize=0;
for (var i=0; i < values.length; i++) {
var elem=values[i];
maxSize=Math.max(maxSize, elem[0].length$());
}
maxSize+=ind + 2;
for (var i=0; i < values.length; i++) {
var elem=values[i];
var opt=elem[0];
var msg=elem[1];
opt=p$1.complete$S$I.apply(this, ["", ind]) + "-" + p$1.complete$S$I.apply(this, [opt, maxSize - ind]) ;
System.out.println$S(opt + msg.substring$I$I(0, Math.min(C$.MAX_WIDTH - opt.length$(), msg.length$())));
if (opt.length$() + msg.length$() >= C$.MAX_WIDTH) {
var off=C$.MAX_WIDTH - opt.length$();
while (off < msg.length$()){
var nmsg=msg.substring$I$I(off, Math.min(off + C$.MAX_WIDTH - opt.length$(), msg.length$()));
System.out.println$S(p$1.complete$S$I.apply(this, ["", opt.length$()]) + nmsg);
off+=C$.MAX_WIDTH - opt.length$();
}
}}
this.matrix=Clazz.new_($I$(3));
}, p$1);

Clazz.newMeth(C$, 'printUsage', function () {
System.out.println$S("Usage: java -cp . [-i InFile|-sequenceDBN XXX -structureDBN YYY] -o OutFile [Options]");
System.out.println$S("Where:");
System.out.println$S(p$1.indent$I.apply(this, [1]) + "OutFile\tSupported formats: {JPEG,PNG,EPS,XFIG,SVG}");
System.out.println$S(p$1.indent$I.apply(this, [1]) + "InFile\tSecondary structure file: Supported formats: {BPSEQ,CT,RNAML,DBN}");
}, p$1);

Clazz.newMeth(C$, 'printHelpOptions', function () {
System.out.println$S("\nMain options:");
p$1.addLine$S$S.apply(this, ["h", "Displays a short description of main options and exits"]);
p$1.addLine$S$S.apply(this, ["x", "Displays a detailled description of all options"]);
p$1.printMatrix$I.apply(this, [2]);
}, p$1);

Clazz.newMeth(C$, 'printMainOptions$SAA', function (info) {
System.out.println$S("\nMain options:");
p$1.addLine$S$S.apply(this, ["h", "Displays a short description of main options and exits"]);
p$1.addLine$S$S.apply(this, ["x", "Displays a detailled description of all options"]);
for (var i=0; i < info.length; i++) {
var key=info[i][0];
if (this._basicOptsInv.containsKey$O(key)) {
p$1.addLine$S$S.apply(this, [key, info[i][2]]);
}}
p$1.printMatrix$I.apply(this, [2]);
}, p$1);

Clazz.newMeth(C$, 'printAdvancedOptions$SAA', function (info) {
System.out.println$S("\nAdvanced options:");
for (var i=0; i < info.length; i++) {
var key=info[i][0];
if (!this._basicOptsInv.containsKey$O(key)) {
p$1.addLine$S$S.apply(this, [key, info[i][2]]);
}}
p$1.addLine$S$S.apply(this, ["quality", "Sets quality (non-vector file formats only)"]);
p$1.addLine$S$S.apply(this, ["resolution", "Sets resolution (non-vector file formats only)"]);
p$1.printMatrix$I.apply(this, [2]);
}, p$1);

Clazz.newMeth(C$, 'displayLightHelpExit', function () {
var info=$I$(2).getParameterInfo$();
System.out.println$S(p$1.getDescription.apply(this, []));
p$1.printUsage.apply(this, []);
p$1.printMainOptions$SAA.apply(this, [info]);
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, ""]));
}, p$1);

Clazz.newMeth(C$, 'displayDetailledHelpExit', function () {
var info=$I$(2).getParameterInfo$();
System.out.println$S(p$1.getDescription.apply(this, []));
p$1.printUsage.apply(this, []);
p$1.printMainOptions$SAA.apply(this, [info]);
p$1.printAdvancedOptions$SAA.apply(this, [info]);
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, ""]));
}, p$1);

Clazz.newMeth(C$, 'errorExit$S', function (msg) {
System.out.println$S(p$1.getDescription.apply(this, []));
System.out.println$S("Error: " + msg + "\n" );
p$1.printUsage.apply(this, []);
p$1.printHelpOptions.apply(this, []);
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, ""]));
}, p$1);

Clazz.newMeth(C$, ['getParameterValue$S$S','getParameterValue$'], function (key, def) {
if (this._optsValues.containsKey$O(key)) {
return this._optsValues.get$O(key);
}return def;
});

Clazz.newMeth(C$, 'formatOutputPath$S$I$I', function (base, index, total) {
var result=base;
if (total > 1) {
var indexDot=base.lastIndexOf$I(".");
var pref;
var ext;
if (indexDot != -1) {
pref=base.substring$I$I(0, indexDot);
ext=base.substring$I(indexDot);
} else {
pref=base;
ext="";
}result=pref + "-" + index + ext ;
}System.err.println$S("Output file: " + result);
return result;
});

Clazz.newMeth(C$, 'run$', function () {
var VARNAcfg=Clazz.new_($I$(2).c$$fr_orsay_lri_varna_interfaces_InterfaceParameterLoader,[this]);
var vpl;
var confs=Clazz.new_($I$(6));
try {
if (!this._inFile.equals$O("")) {
if (!this._inFile.toLowerCase$().endsWith$S(".varna")) {
var rnas=$I$(7).loadSecStr$S(this._inFile);
if (rnas.isEmpty$()) {
var f=null;
try {
f=$I$(8).importSession$java_io_InputStream$S(Clazz.new_($I$(9).c$$S,[this._inFile]), this._inFile);
confs.add$TE(f);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
if (f == null ) {
throw Clazz.new_($I$(10).c$$S,["No RNA could be parsed from file '" + this._inFile + "'." ]);
}} else {
for (var r, $r = rnas.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
confs.add$TE(Clazz.new_($I$(11).c$$fr_orsay_lri_varna_models_rna_RNA$S,[r, this._inFile]));
}
}} else {
confs.add$TE($I$(8).importSession$O(this._inFile));
}} else {
var r=Clazz.new_($I$(12));
r.setRNA$S$S(this.getParameterValue$S$S("sequenceDBN", ""), this.getParameterValue$S$S("structureDBN", ""));
confs.add$TE(Clazz.new_($I$(11).c$$fr_orsay_lri_varna_models_rna_RNA$S,[r, "From Params"]));
}if (!this._outFile.equals$O("")) {
var index=1;
for (var r, $r = confs.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
VARNAcfg.setRNA$fr_orsay_lri_varna_models_rna_RNA(r.rna);
vpl=VARNAcfg.createVARNAPanels$();
if (vpl.size$() > 0) {
var _vp=vpl.get$I(0);
if (r.hasConfig$()) {
_vp.setConfig$fr_orsay_lri_varna_models_VARNAConfig(r.config);
}var _rna=_vp.getRNA$();
var bbox=_vp.getRNA$().getBBox$();
if (this._outFile.toLowerCase$().endsWith$S(".jpeg") || this._outFile.toLowerCase$().endsWith$S(".jpg") || this._outFile.toLowerCase$().endsWith$S(".png")  ) {
_vp.setTitleFontSize$F(((this._scale * _vp.getTitleFont$().getSize$())|0));
_vp.setSize$I$I(((this._baseWidth * this._scale)|0), (((this._scale * this._baseWidth * bbox.height ) / (bbox.width))|0));
}if (this._outFile.toLowerCase$().endsWith$S(".eps")) {
_rna.saveRNAEPS$S$fr_orsay_lri_varna_models_VARNAConfig(this.formatOutputPath$S$I$I(this._outFile, index, confs.size$()), _vp.getConfig$());
} else if (this._outFile.toLowerCase$().endsWith$S(".xfig") || this._outFile.toLowerCase$().endsWith$S(".fig") ) {
_rna.saveRNAXFIG$S$fr_orsay_lri_varna_models_VARNAConfig(this.formatOutputPath$S$I$I(this._outFile, index, confs.size$()), _vp.getConfig$());
} else if (this._outFile.toLowerCase$().endsWith$S(".svg")) {
_rna.saveRNASVG$S$fr_orsay_lri_varna_models_VARNAConfig(this.formatOutputPath$S$I$I(this._outFile, index, confs.size$()), _vp.getConfig$());
} else if (this._outFile.toLowerCase$().endsWith$S(".jpeg") || this._outFile.toLowerCase$().endsWith$S(".jpg") ) {
this.saveToJPEG$S$fr_orsay_lri_varna_VARNAPanel(this.formatOutputPath$S$I$I(this._outFile, index, confs.size$()), _vp);
} else if (this._outFile.toLowerCase$().endsWith$S(".png")) {
this.saveToPNG$S$fr_orsay_lri_varna_VARNAPanel(this.formatOutputPath$S$I$I(this._outFile, index, confs.size$()), _vp);
} else if (this._outFile.toLowerCase$().endsWith$S(".varna")) {
_vp.saveSession$S(this.formatOutputPath$S$I$I(this._outFile, index, confs.size$()));
} else {
p$1.errorExit$S.apply(this, ["Unknown extension for output file \"" + this._outFile + "\"" ]);
}}index++;
}
} else {
var d=Clazz.new_($I$(13));
d.setDefaultCloseOperation$I(3);
d.pack$();
d.setVisible$Z(true);
for (var b, $b = confs.iterator$(); $b.hasNext$()&&((b=($b.next$())),1);) {
var r=b.rna;
VARNAcfg.setRNA$fr_orsay_lri_varna_models_rna_RNA(r);
vpl=VARNAcfg.createVARNAPanels$();
if (vpl.size$() > 0) {
var _vp=vpl.get$I(0);
var cfg=_vp.getConfig$();
if (b.hasConfig$()) {
cfg=b.config;
}var rna=_vp.getRNA$();
d.addRNA$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig(rna, cfg);
}}
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionWritingForbidden")){
var e = e$$;
{
e.printStackTrace$();
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, ""]));
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionJPEGEncoding")){
var e = e$$;
{
e.printStackTrace$();
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, ""]));
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionParameterError")){
var e = e$$;
{
e.printStackTrace$();
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, ""]));
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionModeleStyleBaseSyntaxError")){
var e = e$$;
{
e.printStackTrace$();
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, ""]));
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
var e = e$$;
{
e.printStackTrace$();
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, ""]));
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e = e$$;
{
e.printStackTrace$();
System.exit$I(1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionExportFailed")){
var e = e$$;
{
e.printStackTrace$();
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, ""]));
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionPermissionDenied")){
var e = e$$;
{
e.printStackTrace$();
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, ""]));
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionLoadingFailed")){
var e = e$$;
{
e.printStackTrace$();
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, ""]));
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e = e$$;
{
e.setPath$S(this._inFile);
e.printStackTrace$();
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, ""]));
}
} else if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
throw (Clazz.new_($I$(5).c$$I$S, [this, null, 1, "Error: Missing input file \"" + this._inFile + "\"." ]));
}
} else {
throw e$$;
}
}
if (!this._outFile.equals$O("")) throw (Clazz.new_($I$(5).c$$I$S, [this, null, 0, ""]));
});

Clazz.newMeth(C$, 'saveToJPEG$S$fr_orsay_lri_varna_VARNAPanel', function (filename, vp) {
var myImage=Clazz.new_($I$(14).c$$I$I$I,[Math.round(vp.getWidth$()), Math.round(vp.getHeight$()), 1]);
var g2=myImage.createGraphics$();
vp.paintComponent$java_awt_Graphics(g2);
try {
var out=Clazz.new_($I$(15).c$$java_io_File,[Clazz.new_($I$(16).c$$S,[filename])]);
var writer=$I$(17).getImageWritersByFormatName$S("jpeg").next$();
var params=writer.getDefaultWriteParam$();
params.setCompressionMode$I(2);
params.setCompressionQuality$F(this._quality);
writer.setOutput$O(out);
var myIIOImage=Clazz.new_($I$(18).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[myImage, null, null]);
writer.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam(null, myIIOImage, params);
out.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(19).c$$S$S,[e.getMessage$(), filename]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'saveToPNG$S$fr_orsay_lri_varna_VARNAPanel', function (filename, vp) {
var myImage=Clazz.new_($I$(14).c$$I$I$I,[Math.round(vp.getWidth$()), Math.round(vp.getHeight$()), 1]);
var g2=myImage.createGraphics$();
vp.paintComponent$java_awt_Graphics(g2);
g2.dispose$();
try {
$I$(17).write$java_awt_image_RenderedImage$S$java_io_File(myImage, "PNG", Clazz.new_($I$(16).c$$S,[filename]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'main$SA', function (argv) {
var opts=Clazz.new_($I$(3));
for (var i=0; i < argv.length; i++) {
opts.add$TE(argv[i]);
}
try {
var app=Clazz.new_(C$.c$$java_util_Vector,[opts]);
app.run$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.applications.VARNAcmd.ExitCode")){
var e = e$$;
{
System.err.println$S(e.getExitMessage$());
System.exit$I(e.getExitCode$());
}
} else {
throw e$$;
}
}
}, 1);
;
(function(){var C$=Clazz.newClass(P$.VARNAcmd, "ExitCode", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._c=0;
this._msg=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$S', function (c, msg) {
Clazz.super_(C$, this,1);
this._c=c;
this._msg=msg;
}, 1);

Clazz.newMeth(C$, 'getExitCode$', function () {
return this._c;
});

Clazz.newMeth(C$, 'getExitMessage$', function () {
return this._msg;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:42 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
