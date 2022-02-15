import { StyleSheet, Dimensions } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const BLACK = "#f5f6fa";
const WHITE = "#2f3640";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  interface RowProps {
    row: number;
  }
  interface SquaraProps extends RowProps {
    col: number;
  }
  const Squara = ({ row, col }: SquaraProps) => {
    const offset = row % 2 === 0 ? 1 : 0;
    const color = (col + offset) % 2 === 0 ? BLACK : WHITE;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: (col + offset) % 2 === 0 ? WHITE : BLACK,
          padding: 4,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: color,
            fontWeight: "500",
            opacity: col=== 0 ? 1 : 0,
          }}
        >
          {8 - row}
        </Text>
        <Text
          style={{
            color: color,
            fontWeight: "500",
            alignSelf: "flex-end",
            opacity: row === 7 ? 1 : 0,
          }}
        >
          {String.fromCharCode("a".charCodeAt(0) + col)}
        </Text>
      </View>
    );
  };
  const Row = ({ row }: RowProps) => {
    return (
      <View style={{ flexDirection: "row", flex: 1 }}>
        {new Array(8).fill(0).map((_, col) => (
          <Squara row={row} col={col} key={col} />
        ))}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ width: width , height: width  }}>
        {new Array(8).fill(0).map((_, row) => (
          <Row key={row} row={row} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
