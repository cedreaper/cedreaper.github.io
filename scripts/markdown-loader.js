async function loadMarkdown(file) {
  try {
    const response = await fetch(file);
    const markdown = await response.text();
    document.getElementById('content').innerHTML = marked.parse(markdown);
  } catch (err) {
    document.getElementById('content').innerHTML =
      '<p>Error loading content.</p>';
  }
}
