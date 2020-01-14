(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'org.jmol.awtjs.swing.Cell','javajs.util.AU','javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Grid");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nrows=0;
this.ncols=0;
this.grid=null;
this.renderer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (rows, cols) {
C$.$init$.apply(this);
this.grid=Clazz.array($I$(1), [0, 0]);
}, 1);

Clazz.newMeth(C$, 'add$org_jmol_awtjs_swing_JComponent$org_jmol_awtjs_swing_GridBagConstraints', function (btn, c) {
if (c.gridx >= this.ncols) {
this.ncols=c.gridx + 1;
for (var i=0; i < this.nrows; i++) {
this.grid[i]=$I$(2).ensureLength$O$I(this.grid[i], this.ncols * 2);
}
}if (c.gridy >= this.nrows) {
var g=Clazz.array($I$(1), [c.gridy * 2 + 1, null]);
for (var i=0; i < this.nrows; i++) g[i]=this.grid[i];

for (var i=g.length; --i >= this.nrows; ) g[i]=Clazz.array($I$(1), [this.ncols * 2 + 1]);

this.grid=g;
this.nrows=c.gridy + 1;
}this.grid[c.gridy][c.gridx]=Clazz.new_($I$(1).c$$org_jmol_awtjs_swing_JComponent$org_jmol_awtjs_swing_GridBagConstraints,[btn, c]);
});

Clazz.newMeth(C$, 'toHTML$S', function (id) {
var sb=Clazz.new_($I$(3));
id += "_grid";
sb.append$S("\n<table id='" + id + "' class='Grid' style='width:100%;height:100%'><tr><td style='height:20%;width:20%'></td></tr>" );
for (var i=0; i < this.nrows; i++) {
var rowid=id + "_" + i ;
sb.append$S("\n<tr id='" + rowid + "'><td></td>" );
for (var j=0; j < this.ncols; j++) if (this.grid[i][j] != null ) sb.append$S(this.grid[i][j].toHTML$S(rowid + "_" + j ));

sb.append$S("</tr>");
}
sb.append$S("\n<tr><td style=\'height:20%;width:20%\'></td></tr></table>\n");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
