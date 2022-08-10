(function(){var P$=Clazz.newPackage("com.github.reinert.jjschema"),I$=[];
/*@*/var C$=Clazz.newClass(P$, "Attributes", null, null, 'java.lang.annotation.Annotation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
C$.prototype.annotationType = function() { return this.getClass$() };
C$.$getMembers$ = function() {var a=[];
a.push(['$ref','String',""]);
a.push(['id','String',""]);
a.push(['title','String',""]);
a.push(['description','String',""]);
a.push(['maximum','long',(Long.$neg(1))]);
a.push(['exclusiveMaximum','boolean',false]);
a.push(['minimum','int',-1]);
a.push(['exclusiveMinimum','boolean',false]);
a.push(['pattern','String',""]);
a.push(['required','boolean',false]);
a.push(['enums','String[]',Clazz.array(String, -1, [])]);
a.push(['minItems','int',0]);
a.push(['maxItems','long',(Long.$neg(1))]);
a.push(['uniqueItems','boolean',false]);
a.push(['multipleOf','int',0]);
a.push(['minLength','int',0]);
a.push(['maxLength','long',(Long.$neg(1))]);
return a}
Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:23 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
