import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Container} from '@atomic-components';
import ListItem from '@screen-components/List/item';
import {useGetRecipes} from '@src/hooks/useGetRecipes';

export interface Props {}

const List: React.FC<Props> = ({navigation}) => {
  const {data, fetchMore} = useGetRecipes({
    page: 1,
    pageSize: 10,
    tagFilters: [],
    premiumOnly: false,
    includePremiumPreview: false,
  });

  const fetchData = () => {
    fetchMore({
      variables: {
        page: data.listRecipes.nextPage,
      },
    });
  };

  const renderList = () => {
    return (
      <FlatList
        testID="listRecipes"
        style={styles.listWrapper}
        data={data.listRecipes.recipes}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
          <ListItem
            testID={'listRecipes-' + index}
            onSelect={() => navigation.navigate('Detail', {recipe: item})}
            recipe={item}
          />
        )}
        onEndReached={() => fetchData()}
      />
    );
  };

  return (
    <Container testID="listView" style={styles.wrapper}>
      {data && data.listRecipes && data.listRecipes.recipes
        ? renderList()
        : null}
    </Container>
  );
};

export default List;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  listWrapper: {
    flex: 1,
  },
});
