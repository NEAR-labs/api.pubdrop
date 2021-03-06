export const events = {
  'miami-mainnet': {
    network: 'mainnet',
    campaignId: 'miami-neardrop.near',
  },
  'miami-testnet': {
    network: 'testnet',
    campaignId: 'dev-1637570167698-74050947045323',
  },
  'newYork-mainnet': {
    network: 'mainnet',
    campaignId: 'nyc-neardrop.near',
  },
  'sf-mainnet': {
    network: 'mainnet',
    campaignId: 'sf-neardrop.near',
  },
  'hongbao-mainnet': {
    network: 'mainnet',
    campaignId: 'hongbao-neardrop.near',
  },
  'ethdenver-mainnet': {
    network: 'mainnet',
    campaignId: 'ethdenver-neardrop.near',
  },
  'brand-mainnet': {
    network: 'mainnet',
    campaignId: 'brand-neardrop.near',
  },
  'bermuda-mainnet': {
    network: 'mainnet',
    campaignId: 'bermuda-neardrop.near',
  }
};

export const getEvent = (event) => {
  const data = events[`${event}-${process.env.NETWORK}`];
  if (data) return data;
  throw new Error(`No event with such name: ${event}`);
};
