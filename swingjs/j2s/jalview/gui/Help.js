(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.util.Platform','jalview.util.BrowserLauncher',['jalview.gui.Help','.HelpId']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Help", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.hb=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'showHelpWindow$jalview_gui_Help_HelpId', function (id) {
if ($I$(1).isJS$()) {
try {
$I$(2).openURL$S("http://www.jalview.org/help/" + id.getPath$());
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
} else 
{}
}, 1);

Clazz.newMeth(C$, 'showHelpWindow$', function () {
C$.showHelpWindow$jalview_gui_Help_HelpId($I$(3).Home);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.Help, "HelpId", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$S, "Home", 0, ["home", "help.html"]);
Clazz.newEnumConst($vals, C$.c$$S$S, "SequenceFeatureSettings", 1, ["seqfeatures.settings", "html/features/featuresettings.html"]);
Clazz.newEnumConst($vals, C$.c$$S$S, "StructureViewer", 2, ["viewingpdbs", "html/features/viewingpdbs.html"]);
Clazz.newEnumConst($vals, C$.c$$S$S, "PdbFts", 3, ["pdbfts", "html/features/pdbsequencefetcher.html#pdbfts"]);
Clazz.newEnumConst($vals, C$.c$$S$S, "UniprotFts", 4, ["uniprotfts", "html/features/uniprotsequencefetcher.html#uniprotfts"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.id=null;
this.path=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (hepLoc, htmlPath) {
C$.$init$.apply(this);
this.id=hepLoc;
this.path=htmlPath;
}, 1);

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'getPath$', function () {
return this.path;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
