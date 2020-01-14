(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlignedCodon");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pos1=0;
this.pos2=0;
this.pos3=0;
this.peptideCol=0;
this.product=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (i, j, k) {
C$.c$$I$I$I$S$I.apply(this, [i, j, k, null, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$S$I', function (i, j, k, prod, prodCol) {
C$.$init$.apply(this);
this.pos1=i;
this.pos2=j;
this.pos3=k;
this.product=prod;
this.peptideCol=prodCol;
}, 1);

Clazz.newMeth(C$, 'getBaseColumn$I', function (base) {
if (base < 1 || base > 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Integer.toString$I(base)]);
}return base == 1 ? this.pos1 : (base == 2 ? this.pos2 : this.pos3);
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o == null ) {
return true;
}if (!(Clazz.instanceOf(o, "jalview.datamodel.AlignedCodon"))) {
return false;
}var ac=o;
return (this.pos1 == ac.pos1 && this.pos2 == ac.pos2  && this.pos3 == ac.pos3 );
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(1));
sb.append$S("[").append$I(this.pos1).append$S(", ").append$I(this.pos2).append$S(", ").append$I(this.pos3).append$S("]");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
