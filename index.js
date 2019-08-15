import SNIPS from './snippet-data.js';

const renderSnips = snippets => {
  // map over the SNIPS
  const snippetHTML = snippets
    .map(
      snippet => /* html */ `<div class="snip">
  <div class="text">
    <h2>${snippet.title}</h2>
    <p>${snippet.description}</p>
  </div>
  <pre>
    <code class="${snippet.language}">${he.encode(snippet.code)}</code>
  </pre>
</div>`
    )
    .join('');
  // transform that snip into the HTML

  // put that HTML right into the #snippets

  console.log(snippetHTML);

  const snippetsElm = document.getElementById('snippets');

  snippetsElm.innerHTML = snippetHTML;
  console.log(snippetsElm);
};

renderSnips(SNIPS);

hljs.initHighlightingOnLoad();
