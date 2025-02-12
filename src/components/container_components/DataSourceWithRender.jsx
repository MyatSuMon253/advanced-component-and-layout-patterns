import { useEffect, useState } from "react";

const DataSourceWithRender = ({ getData = () => {}, render }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      console.log(response);
      setResource(response.data);
    })();
  }, []);

  return render(resource);
};

export default DataSourceWithRender;
