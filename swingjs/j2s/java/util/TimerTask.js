(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "TimerTask", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lock= Clazz.new_();
this.state=0;
this.period=0;
},1);

C$.$fields$=[['I',['state'],'J',['nextExecutionTime','period'],'O',['lock','java.lang.Object']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:41 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
