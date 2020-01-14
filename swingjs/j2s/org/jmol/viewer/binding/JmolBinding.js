(function(){var P$=Clazz.newPackage("org.jmol.viewer.binding"),p$1={};
var C$=Clazz.newClass(P$, "JmolBinding", null, 'org.jmol.viewer.binding.Binding');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.set$S("toggle");
}, 1);

Clazz.newMeth(C$, 'set$S', function (name) {
this.name=name;
p$1.setGeneralBindings.apply(this, []);
this.setSelectBindings$();
});

Clazz.newMeth(C$, 'setSelectBindings$', function () {
this.bindAction$I$I(33296, 30);
this.bindAction$I$I(33040, 36);
});

Clazz.newMeth(C$, 'setGeneralBindings', function () {
this.bindAction$I$I(8474, 45);
this.bindAction$I$I(8454, 45);
this.bindAction$I$I(8721, 45);
this.bindAction$I$I(8712, 45);
this.bindAction$I$I(8464, 25);
this.bindAction$I$I(8720, 25);
this.bindAction$I$I(8472, 28);
this.bindAction$I$I(8453, 28);
this.bindAction$I$I(8465, 29);
this.bindAction$I$I(8456, 29);
this.bindAction$I$I(288, 46);
this.bindAction$I$I(8464, 40);
this.bindAction$I$I(8464, 16);
this.bindAction$I$I(4370, 23);
this.bindAction$I$I(4356, 23);
this.bindAction$I$I(33040, 2);
this.bindAction$I$I(8467, 38);
this.bindAction$I$I(8723, 6);
this.bindAction$I$I(8475, 39);
this.bindAction$I$I(290, 46);
this.bindAction$I$I(289, 46);
this.bindAction$I$I(291, 46);
this.bindAction$I$I(290, 38);
this.bindAction$I$I(289, 6);
this.bindAction$I$I(291, 39);
this.bindAction$I$I(8464, 44);
this.bindAction$I$I(8464, 41);
this.bindAction$I$I(8465, 42);
this.bindAction$I$I(8473, 13);
this.bindAction$I$I(8465, 14);
this.bindAction$I$I(8472, 27);
this.bindAction$I$I(8465, 26);
this.bindAction$I$I(8464, 10);
this.bindAction$I$I(8472, 9);
this.bindAction$I$I(8465, 8);
this.bindAction$I$I(33297, 24);
this.bindAction$I$I(33288, 24);
this.bindAction$I$I(33296, 43);
this.bindAction$I$I(8464, 7);
this.bindAction$I$I(8464, 11);
this.bindAction$I$I(8464, 12);
this.bindAction$I$I(33040, 17);
this.bindAction$I$I(33040, 22);
this.bindAction$I$I(33040, 19);
this.bindAction$I$I(33040, 20);
this.bindAction$I$I(33296, 37);
this.bindAction$I$I(33040, 18);
this.bindAction$I$I(33043, 21);
this.bindAction$I$I(33040, 4);
this.bindAction$I$I(33040, 5);
this.bindAction$I$I(33040, 3);
this.bindAction$I$I(33040, 0);
this.bindAction$I$I(33043, 1);
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 07:20:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
