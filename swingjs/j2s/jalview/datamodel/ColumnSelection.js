(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.util.ArrayList','java.util.Collections','java.util.BitSet',['jalview.datamodel.ColumnSelection','.IntList'],['jalview.viewmodel.annotationfilter.AnnotationFilterParameter','.ThresholdType'],['jalview.viewmodel.annotationfilter.AnnotationFilterParameter','.SearchableAnnotationField']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColumnSelection", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['IntList',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selection=Clazz.new_($I$(4,1),[this, null]);
},1);

C$.$fields$=[['O',['selection','jalview.datamodel.ColumnSelection.IntList']]]

Clazz.newMeth(C$, 'addElement$I',  function (col) {
this.selection.add$I(col);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.selection.clear$();
});

Clazz.newMeth(C$, 'removeElement$I',  function (col) {
this.selection.remove$I(col);
});

Clazz.newMeth(C$, 'removeElements$I$I',  function (start, end) {
var colInt;
for (var i=start; i < end; i++) {
colInt=Integer.valueOf$I(i);
if (this.selection.contains$Integer(colInt)) {
this.selection.remove$I((colInt).$c());
}}
});

Clazz.newMeth(C$, 'getSelected$',  function () {
return this.selection.getList$();
});

Clazz.newMeth(C$, 'getSelectedRanges$',  function () {
return this.selection.getRanges$();
});

Clazz.newMeth(C$, 'contains$I',  function (col) {
return (col > -1) ? this.selection.isSelected$I(col) : false;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.selection == null  || this.selection.isEmpty$() ;
});

Clazz.newMeth(C$, 'getMax$',  function () {
if (this.selection.isEmpty$()) {
return -1;
}return this.selection.getMaxColumn$();
});

Clazz.newMeth(C$, 'getMin$',  function () {
if (this.selection.isEmpty$()) {
return 1000000000;
}return this.selection.getMinColumn$();
});

Clazz.newMeth(C$, 'hideSelectedColumns$jalview_datamodel_AlignmentI',  function (al) {
{
for (var selregions, $selregions = this.selection.getRanges$().iterator$(); $selregions.hasNext$()&&((selregions=($selregions.next$())),1);) {
al.getHiddenColumns$().hideColumns$I$I(selregions[0], selregions[1]);
}
this.selection.clear$();
}});

Clazz.newMeth(C$, 'hideSelectedColumns$I$jalview_datamodel_HiddenColumns',  function (col, hidden) {
this.removeElement$I(col);
var min=col - 1;
var max=col + 1;
while (this.contains$I(min)){
this.removeElement$I(min);
--min;
}
while (this.contains$I(max)){
this.removeElement$I(max);
++max;
}
++min;
--max;
if (min > max) {
min=max;
}hidden.hideColumns$I$I(min, max);
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_ColumnSelection',  function (copy) {
;C$.$init$.apply(this);
if (copy != null ) {
this.selection=Clazz.new_($I$(4,1).c$$jalview_datamodel_ColumnSelection_IntList,[this, null, copy.selection]);
}}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'invertColumnSelection$I$I$jalview_datamodel_AlignmentI',  function (first, width, al) {
var hasHidden=al.getHiddenColumns$().hasHiddenColumns$();
for (var i=first; i < width; i++) {
if (this.contains$I(i)) {
this.removeElement$I(i);
} else {
if (!hasHidden || al.getHiddenColumns$().isVisible$I(i) ) {
this.addElement$I(i);
}}}
});

Clazz.newMeth(C$, 'setElementsFrom$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns',  function (colsel, hiddenColumns) {
this.selection=Clazz.new_($I$(4,1),[this, null]);
if (colsel.selection != null  && colsel.selection.size$() > 0 ) {
if (hiddenColumns.hasHiddenColumns$()) {
for (var col, $col = colsel.getSelected$().iterator$(); $col.hasNext$()&&((col=($col.next$())),1);) {
if (hiddenColumns != null  && hiddenColumns.isVisible$I(col.intValue$()) ) {
this.selection.add$I((col).$c());
}}
} else {
for (var col, $col = colsel.getSelected$().iterator$(); $col.hasNext$()&&((col=($col.next$())),1);) {
this.addElement$I((col).$c());
}
}}});

Clazz.newMeth(C$, 'hasSelectedColumns$',  function () {
return (this.selection != null  && this.selection.size$() > 0 );
});

Clazz.newMeth(C$, 'filterAnnotations$jalview_datamodel_AnnotationA$jalview_viewmodel_annotationfilter_AnnotationFilterParameter',  function (annotations, filterParams) {
this.clear$();
var addedCount=0;
var column=0;
do {
var ann=annotations[column];
if (ann != null ) {
var matched=false;
if (filterParams.getThresholdType$() === $I$(5).ABOVE_THRESHOLD  && ann.value > filterParams.getThresholdValue$()  ) {
matched=true;
}if (!matched && filterParams.getThresholdType$() === $I$(5).BELOW_THRESHOLD   && ann.value < filterParams.getThresholdValue$()  ) {
matched=true;
}if (!matched && filterParams.isFilterAlphaHelix$() && ann.secondaryStructure == "H"  ) {
matched=true;
}if (!matched && filterParams.isFilterBetaSheet$() && ann.secondaryStructure == "E"  ) {
matched=true;
}if (!matched && filterParams.isFilterTurn$() && ann.secondaryStructure == "S"  ) {
matched=true;
}var regexSearchString=filterParams.getRegexString$();
if (!matched && regexSearchString != null  ) {
var fields=filterParams.getRegexSearchFields$();
for (var field, $field = fields.iterator$(); $field.hasNext$()&&((field=($field.next$())),1);) {
var compareTo=field === $I$(6).DISPLAY_STRING  ? ann.displayCharacter : ann.description;
if (compareTo != null ) {
try {
if (compareTo.matches$S(regexSearchString)) {
matched=true;
}} catch (pse) {
if (Clazz.exceptionOf(pse,"java.util.regex.PatternSyntaxException")){
if (compareTo.equals$O(regexSearchString)) {
matched=true;
}} else {
throw pse;
}
}
if (matched) {
break;
}}}
}if (matched) {
this.addElement$I(column);
++addedCount;
}}++column;
} while (column < annotations.length);
return addedCount;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.selection.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!(Clazz.instanceOf(obj, "jalview.datamodel.ColumnSelection"))) {
return false;
}var that=obj;
if (this.selection == null ) {
if (that.selection != null ) {
return false;
}}if (!this.selection.equals$O(that.selection)) {
return false;
}return true;
});

Clazz.newMeth(C$, 'markColumns$java_util_BitSet$I$I$Z$Z$Z',  function (markedColumns, startCol, endCol, invert, extendCurrent, toggle) {
var changed=false;
if (!extendCurrent && !toggle ) {
changed=!this.isEmpty$();
this.clear$();
}if (invert) {
var i=markedColumns.nextClearBit$I(startCol);
var ibs=markedColumns.nextSetBit$I(startCol);
while (i >= startCol && i <= endCol ){
if (ibs < 0 || i < ibs ) {
changed=true;
if (toggle && this.contains$I(i) ) {
this.removeElement$I(i++);
} else {
this.addElement$I(i++);
}} else {
i=markedColumns.nextClearBit$I(ibs);
ibs=markedColumns.nextSetBit$I(i);
}}
} else {
var i=markedColumns.nextSetBit$I(startCol);
while (i >= startCol && i <= endCol ){
changed=true;
if (toggle && this.contains$I(i) ) {
this.removeElement$I(i);
} else {
this.addElement$I(i);
}i=markedColumns.nextSetBit$I(i + 1);
}
}return changed;
});

Clazz.newMeth(C$, 'stretchGroup$I$jalview_datamodel_SequenceGroup$I$I',  function (res, sg, min, max) {
if (!this.contains$I(res)) {
this.addElement$I(res);
}if (res > sg.getStartRes$()) {
sg.setEndRes$I(res);
}if (res < sg.getStartRes$()) {
sg.setStartRes$I(res);
}for (var col=min; col <= max; col++) {
if (col < sg.getStartRes$() || col > sg.getEndRes$() ) {
this.removeElement$I(col);
} else {
this.addElement$I(col);
}}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ColumnSelection, "IntList", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['order','java.util.List','+_uorder','selected','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.order=Clazz.new_($I$(1,1));
this._uorder=$I$(2).unmodifiableList$java_util_List(this.order);
this.selected=Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_ColumnSelection_IntList',  function (other) {
C$.c$.apply(this, []);
if (other != null ) {
var j=other.size$();
for (var i=0; i < j; i++) {
this.add$I(other.elementAt$I(i));
}
}}, 1);

Clazz.newMeth(C$, 'add$I',  function (i) {
if (!this.selected.get$I(i)) {
this.order.add$O(Integer.valueOf$I(i));
this.selected.set$I(i);
}});

Clazz.newMeth(C$, 'clear$',  function () {
this.order.clear$();
this.selected.clear$();
});

Clazz.newMeth(C$, 'remove$I',  function (col) {
var colInt=Integer.valueOf$I(col);
if (this.selected.get$I(col)) {
this.order.remove$O(colInt);
this.selected.clear$I(col);
}});

Clazz.newMeth(C$, 'contains$Integer',  function (colInt) {
return this.selected.get$I((colInt).$c());
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.order.isEmpty$();
});

Clazz.newMeth(C$, 'getList$',  function () {
return this._uorder;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.order.size$();
});

Clazz.newMeth(C$, 'elementAt$I',  function (i) {
return (this.order.get$I(i)).$c();
});

Clazz.newMeth(C$, 'pruneColumnList$java_util_List',  function (shifts) {
var s=0;
var t=shifts.size$();
var sr=shifts.get$I(s++);
var pruned=false;
var i=0;
var j=this.order.size$();
while (i < j && s <= t ){
var c=this.order.get$I(i++).intValue$();
if (sr[0] <= c) {
if (sr[1] + sr[0] >= c) {
this.order.remove$I(--i);
this.selected.clear$I(c);
--j;
} else {
if (s < t) {
sr=shifts.get$I(s);
}++s;
}}}
return pruned;
});

Clazz.newMeth(C$, 'compensateForEdits$I$I',  function (start, change) {
var mask=Clazz.new_($I$(3,1));
for (var i=0; i < this.order.size$(); i++) {
var temp=(this.order.get$I(i)).$c();
if (temp >= start) {
this.selected.clear$I(temp);
mask.set$I(temp - change);
this.order.set$I$O(i, Integer.valueOf$I(temp - change));
}}
this.selected.or$java_util_BitSet(mask);
});

Clazz.newMeth(C$, 'isSelected$I',  function (column) {
return this.selected.get$I(column);
});

Clazz.newMeth(C$, 'getMaxColumn$',  function () {
return this.selected.length$() - 1;
});

Clazz.newMeth(C$, 'getMinColumn$',  function () {
return this.selected.get$I(0) ? 0 : this.selected.nextSetBit$I(0);
});

Clazz.newMeth(C$, 'getRanges$',  function () {
var rlist=Clazz.new_($I$(1,1));
if (this.selected.isEmpty$()) {
return rlist;
}var next=this.selected.nextSetBit$I(0);
var clear=-1;
while (next != -1){
clear=this.selected.nextClearBit$I(next);
rlist.add$O(Clazz.array(Integer.TYPE, -1, [next, clear - 1]));
next=this.selected.nextSetBit$I(clear);
}
return rlist;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.selected.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "jalview.datamodel.ColumnSelection.IntList")) {
return (obj).selected.equals$O(this.selected);
}return false;
});
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
