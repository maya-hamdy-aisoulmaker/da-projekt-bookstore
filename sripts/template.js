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
<table class="info_table">
    <tr>
        <th>Price</th>
        <td>19,99 €</td>
<th>

<button class="heart">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 21s-6-4.35-9-8.28C-1.5 7.5 4.5 3 8.57 6.33L12 9.2l3.43-2.87C19.5 3 25.5 7.5 21 12.72 18 16.65 12 21 12 21z"/>
</svg>
<span class="likes-number">3583</span>
</button>
</th>    
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
      <td>Sehr gut geschrieben … ich fühlte mich in den Roman hineingezogen und konnte das Buch nicht mehr aus den Händen legen.</td>
    </tr>
  </table>
</div>
</div>
<form>
  <label>
    <br>
    <div class="btn_beside_comment">
      <textarea name="comment_book" rows="1" required
        placeholder="write your comment"></textarea><br>
      <button type="submit" class="send_btn">➤</button>
    </div>
  </label>
</form>
    `;
}
