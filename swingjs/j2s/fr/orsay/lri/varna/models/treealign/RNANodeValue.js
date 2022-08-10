(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RNANodeValue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'fr.orsay.lri.varna.models.treealign.GraphvizDrawableNodeValue');
C$.$classes$=[['Origin',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.leftBasePosition=-1;
this.rightBasePosition=-1;
this.leftNucleotide="_";
this.rightNucleotide="_";
this.origin=null;
},1);

C$.$fields$=[['I',['leftBasePosition','rightBasePosition'],'S',['leftNucleotide','rightNucleotide'],'O',['origin','fr.orsay.lri.varna.models.treealign.RNANodeValue.Origin']]]

Clazz.newMeth(C$, 'getOrigin$', function () {
return this.origin;
});

Clazz.newMeth(C$, 'setOrigin$fr_orsay_lri_varna_models_treealign_RNANodeValue_Origin', function (comesFromAnHelix) {
this.origin=comesFromAnHelix;
});

Clazz.newMeth(C$, 'getLeftNucleotide$', function () {
return this.leftNucleotide;
});

Clazz.newMeth(C$, 'setLeftNucleotide$S', function (leftNucleotide) {
this.leftNucleotide=leftNucleotide;
});

Clazz.newMeth(C$, 'getRightNucleotide$', function () {
return this.rightNucleotide;
});

Clazz.newMeth(C$, 'setRightNucleotide$S', function (rightNucleotide) {
this.rightNucleotide=rightNucleotide;
});

Clazz.newMeth(C$, 'getLeftBasePosition$', function () {
return this.leftBasePosition;
});

Clazz.newMeth(C$, 'setLeftBasePosition$I', function (leftBasePosition) {
this.leftBasePosition=leftBasePosition;
});

Clazz.newMeth(C$, 'getRightBasePosition$', function () {
return this.rightBasePosition;
});

Clazz.newMeth(C$, 'setRightBasePosition$I', function (rightBasePosition) {
this.rightBasePosition=rightBasePosition;
});

Clazz.newMeth(C$, 'toGraphvizNodeName$', function () {
if (this.rightNucleotide.equals$O("_")) {
if (this.leftNucleotide.equals$O("_")) {
if (this.rightBasePosition == -1) {
if (this.leftBasePosition == -1) {
return C$.superclazz.prototype.toString.apply(this, []);
} else {
return Integer.toString$I(this.leftBasePosition);
}} else {
return "(" + this.leftBasePosition + "," + this.rightBasePosition + ")" ;
}} else {
return this.leftNucleotide;
}} else {
return "(" + this.leftNucleotide + "," + this.rightNucleotide + ")" ;
}});

Clazz.newMeth(C$, 'toString', function () {
if (this.rightBasePosition == -1) {
if (this.leftBasePosition == -1) {
return C$.superclazz.prototype.toString.apply(this, []);
} else {
return Integer.toString$I(this.leftBasePosition);
}} else {
return "(" + this.leftBasePosition + "," + this.rightBasePosition + ")" ;
}});
;
(function(){/*e*/var C$=Clazz.newClass(P$.RNANodeValue, "Origin", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "BASE_PAIR_FROM_HELIX", 0, []);
Clazz.newEnumConst($vals, C$.c$, "BASE_FROM_HELIX_STRAND5", 1, []);
Clazz.newEnumConst($vals, C$.c$, "BASE_FROM_HELIX_STRAND3", 2, []);
Clazz.newEnumConst($vals, C$.c$, "BASE_FROM_UNPAIRED_REGION", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
