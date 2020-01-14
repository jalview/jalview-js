(function(){var P$=Clazz.newPackage("org.jmol.popup"),p$1={},I$=[[0,'java.util.Properties','java.io.BufferedReader','java.io.StringReader','javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PopupResource");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.structure=null;
this.words=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Properties', function (menuStructure, menuText) {
C$.$init$.apply(this);
this.structure=Clazz.new_($I$(1));
this.words=Clazz.new_($I$(1));
this.buildStructure$S(menuStructure);
p$1.localize$Z$java_util_Properties.apply(this, [menuStructure != null , menuText]);
}, 1);

Clazz.newMeth(C$, 'getStructure$S', function (key) {
return this.structure.getProperty$S(key);
});

Clazz.newMeth(C$, 'getWord$S', function (key) {
var str=this.words.getProperty$S(key);
return (str == null  ? key : str);
});

Clazz.newMeth(C$, 'setStructure$S$org_jmol_api_Translator', function (slist, gt) {
var br=Clazz.new_($I$(2).c$$java_io_Reader,[Clazz.new_($I$(3).c$$S,[slist])]);
var line;
var pt;
try {
while ((line=br.readLine$()) != null ){
if (line.length$() == 0 || line.charAt$I(0) == "#" ) continue;
pt=line.indexOf$S("=");
if (pt < 0) {
pt=line.length$();
line += "=";
}var name=line.substring$I$I(0, pt).trim$();
var value=line.substring$I(pt + 1).trim$();
var label=null;
if ((pt=name.indexOf$S("|")) >= 0) {
label=name.substring$I(pt + 1).trim$();
name=name.substring$I$I(0, pt).trim$();
}if (name.length$() == 0) continue;
if (value.length$() > 0) this.structure.setProperty$S$S(name, value);
if (label != null  && label.length$() > 0 ) this.words.setProperty$S$S(name, (gt == null  ? label : gt.translate$(label)));
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
try {
br.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'addItems$SAA', function (itemPairs) {
var previous="";
for (var i=0; i < itemPairs.length; i++) {
var pair=itemPairs[i];
var str=pair[1];
if (str == null ) str=previous;
previous=str;
this.structure.setProperty$S$S(pair[0], str);
}
});

Clazz.newMeth(C$, 'localize$Z$java_util_Properties', function (haveUserMenu, menuText) {
var wordContents=this.getWordContents$();
for (var i=0; i < wordContents.length; i++) {
var item=wordContents[i++];
var word=this.words.getProperty$S(item);
if (word == null ) word=wordContents[i];
this.words.setProperty$S$S(item, word);
if (menuText != null  && item.indexOf$S("Text") >= 0 ) menuText.setProperty$S$S(item, word);
}
}, p$1);

Clazz.newMeth(C$, 'getStuctureAsText$S$SAA$SAA', function (title, menuContents, structureContents) {
return "# " + this.getMenuName$() + ".mnu " + title + "\n\n" + "# Part I -- Menu Structure\n" + "# ------------------------\n\n" + p$1.dumpStructure$SAA.apply(this, [menuContents]) + "\n\n" + "# Part II -- Key Definitions\n" + "# --------------------------\n\n" + p$1.dumpStructure$SAA.apply(this, [structureContents]) + "\n\n" + "# Part III -- Word Translations\n" + "# -----------------------------\n\n" + p$1.dumpWords.apply(this, []) ;
});

Clazz.newMeth(C$, 'dumpWords', function () {
var wordContents=this.getWordContents$();
var s=Clazz.new_($I$(4));
for (var i=0; i < wordContents.length; i++) {
var key=wordContents[i++];
if (this.structure.getProperty$S(key) == null ) s.append$S(key).append$S(" | ").append$S(wordContents[i]).appendC$C("\n");
}
return s.toString();
}, p$1);

Clazz.newMeth(C$, 'dumpStructure$SAA', function (items) {
var previous="";
var s=Clazz.new_($I$(4));
for (var i=0; i < items.length; i++) {
var key=items[i][0];
var label=this.words.getProperty$S(key);
if (label != null ) key += " | " + label;
s.append$S(key).append$S(" = ").append$S(items[i][1] == null  ? previous : (previous=items[i][1])).appendC$C("\n");
}
return s.toString();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
