(function(){var P$=Clazz.newPackage("sun.java2d"),I$=[[0,['sun.java2d.StateTrackable','.State'],'InternalError','sun.java2d.StateTracker']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StateTrackableDelegate", null, null, 'sun.java2d.StateTrackable');
C$.UNTRACKABLE_DELEGATE=null;
C$.IMMUTABLE_DELEGATE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.UNTRACKABLE_DELEGATE=Clazz.new_(C$.c$$sun_java2d_StateTrackable_State,[$I$(1).UNTRACKABLE]);
C$.IMMUTABLE_DELEGATE=Clazz.new_(C$.c$$sun_java2d_StateTrackable_State,[$I$(1).IMMUTABLE]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.theState=null;
this.theTracker=null;
this.numDynamicAgents=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createInstance$sun_java2d_StateTrackable_State', function (state) {
switch (state) {
case $I$(1).UNTRACKABLE:
return C$.UNTRACKABLE_DELEGATE;
case $I$(1).STABLE:
return Clazz.new_(C$.c$$sun_java2d_StateTrackable_State,[$I$(1).STABLE]);
case $I$(1).DYNAMIC:
return Clazz.new_(C$.c$$sun_java2d_StateTrackable_State,[$I$(1).DYNAMIC]);
case $I$(1).IMMUTABLE:
return C$.IMMUTABLE_DELEGATE;
default:
throw Clazz.new_($I$(2).c$$S,["unknown state"]);
}
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_StateTrackable_State', function (state) {
C$.$init$.apply(this);
this.theState=state;
}, 1);

Clazz.newMeth(C$, 'getState$', function () {
return this.theState;
});

Clazz.newMeth(C$, 'getStateTracker$', function () {
var st=this.theTracker;
if (st == null ) {
switch (this.theState) {
case $I$(1).IMMUTABLE:
st=$I$(3).ALWAYS_CURRENT;
break;
case $I$(1).STABLE:
st=((P$.StateTrackableDelegate$1||
(function(){var C$=Clazz.newClass(P$, "StateTrackableDelegate$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'sun.java2d.StateTracker', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isCurrent$', function () {
return (this.b$['sun.java2d.StateTrackableDelegate'].theTracker === this );
});
})()
), Clazz.new_(P$.StateTrackableDelegate$1.$init$, [this, null]));
break;
case $I$(1).DYNAMIC:
case $I$(1).UNTRACKABLE:
st=$I$(3).NEVER_CURRENT;
break;
}
this.theTracker=st;
}return st;
});

Clazz.newMeth(C$, 'setImmutable$', function () {
if (this.theState === $I$(1).UNTRACKABLE  || this.theState === $I$(1).DYNAMIC  ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["UNTRACKABLE or DYNAMIC objects cannot become IMMUTABLE"]);
}this.theState=$I$(1).IMMUTABLE;
this.theTracker=null;
});

Clazz.newMeth(C$, 'setUntrackable$', function () {
if (this.theState === $I$(1).IMMUTABLE ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["IMMUTABLE objects cannot become UNTRACKABLE"]);
}this.theState=$I$(1).UNTRACKABLE;
this.theTracker=null;
});

Clazz.newMeth(C$, 'addDynamicAgent$', function () {
if (this.theState === $I$(1).IMMUTABLE ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Cannot change state from IMMUTABLE"]);
}++this.numDynamicAgents;
if (this.theState === $I$(1).STABLE ) {
this.theState=$I$(1).DYNAMIC;
this.theTracker=null;
}});

Clazz.newMeth(C$, 'removeDynamicAgent$', function () {
if (--this.numDynamicAgents == 0 && this.theState === $I$(1).DYNAMIC  ) {
this.theState=$I$(1).STABLE;
this.theTracker=null;
}});

Clazz.newMeth(C$, 'markDirty$', function () {
this.theTracker=null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
