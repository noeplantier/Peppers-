import * as React from 'react';
import { ScrollView } from '@nativescript/core';
import { peppers } from '../data/peppers';
import { PepperCard } from '../components/PepperCard';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Box safeArea p={4}>
        <VStack space={4}>
          <Heading size="xl" mb={4}>
            World of Peppers
          </Heading>
          {peppers
            .sort((a, b) => a.scovilleHeatUnits - b.scovilleHeatUnits)
            .map((pepper) => (
              <PepperCard
                key={pepper.id}
                pepper={pepper}
                onPress={(pepper) => 
                  navigation.navigate('PepperDetail', { pepper })
                }
              />
            ))}
        </VStack>
      </Box>
    </ScrollView>
  );
            }