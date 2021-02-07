import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ApolloProvider} from '@apollo/client';
import client from '@services/apollo';
import Detail from './index';

const recipe: Recipe = {
  id: 'wp-us-recipe-644924',
  isMembersOnly: false,
  title: 'Keto Asian meatballs with Thai basil sauce',
  description:
    'All right. Let’s talk floral Thai basil flavor. Let’s talk spicy ginger. Let’s talk tangy pickled onions. Wait. Enough talk! Let’s make and eat these tender and tasty Asian-style meatballs!',
  rating: 5,
  modifiedAt: '2020-10-20T00:16:54Z',
  slug: 'keto-asian-meatballs-thai-basil-sauce',
  nutrition: {
    values: {
      carbs: 8.7311134599156,
      fat: 78.788152236287,
      protein: 28.807684599156,
      fiber: 4.58825,
      calories: 868.05756329114,
    },
    percentages: {
      carbs: 4.06,
      fat: 82.52,
      protein: 13.41,
    },
  },
  time: {
    preparation: 25,
    cook: 15,
  },
  difficulty: {
    rating: 'medium',
    value: 3,
  },
  images: {
    hz: '/wp-content/uploads/2017/03/DD-381.jpg',
    vt: '/wp-content/uploads/2017/03/DD-381-2.jpg',
    brightness: 'LIGHTER',
  },
  tags: [
    {
      id: 'wp-us-tag-287',
      type: 'recipe_type',
      title: 'Meal',
    },
    {
      id: 'wp-us-tag-410',
      type: 'recipe_tag',
      title: 'family-friendly',
    },
    {
      id: 'wp-us-tag-446',
      type: 'recipe_tag',
      title: 'Cabbage',
    },
    {
      id: 'wp-us-tag-572',
      type: 'recipe_tag',
      title: 'ground beef',
    },
    {
      id: 'wp-us-tag-316',
      type: 'recipe_content',
      title: 'Pork',
    },
    {
      id: 'wp-us-tag-367',
      type: 'recipe_content',
      title: 'Dairy Free',
    },
    {
      id: 'wp-us-tag-1',
      type: 'energy',
      title: 'keto',
    },
    {
      id: 'wp-us-tag-6',
      type: 'ease',
      title: 'medium',
    },
  ],
  instructionSections: [
    {
      title: '',
      header: {
        text: '',
      },
      footer: {
        text: '',
      },
      steps: [
        'Pre-heat the oven to 200°F (100°C).',
        'In a small bowl, whisk together the rice vinegar, water, and salt. Add the scallions and chili pepper. Mix together, and set aside.',
        'Mix the mayonnaise, Thai basil, and radishes together in a small bowl. Season with salt and pepper, and set aside.',
        'In a large bowl, gently mix together the meatball ingredients. Moisten hands with water, and shape into 1" (2.5 cm) balls, making about 8 meatballs per serving.',
        'Melt the butter or coconut oil in a large frying pan, over medium heat. Fry the meatballs for about 7 - 10 minutes, or until cooked through, and golden brown. Place in an oven-proof dish, cover with foil and move to the oven to keep warm.',
        'Using the same pan, melt the butter or coconut oil over medium-high heat. Add the shredded cabbage, salt, and pepper. Sautée until lightly browned, and tender.',
        'Place the cabbage on each plate, top with meatballs, and serve with the Thai basil sauce and pickled onions, on the side.',
      ],
    },
  ],
};

it('renders Detail correctly', () => {
  renderer.create(
    <ApolloProvider client={client}>
      <Detail route={{params: {recipe}}} />
    </ApolloProvider>,
  );
});
