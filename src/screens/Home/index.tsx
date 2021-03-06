import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Container} from '@atomic-components/index';
import HomeList from '@screen-components/Home/list';
import {Recipe, RecipeResponse} from '@services/interfaces';
import t from '@services/translate';
import {useGetRecipes} from '@hooks/useGetRecipes';

export interface Props {}

const Home: React.FC<Props> = ({navigation}: any) => {
  const {data}: {data: RecipeResponse} = useGetRecipes({
    page: 1,
    pageSize: 5,
    tagFilters: [],
    premiumOnly: false,
    includePremiumPreview: false,
  });
  return (
    <Container testID="homeView">
      {data?.listRecipes?.recipes ? (
        <View>
          <View style={styles.listToolbar}>
            <Text testID="newLabel" style={styles.title}>
              {t.t('home.new')}
            </Text>
            <TouchableOpacity
              testID="viewAllBtn"
              onPress={() => navigation.navigate('List')}>
              <Text style={styles.viewAllText}>{t.t('home.viewAll')}</Text>
            </TouchableOpacity>
          </View>
          <HomeList
            recipes={data.listRecipes.recipes}
            onPress={(recipe: Recipe) => {
              console.log('on press home');
              navigation.navigate('Detail', {recipe});
            }}
          />
        </View>
      ) : null}
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  listToolbar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  viewAllText: {
    color: '#0000A0',
  },
});
