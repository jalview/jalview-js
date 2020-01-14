(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'java.util.HashMap','java.util.ArrayList','java.util.Collections','java.util.BitSet','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlignmentAnnotationUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getShownHiddenTypes$java_util_Map$java_util_Map$java_util_List$java_util_List', function (shownTypes, hiddenTypes, annotations, forSequences) {
var visibleGraphGroups=C$.getVisibleLineGraphGroups$java_util_List(annotations);
var groupLabels=Clazz.new_($I$(1));
var addedToShown=Clazz.new_($I$(2));
var addedToHidden=Clazz.new_($I$(2));
for (var aa, $aa = annotations.iterator$(); $aa.hasNext$()&&((aa=($aa.next$())),1);) {
if (aa.annotations == null ) {
continue;
}if (forSequences != null  && (aa.sequenceRef != null  && forSequences.contains$O(aa.sequenceRef) ) ) {
var calcId=aa.getCalcId$();
var labelAsList=Clazz.new_($I$(2));
var displayLabel=aa.label;
labelAsList.add$TE(displayLabel);
if (aa.graph == 2 && aa.graphGroup > -1 ) {
if (!groupLabels.containsKey$O(calcId)) {
groupLabels.put$TK$TV(calcId, Clazz.new_($I$(1)));
}var groupLabelsForCalcId=groupLabels.get$O(calcId);
if (groupLabelsForCalcId.containsKey$O(new Integer(aa.graphGroup))) {
if (!groupLabelsForCalcId.get$O(new Integer(aa.graphGroup)).contains$O(displayLabel)) {
groupLabelsForCalcId.get$O(new Integer(aa.graphGroup)).add$TE(displayLabel);
}} else {
groupLabelsForCalcId.put$TK$TV(new Integer(aa.graphGroup), labelAsList);
}} else {
var rememberAs=calcId + "!" + displayLabel ;
if (aa.visible && !addedToShown.contains$O(rememberAs) ) {
if (!shownTypes.containsKey$O(calcId)) {
shownTypes.put$TK$TV(calcId, Clazz.new_($I$(2)));
}shownTypes.get$O(calcId).add$TE(labelAsList);
addedToShown.add$TE(rememberAs);
} else {
if (!aa.visible && !addedToHidden.contains$O(rememberAs) ) {
if (!hiddenTypes.containsKey$O(calcId)) {
hiddenTypes.put$TK$TV(calcId, Clazz.new_($I$(2)));
}hiddenTypes.get$O(calcId).add$TE(labelAsList);
addedToHidden.add$TE(rememberAs);
}}}}}
for (var calcId, $calcId = groupLabels.keySet$().iterator$(); $calcId.hasNext$()&&((calcId=($calcId.next$())),1);) {
for (var group, $group = groupLabels.get$O(calcId).keySet$().iterator$(); $group.hasNext$()&&((group=($group.next$()).intValue$()),1);) {
var groupLabel=groupLabels.get$O(calcId).get$O(new Integer(group));
$I$(3).sort$java_util_List(groupLabel);
if (visibleGraphGroups.get$I(group)) {
if (!shownTypes.containsKey$O(calcId)) {
shownTypes.put$TK$TV(calcId, Clazz.new_($I$(2)));
}if (!shownTypes.get$O(calcId).contains$O(groupLabel)) {
shownTypes.get$O(calcId).add$TE(groupLabel);
}} else {
if (!hiddenTypes.containsKey$O(calcId)) {
hiddenTypes.put$TK$TV(calcId, Clazz.new_($I$(2)));
}if (!hiddenTypes.get$O(calcId).contains$O(groupLabel)) {
hiddenTypes.get$O(calcId).add$TE(groupLabel);
}}}
}
}, 1);

Clazz.newMeth(C$, 'getVisibleLineGraphGroups$java_util_List', function (annotations) {
var result=Clazz.new_($I$(4));
for (var ann, $ann = annotations.iterator$(); $ann.hasNext$()&&((ann=($ann.next$())),1);) {
if (ann.graph == 2 && ann.visible ) {
var gg=ann.graphGroup;
if (gg > -1) {
result.set$I(gg);
}}}
return result;
}, 1);

Clazz.newMeth(C$, 'asList$jalview_datamodel_AlignmentAnnotationA', function (anns) {
return (anns == null  ? $I$(3).emptyList$() : $I$(5).asList$TTA(anns));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
