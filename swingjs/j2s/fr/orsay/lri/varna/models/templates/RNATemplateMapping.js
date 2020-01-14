(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),I$=[[0,'java.util.HashMap','java.util.ArrayList','fr.orsay.lri.varna.applications.templateEditor.Couple']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RNATemplateMapping");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.map=null;
this.invmap=null;
this.distance=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1));
this.invmap=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getDistance$', function () {
return this.distance;
});

Clazz.newMeth(C$, 'setDistance$D', function (distance) {
this.distance=distance;
});

Clazz.newMeth(C$, 'addCouple$I$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement', function (baseIndex, templateElement) {
if (this.map.containsKey$O(new Integer(baseIndex))) {
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.templates.RNATemplateMappingException').c$$S,["Base index already in mapping: " + baseIndex]));
}if (baseIndex < 0) {
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.templates.RNATemplateMappingException').c$$S,["Invalid base index: " + baseIndex]));
}this.map.put$TK$TV(new Integer(baseIndex), templateElement);
if (!this.invmap.containsKey$O(templateElement)) {
this.invmap.put$TK$TV(templateElement, Clazz.new_($I$(2)));
}this.invmap.get$O(templateElement).add$TE(new Integer(baseIndex));
});

Clazz.newMeth(C$, 'showCompact$fr_orsay_lri_varna_models_rna_RNA', function (r) {
var ranges=Clazz.new_($I$(1));
for (var i, $i = this.map.keySet$().iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
var t=this.map.get$O(new Integer(i));
var k=t.getName$();
if (Clazz.instanceOf(t, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) {
k += " (" + (t).getCaption$() + ")" ;
var mb=r.getBaseAt$I(i);
if (mb.getElementStructure$() > i) k=k + ":5'";
 else k=k + ":3'";
}if (!ranges.containsKey$O(k)) {
ranges.put$TK$TV(k, Clazz.new_($I$(3).c$$TT$TU,[new Integer(2147483647), new Integer(-2147483648)]));
}var c=ranges.get$O(k);
c.first=new Integer(Math.min((c.first).intValue$(), i));
c.second=new Integer(Math.max((c.second).intValue$(), i));
}
var result="";
for (var k, $k = ranges.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
var c=ranges.get$O(k);
var t=this.map.get$O(c.first);
var type=((Clazz.instanceOf(t, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) ? "strand" : "loop");
if (Clazz.instanceOf(t, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) {
if (k.endsWith$S("5\'")) {
var c3=ranges.get$O(k.replace$CharSequence$CharSequence("5\'", "3\'"));
result += "dummyID\t1\t" + k.replace$CharSequence$CharSequence(":5\'", "") + "\t" + type + "\t" + c.first + "-" + c.second + ":" + c3.first + "-" + c3.second + "\n" ;
}} else if (Clazz.instanceOf(t, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence")) {
result += "dummyID\t1\t" + k + "\t" + type + "\t" + c.first + "-" + c.second + "\n" ;
}}
result += "alignment distance = " + new Double(this.distance).toString();
return result;
});

Clazz.newMeth(C$, 'getPartner$I', function (baseIndex) {
if (this.map.containsKey$O(new Integer(baseIndex))) {
return this.map.get$O(new Integer(baseIndex));
} else {
return null;
}});

Clazz.newMeth(C$, 'getAncestor$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement', function (templateElement) {
if (this.invmap.containsKey$O(templateElement)) {
return this.invmap.get$O(templateElement);
} else {
return null;
}});

Clazz.newMeth(C$, 'getSourceElemsAsSet$', function () {
return this.map.keySet$();
});

Clazz.newMeth(C$, 'getTargetElemsAsSet$', function () {
return this.invmap.keySet$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
