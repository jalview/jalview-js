(function(){var P$=Clazz.newPackage("org.jmol.console"),I$=[[0,'org.jmol.console.GenericConsole']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "KeyJMenu", null, 'javax.swing.JMenu', 'org.jmol.api.JmolAbstractButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['key'],'O',['itemKeys','String[]']]]

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'c$$S$S$java_util_Map', function (key, label, menuMap) {
;C$.superclazz.c$$S.apply(this,[$I$(1).getLabelWithoutMnemonic$S(label)]);C$.$init$.apply(this);
$I$(1,"map$O$S$S$java_util_Map",[this, this.key=key, label, menuMap]);
}, 1);

Clazz.newMeth(C$, 'addConsoleListener$O', function (console) {
});

Clazz.newMeth(C$, 'createItemKeys$org_openscience_jmol_app_jmolpanel_JmolPanel', function (jmolPanel) {
if (this.itemKeys == null ) return;
System.out.println$S("late binding for " + this.getActionCommand$());
for (var i=0; i < this.itemKeys.length; i++) {
var item=this.itemKeys[i];
if (item.equals$O("-")) {
this.addSeparator$();
} else if (item.endsWith$S("Menu")) {
this.add$javax_swing_JMenuItem(jmolPanel.createMenu$S(item));
} else {
var mi=jmolPanel.createMenuItem$S(item);
this.add$javax_swing_JMenuItem(mi);
}}
this.itemKeys=null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
