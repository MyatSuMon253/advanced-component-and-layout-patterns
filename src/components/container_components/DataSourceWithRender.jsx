import { useEffect, useState } from "react";

const DataSourceWithRender = ({ getData = () => {}, render }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setResource(response);
    })();
  }, []);

  return render(resource);
};

export default DataSourceWithRender;
