import { useContext } from 'react'
import { Context as LocationContext } from '../context/locationContext'
import { Context as TrackContext } from '../context/TrackContext';
import { navigate } from '../navigationRef';

export default () => {
    const { createTrack } = useContext(TrackContext);
    const { state: { trackName, locations }, reset } = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(trackName, locations);
        reset();
        navigate('TrackList');
    }

    return [saveTrack];
}
