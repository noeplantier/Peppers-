import * as React from 'react';
// import { ScrollView } from '@nativescript/core';
import { Box, Image, Text, VStack, Heading, ScrollView } from '@chakra-ui/react-native';
import { RouteProp } from '@react-navigation/native';
import { MainStackParamList } from '../NavigationParamList';

type PepperDetailScreenProps = {
  route: RouteProp<MainStackParamList, 'PepperDetail'>;
};

export function PepperDetailScreen({ route }: PepperDetailScreenProps) {
  const { pepper } = route.params;

  return (
 
    <ScrollView>
      <Box safeArea p={4}>
        <VStack space={4}>
          <Image
            source={{ uri: pepper.image }}
            alt={pepper.name}
            size="2xl"
            rounded="lg"
          />
          <Heading size="xl">{pepper.name}</Heading>
          <Text fontSize="md" fontStyle="italic">
            {pepper.scientificName}
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="red.500">
            {pepper.scovilleHeatUnits.toLocaleString()} Scoville Heat Units
          </Text>
          <Text fontSize="md">{pepper.description}</Text>
          <Text fontSize="md">
            <Text fontWeight="bold">Origin: </Text>
            {pepper.origin}
          </Text>
        </VStack>
      </Box>
    </ScrollView>
  );
}