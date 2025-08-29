function render() {
  document.getElementById("book-list").innerHTML = getBookListTemplate();
}

function getBookListTemplate() {
  return `
      <div>
<h2 class="book_title">Buchtitel</h2>
<hr>
<img src="./img/white_wolf_book.svg" alt="Buchcover mit weißem Wolf" class="img_book_cover">
<hr>
<table>
    <tr>
        <th>Price</th>
        <td>19,99 €</td>
    </tr>
    <tr>
        <th>Author</th>
        <td>Charlotte Picon</td>
    </tr>
    <tr>
        <th>Year</th>
        <td>2024</td>
    </tr>
    <tr>
        <th>Genre</th>
        <td>Fantasy</td>
    </tr>
</table>
<hr>
<h3 class="title_comment_area">Kommentare</h3>
<div class="comments_scroll">
  <table class="comments_table">
    <tr>
      <th>Leser 1:</th>
      <td>Ein spannendes Buch … hat mich richtig gepackt ... würde ich immer wieder lesen! Klare Herzensempfehlung!</td>
    </tr>
    <tr>
      <th>Leser 2:</th>
      <td>Sehr gut geschrieben … vielleicht ist die Story etwas zu kitschig, aber die meisten Menschen scheinen das zu lieben.</td>
    </tr>
  </table>
</div>
</div>
<form>
  <label>
    <br>
    <div class="btn_beside_comment">
      <textarea name="comment_book" rows="1" required
        placeholder="write your comment ♥️"></textarea><br>
      <button type="submit" class="send_btn">➤</button>
    </div>
  </label>
</form>
    `;
}
