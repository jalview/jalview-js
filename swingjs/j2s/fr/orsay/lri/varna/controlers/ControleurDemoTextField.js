(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),I$=[[0,'java.awt.Color','javax.swing.text.DefaultHighlighter',['javax.swing.text.DefaultHighlighter','.DefaultHighlightPainter'],'java.util.ArrayList','java.util.Stack']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ControleurDemoTextField", null, null, 'javax.swing.event.CaretListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vod=null;
this._oldSeq=null;
this._oldStruct=null;
this._hilit=null;
this._painter=null;
this.COLORERROR=null;
this.COLORWARNING=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.COLORERROR=$I$(1).RED;
this.COLORWARNING=$I$(1).ORANGE;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_VARNAOnlineDemo', function (VOD) {
C$.$init$.apply(this);
this._vod=VOD;
this._oldSeq=this._vod.get_seq$().getText$();
this._oldStruct=this._vod.get_struct$().getText$();
this._hilit=Clazz.new_($I$(2));
this._painter=Clazz.new_($I$(3).c$$java_awt_Color,[$I$(1).BLACK]);
this._vod.get_struct$().setHighlighter$javax_swing_text_Highlighter(this._hilit);
}, 1);

Clazz.newMeth(C$, ['caretUpdate$javax_swing_event_CaretEvent','caretUpdate$'], function (e) {
if (this._oldStruct != this._vod.get_struct$().getText$() || this._oldSeq != this._vod.get_seq$().getText$() ) {
var infos=Clazz.new_($I$(4));
this._vod.get_info$().removeAll$();
this._hilit.removeAllHighlights$();
this._oldStruct=this._vod.get_struct$().getText$();
this._oldSeq=this._vod.get_seq$().getText$();
var nbPO=0;
var nbPF=0;
var p=Clazz.new_($I$(5));
var pb=false;
for (var i=0; i < this._vod.get_struct$().getText$().length$(); i++) {
if (this._vod.get_struct$().getText$().charAt$I(i) == "(") {
nbPO++;
p.push$TE(new Integer(i));
} else if (this._vod.get_struct$().getText$().charAt$I(i) == ")") {
nbPF++;
if (p.size$() == 0) {
try {
this._hilit.addHighlight$I$I$javax_swing_text_Highlighter_HighlightPainter(i, i + 1, this._painter);
} catch (e1) {
if (Clazz.exceptionOf(e1,"javax.swing.text.BadLocationException")){
this._vod.get_varnaPanel$().errorDialog$Exception(e1);
} else {
throw e1;
}
}
pb=true;
} else p.pop$();
}}
if (pb || p.size$() > 0 ) {
if (pb) {
infos.add$TE("too many closing parentheses");
}if (p.size$() > 0) {
var indice;
while (!p.isEmpty$()){
indice=(p.pop$()).intValue$();
try {
this._hilit.addHighlight$I$I$javax_swing_text_Highlighter_HighlightPainter(indice, indice + 1, this._painter);
} catch (e1) {
if (Clazz.exceptionOf(e1,"javax.swing.text.BadLocationException")){
this._vod.get_varnaPanel$().errorDialog$Exception(e1);
} else {
throw e1;
}
}
}
infos.add$TE("too many opening parentheses");
}this._vod.get_info$().setForeground$java_awt_Color(this.COLORERROR);
this._vod.get_seq$().setForeground$java_awt_Color(this.COLORERROR);
this._vod.get_struct$().setForeground$java_awt_Color(this.COLORERROR);
} else {
try {
this._vod.get_varnaPanel$().drawRNA$S$S$I(this._vod.get_seq$().getText$(), this._vod.get_struct$().getText$(), this._vod.get_varnaPanel$().getRNA$().get_drawMode$());
} catch (e1) {
if (Clazz.exceptionOf(e1,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
this._vod.get_varnaPanel$().errorDialog$Exception(e1);
} else {
throw e1;
}
}
if (this._vod.get_seq$().getText$().length$() != this._vod.get_struct$().getText$().length$()) {
infos.add$TE("different lenghts");
this._vod.get_seq$().setForeground$java_awt_Color(this.COLORWARNING);
this._vod.get_struct$().setForeground$java_awt_Color(this.COLORWARNING);
} else {
this._vod.get_seq$().setForeground$java_awt_Color($I$(1).black);
this._vod.get_struct$().setForeground$java_awt_Color($I$(1).black);
}}this._vod.get_varnaPanel$().getVARNAUI$().UIReset$();
var info= String.instantialize();
if (infos.size$() != 0) {
info += infos.get$I(0);
for (var i=1; i < infos.size$(); i++) {
info += ", " + infos.get$I(i);
}
info += ".";
}this._vod.get_info$().setText$S(info);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
