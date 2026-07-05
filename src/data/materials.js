export const MATERIAL_IMAGES = {
  sand: {
    src: '/sand.webp',
    alt: 'Construction sand supply',
  },
  stone: {
    src: '/blue-metal-250x250.webp',
    alt: 'Blue metal and crushed stone',
  },
  bricks: {
    src: '/bricks.webp',
    alt: 'Red clay bricks',
  },
}

export const MATERIALS = [
  {
    id: 'sand',
    title: 'Sand',
    tag: 'River & M-Sand',
    desc: 'Clean river sand and M-sand for concrete, plastering, and flooring — sold by truck or cubic feet with reliable quality.',
    ...MATERIAL_IMAGES.sand,
  },
  {
    id: 'stone',
    title: 'Stone',
    tag: 'Blue Metal & Gitti',
    desc: 'Blue metal, gitti, and crushed stone for foundations, road work, and concrete mix — graded and ready for site delivery.',
    ...MATERIAL_IMAGES.stone,
  },
  {
    id: 'bricks',
    title: 'Bricks',
    tag: 'Clay & Fly-Ash',
    desc: 'Red clay bricks and fly-ash bricks — uniform size, strong quality, and competitive rates for homes and commercial builds.',
    ...MATERIAL_IMAGES.bricks,
  },
]
