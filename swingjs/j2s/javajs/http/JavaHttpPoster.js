(function(){var P$=Clazz.newPackage("javajs.http"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JavaHttpPoster");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'post$java_net_HttpURLConnection$java_util_List',  function (conn, formData) {
var boundary="---" + Long.$s(System.nanoTime$()) + "---" ;
conn.setRequestProperty$S$S("Content-Type", "multipart/form-data; boundary=" + boundary);
var os=conn.getOutputStream$();
for (var i=0; i < formData.size$(); i++) {
var data=formData.get$I(i);
var name=data.getName$();
var value=data.getData$();
var contentType=data.getContentType$();
var fileName=data.getFileName$();
C$.append$java_io_OutputStream$O(os, "--" + boundary + "\r\n" );
C$.append$java_io_OutputStream$O(os, "Content-Disposition: form-data; name=\"" + name + (fileName == null  ? "" : "\"; filename=\"" + fileName) + "\"" );
C$.append$java_io_OutputStream$O(os, "\r\nContent-Type: ");
C$.append$java_io_OutputStream$O(os, contentType == null  ? "application/octet-stream" : contentType);
C$.append$java_io_OutputStream$O(os, "\r\n\r\n");
C$.append$java_io_OutputStream$O(os, value);
C$.append$java_io_OutputStream$O(os, "\r\n");
}
C$.append$java_io_OutputStream$O(os, "\r\n--" + boundary + "--\r\n" );
os.flush$();
}, 1);

Clazz.newMeth(C$, 'append$java_io_OutputStream$O',  function (outputStream, val) {
if (Clazz.instanceOf(val, Clazz.array(Byte.TYPE, -1))) {
outputStream.write$BA(val);
} else {
outputStream.write$BA(val.toString().getBytes$());
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:25 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
