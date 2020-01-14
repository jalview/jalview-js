(function(){var P$=Clazz.newPackage("jalview.ws.jws1"),I$=[[0,'StringBuffer','jalview.ext.paradise.Annotate3D','jalview.io.InputStreamParser','jalview.io.FormatAdapter','jalview.io.FileFormat','jalview.util.MessageManager','java.io.FileReader','java.io.BufferedReader','java.net.URLEncoder','java.net.URL','java.io.InputStreamReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Annotate3D");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
System.out.println$S("Annotate3D");
}, 1);

Clazz.newMeth(C$, 'getRNAMLFor$jalview_io_FileParse', function (source) {
try {
var sb=Clazz.new_($I$(1));
var fpr=source.getReader$();
var p=0;
var cbuff=Clazz.array(Character.TYPE, [2048]);
while ((p=fpr.read$CA(cbuff)) > 0){
for (var i=0; i < p; i++) {
sb.append$C(cbuff[i]);
}
}
var r=$I$(2).getRNAMLForPDBFileAsString$S(sb.toString());
var al=null;
while (r.hasNext$()){
var fp=Clazz.new_($I$(3).c$$java_io_Reader$S,[r.next$(), source.getDataName$()]);
var nal=Clazz.new_($I$(4)).readFromFile$jalview_io_FileParse$jalview_io_FileFormatI(fp, $I$(5).Rnaml);
if (al == null ) {
al=nal;
} else {
al.append$jalview_datamodel_AlignmentI(nal);
}}
return al;
} catch (x) {
if (Clazz.instanceOf(x, "java.io.IOException")) {
throw (x);
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S$Throwable,[$I$(6).getString$S("exception.unexpected_handling_rnaml_translation_for_pdb"), x]);
}}
});

Clazz.newMeth(C$, 'c$$S', function (path) {
C$.$init$.apply(this);
System.out.println$S("Annotate3D");
try {
var r=Clazz.new_($I$(7).c$$S,[path]);
var $in=Clazz.new_($I$(8).c$$java_io_Reader,[r]);
var content="";
var str;
while ((str=$in.readLine$()) != null ){
content=content + str;
}
System.out.println$S("pdbfile=" + content.toString());
System.out.println$S("capacité=" + content.length$());
var paramfile=$I$(9).encode$S$S(content.toString(), "UTF-8");
System.out.println$S("param=" + paramfile);
var url=Clazz.new_($I$(10).c$$S,["http://paradise-ibmc.u-strasbg.fr/webservices/annotate3d?data=" + content]);
var is=Clazz.new_($I$(8).c$$java_io_Reader,[Clazz.new_($I$(11).c$$java_io_InputStream,[url.openStream$()])]);
var str4;
while ((str4=is.readLine$()) != null ){
System.out.println$S(str4);
}
$in.close$();
is.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var ex = e$$;
{
ex.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ex = e$$;
{
ex.printStackTrace$();
}
} else {
throw e$$;
}
}
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
