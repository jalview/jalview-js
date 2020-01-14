(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.io.File','jalview.bin.Cache','java.util.Objects','java.util.TreeMap','jalview.io.BioJsHTMLOutput','jalview.json.binding.biojs.BioJSRepositoryPojo','Thread','java.io.PrintWriter','java.io.FileWriter','java.net.URL','java.io.BufferedInputStream','java.io.BufferedReader','java.io.InputStreamReader','StringBuilder','jalview.io.HTMLOutput','jalview.util.MessageManager','jalview.gui.OOMWarning']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BioJsHTMLOutput", null, 'jalview.io.HTMLOutput');
C$.currentBJSTemplateFile=null;
C$.bioJsMSAVersions=null;
C$.DEFAULT_DIR=null;
C$.BJS_TEMPLATES_LOCAL_DIRECTORY=null;
C$.BJS_TEMPLATE_GIT_REPO=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DEFAULT_DIR=System.getProperty$S("user.home") + $I$(1).separatorChar + ".biojs_templates" + $I$(1).separatorChar ;
C$.BJS_TEMPLATES_LOCAL_DIRECTORY=$I$(2).getDefault$S$S("biojs_template_directory", C$.DEFAULT_DIR);
C$.BJS_TEMPLATE_GIT_REPO=$I$(2).getDefault$S$S("biojs_template_git_repo", "https://raw.githubusercontent.com/jalview/exporter-templates/master/biojs/package.json");
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel', function (ap) {
C$.superclazz.c$$jalview_gui_AlignmentPanel$S.apply(this, [ap, "BioJS MSA"]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'refreshVersionInfo$S', function (dirName) {
var directory=Clazz.new_($I$(1).c$$S,[C$.BJS_TEMPLATES_LOCAL_DIRECTORY]);
$I$(3).requireNonNull$TT$S(dirName, "dirName MUST not be null!");
$I$(3).requireNonNull$TT$S(directory, "directory MUST not be null!");
var versionFileMap=Clazz.new_($I$(4));
for (var file, $file = 0, $$file = directory.listFiles$(); $file<$$file.length&&((file=($$file[$file])),1);$file++) {
if (file.isFile$()) {
var fileName=file.getName$().substring$I$I(0, file.getName$().lastIndexOf$S("."));
var fileMeta=fileName.split$S("_");
if (fileMeta.length > 2) {
C$.setCurrentBJSTemplateFile$java_io_File(file);
versionFileMap.put$TK$TV(fileMeta[2], file);
} else if (fileMeta.length > 1) {
versionFileMap.put$TK$TV(fileMeta[1], file);
}}}
if (C$.getCurrentBJSTemplateFile$() == null  && versionFileMap.size$() > 0 ) {
C$.setCurrentBJSTemplateFile$java_io_File(versionFileMap.lastEntry$().getValue$());
}C$.setBioJsMSAVersions$java_util_TreeMap(versionFileMap);
}, 1);

Clazz.newMeth(C$, 'updateBioJS$', function () {
var updateThread=((P$.BioJsHTMLOutput$1||
(function(){var C$=Clazz.newClass(P$, "BioJsHTMLOutput$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
var gitRepoPkgJson=P$.BioJsHTMLOutput.getURLContentAsString$S($I$(5).BJS_TEMPLATE_GIT_REPO);
if (gitRepoPkgJson != null ) {
var release=Clazz.new_($I$(6).c$$S,[gitRepoPkgJson]);
P$.BioJsHTMLOutput.syncUpdates$S$jalview_json_binding_biojs_BioJSRepositoryPojo($I$(5).BJS_TEMPLATES_LOCAL_DIRECTORY, release);
P$.BioJsHTMLOutput.refreshVersionInfo$S($I$(5).BJS_TEMPLATES_LOCAL_DIRECTORY);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
e.printStackTrace$();
} else {
throw e;
}
}
});
})()
), Clazz.new_($I$(7), [this, null],P$.BioJsHTMLOutput$1));
updateThread.start$();
}, 1);

Clazz.newMeth(C$, 'syncUpdates$S$jalview_json_binding_biojs_BioJSRepositoryPojo', function (localDir, repo) {
for (var bjsRelease, $bjsRelease = repo.getReleases$().iterator$(); $bjsRelease.hasNext$()&&((bjsRelease=($bjsRelease.next$())),1);) {
var releaseUrl=bjsRelease.getUrl$();
var releaseVersion=bjsRelease.getVersion$();
var releaseFile="BioJsMSA_" + releaseVersion + ".txt" ;
if (releaseVersion.equals$O(repo.getLatestReleaseVersion$())) {
releaseFile="Latest_BioJsMSA_" + releaseVersion + ".txt" ;
}var biojsDirectory=Clazz.new_($I$(1).c$$S,[C$.BJS_TEMPLATES_LOCAL_DIRECTORY]);
if (!biojsDirectory.exists$()) {
if (!biojsDirectory.mkdirs$()) {
System.out.println$S("Couldn't create local directory : " + C$.BJS_TEMPLATES_LOCAL_DIRECTORY);
return;
}}var file=Clazz.new_($I$(1).c$$S,[C$.BJS_TEMPLATES_LOCAL_DIRECTORY + releaseFile]);
if (!file.exists$()) {
var out=null;
try {
out=Clazz.new_($I$(8).c$$java_io_Writer,[Clazz.new_($I$(9).c$$java_io_File,[file])]);
out.print$S(C$.getURLContentAsString$S(releaseUrl));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
} finally {
if (out != null ) {
out.flush$();
out.close$();
}}
}}
}, 1);

Clazz.newMeth(C$, 'getURLContentAsString$S', function (url) {
var responseStrBuilder=null;
var is=null;
try {
var resourceUrl=Clazz.new_($I$(10).c$$S,[url]);
is=Clazz.new_($I$(11).c$$java_io_InputStream,[resourceUrl.openStream$()]);
var br=Clazz.new_($I$(12).c$$java_io_Reader,[Clazz.new_($I$(13).c$$java_io_InputStream,[is])]);
responseStrBuilder=Clazz.new_($I$(14));
var lineContent;
while ((lineContent=br.readLine$()) != null ){
responseStrBuilder.append$S(lineContent).append$S("\n");
}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var er = e$$;
{
er.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
ex.printStackTrace$();
}
} else {
throw e$$;
}
} finally {
if (is != null ) {
try {
is.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}}
return responseStrBuilder == null  ? null : responseStrBuilder.toString();
}, 1);

Clazz.newMeth(C$, 'getCurrentBJSTemplateFile$', function () {
return C$.currentBJSTemplateFile;
}, 1);

Clazz.newMeth(C$, 'setCurrentBJSTemplateFile$java_io_File', function (currentBJSTemplateFile) {
C$.currentBJSTemplateFile=currentBJSTemplateFile;
}, 1);

Clazz.newMeth(C$, 'getBioJsMSAVersions$', function () {
return C$.bioJsMSAVersions;
}, 1);

Clazz.newMeth(C$, 'setBioJsMSAVersions$java_util_TreeMap', function (bioJsMSAVersions) {
C$.bioJsMSAVersions=bioJsMSAVersions;
}, 1);

Clazz.newMeth(C$, 'isEmbedData$', function () {
return true;
});

Clazz.newMeth(C$, 'isLaunchInBrowserAfterExport$', function () {
return true;
});

Clazz.newMeth(C$, 'run$', function () {
try {
var bioJSON=this.getBioJSONData$();
var bioJSTemplateString=$I$(15).readFileAsString$java_io_File(C$.getCurrentBJSTemplateFile$());
var generatedBioJsWithJalviewAlignmentAsJson=bioJSTemplateString.replaceAll$S$S("#sequenceData#", bioJSON).toString();
var out=Clazz.new_($I$(8).c$$java_io_Writer,[Clazz.new_($I$(9).c$$java_io_File,[this.generatedFile])]);
out.print$S(generatedBioJsWithJalviewAlignmentAsJson);
out.flush$();
out.close$();
this.setProgressMessage$S($I$(16).formatMessage$S$OA("status.export_complete", [this.getDescription$()]));
this.exportCompleted$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var err = e$$;
{
System.out.println$S("########################\nOUT OF MEMORY " + this.generatedFile + "\n" + "########################" );
Clazz.new_($I$(17).c$$S$OutOfMemoryError,["Creating Image for " + this.generatedFile, err]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
this.setProgressMessage$S($I$(16).formatMessage$S$OA("info.error_creating_file", [this.getDescription$()]));
e.printStackTrace$();
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
