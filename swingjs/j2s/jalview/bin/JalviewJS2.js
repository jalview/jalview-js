(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'jalview.bin.Jalview','jalview.util.Platform','javax.swing.Timer','jalview.bin.JalviewJS2']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewJS2");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['focusTime']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(1).main$SA(args);
}, 1);

Clazz.newMeth(C$, 'showFocusTimer$',  function () {
if ($I$(2).isJS$()) {
var t=Clazz.new_([100, ((P$.JalviewJS2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewJS2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var s=document.activeElement.id ||null;
s+=" " + (++$I$(4).focusTime);

document.title = s;
});
})()
), Clazz.new_(P$.JalviewJS2$1.$init$,[this, null]))],$I$(3,1).c$$I$java_awt_event_ActionListener);
t.setRepeats$Z(true);
t.start$();
}}, 1);

C$.$static$=function(){C$.$static$=0;
{

J2S.thisApplet.__Info.args = ["open","examples/uniref50.fa","features", "examples/exampleFeatures.txt"];
};
C$.focusTime=0;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
