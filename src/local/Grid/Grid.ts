import type { Parts } from '@jumpstart/types/component';

// Base Classes
const ComponentColumnsDefault = 'grid';

const parts: Parts = {
  component: {
    columns: {
      'default': [ComponentColumnsDefault, 'grid-cols-12 w-full'],
    },
    gap: {
      'default': ['gap-4'],
    }
  }
}

export default parts;

