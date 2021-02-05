import 'react-native';
import React from 'react';
import {View} from 'react-native';
import renderer from 'react-test-renderer';
import InstructionItem from './item';
import InstructionList from './list';
import {Instruction} from '@services/interfaces';

const instruction1: Instruction = {
  title: '',
  steps: [
    'Pre-heat the oven to 200°F (100°C).',
    'In a small bowl, whisk together the rice vinegar, water, and salt. Add the scallions and chili pepper. Mix together, and set aside.',
    'Mix the mayonnaise, Thai basil, and radishes together in a small bowl. Season with salt and pepper, and set aside.',
    'In a large bowl, gently mix together the meatball ingredients. Moisten hands with water, and shape into 1" (2.5 cm) balls, making about 8 meatballs per serving.',
    'Melt the butter or coconut oil in a large frying pan, over medium heat. Fry the meatballs for about 7 - 10 minutes, or until cooked through, and golden brown. Place in an oven-proof dish, cover with foil and move to the oven to keep warm.',
    'Using the same pan, melt the butter or coconut oil over medium-high heat. Add the shredded cabbage, salt, and pepper. Sautée until lightly browned, and tender.',
    'Place the cabbage on each plate, top with meatballs, and serve with the Thai basil sauce and pickled onions, on the side.',
  ],
};

const instruction2: Instruction = {
  title: '',
  steps: [
    'Mix the mayonnaise and mustard together in a small bowl. Set aside.',
    'Place the eggs in a saucepan, and fill with water, about 1" ( 2.5 cm) higher than the eggs. Cover, and bring to a boil over high heat. Once boiling, remove from heat, and leave in water to cook, based on preference: 10-12 minutes (hard-boiled), or 6-8 minutes (medium-boiled), or 5-6 minutes (soft-boiled). Meanwhile, set aside a bowl filled with ice-cold water.',
    'Using a slotted spoon, place eggs in the ice water bath for 3-5 minutes before peeling. Crack eggs on a hard surface, peel under running water, and then slice into halves or quarters. Set aside.',
    'Heat the oil in a large frying pan over medium heat. Add the sliced garlic and fry until golden, turning occasionally. Remove the garlic from the pan, and place on a paper towel to crisp. Save the garlic-infused oil in the pan.',
    'Increase the temperature to medium-high, add the butter, and stir to combine with the olive oil. Add the broccoli, kale, and scallions. Using tongs, toss to coat and fry for about 5 minutes, or until slightly tender.',
    'Season the warm kale and broccoli salad with salt and pepper. Plate with the eggs, avocado, and mustard mayonnaise. Finish the dish with a pinch of red chili flakes, and fried garlic slices for extra flavor and crunch.',
  ],
};

const instructions = [instruction1, instruction2];

it('Instruction Item 1 render correctly', () => {
  renderer.create(
    <View>
      {instruction1.steps.map((item, index) => (
        <InstructionItem key={index} step={index + 1} instruction={item} />
      ))}
    </View>,
  );
});

it('Instruction Item 2 render correctly', () => {
  renderer.create(
    <View>
      {instruction2.steps.map((item, index) => (
        <InstructionItem key={index} step={index + 1} instruction={item} />
      ))}
    </View>,
  );
});

it('Instruction List render correctly', () => {
  renderer.create(<InstructionList instructions={instructions} />);
});

it('Empty Instruction List render correctly', () => {
  renderer.create(<InstructionList instructions={[]} />);
});
