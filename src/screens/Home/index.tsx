import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Container} from '@atomic-components';
import HomeList from '@screen-components/Home/list';
import {Recipe} from '@services/interfaces';
import t from '@services/translate';
import {useGetRecipes} from '@src/hooks/useGetRecipes';

export interface Props {}

const Home: React.FC<Props> = ({navigation}: any) => {
  const {data} = useGetRecipes({
    page: 1,
    pageSize: 10,
    tagFilters: [],
    premiumOnly: false,
    includePremiumPreview: false,
  });

  return (
    <Container style={styles.wrapper}>
      {data && data.listRecipes && data.listRecipes.recipes ? (
        <View>
          <View style={styles.listToolbar}>
            <Text style={styles.title}>{t.t('home.new')}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('List')}>
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
