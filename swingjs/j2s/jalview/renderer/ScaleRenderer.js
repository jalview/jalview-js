(function(){var P$=Clazz.newPackage("jalview.renderer"),I$=[[0,'java.util.ArrayList',['jalview.renderer.ScaleRenderer','.ScaleMark']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScaleRenderer", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ScaleMark',17]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'calculateMarks$jalview_api_AlignViewportI$I$I',  function (av, startx, endx) {
var scalestartx=((startx/10|0)) * 10;
var refSeq=av.getAlignment$().getSeqrep$();
var refSp=0;
var refStartI=0;
var refEndI=-1;
var hc=av.getAlignment$().getHiddenColumns$();
if (refSeq != null ) {
var it=hc.iterator$();
var index=refSeq.firstResidueOutsideIterator$java_util_Iterator(it);
refSp=hc.absoluteToVisibleColumn$I(index);
refStartI=refSeq.findIndex$I(refSeq.getStart$()) - 1;
var seqlength=refSeq.getLength$();
var pastEndPos=refSeq.findPosition$I(seqlength + 1);
refEndI=refSeq.findIndex$I(pastEndPos - 1) - 1;
scalestartx=refSp + (((scalestartx - refSp)/10|0)) * 10;
}if (refSeq == null  && scalestartx % 10 == 0 ) {
scalestartx+=5;
}var marks=Clazz.new_($I$(1,1));
var string;
var refN;
var iadj;
for (var i=scalestartx; i <= endx; i+=5) {
if (((i - refSp) % 10) == 0) {
if (refSeq == null ) {
iadj=hc.visibleToAbsoluteColumn$I(i - 1) + 1;
string=String.valueOf$I(iadj);
} else {
iadj=hc.visibleToAbsoluteColumn$I(i - 1);
refN=refSeq.findPosition$I(iadj);
if (iadj < refStartI) {
string=String.valueOf$I(iadj - refStartI);
} else if (iadj > refEndI) {
string="+" + String.valueOf$I(iadj - refEndI);
} else {
string=String.valueOf$I(refN) + refSeq.getCharAt$I(iadj);
}}marks.add$O(Clazz.new_($I$(2,1).c$$Z$I$S,[this, null, true, i - startx - 1 , string]));
} else {
marks.add$O(Clazz.new_($I$(2,1).c$$Z$I$S,[this, null, false, i - startx - 1 , null]));
}}
return marks;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ScaleRenderer, "ScaleMark", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['major'],'I',['column'],'S',['text']]]

Clazz.newMeth(C$, 'c$$Z$I$S',  function (isMajor, col, txt) {
;C$.$init$.apply(this);
this.major=isMajor;
this.column=col;
this.text=txt;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
