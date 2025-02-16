import CompoundCard from "./components/compound_components/compound-card";

const App = () => {
  return (
    <CompoundCard>
      <CompoundCard.Header>
        <h1>Header</h1>
      </CompoundCard.Header>
      <CompoundCard.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut quod
        ipsam sapiente quas nulla ducimus deleniti nemo quibusdam magnam laborum
        est, accusamus reiciendis. Similique, est quisquam velit soluta,
        inventore rerum corrupti vero voluptate doloremque eaque neque assumenda
        asperiores voluptatum placeat expedita? Quo quibusdam obcaecati, iusto
        animi dolorum sequi nihil ipsam provident quidem cum nobis distinctio
        repudiandae rerum tenetur dignissimos, sed ipsum facere maiores
        perspiciatis odit laudantium. Veritatis, cumque. Perferendis eum
        veritatis, similique eligendi reiciendis enim fuga repellendus doloribus
        quis mollitia voluptates repellat voluptatem dolores nihil hic magnam
        adipisci corrupti libero officiis incidunt. Tenetur id labore eum
        perferendis, repellat corporis.
      </CompoundCard.Body>
      <CompoundCard.Footer>
        <>
          <button>ok</button>
          <button>cancel</button>
        </>
      </CompoundCard.Footer>
    </CompoundCard>
  );
};

export default App;
