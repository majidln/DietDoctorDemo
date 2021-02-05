import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import HomeList from '@screen-components/Home/list';

const GET_ROCKET_INVENTORY = gql`
  fragment NutritionFragment on Nutrition {
    values {
      carbs
      fat
      protein
      fiber
      calories
    }
    percentages {
      carbs
      fat
      protein
    }
  }

  fragment BaseRecipe on Recipe {
    id
    isMembersOnly
    title
    description
    rating
    modifiedAt
    slug
    nutrition {
      ...NutritionFragment
    }
    time {
      preparation
      cook
    }
    difficulty {
      rating
      value
    }
    images {
      hz
      vt
      brightness
    }
    tags {
      id
      type
      title
    }
    servings {
      default
      allowed
    }
    strictness {
      rating
      value
    }
    instructionSections {
      title
      header {
        text
      }
      footer {
        text
      }
      steps
    }
    tips {
      header
      content
    }
    videos {
      id
      type
    }
  }

  query GetRecipes(
    $page: Int
    $pageSize: Int
    $tagFilters: [String]
    $premiumOnly: Boolean
    $includePremiumPreview: Boolean
  ) {
    listRecipes(
      input: {
        page: $page
        pageSize: $pageSize
        tagFilters: $tagFilters
        premiumOnly: $premiumOnly
        includePremiumPreview: $includePremiumPreview
      }
    ) {
      recipes {
        ...BaseRecipe
      }
      totalSize
      nextPage
    }
  }
`;

export interface Props {}

const Home: React.FC<Props> = ({navigation}: any) => {
  let {data} = useQuery(GET_ROCKET_INVENTORY, {
    variables: {
      page: 1,
      pageSize: 10,
      tagFilters: [],
      premiumOnly: false,
      includePremiumPreview: false,
    },
  });

  return (
    <View style={styles.wrapper}>
      {data && data.listRecipes && data.listRecipes.recipes ? (
        <View>
          <View style={styles.listToolbar}>
            <Text style={styles.title}>New Recipes</Text>
            <TouchableOpacity onPress={() => navigation.navigate('List')}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <HomeList recipes={data.listRecipes.recipes} />
        </View>
      ) : null}
    </View>
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
