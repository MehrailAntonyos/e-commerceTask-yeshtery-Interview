import { StyleSheet, Image} from 'react-native'

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Flex from './Flex';

const Tab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "transparent",
        tabBarInactiveTintColor: "transparent",
        tabBarLabel: 'Home',
        // headerStyle: {
        //   backgroundColor: '#f4511e',
        // },
        headerTintColor:'white',
         headerBackground: () => (
          <Image
            style={StyleSheet.absoluteFill}
            source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAgQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAACAwQAAQYFB//EABwQAQEBAQEBAAMAAAAAAAAAAAACAQMSESExYf/EABsBAAMBAAMBAAAAAAAAAAAAAAIDBAEABQYH/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAECERL/2gAMAwEAAhEDEQA/APzuTZ0mTYfQOump8HwTzxRzwN0Hh3NXywjlKvnJetDzlRzPnCueKJwm1RnLuY5uGfG3A9U4yRUl1KjcBstlVYifZBsqNkGyOaUZhG4HcO2Qbh0pshfxh/HRt48hB8J4P5lenl7FXNTzxNyVcgXTkyp54q5Ym5KuYLTs5U81Ekcz50u1RnJnxtxmYpzkO4HcHodcPzC9wusN0FDybkrcBRlA3D8GwDC+MaJ4nnqnmj56r4o/TzPlZyV803JVzc6OZUc1XPUsKI0PTs5VRp80lmjZpirOFHpisr8CzXDpkbmufXN1o5GBQtcoUMheg0eg07BkCzMYJ4Tnq3g+fy38r+Guszp5+ZX8lUI+WqY0zpucqY0+NSxRs03qjGVc0OaTTY8pzqnOVWUOaTTRmUIzyfmulZQvrY5wYdb65omwNF6ZX6LoeaPIfroWH0bwHLf0u4U+bz1bxp02NOlmX0uVHzSLnZ82omjc5WzRs0im/wCmzQun4iuaMm0k2ZNN6pzlXNGTSWaMyhSmcVZQspNlDyxyh8qMpvROW3oXWcN3SqpzbBVNlFIL6xXrHRdE/P41TypJOnRTo86dTx9CKPi/wh50fN/1RNG5i2bNm0U0bNf0c0ozFk2bNo5o2aMlU5ivKMyks0PKb0zyqmx5aXLFlN9M4q9ueyPTehTTOH7YNorbDtG5oKd6cJ9sIPXh8NnScHOvP50hkVTR00lnTJo/OjMxXNGzSOaNijJpRmLJs2bRzRuUZNKMxZNmTaSbHNi9GK8p3KTZY8pzrKo9N6J9O+h5oKb6D6B6c3T80nVM9MV9cM6DryOO4F3HnEsMzR5RWaLNHNG5PmjJpNOmZpk0flVNmTaWaMmhzR+armxzSWaMmh+h9VZRmUlmjZocobT8p30T6d9G5pVpvptov056UZpWqb6Yr2wwdeYdcZ58iCz9ix1mmwUjxmFDsjweMw4dkyTJZjIMzDccYzIKPHcdY7JdZzXWUZKrjMxgH//Z' }}
          />
        ),
      }}
     >
      <Tab.Screen name='Product Details' component={Flex}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tab

const styles = StyleSheet.create({})