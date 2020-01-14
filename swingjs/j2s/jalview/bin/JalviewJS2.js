(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'jalview.bin.Jalview','jalview.util.Platform','javax.swing.Timer','jalview.bin.JalviewJS2']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JalviewJS2");
C$.focusTime=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
{

J2S.thisApplet.__Info.args = ["open","examples/uniref50.fa","features", "examples/exampleFeatures.txt"];
};
C$.focusTime=0;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
$I$(1).main$SA(args);
}, 1);

Clazz.newMeth(C$, 'showFocusTimer$', function () {
if ($I$(2).isJS$()) {
var t=Clazz.new_($I$(3).c$$I$java_awt_event_ActionListener,[100, ((P$.JalviewJS2$1||
(function(){var C$=Clazz.newClass(P$, "JalviewJS2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var s=document.activeElement.id ||null;
s += " " + (++$I$(4).focusTime);

document.title = s;
});
})()
), Clazz.new_(P$.JalviewJS2$1.$init$, [this, null]))]);
t.setRepeats$Z(true);
t.start$();
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
