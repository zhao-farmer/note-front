import {
  AbstractMermaidTokenBuilder,
  CommonValueConverter,
  EmptyFileSystem,
  InfoGeneratedModule,
  MermaidGeneratedSharedModule,
  __name,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject,
  lib_exports
} from "./chunk-THFKS2XR.js";

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-EXZZNE6F.mjs
var _a;
var InfoTokenBuilder = (_a = class extends AbstractMermaidTokenBuilder {
  constructor() {
    super(["info", "showInfo"]);
  }
}, __name(_a, "InfoTokenBuilder"), _a);
var InfoModule = {
  parser: {
    TokenBuilder: __name(() => new InfoTokenBuilder(), "TokenBuilder"),
    ValueConverter: __name(() => new CommonValueConverter(), "ValueConverter")
  }
};
function createInfoServices(context = EmptyFileSystem) {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule
  );
  const Info = inject(
    createDefaultCoreModule({ shared }),
    InfoGeneratedModule,
    InfoModule
  );
  shared.ServiceRegistry.register(Info);
  return { shared, Info };
}
__name(createInfoServices, "createInfoServices");

export {
  InfoModule,
  createInfoServices
};
//# sourceMappingURL=chunk-QK7MTDUM.js.map
