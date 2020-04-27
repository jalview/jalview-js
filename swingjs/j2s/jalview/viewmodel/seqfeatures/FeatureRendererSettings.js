(function(){var P$=Clazz.newPackage("jalview.viewmodel.seqfeatures"),I$=[[0,'java.util.Arrays','java.util.concurrent.ConcurrentHashMap','java.util.HashMap','jalview.schemes.FeatureColour']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureRendererSettings", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['transparency'],'O',['renderOrder','String[]','featureGroups','java.util.Map','+featureColours','+featureFilters','+featureOrder']]]

Clazz.newMeth(C$, 'c$$SA$java_util_Map$java_util_Map$F$java_util_Map', function (renderOrder, featureGroups, featureColours, transparency, featureOrder) {
;C$.$init$.apply(this);
this.renderOrder=$I$(1).copyOf$OA$I(renderOrder, renderOrder.length);
this.featureGroups=Clazz.new_($I$(2,1).c$$java_util_Map,[featureGroups]);
this.featureColours=Clazz.new_($I$(2,1).c$$java_util_Map,[featureColours]);
this.transparency=transparency;
this.featureOrder=Clazz.new_($I$(2,1).c$$java_util_Map,[featureOrder]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_viewmodel_seqfeatures_FeatureRendererModel', function (fr) {
;C$.$init$.apply(this);
this.renderOrder=null;
this.featureGroups=Clazz.new_($I$(2,1));
this.featureColours=Clazz.new_($I$(2,1));
this.featureFilters=Clazz.new_($I$(3,1));
this.featureOrder=Clazz.new_($I$(2,1));
if (fr.renderOrder != null ) {
this.renderOrder=Clazz.array(String, [fr.renderOrder.length]);
System.arraycopy$O$I$O$I$I(fr.renderOrder, 0, this.renderOrder, 0, fr.renderOrder.length);
}if (fr.featureGroups != null ) {
this.featureGroups=Clazz.new_($I$(2,1).c$$java_util_Map,[fr.featureGroups]);
}if (fr.featureColours != null ) {
this.featureColours=Clazz.new_($I$(2,1).c$$java_util_Map,[fr.featureColours]);
}var en=fr.featureColours.keySet$().iterator$();
while (en.hasNext$()){
var next=en.next$();
var val=this.featureColours.get$O(next);
if (val.isGraduatedColour$() || val.isColourByLabel$() ) {
this.featureColours.put$O$O(next, Clazz.new_($I$(4,1).c$$jalview_schemes_FeatureColour,[val]));
}}
if (fr.featureFilters != null ) {
this.featureFilters.putAll$java_util_Map(fr.featureFilters);
}this.transparency=fr.transparency;
if (fr.featureOrder != null ) {
this.featureOrder=Clazz.new_($I$(2,1).c$$java_util_Map,[fr.featureOrder]);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
