(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ShiftList");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['shifts','java.util.List']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.shifts=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'addShift$I$I',  function (pos, shift) {
{
var sidx=0;
var rshift=null;
while (sidx < this.shifts.size$() && (rshift=this.shifts.get$I(sidx))[0] < pos ){
++sidx;
}
if (sidx == this.shifts.size$()) {
this.shifts.add$I$O(sidx, Clazz.array(Integer.TYPE, -1, [pos, shift]));
} else {
rshift[1]+=shift;
}}});

Clazz.newMeth(C$, 'shift$I',  function (pos) {
if (this.shifts.size$() == 0) {
return pos;
}var shifted=pos;
var sidx=0;
var rshift;
while (sidx < this.shifts.size$() && (rshift=(this.shifts.get$I(sidx++)))[0] <= pos ){
shifted+=rshift[1];
}
return shifted;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.shifts.clear$();
});

Clazz.newMeth(C$, 'getInverse$',  function () {
var inverse=Clazz.new_(C$);
{
if (this.shifts != null ) {
for (var sh, $sh = this.shifts.iterator$(); $sh.hasNext$()&&((sh=($sh.next$())),1);) {
if (sh != null ) {
inverse.shifts.add$O(Clazz.array(Integer.TYPE, -1, [sh[0], -sh[1]]));
}}
}}return inverse;
});

Clazz.newMeth(C$, 'parseMap$IA',  function (gapMap) {
var shiftList=null;
if (gapMap != null  && gapMap.length > 0 ) {
shiftList=Clazz.new_(C$);
for (var i=0, p=0; i < gapMap.length; p++, i++) {
if (p != gapMap[i]) {
shiftList.addShift$I$I(p, gapMap[i] - p);
p=gapMap[i];
}}
}return shiftList;
}, 1);

Clazz.newMeth(C$, 'getShifts$',  function () {
return this.shifts;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
