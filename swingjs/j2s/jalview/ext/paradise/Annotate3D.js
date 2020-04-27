(function(){var P$=Clazz.newPackage("jalview.ext.paradise"),I$=[[0,'java.util.ArrayList','org.apache.http.message.BasicNameValuePair','jalview.ws.HttpClientUtils','org.json.simple.parser.JSONParser','jalview.ext.paradise.RvalsIterator','jalview.util.MessageManager','java.net.URL','java.io.InputStreamReader','jalview.util.JSONUtils','java.io.StringReader','Error']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Annotate3D");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['twoDtoolsURL']]]

Clazz.newMeth(C$, 'createContentHandler$', function () {
var ch=((P$.Annotate3D$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Annotate3D$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.json.simple.parser.ContentHandler', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'startJSON$', function () {
});

Clazz.newMeth(C$, 'endJSON$', function () {
});

Clazz.newMeth(C$, 'startObject$', function () {
return false;
});

Clazz.newMeth(C$, 'endObject$', function () {
return false;
});

Clazz.newMeth(C$, 'startObjectEntry$S', function (key) {
return false;
});

Clazz.newMeth(C$, 'endObjectEntry$', function () {
return false;
});

Clazz.newMeth(C$, 'startArray$', function () {
return false;
});

Clazz.newMeth(C$, 'endArray$', function () {
return false;
});

Clazz.newMeth(C$, 'primitive$O', function (value) {
return false;
});
})()
), Clazz.new_(P$.Annotate3D$1.$init$,[this, null]));
return ch;
}, 1);

Clazz.newMeth(C$, 'getRNAMLForPDBFileAsString$S', function (pdbfile) {
var vals=Clazz.new_($I$(1,1));
vals.add$O(Clazz.new_($I$(2,1).c$$S$S,["tool", "rnaview"]));
vals.add$O(Clazz.new_($I$(2,1).c$$S$S,["data", pdbfile]));
vals.add$O(Clazz.new_($I$(2,1).c$$S$S,["output", "rnaml"]));
var readers=Clazz.new_($I$(1,1));
var postResponse=$I$(3).doHttpUrlPost$S$java_util_List$I$I(C$.twoDtoolsURL, vals, 0, 0);
readers.add$O(postResponse);
return readers.iterator$();
}, 1);

Clazz.newMeth(C$, 'processJsonResponseFor$java_io_Reader', function (respons) {
var jp=Clazz.new_($I$(4,1));
try {
var rvals=Clazz.new_($I$(5,1).c$$java_io_Reader,[respons]);
return rvals;
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
throw Clazz.new_(Clazz.load('Exception').c$$S$Throwable,[$I$(6).getString$S("exception.couldnt_parse_responde_from_annotated3d_server"), foo]);
} else {
throw foo;
}
}
}, 1);

Clazz.newMeth(C$, 'getRNAMLForPDBId$S', function (pdbid) {
var vals=Clazz.new_($I$(1,1));
vals.add$O(Clazz.new_($I$(2,1).c$$S$S,["tool", "rnaview"]));
vals.add$O(Clazz.new_($I$(2,1).c$$S$S,["pdbid", pdbid]));
vals.add$O(Clazz.new_($I$(2,1).c$$S$S,["output", "rnaml"]));
var geturl=Clazz.new_([C$.twoDtoolsURL + "?tool=rnaview&pdbid=" + pdbid + "&output=rnaml" ],$I$(7,1).c$$S);
var readers=Clazz.new_($I$(1,1));
readers.add$O(Clazz.new_([geturl.openStream$()],$I$(8,1).c$$java_io_InputStream));
return readers.iterator$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.twoDtoolsURL="http://arn-ibmc.in2p3.fr/api/compute/2d?tool=rnaview";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
