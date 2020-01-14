(function(){var P$=Clazz.newPackage("sun.java2d"),I$=[];
var C$=Clazz.newInterface(P$, "StateTracker");
C$.ALWAYS_CURRENT=null;
C$.NEVER_CURRENT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.ALWAYS_CURRENT=((P$.StateTracker$1||
(function(){var C$=Clazz.newClass(P$, "StateTracker$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'sun.java2d.StateTracker', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isCurrent$', function () {
return true;
});
})()
), Clazz.new_(P$.StateTracker$1.$init$, [this, null]));
C$.NEVER_CURRENT=((P$.StateTracker$2||
(function(){var C$=Clazz.newClass(P$, "StateTracker$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'sun.java2d.StateTracker', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isCurrent$', function () {
return false;
});
})()
), Clazz.new_(P$.StateTracker$2.$init$, [this, null]));
}
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
