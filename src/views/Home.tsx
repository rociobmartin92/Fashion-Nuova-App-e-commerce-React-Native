import React, { useEffect, useState } from "react";
import { Image, Box, ScrollView, Text, Center } from "native-base";
import { listData } from "../apis/list";

const Home = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetchList()
  //       .then((response) => setData(response))
  //       .catch((e) => console.log(e));
  //   }, []);

  return (
    <ScrollView flex={1}>
      <Center>
        {listData.map((el: any) => (
          <Center width={250} my={3} key={el.id}>
            <Image
              source={{
                uri: el.category.image,
              }}
              alt="Imagen"
              height={250}
              width={150}
            />
            <Text textAlign="center" fontSize={17}>
              {" "}
              {el.title}{" "}
            </Text>
          </Center>
        ))}
      </Center>
    </ScrollView>
  );
};

export default Home;
