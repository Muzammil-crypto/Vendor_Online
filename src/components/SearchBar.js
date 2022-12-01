import * as React from "react";
import { Searchbar } from "react-native-paper";
import { theme } from "../core/theme";

const SearchbarComp = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      iconColor={theme.colors.primary}
      cursorColor={theme.colors.primary}
      placeholder="Search here"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchbarComp;
