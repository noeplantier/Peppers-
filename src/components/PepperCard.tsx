import * as React from 'react';
import { Box, Image, Text, VStack, HStack } from '@chakra-ui/react-native';
import { Pepper } from '../types/Pepper';

interface PepperCardProps {
  pepper: Pepper;
  onPress: (pepper: Pepper) => void;
}

export function PepperCard({ pepper, onPress }: PepperCardProps) {
  return (
    <Box
      bg="white"
      rounded="lg"
      shadow={2}
      p={4}
      m={2}
      onTouchEnd={() => onPress(pepper)}
    >
      <HStack space={4} alignItems="center">
        <Image
          source={{ uri: pepper.image }}
          alt={pepper.name}
          size="md"
          rounded="md"
        />
        <VStack flex={1}>
          <Text fontSize="lg" fontWeight="bold">
            {pepper.name}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {pepper.scientificName}
          </Text>
          <Text fontSize="sm" color="red.500">
            {pepper.scovilleHeatUnits.toLocaleString()} SHU
          </Text>
        </VStack>
      </HStack>

      
      