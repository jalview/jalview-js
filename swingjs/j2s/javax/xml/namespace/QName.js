(function(){var P$=Clazz.newPackage("javax.xml.namespace"),I$=[[0,'java.util.StringTokenizer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "QName");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.namespaceURI=null;
this.localPart=null;
this.prefix=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'valueOf$S', function (toStringName) {
var uri=null;
var localPart=null;
var tokenizer=Clazz.new_($I$(1).c$$S$S,[toStringName, "{}"]);
var tokenCount=tokenizer.countTokens$();
if (tokenCount < 1 || tokenCount > 2 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid QName string: " + toStringName]);
if (tokenCount > 1) uri=tokenizer.nextToken$();
localPart=tokenizer.nextToken$();
return Clazz.new_(C$.c$$S$S,[uri, localPart]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (localPart) {
C$.c$$S$S.apply(this, [null, localPart]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (namespaceURI, localPart) {
C$.c$$S$S$S.apply(this, [namespaceURI, localPart, ""]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (namespaceURI, localPart, prefix) {
C$.$init$.apply(this);
this.namespaceURI=namespaceURI;
if (this.namespaceURI == null ) this.namespaceURI="";
if (localPart == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["localPart cannot be null"]);
if (localPart.startsWith$S(":")) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal localPart: " + localPart]);
this.localPart=localPart;
this.prefix=prefix;
if (this.prefix == null ) this.prefix="";
}, 1);

Clazz.newMeth(C$, 'getNamespaceURI$', function () {
return this.namespaceURI;
});

Clazz.newMeth(C$, 'getLocalPart$', function () {
return this.localPart;
});

Clazz.newMeth(C$, 'getPrefix$', function () {
return this.prefix;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.namespaceURI.equals$O("")) return this.localPart;
 else return '{' + this.namespaceURI + '}' + this.localPart ;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "javax.xml.namespace.QName")) {
var qn=obj;
var equals=this.namespaceURI.equals$O(qn.namespaceURI);
return equals && this.localPart.equals$O(qn.localPart) ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hashCode=this.namespaceURI.hashCode$() + this.localPart.hashCode$();
return hashCode;
});

Clazz.newMeth(C$, 'compareTo$O', function (o) {
var other=o;
return this.toString().compareTo$S(other.toString());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:29 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
