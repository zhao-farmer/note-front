import Mermaid from "E:/study/blog/note-front/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";

export default {
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
};
