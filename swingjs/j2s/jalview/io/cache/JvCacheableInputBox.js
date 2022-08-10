(function(){var P$=Clazz.newPackage("jalview.io.cache"),p$1={},I$=[[0,'javax.swing.JPopupMenu','javax.swing.JMenuItem','StringBuilder','jalview.util.Platform','javax.swing.JTextField','jalview.io.cache.AppCache','javax.swing.JComboBox','java.awt.event.KeyAdapter','jalview.bin.Cache','java.util.Arrays','java.util.LinkedHashSet','java.awt.Font','jalview.util.MessageManager','javax.swing.SwingUtilities','java.util.ArrayList','java.util.Collections']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JvCacheableInputBox");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.popup=Clazz.new_($I$(1,1));
this.menuItemClearCache=Clazz.new_($I$(2,1));
this.enterWasPressed=false;
},1);

C$.$fields$=[['Z',['enterWasPressed'],'S',['cacheKey','prototypeDisplayValue'],'O',['comboBox','javax.swing.JComboBox','textField','javax.swing.JTextField','textComponent','javax.swing.text.JTextComponent','appCache','jalview.io.cache.AppCache','popup','javax.swing.JPopupMenu','menuItemClearCache','javax.swing.JMenuItem']]]

Clazz.newMeth(C$, 'wasEnterPressed$',  function () {
return this.enterWasPressed;
});

Clazz.newMeth(C$, 'c$$S$I',  function (newCacheKey, length) {
;C$.$init$.apply(this);
this.cacheKey=newCacheKey;
this.prototypeDisplayValue="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
if (length > 0) {
var sb=Clazz.new_($I$(3,1));
for (var i=0; i < length; i++) {
sb.append$S("X");
}
this.setPrototypeDisplayValue$S(sb.toString());
}var useTextField=$I$(4).isJS$();
if (useTextField) {
this.appCache=null;
this.textComponent=this.textField=Clazz.new_($I$(5,1));
} else {
this.appCache=$I$(6).getInstance$();
this.comboBox=Clazz.new_($I$(7,1));
this.textComponent=this.comboBox.getEditor$().getEditorComponent$();
this.comboBox.setEditable$Z(true);
this.comboBox.addKeyListener$java_awt_event_KeyListener(((P$.JvCacheableInputBox$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JvCacheableInputBox$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
this.b$['jalview.io.cache.JvCacheableInputBox'].enterWasPressed=false;
if (e.getKeyCode$() == 10) {
this.b$['jalview.io.cache.JvCacheableInputBox'].enterWasPressed=true;
}});
})()
), Clazz.new_($I$(8,1),[this, null],P$.JvCacheableInputBox$1)));
this.comboBox.setPrototypeDisplayValue$O(this.prototypeDisplayValue);
p$1.initCachePopupMenu.apply(this, []);
p$1.initCache$S.apply(this, [newCacheKey]);
this.updateCache$();
}}, 1);

Clazz.newMeth(C$, 'initCache$S',  function (cacheKey) {
if (this.appCache == null ) {
return;
}var delimitedCacheStr=$I$(9).getProperty$S(cacheKey);
if (delimitedCacheStr == null  || delimitedCacheStr.isEmpty$() ) {
return;
}var persistedCacheItems=$I$(10,"asList$OA",[delimitedCacheStr.split$S(";")]);
var foundCacheItems=this.appCache.getAllCachedItemsFor$S(cacheKey);
if (foundCacheItems == null ) {
foundCacheItems=Clazz.new_($I$(11,1));
}for (var cacheItem, $cacheItem = persistedCacheItems.iterator$(); $cacheItem.hasNext$()&&((cacheItem=($cacheItem.next$())),1);) {
foundCacheItems.add$O(cacheItem);
}
this.appCache.putCache$S$java_util_LinkedHashSet(cacheKey, foundCacheItems);
}, p$1);

Clazz.newMeth(C$, 'initCachePopupMenu',  function () {
if (this.appCache == null ) {
return;
}this.menuItemClearCache.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 12]));
this.menuItemClearCache.setText$S($I$(13).getString$S("action.clear_cached_items"));
this.menuItemClearCache.addActionListener$java_awt_event_ActionListener(((P$.JvCacheableInputBox$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JvCacheableInputBox$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.io.cache.JvCacheableInputBox'].setSelectedItem$S.apply(this.b$['jalview.io.cache.JvCacheableInputBox'], [""]);
this.b$['jalview.io.cache.JvCacheableInputBox'].appCache.deleteCacheItems$S(this.b$['jalview.io.cache.JvCacheableInputBox'].cacheKey);
this.b$['jalview.io.cache.JvCacheableInputBox'].updateCache$.apply(this.b$['jalview.io.cache.JvCacheableInputBox'], []);
});
})()
), Clazz.new_(P$.JvCacheableInputBox$2.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.menuItemClearCache);
this.comboBox.setComponentPopupMenu$javax_swing_JPopupMenu(this.popup);
this.comboBox.add$java_awt_Component(this.popup);
}, p$1);

Clazz.newMeth(C$, 'isInteger$S',  function (text) {
try {
Integer.parseInt$S(text);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return false;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'updateCache$',  function () {
if (this.appCache == null ) {
return;
}$I$(14,"invokeLater$Runnable",[((P$.JvCacheableInputBox$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "JvCacheableInputBox$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var cacheLimit=Integer.parseInt$S(this.b$['jalview.io.cache.JvCacheableInputBox'].appCache.getCacheLimit$S(this.b$['jalview.io.cache.JvCacheableInputBox'].cacheKey));
var userInput=this.b$['jalview.io.cache.JvCacheableInputBox'].getUserInput$.apply(this.b$['jalview.io.cache.JvCacheableInputBox'], []);
if (userInput != null  && !userInput.isEmpty$() ) {
var foundCache=this.b$['jalview.io.cache.JvCacheableInputBox'].appCache.getAllCachedItemsFor$S(this.b$['jalview.io.cache.JvCacheableInputBox'].cacheKey);
foundCache.remove$O(userInput);
foundCache.add$O(userInput);
this.b$['jalview.io.cache.JvCacheableInputBox'].appCache.putCache$S$java_util_LinkedHashSet(this.b$['jalview.io.cache.JvCacheableInputBox'].cacheKey, foundCache);
}var lastSearch=userInput;
if (this.b$['jalview.io.cache.JvCacheableInputBox'].comboBox.getItemCount$() > 0) {
this.b$['jalview.io.cache.JvCacheableInputBox'].comboBox.removeAllItems$();
}var cacheItems=this.b$['jalview.io.cache.JvCacheableInputBox'].appCache.getAllCachedItemsFor$S(this.b$['jalview.io.cache.JvCacheableInputBox'].cacheKey);
var reversedCacheItems=Clazz.new_($I$(15,1));
reversedCacheItems.addAll$java_util_Collection(cacheItems);
cacheItems=null;
$I$(16).reverse$java_util_List(reversedCacheItems);
if (lastSearch.isEmpty$()) {
this.b$['jalview.io.cache.JvCacheableInputBox'].comboBox.addItem$O("");
}if (reversedCacheItems != null  && !reversedCacheItems.isEmpty$() ) {
var foundCache=this.b$['jalview.io.cache.JvCacheableInputBox'].appCache.getAllCachedItemsFor$S(this.b$['jalview.io.cache.JvCacheableInputBox'].cacheKey);
var prune=reversedCacheItems.size$() > cacheLimit;
var count=1;
var limitExceeded=false;
for (var cacheItem, $cacheItem = reversedCacheItems.iterator$(); $cacheItem.hasNext$()&&((cacheItem=($cacheItem.next$())),1);) {
limitExceeded=(count++ > cacheLimit);
if (prune) {
if (limitExceeded) {
foundCache.remove$O(cacheItem);
} else {
this.b$['jalview.io.cache.JvCacheableInputBox'].comboBox.addItem$O(cacheItem);
}} else {
this.b$['jalview.io.cache.JvCacheableInputBox'].comboBox.addItem$O(cacheItem);
}}
this.b$['jalview.io.cache.JvCacheableInputBox'].appCache.putCache$S$java_util_LinkedHashSet(this.b$['jalview.io.cache.JvCacheableInputBox'].cacheKey, foundCache);
}this.b$['jalview.io.cache.JvCacheableInputBox'].setSelectedItem$S.apply(this.b$['jalview.io.cache.JvCacheableInputBox'], [lastSearch.isEmpty$() ? "" : lastSearch]);
});
})()
), Clazz.new_(P$.JvCacheableInputBox$3.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'persistCache$',  function () {
if (this.appCache == null ) {
return;
}this.appCache.persistCache$S(this.cacheKey);
});

Clazz.newMeth(C$, 'getUserInput$',  function () {
if (this.comboBox == null ) {
return this.textField.getText$().trim$();
}var item=this.comboBox.getEditor$().getItem$();
return item == null  ? "" : item.toString().trim$();
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return (this.comboBox == null  ? this.textField : this.comboBox);
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener',  function (actionListener) {
if (this.comboBox == null ) {
this.textField.addActionListener$java_awt_event_ActionListener(actionListener);
} else {
this.comboBox.addActionListener$java_awt_event_ActionListener(actionListener);
}});

Clazz.newMeth(C$, 'addDocumentListener$javax_swing_event_DocumentListener',  function (listener) {
this.textComponent.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(listener);
});

Clazz.newMeth(C$, 'addFocusListener$java_awt_event_FocusListener',  function (focusListener) {
this.textComponent.addFocusListener$java_awt_event_FocusListener(focusListener);
});

Clazz.newMeth(C$, 'addKeyListener$java_awt_event_KeyListener',  function (kl) {
this.textComponent.addKeyListener$java_awt_event_KeyListener(kl);
});

Clazz.newMeth(C$, 'addCaretListener$javax_swing_event_CaretListener',  function (caretListener) {
this.textComponent.addCaretListener$javax_swing_event_CaretListener(caretListener);
});

Clazz.newMeth(C$, 'setEditable$Z',  function (b) {
if (this.comboBox != null ) {
this.comboBox.setEditable$Z(b);
}});

Clazz.newMeth(C$, 'setPrototypeDisplayValue$S',  function (string) {
this.prototypeDisplayValue=string;
if (this.comboBox != null ) {
this.comboBox.setPrototypeDisplayValue$O(string);
}});

Clazz.newMeth(C$, 'setSelectedItem$S',  function (userInput) {
if (this.comboBox != null ) {
this.comboBox.setSelectedItem$O(userInput);
}});

Clazz.newMeth(C$, 'isPopupVisible$',  function () {
return (this.comboBox != null  && this.comboBox.isPopupVisible$() );
});

Clazz.newMeth(C$, 'addItem$S',  function (item) {
if (this.comboBox != null ) {
this.comboBox.addItem$O(item);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
