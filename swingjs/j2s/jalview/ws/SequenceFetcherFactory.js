(function(){var P$=Clazz.newPackage("jalview.ws"),I$=[[0,'jalview.ws.SequenceFetcher']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceFetcherFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['instance','jalview.ws.SequenceFetcher']]]

Clazz.newMeth(C$, 'getSequenceFetcher$', function () {
return C$.instance == null  ? Clazz.new_($I$(1,1)) : C$.instance;
}, 1);

Clazz.newMeth(C$, 'setSequenceFetcher$jalview_ws_SequenceFetcher', function (sf) {
C$.instance=sf;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
