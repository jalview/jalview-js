(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'javajs.util.SB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JComboBox", null, 'org.jmol.awtjs.swing.AbstractButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['selectedIndex'],'O',['info','String[]']]]

Clazz.newMeth(C$, 'c$$SA', function (info) {
;C$.superclazz.c$$S.apply(this,["cmbJCB"]);C$.$init$.apply(this);
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
var sb=Clazz.new_($I$(1,1));
sb.append$S("\n<select id='" + this.id + "' class='JComboBox' onchange='SwingController.click(this)'>\n" );
for (var i=0; i < this.info.length; i++) sb.append$S("\n<option class='JComboBox_option'" + (i == this.selectedIndex ? "selected" : "") + ">" + this.info[i] + "</option>" );

sb.append$S("\n</select>\n");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
