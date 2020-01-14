(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "TimerTask", null, null, 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lock=null;
this.state=0;
this.nextExecutionTime=0;
this.period=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.lock= Clazz.new_();
this.state=0;
this.period=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'cancel$', function () {
{
var result=(this.state == 1);
this.state=3;
return result;
}});

Clazz.newMeth(C$, 'scheduledExecutionTime$', function () {
{
return (this.period < 0 ? this.nextExecutionTime + this.period : this.nextExecutionTime - this.period);
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
