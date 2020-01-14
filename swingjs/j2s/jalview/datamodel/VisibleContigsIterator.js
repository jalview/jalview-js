(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VisibleContigsIterator", null, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vcontigs=null;
this.currentPosition=0;
this.endsAtHidden=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.vcontigs=Clazz.new_($I$(1));
this.currentPosition=0;
this.endsAtHidden=false;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$java_util_List', function (start, end, hiddenColumns) {
C$.$init$.apply(this);
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
this.vcontigs.add$TE(contig);
this.endsAtHidden=true;
} else {
var contig=Clazz.array(Integer.TYPE, -1, [vstart, end - 1]);
this.vcontigs.add$TE(contig);
}}vstart=hideEnd + 1;
if (vstart >= end) {
break;
}}
if (vstart < end) {
var contig=Clazz.array(Integer.TYPE, -1, [vstart, end - 1]);
this.vcontigs.add$TE(contig);
this.endsAtHidden=false;
}} else {
var contig=Clazz.array(Integer.TYPE, -1, [start, end - 1]);
this.vcontigs.add$TE(contig);
}}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return (this.currentPosition < this.vcontigs.size$());
});

Clazz.newMeth(C$, 'next$', function () {
var result=this.vcontigs.get$I(this.currentPosition);
this.currentPosition++;
return result;
});

Clazz.newMeth(C$, 'endsAtHidden$', function () {
return this.endsAtHidden;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
