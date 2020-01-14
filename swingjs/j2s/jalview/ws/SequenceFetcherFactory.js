(function(){var P$=Clazz.newPackage("jalview.ws"),I$=[[0,'jalview.ws.SequenceFetcher']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceFetcherFactory");
C$.instance=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSequenceFetcher$', function () {
return C$.instance == null  ? Clazz.new_($I$(1)) : C$.instance;
}, 1);

Clazz.newMeth(C$, 'setSequenceFetcher$jalview_ws_SequenceFetcher', function (sf) {
C$.instance=sf;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
