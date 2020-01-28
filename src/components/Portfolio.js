const Portfolio = () => (
  <section id="two">
    <h2>Recent Work</h2>

    <Gallery
      images={DEFAULT_IMAGES.map(
        ({ id, source, thumbnail, caption, description }) => ({
          source,
          thumbnail,
          caption,
          description,
        })
      )}
    />

    <ul className="actions">
      <li>
        <a href="#" className="button">
          Full Portfolio
        </a>
      </li>
    </ul>
  </section>
)

export default Portfolio
