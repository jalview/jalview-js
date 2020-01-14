(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.util.Hashtable','java.util.Vector','jalview.schemes.RNAHelicesColour']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RNAHelicesColourChooser");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.av=null;
this.ap=null;
this.oldcs=null;
this.oldgroupColours=null;
this.currentAnnotation=null;
this.adjusting=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.adjusting=false;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel', function (av, ap) {
C$.$init$.apply(this);
this.oldcs=av.getGlobalColourScheme$();
if (av.getAlignment$().getGroups$() != null ) {
this.oldgroupColours=Clazz.new_($I$(1));
for (var sg, $sg = ap.getAlignment$().getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (sg.getColourScheme$() != null ) {
this.oldgroupColours.put$TK$TV(sg, sg.getColourScheme$());
}}
}this.av=av;
this.ap=ap;
this.adjusting=true;
var list=Clazz.new_($I$(2));
var index=1;
var anns=av.getAlignment$().getAlignmentAnnotation$();
if (anns != null ) {
for (var i=0; i < anns.length; i++) {
var label=anns[i].label;
if (!list.contains$O(label)) {
list.addElement$TE(label);
} else {
list.addElement$TE(label + "_" + (index++) );
}}
}this.adjusting=false;
this.changeColour$();
}, 1);

Clazz.newMeth(C$, 'changeColour$', function () {
if (this.adjusting) {
return;
}var rhc=Clazz.new_($I$(3).c$$jalview_datamodel_AnnotatedCollectionI,[this.av.getAlignment$()]);
this.av.setGlobalColourScheme$jalview_schemes_ColourSchemeI(rhc);
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
