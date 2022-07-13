(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VisibleContigsIterator", null, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vcontigs=Clazz.new_($I$(1,1));
this.currentPosition=0;
this.endsAtHidden=false;
},1);

C$.$fields$=[['Z',['endsAtHidden'],'I',['currentPosition'],'O',['vcontigs','java.util.List']]]

Clazz.newMeth(C$, 'c$$I$I$java_util_List',  function (start, end, hiddenColumns) {
;C$.$init$.apply(this);
if (hiddenColumns != null  && hiddenColumns.size$() > 0 ) {
var vstart=start;
var hideStart;
var hideEnd;
for (var region, $region = hiddenColumns.iterator$(); $region.hasNext$()&&((region=($region.next$())),1);) {
this.endsAtHidden=false;
hideStart=region[0];
hideEnd=region[1];
if (hideEnd < vstart) {
continue;
}if (hideStart > vstart) {
if (end - 1 > hideStart - 1) {
var contig=Clazz.array(Integer.TYPE, -1, [vstart, hideStart - 1]);
this.vcontigs.add$O(contig);
this.endsAtHidden=true;
} else {
var contig=Clazz.array(Integer.TYPE, -1, [vstart, end - 1]);
this.vcontigs.add$O(contig);
}}vstart=hideEnd + 1;
if (vstart >= end) {
break;
}}
if (vstart < end) {
var contig=Clazz.array(Integer.TYPE, -1, [vstart, end - 1]);
this.vcontigs.add$O(contig);
this.endsAtHidden=false;
}} else {
var contig=Clazz.array(Integer.TYPE, -1, [start, end - 1]);
this.vcontigs.add$O(contig);
}}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return (this.currentPosition < this.vcontigs.size$());
});

Clazz.newMeth(C$, 'next$',  function () {
var result=this.vcontigs.get$I(this.currentPosition);
++this.currentPosition;
return result;
});

Clazz.newMeth(C$, 'endsAtHidden$',  function () {
return this.endsAtHidden;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
