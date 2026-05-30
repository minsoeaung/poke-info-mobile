import Storage from 'expo-sqlite/kv-store';
import * as StoreReview from 'expo-store-review';

const LOOKUP_COUNT_KEY = 'pokemon_lookup_count';
const TRIGGER_COUNT = 20;
const REVIEW_REQUESTED_KEY = 'review_requested';

export const useReviewPrompt = () => {
    const checkAndRequest = async () => {
        const alreadyRequested = await Storage.getItem(REVIEW_REQUESTED_KEY);
        if (alreadyRequested) {
            console.log('Review already requested');
            return;
        }

        const raw = await Storage.getItem(LOOKUP_COUNT_KEY);
        const count = parseInt(raw ?? '0', 10) + 1;
        console.log('Look up count: ', count);
        await Storage.setItem(LOOKUP_COUNT_KEY, String(count));

        if (count === TRIGGER_COUNT) {
            const isAvailable = await StoreReview.isAvailableAsync();
            const hasAction = await StoreReview.hasAction();

            if (isAvailable && hasAction) {
                await StoreReview.requestReview();
                await Storage.setItem(REVIEW_REQUESTED_KEY, 'true');
            } else {
                console.log("Count exceeded but didn't trigger review.");
            }
        }
    };

    return { checkAndRequest };
};
