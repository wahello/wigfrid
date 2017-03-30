"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "/**************************************************************************\n    wijmo.olap module\n*/\n/* PivotPanel */\n.wj-pivotpanel {\n  position: relative;\n  padding: 3px 6px;\n  overflow: auto;\n  min-height: 25em;\n}\n.wj-pivotpanel a {\n  float: right;\n  margin: 6px;\n}\n.wj-pivotpanel table {\n  table-layout: fixed;\n  width: 100%;\n}\n.wj-pivotpanel div {\n  width: 100%;\n}\n.wj-pivotpanel tr,\n.wj-pivotpanel td {\n  border: 1px none #e0e0e0;\n  padding: 3px;\n}\n.wj-pivotpanel label {\n  font-weight: bold;\n  margin: 0;\n}\n.wj-pivotpanel .wj-glyph {\n  opacity: .5;\n}\n.wj-pivotpanel .wj-listbox {\n  flex-grow: 1;\n  border: none;\n  border-radius: 0;\n  min-height: 8em;\n  max-height: 20em;\n}\n.wj-pivotpanel table .wj-listbox {\n  min-height: 5em;\n  height: 5em;\n}\n.wj-pivotpanel .wj-listbox .wj-listbox-item.wj-state-selected {\n  background-color: transparent;\n  color: inherit;\n}\n.wj-pivotpanel .wj-marker {\n  position: absolute;\n  background-color: #0085c7;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.wj-pivotpanel .wj-listbox .wj-listbox-item .wj-glyph-filter {\n  cursor: default;\n  opacity: 0.5;\n}\n.wj-pivotpanel .wj-listbox .wj-listbox-item .wj-aggregate {\n  font-size: 80%;\n  opacity: 0.5;\n}\n/* _ListContextMenu */\n.context-menu {\n  font-size: 90%;\n  padding: 6px;\n}\n.menu-icon {\n  display: inline-block;\n  width: 1em;\n  margin-right: 6px;\n  opacity: .75;\n  color: #0000C0;\n}\n.menu-icon.menu-icon-remove {\n  color: #800000;\n  font-weight: bold;\n}\n/* PivotFieldEditor */\n.wj-pivotfieldeditor {\n  min-width: 400px;\n}\n.wj-pivotfieldeditor tr.wj-separator {\n  border-top: 10px solid transparent;\n}\n.wj-pivotfieldeditor td:first-child {\n  text-align: right;\n}\n/* PivotFilterEditor */\n.wj-pivotfiltereditor {\n  padding: 10px;\n  min-width: 230px;\n}\n.wj-pivotfiltereditor .wj-control {\n  margin-bottom: 6px;\n  width: 100%;\n}\n.wj-pivotfiltereditor .wj-listbox .wj-listbox-item label {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/* PivotGrid */\n.wj-pivotgrid .wj-colheaders .wj-cell.wj-header {\n  text-align: center;\n}\n.wj-pivotgrid .wj-cell.wj-aggregate {\n  font-weight: bold;\n}\n.wj-pivotgrid .wj-aggregate.wj-cell:not(.wj-header):not(.wj-group):not(.wj-state-selected):not(.wj-state-multi-selected) {\n  background-color: rgba(0, 133, 199, 0.15);\n  /* slightly highlight scrollable totals cells */\n}\n/* PivotChart */\n.wj-pivotchart {\n  position: relative;\n}\n.wj-pivotchart .wj-dropdown {\n  position: absolute;\n  margin-right: 15px;\n}\n/* dialogs */\n.wj-detaildialog .wj-flexgrid {\n  max-width: 800px;\n  max-height: 400px;\n}\n.wj-dialog-header {\n  background: rgba(0, 0, 0, 0.05);\n  font-weight: bold;\n  font-size: 120%;\n  padding: 1em;\n}\n.wj-dialog-footer {\n  text-align: right;\n  margin-top: 1em;\n}\n";
//# sourceMappingURL=Pivot.css.js.map