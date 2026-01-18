import { societiesInfo } from './societiesInfo';
import { societiesDescription } from './societiesDescription';
import { societiesVision } from './societiesVision';
import { societiesMission } from './societiesMission';
import { societySlates } from './slate';
import { societyActivities } from './societiesActivities';
import { societyGallery } from './societiesGallery';

const societyIds = [
    'sps', 'grss', 'sysc', 'comsoc', 'embs', 'vts', 'cs',
    'ies', 'wie', 'ras', 'aess', 'ntc', 'edsoc', 'hkn'
];

export const societies = societyIds.map(id => {
    return {
        id,
        ...societiesInfo[id],
        description: societiesDescription[id],
        vision: societiesVision[id],
        mission: societiesMission[id],
        slate: societySlates[id] || { image: '', members: [] }, // Fallback structure if needed
        activities: societyActivities[id] || [],
        gallery: societyGallery[id] || []
    };
});
