// 一覧ページ　'/'にアクセスしたときに表示されるページ

import { Switch, Box, FormControl, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";

export default function List() {
  const [height, setHeight] = useState(window.innerHeight - 205);
  const {
    scrollRef,
    onScroll,
    scrollToBottom,
    isOnBottom,
    unviewedMessageCount,
  } = useAppContext();



  return (
      <Box
        bg="white"
        p="5"
        overflow="auto"
        borderRadius="10px"
        height={height}
        onScroll={onScroll}
        ref={scrollRef}
      >

        <div>一覧だよ</div>
      </Box>    
  );
}
