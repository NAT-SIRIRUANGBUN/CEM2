/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  characterMap: () => characterMap,
  default: () => SymbolsPrettifier3,
  getCharacterRegex: () => getCharacterRegex
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// src/editor/state.ts
var import_language = require("@codemirror/language");
var import_state = require("@codemirror/state");
var SymbolsPosition = class extends import_state.RangeValue {
  constructor(symbol, prettified) {
    super();
    this.symbol = symbol;
    this.prettified = prettified;
  }
  eq(other) {
    return other instanceof SymbolsPosition && other.symbol === this.symbol && other.prettified === this.prettified;
  }
};
var allowedTypes = [
  "link-alias",
  "comment",
  "header",
  "strong",
  "em",
  "strikethrough",
  "quote",
  "link",
  "list-1",
  "list-2",
  "list-3",
  "highlight",
  "hmd-footref2",
  "footref"
];
var excludedTypes = ["formatting", "comment-start", "comment-end"];
function iterateSymbolsRanges(state, from, to, addToRange) {
  const saveToRange = (from2, to2) => {
    var _a, _b;
    const text = state.doc.sliceString(from2, to2);
    if (!text.trim()) {
      return;
    }
    for (const { 0: symbol, index: offset } of text.matchAll(getCharacterRegex())) {
      const prettified = (_b = (_a = characterMap[symbol]) == null ? void 0 : _a.transform) != null ? _b : symbol;
      addToRange(from2 + (offset != null ? offset : 0), from2 + (offset != null ? offset : 0) + symbol.length, new SymbolsPosition(symbol, prettified));
    }
  };
  let prevTo = from;
  (0, import_language.syntaxTree)(state).iterate({
    from: from - 1,
    to: to + 1,
    enter: ({ type, from: from2, to: to2 }) => {
      if (type.name === "Document") {
        return;
      }
      if (from2 !== prevTo) {
        saveToRange(prevTo, from2);
      }
      prevTo = to2;
      const nodeProps = type.prop(import_language.tokenClassNodeProp);
      if (!nodeProps) {
        return;
      }
      const props = new Set(nodeProps == null ? void 0 : nodeProps.split(" "));
      if (excludedTypes.every((t) => !props.has(t)) && allowedTypes.some((t) => props.has(t))) {
        saveToRange(from2, to2);
      }
    }
  });
  if (prevTo !== to) {
    saveToRange(prevTo, to);
  }
}
function getSymbolsPositionField(plugin) {
  return import_state.StateField.define({
    create: (state) => {
      const rangeSet = new import_state.RangeSetBuilder();
      iterateSymbolsRanges(state, 0, state.doc.length, rangeSet.add.bind(rangeSet));
      return rangeSet.finish();
    },
    update: (value, transaction) => {
      if (!transaction.docChanged) {
        return value;
      }
      value = value.map(transaction.changes);
      const changedLines = [];
      transaction.changes.iterChangedRanges((_f, _t, from, to) => {
        changedLines.push([
          transaction.state.doc.lineAt(from).number,
          transaction.state.doc.lineAt(to).number
        ]);
      });
      const newRanges = [];
      for (const [start, end] of changedLines) {
        const { from } = transaction.state.doc.line(start);
        const { to } = transaction.state.doc.line(end);
        value = value.update({
          filterFrom: from,
          filterTo: to,
          filter: () => false
        });
        iterateSymbolsRanges(transaction.state, from, to, (from2, to2, value2) => {
          newRanges.push(value2.range(from2, to2));
        });
      }
      value = value.update({ add: newRanges });
      return value;
    }
  });
}

// src/editor/plugin.ts
var import_view3 = require("@codemirror/view");

// src/editor/decoration.ts
var import_view2 = require("@codemirror/view");

// src/editor/widget.ts
var import_view = require("@codemirror/view");
var SymbolWidget = class extends import_view.WidgetType {
  constructor(symbol, plugin) {
    super();
    this.symbol = symbol;
    this.plugin = plugin;
  }
  eq(other) {
    return other instanceof SymbolWidget && other.symbol === this.symbol;
  }
  toDOM(view) {
    const wrapper = createSpan({
      cls: "cm-sp-icon"
    });
    wrapper.append(this.symbol);
    return wrapper;
  }
  ignoreEvent(event) {
    return false;
  }
};

// src/editor/decoration.ts
var import_obsidian = require("obsidian");
function symbols(view, plugin) {
  const symbolsField = view.state.field(plugin.symbolsPositionField);
  const cursor = view.state.selection.main.head;
  const decorations = [];
  for (const { from, to } of view.visibleRanges) {
    symbolsField.between(from, to, (from2, to2, { symbol, prettified }) => {
      const isNearCursor = cursor >= from2 && cursor <= to2;
      const widget = new SymbolWidget(isNearCursor ? symbol : prettified, plugin);
      const spec = { widget, side: -1 };
      if (view.state.field(import_obsidian.editorLivePreviewField)) {
        if (isNearCursor) {
          for (let i = 0; i < symbol.length; i++) {
            decorations.push(import_view2.Decoration.replace({
              widget: new SymbolWidget(symbol[i], plugin),
              inclusive: true
            }).range(from2 + i, from2 + i + 1));
          }
        } else {
          decorations.push(import_view2.Decoration.replace(spec).range(from2, to2));
        }
      }
    });
  }
  return import_view2.Decoration.set(decorations, true);
}

// src/editor/plugin.ts
var import_obsidian2 = require("obsidian");
function getSymbolsLivePreviewPlugin(plugin) {
  class SymbolsPlugin {
    constructor(view) {
      this.plugin = plugin;
      this.decorations = symbols(view, plugin);
    }
    update(update) {
      const previousMode = update.startState.field(import_obsidian2.editorLivePreviewField);
      const currentMode = update.state.field(import_obsidian2.editorLivePreviewField);
      if (update.docChanged || update.viewportChanged || update.selectionSet || previousMode !== currentMode) {
        this.decorations = symbols(update.view, plugin);
      }
    }
  }
  return import_view3.ViewPlugin.fromClass(SymbolsPlugin, {
    eventHandlers: {},
    decorations: (v) => v.decorations,
    provide: (plugin2) => import_view3.EditorView.atomicRanges.of((view) => {
      const value = view.plugin(plugin2);
      return value ? value.decorations : import_view3.Decoration.none;
    })
  });
}

// src/markdown/processor.ts
function symbolsPostProcessor(plugin) {
  return (el) => {
    var _a;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_ALL, {
      acceptNode: (node) => {
        switch (node.nodeName) {
          case "CODE":
          case "MJX-CONTAINER":
            return NodeFilter.FILTER_REJECT;
          case "#text": {
            if (node.nodeValue && getCharacterRegex().test(node.nodeValue)) {
              return NodeFilter.FILTER_ACCEPT;
            } else {
              return NodeFilter.FILTER_REJECT;
            }
          }
          default:
            return NodeFilter.FILTER_SKIP;
        }
      }
    });
    let currentNode = walker.currentNode;
    while (currentNode) {
      if (currentNode.nodeType === 3) {
        const textNode = currentNode;
        for (const { text: pattern } of [
          ...textNode.wholeText.matchAll(getCharacterRegex())
        ].sort((a, b) => b.index - a.index).map((arr) => ({ text: arr[0], index: arr.index }))) {
          const symbol = (_a = characterMap[pattern]) == null ? void 0 : _a.transform;
          if (!symbol) {
            continue;
          }
          if (textNode.textContent) {
            textNode.textContent = textNode.textContent.replace(pattern, symbol);
          }
        }
      }
      currentNode = walker.nextNode();
    }
  };
}

// src/main.ts
var characterMap = {
  "->": { transform: "\u2192" },
  "<-": { transform: "\u2190" },
  "<->": { transform: "\u2194" },
  "<=>": { transform: "\u21D4" },
  "<=": { transform: "\u21D0" },
  "=>": { transform: "\u21D2" },
  "--": { transform: "\u2013" },
  "!=": { transform: "\u2260" },
  "===": { transform: "\u2261" }
};
function getCharacterRegex() {
  return new RegExp("(->|<-|<->|<=>|<=|=>|--|!=|===)", "g");
}
var SymbolsPrettifier3 = class extends import_obsidian3.Plugin {
  constructor() {
    super(...arguments);
    this.symbolsPositionField = getSymbolsPositionField(this);
  }
  onload() {
    console.log("loading symbols prettifier");
    this.registerEditorExtension([
      this.symbolsPositionField,
      getSymbolsLivePreviewPlugin(this)
    ]);
    this.registerMarkdownPostProcessor(symbolsPostProcessor(this));
  }
  onunload() {
    console.log("unloading symbols prettifier");
  }
};

/* nosourcemap */