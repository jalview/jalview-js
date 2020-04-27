(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'StringBuilder']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignedCodon");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pos1','pos2','pos3','peptideCol'],'S',['product']]]

Clazz.newMeth(C$, 'c$$I$I$I', function (i, j, k) {
C$.c$$I$I$I$S$I.apply(this, [i, j, k, null, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$S$I', function (i, j, k, prod, prodCol) {
;C$.$init$.apply(this);
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
var sb=Clazz.new_($I$(1,1));
sb.append$S("[").append$I(this.pos1).append$S(", ").append$I(this.pos2).append$S(", ").append$I(this.pos3).append$S("]");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
