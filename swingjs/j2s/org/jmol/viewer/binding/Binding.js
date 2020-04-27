(function(){var P$=Clazz.newPackage("org.jmol.viewer.binding"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.SB','Boolean','org.jmol.util.Logger','org.jmol.util.Escape','javajs.util.Lst','javajs.util.AU','java.util.Arrays','javajs.util.PT','org.jmol.api.Interface']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Binding");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bindings=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['S',['name'],'O',['bindings','java.util.Map']]]

Clazz.newMeth(C$, 'getMouseAction$I$I$I', function (clickCount, modifiers, mode) {
if (clickCount > 2) clickCount=2;
switch (clickCount) {
case 0:
break;
case 1:
clickCount=256;
break;
default:
clickCount=512;
}
switch (mode) {
case 4:
mode=4096;
break;
case 1:
mode=8192;
break;
case 5:
mode=16384;
break;
case 2:
mode=32768;
break;
case 3:
mode=32;
}
return (modifiers & 63) | clickCount | mode ;
}, 1);

Clazz.newMeth(C$, 'getMouseActionStr$S', function (desc) {
if (desc == null ) return 0;
var mouseAction=0;
desc=desc.toUpperCase$();
if (desc.indexOf$S("MIDDLE") >= 0) mouseAction=8;
 else if (desc.indexOf$S("RIGHT") >= 0) mouseAction=4;
 else if (desc.indexOf$S("WHEEL") >= 0) mouseAction=32;
 else mouseAction=16;
if (desc.indexOf$S("DOWN") >= 0) mouseAction|=4096;
 else if (desc.indexOf$S("DRAG") >= 0) mouseAction|=8192;
 else if (desc.indexOf$S("UP") >= 0) mouseAction|=16384;
 else if (mouseAction != 32) mouseAction|=32768;
if (mouseAction != 32 && desc.indexOf$S("DOUBLE") >= 0 ) mouseAction|=512;
 else if (mouseAction > 0) mouseAction|=256;
if (mouseAction != (288) && desc.indexOf$S("ALT") >= 0 ) mouseAction|=8;
if (desc.indexOf$S("CTRL") >= 0) mouseAction|=2;
if (desc.indexOf$S("SHIFT") >= 0) mouseAction|=1;
return mouseAction;
}, 1);

Clazz.newMeth(C$, 'getButtonMods$I', function (mouseAction) {
return mouseAction & 63;
}, 1);

Clazz.newMeth(C$, 'getClickCount$I', function (mouseAction) {
return (mouseAction & 768) >> 8;
}, 1);

Clazz.newMeth(C$, 'getMouseActionName$I$Z', function (mouseAction, addSortCode) {
var sb=Clazz.new_($I$(2,1));
if (mouseAction == 0) return "";
var isMiddle=(C$.includes$I$I(mouseAction, 8) && !C$.includes$I$I(mouseAction, 16) && !C$.includes$I$I(mouseAction, 4)  );
var code="      ".toCharArray$();
if (C$.includes$I$I(mouseAction, 2)) {
sb.append$S("CTRL+");
code[5]="C";
}if (!isMiddle && C$.includes$I$I(mouseAction, 8) ) {
sb.append$S("ALT+");
code[4]="A";
}if (C$.includes$I$I(mouseAction, 1)) {
sb.append$S("SHIFT+");
code[3]="S";
}if (C$.includes$I$I(mouseAction, 16)) {
code[2]="L";
sb.append$S("LEFT");
} else if (C$.includes$I$I(mouseAction, 4)) {
code[2]="R";
sb.append$S("RIGHT");
} else if (isMiddle) {
code[2]="M";
sb.append$S("MIDDLE");
} else if (C$.includes$I$I(mouseAction, 32)) {
code[2]="W";
sb.append$S("WHEEL");
}if (C$.includes$I$I(mouseAction, 512)) {
sb.append$S("+double");
code[1]="2";
}if (C$.includes$I$I(mouseAction, 4096)) {
sb.append$S("+down");
code[0]="1";
} else if (C$.includes$I$I(mouseAction, 8192)) {
sb.append$S("+drag");
code[0]="2";
} else if (C$.includes$I$I(mouseAction, 16384)) {
sb.append$S("+up");
code[0]="3";
} else if (C$.includes$I$I(mouseAction, 32768)) {
sb.append$S("+click");
code[0]="4";
}return (addSortCode ?  String.instantialize(code) + ":" + sb.toString()  : sb.toString());
}, 1);

Clazz.newMeth(C$, 'getBindings$', function () {
return this.bindings;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'bindAction$I$I', function (mouseAction, jmolAction) {
p$1.addBinding$S$O.apply(this, [mouseAction + "\t" + jmolAction , Clazz.array(Integer.TYPE, -1, [mouseAction, jmolAction])]);
});

Clazz.newMeth(C$, 'bindName$I$S', function (mouseAction, name) {
p$1.addBinding$S$O.apply(this, [mouseAction + "\t", $I$(3).TRUE]);
p$1.addBinding$S$O.apply(this, [mouseAction + "\t" + name , Clazz.array(String, -1, [C$.getMouseActionName$I$Z(mouseAction, false), name])]);
});

Clazz.newMeth(C$, 'unbindAction$I$I', function (mouseAction, jmolAction) {
if (mouseAction == 0) this.unbindJmolAction$I(jmolAction);
 else p$1.removeBinding$java_util_Iterator$S.apply(this, [null, mouseAction + "\t" + jmolAction ]);
});

Clazz.newMeth(C$, 'unbindName$I$S', function (mouseAction, name) {
if (name == null ) this.unbindMouseAction$I(mouseAction);
 else p$1.removeBinding$java_util_Iterator$S.apply(this, [null, mouseAction + "\t" + name ]);
});

Clazz.newMeth(C$, 'unbindJmolAction$I', function (jmolAction) {
var e=this.bindings.keySet$().iterator$();
var skey="\t" + jmolAction;
while (e.hasNext$()){
var key=e.next$();
if (key.endsWith$S(skey)) p$1.removeBinding$java_util_Iterator$S.apply(this, [e, key]);
}
});

Clazz.newMeth(C$, 'addBinding$S$O', function (key, value) {
if ($I$(4).debugging) (function(a,f){return f.apply(null,a)})(["adding binding " + key + "\t==\t" + $I$(5).e$O(value) ],$I$(4).debug$S);
this.bindings.put$O$O(key, value);
}, p$1);

Clazz.newMeth(C$, 'removeBinding$java_util_Iterator$S', function (e, key) {
if ($I$(4).debugging) $I$(4).debug$S("removing binding " + key);
if (e == null ) this.bindings.remove$O(key);
 else e.remove$();
}, p$1);

Clazz.newMeth(C$, 'unbindUserAction$S', function (script) {
var e=this.bindings.keySet$().iterator$();
var skey="\t" + script;
while (e.hasNext$()){
var key=e.next$();
if (key.endsWith$S(skey)) p$1.removeBinding$java_util_Iterator$S.apply(this, [e, key]);
}
});

Clazz.newMeth(C$, 'unbindMouseAction$I', function (mouseAction) {
var e=this.bindings.keySet$().iterator$();
var skey=mouseAction + "\t";
while (e.hasNext$()){
var key=e.next$();
if (key.startsWith$S(skey)) p$1.removeBinding$java_util_Iterator$S.apply(this, [e, key]);
}
});

Clazz.newMeth(C$, 'isBound$I$I', function (mouseAction, jmolAction) {
return this.bindings.containsKey$O(mouseAction + "\t" + jmolAction );
});

Clazz.newMeth(C$, 'isUserAction$I', function (mouseAction) {
return this.bindings.containsKey$O(mouseAction + "\t");
});

Clazz.newMeth(C$, 'getBindingInfo$SA$SA$S', function (actionInfo, actionNames, qualifiers) {
var sb=Clazz.new_($I$(2,1));
var qlow=(qualifiers == null  || qualifiers.equalsIgnoreCase$S("all")  ? null : qualifiers.toLowerCase$());
var names=Clazz.array($I$(6), [actionInfo.length]);
var user=Clazz.new_($I$(6,1));
for (var obj, $obj = this.bindings.values$().iterator$(); $obj.hasNext$()&&((obj=($obj.next$())),1);) {
if (Clazz.instanceOf(obj, "java.lang.Boolean")) {
} else if ($I$(7).isAS$O(obj)) {
var action=(obj)[0];
var script=(obj)[1];
if (qlow == null  || qlow.indexOf$S("user") >= 0  || action.indexOf$S(qlow) >= 0  || script.indexOf$S(qlow) >= 0 ) user.addLast$O(obj);
} else {
var info=obj;
var i=info[1];
if (names[i] == null ) names[i]=Clazz.new_($I$(6,1));
var name=C$.getMouseActionName$I$Z(info[0], true);
if (qlow == null  || (actionNames[i] + ";" + actionInfo[i] + ";" + name ).toLowerCase$().indexOf$S(qlow) >= 0 ) names[i].addLast$O(name);
}}
for (var i=0; i < actionInfo.length; i++) {
var n;
if (names[i] == null  || (n=names[i].size$()) == 0 ) continue;
p$1.addInfo$javajs_util_SB$SA$S$S.apply(this, [sb, names[i].toArray$OA(Clazz.array(String, [n])), actionNames[i], actionInfo[i]]);
}
for (var i=0; i < user.size$(); i++) {
var info=user.get$I(i);
p$1.addInfo$javajs_util_SB$SA$S$S.apply(this, [sb, Clazz.array(String, -1, ["USER:::" + info[0]]), "user-defined", info[1]]);
}
return sb.toString();
});

Clazz.newMeth(C$, 'addInfo$javajs_util_SB$SA$S$S', function (sb, list, name, info) {
$I$(8).sort$OA(list);
$I$(9).leftJustify$javajs_util_SB$S$S(sb, "                      ", name);
sb.append$S("\t");
var sep="";
var len=sb.length$();
for (var j=0; j < list.length; j++) {
sb.append$S(sep).append$S(list[j].substring$I(7));
sep=", ";
}
len=sb.length$() - len;
if (len < 20) sb.append$S("                 ".substring$I$I(0, 20 - len));
sb.append$S("\t").append$S(info).appendC$C("\n");
}, p$1);

Clazz.newMeth(C$, 'includes$I$I', function (mouseAction, mod) {
return ((mouseAction & mod) == mod);
}, 1);

Clazz.newMeth(C$, 'newBinding$org_jmol_viewer_Viewer$S', function (vwr, name) {
return $I$(10).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.viewer.binding." + name + "Binding" , vwr, "script");
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:27 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
