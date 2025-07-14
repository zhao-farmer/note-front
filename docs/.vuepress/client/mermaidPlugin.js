function mermaidPlugin(md) {
    const defaultFence = md.renderer.rules.fence
    
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
      const token = tokens[idx]
      const lang = token.info.trim()
      
      if (lang === 'mermaid') {

        const id = 'mermaid-' + Math.random().toString(36).substring(2, 9);
        return `
          <code>
          <pre class="mermaid" id="${id}">
            ${token.content}
          </pre>
          </code>
        `;
      }
      return defaultFence(tokens, idx, options, env, self)
    }
    return md
}

export default mermaidPlugin