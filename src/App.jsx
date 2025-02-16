import NormalCard from "./components/compound_components/normal-card";

const App = () => {
  return (
    <NormalCard
      header={<h1>Header</h1>}
      footer={
        <>
          <button>ok</button>
          <button>cancel</button>
        </>
      }
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut quod ipsam
      sapiente quas nulla ducimus deleniti nemo quibusdam magnam laborum est,
      accusamus reiciendis. Similique, est quisquam velit soluta, inventore
      rerum corrupti vero voluptate doloremque eaque neque assumenda asperiores
      voluptatum placeat expedita? Quo quibusdam obcaecati, iusto animi dolorum
      sequi nihil ipsam provident quidem cum nobis distinctio repudiandae rerum
      tenetur dignissimos, sed ipsum facere maiores perspiciatis odit
      laudantium. Veritatis, cumque. Perferendis eum veritatis, similique
      eligendi reiciendis enim fuga repellendus doloribus quis mollitia
      voluptates repellat voluptatem dolores nihil hic magnam adipisci corrupti
      libero officiis incidunt. Tenetur id labore eum perferendis, repellat
      corporis.
    </NormalCard>
  );
};

export default App;
