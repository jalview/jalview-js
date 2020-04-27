(function(){var P$=Clazz.newPackage("jalview.ws.jws1"),I$=[[0,'StringBuffer','jalview.ext.paradise.Annotate3D','jalview.io.InputStreamParser','jalview.io.FormatAdapter','jalview.io.FileFormat','jalview.util.MessageManager','java.io.FileReader','java.io.BufferedReader','java.net.URLEncoder','java.net.URL','java.io.InputStreamReader']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Annotate3D");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
System.out.println$S("Annotate3D");
}, 1);

Clazz.newMeth(C$, 'getRNAMLFor$jalview_io_FileParse', function (source) {
try {
var sb=Clazz.new_($I$(1,1));
var fpr=source.getReader$();
var p=0;
var cbuff=Clazz.array(Character.TYPE, [2048]);
while ((p=fpr.read$CA(cbuff)) > 0){
for (var i=0; i < p; i++) {
sb.append$C(cbuff[i]);
}
}
var r=$I$(2,"getRNAMLForPDBFileAsString$S",[sb.toString()]);
var al=null;
while (r.hasNext$()){
var fp=Clazz.new_([r.next$(), source.getDataName$()],$I$(3,1).c$$java_io_Reader$S);
var nal=Clazz.new_($I$(4,1)).readFromFile$jalview_io_FileParse$jalview_io_FileFormatI(fp, $I$(5).Rnaml);
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
;C$.$init$.apply(this);
System.out.println$S("Annotate3D");
try {
var r=Clazz.new_($I$(7,1).c$$S,[path]);
var $in=Clazz.new_($I$(8,1).c$$java_io_Reader,[r]);
var content="";
var str;
while ((str=$in.readLine$()) != null ){
content=content + str;
}
System.out.println$S("pdbfile=" + content.toString());
System.out.println$S("capacité=" + content.length$());
var paramfile=$I$(9,"encode$S$S",[content.toString(), "UTF-8"]);
System.out.println$S("param=" + paramfile);
var url=Clazz.new_(["http://paradise-ibmc.u-strasbg.fr/webservices/annotate3d?data=" + content],$I$(10,1).c$$S);
var is=Clazz.new_([Clazz.new_([url.openStream$()],$I$(11,1).c$$java_io_InputStream)],$I$(8,1).c$$java_io_Reader);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
