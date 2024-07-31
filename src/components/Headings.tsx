import Button from './Button';

const Headings = () => (
  <div>
    <h1>Heading 1</h1>
    <h2>heading 2</h2>
    <h3>heading 3</h3>
    Aria
    <div role="heading" aria-level={2}>
      heading 2
    </div>
    <h2 aria-level={2}>heading 3</h2>
    <article>
      <h2>Headings</h2>
      <div>
        <h1>Heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        Aria
        <div role="heading" aria-level={2}>
          heading 2
        </div>
      </div>
    </article>
    <span role="img" aria-label="mouse">
      &#x1f5b0;
    </span>
    <section>
      <h2>section 2</h2>
      <Button type="submit">Klik her</Button>
    </section>
    <section>
      <h2>section 3</h2>
      this is section 3
    </section>
  </div>
);
export default Headings;
