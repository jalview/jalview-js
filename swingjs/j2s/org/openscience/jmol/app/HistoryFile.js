(function(){var P$=Clazz.newPackage("org.openscience.jmol.app"),p$1={},I$=[[0,'java.util.Properties','java.awt.Point','java.awt.Dimension','java.io.FileInputStream','java.io.FileOutputStream']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HistoryFile");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.properties=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['S',['header'],'O',['properties','java.util.Properties','file','java.io.File']]]

Clazz.newMeth(C$, 'c$$java_io_File$S', function (file, header) {
;C$.$init$.apply(this);
this.file=file;
this.header=header;
p$1.load.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'addProperties$java_util_Properties', function (properties) {
var keys=properties.keys$();
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
var value=properties.getProperty$S(key);
this.addProperty$S$S(key, value);
}
this.save$();
});

Clazz.newMeth(C$, 'getProperties$', function () {
return Clazz.new_($I$(1,1).c$$java_util_Properties,[this.properties]);
});

Clazz.newMeth(C$, 'getProperty$S$S', function (key, defaultValue) {
return this.properties.getProperty$S$S(key, defaultValue);
});

Clazz.newMeth(C$, 'addProperty$S$S', function (key, value) {
var modified=false;
var oldValue=this.properties.setProperty$S$S(key, value);
if (!value.equals$O(oldValue)) {
modified=true;
}return modified;
});

Clazz.newMeth(C$, 'getWindowPosition$S', function (name) {
if (name != null ) {
try {
var x=this.getProperty$S$S("Jmol.window." + name + ".x" , null);
var y=this.getProperty$S$S("Jmol.window." + name + ".y" , null);
if ((x != null ) && (y != null ) ) {
var posX=Integer.parseInt$S(x);
var posY=Integer.parseInt$S(y);
return Clazz.new_($I$(2,1).c$$I$I,[posX, posY]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}return null;
});

Clazz.newMeth(C$, 'getWindowInnerDimension$S', function (name) {
if (name != null ) {
try {
var w=this.getProperty$S$S("Jmol.window." + name + ".innerWidth" , null);
var h=this.getProperty$S$S("Jmol.window." + name + ".innerHeight" , null);
if ((w != null ) && (h != null ) ) {
var iw=Integer.parseInt$S(w);
var ih=Integer.parseInt$S(h);
return Clazz.new_($I$(3,1).c$$I$I,[iw, ih]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}return null;
});

Clazz.newMeth(C$, 'getWindowBorder$S', function (name) {
var result=null;
try {
var x=this.getProperty$S$S("Jmol.windowBorder." + name + ".x" , null);
var y=this.getProperty$S$S("Jmol.windowBorder." + name + ".y" , null);
if ((x != null ) && (y != null ) ) {
var X=Integer.parseInt$S(x);
var Y=Integer.parseInt$S(y);
result=Clazz.new_($I$(2,1).c$$I$I,[X, Y]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'getWindowSize$S', function (name) {
var result=null;
if (name != null ) {
try {
var w=this.getProperty$S$S("Jmol.window." + name + ".w" , null);
var h=this.getProperty$S$S("Jmol.window." + name + ".h" , null);
if ((w != null ) && (h != null ) ) {
var dimW=Integer.parseInt$S(w);
var dimH=Integer.parseInt$S(h);
result=Clazz.new_($I$(3,1).c$$I$I,[dimW, dimH]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}return result;
});

Clazz.newMeth(C$, 'getWindowVisibility$S', function (name) {
var result=null;
if (name != null ) {
try {
var v=this.getProperty$S$S("Jmol.window." + name + ".visible" , null);
if (v != null ) {
result=Boolean.valueOf$S(v);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}return result;
}, p$1);

Clazz.newMeth(C$, 'addWindowPosition$S$java_awt_Point', function (name, position) {
var modified=false;
if (name != null ) {
if (position != null ) {
modified|=this.addProperty$S$S("Jmol.window." + name + ".x" , "" + position.x);
modified|=this.addProperty$S$S("Jmol.window." + name + ".y" , "" + position.y);
}}return modified;
}, p$1);

Clazz.newMeth(C$, 'addWindowBorder$S$java_awt_Point', function (name, border) {
var modified=false;
if (name != null  && border != null  ) {
modified|=this.addProperty$S$S("Jmol.windowBorder." + name + ".x" , "" + border.x);
modified|=this.addProperty$S$S("Jmol.windowBorder." + name + ".y" , "" + border.y);
}return modified;
}, p$1);

Clazz.newMeth(C$, 'addWindowDim$S$java_awt_Dimension', function (name, d) {
var modified=false;
if (name != null  && d != null  ) {
modified|=this.addProperty$S$S("Jmol.window." + name + ".innerWidth" , "" + d.width);
modified|=this.addProperty$S$S("Jmol.window." + name + ".innerHeight" , "" + d.height);
}return modified;
}, p$1);

Clazz.newMeth(C$, 'addWindowSize$S$java_awt_Dimension', function (name, size) {
var modified=false;
if (name != null ) {
if (size != null ) {
modified|=this.addProperty$S$S("Jmol.window." + name + ".w" , "" + size.width);
modified|=this.addProperty$S$S("Jmol.window." + name + ".h" , "" + size.height);
}}return modified;
}, p$1);

Clazz.newMeth(C$, 'addWindowVisibility$S$Z', function (name, visible) {
var modified=false;
if (name != null ) {
modified|=this.addProperty$S$S("Jmol.window." + name + ".visible" , "" + visible);
}return modified;
}, p$1);

Clazz.newMeth(C$, 'addWindowInfo$S$java_awt_Component$java_awt_Point', function (name, window, border) {
this.addWindowInfo$S$java_awt_Component$java_awt_Point$java_awt_Dimension(name, window, border, null);
});

Clazz.newMeth(C$, 'addWindowInfo$S$java_awt_Component$java_awt_Point$java_awt_Dimension', function (name, window, border, d) {
if (window != null ) {
var modified=false;
modified|=p$1.addWindowPosition$S$java_awt_Point.apply(this, [name, window.getLocation$()]);
modified|=p$1.addWindowSize$S$java_awt_Dimension.apply(this, [name, window.getSize$()]);
modified|=p$1.addWindowBorder$S$java_awt_Point.apply(this, [name, border]);
modified|=p$1.addWindowVisibility$S$Z.apply(this, [name, window.isVisible$()]);
modified|=p$1.addWindowDim$S$java_awt_Dimension.apply(this, [name, d]);
if (modified) {
this.save$();
}}});

Clazz.newMeth(C$, 'addWindowInnerInfo$S$java_awt_Component$java_awt_Dimension', function (name, window, inner) {
this.addWindowInfo$S$java_awt_Component$java_awt_Point$java_awt_Dimension(name, window, null, inner);
});

Clazz.newMeth(C$, 'repositionWindow$S$java_awt_Component$I$I$Z', function (name, window, minWidth, minHeight, allowVisible) {
if (window != null ) {
var position=this.getWindowPosition$S(name);
var size=this.getWindowSize$S(name);
var visible=p$1.getWindowVisibility$S.apply(this, [name]);
if (position != null ) window.setLocation$java_awt_Point(position);
if (size != null ) {
if (size.width < minWidth) size.width=minWidth;
if (size.height < minHeight) size.height=minHeight;
window.setSize$java_awt_Dimension(size);
}if (allowVisible && visible != null   && visible.booleanValue$() ) window.setVisible$Z(true);
}});

Clazz.newMeth(C$, 'repositionWindow$S$java_awt_Component', function (name, window) {
this.repositionWindow$S$java_awt_Component$I$I$Z(name, window, 10, 10, true);
});

Clazz.newMeth(C$, 'getFile$', function () {
return this.file;
});

Clazz.newMeth(C$, 'load', function () {
if (this.file == null ) return;
try {
var input=Clazz.new_($I$(4,1).c$$java_io_File,[this.file]);
this.properties.load$java_io_InputStream(input);
input.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'save$', function () {
if (this.file == null ) return;
try {
var output=Clazz.new_($I$(5,1).c$$java_io_File,[this.file]);
this.properties.store$java_io_OutputStream$S(output, this.header);
output.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
System.err.println$S("Error saving history: " + ex);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'clear$', function () {
if (this.file == null ) return;
try {
var output=Clazz.new_($I$(5,1).c$$java_io_File,[this.file]);
output.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
System.err.println$S("Error clearing history: " + ex);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
