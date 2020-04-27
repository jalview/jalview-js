(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IntRangeComparator", null, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['forwards']]
,['O',['ASCENDING','java.util.Comparator','+DESCENDING']]]

Clazz.newMeth(C$, 'c$$Z', function (forward) {
;C$.$init$.apply(this);
this.forwards=forward;
}, 1);

Clazz.newMeth(C$, ['compare$IA$IA','compare$O$O'], function (o1, o2) {
var compared=Integer.compare$I$I(o1[0], o2[0]);
return this.forwards ? compared : -compared;
});

C$.$static$=function(){C$.$static$=0;
C$.ASCENDING=Clazz.new_(C$.c$$Z,[true]);
C$.DESCENDING=Clazz.new_(C$.c$$Z,[false]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
