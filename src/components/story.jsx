'use client'
import React from "react";
import Stories from 'react-insta-stories';

const stories = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
];

export default function InstaStories() {
  return (<Stories
    stories={stories}
    defaultInterval={1500}
    width="100vw"
    height="100vh"
  />);
}
