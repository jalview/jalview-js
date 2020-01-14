(function(){var P$=Clazz.newPackage("jalview.ext.paradise"),I$=[[0,'java.util.ArrayList','org.apache.http.message.BasicNameValuePair','jalview.ws.HttpClientUtils','jalview.util.JSONUtils','java.io.StringReader','Error','jalview.util.MessageManager','java.net.URL','java.io.InputStreamReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Annotate3D");
C$.twoDtoolsURL=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.twoDtoolsURL="http://arn-ibmc.in2p3.fr/api/compute/2d?tool=rnaview";
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createContentHandler$', function () {
var ch=((P$.Annotate3D$1||
(function(){var C$=Clazz.newClass(P$, "Annotate3D$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.json.simple.parser.ContentHandler', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
), Clazz.new_(P$.Annotate3D$1.$init$, [this, null]));
return ch;
}, 1);

Clazz.newMeth(C$, 'getRNAMLForPDBFileAsString$S', function (pdbfile) {
var vals=Clazz.new_($I$(1));
vals.add$TE(Clazz.new_($I$(2).c$$S$S,["tool", "rnaview"]));
vals.add$TE(Clazz.new_($I$(2).c$$S$S,["data", pdbfile]));
vals.add$TE(Clazz.new_($I$(2).c$$S$S,["output", "rnaml"]));
var readers=Clazz.new_($I$(1));
var postResponse=$I$(3).doHttpUrlPost$S$java_util_List$I$I(C$.twoDtoolsURL, vals, 0, 0);
readers.add$TE(postResponse);
return readers.iterator$();
}, 1);

Clazz.newMeth(C$, 'processJsonResponseFor$java_io_Reader', function (respons) {
try {
var rvals=($I$(4).parse$java_io_Reader(respons)).iterator$();
return ((P$.Annotate3D$2||
(function(){var C$=Clazz.newClass(P$, "Annotate3D$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.$finals$.rvals.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
var val=this.$finals$.rvals.next$();
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
;if (sval == null ) {
System.err.println$S("DEVELOPER WARNING: Annotate3d didn't return a '2D' tag in its response. Consider checking output of server. Response was :" + val.toString());
sval="";
}return Clazz.new_($I$(5).c$$S,[sval.toString()]);
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_($I$(6).c$$S,[$I$(7).getString$S("error.not_implemented_remove")]);
});

Clazz.newMeth(C$, 'clone$', function () {
throw Clazz.new_(Clazz.load('CloneNotSupportedException').c$$S,[$I$(7).getString$S("error.not_implemented_clone")]);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});

Clazz.newMeth(C$, 'finalize$', function () {
while (this.$finals$.rvals.hasNext$()){
this.$finals$.rvals.next$();
}
C$.superclazz.prototype.finalize$.apply(this, []);
});
})()
), Clazz.new_(P$.Annotate3D$2.$init$, [this, {rvals: rvals}]));
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
throw Clazz.new_(Clazz.load('Exception').c$$S$Throwable,[$I$(7).getString$S("exception.couldnt_parse_responde_from_annotated3d_server"), foo]);
} else {
throw foo;
}
}
}, 1);

Clazz.newMeth(C$, 'getRNAMLForPDBId$S', function (pdbid) {
var vals=Clazz.new_($I$(1));
vals.add$TE(Clazz.new_($I$(2).c$$S$S,["tool", "rnaview"]));
vals.add$TE(Clazz.new_($I$(2).c$$S$S,["pdbid", pdbid]));
vals.add$TE(Clazz.new_($I$(2).c$$S$S,["output", "rnaml"]));
var geturl=Clazz.new_($I$(8).c$$S,[C$.twoDtoolsURL + "?tool=rnaview&pdbid=" + pdbid + "&output=rnaml" ]);
var readers=Clazz.new_($I$(1));
readers.add$TE(Clazz.new_($I$(9).c$$java_io_InputStream,[geturl.openStream$()]));
return readers.iterator$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
