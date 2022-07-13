(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.naView"),I$=[[0,'java.util.ArrayList','java.util.Hashtable','fr.orsay.lri.varna.models.naView.Connection']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Loop");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.connections=Clazz.new_($I$(1,1));
this._connections=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['mark'],'D',['x','y','radius'],'I',['nconnection','number','depth'],'O',['connections','java.util.ArrayList','_connections','java.util.Hashtable']]]

Clazz.newMeth(C$, 'getNconnection$', function () {
return this.nconnection;
});

Clazz.newMeth(C$, 'setNconnection$I', function (nconnection) {
this.nconnection=nconnection;
});

Clazz.newMeth(C$, 'setConnection$I$fr_orsay_lri_varna_models_naView_Connection', function (i, c) {
var n= new Integer(i);
if (c != null ) this._connections.put$O$O(n, c);
 else {
if (!this._connections.containsKey$O(n)) {
this._connections.put$O$O(n, Clazz.new_($I$(3,1)));
}this._connections.get$O(new Integer(i)).setNull$Z(true);
}});

Clazz.newMeth(C$, 'getConnection$I', function (i) {
var n= new Integer(i);
if (!this._connections.containsKey$O(n)) {
this._connections.put$O$O(n, Clazz.new_($I$(3,1)));
}var c=this._connections.get$O(n);
if (c.isNull$()) return null;
 else return c;
});

Clazz.newMeth(C$, 'addConnection$I$fr_orsay_lri_varna_models_naView_Connection', function (i, c) {
this._connections.put$O$O(new Integer(this._connections.size$()), c);
});

Clazz.newMeth(C$, 'getNumber$', function () {
return this.number;
});

Clazz.newMeth(C$, 'setNumber$I', function (number) {
this.number=number;
});

Clazz.newMeth(C$, 'getDepth$', function () {
return this.depth;
});

Clazz.newMeth(C$, 'setDepth$I', function (depth) {
this.depth=depth;
});

Clazz.newMeth(C$, 'isMark$', function () {
return this.mark;
});

Clazz.newMeth(C$, 'setMark$Z', function (mark) {
this.mark=mark;
});

Clazz.newMeth(C$, 'getX$', function () {
return this.x;
});

Clazz.newMeth(C$, 'setX$D', function (x) {
this.x=x;
});

Clazz.newMeth(C$, 'getY$', function () {
return this.y;
});

Clazz.newMeth(C$, 'setY$D', function (y) {
this.y=y;
});

Clazz.newMeth(C$, 'getRadius$', function () {
return this.radius;
});

Clazz.newMeth(C$, 'setRadius$D', function (radius) {
this.radius=radius;
});

Clazz.newMeth(C$, 'toString', function () {
var result="Loop:";
result += " nconnection " + this.nconnection;
result += " depth " + this.depth;
return result;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
