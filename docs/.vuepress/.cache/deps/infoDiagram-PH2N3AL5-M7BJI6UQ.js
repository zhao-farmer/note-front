import {
  parse
} from "./chunk-WB2SIIBS.js";
import "./chunk-QK7MTDUM.js";
import "./chunk-QXZ7S4OM.js";
import "./chunk-BVEACNBO.js";
import "./chunk-GZXFJ7PQ.js";
import "./chunk-42QI5VYP.js";
import "./chunk-SD2647UO.js";
import "./chunk-THFKS2XR.js";
import {
  package_default
} from "./chunk-JT737LX2.js";
import {
  selectSvgElement
} from "./chunk-TJMBBVZF.js";
import "./chunk-J7EDJCMR.js";
import "./chunk-2VRVB2MD.js";
import {
  __name,
  configureSvgSize,
  log
} from "./chunk-TXJTAHMS.js";
import "./chunk-4UTD2NOI.js";
import "./chunk-FDBJFBLO.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-PH2N3AL5.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = { version: package_default.version };
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-PH2N3AL5-M7BJI6UQ.js.map
