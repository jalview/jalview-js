(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Slider", null, 'javax.swing.JSlider');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['trueMin','trueMax','sliderScaleFactor']]]

Clazz.newMeth(C$, 'c$$F$F$F',  function (min, max, value) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setSliderModel$F$F$F(min, max, value);
}, 1);

Clazz.newMeth(C$, 'setSliderModel$F$F$F',  function (min, max, value) {
this.trueMin=min;
this.trueMax=max;
this.setMinimum$I(0);
this.sliderScaleFactor=1000 / (max - min);
var sliderMax=(((max - min) * this.sliderScaleFactor)|0);
this.setMaximum$I(sliderMax);
this.setSliderValue$F(value);
});

Clazz.newMeth(C$, 'getSliderValue$',  function () {
var value=this.getValue$();
return value == this.getMaximum$() ? this.trueMax : value / this.sliderScaleFactor + this.trueMin;
});

Clazz.newMeth(C$, 'setSliderValue$F',  function (value) {
this.setValue$I(Math.round((value - this.trueMin) * this.sliderScaleFactor));
});

Clazz.newMeth(C$, 'getSliderPercentageValue$',  function () {
return (this.getValue$() - this.getMinimum$()) * 100.0 / (this.getMaximum$() - this.getMinimum$());
});

Clazz.newMeth(C$, 'setSliderPercentageValue$F',  function (pct) {
var pc=pct / 100.0 * this.getMaximum$();
this.setValue$I((pc|0));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:35 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
