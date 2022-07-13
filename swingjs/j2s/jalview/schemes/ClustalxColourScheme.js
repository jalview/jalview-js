(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.awt.Color','jalview.schemes.Consensus','jalview.schemes.ResidueProperties',['jalview.schemes.ClustalxColourScheme','.ConsensusColour'],['jalview.schemes.ClustalxColourScheme','.ClustalColour'],'jalview.util.Comparison','jalview.schemes.JalviewColourScheme']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ClustalxColourScheme", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.schemes.ResidueColourScheme');
C$.$classes$=[['ClustalColour',24],['ConsensusColour',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.conses=Clazz.array($I$(2), [32]);
this.includeGaps=true;
},1);

C$.$fields$=[['Z',['includeGaps'],'I',['size'],'O',['cons2','int[][]','colours','jalview.schemes.ClustalxColourScheme.ConsensusColour[]','+residueColour','conses','jalview.schemes.Consensus[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AnnotatedCollectionI$java_util_Map',  function (alignment, hiddenReps) {
Clazz.super_(C$, this);
this.alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map(alignment, hiddenReps);
}, 1);

Clazz.newMeth(C$, 'alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map',  function (alignment, hiddenReps) {
var maxWidth=alignment.getWidth$();
var seqs=alignment.getSequences$java_util_Map(hiddenReps);
this.cons2=Clazz.array(Integer.TYPE, [maxWidth, 24]);
this.includeGaps=this.isIncludeGaps$();
var res=0;
for (var sq, $sq = seqs.iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
var end_j=sq.getLength$() - 1;
var length=sq.getLength$();
for (var i=0; i <= end_j; i++) {
if (length - 1 < i) {
res=23;
} else {
res=$I$(3).aaIndex[(sq.getCharAt$I(i)).$c()];
}++this.cons2[i][res];
}
}
this.size=seqs.size$();
this.makeColours$();
});

Clazz.newMeth(C$, 'makeColours$',  function () {
this.conses[0]=Clazz.new_($I$(2,1).c$$S$D,["WLVIMAFCYHP", 60]);
this.conses[1]=Clazz.new_($I$(2,1).c$$S$D,["WLVIMAFCYHP", 80]);
this.conses[2]=Clazz.new_($I$(2,1).c$$S$D,["ED", 50]);
this.conses[3]=Clazz.new_($I$(2,1).c$$S$D,["KR", 60]);
this.conses[4]=Clazz.new_($I$(2,1).c$$S$D,["G", 50]);
this.conses[5]=Clazz.new_($I$(2,1).c$$S$D,["N", 50]);
this.conses[6]=Clazz.new_($I$(2,1).c$$S$D,["QE", 50]);
this.conses[7]=Clazz.new_($I$(2,1).c$$S$D,["P", 50]);
this.conses[8]=Clazz.new_($I$(2,1).c$$S$D,["TS", 50]);
this.conses[26]=Clazz.new_($I$(2,1).c$$S$D,["A", 85]);
this.conses[27]=Clazz.new_($I$(2,1).c$$S$D,["C", 85]);
this.conses[10]=Clazz.new_($I$(2,1).c$$S$D,["E", 85]);
this.conses[11]=Clazz.new_($I$(2,1).c$$S$D,["F", 85]);
this.conses[12]=Clazz.new_($I$(2,1).c$$S$D,["G", 85]);
this.conses[13]=Clazz.new_($I$(2,1).c$$S$D,["H", 85]);
this.conses[14]=Clazz.new_($I$(2,1).c$$S$D,["I", 85]);
this.conses[15]=Clazz.new_($I$(2,1).c$$S$D,["L", 85]);
this.conses[16]=Clazz.new_($I$(2,1).c$$S$D,["M", 85]);
this.conses[17]=Clazz.new_($I$(2,1).c$$S$D,["N", 85]);
this.conses[18]=Clazz.new_($I$(2,1).c$$S$D,["P", 85]);
this.conses[19]=Clazz.new_($I$(2,1).c$$S$D,["Q", 85]);
this.conses[20]=Clazz.new_($I$(2,1).c$$S$D,["R", 85]);
this.conses[21]=Clazz.new_($I$(2,1).c$$S$D,["S", 85]);
this.conses[22]=Clazz.new_($I$(2,1).c$$S$D,["T", 85]);
this.conses[23]=Clazz.new_($I$(2,1).c$$S$D,["V", 85]);
this.conses[24]=Clazz.new_($I$(2,1).c$$S$D,["W", 85]);
this.conses[25]=Clazz.new_($I$(2,1).c$$S$D,["Y", 85]);
this.conses[28]=Clazz.new_($I$(2,1).c$$S$D,["K", 85]);
this.conses[29]=Clazz.new_($I$(2,1).c$$S$D,["D", 85]);
this.conses[30]=Clazz.new_($I$(2,1).c$$S$D,["G", 0]);
this.conses[31]=Clazz.new_($I$(2,1).c$$S$D,["P", 0]);
this.colours=Clazz.array($I$(4), [11]);
var tmp8=Clazz.array($I$(2), [1]);
tmp8[0]=this.conses[30];
this.colours[7]=Clazz.new_([this, null, $I$(5).ORANGE, tmp8],$I$(4,1).c$$jalview_schemes_ClustalxColourScheme_ClustalColour$jalview_schemes_ConsensusA);
var tmp9=Clazz.array($I$(2), [1]);
tmp9[0]=this.conses[31];
this.colours[8]=Clazz.new_([this, null, $I$(5).YELLOW, tmp9],$I$(4,1).c$$jalview_schemes_ClustalxColourScheme_ClustalColour$jalview_schemes_ConsensusA);
var tmp10=Clazz.array($I$(2), [1]);
tmp10[0]=this.conses[27];
this.colours[9]=Clazz.new_([this, null, $I$(5).PINK, tmp8],$I$(4,1).c$$jalview_schemes_ClustalxColourScheme_ClustalColour$jalview_schemes_ConsensusA);
var tmp1=Clazz.array($I$(2), [14]);
tmp1[0]=this.conses[0];
tmp1[1]=this.conses[1];
tmp1[2]=this.conses[26];
tmp1[3]=this.conses[27];
tmp1[4]=this.conses[11];
tmp1[5]=this.conses[13];
tmp1[6]=this.conses[14];
tmp1[7]=this.conses[15];
tmp1[8]=this.conses[16];
tmp1[9]=this.conses[23];
tmp1[10]=this.conses[24];
tmp1[11]=this.conses[25];
tmp1[12]=this.conses[18];
tmp1[13]=this.conses[19];
this.colours[0]=Clazz.new_([this, null, $I$(5).BLUE, tmp1],$I$(4,1).c$$jalview_schemes_ClustalxColourScheme_ClustalColour$jalview_schemes_ConsensusA);
this.colours[10]=Clazz.new_([this, null, $I$(5).CYAN, tmp1],$I$(4,1).c$$jalview_schemes_ClustalxColourScheme_ClustalColour$jalview_schemes_ConsensusA);
var tmp2=Clazz.array($I$(2), [5]);
tmp2[0]=this.conses[8];
tmp2[1]=this.conses[21];
tmp2[2]=this.conses[22];
tmp2[3]=this.conses[0];
tmp2[4]=this.conses[1];
this.colours[1]=Clazz.new_([this, null, $I$(5).GREEN, tmp2],$I$(4,1).c$$jalview_schemes_ClustalxColourScheme_ClustalColour$jalview_schemes_ConsensusA);
var tmp3=Clazz.array($I$(2), [3]);
tmp3[0]=this.conses[17];
tmp3[1]=this.conses[29];
tmp3[2]=this.conses[5];
this.colours[2]=Clazz.new_([this, null, $I$(5).GREEN, tmp3],$I$(4,1).c$$jalview_schemes_ClustalxColourScheme_ClustalColour$jalview_schemes_ConsensusA);
var tmp4=Clazz.array($I$(2), [6]);
tmp4[0]=this.conses[6];
tmp4[1]=this.conses[19];
tmp4[2]=this.conses[22];
tmp4[3]=this.conses[3];
tmp4[4]=this.conses[28];
tmp4[5]=this.conses[20];
this.colours[3]=Clazz.new_([this, null, $I$(5).GREEN, tmp4],$I$(4,1).c$$jalview_schemes_ClustalxColourScheme_ClustalColour$jalview_schemes_ConsensusA);
var tmp5=Clazz.array($I$(2), [4]);
tmp5[0]=this.conses[3];
tmp5[1]=this.conses[28];
tmp5[2]=this.conses[20];
tmp5[3]=this.conses[19];
this.colours[4]=Clazz.new_([this, null, $I$(5).RED, tmp5],$I$(4,1).c$$jalview_schemes_ClustalxColourScheme_ClustalColour$jalview_schemes_ConsensusA);
var tmp6=Clazz.array($I$(2), [6]);
tmp6[0]=this.conses[3];
tmp6[1]=this.conses[29];
tmp6[2]=this.conses[10];
tmp6[3]=this.conses[6];
tmp6[4]=this.conses[19];
tmp6[5]=this.conses[2];
this.colours[5]=Clazz.new_([this, null, $I$(5).MAGENTA, tmp6],$I$(4,1).c$$jalview_schemes_ClustalxColourScheme_ClustalColour$jalview_schemes_ConsensusA);
var tmp7=Clazz.array($I$(2), [5]);
tmp7[0]=this.conses[3];
tmp7[1]=this.conses[29];
tmp7[2]=this.conses[10];
tmp7[3]=this.conses[17];
tmp7[4]=this.conses[2];
this.colours[6]=Clazz.new_([this, null, $I$(5).MAGENTA, tmp7],$I$(4,1).c$$jalview_schemes_ClustalxColourScheme_ClustalColour$jalview_schemes_ConsensusA);
this.residueColour=Clazz.array($I$(4), [20]);
this.residueColour[0]=this.colours[0];
this.residueColour[1]=this.colours[4];
this.residueColour[2]=this.colours[2];
this.residueColour[3]=this.colours[6];
this.residueColour[4]=this.colours[0];
this.residueColour[5]=this.colours[3];
this.residueColour[6]=this.colours[5];
this.residueColour[7]=this.colours[7];
this.residueColour[8]=this.colours[10];
this.residueColour[9]=this.colours[0];
this.residueColour[10]=this.colours[0];
this.residueColour[11]=this.colours[4];
this.residueColour[12]=this.colours[0];
this.residueColour[13]=this.colours[0];
this.residueColour[14]=this.colours[8];
this.residueColour[15]=this.colours[1];
this.residueColour[16]=this.colours[1];
this.residueColour[17]=this.colours[0];
this.residueColour[18]=this.colours[10];
this.residueColour[19]=this.colours[0];
});

Clazz.newMeth(C$, 'findColour$C',  function (c) {
return $I$(1).pink;
});

Clazz.newMeth(C$, 'findColour$C$I$jalview_datamodel_SequenceI',  function (c, j, seq) {
if (this.cons2.length <= j || $I$(6).isGap$C(c) ) {
return $I$(1).white;
}var i=$I$(3).aaIndex[c.$c()];
var colour=$I$(1).white;
if (i > 19) {
return colour;
}for (var k=0; k < this.residueColour[i].cons.length; k++) {
if (this.residueColour[i].cons[k].isConserved$IAA$I$I$Z(this.cons2, j, this.size, this.includeGaps)) {
colour=this.residueColour[i].c;
}}
if (i == 4) {
if (this.conses[27].isConserved$IAA$I$I$Z(this.cons2, j, this.size, this.includeGaps)) {
colour=$I$(5).PINK.colour;
}}return colour;
});

Clazz.newMeth(C$, 'isIncludeGaps$',  function () {
return this.includeGaps;
});

Clazz.newMeth(C$, 'setIncludeGaps$Z',  function (includeGaps) {
this.includeGaps=includeGaps;
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI',  function (view, sg) {
var css=Clazz.new_(C$.c$$jalview_datamodel_AnnotatedCollectionI$java_util_Map,[sg, view == null  ? null : view.getHiddenRepSequences$()]);
css.includeGaps=this.includeGaps;
return css;
});

Clazz.newMeth(C$, 'isPeptideSpecific$',  function () {
return true;
});

Clazz.newMeth(C$, 'getSchemeName$',  function () {
return $I$(7).Clustal.toString();
});

Clazz.newMeth(C$, 'isSimple$',  function () {
return false;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.ClustalxColourScheme, "ClustalColour", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['colour','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$F$F$F',  function (r, g, b) {
;C$.$init$.apply(this);
this.colour=Clazz.new_($I$(1,1).c$$F$F$F,[r, g, b]);
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$F$F$F, "RED", 0, [0.9, 0.2, 0.1]);
Clazz.newEnumConst($vals, C$.c$$F$F$F, "BLUE", 1, [0.5, 0.7, 0.9]);
Clazz.newEnumConst($vals, C$.c$$F$F$F, "GREEN", 2, [0.1, 0.8, 0.1]);
Clazz.newEnumConst($vals, C$.c$$F$F$F, "ORANGE", 3, [0.9, 0.6, 0.3]);
Clazz.newEnumConst($vals, C$.c$$F$F$F, "CYAN", 4, [0.1, 0.7, 0.7]);
Clazz.newEnumConst($vals, C$.c$$F$F$F, "PINK", 5, [0.9, 0.5, 0.5]);
Clazz.newEnumConst($vals, C$.c$$F$F$F, "MAGENTA", 6, [0.8, 0.3, 0.8]);
Clazz.newEnumConst($vals, C$.c$$F$F$F, "YELLOW", 7, [0.8, 0.8, 0.0]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ClustalxColourScheme, "ConsensusColour", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cons','jalview.schemes.Consensus[]','c','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$jalview_schemes_ClustalxColourScheme_ClustalColour$jalview_schemes_ConsensusA',  function (col, conses) {
;C$.$init$.apply(this);
this.cons=conses;
this.c=col.colour;
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
