import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import ListItem from '@screen-components/List/item';

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

const List: React.FC<Props> = ({}: any) => {
  let {loading, data, error, fetchMore} = useQuery(GET_ROCKET_INVENTORY, {
    variables: {
      page: 1,
      pageSize: 10,
      tagFilters: [],
      premiumOnly: false,
      includePremiumPreview: false,
    },
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
        style={styles.listWrapper}
        data={data.listRecipes.recipes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ListItem recipe={item} />}
        onEndReached={() => fetchData()}
      />
    );
  };

  console.log('in list', loading, data, error);
  return (
    <View style={styles.wrapper}>
      {data && data.listRecipes && data.listRecipes.recipes
        ? renderList()
        : null}
    </View>
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
