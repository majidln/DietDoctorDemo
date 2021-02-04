import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gql, useQuery} from '@apollo/client';

interface RocketInventory {
  id: number;
  model: string;
  year: number;
  stock: number;
}

interface RocketInventoryData {
  rocketInventory: RocketInventory[];
}

interface RocketInventoryVars {
  year: number;
}

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
  let {loading, data, error} = useQuery(GET_ROCKET_INVENTORY, {
    variables: {
      page: 1,
      pageSize: 5,
      tagFilters: [],
      premiumOnly: false,
      includePremiumPreview: false,
    },
  });

  console.log('in list', loading, data, error);
  return (
    <View style={styles.wrapper}>
      <Text>In list</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
