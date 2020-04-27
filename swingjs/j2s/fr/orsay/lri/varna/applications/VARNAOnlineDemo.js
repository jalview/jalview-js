(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),p$1={},I$=[[0,'javax.swing.JPanel','javax.swing.JLabel','javax.swing.JTextField','java.awt.Color','fr.orsay.lri.varna.VARNAPanel','java.awt.Font','java.awt.Dimension','java.awt.BorderLayout','fr.orsay.lri.varna.controlers.ControleurDemoTextField','java.awt.GridLayout','Boolean']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VARNAOnlineDemo", null, 'javax.swing.JApplet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._tools=Clazz.new_($I$(1,1));
this._input=Clazz.new_($I$(1,1));
this._seqPanel=Clazz.new_($I$(1,1));
this._structPanel=Clazz.new_($I$(1,1));
this._info=Clazz.new_($I$(2,1));
this._struct=Clazz.new_($I$(3,1));
this._seq=Clazz.new_($I$(3,1));
this._structLabel=Clazz.new_($I$(2,1).c$$S,[" Str:"]);
this._seqLabel=Clazz.new_($I$(2,1).c$$S,[" Seq:"]);
this._backgroundColor=$I$(4).white;
},1);

C$.$fields$=[['Z',['_error'],'I',['_algoCode'],'O',['_vp','fr.orsay.lri.varna.VARNAPanel','_tools','javax.swing.JPanel','+_input','+_seqPanel','+_structPanel','_info','javax.swing.JLabel','_struct','javax.swing.JTextField','+_seq','_structLabel','javax.swing.JLabel','+_seqLabel','_backgroundColor','java.awt.Color']]
,['S',['errorOpt']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
try {
this._vp=Clazz.new_([this._seq.getText$(), this._struct.getText$()],$I$(5,1).c$$S$S);
this._vp.setErrorsOn$Z(false);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
this._vp.errorDialog$Exception(e);
} else {
throw e;
}
}
p$1.RNAPanelDemoInit.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'RNAPanelDemoInit', function () {
var marginTools=40;
this.setBackground$java_awt_Color(this._backgroundColor);
this._vp.setBackground$java_awt_Color(this._backgroundColor);
try {
this._vp.getRNA$().setRNA$S$S(this._seq.getText$(), this._struct.getText$());
this._vp.setErrorsOn$Z(false);
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
this._vp.errorDialog$Exception(e1);
} else {
throw e1;
}
}
var textFieldsFont=$I$(6).decode$S("MonoSpaced-PLAIN-12");
this._seqLabel.setHorizontalTextPosition$I(2);
this._seqLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7,1).c$$I$I,[marginTools, 15]));
this._seq.setFont$java_awt_Font(textFieldsFont);
this._seq.setText$S(this._vp.getRNA$().getSeq$());
this._seqPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
this._seqPanel.add$java_awt_Component$O(this._seqLabel, "West");
this._seqPanel.add$java_awt_Component$O(this._seq, "Center");
this._structLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7,1).c$$I$I,[marginTools, 15]));
this._structLabel.setHorizontalTextPosition$I(2);
this._struct.setFont$java_awt_Font(textFieldsFont);
this._struct.setText$S(this._vp.getRNA$().getStructDBN$());
this._structPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
this._structPanel.add$java_awt_Component$O(this._structLabel, "West");
this._structPanel.add$java_awt_Component$O(this._struct, "Center");
var controleurTextField=Clazz.new_($I$(9,1).c$$fr_orsay_lri_varna_applications_VARNAOnlineDemo,[this]);
this._seq.addCaretListener$javax_swing_event_CaretListener(controleurTextField);
this._struct.addCaretListener$javax_swing_event_CaretListener(controleurTextField);
this._input.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1).c$$I$I,[3, 0]));
this._input.add$java_awt_Component(this._seqPanel);
this._input.add$java_awt_Component(this._structPanel);
this._tools.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
this._tools.add$java_awt_Component$O(this._input, "Center");
this._tools.add$java_awt_Component$O(this._info, "South");
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
this.getContentPane$().add$java_awt_Component$O(this._vp, "Center");
this.getContentPane$().add$java_awt_Component$O(this._tools, "South");
this.setVisible$Z(true);
this._vp.getVARNAUI$().UIRadiate$();
}, p$1);

Clazz.newMeth(C$, ['getParameterInfo$','getParameterInfo'], function () {
var info=Clazz.array(String, -2, [Clazz.array(String, -1, ["sequenceDBN", "String", "A raw RNA sequence"]), Clazz.array(String, -1, ["structureDBN", "String", "An RNA structure in dot bracket notation (DBN)"]), Clazz.array(String, -1, [C$.errorOpt, "boolean", "To show errors"])]);
return info;
});

Clazz.newMeth(C$, ['init$','init'], function () {
p$1.retrieveParametersValues.apply(this, []);
this._vp.setBackground$java_awt_Color(this._backgroundColor);
this._error=true;
});

Clazz.newMeth(C$, 'getSafeColor$S$java_awt_Color', function (col, def) {
var result;
try {
result=$I$(4).decode$S(col);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
try {
result=$I$(4).getColor$S$java_awt_Color(col, def);
} catch (e2) {
if (Clazz.exceptionOf(e2,"Exception")){
return def;
} else {
throw e2;
}
}
} else {
throw e;
}
}
return result;
}, p$1);

Clazz.newMeth(C$, 'getParameterValue$S$S', function (key, def) {
var tmp;
tmp=this.getParameter$S(key);
if (tmp == null ) {
return def;
} else {
return tmp;
}}, p$1);

Clazz.newMeth(C$, 'retrieveParametersValues', function () {
this._error=$I$(11,"parseBoolean$S",[p$1.getParameterValue$S$S.apply(this, [C$.errorOpt, "false"])]);
this._vp.setErrorsOn$Z(this._error);
this._backgroundColor=p$1.getSafeColor$S$java_awt_Color.apply(this, [p$1.getParameterValue$S$S.apply(this, ["background", this._backgroundColor.toString()]), this._backgroundColor]);
this._vp.setBackground$java_awt_Color(this._backgroundColor);
this._seq.setText$S(p$1.getParameterValue$S$S.apply(this, ["sequenceDBN", ""]));
this._struct.setText$S(p$1.getParameterValue$S$S.apply(this, ["structureDBN", ""]));
var _algo=p$1.getParameterValue$S$S.apply(this, ["algorithm", "radiate"]);
if (_algo.equals$O("circular")) this._algoCode=1;
 else if (_algo.equals$O("naview")) this._algoCode=3;
 else if (_algo.equals$O("line")) this._algoCode=4;
 else this._algoCode=2;
if (this._seq.getText$().equals$O("") && this._struct.getText$().equals$O("") ) {
this._seq.setText$S("CAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIA");
this._struct.setText$S("..(((((...(((((...(((((...(((((.....)))))...))))).....(((((...(((((.....)))))...))))).....)))))...)))))..");
}try {
this._vp.drawRNA$S$S$I(this._seq.getText$(), this._struct.getText$(), this._algoCode);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
e.printStackTrace$();
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, ['get_varnaPanel$','get_varnaPanel'], function () {
return this._vp;
});

Clazz.newMeth(C$, ['set_varnaPanel$fr_orsay_lri_varna_VARNAPanel','set_varnaPanel'], function (surface) {
this._vp=surface;
});

Clazz.newMeth(C$, ['get_struct$','get_struct'], function () {
return this._struct;
});

Clazz.newMeth(C$, ['set_struct$javax_swing_JTextField','set_struct'], function (_struct) {
this._struct=_struct;
});

Clazz.newMeth(C$, ['get_seq$','get_seq'], function () {
return this._seq;
});

Clazz.newMeth(C$, ['set_seq$javax_swing_JTextField','set_seq'], function (_seq) {
this._seq=_seq;
});

Clazz.newMeth(C$, ['get_info$','get_info'], function () {
return this._info;
});

Clazz.newMeth(C$, ['set_info$javax_swing_JLabel','set_info'], function (_info) {
this._info=_info;
});

C$.$static$=function(){C$.$static$=0;
C$.errorOpt="error";
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:17 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
