(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'java.util.HashMap','java.util.ArrayList','jalview.datamodel.SequenceGroup','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Grouping");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeGroupsFrom$jalview_datamodel_SequenceIA$SA$java_util_List',  function (sequences, selectedChars, list) {
var gps=Clazz.new_($I$(1,1));
var width=0;
var i;
var pgroup=Clazz.new_($I$(1,1));
if (list != null ) {
for (var sg, $sg = list.iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
for (var sq, $sq = sg.getSequences$java_util_Map(null).iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
pgroup.put$O$O(sq.toString(), sg);
}
}
}for (i=0; i < sequences.length; i++) {
var schar=selectedChars[i];
var pgp=pgroup.get$O((sequences[i]).toString());
if (pgp != null ) {
schar=pgp.getName$() + ":" + schar ;
}var svec=gps.get$O(schar);
if (svec == null ) {
svec=Clazz.new_($I$(2,1));
gps.put$O$O(schar, svec);
}if (width < sequences[i].getLength$()) {
width=sequences[i].getLength$();
}svec.add$O(sequences[i]);
}
var groups=Clazz.array($I$(3), [gps.size$()]);
i=0;
for (var key, $key = gps.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var group=Clazz.new_([gps.get$O(key), "Subseq: " + key, null, true, true, false, 0, width - 1],$I$(3,1).c$$java_util_List$S$jalview_schemes_ColourSchemeI$Z$Z$Z$I$I);
groups[i++]=group;
}
gps.clear$();
pgroup.clear$();
return groups;
}, 1);

Clazz.newMeth(C$, 'makeGroupsFromCols$jalview_datamodel_SequenceIA$jalview_datamodel_ColumnSelection$java_util_List',  function (sequences, cs, list) {
var gps=Clazz.new_($I$(1,1));
var pgroup=Clazz.new_($I$(1,1));
if (list != null ) {
for (var sg, $sg = list.iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
for (var sq, $sq = sg.getSequences$java_util_Map(null).iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
pgroup.put$O$O(sq.toString(), sg);
}
}
}var spos=Clazz.array(Integer.TYPE, [cs.getSelected$().size$()]);
var width=-1;
var i=0;
for (var pos, $pos = cs.getSelected$().iterator$(); $pos.hasNext$()&&((pos=($pos.next$())),1);) {
spos[i++]=pos.intValue$();
}
for (i=0; i < sequences.length; i++) {
var slen=sequences[i].getLength$();
if (width < slen) {
width=slen;
}var pgp=pgroup.get$O((sequences[i]).toString());
var schar=Clazz.new_($I$(4,1));
if (pgp != null ) {
schar.append$S(pgp.getName$() + ":");
}for (var p, $p = 0, $$p = spos; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
if (p >= slen) {
schar.append$S("~");
} else {
schar.append$C(sequences[i].getCharAt$I(p));
}}
var svec=gps.get$O(schar.toString());
if (svec == null ) {
svec=Clazz.new_($I$(2,1));
gps.put$O$O(schar.toString(), svec);
}svec.add$O(sequences[i]);
}
var groups=Clazz.array($I$(3), [gps.size$()]);
i=0;
for (var key, $key = gps.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var group=Clazz.new_([gps.get$O(key), "Subseq: " + key, null, true, true, false, 0, width - 1],$I$(3,1).c$$java_util_List$S$jalview_schemes_ColourSchemeI$Z$Z$Z$I$I);
groups[i++]=group;
}
gps.clear$();
pgroup.clear$();
return groups;
}, 1);

Clazz.newMeth(C$, 'divideByFeature$SA$SA$I$I$jalview_datamodel_SequenceIA$java_util_Vector$S',  function (featureLabels, groupLabels, start, stop, sequences, exgroups, method) {
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
