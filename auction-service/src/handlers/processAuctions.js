import { getEndedAuctions } from '../lib/getEndedAuctions';

async function processAuctions(event, context) {
  const auctionsToClose = await getEndedAuctions();
  console.log('auctionsToClose', auctionToClose);
}

export const handler = processAuctions;
