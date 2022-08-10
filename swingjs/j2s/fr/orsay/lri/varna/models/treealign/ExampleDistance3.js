(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),p$1={},I$=[[0,['fr.orsay.lri.varna.models.treealign.ExampleDistance3','.SequenceAlignResult'],'java.util.ArrayList','Error']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExampleDistance3", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'fr.orsay.lri.varna.models.treealign.TreeAlignLabelDistanceSymmetric');
C$.$classes$=[['SequenceAlignResult',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['f$fr_orsay_lri_varna_models_treealign_RNANodeValue2$fr_orsay_lri_varna_models_treealign_RNANodeValue2','f$O$O'], function (v1, v2) {
if (v1 == null ) {
if (v2 == null ) {
return 0;
} else if (!v2.isSingleNode$()) {
return v2.getNodes$().size$();
} else {
return 2;
}} else if (!v1.isSingleNode$()) {
if (v2 == null ) {
return v1.getNodes$().size$();
} else if (!v2.isSingleNode$()) {
return this.alignSequenceNodes$fr_orsay_lri_varna_models_treealign_RNANodeValue2$fr_orsay_lri_varna_models_treealign_RNANodeValue2(v1, v2).getDistance$();
} else {
return 2 + v1.getNodes$().size$();
}} else {
if (v2 == null ) {
return 2;
} else if (!v2.isSingleNode$()) {
return 2 + v2.getNodes$().size$();
} else {
var l1=v1.getNode$().getLeftNucleotide$();
var r1=v1.getNode$().getRightNucleotide$();
var l2=v2.getNode$().getLeftNucleotide$();
var r2=v2.getNode$().getRightNucleotide$();
return (!l1.equals$O(l2) ? 0.5 : 0) + (!r1.equals$O(r2) ? 0.5 : 0);
}}});

Clazz.newMeth(C$, 'alignSequenceNodes$fr_orsay_lri_varna_models_treealign_RNANodeValue2$fr_orsay_lri_varna_models_treealign_RNANodeValue2', function (v1, v2) {
var A=v1.computeSequence$();
var B=v2.computeSequence$();
return this.alignSequences$CA$CA(A, B);
});

Clazz.newMeth(C$, 'alignSequences$CA$CA', function (A, B) {
var result=Clazz.new_($I$(1,1),[this, null]);
var la=A.length;
var lb=B.length;
var F=Clazz.array(Double.TYPE, [la + 1, lb + 1]);
var decisions=Clazz.array(Integer.TYPE, [la + 1, lb + 1]);
var d=1;
var substCost=1;
for (var i=0; i <= la; i++) F[i][0]=1.0 * i;

for (var j=0; j <= lb; j++) F[0][j]=1.0 * j;

for (var i=1; i <= la; i++) for (var j=1; j <= lb; j++) {
var min;
var decision;
var match=F[i - 1][j - 1] + (A[i - 1] == B[j - 1] ? 0 : 1.0);
var $delete=F[i - 1][j] + 1.0;
if (match < $delete ) {
decision=1;
min=match;
} else {
decision=2;
min=$delete;
}var insert=F[i][j - 1] + 1.0;
if (insert < min ) {
decision=3;
min=insert;
}F[i][j]=min;
decisions[i][j]=decision;
}

result.setDistance$D(F[la][lb]);
var alignment=p$1.computeAlignment$DAA$IAA$CA$CA.apply(this, [F, decisions, A, B]);
result.setAlignment$IAA(alignment);
return result;
});

Clazz.newMeth(C$, 'computeAlignment$DAA$IAA$CA$CA', function (F, decisions, A, B) {
var AlignmentA=Clazz.new_($I$(2,1).c$$I,[A.length + B.length]);
var AlignmentB=Clazz.new_($I$(2,1).c$$I,[A.length + B.length]);
var i=A.length;
var j=B.length;
while (i > 0 && j > 0 ){
var decision=decisions[i][j];
switch (decision) {
case 1:
AlignmentA.add$O(new Integer(i - 1));
AlignmentB.add$O(new Integer(j - 1));
i=i - 1;
j=j - 1;
break;
case 2:
AlignmentA.add$O(new Integer(i - 1));
AlignmentB.add$O(new Integer(-1));
i=i - 1;
break;
case 3:
AlignmentA.add$O(new Integer(-1));
AlignmentB.add$O(new Integer(j - 1));
j=j - 1;
break;
default:
throw (Clazz.new_(["Bug in ExampleDistance3: decision = " + decision],$I$(3,1).c$$S));
}
}
while (i > 0){
AlignmentA.add$O(new Integer(i - 1));
AlignmentB.add$O(new Integer(-1));
i=i - 1;
}
while (j > 0){
AlignmentA.add$O(new Integer(-1));
AlignmentB.add$O(new Integer(j - 1));
j=j - 1;
}
var l=AlignmentA.size$();
var result=Clazz.array(Integer.TYPE, [2, l]);
for (i=0; i < l; i++) {
result[0][i]=(AlignmentA.get$I(l - 1 - i )).valueOf();
result[1][i]=(AlignmentB.get$I(l - 1 - i )).valueOf();
}
return result;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExampleDistance3, "SequenceAlignResult", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['distance'],'O',['alignment','int[][]']]]

Clazz.newMeth(C$, 'getDistance$', function () {
return this.distance;
});

Clazz.newMeth(C$, 'setDistance$D', function (distance) {
this.distance=distance;
});

Clazz.newMeth(C$, 'getAlignment$', function () {
return this.alignment;
});

Clazz.newMeth(C$, 'setAlignment$IAA', function (alignment) {
this.alignment=alignment;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
