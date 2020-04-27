(function(){var P$=Clazz.newPackage("mc_view"),I$=[[0,'java.awt.Color','jalview.schemes.ResidueProperties']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Atom");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.insCode=" ";
this.resNumIns=null;
this.color=$I$(1).lightGray;
this.alignmentMapping=-1;
this.occupancy=0;
this.tfactor=0;
this.isSelected=false;
},1);

C$.$fields$=[['Z',['isSelected'],'C',['insCode'],'F',['x','y','z','occupancy','tfactor'],'I',['number','resNumber','type','alignmentMapping','atomIndex'],'S',['name','resName','resNumIns','chain'],'O',['color','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$S', function (str) {
;C$.$init$.apply(this);
this.atomIndex=Integer.parseInt$S(str.substring$I$I(6, 11).trim$());
this.name=str.substring$I$I(12, 15).trim$();
this.resName=str.substring$I$I(17, 20);
this.resName=$I$(2).getCanonicalAminoAcid$S(this.resName);
this.chain=str.substring$I$I(21, 22);
this.resNumber=Integer.parseInt$S(str.substring$I$I(22, 26).trim$());
this.resNumIns=str.substring$I$I(22, 27).trim$();
this.insCode=str.substring$I$I(26, 27).charAt$I(0);
this.x=( new Float(str.substring$I$I(30, 38).trim$()).floatValue$());
this.y=( new Float(str.substring$I$I(38, 46).trim$()).floatValue$());
this.z=( new Float(str.substring$I$I(47, 55).trim$()).floatValue$());
var tm=str.substring$I$I(54, 60).trim$();
if (tm.length$() > 0) {
this.occupancy=( new Float(tm)).floatValue$();
} else {
this.occupancy=1.0;
}tm=str.substring$I$I(60, 66).trim$();
if (tm.length$() > 0) {
this.tfactor=( new Float(tm).floatValue$());
} else {
this.tfactor=1.0;
}}, 1);

Clazz.newMeth(C$, 'equals$O', function (that) {
if (this === that  || that == null  ) {
return true;
}if (Clazz.instanceOf(that, "mc_view.Atom")) {
var other=that;
return other.resName.equals$O(this.resName) && other.resNumber == this.resNumber  && other.resNumIns.equals$O(this.resNumIns)  && other.chain.equals$O(this.chain) ;
}return false;
});

Clazz.newMeth(C$, 'c$$F$F$F', function (x, y, z) {
;C$.$init$.apply(this);
this.x=x;
this.y=y;
this.z=z;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
