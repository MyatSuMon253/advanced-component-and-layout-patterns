import { useEffect, useState } from "react";

const includeUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    }, [userId]);

    return <Component {...props} user={user} />;
  };
};

export default includeUser;
