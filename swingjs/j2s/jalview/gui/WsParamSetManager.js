(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.Hashtable','jalview.bin.Cache','java.util.StringTokenizer','java.util.ArrayList','jalview.ws.params.WsParamSetI','java.io.InputStreamReader','java.io.FileInputStream','java.io.File','javax.xml.bind.JAXBContext','javax.xml.stream.XMLInputFactory','jalview.xml.binding.jalview.WebServiceParameterSet','Error','jalview.util.MessageManager','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView','jalview.gui.Desktop','java.io.PrintWriter','java.io.OutputStreamWriter','java.io.FileOutputStream','jalview.xml.binding.jalview.ObjectFactory','jalview.gui.JvOptionPane']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WsParamSetManager", null, null, 'jalview.ws.params.ParamManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.paramparsers=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['paramparsers','java.util.Hashtable']]]

Clazz.newMeth(C$, 'getParameterSet$S$S$Z$Z', function (name, serviceUrl, modifiable, unmodifiable) {
var files=$I$(2).getProperty$S("WS_PARAM_FILES");
if (files == null ) {
return null;
}var st=Clazz.new_($I$(3,1).c$$S$S,[files, "|"]);
var pfile=null;
var params=Clazz.new_($I$(4,1));
while (st.hasMoreTokens$()){
pfile=st.nextToken$();
try {
var pset=p$1.parseParamFile$S.apply(this, [pfile]);
for (var p, $p = 0, $$p = pset; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
var add=false;
if (serviceUrl != null ) {
for (var url, $url = 0, $$url = p.getApplicableUrls$(); $url<$$url.length&&((url=($$url[$url])),1);$url++) {
if (url.equals$O(serviceUrl)) {
add=true;
}}
} else {
add=true;
}add&=(modifiable == p.isModifiable$()  || unmodifiable == !p.isModifiable$()  );
add&=name == null  || p.getName$().equals$O(name) ;
if (add) {
params.add$O(p);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(2).log.info$O$Throwable("Failed to parse parameter file " + pfile + " (Check that all JALVIEW_WSPARAMFILES entries are valid!)" , e);
} else {
throw e;
}
}
}
return params.toArray$OA(Clazz.array($I$(5), [0]));
});

Clazz.newMeth(C$, 'parseParamFile$S', function (filename) {
var psets=Clazz.new_($I$(4,1));
var is=Clazz.new_([Clazz.new_([Clazz.new_($I$(8,1).c$$S,[filename])],$I$(7,1).c$$java_io_File), "UTF-8"],$I$(6,1).c$$java_io_InputStream$S);
var wspset=null;
try {
var jc=$I$(9).newInstance$S("jalview.xml.binding.jalview");
var um=jc.createUnmarshaller$();
var streamReader=$I$(10).newInstance$().createXMLStreamReader$java_io_Reader(is);
var jbe=um.unmarshal$javax_xml_stream_XMLStreamReader$Class(streamReader, Clazz.getClass($I$(11)));
wspset=jbe.getValue$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[ex]);
} else {
throw ex;
}
}
if (wspset != null  && wspset.getParameters$().length$() > 0 ) {
var urls=wspset.getServiceURL$();
var urlArray=urls.toArray$OA(Clazz.array(String, [urls.size$()]));
for (var url, $url = urls.iterator$(); $url.hasNext$()&&((url=($url.next$())),1);) {
var parser=this.paramparsers.get$O(url);
if (parser != null ) {
var pset=parser.parseServiceParameterFile$S$S$SA$S(wspset.getName$(), wspset.getDescription$(), urlArray, wspset.getParameters$());
if (pset != null ) {
pset.setSourceFile$S(filename);
psets.add$O(pset);
break;
}}}
}return psets.toArray$OA(Clazz.array($I$(5), [0]));
}, p$1);

Clazz.newMeth(C$, 'storeParameterSet$jalview_ws_params_WsParamSetI', function (parameterSet) {
var filename=parameterSet.getSourceFile$();
var outfile=null;
try {
if (filename != null  && !((outfile=Clazz.new_($I$(8,1).c$$S,[filename])).canWrite$()) ) {
$I$(2).log.warn$O("Can't write to " + filename + " - Prompting for new file to write to." );
filename=null;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
filename=null;
} else {
throw e;
}
}
var parser=null;
for (var urls, $urls = 0, $$urls = parameterSet.getApplicableUrls$(); $urls<$$urls.length&&((urls=($$urls[$urls])),1);$urls++) {
if (parser == null ) {
parser=this.paramparsers.get$O(urls);
}}
if (parser == null ) {
throw Clazz.new_([$I$(13).getString$S("error.implementation_error_cannot_find_marshaller_for_param_set")],$I$(12,1).c$$S);
}if (filename == null ) {
var chooser=Clazz.new_($I$(14,1).c$$S$S,["wsparams", "Web Service Parameter File"]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(15,1)));
chooser.setDialogTitle$S($I$(13).getString$S("label.choose_filename_for_param_file"));
chooser.setToolTipText$S($I$(13).getString$S("action.save"));
var value=chooser.showSaveDialog$java_awt_Component($I$(16).instance);
if (value == 0) {
outfile=chooser.getSelectedFile$();
$I$(2,"setProperty$S$S",["LAST_DIRECTORY", outfile.getParent$()]);
filename=outfile.getAbsolutePath$();
if (!filename.endsWith$S(".wsparams")) {
filename=filename.concat$S(".wsparams");
outfile=Clazz.new_($I$(8,1).c$$S,[filename]);
}}}if (outfile != null ) {
var paramFiles=$I$(2).getDefault$S$S("WS_PARAM_FILES", filename);
if (paramFiles.indexOf$S(filename) == -1) {
if (paramFiles.length$() > 0) {
paramFiles=paramFiles.concat$S("|");
}paramFiles=paramFiles.concat$S(filename);
}$I$(2).setProperty$S$S("WS_PARAM_FILES", paramFiles);
var paramxml=Clazz.new_($I$(11,1));
paramxml.setName$S(parameterSet.getName$());
paramxml.setDescription$S(parameterSet.getDescription$());
for (var url, $url = 0, $$url = parameterSet.getApplicableUrls$(); $url<$$url.length&&((url=($$url[$url])),1);$url++) {
paramxml.getServiceURL$().add$O(url);
}
paramxml.setVersion$S("1.0");
try {
paramxml.setParameters$S(parser.generateServiceParameterFile$jalview_ws_params_WsParamSetI(parameterSet));
var out=Clazz.new_([Clazz.new_([Clazz.new_($I$(19,1).c$$java_io_File,[outfile]), "UTF-8"],$I$(18,1).c$$java_io_OutputStream$S)],$I$(17,1).c$$java_io_Writer);
var jaxbContext=$I$(9,"newInstance$ClassA",[[Clazz.getClass($I$(11))]]);
var jaxbMarshaller=jaxbContext.createMarshaller$();
jaxbMarshaller.marshal$O$java_io_Writer(Clazz.new_($I$(20,1)).createWebServiceParameterSet$jalview_xml_binding_jalview_WebServiceParameterSet(paramxml), out);
out.close$();
parameterSet.setSourceFile$S(filename);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(2).log.error$O$Throwable("Couldn't write parameter file to " + outfile, e);
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'deleteParameterSet$jalview_ws_params_WsParamSetI', function (parameterSet) {
var filename=parameterSet.getSourceFile$();
if (filename == null  || filename.trim$().length$() < 1 ) {
return;
}var paramFiles=$I$(2).getDefault$S$S("WS_PARAM_FILES", "");
if (paramFiles.indexOf$S(filename) > -1) {
var nparamFiles= String.instantialize();
var st=Clazz.new_($I$(3,1).c$$S$S,[paramFiles, "|"]);
while (st.hasMoreElements$()){
var fl=st.nextToken$();
if (!fl.equals$O(filename)) {
nparamFiles=nparamFiles.concat$S("|").concat$S(fl);
}}
$I$(2).setProperty$S$S("WS_PARAM_FILES", nparamFiles);
}try {
var pfile=Clazz.new_($I$(8,1).c$$S,[filename]);
if (pfile.exists$() && pfile.canWrite$() ) {
if ($I$(21,"showConfirmDialog$java_awt_Component$O$S$I",[$I$(16).instance, "Delete the preset\'s file, too ?", "Delete User Preset ?", 2]) == 0) {
pfile.delete$();
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(2).log.error$O$Throwable("Exception when trying to delete webservice user preset: ", e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'registerParser$S$jalview_ws_params_ParamDatastoreI', function (hosturl, paramdataStore) {
this.paramparsers.put$O$O(hosturl, paramdataStore);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
