export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  badge: string;
  description: string;
  imageLabel: string;
};

export const categories = [
  { title: 'Apparel', description: 'Layering pieces and daily uniforms.' },
  { title: 'Bags', description: 'Structured carry for work and travel.' },
  { title: 'Objects', description: 'Useful accents with calm details.' },
  { title: 'Home', description: 'Soft goods for simple rooms.' },
];

export const featuredProducts: Product[] = [
  { id: '01', name: 'Linen overshirt', category: 'Apparel', price: '$86', badge: 'New', description: 'Washed cotton linen', imageLabel: '01' },
  { id: '02', name: 'Canvas tote', category: 'Bags', price: '$48', badge: 'Core', description: 'Heavyweight canvas', imageLabel: '02' },
  { id: '03', name: 'Ribbed tee', category: 'Apparel', price: '$34', badge: 'Soft', description: 'Organic cotton', imageLabel: '03' },
  { id: '04', name: 'Stone tray', category: 'Home', price: '$42', badge: 'Home', description: 'Matte ceramic', imageLabel: '04' },
  { id: '05', name: 'Wool cap', category: 'Apparel', price: '$28', badge: 'Cold', description: 'Warm knit blend', imageLabel: '05' },
  { id: '06', name: 'Cotton socks', category: 'Apparel', price: '$18', badge: 'Set', description: 'Two pair set', imageLabel: '06' },
  { id: '07', name: 'Desk bowl', category: 'Objects', price: '$36', badge: 'Gift', description: 'Glazed stoneware', imageLabel: '07' },
  { id: '08', name: 'Daily notebook', category: 'Paper', price: '$24', badge: 'Paper', description: 'Lay-flat binding', imageLabel: '08' },
];

export const allProducts: Product[] = [
  { id: '01', name: 'Linen overshirt', category: 'Apparel', price: '$86', badge: 'New', description: 'Washed cotton linen', imageLabel: '01' },
  { id: '02', name: 'Canvas tote', category: 'Bags', price: '$48', badge: 'Core', description: 'Heavyweight canvas', imageLabel: '02' },
  { id: '03', name: 'Ribbed tee', category: 'Apparel', price: '$34', badge: 'Sale', description: 'Organic cotton', imageLabel: '03' },
  { id: '04', name: 'Stone tray', category: 'Home', price: '$42', badge: 'Home', description: 'Matte ceramic', imageLabel: '04' },
  { id: '05', name: 'Wool cap', category: 'Apparel', price: '$28', badge: 'Cold', description: 'Warm knit blend', imageLabel: '05' },
  { id: '06', name: 'Cotton socks', category: 'Apparel', price: '$18', badge: 'Set', description: 'Two pair set', imageLabel: '06' },
  { id: '07', name: 'Desk bowl', category: 'Objects', price: '$36', badge: 'Gift', description: 'Glazed stoneware', imageLabel: '07' },
  { id: '08', name: 'Daily notebook', category: 'Paper', price: '$24', badge: 'Paper', description: 'Lay-flat binding', imageLabel: '08' },
  { id: '09', name: 'Cotton trouser', category: 'Apparel', price: '$92', badge: 'Core', description: 'Soft cotton twill', imageLabel: '09' },
  { id: '10', name: 'Market bag', category: 'Bags', price: '$56', badge: 'Carry', description: 'Reinforced straps', imageLabel: '10' },
  { id: '11', name: 'Glass cup', category: 'Home', price: '$22', badge: 'Clear', description: 'Stackable glassware', imageLabel: '11' },
  { id: '12', name: 'Waffle towel', category: 'Home', price: '$40', badge: 'Soft', description: 'Textured cotton towel', imageLabel: '12' },
];

export const relatedProducts = [
  allProducts[1],
  allProducts[2],
  allProducts[8],
  allProducts[4],
];

export const cartItems = [
  { name: 'Linen overshirt', variant: 'Black · M', qty: 1, price: '$86' },
  { name: 'Canvas tote', variant: 'Natural · One size', qty: 1, price: '$48' },
  { name: 'Cotton socks', variant: 'White · Set', qty: 2, price: '$36' },
];
