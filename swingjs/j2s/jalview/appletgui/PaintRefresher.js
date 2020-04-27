(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.util.Hashtable','java.util.Vector','jalview.appletgui.AlignmentPanel']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PaintRefresher");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['components','java.util.Map']]]

Clazz.newMeth(C$, 'Register$java_awt_Component$S', function (comp, seqSetId) {
if (C$.components == null ) {
C$.components=Clazz.new_($I$(1,1));
}if (C$.components.containsKey$O(seqSetId)) {
var comps=C$.components.get$O(seqSetId);
if (!comps.contains$O(comp)) {
comps.addElement$O(comp);
}} else {
var vcoms=Clazz.new_($I$(2,1));
vcoms.addElement$O(comp);
C$.components.put$O$O(seqSetId, vcoms);
}}, 1);

Clazz.newMeth(C$, 'RemoveComponent$java_awt_Component', function (comp) {
if (C$.components == null ) {
return;
}var it=C$.components.keySet$().iterator$();
while (it.hasNext$()){
var comps=C$.components.get$O(it.next$());
comps.removeElement$O(comp);
if (comps.isEmpty$()) {
it.remove$();
}}
}, 1);

Clazz.newMeth(C$, 'Refresh$java_awt_Component$S', function (source, id) {
C$.Refresh$java_awt_Component$S$Z$Z(source, id, false, false);
}, 1);

Clazz.newMeth(C$, 'Refresh$java_awt_Component$S$Z$Z', function (source, id, alignmentChanged, validateSequences) {
if (C$.components == null ) {
return;
}var comp;
var comps=C$.components.get$O(id);
if (comps == null ) {
return;
}var it=comps.iterator$();
while (it.hasNext$()){
comp=it.next$();
if (comp === source ) {
continue;
}if (!comp.isValid$()) {
it.remove$();
} else if (validateSequences && Clazz.instanceOf(comp, "jalview.appletgui.AlignmentPanel") && Clazz.instanceOf(source, "jalview.appletgui.AlignmentPanel")  ) {
C$.validateSequences$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI((source).av.getAlignment$(), (comp).av.getAlignment$());
}if (Clazz.instanceOf(comp, "jalview.appletgui.AlignmentPanel") && alignmentChanged ) {
(comp).alignmentChanged$();
}comp.repaint$();
}
}, 1);

Clazz.newMeth(C$, 'validateSequences$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI', function (source, comp) {
var a1;
if (source.getHiddenSequences$().getSize$() > 0) {
a1=source.getHiddenSequences$().getFullAlignment$().getSequencesArray$();
} else {
a1=source.getSequencesArray$();
}var a2;
if (comp.getHiddenSequences$().getSize$() > 0) {
a2=comp.getHiddenSequences$().getFullAlignment$().getSequencesArray$();
} else {
a2=comp.getSequencesArray$();
}var i;
var iSize=a1.length;
var j;
var jSize=a2.length;
if (iSize == jSize) {
return;
}var exists=false;
for (i=0; i < iSize; i++) {
exists=false;
for (j=0; j < jSize; j++) {
if (a2[j] === a1[i] ) {
exists=true;
break;
}}
if (!exists) {
if (i < comp.getHeight$()) {
var alsq=comp.getSequences$();
{
alsq.add$I$O(i, a1[i]);
}} else {
comp.addSequence$jalview_datamodel_SequenceI(a1[i]);
}if (comp.getHiddenSequences$().getSize$() > 0) {
a2=comp.getHiddenSequences$().getFullAlignment$().getSequencesArray$();
} else {
a2=comp.getSequencesArray$();
}jSize=a2.length;
}}
iSize=a1.length;
jSize=a2.length;
for (j=0; j < jSize; j++) {
exists=false;
for (i=0; i < iSize; i++) {
if (a2[j] === a1[i] ) {
exists=true;
break;
}}
if (!exists) {
comp.deleteSequence$jalview_datamodel_SequenceI(a2[j]);
}}
}, 1);

Clazz.newMeth(C$, 'getAssociatedPanels$S', function (id) {
var comps=C$.components.get$O(id);
var tmp=Clazz.new_($I$(2,1));
var i;
var iSize=comps.size$();
for (i=0; i < iSize; i++) {
if (Clazz.instanceOf(comps.elementAt$I(i), "jalview.appletgui.AlignmentPanel")) {
tmp.addElement$O(comps.elementAt$I(i));
}}
var result=Clazz.array($I$(3), [tmp.size$()]);
for (var ix=0; ix < result.length; ix++) {
result[ix]=tmp.elementAt$I(ix);
}
return result;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:45 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
