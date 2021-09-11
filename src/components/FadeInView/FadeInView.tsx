import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export default function FadeInView(props: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
        fadeAnim, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true, 
        }
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View                 // Special animatable View
      style={{
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};