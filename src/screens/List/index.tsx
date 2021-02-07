import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container} from '@atomic-components/index';
import ListItem from '@screen-components/List/item';
import {useGetRecipes} from '@hooks/useGetRecipes';
import {RecipeResponse} from '@services/interfaces';

const List: React.FC = () => {
  const navigation = useNavigation();
  const {
    data,
    fetchMore,
  }: {data: RecipeResponse; fetchMore: Function} = useGetRecipes({
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
        onEndReached={() => fetchData()}
        onEndReachedThreshold={1}
        renderItem={({item, index}) => (
          <ListItem
            testID={'listRecipes-' + index}
            onPress={() => navigation.navigate('Detail', {recipe: item})}
            recipe={item}
          />
        )}
      />
    );
  };

  return (
    <Container testID="listView" style={styles.wrapper}>
      {data?.listRecipes?.recipes ? renderList() : null}
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
