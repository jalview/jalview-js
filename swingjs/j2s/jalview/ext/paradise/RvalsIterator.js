(function(){var P$=Clazz.newPackage("jalview.ext.paradise"),I$=[[0,'java.util.ArrayList','org.apache.http.message.BasicNameValuePair','jalview.ws.HttpClientUtils','org.json.simple.parser.JSONParser','jalview.ext.paradise.RvalsIterator','jalview.util.MessageManager','java.net.URL','java.io.InputStreamReader','jalview.util.JSONUtils','java.io.StringReader','Error']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RvalsIterator", null, null, ['java.util.Iterator', 'AutoCloseable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['rvals','java.util.Iterator']]]

Clazz.newMeth(C$, 'c$$java_io_Reader', function (respons) {
;C$.$init$.apply(this);
this.rvals=($I$(9).parse$java_io_Reader(respons)).iterator$();
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.rvals.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
var val=this.rvals.next$();
var sval=null;
try {
sval=val.get$O("2D");
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
x.printStackTrace$();
} else {
throw x;
}
}
if (sval == null ) {
System.err.println$S("DEVELOPER WARNING: Annotate3d didn't return a '2D' tag in its response. Consider checking output of server. Response was :" + val.toString());
sval="";
}return Clazz.new_([sval.toString()],$I$(10,1).c$$S);
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_([$I$(6).getString$S("error.not_implemented_remove")],$I$(11,1).c$$S);
});

Clazz.newMeth(C$, 'clone$', function () {
throw Clazz.new_(Clazz.load('CloneNotSupportedException').c$$S,[$I$(6).getString$S("error.not_implemented_clone")]);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});

Clazz.newMeth(C$, 'close$', function () {
while (this.rvals.hasNext$()){
this.rvals.next$();
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
