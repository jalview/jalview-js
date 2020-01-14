(function(){var P$=Clazz.newPackage("org.xml.sax.helpers"),I$=[[0,'java.util.Vector']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AttributeListImpl", null, null, 'org.xml.sax.AttributeList');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.names=null;
this.types=null;
this.values=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.names=Clazz.new_($I$(1));
this.types=Clazz.new_($I$(1));
this.values=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_xml_sax_AttributeList', function (atts) {
C$.$init$.apply(this);
this.setAttributeList$org_xml_sax_AttributeList(atts);
}, 1);

Clazz.newMeth(C$, 'setAttributeList$org_xml_sax_AttributeList', function (atts) {
var count=atts.getLength$();
this.clear$();
for (var i=0; i < count; i++) {
this.addAttribute$S$S$S(atts.getName$I(i), atts.getType$I(i), atts.getValue$I(i));
}
});

Clazz.newMeth(C$, 'addAttribute$S$S$S', function (name, type, value) {
this.names.addElement$TE(name);
this.types.addElement$TE(type);
this.values.addElement$TE(value);
});

Clazz.newMeth(C$, 'removeAttribute$S', function (name) {
var i=this.names.indexOf$O(name);
if (i >= 0) {
this.names.removeElementAt$I(i);
this.types.removeElementAt$I(i);
this.values.removeElementAt$I(i);
}});

Clazz.newMeth(C$, 'clear$', function () {
this.names.removeAllElements$();
this.types.removeAllElements$();
this.values.removeAllElements$();
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.names.size$();
});

Clazz.newMeth(C$, 'getName$I', function (i) {
if (i < 0) {
return null;
}try {
return this.names.elementAt$I(i);
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getType$I', function (i) {
if (i < 0) {
return null;
}try {
return this.types.elementAt$I(i);
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getValue$I', function (i) {
if (i < 0) {
return null;
}try {
return this.values.elementAt$I(i);
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getType$S', function (name) {
return this.getType$I(this.names.indexOf$O(name));
});

Clazz.newMeth(C$, 'getValue$S', function (name) {
return this.getValue$I(this.names.indexOf$O(name));
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
