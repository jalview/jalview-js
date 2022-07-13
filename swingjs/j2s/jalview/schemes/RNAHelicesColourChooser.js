(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.util.Hashtable','java.util.Vector','jalview.schemes.RNAHelicesColour']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RNAHelicesColourChooser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.adjusting=false;
},1);

C$.$fields$=[['Z',['adjusting'],'O',['av','jalview.api.AlignViewportI','ap','jalview.api.AlignmentViewPanel','oldcs','jalview.schemes.ColourSchemeI','oldgroupColours','java.util.Map','currentAnnotation','jalview.datamodel.AlignmentAnnotation']]]

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel',  function (av, ap) {
;C$.$init$.apply(this);
this.oldcs=av.getGlobalColourScheme$();
if (av.getAlignment$().getGroups$() != null ) {
this.oldgroupColours=Clazz.new_($I$(1,1));
for (var sg, $sg = ap.getAlignment$().getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (sg.getColourScheme$() != null ) {
this.oldgroupColours.put$O$O(sg, sg.getColourScheme$());
}}
}this.av=av;
this.ap=ap;
this.adjusting=true;
var list=Clazz.new_($I$(2,1));
var index=1;
var anns=av.getAlignment$().getAlignmentAnnotation$();
if (anns != null ) {
for (var i=0; i < anns.length; i++) {
var label=anns[i].label;
if (!list.contains$O(label)) {
list.addElement$O(label);
} else {
list.addElement$O(label + "_" + (index++) );
}}
}this.adjusting=false;
this.changeColour$();
}, 1);

Clazz.newMeth(C$, 'changeColour$',  function () {
if (this.adjusting) {
return;
}var rhc=Clazz.new_([this.av.getAlignment$()],$I$(3,1).c$$jalview_datamodel_AnnotatedCollectionI);
this.av.setGlobalColourScheme$jalview_schemes_ColourSchemeI(rhc);
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
