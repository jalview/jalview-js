(function(){var P$=Clazz.newPackage("org.jmol.awtjs2d"),I$=[[0,'javajs.util.OC','org.jmol.viewer.Viewer','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSFile", null, null, 'org.jmol.api.GenericFileInterface');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.fullName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'newFile$S', function (name) {
return Clazz.new_(C$.c$$S,[name]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.name=name.replace$C$C("\\", "/");
this.fullName=name;
if (!this.fullName.startsWith$S("/") && $I$(1).urlTypeIndex$S(name) < 0 ) this.fullName=$I$(2).jsDocumentBase + "/" + this.fullName ;
this.fullName=$I$(3).rep$S$S$S(this.fullName, "/./", "/");
name=name.substring$I(name.lastIndexOf$S("/") + 1);
}, 1);

Clazz.newMeth(C$, 'getParentAsFile$', function () {
var pt=this.fullName.lastIndexOf$S("/");
return (pt < 0 ? null : Clazz.new_(C$.c$$S,[this.fullName.substring$I$I(0, pt)]));
});

Clazz.newMeth(C$, 'getFullPath$', function () {
return this.fullName;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'isDirectory$', function () {
return this.fullName.endsWith$S("/");
});

Clazz.newMeth(C$, 'length$', function () {
return 0;
});

Clazz.newMeth(C$, 'getURLContents$java_net_URL$BA$S', function (url, outputBytes, post) {
try {
var conn=url.openConnection$();
if (outputBytes != null ) conn.outputBytes$BA(outputBytes);
 else if (post != null ) conn.outputString$S(post);
return conn.getContents$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return e.toString();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
