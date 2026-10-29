export interface PortfolioProject {
  id: string
  number: string
  name: string
  category: string
  summary: string
  purpose: string
  learning: string
  status: string
  stack: string[]
  features: string[]
}

export const projects: PortfolioProject[] = [
  {
    id: 'prime-video-clone',
    number: '01',
    name: 'Prime Video Clone',
    category: 'Frontend Development · Streaming Platform Interface',
    summary:
      'An unofficial educational frontend project exploring streaming interface design and content organization.',
    purpose:
      'Study how a streaming platform presents its content and guides browsing through layout, visual hierarchy, and navigation.',
    learning:
      'Use interface study to develop a better understanding of frontend structure, content grouping, and responsive layout.',
    status: 'Implementation status to be confirmed',
    stack: ['Technology stack to be confirmed'],
    features: ['Implementation details to be confirmed'],
  },
  {
    id: 'pasta-lane',
    number: '02',
    name: 'The Pasta Lane — Italian Bistro',
    category: 'Web Development · Restaurant Website Concept',
    summary:
      'A restaurant website concept bringing together a bistro identity and a planned visitor journey from menu discovery to reservation information.',
    purpose:
      'Plan a clear, welcoming restaurant website with space for the identity, menu, about story, location, and a reservation interface.',
    learning:
      'Explore how typography, information hierarchy, and page structure can support a coherent restaurant experience.',
    status: 'Website concept · implementation status to be confirmed',
    stack: ['Technology stack to be confirmed'],
    features: [
      'Planned scope: restaurant identity, menu, about, location, and reservation interface',
      'Implementation details to be confirmed',
    ],
  },
]
