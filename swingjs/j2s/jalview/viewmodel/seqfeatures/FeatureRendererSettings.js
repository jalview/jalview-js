(function(){var P$=Clazz.newPackage("jalview.viewmodel.seqfeatures"),I$=[[0,'java.util.Arrays','java.util.concurrent.ConcurrentHashMap','java.util.HashMap','jalview.schemes.FeatureColour']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureRendererSettings", null, null, 'Cloneable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.renderOrder=null;
this.featureGroups=null;
this.featureColours=null;
this.featureFilters=null;
this.transparency=0;
this.featureOrder=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$SA$java_util_Map$java_util_Map$F$java_util_Map', function (renderOrder, featureGroups, featureColours, transparency, featureOrder) {
C$.$init$.apply(this);
this.renderOrder=$I$(1).copyOf$TTA$I(renderOrder, renderOrder.length);
this.featureGroups=Clazz.new_($I$(2).c$$java_util_Map,[featureGroups]);
this.featureColours=Clazz.new_($I$(2).c$$java_util_Map,[featureColours]);
this.transparency=transparency;
this.featureOrder=Clazz.new_($I$(2).c$$java_util_Map,[featureOrder]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_viewmodel_seqfeatures_FeatureRendererModel', function (fr) {
C$.$init$.apply(this);
this.renderOrder=null;
this.featureGroups=Clazz.new_($I$(2));
this.featureColours=Clazz.new_($I$(2));
this.featureFilters=Clazz.new_($I$(3));
this.featureOrder=Clazz.new_($I$(2));
if (fr.renderOrder != null ) {
this.renderOrder=Clazz.array(String, [fr.renderOrder.length]);
System.arraycopy$O$I$O$I$I(fr.renderOrder, 0, this.renderOrder, 0, fr.renderOrder.length);
}if (fr.featureGroups != null ) {
this.featureGroups=Clazz.new_($I$(2).c$$java_util_Map,[fr.featureGroups]);
}if (fr.featureColours != null ) {
this.featureColours=Clazz.new_($I$(2).c$$java_util_Map,[fr.featureColours]);
}var en=fr.featureColours.keySet$().iterator$();
while (en.hasNext$()){
var next=en.next$();
var val=this.featureColours.get$O(next);
if (val.isGraduatedColour$() || val.isColourByLabel$() ) {
this.featureColours.put$TK$TV(next, Clazz.new_($I$(4).c$$jalview_schemes_FeatureColour,[val]));
}}
if (fr.featureFilters != null ) {
this.featureFilters.putAll$java_util_Map(fr.featureFilters);
}this.transparency=fr.transparency;
if (fr.featureOrder != null ) {
this.featureOrder=Clazz.new_($I$(2).c$$java_util_Map,[fr.featureOrder]);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
