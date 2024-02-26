export function NewItem() {
  return (
    <>
      <form className="newItem">
        <input type="text" name="title" placeholder="To do"></input>
        <input type="text" name="desc" placeholder="Tell me more"></input>
        <input type="text" name="author" placeholder="Author"></input>
        <input type="submit" name="submit"></input>
      </form>
    </>
  );
}
