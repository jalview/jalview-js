(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ShiftList");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.shifts=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.shifts=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'addShift$I$I', function (pos, shift) {
{
var sidx=0;
var rshift=null;
while (sidx < this.shifts.size$() && (rshift=this.shifts.get$I(sidx))[0] < pos ){
sidx++;
}
if (sidx == this.shifts.size$()) {
this.shifts.add$I$TE(sidx, Clazz.array(Integer.TYPE, -1, [pos, shift]));
} else {
rshift[1]+=shift;
}}});

Clazz.newMeth(C$, 'shift$I', function (pos) {
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

Clazz.newMeth(C$, 'clear$', function () {
this.shifts.clear$();
});

Clazz.newMeth(C$, 'getInverse$', function () {
var inverse=Clazz.new_(C$);
{
if (this.shifts != null ) {
for (var sh, $sh = this.shifts.iterator$(); $sh.hasNext$()&&((sh=($sh.next$())),1);) {
if (sh != null ) {
inverse.shifts.add$TE(Clazz.array(Integer.TYPE, -1, [sh[0], -sh[1]]));
}}
}}return inverse;
});

Clazz.newMeth(C$, 'parseMap$IA', function (gapMap) {
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

Clazz.newMeth(C$, 'getShifts$', function () {
return this.shifts;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
