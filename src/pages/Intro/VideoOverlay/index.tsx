import React from 'react'

import { VideoOverlayContent } from './VideoOverlayContent'
import { VideoOverlayProvider } from './VideoOverlayProvider'

const greetingList = [
  'intro.greeting-developer',
  'intro.greeting-engineer',
  'intro.greeting-architect',
  'intro.greeting-tester',
  'intro.greeting-mentor',
  'intro.greeting-leader',
]

export const VideoOverlay = () => (
  <VideoOverlayProvider {...{ greetingList }}>
    <VideoOverlayContent />
  </VideoOverlayProvider>
)
