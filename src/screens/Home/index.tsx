import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {PieChart, Container} from '@atomic-components/index';
import HomeList from '@screen-components/Home/list';
import {Recipe} from '@services/interfaces';
import t from '@services/translate';
import {useGetRecipes} from '@src/hooks/useGetRecipes';

export interface Props {}

const Home: React.FC<Props> = ({navigation}: any) => {
  const {data} = useGetRecipes({
    page: 1,
    pageSize: 2,
    tagFilters: [],
    premiumOnly: false,
    includePremiumPreview: false,
  });

  return (
    <Container testID="homeView" style={styles.wrapper}>
      <PieChart
        style={{width: '100%', height: 400, backgroundColor: 'gray'}}
        data={[20, 50, 30]}
        colors={['#ff0000', '#00ff00', '#0000ff']}
      />
      {data && data.listRecipes && data.listRecipes.recipes ? (
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
            onSelect={(recipe: Recipe) =>
              navigation.navigate('Detail', {recipe})
            }
          />
        </View>
      ) : null}
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
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
