(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),I$=[[0,'java.util.WeakHashMap','java.util.HashMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LinkHandler");
C$.LAYOUTS=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.LAYOUTS=Clazz.new_($I$(1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getValue$O$S$I', function (layout, key, type) {
var ret=null;
var layoutValues=C$.LAYOUTS.get$O(layout);
if (layoutValues != null ) {
var rect=layoutValues[1].get$O(key);
if (rect != null  && rect[type] != -2147471302 ) {
ret=new Integer(rect[type]);
} else {
rect=layoutValues[0].get$O(key);
ret=(rect != null  && rect[type] != -2147471302 ) ? new Integer(rect[type]) : null;
}}return ret;
}, 1);

Clazz.newMeth(C$, 'setBounds$O$S$I$I$I$I', function (layout, key, x, y, width, height) {
return C$.setBounds$O$S$I$I$I$I$Z$Z(layout, key, x, y, width, height, false, false);
}, 1);

Clazz.newMeth(C$, 'setBounds$O$S$I$I$I$I$Z$Z', function (layout, key, x, y, width, height, temporary, incCur) {
var layoutValues=C$.LAYOUTS.get$O(layout);
if (layoutValues != null ) {
var map=layoutValues[temporary ? 1 : 0];
var old=map.get$O(key);
if (old == null  || old[0] != x  || old[1] != y  || old[2] != width  || old[3] != height ) {
if (old == null  || incCur == false  ) {
map.put$TK$TV(key, Clazz.array(Integer.TYPE, -1, [x, y, width, height, x + width, y + height]));
return true;
} else {
var changed=false;
if (x != -2147471302) {
if (old[0] == -2147471302 || x < old[0] ) {
old[0]=x;
old[2]=old[4] - x;
changed=true;
}if (width != -2147471302) {
var x2=x + width;
if (old[4] == -2147471302 || x2 > old[4] ) {
old[4]=x2;
old[2]=x2 - old[0];
changed=true;
}}}if (y != -2147471302) {
if (old[1] == -2147471302 || y < old[1] ) {
old[1]=y;
old[3]=old[5] - y;
changed=true;
}if (height != -2147471302) {
var y2=y + height;
if (old[5] == -2147471302 || y2 > old[5] ) {
old[5]=y2;
old[3]=y2 - old[1];
changed=true;
}}}return changed;
}}return false;
}var bounds=Clazz.array(Integer.TYPE, -1, [x, y, width, height, x + width, y + height]);
var values_temp=Clazz.new_($I$(2).c$$I,[4]);
if (temporary) values_temp.put$TK$TV(key, bounds);
var values=Clazz.new_($I$(2).c$$I,[4]);
if (temporary == false ) values.put$TK$TV(key, bounds);
C$.LAYOUTS.put$TK$TV(layout, Clazz.array($I$(2), -1, [values, values_temp]));
return true;
}, 1);

Clazz.newMeth(C$, 'clearWeakReferencesNow$', function () {
C$.LAYOUTS.clear$();
}, 1);

Clazz.newMeth(C$, 'clearBounds$O$S', function (layout, key) {
var layoutValues=C$.LAYOUTS.get$O(layout);
if (layoutValues != null ) return layoutValues[0].remove$O(key) != null ;
return false;
}, 1);

Clazz.newMeth(C$, 'clearTemporaryBounds$O', function (layout) {
var layoutValues=C$.LAYOUTS.get$O(layout);
if (layoutValues != null ) layoutValues[1].clear$();
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-02-03 08:07:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
