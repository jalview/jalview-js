(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JComboBox", null, 'org.jmol.awtjs.swing.AbstractButton');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.info=null;
this.selectedIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$SA', function (info) {
C$.superclazz.c$$S.apply(this, ["cmbJCB"]);
C$.$init$.apply(this);
this.info=info;
}, 1);

Clazz.newMeth(C$, 'setSelectedIndex$I', function (i) {
this.selectedIndex=i;
{
SwingController.setSelectedIndex(this);
}
});

Clazz.newMeth(C$, 'getSelectedIndex$', function () {
return this.selectedIndex;
});

Clazz.newMeth(C$, 'getSelectedItem$', function () {
return (this.selectedIndex < 0 ? null : this.info[this.selectedIndex]);
});

Clazz.newMeth(C$, 'toHTML$', function () {
var sb=Clazz.new_($I$(1));
sb.append$S("\n<select id='" + this.id + "' class='JComboBox' onchange='SwingController.click(this)'>\n" );
for (var i=0; i < this.info.length; i++) sb.append$S("\n<option class='JComboBox_option'" + (i == this.selectedIndex ? "selected" : "") + ">" + this.info[i] + "</option>" );

sb.append$S("\n</select>\n");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
